window.testContent = window.testContent || [];
var testId = "Salesforce.Platform-Developer-I";
var testName = "Salesforce.Platform-Developer-I";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "Salesforce.Platform-Developer-I.v2022-03-30.q75",
  content: [
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
      title: "Question 1",
    },
    {
      content:
        "Which three statements are true regarding custom exceptions in Apex? (Choose three.)",
      options: [
        'A. A custom exception class name must end with "Exception".',
        "B. A custom exception class cannot contain member variables or methods.",
        "C. A custom exception class must extend the system Exception class.",
        "D. A custom exception class can implement one or many interfaces.",
        "E. A custom exception class can extend other classes besides the Exception class.",
      ],
      answer: "A,C,D",
      title: "Question 2",
    },
    {
      content:
        "What is the order of operations when a record is saved in Salesforce?",
      options: [
        "A. Workflow, process flows, triggers, commit",
        "B. Workflow, triggers, process flows, commit",
        "C. Triggers, workflow, process flows, commit",
        "D. Process flows, triggers, workflow, commit",
      ],
      answer: "C",
      title: "Question 3",
    },
    {
      content:
        "In the following example, which sharing context will myMethod execute when it is invoked?",
      options: [
        "A. Sharing rules will not be enforced for the running user.",
        "B. Sharing rules Ml be enforced for the running user.",
        "C. Sharing rules will be inherited from the calling context.",
        "D. Sharing rules Ail be enforced by the instantiating class",
      ],
      answer: "C",
      title: "Question 4",
    },
    {
      content: "What are two ways for a developer to execute tests in an org?",
      options: [
        "A. Tooling API",
        "B. Bulk API",
        "C. Developer console",
        "D. Matadata API",
      ],
      answer: "A,C",
      title: "Question 5",
    },
    {
      content:
        "Universal Containers wants to back up all of the data and attachments in its Salesforce org once month. Which approach should a developer use to meet this requirement?",
      options: [
        "A. Use the Data Loader command line.",
        "B. Define a Data Export scheduled job.",
        "C. Create a Schedulable Apex class.",
        "D. Schedule a report.",
      ],
      answer: "B",
      title: "Question 6",
    },
    {
      content:
        "A team of many developers work in their own individual orgs that have the same configuration at the production org. Which type of org is best suited for this scenario?",
      options: [
        "A. Developer Sandbox",
        "B. Developer Edition",
        "C. Full Sandbox",
        "D. Partner Developer Edition",
      ],
      answer: "A",
      title: "Question 7",
    },
    {
      content:
        "What is the value of the Trigger.old context variable in a Before Insert trigger?",
      options: [
        "A. An empty list of sObjects",
        "B. null",
        "C. A list of newly created sObjects without IDS",
        "D. Undefined",
      ],
      answer: "B",
      title: "Question 8",
    },
    {
      content:
        "A developer of Universal Containers is tasked with implementing a new Salesforce application that must be able to by their company's Salesforce administrator.Which three should be considered for building out the business logic layer of the application? Choose 3 answers",
      options: [
        "A. Scheduled Jobs",
        "B. Invocable Actions",
        "C. Process Builder",
        "D. Workflows",
        "E. validation Rules",
      ],
      answer: "C,D,E",
      title: "Question 9",
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
      title: "Question 10",
    },
    {
      content:
        "Refer to the following code that runs in an Execute Anonymous block:\nfor (List<Lead> theseLeads: [SELECT LastName, Company, Email FROM Lead LIMIT 20000]){\n　thisLead.Email = assignGenericEmail (thisLead. LastName, thisLead. Company);\n　for (Lead thisLead: theseLeads) {\n　　if(thisLead. Email == null) Database. Update (theseLeads, false);\n　}\n}\nIn an environment where the full result set is returned, what is a possible outcome of this code?",
      options: [
        "A. The transaction will succeed and the first ten thousand records will be committed to the database.",
        "B. The total number of DML statements issued will be exceeded.",
        "C. The transaction will succeed and the full result set changes will be committed to the database.",
        "D. TThe total number of records processed as a result of DML statements will be exceeded.",
      ],
      answer: "D",
      title: "Question 11",
    },
    {
      content: "what are the three languages used in the visualforce page?",
      options: [
        "A. Javascript, CSS, HTML",
        "B. C++, CSS, query",
        "C. Apex, Json, SQL",
      ],
      answer: "A",
      title: "Question 12",
    },
    {
      content:
        "Which aspect of Apex programming is limited due to multitenancy?",
      options: [
        "A. The number of records returned from database queries",
        "B. The number of active Apex classes",
        "C. The number of methods in an Apex Class",
        "D. The number of records processed in a loop",
      ],
      answer: "A",
      title: "Question 13",
    },
    {
      content:
        "Which two examples above use the system. debug statements to correctly display the results from the SOQL aggregate queries?\nExample 1:\nAggregateResult[] groupedResults = [SELECT CampaignId, AVG(Amount) FROM Opportunity GROUP BY CampaignId];\nfor (AggregateResult ar : groupedResults) {\n　System.debug(‘Campaign ID’ + ar.get(‘CampaignId’));\n　System.debug(‘Average amount’ + ar.get(‘expr0’)); \n}\nExample 2:\nAggregateResult[] groupedResults = [SELECT CampaignId, AVG(Amount) theAverage FROM Opportunity GROUP BY CampaignId];\nfor (AggregateResult ar : groupedResults) {\n　System.debug(‘Campaign ID’ + ar.get(‘CampaignId’));\n　System.debug(‘Average amount’ + ar.get(‘theAverage’)); \n}\nExample 3:\nAggregateResult[] groupedResults = [SELECT CampaignId, AVG(Amount) FROM Opportunity GROUP BY CampaignId];\nfor (AggregateResult ar : groupedResults) {\n　System.debug(‘Campaign ID’ + ar.get(‘CampaignId’));\n　System.debug(‘Average amount’ + ar.get.AVG()); \n}\nExample 4:\nAggregateResult[] groupedResults = [SELECT CampaignId, AVG(Amount) theAverage FROM Opportunity GROUP BY CampaignId];\nfor (AggregateResult ar : groupedResults) {\n　System.debug(‘Campaign ID’ + ar.get(‘CampaignId’));\n　System.debug (‘Average amount’ + ar.theAverage); \n}\nWhich two of the examples above have correct System.debug statements? (Choose two.)",
      options: ["A. Example 1", "B. Example 2", "C. Example 3", "D. Example 4"],
      answer: "A,B",
      title: "Question 15",
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
      title: "Question 16",
    },
    {
      content:
        "A developer must create a CreditcardPayment class that provides an implementation of an existing Payment class. Public virtual class Payment { public virtual void makePayment(Decimal amount) { /*implementation*/} } Which is the correct implementation?",
      options: [
        "A. Public class CreditCardPayment implements Payment {public virtual void makePayment(Decimal amount) { /*implementation*/ }}",
        "B. Public class CreditcardPayment extends Payment {public override void makePayment(Decimal amount) { /*implementation*/ }}",
        "C. Public class CreditCardPayment implements Payment {public override void makePayment(Decimal amount) { /*Implementation*/ }}",
        "D. Public class CreditCardPayment extends Payment {public virtual void makePayment(Decimal amount) { /*implementation*/ }}",
      ],
      answer: "B",
      title: "Question 17",
    },
    {
      content:
        "Universal Containers (UC) decided it will not to send emails to support personnel directly from Salesforce in the event that an unhandled exception occurs. Instead, UC wants an external system be notified of the error.What is the appropriate publish/subscribe logic to meet these requirements?",
      options: [
        "A. Publish the error event using the Eventbus.publish() method and have the external system subscribe to the event using CometD.",
        "B. Publish the error event using the addError() method and have the external system subscribe to the event using CometD.",
        "C. Have the external system subscribe to the BatchApexError event, no publishing is necessary.",
        "D. Publish the error event using the addError() method and write a trigger to subscribe to the event and notify the external system.",
      ],
      answer: "A",
      title: "Question 18",
    },
    {
      content:
        'A Licensed_Professional__c custom object exist in the system with two Master-Detail fields for the following objects: Certification__c and Contact. Users with the "Certification Representative" role can access the Certification records they own and view the related Licensed Professionals records, however users with the"Salesforce representative" role report they cannot view any Licensed professional records even though they own the associated Contact record. What are two likely causes of users in the "Sales Representative" role not being able to access the Licensed Professional records? Choose 2 answers',
      options: [
        "A. The organization's sharing rules for Licensed_Professional__c have not finished their recalculation process.",
        "B. The organization has a private sharing model for Certification__c, and Certification__c is the primary relationship in the Licensed_Professional__c object.",
        "C. The organization has a private sharing model for Certification__c, and Contact is the primary relationship in the Licensed_Professional__c object",
        "D. The organization recently modified the Sales representative role to restrict Read/Write access to Licensed_Professional__c",
      ],
      answer: "A,B",
      title: "Question 19",
    },
    {
      content: "Which exception type cannot be caught?",
      options: [
        "A. NoAccessException",
        "B. CalloutException",
        "C. Custom Exception",
        "D. LimitException",
      ],
      answer: "D",
      title: "Question 20",
    },
    {
      content: "Which two characteristics are true for Aura component events?",
      options: [
        "A. Only parent components that create subcomponents (either in their markup or programmatically) can handle events.",
        "B. Calling event, stopPropagation ( ) may or may not stop the event propagation based of the current propagation phase.",
        "C. The event propagates to every owner In the containment hierarchy.",
        "D. If a container component needs to handle a component event, add a handleFacets='' attribute to Its handler.",
      ],
      answer: "B,C",
      title: "Question 21",
    },
    {
      content:
        "Universal Containers (UC) uses a custom object called Vendor. The Vendor custom object has a Master-Detail relationship with the standard Account object. Based on some internal discussion, the UC administrator tried to change the Master-Detail relationship to a Lookup relationship but was not able to do so. What is a possible reason that this change was not permitted?",
      options: [
        "A. The Account object is included on a workflow on the Vendor object.",
        "B. The Vendor object must use a Master-Detail field for reporting.",
        "C. The Vendor records have existing values in the Account object.",
        "D. The Account records contain Vendor roll-up summary fields.",
      ],
      answer: "D",
      title: "Question 22",
    },
    {
      content:
        "A custom object Trainer_c has a lookup field to another custom object Gym___c.Which SOQL query will get the record for the Viridian City gym and it's trainers?",
      options: [
        "A. SELECT ID FROM Trainer_c WHERE Gym__r.Name - Viridian City Gym'",
        "B. SELECT Id, (SELECT Id FROM Trainers) FROM Gym_C WHERE Name . Viridian City Gym'",
        "C. SELECT Id, (SELECT Id FROM Trainers) FROM Gym_C WHERE Name - Viridian City Gym'",
        "D. SELECT Id, (SELECT Id FROM Trainer_c) FROM Gym_c WHERE Name - Viridian City Gym'",
      ],
      answer: "B",
      title: "Question 23",
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
      title: "Question 24",
    },
    {
      content:
        "Which Apex class contains methods to return the amount of resources that have been used for a particular governor, such as the number of DML statements?",
      options: ["A. Limits", "B. Exception", "C. OrgLimits", "D. Messaging"],
      answer: "A",
      title: "Question 25",
    },
    {
      content:
        "A custom picklist field, Food_Preference__c, exist on a custom object. The picklist contains the following options: 'Vegan','Kosher','No Preference'. The developer must ensure a value is populated every time a record is created or updated. What is the most efficient way to ensure a value is selected every time a record is saved?",
      options: [
        "A. Set a validation rule to enforce a value is selected.",
        "B. Mark the field as Required on the field definition.",
        'C. Set "Use the first value in the list as the default value" as True.',
        "D. Mark the field as Required on the object's page layout.",
      ],
      answer: "B",
      title: "Question 26",
    },
    {
      content:
        "What is the maximum number of SOQL queries used by the following code? List<Account> aList = [SELECT Id FROM Account LIMIT 5]; for (Account a : aList){ List<Contact> cList = [SELECT Id FROM Contact WHERE AccountId = :a.Id); }",
      options: ["A. 6", "B. 5", "C. 1", "D. 2"],
      answer: "A",
      title: "Question 27",
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
      title: "Question 28",
    },
    {
      content:
        "A developer needs to have records with specific field values in order to test a new Apex class.What should the developer do to ensure the data is available to the test?",
      options: [
        "A. Use Test.Loaddata () and reference a static resource.",
        "B. Use SOQL to query the org for the required data.",
        "C. Use Anonymous Apex to create the required data.",
        "D. Use Test.Loaddata () and reference a CSV file",
      ],
      answer: "A",
      title: "Question 29",
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
      title: "Question 30",
    },
    {
      content:
        "A workflow updates the value of a custom field for an existing Account.How can a developer access the updated custom field value from a trigger?",
      options: [
        "A. By writing an After Update trigger and accessing the field value from Trigger.old",
        "B. By writing an After Insert trigger and accessing the field value from Trigger.old",
        "C. By writing, a Before Update trigger and accessing the field value from Trigger.new",
        "D. By writing a Before Insert trigger and accessing the field value from Trigger.new",
      ],
      answer: "C",
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
        "A developer is creating a test coverage for a class and needs to insert records to validate functionality. Which method annotation should be used to create records for every method in the test class?",
      options: [
        "A. @isTest(SeeAllData=True)",
        "B. @PreTest",
        "C. @BeforeTest",
        "D. @TestSetup",
      ],
      answer: "D",
      title: "Question 33",
    },
    {
      content:
        "What will be the output in the debug log in the event of a QueryExeption during a call to the @query method in the following Example?",
      options: [
        "A. Querying Accounts. Query Exception. Done",
        "B. Querying Accounts. Custom Exception.",
        "C. Querying Accounts. Query Exception.",
        "D. Querying Accounts. Custom Exception Done.",
      ],
      answer: "A",
      title: "Question 34",
    },
    {
      content:
        "What are three considerations when using the @InvocableMethod annotation in Apex? Choose 3 answers",
      options: [
        "A. A method using the @InvocableMethod annotation can have multiple input parameters.",
        "B. Only one method using the @InvocableMethod annotqation can be defined per Apex class.",
        "C. A method using the @InvocableMethod annotation can be declared as Public or Global.",
        "D. A method using the @InvocableMethod annotation must define a return value.",
        "E. A method using the @InvocableMethod annotation must be declared as static",
      ],
      answer: "B,C,E",
      title: "Question 35",
    },
    {
      content:
        "How many accounts will be inserted by the following block ofcode? for(Integer i = 0 ; i < 500; i++) { Account a = new Account(Name='New Account ' + i); insert a; }",
      options: ["A. 100", "B. 0", "C. 500", "D. 150"],
      answer: "B",
      title: "Question 36",
    },
    {
      content:
        "A custom Visualforce controller calls the ApexPages,addMessage () method, but no messages are rendering on the page.Which component should be added to the Visualforce page to display the message?",
      options: [
        "A. <apex: pageMessage severity=\"info''/>",
        "B. <apex: pageMessages />",
        "C. <Apex: message for='' info''/>",
        "D. <Apex: facet name='' message''/>",
      ],
      answer: "B",
      title: "Question 37",
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
      title: "Question 38",
    },
    {
      content:
        'A developer has a requirement to create an Order When an Opportunity reaches a "Closed-Won" status.Which tool should be used to implement this requirement?',
      options: [
        "A. Process Builder",
        "B. Lightning Component",
        "C. Lightning",
        "D. Apex trigger",
      ],
      answer: "A",
      title: "Question 39",
    },
    {
      content:
        "Universal Containers has an order system that uses an Order Number to identify an order for customers and service agents. Order will be imported into Salesforce.",
      options: [
        "A. Number with External ID",
        "B. Indirect Lookup",
        "C. Lookup",
        "D. Direct Lookup",
      ],
      answer: "A",
      title: "Question 40",
    },
    {
      content:
        "Which action causes a before trigger to fire by default for Accounts?",
      options: [
        "A. Updating addresses using the Mass Address update tool",
        "B. Importing data using the Data Loader and the Bulk API",
        "C. Renaming or replacing picklist",
        "D. Converting Leads to Contact accounts",
      ],
      answer: "B",
      title: "Question 41",
    },
    {
      content:
        "A developer needs an Apex method that can process Account or Contact records. Which method signature should the developer use?",
      options: [
        "A. Public void doWork(sObject theRecord)",
        "B. Public void doWork(Account Contact)",
        "C. Public void doWork(Record theRecord)",
        "D. Public void doWork(Account || Contatc)",
      ],
      answer: "A",
      title: "Question 42",
    },
    {
      content:
        "Which Salesforce feature allows a developer to see when a user last logged in to Salesforce if real-time notification is not required?",
      options: [
        "A. Event Monitoring Log",
        "B. Developer Log",
        "C. Calendar Events",
        "D. Asynchronous Data Capture Events",
      ],
      answer: "A",
      title: "Question 43",
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
      title: "Question 44",
    },
    {
      content:
        "Which Lightning code segment should be written to declare dependencies on a Lightning component, c:accountList, that is used in a Visualforce page?\nA.\n&lt;aura:application access=&quot;GLOBAL&quot; extends=&quot;ltng:outApp&quot;&gt;\n　&lt;aura:dependency resource=&quot;c:accountList&quot;/&gt;\n&lt;/aura:application&gt;\n\nB.\n&lt;aura:component access=&quot;GLOBAL&quot; extends=&quot;ltng:outApp&quot;&gt;\n　&lt;aura:dependency resource=&quot;c:accountList&quot;/&gt;\n&lt;/aura:component&gt;\n\nC.\n&lt;aura:component access=&quot;GLOBAL&quot;&gt;\n　&lt;aura:dependency resource=&quot;c:accountList&quot;/&gt;\n&lt;/aura:component&gt;\n\nD.\n&lt;aura:application access=&quot;GLOBAL&quot;&gt;\n　&lt;aura:dependency resource=&quot;c:accountList&quot;/&gt;\n&lt;/aura:application&gt;",
      options: ["A. Option A", "B. Option B", "C. Option C", "D. Option D"],
      answer: "A",
      title: "Question 45",
    },
    {
      content:
        "What are two ways a developer can get the status of an enquered job for a class that queueable interface? Choose 2 answers",
      options: [
        "A. Query the AsyncApexJob object",
        "B. View the apex flex Queue",
        "C. View the apex Jobs page",
        "D. View the apex status Page",
      ],
      answer: "A,C",
      title: "Question 46",
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
      title: "Question 47",
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
      title: "Question 48",
    },
    {
      content:
        "Universal Containers recently transitioned from Classic to Lighting Experience. One of its business processes requires certain value from the opportunity object to be sent via HTTP REST callout to its external order management system based on a user-initiated action on the opportunity page. Example values are as follow* Name* Amount* AccountWhich two methods should the developer implement to fulfill the business requirement? (Choose 2 answers)",
      options: [
        "A. Create an after update trigger on the Opportunity object that calls a helper method using@Future(Callout=true) to perform the HTTP REST callout.",
        "B. Create a Lightning component that performs the HTTP REST callout, and use a Lightning Action to expose the component on the Opportunity detail page.",
        "C. Create a Process Builder on the Opportunity object that executes an Apex immediate action to perform the HTTP REST callout whenever the Opportunity is updated.",
        "D. Create a Visualforce page that performs the HTTP REST callout, and use a Visualforce quick action to expose the component on the Opportunity detail page.",
      ],
      answer: "A,B",
      title: "Question 49",
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
      title: "Question 50",
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
      title: "Question 51",
    },
    {
      content: "Which code displays the content of Visualforce page as PDF?",
      options: [
        "A. <apex:page readerAs= ''application/pdf''>",
        "B. <apex:page contentype '' application/pdf'')",
        "C. <apex:page readeras'' application/pdf''>",
        'D. <apex:page renderAs="pdf">',
      ],
      answer: "D",
      title: "Question 52",
    },
    {
      content:
        "A development team wants to use a deployment script lo automatically deploy lo a sandbox during their development cycles.Which two tools can they use to run a script that deploys to a sandbox? Choose 2 answers",
      options: [
        "A. SFDX CLI",
        "B. Developer Console",
        "C. Change Sets",
        "D. Ant Migration Tool",
      ],
      answer: "A,D",
      title: "Question 53",
    },
    {
      content:
        "Which annotation exposes an Apex class as a RESTful web service?",
      options: [
        "A. @Remote Action",
        "B. @RestResource",
        "C. @Httplnvocable",
        "D. @AuraEnabled",
      ],
      answer: "B",
      title: "Question 54",
    },
    {
      content:
        "An Apex method, getAccounts, that returns a List of Accounts given a searchTerm, is available for Lightning Web components to use. What is the correct definition of a Lightning Web component property that uses the getAccounts method?",
      options: [
        "A. @wire(getAccounts, {searchTerm: '$searchTerm'})\naccountList;",
        "B. @AuraEnabled(getAccounts,'$searchTerm')\naccountList;",
        "C. @AuraEnabled(getAccounts, {searchTerm:'$searchTerm'})\naccountList;",
        "D. @wire(getAccounts, '$searchTerm')\naccountList;",
      ],
      answer: "A",
      title: "Question 55",
    },
    {
      content:
        "When a user edits the Postal Code on an Account, a custom Account text field named ''Timezone'' must be updated based on the values in a postalCodeToTimezone_c custom object.What should be built to implement this feature?",
      options: [
        "A. Account assignment rule",
        "B. Account workflow rule",
        "C. Account approval process",
        "D. Account custom trigger",
      ],
      answer: "D",
      title: "Question 56",
    },
    {
      content:
        "The Job_Application__c custom object has a field that is a Master-Detail relationship to the Contact object, where the Contact object is the Master. As part of a feature implementation, a developer needs to retrieve a list containing all Contact records where the related Account Industry is 'Technology' while also retrieving the contact's Job_Application__c records.Based on the object's relationships, what is the most efficient statement to retrieve the list of contacts?",
      options: [
        "A. [SELECT Id, (SELECT Id FROM Job_Application_c) FROM Contact WHEREAccount.Industry = 'Technology'];",
        "B. [SELECT Id, (SELECT Id FROM Job_Applications_r) FROM Contact WHEREAccount.Industry = 'Technology'];",
        "C. [SELECT Id, (SELECT Id FROM Job_Applications_c) FROM Contact WHEREAccounts.Industry = 'Technology'];",
        "D. [SELECT Id, (SELECT Id FROM Job_Applications_r) FROM Contact WHEREAccounts.Industry = 'Technology'];",
      ],
      answer: "B",
      title: "Question 57",
    },
    {
      content:
        "Which two characteristics are true for Aura component events? Choose 2 answers",
      options: [
        'A. If a container component needs to handle a component event, add a includeFacets" true" attribute to its handler.',
        "B. Depending on the current propagation phase, calling event. Stoppropagation () may not stop the event propagation.",
        "C. The event propagates to every owner in the containment hierarchy.",
        "D. By default, containers can handle events thrown by components they contain.",
      ],
      answer: "B,C",
      title: "Question 58",
    },
    {
      content:
        "A developer must create a DrawList class that provides capabilities defined in the Sortable and Drawable interfaces. public interface Sortable { void sort(); } public interface Drawable { void draw(); } Which is the correct implementation?",
      options: [
        "A. Public class DrawList implements Sortable, Implements Drawable {public void sort() { /*implementation*/}public void draw() { /*implementation*/}]",
        "B. Public class DrawList extends Sortable, Drawable {public void sort() { /*implementation*/}public void draw() { /*implementation*/}}",
        "C. Public class DrawList extends Sortable, extends Sortable, extends Drawable { public void sort() { /*implementation*/ } public void draw() { /* implementation */}",
        "D. Public class DrawList implements Sortable, Drawable {public void sort() { /*implementation*/}public void draw() { /*implementation*/}}",
      ],
      answer: "D",
      title: "Question 59",
    },
    {
      content:
        "A developer needs to create a custom button for the Account object that, when clicked, will perform a series of calculation and redirect the user to a custom visualforce page.Which three attributes need to be defined with values in the <apex:page> tag to accomplish this? Choose 3 answers",
      options: [
        "A. extensions",
        "B. Action",
        "C. readOnly",
        "D. standard Controller",
        "E. renderAs",
      ],
      answer: "A,B,D",
      title: "Question 60",
    },
    {
      content:
        "Which two statements are accurate regarding Apex classes and interfaces? Choose 2 answers",
      options: [
        "A. Interface methods are public by default.",
        "B. A top-level class can only have one inner class level.",
        "C. Inner classes are public by default.",
        "D. Classes are final by default.",
      ],
      answer: "A,B",
      title: "Question 61",
    },
    {
      content:
        'A developer creates a new Apex trigger with a helper class, and writes a test class that only exercises 95% coverage of new Apex helper class. Change Set deployment to production fails with the test coverage warning:"Test coverage of selected Apex Trigger is 0%, at least 1% test coverage is required" What should the developer do to successfully deploy the new Apex trigger and helper class?',
      options: [
        "A. Create a test class and methods to cover the Apex trigger",
        "B. Remove the falling test methods from the test class.",
        "C. Run the tests using the 'Run All Tests' method.",
        "D. Increase the test class coverage on the helper class",
      ],
      answer: "A",
      title: "Question 62",
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
      title: "Question 63",
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
      title: "Question 64",
    },
    {
      content:
        'A developer uses a loop to check each Contact in a list. When a Contact with the Title of"Boss" is found, the Apex method should jump to the first line of code outside of the for loop.Which Apex solution will let the developer implement this requirement?',
      options: ["A. Exit", "B. break;", "C. Continue", "D. Next"],
      answer: "B",
      title: "Question 65",
    },
    {
      content:
        "A developer has a Apex controller for a Visualforce page that takes an ID as a URL parameter. How should the developer prevent a cross site scripting vulnerability?",
      options: [
        "A. String.ValueOf(ApexPages.currentPage() .getParameters() .get('url_param'))",
        "B. String.escapeSingleQuotes(ApexPages.currentPage() .getParameters(). get('url_param'))",
        "C. ApexPages.currentPage() .getParameters() .get('url_param')",
        "D. ApexPages.currentPage() .getParameters() .get('url_param') .escapeHtml4()",
      ],
      answer: "B",
      title: "Question 66",
    },
    {
      content:
        "What are three characteristics of change set deployments? Choose 3 answers",
      options: [
        "A. Change sets can only be used between related organizations.",
        "B. Sending a change set between two orgs requires a deployment connection.",
        "C. Deployment is done in a one-way, single transaction.",
        "D. Change sets can be used to transfer records.",
        "E. Change sets can deploy custom settings data.",
      ],
      answer: "A,C,D",
      title: "Question 67",
    },
    {
      content:
        "Which salesforce org has a complete duplicate copy of the production org including data and configuration?",
      options: [
        "A. Partial Copy Sandbox",
        "B. Production",
        "C. Developer Pro Sandbox",
        "D. Full Sandbox",
      ],
      answer: "D",
      title: "Question 68",
    },
    {
      content:
        "Which three web technologies can be integrated into a Visualforce page? (Choose three.)",
      options: ["A. PHP", "B. Java", "C. CSS", "D. HTML", "E. JavaScript"],
      answer: "C,D,E",
      title: "Question 69",
    },
    {
      content:
        "Which three resources in an Azure Component can contain JavaScript functions?",
      options: [
        "A. Style",
        "B. helper",
        "C. Renderer",
        "D. Controllers",
        "E. Design",
      ],
      answer: "B,C,D",
      title: "Question 70",
    },
    {
      content:
        "How should a developer write unit tests for a private method in an Apex class?",
      options: [
        "A. Mark the Apex class as global.",
        "B. Use the SeeAllData annotation.",
        "C. Use the TestVisible annotation.",
        "D. Add a test method in the Apex class.",
      ],
      answer: "C",
      title: "Question 71",
    },
    {
      content:
        "A developer has the following requirements:Calculate the total amount on an Order.Calculate the line amount for each Line Item based on quantity selected and price.Move Line Items to a different Order if a Line Item is not stock.Which relationship implementation supports these requirements?",
      options: [
        "A. Order has a Master-Detail field to Line Item and there can be many Line Items per Order.",
        "B. Line Items has a Master-Detail field to Order and the Master can be re-parented.",
        "C. Order has a Lookup field to Line Item and there can be many Line Items per Order.",
        "D. Line Item has a Lookup field to Order and there can be many Line Items per Order",
      ],
      answer: "B",
      title: "Question 72",
    },
    {
      content:
        "Which two statements true about Getter and Setter methods as they relate to Visualforce? Choose 2 answers",
      options: [
        "A. Getter methods can pass a value from a controller to a page.",
        "B. There is no guarantee for the order in which Getter or Setter methods are executed.",
        "C. Setter methods can pass a value from a controller to a page.",
        "D. Setter methods always have to be declared global.",
      ],
      answer: "A,B",
      title: "Question 73",
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
      title: "Question 74",
    },
    {
      content:
        "Which process automation should be used to send an outbound message without using Apex code?",
      options: [
        "A. Flow Builder",
        "B. Workflow Rule",
        "C. Approval Process",
        "D. Process Builder",
      ],
      answer: "B",
      title: "Question 75",
    },
  ],
});
