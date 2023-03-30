window.testContent = window.testContent || [];
window.testContent.push({
  name: "PlatformDeveloper1.PDI.v2021-10-29.q72",
  content: [
    {
      content:
        "A Salesforce developer wants to review their code changes immediately and does not want to install anything on their computer or on the org.Which tool is best suited?",
      options: [
        "A. Salesforce Extension for VSCode",
        "B. Third-party apps from App Exchange",
        "C. Developer Console",
        "D. Setup Menu",
      ],
      answer: "C",
      title: "Question 1",
    },
    {
      content:
        "If apex code executes inside the execute() method of an Apex class when implementing the Batchable interface, which statement are true regarding governor limits? Choose 2 answers",
      options: [
        "A. The apex governor limits are reset for each iteration of the execute() mrthod.",
        "B. The Apex governor limits cannot be exceeded due to the asynchronous nature of the transaction,",
        "C. The Apex governor limits are relaxed while calling the costructor of the Apex class.",
        "D. The Apex governor limits might be higher due to the asynchronous nature of the transaction.",
      ],
      answer: "A,D",
      title: "Question 2",
    },
    {
      content:
        "An Approval Process is defined in the Expense_Item__c. A business rule dictates that whenever a user changes the Status to 'Submitted' on an Expense_Report__c record, all the Expense_Item__c records related to the expense report must enter the approval process individually. Which approach should be used to ensure the business requirement is met?",
      options: [
        "A. Create a Process Builder on Expense_Report__c with a 'Submit for Approval' action type to submit all related Expense_Item__c records when the criteria is met.",
        "B. Create a Process Builder on Expense_Report__c with an 'Apex' action type to submit all related Expense_Item__c records when the criteria is met.",
        "C. Create a Process Builder on Expense_Report__c to mark the related Expense_Item__c as submittable and trigger on Expense_item__c to submit the records for approval.",
        "D. Create two Process Builder, one on Expense_Report__c to mark the related Expense_Item__c as submittable and the second on Expense_Item__c to submit the records for approval.",
      ],
      answer: "D",
      title: "Question 3",
    },
    {
      content:
        "A developer is creating a page that allows users to create multiple Opportunities. The developer is asked to verify the current user's default } | Opportunity record type, and set certain default values based on the record type before inserting the record. i, J Calculator How can the developer find the current user's default record type? ns",
      options: [
        "A. Query the Profile where the ID equals userInfo.getProfileID() and then use the profile.Opportunity.getDefaultRecordType() | | method. ] |",
        "B. o Use Opportunity. SObjectType.getDescribe().getRecordTypelnfos() to get a list of record types, and iterate through them until [ J isDefaultRecordTypeMapping() is true. Pencil & Paper |",
        "C. Use the Schema.userlnfo.Opportunity.getDefaultRecordType() method. < Create the opportunity and check the opportunity.recordType before inserting, which will have the record ID of the current Dal",
      ],
      answer: "B  user's default record type. ",
      title: "Question 4",
    },
    {
      content:
        "which statement is true regarding execution order when triggers are associated to the same object and event?",
      options: [
        "A. Triggers are executed alphabetically by trigger name.",
        "B. executed In the order they are modified.",
        "C. Trigger execution order cannot be guaranteed.",
        "D. Triggers are executed in the order they are created.",
      ],
      answer: "C",
      title: "Question 5",
    },
    {
      content:
        "Which three statements are true regarding custom exceptions in Apex? (Choose three.)",
      options: [
        "A. A custom exception class must extend the system Exception class.",
        "B. A custom exception class can extend other classes besides the Exception class.",
        'C. A custom exception class name must end with "Exception".',
        "D. A custom exception class cannot contain member variables or methods.",
        "E. A custom exception class can implement one or many interfaces.",
      ],
      answer: "B,C,E",
      title: "Question 6",
    },
    {
      content:
        "Since Aura application events follow the traditional publish-subscribe model, which method is used to fire an event?",
      options: [
        "A. ernit()",
        "B. registerEvent()",
        "C. fireEvent()",
        "D. fire()",
      ],
      answer: "D",
      title: "Question 7",
    },
    {
      content: "what are the three languages used in the visualforce page?",
      options: [
        "A. Apex, Json, SQL",
        "B. C++, CSS, query",
        "C. Javascript, CSS, HTML",
      ],
      answer: "C",
      title: "Question 8",
    },
    {
      content:
        "How many accounts will be inserted by the following block ofcode? for(Integer i = 0 ; i <500; i++) { Account a = new Account(Name='New Account ' + i); insert a; }* 087. Boolean odk;Integer x;if(abok=false;integer=x;){X=1;}elseif(abok=true;integer=x;){X=2;}elseif(abok!=null;integer=x;){X=3;)elseif{X=4;}",
      options: ["A. X=9", "B. X=8", "C. X=10", "D. X=4"],
      answer: "D",
      title: "Question 9",
    },
    {
      content:
        "A developer created a Visualforce page and custom controller to display the account type field as shown below. Custom controller code: public class customCtrlr{ private Account theAccount; public String actType; public customCtrlr() { theAccount = [SELECT Id, Type FROM Account WHERE Id = :apexPages.currentPage().getParameters().get('id')]; actType = theAccount.Type; } } Visualforce page snippet: The Account Type is {!actType} The value of the account type field is not being displayed correctly on the page. Assuming the custom controller is property referenced on the Visualforce page, what should the developer do to correct the problem?",
      options: [
        "A. Change theAccount attribute to public.",
        "B. Convert theAccount.Type to a String.",
        "C. Add with sharing to the custom controller.",
        "D. Add a getter method for the actType attribute.",
      ],
      answer: "D",
      title: "Question 10",
    },
    {
      content:
        "For which three items can a trace flag be configured?Choose 3 answers",
      options: [
        "A. Process Builder",
        "B. User",
        "C. Apex Class",
        "D. Apex Trigger",
        "E. Visualforce",
      ],
      answer: "B,C,D",
      title: "Question 11",
    },
    {
      content:
        "Universal Containers decides to use purely declarative development to build out a new Salesforce application.Which three options can be used to build out the business logic layer for this application?Choose 3 answers",
      options: ["A. Process builder", "B. Validation Rules", "C. Flow Builder"],
      answer: "A,B,C",
      title: "Question 12",
    },
    {
      content:
        "A developer must provide a custom user interface when users edit a Contact. Users must be able to use the interface in Salesforce Classic and Lightning Experience.What should the developer do to provide the custom user interface?",
      options: [
        "A. Override the Contact's Edit button with a Lightning component in Salesforce Classic and a Lightning component in Lightning Experience.",
        "B. Override the Contact's Edit button with a Visualforce page in Salesforce Classic and a Lightning component in Lightning Experience.",
        "C. Override the Contact's Edit button with a Lightning page in Salesforce Classic and a Visualforce page in Lightning Experience.",
        "D. Override the Contact's Edit button with a Visualforce page in Salesforce Classic and a Lightning page inLightning Experience.",
      ],
      answer: "B",
      title: "Question 13",
    },
    {
      content:
        "Universal Containers has large number of custom applications that were built using a third-party javaScript framework and exposed using Visualforce pages. The Company wants to update these applications to apply styling that resembles the look and feel of Lightning Experience. What should the developer do to fulfill the business request in the quickest and most effective manner?",
      options: [
        "A. Incorporate the Salesforce Lightning Design System CSS stylesheet into the JavaScript applications.",
        "B. Enable Available for Lightning Experience, Lightning Communities, and the mobile app on Visualforce pages used by the custom application.",
        "C. Rewrite all Visualforce pages asLightning components.",
        "D. Set the attribute enableLightning to true in the definition.",
      ],
      answer: "D",
      title: "Question 14",
    },
    {
      content:
        "Universal Containers wants Opportunities to be locked from editing when reaching the Closed/Won stage.Which two strategies should a developer use to accomplish this? Choose 2 answers",
      options: ["A. Use a validation rule.", "B. Use a trigger."],
      answer: "A,B",
      title: "Question 15",
    },
    {
      content:
        "A developer has a single custom controller class that works with a Visualforce Wizard to support creating and editing multiple subjects. The wizard accepts data from user inputs across multiple Visualforce pages and from a parameter on the initial URL.Which three statements are useful inside the unit test to effectively test the custom controller?Choose 3 answers",
      options: [
        "A. Test.setCurrentPage(pageRef);",
        "B. String nextPage - controller.save().getUrl();",
        "C. ApexPages.CurrentPage().getParameters().put('input\\', 'TestValue');",
        "D. public ExtendedController(ApexPages StandardController cntrl) { }",
        "E. insert pageRef.",
      ],
      answer: "A,B,C",
      title: "Question 16",
    },
    {
      content:
        "A developer needs an Apex method that can process Account or Contact records. Which method signature should the developer use?",
      options: [
        "A. Public void doWork(Account Contact)",
        "B. Public void doWork(Account || Contatc)",
        "C. Public void doWork(Record theRecord)",
        "D. Public void doWork(sObject theRecord)",
      ],
      answer: "D",
      title: "Question 17",
    },
    {
      content:
        "A primaryid_c custom field exists on the candidate_c custom object. The filed is used to store each candidate's id number and is marked as Unique in the schema definition.As part of a data enrichment process. Universal Containers has a CSV file that contains updated data for all candidates in the system, f he file contains each Candidate's primary id as a data point. Universal Containers wants to upload this information into Salesforce, while ensuring all data rows are correctly mapped to a candidate in the system.Which technique should the developer implement to streamline the data upload?",
      options: [
        "A. Create a Process Builder on the Candidate_c object to map the records.",
        "B. Create a before Insert trigger to correctly map the records.",
        "C. A Update the primaryid__c field definition to mark it as an External Id",
        "D. Upload the CSV into a custom object related to Candidate_c.",
      ],
      answer: "C",
      title: "Question 18",
    },
    {
      content:
        "Universal Container use a simple order Management app. On the Order Lines, the order line total is calculated by multiplying the item price with the quantity ordered. There is a Master-Detail relationship between the Order and the Order Lines object.What is the practice to get the sum of all order line totals on the order header?",
      options: [
        "A. Declarative Roll-Up Summaries App",
        "B. Process Builder",
        "C. Apex Trigger",
        "D. Roll-Up Summary Field",
      ],
      answer: "D",
      title: "Question 19",
    },
    {
      content:
        "A developer wants to get access to the standard price book in the org while writing a test class that covers an OpportunityLineItem trigger. Which method allows access to the price book?",
      options: [
        "A. Use Test,getStandardPricebookid ( ) to get the standard price book ID.",
        "B. Use Test.loadData ( )and a static resource to load a standard price book",
        "C. Use @TestVisible to allow the test method to see the standard price book.",
        "D. Use @IsTest (SeeAllData=True) and delete the existing standard price book",
      ],
      answer: "A",
      title: "Question 20",
    },
    {
      content: "Which exception type cannot be caught?",
      options: [
        "A. LimitException",
        "B. Custom Exception",
        "C. CalloutException",
        "D. NoAccessException",
      ],
      answer: "A",
      title: "Question 21",
    },
    {
      content:
        "What is the maximum number of SOQL queries used by the following code? List<Account> aList = [SELECT Id FROM Account LIMIT 5]; for (Account a : aList){ List<Contact> cList = [SELECT Id FROM Contact WHERE AccountId = :a.Id); }",
      options: ["A. 2", "B. 6", "C. 5", "D. 1"],
      answer: "B",
      title: "Question 22",
    },
    {
      content:
        "A development team wants to use a deployment script lo automatically deploy lo a sandbox during their development cycles.Which two tools can they use to run a script that deploys to a sandbox?Choose 2 answers",
      options: [
        "A. Ant Migration Tool",
        "B. Developer Console",
        "C. SFDX CLI",
        "D. Change Sets",
      ],
      answer: "A,C",
      title: "Question 23",
    },
    {
      content:
        "A custom picklist field, Food_Preference__c, exist on a custom object. The picklist contains the following options: 'Vegan','Kosher','No Preference'. The developer must ensure a value is populated every time a record is created or updated. What is the most efficient way to ensure a value is selected every time a record is saved?",
      options: [
        "A. Mark the field as Required on the object's page layout.",
        "B. Set a validation rule to enforce a value is selected.",
        "C. Mark the field as Required on the field definition.",
        'D. Set "Use the first value in the list as the default value" as True.',
      ],
      answer: "B",
      title: "Question 24",
    },
    {
      content:
        "Which Lightning code segment should be written to declare dependencies on a Lightning component, c:accountList, that is used in a Visualforce page?A)B)C)D)",
      options: ["A. Option D", "B. Option B", "C. Option C", "D. Option A"],
      answer: "D",
      title: "Question 25",
    },
    {
      content:
        'A Licensed_Professional__c custom object exist in the system with two Master-Detail fields for the following objects: Certification__c and Contact. Users with the "Certification Representative" role can access the Certification records they own and view the related Licensed Professionals records, however users with the "Salesforce representative" role report they cannot view any Licensed professional records even though they own the associated Contact record. What are two likely causes of users in the "Sales Representative" role not being able to access the Licensed Professional records? Choose 2 answers',
      options: [
        "A. The organization recently modified the Sales representative role to restrict Read/Write access to Licensed_Professional__c",
        "B. The organization has a private sharing model for Certification__c, and Contact is the primary relationship in the Licensed_Professional__c object",
        "C. The organization's sharing rules for Licensed_Professional__c have not finished their recalculation process.",
        "D. The organization has a private sharing model for Certification__c, and Certification__c is the primary relationship in the Licensed_Professional__c object.",
      ],
      answer: "C,D",
      title: "Question 26",
    },
    {
      content:
        "What are three considerations when using the @InvocableMethod annotation in Apex?Choose 3 answers",
      options: [
        "A. A method using the @InvocableMethod annotation can be declared as Public or Global.",
        "B. Only one method using the @InvocableMethod annotqation can be defined per Apex class.",
        "C. A method using the @InvocableMethod annotation must define a return value.",
        "D. A method using the @InvocableMethod annotation must be declared as static",
        "E. A method using the @InvocableMethod annotation can have multiple input parameters.",
      ],
      answer: "A,B,D",
      title: "Question 27",
    },
    {
      content:
        "A developer needs to save a List of existing Account records named myAccounts to the database, but the records do not contain Salesforce Id values. Only the value of a custom text field configured as an External ID with an API name of Foreign_Key__c is known.Which two statements enable the developer to save the records to the database without an Id? (Choose two.)",
      options: [
        "A. Upsert myAccounts(Foreign_Key__c);",
        "B. Upsert myAccounts Foreign_Key__c;",
        "C. Database.upsert (myAccounts, Foreign_Key__c);",
        "D. Database.upsert(myAccounts).Foreign_Key__c;",
      ],
      answer: "B,C",
      title: "Question 28",
    },
    {
      content:
        "What is an example of a polymorphic lookup field in Salesforce?",
      options: [
        "A. The Parentid field on the standard Account object",
        "B. The Whatld field on the standard Event object",
        "C. The LeadId and Contactid fields on the standard Campaign Member object",
        "D. A custom field, Link__c, on the standard Contact object that looks up to an Account or a Campaign",
      ],
      answer: "B",
      title: "Question 29",
    },
    {
      content:
        "A developer needs to create a custom button for the Account object that, when clicked, will perform a series of calculation and redirect the user to a custom visualforce page.Which three attributes need to be defined with values in the <apex:page> tag to accomplish this?Choose 3 answers",
      options: [
        "A. renderAs",
        "B. standard Controller",
        "C. readOnly",
        "D. Action",
        "E. extensions",
      ],
      answer: "A,B,E",
      title: "Question 30",
    },
    {
      content:
        "A developer writes a single trigger on the Account object on the after insert and after update events. A workflow rule modifies a field every time an Account is created or updated.How many times will the trigger fire if a new Account is inserted, assuming no other automation logic is implemented on the Account?",
      options: ["A. 4", "B. 2", "C. 8", "D. 1"],
      answer: "B",
      title: "Question 31",
    },
    {
      content:
        "As a part of class implementation a developer must execute a SOQL query against a large data ser based on the contact object. The method implementation is as follows.Which two methods are best practice to implement heap size control for the above code? (Choose 2 Answers)",
      options: [
        "A. Use the FOR UPDATE option on the SOQL query to lock down the records retrieved.",
        "B. Use a SOQL FOR loop, to chunk the result set in batches of 200 records.",
        "C. Use WHERE clauses on the SOQL query to reduce the number of records retrieved.",
        "D. Use visual keyword when declaring the retrieve variable.",
      ],
      answer: "B,D",
      title: "Question 32",
    },
    {
      content:
        "Universal Containers wants a list button to display a Visualforce page that allows users to edit multiple records. which Visualforce feature supports this requirement?",
      options: [
        "A. Custom controller",
        "B. RecordSetVar page attribute",
        "C. <apex:listButton> tag",
        "D. Controller extension",
      ],
      answer: "B",
      title: "Question 33",
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
      title: "Question 34",
    },
    {
      content:
        "What is a benefit of developing applications in a multi-tenant environment?",
      options: [
        "A. Unlimited processing power and memory",
        "B. Access to predefined computing resources",
        "C. Default out-of-the-box configuration",
        "D. Enforced best practices for development",
      ],
      answer: "D",
      title: "Question 35",
    },
    {
      content:
        "How can a developer check the test coverage of active Process Builder and Flows deploying them in a Changing Set?",
      options: [
        "A. Use SOQL and the Tooling API",
        "B. Use the code Coverage Setup page",
        "C. Use the Apex testresult class",
        "D. Use the Flow properties page.",
      ],
      answer: "B",
      title: "Question 36",
    },
    {
      content:
        "A developer receives an error when trying to call a global server-side method using the @remoteAction decorator.How can the developer resolve the error?",
      options: [
        "A. Add static to the server-side method signature.",
        "B. Change the function signature to be private static.",
        "C. Decorate the server-side method with (static=false).",
        "D. A Decorate the server-side method with (static=true).",
      ],
      answer: "D",
      title: "Question 37",
    },
    {
      content:
        "A developer has to identify a method in en Apex class that performs resource intensive actions in memory by iterating over the result set of a SOQL statement on the account. The method also performs a SOQL statement to save the changes to the database.Which two techniques should the developer implement as a best practice to ensure transaction control and avoid exceeding governor limits?Choose 2 answers",
      options: [
        "A. Use the @ReadOnly annotation to bypass the number of rows returned by a SOQL.",
        "B. Use the System.Limit class to monitor the current CPU governor limit consumption.",
        "C. Use the Database.Savepoint method to enforce database Integrity.",
        "D. Use Partial DHL statements to ensure only valid data is committed.",
      ],
      answer: "B,C",
      title: "Question 38",
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
      title: "Question 39",
    },
    {
      content: "What is the result of the following code?",
      options: [
        "A. The record will be created and no error will be reported.",
        "B. The record will not be created and a exception will be thrown.",
        "C. The record will not be created and no error will be reported.",
        "D. The record will be created and a message will be in the debug log.",
      ],
      answer: "C",
      title: "Question 40",
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
      title: "Question 41",
    },
    {
      content: "What are two ways for a developer to execute tests in an org?",
      options: [
        "A. Tooling API",
        "B. Bulk API",
        "C. Matadata API",
        "D. Developer console",
      ],
      answer: "A,D",
      title: "Question 42",
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
      answer:
        'D  Reference: https://developer.salesforce.com/docs/atlas.en-us.pages.meta/pages/pages_output_pdf_renderas.htm You can generate a downloadable, printable PDF file of a Visualforce page using the PDF rendering service. Convert a page to PDF by changing the <apex:page> tag. <apex:page renderAs="pdf"> ',
      title: "Question 43",
    },
    {
      content:
        "An org tracks customer orders on an Order object and the items of an Order on the Line Item object. The Line Item object has a MasterDetail relationship to the order object. A developer has a requirement to calculate the order amount on an Order and the line amount on each Line item based on quantity and price.What is the correct implementation?",
      options: [
        "A. Write a single before trigger on the Line Item that calculates the item amount and updates the order amount on the Order.",
        "B. Write a process on the Line item that calculates the item amount and order amount and updates the filed on the Line Item and the order.",
        "C. Implement the line amount as a numeric formula field and the order amount as a roll-up summary field.",
        "D. Implement the Line amount as a currency field and the order amount as a SUM formula field.",
      ],
      answer: "C",
      title: "Question 44",
    },
    {
      content:
        "Universal container wants a list button to display a visualforce page that allows users to edit multiple records which visualforce feature supports this requirement.",
      options: [],
      answer: "  Recordsetvar page attribute ",
      title: "Question 45",
    },
    {
      content:
        "Universal Containers implemented a private sharing model for the Account object. A custom Account search tool was developed with Apex to help sales representatives find accounts that match multiple criteria they specify. Since its release, users of the tool report they can see Accounts they do not own. What should the developer use to enforce sharing permission for the currently logged-in user while using the custom search tool?",
      options: [
        "A. Use the UserInfo Apex class to filter all SOQL queries to returned records owned by the logged-in user.",
        "B. Use the with sharing keyword on the class declaration.",
        "C. Use the schema describe calls to determine if the logged-in users has access to the Account object.",
        "D. Use the without sharing keyword on the class declaration.",
      ],
      answer: "B",
      title: "Question 46",
    },
    {
      content:
        'A developer uses a loop to check each Contact in a list. When a Contact with the Title of"Boss" is found, the Apex method should jump to the first line of code outside of the for loop.Which Apex solution will let the developer implement this requirement?',
      options: ["A. Continue", "B. Exit", "C. break;", "D. Next"],
      answer: "C",
      title: "Question 47",
    },
    {
      content:
        "Which three Salesforce resources can be accessed from a Lightning web component' Choose 3 answers",
      options: [
        "A. Third-party web components",
        "B. Content asset files",
        "C. All external libraries",
        "D. SVG resources",
        "E. Static resources",
      ],
      answer: "C,D,E",
      title: "Question 48",
    },
    {
      content: "Which exception type cannot be caught ?",
      options: [
        "A. NoAccessException",
        "B. A custom Exception",
        "C. LimitException",
        "D. CalloutException",
      ],
      answer: "C",
      title: "Question 49",
    },
    {
      content:
        "A Lightning component has a wired property, searchResults, that stores a list of Opportunities. Which definition of the Apex method, to which the searchResults property is wired, should be used?",
      options: [
        "A. @AuraEnabled(cacheable=true)public List<Opportunity> search(String term) { /*implementation*/ }",
        "B. @AuraEnabled(cacheable=false)public static List<Opportunity> search(String term) { /*implementation*/ }",
        "C. @AuraEnabled(cacheable=true)public static List<Opportunity> search(String term) { /* implementation*/ }",
        "D. @AuraEnabled(cacheable=false)public List<Opportunity> search(String term) { /*implementation*/ }",
      ],
      answer: "C",
      title: "Question 50",
    },
    {
      content:
        "Universal Containers stores Orders and Line Items in Salesforce. For security reason, financial representatives are allowed to see information on the Order such as order amount, but they are not allowed to see the Line items on the Order. Which type of relationship should be used?",
      options: [
        "A. Indirect lookup",
        "B. Lookup",
        "C. Direct Lookup",
        "D. Master Detail",
      ],
      answer: "B",
      title: "Question 51",
    },
    {
      content:
        "Which aspect of Apex programming is limited due to multitenancy?",
      options: [
        "A. The number of active Apex classes",
        "B. The number of records processed in a loop",
        "C. The number of methods in an Apex Class",
        "D. The number of records returned from database queries",
      ],
      answer: "D",
      title: "Question 52",
    },
    {
      content:
        "Universal Containers wants to back up all of the data and attachments in its Salesforce org once month. Which approach should a developer use to meet this requirement?",
      options: [
        "A. Schedule a report.",
        "B. Create a Schedulable Apex class.",
        "C. Define a Data Export scheduled job.",
        "D. Use the Data Loader command line.",
      ],
      answer: "C",
      title: "Question 53",
    },
    {
      content:
        "How should a developer write unit tests for a private method in an Apex class?",
      options: [
        "A. Mark the Apex class as global.",
        "B. Add a test method in the Apex class.",
        "C. Use the TestVisible annotation.",
        "D. Use the SeeAllData annotation.",
      ],
      answer: "C",
      title: "Question 54",
    },
    {
      content:
        "Universal Containers hires a developer to build a custom search page to help user- find the Accounts they want. Users will be able to search on Name, Description, and a custom comments field.Which consideration should the developer be aware of when deciding between SOQ1 Mid SOSL ?Choose 2 answers",
      options: [
        "A. SOSL is able to return more records.",
        "B. SOSL is faster for tent searches.",
        "C. SOQL is able to return more records.",
        "D. SOQL is faster for text searches.",
      ],
      answer: "B,C",
      title: "Question 55",
    },
    {
      content:
        "A workflow updates the value of a custom field for an existing Account.How can a developer access the updated custom field value from a trigger?",
      options: [
        "A. By writing an After Update trigger and accessing the field value from Trigger.old",
        "B. By writing an After Insert trigger and accessing the field value from Trigger.old",
        "C. By writing a Before Insert trigger and accessing the field value from Trigger.new",
        "D. By writing, a Before Update trigger and accessing the field value from Trigger.new",
      ],
      answer: "D",
      title: "Question 56",
    },
    {
      content:
        "A developer must troubleshoot to pinpoint the causes of performance issues when a custom page loads in their org. Which tool should the developer use to troubleshoot?",
      options: [
        "A. Visual Studio Core IDE",
        "B. Developer Console",
        "C. AppExchange",
        "D. Salesforce CLI",
      ],
      answer: "B",
      title: "Question 57",
    },
    {
      content:
        "Given the following Apex statement:Account myAccount = [SELECT Id, Name FROM Account];What occurs when more than one Account is returned by the SOQL query?",
      options: [
        "A. An unhandled exception is thrown and the code terminates.",
        "B. The first Account returned is assigned to myAccount.",
        "C. The variable, myAccount, is automatically cast to the List data type.",
        "D. The query fails and an error is written to the debug log.",
      ],
      answer: "A",
      title: "Question 58",
    },
    {
      content:
        "Which Salesforce feature allows a developer to see when a user last logged in to Salesforce if real-time notification is not required?",
      options: [
        "A. Event Monitoring Log",
        "B. Calendar Events",
        "C. Developer Log",
        "D. Asynchronous Data Capture Events",
      ],
      answer: "A",
      title: "Question 59",
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
      answer: "D",
      title: "Question 60",
    },
    {
      content:
        "Which three code lines are required to create a Lightning component on a Visualforce page? Choose 3 answers",
      options: [
        "A. <apex:slds/>",
        "B. <apex:includeLightning/>",
        "C. $Lightning.createComponent",
        "D. $Lightning.use",
        "E. $Lightning.useComponent",
      ],
      answer: "B,C,D",
      title: "Question 61",
    },
    {
      content:
        "Which two characteristics are true for Aura component events? Choose 2 answers",
      options: [
        "A. Depending on the current propagation phase, calling event. Stoppropagation () may not stop the event propagation.",
        'B. If a container component needs to handle a component event, add a includeFacets" true" attribute to its handler.',
        "C. By default, containers can handle events thrown by components they contain.",
        "D. The event propagates to every owner in the containment hierarchy.",
      ],
      answer: "A,D",
      title: "Question 62",
    },
    {
      content:
        "Refer to the following code that runs in an Execute Anonymous block:",
      options: [
        "A. The transaction will succeed and the first ten thousand records will be committed to the database.",
        "B. The total number of records processed as a result of DML statements will be exceeded.",
        "C. In an environment where the full result set is returned, what is a possible outcome of this code?",
        "D. The total number of records processed as a result of DML statements will be exceeded",
        "E. The total number of DML statements will be exceeded.",
      ],
      answer: "D",
      title: "Question 63",
    },
    {
      content:
        "A developer must create an Apex class, contactcontroller, that a Lightning component can use to search for Contact records. User of the Lightning component should only be able to search Contact records to which they have access. Which two will restrict the records correctly?",
      options: [
        "A. public without sharing class ContactController",
        "B. public with sharing class ContactController",
        "C. public inherited sharing class ContactController",
        "D. public class ContactController",
      ],
      answer: "B,C",
      title: "Question 64",
    },
    {
      content:
        "What are two ways that a controller and extension can be specified on a Visualforce page?Choose 2 answers",
      options: [
        'A. apex:page controller="Account" extensions="myControllerExtension""',
        'B. apex:page controllers="Account, myControllerExtension"',
        'C. Qo apex:page standardController="Account" extensions="myControllerExtension"',
        'D. [email protected]:page=Account extends="myControllerExtension"',
      ],
      answer: "A,C",
      title: "Question 65",
    },
    {
      content:
        "A developer has a Apex controller for a Visualforce page that takes an ID as a URL parameter. How should the developer prevent a cross site scripting vulnerability?",
      options: [
        "A. ApexPages.currentPage() .getParameters() .get('url_param') .escapeHtml4()",
        "B. String.escapeSingleQuotes(ApexPages.currentPage() .getParameters(). get('url_param'))",
        "C. String.ValueOf(ApexPages.currentPage() .getParameters() .get('url_param'))",
        "D. ApexPages.currentPage() .getParameters() .get('url_param')",
      ],
      answer: "B",
      title: "Question 66",
    },
    {
      content:
        "What are three characteristics of change set deployments?Choose 3 answers",
      options: [
        "A. Deployment is done in a one-way, single transaction.",
        "B. Change sets can be used to transfer records.",
        "C. Change sets can deploy custom settings data.",
        "D. Sending a change set between two orgs requires a deployment connection.",
        "E. Change sets can only be used between related organizations.",
      ],
      answer: "A,B,E",
      title: "Question 67",
    },
    {
      content:
        "Where are two locations a developer can look to find information about the status of asynchronous or future cals? Choose 2 answers",
      options: [
        "A. Time-Based Workflow Monitor",
        "B. Apex Jobs",
        "C. Apex Flex Queue",
        "D. Paused Flow Interviews component",
      ],
      answer: "B,C",
      title: "Question 68",
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
      title: "Question 69",
    },
    {
      content:
        "A recursive transaction is limited by a DML statement creating records for these two objects:1. Accounts2. ContactsThe Account trigger hits a stack depth of 16.Which statement is true regarding the outcome of the transaction?",
      options: [
        "A. The transaction fails and all the changes are rolled back.",
        "B. The transaction succeeds and all the changes are committed to the database.",
        "C. The transaction succeeds as long as the Contact trigger stack depth is less than 16.",
        "D. The transaction fails only if the Contact trigger stack depth is greater or equal to 16.",
      ],
      answer: "B",
      title: "Question 70",
    },
    {
      content:
        "A developer must create a CreditcardPayment class that provides an implementation of an existing Payment class. Public virtual class Payment { public virtual void makePayment(Decimal amount) { /*implementation*/ } } Which is the correct implementation?",
      options: [
        "A. Public class CreditCardPayment implements Payment {public virtual void makePayment(Decimal amount) { /*implementation*/ }}",
        "B. Public class CreditcardPayment extends Payment {public override void makePayment(Decimal amount) { /*implementation*/ }}",
        "C. Public class CreditCardPayment implements Payment {public override void makePayment(Decimal amount) { /*Implementation*/ }}",
        "D. Public class CreditCardPayment extends Payment {public virtual void makePayment(Decimal amount) { /*implementation*/ }}",
      ],
      answer: "B",
      title: "Question 71",
    },
    {
      content:
        "What is a key difference between a Master-Detail Relationship and a Lookup Relationship?",
      options: [
        "A. A Lookup Relationship is a required field on an object.",
        "B. A Master-Detail Relationship detail record inherits the sharing and security of its master record.",
        "C. When a record of a master object in a Lookup Relationship is deleted, the detail records are also deleted.",
        "D. When a record of a master object in a Master-Detail Relationship is deleted, the detail records are kept and not deleted.",
      ],
      answer: "B",
      title: "Question 72",
    },
  ],
});
