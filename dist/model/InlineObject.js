"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ItemsPictures = _interopRequireDefault(require("./ItemsPictures"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineObject model module.
 * @module model/InlineObject
 * @version 0.0.9
 */
var InlineObject = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject</code>.
   * @alias module:model/InlineObject
   */
  function InlineObject() {
    _classCallCheck(this, InlineObject);

    InlineObject.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject} obj Optional instance to populate.
     * @return {module:model/InlineObject} The populated <code>InlineObject</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject();

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'Number');
        }

        if (data.hasOwnProperty('category_id')) {
          obj['category_id'] = _ApiClient["default"].convertToType(data['category_id'], 'Number');
        }

        if (data.hasOwnProperty('price')) {
          obj['price'] = _ApiClient["default"].convertToType(data['price'], 'Number');
        }

        if (data.hasOwnProperty('currency_id')) {
          obj['currency_id'] = _ApiClient["default"].convertToType(data['currency_id'], 'String');
        }

        if (data.hasOwnProperty('available_quantity')) {
          obj['available_quantity'] = _ApiClient["default"].convertToType(data['available_quantity'], 'String');
        }

        if (data.hasOwnProperty('buying_mode')) {
          obj['buying_mode'] = _ApiClient["default"].convertToType(data['buying_mode'], 'String');
        }

        if (data.hasOwnProperty('listing_type_id')) {
          obj['listing_type_id'] = _ApiClient["default"].convertToType(data['listing_type_id'], 'String');
        }

        if (data.hasOwnProperty('condition')) {
          obj['condition'] = _ApiClient["default"].convertToType(data['condition'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('video_id')) {
          obj['video_id'] = _ApiClient["default"].convertToType(data['video_id'], 'String');
        }

        if (data.hasOwnProperty('warranty')) {
          obj['warranty'] = _ApiClient["default"].convertToType(data['warranty'], 'String');
        }

        if (data.hasOwnProperty('pictures')) {
          obj['pictures'] = _ApiClient["default"].convertToType(data['pictures'], [_ItemsPictures["default"]]);
        }
      }

      return obj;
    }
  }]);

  return InlineObject;
}();
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
var _default = InlineObject;
exports["default"] = _default;