// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e55e7c87-7bdc-445b-8213-56cdfca27374',
    name: 'Free Trial',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: 'fc53715f-c87b-43fc-9876-78ef5139cf26',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'westeurope';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"test-vpn-gateway\",\r\n  \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway\",\r\n  \"etag\": \"W/\\\"26f1c319-c681-4a57-aef5-bc0032362e7b\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworkGateways\",\r\n  \"location\": \"westeurope\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"015fdd6b-1699-437e-b6ef-a87b2f3f8bd7\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"default-name\",\r\n        \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway/ipConfigurations/default-name\",\r\n        \"etag\": \"W/\\\"26f1c319-c681-4a57-aef5-bc0032362e7b\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/GatewaySubnet\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"sku\": {\r\n      \"name\": \"Standard\",\r\n      \"tier\": \"Standard\",\r\n      \"capacity\": 2\r\n    },\r\n    \"gatewayType\": \"Vpn\",\r\n    \"vpnType\": \"RouteBased\",\r\n    \"enableBgp\": false,\r\n    \"activeActive\": false,\r\n    \"vpnClientConfiguration\": {\r\n      \"vpnClientAddressPool\": {\r\n        \"addressPrefixes\": [\r\n          \"10.0.0.0/24\"\r\n        ]\r\n      },\r\n      \"vpnClientRootCertificates\": [],\r\n      \"vpnClientRevokedCertificates\": [],\r\n      \"vpnClientConnectionHealth\": {\r\n        \"vpnClientConnectionsCount\": 0,\r\n        \"allocatedIpAddresses\": [],\r\n        \"totalIngressBytesTransferred\": 0,\r\n        \"totalEgressBytesTransferred\": 0\r\n      }\r\n    },\r\n    \"bgpSettings\": {\r\n      \"asn\": 64999,\r\n      \"bgpPeeringAddress\": \"10.12.255.30\",\r\n      \"peerWeight\": 2\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2241',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'b82cb0c9-1e02-4971-874c-1161bcf218b8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': '2ce0a3cc-6854-4dcf-921b-e39430213b66',
  'x-ms-routing-request-id': 'WESTEUROPE:20170418T124458Z:2ce0a3cc-6854-4dcf-921b-e39430213b66',
  date: 'Tue, 18 Apr 2017 12:44:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"test-vpn-gateway\",\r\n  \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway\",\r\n  \"etag\": \"W/\\\"26f1c319-c681-4a57-aef5-bc0032362e7b\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworkGateways\",\r\n  \"location\": \"westeurope\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"015fdd6b-1699-437e-b6ef-a87b2f3f8bd7\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"default-name\",\r\n        \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway/ipConfigurations/default-name\",\r\n        \"etag\": \"W/\\\"26f1c319-c681-4a57-aef5-bc0032362e7b\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/GatewaySubnet\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"sku\": {\r\n      \"name\": \"Standard\",\r\n      \"tier\": \"Standard\",\r\n      \"capacity\": 2\r\n    },\r\n    \"gatewayType\": \"Vpn\",\r\n    \"vpnType\": \"RouteBased\",\r\n    \"enableBgp\": false,\r\n    \"activeActive\": false,\r\n    \"vpnClientConfiguration\": {\r\n      \"vpnClientAddressPool\": {\r\n        \"addressPrefixes\": [\r\n          \"10.0.0.0/24\"\r\n        ]\r\n      },\r\n      \"vpnClientRootCertificates\": [],\r\n      \"vpnClientRevokedCertificates\": [],\r\n      \"vpnClientConnectionHealth\": {\r\n        \"vpnClientConnectionsCount\": 0,\r\n        \"allocatedIpAddresses\": [],\r\n        \"totalIngressBytesTransferred\": 0,\r\n        \"totalEgressBytesTransferred\": 0\r\n      }\r\n    },\r\n    \"bgpSettings\": {\r\n      \"asn\": 64999,\r\n      \"bgpPeeringAddress\": \"10.12.255.30\",\r\n      \"peerWeight\": 2\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2241',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'b82cb0c9-1e02-4971-874c-1161bcf218b8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14990',
  'x-ms-correlation-request-id': '2ce0a3cc-6854-4dcf-921b-e39430213b66',
  'x-ms-routing-request-id': 'WESTEUROPE:20170418T124458Z:2ce0a3cc-6854-4dcf-921b-e39430213b66',
  date: 'Tue, 18 Apr 2017 12:44:57 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway?api-version=2017-03-01', '*')
  .reply(200, "{\r\n  \"name\": \"test-vpn-gateway\",\r\n  \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway\",\r\n  \"etag\": \"W/\\\"8c42d12a-9890-496f-825d-4c36d2021ea6\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworkGateways\",\r\n  \"location\": \"westeurope\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"015fdd6b-1699-437e-b6ef-a87b2f3f8bd7\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"default-name\",\r\n        \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway/ipConfigurations/default-name\",\r\n        \"etag\": \"W/\\\"8c42d12a-9890-496f-825d-4c36d2021ea6\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Updating\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/GatewaySubnet\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"sku\": {\r\n      \"name\": \"Standard\",\r\n      \"tier\": \"Standard\",\r\n      \"capacity\": 2\r\n    },\r\n    \"gatewayType\": \"Vpn\",\r\n    \"vpnType\": \"RouteBased\",\r\n    \"enableBgp\": false,\r\n    \"activeActive\": false,\r\n    \"vpnClientConfiguration\": {\r\n      \"vpnClientAddressPool\": {\r\n        \"addressPrefixes\": [\r\n          \"10.0.0.0/24\"\r\n        ]\r\n      },\r\n      \"vpnClientRootCertificates\": [],\r\n      \"vpnClientRevokedCertificates\": [\r\n        {\r\n          \"name\": \"test-revoked-cert\",\r\n          \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway/vpnClientRevokedCertificates/test-revoked-cert\",\r\n          \"etag\": \"W/\\\"8c42d12a-9890-496f-825d-4c36d2021ea6\\\"\",\r\n          \"properties\": {\r\n            \"provisioningState\": \"Updating\",\r\n            \"thumbprint\": \"633EBFFBD01B6049D51E3CF059CFD940C8CE5780\"\r\n          }\r\n        }\r\n      ]\r\n    },\r\n    \"bgpSettings\": {\r\n      \"asn\": 64999,\r\n      \"bgpPeeringAddress\": \"10.12.255.30\",\r\n      \"peerWeight\": 2\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2544',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '832a2121-add8-40fe-b08b-a3ffc69174b5',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/providers/Microsoft.Network/locations/westeurope/operations/832a2121-add8-40fe-b08b-a3ffc69174b5?api-version=2017-03-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'e614bc00-6133-493d-9d5c-d3d043b3c521',
  'x-ms-routing-request-id': 'WESTEUROPE:20170418T124459Z:e614bc00-6133-493d-9d5c-d3d043b3c521',
  date: 'Tue, 18 Apr 2017 12:44:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway?api-version=2017-03-01', '*')
  .reply(200, "{\r\n  \"name\": \"test-vpn-gateway\",\r\n  \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway\",\r\n  \"etag\": \"W/\\\"8c42d12a-9890-496f-825d-4c36d2021ea6\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworkGateways\",\r\n  \"location\": \"westeurope\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Updating\",\r\n    \"resourceGuid\": \"015fdd6b-1699-437e-b6ef-a87b2f3f8bd7\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"default-name\",\r\n        \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway/ipConfigurations/default-name\",\r\n        \"etag\": \"W/\\\"8c42d12a-9890-496f-825d-4c36d2021ea6\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Updating\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/GatewaySubnet\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"sku\": {\r\n      \"name\": \"Standard\",\r\n      \"tier\": \"Standard\",\r\n      \"capacity\": 2\r\n    },\r\n    \"gatewayType\": \"Vpn\",\r\n    \"vpnType\": \"RouteBased\",\r\n    \"enableBgp\": false,\r\n    \"activeActive\": false,\r\n    \"vpnClientConfiguration\": {\r\n      \"vpnClientAddressPool\": {\r\n        \"addressPrefixes\": [\r\n          \"10.0.0.0/24\"\r\n        ]\r\n      },\r\n      \"vpnClientRootCertificates\": [],\r\n      \"vpnClientRevokedCertificates\": [\r\n        {\r\n          \"name\": \"test-revoked-cert\",\r\n          \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway/vpnClientRevokedCertificates/test-revoked-cert\",\r\n          \"etag\": \"W/\\\"8c42d12a-9890-496f-825d-4c36d2021ea6\\\"\",\r\n          \"properties\": {\r\n            \"provisioningState\": \"Updating\",\r\n            \"thumbprint\": \"633EBFFBD01B6049D51E3CF059CFD940C8CE5780\"\r\n          }\r\n        }\r\n      ]\r\n    },\r\n    \"bgpSettings\": {\r\n      \"asn\": 64999,\r\n      \"bgpPeeringAddress\": \"10.12.255.30\",\r\n      \"peerWeight\": 2\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2544',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': '832a2121-add8-40fe-b08b-a3ffc69174b5',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/providers/Microsoft.Network/locations/westeurope/operations/832a2121-add8-40fe-b08b-a3ffc69174b5?api-version=2017-03-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'e614bc00-6133-493d-9d5c-d3d043b3c521',
  'x-ms-routing-request-id': 'WESTEUROPE:20170418T124459Z:e614bc00-6133-493d-9d5c-d3d043b3c521',
  date: 'Tue, 18 Apr 2017 12:44:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/providers/Microsoft.Network/locations/westeurope/operations/832a2121-add8-40fe-b08b-a3ffc69174b5?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e83390bf-6b32-4ee5-aace-c2ae72d359b5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '63271810-ce1f-4bda-996b-bfc97e213e0d',
  'x-ms-routing-request-id': 'WESTEUROPE:20170418T124529Z:63271810-ce1f-4bda-996b-bfc97e213e0d',
  date: 'Tue, 18 Apr 2017 12:45:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/providers/Microsoft.Network/locations/westeurope/operations/832a2121-add8-40fe-b08b-a3ffc69174b5?api-version=2017-03-01')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e83390bf-6b32-4ee5-aace-c2ae72d359b5',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14993',
  'x-ms-correlation-request-id': '63271810-ce1f-4bda-996b-bfc97e213e0d',
  'x-ms-routing-request-id': 'WESTEUROPE:20170418T124529Z:63271810-ce1f-4bda-996b-bfc97e213e0d',
  date: 'Tue, 18 Apr 2017 12:45:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"test-vpn-gateway\",\r\n  \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway\",\r\n  \"etag\": \"W/\\\"c47fe728-e739-4064-bc8b-5523b1335deb\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworkGateways\",\r\n  \"location\": \"westeurope\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"015fdd6b-1699-437e-b6ef-a87b2f3f8bd7\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"default-name\",\r\n        \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway/ipConfigurations/default-name\",\r\n        \"etag\": \"W/\\\"c47fe728-e739-4064-bc8b-5523b1335deb\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/GatewaySubnet\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"sku\": {\r\n      \"name\": \"Standard\",\r\n      \"tier\": \"Standard\",\r\n      \"capacity\": 2\r\n    },\r\n    \"gatewayType\": \"Vpn\",\r\n    \"vpnType\": \"RouteBased\",\r\n    \"enableBgp\": false,\r\n    \"activeActive\": false,\r\n    \"vpnClientConfiguration\": {\r\n      \"vpnClientAddressPool\": {\r\n        \"addressPrefixes\": [\r\n          \"10.0.0.0/24\"\r\n        ]\r\n      },\r\n      \"vpnClientRootCertificates\": [],\r\n      \"vpnClientRevokedCertificates\": [\r\n        {\r\n          \"name\": \"test-revoked-cert\",\r\n          \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway/vpnClientRevokedCertificates/test-revoked-cert\",\r\n          \"etag\": \"W/\\\"c47fe728-e739-4064-bc8b-5523b1335deb\\\"\",\r\n          \"properties\": {\r\n            \"provisioningState\": \"Succeeded\",\r\n            \"thumbprint\": \"633EBFFBD01B6049D51E3CF059CFD940C8CE5780\"\r\n          }\r\n        }\r\n      ],\r\n      \"vpnClientConnectionHealth\": {\r\n        \"vpnClientConnectionsCount\": 0,\r\n        \"allocatedIpAddresses\": [],\r\n        \"totalIngressBytesTransferred\": 0,\r\n        \"totalEgressBytesTransferred\": 0\r\n      }\r\n    },\r\n    \"bgpSettings\": {\r\n      \"asn\": 64999,\r\n      \"bgpPeeringAddress\": \"10.12.255.30\",\r\n      \"peerWeight\": 2\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2759',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f354840b-968c-4467-9d37-5e332d1ce061',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': '49a2a67b-9044-4e2a-a1b2-eaee4d92c04a',
  'x-ms-routing-request-id': 'WESTEUROPE:20170418T124530Z:49a2a67b-9044-4e2a-a1b2-eaee4d92c04a',
  date: 'Tue, 18 Apr 2017 12:45:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway?api-version=2017-03-01')
  .reply(200, "{\r\n  \"name\": \"test-vpn-gateway\",\r\n  \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway\",\r\n  \"etag\": \"W/\\\"c47fe728-e739-4064-bc8b-5523b1335deb\\\"\",\r\n  \"type\": \"Microsoft.Network/virtualNetworkGateways\",\r\n  \"location\": \"westeurope\",\r\n  \"tags\": {\r\n    \"tag1\": \"aaa\",\r\n    \"tag2\": \"bbb\",\r\n    \"tag3\": \"ccc\"\r\n  },\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"015fdd6b-1699-437e-b6ef-a87b2f3f8bd7\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"default-name\",\r\n        \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway/ipConfigurations/default-name\",\r\n        \"etag\": \"W/\\\"c47fe728-e739-4064-bc8b-5523b1335deb\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAllocationMethod\": \"Dynamic\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/publicIPAddresses/test-ip\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/GatewaySubnet\"\r\n          }\r\n        }\r\n      }\r\n    ],\r\n    \"sku\": {\r\n      \"name\": \"Standard\",\r\n      \"tier\": \"Standard\",\r\n      \"capacity\": 2\r\n    },\r\n    \"gatewayType\": \"Vpn\",\r\n    \"vpnType\": \"RouteBased\",\r\n    \"enableBgp\": false,\r\n    \"activeActive\": false,\r\n    \"vpnClientConfiguration\": {\r\n      \"vpnClientAddressPool\": {\r\n        \"addressPrefixes\": [\r\n          \"10.0.0.0/24\"\r\n        ]\r\n      },\r\n      \"vpnClientRootCertificates\": [],\r\n      \"vpnClientRevokedCertificates\": [\r\n        {\r\n          \"name\": \"test-revoked-cert\",\r\n          \"id\": \"/subscriptions/e55e7c87-7bdc-445b-8213-56cdfca27374/resourceGroups/xplat-test-vpn-gateway1/providers/Microsoft.Network/virtualNetworkGateways/test-vpn-gateway/vpnClientRevokedCertificates/test-revoked-cert\",\r\n          \"etag\": \"W/\\\"c47fe728-e739-4064-bc8b-5523b1335deb\\\"\",\r\n          \"properties\": {\r\n            \"provisioningState\": \"Succeeded\",\r\n            \"thumbprint\": \"633EBFFBD01B6049D51E3CF059CFD940C8CE5780\"\r\n          }\r\n        }\r\n      ],\r\n      \"vpnClientConnectionHealth\": {\r\n        \"vpnClientConnectionsCount\": 0,\r\n        \"allocatedIpAddresses\": [],\r\n        \"totalIngressBytesTransferred\": 0,\r\n        \"totalEgressBytesTransferred\": 0\r\n      }\r\n    },\r\n    \"bgpSettings\": {\r\n      \"asn\": 64999,\r\n      \"bgpPeeringAddress\": \"10.12.255.30\",\r\n      \"peerWeight\": 2\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2759',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'f354840b-968c-4467-9d37-5e332d1ce061',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14991',
  'x-ms-correlation-request-id': '49a2a67b-9044-4e2a-a1b2-eaee4d92c04a',
  'x-ms-routing-request-id': 'WESTEUROPE:20170418T124530Z:49a2a67b-9044-4e2a-a1b2-eaee4d92c04a',
  date: 'Tue, 18 Apr 2017 12:45:29 GMT',
  connection: 'close' });
 return result; }]];
