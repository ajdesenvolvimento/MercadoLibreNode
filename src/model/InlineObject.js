/**
 * MELI Markeplace SDK
 * This is a the codebase to generate a SDK for Open Platform Marketplace
 *
 * The version of the OpenAPI document: 0.0.9
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ItemsPictures from './ItemsPictures';

/**
 * The InlineObject model module.
 * @module model/InlineObject
 * @version 0.0.9
 */
class InlineObject {
    /**
     * Constructs a new <code>InlineObject</code>.
     * @alias module:model/InlineObject
     */
    constructor() { 
        
        InlineObject.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineObject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject} obj Optional instance to populate.
     * @return {module:model/InlineObject} The populated <code>InlineObject</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject();

            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'Number');
            }
            if (data.hasOwnProperty('category_id')) {
                obj['category_id'] = ApiClient.convertToType(data['category_id'], 'Number');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number');
            }
            if (data.hasOwnProperty('currency_id')) {
                obj['currency_id'] = ApiClient.convertToType(data['currency_id'], 'String');
            }
            if (data.hasOwnProperty('available_quantity')) {
                obj['available_quantity'] = ApiClient.convertToType(data['available_quantity'], 'String');
            }
            if (data.hasOwnProperty('buying_mode')) {
                obj['buying_mode'] = ApiClient.convertToType(data['buying_mode'], 'String');
            }
            if (data.hasOwnProperty('listing_type_id')) {
                obj['listing_type_id'] = ApiClient.convertToType(data['listing_type_id'], 'String');
            }
            if (data.hasOwnProperty('condition')) {
                obj['condition'] = ApiClient.convertToType(data['condition'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('video_id')) {
                obj['video_id'] = ApiClient.convertToType(data['video_id'], 'String');
            }
            if (data.hasOwnProperty('warranty')) {
                obj['warranty'] = ApiClient.convertToType(data['warranty'], 'String');
            }
            if (data.hasOwnProperty('pictures')) {
                obj['pictures'] = ApiClient.convertToType(data['pictures'], [ItemsPictures]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} title
 */
InlineObject.prototype['title'] = undefined;

/**
 * @member {Number} category_id
 */
InlineObject.prototype['category_id'] = undefined;

/**
 * @member {Number} price
 */
InlineObject.prototype['price'] = undefined;

/**
 * @member {String} currency_id
 */
InlineObject.prototype['currency_id'] = undefined;

/**
 * @member {String} available_quantity
 */
InlineObject.prototype['available_quantity'] = undefined;

/**
 * @member {String} buying_mode
 */
InlineObject.prototype['buying_mode'] = undefined;

/**
 * @member {String} listing_type_id
 */
InlineObject.prototype['listing_type_id'] = undefined;

/**
 * @member {String} condition
 */
InlineObject.prototype['condition'] = undefined;

/**
 * @member {String} description
 */
InlineObject.prototype['description'] = undefined;

/**
 * @member {String} video_id
 */
InlineObject.prototype['video_id'] = undefined;

/**
 * @member {String} warranty
 */
InlineObject.prototype['warranty'] = undefined;

/**
 * @member {Array.<module:model/ItemsPictures>} pictures
 */
InlineObject.prototype['pictures'] = undefined;






export default InlineObject;

