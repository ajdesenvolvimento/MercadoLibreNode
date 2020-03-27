# MeliMarkeplaceSdk.ItemsApi

All URIs are relative to *https://api.mercadolibre.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**itemsIdGet**](ItemsApi.md#itemsIdGet) | **GET** /items/{id} | Return a Item.
[**itemsPost**](ItemsApi.md#itemsPost) | **POST** /items | Create a Item.



## itemsIdGet

> itemsIdGet(id)

Return a Item.

### Example

```javascript
import MeliMarkeplaceSdk from 'meli_markeplace_sdk';

let apiInstance = new MeliMarkeplaceSdk.ItemsApi();
let id = "id_example"; // String | 
apiInstance.itemsIdGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## itemsPost

> itemsPost(accessToken, item)

Create a Item.

### Example

```javascript
import MeliMarkeplaceSdk from 'meli_markeplace_sdk';
let defaultClient = MeliMarkeplaceSdk.ApiClient.instance;
// Configure OAuth2 access token for authorization: oAuth2AuthCode
let oAuth2AuthCode = defaultClient.authentications['oAuth2AuthCode'];
oAuth2AuthCode.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new MeliMarkeplaceSdk.ItemsApi();
let accessToken = "accessToken_example"; // String | 
let item = new MeliMarkeplaceSdk.Item(); // Item | 
apiInstance.itemsPost(accessToken, item, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accessToken** | **String**|  | 
 **item** | [**Item**](Item.md)|  | 

### Return type

null (empty response body)

### Authorization

[oAuth2AuthCode](../README.md#oAuth2AuthCode)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

