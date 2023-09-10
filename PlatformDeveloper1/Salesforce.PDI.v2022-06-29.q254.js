window.testContent = window.testContent || [];
var testId = "PlatformDeveloper1";
var testName = "PlatformDeveloper1.PDI";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "PlatformDeveloper1.PDI.v2022-06-29.q254",
  content: [
    {
      content:
        "A developer wrote a unit test to confirm that a custom exception works properly in a custom controller, but the test failed due to an exception being thrown.Which step should the developer take to resolve the issue and properly test the exception?",
      options: [
        "A. Use try/catch within the unit test to catch the exception.",
        "B. Use the database methods with all or none set to FALSE.",
        "C. Use Test.isRunningTest() within the custom controller.",
        "D. Use the finally bloc within the unit test to populate the exception.",
      ],
      answer: "A",
      title: "Question 1",
    },
    {
      content: "Which action may cause triggers to fire?",
      options: [
        "A. Changing a user's default division when the transfer division option is checked",
        "B. Updates to Feed Items",
        "C. Renaming or replacing a picklist entry",
        "D. Cascading delete operations",
      ],
      answer: "B",
      title: "Question 2",
    },
    {
      content:
        "Which three options allow a developer to use custom styling in a Visualforce page? (Choose three.)",
      options: [
        "A. <apex:stylesheet> tag",
        "B. <apex:stylesheets>tag",
        "C. Inline CSS",
        "D. <apex:style>tag",
        "E. A static resource",
      ],
      answer: "A,C,E",
      title: "Question 3",
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
      title: "Question 4",
    },
    {
      content:
        "A visualforce interface is created for Case Management that includes both standard and custom functionality defined in an Apex class called myControllerExtension. The visualforce page should include which<apex:page> attribute(s) to correctly implement controller functionality?",
      options: [
        'A. Controller=" myControllerExtension"',
        'B. Controller = "case" and extensions =" myControllerExtension"',
        'C. Extensions=" myControllerExtension"',
        'D. StandardController = "case" and extensions =" myControllerExtension"',
      ],
      answer: "D",
      title: "Question 5",
    },
    {
      content:
        "Which approach should be used to provide test data for a test class?",
      options: [
        "A. Use a test data factory class to create test data.",
        "B. Query for existing records in the database.",
        "C. Execute anonymous code blocks that create data.",
        "D. Access data in @TestVisible class variables.",
      ],
      answer: "A",
      title: "Question 6",
    },
    {
      content: "How can a developer implement this feature?",
      options: [
        "A. Build a workflow rule.",
        "B. Build a flow with Flow Builder.",
        "C. Build an account approval process.",
        "D. Build an account assignment rule.",
      ],
      answer: "B",
      title: "Question 7",
    },
    {
      content:
        "A developer creates a Lightning web component that imports a method within an Apex class. When a Validate button is pressed, the method runs to execute complex validations.In this implementation scenario, which artifact is part of the Controller according to the MVC architecture?",
      options: [
        "A. XML file",
        "B. HTML file",
        "C. JavaScript file",
        "D. Apex class",
      ],
      answer: "D",
      title: "Question 8",
    },
    {
      content:
        "Which salesforce org has a complete duplicate copy of the production org including data and configuration?",
      options: [
        "A. Full Sandbox",
        "B. Production",
        "C. Developer Pro Sandbox",
        "D. Partial Copy Sandbox",
      ],
      answer: "A",
      title: "Question 9",
    },
    {
      content:
        "Which three resources in a Lightning Component Bundle can contain JavaScript functions? Choose 3",
      options: [
        "A. Style",
        "B. Design",
        "C. Helper",
        "D. Controller",
        "E. Renderer",
      ],
      answer: "C,D,E",
      title: "Question 10",
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
      title: "Question 11",
    },
    {
      content:
        "What will be the output in the debug log in the event of a QueryExeption during a call to the @query method in the following Example?",
      options: [
        "A. Querying Accounts. Query Exception. Done",
        "B. Querying Accounts. Query Exception.",
        "C. Querying Accounts. Custom Exception Done.",
        "D. Querying Accounts. Custom Exception.",
      ],
      answer: "A",
      title: "Question 12",
    },
    {
      content:
        "A developer created a weather app that contains multiple Lightning web components.One of the components, called Toggle, has a toggle for Fahrenheit or Celsius units. Another component, called Temperature, displays the current temperature in the unit selected in the Toggle component When a user toggles from Fahrenheit to Celsius or vice versa in the Toggle component, the information must be sent to the Temperature component so the temperature can be converted and displayed.What is the recommend way to accomplish this?",
      options: [
        "A. Create a custom event to handle the communicate between the components.",
        "B. The Toggle component should call a method in the Temperature component.",
        "C. Use Lightning Message Service to communicate between the component.",
        "D. Use Lightning Message Service to communicate between the components.",
      ],
      answer: "A",
      title: "Question 13",
    },
    {
      content:
        "A developer creates a Workflow Rule declaratively that updates a field on an object. An Apex update trigger exists for that object. What happens when a user updates a record?",
      options: [
        "A. The Apex Trigger is fired more than once.",
        "B. No changes are made to the data.",
        "C. The Workflow Rule is fired more than once.",
        "D. Both the Apex Trigger and Workflow Rule are fired only once.",
      ],
      answer: "A",
      title: "Question 14",
    },
    {
      content:
        "A developer identifies the following triggers on the Expense_c object:DeleteExpense,applyDefaultstoexpensevalidateexpenseupdate;The triggers process before delete, before insert, and before update events respectively.Which two techniques should the developer implement to ensure trigger best practice are followed?",
      options: [
        "A. Unify all three triggers in a single trigger on the Expense__c object that includes all events.",
        "B. Maintain all three triggers on the Expense__c object, but move the Apex logic out for the trigger definition.",
        "C. Create helper classes to execute the appropriate logic when a record is saved.",
        "D. Unify the before insert and before update triggers and use Process Builder for the delete action.",
      ],
      answer: "A,C",
      title: "Question 15",
    },
    {
      content:
        "A developer considers the following snippet of code:Based on this code, what is the value of x?",
      options: ["A. 2", "B. 4", "C. 1", "D. 3"],
      answer: "B",
      title: "Question 16",
    },
    {
      content: "What is a capability of the Developer Console?",
      options: [
        "A. Execute Anonymous Apex code, Create/Edit code, Deploy code changes.",
        "B. Execute Anonymous Apex code, Create/Edit code, view Debug Logs.",
        "C. Execute Anonymous Apex code, Run REST API, create/Edit code.",
        "D. Execute Anonymous Apex code, Run REST API, deploy code changes.",
      ],
      answer: "B",
      title: "Question 17",
    },
    {
      content:
        'Which query should a developer use to obtain the Id and Name of all the Leads, Accounts, and Contacts that have the company name "Universal Containers"?',
      options: [
        "A. FIND 'Universal Containers' IN CompanyName Fields RETURNING lead(id,name), account (id,name), contact(id,name)",
        "B. IND 'Universal Containers' IN Name Fields RETURNING lead(id, name), account(id,name), contact(id,name)",
        "C. SELECT Lead.id, Lead. Name, Account.id, Account.Name, Contact.Id, Contact. Name FROM Lead, Account, Contact WHERE CompanyName = 'Universal Containers'",
        "D. SELECT lead(id, name), account(id, name), contact(id,name) FROM Lead, Account, Contact WHERE Name = 'Universal Containers'",
      ],
      answer: "B",
      title: "Question 18",
    },
    {
      content:
        "What should a developer use to implement an automate approval process submission for case?",
      options: [
        "A. Process builder.",
        "B. A workflow rules.",
        "C. An assignment rules.",
        "D. Scheduled apex.",
      ],
      answer: "A",
      title: "Question 19",
    },
    {
      content:
        "From which 2 locations can a developer determine the overall code coverage for a sandbox?",
      options: [
        "A. The apex classes setup page",
        "B. The test suite run panel of the developer console",
        "C. The tests tab of the developer console",
        "D. The apex test execution page",
      ],
      answer: "A,C",
      title: "Question 20",
    },
    {
      content:
        "Given the code block: Integer x; For(x=0;x<10; x+=2) { If(x==8) break; If(x==10) break; } System.debug(x); Which value will the system debug statement display?",
      options: ["A. 10", "B. 4", "C. 8", "D. 2"],
      answer: "C",
      title: "Question 21",
    },
    {
      content:
        "When can a developer use a custom Visualforce page in a Force.com application? (Choose 2)",
      options: [
        "A. To generate a PDF document with application data",
        "B. To modify the page layout settings for a custom object",
        "C. To create components for dashboards and layouts",
        "D. To deploy components between two organizations",
      ],
      answer: "A,C",
      title: "Question 22",
    },
    {
      content:
        "Which two are best practices when it comes to component and application event handling? (Choose two.)",
      options: [
        "A. Use component events to communicate actions that should be handled at the application level.",
        "B. Try to use application events as opposed to component events.",
        "C. Handle low-level events in the event handler and re-fire them as higher-level events.",
        "D. Reuse the event logic in a component bundle, by putting the logic in the helper.",
      ],
      answer: "C,D",
      title: "Question 23",
    },
    {
      content:
        "Which statement about change set deployments is accurate? (Choose 3)",
      options: [
        "A. They require a deployment connection.",
        "B. They ca be used to transfer Contact records.",
        "C. They use an all or none deployment model.",
        "D. They can be used only between related organizations.",
        "E. They can be used to deploy custom settings data.",
      ],
      answer: "A,C,D",
      title: "Question 24",
    },
    {
      content:
        "A candidate may apply to multiple jobs at the company Universal Containers by submtting a single application per job posting. Once an application is submitted for a job posting, that application cannot be modified to be resubmitted to a different job posting.What can the administrator do to associate an application with each job posting in the schema for the organization?",
      options: [
        "A. Create a lookup relationship on both objects to a junction object called Job Posting Applications.",
        "B. Create a master-detail relationship in the Application custom object to the Job Postings custom object.",
        "C. Create a master-detail relationship in the Job Postings custom object to the Applications custom object.",
        "D. Create a lookup relationship in the Applications custom object to the Job Postings custom object",
      ],
      answer: "C",
      title: "Question 25",
    },
    {
      content:
        "What is a benefit of using an after insert trigger over using a before insert trigger?",
      options: [
        "A. An after insert trigger allows a developer to bypass validation rules when updating fields on the new record.",
        "B. An after insert trigger allows a developer to make a callout to an external service.",
        "C. An after insert trigger allows a developer to insert other objects that reference the new record.",
        "D. An after insert trigger allows a developer to modify fields in the new record without a query.",
      ],
      answer: "C",
      title: "Question 26",
    },
    {
      content:
        "A developer has a VF page and custom controller to save Account records. The developer wants to display any validation rule violation to the user. How can the developer make sure that validation rule violations are displayed?",
      options: [
        "A. Include <apex:messages> on the Visualforce page.",
        "B. Add custom controller attributes to display the message.",
        "C. Use a try/catch with a custom exception class.",
        "D. Perform the DML using the Database.upsert() methodhttps://developer.salesforce.com/docs/atlas.en-us.pages.meta/pages/pages_compref_message.htm",
      ],
      answer: "A",
      title: "Question 27",
    },
    {
      content:
        "Which statement generates a list of Leads and Contacts that have a field with the phrase 'ACME'?",
      options: [
        'A. Map <sObject> searchList = (FIND "*ACME*" IN ALL FIELDS RETURNING Contact, Lead);',
        'B. List<List <sObject>> searchList = (FIND "*ACME*" IN ALL FIELDS RETURNING Contact, Lead);',
        "C. List<List < sObject>> searchList = (SELECT Name, ID FROM Contact, Lead WHERE Name like '%ACME%');",
        'D. List <sObject> searchList = (FIND "*ACME*" IN ALL FIELDS RETURNING Contact, Lead);',
      ],
      answer: "B",
      title: "Question 28",
    },
    {
      content:
        "Universal Containers (UC) decided it will not to send emails to support personnel directly from Salesforce in the event that an unhandled exception occurs. Instead, UC wants an external system be notified of the error.What is the appropriate publish/subscribe logic to meet these requirements?",
      options: [
        "A. Publish the error event using the addError() method and write a trigger to subscribe to the event and notify the external system.",
        "B. Have the external system subscribe to the BatchApexError event, no publishing is necessary.",
        "C. Publish the error event using the addError() method and have the external system subscribe to the event using CometD.",
        "D. Publish the error event using the Eventbus.publish() method and have the external system subscribe to the event using CometD.",
      ],
      answer: "D",
      title: "Question 29",
    },
    {
      content:
        "Which two statement can a developer use to throw a custom exception of type MissingFieldValueException?Choose 2 answers",
      options: [
        "A. Throw Exception(new MissingFieldValueException());",
        "B. Throw new MissingFieldValueException('Problem occurred');",
        "C. Throw (MissingFieldValueException,'Problem occurred');",
        "D. Throw new MissingFieldValueException();",
      ],
      answer: "B,D",
      title: "Question 30",
    },
    {
      content:
        "Which three statements are true regarding cross-object formulas? Choose 3 answers",
      options: [
        "A. Cross-object formulas can reference fields from master-detail or lookup relantionships",
        "B. Cross-object formulas can be referenced in roll-up summary field",
        "C. Cross-object formulas can reference child fields to perform an average",
        "D. Cross-object formulas can expose data the user does not have access to in a record",
        "E. Cross-object formulas can reference fields from objects that are up to 10 relantionship away",
      ],
      answer: "A,D,E",
      title: "Question 31",
    },
    {
      content: "Which two number expressions evaluate correctly? (Choose two.)",
      options: [
        "A. Double d = 3.14159;",
        "B. Decimal d = 3.14159;",
        "C. Long l = 3.14159;",
        "D. Integer I = 3.14159;",
      ],
      answer: "A,B",
      title: "Question 32",
    },
    {
      content:
        "An sObject named Application_c has a lookup relationship to another sObject named Position_c. Both Application _c and Position_c have a picklist field named Status_c.When the Status_c field on Position_c is updated, the Status_c field on Application_c needs to be populated automatically with the same value, and execute a workflow rule on Application_c.How can a developer accomplish this?",
      options: [
        "A. By changing Application_c.Status_c into a formula field.",
        "B. By changing Application_c.Status_c into a roll -up summary field.",
        "C. By using an Apex trigger with a DML operation.",
        "D. By configuring a cross-object field update with a workflow.",
      ],
      answer: "C",
      title: "Question 33",
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
      title: "Question 34",
    },
    {
      content:
        "A developer of Universal Containers is tasked with implementing a new Salesforce application that must be able to by their company's Salesforce administrator.Which three should be considered for building out the business logic layer of the application? Choose 3 answers",
      options: [
        "A. Workflows",
        "B. Invocable Actions",
        "C. validation Rules",
        "D. Process Builder",
        "E. Scheduled Jobs",
      ],
      answer: "A,C,D",
      title: "Question 35",
    },
    {
      content:
        'The following Apex method is part of the ContactService class that is called from a trigger: public static void setBusinessUnitToEMEA(Contact thisContact){ thisContact.Business_Unit__c = "EMEA" ; update thisContact; } How should the developer modify the code to ensure best practice are met?',
      options: [
        "A. Publicstatic void setBusinessUnitToEMEA(List<Contact> contacts){for(Contact thisContact : contacts){thisContact.Business_Unit__c = 'EMEA' ;update contacts[0];}}",
        "B. Public static void setBusinessUnitToEMEA(List<Contact> contacts){for(ContactthisContact : contacts) {thisContact.Business_Unit__c = 'EMEA' ;}update contacts;}",
        "C. Public static void setBusinessUnitToEMEA(Contact thisContact){List<Contact> contacts = new List<Contact>();contacts.add(thisContact.Business_Unit__c ='EMEA');update contacts;}",
        "D. Public void setBusinessUnitToEMEA(List<Contact> contatcs){contacts[0].Business_Unit__c = 'EMEA' ;update contacts[0];}",
      ],
      answer: "C",
      title: "Question 36",
    },
    {
      content:
        "A developer has the following requirements:Calculate the total amount on an Order.Calculate the line amount for each Line Item based on quantity selected and price.Move Line Items to a different Order if a Line Item is not stock.Which relationship implementation supports these requirements?",
      options: [
        "A. Line Items has a Master-Detail field to Order and the Master can be re-parented.",
        "B. Order has a Lookup field to Line Item and there can be many Line Items per Order.",
        "C. Order has a Master-Detail field to Line Item and there can be many Line Items per Order.",
        "D. Line Item has a Lookup field to Order and there can be many Line Items per Order",
      ],
      answer: "A",
      title: "Question 37",
    },
    {
      content:
        "Which tag should a developer include when styling from external CSS is required in a Visualforce page?",
      options: [
        "A. Apex : includeStyle",
        "B. Apex : includeScript",
        "C. Apex : require",
        "D. Apex : stylesheet",
      ],
      answer: "D",
      title: "Question 38",
    },
    {
      content:
        "A developer wants to create a custom object to track Customer Invoices.How should Invoices and Accounts be related to ensure that all Invoices are visible to everyone with access to an Account?",
      options: [
        "A. The Invoice should have a Master-Detail relationship to the Account",
        "B. The Account should have a Lookup relationship to the Invoice",
        "C. The Invoice should have a Lookup relationship to the Account Previous",
        "D. The Account should have a Master-Detail relationship to the Invoice.",
      ],
      answer: "A",
      title: "Question 39",
    },
    {
      content:
        "A developer created a Visualforce page and custom controller to display the account type field as shown below. Custom controller code: public class customCtrlr{ private Account theAccount; public String actType; public customCtrlr() { theAccount = [SELECT Id, Type FROM Account WHERE Id = :apexPages.currentPage().getParameters().get('id')]; actType = theAccount.Type; } } Visualforce page snippet: The Account Type is {!actType} The value of the account type field is not being displayed correctly on the page. Assuming the custom controller is property referenced on the Visualforce page, what should the developer do to correct the problem?",
      options: [
        "A. Add a getter method for the actType attribute.",
        "B. Change theAccount attribute to public.",
        "C. Convert theAccount.Type to a String.",
        "D. Add with sharing to the custom controller.",
      ],
      answer: "A",
      title: "Question 40",
    },
    {
      content:
        "On which object can an administrator create a roll-up summary field?",
      options: [
        "A. Any object that is on the master side of a master-detail relationship.",
        "B. Any object that is on the parent side of a lookup relationship.",
        "C. Any object that is on the child side of a lookup relationship.",
        "D. Any object that is on the detail side of a master-detail relationship.",
      ],
      answer: "A",
      title: "Question 41",
    },
    {
      content:
        "How can a developer check the test coverage of active Process Builder and Flows deploying them in a Changing Set?",
      options: [
        "A. Use the Apex testresult class",
        "B. Use the Flow properties page.",
        "C. Use SOQL and the Tooling API",
        "D. Use the code Coverage Setup page",
      ],
      answer: "C",
      title: "Question 42",
    },
    {
      content:
        "The sales management team requires that the lead source field of the Lead record be populated when Lead is converted. What would a developer use to ensure that a user populates the Lead source field?",
      options: [
        "A. Process builder",
        "B. Validation rule",
        "C. Workflow rule",
        "D. Formula field",
      ],
      answer: "B",
      title: "Question 43",
    },
    {
      content:
        "The sales team at Universal Containers would like to see a visual indicator appear on both Account and Opportunity page layouts to alert salespeople when an Account is late making payments or has entered the collections process. What can a developer implement to achieve this requirement without having to write custom code?",
      options: [
        "A. Roll-up Summary Field",
        "B. Formula Field",
        "C. Quick Action",
        "D. Workflow Rule",
      ],
      answer: "B",
      title: "Question 44",
    },
    {
      content:
        "Universal Containers recently transitioned from Classic to Lighting Experience. One of its business processes requires certain value from the opportunity object to be sent via HTTP REST callout to its external order management system based on a user-initiated action on the opportunity page. Example values are as follow Name Amount Account Which two methods should the developer implement to fulfill the business requirement? (Choose 2 answers)",
      options: [
        "A. Create a Lightning component that performs the HTTP REST callout, and use a Lightning Action to expose the component on the Opportunity detail page.",
        "B. Create a Process Builder on the Opportunity object that executes an Apex immediate action to perform the HTTP REST callout whenever the Opportunity is updated.",
        "C. Create an after update trigger on the Opportunity object that calls a helper method using @Future(Callout=true) to perform the HTTP REST callout.",
        "D. Create a Visualforce page that performs the HTTP REST callout, and use a Visualforce quick action to expose the component on the Opportunity detail page.",
      ],
      answer: "A,C",
      title: "Question 45",
    },
    {
      content:
        "Which two events need to happen when deploying to a production org? Choose 2 answers",
      options: [
        "A. All test and triggers must have at least 75% test coverage combined",
        "B. All Apex code must have at least 75% test coverage.",
        "C. All triggers must have at least 1% test coverage.",
        "D. All triggers must have at least 75% test coverage.",
      ],
      answer: "B,C",
      title: "Question 46",
    },
    {
      content:
        "A developer must troubleshoot to pinpoint the causes of performance issues when a custom page loads in their org. Which tool should the developer use to troubleshoot?",
      options: [
        "A. Developer Console",
        "B. AppExchange",
        "C. Visual Studio Core IDE",
        "D. Salesforce CLI",
      ],
      answer: "A",
      title: "Question 47",
    },
    {
      content:
        "How should a custom user interface be provided when a user edits an Account in Lightning Experience?",
      options: [
        "A. Override the Account's Edit button with Lightning page.",
        "B. Override the Account's Edit button with Lightning Flow",
        "C. Overridethe Account's Edit button with Lightning Action",
        "D. Override the Account's Edit button with Lightning component.",
      ],
      answer: "D",
      title: "Question 48",
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
      title: "Question 49",
    },
    {
      content:
        "What is the result of the debug statements in testMethod3 when you create test data using testSetup in below code?",
      options: [
        "A. Account0.Phone=888-1515, Account1.Phone=999-2525",
        "B. Account0.Phone=333-8781, Account1.Phone=333-8780",
        "C. Account0.Phone=888-1515, Account1.Phone=999-1515",
        "D. Account0.Phone=333-8780, Account1.Phone=333-8781",
      ],
      answer: "D",
      title: "Question 50",
    },
    {
      content:
        "A developer must create a ShippingCalculator class that cannot be instantiated and must include a working default implementation of a calculate method, that sub-classes can override.What is the correct implementation of the ShippingCalculator class?",
      options: ["A. Option D", "B. Option A", "C. Option C", "D. Option B"],
      answer: "D",
      title: "Question 51",
    },
    {
      content:
        "Given the code below, what can be done so that recordcount can be accessed by a test class, but not by a non-test class? Public class mycontroller{ private integer recordcount; }",
      options: [
        "A. Change recordcount from private to public",
        "B. Add a seealldata annotation to the test class",
        "C. Add the testvisible annotation to recordcount",
        "D. Add the testvisible annotation to the mycontroller class",
      ],
      answer: "C",
      title: "Question 52",
    },
    {
      content:
        "A developer created a helper class with a method that can be called from Visualforce pages, web services, triggers, and of even anonymous code. When the method is called from a trigger, the developer needs to execute logic that should not be executed If the method Is called from anywhere else. How can the developer determine if the code Is executed in a trigger context?",
      options: [
        "A. Use the executeOnTrigger annotation on the method definition.",
        "B. Check if Trigger.newMap !=null.",
        "C. Check if System.executionContext =='Trigger'.",
        "D. Check if Trigger.isExecuting ==true",
      ],
      answer: "D",
      title: "Question 53",
    },
    {
      content:
        "A developer needs to know if all tests currently pass in a Salesforce environment. Which feature can the developer use? (Choose 2)",
      options: [
        "A. Developer Console",
        "B. ANT Migration Tool",
        "C. Salesforce UI Apex Test Execution",
        "D. Workbench Metadata Retrieval",
      ],
      answer: "A,C",
      title: "Question 54",
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
      title: "Question 55",
    },
    {
      content:
        "Which two automation tools include a graphical designer? Choose 2 answers",
      options: [
        "A. Flow builder",
        "B. Approvals",
        "C. Process builder",
        "D. Workflows",
      ],
      answer: "A,B",
      title: "Question 56",
    },
    {
      content:
        "What are two correct examples of the model in the salesforce MVC architecture? Choose 2 answers.",
      options: [
        "A. Workflow rule on the contact object",
        "B. Standard account lookup on the contract object",
        "C. Standard lightning component",
        "D. Custom field on the custom wizard_c object",
      ],
      answer: "A,C",
      title: "Question 57",
    },
    {
      content:
        "How many levels of child records can be returned in a single SOQL query from one parent object?",
      options: ["A. 5", "B. 1", "C. 7", "D. 3"],
      answer: "B",
      title: "Question 58",
    },
    {
      content:
        "A developer created a visualforce page using a custom controller that calls an apex helper class. A method in the helper class hits a governor limit. what is the result of the transaction?",
      options: [
        "A. All changes in the transaction are rolled back",
        "B. The custom controller calls the helper class method ag",
        "C. The helper class creates a savepoint and continues",
        "D. All changes made by the custom controller are saved",
      ],
      answer: "D",
      title: "Question 59",
    },
    {
      content:
        "How can a developer get all of the available record types for the current user on the case object?",
      options: [
        "A. Use SOQL to get all cases",
        "B. Use describesobjectresult of the case object",
        "C. Use describefieldresult of the case.recordtype field",
        "D. Use case.getrecordtypes()",
      ],
      answer: "C",
      title: "Question 60",
    },
    {
      content:
        "A developer wants to retrieve the Contacts and Users with the email address '[email protected]'.Which SOSL statement should the developer use?",
      options: [
        "A. FIND Email IN Contact, User FOR {dev2uc.com}",
        "B. FIND {Email = '[email protected]'} IN Contact, User",
        "C. FIND {Email = '[email protected]'} RETURNING Contact (Email), User (Email)",
        "D. FIND {[email protected]} IN Email Fields RETURNING Contact (Email), User (Email)",
      ],
      answer: "D",
      title: "Question 61",
    },
    {
      content:
        "A developer wants to get access to the standard price book in the org while writing a test class that covers an OpportunityLineItem trigger. Which method allows access to the price book?",
      options: [
        "A. Use Test.loadData ( )and a static resource to load a standard price book",
        "B. Use Test,getStandardPricebookid ( ) to get the standard price book ID.",
        "C. Use @TestVisible to allow the test method to see the standard price book.",
        "D. Use @IsTest (SeeAllData=True) and delete the existing standard price book",
      ],
      answer: "B",
      title: "Question 62",
    },
    {
      content:
        "An Apex method, getAccounts, that returns a List of Accounts given a searchTerm, is available for Lightning Web components to use.What is the correct definition of a Lightning Web component property that uses the getAccounts method?",
      options: ["A. Option A", "B. Option C", "C. Option D", "D. Option B"],
      answer: "B",
      title: "Question 63",
    },
    {
      content:
        "What declarative method helps ensure quality data? Choose 3 answers",
      options: [
        "A. Workflow alerts",
        "B. Validation rules",
        "C. Lookup filters",
        "D. Page layouts",
        "E. Exception handling",
      ],
      answer: "B,C,D",
      title: "Question 64",
    },
    {
      content:
        "How can a developer check the test coverage of active Process Builder and Flows deploying them in a Changing Set?",
      options: [
        "A. Use the Flow properties page.",
        "B. Use SOQL and the Tooling API",
        "C. Use the Apex testresult class",
        "D. Use the code Coverage Setup page",
      ],
      answer: "B",
      title: "Question 65",
    },
    {
      content:
        "Assuming that 'name; is a String obtained by an <apex:inputText> tag on a Visualforce page. Which two SOQL queries performed are safe from SOQL injections? Choose 2 answers",
      options: [
        "A. String query = 'SELECT Id FROM Account WHERE Name LIKE \\''%' + name.noQuotes() + '%\\''; List<Account> results = Database.query(query);",
        "B. String query = 'SELECT Id FROM Account WHERE Name LIKE \\''%' + String.escapeSingleQuotes(name) + '%\\''; List<Account> results = Database.query(query);",
        "C. String query = 'SELECT Id FROM Account WHERE Name LIKE \\''%' + name + '%\\''; List<Account> results = Database.query(query);",
        "D. String query = '%' + name + '%'; List<Account> results = [SELECT Id FROM Account WHERE Name LIKE :query];",
      ],
      answer: "B,D",
      title: "Question 66",
    },
    {
      content:
        "For which three items can a trace flag be configured?Choose 3 answers",
      options: [
        "A. Apex Trigger",
        "B. Process Builder",
        "C. User",
        "D. Apex Class",
        "E. Visualforce",
      ],
      answer: "A,C,D",
      title: "Question 67",
    },
    {
      content: "Where can debug log filter settings be set?Choose 2 answers",
      options: [
        "A. The Show More link on the debug log's record.",
        "B. The Filters link by the monitored user's name within the web UI.",
        "C. The Log Filters tab on a class or trigger detail page.",
        "D. On the monitored user's name.",
      ],
      answer: "B,C",
      title: "Question 68",
    },
    {
      content:
        "Which three resources in an Azure Component can contain JavaScript functions?",
      options: [
        "A. Style",
        "B. Design",
        "C. Controllers",
        "D. helper",
        "E. Renderer",
      ],
      answer: "C,D,E",
      title: "Question 69",
    },
    {
      content:
        "Universal Containers stores the availability date on each Line Item of an Order and Orders are only shipped when all of the Line Items are available. Which method should be used to calculate the estimated ship date for an Order?",
      options: [
        "A. Use a DAYS formula on each of the availability date fields and a COUNT Roll-Up Summary field on the Order.",
        "B. Use a CEILING formula on each of the Latest availability date fields.",
        "C. Use a Max Roll-Up Summary field on the Latest availability date fields.",
        "D. Use a LATEST formula on each of the latest availability date fields.",
      ],
      answer: "C",
      title: "Question 70",
    },
    {
      content:
        "What does the Lightning Component framework provide to developers?",
      options: [
        "A. Support for Classic and Lightning UIS.",
        "B. Extended governor limits for applications",
        "C. Prebuilt component that can be reused.",
        "D. Templates to create custom components.",
      ],
      answer: "C",
      title: "Question 71",
    },
    {
      content:
        "A developer wants multiple test classes to use the same set of test data. How should the developer create the test data?",
      options: [
        "A. Reference a test utility class in each test class",
        "B. Use the seealldata=true annotation in each test class",
        "C. Create a test setup method for each test class",
        "D. Define a variable for test records in each test classes",
      ],
      answer: "B",
      title: "Question 72",
    },
    {
      content:
        "In which order does SalesForce execute events upon saving a record?",
      options: [
        "A. Before Triggers; Validation Rules; After Triggers; Assignment Rules; Workflow Rules; Commit",
        "B. Validation Rules; Before Triggers; After Triggers; Workflow Rules; Assignment Rules; Commit",
        "C. Before Triggers; Validation Rules; After Triggers; Workflow Rules; Assignment Rules; Commit",
        "D. Validation Rules; Before Triggers; After Triggers; Assignment Rules; Workflow Rules; Commit",
      ],
      answer: "A",
      title: "Question 73",
    },
    {
      content:
        "Given the following code snippet, that is part of a custom controller for a Visualforce page:In which two ways can the try/catch be enclosed to enforce object and field-level permissions and prevent the DML statement from being executed if the current logged-in user does not have the appropriate level of access? Choose 2 answers",
      options: [
        "A. Use if (Schema.sObjectType.Contact.isAccessible ( ) )",
        "B. Use if (thisContact.Owner = = UserInfo.getuserId ( ) )",
        "C. Use if (Schema, sobjectType, Contact, isUpdatable ( ) )",
        "D. Use if (Schema , sobjectType. Contact. Field, Is_Active_c. is Updateable ( ) )",
      ],
      answer: "C,D",
      title: "Question 74",
    },
    {
      content:
        "What are the supported content sources for custom buttons and links? (Choose 2 Answers)",
      options: [
        "A. Static Resource.",
        "B. Lightning Page.",
        "C. Chatter File.",
        "D. VisualForce Page.",
        "E. URL.",
      ],
      answer: "D,E",
      title: "Question 75",
    },
    {
      content:
        "A platform developer needs to write an apex method that will only perform an action if a record is assigned to a specific record type. Which two options allow the developer to dynamically determine the ID of the required record type by its name? Choose 2 answers",
      options: [
        "A. Hardcore the ID as a constant in an apex class",
        "B. Make an outbound web services call to the SOAP API",
        "C. Use the getrecordtypeinfosbydevelopername() method in the describesobjectresult class",
        "D. Execute a SOQL query on the recordtype object",
      ],
      answer: "C,D",
      title: "Question 76",
    },
    {
      content:
        "Universal Containers stores Orders and Line Items in Salesforce. For security reason, financial representatives are allowed to see information on the Order such as order amount, but they are not allowed to see the Line items on the Order. Which type of relationship should be used?",
      options: [
        "A. Indirect lookup",
        "B. Master Detail",
        "C. Lookup",
        "D. Direct Lookup",
      ],
      answer: "C",
      title: "Question 77",
    },
    {
      content:
        "Which two practices should be used for processing records in a trigger? Choose 2 answers",
      options: [
        "A. Use @future methods to handle DML operations.",
        "B. Use a Map to reduce the number of SOQL calls",
        "C. Use (callout=true) to update an external system",
        "D. Use a Set to ensure unique values in a query filter",
      ],
      answer: "B,D",
      title: "Question 78",
    },
    {
      content:
        "The Review__c object has a lookup relationship up to the Job_Application__c object. The Job_Application__c object has a master-detail relationship up the Position__c object. The relationship field names are based on the auto-populated defaults. What is the recommended way to display field data from the related Review__c records on a Visualforce page for a single Position__c record?",
      options: [
        "A. Utilize the Standard Controller for position__c and expression syntax in the page to display related Review__c data through the job_Application__c object",
        "B. Utilize the Standard Controller for Position__c and cross-object Formula fields on the job_Application__c object to display Review__c data.",
        "C. Utilize the Standard Controller for position__c and a Controller Extension to query for Review__c data.",
        "D. Utilize the Standard Controller for Position__c and cross-object Formula fields on the Review__c object to display Review__c data.",
      ],
      answer: "C",
      title: "Question 79",
    },
    {
      content:
        "What is the data type returned by the following SOSL search? {FIND 'Acme*' in name fields returning account,opportunity};",
      options: [
        "A. List<List<sObject>>",
        "B. Map<Id,sObject>",
        "C. Map<sObject,sObject>",
        "D. List<List<Account>,List<Opportunity>",
      ],
      answer: "A",
      title: "Question 80",
    },
    {
      content:
        'Universal Container(UC) wants to lower its shipping cost while making the shipping process more efficient.The Distribution Officer advises UC to implement global addresses to allow multiple Accounts to share a default pickup address. The Developer is tasked to create the supporting object and relationship for this business requirement and uses the Setup Menu to create a custom object called "Global Address". Which field should the developer ad to create the most efficient model that supports the business need?',
      options: [
        "A. Add a Lookup field on the Account object to the Global Address object.",
        "B. Add a Lookup field on the Global Address object to the Account object",
        "C. Add a Master-Detail field on the Global Address object to the Account object.",
        "D. Add a Master-Detail field on the Account object to the Global Address object",
      ],
      answer: "C",
      title: "Question 81",
    },
    {
      content:
        "What is the easiest way to verify a user before showing them sensitive content?",
      options: [
        "A. Sending the user an Email message with a passcode.",
        "B. Sending the user a SMS message with a passcode.",
        "C. Calling the generateVerificationUrl method in apex.",
        "D. Calling the Session.forcedLoginUrl method in apex.",
      ],
      answer: "C",
      title: "Question 82",
    },
    {
      content:
        "A developer is debugging the following code to determinate why Accounts are not being created Account a = new Account(Name = 'A'); Database.insert(a, false); How should the code be altered to help debug the issue?",
      options: [
        "A. Set the second insert method parameter to TRUE",
        "B. Add a try/catch around the insert method",
        "C. Collect the insert method return value a Saveresult record",
        "D. Add a System.debug() statement before the insert method",
      ],
      answer: "C",
      title: "Question 83",
    },
    {
      content:
        "A developer wants to retrieve the Contacts and Users with the email address '[email protected]'. Which SOSL statement should the developer use?",
      options: [
        "A. FIND {[email protected]} IN Email Fields RETURNING Contact (Email), User (Email)",
        "B. FIND {Email = '[email protected]'} RETURNING Contact (Email), User (Email)",
        "C. FIND {Email = '[email protected]'} IN Contact, User",
        "D. FIND Email IN Contact, User FOR {dev2uc.com}",
      ],
      answer: "A",
      title: "Question 84",
    },
    {
      content:
        "Refer to the following code that runs in an Execute Anonymous block:",
      options: [
        "A. The total numberof DML statements will be exceeded.",
        "B. In an environment where the full result set is returned, what is a possible outcome of this code?",
        "C. The total number of records processed as a result of DML statements will be exceeded",
        "D. The total number of records processed as a result of DML statements will be exceeded.",
        "E. The transaction will succeed and the first ten thousand records will be committed to the database.",
      ],
      answer: "C",
      title: "Question 85",
    },
    {
      content:
        'A developer has a requirement to create an Order When an Opportunity reaches a "Closed-Won" status.Which tool should be used to implement this requirement?',
      options: [
        "A. Lightning",
        "B. Lightning Component",
        "C. Apex trigger",
        "D. Process Builder",
      ],
      answer: "D",
      title: "Question 86",
    },
    {
      content:
        "Which data structure is returned to a developer when performing a SOSL search?",
      options: [
        "A. A list of lists of sObjects.",
        "B. A list of sObjects.",
        "C. A map of sObject types to a list oflists of sobjects",
        "D. A map of sObject types to a list of sObjects",
      ],
      answer: "A",
      title: "Question 87",
    },
    {
      content:
        "Given the following Apex statement:Account myAccount = [SELECT Id, Name FROM Account];What occurs when more than one Account is returned by the SOQL query?",
      options: [
        "A. An unhandled exception is thrown and the code terminates.",
        "B. The first Account returned is assigned to myAccount.",
        "C. The query fails and an error is written to the debug log.",
        "D. The variable, myAccount, is automatically cast to the List data type.",
      ],
      answer: "C",
      title: "Question 88",
    },
    {
      content: "Which scenario is valid for execution by unit tests?",
      options: [
        "A. Generate a Visualforce PDF with geccontentAsPDF ().",
        "B. Load data from a remote site with a callout.5. Set the created date of a record using a system method.Cc: Execute anonymous Apex as a different user.",
      ],
      answer: "A",
      title: "Question 89",
    },
    {
      content:
        "An Account trigger updates all related Contacts and Cases each time an Account is saved using the following two DML statements:update allContacts; update allCases;What is the result if the Case update exceeds the governor limit for maximum number of DML records?",
      options: [
        "A. The Account save fails and no Contacts or Cases are updated",
        "B. The Account save is retried using a smaller trigger batch size.",
        "C. The Account save succeeds, Contacts are updated, but Cases are not.",
        "D. The Account save succeeds and no Contacts or Cases are updated",
      ],
      answer: "A",
      title: "Question 90",
    },
    {
      content:
        "A developer identifies the following triggers on the Expense_c object:* DeleteExpense,* applyDefaultstoexpense* validateexpenseupdate;The triggers process before delete, before insert, and before update events respectively.Which two techniques should the developer implement to ensure trigger best practice are followed?",
      options: [
        "A. Unify all three triggers in a single trigger on the Expense__c object that includes all events.",
        "B. Maintain all three triggers on the Expense__c object, but move the Apex logic out for the trigger definition.",
        "C. Create helper classes to execute the appropriate logic when a record is saved. (Missed)",
        "D. Unify the before insert and before update triggers and use Process Builder for the delete action.",
      ],
      answer: "A,C",
      title: "Question 91",
    },
    {
      content:
        "Universal Containers implemented a private sharing model for the Account object. A custom Account search tool was developed with Apex to help sales representatives find accounts that match multiple criteria they specify. Since its release, users of the tool report they can see Accounts they do not own. What should the developer use to enforce sharing permission for the currently logged-in user while using the custom search tool?",
      options: [
        "A. Use the UserInfo Apex class to filter all SOQL queries to returned records owned by the logged-in user.",
        "B. Use the schema describe calls to determine if the logged-in users has access to the Account object.",
        "C. Use the with sharing keyword on the class declaration.",
        "D. Use the without sharing keyword on the class declaration.",
      ],
      answer: "B",
      title: "Question 92",
    },
    {
      content:
        "When the value of a field of an account record is updated, which method will update the value of a custom field opportunity? Choose 2 answers.",
      options: [
        "A. A process builder on the Account object",
        "B. A workflow rule on the Account object",
        "C. A cross-object formula field on the Account object",
        "D. An Apex trigger on the Account object.",
      ],
      answer: "A,D",
      title: "Question 93",
    },
    {
      content:
        "What are two benefits of using declarative customizations over code? Choose 2 answers What are two benefits of using declarative customizations over code?",
      options: [
        "A. Declarative customizations automatically generate test classes. ",
        "B. Declarative customizations automatically update with each Salesforce release.",
        "C. Declarative customizations generally require less maintenance.",
        "D. Declarative customizations automatically generate test classes.",
      ],
      answer: "B,C",
      title: "Question 94",
    },
    {
      content:
        "A custom object Trainer_c has a lookup field to another custom object Gym___c.Which SOQL query will get the record for the Viridian City gym and it's trainers?",
      options: [
        "A. SELECT Id, (SELECT Id FROM Trainer_c) FROM Gym_c WHERE Name - Viridian City Gym'",
        "B. SELECT Id, (SELECT Id FROM Trainers) FROM Gym_C WHERE Name . Viridian City Gym'",
        "C. SELECT Id, (SELECT Id FROM Trainers) FROM Gym_C WHERE Name - Viridian City Gym'",
        "D. SELECT ID FROM Trainer_c WHERE Gym__r.Name - Viridian City Gym'",
      ],
      answer: "B",
      title: "Question 95",
    },
    {
      content:
        "A developer is asked to write negative tests as part of the unit testing for a method that calculates a person's age based on birth date. What should the negative tests include?",
      options: [
        "A. Assert that past dates are accepted by the method.",
        "B. Throwing a custom exception in the unit test.",
        "C. Assert that future dates are rejected by the method.",
        "D. Assert that a null value is accepted by the method.",
      ],
      answer: "C",
      title: "Question 96",
    },
    {
      content:
        "A developer has the following code:try {List nameList;Account a;String s = a.Name;nameList.add(s);} catch (ListException le ) {System.debug(' List Exception ');} catch (NullPointerException npe) {System.debug(' NullPointer Exception ');} catch (Exception e) {System.debug(' Generic Exception ');} What message will be logged?",
      options: [
        "A. List Exception",
        "B. NullPointer Exception",
        "C. No message is logged",
        "D. Generic Exception",
      ],
      answer: "B",
      title: "Question 97",
    },
    {
      content:
        "A developer has the controller class below.Which code block will run successfully in an execute anonymous window?",
      options: [
        "A. myFooController m = new myFooController();System.assert(m.prop ==1);",
        "B. myFooController m = new myFooController();System.assert(m.prop !=null);",
        "C. myFooController m = new myFooController();System.assert(m.prop ==0);",
        "D. myFooController m = new myFooController();System.assert(m.prop ==null);",
      ],
      answer: "D",
      title: "Question 98",
    },
    {
      content: "How are debug levels adjusted In the Developer Console?",
      options: [
        "A. Under the Edit menu, dick Change DebugLevels",
        "B. Under the Logs tab, click Change in the DebugLevels panel",
        "C. Under the Settings menu > Trace Settings..., click Change DebugLevel",
        "D. Under the Debug menu > Change Log Levels..., click Add/Change in the DebugLevel Action column",
      ],
      answer: "D",
      title: "Question 99",
    },
    {
      content:
        "What are two considerations for deciding to use a roll-up summary field? Choose 2 answer's partner.",
      options: [
        "A. Roll-up cannot be performed on formula fields that use cross-object references or on-the-fly calculations such as NOW().",
        "B. Roll-up cannot be performed on formula fields.",
        "C. Roll-up summary can be performed on formula fields, but if their formula contains an #Error result, it may affect the summary value.",
        "D. Roll-up summary fields do not cause validation rules on the parent object unless that object is edited separately.",
      ],
      answer: "A,C",
      title: "Question 100",
    },
    {
      content:
        "Refer to the following Apex code:What is the value of x when it is written to the debug log?",
      options: ["A. 0", "B. 2", "C. 1", "D. 3"],
      answer: "B",
      title: "Question 101",
    },
    {
      content:
        "Refer to the following code that runs in an Execute Anonymous block:",
      options: [
        "A. The transaction will succeed and the first ten thousand records will be committed to the database.",
        "B. The total number of records processed as a result of DML statements will be exceeded.",
        "C. The total number of DML statements will be exceeded.",
        "D. The total number of records processed as a result of DML statements will be exceeded",
        "E. In an environment where the full result set is returned, what is a possible outcome of this code?",
      ],
      answer: "D",
      title: "Question 102",
    },
    {
      content:
        "A developer needs to provide a Visualforce page that lets users enter Product-specific details during a Sales cycle. How can this be accomplished? (Choose 2)",
      options: [
        "A. Download an Unmanaged Package from the AppExchange that provides a custom Visualforce page to modify.",
        "B. Create a new Visualforce page and an Apex controller to provide Product data entry.",
        "C. Download a Managed Package from the AppExhange that provides a custom Visualforce page to modify.",
        "D. Copy the standard page and then make a new Visualforce page for Product data entry.",
      ],
      answer: "A,B",
      title: "Question 103",
    },
    {
      content:
        "A developer needs to display all of the available fields for an object.In which two ways can the developer retrieve the available fields if the variable myObject represents the name of the object? (Choose two.)",
      options: [
        "A. Use getGlobalDescribe().get(myObject).getDescribe().fields.getMap() to return a map of fields.",
        "B. Use myObject.sObjectType.getDescribe().fieldSet() to return a set of fields.",
        "C. Use Schema.describeSObjects(new String[]{myObject})[0].fields.getMap() to return a map of fields.",
        "D. Use mySObject.myObject.fields.getMap() to return a map of fields.",
      ],
      answer: "C,D",
      title: "Question 104",
    },
    {
      content:
        "A developer writes the following code:What is the result of the debug statement?",
      options: ["A. 2, 200", "B. 1, 100", "C. 1, 150", "D. 2, 150"],
      answer: "D",
      title: "Question 105",
    },
    {
      content:
        "A developer has to identify a method in en Apex class that performs resource intensive actions in memory by iterating over the result set of a SOQL statement on the account. The method also performs a SOQL statement to save the changes to the database.Which two techniques should the developer implement as a best practice to ensure transaction control and avoid exceeding governor limits?Choose 2 answers",
      options: [
        "A. Use the @ReadOnly annotation to bypass the number of rows returned by a SOQL.",
        "B. Use Partial DHL statements to ensure only valid data is committed.",
        "C. Use the Database.Savepoint method to enforce database Integrity.",
        "D. Use the System.Limit class to monitor the current CPU governor limit consumption.",
      ],
      answer: "C,D",
      title: "Question 106",
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
      title: "Question 107",
    },
    {
      content:
        "A developer creates a method in an Apex class and needs to ensure that errors are handled properly.What would the developer use? (There are three correct answers.)",
      options: [
        "A. ApexPages.addErrorMessage()",
        "B. Database.handleException()",
        "C. A try/catch construct",
        "D. .addError()",
        "E. A custom exception",
      ],
      answer: "C,D,E",
      title: "Question 108",
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
      title: "Question 109",
    },
    {
      content: "What should be used to create scratch orgs?",
      options: [
        "A. Workbench",
        "B. Developer Console",
        "C. Sandbox refresh",
        "D. Salesforce CLI",
      ],
      answer: "D",
      title: "Question 110",
    },
    {
      content:
        "In the code below, which type does String inherit from? String s = 'Hello World';",
      options: ["A. Object ", "B. Class", "C. Object", "D. Prototype"],
      answer: "C",
      title: "Question 111",
    },
    {
      content:
        "What is a valid statement about Apex classes and interfaces? Choose 2 answers:",
      options: [
        "A. Exception classes must end with the word exception.",
        "B. The default modifier for a class is private.",
        "C. The default modifier for an interface is private.",
        "D. A class can have multiple levels of inner classes.",
      ],
      answer: "A,C",
      title: "Question 112",
    },
    {
      content:
        "Universal Containers wants to back up all of the data and attachments in its Salesforce org once month. Which approach should a developer use to meet this requirement?",
      options: [
        "A. Use the Data Loader command line.",
        "B. Create a Schedulable Apex class.",
        "C. Schedule a report.",
        "D. Define a Data Export scheduled job.",
      ],
      answer: "D",
      title: "Question 113",
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
      title: "Question 114",
    },
    {
      content:
        "When using SalesforceDX, what does a developer need to enable to create and manage scratch orgs?",
      options: [
        "A. Dev Hub",
        "B. Production",
        "C. Sandbox",
        "D. Environment Hub",
      ],
      answer: "A",
      title: "Question 115",
    },
    {
      content:
        "What is the debug output of the following Apex code?Decimal theValue;System.debug (theValue);",
      options: ["A. 0", "B. Undefined", "C. null", "D. 0.0"],
      answer: "C",
      title: "Question 116",
    },
    {
      content:
        "In the Lightning UI, where should a developer look to find information about a Paused Flow Interview?",
      options: [
        "A. On the Paused Row Interviews related List for a given record",
        "B. In the system debug log by Altering on Paused Row Interview",
        "C. In the Paused Interviews section of the Apex Flex Queue",
        "D. On the Paused Row Interviews component on the Home page",
      ],
      answer: "C",
      title: "Question 117",
    },
    {
      content:
        "A developer needs to implement a custom SOAP Web Service that is used by an external Web Application. The developer chooses to Include helper methods that are not used by the Web Application In the Implementation of the Web Service Class.Which code segment shows the correct declaration of the class and methods?A)B)C)D)",
      options: ["A. Option C", "B. Option D", "C. Option A", "D. Option B"],
      answer: "A",
      title: "Question 118",
    },
    {
      content:
        "Which Lightning code segment should be written to declare dependencies on a Lightning component, c:accountList, that is used in a Visualforce page?A)B)C)D)",
      options: ["A. Option D", "B. Option B", "C. Option A", "D. Option C"],
      answer: "C",
      title: "Question 119",
    },
    {
      content:
        "A developer encounters APEX heap limit errors in a trigger.Which two methods should the developer use to avoid this error? (Choose two.)",
      options: [
        "A. Remove or set collections to null after use.",
        "B. Use SOQL for loops instead of assigning large queries results to a single collection and looping through the collection.",
        "C. Use the transient keyword when declaring variables.",
        "D. Query and store fields from the related object in a collection when updating related objects.",
      ],
      answer: "B,C",
      title: "Question 120",
    },
    {
      content:
        "A candidate may apply to multiple jobs at the company Universal Containers by submitting a single application per job posting, that application cannot be modified to be resubmitted to a different job posting.What can the administrator do to associate an application with each job posting in the schema for the organization?",
      options: [
        "A. Create a lookup relationship in the Applications custom object to the Job Postings custom object.",
        "B. Create a master-detail relationship in the Job Postings custom object to the Applications custom object.",
        "C. Create a lookup relationship on both objects to a junction object called Job Posting Applications.",
        "D. Create a master-detail relationship in the Application custom object to the Job Postings custom object.",
      ],
      answer: "D",
      title: "Question 121",
    },
    {
      content:
        "AW Computing (AWC) handles orders In Salesforce and stores Its product Inventory In a fter, inventory__c, on a custom object, Product__c. When en order for a Product__c Is placed, the inventory__c field Is reduced by the quantity of the order using an Apex trigger.AWC wants the real-time inventory reduction for a product to be sent to many of Its external systems, Including some future systems the company Is currently planning.What should a developer add to the code at the placeholder to meet these requirements?A)B)C)D)",
      options: ["A. Option ", "B. Option ", "C. Option", "D. Option "],
      answer: "C",
      title: "Question 122",
    },
    {
      content:
        "The Job_Application__c custom object has a field that is a Master-Detail relationship to the Contact object, where the Contact object is the Master. As part of a feature implementation, a developer needs to retrieve a list containing all Contact records where the related Account Industry is 'Technology' while also retrieving the contact's Job_Application__c records.Based on the object's relationships, what is the most efficient statement to retrieve the list of contacts?",
      options: [
        "A. [SELECT Id, (SELECT Id FROM Job_Application_c) FROM Contact WHEREAccount.Industry = 'Technology'];",
        "B. [SELECT Id, (SELECT Id FROM Job_Applications_c) FROM Contact WHEREAccounts.Industry = 'Technology'];",
        "C. [SELECT Id, (SELECT Id FROM Job_Applications_r) FROM Contact WHEREAccounts.Industry = 'Technology'];",
        "D. [SELECT Id, (SELECT Id FROM Job_Applications_r) FROM Contact WHEREAccount.Industry = 'Technology'];",
      ],
      answer: "D",
      title: "Question 123",
    },
    {
      content:
        "An org has different Apex Classes that provide Account -related functionality.After a new validation rule is added to the object, many of the test methods fail.What can be done to resolve the failures and reduce the number of code changes needed for future validation rules?Choose 2 answers:",
      options: [
        "A. Create a method that queries for valid Account records, and call this method from within test methods.",
        "B. Create a method that loads valid Account records from a Static Resource, and call this method within test methods.",
        "C. Create a method that creates valid Account records, and call this method from within test methods.",
        "D. Create a method that performs a callout for a valid Account record, and call this method from within test methods.",
      ],
      answer: "B,C",
      title: "Question 124",
    },
    {
      content:
        "What will be the output in the debug log in the event of a QueryExeption during a call to the @query method in the following Example?",
      options: [
        "A. Querying Accounts. Custom Exception Done.",
        "B. Querying Accounts. Query Exception.",
        "C. Querying Accounts. Query Exception. Done",
        "D. Querying Accounts. Custom Exception.",
      ],
      answer: "C",
      title: "Question 125",
    },
    {
      content:
        "what are the methods used to show input in classic and lightning ?",
      options: [
        "A. Use visualforce page in classic and lightning component in lightning",
      ],
      answer: "A",
      title: "Question 126",
    },
    {
      content:
        "How many accounts will be inserted by the following block ofcode? for(Integer i = 0 ; i <500; i++) { Account a = new Account(Name='New Account ' + i); insert a; }087. Boolean odk;Integer x;if(abok=false;integer=x;){X=1;}elseif(abok=true;integer=x;){X=2;}elseif(abok!=null;integer=x;){X=3;)elseif{X=4;}",
      options: ["A. X=4", "B. X=10", "C. X=9", "D. X=8"],
      answer: "A",
      title: "Question 127",
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
      title: "Question 128",
    },
    {
      content:
        "Which two are phases in the Aura application event propagation framework? Choose 2 answers",
      options: ["A. Bubble", "B. Default", "C. Control", "D. Emit"],
      answer: "A,B",
      title: "Question 129",
    },
    {
      content:
        "A developer created a Visualforce page and custom controller to display the account type field as shown below. Custom controller code: public class customCtrlr{ private Account theAccount; public String actType; public customCtrlr() { theAccount = [SELECT Id, Type FROM Account WHERE Id = :apexPages.currentPage().getParameters().get('id')]; actType = theAccount.Type; } } Visualforce page snippet: The Account Type is {!actType} The value of the account type field is not being displayed correctly on the page. Assuming the custom controller is property referenced on the Visualforce page, what should the developer do to correct the problem?",
      options: [
        "A. Change theAccount attribute to public.",
        "B. Add a getter method for the actType attribute.",
        "C. Convert theAccount.Type to a String.",
        "D. Add with sharing to the custom controller.",
      ],
      answer: "B",
      title: "Question 130",
    },
    {
      content: "How should a developer prevent a recursive trigger?",
      options: [
        "A. Use a trigger handler.",
        "B. Use a private Boolean variable.",
        "C. Use a static Boolean variable.",
        'D. Use a "one trigger per object" pattern.',
      ],
      answer: "B",
      title: "Question 131",
    },
    {
      content:
        "Which statement is true about developing in a multi-tenant environment?",
      options: [
        "A. Apex sharing controls access to records fomr multiple tenants on the same instance",
        "B. Global apex classes can be referenced from multiple tenants on the same instance",
        "C. Org-level data security controls which users can see data from multiple tenants on the same instance",
        "D. Governor limits prevent apex from impactiong the performance of multiple tenants on the same instance",
      ],
      answer: "D",
      title: "Question 132",
    },
    {
      content:
        "A developer must create an Apex class, contactcontroller, that a Lightning component can use to search for Contact records. User of the Lightning component should only be able to search Contact records to which they have access. Which two will restrict the records correctly?",
      options: [
        "A. public with sharing class ContactController",
        "B. public class ContactController",
        "C. public inherited sharing class ContactController",
        "D. public without sharing class ContactController",
      ],
      answer: "A,C",
      title: "Question 133",
    },
    {
      content:
        "A developer must provide a custom user interface when users edit a Contact. Users must be able to use the interface in Salesforce Classic and Lightning Experience.What should the developer do to provide the custom user interface?",
      options: [
        "A. Override the Contact's Edit button with a Lightning page in Salesforce Classic and a Visualforce page in Lightning Experience.",
        "B. Override the Contact's Edit button with a Visualforce page in Salesforce Classic and a Lightning component in Lightning Experience.",
        "C. Override the Contact's Edit button with a Visualforce page in Salesforce Classic and a Lightning page inLightning Experience.",
        "D. Override the Contact's Edit button with a Lightning component in Salesforce Classic and a Lightning component in Lightning Experience.",
      ],
      answer: "B",
      title: "Question 134",
    },
    {
      content:
        "Einstein Next Best Action Is configured at Universal Containers to display recommendations to internal users on the Account detail page.If the recommendation is approved, a new opportunity record and task should be generated. If the recommendation is rejected, an Apex method must be executed to perform a callout to an external system.Which three factors should a developer keep Hi mind when implementing the Apex method?Choose 3 answers",
      options: [
        "A. The method must be defined as public.",
        "B. The method must be defined as static.",
        "C. The method must use the @AuraEnabled annotation.",
        "D. The method must use the @invocableMethod annotation.",
        "E. The method must use the @Future annotation.",
      ],
      answer: "A,B,E",
      title: "Question 135",
    },
    {
      content:
        "A developer observes that an Apex test method fails in the Sandbox. To identify the issue, the developer copies the code inside the test method and executes it via the Execute Anonymous tool in the Developer Console. The code then executes with no exceptions or errors. Why did the test method fail in the sandbox and pass in the Developer Console?",
      options: [
        "A. The test method relies on existing data in the sandbox.",
        "B. The test method does not use System.runAs to execute as a specific user.",
        "C. The test method has a syntax error in the code.",
        "D. The test method is calling an @future method.",
      ],
      answer: "A",
      title: "Question 136",
    },
    {
      content:
        "A developer wants to handle the click event for a lightning:button componentthe onclick attribute for the component references a javascript function in which resource in the component bundle?",
      options: [
        "A. Helper.js",
        "B. Handler.js",
        "C. Renderer.js",
        "D. Controller.js",
      ],
      answer: "D",
      title: "Question 137",
    },
    {
      content:
        "A developer needs to create a Visualforce page that displays Case data. The page will be used by both support reps and support managers. The Support Rep profile does not allow visibility of the Customer_Satisfaction__c field, but the Support Manager profile does.How can the developer create the page to enforce Field Level Security and keep future maintenance to a minimum?",
      options: [
        "A. Create a separate Visualforce Page for each profile.",
        "B. Use a custom controller that has the with sharing keywords.",
        "C. Use a new Support Manager permission set.",
        "D. Create one Visualforce Page for use by both profiles.",
      ],
      answer: "B",
      title: "Question 138",
    },
    {
      content:
        "A developer needs to provide a way to mass edit, update, and delete records from a list view. In which two ways can this be accomplished? Choose 2 answers",
      options: [
        "A. Create a new Visualforce page and Apex Controller for the list view that provides mass edit, update and delete functionality.",
        "B. Configure the user interface and enable both inline editing and enhanced lists.",
        "C. Download an unmanaged package from the AppExchange that provide customizable mass edit, update, and delete functionality.",
        "D. Download a managed package from the AppExchange that provides customizable Enhanced List Views and buttons",
      ],
      answer: "A,C",
      title: "Question 139",
    },
    {
      content:
        "A software company uses the following objects and relationships:* Case: to handle customer support issues* Defect_c: a custom object to represent known issues with the company's software* case_Defect__c: a junction object between Case and Defector to represent that a defect Is a customer issue What should be done to share a specific Case-Defect_c record with a user?",
      options: [
        "A. Share the parent Case and Defect_c records.",
        "B. Share the parent Case record.",
        "C. Share the parent Defect_c record.",
        "D. Share the Case_Defect_c record.",
      ],
      answer: "A",
      title: "Question 140",
    },
    {
      content:
        "How many level of child records can be returned in a single SOQL query from one parent object",
      options: ["A. 5", "B. 3", "C. 1", "D. 7"],
      answer: "C",
      title: "Question 141",
    },
    {
      content:
        "A developer has the following class and trigger code:public class InsuranceRates { public static final Decimal smokerCharge = 0.01; } trigger ContactTrigger on Contact (before insert) { InsuranceRates rates = new InsuranceRates(); Decimal baseCost = XXX; } Which code segment should a developer insert at the XXX to set the baseCost variable to the value of the class variable smokerCharge?",
      options: [
        "A. Rates.smokerCharge",
        "B. InsuranceRates.smokerCharge",
        "C. Rates.getSmokerCharge()",
        "D. ContactTrigger.InsuranceRates.smokerCharge",
      ],
      answer: "B",
      title: "Question 142",
    },
    {
      content:
        "Which feature should a developer use to update an inventory count on related Product records when the status of an Order is modified to indicate it is fulfilled?",
      options: [
        "A. Process Builder process",
        "B. Visualforce page",
        "C. Lightning component",
        "D. Workflow rule",
      ],
      answer: "A",
      title: "Question 143",
    },
    {
      content:
        "A developer writes a trigger on the Account object on the before update event that increments a count field. A workflow rule also increments the count field every time that an Account is created or updated. The field update in the workflow rule is configured to not re-evaluate workflow rules.What is the value of the count field if an Account is inserted with an initial value of zero, assuming no other automation logic is implemented on the Account?",
      options: ["A. 4", "B. 2", "C. 1", "D. 3"],
      answer: "B",
      title: "Question 144",
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
        "B  Reference: https://developer.salesforce.com/docs/atlas.en-us.pages.meta/pages/pages_compref_message.htm ",
      title: "Question 145",
    },
    {
      content:
        "What are the eight officially supported languages on Heroku platform?",
      options: [
        "A. Node,Ruby java,PHP,Python,Go,Scala,Clojure.",
        "B. Lisp,PHP,Node,Ruby,Scala,Haskell,Go,Erlang.",
        "C. C#,C++,Node,Ruby,Java,PHP,Go,.Net.",
        "D. Node,Ruby,java,PHP,Python,.Net,C++.",
      ],
      answer: "A",
      title: "Question 146",
    },
    {
      content:
        "For which three items can a trace flag be configured? (Choose three.)",
      options: [
        "A. User",
        "B. Visualforce",
        "C. Process Builder",
        "D. Apex Trigger",
        "E. Apex Class",
      ],
      answer: "A,D,E",
      title: "Question 147",
    },
    {
      content:
        "Which three steps allow a custom SVG to be included in a Lightning web component? Choose 3 answers",
      options: [
        "A. Import the SVG as a content asset file.",
        "B. Upload the SVG as a static resource.",
        "C. Import the static resource and provide a better for it in JavaScript.",
        "D. Reference the getter in the HTML template.",
        "E. Reference the import in the HTML template.",
      ],
      answer: "B,C,D",
      title: "Question 148",
    },
    {
      content:
        'A developer creates a new Apex trigger with a helper class, and writes a test class that only exercises 95% coverage of new Apex helper class. Change Set deployment to production fails with the test coverage warning:"Test coverage of selected Apex Trigger is 0%, at least 1% test coverage is required" What should the developer do to successfully deploy the new Apex trigger and helper class?',
      options: [
        "A. Remove the falling test methods from the test class.",
        "B. Increase the test class coverage on the helper class",
        "C. Run the tests using the 'Run All Tests' method.",
        "D. Create a test class and methods to cover the Apex trigger",
      ],
      answer: "D",
      title: "Question 149",
    },
    {
      content:
        "Since Aura application events follow the traditional publish-subscribe model, which method is used to fire an event?",
      options: [
        "A. fireEvent()",
        "B. registerEvent()",
        "C. fire()",
        "D. ernit()",
      ],
      answer: "C",
      title: "Question 150",
    },
    {
      content:
        "A developer has a single custom controller class that works with a Visualforce Wizard to support creating and editing multiple sObjects. The wizard accepts data from user inputs across multiple Visualforce pages and from a parameter on the initial URLWhich statement is unnecessary inside the unit test for the custom controller?",
      options: [
        "A. String nextPage = controller.save().getUrl();",
        "B. ApexPages.currentPage().getParameters().put('input', 'TestValue')",
        "C. Test.setCurrentPage(pageRef),",
        "D. Public ExtendedController (ApexPages.StandardController cntrl) { }",
      ],
      answer: "A,D",
      title: "Question 151",
    },
    {
      content:
        "What is a benefit of developing applications in a multi-tenant environment?",
      options: [
        "A. Unlimited processing power and memory",
        "B. Enforced best practices for development",
        "C. Default out-of-the-box configuration",
        "D. Access to predefined computing resources",
      ],
      answer: "C",
      title: "Question 152",
    },
    {
      content:
        "The operation manager at a construction company uses a custom object called Machinery to manage the usage and maintenance of its cranes and other machinery. The manager wants to be able to assign machinery to different constructions jobs, and track the dates and costs associated with each job. More than one piece of machinery can be assigned to one construction job.What should a developer do to meet these requirements?",
      options: [
        "A. Create a lookup field on the Machinery object to the Construction Job object.",
        "B. Create a junction object with Master-Detail Relationship to both the Machinery object and the Construction Job object.",
        "C. Create a lookup field on the Construction Job object to the Machinery object.",
        "D. Create a Master-Detail Lookup on the Machinery object to the Construction Job object.",
      ],
      answer: "C",
      title: "Question 153",
    },
    {
      content:
        "A developer in a Salesforce org with 100 Accounts executes the following code using the Developer console:Account myAccount = new Account(Name = 'MyAccount');Insert myAccount;For (Integer x = 0; x < 250; x++){Account newAccount = new Account (Name='MyAccount' + x);try {Insert newAccount;}catch (Exception ex) {System.debug (ex) ;}}insert new Account (Name='myAccount'); How many accounts are in the org after this code is run?",
      options: ["A. 101", "B. 100", "C. 252", "D. 102"],
      answer: "B",
      title: "Question 154",
    },
    {
      content:
        "Which aspect of Apex programming is limited due to multitenancy?",
      options: [
        "A. The number of methods in an Apex Class",
        "B. The number of records processed in a loop",
        "C. The number of active Apex classes",
        "D. The number of records returned from database queries",
      ],
      answer: "D",
      title: "Question 155",
    },
    {
      content:
        "A developer must write an Apex method that will be called from a Lightning component. The method may delete an Account stored in the accountRec variable.Which method should a developer use to ensure only users that should be able to delete Accounts can successfully perform deletions?",
      options: [
        "A. Account.isDeletable()",
        "B. accountRec.sObjectType.isDeletable()",
        "C. accountRec.isDeletable()",
        "D. Schema.sObjectType.Account.isDeletable()",
      ],
      answer: "D",
      title: "Question 156",
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
      title: "Question 157",
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
      title: "Question 158",
    },
    {
      content:
        "What are two ways a developer can get the status of an enquered job for a class that queueable interface? Choose 2 answers",
      options: [
        "A. Query the AsyncApexJob object",
        "B. View the apex status Page",
        "C. View the apex Jobs page",
        "D. View the apex flex Queue",
      ],
      answer: "A,C",
      title: "Question 159",
    },
    {
      content:
        "What is a valid source and destination pair that can send or receive change sets? (Choose 2)",
      options: [
        "A. Developer Edition to Sandbox",
        "B. Developer Edition to Production",
        "C. Sandbox to Sandbox",
        "D. Sandbox to Production",
      ],
      answer: "C,D",
      title: "Question 160",
    },
    {
      content:
        "A developer needs to avoid potential system problems that can arise in a multi-tenant architecture. Which requirement helps prevent poorty written applications from being deployed to a production environment?",
      options: [
        "A. All Apex code must be annotated with the with sharing keyword.",
        "B. All validation rules must be active before they can be deployed.",
        "C. Unit tests must cover at least 75% of the application's Apex code",
        "D. SOQL queries must reference sObActs with their appropriate namespace.",
      ],
      answer: "C",
      title: "Question 161",
    },
    {
      content:
        "A developer writes a SOQL query to find child records for a specific parent. How many levels can be returned in a single query?",
      options: ["A. 3", "B. 5", "C. 1", "D. 7"],
      answer: "B",
      title: "Question 162",
    },
    {
      content:
        "A developer must provide custom user interfaces when users edit a Contact in either Salesforce Classic or Lightning Experience.What should the developer use to override the Contact's Edit button and provide this functionality?",
      options: [
        "A. A Visualforce page in Salesforce Classic and a Lightning page in Lightning Experience",
        "B. A Lightning page in Salesforce Classic and a Visualforce page in Lightning Experience",
        "C. A Lightning component in 5alesforce Classic and a Lightning component in lightning Experience",
        "D. A Visualforce page in Salesforce Classic and a Lightning component in Lightning Experience",
      ],
      answer: "D",
      title: "Question 163",
    },
    {
      content:
        "What actions types should be configured to display a custom success message?",
      options: [
        "A. Update a record.",
        "B. Post a feed item.",
        "C. Close a case.",
        "D. Delete a record.",
      ],
      answer: "A",
      title: "Question 164",
    },
    {
      content:
        "In which two trigger types can a developer modify the new sObject records that are obtained by the trigger.new context? Choose 2 answers",
      options: [
        "A. After update",
        "B. Before update",
        "C. After insert",
        "D. Before insert",
      ],
      answer: "B,D",
      title: "Question 165",
    },
    {
      content:
        "A reviewer is required to enter a reason in the comments field only when a candidate is recommended to be hired. Which action can a developer take to enforce this requirement?",
      options: [
        "A. Create a required Visualforce component.",
        "B. Create a validation rule.",
        "C. Create a required comments field.",
        "D. Create a formula field.",
      ],
      answer: "B",
      title: "Question 166",
    },
    {
      content:
        "A developer created a custom order management app that uses an Apex class. The order is represented by an Order object and an Orderltem object that has a master-detail relationship to Order. During order processing, an order may be split into multiple orders.What should a developer do to allow their code to move some existing Orderltem records to a new Order record?",
      options: [
        "A. Change the master-detail relationship to an external lookup relationship.",
        "B. Create a junction object between Orderltem and Order.",
        "C. Add without sharing to the Apex class declaration.",
        "D. Select the Allow reparenting option on the master-detail relationship.",
      ],
      answer: "B",
      title: "Question 167",
    },
    {
      content:
        "A developer is notified that a text field is being automatically populated with invalid values.however, this should be prevented by a custom validation rule that is in placewhat could be causing this?",
      options: [
        "A. A DML exception is occuring during the save order of execution",
        "B. The user belongs to a permission set that suppresses the validation rule",
        "C. The field is being populated by a workflow field update",
        "D. The field is being populated by a before trigger",
      ],
      answer: "C",
      title: "Question 168",
    },
    {
      content:
        "A developer wants to override a button using Visualforce on an object.What is the requirement?",
      options: [
        "A. The controller or extension must have a PageReference method.",
        "B. The object record must be instantiated in a controller or extension.",
        "C. The action attribute must be set to a controller method.",
        "D. The standardController attribute must be set to the object.",
      ],
      answer: "D",
      title: "Question 169",
    },
    {
      content:
        'A developer creates a new Apex trigger with a helper class, and writes a test class that only exercises 95% coverage of new Apex helper class. Change Set deployment to production fails with the test coverage warning:"Test coverage of selected Apex Trigger is 0%, at least 1% test coverage is required" What should the developer do to successfully deploy the new Apex trigger and helper class?',
      options: [
        "A. Run the tests using the 'Run All Tests' method.",
        "B. Remove the falling test methods from the test class.",
        "C. Create a test class and methods to cover the Apex trigger",
        "D. Increase the test class coverage on the helper class",
      ],
      answer: "C",
      title: "Question 170",
    },
    {
      content:
        "AW Computing tracks order information in custom objects called order__c and order_Line_ c - Currently, all shipping information is stored in the order__c object.The company wants to expand Its order application to support split shipments so that any number of order_Line__c records on a single order__c can be shipped to different locations.What should a developer add to fulfill this requirement?",
      options: [
        "A. Order_shipment_Group_c object and master-detail field on order_c",
        "B. Order_shipment_Group_c object and master-detail field to order_c and Order Line_c",
        "C. Order_shipment_Group_c object and master-detail field on order_shipment_Group_c",
        "D. Order_shipment_Group_c object and master-detail field on order_Line_c",
      ],
      answer: "B",
      title: "Question 171",
    },
    {
      content:
        "Assuming that 'name; is a String obtained by an <apex:inputText> tag on a Visualforce page.Which two SOQL queries performed are safe from SOQL injections? Choose 2 answers",
      options: [
        "A. String query ='SELECT Id FROM Account WHERE Name LIKE \\''%' + name.noQuotes() + '%\\''; List<Account> results = Database.query(query);",
        "B. String query = 'SELECT Id FROM Account WHERE Name LIKE \\''%' + name + '%\\''; List<Account> results = Database.query(query);",
        "C. String query = 'SELECT Id FROM Account WHERE Name LIKE \\''%' +String.escapeSingleQuotes(name) + '%\\'';List<Account> results= Database.query(query);",
        "D. String query = '%' + name + '%';List<Account> results = [SELECT Id FROM Account WHERE Name LIKE :query];",
      ],
      answer: "C,D",
      title: "Question 172",
    },
    {
      content:
        "Why would a developer consider using a custom controller over a controller extension?",
      options: [
        "A. To implement all of the logic for a page and bypass default Salesforce functionality",
        "B. To increase the SOQL query governor limits.",
        "C. To leverage built-in functionality of a standard controller",
        "D. To enforce user sharing settings and permissions",
      ],
      answer: "A",
      title: "Question 173",
    },
    {
      content:
        "An org has an existing Visual Flow that creates an Opportunity with an Update records element. A developer must update the Visual Flow also created a Contact and store the created Contact's ID on the Opportunity.",
      options: [
        "A. Add a new Update records element",
        "B. Add a new Create records element.",
        "C. Add a new Quick Action (of type create) element.",
        "D. Add a new Get Records element.",
      ],
      answer: "C",
      title: "Question 174",
    },
    {
      content:
        'A custom exception "RecordNotFoundException" is defined by the following code of block.public class RecordNotFoundException extends Exception()which statement can a developer use to throw a custom exception?choose 2 answers',
      options: [
        'A. Throw new RecordNotFoundException("problem occured");',
        "B. Throw new RecordNotFoundException();",
        'C. throw RecordNotFoundException("problem occured");',
        "D. Throw RecordNotFoundException();",
      ],
      answer: "A,B",
      title: "Question 175",
    },
    {
      content:
        "How can a developer warn users of SOQL governor limit violations in a trigger?",
      options: [
        "A. Use ApexMessage.Message() to display an error message after the number of SOQL queries exceeds the limit.",
        "B. Use Limits.getQueries() and display an error message before the number of SOQL queries exceeds the limit.",
        "C. Use Messaging.SendEmail() to continue the transaction and send an alert to the user after the number of SOQL queries exceeds the limit.",
        "D. Use PageReference.setRedirect() to redirect the user to a custom Visualforce page before the number of SOQL queries exceeds the limit.",
      ],
      answer: "B",
      title: "Question 176",
    },
    {
      content:
        "Which Salesforce feature allows a developer to see when a user last logged in to Salesforce if real-time notification is not required?",
      options: [
        "A. Developer Log",
        "B. Calendar Events",
        "C. Event Monitoring Log",
        "D. Asynchronous Data Capture Events",
      ],
      answer: "C",
      title: "Question 177",
    },
    {
      content:
        "Which two approaches optimize test maintenance and support future declarative configuration changes?Choose 2 answers.",
      options: [
        "A. Create a method that performs a callout for valid records, then call this method within test methods.",
        "B. Create a method that queries for valid records, then call this method within test methods.",
        "C. Create a method that creates valid records,then call this method within test methods.",
        "D. Create a methods that loads valid Account records from a static resources, then call this method within test methods.",
      ],
      answer: "C,D",
      title: "Question 178",
    },
    {
      content:
        "A developer writes a single trigger on the Account object on the after insert and after update events. A workflow rule modifies a field every time an Account is created or updated.How many times will the trigger fire if a new Account is inserted, assuming no other automation logic is implemented on the Account?",
      options: ["A. 1", "B. 4", "C. 8", "D. 2"],
      answer: "D",
      title: "Question 179",
    },
    {
      content:
        "Which three Salesforce resources can be accessed from a Lightning web component' Choose 3 answers",
      options: [
        "A. SVG resources",
        "B. Third-party web components",
        "C. Static resources",
        "D. All external libraries",
        "E. Content asset files",
      ],
      answer: "A,C,D",
      title: "Question 180",
    },
    {
      content:
        "A developer must create a ShippingCalculator class that cannot be instantiated and must include a working default implementation of a calculate method, that sub-classes can override. What is the correct implementation of the ShippingCalculator class?",
      options: [
        "A. Public abstract class ShippingCalculator {public override calculate() { /*implementation*/ }}",
        "B. Public abstract class ShippingCalculator {public virtual void calculate() { /*implementation*/ }}",
        "C. Public abstract class ShippingCalculator {public void calculate() { /*implementation*/ }}the extending class can override the existing virtual methods by using the override keyword in the method definition. Overriding a virtual method allows you to provide a different implementation for an existing method https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_extending.htm",
        "D. Public abstract class ShippingCalculator {public abstract calculate() { /*implementation*/ }}",
      ],
      answer: "B",
      title: "Question 181",
    },
    {
      content:
        "What is considered the primary purpose for creating Apex tests?",
      options: [
        "A. To confirm every trigger in executed at least once",
        "B. To guarantee at least 50% of code is covered by unit tests before it is deployed",
        "C. To confirm all classes and triggers compile successfully",
        "D. To ensure every use case of the application is covered by a test",
      ],
      answer: "D",
      title: "Question 182",
    },
    {
      content:
        "Given the following trigger implementation:trigger leadTrigger on Lead (before update){final ID BUSINESS_RECORDTYPEID = '012500000009Qad';for(Lead thisLead : Trigger.new){if(thisLead.Company != null &&thisLead.RecordTypeId != BUSINESS_RECORDTYPEID){ thisLead.RecordTypeId = BUSINESS_RECORDTYPEID;}}}The developer receives deployment errors every time a deployment is attempted from Sandbox to Production.What should thedeveloper do to ensure a successful deployment?",
      options: [
        "A. Ensure a record type with an ID of BUSINESS_RECORDTYPEID exists on Production prior to deployment.",
        "B. Ensure BUSINESS_RECORDTYPEIDis pushed as part of the deployment components.",
        "C. Ensure BUSINESS_RECORDTYPEID is retrieved using Schema.Describe calls.",
        "D. Ensure the deployment is validated by a System Admin user on Production.",
      ],
      answer: "A",
      title: "Question 183",
    },
    {
      content:
        "Which set of roll-up types are available when creating a roll-up summary field?",
      options: [
        "A. SUM, MIN, MAX",
        "B. AVRAGE, COUNT, SUM, MIN, MAX",
        "C. COUNT, SUM, MIN, MAX",
        "D. AVERAGE, SUM, MIN, MAX",
      ],
      answer: "C",
      title: "Question 184",
    },
    {
      content:
        "A developer needs to import customer subscription records into salesforce and attach them to existing account records. Which 2 actions should the developer take to ensure the subscription records are related to the correct account records? Choose 2 answers",
      options: [
        "A. Match an auto-number field to a column in the imported file",
        "B. Match an external ID text field to a column in the imported file",
        "C. Match the name field to a column in the imported file",
        "D. Match the id field to a column in the imported file",
      ],
      answer: "B,D",
      title: "Question 185",
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
      title: "Question 186",
    },
    {
      content:
        "Which two statements accurately represent the MVC framework implementation in Salesforce? Choose 2 answers",
      options: [
        "A. Standard and Custom objects used in the app schema represent the View (V) part of the MVC framework",
        "B. Lightning component HTML files represent the Model (M) part of the MVC framework.",
        "C. Triggers that create records represent the Model (M) part of the MVC framework.",
        "D. Validation rules enforce business rules and represent the Controller (C) part of the MVC framework",
      ],
      answer: "C,D",
      title: "Question 187",
    },
    {
      content:
        "Which three web technologies can be integrated into a Visualforce page? (Choose three.)",
      options: ["A. Java", "B. CSS", "C. PHP", "D. HTML", "E. JavaScript"],
      answer: "A,B,D",
      title: "Question 188",
    },
    {
      content:
        "When a user edits the Postal Code on an Account, a custom Account text field named ''Timezone'' must be updated based on the values in a postalCodeToTimezone_c custom object.What should be built to implement this feature?",
      options: [
        "A. Account custom trigger",
        "B. Account approval process",
        "C. Account workflow rule",
        "D. Account assignment rule",
      ],
      answer: "A",
      title: "Question 189",
    },
    {
      content:
        "Universal Containers wants Opportunities to no longer be editable when it reaches the Closed/Won stage.Which two strategies can a developer use to accomplish this?Choose 2 answers",
      options: [
        "A. Use a validation rule.",
        "B. Use a trigger.",
        "C. Use the Process Automation settings.",
        "D. Use an after-save flow.",
      ],
      answer: "A,B",
      title: "Question 190",
    },
    {
      content: "How can a developer set up a debug log on a specific user?",
      options: [
        "A. Ask the user for access to their account credentials, log in as the user and debug the issue.",
        "B. Set up a trace flag for the user, and define a logging level and time period for the trace.",
        "C. Create Apex code that logs code actions into a custom object.",
        "D. It is not possible to setup debug logs for users other than yourself.",
      ],
      answer: "B",
      title: "Question 191",
    },
    {
      content:
        "A developer wants to invoke on outbound message when a record meets aspecific criteria.Which three features satisfy this use case?Choose 3 answer",
      options: [
        "A. Process builder can be used to check the record criteria andsend an outbound message with Apex Code.",
        "B. Approval Process has the capacity to check the record criteria and send an outbound message without Apex Code",
        "C. Visual Workflow canbe used to check the record criteria and send an outbound message without Apex Code.",
        "D. workflows can be used to check the record criteria and send an outbound message.",
        "E. Process builder can be used to check the record criteria and send an outbound messagewithout Apex Code.",
      ],
      answer: "A,B,D",
      title: "Question 192",
    },
    {
      content:
        "Which requirement needs to be implemented by using standard workflow instead of Process Builder? Choose2 answers",
      options: [
        "A. Send an outbound message without Apex code.",
        "B. Create activities at multiple intervals.",
        "C. Copy an account address to its contacts.",
        "D. Submit a contract for approval.",
      ],
      answer: "A,C",
      title: "Question 193",
    },
    {
      content:
        "A developer has the following requirements:Calculate the total amount on an Order.Calculate the line amount for each Line Item based on quantity selected and price.Move Line Items to a different Order if a Line Item is not stock.Which relationship implementation supports these requirements?",
      options: [
        "A. Order has a Master-Detail field to Line Item and there can be many Line Items per Order.",
        "B. Line Item has a Lookup field to Order and there can be many Line Items per Order",
        "C. Line Items has a Master-Detail field to Order and the Master can be re-parented.",
        "D. Order has a Lookup field to Line Item and there can be many Line Items per Order.",
      ],
      answer: "C",
      title: "Question 194",
    },
    {
      content:
        "Which data type or collection of data types can SOQL statements populate or evaluate to? (Choose 3)",
      options: [
        "A. A list of sObjects",
        "B. An integer",
        "C. A Boolean",
        "D. A single sObject",
        "E. A string",
      ],
      answer: "A,B,D",
      title: "Question 195",
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
      title: "Question 196",
    },
    {
      content:
        "A developer is asked to create a custom visualforce page that will be used as a dashboard component. Which three are valid controller options for this page? Choose 3 answers",
      options: [
        "A. Use a standard controller",
        "B. Use a custom controller",
        "C. Do not specify a controller",
        "D. Use a standard controller with extensions",
        "E. Use a custom controller with extensions",
      ],
      answer: "A,B,D",
      title: "Question 197",
    },
    {
      content:
        "A developer is building custom search functionality that uses SOSL to search account and contact records that match search terms provided by the end user. The feature is exposed through a Lightning web component, and the end user is able to provide a list of terms to search.Consider the following code snippet:What is the maximum number of search terms the end user can provide to successfully execute the search without exceeding a governor limit?",
      options: ["A. 2,000", "B. 150", "C. 200", "D. 20"],
      answer: "A",
      title: "Question 198",
    },
    {
      content:
        "How can a developer refer to, or instantiate a PageReference in Apex? Choose 2 answers",
      options: [
        "A. By using a PageReference with a partial or full URL.",
        "B. By using the PageReference.Page() method with a partial or full URL.",
        "C. By using the Page object and a Visualforce page name.",
        "D. By using the ApexPages.Page() method with a Visualforce page name.",
      ],
      answer: "A,C",
      title: "Question 199",
    },
    {
      content: "Which scenario is invalid for execution by unit tests?",
      options: [
        "A. Loading the standard Pricebook ID using a system method",
        "B. Loading test data in place of user input for Flows.",
        "C. Executing methods for negative test scenarios",
        "D. Executing methods as different users.",
      ],
      answer: "B",
      title: "Question 200",
    },
    {
      content:
        "A developer considers the following snippet of code:Based on this code, what is the value of x?",
      options: ["A. 2", "B. 3", "C. 1", "D. 4"],
      answer: "D",
      title: "Question 201",
    },
    {
      content:
        "Which two are phases in the Salesforce Application Event propagation framework? Choose2 answers",
      options: ["A. Default", "B. Capture", "C. Bubble"],
      answer: "B,C",
      title: "Question 202",
    },
    {
      content:
        "A method is passed a list of generic sObjects as a parameter.What should the developer do to determine which object type (Account, Lead, or Contact, for example) to cast each sObject?",
      options: [
        "A. Use the getSObjectName method on the sObject class to get the sObject name.",
        "B. Use the first three characters of the sObject ID to determine the sObject type.",
        "C. Use the getSObjectType method on each generic sObject to retrieve the sObject token.",
        "D. Use a try-catch construct to cast the sObject into one of the three sObject types.",
      ],
      answer: "C",
      title: "Question 203",
    },
    {
      content:
        "Which one do you like?What should a developer consider for an environment that has over 10,000 Case records?",
      options: [
        "A. The try/catch block will handle any DML exceptions thrown.",
        "B. The transaction will fail due to exceeding the governor limit.",
        "C. The transaction will succeed and changes will be committed.",
        "D. The try/catch block will handle exceptions thrown by governor limits.",
      ],
      answer: "B",
      title: "Question 204",
    },
    {
      content:
        "Which two characteristics are true for Aura component events? Choose 2 answers",
      options: [
        "A. Depending on the current propagation phase, calling event. Stoppropagation () may not stop the event propagation.",
        "B. By default, containers can handle events thrown by components they contain.",
        "C. The event propagates to every owner in the containment hierarchy.",
        'D. If a container component needs to handle a component event, add a includeFacets" true" attribute to its handler.',
      ],
      answer: "A,C",
      title: "Question 205",
    },
    {
      content:
        "A developer needs to join data received from an integration with an external system with parent records in Salesforce. The data set does not contain the Salesforce IDs of the parent records, but it does have a foreign key attribute that can be used to identify the parent.Which action will allow the developer to relate records in the data model without knowing the Salesforce ID?",
      options: [
        "A. Create a custom field on the child object of type Foreign Key",
        "B. Create a custom field on the child object of type External Relationship.",
        "C. Create and populate a custom field on the parent object marked as Unique",
        "D. Create and populate a custom field on the parent object marked as an External ID.",
      ],
      answer: "D",
      title: "Question 206",
    },
    {
      content:
        "Refer to the following code snippet for an environment has more than 200 Accounts belonging to the Technology' industry:When the code execution, which two events occur as a result of the Apex transaction?When the code executes, which two events occur as a result of the Apex transaction?Choose 2 answers",
      options: [
        "A. The Apex transaction succeeds regardless of any uncaught exception and all processed accounts are updated.",
        "B. If executed in an asynchronous context, the apex transaction is likely to fall by exceeding the DML governor limit",
        "C. The Apex transaction fails with the following message. \"SObject row was retrieved via SOQL without querying the requested field Account.Is.Tech__c''.",
        "D. If executed In a synchronous context, the apex transaction is likely to fall by exceeding the DHL governor limit.",
      ],
      answer: "C",
      title: "Question 207",
    },
    {
      content:
        "What should a developer working in a sandbox use to exercise a new test Class before the developer deploys that test production?Choose 2 answers",
      options: [
        "A. The REST API and ApexTestRun method",
        "B. The Apex Test Execution page in Salesforce Setup.",
        "C. The Test menu in the Developer Console.",
        "D. The Run Tests page in Salesforce Setup.",
      ],
      answer: "B,C",
      title: "Question 208",
    },
    {
      content:
        "Given the code below, which three statements can be used to create the controller variable? Public class accountlistcontroller{ public list<account>getaccounts(){ return controller.getrecords(); } } Choose 3 answers",
      options: [
        "A. Apexpages.standardsetcontroller controller = new apexpages.standardsetcontroller (database.query('select id from account'));",
        "B. Apexpages.standardsetcontroller controller=newapexpages.standardsetcontroller(database.getquerylocator('select id from account'));",
        "C. Apexpages.standardcontroller controller= new apexpages.standardcontroller([select id from account]);",
        "D. Apexpages.standardcontroller controller= newapexpages.standardcontroller(database.getquerylocator('select id from account'));",
        "E. Apexpages.standardsetcontroller controller = new apexpages.standardsetcontroller (database.getquerylocator([select id from account]));",
      ],
      answer: "A,C,E",
      title: "Question 209",
    },
    {
      content: "Which two characteristics are true for Aura component events?",
      options: [
        "A. Only parent components that create subcomponents (either in their markup or programmatically) can handle events.",
        "B. If a container component needs to handle a component event, add a handleFacets='' attribute to Its handler.",
        "C. Calling event, stopPropagation ( ) may or may not stop the event propagation based of the current propagation phase.",
        "D. The event propagates to every owner In the containment hierarchy.",
      ],
      answer: "C,D",
      title: "Question 210",
    },
    {
      content:
        "What are three capabilities of the <ltng : require> tag when loading JavaScript resources in Aura components?Choose 3 answers",
      options: [
        "A. Specifying loading order",
        "B. Loading externally hosted scripts",
        "C. One-time loading for duplicate scripts",
        "D. Loading scripts In parallel",
        "E. Loading files from Documents",
      ],
      answer: "A,C,D",
      title: "Question 211",
    },
    {
      content:
        "A developer created a lightning component name accountList.cmp that display a list of Accounts. Client-side logic that is executed when a user hovers over an account in the list should be stored in which bundle member?",
      options: [
        "A. AccountListRenderer.js",
        "B. AccountList.renderer",
        "C. AccountList.helper",
        "D. AccountListHelper.js",
      ],
      answer: "B",
      title: "Question 212",
    },
    {
      content:
        "A Next Best Action strategy uses an Enhance Element that invokes an Apex method to determine a discount level for a Contact, based on a number of factors. What is the correct definition of the Apex method?",
      options: [
        "A. @InvocableMethodglobal Recommendation getLevel (ContactWrapper input){ /*implementation*/ }",
        "B. @InvocableMethodglobal static ListRecommendation getLevel(List<ContactWrapper> input){ /*implementation*/ }",
        "C. @InvocableMethodglobal static List<List<Recommendation>> getLevel(List<ContactWrapper> input){ /*implementation*/ }",
        "D. @InvocableMethodglobal List<List<Recommendation>> getLevel(List<ContactWrapper> input){ /*implementation*/ }",
      ],
      answer: "C",
      title: "Question 213",
    },
    {
      content:
        "What can a developer use to determine if the core Apex code exceeds any governor limits in a test class during bulk execution?",
      options: [
        "A. Limits, startTest, stopTest",
        "B. Test.getDmlStatements()",
        "C. @TestVisible",
        "D. @TestSetup.",
      ],
      answer: "A",
      title: "Question 214",
    },
    {
      content:
        'A Licensed_Professional__c custom object exist in the system with two Master-Detail fields for the following objects: Certification__c and Contact. Users with the "Certification Representative" role can access the Certification records they own and view the related Licensed Professionals records, however users with the"Salesforce representative" role report they cannot view any Licensed professional records even though they own the associated Contact record. What are two likely causes of users in the "Sales Representative" role not being able to access the Licensed Professional records? Choose 2 answers',
      options: [
        "A. The organization's sharing rules for Licensed_Professional__c have not finished their recalculation process.",
        "B. The organization has a private sharing model for Certification__c, and Contact is the primary relationship in the Licensed_Professional__c object",
        "C. The organization recently modified the Sales representative role to restrict Read/Write access to Licensed_Professional__c",
        "D. The organization has a private sharing model for Certification__c, and Certification__c is the primary relationship in the Licensed_Professional__c object.",
      ],
      answer: "C,D",
      title: "Question 215",
    },
    {
      content:
        "Which collection type provides unique key/value pairings of data?",
      options: ["A. List", "B. Map", "C. Array", "D. Set"],
      answer: "B",
      title: "Question 216",
    },
    {
      content:
        "Universal Containers decides to use exclusively declarative development to build out a new Salesforce application. Which three options should be used to build out the database layer for the application? Choose 3 answers",
      options: [
        "A. Relationships",
        "B. Triggers",
        "C. Process Builder",
        "D. Roll-Up Summaries",
        "E. Custom Objects and Fields",
      ],
      answer: "A,D,E",
      title: "Question 217",
    },
    {
      content:
        "A developer created a Lightning component to display a short text summary for an object and wants to use it with multiple Apex classes.How should the developer design the Apex classes?",
      options: [
        "A. Extend each class from the same base class that has a method getTextSummary() that returns the summary.",
        "B. Have each class define method getObject() that returns the sObject that is controlled by the Apex class.",
        "C. Have each class implement an interface that defines method getTextSummary() that returns the summary.",
        "D. Have each class define method getTextSummary() that returns the summary.",
      ],
      answer: "C",
      title: "Question 218",
    },
    {
      content:
        "What are three ways for a developer to execute tests in an org? Choose 3.",
      options: [
        "A. Bulk API",
        "B. Setup Menu",
        "C. Metadata API",
        "D. Developer Console",
        "E. ToolingAPI",
      ],
      answer: "B,D,E",
      title: "Question 219",
    },
    {
      content:
        "Which three steps allow a custom SVG to be included in a Lightning web component? Choose 3 answers",
      options: [
        "A. Reference the getter in the HTML template.",
        "B. Reference the import in the HTML template.",
        "C. Import the SVG as a content asset file.",
        "D. Upload the SVG as a static resource.",
        "E. Import the static resource and provide a getter for it in JavaScript.",
      ],
      answer: "A,D,E",
      title: "Question 220",
    },
    {
      content:
        "A developer executes the following query in Apex to retrieve a list of contacts for each account:List<account> accounts = [Select ID, Name, (Select ID, Name from Contacts) from Account] ; Which two exceptions may occur when it executes? (Choose two.)",
      options: [
        "A. CPU limit exception due to the complexity of the query.",
        "B. SOQL query limit exception due to the number of contacts.",
        "C. SOQL query row limit exception due to the number of contacts.",
        "D. SOQL query row limit exception due to the number of accounts.",
      ],
      answer: "B,D",
      title: "Question 221",
    },
    {
      content:
        "A developer must build application that tracks which Accounts have purchase specific pieces of equal products. Each Account could purchase many pieces of equipment.How should the developer track that an Account has purchased a piece of equipment.",
      options: [
        "A. Use a Master-Detail on Product to Account",
        "B. Use the Asset object.",
        "C. Use a Lookup on Account to product.",
        "D. Use a Custom object.",
      ],
      answer: "A",
      title: "Question 222",
    },
    {
      content:
        "In order to override a standard action with a visualforce page, which attribute must be defined in the<apex:page> tag?",
      options: [
        "A. Pagereference",
        "B. Controller",
        "C. Override",
        "D. Standardcontroller",
      ],
      answer: "D",
      title: "Question 223",
    },
    {
      content:
        "A developer is asked to set a picklist field to 'Monitor' on any new Leads owned by a subnet of Users.How should the developer implement this request?",
      options: [
        "A. Create a Lead formula field.",
        "B. Create an after insert Lead trigger.",
        "C. Create a before insert Lead trigger.",
        "D. Create a Lead Workflow Rule Field Update.",
      ],
      answer: "D",
      title: "Question 224",
    },
    {
      content:
        "To which data type in Apex a currency field automatically assigned?",
      options: ["A. Double", "B. Currency", "C. Integer", "D. Decimal"],
      answer: "D",
      title: "Question 225",
    },
    {
      content:
        "A developer wants to import 500 Opportunity records into a sandbox. Why should the developer choose to use data Loader instead of Data Import Wizard?",
      options: [
        "A. Data Import Wizard does not support Opportunities.",
        "B. Data Import Wizard can not import all 500 records.",
        "C. Data Loader runs from the developer's browser.",
        "D. Data Loader automatically relates Opportunities to Accounts.",
      ],
      answer: "A",
      title: "Question 226",
    },
    {
      content:
        "In an organization that has enabled multiple currencies, a developer needs to aggregate the sum of the Estimated_value__c currency field from the CampaignMember object using a roll-up summary field called Total_estimated_value__c on Campaign.",
      options: [
        "A. The values In CampaignMember.Estimated_value__c are converted into the currency of the current user, and the sum is displayed using the currency on the Campaign record.",
        "B. The values in CampaignMember.Estimated_value__c are converted into the currency on the majority of the CampaignMember records and the sum is displayed using that currency.",
        "C. The values in Campaignmember.Estimated_value__c are converted into the currency of the Campaign record and the sum is displayed using the currency on the Campaign record.",
        "D. The values in CampaignMember.Estimated_value__c are summed up and the resulting Total_estimated_value__c field is displayed as a numeric field on the Campaign record.",
      ],
      answer: "C",
      title: "Question 227",
    },
    {
      content:
        "The following code snippet is executed by a Lightning web component in an environment with more than 2,000 lead records:Which governor limit will likely be exceeded within the Apex transaction?",
      options: [
        "A. Total number of SOQL queries issued",
        "B. Total number of records processed as a result of DML statements",
        "C. Total number of DML statement issued",
        "D. Total number of records retrieved by SOQL queries",
      ],
      answer: "D",
      title: "Question 228",
    },
    {
      content:
        "How should a developer avoid hitting the governor limits in test methods?",
      options: [
        "A. Use @IsTest (SeeAllData=true) to use existing data.",
        "B. Use Test.loadData() to load data from a static resource.",
        "C. Use @TestVisible on methods that create records.",
        "D. Use Test.startTest() to reset governor limits.",
      ],
      answer: "D",
      title: "Question 229",
    },
    {
      content:
        'A developer has a requirement to create an Order When an Opportunity reaches a "Closed-Won" status.Which tool should be used to implement this requirement?',
      options: [
        "A. Apex trigger",
        "B. Process Builder",
        "C. Lightning Component",
        "D. Lightning",
      ],
      answer: "A",
      title: "Question 230",
    },
    {
      content:
        "A developer executes the following code in the Developer Console:List<Account> fList = new List <Account> ();For(integer i= 1; I <= 200; i++){fList.add(new Account ( Name= 'Universal Account ' + i));}Insert fList;List <Account> sList = new List<Account>();For (integer I = 201; I<20000; i ++){sList.add(new Account (Name = 'Universal Account ' + i));}Insert sList;How many accounts are created in the Salesforce organization ?",
      options: ["A. 200", "B. 20000", "C. 0", "D. 1000"],
      answer: "C",
      title: "Question 231",
    },
    {
      content:
        'What should a developer use to obtain the Id and Name of all the Leads. Accounts, and Contacts that hove the company name "Universal Containers"?',
      options: [
        "A. SELECT lead(id, name). accountOd, name), contacted, name) FROM Lead, Account, Contact WHERE Name = \"universal Containers'",
        "B. FIND 'Universal Containers' IN Name Fields RETURNING leadjid, name), accounted, name), contacted, name)",
        "C. SELECT Lead.id. Lead.Name, Account.Id, AccountName, Contacted, Contact.Name FROM Lead, Account, Contact WHERE CompanvName * Universal Containers'",
        "D. FIND Universal Containers' IN CompanyName Fietds RETURNING lead{ld. name), accounted, name), contacted, name)",
      ],
      answer: "B",
      title: "Question 232",
    },
    {
      content:
        "A developer wants to use all of the functionality provided by the standard controller for an object, but needs to override the Save standard action in a controller extension. Which two are required in the controller extension class?",
      options: [
        "A. Create a method named Save with a return data type of PageReference.",
        "B. Define the class with a constructor that creates a new instance of the StandardController class.",
        "C. Create a method that references this.superSave()",
        "D. Define the class with a constructor that takes an instance of StandardController as a parameter.",
      ],
      answer: "A,D",
      title: "Question 233",
    },
    {
      content: "What are two uses for External IDs? (Choose two.)",
      options: [
        "A. To prevent an import from creating duplicate records using Upsert",
        "B. To create relationships between records imported from an external system.",
        "C. To identify the sObject type in Salesforce",
        "D. To create a record in a development environment with the same Salesforce ID as in another environment",
      ],
      answer: "A,B",
      title: "Question 234",
    },
    {
      content:
        "How would a developer determine if a CustomObject__c record has been manually shared with the current user in Apex?",
      options: [
        "A. By querying CustomObject__Share.",
        "B. By calling the profile settings of the current user.",
        "C. By calling the isShared() method for the record.",
        "D. By querying the role hierarchy.",
      ],
      answer: "A",
      title: "Question 235",
    },
    {
      content:
        "Which code in a Visualforce page and/or controller might present a security vulnerability?",
      options: [
        'A. <apex:outputText escape="false" value=" {!$CurrentPage.parameters.userInput}" />',
        'B. <apex:outputField value="{!ctrl.userInput}" />',
        'C. <apex:outputText value="{!$CurrentPage.parameters.userInput}" />',
        'D. <apex:outputField escape="false" value="{!ctrl.userInput}" />',
      ],
      answer: "A",
      title: "Question 236",
    },
    {
      content:
        "A developer created a new trigger that inserts a Task when a new Lead is created. After deploying to production, an outside integration chat reads task records is periodically reporting errors.Which change should the developer make to ensure the integration is not affected with minimal impact to business logic?",
      options: [
        "A. Use a try-catch block after the insert statement.",
        "B. Deactivate the trigger before the integration runs.",
        "C. Remove the Apex class from the integration user's profile.",
        "D. Use the Database method with allorNone set to false",
      ],
      answer: "D",
      title: "Question 237",
    },
    {
      content:
        "A developer must provide a custom user interface when users edit a Contact. Users must be able to use the interface in Salesforce Classic and Lightning Experience.What should the developer do to provide the custom user interface?",
      options: [
        "A. Override the Contact's Edit button with a Lightning page in Salesforce Classic and a Visualforce page in Lightning Experience.",
        "B. Override the Contact's Edit buttonwith a Visualforce page in Salesforce Classic and a Lightning component in Lightning Experience.",
        "C. Override the Contact's Edit button with a Visualforce page in Salesforce Classic and a Lightning page inLightning Experience.",
        "D. Override the Contact's Editbutton with a Lightning component in Salesforce Classic and a Lightning component in Lightning Experience.",
      ],
      answer: "B",
      title: "Question 238",
    },
    {
      content:
        "A developer created a Visualforce page and custom controller to display the account type field as shown below. Custom controller code: public class customCtrlr{ private Account theAccount; public String actType; public customCtrlr() { theAccount = [SELECT Id, Type FROM Account WHERE Id =:apexPages.currentPage().getParameters().get('id')]; actType = theAccount.Type; } } Visualforce page snippet:The Account Type is {!actType} The value of the account type field is not being displayed correctly on the page. Assuming the custom controller is property referenced on the Visualforce page, what should the developer do to correct the problem?",
      options: [
        "A. Add a getter method for the actType attribute.",
        "B. Change theAccount attribute to public.",
        "C. Convert theAccount.Type to a String.",
        "D. Add with sharing to the custom controller.",
      ],
      answer: "A",
      title: "Question 239",
    },
    {
      content:
        "Developer needs to automatically populate the Reports To field in a Contact record based on the values of the related Account and Department fields in the Contact record. Which type of trigger would the developer create? Choose 2 answers",
      options: [
        "A. After update",
        "B. Before insert",
        "C. After insert",
        "D. Before update",
      ],
      answer: "B,D",
      title: "Question 240",
    },
    {
      content:
        'Universal Container(UC) wants to lower its shipping cost while making the shipping process more efficient. The Distribution Officer advises UC to implement global addresses to allow multiple Accounts to share a default pickup address. The Developer is tasked to create the supporting object and relationship for this business requirement and uses the Setup Menu to create a custom object called "Global Address". Which field should the developer ad to create the most efficient model that supports the business need?',
      options: [
        "A. Add a Lookup field on the Account object to the Global Address object.",
        "B. Add a Master-Detail field on the Account object to the Global Address object",
        "C. Add a Lookup field on the Global Address object to the Account object",
        "D. Add a Master-Detail field on the Global Address object to the Account object.",
      ],
      answer: "B",
      title: "Question 241",
    },
    {
      content:
        "Given the following block code: try{ List <Accounts> retrievedRecords = [SELECT Id FROM Account WHERE Website = null]; }catch(Exception e){ //manage exception logic } What should a developer do to ensure the code execution is disrupted if the retrievedRecordslist remains empty after the SOQL query?",
      options: [
        "A. Check thestate of the retrieveRecords variable and throw a custom exception if the variable is empty.",
        "B. Check the state of the retrievedRecords variable andaccess the first element of the list if the variable is empty.",
        "C. Check the state of the retrievedRecords variable and use System.assert(false) if the variable is empty",
        "D. Replace the retrievedRecords variable declaration from ftount to a single Account.",
      ],
      answer: "C",
      title: "Question 242",
    },
    {
      content:
        "From which two locations can a developer determine the overall code coverage for a sandbox? Choose two answers",
      options: [
        "A. The Apex classes setup page",
        "B. The Test Suite Run panel the Developer Console",
        "C. The Test Tab of the Developer Console",
        "D. The Apex Test Execution page",
      ],
      answer: "A,C",
      title: "Question 243",
    },
    {
      content:
        "What is a benefit of developing applications in a multi-tenant environment?",
      options: [
        "A. Enforced best practices for development",
        "B. Unlimited processing power and memory",
        "C. Access to predefined computing resources",
        "D. Default out-of-the-box configuration",
      ],
      answer: "A",
      title: "Question 244",
    },
    {
      content:
        "hat are three techniques that a developer can use to invoke an anonymous block of code? Choose 3 answers",
      options: [
        "A. Type code into the execute anonymous tab in the force.com IDE and click execute",
        "B. Use the SOAP API to make a call to execute anonymous code",
        "C. Create and execute a test method that does not specify a runas() call",
        "D. Create a visualforce page that uses a controller class that is declared without sharing",
        "E. Type code into the developer console and execute it directly",
      ],
      answer: "A,B,E",
      title: "Question 245",
    },
    {
      content: "What is the result of the following code?",
      options: [
        "A. The record will be created and a message will be in the debug log.",
        "B. The record will be created and no error will be reported.",
        "C. The record will not be created and no error will be reported.",
        "D. The record will not be created and a exception will be thrown.",
      ],
      answer: "C",
      title: "Question 246",
    },
    {
      content: "How should a developer create a new custom exception class?",
      options: [
        "A. CustomException ex = new (CustomException)Exception();",
        "B. public class CustomException implements Exception{}",
        "C. public class CustomException extends Exception{}",
        "D. (Exception)CustomException ex = new Exception();",
      ],
      answer: "C",
      title: "Question 247",
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
      answer: "B",
      title: "Question 248",
    },
    {
      content:
        "An Approval Process is defined in the Expense_Item__c. A business rule dictates that whenever a user changes the Status to 'Submitted' on an Expense_Report__c record, all the Expense_Item__c records related to the expense report must enter the approval process individually. Which approach should be used to ensure the business requirement is met?",
      options: [
        "A. Create a Process Builder on Expense_Report__c to mark the related Expense_Item__c as submittable and trigger on Expense_item__c to submit the records for approval.",
        "B. Create a Process Builder on Expense_Report__c with a 'Submit for Approval' action type to submit all related Expense_Item__c records when the criteria is met.",
        "C. Create a Process Builder on Expense_Report__c with an 'Apex' action type to submit all related Expense_Item__c records when the criteria is met.",
        "D. Create two Process Builder, one on Expense_Report__c to mark the related Expense_Item__c as submittable and the second on Expense_Item__c to submit the records for approval.",
      ],
      answer: "B",
      title: "Question 249",
    },
    {
      content:
        "What are two valid options for iterating through each Account in the collection List<Account> named AccountList? (Choose two.)",
      options: [
        "A. for (Integer i=0; i < AccountList.Size(); i++) {...}",
        "B. for (Account theAccount : AccountList) {...}",
        "C. for(AccountList) {...}",
        "D. for (List L : AccountList) {...}",
      ],
      answer: "A,B",
      title: "Question 250",
    },
    {
      content:
        "A developer wants to store a description of a product that can be entered on separate lines by a user during product setup and later displayed on a Visualforce page for shoppers. Which field type should the developer choose to ensure that the description will be searchable in the custom Apex SOQL queries that are written?",
      options: [
        "A. Text Area (Rich)",
        "B. Text Area (Long)",
        "C. Text",
        "D. Text Area",
      ],
      answer: "D",
      title: "Question 251",
    },
    {
      content:
        "Which feature allows a developer to create test records for use in test classes?",
      options: [
        "A. Documents",
        "B. Httpcalloutmocks",
        "C. Static resources",
        "D. Webservicetests",
      ],
      answer: "D",
      title: "Question 252",
    },
    {
      content:
        "Given the code below:What should a developer do to correct the code so that there is no chance of hitting a governor limit?",
      options: [
        "A. Add a LIMIT clause to the first SELECT SOQL statement.",
        "B. Rework the code and eliminate the for loop.",
        "C. combine the two SELECT statements into a single SOQL statement.",
        "D. Add a WHERE clause to the first SELECT SOQL statement.",
      ],
      answer: "A",
      title: "Question 253",
    },
    {
      content:
        "A developer considers the following snippet of code:Based on this code, what is the value of x?",
      options: ["A. 3", "B. 4", "C. 2", "D. 1"],
      answer: "B",
      title: "Question 254",
    },
  ],
});
