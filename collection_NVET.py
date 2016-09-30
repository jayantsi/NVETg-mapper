import logging
import ee

#===========================================
#    NVET collection
#===========================================
def get_NVET_collection(variable, logger=None):
    """Return the Landsat 8 at-surface reflectance image collection

    Args:
        variable: string indicating the variable/band to return
            (NDVI, NDSI, NDWI, or EVI)
    Returns:
        EarthEngine image collection object
        String of the collection name
        String of the collection description
        String of the input variable
        String of additional notes about the collection
    """
    coll_name = 'users/vedagaya3/nv_asset'
    coll_desc = 'Nevada ET collection dataset'
    var_desc = variable
    if logger:
        ee_call = 'collection = ee.ImageCollection(' + coll_name + ')'
        logger.info('EE CALL: ' + ee_call)

    # Apply the Fmask cloud mask before renaming the bands
    # Rename bands to common band names
    collection = ee.ImageCollection('users/vedagaya3/nv_asset')
    #collection = collection.map(landsat8_sr_band_func)
    #collection = collection.map(landsat_fmask_cloud_mask_func)
    
    if variable == 'ET':
        notes = "EVI calculated from Near-IR, Red and Blue bands"
        collection = collection.map(landsat_nvet_func)
    elif variable == 'EVI':
        notes = "EVI calculated from Near-IR, Red and Blue bands"
        collection = collection.map(landsat_nvet_func)
    elif variable == 'ET *':
        notes = "EVI calculated from Near-IR, Red and Blue bands"
        collection = collection.map(landsat_nvet_func)
    elif variable == 'ET-UCI':
        notes = "EVI calculated from Near-IR, Red and Blue bands"
        collection = collection.map(landsat_nvet_func)
    elif variable == 'ET-LCI':
        notes = "EVI calculated from Near-IR, Red and Blue bands"
        collection = collection.map(landsat_nvet_func)
    elif variable == 'ETg':
        notes = "EVI calculated from Near-IR, Red and Blue bands"
        collection = collection.map(landsat_nvet_func)
    elif variable == 'ETg-UCI':
        notes = "EVI calculated from Near-IR, Red and Blue bands"
        collection = collection.map(landsat_nvet_func)
    elif variable == 'ETg-LCI':
        notes = "EVI calculated from Near-IR, Red and Blue bands"
        collection = collection.map(landsat_nvet_func)
    elif variable == 'PPT':
        notes = "EVI calculated from Near-IR, Red and Blue bands"
        collection = collection.map(landsat_ndwi_func)
    else:
        notes = ''
        collection = collection.select(variable)
    #if logger:
    #    ee_call = 'ee.ImageCollection(' + coll_name + ').select(' + variable + ')'
     #   logger.info('EE CALL: ' + ee_call)


    return collection, coll_name, coll_desc, var_desc, notes



#===========================================
#    LANDSAT FUNCTIONS
#===========================================
property_list = ['system:index', 'system:time_start', 'system:time_end']

def landsat_acca_cloud_mask_func(img):
    """Apply basic ACCA cloud mask to a daily Landsat TOA image

    For Landsat 8 images after Oct 31st, 2015, there is no LST data
        so simpleCloudScore returns a fully masked image
    This makes it appear as if there are no Landsat 8 TOA images/data
    If simpleCloudScore doesn't work, this function should not mask any values
        and instead return all pixels, even cloudy ones
    Use "unmask(0)" to set all masked pixels as cloud free
    This should have no impact on earlier Landsat TOA images and could be
        removed once the LST issue is resolved
    """
    cloud_mask = ee.Algorithms.Landsat.simpleCloudScore(img)\
        .select(['cloud']).unmask(0).lt(50)
    return img.updateMask(cloud_mask)


def landsat_fmask_cloud_mask_func(img):
    """Apply the Fmask band in the at-surface reflectance collections"""
    fmask = img.select('cfmask')
    # CLouds (4), shadows (2), and snow (3)
    cloud_mask = fmask.eq(2).Or(fmask.eq(3)).Or(fmask.eq(4))
    # cloud_mask = cloud_mask.Or(fmask.eq(1))  # Water
    # cloud_mask = cloud_mask.Or(
    #     fmask.eq(4).multiply(img.select('cfmask_conf').divide(3)))
    img = img.updateMask(cloud_mask.neq(1))
    return img


def landsat8_sr_band_func(img):
    """Rename Landsat 8 bands to common band names

    For now, don't include coastal, cirrus, or pan-chromatic
    Scale values by 10000
    """
    # ['B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9'],
    # ['coastal', 'blue', 'green', 'red', 'nir', 'swir1', 'swir2',
    #  'pan', 'cirrus'])
    sr_image = img.select(
        ['B2', 'B3', 'B4', 'B5', 'B6', 'B7'],
        ['blue', 'green', 'red', 'nir', 'swir1', 'swir2'])\
        .divide(10000.0)
    return ee.Image(sr_image).addBands(img.select('cfmask'))\
        .copyProperties(img, property_list)


def landsat_ndvi_func(img):
    """Calculate NDVI for a daily Landsat 4, 5, 7, or 8 image"""
    # Removed .clamp(-0.1, 1)
    return ee.Image(img)\
        .normalizedDifference(["nir", "red"]).select([0], ['NDVI'])\
        .copyProperties(img, property_list)

def landsat_ndwi_func(img):
    """Calculate NDWI (Gao 1996) for a daily Landsat 4, 5, 7, or 8 image

    Using Gao formulation to match existing EarthEngine Landsat and
        MODIS NDWI composites

    """
    # Removed .clamp(-0.1, 1)
    return ee.Image(img)
        #.normalizedDifference(["nir", "swir1"]).select([0], ['NDWI'])\
        #.copyProperties(img, property_list)

def landsat_nvet_func(img):
    """Calculate NVET collections image"""
    #evi = ee.Image(img).expression(
        #'(2.5 * (b("nir") - b("red"))) / ' +
        #'(b("nir") + 6 * b("red") - 7.5 * b("blue") + 1)')
    #return evi.select([0], ['EVI']).copyProperties(img, property_list)
    return ee.Image(img).select([0], ['EVI']).copyProperties(img, property_list)


def landsat_em_nb_func(ndvi, lai):
    """Calculate narrowband emissivity for a daily Landsat 4, 5, 7, or 8 image

    Initial values are for NDVI > 0 and LAI <= 3
    """
    return lai.divide(300).add(0.97).where(
        ndvi.lte(0), 0.99).where(ndvi.gt(0).And(lai.gt(3)), 0.98)



