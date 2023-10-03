window.testContent = window.testContent || [];
var testId = "Salesforce.Platform-Developer-II";
var testName = "Salesforce.Platform-Developer-II";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "Salesforce.Platform-Developer-II.v2023-02-10.q154",
  content: [
    {
      content:
        "A developer Is tasked with ensuring that email addresses entered into the system for Contacts and for a Custom Object called Survey_Response__c do not belong to a list of blacklisted domains. The list of blacklisted domains will be stored In a custom object for ease ofmaintenance by users. Note that the Survey_Response__c object is populated via a custom visualforce page. What is the optimal way to implement this?",
      options: [
        "A. Implement the logic in a helper class that is called by an Apex trigger on Contact and from the Custom Visualforce page controller.",
        "B. Implement the logic in the Custom Visualforce page controller and call that method from an Apex trigger on Contact.",
        "C. Implement the logic in a Validation Rule on the Contact and a validation Rule on the Survey_Response__c object.",
        "D. Implement the logic in an Apex trigger on Contact and also implement the logic within the Custom visualforce page controller.",
      ],
      answer: "A",
      title: "Question 1",
    },
    {
      content: "How would you test a web service?",
      options: [
        "A. Use the @future annotation on the method",
        "B. Web Services do not need to be tested",
        "C. Call the WebService interface",
        "D. Create a class that implements the WebServiceMock interface",
      ],
      answer: "D",
      title: "Question 2",
    },
    {
      content: "Invokable methods accept sObjects as parameters.",
      options: ["A. True", "B. False"],
      answer: "B",
      title: "Question 3",
    },
    {
      content:
        "A developer created an Apex class that updates an Account based on input from a Lightning web component that is used to register an Account. The update to the Account should only be made if it has not already been registered. What should the developer do to ensure that users do not overwrite each other's updates to the same Account if they make updates at the same time?",
      options: [
        "A. Add a try/catch block around the update.",
        "B. Use FOR UPDATE in a SOQL query.",
        "C. Use CastiCase.update(account, false).",
        "D. Use upsert instead of update.",
      ],
      answer: "C",
      title: "Question 4",
    },
    {
      content:
        "Users report that a button on a custom Lightning Web Component is not working. However, there are no other details provided. What should the developer use to ensure error messages are properly displayed?",
      options: [
        "A. Add the <apex:messages/> tag to the component.",
        "B. Add JavaScript and HTML to display an error message.",
        "C. Use the Database method with allOrNone set to false.",
        "D. Add a Try/Catch block surrounding the DML statement.",
      ],
      answer: "B",
      title: "Question 5",
    },
    {
      content:
        'What is the transaction limit on the number of "sendEmail" method calls?',
      options: ["A. 20", "B. 10", "C. 50", "D. 100", "E. There is no limit"],
      answer:
        "B  Explanation Explanation/Reference: The reserveEmailCapacity methods let you declare how many emails you want to send prior to actually sending, allowing you to handle limit errors prematurely ",
      title: "Question 6",
    },
    {
      content:
        'A developer created the following test method:The developer org has five accounts where the name starts with Test". The developer executes this test in the Developer Console.After the test code runs, which statement is true?',
      options: [
        'A. There will be five accounts where the name starts with Test"',
        "B. The test will fail.",
        'C. There will be no accounts where the name starts with "Test".',
        'D. There will be six accounts where the name starts with Test".',
      ],
      answer: "A",
      title: "Question 7",
    },
    {
      content:
        "A developer wants to write a generic Apex method that will compare the Salesforce Name filed between any two object records, for example to compare the Name field of an Account and an Opportunity; or the name of an Account and a Contact. How should the developer do this?",
      options: [
        "A. Invoke a Schema,describe() function to compare the values of each Name field.",
        "B. Use the salesforce metadata API to extract the value of each object and compare the name fields",
        "C. Use a String.replace( ) method to parse the contents of each Name field.",
        "D. Cast each object into an sObject and use sObject.get(Name') to compare the Name fields.",
      ],
      answer: "D",
      title: "Question 8",
    },
    {
      content:
        "Within the System.Limit class, what would you call to get the number of calls made in your transaction?",
      options: [
        "A. get [typeOfLimit] -> (Ex. getDXLStaterr.ents () )",
        "B. getLimit [typeOf Limit] -> (Ex. getLirr.it DXLSt at err.ents () )",
      ],
      answer: "A",
      title: "Question 9",
    },
    {
      content:
        "Given a list of Opportunity records named opportunityList, which code snippet is best for querying all Contacts of the Opportunity's Account?A)B)C)D)",
      options: ["A. Option C", "B. Option D", "C. Option B", "D. Option A"],
      answer: "D",
      title: "Question 10",
    },
    {
      content:
        "A company exposes a REST web service and wants to establish two-way SSL between Salesforce and the REST web service. A certificate signed by an appropriate certificate authority has been provided to the developer. What modification is necessary on the Salesforce side? (Choose two.)",
      options: [
        "A. Update the code to use HttpRequest.setHeaderQ to set an Authorization header.",
        "B. Configure two-factor authentication with the provided certificate",
        "C. Create an entry for the certificate in Certificate and Key Management",
        "D. Update the code to use HttpRequest.setClientCertificateName()",
      ],
      answer: "C,D",
      title: "Question 11",
    },
    {
      content:
        "A developer must create a custom pagination solution. While users navigate through pages, if the data is changed from elsewhere, users should still see the cached results first accessed. How can the developer meet these requirements?",
      options: [
        "A. Use OFFSET in SOQL queries",
        "B. Use OFFSET WITH CACHE in SOQL queries",
        "C. Use @Cache annotation",
        "D. Use a StandardSetController",
      ],
      answer: "D",
      title: "Question 12",
    },
    {
      content:
        "Consider the following code snippet:The Apex method is executed in an environment with a large data volume count for Accounts, and the query Is performing poorly. Which technique should the developer Implement to ensure the query performs optimally, while preserving the entire result set?",
      options: [
        "A. Annotate the method with the @Future annotation.",
        "B. Break down the query into two individual queries and Join the two result sets.",
        "C. Use the Database.queryLocator method to retrieve the accounts.",
        "D. Create a formula field to combine the CreatedDate and RecardType value, then filter based on the formula.",
      ],
      answer: "B",
      title: "Question 13",
    },
    {
      content:
        "A company wants to build a custom Lightning Component that will display a specified Account Field Set and that can only be added to the Account record page. Which design resource configuration should be used?",
      options: ["A. ", "B. ", "C. ", "D. "],
      answer: "D",
      title: "Question 14",
    },
    {
      content:
        "Consider the following code snippet:How should <c-order> component communicate to the <c-order-order> component that an order has been selected by the user?",
      options: [
        "A. Created and fire an application event.",
        "B. Create and fire a component event.",
        "C. Create and fire a standard DOM event.",
        "D. Create and dispatch a custom event",
      ],
      answer: "D",
      title: "Question 15",
    },
    {
      content:
        "What is the correct syntax for calling a controller action from a Visualforce page and updating part of the page once the action is completed? (Choose two.)",
      options: [
        'A. <apex:commandButton action="{!Save}" value="Save" redraw="thePageBlock"/>',
        'B. <apex : commandFunction action=?l { ! Save} " value="Save" rendered^"thePageBlock"/>',
        'C. <apex: actionSupport action="{ ISave} " event=llonchange1\' rerender="thePageBlock"/>',
        'D. <apex: actionFunction action=" { ! Save} " name=!,Save" rerender=l,thePageBlock1\'/>',
      ],
      answer: "C,D",
      title: "Question 16",
    },
    {
      content:
        "A large company uses Salesforce across several departments. Each department has its own Salesforce Administrator. It was agreed that each Administrator would have their own sandbox in which to test changes. Recently, users notice that fields that were recently added for one department suddenly disappear without warning. Also, Workflows that once sent emails and created tasks no longer do so. Which two statements are true regarding these issues and resolution? Choose 2 answers",
      options: [
        "A. A sandbox should be created to use as a unified testing environment instead of deploying Change Sets directly to production.",
        "B. The administrators are deploying their own Change Sets, thus deleting each other's fields from the objects in production.",
        "C. Page Layouts should never be deployed via Change Sets, as this causes Workflows and Field-level Security to be reset and fields to disappear.",
        "D. The administrators are deploying their own Change Sets over each other, thus replacing entire Page Layouts and Workflows in Production",
      ],
      answer: "A,D",
      title: "Question 17",
    },
    {
      content:
        "After a Platform Event Is defined in a Salesforce org, events can be published via which two mechanisms? Choose 2 answers",
      options: [
        "A. Internal Apps can use Process Builder.",
        "B. Internal Apps can use Outbound Messages.",
        "C. External Apps require the standard Streaming API",
        "D. External Apps use an API to publish event messages",
      ],
      answer: "A,D",
      title: "Question 18",
    },
    {
      content:
        "How should a developer assert that a trigger with an asynchronous process has successfully run?",
      options: [
        "A. Create at test data in the test class, use System.runAs() to invoke the trigger, then perform assertions.",
        "B. Create all test data in the test class, invoke Test.startTest() and Test.stopTest() and then perform assertions,",
        "C. Create all test data, use @future In the test class, then perform assertions.",
        "D. Insert records into Salesforce, use seeAllData-true, then perform assertions.",
      ],
      answer: "B",
      title: "Question 19",
    },
    {
      content:
        "When the sales team views an individual customer record, they need to see recent interactions for the customer. These interactions can be sales orders, phone calls, or Cases. The date range for recent interactions will be different for every customer record type. How can this be accomplished?",
      options: [
        "A. Use a Lightning component to Query and display interactions based on record type that is passed in using a design:attribute from the Lightning page.",
        "B. Use batch Apex to query for the most recent interactions when the customer view screen is loaded.",
        "C. Use Lightning Flow to read the customer's record type, and then do a dynamic query for recent interactions and display on the View page.",
        "D. Use a dynamic form on the customer record page to display recent interactions.",
      ],
      answer: "C",
      title: "Question 20",
    },
    {
      content:
        "A developer wrote an Apex method to update a list of Contacts and wants to make it available for use by Lightning web components. Which annotation should the developer add to the Apex method to achieve this?",
      options: [
        "A. @AuraEnable",
        "B. @RemoteAction",
        "C. @AuraEnabled",
        "D. @RemoteAction(cacheable=true)",
      ],
      answer: "A",
      title: "Question 21",
    },
    {
      content:
        "What is a consideration when using bind variables with dynamic SOQL? (Choose two.)",
      options: [
        "A. Dynamic SOQL cannot use bind variables",
        "B. Bind variables must be in local scope",
        "C. Bind variables must be public or global",
        "D. Dynamic SOQL cannot reference fields on bind variables",
      ],
      answer: "B,D",
      title: "Question 22",
    },
    {
      content: "The REST API___________.",
      options: [
        "A. Is based on REST principles and is optimized for loading or deleting large sets of data. You can use itto query, queryAII, insert, update, upsert, or delete many records asynchronously by submitting batches",
        "B. Is used to create, retrieve, update or delete records, such as accounts, leads, and custom objects, and allows you to maintain passwords, perform searches, and much more",
        "C. Provides a powerful, convenient, and simple REST-based web services interface for interacting with Salesforce. Its advantages include ease of integration and development, and it's an excellent choice of technology for use with mobile applications and web projects",
        "D. Is used to retrieve, deploy, create, update, or delete customizations for your org. The most common use is to migrate changes from a sandbox or testing org to your production environment",
      ],
      answer: "C",
      title: "Question 23",
    },
    {
      content:
        "A developer has a page with two extensions overriding the Standard controller for Case. What will happen when a user clicks the command button?",
      options: [
        "A. Save from CaseExtensionTwo will be executed",
        "B. Save from CaseExtensionOne will be executed",
        "C. Save from Case Standard Controller will be executed",
        "D. All of the three Save methods will be executed",
      ],
      answer: "B",
      title: "Question 24",
    },
    {
      content:
        "A developer is writing a complex application involving triggers, workflow rules, Apex classes, andprocesses. The developer needs to carefully consider the order of execution when developing the application.1. Before Triggers2. After Triggers3. Post commit logic such as sending email4. DML committed to the database5. Workflow rules6. Roll-up summary calculationsIn what order do the following operations execute?",
      options: [
        "A. 1,5,6,2,4,3",
        "B. 1,6,5,2,4,3",
        "C. 1,2,4,5,6,3",
        "D. 1,2,5,6,4,3",
      ],
      answer: "D",
      title: "Question 25",
    },
    {
      content:
        "Universal Containers wants to use a Customer Community with Customer Community Plus licenses so their customers can track how many of containers they are renting and when they are due back. Many of their customers are global companies with complex Account hierarchies, representing various departments within the same organization. One of the requirements is that certain community users within the same Account hierarchy be able to see several departments' containers, based on a junction object that relates the Contact to the various Account records that represent the departments. Which solution solves these requirements?",
      options: [
        "A. An Apex Trigger that creates Apex Managed Sharing records based on the junction object's relationships",
        "B. A Visualforce page that uses a Custom Controller that specifies without sharing to expose the records",
        "C. A Custom List View on the junction object with filters that will show the proper records based on owner",
        "D. A Custom Report Type and a report Lightning Component on the Community Home Page",
      ],
      answer: "D",
      title: "Question 26",
    },
    {
      content:
        "Consider the following code snippet, depicting an Azure component:Which two interfaces can the developer implement to make the component available as a quick action? Choose 2 answers",
      options: [
        "A. Force hasObjectName",
        "B. Lightning QuickActionAPI",
        "C. Force:hasRecordId",
        "D. Force:lightningQuickActionWithoutHeader",
        "E. Force:lightningQuicAction",
      ],
      answer: "D,E",
      title: "Question 27",
    },
    {
      content:
        "Which statement is considered a best practice for writing bulk safe Apex Triggers?",
      options: [
        "A. Instead of DML statements, use the Database methods with allOrNone set to False.",
        "B. Add records to collections and perform DML operations against these collections.",
        "C. Perform all DML operations from within a Future Method.",
        "D. Add LIMIT 50000 to every SOQL statement",
      ],
      answer: "B",
      title: "Question 28",
    },
    {
      content:
        "Assuming the CreateOneAccount class creates one account and implements the Queuetable interface, which syntax tests the Apex code?A)B)C)D)",
      options: ["A. Option A", "B. Option D", "C. Option C", "D. Option B"],
      answer: "D",
      title: "Question 29",
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
      title: "Question 30",
    },
    {
      content:
        "A developer has created a solution using the SOAP API for authenticating Communities users. What is needed when issuing the login() Call? (Choose two.)",
      options: [
        "A. Security Token",
        "B. Organization Id",
        "C. Username and Password",
        "D. Session Id",
      ],
      answer: "B,C",
      title: "Question 31",
    },
    {
      content:
        "What level can a hierarchy custom setting be defined for? (Choose three.)",
      options: [
        "A. Groups",
        "B. Organization",
        "C. Roles",
        "D. Users",
        "E. Profiles",
      ],
      answer: "B,D,E",
      title: "Question 32",
    },
    {
      content:
        "Refer to the code snippet below:As part of an Integration development effort, a developer is tasked to create an Apex method mat solely relies on the use of foreign identifiers In order to relate new contact records to existing Accounts in Salesforce. The account object contains a field marked as an external ID, the API Name of this field is Legacy_Id_c. What Is the most efficient way to instantiate the parentAccount: variable on line 02 to ensure the newly created contact is properly related to the Account?A)B)C)D)",
      options: ["A. Option B", "B. Option D", "C. Option A", "D. Option C"],
      answer: "C",
      title: "Question 33",
    },
    {
      content: "How long is field history retained?",
      options: [
        "A. 36 Months",
        "B. 12 Months",
        "C. 24 Months",
        "D. 6 Months",
        "E. 18 Months",
      ],
      answer: "E",
      title: "Question 34",
    },
    {
      content: "What is a benefit of using a WSDL with Apex?",
      options: [
        "A. Enables the user to not pass a Session ID where it is not necessary",
        "B. Allows for web services to be tested and achieve code coverage",
        "C. Reduces the number of callouts to third-party web services",
        "D. Allows for classes to be imported into Salesforce",
      ],
      answer: "D",
      title: "Question 35",
    },
    {
      content:
        "A company requires an external system to be notified whenever an account is updated. What LimitException could the following code trigger?",
      options: [
        "A. System.LimitException: Too many future calls",
        "B. System.CalloutException: Callout from triggers are currently not supported",
        "C. System.LimitException: Too many callouts",
        "D. System.LimitException: Too many SOQL queries",
      ],
      answer: "A",
      title: "Question 36",
    },
    {
      content:
        'The "action" attribute on <apex:page> is ONLY evaluated on which type of request?',
      options: ["A. Postback request", "B. Get request"],
      answer: "B",
      title: "Question 37",
    },
    {
      content:
        "Consider the above trigger intended to assign the Account to the manager of the Account''s region. Which two changes should a developer make in this trigger to adhere to best practices? Choose 2 answers",
      options: [
        "A. Use a Map to cache the results of the Region__c query by Id.",
        "B. Move the Region__c query to outside the loop.",
        "C. Remove the last line updating accountList as it is not needed.",
        "D. Use a Map accountMap instead of List accountList.",
      ],
      answer: "B,C",
      title: "Question 38",
    },
    {
      content:
        "The following code segment is railed from a Trigger handler class from the Opportunity trigger:Which two changes should improve this code and make it more efficient? Choose 2 answers",
      options: [
        "A. Move the DML outside of the for loop.",
        "B. Move business logic inside the Opportunity trigger.",
        "C. Use Triginstead.old instead of Trigger.new.",
        "D. Move the SOQL to fetch the account record outside of the for loop.",
      ],
      answer: "A,D",
      title: "Question 39",
    },
    {
      content:
        "A company's support process dictates that any time a Case is closed with a Status of 'Could not fix,' an Engineering Review custom object record should be created and populated with information from the Case, the Contact, and any of the Products associated with the Case. What is the correct way to automate this using an Apex trigger?",
      options: [
        "A. An after upsert trigger that creates the Engineering Review record and inserts it",
        "B. A before update trigger that creates the Engineering Review record and inserts it ",
        "C. An after update trigger that creates the Engineering Review record and inserts it",
        "D. A before update trigger that creates the Engineering Review record and inserts it",
      ],
      answer: "C",
      title: "Question 40",
    },
    {
      content:
        "A developer receives complaints that the component loads slowly. Which change can the developer implement to make the component perform faster?",
      options: [
        'A. Change the default for showContacrlnfo to "false".',
        'B. Change the type of contactlnfo to "Map".',
        "C. Add a change event handler for showContactinfo",
        "D. Move the contents of <c: concacclnfo into the component.",
      ],
      answer: "A",
      title: "Question 41",
    },
    {
      content:
        "What is the optimal technique a developer should use to programmatically retrieve Global Picklist options in a Test Method?",
      options: [
        "A. Use a static resource.",
        "B. Perform a callout to the Metadata API.",
        "C. Use the Schema namespace.",
        "D. Perform a SOQL Query.",
      ],
      answer: "C",
      title: "Question 42",
    },
    {
      content:
        "Example 1: AggregateResult[] groupedResults = [SELECT Campaignid, AVG(Amount) FROM Opportunity GROUP BY CampaignId]; for (AggregateResult ar : groupedResuits) { System.debug ('Campaign ID' + ar.get('CampaignId'-); System.debug ('Average amount' + ar.get('exprd')); } Example 2: AggregateResult[] groupedResults = [SELECT Campaignid, AVG(Amount) theAverage FROM Opportunity GROUP BY Campaignid]; for (AggregateResult ar : groupedResuits) { System.debug(*Campaign ID' + ar.get('CampaignId')); System.debug ('Average amount' + ar.get('theAverage')); } Example 3: AggregateResult[] groupedResults = [SELECT CampaignId, AVG(Amount) FROM Opportunity GROUP BY CampaignId]; for (AggregateResult ar : groupedResuits) System.debug(*Campaign ID' + ar.get('CampaignId')); System.debug('Average amount' + ar.get.AVG(-); } Example 4:AggregateResult[] groupedResults = [SELECT CampaigniId, AVG(Amount) theAverage FROM Opportunity GROUP BY Campaignid]; for (AggregateResult ar : groupedResults) { System.debug('Campaign ID' + ar.get('CampaignId')); System.debug ('Average amount' + ar.theAverage-; } Which two of the examples above have correct System.debug statements? Choose 2 answers",
      options: ["A. Example 4", "B. Example 2", "C. Example 1", "D. Example 3"],
      answer: "B,C",
      title: "Question 43",
    },
    {
      content:
        "What Salesforce tool lets you deploy/retrieve metadata, check status of apex jobs, and check responses of REST calls?",
      options: [
        "A. Streaming API",
        "B. Workbench",
        "C. Developer Console",
        "D. Force.com Migration Tool",
      ],
      answer: "B",
      title: "Question 44",
    },
    {
      content:
        "A Salesforce org has more than 50,000 contacts. A new business process requires a calculation that aggregates data from all of these contact records. This calculation needs to run once a day after business hours. Which two steps should a developer take to accomplish this? Choose 2 answers",
      options: [
        "A. Implement the Queuable Interface in the class that contains the aggregate calculation method.",
        "B. Use the @future annotation on the method that performs the aggregate calculation.",
        "C. Use the areadOnly annotation on the method that performs the aggregate calculation.",
        "D. Implement the schedulable Interface In the class that contains the aggregate calculation method.",
      ],
      answer: "A,D",
      title: "Question 45",
    },
    {
      content:
        "A developer has a Visual force page that automatically assign ownership of an Account to a queue save. The page appears to correctly assign ownership, but an assertion validating the correct ownership fails. What can cause this problem?",
      options: [
        "A. The test class does not implement the Queueabfe interface.",
        "B. The test class does not use the Bulk API for loading test data.",
        "C. The test class does not retrieve the updated value from the database.",
        "D. The test class does not use the seeAllData=true annotation,",
      ],
      answer: "C",
      title: "Question 46",
    },
    {
      content:
        "The use of the transient keyword In Visualforce Page Controllers helps with which common performance issued?",
      options: [
        "A. Reduces Load Times",
        "B. Reduces View State",
        "C. Improves Query Performance",
        "D. Improves Page Transfers",
      ],
      answer: "B",
      title: "Question 47",
    },
    {
      content:
        "Which tag should a developer use to display different text while an <apex:commandButton> is executing versus not executing?",
      options: [
        "A. <ApexactionStatus>",
        "B. <ApexpageMessages>",
        "C. <ApexactionSupper>",
        "D. <apexactionPoller>",
      ],
      answer: "A",
      title: "Question 48",
    },
    {
      content:
        "Which three approaches should a developer Implement to obtain the best performance for data retrieval when building a Lightning web component? Choose 3 answers",
      options: [
        "A. Use getRecordUi to obtain metadata.",
        "B. Use the Lightning Data Service.",
        "C. Use lazy load for occasionally accessed data.",
        "D. Use layoutTypes : ['Full'] to display a set of fields.",
        "E. Use (cacheable-true) whenever possible.",
      ],
      answer: "B,C,E",
      title: "Question 49",
    },
    {
      content:
        "A developer needs test data for Apex test classes. What can the developer use to provide test data to the test methods? (Choose two.)",
      options: [
        "A. List<sObject> Is = Test.loadData (Lead.sObjectType, fmyTestLeads f);",
        "B. List<sObject> Is = Test.loadDat (Lead.sObjectType, $Resource + 'myTestLeads f);",
        "C. myDataFactory.createTestRecords (10)",
        "D. Database.createTestRecords (10)",
      ],
      answer: "A,C",
      title: "Question 50",
    },
    {
      content:
        "A developer has generated Apex code from a WSDL for an external web service. The web service requires Basic authentication. What code should the developer use to authenticate?",
      options: [
        "A. Http.setHeader ('Authorization' , 'Basic QthZGprjpchVulHNchFtZQ!)",
        "B. stub.inputHttpHeaders_x.put('Authorization' , 'Basic QthZGprJpchVulHNchFtZQ')",
        "C. Http.setAuthentication('Basic QthZGprjpchVulHNchFtZQ')",
        "D. stub.authentication.put ('Authorization','Basic QthZGprjpchVulHNchFtZQ')",
      ],
      answer: "B",
      title: "Question 51",
    },
    {
      content:
        "A developer is working with existing functionality that tracks how many times a stage has changed for an Opportunity. When the opportunity's stage is changed, a workflow rule is fired to increase the value of a filed by one. The developer wrote an after trigger to create a child record when the field changes from 4 to 5.A user changes the stage of an Opportunities and manually sets the count field to 4. The count field updates to 5, but the child record is not created. What is the reason this is happening?",
      options: [
        "A. Trigger .old does not contain the updated value of the count field.",
        "B. After triggers fire before workflow rules.",
        "C. After triggers are not fired after field updates.",
        "D. Trigger .new does not change after a field update.",
      ],
      answer: "A",
      title: "Question 52",
    },
    {
      content:
        "Universal Containers uses a custom Lightning page to provide a mechanism to perform a step-by-step wizard search for Accounts. One of the steps in the wizard is to allow the user to input text into a text field, ERP_Number__c, that is then used in a query to find matching Accounts.A developer receives the exception 'SOQL query not selective enough. Which step should be taken to resolve the issue?",
      options: [
        "A. Mark the ERP_Number__c field as required.",
        "B. Move the SOQL query to within an asyncronous process.",
        "C. Mark the lRP_Number__c field as an external ID.",
        "D. Perform the SOQL query as part of a for loop.",
      ],
      answer: "C",
      title: "Question 53",
    },
    {
      content:
        "Customer billing data must be added and updated into Salesforce from a remote system on a weekly basis. Additionally, customer activity information must be extracted from Salesforce and put it into an on-premises data warehouse on a weekly basis. Which approach should be used to import data into Salesforce and export data out of Salesforce, taking into consideration that these imports and exports can interfere with end-user operations during business hours and involve large amounts of data?",
      options: [
        "A. Salesforce Connect to push data to and pull data from the remote systems",
        "B. Call-in directly from each remote system to Salesforce APIs to push and pull the data",
        "C. Batch Apex, where Salesforce pushes data to and pulls data from the remote systems",
        "D. Replication via third-party ETL to push data into Salesforce and pull data out in batches",
      ],
      answer: "A",
      title: "Question 54",
    },
    {
      content:
        "An environment has two Apex Triggers: an after-update trigger on Account and an after-update trigger on Contact. The Account after-update trigger fires whenever an Account's address is updated, and it updates every associated Contact with that address. The Contact after-update trigger fires on every edit, and it updates every Campaign Member record related to the Contact with the Contact's state.Consider the following: A mass update of 200 Account records' addresses, where each Account has 50 Contacts. Each Contact has 1 Campaign Member. This means there are 10,000 Contact records across the Accounts and 10,000 Campaign Member records across the contacts. What will happen when the mass update occurs?",
      options: [
        "A. There will be no error, since each trigger fires within its own context and each trigger does not exceed the limit of the number of records processed by DML| statements.",
        "B. There will be no error, since the limit on the number of records processed by DML statements is 50,000.",
        "C. The mass update will fail, since the two triggers fire in the same context, thus exceeding the number of records processed by DML statements.",
        "D. The mass update of Account address will succeed, but the Contact address updates will fail due to exceeding number of records processed by DML statements.",
      ],
      answer: "A",
      title: "Question 55",
    },
    {
      content:
        "What tool in the Developer Console contains information on SOQL query Cardinality?",
      options: [
        "A. Log Inspector",
        "B. Checkpoints tab",
        "C. Query Plan Tool",
        "D. Query Editor",
        "E. View State Tab",
      ],
      answer: "A",
      title: "Question 56",
    },
    {
      content:
        "As part of a custom development, a developer creates a Lightning Component to show how a particular opportunity progresses over time. The component must display the date stamp when any of the following fields change:* Amount Probability, Stage, or Close DateWhat is the most efficient way to Query such information?",
      options: [
        "A. ('StageName', Probability',Amount /CloseDate')];",
        "B. [Select Amount CloseDate. StageName, Probability FROM Opportunity_History WHERE Opportunityld - :oppId];",
        "C. [Select NewValue, Oldvalue FROM Opportunity FieldHistory WHERE Opportunityld = :oppId AND Field IN",
        "D. [Select Newvalue, Oldvalue From OpportunityField_History Where Oppportunity = oppid AND Field IN",
        "E. [Select Amount, CloseDate, StageName, Probability FROM OpportunityHistory WHERE Opportunityld = :oppId];",
      ],
      answer: "C",
      title: "Question 57",
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
      title: "Question 58",
    },
    {
      content:
        "A developer wrote a test class that successfully asserts a trigger on Account. It fires and updates data correctly in a sandbox environment.A salesforce admin with a custom profile attempts to deploy this trigger via a change set into the production environment, but the test class fails with an insufficient privileges error. What should a developer do to fix the problem?",
      options: [
        "A. Verify that Test, statement ( ) is not inside a For loop in the test class.",
        "B. Add system.runAd ( ) to the best class to execute the trigger as a user with the correct object permissions.",
        "C. Add seeAllData=true to the test class to work within the sharing model for the production environment.",
        "D. Configure the production environment to enable ''Run All tests as Admin User.''",
      ],
      answer: "B",
      title: "Question 59",
    },
    {
      content:
        "0f Universal Containers uses Big Objects to store almost a billion customer transactions called Customer_Transaction__b. These are the fields on Customer_Transaction__b: Account__c Program__c Points_Earned__c Location__c Transaction_Date__c The following fields have been identified as Index Fields for the Customer_Transaction__b object: Account__c, Program__c, and Transaction_Date__c. Which SOQL query is valid on the Customer_Transaction__b Big Object?",
      options: [
        "A. SELECT Account__c, Program__c, Transaction_Date__c FROM Customer_Transaction__bWHERE Account__c = '001R000000302D3' AND Program__c ='Shoppers' ANDTransaction_Date__c=2019-05-31T00:00Z",
        "B. SELECT Account__c, Program__c, Transaction_Date__c FROM Customer_Transaction__b WHEREAccount__c = '001R000000302D3' AND Program__c LIKE 'Shop%' AND Transaction_Date__c=2019-05-31T00:00Z",
        "C. SELECT Account__c, Program__c, Transaction_Date__c FROM Customer_Transaction__b WHEREAccount__c = '001R000000302D3' AND Program__c INCLUDES ('Shoppers', 'Womens') ANDTransaction_Date__c=2019-05-31T00:00Z",
        "D. SELECT Account__c, Program__c, Transaction_Date__c FROM Customer_Transaction__b WHEREAccount__c = '001R000000302D3' AND Program__c EXCLUDES ('Shoppers', 'Womens') ANDTransaction_Date__c=2019-05-31T00:00Z",
      ],
      answer: "A",
      title: "Question 60",
    },
    {
      content:
        "In an organization that has multi-currency enabled, a developer is tasked with building a Lighting Component that displays the top ten Opportunities most recently access by the logged in user. The developer must ensure the Amount and LastModifiedDate field values are displayed according to the user's locale. What is the most effective approach to ensure values displayed respect the user's locale settings?",
      options: [
        "A. Use a wrapper class to format the values retrieved via SOQL.",
        "B. Use the FORMAT() function in the SOQL query.",
        "C. Use the FOR VIEW clause in the SOQL Query.",
        "D. Use REGEX expressions to format the values retrieved via SOQL.",
      ],
      answer: "B",
      title: "Question 61",
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
        'B  Explanation Explanation/Reference: "Scope" parameter in "executeBatch" can be set up to 2,000 records ',
      title: "Question 62",
    },
    {
      content:
        "Universal Containers has a Visualforce page that displays a table every Container_ c being rented by a gives Account.. failing because some of the customers rent over 100,000 containers. What should a developer change about the Visualforce page to help with the page load errors?",
      options: [
        "A. Implement pagination with a StandardSetController.",
        "B. Use lazy loading and a transient List variable.",
        "C. Implement pagination with an OffsetController.",
        "D. Use JavaScript remoting with SOQL Offset.",
      ],
      answer: "A",
      title: "Question 63",
    },
    {
      content:
        "When calling a RESTful web service, a developer receives a JSON payload that has a data hierarchy that is nested three levels deep. How can the developer describe the external data?",
      options: [
        "A. Declare a class with three levels and deserialize the JSON typed with this class.",
        "B. Use the ANT migration tool, the custom metadata API, or the Dataloader.",
        "C. Use middleware to flatten the JSON and consume it as a new custom object.",
        "D. Deserialize the data untyped and then process it.",
      ],
      answer: "D",
      title: "Question 64",
    },
    {
      content:
        "Which code statement includes an Apex method named updateAccount in the class AccountController for use in a Lightning web component?",
      options: [
        "A. Import updateAccounts from @salesforceapex AccountController';",
        "B. Import updateAccounts from AccountControllerupdateAccount';",
        "C. Import updateAccounts from AccountController';",
        "D. Import updateAccounts from @salesforceapexAccountControllerupdateAccounts';",
      ],
      answer: "D",
      title: "Question 65",
    },
    {
      content:
        "A developer is creating a Lightning web component that contains a child component. The property stage is being passed from the parent to the child. The public property is changing, but the setOppList function is not being invoked. What should the developer change to allow this?",
      options: [
        "A. Create a custom event from the parent component to set the property.",
        "B. Move the logic from connectedCallback() nto renderedCallback().",
        "C. Move the logic from connectedCalIback() to constructor().",
        "D. Move the logic to a getter/setter pair.",
      ],
      answer: "D",
      title: "Question 66",
    },
    {
      content:
        "A company wants to incorporate a third-party web service to set the Address fields when an Account is inserted, if they have not already been set. What is the optimal way to achieve this?",
      options: [
        "A. Create an after insert trigger, call an Apex @InvocableMethod method from it, and make the callout from that Apex method",
        "B. Create a Process, call an Apex @InvocableMethod from it, and make the callout from that Apex method.",
        "C. Create an after insert trigger, call an @future(callout=true) method from it, and make the callout from that Apex method.",
        "D. Create a Process, call an Apex @future(callout=true) method from it, and make the callout from that Apex method.",
      ],
      answer: "C",
      title: "Question 67",
    },
    {
      content:
        "A developer created three Rollup Summary fields: Total_timesheets_c, Total_Approved_timesheet_c and Total_project_Timesheet_c in the custom object, project _cNow, the developer is tasked with created a new field to show the ratio between and approved",
      options: [
        "A. No test methods will be executed during deployment.",
        "B. Using a formula field reduces maintenance overhead.",
        "C. A test class that validates the formula field is needed for deployment.",
        "D. A formula field will calculate the value retroactively for existing records.",
      ],
      answer: "B,D",
      title: "Question 68",
    },
    {
      content:
        "A company has a custom object. Request__c. that has a field, Completed__c. and a Lookup to Opportunity, Opportunity__c. Which SOQL query will get a unique list of all of the Opportunity records that have a Completed Request?",
      options: ["A. ", "B. ", "C. ", "D. "],
      answer: "D",
      title: "Question 69",
    },
    {
      content: "The Metadata API___________.",
      options: [
        "A. Is used to create, retrieve, update or delete records, such as accounts, leads, and custom objects, and allows you to maintain passwords, perform searches, and much more",
        "B. Provides a powerful, convenient, and simple REST-based web services interface for interacting with Salesforce. Its advantages include ease of integration and development, and it's an excellent choice of technology for use with mobile applications and web projects",
        "C. Is based on REST principles and is optimized for loading or deleting large sets of data. You can use it to query, queryAII, insert, update, upsert, or delete many records asynchronously by submitting batches",
        "D. Is used to retrieve, deploy, create, update, or delete customizations for your org. The most common use is to migrate changes from a sandbox or testing org to your production environment",
      ],
      answer: "D",
      title: "Question 70",
    },
    {
      content: "Which API can b|e used to execute unit tests? (Choose three.)",
      options: [
        "A. Metadata API",
        "B. Streaming AP",
        "C. Test API",
        "D. SOAP API",
        "E. Tooling API",
      ],
      answer: "A,D,E",
      title: "Question 71",
    },
    {
      content:
        "In which of the following scenarios would it be acceptable to use programmatic sharing instead of declarative sharing? (Choose three.)",
      options: [
        "A. Every record created by sales users needs to be visible to their respective manager",
        "B. There is an existing, external system of truth for user access assignments which will continue to drive access and be integrated with salesforce",
        "C. Poor performance when using native sharing components",
        "D. Team functionality is required on custom objects",
        "E. You need to change record access to read/write for all users utilising a lightning component",
      ],
      answer: "B,C,D",
      title: "Question 72",
    },
    {
      content:
        "A developer created a Lightning web component for the Account record page that displays the five most recently contacted Contacts for an Account. The Apex method, getRecentContacts, returns a list of Contacts and will be wired to a property in the component. Which two lines must change in the above ode to make the Apex method able to be wired? Choose 2 answers",
      options: [
        "A. Remove private from line 09.",
        "B. Add AuraEnanled(cacheabletrue) to the line 08",
        "C. Add public to line 04.",
        "D. Add @AuraEnabled (cacheabletrue) to line 03.",
      ],
      answer: "C,D",
      title: "Question 73",
    },
    {
      content: "How many Territories can an instance of salesforce have?",
      options: ["A. 500", "B. 100", "C. 200", "D. 1000", "E. 400"],
      answer: "A",
      title: "Question 74",
    },
    {
      content:
        "What is the transaction limit for the number of records for SOQL queries?",
      options: [
        "A. 10,000",
        "B. 50,000",
        "C. There is no limit",
        "D. 5,000",
        "E. 20,000",
      ],
      answer: "B",
      title: "Question 75",
    },
    {
      content:
        "users complain that a page Is very slow to respond. Upon investigation, the query below Is found to perform slowly.SELECT id, Name FROM Contact WHERE CustomField_c null;Which two actions can a developer take to improve performance? Choose 2 answers",
      options: [
        "A. Contact Salesforce customer support to create a custom index to include null values",
        "B. Make the CustomFleld__c field an External ID.",
        "C. Add a UMir dause to the query to reduce the number of records returned.",
        "D. Make the field CustomReW__c required because Salesforce field Indexes do not Include nulls.",
      ],
      answer: "C,D",
      title: "Question 76",
    },
    {
      content:
        "A Developer wishes to improve runtime performance of Apex calls by caching results on the client. What is the best way to implement this?",
      options: [
        "A. Set a cookie in the browser for use upon return to the page.",
        "B. Decorate the server-side method with @AuraEnabled(cacheable=true).",
        "C. Decorate the server-side method with @AuraEnabled(storable=true).",
        "D. Call the setStorable() method on the action in the JavaScript client-side code.",
      ],
      answer: "B",
      title: "Question 77",
    },
    {
      content:
        "A developer implemented a custom data table in a Lightning web component with filter functionality. However, users are submitted support tickets about long load times when the filters are changed. The component uses an Apex method that is called to query for records the selected filters. What should the developer do to improve performance of the component?",
      options: [
        "A. Use SOSL to Query the records on filter change.",
        "B. Return all records into a list when the component is created and filter the array in JavaScript",
        "C. Use setStorable( ) in the Apex method to store the response in the client-side cache",
        "D. Use a selective SOQL query with a custom index.",
      ],
      answer: "C",
      title: "Question 78",
    },
    {
      content:
        "A company has the Lightning Component above that allows users to dick a button to save their changes and redirects them to a different page. Currently, when the user hits the Save button the records are getting saved, but they are not redirected. Which three techniques can a developer use to debug the JavaScript? Choose 3 answers",
      options: [
        "A. Use the browser's dev tools to debug the JavaScript.",
        "B. Enable Debug Mode for Lightning components for the user.",
        "C. Use consde.log() messages in the JavaScript.",
        "D. Use Developer Console to view the debug log.",
        "E. Use Developer Console to view checkpoints.",
      ],
      answer: "A,B,C",
      title: "Question 79",
    },
    {
      content:
        "A developer wishes to improve runtime performance of Apex calls by caching results on the client. What is the most efficient way to Implement this?",
      options: [
        "A. Set a cookie in the browser for use upon return to the page.",
        "B. Decorate the server-side method with @AuraEnabled(storagele=true).",
        "C. Decorate the server-side method with @AuraEnabled(caccheable-true).",
        "D. Call the setstoreable () method on the action in the JavaScript client-side code.",
      ],
      answer: "C",
      title: "Question 80",
    },
    {
      content:
        "What is the transaction limit on the max timeout for all callouts?",
      options: [
        "A. 60 seconds (synchronous); 200 seconds (async",
        "B. 120 seconds",
        "C. 120 seconds (synchronous); 200 seconds (async)",
        "D. 60 seconds",
        "E. There is no limit",
      ],
      answer: "B",
      title: "Question 81",
    },
    {
      content:
        "For compliance purposes, a company is required to track long-term product usage in their org. The information that they need to log will be collected from more than one object and, over time, they predict they will have hundreds of millions of records. What should a developer use to implement this?",
      options: [
        "A. Field History Tracking",
        "B. Big objects",
        "C. Field Audit Trail",
        "D. Setup Audit Trail",
      ],
      answer: "B",
      title: "Question 82",
    },
    {
      content:
        "A developer must create a way for external partners to submit millions of leads into Salesforce per day-How should the developer meet this requirement?",
      options: [
        "A. Publicly expose an Apex Web Service via Force.com Sites",
        "B. Host a Web-to-Lead form on the company website",
        "C. Publicly expose a Visualforce page via Force.com Sites",
        "D. Create a web service on Heroku that uses Heroku Connect",
      ],
      answer: "D",
      title: "Question 83",
    },
    {
      content:
        "What is the best way to display field-level error messages in Lightning?",
      options: [
        "A. ukinputDefaultError",
        "B. ukoutputText",
        "C. apex:message",
        "D. auraxomponent",
      ],
      answer: "A",
      title: "Question 84",
    },
    {
      content:
        "Universal Containers wants to use an external Web Service provided by a third-party vendor to validate that shipping and billing addresses are correct. The current vendor uses basic password authentication, but Universal Containers might switch to a different vendor who uses OAuth. What would allow Universal Containers to switch vendors without updating the code to handle authentication?",
      options: [
        "A. Dynamic Endpoint",
        "B. Custom Setting (List)",
        "C. Named Credential",
        "D. Custom Metadata",
      ],
      answer: "C",
      title: "Question 85",
    },
    {
      content: "Consider the following code snippet:Choose 2 answers",
      options: [
        "A. import getOrders from @salesforc/apex/c.OrderController.getAvailablOrders';",
        "B. import ( LightningElement-apt ) from 'lwc*.-",
        "C. import getOrders from ,@salesforce/apex/OrderController.getAvailableOrders';",
        "D. import { LightningElement, wire ) from 'lwc';",
      ],
      answer: "C,D",
      title: "Question 86",
    },
    {
      content:
        "A developer is asked to look into an issue where a scheduled Apex is running into DML limits. Upon investigation, the developer finds that the number of records processed by the scheduled Apex has recently increased to more than 10,000. What should the developer do to eliminate the limit exception error?",
      options: [
        "A. Use the @future annotation.",
        "B. Implement the Bathable interface.",
        "C. Implement the Queueable interface.",
        "D. Use platform events.",
      ],
      answer: "B",
      title: "Question 87",
    },
    {
      content:
        "A developer is using a third-party JavaScript library to create a custom user interface in Visualforce. The developer needs to use JavaScript to get data from a controller method in response to a user action. How can the developer accomplish this?",
      options: [
        "A. Use <apex:actionSupport> to enable JavaScript support for the controller method",
        "B. Use the @RemoteAction annotation on the method definition with JavaScript Remoting",
        "C. Use the $Controller global variable to access the controller method via JavaScript",
        "D. Use <apex:actionFunction> to create a JavaScript wrapper for the controller method",
      ],
      answer: "B",
      title: "Question 88",
    },
    {
      content:
        "Universal Containers (UC) wants to develop a customer community to help their customers log issues with their containers. The community needs to function for their German- and Spanish-speaking customers also. UC heard that it's easy to create an international community using Salesforce, and hired a developer to build out the site. What should the developer use to ensure the site is multilingual?",
      options: [
        "A. Use Custom Labels to ensure custom messages are translated property.",
        "B. Use Custom Objects to translate custom picklist values.",
        "C. Use Custom Settings to ensure custom messages are translated properly.",
        "D. Use Custom Metadata to translate custom picklist values.",
      ],
      answer: "A",
      title: "Question 89",
    },
    {
      content:
        "What is a recommended practice with regard to the Apex CPU limit? (Choose two.)",
      options: [
        "A. Use Map collections to cache sObjects",
        "B. Reduce view state in Visualforce pages",
        "C. Optimize SOQL query performance",
        "D. Avoid nested Apex iterations",
      ],
      answer: "A,D",
      title: "Question 90",
    },
    {
      content:
        "A developer created and tested a Visualforce page in their developer sandbox, but now receives reports that users are encountering ViewState errors when using it in Production. What should the developer ensure to correct these errors?",
      options: [
        "A. Ensure properties are marked as private.",
        "B. Ensure properties are marked as Transient.",
        "C. Ensure profiles have access to the Visualforce page.",
        "D. Ensure queries do not exceed governor limits.",
      ],
      answer: "B",
      title: "Question 91",
    },
    {
      content:
        "Exhibit.A developer created a JavaScript function as a part of a Lightning web component (LWC) that surfaces information... about leads by imperatively calling getFetchLeadList when certain criteria are met. What are these changes the developer should implement in the Apex class above to ensure the LWC can displ... data efficiently while preserving security? Choose 3 answers",
      options: [
        "A. Implement the without sharing keyword in the class declaration.",
        "B. Annotate the Apex method with 8AuraEnabled (Cacheable-true).",
        "C. Use the WITH SECURITY_ENFORCED clause within the SOQL query.",
        "D. Annotate the Apex method with gAuraEnabled-",
        "E. Implement the with sharing keyword in the class declaration.",
      ],
      answer: "B,C,E",
      title: "Question 92",
    },
    {
      content:
        "Which statement is true about using ConnectApi namespace (also called Chatter in Apex)? (Choose two.)",
      options: [
        "A. Chatter in Apex methods honor the 'with sharing' and 'without sharing' keywords",
        "B. Chatter in Apex methods do not run in system mode; they run in the context of the current user",
        "C. Chatter in Apex operations are synchronous, and they occur immediately",
        "D. Many test methods related to Chatter in Apex require the IsTest (SeeAIIData=true) annotation",
      ],
      answer: "B,D",
      title: "Question 93",
    },
    {
      content:
        "Universal Containers requested the addition of a third-party Map widget to an existing Lightning web component. Which two actions should the developer take to implement this requirement? Choose 2 answers",
      options: [
        "A. Import loadscript from lightning platformResourceLoader.",
        "B. Use a content distribution network and Include <script> <script> tags In the component.",
        "C. Import the third-party JavaScript module directly Into the component.",
        "D. Upload the third-party JavaScript library as a static resource that Imports Into the component.",
      ],
      answer: "A,D",
      title: "Question 94",
    },
    {
      content:
        "ABC Company has an Apex process that makes multiple extensive database operation and web service callouts. The database processes and web services can take a length time to run and must be run sequentially. How should the developer write this Apex code without running into governor limits and system limitations?",
      options: [
        "A. Use Apex Scheduler to scheduled each process.",
        "B. Use Limits class to stop entire process once governor limits are reached.",
        "C. Use Queueable Apex to chain the jobs to run sequentially.",
        "D. Use multiple @future methods for each process and callout.",
      ],
      answer: "B",
      title: "Question 95",
    },
    {
      content:
        "Which annotation should a developer use on an Apex method to make it available to be wired to a property In a Lightning web component?",
      options: [
        "A. @QRemoteAction(caccheable=true)",
        "B. @AuraEnabledcacheable=true)",
        "C. @RemoteAction",
        "D. @AuraEnabled",
      ],
      answer: "B",
      title: "Question 96",
    },
    {
      content:
        "A developer has a Debug method within a class, which is invoked hundreds of times. What is the optimal functionality in the Developer Console to count the number of calls made to the method?",
      options: [
        'A. The "Execution Log" Panel',
        'B. The "Executed Units" tab under the Execution Overview Panel',
        'C. The "Execution Stack" Panel',
        'D. The "Execution Tree" tab under the Stack Tree Panel',
      ],
      answer: "B",
      title: "Question 97",
    },
    {
      content:
        "This sales team needs a custom Visualforce page to enter sales orders. When a product is selected on the Visualforce page, a web service is invoked to determine if the product is in stock, and the result is displayed on the page. How can a developer write this page to display the result of the web service and ensure governor limits for concurrent usage are not exceeded?",
      options: [
        "A. Use visualforce Remoting to handle the web service callout.",
        "B. Use the Salesforce Metadata API in the web service callout.",
        "C. Use Continuation that is invoked when a Submit button is clicked.",
        "D. Use an Apex trigger with callout=true annotation.",
      ],
      answer: "C",
      title: "Question 98",
    },
    {
      content:
        "When developing a Visualforce page that will be used by a global organization that does business in many languages and many currencies, which feature should be used? (Choose three.)",
      options: [
        "A. Translation Workberic",
        "B. Custom Labels",
        "C. getLocalCurrency()",
        "D. Global Labels",
        "E. convertCurrency()",
      ],
      answer: "A,B,E",
      title: "Question 99",
    },
    {
      content:
        "A developer needs to create a Lightning page for entering Order Information. An error message should be displayed if the zip code entered as part of the Order's shipping address is not numeric. What is a recommended way for the error message be displayed to the end user?",
      options: [
        "A. Use the apex:message tag to display errors",
        "B. Use the aura:component tag to display errors",
        "C. Use the uhoutputText tag to display errors",
        "D. Use the uhinputDefaultError tag to display errors",
      ],
      answer: "D",
      title: "Question 100",
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
      title: "Question 101",
    },
    {
      content:
        "A developer created a JavaScript library that simplifies the development of repetitive tasks and features and uploaded the library as a static resource called jsutils in Salesforce. Another developer is coding a new Lightning web component (LWC) and wants to leverage the library. Which statement properly loads the static resource within the LWC?",
      options: [
        "A. const jsUtility = SA.get ('SReaource.jsUtils');",
        "B. import {jsUtilities} from '@salesforce/reaourceUrljsUtila';",
        "C. <lightning-require scripts=N { ! SReaource. j sUtils}''/>",
        "D. import jUtilities from '@salesforce/reaourceUrljsUtila';",
      ],
      answer: "D",
      title: "Question 102",
    },
    {
      content:
        'A custom field Exec_Count_c of type Number is created on an Account object. An account record with value of "1" for a: Exec__Count_c is saved. A workflow field update is defined on the Exec_Count_c field, to increment its value every time an account record is created or updated. The following trigger is defined on the account:trigger ExecOrderTrigger on Account (before insert, before update, after insert, after update){ for (Account accountlnstance: Trigger.New){ if (Trigger . isBefore){ accountlnstance Exec_Count_c += 1; } System, debug (accountlnstance.Exec_Count_c); } }',
      options: ["A. 1,2,3,3", "B. 2, 2, 4, 4", "C. 2,2,3,3", "D. 1,2,3,4"],
      answer: "B",
      title: "Question 103",
    },
    {
      content:
        "Given the following containment hierarchy:What is the correct way to communicate the new value of a property named ''passthrough'' to my-parent component if the property is defined within my-child-component?A)B)C)D)",
      options: ["A. Option C", "B. Option B", "C. Option A", "D. Option D"],
      answer: "B",
      title: "Question 104",
    },
    {
      content: "What is the transaction limit on the number of callouts?",
      options: ["A. 50", "B. 100", "C. 200", "D. There is no limit", "E. 150"],
      answer: "A",
      title: "Question 105",
    },
    {
      content:
        "Which two scenarios require an Apex method to be called imperatively from a Lightning web component? Choose 2 answers",
      options: [
        "A. Calling a method that is not annotated with cacheable=true",
        "B. Calling a method with the click of a button",
        "C. Calling a method that makes a web service callout",
        "D. Calling a method that is external to the main controller for the Lightning web component",
      ],
      answer: "A,B",
      title: "Question 106",
    },
    {
      content: "What is a potential design issue with the following code?",
      options: [
        "A. The code will result in a System.LimitException: Apex CPU time limit exceeded error",
        "B. The code will result in a System.LimitException : Too many script statements error",
        "C. SOQL could be avoided by creating a formula field for StageName in Account from the related Opportunity",
        "D. The code will result in a System.DmException:Entity_is_Deleted error",
      ],
      answer: "A",
      title: "Question 107",
    },
    {
      content:
        "UC Loans is a small company with a part time Salesforce administrator. UC Loans wants to create a Loan__c record whenever an Opportunity is won. What is the optimal solution for UC Loans to accomplish this?",
      options: [
        "A. Process Builder",
        "B. Workflow Rule",
        "C. Quick Action",
        "D. Apex Trigger",
      ],
      answer: "A",
      title: "Question 108",
    },
    {
      content:
        "What is the transaction limit for the number of records for SOSL?",
      options: [
        "A. 200 (synchronous), 100 (async)",
        "B. 100 (synchronous), 200 (async)",
        "C. 2,000",
        "D. There is no limit",
        "E. 20",
      ],
      answer: "C",
      title: "Question 109",
    },
    {
      content:
        "Line 1 public class AttributeTypes Line 2 { Line 3 private final String[] arrayItems; Line 4 Line 5 @AuraEnabled Line 6 public List<String> getStringArray() { Line 7 Strings+ arrayItems = new String*+, 'red', 'green', 'blue' -; Line 8 return arrayItems; Line 9 } Line 10 } Consider the Apex controller above that is called from a Lightning Aura Component. What is wrong with it?",
      options: [
        "A. Line 1: class must be global",
        "B. Lines 1 and 6: class and method must be global",
        "C. Line 6: method must be static",
        "D. Line 8: method must first serialize the list to JSON before returning",
      ],
      answer: "C",
      title: "Question 110",
    },
    {
      content:
        "What are the ways a developer can create test data of Contacts? (Choose two.)",
      options: [
        "A. myDataFactory.createContacts(10)",
        "B. Test.createTestData ()",
        "C. Test.loadTestRecords(Contact.sObjectType, 'staticResource')",
        "D. Test.loadData(Contact.sObjectType, 'staticResource')",
      ],
      answer: "A,D",
      title: "Question 111",
    },
    {
      content:
        "A developer receives a LimitException: Too many query rows: 50001 error when running code. What debugging approach using the Developer Console provides the fastest and most accurate mechanism to identify a specific component that may be returning an unexpected number of rows?",
      options: [
        "A. Use the Execution Overview to see the number of rows returned by each Executed Unit",
        "B. Count the number of Row Limit warning messages in the Debug Logs",
        "C. Filter the Debug Log on SOQL_EXECUTE_END statements to track the results of each SOQL Query",
        "D. Add System.debug(System.getQueryRows()) to the code to track SOQL usage",
      ],
      answer: "C",
      title: "Question 112",
    },
    {
      content:
        "A developer receives an error when trying to call a global server-side method using the @remoteAction decorator. How can the developer resolve the error?",
      options: [
        "A. Decorate the server-side method with (static=false)",
        "B. Add static to the server-side method signature.",
        "C. Change the function signature to be private static.",
        "D. Decorate the server-side method with (static=true).",
      ],
      answer: "B",
      title: "Question 113",
    },
    {
      content:
        'When calling a RESTful web service, the developer must implement two-way SSL authentication to enhance security. The Salesforce admin has generated a self-sign certificate within Salesforce with a unique name of "ERPSecCertificate".Consider the following code snippet:Which method must the developer implement in order to sign the HTTP request with the certificate?',
      options: [
        "A. req.setHeader('certificate', 'ERPSecCertificate');",
        "B. req.setSecureCertificate( 'ERPSecCertificate');",
        "C. req.setClientCertificateName('ERPSecCertificate');",
        "D. req.setSecure('ERPSecCertificare)';",
      ],
      answer: "C",
      title: "Question 114",
    },
    {
      content:
        "A developer creates a Lightning web component to allow a Contact to be quickly entered- However, error messages are not displayed. Which component should the developer add to the form to display error messages?",
      options: [
        "A. lightning-error",
        "B. apex:messages",
        "C. lightning-messages",
        "D. aura:messages",
      ],
      answer: "C",
      title: "Question 115",
    },
    {
      content:
        "A developer must perform a complex SOQL query that joins two objects in a Lightning component. how can the Lightning component execute the query?",
      options: [
        "A. Invoke an Apex dass with the method annotated as @AiraEnabled to perform the query.",
        "B. Write the query in a custom Lightning web component wrapper and invoke from the Lightning component.",
        "C. Create a Process Builder to execute the query and invoke from the Lightning component.",
        "D. Use the SaJesforce Streaming API to perform the SOQL query.",
      ],
      answer: "B",
      title: "Question 116",
    },
    {
      content:
        "A developer is creating a Lightning web component to display a calendar. The component will be used in multiple countries. In some locales, the first day of the week is a Monday, or a Saturday, or a Sunday. What should the developer do to ensure the calendar displays accurately for users in every locale?",
      options: [
        "A. Import the firstDayofWeek property in the component.",
        "B. Use Userinfor. getLocale () in the component.",
        "C. Query the FirstDayOfweek field from the Locale for the current user.",
        "D. Use a custom metadata type to store key/value pairs.",
      ],
      answer: "B",
      title: "Question 117",
    },
    {
      content:
        "A developer writes the following Apex trigger so that when a Case is closed, a single Survey record is created for that Case. The issue is that multiple Survey_c records are being created per Case. What could be the cause of this issue?",
      options: [
        "A. A workflow rule is firing with a Create Task action",
        "B. A user is editing the record multiple times",
        "C. A workflow rule is firing with a Field Update action",
        "D. A user is creating the record as Closed",
      ],
      answer: "B",
      title: "Question 118",
    },
    {
      content:
        "Sometimes events on Salesforce need to be handled by an external system due to the scale or type of process being executed. Consider the use case of a user in Salesforce needing to get pricing for an order they are building in Salesforce while on the phone with a customer. The pricing logic already exists in a third-party system. Instead of recreating this logic in Salesforce, it will be leveraged by making a request of the third-party system. The response, in this case the pricing, will be returned and stored back in Salesforce. What is the optimal solution?",
      options: [
        "A. An Apex trigger that upon saving the Order will make a real-time Apex callout, saving the pricing back in Salesforce",
        "B. A Visualforce page that can make a real-time Apex callout to display and save the pricing back in Salesforce",
        "C. A Process Builder process and Outbound Message to fetch the pricing upon save and store the pricing in Salesforce",
        "D. An ETL tool to process batches of newly saved Orders every few minutes to store the pricing back in Salesforce",
      ],
      answer: "A",
      title: "Question 119",
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
      title: "Question 120",
    },
    {
      content: "Which is a valid Apex REST Annotation? (Choose two.)",
      options: [
        "A. @HttpAction",
        "B. @HttpDelete",
        "C. @Http Patch",
        "D. @HttpUpsert",
      ],
      answer: "B,C",
      title: "Question 121",
    },
    {
      content:
        "What is a valid request for the following REST method? (Choose two.)@HttpPost global static void myPostMethod(String si, Integer il, Boolean bl, String 52)",
      options: [
        "A. <request> <sl>my first string</sl> <ll>123</il> <32>my second string</32> <bl>false</bl> </request>",
        'B. il" : 123, "SI" : "my first string", "S2" : "my second string", "bl" : false',
        'C. <request> <sl>"my first string"</sl> <il>123</il> <sZ>!,my second string"</32> <bl>false</bl> </request>',
        'D. si" : "my first string", 11" : "123", "bl" : "false", "S2" : "my second string"',
      ],
      answer: "B,C",
      title: "Question 122",
    },
    {
      content: "What is a consideration when testing batch Apex? (Choose two.)",
      options: [
        "A. Test methods must execute the batch with a scope size of less than 200 records",
        "B. Test methods must run the batch between TeststartTestQ and Test.stopTestQ",
        "C. Test methods must use the @isTest (SeeAIIData=true) annotation",
        "D. Test methods must call the batch execute() method once",
      ],
      answer: "A,B",
      title: "Question 123",
    },
    {
      content:
        "A developer has written the following method:static void processList(List<sobject> input){Which code block can be used to call the method?",
      options: [
        "A. processList([SELECT Id, Name FROM sObject WHERE Type = 'Account'])",
        "B. processList (ace)",
        "C. for Account ace : [SELECT Id, Name FROM Account])",
        "D. processList ([FIND 'Acme\" 'RETURNING Account])",
      ],
      answer: "A",
      title: "Question 124",
    },
    {
      content:
        "Global with sharing class MyRemoter { public String accountName { get; set; } public static Account account { get; set; } public AccountRemoter(} {} @RemoteAction global static Account getAccount (String acccuntName) { account = [SELECT Id, Name, NumberOfEmployees FROM Account WHERE Name = :accountName]; return account; } } Consider the Apex class above that defines a RemoteAction used on a Visualforce search page. Which code snippet will assert that the remote action returned the correct Account?",
      options: [
        "A. Account a = MyRemoter.getAccount ('TestAccount'):System.assertEquals{ 'TestAccount', a.Name };",
        "B. MyRemoter remote = new MyRemoter('TestAccount'};Account a = remote.getAccount {);System.assertEquals(, ''TestAccount', a.Name -;",
        "C. MyRemoter remote = new MyRemoter();Account a = remote.getAccount ({'TestAccount');System.assertEquals, 'TestAcccunt', a.Name -;",
        "D. Account a = controller.getAccount('TestAccount');System.assertEquals(, 'TestAccount', a.Name } ;",
      ],
      answer: "A",
      title: "Question 125",
    },
    {
      content: "What is the transaction limit for the number of SOSL queries?",
      options: [
        "A. There is no limit",
        "B. 20",
        "C. 2,000",
        "D. 100 (synchronous), 200 (async)",
        "E. 200 (synchronous), 100 (async)",
      ],
      answer: "B",
      title: "Question 126",
    },
    {
      content:
        "A developer wrote a Visualforce page for Sales Reps to add products to an order. The page takes a URL query parameter, productFamily, which filters the product results. The test method for the filter behavior has an assertion failing due to an incorrect number of results.Why could the test be failing? (Choose two.)",
      options: [
        "A. The test does not create product data",
        "B. The test does not call Test.startTest()",
        "C. The test is not run by a System Administrator",
        "D. The test does not set the current page reference",
      ],
      answer: "A,D",
      title: "Question 127",
    },
    {
      content:
        "Which two relationship queries use the proper syntax? Choose 2 answers",
      options: [
        "A. SELECT Id, Name, Account __r.Name FROM Contact WHERE Account r.Industry = 'Media'",
        "B. SELECT Name, (SELECT LastName FROM Contacts) FROM Account",
        "C. SELECT Id, Name, Account.Name FROM Contact WHERE Account.Industry = 'Media'",
        "D. SELECT Name, (SELECT LastName FROM Contacts__r) FROM Account",
      ],
      answer: "B,C",
      title: "Question 128",
    },
    {
      content:
        "Which use case can only be performed by using asynchronous Apex?",
      options: [
        "A. Calling a web service from an Apex trigger",
        "B. Processing high volumes of records",
        "C. Updating a record after the completion of an insert",
        "D. Scheduling a batch process to complete in the future",
      ],
      answer: "A",
      title: "Question 129",
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
      title: "Question 130",
    },
    {
      content:
        "Which three Visualforce components can be used to initiate Ajax behavior to perform partial page updates? Choose 3 answers",
      options: ["A. ", "B. ", "C. ", "D. ", "E. "],
      answer: "C,D,E",
      title: "Question 131",
    },
    {
      content:
        "As part of a custom development, a developer creates a Lightning component to show how a particular opportunity progresses over time. The component must display the date stamp when any of the following fields change:* Amount, Probability, Stage, or Close DateHow should the developer access the data that must be displayed?",
      options: [
        "A. Execute a SOQL query for Amount, Probability, Stage, and Close Date on the OpportunityHistory object.",
        "B. Create custom a custom date field on Opportunity for each field to track the previous date and execute a SOQL query for date fields.",
        "C. Subscribe to the Opportunity Change Data Capture event in the Lightning component.",
        "D. Subscribe to the OpportunityHistory Change Data Capture event in the Lightning component.",
      ],
      answer: "B",
      title: "Question 132",
    },
    {
      content:
        "A developer created an Apex class that makes outbound RESTful callout. The following was created to send a fake response in Apex test methods. Which method can be called to return this fake response in the test methods?",
      options: [
        "A. testSetup",
        "B. Test.setTestData",
        "C. TestcreateStub",
        "D. TestsetMock",
      ],
      answer: "D",
      title: "Question 133",
    },
    {
      content:
        "What is a best practice when unit testing a controller? (Choose two.)",
      options: [
        "A. Simulate user interaction by leveraging Test.setMock()",
        "B. Access test data by using seeAIIData=true",
        "C. Set query parameters by using getParameters().put",
        "D. Verify correct references by using getURL()",
      ],
      answer: "C,D",
      title: "Question 134",
    },
    {
      content:
        "Which type of controller is best suited when you want to add custom functionality to a standard controller page, or when you want reusable functionality throughout pages?",
      options: [
        "A. Standard List/Set Controller",
        "B. Standard Controller",
        "C. Controller Extensions",
        "D. Custom Controller",
      ],
      answer: "C",
      title: "Question 135",
    },
    {
      content:
        "The Salesforce admin at Cloud Kicks created a custom object called Region__c to store all postal zip codes in the United States and the CloudKicks sales region the zip code belongs to.Cloud Kicks wants a trigger on the Lead to populate the Region based on the Lead's zip code.A)B)D)",
      options: ["A. Option D", "B. Option A", "C. Option C", "D. Option B"],
      answer: "B",
      title: "Question 136",
    },
    {
      content:
        "What can be done to improve the performance of the insert trigger shown above?",
      options: ["A. ", "B. ", "C. ", "D. "],
      answer: "C",
      title: "Question 137",
    },
    {
      content:
        "In a VisualForce page with a VisualForce component that has rendered set to false when the page loads, how can a developer ensure it will show on a re-render?",
      options: [
        "A. Perform a full page refresh since rendered elements cannot be re-rendered without refreshing.",
        "B. Set the rendered attribute of the component to true and re-render the component.",
        "C. Set the re-render attribute of the component to true.",
        "D. Set the rendered attribute of the component to true and re-render a parent component.",
      ],
      answer: "D",
      title: "Question 138",
    },
    {
      content:
        "A developer has created a Visualforce page that uses a third-party JavaScript framework. The developer has decided to supply data to the JavaScript functions using JavaScript Remoting for Apex Controllers. What is the correct syntax to declare a remote method in Apex? (Choose two.)",
      options: [
        "A. @RemoteAction global String getTable()",
        "B. @RemoteAction global static String getTable()",
        "C. @RemoteAction public static String getTable()",
        "D. @RemoteObject global static String getTableQ",
      ],
      answer: "B,C",
      title: "Question 139",
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
      title: "Question 140",
    },
    {
      content:
        "An Apex trigger creates a Contract record every time an Opportunity record is marked as Closed end Won. This trigger is working great, except (due to a recent acquisition) historical Opportunity records need to be loaded into the Salesforce instance.When a test batch of records are loaded, the Apex trigger creates Contract records. A developer is tasked with preventing Contract records from being created when mass loading the Opportunities, but the daily users still need to have the Contract records created. What is the most extendable way to update the Apex trigger to accomplish this?",
      options: [
        "A. Add the Profile ID of the user who loads the data to the trigger so the trigger will not fire for this user.",
        "B. Use a Hierarchy Custom Setting to skip executing the logic inside the trigger for the user who loads the data.",
        "C. Add a Validation Rule to the Contract to prevent Contract creation by the user who loads the data.",
        "D. Use a List Custom Setting to disable the trigger for the user who loads the data.",
      ],
      answer: "B",
      title: "Question 141",
    },
    {
      content:
        "Universal Containers has an existing automation where a custom record called Account Plan is created upon an Account being marked as a Customer. Recently, a Workflow Rule was added so that whenever an Account is marked as a Customer, a 'Customer Since' date field is updated with today's date.Now, since the addition of the Workflow Rule, two Account Plan records are created whenever the Account is marked as a Customer. What might cause this to happen?",
      options: [
        "A. The Apex Trigger responsible for the record creation does not use a static variable to ensure It only fires once.",
        "B. The Process Builder responsible for the record creation fires before and after the Workflow rule.",
        "C. The Workflow Rule responsible for the record creation fires twice because the 'Customer Since' field Update Is marked as 'Re-evaluate Workflow Rules After Field Change",
        "D. The Apex Trigger responsible for the record creation is not bulk sate and calls insert inside of a for loop.",
      ],
      answer: "C",
      title: "Question 142",
    },
    {
      content:
        "A developer gets an error saying 'Maximum Trigger Depth Exceeded.' What is a possible reason to get this error message?",
      options: [
        "A. The SOQL governor limits are being hit.",
        "B. A Process Builder is running that sends mass emails.",
        "C. There are numerous DML operations in the trigger logic.",
        "D. Trigger is recursively invoked more than 16 times.",
      ],
      answer: "D",
      title: "Question 143",
    },
    {
      content:
        "A company accepts orders for customers in their enterprise resource planning (ERP) crder__c records with a lookup field to Account. The Account object has an External ID field, ERP_Customer_ID__c. What should the integration use to create new Order__c records that will automatically be related to the correct Account?",
      options: [
        "A. Upsert on the Account and specify the ERP_Customer_ID__c.",
        "B. Insert on the Order__c object followed by an update on the Order__c object.",
        "C. Upsert on the Order__c object and specify the ERP_Customer_ID__c.",
        "D. Merge on the Order__c object and specify the ERP_Customer_ID__c.",
      ],
      answer: "B",
      title: "Question 144",
    },
    {
      content:
        "Which two best practices should the developer Implement to optimize this code? Choose 2 answers",
      options: [
        "A. Remove the DML statement.",
        "B. Use a collection for the DML statement.",
        "C. Query the Pricing_structure__c records outside of the loop.",
        "D. Change the trigger context to after update, after insert.",
      ],
      answer: "A,C",
      title: "Question 145",
    },
    {
      content:
        "A developer has created a Team Member sObject that has a Master-Detail relationship to a Project sObject and a Lookup relationship to the User sObject. The developer must ensure that a User listed on a Team Member record has Read-Write access to the parent Project record. How can the developer accomplish this if the Project sObject has a Private sharing model and thousands of Project records?",
      options: [
        "A. Create a Controller that uses the Without Sharing keyword",
        "B. Create a Project Sharing Rule that shares to the Team Member Group",
        "C. Create a Criteria-Based Sharing Rule on the Project sObject",
        "D. Create a Team Member Trigger that inserts Project_Share records",
      ],
      answer: "D",
      title: "Question 146",
    },
    {
      content:
        "A company uses Opportunism to track sales to their customers and their org has millions of Opportunities. They want to begging to track revenue over time through a related Revenue object.As part of their initial implementation, they want to perform a one-time seeding of their data by automatically creating and populating Revenue records for Opportunities, based on complex logic. They estimate that roughly 100,000 Opportunities will have revenue records and populated. What is the optimal way to automate this?",
      options: [
        "A. Use Database.txtcuteBatch() to invoke a Database.Batchable class.",
        "B. Use Database.executeBatch() to invoke a Queueable dass.",
        "C. Use System.enqueueJob>() to Invoke a Queueable class.",
        "D. Use System.scheduleJob() to schedule a Database.Scheduleable class.",
      ],
      answer: "A",
      title: "Question 147",
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
      title: "Question 148",
    },
    {
      content:
        "A company has a custom object Sales_Help_Request__c that has a Lookup relationship to Opportunity. The Sales_Help_Request__c has a number field, Number_of_Hours__c, that represents the amount of time spent on the Sales_Help_Request__c.A developer is tasked with creating a field, Total_Hours__c, on Opportunity that should be the sum of all of the Number_of_Hours__c values for the Sales_Help_Request__c records related to that Opportunity. What should the developer use to implement this?",
      options: [
        "A. A roll-up summary field on the Opportunity object",
        "B. A workflow rule on the Sales_Help_Request__c object",
        "C. A trigger on Sales_Help_Request__c",
        "D. A trigger on the Opportunity object",
      ],
      answer: "C",
      title: "Question 149",
    },
    {
      content:
        "A developer creates an application event that has triggered an infinite loop. What may have caused this problem?",
      options: [
        'A. An event is fired ontouchend" and is unhandled.',
        "B. The event handler calls a trigger.",
        "C. The event Is fired from a custom renderer.",
        "D. The event has multiple handlers registered in the project.",
      ],
      answer: "C",
      title: "Question 150",
    },
    {
      content:
        "A developer must create a custom pagination solution for accessing approximately 2000 records and displaying 50 records on each page. Data from Salesforce will be accessed via an API and not via Apex. How can the developer meet these requirements? (Choose two.)",
      options: [
        "A. Use a StandardSetController",
        "B. Use LIMIT 50 in SOQL queries",
        "C. Use CURSOR 50 in SOQL queries",
        "D. Use OFFSET in SOQL queries",
      ],
      answer: "B,D",
      title: "Question 151",
    },
    {
      content: "What is the transaction limit on the recursive trigger depth?",
      options: ["A. 16", "B. There is no limit", "C. 10", "D. 3", "E. 17"],
      answer: "A",
      title: "Question 152",
    },
    {
      content:
        "As part of their quoting and ordering process, a company needs to send PDFs to their document storage system's REST endpoint that supports OAuth 2.0. Each Salesforce user must be individually authenticated with the document storage system to send the PDF. What is the optimal way for a developer to implement the authentication to the REST endpoint?",
      options: [
        "A. Hierarchy Custom Setting with a password custom field",
        "B. Named Credential with Password Authentication",
        "C. Hierarchy Custom Setting with an OAuth token custom field",
        "D. Named Credential with an OAuth Authentication Provider",
      ],
      answer: "D",
      title: "Question 153",
    },
    {
      content:
        "The Account edit button must be overridden in an org where a subset of users still use Salesforce Classic. The org already has a Lightning Component that will do the work necessary for the override, and the client wants to be able to reuse it,How should a developer implement this?",
      options: [
        "A. Override the edit button for both Lightning and Classic with a Lightning Component.",
        "B. Override the edit button for Lightning with a Lightning Page; and for Classic, override the edit button with a Visualforce pag That contains the Lightning Component.",
        "C. the edit button for both Lightning and Classic with a new Visualforce page.",
        "D. Override the edit button for Lightning with a Lightning Component; and for Classic, override the edit button with a Visualforce page that contains the Lightning Component.",
      ],
      answer: "D",
      title: "Question 154",
    },
  ],
});