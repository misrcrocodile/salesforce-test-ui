window.testContent = window.testContent || [];
var testId = "Salesforce.Platform-Developer-II";
var testName = "Salesforce.Platform-Developer-II";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "Salesforce.Platform-Developer-II.v2022-08-07.q138",
  content: [
    {
      content:
        "A developer is building a Lightning web component that displays quantity, unit price, and the total for an order line item. The total is calculated dynamically as the quantity multiplied by the unit price.What must be added to display the total?",
      options: [
        "A. Add Total: {quantity * UnitPrice} in the template.",
        "B. Add get total() { return quantity * unitPrice;} to the JavaScript and Total: {total} in the template.",
        "C. Add Total; {multiple quantit,y unitprice)} in the template.",
        "D. Add calculate Total() {return quantity * unitPrice;} to the javaScript and Total : {calculate Total()} in the template.",
      ],
      answer: "D",
      title: "Question 1",
    },
    {
      content:
        "A developer is inserting, updating, and deleting multiple lists of records in a Single transaction and wants to ensure that any error prevents all execution.How should the developer implement error exception handling in their code to handle this?",
      options: [
        "A. Use Database.setSavepoint() and Database.rollBack() with a Try/Catch statement.",
        "B. Use a Try/Catch statement and handle DML cleanup in the catch statement.",
        "C. Use Database methods to obtain lists of Database.SaveResults.",
        "D. Use a Try/Catch and use sObject.addError() on any failures.",
      ],
      answer: "A",
      title: "Question 2",
    },
    {
      content:
        "Which are relevant practices while analyzing the timeline of different types of transactions in the execution overview panel? (Choose two.)",
      options: [
        "A. Multiple short bursts of Apex events should be analyzed since they can add up to a significant amount of time",
        "B. Log lines in the execution log panel can be analyzed for details about specific events",
        "C. The performance tree should be use to analyze events further starting from the one that take the least amount of time",
        "D. The execution tree can be used with the execution log to filter and get specific information about events",
      ],
      answer: "A,B",
      title: "Question 3",
    },
    {
      content:
        'A developer needs to implement a system audit feature that allows users, assigned to a custom profile named "Auditors", to perform searches against the historical records in the Account object. The developer must ensure the search is able to return history records that are between 12 and 24 months old.Given the code below, which select statement should be inserted below as a valid way to retrieve the Account History records ranging from 12 to 24 month old?A)B)C)D)',
      options: ["A. Option A", "B. Option C", "C. Option B", "D. Option D"],
      answer: "D",
      title: "Question 4",
    },
    {
      content:
        "Which technique can run logic when an Aura Component is loaded?",
      options: [
        "A. Call $A. enqueueAction passing in the method to call.",
        "B. Use the connectedCallback(0 method.",
        "C. Use an aura:handler 'init'' event to call a function.",
        "D. Use the standard doinit function in the controller.",
      ],
      answer: "C",
      title: "Question 5",
    },
    {
      content:
        "Which of the following object types can be used with a Web Service?",
      options: [
        "A. Lists",
        "B. Maps",
        "C. Matcher objects",
        "D. Pattern objects",
        "E. Sets",
        "F. Exception objects",
      ],
      answer: "A",
      title: "Question 6",
    },
    {
      content:
        "A developer is tasked with creating a Lightning web component that allows users to create a Case for a selected product, directly from a custom Lightning page. The input fields in the component are displayed in a non-linear fashion on top of an image of the product to help the user better understand the meaning of the fields.Which two components should a developer use to implement the creation of the Case from the Lightning web component?Choose 2 answers",
      options: [
        "A. lightning-input",
        "B. lightning-record-edit-form",
        "C. lightning-input-field",
        "D. lightning-record-form",
      ],
      answer: "B,D",
      title: "Question 7",
    },
    {
      content:
        "Consider the following queries. For these queries, assume that there are more than 200,000 Account records. These records include soft-deleted records; that is, deleted records that are still in the Recycle Bin. Note that there are two fields that are marked as External Id on the Account. These fields are Customer_Number__c and ERP_Key__c.Which two queries are optimized for large data volumes? Choose 2 answers",
      options: [
        "A. SELECT Id FROM Account WHERE Id IN : aListVariable",
        "B. SELECT Id FROM Account WHERE Name != NULL",
        "C. SELECT Id FROM Account WHERE Name != ' ' AND Customer Number c = 'ValueA'",
        "D. SELECT Id FROM Account WHERE Name != ' ' AND IsDeleted = false",
      ],
      answer: "A,C",
      title: "Question 8",
    },
    {
      content:
        "A company accepts orders for customers in their enterprise resource planning (ERP) crder__c records with a lookup field to Account. The Account object has an External ID field, ERP_Customer_ID__c.What should the integration use to create new Order__c records that will automatically be related to the correct Account?",
      options: [
        "A. Upsert on the Order__c object and specify the ERP_Customer_ID__c.",
        "B. Upsert on the Account and specify the ERP_Customer_ID__c.",
        "C. Insert on the Order__c object followed by an update on the Order__c object.",
        "D. Merge on the Order__c object and specify the ERP_Customer_ID__c.",
      ],
      answer: "C",
      title: "Question 9",
    },
    {
      content:
        "A developer is building a Lightning web component that retrieves data from Salesforce and assigns it to the record property.What must be done in the component to get the data from Salesforce?A)B)C)D)",
      options: ["A. Option B", "B. Option C", "C. Option D", "D. Option A"],
      answer: "A",
      title: "Question 10",
    },
    {
      content:
        "Which three Visualforce components can be used to initiate Ajax behavior to perform partial page updates? Choose 3 answers",
      options: ["A. ", "B. ", "C. ", "D. ", "E. "],
      answer: "A,C,D",
      title: "Question 11",
    },
    {
      content:
        "What are the ways a developer can create test data of Contacts? (Choose two.)",
      options: [
        "A. Test.loadTestRecords(Contact.sObjectType, 'staticResource')",
        "B. Test.createTestData ()",
        "C. myDataFactory.createContacts(10)",
        "D. Test.loadData(Contact.sObjectType, 'staticResource')",
      ],
      answer: "C,D",
      title: "Question 12",
    },
    {
      content:
        "What is the transaction limit on the number of Apex jobs added to the queue?",
      options: ["A. There is no limit", "B. 150", "C. 200", "D. 50", "E. 100"],
      answer: "D",
      title: "Question 13",
    },
    {
      content:
        "A developer i$ tasked Dy Unversai Containers to build out a system to track the container repair process. Containers should be tracked as they move through the repair process, starting when a customer reports an issue and ending when the container is returned to the customer.Which solution meets these business requirements while following best practices?",
      options: [
        "A. Build an automated Lightning Application using Application Events to ensure data integrity.",
        "B. involve a Salesforce administrator and build out a declarative solution that works in Salesforce desktop and mobile.",
        "C. Use Flow Builder|.to develop a Sites page for customers to submit repair requests and track the status of their request.",
        "D. Use Platform Events with Workflow Rules and RFID integration to ensure proper tracking of the containers.",
      ],
      answer: "C",
      title: "Question 14",
    },
    {
      content:
        "Universal Containers decided to use Salesforce to manage a new hire interview process. A custom object called candidate as created with organization-wide default set to Private. A lookup on the Candidate object sets an employee as an the viewer user",
      options: [
        "A. The record cannot be shared with the current setup",
        "B. The record can be shared using a sharing rule.",
        "C. The record can be shared an Apex class.",
        "D. The record can be shared using a permission set.",
      ],
      answer: "C",
      title: "Question 15",
    },
    {
      content:
        "A developer wrote an Apex class to make several callouts to an external system.If the URLs used in these callouts will change often, which feature should the developer use to minimize changes needed to the Apex class?",
      options: [
        "A. Connected Apps",
        "B. Remote Site Settings",
        "C. Session Id",
        "D. Named Credentials",
      ],
      answer: "D",
      title: "Question 16",
    },
    {
      content: "The REST API___________.",
      options: [
        "A. Is based on REST principles and is optimized for loading or deleting large sets of data. You can use it to query, queryAII, insert, update, upsert, or delete many records asynchronously by submitting batches",
        "B. Provides a powerful, convenient, and simple REST-based web services interface for interacting with Salesforce. Its advantages include ease of integration and development, and it's an excellent choice of technology for use with mobile applications and web projects",
        "C. Is used to retrieve, deploy, create, update, or delete customizations for your org. The most common use is to migrate changes from a sandbox or testing org to your production environment",
        "D. Is used to create, retrieve, update or delete records, such as accounts, leads, and custom objects, and allows you to maintain passwords, perform searches, and much more",
      ],
      answer: "B",
      title: "Question 17",
    },
    {
      content:
        "Where in a query can you use Geolocation and Distance? (Choose two.)",
      options: [
        "A. Select clause",
        "B. Filter clause",
        "C. Group By clause",
        "D. Order By clause",
      ],
      answer: "B,D",
      title: "Question 18",
    },
    {
      content:
        "Consider the code above.When a user dicks on the Link of a Contact's name, what happens'",
      options: [
        "A. A new page opens, showing the Contact's details.",
        "B. The outputPanel refreshes, showing the Contacts details.",
        "C. Nothing happens: the commandLink is missing an action attribute.",
        "D. The page refreshes, showing the Contact's details.",
      ],
      answer: "B",
      title: "Question 19",
    },
    {
      content:
        "A developer is writing unit tests for the following method:Which assertion would be used in a negative test case?",
      options: [
        "A. System.assertEquals(null, isFreezing('asdf))",
        "B. System.assertEquals (true, isFreezing('O')",
        "C. System.assertEquals(true, isFreezing(null))",
        "D. System.assertEquals(true, isFreezingClOO'))",
      ],
      answer: "A",
      title: "Question 20",
    },
    {
      content:
        "Which of the following exceptions cannot be caught and will force an error? (Choose three.)",
      options: [
        "A. LimitException",
        "B. AssertException",
        "C. SObjectExceptions",
        "D. DMLException",
        "E. License exceptions",
        "F. ListException",
      ],
      answer:
        'A,B,E  Explanation Explanation/Reference: SObjectException occurs when accessing a field not queried, or you try to change a field during the wrong dml statement (i.e. an edit-only field being set on insert) Custom exceptions must extend the "Exception" class ',
      title: "Question 21",
    },
    {
      content:
        "What Salesforce tool lets you deploy/retrieve metadata, check status of apex jobs, and check responses of REST calls?",
      options: [
        "A. Streaming API",
        "B. Force.com Migration Tool",
        "C. Developer Console",
        "D. Workbench",
      ],
      answer: "D",
      title: "Question 22",
    },
    {
      content:
        "A developer created a Lightning web component that uses a Lightning-record-edit-form to collect information about Leads. Users complain that they only see one error message at a time when they save a Lead record.Which best practice should the developer use to perform the validations, and allow more than one error message to be displayed simultaneously?",
      options: [
        "A. Process Builder",
        "B. Client-side validation",
        "C. Apex REST",
        "D. Custom validation rules",
      ],
      answer: "B",
      title: "Question 23",
    },
    {
      content:
        "Consider the following code snippet:A developer created the following test class to provide the proper code coverage for the snippet above:However, when the test runs, no data is returned and the assertion fails.However, when the test runs, no data is returned and the assertion fails.Which edit should the developer make to ensure the test class runs successfully?",
      options: [
        "A. Implement the setFixedSearchResults method in the test class.",
        "B. Enclose the method call within Test. startTest () and Test , stop Test ()",
        "C. Implement the without sharing keyword in the searchfeature Apex class.",
        "D. Implement the seeAllData=true attribute in the @isTest annotation.",
      ],
      answer: "A",
      title: "Question 24",
    },
    {
      content: "Which of the following about Dynamic Apex is incorrect?",
      options: [
        "A. You can retrieve the sObject type from an Id by calling .getSObjectTypeQ",
        "B. getDescribe() can get you a variety of info on a particular object/field",
        "C. Schema.getGlobalDescribeQ gives you a map of all sObject",
        "D. In dynamic SOQL, you can use bind variables and bind variable fields",
      ],
      answer:
        "D  Explanation Explanation/Reference: While you can use simple bind variables in dynamic SOQL, you cann|ot use bind variable fields (e.g. :myVariable.field1_c) Use escapeSingleQuotes to prevent SOQL injection ",
      title: "Question 25",
    },
    {
      content:
        "In a VisualForce page with a VisualForce component that has rendered set to false when the page loads, how can a developer ensure it will show on a re-render?",
      options: [
        "A. Set the re-render attribute of the component to true.",
        "B. Set the rendered attribute of the component to true and re-render a parent component.",
        "C. Set the rendered attribute of the component to true and re-render the component.",
        "D. Perform a full page refresh since rendered elements cannot be re-rendered without refreshing.",
      ],
      answer: "B",
      title: "Question 26",
    },
    {
      content:
        "What is the transaction limit for the number of records for SOQL queries?",
      options: [
        "A. 50,000",
        "B. 20,000",
        "C. 10,000",
        "D. 5,000",
        "E. There is no limit",
      ],
      answer: "A",
      title: "Question 27",
    },
    {
      content:
        "A developer is tasked with creating a Lightning web component that is responsive on various devices.which two components should help accomplish this goal?Choose 2 answers",
      options: [
        "A. lightning-layout-item",
        "B. lightning-layout",
        "C. lightning-navigation",
        "D. lightning-input-location",
      ],
      answer: "A,B",
      title: "Question 28",
    },
    {
      content:
        "A developer writes a lightning web component that displays a dropdown list of all custom objects in the org from which a user will select Apex method prepares and returns data to the component.What should the developer do to determine which objects to include m the response?",
      options: [
        "A. Use the getCustomObject ( ) method from the Schema class.",
        "B. Check the isCustom ( ) value on the sObject describe result.",
        "C. Import the list of all custom objects from @salesforce/schema.",
        "D. Check the getObjectType () value for Custom' or 'Standard' on the sObject describe result.",
      ],
      answer: "B",
      title: "Question 29",
    },
    {
      content:
        "A developer has a page with two extensions overriding the Standard controller for Case.What will happen when a user clicks the command button?",
      options: [
        "A. Save from CaseExtensionTwo will be executed",
        "B. All of the three Save methods will be executed",
        "C. Save from Case Standard Controller will be executed",
        "D. Save from CaseExtensionOne will be executed",
      ],
      answer: "D",
      title: "Question 30",
    },
    {
      content:
        "A developer wants to use an Aura Component with a Custom Action.What should be considered in order to do this?",
      options: [
        "A. The component must implement the force:lightningQuickActionButton interface.",
        'B. The class "slds-modal__container" must be added to the top-level element of the component.',
        "C. The component's JavaScript controller must handle a method on initialization.",
        "D. A default value must be provided for each component attribute marked as required.",
      ],
      answer: "A",
      title: "Question 31",
    },
    {
      content:
        "As part of a new integration, a developer is asked to implement a new custom search functionality that is capable of performing unrestricted queries and can account for all values within a custom picklist field, type__z, on the Opportunity object. The search feature must also account for NULL values.The organization-wide default for the Opportunity object is set to Public Read-Only, and a new custom index has.been created for the Type__c field. There are more than 5 million Opportunity records within the environment.and a considerable amount of the existing records have NULL values for the picklist Which technique should the developer implement to maximize performance when querying NULL values?",
      options: [
        "A. Use the OS operator to combine WHERE clauses to strictly search for each value within the picklist, including Type__c ' NULL.",
        "B. Create a formula field that substitutes NULL values for a string of text, create an index for the formula field, then use the formula within the WHERE clause.",
        "C. Perform two SOQL queries; one to query Opportunities where Type__c - NULL, and another to query where Type_: - HBLL, then join the result set using Apex.",
        "D. Use a SOSL query to return ALL opportunities that have a value of NULL in any field.",
      ],
      answer: "C",
      title: "Question 32",
    },
    {
      content:
        "Global with sharing class MyRemoter { public String accountName { get; set; } public static Account account { get; set; } public AccountRemoter(} {} @RemoteAction global static Account getAccount (String acccuntName) { account = [SELECT Id, Name, NumberOfEmployees FROM Account WHERE Name = :accountName]; return account; } } Consider the Apex class above that defines a RemoteAction used on a Visualforce search page. Which code snippet will assert that the remote action returned the correct Account?",
      options: [
        "A. MyRemoter remote = new MyRemoter('TestAccount'};Account a = remote.getAccount {);System.assertEquals(, ''TestAccount', a.Name -;",
        "B. MyRemoter remote = new MyRemoter();Account a = remote.getAccount ({'TestAccount');System.assertEquals, 'TestAcccunt', a.Name -;",
        "C. Account a = controller.getAccount('TestAccount');System.assertEquals(, 'TestAccount', a.Name } ;",
        "D. Account a = MyRemoter.getAccount ('TestAccount'):System.assertEquals{ 'TestAccount', a.Name };",
      ],
      answer: "D",
      title: "Question 33",
    },
    {
      content:
        "Universal Containers needs to integrate with a Heroku service that resizes product images submitted by users.What are two alternatives to implement the integration and protect against malicious calls to Heroku app's endpoint? Choose 2 answers",
      options: [
        "A. Create a Workflow Rule with an Outbound Message allowing the Heroku app to automatically store the resized images in Salesforce.",
        "B. Create a Workflow Rule with an Outbound Message and select Send Session ID so that the Heroku app can use it to send the resized images back to Salesforce.",
        "C. Create a trigger that uses an @future Apex HTTP callout passing JSON serialized data and some form of pre-shared secret key. so that the Heroku app can authenticate requests and store the resized images in Salesforce.",
        "D. Create a trigger that uses an @future Apex HTTP callout passing JSON serialized data; therefore the Heroku app can automatically reply back to the callout with the resized images in Salesforce.",
      ],
      answer: "A,B",
      title: "Question 34",
    },
    {
      content:
        "1 Contact con = new Contact ( LastName =fSmith', Department = fAdminT)2 insert con;3 Contact insertedContact=[select Name from Contact where id=icon.Id];4 Savepoint sp_admin = Database.setSavepoint();5 con.Department = fHRf;6 update con;7 Database.rollback(sp_admin);8 System.debug(Limits.getDmlStatements 0);Given the following code, what value will be output in the logs by line #8?",
      options: ["A. 2", "B. 4", "C. 5", "D. 3"],
      answer: "B",
      title: "Question 35",
    },
    {
      content:
        "During the order of execution of a Visualforce page GET request, what happens after this step? Evaluate constructors on controllers and extensions",
      options: [
        "A. Evaluate constructors and expressions on custom components",
        "B. Send the HTML response to the browser",
        "C. Create view state if <apex: form> exists",
        "D. Evaluate expressions, action attributes, and method calls",
      ],
      answer: "A",
      title: "Question 36",
    },
    {
      content:
        "@isTest static void testAccountUpdate() { Account acct = new Account({Name = 'Test'); acct.Integration Updated_c = false; insert acct; CalloutUtil.sendAccountUpdate (acct.Id); Account acctAfter = [SELECT Id, Integration Updated_c FROM Account WHERE Id = :acct.Id] [0]; System.assert(true, acctAfter.Integration_Updated_c); } The test method above calls a web service that updates an external system with Account information and sets the Account's Integration_Updated__c checkbox to True when it completes. The test fails to execute and exits with an error: \"Methods defined as TestMethod do not support Web service callouts.\" What is the optimal way to fix this?",
      options: [
        "A. Add Test.startTest() and Test.setMock before and Test.stopTest() after CalloutUtil.sendAccountUpdate.",
        "B. Add Test.startTest() before and Test.stopTest() after CalloutUtil.sendAccountUpdate.",
        "C. Add Test.startTest() before and Test.setMock and Test.stopTest() after CalloutUtil.sendAccountUpdate.",
        "D. Add if (!Test.isRunningTest()) around CalloutUtil.sendAccountUpdate.",
      ],
      answer: "B",
      title: "Question 37",
    },
    {
      content:
        "There are user complaints about slow render times of a custom data table within a visualforce page that loads thousands of Account records at once.What can a developer do to help alleviate such issues?",
      options: [
        "A. Upload a third-party data table library as a static resource.",
        "B. Use the transient keyword in the Apex code when querying the Account records.",
        "C. Use the standard Account List controller and implement pagination.",
        "D. Use JavaScript remoting to query the accounts.",
      ],
      answer: "B",
      title: "Question 38",
    },
    {
      content:
        "A developer is building a Visualforce page that interacts with external services.Which interface should the developer implement to test this functionality? (Choose two.)",
      options: [
        "A. HTTPCalloutMock",
        "B. HTTPResponseMock",
        "C. HTTPRequestMock",
        "D. StaticResourceCalloutMock",
      ],
      answer: "A,D",
      title: "Question 39",
    },
    {
      content:
        "A developer is trying to decide between creating a Visualforce component or a Lightning component for a custom screen. Which functionality consideration impacts the final decision?",
      options: [
        "A. Does the screen need to be accessible from the Lightning Experience UI?",
        "B. Will the screen be accessed via a mobile app?",
        "C. Does the screen need to be rendered as a PDF?",
        "D. Will the screen make use of a JavaScript framework?",
      ],
      answer: "A",
      title: "Question 40",
    },
    {
      content:
        "A developer creates an application event that has triggered an infinite loop. What may have caused this problem?",
      options: [
        "A. The event has multiple handlers registered in the project.",
        "B. The event Is fired from a custom renderer.",
        "C. The event handler calls a trigger.",
        'D. An event is fired ontouchend" and is unhandled.',
      ],
      answer: "B",
      title: "Question 41",
    },
    {
      content:
        "Which statement should be used to allow some of the records in a list of records to be inserted if others fail to be inserted?",
      options: [
        "A. insert records",
        "B. Database.insert(records, false)",
        "C. Database.insert(records, true)",
        "D. insert (records, false)",
      ],
      answer: "B",
      title: "Question 42",
    },
    {
      content:
        "Which three approaches should a developer Implement to obtain the best performance for data retrieval when building a Lightning web component?Choose 3 answers",
      options: [
        "A. Use lazy load for occasionally accessed data.",
        "B. Use the Lightning Data Service.",
        "C. Use layoutTypes : ['Full'] to display a set of fields.",
        "D. Use getRecordUi to obtain metadata.",
        "E. Use (cacheable-true) whenever possible.",
      ],
      answer: "A,B,E",
      title: "Question 43",
    },
    {
      content:
        "If a developer wanted to display error messages with the standard Salesforce Ul styling, what would they use?",
      options: [
        "A. <apex:message>",
        "B. <apex:error>",
        "C. <apex:outputText>",
        "D. <apex:pageMessages>",
      ],
      answer: "D",
      title: "Question 44",
    },
    {
      content:
        "A developer is using a third-party JavaScript library to create a custom user interface in Visualforce. The developer needs to use JavaScript to get data from a controller method in response to a user action.How can the developer accomplish this?",
      options: [
        "A. Use the $Controller global variable to access the controller method via JavaScript",
        "B. Use <apex:actionFunction> to create a JavaScript wrapper for the controller method",
        "C. Use <apex:actionSupport> to enable JavaScript support for the controller method",
        "D. Use the @RemoteAction annotation on the method definition with JavaScript Remoting",
      ],
      answer: "D",
      title: "Question 45",
    },
    {
      content:
        "An org has a custom object, Registeration_c that has a lookup relationship to the Opportunity object.What should a developer use to create a stand-alone Vlsualforce page that displays the Registration__c records related to an Opportunity.",
      options: [
        "A. A standard controller",
        "B. A standard controller with a controller extension",
        "C. A custom controler",
        "D. A controler extension",
      ],
      answer: "A",
      title: "Question 46",
    },
    {
      content:
        "A company represents their customers as Accounts that have an External ID field called Customer_Number__c. They have a custom Order (Order__c) object, with a Lookup to Account, to represent Orders that are placed in their external order management system (OMS). When an order is fulfilled in the OMS, a REST call to Salesforce should be made that creates an Order record in Salesforce and retates it to the proper Account. What is the optimal way to implement this?",
      options: [
        "A. Perform a REST GET on the Account and a REST POST to update the Order__c with the Account's record ID.",
        "B. Perform a REST POST to update the Order__c and specify the Account's Customer_Number__c in it.",
        "C. Perform a REST PATCH to upsert the Order__c and specify the Account's Customer_Number__c in it.",
        "D. Perform a REST GET on the Account and a REST PATCH to upsert the Order__c with the Accounts record ID.",
      ],
      answer: "C",
      title: "Question 47",
    },
    {
      content:
        "A developer must create a custom pagination solution for accessing approximately 2000 records and displaying 50 records on each page. Data from Salesforce will be accessed via an API and not via Apex.How can the developer meet these requirements? (Choose two.)",
      options: [
        "A. Use OFFSET in SOQL queries",
        "B. Use LIMIT 50 in SOQL queries",
        "C. Use CURSOR 50 in SOQL queries",
        "D. Use a StandardSetController",
      ],
      answer: "A,B",
      title: "Question 48",
    },
    {
      content:
        "The test method above tests an Apex trigger that the developer knows will make a lot of queries when a lot of Account are simultaneously updated to be customer.The test method fails at the Line 20 because of too many SOQL queriesWhat is the correct way to fix this?The test method above tests an Apex trigger that the developer knows will make a lot of queries when a lot of Accounts are simultaneously updated to be customers.The test method fails at the Line 20 because of too many SOQL queries.What is the correct way to fix this?",
      options: [
        "A. Replace most of the Apex Trigger with Process Builder processes to reduce the number of queries in the trigger.",
        "B. Add TeststartTest() before Line 18 of the code and add Test.stopTest() after line 18 of the code.",
        "C. Add TesLstartTest() before and Test.stop Test() after both Line 7 of the code and Line 20 of the code.",
        "D. Change the DataFactory class to create fewer Accounts so that the number of queries in the trigger is reduced.",
      ],
      answer: "B",
      title: "Question 49",
    },
    {
      content:
        '<lightning: layout multipleRows="true"> <lightning: layoutItem size="12">{!v.account.Name} </flighting: layoutitem> <lightning:layoutitem 3ize="12">{!v. account .AccountNumber} </lighting: layoutitem> <lightning: layoutitem size="12">{!v.account. Industry} </lighting: layoutitem> </lightning: layout> Refer to the component code above. The information displays as expected (in three rows) on a mobile device. However, the information is not displaying as desired (in a single row) on a desktop or tablet. Which option has the correct component changes to display correctly on desktops and tablets?',
      options: ["A. ", "B. ", "C. ", "D. "],
      answer: "D",
      title: "Question 50",
    },
    {
      content:
        "When calling a RESTful web service, a developer receives a JSON payload that has a data hierarchy that is nested three levels deep. How can the developer describe the external data?",
      options: [
        "A. Use the ANT migration tool, the custom metadata API, or the Dataloader.",
        "B. Deserialize the data untyped and then process it.",
        "C. Use middleware to flatten the JSON and consume it as a new custom object.",
        "D. Declare a class with three levels and deserialize the JSON typed with this class.",
      ],
      answer: "B",
      title: "Question 51",
    },
    {
      content:
        "Universal Containers requested the addition of a third-party Map widget to an existing Lightning web component.Which two actions should the developer take to implement this requirement?Choose 2 answers",
      options: [
        "A. Upload the third-party JavaScript library as a static resource that Imports Into the component.",
        "B. Use a content distribution network and Include <script> <script> tags In the component.",
        "C. Import the third-party JavaScript module directly Into the component.",
        "D. Import loadscript from lightning platformResourceLoader.",
      ],
      answer: "A,D",
      title: "Question 52",
    },
    {
      content:
        "A company wants to run different logic based on an Opportunity's record type. Which code segment handles this request and follows best practices?A)B)",
      options: ["A. Option B", "B. Option A"],
      answer: "B",
      title: "Question 53",
    },
    {
      content:
        "What is a benefit of JavaScript remoting over Visualforce Remote Objects?",
      options: [
        "A. Supports complex server-side application logic",
        "B. Does not require any Apex code",
        "C. Allows for specified re-render targets",
        "D. Does not require any JavaScript code",
      ],
      answer: "A",
      title: "Question 54",
    },
    {
      content:
        "Which use case is an appropriate fit for the future asynchronous Apex method? (Choose two.)",
      options: [
        "A. A developer has long-running methods and needs to prevent delaying an Apex transaction",
        "B. A developer needs to segregate DML operations and bypass the mixed save DML error",
        "C. A developer has jobs that need larger query results than regular transactions allow",
        "D. A developer has long-running jobs with large data volumes that need to be performed in batches",
      ],
      answer: "A,B",
      title: "Question 55",
    },
    {
      content:
        "Universal Containers wants to be able to bring up an Account detail page and view a table of containers currently being rented. The user wants to be able to dick on a container In the table and quickly edit and save the location of the container.In addition to this, the page should have a section that shows the location of each container on a map. Universal Containers wants the map to re-render whenever the location of a container is changed.What can a developer use to accomplish this task?",
      options: [
        "A. Two Lightning Components leveraging Application Events",
        "B. Two Lightning Components leveraging Platform Events",
        "C. Two Visualforce Page Components leveraging Application Events",
        "D. A single visualforce Page leveraging Platform Events",
      ],
      answer: "A",
      title: "Question 56",
    },
    {
      content:
        "An Apex class does not achieve expected code coverage. The testSetup method explicitly calls a method in the Apex class. How can the developer generate the code coverage?",
      options: [
        "A. Call the Apex class method from a testMethod instead of the testSetup method.",
        "B. Use system.assert() in testSetup to verify the values are being returned.",
        "C. Verify the user has permissions passing a user into System.runAs().",
        "D. Add @testVisible to the method in the class the developer is testing.",
      ],
      answer: "A",
      title: "Question 57",
    },
    {
      content:
        "What is the transaction limit for the number of DML statements allowed?",
      options: [
        "A. 20",
        "B. 2,000",
        "C. 100 (synchronous), 200 (async)",
        "D. 200 (synchronous), 100 (async)",
        "E. 150",
      ],
      answer:
        "E  Explanation Explanation/Reference: Includes Approval functions, rollbacks/savepoints, and System.runAs ",
      title: "Question 58",
    },
    {
      content:
        "A developer created three Rollup Summary fields: Total_timesheets_c, Total_Approved_timesheet_c and Total_project_Timesheet_c in the custom object, project _c Now, the developer is tasked with created a new field to show the ratio between and approved",
      options: [
        "A. A test class that validates the formula field is needed for deployment.",
        "B. A formula field will calculate the value retroactively for existing records.",
        "C. No test methods will be executed during deployment.",
        "D. Using a formula field reduces maintenance overhead.",
      ],
      answer: "B,D",
      title: "Question 59",
    },
    {
      content:
        "A Visualforce page loads slowly due to the large amount of data it displays. Which strategy can a developer use to improve the performance?",
      options: [
        "A. use lazy loading to load the data on demand, instead of in the controller's constructor.",
        "B. use an <apex:actionPoller> in the page to load all of the data asynchronously.",
        "C. use Javascript to move data processing to the browser instead of the controller.",
        "D. Use the transient keyword for the List variables used in the custom controller.",
      ],
      answer: "A",
      title: "Question 60",
    },
    {
      content:
        "A developer writes the following code:While testing the code, the developer receives the following error message: System.CalloutException : You have uncommitted work pending What should the developer do? (Choose two.)",
      options: [
        "A. Ensure all callouts are completed prior to executing DML statements",
        "B. Use Database.insert (order, true) to immediately commit any database changes",
        "C. Move the web service callout into an future method",
        "D. Use the asyncSend() method of the HTTP class to send the request in async context",
      ],
      answer: "A,C",
      title: "Question 61",
    },
    {
      content:
        "Which two objects can be inserted in the same transaction? (Choose two.)",
      options: [
        "A. Opportunity and User",
        "B. Account and Group",
        "C. Case and CaseComment",
        "D. Account and AccountShare",
      ],
      answer: "C,D",
      title: "Question 62",
    },
    {
      content:
        "A developer is integrated with a legacy on-premises SQL database.What should the developer use to ensure the data being integrated is matched to the right records in Salesforce?",
      options: [
        "A. Formula field",
        "B. External Object",
        "C. Lookup field",
        "D. External Id field",
      ],
      answer: "D",
      title: "Question 63",
    },
    {
      content:
        "A corporation has many different Salesforce orgs, with some different objects and some common objects, and wants to build an application that can create, retrieve, and update common object records in all of the different orgs.Which method of integration should the application use?",
      options: [
        "A. Metadata API",
        "B. SOAP API with the Enterprise WSDL",
        "C. SOAP API with the partner WSDL",
        "D. Apex REST Web Service",
      ],
      answer: "D",
      title: "Question 64",
    },
    {
      content:
        "Consider the following code snippet:A developer needs to built an interactive Aura component that responds to the user's input by hiding or showing sections according the user preferences.What are two best practices the developer can implement to hide or show the powerVserView and s-rar.daraVserView inner components, based on the value of the attribute isPowexUser?Choose 2 answersA)B)C)",
      options: ["A. Option B", "B. Option C", "C. Option A", "D. Option D"],
      answer: "A",
      title: "Question 65",
    },
    {
      content:
        "A company has a web page that needs to get Account record information, given its Salesforce record ID, from JavaScript on the page and then display it. Which method of integration is optimal?",
      options: [
        "A. SOAP API",
        "B. REST API",
        "C. Apex REST Web Service",
        "D. Apex SOAP Web Service",
      ],
      answer: "C",
      title: "Question 66",
    },
    {
      content:
        "A developer is asked to find a way to store secret data with an ability to specify which profiles and users can access which secrets.What should be used to store this data?",
      options: [
        "A. Static resources",
        "B. Custom metadata",
        "C. Custom settings",
        "D. System.Cookie class",
      ],
      answer: "C",
      title: "Question 67",
    },
    {
      content:
        "When developing a Lightning web component, which setting displays lightning-layout-items in one column on small devices, such as mobile phones, and in two columns on tablet-size and desktop-size screens?",
      options: [
        'A. Set size-"6" small-device-size-"12"',
        'B. Set size-"12" medium-device-size="6"',
        'C. Set size=M6" mobile-device-size="12"',
        'D. Set size-"12" tablet-device-size-"6"',
      ],
      answer: "B",
      title: "Question 68",
    },
    {
      content: "Which statement is true regarding savepoints?",
      options: [
        "A. Reference to savepoints can cross trigger invocations.",
        "B. Static variables are not reverted during a rollback.",
        "C. Savepoints are not limited by DML statement governor limits",
        "D. You can roll back to any savepoint variable created In any order",
      ],
      answer: "B",
      title: "Question 69",
    },
    {
      content:
        "Refer to the code snippet below:A custom object called Credit_Memo_c exist in a Salesforce environment. As part of a new feature development that retrieves and manipulates this type of record, the developer needs to ensure race conditions are prevented when a set of records are modified within an Apex transaction.In the preceding Apex code, how can the developer alter the query statement to use SOQL features to prevent race condition within a transaction?A)B)C)D)",
      options: ["A. Option B", "B. Option C", "C. Option A", "D. Option D"],
      answer: "B",
      title: "Question 70",
    },
    {
      content: "Which is a valid Apex REST Annotation? (Choose two.)",
      options: [
        "A. HttpUpsert",
        "B. HttpDelete",
        "C. Http Patch",
        "D. HttpAction",
      ],
      answer: "B,C",
      title: "Question 71",
    },
    {
      content:
        "A developer creates a Lightning web component to allow a Contact to be quickly entered- However, error messages are not displayed.Which component should the developer add to the form to display error messages?",
      options: [
        "A. aura:messages",
        "B. lightning-error",
        "C. lightning-messages",
        "D. apex:messages",
      ],
      answer: "C",
      title: "Question 72",
    },
    {
      content:
        "Consider the above trigger intended to assign the Account to the manager of the Account''s region. Which two changes should a developer make in this trigger to adhere to best practices? Choose 2 answers",
      options: [
        "A. Use a Map accountMap instead of List accountList.",
        "B. Remove the last line updating accountList as it is not needed.",
        "C. Use a Map to cache the results of the Region__c query by Id.",
        "D. Move the Region__c query to outside the loop.",
      ],
      answer: "B,D",
      title: "Question 73",
    },
    {
      content:
        "A company has a custom component that allows users to search for records of a certain object type by invoking an Apex Controller that returns a list of results based on the user's input, when the search Is completed, a searchComplete event is fired, with the results put in a results attribute of the event. The component is designed to be used within other components and may appear on a single page more than once.What is the optimal code that should be added to fire the event when the search has completed?",
      options: ["A. ", "B. ", "C. ", "D. "],
      answer: "A",
      title: "Question 74",
    },
    {
      content:
        "The Contact object in an org is configured with workflow rules that trigger field updates. The fields are not updating, even though the end user expects them to. The developer creates a debug log to troubleshoot the problem.What should the developer specify in the debug log to see the values of the workflow rule conditions and debug the problem?",
      options: [
        "A. ERROR level for the Database log category",
        "B. INFO level for the Workflow log category",
        "C. INFO level for the Database log category",
        "D. ERROR level for the Workflow log category",
      ],
      answer: "C",
      title: "Question 75",
    },
    {
      content:
        "In which of the following scenarios would it be acceptable to use programmatic sharing instead of declarative sharing? (Choose three.)",
      options: [
        "A. Every record created by sales users needs to be visible to their respective manager",
        "B. There is an existing, external system of truth for user access assignments which will continue to drive access and be integrated with salesforce",
        "C. Team functionality is required on custom objects",
        "D. Poor performance when using native sharing components",
        "E. You need to change record access to read/write for all users utilising a lightning component",
      ],
      answer: "B,C,D",
      title: "Question 76",
    },
    {
      content:
        "A company uses an external system to manage its custom account territory assignments. Every quarter, millions of Accounts may be updated in Salesforce with new Owners when the territory assignments are completed in the external system. What is the optimal way to update the Accounts from the external system?",
      options: [
        "A. Bulk API",
        "B. Apex REST Web Service",
        "C. SOAP API",
        "D. Composite REST API",
      ],
      answer: "B",
      title: "Question 77",
    },
    {
      content:
        "A company has a custom object. Request__c. that has a field, Completed__c. and a Lookup to Opportunity, Opportunity__c.Which SOQL query will get a unique list of all of the Opportunity records that have a Completed Request?",
      options: ["A. ", "B. ", "C. ", "D. "],
      answer: "A",
      title: "Question 78",
    },
    {
      content:
        "Universal Containers needs to integrate with their own, existing, internal custom web application. The web application accepts JSON payloads, resizes product images, and sends the resized images back to Salesforce.What should the developer use to implement this integration?",
      options: [
        "A. A workflow rule with an outbound message that contains a session ID",
        "B. A flow that calls an @future method that allows callouts",
        "C. A platform event that makes a callout to the web application",
        "D. An Apex trigger that calls an @future method that allows callouts",
      ],
      answer: "C",
      title: "Question 79",
    },
    {
      content:
        "A developer created a class that implement he Queueable interface, as follows:As part of the deployment process, the developer is asked to create a corresponding test class.Which two actions should the developer take to successfully execute the test class?Choose 2 answers",
      options: [
        "A. Implement Test.isRunningtest ( ) to prevent chaining jobs during test execution.",
        "B. Enclose System.enqueueJob (new orderQueueable Job ( }) within Test. starttest and Test, stoptest ()",
        "C. Implement seeAllData-true to ensure the Queueable )ob is able to run in bulk mode.",
        "D. Ensure the running user of the test class has, at least, the View All permission on the Order object",
      ],
      answer: "A,C",
      title: "Question 80",
    },
    {
      content:
        "A company's support process dictates that any time a Case is closed with a Status of 'Could not fix,' an Engineering Review custom object record should be created and populated with information from the Case, the Contact, and any of the Products associated with the Case. What is the correct way to automate this using an Apex trigger?",
      options: [
        "A. A before update trigger that creates the Engineering Review record and inserts it",
        "B. An after update trigger that creates the Engineering Review record and inserts it",
        "C. A before update trigger that creates the Engineering Review record and inserts it ",
        "D. An after upsert trigger that creates the Engineering Review record and inserts it",
      ],
      answer: "B",
      title: "Question 81",
    },
    {
      content:
        "An org has a requirement that an Account must always have one and only one Contact listed as Primary. So selecting one Contact will de-select any others. The client wants a checkbox on the Contact called 'Is Primary' to control this feature. The client also wants to ensure that the last name of every Contact is stored entirely in uppercase characters. What is the optimal way to implement these requirements?",
      options: [
        "A. Write an after update trigger on Contact for the Is Primary logic and a separate before update trigger on Contact for the last name logic.",
        "B. write an after update trigger on Account for the Is Primary logic and a before update trigger on Contact for the last name logic.",
        "C. write a single trigger on Contact for both after update and before update and callout to helper classes to handle each set of logic.",
        "D. write a Validation Rule on the Contact for the Is Primary logic and a before update trigger on Contact for the last name logic.",
      ],
      answer: "C",
      title: "Question 82",
    },
    {
      content:
        "A developer created a custom component to display an HTML table. The developer wants to be able to use the component on different Visualforce Pages and specify different header text for the table.Which tag should the developer use inside the component?",
      options: [
        "A. <apex:attribute>",
        "B. <apex:param>",
        "C. <apex:define>",
        "D. <apex:variable>",
      ],
      answer: "A",
      title: "Question 83",
    },
    {
      content: "Choose the correct definition for <apex:actionFunction>.",
      options: [
        'A. Can be associated with an AJAX request (actionFunction/actionSupport/actionPoller) and shows content conditionally depending on the status of the request (in progress/complete). Use the "id" field to specify name; use "status" field on related components to connect them',
        "B. Adds AJAX support to another component (e.g. onClick, onMouseUp, onFocus, etc.)",
        "C. Allows for controller methods to be called directly from Javascript. Must be| encapsulated in <apex:form> tags. Unlike actionSupport, these function<apex:actionPoller>s can be called directly from Javascript code B Sends an AJAX request according to the time interval you specify. If this ever gets re-rendered, it resets",
        "D. Signifies which components should be processed by the server when an AJAX request is generated",
      ],
      answer: "A",
      title: "Question 84",
    },
    {
      content:
        "Refer to re code segment above.When following best practices for writing Apex taggers, which two lots are wrong or cause for concern? Choose 2 answers",
      options: ["A. Line 6", "B. Line 11", "C. Line 20", "D. Line 16"],
      answer: "A,C",
      title: "Question 85",
    },
    {
      content:
        "Consider the following code snippet, depicting an Azure component:Which two interfaces can the developer implement to make the component available as a quick action?Choose 2 answers",
      options: [
        "A. Lightning QuickActionAPI",
        "B. Force:lightningQuicAction",
        "C. Force hasObjectName",
        "D. Force:hasRecordId",
        "E. Force:lightningQuickActionWithoutHeader",
      ],
      answer: "B,E",
      title: "Question 86",
    },
    {
      content:
        "A company has code to update a Request and Request Lines and make a callout to their external ERP system's REST endpoint with the updated records.The CalloutUtil. makeRestCallout fails with a 'You have uncommitted work pending. Please commit or rollback before calling out' error. What should be done to address the problem?",
      options: [
        "A. Change the CalloutUtil.makeRestCallout to an @future method",
        "B. Move the CalloutUtil.makeRestCallout method call below the catch block.",
        "C. Remove the Database.setSavepoint and Database.rollback.",
        "D. Change the CalloutUtil.makeRestCallout to an @InvocableMethod method.",
      ],
      answer: "A",
      title: "Question 87",
    },
    {
      content:
        'A user receives the generic "An internal server error has occurred" while interacting with a custom Lightning Component. What should the developer do to ensure a more meaningful message?',
      options: [
        "A. Add an error-view component to the markup.",
        "B. Use ProcessBuilder to catch the error.",
        "C. Use an AuraHandledException in a try/catch block.",
        "D. Add an onerror event handler to the tag.",
      ],
      answer: "C",
      title: "Question 88",
    },
    {
      content:
        'During the Visualforce Page execution, what step follows immediately after "Evaluate constructors on controller and extensions"?',
      options: [
        "A. Evaluate constructors, extensions, and expression on attribute definitions on any custom components present",
        "B. Create the view state",
        "C. Evaluate expressions, <apex:page> attribute actions, and other method calls (getters/setters) on main page",
        "D. Send HTML to Browser",
      ],
      answer: "A",
      title: "Question 89",
    },
    {
      content:
        "As part of a custom development, a developer creates a Lightning Component to show how a particular opportunity progresses over time. The component must display the date stamp when any of the following fields change:* Amount Probability, Stage, or Close DateWhat is the most efficient way to Query such information?",
      options: [
        "A. [Select NewValue, Oldvalue FROM Opportunity FieldHistory WHERE Opportunityld = :oppId AND Field IN",
        "B. ('StageName', Probability',Amount /CloseDate')];",
        "C. [Select Amount, CloseDate, StageName, Probability FROM OpportunityHistory WHERE Opportunityld = :oppId];",
        "D. [Select Amount CloseDate. StageName, Probability FROM Opportunity_History WHERE Opportunityld - :oppId];",
        "E. [Select Newvalue, Oldvalue From OpportunityField_History Where Oppportunity = oppid AND Field IN",
      ],
      answer: "A",
      title: "Question 90",
    },
    {
      content:
        "Consider the following code snippet:The Apex method is executed in an environment with a large data volume count for Accounts, and the query Is performing poorly.Which technique should the developer Implement to ensure the query performs optimally, while preserving the entire result set?",
      options: [
        "A. Annotate the method with the @Future annotation.",
        "B. Break down the query into two individual queries and Join the two result sets.",
        "C. Create a formula field to combine the CreatedDate and RecardType value, then filter based on the formula.",
        "D. Use the Database.queryLocator method to retrieve the accounts.",
      ],
      answer: "B",
      title: "Question 91",
    },
    {
      content:
        "A developer needs to design a custom object that will be integrated into a back-end system.What should the developer do to ensure good data quality and to ensure that data imports, integrations, and searches perform well? (Choose two.)",
      options: [
        "A. Configure a custom field as unique",
        "B. Configure a custom field as indexed",
        "C. Configure a custom field as external ID",
        "D. Configure a custom field as Salesforce ID",
      ],
      answer: "A,C",
      title: "Question 92",
    },
    {
      content:
        "Which method should be used to convert a Date to a String in the current user's locale?",
      options: [
        "A. Date.parse",
        "B. String. valueOf",
        "C. Date.format",
        "D. String.format",
      ],
      answer: "C",
      title: "Question 93",
    },
    {
      content:
        "What is the transaction limit for the number of records per DML statement?",
      options: [
        "A. There is no limit",
        "B. 50,000",
        "C. 20,000",
        "D. 5,000",
        "E. 10,000",
      ],
      answer: "E",
      title: "Question 94",
    },
    {
      content:
        "A developer receives an error when trying to call a global server-side method using the @remoteAction decorator. How can the developer resolve the error?",
      options: [
        "A. Add static to the server-side method signature.",
        "B. Decorate the server-side method with (static=false)",
        "C. Change the function signature to be private static.",
        "D. Decorate the server-side method with (static=true).",
      ],
      answer: "A",
      title: "Question 95",
    },
    {
      content:
        "A company decides that every time an Opportunity is created, they want to create a follow up Task and assign it to the Opportunity Owner.What should a developer use to implement the requirements?",
      options: [
        "A. A trigger on Task",
        "B. A trigger on Opportunity",
        "C. A Process Builder on Opportunity",
        "D. A Process Builder on Task",
      ],
      answer: "C",
      title: "Question 96",
    },
    {
      content:
        "A Visualforce Page throws an Attempt to dereference a null object error for a Contact. What change In the controller will fix the error?",
      options: [
        "A. Change the setters signature to return a Contact.",
        "B. Change the getter's signature to be static Contact.",
        "C. Declare a static final Contact at the top of the controller.",
        "D. Use a condition in the getter to return a new Contact if it is null.",
      ],
      answer: "D",
      title: "Question 97",
    },
    {
      content: 'The "Webservice" keyword___________.',
      options: [
        "A. Used for any member variables included",
        "B. All of the above",
        "C. Can be used on all classes",
        "D. Method must be static, and class must be global",
      ],
      answer: "B",
      title: "Question 98",
    },
    {
      content:
        "A developer wrote a trigger on Opportunity that will update a custom Last Sold Date field on the Opportunity's Account whenever an Opportunity is dosed. In the test class for the trigger, the assertion to validate the Last Sold Date field fails.What might be causing the failed assertion?",
      options: [
        "A. The test class has not defined an Account owner when inserting the test data.",
        "B. The test class has not implemented seeAIIData-truwh the test method.",
        "C. The test class is not using System.runAs() to run tests as a Salesforce administrator.",
        "D. The test class has not re-queried the Account record after updating the Opportunity.",
      ],
      answer: "D",
      title: "Question 99",
    },
    {
      content:
        "A developer is creating unit tests for code that makes SOAP web service callouts. The developer needs to insert some test data as a part of the unit tests setup.What are three actions to enable this functionality? (Choose three.)",
      options: [
        "A. Surround the data insertion with Test.startTest(), Test.stopTest()",
        "B. Surround the callout with TeststartTest(), Test.stopTest()",
        "C. Implement the WebServiceMock interface",
        "D. Update code to call Test.setMock()",
        "E. Implement the HttpCalloutMock interface",
      ],
      answer: "B,C,D",
      title: "Question 100",
    },
    {
      content:
        "A company has a custom object, Sales Demo Request, that has a lookup to an Opportunity. It is required that a Sales Demo Request record be created when an Opportunity's Probability is greater than 50%. What is the optimal way to automate this?",
      options: [
        "A. Use an Apex Trigger on Opportunity.",
        "B. Build a Process on Opportunity",
        "C. Create a Workflow on Opportunity.",
        "D. Build a Flow on Opportunity.",
      ],
      answer: "A",
      title: "Question 101",
    },
    {
      content:
        "What tool in the Developer Console contains information on SOQL query Cardinality?",
      options: [
        "A. Query Plan Tool",
        "B. Log Inspector",
        "C. Checkpoints tab",
        "D. View State Tab",
        "E. Query Editor",
      ],
      answer: "B",
      title: "Question 102",
    },
    {
      content:
        "A developer has a Batch Apex process, Batch_Account_Sales, that updates the sales amount for 10,000 Accounts on a nightly basis. The Batch Apex works as designed In the sandbox. However, the developer cannot get code coverage on the Batch Apex class.The test class is below:What is causing the code coverage problem?",
      options: [
        "A. The account creation already sets the sates amount to 0.",
        "B. The batch needs more than one account record created.",
        "C. The executeBatch must fail within test. startTest ( ) and - test. stopTest().",
        "D. The batch process will not recognize new accounts created in the same session",
      ],
      answer: "C",
      title: "Question 103",
    },
    {
      content:
        "A company has many different unit test methods that create Account records as part of their data setup. A new required field was added to the Account and now all of the unit tests fail. What is the optimal way for a developer to fix the issue?",
      options: [
        "A. Create a TestDataFactory class that serves as the single place to create Accounts for unit tests and set the required field there.",
        "B. Add a before insert trigger on Account to set the value of the required field.",
        "C. Change the required field to be a validation rule that excludes the System Administrator profile.",
        "D. Add the required field to the data setup for all of the unit tests.",
      ],
      answer: "A",
      title: "Question 104",
    },
    {
      content:
        "Which technique can run custom logic when a Lightning web component is loaded?",
      options: [
        'A. Use an aura:handler "init" event to call a function.',
        "B. Use the renderedCallback ( ) method.",
        "C. Use the connectedCallback () method.",
        "D. Call SA.enqueueAction passing in the method to call.",
      ],
      answer: "C",
      title: "Question 105",
    },
    {
      content:
        "The following code segment is railed from a Trigger handler class from the Opportunity trigger:Which two changes should improve this code and make it more efficient? Choose 2 answers",
      options: [
        "A. Move the SOQL to fetch the account record outside of the for loop.",
        "B. Use Triginstead.old instead of Trigger.new.",
        "C. Move business logic inside the Opportunity trigger.",
        "D. Move the DML outside of the for loop.",
      ],
      answer: "A,D",
      title: "Question 106",
    },
    {
      content:
        "What are three benefits of using static resources in Visualforce and Lightning Components? Choose 3 answers",
      options: [
        "A. Static resource files do not count against an organization's quota of data storage.",
        "B. Relative paths can be used in files in static resource archives to refer to other content within the archive.",
        "C. Static resource files can be packaged into a collection of related files in a zip or jar archive.",
        "D. Static resource files can be referenced by using the $Resource global variable instead of hardcoded IDs.",
        "E. Static resource files are automatically minified.",
      ],
      answer: "B,C,D",
      title: "Question 107",
    },
    {
      content: "What is a consideration when testing batch Apex? (Choose two.)",
      options: [
        "A. Test methods must call the batch execute() method once",
        "B. Test methods must execute the batch with a scope size of less than 200 records",
        "C. Test methods must run the batch between TeststartTestQ and Test.stopTestQ",
        "D. Test methods must use the @isTest (SeeAIIData=true) annotation",
      ],
      answer: "B,C",
      title: "Question 108",
    },
    {
      content: "What is a potential design issue with the following code?",
      options: [
        "A. The code will result in a System.LimitException: Apex CPU time limit exceeded error",
        "B. SOQL could be avoided by creating a formula field for StageName in Account from the related Opportunity",
        "C. The code will result in a System.LimitException : Too many script statements error",
        "D. The code will result in a System.DmException:Entity_is_Deleted error",
      ],
      answer: "A",
      title: "Question 109",
    },
    {
      content:
        "A company requires an external system to be notified whenever an account is updated.What LimitException could the following code trigger?",
      options: [
        "A. System.LimitException: Too many future calls",
        "B. System.LimitException: Too many SOQL queries",
        "C. System.CalloutException: Callout from triggers are currently not supported",
        "D. System.LimitException: Too many callouts",
      ],
      answer: "A",
      title: "Question 110",
    },
    {
      content:
        "Universal Containers wants to use an external Web Service provided by a third-party vendor to validate that shipping and billing addresses are correct. The current vendor uses basic password authentication, but Universal Containers might switch to a different vendor who uses OAuth. What would allow Universal Containers to switch vendors without updating the code to handle authentication?",
      options: [
        "A. Custom Setting (List)",
        "B. Dynamic Endpoint",
        "C. Custom Metadata",
        "D. Named Credential",
      ],
      answer: "D",
      title: "Question 111",
    },
    {
      content:
        "A developer notices the execution of all the test methods in a class takes a long time to run, due to the initial setup of ail the test data that is needed to perform the tests.What should the developer do to speed up test execution?",
      options: [
        "A. Reduce the amount of test methods in the class.",
        "B. Define a method that creates test data and annotate with @testSetup.",
        "C. Define a method that creates test data and annotate with @createData",
        "D. Ensure proper usage of test data factory In all test methods.",
      ],
      answer: "B",
      title: "Question 112",
    },
    {
      content:
        "As part of point-to-point integration, a developer must call an external web service which, due to high demand, takes a long time to provide a response. As part of the request, the developer must collect key inputs from the end user before making the callout.Which two elements should the developer use to implement these business requirements?Choose 2 answers",
      options: [
        "A. Screen now",
        "B. Lightning web component",
        "C. Apex method that returns a Continuation object",
        "D. Process Builder",
      ],
      answer: "B,C",
      title: "Question 113",
    },
    {
      content:
        "A Lightning Component has a section that displays some information about an Account and it works well on the desktop, but users have to scroll horizontally to see the Description field output on their mobile devices and tablets.Which option has the changes to make the component responsive for mobile and tablet devices?",
      options: ["A. ", "B. ", "C. ", "D. "],
      answer: "A",
      title: "Question 114",
    },
    {
      content:
        "Which statement is true regarding the use of user input as part of a dynamic SOQL query?",
      options: [
        "A. Free text input should not be allowed, to avoid SOQL injection",
        "B. The string should be URL encoded by the input form to prevent errors",
        "C. Quotes should be escaped to protect against SOQL injection",
        "D. The String.format() method should be used to prevent injection",
      ],
      answer: "C",
      title: "Question 115",
    },
    {
      content:
        "Within the System.Limit class, what would you call to get the total limit you can call in a single transaction?",
      options: [
        "A. get[typeOfLimit] -> (Ex. getDMLStatements())",
        "B. getLimit [typeOfLirr.it] -> (Ex. getLin~.it DY.LSt aterr.ents () )",
      ],
      answer: "B",
      title: "Question 116",
    },
    {
      content:
        "What should be added to the setup, in the location indicated, for the unit test above to create the controller extension for the test?A)B)C)D)",
      options: ["A. Option B", "B. Option A", "C. Option D", "D. Option C"],
      answer: "D",
      title: "Question 117",
    },
    {
      content:
        "What is the transaction limit on the max timeout for all callouts?",
      options: [
        "A. 60 seconds",
        "B. 120 seconds",
        "C. 60 seconds (synchronous); 200 seconds (async",
        "D. There is no limit",
        "E. 120 seconds (synchronous); 200 seconds (async)",
      ],
      answer: "B",
      title: "Question 118",
    },
    {
      content:
        "Refer to the code snippet below:When a Lightning web component is rendered, a list of opportunity that match certain criteria should be retrieved from the database and displayed to the end-user.Which three considerations must the developer implement to make the fetchOpps method available within the Lightning web component?",
      options: [
        "A. The fetchOpps method cannot mutate the result set retrieved from the database.",
        "B. The fecthOpps method must be annotated with the @ AuraEnabled annotation.",
        "C. The fetchOpps method must be annotated with the @InvocableMethod annotation.",
        "D. The fetchOpps method must specify the (cacheable =true) attribute",
        "E. The fetchOpps method must specify the (continustion-true) attribute",
      ],
      answer: "A,B,D",
      title: "Question 119",
    },
    {
      content:
        "In an organization that has multi-currency enabled, a developer is tasked with building a Lighting Component that displays the top ten Opportunities most recently access by the logged in user. The developer must ensure the Amount and LastModifiedDate field values are displayed according to the user's locale.What is the most effective approach to ensure values displayed respect the user's locale settings?",
      options: [
        "A. Use REGEX expressions to format the values retrieved via SOQL.",
        "B. Use the FOR VIEW clause in the SOQL Query.",
        "C. Use a wrapper class to format the values retrieved via SOQL.",
        "D. Use the FORMAT() function in the SOQL query.",
      ],
      answer: "D",
      title: "Question 120",
    },
    {
      content:
        "A developer is creating a page in App Builder that will be used in the Salesforce mobile app.Which two practices should the developer follow to ensure the page operates with optimal performance?Choose 2 answers",
      options: [
        "A. Limit five visible components on the page.",
        "B. Limit the number of Tabs and Accordion components.",
        "C. Analyze the page with Performance Analysis for App Builder.",
        "D. Limit 25 fields on the record detail page.",
      ],
      answer: "C,D",
      title: "Question 121",
    },
    {
      content:
        "When developing a Visualforce page that will be used by a global organization that does business in many languages and many currencies, which feature should be used? (Choose three.)",
      options: [
        "A. getLocalCurrency()",
        "B. convertCurrency()",
        "C. Global Labels",
        "D. Custom Labels",
        "E. Translation Workberic",
      ],
      answer: "B,D,E",
      title: "Question 122",
    },
    {
      content:
        "A company has a Request__c object that has a lookup to the Opportunity object and a custom field. Status__c, with values of Open,' Closed, and Invalid.' An Opportunity should not be allowed to be deleted if there are any Request__c records related to it that have a Status__c value of Open or 'Closed.' what is the optimal way to enforce the requirement to prevent deletion?",
      options: [
        "A. A Process on Opportunity",
        "B. A Process on Request__c",
        "C. An Apex Trigger on Request__c",
        "D. An Apex Trigger on Opportunity",
      ],
      answer: "D",
      title: "Question 123",
    },
    {
      content:
        'The Contact object has a custom field called "Zone." Its data type is "Text" and field length is 3. What is the outcome after executing the following code snippet in the org?',
      options: [
        "A. Both inserts succeed and the contact record that has the Zone value of 'PI'IT is set to NULL",
        "B. A partial insert succeeds and the contact record that has the Zone value 'IAD1 is inserted",
        "C. Both inserts succeed and the contact record that has the Zone value of PITT is truncated",
        "D. An unhandled DML exception is thrown and no contact records are inserted",
      ],
      answer: "D",
      title: "Question 124",
    },
    {
      content:
        "[FIND 'map' IN ALL FIELDS RETURNING Account (Id, Name), Contact, Opportunity, Lead] What is a valid return type for th|e following SOSL query?",
      options: [
        "A. List<sObject>",
        "B. List<AggregateResult>",
        "C. List<Account>",
        "D. List<List<sObject>>",
      ],
      answer: "D",
      title: "Question 125",
    },
    {
      content:
        "A company processes Orders within their Salesforce instance. When an Order's status changes to 'Paid' it must notify the company's order management system (OMS). The OMS exposes SOAP web service endpoints to listen for when to retrieve the data from Salesforce. What is the optimal method to implement this?",
      options: [
        "A. Generate the Partner WSDL and use it to make a callout to the OMS.",
        "B. Generate the Enterprise WSDL and use it to make a callout to the OMS.",
        "C. Create an Apex trigger and make a callout to the OMS from the trigger.",
        "D. Create an Outbound Message that contains the session ID and send it to the OMS.",
      ],
      answer: "B",
      title: "Question 126",
    },
    {
      content:
        'A custom field Exec_Count_c of type Number is created on an Account object. An account record with value of "1" for a: Exec__Count_c is saved. A workflow field update is defined on the Exec_Count_c field, to increment its value every time an account record is created or updated. The following trigger is defined on the account:trigger ExecOrderTrigger on Account (before insert, before update, after insert, after update){ for (Account accountlnstance: Trigger.New){ if (Trigger . isBefore){ accountlnstance Exec_Count_c += 1; } System, debug (accountlnstance.Exec_Count_c); } }',
      options: ["A. 1,2,3,4", "B. 1,2,3,3", "C. 2,2,3,3", "D. 2, 2, 4, 4"],
      answer: "D",
      title: "Question 127",
    },
    {
      content:
        "A developer is creating a Lightning web component that can be added to a Lightning App Page and displayed when the page Is rendered in desktop and mobile phone format. To ensure a great mobile experience, the developer chooses to use the SLDS grid utility.Which two Lighting web components should the developer implement to ensure the application Is mobile-ready? Choose 2 answers",
      options: [
        "A. <lightning-tree-grid></lightning-tree-grid>",
        "B. <lightning-layou></lightning-layout>",
        "C. <lightning-tree></lightning-tree>",
        "D. <lightning-layout-item></lightning-layout-item>",
      ],
      answer: "B,D",
      title: "Question 128",
    },
    {
      content:
        "A developer wrote an Apex method to update a list of Contacts and wants to make it available for use by Lightning web components.Which annotation should the developer add to the Apex method to achieve this?",
      options: [
        "A. @RemoteAction(cacheable=true)",
        "B. @RemoteAction",
        "C. @AuraEnable",
        "D. @AuraEnabled",
      ],
      answer: "C",
      title: "Question 129",
    },
    {
      content:
        "A developer is building a Lightning web component that searches for Contacts and must communicate the search results to other Lightning web components when the search completes.What should the developer do to implement the communication?",
      options: [
        "A. Publish an event on an event channel.",
        "B. Fire an application event.",
        "C. Publish a message on a message channel.",
        "D. Fire a custom component event.",
      ],
      answer: "C",
      title: "Question 130",
    },
    {
      content:
        "This sales team needs a custom Visualforce page to enter sales orders. When a product is selected on the Visualforce page, a web service is invoked to determine if the product is in stock, and the result is displayed on the page.How can a developer write this page to display the result of the web service and ensure governor limits for concurrent usage are not exceeded?",
      options: [
        "A. Use an Apex trigger with callout=true annotation.",
        "B. Use visualforce Remoting to handle the web service callout.",
        "C. Use Continuation that is invoked when a Submit button is clicked.",
        "D. Use the Salesforce Metadata API in the web service callout.",
      ],
      answer: "C",
      title: "Question 131",
    },
    {
      content:
        "What is the best practice to initialize a Visualforce page in a test class?",
      options: [
        "A. Use Test.currentpage, getParameter, put (MyTestPage);",
        "B. Use Test, setCurrentPage(Page.MyTestPage);",
        "C. Use controller,currentPage, setPage (MyTestPage",
        "D. Use Test.setCurrentpage,MyTestPage;",
      ],
      answer: "B",
      title: "Question 132",
    },
    {
      content:
        "A company notices that their unit tests in a test class with many methods to create many records for prerequisite reference data are slow. What can a developer to do address the issue?",
      options: [
        "A. Move the prerequisite reference data setup to a static method in the test class and call that from each test method.",
        "B. Move the prerequisite reference data setup to a @testSetup method in the test class.",
        "C. Move the prerequisite reference data setup to the constructor for the test class.",
        "D. Move the prerequisite reference data setup to a TestDataFactory and call that from each test method.",
      ],
      answer: "D",
      title: "Question 133",
    },
    {
      content:
        "A developer receives the exception 'SOQL query not selective enough' when performing a query on an object with a large amount of dat a. Which step should be taken to resolve the issue?",
      options: [
        "A. Move the SOQL query to within an asynchronous process.",
        "B. Use an ID in the WHERE clause of the SOQL query.",
        "C. Perform the SOQL query via a call to the REST API.",
        "D. Perform the SOQL query as part of a FOR loop.",
      ],
      answer: "B",
      title: "Question 134",
    },
    {
      content:
        "A developer wants to call an Apex Server-side Controller from a Lightning Aura Component. What are two limitations to the data being returned by the Controller? Choose 2 answers",
      options: [
        "A. A custom Apex Class can be returned, but only the values of public instance properties and methods annotated with @AuraEnabled are serialized and returned.",
        "B. Basic data types are supported, but defaults, such as maximum size for a number, are defined by the objects that they map to.",
        "C. Only Basic data types and sObjects are supported as return types for Apex Controllers called by Lightning Aura Components.",
        "D. A Lists of Custom Apex Classes cannot be returned by Apex Controllers called by Lightning Aura Components.",
      ],
      answer: "A,B",
      title: "Question 135",
    },
    {
      content:
        "A Lightning Component functions in preview mode and needs to be used inside a Lightning App Builder page, but it is not available. What change should be applied to the component?",
      options: [
        "A. Look for errors in the logic in the JavaScript controller.",
        "B. Delete the component, metadata, and Apex controller and recreate them.",
        "C. Refresh the sandbox and upgrade it to the latest API version.",
        "D. Expose it in the markup using the implements and access attributes.",
      ],
      answer: "D",
      title: "Question 136",
    },
    {
      content: "How long is field history retained?",
      options: [
        "A. 36 Months",
        "B. 6 Months",
        "C. 24 Months",
        "D. 12 Months",
        "E. 18 Months",
      ],
      answer: "E",
      title: "Question 137",
    },
    {
      content: "What is the transaction limit for SOQL queries?",
      options: [
        "A. 200 (synchronous), 100 (async)",
        "B. 20 (synchronous), 200 (async)",
        "C. 150 (synchronous), 200 (async)",
        "D. 100 (synchronous), 200 (async)",
        "E. 150 (synchronous), 20 (async)",
      ],
      answer: "D",
      title: "Question 138",
    },
  ],
});
