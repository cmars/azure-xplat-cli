// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '53d9063d-87ae-4ea8-be90-3686c3b8669f',
    name: 'Visual Studio Ultimate with MSDN',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '6e606ece-3a5a-4674-a654-d6b02bc5a51b',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_ARM_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP'] = 'xplattestadlsrg01';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadls1783/providers/Microsoft.DataLakeStore/accounts/xplattestadls9354?api-version=2016-11-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.DataLakeStore/accounts/xplattestadls9354' under resource group 'xplattestadls1783' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'bc15c071-f4af-4669-809f-0d6fe3a6d08e',
  'x-ms-correlation-request-id': 'bc15c071-f4af-4669-809f-0d6fe3a6d08e',
  'x-ms-routing-request-id': 'WESTUS2:20161202T010551Z:bc15c071-f4af-4669-809f-0d6fe3a6d08e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 02 Dec 2016 01:05:51 GMT',
  connection: 'close',
  'content-length': '171' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadls1783/providers/Microsoft.DataLakeStore/accounts/xplattestadls9354?api-version=2016-11-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.DataLakeStore/accounts/xplattestadls9354' under resource group 'xplattestadls1783' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': 'bc15c071-f4af-4669-809f-0d6fe3a6d08e',
  'x-ms-correlation-request-id': 'bc15c071-f4af-4669-809f-0d6fe3a6d08e',
  'x-ms-routing-request-id': 'WESTUS2:20161202T010551Z:bc15c071-f4af-4669-809f-0d6fe3a6d08e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 02 Dec 2016 01:05:51 GMT',
  connection: 'close',
  'content-length': '171' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadls1783/providers/Microsoft.DataLakeStore/accounts/xplattestadls9354?api-version=2016-11-01', '*')
  .reply(409, "{\"error\":{\"code\":\"ResourceConflicted\",\"message\":\"Resource Name belongs to another resource.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '94',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '24a63c0d-b60c-4056-8173-dbf70f9b7873',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': 'e7ac1a6f-7ab2-4cc7-bce6-d9a864a5c717',
  'x-ms-routing-request-id': 'WESTUS2:20161202T010553Z:e7ac1a6f-7ab2-4cc7-bce6-d9a864a5c717',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 02 Dec 2016 01:05:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadls1783/providers/Microsoft.DataLakeStore/accounts/xplattestadls9354?api-version=2016-11-01', '*')
  .reply(409, "{\"error\":{\"code\":\"ResourceConflicted\",\"message\":\"Resource Name belongs to another resource.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '94',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '24a63c0d-b60c-4056-8173-dbf70f9b7873',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': 'e7ac1a6f-7ab2-4cc7-bce6-d9a864a5c717',
  'x-ms-routing-request-id': 'WESTUS2:20161202T010553Z:e7ac1a6f-7ab2-4cc7-bce6-d9a864a5c717',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 02 Dec 2016 01:05:52 GMT',
  connection: 'close' });
 return result; }]];