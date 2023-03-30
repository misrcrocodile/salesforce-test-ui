window.testContent = window.testContent || [];
window.testContent.push({
  name: "PlatformDeveloper1.PDI.v2022-02-09.q66",
  content: [
    {
      content:
        "what are the methods used to show input in classic and lightning ?",
      options: [],
      answer:
        "  Use visualforce page in classic and lightning component in lightning ",
      title: "Question 1",
    },
    {
      content:
        "A recursive transaction is limited by a DML statement creating records for these two objects:1. Accounts2. ContactsThe Account trigger hits a stack depth of 16.Which statement is true regarding the outcome of the transaction?",
      options: [
        "A. The transaction fails only if the Contact trigger stack depth is greater or equalto 16.",
        "B. The transaction succeeds as long as the Contact trigger stack depth is less than 16.",
        "C. The transaction succeeds and all the changes are committed to the database.",
        "D. The transaction fails and all the changes are rolled back.",
      ],
      answer: "C",
      title: "Question 2",
    },
    {
      content:
        "A developer needs to prevent the creation of request records when certain conditions exist in the system. A RequestLogic class exists to checks the conditions. What is the correct implementation?",
      options: [
        "A. Trigger RequestTrigger on Request (before insert) {RequestLogic.validateRecords {trigger.new};}",
        "B. Trigger RequestTrigger on Request (before insert) {if (RequestLogic.isvalid{Request})Request.addError {'Your request cannot be created at this time.'};}",
        "C. Trigger RequestTrigger on Request (after insert) {if (RequestLogic.isValid{Request})Request.addError {'Yourrequest cannot be created at this time.'};}",
        "D. Trigger RequestTrigger on Request (after insert) {RequestLogic.validateRecords {trigger.new};}",
      ],
      answer: "A",
      title: "Question 3",
    },
    {
      content:
        "Which standard field is required when creating a newcontact record?",
      options: ["A. Name", "B. AccountId", "C. FirstName", "D. LastName"],
      answer: "D",
      title: "Question 4",
    },
    {
      content:
        "Which two events need to happen when deploying to a production org? Choose 2 answers",
      options: [
        "A. All triggers must have at least 1% test coverage.",
        "B. All test and triggers must have at least 75% test coverage combined",
        "C. All triggers must have at least 75% test coverage.",
        "D. All Apex code must have at least 75% test coverage.",
      ],
      answer: "A,D",
      title: "Question 5",
    },
    {
      content:
        "When importing and exporting data into Salesforce, whichtwo statements are true?Choose 2 answers",
      options: [
        "A. Bulk API can be used to bypass the storage limits when importing large data volumes indevelopment environments.",
        "B. Bulk API can be used to import large data volumes in development environments without bypassing the storage limits.",
        "C. Data import wizard is a client application provided by Salesforce.",
        "D. Developer and Developer Pro sandboxes have different storage limits.",
      ],
      answer: "C,D",
      title: "Question 6",
    },
    {
      content:
        "A developer needs to create a custom Interface in Apex.Which three considerations must the developer keep in mind while developing the Apex Interface' Choose 3 answers",
      options: [
        "A. New methods can be added to a public interface within a released package.",
        "B. A method defined In an Apex Interface cannot have an access modifier.",
        "C. A method implementation can be defined within the Apex Interface.",
        "D. The Apex interface class access modifier can be set to Private, Public, or Global.",
        "E. The Apex class must be declared using the interface keyword.",
      ],
      answer: "B,C,E",
      title: "Question 7",
    },
    {
      content:
        "Which three resources in an Azure Component can contain JavaScript functions?",
      options: [
        "A. Renderer",
        "B. Controllers",
        "C. Design",
        "D. helper",
        "E. Style",
      ],
      answer: "A,B,D",
      title: "Question 8",
    },
    {
      content:
        "A Lightning component has a wired property, searchResults, that stores a list of Opportunities. Which definition of the Apex method, to which the searchResults property is wired, should be used?",
      options: [
        "A. @AuraEnabled(cacheable=false)public static List<Opportunity> search(String term) { /*implementation*/ }",
        "B. @AuraEnabled(cacheable=false)public List<Opportunity> search(String term) {/*implementation*/ }",
        "C. @AuraEnabled(cacheable=true)publicList<Opportunity> search(String term) { /*implementation*/ }",
        "D. @AuraEnabled(cacheable=true)public static List<Opportunity> search(String term) { /* implementation*/ }",
      ],
      answer: "D",
      title: "Question 9",
    },
    {
      content:
        "While writing a test class that coversan OpportunityLineItem trigger, a Developer is unable to create a standard PriceBook since one already exists in the org.How should the Developer overcome this problem?",
      options: [
        "A. Use Test.getStandardPricebookId() to get the standard PriceBook ID.",
        "B. Use Test.loadData() and a Static Resource to load a standard Pricebook.",
        "C. Use @TestVisible to allow the test method to see the standard PriceBook.",
        "D. Use @IsTest(SeeAllData=true) and delete the existing standard PriceBook.",
      ],
      answer: "A",
      title: "Question 10",
    },
    {
      content:
        "Universal Containers (UC) uses a custom object called Vendor. The Vendor custom object has a Master-Detail relationship with the standard Account object. Based on some internal discussion, the UC administrator tried to change the Master-Detail relationshipto a Lookup relationship but was not able to do so. What is a possible reason that this change was not permitted?",
      options: [
        "A. The Account object is included on a workflow on the Vendor object.",
        "B. The Vendor records have existing values in the Account object.",
        "C. The Account records contain Vendor roll-up summary fields.",
        "D. The Vendor object must use a Master-Detail field for reporting.",
      ],
      answer: "C",
      title: "Question 11",
    },
    {
      content:
        "A Salesforce developer wants to review their code changesimmediately and does not want to install anything on their computer or on the org.Which tool is best suited?",
      options: [
        "A. Setup Menu",
        "B. Developer Console",
        "C. Salesforce Extension for VSCode",
        "D. Third-party apps from App Exchange",
      ],
      answer: "B",
      title: "Question 12",
    },
    {
      content:
        "Where are two locations a developer can look to find information about the status of asynchronous or future cals? Choose 2 answers",
      options: [
        "A. Paused Flow Interviews component",
        "B. Apex Jobs",
        "C. Apex Flex Queue",
        "D. Time-Based Workflow Monitor",
      ],
      answer: "B,C",
      title: "Question 13",
    },
    {
      content:
        "A developer has a single custom controller class that works with a Visualforce Wizard to support creating and editing multiple subjects. The wizardaccepts data from user inputs across multiple Visualforce pages and from a parameter on the initial URL.Which three statements are useful inside the unit test to effectively test the custom controller?Choose 3 answers",
      options: [
        "A. insert pageRef.",
        "B. Test.setCurrentPage(pageRef);",
        "C. public ExtendedController(ApexPages StandardController cntrl) { }",
        "D. String nextPage - controller.save().getUrl();",
        "E. ApexPages.CurrentPage().getParameters().put('input\\', 'TestValue');",
      ],
      answer: "B,D,E",
      title: "Question 14",
    },
    {
      content: "What are two ways for a developer to execute tests in an org?",
      options: [
        "A. Matadata API",
        "B. Bulk API",
        "C. Developer console",
        "D. Tooling API",
      ],
      answer: "C,D",
      title: "Question 15",
    },
    {
      content:
        "Universal Containers has an order system that uses an Order Number to identify an order for customers and service agents. Order will be imported into Salesforce.",
      options: [
        "A. Indirect Lookup",
        "B. Lookup",
        "C. Direct Lookup",
        "D. Number with External ID",
      ],
      answer: "D",
      title: "Question 16",
    },
    {
      content: "What should be used to create scratch orgs?",
      options: [
        "A. Developer Console",
        "B. Salesforce CLI",
        "C. Sandbox refresh",
        "D. Workbench",
      ],
      answer: "B",
      title: "Question 17",
    },
    {
      content:
        "Which two are phases in the Salesforce Application Event propagation framework? Choose2 answers",
      options: ["A. Bubble", "B. Capture", "C. Default"],
      answer: "B,C",
      title: "Question 18",
    },
    {
      content:
        "A developer must create a CreditcardPayment class that provides an implementation of an existing Payment class. Public virtual class Payment { public virtual void makePayment(Decimal amount) { /*implementation*/} } Which is the correct implementation?",
      options: [
        "A. Public class CreditCardPayment extends Payment {public virtual void makePayment(Decimal amount) { /*implementation*/ }}",
        "B. Public class CreditCardPayment implements Payment {public override void makePayment(Decimal amount) { /*Implementation*/ }}",
        "C. Public class CreditCardPayment implements Payment {public virtual void makePayment(Decimal amount) { /*implementation*/ }}",
        "D. Public class CreditcardPayment extends Payment {public override void makePayment(Decimal amount) { /*implementation*/ }}",
      ],
      answer: "D",
      title: "Question 19",
    },
    {
      content: "Which code displays the content of Visualforce page as PDF?",
      options: [
        "A. <apex:page readeras'' application/pdf''>",
        "B. <apex:pagereaderAs= ''application/pdf''>",
        'C. <apex:page renderAs="pdf">',
        "D. <apex:page contentype '' application/pdf'')",
      ],
      answer: "C",
      title: "Question 20",
    },
    {
      content:
        "A developer is creating a test coveragefor a class and needs to insert records to validate functionality. Which method annotation should be used to create records for every method in the test class?",
      options: [
        "A. @PreTest",
        "B. @TestSetup",
        "C. @isTest(SeeAllData=True)",
        "D. @BeforeTest",
      ],
      answer: "B",
      title: "Question 21",
    },
    {
      content:
        "When using SalesforceDX, what does a developer need to enable to create and manage scratch orgs?",
      options: [
        "A. Environment Hub",
        "B. Production",
        "C. Dev Hub",
        "D. Sandbox",
      ],
      answer: "C",
      title: "Question 22",
    },
    {
      content:
        "Which two operations can be performed using a formula field? Choose 2 answers",
      options: [
        "A. Calculating a score on a Lead based on the information from another field",
        "B. Displaying an Image based on the Opportunity Amount",
        "C. Triggering a Process Builder",
        "D. Displaying the last four digits of an encrypted Social Security number",
      ],
      answer: "A,B",
      title: "Question 23",
    },
    {
      content:
        "What are two characteristics related to formulas? Choose 2 answers.",
      options: [
        "A. Formulas can reference values in related objects.",
        "B. Formulas are calculated at runtime and are notstored in the database.",
        "C. Fields that are used in a formula field can be deleted or edited without the formula.",
        "D. Formula can reference themselves.",
      ],
      answer: "A,B",
      title: "Question 24",
    },
    {
      content:
        "A team of many developers work in their own individual orgs that have the same configuration at the production org. Which type of org isbest suited for this scenario?",
      options: [
        "A. Full Sandbox",
        "B. Developer Edition",
        "C. Partner Developer Edition",
        "D. Developer Sandbox",
      ],
      answer: "D",
      title: "Question 25",
    },
    {
      content:
        "A developer needs to create a custom button for the Account object that, when clicked, will perform a series of calculation and redirect the user to a custom visualforce page.Which three attributes need to be defined with values in the <apex:page> tag to accomplish this?Choose 3 answers",
      options: [
        "A. renderAs",
        "B. extensions",
        "C. Action",
        "D. standard Controller",
        "E. readOnly",
      ],
      answer: "A,B,D",
      title: "Question 26",
    },
    {
      content:
        "In the following example, which sharing context will myMethod execute when it is invoked?",
      options: [
        "A. Sharing rules Ail be enforced by the instantiating class",
        "B. Sharing rules will not be enforced for the running user.",
        "C. Sharingrules will be inherited from the calling context.",
        "D. Sharing rules Ml be enforced for the running user.",
      ],
      answer: "C",
      title: "Question 27",
    },
    {
      content:
        "What is an example of a polymorphic lookup field in Salesforce?",
      options: [
        "A. The Parentid field on the standard Account object",
        "B. The Whatld field on the standard Event object",
        "C. A custom field, Link__c, on the standard Contact object that looks up to an Account or a Campaign",
        "D. The LeadId and Contactid fields on the standard Campaign Member object",
      ],
      answer: "B",
      title: "Question 28",
    },
    {
      content:
        "Which two statements are true about using the @testSetup annotation in an Apex test class?Choose 2 answers",
      options: [
        "A. Test data is inserted once for all test methods in a class.",
        "B. Qo The @testSetup annotation is not supported when the GisTest(SeeAllData=True) annotation is used.",
        "C. A method defined with [email protected] annotation executes once for each test method in the test class and counts towards system limits.",
        "D. Records created in the test setup method cannot be updated in individual test methods.",
      ],
      answer: "B,C",
      title: "Question 29",
    },
    {
      content:
        "Universal Containers decides to use exclusively declarative development to build out a new Salesforce application. Which three options should be used to build out the database layer for the application? Choose 3 answers",
      options: [
        "A. Triggers",
        "B. Custom Objects and Fields",
        "C. Roll-Up Summaries",
        "D. Relationships",
        "E. Process Builder",
      ],
      answer: "C,D,E",
      title: "Question 30",
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
      title: "Question 31",
    },
    {
      content:
        "A developer needs to create a baseline set of data (Accounts, Contacts, Products, Assets) for anentire suite of test allowing them to test independent requirements various types of Salesforce Cases.Which approach can efficiently generate the required data for each unit test?",
      options: [
        "A. Create test data before Test.startTest() in the unit test.",
        "B. Add @isTest(seeAllData=true) at the start of the unit test class.",
        "C. Use @TestSetup with a viod method.",
        "D. Create a nock using the Stud API",
      ],
      answer: "C",
      title: "Question 32",
    },
    {
      content:
        'A developer uses a loop to check eachContact in a list. When a Contact with the Title of"Boss" is found, the Apex method should jump to the first line of code outside of the for loop.Which Apex solution will let the developer implement this requirement?',
      options: ["A. Next", "B. Exit", "C. break;", "D. Continue"],
      answer: "C",
      title: "Question 33",
    },
    {
      content:
        "Which three operations affect the number of times a trigger can fire?Choose 3 answers",
      options: [
        "A. Workflow Rules",
        "B. Email messages",
        "C. Criteria-based Sharing calculations",
        "D. Process Flows",
        "E. Roll-Up Summary fields",
      ],
      answer: "A,D,E",
      title: "Question 34",
    },
    {
      content:
        "Universal Containers stores the availability date on each Line Item of an Order and Orders are only shipped when all of the Line Items are available. Which method should be used tocalculate the estimated ship date for an Order?",
      options: [
        "A. Use a CEILING formula on each of the Latest availability date fields.",
        "B. Use a Max Roll-Up Summary field on the Latest availability date fields.",
        "C. Use a DAYS formula on each of the availability date fields and a COUNT Roll-Up Summary field on the Order.",
        "D. Use a LATEST formula on each of the latest availability date fields.",
      ],
      answer: "B",
      title: "Question 35",
    },
    {
      content:
        "Refer to the following code snippet for an environment has more than 200 Accounts belongingto the Technology' industry:When the code execution, which two events occur as a result of the Apex transaction?When the code executes, which two events occur as a result of the Apex transaction?Choose 2 answers",
      options: [
        "A. If executed in an asynchronous context, the apex transaction is likely to fall by exceeding the DML governor limit",
        "B. If executed In a synchronous context, the apex transaction is likely to fall by exceeding the DHL governor limit.",
        "C. The Apex transaction succeeds regardless of any uncaught exception and all processed accounts are updated.",
        "D. The Apex transaction fails with the following message. \"SObjectrow was retrieved via SOQL without querying the requested field Account.Is.Tech__c''.",
      ],
      answer: "D",
      title: "Question 36",
    },
    {
      content: "What can used to delete components from production?",
      options: [
        "A. A change set deployment with the delete option checked",
        "B. A change set deployment with a destructivechanges XML file",
        "C. An ant migration tool deployment withdestructivechanges xml file and the components to delete in the package .xml file",
        "D. An ant migration tool deployment with a destructivechanges XML file and an empty package .xml file",
      ],
      answer: "C",
      title: "Question 37",
    },
    {
      content:
        "A developer must create an Apex class,contactcontroller, that a Lightning component can use to search for Contact records. User of the Lightning component should only be able to search Contact records to which they have access. Which two will restrict the records correctly?",
      options: [
        "A. public without sharing class ContactController",
        "B. public inherited sharing class ContactController",
        "C. public with sharing class ContactController",
        "D. public class ContactController",
      ],
      answer: "B,C",
      title: "Question 38",
    },
    {
      content:
        "Given the following Apex statement:Account myAccount = [SELECT Id, Name FROM Account];What occurs when more than one Account is returned by the SOQL query?",
      options: [
        "A. The first Account returned is assigned tomyAccount.",
        "B. The variable,myAccount, is automatically cast to the List data type.",
        "C. An unhandled exception is thrown and the code terminates.",
        "D. The query fails and an error is written to the debuglog.",
      ],
      answer: "C",
      title: "Question 39",
    },
    {
      content:
        "A Next Best Action strategy uses an Enhance Element that invokes an Apex method to determine a discount level for a Contact, based on a number of factors. What is the correct definition of the Apex method?",
      options: [
        "A. @InvocableMethodglobal Recommendation getLevel (ContactWrapper input){ /*implementation*/ }",
        "B. @InvocableMethodglobalList<List<Recommendation>> getLevel(List<ContactWrapper> input){ /*implementation*/ }",
        "C. @InvocableMethodglobal static List<List<Recommendation>> getLevel(List<ContactWrapper> input){ /*implementation*/ }",
        "D. @InvocableMethodglobal static ListRecommendation getLevel(List<ContactWrapper> input){ /*implementation*/ }",
      ],
      answer: "C",
      title: "Question 40",
    },
    {
      content:
        "A developer wants to invoke on outbound message when a record meets aspecific criteria.Which three features satisfy this use case?Choose 3 answer",
      options: [
        "A. workflows can be used to check the record criteria and send an outbound message.",
        "B. Process builder can be used to check the record criteria and send an outbound messagewithout Apex Code.",
        "C. Approval Process has the capacity to check the record criteria and send an outbound message without Apex Code",
        "D. Visual Workflow canbe used to check the record criteria and send an outbound message without Apex Code.",
        "E. Process builder can be used to check the record criteria andsend an outbound message with Apex Code.",
      ],
      answer: "A,C,E",
      title: "Question 41",
    },
    {
      content:
        "A developer needs to confirm that a Contact trigger works correctly without changing the organization's data.what should the developer do to test the Contact trigger?",
      options: [
        "A. Use Deploy from the VSCode IDE to display an 'insert Contact' Apex class.",
        "B. Use the New button on the Salesforce Contacts Tab to create a new Contact record.",
        "C. Use the Test menu on the Developer Console to run all test classes for the Contact trigger",
        "D. Use the Open execute Anonymous feature on the Developer Console to run an 'insert Contact' DML statement",
      ],
      answer: "C",
      title: "Question 42",
    },
    {
      content: "Which exception type cannot be caught ?",
      options: [
        "A. CalloutException",
        "B. LimitException",
        "C. NoAccessException",
        "D. A custom Exception",
      ],
      answer: "B",
      title: "Question 43",
    },
    {
      content:
        "A developer is asked to create a Visualforce page that displays some Account fields as well as fields configured on the page layout for related Contacts.How should the developer implement this request?",
      options: [
        "A. Create a controller extension.",
        "B. Use the <apex:relatedList>tag.",
        "C. Add a method to the standard controller.",
        "D. Use the <apex:include> tag.",
      ],
      answer: "B",
      title: "Question 44",
    },
    {
      content:
        "A developer wants to mark eachAccount in a List<Account> as either or Inactive based on the LastModified field value being more than 90 days.Which Apex technique should the developer use?",
      options: [
        "A. A for loop, with an if/else statement inside",
        "B. AnIf/else statement, with a for loop inside",
        "C. A Switch statement, with a for loop inside",
        "D. A for loop, with a switch statement inside",
      ],
      answer: "A",
      title: "Question 45",
    },
    {
      content:
        "An Approval Process is defined in the Expense_Item__c. A business rule dictates that whenever a user changes the Status to 'Submitted' on an Expense_Report__c record, all the Expense_Item__c records related to the expense report must enter the approval process individually. Which approach should be used to ensurethe business requirement is met?",
      options: [
        "A. Create a Process Builder on Expense_Report__c to mark the related Expense_Item__c as submittable and trigger on Expense_item__c to submitthe records for approval.",
        "B. Create a Process Builder on Expense_Report__c with an 'Apex' action type to submit all related Expense_Item__c records when the criteria is met.",
        "C. Create two Process Builder, one on Expense_Report__c to mark the related Expense_Item__c as submittable and the second on Expense_Item__c to submit the records for approval.",
        "D. Create a Process Builder on Expense_Report__c with a 'Submit for Approval' action type to submit all related Expense_Item__c records when the criteria is met.",
      ],
      answer: "C",
      title: "Question 46",
    },
    {
      content:
        "A developer has an integer variable called maxAttempts. The developer meeds to ensure that once maxAttempts is initialized, it preserves its value for the lenght of the Apex transaction; while being able to share the variable's state between trigger executions. How should the developer declare maxAttempts to meet theserequirements?",
      options: [
        "A. Declare maxattempts as a constant using the static and final keywords",
        "B. Declare maxattempts as avariable on a helper class",
        "C. Declare maxattempts as a member variable on the trigger definition.",
        "D. Declare maxattempts as a private static variable on a helper class",
      ],
      answer: "A",
      title: "Question 47",
    },
    {
      content:
        "Which three process automations can immediately send an email notification to the owner of anOpportunity when its Amount is changed to be greater than $10,000? Choose 3 answers",
      options: [
        "A. Flow Builder",
        "B. Approval Process",
        "C. Workflow Rule",
        "D. Escalation Rule",
        "E. Process Builder",
      ],
      answer: "B,C,E",
      title: "Question 48",
    },
    {
      content:
        "Which three web technologies can be integrated into a Visualforce page? (Choose three.)",
      options: ["A. Java", "B. HTML", "C. JavaScript", "D. CSS", "E. PHP"],
      answer: "B,C,D",
      title: "Question 49",
    },
    {
      content:
        "A developer considers the following snippet of code:Based on this code, what is the value of x?",
      options: ["A. 3", "B. 2", "C. 4", "D. 1"],
      answer: "C",
      title: "Question 50",
    },
    {
      content:
        "Given the following trigger implementation:trigger leadTrigger on Lead (before update){final ID BUSINESS_RECORDTYPEID = '012500000009Qad';for(Lead thisLead : Trigger.new){if(thisLead.Company != null &&thisLead.RecordTypeId != BUSINESS_RECORDTYPEID){ thisLead.RecordTypeId = BUSINESS_RECORDTYPEID;}}}The developer receives deployment errors every time a deployment is attempted from Sandbox to Production.What should thedeveloper do to ensure a successful deployment?",
      options: [
        "A. Ensure the deployment is validated by a System Admin user on Production.",
        "B. Ensure BUSINESS_RECORDTYPEIDis pushed as part of the deployment components.",
        "C. Ensure a record type with an ID of BUSINESS_RECORDTYPEID exists on Production prior to deployment.",
        "D. Ensure BUSINESS_RECORDTYPEID is retrieved using Schema.Describe calls.",
      ],
      answer: "C",
      title: "Question 51",
    },
    {
      content:
        "Which three code lines are required to create a Lightning component on aVisualforce page? Choose 3 answers",
      options: [
        "A. $Lightning.useComponent",
        "B. $Lightning.use",
        "C. <apex:includeLightning/>",
        "D. $Lightning.createComponent",
        "E. <apex:slds/>",
      ],
      answer: "B,C,D",
      title: "Question 52",
    },
    {
      content:
        "Refer to the following code that runs in an Execute Anonymous block:",
      options: [
        "A. The transaction will succeed and the first ten thousand records will be committed to the database.",
        "B. The total numberof DML statements will be exceeded.",
        "C. In an environment where the full result set is returned, what is a possible outcome of this code?",
        "D. The total number of records processed as a result of DML statements will be exceeded",
        "E. The total number of records processed as a result of DML statements will be exceeded.",
      ],
      answer: "D",
      title: "Question 53",
    },
    {
      content:
        "A developer iscreating a page that allows users to create multiple Opportunities. The developer is asked to verify the current user's default } | Opportunity record type, and set certain default values based on the record type before inserting the record. i, J Calculator How can the developer find the current user's default record type? ns",
      options: [
        "A. o Use Opportunity. SObjectType.getDescribe().getRecordTypelnfos() to get a list of record types, and iterate through them until [ J isDefaultRecordTypeMapping() is true. Pencil & Paper |",
        "B. Query the Profile where the ID equals userInfo.getProfileID() and then use the profile.Opportunity.getDefaultRecordType() | | method. ] |",
        "C. Use the Schema.userlnfo.Opportunity.getDefaultRecordType() method. < Create the opportunity and check theopportunity.recordType before inserting, which will have the record ID of the current Dal user's default record type.",
      ],
      answer: "A",
      title: "Question 54",
    },
    {
      content:
        "A developer created a Visualforce page and custom controller to display the account type field as shown below. Custom controller code: public class customCtrlr{ private Account theAccount; public String actType; public customCtrlr() { theAccount =[SELECT Id, Type FROM Account WHERE Id =:apexPages.currentPage().getParameters().get('id')]; actType = theAccount.Type; } } Visualforce page snippet:The Account Type is {!actType} The value of the account type field is not being displayed correctly on the page. Assuming the custom controller is property referenced on the Visualforce page, what should the developer do to correct the problem?",
      options: [
        "A. Add a getter method for the actType attribute.",
        "B. Change theAccount attribute to public.",
        "C. ConverttheAccount.Type to a String.",
        "D. Add with sharing to the custom controller.",
      ],
      answer:
        "A  https://developer.salesforce.com/docs/atlas.en-us.pages.meta/pages/pages_controller_custom.htm ",
      title: "Question 55",
    },
    {
      content:
        "Universal Containers wants a list button to display a Visualforce page that allows users to edit multiple records. which Visualforce feature supports this requirement?",
      options: [
        "A. <apex:listButton> tag",
        "B. Controller extension",
        "C. RecordSetVar page attribute",
        "D. Custom controller",
      ],
      answer: "C",
      title: "Question 56",
    },
    {
      content: "Which scenario is valid for execution by unit tests?",
      options: [
        "A. Generate a Visualforce PDF with geccontentAsPDF ().",
        "B. Load data from a remote site with a callout.5. Set the created date of a record using a system method.Cc: Execute anonymous Apex as a different user.",
      ],
      answer: "A",
      title: "Question 57",
    },
    {
      content:
        "A developer must implement a CheckPaymentProcessor class that provides check processing payment capabilities that adhere to what defined for payments in the PaymentProcessor interface. public interface PaymentProcessor { void pay(Decimal amount); } Which is the correct implementation to use the PaymentProcessor interface class?",
      options: [
        "A. Public class CheckPaymentProcessor implements PaymentProcessor {public void pay(Decimal amount);}",
        "B. Public class CheckPaymentProcessor implements PaymentProcessor {public void pay(Decimal amount) {}}",
        "C. Public class CheckPaymentProcessor extends PaymentProcessor {public void pay(Decimal amount);}",
        "D. Public class CheckPaymentProcessor extends PaymentProcessor {public void pay(Decimal amount) {}}",
      ],
      answer: "A",
      title: "Question 58",
    },
    {
      content:
        "Which Salesforce feature allows a developer to see when a user lastlogged in to Salesforce if real-time notification is not required?",
      options: [
        "A. Calendar Events",
        "B. Event Monitoring Log",
        "C. Asynchronous Data Capture Events",
        "D. Developer Log",
      ],
      answer: "B",
      title: "Question 59",
    },
    {
      content:
        "Assuming that 'name; is a String obtained by an <apex:inputText> tag on a Visualforce page.Which two SOQL queries performed are safe from SOQL injections? Choose 2 answers",
      options: [
        "A. String query = '%' + name + '%';List<Account> results = [SELECT Id FROM Account WHERE Name LIKE :query];",
        "B. String query ='SELECT Id FROM Account WHERE Name LIKE \\''%' + name.noQuotes() + '%\\''; List<Account> results = Database.query(query);",
        "C. String query = 'SELECT Id FROM Account WHERE Name LIKE \\''%' +String.escapeSingleQuotes(name) + '%\\'';List<Account> results= Database.query(query);",
        "D. String query = 'SELECT Id FROM Account WHERE Name LIKE \\''%' + name + '%\\''; List<Account> results = Database.query(query);",
      ],
      answer: "A,C",
      title: "Question 60",
    },
    {
      content:
        "What are three considerations when usingthe @InvocableMethod annotation in Apex?Choose 3 answers",
      options: [
        "A. A method using the @InvocableMethod annotation can have multiple input parameters.",
        "B. A method using the @InvocableMethod annotation must define a return value.",
        "C. A method using the @InvocableMethod annotation must be declared as static",
        "D. Only one method using the @InvocableMethod annotqation can be defined per Apex class.",
        "E. A method using the @InvocableMethod annotation can be declared as Public or Global.",
      ],
      answer: "C,D,E",
      title: "Question 61",
    },
    {
      content:
        "which statement is true regarding execution order when triggers are associated to the same object and event?",
      options: [
        "A. Trigger execution order cannot be guaranteed.",
        "B. Triggers are executed alphabetically by trigger name.",
        "C. executed In the order theyare modified.",
        "D. Triggers are executed in the order they are created.",
      ],
      answer: "A",
      title: "Question 62",
    },
    {
      content:
        "A developer must modify the following code snippet to prevent the number of SOQL queries issued from exceeding the platform governor limit. public class without sharing OpportunityService( public static List<OpportunityLineItem> getOpportunityProducts(Set<Id> opportunityIds){ List<OpportunitylineItem> oppLineItems = new List<OpportunityLineItem>(); for(Id thisOppId : opportunityIds){ oppLineItems.addAll([Select Id FROM OpportunityLineItems WHERE OpportunityId = :thisOppId)]; } return oppLineItems; } } The above method might be called during a trigger execution via a Lightning component. Which technique should be implemented to avoid reaching the governor limit?",
      options: [
        "A. Use the System.Limits.getlimitQueries() method to ensure the number of queries is less than 100.",
        "B. Use the System.Limits.getQueries() method to ensure the number of queries is lessthan 100.",
        "C. Refector the code above to perform the SOQL query only if the Set of opportunityIds contains less 100 Ids.",
        "D. Refactor the code above to perform only one SOQL query, filtering by the Set of opportunityIds.",
      ],
      answer: "D",
      title: "Question 63",
    },
    {
      content:
        "A workflow updates the value of a custom field for an existing Account.How can a developer access the updated custom field value from a trigger?",
      options: [
        "A. By writing an After Update trigger andaccessing the field value from Trigger.old",
        "B. By writing, a Before Update trigger and accessing the field value from Trigger.new",
        "C. By writing an After Insert trigger and accessing the field value from Trigger.old",
        "D. By writing a Before Insert trigger and accessing the field value from Trigger.new",
      ],
      answer: "B",
      title: "Question 64",
    },
    {
      content:
        "Cloud Kicks Fitness, an ISV Salesforce partner, is developing a managed package application. One of theapplication modules allows the user to calculate body fat using the Apex class,BodyFat, and its method,calculateBodyFat(). The product owner wants to ensure this method is accessible by the consumer of the application when developing customizations outside the ISV's package namespace.Which approach should a developer take to ensurecalculateBodyFat()is accessible outside the package namespace?",
      options: [
        "A. Declare the class and method using the public access modifier.",
        "B. Declare the class as global and use thepublic access modifier on the method.",
        "C. Declare the class and method using the global access modifier.",
        "D. Declare the class as public and use the global access modifier on the method.",
      ],
      answer: "C",
      title: "Question 65",
    },
    {
      content:
        "What are two ways that a controller and extension can be specified on a Visualforce page?Choose 2 answers",
      options: [
        'A. Qo apex:page standardController="Account" extensions="myControllerExtension"',
        'B. [email protected]:page=Account extends="myControllerExtension"',
        'C. apex:page controller="Account" extensions="myControllerExtension""',
        'D. apex:page controllers="Account, myControllerExtension"',
      ],
      answer: "A,C",
      title: "Question 66",
    },
  ],
});
