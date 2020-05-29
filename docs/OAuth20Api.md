# meli.OAuth20Api

All URIs are relative to *https://api.mercadolibre.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**auth**](OAuth20Api.md#auth) | **GET** /authorization | Authentication Endpoint
[**getToken**](OAuth20Api.md#getToken) | **POST** /oauth/token | Request Access Token



## auth

> auth(responseType, clientId, redirectUri)

Authentication Endpoint

### Example

```javascript
import meli from 'mercadolibre-nodejs-sdk';

let apiInstance = new meli.OAuth20Api();
let responseType = "'code'"; // String | 
let clientId = "clientId_example"; // String | 
let redirectUri = "redirectUri_example"; // String | 
apiInstance.auth(responseType, clientId, redirectUri, (error, data, response) => {
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
 **responseType** | **String**|  | [default to &#39;code&#39;]
 **clientId** | **String**|  | 
 **redirectUri** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getToken

> Token getToken(grantType, clientId, clientSecret, redirectUri, opts)

Request Access Token

Partner makes a request to the token endpoint by adding the following parameters described below

### Example

```javascript
import meli from 'mercadolibre-nodejs-sdk';

let apiInstance = new meli.OAuth20Api();
let grantType = "'authorization_code'"; // String | Value MUST be set to \"authorization_code\"
let clientId = "clientId_example"; // String | 
let clientSecret = "clientSecret_example"; // String | 
let redirectUri = "redirectUri_example"; // String | 
let opts = {
  'code': "code_example", // String | The code received in the query string when redirected from authorization page 
  'refreshToken': "refreshToken_example" // String | The refresh_token received in the query string when redirected from authorization page 
};
apiInstance.getToken(grantType, clientId, clientSecret, redirectUri, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **grantType** | **String**| Value MUST be set to \&quot;authorization_code\&quot; | [default to &#39;authorization_code&#39;]
 **clientId** | **String**|  | 
 **clientSecret** | **String**|  | 
 **redirectUri** | **String**|  | 
 **code** | **String**| The code received in the query string when redirected from authorization page  | [optional] 
 **refreshToken** | **String**| The refresh_token received in the query string when redirected from authorization page  | [optional] 

### Return type

[**Token**](Token.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

