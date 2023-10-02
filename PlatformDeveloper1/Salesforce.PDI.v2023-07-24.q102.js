window.testContent = window.testContent || [];
var testId = "PlatformDeveloper1";
var testName = "PlatformDeveloper1.PDI";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "PlatformDeveloper1.PDI.v2023-07-24.q102",
  content: [
    {
      content:
        "A developer is asked to create a Visualforce page for Opportunities that allows users to save or merge the current record. Which approach should the developer to meet this requirement?",
      options: [
        "A. A custom controller extension",
        "B. A custom controller",
        "C. Visualforce page JavaScript",
        "D. Standard controller methods",
      ],
      answer: "A",
      title: "Question 1",
    },
    {
      content:
        "How can a developer determine, from the DescribeSObjectResult, if the current user will be able to create records for an object in Apex?",
      options: [
        "A. By using the hasAccess() method.",
        "B. By using the canCreate() method.",
        "C. By using the isCreatable() method.",
        "D. By using the isInsertable() method.",
      ],
      answer: "C",
      title: "Question 2",
    },
    {
      content:
        "How can a developer avoid exceeding governor limits when using an Apex Trigger?\nChoose 2 answers",
      options: [
        "A. By using a helper class that can be invoked from multiple triggers.",
        "B. By performing DML transactions on lists of SObjects.",
        "C. By using the Database class to handle DML transactions.",
        "D. By using Maps to hold data from query results.",
      ],
      answer: "B,D",
      title: "Question 3",
    },
    {
      content: "What is a capability of formula fields? (Choose 3)",
      options: [
        "A. Determine if a datetime field has passed using the NOW function.",
        "B. Generate a link using the HYPERLINK function to a specific record in a legacy system.",
        "C. Determine which of three different images to display using the IF function.",
        "D. Display the previous values for a field using the PRIORVALUE function.",
        "E. Return and display a field value from another object using the VLOOKUP function.",
      ],
      answer: "A,B,C",
      title: "Question 4",
    },
    {
      content:
        'A developer creates a new Apex trigger with a helper class, and writes a test class that only exercises 95% coverage of new Apex helper class. Change Set deployment to production fails with the test coverage warning: "Test coverage of selected Apex Trigger is 0%, at least 1% test coverage is required".\nWhat should the developer do to successfully deploy the new Apex trigger and helper class?',
      options: [
        "A. Increase the test class coverage on the helper class",
        "B. Remove the falling test methods from the test class.",
        "C. Create a test class and methods to cover the Apex trigger",
        "D. Run the tests using the 'Run All Tests' method.",
      ],
      answer: "C",
      title: "Question 5",
    },
    {
      content:
        "Given the code below:What should a developer do to correct the code so that there is no chance of hitting a governor limit?",
      options: [
        "A. Rework the code and eliminate the for loop.",
        "B. combine the two SELECT statements into a single SOQL statement.",
        "C. Add a LIMIT clause to the first SELECT SOQL statement.",
        "D. Add a WHERE clause to the first SELECT SOQL statement.",
      ],
      answer: "D",
      title: "Question 6",
    },
    {
      content:
        "Application Events follow the traditional publish-subscribe model. Which method is used to fire an event?",
      options: [
        "A. Emit()",
        "B. FireEvent()",
        "C. RegisterEvent()",
        "D. Fire()",
      ],
      answer: "D",
      title: "Question 7",
    },
    {
      content:
        "When viewing a Quote, the sales representative wants to easily see how many discounted items are included in the Quote Line Items. What should a developer do to meet this requirement?",
      options: [
        "A. Create a trigger on the Quote object that queries the Quantity field on discounted Quote Line Items.",
        "B. Create a roll-up summary field on the Quote object that performs a SUM on the quote Line Item Quantity field, filtered for only discounted Quote Line Items.",
        "C. Create a Workflow Rule on the Quote Line Item object that updates a field on the parent Quote when the item is discounted.",
        "D. Create a formula field on the Quote object that performs a SUM on the Quote Line Item Quantity field, filtered for only discounted Quote Line Items.",
      ],
      answer: "B",
      title: "Question 8",
    },
    {
      content:
        "Universal Containers hires a developer to build a custom search page to help user- find the Accounts they want. Users will be able to search on Name, Description, and a custom comments field. Which consideration should the developer be aware of when deciding between SOQL and SOSL?\nChoose 2 answers",
      options: [
        "A. SOQL is able to return more records.",
        "B. SOSL is faster for tent searches.",
        "C. SOSL is able to return more records.",
        "D. SOQL is faster for text searches.",
      ],
      answer: "A,B",
      title: "Question 9",
    },
    {
      content:
        "Which statement generates a list of Leads and Contacts that have a field with the phrase 'ACME'?",
      options: [
        'A. List<List <sObject>> searchList = (FIND "*ACME*" IN ALL FIELDS RETURNING Contact, Lead);',
        'B. Map <sObject> searchList = (FIND "*ACME*" IN ALL FIELDS RETURNING Contact, Lead);',
        'C. List <sObject> searchList = (FIND "*ACME*" IN ALL FIELDS RETURNING Contact, Lead);',
        "D. List<List < sObject>> searchList = (SELECT Name, ID FROM Contact, Lead WHERE Name like'%ACME%');",
      ],
      answer: "A",
      title: "Question 10",
    },
    {
      content:
        "A developer needs to join data received from an integration with an external system with parent records in Salesforce. The data set does not contain the Salesforce IDs of the parent records, but it does have a foreign key attribute that can be used to identify the parent.Which action will allow the developer to relate records in the data model without knowing the Salesforce ID?",
      options: [
        "A. Create a custom field on the child object of type External Relationship.",
        "B. Create and populate a custom field on the parent object marked as Unique",
        "C. Create and populate a custom field on the parent object marked as an External ID.",
        "D. Create a custom field on the child object of type Foreign Key",
      ],
      answer: "C",
      title: "Question 11",
    },
    {
      content:
        "A developer needs to test an Invoicing system integration. After reviewing the number of transactions required for the test, the developer estimates that the test data will total about 2 GB of data storage. Production data is not required for the integration testing. Which two environments meet the requirements for testing? (Choose two.)",
      options: [
        "A. Developer Sandbox",
        "B. Developer Edition",
        "C. Partial Sandbox",
        "D. Developer Pro Sandbox",
        "E. Full Sandbox",
      ],
      answer: "C,E",
      title: "Question 12",
    },
    {
      content:
        "Which Apex class contains methods to return the amount of resources that have been used for a particular governor, such as the number of DML statements?",
      options: ["A. Messaging", "B. Exception", "C. Limits", "D. OrgLimits"],
      answer: "C",
      title: "Question 13",
    },
    {
      content:
        "Which three steps allow a custom SVG to be included in a Lightning web component? Choose 3 answers",
      options: [
        "A. Import the SVG as a content asset file.",
        "B. Import the static resource and provide a better for it in JavaScript.",
        "C. Reference the getter in the HTML template.",
        "D. Reference the import in the HTML template.",
        "E. Upload the SVG as a static resource.",
      ],
      answer: "B,C,E",
      title: "Question 14",
    },
    {
      content:
        "Which approach should be used to provide test data for a test class?",
      options: [
        "A. Use a test data factory class to create test data.",
        "B. Access data in @TestVisible class variables.",
        "C. Query for existing records in the database.",
        "D. Execute anonymous code blocks that create data.",
      ],
      answer: "A",
      title: "Question 15",
    },
    {
      content:
        "Universal Containers decides to use purely declarative development to build out a new Salesforce application.Which three options can be used to build out the business logic layer for this application?Choose 3 answers",
      options: ["A. Process builder", "B. Validation Rules", "C. Flow Builder"],
      answer: "A,B,C",
      title: "Question 16",
    },
    {
      content:
        "What is the result of the debug statements in testMethod3 when you create test data using testSetup in below code?",
      options: [
        "A. Account0.Phone=333-8781, Account1.Phone=333-8780",
        "B. Account0.Phone=888-1515, Account1.Phone=999-1515",
        "C. Account0.Phone=888-1515, Account1.Phone=999-2525",
        "D. Account0.Phone=333-8780, Account1.Phone=333-8781",
      ],
      answer: "D",
      title: "Question 17",
    },
    {
      content:
        "Cloud Kicks Fitness, an ISV Salesforce partner, is developing a managed package application. One of the application modules allows the user to calculate body fat using the Apex class, BodyFat, and its method, calculateBodyFat(). The product owner wants to ensure this method is accessible by the consumer of the application when developing customizations outside the ISV's package namespace. Which approach should a developer take to ensure calculateBodyFat() is accessible outside the package namespace?",
      options: [
        "A. Declare the class as public and use the global access modifier on the method.",
        "B. Declare the class as global and use the public access modifier on the method.",
        "C. Declare the class and method using the global access modifier.",
        "D. Declare the class and method using the public access modifier.",
      ],
      answer: "C",
      title: "Question 18",
    },
    {
      content:
        "Which two sosl searches will return records matching search criteria contained in any of the searchable text fields on an object? choose 2 answers",
      options: [
        "A. [find 'acme*' in text fields returning account,opportunity]",
        "B. [find 'acme*'in all fields returning account,opportunity]",
        "C. [find 'acme*'returning account,opportunity]",
        "D. [find 'acme*' in any fields returning account,opportunity]",
      ],
      answer: "B",
      title: "Question 19",
    },
    {
      content:
        "In which two org types can a developer create new Apex Classes? Choose 2 answers",
      options: [
        "A. Developer Edition",
        "B. Sandbox",
        "C. Unlimited",
        "D. Enterprise Edition",
      ],
      answer: "A,B",
      title: "Question 20",
    },
    {
      content:
        "A developer needs to confirm that a Contact trigger works correctly without changing the organization's data. What should the developer do to test the Contact trigger?",
      options: [
        "A. Use the Open execute Anonymous feature on the Developer Console to run an 'insert Contact' DML statement",
        "B. Use the Test menu on the Developer Console to run all test classes for the Contact trigger",
        "C. Use Deploy from the VSCode IDE to display an 'insert Contact' Apex class.",
        "D. Use the New button on the Salesforce Contacts Tab to create a new Contact record.",
      ],
      answer: "B",
      title: "Question 21",
    },
    {
      content:
        "A developer is creating a Visualforce page that allows users to create multiple Opportunities. The developer is asked to verify the current user's default Opportunity record type, and set certain default values based on the record type before inserting the record. How can the developer find the current user's default record type?",
      options: [
        "A. Query the Profile where the ID equals userInfo.getProfileID() and then use the profile.Opportunity.getDefaultRecordType() method.",
        "B. Use Opportunity.SObjectType.getDescribe().getRecordTypeInfos() to get a list of record types, and iterate trought them until isdefaultRecordTypeMapping() is true.",
        "C. Use the Schema.userInfo.Opportunity.getDefaultRecordType() method.",
        "D. Create the opportunity and check the opportunity.recordType before inserting, which will have the record ID of the current user's default record type",
      ],
      answer: "B",
      title: "Question 22",
    },
    {
      content:
        "What is a benefit of the Lightning Component framework? Choose 3 answers",
      options: [
        "A. It uses a traditional publish-subscribe model.",
        "B. It uses an MVC architectural design pattern.",
        "C. It uses an event-driven architecture",
        "D. It uses client-side Apex controllers for logic.",
        "E. It uses server-side JavaScript controller for logic.",
      ],
      answer: "A,B,C",
      title: "Question 23",
    },
    {
      content:
        "A primaryid_c custom field exists on the candidate_c custom object. The filed is used to store each candidate's id number and is marked as Unique in the schema definition.As part of a data enrichment process. Universal Containers has a CSV file that contains updated data for all candidates in the system, f he file contains each Candidate's primary id as a data point. Universal Containers wants to upload this information into Salesforce, while ensuring all data rows are correctly mapped to a candidate in the system. Which technique should the developer implement to streamline the data upload?",
      options: [
        "A. A Update the primaryid__c field definition to mark it as an External Id",
        "B. Create a before Insert trigger to correctly map the records.",
        "C. Create a Process Builder on the Candidate_c object to map the records.",
        "D. Upload the CSV into a custom object related to Candidate_c.",
      ],
      answer: "A",
      title: "Question 24",
    },
    {
      content:
        "A developer Is asked to create a Visualforce page that lists the contacts owned by the current user. This component will be embedded In a Lightning page. Without writing unnecessary code, which controller should be used for this purpose?",
      options: [
        "A. Standard list controller",
        "B. Lightning controller",
        "C. Custom controller",
        "D. Standard controller",
      ],
      answer: "D",
      title: "Question 25",
    },
    {
      content:
        "A developer is creating an enhancement to an application that will allow people to be related to their employer. Which date model should be used to track the data?",
      options: [
        "A. Create a master detail relationship to indicate that a person has an employer",
        "B. Create a junction object to relate many people to many employers trough lookup relationship",
        "C. Create a junction object to relate many people to many employers trough master-detail relationship",
        "D. Create a lookup relationship to indicate that a person has an employer",
      ],
      answer: "D",
      title: "Question 26",
    },
    {
      content:
        "Which Lightning code segment should be written to declare dependencies on a Lightning component, c:accountList, that is used in a Visualforce page?A)B)C)D)",
      options: ["A. Option B", "B. Option C", "C. Option D", "D. Option A"],
      answer: "D",
      title: "Question 27",
    },
    {
      content:
        "A developer has requirement to write Apex code to update a large number of account records on a nightly basis. The system administrator needs to be able to schedule the class to run after business hours on an as-needed basis. Which class definition should be used to successfully implement this requirement?",
      options: [
        "A. Gloabal inherited sharing class processAccount Processor implements Database>Bachable<sObject> Schedulable.",
        "B. Global inherited sharing class ProcessAccountProcess Implements Queueable",
        "C. Global inherited sharing class ProcessAccountProcessor implementsDatabase. Batchable<sObject>",
        "D. Global inherited sharing class ProcessAccount Process implements Queueable",
      ],
      answer: "B",
      title: "Question 28",
    },
    {
      content:
        "A developer is tasked with performing a complex validation using Apex as part of advanced business logic. certain criteria are met for a PurchaseOrder, the developer must throw a custom exception. What is the correct way for the developer to declare a class that can be used as an exception?",
      options: [
        "A. public class PurchaseOrderException implements Exception ()",
        "B. public class PurchaseOrder extends Exception ()",
        "C. public class PurchaseOrder implements Exception ()",
        "D. public class PurchaseOrderException extends Exception ()",
      ],
      answer: "D",
      title: "Question 29",
    },
    {
      content:
        "A developer must provide a custom user interface when users edit a Contact. Users must be able to use the interface in Salesforce Classic and Lightning Experience. What should the developer do to provide the custom user interface?",
      options: [
        "A. Override the Contact's Edit button with a Lightning component in Salesforce Classic and a Lightning component in Lightning experience.",
        "B. Override the Contact's Edit button with a Lightning page Salesforce Classic and a Visualforce page in Lightning Experience.",
        "C. Override the Contact's Edit button with a Visualforce page in Salesforce Classic and a Lightning page in Lightning experience.",
        "D. Override the Contact's Edit button with a Visualforce page in Salesforce Classic and a Lightning component in Lightning Experience.",
      ],
      answer: "D",
      title: "Question 30",
    },
    {
      content:
        "A developer must modify the following code snippet to prevent the number of SOQL queries issued from exceeding the platform governor limit. public class without sharing OpportunityService( public static List<OpportunityLineItem> getOpportunityProducts(Set<Id> opportunityIds){ List<OpportunitylineItem> oppLineItems = new List<OpportunityLineItem>(); for(Id thisOppId : opportunityIds){ oppLineItems.addAll([Select Id FROM OpportunityLineItems WHERE OpportunityId = :thisOppId)]; } return oppLineItems; } } The above method might be called during a trigger execution via a Lightning component. Which technique should be implemented to avoid reaching the governor limit?",
      options: [
        "A. Refactor the code above to perform only one SOQL query, filtering by the Set of opportunityIds.",
        "B. Refector the code above to perform the SOQL query only if the Set of opportunityIds contains less 100 Ids.",
        "C. Use the System.Limits.getlimitQueries() method to ensure the number of queries is less than 100.",
        "D. Use the System.Limits.getQueries() method to ensure the number of queries is less than 100.",
      ],
      answer: "A",
      title: "Question 31",
    },
    {
      content:
        "Which statement about the Lookup Relationship between a Custom Object and a Standard Object is correct?",
      options: [
        "A. The Custom Object will be deleted when the referenced Standard Object is deleted.",
        "B. The Lookup Relationship cannot be marked as required on the page layout for the Custom Object.",
        "C. The Lookup Relationship on the Custom Object can prevent the deletion of the Standard Object.",
        "D. The Custom Object inherits security from the referenced Standard Objects",
      ],
      answer: "A",
      title: "Question 32",
    },
    {
      content:
        "What can be used to override the Account's standard Edit button for Lightning Experience7",
      options: [
        "A. Lightning component",
        "B. Lightning flow",
        "C. Lightning page",
        "D. Lightning action",
      ],
      answer: "A",
      title: "Question 33",
    },
    {
      content:
        "Which two process automations can be used on their own to send Salesforce Outbound Message? Choose 2 answers",
      options: [
        "A. Workflow Rule",
        "B. Process Builder",
        "C. Flow Builder",
        "D. Strategy Builder",
      ],
      answer: "A,C",
      title: "Question 34",
    },
    {
      content:
        "What are three ways for 2 developer to execute tests in an org? Choose 3 answers",
      options: [
        "A. Metadata APT",
        "B. Setup Menu",
        "C. Bulk API",
        "D. SalesforceDX",
        "E. Tooling API",
      ],
      answer: "B,D,E",
      title: "Question 35",
    },
    {
      content:
        "A developer in a Salesforce org with 100 Accounts executes the following code using the Developer console:\nAccount myAccount = new Account(Name = 'MyAccount');\nInsert myAccount;\nFor (Integer x = 0; x < 250; x++){\nAccount newAccount = new Account (Name='MyAccount' + x);\ntry {\nInsert newAccount;\n}\ncatch (Exception ex) {\nSystem.debug (ex) ;\n}\n}\ninsert new Account (Name='myAccount'); \nHow many accounts are in the org after this code is run?",
      options: ["A. 252", "B. 102", "C. 100", "D. 101"],
      answer: "C",
      title: "Question 36",
    },
    {
      content:
        "A developer has a single custom controller class that works with a Visualforce Wizard to support creating and editing multiple subjects. The wizard accepts data from user inputs across multiple Visualforce pages and from a parameter on the initial URL.Which three statements are useful inside the unit test to effectively test the custom controller?Choose 3 answers",
      options: [
        "A. public ExtendedController(ApexPages StandardController cntrl) { }",
        "B. ApexPages.CurrentPage().getParameters().put('input\\', 'TestValue');",
        "C. insert pageRef.",
        "D. Test.setCurrentPage(pageRef);",
        "E. String nextPage - controller.save().getUrl();",
      ],
      answer: "B,D,E",
      title: "Question 37",
    },
    {
      content:
        "What is a correct pattern to follow when programming in Apex on a Multi-tenant platform?",
      options: [
        "A. Queries select the fewest fields and records possible to avoid exceeding governor limits.",
        "B. Apex code is created in a separate environment from schema to reduce deployment errors.",
        "C. DML is performed on one record at a time to avoid possible data concurrency issues.",
        "D. Apex classes use the ''with sharing\" keyword to prevent access from other server tenants.",
      ],
      answer: "A",
      title: "Question 38",
    },
    {
      content:
        "Universal Containers stores Orders and Line Items in Salesforce. For security reason, financial representatives are allowed to see information on the Order such as order amount, but they are not allowed to see the Line items on the Order. Which type of relationship should be used?",
      options: [
        "A. Master Detail",
        "B. Indirect lookup",
        "C. Lookup",
        "D. Direct Lookup",
      ],
      answer: "A",
      title: "Question 39",
    },
    {
      content:
        "Given the following Anonymous Block:\nList<Case> casesToUpdate = new List<Case>();\nfor(Case thisCase: [Select Id, Status From Case Limit 50000]) {\n thisCase.Status = 'Working';\n　casesToUpdate.add(thisCase);\n}\ntry {\n　Database.udpate(casesToUpdate, false);\n}catch(Exception e) {\n　system.debug(e.getMessage());\n}\nWhat should a developer consider for an environment that has over 10,000 Case records?",
      options: [
        "A. The transaction will succeed and changes will be committed.",
        "B. The transaction will fail due to exceeding the governor limit.",
        "C. The try/catch block will handle any DML exceptions thrown.",
        "D. The try/catch block will handle exceptions thrown by governor limits.",
      ],
      answer: "A",
      title: "Question 40",
    },
    {
      content:
        "How should a custom user interface be provided when a user edits an Account in Lightning Experience?",
      options: [
        "A. Override the Account's Edit button with Lightning Flow",
        "B. Override the Account's Edit button with Lightning component.",
        "C. Override the Account's Edit button with Lightning page.",
        "D. Overridethe Account's Edit button with Lightning Action",
      ],
      answer: "B",
      title: "Question 41",
    },
    {
      content:
        "If apex code executes inside the execute() method of an Apex class when implementing the Batchable interface, which statement are true regarding governor limits? Choose 2 answers",
      options: [
        "A. The Apex governor limits cannot be exceeded due to the asynchronous nature of the transaction,",
        "B. The Apex governor limits are relaxed while calling the costructor of the Apex class.",
        "C. The Apex governor limits might be higher due to the asynchronous nature of the transaction.",
        "D. The apex governor limits are reset for each iteration of the execute() mrthod.",
      ],
      answer: "C,D",
      title: "Question 42",
    },
    {
      content:
        "A developer created a visualforce page using a custom controller that calls an apex helper class. A method in the helper class hits a governor limit. What is the result of the transaction?",
      options: [
        "A. All changes in the transaction are rolled back",
        "B. The helper class creates a savepoint and continues",
        "C. All changes made by the custom controller are saved",
        "D. The custom controller calls the helper class method ag",
      ],
      answer: "C",
      title: "Question 43",
    },
    {
      content:
        "What is an important consideration when developing in a multi-tenant environment?",
      options: [
        "A. Org-wide data security determines whether other tenants can see data in multiple orgs on the same instance.",
        "B. Governor limits prevent tenants from impacting performance in multiple orgs on the same instance.",
        "C. Polyglot persistence provides support for a global, multilingual user base in multiple orgs on multiple instances.",
        "D. Unique domain names take the place of namespaces for code developed for multiple orgs on multiple instances.",
      ],
      answer: "B",
      title: "Question 44",
    },
    {
      content:
        "An Apex method, getAccounts, that returns a List of Accounts given a search Term, is available for Lighting Web components to use. What is the correct definition of a Lighting Web component property that uses the getAccounts method?",
      options: [
        "A. @AuraEnabled(getAccounts, '$searchTerm')accountList;",
        "B. @wire(getAccounts, '$searchTerm')accountList;",
        "C. @AuraEnabled(getAccounts, {searchTerm: '$searchTerm'})accountList;",
        "D. @wire(getAccounts, {searchTerm: '$searchTerm'})accountList;",
      ],
      answer: "D",
      title: "Question 45",
    },
    {
      content:
        "A developer needs to create a custom button for the Account object that, when clicked, will perform a series of calculation and redirect the user to a custom visualforce page.Which three attributes need to be defined with values in the &lt;apex:page&gt; tag to accomplish this?Choose 3 answers",
      options: [
        "A. standard Controller",
        "B. readOnly",
        "C. Action",
        "D. extensions",
        "E. renderAs",
      ],
      answer: "A,C,E",
      title: "Question 46",
    },
    {
      content:
        "A business has a proprietary Order Management System (OMS) that creates orders from their website and ... the order. When the order is created in the OMS, an integration also creates an order record in Salesforce ... relates it to the contact as identified by the email on the order. As the order goes through different stages in OMS, the integration also updates it in Salesforce.It is notified that each update from the OMS creates a new order record in Salesforce.Which two actions prevent the duplicate order records from being created in Salesforce?Choose 2 answers",
      options: [
        "A. Use the email on the contact record as an external ID.",
        "B. Write a before trigger on the order object to delete any duplicates.",
        "C. Use the order number from the OMS as an external ID.",
        "D. Ensure that the order number in the OMS is unique.",
      ],
      answer: "B,D",
      title: "Question 47",
    },
    {
      content:
        "Considering the following code snippet: When the code executes a DML exception is thrown. How should the developer modify the code to ensure exceptions are handled gracefully?",
      options: [
        "A. Implement the upsert DML statement.",
        "B. Implement Change Data Capture",
        "C. Remove null items from the list if Accounts.",
        "D. Implement a try/catch block for the DML.",
      ],
      answer: "D",
      title: "Question 48",
    },
    {
      content:
        "Which three data types can a SOQL query return? Choose 3 answers",
      options: ["A. List", "B. Long", "C. Integer", "D. sObject"],
      answer: "A,C,D",
      title: "Question 49",
    },
    {
      content:
        "A developer writes a trigger on the Account object on the before update event that increments a count field. A workflow rule also increments the count field every time that an Account is created or updated. The field update in the workflow rule is configured to not re-evaluate workflow rules. What is the value of the count field if an Account is inserted with an initial value of zero, assuming no other automation logic is implemented on the Account?",
      options: ["A. 1", "B. 4", "C. 2", "D. 3"],
      answer: "C",
      title: "Question 50",
    },
    {
      content:
        "What will be the output in the debug log in the event of a QueryExeption during a call to the @query method in the following Example?",
      options: [
        "A. Querying Accounts. Custom Exception.",
        "B. Querying Accounts. Custom Exception Done.",
        "C. Querying Accounts. Query Exception.",
        "D. Querying Accounts. Query Exception. Done",
      ],
      answer: "D",
      title: "Question 51",
    },
    {
      content:
        "Refer to the following code snippet for an environment that has more than 200 Accounts belonging to the Technology' industry: Which three statements are accurate about debug logs? Choose 3 answers",
      options: [
        "A. Debug logs can be set for specific users, classes, and triggers.",
        "B. Debug log levels are cumulative, where FINE log level includes all events logged at the DEBUG, INFO, WARN, and ERROR levels.",
        "C. System debug logs are retained for 24 hours.",
        "D. The maximum size of a debug log is 5 MB.",
        "E. Only the 20 most recent debug logs for a user are kept.",
      ],
      answer: "A,C,E",
      title: "Question 52",
    },
    {
      content:
        "How should a custom user interface be provided when a user edits an Account in Lightning Experience?",
      options: [
        "A. Override the Account's Edit button with Lightning component.",
        "B. Override the Account's Edit button with Lightning Flow",
        "C. Override the Account's Edit button with Lightning page.",
        "D. Override the Account's Edit button with Lightning Action",
      ],
      answer: "A",
      title: "Question 53",
    },
    {
      content:
        "When using SalesforceDX, what does a developer need to enable to create and manage scratch orgs?",
      options: [
        "A. Production",
        "B. Dev Hub",
        "C. Environment Hub",
        "D. Sandbox",
      ],
      answer: "B",
      title: "Question 54",
    },
    {
      content:
        "What is accurate statement about with sharing keyword? Choose 2 answers",
      options: [
        "A. Either inner or outer classes can be declared as with sharing, but not both",
        "B. Both inner and outer classes can be declared as with sharing",
        "C. Inner classes do not inherit the sharing settings from the container class",
        "D. Inner classes inherit the sharing settings from the container class.",
      ],
      answer: "B,C",
      title: "Question 55",
    },
    {
      content:
        "What is a good practice for a developer to follow when writing a trigger? (Choose 2)",
      options: [
        "A. Using the Map data structure to hold query results by ID.",
        "B. Using @future methods to perform DML operations.",
        "C. Using synchronous callouts to call external systems.",
        "D. Using the Set data structure to ensure distinct records.",
      ],
      answer: "A,D",
      title: "Question 56",
    },
    {
      content:
        "A developer can use the debug log to see which three types of information? Choose 3 answers",
      options: [
        "A. HTTP callout to external systems",
        "B. Resource usage and limits",
        "C. Database changes",
        "D. Actions triggered by time-based workflow",
        "E. User login events",
      ],
      answer: "A,C,D",
      title: "Question 57",
    },
    {
      content:
        "A developer needs to implement a custom SOAP Web Service that is used by an external Web Application.The developer chooses to Include helper methods that are not used by the Web Application In the Implementation of the Web Service Class.Which code segment shows the correct declaration of the class and methods?",
      options: [
        "A. \nwebservice class WebServiceClass {\n　private Boolean helperMethod(){/* implementation ... */}\n　global static String updateRecords() { /* implementation ... */}\n}",
        "B. \nglobal class WebServiceClass {\n　private Boolean helperMethod() { /* implementation ... */}\n　Webservice static String updateRecords() {/* implementation ... */}\n}",
        "C. \nwebservice class WebServiceClass{\n　private Boolean helperMethod() { /* implementation ... */}\n　webservice static String updateRecords() { /* implementation ... */}\n}",
        "D. \nglobal class WebServiceClass {\n　private Boolean helperMethod() { /* implementation ... */}\n　global String updateRecords() { /* implementation ... */}\n}",
      ],
      answer: "B",
      title: "Question 58",
    },
    {
      content:
        "A developer is migrating a Visualforce page into a Lightning web component. The Visualforce page shows information about a single record. The developer decides to use Lightning Data Service to access record data.Which security consideration should the developer be aware of?",
      options: [
        "A. The isAccessible ( ) method must be used for field-level access checks",
        "B. Lightning Data Service handles sharing rules and field-level security.",
        "C. Lightning Data Service ignores field-level security.",
        "D. The with sharing keyword must be used to enforce sharing rules.",
      ],
      answer: "D",
      title: "Question 59",
    },
    {
      content:
        "A developer writes a single trigger on the Account object on the after insert and after update events. A workflow rule modifies a field every time an Account is created or updated. How many times will the trigger fire if a new Account is inserted, assuming no other automation logic is implemented on the Account?",
      options: ["A. 8", "B. 4", "C. 1", "D. 2"],
      answer: "D",
      title: "Question 60",
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
      title: "Question 61",
    },
    {
      content:
        "Assuming that 'name; is a String obtained by an <apex:inputText> tag on a Visualforce page.Which two SOQL queries performed are safe from SOQL injections? Choose 2 answers",
      options: [
        "A. String query = 'SELECT Id FROM Account WHERE Name LIKE \\''%' + name.noQuotes() + '%\\''; List<Account> results = Database.query(query);",
        "B. String query = 'SELECT Id FROM Account WHERE Name LIKE \\''%' +String.escapeSingleQuotes(name) + '%\\'';List<Account> results = Database.query(query);",
        "C. String query = 'SELECT Id FROM Account WHERE Name LIKE \\''%' + name + '%\\''; List<Account> results = Database.query(query);",
        "D. String query = '%' + name + '%';List<Account> results = [SELECT Id FROM Account WHERE Name LIKE :query];",
      ],
      answer: "B,D",
      title: "Question 62",
    },
    {
      content: "What is a benefit of using a trigger framework?",
      options: [
        "A. Increases trigger governor limits",
        "B. Reduces trigger execution time",
        "C. Allows functional code to be tested b",
        "D. Simplifies addition of context-specific logic",
      ],
      answer: "B",
      title: "Question 63",
    },
    {
      content:
        "In Lightning component framework, which resource can be used to fire events? Choose 2 answers.",
      options: [
        "A. Visualforce controller actions",
        "B. Third-party Javascript code",
        "C. Javascript controller actions",
        "D. Third-party web service code",
      ],
      answer: "B,C",
      title: "Question 65",
    },
    {
      content:
        "What are two considerations for custom Apex Exception classes? Choose 2 answers.",
      options: [
        "A. Custom Exceptions cannot be extended by other Exception classes.",
        "B. Constructor for custom Exceptions can only accept string values as arguments.",
        "C. Custom Exception class names must end with the word 'Exception'.",
        "D. Custom Exception classes must extend the base Exception class.",
      ],
      answer: "C,D",
      title: "Question 66",
    },
    {
      content:
        "Which two statements are true about Apex code executed in Anonymous Blocks? Choose 2 answers",
      options: [
        "A. The code runs in system mode having access to all objects and fields.",
        "B. The code runs with the permissions of the user specified in the runAs() statement",
        "C. The code runs with the permissions of the logged user.",
        "D. All DML operations are automatically rolled back",
        "E. Successful DML operations are automatically committed",
      ],
      answer: "C,E",
      title: "Question 67",
    },
    {
      content:
        "What actions types should be configured to display a custom success message?",
      options: [
        "A. Post a feed item.",
        "B. Delete a record.",
        "C. Update a record.",
        "D. Close a case.",
      ],
      answer: "C",
      title: "Question 68",
    },
    {
      content:
        "Cloud Kicks Fitness, an ISV Salesforce partner, is developing a managed package application. One of the application modules allows the user to calculate body fat using the apex class, Bodyfat, and its method, calculateBodyfat(). The product owner wants to ensure this method is accessible by the consumer of the application when developing customizer outside the ISV's package namespace. Which approach should a developer take to ensure calculateBodyFat() is accessible outside the package namespace?",
      options: [
        "A. Declare the class and method using the public access modifier.",
        "B. Declare the class as public and use the public access modifier on the method.",
        "C. Declare the class and method using the global access modifier.",
        "D. Declare the class as public and use the global access modifier on the method.",
      ],
      answer: "C",
      title: "Question 69",
    },
    {
      content:
        "In the following example, which sharing context will myMethod execute when it is invoked?\npublic Class myClass {\n　public void myMethod() { /* implementation */ }\n}\n",
      options: [
        "A. Sharing rules will not be enforced for the running user.",
        "B. Sharing rules will be inherited from the calling context.",
        "C. Sharing rules Ml be enforced for the running user.",
        "D. Sharing rules Ail be enforced by the instantiating class",
      ],
      answer: "B",
      title: "Question 70",
    },
    {
      content:
        "A developer created these three Rollup Summary fields in the custom object, Project_ct,The developer is asked to create a new field that shows the ratio between rejected and approved timesheets for a given project.Which should the developer use to Implement the business requirement in order to minimize maintenance overhead?",
      options: [
        "A. Record-triggered Flow",
        "B. Process Builder",
        "C. Formula field",
        "D. Apex Trigger",
      ],
      answer: "C",
      title: "Question 71",
    },
    {
      content:
        "Universal Containers has a support process that allows users to request support from its engineering team using a custom object, Engineering_Support__c.Users should be able to associate multiple engineering_Support__c records to a single Opportunity record.Additionally, aggregate Information about the Engineering_support__c records should be shown on the Opportunity record.What should a developer Implement to support these requirements?",
      options: [
        "A. Master-detail field from Opportunity to Engineering_Support__c",
        "B. Master-detail field from Engineering_Support__c to Opportunity.",
        "C. Lookup field from Engineering_support__c to Opportunity",
        "D. Lookup field from Opportunity to Engineering_Support__c",
      ],
      answer: "B",
      title: "Question 72",
    },
    {
      content:
        "A developer has the following code:\ntry {\n　List nameList;\n　Account a;\n　String s = a.Name;\n　nameList.add(s);\n} catch (ListException le ) {\n　System.debug(' List Exception ');\n} catch (NullPointerException npe) {\n　System.debug(' NullPointer Exception ');\n} catch (Exception e) {\n　System.debug(' Generic Exception ');\n}\nWhat message will be logged?",
      options: [
        "A. List Exception",
        "B. NullPointer Exception",
        "C. No message is logged",
        "D. Generic Exception",
      ],
      answer: "B",
      title: "Question 73",
    },
    {
      content: "Which scenario is invalid for execution by unit tests?",
      options: [
        "A. Loading the standard Pricebook ID using a system method",
        "B. Loading test data in place of user input for Flows.",
        "C. Executing methods as different users.",
        "D. Executing methods for negative test scenarios",
      ],
      answer: "B",
      title: "Question 74",
    },
    {
      content:
        "Universal Containers wants Opportunities to be locked from editing when reaching the Closed/Won stage.Which two strategies should a developer use to accomplish this? (Choose two.)",
      options: [
        "A. Use a validation rule.",
        "B. Use the Process Automation Settings.",
        "C. Use a Trigger.",
        "D. Use a Visual Workflow.",
      ],
      answer: "A,C",
      title: "Question 75",
    },
    {
      content:
        "In order to override a standard action with a visualforce page, which attribute must be defined in the<apex:page> tag?",
      options: [
        "A. Override",
        "B. Controller",
        "C. Pagereference",
        "D. Standardcontroller",
      ],
      answer: "D",
      title: "Question 76",
    },
    {
      content:
        "A developer needs to avoid potential system problems that can arise in a multi-tenant architecture. Which requirement helps prevent poorty written applications from being deployed to a production environment?",
      options: [
        "A. SOQL queries must reference sObActs with their appropriate namespace.",
        "B. All Apex code must be annotated with the with sharing keyword.",
        "C. Unit tests must cover at least 75% of the application's Apex code",
        "D. All validation rules must be active before they can be deployed.",
      ],
      answer: "C",
      title: "Question 77",
    },
    {
      content:
        "A developer migrated functionality from JavaScript Remoting to a Lightning web component and ... existing getOpportunities method to provide data.",
      options: [
        "A. The method must be decorated with @AuraEnabied.",
        "B. The method must be decorated with (cacheable=true).",
        "C. The method must return a JSON Object.",
        "D. The method must return a String of a serialized JSON Array.",
      ],
      answer: "B",
      title: "Question 78",
    },
    {
      content:
        "Which type of controller should a developer use to include a list of related records for a Custom Object record on a Visualforce page without needing additional test coverage?",
      options: [
        "A. List Controller",
        "B. Standard Controller",
        "C. Controller Extension",
        "D. Custom Controller",
      ],
      answer: "B",
      title: "Question 79",
    },
    {
      content:
        "A developer must implement a CheckPaymentProcessor class that provides check processing payment capabilities that adhere to what defined for payments in the PaymentProcessor interface.\npublic interface PaymentProcessor { void pay(Decimal amount); } \nWhich is the correct implementation to use the PaymentProcessor interface class?",
      options: [
        "A. Public class CheckPaymentProcessor extends PaymentProcessor {public void pay(Decimal amount) {}}",
        "B. Public class CheckPaymentProcessor implements PaymentProcessor {public void pay(Decimal amount) {}}",
        "C. Public class CheckPaymentProcessor extends PaymentProcessor {public void pay(Decimal amount);}",
        "D. Public class CheckPaymentProcessor implements PaymentProcessor {public void pay(Decimal amount);}",
      ],
      answer: "B",
      title: "Question 80",
    },
    {
      content:
        "A newly hired developer discovers that there are multiple triggers on the case object. What should the developer consider when working with triggers?",
      options: [
        "A. Developers must dictate the order of trigger execution.",
        "B. Trigger execution order is based on creation date and time.",
        "C. Trigger execution order is not guaranteed for the same sObject.",
        "D. Unit tests must specify the trigger being tested.",
      ],
      answer: "C",
      title: "Question 81",
    },
    {
      content:
        "Universal Container is building a recruiting app with an Applicant object that stores information about an individual person that represents a job. Each application may apply for more than one job. What should a developer implement to represent that an applicant has applied for a job?",
      options: [
        "A. Master-detail field from Applicant to Job",
        "B. Formula field on Applicant that references Job",
        "C. Lookup field from Applicant to Job",
        "D. Junction object between Applicant and Job",
      ],
      answer: "A",
      title: "Question 82",
    },
    {
      content:
        "A developer needs to know if all tests currently pass in a Salesforce environment. Which feature can the developer use? (Choose 2)",
      options: [
        "A. Workbench Metadata Retrieval",
        "B. Salesforce UI Apex Test Execution",
        "C. Developer Console",
        "D. ANT Migration Tool",
      ],
      answer: "B,C",
      title: "Question 83",
    },
    {
      content:
        "A developer has a Apex controller for a Visualforce page that takes an ID as a URL parameter. How should the developer prevent a cross site scripting vulnerability?",
      options: [
        "A. ApexPages.currentPage() .getParameters() .get('url_param')",
        "B. String.escapeSingleQuotes(ApexPages.currentPage() .getParameters(). get('url_param'))",
        "C. String.ValueOf(ApexPages.currentPage() .getParameters() .get('url_param'))",
        "D. ApexPages.currentPage() .getParameters() .get('url_param') .escapeHtml4()",
      ],
      answer: "D",
      title: "Question 84",
    },
    {
      content:
        "A sales manager wants to make sure that whenever an opportunity stage is changed to 'Closed Won', a new case will be of created for the support team to collect necessary information from the customer. How should a developer accomplish this?",
      options: [
        "A. Set up a validation rule on the Opportunity Stage.",
        "B. Create a Process Builder to create the new case.",
        "C. Create a workflow rule to create the new case.",
        "D. Create a lookup field to the Case object on the opportunity object.",
      ],
      answer: "B",
      title: "Question 85",
    },
    {
      content:
        "A Salesforce Administrator is creating a record-triggered flow. When certain criteria are met, the flow must call an Apex method to execute complex validation involving several types of objects. When creating the Apex method, which annotation should a developer use to ensure the method Can be used within the flow?",
      options: [
        "A. @RemoteAction",
        "B. @AuraEnaled",
        "C. @InvocableMethod",
        "D. @future",
      ],
      answer: "C",
      title: "Question 86",
    },
    {
      content: "When are code coverage calculations updated?",
      options: [
        "A. When unit tests are run on an organization.",
        "B. When changes are made to an organization's configuration.",
        "C. When Apex code is saved.",
        "D. When a deployment is validated.",
      ],
      answer: "A",
      title: "Question 87",
    },
    {
      content:
        "Universal Containers has created a unique process for tracking container repairs. A custom field, status__c, has been created within the container__c custom object. A developer is tasked with sending notifications to multiple external systems every time the value of the status__picklist changes.Which two tools should the developer use to meet the business requirement and ensure low maintenance of the solution?Choose 2 answers",
      options: [
        "A. Platform event",
        "B. Apex trigger",
        "C. Apex callouts",
        "D. Record-Triggered flow",
      ],
      answer: "A,C",
      title: "Question 88",
    },
    {
      content:
        'A developer uses a loop to check each Contact in a list. When a Contact with the Title of"Boss" is found, the Apex method should jump to the first line of code outside of the for loop.Which Apex solution will let the developer implement this requirement?',
      options: ["A. break;", "B. Continue", "C. Exit", "D. Next"],
      answer: "A",
      title: "Question 89",
    },
    {
      content:
        "What is the minimum log level needed to see user-generated debug statements?",
      options: ["A. DEBUG", "B. INFO", "C. FINE", "D. WARN"],
      answer: "A",
      title: "Question 90",
    },
    {
      content:
        "A developer declared a class as follow.public class wysiwyg { // Properties and methods including DML }Which invocation of a class method will obey the organization-wide defaults and sharing settings for the running user in the Salesforce Organization?",
      options: [
        "A. A developer using the Developer Console that invokes a method in this class from the execute anonymous window",
        "B. A user on an external system that has an API call into Salesforce that invokes a method in this class",
        "C. An Apex Trigger that invokes a helper method in this class",
        "D. A Visualforce page with an Apex controller that invokes a method in this class",
      ],
      answer: "A",
      title: "Question 91",
    },
    {
      content: "Which scenario is valid for execution by unit tests?",
      options: [
        "A. Generate a Visualforce PDF with geccontentAsPDF ().",
        "B. Load data from a remote site with a callout.5. Set the created date of a record using a system method.Cc: Execute anonymous Apex as a different user.",
      ],
      answer: "A",
      title: "Question 92",
    },
    {
      content:
        "Which three web technologies can be integrated into a Visualforce page? (Choose three.)",
      options: ["A. JavaScript", "B. Java", "C. CSS", "D. HTML", "E. PHP"],
      answer: "B,C,D",
      title: "Question 93",
    },
    {
      content:
        "Which three steps allow a custom SVG to be included in a Lightning web component? Choose 3 answers",
      options: [
        "A. Import the SVG as a content asset file.",
        "B. Upload the SVG as a static resource. (Missed)",
        "C. Reference the import in the HTML template.",
        "D. Reference the getter in the HTML template. (Missed)",
        "E. Import the static resource and provide a getter for it in JavaScript. (Missed)",
      ],
      answer: "B,D,E",
      title: "Question 94",
    },
    {
      content:
        "Refer to the following code that runs in an Execute Anonymous block:\nfor (List<Lead> theseLeads: [SELECT LastName, Company, Email FROM Lead LIMIT 20000]){\n　thisLead.Email = assignGenericEmail (thisLead. LastName, thisLead. Company);\n　for (Lead thisLead: theseLeads) {\n　　if(thisLead. Email == null) Database. Update (theseLeads, false);\n　}\n}\nIn an environment where the full result set is returned, what is a possible outcome of this code?",
      options: [
        "A. The transaction will succeed and the first ten thousand records will be committed to the database.",
        "B. The total number of DML statements issued will be exceeded.",
        "C. The transaction will succeed and the full result set changes will be committed to the database.",
        "D. The total number of records processed as a result of DML statements will be exceeded.",
      ],
      answer: "D",
      title: "Question 95",
    },
    {
      content:
        "A developer receives an error when trying to call a global server-side method using the remoteAction decorator.How can the developer resolve the error?",
      options: [
        "A. Add static to the server-side method signature.",
        "B. Decorate the server-side method with (static=false).",
        "C. Change the function signature to be private static.",
        "D. A Decorate the server-side method with (static=true).",
      ],
      answer: "A",
      title: "Question 96",
    },
    {
      content:
        "A developer must create a CreditcardPayment class that provides an implementation of an existing Payment class. Public virtual class Payment { public virtual void makePayment(Decimal amount) { /*implementation*/} } Which is the correct implementation?",
      options: [
        "A. Public class CreditCardPayment implements Payment {public virtual void makePayment(Decimalamount) { /*implementation*/ }}",
        "B. Public class CreditCardPayment implements Payment {publicoverride void makePayment(Decimal amount) { /*Implementation*/ }}",
        "C. Public class CreditCardPayment extends Payment {public virtual void makePayment(Decimal amount) { /*implementation*/ }}",
        "D. Public class CreditcardPayment extends Payment {public override void makePayment(Decimal amount) { /*implementation*/ }}",
      ],
      answer: "D",
      title: "Question 97",
    },
    {
      content:
        "A developer observes that an Apex test method fails in the Sandbox. To identify the issue, the developer copies the code inside the test method and executes it via the Execute Anonymous tool in the Developer Console. The code then executes with no exceptions or errors. Why did the test method fail in the sandbox and pass in the Developer Console?",
      options: [
        "A. The test method does not use System.runAs to execute as a specific user.",
        "B. The test method is calling an @future method.",
        "C. The test method has a syntax error in the code.",
        "D. The test method relies on existing data in the sandbox.",
      ],
      answer: "D",
      title: "Question 98",
    },
    {
      content:
        "Given:Map<ID, Account> accountMap = new Map>ID, Account> ([SELECT Id, Name FROM Account]); What are three valid Apex loop structures for iterating through items in the collection? (Choose three.)",
      options: [
        "A. for (Account accountRecord : accountMap.keySet()) {...}",
        "B. for (Integer i=0; I < accountMap.size(); i++) {...}",
        "C. for (ID accountID : accountMap.keySet()) {...}",
        "D. for (ID accountID : accountMap) {...}",
        "E. for (Account accountRecord : accountMap.values()) {...}",
      ],
      answer: "B,C,E",
      title: "Question 99",
    },
    {
      content:
        "Which option would a developer use to display the Accounts created in the current week and the number of related Contacts using a debug statement in Apex?",
      options: [
        "A. For(Account acc: [SELECT Id, Name, Account.Contacts FROM Account WHERE CreatedDate = THIS_WEEK]){ List cons = acc.Account.Contacts; System.debug(acc.Name + ' has ' + cons.size() +'Contacts' }",
        "B. For(Account acc: [SELECT Id, Name,(SELECT Id, Name FROM Contacts) FROM Account WHERE CreatedDate = THIS_WEEK]) { List cons = acc.Contacts; System.debug(acc.Name + ' has ' + cons.size() + 'Contacts'; }",
        "C. For(Account acc: [SELECT Id, Name, (SELECT Id, Name FROM Contacts) FROM Account WHERE CreatedDate = CURRENT_WEEK]){ List cons = acc.Contacts; System.debug(acc.Name + ' has ' + cons.size() + 'Contacts'); }",
        "D. For(Account acc:[SELECT Id, Name, Account.Contacts FROM Account WHERE CreatedDate = CURRENT_WEEK]) { List cons = acc.Account.Contacts; System.debug(acc.Name + ' has ' + cons.size() + 'Contacts'); }",
      ],
      answer: "B",
      title: "Question 100",
    },
    {
      content:
        'A lead developer creates an Apex interface called "Laptop". Consider the following code snippet:How can a developer use the Laptop Interface within the Silvertaptop class?',
      options: [
        "A. public calss SilverLaptop extends Laptop",
        "B. public class Silverlaptop implements Laptop",
        "C. @Extends(class=Laptop'')public class SilverLaptop",
        "D. @Interface (class=''Laptop'')public class SilverLaptop",
      ],
      answer: "A",
      title: "Question 101",
    },
    {
      content:
        "A developer wants to mark each Account in a List<Account> as either or Inactive based on the LastModified field value being more than 90 days.Which Apex technique should the developer use?",
      options: [
        "A. An If/else statement, with a for loop inside",
        "B. A for loop, with a switch statement inside",
        "C. A Switch statement, with a for loop inside",
        "D. A for loop, with an if/else statement inside",
      ],
      answer: "D",
      title: "Question 102",
    },
  ],
});
