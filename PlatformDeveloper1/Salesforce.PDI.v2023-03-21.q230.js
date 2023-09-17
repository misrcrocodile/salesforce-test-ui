window.testContent = window.testContent || [];
var testId = "PlatformDeveloper1";
var testName = "PlatformDeveloper1.PDI";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "PlatformDeveloper1.PDI.v2023-03-21.q230",
  content: [
    {
      content:
        "In the code below, what type does Boolean inherit from?Boolean b= true;",
      options: ["A. Class", "B. Object", "C. String", "D. Enum"],
      answer: "B",
      title: "Question 1",
    },
    {
      content:
        "What is a valid source and destination pair that can send or receive change sets? (Choose 2)",
      options: [
        "A. Sandbox to Sandbox",
        "B. Developer Edition to Sandbox",
        "C. Sandbox to Production",
        "D. Developer Edition to Production",
      ],
      answer: "A,C",
      title: "Question 2",
    },
    {
      content:
        "A lead object has a custom field Prior_Email__c. The following trigger is intended to copy the current Email into the Prior_Email__c field any time the Email field is changed:Which type of exception will this trigger cause?",
      options: [
        "A. A DML exception",
        "B. A null reference exception",
        "C. A compile time exception",
        "D. A limit exception when doing a bulk update",
      ],
      answer: "A",
      title: "Question 3",
    },
    {
      content:
        "As a part of class implementation a developer must execute a SOQL query against a large data ser based on the contact object. The method implementation is as follows.Which two methods are best practice to implement heap size control for the above code? (Choose 2 Answers)",
      options: [
        "A. Use a SOQL FOR loop, to chunk the result set in batches of 200 records.",
        "B. Use visual keyword when declaring the retrieve variable.",
        "C. Use WHERE clauses on the SOQL query to reduce the number of records retrieved.",
        "D. Use the FOR UPDATE option on the SOQL query to lock down the records retrieved.",
      ],
      answer: "A,C",
      title: "Question 4",
    },
    {
      content:
        "A developer is debugging the following code to determinate why Accounts are not being created Account a = new Account(Name = 'A'); Database.insert(a, false); How should the code be altered to help debug the issue?",
      options: [
        "A. Add a try/catch around the insert method",
        "B. Add a System.debug() statement before the insert method",
        "C. Set the second insert method parameter to TRUE",
        "D. Collect the insert method return value a Saveresult record",
      ],
      answer: "D",
      title: "Question 5",
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
      answer: "C",
      title: "Question 6",
    },
    {
      content:
        "A visualforce interface is created for Case Management that includes both standard and custom functionality defined in an Apex class called myControllerExtension. The visualforce page should include which<apex:page> attribute(s) to correctly implement controller functionality?",
      options: [
        'A. Controller = "case" and extensions =" myControllerExtension"',
        'B. StandardController = "case" and extensions =" myControllerExtension"',
        'C. Extensions=" myControllerExtension"',
        'D. Controller=" myControllerExtension"',
      ],
      answer: "B",
      title: "Question 7",
    },
    {
      content:
        "What will be the output in the debug log in the event of a QueryExeption during a call to the @query method in the following Example?",
      options: [
        "A. Querying Accounts. Custom Exception.",
        "B. Querying Accounts. Query Exception. Done",
        "C. Querying Accounts. Query Exception.",
        "D. Querying Accounts. Custom Exception Done.",
      ],
      answer: "B",
      title: "Question 8",
    },
    {
      content:
        'A Licensed_Professional__c custom object exist in the system with two Master-Detail fields for the following objects: Certification__c and Contact. Users with the "Certification Representative" role can access the Certification records they own and view the related Licensed Professionals records, however users with the"Salesforce representative" role report they cannot view any Licensed professional records even though they own the associated Contact record. What are two likely causes of users in the "Sales Representative" role not being able to access the Licensed Professional records? Choose 2 answers',
      options: [
        "A. The organization recently modified the Sales representative role to restrict Read/Write access to Licensed_Professional__c",
        "B. The organization has a private sharing model for Certification__c, and Certification__c is the primary relationship in the Licensed_Professional__c object.",
        "C. The organization has a private sharing model for Certification__c, and Contact is the primary relationship in the Licensed_Professional__c object",
        "D. The organization's sharing rules for Licensed_Professional__c have not finished their recalculation process.",
      ],
      answer: "A,B",
      title: "Question 9",
    },
    {
      content:
        "A developer needs to create a custom Visualforce button for the Opportunity object page layout that will cause a web service to be called and redirect the user to a new page when clicked. Which three attributes need to be defined in the <apex:page> tag of the Visualforce page to enable this functionality? Choose three answers.",
      options: [
        "A. Controller",
        "B. StandardController",
        "C. Action",
        "D. Extensions",
      ],
      answer: "B,C,D",
      title: "Question 10",
    },
    {
      content: "What is the advantage of Salesforce Lightning?",
      options: [
        "A. Option 3",
        "B. Pre-defined components to give Standard Look and Feel",
        "C. Option 4",
        "D. Uses service side for better handling",
      ],
      answer: "B",
      title: "Question 11",
    },
    {
      content:
        "A developer needs to create a baseline set of data (Accounts, Contacts, Products, Assets) for an entire suite of tests allowing them to test independent requirements various types of Salesforce Cases. Which approach can efficiently generate the required data for each unit test?",
      options: [
        "A. Create test data before test.startTest() in the test unit.",
        "B. Add @IsTest(seeAllData=true) at the start of the unit test class",
        "C. Use @TestSetup with a void method",
        "D. Create a mock using Stub API",
      ],
      answer: "C",
      title: "Question 12",
    },
    {
      content:
        "A developer declared a class as follow.\npublic class wysiwyg { // Properties and methods including DML }\nWhich invocation of a class method will obey the organization-wide defaults and sharing settings for the running user in the Salesforce Organization?",
      options: [
        "A. A developer using the Developer Console that invokes a method in this class from the execute anonymous window",
        "B. A Visualforce page with an Apex controller that invokes a method in this class",
        "C. An Apex Trigger that invokes a helper method in this class",
        "D. A user on an external system that has an API call into Salesforce that invokes a method in this class",
      ],
      answer: "A",
      title: "Question 13",
    },
    {
      content:
        "Which three options allow a developer to use custom styling in a Visualforce page? (Choose three.)",
      options: [
        "A. A static resource",
        "B. <apex:stylesheets>tag",
        "C. <apex:style>tag",
        "D. <apex:stylesheet> tag",
        "E. Inline CSS",
      ],
      answer: "A,D,E",
      title: "Question 14",
    },
    {
      content:
        "A developer has a single custom controller class that works with a Visualforce Wizard to support creating and editing multiple subjects. The wizard accepts data from user inputs across multiple Visualforce pages and from a parameter on the initial URL.\nWhich three statements are useful inside the unit test to effectively test the custom controller?\nChoose 3 answers",
      options: [
        "A. String nextPage = controller.save().getUrl();",
        "B. ApexPages.currentPage().getParameters().put('input', 'TestValue')",
        "C. Test.setCurrentPage(pageRef),",
        "D. Public ExtendedController (ApexPages.StandardController cntrl) { }",
      ],
      answer: "A,B,C",
      title: "Question 15",
    },
    {
      content:
        "A developer must create a ShippingCalculator class that cannot be instantiated and must include a working default implementation of a calculate method, that sub-classes can override.What is the correct implementation of the ShippingCalculator class?",

      options: [
        "A.\npublic abstract class ShippingCalculator {\n　public abstract calculate() {/*implementation*/}\n}\n",
        "B.\npublic abstract class ShippingCalculator {\n　public virtual void calculate() {/*implementation*/}\n}\n",
        "C.\npublic abstract class ShippingCalculator {\n　public void calculate() {/*implementation*/}\n}\n",
        "D.\npublic abstract class ShippingCalculator {\n　public override calculate() {/*implementation*/}\n}\n",
      ],
      answer: "B",
      title: "Question 16",
    },
    {
      content:
        "A custom Visualforce controller calls the ApexPages,addMessage () method, but no messages are rendering on the page.Which component should be added to the Visualforce page to display the message?",
      options: [
        "A. <apex: pageMessages />",
        "B. <Apex: facet name='' message''/>",
        "C. <apex: pageMessage severity=\"info''/>",
        "D. <Apex: message for='' info''/>",
      ],
      answer: "A",
      title: "Question 17",
    },
    {
      content:
        "A developer wants to override a button using Visualforce on an object.What is the requirement?",
      options: [
        "A. The action attribute must be set to a controller method.",
        "B. The standardController attribute must be set to the object.",
        "C. The object record must be instantiated in a controller or extension.",
        "D. The controller or extension must have a PageReference method.",
      ],
      answer: "B",
      title: "Question 18",
    },
    {
      content:
        "Which action can a developer take to reduce the execution time of the following code? \nList allaccounts = [select id from account]; \nlist allcontacts = [select id, accountid from contact]; \nfor (account a :allaccounts){\n　for (contact c:allcontacts){\n　　if(c.accountid = a.id){ //do work } \n 　}\n}",
      options: [
        "A. Create an apex helper class for the SOQL",
        "B. Add a group by clause to the contact SOQL",
        "C. Put the account loop inside the contact loop",
        "D. Use a map <id,contact> for allaccounts",
      ],
      answer: "D",
      title: "Question 19",
    },
    {
      content:
        "A developer must troubleshoot to pinpoint the causes of performance issues when a custom page loads in their org.Which tool should the developer use to troubleshoot?",
      options: [
        "A. Salesforce CLI",
        "B. Visual Studio Core IDE",
        "C. AppExchange",
        "D. Developer Console",
      ],
      answer: "D",
      title: "Question 20",
    },
    {
      content:
        "A developer has a unit test that is failing. To identify the issue, the developer copies the code inside the test method and executes it via the Execute Anonymous Apex Tool. The code then executes without failing. Why did the unit test failed, but not the Execute Anonymous?",
      options: [
        "A. The test method relies on existing data in the database",
        "B. The test method use a try/catch block",
        "C. The test method calls an @future method.",
        "D. The test method has a syntax error in the code.",
      ],
      answer: "A",
      title: "Question 21",
    },
    {
      content:
        "A developer creates a custom exception as shown below:\npublic class partiyException extends exception{}\nWhat are two ways the developer can fire the exception in Apex? Choose 2 answers",
      options: [
        "A. Throw new ParityException (parity does not match);",
        "B. New ParityException( );",
        "C. Throw new parityException ( );",
        "D. New ParityException (parity does not match);",
      ],
      answer: "A,C",
      title: "Question 22",
    },
    {
      content:
        "A developer created a Visualforce page and custom controller to display the account type field as shown below. Custom controller code: \npublic class customCtrlr { \n　private Account theAccount;\n　public String actType;\n　public customCtrlr() {\n　　theAccount = [SELECT Id, Type FROM Account WHERE Id = :apexPages.currentPage().getParameters().get('id')];\n　　actType = theAccount.Type;\n　}\n}\nVisualforce page snippet: The Account Type is {!actType} The value of the account type field is not being displayed correctly on the page. Assuming the custom controller is property referenced on the Visualforce page, what should the developer do to correct the problem?",
      options: [
        "A. Add a getter method for the actType attribute.",
        "B. Add with sharing to the custom controller.",
        "C. Change theAccount attribute to public.",
        "D. Convert theAccount.Type to a String.",
      ],
      answer: "A",
      title: "Question 23",
    },
    {
      content:
        "Which three statements are true regarding custom exceptions in Apex? (Choose three.)",
      options: [
        "A. A custom exception class cannot contain member variables or methods.",
        "B. A custom exception class must extend the system Exception class.",
        'C. A custom exception class name must end with "Exception".',
        "D. A custom exception class can extend other classes besides the Exception class.",
        "E. A custom exception class can implement one or many interfaces.",
      ],
      answer: "B,C,E",
      title: "Question 24",
    },
    {
      content:
        "A custom picklist field, Food_Preference__c, exist on a custom object. The picklist contains the following options: 'Vegan','Kosher','No Preference'. The developer must ensure a value is populated every time a record is created or updated. What is the most efficient way to ensure a value is selected every time a record is saved?",
      options: [
        "A. Mark the field as Required on the object's page layout.",
        'B. Set "Use the first value in the list as the default value" as True.',
        "C. Set a validation rule to enforce a value is selected.",
        "D. Mark the field as Required on the field definition.",
      ],
      answer: "D",
      title: "Question 25",
    },
    {
      content:
        "An Opportunity needs to have an amount rolled up from a custom object that is not in a master-detail relationship.How can this be achieved?",
      options: [
        "A. Write a trigger on the child object and use a red-black tree sorting to sum the amount for all related child objects under the Opportunity.",
        "B. Write a trigger on the child object and use an aggregate function to sum the amount for all related child objects under the Opportunity",
        "C. Write a Process Builder that links the custom object to the Opportunity.",
        "D. Use the Streaming API to create real-time roll-up summaries.",
      ],
      answer: "B",
      title: "Question 26",
    },
    {
      content:
        "Which two are best practices when it comes to component and application event handling? Choose 2 answers",
      options: [
        "A. Reuse the event logic in a component bundle, by putting the logic in the helper.",
        "B. Handle low-level events in the event handler and re-fire them as higher-level events.",
        "C. Try to use application events as opposed to component events.",
        "D. Use component events to communicate actions that should be handled at the application level.",
      ],
      answer: "A,B",
      title: "Question 27",
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
      title: "Question 28",
    },
    {
      content:
        "Account acct = {SELECT Id from Account limit 1}; Given the code above, how can a developer get the type of object from acct?",
      options: [
        'A. Call "acct.getsObjectType()"',
        'B. Call "Account.SobjectType"',
        'C. Call "Account.getSobjectType()"',
        'D. Call "acct.SobjectType"',
      ],
      answer: "A",
      title: "Question 29",
    },
    {
      content:
        "A developer writes a trigger on the Account object on the before update event that increments a count field. A workflow rule also increments the count field every time that an Account is created or update. The field update in the workflow rule is configured to not re-evaluate workflow rules. What is the value of the count field if an Account is inserted with an initial value of zero, assuming no other automation logic is implemented on the Account?",
      options: ["A. 1", "B. 3", "C. 2", "D. 4"],
      answer: "C",
      title: "Question 30",
    },
    {
      content:
        "What will be the output in the debug log in the event of a QueryExeption during a call to the @query method in the following Example?",
      options: [
        "A. Querying Accounts. Query Exception. Done",
        "B. Querying Accounts. Query Exception.",
        "C. Querying Accounts. Custom Exception.",
        "D. Querying Accounts. Custom Exception Done.",
      ],
      answer: "A",
      title: "Question 31",
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
      title: "Question 32",
    },
    {
      content:
        "What is the result when a Visualforce page calls an Apex controller, which calls another Apex class, which then results in hitting a governor limit?",
      options: [
        "A. All changes before a savepoint are saved.",
        "B. All changes are saved in the first Apex class.",
        "C. Any changes up to the error are saved.",
        "D. Any changes up to the error are rolled back.",
      ],
      answer: "D",
      title: "Question 33",
    },
    {
      content:
        "Which two operations can be performed using a formula field? Choose 2 answers",
      options: [
        "A. Calculating a score on a Lead based on the information from another field",
        "B. Triggering a Process Builder",
        "C. Displaying an Image based on the Opportunity Amount",
        "D. Displaying the last four digits of an encrypted Social Security number",
      ],
      answer: "A,C",
      title: "Question 34",
    },
    {
      content:
        'Which query should a developer use to obtain the Id and Name of all the Leads, Accounts, and Contacts that have the company name "Universal Containers"?',
      options: [
        "A. SELECT lead(id, name), account(id, name), contact(id,name) FROM Lead, Account, Contact WHERE Name = 'Universal Containers'",
        "B. FIND 'Universal Containers' IN CompanyName Fields RETURNING lead(id,name), account (id,name), contact(id,name)",
        "C. FIND 'Universal Containers' IN Name Fields RETURNING lead(id, name), account(id,name), contact(id,name)",
        "D. SELECT Lead.id, Lead. Name, Account.id, Account.Name, Contact.Id, Contact. Name FROM Lead, Account, Contact WHERE CompanyName = 'Universal Containers'",
      ],
      answer: "B",
      title: "Question 35",
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
      title: "Question 36",
    },
    {
      content:
        "A recursive transaction is limited by a DML statement creating records for these two objects:\n　1. Accounts\n　2. Contacts\nThe Account trigger hits a stack depth of 16.\nWhich statement is true regarding the outcome of the transaction?",
      options: [
        "A. The transaction fails and all the changes are rolled back.",
        "B. The transaction fails only if the Contact trigger stack depth is greater or equal to 16.",
        "C. The transaction succeeds and all the changes are committed to the database.",
        "D. The transaction succeeds as long as the Contact trigger stack depth is less than 16.",
      ],
      answer: "C",
      title: "Question 37",
    },
    {
      content:
        "Which annotation exposes an Apex class as a RESTful web service?",
      options: [
        "A. RemoteAction",
        "B. RestResource",
        "C. HttpInvocable",
        "D. AuraEnabled",
      ],
      answer: "B",
      title: "Question 38",
    },
    {
      content:
        "Which two automation tools include a graphical designer? Choose 2 answers",
      options: [
        "A. Approvals",
        "B. Process builder",
        "C. Flow builder",
        "D. Workflows",
      ],
      answer: "A,C",
      title: "Question 39",
    },
    {
      content:
        "A developer must provide a custom user interface when users edit a Contact. Users must be able to use the interface in Salesforce Classic and Lightning Experience.What should the developer do to provide the custom user interface?",
      options: [
        "A. Override the Contact's Edit button with a Visualforce page in Salesforce Classic and a Lightning page inLightning Experience.",
        "B. Override the Contact's Edit button with a Lightning page in Salesforce Classic and a Visualforce page in Lightning Experience.",
        "C. Override the Contact's Editbutton with a Lightning component in Salesforce Classic and a Lightning component in Lightning Experience.",
        "D. Override the Contact's Edit buttonwith a Visualforce page in Salesforce Classic and a Lightning component in Lightning Experience.",
      ],
      answer: "D",
      title: "Question 42",
    },
    {
      content:
        "A developer is building custom search functionality that uses SOSL to search account and contact records that match search terms provided by the end user. The feature is exposed through a Lightning web component, and the end user is able to provide a list of terms to search.Consider the following code snippet:What is the maximum number of search terms the end user can provide to successfully execute the search without exceeding a governor limit?",
      options: ["A. 2,000", "B. 20", "C. 200", "D. 150"],
      answer: "A",
      title: "Question 43",
    },
    {
      content:
        "A developer identifies the following triggers on the Expense_c object:\n　* deteleExpense,\n　* applyDefaultsToExpense\n　* validateExpenseUpdate;\nThe triggers process before delete, before insert, and before update events respectively.Which two techniques should the developer implement to ensure trigger best practice are followed?",
      options: [
        "A. Unify all three triggers in a single trigger on the Expense__c object that includes all events.",
        "B. Create helper classes to execute the appropriate logic when a record is saved.",
        "C. Unify the before insert and before update triggers and use Process Builder for the delete action.",
        "D. Maintain all three triggers on the Expense__c object, but move the Apex logic out for the trigger definition.",
      ],
      answer: "A,B",
      title: "Question 44",
    },
    {
      content:
        "Which Apex collection is used to ensure that all values are unique?",
      options: ["A. An Enum", "B. A List", "C. An sObject", "D. A Set"],
      answer: "D",
      title: "Question 45",
    },
    {
      content:
        "A Salesforce developer wants to review their code changes immediately and does not want to install anything on their computer or on the org.Which tool is best suited?",
      options: [
        "A. Third-party apps from App Exchange",
        "B. Salesforce Extension for VSCode",
        "C. Developer Console",
        "D. Setup Menu",
      ],
      answer: "C",
      title: "Question 46",
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
      title: "Question 47",
    },
    {
      content:
        "A developer creates an Apex Trigger with the following code block:\nList<Account> customers = new List<Account>();\nFor (Order__c o: trigger.new){\n　Account a = [SELECT Id, Is_Customer__c FROM Account WHERE Id:o.Customer__c];\n　a.Is_Customer__c = true;\n　customers.add(a);\n}\nDatabase.update(customers, false);\nThe developer tests the code using Apex Data Loader and successfully loads 10 Orders. Then, the developer loads 150 Orders.How many Orders are successfully loaded when the developer attempts to load the 150 Orders?",
      options: ["A. 1", "B. 0", "C. 150", "D. 100"],
      answer: "B",
      title: "Question 48",
    },
    {
      content: "What can be developed using the Lightning Component framework?",
      options: [
        "A. Dynamic web sites",
        "B. Salesforce integrations",
        "C. Hosted web applications",
        "D. Single-page web apps",
      ],
      answer: "D",
      title: "Question 49",
    },
    {
      content:
        "Refer to the following code snippet for an environment has more than 200 Accounts belonging to the ‘Technology’ industry:\nfor(Account thisAccount: [SELECT Id, Industry FROM Account Limit 150]) {\n　if(thisAccount.Industry == 'Technology') {\n　　thisAccount.Is_Tech__c = true;\n　}\n　update thisAccount;\n}\nWhen the code executes, what happens as a result of the Apex transaction?",
      options: [
        "A. If executed in an asynchronous context, the apex transaction is likely to fall by exceeding the DML governor limit",
        "B. If executed In a synchronous context, the apex transaction is likely to fall by exceeding the DHL governor limit.",
        "C. The Apex transaction succeeds regardless of any uncaught exception and all processed accounts are updated.",
        "D. The Apex transaction fails with the following message. \"SObjectrow was retrieved via SOQL without querying the requested field Account.Is.Tech__c''.",
      ],
      answer: "C",
      title: "Question 50",
    },
    {
      content: "When are code coverage calculations updated?",
      options: [
        "A. When Apex code is saved.",
        "B. When changes are made to an organization's configuration.",
        "C. When a deployment is validated.",
        "D. When unit tests are run on an organization.",
      ],
      answer: "D",
      title: "Question 51",
    },
    {
      content:
        "As part of a data cleanup strategy, AW Computing wants to proactively delete associated opportunity records when the related Account is deleted.Which automation tool should be used to meet this business requirement?",
      options: [
        "A. Workflow Rules",
        "B. Record-Triggered Flow",
        "C. Scheduled job",
        "D. Process Builder",
      ],
      answer: "B",
      title: "Question 52",
    },
    {
      content:
        "A developer needs to test an Invoicing system integration. After reviewing the number of transactions required for the test, the developer estimates that the test data will total about 2 GB of data storage. Production data is not required for the integration testing.Which two environments meet the requirements for testing? (Choose two.)",
      options: [
        "A. Partial Sandbox",
        "B. Developer Sandbox",
        "C. Full Sandbox",
        "D. Developer Edition",
        "E. Developer Pro Sandbox",
      ],
      answer: "A,C",
      title: "Question 53",
    },
    {
      content:
        "Which three statements are accurate about debug logs?Choose 3 answers",
      options: [
        "A. Only the 20 most recent debug logs for a user are kept.",
        "B. System debug logs are retained for 24 hours.",
        "C. The maximum size of a debug log is 5 MB.",
        "D. Debug log levels are cumulative, where FINE log level includes all events logged at the DEBUG, INFO, WARN, and ERROR levels.",
        "E. Debug logs can be set for specific users, classes, and triggers.",
      ],
      answer: "A,B,E",
      title: "Question 54",
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
      title: "Question 55",
    },
    {
      content:
        "A developer wants to retrieve the Contacts and Users with the email address '[email protected]'. Which SOSL statement should the developer use?",
      options: [
        "A. FIND {Email = '[email protected]'} IN Contact, User",
        "B. FIND {[email protected]} IN Email Fields RETURNING Contact (Email), User (Email)",
        "C. FIND Email IN Contact, User FOR {dev2uc.com}",
        "D. FIND {Email = '[email protected]'} RETURNING Contact (Email), User (Email)",
      ],
      answer: "B",
      title: "Question 56",
    },
    {
      content:
        "Which two statement can a developer use to throw a custom exception of type MissingFieldValueException?Choose 2 answers",
      options: [
        "A. Throw new MissingFieldValueException();",
        "B. Throw (MissingFieldValueException,'Problem occurred');",
        "C. Throw new MissingFieldValueException('Problem occurred');",
        "D. Throw Exception(new MissingFieldValueException());",
      ],
      answer: "A,C",
      title: "Question 57",
    },
    {
      content: "What can used to delete components from production?",
      options: [
        "A. An ant migration tool deployment with destructivechanges xml file and the components to delete in the package .xml file",
        "B. A change set deployment with the delete option checked",
        "C. A change set deployment with a destructivechanges XML file",
        "D. An ant migration tool deployment with a destructivechanges XML file and an empty package .xml file",
      ],
      answer: "A",
      title: "Question 58",
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
      title: "Question 59",
    },
    {
      content:
        "Which statement generates a list of Leads and Contacts that have a field with the phrase 'ACME'?",
      options: [
        'A. List<List <sObject>> searchList = (FIND "*ACME*" IN ALL FIELDS RETURNING Contact, Lead);',
        "B. List<List < sObject>> searchList = (SELECT Name, ID FROM Contact, Lead WHERE Name like '%ACME%');",
        'C. Map <sObject> searchList = (FIND "*ACME*" IN ALL FIELDS RETURNING Contact, Lead);',
        'D. List <sObject> searchList = (FIND "*ACME*" IN ALL FIELDS RETURNING Contact, Lead);',
      ],
      answer: "A",
      title: "Question 60",
    },
    {
      content:
        "What are two characteristics of partial copy sandboxes versus full sandboxes? Choose 2 answers",
      options: [
        "A. Provides more data record storage",
        "B. Supports more frequent refreshes",
        "C. Includes a subset of metadata",
        "D. Requires a sandbox template",
      ],
      answer: "B,C",
      title: "Question 61",
    },
    {
      content:
        "Which two are phases in the Aura application event propagation framework? Choose 2 answers",
      options: ["A. Bubble", "B. Emit", "C. Default", "D. Control"],
      answer: "A,C",
      title: "Question 62",
    },
    {
      content:
        "A developer must troubleshoot to pinpoint the causes of performance issues when a custom page loads in their org. Which tool should the developer use to troubleshoot?",
      options: [
        "A. Developer Console",
        "B. Visual Studio Core IDE",
        "C. Salesforce CLI",
        "D. AppExchange",
      ],
      answer: "A",
      title: "Question 63",
    },
    {
      content:
        "A developer created a child Lightning web component nested inside a parent Lightning web component, parent component needs to pass a string value to the child component.In which two ways can this be accomplished?Choose 2 answers",
      options: [
        "A. The parent component can use a custom event to pass the data to the child component,",
        "B. The parent component can use a public property to pass the data to the child component.",
        "C. The parent component can use the Apex controller class to send data to the child component.",
        "D. The parent component can invoke a method in the child component",
      ],
      answer: "A,B",
      title: "Question 64",
    },
    {
      content:
        "A developer is creating a page that allows users to create multiple opportunities. The developer is asked to verify the current users default opportunity record type and set certain default values based on the record type before inserting the record.\nHow can the developer find the current user's default record type?",
      options: [
        "A. Query the Profile where the ID equals userInfo.getProfileID() and the use the profile.Opportunity.getDefaultRecordType() method.",
        "B. Create the opportunity and check the opportunity.recordType, which will have the record ID of the currenct user's default record type, before inserting.",
        "C. Use Opportunity.SObjectType.getDescribe().getRecordTypeInfos()to get a list of record types and interate through them until isDefaultRecordTypeMapping() is true.",
        "D. Use the Schema.userInfo.Opportunity.getDefaultRecordType() method.",
      ],
      answer: "C",
      title: "Question 65",
    },
    {
      content:
        "A developer creates a custom controller and custom Visualforce page by using the following code block:\npublic class myController {\n public String myString;\n　public String getMyString() {\n　　return 'getmyString';\n }\n\n　public String getStringMethod1() {\n 　return myString;\n　}\n\n　public String getStringMethod2() {\n　　if (myString == null) myString'Method2';\n 　return myString;\n　}\n}\n\n<apex:page controller=\"MyController\">\n　{!myString}, {!StringMethod1}, {!StringMethod2}, {!myString}\n</apex:page>\nWhat does the user see when accessing the custom page?",
      options: [
        "A. , , Method2 , getMyString",
        "B. , , Method2,",
        "C. GetMyString , , ,",
        "D. GetMyString , , Method2 , getMystring",
      ],
      answer: "D",
      title: "Question 66",
    },
    {
      content:
        "Given the code below:What should a developer do to correct the code so that there is no chance of hitting a governor limit?",
      options: [
        "A. combine the two SELECT statements into a single SOQL statement.",
        "B. Add a LIMIT clause to the first SELECT SOQL statement.",
        "C. Add a WHERE clause to the first SELECT SOQL statement.",
        "D. Rework the code and eliminate the for loop.",
      ],
      answer: "B",
      title: "Question 67",
    },
    {
      content:
        "A developer is asked to write negative tests as part of the unit testing for a method that calculates a person's age based on birth date. What should the negative tests include?",
      options: [
        "A. Throwing a custom exception in the unit test.",
        "B. Assert that past dates are accepted by the method.",
        "C. Assert that a null value is accepted by the method.",
        "D. Assert that future dates are rejected by the method.",
      ],
      answer: "D",
      title: "Question 68",
    },
    {
      content:
        "A Visualforce page uses the Contact standard controller. How can a developer display the Name from the parent Account record on the page?",
      options: [
        "A. Use an additional standard controller for Accounts.",
        "B. Use SOQL syntax to find the related Accounts Name field.",
        "C. Use the (!contact.Account.Name) merge field syntax.",
        "D. Use additional Apex logic within the controller to query for the Name field.",
      ],
      answer: "C",
      title: "Question 69",
    },
    {
      content:
        "A Lightning component has a wired property, searcResults, that stores a list of Opportunities. Which definition of the Apex method, to which the searchResults property is wired, should be used?",
      options: [
        "A. @AuraEnabled(cacheable=true)public static List<Opportunity> search(String term) { /* implementation*/ }",
        "B. @AuraEnabled(cacheable=true)public List<Opportunity> search(String term) { /*implementation*/ }",
        "C. @AuraEnabled(cacheable=false)public List<Opportunity> search(String term) { /*implementation*/ }",
        "D. @AuraEnabled(cacheable=false)public static List<Opportunity> search(String term) { /*implementation*/ }",
      ],
      answer: "A",
      title: "Question 70",
    },
    {
      content:
        "Which two roll-up summary field types are required to find the average of values on detail records in a Master-Detail relationship?",
      options: [
        "A. Roll-up summary field of type TOTAL",
        "B. Roll-up summary field of type NUM",
        "C. Roll-up summary field of type SUM",
        "D. Roll-up summary field of type COUNT",
      ],
      answer: "C,D",
      title: "Question 71",
    },
    {
      content:
        "Which two statements are true about using the @testSetup annotation in an Apex test class?Choose 2 answers",
      options: [
        "A. Records created in the test setup method cannot be updated in individual test methods.",
        "B. Test data is inserted once for all test methods in a class.",
        "C. A method defined with the @testSetup annotation executes once for each test method in the test class and counts towards system limits.",
        "D. Qo The @testSetup annotation is not supported when the GisTest(SeeAllData=True) annotation is used.",
      ],
      answer: "C,D",
      title: "Question 72",
    },
    {
      content:
        "Which user can edit a record after it has been locked for approval? (Choose 2)",
      options: [
        "A. Any user who approved the record previously",
        "B. A user who is assigned as the current approver",
        "C. Any user with a higher role in the hierarchy",
        "D. An administrator",
      ],
      answer: "B,D",
      title: "Question 73",
    },
    {
      content:
        "developer created this Apex trigger that calls MyClass.myStaticMethod:\ntrigger myTrigger on Contact(before insert) {\n　MyClass.myStaticMethod(trigger.new, trigger.oldMap); \n}\nThe developer creates a test class with a test method that calls MyClass.mystaticMethod, resulting in 81% overall code coverage. What happens when the developer tries to deploy the trigger and two classes to production, assuming no other code exist?",
      options: [
        "A. The deployment passes because both classes and the trigger were included in the deployment.",
        "B. The deployment fails because the Apex trigger has no code coverage.",
        "C. The deployment passes because the Apex code has required (>75%) code coverage.",
        "D. The deployment fails because no assertions were made in the test method.",
      ],
      answer: "B",
      title: "Question 74",
    },
    {
      content:
        "AW Computing (AWC) handles orders In Salesforce and stores Its product Inventory In a fter, inventory__c, on a custom object, Product__c. When en order for a Product__c Is placed, the inventory__c field Is reduced by the quantity of the order using an Apex trigger.\npublic void reduceInventory(Id prodId, Integer qty) {\n　Integer newInventoryAmt = getNewInventoryAmt(prodId, qty);\n　Product__c p = new Product__c(Id = prodId, Inventory__c = newInventoryAmt);\n　update p;\n\n　// code goes here\n}\nAWC wants the real-time inventory reduction for a product to be sent to many of Its external systems, Including some future systems the company Is currently planning.What should a developer add to the code at the placeholder to meet these requirements?A)B)C)D)",
      options: [
        "A.\nInventoryReductionEvent__e ev = new InventoryReductionEvent__e(ProductId__c = prodId, Reduction__c = qty);\nEventBus.publish(ev);\n",
        "B.\nInventoryReductionEvent__e ev = new InventoryReductionEvent__e(ProductId__c = prodId, Reduction__c = qty);\ninsert ev;\n",
        "C.\nInventoryReductionEvent__c ev = new InventoryReductionEvent__c(ProductId__c = prodId, Reduction__c = qty);\nEventBus.publish(ev);\n",
        "D.\nInventoryReductionEvent__c ev = new InventoryReductionEvent__c(ProductId__c = prodId, Reduction__c = qty);\ninsert ev;\n",
      ],
      answer: "C",
      title: "Question 75",
    },
    {
      content:
        "What is a key difference between a Master-Detail Relationship and a Lookup Relationship?",
      options: [
        "A. A Master-Detail Relationship detail record inherits the sharing and security of its master record.",
        "B. A Lookup Relationship is a required field on an object.",
        "C. When a record of a master object in a Lookup Relationship is deleted, the detail records are also deleted.",
        "D. When a record of a master object in a Master-Detail Relationship is deleted, the detail records are kept and not deleted.",
      ],
      answer: "A",
      title: "Question 76",
    },
    {
      content:
        "Cloud Kicks Fitness, an ISV Salesforce partner, is developing a managed package application. One of the application modules allows the user to calculate body fat using the Apex class, BodyFat, and its method, calculateBodyFat(). The product owner wants to ensure this method is accessible by the consumer of the application when developing customizations outside the ISV's package namespace.Which approach should a developer take to ensure calculateBodyFat() is accessible outside the package namespace?",
      options: [
        "A. Declare the class and method using the public access modifier.",
        "B. Declare the class as public and use the global access modifier on the method.",
        "C. Declare the class as global and use the public access modifier on the method.",
        "D. Declare the class and method using the global access modifier.",
      ],
      answer: "D",
      title: "Question 77",
    },
    {
      content:
        "What can a developer use to determine if the core Apex code exceeds any governor limits in a test class during bulk execution?",
      options: [
        "A. @TestVisible",
        "B. @TestSetup.",
        "C. Limits, startTest, stopTest",
        "D. Test.getDmlStatements()",
      ],
      answer: "C",
      title: "Question 78",
    },
    {
      content:
        "A developer needs to create a Visualforce page that displays Case data. The page will be used by both support reps and support managers. The Support Rep profile does not allow visibility of the Customer_Satisfaction__c field, but the Support Manager profile does.How can the developer create the page to enforce Field Level Security and keep future maintenance to a minimum?",
      options: [
        "A. Use a new Support Manager permission set.",
        "B. Create one Visualforce Page for use by both profiles.",
        "C. Use a custom controller that has the with sharing keywords.",
        "D. Create a separate Visualforce Page for each profile.",
      ],
      answer: "B",
      title: "Question 80",
    },
    {
      content:
        "A company would like to send an offer letter to a candidate, have the candidate sign it electronically, and then send the letter back.What can a developer do to accomplish this?",
      options: [
        "A. Create a visual workflow that will capture the candidate's signature electronically",
        "B. Develop a Process Builder that will send the offer letter and allow the candidate to sign it electronically.",
        "C. Install a managed package that will allow the candidate to sign documents electronically",
        "D. Create an assignment rule that will assign the offer letter to the candidate",
      ],
      answer: "C",
      title: "Question 81",
    },
    {
      content:
        "Why would a developer use Test.startTest( ) and Test.stopTest( )?",
      options: [
        "A. To create an additional set of governor limits during the execution of a single test class.",
        "B. To indicate test code so that it does not Impact Apex line count governor limits.",
        "C. To start and stop anonymous block execution when executing anonymous Apex code",
        "D. To avoid Apex code coverage requirements for the code between these lines",
      ],
      answer: "A",
      title: "Question 82",
    },
    {
      content:
        "A developer created an Apex trigger using the Developer Console and now wants to debug codeHow can the developer accomplish this in the Developer Console?",
      options: [
        "A. Select the Override Log Triggers checkbox for the trigger",
        "B. Open the Progress tab in the Developer Console.",
        "C. Open the logs tab in the Developer Console.",
        "D. Add the user name in the Log Inspector.",
      ],
      answer: "C",
      title: "Question 83",
    },
    {
      content:
        "A developer wrote Apex code that calls out to an external system. How should a developer write the test to provide test coverage?",
      options: [
        "A. Write a class that extends HTTPCalloutMock.",
        "B. Write a class that implements the WebserviceMock interface.",
        "C. Write a class that extends WebserviceMock",
        "D. Write a class that implements the HTTPCalloutMock interface.",
      ],
      answer: "D",
      title: "Question 84",
    },
    {
      content:
        "The Account object has a custom formula field,Level__c, that is defined as a Formula(Number) with two decimal places. Which three are valid assignments? Choose 3.",
      options: [
        "A. Decimal myLevel = acct.Level__c;",
        "B. Double myLevel = acct.Level__c;",
        "C. Object myLevel = acct.Level__c;",
        "D. Integer myLevel = acct.Level__c;",
        "E. Long myLevel = acct.Level__c;",
      ],
      answer: "A,B,C",
      title: "Question 85",
    },
    {
      content:
        "A software company uses the following objects and relationships:\n　* Case: to handle customer support issues\n　* Defect_c: a custom object to represent known issues with the company's software\n　* case_Defect__c: a junction object between Case and Defector to represent that a defect Is a customer issue\nWhat should be done to share a specific Case-Defect_c record with a user?",
      options: [
        "A. Share the parent Case record.",
        "B. Share the parent Defect_c record.",
        "C. Share the Case_Defect_c record.",
        "D. Share the parent Case and Defect_c records.",
      ],
      answer: "D",
      title: "Question 86",
    },
    {
      content:
        "Before putting an app into production, which step should be taken?",
      options: [
        "A. Switch to a production database",
        "B. Scale your dynos",
        "C. Insure that you have installed a performance introspection add-on",
        "D. Run the production check feature via the web interface",
      ],
      answer: "D",
      title: "Question 87",
    },
    {
      content:
        "What are two correct examples of the model in the salesforce MVC architecture? Choose 2 answers.",
      options: [
        "A. Workflow rule on the contact object",
        "B. Standard lightning component",
        "C. Standard account lookup on the contract object",
        "D. Custom field on the custom wizard_c object",
      ],
      answer: "A,B",
      title: "Question 88",
    },
    {
      content:
        "What is a capability of cross-object formula fields? Choose 3 answers",
      options: [
        "A. Formula fields can reference fields in a collect of records from a child relationship.",
        "B. Formula fields can expose data the user does not have access to in a record.",
        "C. Formula fields can reference fields from master-detail or lookup parent relationships.",
        "D. Formula fields can reference fields from objects that are up to 10 relationships away.",
        "E. Formula fields can be used in three roll-up summaries per object.",
      ],
      answer: "B,C,D",
      title: "Question 89",
    },
    {
      content: "What is a benefit of the lightning component framework?",
      options: [
        "A. Better integration with Force.com sites",
        "B. More Centralized control via server-side logic",
        "C. Better performance for custom Salesforce1 Mobile Apps",
        "D. More pre-built components to replicate the salesforce look and feel",
      ],
      answer: "D",
      title: "Question 90",
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
      title: "Question 91",
    },
    {
      content:
        "Given the following Apex statement:\n　Account myAccount = [SELECT Id, Name FROM Account];\nWhat occurs when more than one Account is returned by the SOQL query?",
      options: [
        "A. An unhandled exception is thrown and the code terminates.",
        "B. The first Account returned is assigned to myAccount.",
        "C. The query fails and an error is written to the debug log.",
        "D. The variable, myAccount, is automatically cast to the List data type.",
      ],
      answer: "C",
      title: "Question 92",
    },
    {
      content:
        "Which action can a developer perform in a before update trigger? (Choose 2)",
      options: [
        "A. Delete the original object using a delete DML operation.",
        "B. Display a custom error message in the application interface.",
        "C. Change field values using the Trigger.new context variable.",
        "D. Update the original object using an update DML operation.",
      ],
      answer: "B,C",
      title: "Question 94",
    },
    {
      content:
        "When using SalesforceDX, what does a developer need to enable to create and manage scratch orgs?",
      options: [
        "A. Production",
        "B. Environment Hub",
        "C. Sandbox",
        "D. Dev Hub",
      ],
      answer: "D",
      title: "Question 95",
    },
    {
      content:
        "An Account trigger updates all related Contacts and Cases each time an Account is saved using the following two DML statements:update allContacts; update allCases;What is the result if the Case update exceeds the governor limit for maximum number of DML records?",
      options: [
        "A. The Account save fails and no Contacts or Cases are updated",
        "B. The Account save succeeds, Contacts are updated, but Cases are not.",
        "C. The Account save is retried using a smaller trigger batch size.",
        "D. The Account save succeeds and no Contacts or Cases are updated",
      ],
      answer: "A",
      title: "Question 96",
    },
    {
      content:
        "A reviewer is required to enter a reason in the comments field only when a candidate is recommended to be hired. Which action can a developer take to enforce this requirement?",
      options: [
        "A. Create a required comments field.",
        "B. Create a required Visualforce component.",
        "C. Create a validation rule.",
        "D. Create a formula field.",
      ],
      answer: "C",
      title: "Question 97",
    },
    {
      content:
        'A developer created a Visualforce page with a custom controller to show a list of accounts. The page uses the<apex:SelecList> component, with a variable called "selection", to show the valid values for Account.Type.The page uses an <apex:pageBlockTable> component to display the list of accounts, where the iteration variable is "acct". The developer wants to ensure that when a user selects a type on the <apex : selectList> component, only accounts with that type are shown on the page. What should the developer do to accomplish this?',
      options: [
        "A. Create a component for each option and use a variable with hide parameter on the element.",
        "B. Create multiple lists in the controller that represent the relevant accounts for each account type when the page loads, then reference the correct one dynamically on the pageBlockTable.",
        "C. Use the onChange event to update the list of accounts in the controller when the value changes, and then re-render the pageBlockTable.",
        "D. Add the Rendered={!Acct.type==selection} attribute to the pageBlockTable component",
      ],
      answer: "C",
      title: "Question 98",
    },
    {
      content:
        "When is an Apex Trigger required instead of a Process Builder Process?",
      options: [
        "A. When a post to Chatter needs to be created",
        "B. When a record needs to be created",
        "C. When multiple records related to the triggering record need to be updated",
        "D. When an action needs to be taken on a delete or undelete, or before a DML operation is executed.",
      ],
      answer: "D",
      title: "Question 99",
    },
    {
      content:
        "A developer considers the following snippet of code:\nBoolean isOK;\nInteger x;\nString theString = 'Hello';\nif (isOK == false && theString == 'Hello') {\n x = 1;\n} else if (isOK == true && theString =='Hello') {\n　x = 2;\n} else if (isOK != null && theString == 'Hello') {\n　x = 3;\n} else {\n　x = 4;\n}\nBased on this code, what is the value of x?",
      options: ["A. 4", "B. 2", "C. 3", "D. 1"],
      answer: "A",
      title: "Question 100",
    },
    {
      content:
        "The account object has a custom percent field, rating, defined with a length of 2 with 0 decimal places. An account record has the value of 50% in its rating field and is processed in the apex code below after being retrieved from the database with SOQL public void processaccount(){ decimal acctscore = acc.rating__c *100; } what is the value of acctscore after this code executes?",
      options: ["A. 500", "B. 5", "C. 50", "D. 5000"],
      answer: "D",
      title: "Question 101",
    },
    {
      content:
        "A developer has to identify a method in en Apex class that performs resource intensive actions in memory by iterating over the result set of a SOQL statement on the account. The method also performs a SOQL statement to save the changes to the database.Which two techniques should the developer implement as a best practice to ensure transaction control and avoid exceeding governor limits?Choose 2 answers",
      options: [
        "A. Use the Database.Savepoint method to enforce database Integrity.",
        "B. Use the System.Limit class to monitor the current CPU governor limit consumption.",
        "C. Use the @ReadOnly annotation to bypass the number of rows returned by a SOQL.",
        "D. Use Partial DHL statements to ensure only valid data is committed.",
      ],
      answer: "A,B",
      title: "Question 102",
    },
    {
      content: "How should a developer create a new custom exception class?",
      options: [
        "A. public class CustomException extends Exception{}",
        "B. public class CustomException implements Exception{}",
        "C. CustomException ex = new (CustomException)Exception();",
        "D. (Exception)CustomException ex = new Exception();",
      ],
      answer: "A",
      title: "Question 103",
    },
    {
      content:
        "What are two considerations for custom Apex Exception classes? Choose 2 answers.",
      options: [
        "A. Constructor for custom Exceptions can only accept string values as arguments.",
        "B. Custom Exception class names must end with the word 'Exception'.",
        "C. Custom Exceptions cannot be extended by other Exception classes.",
        "D. Custom Exception classes must extend the base Exception class.",
      ],
      answer: "B,D",
      title: "Question 105",
    },
    {
      content:
        "An org tracks customer orders on an Order object and the items of an Order on the Line Item object. The Line Item object has a MasterDetail relationship to the order object. A developer has a requirement to calculate the order amount on an Order and the line amount on each Line item based on quantity and price.What is the correct implementation?",
      options: [
        "A. Write a process on the Line item that calculates the item amount and order amount and updates the filed on the Line Item and the order.",
        "B. Write a single before trigger on the Line Item that calculates the item amount and updates the order amount on the Order.",
        "C. Implement the line amount as a numeric formula field and the order amount as a roll-up summary field.",
        "D. Implement the Line amount as a currency field and the order amount as a SUM formula field.",
      ],
      answer: "C",
      title: "Question 106",
    },
    {
      content: "When would the use of Heroku Postgres be appropriate?",
      options: [
        "A. To interconnect Microsoft SQL servers to Heroku Applications.",
        "B. To cache commonly accessed data for faster retrieval.",
        "C. To store user generated pictures and Word documents.",
        "D. To store and retrieve data using the Structured Query Language.",
      ],
      answer: "D",
      title: "Question 107",
    },
    {
      content: "What is the proper process for an Apex Unit Test",
      options: [
        "A. Create data for testing. Execute runAllTests(). Verify that the results are correct.",
        "B. Query for test data using SeeAllData = true. Execute runAllTests(). Verify that the results are correct.",
        "C. Query for test data using SeeAllData = true. Call the method being tested. Verify that the results are correct.",
        "D. Create data for testing. Call the method being tested. Verify that the results are correct.",
      ],
      answer: "D",
      title: "Question 108",
    },
    {
      content: "Where can debug log filter settings be set?Choose 2 answers",
      options: [
        "A. On the monitored user's name.",
        "B. The Filters link by the monitored user's name within the web UI.",
        "C. The Log Filters tab on a class or trigger detail page.",
        "D. The Show More link on the debug log's record.",
      ],
      answer: "B,C",
      title: "Question 109",
    },
    {
      content:
        "A developer runs the following anonymous code block in a Salesforce org with 100 accounts \nList acc= [select id from account limit 10];\ndelete acc;\ndatabase.emptyrecyclebin(acc);\nsystem.debug(limits.getlimitqueries()+','+Limits.getlimitDMLStatements()); \nWhat is the debug output?",
      options: ["A. 10, 2", "B. 150, 100", "C. 100, 150", "D. 1, 2"],
      answer: "C",
      title: "Question 110",
    },
    {
      content:
        "Which code segment can be used to control when the dowork() method is called?",
      options: [
        "A. If(Trigger.isInsert) dowork();",
        "B. For (Trigger.isInsert t: Trigger.new) { dowork(); }",
        "C. If(Trigger.isRunning) dowork();",
        "D. For (Trigger.isRunning t: Trigger.new) { dowork(); }",
      ],
      answer: "A",
      title: "Question 111",
    },
    {
      content:
        "A developer wrote a workflow email alert on case creation so that an email is sent to the case owner manager when a case is created. When will the email be sent?",
      options: [
        "A. After Trigger execution.",
        "B. Before Trigger execution.",
        "C. After Committing to database.",
        "D. Before Committing to database.",
      ],
      answer: "C",
      title: "Question 112",
    },
    {
      content:
        "An sObject named Application_c has a lookup relationship to another sObject named Position_c. Both Application _c and Position_c have a picklist field named Status_c.When the Status_c field on Position_c is updated, the Status_c field on Application_c needs to be populated automatically with the same value, and execute a workflow rule on Application_c.How can a developer accomplish this?",
      options: [
        "A. By using an Apex trigger with a DML operation.",
        "B. By changing Application_c.Status_c into a formula field.",
        "C. By configuring a cross-object field update with a workflow.",
        "D. By changing Application_c.Status_c into a roll -up summary field.",
      ],
      answer: "A",
      title: "Question 113",
    },
    {
      content:
        "How can a developer use a Set<Id> to limit the number of records returned by a SOQL query?",
      options: [
        "A. Reference the Set in the WHERE clause of the query",
        "B. Reference the Set in the LIMIT clause of the query",
        "C. Pass the Set as an argument in a reference to the Database.query() method",
        "D. Pass the query results as an argument in a reference to the Set.containsAll() method.",
      ],
      answer: "A",
      title: "Question 114",
    },
    {
      content:
        "What are two considerations for deciding to use a roll-up summary field? Choose 2 answer's partner.",
      options: [
        "A. Roll-up cannot be performed on formula fields that use cross-object references or on-the-fly calculations such as NOW().",
        "B. Roll-up cannot be performed on formula fields.",
        "C. Roll-up summary fields do not cause validation rules on the parent object unless that object is edited separately.",
        "D. Roll-up summary can be performed on formula fields, but if their formula contains an #Error result, it may affect the summary value.",
      ],
      answer: "A,D",
      title: "Question 115",
    },
    {
      content: "Which scenario is invalid for execution by unit tests?",
      options: [
        "A. Executing methods for negative test scenarios",
        "B. Loading test data in place of user input for Flows.",
        "C. Executing methods as different users.",
        "D. Loading the standard Pricebook ID using a system method",
      ],
      answer: "B",
      title: "Question 116",
    },
    {
      content:
        "A developer wants to list all of the Tasks for each Account on the Account detail page. When a task is created for a Contact, what does the developer need to do to display the Task on the related Account record?",
      options: [
        "A. Create a Workflow rule to relate the Task to the Contact's Account.",
        "B. Nothing. The Task cannot be related to an Account and a Contact.",
        "C. Create an Account formula field that displays the Task information.",
        "D. Nothing. The task is automatically displayed on the Account page.",
      ],
      answer: "D",
      title: "Question 117",
    },
    {
      content:
        "Which three resources in an Aura Component can contain Javascript functions? Choose 3 answers",
      options: [
        "A. Design",
        "B. Controller",
        "C. Helper",
        "D. Style",
        "E. Renderer",
      ],
      answer: "B,C,E",
      title: "Question 119",
    },
    {
      content:
        "What are two ways a developer can get the status of an enquered job for a class that queueable interface?Choose 2 answers",
      options: [
        "A. Query the AsyncApexJob object",
        "B. View the apex status Page",
        "C. View the apex Jobs page",
        "D. View the apex flex Queue",
      ],
      answer: "A,C",
      title: "Question 120",
    },
    {
      content:
        "A candidate may apply to multiple jobs at the company Universal Containers by submitting a single application per job posting, that application cannot be modified to be resubmitted to a different job posting.What can the administrator do to associate an application with each job posting in the schema for the organization?",
      options: [
        "A. Create a master-detail relationship in the Job Postings custom object to the Applications custom object.",
        "B. Create a master-detail relationship in the Application custom object to the Job Postings custom object.",
        "C. Create a lookup relationship on both objects to a junction object called Job Posting Applications.",
        "D. Create a lookup relationship in the Applications custom object to the Job Postings custom object.",
      ],
      answer: "B",
      title: "Question 123",
    },
    {
      content:
        "Which three steps allow a custom SVG to be included in a Lightning web component? Choose 3 answers",
      options: [
        "A. Reference the import in the HTML template.",
        "B. Import the SVG as a content asset file.",
        "C. Import the static resource and provide a better for it in JavaScript.",
        "D. Upload the SVG as a static resource.",
        "E. Reference the getter in the HTML template.",
      ],
      answer: "C,D,E",
      title: "Question 124",
    },
    {
      content:
        "A sales manager wants to make sure that whenever an opportunity stage is changed to 'Closed Won', a new case will be of created for the support team to collect necessary information from the customer. How should a developer accomplish this?",
      options: [
        "A. Create a workflow rule to create the new case.",
        "B. Create a lookup field to the Case object on the opportunity object.",
        "C. Create a Process Builder to create the new case.",
        "D. Set up a validation rule on the Opportunity Stage.",
      ],
      answer: "C",
      title: "Question 125",
    },
    {
      content:
        "An apex trigger fails because it exceeds governor limits. Which two techniques should a developer use to resolve the problem? Choose 2 answers",
      options: [
        "A. Use SOQL aggregate queries to retrieve child records",
        "B. Use the database class to handle DML operations",
        "C. Use maps to reference related records",
        "D. Use lists for all DML operations",
      ],
      answer: "C,D",
      title: "Question 126",
    },
    {
      content:
        "Which two examples above use the system. debug statements to correctly display the results from the SOQL aggregate queries?\nExample 1:\nAggregateResult[] groupedResults = [SELECT CampaignId, AVG(Amount) FROM Opportunity GROUP BY CampaignId];\nfor (AggregateResult ar : groupedResults) {\n　System.debug(‘Campaign ID’ + ar.get(‘CampaignId’));\n　System.debug(‘Average amount’ + ar.get(‘expr0’)); \n}\nExample 2:\nAggregateResult[] groupedResults = [SELECT CampaignId, AVG(Amount) theAverage FROM Opportunity GROUP BY CampaignId];\nfor (AggregateResult ar : groupedResults) {\n　System.debug(‘Campaign ID’ + ar.get(‘CampaignId’));\n　System.debug(‘Average amount’ + ar.get(‘theAverage’)); \n}\nExample 3:\nAggregateResult[] groupedResults = [SELECT CampaignId, AVG(Amount) FROM Opportunity GROUP BY CampaignId];\nfor (AggregateResult ar : groupedResults) {\n　System.debug(‘Campaign ID’ + ar.get(‘CampaignId’));\n　System.debug(‘Average amount’ + ar.get.AVG()); \n}\nExample 4:\nAggregateResult[] groupedResults = [SELECT CampaignId, AVG(Amount) theAverage FROM Opportunity GROUP BY CampaignId];\nfor (AggregateResult ar : groupedResults) {\n　System.debug(‘Campaign ID’ + ar.get(‘CampaignId’));\n　System.debug (‘Average amount’ + ar.theAverage); \n}\nWhich two of the examples above have correct System.debug statements? (Choose two.)",
      options: ["A. Example 1", "B. Example 2", "C. Example 3", "D. Example 4"],
      answer: "A,B",
      title: "Question 127",
    },
    {
      content:
        "When creating a record with a Quick Action, what is the easiest way to post a feed item?",
      options: [
        "A. By adding a trigger on the new record.",
        "B. By selecting create case feed on the new record.",
        "C. By selecting create feed item on the quick action.",
        "D. By adding a workflow rule on the new record.",
      ],
      answer: "C",
      title: "Question 128",
    },
    {
      content:
        "A developer created a trigger on the Account object and wants to test if the trigger is properly bulklfield. The developer team decided that the trigger should be tested with 200 account records with unique names.What two things should be done to create the test data within the unit test with the least amount of code?Choose 2 answers",
      options: [
        "A. Use the @isTest(isParallel=true) annotation in the test class.",
        "B. Use the @isTest(seeAllData=true) annotation in the test class.",
        "C. Use Test.loadData to populate data in your test methods.",
        "D. Create a static resource containing test data.",
      ],
      answer: "C,D",
      title: "Question 129",
    },
    {
      content:
        "Which two statements are accurate regarding Apex classes and interfaces?Choose 2 answers",
      options: [
        "A. Classes are final by default.",
        "B. A top-level class can only have one inner class level.",
        "C. Interface methods are public by default.",
        "D. Inner classes are public by default.",
      ],
      answer: "B,C",
      title: "Question 130",
    },
    {
      content:
        "What is the result of the following code block ?\nInteger x = 1;\nInteger Y = 0;\nWhile(x < 10){Y++;}",
      options: ["A. An error occurs", "B. Y = 10", "C. Y = 9", "D. X = 0"],
      answer: "A",
      title: "Question 131",
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
      title: "Question 132",
    },
    {
      content:
        "A developer uses a test setup method to create an account named 'test'. The first method deletes the account record. What must be done in the second test method to use the account?",
      options: [
        "A. Use select id from account where name='test'",
        "B. Call the test setup method at the start of the test",
        "C. The account cannot be used in the second method",
        "D. Restore the account using an undelete statement",
      ],
      answer: "A",
      title: "Question 133",
    },
    {
      content:
        "Which type of code represents the view in the MVC architecture on the Force.com platform?",
      options: [
        "A. Validation rules for a page layout that includes a related list of cases",
        "B. An apex method in an extension that returns a list of cases",
        "C. A visualforce page that dysplays information about case records by iterating over a list of cases",
        "D. An apex method that executes SOQL to retrieve a list of cases",
      ],
      answer: "C",
      title: "Question 134",
    },
    {
      content:
        "Given the code block: Integer x; for (x =0; x<10; x+=2){if (x==8) break; if (x==10) break;} system.debug(x); Which value will the system.debug display?",
      options: ["A. 2", "B. 8", "C. 4", "D. 10"],
      answer: "B",
      title: "Question 135",
    },
    {
      content:
        "In terms of the MVC paradigm, what are two advantages of implementing the layer of a Salesforce application using Aura Component-based development over Visualforce? Choose 2 answers",
      options: [
        "A. Server-side run-time debugging",
        "B. Automatic code generation",
        "C. Rich component ecosystem",
      ],
      answer: "B,C",
      title: "Question 136",
    },
    {
      content: "How can a developer set up a debug log on a specific user?",
      options: [
        "A. It is not possible to setup debug logs for users other than yourself.",
        "B. Create Apex code that logs code actions into a custom object.",
        "C. Ask the user for access to their account credentials, log in as the user and debug the issue.",
        "D. Set up a trace flag for the user, and define a logging level and time period for the trace.",
      ],
      answer: "D",
      title: "Question 137",
    },
    {
      content:
        'A lead developer creates an Apex interface called "Laptop". Consider the following code snippet:\npublic class SilverLaptop {\n　// code implementation\n}\nHow can a developer use the Laptop Interface within the Silvertaptop class?',
      options: [
        "A. public class SilverLaptop extends Laptop",
        "B. public class Silverlaptop implements Laptop",
        'C. @Interface (class="Laptop")public class SilverLaptop',
        'D. @Extends(class="Laptop")public class SilverLaptop',
      ],
      answer: "A",
      title: "Question 138",
    },
    {
      content:
        "Which statement is true about a hierarchical relationship as it pertains to user records?",
      options: [
        "A. It uses a junction object and lookup relationships to allow many user records to be related to many other user records",
        "B. It uses a master-detail relationship to allow one user record to be related to another user record",
        "C. It uses a special lookup relationship to allow one user record to be related to another user record",
        "D. It uses a junction object and master-detail relationship to allow many user records to be related to many other user records",
      ],
      answer: "C",
      title: "Question 139",
    },
    {
      content:
        "A Visualforce page is required for displaying and editing Case records that includes both standard and custom functionality defined in an Apex class called myControllerExtension.The Visualforce page should include which <apex:page> attribute(s) to correctly implement controller functionality?",
      options: [
        'A. controller="Case" and extensions="myControllerExtension"',
        'B. extensions="myControllerExtension"',
        'C. controller="myControllerExtension"',
        'D. standardController="Case" and extensions="myControllerExtension"',
      ],
      answer: "D",
      title: "Question 140",
    },
    {
      content:
        "What are two valid options for iterating through each Account in the collection List <Account> named AccountList? Choose 2 answers.",
      options: [
        "A. For (Account theAccount : AccountList){...}",
        "B. For (List L : AccountList) {...}",
        "C. For(AccountList){...}",
        "D. For (Integer i=0; i<AccountList. Size();i++){...}",
      ],
      answer: "A,D",
      title: "Question 141",
    },
    {
      content:
        "A developer wants multiple test classes to use the same set of test data. How should the developer create the test data?",
      options: [
        "A. Use the seealldata=true annotation in each test class",
        "B. Create a test setup method for each test class",
        "C. Reference a test utility class in each test class",
        "D. Define a variable for test records in each test classes",
      ],
      answer: "C",
      title: "Question 143",
    },
    {
      content:
        "What are two benefits of the Lightning Component framework? (Choose two.)",
      options: [
        "A. It promotes faster development using out-of-box components that are suitable for desktop and mobile devices.",
        "B. It simplifies complexity when building pages, but not applications.",
        "C. It allows faster PDF generation with Lightning components.",
        "D. It provides an event-driven architecture for better decoupling between components.",
      ],
      answer: "A,D",
      title: "Question 145",
    },
    {
      content:
        "A Next Best Action strategy uses an Enhance Element that invokes an Apex method to determine a discount level for a Contact, based on a number of factors. What is the correct definition of the Apex method?",
      options: [
        "A. @InvocableMethod global Recommendation getLevel (ContactWrapper input){ /*implementation*/ }",
        "B. @InvocableMethod global static ListRecommendation getLevel(List<ContactWrapper> input){ /*implementation*/ }",
        "C. @InvocableMethod global static List<List<Recommendation>> getLevel(List<ContactWrapper> input){ /*implementation*/ }",
        "D. @InvocableMethod global List<List<Recommendation>> getLevel(List<ContactWrapper> input){ /*implementation*/ }",
      ],
      answer: "C",
      title: "Question 146",
    },
    {
      content:
        "Which annotation exposes an Apex class as a RESTful web service?",
      options: [
        "A. @RestResource",
        "B. @AuraEnabled",
        "C. @Remote Action",
        "D. @Httplnvocable",
      ],
      answer: "A",
      title: "Question 147",
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
      title: "Question 148",
    },
    {
      content:
        "Which two statements accurately represent the MVC framework implementation in Salesforce? Choose 2 answers",
      options: [
        "A. Triggers that create records represent the Model (M) part of the MVC framework.",
        "B. Validation rules enforce business rules and represent the Controller (C) part of the MVC framework",
        "C. Standard and Custom objects used in the app schema represent the View (V) part of the MVC framework",
        "D. Lightning component HTML files represent the Model (M) part of the MVC framework.",
      ],
      answer: "A,B",
      title: "Question 149",
    },
    {
      content:
        "A developer wants to invoke on outbound message when a record meets aspecific criteria.Which three features satisfy this use case?Choose 3 answer",
      options: [
        "A. Visual Workflow canbe used to check the record criteria and send an outbound message without Apex Code.",
        "B. Process builder can be used to check the record criteria and send an outbound messagewithout Apex Code.",
        "C. Process builder can be used to check the record criteria andsend an outbound message with Apex Code.",
        "D. workflows can be used to check the record criteria and send an outbound message.",
        "E. Approval Process has the capacity to check the record criteria and send an outbound message without Apex Code",
      ],
      answer: "C,D,E",
      title: "Question 150",
    },
    {
      content:
        "A developer must modify the following code snippet to prevent the number of SOQL queries issued from exceeding the platform governor limit. public class without sharing OpportunityService{\n　public static List<OpportunityLineItem> getOpportunityProducts(Set<Id> opportunityIds) {\n　　List<OpportunitylineItem> oppLineItems = new List<OpportunityLineItem>();\n　　for(Id thisOppId : opportunityIds) {\n　　　oppLineItems.addAll([Select Id FROM OpportunityLineItems WHERE OpportunityId = :thisOppId)]; \n 　} \n return oppLineItems;\n　}\n}\nThe above method might be called during a trigger execution via a Lightning component.\nWhich technique should be implemented to avoid reaching the governor limit?",
      options: [
        "A. Use the System.Limits.getlimitQueries() method to ensure the number of queries is less than 100.",
        "B. Use the System.Limits.getQueries() method to ensure the number of queries is less than 100.",
        "C. Refactor the code above to perform only one SOQL query, filtering by the Set of opportunityIds.",
        "D. Refector the code above to perform the SOQL query only if the Set of opportunityIds contains less 100 Ids.",
      ],
      answer: "C",
      title: "Question 151",
    },
    {
      content:
        'Managers at Universal Containers want to ensure that only decommissioned containers are able to be deleted in the system. To meet the business requirement a Salesforce developer adds "Decommissioned" as a picklist value for the Status__c: custom field within the Contact__c object.Which tool should the developer use to enforce only Container records with a status of "Decommissioned" can be deleted?',
      options: [
        "A. Apex trigger",
        "B. Before record-triggered flow",
        "C. Validation rule",
        "D. After record-triggered flow",
      ],
      answer: "A",
      title: "Question 152",
    },
    {
      content:
        "A developer has created a Visualforce Page and Apex Controller that uses the With Sharing keyword. The page will be used of by Sales Managers and should only display Accounts owned by Sales Representatives who report to the running Sales Manager. The organization-wide sharing for Accounts is set to Private. Which additional set of stops should the developer take?",
      options: [
        "A. Create one Profile, two Permission Sets, and one Role.",
        "B. Create two Profiles, one Permission Set, and one Role.",
        "C. Create one Profile, one Permission Set, and one Role.",
        "D. Create one Profile, one Permission Set, and two Roles.",
      ],
      answer: "D",
      title: "Question 153",
    },
    {
      content:
        "Which statement about change set deployments is accurate? (Choose 3)",
      options: [
        "A. They ca be used to transfer Contact records.",
        "B. They use an all or none deployment model.",
        "C. They require a deployment connection.",
        "D. They can be used only between related organizations.",
        "E. They can be used to deploy custom settings data.",
      ],
      answer: "B,C,D",
      title: "Question 154",
    },
    {
      content:
        "What are two ways a developer can get the status of an enquered job for a class that queueable interface?Choose 2 answers",
      options: [
        "A. View the apex status Page",
        "B. View the apex Jobs page",
        "C. Query the AsyncApexJobe object",
        "D. View the apex flex Queue",
      ],
      answer: "B,C",
      title: "Question 155",
    },
    {
      content: "Manage package can be created in which type of org?",
      options: [
        "A. Partial copy sandbox",
        "B. Developer Edition",
        "C. Developer sandbox",
        "D. Unlimited edition",
      ],
      answer: "B",
      title: "Question 156",
    },
    {
      content:
        "Universal Containers decides to use exclusively declarative development to build out a new Salesforce application. Which three options should be used to build out the database layer for the application? Choose 3 answers",
      options: [
        "A. Custom Objects and Fields",
        "B. Roll-Up Summaries",
        "C. Triggers",
        "D. Process Builder",
        "E. Relationships",
      ],
      answer: "A,B,E",
      title: "Question 157",
    },
    {
      content:
        "A Salesforce Administrator is creating a record-triggered flow. When certain criteria are met, the flow must call an Apex method to execute complex validation involving several types of objects.When creating the Apex method, which annotation should a developer use to ensure the method Can be used within the flow?",
      options: [
        "A. @RemoteAction",
        "B. @AuraEnaled",
        "C. @future",
        "D. @InvocableMethod",
      ],
      answer: "D",
      title: "Question 158",
    },
    {
      content:
        'A developer has two custom controller extensions where each has a save() method.Which save() method will be called for the following Visualforce page?<apex:page standardController ="Account", extensions="ExtensionA, ExtensionB"><apex:commandButton action ="{!save}" value="Save"/></apex:page>',
      options: [
        "A. ExtensionB save()",
        "B. Standard controller save()",
        "C. ExtensionA save()",
        "D. Runtime error will be generated",
      ],
      answer: "D",
      title: "Question 159",
    },
    {
      content:
        "A developer needs to have records with specific field values in order to test a new Apex class.What should the developer do to ensure the data is available to the test?",
      options: [
        "A. UseSOQL to query the org for the required data.",
        "B. Use Anonymous Apex to create the required data.",
        "C. Use Test.Loaddata () and reference a CSV file",
        "D. Use Test.Loaddata () and reference a static resource.",
      ],
      answer: "D",
      title: "Question 160",
    },
    {
      content:
        "A developer wants to retrieve the Contacts and Users with the email address '[email protected]'.Which SOSL statement should the developer use?",
      options: [
        "A. FIND {Email = '[email protected]'} IN Contact, User",
        "B. FIND Email IN Contact, User FOR {dev2uc.com}",
        "C. FIND {Email = '[email protected]'} RETURNING Contact (Email), User (Email)",
        "D. FIND {[email protected]} IN Email Fields RETURNING Contact (Email), User (Email)",
      ],
      answer: "D",
      title: "Question 161",
    },
    {
      content:
        "What should a developer use to implement an automatic Approval Process submission for Cases?",
      options: [
        "A. A Workflow Rule",
        "B. An Assignment Rule",
        "C. Process Builder",
        "D. Scheduled Apex",
      ],
      answer: "C",
      title: "Question 162",
    },
    {
      content:
        "From which 2 locations can a developer determine the overall code coverage for a sandbox?",
      options: [
        "A. The apex test execution page",
        "B. The apex classes setup page",
        "C. The tests tab of the developer console",
        "D. The test suite run panel of the developer console",
      ],
      answer: "B,C",
      title: "Question 163",
    },
    {
      content:
        "To which primitive data type in Apex is a currency field atomically assigned?",
      options: ["A. Currency", "B. Double", "C. Decimal", "D. Integer"],
      answer: "C",
      title: "Question 164",
    },
    {
      content:
        "Which code in a Visualforce page and/or controller might present a security vulnerability?",
      options: [
        'A. <apex:outputField value="{!ctrl.userInput}" />',
        'B. <apex:outputText escape="false" value=" {!$CurrentPage.parameters.userInput}" />',
        'C. <apex:outputText value="{!$CurrentPage.parameters.userInput}" />',
        'D. <apex:outputField escape="false" value="{!ctrl.userInput}" />',
      ],
      answer: "B",
      title: "Question 165",
    },
    {
      content:
        "What should a developer use to fix a Lightning web component bug in a sandbox?",
      options: [
        "A. Execute Anonumous",
        "B. VS Code",
        "C. Force.com IDE",
        "D. Developer Console",
      ],
      answer: "B",
      title: "Question 166",
    },
    {
      content:
        "A developer created a lightning component name accountList.cmp that display a list of Accounts. Client-side logic that is executed when a user hovers over an account in the list should be stored in which bundle member?",
      options: [
        "A. AccountListHelper.js",
        "B. AccountList.helper",
        "C. AccountList.renderer",
        "D. AccountListRenderer.js",
      ],
      answer: "C",
      title: "Question 167",
    },
    {
      content:
        "A developer has JavaScript code that needs to be called by controller functions in multiple Aura components by extending a new abstract component.Which resource in the abstract Aura component bundle allows the developer to achieve this?",
      options: [
        "A. helper.js",
        "B. controllers",
        "C. renderer.js",
        "D. superRender.js",
      ],
      answer: "A",
      title: "Question 168",
    },
    {
      content:
        "Which type of code represents the Model in the MVC architecture when using Apex and Visualforce pages?",
      options: [
        "A. A Controller Extension method that uses SOQL to query for a list of Account records",
        "B. A Controller Extension method that saves a list of Account records",
        "C. A list of Account records returned from a Controller Extension method",
        "D. Custom JavaScript that processes a list of Account records",
      ],
      answer: "C",
      title: "Question 169",
    },
    {
      content:
        "A developer needs to create a baseline set of data (Accounts, Contacts, Products, Assets) for an entire suite of test allowing them to test independent requirements various types of Salesforce Cases.Which approach can efficiently generate the required data for each unit test?",
      options: [
        "A. Add @isTest(seeAllData=true) at the start of the unit test class.",
        "B. Use @TestSetup with a viod method.",
        "C. Create a nock using the Stud API",
        "D. Create test data before Test.startTest() in the unit test.",
      ],
      answer: "B",
      title: "Question 170",
    },
    {
      content:
        "What is a capability of a StandardSetController?Choose 2 answers",
      options: [
        "A. It extends the functionality of a standard or custom controller",
        "B. It allows pages to perform pagination with large record sets",
        "C. It allows pages to perform mass updates of records",
        "D. It enforces field-level security when reading large record sets",
      ],
      answer: "B,C",
      title: "Question 171",
    },
    {
      content:
        "A developer Is Integrating with a legacy on-premise SQL database.What should the developer use to ensure the data being Integrated is matched to the right records in Salesforce?",
      options: [
        "A. External Object",
        "B. Lookup field",
        "C. Formula field",
        "D. External ID field",
      ],
      answer: "D",
      title: "Question 172",
    },
    {
      content:
        "Which two statement are acceptable for a developer to use Inside procedural loops?",
      options: [
        "A. Delete contactList",
        "B. Contact con =new contact()",
        "C. Contactlist.remove(i)",
        "D. Account a=[select id,name from account where id=:con.accountid limit 1]",
      ],
      answer: "B,C",
      title: "Question 173",
    },
    {
      content:
        "A Lightning component has a wired property, searchResults, that stores a list of Opportunities. Which definition of the Apex method, to which the searchResults property is wired, should be used?",
      options: [
        "A. @AuraEnabled(cacheable=false)public static List<Opportunity> search(String term) { /*implementation*/ }",
        "B. @AuraEnabled(cacheable=true)publicList<Opportunity> search(String term) { /*implementation*/ }",
        "C. @AuraEnabled(cacheable=false)public List<Opportunity> search(String term) {/*implementation*/ }",
        "D. @AuraEnabled(cacheable=true)public static List<Opportunity> search(String term) { /* implementation*/ }",
      ],
      answer: "D",
      title: "Question 174",
    },
    {
      content:
        "When using SalesforceDX, what does a developer need to enable to create and manage scratch orgs?",
      options: [
        "A. Production",
        "B. Environment Hub",
        "C. Sandbox",
        "D. Dev Hub",
      ],
      answer: "D",
      title: "Question 176",
    },
    {
      content:
        "What must the Controller for a Visulforce page utilized to override the standard Opportunity view button?",
      options: [
        "A. The StandardSetController to support related lists for pagination",
        "B. The Opportunity StandardController for pre-built functionality",
        "C. A callback constructor to reference the StandardController",
        "D. A constructor that initialized a private Opportunity variable.",
      ],
      answer: "B",
      title: "Question 177",
    },
    {
      content:
        "A developer needs to implement the functionality for a service agent to gather multiple pieces of information from a customer in order to send a replacement credit card.\nWhich automation tool meets these requirements?",
      options: [
        "A. Flow Builder",
        "B. Lightning Component ",
        "C. Process Builder ",
        "D. Approval Process",
      ],
      answer: "A",
      title: "Question 178",
    },
    {
      content:
        'A developer uses a loop to check each Contact in a list. When a Contact with the Title of"Boss" is found, the Apex method should jump to the first line of code outside of the for loop.Which Apex solution will let the developer implement this requirement?',
      options: ["A. Continue", "B. break;", "C. Next", "D. Exit"],
      answer: "B",
      title: "Question 179",
    },
    {
      content:
        'Universal Container(UC) wants to lower its shipping cost while making the shipping process more efficient. The Distribution Officer advises UC to implement global addresses to allow multiple Accounts to share a default pickup address. The Developer is tasked to create the supporting object and relationship for this business requirement and uses the Setup Menu to create a custom object called "Global Address". Which field should the developer ad to create the most efficient model that supports the business need?',
      options: [
        "A. Add a Lookup field on the Account object to the Global Address object.",
        "B. Add a Lookup field on the Global Address object to the Account object",
        "C. Add a Master-Detail field on the Account object to the Global Address object",
        "D. Add a Master-Detail field on the Global Address object to the Account object.",
      ],
      answer: "A",
      title: "Question 180",
    },
    {
      content:
        "A developer writes a before insert trigger.How can the developer access the incoming records in the trigger body?",
      options: [
        "A. By accessing the Trigger.newRecords context variable.",
        "B. By accessing the Trigger.newMap context variable.",
        "C. By accessing the Trigger.new context variable.",
        "D. By accessing the Tripper.newList context variable.",
      ],
      answer: "C",
      title: "Question 181",
    },
    {
      content:
        "A developer needs to provide a Visualforce page that lets users enter Product-specific details during a Sales cycle. How can this be accomplished? (Choose 2)",
      options: [
        "A. Create a new Visualforce page and an Apex controller to provide Product data entry.",
        "B. Copy the standard page and then make a new Visualforce page for Product data entry.",
        "C. Download an Unmanaged Package from the AppExchange that provides a custom Visualforce page to modify.",
        "D. Download a Managed Package from the AppExhange that provides a custom Visualforce page to modify.",
      ],
      answer: "A,C",
      title: "Question 182",
    },
    {
      content:
        "How would a developer change the field type of a custom field on the Account object from string to an integer?",
      options: [
        "A. Mate the change in the declarative UI, then update the field type to an integer field in the Apex code.",
        "B. Make the changes in the developer console, and then the change will automatically be reflected in the Apex code.",
        "C. Make the change in the declarative UI, an then the change will automatically be reflected in the Apex code.",
        "D. Remove all references in the code, make the change in the declarative UI, and restore the references with the new type.",
      ],
      answer: "D",
      title: "Question 183",
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
      title: "Question 184",
    },
    {
      content:
        "A developer is asked to create a Visualforce page that displays some Account fields as well as fields configured on the page layout for related Contacts.How should the developer implement this request?",
      options: [
        "A. Use the <apex:include> tag.",
        "B. Create a controller extension.",
        "C. Use the <apex:relatedList> tag.",
        "D. Add a method to the standard controller.",
      ],
      answer: "C",
      title: "Question 185",
    },
    {
      content:
        "A developer needs to create a custom button for the Account object that, when clicked, will perform a series of calculations and redirect the user to a custom Visualforce page. The developer wants to ensure the Visualforce page matches the Lightning Experience user interface.What attribute needs to be defined within the <apex:page> tag to meet the requirement?",
      options: [
        'A. wizard=true"',
        'B. applyHtmlTag="true"',
        'C. setup="true"',
        "D. lightningStylesheets=''true\"",
      ],
      answer: "D",
      title: "Question 186",
    },
    {
      content:
        "What is a benefit of using an after insert trigger over using a before insert trigger?",
      options: [
        "A. An after insert trigger allows a developer to make a callout to an external service.",
        "B. An after insert trigger allows a developer to modify fields in the new record without a query.",
        "C. An after insert trigger allows a developer to bypass validation rules when updating fields on the new record.",
        "D. An after insert trigger allows a developer to insert other objects that reference the new record.",
      ],
      answer: "D",
      title: "Question 187",
    },
    {
      content:
        "What are two ways a developer can get the status of an enquered job for a class that queueable interface?Choose 2 answers",
      options: [
        "A. Query the AsyncApexJob object",
        "B. View the apex Jobs page",
        "C. View the apex flex Queue",
        "D. View the apex status Page",
      ],
      answer: "A,B",
      title: "Question 188",
    },
    {
      content:
        "Which two platform features allow for the use of unsupported languages? Choose 2 answers",
      options: ["A. Docker", "B. Heroku Acm", "C. App.json", "D. Buildpacks"],
      answer: "A,D",
      title: "Question 190",
    },
    {
      content:
        "Which annotation exposes an Apex class as a RESTful web service?",
      options: [
        "A. ©Remote Action",
        "B. ©Httplnvocable",
        "C. ©RestResource",
        "D. ©AuraEnabled",
      ],
      answer: "C",
      title: "Question 191",
    },
    {
      content:
        "A developer writes a single trigger on the Account object on the after insert and after update events. A workflow rule modifies a field every time an Account is created or updated.How many times will the trigger fire if a new Account is inserted, assuming no other automation logic is implemented on the Account?",
      options: ["A. 4", "B. 8", "C. 2", "D. 1"],
      answer: "C",
      title: "Question 192",
    },
    {
      content:
        "To which primitive data type is a text area (rich) field automatically assigned?",
      options: ["A. Blob", "B. Object", "C. Text", "D. String"],
      answer: "D",
      title: "Question 193",
    },
    {
      content:
        "A developer wrote a unit test to confirm that a custom exception works properly in a custom controller, but the test failed due to an exception being thrown. What step should the developer take to resolve the issue and properly test the exception?",
      options: [
        "A. Use database methods with all or none set to FALSE.",
        "B. Use Test.isRunningTest() within the customer controller.",
        "C. Use the finally block within the unit test to populate the exception.",
        "D. Use try/catch within the unit test to catch the exception.",
      ],
      answer: "D",
      title: "Question 194",
    },
    {
      content:
        "Universal Containers stores Orders and Line Items in Salesforce. For security reason, financial representatives are allowed to see information on the Order such as order amount, but they are not allowed to see the Line items on the Order. Which type of relationship should be used?",
      options: [
        "A. Indirect lookup",
        "B. Lookup",
        "C. Master Detail",
        "D. Direct Lookup",
      ],
      answer: "B",
      title: "Question 195",
    },
    {
      content:
        "A developer has the controller class below.Which code block will run successfully in an execute anonymous window?",
      options: [
        "A. myFooController m = new myFooController();System.assert(m.prop ==null);",
        "B. myFooController m = new myFooController();System.assert(m.prop !=null);",
        "C. myFooController m = new myFooController();System.assert(m.prop ==0);",
        "D. myFooController m = new myFooController();System.assert(m.prop ==1);",
      ],
      answer: "A",
      title: "Question 196",
    },
    {
      content:
        'An after trigger on the Account object performs a DML update operation on all of the child Opportunities of an Account. There are no active triggers on the Opportunity object, yet a "maximum trigger depth exceeded" error occurs in certain situations.Which two reasons possibly explain the Account trigger firing recursively? (Choose two.)',
      options: [
        "A. Changes to Opportunities arecausing cross-object workflow field updates to be made on the Account.",
        "B. Changesare being made to the Account during Criteria Based Sharing evaluation.",
        "C. Changes are being made to the Account during an unrelated parallel save operation.",
        "D. Changes to Opportunities are causing roll-up summary fields to update on the Account.",
      ],
      answer: "A,D",
      title: "Question 197",
    },
    {
      content:
        "A developer has a VF page and custom controller to save Account records. The developer wants to display any validation rule violation to the user. How can the developer make sure that validation rule violations are displayed?",
      options: [
        "A. Include <apex:messages> on the Visualforce page.",
        "B. Perform the DML using the Database.upsert() method",
        "C. Use a try/catch with a custom exception class.",
        "D. Add custom controller attributes to display the message.",
      ],
      answer: "A",
      title: "Question 198",
    },
    {
      content:
        "An Approval Process is defined In the Expense__item__c object. A business rule dictates that whenever a ... clients the Status to Submitted on an Expense_Item__c record related to the expense report must enter the approval process individually.A developers asked to explore if this automation can be implemented without writing any Apex code.Which statement is true regarding this automation request?",
      options: [
        "A. The developer can use Einstein Next Best Actions",
        "B. This approval step cannot be automated and must be done manually.",
        "C. This can only be automated with Apex code.",
        "D. The developer can use a record triggered flow with Actions.",
      ],
      answer: "C",
      title: "Question 199",
    },
    {
      content:
        "In the following example, which sharing context will myMethod execute when it is invoked?",
      options: [
        "A. Sharing rules will be inherited from the calling context.",
        "B. Sharing rules Ml be enforced for the running user.",
        "C. Sharing rules Ail be enforced by the instantiating class",
        "D. Sharing rules will not be enforced for the running user.",
      ],
      answer: "A",
      title: "Question 200",
    },
    {
      content: "Which exception type cannot be caught?",
      options: [
        "A. LimitException",
        "B. NoAccessException",
        "C. CalloutException",
        "D. Custom Exception",
      ],
      answer: "A",
      title: "Question 201",
    },
    {
      content:
        "Which three statements are true regarding the @istest annotation? Choose 3 answers",
      options: [
        "A. Products and pricebooks are visible in a test even if a class is annotated @istest (seealldata=false)",
        "B. A class containing test methods counts toward the apex code liit regardless of any @istest annotation",
        "C. Profiles are visible in a test even if a class is annotated @istest (seealldata=false)",
        "D. A method annotated @istest (seealldata=false) in a class annotated @istest (seealladata=true) has access to all org data",
        "E. A method annotated @istest (seealldata=true) in a class annotated @istest (seealladata=false) has access to all org data",
      ],
      answer: "B,C,D",
      title: "Question 202",
    },
    {
      content:
        "A developer has javascript code that needs to be called by controller functions in multiple components by extending a new abstract component. Which resource in the abstract component bundle allows the developer to achieve this",
      options: [
        "A. Rendered.js",
        "B. Superrender.js",
        "C. Helper.js",
        "D. Controller.js",
      ],
      answer: "C",
      title: "Question 203",
    },
    {
      content:
        "How many levels of child records can be returned in a single SOQL query from one parent object?",
      options: ["A. 5", "B. 1", "C. 7", "D. 3"],
      answer: "B",
      title: "Question 204",
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
      title: "Question 205",
    },
    {
      content:
        "To which data type in Apex a currency field automatically assigned?",
      options: ["A. Integer", "B. Currency", "C. Decimal", "D. Double"],
      answer: "C",
      title: "Question 206",
    },
    {
      content:
        "Which feature should a developer use to update an inventory count on related Product records when the status of an Order is modified to indicate it is fulfilled?",
      options: [
        "A. Lightning component",
        "B. Process Builder process",
        "C. Visualforce page",
        "D. Workflow rule",
      ],
      answer: "B",
      title: "Question 207",
    },
    {
      content:
        "Universal Container uses Service Cloud with a custom field, stage_c, on the Case object.Management wants to send a follow-up email reminder 6 hours after the stage_c field is set to '';Waiting on customer'' The .... Administrator wants to ensure the solution used is bulk safe.Which two automation tools should a developer recommend to meet these business requirements?Choose 2 answers",
      options: [
        "A. Record_Triggered Flow",
        "B. Scheduled Flow",
        "C. Process Builder",
        "D. Einstein Next Best Action",
      ],
      answer: "A,B",
      title: "Question 208",
    },
    {
      content:
        "An Apex method, getAccounts, that returns a List of Accounts given a searchTerm, is available for Lightning Web components to use.What is the correct definition of a Lightning Web component property that uses the getAccounts method?",
      options: [
        "A. @wire(getAccounts, {searchTerm: '$searchTerm'})\naccountList;",
        "B. @AuraEnabled(getAccounts,'$searchTerm')\naccountList;",
        "C. @AuraEnabled(getAccounts, {searchTerm:'$searchTerm'})\naccountList;",
        "D. @wire(getAccounts, '$searchTerm')\naccountList;",
      ],
      answer: "C",
      title: "Question 209",
    },
    {
      content:
        "As a part of class implementation a developer must execute a SOQL query against a large data ser based on the contact object. The method implementation is as follows.Which two methods are best practice to implement heap size control for the above code? (Choose 2 Answers)",
      options: [
        "A. Use the FOR UPDATE option on the SOQL query to lock down the records retrieved.",
        "B. Use WHERE clauses on the SOQL query to reduce the number of records retrieved.",
        "C. Use a SOQL FOR loop, to chunk the result set in batches of 200 records.",
        "D. Use visual keyword when declaring the retrieve variable.",
      ],
      answer: "B,C",
      title: "Question 211",
    },
    {
      content:
        "A Visual Flow uses an apex Action to provide additional information about multiple Contacts, stored in a custom class, contactInfo. Which is the correct definition of the Apex method that gets additional information?",
      options: [
        "A. @InvocableMethod(label='additional Info')public static ContactInfo getInfo(Id contactId){ /*implementation*/ }",
        "B. @InvocableMethod(label='Additional Info')public List<ContactInfo> getInfo(List<Id> contactIds){ /*implementation*/ }",
        "C. @InvocableMethod(Label='additional Info')public ContactInfo(Id contactId){ /*implementation*/ }",
        "D. @invocableMethod(label)='Additional Info')public static List<ContactInfo> getInfo(List<Id> contactIds){ /*Implementation*/ }",
      ],
      answer: "D",
      title: "Question 212",
    },
    {
      content:
        "A third-party vendor created an unmanaged Lightning web component. The Salesforce Administrator wishes to expose the component only on Record Page Layouts.Which two actions should the developer take to accomplish this business objective?Choose 2 answers",
      options: [
        "A. Ensure isExposed is set to true on the XML file.",
        "B. Specify lightningCommunity_Page as a target in the XML file.",
        "C. Specify lightningCommunity_Page_Layout as a target in the XML file.",
        "D. Specify lightning_RecordPage as a target in the XML file.",
      ],
      answer: "A,D",
      title: "Question 213",
    },
    {
      content: "Which action may cause triggers to fire?",
      options: [
        "A. Updates to Feed Items",
        "B. Renaming or replacing a picklist entry",
        "C. Cascading delete operations",
        "D. Changing a user's default division when the transfer division option is checked",
      ],
      answer: "A",
      title: "Question 214",
    },
    {
      content:
        "Universal Containers (UC) uses a custom object called Vendor. The Vendor custom object has a Master-Detail relationship with the standard Account object. Based on some internal discussion, the UC administrator tried to change the Master-Detail relationship to a Lookup relationship but was not able to do so. What is a possible reason that this change was not permitted?",
      options: [
        "A. The Account records contain Vendor roll-up summary fields.",
        "B. The Vendor records have existing values in the Account object.",
        "C. The Vendor object must use a Master-Detail field for reporting.",
        "D. The Account object is included on a workflow on the Vendor object.",
      ],
      answer: "A",
      title: "Question 215",
    },
    {
      content:
        "Which two are phases in the Salesforce Application Event propagation framework? Choose2 answers",
      options: ["A. Bubble", "B. Default", "C. Capture"],
      answer: "B,C",
      title: "Question 216",
    },
    {
      content:
        "Which statement should a developer avoid using inside procedural loops? (Choose 2)",
      options: [
        "A. System.debug('Amount of CPU time (in ms) used so far: ' + Limits.getCpuTime() );",
        "B. Update contactList;",
        "C. List contacts = [SELECT Id, Salutation, FirstName, LastName, Email FROM Contact WHERE AccountId = :a.Id];",
        "D. If(o.accountId == a.id)",
      ],
      answer: "B,C",
      title: "Question 217",
    },
    {
      content:
        "Universal Containers wants a list button to display aVisualforce page that allows users to edit multiple records.which Visualforce feature supports this requirement?",
      options: [
        "A. Controller extension",
        "B. <apex:listButton> tag",
        "C. RecordSetVar page attribute",
        "D. Custom controller",
      ],
      answer: "C",
      title: "Question 218",
    },
    {
      content: "What is the result of the following Classes page?",
      options: [
        "A. View the Class test Coverage tab on the Apex Class record.",
        "B. view the overall Code Coverage panel of the tab in the Developer Console.",
        "C. View the Code Coverage column in the view on the Apex Classes page.",
        "D. Select and run the class on the Apex Test Execution page",
      ],
      answer: "A",
      title: "Question 220",
    },
    {
      content:
        "A Visual force page displays two fields named Phone Number and Email.User1 has access to Phone Number, but not to Email.User2 has access to Email, but not Phone NumberA developer needs to ensure that User1 can only see Phone Number, and User2 can only see Email.Which method can the developer use to achieve this?",
      options: [
        "A. Schema isUpdateable() method.",
        "B. Schema isAccessible() method.",
        "C. Schema isCreateable() method.",
        "D. Schema isReadable() method.",
      ],
      answer: "B",
      title: "Question 221",
    },
    {
      content:
        "Get Cloudy Consulting (GCC) has a multitude of servers that host its customers' websites. GCC wants to provide a servers status page that is always on display in its call center. It should update in real time with any changes made to any servers. To accommodate this on the server side, a developer created a server Update platform event.The developer is working on a Lightning web component to display the information.",
      options: [
        "A. import ( subscribe, unsubscribe, onError ) from 'lightning/pubsub'",
        "B. import ( subscribe, unsubscribe, onError ) from 'lightning/empApi '",
        "C. import ( subscribe, unsubscribe, onError ) from 'lightning/ServerUpdate'",
        "D. import (subscribe, unsubscribe, onError ) from 'lightning/MessageChannel'",
      ],
      answer: "B",
      title: "Question 222",
    },
    {
      content:
        "A developer is migrating a Visualforce page into a Lightning web component. The Visualforce page shows information about a single record. The developer decides to use Lightning DataService to access record data. Which security consideration should the developer be aware of?",
      options: [
        "A. The with sharing keyword must be used to enforce sharing rules.",
        "B. Lightning Data Service ignores field-level security.",
        "C. Lightning Data Service handles sharing rules and field-level security.",
        "D. The isAccessible ( ) method must be used for field-level access checks",
      ],
      answer: "C",
      title: "Question 223",
    },
    {
      content:
        "A developer created a Lightning component to display a short text summary for an object and wants to use it with multiple Apex classes.How should the developer design the Apex classes?",
      options: [
        "A. Have each class implement an interface that defines method getTextSummary() that returns the summary.",
        "B. Extend each class from the same base class that has a method getTextSummary() that returns the summary.",
        "C. Have each class define method getTextSummary() that returns the summary.",
        "D. Have each class define method getObject() that returns the sObject that is controlled by the Apex class.",
      ],
      answer: "A",
      title: "Question 224",
    },
    {
      content:
        "What is the requirement for a class to be used as a custom Visualforce controller?",
      options: [
        "A. Any top-level Apex class that has a constructor that returns a PageReference",
        "B. Any top-level Apex class that implements the controller interface",
        "C. Any top-level Apex class that has a default, no-argument constructor",
        "D. Any top-level Apex class that extends a PageReference",
      ],
      answer: "B",
      title: "Question 225",
    },
    {
      content:
        "Which type of code represents the Model in the MVC architecture on the Force.com platform?",
      options: [
        "A. A list of Account records returned from a Controller Extension method",
        "B. Custom JavaScript that processes a list of Account records.",
        "C. A Controller Extension method that uses SOQL to query for a list of Account records",
        "D. A Controller Extension method that saves a list of Account records",
      ],
      answer: "A",
      title: "Question 227",
    },
    {
      content:
        "What is an important consideration when developing in a multi-tenant environment?",
      options: [
        "A. Governor limits prevent tenants from impacting performance in multiple orgs on the same instance.",
        "B. Polyglot persistence provides support for a global, multilingual user base in multiple orgs on multiple instances.",
        "C. Org-wide data security determines whether other tenants can see data in multiple orgs on the same instance.",
        "D. Unique domain names take the place of namespaces for code developed for multiple orgs on multiple instances.",
      ],
      answer: "A",
      title: "Question 229",
    },
    {
      content:
        "A developer created a Visualforce page and a custom controller with methods to handle different buttons and events that can occur on the page.What should the developer do to deploy to production?",
      options: [
        "A. Create a test page that provides coverage of the Visualforce page.",
        "B. Create a test class that provides coverage of the Visualforce page.",
        "C. Create a test page that provides coverage of the custom controller.",
        "D. Create a test class that provides coverage of the custom controller.",
      ],
      answer: "D",
      title: "Question 230",
    },
  ],
});
