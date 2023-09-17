window.testContent = window.testContent || [];
var testId = "PlatformDeveloper1";
var testName = "PlatformDeveloper1.PDI";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "PlatformDeveloper1.PDI.v2021-06-08.q54",
  content: [
    {
      content:
        "Which three statements are true regarding custom exceptions in Apex? (Choose three.)",
      options: [
        "A. A custom exception class can implement one or many interfaces.",
        "B. A custom exception class cannot contain member variables or methods.",
        "C. A custom exception class must extend the system Exception class.",
        "D. A custom exception class can extend other classes besides the Exception class.",
        'E. A custom exception class name must end with "Exception".',
      ],
      answer: "A,C,E",
      title: "Question 1",
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
      title: "Question 2",
    },
    {
      content:
        "A developer writes a trigger on the Account object on the before update event that increments a count field. A workflow rule also increments the count field every time that an Account is created or update. The field update in the workflow rule is configured to not re-evaluate workflow rules. What is the value of the count field if an Account is inserted with an initial value of zero, assuming no other automation logic is implemented on the Account?",
      options: ["A. 4", "B. 3", "C. 1", "D. 2"],
      answer: "D",
      title: "Question 3",
    },
    {
      content:
        "A custom picklist field, Food_Preference__c, exist on a custom object. The picklist contains the following options: 'Vegan','Kosher','No Preference'. The developer must ensure a value is populated every time a record is created or updated. What is the most efficient way to ensure a value is selected every time a record is saved?",
      options: [
        'A. Set "Use the first value in the list as the default value" as True.',
        "B. Mark the field as Required on the field definition.",
        "C. Mark the field as Required on the object's page layout.",
        "D. Set a validation rule to enforce a value is selected.",
      ],
      answer: "C",
      title: "Question 4",
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
      title: "Question 5",
    },
    {
      content:
        'What should a developer use to obtain the Id and Name of all the Leads. Accounts, and Contacts that hove the company name "Universal Containers"?',
      options: [
        "A. FIND Universal Containers' IN CompanyName Fietds RETURNING lead{ld. name), accounted, name), contacted, name)",
        "B. FIND 'Universal Containers' IN Name Fields RETURNING leadjid, name), accounted, name), contacted, name)",
        "C. SELECT lead(id, name). accountOd, name), contacted, name) FROM Lead, Account, Contact WHERE Name = \"universal Containers'",
        "D. SELECT Lead.id. Lead.Name, Account.Id, AccountName, Contacted, Contact.Name FROM Lead, Account, Contact WHERE CompanvName * Universal Containers'",
      ],
      answer: "B",
      title: "Question 6",
    },
    {
      content:
        "A developer must write an Apex method that will be called from a Lightning component. The method may delete an Account stored in the accountRec variable.Which method should a developer use to ensure only users that should be able to delete Accounts can successfully perform deletions?",
      options: [
        "A. accountRec.isDeletable()",
        "B. accountRec.sObjectType.isDeletable()",
        "C. Schema.sObjectType.Account.isDeletable()",
        "D. Account.isDeletable()",
      ],
      answer: "C",
      title: "Question 7",
    },
    {
      content:
        "What are two characteristics related to formulas? Choose 2 answers.",
      options: [
        "A. Fields that are used in a formula field can be deleted or edited without the formula.",
        "B. Formulas are calculated at runtime and are not stored in the database.",
        "C. Formulas can reference values in related objects.",
        "D. Formula can reference themselves.",
      ],
      answer: "B,C",
      title: "Question 8",
    },
    {
      content:
        "Universal Containers decides to use exclusively declarative development to build out a new Salesforce application. Which three options should be used to build out the database layer for the application? Choose 3 answers",
      options: [
        "A. Relationships",
        "B. Custom Objects and Fields",
        "C. Process Builder",
        "D. Roll-Up Summaries",
        "E. Triggers",
      ],
      answer: "A,B,D",
      title: "Question 9",
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
      title: "Question 10",
    },
    {
      content:
        "A developer of Universal Containers is tasked with implementing a new Salesforce application that must be able to by their company's Salesforce administrator.Which three should be considered for building out the business logic layer of the application? Choose 3 answers",
      options: [
        "A. Scheduled Jobs",
        "B. Invocable Actions",
        "C. validation Rules",
        "D. Process Builder",
        "E. Workflows",
      ],
      answer: "C,D,E",
      title: "Question 11",
    },
    {
      content:
        "A developer considers the following snippet of code:Based on this code, what is the value of x?",
      options: ["A. 3", "B. 2", "C. 4", "D. 1"],
      answer: "C",
      title: "Question 12",
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
      title: "Question 13",
    },
    {
      content:
        "If apex code executes inside the execute() method of an Apex class when implementing the Batchable interface, which statement are true regarding governor limits? Choose 2 answers",
      options: [
        "A. The Apex governor limits might be higher due to the asynchronous nature of the transaction.",
        "B. The Apex governor limits are relaxed while calling the costructor of the Apex class.",
        "C. The Apex governor limits cannot be exceeded due to the asynchronous nature of the transaction,",
        "D. The apex governor limits are reset for each iteration of the execute() mrthod.",
      ],
      answer: "A,D",
      title: "Question 14",
    },
    {
      content:
        "A Lightning component has a wired property, searchResults, that stores a list of Opportunities. Which definition of the Apex method, to which the searchResults property is wired, should be used?",
      options: [
        "A. @AuraEnabled(cacheable=false)public static List<Opportunity> search(String term) { /*implementation*/ }",
        "B. @AuraEnabled(cacheable=true)public static List<Opportunity> search(String term) { /* implementation*/ }",
        "C. @AuraEnabled(cacheable=true)public List<Opportunity> search(String term) { /*implementation*/ }",
        "D. @AuraEnabled(cacheable=false)public List<Opportunity> search(String term) { /*implementation*/ }",
      ],
      answer: "B",
      title: "Question 15",
    },
    {
      content:
        "A developer writes a trigger on the Account object on the before update event that increments a count field. A workflow rule also increments the count field every time that an Account is created or updated. The field update in the workflow rule is configured to not re-evaluate workflow rules.What is the value of the count field if an Account is inserted with an initial value of zero, assuming no other automation logic is implemented on the Account?",
      options: ["A. 4", "B. 3", "C. 1", "D. 2"],
      answer: "D",
      title: "Question 16",
    },
    {
      content:
        "Which statement generates a list of Leads and Contacts that have a field with the phrase 'ACME'?",
      options: [
        'A. List<List <sObject>> searchList = (FIND "*ACME*" IN ALL FIELDS RETURNING Contact, Lead);',
        "B. List<List < sObject>> searchList = (SELECT Name, ID FROM Contact, Lead WHERE Name like'%ACME%');",
        'C. Map <sObject> searchList = (FIND "*ACME*" IN ALL FIELDS RETURNING Contact, Lead);',
        'D. List <sObject> searchList = (FIND "*ACME*" IN ALL FIELDS RETURNING Contact, Lead);',
      ],
      answer: "A",
      title: "Question 17",
    },
    {
      content:
        "What is a key difference between a Master-Detail Relationship and a Lookup Relationship?",
      options: [
        "A. When a record of a master object in a Master-Detail Relationship is deleted, the detail records are kept and not deleted.",
        "B. When a record of a master object in a Lookup Relationship is deleted, the detail records are also deleted.",
        "C. A Lookup Relationship is a required field on an object.",
        "D. A Master-Detail Relationship detail record inherits the sharing and security of its master record.",
      ],
      answer: "D",
      title: "Question 18",
    },
    {
      content:
        "Which two are best practices when it comes to component and application event handling? (Choose two.)",
      options: [
        "A. Handle low-level events in the event handler and re-fire them as higher-level events.",
        "B. Try to use application events as opposed to component events.",
        "C. Use component events to communicate actions that should be handled at the application level.",
        "D. Reuse the event logic in a component bundle, by putting the logic in the helper.",
      ],
      answer: "A,D",
      title: "Question 19",
    },
    {
      content: "What are two ways for a developer to execute tests in an org?",
      options: [
        "A. Developer console",
        "B. Tooling API",
        "C. Matadata API",
        "D. Bulk API",
      ],
      answer: "A,B",
      title: "Question 20",
    },
    {
      content:
        "Application Events follow the traditional publish-subscribe model. Which method is used to fire an event?",
      options: [
        "A. Fire()",
        "B. Emit()",
        "C. FireEvent()",
        "D. RegisterEvent()",
      ],
      answer: "A",
      title: "Question 21",
    },
    {
      content: "Which action may cause triggers to fire?",
      options: [
        "A. Cascading delete operations",
        "B. Renaming or replacing a picklist entry",
        "C. Updates to Feed Items",
        "D. Changing a user's default division when the transfer division option it checked",
      ],
      answer: "C",
      title: "Question 22",
    },
    {
      content:
        "A Visual Flow uses an apex Action to provide additional information about multiple Contacts, stored in a custom class, contactInfo. Which is the correct definition of the Apex method that gets additional information?",
      options: [
        "A. @InvocableMethod(Label='additional Info')public ContactInfo(Id contactId){ /*implementation*/ }",
        "B. @InvocableMethod(label='Additional Info')public List<ContactInfo> getInfo(List<Id> contactIds){ /*implementation*/ }",
        "C. @invocableMethod(label)='Additional Info')public static List<ContactInfo> getInfo(List<Id> contactIds){ /*Implementation*/ }",
        "D. @InvocableMethod(label='additional Info')public static ContactInfo getInfo(Id contactId){ /*implementation*/ }",
      ],
      answer: "C",
      title: "Question 23",
    },
    {
      content:
        "What does the Lightning Component framework provide to developers?",
      options: [
        "A. Extended governor limits for applications",
        "B. Prebuilt component that can be reused.",
        "C. Support for Classic and Lightning UIS.",
        "D. Templates to create custom components.",
      ],
      answer: "B",
      title: "Question 24",
    },
    {
      content:
        "Cloud Kicks Fitness, an ISV Salesforce partner, is developing a managed package application. One of the application modules allows the user to calculate body fat using the Apex class, BodyFat, and its method, calculateBodyFat(). The product owner wants to ensure this method is accessible by the consumer of the application when developing customizations outside the ISV's package namespace.Which approach should a developer take to ensure calculateBodyFat() is accessible outside the package namespace?",
      options: [
        "A. Declare the class as global and use the public access modifier on the method.",
        "B. Declare the class and method using the public access modifier.",
        "C. Declare the class as public and use the global access modifier on the method.",
        "D. Declare the class and method using the global access modifier.",
      ],
      answer: "D",
      title: "Question 25",
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
      title: "Question 26",
    },
    {
      content:
        'The following Apex method is part of the ContactService class that is called from a trigger: public static void setBusinessUnitToEMEA(Contact thisContact){ thisContact.Business_Unit__c = "EMEA" ; update thisContact; } How should the developer modify the code to ensure best practice are met?',
      options: [
        "A. Public static void setBusinessUnitToEMEA(List<Contact> contacts){for(Contact thisContact : contacts){thisContact.Business_Unit__c = 'EMEA' ;update contacts[0];}}",
        "B. Public static void setBusinessUnitToEMEA(Contact thisContact){List<Contact> contacts = new List<Contact>();contacts.add(thisContact.Business_Unit__c = 'EMEA');update contacts;}",
        "C. Public static void setBusinessUnitToEMEA(List<Contact> contacts){for(Contact thisContact : contacts) {thisContact.Business_Unit__c = 'EMEA' ;}update contacts;}",
        "D. Public void setBusinessUnitToEMEA(List<Contact> contatcs){contacts[0].Business_Unit__c = 'EMEA' ;update contacts[0];}",
      ],
      answer: "B",
      title: "Question 27",
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
      title: "Question 28",
    },
    {
      content:
        "Universal Containers recently transitioned from Classic to Lighting Experience. One of its business processes requires certain value from the opportunity object to be sent via HTTP REST callout to its external order management system based on a user-initiated action on the opportunity page. Example values are as follow* Name* Amount* AccountWhich two methods should the developer implement to fulfill the business requirement? (Choose 2 answers)",
      options: [
        "A. Create a Process Builder on the Opportunity object that executes an Apex immediate action to perform the HTTP REST callout whenever the Opportunity is updated.",
        "B. Create an after update trigger on the Opportunity object that calls a helper method using@Future(Callout=true) to perform the HTTP REST callout.",
        "C. Create a Visualforce page that performs the HTTP REST callout, and use a Visualforce quick action to expose the component on the Opportunity detail page.",
        "D. Create a Lightning component that performs the HTTP REST callout, and use a Lightning Action to expose the component on the Opportunity detail page.",
      ],
      answer: "B,D",
      title: "Question 29",
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
      title: "Question 30",
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
      title: "Question 31",
    },
    {
      content:
        "A developer needs an Apex method that can process Account or Contact records. Which method signature should the developer use?",
      options: [
        "A. Public void doWork(sObject theRecord)",
        "B. Public void doWork(Record theRecord)",
        "C. Public void doWork(Account || Contatc)",
        "D. Public void doWork(Account Contact)",
      ],
      answer: "A",
      title: "Question 32",
    },
    {
      content:
        "Which three operations affect the number of times a trigger can fire?Choose 3 answers",
      options: [
        "A. Email messages",
        "B. Process Flows",
        "C. Criteria-based Sharing calculations",
        "D. Roll-Up Summary fields",
        "E. Workflow Rules",
      ],
      answer: "B,D,E",
      title: "Question 33",
    },
    {
      content: "Which exception type cannot be caught ?",
      options: [
        "A. LimitException",
        "B. NoAccessException",
        "C. A custom Exception",
        "D. CalloutException",
      ],
      answer: "A",
      title: "Question 34",
    },
    {
      content:
        "A developer must provide a custom user interface when users edit a Contact. Users must be able to use the interface in Salesforce Classic and Lightning Experience.What should the developer do to provide the custom user interface?",
      options: [
        "A. Override the Contact's Edit button with a Lightning component in Salesforce Classic and a Lightning component in Lightning Experience.",
        "B. Override the Contact's Edit button with a Visualforce page in Salesforce Classic and a Lightning component in Lightning Experience.",
        "C. Override the Contact's Edit button with a Visualforce page in Salesforce Classic and a Lightning page inLightning Experience.",
        "D. Override the Contact's Edit button with a Lightning page in Salesforce Classic and a Visualforce page in Lightning Experience.",
      ],
      answer: "B",
      title: "Question 35",
    },
    {
      content:
        "A developer observes that an Apex test method fails in the Sandbox. To identify the issue, the developer copies the code inside the test method and executes it via the Execute Anonymous tool in the Developer Console. The code then executes with no exceptions or errors. Why did the test method fail in the sandbox and pass in the Developer Console?",
      options: [
        "A. The test method is calling an @future method.",
        "B. The test method relies on existing data in the sandbox.",
        "C. The test method has a syntax error in the code.",
        "D. The test method does not use System.runAs to execute as a specific user.",
      ],
      answer: "B",
      title: "Question 36",
    },
    {
      content:
        "A developer has an integer variable called maxAttempts. The developer meeds to ensure that once maxAttempts is initialized, it preserves its value for the lenght of the Apex transaction; while being able to share the variable's state between trigger executions. How should the developer declare maxAttempts to meet these requirements?",
      options: [
        "A. Declare max attempts as a member variable on the trigger definition.",
        "B. Declare max attempts as a variable on a helper class",
        "C. Declare max attempts as a constant using the static and final keywords",
        "D. Declare max attempts as a private static variable on a helper class",
      ],
      answer: "D",
      title: "Question 37",
    },
    {
      content:
        "Which two events need to happen when deploying to a production org? Choose 2 answers",
      options: [
        "A. All triggers must have at least 75% test coverage.",
        "B. All triggers must have at least 1% test coverage.",
        "C. All Apex code must have at least 75% test coverage.",
        "D. All test and triggers must have at least 75% test coverage combined",
      ],
      answer: "B,C",
      title: "Question 38",
    },
    {
      content:
        "which statement is true regarding execution order when triggers are associated to the same object and event?",
      options: [
        "A. Trigger execution order cannot be guaranteed.",
        "B. Triggers are executed alphabetically by trigger name.",
        "C. executed In the order they are modified.",
        "D. Triggers are executed in the order they are created.",
      ],
      answer: "A",
      title: "Question 39",
    },
    {
      content:
        "Which standard field is required when creating a new contact record?",
      options: ["A. Name", "B. AccountId", "C. FirstName", "D. LastName"],
      answer: "D",
      title: "Question 40",
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
      title: "Question 41",
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
      title: "Question 42",
    },
    {
      content:
        "How can a developer check the test coverage of active Process Builder and Flows deploying them in a Changing Set?",
      options: [
        "A. Use the Flow properties page.",
        "B. Use the code Coverage Setup page",
        "C. Use SOQL and the Tooling API",
        "D. Use the Apex testresult class",
      ],
      answer: "C",
      title: "Question 43",
    },
    {
      content:
        "Universal Containers has large number of custom applications that were built using a third-party javaScript framework and exposed using Visualforce pages. The Company wants to update these applications to apply styling that resembles the look and feel of Lightning Experience. What should the developer do to fulfill the business request in the quickest and most effective manner?",
      options: [
        "A. Set the attribute enableLightning to true in the definition.",
        "B. Incorporate the Salesforce Lightning Design System CSS stylesheet into the JavaScript applications.",
        "C. Rewrite all Visualforce pages asLightning components.",
        "D. Enable Available for Lightning Experience, Lightning Communities, and the mobile app on Visualforce pages used by the custom application.",
      ],
      answer: "B",
      title: "Question 44",
    },
    {
      content:
        "How many accounts will be inserted by the following block ofcode? for(Integer i = 0 ; i <500; i++) { Account a = new Account(Name='New Account ' + i); insert a; }087. Boolean odk;Integer x;if(abok=false;integer=x;){X=1;}elseif(abok=true;integer=x;){X=2;}elseif(abok!=null;integer=x;){X=3;)elseif{X=4;}",
      options: ["A. X=9", "B. X=4", "C. X=10", "D. X=8"],
      answer: "B",
      title: "Question 45",
    },
    {
      content:
        "While writing a test class that covers an OpportunityLineItem trigger, a Developer is unable to create a standard PriceBook since one already exists in the org.How should the Developer overcome this problem?",
      options: [
        "A. Use @TestVisible to allow the test method to see the standard PriceBook.",
        "B. Use @IsTest(SeeAllData=true) and delete the existing standard PriceBook.",
        "C. Use Test.getStandardPricebookId() to get the standard PriceBook ID.",
        "D. Use Test.loadData() and a Static Resource to load a standard Pricebook.",
      ],
      answer: "C",
      title: "Question 46",
    },
    {
      content:
        "A developer must implement a CheckPaymentProcessor class that provides check processing payment capabilities that adhere to what defined for payments in the PaymentProcessor interface. public interface PaymentProcessor { void pay(Decimal amount); } Which is the correct implementation to use the PaymentProcessor interface class?",
      options: [
        "A. Public class CheckPaymentProcessor extends PaymentProcessor {public void pay(Decimal amount) {}}",
        "B. Public class CheckPaymentProcessor implements PaymentProcessor {public void pay(Decimal amount);}",
        "C. Public class CheckPaymentProcessor implements PaymentProcessor {public void pay(Decimal amount) {}}",
        "D. Public class CheckPaymentProcessor extends PaymentProcessor {public void pay(Decimal amount);}",
      ],
      answer: "A",
      title: "Question 47",
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
      title: "Question 48",
    },
    {
      content:
        "A developer wrote Apex code that calls out to an external system. How should a developer write the test to provide test coverage?",
      options: [
        "A. Write a class that extends WebserviceMock",
        "B. Write a class that extends HTTPCalloutMock.",
        "C. Write a class that implements the WebserviceMock interface.",
        "D. Write a class that implements the HTTPCalloutMock interface.",
      ],
      answer: "D",
      title: "Question 49",
    },
    {
      content:
        "A Salesforce developer wants to review their code changes immediately and does not want to install anything on their computer or on the org.Which tool is best suited?",
      options: [
        "A. Setup Menu",
        "B. Third-party apps from App Exchange",
        "C. Salesforce Extension for VSCode",
        "D. Developer Console",
      ],
      answer: "D",
      title: "Question 50",
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
      title: "Question 51",
    },
    {
      content: "What are two ways for a developer to execute tests in an org?",
      options: [
        "A. Tooling API",
        "B. Developer console",
        "C. Matadata API",
        "D. Bulk API",
      ],
      answer: "A,B",
      title: "Question 52",
    },
    {
      content:
        "Which three data types can a SOQL query return? Choose 3 answers",
      options: ["A. sObject", "B. Integer", "C. Long", "D. List"],
      answer: "A,B,D",
      title: "Question 53",
    },
    {
      content:
        "A developer needs to implement the functionality for a service agent to gather multiple pieces of information from a customer in order to send a replacement credit card.Which automation tool meets these requirements?",
      options: [],
      answer: "  Flow Builder ",
      title: "Question 54",
    },
  ],
});
