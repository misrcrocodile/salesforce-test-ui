window.testContent = window.testContent || [];
var testId = "PlatformDeveloper1";
var testName = "PlatformDeveloper1.PDI";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "PlatformDeveloper1.PDI.v2021-11-04.q66",
  content: [
    {
      content:
        "A developer is asked to create a Visualforce page that displays some Account fields as well as fields configured on the page layout for related Contacts.How should the developer implement this request?",
      options: [
        "A. Create a controller extension.",
        "B. Add a method to the standard controller.",
        "C. Use the <apex:relatedList> tag.",
        "D. Use the <apex:include> tag.",
      ],
      answer: "C",
      title: "Question 1",
    },
    {
      content:
        "An org tracks customer orders on an Order object and the items of an Order on the Line Item object. The Line Item object has a MasterDetail relationship to the order object. A developer has a requirement to calculate the order amount on an Order and the line amount on each Line item based on quantity and price.What is the correct implementation?",
      options: [
        "A. Write a single before trigger on the Line Item that calculates the item amount and updates the order amount on the Order.",
        "B. Write a process on the Line item that calculates the item amount and order amount and updates the filed on the Line Item and the order.",
        "C. Implement the Line amount as a currency field and the order amount as a SUM formula field.",
        "D. Implement the line amount as a numeric formula field and the order amount as a roll-up summary field.",
      ],
      answer: "D",
      title: "Question 2",
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
      title: "Question 3",
    },
    {
      content:
        "In the following example, which sharing context will myMethod execute when it is invoked?",
      options: [
        "A. Sharing rules Ail be enforced by the instantiating class",
        "B. Sharing rules Ml be enforced for the running user.",
        "C. Sharing rules will be inherited from the calling context.",
        "D. Sharing rules will not be enforced for the running user.",
      ],
      answer: "C",
      title: "Question 4",
    },
    {
      content:
        "A developer observes that an Apex test method fails in the Sandbox. To identify the issue, the developer copies the code inside the test method and executes it via the Execute Anonymous tool in the Developer Console. The code then executes with no exceptions or errors. Why did the test method fail in the sandbox and pass in the Developer Console?",
      options: [
        "A. The test method relies on existing data in the sandbox.",
        "B. The test method is calling an @future method.",
        "C. The test method does not use System.runAs to execute as a specific user.",
        "D. The test method has a syntax error in the code.",
      ],
      answer: "A",
      title: "Question 5",
    },
    {
      content:
        "What are two characteristics related to formulas? Choose 2 answers.",
      options: [
        "A. Fields that are used in a formula field can be deleted or edited without the formula.",
        "B. Formulas are calculated at runtime and are not stored in the database.",
        "C. Formula can reference themselves.",
        "D. Formulas can reference values in related objects.",
      ],
      answer: "B,D",
      title: "Question 6",
    },
    {
      content:
        "A developer must create a lightning component that allows users to input contact record information to create a contact record, including a salary__c custom field. what should the developer use, along with a lightning-record-edit form, so that salary__c field functions as a currency input and is only viewable and editable by users that have the correct field levelpermissions on salary__C?",
      options: [
        'A. <lightning-input-currency value="Salary__c"></lightning-input-currency>',
        'B. <lightning-formatted-number value="Salary__c" format-style="currency"></lightning-formatted-number>',
        'C. <ligthning-input-field field-name="Salary__c"></lightning-input-field>',
        'D. <lightning-input type="number" value="Salary__c" formatter="currency"></lightning-input>',
      ],
      answer: "C",
      title: "Question 7",
    },
    {
      content:
        "If apex code executes inside the execute() method of an Apex class when implementing the Batchable interface, which statement are true regarding governor limits? Choose 2 answers",
      options: [
        "A. The apex governor limits are reset for each iteration of the execute() mrthod.",
        "B. The Apex governor limits might be higher due to the asynchronous nature of the transaction.",
        "C. The Apex governor limits are relaxed while calling the costructor of the Apex class.",
        "D. The Apex governor limits cannot be exceeded due to the asynchronous nature of the transaction,",
      ],
      answer: "A,B",
      title: "Question 8",
    },
    {
      content:
        "A development team wants to use a deployment script lo automatically deploy lo a sandbox during their development cycles.Which two tools can they use to run a script that deploys to a sandbox?Choose 2 answers",
      options: [
        "A. Ant Migration Tool",
        "B. Developer Console",
        "C. Change Sets",
        "D. SFDX CLI",
      ],
      answer: "A,D",
      title: "Question 9",
    },
    {
      content:
        "A developer considers the following snippet of code:Based on this code, what is the value of x?",
      options: ["A. 4", "B. 2", "C. 1", "D. 3"],
      answer: "A",
      title: "Question 10",
    },
    {
      content:
        "What are three techniques that a developer can use to invoke an anonymous block of code? (Choose three.)",
      options: [
        "A. Create and execute a test method that does not specify a runAs() call.",
        "B. Type code into the Developer Console and execute it directly.",
        "C. Use the SOAP API to make a call to execute anonymous code.",
        "D. Create a Visualforce page that uses a controller class that is declared without sharing.",
        "E. Run code using the Anonymous Apex feature of the Developer's IDE.",
      ],
      answer: "B,C,E",
      title: "Question 11",
    },
    {
      content:
        "What are two ways a developer can get the status of an enquered job for a class that queueable interface?Choose 2 answers",
      options: [
        "A. View the apex Jobs page",
        "B. Query the AsyncApexJobe object",
        "C. View the apex status Page",
        "D. View the apex flex Queue",
      ],
      answer: "A,C",
      title: "Question 12",
    },
    {
      content:
        "Which Apex class contains methods to return the amount of resources that have been used for a particular governor, such as the number of DML statements?",
      options: ["A. Limits", "B. Exception", "C. Messaging", "D. OrgLimits"],
      answer: "A",
      title: "Question 13",
    },
    {
      content:
        "A developer needs an Apex method that can process Account or Contact records. Which method signature should the developer use?",
      options: [
        "A. Public void doWork(Account || Contatc)",
        "B. Public void doWork(Account Contact)",
        "C. Public void doWork(Record theRecord)",
        "D. Public void doWork(sObject theRecord)",
      ],
      answer: "D",
      title: "Question 14",
    },
    {
      content:
        "A developer must create a ShippingCalculator class that cannot be instantiated and must include a working default implementation of a calculate method, that sub-classes can override. What is the correct implementation of the ShippingCalculator class?",
      options: [
        "A. Public abstract class ShippingCalculator {public override calculate() { /*implementation*/ }}",
        "B. Public abstract class ShippingCalculator {public virtual void calculate() { /*implementation*/ }}",
        "C. Public abstract class ShippingCalculator {public abstract calculate() { /*implementation*/ }}",
        "D. Public abstract class ShippingCalculator {public void calculate() { /*implementation*/ }}",
      ],
      answer:
        "B  Explanation the extending class can override the existing virtual methods by using the override keyword in the method definition. Overriding a virtual method allows you to provide a different implementation for an existing methodhttps://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_extending.htm ",
      title: "Question 15",
    },
    {
      content:
        "A developer needs to join data received from an integration with an external system with parent records in Salesforce. The data set does not contain the Salesforce IDs of the parent records, but it does have a foreign key attribute that can be used to identify the parent.Which action will allow the developer to relate records in the data model without knowing the Salesforce ID?",
      options: [
        "A. Create and populate a custom field on the parent object marked as an External ID.",
        "B. Create a custom field on the child object of type Foreign Key",
        "C. Create a custom field on the child object of type External Relationship.",
        "D. Create and populate a custom field on the parent object marked as Unique",
      ],
      answer: "A",
      title: "Question 16",
    },
    {
      content:
        "A developer is asked to create a Visualforce page for Opportunities that allows users to save or merge the current record.Which approach should the developer to meet this requirement?",
      options: [
        "A. A custom controller",
        "B. Standard controller methods",
        "C. A custom controller extension",
        "D. Visualforce page JavaScript",
      ],
      answer: "A",
      title: "Question 17",
    },
    {
      content:
        "Which three statements are true regarding trace flags? (Choose three.)",
      options: [
        "A. Trace flags override logging levels.",
        "B. Logging levels override trace flags.",
        "C. Setting trace flags automatically cause debug logs to be generated.",
        "D. Trace flags can be set in the Developer Console, Setup, or using the Tooling API.",
        "E. If active trace flags are not set, Apex tests execute with default logging levels.",
      ],
      answer: "A,D,E",
      title: "Question 18",
    },
    {
      content:
        "A developer has a Visualforce page and custom controller to save Account records. The developer wants to display any validation rule violation to the user. How can the developer make sure that validation rule violations are displayed?",
      options: [
        "A. Use a try/catch with a custom exception class.",
        "B. Add cuatom controller attributes to display the message.",
        "C. Include <apex:message> on the Visualforce page.",
        "D. Perform the DML using the Database.upsert() method.",
      ],
      answer: "C",
      title: "Question 19",
    },
    {
      content:
        "Which action causes a before trigger to fire by default for Accounts?",
      options: [
        "A. Renaming or replacing picklist",
        "B. Converting Leads to Contact accounts",
        "C. Updating addresses using the Mass Address update tool",
        "D. Importing data using the Data Loader and the Bulk API",
      ],
      answer: "D",
      title: "Question 20",
    },
    {
      content: "What is the result of the following code snippet?",
      options: [
        "A. 0 Accounts are inserted.",
        "B. 1 Account is inserted.",
        "C. 200 Accounts are inserted.",
        "D. 201 Accounts are inserted.",
      ],
      answer: "A",
      title: "Question 21",
    },
    {
      content:
        "A developer is creating a page that allows users to create multiple Opportunities. The developer is asked to verify the current user's default } | Opportunity record type, and set certain default values based on the record type before inserting the record. i, J Calculator How can the developer find the current user's default record type? ns",
      options: [
        "A. Query the Profile where the ID equals userInfo.getProfileID() and then use the profile.Opportunity.getDefaultRecordType() | | method. ] |",
        "B. o Use Opportunity. SObjectType.getDescribe().getRecordTypelnfos() to get a list of record types, and iterate through them until [ J isDefaultRecordTypeMapping() is true. Pencil & Paper |",
        "C. Use the Schema.userlnfo.Opportunity.getDefaultRecordType() method. < Create the opportunity and check the opportunity.recordType before inserting, which will have the record ID of the current Dal user's default record type.",
      ],
      answer: "B",
      title: "Question 22",
    },
    {
      content:
        "A developer must modify the following code snippet to prevent the number of SOQL queries issued from exceeding the platform governor limit. public class without sharing OpportunityService( public static List<OpportunityLineItem> getOpportunityProducts(Set<Id> opportunityIds){ List<OpportunitylineItem> oppLineItems = new List<OpportunityLineItem>(); for(Id thisOppId : opportunityIds){ oppLineItems.addAll([Select Id FROM OpportunityLineItems WHERE OpportunityId = :thisOppId)]; } return oppLineItems; } } The above method might be called during a trigger execution via a Lightning component. Which technique should be implemented to avoid reaching the governor limit?",
      options: [
        "A. Use the System.Limits.getlimitQueries() method to ensure the number of queries is less than 100.",
        "B. Use the System.Limits.getQueries() method to ensure the number of queries is less than 100.",
        "C. Refactor the code above to perform only one SOQL query, filtering by the Set of opportunityIds.",
        "D. Refector the code above to perform the SOQL query only if the Set of opportunityIds contains less 100 Ids.",
      ],
      answer: "C",
      title: "Question 23",
    },
    {
      content:
        "What is the order of operations when a record is saved in Salesforce?",
      options: [
        "A. Workflow, process flows, triggers, commit",
        "B. Process flows, triggers, workflow, commit",
        "C. Triggers, workflow, process flows, commit",
        "D. Workflow, triggers, process flows, commit",
      ],
      answer: "C",
      title: "Question 24",
    },
    {
      content:
        "A developer is implementing an Apex class for a financial system. Within the class, the variables 'creditAmount' and 'debtAmount' should not be able to change once a value is assigned. In which two ways can the developer declare the variables to ensure their value can only be assigned one time? Choose 2 answers",
      options: [
        "A. Use the static keyword and assign its value in the class constructor.",
        "B. Use the static keyword and assign its value in a static initializer.",
        "C. Use the final keyword and assign its value when declaring the variable.",
        "D. Use the final keyword and assign its value in the class constructor.",
      ],
      answer: "C,D",
      title: "Question 25",
    },
    {
      content:
        "Which three operations affect the number of times a trigger can fire?Choose 3 answers",
      options: [
        "A. Roll-Up Summary fields",
        "B. Criteria-based Sharing calculations",
        "C. Workflow Rules",
        "D. Email messages",
        "E. Process Flows",
      ],
      answer: "A,C,E",
      title: "Question 26",
    },
    {
      content:
        "A developer has the following requirements:Calculate the total amount on an Order.Calculate the line amount for each Line Item based on quantity selected and price.Move Line Items to a different Order if a Line Item is not stock.Which relationship implementation supports these requirements?",
      options: [
        "A. Line Item has a Lookup field to Order and there can be many Line Items per Order",
        "B. Line Items has a Master-Detail field to Order and the Master can be re-parented.",
        "C. Order has a Lookup field to Line Item and there can be many Line Items per Order.",
        "D. Order has a Master-Detail field to Line Item and there can be many Line Items per Order.",
      ],
      answer: "B",
      title: "Question 27",
    },
    {
      content:
        "Which two statements are true about using the @testSetup annotation in an Apex test class?Choose 2 answers",
      options: [
        "A. A method defined with the @testSetup annotation executes once for each test method in the test class and counts towards system limits.",
        "B. Records created in the test setup method cannot be updated in individual test methods.",
        "C. Test data is inserted once for all test methods in a class.",
        "D. Qo The @testSetup annotation is not supported when the GisTest(SeeAllData=True) annotation is used.",
      ],
      answer: "A,D",
      title: "Question 28",
    },
    {
      content:
        'A developer uses a loop to check each Contact in a list. When a Contact with the Title of"Boss" is found, the Apex method should jump to the first line of code outside of the for loop.Which Apex solution will let the developer implement this requirement?',
      options: ["A. Continue", "B. Next", "C. Exit", "D. break;"],
      answer: "D",
      title: "Question 29",
    },
    {
      content:
        "A developer wants to retrieve the Contacts and Users with the email address '[email protected]'.Which SOSL statement should the developer use?",
      options: [
        "A. FIND {[email protected]} IN Email Fields RETURNING Contact (Email), User (Email)",
        "B. FIND {Email = '[email protected]'} RETURNING Contact (Email), User (Email)",
        "C. FIND {Email = '[email protected]'} IN Contact, User",
        "D. FIND Email IN Contact, User FOR {dev2uc.com}",
      ],
      answer: "A",
      title: "Question 30",
    },
    {
      content:
        "What is the value of the Trigger.old context variable in a Before Insert trigger?",
      options: [
        "A. Undefined",
        "B. An empty list of sObjects",
        "C. null",
        "D. A list of newly created sObjects without IDS",
      ],
      answer: "C",
      title: "Question 31",
    },
    {
      content:
        "A developer must create an Apex class, contactcontroller, that a Lightning component can use to search for Contact records. User of the Lightning component should only be able to search Contact records to which they have access. Which two will restrict the records correctly?",
      options: [
        "A. public without sharing class ContactController",
        "B. public with sharing class ContactController",
        "C. public class ContactController",
        "D. public inherited sharing class ContactController",
      ],
      answer: "B,D",
      title: "Question 32",
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
      title: "Question 33",
    },
    {
      content:
        "A Lightning component has a wired property, searchResults, that stores a list of Opportunities. Which definition of the Apex method, to which the searchResults property is wired, should be used?",
      options: [
        "A. @AuraEnabled(cacheable=true)public List<Opportunity> search(String term) { /*implementation*/ }",
        "B. @AuraEnabled(cacheable=true)public static List<Opportunity> search(String term) { /* implementation*/ }",
        "C. @AuraEnabled(cacheable=false)public static List<Opportunity> search(String term) { /*implementation*/ }",
        "D. @AuraEnabled(cacheable=false)public List<Opportunity> search(String term) { /*implementation*/ }",
      ],
      answer: "B",
      title: "Question 34",
    },
    {
      content:
        "Which two are best practices when it comes to component and application event handling? (Choose two.)",
      options: [
        "A. Try to use application events as opposed to component events.",
        "B. Use component events to communicate actions that should be handled at the application level.",
        "C. Reuse the event logic in a component bundle, by putting the logic in the helper.",
        "D. Handle low-level events in the event handler and re-fire them as higher-level events.",
      ],
      answer: "C,D",
      title: "Question 35",
    },
    {
      content:
        "A workflow updates the value of a custom field for an existing Account.How can a developer access the updated custom field value from a trigger?",
      options: [
        "A. By writing an After Insert trigger and accessing the field value from Trigger.old",
        "B. By writing an After Update trigger and accessing the field value from Trigger.old",
        "C. By writing, a Before Update trigger and accessing the field value from Trigger.new",
        "D. By writing a Before Insert trigger and accessing the field value from Trigger.new",
      ],
      answer: "C",
      title: "Question 36",
    },
    {
      content:
        "Which three web technologies can be integrated into a Visualforce page? (Choose three.)",
      options: ["A. PHP", "B. HTML", "C. JavaScript", "D. Java", "E. CSS"],
      answer: "B,C,E",
      title: "Question 37",
    },
    {
      content:
        "Which three data types can a SOQL query return? Choose 3 answers",
      options: ["A. sObject", "B. List", "C. Long", "D. Integer"],
      answer: "A,B,D",
      title: "Question 38",
    },
    {
      content:
        "Which two statements are accurate regarding Apex classes and interfaces?Choose 2 answers",
      options: [
        "A. Inner classes are public by default.",
        "B. A top-level class can only have one inner class level.",
        "C. Interface methods are public by default.",
        "D. Classes are final by default.",
      ],
      answer: "B,C",
      title: "Question 39",
    },
    {
      content:
        "A developer wrote Apex code that calls out to an external system. How should a developer write the test to provide test coverage?",
      options: [
        "A. Write a class that extends WebserviceMock",
        "B. Write a class that implements the WebserviceMock interface.",
        "C. Write a class that implements the HTTPCalloutMock interface.",
        "D. Write a class that extends HTTPCalloutMock.",
      ],
      answer: "C",
      title: "Question 40",
    },
    {
      content:
        "A developer has a VF page and custom controller to save Account records. The developer wants to display any validation rule violation to the user. How can the developer make sure that validation rule violations are displayed?",
      options: [
        "A. Add custom controller attributes to display the message.",
        "B. Include <apex:messages> on the Visualforce page.",
        "C. Use a try/catch with a custom exception class.",
        "D. Perform the DML using the Database.upsert() method",
      ],
      answer:
        "B  Explanation https://developer.salesforce.com/docs/atlas.en-us.pages.meta/pages/pages_compref_message.htm ",
      title: "Question 41",
    },
    {
      content:
        "developer created this Apex trigger that calls MyClass .myStaticMethod:trigger myTrigger on Contact(before insert) ( MyClass.myStaticMethod(trigger.new, trigger.oldMap); } The developer creates a test class with a test method that calls MyClass.mystaticMethod, resulting in 81% overall code coverage. What happens when the developer tries to deploy the trigger and two classes to production, assuming no other code exist?",
      options: [
        "A. The deployment fails because no assertions were made in the test method.",
        "B. The deployment passes because the Apex code has required (>75%) code coverage.",
        "C. The deployment fails because the Apex trigger has no code coverage.",
        "D. The deployment passes because both classes and the trigger were included in the deployment.",
      ],
      answer: "C",
      title: "Question 42",
    },
    {
      content:
        "In terms of the MVC paradigm, what are two advantages of implementing the layer of a Salesforce application using Aura Component-based development over Visualforce? Choose 2 answers",
      options: [
        "A. Server-side run-time debugging",
        "B. Self-contained and reusable units of an application",
        "C. Rich component ecosystem",
        "D. Automatic code generation",
      ],
      answer: "B,C",
      title: "Question 43",
    },
    {
      content:
        "A developer needs to create a custom button for the Account object that, when clicked, will perform a series of calculation and redirect the user to a custom visualforce page.Which three attributes need to be defined with values in the <apex:page> tag to accomplish this?Choose 3 answers",
      options: [
        "A. readOnly",
        "B. renderAs",
        "C. extensions",
        "D. standard Controller",
        "E. Action",
      ],
      answer: "B,C,D",
      title: "Question 44",
    },
    {
      content:
        "A developer must write an Apex method that will be called from a Lightning component. The method may delete an Account stored in the accountRec variable.Which method should a developer use to ensure only users that should be able to delete Accounts can successfully perform deletions?",
      options: [
        "A. accountRec.isDeletable()",
        "B. Schema.sObjectType.Account.isDeletable()",
        "C. accountRec.sObjectType.isDeletable()",
        "D. Account.isDeletable()",
      ],
      answer: "B",
      title: "Question 45",
    },
    {
      content:
        "A team of developers is working on a source-driven project that allows them to work independently, with many different org configurations. Which type of Salesforce orgs should they use for their development?",
      options: [
        "A. Developer orgs",
        "B. Developer sandboxes",
        "C. Full Copy sandboxes",
        "D. Scratch orgs",
      ],
      answer: "D",
      title: "Question 46",
    },
    {
      content:
        "The values 'High', 'Medium', and 'Low' are Identified as common values for multiple picklist across different object. What is an approach a developer can take to streamline maintenance of the picklist and their values, while also restricting the values to the ones mentioned above?",
      options: [
        'A. Create the Picklist on each object and select "Restrict picklist to the values defined in the value set".',
        "B. Create the Picklist on each and add a validation rule to ensure data integrity.",
        "C. Create the Picklist on each object and use a Global Picklist Value Set containing the Values.",
        'D. Create the Picklist on each object as a required field and select "Display values alphabeticaly, not in the order entered".',
      ],
      answer: "C",
      title: "Question 47",
    },
    {
      content:
        "How should a custom user interface be provided when a user edits an Account in Lightning Experience?",
      options: [
        "A. Override the Account's Edit button with Lightning Action",
        "B. Override the Account's Edit button with Lightning page.",
        "C. Override the Account's Edit button with Lightning Flow",
        "D. Override the Account's Edit button with Lightning component.",
      ],
      answer: "D",
      title: "Question 48",
    },
    {
      content:
        "A developer is creating a test coverage for a class and needs to insert records to validate functionality. Which method annotation should be used to create records for every method in the test class?",
      options: [
        "A. @TestSetup",
        "B. @BeforeTest",
        "C. @isTest(SeeAllData=True)",
        "D. @PreTest",
      ],
      answer: "A",
      title: "Question 49",
    },
    {
      content:
        "Which aspect of Apex programming is limited due to multitenancy?",
      options: [
        "A. The number of methods in an Apex Class",
        "B. The number of records processed in a loop",
        "C. The number of records returned from database queries",
        "D. The number of active Apex classes",
      ],
      answer: "C",
      title: "Question 50",
    },
    {
      content:
        "A developer needs to create a baseline set of data (Accounts, Contacts, Products, Assets) for an entire suite of test allowing them to test independent requirements various types of Salesforce Cases.Which approach can efficiently generate the required data for each unit test?",
      options: [
        "A. Use @TestSetup with a viod method.",
        "B. Create test data before Test.startTest() in the unit test.",
        "C. Add @isTest(seeAllData=true) at the start of the unit test class.",
        "D. Create a nock using the Stud API",
      ],
      answer: "A",
      title: "Question 51",
    },
    {
      content:
        "A developer needs to create a custom Interface in Apex.Which three considerations must the developer keep in mind while developing the Apex Interface' Choose 3 answers",
      options: [
        "A. A method defined In an Apex Interface cannot have an access modifier.",
        "B. The Apex class must be declared using the interface keyword.",
        "C. New methods can be added to a public interface within a released package.",
        "D. The Apex interface class access modifier can be set to Private, Public, or Global.",
        "E. A method implementation can be defined within the Apex Interface.",
      ],
      answer: "A,B,E",
      title: "Question 52",
    },
    {
      content:
        "A developer wants to invoke on outbound message when a record meets a specific criteria.Which three features satisfy this use case?Choose 3 answer",
      options: [
        "A. Process builder can be used to check the record criteria and send an outbound message with Apex Code.",
        "B. workflows can be used to check the record criteria and send an outbound message.",
        "C. Approval Process has the capacity to check the record criteria and send an outbound message without Apex Code",
        "D. Visual Workflow can be used to check the record criteria and send an outbound message without Apex Code.",
        "E. Process builder can be used to check the record criteria and send an outbound messagewithout Apex Code.",
      ],
      answer: "A,B,C",
      title: "Question 53",
    },
    {
      content:
        "What is the maximum number of SOQL queries used by the following code? List<Account> aList = [SELECT Id FROM Account LIMIT 5]; for (Account a : aList){ List<Contact> cList = [SELECT Id FROM Contact WHERE AccountId = :a.Id); }",
      options: ["A. 2", "B. 6", "C. 5", "D. 1"],
      answer: "B",
      title: "Question 54",
    },
    {
      content:
        "While writing a test class that covers an OpportunityLineItem trigger, a Developer is unable to create a standard PriceBook since one already exists in the org.How should the Developer overcome this problem?",
      options: [
        "A. Use @IsTest(SeeAllData=true) and delete the existing standard PriceBook.",
        "B. Use Test.getStandardPricebookId() to get the standard PriceBook ID.",
        "C. Use @TestVisible to allow the test method to see the standard PriceBook.",
        "D. Use Test.loadData() and a Static Resource to load a standard Pricebook.",
      ],
      answer: "B",
      title: "Question 55",
    },
    {
      content:
        "Which two types of process automation can be used to calculate the shipping cost for an Order when the Order is placed and apply a percentage of the shipping cost of some of the related Order Products?Choose 2 answers",
      options: [
        "A. Approval Process",
        "B. Workflow Rule",
        "C. Flow Builder",
        "D. Process Builder",
      ],
      answer: "C,D",
      title: "Question 56",
    },
    {
      content:
        "Which statement is true about developing in a multi-tenant environment?",
      options: [
        "A. Org-level data security controls which users can see data from multiple tenants on the same instance",
        "B. Governor limits prevent apex from impactiong the performance of multiple tenants on the same instance",
        "C. Global apex classes can be referenced from multiple tenants on the same instance",
        "D. Apex sharing controls access to records fomr multiple tenants on the same instance",
      ],
      answer: "B",
      title: "Question 57",
    },
    {
      content:
        "How many accounts will be inserted by the following block ofcode? for(Integer i = 0 ; i <500; i++) { Account a = new Account(Name='New Account ' + i); insert a; }087. Boolean odk;Integer x;if(abok=false;integer=x;){X=1;}elseif(abok=true;integer=x;){X=2;}elseif(abok!=null;integer=x;){X=3;)elseif{X=4;}",
      options: ["A. X=9", "B. X=10", "C. X=8", "D. X=4"],
      answer: "D",
      title: "Question 58",
    },
    {
      content:
        "A Visual Flow uses an apex Action to provide additional information about multiple Contacts, stored in a custom class, contactInfo. Which is the correct definition of the Apex method that gets additional information?",
      options: [
        "A. @invocableMethod(label)='Additional Info')public static List<ContactInfo> getInfo(List<Id> contactIds){ /*Implementation*/ }",
        "B. @InvocableMethod(label='additional Info')public static ContactInfo getInfo(Id contactId){ /*implementation*/ }",
        "C. @InvocableMethod(label='Additional Info')public List<ContactInfo> getInfo(List<Id> contactIds){ /*implementation*/ }",
        "D. @InvocableMethod(Label='additional Info')public ContactInfo(Id contactId){ /*implementation*/ }",
      ],
      answer: "A",
      title: "Question 59",
    },
    {
      content:
        'A developer creates a new Apex trigger with a helper class, and writes a test class that only exercises 95% coverage of new Apex helper class. Change Set deployment to production fails with the test coverage warning:"Test coverage of selected Apex Trigger is 0%, at least 1% test coverage is required" What should the developer do to successfully deploy the new Apex trigger and helper class?',
      options: [
        "A. Increase the test class coverage on the helper class",
        "B. Create a test class and methods to cover the Apex trigger",
        "C. Run the tests using the 'Run All Tests' method.",
        "D. Remove the falling test methods from the test class.",
      ],
      answer: "D",
      title: "Question 60",
    },
    {
      content:
        "Which two are phases in the Salesforce Application Event propagation framework? Choose2 answers",
      options: ["A. Default", "B. Capture", "C. Bubble"],
      answer: "A,B",
      title: "Question 61",
    },
    {
      content:
        "Which two statements are true about Getter and Setter methods as they relate to Visualforce?",
      options: [
        "A. A corresponding Setter method is required for each Getter method.",
        "B. Getter methods pass values from a controller to a page.",
        "C. There is no guarantee for the order in which Getter methods are called.",
        "D. Setter methods always have to be declared global.",
      ],
      answer: "A,B",
      title: "Question 62",
    },
    {
      content:
        "A developer writes a trigger on the Account object on the before update event that increments a count field. A workflow rule also increments the count field every time that an Account is created or update. The field update in the workflow rule is configured to not re-evaluate workflow rules. What is the value of the count field if an Account is inserted with an initial value of zero, assuming no other automation logic is implemented on the Account?",
      options: ["A. 2", "B. 1", "C. 3", "D. 4"],
      answer: "A",
      title: "Question 63",
    },
    {
      content: "What are two ways for a developer to execute tests in an org?",
      options: [
        "A. Developer console",
        "B. Bulk API",
        "C. Matadata API",
        "D. Tooling API",
      ],
      answer: "A,D",
      title: "Question 64",
    },
    {
      content: "Which code displays the content of Visualforce page as PDF?",
      options: [
        "A. <apex:page readerAs= ''application/pdf''>",
        'B. <apex:page renderAs="pdf">',
        "C. <apex:page contentype '' application/pdf'')",
        "D. <apex:page readeras'' application/pdf''>",
      ],
      answer: "B",
      title: "Question 65",
    },
    {
      content:
        "Given the following code snippet, that is part of a custom controller for a Visualforce page:In which two ways can the try/catch be enclosed to enforce object and field-level permissions and prevent the DML statement from being executed if the current logged-in user does not have the appropriate level of access? Choose 2 answers",
      options: [
        "A. Use if (Schema, sobjectType, Contact, isUpdatable ( ) )",
        "B. Use if (Schema.sObjectType.Contact.isAccessible ( ) )",
        "C. Use if (thisContact.Owner = = UserInfo.getuserId ( ) )",
        "D. Use if (Schema , sobjectType. Contact. Field, Is_Active_c. is Updateable ( ) )",
      ],
      answer: "A,D",
      title: "Question 66",
    },
  ],
});
