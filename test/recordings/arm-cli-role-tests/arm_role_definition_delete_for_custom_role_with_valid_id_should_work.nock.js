// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '4004a9fd-d58e-48dc-aeb2-4a4aec58606f',
    name: 'Free Trial',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '1273adef-00a3-4086-a51a-dbcce1857d36',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_AD_TEST_USER_PRINCIPAL_NAME'] = 'testUserAuto@rbacCliTest.onmicrosoft.com';
  process.env['AZURE_AD_TEST_PASSWORD'] = 'Pa$$w0rd';
  process.env['AZURE_AD_TEST_GROUP_NAME'] = 'testgroupauto';
  process.env['AZURE_ARM_TEST_LOCATION'] = 'West US';
  process.env['AZURE_AD_TEST_SP_DISPLAY_NAME'] = 'mytestapprandomauto';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/52e13bbc-828f-4cd9-ac7b-173c40b04062?api-version=2015-07-01', '*')
  .reply(201, "{\"properties\":{\"roleName\":\"TestRole_0ee3b5ed-8d6b-434a-aaec-2aaba508c295\",\"type\":\"CustomRole\",\"description\":\"Custom Role Test Desc\",\"scope\":null,\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}],\"createdOn\":\"2015-09-17T03:43:36.0400661Z\",\"updatedOn\":\"2015-09-17T03:43:36.0400661Z\",\"createdBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\",\"updatedBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\"},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/52e13bbc-828f-4cd9-ac7b-173c40b04062\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"52e13bbc-828f-4cd9-ac7b-173c40b04062\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '751',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '6385b500-ea6b-4155-bb74-18c12b5b5cb4',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_3',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productiona; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'bdc040c4-3c56-4beb-9b11-bcdff27dab90',
  'x-ms-routing-request-id': 'WESTUS:20150917T034337Z:bdc040c4-3c56-4beb-9b11-bcdff27dab90',
  date: 'Thu, 17 Sep 2015 03:43:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/52e13bbc-828f-4cd9-ac7b-173c40b04062?api-version=2015-07-01', '*')
  .reply(201, "{\"properties\":{\"roleName\":\"TestRole_0ee3b5ed-8d6b-434a-aaec-2aaba508c295\",\"type\":\"CustomRole\",\"description\":\"Custom Role Test Desc\",\"scope\":null,\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}],\"createdOn\":\"2015-09-17T03:43:36.0400661Z\",\"updatedOn\":\"2015-09-17T03:43:36.0400661Z\",\"createdBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\",\"updatedBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\"},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/52e13bbc-828f-4cd9-ac7b-173c40b04062\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"52e13bbc-828f-4cd9-ac7b-173c40b04062\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '751',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '6385b500-ea6b-4155-bb74-18c12b5b5cb4',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_3',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productiona; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'bdc040c4-3c56-4beb-9b11-bcdff27dab90',
  'x-ms-routing-request-id': 'WESTUS:20150917T034337Z:bdc040c4-3c56-4beb-9b11-bcdff27dab90',
  date: 'Thu, 17 Sep 2015 03:43:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/52e13bbc-828f-4cd9-ac7b-173c40b04062?api-version=2015-07-01')
  .reply(200, "{\"properties\":{\"roleName\":\"TestRole_0ee3b5ed-8d6b-434a-aaec-2aaba508c295\",\"type\":\"CustomRole\",\"description\":\"Custom Role Test Desc\",\"scope\":null,\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}],\"createdOn\":\"2015-09-17T03:43:36.0400661Z\",\"updatedOn\":\"2015-09-17T03:43:36.0400661Z\",\"createdBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\",\"updatedBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\"},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/52e13bbc-828f-4cd9-ac7b-173c40b04062\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"52e13bbc-828f-4cd9-ac7b-173c40b04062\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '751',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'c0e91e23-7cfa-41eb-90a1-2835fbdaa226',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_2',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productiona; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '7d8d8ac9-cc89-4d37-98bc-278506337597',
  'x-ms-routing-request-id': 'WESTUS:20150917T034338Z:7d8d8ac9-cc89-4d37-98bc-278506337597',
  date: 'Thu, 17 Sep 2015 03:43:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/52e13bbc-828f-4cd9-ac7b-173c40b04062?api-version=2015-07-01')
  .reply(200, "{\"properties\":{\"roleName\":\"TestRole_0ee3b5ed-8d6b-434a-aaec-2aaba508c295\",\"type\":\"CustomRole\",\"description\":\"Custom Role Test Desc\",\"scope\":null,\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}],\"createdOn\":\"2015-09-17T03:43:36.0400661Z\",\"updatedOn\":\"2015-09-17T03:43:36.0400661Z\",\"createdBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\",\"updatedBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\"},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/52e13bbc-828f-4cd9-ac7b-173c40b04062\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"52e13bbc-828f-4cd9-ac7b-173c40b04062\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '751',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'c0e91e23-7cfa-41eb-90a1-2835fbdaa226',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_2',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productiona; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '7d8d8ac9-cc89-4d37-98bc-278506337597',
  'x-ms-routing-request-id': 'WESTUS:20150917T034338Z:7d8d8ac9-cc89-4d37-98bc-278506337597',
  date: 'Thu, 17 Sep 2015 03:43:37 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/52e13bbc-828f-4cd9-ac7b-173c40b04062?api-version=2015-07-01')
  .reply(200, "{\"properties\":{\"roleName\":\"TestRole_0ee3b5ed-8d6b-434a-aaec-2aaba508c295\",\"type\":\"CustomRole\",\"description\":\"Custom Role Test Desc\",\"scope\":null,\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}],\"createdOn\":\"2015-09-17T03:43:36.0400661Z\",\"updatedOn\":\"2015-09-17T03:43:36.0400661Z\",\"createdBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\",\"updatedBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\"},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/52e13bbc-828f-4cd9-ac7b-173c40b04062\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"52e13bbc-828f-4cd9-ac7b-173c40b04062\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '751',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'd47683bd-8263-4137-9920-c63c45740acb',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_2',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productiona; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'af9f5a82-3807-4835-a03d-4e7b5f267fed',
  'x-ms-routing-request-id': 'WESTUS:20150917T034339Z:af9f5a82-3807-4835-a03d-4e7b5f267fed',
  date: 'Thu, 17 Sep 2015 03:43:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/52e13bbc-828f-4cd9-ac7b-173c40b04062?api-version=2015-07-01')
  .reply(200, "{\"properties\":{\"roleName\":\"TestRole_0ee3b5ed-8d6b-434a-aaec-2aaba508c295\",\"type\":\"CustomRole\",\"description\":\"Custom Role Test Desc\",\"scope\":null,\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}],\"createdOn\":\"2015-09-17T03:43:36.0400661Z\",\"updatedOn\":\"2015-09-17T03:43:36.0400661Z\",\"createdBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\",\"updatedBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\"},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/52e13bbc-828f-4cd9-ac7b-173c40b04062\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"52e13bbc-828f-4cd9-ac7b-173c40b04062\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '751',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'd47683bd-8263-4137-9920-c63c45740acb',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_2',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productiona; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'af9f5a82-3807-4835-a03d-4e7b5f267fed',
  'x-ms-routing-request-id': 'WESTUS:20150917T034339Z:af9f5a82-3807-4835-a03d-4e7b5f267fed',
  date: 'Thu, 17 Sep 2015 03:43:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/52e13bbc-828f-4cd9-ac7b-173c40b04062?api-version=2015-07-01')
  .reply(404, "{\"error\":{\"code\":\"RoleDefinitionDoesNotExist\",\"message\":\"The specified role definition with ID '52e13bbc-828f-4cd9-ac7b-173c40b04062' does not exist.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '152',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '783879bc-3631-439a-b7e2-4f13e579d72a',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productiona; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14880',
  'x-ms-correlation-request-id': '61470057-2a5a-4814-b447-5c6039ae2a38',
  'x-ms-routing-request-id': 'WESTUS:20150917T034339Z:61470057-2a5a-4814-b447-5c6039ae2a38',
  date: 'Thu, 17 Sep 2015 03:43:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/52e13bbc-828f-4cd9-ac7b-173c40b04062?api-version=2015-07-01')
  .reply(404, "{\"error\":{\"code\":\"RoleDefinitionDoesNotExist\",\"message\":\"The specified role definition with ID '52e13bbc-828f-4cd9-ac7b-173c40b04062' does not exist.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '152',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '783879bc-3631-439a-b7e2-4f13e579d72a',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productiona; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14880',
  'x-ms-correlation-request-id': '61470057-2a5a-4814-b447-5c6039ae2a38',
  'x-ms-routing-request-id': 'WESTUS:20150917T034339Z:61470057-2a5a-4814-b447-5c6039ae2a38',
  date: 'Thu, 17 Sep 2015 03:43:38 GMT',
  connection: 'close' });
 return result; }]];
 exports.uuidsGenerated = function() { return ['0ee3b5ed-8d6b-434a-aaec-2aaba508c295','52e13bbc-828f-4cd9-ac7b-173c40b04062'];};