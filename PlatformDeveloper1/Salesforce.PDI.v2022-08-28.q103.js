window.testContent = window.testContent || [];
var testId = "PlatformDeveloper1";
var testName = "PlatformDeveloper1.PDI";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "PlatformDeveloper1.PDI.v2022-08-28.q103",
  content: [
    {
      content:
        "Which two types of process automation can be used to calculate the shipping cost for an Order when the Order is placed and apply a percentage of the shipping cost of some of the related Order Products?Choose 2 answers",
      options: [
        "A. Flow Builder",
        "B. Approval Process",
        "C. Workflow Rule",
        "D. Process Builder",
      ],
      answer: "A,D",
      title: "Question 1",
    },
    {
      content:
        "How should a custom user interface be provided when a user edits an Account in Lightning Experience?",
      options: [
        "A. Override the Account's Edit button with Lightning component.",
        "B. Override the Account's Edit button with Lightning Flow",
        "C. Override the Account's Edit button with Lightning Action",
        "D. Override the Account's Edit button with Lightning page.",
      ],
      answer: "A",
      title: "Question 2",
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
      title: "Question 3",
    },
    {
      content:
        "Which annotation exposes an Apex class as a RESTful web service?",
      options: [
        "A. ©AuraEnabled",
        "B. ©RestResource",
        "C. ©Httplnvocable",
        "D. ©Remote Action",
      ],
      answer: "B",
      title: "Question 4",
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
      title: "Question 5",
    },
    {
      content:
        "What is the value of the Trigger.old context variable in a Before Insert trigger?",
      options: [
        "A. null",
        "B. A list of newly created sObjects without IDS",
        "C. An empty list of sObjects",
        "D. Undefined",
      ],
      answer: "A",
      title: "Question 6",
    },
    {
      content:
        "A developer is implementing an Apex class for a financial system. Within the class, the variables 'creditAmount' and 'debtAmount' should not be able to change once a value is assigned. In which two ways can the developer declare the variables to ensure their value can only be assigned one time? Choose 2 answers",
      options: [
        "A. Use the final keyword and assign its value in the class constructor.",
        "B. Use the static keyword and assign its value in a static initializer.",
        "C. Use the static keyword and assign its value in the class constructor.",
        "D. Use the final keyword and assign its value when declaring the variable.",
      ],
      answer: "A,D",
      title: "Question 7",
    },
    {
      content:
        "Which two characteristics are true for Aura component events? Choose 2 answers",
      options: [
        "A. The event propagates to every owner in the containment hierarchy.",
        "B. Depending on the current propagation phase, calling event. Stoppropagation () may not stop the event propagation.",
        'C. If a container component needs to handle a component event, add a includeFacets" true" attribute to its handler.',
        "D. By default, containers can handle events thrown by components they contain.",
      ],
      answer: "A,B",
      title: "Question 8",
    },
    {
      content:
        "A developer needs to implement a custom SOAP Web Service that is used by an external Web Application. The developer chooses to Include helper methods that are not used by the Web Application In the Implementation of the Web Service Class.Which code segment shows the correct declaration of the class and methods?",
      options: [
        "A. \nwebservice class WebServiceClass {\n　private Boolean helperMethod(){/* implementation ... */}\n　global static String updateRecords() { /* implementation ... */}\n}",
        "B. \nglobal class WebServiceClass {\n　private Boolean helperMethod() { /* implementation ... */}\n　Webservice static String updateRecords() {/* implementation ... */}\n}",
        "C. \nwebservice class WebServiceClass{\n　private Boolean helperMethod() { /* implementation ... */}\n　webservice static String updateRecords() { /* implementation ... */}\n}",
        "D. \nglobal class WebServiceClass {\n　private Boolean helperMethod() { /* implementation ... */}\n　global String updateRecords() { /* implementation ... */}\n}",
      ],
      answer: "B",
      title: "Question 9",
    },
    {
      content:
        "Get Cloudy Consulting (GCC) has a multitude of servers that host its customers' websites. GCC wants to provide a servers status page that is always on display in its call center. It should update in real time with any changes made to any servers. To accommodate this on the server side, a developer created a server Update platform event.The developer is working on a Lightning web component to display the information.",
      options: [
        "A. import ( subscribe, unsubscribe, onError ) from 'lightning/pubsub'",
        "B. import ( subscribe, unsubscribe, onError ) from 'lightning/ServerUpdate'",
        "C. import ( subscribe, unsubscribe, onError ) from 'lightning/empApi '",
        "D. import ( subscribe, unsubscribe, onError ) from 'lightning/MessageChannel'",
      ],
      answer: "C",
      title: "Question 10",
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
      title: "Question 11",
    },
    {
      content:
        'A developer has two custom controller extensions where each has a save() method.Which save() method will be called for the following Visualforce page?<apex:page standardController ="Account", extensions="ExtensionA, ExtensionB"><apex:commandButton action ="{!save}" value="Save"/></apex:page>',
      options: [
        "A. Runtime error will be generated",
        "B. ExtensionA save()",
        "C. Standard controller save()",
        "D. ExtensionB save()",
      ],
      answer: "A",
      title: "Question 12",
    },
    {
      content:
        "A developer must implement a CheckPaymentProcessor class that provides check processing payment capabilities that adhere to what defined for payments in the PaymentProcessor interface. public interface PaymentProcessor { void pay(Decimal amount); } Which is the correct implementation to use the PaymentProcessor interface class?",
      options: [
        "A. Public class CheckPaymentProcessor extends PaymentProcessor {public void pay(Decimal amount) {}}",
        "B. Public class CheckPaymentProcessor implements PaymentProcessor {public void pay(Decimal amount) {}}",
        "C. Public class CheckPaymentProcessor extends PaymentProcessor {public void pay(Decimal amount);}",
        "D. Public class CheckPaymentProcessor implements PaymentProcessor {public void pay(Decimal amount);}",
      ],
      answer: "B",
      title: "Question 13",
    },
    {
      content: "Which action may cause triggers to fire?",
      options: [
        "A. Renaming or replacing a picklist entry",
        "B. Cascading delete operations",
        "C. Updates to Feed Items",
        "D. Changing a user's default division when the transfer division option is checked",
      ],
      answer: "C",
      title: "Question 14",
    },
    {
      content:
        "An Opportunity needs to have an amount rolled up from a custom object that is not in a master-detail relationship.How can this be achieved?",
      options: [
        "A. Write a Process Builder that links the custom object to the Opportunity.",
        "B. Write a trigger on the child object and use an aggregate function to sum the amount for all related child objects under the Opportunity",
        "C. Write a trigger on the child object and use a red-black tree sorting to sum the amount for all related child objects under the Opportunity.",
        "D. Use the Streaming API to create real-time roll-up summaries.",
      ],
      answer: "B",
      title: "Question 15",
    },
    {
      content:
        "A developer created a new trigger that inserts a Task when a new Lead is created. After deploying to production, an outside integration chat reads task records is periodically reporting errors.Which change should the developer make to ensure the integration is not affected with minimal impact to business logic?",
      options: [
        "A. Use a try-catch block after the insert statement.",
        "B. Remove the Apex class from the integration user's profile.",
        "C. Use the Database method with all or None set to false",
        "D. Deactivate the trigger before the integration runs.",
      ],
      answer: "B",
      title: "Question 16",
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
      title: "Question 17",
    },
    {
      content:
        'When a user edits the Postal Code on an Account, a custom Account text field named "Timezone" must be update based on the values in a PostalCodeToTimezone__c custom object. How should a developer implement this feature?',
      options: [
        "A. Build an Account custom Trigger.",
        "B. Build an Account Assignment Rule.",
        "C. Build an Account Workflow Rule.",
        "D. Build an account Approval Process",
      ],
      answer: "A",
      title: "Question 18",
    },
    {
      content:
        "What is an example of a polymorphic lookup field in Salesforce?",
      options: [
        "A. The Whatld field on the standard Event object",
        "B. The Parentid field on the standard Account object",
        "C. A custom field, Link__c, on the standard Contact object that looks up to an Account or a Campaign",
        "D. The LeadId and Contactid fields on the standard Campaign Member object",
      ],
      answer: "A",
      title: "Question 19",
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
      title: "Question 20",
    },
    {
      content:
        'A developer creates a new Apex trigger with a helper class, and writes a test class that only exercises 95% coverage of new Apex helper class. Change Set deployment to production fails with the test coverage warning: "Test coverage of selected Apex Trigger is 0%, at least 1% test coverage is required" What should the developer do to successfully deploy the new Apex trigger and helper class?',
      options: [
        "A. Remove the falling test methods from the test class.",
        "B. Create a test class and methods to cover the Apex trigger",
        "C. Run the tests using the 'Run All Tests' method.",
        "D. Increase the test class coverage on the helper class",
      ],
      answer: "B",
      title: "Question 21",
    },
    {
      content:
        "While writing an Apex class that creates Accounts, a developer wants to make sure that all required fields are handled properly. Which approach should the developer use to be sure that the Apex class works correctly?",
      options: [
        "A. Perform a code review with another developer.",
        "B. Include a try/catch block to the Apex class.",
        "C. Run the code in an Execute Anonymous block.",
        "D. Add the business logic to a test class.",
      ],
      answer: "B",
      title: "Question 22",
    },
    {
      content:
        "A custom picklist field, Food_Preference__c, exist on a custom object. The picklist contains the following options: 'Vegan','Kosher','No Preference'. The developer must ensure a value is populated every time a record is created or updated. What is the most efficient way to ensure a value is selected every time a record is saved?",
      options: [
        'A. Set "Use the first value in the list as the default value" as True.',
        "B. Mark the field as Required on the field definition.",
        "C. Set a validation rule to enforce a value is selected.",
        "D. Mark the field as Required on the object's page layout.",
      ],
      answer: "B",
      title: "Question 23",
    },
    {
      content:
        "Universal container wants a list button to display a visualforce page that allows users to edit multiple records which visualforce feature supports this requirement.",
      options: [
        "A. <apex:listButton> tag",
        "B. Recordsetvar page attribute",
        "C. Custom controller",
        "D. Controller extension",
      ],
      answer: "B",
      title: "Question 24",
    },
    {
      content:
        "A developer created a Lightning web component called statusComponent to be inserted into the Account record page.Which two things should the developer do to make the component available?",
      options: [
        "A. Add <isExposed> true</isExposed> to the statusComponent.js-meta ml file.",
        "B. Add < masterLabel>Account</master Label> to the statusComponent.js-meta ml file.",
        "C. Add<target> Lightning_RecordPage </target> to the statusComponent.js file.",
        "D. Add <target> lighting _RecordPage </target> to the statusComponent.js-meta ml file.",
      ],
      answer: "A,D",
      title: "Question 25",
    },
    {
      content:
        "Universal Containers wants a list button to display a Visualforce page that allows users to edit multiple records. which Visualforce feature supports this requirement?",
      options: [
        "A. Custom controller",
        "B. <apex:listButton> tag",
        "C. Controller extension",
        "D. RecordSetVar page attribute",
      ],
      answer: "D",
      title: "Question 26",
    },
    {
      content:
        "The following automations already exist on the Account object:\n　* A workflow rule that updates a field when a certain criteria is met\n　* A custom validation on a field\n　* A flow that updates related contact records.\nA developer created a trigger on the Account object.\nWhat should the developer consider while testing the trigger code?",
      options: [
        "A. The trigger may fire multiple times during a transaction.",
        "B. Workflow rules will fire only after the trigger has committed all DML operations to the database.",
        "C. A workflow rule field update will cause the custom validation to run again.",
        "D. The flow may be launched multiple times.",
      ],
      answer: "A",
      title: "Question 27",
    },
    {
      content:
        "Considering the following code snippet:\npublic static void insertaccounts(List these Accounts){\n　for(Account thisAccount : theseAccounts{\n　　if(thisAccount.website == null) {\n　　　thisAccount.website = 'https://www.denc.com';\n　　}\n　}\n　update theseAccounts;\n}When the code executes a DML exception is thrown.How should the developer modify the code to ensure exceptions are handled gracefully?",
      options: [
        "A. Implement the upsert DML statement.",
        "B. Implement a try/catch block for the DML.",
        "C. Remove null items from the list if Accounts.",
        "D. Implement Change Data Capture",
      ],
      answer: "B",
      title: "Question 28",
    },
    {
      content:
        "Which two examples above use the system. debug statements to correctly display the results from the SOQL aggregate queries?\nExample 1:\nAggregateResult[] groupedResults = [SELECT CampaignId, AVG(Amount) FROM Opportunity GROUP BY CampaignId];\nfor (AggregateResult ar : groupedResults) {\n　System.debug(‘Campaign ID’ + ar.get(‘CampaignId’));\n　System.debug(‘Average amount’ + ar.get(‘expr0’)); \n}\nExample 2:\nAggregateResult[] groupedResults = [SELECT CampaignId, AVG(Amount) theAverage FROM Opportunity GROUP BY CampaignId];\nfor (AggregateResult ar : groupedResults) {\n　System.debug(‘Campaign ID’ + ar.get(‘CampaignId’));\n　System.debug(‘Average amount’ + ar.get(‘theAverage’)); \n}\nExample 3:\nAggregateResult[] groupedResults = [SELECT CampaignId, AVG(Amount) FROM Opportunity GROUP BY CampaignId];\nfor (AggregateResult ar : groupedResults) {\n　System.debug(‘Campaign ID’ + ar.get(‘CampaignId’));\n　System.debug(‘Average amount’ + ar.get.AVG()); \n}\nExample 4:\nAggregateResult[] groupedResults = [SELECT CampaignId, AVG(Amount) theAverage FROM Opportunity GROUP BY CampaignId];\nfor (AggregateResult ar : groupedResults) {\n　System.debug(‘Campaign ID’ + ar.get(‘CampaignId’));\n　System.debug (‘Average amount’ + ar.theAverage); \n}\nWhich two of the examples above have correct System.debug statements? (Choose two.)",
      options: ["A. Example 1", "B. Example 2", "C. Example 3", "D. Example 4"],
      answer: "A,B",
      title: "Question 29",
    },
    {
      content:
        "The Account object in an organization has a master detail relationship to a child object called Branch. The following automations exist:\n　* Rollup summary fields\n　* Custom validation rules\n　* Duplicate rules\nA developer created a trigger on the Account object.What two things should the developer consider while testing the trigger code?Choose 2 answers",
      options: [
        "A. Rollup summary fields can cause the parent record to go through Save.",
        "B. The validation rules will cause the trigger to fire again.",
        "C. Duplicate rules are executed once all DML operations commit to the database.",
        "D. The trigger may fire multiple times during a transaction.",
      ],
      answer: "A,D",
      title: "Question 30",
    },
    {
      content:
        "What are three considerations when using the @InvocableMethod annotation in Apex?Choose 3 answers",
      options: [
        "A. A method using the @InvocableMethod annotation must define a return value.",
        "B. Only one method using the @InvocableMethod annotqation can be defined per Apex class.",
        "C. A method using the @InvocableMethod annotation can have multiple input parameters.",
        "D. A method using the @InvocableMethod annotation can be declared as Public or Global.",
        "E. A method using the @InvocableMethod annotation must be declared as static",
      ],
      answer: "B,D,E",
      title: "Question 31",
    },
    {
      content:
        "A developer writes a trigger on the Account object on the before update event that increments a count field. A workflow rule also increments the count field every time that an Account is created or updated. The field update in the workflow rule is configured to not re-evaluate workflow rules.What is the value of the count field if an Account is inserted with an initial value of zero, assuming no other automation logic is implemented on the Account?",
      options: ["A. 3", "B. 1", "C. 4", "D. 2"],
      answer: "D",
      title: "Question 32",
    },
    {
      content:
        "An org has an existing Visual Flow that creates an Opportunity with an Update records element. A developer must update the Visual Flow also created a Contact and store the created Contact's ID on the Opportunity.",
      options: [
        "A. Add a new Update records element",
        "B. Add a new Get Records element.",
        "C. Add a new Quick Action (of type create) element.",
        "D. Add a new Create records element.",
      ],
      answer: "D",
      title: "Question 33",
    },
    {
      content:
        "The Salesforce Administrator created a custom picklist field, Account_status_c, on the a Account object. This picklist has possible values of Inactive'' and Active?As part of a new business process, management wants to ensure an opportunity record is created only for Accounts marked as \"Active\". A developer is asked to implement this business requirement.Which two automation tools should be used to fulfill the business need?Choose 2 answers",
      options: [
        "A. Process Builder",
        "B. Workflow Rules",
        "C. Salesforce Flow",
        "D. Approval Process",
      ],
      answer: "C",
      title: "Question 34",
    },
    {
      content:
        "A developer observes that an Apex test method fails in the Sandbox. To identify the issue, the developer copies the code inside the test method and executes it via the Execute Anonymous tool in the Developer Console. The code then executes with no exceptions or errors. Why did the test method fail in the sandbox and pass in the Developer Console?",
      options: [
        "A. The test method has a syntax error in the code.",
        "B. The test method does not use System.runAs to execute as a specific user.",
        "C. The test method is calling an @future method.",
        "D. The test method relies on existing data in the sandbox.",
      ],
      answer: "D",
      title: "Question 35",
    },
    {
      content:
        'Universal Containers has an order system that uses on Order Number to identify an order for customers service agents. Order records will be imported into Salesforce.How should the "Order Number field be defined in Salesforce.',
      options: [
        "A. Lookup",
        "B. Indirect Lookup",
        "C. Direct Lookup",
        "D. Number with External ID",
      ],
      answer: "D",
      title: "Question 36",
    },
    {
      content:
        "A developer of Universal Containers is tasked with implementing a new Salesforce application that must be able to by their company's Salesforce administrator.Which three should be considered for building out the business logic layer of the application? Choose 3 answers",
      options: [
        "A. Workflows",
        "B. validation Rules",
        "C. Invocable Actions",
        "D. Process Builder",
        "E. Scheduled Jobs",
      ],
      answer: "A,B,D",
      title: "Question 37",
    },
    {
      content:
        "A develop created these three roll-up summary fields on the custom object. Project_c:The developer is asked to create a new field that should the ratio between rejected and approved timesheet for a given project.What are two benefits of choosing a formula held instead of an Apex trigger to fulfill the request? Choose 2 answers",
      options: [
        "A. A test class will validate the formula field during deployment.",
        "B. A formula field will trigger existing automation when deployed.",
        "C. Using a formula field reduces maintenance overhead.",
        "D. A formula field will calculate the retroactively for existing records",
      ],
      answer: "B,D",
      title: "Question 38",
    },
    {
      content:
        "A team of developers is working on a source-driven project that allows them to work independently, with many different org configurations. Which type of Salesforce orgs should they use for their development?",
      options: [
        "A. Developer sandboxes",
        "B. Scratch orgs",
        "C. Full Copy sandboxes",
        "D. Developer orgs",
      ],
      answer: "B",
      title: "Question 39",
    },
    {
      content:
        "A developer has to identify a method in en Apex class that performs resource intensive actions in memory by iterating over the result set of a SOQL statement on the account. The method also performs a SOQL statement to save the changes to the database.Which two techniques should the developer implement as a best practice to ensure transaction control and avoid exceeding governor limits?Choose 2 answers",
      options: [
        "A. Use the System.Limit class to monitor the current CPU governor limit consumption.",
        "B. Use the Database.Savepoint method to enforce database integrity.",
        "C. Use Partial DHL statements to ensure only valid data is committed.",
        "D. Use the @ReadOnly annotation to bypass the number of rows returned by a SOQL.",
      ],
      answer: "A,B",
      title: "Question 40",
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
      title: "Question 41",
    },
    {
      content:
        "A developer wants to import 500 Opportunity records into a sandbox. Why should the developer choose to use data Loader instead of Data Import Wizard?",
      options: [
        "A. Data Import Wizard can not import all 500 records.",
        "B. Data Import Wizard does not support Opportunities.",
        "C. Data Loader runs from the developer's browser.",
        "D. Data Loader automatically relates Opportunities to Accounts.",
      ],
      answer: "B",
      title: "Question 42",
    },
    {
      content:
        "How does the Lightning Component framework help developers implement solutions faster?",
      options: [
        "A. By providing an Agile process with default steps",
        "B. By providing change history and version control",
        "C. By providing code review standards and processes",
        "D. By providing device-awareness for mobile and desktops",
      ],
      answer: "D",
      title: "Question 43",
    },
    {
      content:
        "Universal Containers wants Opportunities to be locked from editing when reaching the Closed/Won stage.Which two strategies should a developer use to accomplish this? Choose 2 answers",
      options: [
        "A. Use a Flow Builder.",
        "B. Use a validation rule.",
        "C. Use the Process Automation Settings.",
        "D. Mark fields as read-only on the page layout.",
      ],
      answer: "B,D",
      title: "Question 44",
    },
    {
      content:
        "A developer needs to create a custom button for the Account object that, when clicked, will perform a series of calculation and redirect the user to a custom visualforce page.Which three attributes need to be defined with values in the <apex:page> tag to accomplish this?Choose 3 answers",
      options: [
        "A. renderAs",
        "B. readOnly",
        "C. standard Controller",
        "D. extensions",
        "E. Action",
      ],
      answer: "C,D,E",
      title: "Question 45",
    },
    {
      content:
        "A developer wants to get access to the standard price book in the org while writing a test class that covers an OpportunityLineItem trigger. Which method allows access to the price book?",
      options: [
        "A. Use @IsTest (SeeAllData=True) and delete the existing standard price book",
        "B. Use Test,getStandardPricebookid ( ) to get the standard price book ID.",
        "C. Use Test.loadData ( )and a static resource to load a standard price book",
        "D. Use @TestVisible to allow the test method to see the standard price book.",
      ],
      answer: "B",
      title: "Question 46",
    },
    {
      content:
        "Universal Containers decides to use purely declarative development to build out a new Salesforce application.Which three options can be used to build out the business logic layer for this application?Choose 3 answers",
      options: ["A. Validation Rules", "B. Flow Builder", "C. Process builder"],
      answer: "A,B,C",
      title: "Question 47",
    },
    {
      content:
        "Where are two locations a developer can look to find information about the status of asynchronous or future methods? Choose 2 answers",
      options: [
        "A. Paused Flow Interviews component",
        "B. Apex Flex Queue",
        "C. Time-Based Workflow Monitor",
        "D. Apex Jobs",
      ],
      answer: "B,D",
      title: "Question 48",
    },
    {
      content:
        "Cloud Kicks Fitness, an ISV Salesforce partner, is developing a managed package application. One of the application modules allows the user to calculate body fat using the Apex class, BodyFat, and its method, calculateBodyFat(). The product owner wants to ensure this method is accessible by the consumer of the application when developing customizations outside the ISV's package namespace.Which approach should a developer take to ensure calculateBodyFat() is accessible outside the package namespace?",
      options: [
        "A. Declare the class as global and use the public access modifier on the method.",
        "B. Declare the class as public and use the global access modifier on the method.",
        "C. Declare the class and method using the global access modifier.",
        "D. Declare the class and method using the public access modifier.",
      ],
      answer: "C",
      title: "Question 49",
    },
    {
      content:
        "While writing an Apex class, a developer wants to make sure that all functionality being developed is handled as specified by the requirements.Which approach should the developer use to be sure that the Apex class is working according to specifications?",
      options: [
        "A. Include a savepoint and Database. rollback ().",
        "B. Run the code in an Execute Anonymous block in the Developer Console.",
        "C. Create a test class to execute the business logic and run the test in the Developer Console.",
        "D. Include a try/catch block to the Apex class.",
      ],
      answer: "D",
      title: "Question 50",
    },
    {
      content: "What are two ways for a developer to execute tests in an org?",
      options: [
        "A. Bulk API",
        "B. Matadata API",
        "C. Tooling API",
        "D. Developer console",
      ],
      answer: "C,D",
      title: "Question 51",
    },
    {
      content:
        "Since Aura application events follow the traditional publish-subscribe model, which method is used to fire an event?",
      options: [
        "A. ernit()",
        "B. fireEvent()",
        "C. registerEvent()",
        "D. fire()",
      ],
      answer: "D",
      title: "Question 52",
    },
    {
      content:
        "A developer needs to join data received from an integration with an external system with parent records in Salesforce. The data set does not contain the Salesforce IDs of the parent records, but it does have a foreign key attribute that can be used to identify the parent.Which action will allow the developer to relate records in the data model without knowing the Salesforce ID?",
      options: [
        "A. Create a custom field on the child object of type External Relationship.",
        "B. Create and populate a custom field on the parent object marked as Unique",
        "C. Create a custom field on the child object of type Foreign Key",
        "D. Create and populate a custom field on the parent object marked as an External ID.",
      ],
      answer: "A",
      title: "Question 53",
    },
    {
      content:
        "A developer needs to create a baseline set of data (Accounts, Contacts, Products, Assets) for an entire suite of test allowing them to test independent requirements various types of Salesforce Cases.Which approach can efficiently generate the required data for each unit test?",
      options: [
        "A. Create test data before Test.startTest() in the unit test.",
        "B. Create a nock using the Stud API",
        "C. Use @TestSetup with a viod method.",
        "D. Add @isTest(seeAllData=true) at the start of the unit test class.",
      ],
      answer: "C",
      title: "Question 54",
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
      title: "Question 55",
    },
    {
      content:
        "A developer is migrating a Visualforce page into a Lightning web component. The Visualforce page shows information about a single record. The developer decides to use Lightning DataService to access record data. Which security consideration should the developer be aware of?",
      options: [
        "A. Lightning Data Service handles sharing rules and field-level security.",
        "B. The with sharing keyword must be used to enforce sharing rules.",
        "C. The isAccessible ( ) method must be used for field-level access checks",
        "D. Lightning Data Service ignores field-level security.",
      ],
      answer: "A",
      title: "Question 56",
    },
    {
      content:
        "Which three Salesforce resources can be accessed from a Lightning web component?Choose 3 answers",
      options: [
        "A. Third-party web components",
        "B. Content asset files",
        "C. SVG resources",
        "D. Static resources",
        "E. All external libraries",
      ],
      answer: "C,D,E",
      title: "Question 57",
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
      title: "Question 59",
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
      title: "Question 60",
    },
    {
      content:
        "Refer to the following Apex code:Integer x = 0;\ndo {\n　x = 1;\n　x++;\n} while(x < 1);\nsystem.debug(x);\nWhat is the value of x when it is written to the debug log?",
      options: ["A. 1", "B. 2", "C. 0", "D. 3"],
      answer: "B",
      title: "Question 61",
    },
    {
      content:
        "A developer created these three Rollup Summary fields in the custom object, Project_ct,The developer is asked to create a new field that shows the ratio between rejected and approved timesheets for a given project.Which should the developer use to Implement the business requirement in order to minimize maintenance overhead?",
      options: [
        "A. Record-triggered Flow",
        "B. Process Builder",
        "C. Apex Trigger",
        "D. Formula field",
      ],
      answer: "D",
      title: "Question 62",
    },
    {
      content:
        "What are two ways that a controller and extension can be specified on a Visualforce page?Choose 2 answers",
      options: [
        'A. Qo apex:page standardController="Account" extensions="myControllerExtension"',
        'B. [email protected]:page=Account extends="myControllerExtension"',
        'C. apex:page controllers="Account, myControllerExtension"',
        'D. apex:page controller="Account" extensions="myControllerExtension""',
      ],
      answer: "A,D",
      title: "Question 63",
    },
    {
      content:
        "What should a developer use to fix a Lightning web component bug in a sandbox?",
      options: [
        "A. VS Code",
        "B. Developer Console",
        "C. Force.com IDE",
        "D. Execute Anonumous",
      ],
      answer: "A",
      title: "Question 64",
    },
    {
      content:
        "A developer writes a single trigger on the Account object on the after insert and after update events. A workflow rule modifies a field every time an Account is created or updated.How many times will the trigger fire if a new Account is inserted, assuming no other automation logic is implemented on the Account?",
      options: ["A. 1", "B. 4", "C. 2", "D. 8"],
      answer: "C",
      title: "Question 65",
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
      title: "Question 66",
    },
    {
      content:
        "Which two events need to happen when deploying to a production org? Choose 2 answers",
      options: [
        "A. All triggers must have at least 75% test coverage.",
        "B. All test and triggers must have at least 75% test coverage combined",
        "C. All triggers must have at least 1% test coverage.",
        "D. All Apex code must have at least 75% test coverage.",
      ],
      answer: "C,D",
      title: "Question 67",
    },
    {
      content:
        "Which two statements are true about Getter and Setter methods as they relate to Visualforce?",
      options: [
        "A. Setter methods always have to be declared global.",
        "B. A corresponding Setter method is required for each Getter method.",
        "C. There is no guarantee for the order in which Getter methods are called.",
        "D. Getter methods pass values from a controller to a page.",
      ],
      answer: "B,D",
      title: "Question 68",
    },
    {
      content:
        "A developer is asked to create a Visualforce page for Opportunities that allows users to save or merge the current record.Which approach should the developer to meet this requirement?",
      options: [
        "A. A custom controller",
        "B. A custom controller extension",
        "C. Visualforce page JavaScript",
        "D. Standard controller methods",
      ],
      answer: "A",
      title: "Question 69",
    },
    {
      content:
        "A developer needs to create a custom Interface in Apex.Which three considerations must the developer keep in mind while developing the Apex Interface?Choose 3 answers",
      options: [
        "A. The Apex class must be declared using the interface keyword.",
        "B. New methods can be added to a public interface within a released package.",
        "C. The Apex interface class access modifier can be set to Private, Public, or Global.",
        "D. A method implementation can be defined within the Apex Interface.",
        "E. A method defined In an Apex Interface cannot have an access modifier.",
      ],
      answer: "A,D,E",
      title: "Question 70",
    },
    {
      content:
        "Universal Containers has a Visualforce page that displays a table of every Container_c. being ....... Is falling with a view state limit because some of the customers rent over 10,000 containers.What should a developer change about the Visualforce page to help with the page load errors?",
      options: [
        "A. Implement pagination with an OffsetController.",
        "B. Implement pagination with a StandardSetController,",
        "C. Use JavaScript remoting with SOQL Offset.",
        "D. Use Lazy loading and a transient List variable.",
      ],
      answer: "B",
      title: "Question 71",
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
      title: "Question 72",
    },
    {
      content:
        'A Salesforce Administrator used Flow Builder to create a flow named "accountOnboarding". The flow must be used inside an Aura component.Which tag should a developer use to display the flow in the component?',
      options: [
        "A. Lightning-flow",
        "B. Aura-flow",
        "C. Aura:flow ",
        "D. Lightning:flow",
      ],
      answer: "D",
      title: "Question 73",
    },
    {
      content:
        "Universal Containers (UC) uses a custom object called Vendor. The Vendor custom object has a Master-Detail relationship with the standard Account object. Based on some internal discussion, the UC administrator tried to change the Master-Detail relationship to a Lookup relationship but was not able to do so. What is a possible reason that this change was not permitted?",
      options: [
        "A. The Vendor records have existing values in the Account object.",
        "B. The Account records contain Vendor roll-up summary fields.",
        "C. The Account object is included on a workflow on the Vendor object.",
        "D. The Vendor object must use a Master-Detail field for reporting.",
      ],
      answer: "B",
      title: "Question 74",
    },
    {
      content:
        "Which Lightning code segment should be written to declare dependencies on a Lightning component, c:accountList, that is used in a Visualforce page?\nA.\n&lt;aura:application access=&quot;GLOBAL&quot; extends=&quot;ltng:outApp&quot;&gt;\n　&lt;aura:dependency resource=&quot;c:accountList&quot;/&gt;\n&lt;/aura:application&gt;\n\nB.\n&lt;aura:component access=&quot;GLOBAL&quot; extends=&quot;ltng:outApp&quot;&gt;\n　&lt;aura:dependency resource=&quot;c:accountList&quot;/&gt;\n&lt;/aura:component&gt;\n\nC.\n&lt;aura:component access=&quot;GLOBAL&quot;&gt;\n　&lt;aura:dependency resource=&quot;c:accountList&quot;/&gt;\n&lt;/aura:component&gt;\n\nD.\n&lt;aura:application access=&quot;GLOBAL&quot;&gt;\n　&lt;aura:dependency resource=&quot;c:accountList&quot;/&gt;\n&lt;/aura:application&gt;",
      options: ["A. Option A", "B. Option B", "C. Option C", "D. Option D"],
      answer: "A",
      title: "Question 75",
    },
    {
      content:
        "Which three data types can a SOQL query return? Choose 3 answers",
      options: ["A. sObject", "B. Integer", "C. Long", "D. List"],
      answer: "A,B,D",
      title: "Question 76",
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
      title: "Question 77",
    },
    {
      content:
        "What is a key difference between a Master-Detail Relationship and a Lookup Relationship?",
      options: [
        "A. When a record of a master object in a Master-Detail Relationship is deleted, the detail records are kept and not deleted.",
        "B. When a record of a master object in a Lookup Relationship is deleted, the detail records are also deleted.",
        "C. A Master-Detail Relationship detail record inherits the sharing and security of its master record.",
        "D. A Lookup Relationship is a required field on an object.",
      ],
      answer: "C",
      title: "Question 78",
    },
    {
      content: "What should be used to create scratch orgs?",
      options: [
        "A. Salesforce CLI",
        "B. Workbench",
        "C. Developer Console",
        "D. Sandbox refresh",
      ],
      answer: "A",
      title: "Question 79",
    },
    {
      content:
        "A developer wants to invoke on outbound message when a record meets a specific criteria.Which three features satisfy this use case?Choose 3 answer",
      options: [
        "A. workflows can be used to check the record criteria and send an outbound message.",
        "B. Visual Workflow can be used to check the record criteria and send an outbound message without Apex Code.",
        "C. Approval Process has the capacity to check the record criteria and send an outbound message without Apex Code",
        "D. Process builder can be used to check the record criteria and send an outbound messagewithout Apex Code.",
        "E. Process builder can be used to check the record criteria and send an outbound message with Apex Code.",
      ],
      answer: "A,C,E",
      title: "Question 80",
    },
    {
      content:
        "Universal Container uses Service Cloud with a custom field, stage_c, on the Case object.Management wants to send a follow-up email reminder 6 hours after the stage_c field is set to '';Waiting on customer'' The .... Administrator wants to ensure the solution used is bulk safe.Which two automation tools should a developer recommend to meet these business requirements?Choose 2 answers",
      options: [
        "A. Einstein Next Best Action",
        "B. Record_Triggered Flow",
        "C. Process Builder",
        "D. Scheduled Flow",
      ],
      answer: "B,D",
      title: "Question 82",
    },
    {
      content:
        "How should a developer write unit tests for a private method in an Apex class?",
      options: [
        "A. Use the SeeAllData annotation.",
        "B. Mark the Apex class as global.",
        "C. Use the TestVisible annotation.",
        "D. Add a test method in the Apex class.",
      ],
      answer: "C",
      title: "Question 83",
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
      title: "Question 84",
    },
    {
      content:
        "A third-party vendor created an unmanaged Lightning web component. The Salesforce Administrator wishes to expose the component only on Record Page Layouts.Which two actions should the developer take to accomplish this business objective?Choose 2 answers",
      options: [
        "A. Specify lightningCommunity_Page_Layout as a target in the XML file.",
        "B. Ensure isExposed is set to true on the XML file.",
        "C. Specify lightningCommunity_Page as a target in the XML file.",
        "D. Specify lightning_RecordPage as a target in the XML file.",
      ],
      answer: "B,D",
      title: "Question 85",
    },
    {
      content:
        "A developer must create a lightning component that allows users to input contact record information to create a contact record, including a salary__c custom field. what should the developer use, along with a lightning-record-edit form, so that salary__c field functions as a currency input and is only viewable and editable by users that have the correct field levelpermissions on salary__C?",
      options: [
        'A. <lightning-formatted-number value="Salary__c" format-style="currency"></lightning-formatted-number>',
        'B. <ligthning-input-field field-name="Salary__c"></lightning-input-field>',
        'C. <lightning-input type="number" value="Salary__c" formatter="currency"></lightning-input>',
        'D. <lightning-input-currency value="Salary__c"></lightning-input-currency>',
      ],
      answer: "B",
      title: "Question 86",
    },
    {
      content:
        "The following code snippet is executed by a Lightning web component in an environment with more than 2,000 lead records:Which governor limit will likely be exceeded within the Apex transaction?\n@AuraEnabled\npublic void static updateLeads() {\n for(Lead thisLead:[SELECT Origin__c FROM LEAD]) {\n 　thisLead.LeadSource = thisLead.Origin;\n 　update thisLead;\n　}\n}\n",
      options: [
        "A. Total number of records processed as a result of DML statements",
        "B. Total number of DML statement issued",
        "C. Total number of SOQL queries issued",
        "D. Total number of records retrieved by SOQL queries",
      ],
      answer: "B",
      title: "Question 87",
    },
    {
      content:
        'How can a developer implement this feature?\nWhen a user edits the Postal Code on an Account, a custom Account text field named "Timezone" must be update based on the values in a PostalCodeToTimezone__c custom object.',
      options: [
        "A. Build an account approval process.",
        "B. Build an account assignment rule.",
        "C. Build a flow with Flow Builder.",
        "D. Build a workflow rule.",
      ],
      answer: "C",
      title: "Question 88",
    },
    {
      content:
        "A developer has the following requirements:Calculate the total amount on an Order.Calculate the line amount for each Line Item based on quantity selected and price.Move Line Items to a different Order if a Line Item is not stock.Which relationship implementation supports these requirements?",
      options: [
        "A. Order has a Lookup field to Line Item and there can be many Line Items per Order.",
        "B. Order has a Master-Detail field to Line Item and there can be many Line Items per Order.",
        "C. Line Item has a Lookup field to Order and there can be many Line Items per Order",
        "D. Line Items has a Master-Detail field to Order and the Master can be re-parented.",
      ],
      answer: "D",
      title: "Question 89",
    },
    {
      content:
        "A developer created a custom order management app that uses an Apex class. The order is represented by an Order object and an Orderltem object that has a master-detail relationship to Order. During order processing, an order may be split into multiple orders.What should a developer do to allow their code to move some existing Orderltem records to a new Order record?",
      options: [
        "A. Add without sharing to the Apex class declaration.",
        "B. Change the master-detail relationship to an external lookup relationship.",
        "C. Create a junction object between Orderltem and Order.",
        "D. Select the Allow reparenting option on the master-detail relationship.",
      ],
      answer: "D",
      title: "Question 90",
    },
    {
      content:
        "When importing and exporting data into Salesforce, which two statements are true?Choose 2 answers",
      options: [
        "A. Data import wizard is a client application provided by Salesforce.",
        "B. Developer and Developer Pro sandboxes have different storage limits.",
        "C. Bulk API can be used to bypass the storage limits when importing large data volumes in development environments.",
        "D. Bulk API can be used to import large data volumes in development environments without bypassing the storage limits.",
      ],
      answer: "A,B",
      title: "Question 91",
    },
    {
      content:
        "Which code in a Visualforce page and/or controller might present a security vulnerability?",
      options: [
        'A. <apex:outputText escape="false" value=" {!$CurrentPage.parameters.userInput}" />',
        'B. <apex:outputText value="{!£CurrentPage.parameters.userInput}" />',
        'C. <apex:outputField value="{!ctrl.userInput}" />',
        'D. <apex:outputField escape="false" value="{!ctrl.userInput}" />',
      ],
      answer: "A",
      title: "Question 92",
    },
    {
      content:
        "A Salesforce developer wants to review their code changes immediately and does not want to install anything on their computer or on the org.Which tool is best suited?",
      options: [
        "A. Developer Console",
        "B. Salesforce Extension for VSCode",
        "C. Third-party apps from App Exchange",
        "D. Setup Menu",
      ],
      answer: "A",
      title: "Question 93",
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
      title: "Question 94",
    },
    {
      content:
        "AW Computing tracks order information in custom objects called order__c and order_Line_ c - Currently, all shipping information is stored in the order__c object.The company wants to expand Its order application to support split shipments so that any number of order_Line__c records on a single order__c can be shipped to different locations.What should a developer add to fulfill this requirement?",
      options: [
        "A. Order_shipment_Group_c object and master-detail field to order_c and Order Line_c",
        "B. Order_shipment_Group_c object and master-detail field on order_shipment_Group_c",
        "C. Order_shipment_Group_c object and master-detail field on order_Line_c",
        "D. Order_shipment_Group_c object and master-detail field on order_c",
      ],
      answer: "A",
      title: "Question 95",
    },
    {
      content:
        "A developer created a child Lightning web component nested inside a parent Lightning web component, parent component needs to pass a string value to the child component.In which two ways can this be accomplished?Choose 2 answers",
      options: [
        "A. The parent component can invoke a method in the child component",
        "B. The parent component can use a public property to pass the data to the child component.",
        "C. The parent component can use a custom event to pass the data to the child component,",
        "D. The parent component can use the Apex controller class to send data to the child component.",
      ],
      answer: "B,C",
      title: "Question 96",
    },
    {
      content:
        "In terms of the MVC paradigm, what are two advantages of implementing the layer of a Salesforce application using Aura Component-based development over Visualforce? Choose 2 answers",
      options: [
        "A. Self-contained and reusable units of an application",
        "B. Automatic code generation",
        "C. Server-side run-time debugging",
        "D. Rich component ecosystem",
      ],
      answer: "A,D",
      title: "Question 97",
    },
    {
      content:
        "An org has an existing Flow that creates an Opportunity with an Update Records element. A developer update the Flow to also create a Contact and store the created Contact's ID on the Opportunity.Which update should the developer make in the Flow?",
      options: [
        "A. Add a new Update Records element.",
        "B. Add a new Quick Action element(of type Create).",
        "C. Add a new Get Records element.",
        "D. Add a new Create Records element.",
      ],
      answer: "D",
      title: "Question 98",
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
      title: "Question 99",
    },
    {
      content:
        "Universal Containers decides to use exclusively declarative development to build out a new Salesforce application. Which three options should be used to build out the database layer for the application? Choose 3 answers",
      options: [
        "A. Custom Objects and Fields",
        "B. Triggers",
        "C. Relationships",
        "D. Roll-Up Summaries",
        "E. Process Builder",
      ],
      answer: "A,C,D",
      title: "Question 100",
    },
    {
      content:
        "A developer must create a DrawList class that provides capabilities defined in the Sortable and Drawable interfaces. public interface Sortable { void sort(); } public interface Drawable { void draw(); } Which is the correct implementation?",
      options: [
        "A. Public class DrawList implements Sortable, Implements Drawable {public void sort() { /*implementation*/}public void draw() { /*implementation*/}]",
        "B. Public class DrawList extends Sortable, Drawable {public void sort() { /*implementation*/}public void draw() { /*implementation*/}}",
        "C. Public class DrawList implements Sortable, Drawable {public void sort() { /*implementation*/}public void draw() { /*implementation*/}}",
        "D. Public class DrawList extends Sortable, extends Sortable, extends Drawable { public void sort() { /*implementation*/ } public void draw() { /* implementation */}",
      ],
      answer: "C",
      title: "Question 101",
    },
    {
      content:
        "A developer Is asked to create a Visualforce page that lists the contacts owned by the current user. This component will be embedded In a Lightning page.Without writing unnecessary code, which controller should be used for this purpose?",
      options: [
        "A. Standard controller",
        "B. Lightning controller",
        "C. Custom controller",
        "D. Standard list controller",
      ],
      answer: "A",
      title: "Question 102",
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
      title: "Question 103",
    },
  ],
});
