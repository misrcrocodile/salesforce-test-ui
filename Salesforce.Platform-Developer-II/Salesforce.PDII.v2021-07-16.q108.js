window.testContent = window.testContent || [];
var testId = "Salesforce.Platform-Developer-II";
var testName = "Salesforce.Platform-Developer-II";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "Salesforce.Platform-Developer-II.v2021-07-16.q108",
  content: [
    {
      content:
        "A company has a custom object Sales_Help_Request__c that has a Lookup relationship to Opportunity. The Sales_Help_Request__c has a number field, Number_of_Hours__c, that represents the amount of time spent on the Sales_Help_Request__c.A developer is tasked with creating a field, Total_Hours__c, on Opportunity that should be the sum of all of the Number_of_Hours__c values for the Sales_Help_Request__c records related to that Opportunity. What should the developer use to implement this?",
      options: [
        "A. A trigger on Sales_Help_Request__c",
        "B. A trigger on the Opportunity object",
        "C. A workflow rule on the Sales_Help_Request__c object",
        "D. A roll-up summary field on the Opportunity object",
      ],
      answer: "A",
      title: "Question 1",
    },
    {
      content:
        "A company has a custom component that allows users to search for records of a certain object type by invoking an Apex Controller that returns a list of results based on the user's input, when the search Is completed, a searchComplete event is fired, with the results put in a results attribute of the event. The component is designed to be used within other components and may appear on a single page more than once. What is the optimal code that should be added to fire the event when the search has completed?",
      options: ["A. ", "B. ", "C. ", "D. "],
      answer: "C",
      title: "Question 2",
    },
    {
      content:
        "A developer Is asked to develop a new AppExthange application. A feature of the program creates Survey records when a Case reaches a certain stage and Is of a certain Record Type. This feature needs to be configurable, as different Salesforce instances require Surveys at different times. Additionally, the out-of-the-box AppExchange app needs to come with a set of best practice settings that apply to most customers. What should the developer use to store and package the custom configuration settings for the app?",
      options: [
        "A. Custom Objects",
        "B. Custom Metadata",
        "C. Process Builder",
        "D. Custom Settings",
      ],
      answer: "A",
      title: "Question 3",
    },
    {
      content:
        "A managed package uses a list of country ISO codes and country names as references data in many different places.. managed package Apex code. What is the optimal way to store and retrieve the list?",
      options: [
        "A. Store the information in Custom Metadata and query it with SOQL.",
        "B. Store the information in a List Custom Setting and query it with SOQL.",
        "C. Store the information in a list Custom Setting and access it with the getAll() method",
        "D. Store the information in Custom Metadata and access it with the getAll() method.",
      ],
      answer: "B",
      title: "Question 4",
    },
    {
      content:
        "Assuming the CreateOneAccount class creates one account and implements the Queuetable interface, which syntax tests the Apex code?A)B)C)D)",
      options: ["A. Option A", "B. Option C", "C. Option D", "D. Option B"],
      answer: "D",
      title: "Question 5",
    },
    {
      content:
        "A company has many different unit test methods that create Account records as part of their data setup. A new required field was added to the Account and now all of the unit tests fail. What is the optimal way for a developer to fix the issue?",
      options: [
        "A. Create a TestDataFactory class that serves as the single place to create Accounts for unit tests and set the required field there.",
        "B. Add a before insert trigger on Account to set the value of the required field.",
        "C. Add the required field to the data setup for all of the unit tests.",
        "D. Change the required field to be a validation rule that excludes the System Administrator profile.",
      ],
      answer: "A",
      title: "Question 6",
    },
    {
      content:
        "What is a recommended practice with regard to the Apex CPU limit? (Choose two.)",
      options: [
        "A. Use Map collections to cache sObjects",
        "B. Optimize SOQL query performance",
        "C. Reduce view state in Visualforce pages",
        "D. Avoid nested Apex iterations",
      ],
      answer: "A,D",
      title: "Question 7",
    },
    {
      content:
        "A company notices that their unit tests in a test class with many methods to create many records for prerequisite reference data are slow. What can a developer to do address the issue?",
      options: [
        "A. Move the prerequisite reference data setup to a TestDataFactory and call that from each test method.",
        "B. Move the prerequisite reference data setup to the constructor for the test class.",
        "C. Move the prerequisite reference data setup to a @testSetup method in the test class.",
        "D. Move the prerequisite reference data setup to a static method in the test class and call that from each test method.",
      ],
      answer: "A",
      title: "Question 8",
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
      title: "Question 9",
    },
    {
      content:
        "The Contact object in an org is configured with workflow rules that trigger field updates. The fields are not updating, even though the end user expects them to. The developer creates a debug log to troubleshoot the problem. What should the developer specify in the debug log to see the values of the workflow rule conditions and debug the problem?",
      options: [
        "A. ERROR level for the Database log category",
        "B. INFO level for the Database log category",
        "C. ERROR level for the Workflow log category",
        "D. INFO level for the Workflow log category",
      ],
      answer: "B",
      title: "Question 10",
    },
    {
      content:
        "Just prior to a new deployment, the Salesforce Administrator who configured a new order fulfillment process in a developer sandbox suddenly left the company. The users had fully tested all of the changes in the sandbox and signed off on them.Unfortunately, although a Change Set was started, it was not complete. A developer is brought in to help finish the deployment. What should the developer do to identify the configuration changes that need to be moved into production?",
      options: [
        "A. Set up Continuous Integration and a Git repository to automatically merge all changes from the sandbox metadata with the production metadata.",
        "B. Use the Metadata API and a supported development IDE to push all of the configuration from the sandbox into production to ensure no changes are lost.",
        "C. Leverage the Setup Audit Trail to review the changes made by the departed Administrator and identify which changes should be added to the Change Set.",
        "D. In Salesforce setup, look at the last modified date for every object to determine which should be added to the Change Set.",
      ],
      answer: "C",
      title: "Question 11",
    },
    {
      content:
        "Business rules require a Contact to always be created when a new Account is created. What can be used when developing a custom screen to ensure an Account is not created if the creation of the Contact fails?",
      options: [
        "A. use the Database.Insert method with allOrNone set to False.",
        "B. use the Database.Delete method if the Contact insertion fails.",
        "C. use setSavePoint() and rollback() with a try/catch block.",
        "D. Disable validation rules on Contacts and set default values with a Trigger.",
      ],
      answer: "C",
      title: "Question 12",
    },
    {
      content:
        "A developer created a custom component to display an HTML table. The developer wants to be able to use the component on different Visualforce Pages and specify different header text for the table. Which tag should the developer use inside the component?",
      options: [
        "A. <apex:variable>",
        "B. <apex:attribute>",
        "C. <apex:define>",
        "D. <apex:param>",
      ],
      answer: "B",
      title: "Question 13",
    },
    {
      content:
        "A developer has built a multi-page wizard using a single Custom Controller to query and update dat a. Users are complaining that the pages are loading slowly. What will improve performance? (Choose three.)",
      options: [
        "A. Using actionRegion and rerender",
        "B. Setting the Apex Page attribute cache=true",
        "C. Using selective queries",
        "D. Reducing the view state",
        "E. Turning off the standard stylesheet",
      ],
      answer: "B,C,D",
      title: "Question 14",
    },
    {
      content:
        "A developer has a test class that creates test data before making a mock call-out, but now receives a you have uncommitted work pending. Please commit or callout before calling out error. What step should be taken to resolve the error?",
      options: [
        "A. Ensure the records are inserted before the Test.startTest() statement and the mock callout after the Test.startTest().",
        "B. Ensure the records are inserted before the Test.startTest() statement and the mock callout occurs within a method annotated with StestSetup.",
        "C. Ensure both the insertion and mock callout occur after the Test.stopTest().",
        "D. Ensure both the insertion and mock callout occur after the Test.startTest().",
      ],
      answer: "A",
      title: "Question 15",
    },
    {
      content:
        "Which statement is true regarding both Flow and Lightning Process? (Choose two.)",
      options: [
        "A. Are both server-side considerations in the Order of Execution",
        "B. Can use Apex that implements the Process.Plugin interface",
        "C. Can use Apex methods with the @lnvocableMethod annotation",
        "D. Are able to be embedded directly into Visualforce pages",
      ],
      answer: "B,C",
      title: "Question 16",
    },
    {
      content:
        "A developer wrote a Visualforce page for Sales Reps to add products to an order. The page takes a URL query parameter, productFamily, which filters the product results. The test method for the filter behavior has an assertion failing due to an incorrect number of results.Why could the test be failing? (Choose two.)",
      options: [
        "A. The test does not call Test.startTest()",
        "B. The test is not run by a System Administrator",
        "C. The test does not create product data",
        "D. The test does not set the current page reference",
      ],
      answer: "C,D",
      title: "Question 17",
    },
    {
      content:
        "Refer to re code segment above.When following best practices for writing Apex taggers, which two lots are wrong or cause for concern? Choose 2 answers",
      options: ["A. Line 11", "B. Line 6", "C. Line 20", "D. Line 16"],
      answer: "B,C",
      title: "Question 18",
    },
    {
      content:
        "A developer has a Visual force page that automatically assign ownership of an Account to a queue save. The page appears to correctly assign ownership, but an assertion validating the correct ownership fails. What can cause this problem?",
      options: [
        "A. The test class does not retrieve the updated value- from the database.",
        "B. The test class does not use the seeAllData=true annotation,",
        "C. The test class does not implement the Queueabfe interface.",
        "D. The test class does not use the Bulk API for loading test data.",
      ],
      answer: "A",
      title: "Question 19",
    },
    {
      content:
        "Which method should be used to convert a Date to a String in the current user's locale?",
      options: [
        "A. Date.format",
        "B. String.format",
        "C. String. valueOf",
        "D. Date.parse",
      ],
      answer: "A",
      title: "Question 20",
    },
    {
      content:
        "A developer Is tasked with ensuring that email addresses entered into the system for Contacts and for a Custom Object called Survey_Response__c do not belong to a list of blacklisted domains. The list of blacklisted domains will be stored In a custom object for ease of maintenance by users. Note that the Survey_Response__c object is populated via a custom visualforce page. What is the optimal way to implement this?",
      options: [
        "A. Implement the logic in a helper class that is called by an Apex trigger on Contact and from the Custom Visualforce page controller.",
        "B. Implement the logic in an Apex trigger on Contact and also implement the logic within the Custom visualforce page controller.",
        "C. Implement the logic in a Validation Rule on the Contact and a validation Rule on the Survey_Response__c object.",
        "D. Implement the logic in the Custom Visualforce page controller and call that method from an Apex trigger on Contact.",
      ],
      answer: "A",
      title: "Question 21",
    },
    {
      content:
        "Which statement is considered a best practice for writing bulk safe Apex Triggers?",
      options: [
        "A. Instead of DML statements, use the Database methods with allOrNone set to False.",
        "B. Add LIMIT 50000 to every SOQL statement",
        "C. Perform all DML operations from within a Future Method.",
        "D. Add records to collections and perform DML operations against these collections.",
      ],
      answer: "D",
      title: "Question 22",
    },
    {
      content:
        "In an organization that has multi-currency enabled, a developer is tasked with building a Lighting Component that displays the top ten Opportunities most recently access by the logged in user. The developer must ensure the Amount and LastModifiedDate field values are displayed according to the user's locale. What is the most effective approach to ensure values displayed respect the users locale settings?",
      options: [
        "A. Use REGEX expressions to format the values retrieved via SOQL.",
        "B. Use the FORMAT() function in the SOQL query.",
        "C. Use a wrapper class to format the values retrieved via SOQL.",
        "D. Use the FOR VIEW clause in the SOQL Query.",
      ],
      answer: "D",
      title: "Question 23",
    },
    {
      content:
        "A developer created three Rollup Summary fields: Total_timesheets_c, Total_Approved_timesheet_c and Total_project_Timesheet_c in the custom object, project _c Now, the developer is tasked with created a new field to show the ratio between and approved",
      options: [
        "A. No test methods will be executed during deployment.",
        "B. A formula field will calculate the value retroactively for existing records.",
        "C. A test class that validates the formula field is needed for deployment.",
        "D. Using a formula field reduces maintenance overhead.",
      ],
      answer: "B,D",
      title: "Question 24",
    },
    {
      content:
        "A developer needs test data for Apex test classes. What can the developer use to provide test data to the test methods? (Choose two.)",
      options: [
        "A. List<sObject> Is = Test.loadDat (Lead.sObjectType, $Resource + 'myTestLeads f);",
        "B. List<sObject> Is = Test.loadData (Lead.sObjectType, fmyTestLeads f);",
        "C. Database.createTestRecords (10)",
        "D. myDataFactory.createTestRecords (10)",
      ],
      answer: "B,D",
      title: "Question 25",
    },
    {
      content:
        "messages are rendering on the page. Which component should be added to the Visualforce page to display the message?",
      options: ["A. ", "B. ", "C. ", "D. "],
      answer: "B",
      title: "Question 26",
    },
    {
      content:
        'Salesforce users consistently receive a "Maximum trigger depth exceeded" error when saving m Account. How can a developer fix this error?',
      options: [
        "A. Modify the trigger to use the isMultiThread=true annotation.",
        "B. Convert trigger to use the future annotation, and chain any subsequent trigger invocations to the Account object.",
        "C. Use a helper class to set a Boolean to TRUE the first time a trigger is fired, and then; modify the trigger to only fire when modify the trigger to only fire when the Boolean is FALSE.",
        "D. Split the trigger logic into two separate triggers.",
      ],
      answer: "C",
      title: "Question 27",
    },
    {
      content:
        "What is a consideration when using bind variables with dynamic SOQL? (Choose two.)",
      options: [
        "A. Dynamic SOQL cannot reference fields on bind variables",
        "B. Bind variables must be in local scope",
        "C. Bind variables must be public or global",
        "D. Dynamic SOQL cannot use bind variables",
      ],
      answer: "A,B",
      title: "Question 28",
    },
    {
      content:
        "What is a best practice when unit testing a controller? (Choose two.)",
      options: [
        "A. Simulate user interaction by leveraging Test.setMock()",
        "B. Set query parameters by using getParameters().put",
        "C. Access test data by using seeAIIData=true",
        "D. Verify correct references by using getURL()",
      ],
      answer: "B,D",
      title: "Question 29",
    },
    {
      content:
        "A developer must create a custom pagination solution for accessing approximately 2000 records and displaying 50 records on each page. Data from Salesforce will be accessed via an API and not via Apex. How can the developer meet these requirements? (Choose two.)",
      options: [
        "A. Use CURSOR 50 in SOQL queries",
        "B. Use LIMIT 50 in SOQL queries",
        "C. Use a StandardSetController",
        "D. Use OFFSET in SOQL queries",
      ],
      answer: "B,D",
      title: "Question 30",
    },
    {
      content: "What is the transaction limit on the max Salesforce CPU time?",
      options: [
        "A. 10 seconds (synchronous); 60 seconds (async)",
        "B. There is no limit",
        "C. 100 seconds",
        "D. 100 seconds (synchronous); 200 seconds (async)",
        "E. 60 seconds",
      ],
      answer: "A",
      title: "Question 31",
    },
    {
      content:
        "A developer needs to store variables to control the style and behavior of a Lightning Web Component. Which feature should be used to ensure that the variables are testable in both Production and all Sandboxes?",
      options: [
        "A. Custom Variable",
        "B. Custom Metadata",
        "C. Custom Object",
        "D. Custom Setting",
      ],
      answer: "B",
      title: "Question 32",
    },
    {
      content:
        "Consider the code above.When a user dicks on the Link of a Contact's name, what happens'",
      options: [
        "A. A new page opens, showing the Contact's details.",
        "B. The page refreshes, showing the Contact's details.",
        "C. The outputPanel refreshes, showing the Contacts details.",
        "D. Nothing happens: the commandLink is missing an action attribute.",
      ],
      answer: "C",
      title: "Question 33",
    },
    {
      content:
        "Universal Containers implements a private sharing model for the Convention_Attendence_c custom object. As part of a new quality assurance effort, the company created an Event___Reviewer__c user lookup field on the object. Management wants the event reviewer to automatically gain Read/write access to every record they are assigned to. What is the best approach to ensure the assigned reviewer obtains Read/Write access to the record?",
      options: [
        "A. Create a Before Insert trigger on the Convention Attendee custom object, and use Apex Sharing Reasons and Apex Managed Sharing.",
        "B. Create criteria-based sharing rules on the Convention Attendee custom object to share the records with the Event Reviewers.",
        "C. Create a criteria-based sharing rule on the Convention Attendee custom object to share the records the a group of Event Reviewers.",
        "D. Create an After Insert trigger on the Convention Attendee custom object, and use Apex Sharing Reasons and Apex Managed Sharing.",
      ],
      answer: "A",
      title: "Question 34",
    },
    {
      content: "What is the transaction limit on the recursive trigger depth?",
      options: ["A. 17", "B. 16", "C. 3", "D. 10", "E. There is no limit"],
      answer: "B",
      title: "Question 35",
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
      title: "Question 36",
    },
    {
      content:
        "What is a valid request for the following REST method? (Choose two.)@HttpPost global static void myPostMethod(String si, Integer il, Boolean bl, String 52)",
      options: [
        'A. si" : "my first string", 11" : "123", "bl" : "false", "S2" : "my second string"',
        "B. <request> <sl>my first string</sl> <ll>123</il> <32>my second string</32> <bl>false</bl> </request>",
        'C. <request> <sl>"my first string"</sl> <il>123</il> <sZ>!,my second string"</32> <bl>false</bl> </request>',
        'D. il" : 123, "SI" : "my first string", "S2" : "my second string", "bl" : false',
      ],
      answer: "C,D",
      title: "Question 37",
    },
    {
      content:
        "A company has a web page that needs to get Account record information, given its Salesforce record ID, from JavaScript on the page and then display it. Which method of integration is optimal?",
      options: [
        "A. Apex REST Web Service",
        "B. SOAP API",
        "C. Apex SOAP Web Service",
        "D. REST API",
      ],
      answer: "A",
      title: "Question 38",
    },
    {
      content: "What is a benefit of using a WSDL with Apex?",
      options: [
        "A. Allows for web services to be tested and achieve code coverage",
        "B. Reduces the number of callouts to third-party web services",
        "C. Allows for classes to be imported into Salesforce",
        "D. Enables the user to not pass a Session ID where it is not necessary",
      ],
      answer: "C",
      title: "Question 39",
    },
    {
      content:
        "A developer needs to design a custom object that will be integrated into a back-end system. What should the developer do to ensure good data quality and to ensure that data imports, integrations, and searches perform well? (Choose two.)",
      options: [
        "A. Configure a custom field as Salesforce ID",
        "B. Configure a custom field as external ID",
        "C. Configure a custom field as unique",
        "D. Configure a custom field as indexed",
      ],
      answer: "B,C",
      title: "Question 40",
    },
    {
      content:
        "A company exposes a REST web service and wants to establish two-way SSL between Salesforce and the REST web service. A certificate signed by an appropriate certificate authority has been provided to the developer. What modification is necessary on the Salesforce side? (Choose two.)",
      options: [
        "A. Configure two-factor authentication with the provided certificate",
        "B. Update the code to use HttpRequest.setHeaderQ to set an Authorization header.",
        "C. Create an entry for the certificate in Certificate and Key Management",
        "D. Update the code to use HttpRequest.setClientCertificateName()",
      ],
      answer: "C,D",
      title: "Question 41",
    },
    {
      content:
        "A developer needs to create a Lightning page for entering Order Information. An error message should be displayed if the zip code entered as part of the Order's shipping address is not numeric. What is a recommended way for the error message be displayed to the end user?",
      options: [
        "A. Use the apex:message tag to display errors",
        "B. Use the uhoutputText tag to display errors",
        "C. Use the aura:component tag to display errors",
        "D. Use the uhinputDefaultError tag to display errors",
      ],
      answer: "D",
      title: "Question 42",
    },
    {
      content:
        "Employee_c is a Child object of Company_c. The Company_c object has an external Id field Company_ld_c. How can a developer insert an Employee_c record linked to Company_c with a Company_ld_c of '999'?",
      options: [
        "A. Employee_c emp = new Employee_c(Name=fDeveloperf); emp.Company_r = new Company _ r(Company Id c=f999f) insert emp;",
        "B. Employee_c emp = new Employee_c(Name=fDeveloperf); emp.Company_r = f999f insert emp;",
        "C. Employee_c emp = new Employee_c(Name=fDeveloperf); emp.Company_c = f999f insert emp;",
        "D. Employee_c emp = new Employee_c(Name=fDeveloperT); emp. Company_c = new Company_c(Company_Id_c=f 999 T) insert emp;",
      ],
      answer: "A",
      title: "Question 43",
    },
    {
      content:
        "A company has a custom object, Order__c, that has a required, unique, external ID field called Order_Number__c. Which statement should be used to perform the DML necessary to insert new records and update existing records in a List of Order__c records?",
      options: [
        "A. upsert orders Order_Number__c;",
        "B. upsert orders;",
        "C. merge orders;",
        "D. merge orders Order_Number__c;",
      ],
      answer: "A",
      title: "Question 44",
    },
    {
      content:
        "A developer i$ tasked Dy Unversai Containers to build out a system to track the container repair process. Containers should be tracked as they move through the repair process, starting when a customer reports an issue and ending when the container is returned to the customer. Which solution meets these business requirements while following best practices?",
      options: [
        "A. Use Platform Events with Workflow Rules and RFID integration to ensure proper tracking of the containers.",
        "B. involve a Salesforce administrator and build out a declarative solution that works in Salesforce desktop and mobile.",
        "C. Use Flow Builder|.to develop a Sites page for customers to submit repair requests and track the status of their request.",
        "D. Build an automated Lightning Application using Application Events to ensure data integrity.",
      ],
      answer: "C",
      title: "Question 45",
    },
    {
      content:
        'A developer needs to implement a system audit feature that allows users, assigned to a custom profile named "Auditors", to perform searches against the historical records in the Account object. The developer must ensure the search is able to return history records that are between 12 and 24 months old.Given the code below, which select statement should be inserted below as a valid way to retrieve the Account History records ranging from 12 to 24 month old?A)B)C)D)',
      options: ["A. Option B", "B. Option C", "C. Option A", "D. Option D"],
      answer: "D",
      title: "Question 46",
    },
    {
      content:
        "Part of a custom Lightning Component displays the total number of Opportunities in the org, which is in the millions. The Lightning Component uses an Apex Controller to get the data it needs. What is the optimal way for a developer to get the total number of Opportunities for the Lightning Component?",
      options: [
        "A. Apex Batch job that counts the number of Opportunity records",
        "B. SUM() SOQL aggregate query on the Opportunity object",
        "C. COUNT() SOQL aggregate query on the Opportunity object",
        "D. SOQL for loop that counts the number of Opportunities records",
      ],
      answer: "C",
      title: "Question 47",
    },
    {
      content: "The Bulk API__________.",
      options: [
        "A. Is used to create, retrieve, update or delete records, such as accounts, leads, and custom objects, and allows you to maintain passwords, perform searches, and much more",
        "B. Is based on REST principles and is optimized for loading or deleting large sets of data. You can use it to query, queryAII, insert, update, upsert, or delete many records asynchronously by submitting batches",
        "C. Provides a powerful, convenient, and simple REST-based web services interface for interacting with Salesforce. Its advantages include ease of integration and development, and it's an excellent choice of technology for use with mobile applications and web projects",
        "D. Is used to retrieve, deploy, create, update, or delete customizations for your org. The most common use is to migrate changes from a sandbox or testing org to your production environment",
      ],
      answer: "B",
      title: "Question 48",
    },
    {
      content: "What is a potential design issue with the following code?",
      options: [
        "A. SOQL could be avoided by creating a formula field for StageName in Account from the related Opportunity",
        "B. The code will result in a System.DmException:Entity_is_Deleted error",
        "C. The code will result in a System.LimitException : Too many script statements error",
        "D. The code will result in a System.LimitException: Apex CPU time limit exceeded error",
      ],
      answer: "D",
      title: "Question 49",
    },
    {
      content: "REST uses___________.",
      options: [
        "A. The HTTP class",
        "B. The HTTPResponse class",
        "C. The HTTPRequest class",
        "D. All of the above",
      ],
      answer: "D",
      title: "Question 50",
    },
    {
      content: "What is the transaction limit for SOQL queries?",
      options: [
        "A. 20 (synchronous), 200 (async)",
        "B. 150 (synchronous), 200 (async)",
        "C. 100 (synchronous), 200 (async)",
        "D. 200 (synchronous), 100 (async)",
        "E. 150 (synchronous), 20 (async)",
      ],
      answer: "C",
      title: "Question 51",
    },
    {
      content:
        "A developer created an Apex class that makes outbound RESTful callout. The following was created to send a fake response in Apex test methods. Which method can be called to return this fake response in the test methods?",
      options: [
        "A. TestsetMock",
        "B. TestcreateStub",
        "C. Test.setTestData",
        "D. testSetup",
      ],
      answer: "A",
      title: "Question 52",
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
      answer: "A",
      title: "Question 53",
    },
    {
      content:
        "An org has a requirement that addresses on Contacts and Accounts should be normalized to a company standard by Apex code any time that they are saved. What is the optimal way to implement this?",
      options: [
        "A. Apex trigger on Account and Account that call a helper class to normalize the address",
        "B. Apex trigger on Contact that calls the Account trigger to normalize the address",
        "C. Apex trigger on Account that calls the Contact trigger to normalize the address",
        "D. Apex trigger on Account that and Account that normalized the address",
      ],
      answer: "A",
      title: "Question 54",
    },
    {
      content:
        "How should a developer assert that a trigger with an asynchronous process has successfully run?",
      options: [
        "A. Create all test data in the test class, invoke Test.startTest() and Test.stopTest() and then perform assertions,",
        "B. Create all test data, use @future In the test class, then perform assertions.",
        "C. Create at test data in the test class, use System.runAs() to invoke the trigger, then perform assertions.",
        "D. Insert records into Salesforce, use seeAllData-true, then perform assertions.",
      ],
      answer: "A",
      title: "Question 55",
    },
    {
      content:
        "A developer wants to create a Visualforce page that allows a user to search for a given account by Name. If the account is found, the account details should be populated on screen. If no account is found, an error message should be displayed to the user. How can this be accomplished? (Choose two.)",
      options: [
        "A. Use the ApexPages.addMessage() method to add the error message",
        "B. Use the accountaddErrorQ method to add the error message",
        "C. Use the <apex:pageMessages> tag to display the error message",
        "D. Use the (apex: information) tag to display the error message",
      ],
      answer: "A,C",
      title: "Question 56",
    },
    {
      content:
        "Exhibit.A developer created a JavaScript function as a part of a Lightning web component (LWC) that surfaces information... about leads by imperatively calling getFetchLeadList when certain criteria are met. What are these changes the developer should implement in the Apex class above to ensure the LWC can displ... data efficiently while preserving security? Choose 3 answers",
      options: [
        "A. Implement the with sharing keyword in the class declaration.",
        "B. Annotate the Apex method with gAuraEnabled-",
        "C. Annotate the Apex method with 8AuraEnabled (Cacheable-true).",
        "D. Use the WITH SECURITY_ENFORCED clause within the SOQL query.",
        "E. Implement the without sharing keyword in the class declaration.",
      ],
      answer: "A,C,D",
      title: "Question 57",
    },
    {
      content:
        "A company has a Lightning Page with many Lightning Components, some that cache reference dat a. It is reported that the page does not always show the most current reference data. What can a developer use to analyze and diagnose the problem in the Lightning Page?",
      options: [
        "A. Salesforce Lightning Inspector Storage Tab",
        "B. Salesforce Lightning Inspector Actions Tab",
        "C. Salesforce Lightning Inspector Transactions Tab",
        "D. Salesforce Lightning Inspector Event Log Tab",
      ],
      answer: "A",
      title: "Question 58",
    },
    {
      content:
        "A corporation has many different Salesforce orgs, with some different objects and some common objects, and wants to build an application that can create, retrieve, and update common object records in all of the different orgs. Which method of integration should the application use?",
      options: [
        "A. SOAP API with the partner WSDL",
        "B. Metadata API",
        "C. Apex REST Web Service",
        "D. SOAP API with the Enterprise WSDL",
      ],
      answer: "C",
      title: "Question 59",
    },
    {
      content:
        "UC Loans is a small company with a part time Salesforce administrator. UC Loans wants to create a Loan__c record whenever an Opportunity is won. What is the optimal solution for UC Loans to accomplish this?",
      options: [
        "A. Workflow Rule",
        "B. Apex Trigger",
        "C. Quick Action",
        "D. Process Builder",
      ],
      answer: "D",
      title: "Question 60",
    },
    {
      content: "The SOAP API_________.",
      options: [
        "A. Is used to create, retrieve, update or delete records, such as accounts, leads, and custom objects, and allows you to allows you to maintain passwords, perform searches, and much more",
        "B. Is used to retrieve, deploy, create, update, or delete customizations for your org. The most common use is to migrate changes from a sandbox or testing org to your production environment",
        "C. Is based on REST principles and is optimized for loading or deleting large sets of data. You can use it to query, queryAII, insert, update, upsert, or delete many records asynchronously by submitting batches",
        "D. Provides a powerful, convenient, and simple REST-based web services interface for interacting with Salesforce. Its advantages include ease of integration and development, and it's an excellent choice of technology for use with mobile applications and web projects",
      ],
      answer: "A",
      title: "Question 61",
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
      title: "Question 62",
    },
    {
      content:
        "A developer needs to send Account records to an external system for backup purposes. The process must take a snapshot of Accounts as they are saved and then make a callout to a RESTful web service. The web service can only receive, at most, one record per call. Which feature should be used to implement these requirements?",
      options: [
        "A. Process Builder",
        "B. workflow",
        "C. Queueable",
        "D. @future",
      ],
      answer: "A",
      title: "Question 63",
    },
    {
      content:
        "0f Universal Containers uses Big Objects to store almost a billion customer transactions called Customer_Transaction__b. These are the fields on Customer_Transaction__b: Account__c Program__c Points_Earned__c Location__c Transaction_Date__c The following fields have been identified as Index Fields for the Customer_Transaction__b object: Account__c, Program__c, and Transaction_Date__c. Which SOQL query is valid on the Customer_Transaction__b Big Object?",
      options: [
        "A. SELECT Account__c, Program__c, Transaction_Date__c FROM Customer_Transaction__b WHERE Account__c = '001R000000302D3' AND Program__c ='Shoppers' AND Transaction_Date__c=2019-05-31T00:00Z",
        "B. SELECT Account__c, Program__c, Transaction_Date__c FROM Customer_Transaction__b WHERE Account__c = '001R000000302D3' AND Program__c LIKE 'Shop%' AND Transaction_Date__c=2019-05-31T00:00Z",
        "C. SELECT Account__c, Program__c, Transaction_Date__c FROM Customer_Transaction__b WHERE Account__c = '001R000000302D3' AND Program__c EXCLUDES ('Shoppers', 'Womens') AND Transaction_Date__c=2019-05-31T00:00Z",
        "D. SELECT Account__c, Program__c, Transaction_Date__c FROM Customer_Transaction__b WHERE Account__c = '001R000000302D3' AND Program__c INCLUDES ('Shoppers', 'Womens') AND Transaction_Date__c=2019-05-31T00:00Z",
      ],
      answer: "A",
      title: "Question 64",
    },
    {
      content:
        "A large company uses Salesforce across several departments. Each department has its own Salesforce Administrator. It was agreed that each Administrator would have their own sandbox in which to test changes. Recently, users notice that fields that were recently added for one department suddenly disappear without warning. Also, Workflows that once sent emails and created tasks no longer do so. Which two statements are true regarding these issues and resolution? Choose 2 answers",
      options: [
        "A. The administrators are deploying their own Change Sets over each other, thus replacing entire Page Layouts and Workflows in Production",
        "B. Page Layouts should never be deployed via Change Sets, as this causes Workflows and Field-level Security to be reset and fields to disappear.",
        "C. A sandbox should be created to use as a unified testing environment instead of deploying Change Sets directly to production.",
        "D. The administrators are deploying their own Change Sets, thus deleting each other's fields from the objects in production.",
      ],
      answer: "A,C",
      title: "Question 65",
    },
    {
      content:
        "A company wants to incorporate a third-party web service to set the Address fields when an Account is inserted, if they have not already been set. What is the optimal way to achieve this?",
      options: [
        "A. Create a Process, call an Apex @future(callout=true) method from it, and make the callout from that Apex method.",
        "B. Create a Process, call an Apex @InvocableMethod from it, and make the callout from that Apex method.",
        "C. Create an after insert trigger, call an @future(callout=true) method from it, and make the callout from that Apex method.",
        "D. Create an after insert trigger, call an Apex @InvocableMethod method from it, and make the callout from that Apex method",
      ],
      answer: "C",
      title: "Question 66",
    },
    {
      content:
        "A company has a custom object, Order__c, that has a required, unique, external ID field called Order_Number__c. Which statement should be used to perform the DML necessary to insert new records and update existing records in a List of Order__c records?",
      options: [
        "A. upsert orders;",
        "B. merge orders;",
        "C. upsert orders Order_Number__c;",
        "D. merge orders Order_Number__c;",
      ],
      answer: "C",
      title: "Question 67",
    },
    {
      content:
        "Where in a query can you use Geolocation and Distance? (Choose two.)",
      options: [
        "A. Group By clause",
        "B. Select clause",
        "C. Filter clause",
        "D. Order By clause",
      ],
      answer: "C,D",
      title: "Question 68",
    },
    {
      content:
        'A company has a custom object. Order__c, that has a custom picklist field. Status__c, with values of New, In Progress," or Fulfilled and a lookup field, Contact_c, to Contact. Which SOQL query wrii return a unique list of all the Contact records that have no Fulfilled Orders?',
      options: [
        "A. SELECT id FROM Contact WHERE id NOT IN (SELECT Contact _c FROM order_c Where Status_c = fulfilled')",
        "B. SELECT Contact_c From order_c Where id NOT IN (SELECT id FROM_c Where States_c + Fulfilled')",
        "C. SELECT iD FROM Contact WHERE id NOT IN (SELECT id From order_c WHERE_c = Fulfilled')",
        "D. SELECT Contact_c FROM Order_c Where Status_c <> ;Fulfilled'",
      ],
      answer: "A",
      title: "Question 69",
    },
    {
      content:
        "What are the ways a developer can create test data of Contacts? (Choose two.)",
      options: [
        "A. Test.createTestData ()",
        "B. Test.loadData(Contact.sObjectType, 'staticResource')",
        "C. myDataFactory.createContacts(10)",
        "D. Test.loadTestRecords(Contact.sObjectType, 'staticResource')",
      ],
      answer: "B,C",
      title: "Question 70",
    },
    {
      content:
        "A developer wrote a trigger on Opportunity that will update a custom Last Sold Date field on the Opportunity's Account whenever an Opportunity is dosed. In the test class for the trigger, the assertion to validate the Last Sold Date field fails. What might be causing the failed assertion?",
      options: [
        "A. The test class has not defined an Account owner when inserting the test data.",
        "B. The test class has not implemented seeAIIData-truwh the test method.",
        "C. The test class has not re-queried the Account record after updating the Opportunity.",
        "D. The test class is not using System.runAs() to run tests as a Salesforce administrator.",
      ],
      answer: "C",
      title: "Question 71",
    },
    {
      content:
        "An org contains two custom objects; Building__c and Office__c. Office__c has a Lookup field to Building__c.A developer is asked to automatically populate the Number_of_Offices__c field on the Building__c object with the count of related Office__c records anytime an Office__c record s created or deleted. The developer cannot modify the field types. Which solution meets the requirements?",
      options: [
        "A. Process Builder",
        "B. Workflow",
        "C. Flow",
        "D. Apex Trigger",
      ],
      answer: "D",
      title: "Question 72",
    },
    {
      content:
        "Given a list of Opportunity records named opportunityList, which code snippet is best for querying all Contacts of the Opportunity's Account?A)B)C)D)",
      options: ["A. Option A", "B. Option D", "C. Option C", "D. Option B"],
      answer: "A",
      title: "Question 73",
    },
    {
      content:
        "How can a developer efficiently incorporate multiple JavaScript libraries, such as JQuery and MomenUS, in a Lightning Component?",
      options: [
        "A. Use JavaScript remoting and script tags.",
        "B. Use CONs with script attributes",
        "C. Implement the libraries in separate helper files.",
        "D. Join multiple assets from a static resource.",
      ],
      answer: "D",
      title: "Question 74",
    },
    {
      content:
        "As part of their quoting and ordering process, a company needs to send PDFs to their document storage system's REST endpoint that supports OAuth 2.0. Each Salesforce user must be individually authenticated with the document storage system to send the PDF. What is the optimal way for a developer to implement the authentication to the REST endpoint?",
      options: [
        "A. Named Credential with Password Authentication",
        "B. Hierarchy Custom Setting with a password custom field",
        "C. Named Credential with an OAuth Authentication Provider",
        "D. Hierarchy Custom Setting with an OAuth token custom field",
      ],
      answer: "C",
      title: "Question 75",
    },
    {
      content:
        "Which three actions must be completed in a Lightning web component for a JavaScript file in a static resource to be loaded? Choose 3 answers",
      options: [
        "A. Reference the static resource in a <script> tag.",
        "B. Import a method from the platformftesourceLoader,",
        "C. Import the static resource.",
        "D. Append the static resource to the DOM.",
        "E. Call loadscript.",
      ],
      answer: "B,C,E",
      title: "Question 76",
    },
    {
      content: 'The "Webservice" keyword___________.',
      options: [
        "A. Used for any member variables included",
        "B. Method must be static, and class must be global",
        "C. All of the above",
        "D. Can be used on all classes",
      ],
      answer: "C",
      title: "Question 77",
    },
    {
      content:
        "A developer receives the exception 'SOQL query not selective enough' when performing a query on an object with a large amount of dat a. Which step should be taken to resolve the issue?",
      options: [
        "A. Perform the SOQL query as part of a FOR loop.",
        "B. Use an ID in the WHERE clause of the SOQL query.",
        "C. Move the SOQL query to within an asynchronous process.",
        "D. Perform the SOQL query via a call to the REST API.",
      ],
      answer: "B",
      title: "Question 78",
    },
    {
      content:
        "What is the best practice to initialize a Visualforce page in a test class?",
      options: [
        "A. Use Test, setCurrentPage(Page.MyTestPage);",
        "B. Use controller,currentPage, setPage (MyTestPage",
        "C. Use Test.currentpage, getParameter, put (MyTestPage);",
        "D. Use Test.setCurrentpage,MyTestPage;",
      ],
      answer: "A",
      title: "Question 79",
    },
    {
      content:
        "This sales team needs a custom Visualforce page to enter sales orders. When a product is selected on the Visualforce page, a web service is invoked to determine if the product is in stock, and the result is displayed on the page. How can a developer write this page to display the result of the web service and ensure governor limits for concurrent usage are not exceeded?",
      options: [
        "A. Use the Salesforce Metadata API in the web service callout.",
        "B. Use visualforce Remoting to handle the web service callout.",
        "C. Use Continuation that is invoked when a Submit button is clicked.",
        "D. Use an Apex trigger with callout=true annotation.",
      ],
      answer: "C",
      title: "Question 80",
    },
    {
      content:
        "A developer created and tested a Visualforce page in their developer sandbox, but now receives reports that users are encountering ViewState errors when using it in Production. What should the developer ensure to correct these errors?",
      options: [
        "A. Ensure profiles have access to the Visualforce page.",
        "B. Ensure queries do not exceed governor limits.",
        "C. Ensure properties are marked as Transient.",
        "D. Ensure properties are marked as private.",
      ],
      answer: "C",
      title: "Question 81",
    },
    {
      content:
        "A developer is writing unit tests for the following method:Which assertion would be used in a negative test case?",
      options: [
        "A. System.assertEquals(true, isFreezingClOO'))",
        "B. System.assertEquals(null, isFreezing('asdf))",
        "C. System.assertEquals (true, isFreezing('O')",
        "D. System.assertEquals(true, isFreezing(null))",
      ],
      answer: "B",
      title: "Question 82",
    },
    {
      content:
        "The Salesforce instance at Universal Containers currently integrates with a third-party company to validate mailing addresses via REST services. The third-party address verification system recently changed endpoint URLs for all their set vices from https://th-addreaa-service.3pc.com to https://plc1-mailsarvice.3pc.com. Everything else remained the same. The developer updated code to reflect this endpoint change, but the mailing address validation service stopped working after the change. What else should be done to complete this web service end point change?",
      options: [
        "A. Create a new Remote Site for the new endpoint URL.",
        "B. Add web service IP Addresses to Trusted IP Ranges m the Network Access security controls settings.",
        "C. Use a Custom Setting with the new endpoint Instead of hard coding the URL.",
        "D. Test the callout property using HttpCalloutMock.",
      ],
      answer: "A",
      title: "Question 83",
    },
    {
      content:
        "A developer has created a solution using the SOAP API for authenticating Communities users. What is needed when issuing the login() Call? (Choose two.)",
      options: [
        "A. Security Token",
        "B. Session Id",
        "C. Organization Id",
        "D. Username and Password",
      ],
      answer: "C,D",
      title: "Question 84",
    },
    {
      content:
        "The use of the transient keyword In Visualforce Page Controllers helps with which common performance issued?",
      options: [
        "A. Reduces Load Times",
        "B. Improves Query Performance",
        "C. Improves Page Transfers",
        "D. Reduces View State",
      ],
      answer: "D",
      title: "Question 85",
    },
    {
      content: "What is the transaction limit on the max Salesforce CPU time?",
      options: [
        "A. 100 seconds",
        "B. 100 seconds (synchronous); 200 seconds (async)",
        "C. There is no limit",
        "D. 10 seconds (synchronous); 60 seconds (async)",
        "E. 60 seconds",
      ],
      answer: "D",
      title: "Question 86",
    },
    {
      content:
        "Which two objects can be inserted in the same transaction? (Choose two.)",
      options: [
        "A. Account and Group",
        "B. Case and CaseComment",
        "C. Account and AccountShare",
        "D. Opportunity and User",
      ],
      answer: "B,C",
      title: "Question 87",
    },
    {
      content:
        "A company has code to update a Request and Request Lines and make a callout to their external ERP system's REST endpoint with the updated records. The CalloutUtil. makeRestCallout fails with a 'You have uncommitted work pending. Please commit or rollback before calling out' error. What should be done to address the problem?",
      options: [
        "A. Remove the Database.setSavepoint and Database.rollback.",
        "B. Change the CalloutUtil.makeRestCallout to an @future method",
        "C. Move the CalloutUtil.makeRestCallout method call below the catch block.",
        "D. Change the CalloutUtil.makeRestCallout to an @InvocableMethod method.",
      ],
      answer: "B",
      title: "Question 88",
    },
    {
      content:
        "A Visualforce page contains an industry select list and displays a table of Accounts that have a matching value in their Industry field.When a user changes the value in the industry select list, the table of Accounts should be automatically updated to show the Accounts associated with the selected industry. What is the optimal way to implement this?",
      options: [
        "A. Add an <apex: actionFunction> within the <apex: select List >.",
        "B. Add an <apex: actionSupport> within the <apex:selectList>.",
        "C. Add an <apex: actionFunction> within the <apex : selectOptions>.",
        "D. Add an <apex: actionSupport> within the <apex: selectOptions>.",
      ],
      answer: "A",
      title: "Question 89",
    },
    {
      content:
        "Universal Containers stores user preferences in a Hierarchy Custom Setting, User_prefs_c, with a Checkbox field, show_Help_c, Company-Level defaults are stored at the organizational level, but may be overridden at the user level, If a user has not overridden preferences, then the defaults should be used. How should the Show_Help_c preference be retrieved for the current user?",
      options: [
        "A. Boolean show = User_Prefs_c, getvaluesUserInfo.getUserid() ).Show_Help_c;",
        "B. Boolean show = User_Prefs_c, getValues ( ). Show _Help_c;",
        "C. Boolean show = User prefs_c, Show_Help_c;",
        "D. Boolean show = User_Prefs_c, getinstance( ), Show_Help _c;",
      ],
      answer: "D",
      title: "Question 90",
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
      title: "Question 91",
    },
    {
      content:
        "Which two relationship queries use the proper syntax? Choose 2 answers",
      options: [
        "A. SELECT Id, Name, Account __r.Name FROM Contact WHERE Account r.Industry = 'Media'",
        "B. SELECT Name, (SELECT LastName FROM Contacts__r) FROM Account",
        "C. SELECT Id, Name, Account.Name FROM Contact WHERE Account.Industry = 'Media'",
        "D. SELECT Name, (SELECT LastName FROM Contacts) FROM Account",
      ],
      answer: "C,D",
      title: "Question 92",
    },
    {
      content:
        "A developer sees test failures in the sandbox but not in production. No code or metadata changes have been actively made to either environment since the sandbox was created. Which consideration should be checked to resolve the issue?",
      options: [
        "A. Ensure Workflow Rules are inactive.",
        "B. Ensure the Apex Classes are on the same API version.",
        "C. Ensure Process Builder processes are inactive.",
        "D. Ensure the sandbox is on the same release as production.",
      ],
      answer: "D",
      title: "Question 93",
    },
    {
      content:
        "A developer is building a Visualforce page that interacts with external services. Which interface should the developer implement to test this functionality? (Choose two.)",
      options: [
        "A. HTTPCalloutMock",
        "B. HTTPRequestMock",
        "C. HTTPResponseMock",
        "D. StaticResourceCalloutMock",
      ],
      answer: "A,D",
      title: "Question 94",
    },
    {
      content:
        "A developer is asked to build a solution that will automatically send an email to the Customer when an Opportunity stage changes. The solution must scale to allow for 10,000 emails per day. The criteria to send the email should be evaluated after all Workflow Rules have fired. What is the optimal way to accomplish this?",
      options: [
        "A. Usea MassEmailMessage() with an Apex Trigger.",
        "B. Use an Email Alert with Process Builder.",
        "C. Use a Workflow Email Alert.",
        "D. Use a SingleEmailMessage() with an Apex Trigger.",
      ],
      answer: "B",
      title: "Question 95",
    },
    {
      content:
        "When developing a Visualforce page that will be used by a global organization that does business in many languages and many currencies, which feature should be used? (Choose three.)",
      options: [
        "A. getLocalCurrency()",
        "B. Custom Labels",
        "C. convertCurrency()",
        "D. Global Labels",
        "E. Translation Workberic",
      ],
      answer: "B,C,E",
      title: "Question 96",
    },
    {
      content:
        "A company needs to automatically delete sensitive information after 7 years. This could delete almost a million records every day. How can this be achieved?",
      options: [
        "A. Schedule an future process to Query records older than 7 years, and then recursively invoke itself in 1,000 record batches to delete them.",
        "B. Schedule a batch Apex process to run every day that Queries and deletes records older than 7 years.",
        "C. Perform a SOSL statement to find records older than 7 years, and then delete the entire result set.",
        "D. Use aggregate functions to query for records older than 7 years, and then delete the AggregateResult objects.",
      ],
      answer: "B",
      title: "Question 97",
    },
    {
      content:
        'A user receives the generic "An internal server error has occurred" while interacting with a custom Lightning Component. What should the developer do to ensure a more meaningful message?',
      options: [
        "A. Use ProcessBuilder to catch the error.",
        "B. Add an onerror event handler to the tag.",
        "C. Use an AuraHandledException in a try/catch block.",
        "D. Add an error-view component to the markup.",
      ],
      answer: "C",
      title: "Question 98",
    },
    {
      content:
        "The maximum view state size of a visualforce page is______________.",
      options: ["A. 165kb", "B. 256kb", "C. 1mb", "D. 65kb", "E. 135kb"],
      answer: "E",
      title: "Question 99",
    },
    {
      content:
        "@isTest static void testAccountUpdate() { Account acct = new Account({Name = 'Test'); acct.Integration Updated_c = false; insert acct; CalloutUtil.sendAccountUpdate (acct.Id); Account acctAfter = [SELECT Id, Integration Updated_c FROM Account WHERE Id = :acct.Id] [0]; System.assert(true, acctAfter.Integration_Updated_c); } The test method above calls a web service that updates an external system with Account information and sets the Account's Integration_Updated__c checkbox to True when it completes. The test fails to execute and exits with an error: \"Methods defined as TestMethod do not support Web service callouts.\" What is the optimal way to fix this?",
      options: [
        "A. Add if (!Test.isRunningTest()) around CalloutUtil.sendAccountUpdate.",
        "B. Add Test.startTest() and Test.setMock before and Test.stopTest() after CalloutUtil.sendAccountUpdate.",
        "C. Add Test.startTest() before and Test.setMock and Test.stopTest() after CalloutUtil.sendAccountUpdate.",
        "D. Add Test.startTest() before and Test.stopTest() after CalloutUtil.sendAccountUpdate.",
      ],
      answer: "D",
      title: "Question 100",
    },
    {
      content:
        "For compliance purposes, a company is required to track long-term product usage in their org. The information that they need to log will be collected from more than one object and. over time, they predict they will have hundreds of millions of records. What should a developer use to implement this?",
      options: [
        "A. Setup Audit Trail",
        "B. Field History Tracking",
        "C. Field Audit Trail",
        "D. Big objects",
      ],
      answer: "D",
      title: "Question 101",
    },
    {
      content: "How many Territories can an instance of salesforce have?",
      options: ["A. 1000", "B. 500", "C. 200", "D. 100", "E. 400"],
      answer: "B",
      title: "Question 102",
    },
    {
      content:
        "What is the best way to display field-level error messages in Lightning?",
      options: [
        "A. ukinputDefaultError",
        "B. apex:message",
        "C. auraxomponent",
        "D. ukoutputText",
      ],
      answer: "A",
      title: "Question 103",
    },
    {
      content:
        "[FIND 'map' IN ALL FIELDS RETURNING Account (Id, Name), Contact, Opportunity, Lead] What is a valid return type for th|e following SOSL query?",
      options: [
        "A. List<Account>",
        "B. List<List<sObject>>",
        "C. List<AggregateResult>",
        "D. List<sObject>",
      ],
      answer: "B",
      title: "Question 104",
    },
    {
      content:
        "A developer needs to create a service that will process an email sent to it and create an account and contact using the contents of the email as data for the records. How might a developer accomplish this requirement?",
      options: [
        "A. Use Heroku Data Clips to Process Email",
        "B. Use the Apex Inbound Email Handler",
        "C. Use Auto-launched Flow and Process Builder",
        "D. Use the Fuel API with Email Data Extensions",
      ],
      answer: "B",
      title: "Question 105",
    },
    {
      content:
        "An Apex trigger creates an Order__c record every time an Opportunity is won by a Sales Rep. Recently the trigger is creating two orders. What is the optimal method for a developer to troubleshoot this?",
      options: [
        "A. Run the Apex Test Classes for the Apex trigger to ensure the code still has sufficient code coverage.",
        "B. Set up debug logging for every Sales Rep, then monitor the logs for errors and exceptions.",
        "C. Turn off all Workflow Rules, then turn them on one at time to see which one causes the error.",
        "D. add system.debug() statements to the code and use the Developer Console logs to trace the code.",
      ],
      answer: "B",
      title: "Question 106",
    },
    {
      content:
        "A Visualforce page loads slowly due to the large amount of data it displays. Which strategy can a developer use to improve the performance?",
      options: [
        "A. use an <apex:actionPoller> in the page to load all of the data asynchronously.",
        "B. use Javascript to move data processing to the browser instead of the controller.",
        "C. use lazy loading to load the data on demand, instead of in the controller's constructor.",
        "D. Use the transient keyword for the List variables used in the custom controller.",
      ],
      answer: "C",
      title: "Question 107",
    },
    {
      content:
        "What should be added to the setup, in the location indicated, for the unit test above to create the controller extension for the test?A)B)C)D)",
      options: ["A. Option C", "B. Option D", "C. Option A", "D. Option B"],
      answer: "A",
      title: "Question 108",
    },
  ],
});
