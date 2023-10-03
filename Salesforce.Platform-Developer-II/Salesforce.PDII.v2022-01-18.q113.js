window.testContent = window.testContent || [];
var testId = "Salesforce.Platform-Developer-II";
var testName = "Salesforce.Platform-Developer-II";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "Salesforce.Platform-Developer-II.v2022-01-18.q113",
  content: [
    {
      content:
        "Within the System.Limit class, what would you call to get the number of calls made in your transaction?",
      options: [
        "A. get [typeOfLimit] -> (Ex. getDXLStaterr.ents () )",
        "B. getLimit [typeOf Limit] -> (Ex. getLirr.it DXLSt at err.ents () )",
      ],
      answer: "A",
      title: "Question 1",
    },
    {
      content:
        "Universal Containers has an existing automation where a custom record called Account Plan is created upon an Account being marked as a Customer. Recently, a Workflow Rule was added so that whenever an Account is marked as a Customer, a 'Customer Since' date field is updated with today's date.Now, since the addition of the Workflow Rule, two Account Plan records are created whenever the Account is marked as a Customer.What might cause this to happen?",
      options: [
        "A. The Apex Trigger responsible for the record creation is not bulk sate and calls insert inside of a for loop.",
        "B. The Apex Trigger responsible for the record creation does not use a static variable to ensure It only fires once.",
        "C. The Workflow Rule responsible for the record creation fires twice because the 'Customer Since' field Update Is marked as 'Re-evaluate Workflow Rules After Field Change",
        "D. The Process Builder responsible for the record creation fires before and after the Workflow rule.",
      ],
      answer: "C",
      title: "Question 2",
    },
    {
      content:
        "Which tag should a developer use to display different text while an <apex:commandButton> is executing versus not executing?",
      options: [
        "A. <ApexactionStatus>",
        "B. <ApexactionSupper>",
        "C. <apexactionPoller>",
        "D. <ApexpageMessages>",
      ],
      answer: "C",
      title: "Question 3",
    },
    {
      content:
        "A company exposes a REST web service and wants to establish two-way SSL between Salesforce and the REST web service. A certificate signed by an appropriate certificate authority has been provided to the developer.What modification is necessary on the Salesforce side? (Choose two.)",
      options: [
        "A. Update the code to use HttpRequest.setClientCertificateName()",
        "B. Configure two-factor authentication with the provided certificate",
        "C. Create an entry for the certificate in Certificate and Key Management",
        "D. Update the code to use HttpRequest.setHeaderQ to set an Authorization header.",
      ],
      answer: "A,C",
      title: "Question 4",
    },
    {
      content:
        "A company wants to create a dynamic survey that navigates users through a different series of questions based on their previous responses.What is the recommended solution to meet this requirement?",
      options: [
        "A. Custom Lightning Application",
        "B. Lightning Process Builder",
        "C. Visualforce and Apex",
        "D. Dynamic Record Choice",
      ],
      answer: "D",
      title: "Question 5",
    },
    {
      content:
        "A Lightning web component exists in the system and displays information about the record in context as a modal. Salesforce administrators need to use this component within the Lightning App Builder.Which two settings should the developer configure within the xml resource file?Choose 2 answers",
      options: [
        "A. Set the IsExposed attribute to True.",
        "B. Set the IsVisible attribute to True.",
        "C. Specify the target to be lightning__RecordPage.",
        "D. Specify the target to be lightning__AppPage.",
      ],
      answer: "A,C",
      title: "Question 6",
    },
    {
      content:
        "A developer Is asked to develop a new AppExthange application. A feature of the program creates Survey records when a Case reaches a certain stage and Is of a certain Record Type. This feature needs to be configurable, as different Salesforce instances require Surveys at different times. Additionally, the out-of-the-box AppExchange app needs to come with a set of best practice settings that apply to most customers.What should the developer use to store and package the custom configuration settings for the app?",
      options: [
        "A. Custom Objects",
        "B. Custom Metadata",
        "C. Custom Settings",
        "D. Process Builder",
      ],
      answer: "B",
      title: "Question 7",
    },
    {
      content:
        "A developer wrote a test class that successfully asserts a trigger on Account. It fires and updates data correctly in a sandbox environment.A salesforce admin with a custom profile attempts to deploy this trigger via a change set into the production environment, but the test class fails with an insufficient privileges error.What should a developer do to fix the problem?",
      options: [
        "A. Verify that Test, statement ( ) is not inside a For loop in the test class.",
        "B. Add system.runAd ( ) to the best class to execute the trigger as a user with the correct object permissions.",
        "C. Add seeAllData=true to the test class to work within the sharing model for the production environment.",
        "D. Configure the production environment to enable ''Run All tests as Admin User.''",
      ],
      answer: "B",
      title: "Question 8",
    },
    {
      content:
        "Which statement is considered a best practice for writing bulk safe Apex Triggers?",
      options: [
        "A. Add records to collections and perform DML operations against these collections.",
        "B. Instead of DML statements, use the Database methods with allOrNone set to False.",
        "C. Add LIMIT 50000 to every SOQL statement",
        "D. Perform all DML operations from within a Future Method.",
      ],
      answer: "A",
      title: "Question 9",
    },
    {
      content:
        'What is the correct order of execution for Visualforce Page "get" requests (initial page visit)?',
      options: [
        "A. Evaluate constructors on controller and extensions2) Evaluate constructors, extensions, and expression on attribute definitions on any custom components present3) Evaluate expressions, <apex:page> attribute actions, and other method calls (getters/setters) on main page4) If there's a <apex:form> element, create the view state5) Send HTML to Browser",
        "B. Evaluate constructors on controller and extensions2) If there's a <apex:form> element, create the view state3) Evaluate expressions, <apex:page> attribute actions, and other method calls (getters/setters) on main page4) Evaluate constructors, extensions, and expression on attribute definitions on any custom components present5) Send HTML to Browser",
        "C. Evaluate constructors, extensions, and expression on attribute definitions on any custom components present2) Evaluate constructors on controller and extensions3) Evaluate expressions, <apex:page> attribute actions, and other method calls (getters/setters) on main page4) If there's a <apex:form> element, create the view state5) Send HTML to Browser",
      ],
      answer: "A",
      title: "Question 10",
    },
    {
      content:
        "messages are rendering on the page. Which component should be added to the Visualforce page to display the message?",
      options: ["A. ", "B. ", "C. ", "D. "],
      answer: "A",
      title: "Question 11",
    },
    {
      content:
        "The progress of an apex job queued is using the System.enqueueJob method and needs to be monitored.Which options are valid? (Choose two.)",
      options: [
        "A. Query the AsyncApexJob record",
        "B. Use the Apex Jobs page in setup",
        "C. Use the Scheduled Jobs page in setup",
        "D. Query the Queueable Apex record",
      ],
      answer: "A,B",
      title: "Question 12",
    },
    {
      content:
        "A company needs to automatically delete sensitive information after 7 years. This could delete almost a million records every day.How can this be achieved?",
      options: [
        "A. Schedule an Cfuture process to Query records older than 7 years, and then recursively invoke itself in 1,000 record batches to delete them.",
        "B. Use aggregate functions to query for records older than 7 years, and then delete the AggregateResult objects.",
        "C. Schedule a batch Apex process to run every day that Queries and deletes records older than 7 years.",
        "D. Perform a SOSL statement to find records older than 7 years, and then delete the entire result set.",
      ],
      answer: "C",
      title: "Question 13",
    },
    {
      content:
        "Line 1 public class AttributeTypes Line 2 { Line 3 private final String[] arrayItems; Line 4 Line 5 @AuraEnabled Line 6 public List<String> getStringArray() { Line 7 Strings+ arrayItems = new String*+, 'red', 'green', 'blue' -; Line 8 return arrayItems; Line 9 } Line 10 } Consider the Apex controller above that is called from a Lightning Aura Component. What is wrong with it?",
      options: [
        "A. Lines 1 and 6: class and method must be global",
        "B. Line 8: method must first serialize the list to JSON before returning",
        "C. Line 1: class must be global",
        "D. Line 6: method must be static",
      ],
      answer: "D",
      title: "Question 14",
    },
    {
      content:
        "What is a best practice when unit testing a controller? (Choose two.)",
      options: [
        "A. Verify correct references by using getURL()",
        "B. Simulate user interaction by leveraging Test.setMock()",
        "C. Set query parameters by using getParameters().put",
        "D. Access test data by using seeAIIData=true",
      ],
      answer: "A,C",
      title: "Question 15",
    },
    {
      content:
        "Given the following containment hierarchy:What is the correct way to communicate the new value of a property named ''passthrough'' to my-parent component if the property is defined within my-child-component?A)B)C)D)",
      options: ["A. Option D", "B. Option A", "C. Option C", "D. Option B"],
      answer: "D",
      title: "Question 16",
    },
    {
      content:
        "Recently a Salesforce org's integration failed because it exceeded the number of allowed API calls in a 24-hour period. The integration handles a near real-time, complex insertion of data into Salesforce. The flow of data is as follows: * The integration looks up Contact records with a given email address and, if found, the integration adds a Task to the first matching Contact it finds. If a match is not found, the integration looks up Lead records with a given email address and, if found, the integration adds a Task to the first matching Lead it finds. * If a match is not found, the integration will create a Lead and a Task for that newly created Lead. What is one way in which the integration can stay near real-time, but not exceed the number of allowed API calls in a 24-hour period?",
      options: [
        "A. Create several Apex InboundEmailHandlers to accept calls from the third-party system, thus bypassing the API limits.",
        "B. write a custom Apex web service that, given an email address, does all of the logic the integration code was doing.",
        "C. Create an Inbound Message that, using Flow, can do all of the logic the integration code was doing.",
        "D. Use the REST API as well as the SOAP API to effectively double the API calls allowed in a 24-hour period.",
      ],
      answer: "A",
      title: "Question 17",
    },
    {
      content:
        "Which annotation exposes an Apex class as a RESTful neb service?",
      options: [
        "A. @RemoteAction",
        "B. @RestRtsoorct",
        "C. @AuraEnaWed",
        "D. @HttpInvocabte",
      ],
      answer: "B",
      title: "Question 18",
    },
    {
      content:
        "A company wants to run different logic based on an Opportunity's record type. Which code segment handles this request and follows best practices?A)B)",
      options: ["A. Option A", "B. Option B"],
      answer: "A",
      title: "Question 19",
    },
    {
      content:
        "A developer is trying to access org data from within a test class. Which sObject type requires the test class to have the (seeAllData=true) annotation?",
      options: ["A. Profile", "B. RecordType", "C. User", "D. Report"],
      answer: "D",
      title: "Question 20",
    },
    {
      content:
        "An org has a requirement that an Account must always have one and only one Contact listed as Primary. So selecting one Contact will de-select any others. The client wants a checkbox on the Contact called 'Is Primary' to control this feature. The client also wants to ensure that the last name of every Contact is stored entirely in uppercase characters. What is the optimal way to implement these requirements?",
      options: [
        "A. write a single trigger on Contact for both after update and before update and callout to helper classes to handle each set of logic.",
        "B. write an after update trigger on Account for the Is Primary logic and a before update trigger on Contact for the last name logic.",
        "C. write a Validation Rule on the Contact for the Is Primary logic and a before update trigger on Contact for the last name logic.",
        "D. Write an after update trigger on Contact for the Is Primary logic and a separate before update trigger on Contact for the last name logic.",
      ],
      answer: "A",
      title: "Question 21",
    },
    {
      content: "What is the transaction limit on the max Salesforce CPU time?",
      options: [
        "A. 60 seconds",
        "B. There is no limit",
        "C. 100 seconds (synchronous); 200 seconds (async)",
        "D. 10 seconds (synchronous); 60 seconds (async)",
        "E. 100 seconds",
      ],
      answer: "D",
      title: "Question 22",
    },
    {
      content:
        "Employee_c is a Child object of Company_c. The Company_c object has an external Id field Company_ld_c.How can a developer insert an Employee_c record linked to Company_c with a Company_ld_c of '999'?",
      options: [
        "A. Employee_c emp = new Employee_c(Name=fDeveloperf); emp.Company_r = new Company _ r(Company Id c=f999f) insert emp;",
        "B. Employee_c emp = new Employee_c(Name=fDeveloperf); emp.Company_r = f999f insert emp;",
        "C. Employee_c emp = new Employee_c(Name=fDeveloperf); emp.Company_c = f999f insert emp;",
        "D. Employee_c emp = new Employee_c(Name=fDeveloperT); emp. Company_c = new Company_c(Company_Id_c=f 999 T) insert emp;",
      ],
      answer: "A",
      title: "Question 23",
    },
    {
      content:
        "A company uses Opportunism to track sales to their customers and their org has millions of Opportunities. They want to begging to track revenue over time through a related Revenue object.As part of their initial implementation, they want to perform a one-time seeding of their data by automatically creating and populating Revenue records for Opportunities, based on complex logic. They estimate that roughly 100,000 Opportunities will have revenue records and populated.What is the optimal way to automate this?",
      options: [
        "A. Use Database.txtcuteBatch() to invoke a Database.Batchable class.",
        "B. Use Database.executeBatch() to invoke a Queueable dass.",
        "C. Use System.scheduleJob() to schedule a Database.Scheduleable class.",
        "D. Use System.enqueueJob>() to Invoke a Queueable class.",
      ],
      answer: "C",
      title: "Question 24",
    },
    {
      content:
        "A Lightning Component has a section that displays some information about an Account and it works well on the desktop, but users have to scroll horizontally to see the Description field output on their mobile devices and tablets.Which option has the changes to make the component responsive for mobile and tablet devices?",
      options: ["A. ", "B. ", "C. ", "D. "],
      answer: "C",
      title: "Question 25",
    },
    {
      content:
        "Within the System.Limit class, what would you call to get the total limit you can call in a single transaction?",
      options: [
        "A. get[typeOfLimit] -> (Ex. getDMLStatements())",
        "B. getLimit [typeOfLirr.it] -> (Ex. getLin~.it DY.LSt aterr.ents () )",
      ],
      answer: "B",
      title: "Question 26",
    },
    {
      content:
        "Which statement is true regarding the use of user input as part of a dynamic SOQL query?",
      options: [
        "A. The string should be URL encoded by the input form to prevent errors",
        "B. Free text input should not be allowed, to avoid SOQL injection",
        "C. Quotes should be escaped to protect against SOQL injection",
        "D. The String.format() method should be used to prevent injection",
      ],
      answer: "C",
      title: "Question 27",
    },
    {
      content:
        "Which statement is true about using ConnectApi namespace (also called Chatter in Apex)? (Choose two.)",
      options: [
        "A. Chatter in Apex methods do not run in system mode; they run in the context of the current user",
        "B. Chatter in Apex operations are synchronous, and they occur immediately",
        "C. Chatter in Apex methods honor the 'with sharing' and 'without sharing' keywords",
        "D. Many test methods related to Chatter in Apex require the IsTest (SeeAIIData=true) annotation",
      ],
      answer: "A,D",
      title: "Question 28",
    },
    {
      content:
        "Which statement is true regarding both Flow and Lightning Process? (Choose two.)",
      options: [
        "A. Can use Apex that implements the Process.Plugin interface",
        "B. Are both server-side considerations in the Order of Execution",
        "C. Are able to be embedded directly into Visualforce pages",
        "D. Can use Apex methods with the @lnvocableMethod annotation",
      ],
      answer: "A,D",
      title: "Question 29",
    },
    {
      content:
        "A developer i$ tasked Dy Unversai Containers to build out a system to track the container repair process. Containers should be tracked as they move through the repair process, starting when a customer reports an issue and ending when the container is returned to the customer.Which solution meets these business requirements while following best practices?",
      options: [
        "A. Use Flow Builder|.to develop a Sites page for customers to submit repair requests and track the status of their request.",
        "B. Build an automated Lightning Application using Application Events to ensure data integrity.",
        "C. involve a Salesforce administrator and build out a declarative solution that works in Salesforce desktop and mobile.",
        "D. Use Platform Events with Workflow Rules and RFID integration to ensure proper tracking of the containers.",
      ],
      answer: "A",
      title: "Question 30",
    },
    {
      content:
        "In an organization that has multi-currency enabled, a developer is tasked with building a Lighting Component that displays the top ten Opportunities most recently access by the logged in user. The developer must ensure the Amount and LastModifiedDate field values are displayed according to the user's locale.What is the most effective approach to ensure values displayed respect the users locale settings?",
      options: [
        "A. Use REGEX expressions to format the values retrieved via SOQL.",
        "B. Use the FORMAT() function in the SOQL query.",
        "C. Use a wrapper class to format the values retrieved via SOQL.",
        "D. Use the FOR VIEW clause in the SOQL Query.",
      ],
      answer: "D",
      title: "Question 31",
    },
    {
      content:
        "What Visualforce tag can be used to display custom messages in pages using the Salesforce Ul styling for errors, warnings, and other types of messages?",
      options: [
        "A. <apex:error>",
        "B. <apex:pageMessage>",
        "C. <apex:message>",
        "D. <apex:customMessage>",
      ],
      answer: "B",
      title: "Question 32",
    },
    {
      content: "How many Territories can an instance of salesforce have?",
      options: ["A. 1000", "B. 200", "C. 100", "D. 500", "E. 400"],
      answer: "D",
      title: "Question 33",
    },
    {
      content:
        "A company represents their customers as Accounts in Salesforce. All customers have a unique Customer_Number__c that is unique across all of the company's systems. They also have a custom Invoice__c object, with a Lookup to Account, to represent invoices that are sent out from their external system. This company wants to integrate invoice data back into Salesforce so Sales Reps can see when a customer is paying their bills on time. What is the optimal way to implement this?",
      options: [
        "A. Query the Account Object upon each call to insert invoice data to fetch the Salesforce ID corresponding to the Customer Number on the invoice",
        "B. Create a cross-reference table in the custom invoicing system with the Salesforce Account ID of each Customer and insert invoice data nightly.",
        "C. Ensure Customer_Number__c is an External ID and that a custom field Invoice_Number__c is an External ID and Upsert invoice data nightly.",
        "D. Use Salesforce Connect and external data objects to seamlessly import the invoice data into Salesforce without custom code.",
      ],
      answer: "C",
      title: "Question 34",
    },
    {
      content:
        "Consider the following code snippet, depicting an Azure component:Which two interfaces can the developer implement to make the component available as a quick action?Choose 2 answers",
      options: [
        "A. Lightning QuickActionAPI",
        "B. Force:hasRecordId",
        "C. Force hasObjectName",
        "D. Force:lightningQuickActionWithoutHeader",
        "E. Force:lightningQuicAction",
      ],
      answer: "D,E",
      title: "Question 35",
    },
    {
      content: 'The "Webservice" keyword___________.',
      options: [
        "A. Method must be static, and class must be global",
        "B. Can be used on all classes",
        "C. Used for any member variables included",
        "D. All of the above",
      ],
      answer: "D",
      title: "Question 36",
    },
    {
      content:
        "A company decides that every time an Opportunity is created, they want to create a follow up Task and assign it to the Opportunity Owner.What should a developer use to implement the requirements?",
      options: [
        "A. A trigger on Task",
        "B. A Process Builder on Task",
        "C. A Process Builder on Opportunity",
        "D. A trigger on Opportunity",
      ],
      answer: "C",
      title: "Question 37",
    },
    {
      content:
        "A developer created an Apex class that makes outbound RESTful callout. The following was created to send a fake response in Apex test methods.Which method can be called to return this fake response in the test methods?",
      options: [
        "A. TestcreateStub",
        "B. Test.setTestData",
        "C. testSetup",
        "D. TestsetMock",
      ],
      answer: "D",
      title: "Question 38",
    },
    {
      content:
        "A developer has been asked to create code that will meet the following requirements:Receives input of: Map<ld, Project_c), List<Account>Performs a potentially long-running callout to an outside web serviceProvides a way to confirm that the process executed successfullyWhich asynchronous feature should be used?",
      options: [
        "A. Queueable interface",
        "B. Schedulable interface",
        "C. Database.AllowCallouts interface",
        "D. Cfuture (callout=true)",
      ],
      answer: "A",
      title: "Question 39",
    },
    {
      content:
        "1 Contact con = new Contact ( LastName =fSmith', Department = fAdminT)2 insert con;3 Contact insertedContact=[select Name from Contact where id=icon.Id];4 Savepoint sp_admin = Database.setSavepoint();5 con.Department = fHRf;6 update con;7 Database.rollback(sp_admin);8 System.debug(Limits.getDmlStatements 0);Given the following code, what value will be output in the logs by line #8?",
      options: ["A. 3", "B. 2", "C. 4", "D. 5"],
      answer: "C",
      title: "Question 40",
    },
    {
      content:
        "Universal Containers wants to be able to bring up an Account detail page and view a table of containers currently being rented. The user wants to be able to dick on a container In the table and quickly edit and save the location of the container.In addition to this, the page should have a section that shows the location of each container on a map. Universal Containers wants the map to re-render whenever the location of a container is changed.What can a developer use to accomplish this task?",
      options: [
        "A. Two Visualforce Page Components leveraging Application Events",
        "B. Two Lightning Components leveraging Application Events",
        "C. Two Lightning Components leveraging Platform Events",
        "D. A single visualforce Page leveraging Platform Events",
      ],
      answer: "B",
      title: "Question 41",
    },
    {
      content:
        "A developer receives the exception 'SOQL query not selective enough' when performing a query on an object with a large amount of dat a. Which step should be taken to resolve the issue?",
      options: [
        "A. Move the SOQL query to within an asynchronous process.",
        "B. Perform the SOQL query as part of a FOR loop.",
        "C. Perform the SOQL query via a call to the REST API.",
        "D. Use an ID in the WHERE clause of the SOQL query.",
      ],
      answer: "D",
      title: "Question 42",
    },
    {
      content:
        "A developer writes the following code:While testing the code, the developer receives the following error message: System.CalloutException : You have uncommitted work pending What should the developer do? (Choose two.)",
      options: [
        "A. Move the web service callout into an Cfuture method",
        "B. Use Database.insert (order, true) to immediately commit any database changes",
        "C. Use the asyncSend() method of the HTTP class to send the request in async context",
        "D. Ensure all callouts are completed prior to executing DML statements",
      ],
      answer: "A,D",
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
        'A,B,E  /Reference: SObjectException occurs when accessing a field not queried, or you try to change a field during the wrong dml statement (i.e. an edit-only field being set on insert) Custom exceptions must extend the "Exception" class ',
      title: "Question 44",
    },
    {
      content:
        "A developer writes the following Apex trigger so that when a Case is closed, a single Survey record is created for that Case. The issue is that multiple Survey_c records are being created per Case.What could be the cause of this issue?",
      options: [
        "A. A workflow rule is firing with a Create Task action",
        "B. A user is editing the record multiple times",
        "C. A workflow rule is firing with a Field Update action",
        "D. A user is creating the record as Closed",
      ],
      answer: "B",
      title: "Question 45",
    },
    {
      content:
        'A custom field Exec_Count_c of type Number is created on an Account object. An account record with value of "1" for a: Exec__Count_c is saved. A workflow field update is defined on the Exec_Count_c field, to increment its value every time an account record is created or updated. The following trigger is defined on the account:trigger ExecOrderTrigger on Account (before insert, before update, after insert, after update){ for (Account accountlnstance: Trigger.New){ if (Trigger . isBefore){ accountlnstance Exec_Count_c += 1; } System, debug (accountlnstance.Exec_Count_c); } }',
      options: ["A. 2,2,3,3", "B. 2, 2, 4, 4", "C. 1,2,3,3", "D. 1,2,3,4"],
      answer: "B",
      title: "Question 46",
    },
    {
      content:
        'If you have a method "doStuff(List<sObject> records)", which is a valid call?',
      options: [
        "A. doStuff(List<Account> records);",
        "B. doStuff(Account acct);",
        "C. doStuff([Select Id From Account]);",
        "D. doStuff(sObject obj);",
      ],
      answer: "C",
      title: "Question 47",
    },
    {
      content:
        "Which scenario requires a developer to use an Apex callout instead of Outbound Messaging?",
      options: [
        "A. The callout needs to be asynchronous.",
        "B. The Target system uses a REST API.",
        "C. The Target system uses a SOAP API.",
        "D. The callout needs to be invoked from a Workflow Rule.",
      ],
      answer: "B",
      title: "Question 48",
    },
    {
      content:
        "A developer is building a Lightning web component to get data from an Apex method called getData that takes a parameter, name. The data should be retrieved when the user clicks the Load Data button.Exhibit.What must be added to get the data?",
      options: [
        "A. Add this, account = getData (this,name); to the loadData ( ) function.",
        "B. Add getData ({ name; this,name}) , then (result=> { this.account = result}) to the LeadData ( ) function.",
        "C. Add @wire(getData, {name: $name'}) to the account field and delete loadData ( ) because it is not needed.",
        "D. Add @wire(getData, (name: $name')} to the account field and this, account = getData ( ) ; to t loadData ( ) function.",
      ],
      answer: "B",
      title: "Question 49",
    },
    {
      content:
        "What is a benefit of JavaScript remoting over Visualforce Remote Objects?",
      options: [
        "A. Allows for specified re-render targets",
        "B. Does not require any JavaScript code",
        "C. Does not require any Apex code",
        "D. Supports complex server-side application logic",
      ],
      answer: "D",
      title: "Question 50",
    },
    {
      content:
        "A developer Is tasked with ensuring that email addresses entered into the system for Contacts and for a Custom Object called Survey_Response__c do not belong to a list of blacklisted domains. The list of blacklisted domains will be stored In a custom object for ease of maintenance by users. Note that the Survey_Response__c object is populated via a custom visualforce page.What is the optimal way to implement this?",
      options: [
        "A. Implement the logic in a Validation Rule on the Contact and a validation Rule on the Survey_Response__c object.",
        "B. Implement the logic in a helper class that is called by an Apex trigger on Contact and from the Custom Visualforce page controller.",
        "C. Implement the logic in an Apex trigger on Contact and also implement the logic within the Custom visualforce page controller.",
        "D. Implement the logic in the Custom Visualforce page controller and call that method from an Apex trigger on Contact.",
      ],
      answer: "B",
      title: "Question 51",
    },
    {
      content:
        "A lead developer is creating tests for a Lightning web component. The component re-renders when a property called bypassSelection. changes its value.What should the developer use to the test that the component re-renders successfully when the property changes?",
      options: [
        "A. Windows, set State ( )",
        "B. Promise. resolve ( )",
        "C. dispatchEvent (new CustomEvent (' bypassSelection'))",
        "D. Windows, Setinterval ( )",
      ],
      answer: "D",
      title: "Question 52",
    },
    {
      content: "What is a consideration when testing batch Apex? (Choose two.)",
      options: [
        "A. Test methods must run the batch between TeststartTestQ and Test.stopTestQ",
        "B. Test methods must call the batch execute() method once",
        "C. Test methods must use the @isTest (SeeAIIData=true) annotation",
        "D. Test methods must execute the batch with a scope size of less than 200 records",
      ],
      answer: "A,D",
      title: "Question 53",
    },
    {
      content:
        "A developer is using a third-party JavaScript library to create a custom user interface in Visualforce. The developer needs to use JavaScript to get data from a controller method in response to a user action.How can the developer accomplish this?",
      options: [
        "A. Use <apex:actionFunction> to create a JavaScript wrapper for the controller method",
        "B. Use the $Controller global variable to access the controller method via JavaScript",
        "C. Use the @RemoteAction annotation on the method definition with JavaScript Remoting",
        "D. Use <apex:actionSupport> to enable JavaScript support for the controller method",
      ],
      answer: "C",
      title: "Question 54",
    },
    {
      content:
        "There are user complaints about slow render times of a custom data table within a visualforce page that loads thousands of Account records at once.What can a developer do to help alleviate such issues?",
      options: [
        "A. Use the transient keyword in the Apex code when querying the Account records.",
        "B. Upload a third-party data table library as a static resource.",
        "C. Use the standard Account List controller and implement pagination.",
        "D. Use JavaScript remoting to query the accounts.",
      ],
      answer: "C",
      title: "Question 55",
    },
    {
      content:
        "What should be added to the setup, in the location indicated, for the unit test above to create the controller extension for the test?A)B)C)D)",
      options: ["A. Option A", "B. Option B", "C. Option C", "D. Option D"],
      answer: "C",
      title: "Question 56",
    },
    {
      content:
        "A company manages information about their product offerings in custom objects named Catalog and Catalog Item. Catalog Item has a master-detail field to Catalog, and each Catalog may have as many as 100,000 Catalog Items.Both custom objects have a CurrencylsoCode Text field that contains the currency code they should use. If a Catalog's CurrencylsoCode changes, all of its Catalog Items' CurrencylsoCodes should be changed as well.What should a developer use to update the CurrencylsoCodes on the Catalog Items when the Catalog's CurrencylsoCode changes^5",
      options: [
        "A. A Database.Schedulable and Database.Batchable class that queries the Catalog object and updates the Catalog Items if the Catalog CurrencylsoCode is different",
        "B. An after insert trigger on Catalog Item that updates the Catalog Items if the Catalog's CurrencylsoCode is different",
        "C. A Database.Schedulable and Database.Batchable class that queries the Catalog Item object and updates the Catalog Items if the Catalog CurrencylsoCode is different",
        "D. An after insert trigger on Catalog that updates the Catalog Items if the Catalog's CurrencylsoCode is different",
      ],
      answer: "A",
      title: "Question 57",
    },
    {
      content:
        "A developer must create a way for external partners to submit millions of leads into Salesforce per day-How should the developer meet this requirement?",
      options: [
        "A. Publicly expose a Visualforce page via Force.com Sites",
        "B. Publicly expose an Apex Web Service via Force.com Sites",
        "C. Create a web service on Heroku that uses Heroku Connect",
        "D. Host a Web-to-Lead form on the company website",
      ],
      answer: "C",
      title: "Question 58",
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
      title: "Question 59",
    },
    {
      content:
        '<lightning: layout multipleRows="true"> <lightning: layoutItem size="12">{!v.account.Name} </flighting: layoutitem> <lightning:layoutitem 3ize="12">{!v. account .AccountNumber} </lighting: layoutitem> <lightning: layoutitem size="12">{!v.account. Industry} </lighting: layoutitem> </lightning: layout> Refer to the component code above. The information displays as expected (in three rows) on a mobile device. However, the information is not displaying as desired (in a single row) on a desktop or tablet. Which option has the correct component changes to display correctly on desktops and tablets?',
      options: ["A. ", "B. ", "C. ", "D. "],
      answer: "A",
      title: "Question 60",
    },
    {
      content: "What is the transaction limit for the number of SOSL queries?",
      options: [
        "A. There is no limit",
        "B. 100 (synchronous), 200 (async)",
        "C. 20",
        "D. 200 (synchronous), 100 (async)",
        "E. 2,000",
      ],
      answer: "C",
      title: "Question 61",
    },
    {
      content:
        "Which type of controller is best suited when you want all of the basic DML functions from an object's normal new/edit page and want to include multiple records?",
      options: [
        "A. Custom Controller",
        "B. Standard Controller",
        "C. Controller Extensions",
        "D. Standard List/Set Controller",
      ],
      answer: "D",
      title: "Question 62",
    },
    {
      content:
        "Just prior to a new deployment, the Salesforce Administrator who configured a new order fulfillment process in a developer sandbox suddenly left the company. The users had fully tested all of the changes in the sandbox and signed off on them.Unfortunately, although a Change Set was started, it was not complete. A developer is brought in to help finish the deployment.What should the developer do to identify the configuration changes that need to be moved into production?",
      options: [
        "A. In Salesforce setup, look at the last modified date for every object to determine which should be added to the Change Set.",
        "B. Use the Metadata API and a supported development IDE to push all of the configuration from the sandbox into production to ensure no changes are lost.",
        "C. Leverage the Setup Audit Trail to review the changes made by the departed Administrator and identify which changes should be added to the Change Set.",
        "D. Set up Continuous Integration and a Git repository to automatically merge all changes from the sandbox metadata with the production metadata.",
      ],
      answer: "C",
      title: "Question 63",
    },
    {
      content:
        "A company wants to implement a new call center process for handling customer service calls. It requires service reps to ask for the caller's account number before proceeding with the rest of their call script. Following best practices, what should a developer use to meet this requirement?",
      options: [
        "A. Flow Builder",
        "B. Process Builder",
        "C. Apex Trigger",
        "D. Approvals",
      ],
      answer: "A",
      title: "Question 64",
    },
    {
      content: "What is a benefit of using a WSDL with Apex?",
      options: [
        "A. Allows for web services to be tested and achieve code coverage",
        "B. Allows for classes to be imported into Salesforce",
        "C. Enables the user to not pass a Session ID where it is not necessary",
        "D. Reduces the number of callouts to third-party web services",
      ],
      answer: "B",
      title: "Question 65",
    },
    {
      content:
        "Universal Containers wants to use a Customer Community with Customer Community Plus licenses so their customers can track how many of containers they are renting and when they are due back. Many of their customers are global companies with complex Account hierarchies, representing various departments within the same organization. One of the requirements is that certain community users within the same Account hierarchy be able to see several departments' containers, based on a junction object that relates the Contact to the various Account records that represent the departments. Which solution solves these requirements?",
      options: [
        "A. A Visualforce page that uses a Custom Controller that specifies without sharing to expose the records",
        "B. A Custom Report Type and a report Lightning Component on the Community Home Page",
        "C. An Apex Trigger that creates Apex Managed Sharing records based on the junction object's relationships",
        "D. A Custom List View on the junction object with filters that will show the proper records based on owner",
      ],
      answer: "B",
      title: "Question 66",
    },
    {
      content:
        "A customer requires that when the billing address field on an Account gets updated, the address field on all its related contact records should reflect the same update.How can this requirement be met with minimal customizations?",
      options: [
        "A. Create a Lightning Process on Account to update related child Contact records",
        "B. Create an After Trigger on Account to upd|ate its related contact records on update",
        "C. Create a scheduled batch job that updates all contact address fields based on the related account record.",
        "D. Create a Workflow Rule on Account to update related child Contact records",
      ],
      answer: "A",
      title: "Question 67",
    },
    {
      content:
        "A developer wants to write a generic Apex method that will compare the Salesforce Name filed between any two object records, for example to compare the Name field of an Account and an Opportunity; or the name of an Account and a Contact.How should the developer do this?",
      options: [
        "A. Use the salesforce metadata API to extract the value of each object and compare the name fields",
        "B. Cast each object into an sObject and use sObject.get(Name') to compare the Name fields.",
        "C. Use a String.replace( ) method to parse the contents of each Name field.",
        "D. Invoke a Schema,describe() function to compare the values of each Name field.",
      ],
      answer: "B",
      title: "Question 68",
    },
    {
      content:
        "Which two queries are selective SOQL queries and can be used for a large data set of 200,000 Account records? Choose 2 answers",
      options: [
        "A. SELECT id FROM ACCOUNT WHERE id IN (list of Account Ids)",
        "B. SELECT id FROM ACCOUNT WHERE Name = Null",
        "C. SELECT id FROM ACCOUNT WHERE Name = Null AND Customer_Number_c= 'ValueA'",
        "D. SELECT id FROM ACCOUNT WHERE Name = !: ' '",
      ],
      answer: "A,D",
      title: "Question 69",
    },
    {
      content:
        "An Apex Trigger creates a Contract record every time an Opportunity record is marked as Closed and Won. This trigger is working great, except (due to a recent acquisition) historical Opportunity records need to be loaded into the Salesforce instance. When a test batch of records are loaded, the Apex Trigger creates Contract records. A developer is tasked with preventing Contract records from being created when mass loading the Opportunities, but the daily users still need to have the Contract records created. What is the most extendable way to update the Apex Trigger to accomplish this?",
      options: [
        "A. Use a Hierarchy Custom Setting to disable the Trigger for the user who does the data loading.",
        "B. add the Profile Id of the user who does the data loading to the Trigger so the Trigger won't fire for this user.",
        "C. Add a Validation Rule to the Contract to prevent Contract creation by the user who does the data loading.",
        "D. Use a List Custom Setting to disable the Trigger for the user who does the data loading.",
      ],
      answer: "A",
      title: "Question 70",
    },
    {
      content:
        "A developer wants to retrieve and deploy metadata, perform simple CSV export of query results, and debug Apex REST calls by viewing JSON responses.Which tool should the developer use?",
      options: [
        "A. Workbench",
        "B. Force.com IDE",
        "C. Force.com Migration Tool",
        "D. Developer Console",
      ],
      answer: "A",
      title: "Question 71",
    },
    {
      content: "Code must have X% overall code coverage.",
      options: ["A. X= 100", "B. X = 75", "C. X = 50", "D. X = 65"],
      answer: "B",
      title: "Question 72",
    },
    {
      content:
        "A developer wrote a trigger on Opportunity that will update a custom Last Sold Date field on the Opportunity's Account whenever an Opportunity is dosed. In the test class for the trigger, the assertion to validate the Last Sold Date field fails.What might be causing the failed assertion?",
      options: [
        "A. The test class has not re-queried the Account record after updating the Opportunity.",
        "B. The test class is not using System.runAs() to run tests as a Salesforce administrator.",
        "C. The test class has not defined an Account owner when inserting the test data.",
        "D. The test class has not implemented seeAIIData-truwh the test method.",
      ],
      answer: "A",
      title: "Question 73",
    },
    {
      content:
        "An environment has two Apex Triggers: an after-update trigger on Account and an after-update trigger on Contact. The Account after-update trigger fires whenever an Account's address is updated, and it updates every associated Contact with that address. The Contact after-update trigger fires on every edit, and it updates every Campaign Member record related to the Contact with the Contact's state.Consider the following: A mass update of 200 Account records' addresses, where each Account has 50 Contacts. Each Contact has 1 Campaign Member. This means there are 10,000 Contact records across the Accounts and 10,000 Campaign Member records across the contacts.What will happen when the mass update occurs?",
      options: [
        "A. The mass update of Account address will succeed, but the Contact address updates will fail due to exceeding number of records processed by DML statements.",
        "B. There will be no error, since the limit on the number of records processed by DML statements is 50,000.",
        "C. The mass update will fail, since the two triggers fire in the same context, thus exceeding the number of records processed by DML statements.",
        "D. There will be no error, since each trigger fires within its own context and each trigger does not exceed the limit of the number of records processed by DML| statements.",
      ],
      answer: "D",
      title: "Question 74",
    },
    {
      content:
        "A developer needs to create a Lightning page for entering Order Information. An error message should be displayed if the zip code entered as part of the Order's shipping address is not numeric.What is a recommended way for the error message be displayed to the end user?",
      options: [
        "A. Use the uhinputDefaultError tag to display errors",
        "B. Use the apex:message tag to display errors",
        "C. Use the aura:component tag to display errors",
        "D. Use the uhoutputText tag to display errors",
      ],
      answer: "A",
      title: "Question 75",
    },
    {
      content:
        "A developer must create a custom pagination solution. While users navigate through pages, if the data is changed from elsewhere, users should still see the cached results first accessed.How can the developer meet these requirements?",
      options: [
        "A. Use OFFSET WITH CACHE in SOQL queries",
        "B. Use @Cache annotation",
        "C. Use OFFSET in SOQL queries",
        "D. Use a StandardSetController",
      ],
      answer: "D",
      title: "Question 76",
    },
    {
      content:
        'A developer is developing a reusable Aura component that will reside on an sObject Lightning page with the following HTML snippet:Caura: component implements-"forcethaaRecordid, flexipage:availableForAllPageTypes"><div>Hello!</div></aura:component>How can the component\'s controller get the context of the Lightning page that the sobject is an without requiring additional best coverage?',
      options: [
        "A. Add force:hasSobjectName to the implements attribute",
        "B. Create a design attribute and configure via App Builder",
        "C. Set the object type as a component attribute.",
        "D. Use the getSObjectType () method in an Apex class",
      ],
      answer: "A",
      title: "Question 77",
    },
    {
      content:
        "Consider the following queries. For these queries, assume that there are more than 200,000 Account records. These records include soft-deleted records; that is, deleted records that are still in the Recycle Bin. Note that there are two fields that are marked as External Id on the Account. These fields are Customer_Number__c and ERP_Key__c.Which two queries are optimized for large data volumes? Choose 2 answers",
      options: [
        "A. SELECT Id FROM Account WHERE Name != ' ' AND Customer Number c = 'ValueA'",
        "B. SELECT Id FROM Account WHERE Name != NULL",
        "C. SELECT Id FROM Account WHERE Name != ' ' AND IsDeleted = false",
        "D. SELECT Id FROM Account WHERE Id IN : aListVariable",
      ],
      answer: "A,D",
      title: "Question 78",
    },
    {
      content:
        'What is the transaction limit on the number of "sendEmail" method calls?',
      options: ["A. 20", "B. 10", "C. 50", "D. 100", "E. There is no limit"],
      answer:
        "B  /Reference: The reserveEmailCapacity methods let you declare how many emails you want to send prior to actually sending, allowing you to handle limit errors prematurely ",
      title: "Question 79",
    },
    {
      content:
        "Universal Containers stores user preferences in a Hierarchy Custom Setting, User_prefs_c, with a Checkbox field, show_Help_c, Company-Level defaults are stored at the organizational level, but may be overridden at the user level, If a user has not overridden preferences, then the defaults should be used.How should the Show_Help_c preference be retrieved for the current user?",
      options: [
        "A. Boolean show = User prefs_c, Show_Help_c;",
        "B. Boolean show = User_Prefs_c, getinstance( ), Show_Help _c;",
        "C. Boolean show = User_Prefs_c, getvaluesUserInfo.getUserid() ).Show_Help_c;",
        "D. Boolean show = User_Prefs_c, getValues ( ). Show _Help_c;",
      ],
      answer: "C",
      title: "Question 80",
    },
    {
      content:
        "The test method above tests an Apex trigger that the developer knows will make a lot of queries when a lot of Account are simultaneously updated to be customer.The test method fails at the Line 20 because of too many SOQL queriesWhat is the correct way to fix this?The test method above tests an Apex trigger that the developer knows will make a lot of queries when a lot of Accounts are simultaneously updated to be customers.The test method fails at the Line 20 because of too many SOQL queries.What is the correct way to fix this?",
      options: [
        "A. Add TeststartTest() before Line 18 of the code and add Test.stopTest() after line 18 of the code.",
        "B. Replace most of the Apex Trigger with Process Builder processes to reduce the number of queries in the trigger.",
        "C. Change the DataFactory class to create fewer Accounts so that the number of queries in the trigger is reduced.",
        "D. Add TesLstartTest() before and Test.stop Test() after both Line 7 of the code and Line 20 of the code.",
      ],
      answer: "A",
      title: "Question 81",
    },
    {
      content:
        "The use of the transient keyword In Visualforce Page Controllers helps with which common performance issued?",
      options: [
        "A. Improves Page Transfers",
        "B. Reduces Load Times",
        "C. Improves Query Performance",
        "D. Reduces View State",
      ],
      answer: "D",
      title: "Question 82",
    },
    {
      content:
        "Which technique can run logic when an Aura Component is loaded?",
      options: [
        "A. Use the connectedCallback(0 method.",
        "B. Use the standard doinit function in the controller.",
        "C. Use an aura:handler 'init'' event to call a function.",
        "D. Call $A. enqueueAction passing in the method to call.",
      ],
      answer: "C",
      title: "Question 83",
    },
    {
      content:
        "A large company uses Salesforce across several departments. Each department has its own Salesforce Administrator. It was agreed that each Administrator would have their own sandbox in which to test changes. Recently, users notice that fields that were recently added for one department suddenly disappear without warning. Also, Workflows that once sent emails and created tasks no longer do so. Which two statements are true regarding these issues and resolution? Choose 2 answers",
      options: [
        "A. The administrators are deploying their own Change Sets over each other, thus replacing entire Page Layouts and Workflows in Production",
        "B. A sandbox should be created to use as a unified testing environment instead of deploying Change Sets directly to production.",
        "C. The administrators are deploying their own Change Sets, thus deleting each other's fields from the objects in production.",
        "D. Page Layouts should never be deployed via Change Sets, as this causes Workflows and Field-level Security to be reset and fields to disappear.",
      ],
      answer: "A,B",
      title: "Question 84",
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
      title: "Question 85",
    },
    {
      content:
        "How can the DISTANCE and GEOLOCATION functions be used i|n SOQL queries? (Choose two.)",
      options: [
        "A. To order results by distance from a latitude or longitude",
        "B. To get the distance results from a latitude and longitude",
        "C. To filter results based on distance from a latitude and longitude",
        "D. To group results in distance ranges from a latitude and longitude",
      ],
      answer: "A,C",
      title: "Question 86",
    },
    {
      content:
        "A customer has a single Visualforce page that allows each user to input up to 1500 sales forecasts and instantly view pivoted forecast calculations. Users are complaining that the page is loading slowly, and they are seeing error messages regarding heap and view state limits.What are three recommendations to optimize page performance? (Choose three.)",
      options: [
        "A. Use JavaScript Remoting instead of controller actions",
        "B. Implement pagination and reduce records per page",
        "C. Segregate calculation functionality from input functionality",
        "D. Specify the list of sales forecasts as transient",
        "E. Create formula fields to compute pivoted forecast calculations",
      ],
      answer: "A,B,C",
      title: "Question 87",
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
      title: "Question 88",
    },
    {
      content:
        "What are three benefits of using declarative customizations over code? Choose 3 answers",
      options: [
        "A. Declarative customizations will automatically update with each Salesforce release.",
        "B. Declarative customizations are not subject to governor limits.",
        "C. Declarative customizations cannot generate run time errors.",
        "D. Declarative customizations generally require less maintenance.",
        "E. Declarative customizations do not require user testing.",
      ],
      answer: "A,B,E",
      title: "Question 89",
    },
    {
      content: "What is a potential design issue with the following code?",
      options: [
        "A. The code will result in a System.LimitException: Apex CPU time limit exceeded error",
        "B. The code will result in a System.DmException:Entity_is_Deleted error",
        "C. SOQL could be avoided by creating a formula field for StageName in Account from the related Opportunity",
        "D. The code will result in a System.LimitException : Too many script statements error",
      ],
      answer: "A",
      title: "Question 90",
    },
    {
      content:
        "Given a list of Opportunity records named opportunityList, which code snippet is best for querying all Contacts of the Opportunity's Account?A)B)C)D)",
      options: ["A. Option B", "B. Option D", "C. Option C", "D. Option A"],
      answer: "D",
      title: "Question 91",
    },
    {
      content:
        "A company's support process dictates that any time a Case is closed with a Status of 'Could not fix,' an Engineering Review custom object record should be created and populated with information from the Case, the Contact, and any of the Products associated with the Case. What is the correct way to automate this using an Apex trigger?",
      options: [
        "A. A before update trigger that creates the Engineering Review record and inserts it",
        "B. An after upsert trigger that creates the Engineering Review record and inserts it",
        "C. An after update trigger that creates the Engineering Review record and inserts it",
        "D. A before update trigger that creates the Engineering Review record and inserts it ",
      ],
      answer: "D",
      title: "Question 92",
    },
    {
      content:
        "An org contains two custom objects; Building__c and Office__c. Office__c has a Lookup field to Building__c.A developer is asked to automatically populate the Number_of_Offices__c field on the Building__c object with the count of related Office__c records anytime an Office__c record s created or deleted. The developer cannot modify the field types.Which solution meets the requirements?",
      options: [
        "A. Process Builder",
        "B. Workflow",
        "C. Apex Trigger",
        "D. Flow",
      ],
      answer: "C",
      title: "Question 93",
    },
    {
      content:
        'During the Visualforce Page execution, what step follows immediately after "Evaluate constructors on controller and extensions"?',
      options: [
        "A. Evaluate constructors, extensions, and expression on attribute definitions on any custom components present",
        "B. Evaluate expressions, <apex:page> attribute actions, and other method calls (getters/setters) on main page",
        "C. Create the view state",
        "D. Send HTML to Browser",
      ],
      answer: "A",
      title: "Question 94",
    },
    {
      content:
        "A company has a custom object Sales_Help_Request__c that has a Lookup relationship to Opportunity. The Sales_Help_Request__c has a number field, Number_of_Hours__c, that represents the amount of time spent on the Sales_Help_Request__c.A developer is tasked with creating a field, Total_Hours__c, on Opportunity that should be the sum of all of the Number_of_Hours__c values for the Sales_Help_Request__c records related to that Opportunity.What should the developer use to implement this?",
      options: [
        "A. A trigger on the Opportunity object",
        "B. A trigger on Sales_Help_Request__c",
        "C. A roll-up summary field on the Opportunity object",
        "D. A workflow rule on the Sales_Help_Request__c object",
      ],
      answer: "B",
      title: "Question 95",
    },
    {
      content:
        "The maximum view state size of a visualforce page is______________.",
      options: ["A. 256kb", "B. 165kb", "C. 1mb", "D. 135kb", "E. 65kb"],
      answer: "D",
      title: "Question 96",
    },
    {
      content:
        "As part of their quoting and ordering process, a company needs to send PDFs to their document storage system's REST endpoint that supports OAuth 2.0. Each Salesforce user must be individually authenticated with the document storage system to send the PDF.What is the optimal way for a developer to implement the authentication to the REST endpoint?",
      options: [
        "A. Named Credential with an OAuth Authentication Provider",
        "B. Hierarchy Custom Setting with an OAuth token custom field",
        "C. Hierarchy Custom Setting with a password custom field",
        "D. Named Credential with Password Authentication",
      ],
      answer: "A",
      title: "Question 97",
    },
    {
      content: "What are two benefits of using External IDs? Choose 2 answers",
      options: [
        "A. An External ID is indexed and can improve the performance of SOQL queries.",
        "B. An External ID field can be used to reference a unique ID from another, external system.",
        "C. An External ID can be used with Salesforce Mobile to make external data visible.",
        "D. An External ID can be a formula field to help create a unique key from two fields in Salesforce.",
      ],
      answer: "A,B",
      title: "Question 98",
    },
    {
      content:
        "A Visualforce page needs to make a callout to get biding information and tax information from two different REST endpoints. The information needs to be Displayed to the user at the same time and the return value of the billing information contains the input for the tax information callout. Each endpoint might take up to two minutes to process.How should a developer implement the callouts?",
      options: [
        "A. A Continuation for the billing callout and an HTTP REST callout for the tax callout",
        "B. An HTTP REST call out for both the billing callout and the tax callout",
        "C. An HTTP REST callout for the billing callout and a Continuation for the tax callout",
        "D. A Continuation for both the billing callout and the tax callout",
      ],
      answer: "D",
      title: "Question 99",
    },
    {
      content:
        "When developing a Lightning web component, which setting displays lightning-layout-items in one column on small devices, such as mobile phones, and in two columns on tablet-size and desktop-size screens?",
      options: [
        'A. Set size="6" mobile-device-size="12"',
        'B. Set size="12" medium-device-size="6"',
        'C. Set size="6" small-device-size="12"',
        'D. Set size="12" tablet-device-size="6"',
      ],
      answer: "B",
      title: "Question 100",
    },
    {
      content:
        "What Salesforce tool lets you deploy/retrieve metadata, check status of apex jobs, and check responses of REST calls?",
      options: [
        "A. Developer Console",
        "B. Streaming API",
        "C. Workbench",
        "D. Force.com Migration Tool",
      ],
      answer: "C",
      title: "Question 101",
    },
    {
      content:
        "What can be done to improve the performance of the insert trigger shown above?",
      options: ["A. ", "B. ", "C. ", "D. "],
      answer: "D",
      title: "Question 102",
    },
    {
      content:
        "A developer has a page with two extensions overriding the Standard controller for Case.What will happen when a user clicks the command button?",
      options: [
        "A. All of the three Save methods will be executed",
        "B. Save from CaseExtensionOne will be executed",
        "C. Save from CaseExtensionTwo will be executed",
        "D. Save from Case Standard Controller will be executed",
      ],
      answer: "B",
      title: "Question 103",
    },
    {
      content:
        "A developer created a custom component to display an HTML table. The developer wants to be able to use the component on different Visualforce Pages and specify different header text for the table.Which tag should the developer use inside the component?",
      options: [
        "A. <apex:param>",
        "B. <apex:variable>",
        "C. <apex:attribute>",
        "D. <apex:define>",
      ],
      answer: "C",
      title: "Question 104",
    },
    {
      content:
        "Refer to re code segment above.When following best practices for writing Apex taggers, which two lots are wrong or cause for concern? Choose 2 answers",
      options: ["A. Line 16", "B. Line 20", "C. Line 6", "D. Line 11"],
      answer: "B,C",
      title: "Question 105",
    },
    {
      content:
        "If a developer wanted to display error messages with the standard Salesforce Ul styling, what would they use?",
      options: [
        "A. <apex:outputText>",
        "B. <apex:pageMessages>",
        "C. <apex:error>",
        "D. <apex:message>",
      ],
      answer: "B",
      title: "Question 106",
    },
    {
      content:
        "An org has a requirement that addresses on Contacts and Accounts should be normalized to a company standard by Apex code any time that they are saved.What is the optimal way to implement this?",
      options: [
        "A. Apex trigger on Account that and Account that normalized the address",
        "B. Apex trigger on Account that calls the Contact trigger to normalize the address",
        "C. Apex trigger on Account and Account that call a helper class to normalize the address",
        "D. Apex trigger on Contact that calls the Account trigger to normalize the address",
      ],
      answer: "C",
      title: "Question 107",
    },
    {
      content:
        "A developer is debugging an Apex-based order creation process that has a requirement to have three savepoints, SP1, SP2, and SP3 (created in order), before the final execution of the process.During the final execution process, the developer has a routine to roll back to SP1 for a given condition. Once the condition is fixed, the code then calls a roll back to SP3 to continue with final execution. However, when the roll, back to SP3 is called, a runtime error occurs.Why does the developer receive a runtime error?",
      options: [
        "A. SP3 became invalid when SP1 was rolled back.",
        "B. The developer used too many savepoints in one trigger session.",
        "C. The developer has too many DML statements between the savepoints.",
        "D. The developer should have called SP2 before calling SP3.",
      ],
      answer: "A",
      title: "Question 108",
    },
    {
      content:
        "Consider the code above.When a user dicks on the Link of a Contact's name, what happens'",
      options: [
        "A. The outputPanel refreshes, showing the Contacts details.",
        "B. Nothing happens: the commandLink is missing an action attribute.",
        "C. The page refreshes, showing the Contact's details.",
        "D. A new page opens, showing the Contact's details.",
      ],
      answer: "A",
      title: "Question 109",
    },
    {
      content:
        'if the "PageReference.setRedirect" Apex function is set to False, what type of request is made?',
      options: [
        "A. If PageReference points to the same controller and subset of extensions, postback request, otherwise get request",
        "B. Postback request",
        "C. Get request",
      ],
      answer: "A",
      title: "Question 110",
    },
    {
      content:
        "The Salesforce instance at Universal Containers currently integrates with a third-party company to validate mailing addresses via REST services. The third-party address verification system recently changed endpoint URLs for all their set vices from https://th-addreaa-service.3pc.com to https://plc1-mailsarvice.3pc.com. Everything else remained the same. The developer updated code to reflect this endpoint change, but the mailing address validation service stopped working after the change.What else should be done to complete this web service end point change?",
      options: [
        "A. Test the callout property using HttpCalloutMock.",
        "B. Add web service IP Addresses to Trusted IP Ranges m the Network Access security controls settings.",
        "C. Use a Custom Setting with the new endpoint Instead of hard coding the URL.",
        "D. Create a new Remote Site for the new endpoint URL.",
      ],
      answer: "D",
      title: "Question 111",
    },
    {
      content:
        "A company processes Orders within their Salesforce instance. When an Order's status changes to 'Paid' it must notify the company's order management system (OMS). The OMS exposes SOAP web service endpoints to listen for when to retrieve the data from Salesforce. What is the optimal method to implement this?",
      options: [
        "A. Create an Apex trigger and make a callout to the OMS from the trigger.",
        "B. Create an Outbound Message that contains the session ID and send it to the OMS.",
        "C. Generate the Enterprise WSDL and use it to make a callout to the OMS.",
        "D. Generate the Partner WSDL and use it to make a callout to the OMS.",
      ],
      answer: "C",
      title: "Question 112",
    },
    {
      content:
        "A Visualforce page contains an industry select list and displays a table of Accounts that have a matching value in their Industry field.When a user changes the value in the industry select list, the table of Accounts should be automatically updated to show the Accounts associated with the selected industry.What is the optimal way to implement this?",
      options: [
        "A. Add an <apex: actionFunction> within the <apex : selectOptions>.",
        "B. Add an <apex: actionSupport> within the <apex: selectOptions>.",
        "C. Add an <apex: actionSupport> within the <apex:selectList>.",
        "D. Add an <apex: actionFunction> within the <apex: select List >.",
      ],
      answer: "D",
      title: "Question 113",
    },
  ],
});
