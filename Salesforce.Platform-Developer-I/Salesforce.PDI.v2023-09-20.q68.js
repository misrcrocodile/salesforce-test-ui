window.testContent = window.testContent || [];
var testId = "Salesforce.Platform-Developer-I";
var testName = "Salesforce.Platform-Developer-I";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "Salesforce.PDI.v2023-09-20.q68",
  content: [
    {
      content:
        "A developer needs to have records with specific field values in order to test a new Apex class.\nWhat should the developer do to ensure the data is available to the test?",
      options: [
        "A. Use Anonymous Apex to create the required data.",
        "B. Use SOQL to query the org for the required data.",
        "C. Use Test.loadDataO < > and reference a CSV file in a static resource.",
        "D. Use Test.loadDataO and reference a JSON file in Documents.",
      ],
      answer: "C",
      title: "Question 1",
      explanation: "",
    },
    {
      content:
        "What should a developer do to check the code coverage of a class after running all tests?",
      options: [
        "A. View the code coverage percentage or the class using the Overalll code Coverage panel in the Developer Console Test tab.",
        "B. Select and run the class on the Apex est Execution page in the Developer Console.",
        "C. View the Class test Percentage tab on the Apex Class list view in Salesforce Setup.",
        "D. View the Code Coverage column in the list on the Apex Classes page.",
      ],
      answer: "A",
      title: "Question 2",
      explanation: "",
    },
    {
      content:
        "A developer must create a CreditcardPayment class that provides an implementation of an existing Payment class. Public virtual class Payment { public virtual void makePayment(Decimal amount) { /*implementation*/\n} } Which is the correct implementation?",
      options: [
        "A. Public class CreditCardPayment extends Payment {\n         public virtual void makePayment(Decimal amount) { /*implementation*/ }\n         }",
        "B. Public class CreditCardPayment implements Payment {\n         public override void makePayment(Decimal amount) { /*Implementation*/ }\n         }",
        "C. Public class CreditCardPayment implements Payment {\n         public virtual void makePayment(Decimal amount) { /*implementation*/ }\n         }",
        "D. Public class CreditcardPayment extends Payment {\n         public override void makePayment(Decimal amount) { /*implementation*/ }\n         }",
      ],
      answer: "D",
      title: "Question 3",
      explanation: "",
    },
    {
      content:
        "A developer created a trigger on the Account object and wants to test if the trigger is properly bulklfield. The developer team decided that the trigger should be tested with 200 account records with unique names.\nWhat two things should be done to create the test data within the unit test with the least amount of code?\nChoose 2 answers\nA developer created a trigger on the Account object and wants to test if the trigger is properly bulklfield. The developer team decided that the trigger should be tested with 200 account records with unique names.\nWhat two things should be done to create the test data within the unit test with the least amount of code?\nChoose 2 answers",
      options: [
        "A. Use the @isTest(seeAllData=true) annotation in the test class.",
        "B. Use the @isTest(isParallel=true) annotation in the test class.",
        "C. Create a static resource containing test data.",
        "D. Use Test.loadData to populate data in your test methods.",
      ],
      answer: "C,D",
      title: "Question 4",
      explanation: "",
    },
    {
      content:
        "Universal Containers has a Visualforce page that displays a table of every Container_c. being ....... Is falling with a view state limit because some of the customers rent over 10,000 containers.\nWhat should a developer change about the Visualforce page to help with the page load errors?",
      options: [
        "A. Implement pagination with an OffsetController.",
        "B. Use JavaScript remoting with SOQL Offset.",
        "C. Use Lazy loading and a transient List variable.",
        "D. Implement pagination with a StandardSetController,",
      ],
      answer: "D",
      title: "Question 5",
      explanation: "",
    },
    {
      content:
        "When a user edits the Postal Code on an Account, a custom Account text field named ''Timezone'' must be updated based on the values in a postalCodeToTimezone_c custom object.\nWhat should be built to implement this feature?",
      options: [
        "A. Account custom trigger",
        "B. Account workflow rule",
        "C. Account approval process",
        "D. Account assignment rule",
      ],
      answer: "A",
      title: "Question 6",
      explanation: "",
    },
    {
      content:
        "A developer wants to invoke on outbound message when a record meets a specific criteria.\nWhich three features satisfy this use case?\nChoose 3 answer",
      options: [
        "A. Process builder can be used to check the record criteria and send an outbound message with Apex Code.",
        "B. workflows can be used to check the record criteria and send an outbound message.",
        "C. Visual Workflow can be used to check the record criteria and send an outbound message without Apex Code.",
        "D. Approval Process has the capacity to check the record criteria and send an outbound message without Apex Code",
        "E. Process builder can be used to check the record criteria and send an outbound messagewithout Apex Code.",
      ],
      answer: "A,B,D",
      title: "Question 7",
      explanation: "",
    },
    {
      content:
        "The values 'High', 'Medium', and 'Low' are Identified as common values for multiple picklist across different object. What is an approach a developer can take to streamline maintenance of the picklist and their values, while also restricting the values to the ones mentioned above?",
      options: [
        'A. Create the Picklist on each object as a required field and select "Display values alphabeticaly, not in the order entered".',
        'B. Create the Picklist on each object and select "Restrict picklist to the values defined in the value set".',
        "C. Create the Picklist on each and add a validation rule to ensure data integrity.",
        "D. Create the Picklist on each object and use a Global Picklist Value Set containing the Values.",
      ],
      answer: "D",
      title: "Question 8",
      explanation: "",
    },
    {
      content:
        "A developer Is Integrating with a legacy on-premise SQL database.\nWhat should the developer use to ensure the data being Integrated is matched to the right records in Salesforce?",
      options: [
        "A. External Object",
        "B. External ID field",
        "C. Lookup field",
        "D. Formula field",
      ],
      answer: "B",
      title: "Question 9",
      explanation: "",
    },
    {
      content:
        "Universal Container* decides to use purely declarative development to build out a new Salesforce application.\nWhich two options can be used to build out logic layer for this application?\nChoose 2 answer",
      options: [
        "A. Remote Actions",
        "B. Record- Triggered flow",
        "C. Validation Rules",
        "D. Batch Jobs",
      ],
      answer: "B,C",
      title: "Question 10",
      explanation: "",
    },
    {
      content:
        "A developer is creating a Lightning web component to showa list of sales records.\nThe Sales Representative user should be able to see the commission field on each record. The Sales Assistant user should be able to see all fields on the record except the commission field.\nHow should this be enforced so that the component works for both users without showing any errors?",
      options: [
        "A. Use Security. stripInaccessible to remove fields inaccessible to the current user.",
        "B. Use Lightning Data Service to get the collection of sales records.",
        "C. Use WITH SECURITY_ENFORCED in the SOQL that fetches the data for the component.",
        "D. Use Lightning Locker Service to enforce sharing rules and field-level security.",
      ],
      answer: "A",
      title: "Question 11",
      explanation: "",
    },
    {
      content: "Which scenario is valid for execution by unit tests?",
      options: [
        "A. Generate a Visualforce PDF with geccontentAsPDF ().",
        "B. Load data from a remote site with a callout.",
        "C. Set the created date of a record using a system method.",
        "D. Execute anonymous Apex as a different user.",
      ],
      answer: "C",
      title: "Question 12",
      explanation: "",
    },
    {
      content:
        "What are two use cases for executing Anonymous Apex code? Choose 2 answers",
      options: [
        "A. To schedule an Apex class to run periodically",
        "B. To delete 15,000 inactive Accounts In a single transaction after a deployment",
        "C. To add unit test code coverage to an org",
        "D. To run a batch Apex class to update all Contacts",
      ],
      answer: "A,D",
      title: "Question 13",
      explanation: "",
    },
    {
      content:
        "What are three characteristics of change set deployments?\nChoose 3 answers",
      options: [
        "A. Deployment is done in a one-way, single transaction.",
        "B. Sending a change set between two orgs requires a deployment connection.",
        "C. Change sets can only be used between related organizations.",
        "D. Change sets can deploy custom settings data.",
        "E. Change sets can be used to transfer records.",
      ],
      answer: "B,D,E",
      title: "Question 14",
      explanation: "",
    },
    {
      content:
        "Universal Containers hires a developer to build a custom search page to help user- find the Accounts they want. Users will be able to search on Name, Description, and a custom comments field.\nWhich consideration should the developer be aware of when deciding between SOQL and SOSL?\nChoose 2 answers",
      options: [
        "A. SOQL is faster for text searches.",
        "B. SOSL is faster for tent searches.",
        "C. SOQL is able to return more records.",
        "D. SOSL is able to return more records.",
      ],
      answer: "B,C",
      title: "Question 15",
      explanation: "",
    },
    {
      content:
        "Universal Containers stores the availability date on each Line Item of an Order and Orders are only shipped when all of the Line Items are available. Which method should be used to calculate the estimated ship date for an Order?",
      options: [
        "A. Use a LATEST formula on each of the latest availability date fields.",
        "B. Use a CEILING formula on each of the Latest availability date fields.",
        "C. Use a DAYS formula on each of the availability date fields and a COUNT Roll-Up Summary field on the Order.",
        "D. Use a Max Roll-Up Summary field on the Latest availability date fields.",
      ],
      answer: "D",
      title: "Question 16",
      explanation: "",
    },
    {
      content:
        "Which statement describes the execution order when trigger are associated to the same object and event?",
      options: [
        "A. Triggers are executed in the order they are modified",
        "B. Trigger execution order cannot be guaranteed.",
        "C. Triggers are executed in the order they are created..",
        "D. Triggers are executed alphabetically by trigger name.",
      ],
      answer: "B",
      title: "Question 17",
      explanation: "",
    },
    {
      content:
        "A developer must implement a CheckPaymentProcessor class that provides check processing payment capabilities that adhere to what defined for payments in the PaymentProcessor interface. public interface PaymentProcessor { void pay(Decimal amount); } Which is the correct implementation to use the PaymentProcessor interface class?",
      options: [
        "A. Public class CheckPaymentProcessor extends PaymentProcessor {\n         public void pay(Decimal amount) {}\n         }",
        "B. Public class CheckPaymentProcessor implements PaymentProcessor {\n         public void pay(Decimal amount) {}\n         }",
        "C. Public class CheckPaymentProcessor implements PaymentProcessor {\n         public void pay(Decimal amount);\n         }",
        "D. Public class CheckPaymentProcessor extends PaymentProcessor {\n         public void pay(Decimal amount);\n         }",
      ],
      answer: "C",
      title: "Question 18",
      explanation: "",
    },
    {
      content:
        "For which three items can 2 trace flag be configured?\nChoose 3 answers",
      options: [
        "A. User",
        "B. Visualforce",
        "C. Apex Trager",
        "D. Flow",
        "E. Apex Class",
      ],
      answer: "A,C,E",
      title: "Question 19",
      explanation: "",
    },
    {
      content:
        "What are three ways for a developer to execute tests in an org? Choose 3.",
      options: [
        "A. Bulk API",
        "B. Tooling API",
        "C. Setup Menu",
        "D. Salesforce DX",
        "E. Metadata API.",
      ],
      answer: "B,C,D",
      title: "Question 20",
      explanation:
        "Explanation\n https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_testing.htm\n https://developer.salesforce.com/docs/atlas.en-us.api_tooling.meta/api_tooling/tooling_api_objects_apextestsuite",
    },
    {
      content:
        "The Job_Application__c custom object has a field that is a Master-Detail relationship to the Contact object, where the Contact object is the Master. As part of a feature implementation, a developer needs to retrieve a list containing all Contact records where the related Account Industry is 'Technology' while also retrieving the contact's Job_Application__c records.\nBased on the object's relationships, what is the most efficient statement to retrieve the list of contacts?",
      options: [
        "A. [SELECT Id, (SELECT Id FROM Job_Applications_r) FROM Contact WHERE Account.Industry = 'Technology'];",
        "B. [SELECT Id, (SELECT Id FROM Job_Applications_c) FROM Contact WHERE Accounts.Industry = 'Technology'];",
        "C. [SELECT Id, (SELECT Id FROM Job_Application_c) FROM Contact WHERE Account.Industry = 'Technology'];",
        "D. [SELECT Id, (SELECT Id FROM Job_Applications_r) FROM Contact WHERE Accounts.Industry = 'Technology'];",
      ],
      answer: "D",
      title: "Question 21",
      explanation: "",
    },
    {
      content:
        "Refer to the following code snippet for an environment has more than 200 Accounts belonging to the Technology' industry:\nWhen the code execution, which two events occur as a result of the Apex transaction?\nWhen the code executes, which two events occur as a result of the Apex transaction?\nChoose 2 answers",
      options: [
        "A. If executed in an asynchronous context, the apex transaction is likely to fall by exceeding the DML governor limit",
        "B. The Apex transaction fails with the following message. \"SObject row was retrieved via SOQL without querying the requested field Account.Is.Tech__c''.",
        "C. The Apex transaction succeeds regardless of any uncaught exception and all processed accounts are updated.",
        "D. If executed In a synchronous context, the apex transaction is likely to fall by exceeding the DHL governor limit.",
      ],
      answer: "A",
      title: "Question 22",
      explanation: "",
    },
    {
      content:
        "A developer has the following requirements:\n* Calculate the total amount on an Order.\n* Calculate the line amount for each Line Item based on quantity selected and price.\n* Move Line Items to a different Order if a Line Item is not in stock.\nWhich relationship implementation supports these requirements on its own7",
      options: [
        "A. Order has a re-parentable lookup field to Line Item.",
        "B. Line Item has a re-parentable master-detail field to Order.",
        "C. Order has a re-parentable master-detail field to Line Item.",
        "D. Line Item has a re-parentable lookup field to Order.",
      ],
      answer: "B",
      title: "Question 23",
      explanation: "",
    },
    {
      content:
        "A developer is writing tests for a class and needs to insert records to validate functionality.\nWhich annotation method should be used to create record for every method in the test class?",
      options: [
        "A. @isTest (SeeAllData-true)",
        "B. @TestSetup",
        "C. @StartTest",
        "D. @FreTest",
      ],
      answer: "B",
      title: "Question 24",
      explanation: "",
    },
    {
      content:
        "n org has an existing flow that creates an Opportunity with an Update Records element. A developer must update the flow to aiso create a 'Contact and store the created Contact's 1D on the Opportunity.\nWhich update must the developer make in the flow?",
      options: [
        "A. Add a new Update Records element.",
        "B. Add a new Get Records element.",
        "C. Add a new Roll back Records element",
        "D. Add a new Create Records element.",
      ],
      answer: "D",
      title: "Question 25",
      explanation: "",
    },
    {
      content:
        "The following code snippet is executed by a Lightning web component in an environment with more than\n2,000 lead records:\nWhich governor limit will likely be exceeded within the Apex transaction?",
      options: [
        "A. Total number of DML statement issued",
        "B. Total number of records processed as a result of DML statements",
        "C. Total number of SOQL queries issued",
        "D. Total number of records retrieved by SOQL queries",
      ],
      answer: "D",
      title: "Question 26",
      explanation: "",
    },
    {
      content:
        "Universal Container is building a recruiting app with an Applicant object that stores information about an individual person that represents a job. Each application may apply for more than one job.\nWhat should a developer implement to represent that an applicant has applied for a job?",
      options: [
        "A. Lookup field from Applicant to Job",
        "B. Junction object between Applicant and Job",
        "C. Master-detail field from Applicant to Job",
        "D. Formula field on Applicant that references Job",
      ],
      answer: "B",
      title: "Question 27",
      explanation: "",
    },
    {
      content:
        "In the Lightning UI, where should a developer look to find information about a Paused Flow Interview?",
      options: [
        "A. In the system debug log by Altering on Paused Row Interview",
        "B. On the Paused Row Interviews component on the Home page",
        "C. In the Paused Interviews section of the Apex Flex Queue",
        "D. On the Paused Row Interviews related List for a given record",
      ],
      answer: "C",
      title: "Question 28",
      explanation: "",
    },
    {
      content: "What are two ways for a developer to execute tests in an org?",
      options: [
        "A. Tooling API",
        "B. Matadata API",
        "C. Bulk API",
        "D. Developer console",
      ],
      answer: "A,D",
      title: "Question 29",
      explanation: "",
    },
    {
      content:
        "A developer observes that an Apex test method fails in the Sandbox. To identify the issue, the developer copies the code inside the test method and executes it via the Execute Anonymous tool in the Developer Console. The code then executes with no exceptions or errors. Why did the test method fail in the sandbox and pass in the Developer Console?",
      options: [
        "A. The test method is calling an @future method.",
        "B. The test method relies on existing data in the sandbox.",
        "C. The test method does not use System.runAs to execute as a specific user.",
        "D. The test method has a syntax error in the code.",
      ],
      answer: "B",
      title: "Question 30",
      explanation: "",
    },
    {
      content:
        "The Account object in an organization has a master detail relationship to a child object called Branch. The following automations exist:\n* Rollup summary fields\n* Custom validation rules\n* Duplicate rules\nA developer created a trigger on the Account object.\nWhat two things should the developer consider while testing the trigger code?\nChoose 2 answers",
      options: [
        "A. The validation rules will cause the trigger to fire again.",
        "B. Rollup summary fields can cause the parent record to go through Save.",
        "C. The trigger may fire multiple times during a transaction.",
        "D. Duplicate rules are executed once all DML operations commit to the database.",
      ],
      answer: "B,C",
      title: "Question 31",
      explanation: "",
    },
    {
      content:
        "A development team wants to use a deployment script lo automatically deploy lo a sandbox during their development cycles.\nWhich two tools can they use to run a script that deploys to a sandbox?\nChoose 2 answers",
      options: [
        "A. VS Code",
        "B. Developer Console",
        "C. Change Sets",
        "D. SFDX CLI",
      ],
      answer: "A,D",
      title: "Question 32",
      explanation: "",
    },
    {
      content:
        "A developer wrote an Apex method to update a list of Contacts and wants to make it available for use by Lightning web components.\nWhich annotation should the developer add to the Apex method to achieve this?",
      options: ["A. ", "B. ", "C. ", "D. "],
      answer: "C",
      title: "Question 33",
      explanation: "",
    },
    {
      content:
        "Which Lightning code segment should be written to declare dependencies on a Lightning component, c:accountList, that is used in a Visualforce page?",
      options: ["A. ", "B. ", "C. ", "D. "],
      answer: "B",
      title: "Question 34",
      explanation: "",
    },
    {
      content:
        "Cloud kicks has a multi-screen flow that its call center agents use when handling inbound service desk calls.\nAt one of the steps in the flow, the agents should be presented with a list of order numbers and dates that are retrieved from an external order management system in real time and displayed on the screen.\nWhat should a developer use to satisfy this requirement?",
      options: [
        "A. An outbound message",
        "B. An Apex REST class",
        "C. An invocable method",
        "D. An Apex controller",
      ],
      answer: "B",
      title: "Question 35",
      explanation: "",
    },
    {
      content:
        "A developer is migrating a Visualforce page into a Lightning web component.\nThe Visualforce page shows information about a single record. The developer decides to use Lightning Data Service to access record data.\nWhich security consideration should the developer be aware of?",
      options: [
        "A. Lightning Data Service ignores field-level security.",
        "B. Lightning Data Service handles sharing rules and field-level security.",
        "C. The isAccessible ( ) method must be used for field-level access checks",
        "D. The with sharing keyword must be used to enforce sharing rules.",
      ],
      answer: "B",
      title: "Question 36",
      explanation: "",
    },
    {
      content:
        "Which Apex class contains methods to return the amount of resources that have been used for a particular governor, such as the number of DML statements?",
      options: ["A. OrgLimits", "B. Messaging", "C. Limits", "D. Exception"],
      answer: "C",
      title: "Question 37",
      explanation: "",
    },
    {
      content:
        "What should a developer use to script the deployment and unit test execution as part of continuous integration?",
      options: [
        "A. Salesforce CLI",
        "B. Execute Anonymous",
        "C. Developer Console",
        "D. VS Code",
      ],
      answer: "C",
      title: "Question 38",
      explanation: "",
    },
    {
      content:
        "A developer must provide custom user interfaces when users edit a Contact in either Salesforce Classic or Lightning Experience.\nWhat should the developer use to override the Contact's Edit button and provide this functionality?",
      options: [
        "A. A Visualforce page in Salesforce Classic and a Lightning page in Lightning Experience",
        "B. A Visualforce page in Salesforce Classic and a Lightning component in Lightning Experience",
        "C. A Lightning component in 5alesforce Classic and a Lightning component in lightning Experience",
        "D. A Lightning page in Salesforce Classic and a Visualforce page in Lightning Experience",
      ],
      answer: "B",
      title: "Question 39",
      explanation: "",
    },
    {
      content:
        "Which two are best practices when it comes to component and application event handling? (Choose two.)",
      options: [
        "A. Try to use application events as opposed to component events.",
        "B. Handle low-level events in the event handler and re-fire them as higher-level events.",
        "C. Reuse the event logic in a component bundle, by putting the logic in the helper.",
        "D. Use component events to communicate actions that should be handled at the application level.",
      ],
      answer: "B,C",
      title: "Question 40",
      explanation: "",
    },
    {
      content: "What is the result of the following code?",
      options: [
        "A. The record will not be created and a exception will be thrown.",
        "B. The record will be created and no error will be reported.",
        "C. The record will be created and a message will be in the debug log.",
        "D. The record will not be created and no error will be reported.",
      ],
      answer: "D",
      title: "Question 41",
      explanation: "",
    },
    {
      content:
        "Refer to the following Apex code:\nWhat is the value of x when it is written to the debug log?",
      options: ["A. 2", "B. 1", "C. 0", "D. 3"],
      answer: "A",
      title: "Question 42",
      explanation: "",
    },
    {
      content:
        "Cloud kicks has a muli-screen flow its call center agents use when handling inbound service desk calls.\nAt one of the steps in the flow, the agents should be presented with a list of order number and dates that are retrieved from an external odrer management system in real time and displayed on the screen.\nWhat shuold a developer use to satisfy this requirement?",
      options: [
        "A. An apex REST class",
        "B. An outbound message",
        "C. An Apex Controller",
        "D. An invocae method",
      ],
      answer: "A",
      title: "Question 43",
      explanation: "",
    },
    {
      content:
        "An Apex method, getAccounts, that returns a list of Accounts given a searchTern, is available for Lightning Web Components to use.\nWhat is the correct definition of a Lightning Web Component property that uses the getAccounts method?",
      options: ["A. ", "B. ", "C. ", "D. "],
      answer: "B",
      title: "Question 44",
      explanation: "",
    },
    {
      content:
        "A developer created a custom order management app that uses an Apex class. The order is represented by an Order object and an Orderltem object that has a master-detail relationship to Order. During order processing, an order may be split into multiple orders.\nWhat should a developer do to allow their code to move some existing Orderltem records to a new Order record?",
      options: [
        "A. Add without sharing to the Apex class declaration.",
        "B. Change the master-detail relationship to an external lookup relationship.",
        "C. Create a junction object between Orderltem and Order.",
        "D. Select the Allow reparenting option on the master-detail relationship.",
      ],
      answer: "C",
      title: "Question 45",
      explanation: "",
    },
    {
      content:
        "A developer is debugging the following code to determinate why Accounts are not being created Account a = new Account(Name = 'A'); Database.insert(a, false); How should the code be altered to help debug the issue?",
      options: [
        "A. Add a try/catch around the insert method",
        "B. Collect the insert method return value a Saveresult variable",
        "C. Set the second insert method parameter to TRUE",
        "D. Add a System.debug() statement before the insert method",
      ],
      answer: "B",
      title: "Question 46",
      explanation: "",
    },
    {
      content:
        "Given the following code snippet, that is part of a custom controller for a Visualforce page:\nIn which two ways can the try/catch be enclosed to enforce object and field-level permissions and prevent the DML statement from being executed if the current logged-in user does not have the appropriate level of access? Choose 2 answers",
      options: [
        "A. Use if (Schema , sobjectType. Contact. Field, Is_Active_c. is Updateable ( ) )",
        "B. Use if (Schema.sObjectType.Contact.isAccessible ( ) )",
        "C. Use if (Schema, sobjectType, Contact, isUpdatable ( ) )",
        "D. Use if (thisContact.Owner = = UserInfo.getuserId ( ) )",
      ],
      answer: "A,C",
      title: "Question 47",
      explanation: "",
    },
    {
      content:
        "What are two ways a developer can get the status of an enquered job for a class that queueable interface?\nChoose 2 answers",
      options: [
        "A. View the apex Jobs page",
        "B. View the apex status Page",
        "C. View the apex flex Queue",
        "D. Query the AsyncApexJobe object",
      ],
      answer: "C,D",
      title: "Question 48",
      explanation: "",
    },
    {
      content:
        "A developer is tasked to perform a security review of the ContactSearch Apex class that exists in the system.\nWhithin the class, the developer identifies the following method as a security threat: List<Contact> performSearch(String lastName){ return Database.query('Select Id, FirstName, LastName FROM Contact WHERE LastName Like %'+lastName+'%); } What are two ways the developer can update the method to prevent a SOQL injection attack? Choose 2 answers",
      options: [
        "A. Use the escapeSingleQuote method to sanitize the parameter before its use.",
        "B. Use variable binding and replace the dynamic query with a static SOQL.",
        "C. Use the @Readonly annotation and the with sharing keyword on the class.",
        "D. Use a regular expression on the parameter to remove special characters.",
      ],
      answer: "A,B",
      title: "Question 49",
      explanation: "",
    },
    {
      content:
        "Which two sfdx commands can be used to add testing data to a Developer sandbox?",
      options: [
        "A. Forced: data: object :upsert",
        "B. Forced: data: tree: upsert",
        "C. Forced: data:async:upsert",
        "D. Forced: data:bulk:upsert",
      ],
      answer: "B,D",
      title: "Question 50",
      explanation: "",
    },
    {
      content:
        "A developer wants to get access to the standard price book in the org while writing a test class that covers an OpportunityLineItem trigger. Which method allows access to the price book?",
      options: [
        "A. Use Test.loadData ( )and a static resource to load a standard price book",
        "B. Use @TestVisible to allow the test method to see the standard price book.",
        "C. Use Test,getStandardPricebookid ( ) to get the standard price book ID.",
        "D. Use @IsTest (SeeAllData=True) and delete the existing standard price book",
      ],
      answer: "C",
      title: "Question 51",
      explanation: "",
    },
    {
      content:
        "What are three ways for 2 developer to execute tests in an org? Choose 3 answers",
      options: [
        "A. Bulk API",
        "B. SalesforceDX",
        "C. Setup Menu",
        "D. Tooling API",
        "E. Metadata APT",
      ],
      answer: "B,C,D",
      title: "Question 52",
      explanation: "",
    },
    {
      content:
        "When a user edits the postal Code on an Account, a custom Account text field named. Timezone' must be updated based on the values in a PostalCodeToTimezone_c custom ogject.\nWhich two automationtools can be used to implement this feature?\nChoose 2 answers",
      options: [
        "A. Quick actions",
        "B. Account trigger",
        "C. Approval process",
        "D. Fast field Updates record-triggered flow",
      ],
      answer: "B,D",
      title: "Question 53",
      explanation: "",
    },
    {
      content:
        "A custom picklist field, Food_Preference__c, exist on a custom object. The picklist contains the following options: 'Vegan','Kosher','No Preference'. The developer must ensure a value is populated every time a record is created or updated. What is the most efficient way to ensure a value is selected every time a record is saved?",
      options: [
        'A. Set "Use the first value in the list as the default value" as True.',
        "B. Mark the field as Required on the object's page layout.",
        "C. Set a validation rule to enforce a value is selected.",
        "D. Mark the field as Required on the field definition.",
      ],
      answer: "D",
      title: "Question 54",
      explanation: "",
    },
    {
      content:
        "When a user edits the Postal Code on an Account, a custom Account text field named ''Timezone'' must be updated based on the values another custom object object called.\nWhat is the optimal way to Implement this feature?",
      options: [
        "A. Build an account assignment rule.",
        "B. Build a flow with flow Builder.",
        "C. Create an account approval process.",
        "D. Create a formula field.",
      ],
      answer: "B",
      title: "Question 55",
      explanation: "",
    },
    {
      content:
        "A business has a proprietary Order Management System (OMS) that creates orders from their website and fulfills the orders. When the order is created in the OMS, an integration also creates an order record in Salesforce and relates it to the contact as identified by the email on the order. As the order goes through different stages in the OMS, the integration also updates It in Salesforce. It is noticed that each update from the OMS creates a new order record in Salesforce.\nWhich two actions will prevent the duplicate order records from being created in Salesforce?\nChoose 2 answers",
      options: [
        "A. Ensure that the order number in the OMS is unique.",
        "B. Use the email on the contact record as an external ID.",
        "C. Write a before trigger on the order object to delete any duplicates.",
        "D. Use the order number from the OMS as an external ID.",
      ],
      answer: "A,C",
      title: "Question 56",
      explanation: "",
    },
    {
      content:
        "Refer to the following code snippet for an environment that has more than 200 Accounts belonging to the Technology' industry:\nwhich three statements are accurate about debug logs?\nChoose 3 answers",
      options: [
        "A. Debug logs can be set for specific users, classes, and triggers.",
        "B. The maximum size of a debug log is 5 MB.",
        "C. System debug logs are retained for 24 hours.",
        "D. Only the 20 most recent debug logs for a user are kept.",
        "E. Debug log levels are cumulative, where FINE log level includes all events logged at the DEBUG, INFO, WARN, and ERROR levels.",
      ],
      answer: "A,C,D",
      title: "Question 57",
      explanation: "",
    },
    {
      content:
        "A custom object Trainer_c has a lookup field to another custom object Gym___c.\nWhich SOQL query will get the record for the Viridian City gym and it's trainers?",
      options: [
        "A. SELECT ID FROM Trainer_c WHERE Gym__r.Name - Viridian City Gym'",
        "B. SELECT Id, (SELECT Id FROM Trainer_c) FROM Gym_c WHERE Name - Viridian City Gym'",
        "C. SELECT Id, (SELECT Id FROM Trainers) FROM Gym_C WHERE Name - Viridian City Gym'",
        "D. SELECT Id, (SELECT Id FROM Trainers) FROM Gym_C WHERE Name . Viridian City Gym'",
      ],
      answer: "D",
      title: "Question 58",
      explanation: "",
    },
    {
      content:
        "What can be used to override the Account's standard Edit button for Lightning Experience?",
      options: [
        "A. Lightning action",
        "B. Lightning component",
        "C. Lightning page",
        "D. Lightning flow",
      ],
      answer: "B",
      title: "Question 59",
      explanation:
        "Explanation\n A Lightning Component can be used to override the Account's standard Edit button for Lightning Experience.\n This allows the developer to create a custom page with custom fields and custom functionality that can be used instead of the standard Edit page. It also allows for the creation of custom navigation and buttons to make the user experience more intuitive and efficient.\n Reference: https://trailhead.salesforce.com/en/content/learn/projects/quick-start-lightning-components",
    },
    {
      content:
        "A developer considers the following snippet of code:\nBased on this code, what is the value of x?",
      options: ["A. 2", "B. 1", "C. 4", "D. 3"],
      answer: "C",
      title: "Question 60",
      explanation: "",
    },
    {
      content:
        "A developer is creating an app that contains multiple Lightning web components.\nOne of the child components is used for navigation purposes. When a user click a button called.. component, the parent component must be alerted so it can navigate to the next page.\nHow should this be accomplished?",
      options: [
        "A. Create a custom event.",
        "B. Update a property on the parent.",
        "C. Call a method in the Apex controller.",
        "D. Fire a notification.",
      ],
      answer: "A",
      title: "Question 61",
      explanation: "",
    },
    {
      content:
        "How can a developer check the test coverage of active Process Builder and Flows deploying them in a Changing Set?",
      options: [
        "A. Use the code Coverage Setup page",
        "B. Use the Apex testresult class",
        "C. Use the Flow properties page.",
        "D. Use SOQL and the Tooling API",
      ],
      answer: "D",
      title: "Question 62",
      explanation: "",
    },
    {
      content:
        "When importing and exporting data into Salesforce, which two statements are true?\nChoose 2 answers",
      options: [
        "A. Bulk API can be used to bypass the storage limits when importing large data volumes in development environments.",
        "B. Data import wizard is a client application provided by Salesforce.",
        "C. Developer and Developer Pro sandboxes have different storage limits.",
        "D. Bulk API can be used to import large data volumes in development environments without bypassing the storage limits.",
      ],
      answer: "B,C",
      title: "Question 63",
      explanation: "",
    },
    {
      content:
        "A developer must create a lightning component that allows users to input contact record information to create a contact record, including a salary__c custom field. what should the developer use, along with a lightning-record-edit form, so that salary__c field functions as a currency input and is only viewable and editable by users that have the correct field levelpermissions on salary__C?",
      options: [
        'A. <ligthning-input-field field-name="Salary__c"></lightning-input-field>',
        'B. <lightning-input-currency value="Salary__c"></lightning-input-currency>',
        'C. <lightning-input type="number" value="Salary__c" formatter="currency"></lightning-input>',
        'D. <lightning-formatted-number value="Salary__c" format-style="currency"></lightning-formatted-number>',
      ],
      answer: "A",
      title: "Question 64",
      explanation: "",
    },
    {
      content:
        "A software company uses the following objects and relationships:\n* Case: to handle customer support issues\n* Defect_c: a custom object to represent known issues with the company's software\n* case_Defect__c: a junction object between Case and Defector to represent that a defect Is a customer issue What should be done to share a specific Case-Defect_c record with a user?",
      options: [
        "A. Share the parent Defect_c record.",
        "B. Share the Case_Defect_c record.",
        "C. Share the parent Case and Defect_c records.",
        "D. Share the parent Case record.",
      ],
      answer: "C",
      title: "Question 65",
      explanation: "",
    },
    {
      content:
        "Which action causes a before trigger to fire by default for Accounts?",
      options: [
        "A. Converting Leads to Contact accounts",
        "B. Renaming or replacing picklist",
        "C. Importing data using the Data Loader and the Bulk API",
        "D. Updating addresses using the Mass Address update tool",
      ],
      answer: "C",
      title: "Question 66",
      explanation: "",
    },
    {
      content:
        "A Salesforce Administrator is creating a record-triggered flow. When certain criteria are met, the flow must call an Apex method to execute complex validation involving several types of objects.\nWhen creating the Apex method, which annotation should a developer use to ensure the method Can be used within the flow?",
      options: [
        "A. @future",
        "B. @AuraEnaled",
        "C. @RemoteAction",
        "D. @InvocableMethod",
      ],
      answer: "D",
      title: "Question 67",
      explanation: "",
    },
    {
      content:
        "Universal Containers implemented a private sharing model for the Account object. A custom Account search tool was developed with Apex to help sales representatives find accounts that match multiple criteria they specify. Since its release, users of the tool report they can see Accounts they do not own. What should the developer use to enforce sharing permission for the currently logged-in user while using the custom search tool?",
      options: [
        "A. Use the schema describe calls to determine if the logged-in users has access to the Account object.",
        "B. Use the without sharing keyword on the class declaration.",
        "C. Use the UserInfo Apex class to filter all SOQL queries to returned records owned by the logged-in user.",
        "D. Use the with sharing keyword on the class declaration.",
      ],
      answer: "D",
      title: "Question 68",
      explanation:
        "Explanation\n Use the with sharing keyword on the class declaration. The with sharing keyword ensures that the Apex code respects the object-level, field-level, and record-level sharing settings for the user who is running the Apex code. This means that the code will only return records that the user has access to, according to their Sharing Settings. You can find more information about the with sharing keyword in the official Salesforce documentation (https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm",
    },
  ],
});
