window.testContent = window.testContent || [];
var testId = "Salesforce.Platform-Developer-II";
var testName = "Salesforce.Platform-Developer-II";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "Salesforce.Platform-Developer-II.v2023-08-14.q106",
  content: [
    {
      content:
        "A large company uses Salesforce across several departments. Each department has its own Salesforce Administrator. It was agreed that each Administrator would have their own sandbox in which to test changes.Recently, users notice that fields that were recently added for one department suddenly disappear without warning. Also, Workflows that once sent emails and created tasks no longer do so. Which two statements are true regarding these issues and resolution? (Choose two.)",
      options: [
        "A. Page Layouts should never be deployed via Change Sets, as this causes Workflows and Field-level Security to be reset and fields to disappear.",
        "B. The administrators are deploying their own Change Sets over each other, thus replacing entire Page Layouts and Workflows in Production.",
        "C. The administrators are deploying their own Change Sets, thus deleting each other's fields from the objects in production.",
        "D. A sandbox should be created to use as a unified testing environment instead of deploying Change Sets directly to production.",
      ],
      answer: "A,B",
      title: "Question 1",
    },
    {
      content: "Choose the correct definition for <apex:actionPoller>.",
      options: [
        "A. Adds AJAX support to another component (e.g. onClick, onMouseUp, onFocus, etc.)",
        "B. Signifies which components should be processed by the server when an AJAX request is generated",
        "C. Sends an AJAX request according to the time interval you specify. If this ever gets re-rendered, it resets",
        'D. Can be associated with an AJAX request (actionFunction/actionSupport/actionPoller) and shows content conditionally depending on the status of the request (in progress/complete). Use the "id" field to specify name; use "status" field on related components to connect them',
        "E. Allows for controller methods to be called directly from Javascript. Must be encapsulated in <apex:form> tags. Unlike actionSupport, these function<apex:actionPoller>s can be called directly from Javascript code",
      ],
      answer: "C",
      title: "Question 2",
    },
    {
      content:
        "A developer is trying to decide between creating a Visualforce component or a Lightning component for a custom screen. Which functionality consideration impacts the final decision?",
      options: [
        "A. Does the screen need to be accessible from the Lightning Experience UI?",
        "B. Will the screen make use of a JavaScript framework?",
        "C. Will the screen be accessed via a mobile app?",
        "D. Does the screen need to be rendered as a PDF?",
      ],
      answer: "A",
      title: "Question 3",
    },
    {
      content:
        'During the Visualforce Page execution, what step follows immediately after "Evaluate constructors on controller and extensions"?',
      options: [
        "A. Send HTML to Browser",
        "B. Evaluate expressions, <apex:page> attribute actions, and other method calls (getters/setters) on main page",
        "C. Evaluate constructors, extensions, and expression on attribute definitions on any custom components present",
        "D. Create the view state",
      ],
      answer: "C",
      title: "Question 4",
    },
    {
      content:
        "A developer has a Visual force page that automatically assign ownership of an Account to a queue save. The page appears to correctly assign ownership, but an assertion validating the correct ownership fails. What can cause this problem?",
      options: [
        "A. The test class does not retrieve the updated value- from the database.",
        "B. The test class does not use the Bulk API for loading test data.",
        "C. The test class does not use the seeAllData=true annotation,",
        "D. The test class does not implement the Queueabfe interface.",
      ],
      answer: "A",
      title: "Question 5",
    },
    {
      content:
        "A company wants to create a dynamic survey that navigates users through a different series of questions based on their previous responses. What is the recommended solution to meet this requirement?",
      options: [
        "A. Lightning Process Builder",
        "B. Dynamic Record Choice",
        "C. Custom Lightning application",
        "D. Visualforce and Apex",
      ],
      answer: "B",
      title: "Question 6",
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
      title: "Question 7",
    },
    {
      content:
        "After a Platform Event is defined in a Salesforce org, events can be published via which two mechanisms? Choose 2 answers",
      options: [
        "A. internal Apps can use Outbound Messages",
        "B. External Apps can use the standard Streaming API.",
        "C. Internal Apps can use Process Builder.",
        "D. External Apps require a custom Apex web service.",
      ],
      answer: "A,C",
      title: "Question 8",
    },
    {
      content:
        "In which of the following scenarios would it be acceptable to use programmatic sharing instead of declarative sharing?",
      options: [
        "A. You need to change record access to read/write for all users utilising a lightning component",
        "B. Team functionality is required on custom objects",
        "C. Poor performance when using native sharing components",
        "D. Here is an existing, external system of truth for user access assignments which will continue to drive access and be integrated with salesforce",
        "E. Every record created by sales users needs to be visible to their respective manager",
      ],
      answer: "B,C,D",
      title: "Question 9",
    },
    {
      content:
        "If you wanted to create a record following the update of another (with data from the source object), what is the most customizable approach?",
      options: [
        "A. Workflow Rule",
        "B. Process Builder",
        "C. Flow",
        "D. After update Trigger",
      ],
      answer: "B",
      title: "Question 10",
    },
    {
      content:
        "A company has a native i0S app for placing orders that needs to connect to Salesforce to retrieve consolidated information from many different objects in a JSON format. Which is the optimal method to implement this in Salesforce?",
      options: [
        "A. Apex SOAP Web Service",
        "B. Apex REST Web Service",
        "C. Apex REST Callout",
        "D. Apex SOAP Callout",
      ],
      answer: "B",
      title: "Question 11",
    },
    {
      content:
        "Assuming the CreateOneAccount class creates one account and implements the Queuetable interface, which syntax tests the Apex code?A)B)C)D)",
      options: ["A. Option C", "B. Option A", "C. Option D", "D. Option B"],
      answer: "D",
      title: "Question 12",
    },
    {
      content:
        "A business process requires sending new Account records to an external system. The Account Name, Id, CreatedDate. and CreatedByld must be passed to the external system in near real-time when an Account is Inserted without error. How should a developer achieve this?",
      options: [
        "A. Use a Process Builder that calls an @InvocableMethod method.",
        "B. Use a before insert trigger and an @future method.",
        "C. Use a Workflow rule that calls an @InvocableMethod method.",
        "D. Use a before insert trigger and a Queueable class.",
      ],
      answer: "B",
      title: "Question 13",
    },
    {
      content:
        "A developer receives a LimitException: Too many query rows: 50001 error when running code. What debugging approach using the Developer Console provides the fastest and most accurate mechanism to identify a specific component that may be returning an unexpected number of rows?",
      options: [
        "A. Filter the Debug Log on SOQL_EXECUTE_END statements to track the results of each SOQL Query.",
        "B. Add System.debug (System.getoueryRows () to the code to track SOQL usage.",
        "C. Count the number of Row Limit warning messages in the Debug Logs.",
        "D. Use the Execution Overview to see the number of rows returned by each Executed Unit.",
      ],
      answer: "A",
      title: "Question 14",
    },
    {
      content:
        "An org has a requirement that addresses on Contacts and Accounts should be normalized to a company standard by Apex code any time that they are saved. What is the optimal way to implement this?",
      options: [
        "A. Apex trigger on Account and Account that call a helper class to normalize the address",
        "B. Apex trigger on Contact that calls the Account trigger to normalize the address",
        "C. Apex trigger on Account that and Account that normalized the address",
        "D. Apex trigger on Account that calls the Contact trigger to normalize the address",
      ],
      answer: "A",
      title: "Question 15",
    },
    {
      content: "Which is a valid Apex REST Annotation? (Choose two.)",
      options: [
        "A. HttpUpsert",
        "B. HttpDelete",
        "C. HttpAction",
        "D. Http Patch",
      ],
      answer: "B,D",
      title: "Question 16",
    },
    {
      content: "REST uses___________.",
      options: [
        "A. The HTTPRequest class",
        "B. The HTTP class",
        "C. The HTTPResponse class",
        "D. All of the above",
      ],
      answer: "D",
      title: "Question 17",
    },
    {
      content:
        "0f Universal Containers uses Big Objects to store almost a billion customer transactions called Customer_Transaction__b. These are the fields on Customer_Transaction__b: Account__c Program__¢ Points_Earned__c Location__c Transaction_Date__c The following fields have been identified as Index Fields for the Customer_Transaction__b object: Account__c, Program__c, and Transaction_Date__c. Which SOQL query is valid on the Customer_Transaction__b Big Object?",
      options: [
        "A. SELECT Account__c, Program__c, Transaction_Date__c FROM Customer_Transaction__b WHERE Account__c = '001R000000302D3' AND Program__c LIKE 'Shop%' AND Transaction_Date__c=2019-05-31T00:00Z",
        "B. SELECT Account__c, Program__c, Transaction_Date__c FROM Customer_Transaction__b WHERE Account__c = '001R000000302D3' AND Program__c ='Shoppers' AND Transaction_Date__c=2019-05-31T00:00Z",
        "C. SELECT Account__c, Program__c, Transaction_Date__c FROM Customer_Transaction__b WHERE Account__c = '001R000000302D3' AND Program__c INCLUDES ('Shoppers', 'Womens') AND Transaction_Date__c=2019-05-31T00:00Z",
        "D. SELECT Account__c, Program__c, Transaction_Date__c FROM Customer_Transaction__b WHERE Account__c = '001R000000302D3' AND Program__c EXCLUDES ('Shoppers', 'Womens') AND Transaction_Date__c=2019-05-31T00:00Z",
      ],
      answer: "B",
      title: "Question 18",
    },
    {
      content:
        "Which method should be used to convert a Date to a String in the current user's locale?",
      options: [
        "A. Date.format",
        "B. Date.parse",
        "C. String. valueOf",
        "D. String.format",
      ],
      answer: "C",
      title: "Question 19",
    },
    {
      content:
        "A company has a web page that needs to get Account record information, given its Salesforce record ID, from JavaScript on the page and then display it. Which method of integration is optimal?",
      options: [
        "A. Apex SOAP Web Service",
        "B. REST API",
        "C. Soap API",
        "D. Apex REST Web Service",
      ],
      answer: "D",
      title: "Question 20",
    },
    {
      content:
        "A large company uses Salesforce across several departments. Each department has its own Salesforce Administrator. It was agreed that each Administrator would have their own sandbox in which to test changes.Recently, users notice that fields that were recently added for one department suddenly disappear without warning. Also, Workflows that once sent emails and created tasks no longer do so. Which two statements are true regarding these issues and resolution? Choose 2 answers",
      options: [
        "A. A sandbox should be created to use as a unified testing environment instead of deploying Change Sets directly to production.",
        "B. The administrators are deploying their own Change Sets, thus deleting each other's fields from the objects in production.",
        "C. Page Layouts should never be deployed via Change Sets, as this causes Workflows and Field-level Security to be reset and fields to disappear.",
        "D. The administrators are deploying their own Change Sets over each other, thus replacing entire Page Layouts and Workflows in Production",
      ],
      answer: "A,D",
      title: "Question 21",
    },
    {
      content:
        "messages are rendering on the page. Which component should be added to the Visualforce page to display the message?",
      options: ["A. ", "B. ", "C. ", "D. "],
      answer: "A",
      title: "Question 22",
    },
    {
      content:
        "A developer is writing a Jest for a Lightning web component that conditionally displays child components based on a user's checkbox selections. What should the developer do to property test that the correct components display and hide for each scenario?",
      options: [
        "A. Reset the DOM after each test with the after Each method.",
        "B. Create a new jsdom instance for each test",
        "C. Add a teardown block to reset the DOM after each test.",
        "D. Create a new describe block for each test",
      ],
      answer: "D",
      title: "Question 23",
    },
    {
      content:
        "A developer writes the following code:While testing the code, the developer receives the following error message: System.CalloutException : You have uncommitted work pending What should the developer do? (Choose two.)",
      options: [
        "A. Move the web service callout into an future method",
        "B. Use the asyncSend() method of the HTTP class to send the request in async context",
        "C. Ensure all callouts are completed prior to executing DML statements",
        "D. Use Database.insert (order, true) to immediately commit any database changes",
      ],
      answer: "A,C",
      title: "Question 24",
    },
    {
      content:
        "Sometimes events on Salesforce need to be handled by an external system due to the scale or type of process being executed. Consider the use case of a user in Salesforce needing to get pricing for an order they are building in Salesforce while on the phone with a customer. The pricing logic already exists in a third-party system. Instead of recreating this logic in Salesforce, it will be leveraged by making a request of the third-party system. The response, in this case the pricing, will be returned and stored back in Salesforce. What is the optimal solution?",
      options: [
        "A. A Process Builder process and Outbound Message to fetch the pricing upon save and store the pricing in Salesforce",
        "B. A Visualforce page that can make a real-time Apex callout to display and save the pricing back in Salesforce",
        "C. An ETL tool to process batches of newly saved Orders every few minutes to store the pricing back in Salesforce",
        "D. An Apex trigger that upon saving the Order will make a real-time Apex callout, saving the pricing back in Salesforce",
      ],
      answer: "D",
      title: "Question 25",
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
        'A,B,E  /Reference: SObjectException occurs when accessing a field not queried, or you try to change a field during the wrong dml statement (i.e. an edit-only field being set on insert) Custom exceptions must extend the "Exception" class ',
      title: "Question 26",
    },
    {
      content:
        "A company has a Lightning Page with many Lightning Components, some that cache reference data. It is reported that the page does not always show the most current reference data. What can a developer use to analyze and diagnose the problem in the Lightning Page?",
      options: [
        "A. Salesforce Lightning Inspector Actions Tab",
        "B. Salesforce Lightning Inspector Storage Tab",
        "C. Salesforce Lightning Inspector Transactions Tab",
        "D. Salesforce Lightning Inspector Event Log Tab",
      ],
      answer: "B",
      title: "Question 27",
    },
    {
      content:
        "Lightning Aura ComponentLightning Aura ControllerApex ControllerGiven the code above, which two changes need to be made in the Apex Controller for the code to work?(Choose two.)",
      options: [
        "A. Annotate the entire class as @AuraEnabled instead of just the single method",
        "B. Change the method signature to be global static, not public static",
        "C. Remove line 06 from the Apex Controller and use firstName in the return",
        "D. Change the argument from JSONObject to String",
      ],
      answer: "C,D",
      title: "Question 28",
    },
    {
      content:
        "A developer has created a Batchable class that inserts Accounts. The Batchable class is running with batch size of 200, and is getting an error. The developer identifies the following code as problematic. trigger AccountTrigger on Account(after insert) { for( Account a : Trigger.new) { AccountHandler.insertPartnerAccount(a); } } public Class AccountHandler{ @future public static void insertPartnerAccount(Account a){ //perform processing if( a.Is_Partner__c) { Account partnerAccount = new Account(); //set values insert partnerAccount; } } } What governor limit or system limitation is the developer most likely violating?",
      options: [
        "A. Too many DML statements in the batch execution context.",
        "B. Too many future calls in the batch execution context.",
        "C. Future method cannot be called from a batch method.",
        "D. Maximum trigger depth exceeded on the Account insert.",
      ],
      answer: "C",
      title: "Question 29",
    },
    {
      content:
        "Recently a Salesforce org's integration failed because it exceeded the number of allowed API calls in a 24-hour period. The integration handles a near real-time, complex insertion of data into Salesforce. The flow of data is as follows: * The integration looks up Contact records with a given email address and, if found, the integration adds a Task to the first matching Contact it finds. If a match is not found, the integration looks up Lead records with a given email address and, if found, the integration adds a Task to the first matching Lead it finds. * If a match is not found, the integration will create a Lead and a Task for that newly created Lead. What is one way in which the integration can stay near real-time, but not exceed the number of allowed API calls in a 24-hour period?",
      options: [
        "A. write a custom Apex web service that, given an email address, does all of the logic the integration code was doing.",
        "B. Create several Apex InboundEmailHandlers to accept calls from the third-party system, thus bypassing the API limits.",
        "C. Create an Inbound Message that, using Flow, can do all of the logic the integration code was doing.",
        "D. Use the REST API as well as the SOAP API to effectively double the API calls allowed in a 24-hour period.",
      ],
      answer: "B",
      title: "Question 30",
    },
    {
      content:
        "Universal Containers has a Visualforce page that displays a table every Container_ c being rented by a gives Account.. failing because some of the customers rent over 100,000 containers. What should a developer change about the Visualforce page to help with the page load errors?",
      options: [
        "A. Implement pagination with a StandardSetController.",
        "B. Implement pagination with an OffsetController.",
        "C. Use lazy loading and a transient List variable.",
        "D. Use JavaScript remoting with SOQL Offset.",
      ],
      answer: "A",
      title: "Question 31",
    },
    {
      content:
        "What is the optimal syntax for adding a link to a case in a Visualforce page? Choose 2 answers",
      options: [
        'A. < apex:outputLink value="/{!case.Id}" target="_blank"> [] {lcase.Name} < /apex:outputLink>',
        'B. < apex:outputLink value="{!URLFOR($Action.Case.View,case.Id)}" target="_blank"> (LIE{!case.Name} < /apex:outputLink>',
        'C. < apex:outputLink value="{!URLFOR($Action.Case.Open, case)}" target="_blank"> [] {lcase.Name} </apex:outputLink>',
        'D. < apex:outputLink value="{!viewCase(case.Id)}" target="_blank"> [] {lcase.Name} </apex:outputLink>',
      ],
      answer: "A,B",
      title: "Question 32",
    },
    {
      content:
        "Which statement is true about using ConnectApi namespace (also called Chatter in Apex)? (Choose two.)",
      options: [
        "A. Many test methods related to Chatter in Apex require the IsTest (SeeAllData=true) annotation",
        "B. Chatter in Apex methods do not run in system mode; they run in the context of the current user",
        "C. Chatter in Apex operations are synchronous, and they occur immediately",
        "D. Chatter in Apex methods honor the 'with sharing' and 'without sharing' keywords",
      ],
      answer: "A,B",
      title: "Question 33",
    },
    {
      content:
        "A developer is integrated with a legacy on-premises SQL database. What should the developer use to ensure the data being integrated is matched to the right records in Salesforce?",
      options: [
        "A. Formula field",
        "B. Lookup field",
        "C. External id field",
        "D. External Object",
      ],
      answer: "C",
      title: "Question 34",
    },
    {
      content:
        "What is a valid return type for the following SOSL query? [FIND 'map\"' IN ALL FIELDS RETURNING Account (Id, Name) , Contact, Opportunity,Lead]",
      options: [
        "A. List < List< sObject>>",
        "B. List< Account>",
        "C. List< AggregateResult>",
        "D. List< sobject>",
      ],
      answer: "A",
      title: "Question 35",
    },
    {
      content: "Choose the correct definition for <apex:pageMessage>",
      options: [
        'A. Standard Salesforce formatting, shows all errors that occur on page. Can add more messages through the"ApexPages.addMessage" function',
        "B. No formatting; displays all errors on a page",
        "C. A single message, without formatting, that can be associated with a specific component on the page",
        "D. Standard Salesforce formatting, throws a specific message on a page",
      ],
      answer: "D",
      title: "Question 36",
    },
    {
      content:
        "A developer 15 tasked with creating an application-centric feature on which end-users can access and update information. This feature must be available in lightning Experience while working seamlessly in multiple device form factors, such as desktops, phones, and tablets. Additionally, the feature must support Addressable URL Tabs and interact with the Salesforce Console APIs. What arm two approaches a developer can take to build the application and support the business requirements? Choose 2 answers",
      options: [
        "A. Create the application using Lightning web Components wrapped in Aura Components.",
        "B. Create the application using Lightning Experience Builder.",
        "C. Create the application using Aura Components wrapped in Lightning Web Components.",
        "D. Create application using Aura Components.",
      ],
      answer: "A,D",
      title: "Question 37",
    },
    {
      content:
        "Consider the following code snippet:How should <c-order> component communicate to the <c-order-order> component that an order has been selected by the user?",
      options: [
        "A. Create and fire a component event.",
        "B. Created and fire an application event.",
        "C. Create and fire a standard DOM event.",
        "D. Create and dispatch a custom event",
      ],
      answer: "D",
      title: "Question 38",
    },
    {
      content:
        "A developer is asked to build a solution that will automatically send an email to the Customer when an Opportunity stage changes. The solution must scale to allow for 10,000 emails per day. The criteria to send the email should be evaluated after all Workflow Rules have fired. What is the optimal way to accomplish this?",
      options: [
        "A. Use a SingleEmailMessage() with an Apex Trigger.",
        "B. Usea MassEmailMessage() with an Apex Trigger.",
        "C. Use a Workflow Email Alert.",
        "D. Use an Email Alert with Process Builder.",
      ],
      answer: "D",
      title: "Question 39",
    },
    {
      content:
        "Which two relationship queries use the proper syntax? (Choose two.)SELECT Id, Name, Account__r.Name FROM Contact WHERE Account__r.Industry",
      options: [
        "A. SELECT Id, Name, Account.Name FROM Contact WHERE Account.Industry = 'Media'",
        "B. 'Media'",
        "C. SELECT Name, (SELECT LastName FROM Contacts) FROM Account",
        "D. SELECT Name, (SELECT LastName FROM Contacts__r) FROM Account",
      ],
      answer: "A,C",
      title: "Question 40",
    },
    {
      content:
        "Business rules require a Contact to always be created when a new Account is created. What can be used when developing a custom screen to ensure an Account is not created if the creation of the Contact fails?",
      options: [
        "A. use the Database.Insert method with allOrNone set to False.",
        "B. Disable validation rules on Contacts and set default values with a Trigger.",
        "C. use the Database.Delete method if the Contact insertion fails.",
        "D. use setSavePoint() and rollback() with a try/catch block.",
      ],
      answer: "D",
      title: "Question 41",
    },
    {
      content:
        "An Apex Trigger creates a Contract record every time an Opportunity record is marked as Closed and Won.This trigger is working great, except (due to a recent acquisition) historical Opportunity records need to be loaded into the Salesforce instance. When a test batch of records are loaded, the Apex Trigger creates Contract records. A developer is tasked with preventing Contract records from being created when mass loading the Opportunities, but the daily users still need to have the Contract records created. What is the most extendable way to update the Apex Trigger to accomplish this?",
      options: [
        "A. Use a List Custom Setting to disable the Trigger for the user who does the data loading.",
        "B. add the Profile Id of the user who does the data loading to the Trigger so the Trigger won't fire for this user.",
        "C. Add a Validation Rule to the Contract to prevent Contract creation by the user who does the data loading.",
        "D. Use a Hierarchy Custom Setting to disable the Trigger for the user who does the data loading.",
      ],
      answer: "D",
      title: "Question 42",
    },
    {
      content:
        "Which annotation exposes an Apex class as a RESTful neb service?",
      options: [
        "A. @RestRtsoorct",
        "B. @RemoteAction",
        "C. @HttpInvocabte",
        "D. @AuraEnaWed",
      ],
      answer: "A",
      title: "Question 43",
    },
    {
      content:
        "A Salesforce developer is hired by a multi-national company to build a custom Lightning application that shows employees their employment benefits and earned commissions over time. The application must acknowledge and respect the user's locale context for dates, times, numbers, currency, and currency symbols. Which approach should the developer implement to ensure the Lightning application complies with the user's locale?",
      options: [
        "A. Use JavaScript in the component's controllers to format values",
        "B. Create a Hierarchical custom setting to store user preferences",
        "C. Use the $Userglobal variable to retrieve the user preferences",
        "D. Use the $Localevalue provider to retrieve the user preferences",
      ],
      answer: "C",
      title: "Question 44",
    },
    {
      content: "Which of the following about Dynamic Apex is incorrect?",
      options: [
        "A. You can retrieve the sObject type from an Id by calling .getSObjectType()",
        "B. getDescribe() can get you a variety of info on a particular object/field",
        "C. Schema.getGlobalDescribe() gives you a map of all sObject",
        "D. In dynamic SOQL, you can use bind variables and bind variable fields",
      ],
      answer:
        "D  While you can use simple bind variables in dynamic SOQL, you cannot use bind variable fields (e.g. :myVariable.field1_c) Use escapeSingleQuotes to prevent SOQL injection ",
      title: "Question 45",
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
        "E  Explanation Explanation/Reference: Explanation: Includes Approval functions, rollbacks/savepoints, and System.runAs ",
      title: "Question 46",
    },
    {
      content:
        "A company has an Apex process that makes multiple extensive database operations and web service callouts. The database processes and web services can take a long time to run and must be run sequentially. How should the developer write this Apex code without running into running into governor limits and system limitations?",
      options: [
        "A. Use Apex Scheduler to schedule each process",
        "B. Use multiple @future methods for each process and callout",
        "C. Use Queueable Apex to chain the jobs to run sequentially",
        "D. Use Limits class to stop entire process once governor limits are reached",
      ],
      answer: "C",
      title: "Question 47",
    },
    {
      content:
        "UC Loans is a small company with a part time Salesforce administrator. UC Loans wants to create a Loan__c record whenever an Opportunity is won. What is the optimal solution for UC Loans to accomplish this?",
      options: [
        "A. Workflow Rule",
        "B. Quick Action",
        "C. Apex Trigger",
        "D. Process Builder",
      ],
      answer: "D",
      title: "Question 48",
    },
    {
      content:
        '35. A user receives the generic "An internal server error has occurred" while interacting with a custom Lightning Component. What should the developer do to ensure a more meaningful message?',
      options: [
        "A. Use an AuraHandledException in a try/catch block.",
        "B. Add an error-view component to the markup.",
        "C. Use ProcessBuilder to catch the error.",
        "D. Add an onerror event handler to the tag.",
      ],
      answer: "A",
      title: "Question 49",
    },
    {
      content:
        "A developer is trying to decide between creating a Visualforce component or a Lightning component for a custom screen. Which functionality consideration impacts the final decision?",
      options: [
        "A. Does the screen need to be accessible from the Lightning Experience UI?",
        "B. Will the screen be accessed via a mobile app?",
        "C. Will the screen make use of a JavaScript framework?",
        "D. Does the screen need to be rendered as a PDF?",
      ],
      answer: "B",
      title: "Question 50",
    },
    {
      content:
        "Ursa Major Solar has a custom object, serviceJcb__c, with an optional Lookup field to Account called Partr,er_service_Provider__c. The TocaUobs__c field on Account tracks the total number of serviceJcb__o records to which a partner service provider Account is related. What should be done to ensure that the TotalJobs_c field is kept up to date?",
      options: [
        "A. Implement a workflow cross-object field update.",
        "B. Build a Process Builder with an invocable action.",
        "C. Change TotalJobi__a to a roll-up summary field.",
        "D. Create an Apex trigger on serviceJob__c",
      ],
      answer: "D",
      title: "Question 51",
    },
    {
      content:
        "Refer to re code segment above.When following best practices for writing Apex taggers, which two lots are wrong or cause for concern? Choose 2 answers",
      options: ["A. Line 11", "B. Line 20", "C. Line 6", "D. Line 16"],
      answer: "B,C",
      title: "Question 52",
    },
    {
      content:
        "In which of the following scenarios would it be acceptable to use programmatic sharing instead of declarative sharing? (Choose three.)",
      options: [
        "A. You need to change record access to read/write for all users utilising a lightning component",
        "B. Every record created by sales users needs to be visible to their respective manager",
        "C. There is an existing, external system of truth for user access assignments which will continue to drive access and be integrated with salesforce",
        "D. Poor performance when using native sharing components",
        "E. Team functionality is required on custom objects",
      ],
      answer: "C,D,E",
      title: "Question 53",
    },
    {
      content:
        "Which three actions must be completed in a Lightning web component for a JavaScript file in a static resource to be loaded? Choose 3 answers",
      options: [
        "A. Import the static resource.",
        "B. Reference the static resource in a <script> tag.",
        "C. Append the static resource to the DOM.",
        "D. Import a method from the platformftesourceLoader,",
        "E. Call loadscript.",
      ],
      answer: "A,D,E",
      title: "Question 54",
    },
    {
      content:
        "A Visualforce page needs to make a callout to get biding information and tax information from two different REST endpoints. The information needs to be Displayed to the user at the same time and the return value of the billing information contains the input for the tax information callout. Each endpoint might take up to two minutes to process. How should a developer implement the callouts?",
      options: [
        "A. A Continuation for both the billing callout and the tax callout",
        "B. An HTTP REST callout for the billing callout and a Continuation for the tax callout",
        "C. An HTTP REST call out for both the billing callout and the tax callout",
        "D. A Continuation for the billing callout and an HTTP REST callout for the tax callout",
      ],
      answer: "A",
      title: "Question 55",
    },
    {
      content:
        "A developer is trying to access org data from within a test class. Which sObject type requires the test class to have the (seeAllData=true) annotation?",
      options: ["A. RecordType", "B. Profile", "C. User", "D. Report"],
      answer:
        "B  Test (SeeAllData=true) annotation is used to grant test classes and individual test methods access to all data in the organization, including pre-existing data that the test didn't create. This annotation is required for Apex code saved using Salesforce API version 24.0 and later. Profile is one of the sObject types that require the isTest (SeeAllData=true) annotation to access org data from within a test class. Other sObject types that require this annotation are User, UserRole, Group, GroupMember, QueueSobject, and CronTrigger. Therefore, using Profile as the sObject type requires the test class to have the isTest (SeeAllData=true) annotation. ",
      title: "Question 56",
    },
    {
      content:
        "Which two relationship queries use the proper syntax? Choose 2 answers",
      options: [
        "A. SELECT Id, Name, Account __r.Name FROM Contact WHERE Account r.Industry = 'Media'",
        "B. SELECT Name, (SELECT LastName FROM Contacts) FROM Account",
        "C. SELECT Name, (SELECT LastName FROM Contacts__r) FROM Account",
        "D. SELECT Id, Name, Account.Name FROM Contact WHERE Account.Industry = 'Media'",
      ],
      answer: "B,C",
      title: "Question 57",
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
      title: "Question 58",
    },
    {
      content:
        "As part of their quoting and ordering process, a company needs to send PDFs to their document storage system's REST endpoint that supports OAuth 2.0. Each Salesforce user must be individually authenticated with the document storage system to send the PDF. What is the optimal way for a developer to implement the authentication to the REST endpoint?",
      options: [
        "A. Named Credential with Password Authentication",
        "B. Hierarchy Custom Setting with an OAuth token custom field",
        "C. Hierarchy Custom Setting with a password custom field",
        "D. Named Credential with an OAuth Authentication Provider",
      ],
      answer: "D",
      title: "Question 59",
    },
    {
      content:
        "A developer is trying to decide between creating a Visualforce component or a Lightning component for a custom screen. Which functionality consideration impacts the final decision?",
      options: [
        "A. Will the screen make use of a JavaScript framework?",
        "B. Does the screen need to be rendered as a PDF?",
        "C. Does the screen need to be accessible from the Lightning Experience UI?",
        "D. Will the screen be accessed via a mobile app?",
      ],
      answer: "A",
      title: "Question 60",
    },
    {
      content:
        "0f Universal Containers uses Big Objects to store almost a billion customer transactions called Customer_Transaction__b. These are the fields on Customer_Transaction__b: Account__c Program__c Points_Earned__c Location__c Transaction_Date__c The following fields have been identified as Index Fields for the Customer_Transaction__b object: Account__c, Program__c, and Transaction_Date__c. Which SOQL query is valid on the Customer_Transaction__b Big Object?",
      options: [
        "A. SELECT Account__c, Program__c, Transaction_Date__c FROM Customer_Transaction__b WHEREAccount__c = '001R000000302D3' AND Program__c EXCLUDES ('Shoppers', 'Womens') ANDTransaction_Date__c=2019-05-31T00:00Z",
        "B. SELECT Account__c, Program__c, Transaction_Date__c FROM Customer_Transaction__b WHEREAccount__c = '001R000000302D3' AND Program__c INCLUDES ('Shoppers', 'Womens') ANDTransaction_Date__c=2019-05-31T00:00Z",
        "C. SELECT Account__c, Program__c, Transaction_Date__c FROM Customer_Transaction__bWHERE Account__c = '001R000000302D3' AND Program__c ='Shoppers' ANDTransaction_Date__c=2019-05-31T00:00Z",
        "D. SELECT Account__c, Program__c, Transaction_Date__c FROM Customer_Transaction__b WHEREAccount__c = '001R000000302D3' AND Program__c LIKE 'Shop%' AND Transaction_Date__c=2019-05-31T00:00Z",
      ],
      answer: "C",
      title: "Question 61",
    },
    {
      content:
        "Developer wishes to improve runtime performance of Apex calls by caching results on the client. What is the best way to implement this?",
      options: [
        "A. Decorate the server-side method with @AuraEnabled(cacheable=true).",
        "B. Set a cookie in the browser for use upon return to the page.",
        "C. Call the setStorable() method on the action in the JavaScript client-side code.",
        "D. Decorate the server-side method with @AuraEnabled(storable=true).",
      ],
      answer: "C",
      title: "Question 62",
    },
    {
      content:
        "A developer is writing a Visualforce page that queries accounts in the system and presents a data table with the results. The users want to be able to filter the results based on up to five fields. However, the users want to pick the five fields to use as filter fields when they run the page. Which Apex code feature is required to facilitate this solution'",
      options: [
        "A. Streaming API",
        "B. Dynamic SOQL",
        "C. Dynamic variable binding",
        "D. Report API",
      ],
      answer: "C",
      title: "Question 63",
    },
    {
      content:
        "What is a controller value that will NOT be saved in the viewstate of a Visualforce page? Choose 3 answers",
      options: [
        "A. A variable declared with the Transient keyword.",
        "B. A variable of a type that is a collection of SObjects.",
        "C. A system-generated object such as a Schema Describe object.",
        "D. A variable of a type that is a custom Apex class.",
        "E. A variable declared with the Static keyword.",
      ],
      answer: "A,C,E",
      title: "Question 64",
    },
    {
      content:
        "Refer to the markup below:A Lightning web component displays the Account name and two custom fields out of 275 that exist on the object. The developer receives complaints that the component performs slowly. What can the developer do to improve the performance?A)B)C)D)",
      options: ["A. Option A", "B. Option D", "C. Option B", "D. Option C"],
      answer: "D",
      title: "Question 65",
    },
    {
      content:
        "A developer must create a custom pagination solution. Users will access the solution on a mobile device and will rarely access subsequent pages of records. Performance is crucial. Which approach is optimal?",
      options: [
        "A. Use @Cache annotation in the controller.",
        "B. Use OFFSET CURSOR in SOQL queries.",
        "C. Use a StandardSetController.",
        "D. Use OFFSET in SOQL queries.",
      ],
      answer: "D",
      title: "Question 66",
    },
    {
      content:
        "Which three Visualforce components can be used to initiate Ajax behavior to perform partial page updates? Choose 3 answers",
      options: ["A. ", "B. ", "C. ", "D. ", "E. "],
      answer: "A,B,C",
      title: "Question 67",
    },
    {
      content:
        'What is the correct syntax for calling a controller action from a Visualforce page and updating part of the page once the action is completed? (Choose two.)<apex:commandFunction action="{!Save}" value="Save" rendered="thePageBlock"/>',
      options: [
        'A. rerender="thePageBlock"/>',
        'B. <apex:commandButton action="{!Save}" value="Save" redraw="thePageBlock"/>',
        'C. <apex:actionFunction action="{!Save}" name="Save" rerender="thePageBlock"/>',
        'D. <apex:actionSupport action="{!Save} " event="onchange"',
      ],
      answer: "A,B",
      title: "Question 68",
    },
    {
      content:
        "A Lightning Component functions in preview mode and needs to be used inside a Lightning App Builder page, but it is not available. What change should be applied to the component?",
      options: [
        "A. Refresh the sandbox and upgrade it to the latest API version.",
        "B. Look for errors in the logic in the JavaScript controller.",
        "C. Expose it in the markup using the implements and access attributes.",
        "D. Delete the component, metadata, and Apex controller and recreate them.",
      ],
      answer: "C",
      title: "Question 69",
    },
    {
      content:
        "A developer is trying to access org data from within a test class. Which sObject type requires the test class to have the (seeAllData=true) annotation?",
      options: ["A. User", "B. Profile", "C. Report", "D. RecordType"],
      answer: "C",
      title: "Question 70",
    },
    {
      content:
        "Refer to the markup below:A Lightning web component displays the Account name and two custom fields out of 275 that exist on the object. The developer receives complaints that the component performs slowly. What can the developer do to improve the performance?A)B)C)D)",
      options: ["A. Option C", "B. Option B", "C. Option A", "D. Option D"],
      answer: "A",
      title: "Question 71",
    },
    {
      content:
        "A developer is tasked with creating a Lightning web component that allows users to create a Case for a selected product, directly from a custom Lightning page. The input fields in the component are displayed in a non-linear fashion on top of an image of the product to help the user better understand the meaning of the fields. Which two components should a developer use to implement the creation of the Case from the Lightning web component? Choose 2 answers",
      options: [
        "A. lightning-record-edit-form",
        "B. lightning-input",
        "C. lightning-record-form",
        "D. lightning-input-field",
      ],
      answer: "A,C",
      title: "Question 72",
    },
    {
      content:
        "A developer is building a Lightning web component to get data from an Apex method called getData that takes a parameter, name. The data should be retrieved when the user clicks the Load Data button.Exhibit. What must be added to get the data?",
      options: [
        "A. Add this, account = getData (this,name); to the loadData ( ) function.",
        "B. Add @wire(getData, (name: $name')} to the account field and this, account = getData ( ) ; to t loadData ( ) function.",
        "C. Add getData ({ name; this,name}) , then (result=> { this.account = result}) to the LeadData ( ) function.",
        "D. Add @wire(getData, {name: $name'}) to the account field and delete loadData ( ) because it is not needed.",
      ],
      answer: "C",
      title: "Question 73",
    },
    {
      content:
        "A developer is trying to access org data from within a test class. Which sObject type requires the test class to have the (seeAllData=true) annotation?",
      options: ["A. RecordType", "B. Report", "C. User", "D. Profile"],
      answer: "A,C,D",
      title: "Question 74",
    },
    {
      content:
        "What is the optimal technique a developer should use to programmatically retrieve Global Picklist options in a Test Method?",
      options: [
        "A. Perform a callout to the Metadata API.",
        "B. performs a SOQL Query.",
        "C. Use the Schema namespace.",
        "D. Use a static resource",
      ],
      answer: "D",
      title: "Question 75",
    },
    {
      content:
        "A developer is asked to build a solution that will automatically send an email to the Customer when an Opportunity stage changes. The solution must scale to allow for 10,000 emails per day. The criteria to send the email should be evaluated after all Workflow Rules have fired. What is the optimal way to accomplish this?",
      options: [
        "A. Use a MassEmailMessage() with an Apex Trigger.",
        "B. Use a Workflow Email Alert.",
        "C. Use an Email Alert with Process Builder.",
        "D. Use a SingleEmailMessage() with an Apex Trigger.",
      ],
      answer: "C  Explanation/Reference: ",
      title: "Question 76",
    },
    {
      content:
        "Which tag should a developer use to display different text while an <apex:commandButton> is executing versus not executing?",
      options: [
        "A. <ApexactionStatus>",
        "B. <ApexactionSupper>",
        "C. <ApexpageMessages>",
        "D. <apexactionPoller>",
      ],
      answer: "D",
      title: "Question 77",
    },
    {
      content:
        "A developer is writing a Visualforce page to display a list of all of the checkbox fields found on a custom object. What is the recommended mechanism the developer should use to accomplish this?",
      options: [
        "A. Apex API",
        "B. Schema Class",
        "C. Metadata API",
        "D. Schema Builder",
      ],
      answer: "B",
      title: "Question 78",
    },
    {
      content:
        "A developer wants to write a generic Apex method that will compare the Salesforce Name filed between any two object records, for example to compare the Name field of an Account and an Opportunity; or the name of an Account and a Contact. How should the developer do this?",
      options: [
        "A. Invoke a Schema,describe() function to compare the values of each Name field.",
        "B. Cast each object into an sObject and use sObject.get(Name') to compare the Name fields.",
        "C. Use the salesforce metadata API to extract the value of each object and compare the name fields",
        "D. Use a String.replace( ) method to parse the contents of each Name field.",
      ],
      answer: "B",
      title: "Question 79",
    },
    {
      content:
        "A developer has requirement to query three fields (id, name, Type) from an Account and first and last names for all Contacts associated with the Account. Which option is the preferred optimized method to achieve this for the Account named 'Ozene Electronics'?",
      options: [
        "A. Account a = (SELECT ID, Name, Type, (select contat,firstName, Contact,LastName from Account, Contacts) from Account where name; Ozone Electronic' Limit 1 );",
        "B. List 1Contacts = new list ( );for(Contact c ; 1Select firstname, lastname Account, Name Account,ID Account, Type from Contact where Account: Name=' electronics')) ( iContacts.add(c);)",
        "C. Account a = (SELECT ID, Name, Type from Account where name= Ozone Electronics;)list 1contacts = (SELECT firstname, lastname from Contacts where accountid=: a -ID0;",
        "D. List 1Accounts = (Select ID, Name, Type from Account Join (Select ID, firstname, lastname form Contact where contact account , name 'ozone electronics));",
      ],
      answer: "A",
      title: "Question 80",
    },
    {
      content:
        "As part of a custom development, a developer creates a Lightning Component to show how a particular opportunity progresses over time. The component must display the date stamp when any of the following fields change:* Amount Probability, Stage, or Close DateWhat is the most efficient way to Query such information?",
      options: [
        "A. ('StageName', Probability',Amount /CloseDate')];",
        "B. [Select Amount, CloseDate, StageName, Probability FROM OpportunityHistory WHERE Opportunityld= :oppId];",
        "C. [Select Amount CloseDate. StageName, Probability FROM Opportunity_History WHERE Opportunityld - :oppId];",
        "D. [Select Newvalue, Oldvalue From OpportunityField_History Where Oppportunity = oppid AND Field IN",
        "E. [Select NewValue, Oldvalue FROM Opportunity FieldHistory WHERE Opportunityld = :oppId AND Field IN",
      ],
      answer: "E",
      title: "Question 81",
    },
    {
      content:
        "A developer needs to create a Lightning page for entering Order Information. An error message should be displayed if the zip code entered as part of the Order's shipping address is not numeric. What is a recommended way for the error message be displayed to the end user?",
      options: [
        "A. Use the aura:component tag to display errors",
        "B. Use the apex:message tag to display errors",
        "C. Use the ui:outputText tag to display errors",
        "D. Use the ui:inputDefaultError tag to display errors",
      ],
      answer: "D",
      title: "Question 82",
    },
    {
      content:
        "Which use case is an appropriate fit for the @future asynchronous Apex method? (Choose two.)",
      options: [
        "A. A developer needs to segregate DML operations and bypass the mixed save DML error",
        "B. A developer has jobs that need larger query results than regular transactions allow",
        "C. A developer has long-running jobs with large data volumes that need to be performed in batches",
        "D. A developer has long-running methods and needs to prevent delaying an Apex transaction",
      ],
      answer: "A,D",
      title: "Question 83",
    },
    {
      content:
        "A developer must perform a complex SOQL query that joins two objects in a Lightning component. how can the Lightning component execute the query?",
      options: [
        "A. Write the query in a custom Lightning web component wrapper and invoke from the Lightning component.",
        "B. Use the SaJesforce Streaming API to perform the SOQL query.",
        "C. Create a Process Builder to execute the query and invoke from the Lightning component.",
        "D. Invoke an Apex dass with the method annotated as @AiraEnabled to perform the query.",
      ],
      answer: "D",
      title: "Question 84",
    },
    {
      content:
        "Universal Containers has a Visualforce page that displays a table every Container_ c being rented by a gives Account.. failing because some of the customers rent over 100,000 containers. What should a developer change about the Visualforce page to help with the page load errors?",
      options: [
        "A. Use lazy loading and a transient List variable.",
        "B. Use JavaScript remoting with SOQL Offset.",
        "C. Implement pagination with an OffsetController.",
        "D. Implement pagination with a StandardSetController.",
      ],
      answer: "C",
      title: "Question 85",
    },
    {
      content: 'The "Webservice" keyword __________.',
      options: [
        "A. All of the above",
        "B. Method must be static, and class must be global",
        "C. Can be used on all classes",
        "D. Used for any member variables included",
      ],
      answer: "A",
      title: "Question 86",
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
        'A,B,E  SObjectException occurs when accessing a field not queried, or you try to change a field during the wrong dml statement (i.e. an edit-only field being set on insert) Custom exceptions must extend the "Exception" class ',
      title: "Question 87",
    },
    {
      content:
        "A Salesforce org has more than 50,000 contacts. A new business process requires a calculation that aggregates data from all of these contact records. This calculation needs to run once a day after business hours. Which two steps should a developer take to accomplish this? Choose 2 answers",
      options: [
        "A. Implement the Queuable Interface in the class that contains the aggregate calculation method.",
        "B. Use the areadOnly annotation on the method that performs the aggregate calculation.",
        "C. Use the @future annotation on the method that performs the aggregate calculation.",
        "D. Implement the schedulable Interface In the class that contains the aggregate calculation method.",
      ],
      answer: "A,D",
      title: "Question 88",
    },
    {
      content:
        "Example 1: AggregateResult[] groupedResults = [SELECT Campaignid, AVG(Amount) FROM Opportunity GROUP BY CampaignId]; for (AggregateResult ar : groupedResuits) { System.debug ('Campaign ID' + ar.get('CampaignId'-); System.debug ('Average amount' + ar.get('exprd')); } Example 2: AggregateResult[] groupedResults = [SELECT Campaignid, AVG(Amount) theAverage FROM Opportunity GROUP BY Campaignid]; for (AggregateResult ar : groupedResuits) { System.debug(*Campaign ID' + ar.get('CampaignId')); System.debug ('Average amount' + ar.get('theAverage')); } Example 3: AggregateResult[] groupedResults = [SELECT CampaignId, AVG(Amount) FROM Opportunity GROUP BY CampaignId]; for (AggregateResult ar : groupedResuits) System.debug(*Campaign ID' + ar.get('CampaignId')); System.debug('Average amount' + ar.get.AVG(-); } Example 4:AggregateResult[] groupedResults = [SELECT CampaigniId, AVG(Amount) theAverage FROM Opportunity GROUP BY Campaignid]; for (AggregateResult ar : groupedResults) { System.debug('Campaign ID' + ar.get('CampaignId')); System.debug ('Average amount' + ar.theAverage-; } Which two of the examples above have correct System.debug statements? Choose 2 answers",
      options: ["A. Example 4", "B. Example 1", "C. Example 3", "D. Example 2"],
      answer: "A,D",
      title: "Question 89",
    },
    {
      content:
        'If the "PageReference.setRedirect" Apex function is set to True, what type of request is made?',
      options: [
        "A. Get request",
        "B. If PageReference points to the same controller and subset of extensions, postback request, otherwise get request",
        "C. Postback request",
      ],
      answer: "A",
      title: "Question 90",
    },
    {
      content:
        "A developer wrote a trigger on Opportunity that will update a custom Last Sold Date field on the Opportunity's Account whenever an Opportunity is closed. In the test class for the trigger, the assertion to validate the Last Sold Date field fails. What might be causing the failed assertion?",
      options: [
        "A. The test class has not implemented seeAllData=true in the test method",
        "B. The test class is not using System.runAs() to run tests as a Salesforce administrator",
        "C. The test class has not defined an Account owner when inserting the test data",
        "D. The test class has not re-queried the Account record after updating the Opportunity",
      ],
      answer: "D",
      title: "Question 91",
    },
    {
      content:
        "A developer has created an Order entry page that includes an <apex:outputLabel> tag for a field label. How can the developer ensure that the label text changes when the field label changes?",
      options: [
        "A. Use a custom label to manage the label text.",
        "B. Use the SObjectType variable to control label text.",
        "C. Use FieldSetMember methods to control label text.",
        "D. Use the metadata API to update the label text.",
      ],
      answer: "B",
      title: "Question 92",
    },
    {
      content:
        "A developer has written an After Update trigger on Account. A workflow rule and field update cause the trigger to repeatedly update the Account records. How should the developer handle the recursive trigger?",
      options: [
        "A. Use a global variable to prevent the trigger from executing more than once.",
        "B. Deactivate the workflow rule to prevent the field update from executing.",
        "C. Deactivate the trigger and move the logic into a Process or Flow.",
        "D. Use a static variable to prevent the trigger from executing more than once.",
      ],
      answer: "D",
      title: "Question 93",
    },
    {
      content:
        "When should a developer use the transient keyword? Choose 2 answers",
      options: [
        "A. To exclude Apex class variables from getting serialized if they are in a serializable class",
        "B. To declare an Apex variable as type-less when developing with dynamic Apex.",
        "C. To prevent Apex interface definitions being included in the Apex-based partner WSDL.",
        "D. To prevent Apex controller variables being sent to the Visualforce page as view state.",
      ],
      answer: "A,D",
      title: "Question 94",
    },
    {
      content:
        "What should be added to the setup, in the location indicated, for the unit test above to create the controller extension for the test?",
      options: ["A. ", "B. ", "C. ", "D. "],
      answer: "A",
      title: "Question 95",
    },
    {
      content:
        "Consider the following code snippet:Which governor limit is likely to be exceeded when the trigger runs when a scope of 200 newly inserted accounts?",
      options: [
        "A. Total number of DML statements issued",
        "B. Total number of SOQL queries issued",
        "C. Total number of SOQL queries issued ",
        "D. Total number of records processed as a result of DML",
      ],
      answer: "A",
      title: "Question 96",
    },
    {
      content:
        'What is the optimal syntax for adding a link to a case in a Visualforce page? (Choose two.)<apex:outputLink value="{$URLFOR($Action.Case.Open, case)}" target="blank">',
      options: [
        'A. {Icase.Name} </apex:outputLink><apex:outputLink value="/{!case.Id}" target="blank"> {Icase.Name}</',
        'B. target="blank">(LIE{!case.Name}</apex:outputLink><apex:outputLink value="!viewCase(case.Id)}" target="_blank">{Icase.Name} </',
        "C. apex:outputLink>",
        'D. apex:outputLink><apex:outputLink value="{!URLFOR($Action.Case.View,case.Id)}"',
      ],
      answer: "B,D",
      title: "Question 97",
    },
    {
      content:
        "When developing a Visualforce page that will be used by a global organization that does business in many languages and many currencies, which feature should be used? (Choose three.)",
      options: [
        "A. convertCurrency()",
        "B. Translation Workberic",
        "C. Global Labels",
        "D. Custom Labels",
        "E. getLocalCurrency()",
      ],
      answer: "A,B,D",
      title: "Question 98",
    },
    {
      content: "Choose the correct definition for <apex:actionSupport>.",
      options: [
        "A. Sends an AJAX request according to the time interval you specify. If this ever gets re-rendered, it resets",
        "B. Signifies which components should be processed by the server when an AJAX request is generated",
        "C. Adds AJAX support to another component (e.g. onClick, onMouseUp, onFocus, etc.)",
        "D. Allows for controller methods to be called directly from Javascript. Must be encapsulated in <apex:form> tags. Unlike actionSupport, these function<apex:actionPoller>s can be called directly from Javascript code",
        'E. Can be associated with an AJAX request (actionFunction/actionSupport/actionPoller) and shows content conditionally depending on the status of the request (in progress/complete). Use the "id" field to specify name; use "status" field on related components to connect them',
      ],
      answer: "C",
      title: "Question 99",
    },
    {
      content:
        "An org has a custom object, Registeration_c that has a lookup relationship to the Opportunity object. What should a developer use to create a stand-alone Vlsualforce page that displays the Registration__c records related to an Opportunity.",
      options: [
        "A. A standard controller with a controller extension",
        "B. A custom controler",
        "C. A controler extension",
        "D. A standard controller",
      ],
      answer: "D",
      title: "Question 100",
    },
    {
      content:
        "trigger AssignOwnerByRegion on Account ( before insert, before update ){List<Account> accountList = new List<Account>();for( Account anAccount : trigger.new ){Region__c theRegion = [SELECT Id, Name, Region_Manager__cFROM Region__cWHERE Name = :anAccount.Region_Name__c];anAccount.OwnerId = theRegion.Region_Manager__c;accountList.add( anAccount );}update accountList;}Consider the above trigger intended to assign the Account to the manager of the Account's region. Which two changes should a developer make in this trigger to adhere to best practices? (Choose two.)",
      options: [
        "A. Move the Region__c query to outside the loop.",
        "B. Use a Map accountMap instead of List accountList.",
        "C. Use a Map to cache the results of the Region__c query by Id.",
        "D. Remove the last line updating accountList as it is not needed.",
      ],
      answer: "B,C",
      title: "Question 101",
    },
    {
      content:
        'What is a limitation of a "getxxx" method (for example, getName) in a custom Visualforce controller?',
      options: [
        "A. The method cannot return SObjects.",
        "B. The method cannot use DML operations.",
        "C. The method cannot use SOSL queries.",
        "D. The method cannot return Apex classes.",
      ],
      answer: "B",
      title: "Question 102",
    },
    {
      content:
        "Given a list of Opportunity records named opportunityList, which code snippet is best for querying all Contacts of the Opportunity's Account?A)B)C)D)",
      options: ["A. Option D", "B. Option C", "C. Option A", "D. Option B"],
      answer: "B",
      title: "Question 103",
    },
    {
      content:
        "A software company uses a custom object Defect_c, to track defects in their software, Defect__c has organisation-wide defaults set toprivate Each Dafect__c has a related list of Reviewer_c records, each with a lookup field to User that is used to indicate that the User will review the Defect_c. What should be used to give the User on the Reviewer_c record read only access to the Defect_c record on the Reviewer_c record?",
      options: [
        "A. View All on Defect_c",
        "B. Apex managed sharing",
        "C. Criteria based sharing",
        "D. lightning web component",
      ],
      answer: "A",
      title: "Question 104",
    },
    {
      content:
        "A developer writes the following code:While testing the code, the developer receives the following error message: System.CalloutException : You have uncommitted work pending What should the developer do? (Choose two.)",
      options: [
        "A. Move the web service callout into an ©future method",
        "B. Use the asyncSend() method of the HTTP class to send the request in async context",
        "C. Ensure all callouts are completed prior to executing DML statements",
        "D. Use Database.insert (order, true) to immediately commit any database changes",
      ],
      answer: "A,C",
      title: "Question 105",
    },
    {
      content:
        "Which statement is true about Apex web service methods? Choose 3 answers",
      options: [
        "A. Web service methods cannot be deprecated in managed package code.",
        "B. Web service methods can only be added to Apex classes that are declared global.",
        "C. Web service methods can be overloaded with methods of the same name in the same class.",
        "D. Web service methods can only be added to Apex triggers that are declared global.",
        "E. Web service methods can be exposed having a custom Apex class as parameter datatype.",
      ],
      answer: "A,B,E",
      title: "Question 106",
    },
  ],
});
