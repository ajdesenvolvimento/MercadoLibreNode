"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Token = _interopRequireDefault(require("../model/Token"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* OAuth20 service.
* @module api/OAuth20Api
* @version 0.0.9
*/
var OAuth20Api = /*#__PURE__*/function () {
  /**
  * Constructs a new OAuth20Api. 
  * @alias module:api/OAuth20Api
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function OAuth20Api(apiClient) {
    _classCallCheck(this, OAuth20Api);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the auth operation.
   * @callback module:api/OAuth20Api~authCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Authentication Endpoint
   * @param {module:model/String} responseType 
   * @param {String} clientId 
   * @param {String} redirectUri 
   * @param {module:api/OAuth20Api~authCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(OAuth20Api, [{
    key: "auth",
    value: function auth(responseType, clientId, redirectUri, callback) {
      var postBody = null; // verify the required parameter 'responseType' is set

      if (responseType === undefined || responseType === null) {
        throw new Error("Missing the required parameter 'responseType' when calling auth");
      } // verify the required parameter 'clientId' is set


      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling auth");
      } // verify the required parameter 'redirectUri' is set


      if (redirectUri === undefined || redirectUri === null) {
        throw new Error("Missing the required parameter 'redirectUri' when calling auth");
      }

      var pathParams = {};
      var queryParams = {
        'response_type': responseType,
        'client_id': clientId,
        'redirect_uri': redirectUri
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi('/authorization', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the getToken operation.
     * @callback module:api/OAuth20Api~getTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Token} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Request Access Token
     * Partner makes a request to the token endpoint by adding the following parameters described below
     * @param {module:model/String} grantType Value MUST be set to \"authorization_code\"
     * @param {String} clientId 
     * @param {String} clientSecret 
     * @param {String} redirectUri 
     * @param {String} code The code received in the query string when redirected from authorization page 
     * @param {module:api/OAuth20Api~getTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Token}
     */

  }, {
    key: "getToken",
    value: function getToken(grantType, clientId, clientSecret, redirectUri, code, callback) {
      var postBody = null; // verify the required parameter 'grantType' is set

      if (grantType === undefined || grantType === null) {
        throw new Error("Missing the required parameter 'grantType' when calling getToken");
      } // verify the required parameter 'clientId' is set


      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling getToken");
      } // verify the required parameter 'clientSecret' is set


      if (clientSecret === undefined || clientSecret === null) {
        throw new Error("Missing the required parameter 'clientSecret' when calling getToken");
      } // verify the required parameter 'redirectUri' is set


      if (redirectUri === undefined || redirectUri === null) {
        throw new Error("Missing the required parameter 'redirectUri' when calling getToken");
      } // verify the required parameter 'code' is set


      if (code === undefined || code === null) {
        throw new Error("Missing the required parameter 'code' when calling getToken");
      }

      var pathParams = {};
      var queryParams = {
        'grant_type': grantType,
        'client_id': clientId,
        'client_secret': clientSecret,
        'redirect_uri': redirectUri,
        'code': code
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Token["default"];
      return this.apiClient.callApi('/oauth/token', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return OAuth20Api;
}();

exports["default"] = OAuth20Api;