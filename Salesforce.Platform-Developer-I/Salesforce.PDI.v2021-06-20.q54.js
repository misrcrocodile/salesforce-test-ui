window.testContent = window.testContent || [];
var testId = "Salesforce.Platform-Developer-I";
var testName = "Salesforce.Platform-Developer-I";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "Salesforce.Platform-Developer-I.v2021-06-20.q54",
  content: [
    {
      content:
        "Which three steps allow a custom SVG to be included in a Lightning web component? Choose 3 answers",
      options: [
        "A. Import the SVG as a content asset file.",
        "B. Upload the SVG as a static resource.",
        "C. Reference the import in the HTML template.",
        "D. Import the static resource and provide a getter for it in JavaScript.",
        "E. Reference the getter in the HTML template.",
      ],
      answer: "B,D,E",
      title: "Question 1",
    },
    {
      content:
        "A developer needs to create a baseline set of data (Accounts, Contacts, Products, Assets) for an entire suite of test allowing them to test independent requirements various types of Salesforce Cases. Which approach can efficiently generate the required data for each unit test?",
      options: [
        "A. Create a nock using the Stud API",
        "B. Create test data before Test.startTest() in the unit test.",
        "C. Use @TestSetup with a viod method.",
        "D. Add @isTest(seeAllData=true) at the start of the unit test class.",
      ],
      answer: "C",
      title: "Question 2",
    },
    {
      content:
        "A Next Best Action strategy uses an Enchance Element that invokes an Apex method to determine a discount level for a Contact, based on a number of factors. What is the correct definition of the Apex method?",
      options: [
        "A. @InvocableMethodglobal static ListRecommendation getLevel(List<ContactWrapper> input){ /*implementation*/ }",
        "B. @InvocableMethodglobal Recommendation getLevel (ContactWrapper input){ /*implementation*/ }",
        "C. @InvocableMethodglobal List<List<Recommendation>> getLevel(List<ContactWrapper> input){ /*implementation*/ }",
        "D. @InvocableMethodglobal static List<List<Recommendation>> getLevel(List<ContactWrapper> input){ /*implementation*/ }",
      ],
      answer: "D",
      title: "Question 3",
    },
    {
      content:
        "A developer has an integer variable called maxAttempts. The developer meeds to ensure that once maxAttempts is initialized, it preserves its value for the lenght of the Apex transaction; while being able to share the variable's state between trigger executions. How should the developer declare maxAttempts to meet these requirements?",
      options: [
        "A. Declare max attempts as a constant using the static and final keywords",
        "B. Declare max attempts as a variable on a helper class",
        "C. Declare max attempts as a private static variable on a helper class",
        "D. Declare max attempts as a member variable on the trigger definition.",
      ],
      answer: "C",
      title: "Question 4",
    },
    {
      content: "What can used to delete components from production?",
      options: [
        "A. A change set deployment with a destructivechanges XML file",
        "B. An ant migration tool deployment with a destructivechanges XML file and an empty package .xml file",
        "C. A change set deployment with the delete option checked",
        "D. An ant migration tool deployment with destructivechanges xml file and the components to delete in the package .xml file",
      ],
      answer: "B",
      title: "Question 5",
    },
    {
      content:
        "A developer writes a trigger on the Account object on the before update event that increments a count field. A workflow rule also increments the count field every time that an Account is created or updated. The field update in the workflow rule is configured to not re-evaluate workflow rules. What is the value of the count field if an Account is inserted with an initial value of zero, assuming no other automation logic is implemented on the Account?",
      options: ["A. 3", "B. 2", "C. 1", "D. 4"],
      answer: "B",
      title: "Question 6",
    },
    {
      content:
        "A developer considers the following snippet of code:\nBoolean isOK;\nInteger x;\nString theString = 'Hello';\nif (isOK == false && theString == 'Hello') {\n x = 1;\n} else if (isOK == true && theString =='Hello') {\n　x = 2;\n} else if (isOK != null && theString == 'Hello') {\n　x = 3;\n} else {\n　x = 4;\n}\nBased on this code, what is the value of x?",
      options: ["A. 4", "B. 2", "C. 3", "D. 1"],
      answer: "A",
      title: "Question 7",
    },
    {
      content:
        "A developer is asked to create a Visualforce page that displays some Account fields as well as fields configured on the page layout for related Contacts. How should the developer implement this request?",
      options: [
        "A. Add a method to the standard controller.",
        "B. Use the <apex:include> tag.",
        "C. Create a controller extension.",
        "D. Use the <apex:relatedList> tag.",
      ],
      answer: "D",
      title: "Question 8",
    },
    {
      content:
        "Universal Containers stores the availability date on each Line Item of an Order and Orders are only shipped when all of the Line Items are available. Which method should be used to calculate the estimated ship date for an Order?",
      options: [
        "A. Use a DAYS formula on each of the availability date fields and a COUNT Roll-Up Summary field on the Order.",
        "B. Use a LATEST formula on each of the latest availability date fields.",
        "C. Use a Max Roll-Up Summary field on the Latest availability date fields.",
        "D. Use a CEILING formula on each of the Latest availability date fields.",
      ],
      answer: "C",
      title: "Question 9",
    },
    {
      content:
        "What are two ways a developer can get the status of an enquered job for a class that queueable interface? Choose 2 answers",
      options: [
        "A. View the apex status Page",
        "B. Query the AsyncApexJob object",
        "C. View the apex flex Queue",
        "D. View the apex Jobs page",
      ],
      answer: "B,D",
      title: "Question 10",
    },
    {
      content:
        "Universal Containers stores Orders and Line Items in Salesforce. For security reason, financial representatives are allowed to see information on the Order such as order amount, but they are not allowed to see the Line items on the Order. Which type of relationship should be used?",
      options: [
        "A. Indirect lookup",
        "B. Direct Lookup",
        "C. Master Detail",
        "D. Lookup",
      ],
      answer: "D",
      title: "Question 11",
    },
    {
      content:
        "A developer must troubleshoot to pinpoint the causes of performance issues when a custom page loads in their org. Which tool should the developer use to troubleshoot?",
      options: [
        "A. Visual Studio Core IDE",
        "B. AppExchange",
        "C. Developer Console",
        "D. Salesforce CLI",
      ],
      answer: "C",
      title: "Question 12",
    },
    {
      content:
        "A developer has a Visualforce page and custom controller to save Account records. The developer wants to display any validation rule violation to the user. How can the developer make sure that validation rule violations are displayed?",
      options: [
        "A. Perform the DML using the Database.upsert() method.",
        "B. Use a try/catch with a custom exception class.",
        "C. Include <apex:message> on the Visualforce page.",
        "D. Add cuatom controller attributes to display the message.",
      ],
      answer: "C",
      title: "Question 13",
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
      answer: "C",
      title: "Question 14",
    },
    {
      content:
        "A developer needs to create a custom button for the Account object that, when clicked, will perform a series of calculation and redirect the user to a custom visualforce page. Which three attributes need to be defined with values in the <apex:page> tag to accomplish this? Choose 3 answers",
      options: [
        "A. readOnly",
        "B. extensions",
        "C. renderAs",
        "D. Action",
        "E. standard Controller",
      ],
      answer: "B,D,E",
      title: "Question 15",
    },
    {
      content:
        "Which aspect of Apex programming is limited due to multitenancy?",
      options: [
        "A. The number of records returned from database queries",
        "B. The number of records processed in a loop",
        "C. The number of methods in an Apex Class",
        "D. The number of active Apex classes",
      ],
      answer: "A",
      title: "Question 16",
    },
    {
      content:
        "Universal Container use a simple order Management app. On the Order Lines, the order line total is calculated by multiplying the item price with the quantity ordered. There is a Master-Detail relationship between the Order and the Order Lines object. What is the practice to get the sum of all order line totals on the order header?",
      options: [
        "A. Declarative Roll-Up Summaries App",
        "B. Apex Trigger",
        "C. Roll-Up Summary Field",
        "D. Process Builder",
      ],
      answer: "C",
      title: "Question 17",
    },
    {
      content:
        "Universal Containers (UC) uses a custom object called Vendor. The Vendor custom object has a Master-Detail relationship with the standard Account object. Based on some internal discussion, the UC administrator tried to change the Master-Detail relationship to a Lookup relationship but was not able to do so. What is a possible reason that this change was not permitted?",
      options: [
        "A. The Vendor object must use a Master-Detail field for reporting.",
        "B. The Account records contain Vendor roll-up summary fields.",
        "C. The Account object is included on a workflow on the Vendor object.",
        "D. The Vendor records have existing values in the Account object.",
      ],
      answer: "B",
      title: "Question 18",
    },
    {
      content:
        'When a user edits the Postal Code on an Account, a custom Account text field named "Timezone" must be update based on the values in a PostalCodeToTimezone__c custom object. How should a developer implement this feature?',
      options: [
        "A. Build an Account Assignment Rule.",
        "B. Build an Account custom Trigger.",
        "C. Build an Account Workflow Rule.",
        "D. Build an account Approval Process",
      ],
      answer: "B",
      title: "Question 19",
    },
    {
      content:
        "What is the order of operations when a record is saved in Salesforce?",
      options: [
        "A. Triggers, workflow, process flows, commit",
        "B. Workflow, triggers, process flows, commit",
        "C. Process flows, triggers, workflow, commit",
        "D. Workflow, process flows, triggers, commit",
      ],
      answer: "A",
      title: "Question 20",
    },
    {
      content:
        'A developer uses a loop to check each Contact in a list. When a Contact with the Title of"Boss" is found, the Apex method should jump to the first line of code outside of the for loop. Which Apex solution will let the developer implement this requirement?',
      options: ["A. Exit", "B. break;", "C. Continue", "D. Next"],
      answer: "B",
      title: "Question 21",
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
      title: "Question 23",
    },
    {
      content:
        "The sales management team at Universal Containers requires that the Lead Source field of the Lead record be populated when a Lead is converted. What should be used to ensure that a user populates the Lead Source field prior to converting a Lead?",
      options: [
        "A. Process Builder",
        "B. workflow Rule",
        "C. Formula Field",
        "D. Validation Rule",
      ],
      answer: "D",
      title: "Question 24",
    },
    {
      content:
        "Given the following block code: try{ List <Accounts> retrievedRecords = [SELECT Id FROM Account WHERE Website = null]; }catch(Exception e){ //manage exception logic } What should a developer do to ensure the code execution is disrupted if the retrievedRecordslist remains empty after the SOQL query?",
      options: [
        "A. Replace the retrievedRecords variable declaration from a List of Account to a single Account.",
        "B. Check the state of the retrievedRecords variable and access the first element of the list if the variable is empty.",
        "C. Check the state of the retrieveRecords variable and throw a custom exception if the variable is empty.",
        "D. Check the state of the retrievedRecords variable and use System.assert(false) if the variable is empty",
      ],
      answer: "D",
      title: "Question 25",
    },
    {
      content:
        "What is the result of the following code?\nAccount a = new Account ();\nDatabase.insert (a, false);\n",
      options: [
        "A. The record will not be created and a exception will be thrown.",
        "B. The record will be created and no error will be reported.",
        "C. The record will be created and a message will be in the debug log.",
        "D. The record will not be created and no error will be reported.",
      ],
      answer: "B",
      title: "Question 26",
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
      title: "Question 27",
    },
    {
      content:
        "A developer wants to import 500 Opportunity records into a sandbox. Why should the developer choose to use data Loader instead of Data Import Wizard?",
      options: [
        "A. Data Loader automatically relates Opportunities to Accounts.",
        "B. Data Import Wizard can not import all 500 records.",
        "C. Data Loader runs from the developer's browser.",
        "D. Data Import Wizard does not support Opportunities.",
      ],
      answer: "D",
      title: "Question 28",
    },
    {
      content:
        "A Lightning component has a wired property, searchResults, that stores a list of Opportunities. Which definition of the Apex method, to which the searchResults property is wired, should be used?",
      options: [
        "A. @AuraEnabled(cacheable=false)public static List<Opportunity> search(String term) { /*implementation*/ }",
        "B. @AuraEnabled(cacheable=false)public List<Opportunity> search(String term) { /*implementation*/ }",
        "C. @AuraEnabled(cacheable=true)public List<Opportunity> search(String term) { /*implementation*/ }",
        "D. @AuraEnabled(cacheable=true)public static List<Opportunity> search(String term) { /* implementation*/ }",
      ],
      answer: "D",
      title: "Question 29",
    },
    {
      content: "Which code displays the content of Visualforce page as PDF?",
      options: [
        "A. <apex:page contentype '' application/pdf'')",
        "B. <apex:page readeras'' application/pdf''>",
        "C. <apex:page readerAs= ''application/pdf''>",
        'D. <apex:page renderAs="pdf">',
      ],
      answer: "D",
      title: "Question 30",
    },
    {
      content:
        "What are three techniques that a developer can use to invoke an anonymous block of code? (Choose three.)",
      options: [
        "A. Type code into the Developer Console and execute it directly.",
        "B. Create a Visualforce page that uses a controller class that is declared without sharing.",
        "C. Run code using the Anonymous Apex feature of the Developer's IDE.",
        "D. Use the SOAP API to make a call to execute anonymous code.",
        "E. Create and execute a test method that does not specify a runAs() call.",
      ],
      answer: "A,C,D",
      title: "Question 31",
    },
    {
      content:
        "A developer needs to save a List of existing Account records named myAccounts to the database, but the records do not contain Salesforce Id values. Only the value of a custom text field configured as an External ID with an API name of Foreign_Key__c is known. Which two statements enable the developer to save the records to the database without an Id? (Choose two.)",
      options: [
        "A. Database.upsert (myAccounts, Foreign_Key__c);",
        "B. Upsert myAccounts Foreign_Key__c;",
        "C. Upsert myAccounts(Foreign_Key__c);",
        "D. Database.upsert(myAccounts).Foreign_Key__c;",
      ],
      answer: "A,B",
      title: "Question 32",
    },
    {
      content:
        "How should a developer write unit tests for a private method in an Apex class?",
      options: [
        "A. Mark the Apex class as global.",
        "B. Use the SeeAllData annotation.",
        "C. Add a test method in the Apex class.",
        "D. Use the TestVisible annotation.",
      ],
      answer: "D",
      title: "Question 33",
    },
    {
      content:
        "Given the following trigger implementation:\ntrigger leadTrigger on Lead (before update){\n　final ID BUSINESS_RECORDTYPEID = '012500000009Qad';\n　for(Lead thisLead : Trigger.new)　{\n　　if(thisLead.Company != null &&thisLead.RecordTypeId != BUSINESS_RECORDTYPEID)　{\n　　　thisLead.RecordTypeId = BUSINESS_RECORDTYPEID;\n　　}\n　}\n} \nThe developer receives deployment errors every time a deployment is attempted from Sandbox to Production. What should the developer do to ensure a successful deployment?",
      options: [
        "A. Ensure a record type with an ID of BUSINESS_RECORDTYPEID exists on Production prior to deployment.",
        "B. Ensure BUSINESS_RECORDTYPEID is retrieved using Schema.Describe calls.",
        "C. Ensure BUSINESS_RECORDTYPEIDis pushed as part of the deployment components.",
        "D. Ensure the deployment is validated by a System Admin user on Production.",
      ],
      answer: "A",
      title: "Question 34",
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
      title: "Question 35",
    },
    {
      content:
        "Which code displays the contents of a Visualforce page as a PDF?",
      options: [
        'A. <apex:page contentType="pdf">',
        'B. <apex:page rendersAs="application/pdf">',
        'C. <apex:page contentType="application/pdf">',
        'D. <apex:page renderAs="pdf">',
      ],
      answer: "D",
      title: "Question 36",
    },
    {
      content:
        "A developer has the following requirements:Calculate the total amount on an Order.Calculate the line amount for each Line Item based on quantity selected and price.Move Line Items to a different Order if a Line Item is not stock. Which relationship implementation supports these requirements?",
      options: [
        "A. Order has a Lookup field to Line Item and there can be many Line Items per Order.",
        "B. Line Item has a Lookup field to Order and there can be many Line Items per Order",
        "C. Line Items has a Master-Detail field to Order and the Master can be re-parented.",
        "D. Order has a Master-Detail field to Line Item and there can be many Line Items per Order.",
      ],
      answer: "C",
      title: "Question 37",
    },
    {
      content:
        "Assuming that 'name; is a String obtained by an <apex:inputText> tag on a Visualforce page. Which two SOQL queries performed are safe from SOQL injections? Choose 2 answers",
      options: [
        "A. String query = 'SELECT Id FROM Account WHERE Name LIKE \\''%' +String.escapeSingleQuotes(name) + '%\\'';List<Account> results = Database.query(query);",
        "B. String query = 'SELECT Id FROM Account WHERE Name LIKE \\''%' + name.noQuotes() + '%\\''; List<Account> results = Database.query(query);",
        "C. String query = 'SELECT Id FROM Account WHERE Name LIKE \\''%' + name + '%\\''; List<Account> results = Database.query(query);",
        "D. String query = '%' + name + '%';List<Account> results = [SELECT Id FROM Account WHERE Name LIKE :query];",
      ],
      answer: "A,D",
      title: "Question 38",
    },
    {
      content:
        "A developer is debugging the following code to determinate why Accounts are not being created Account a = new Account(Name = 'A'); Database.insert(a, false); How should the code be altered to help debug the issue?",
      options: [
        "A. Add a System.debug() statement before the insert method",
        "B. Set the second insert method parameter to TRUE",
        "C. Collect the insert method return value a Saveresult record",
        "D. Add a try/catch around the insert method",
      ],
      answer: "C",
      title: "Question 39",
    },
    {
      content:
        "A developer must create a ShippingCalculator class that cannot be instantiated and must include a working default implementation of a calculate method, that sub-classes can override. What is the correct implementation of the ShippingCalculator class?",
      options: [
        "A.\npublic abstract class ShippingCalculator {\n　public abstract calculate() {/*implementation*/}\n}\n",
        "B.\npublic abstract class ShippingCalculator {\n　public virtual void calculate() {/*implementation*/}\n}\n",
        "C.\npublic abstract class ShippingCalculator {\n　public void calculate() {/*implementation*/}\n}\n",
        "D.\npublic abstract class ShippingCalculator {\n　public override calculate() {/*implementation*/}\n}\n",
      ],
      answer: "B",
      title: "Question 40",
    },
    {
      content:
        "Where are two locations a developer can look to find information about the status of asynchronous or future cals? Choose 2 answers",
      options: [
        "A. Apex Jobs",
        "B. Apex Flex Queue",
        "C. Paused Flow Interviews component",
        "D. Time-Based Workflow Monitor",
      ],
      answer: "A,B",
      title: "Question 41",
    },
    {
      content:
        "A developer needs to confirm that a Contact trigger works correctly without changing the organization's data.what should the developer do to test the Contact trigger?",
      options: [
        "A. Use Deploy from the VSCode IDE to display an 'insert Contact' Apex class.",
        "B. Use the Test menu on the Developer Console to run all test classes for the Contact trigger",
        "C. Use the Open execute Anonymous feature on the Developer Console to run an 'insert Contact' DML statement",
        "D. Use the New button on the Salesforce Contacts Tab to create a new Contact record.",
      ],
      answer: "B",
      title: "Question 42",
    },
    {
      content:
        "The values 'High', 'Medium', and 'Low' are Identified as common values for multiple picklist across different object. What is an approach a developer can take to streamline maintenance of the picklist and their values, while also restricting the values to the ones mentioned above?",
      options: [
        "A. Create the Picklist on each and add a validation rule to ensure data integrity.",
        "B. Create the Picklist on each object and use a Global Picklist Value Set containing the Values.",
        'C. Create the Picklist on each object and select "Restrict picklist to the values defined in the value set".',
        'D. Create the Picklist on each object as a required field and select "Display values alphabeticaly, not in the order entered".',
      ],
      answer: "B",
      title: "Question 43",
    },
    {
      content:
        "An org has an existing Visual Flow that creates an Opportunity with an Update records element. A developer must update the Visual Flow also created a Contact and store the created Contact's ID on the Opportunity.",
      options: [
        "A. Add a new Create records element.",
        "B. Add a new Quick Action (of type create) element.",
        "C. Add a new Update records element",
        "D. Add a new Get Records element.",
      ],
      answer: "A",
      title: "Question 44",
    },
    {
      content:
        "Which two conditions cause workflow rules to fire? Choose 2 answers",
      options: [
        "A. Converting leads to person accounts",
        "B. An Apex Batch process that changes field values",
        "C. Changing the territory assignments of accounts and opportunities",
        "D. Updating records using the bulk API",
      ],
      answer: "B,D",
      title: "Question 45",
    },
    {
      content:
        'A developer creates a new Apex trigger with a helper class, and writes a test class that only exercises 95% coverage of new Apex helper class. Change Set deployment to production fails with the test coverage warning:"Test coverage of selected Apex Trigger is 0%, at least 1% test coverage is required" What should the developer do to successfully deploy the new Apex trigger and helper class?',
      options: [
        "A. Increase the test class coverage on the helper class",
        "B. Remove the falling test methods from the test class.",
        "C. Run the tests using the 'Run All Tests' method.",
        "D. Create a test class and methods to cover the Apex trigger",
      ],
      answer: "D",
      title: "Question 46",
    },
    {
      content:
        'What should a developer use to obtain the Id and Name of all the Leads. Accounts, and Contacts that hove the company name "Universal Containers"?',
      options: [
        "A. SELECT lead(id, name). accountOd, name), contacted, name) FROM Lead, Account, Contact WHERE Name = \"universal Containers'",
        "B. FIND Universal Containers' IN CompanyName Fietds RETURNING lead{ld. name), accounted, name), contacted, name)",
        "C. SELECT Lead.id. Lead.Name, Account.Id, AccountName, Contacted, Contact.Name FROM Lead, Account, Contact WHERE CompanvName * Universal Containers'",
        "D. FIND 'Universal Containers' IN Name Fields RETURNING leadjid, name), accounted, name), contacted, name)",
      ],
      answer: "D",
      title: "Question 47",
    },
    {
      content:
        "Which three statements are true regarding custom exceptions in Apex? (Choose three.)",
      options: [
        "A. A custom exception class must extend the system Exception class.",
        "B. A custom exception class can extend other classes besides the Exception class.",
        "C. A custom exception class cannot contain member variables or methods.",
        'D. A custom exception class name must end with "Exception".',
        "E. A custom exception class can implement one or many interfaces.",
      ],
      answer: "A,D,E",
      title: "Question 48",
    },
    {
      content:
        "Universal Containers has large number of custom applications that were built using a third-party javaScript framework and exposed using Visualforce pages. The Company wants to update these applications to apply styling that resembles the look and feel of Lightning Experience. What should the developer do to fulfill the business request in the quickest and most effective manner?",
      options: [
        "A. Incorporate the Salesforce Lightning Design System CSS stylesheet into the JavaScript applications.",
        "B. Rewrite all Visualforce pages asLightning components.",
        "C. Set the attribute enableLightning to true in the definition.",
        "D. Enable Available for Lightning Experience, Lightning Communities, and the mobile app on Visualforce pages used by the custom application.",
      ],
      answer: "A",
      title: "Question 49",
    },
    {
      content:
        'A developer has a requirement to create an Order When an Opportunity reaches a "Closed-Won" status. Which tool should be used to implement this requirement?',
      options: [
        "A. Apex trigger",
        "B. Process Builder",
        "C. Lightning",
        "D. Lightning Component",
      ],
      answer: "B",
      title: "Question 50",
    },
    {
      content:
        "A developer is creating a test coverage for a class and needs to insert records to validate functionality. Which method annotation should be used to create records for every method in the test class?",
      options: [
        "A. @isTest(SeeAllData=True)",
        "B. @PreTest",
        "C. @BeforeTest",
        "D. @TestSetup",
      ],
      answer: "D",
      title: "Question 51",
    },
    {
      content:
        "A workflow updates the value of a custom field for an existing Account. How can a developer access the updated custom field value from a trigger?",
      options: [
        "A. By writing, a Before Update trigger and accessing the field value from Trigger.new",
        "B. By writing a Before Insert trigger and accessing the field value from Trigger.new",
        "C. By writing an After Insert trigger and accessing the field value from Trigger.old",
        "D. By writing an After Update trigger and accessing the field value from Trigger.old",
      ],
      answer: "A",
      title: "Question 52",
    },
    {
      content:
        "What does the Lightning Component framework provide to developers?",
      options: [
        "A. Templates to create custom components.",
        "B. Extended governor limits for applications",
        "C. Support for Classic and Lightning UIS.",
        "D. Prebuilt component that can be reused.",
      ],
      answer: "D",
      title: "Question 53",
    },
    {
      content:
        "A custom object Trainer_c has a lookup field to another custom object Gym___c. Which SOQL query will get the record for the Viridian City gym and it's trainers?",
      options: [
        "A. SELECT Id, (SELECT Id FROM Trainer_c) FROM Gym_c WHERE Name - Viridian City Gym'",
        "B. SELECT ID FROM Trainer_c WHERE Gym__r.Name - Viridian City Gym'",
        "C. SELECT Id, (SELECT Id FROM Trainers) FROM Gym_C WHERE Name - Viridian City Gym'",
        "D. SELECT Id, (SELECT Id FROM Trainers) FROM Gym_C WHERE Name . Viridian City Gym'",
      ],
      answer: "D",
      title: "Question 54",
    },
  ],
});
