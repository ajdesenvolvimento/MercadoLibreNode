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


import ApiClient from "../ApiClient";
import Item from '../model/Item';

/**
* Items service.
* @module api/ItemsApi
* @version 0.0.9
*/
export default class ItemsApi {

    /**
    * Constructs a new ItemsApi. 
    * @alias module:api/ItemsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the itemsIdGet operation.
     * @callback module:api/ItemsApi~itemsIdGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Return a Item.
     * @param {String} id 
     * @param {module:api/ItemsApi~itemsIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    itemsIdGet(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling itemsIdGet");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/items/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the itemsPost operation.
     * @callback module:api/ItemsApi~itemsPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a Item.
     * @param {String} accessToken 
     * @param {module:model/Item} item 
     * @param {module:api/ItemsApi~itemsPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    itemsPost(accessToken, item, callback) {
      let postBody = item;
      // verify the required parameter 'accessToken' is set
      if (accessToken === undefined || accessToken === null) {
        throw new Error("Missing the required parameter 'accessToken' when calling itemsPost");
      }
      // verify the required parameter 'item' is set
      if (item === undefined || item === null) {
        throw new Error("Missing the required parameter 'item' when calling itemsPost");
      }

      let pathParams = {
      };
      let queryParams = {
        'access_token': accessToken
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['oAuth2AuthCode'];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/items', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
