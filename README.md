<h1 align="center">
  <a href="http://developers.mercadolibre.com/es/">
    <img src="https://user-images.githubusercontent.com/1153516/29861072-689ec57e-8d3e-11e7-8368-dd923543258f.jpg" alt="Mercado Libre Developers" width="230"></a>
  </a>
  <br>
  MercadoLibre's Node.js SDK
  <br>
</h1>

<h4 align="center">This is the official Node.js SDK for MercadoLibre's Platform.<span>[Beta]</span></h4>


## Installation

### For [Node.js](https://nodejs.org/)

#### npm

Then install it via:

```shell
npm install mercadolibre-nodejs-sdk --save
```


## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var meli = require('mercadolibre-nodejs-sdk');


var api = new meli.CategoriesApi()
var categoryId = "categoryId_example"; // {String} 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.categoriesCategoryIdGet(categoryId, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.mercadolibre.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*meli.CategoriesApi* | [**categoriesCategoryIdGet**](docs/CategoriesApi.md#categoriesCategoryIdGet) | **GET** /categories/{category_id} | Return by category.
*meli.CategoriesApi* | [**sitesSiteIdCategoriesGet**](docs/CategoriesApi.md#sitesSiteIdCategoriesGet) | **GET** /sites/{site_id}/categories | Return a categories by site.
*meli.CategoriesApi* | [**sitesSiteIdDomainDiscoverySearchGet**](docs/CategoriesApi.md#sitesSiteIdDomainDiscoverySearchGet) | **GET** /sites/{site_id}/domain_discovery/search | Predictor
*meli.ItemsApi* | [**itemsIdGet**](docs/ItemsApi.md#itemsIdGet) | **GET** /items/{id} | Return a Item.
*meli.ItemsApi* | [**itemsIdPut**](docs/ItemsApi.md#itemsIdPut) | **PUT** /items/{id} | Update a Item.
*meli.ItemsApi* | [**itemsPost**](docs/ItemsApi.md#itemsPost) | **POST** /items | Create a Item.
*meli.ItemsHealthApi* | [**itemsIdHealthActionsGet**](docs/ItemsHealthApi.md#itemsIdHealthActionsGet) | **GET** /items/{id}/health/actions | Return item health actions by id.
*meli.ItemsHealthApi* | [**itemsIdHealthGet**](docs/ItemsHealthApi.md#itemsIdHealthGet) | **GET** /items/{id}/health | Return health by id.
*meli.ItemsHealthApi* | [**sitesSiteIdHealthLevelsGet**](docs/ItemsHealthApi.md#sitesSiteIdHealthLevelsGet) | **GET** /sites/{site_id}/health_levels | Return health levels.
*meli.OAuth20Api* | [**auth**](docs/OAuth20Api.md#auth) | **GET** /authorization | Authentication Endpoint
*meli.OAuth20Api* | [**getToken**](docs/OAuth20Api.md#getToken) | **POST** /oauth/token | Request Access Token


## Documentation for Models

 - [meli.Attributes](docs/Attributes.md)
 - [meli.AttributesValueStruct](docs/AttributesValueStruct.md)
 - [meli.AttributesValues](docs/AttributesValues.md)
 - [meli.Item](docs/Item.md)
 - [meli.ItemPictures](docs/ItemPictures.md)
 - [meli.Token](docs/Token.md)
 - [meli.Variations](docs/Variations.md)
 - [meli.VariationsAttributeCombinations](docs/VariationsAttributeCombinations.md)


## Documentation for Authorization



### oAuth2AuthCode


- **Type**: OAuth
- **Flow**: accessCode
- **Authorization URL**: https://auth.mercadolibre.com.ar/authorization
- **Scopes**: 
  - read: Grants read access
  - write: Grants write access
  - offline_access: Grants read and write access, and adds the possibility to get a refresh token and stay authenticated as the user.
