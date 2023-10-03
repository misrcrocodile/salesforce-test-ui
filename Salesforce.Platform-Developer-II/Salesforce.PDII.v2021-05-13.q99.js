window.testContent = window.testContent || [];
var testId = "Salesforce.Platform-Developer-II";
var testName = "Salesforce.Platform-Developer-II";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "Salesforce.Platform-Developer-II.v2021-05-13.q99",
  content: [
    {
      content:
        "A developer created and tested a Visualforce page in their developer sandbox, but now receives reports that users are encountering ViewState errors when using it in Production. What should the developer ensure to correct these errors?",
      options: [
        "A. Ensure profiles have access to the Visualforce page.",
        "B. Ensure properties are marked as Transient.",
        "C. Ensure properties are marked as private.",
        "D. Ensure queries do not exceed governor limits.",
      ],
      answer: "B",
      title: "Question 1",
    },
    {
      content:
        "What is the correct syntax for calling a controller action from a Visualforce page and updating part of the page once the action is completed? (Choose two.)",
      options: [
        'A. <apex: actionSupport action="{ ISave} " event=llonchange1\' rerender="thePageBlock"/>',
        'B. <apex:commandButton action="{!Save}" value="Save" redraw="thePageBlock"/>',
        'C. <apex: actionFunction action=" { ! Save} " name=!,Save" rerender=l,thePageBlock1\'/>',
        'D. <apex : commandFunction action=?l { ! Save} " value="Save" rendered^"thePageBlock"/>',
      ],
      answer: "A,C",
      title: "Question 2",
    },
    {
      content:
        "The progress of an apex job queued is using the System.enqueueJob method and needs to be monitored.Which options are valid? (Choose two.)",
      options: [
        "A. Query the Queueable Apex record",
        "B. Query the AsyncApexJob record",
        "C. Use the Apex Jobs page in setup",
        "D. Use the Scheduled Jobs page in setup",
      ],
      answer: "B,C",
      title: "Question 3",
    },
    {
      content:
        "A customer has a single Visualforce page that allows each user to input up to 1500 sales forecasts and instantly view pivoted forecast calculations. Users are complaining that the page is loading slowly, and they are seeing error messages regarding heap and view state limits.What are three recommendations to optimize page performance? (Choose three.)",
      options: [
        "A. Specify the list of sales forecasts as transient",
        "B. Use JavaScript Remoting instead of controller actions",
        "C. Segregate calculation functionality from input functionality",
        "D. Create formula fields to compute pivoted forecast calculations",
        "E. Implement pagination and reduce records per page",
      ],
      answer: "B,C,E",
      title: "Question 4",
    },
    {
      content:
        "Lightning Aura ComponentGiven the code above, which two changes need to be made in the Apex Controller for the code to work' Choose 2 answers",
      options: [
        "A. Change the argument from JSONObject to String.",
        "B. Change the method signature to be global static, not public static.",
        "C. Remove line 06 from the Apex Controller and use firstName In the return.",
        "D. Annotate the entire class as @AuraEnabled instead of just the single method.",
      ],
      answer: "A,C",
      title: "Question 5",
    },
    {
      content:
        "A company has code to update a Request and Request Lines and make a callout to their external ERP system's REST endpoint with the updated records.The CalloutUtil. makeRestCallout fails with a 'You have uncommitted work pending. Please commit or rollback before calling out' error. What should be done to address the problem?",
      options: [
        "A. Move the CalloutUtil.makeRestCallout method call below the catch block.",
        "B. Change the CalloutUtil.makeRestCallout to an @future method",
        "C. Remove the Database.setSavepoint and Database.rollback.",
        "D. Change the CalloutUtil.makeRestCallout to an @InvocableMethod method.",
      ],
      answer: "B",
      title: "Question 6",
    },
    {
      content:
        "A developer is asked to build a solution that will automatically send an email to the Customer when an Opportunity stage changes. The solution must scale to allow for 10,000 emails per day. The criteria to send the email should be evaluated after all Workflow Rules have fired. What is the optimal way to accomplish this?",
      options: [
        "A. Use a SingleEmailMessage() with an Apex Trigger.",
        "B. Use an Email Alert with Process Builder.",
        "C. Use a Workflow Email Alert.",
        "D. Usea MassEmailMessage() with an Apex Trigger.",
      ],
      answer: "B",
      title: "Question 7",
    },
    {
      content:
        "Line 1 public class AttributeTypes Line 2 { Line 3 private final String[] arrayItems; Line 4 Line 5 @AuraEnabled Line 6 public List<String> getStringArray() { Line 7 Strings+ arrayItems = new String*+, 'red', 'green', 'blue' -; Line 8 return arrayItems; Line 9 } Line 10 } Consider the Apex controller above that is called from a Lightning Aura Component. What is wrong with it?",
      options: [
        "A. Line 8: method must first serialize the list to JSON before returning",
        "B. Line 1: class must be global",
        "C. Line 6: method must be static",
        "D. Lines 1 and 6: class and method must be global",
      ],
      answer: "C",
      title: "Question 8",
    },
    {
      content:
        "What is the transaction limit for the number of records for SOSL?",
      options: [
        "A. 2,000",
        "B. 100 (synchronous), 200 (async)",
        "C. 200 (synchronous), 100 (async)",
        "D. There is no limit",
        "E. 20",
      ],
      answer: "A",
      title: "Question 9",
    },
    {
      content:
        "A developer is writing unit tests for the following method:Which assertion would be used in a negative test case?",
      options: [
        "A. System.assertEquals(true, isFreezingClOO'))",
        "B. System.assertEquals (true, isFreezing('O')",
        "C. System.assertEquals(null, isFreezing('asdf))",
        "D. System.assertEquals(true, isFreezing(null))",
      ],
      answer: "C",
      title: "Question 10",
    },
    {
      content:
        "A developer writes the following Apex trigger so that when a Case is closed, a single Survey record is created for that Case. The issue is that multiple Survey_c records are being created per Case.What could be the cause of this issue?",
      options: [
        "A. A workflow rule is firing with a Field Update action",
        "B. A user is editing the record multiple times",
        "C. A user is creating the record as Closed",
        "D. A workflow rule is firing with a Create Task action",
      ],
      answer: "B",
      title: "Question 11",
    },
    {
      content:
        "Which of the follow be used together in DML operations (transaction)? (Choose two.)",
      options: [
        "A. Acco u nt - Acco u ntS ha re",
        "B. Opportunity - User",
        "C. Account - Order",
        "D. Case - CaseComment",
      ],
      answer: "C,D",
      title: "Question 12",
    },
    {
      content:
        "A developer wants to integrate invoice and invoice line data into Salesforce from a custom billing system. The developer decides to make realtime callouts from the billing system using the SOAP API. Unfortunately, the developer is getting a lot of errors when inserting the invoice line data because the invoice header record doesn't exist yet.What will help ensure ne transactional Integrity of the integration?",
      options: [
        "A. Set the AIIOrNoneHeader to true when calling each of create() for invoice headers and create() for invoice lines.",
        "B. Create the invoice header and the related invoice lines in the same create() call leveraging External Ids.",
        "C. Develop a custom Apex web service to handle a custom JSON data structure with both invoice header and related invoice lines.",
        "D. Use an ETL tool and the Bulk API running nightly, thus ensuring all of the data is handled at the same time.",
      ],
      answer: "B",
      title: "Question 13",
    },
    {
      content:
        "A developer sees test failures in the sandbox but not in production. No code or metadata changes have been actively made to either environment since the sandbox was created.Which consideration should be checked to resolve the issue?",
      options: [
        "A. Ensure the Apex Classes are on the same API version.",
        "B. Ensure the sandbox is on the same release as production.",
        "C. Ensure Workflow Rules are inactive.",
        "D. Ensure Process Builder processes are inactive.",
      ],
      answer: "B",
      title: "Question 14",
    },
    {
      content:
        "Which use case is an appropriate fit for the @future asynchronous Apex method? (Choose two.)",
      options: [
        "A. A developer has long-running methods and needs to prevent delaying an Apex transaction",
        "B. A developer needs to segregate DML operations and bypass the mixed save DML error",
        "C. A developer has long-running jobs with large data volumes that need to be performed in batches",
        "D. A developer has jobs that need larger query results than regular transactions allow",
      ],
      answer: "A,B",
      title: "Question 15",
    },
    {
      content:
        "A developer has generated Apex code from a WSDL for an external web service. The web service requires Basic authentication.What code should the developer use to authenticate?",
      options: [
        "A. Http.setAuthentication('Basic QthZGprjpchVulHNchFtZQ')",
        "B. Http.setHeader ('Authorization' , 'Basic QthZGprjpchVulHNchFtZQ!)",
        "C. stub.authentication.put ('Authorization','Basic QthZGprjpchVulHNchFtZQ')",
        "D. stub.inputHttpHeaders_x.put('Authorization' , 'Basic QthZGprJpchVulHNchFtZQ')",
      ],
      answer: "D",
      title: "Question 16",
    },
    {
      content:
        "A developer has requirement to query three fields (id, name, Type) from an Account and first and last names for all Contacts associated with the Account.Which option is the preferred optimized method to achieve this for the Account named 'Ozene Electronics'?",
      options: [
        "A. Account a = (SELECT ID, Name, Type from Account where name= Ozone Electronics;) list 1contacts = (SELECT firstname, lastname from Contacts where accountid=: a -ID0;",
        "B. List 1Contacts = new list ( );for(Contact c ; 1Select firstname, lastname Account, Name Account,ID Account, Type from Contact where Account: Name=' electronics')) ( iContacts.add(c);)",
        "C. Account a = (SELECT ID, Name, Type, (select contat,firstName, Contact,LastName from Account, Contacts) from Account where name; Ozone Electronic' Limit 1 );",
        "D. List 1Accounts = (Select ID, Name, Type from Account Join (Select ID, firstname, lastname form Contact where contact account , name 'ozone electronics));",
      ],
      answer: "C",
      title: "Question 17",
    },
    {
      content:
        "A developer receives an error when trying to call a global server-side method using the @remoteAction decorator. How can the developer resolve the error?",
      options: [
        "A. Add static to the server-side method signature.",
        "B. Decorate the server-side method with (static=true).",
        "C. Change the function signature to be private static.",
        "D. Decorate the server-side method with (static=false)",
      ],
      answer: "A",
      title: "Question 18",
    },
    {
      content:
        'What is the correct order of execution for Visualforce Page "get" requests (initial page visit)?',
      options: [
        "A. Evaluate constructors on controller and extensions2) If there's a <apex:form> element, create the view state3) Evaluate expressions, <apex:page> attribute actions, and other method calls (getters/setters) on main page4) Evaluate constructors, extensions, and expression on attribute definitions on any custom components present5) Send HTML to Browser",
        "B. Evaluate constructors on controller and extensions2) Evaluate constructors, extensions, and expression on attribute definitions on any custom components present3) Evaluate expressions, <apex:page> attribute actions, and other method calls (getters/setters) on main page4) If there's a <apex:form> element, create the view state5) Send HTML to Browser",
        "C. Evaluate constructors, extensions, and expression on attribute definitions on any custom components present2) Evaluate constructors on controller and extensions3) Evaluate expressions, <apex:page> attribute actions, and other method calls (getters/setters) on main page4) If there's a <apex:form> element, create the view state5) Send HTML to Browser",
      ],
      answer: "B",
      title: "Question 19",
    },
    {
      content:
        "A developer is developing a reuseable Aura Component that will reside on an sObject Lightning Page with the following HTML snippet:<aura:component implements=\"force:hasRecordId,flexipage:availableForAIIPageTypesM><div>Hello!</div></aura:component>How can the component's Controller get the context of the Lightning Page that the sObject is on without requiring additional test coverage?",
      options: [
        "A. Add force:hasSobjectName to the implements.",
        "B. Create a design attribute and configure via App builder.",
        "C. Use the getSObjectTypeQ method in an Apex class.",
        "D. Set the sObject type as a component attribute.",
      ],
      answer: "A",
      title: "Question 20",
    },
    {
      content:
        "Which three Visualforce components can be used to initiate Ajax behavior to perform partial page updates? Choose 3 answers",
      options: ["A. A", "B. B", "C. E", "D. D", "E. C"],
      answer: "B,C,E",
      title: "Question 21",
    },
    {
      content:
        "The maximum view state size of a visualforce page is______________.",
      options: ["A. 135kb", "B. 165kb", "C. 65kb", "D. 1mb", "E. 256kb"],
      answer: "A",
      title: "Question 22",
    },
    {
      content: "How long is field history retained?",
      options: [
        "A. 18 Months",
        "B. 6 Months",
        "C. 24 Months",
        "D. 36 Months",
        "E. 12 Months",
      ],
      answer: "A",
      title: "Question 23",
    },
    {
      content: "What are two benefits of using External IDs? Choose 2 answers",
      options: [
        "A. An External ID can be a formula field to help create a unique key from two fields in Salesforce.",
        "B. An External ID field can be used to reference a unique ID from another, external system.",
        "C. An External ID is indexed and can improve the performance of SOQL queries.",
        "D. An External ID can be used with Salesforce Mobile to make external data visible.",
      ],
      answer: "B,C",
      title: "Question 24",
    },
    {
      content:
        "How can the DISTANCE and GEOLOCATION functions be used i|n SOQL queries? (Choose two.)",
      options: [
        "A. To filter results based on distance from a latitude and longitude",
        "B. To get the distance results from a latitude and longitude",
        "C. To group results in distance ranges from a latitude and longitude",
        "D. To order results by distance from a latitude or longitude",
      ],
      answer: "A,D",
      title: "Question 25",
    },
    {
      content:
        "A developer is writing a complex application involving triggers, workflow rules, Apex classes, and processes. The developer needs to carefully consider the order of execution when developing the application.1. Before Triggers2. After Triggers3. Post commit logic such as sending email4. DML committed to the database5. Workflow rules6. Roll-up summary calculationsIn what order do the following operations execute?",
      options: [
        "A. 1,6,5,2,4,3",
        "B. 1,5,6,2,4,3",
        "C. 1,2,4,5,6,3",
        "D. 1,2,5,6,4,3",
      ],
      answer: "D",
      title: "Question 26",
    },
    {
      content:
        "What is the transaction limit for the number of records for SOQL queries?",
      options: [
        "A. 20,000",
        "B. 5,000",
        "C. 10,000",
        "D. There is no limit",
        "E. 50,000",
      ],
      answer: "E",
      title: "Question 27",
    },
    {
      content:
        "A developer is working on code that requires a call to an external web service from a batch. How should the developer enable this functionality?",
      options: [
        "A. Include Database.AllowCallout() in the class definition",
        "B. Implement a custom System.CalloutException class",
        "C. Implement an @future method for the callout, and invoke it from the batch",
        'D. Specify "callout=true" in the batch implementation',
      ],
      answer: "A",
      title: "Question 28",
    },
    {
      content:
        "Given the following code:Assuming there were 10 Contacts and five Accounts created today, what is the expected result?",
      options: [
        "A. System. LimitException: Too many SOQL Queries on Contract",
        "B. System. LimitException: To many SOQL Queries on Account.",
        "C. System. QueryException: To many DML Statement errors on Contact",
        "D. System. QueryException: List has more than one row after Assignment on Account.",
      ],
      answer: "D",
      title: "Question 29",
    },
    {
      content:
        "A developer wrote a trigger on Opportunity that will update a custom Last Sold Date field on the Opportunity's Account whenever an Opportunity is dosed. In the test class for the trigger, the assertion to validate the Last Sold Date field fails.What might be causing the failed assertion?",
      options: [
        "A. The test class has not defined an Account owner when inserting the test data.",
        "B. The test class has not re-queried the Account record after updating the Opportunity.",
        "C. The test class is not using System.runAs() to run tests as a Salesforce administrator.",
        "D. The test class has not implemented seeAIIData-truwh the test method.",
      ],
      answer: "B",
      title: "Question 30",
    },
    {
      content:
        "Universal Containers has a Visualforce page that displays a table every Container_ c being rented by a gives Account.. failing because some of the customers rent over 100,000 containers.What should a developer change about the Visualforce page to help with the page load errors?",
      options: [
        "A. Implement pagination with an OffsetController.",
        "B. Implement pagination with a StandardSetController.",
        "C. Use JavaScript remoting with SOQL Offset.",
        "D. Use lazy loading and a transient List variable.",
      ],
      answer: "B",
      title: "Question 31",
    },
    {
      content:
        "A Lightning Component functions in preview mode and needs to be used inside a Lightning App Builder page, but it is not available. What change should be applied to the component?",
      options: [
        "A. Expose it in the markup using the implements and access attributes.",
        "B. Look for errors in the logic in the JavaScript controller.",
        "C. Delete the component, metadata, and Apex controller and recreate them.",
        "D. Refresh the sandbox and upgrade it to the latest API version.",
      ],
      answer: "A",
      title: "Question 32",
    },
    {
      content:
        "Which scenario requires a developer to use an Apex callout instead of Outbound Messaging?",
      options: [
        "A. The callout needs to be invoked from a Workflow Rule.",
        "B. The Target system uses a REST API.",
        "C. The Target system uses a SOAP API.",
        "D. The callout needs to be asynchronous.",
      ],
      answer: "B",
      title: "Question 33",
    },
    {
      content:
        "The Salesforce instance at Universal Containers currently integrates with a third-party company to validate mailing addresses via REST services. The third-party address verification system recently changed endpoint URLs for all their set vices from https://th-addreaa-service.3pc.com to https://plc1-mailsarvice.3pc.com. Everything else remained the same. The developer updated code to reflect this endpoint change, but the mailing address validation service stopped working after the change.What else should be done to complete this web service end point change?",
      options: [
        "A. Use a Custom Setting with the new endpoint Instead of hard coding the URL.",
        "B. Test the callout property using HttpCalloutMock.",
        "C. Create a new Remote Site for the new endpoint URL.",
        "D. Add web service IP Addresses to Trusted IP Ranges m the Network Access security controls settings.",
      ],
      answer: "C",
      title: "Question 34",
    },
    {
      content:
        "What is the transaction limit for the number of records using QueryLocator?",
      options: [
        "A. 50,000",
        "B. 50,000,000",
        "C. 100,000",
        "D. 5,000,000",
        "E. There is no limit",
      ],
      answer:
        'B  "Scope" parameter in "executeBatch" can be set up to 2,000 records ',
      title: "Question 35",
    },
    {
      content:
        "What tool in the Developer Console contains information on SOQL query Cardinality?",
      options: [
        "A. Query Plan Tool",
        "B. Checkpoints tab",
        "C. Log Inspector",
        "D. Query Editor",
        "E. View State Tab",
      ],
      answer: "C",
      title: "Question 36",
    },
    {
      content: 'When should you use the "transient" property on variables?',
      options: [
        "A. Static variables that you want transmitted as part of the view state to save space",
        "B. Variables that you want transmitted as part of the view state. Static variables also don't get transmitted",
        "C. Large variables in order to save space",
        "D. Variables that you don't want transmitted as part of the view state. Static variables also don't get transmitted",
      ],
      answer: "D",
      title: "Question 37",
    },
    {
      content:
        "After a Platform Event is defined in a Salesforce org, events can be published via which two mechanisms? Choose 2 answers",
      options: [
        "A. External Apps can use the standard Streaming API.",
        "B. Internal Apps can use Process Builder.",
        "C. External Apps require a custom Apex web service.",
        "D. internal Apps can use Outbound Messages",
      ],
      answer: "B,C",
      title: "Question 38",
    },
    {
      content: "What is the transaction limit on the number of callouts?",
      options: ["A. 200", "B. 50", "C. There is no limit", "D. 150", "E. 100"],
      answer: "B",
      title: "Question 39",
    },
    {
      content:
        "An org has a requirement that the Shipping Address on the Account must be validated by a third-party web service, before the Account is allowed to be inserted.What is the optimal way to meet this requirement?",
      options: [
        "A. Make a callout to the web service from a custom Visualforce controller.",
        "B. Make a callout to the web service from an after insert trigger.",
        "C. Make a callout to the web service from a before insert trigger.",
        "D. Make a callout to the web service from a standard Visualforce controller.",
      ],
      answer: "C",
      title: "Question 40",
    },
    {
      content:
        "A business process requires sending new Account records to an external system. The Account Name, Id, CreatedDate. and CreatedByld must be passed to the external system in near real-time when an Account is Inserted without error.How should a developer achieve this?",
      options: [
        "A. Use a before insert trigger and a Queueable class.",
        "B. Use a Process Builder that calls an @InvocableMethod method.",
        "C. Use a Workflow rule that calls an @InvocableMethod method.",
        "D. Use a before insert trigger and an @future method.",
      ],
      answer: "D",
      title: "Question 41",
    },
    {
      content: "REST uses___________.",
      options: [
        "A. The HTTPResponse class",
        "B. The HTTPRequest class",
        "C. The HTTP class",
        "D. All of the above",
      ],
      answer: "D",
      title: "Question 42",
    },
    {
      content:
        "A developer i$ tasked Dy Unversai Containers to build out a system to track the container repair process. Containers should be tracked as they move through the repair process, starting when a customer reports an issue and ending when the container is returned to the customer.Which solution meets these business requirements while following best practices?",
      options: [
        "A. Use Platform Events with Workflow Rules and RFID integration to ensure proper tracking of the containers.",
        "B. involve a Salesforce administrator and build out a declarative solution that works in Salesforce desktop and mobile.",
        "C. Build an automated Lightning Application using Application Events to ensure data integrity.",
        "D. Use Flow Builder|.to develop a Sites page for customers to submit repair requests and track the status of their request.",
      ],
      answer: "D",
      title: "Question 43",
    },
    {
      content:
        "A company's support process dictates that any time a Case is closed with a Status of 'Could not fix,' an Engineering Review custom object record should be created and populated with information from the Case, the Contact, and any of the Products associated with the Case. What is the correct way to automate this using an Apex trigger?",
      options: [
        "A. A before update trigger that creates the Engineering Review record and inserts it",
        "B. An after upsert trigger that creates the Engineering Review record and inserts it",
        "C. An after update trigger that creates the Engineering Review record and inserts it",
        "D. A before upsert trigger that creates the Engineering Review record and inserts it",
      ],
      answer: "C",
      title: "Question 44",
    },
    {
      content:
        "A large company uses Salesforce across several departments. Each department has its own Salesforce Administrator. It was agreed that each Administrator would have their own sandbox in which to test changes. Recently, users notice that fields that were recently added for one department suddenly disappear without warning. Also, Workflows that once sent emails and created tasks no longer do so. Which two statements are true regarding these issues and resolution? Choose 2 answers",
      options: [
        "A. A sandbox should be created to use as a unified testing environment instead of deploying Change Sets directly to production.",
        "B. The administrators are deploying their own Change Sets, thus deleting each other's fields from the objects in production.",
        "C. The administrators are deploying their own Change Sets over each other, thus replacing entire Page Layouts and Workflows in Production",
        "D. Page Layouts should never be deployed via Change Sets, as this causes Workflows and Field-level Security to be reset and fields to disappear.",
      ],
      answer: "A,C",
      title: "Question 45",
    },
    {
      content:
        "A developer must create a custom pagination solution. While users navigate through pages, if the data is changed from elsewhere, users should still see the cached results first accessed.How can the developer meet these requirements?",
      options: [
        "A. Use @Cache annotation",
        "B. Use OFFSET in SOQL queries",
        "C. Use OFFSET WITH CACHE in SOQL queries",
        "D. Use a StandardSetController",
      ],
      answer: "D",
      title: "Question 46",
    },
    {
      content:
        "Just prior to a new deployment, the Salesforce Administrator who configured a new order fulfillment process in a developer sandbox suddenly left the company. The users had fully tested all of the changes in the sandbox and signed off on them.Unfortunately, although a Change Set was started, it was not complete. A developer is brought in to help finish the deployment.What should the developer do to identify the configuration changes that need to be moved into production?",
      options: [
        "A. In Salesforce setup, look at the last modified date for every object to determine which should be added to the Change Set.",
        "B. Set up Continuous Integration and a Git repository to automatically merge all changes from the sandbox metadata with the production metadata.",
        "C. Leverage the Setup Audit Trail to review the changes made by the departed Administrator and identify which changes should be added to the Change Set.",
        "D. Use the Metadata API and a supported development IDE to push all of the configuration from the sandbox into production to ensure no changes are lost.",
      ],
      answer: "C",
      title: "Question 47",
    },
    {
      content:
        "A company needs to automatically delete sensitive information after 7 years. This could delete almost a million records every day.How can this be achieved?",
      options: [
        "A. Perform a SOSL statement to find records older than 7 years, and then delete the entire result set.",
        "B. Use aggregate functions to query for records older than 7 years, and then delete the AggregateResult objects.",
        "C. Schedule an @future process to Query records older than 7 years, and then recursively invoke itself in 1,000 record batches to delete them.",
        "D. Schedule a batch Apex process to run every day that Queries and deletes records older than 7 years.",
      ],
      answer: "D",
      title: "Question 48",
    },
    {
      content:
        'The Contact object has a custom field called "Zone." Its data type is "Text" and field length is 3. What is the outcome after executing the following code snippet in the org?',
      options: [
        "A. Both inserts succeed and the contact record that has the Zone value of 'PI'IT is set to NULL",
        "B. Both inserts succeed and the contact record that has the Zone value of PITT is truncated",
        "C. An unhandled DML exception is thrown and no contact records are inserted",
        "D. A partial insert succeeds and the contact record that has the Zone value 'IAD1 is inserted",
      ],
      answer: "C",
      title: "Question 49",
    },
    {
      content:
        "A developer wants to call an Apex Server-side Controller from a Lightning Aura Component. What are two limitations to the data being returned by the Controller? Choose 2 answers",
      options: [
        "A. Only Basic data types and sObjects are supported as return types for Apex Controllers called by Lightning Aura Components.",
        "B. A Lists of Custom Apex Classes cannot be returned by Apex Controllers called by Lightning Aura Components.",
        "C. Basic data types are supported, but defaults, such as maximum size for a number, are defined by the objects that they map to.",
        "D. A custom Apex Class can be returned, but only the values of public instance properties and methods annotated with @AuraEnabled are serialized and returned.",
      ],
      answer: "C,D",
      title: "Question 50",
    },
    {
      content:
        "Universal Containers implements a private sharing model for the Convention_Attendence_c custom object. As part of a new quality assurance effort, the company created an Event___Reviewer__c user lookup field on the object. Management wants the event reviewer to automatically gain Read/write access to every record they are assigned to.What is the best approach to ensure the assigned reviewer obtains Read/Write access to the record?",
      options: [
        "A. Create a criteria-based sharing rule on the Convention Attendee custom object to share the records the a group of Event Reviewers.",
        "B. Create an After Insert trigger on the Convention Attendee custom object, and use Apex Sharing Reasons and Apex Managed Sharing.",
        "C. Create a Before Insert trigger on the Convention Attendee custom object, and use Apex Sharing Reasons and Apex Managed Sharing.",
        "D. Create criteria-based sharing rules on the Convention Attendee custom object to share the records with the Event Reviewers.",
      ],
      answer: "C",
      title: "Question 51",
    },
    {
      content:
        "In an organization that has multi-currency enabled, a developer is tasked with building a Lighting Component that displays the top ten Opportunities most recently access by the logged in user. The developer must ensure the Amount and LastModifiedDate field values are displayed according to the user's locale.What is the most effective approach to ensure values displayed respect the users locale settings?",
      options: [
        "A. Use a wrapper class to format the values retrieved via SOQL.",
        "B. Use the FOR VIEW clause in the SOQL Query.",
        "C. Use the FORMAT() function in the SOQL query.",
        "D. Use REGEX expressions to format the values retrieved via SOQL.",
      ],
      answer: "B",
      title: "Question 52",
    },
    {
      content:
        "A developer needs to send Account records to an external system for backup purposes. The process must take a snapshot of Accounts as they are saved and then make a callout to a RESTful web service. The web service can only receive, at most, one record per call. Which feature should be used to implement these requirements?",
      options: [
        "A. workflow",
        "B. Process Builder",
        "C. @future",
        "D. Queueable",
      ],
      answer: "B",
      title: "Question 53",
    },
    {
      content:
        "Consider the following code snippet, depicting an Azure component:Which two interfaces can the developer implement to make the component available as a quick action?Choose 2 answers",
      options: [
        "A. Force:lightningQuicAction",
        "B. Force hasObjectName",
        "C. Lightning QuickActionAPI",
        "D. Force:lightningQuickActionWithoutHeader",
        "E. Force:hasRecordId",
      ],
      answer: "A,B",
      title: "Question 54",
    },
    {
      content: "What is a benefit of using a WSDL with Apex?",
      options: [
        "A. Allows for classes to be imported into Salesforce",
        "B. Allows for web services to be tested and achieve code coverage",
        "C. Enables the user to not pass a Session ID where it is not necessary",
        "D. Reduces the number of callouts to third-party web services",
      ],
      answer: "A",
      title: "Question 55",
    },
    {
      content:
        'The "action" attribute on <apex:page> is ONLY evaluated on which type of request?',
      options: ["A. Get request", "B. Postback request"],
      answer: "A",
      title: "Question 56",
    },
    {
      content:
        "A developer has created a Team Member sObject that has a Master-Detail relationship to a Project sObject and a Lookup relationship to the User sObject. The developer must ensure that a User listed on a Team Member record has Read-Write access to the parent Project record.How can the developer accomplish this if the Project sObject has a Private sharing model and thousands of Project records?",
      options: [
        "A. Create a Controller that uses the Without Sharing keyword",
        "B. Create a Criteria-Based Sharing Rule on the Project sObject",
        "C. Create a Team Member Trigger that inserts Project_Share records",
        "D. Create a Project Sharing Rule that shares to the Team Member Group",
      ],
      answer: "C",
      title: "Question 57",
    },
    {
      content:
        'What is the transaction limit on the number of "sendEmail" method calls?',
      options: ["A. 20", "B. 10", "C. 50", "D. 100", "E. There is no limit"],
      answer:
        "B  The reserveEmailCapacity methods let you declare how many emails you want to send prior to actually sending, allowing you to handle limit errors prematurely ",
      title: "Question 58",
    },
    {
      content:
        'During the Visualforce Page execution, what step follows immediately after "Evaluate constructors on controller and extensions"?',
      options: [
        "A. Send HTML to Browser",
        "B. Create the view state",
        "C. Evaluate constructors, extensions, and expression on attribute definitions on any custom components present",
        "D. Evaluate expressions, <apex:page> attribute actions, and other method calls (getters/setters) on main page",
      ],
      answer: "C",
      title: "Question 59",
    },
    {
      content:
        "What is the optimal syntax for adding a link to a case in a Visualforce page? (Choose two.)",
      options: [
        'A. <apex:outputLink value="!viewCase(case.Id)}" target="_blank">{lease.Name} </apex:outputLink>',
        'B. <apex:outputLink value="/{!case.Id}" target="blank"> {lease.Name}</ apex:outputLink>',
        'C. <apex:outputLink value="{!URLFOR($Action.Case.View,case.Id)}" target="blank">(LIE{!case.Name}</apex:outputLink>',
        'D. <apex:outputLink value="{$URLFOR($Action.Case.Open, case)}" target="blank"> {lease.Name} </apex:outputLink>',
      ],
      answer: "B,C",
      title: "Question 60",
    },
    {
      content:
        "Which of the following standard fields are indexed? (Choose three.)",
      options: [
        "A. LastModifedDdate",
        "B. CreatedBy",
        "C. Name",
        "D. SystemModStamp",
        "E. RecordType",
      ],
      answer: "B,C,D",
      title: "Question 61",
    },
    {
      content:
        "Consider the controller code above that is called from a Lightning component and returns data wrapped in a class.Consider the controller code above that is called from a Lightning component and returns data wrapped in a class.The developer verified that the Queries return a single record each and there is error handing in the Lightning component, but the component is not getting anything back when calling the controller getSomeData().What is wrong?",
      options: [
        "A. The member's Name and Option should not be declared public.",
        "B. The member's Name and Option of the class MyDataWrapper should be annotated with @AuraEnabled too.",
        "C. The member's Name and Option should not have getter and setter.",
        "D. Instances of Apex classes such as MyDataWrapper cannot be returned to a Lightning component.",
      ],
      answer: "B",
      title: "Question 62",
    },
    {
      content:
        "A developer is building a Visualforce page that interacts with external services.Which interface should the developer implement to test this functionality? (Choose two.)",
      options: [
        "A. HTTPResponseMock",
        "B. StaticResourceCalloutMock",
        "C. HTTPCalloutMock",
        "D. HTTPRequestMock",
      ],
      answer: "B,C",
      title: "Question 63",
    },
    {
      content:
        "A developer wrote an Apex class to make several callouts to an external system.If the URLs used in these callouts will change often, which feature should the developer use to minimize changes needed to the Apex class?",
      options: [
        "A. Remote Site Settings",
        "B. Named Credentials",
        "C. Session Id",
        "D. Connected Apps",
      ],
      answer: "B",
      title: "Question 64",
    },
    {
      content:
        "A company represents their customers as Accounts in Salesforce. All customers have a unique Customer_Number__c that is unique across all of the company's systems. They also have a custom Invoice__c object, with a Lookup to Account, to represent invoices that are sent out from their external system. This company wants to integrate invoice data back into Salesforce so Sales Reps can see when a customer is paying their bills on time. What is the optimal way to implement this?",
      options: [
        "A. Use Salesforce Connect and external data objects to seamlessly import the invoice data into Salesforce without custom code.",
        "B. Create a cross-reference table in the custom invoicing system with the Salesforce Account ID of each Customer and insert invoice data nightly.",
        "C. Ensure Customer_Number__c is an External ID and that a custom field Invoice_Number__c is an External ID and Upsert invoice data nightly.",
        "D. Query the Account Object upon each call to insert invoice data to fetch the Salesforce ID corresponding to the Customer Number on the invoice",
      ],
      answer: "C",
      title: "Question 65",
    },
    {
      content:
        "What are the ways a developer can create test data of Contacts? (Choose two.)",
      options: [
        "A. myDataFactory.createContacts(10)",
        "B. Test.loadTestRecords(Contact.sObjectType, 'staticResource')",
        "C. Test.createTestData ()",
        "D. Test.loadData(Contact.sObjectType, 'staticResource')",
      ],
      answer: "A,D",
      title: "Question 66",
    },
    {
      content:
        "An org has a requirement that an Account must always have one and only one Contact listed as Primary. So selecting one Contact will de-select any others. The client wants a checkbox on the Contact called 'Is Primary' to control this feature. The client also wants to ensure that the last name of every Contact is stored entirely in uppercase characters. What is the optimal way to implement these requirements?",
      options: [
        "A. Write an after update trigger on Contact for the Is Primary logic and a separate before update trigger on Contact for the last name logic.",
        "B. write a single trigger on Contact for both after update and before update and callout to helper classes to handle each set of logic.",
        "C. write a Validation Rule on the Contact for the Is Primary logic and a before update trigger on Contact for the last name logic.",
        "D. write an after update trigger on Account for the Is Primary logic and a before update trigger on Contact for the last name logic.",
      ],
      answer: "B",
      title: "Question 67",
    },
    {
      content:
        "What is the transaction limit on the max timeout for all callouts?",
      options: [
        "A. 120 seconds (synchronous); 200 seconds (async)",
        "B. 60 seconds",
        "C. 60 seconds (synchronous); 200 seconds (async",
        "D. There is no limit",
        "E. 120 seconds",
      ],
      answer: "E",
      title: "Question 68",
    },
    {
      content:
        "A company has a native iOS app for placing orders that needs to connect to Salesforce to retrieve consolidated information from many different objects in a JSON format. Which is the optimal method to implement this in Salesforce?",
      options: [
        "A. Apex SOAP Web Service",
        "B. Apex SOAP Callout",
        "C. Apex REST Callout",
        "D. Apex REST Web Service",
      ],
      answer: "D",
      title: "Question 69",
    },
    {
      content:
        "A developer has created a Visualforce page that uses a third-party JavaScript framework. The developer has decided to supply data to the JavaScript functions using JavaScript Remoting for Apex Controllers.What is the correct syntax to declare a remote method in Apex? (Choose two.)",
      options: [
        "A. @RemoteAction public static String getTable()",
        "B. @RemoteObject global static String getTableQ",
        "C. @RemoteAction global static String getTable()",
        "D. @RemoteAction global String getTable()",
      ],
      answer: "A,C",
      title: "Question 70",
    },
    {
      content:
        "The test method above calls an @future method that increments the Number_of_Times_Viewed__c value. The assertion is failing because the Number_of_Times_Viewed__c equals 0. What is the optimal way to fix this?",
      options: [
        "A. Add Test.startTest() before and Test.stopTest() after insert acct",
        "B. Change the initialization to acct.Number_Of_Times_Viewed__c = 1.",
        "C. Change the assertion to System.assertEquals(0, acctAfter.Number_Of_Times_Viewed__c).",
        "D. Add Test.startTest() before and Test.stopTest() after AuditUtil.incrementViewed.",
      ],
      answer: "D",
      title: "Question 71",
    },
    {
      content:
        "@isTest static void testAccountUpdate() { Account acct = new Account({Name = 'Test'); acct.Integration Updated_c = false; insert acct; CalloutUtil.sendAccountUpdate (acct.Id); Account acctAfter = [SELECT Id, Integration Updated_c FROM Account WHERE Id = :acct.Id] [0]; System.assert(true, acctAfter.Integration_Updated_c); } The test method above calls a web service that updates an external system with Account information and sets the Account's Integration_Updated__c checkbox to True when it completes. The test fails to execute and exits with an error: \"Methods defined as TestMethod do not support Web service callouts.\" What is the optimal way to fix this?",
      options: [
        "A. Add Test.startTest() before and Test.setMock and Test.stopTest() after CalloutUtil.sendAccountUpdate.",
        "B. Add if (!Test.isRunningTest()) around CalloutUtil.sendAccountUpdate.",
        "C. Add Test.startTest() before and Test.stopTest() after CalloutUtil.sendAccountUpdate.",
        "D. Add Test.startTest() and Test.setMock before and Test.stopTest() after CalloutUtil.sendAccountUpdate.",
      ],
      answer: "C",
      title: "Question 72",
    },
    {
      content:
        "A developer Is asked to develop a new AppExthange application. A feature of the program creates Survey records when a Case reaches a certain stage and Is of a certain Record Type. This feature needs to be configurable, as different Salesforce instances require Surveys at different times. Additionally, the out-of-the-box AppExchange app needs to come with a set of best practice settings that apply to most customers.What should the developer use to store and package the custom configuration settings for the app?",
      options: [
        "A. Custom Objects",
        "B. Process Builder",
        "C. Custom Metadata",
        "D. Custom Settings",
      ],
      answer: "A",
      title: "Question 73",
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
      title: "Question 74",
    },
    {
      content:
        "A developer built a Component to be used at the front desk for guests to self-register upon arrival at a kiosk. The developer is now asked to create a Component for the Utility Tray to alert Users whenever a guest has arrived at the front desk. What should be used?",
      options: [
        "A. Changelog",
        "B. Application Event",
        "C. Component Event",
        "D. DML Operation",
      ],
      answer: "B",
      title: "Question 75",
    },
    {
      content:
        "A company has a Request__c object that has a lookup to the Opportunity object and a custom field. Status__c, with values of Open,' Closed, and Invalid.' An Opportunity should not be allowed to be deleted if there are any Request__c records related to it that have a Status__c value of Open or 'Closed.' what is the optimal way to enforce the requirement to prevent deletion?",
      options: [
        "A. A Process on Request__c",
        "B. An Apex Trigger on Request__c",
        "C. An Apex Trigger on Opportunity",
        "D. A Process on Opportunity",
      ],
      answer: "C",
      title: "Question 76",
    },
    {
      content:
        "A developer has built a multi-page wizard using a single Custom Controller to query and update dat a. Users are complaining that the pages are loading slowly.What will improve performance? (Choose three.)",
      options: [
        "A. Turning off the standard stylesheet",
        "B. Using selective queries",
        "C. Reducing the view state",
        "D. Using actionRegion and rerender",
        "E. Setting the Apex Page attribute cache=true",
      ],
      answer: "B,C,E",
      title: "Question 77",
    },
    {
      content:
        "A company uses Opportunism to track sales to their customers and their org has millions of Opportunities. They want to begging to track revenue over time through a related Revenue object.As part of their initial implementation, they want to perform a one-time seeding of their data by automatically creating and populating Revenue records for Opportunities, based on complex logic. They estimate that roughly 100,000 Opportunities will have revenue records and populated.What is the optimal way to automate this?",
      options: [
        "A. Use System.enqueueJob>() to Invoke a Queueable class.",
        "B. Use Database.executeBatch() to invoke a Queueable dass.",
        "C. Use System.scheduleJob() to schedule a Database.Scheduleable class.",
        "D. Use Database.txtcuteBatch() to invoke a Database.Batchable class.",
      ],
      answer: "C",
      title: "Question 78",
    },
    {
      content:
        "A company decides that every time an Opportunity is created, they want to create a follow up Task and assign it to the Opportunity Owner.What should a developer use to implement the requirements?",
      options: [
        "A. A Process Builder on Task",
        "B. A Process Builder on Opportunity",
        "C. A trigger on Opportunity",
        "D. A trigger on Task",
      ],
      answer: "B",
      title: "Question 79",
    },
    {
      content:
        "Universal Containers needs to integrate with a Heroku service that resizes product images submitted by users.What are two alternatives to implement the integration and protect against malicious calls to Heroku app's endpoint? Choose 2 answers",
      options: [
        "A. Create a trigger that uses an @future Apex HTTP callout passing JSON serialized data; therefore the Heroku app can automatically reply back to the callout with the resized images in Salesforce.",
        "B. Create a Workflow Rule with an Outbound Message allowing the Heroku app to automatically store the resized images in Salesforce.",
        "C. Create a Workflow Rule with an Outbound Message and select Send Session ID so that the Heroku app can use it to send the resized images back to Salesforce.",
        "D. Create a trigger that uses an @future Apex HTTP callout passing JSON serialized data and some form of pre-shared secret key. so that the Heroku app can authenticate requests and store the resized images in Salesforce.",
      ],
      answer: "B,C",
      title: "Question 80",
    },
    {
      content:
        "A company has a custom object Sales_Help_Request__c that has a Lookup relationship to Opportunity. The Sales_Help_Request__c has a number field, Number_of_Hours__c, that represents the amount of time spent on the Sales_Help_Request__c.A developer is tasked with creating a field, Total_Hours__c, on Opportunity that should be the sum of all of the Number_of_Hours__c values for the Sales_Help_Request__c records related to that Opportunity.What should the developer use to implement this?",
      options: [
        "A. A trigger on the Opportunity object",
        "B. A roll-up summary field on the Opportunity object",
        "C. A trigger on Sales_Help_Request__c",
        "D. A workflow rule on the Sales_Help_Request__c object",
      ],
      answer: "C",
      title: "Question 81",
    },
    {
      content:
        "Universal Containers wants to be able to bring up an Account detail page and view a table of containers currently being rented. The user wants to be able to dick on a container In the table and quickly edit and save the location of the container.In addition to this, the page should have a section that shows the location of each container on a map. Universal Containers wants the map to re-render whenever the location of a container is changed.What can a developer use to accomplish this task?",
      options: [
        "A. Two Visualforce Page Components leveraging Application Events",
        "B. Two Lightning Components leveraging Application Events",
        "C. A single visualforce Page leveraging Platform Events",
        "D. Two Lightning Components leveraging Platform Events",
      ],
      answer: "B",
      title: "Question 82",
    },
    {
      content:
        "What can be done to improve the performance of the insert trigger shown above?",
      options: ["A. ", "B. ", "C. ", "D. "],
      answer: "C",
      title: "Question 83",
    },
    {
      content:
        "A Lightning Component has a section that displays some information about an Account and it works well on the desktop, but users have to scroll horizontally to see the Description field output on their mobile devices and tablets.Which option has the changes to make the component responsive for mobile and tablet devices?",
      options: ["A. ", "B. ", "C. ", "D. "],
      answer: "D",
      title: "Question 84",
    },
    {
      content:
        "As part of a custom development, a developer creates a Lightning Component to show how a particular opportunity progresses over time. The component must display the date stamp when any of the following fields change:* Amount Probability, Stage, or Close DateWhat is the most efficient way to Query such information?",
      options: [
        "A. [Select NewValue, Oldvalue FROM Opportunity FieldHistory WHERE Opportunityld = :oppId AND Field IN",
        "B. [Select Amount, CloseDate, StageName, Probability FROM OpportunityHistory WHERE Opportunityld = :oppId];",
        "C. [Select Newvalue, Oldvalue From OpportunityField_History Where Oppportunity = oppid AND Field IN",
        "D. ('StageName', Probability',Amount /CloseDate')];",
        "E. [Select Amount CloseDate. StageName, Probability FROM Opportunity_History WHERE Opportunityld - :oppId];",
      ],
      answer: "A",
      title: "Question 85",
    },
    {
      content:
        "Consider the following queries. For these queries, assume that there are more than 200,000 Account records. These records include soft-deleted records; that is, deleted records that are still in the Recycle Bin. Note that there are two fields that are marked as External Id on the Account. These fields are Customer_Number__c and ERP_Key__c.Which two queries are optimized for large data volumes? Choose 2 answers",
      options: [
        "A. SELECT Id FROM Account WHERE Name != NULL",
        "B. SELECT Id FROM Account WHERE Name != ' ' AND Customer Number c = 'ValueA'",
        "C. SELECT Id FROM Account WHERE Name != ' ' AND IsDeleted = false",
        "D. SELECT Id FROM Account WHERE Id IN : aListVariable",
      ],
      answer: "B,D",
      title: "Question 86",
    },
    {
      content: "Code must have X% overall code coverage.",
      options: ["A. X= 100", "B. X = 75", "C. X = 50", "D. X = 65"],
      answer: "B",
      title: "Question 87",
    },
    {
      content:
        "Which statement is true about using ConnectApi namespace (also called Chatter in Apex)? (Choose two.)",
      options: [
        "A. Chatter in Apex methods honor the 'with sharing' and 'without sharing' keywords",
        "B. Chatter in Apex methods do not run in system mode; they run in the context of the current user",
        "C. Many test methods related to Chatter in Apex require the IsTest (SeeAIIData=true) annotation",
        "D. Chatter in Apex operations are synchronous, and they occur immediately",
      ],
      answer: "B,C",
      title: "Question 88",
    },
    {
      content:
        "A developer encounters an error that states that the Apex heap size is exceeded. Which technique may reduce heap size?",
      options: [
        "A. Use SOQL for loops instead of standard SOQL queries",
        "B. Use static variables instead of instance variables",
        "C. Move the variable definition inside the scope of the function",
        "D. Add the transient keyword to the variable definition",
      ],
      answer: "A",
      title: "Question 89",
    },
    {
      content: "What is the transaction limit for SOQL queries?",
      options: [
        "A. 200 (synchronous), 100 (async)",
        "B. 150 (synchronous), 200 (async)",
        "C. 20 (synchronous), 200 (async)",
        "D. 100 (synchronous), 200 (async)",
        "E. 150 (synchronous), 20 (async)",
      ],
      answer: "D",
      title: "Question 90",
    },
    {
      content:
        "An org has a requirement that addresses on Contacts and Accounts should be normalized to a company standard by Apex code any time that they are saved.What is the optimal way to implement this?",
      options: [
        "A. Apex trigger on Account that and Account that normalized the address",
        "B. Apex trigger on Account and Account that call a helper class to normalize the address",
        "C. Apex trigger on Account that calls the Contact trigger to normalize the address",
        "D. Apex trigger on Contact that calls the Account trigger to normalize the address",
      ],
      answer: "B",
      title: "Question 91",
    },
    {
      content:
        "A developer gets an error saying 'Maximum Trigger Depth Exceeded.' What is a possible reason to get this error message?",
      options: [
        "A. The SOQL governor limits are being hit.",
        "B. A Process Builder is running that sends mass emails.",
        "C. Trigger is recursively invoked more than 16 times.",
        "D. There are numerous DML operations in the trigger logic.",
      ],
      answer: "C",
      title: "Question 92",
    },
    {
      content:
        "A managed package uses a list of country ISO codes and country names as references data in many different places.. managed package Apex code.What is the optimal way to store and retrieve the list?",
      options: [
        "A. Store the information in a List Custom Setting and query it with SOQL.",
        "B. Store the information in a list Custom Setting and access it with the getAll() method",
        "C. Store the information in Custom Metadata and access it with the getAll() method.",
        "D. Store the information in Custom Metadata and query it with SOQL.",
      ],
      answer: "A",
      title: "Question 93",
    },
    {
      content:
        "What are three benefits of using declarative customizations over code? Choose 3 answers",
      options: [
        "A. Declarative customizations are not subject to governor limits.",
        "B. Declarative customizations generally require less maintenance.",
        "C. Declarative customizations do not require user testing.",
        "D. Declarative customizations will automatically update with each Salesforce release.",
        "E. Declarative customizations cannot generate run time errors.",
      ],
      answer: "A,C,D",
      title: "Question 94",
    },
    {
      content:
        "A developer writes the following code:While testing the code, the developer receives the following error message: System.CalloutException : You have uncommitted work pending What should the developer do? (Choose two.)",
      options: [
        "A. Move the web service callout into an @future method",
        "B. Use the asyncSend() method of the HTTP class to send the request in async context",
        "C. Ensure all callouts are completed prior to executing DML statements",
        "D. Use Database.insert (order, true) to immediately commit any database changes",
      ],
      answer: "A,C",
      title: "Question 95",
    },
    {
      content:
        "A developer has written an After Update trigger on Account. A workflow rule and field update cause the trigger to repeatedly update the Account records.How should the developer handle the recursive trigger?",
      options: [
        "A. Use a global variable to prevent the trigger from executing more than once",
        "B. Deactivate the trigger and move the logic into a Process or Flow",
        "C. Deactivate the workflow rule to prevent the field update from executing",
        "D. Use a static variable to prevent the trigger from executing more than once",
      ],
      answer: "D",
      title: "Question 96",
    },
    {
      content:
        "Business rules require a Contact to always be created when a new Account is created. What can be used when developing a custom screen to ensure an Account is not created if the creation of the Contact fails?",
      options: [
        "A. Disable validation rules on Contacts and set default values with a Trigger.",
        "B. use the Database.Delete method if the Contact insertion fails.",
        "C. use setSavePoint() and rollback() with a try/catch block.",
        "D. use the Database.Insert method with allOrNone set to False.",
      ],
      answer: "C",
      title: "Question 97",
    },
    {
      content:
        "Universal Containers allows customers to log into a Salesforce Community and update their orders via a custom Visualforce page. Universal Containers' sales representatives can edit the orders on the same Visualforce page.What should a developer use in an Apex test class to test that record sharing is enforced on the Visualforce page?",
      options: [
        "A. Use System.runAs() to test as a sales rep and a community user.",
        "B. Use System.profllels() to test as an administrator and a community user,",
        "C. Use System.profilels() to test as a sales rep and a community user.",
        "D. Use System.runAs() to test as an administrator and a community user.",
      ],
      answer: "A",
      title: "Question 98",
    },
    {
      content:
        "A developer must create a custom pagination solution for accessing approximately 2000 records and displaying 50 records on each page. Data from Salesforce will be accessed via an API and not via Apex.How can the developer meet these requirements? (Choose two.)",
      options: [
        "A. Use a StandardSetController",
        "B. Use CURSOR 50 in SOQL queries",
        "C. Use OFFSET in SOQL queries",
        "D. Use LIMIT 50 in SOQL queries",
      ],
      answer: "C,D",
      title: "Question 99",
    },
  ],
});
