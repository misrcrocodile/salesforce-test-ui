window.testContent = window.testContent || [];
var testId = "Salesforce.Platform-Developer-II";
var testName = "Salesforce.Platform-Developer-II";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "Salesforce.Platform-Developer-II.v2021-11-15.q113",
  content: [
    {
      content:
        "An org contains two custom objects; Building__c and Office__c. Office__c has a Lookup field to Building__c.A developer is asked to automatically populate the Number_of_Offices__c field on the Building__c object with the count of related Office__c records anytime an Office__c record s created or deleted. The developer cannot modify the field types. Which solution meets the requirements?",
      options: [
        "A. Workflow",
        "B. Apex Trigger",
        "C. Flow",
        "D. Process Builder",
      ],
      answer: "B",
      title: "Question 1",
    },
    {
      content:
        "A developer is working on code that requires a call to an external web service from a batch. How should the developer enable this functionality?",
      options: [
        "A. Implement a custom System.CalloutException class",
        'B. Specify "callout=true" in the batch implementation',
        "C. Include Database.AllowCallout() in the class definition",
        "D. Implement an @future method for the callout, and invoke it from the batch",
      ],
      answer: "C",
      title: "Question 2",
    },
    {
      content:
        "An integration user makes a successful login() call via the SOAP API. What can be used in the SOAP header to provide server authorization for subsequent API requests?",
      options: [
        "A. Security token",
        "B. OAuth access token",
        "C. Named Credentials",
        "D. Session ID",
      ],
      answer: "D",
      title: "Question 3",
    },
    {
      content:
        "Part of a custom Lightning Component displays the total number of Opportunities in the org, which is in the millions. The Lightning Component uses an Apex Controller to get the data it needs. What is the optimal way for a developer to get the total number of Opportunities for the Lightning Component?",
      options: [
        "A. COUNT() SOQL aggregate query on the Opportunity object",
        "B. Apex Batch job that counts the number of Opportunity records",
        "C. SOQL for loop that counts the number of Opportunities records",
        "D. SUM() SOQL aggregate query on the Opportunity object",
      ],
      answer: "A",
      title: "Question 4",
    },
    {
      content:
        "A developer needs to create a Lightning page for entering Order Information. An error message should be displayed if the zip code entered as part of the Order's shipping address is not numeric. What is a recommended way for the error message be displayed to the end user?",
      options: [
        "A. Use the aura:component tag to display errors",
        "B. Use the uhoutputText tag to display errors",
        "C. Use the uhinputDefaultError tag to display errors",
        "D. Use the apex:message tag to display errors",
      ],
      answer: "C",
      title: "Question 5",
    },
    {
      content:
        "Within the System.Limit class, what would you call to get the number of calls made in your transaction?",
      options: [
        "A. getLimit [typeOf Limit] -> (Ex. getLirr.it DXLSt at err.ents () )",
        "B. get [typeOfLimit] -> (Ex. getDXLStaterr.ents () )",
      ],
      answer: "B",
      title: "Question 6",
    },
    {
      content:
        "Which statement is true regarding both Flow and Lightning Process? (Choose two.)",
      options: [
        "A. Are both server-side considerations in the Order of Execution",
        "B. Can use Apex methods with the @lnvocableMethod annotation",
        "C. Are able to be embedded directly into Visualforce pages",
        "D. Can use Apex that implements the Process.Plugin interface",
      ],
      answer: "B,D",
      title: "Question 7",
    },
    {
      content:
        'Salesforce users consistently receive a "Maximum trigger depth exceeded" error when saving m Account. How can a developer fix this error?',
      options: [
        "A. Use a helper class to set a Boolean to TRUE the first time a trigger is fired, and then; modify the trigger to only fire when modify the trigger to only fire when the Boolean is FALSE.",
        "B. Convert trigger to use the future annotation, and chain any subsequent trigger invocations to the Account object.",
        "C. Modify the trigger to use the isMultiThread=true annotation.",
        "D. Split the trigger logic into two separate triggers.",
      ],
      answer: "A",
      title: "Question 8",
    },
    {
      content:
        "Line 1 public class AttributeTypes Line 2 { Line 3 private final String[] arrayItems; Line 4 Line 5@AuraEnabled Line 6 public List<String> getStringArray() { Line 7 Strings+ arrayItems = new String*+,'red', 'green', 'blue' -; Line 8 return arrayItems; Line 9 } Line 10 } Consider the Apex controller above that is called from a Lightning Aura Component. What is wrong with it?",
      options: [
        "A. Line 1: class must be global",
        "B. Line 8: method must first serialize the list to JSON before returning",
        "C. Lines 1 and 6: class and method must be global",
        "D. Line 6: method must be static",
      ],
      answer: "D",
      title: "Question 9",
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
      title: "Question 10",
    },
    {
      content:
        "A company represents their customers as Accounts that have an External ID field called Customer_Number__c. They have a custom Order (Order__c) object, with a Lookup to Account, to represent Orders that are placed in their external order management system (OMS). When an order is fulfilled in the OMS, a REST call to Salesforce should be made that creates an Order record in Salesforce and retates it to the proper Account. What is the optimal way to implement this?",
      options: [
        "A. Perform a REST POST to update the Order__c and specify the Account's Customer_Number__c in it.",
        "B. Perform a REST GET on the Account and a REST PATCH to upsert the Order__c with the Accounts record ID.",
        "C. Perform a REST PATCH to upsert the Order__c and specify the Account's Customer_Number__c in it.",
        "D. Perform a REST GET on the Account and a REST POST to update the Order__c with the Account's record ID.",
      ],
      answer: "C",
      title: "Question 11",
    },
    {
      content:
        "Consider the controller code above that is called from a Lightning component and returns data wrapped in a class.Consider the controller code above that is called from a Lightning component and returns data wrapped in a class. The developer verified that the Queries return a single record each and there is error handing in the Lightning component, but the component is not getting anything back when calling the controller getSomeData(). What is wrong?",
      options: [
        "A. Instances of Apex classes such as MyDataWrapper cannot be returned to a Lightning component.",
        "B. The member's Name and Option should not have getter and setter.",
        "C. The member's Name and Option of the class MyDataWrapper should be annotated with @AuraEnabled too.",
        "D. The member's Name and Option should not be declared public.",
      ],
      answer: "C",
      title: "Question 12",
    },
    {
      content:
        "Recently a Salesforce org's integration failed because it exceeded the number of allowed API calls in a24-hour period. The integration handles a near real-time, complex insertion of data into Salesforce. The flow of data is as follows: The integration looks up Contact records with a given email address and, if found, the integration adds a Task to the first matching Contact it finds. If a match is not found, the integration looks up Lead records with a given email address and, if found, the integration adds a Task to the first matching Lead it finds. If a match is not found, the integration will create a Lead and a Task for that newly created Lead. What is one way in which the integration can stay near real-time, but not exceed the number of allowed API calls in a 24-hour period?",
      options: [
        "A. Create an Inbound Message that, using Flow, can do all of the logic the integration code was doing.",
        "B. Create several Apex InboundEmailHandlers to accept calls from the third-party system, thus bypassing the API limits.",
        "C. Use the REST API as well as the SOAP API to effectively double the API calls allowed in a 24-hour period.",
        "D. write a custom Apex web service that, given an email address, does all of the logic the integration code was doing.",
      ],
      answer: "B",
      title: "Question 13",
    },
    {
      content:
        "A developer wants to retrieve and deploy metadata, perform simple CSV export of query results, and debug Apex REST calls by viewing JSON responses. Which tool should the developer use?",
      options: [
        "A. Workbench",
        "B. Developer Console",
        "C. Force.com IDE",
        "D. Force.com Migration Tool",
      ],
      answer: "A",
      title: "Question 14",
    },
    {
      content:
        "A company has a web page that needs to get Account record information, given its Salesforce record ID, from JavaScript on the page and then display it. Which method of integration is optimal?",
      options: [
        "A. Apex SOAP Web Service",
        "B. Apex REST Web Service",
        "C. SOAP API",
        "D. REST API",
      ],
      answer: "B",
      title: "Question 15",
    },
    {
      content:
        "Business rules require a Contact to always be created when a new Account is created. What can be used when developing a custom screen to ensure an Account is not created if the creation of the Contact fails?",
      options: [
        "A. use the Database.Insert method with allOrNone set to False.",
        "B. Disable validation rules on Contacts and set default values with a Trigger.",
        "C. use setSavePoint() and rollback() with a try/catch block.",
        "D. use the Database.Delete method if the Contact insertion fails.",
      ],
      answer: "C",
      title: "Question 16",
    },
    {
      content:
        "Given the following containment hierarchy:What is the correct way to communicate the new value of a property named ''passthrough'' to my-parent component if the property is defined within my-child-component?A)B)C)D)",
      options: ["A. Option D", "B. Option A", "C. Option C", "D. Option B"],
      answer: "D",
      title: "Question 17",
    },
    {
      content:
        "A developer has generated Apex code from a WSDL for an external web service. The web service requires Basic authentication. What code should the developer use to authenticate?",
      options: [
        "A. stub.authentication.put ('Authorization','Basic QthZGprjpchVulHNchFtZQ')",
        "B. Http.setAuthentication('Basic QthZGprjpchVulHNchFtZQ')",
        "C. Http.setHeader ('Authorization' , 'Basic QthZGprjpchVulHNchFtZQ!)",
        "D. stub.inputHttpHeaders_x.put('Authorization' , 'Basic QthZGprJpchVulHNchFtZQ')",
      ],
      answer: "D",
      title: "Question 18",
    },
    {
      content:
        '<lightning: layout multipleRows="true"> <lightning: layoutItem size="12">{!v.account.Name} </flighting:layoutitem> <lightning:layoutitem 3ize="12">{!v. account .AccountNumber} </lighting: layoutitem><lightning: layoutitem size="12">{!v.account. Industry} </lighting: layoutitem> </lightning: layout> Refer to the component code above. The information displays as expected (in three rows) on a mobile device. However, the information is not displaying as desired (in a single row) on a desktop or tablet. Which option has the correct component changes to display correctly on desktops and tablets?',
      options: ["A. ", "B. ", "C. ", "D. "],
      answer: "D",
      title: "Question 19",
    },
    {
      content: "What is the transaction limit on the max Salesforce CPU time?",
      options: [
        "A. 10 seconds (synchronous); 60 seconds (async)",
        "B. 100 seconds",
        "C. There is no limit",
        "D. 60 seconds",
        "E. 100 seconds (synchronous); 200 seconds (async)",
      ],
      answer: "A",
      title: "Question 20",
    },
    {
      content:
        "In a VisualForce page with a VisualForce component that has rendered set to false when the page loads, how can a developer ensure it will show on a re-render?",
      options: [
        "A. Set the re-render attribute of the component to true.",
        "B. Set the rendered attribute of the component to true and re-render the component.",
        "C. Set the rendered attribute of the component to true and re-render a parent component.",
        "D. Perform a full page refresh since rendered elements cannot be re-rendered without refreshing.",
      ],
      answer: "C",
      title: "Question 21",
    },
    {
      content:
        "When calling a RESTful web service, a developer receives a JSON payload that has a data hierarchy that is nested three levels deep. How can the developer describe the external data?",
      options: [
        "A. Declare a class with three levels and deserialize the JSON typed with this class.",
        "B. Deserialize the data untyped and then process it.",
        "C. Use the ANT migration tool, the custom metadata API, or the Dataloader.",
        "D. Use middleware to flatten the JSON and consume it as a new custom object.",
      ],
      answer: "B",
      title: "Question 22",
    },
    {
      content:
        "A Lightning web component exists in the system and displays information about the record in context as a modal. Salesforce administrators need to use this component within the Lightning App Builder. Which two settings should the developer configure within the xml resource file? Choose 2 answers",
      options: [
        "A. Set the IsExposed attribute to True.",
        "B. Specify the target to be lightning__AppPage.",
        "C. Set the IsVisible attribute to True.",
        "D. Specify the target to be lightning__RecordPage.",
      ],
      answer: "A,D",
      title: "Question 23",
    },
    {
      content:
        "A developer is integrated with a legacy on-premises SQL database. What should the developer use to ensure the data being integrated is matched to the right records in Salesforce?",
      options: [
        "A. External Object",
        "B. External Id field",
        "C. Formula field",
        "D. Lookup field",
      ],
      answer: "B",
      title: "Question 24",
    },
    {
      content:
        "A developer is creating unit tests for code that makes SOAP web service callouts. The developer needs to insert some test data as a part of the unit tests setup. What are three actions to enable this functionality? (Choose three.)",
      options: [
        "A. Surround the callout with TeststartTest(), Test.stopTest()",
        "B. Update code to call Test.setMock()",
        "C. Surround the data insertion with Test.startTest(), Test.stopTest()",
        "D. Implement the WebServiceMock interface",
        "E. Implement the HttpCalloutMock interface",
      ],
      answer: "A,B,D",
      title: "Question 25",
    },
    {
      content:
        "How can a developer efficiently incorporate multiple JavaScript libraries, such as JQuery and MomenUS, in a Lightning Component?",
      options: [
        "A. Implement the libraries in separate helper files.",
        "B. Use CONs with script attributes",
        "C. Use JavaScript remoting and script tags.",
        "D. Join multiple assets from a static resource.",
      ],
      answer: "D",
      title: "Question 26",
    },
    {
      content:
        "Which type of controller is best suited when you want to add custom functionality to a standard controller page, or when you want reusable functionality throughout pages?",
      options: [
        "A. Standard Controller",
        "B. Standard List/Set Controller",
        "C. Controller Extensions",
        "D. Custom Controller",
      ],
      answer: "C",
      title: "Question 27",
    },
    {
      content:
        "An Apex trigger and Apex class increment a counter, Edit_Count_c, any time that the Case is changed.A new process on the case object was just created in production for when a Case is created or updated< since the process was created, they are reports that the Count is being incremented by more than one on Case edit. Which change in the Apex code will fix the problem?A)B)C)D)",
      options: ["A. Option D", "B. Option A", "C. Option B", "D. Option C"],
      answer: "B",
      title: "Question 28",
    },
    {
      content:
        "An Apex class does not achieve expected code coverage. The testSetup method explicitly calls a method in the Apex class. How can the developer generate the code coverage?",
      options: [
        "A. Use system.assert() in testSetup to verify the values are being returned.",
        "B. Verify the user has permissions passing a user into System.runAs().",
        "C. Add @testVisible to the method in the class the developer is testing.",
        "D. Call the Apex class method from a testMethod instead of the testSetup method.",
      ],
      answer: "D",
      title: "Question 29",
    },
    {
      content:
        "A company's support process dictates that any time a Case is closed with a Status of 'Could not fix,' an Engineering Review custom object record should be created and populated with information from the Case, the Contact, and any of the Products associated with the Case. What is the correct way to automate this using an Apex trigger?",
      options: [
        "A. A before update trigger that creates the Engineering Review record and inserts it",
        "B. A before update trigger that creates the Engineering Review record and inserts it ",
        "C. An after upsert trigger that creates the Engineering Review record and inserts it",
        "D. An after update trigger that creates the Engineering Review record and inserts it",
      ],
      answer: "A",
      title: "Question 30",
    },
    {
      content:
        "A developer needs to send Account records to an external system for backup purposes. The process must take a snapshot of Accounts as they are saved and then make a callout to a RESTful web service. The web service can only receive, at most, one record per call. Which feature should be used to implement these requirements?",
      options: [
        "A. Queueable",
        "B. workflow",
        "C. @future",
        "D. Process Builder",
      ],
      answer: "D",
      title: "Question 31",
    },
    {
      content:
        "A customer requires that when the billing address field on an Account gets updated, the address field on all its related contact records should reflect the same update. How can this requirement be met with minimal customizations?",
      options: [
        "A. Create an After Trigger on Account to upd|ate its related contact records on update",
        "B. Create a Workflow Rule on Account to update related child Contact records",
        "C. Create a scheduled batch job that updates all contact address fields based on the related account record.",
        "D. Create a Lightning Process on Account to update related child Contact records",
      ],
      answer: "D",
      title: "Question 32",
    },
    {
      content:
        "A customer has a single Visualforce page that allows each user to input up to 1500 sales forecasts and instantly view pivoted forecast calculations. Users are complaining that the page is loading slowly, and they are seeing error messages regarding heap and view state limits. What are three recommendations to optimize page performance? (Choose three.)",
      options: [
        "A. Create formula fields to compute pivoted forecast calculations",
        "B. Use JavaScript Remoting instead of controller actions",
        "C. Specify the list of sales forecasts as transient",
        "D. Segregate calculation functionality from input functionality",
        "E. Implement pagination and reduce records per page",
      ],
      answer: "B,D,E",
      title: "Question 33",
    },
    {
      content: "What is a potential design issue with the following code?",
      options: [
        "A. The code will result in a System.DmException:Entity_is_Deleted error",
        "B. SOQL could be avoided by creating a formula field for StageName in Account from the related Opportunity",
        "C. The code will result in a System.LimitException : Too many script statements error",
        "D. The code will result in a System.LimitException: Apex CPU time limit exceeded error",
      ],
      answer: "D",
      title: "Question 34",
    },
    {
      content:
        "Which are relevant practices while analyzing the timeline of different types of transactions in the execution overview panel? (Choose two.)",
      options: [
        "A. The performance tree should be use to analyze events further starting from the one that take the least amount of time",
        "B. Multiple short bursts of Apex events should be analyzed since they can add up to a significant amount of time",
        "C. Log lines in the execution log panel can be analyzed for details about specific events",
        "D. The execution tree can be used with the execution log to filter and get specific information about events",
      ],
      answer: "B,C",
      title: "Question 35",
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
      title: "Question 36",
    },
    {
      content:
        "Universal Containers needs to integrate with a Heroku service that resizes product images submitted by users. What are two alternatives to implement the integration and protect against malicious calls to Heroku app's endpoint? Choose 2 answers",
      options: [
        "A. Create a trigger that uses an @future Apex HTTP callout passing JSON serialized data and some form of pre-shared secret key. so that the Heroku app can authenticate requests and store the resized images in Salesforce.",
        "B. Create a Workflow Rule with an Outbound Message and select Send Session ID so that the Heroku app can use it to send the resized images back to Salesforce.",
        "C. Create a trigger that uses an @future Apex HTTP callout passing JSON serialized data; therefore the Heroku app can automatically reply back to the callout with the resized images in Salesforce.",
        "D. Create a Workflow Rule with an Outbound Message allowing the Heroku app to automatically store the resized images in Salesforce.",
      ],
      answer: "B,D",
      title: "Question 37",
    },
    {
      content:
        "A developer has been asked to create code that will meet the following requirements:Receives input of: Map<ld, Project_c), List<Account>Performs a potentially long-running callout to an outside web serviceProvides a way to confirm that the process executed successfullyWhich asynchronous feature should be used?",
      options: [
        "A. Schedulable interface",
        "B. Database.AllowCallouts interface",
        "C. future (callout=true)",
        "D. Queueable interface",
      ],
      answer: "D",
      title: "Question 38",
    },
    {
      content:
        "What level can a hierarchy custom setting be defined for? (Choose three.)",
      options: [
        "A. Roles",
        "B. Organization",
        "C. Groups",
        "D. Profiles",
        "E. Users",
      ],
      answer: "B,D,E",
      title: "Question 39",
    },
    {
      content:
        "Consider the code above.When a user dicks on the Link of a Contact's name, what happens'",
      options: [
        "A. Nothing happens: the commandLink is missing an action attribute.",
        "B. A new page opens, showing the Contact's details.",
        "C. The page refreshes, showing the Contact's details.",
        "D. The outputPanel refreshes, showing the Contacts details.",
      ],
      answer: "D",
      title: "Question 40",
    },
    {
      content:
        "A company has a custom object. Request__c. that has a field, Completed__c. and a Lookup to Opportunity, Opportunity__c. Which SOQL query will get a unique list of all of the Opportunity records that have a Completed Request?",
      options: ["A. ", "B. ", "C. ", "D. "],
      answer: "A",
      title: "Question 41",
    },
    {
      content:
        "A company has a custom object Sales_Help_Request__c that has a Lookup relationship to Opportunity. The Sales_Help_Request__c has a number field, Number_of_Hours__c, that represents the amount of time spent on the Sales_Help_Request__c.A developer is tasked with creating a field, Total_Hours__c, on Opportunity that should be the sum of all of the Number_of_Hours__c values for the Sales_Help_Request__c records related to that Opportunity. What should the developer use to implement this?",
      options: [
        "A. A workflow rule on the Sales_Help_Request__c object",
        "B. A trigger on Sales_Help_Request__c",
        "C. A roll-up summary field on the Opportunity object",
        "D. A trigger on the Opportunity object",
      ],
      answer: "B",
      title: "Question 42",
    },
    {
      content:
        "A developer has a Batch Apex process, Batch_Account_Sales, that updates the sales amount for 10,000 Accounts on a nightly basis. The Batch Apex works as designed In the sandbox. However, the developer cannot get code coverage on the Batch Apex class. The test class is below:What is causing the code coverage problem?",
      options: [
        "A. The batch process will not recognize new accounts created in the same session",
        "B. The executeBatch must fail within test. startTest ( ) and - test. stopTest().",
        "C. The account creation already sets the sates amount to 0.",
        "D. The batch needs more than one account record created.",
      ],
      answer: "A",
      title: "Question 43",
    },
    {
      content:
        "The test method above tests an Apex trigger that the developer knows will make a lot of queries when a lot of Account are simultaneously updated to be customer. The test method fails at the Line 20 because of too many SOQL queriesWhat is the correct way to fix this?The test method above tests an Apex trigger that the developer knows will make a lot of queries when a lot of Accounts are simultaneously updated to be customers. The test method fails at the Line 20 because of too many SOQL queries. What is the correct way to fix this?",
      options: [
        "A. Replace most of the Apex Trigger with Process Builder processes to reduce the number of queries in the trigger.",
        "B. Change the DataFactory class to create fewer Accounts so that the number of queries in the trigger is reduced.",
        "C. Add TesLstartTest() before and Test.stop Test() after both Line 7 of the code and Line 20 of the code.",
        "D. Add TeststartTest() before Line 18 of the code and add Test.stopTest() after line 18 of the code.",
      ],
      answer: "D",
      title: "Question 44",
    },
    {
      content:
        "Which type of controller is best suited when you want all of the basic DML functions from an object's normal new/edit page?",
      options: [
        "A. Custom Controller",
        "B. Standard List/Set Controller",
        "C. Standard Controller",
        "D. Controller Extensions",
      ],
      answer: "C",
      title: "Question 45",
    },
    {
      content:
        "A developer has written the following method:static void processList(List<sobject> input){Which code block can be used to call the method?",
      options: [
        "A. processList (ace)",
        "B. processList ([FIND 'Acme\" 'RETURNING Account])",
        "C. processList([SELECT Id, Name FROM sObject WHERE Type = 'Account'])",
        "D. for Account ace : [SELECT Id, Name FROM Account])",
      ],
      answer: "C",
      title: "Question 46",
    },
    {
      content:
        "A company has the Lightning Component above that allows users to dick a button to save their changes and redirects them to a different page. Currently, when the user hits the Save button the records are getting saved, but they are not redirected. Which three techniques can a developer use to debug the JavaScript? Choose 3 answers",
      options: [
        "A. Enable Debug Mode for Lightning components for the user.",
        "B. Use Developer Console to view checkpoints.",
        "C. Use consde.log() messages in the JavaScript.",
        "D. Use the browser's dev tools to debug the JavaScript.",
        "E. Use Developer Console to view the debug log.",
      ],
      answer: "A,C,D",
      title: "Question 47",
    },
    {
      content:
        "A developer is debugging an Apex-based order creation process that has a requirement to have three savepoints, SP1, SP2, and SP3 (created in order), before the final execution of the process.During the final execution process, the developer has a routine to roll back to SP1 for a given condition. Once the condition is fixed, the code then calls a roll back to SP3 to continue with final execution. However, when the roll, back to SP3 is called, a runtime error occurs.Why does the developer receive a runtime error?",
      options: [
        "A. The developer should have called SP2 before calling SP3.",
        "B. The developer has too many DML statements between the savepoints.",
        "C. SP3 became invalid when SP1 was rolled back.",
        "D. The developer used too many savepoints in one trigger session.",
      ],
      answer: "C",
      title: "Question 48",
    },
    {
      content: "Which statement is true regarding savepoints?",
      options: [
        "A. Reference to savepoints can cross trigger invocations.",
        "B. Savepoints are not limited by DML statement governor limits",
        "C. Static variables are not reverted during a rollback.",
        "D. You can roll back to any savepoint variable created In any order",
      ],
      answer: "D",
      title: "Question 49",
    },
    {
      content:
        "A company has a Request__c object that has a lookup to the Opportunity object and a custom field. Status__c, with values of Open,' Closed, and Invalid.' An Opportunity should not be allowed to be deleted if there are any Request__c records related to it that have a Status__c value of Open or 'Closed.' what is the optimal way to enforce the requirement to prevent deletion?",
      options: [
        "A. An Apex Trigger on Request__c",
        "B. A Process on Request__c",
        "C. A Process on Opportunity",
        "D. An Apex Trigger on Opportunity",
      ],
      answer: "D",
      title: "Question 50",
    },
    {
      content:
        "A developer Is asked to develop a new AppExthange application. A feature of the program creates Survey records when a Case reaches a certain stage and Is of a certain Record Type. This feature needs to be configurable, as different Salesforce instances require Surveys at different times. Additionally, the out-of-the-box AppExchange app needs to come with a set of best practice settings that apply to most customers. What should the developer use to store and package the custom configuration settings for the app?",
      options: [
        "A. Process Builder",
        "B. Custom Objects",
        "C. Custom Metadata",
        "D. Custom Settings",
      ],
      answer: "C",
      title: "Question 51",
    },
    {
      content:
        "A developer has a test class that creates test data before making a mock call-out, but now receives a you have uncommitted work pending. Please commit or callout before calling out error. What step should be taken to resolve the error?",
      options: [
        "A. Ensure both the insertion and mock callout occur after the Test.startTest().",
        "B. Ensure the records are inserted before the Test.startTest() statement and the mock callout occurs within a method annotated with StestSetup.",
        "C. Ensure both the insertion and mock callout occur after the Test.stopTest().",
        "D. Ensure the records are inserted before the Test.startTest() statement and the mock callout after the Test.startTest().",
      ],
      answer: "D",
      title: "Question 52",
    },
    {
      content:
        "An Apex trigger creates a Contract record every time an Opportunity record is marked as Closed end Won.This trigger is working great, except (due to a recent acquisition) historical Opportunity records need to be loaded into the Salesforce instance.When a test batch of records are loaded, the Apex trigger creates Contract records. A developer is tasked with preventing Contract records from being created when mass loading the Opportunities, but the daily users still need to have the Contract records created. What is the most extendable way to update the Apex trigger to accomplish this?",
      options: [
        "A. Add a Validation Rule to the Contract to prevent Contract creation by the user who loads the data.",
        "B. Use a List Custom Setting to disable the trigger for the user who loads the data.",
        "C. Add the Profile ID of the user who loads the data to the trigger so the trigger will not fire for this user.",
        "D. Use a Hierarchy Custom Setting to skip executing the logic inside the trigger for the user who loads the data.",
      ],
      answer: "D",
      title: "Question 53",
    },
    {
      content:
        "A developer has built a multi-page wizard using a single Custom Controller to query and update data. Users are complaining that the pages are loading slowly. What will improve performance? (Choose three.)",
      options: [
        "A. Using actionRegion and rerender",
        "B. Turning off the standard stylesheet",
        "C. Setting the Apex Page attribute cache=true",
        "D. Using selective queries",
        "E. Reducing the view state",
      ],
      answer: "C,D,E",
      title: "Question 54",
    },
    {
      content:
        "An org has a requirement that the Shipping Address on the Account must be validated by a third-party web service, before the Account is allowed to be inserted. What is the optimal way to meet this requirement?",
      options: [
        "A. Make a callout to the web service from a before insert trigger.",
        "B. Make a callout to the web service from an after insert trigger.",
        "C. Make a callout to the web service from a standard Visualforce controller.",
        "D. Make a callout to the web service from a custom Visualforce controller.",
      ],
      answer: "A",
      title: "Question 55",
    },
    {
      content:
        "A company wants to build a custom Lightning Component that will display a specified Account Field Set and that can only be added to the Account record page. Which design resource configuration should be used?",
      options: ["A. ", "B. ", "C. ", "D. "],
      answer: "D",
      title: "Question 56",
    },
    {
      content:
        "Universal Containers has an existing automation where a custom record called Account Plan is created upon an Account being marked as a Customer. Recently, a Workflow Rule was added so that whenever an Account is marked as a Customer, a 'Customer Since' date field is updated with today's date.Now, since the addition of the Workflow Rule, two Account Plan records are created whenever the Account is marked as a Customer. What might cause this to happen?",
      options: [
        "A. The Process Builder responsible for the record creation fires before and after the Workflow rule.",
        "B. The Apex Trigger responsible for the record creation does not use a static variable to ensure It only fires once.",
        "C. The Workflow Rule responsible for the record creation fires twice because the 'Customer Since' field Update Is marked as 'Re-evaluate Workflow Rules After Field Change",
        "D. The Apex Trigger responsible for the record creation is not bulk sate and calls insert inside of a for loop.",
      ],
      answer: "C",
      title: "Question 57",
    },
    {
      content:
        "A company uses a custom-built enterprise resource planning (ERP) system to handle order management. The company wants Sales Reps to know the status of orders so that if a customer calls to ask about their shipment, the Sales Rep can advise the customer about the order's status and tracking number if it is already shipped. Which two methods can make this ERP order data visible in Salesforce? Choose 2 answers",
      options: [
        "A. Have the ERP system push the data into Salesforce using the SOAP API.",
        "B. Ensure real-time order data is in Salesforce using the Streaming API.",
        "C. Use Salesforce Connect to view real-time Order data in the ERP system.",
        "D. Write a cron job In Salesforce to poll the ERP system for order updates.",
      ],
      answer: "A,C",
      title: "Question 58",
    },
    {
      content:
        "Which use case is an appropriate fit for the future asynchronous Apex method? (Choose two.)",
      options: [
        "A. A developer has jobs that need larger query results than regular transactions allow",
        "B. A developer needs to segregate DML operations and bypass the mixed save DML error",
        "C. A developer has long-running methods and needs to prevent delaying an Apex transaction",
        "D. A developer has long-running jobs with large data volumes that need to be performed in batches",
      ],
      answer: "B,C",
      title: "Question 59",
    },
    {
      content:
        "A company decides that every time an Opportunity is created, they want to create a follow up Task and assign it to the Opportunity Owner. What should a developer use to implement the requirements?",
      options: [
        "A. A Process Builder on Opportunity",
        "B. A trigger on Opportunity",
        "C. A trigger on Task",
        "D. A Process Builder on Task",
      ],
      answer: "A",
      title: "Question 60",
    },
    {
      content:
        'if the "PageReference.setRedirect" Apex function is set to False, what type of request is made?',
      options: [
        "A. Postback request",
        "B. Get request",
        "C. If PageReference points to the same controller and subset of extensions, postback request, otherwise get request",
      ],
      answer: "C",
      title: "Question 61",
    },
    {
      content: "Choose the correct definition for <apex:actionFunction>.",
      options: [
        "A. Adds AJAX support to another component (e.g. onClick, onMouseUp, onFocus, etc.)",
        'B. Can be associated with an AJAX request (actionFunction/actionSupport/actionPoller) and shows content conditionally depending on the status of the request (in progress/complete). Use the "id" field to specify name; use "status" field on related components to connect them',
        "C. Allows for controller methods to be called directly from Javascript. Must be| encapsulated in<apex:form> tags. Unlike actionSupport, these function<apex:actionPoller>s can be called directly from Javascript code B Sends an AJAX request according to the time interval you specify. If this ever gets re-rendered, it resets",
        "D. Signifies which components should be processed by the server when an AJAX request is generated",
      ],
      answer: "D",
      title: "Question 62",
    },
    {
      content:
        "A developer is using a third-party JavaScript library to create a custom user interface in Visualforce. The developer needs to use JavaScript to get data from a controller method in response to a user action. How can the developer accomplish this?",
      options: [
        "A. Use <apex:actionFunction> to create a JavaScript wrapper for the controller method",
        "B. Use the $Controller global variable to access the controller method via JavaScript",
        "C. Use <apex:actionSupport> to enable JavaScript support for the controller method",
        "D. Use the @RemoteAction annotation on the method definition with JavaScript Remoting",
      ],
      answer: "D",
      title: "Question 63",
    },
    {
      content:
        "A developer needs to create a service that will process an email sent to it and create an account and contact using the contents of the email as data for the records. How might a developer accomplish this requirement?",
      options: [
        "A. Use the Apex Inbound Email Handler",
        "B. Use the Fuel API with Email Data Extensions",
        "C. Use Heroku Data Clips to Process Email",
        "D. Use Auto-launched Flow and Process Builder",
      ],
      answer: "A",
      title: "Question 64",
    },
    {
      content:
        "What is the transaction limit for the number of records for SOSL?",
      options: [
        "A. 200 (synchronous), 100 (async)",
        "B. 2,000",
        "C. 20",
        "D. 100 (synchronous), 200 (async)",
        "E. There is no limit",
      ],
      answer: "B",
      title: "Question 65",
    },
    {
      content:
        "The progress of an apex job queued is using the System.enqueueJob method and needs to be monitored. Which options are valid? (Choose two.)",
      options: [
        "A. Query the AsyncApexJob record",
        "B. Use the Apex Jobs page in setup",
        "C. Use the Scheduled Jobs page in setup",
        "D. Query the Queueable Apex record",
      ],
      answer: "A,B",
      title: "Question 66",
    },
    {
      content:
        "Which use case can only be performed by using asynchronous Apex?",
      options: [
        "A. Scheduling a batch process to complete in the future",
        "B. Processing high volumes of records",
        "C. Updating a record after the completion of an insert",
        "D. Calling a web service from an Apex trigger",
      ],
      answer: "B",
      title: "Question 67",
    },
    {
      content: "REST uses___________.",
      options: [
        "A. All of the above",
        "B. The HTTPResponse class",
        "C. The HTTP class",
        "D. The HTTPRequest class",
      ],
      answer: "A",
      title: "Question 68",
    },
    {
      content:
        "A developer wants to use an Aura Component with a Custom Action. What should be considered in order to do this?",
      options: [
        "A. The component's JavaScript controller must handle a method on initialization.",
        "B. A default value must be provided for each component attribute marked as required.",
        'C. The class "slds-modal__container" must be added to the top-level element of the component.',
        "D. The component must implement the force:lightningQuickActionButton interface.",
      ],
      answer: "D",
      title: "Question 69",
    },
    {
      content:
        "Which code statement includes an Apex method named updateAccount in the class AccountController for use in a Lightning web component?",
      options: [
        "A. Import updateAccounts from AccountController';",
        "B. Import updateAccounts from @salesforceapexAccountControllerupdateAccounts';",
        "C. Import updateAccounts from @salesforceapex AccountController';",
        "D. Import updateAccounts from AccountControllerupdateAccount';",
      ],
      answer: "C",
      title: "Question 70",
    },
    {
      content:
        "A developer is experiencing issues with a Lightning web component. The component must surface information about Opportunity owned by the currently logged-in user.When the component is rendered, the following message is displayed: ''Error retrieving data'' Which modification should be implemented to the Apex class to overcome the issue?",
      options: [
        "A. Ensure the OWD for the Opportunity object is public.",
        "B. Use the Continuation=true attribute in the Apex method.",
        "C. Edit the code to use the without sharing keyword in the Apex class.",
        "D. Use the Cacheable=True attribute in the Apex method.",
      ],
      answer: "D",
      title: "Question 71",
    },
    {
      content:
        "A developer built a Component to be used at the front desk for guests to self-register upon arrival at a kiosk. The developer is now asked to create a Component for the Utility Tray to alert Users whenever a guest has arrived at the front desk. What should be used?",
      options: [
        "A. Component Event",
        "B. Changelog",
        "C. DML Operation",
        "D. Application Event",
      ],
      answer: "D",
      title: "Question 72",
    },
    {
      content:
        "There are user complaints about slow render times of a custom data table within a visualforce page that loads thousands of Account records at once. What can a developer do to help alleviate such issues?",
      options: [
        "A. Use JavaScript remoting to query the accounts.",
        "B. Use the standard Account List controller and implement pagination.",
        "C. Use the transient keyword in the Apex code when querying the Account records.",
        "D. Upload a third-party data table library as a static resource.",
      ],
      answer: "B",
      title: "Question 73",
    },
    {
      content:
        "A company wants to implement a new call center process for handling customer service calls. It requires service reps to ask for the caller's account number before proceeding with the rest of their call script.Following best practices, what should a developer use to meet this requirement?",
      options: [
        "A. Apex Trigger",
        "B. Process Builder",
        "C. Approvals",
        "D. Flow Builder",
      ],
      answer: "B",
      title: "Question 74",
    },
    {
      content:
        "A developer creates an application event that has triggered an infinite loop. What may have caused this problem?",
      options: [
        "A. The event handler calls a trigger.",
        "B. The event Is fired from a custom renderer.",
        'C. An event is fired ontouchend" and is unhandled.',
        "D. The event has multiple handlers registered in the project.",
      ],
      answer: "B",
      title: "Question 75",
    },
    {
      content: "What is the transaction limit on the number of callouts?",
      options: ["A. 50", "B. There is no limit", "C. 100", "D. 200", "E. 150"],
      answer: "A",
      title: "Question 76",
    },
    {
      content:
        "A company accepts orders for customers in their enterprise resource planning (ERP) crder__c records with a lookup field to Account. The Account object has an External ID field, ERP_Customer_ID__c. What should the integration use to create new Order__c records that will automatically be related to the correct Account?",
      options: [
        "A. Upsert on the Order__c object and specify the ERP_Customer_ID__c.",
        "B. Merge on the Order__c object and specify the ERP_Customer_ID__c.",
        "C. Insert on the Order__c object followed by an update on the Order__c object.",
        "D. Upsert on the Account and specify the ERP_Customer_ID__c.",
      ],
      answer: "C",
      title: "Question 77",
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
      title: "Question 78",
    },
    {
      content:
        "What is a benefit of JavaScript remoting over Visualforce Remote Objects?",
      options: [
        "A. Allows for specified re-render targets",
        "B. Supports complex server-side application logic",
        "C. Does not require any JavaScript code",
        "D. Does not require any Apex code",
      ],
      answer: "B",
      title: "Question 79",
    },
    {
      content:
        "A developer wrote a test class that successfully asserts a trigger on Account. It fires and updates data correctly in a sandbox environment.A salesforce admin with a custom profile attempts to deploy this trigger via a change set into the production environment, but the test class fails with an insufficient privileges error. What should a developer do to fix the problem?",
      options: [
        "A. Configure the production environment to enable ''Run All tests as Admin User.''",
        "B. Verify that Test, statement ( ) is not inside a For loop in the test class.",
        "C. Add system.runAd ( ) to the best class to execute the trigger as a user with the correct object permissions.",
        "D. Add seeAllData=true to the test class to work within the sharing model for the production environment.",
      ],
      answer: "C",
      title: "Question 80",
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
      title: "Question 81",
    },
    {
      content:
        "A developer sees test failures in the sandbox but not in production. No code or metadata changes have been actively made to either environment since the sandbox was created. Which consideration should be checked to resolve the issue?",
      options: [
        "A. Ensure Workflow Rules are inactive.",
        "B. Ensure Process Builder processes are inactive.",
        "C. Ensure the sandbox is on the same release as production.",
        "D. Ensure the Apex Classes are on the same API version.",
      ],
      answer: "C",
      title: "Question 82",
    },
    {
      content:
        "What can be done to improve the performance of the insert trigger shown above?",
      options: ["A. ", "B. ", "C. ", "D. "],
      answer: "B",
      title: "Question 83",
    },
    {
      content:
        "A developer notices the execution of all the test methods in a class takes a long time to run, due to the initial setup of ail the test data that is needed to perform the tests. What should the developer do to speed up test execution?",
      options: [
        "A. Define a method that creates test data and annotate with @createData",
        "B. Ensure proper usage of test data factory In all test methods.",
        "C. Define a method that creates test data and annotate with @testSetup.",
        "D. Reduce the amount of test methods in the class.",
      ],
      answer: "C",
      title: "Question 84",
    },
    {
      content:
        "A developer has a page with two extensions overriding the Standard controller for Case. What will happen when a user clicks the command button?",
      options: [
        "A. Save from CaseExtensionOne will be executed",
        "B. Save from Case Standard Controller will be executed",
        "C. All of the three Save methods will be executed",
        "D. Save from CaseExtensionTwo will be executed",
      ],
      answer: "A",
      title: "Question 85",
    },
    {
      content:
        "A company has a custom component that allows users to search for records of a certain object type by invoking an Apex Controller that returns a list of results based on the user's input, when the search Is completed, a searchComplete event is fired, with the results put in a results attribute of the event. The component is designed to be used within other components and may appear on a single page more than once. What is the optimal code that should be added to fire the event when the search has completed?",
      options: ["A. ", "B. ", "C. ", "D. "],
      answer: "D",
      title: "Question 86",
    },
    {
      content:
        "An org has a requirement that addresses on Contacts and Accounts should be normalized to a company standard by Apex code any time that they are saved. What is the optimal way to implement this?",
      options: [
        "A. Apex trigger on Account that calls the Contact trigger to normalize the address",
        "B. Apex trigger on Account that and Account that normalized the address",
        "C. Apex trigger on Contact that calls the Account trigger to normalize the address",
        "D. Apex trigger on Account and Account that call a helper class to normalize the address",
      ],
      answer: "D",
      title: "Question 87",
    },
    {
      content:
        "A company manages information about their product offerings in custom objects named Catalog and Catalog Item. Catalog Item has a master-detail field to Catalog, and each Catalog may have as many as 100,000 Catalog Items.Both custom objects have a CurrencylsoCode Text field that contains the currency code they should use. If a Catalog's CurrencylsoCode changes, all of its Catalog Items' CurrencylsoCodes should be changed as well. What should a developer use to update the CurrencylsoCodes on the Catalog Items when the Catalog's CurrencylsoCode changes^5",
      options: [
        "A. A Database.Schedulable and Database.Batchable class that queries the Catalog Item object and updates the Catalog Items if the Catalog CurrencylsoCode is different",
        "B. An after insert trigger on Catalog that updates the Catalog Items if the Catalog's CurrencylsoCode is different",
        "C. An after insert trigger on Catalog Item that updates the Catalog Items if the Catalog's CurrencylsoCode is different",
        "D. A Database.Schedulable and Database.Batchable class that queries the Catalog object and updates the Catalog Items if the Catalog CurrencylsoCode is different",
      ],
      answer: "D",
      title: "Question 88",
    },
    {
      content:
        "What should be added to the setup, in the location indicated, for the unit test above to create the controller extension for the test?A)B)C)D)",
      options: ["A. Option A", "B. Option B", "C. Option D", "D. Option C"],
      answer: "D",
      title: "Question 89",
    },
    {
      content:
        "Which interface needs to be implemented by a Lightning Component so that it may be displayed in modal dialog by clicking a button on a Lightning Record page?",
      options: [
        "A. Fightning:quickAction",
        "B. Lightning:editAction",
        "C. Force: lightningQuickAction",
        "D. Force:lightningEditAction",
      ],
      answer: "C",
      title: "Question 90",
    },
    {
      content:
        "A developer receives a LimitException: Too many query rows: 50001 error when running code. What debugging approach using the Developer Console provides the fastest and most accurate mechanism to identify a specific component that may be returning an unexpected number of rows?",
      options: [
        "A. Use the Execution Overview to see the number of rows returned by each Executed Unit",
        "B. Add System.debug(System.getQueryRows()) to the code to track SOQL usage",
        "C. Count the number of Row Limit warning messages in the Debug Logs",
        "D. Filter the Debug Log on SOQL_EXECUTE_END statements to track the results of each SOQL Query",
      ],
      answer: "D",
      title: "Question 91",
    },
    {
      content:
        "A developer receives the exception 'SOQL query not selective enough' when performing a query on an object with a large amount of data. Which step should be taken to resolve the issue?",
      options: [
        "A. Perform the SOQL query as part of a FOR loop.",
        "B. Perform the SOQL query via a call to the REST API.",
        "C. Use an ID in the WHERE clause of the SOQL query.",
        "D. Move the SOQL query to within an asynchronous process.",
      ],
      answer: "C",
      title: "Question 92",
    },
    {
      content:
        "How can the DISTANCE and GEOLOCATION functions be used i|n SOQL queries? (Choose two.)",
      options: [
        "A. To group results in distance ranges from a latitude and longitude",
        "B. To order results by distance from a latitude or longitude",
        "C. To get the distance results from a latitude and longitude",
        "D. To filter results based on distance from a latitude and longitude",
      ],
      answer: "B,D",
      title: "Question 93",
    },
    {
      content:
        "A developer must create a custom pagination solution for accessing approximately 2000 records and displaying 50 records on each page. Data from Salesforce will be accessed via an API and not via Apex. How can the developer meet these requirements? (Choose two.)",
      options: [
        "A. Use LIMIT 50 in SOQL queries",
        "B. Use CURSOR 50 in SOQL queries",
        "C. Use a StandardSetController",
        "D. Use OFFSET in SOQL queries",
      ],
      answer: "A,D",
      title: "Question 94",
    },
    {
      content:
        "What Visualforce tag can be used to display custom messages in pages using the Salesforce Ul styling for errors, warnings, and other types of messages?",
      options: [
        "A. <apex:message>",
        "B. <apex:error>",
        "C. <apex:customMessage>",
        "D. <apex:pageMessage>",
      ],
      answer: "D",
      title: "Question 95",
    },
    {
      content:
        "A developer is building a Visualforce page that interacts with external services. Which interface should the developer implement to test this functionality? (Choose two.)",
      options: [
        "A. HTTPResponseMock",
        "B. HTTPRequestMock",
        "C. HTTPCalloutMock",
        "D. StaticResourceCalloutMock",
      ],
      answer: "C,D",
      title: "Question 96",
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
      title: "Question 97",
    },
    {
      content:
        "A company wants to create a dynamic survey that navigates users through a different series of questions based on their previous responses. What is the recommended solution to meet this requirement?",
      options: [
        "A. Dynamic Record Choice",
        "B. Custom Lightning Application",
        "C. Lightning Process Builder",
        "D. Visualforce and Apex",
      ],
      answer: "A",
      title: "Question 98",
    },
    {
      content:
        "An environment has two Apex Triggers: an after-update trigger on Account and an after-update trigger on Contact. The Account after-update trigger fires whenever an Account's address is updated, and it updates every associated Contact with that address. The Contact after-update trigger fires on every edit, and it updates every Campaign Member record related to the Contact with the Contact's state.Consider the following: A mass update of 200 Account records' addresses, where each Account has 50 Contacts. Each Contact has 1 Campaign Member. This means there are 10,000 Contact records across the Accounts and 10,000 Campaign Member records across the contacts. What will happen when the mass update occurs?",
      options: [
        "A. There will be no error, since each trigger fires within its own context and each trigger does not exceed the limit of the number of records processed by DML| statements.",
        "B. The mass update of Account address will succeed, but the Contact address updates will fail due to exceeding number of records processed by DML statements.",
        "C. The mass update will fail, since the two triggers fire in the same context, thus exceeding the number of records processed by DML statements.",
        "D. There will be no error, since the limit on the number of records processed by DML statements is 50,000.",
      ],
      answer: "A",
      title: "Question 99",
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
      title: "Question 100",
    },
    {
      content:
        "Which three actions must be completed in a Lightning web component for a JavaScript file in a static resource to be loaded? Choose 3 answers",
      options: [
        "A. Import a method from the platformftesourceLoader,",
        "B. Call loadscript.",
        "C. Import the static resource.",
        "D. Reference the static resource in a <script> tag.",
        "E. Append the static resource to the DOM.",
      ],
      answer: "A,B,C",
      title: "Question 101",
    },
    {
      content:
        "Employee_c is a Child object of Company_c. The Company_c object has an external Id field Company_ld_c. How can a developer insert an Employee_c record linked to Company_c with a Company_ld_c of '999'?",
      options: [
        "A. Employee_c emp = new Employee_c(Name=fDeveloperT); emp. Company_c = new Company_c(Company_Id_c=f 999 T) insert emp;",
        "B. Employee_c emp = new Employee_c(Name=fDeveloperf); emp.Company_r = f999f insert emp;",
        "C. Employee_c emp = new Employee_c(Name=fDeveloperf); emp.Company_c = f999f insert emp;",
        "D. Employee_c emp = new Employee_c(Name=fDeveloperf); emp.Company_r = new Company _ r(Company Id c=f999f) insert emp;",
      ],
      answer: "D",
      title: "Question 102",
    },
    {
      content:
        "A developer receives complaints that the component loads slowly. Which change can the developer implement to make the component perform faster?",
      options: [
        "A. Move the contents of <c: concacclnfo into the component.",
        "B. Add a change event handler for showContactinfo",
        'C. Change the type of contactlnfo to "Map".',
        "D. Change the default for showContacrlnfo to",
      ],
      answer: "D",
      title: "Question 103",
    },
    {
      content:
        "A company uses Opportunism to track sales to their customers and their org has millions of Opportunities. They want to begging to track revenue over time through a related Revenue object.As part of their initial implementation, they want to perform a one-time seeding of their data by automatically creating and populating Revenue records for Opportunities, based on complex logic. They estimate that roughly 100,000 Opportunities will have revenue records and populated. What is the optimal way to automate this?",
      options: [
        "A. Use System.scheduleJob() to schedule a Database.Scheduleable class.",
        "B. Use Database.txtcuteBatch() to invoke a Database.Batchable class.",
        "C. Use System.enqueueJob>() to Invoke a Queueable class.",
        "D. Use Database.executeBatch() to invoke a Queueable dass.",
      ],
      answer: "A",
      title: "Question 104",
    },
    {
      content:
        "The Salesforce instance at Universal Containers currently integrates with a third-party company to validate mailing addresses via REST services. The third-party address verification system recently changed endpoint URLs for all their set vices from https://th-addreaa-service.3pc.com to https://plc1-mailsarvice.3pc.com.Everything else remained the same. The developer updated code to reflect this endpoint change, but the mailing address validation service stopped working after the change. What else should be done to complete this web service end point change?",
      options: [
        "A. Use a Custom Setting with the new endpoint Instead of hard coding the URL.",
        "B. Add web service IP Addresses to Trusted IP Ranges m the Network Access security controls settings.",
        "C. Create a new Remote Site for the new endpoint URL.",
        "D. Test the callout property using HttpCalloutMock.",
      ],
      answer: "C",
      title: "Question 105",
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
      title: "Question 106",
    },
    {
      content:
        "How should a developer verify that a specific Account record is being tested in a test class for a visualforce controller?",
      options: [
        "A. Instantiate the page reference in the test class, insert the Account in the test class, then use seeAHData-true to view the Account.",
        "B. Insert the Account in the test class, instantiate the page reference in the test class, then use System.currentPageReference().getParameters{}.put() to set the Account ID.",
        "C. Instantiate the page reference in the test class, insert the Account in the test class, then use System.setParentRecordld().get() to set the Account ID.",
        "D. Insert the Account into Salesforce, instantiate the page reference in the test class, then use System.setParentRecordId().get() to set the Account ID.",
      ],
      answer: "B",
      title: "Question 107",
    },
    {
      content:
        "If a developer wanted to display error messages with the standard Salesforce Ul styling, what would they use?",
      options: [
        "A. <apex:outputText>",
        "B. <apex:message>",
        "C. <apex:pageMessages>",
        "D. <apex:error>",
      ],
      answer: "C",
      title: "Question 108",
    },
    {
      content: "The Bulk API__________.",
      options: [
        "A. Is used to create, retrieve, update or delete records, such as accounts, leads, and custom objects, and allows you to maintain passwords, perform searches, and much more",
        "B. Provides a powerful, convenient, and simple REST-based web services interface for interacting with Salesforce. Its advantages include ease of integration and development, and it's an excellent choice of technology for use with mobile applications and web projects",
        "C. Is based on REST principles and is optimized for loading or deleting large sets of data. You can use it to query, queryAII, insert, update, upsert, or delete many records asynchronously by submitting batches",
        "D. Is used to retrieve, deploy, create, update, or delete customizations for your org. The most common use is to migrate changes from a sandbox or testing org to your production environment",
      ],
      answer: "C",
      title: "Question 109",
    },
    {
      content:
        "A lead developer for a Salesforce organization needs to develop a page-centric application that allows the user to interact with multiple objects related to a Contact The application needs to implement a third-party JavaScript framework such as Angular, and must be made available in both Classic and Lightning Experience.Given these requirements, what is the recommended solution to develop the application?",
      options: [
        "A. Visualforce",
        "B. Lightning Web Components",
        "C. Lightning Experience Builder",
        "D. Aura Components",
      ],
      answer: "C",
      title: "Question 110",
    },
    {
      content:
        "A developer wants to write a generic Apex method that will compare the Salesforce Name filed between any two object records, for example to compare the Name field of an Account and an Opportunity; or the name of an Account and a Contact. How should the developer do this?",
      options: [
        "A. Invoke a Schema,describe() function to compare the values of each Name field.",
        "B. Use a String.replace( ) method to parse the contents of each Name field.",
        "C. Use the salesforce metadata API to extract the value of each object and compare the name fields",
        "D. Cast each object into an sObject and use sObject.get(Name') to compare the Name fields.",
      ],
      answer: "D",
      title: "Question 111",
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
      title: "Question 112",
    },
    {
      content:
        'What is the transaction limit on the number of "sendEmail" method calls?',
      options: ["A. 20", "B. 10", "C. 50", "D. 100", "E. There is no limit"],
      answer:
        "B  Explanation Explanation/Reference: The reserveEmailCapacity methods let you declare how many emails you want to send prior to actually sending, allowing you to handle limit errors prematurely ",
      title: "Question 113",
    },
  ],
});