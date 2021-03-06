// This file has been autogenerated.

exports.scopes = [[function (nock) { 
var result = 
nock('https://ciserversdk.table.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/Tables', '*')
  .reply(201, "<?xml version=\"1.0\" encoding=\"utf-8\" standalone=\"yes\"?>\r\n<entry xml:base=\"https://ciserversdk.table.core.windows.net/\" xmlns:d=\"http://schemas.microsoft.com/ado/2007/08/dataservices\" xmlns:m=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\" xmlns=\"http://www.w3.org/2005/Atom\">\r\n  <id>https://ciserversdk.table.core.windows.net/Tables('expretry1')</id>\r\n  <title type=\"text\"></title>\r\n  <updated>2013-03-19T19:10:06Z</updated>\r\n  <author>\r\n    <name />\r\n  </author>\r\n  <link rel=\"edit\" title=\"Tables\" href=\"Tables('expretry1')\" />\r\n  <category term=\"ciserversdk.Tables\" scheme=\"http://schemas.microsoft.com/ado/2007/08/dataservices/scheme\" />\r\n  <content type=\"application/xml\">\r\n    <m:properties>\r\n      <d:TableName>expretry1</d:TableName>\r\n    </m:properties>\r\n  </content>\r\n</entry>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/atom+xml;charset=utf-8',
  location: 'https://ciserversdk.table.core.windows.net/Tables(\'expretry1\')',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '5efb0027-fae6-4af1-9d9a-e5baf5a3bafd',
  'x-ms-version': '2011-08-18',
  date: 'Tue, 19 Mar 2013 19:10:05 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://ciserversdk.table.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/Tables', '*')
  .reply(409, "<?xml version=\"1.0\" encoding=\"utf-8\" standalone=\"yes\"?>\r\n<error xmlns=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\">\r\n  <code>TableAlreadyExists</code>\r\n  <message xml:lang=\"en-US\">The table specified already exists.\nRequestId:861ac7e6-0d9d-4184-b7c6-e443231a4b21\nTime:2013-03-19T19:10:07.0399745Z</message>\r\n</error>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '861ac7e6-0d9d-4184-b7c6-e443231a4b21',
  'x-ms-version': '2011-08-18',
  date: 'Tue, 19 Mar 2013 19:10:06 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://ciserversdk.table.core.windows.net:443')
  .get('/Tables')
  .reply(200, "<?xml version=\"1.0\" encoding=\"utf-8\" standalone=\"yes\"?>\r\n<feed xml:base=\"https://ciserversdk.table.core.windows.net/\" xmlns:d=\"http://schemas.microsoft.com/ado/2007/08/dataservices\" xmlns:m=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\" xmlns=\"http://www.w3.org/2005/Atom\">\r\n  <title type=\"text\">Tables</title>\r\n  <id>https://ciserversdk.table.core.windows.net/Tables</id>\r\n  <updated>2013-03-19T19:10:07Z</updated>\r\n  <link rel=\"self\" title=\"Tables\" href=\"Tables\" />\r\n  <entry>\r\n    <id>https://ciserversdk.table.core.windows.net/Tables('expretry1')</id>\r\n    <title type=\"text\"></title>\r\n    <updated>2013-03-19T19:10:07Z</updated>\r\n    <author>\r\n      <name />\r\n    </author>\r\n    <link rel=\"edit\" title=\"Tables\" href=\"Tables('expretry1')\" />\r\n    <category term=\"ciserversdk.Tables\" scheme=\"http://schemas.microsoft.com/ado/2007/08/dataservices/scheme\" />\r\n    <content type=\"application/xml\">\r\n      <m:properties>\r\n        <d:TableName>expretry1</d:TableName>\r\n      </m:properties>\r\n    </content>\r\n  </entry>\r\n</feed>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/atom+xml;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'ba835945-ee20-4fb4-9b34-be9c156a9ac5',
  'x-ms-version': '2011-08-18',
  date: 'Tue, 19 Mar 2013 19:10:07 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://ciserversdk.table.core.windows.net:443')
  .delete('/Tables(%27expretry1%27)')
  .reply(204, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '321b9ee9-e8a8-4c49-baf0-66f9f84c4dab',
  'x-ms-version': '2011-08-18',
  date: 'Tue, 19 Mar 2013 19:10:10 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://ciserversdk.table.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/Tables', '*')
  .reply(201, "<?xml version=\"1.0\" encoding=\"utf-8\" standalone=\"yes\"?>\r\n<entry xml:base=\"https://ciserversdk.table.core.windows.net/\" xmlns:d=\"http://schemas.microsoft.com/ado/2007/08/dataservices\" xmlns:m=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\" xmlns=\"http://www.w3.org/2005/Atom\">\r\n  <id>https://ciserversdk.table.core.windows.net/Tables('expretry2')</id>\r\n  <title type=\"text\"></title>\r\n  <updated>2013-03-19T19:10:10Z</updated>\r\n  <author>\r\n    <name />\r\n  </author>\r\n  <link rel=\"edit\" title=\"Tables\" href=\"Tables('expretry2')\" />\r\n  <category term=\"ciserversdk.Tables\" scheme=\"http://schemas.microsoft.com/ado/2007/08/dataservices/scheme\" />\r\n  <content type=\"application/xml\">\r\n    <m:properties>\r\n      <d:TableName>expretry2</d:TableName>\r\n    </m:properties>\r\n  </content>\r\n</entry>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/atom+xml;charset=utf-8',
  location: 'https://ciserversdk.table.core.windows.net/Tables(\'expretry2\')',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '8c1e1a28-4c32-4cd0-bd1c-53b5042034a8',
  'x-ms-version': '2011-08-18',
  date: 'Tue, 19 Mar 2013 19:10:10 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://ciserversdk.table.core.windows.net:443')
  .delete('/Tables(%27expretry2%27)')
  .reply(204, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '574bf296-557e-4954-b4a2-4195168381db',
  'x-ms-version': '2011-08-18',
  date: 'Tue, 19 Mar 2013 19:10:11 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://ciserversdk.table.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/Tables', '*')
  .reply(409, "<?xml version=\"1.0\" encoding=\"utf-8\" standalone=\"yes\"?>\r\n<error xmlns=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\">\r\n  <code>TableBeingDeleted</code>\r\n  <message xml:lang=\"en-US\">The specified table is being deleted. Try operation later.\nRequestId:ccbd7d69-2b7b-4467-8079-ea463fe35db1\nTime:2013-03-19T19:10:14.4680309Z</message>\r\n</error>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'ccbd7d69-2b7b-4467-8079-ea463fe35db1',
  'x-ms-version': '2011-08-18',
  date: 'Tue, 19 Mar 2013 19:10:13 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://ciserversdk.table.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/Tables', '*')
  .reply(201, "<?xml version=\"1.0\" encoding=\"utf-8\" standalone=\"yes\"?>\r\n<entry xml:base=\"https://ciserversdk.table.core.windows.net/\" xmlns:d=\"http://schemas.microsoft.com/ado/2007/08/dataservices\" xmlns:m=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\" xmlns=\"http://www.w3.org/2005/Atom\">\r\n  <id>https://ciserversdk.table.core.windows.net/Tables('expretry2')</id>\r\n  <title type=\"text\"></title>\r\n  <updated>2013-03-19T19:10:46Z</updated>\r\n  <author>\r\n    <name />\r\n  </author>\r\n  <link rel=\"edit\" title=\"Tables\" href=\"Tables('expretry2')\" />\r\n  <category term=\"ciserversdk.Tables\" scheme=\"http://schemas.microsoft.com/ado/2007/08/dataservices/scheme\" />\r\n  <content type=\"application/xml\">\r\n    <m:properties>\r\n      <d:TableName>expretry2</d:TableName>\r\n    </m:properties>\r\n  </content>\r\n</entry>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/atom+xml;charset=utf-8',
  location: 'https://ciserversdk.table.core.windows.net/Tables(\'expretry2\')',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'd410e492-c6f6-4378-9136-c1408e867d64',
  'x-ms-version': '2011-08-18',
  date: 'Tue, 19 Mar 2013 19:10:45 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://ciserversdk.table.core.windows.net:443')
  .get('/Tables')
  .reply(200, "<?xml version=\"1.0\" encoding=\"utf-8\" standalone=\"yes\"?>\r\n<feed xml:base=\"https://ciserversdk.table.core.windows.net/\" xmlns:d=\"http://schemas.microsoft.com/ado/2007/08/dataservices\" xmlns:m=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\" xmlns=\"http://www.w3.org/2005/Atom\">\r\n  <title type=\"text\">Tables</title>\r\n  <id>https://ciserversdk.table.core.windows.net/Tables</id>\r\n  <updated>2013-03-19T19:10:47Z</updated>\r\n  <link rel=\"self\" title=\"Tables\" href=\"Tables\" />\r\n  <entry>\r\n    <id>https://ciserversdk.table.core.windows.net/Tables('expretry2')</id>\r\n    <title type=\"text\"></title>\r\n    <updated>2013-03-19T19:10:47Z</updated>\r\n    <author>\r\n      <name />\r\n    </author>\r\n    <link rel=\"edit\" title=\"Tables\" href=\"Tables('expretry2')\" />\r\n    <category term=\"ciserversdk.Tables\" scheme=\"http://schemas.microsoft.com/ado/2007/08/dataservices/scheme\" />\r\n    <content type=\"application/xml\">\r\n      <m:properties>\r\n        <d:TableName>expretry2</d:TableName>\r\n      </m:properties>\r\n    </content>\r\n  </entry>\r\n</feed>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/atom+xml;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'b64c7a6e-1c9a-4a02-bab1-5d8dfcb1f252',
  'x-ms-version': '2011-08-18',
  date: 'Tue, 19 Mar 2013 19:10:46 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://ciserversdk.table.core.windows.net:443')
  .delete('/Tables(%27expretry2%27)')
  .reply(204, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '57ed48e4-ef98-49c0-8d6d-281887c41f3b',
  'x-ms-version': '2011-08-18',
  date: 'Tue, 19 Mar 2013 19:10:47 GMT' });
 return result; }],
[function (nock) { 
var result = 
nock('https://ciserversdk.table.core.windows.net:443')
  .get('/Tables(%27expretry3%27)')
  .reply(404, "<?xml version=\"1.0\" encoding=\"utf-8\" standalone=\"yes\"?>\r\n<error xmlns=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\">\r\n  <code>ResourceNotFound</code>\r\n  <message xml:lang=\"en-US\">The specified resource does not exist.\nRequestId:2021f114-998b-498e-a551-3ac335841fe8\nTime:2013-03-19T19:10:48.2624054Z</message>\r\n</error>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/atom+xml',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '2021f114-998b-498e-a551-3ac335841fe8',
  'x-ms-version': '2011-08-18',
  date: 'Tue, 19 Mar 2013 19:10:47 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://ciserversdk.table.core.windows.net:443')
  .get('/Tables(%27expretry3%27)')
  .reply(404, "<?xml version=\"1.0\" encoding=\"utf-8\" standalone=\"yes\"?>\r\n<error xmlns=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\">\r\n  <code>ResourceNotFound</code>\r\n  <message xml:lang=\"en-US\">The specified resource does not exist.\nRequestId:d8ada910-d683-4c04-81a6-7a7c6f2c1719\nTime:2013-03-19T19:10:53.3578962Z</message>\r\n</error>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/atom+xml',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': 'd8ada910-d683-4c04-81a6-7a7c6f2c1719',
  'x-ms-version': '2011-08-18',
  date: 'Tue, 19 Mar 2013 19:10:52 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://ciserversdk.table.core.windows.net:443')
  .get('/Tables(%27expretry3%27)')
  .reply(404, "<?xml version=\"1.0\" encoding=\"utf-8\" standalone=\"yes\"?>\r\n<error xmlns=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\">\r\n  <code>ResourceNotFound</code>\r\n  <message xml:lang=\"en-US\">The specified resource does not exist.\nRequestId:593f5f91-4ccd-47dc-aea0-3b5034572994\nTime:2013-03-19T19:10:58.5198548Z</message>\r\n</error>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/atom+xml',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '593f5f91-4ccd-47dc-aea0-3b5034572994',
  'x-ms-version': '2011-08-18',
  date: 'Tue, 19 Mar 2013 19:10:58 GMT' });
 return result; },
function (nock) { 
var result = 
nock('https://ciserversdk.table.core.windows.net:443')
  .get('/Tables')
  .reply(200, "<?xml version=\"1.0\" encoding=\"utf-8\" standalone=\"yes\"?>\r\n<feed xml:base=\"https://ciserversdk.table.core.windows.net/\" xmlns:d=\"http://schemas.microsoft.com/ado/2007/08/dataservices\" xmlns:m=\"http://schemas.microsoft.com/ado/2007/08/dataservices/metadata\" xmlns=\"http://www.w3.org/2005/Atom\">\r\n  <title type=\"text\">Tables</title>\r\n  <id>https://ciserversdk.table.core.windows.net/Tables</id>\r\n  <updated>2013-03-19T19:10:59Z</updated>\r\n  <author>\r\n    <name />\r\n  </author>\r\n  <link rel=\"self\" title=\"Tables\" href=\"Tables\" />\r\n</feed>", { 'cache-control': 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/atom+xml;charset=utf-8',
  server: 'Windows-Azure-Table/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id': '8e528188-b825-4d2d-8475-2b68558f9f4d',
  'x-ms-version': '2011-08-18',
  date: 'Tue, 19 Mar 2013 19:10:58 GMT' });
 return result; }]];