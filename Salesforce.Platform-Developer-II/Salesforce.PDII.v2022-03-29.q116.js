window.testContent = window.testContent || [];
var testId = "Salesforce.Platform-Developer-II";
var testName = "Salesforce.Platform-Developer-II";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "Salesforce.Platform-Developer-II.v2022-03-29.q116",
  content: [
    {
      content:
        "Which type of controller is best suited when you want to add custom functionality to a standard controller page, or when you want reusable functionality throughout pages?",
      options: [
        "A. Controller Extensions",
        "B. Custom Controller",
        "C. Standard List/Set Controller",
        "D. Standard Controller",
      ],
      answer: "A",
      title: "Question 1",
    },
    {
      content:
        "A Visualforce page loads slowly due to the large amount of data it displays. Which strategy can a developer use to improve the performance?",
      options: [
        "A. Use the transient keyword for the List variables used in the custom controller.",
        "B. use an <apex:actionPoller> in the page to load all of the data asynchronously.",
        "C. use Javascript to move data processing to the browser instead of the controller.",
        "D. use lazy loading to load the data on demand, instead of in the controller's constructor.",
      ],
      answer: "D",
      title: "Question 2",
    },
    {
      content: "Choose the correct definition for <apex:pageMessage>.",
      options: [
        "A. No formatting; displays all errors on a page",
        "B. A single message, without formatting, that can be associated with a specific component on the page",
        'C. Standard Salesforce formatting, shows all errors that occur on page. Can add more messages through the "ApexPages.addMessage" function',
        "D. Standard Salesforce formatting, throws a specific message on a page",
      ],
      answer: "D",
      title: "Question 3",
    },
    {
      content:
        "If a developer wanted to display error messages with the standard Salesforce Ul styling, what would they use?",
      options: [
        "A. <apex:error>",
        "B. <apex:message>",
        "C. <apex:pageMessages>",
        "D. <apex:outputText>",
      ],
      answer: "C",
      title: "Question 4",
    },
    {
      content:
        "The test method above tests an Apex trigger that the developer knows will make a lot of queries when a lot of Account are simultaneously updated to be customer. The test method fails at the Line 20 because of too many SOQL queriesWhat is the correct way to fix this?The test method above tests an Apex trigger that the developer knows will make a lot of queries when a lot of Accounts are simultaneously updated to be customers. The test method fails at the Line 20 because of too many SOQL queries. What is the correct way to fix this?",
      options: [
        "A. Add TesLstartTest() before and Test.stop Test() after both Line 7 of the code and Line 20 of the code.",
        "B. Add TeststartTest() before Line 18 of the code and add Test.stopTest() after line 18 of the code.",
        "C. Change the DataFactory class to create fewer Accounts so that the number of queries in the trigger is reduced.",
        "D. Replace most of the Apex Trigger with Process Builder processes to reduce the number of queries in the trigger.",
      ],
      answer: "B",
      title: "Question 5",
    },
    {
      content:
        "What is a consideration when using bind variables with dynamic SOQL? (Choose two.)",
      options: [
        "A. Dynamic SOQL cannot reference fields on bind variables",
        "B. Bind variables must be public or global",
        "C. Bind variables must be in local scope",
        "D. Dynamic SOQL cannot use bind variables",
      ],
      answer: "A,C",
      title: "Question 6",
    },
    {
      content: "The Metadata API___________.",
      options: [
        "A. Is based on REST principles and is optimized for loading or deleting large sets of data. You can use it to query, queryAII, insert, update, upsert, or delete many records asynchronously by submitting batches",
        "B. Provides a powerful, convenient, and simple REST-based web services interface for interacting with Salesforce. Its advantages include ease of integration and development, and it's an excellent choice of technology for use with mobile applications and web projects",
        "C. Is used to create, retrieve, update or delete records, such as accounts, leads, and custom objects, and allows you to maintain passwords, perform searches, and much more",
        "D. Is used to retrieve, deploy, create, update, or delete customizations for your org. The most common use is to migrate changes from a sandbox or testing org to your production environment",
      ],
      answer: "D",
      title: "Question 7",
    },
    {
      content:
        "A developer has created a solution using the SOAP API for authenticating Communities users. What is needed when issuing the login() Call? (Choose two.)",
      options: [
        "A. Session Id",
        "B. Security Token",
        "C. Username and Password",
        "D. Organization Id",
      ],
      answer: "C,D",
      title: "Question 8",
    },
    {
      content:
        "Universal Containers has an existing automation where a custom record called Account Plan is created upon an Account being marked as a Customer. Recently, a Workflow Rule was added so that whenever an Account is marked as a Customer, a 'Customer Since' date field is updated with today's date.Now, since the addition of the Workflow Rule, two Account Plan records are created whenever the Account is marked as a Customer. What might cause this to happen?",
      options: [
        "A. The Process Builder responsible for the record creation fires before and after the Workflow rule.",
        "B. The Workflow Rule responsible for the record creation fires twice because the 'Customer Since' field Update Is marked as 'Re-evaluate Workflow Rules After Field Change",
        "C. The Apex Trigger responsible for the record creation does not use a static variable to ensure It only fires once.",
        "D. The Apex Trigger responsible for the record creation is not bulk sate and calls insert inside of a for loop.",
      ],
      answer: "B",
      title: "Question 9",
    },
    {
      content:
        "After a Platform Event is defined in a Salesforce org, events can be published via which two mechanisms? Choose 2 answers",
      options: [
        "A. Internal Apps can use Process Builder.",
        "B. internal Apps can use Outbound Messages",
        "C. External Apps require a custom Apex web service.",
        "D. External Apps can use the standard Streaming API.",
      ],
      answer: "A,B",
      title: "Question 10",
    },
    {
      content:
        "A developer needs to send Account records to an external system for backup purposes. The process must take a snapshot of Accounts as they are saved and then make a callout to a RESTful web service. The web service can only receive, at most, one record per call. Which feature should be used to implement these requirements?",
      options: [
        "A. @future",
        "B. Queueable",
        "C. Process Builder",
        "D. workflow",
      ],
      answer: "C",
      title: "Question 11",
    },
    {
      content:
        "A developer has created a Visualforce page that uses a third-party JavaScript framework. The developer has decided to supply data to the JavaScript functions using JavaScript Remoting for Apex Controllers. What is the correct syntax to declare a remote method in Apex? (Choose two.)",
      options: [
        "A. @RemoteAction global static String getTable()",
        "B. @RemoteAction global String getTable()",
        "C. @RemoteAction public static String getTable()",
        "D. @RemoteObject global static String getTableQ",
      ],
      answer: "A,C",
      title: "Question 12",
    },
    {
      content:
        "In which of the following scenarios would it be acceptable to use programmatic sharing instead of declarative sharing? (Choose three.)",
      options: [
        "A. There is an existing, external system of truth for user access assignments which will continue to drive access and be integrated with salesforce",
        "B. Team functionality is required on custom objects",
        "C. Poor performance when using native sharing components",
        "D. You need to change record access to read/write for all users utilising a lightning component",
        "E. Every record created by sales users needs to be visible to their respective manager",
      ],
      answer: "A,B,C",
      title: "Question 13",
    },
    {
      content:
        "A developer has a page with two extensions overriding the Standard controller for Case. What will happen when a user clicks the command button?",
      options: [
        "A. Save from CaseExtensionOne will be executed",
        "B. Save from CaseExtensionTwo will be executed",
        "C. All of the three Save methods will be executed",
        "D. Save from Case Standard Controller will be executed",
      ],
      answer: "A",
      title: "Question 14",
    },
    {
      content:
        "messages are rendering on the page. Which component should be added to the Visualforce page to display the message?",
      options: ["A. ", "B. ", "C. ", "D. "],
      answer: "D",
      title: "Question 15",
    },
    {
      content:
        "Refer to the code snippet below:As part of an Integration development effort, a developer is tasked to create an Apex method mat solely relies on the use of foreign identifiers In order to relate new contact records to existing Accounts in Salesforce. The account object contains a field marked as an external ID, the API Name of this field is Legacy_Id_c. What Is the most efficient way to instantiate the parentAccount: variable on line 02 to ensure the newly created contact is properly related to the Account?A)B)C)D)",
      options: ["A. Option D", "B. Option C", "C. Option B", "D. Option A"],
      answer: "D",
      title: "Question 16",
    },
    {
      content:
        "How can a developer efficiently incorporate multiple JavaScript libraries, such as JQuery and MomenUS, in a Lightning Component?",
      options: [
        "A. Join multiple assets from a static resource.",
        "B. Use CONs with script attributes",
        "C. Implement the libraries in separate helper files.",
        "D. Use JavaScript remoting and script tags.",
      ],
      answer: "A",
      title: "Question 17",
    },
    {
      content:
        "A developer needs test data for Apex test classes. What can the developer use to provide test data to the test methods? (Choose two.)",
      options: [
        "A. myDataFactory.createTestRecords (10)",
        "B. List<sObject> Is = Test.loadDat (Lead.sObjectType, $Resource + 'myTestLeads f);",
        "C. List<sObject> Is = Test.loadData (Lead.sObjectType, fmyTestLeads f);",
        "D. Database.createTestRecords (10)",
      ],
      answer: "A,C",
      title: "Question 18",
    },
    {
      content:
        "A developer Is asked to develop a new AppExthange application. A feature of the program creates Survey records when a Case reaches a certain stage and Is of a certain Record Type. This feature needs to be configurable, as different Salesforce instances require Surveys at different times. Additionally, the out-of-the-box AppExchange app needs to come with a set of best practice settings that apply to most customers. What should the developer use to store and package the custom configuration settings for the app?",
      options: [
        "A. Process Builder",
        "B. Custom Metadata",
        "C. Custom Objects",
        "D. Custom Settings",
      ],
      answer: "B",
      title: "Question 19",
    },
    {
      content:
        "A company has a custom component that allows users to search for records of a certain object type by invoking an Apex Controller that returns a list of results based on the user's input, when the search Is completed, a searchComplete event is fired, with the results put in a results attribute of the event. The component is designed to be used within other components and may appear on a single page more than once. What is the optimal code that should be added to fire the event when the search has completed?",
      options: ["A. ", "B. ", "C. ", "D. "],
      answer: "A",
      title: "Question 20",
    },
    {
      content:
        "Consider the following code snippet, depicting an Azure component:Which two interfaces can the developer implement to make the component available as a quick action? Choose 2 answers",
      options: [
        "A. Force:lightningQuickActionWithoutHeader",
        "B. Force:lightningQuicAction",
        "C. Force hasObjectName",
        "D. Force:hasRecordId",
        "E. Lightning QuickActionAPI",
      ],
      answer: "A,B",
      title: "Question 21",
    },
    {
      content:
        "Universal Containers needs to integrate with a Heroku service that resizes product images submitted by users. What are two alternatives to implement the integration and protect against malicious calls to Heroku app's endpoint? Choose 2 answers",
      options: [
        "A. Create a Workflow Rule with an Outbound Message and select Send Session ID so that the Heroku app can use it to send the resized images back to Salesforce.",
        "B. Create a Workflow Rule with an Outbound Message allowing the Heroku app to automatically store the resized images in Salesforce.",
        "C. Create a trigger that uses an @future Apex HTTP callout passing JSON serialized data; therefore the Heroku app can automatically reply back to the callout with the resized images in Salesforce.",
        "D. Create a trigger that uses an @future Apex HTTP callout passing JSON serialized data and some form of pre-shared secret key. so that the Heroku app can authenticate requests and store the resized images in Salesforce.",
      ],
      answer: "A,B",
      title: "Question 22",
    },
    {
      content:
        "Which of the following variables are not transmitted in the view state? (Choose two.)",
      options: ["A. Transient", "B. Private", "C. Static", "D. Public"],
      answer: "A,C",
      title: "Question 23",
    },
    {
      content:
        "Global with sharing class MyRemoter { public String accountName { get; set; } public static Account account { get; set; } public AccountRemoter(} {} @RemoteAction global static Account getAccount (String acccuntName) { account = [SELECT Id, Name, NumberOfEmployees FROM Account WHERE Name = :accountName]; return account; } } Consider the Apex class above that defines a RemoteAction used on a Visualforce search page. Which code snippet will assert that the remote action returned the correct Account?",
      options: [
        "A. Account a = MyRemoter.getAccount ('TestAccount'):System.assertEquals{ 'TestAccount', a.Name };",
        "B. MyRemoter remote = new MyRemoter();Account a = remote.getAccount ({'TestAccount');System.assertEquals, 'TestAcccunt', a.Name -;",
        "C. MyRemoter remote = new MyRemoter('TestAccount'};Account a = remote.getAccount {);System.assertEquals(, ''TestAccount', a.Name -;",
        "D. Account a = controller.getAccount('TestAccount');System.assertEquals(, 'TestAccount', a.Name } ;",
      ],
      answer: "A",
      title: "Question 24",
    },
    {
      content:
        "A developer must create a custom pagination solution for accessing approximately 2000 records and displaying 50 records on each page. Data from Salesforce will be accessed via an API and not via Apex. How can the developer meet these requirements? (Choose two.)",
      options: [
        "A. Use OFFSET in SOQL queries",
        "B. Use a StandardSetController",
        "C. Use CURSOR 50 in SOQL queries",
        "D. Use LIMIT 50 in SOQL queries",
      ],
      answer: "A,D",
      title: "Question 25",
    },
    {
      content:
        "A developer wrote a trigger on Opportunity that will update a custom Last Sold Date field on the Opportunity's Account whenever an Opportunity is dosed. In the test class for the trigger, the assertion to validate the Last Sold Date field fails. What might be causing the failed assertion?",
      options: [
        "A. The test class has not re-queried the Account record after updating the Opportunity.",
        "B. The test class is not using System.runAs() to run tests as a Salesforce administrator.",
        "C. The test class has not defined an Account owner when inserting the test data.",
        "D. The test class has not implemented seeAIIData-truwh the test method.",
      ],
      answer: "A",
      title: "Question 26",
    },
    {
      content:
        "A developer Is tasked with ensuring that email addresses entered into the system for Contacts and for a Custom Object called Survey_Response__c do not belong to a list of blacklisted domains. The list of blacklisted domains will be stored In a custom object for ease of maintenance by users. Note that the Survey_Response__c object is populated via a custom visualforce page. What is the optimal way to implement this?",
      options: [
        "A. Implement the logic in an Apex trigger on Contact and also implement the logic within the Custom visualforce page controller.",
        "B. Implement the logic in a helper class that is called by an Apex trigger on Contact and from the Custom Visualforce page controller.",
        "C. Implement the logic in the Custom Visualforce page controller and call that method from an Apex trigger on Contact.",
        "D. Implement the logic in a Validation Rule on the Contact and a validation Rule on the Survey_Response__c object.",
      ],
      answer: "B",
      title: "Question 27",
    },
    {
      content:
        "Which type of controller is best suited when you want all of the basic DML functions from an object's normal new/edit page?",
      options: [
        "A. Standard Controller",
        "B. Standard List/Set Controller",
        "C. Controller Extensions",
        "D. Custom Controller",
      ],
      answer: "A",
      title: "Question 28",
    },
    {
      content:
        "Business rules require a Contact to always be created when a new Account is created. What can be used when developing a custom screen to ensure an Account is not created if the creation of the Contact fails?",
      options: [
        "A. use the Database.Insert method with allOrNone set to False.",
        "B. use setSavePoint() and rollback() with a try/catch block.",
        "C. Disable validation rules on Contacts and set default values with a Trigger.",
        "D. use the Database.Delete method if the Contact insertion fails.",
      ],
      answer: "B",
      title: "Question 29",
    },
    {
      content:
        "Which annotation exposes an Apex class as a RESTful neb service?",
      options: [
        "A. @AuraEnaWed",
        "B. @RemoteAction",
        "C. @RestRtsoorct",
        "D. @HttpInvocabte",
      ],
      answer: "C",
      title: "Question 30",
    },
    {
      content:
        "ABC Company has an Apex process that makes multiple extensive database operation and web service callouts. The database processes and web services can take a length time to run and must be run sequentially. How should the developer write this Apex code without running into governor limits and system limitations?",
      options: [
        "A. Use multiple @future methods for each process and callout.",
        "B. Use Apex Scheduler to scheduled each process.",
        "C. Use Limits class to stop entire process once governor limits are reached.",
        "D. Use Queueable Apex to chain the jobs to run sequentially.",
      ],
      answer: "C",
      title: "Question 31",
    },
    {
      content:
        "A developer notices the execution of all the test methods in a class takes a long time to run, due to the initial setup of ail the test data that is needed to perform the tests. What should the developer do to speed up test execution?",
      options: [
        "A. Define a method that creates test data and annotate with @testSetup.",
        "B. Define a method that creates test data and annotate with @createData",
        "C. Reduce the amount of test methods in the class.",
        "D. Ensure proper usage of test data factory In all test methods.",
      ],
      answer: "A",
      title: "Question 32",
    },
    {
      content:
        "A large company uses Salesforce across several departments. Each department has its own Salesforce Administrator. It was agreed that each Administrator would have their own sandbox in which to test changes. Recently, users notice that fields that were recently added for one department suddenly disappear without warning. Also, Workflows that once sent emails and created tasks no longer do so. Which two statements are true regarding these issues and resolution? Choose 2 answers",
      options: [
        "A. Page Layouts should never be deployed via Change Sets, as this causes Workflows and Field-level Security to be reset and fields to disappear.",
        "B. A sandbox should be created to use as a unified testing environment instead of deploying Change Sets directly to production.",
        "C. The administrators are deploying their own Change Sets over each other, thus replacing entire Page Layouts and Workflows in Production",
        "D. The administrators are deploying their own Change Sets, thus deleting each other's fields from the objects in production.",
      ],
      answer: "B,C",
      title: "Question 33",
    },
    {
      content:
        "Which interface needs to be implemented by a Lightning Component so that it may be displayed in modal dialog by clicking a button on a Lightning Record page?",
      options: [
        "A. Lightning:editAction",
        "B. Fightning:quickAction",
        "C. Force: lightningQuickAction",
        "D. Force:lightningEditAction",
      ],
      answer: "C",
      title: "Question 34",
    },
    {
      content: "What is a potential design issue with the following code?",
      options: [
        "A. SOQL could be avoided by creating a formula field for StageName in Account from the related Opportunity",
        "B. The code will result in a System.LimitException: Apex CPU time limit exceeded error",
        "C. The code will result in a System.LimitException : Too many script statements error",
        "D. The code will result in a System.DmException:Entity_is_Deleted error",
      ],
      answer: "B",
      title: "Question 35",
    },
    {
      content: "How long is field history retained?",
      options: [
        "A. 36 Months",
        "B. 24 Months",
        "C. 18 Months",
        "D. 12 Months",
        "E. 6 Months",
      ],
      answer: "C",
      title: "Question 36",
    },
    {
      content:
        "Recently a Salesforce org's integration failed because it exceeded the number of allowed API calls in a 24-hour period. The integration handles a near real-time, complex insertion of data into Salesforce. The flow of data is as follows: * The integration looks up Contact records with a given email address and, if found, the integration adds a Task to the first matching Contact it finds. If a match is not found, the integration looks up Lead records with a given email address and, if found, the integration adds a Task to the first matching Lead it finds. * If a match is not found, the integration will create a Lead and a Task for that newly created Lead. What is one way in which the integration can stay near real-time, but not exceed the number of allowed API calls in a 24-hour period?",
      options: [
        "A. Create several Apex InboundEmailHandlers to accept calls from the third-party system, thus bypassing the API limits.",
        "B. Use the REST API as well as the SOAP API to effectively double the API calls allowed in a 24-hour period.",
        "C. write a custom Apex web service that, given an email address, does all of the logic the integration code was doing.",
        "D. Create an Inbound Message that, using Flow, can do all of the logic the integration code was doing.",
      ],
      answer: "A",
      title: "Question 37",
    },
    {
      content:
        "A developer is building a Lightning web component to get data from an Apex method called getData that takes a parameter, name. The data should be retrieved when the user clicks the Load Data button.Exhibit. What must be added to get the data?",
      options: [
        "A. Add @wire(getData, {name: $name'}) to the account field and delete loadData ( ) because it is not needed.",
        "B. Add @wire(getData, (name: $name')} to the account field and this, account = getData ( ) ; to t loadData ( ) function.",
        "C. Add getData ({ name; this,name}) , then (result=> { this.account = result}) to the LeadData ( ) function.",
        "D. Add this, account = getData (this,name); to the loadData ( ) function.",
      ],
      answer: "C",
      title: "Question 38",
    },
    {
      content:
        "A developer writes the following code:While testing the code, the developer receives the following error message: System.CalloutException : You have uncommitted work pending What should the developer do? (Choose two.)",
      options: [
        "A. Use Database.insert (order, true) to immediately commit any database changes",
        "B. Ensure all callouts are completed prior to executing DML statements",
        "C. Move the web service callout into an @future method",
        "D. Use the asyncSend() method of the HTTP class to send the request in async context",
      ],
      answer: "B,C",
      title: "Question 39",
    },
    {
      content:
        "A developer created three Rollup Summary fields: Total_timesheets_c, Total_Approved_timesheet_c and Total_project_Timesheet_c in the custom object, project _c Now, the developer is tasked with created a new field to show the ratio between and approved",
      options: [
        "A. No test methods will be executed during deployment.",
        "B. Using a formula field reduces maintenance overhead.",
        "C. A formula field will calculate the value retroactively for existing records.",
        "D. A test class that validates the formula field is needed for deployment.",
      ],
      answer: "B,C",
      title: "Question 40",
    },
    {
      content:
        "A developer is trying to decide between creating a Visualforce component or a Lightning component for a custom screen. Which functionality consideration impacts the final decision?",
      options: [
        "A. Will the screen be accessed via a mobile app?",
        "B. Does the screen need to be rendered as a PDF?",
        "C. Will the screen make use of a JavaScript framework?",
        "D. Does the screen need to be accessible from the Lightning Experience UI?",
      ],
      answer: "D",
      title: "Question 41",
    },
    {
      content: "Invokable methods accept sObjects as parameters.",
      options: ["A. False", "B. True"],
      answer: "A",
      title: "Question 42",
    },
    {
      content:
        "A developer 15 tasked with creating an application-centric feature on which end-users can access and update information. This feature must be available in lightning Experience while working seamlessly in multiple device form factors, such as desktops, phones, and tablets. Additionally, the feature must support Addressable URL Tabs and interact with the Salesforce Console APIs. What arm two approaches a developer can take to build the application and support the business requirements? Choose 2 answers",
      options: [
        "A. Create application using Aura Components.",
        "B. Create the application using Lightning web Components wrapped in Aura Components.",
        "C. Create the application using Lightning Experience Builder.",
        "D. Create the application using Aura Components wrapped in Lightning Web Components.",
      ],
      answer: "A,B",
      title: "Question 43",
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
        'A,B,E  Reference: SObjectException occurs when accessing a field not queried, or you try to change a field during the wrong dml statement (i.e. an edit-only field being set on insert) Custom exceptions must extend the "Exception" class ',
      title: "Question 44",
    },
    {
      content:
        "The maximum view state size of a visualforce page is______________.",
      options: ["A. 65kb", "B. 256kb", "C. 135kb", "D. 165kb", "E. 1mb"],
      answer: "C",
      title: "Question 45",
    },
    {
      content:
        "What Salesforce tool lets you deploy/retrieve metadata, check status of apex jobs, and check responses of REST calls?",
      options: [
        "A. Streaming API",
        "B. Force.com Migration Tool",
        "C. Workbench",
        "D. Developer Console",
      ],
      answer: "C",
      title: "Question 46",
    },
    {
      content:
        "In an organization that has multi-currency enabled, a developer is tasked with building a Lighting Component that displays the top ten Opportunities most recently access by the logged in user. The developer must ensure the Amount and LastModifiedDate field values are displayed according to the user's locale. What is the most effective approach to ensure values displayed respect the users locale settings?",
      options: [
        "A. Use the FORMAT() function in the SOQL query.",
        "B. Use a wrapper class to format the values retrieved via SOQL.",
        "C. Use the FOR VIEW clause in the SOQL Query.",
        "D. Use REGEX expressions to format the values retrieved via SOQL.",
      ],
      answer: "C",
      title: "Question 47",
    },
    {
      content:
        "A developer has a Visual force page that automatically assign ownership of an Account to a queue save. The page appears to correctly assign ownership, but an assertion validating the correct ownership fails. What can cause this problem?",
      options: [
        "A. The test class does not use the seeAllData=true annotation,",
        "B. The test class does not use the Bulk API for loading test data.",
        "C. The test class does not implement the Queueabfe interface.",
        "D. The test class does not retrieve the updated value from the database.",
      ],
      answer: "D",
      title: "Question 48",
    },
    {
      content:
        "1 Contact con = new Contact ( LastName =fSmith', Department = fAdminT)2 insert con;3 Contact insertedContact=[select Name from Contact where id=icon.Id];4 Savepoint sp_admin = Database.setSavepoint();5 con.Department = fHRf;6 update con;7 Database.rollback(sp_admin);8 System.debug(Limits.getDmlStatements 0);Given the following code, what value will be output in the logs by line #8?",
      options: ["A. 4", "B. 3", "C. 2", "D. 5"],
      answer: "A",
      title: "Question 49",
    },
    {
      content:
        "A company uses Opportunism to track sales to their customers and their org has millions of Opportunities. They want to begging to track revenue over time through a related Revenue object.As part of their initial implementation, they want to perform a one-time seeding of their data by automatically creating and populating Revenue records for Opportunities, based on complex logic. They estimate that roughly 100,000 Opportunities will have revenue records and populated. What is the optimal way to automate this?",
      options: [
        "A. Use System.scheduleJob() to schedule a Database.Scheduleable class.",
        "B. Use Database.txtcuteBatch() to invoke a Database.Batchable class.",
        "C. Use Database.executeBatch() to invoke a Queueable dass.",
        "D. Use System.enqueueJob>() to Invoke a Queueable class.",
      ],
      answer: "A",
      title: "Question 50",
    },
    {
      content:
        "What are three benefits of using static resources in Visualforce and Lightning Components? Choose 3 answers",
      options: [
        "A. Static resource files can be referenced by using the $Resource global variable instead of hardcoded IDs.",
        "B. Static resource files can be packaged into a collection of related files in a zip or jar archive.",
        "C. Static resource files do not count against an organization's quota of data storage.",
        "D. Relative paths can be used in files in static resource archives to refer to other content within the archive.",
        "E. Static resource files are automatically minified.",
      ],
      answer: "A,B,D",
      title: "Question 51",
    },
    {
      content:
        "A company manages information about their product offerings in custom objects named Catalog and Catalog Item. Catalog Item has a master-detail field to Catalog, and each Catalog may have as many as 100,000 Catalog Items.Both custom objects have a CurrencylsoCode Text field that contains the currency code they should use. If a Catalog's CurrencylsoCode changes, all of its Catalog Items' CurrencylsoCodes should be changed as well. What should a developer use to update the CurrencylsoCodes on the Catalog Items when the Catalog's CurrencylsoCode changes^5",
      options: [
        "A. A Database.Schedulable and Database.Batchable class that queries the Catalog Item object and updates the Catalog Items if the Catalog CurrencylsoCode is different",
        "B. A Database.Schedulable and Database.Batchable class that queries the Catalog object and updates the Catalog Items if the Catalog CurrencylsoCode is different",
        "C. An after insert trigger on Catalog Item that updates the Catalog Items if the Catalog's CurrencylsoCode is different",
        "D. An after insert trigger on Catalog that updates the Catalog Items if the Catalog's CurrencylsoCode is different",
      ],
      answer: "B",
      title: "Question 52",
    },
    {
      content:
        "In a VisualForce page with a VisualForce component that has rendered set to false when the page loads, how can a developer ensure it will show on a re-render?",
      options: [
        "A. Perform a full page refresh since rendered elements cannot be re-rendered without refreshing.",
        "B. Set the re-render attribute of the component to true.",
        "C. Set the rendered attribute of the component to true and re-render the component.",
        "D. Set the rendered attribute of the component to true and re-render a parent component.",
      ],
      answer: "D",
      title: "Question 53",
    },
    {
      content:
        "A company has a custom object. Request__c. that has a field, Completed__c. and a Lookup to Opportunity, Opportunity__c. Which SOQL query will get a unique list of all of the Opportunity records that have a Completed Request?",
      options: ["A. ", "B. ", "C. ", "D. "],
      answer: "A",
      title: "Question 54",
    },
    {
      content:
        "A developer gets an error saying 'Maximum Trigger Depth Exceeded.' What is a possible reason to get this error message?",
      options: [
        "A. Trigger is recursively invoked more than 16 times.",
        "B. There are numerous DML operations in the trigger logic.",
        "C. The SOQL governor limits are being hit.",
        "D. A Process Builder is running that sends mass emails.",
      ],
      answer: "A",
      title: "Question 55",
    },
    {
      content:
        "A company processes Orders within their Salesforce instance. When an Order's status changes to 'Paid' it must notify the company's order management system (OMS). The OMS exposes SOAP web service endpoints to listen for when to retrieve the data from Salesforce. What is the optimal method to implement this?",
      options: [
        "A. Generate the Enterprise WSDL and use it to make a callout to the OMS.",
        "B. Create an Outbound Message that contains the session ID and send it to the OMS.",
        "C. Generate the Partner WSDL and use it to make a callout to the OMS.",
        "D. Create an Apex trigger and make a callout to the OMS from the trigger.",
      ],
      answer: "A",
      title: "Question 56",
    },
    {
      content:
        "Given the following code:Assuming there were 10 Contacts and five Accounts created today, what is the expected result?",
      options: [
        "A. System. QueryException: To many DML Statement errors on Contact",
        "B. System. LimitException: To many SOQL Queries on Account.",
        "C. System. QueryException: List has more than one row after Assignment on Account.",
        "D. System. LimitException: Too many SOQL Queries on Contract",
      ],
      answer: "C",
      title: "Question 57",
    },
    {
      content:
        "There are user complaints about slow render times of a custom data table within a visualforce page that loads thousands of Account records at once. What can a developer do to help alleviate such issues?",
      options: [
        "A. Use the standard Account List controller and implement pagination.",
        "B. Use JavaScript remoting to query the accounts.",
        "C. Upload a third-party data table library as a static resource.",
        "D. Use the transient keyword in the Apex code when querying the Account records.",
      ],
      answer: "A",
      title: "Question 58",
    },
    {
      content: "The REST API___________.",
      options: [
        "A. Is used to retrieve, deploy, create, update, or delete customizations for your org. The most common use is to migrate changes from a sandbox or testing org to your production environment",
        "B. Provides a powerful, convenient, and simple REST-based web services interface for interacting with Salesforce. Its advantages include ease of integration and development, and it's an excellent choice of technology for use with mobile applications and web projects",
        "C. Is used to create, retrieve, update or delete records, such as accounts, leads, and custom objects, and allows you to maintain passwords, perform searches, and much more",
        "D. Is based on REST principles and is optimized for loading or deleting large sets of data. You can use it to query, queryAII, insert, update, upsert, or delete many records asynchronously by submitting batches",
      ],
      answer: "B",
      title: "Question 59",
    },
    {
      content:
        "The Account edit button must be overridden in an org where a subset of users still use Salesforce Classic. The org already has a Lightning Component that will do the work necessary for the override, and the client wants to be able to reuse it, How should a developer implement this?",
      options: [
        "A. Override the edit button for both Lightning and Classic with a Lightning Component.",
        "B. Override the edit button for Lightning with a Lightning Page; and for Classic, override the edit button with a Visualforce pag That contains the Lightning Component.",
        "C. Override the edit button for Lightning with a Lightning Component; and for Classic, override the edit button with a Visualforce page that contains the Lightning Component.",
        "D. the edit button for both Lightning and Classic with a new Visualforce page.",
      ],
      answer: "C",
      title: "Question 60",
    },
    {
      content:
        'if the "PageReference.setRedirect" Apex function is set to False, what type of request is made?',
      options: [
        "A. Postback request",
        "B. If PageReference points to the same controller and subset of extensions, postback request, otherwise get request",
        "C. Get request",
      ],
      answer: "B",
      title: "Question 61",
    },
    {
      content:
        "A developer has a test class that creates test data before making a mock call-out, but now receives a you have uncommitted work pending. Please commit or callout before calling out error. What step should be taken to resolve the error?",
      options: [
        "A. Ensure both the insertion and mock callout occur after the Test.startTest().",
        "B. Ensure the records are inserted before the Test.startTest() statement and the mock callout after the Test.startTest().",
        "C. Ensure both the insertion and mock callout occur after the Test.stopTest().",
        "D. Ensure the records are inserted before the Test.startTest() statement and the mock callout occurs within a method annotated with StestSetup.",
      ],
      answer: "B",
      title: "Question 62",
    },
    {
      content:
        "Which two scenarios require an Apex method to be called imperatively from a Lightning web component? Choose 2 answers",
      options: [
        "A. Calling a method that is external to the main controller for the Lightning web component",
        "B. Calling a method with the click of a button",
        "C. Calling a method that makes a web service callout",
        "D. Calling a method that is not annotated with cacheable=true",
      ],
      answer: "B,D",
      title: "Question 63",
    },
    {
      content:
        "When calling a RESTful web service, a developer receives a JSON payload that has a data hierarchy that is nested three levels deep. How can the developer describe the external data?",
      options: [
        "A. Use middleware to flatten the JSON and consume it as a new custom object.",
        "B. Declare a class with three levels and deserialize the JSON typed with this class.",
        "C. Deserialize the data untyped and then process it.",
        "D. Use the ANT migration tool, the custom metadata API, or the Dataloader.",
      ],
      answer: "C",
      title: "Question 64",
    },
    {
      content:
        "A developer wants to call an Apex Server-side Controller from a Lightning Aura Component. What are two limitations to the data being returned by the Controller? Choose 2 answers",
      options: [
        "A. A Lists of Custom Apex Classes cannot be returned by Apex Controllers called by Lightning Aura Components.",
        "B. A custom Apex Class can be returned, but only the values of public instance properties and methods annotated with @AuraEnabled are serialized and returned.",
        "C. Only Basic data types and sObjects are supported as return types for Apex Controllers called by Lightning Aura Components.",
        "D. Basic data types are supported, but defaults, such as maximum size for a number, are defined by the objects that they map to.",
      ],
      answer: "B,D",
      title: "Question 65",
    },
    {
      content:
        "A developer wants to retrieve and deploy metadata, perform simple CSV export of query results, and debug Apex REST calls by viewing JSON responses. Which tool should the developer use?",
      options: [
        "A. Developer Console",
        "B. Force.com IDE",
        "C. Force.com Migration Tool",
        "D. Workbench",
      ],
      answer: "D",
      title: "Question 66",
    },
    {
      content:
        "When testing batch classes, what must a developer do? (Choose two.)",
      options: [
        "A. Use seeAIIData=true",
        "B. Encapsulate code in Test.startTestQ and Test.stopTestQ",
        'C. Call the class* "execute" method',
        "D. Limit the amount of records you test to < 200",
      ],
      answer: 'B,D  If you use "seeAIIData=true," you are a bad person ',
      title: "Question 67",
    },
    {
      content:
        "A corporation has many different Salesforce orgs, with some different objects and some common objects, and wants to build an application that can create, retrieve, and update common object records in all of the different orgs. Which method of integration should the application use?",
      options: [
        "A. SOAP API with the Enterprise WSDL",
        "B. Apex REST Web Service",
        "C. Metadata API",
        "D. SOAP API with the partner WSDL",
      ],
      answer: "B",
      title: "Question 68",
    },
    {
      content:
        "A company uses a custom-built enterprise resource planning (ERP) system to handle order management. The company wants Sales Reps to know the status of orders so that if a customer calls to ask about their shipment, the Sales Rep can advise the customer about the order's status and tracking number if it is already shipped. Which two methods can make this ERP order data visible in Salesforce? Choose 2 answers",
      options: [
        "A. Use Salesforce Connect to view real-time Order data in the ERP system.",
        "B. Ensure real-time order data is in Salesforce using the Streaming API.",
        "C. Write a cron job In Salesforce to poll the ERP system for order updates.",
        "D. Have the ERP system push the data into Salesforce using the SOAP API.",
      ],
      answer: "A,D",
      title: "Question 69",
    },
    {
      content:
        "Assuming the CreateOneAccount class creates one account and implements the Queuetable interface, which syntax tests the Apex code?A)B)C)D)",
      options: ["A. Option A", "B. Option B", "C. Option C", "D. Option D"],
      answer: "B",
      title: "Question 70",
    },
    {
      content:
        "Where in a query can you use Geolocation and Distance? (Choose two.)",
      options: [
        "A. Filter clause",
        "B. Group By clause",
        "C. Order By clause",
        "D. Select clause",
      ],
      answer: "A,C",
      title: "Question 71",
    },
    {
      content:
        "Universal Containers allows customers to log into a Salesforce Community and update their orders via a custom Visualforce page. Universal Containers' sales representatives can edit the orders on the same Visualforce page. What should a developer use in an Apex test class to test that record sharing is enforced on the Visualforce page?",
      options: [
        "A. Use System.profllels() to test as an administrator and a community user,",
        "B. Use System.runAs() to test as an administrator and a community user.",
        "C. Use System.profilels() to test as a sales rep and a community user.",
        "D. Use System.runAs() to test as a sales rep and a community user.",
      ],
      answer: "D",
      title: "Question 72",
    },
    {
      content:
        "A company has the Lightning Component above that allows users to dick a button to save their changes and redirects them to a different page. Currently, when the user hits the Save button the records are getting saved, but they are not redirected. Which three techniques can a developer use to debug the JavaScript? Choose 3 answers",
      options: [
        "A. Use Developer Console to view the debug log.",
        "B. Use consde.log() messages in the JavaScript.",
        "C. Use Developer Console to view checkpoints.",
        "D. Use the browser's dev tools to debug the JavaScript.",
        "E. Enable Debug Mode for Lightning components for the user.",
      ],
      answer: "B,D,E",
      title: "Question 73",
    },
    {
      content: "The Bulk API__________.",
      options: [
        "A. Is used to create, retrieve, update or delete records, such as accounts, leads, and custom objects, and allows you to maintain passwords, perform searches, and much more",
        "B. Is used to retrieve, deploy, create, update, or delete customizations for your org. The most common use is to migrate changes from a sandbox or testing org to your production environment",
        "C. Is based on REST principles and is optimized for loading or deleting large sets of data. You can use it to query, queryAII, insert, update, upsert, or delete many records asynchronously by submitting batches",
        "D. Provides a powerful, convenient, and simple REST-based web services interface for interacting with Salesforce. Its advantages include ease of integration and development, and it's an excellent choice of technology for use with mobile applications and web projects",
      ],
      answer: "C",
      title: "Question 74",
    },
    {
      content:
        "A developer is creating unit tests for code that makes SOAP web service callouts. The developer needs to insert some test data as a part of the unit tests setup. What are three actions to enable this functionality? (Choose three.)",
      options: [
        "A. Implement the WebServiceMock interface",
        "B. Implement the HttpCalloutMock interface",
        "C. Update code to call Test.setMock()",
        "D. Surround the data insertion with Test.startTest(), Test.stopTest()",
        "E. Surround the callout with TeststartTest(), Test.stopTest()",
      ],
      answer: "A,C,E",
      title: "Question 75",
    },
    {
      content:
        "A developer creates an application event that has triggered an infinite loop. What may have caused this problem?",
      options: [
        "A. The event has multiple handlers registered in the project.",
        'B. An event is fired ontouchend" and is unhandled.',
        "C. The event Is fired from a custom renderer.",
        "D. The event handler calls a trigger.",
      ],
      answer: "C",
      title: "Question 76",
    },
    {
      content:
        "Within the System.Limit class, what would you call to get the total limit you can call in a single transaction?",
      options: [
        "A. getLimit [typeOfLirr.it] -> (Ex. getLin~.it DY.LSt aterr.ents () )",
        "B. get[typeOfLimit] -> (Ex. getDMLStatements())",
      ],
      answer: "A",
      title: "Question 77",
    },
    {
      content:
        "Universal Containers needs to integrate with their own, existing, internal custom web application. The web application accepts JSON payloads, resizes product images, and sends the resized images back to Salesforce. What should the developer use to implement this integration?",
      options: [
        "A. A workflow rule with an outbound message that contains a session ID",
        "B. An Apex trigger that calls an @future method that allows callouts",
        "C. A platform event that makes a callout to the web application",
        "D. A flow that calls an @future method that allows callouts",
      ],
      answer: "C",
      title: "Question 78",
    },
    {
      content:
        "A developer needs to design a custom object that will be integrated into a back-end system. What should the developer do to ensure good data quality and to ensure that data imports, integrations, and searches perform well? (Choose two.)",
      options: [
        "A. Configure a custom field as external ID",
        "B. Configure a custom field as unique",
        "C. Configure a custom field as Salesforce ID",
        "D. Configure a custom field as indexed",
      ],
      answer: "A,B",
      title: "Question 79",
    },
    {
      content:
        "An org has a requirement that an Account must always have one and only one Contact listed as Primary. So selecting one Contact will de-select any others. The client wants a checkbox on the Contact called 'Is Primary' to control this feature. The client also wants to ensure that the last name of every Contact is stored entirely in uppercase characters. What is the optimal way to implement these requirements?",
      options: [
        "A. write a Validation Rule on the Contact for the Is Primary logic and a before update trigger on Contact for the last name logic.",
        "B. write a single trigger on Contact for both after update and before update and callout to helper classes to handle each set of logic.",
        "C. Write an after update trigger on Contact for the Is Primary logic and a separate before update trigger on Contact for the last name logic.",
        "D. write an after update trigger on Account for the Is Primary logic and a before update trigger on Contact for the last name logic.",
      ],
      answer: "B",
      title: "Question 80",
    },
    {
      content:
        "Which type of controller is best suited when you want all of the basic DML functions from an object's normal new/edit page and want to include multiple records?",
      options: [
        "A. Standard List/Set Controller",
        "B. Controller Extensions",
        "C. Custom Controller",
        "D. Standard Controller",
      ],
      answer: "A",
      title: "Question 81",
    },
    {
      content:
        "A developer has built a multi-page wizard using a single Custom Controller to query and update dat a. Users are complaining that the pages are loading slowly. What will improve performance? (Choose three.)",
      options: [
        "A. Turning off the standard stylesheet",
        "B. Reducing the view state",
        "C. Using selective queries",
        "D. Using actionRegion and rerender",
        "E. Setting the Apex Page attribute cache=true",
      ],
      answer: "B,C,E",
      title: "Question 82",
    },
    {
      content:
        "The progress of an apex job queued is using the System.enqueueJob method and needs to be monitored. Which options are valid? (Choose two.)",
      options: [
        "A. Query the AsyncApexJob record",
        "B. Use the Apex Jobs page in setup",
        "C. Query the Queueable Apex record",
        "D. Use the Scheduled Jobs page in setup",
      ],
      answer: "A,B",
      title: "Question 83",
    },
    {
      content:
        "A company has many different unit test methods that create Account records as part of their data setup. A new required field was added to the Account and now all of the unit tests fail. What is the optimal way for a developer to fix the issue?",
      options: [
        "A. Add the required field to the data setup for all of the unit tests.",
        "B. Create a TestDataFactory class that serves as the single place to create Accounts for unit tests and set the required field there.",
        "C. Change the required field to be a validation rule that excludes the System Administrator profile.",
        "D. Add a before insert trigger on Account to set the value of the required field.",
      ],
      answer: "B",
      title: "Question 84",
    },
    {
      content:
        "Which two relationship queries use the proper syntax? Choose 2 answers",
      options: [
        "A. SELECT Name, (SELECT LastName FROM Contacts) FROM Account",
        "B. SELECT Id, Name, Account __r.Name FROM Contact WHERE Account r.Industry = 'Media'",
        "C. SELECT Id, Name, Account.Name FROM Contact WHERE Account.Industry = 'Media'",
        "D. SELECT Name, (SELECT LastName FROM Contacts__r) FROM Account",
      ],
      answer: "A,C",
      title: "Question 85",
    },
    {
      content:
        "A Developer wishes to improve runtime performance of Apex calls by caching results on the client. What is the best way to implement this?",
      options: [
        "A. Decorate the server-side method with @AuraEnabled(storable=true).",
        "B. Set a cookie in the browser for use upon return to the page.",
        "C. Call the setStorable() method on the action in the JavaScript client-side code.",
        "D. Decorate the server-side method with @AuraEnabled(cacheable=true).",
      ],
      answer: "A",
      title: "Question 86",
    },
    {
      content:
        "@isTest static void testAccountUpdate() { Account acct = new Account({Name = 'Test'); acct.Integration Updated_c = false; insert acct; CalloutUtil.sendAccountUpdate (acct.Id); Account acctAfter = [SELECT Id, Integration Updated_c FROM Account WHERE Id = :acct.Id] [0]; System.assert(true, acctAfter.Integration_Updated_c); } The test method above calls a web service that updates an external system with Account information and sets the Account's Integration_Updated__c checkbox to True when it completes. The test fails to execute and exits with an error: \"Methods defined as TestMethod do not support Web service callouts.\" What is the optimal way to fix this?",
      options: [
        "A. Add Test.startTest() before and Test.setMock and Test.stopTest() after CalloutUtil.sendAccountUpdate.",
        "B. Add Test.startTest() and Test.setMock before and Test.stopTest() after CalloutUtil.sendAccountUpdate.",
        "C. Add Test.startTest() before and Test.stopTest() after CalloutUtil.sendAccountUpdate.",
        "D. Add if (!Test.isRunningTest()) around CalloutUtil.sendAccountUpdate.",
      ],
      answer: "C",
      title: "Question 87",
    },
    {
      content:
        'If the "PageReference.setRedirect" Apex function is set to True, what type of request is made?',
      options: [
        "A. Postback request",
        "B. If PageReference points to the same controller and subset of extensions, postback request, otherwise get request",
        "C. Get request",
      ],
      answer: "C",
      title: "Question 88",
    },
    {
      content:
        "A custom Aura component, AddressValidation,cmp,exists in the system. The Salesforce admin for the organization is unable to find and select the component while creating a quick action for the Account sObject. What should the developer do to ensure that AddressValidation,cmp can be selected when creating a quick action?",
      options: [
        "A. Ensure the component implements the force:hasRecordedId interface.",
        "B. Ensure the component implements the force:lighningQuickAction.interface.",
        "C. Ensure the access attribute of the aura:component tag is st t Global.",
        "D. Ensure the component implements the lightning:actionOverride interface.",
      ],
      answer: "B",
      title: "Question 89",
    },
    {
      content:
        "A developer is writing code that requires making callouts to an external web service. Which scenario necessitates that the callout be made in an @future method?",
      options: [
        "A. The callout could take longer than 60 seconds to complete.",
        "B. over 10 callouts will be made in a single transaction.",
        "C. The callouts will be made in an Apex Test class.",
        "D. The callouts will be made in an Apex Trigger.",
      ],
      answer: "D",
      title: "Question 90",
    },
    {
      content:
        "A company has a web page that needs to get Account record information, given its Salesforce record ID, from JavaScript on the page and then display it. Which method of integration is optimal?",
      options: [
        "A. REST API",
        "B. SOAP API",
        "C. Apex SOAP Web Service",
        "D. Apex REST Web Service",
      ],
      answer: "D",
      title: "Question 91",
    },
    {
      content:
        "A Lightning Component has a section that displays some information about an Account and it works well on the desktop, but users have to scroll horizontally to see the Description field output on their mobile devices and tablets. Which option has the changes to make the component responsive for mobile and tablet devices?",
      options: ["A. ", "B. ", "C. ", "D. "],
      answer: "C",
      title: "Question 92",
    },
    {
      content:
        "An Apex trigger creates an Order__c record every time an Opportunity is won by a Sales Rep. Recently the trigger is creating two orders. What is the optimal method for a developer to troubleshoot this?",
      options: [
        "A. add system.debug() statements to the code and use the Developer Console logs to trace the code.",
        "B. Run the Apex Test Classes for the Apex trigger to ensure the code still has sufficient code coverage.",
        "C. Set up debug logging for every Sales Rep, then monitor the logs for errors and exceptions.",
        "D. Turn off all Workflow Rules, then turn them on one at time to see which one causes the error.",
      ],
      answer: "A",
      title: "Question 93",
    },
    {
      content:
        "Which statement should be used to allow some of the records in a list of records to be inserted if others fail to be inserted?",
      options: [
        "A. insert records",
        "B. Database.insert(records, true)",
        "C. Database.insert(records, false)",
        "D. insert (records, false)",
      ],
      answer: "C",
      title: "Question 94",
    },
    {
      content: "Choose the correct definition for <apex:actionFunction>.",
      options: [
        "A. Signifies which components should be processed by the server when an AJAX request is generated",
        "B. Adds AJAX support to another component (e.g. onClick, onMouseUp, onFocus, etc.)",
        'C. Can be associated with an AJAX request (actionFunction/actionSupport/actionPoller) and shows content conditionally depending on the status of the request (in progress/complete). Use the "id" field to specify name; use "status" field on related components to connect them',
        "D. Allows for controller methods to be called directly from Javascript. Must be| encapsulated in <apex:form> tags. Unlike actionSupport, these function<apex:actionPoller>s can be called directly from Javascript code B Sends an AJAX request according to the time interval you specify. If this ever gets re-rendered, it resets",
      ],
      answer: "C",
      title: "Question 95",
    },
    {
      content:
        "Sometimes events on Salesforce need to be handled by an external system due to the scale or type of process being executed. Consider the use case of a user in Salesforce needing to get pricing for an order they are building in Salesforce while on the phone with a customer. The pricing logic already exists in a third-party system. Instead of recreating this logic in Salesforce, it will be leveraged by making a request of the third-party system. The response, in this case the pricing, will be returned and stored back in Salesforce. What is the optimal solution?",
      options: [
        "A. A Visualforce page that can make a real-time Apex callout to display and save the pricing back in Salesforce",
        "B. An ETL tool to process batches of newly saved Orders every few minutes to store the pricing back in Salesforce",
        "C. An Apex trigger that upon saving the Order will make a real-time Apex callout, saving the pricing back in Salesforce",
        "D. A Process Builder process and Outbound Message to fetch the pricing upon save and store the pricing in Salesforce",
      ],
      answer: "C",
      title: "Question 96",
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
      title: "Question 97",
    },
    {
      content:
        "Universal Containers wants to use an external Web Service provided by a third-party vendor to validate that shipping and billing addresses are correct. The current vendor uses basic password authentication, but Universal Containers might switch to a different vendor who uses OAuth. What would allow Universal Containers to switch vendors without updating the code to handle authentication?",
      options: [
        "A. Custom Setting (List)",
        "B. Custom Metadata",
        "C. Named Credential",
        "D. Dynamic Endpoint",
      ],
      answer: "C",
      title: "Question 98",
    },
    {
      content:
        "The Contact object in an org is configured with workflow rules that trigger field updates. The fields are not updating, even though the end user expects them to. The developer creates a debug log to troubleshoot the problem. What should the developer specify in the debug log to see the values of the workflow rule conditions and debug the problem?",
      options: [
        "A. ERROR level for the Database log category",
        "B. ERROR level for the Workflow log category",
        "C. INFO level for the Database log category",
        "D. INFO level for the Workflow log category",
      ],
      answer: "C",
      title: "Question 99",
    },
    {
      content: "What is the transaction limit on the recursive trigger depth?",
      options: ["A. There is no limit", "B. 16", "C. 3", "D. 10", "E. 17"],
      answer: "B",
      title: "Question 100",
    },
    {
      content:
        "A developer has written the following method:static void processList(List<sobject> input){Which code block can be used to call the method?",
      options: [
        "A. for Account ace : [SELECT Id, Name FROM Account])",
        "B. processList([SELECT Id, Name FROM sObject WHERE Type = 'Account'])",
        "C. processList (ace)",
        "D. processList ([FIND 'Acme\" 'RETURNING Account])",
      ],
      answer: "B",
      title: "Question 101",
    },
    {
      content:
        "A company has a custom object, Sales Demo Request, that has a lookup to an Opportunity. It is required that a Sales Demo Request record be created when an Opportunity's Probability is greater than 50%. What is the optimal way to automate this?",
      options: [
        "A. Build a Flow on Opportunity.",
        "B. Use an Apex Trigger on Opportunity.",
        "C. Build a Process on Opportunity",
        "D. Create a Workflow on Opportunity.",
      ],
      answer: "B",
      title: "Question 102",
    },
    {
      content:
        "What is the transaction limit for the number of records for SOQL queries?",
      options: [
        "A. 10,000",
        "B. 5,000",
        "C. 50,000",
        "D. There is no limit",
        "E. 20,000",
      ],
      answer: "C",
      title: "Question 103",
    },
    {
      content:
        "Universal Containers implements a private sharing model for the Convention_Attendence_c custom object. As part of a new quality assurance effort, the company created an Event___Reviewer__c user lookup field on the object. Management wants the event reviewer to automatically gain Read/write access to every record they are assigned to. What is the best approach to ensure the assigned reviewer obtains Read/Write access to the record?",
      options: [
        "A. Create an After Insert trigger on the Convention Attendee custom object, and use Apex Sharing Reasons and Apex Managed Sharing.",
        "B. Create a Before Insert trigger on the Convention Attendee custom object, and use Apex Sharing Reasons and Apex Managed Sharing.",
        "C. Create a criteria-based sharing rule on the Convention Attendee custom object to share the records the a group of Event Reviewers.",
        "D. Create criteria-based sharing rules on the Convention Attendee custom object to share the records with the Event Reviewers.",
      ],
      answer: "B",
      title: "Question 104",
    },
    {
      content:
        "What tool in the Developer Console contains information on SOQL query Cardinality?",
      options: [
        "A. Checkpoints tab",
        "B. Query Editor",
        "C. Query Plan Tool",
        "D. View State Tab",
        "E. Log Inspector",
      ],
      answer: "E",
      title: "Question 105",
    },
    {
      content:
        "What is the transaction limit for the number of records per DML statement?",
      options: [
        "A. 5,000",
        "B. 10,000",
        "C. 50,000",
        "D. 20,000",
        "E. There is no limit",
      ],
      answer: "B",
      title: "Question 106",
    },
    {
      content:
        "What is the transaction limit on the max timeout for all callouts?",
      options: [
        "A. 60 seconds (synchronous); 200 seconds (async",
        "B. 60 seconds",
        "C. There is no limit",
        "D. 120 seconds (synchronous); 200 seconds (async)",
        "E. 120 seconds",
      ],
      answer: "E",
      title: "Question 107",
    },
    {
      content:
        "A company represents their customers as Accounts in Salesforce. All customers have a unique Customer_Number__c that is unique across all of the company's systems. They also have a custom Invoice__c object, with a Lookup to Account, to represent invoices that are sent out from their external system. This company wants to integrate invoice data back into Salesforce so Sales Reps can see when a customer is paying their bills on time. What is the optimal way to implement this?",
      options: [
        "A. Query the Account Object upon each call to insert invoice data to fetch the Salesforce ID corresponding to the Customer Number on the invoice",
        "B. Use Salesforce Connect and external data objects to seamlessly import the invoice data into Salesforce without custom code.",
        "C. Create a cross-reference table in the custom invoicing system with the Salesforce Account ID of each Customer and insert invoice data nightly.",
        "D. Ensure Customer_Number__c is an External ID and that a custom field Invoice_Number__c is an External ID and Upsert invoice data nightly.",
      ],
      answer: "D",
      title: "Question 108",
    },
    {
      content:
        "An Apex trigger creates a Contract record every time an Opportunity record is marked as Closed end Won. This trigger is working great, except (due to a recent acquisition) historical Opportunity records need to be loaded into the Salesforce instance.When a test batch of records are loaded, the Apex trigger creates Contract records. A developer is tasked with preventing Contract records from being created when mass loading the Opportunities, but the daily users still need to have the Contract records created. What is the most extendable way to update the Apex trigger to accomplish this?",
      options: [
        "A. Add a Validation Rule to the Contract to prevent Contract creation by the user who loads the data.",
        "B. Use a List Custom Setting to disable the trigger for the user who loads the data.",
        "C. Add the Profile ID of the user who loads the data to the trigger so the trigger will not fire for this user.",
        "D. Use a Hierarchy Custom Setting to skip executing the logic inside the trigger for the user who loads the data.",
      ],
      answer: "D",
      title: "Question 109",
    },
    {
      content:
        "What is a benefit of JavaScript remoting over Visualforce Remote Objects?",
      options: [
        "A. Does not require any Apex code",
        "B. Supports complex server-side application logic",
        "C. Allows for specified re-render targets",
        "D. Does not require any JavaScript code",
      ],
      answer: "B",
      title: "Question 110",
    },
    {
      content:
        "The head of recruiting at Universal Containers wants to provide all internal users the ability to search for open positions by role, department, and location via a new recruiting app, In addition to search, users of the app should be able to refer a fried, apply for a position, and review the status of their current submissions. The app should be made available in Salesforce Mobile, but offline access is not required.Given these requirements, what is the recommended approach to developer the app?",
      options: [
        "A. Salesforce SDK",
        "B. Visualforce",
        "C. Lightning Web Components",
        "D. Lightning Experience Builder",
      ],
      answer: "A",
      title: "Question 111",
    },
    {
      content:
        "A developer writes the following Apex trigger so that when a Case is closed, a single Survey record is created for that Case. The issue is that multiple Survey_c records are being created per Case. What could be the cause of this issue?",
      options: [
        "A. A user is editing the record multiple times",
        "B. A user is creating the record as Closed",
        "C. A workflow rule is firing with a Create Task action",
        "D. A workflow rule is firing with a Field Update action",
      ],
      answer: "A",
      title: "Question 112",
    },
    {
      content:
        "A developer is writing a Visualforce page to display a list of all of the checkbox fields found on a custom object. What is the recommended mechanism the developer should use to accomplish this?",
      options: [
        "A. Schema Class",
        "B. Schema Builder",
        "C. Metadata API",
        "D. Apex API",
      ],
      answer: "A",
      title: "Question 113",
    },
    {
      content:
        "A company has a Request__c object that has a lookup to the Opportunity object and a custom field. Status__c, with values of Open,' Closed, and Invalid.' An Opportunity should not be allowed to be deleted if there are any Request__c records related to it that have a Status__c value of Open or 'Closed.' what is the optimal way to enforce the requirement to prevent deletion?",
      options: [
        "A. A Process on Opportunity",
        "B. An Apex Trigger on Opportunity",
        "C. An Apex Trigger on Request__c",
        "D. A Process on Request__c",
      ],
      answer: "B",
      title: "Question 114",
    },
    {
      content:
        "How can the DISTANCE and GEOLOCATION functions be used i|n SOQL queries? (Choose two.)",
      options: [
        "A. To filter results based on distance from a latitude and longitude",
        "B. To order results by distance from a latitude or longitude",
        "C. To group results in distance ranges from a latitude and longitude",
        "D. To get the distance results from a latitude and longitude",
      ],
      answer: "A,B",
      title: "Question 115",
    },
    {
      content:
        "Universal Containers (UC) wants to develop a customer community to help their customers log issues with their containers. The community needs to function for their German- and Spanish-speaking customers also. UC heard that it's easy to create an international community using Salesforce, and hired a developer to build out the site. What should the developer use to ensure the site is multilingual?",
      options: [
        "A. Use Custom Metadata to translate custom picklist values.",
        "B. Use Custom Objects to translate custom picklist values.",
        "C. Use Custom Settings to ensure custom messages are translated properly.",
        "D. Use Custom Labels to ensure custom messages are translated property.",
      ],
      answer: "D",
      title: "Question 116",
    },
  ],
});
