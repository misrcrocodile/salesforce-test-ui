window.testContent = window.testContent || [];
var testId = "Salesforce.Platform-Developer-II";
var testName = "Salesforce.Platform-Developer-II";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "Salesforce.Platform-Developer-II.v2022-06-21.q138",
  content: [
    {
      content: "The SOAP API...",
      options: [
        "A. Is based on REST principles and is optimized for loading or deleting large sets of data. You can use it to query, queryAll, insert, update, upsert, or delete many records asynchronously by submitting batches",
        "B. Is used to to create, retrieve, update or delete records, such as accounts, leads, and custom objects, and allows you to allows you to maintain passwords, perform searches, and much more",
        "C. Provides a powerful, convenient, and simple REST-based web services interface for interacting with Salesforce. Its advantages include ease of integration and development, and it's an excellent choice of technology for use with mobile applications and web projects",
        "D. Is used to to retrieve, deploy, create, update, or delete customizations for your org. The most common use is to migrate changes from a sandbox or testing org to your production environment",
      ],
      answer: "B",
      title: "Question 1",
    },
    {
      content:
        "A developer receives the exception 'SOQL query not selective enough' when performing a query on an object with a large amount of dat a. Which step should be taken to resolve the issue?",
      options: [
        "A. Perform the SOQL query via a call to the REST API.",
        "B. Move the SOQL query to within an asynchronous process.",
        "C. Use an ID in the WHERE clause of the SOQL query.",
        "D. Perform the SOQL query as part of a FOR loop.",
      ],
      answer: "C",
      title: "Question 2",
    },
    {
      content:
        "A company requires an external system to be notified whenever an account is updated.What LimitException could the following code trigger?",
      options: [
        "A. System.LimitException: Too many callouts",
        "B. System.CalloutException: Callout from triggers are currently not supported",
        "C. System.LimitException: Too many future calls",
        "D. System.LimitException: Too many SOQL queries",
      ],
      answer: "C",
      title: "Question 3",
    },
    {
      content:
        "A developer wrote an Apex class to make several callouts to an external system.If the URLs used in these callouts will change often, which feature should the developer use to minimize changes needed to the Apex class?",
      options: [
        "A. Remote Site Settings",
        "B. Session Id",
        "C. Named Credentials",
        "D. Connected Apps",
      ],
      answer:
        "C  Explanation Explanation/Reference: https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/ apex_callouts_named_credentials.htm ",
      title: "Question 4",
    },
    {
      content:
        "In an organization that has multi-currency enabled, a developer is tasked with building a Lighting Component that displays the top ten Opportunities most recently access by the logged in user. The developer must ensure the Amount and LastModifiedDate field values are displayed according to the user's locale.What is the most effective approach to ensure values displayed respect the users locale settings?",
      options: [
        "A. Use the FORMAT() function in the SOQL query.",
        "B. Use the FOR VIEW clause in the SOQL Query.",
        "C. Use a wrapper class to format the values retrieved via SOQL.",
        "D. Use REGEX expressions to format the values retrieved via SOQL.",
      ],
      answer: "A",
      title: "Question 5",
    },
    {
      content:
        "A company has a custom object, Order__c, that has a custom picklist field, Status__c, with values of 'New', 'In Progress', or 'Fulfilled' and a lookup field, Contact__c, to Contact.Which SOQL query will return a unique list of all the Contact records that have no 'Fulfilled' Orders?SELECT Id FROM Contact WHERE Id NOT IN (SELECT Id FROM Order__c WHERE",
      options: [
        "A. SELECT Id FROM Contact WHERE Id NOT IN (SELECT Contact__c FROM Order__c WHERE",
        "B. Status__c = 'Fulfilled')SELECT Contact__c FROM Order__c WHERE Status__c <> 'Fulfilled'",
        "C. Status__c = 'Fulfilled')",
        "D. Status__c = 'Fulfilled')SELECT Contact__c FROM Order__c WHERE Id NOT IN (SELECT Id FROM Order__c Where",
      ],
      answer: "C",
      title: "Question 6",
    },
    {
      content:
        "A developer created and tested a Visualforce page in their developer sandbox, but now receives reports that users are encountering ViewState errors when using it in Production. What should the developer ensure to correct these errors?",
      options: [
        "A. Ensure profiles have access to the Visualforce page.",
        "B. Ensure properties are marked as private.",
        "C. Ensure queries do not exceed governor limits.",
        "D. Ensure properties are marked as Transient.",
      ],
      answer: "D",
      title: "Question 7",
    },
    {
      content:
        "Recently a Salesforce org's integration failed because it exceeded the number of allowed API calls in a24-hour period. The integration handles a near real-time, complex insertion of data into Salesforce. The flow of data is as follows: The integration looks up Contact records with a given email address and, if found, the integration adds a Task to the first matching Contact it finds. If a match is not found, the integration looks up Lead records with a given email address and, if found, the integration adds a Task to the first matching Lead it finds. If a match is not found, the integration will create a Lead and a Task for that newly created Lead. What is one way in which the integration can stay near real-time, but not exceed the number of allowed API calls in a 24-hour period?",
      options: [
        "A. Create several Apex InboundEmailHandlers to accept calls from the third-party system, thus bypassing the API limits.",
        "B. write a custom Apex web service that, given an email address, does all of the logic the integration code was doing.",
        "C. Use the REST API as well as the SOAP API to effectively double the API calls allowed in a 24-hour period.",
        "D. Create an Inbound Message that, using Flow, can do all of the logic the integration code was doing.",
      ],
      answer: "A",
      title: "Question 8",
    },
    {
      content:
        "A company has a custom component that allows users to search for records of a certain object type by invoking an Apex Controller that returns a list of results based on the user's input, when the search Is completed, a searchComplete event is fired, with the results put in a results attribute of the event. The component is designed to be used within other components and may appear on a single page more than once.What is the optimal code that should be added to fire the event when the search has completed?",
      options: ["A. ", "B. ", "C. ", "D. "],
      answer: "A",
      title: "Question 9",
    },
    {
      content:
        "A developer has requirement to query three fields (id, name, Type) from an Account and first and last names for all Contacts associated with the Account.Which option is the preferred optimized method to achieve this for the Account named 'Ozene Electronics'?",
      options: [
        "A. Account a = (SELECT ID, Name, Type, (select contat,firstName, Contact,LastName from Account, Contacts) from Account where name; Ozone Electronic' Limit 1 );",
        "B. List 1Contacts = new list ( );for(Contact c ; 1Select firstname, lastname Account, Name Account,ID Account, Type from Contact where Account: Name=' electronics')) ( iContacts.add(c);)",
        "C. Account a = (SELECT ID, Name, Type from Account where name= Ozone Electronics;) list 1contacts = (SELECT firstname, lastname from Contacts where accountid=: a -ID0;",
        "D. List 1Accounts = (Select ID, Name, Type from Account Join (Select ID, firstname, lastname form Contact where contact account , name 'ozone electronics));",
      ],
      answer: "A",
      title: "Question 10",
    },
    {
      content:
        "An org has a custom object, Registeration_c that has a lookup relationship to the Opportunity object.What should a developer use to create a stand-alone Vlsualforce page that displays the Registration__c records related to an Opportunity.",
      options: [
        "A. A standard controller with a controller extension",
        "B. A custom controler",
        "C. A standard controller",
        "D. A controler extension",
      ],
      answer: "C",
      title: "Question 11",
    },
    {
      content:
        "Which statement is true about using ConnectApi namespace (also called Chatter in Apex)? (Choose two.)",
      options: [
        "A. Chatter in Apex operations are synchronous, and they occur immediately",
        "B. Chatter in Apex methods honor the 'with sharing' and 'without sharing' keywords",
        "C. Many test methods related to Chatter in Apex require the IsTest (SeeAIIData=true) annotation",
        "D. Chatter in Apex methods do not run in system mode; they run in the context of the current user",
      ],
      answer: "C,D",
      title: "Question 12",
    },
    {
      content:
        "A developer migrated functionality from JavaScript demoting to a Lightning web component and wants to use the existing getOpportunities() method to provide data.Which modification to the method is necessary?",
      options: [
        "A. The method must return a JSON Object.",
        "B. A The method must be decorated with AuraEnabled.",
        "C. The method must return a String of a serialized JSON Array.",
        "D. The method must be decorated with (cacheable=true).",
      ],
      answer: "B",
      title: "Question 13",
    },
    {
      content:
        "What is the correct syntax for calling a controller action from a Visualforce page and updating part of the page once the action is completed? Choose 2 answers",
      options: [
        'A. < apex: commandFunction action="{ !Save}" value="Save" rendered="thePageBlock"/>',
        'B. < apex:commandButton action="{ !Save}" value="Save" redraw="thePageBlock"/>',
        'C. < apex:actionFunction action="{ !Save}" name="Save" rerender="thePageBlock"/>',
        'D. < apex:actionSupport action="{ !Save} " event="" rerender="thePageBlock"/>',
      ],
      answer: "C,D",
      title: "Question 14",
    },
    {
      content:
        "A developer has built a multi-page wizard using a single Custom Controller to query and update data. Users are complaining that the pages are loading slowly. What will improve performance? Choose 3 answers",
      options: [
        "A. Setting the Apex Page attribute cache=true.",
        "B. Using selective queries.",
        "C. Using actionRegion and rerender.",
        "D. Reducing the view state.",
        "E. Turning off the standard stylesheet.",
      ],
      answer: "A,B,D",
      title: "Question 15",
    },
    {
      content:
        "A company represents their customers as Accounts in Salesforce. All customers have a unique Customer_Number__c that is unique across all of the company's systems. They also have a custom Invoice__c object, with a Lookup to Account, to represent invoices that are sent out from their external system.This company wants to integrate invoice data back into Salesforce so Sales Reps can see when a customer is paying their bills on time.What is the optimal way to implement this?",
      options: [
        "A. Create a cross-reference table in the custom invoicing system with the Salesforce Account ID of each Customer and insert invoice data nightly.",
        "B. Ensure Customer_Number__c is an External ID and that a custom field Invoice_Number__c is an External ID and Upsert invoice data nightly.",
        "C. Use Salesforce Connect and external data objects to seamlessly import the invoice data into Salesforce without custom code.",
        "D. Query the Account Object upon each call to insert invoice data to fetch the Salesforce ID corresponding to the Customer Number on the invoice.",
      ],
      answer: "B",
      title: "Question 16",
    },
    {
      content:
        "Which of the following exceptions cannot be caught and will force an error? (Choose 3)",
      options: [
        "A. ListException",
        "B. DMLException",
        "C. License exceptions",
        "D. AssertException",
        "E. SObjectExceptions",
        "F. LimitException",
      ],
      answer: "C,D,F",
      title: "Question 17",
    },
    {
      content:
        "A company processes Orders within their Salesforce instance. When an Order's status changes to 'Paid' it must notify the company's order management system (OMS). The OMS exposes SOAP web service endpoints to listen for when to retrieve the data from Salesforce.What is the optimal method to implement this?",
      options: [
        "A. Generate the Enterprise WSDL and use it to make a callout to the OMS.",
        "B. Generate the Partner WSDL and use it to make a callout to the OMS.",
        "C. Create an Outbound Message that contains the session ID and send it to the OMS.",
        "D. Create an Apex trigger and make a callout to the OMS from the trigger.",
      ],
      answer: "A  Explanation/Reference: ",
      title: "Question 18",
    },
    {
      content:
        "An org has a requirement that the Shipping Address on the Account must be validated by a third-party web service, before the Account is allowed to be inserted.What is the optimal way to meet this requirement?",
      options: [
        "A. Make a callout to the web service from an after insert trigger.",
        "B. Make a callout to the web service from a before insert trigger.",
        "C. Make a callout to the web service from a custom Visualforce controller.",
        "D. Make a callout to the web service from a standard Visualforce controller.",
      ],
      answer: "B",
      title: "Question 19",
    },
    {
      content:
        "A developer wants to integrate invoice and invoice line data into Salesforce from a custom billing system. The developer decides to make realtime callouts from the billing system using the SOAP API. Unfortunately, the developer is getting a lot of errors when inserting the invoice line data because the invoice header record doesn't exist yet.What will help ensure ne transactional Integrity of the integration?",
      options: [
        "A. Develop a custom Apex web service to handle a custom JSON data structure with both invoice header and related invoice lines.",
        "B. Use an ETL tool and the Bulk API running nightly, thus ensuring all of the data is handled at the same time.",
        "C. Set the AIIOrNoneHeader to true when calling each of create() for invoice headers and create() for invoice lines.",
        "D. Create the invoice header and the related invoice lines in the same create() call leveraging External Ids.",
      ],
      answer: "A",
      title: "Question 20",
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
      answer: "B",
      title: "Question 21",
    },
    {
      content:
        "A developer is tasked with ensuring that email addresses entered into the system for Contacts and for a Custom Object called Survey_Response_ _c do not belong to a list of blocked domains. The list of blocked domains will be stored in a custom object for ease of maintenance by users. Note that the Survey_Response__c object is populated via a custom Visualforce page.What is the optimal way to implement this?",
      options: [
        "A. Implement the logic in an Apex trigger on Contact and also implement the logic within the Custom Visualforce page controller",
        "B. Implement the logic in a Validation Rule on the Contact and a Validation Rule on the Survey_Response_ _c object",
        "C. Implement the logic in a helper class that is called by an Apex trigger on Contact and from the Custom Visualforce page controller",
        "D. Implement the logic in the Custom Visualforce page controller and call that method from an Apex trigger on Contact",
      ],
      answer: "C",
      title: "Question 22",
    },
    {
      content:
        "A developer has created a Team Member sObject that has a Master-Detail relationship to a Project sObject and a Lookup relationship to the User sObject. The developer must ensure that a User listed on a Team Member record has Read-Write access to the parent Project record. How can the developer accomplish this if the Project sObject has a Private sharing model and thousands of Project records?",
      options: [
        "A. Create a Project Sharing Rule that shares to the Team Member Group",
        "B. Create a Controller that uses the Without Sharing keyword.",
        "C. Create a Team Member Trigger that inserts Project_Share records.",
        "D. Create a Criteria-Based Sharing Rule on the Project sObject.",
      ],
      answer: "C",
      title: "Question 23",
    },
    {
      content:
        "A developer is writing unit tests for the following method:Which assertion would be used in a negative test case?",
      options: [
        "A. System.assertEquals (true, isFreezing('O')",
        "B. System.assertEquals(true, isFreezingClOO'))",
        "C. System.assertEquals(true, isFreezing(null))",
        "D. System.assertEquals(null, isFreezing('asdf))",
      ],
      answer: "D",
      title: "Question 24",
    },
    {
      content:
        "A customer has a single Visualforce page that allows each user to input up to 1500 sales forecasts and instantly view pivoted forecast calculations. Users are complaining that the page is loading slowly, and they are seeing error messages regarding heap and view state limits. What are three recommendations to optimize page performance?",
      options: [
        "A. Segregate calculation functionality from input functionality.",
        "B. Specify the list of sales forecasts as transient.",
        "C. Use JavaScript Remoting instead of controller actions.",
        "D. Implement pagination and reduce records per page.",
        "E. Create formula fields to compute pivoted forecast calculations.",
      ],
      answer: "A,C,E",
      title: "Question 25",
    },
    {
      content:
        ".A developer is asked to update data in an org based on new business rules. The new rules state that Accounts with the type set to 'Customer' should have a status of 'Active,' and Accounts with the type set to 'Prospect' should have a status of 'Pending.' No other changes to data should be made. Which code block will accurately meet the business requirements?A)B)C)D)",
      options: ["A. Option B", "B. Option D", "C. Option A", "D. Option C"],
      answer: "B",
      title: "Question 26",
    },
    {
      content:
        "Universal Containers needs to integrate with a Heroku service that resizes product images submitted by users.What are two alternatives to implement the integration and protect against malicious calls to Heroku app's endpoint? Choose 2 answers",
      options: [
        "A. Create a trigger that uses an @future Apex HTTP callout passing JSON serialized data; therefore the Heroku app can automatically reply back to the callout with the resized images in Salesforce.",
        "B. Create a Workflow Rule with an Outbound Message and select Send Session ID so that the Heroku app can use it to send the resized images back to Salesforce.",
        "C. Create a Workflow Rule with an Outbound Message allowing the Heroku app to automatically store the resized images in Salesforce.",
        "D. Create a trigger that uses an @future Apex HTTP callout passing JSON serialized data and some form of pre-shared secret key. so that the Heroku app can authenticate requests and store the resized images in Salesforce.",
      ],
      answer: "B,C",
      title: "Question 27",
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
      answer: "A",
      title: "Question 28",
    },
    {
      content:
        "A company wants to build a custom Lightning Component that will display a specified Account Field Set and that can only be added to the Account record page. Which design resource configuration should be used?A)B)C)D)",
      options: ["A. Option D", "B. Option A", "C. Option B", "D. Option C"],
      answer: "A",
      title: "Question 29",
    },
    {
      content:
        "What is the output of the following code snippet? l Contact con = new Contact( LastName = 'Smith', Department = 'Admin'); 2 insert con; 3 4 Savepoint sp_finance = Database.setSavepoint(); 5 con.Department'finance'; 6 update con; 7 8 Savepoint sp_hr = Database.setSavepoint(); 9 con.Department = 'HR'; 10 update con; 11 12 Database.rollback(sp_finance); l3 Database.rollback(sp_hr);",
      options: [
        "A. The contact record will be saved with department value Finance.",
        "B. A runtime error will be thrown on line 13.",
        "C. A runtime error will be thrown on line 12.",
        "D. The contact record will be saved ME department value HR.",
      ],
      answer: "B",
      title: "Question 30",
    },
    {
      content:
        "Universal Containers stores user preferences in a Hierarchy Custom Setting, User_Prefs_c, with a Checkbox field, Show_Help_c. Company-level defaults are stored at the organizational level, but may be overridden at the user level. If a user has not overridden preferences, then the defaults should be used.How should the Show_Help_c preference be retrieved for the current user?",
      options: [
        "A. Boolean show = User_Prefs__c.getValues(UserInfo.getUserId()).Show_Help__c;",
        "B. Boolean show = User_Prefs__c.getInstance().Show_Help__c;",
        "C. Boolean show = User_Prefs__c.Show_Help__c;",
        "D. Boolean show = User_Prefs__c.getValues().Show_Help__c;",
      ],
      answer:
        "A  Explanation/Reference: https://developer.salesforce.com/forums/?id=906F00000008ySqIAI ",
      title: "Question 31",
    },
    {
      content:
        "A developer Is asked to develop a new AppExthange application. A feature of the program creates Survey records when a Case reaches a certain stage and Is of a certain Record Type. This feature needs to be configurable, as different Salesforce instances require Surveys at different times. Additionally, the out-of-the-box AppExchange app needs to come with a set of best practice settings that apply to most customers.What should the developer use to store and package the custom configuration settings for the app?",
      options: [
        "A. Custom Settings",
        "B. Custom Objects",
        "C. Process Builder",
        "D. Custom Metadata",
      ],
      answer: "B",
      title: "Question 32",
    },
    {
      content: "Where in a query can you use Geolocation and Distance?",
      options: [
        "A. Order By clause",
        "B. Filter clause",
        "C. Select clause",
        "D. Group By clause",
      ],
      answer: "A,B",
      title: "Question 33",
    },
    {
      content:
        "Which of the following elements can be members of a public group? (Choose three.)",
      options: [
        "A. Users",
        "B. Profiles",
        "C. Roles",
        "D. Territories",
        "E. Case Teams",
      ],
      answer: "A,C,D",
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
        'B  Explanation Explanation/Reference: Explanation: "Scope" parameter in "executeBatch" can be set up to 2,000 records ',
      title: "Question 35",
    },
    {
      content:
        "What is the transaction limit for the number of records for SOQL queries?",
      options: [
        "A. 10,000",
        "B. 20,000",
        "C. 50,000",
        "D. 5,000",
        "E. There is no limit",
      ],
      answer: "C",
      title: "Question 36",
    },
    {
      content:
        '<lightning:layout multipleRows="true"><lightning:layoutItem size="12">{!v.account.Name}</lightning:layoutItem><lightning:layoutItem size="12">{!v.account.AccountNumber}</lightning:layoutItem><lightning:layoutItem size="12">{!v.account.Industry}</lightning:layoutItem></lightning:layout>Refer to the component code above. The information displays as expected (in three rows) on a mobile device.However, the information is not displaying as desired (in a single row) on a desktop or tablet.Which option has the correct component changes to display correctly on desktops and tablets?<lightning:layout multipleRows="true">',
      options: [
        'A. <lightning:layoutItem size="12" mediumDeviceSize="4">{!v.account.Name}</lightning:layoutItem><lightning:layoutItem size="12" mediumDeviceSize="4">{!v.account.AccountNumber}</lightning:layoutItem><lightning:layoutItem size="12" mediumDeviceSize="4">{!v.account.Industry}</lightning:layoutItem></lightning:layout><lightning:layout multipleRows="true">',
        'B. <lightning:layoutItem size="12" largeDeviceSize="4">{!v.account.Name}</lightning:layoutItem><lightning:layoutItem size="12" largeDeviceSize="4">{!v.account.AccountNumber}</lightning:layoutItem><lightning:layoutItem size="12" largeDeviceSize="4">{!v.account.Industry}</lightning:layoutItem></lightning:layout><lightning:layout multipleRows="true">',
        'C. <lightning:layoutItem size="12" mediumDeviceSize="6">{!v.account.Name}</lightning:layoutItem><lightning:layoutItem size="12" mediumDeviceSize="6">{!v.account.AccountNumber}</lightning:layoutItem><lightning:layoutItem size="12" mediumDeviceSize="6">{!v.account.Industry}</lightning:layoutItem></lightning:layout>',
        'D. <lightning:layoutItem size="12" mediumDeviceSize="6" largeDeviceSize="4">{!v.account.Name}</lightning:layoutItem><lightning:layoutItem size="12" mediumDeviceSize="6" largeDeviceSize="4">{!v.account.AccountNumber}</lightning:layoutItem><lightning:layoutItem size="12" mediumDeviceSize="6" largeDeviceSize="4">{!v.account.Industry}</lightning:layoutItem></lightning:layout><lightning:layout multipleRows="true">',
      ],
      answer: "C",
      title: "Question 37",
    },
    {
      content:
        "Refer to re code segment above.When following best practices for writing Apex taggers, which two lots are wrong or cause for concern?Choose 2 answers",
      options: ["A. Line 16", "B. Line 11", "C. Line 6", "D. Line 20"],
      answer: "C,D",
      title: "Question 38",
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
      answer: "D",
      title: "Question 39",
    },
    {
      content:
        "Recently a Salesforce org's integration failed because it exceeded the number of allowed API calls in a 24-hour period. The integration handles a near real-time, complex insertion of data into Salesforce. The flow of data is as follows: * The integration looks up Contact records with a given email address and, if found, the integration adds a Task to the first matching Contact it finds. If a match is not found, the integration looks up Lead records with a given email address and, if found, the integration adds a Task to the first matching Lead it finds. * If a match is not found, the integration will create a Lead and a Task for that newly created Lead. What is one way in which the integration can stay near real-time, but not exceed the number of allowed API calls in a 24-hour period?",
      options: [
        "A. Create several Apex InboundEmailHandlers to accept calls from the third-party system, thus bypassing the API limits.",
        "B. Create an Inbound Message that, using Flow, can do all of the logic the integration code was doing.",
        "C. write a custom Apex web service that, given an email address, does all of the logic the integration code was doing.",
        "D. Use the REST API as well as the SOAP API to effectively double the API calls allowed in a 24-hour period.",
      ],
      answer: "A",
      title: "Question 40",
    },
    {
      content:
        "Consider the above trigger intended to assign the Account to the manager of the Account''s region. Which two changes should a developer make in this trigger to adhere to best practices? Choose 2 answers",
      options: [
        "A. Move the Region__c query to outside the loop.",
        "B. Use a Map accountMap instead of List accountList.",
        "C. Use a Map to cache the results of the Region__c query by Id.",
        "D. Remove the last line updating accountList as it is not needed.",
      ],
      answer: "B,D",
      title: "Question 41",
    },
    {
      content:
        "Universal Containers uses a custom Lightning page to provide a mechanism to perform a step-by-step wizard search for Accounts. One of the steps in the wizard is to allow the user to input text into a text field, ERP_Number__c, that is then used in a query to find matching Accounts.A developer receives the exception 'SOQL query not selective enough.Which step should be taken to resolve the issue?",
      options: [
        "A. Mark the lRP_Number__c field as an external ID.",
        "B. Mark the ERP_Number__c field as required.",
        "C. Perform the SOQL query as part of a for loop.",
        "D. Move the SOQL query to within an asyncronous process.",
      ],
      answer: "B",
      title: "Question 42",
    },
    {
      content:
        "Universal Containers needs to integrate with a Heroku service that resizes product images submitted by users.What are two alternatives to implement the integration and protect against malicious calls to the Heroku app's endpoint? Choose 2 answers",
      options: [
        "A. Create a trigger that uses an ©future Apex HTTP callout passing JSON serialized data and some form of pre-shared secret key, so that the Heroku app can authenticate requests and store the resized images in Salesforce.",
        "B. Create a Workflow Rule with an Outbound Message allowing the Heroku app to automatically store the resized images in Salesforce",
        "C. Create a Workflow Rule with an Outbound Message and select Send Session ID so that the Heroku app can use it to send the re images back to Salesforce.",
        "D. Create a trigger that uses an ©future Apex HTTP callout passing JSON serialized data; therefore the Heroku app can automatically reply back to the callout with the resized images in Salesforce.",
      ],
      answer: "A,C",
      title: "Question 43",
    },
    {
      content:
        "A developer writes the following code:While testing the code, the developer receives the following error message: System.CalloutException : You have uncommitted work pending What should the developer do? (Choose two.)",
      options: [
        "A. Move the web service callout into an @future method",
        "B. Use Database.insert (order, true) to immediately commit any database changes",
        "C. Ensure all callouts are completed prior to executing DML statements",
        "D. Use the asyncSend() method of the HTTP class to send the request in async context",
      ],
      answer: "A,C",
      title: "Question 44",
    },
    {
      content:
        "What is the optimal technique a developer should use to programmatically retrieve Global Picklist options in a Test Method?",
      options: [
        "A. Use the Schema namespace.",
        "B. Perform a callout to the Metadata API.",
        "C. Use a static resource",
        "D. performs a SOQL Query.",
      ],
      answer: "A",
      title: "Question 45",
    },
    {
      content:
        'Salesforce users consistently receive a "Maximum trigger depth exceeded" error when saving m Account.How can a developer fix this error?',
      options: [
        "A. Modify the trigger to use the isMultiThread=true annotation.",
        "B. Use a helper class to set a Boolean to TRUE the first time a trigger is fired, and then; modify the trigger to only fire when modify the trigger to only fire when the Boolean is FALSE.",
        "C. Split the trigger logic into two separate triggers.",
        "D. Convert trigger to use the future annotation, and chain any subsequent trigger invocations to the Account object.",
      ],
      answer: "B",
      title: "Question 46",
    },
    {
      content:
        "A developer is building a Lightning web component that displays quantity, unit price, and the total for an order line item. The total is calculated dynamically as the quantity multiplied by the unit price.What must be added to display the total?",
      options: [
        "A. Add calculate Total() {return quantity * unitPrice;} to the javaScript and Total : {calculate Total()} in the template.",
        "B. Add Total: {quantity * UnitPrice} in the template.",
        "C. Add get total() { return quantity * unitPrice;} to the JavaScript and Total: {total} in the template.",
        "D. Add Total; {multiple quantit,y unitprice)} in the template.",
      ],
      answer: "A",
      title: "Question 47",
    },
    {
      content:
        "Which two queries are selective SOQL queries and can be used for a large data set of 200,000 Account records? Choose 2 answers",
      options: [
        "A. SELECT id FROM ACCOUNT WHERE Name = Null AND Customer_Number_c= 'ValueA'",
        "B. SELECT id FROM ACCOUNT WHERE id IN (list of Account Ids)",
        "C. SELECT id FROM ACCOUNT WHERE Name = Null",
        "D. SELECT id FROM ACCOUNT WHERE Name = !: ' '",
      ],
      answer: "B,D",
      title: "Question 48",
    },
    {
      content:
        "Which use case is an appropriate fit for the ©future asynchronous Apex method? (Choose two.)",
      options: [
        "A. A developer has jobs that need larger query results than regular transactions allow",
        "B. A developer needs to segregate DML operations and bypass the mixed save DML error",
        "C. A developer has long-running methods and needs to prevent delaying an Apex transaction",
        "D. A developer has long-running jobs with large data volumes that need to be performed in batches",
      ],
      answer: "B,C",
      title: "Question 49",
    },
    {
      content:
        "What are three benefits of using declarative customizations over code? (Choose three.)",
      options: [
        "A. Declarative customizations generally require less maintenance.",
        "B. Declarative customizations will automatically update with each Salesforce release.",
        "C. Declarative customizations do not require user testing.",
        "D. Declarative customizations are not subject to governor limits.",
        "E. Declarative customizations cannot generate run time errors.",
      ],
      answer: "A,B,D",
      title: "Question 50",
    },
    {
      content:
        "A developer is trying to decide between creating a Visualforce component or a Lightning component for a custom screen. Which functionality consideration impacts the final decision?",
      options: [
        "A. Will the screen make use of a JavaScript framework?",
        "B. Does the screen need to be accessible from the Lightning Experience UI?",
        "C. Will the screen be accessed via a mobile app?",
        "D. Does the screen need to be rendered as a PDF?",
      ],
      answer: "B",
      title: "Question 51",
    },
    {
      content:
        "The maximum view state size of a visualforce page is __________.",
      options: ["A. 135kb", "B. 65kb", "C. 165kb", "D. 256kb", "E. 1mb"],
      answer: "A",
      title: "Question 52",
    },
    {
      content:
        "A developer has generated Apex code from a WSDL for an external web service. The web service requires Basic authentication.What code should the developer use to authenticate?",
      options: [
        "A. stub.authentication.put ('Authorization','Basic QthZGprjpchVulHNchFtZQ')",
        "B. Http.setAuthentication('Basic QthZGprjpchVulHNchFtZQ')",
        "C. Http.setHeader ('Authorization' , 'Basic QthZGprjpchVulHNchFtZQ!)",
        "D. stub.inputHttpHeaders_x.put('Authorization' , 'Basic QthZGprJpchVulHNchFtZQ')",
      ],
      answer: "D",
      title: "Question 53",
    },
    {
      content: "Code must have X% overall code coverage.",
      options: ["A. X = 100", "B. X = 75", "C. X = 65", "D. X = 50"],
      answer: "B  All triggers must have at least 1% code coverage ",
      title: "Question 54",
    },
    {
      content:
        "A developer must perform a complex SOQL query that joins two objects in a Lightning component. how can the Lightning component execute the query?",
      options: [
        "A. Invoke an Apex dass with the method annotated as ©AiraEnabled to perform the query.",
        "B. Create a Process Builder to execute the query and invoke from the Lightning component.",
        "C. Write the query in a custom Lightning web component wrapper and invoke from the Lightning component.",
        "D. Use the SaJesforce Streaming API to perform the SOQL query.",
      ],
      answer: "A",
      title: "Question 55",
    },
    {
      content: "Choose the correct definition for <apex:actionRegion>",
      options: [
        "A. Allows for controller methods to be called directly from Javascript. Must be encapsulated in<apex:form> tags. Unlike actionSupport, these function<apex:actionPoller>s can be called directly from Javascript code",
        "B. Adds AJAX support to another component (e.g. onClick, onMouseUp, onFocus, etc.)",
        "C. Sends an AJAX request according to the time interval you specify. If this ever gets re-rendered, it resets",
        'D. Can be associated with an AJAX request (actionFunction/actionSupport/actionPoller) and shows content conditionally depending on the status of the request (in progress/complete). Use the "id" field to specify name; use "status" field on related components to connect them',
        "E. Signifies which components should be processed by the server when an AJAX request is generated",
      ],
      answer: "E",
      title: "Question 56",
    },
    {
      content:
        "Which two relationship queries use the proper syntax? Choose 2 answers",
      options: [
        "A. SELECT Name, (SELECT LastName FROM Contacts) FROM Account",
        "B. SELECT Name, (SELECT LastName FROM Contacts__r) FROM Account",
        "C. SELECT Id, Name, Account __r.Name FROM Contact WHERE Account r.Industry = 'Media'",
        "D. SELECT Id, Name, Account.Name FROM Contact WHERE Account.Industry = 'Media'",
      ],
      answer: "A,B",
      title: "Question 57",
    },
    {
      content:
        "There are user complaints about slow render times of a custom data table within a visualforce page that loads thousands of Account records at once.What can a developer do to help alleviate such issues?",
      options: [
        "A. Upload a third-party data table library as a static resource.",
        "B. Use the transient keyword in the Apex code when querying the Account records.",
        "C. Use JavaScript remoting to query the accounts.",
        "D. Use the standard Account List controller and implement pagination.",
      ],
      answer: "D",
      title: "Question 58",
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
      title: "Question 59",
    },
    {
      content:
        "A large company uses Salesforce across several departments. Each department has its own Salesforce Administrator. It was agreed that each Administrator would have their own sandbox in which to test changes.Recently, users notice that fields that were recently added for one department suddenly disappear without warning. Also, Workflows that once sent emails and created tasks no longer do so.Which two statements are true regarding these issues and resolution? (Choose two.)",
      options: [
        "A. Page Layouts should never be deployed via Change Sets, as this causes Workflows and Field-level Security to be reset and fields to disappear.",
        "B. The administrators are deploying their own Change Sets over each other, thus replacing entire Page Layouts and Workflows in Production.",
        "C. A sandbox should be created to use as a unified testing environment instead of deploying Change Sets directly to production.",
        "D. The administrators are deploying their own Change Sets, thus deleting each other's fields from the objects in production.",
      ],
      answer: "A,B",
      title: "Question 60",
    },
    {
      content:
        "A customer has a single Visualforce page that allows each user to input up to 1500 sales forecasts and instantly view pivoted forecast calculations. Users are complaining that the page is loading slowly, and they are seeing error messages regarding heap and view state limits.What are three recommendations to optimize page performance? (Choose three.)",
      options: [
        "A. Specify the list of sales forecasts as transient",
        "B. Segregate calculation functionality from input functionality",
        "C. Create formula fields to compute pivoted forecast calculations",
        "D. Use JavaScript Remoting instead of controller actions",
        "E. Implement pagination and reduce records per page",
      ],
      answer: "B,D,E",
      title: "Question 61",
    },
    {
      content:
        "trigger AssignOwnerByRegion on Account ( before insert, before update ){List<Account> accountList = new List<Account>();for( Account anAccount : trigger.new ){Region__c theRegion = [SELECT Id, Name, Region Manager__cFROM Region__cWHERE Name = :anAccount.Region_Name__c];anAccount.OwnerId = theRegion.Region_Manager__c;accountList.add( anAccount );}update accountList;}Consider the above trigger intended to assign the Account to the manager of the Account's region.Which two changes should a developer make in this trigger to adhere to best practices? (Choose two.)",
      options: [
        "A. Use a Map to cache the results of the Region__c query by Id.",
        "B. Use a Map accountMap instead of List accountList.",
        "C. Remove the last line updating accountList as it is not needed.",
        "D. Move the Region__c query to outside the loop.",
      ],
      answer: "A,B",
      title: "Question 62",
    },
    {
      content: "Which statement is true about scheduled Apex? Choose 3 answers",
      options: [
        "A. Scheduled Apex only supports asynchronous callouts through the use of @future methods and Apex Batches.",
        "B. Scheduled Apex is executed only when system resources are available.",
        "C. Scheduled Apex classes can only be defined by extending the Schedule base class.",
        "D. There is no limit on Scheduled Apex jobs because they are executed asynchronously",
        "E. The schedule of an Active scheduled Apex class cannot be updated through the Salesforce User Interface.",
      ],
      answer: "A,B,E",
      title: "Question 63",
    },
    {
      content:
        "A company has a custom object, Sales Demo Request, that has a lookup to an Opportunity. It is required that a Sales Demo Request record be created when an Opportunity's Probability is greater than 50%. What is the optimal way to automate this?",
      options: [
        "A. Build a Process on Opportunity",
        "B. Build a Flow on Opportunity.",
        "C. Create a Workflow on Opportunity.",
        "D. Use an Apex Trigger on Opportunity.",
      ],
      answer: "D",
      title: "Question 64",
    },
    {
      content:
        "A company notices that their unit tests in a test class with many methods to create many records for prerequisite reference data are slow.What can a developer to do address the issue?",
      options: [
        "A. Move the prerequisite reference data setup to a TestDataFactory and call that from each test method.",
        "B. Move the prerequisite reference data setup to a static method in the test class and call that from each test method.",
        "C. Move the prerequisite reference data setup to the constructor for the test class.",
        "D. Move the prerequisite reference data setup to a @testSetup method in the test class.",
      ],
      answer: "A",
      title: "Question 65",
    },
    {
      content:
        "What is the value of \"i\" printed by the System.debug statement, if the value of \"j\" is 2 at the end of the transaction? insert new Account[]{new Account(Name = 'yyy'), new Account(Name = 'yyy')}; integer i = 0; integer j; for (Account[] tmp : [SELECT Id FROM Account WHERE Name = 'yyy']) j=tmp.size(); i++; System.debug(i);",
      options: ["A. 0", "B. 1", "C. 2", "D. 3"],
      answer: "B",
      title: "Question 66",
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
      title: "Question 67",
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
      answer: "C",
      title: "Question 68",
    },
    {
      content:
        "What is a controller value that will NOT be saved in the viewstate of a Visualforce page? Choose 3 answers",
      options: [
        "A. A variable of a type that is a custom Apex class.",
        "B. A variable of a type that is a collection of SObjects.",
        "C. A variable declared with the Static keyword.",
        "D. A system-generated object such as a Schema Describe object.",
        "E. A variable declared with the Transient keyword.",
      ],
      answer: "C,D,E",
      title: "Question 69",
    },
    {
      content: "Which API can be used to execute unit tests? (Choose three.)",
      options: [
        "A. Tooling API",
        "B. Test API",
        "C. Streaming API",
        "D. Metadata API",
        "E. SOAP API",
      ],
      answer: "A,D,E",
      title: "Question 70",
    },
    {
      content: "Code must have X% overall code coverage.",
      options: ["A. X = 100", "B. X = 75", "C. X = 65", "D. X = 50"],
      answer:
        "B  Explanation Explanation: All triggers must have at least 1% code coverage ",
      title: "Question 71",
    },
    {
      content:
        "A developer must create a custom pagination solution. While users navigate through pages, if the data is changed from elsewhere, users should still see the cached results first accessed. How can the developer meet these requirements?",
      options: [
        "A. Use @Cache annotation.",
        "B. Use a StandardSetController.",
        "C. Use OFFSET WITH CACHE in SOQL queries",
        "D. Use OFFSET in SOQL queries.",
      ],
      answer: "B",
      title: "Question 72",
    },
    {
      content:
        "A company requires that a child custom record is created when an Order record is inserted. The company's administrator must be able to make changes to the solution. What is the recommended solution for implementing this requirement?",
      options: [
        "A. Create an Apex Trigger to create the custom child record when the Order is inserted.",
        "B. Create a Force.com Workflow Rule to create the custom child record when the Order is inserted.",
        "C. Create a Lightning Process to create the custom child record when the Order is inserted.",
        "D. Create a Visual Workflow that will create the custom child record when the Order is inserted.",
      ],
      answer: "C",
      title: "Question 73",
    },
    {
      content:
        "A developer is asked to build a solution that will automatically send an email to the Customer when an Opportunity stage changes. The solution must scale to allow for 10,000 emails per day. The criteria to send the email should be evaluated after all Workflow Rules have fired.What is the optimal way to accomplish this?",
      options: [
        "A. Use a Workflow Email Alert.",
        "B. Use a SingleEmailMessage() with an Apex Trigger.",
        "C. Use an Email Alert with Process Builder.",
        "D. Use a MassEmailMessage() with an Apex Trigger.",
      ],
      answer: "C",
      title: "Question 74",
    },
    {
      content:
        "What is a valid request for the following REST method: @HttpPost global static void myPostMethod(String sl,Integer il, Boolean bl, String b2) Choose 2 answers",
      options: [
        'A. "il" : 123, "S1" : "my first string", "S2" : "my second string", "bl" : false',
        'B. < request> < sl>"my first string" < il>123 < sZ>"my second string" < bl>false < /request>',
        "C. < request> < sl>my first string < 11>123 < 32>my second string < b1>false < /request>",
        'D. Sl" : "my first string", 11" : "123", "b1" : "false", "S2" : "my second string"',
      ],
      answer: "A,B",
      title: "Question 75",
    },
    {
      content:
        "A developer has created a Team Member sObject that has a Master-Detail relationship to a Project sObject and a Lookup relationship to the User sObject. The developer must ensure that a User listed on a Team Member record has Read-Write access to the parent Project record.How can the developer accomplish this if the Project sObject has a Private sharing model and thousands of Project records?",
      options: [
        "A. Create a Controller that uses the Without Sharing keyword",
        "B. Create a Project Sharing Rule that shares to the Team Member Group",
        "C. Create a Team Member Trigger that inserts Project_Share records",
        "D. Create a Criteria-Based Sharing Rule on the Project sObject",
      ],
      answer: "C",
      title: "Question 76",
    },
    {
      content:
        "A company notices that their unit tests in a test class with many methods to create many records for prerequisite reference data are slow. What can a developer to do address the issue?",
      options: [
        "A. Move the prerequisite reference data setup to a static method in the test class and call that from each test method.",
        "B. Move the prerequisite reference data setup to a TestDataFactory and call that from each test method.",
        "C. Move the prerequisite reference data setup to a @testSetup method in the test class.",
        "D. Move the prerequisite reference data setup to the constructor for the test class.",
      ],
      answer: "C",
      title: "Question 77",
    },
    {
      content:
        "A developer has been asked to prevent Accounts from being deleted if there is a related Contact that has the Do_Not_Delete_c checkbox checked. How can the developer accomplish this?",
      options: [
        "A. Create a Validation Rule on the Account object.",
        "B. Create a Before Delete Trigger on the Contact object",
        "C. Create a Before Delete Trigger on the Account object.",
        "D. Create a Validation Rule on the Contact object.",
      ],
      answer: "C",
      title: "Question 78",
    },
    {
      content:
        "A developer wants to use an Aura component with a custom action.What should be considered in order to do this?",
      options: [
        "A. A default value must be provided for each component attribute marked as required",
        'B. The class "slds-modal_ _container" must be added to the top-level element of the component',
        "C. The component must implement the flexipage:availableForRecordHome interface",
        "D. The component's JavaScript controller must handle a method on initialization",
      ],
      answer: "C  Explanation/Reference: ",
      title: "Question 79",
    },
    {
      content:
        "Example 1:AggregateResult[] groupedResults = [SELECT CampaignId, AVG(Amount) FROM Opportunity GROUP BY CampaignId]; for (AggregateResult ar : groupedResults){System.debug('Campaign ID' + ar.get('CampaignId'));System.debug('Average amount' + ar.get('expr0'));}Example 2:AggregateResult[] groupedResults = [SELECT CampaignId, AVG(Amount) theAverage FROM Opportunity GROUP BY CampaignId]; for (AggregateResult ar : groupedResults){System.debug('Campaign ID' + ar.get('CampaignId'));System.debug('Average amount' + ar.get('theAverage'));}Example 3:AggregateResult[] groupedResults = [SELECT CampaignId, AVG(Amount) FROM Opportunity GROUP BY CampaignId]; for (AggregateResult ar : groupedResults){System.debug('Campaign ID' + ar.get('CampaignId'));System.debug('Average amount' + ar.get.AVG());}Example 4:AggregateResult[] groupedResults = [SELECT CampaignId, AVG(Amount) theAverage FROM Opportunity GROUP BY CampaignId]; for (AggregateResult ar : groupedResults){System.debug('Campaign ID' + ar.get('CampaignId'));System.debug ('Average amount' + ar.theAverage);}Which two of the examples above have correct System.debug statements? (Choose two.)",
      options: ["A. Example 2", "B. Example 1", "C. Example 3", "D. Example 4"],
      answer: "A,B",
      title: "Question 80",
    },
    {
      content:
        "A developer writes the following code:While testing the code, the developer receives the following error message: System.CalloutException : You have uncommitted work pending What should the developer do? (Choose two.)",
      options: [
        "A. Use the asyncSend() method of the HTTP class to send the request in async context",
        "B. Use Database.insert (order, true) to immediately commit any database changes",
        "C. Ensure all callouts are completed prior to executing DML statements",
        "D. Move the web service callout into an Cfuture method",
      ],
      answer: "C,D",
      title: "Question 81",
    },
    {
      content: "Choose the correct definition for <apex:actionFunction>",
      options: [
        "A. Adds AJAX support to another component (e.g. onClick, onMouseUp, onFocus, etc.)",
        'B. Can be associated with an AJAX request (actionFunction/actionSupport/actionPoller) and shows content conditionally depending on the status of the request (in progress/complete). Use the "id" field to specify name; use "status" field on related components to connect them',
        "C. Allows for controller methods to be called directly from Javascript. Must be encapsulated in tags. Unlike actionSupport, these functions can be called directly from Javascript code",
        "D. Sends an AJAX request according to the time interval you specify. If this ever gets re-rendered, it resets",
        "E. Signifies which components should be processed by the server when an AJAX request is generated",
      ],
      answer: "C",
      title: "Question 82",
    },
    {
      content:
        "A company has a custom object, Order__c, that has a required, unique, external ID field called Order_Number__c.Which statement should be used to perform the DML necessary to insert new records and update existing records in a List of Order__c records?",
      options: [
        "A. upsert orders;",
        "B. merge orders;",
        "C. upsert orders Order_Number__c;",
        "D. merge orders Order_Number__c;",
      ],
      answer: "C",
      title: "Question 83",
    },
    {
      content: 'The "Webservice" keyword___________.',
      options: [
        "A. Method must be static, and class must be global",
        "B. All of the above",
        "C. Used for any member variables included",
        "D. Can be used on all classes",
      ],
      answer: "B",
      title: "Question 84",
    },
    {
      content:
        'A user receives the generic "An internal server error has occurred" while interacting with a custom Lightning Component. What should the developer do to ensure a more meaningful message?',
      options: [
        "A. Add an onerror event handler to the tag.",
        "B. Use an AuraHandledException in a try/catch block.",
        "C. Use ProcessBuilder to catch the error.",
        "D. Add an error-view component to the markup.",
      ],
      answer: "B",
      title: "Question 85",
    },
    {
      content:
        "The maximum view state size of a visualforce page is______________.",
      options: ["A. 135kb", "B. 165kb", "C. 256kb", "D. 65kb", "E. 1mb"],
      answer: "A",
      title: "Question 86",
    },
    {
      content: "What is the transaction limit on the number of callouts?",
      options: ["A. 50", "B. There is no limit", "C. 100", "D. 150", "E. 200"],
      answer: "A",
      title: "Question 87",
    },
    {
      content:
        "Universal Containers wants to be able to bring up an Account detail page and view a table of containers currently being rented. The user wants to be able to dick on a container In the table and quickly edit and save the location of the container.In addition to this, the page should have a section that shows the location of each container on a map.Universal Containers wants the map to re-render whenever the location of a container is changed.What can a developer use to accomplish this task?",
      options: [
        "A. Two Lightning Components leveraging Application Events",
        "B. Two Visualforce Page Components leveraging Application Events",
        "C. Two Lightning Components leveraging Platform Events",
        "D. A single visualforce Page leveraging Platform Events",
      ],
      answer: "A",
      title: "Question 88",
    },
    {
      content:
        "A Lightning web component exists in the system and displays information about the record in context as a modal. Salesforce administrators need to use this component within the Lightning App Builder.Which two settings should the developer configure within the xml resource file?Choose 2 answers",
      options: [
        "A. Set the IsExposed attribute to True.",
        "B. Specify the target to be lightning__AppPage.",
        "C. Specify the target to be lightning__RecordPage.",
        "D. Set the IsVisible attribute to True.",
      ],
      answer: "A,C",
      title: "Question 89",
    },
    {
      content:
        "A developer wants to use an Aura component with a custom action.What should be considered in order to do this?",
      options: [
        "A. The component must implement the flexipage:availableForRecordHome interface",
        "B. A default value must be provided for each component attribute marked as required",
        "C. The component's JavaScript controller must handle a method on initialization",
        'D. The class "slds-modal_ _container" must be added to the top-level element of the component',
      ],
      answer: "A",
      title: "Question 90",
    },
    {
      content:
        "A developer wrote an Apex class to make several callouts to an external system.If the URLs used in these callouts will change often, which feature should the developer use to minimize changes needed to the Apex class?",
      options: [
        "A. Remote Site Settings",
        "B. Session Id",
        "C. Named Credentials",
        "D. Connected Apps",
      ],
      answer:
        "C  Explanation/Reference: https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/ apex_callouts_named_credentials.htm ",
      title: "Question 91",
    },
    {
      content:
        "Which type of controller is best suited when you want all of the basic DML functions from an object's normal new/edit page?",
      options: [
        "A. Standard List/Set Controller",
        "B. Standard Controller",
        "C. Controller Extensions",
        "D. Custom Controller",
      ],
      answer: "A",
      title: "Question 92",
    },
    {
      content:
        "Which use case is an appropriate fit for the future asynchronous Apex method? (Choose two.)",
      options: [
        "A. A developer has jobs that need larger query results than regular transactions allow",
        "B. A developer needs to segregate DML operations and bypass the mixed save DML error",
        "C. A developer has long-running jobs with large data volumes that need to be performed in batches",
        "D. A developer has long-running methods and needs to prevent delaying an Apex transaction",
      ],
      answer: "B,D",
      title: "Question 93",
    },
    {
      content:
        'A company recently deployed a Visualforce page with a custom controller that has a data grid of information about Opportunities in the org. Users report that they receive a "Maximum view state size limit" error message under certain conditions.According to Visualforce best practice, which three actions should the developer take to reduce the view state? (Choose three.)',
      options: [
        "A. Use the transient keyword in the Apex controller for variables that do not maintain state",
        "B. Use filters and pagination to reduce the amount of data",
        "C. Use the private keyword in the controller for variables",
        "D. Use the final keyword in the controller for variables that will not change",
        "E. Refine any SOQL queries to return only data relevant to the page",
      ],
      answer: "B,D,E",
      title: "Question 94",
    },
    {
      content:
        "A company wants to implement a new call center process for handling customer service calls. It requires service reps to ask for the caller's account number before proceeding with the rest of their call script.Following best practices, what should a developer use to meet this requirement?",
      options: [
        "A. Apex Trigger",
        "B. Flow Builder",
        "C. Process Builder",
        "D. Approvals",
      ],
      answer: "C",
      title: "Question 95",
    },
    {
      content:
        "A developer is trying to decide between creating a Visualforce component or a Lightning component for a custom screen. Which functionality consideration impacts the final decision?",
      options: [
        "A. Does the screen need to be rendered as a PDF?",
        "B. Does the screen need to be accessible from the Lightning Experience UI?",
        "C. Will the screen make use of a JavaScript framework?",
        "D. Will the screen be accessed via a mobile app?",
      ],
      answer: "D",
      title: "Question 96",
    },
    {
      content:
        "Which are relevant practices while analyzing the timeline of different types of transactions in the execution overview panel? (Choose two.)",
      options: [
        "A. Log lines in the execution log panel can be analyzed for details about specific events",
        "B. The performance tree should be use to analyze events further starting from the one that take the least amount of time",
        "C. The execution tree can be used with the execution log to filter and get specific information about events",
        "D. Multiple short bursts of Apex events should be analyzed since they can add up to a significant amount of time",
      ],
      answer: "A,D",
      title: "Question 97",
    },
    {
      content:
        "What is a benefit of JavaScript remoting over Visualforce Remote Objects?",
      options: [
        "A. Does not require any Apex code",
        "B. Allows for specified re-render targets",
        "C. Does not require any JavaScript code",
        "D. Supports complex server-side application logic",
      ],
      answer: "C",
      title: "Question 98",
    },
    {
      content:
        "What can be done to improve the performance of the insert trigger shown above?",
      options: ["A. ", "B. ", "C. ", "D. "],
      answer: "B",
      title: "Question 99",
    },
    {
      content:
        "Lightning Aura ComponentGiven the code above, which two changes need to be made in the Apex Controller for the code to work' Choose 2 answers",
      options: [
        "A. Annotate the entire class as @AuraEnabled instead of just the single method.",
        "B. Change the argument from JSONObject to String.",
        "C. Remove line 06 from the Apex Controller and use firstName In the return.",
        "D. Change the method signature to be global static, not public static.",
      ],
      answer: "B,C",
      title: "Question 100",
    },
    {
      content:
        "A company recently deployed a Visualforce page with a custom controller that has a data grid of information about Opportunities in the org.Users report that they receive a ''Maximum view state size limit'' error message under certain conditions.According to Visualforce best practice, which three actions should the developer take to reduce the view state? Choose 3 answers",
      options: [
        "A. Use the final keyword In the controller for variables that will not change.",
        "B. Use the private keyword in the controller for variables",
        "C. Refine any SQQL queries to return only data relevant to the page.",
        "D. Use filters and pagination to reduce the amount of data.",
        "E. Use the transient keyword in the Apex controller for variables that do not maintain state.",
      ],
      answer: "C,D,E",
      title: "Question 101",
    },
    {
      content:
        "The test method above calls an @future method that increments the Number_of_Times_Viewed__c value. The assertion is failing because the Number_of_Times_Viewed__c equals 0. What is the optimal way to fix this?",
      options: [
        "A. Change the initialization to acct.Number_Of_Times_Viewed__c = 1.",
        "B. Add Test.startTest() before and Test.stopTest() after insert acct",
        "C. Change the assertion to System.assertEquals(0, acctAfter.Number_Of_Times_Viewed__c).",
        "D. Add Test.startTest() before and Test.stopTest() after AuditUtil.incrementViewed.",
      ],
      answer: "D",
      title: "Question 102",
    },
    {
      content:
        "A developer is writing unit tests for the following method:Which assertion would be used in a negative test case?",
      options: [
        "A. System.assertEquals (true, isFreezing('O')",
        "B. System.assertEquals(null, isFreezing('asdf))",
        "C. System.assertEquals(true, isFreezingClOO'))",
        "D. System.assertEquals(true, isFreezing(null))",
      ],
      answer: "B",
      title: "Question 103",
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
        "D  While you can use simple bind variables in dynamic SOQL, you cann|ot use bind variable fields (e.g. :myVariable.field1_c) Use escapeSingleQuotes to prevent SOQL injection ",
      title: "Question 104",
    },
    {
      content:
        "What is the transaction limit for the number of records using QueryLocator?",
      options: [
        "A. 100,000",
        "B. 5,000,000",
        "C. 50,000",
        "D. 50,000,000",
        "E. There is no limit",
      ],
      answer: "D",
      title: "Question 105",
    },
    {
      content:
        "A developer i$ tasked Dy Unversai Containers to build out a system to track the container repair process. Containers should be tracked as they move through the repair process, starting when a customer reports an issue and ending when the container is returned to the customer.Which solution meets these business requirements while following best practices?",
      options: [
        "A. involve a Salesforce administrator and build out a declarative solution that works in Salesforce desktop and mobile.",
        "B. Build an automated Lightning Application using Application Events to ensure data integrity.",
        "C. Use Flow Builder|.to develop a Sites page for customers to submit repair requests and track the status of their request.",
        "D. Use Platform Events with Workflow Rules and RFID integration to ensure proper tracking of the containers.",
      ],
      answer: "C",
      title: "Question 106",
    },
    {
      content:
        'A developer has a page with two extensions overriding the Standard controller for Case. <apex:page standardController="Case" extension3="CaseExtensionOne,CaseExtension Two" showHeader="false"> Each extension has a method called Save. The page has a command button as defined: <apex:commandButton value="Save" action="{!save}"/> What will happen when a user clicks the command button?',
      options: [
        "A. Save from Case Standard Controller will be executed.",
        "B. Save from CaseExtensionOne will be executed.",
        "C. Save from CaseExtensionTwo will be executed.",
        "D. All of the three Save methods will be executed.",
      ],
      answer: "B",
      title: "Question 107",
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
      title: "Question 108",
    },
    {
      content:
        "Part of a custom Lightning Component displays the total number of Opportunities in the org, which is in the millions. The Lightning Component uses an Apex Controller to get the data it needs. What is the optimal way for a developer to get the total number of Opportunities for the Lightning Component?",
      options: [
        "A. COUNT() SOQL aggregate query on the Opportunity object",
        "B. SUM() SOQL aggregate query on the Opportunity object",
        "C. SOQL for loop that counts the number of Opportunities records",
        "D. Apex Batch job that counts the number of Opportunity records",
      ],
      answer: "A",
      title: "Question 109",
    },
    {
      content: "Choose the correct definition for <apex:messages>.",
      options: [
        'A. Standard Salesforce formatting, shows all errors that occur on page. Can add more messages through the"ApexPages.addMessage" function',
        "B. Standard Salesforce formatting, throws a specific message on a page",
        "C. No formatting; displays all errors on a page",
        "D. A single message, without formatting, that can be associated with a specific component on the page",
      ],
      answer: "A",
      title: "Question 110",
    },
    {
      content:
        "An Apex trigger creates a Contract record every time an Opportunity record is marked as Closed end Won. This trigger is working great, except (due to a recent acquisition) historical Opportunity records need to be loaded into the Salesforce instance.When a test batch of records are loaded, the Apex trigger creates Contract records. A developer is tasked with preventing Contract records from being created when mass loading the Opportunities, but the daily users still need to have the Contract records created.What is the most extendable way to update the Apex trigger to accomplish this?",
      options: [
        "A. Use a Hierarchy Custom Setting to skip executing the logic inside the trigger for the user who loads the data.",
        "B. Add the Profile ID of the user who loads the data to the trigger so the trigger will not fire for this user.",
        "C. Use a List Custom Setting to disable the trigger for the user who loads the data.",
        "D. Add a Validation Rule to the Contract to prevent Contract creation by the user who loads the data.",
      ],
      answer: "A",
      title: "Question 111",
    },
    {
      content:
        "A developer has built a multi-page wizard using a single Custom Controller to query and update data. Users are complaining that the pages are loading slowly.What will improve performance? (Choose three.)",
      options: [
        "A. Using actionRegion and rerender",
        "B. Setting the Apex Page attribute cache=true",
        "C. Reducing the view state",
        "D. Using selective queries",
        "E. Turning off the standard stylesheet",
      ],
      answer: "B,C,D",
      title: "Question 112",
    },
    {
      content:
        "A company wants to build a custom Lightning Component that will display a specified Account Field Set and that can only be added to the Account record page. Which design resource configuration should be used?",
      options: ["A. ", "B. ", "C. ", "D. "],
      answer: "D",
      title: "Question 113",
    },
    {
      content:
        "Which annotation exposes an Apex class as a RESTful neb service?",
      options: [
        "A. @RestRtsoorct",
        "B. @AuraEnaWed",
        "C. @RemoteAction",
        "D. @HttpInvocabte",
      ],
      answer: "A",
      title: "Question 114",
    },
    {
      content:
        "A developer has generated Apex code from a WSDL for an external web service. The web service requires Basic authentication. What code should the developer use to authenticate?",
      options: [
        "A. Http. setHeader ( 'Authorization' , 'Basic QthZGprjpchVuIHNchFtZQ==');",
        "B. Stub . inputhth-Ieader3_x.put ('Authorization' , 'Basic QthZGprjpchVuIHIQchE'tZQ:'",
        "C. Stub.authentication.put ( 'Authorization' , 'Basic QthZGprjpchVuIHNchFtZQ=='",
        "D. Http. setAuthentication( 'Basic QthZGprjpchVuIHNchFtZQ:'",
      ],
      answer: "B",
      title: "Question 115",
    },
    {
      content:
        "What are three benefits of using static resources in Visualforce and Lightning Components? Choose 3 answers",
      options: [
        "A. Static resource files are automatically minified.",
        "B. Static resource files do not count against an organization's quota of data storage.",
        "C. Relative paths can be used in files in static resource archives to refer to other content within the archive.",
        "D. Static resource files can be referenced by using the $Resource global variable instead of hardcoded IDs.",
        "E. Static resource files can be packaged into a collection of related files in a zip or jar archive.",
      ],
      answer: "D,E",
      title: "Question 116",
    },
    {
      content:
        "A developer has a Batch Apex process, Batch_Account_Sales, that updates the sales amount for 10,000 Accounts on a nightly basis. The Batch Apex works as designed In the sandbox. However, the developer cannot get code coverage on the Batch Apex class.The test class is below:What is causing the code coverage problem?",
      options: [
        "A. The executeBatch must fail within test. startTest ( ) and - test. stopTest().",
        "B. The account creation already sets the sates amount to 0.",
        "C. The batch needs more than one account record created.",
        "D. The batch process will not recognize new accounts created in the same session",
      ],
      answer: "A",
      title: "Question 117",
    },
    {
      content:
        'If the "PageReference.setRedirect" Apex function is set to True, what type of request is made?',
      options: [
        "A. If PageReference points to the same controller and subset of extensions, postback request, otherwise get request",
        "B. Get request",
        "C. Postback request",
      ],
      answer: "B",
      title: "Question 118",
    },
    {
      content:
        "What are three benefits of using declarative customizations over code? Choose 3 answers",
      options: [
        "A. Declarative customizations are not subject to governor limits.",
        "B. Declarative customizations cannot generate run time errors.",
        "C. Declarative customizations generally require less maintenance.",
        "D. Declarative customizations do not require user testing.",
        "E. Dectarative customizations will automatically update with each Salesforce release.",
      ],
      answer: "A,D,E",
      title: "Question 119",
    },
    {
      content:
        "During the order of execution of a Visualforce page GET request, what happens after this step: Evaluate constructors on controllers and extensions?",
      options: [
        "A. Evaluate constructors and expressions on custom components.",
        "B. Create view state if < apex: form> exists.",
        "C. Send the HTML response to the browser.",
        "D. Evaluate expressions, action attributes, and method calls.",
      ],
      answer: "A",
      title: "Question 120",
    },
    {
      content:
        "A company has a custom object, Order__c, that has a custom picklist field, Status__c, with values of 'New','In Progress', or 'Fulfilled' and a lookup field, Contact__c, to Contact.Which SOQL query will return a unique list of all the Contact records that have no 'Fulfilled' Orders?SELECT Id FROM Contact WHERE Id NOT IN (SELECT Id FROM Order__c WHERE",
      options: [
        "A. SELECT Id FROM Contact WHERE Id NOT IN (SELECT Contact__c FROM Order__c",
        "B. WHERE Status__c = 'Fulfilled')SELECT Contact__c FROM Order__c WHERE Id NOT IN (SELECT Id FROM Order__c",
        "C. Where Status__c = 'Fulfilled')",
        "D. Status__c = 'Fulfilled')SELECT Contact__c FROM Order__c WHERE Status__c <> 'Fulfilled'",
      ],
      answer: "C",
      title: "Question 121",
    },
    {
      content:
        "What is a best practice when unit testing a controller? (Choose two.)",
      options: [
        "A. Set query parameters by using getParameters().put",
        "B. Simulate user interaction by leveraging Test.setMock()",
        "C. Access test data by using seeAllData=true",
        "D. Verify correct references by using getURL()",
      ],
      answer: "A,D",
      title: "Question 122",
    },
    {
      content:
        "Refer to re code segment above.When following best practices for writing Apex taggers, which two lots are wrong or cause for concern? Choose 2 answers",
      options: ["A. Line 20", "B. Line 11", "C. Line 16", "D. Line 6"],
      answer: "A,D",
      title: "Question 123",
    },
    {
      content:
        "Consider the code above.When a user dicks on the Link of a Contact's name, what happens'",
      options: [
        "A. Nothing happens: the commandLink is missing an action attribute.",
        "B. The outputPanel refreshes, showing the Contacts details.",
        "C. The page refreshes, showing the Contact's details.",
        "D. A new page opens, showing the Contact's details.",
      ],
      answer: "A",
      title: "Question 124",
    },
    {
      content: "The REST API___________.",
      options: [
        "A. Is used to retrieve, deploy, create, update, or delete customizations for your org. The most common use is to migrate changes from a sandbox or testing org to your production environment",
        "B. Is based on REST principles and is optimized for loading or deleting large sets of data. You can use it to query, queryAII, insert, update, upsert, or delete many records asynchronously by submitting batches",
        "C. Is used to create, retrieve, update or delete records, such as accounts, leads, and custom objects, and allows you to maintain passwords, perform searches, and much more",
        "D. Provides a powerful, convenient, and simple REST-based web services interface for interacting with Salesforce. Its advantages include ease of integration and development, and it's an excellent choice of technology for use with mobile applications and web projects",
      ],
      answer: "D",
      title: "Question 125",
    },
    {
      content:
        "Business rules require a Contact to always be created when a new Account is created.What can be used when developing a custom screen to ensure an Account is not created if the creation of the Contact fails?",
      options: [
        "A. Use the Database.Delete method if the Contact insertion fails.",
        "B. Use the Database.Insert method with allOrNone set to False.",
        "C. Disable Validation rules on Contacts and set default values with a Trigger.",
        "D. Use setSavePoint() and rollback() with a try/catch block.",
      ],
      answer: "D  Explanation ",
      title: "Question 126",
    },
    {
      content:
        "A developer is tasked with ensuring that email addresses entered into the system for Contacts and for a Custom Object called Survey_Response_ _c do not belong to a list of blocked domains. The list of blocked domains will be stored in a custom object for ease of maintenance by users. Note that the Survey_Response_ _c object is populated via a custom Visualforce page.What is the optimal way to implement this?",
      options: [
        "A. Implement the logic in a helper class that is called by an Apex trigger on Contact and from the Custom Visualforce page controller",
        "B. Implement the logic in an Apex trigger on Contact and also implement the logic within the Custom Visualforce page controller",
        "C. Implement the logic in the Custom Visualforce page controller and call that method from an Apex trigger on Contact",
        "D. Implement the logic in a Validation Rule on the Contact and a Validation Rule on the Survey_Response_ _c object",
      ],
      answer: "A",
      title: "Question 127",
    },
    {
      content:
        "A customer requires that when the billing address field on an Account gets updated, the address field on all its related contact records should reflect the same update. How can this requirement be met with minimal customizations?",
      options: [
        "A. Create a Lightning Process on Account to update related child Contact records.",
        "B. Create a scheduled batch job that updates all contact address fields based on the related Account record.",
        "C. Create an After Trigger on Account to update its related contact records on update.",
        "D. Create a Workflow Rule on Account to update related child Contact records.",
      ],
      answer: "A",
      title: "Question 128",
    },
    {
      content:
        'If you have a method "doStuff(List<sObject> records)", which is a valid call?',
      options: [
        "A. doStuff([Select Id From Account]);",
        "B. doStuff(sObject obj);",
        "C. doStuff(Account acct);",
        "D. doStuff(List<Account> records);",
      ],
      answer: "A",
      title: "Question 129",
    },
    {
      content:
        'What is the transaction limit on the number of "sendEmail" method calls?',
      options: ["A. 20", "B. 10", "C. 50", "D. 100", "E. There is no limit"],
      answer:
        "B  Explanation Explanation/Reference: The reserveEmailCapacity methods let you declare how many emails you want to send prior to actually sending, allowing you to handle limit errors prematurely ",
      title: "Question 130",
    },
    {
      content:
        "A developer built a Component to be used at the front desk for guests to self-register upon arrival at a kiosk.The developer is now asked to create a Component for the Utility Tray to alert Users whenever a guest has arrived at the front desk. What should be used?",
      options: [
        "A. Application Event",
        "B. DML Operation",
        "C. Component Event",
        "D. Changelog",
      ],
      answer: "A",
      title: "Question 131",
    },
    {
      content:
        "A company needs to automatically delete sensitive information after 7 years. This could delete almost a million records every day.How can this be achieved?",
      options: [
        "A. Schedule an future process to Query records older than 7 years, and then recursively invoke itself in 1,000 record batches to delete them.",
        "B. Use aggregate functions to query for records older than 7 years, and then delete the AggregateResult objects.",
        "C. Schedule a batch Apex process to run every day that Queries and deletes records older than 7 years.",
        "D. Perform a SOSL statement to find records older than 7 years, and then delete the entire result set.",
      ],
      answer: "C",
      title: "Question 132",
    },
    {
      content: "Choose the correct definition for <apex:actionFunction>",
      options: [
        "A. Adds AJAX support to another component (e.g. onClick, onMouseUp, onFocus, etc.)",
        "B. Allows for controller methods to be called directly from Javascript. Must be encapsulated in tags. Unlike actionSupport, these functions can be called directly from Javascript code",
        "C. Signifies which components should be processed by the server when an AJAX request is generated",
        "D. Sends an AJAX request according to the time interval you specify. If this ever gets re-rendered, it resets",
        'E. Can be associated with an AJAX request (actionFunction/actionSupport/actionPoller) and shows content conditionally depending on the status of the request (in progress/complete). Use the "id" field to specify name; use "status" field on related components to connect them',
      ],
      answer: "A",
      title: "Question 133",
    },
    {
      content:
        "A developer needs to create a Lightning page for entering Order Information. An error message should be displayed if the zip code entered as part of the Order's shipping address is not numeric. What is a recommended way for the error message be displayed to the end user?",
      options: [
        "A. Use the < apex:Message> tag to display errors.",
        "B. Use the < aura:component> tag to display errors.",
        "C. Use the < ui:inputDefaultError> tag to display errors.",
        "D. Use the < ui : outputText> tag to display errors.",
      ],
      answer: "C",
      title: "Question 134",
    },
    {
      content: "Choose the correct definition for <apex:actionStatus>",
      options: [
        "A. Allows for controller methods to be called directly from Javascript. Must be encapsulated in<apex:form> tags. Unlike actionSupport, these function<apex:actionPoller>s can be called directly from Javascript code",
        "B. Signifies which components should be processed by the server when an AJAX request is generated",
        "C. Adds AJAX support to another component (e.g. onClick, onMouseUp, onFocus, etc.)",
        'D. Can be associated with an AJAX request (actionFunction/actionSupport/actionPoller) and shows content conditionally depending on the status of the request (in progress/complete). Use the "id" field to specify name; use "status" field on related components to connect them',
        "E. Sends an AJAX request according to the time interval you specify. If this ever gets re-rendered, it resets",
      ],
      answer: "D",
      title: "Question 135",
    },
    {
      content:
        "A developer has refactored an application and renamed an Apex class in a sandbox and now needs to deploy the changes to production. How can this be accomplished? Choose 2 answers",
      options: [
        "A. Use a changeset to both delete the old Apex class and deploy the new Apex class to production.",
        "B. Deploy the new Apex class with the Force.com Migration Tool and set the old name in destructiveChanges.xml.",
        "C. Use the Force.com IDE to delete the old Apex class from the project and deploy the changes to production.",
        "D. Deploy the new Apex class, and then log in to the production environment and manually delete the class.",
      ],
      answer: "B,C",
      title: "Question 136",
    },
    {
      content:
        "Employee_c is a Child object of Company_c. The Company_c object has an external Id field Company_ld_c.How can a developer insert an Employee_c record linked to Company_c with a Company_ld_c of '999'?",
      options: [
        "A. Employee_c emp = new Employee_c(Name=fDeveloperT); emp. Company_c = new Company_c(Company_Id_c=f 999 T) insert emp;",
        "B. Employee_c emp = new Employee_c(Name=fDeveloperf); emp.Company_r = new Company _ r(Company Id c=f999f) insert emp;",
        "C. Employee_c emp = new Employee_c(Name=fDeveloperf); emp.Company_r = f999f insert emp;",
        "D. Employee_c emp = new Employee_c(Name=fDeveloperf); emp.Company_c = f999f insert emp;",
      ],
      answer: "B",
      title: "Question 137",
    },
    {
      content:
        "A developer is asked to update data in an org based on new business rules. The new rules state that Accounts with the type set to 'Customer' should have a status of 'Active', and Accounts with the type set to 'Prospect' should have a status of 'Pending'. No other changes to data should be made.Which code block will accurately meet the business requirements?Map<String, String> statusMap = new Map<String, String>{'Customer'=>'Active',",
      options: [
        "A. 'Prospect'=>'Pending'}List<Account> accountUpdates = new List<Account>();for ( Account a : [SELECT Id, Type FROM Account]){if ( statusMap.containsKey(a.Type) ) {a.Status = a.Type == 'Customer' ? 'Active' : 'Pending';}accountUpdates.add(a);}update accountUpdates;Map<String, String> statusMap = new Map<String, String>{'Customer'=>'Active',",
        "B. 'Prospect'=>'Pending'}List<Account> accountUpdates = new List<Account>();for ( Account a : [SELECT Id, Type FROM Account WHERE Status IN:statusMap.keySet()]){a.Status = statusMap.get(a.Type);accountUpdates.add(a);}update accountUpdates;List<Account> accountUpdates = new List<Account>();",
        "C. for ( Account a : [SELECT Id, Type FROM Account]){a.Status = a.Type == 'Customer' ? 'Active' : 'Pending';accountUpdates.add(a);}update accountUpdates;",
        "D. for ( Account a : [SELECT Id, Type FROM Account]){if ( String.isNotBlank(a.Type) && a.Type == 'Customer' ){a.Status = 'Active';}if ( String.isNotBlank(a.Type) && a.Type == 'Prospect' ){a.Status = 'Pending';}accountUpdates.add(a);}update accountUpdades;List<Account> accountUpdates = new List<Account>();",
      ],
      answer: "C",
      title: "Question 138",
    },
  ],
});
