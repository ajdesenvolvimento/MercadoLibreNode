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


import ApiClient from './ApiClient';
import Item from './model/Item';
import ItemPictures from './model/ItemPictures';
import Token from './model/Token';
import ItemsApi from './api/ItemsApi';
import OAuth20Api from './api/OAuth20Api';


/**
* This_is_a_the_codebase_to_generate_a_SDK_for_Open_Platform_Marketplace.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var MeliMarkeplaceSdk = require('index'); // See note below*.
* var xxxSvc = new MeliMarkeplaceSdk.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new MeliMarkeplaceSdk.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new MeliMarkeplaceSdk.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new MeliMarkeplaceSdk.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 0.0.9
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Item model constructor.
     * @property {module:model/Item}
     */
    Item,

    /**
     * The ItemPictures model constructor.
     * @property {module:model/ItemPictures}
     */
    ItemPictures,

    /**
     * The Token model constructor.
     * @property {module:model/Token}
     */
    Token,

    /**
    * The ItemsApi service constructor.
    * @property {module:api/ItemsApi}
    */
    ItemsApi,

    /**
    * The OAuth20Api service constructor.
    * @property {module:api/OAuth20Api}
    */
    OAuth20Api
};
