window.testContent = window.testContent || [];
var testId = "Salesforce.Platform-Developer-I";
var testName = "Salesforce.Platform-Developer-I";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "Salesforce.Platform-Developer-I.v2021-02-07.q59",
  content: [
    {
      content:
        "Assuming that 'name; is a String obtained by an <apex:inputText> tag on a Visualforce page. Which two SOQL queries performed are safe from SOQL injections? Choose 2 answers",
      options: [
        "A. String query = 'SELECT Id FROM Account WHERE Name LIKE \\''%' + name.noQuotes() + '%\\''; List<Account> results = Database.query(query);",
        "B. String query = '%' + name + '%';List<Account> results = [SELECT Id FROM Account WHERE Name LIKE :query];",
        "C. String query = 'SELECT Id FROM Account WHERE Name LIKE \\''%' + String.escapeSingleQuotes(name) + '%\\''; List<Account> results = Database.query(query);",
        "D. String query = 'SELECT Id FROM Account WHERE Name LIKE \\''%' + name + '%\\''; List<Account> results = Database.query(query);",
      ],
      answer: "B,C",
      title: "Question 1",
    },
    {
      content:
        "A developer must write an Apex method that will be called from a Lightning component. The method may delete an Account stored in the accountRec variable.Which method should a developer use to ensure only users that should be able to delete Accounts can successfully perform deletions?",
      options: [
        "A. accountRec.isDeletable()",
        "B. accountRec.sObjectType.isDeletable()",
        "C. Account.isDeletable()",
        "D. Schema.sObjectType.Account.isDeletable()",
      ],
      answer: "D",
      title: "Question 2",
    },
    {
      content:
        "Application Events follow the traditional publish-subscribe model. Which method is used to fire an event?",
      options: [
        "A. FireEvent()",
        "B. Fire()",
        "C. RegisterEvent()",
        "D. Emit()",
      ],
      answer: "B",
      title: "Question 3",
    },
    {
      content:
        "What are the methods used to show input in classic and lightning?",
      options: [
        "A. Use visualforce page in classic and use visualforce page in lightning",
        "B. Use visualforce page in classic and use lightning page in lightning",
        "C. Use visualforce page in classic and lightning component in lightning",
        "D. Use lightning page in classic and lightning component in lightning",
      ],
      answer: "C",
      title: "Question 4",
    },
    {
      content:
        "What should a developer do to check the code coverage of a class after running all tests?",
      options: [
        "A. Select and run the class on the Apex Test Execution page",
        "B. View the Code Coverage column in the view on the Apex Classes page.",
        "C. view the overall Code Coverage panel of the tab in the Developer Console.",
        "D. View the Class test Coverage tab on the Apex Class record.",
      ],
      answer: "D",
      title: "Question 5",
    },
    {
      content:
        "A developer has a single custom controller class that works with a Visualforce Wizard to support creating and editing multiple subjects. The wizard accepts data from user inputs across multiple Visualforce pages and from a parameter on the initial URL.Which three statements are useful inside the unit test to effectively test the custom controller? Choose 3 answers",
      options: [
        "A. public ExtendedController(ApexPages StandardController cntrl) { }",
        "B. Test.setCurrentPage(pageRef);",
        "C. ApexPages.CurrentPage().getParameters().put('input\\', 'TestValue');",
        "D. String nextPage - controller.save().getUrl();",
        "E. insert pageRef.",
      ],
      answer: "B,C,D",
      title: "Question 6",
    },
    {
      content:
        "A developer of Universal Containers is tasked with implementing a new Salesforce application that must be able to by their company's Salesforce administrator.Which three should be considered for building out the business logic layer of the application? Choose 3 answers",
      options: [
        "A. Scheduled Jobs",
        "B. Invocable Actions",
        "C. Workflows",
        "D. Process Builder",
        "E. validation Rules",
      ],
      answer: "C,D,E",
      title: "Question 7",
    },
    {
      content:
        "A developer needs to save a List of existing Account records named myAccounts to the database, but the records do not contain Salesforce Id values. Only the value of a custom text field configured as an External ID with an API name of Foreign_Key__c is known.Which two statements enable the developer to save the records to the database without an Id? (Choose two.)",
      options: [
        "A. Upsert myAccounts(Foreign_Key__c);",
        "B. Database.upsert(myAccounts).Foreign_Key__c;",
        "C. Upsert myAccounts Foreign_Key__c;",
        "D. Database.upsert (myAccounts, Foreign_Key__c);",
      ],
      answer: "C,D",
      title: "Question 8",
    },
    {
      content:
        "Which three web technologies can be integrated into a Visualforce page? (Choose three.)",
      options: ["A. PHP", "B. JavaScript", "C. CSS", "D. Java", "E. HTML"],
      answer: "B,C,E",
      title: "Question 9",
    },
    {
      content:
        "A developer is tasked to perform a security review of the ContactSearch Apex class that exists in the system.Whithin the class, the developer identifies the following method as a security threat: \nList<Contact> performSearch(String lastName){\n　 return Database.query('Select Id, FirstName, LastName FROM Contact WHERE LastName Like %'+lastName+'%);\n}\n What are two ways the developer can update the method to prevent a SOQL injection attack?\nChoose 2 answers",
      options: [
        "A. Use a regular expression on the parameter to remove special characters.",
        "B. Use variable binding and replace the dynamic query with a static SOQL.",
        "C. Use the @Readonly annotation and the with sharing keyword on the class.",
        "D. Use the escapeSingleQuote method to sanitize the parameter before its use.",
      ],
      answer: "B,D",
      title: "Question 10",
    },
    {
      content:
        "A recursive transaction is limited by a DML statement creating records for these two objects:\n　1. Accounts\n　2. Contacts\nThe Account trigger hits a stack depth of 16.\nWhich statement is true regarding the outcome of the transaction?",
      options: [
        "A. The transaction succeeds as long as the Contact trigger stack depth is less than 16.",
        "B. The transaction succeeds and all the changes are committed to the database.",
        "C. The transaction fails only if the Contact trigger stack depth is greater or equal to 16.",
        "D. The transaction fails and all the changes are rolled back.",
      ],
      answer: "B",
      title: "Question 11",
    },
    {
      content:
        "Which three per-transaction limits have higher governor limits in asynchronous Apex transactions?",
      options: [
        "A. Total SOQL queries",
        "B. Records returned by SOQL",
        "C. Maximum CPU time",
        "D. Maximum execution time",
        "E. Maximum heap size",
      ],
      answer: "A,B,C",
      title: "Question 12",
    },
    {
      content:
        "Universal Containers stores the availability date on each Line Item of an Order and Orders are only shipped when all of the Line Items are available. Which method should be used to calculate the estimated ship date for an Order?",
      options: [
        "A. Use a Max Roll-Up Summary field on the Latest availability date fields.",
        "B. Use a CEILING formula on each of the Latest availability date fields.",
        "C. Use a DAYS formula on each of the availability date fields and a COUNT Roll-Up Summary field on the Order.",
        "D. Use a LATEST formula on each of the latest availability date fields.",
      ],
      answer: "A",
      title: "Question 13",
    },
    {
      content:
        "A developer wants to mark each Account in a List<Account> as either or Inactive based on the LastModified field value being more than 90 days.Which Apex technique should the developer use?",
      options: [
        "A. A for loop, with a switch statement inside",
        "B. An If/else statement, with a for loop inside",
        "C. A Switch statement, with a for loop inside",
        "D. A for loop, with an if/else statement inside",
      ],
      answer: "D",
      title: "Question 14",
    },
    {
      content:
        "A developer must build application that tracks which Accounts have purchase specific pieces of equal products. Each Account could purchase many pieces of equipment.How should the developer track that an Account has purchased a piece of equipment.",
      options: [
        "A. Use a Lookup on Account to product.",
        "B. Use a Custom object.",
        "C. Use the Asset object.",
        "D. Use a Master-Detail on Product to Account",
      ],
      answer: "D",
      title: "Question 15",
    },
    {
      content:
        "How should a custom user interface be provided when a user edits an Account in Lightning Experience?",
      options: [
        "A. Override the Account's Edit button with Lightning Action",
        "B. Override the Account's Edit button with Lightning Flow",
        "C. Override the Account's Edit button with Lightning component.",
        "D. Override the Account's Edit button with Lightning page.",
      ],
      answer: "C",
      title: "Question 16",
    },
    {
      content:
        "A developer must create a CreditcardPayment class that provides an implementation of an existing Payment class. Public virtual class Payment { public virtual void makePayment(Decimal amount) { /*implementation*/ } } Which is the correct implementation?",
      options: [
        "A. Public class CreditCardPayment implements Payment {public override void makePayment(Decimal amount) { /*Implementation*/ }}",
        "B. Public class CreditCardPayment extends Payment {public virtual void makePayment(Decimal amount) { /*implementation*/ }}",
        "C. Public class CreditcardPayment extends Payment {public override void makePayment(Decimal amount) { /*implementation*/ }}",
        "D. Public class CreditCardPayment implements Payment {public virtual void makePayment(Decimal amount) { /*implementation*/ }}",
      ],
      answer: "C",
      title: "Question 17",
    },
    {
      content:
        "Cloud Kicks Fitness, an ISV Salesforce partner, is developing a managed package application. One of the application modules allows the user to calculate body fat using the Apex class, BodyFat, and its method, calculateBodyFat(). The product owner wants to ensure this method is accessible by the consumer of the application when developing customizations outside the ISV's package namespace.Which approach should a developer take to ensure calculateBodyFat() is accessible outside the package namespace?",
      options: [
        "A. Declare the class and method using the global access modifier.",
        "B. Declare the class and method using the public access modifier.",
        "C. Declare the class as public and use the global access modifier on the method.",
        "D. Declare the class as global and use the public access modifier on the method.",
      ],
      answer: "A",
      title: "Question 18",
    },
    {
      content:
        "How does the Lightning Component framework help developers implement solutions faster?",
      options: [
        "A. By providing code review standards and processes",
        "B. By providing an Agile process with default steps",
        "C. By providing change history and version control",
        "D. By providing device-awareness for mobile and desktops",
      ],
      answer: "D",
      title: "Question 19",
    },
    {
      content:
        "What are three ways for a developer to execute tests in an org? Choose 3.",
      options: [
        "A. Salesforce DX",
        "B. Tooling API",
        "C. Bulk API",
        "D. Setup Menu",
        "E. Metadata API",
      ],
      answer: "A,B,D",
      title: "Question 20",
    },
    {
      content:
        "A developer writes a trigger on the Account object on the before update event that increments a count field. A workflow rule also increments the count field every time that an Account is created or update. The field update in the workflow rule is configured to not re-evaluate workflow rules. What is the value of the count field if an Account is inserted with an initial value of zero, assuming no other automation logic is implemented on the Account?",
      options: ["A. 1", "B. 4", "C. 3", "D. 2"],
      answer: "D",
      title: "Question 21",
    },
    {
      content:
        "Which aspect of Apex programming is limited due to multitenancy?",
      options: [
        "A. The number of records processed in a loop",
        "B. The number of methods in an Apex Class",
        "C. The number of records returned from database queries",
        "D. The number of active Apex classes",
      ],
      answer: "C",
      title: "Question 22",
    },
    {
      content:
        "What is the maximum number of SOQL queries used by the following code? List<Account> aList = [SELECT Id FROM Account LIMIT 5]; for (Account a : aList){ List<Contact> cList = [SELECT Id FROM Contact WHERE AccountId = :a.Id); }",
      options: ["A. 1", "B. 6", "C. 2", "D. 5"],
      answer: "B",
      title: "Question 23",
    },
    {
      content:
        "A developer is asked to create a Visualforce page that displays some Account fields as well as fields configured on the page layout for related Contacts.How should the developer implement this request?",
      options: [
        "A. Use the <apex:relatedList> tag.",
        "B. Create a controller extension.",
        "C. Add a method to the standard controller.",
        "D. Use the <apex:include> tag.",
      ],
      answer: "A",
      title: "Question 24",
    },
    {
      content:
        "While writing a test class that covers an OpportunityLineItem trigger, a Developer is unable to create a standard PriceBook since one already exists in the org.How should the Developer overcome this problem?",
      options: [
        "A. Use Test.getStandardPricebookId() to get the standard PriceBook ID.",
        "B. Use @TestVisible to allow the test method to see the standard PriceBook.",
        "C. Use @IsTest(SeeAllData=true) and delete the existing standard PriceBook.",
        "D. Use Test.loadData() and a Static Resource to load a standard Pricebook.",
      ],
      answer: "A",
      title: "Question 25",
    },
    {
      content:
        "The values 'High', 'Medium', and 'Low' are Identified as common values for multiple picklist across different object. What is an approach a developer can take to streamline maintenance of the picklist and their values, while also restricting the values to the ones mentioned above?",
      options: [
        "A. Create the Picklist on each object and use a Global Picklist Value Set containing the Values.",
        'B. Create the Picklist on each object as a required field and select "Display values alphabeticaly, not in the order entered".',
        "C. Create the Picklist on each and add a validation rule to ensure data integrity.",
        'D. Create the Picklist on each object and select "Restrict picklist to the values defined in the value set".',
      ],
      answer: "A",
      title: "Question 26",
    },
    {
      content:
        "What are three capabilities of the <ltng : require> tag when loading JavaScript resources in Aura components? Choose 3 answers",
      options: [
        "A. One-time loading for duplicate scripts",
        "B. Specifying loading order",
        "C. Loading files from Documents",
        "D. Loading externally hosted scripts",
        "E. Loading scripts In parallel",
      ],
      answer: "A,B,E",
      title: "Question 27",
    },
    {
      content:
        "A team of many developers work in their own individual orgs that have the same configuration at the production org. Which type of org is best suited for this scenario?",
      options: [
        "A. Full Sandbox",
        "B. Developer Sandbox",
        "C. Developer Edition",
        "D. Partner Developer Edition",
      ],
      answer: "B",
      title: "Question 28",
    },
    {
      content:
        "Universal Containers wants to back up all of the data and attachments in its Salesforce org once month. Which approach should a developer use to meet this requirement?",
      options: [
        "A. Use the Data Loader command line.",
        "B. Schedule a report.",
        "C. Create a Schedulable Apex class.",
        "D. Define a Data Export scheduled job.",
      ],
      answer: "D",
      title: "Question 29",
    },
    {
      content:
        "How many accounts will be inserted by the following block ofcode? for(Integer i = 0 ; i < 500; i++) { Account a = new Account(Name='New Account ' + i); insert a; }",
      options: ["A. 500", "B. 100", "C. 150", "D. 0"],
      answer: "D",
      title: "Question 30",
    },
    {
      content:
        "A development team wants to use a deployment script lo automatically deploy lo a sandbox during their development cycles.Which two tools can they use to run a script that deploys to a sandbox? Choose 2 answers",
      options: [
        "A. Developer Console",
        "B. SFDX CLI",
        "C. Ant Migration Tool",
        "D. Change Sets",
      ],
      answer: "B,C",
      title: "Question 31",
    },
    {
      content:
        "A developer has a Visualforce page and custom controller to save Account records. The developer wants to display any validation rule violation to the user. How can the developer make sure that validation rule violations are displayed?",
      options: [
        "A. Use a try/catch with a custom exception class.",
        "B. Perform the DML using the Database.upsert() method.",
        "C. Add cuatom controller attributes to display the message.",
        "D. Include <apex:message> on the Visualforce page.",
      ],
      answer: "D",
      title: "Question 32",
    },
    {
      content:
        "A Next Best Action strategy uses an Enchance Element that invokes an Apex method to determine a discount level for a Contact, based on a number of factors. What is the correct definition of the Apex method?",
      options: [
        "A. @InvocableMethodglobal static List<List<Recommendation>> getLevel(List<ContactWrapper> input){ /*implementation*/ }",
        "B. @InvocableMethodglobal List<List<Recommendation>> getLevel(List<ContactWrapper> input){ /*implementation*/ }",
        "C. @InvocableMethodglobal static ListRecommendation getLevel(List<ContactWrapper> input){ /*implementation*/ }",
        "D. @InvocableMethodglobal Recommendation getLevel (ContactWrapper input){ /*implementation*/ }",
      ],
      answer: "A",
      title: "Question 33",
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
      title: "Question 34",
    },
    {
      content:
        "Given the following Anonymous Block:\nList<Case> casesToUpdate = new List<Case>();\nfor(Case thisCase: [Select Id, Status From Case Limit 50000]) {\n thisCase.Status = 'Working';\n　casesToUpdate.add(thisCase);\n}\ntry {\n　Database.udpate(casesToUpdate, false);\n}catch(Exception e) {\n　system.debug(e.getMessage());\n}\nWhat should a developer consider for an environment that has over 10,000 Case records?",
      options: [
        "A. The transaction will fail due to exceeding the governor limit.",
        "B. The try/catch block will handle any DML exceptions thrown.",
        "C. The try/catch block will handle exceptions thrown by governor limits.",
        "D. The transaction will succeed and changes will be committed.",
      ],
      answer: "A",
      title: "Question 35",
    },
    {
      content:
        "Universal Containers hires a developer to build a custom search page to help user - find the Accounts they want. Users will be able to search on Name, Description, and a custom comments field. Which consideration should the developer be aware of when deciding between SOQL and SOSL ?\nChoose 2 answers",
      options: [
        "A. SOQL is able to return more records.",
        "B. SOQL is faster for text searches.",
        "C. SOSL is able to return more records.",
        "D. SOSL is faster for text searches.",
      ],
      answer: "A,D",
      title: "Question 36",
    },
    {
      content:
        "What are two ways a developer can get the status of an enquered job for a class that queueable interface? Choose 2 answers",
      options: [
        "A. View the apex flex Queue",
        "B. View the apex status Page",
        "C. Query the AsyncApexJob object",
        "D. View the apex Jobs page",
      ],
      answer: "C,D",
      title: "Question 37",
    },
    {
      content:
        "A developer has a VF page and custom controller to save Account records. The developer wants to display any validation rule violation to the user. How can the developer make sure that validation rule violations are displayed?",
      options: [
        "A. Add custom controller attributes to display the message.",
        "B. Include <apex:messages> on the Visualforce page.",
        "C. Perform the DML using the Database.upsert() method",
        "D. Use a try/catch with a custom exception class.",
      ],
      answer: "B",
      title: "Question 39",
    },
    {
      content:
        "How should a developer write unit tests for a private method in an Apex class?",
      options: [
        "A. Use the SeeAllData annotation.",
        "B. Add a test method in the Apex class.",
        "C. Mark the Apex class as global.",
        "D. Use the TestVisible annotation.",
      ],
      answer: "D",
      title: "Question 40",
    },
    {
      content:
        "A team of developers is working on a source-driven project that allows them to work independently, with many different org configurations. Which type of Salesforce orgs should they use for their development?",
      options: [
        "A. Scratch orgs",
        "B. Developer sandboxes",
        "C. Full Copy sandboxes",
        "D. Developer orgs",
      ],
      answer: "A",
      title: "Question 41",
    },
    {
      content:
        "A developer has to identify a method in en Apex class that performs resource intensive actions in memory by iterating over the result set of a SOQL statement on the account. The method also performs a SOQL statement to save the changes to the database.Which two techniques should the developer implement as a best practice to ensure transaction control and avoid exceeding governor limits? Choose 2 answers",
      options: [
        "A. Use the @ReadOnly annotation to bypass the number of rows returned by a SOQL.",
        "B. Use Partial DHL statements to ensure only valid data is committed.",
        "C. Use the Database.Savepoint method to enforce database Integrity.",
        "D. Use the System.Limit class to monitor the current CPU governor limit consumption.",
      ],
      answer: "C,D",
      title: "Question 42",
    },
    {
      content: "What can be developed using the Lightning Component framework?",
      options: [
        "A. Salesforce integrations",
        "B. Hosted web applications",
        "C. Single-page web apps",
        "D. Dynamic web sites",
      ],
      answer: "C",
      title: "Question 43",
    },
    {
      content:
        "Universal Container use a simple order Management app. On the Order Lines, the order line total is calculated by multiplying the item price with the quantity ordered. There is a Master-Detail relationship between the Order and the Order Lines object.What is the practice to get the sum of all order line totals on the order header?",
      options: [
        "A. Process Builder",
        "B. Declarative Roll-Up Summaries App",
        "C. Apex Trigger",
        "D. Roll-Up Summary Field",
      ],
      answer: "D",
      title: "Question 44",
    },
    {
      content:
        "Universal Containers (UC) uses a custom object called Vendor. The Vendor custom object has a Master-Detail relationship with the standard Account object. Based on some internal discussion, the UC administrator tried to change the Master-Detail relationship to a Lookup relationship but was not able to do so. What is a possible reason that this change was not permitted?",
      options: [
        "A. The Account object is included on a workflow on the Vendor object.",
        "B. The Account records contain Vendor roll-up summary fields.",
        "C. The Vendor records have existing values in the Account object.",
        "D. The Vendor object must use a Master-Detail field for reporting.",
      ],
      answer: "B",
      title: "Question 45",
    },
    {
      content:
        "A Lightning component has a wired property, searchResults, that stores a list of Opportunities. Which definition of the Apex method, to which the searchResults property is wired, should be used?",
      options: [
        "A. @AuraEnabled(cacheable=false)public static List<Opportunity> search(String term) { /*implementation*/ }",
        "B. @AuraEnabled(cacheable=true)public static List<Opportunity> search(String term) { /* implementation*/ }",
        "C. @AuraEnabled(cacheable=false)public List<Opportunity> search(String term) { /*implementation*/ }",
        "D. @AuraEnabled(cacheable=true)public List<Opportunity> search(String term) { /*implementation*/ }",
      ],
      answer: "B",
      title: "Question 46",
    },
    {
      content:
        "A primaryid_c custom field exists on the candidate_c custom object. The filed is used to store each candidate's id number and is marked as Unique in the schema definition.As part of a data enrichment process. Universal Containers has a CSV file that contains updated data for all candidates in the system, f he file contains each Candidate's primary id as a data point. Universal Containers wants to upload this information into Salesforce, while ensuring all data rows are correctly mapped to a candidate in the system.Which technique should the developer implement to streamline the data upload?",
      options: [
        "A. Create a Process Builder on the Candidate_c object to map the records.",
        "B. A Update the primaryid__c field definition to mark it as an External Id",
        "C. Upload the CSV into a custom object related to Candidate_c.",
        "D. Create a before Insert trigger to correctly map the records.",
      ],
      answer: "B",
      title: "Question 47",
    },
    {
      content:
        "Which Apex class contains methods to return the amount of resources that have been used for a particular governor, such as the number of DML statements?",
      options: ["A. Limits", "B. Messaging", "C. OrgLimits", "D. Exception"],
      answer: "A",
      title: "Question 48",
    },
    {
      content:
        "A developer wants to import 500 Opportunity records into a sandbox. Why should the developer choose to use data Loader instead of Data Import Wizard?",
      options: [
        "A. Data Loader runs from the developer's browser.",
        "B. Data Import Wizard does not support Opportunities.",
        "C. Data Import Wizard can not import all 500 records.",
        "D. Data Loader automatically relates Opportunities to Accounts.",
      ],
      answer: "B",
      title: "Question 49",
    },
    {
      content:
        "A developer is implementing an Apex class for a financial system. Within the class, the variables 'creditAmount' and 'debtAmount' should not be able to change once a value is assigned. In which two ways can the developer declare the variables to ensure their value can only be assigned one time? Choose 2 answers",
      options: [
        "A. Use the final keyword and assign its value in the class constructor.",
        "B. Use the static keyword and assign its value in the class constructor.",
        "C. Use the final keyword and assign its value when declaring the variable.",
        "D. Use the static keyword and assign its value in a static initializer.",
      ],
      answer: "A,C",
      title: "Question 50",
    },
    {
      content:
        "A developer must create a lightning component that allows users to input contact record information to create a contact record, including a salary__c custom field. what should the developer use, along with a lightning-record-edit form, so that salary__c field functions as a currency input and is only viewable and editable by users that have the correct field levelpermissions on salary__C?",
      options: [
        'A. <lightning-input type="number" value="Salary__c" formatter="currency"></lightning-input>',
        'B. <lightning-input-currency value="Salary__c"></lightning-input-currency>',
        'C. <ligthning-input-field field-name="Salary__c"></lightning-input-field>',
        'D. <lightning-formatted-number value="Salary__c" format-style="currency"></lightning-formatted-number>',
      ],
      answer: "C",
      title: "Question 51",
    },
    {
      content:
        "A developer has an integer variable called maxAttempts. The developer meeds to ensure that once maxAttempts is initialized, it preserves its value for the lenght of the Apex transaction; while being able to share the variable's state between trigger executions. How should the developer declare maxAttempts to meet these requirements?",
      options: [
        "A. Declare max attempts as a private static variable on a helper class",
        "B. Declare max attempts as a variable on a helper class",
        "C. Declare max attempts as a constant using the static and final keywords",
        "D. Declare max attempts as a member variable on the trigger definition.",
      ],
      answer: "A",
      title: "Question 52",
    },
    {
      content:
        "Which statement is true about developing in a multi-tenant environment?",
      options: [
        "A. Org-level data security controls which users can see data from multiple tenants on the same instance",
        "B. Global apex classes can be referenced from multiple tenants on the same instance",
        "C. Governor limits prevent apex from impactiong the performance of multiple tenants on the same instance",
        "D. Apex sharing controls access to records fomr multiple tenants on the same instance",
      ],
      answer: "C",
      title: "Question 53",
    },
    {
      content:
        "Given the following trigger implementation:\ntrigger leadTrigger on Lead (before update){\n　final ID BUSINESS_RECORDTYPEID = '012500000009Qad';\n　for(Lead thisLead : Trigger.new)　{\n　　if(thisLead.Company != null &&thisLead.RecordTypeId != BUSINESS_RECORDTYPEID)　{\n　　　thisLead.RecordTypeId = BUSINESS_RECORDTYPEID;\n　　}\n　}\n} \nThe developer receives deployment errors every time a deployment is attempted from Sandbox to Production.What should the developer do to ensure a successful deployment?",
      options: [
        "A. Ensure a record type with an ID of BUSINESS_RECORDTYPEID exists on Production prior to deployment.",
        "B. Ensure BUSINESS_RECORDTYPEID is retrieved using Schema.Describe calls.",
        "C. Ensure BUSINESS_RECORDTYPEIDis pushed as part of the deployment components.",
        "D. Ensure the deployment is validated by a System Admin user on Production.",
      ],
      answer: "A",
      title: "Question 54",
    },
    {
      content:
        "In the following example, which sharing context will myMethod execute when it is invoked?",
      options: [
        "A. Sharing rules Ail be enforced by the instantiating class",
        "B. Sharing rules will not be enforced for the running user.",
        "C. Sharing rules will be inherited from the calling context.",
        "D. Sharing rules Ml be enforced for the running user.",
      ],
      answer: "C",
      title: "Question 55",
    },
    {
      content:
        "What is the order of operations when a record is saved in Salesforce?",
      options: [
        "A. Workflow, process flows, triggers, commit",
        "B. Triggers, workflow, process flows, commit",
        "C. Process flows, triggers, workflow, commit",
        "D. Workflow, triggers, process flows, commit",
      ],
      answer: "B",
      title: "Question 56",
    },
    {
      content:
        "A developer must provide a custom user interface when users edit a Contact. Users must be able to use the interface in Salesforce Classic and Lightning Experience.What should the developer do to provide the custom user interface?",
      options: [
        "A. Override the Contact's Edit button with a Visualforce page in Salesforce Classic and a Lightning component in Lightning Experience.",
        "B. Override the Contact's Edit button with a Lightning page in Salesforce Classic and a Visualforce page in Lightning Experience.",
        "C. Override the Contact's Edit button with a Visualforce page in Salesforce Classic and a Lightning page inLightning Experience.",
        "D. Override the Contact's Edit button with a Lightning component in Salesforce Classic and a Lightning component in Lightning Experience.",
      ],
      answer: "A",
      title: "Question 57",
    },
    {
      content:
        'The following Apex method is part of the ContactService class that is called from a trigger: \npublic static void setBusinessUnitToEMEA(Contact thisContact){\n　thisContact.Business_Unit__c = "EMEA" ;\n　update thisContact;\n}\nHow should the developer modify the code to ensure best practice are met?',
      options: [
        "A. Public static void setBusinessUnitToEMEA(List<Contact> contacts) {\n　for(Contact thisContact : contacts) {\n 　thisContact.Business_Unit__c = 'EMEA' ;\n　　update contacts[0];\n　}\n}\n",
        "B. Public void setBusinessUnitToEMEA(List<Contact> contatcs) {\n　contacts[0].Business_Unit__c = 'EMEA' ;\n　update contacts[0];\n}\n",
        "C. Public static void setBusinessUnitToEMEA(Contact thisContact) {\n　List<Contact> contacts = new List<Contact>();\n　contacts.add(thisContact.Business_Unit__c ='EMEA');\n　update contacts;\n}\n",
        "D. Public static void setBusinessUnitToEMEA(List<Contact> contacts) {\n　for(ContactthisContact : contacts) {\n　　thisContact.Business_Unit__c = 'EMEA' ;\n　}\n　update contacts;\n}\n",
      ],
      answer: "D",
      title: "Question 58",
    },
    {
      content:
        "A developer needs to create a baseline set of data (Accounts, Contacts, Products, Assets) for an entire suite of test allowing them to test independent requirements various types of Salesforce Cases.Which approach can efficiently generate the required data for each unit test?",
      options: [
        "A. Create test data before Test.startTest() in the unit test.",
        "B. Add @isTest(seeAllData=true) at the start of the unit test class.",
        "C. Use @TestSetup with a viod method.",
        "D. Create a nock using the Stud API",
      ],
      answer: "C",
      title: "Question 59",
    },
  ],
});
