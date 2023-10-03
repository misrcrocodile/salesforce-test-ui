window.testContent = window.testContent || [];
var testId = "Salesforce.Platform-Developer-II";
var testName = "Salesforce.Platform-Developer-II";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "Salesforce.Platform-Developer-II.v2023-09-09.q84",
  content: [
    {
      content:
        "A developer is writing a Jest for a Lightning web component that conditionally displays child components based on a user's checkbox selections. What should the developer do to property test that the correct components display and hide for each scenario?",
      options: [
        "A. Add a teardown block to reset the DOM after each test.",
        "B. Reset the DOM after each test with the after Each method.",
        "C. Create a new describe block for each test",
        "D. Create a new jsdom instance for each test",
      ],
      answer: "C",
      title: "Question 1",
    },
    {
      content:
        "An org has a Process Builder process on Opportunity that sets a custom field,CommissionBaseAmount__c, when an Opportunity is edited and the Opportunity's Amount changes.A developer recently deployed an Opportunity before update trigger that uses the CommissionBaseAmount__c and complex logic to calculate a value for a custom field CommissionAmount_c, when an Opportunity stage changes to Closed/Won.Users report that when they change the Opportunity to Closed/Won and also change the Amount during the same save, the C:rr.i;5icnA.T.cur.t c is incorrect. Which two actions should the developer take to correct this problem? Choose 2 answers",
      options: [
        "A. Call the trigger from the process.",
        "B. Call the process from the trigger.",
        "C. Use a static Boolean variable in the trigger.",
        "D. Uncheck the recursion checkbox on the process.",
      ],
      answer: "A,C",
      title: "Question 2",
    },
    {
      content:
        "A developer Is asked to develop a new AppExthange application. A feature of the program creates Survey records when a Case reaches a certain stage and Is of a certain Record Type. This feature needs to be configurable, as different Salesforce instances require Surveys at different times. Additionally, the out-of-the-box AppExchange app needs to come with a set of best practice settings that apply to most customers. What should the developer use to store and package the custom configuration settings for the app?",
      options: [
        "A. Process Builder",
        "B. Custom Metadata",
        "C. Custom Settings",
        "D. Custom Objects",
      ],
      answer: "B",
      title: "Question 3",
    },
    {
      content:
        "A developer sees test failures in the sandbox but not in production. No code or metadata changes have been actively made to either environment since the sandbox was created. Which consideration should be checked to resolve the issue?",
      options: [
        "A. Ensure the Apex Classes are on the same API version.",
        "B. Ensure Workflow Rules are inactive.",
        "C. Ensure the sandbox is on the same release as production.",
        "D. Ensure Process Builder processes are inactive.",
      ],
      answer: "C",
      title: "Question 4",
    },
    {
      content:
        "Universal containers needs to integrate with several external systems. The process is initiated when a record is created in Salesforce. The remote systems do not require Salesforce to wait for a response before continuing. What is the recommended best solution to accomplish this?",
      options: [
        "A. Platform event",
        "B. Outbound message",
        "C. PushTopic event",
        "D. Trigger with callout",
      ],
      answer: "B",
      title: "Question 5",
    },
    {
      content:
        "Global with sharing class MyRemoter { public String accountName { get; set; } public static Account account{ get; set; } public AccountRemoter(} {} @RemoteAction global static Account getAccount (String acccuntName) { account = [SELECT Id, Name, NumberOfEmployees FROM Account WHERE Name =:accountName]; return account; } } Consider the Apex class above that defines a RemoteAction used on a Visualforce search page. Which code snippet will assert that the remote action returned the correct Account?",
      options: [
        "A. Account a = MyRemoter.getAccount ('TestAccount'):System.assertEquals{ 'TestAccount', a.Name };",
        "B. MyRemoter remote = new MyRemoter();Account a = remote.getAccount ({'TestAccount');System.assertEquals, 'TestAcccunt', a.Name -;",
        "C. MyRemoter remote = new MyRemoter('TestAccount'};Account a = remote.getAccount {);System.assertEquals(, ''TestAccount', a.Name -;",
        "D. Account a = controller.getAccount('TestAccount');System.assertEquals(, 'TestAccount', a.Name } ;",
      ],
      answer: "A",
      title: "Question 6",
    },
    {
      content:
        "In an organization that has multi-currency enabled, a developer is tasked with building a Lighting Component that displays the top ten Opportunities most recently access by the logged in user. The developer must ensure the Amount and LastModifiedDate field values are displayed according to the user's locale. What is the most effective approach to ensure values displayed respect the user's locale settings?",
      options: [
        "A. Use the FOR VIEW clause in the SOQL Query.",
        "B. Use the FORMAT() function in the SOQL query.",
        "C. Use REGEX expressions to format the values retrieved via SOQL.",
        "D. Use a wrapper class to format the values retrieved via SOQL.",
      ],
      answer: "B",
      title: "Question 7",
    },
    {
      content:
        'A developer is developing a reusable Aura component that will reside on an sObject Lightning page with the following HTML snippet:Caura: component implements-"forcethaaRecordid, flexipage:availableForAllPageTypes"><div>Hello!</div></aura:component>How can the component\'s controller get the context of the Lightning page that the sobject is an without requiring additional best coverage?',
      options: [
        "A. Set the object type as a component attribute.",
        "B. Use the getSObjectType () method in an Apex class",
        "C. Add force:hasSobjectName to the implements attribute",
        "D. Create a design attribute and configure via App Builder",
      ],
      answer: "C",
      title: "Question 8",
    },
    {
      content:
        "Consider the following code snippet:How should <c-order> component communicate to the <c-order-order> component that an order has been selected by the user?",
      options: [
        "A. Create and fire a standard DOM event.",
        "B. Created and fire an application event.",
        "C. Create and fire a component event.",
        "D. Create and dispatch a custom event",
      ],
      answer: "A",
      title: "Question 9",
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
      title: "Question 10",
    },
    {
      content:
        "An Apex trigger creates a Contract record every time an Opportunity record is marked as Closed and Won.This trigger is working great, except (due to a recent acquisition) Opportunity records need to be loaded into the Salesforce instance.When a test batch of records are loaded, the Apex trigger creates Contract records. A developer is tasked with preventing Contract records from being created when mass Loading the Opportunities, but the daily users still need to have the Contract records created. What is the most extendable way to update the Apex trigger to accomplish this?",
      options: [
        "A. Add the Profile ID of the user who loads the data to the trigger, so the trigger will not fire for this user.",
        "B. Use a hierarchy custom setting to skip executing the logic inside the trigger for the user who loads the data.",
        "C. Use a list custom setting to disable the trigger for the user who loads the data.",
        "D. Add a validation rule to the Contract to prevent Contract creation by the user who loads the data.",
      ],
      answer: "B",
      title: "Question 11",
    },
    {
      content:
        "A company uses an external system to manage its custom account territory assignments. Every quarter, millions of Accounts may be updated in Salesforce with new Owners when the territory assignments are completed in the external system. What is the optimal way to update the Accounts from the external system?",
      options: [
        "A. Bulk API",
        "B. Apex REST Web Service",
        "C. Composite REST API",
        "D. SOAP API",
      ],
      answer: "B",
      title: "Question 12",
    },
    {
      content:
        "A company has a native iOS app for placing orders that needs to connect to Salesforce to retrieve consolidated information from many different objects in a JSON format. Which is the optimal method to implement this in Salesforce?",
      options: [
        "A. Apex REST Callout",
        "B. Apex REST Web Service",
        "C. Apex SOAP Callout",
        "D. Apex SOAP Web Service",
      ],
      answer: "B",
      title: "Question 13",
    },
    {
      content:
        "A developer wrote an Apex method that makes an HTTP callout to an external system to get specialized data when a button is clicked from a custom Lightning web component on the Account record page.Recently, users have complained that it takes longer than desired for the data to appear on the page after clicking the button. What should the developer use to troubleshoot this issue?",
      options: [
        "A. Lightning Inspector",
        "B. Salesforce CU",
        "C. Developer Console",
        "D. Event Logs",
      ],
      answer: "C",
      title: "Question 14",
    },
    {
      content:
        "Universal Containers (UC) wants to develop a customer community to help their customers log issues with their containers. The community needs to function for their German- and Spanish-speaking customers also.UC heard that it's easy to create an international community using Salesforce, and hired a developer to build out the site. What should the developer use to ensure the site is multilingual?",
      options: [
        "A. Use Custom Labels to ensure custom messages are translated property.",
        "B. Use Custom Metadata to translate custom picklist values.",
        "C. Use Custom Settings to ensure custom messages are translated properly.",
        "D. Use Custom Objects to translate custom picklist values.",
      ],
      answer: "A",
      title: "Question 15",
    },
    {
      content:
        "What should a developer use to query all Account fields for the Acme account in their sandbox?",
      options: [
        "A. SELECT ALL FROM Account WHERE Name = 'Acme' LIMIT 1",
        "B. SELECT FROM ACCOUNT WHERE Name = 'Acme' LIMIT 1",
        "C. SELECT FIELDS (ALL) FROM Account WHERE Name = 'Acme' LIMIT 1",
        "D. SELECT FIELDS FROM Account WHERE Name = 'Acme' LIMIT 1",
      ],
      answer: "C",
      title: "Question 16",
    },
    {
      content:
        "Account object has a field, Audit_Code__, that is used to specify what type of auditing the Account needs and a Lookup to user, Auditor__ that is the assigned auditor.When an Account is initially created, the user specifies the Audit_Code__. Each User in the org has a unique text field, that is used to automatically assign the correct user to the Account Auditor__ field. What should be changed to most optimize the code's efficiency? Choose 2 answers",
      options: [
        "A. Build a Map <Id, List<String>> of Account Id to audit codes.",
        "B. Add a WHERE clause to the SOQL query to filter On audit codes.",
        "C. Add an initial SOQL query to get all distinct audit codes.",
        "D. Build a Map<String, List<Account>> of audit code to accounts.",
      ],
      answer: "B,D",
      title: "Question 17",
    },
    {
      content:
        "A Visualforce page loads slowly due to the large amount of data it displays. Which strategy can a developer use to improve the performance?",
      options: [
        "A. use lazy loading to load the data on demand, instead of in the controller's constructor.",
        "B. use an <apex:actionPoller> in the page to load all of the data asynchronously.",
        "C. Use the transient keyword for the List variables used in the custom controller.",
        "D. use Javascript to move data processing to the browser instead of the controller.",
      ],
      answer: "A",
      title: "Question 18",
    },
    {
      content:
        "As part of a custom interface, a developer team creates various new Lightning web components. Each of the components handles error* using toast messages. When the development is complete, all the components are added to the same Lightning page.During acceptance testing, users complain about the long chain of toast messages that display when errors occur loading the component Which two techniques should the developer Implement to improve the user experience? Choose 2 answers",
      options: [
        "A. Use a <template> tag to display in-place error messages.",
        "B. Use public properties on each component to display the error messages.",
        "C. Use a Lightning web component to aggregate and display all errors.",
        "D. Use the window. Alert () method to display the error messages.",
      ],
      answer: "A,B",
      title: "Question 19",
    },
    {
      content: "Which statement is true regarding savepoints?",
      options: [
        "A. Static variables are not reverted during a rollback.",
        "B. Reference to savepoints can cross trigger invocations.",
        "C. Savepoints are not limited by DML statement governor limits",
        "D. You can roll back to any savepoint variable created In any order",
      ],
      answer: "A",
      title: "Question 20",
    },
    {
      content:
        "Which technique can run custom logic when a Lightning web component is loaded?",
      options: [
        "A. Call SA.enqueueAction and pass in the method to call.",
        "B. Use the connected-allbacM) method.",
        "C. Use the renderedCallback () method.",
        "D. Use an <aura:handler> init event to call a function.",
      ],
      answer: "B",
      title: "Question 21",
    },
    {
      content:
        "Which use case can be performed only by using asynchronous Apex?",
      options: [
        "A. Updating a record after the completion of an insert",
        "B. Making a call to schedule a batch process to complete in the future",
        "C. Calling a web service from an Apex trigger",
        "D. Querying tens of thousands of records",
      ],
      answer: "C",
      title: "Question 22",
    },
    {
      content:
        "A developer creates a Lightning web component to allow a Contact to be quickly entered- However, error messages are not displayed. Which component should the developer add to the form to display error messages?",
      options: [
        "A. lightning-messages",
        "B. aura:messages",
        "C. lightning-error",
        "D. apex:messages",
      ],
      answer: "A",
      title: "Question 23",
    },
    {
      content:
        "Consider the following code snippet:How should <c-order> component communicate to the <c-order-order> component that an order has been selected by the user?",
      options: [
        "A. Create and dispatch a custom event",
        "B. Created and fire an application event.",
        "C. Create and fire a standard DOM event.",
        "D. Create and fire a component event.",
      ],
      answer: "C",
      title: "Question 24",
    },
    {
      content:
        "Users report that a button on a custom Lightning Web Component is not working. However, there are no other details provided. What should the developer use to ensure error messages are properly displayed?",
      options: [
        "A. Add JavaScript and HTML to display an error message.",
        "B. Add a Try/Catch block surrounding the DML statement.",
        "C. Use the Database method with allOrNone set to false.",
        "D. Add the <apex:messages/> tag to the component.",
      ],
      answer: "A",
      title: "Question 25",
    },
    {
      content:
        "A developer created a Lightning web component that uses a lightning-record-edit-form t collect information about Leads. Users complain that they only see one error message at a time about their input when trying to save a Lead record.complain that they only see one error message at a time about their input when trying to save a Lead record. What is the recommended approach to perform validations on more than one field, and display multiple error messages simultaneously?with minimal JavaScript intervention?",
      options: [
        "A. Validation rules",
        "B. External JavaScript library",
        "C. Try/catch/finally block",
        "D. Apex trigger",
      ],
      answer: "B",
      title: "Question 26",
    },
    {
      content:
        "A developer is asked to create a Lightning web component that will be invoked via button on a record page. The component must be displayed in a model dialog. Which three steps should the developer take to achieve this? Choose 3 answers",
      options: [
        "A. Set eventType to action.",
        "B. In target, add lightning_RecordAction as a target.",
        "C. Add a tarqetConfig anf set targets to lightning_RecordAction.",
        "D. In targetConfigs, add Lightning_Apppage as a target.",
        "E. Set action Type to screenAction.",
      ],
      answer: "B,C,E",
      title: "Question 27",
    },
    {
      content:
        "A developer is working on a set of custom Aura components that can be Individually added to a home page.One of the components, c:searchAccounts, allows users to search for an Account and then select a specific found Account. Once selected, the other components.Should get other information related to the selected Account and display it Which event should the c: 2eazchRccounta component fire to make it known that an Account is selected?",
      options: [
        "A. A component event",
        "B. A publish event",
        "C. An application event",
        "D. A refrestiview event",
      ],
      answer: "A",
      title: "Question 28",
    },
    {
      content:
        "Universal Containers uses Salesforce to manage its product offerings to customers.A developer is building a custom mobile app that must allow app users to view product information, in real time, that is stored in Salesforce. What should the developer use to get the product information from Salesforce?",
      options: [
        "A. User Interface API",
        "B. REST APT",
        "C. Streaming API",
        "D. SOAP API",
      ],
      answer: "B",
      title: "Question 29",
    },
    {
      content:
        "A company manages information about their product offerings in custom objects named Catalog and Catalog Item. Catalog Item has a master-detail field to Catalog, and each Catalog may have as many as 100,000 Catalog Items.Both custom objects have a CurrencylsoCode Text field that contains the currency code they should use. If a Catalog's CurrencylsoCode changes, all of its Catalog Items' CurrencylsoCodes should be changed as well. What should a developer use to update the CurrencylsoCodes on the Catalog Items when the Catalog's CurrencylsoCode changes^5",
      options: [
        "A. An after insert trigger on Catalog that updates the Catalog Items if the Catalog's CurrencylsoCode is different",
        "B. A Database.Schedulable and Database.Batchable class that queries the Catalog object and updates the Catalog Items if the Catalog CurrencylsoCode is different",
        "C. A Database.Schedulable and Database.Batchable class that queries the Catalog Item object and updates the Catalog Items if the Catalog CurrencylsoCode is different",
        "D. An after insert trigger on Catalog Item that updates the Catalog Items if the Catalog's CurrencylsoCode is different",
      ],
      answer: "C",
      title: "Question 30",
    },
    {
      content:
        "The test method above tests an Apex trigger that the developer knows will make a lot of queries when a lot of Account are simultaneously updated to be customer. The test method fails at the Line 20 because of too many SOQL queriesWhat is the correct way to fix this?The test method above tests an Apex trigger that the developer knows will make a lot of queries when a lot of Accounts are simultaneously updated to be customers. The test method fails at the Line 20 because of too many SOQL queries. What is the correct way to fix this?",
      options: [
        "A. Replace most of the Apex Trigger with Process Builder processes to reduce the number of queries in the trigger.",
        "B. Change the DataFactory class to create fewer Accounts so that the number of queries in the trigger is reduced.",
        "C. Add TeststartTest() before Line 18 of the code and add Test.stopTest() after line 18 of the code.",
        "D. Add TesLstartTest() before and Test.stop Test() after both Line 7 of the code and Line 20 of the code.",
      ],
      answer: "C",
      title: "Question 31",
    },
    {
      content:
        "A developer is asked to find a way to store secret data with an ability to specify which profiles and users can access which secrets. What should be used to store this data?",
      options: [
        "A. Static resources",
        "B. Custom settings",
        "C. Custom metadata",
        "D. System.Cookie class",
      ],
      answer: "B",
      title: "Question 32",
    },
    {
      content:
        "A developer created a Lightning web component that allows users to input a text value that is used to search for Accounts by calling an Apex method. The Apex method returns a list of AccountWrappers and is called imperatively from a JavaScript event handler. Which two changes should the developer make so the Apex method functions correctly? Choose 2 answers",
      options: [
        "A. Add @AuraEnat:ei to line 01.",
        "B. Add @AuraEnabled to lines 11 and 12.",
        "C. Add @AuraEnafcle3 to line 09.",
        "D. Add @AuraEnabled to line 03.",
      ],
      answer: "B,D",
      title: "Question 33",
    },
    {
      content:
        "A developer is building a Lightning web component that displays quantity, unit price, and the total for an order line item. The total is calculated dynamically as the quantity multiplied by the unit price. What must be added to display the total?",
      options: [
        "A. Add calculate Total() {return quantity * unitPrice;} to the javaScript and Total : {calculate Total()} in the template.",
        "B. Add Total; {multiple quantit,y unitprice)} in the template.",
        "C. Add Total: {quantity * UnitPrice} in the template.",
        "D. Add get total() { return quantity * unitPrice;} to the JavaScript and Total: {total} in the template.",
      ],
      answer: "D",
      title: "Question 34",
    },
    {
      content:
        "A business requires that every parent record must have a child record. A developer writes an Apex method with two DML statements to insert a parent record and a child record.A validation rule blocks child records from being created. The method uses a try/catch block to handle the DML exception. What should the developer do to ensure the parent always has a child record?",
      options: [
        "A. Use addError () on the parent record if an error occurs on the child record.",
        "B. Use Database.insert () and set the allorNone parameter to true.",
        "C. Set a database savepoint to rollback if there are errors.",
        "D. Delete the parent record in the catch statement when an error occurs on the child record DML operation.",
      ],
      answer: "C",
      title: "Question 35",
    },
    {
      content:
        "Consider the following queries. For these queries, assume that there are more than 200,000 Account records. These records include soft-deleted records; that is, deleted records that are still in the Recycle Bin. Note that there are two fields that are marked as External Id on the Account. These fields are Customer_Number__c and ERP_Key__c. Which two queries are optimized for large data volumes? Choose 2 answers",
      options: [
        "A. SELECT Id FROM Account WHERE Id IN : aListVariable",
        "B. SELECT Id FROM Account WHERE Name != ' ' AND Customer Number c = 'ValueA'",
        "C. SELECT Id FROM Account WHERE Name != ' ' AND IsDeleted = false",
        "D. SELECT Id FROM Account WHERE Name != NULL",
      ],
      answer: "A,B",
      title: "Question 36",
    },
    {
      content:
        "A software company uses a custom object Defect_c, to track defects in their software, Defect__c has organisation-wide defaults set to private Each Dafect__c has a related list of Reviewer_c records, each with a lookup field to User that is used to indicate that the User will review the Defect_c. What should be used to give the User on the Reviewer_c record read only access to the Defect_c record on the Reviewer_c record?",
      options: [
        "A. View All on Defect_c",
        "B. Apex managed sharing",
        "C. lightning web component",
        "D. Criteria based sharing",
      ],
      answer: "A",
      title: "Question 37",
    },
    {
      content:
        "A developer has requirement to query three fields (id, name, Type) from an Account and first and last names for all Contacts associated with the Account. Which option is the preferred optimized method to achieve this for the Account named 'Ozene Electronics'?",
      options: [
        "A. Account a = (SELECT ID, Name, Type, (select contat,firstName, Contact,LastName from Account, Contacts) from Account where name; Ozone Electronic' Limit 1 );",
        "B. List 1Contacts = new list ( );for(Contact c ; 1Select firstname, lastname Account, Name Account,ID Account, Type from Contact where Account: Name=' electronics')) ( iContacts.add(c);)",
        "C. Account a = (SELECT ID, Name, Type from Account where name= Ozone Electronics;) list 1contacts = (SELECT firstname, lastname from Contacts where accountid=: a -ID0;",
        "D. List 1Accounts = (Select ID, Name, Type from Account Join (Select ID, firstname, lastname form Contact where contact account , name 'ozone electronics));",
      ],
      answer: "A",
      title: "Question 38",
    },
    {
      content:
        "Refer to the markup below:A Lightning web component displays the Account name and two custom fields out of 275 that exist on the object. The developer receives complaints that the component performs slowly. What can the developer do to improve the performance?",
      options: ["A. ", "B. ", "C. ", "D. "],
      answer: "D",
      title: "Question 39",
    },
    {
      content:
        "A developer notices the execution of all the test methods in a class takes a long time to run, due to the initial setup of ail the test data that is needed to perform the tests. What should the developer do to speed up test execution?",
      options: [
        "A. Reduce the amount of test methods in the class.",
        "B. Define a method that creates test data and annotate with @testSetup.",
        "C. Ensure proper usage of test data factory In all test methods.",
        "D. Define a method that creates test data and annotate with @createData",
      ],
      answer: "B",
      title: "Question 40",
    },
    {
      content:
        "What should be added to the setup, in the location indicated, for the unit test above to create the controller extension for the test?",
      options: ["A. ", "B. ", "C. ", "D. "],
      answer: "A",
      title: "Question 41",
    },
    {
      content:
        "A developer is writing code that requires making callouts to an external web service. Which scenario necessitates that the callout be made in an @future method?",
      options: [
        "A. The callouts will be made in an Apex Trigger.",
        "B. The callouts will be made in an Apex Test class.",
        "C. The callout could take longer than 60 seconds to complete.",
        "D. over 10 callouts will be made in a single transaction.",
      ],
      answer: "A",
      title: "Question 42",
    },
    {
      content:
        "AWC wants the real-time inventory reduction for a product to be sent to many of its external systems, including some future systems the company is Currently planning. What should a develops add to the code at the placeholder to meet these requirement!?",
      options: ["A. ", "B. ", "C. ", "D. "],
      answer: "A",
      title: "Question 43",
    },
    {
      content:
        "Which three actions must be completed in a Lightning web component for a JavaScript file in a static resource to be loaded? Choose 3 answer",
      options: [
        "A. Import a method from the platformResourceLoader.",
        "B. Reference the static resource in a <script> tag.",
        "C. Import the static resource.",
        "D. Append the static resource to the DOM.",
        "E. Call LoadScript.",
      ],
      answer: "A,C,E",
      title: "Question 44",
    },
    {
      content:
        "What are three reasons that a developer should write Jest tests for Lightning web components? Choose 3 answers",
      options: [
        "A. To test a component's non-public properties",
        "B. To test how multiple components work together",
        "C. To verify the DOM output of a component",
        "D. To verify that events fire when expected",
        "E. To test basic user interaction",
      ],
      answer: "A,C,D",
      title: "Question 45",
    },
    {
      content:
        "A developer created an Apex class that updates an Account based on input from a Lightning web component that is used to register an Account. The update to the Account should only be made if it has not already been registered. What should the developer do to ensure that users do not overwrite each other's updates to the same Account if they make updates at the same time?",
      options: [
        "A. Use CastiCase.update(account, false).",
        "B. Add a try/catch block around the update.",
        "C. Use upsert instead of update.",
        "D. Use FOR UPDATE in a SOQL query.",
      ],
      answer: "A",
      title: "Question 46",
    },
    {
      content:
        "A Visualforce page loads slowly due to the large amount of data it displays. Which strategy can a developer use to improve the performance?",
      options: [
        "A. use lazy loading to load the data on demand, instead of in the controller's constructor.",
        "B. use Javascript to move data processing to the browser instead of the controller.",
        "C. Use the transient keyword for the List variables used in the custom controller.",
        "D. use an <apex:actionPoller> in the page to load all of the data asynchronously.",
      ],
      answer: "A",
      title: "Question 47",
    },
    {
      content:
        "Users upload .csv files in an external system to create account and contact records in Salesforce. Up to 200 records can be created at a time. The users need to wait for a response from Salesforce in the external system, but the data does not need to synchronize between the two systems.Based on these requirements, which method should a developer use to create the records in Salesforce?",
      options: [
        "A. Bulk API 2.0",
        "B. Apex web services",
        "C. REST API request using composite/vbatch/",
        "D. REST API request using composite/tree/",
      ],
      answer: "A",
      title: "Question 48",
    },
    {
      content:
        "A developer has a test class that creates test data before making a mock call-out, but now receives a you have uncommitted work pending. Please commit or callout before calling out error. What step should be taken to resolve the error?",
      options: [
        "A. Ensure both the insertion and mock callout occur after the Test.stopTest().",
        "B. Ensure the records are inserted before the Test.startTest() statement and the mock callout after the Test.startTest().",
        "C. Ensure the records are inserted before the Test.startTest() statement and the mock callout occurs within a method annotated with @testSetup.",
        "D. Ensure both the insertion and mock callout occur after the Test.startTest().",
      ],
      answer: "B",
      title: "Question 49",
    },
    {
      content:
        'Refer to the following code snippets:MyOpportunities.jsOpportunityController.cIsA developer is experiencing issues with a Lightning web component. The component must surface information about Opportunities owned by the currently logged-in user When the component Is rendered, the following message Is displayed: "Error retrieving data". Which modification should be implemented to the Apex class to overcome the issue7',
      options: [
        "A. Edit the code to use the without sharing keyword in the Apex class.",
        "B. Use the continuation-true attribute in the Apex method.",
        "C. Ensure the OWD for the Opportunity object is Public.",
        "D. Use the Cacheable-true attribute in the Apex method.",
      ],
      answer: "D",
      title: "Question 50",
    },
    {
      content:
        "A company uses Opportunism to track sales to their customers and their org has millions of Opportunities. They want to begging to track revenue over time through a related Revenue object.As part of their initial implementation, they want to perform a one-time seeding of their data by automatically creating and populating Revenue records for Opportunities, based on complex logic. They estimate that roughly 100,000 Opportunities will have revenue records and populated. What is the optimal way to automate this?",
      options: [
        "A. Use Database.txtcuteBatch() to invoke a Database.Batchable class.",
        "B. Use Database.executeBatch() to invoke a Queueable dass.",
        "C. Use System.scheduleJob() to schedule a Database.Scheduleable class.",
        "D. Use System.enqueueJob>() to Invoke a Queueable class.",
      ],
      answer: "A",
      title: "Question 51",
    },
    {
      content:
        "As part of a new integration, a developer is asked to implement a new custom search functional that is capable of performing unrestricted Queries and can account for all values within a custom picklist field. Type_ c, on the Opportunity object. The search feature must also account for NULL values. The organization-wide default for the Opportunity object is set to Public Read-Only, and a new custom index has been created for the type_ c, field. There are more than 5 million Opportunity records within the environment, and a considerable amount of the existing records have NULL values for the picklist. Which technique should the developer implement to maximize performance when querying NULL values?",
      options: [
        "A. Perform two SOQL query; one to query Opportunities where Type c _ NULL, and another to query where Type_ c = Null, then join the result set using Apex.",
        "B. Use a SOSL query to return ALL opportunities that have a value of NULL in any field.",
        "C. Use the OR operator to combine WHERE Causes to strictly search for each value within the picklist, including Type__ c =NULL.",
        "D. Create a formula field that substitutes Null values for a sting of text, create an index for the formula field, then use the formula within the where cause.",
      ],
      answer: "A",
      title: "Question 52",
    },
    {
      content:
        "There are user complaints about slow render times of a custom data table within a Visualforce page that loads thousands of Account records at once. What can a developer do to help alleviate such issues?",
      options: [
        "A. Upload a third-party data table library as a static resource.",
        "B. Use the standard Account List controller and implement pagination.",
        "C. Use the transient keyword in the Apex code when querying the Account records.",
        "D. Use JavaScript remoting to query the accounts.",
      ],
      answer: "B",
      title: "Question 53",
    },
    {
      content:
        "A company represents their customers as Accounts in Salesforce. All customers have a unique Customer_Number__c that is unique across all of the company's systems. They also have a custom Invoice__c object, with a Lookup to Account, to represent invoices that are sent out from their external system. This company wants to integrate invoice data back into Salesforce so Sales Reps can see when a customer is paying their bills on time. What is the optimal way to implement this?",
      options: [
        "A. Create a cross-reference table in the custom invoicing system with the Salesforce Account ID of each Customer and insert invoice data nightly.",
        "B. Ensure Customer_Number__c is an External ID and that a custom field Invoice_Number__c is an External ID and Upsert invoice data nightly.",
        "C. Use Salesforce Connect and external data objects to seamlessly import the invoice data into Salesforce without custom code.",
        "D. Query the Account Object upon each call to insert invoice data to fetch the Salesforce ID corresponding to the Customer Number on the invoice",
      ],
      answer: "B",
      title: "Question 54",
    },
    {
      content:
        "Refer to the component code and requirements below:Requirements:1. For mobile devices, the information should display In three rows.2. For desktops and tablets, the information should display in 2 single row.Requirement 2 is not displaying as desired. Which option has the correct component code to meet the requirements for desktops and and tablets?",
      options: ["A. ", "B. ", "C. ", "D. "],
      answer: "C",
      title: "Question 55",
    },
    {
      content:
        "Universal Containers implements a private sharing model for the Convention_Attendence_c custom object. As part of a new quality assurance effort, the company created an Event___Reviewer__c user lookup field on the object. Management wants the event reviewer to automatically gain Read/write access to every record they are assigned to. What is the best approach to ensure the assigned reviewer obtains Read/Write access to the record?",
      options: [
        "A. Create a criteria-based sharing rule on the Convention Attendee custom object to share the records the a group of Event Reviewers.",
        "B. Create a Before Insert trigger on the Convention Attendee custom object, and use Apex Sharing Reasons and Apex Managed Sharing.",
        "C. Create an After Insert trigger on the Convention Attendee custom object, and use Apex Sharing Reasons and Apex Managed Sharing.",
        "D. Create criteria-based sharing rules on the Convention Attendee custom object to share the records with the Event Reviewers.",
      ],
      answer: "B",
      title: "Question 56",
    },
    {
      content:
        "Refer to the Aura component below:Component markup:Controller JS:A developer receives complaints that the component loads slowly. Which change can the developer implement to make the component perform faster?",
      options: [
        "A. Change the default for showcontactlnfo to \"false'.",
        "B. Move the contents of <c: contactlnfo> into the component.",
        "C. Change the type of contactInfo to \"Map'.",
        "D. Add a change event handler for showcontactInfo.",
      ],
      answer: "A",
      title: "Question 57",
    },
    {
      content:
        "A Page throws an Attempt to dereference a null object error for a Contact. What change In the controller will fix the error?",
      options: [
        "A. Use a condition in the getter to return a new Contact if it is null.",
        "B. Declare a static final Contact at the top of the controller.",
        "C. Change the getter's signature to be static Contact.",
        "D. Change the setters signature to return a Contact.",
      ],
      answer: "A",
      title: "Question 58",
    },
    {
      content:
        "Refer to the code snippet below:When a Lightning web component is rendered, a list of opportunity that match certain criteria should be retrieved from the database and displayed to the end-user. Which three considerations must the developer implement to make the fetchOpps method available within the Lightning web component?",
      options: [
        "A. The fecthOpps method must be annotated with the @ AuraEnabled annotation.",
        "B. The fetchOpps method must be annotated with the @InvocableMethod annotation.",
        "C. The fetchOpps method cannot mutate the result set retrieved from the database.",
        "D. The fetchOpps method must specify the (cacheable =true) attribute",
        "E. The fetchOpps method must specify the (continustion-true) attribute",
      ],
      answer: "A,C,D",
      title: "Question 59",
    },
    {
      content:
        "A developer has working business logic code, but sees the following error in the test class:You have uncommitted work pending. Please commit or rollback before calling out. What is a possible solution?",
      options: [
        "A. Call support for help with the target endpoint, as it is likely an external code error.",
        'B. Set seeAIIData to "true" at the top of the test class, since the code does not fail in practice.',
        "C. Use test.IsRunningTest() before making the callout to bypass it in test execution.",
        "D. Rewrite the business logic and test classes with TestVisible set on the callout.",
      ],
      answer: "C",
      title: "Question 60",
    },
    {
      content:
        "A developer is building a Lightning web component that retrieves data from Salesforce and assigns it to the record property. What must be done in the component to get the data from Salesforce?",
      options: ["A. ", "B. ", "C. ", "D. "],
      answer: "B",
      title: "Question 61",
    },
    {
      content:
        "The following code segment is railed from a Trigger handler class from the Opportunity trigger:Which two changes should improve this code and make it more efficient? Choose 2 answers",
      options: [
        "A. Move the SOQL to fetch the account record outside of the for loop.",
        "B. Use Triginstead.old instead of Trigger.new.",
        "C. Move the DML outside of the for loop.",
        "D. Move business logic inside the Opportunity trigger.",
      ],
      answer: "A,C",
      title: "Question 62",
    },
    {
      content:
        "Consider the Apex class below that defines a RemoteAction used on a Visualforce search page. Which code snippet will assert that the remote action returned the correct Account?",
      options: ["A. ", "B. "],
      answer: "B",
      title: "Question 63",
    },
    {
      content:
        "A company uses Salesforce to sell products to customers. They also have an external product information management (P1M) system that If the system of record for products.A developer received these requirements* Whenever a product is created or updated in the PIM, a product must be created or updated as a Product2 record in Salesforce and a PricebookEntry record must be created or updated automatically by Salesforce.* The PricebookEntry should be created in a Pricebooki that is specified in a custom setting. What should the developer use to satisfy these requirements?",
      options: [
        "A. Sobject Tree",
        "B. Apex REST",
        "C. Invocated Action",
        "D. Event Monitoring",
      ],
      answer: "B",
      title: "Question 64",
    },
    {
      content:
        "The Account object has a field, auais_Code__c, that is used to specify what type of auditing the Account needs and a Lookup to User, Ruditor_c, that is the assigned auditor.When an Account is initially created, the user specifies the Audit_Code__c. Each User in the org has a unique text field, Rudi.that is used to automatically assign the correct user to the Account's Auditor__c field. What should be changed to most optimize the code's effidency? Choose 2 answers",
      options: [
        "A. Sulld eMepcie, List<String> of Account Ic to aucit codes.",
        "B. Build a Mep<String, list<Account>> of audit code to accounts,",
        "C. Add an initial SOQL query to get all distinct audit codes.",
        "D. Add a WHERE clause to the SOQL query to filter on audit codes.",
      ],
      answer: "B,D",
      title: "Question 65",
    },
    {
      content:
        "Universal Containers (UC) has enabled the translation workbench and has translated picklist values. UC has a custom multi-select picklist field, Products__z, on the Account object that allows sales reps to specify which of UC's products an Account already has. A developer is tasked with writing an Apex method that retrieves Account records, Including product_c field. What should the developer do to ensure the value of Products__c is in the current user's language?",
      options: [
        "A. Set the locale on each record in the SOQL result list.",
        "B. Use the locale clause in the SOQL query.",
        "C. Call the translate ( ) method on each record in the SOQL result list.",
        "D. Use toLabel1 Products_c in the fields list of the SOQL query.",
      ],
      answer: "D",
      title: "Question 66",
    },
    {
      content:
        "A business currently has a process to manually upload orders from its external Order Management System (OMS) into Salesforce.This is a labor intensive process since accounts must be exported out of Salesforce to get the IDs. The upload file must be updated with the correct account IDs to relate the orders to the corresponding accounts. Which two recommendations should make this process more efficient? Choose 2 answers",
      options: [
        "A. Identify unique fields on Order and Account and set them as External IDs.",
        "B. Use the Insert Wizard in the Data Loader to import the data.",
        "C. Ensure the data in the file is sorted by the order ID.",
        "D. Use the upsert wizard in the Data Loader to import the data.",
      ],
      answer: "A,C",
      title: "Question 67",
    },
    {
      content:
        "After a Platform Event is defined in a Salesforce org, events can be published via which two mechanisms? Choose 2 answers",
      options: [
        "A. internal Apps can use Outbound Messages",
        "B. Internal Apps can use Process Builder.",
        "C. External Apps require a custom Apex web service.",
        "D. External Apps can use the standard Streaming API.",
      ],
      answer:
        "B,D  Explanation internal apps can use processes, flows, or Apex to publish platform event messages from a Salesforce app. Process Builder is a tool that lets you automate business processes by creating processes. You can use Process Builder to publish platform event messages when a record changes or when a platform event occurs. external apps can use Salesforce APIs to publish platform event messages. You can use any Salesforce API to create platform events, such as SOAP API, REST API, or Bulk API. The Streaming API is a Salesforce API that lets you push a stream of notifications from Salesforce to external apps. You can use the Streaming API to publish platform event messages by creating records of your event type. Therefore, using Process Builder and Streaming API are two mechanisms to publish platform event messages after a platform event is defined in a Salesforce org. https://developer.salesforce.com/docs/atlas.en-us.platform_events.meta/platform_events/platform_events_publis ",
      title: "Question 68",
    },
    {
      content:
        "The test method above tests an Apex trigger that the developer knows will make a lot of queries when a lot of Account are simultaneously updated to be customer. The test method fails at the Line 20 because of too many SOQL queriesWhat is the correct way to fix this?The test method above tests an Apex trigger that the developer knows will make a lot of queries when a lot of Accounts are simultaneously updated to be customers. The test method fails at the Line 20 because of too many SOQL queries. What is the correct way to fix this?",
      options: [
        "A. Change the DataFactory class to create fewer Accounts so that the number of queries in the trigger is reduced.",
        "B. Add TesLstartTest() before and Test.stop Test() after both Line 7 of the code and Line 20 of the code.",
        "C. Replace most of the Apex Trigger with Process Builder processes to reduce the number of queries in the trigger.",
        "D. Add TeststartTest() before Line 18 of the code and add Test.stopTest() after line 18 of the code.",
      ],
      answer: "D",
      title: "Question 69",
    },
    {
      content:
        "A developer has created, Lightning web component that uses the get Record wire adapter. Which three things should the developer do in a test validate the wire method is working as expected? Choose 3 answer",
      options: [
        "A. Create a JSOM file with mock data.",
        "B. Use the emit () API.",
        "C. Import wire from 1w.",
        "D. Use an assert statement to validate results.",
        "E. Import getRecord from Lightning/uiRecordAPi.",
      ],
      answer: "C,D,E",
      title: "Question 70",
    },
    {
      content:
        "An org records customer order information In a custom object, Orcer__c, that has fields for the shipping address. A developer is tasked with adding code to calculate shipping charges on an order, based on a fiat percentage rate associated with the region of the shipping address. What should the developer use to store the rates by region, so that when the changes are deployed to production no additional steps are needed for the calculation to work?",
      options: [
        "A. Custom hierarchy setting",
        "B. Custom object",
        "C. Custom list setting",
        "D. Custom metadata type",
      ],
      answer: "D",
      title: "Question 71",
    },
    {
      content:
        "A developer implemented a custom data table in a Lightning web component with filter functionality. However, users are submitted support tickets about long load times when the filters are changed. The component uses an Apex method that is called to query for records the selected filters. What should the developer do to improve performance of the component?",
      options: [
        "A. Use setStorable( ) in the Apex method to store the response in the client-side cache",
        "B. Use a selective SOQL query with a custom index.",
        "C. Return all records into a list when the component is created and filter the array in JavaScript",
        "D. Use SOSL to Query the records on filter change.",
      ],
      answer: "A",
      title: "Question 72",
    },
    {
      content:
        "Consider the above trigger intended to assign the Account to the manager of the Account''s region. Which two changes should a developer make in this trigger to adhere to best practices? Choose 2 answers",
      options: [
        "A. Use a Map accountMap instead of List accountList.",
        "B. Move the Region__c query to outside the loop.",
        "C. Use a Map to cache the results of the Region__c query by Id.",
        "D. Remove the last line updating accountList as it is not needed.",
      ],
      answer: "B,D",
      title: "Question 73",
    },
    {
      content:
        "Given a list of Opportunity records named opportunityList, which code snippet is best for querying all Contacts of the Opportunity's Account?",
      options: ["A. ", "B. ", "C. ", "D. "],
      answer: "A",
      title: "Question 74",
    },
    {
      content:
        "A developer is asked to look into an issue where a scheduled Apex is running into DML limits. Upon investigation, the developer finds that the number of records processed by the scheduled Apex has recently increased to more than 10,000. What should the developer do to eliminate the limit exception error?",
      options: [
        "A. Use the @future annotation.",
        "B. Implement the Bathable interface.",
        "C. Use platform events.",
        "D. Implement the Queueable interface.",
      ],
      answer: "B",
      title: "Question 75",
    },
    {
      content:
        "A large company uses Salesforce across several departments. Each department has its own Salesforce Administrator. It was agreed that each Administrator would have their own sandbox in which to test changes.Recently, users notice that fields that were recently added for one department suddenly disappear without warning. Also, Workflows that once sent emails and created tasks no longer do so. Which two statements are true regarding these issues and resolution? Choose 2 answers",
      options: [
        "A. Page Layouts should never be deployed via Change Sets, as this causes Workflows and Field-level Security to be reset and fields to disappear.",
        "B. The administrators are deploying their own Change Sets, thus deleting each other's fields from the objects in production.",
        "C. A sandbox should be created to use as a unified testing environment instead of deploying Change Sets directly to production.",
        "D. The administrators are deploying their own Change Sets over each other, thus replacing entire Page Layouts and Workflows in Production",
      ],
      answer: "C,D",
      title: "Question 76",
    },
    {
      content:
        "Universal Containers allows customers to log into a Salesforce Community and update their orders via a custom Visualforce page. Universal Containers' sales representatives can edit the orders on the same Visualforce page. What should a developer use in an Apex test class to test that record sharing is enforced on the Visualforce page?",
      options: [
        "A. Use System.runAs() to test as a sales rep and a community user.",
        "B. Use System.runAs() to test as an administrator and a community user.",
        "C. Use System.profilels() to test as a sales rep and a community user.",
        "D. Use System.profllels() to test as an administrator and a community user,",
      ],
      answer: "A",
      title: "Question 77",
    },
    {
      content:
        'Salesforce users consistently receive a "Maximum trigger depth exceeded" error when saving m Account. How can a developer fix this error?',
      options: [
        "A. Convert trigger to use the future annotation, and chain any subsequent trigger invocations to the Account object.",
        "B. Use a helper class to set a Boolean to TRUE the first time a trigger is fired, and then; modify the trigger to only fire when modify the trigger to only fire when the Boolean is FALSE.",
        "C. Split the trigger logic into two separate triggers.",
        "D. Modify the trigger to use the isMultiThread=true annotation.",
      ],
      answer: "B",
      title: "Question 78",
    },
    {
      content:
        "A developer has a Batch Apex process, Batch_Account_Sales, that updates the sales amount for 10,000 Accounts on a nightly basis. The Batch Apex works as designed In the sandbox. However, the developer cannot get code coverage on the Batch Apex class. The test class is below:What is causing the code coverage problem?",
      options: [
        "A. The executeBatch must fail within test. startTest ( ) and - test. stopTest().",
        "B. The batch needs more than one account record created.",
        "C. The batch process will not recognize new accounts created in the same session",
        "D. The account creation already sets the sates amount to 0.",
      ],
      answer: "A",
      title: "Question 79",
    },
    {
      content:
        "A developer is building a Lightning web component that searches for Contacts. The component must communicate the search results to other unrelated Lightning web components, that are in different DOM trees, when the search completes. What should the developer do to implement the communication?",
      options: [
        "A. Publish a message on a message channel.",
        "B. Publish an event on an event channel.",
        "C. Fire a custom component event.",
        "D. Fire an application event.",
      ],
      answer: "A",
      title: "Question 80",
    },
    {
      content:
        "Refer to the code snippet below:As part of an Integration development effort, a developer is tasked to create an Apex method mat solely relies on the use of foreign identifiers In order to relate new contact records to existing Accounts in Salesforce. The account object contains a field marked as an external ID, the API Name of this field is Legacy_Id_c. What Is the most efficient way to instantiate the parentAccount: variable on line 02 to ensure the newly created contact is properly related to the Account?",
      options: ["A. ", "B. ", "C. ", "D. "],
      answer: "D",
      title: "Question 81",
    },
    {
      content:
        "Universal Containers needs to integrate with a Heroku service that resizes product images submitted by users. What are two alternatives to implement the integration and protect against malicious calls to Heroku app's endpoint? Choose 2 answers",
      options: [
        "A. Create a trigger that uses an @future Apex HTTP callout passing JSON serialized data; therefore the Heroku app can automatically reply back to the callout with the resized images in Salesforce.",
        "B. Create a Workflow Rule with an Outbound Message and select Send Session ID so that the Heroku app can use it to send the resized images back to Salesforce.",
        "C. Create a Workflow Rule with an Outbound Message allowing the Heroku app to automatically store the resized images in Salesforce.",
        "D. Create a trigger that uses an @future Apex HTTP callout passing JSON serialized data and some form of pre-shared secret key. so that the Heroku app can authenticate requests and store the resized images in Salesforce.",
      ],
      answer: "B,C",
      title: "Question 82",
    },
    {
      content:
        "Universal Containers wants to use a Customer Community with Customer Community Plus licenses to allow their customers access to track how many containers they have rented and when they are due back, Universal Containers uses a Private sharing model for External users.Many of their customers are multi-national corporations with complex Account hierarchies. Each account on the hierarchy represents a department within the same business.One of the requirements is to allow certain community users within the same Account hierarchy to see several departments' containers, based on a custom junction object thatrelated the Contact to the various Account records that represent the departments. Which solution solves these requirements?",
      options: [
        "A. A Visualforce page that uses a custom controller that specifies without sharing to expose the records",
        "B. A Lightning web component on the Community Home Page that uses Lightning Data Services.",
        "C. A custom list view on the junction object with filters that will show the proper records based on owner",
        "D. An Apex trigger that creates Apex managed sharing records based on the junction object's relationships",
      ],
      answer: "D",
      title: "Question 83",
    },
    {
      content:
        "A company wants to incorporate a third-party web service to set the Address fields when an Account is inserted, if they have not already been set. What is the optimal way to achieve this?",
      options: [
        "A. Create a Workflow Rule, execute a Queueable job from it, and make a callout from the Queueable job.",
        "B. Create a Before Save Flow, execute a Queueable job from it, and make a callout from the Queueable job.",
        "C. Create a Process, execute a Queueable job from it, and make a callout from the Queueable job.",
        "D. Create an Apex trigger, execute a Queueable job from it, and make a callout from the Queueable job.",
      ],
      answer: "D",
      title: "Question 84",
    },
  ],
});
