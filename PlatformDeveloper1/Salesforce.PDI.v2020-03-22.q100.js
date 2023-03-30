window.testContent = window.testContent || [];
window.testContent.push({
  name: "PlatformDeveloper1.PDI.v2020-03-22.q100",
  content: [
    {
      content:
        "Which two platform features allow for the use of unsupported languages? Choose 2 answers",
      options: ["A. Heroku Acm", "B. Docker", "C. Buildpacks", "D. App.json"],
      answer: "B,C",
      title: "Question 1",
    },
    {
      content:
        "If apex code executes inside the execute() method of an Apex class when implementing the Batchable interface, which statement are true regarding governor limits? Choose 2 answers",
      options: [
        "A. The Apex governor limits cannot be exceeded due to the asynchronous nature of the transaction,",
        "B. The Apex governor limits are relaxed while calling the costructor of the Apex class.",
        "C. The apex governor limits are reset for each iteration of the execute() mrthod. (Missed)",
        "D. The Apex governor limits might be higher due to the asynchronous nature of the transaction. (Missed)",
      ],
      answer: "C,D",
      title: "Question 2",
    },
    {
      content:
        "A developer tasked with creating a schema to track Movies, Actors, and contracts. A single movie can have many contracts and a single actor can have many contracts. Each contract is owned and actively managed by a single user. Which schema should be created to enable user to easily manage the contract they own; without requiring access to the movie or the actor records?",
      options: [
        "A. A master detail relationship to the movie object and a lookup relationship to the actor object",
        "B. A lookup relationship to the movie object and a master detail relationship to the actor object",
        "C. A lookup relationship to the movie object and a lookup relationship to the actor object",
        "D. A master detail relationship to the movie object and a master detail relationship to the actor object",
      ],
      answer: "C",
      title: "Question 3",
    },
    {
      content:
        "What is a benefit of the Lightning Component framework?Choose 3 answers",
      options: [
        "A. It uses an event-driven architecture",
        "B. It uses server-side JavaScript controller for logic.",
        "C. It uses client-side Apex controllers for logic.",
        "D. It uses an MVC architectural design pattern.",
        "E. It uses a traditional publish-subscribe model.",
      ],
      answer: "A,D,E",
      title: "Question 4",
    },
    {
      content:
        "In which two trigger types can a developer modify the new sObject records that are obtained by the trigger.new context? Choose 2 answers",
      options: [
        "A. Before insert",
        "B. Before update",
        "C. After update",
        "D. After insert",
      ],
      answer: "A,B",
      title: "Question 5",
    },
    {
      content:
        "How would a developer change the field type of a custom field on the Account object from string to an integer?",
      options: [
        "A. Make the change in the declarative UI, an then the change will automatically be reflected in the Apex code.",
        "B. Make the changes in the developer console, and then the change will automatically be reflected in the Apex code.",
        "C. Mate the change in the declarative UI, then update the field type to an integer field in the Apex code.",
        "D. Remove all references in the code, make the change in the declarative UI, and restore the references with the new type.",
      ],
      answer: "D",
      title: "Question 6",
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
      title: "Question 7",
    },
    {
      content:
        "A developer wants to create a custom object to track Customer Invoices.How should Invoices and Accounts be related to ensure that all Invoices are visible to everyone with access to an Account?",
      options: [
        "A. The Account should have a Lookup relationship to the Invoice",
        "B. The Invoice should have a Lookup relationship to the Account Previous",
        "C. The Invoice should have a Master-Detail relationship to the Account",
        "D. The Account should have a Master-Detail relationship to the Invoice.",
      ],
      answer: "C",
      title: "Question 8",
    },
    {
      content:
        "The sales team at Universal Containers would like to see a visual indicator appear on both Account and Opportunity page layouts to alert salespeople when an Account is late making payments or has entered the collections process. What can a developer implement to achieve this requirement without having to write custom code?",
      options: [
        "A. Quick Action",
        "B. Formula Field",
        "C. Roll-up Summary Field",
        "D. Workflow Rule",
      ],
      answer: "B",
      title: "Question 9",
    },
    {
      content: "What should be used to create scratch orgs?",
      options: [
        "A. Salesforce CLI",
        "B. Developer Console",
        "C. Workbench",
        "D. Sandbox refresh",
      ],
      answer: "A",
      title: "Question 10",
    },
    {
      content:
        "The Review_c object have a lookup relationship to the job_Application_c object. The job_Application_c object has a master detail relationship up to the position_c object. The relationship is based on the auto populated defaults?What is the recommended way to display field data from the related Review _C records a Visualforce page for a single Position_c record? Select one of the following:",
      options: [
        "A. Utilize the Standard Controller for Position_c and a Controller Extension to query for Review_c data.",
        "B. Utilize the Standard Controller for Position_c and cross-object Formula Fields on the Job_Application_c object to display Review_c data.",
        "C. Utilize the Standard Controller for Position_c and cross-object Formula Fields on the Review_c object to display Review_c data.",
        "D. Utilize the Standard Controller for Position_c and expression syntax in the Page to display related Review_c through the Job_Applicacion_c inject.",
      ],
      answer: "A",
      title: "Question 11",
    },
    {
      content:
        "An sObject named Application_c has a lookup relationship to another sObject named Position_c. Both Application _c and Position_c have a picklist field named Status_c.When the Status_c field on Position_c is updated, the Status_c field on Application_c needs to be populated automatically with the same value, and execute a workflow rule on Application_c.How can a developer accomplish this?",
      options: [
        "A. By using an Apex trigger with a DML operation.",
        "B. By changing Application_c.Status_c into a roll -up summary field.",
        "C. By configuring a cross-object field update with a workflow.",
        "D. By changing Application_c.Status_c into a formula field.",
      ],
      answer: "A",
      title: "Question 12",
    },
    {
      content:
        "A platform developer needs to implement a declarative solution that will display the most recent closed won date for all opportunity records associated with an account. Which field is required to achieve this declaratively?",
      options: [
        "A. Cross-object formula field on the opportunity object",
        "B. Roll-up summary field on the opportunity object",
        "C. Cross-object formula field on the account object",
        "D. Roll-up summary field on the account object",
      ],
      answer: "D",
      title: "Question 13",
    },
    {
      content:
        "Which two statements are acceptable for a developer to use inside procedural loops?",
      options: [
        "A. Delete contactList;",
        "B. ContactList.remove(i);",
        "C. Account a = [SELECT id, Name FROM account WHERE id = : con.AccountId LIMIT 1];",
        "D. Contact con = new Contact();",
      ],
      answer: "B,D",
      title: "Question 14",
    },
    {
      content:
        'The following Apex method is part of the ContactService class that is called from a trigger: public static void setBusinessUnitToEMEA(Contact thisContact){ thisContact.Business_Unit__c = "EMEA" ; update thisContact; } How should the developer modify the code to ensure best practice are met?',
      options: [
        "A. Public void setBusinessUnitToEMEA(List<Contact> contatcs){contacts[0].Business_Unit__c = 'EMEA' ;update contacts[0];}",
        "B. Public static void setBusinessUnitToEMEA(Contact thisContact){List<Contact> contacts = new List<Contact>();contacts.add(thisContact.Business_Unit__c = 'EMEA');update contacts;}",
        "C. Public static void setBusinessUnitToEMEA(List<Contact> contacts){for(Contact thisContact : contacts){thisContact.Business_Unit__c = 'EMEA' ;update contacts[0];}}",
        "D. Public static void setBusinessUnitToEMEA(List<Contact> contacts){for(Contact thisContact : contacts) {thisContact.Business_Unit__c = 'EMEA' ;}update contacts;}",
      ],
      answer: "B",
      title: "Question 15",
    },
    {
      content:
        "A developer executes the following query in Apex to retrieve a list of contacts for each account:List<account> accounts = [Select ID, Name, (Select ID, Name from Contacts) from Account] ; Which two exceptions may occur when it executes? (Choose two.)",
      options: [
        "A. SOQL query limit exception due to the number of contacts.",
        "B. CPU limit exception due to the complexity of the query.",
        "C. SOQL query row limit exception due to the number of contacts.",
        "D. SOQL query row limit exception due to the number of accounts.",
      ],
      answer: "A,D",
      title: "Question 16",
    },
    {
      content:
        "A developer creates an Apex helper class to handle complex trigger logic. How can the helper class warn users when the trigger exceeds DML governor limits?",
      options: [
        "A. By using Messaging.sendEmail() to continue toe transaction and send an alert to the user after the number of DML statements is exceeded.",
        "B. By using PageReference.setRedirect() to redirect the user to a custom Visualforce page before the number of DML statements is exceeded.",
        "C. By using Limits.getDMLRows() and then displaying an error message before the number of DML statements is exceeded.",
        "D. By using AmexMessage.Messages() to display an error message after the number of DML statements is exceeded.",
      ],
      answer: "C",
      title: "Question 17",
    },
    {
      content:
        "Given the following block code: try{ List <Accounts> retrievedRecords = [SELECT Id FROM Account WHERE Website = null]; }catch(Exception e){ //manage exception logic } What should a developer do to ensure the code execution is disrupted if the retrievedRecordslist remains empty after the SOQL query?",
      options: [
        "A. Check the state of the retrieveRecords variable and throw a custom exception if the variable is empty.",
        "B. Replace the retrievedRecords variable declaration from a List of Account to a single Account.",
        "C. Check the state of the retrievedRecords variable and access the first element of the list if the variable is empty.",
        "D. Check the state of the retrievedRecords variable and use System.assert(false) if the variable is empty",
      ],
      answer: "D",
      title: "Question 18",
    },
    {
      content:
        "In the Lightning Component framework, where is client-side controller logic contained?",
      options: ["A. JavaScript", "B. Apex", "C. HTML", "D. Visualforce"],
      answer: "A",
      title: "Question 19",
    },
    {
      content:
        "What is true of a partial sandbox that is not true of a full sandbox? Choose 2 answers",
      options: [
        "A. Only includes necessary meta data",
        "B. Limited to 5 GB of data",
        "C. More frequent refreshes",
        "D. Use of change sets",
      ],
      answer: "B,C",
      title: "Question 20",
    },
    {
      content:
        'A developer created a Visualforce page with a custom controller to show a list of accounts. The page uses the<apex:SelecList> component, with a variable called "selection", to show the valid values for Account.Type.The page uses an <apex:pageBlockTable> component to display the list of accounts, where the iteration variable is "acct". The developer wants to ensure that when a user selects a type on the <apex : selectList> component, only accounts with that type are shown on the page. What should the developer do to accomplish this?',
      options: [
        "A. Use the onChange event to update the list of accounts in the controller when the value changes, and then re-render the pageBlockTable.",
        "B. Create multiple lists in the controller that represent the relevant accounts for each account type when the page loads, then reference the correct one dynamically on the pageBlockTable.",
        "C. Create a component for each option and use a variable with hide parameter on the element.",
        "D. Add the Rendered={!Acct.type==selection} attribute to the pageBlockTable component",
      ],
      answer: "A",
      title: "Question 21",
    },
    {
      content:
        "A developer in a Salesforce org with 100 Accounts executes the following code using the Developer console:Account myAccount = new Account(Name = 'MyAccount');Insert myAccount;For (Integer x = 0; x < 250; x++){Account newAccount = new Account (Name='MyAccount' + x);try {Insert newAccount;}catch (Exception ex) {System.debug (ex) ;}}insert new Account (Name='myAccount'); How many accounts are in the org after this code is run?",
      options: ["A. 102", "B. 252", "C. 101", "D. 100"],
      answer: "D",
      title: "Question 22",
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
      answer: "B",
      title: "Question 23",
    },
    {
      content:
        "What is the result of the debug statements in testMethod3 when you create test data using testSetup in below code?",
      options: [
        "A. Account0.Phone=333-8781, Account1.Phone=333-8780",
        "B. Account0.Phone=333-8780, Account1.Phone=333-8781",
        "C. Account0.Phone=888-1515, Account1.Phone=999-2525",
        "D. Account0.Phone=888-1515, Account1.Phone=999-1515",
      ],
      answer: "B",
      title: "Question 24",
    },
    {
      content:
        "What is a characteristic of the Lightning Component Framework? Choose 2 answers:",
      options: [
        "A. It includes responsive components.",
        "B. It uses XML as its data format.",
        "C. It works with existing Visualforce pages.",
        "D. It has an event-driven architecture.",
      ],
      answer: "A,D",
      title: "Question 25",
    },
    {
      content:
        "When creating a record with a Quick Action, what is the easiest way to post a feed item?",
      options: [
        "A. By selecting create feed item on the quick action.",
        "B. By selecting create case feed on the new record.",
        "C. By adding a workflow rule on the new record.",
        "D. By adding a trigger on the new record.",
      ],
      answer: "A",
      title: "Question 26",
    },
    {
      content:
        "Which three code lines are required to create a Lightning component on a Visualforce page? Choose 3 answers",
      options: [
        "A. $Lightning.useComponent",
        "B. <apex:includeLightning/>",
        "C. $Lightning.use (Missed)",
        "D. $Lightning.createComponent",
        "E. <apex:slds/>",
      ],
      answer: "B,C,D",
      title: "Question 27",
    },
    {
      content:
        "developer created this Apex trigger that calls MyClass .myStaticMethod: trigger myTrigger on Contact(before insert) ( MyClass.myStaticMethod(trigger.new, trigger.oldMap); } The developer creates a test class with a test method that calls MyClass.mystaticMethod, resulting in 81% overall code coverage. What happens when the developer tries to deploy the trigger and two classes to production, assuming no other code exist?",
      options: [
        "A. The deployment fails because the Apex trigger has no code coverage.",
        "B. The deployment passes because the Apex code has required (>75%) code coverage.",
        "C. The deployment fails because no assertions were made in the test method.",
        "D. The deployment passes because both classes and the trigger were included in the deployment.",
      ],
      answer: "A",
      title: "Question 28",
    },
    {
      content:
        "What are the supported content sources for custom buttons and links? (Choose 2 Answers)",
      options: [
        "A. URL.",
        "B. VisualForce Page.",
        "C. Lightning Page.",
        "D. Chatter File.",
        "E. Static Resource.",
      ],
      answer: "A,B",
      title: "Question 29",
    },
    {
      content:
        "Universal Containers requires Service Representatives to update all Cases at least one every three days. To make sure of this policy is obeyed, a developer has been asked to implement a field that displays the number of days since the last Case update. What should the developer use to configure the solution?",
      options: [
        "A. Process Builder",
        "B. Scheduled Apex Class",
        "C. Workflow rule",
        "D. Formula field",
      ],
      answer: "D",
      title: "Question 30",
    },
    {
      content:
        "A developer must implement a CheckPaymentProcessor class that provides check processing payment capabilities that adhere to what defined for payments in the PaymentProcessor interface. public interface PaymentProcessor { void pay(Decimal amount); } Which is the correct implementation to use the PaymentProcessor interface class?",
      options: [
        "A. Public class CheckPaymentProcessor extends PaymentProcessor {public void pay(Decimal amount) {}}",
        "B. Public class CheckPaymentProcessor extends PaymentProcessor {public void pay(Decimal amount);}",
        "C. Public class CheckPaymentProcessor implements PaymentProcessor {public void pay(Decimal amount) {}}",
        "D. Public class CheckPaymentProcessor implements PaymentProcessor {public void pay(Decimal amount);}",
      ],
      answer: "C",
      title: "Question 31",
    },
    {
      content:
        "The initial value for a number field on a record is 1. A user updated the value of the number field to 10. This action invokes a workflow field update, which changes the value of the number field to 11. After the workflow field update, an update trigger fires.What is the value of the number field of the object that is obtained from Trigger.old?",
      options: ["A. 10", "B. 1", "C. Null", "D. 11"],
      answer: "B",
      title: "Question 32",
    },
    {
      content:
        "Which Salesforce feature allows a developer to see when a user last logged in to Salesforce if real-time notification is not required?",
      options: [
        "A. Calendar Events",
        "B. Developer Log",
        "C. Asynchronous Data Capture Events",
        "D. Event Monitoring Log",
      ],
      answer: "D",
      title: "Question 33",
    },
    {
      content:
        "A developer is debugging the following code to determinate why Accounts are not being created Account a = new Account(Name = 'A'); Database.insert(a, false); How should the code be altered to help debug the issue?",
      options: [
        "A. Add a System.debug() statement before the insert method",
        "B. Add a try/catch around the insert method",
        "C. Collect the insert method return value a Saveresult record",
        "D. Set the second insert method parameter to TRUE",
      ],
      answer: "C",
      title: "Question 34",
    },
    {
      content:
        "Which governor limit applies to all the code in an apex transaction?",
      options: [
        "A. Elapsed CPU time",
        "B. Elapsed SOQL query time",
        "C. Number of classes called",
        "D. Number of new records created",
      ],
      answer: "A",
      title: "Question 35",
    },
    {
      content:
        "A developer has an integer variable called maxAttempts. The developer meeds to ensure that once maxAttempts is initialized, it preserves its value for the lenght of the Apex transaction; while being able to share the variable's state between trigger executions. How should the developer declare maxAttempts to meet these requirements?",
      options: [
        "A. Declare maxattempts as a constant using the static and final keywords",
        "B. Declare maxattempts as a variable on a helper class",
        "C. Declare maxattempts as a private static variable on a helper class",
        "D. Declare maxattempts as a member variable on the trigger definition.",
      ],
      answer: "A",
      title: "Question 36",
    },
    {
      content: "Manage package can be created in which type of org?",
      options: [
        "A. Developer sandbox",
        "B. Unlimited edition",
        "C. Developer Edition",
        "D. Partial copy sandbox",
      ],
      answer: "C",
      title: "Question 37",
    },
    {
      content:
        "Which statement about change set deployments is accurate? (Choose 3)",
      options: [
        "A. They require a deployment connection.",
        "B. They ca be used to transfer Contact records.",
        "C. They use an all or none deployment model.",
        "D. They can be used to deploy custom settings data.",
        "E. They can be used only between related organizations.",
      ],
      answer: "A,C,E",
      title: "Question 38",
    },
    {
      content:
        "Given the code block: Integer x; For(x=0;x<10; x+=2) { If(x==8) break; If(x==10) break; } System.debug(x); Which value will the system debug statement display?",
      options: ["A. 10", "B. 2", "C. 4", "D. 8"],
      answer: "D",
      title: "Question 39",
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
      title: "Question 40",
    },
    {
      content: "Which exception type cannot be caught ?",
      options: [
        "A. A custom Exception",
        "B. LimitException",
        "C. CalloutException",
        "D. NoAccessException",
      ],
      answer: "B",
      title: "Question 41",
    },
    {
      content: "Which scenario is invalid for execution by unit tests?",
      options: [
        "A. Loading test data in place of user input for Flows.",
        "B. Loading the standard Pricebook ID using a system method",
        "C. Executing methods as different users.",
        "D. Executing methods for negative test scenarios",
      ],
      answer: "A",
      title: "Question 42",
    },
    {
      content:
        "Which three steps allow a custom SVG to be included in a Lightning web component? Choose 3 answers",
      options: [
        "A. Reference the import in the HTML template.",
        "B. Reference the getter in the HTML template. (Missed)",
        "C. Upload the SVG as a static resource. (Missed)",
        "D. Import the static resource and provide a getter for it in JavaScript. (Missed)",
        "E. Import the SVG as a content asset file.",
      ],
      answer: "B,C,D",
      title: "Question 43",
    },
    {
      content:
        "Which two condition cause workflow rules to fire? Choose 2 answers",
      options: [
        "A. Changing territory assignments of accounts and opportunities",
        "B. An Apex batch process that changes field values",
        "C. Converting leads to person account",
        "D. Updating record using bulk API",
      ],
      answer: "B,D",
      title: "Question 44",
    },
    {
      content:
        "A developer is asked to create a custom visualforce page that will be used as a dashboard component. Which three are valid controller options for this page? Choose 3 answers",
      options: [
        "A. Use a standard controller",
        "B. Use a standard controller with extensions",
        "C. Do not specify a controller",
        "D. Use a custom controller with extensions",
        "E. Use a custom controller",
      ],
      answer: "A,B,E",
      title: "Question 45",
    },
    {
      content:
        "A developer uses a before insert trigger on the Lead object to fetch the Territory__c object, where the Territory__c.PostalCode__c matches the Lead.PostalCode. The code fails when the developer uses the Apex Data Loader to insert 10,000 Lead records. The developer has the following code block: Line-01: for (Lead l :Trigger.new){Line-02: if (l.PostalCode != null) {Line-03: List<Territory__c> terrList = [SELECT Id FROM Territory__c WHERE PostalCode__c = :l.PostalCode];Line-04: if(terrList.size() > 0) Line-05: l.Territory__c = terrList[0].Id; Line-06: }Line-07: }Which line of code is causing the code block to fail?",
      options: [
        "A. Line-02: A NullPointer exception is thrown if PostalCode is null.",
        "B. Line-03: A SOQL query is located inside of the for loop code.",
        "C. Line-01: Trigger:new is not valid in a before insert Trigger.",
        "D. Line-05: The Lead in a before insert trigger cannot be updated.",
      ],
      answer: "B",
      title: "Question 46",
    },
    {
      content:
        "A developer encounters APEX heap limit errors in a trigger.Which two methods should the developer use to avoid this error? (Choose two.)",
      options: [
        "A. Use the transient keyword when declaring variables.",
        "B. Remove or set collections to null after use.",
        "C. Query and store fields from the related object in a collection when updating related objects.",
        "D. Use SOQL for loops instead of assigning large queries results to a single collection and looping through the collection.",
      ],
      answer: "A,D",
      title: "Question 47",
    },
    {
      content: "Which three data types can be returned from an SOQL statement?",
      options: [
        "A. Single object",
        "B. Boolean",
        "C. Integer",
        "D. String",
        "E. List of objects",
      ],
      answer: "A,C,E",
      title: "Question 48",
    },
    {
      content:
        "A developer wrote a unit test to confirm that a custom exception works properly in a custom controller, but the test failed due to an exception being thrown.Which step should the developer take to resolve the issue and properly test the exception?",
      options: [
        "A. Use the finally bloc within the unit test to populate the exception.",
        "B. Use Test.isRunningTest() within the custom controller.",
        "C. Use the database methods with all or none set to FALSE.",
        "D. Use try/catch within the unit test to catch the exception.",
      ],
      answer: "D",
      title: "Question 49",
    },
    {
      content:
        "A platform developer needs to write an apex method that will only perform an action if a record is assigned to a specific record type. Which two options allow the developer to dynamically determine the ID of the required record type by its name? Choose 2 answers",
      options: [
        "A. Make an outbound web services call to the SOAP API",
        "B. Execute a SOQL query on the recordtype object",
        "C. Hardcore the ID as a constant in an apex class",
        "D. Use the getrecordtypeinfosbydevelopername() method in the describesobjectresult class",
      ],
      answer: "B,D",
      title: "Question 50",
    },
    {
      content:
        "How should a developer make sure that a child record on a custom object, with a lookup to the Account object, has the same sharing access as its associated account?",
      options: [
        "A. Ensure that the relationship between the objects is Master-Detail.",
        "B. Include the sharing related list on the custom object page layout.",
        "C. Create a validation rule on the custom object comparing the record owners on both records.",
        "D. Create a Sharing Rule comparing the custom object owner to the account owner.",
      ],
      answer: "A",
      title: "Question 51",
    },
    {
      content:
        "How should a custom user interface be provided when a user edits an Account in Lightning Experience?",
      options: [
        "A. Override the Account's Edit button with Lightning page.",
        "B. Override the Account's Edit button with Lightning Flow",
        "C. Override the Account's Edit button with Lightning component.",
        "D. Override the Account's Edit button with Lightning Action",
      ],
      answer: "C",
      title: "Question 52",
    },
    {
      content:
        "A developer creates a custom controller and custom Visualforce page by using the following code block:public class myController {public String myString;public String getMyString() {return 'getmyString';}public String getStringMethod1() {return myString;}public String getStringMethod2() {if (myString == null)myString ='Method2';return myString;}}{!myString}, {!StringMethod1}, {!StringMethod2}, {!myString}What does the user see when accessing the custom page?",
      options: [
        "A. , , Method2 , getMyString",
        "B. GetMyString , , Method2 , getMystring",
        "C. , , Method2,",
        "D. GetMyString , , ,",
      ],
      answer: "B",
      title: "Question 53",
    },
    {
      content:
        "What would a developer do to update a picklist field on related Opportunity records when a modification to the associated Account record is detected?",
      options: [
        "A. Create a Lightning Component.",
        "B. Create a process with Process Builder.",
        "C. Create a workflow rule with a field update.",
        "D. Create a Visualforce page.",
      ],
      answer: "B",
      title: "Question 54",
    },
    {
      content: "Where can debug log filter settings be set?Choose 2 answers",
      options: [
        "A. The Filters link by the monitored user's name within the web UI.",
        "B. On the monitored user's name.",
        "C. The Show More link on the debug log's record.",
        "D. The Log Filters tab on a class or trigger detail page.",
      ],
      answer: "A,D",
      title: "Question 55",
    },
    {
      content:
        "A developer wants to display all of the available record types for a Case object. The developer also wants to display the picklist values for the Case.Status field. The Case object and the Case.Status field are on a custom Visualforce page. Which action can the developer perform to get the record types and picklist values in the controller? (Choose 2)",
      options: [
        "A. Use SOQL to query case records in the org to get all values for the Status picklist field.",
        "B. Use SOQL to query Case records in the org to get all the RecordType values available for Case.",
        "C. Use Schema.PicklistEntry returned by Case.Status.getDescribe().getPicklistValues().",
        "D. Use Schema.RecordTypeInfo returned by Case.sObjectType.getDescribe().getRecordTypeInfos().",
      ],
      answer: "C,D",
      title: "Question 56",
    },
    {
      content:
        "How many levels of child records can be returned in a single SOQL query from one parent object?",
      options: ["A. 7", "B. 5", "C. 3", "D. 1"],
      answer: "D",
      title: "Question 57",
    },
    {
      content:
        "A developer has javascript code that needs to be called by controller functions in multiple components by extending a new abstract component. Which resource in the abstract component bundle allows the developer to achieve this",
      options: [
        "A. Superrender.js",
        "B. Controller.js",
        "C. Helper.js",
        "D. Rendered.js",
      ],
      answer: "C",
      title: "Question 58",
    },
    {
      content:
        "Which type of controller should a developer use to include a list of related records for a Custom Object record on a Visualforce page without needing additional test coverage?",
      options: [
        "A. Controller Extension",
        "B. Custom Controller",
        "C. List Controller",
        "D. Standard Controller",
      ],
      answer: "D",
      title: "Question 59",
    },
    {
      content:
        "A developer runs the following anonymous code block:List<Account> acc = [SELECT Id FROM Account LIMIT 10];Delete acc;Database.emptyRecycleBin(acc);system.debug(Limits.getDMLStatements()+ ', '+Limits.getLimitDMLStatements());What is the result?",
      options: ["A. 150, 11", "B. 11, 150", "C. 150, 2", "D. 2, 150"],
      answer: "D",
      title: "Question 60",
    },
    {
      content:
        "A developer created an Apex trigger using the Developer Console and now wants to debug codeHow can the developer accomplish this in the Developer Console?",
      options: [
        "A. Add the user name in the Log Inspector.",
        "B. Select the Override Log Triggers checkbox for the trigger",
        "C. Open the logs tab in the Developer Console.",
        "D. Open the Progress tab in the Developer Console.",
      ],
      answer: "C",
      title: "Question 61",
    },
    {
      content:
        "Which two queries can a developer use in a Visualforce controller to protect against SOQL injection vulnerabilities? Choose 2 answers",
      options: [
        "A. String qryName = % + String.escapeSingleQuotes(name)+ % ;String qryString = SELECT Id FROM Contact WHERE Name LIKE :qryNAme ;List queryResults = Database.query(qryString);",
        "B. String qryName = % + String.enforceSecurityChecks(name)+ % ;String qryString = SELECT Id FROM Contact WHERE Name LIKE :qryNAme ;List queryResults = Database.query(qryString);",
        "C. String qryString = SELECT Id FROM Contact WHERE Name LIKE :qryNAme ; List queryResults = Database.query(qryString);",
        "D. String qryName = % + name % ;String qryString = SELECT Id FROM Contact WHERE Name LIKE :qryNAme ;List queryResults = Database.query(qryString);",
      ],
      answer: "A,D",
      title: "Question 62",
    },
    {
      content:
        "For which three items can a trace flag be configured? (Choose three.)",
      options: [
        "A. Visualforce",
        "B. Apex Trigger",
        "C. Process Builder",
        "D. User",
        "E. Apex Class",
      ],
      answer: "B,D,E",
      title: "Question 63",
    },
    {
      content:
        "What are two testing consideration when deploying code from a sandbox to production? Choose 2 answers",
      options: [
        "A. 75% of test must execute without failure",
        "B. Apex code requires 100% coverage",
        "C. 100% of test must execute without failure",
        "D. Apex code requires 75% coverage",
      ],
      answer: "C,D",
      title: "Question 64",
    },
    {
      content:
        "A developer is asked to set a picklist field to 'Monitor' on any new Leads owned by a subnet of Users.How should the developer implement this request?",
      options: [
        "A. Create an after insert Lead trigger.",
        "B. Create a Lead Workflow Rule Field Update.",
        "C. Create a Lead formula field.",
        "D. Create a before insert Lead trigger.",
      ],
      answer: "B",
      title: "Question 65",
    },
    {
      content:
        "custom picklist field, Food_Preference__c, exist on a custom object. The picklist contains the following options: 'Vegan','Kosher','No Preference'. The developer must ensure a value is populated every time a record is created or updated. What is the most efficient way to ensure a value is selected every time a record is saved?",
      options: [
        "A. Mark the field as Required on the field definition.",
        "B. Set a validation rule to enforce a value is selected.",
        'C. Set "Use the first value in the list as the default value" as True.',
        "D. Mark the field as Required on the object's page layout.",
      ],
      answer: "A",
      title: "Question 66",
    },
    {
      content:
        "Candidates are reviewed by four separate reviewers and their comments and scores which range from 1 (lowest) to 5 (highest) are stored on a review record that is a detail record for a candidate what is the best way to indicate that a combined review score of 15 of better is required to recommend that the candidate come in for an interview?",
      options: [
        "A. Use visual workflow to set a recommended field on the candidate whenever the cumulative review score is 15 or better",
        "B. Use a rollup summary field to calculates the sum of the review scores, and store this in a total score field on the candidate",
        "C. Use a workflow rule to calculate the sum of the review scores and send an email to the hiring manager when the total is 15 or better",
        "D. Use a validation rule on a total score field on the candidate record that prevents a recommended field from being true if the total score is less than 15",
      ],
      answer: "C",
      title: "Question 67",
    },
    {
      content:
        "Application Events follow the traditional publish-subscribe model. Which method is used to fire an event?",
      options: [
        "A. RegisterEvent()",
        "B. Fire()",
        "C. Emit()",
        "D. FireEvent()",
      ],
      answer: "B",
      title: "Question 68",
    },
    {
      content:
        "What actions types should be configured to display a custom success message?",
      options: [
        "A. Delete a record.",
        "B. Post a feed item.",
        "C. Close a case.",
        "D. Update a record.",
      ],
      answer: "D",
      title: "Question 69",
    },
    {
      content:
        "In the code below, which type does String inherit from? String s = 'Hello World';",
      options: ["A. Object ", "B. Class", "C. Object", "D. Prototype"],
      answer: "C",
      title: "Question 70",
    },
    {
      content:
        "Universal Containers has large number of custom applications that were built using a third-party javaScript framework and exposed using Visualforce pages. The Company wants to update these applications to apply styling that resembles the look and feel of Lightning Experience. What should the developer do to fulfill the business request in the quickest and most effective manner?",
      options: [
        "A. Incorporate the Salesforce Lightning Design System CSS stylesheet into the JavaScript applications.",
        "B. Set the attribute enableLightning to treu in the definition.",
        "C. Enable Available for Lightning Experience, Lightning Comminities, and the mobile app on Visualforce pages used by the custom application.",
        "D. Rewrite all Visualforce pages asLightning components.",
      ],
      answer: "B",
      title: "Question 71",
    },
    {
      content:
        "A developer needs to provide a way to mass edit,update, and delete records from a list view in which two ways can this be accomlpished? choose 2 answers",
      options: [
        "A. Configure the user interface and enable both inline editing enhanced lists",
        "B. Download a managed package from the appexchange that provides customizable enhanced list views and buttons",
        "C. Create a new visualforce page and apex controller for the list view that provides mass edit,update and delete functionality",
        "D. Download an unmanaged package from the appexchange that provides customizable mass edit, update and delete functionality",
      ],
      answer: "B,C",
      title: "Question 72",
    },
    {
      content:
        "Which two operations can be performed using a formula field? Choose 2 answers",
      options: [
        "A. Displaying an Image based on the Opportunity Amount (Missed)",
        "B. Triggering a Process Builder",
        "C. Calculating a score on a Lead based on the information from another field (Missed)",
        "D. Displaying the last four digits of an encrypted Social Security number",
      ],
      answer: "A,C",
      title: "Question 73",
    },
    {
      content:
        "The sales management team requires that the lead source field of the Lead record be populated when Lead is converted. What would a developer use to ensure that a user populates the Lead source field?",
      options: [
        "A. Process builder",
        "B. Workflow rule",
        "C. Formula field",
        "D. Validation rule",
      ],
      answer: "D",
      title: "Question 74",
    },
    {
      content:
        "A developer working on a time management application wants to make total hours for each timecard available to applications users. A timecard entry has a Master-Detail relationship to a timecard. Which approach should the developer use to accomplish this declaratively?",
      options: [
        "A. A visualforce page that calculates the total number of hours for a timecard and displays it on the page.",
        "B. A Roll-up Summary field on the Timecard Object that calculates the total hours from timecard entries for that timecard.",
        "C. A Process Builder process that updates a field on the timecard entry is created.",
        "D. An Apex trigger that uses an Aggregate Query to calculate the hours for a given timecard and stores it in a custom field.",
      ],
      answer: "B",
      title: "Question 75",
    },
    {
      content:
        "Which action can a developer take to reduce the execution time of the following code? List<account> allaccounts = [select id from account]; list<account> allcontacts = [select id, accountid from contact]; for (account a :allaccounts){ for (contact c:allcontacts){ if(c.accountid = a.id){ //do work } } }",
      options: [
        "A. Add a group by clause to the contact SOQL",
        "B. Use a map <id,contact> for allaccounts",
        "C. Create an apex helper class for the SOQL",
        "D. Put the account loop inside the contact loop",
      ],
      answer: "B",
      title: "Question 76",
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
      title: "Question 77",
    },
    {
      content:
        "The Sales Management team hires a new intern. The intern is not allowed to view Opportunities, but needs to see the Most Recent Closed Date of all child Opportunities when viewing an Account record. What would a developer do to meet this requirement?",
      options: [
        "A. Create a trigger on the Account object that queries the Close Date of the most recent Opportunities.",
        "B. Create a formula field on the Account object that performs a MAX on the Opportunity Close Date field.",
        "C. Create a roll-up summary field on the Account object that performs a MAX on the Opportunity Close Date field.",
        "D. Create a Workflow rule on the Opportunity object that updates a field on the parent Account.",
      ],
      answer: "C",
      title: "Question 78",
    },
    {
      content:
        "A developer writes a before insert trigger.How can the developer access the incoming records in the trigger body?",
      options: [
        "A. By accessing the Trigger.new context variable.",
        "B. By accessing the Tripper.newList context variable.",
        "C. By accessing the Trigger.newRecords context variable.",
        "D. By accessing the Trigger.newMap context variable.",
      ],
      answer: "A",
      title: "Question 79",
    },
    {
      content:
        "A developer is asked to create a PDF quote document formatted using the company's branding guidelines, and automatically save it to the Opportunity record.Which two ways should a developer create this functionality? (Choose two.)",
      options: [
        "A. Create a Visualforce page with custom styling.",
        "B. Install an application from the AppExchange to generate documents.",
        "C. Create an email template and use it in Process Builder.",
        "D. Create a visual flow that implements the company's formatting.",
      ],
      answer: "A,B",
      title: "Question 80",
    },
    {
      content:
        "A developer needs to create records for the object Property__c. The developer creates the following code block:List propertiesToCreate = helperClass.createProperties();try { // line 3 } catch (Exception exp ) {//exceptionhandling }Which line of code would the developer insert at line 3 to ensure that at least some records are created, even if a few records have errors and fail to be created?",
      options: [
        "A. Database.insert(propertiesToCreate, false);",
        "B. Database.insert(propertiesToCreate);",
        "C. insert propertiesToCreate;",
        "D. Database.insert(propertiesToCreate, System.ALLOW_PARTIAL);",
      ],
      answer: "A",
      title: "Question 81",
    },
    {
      content:
        "Which approach should a developer use to add pagination to a Visualforce page?",
      options: [
        "A. A StandardSetController",
        "B. The Action attribute for a page",
        "C. A StandardController",
        "D. The extensions attribute for a page",
      ],
      answer: "A",
      title: "Question 82",
    },
    {
      content:
        "A developer uses an 'after update' trigger on the Account object to update all the Contacts related to the Account. The trigger code shown below is randomly failing.List<Contacts> theContacts = new List<Contacts>(); for(Account a : Trigger.new){ for(Contact c : [SELECT Id, Account_Date__c FROM Contact WHERE AccountId = :a.Id]){ c.Account_Date__c = Date.today(); theContacts.add(c);}} updates theContacts;Which line of code is causing the code block to fail?",
      options: [
        "A. An exception is thrown if theContacts is empty",
        "B. An exception is thrown if Account_Date__c is null.",
        "C. The trigger processes more than 200 records in the for loop.",
        "D. A SOQL query is located inside of the for loop.",
      ],
      answer: "D",
      title: "Question 83",
    },
    {
      content:
        "Which statement generates a list of Leads and Contacts that have a field with the phrase 'ACME'?",
      options: [
        'A. List <sObject> searchList = (FIND "*ACME*" IN ALL FIELDS RETURNING Contact, Lead);',
        'B. Map <sObject> searchList = (FIND "*ACME*" IN ALL FIELDS RETURNING Contact, Lead);',
        'C. List<List <sObject>> searchList = (FIND "*ACME*" IN ALL FIELDS RETURNING Contact, Lead);',
        "D. List<List < sObject>> searchList = (SELECT Name, ID FROM Contact, Lead WHERE Name like'%ACME%');",
      ],
      answer: "C",
      title: "Question 84",
    },
    {
      content:
        "What is the maximum number of SOQL queries used by the following code? List<Account> aList = [SELECT Id FROM Account LIMIT 5]; for (Account a : aList){ List<Contact> cList = [SELECT Id FROM Contact WHERE AccountId = :a.Id); }",
      options: ["A. 6", "B. 5", "C. 1", "D. 2"],
      answer: "A",
      title: "Question 85",
    },
    {
      content: "Which is a valid Apex assignment?",
      options: [
        "A. Integer x = 5*1.0;",
        "B. Double x = 5;",
        "C. Float x = 5.0;",
        "D. Integer x = 5.0;",
      ],
      answer: "B",
      title: "Question 86",
    },
    {
      content:
        "What is the return data type when ApexPages.currentPage().getParameters() is used to retrieve URL parameters from a visualforce controller?",
      options: ["A. List", "B. Enum", "C. Map", "D. String[]"],
      answer: "C",
      title: "Question 87",
    },
    {
      content:
        "Which code block returns the ListView of an Account object using the following debug statement?system.debug(controller.getListViewOptions() );",
      options: [
        "A. ApexPages.StandardController controller = new ApexPages.StandardController( [SELECT Id FROM Account LIMIT 1]);",
        "B. ApexPages.StandardSetController controller = new ApexPages.StandardSetController( Database.getQueryLocator( 'SELECT Id FROM Account LIMIT 1'));",
        "C. ApexPages.StandardController controller = new ApexPages.StandardController( Database.getQueryLocator( 'SELECT Id FROM Account LIMIT 1'));",
        "D. ApexPages.StandardController controller = new ApexPages.StandardController( [SELECT Id FROM Account LIMIT 1]); ",
      ],
      answer: "B",
      title: "Question 88",
    },
    {
      content:
        "How can a custom type be identified as unique when added to a Set?",
      options: [
        "A. The class must implement the Equals and Hashcode methods",
        "B. Methods in the class must be static",
        "C. Methods in the class must be global",
        "D. The class must have a method with the @InvocableMethod annotation",
      ],
      answer: "A",
      title: "Question 89",
    },
    {
      content:
        "Universal Containers (UC) uses a custom object called Vendor. The Vendor custom object has a Master-Detail relationship with the standard Account object. Based on some internal discussion, the UC administrator tried to change the Master-Detail relationship to a Lookup relationship but was not able todo so. What is apossible reason that this change was not permitted?",
      options: [
        "A. The Account records contain Vendor roll-up summary fields.",
        "B. The Account object is included on a workflow on the Vendor object.",
        "C. The Vendor records have existing values in the Account object.",
        "D. The Vendor object must use a Master-Detail field for reporting.",
      ],
      answer: "A",
      title: "Question 90",
    },
    {
      content:
        "A developer must create a Lightning component that allows user to input Contact record information to create a Contact record, including a Salary__c custom field. What should the developer use, along with a lightning-record-edit-form, so that Salary__c field functions as a currency input and is only viewable and editable by users that have the correct field level permissions on Salary__c?",
      options: [
        'A. <lightning-input-currency value="Salary__c"></lightning-input-currency>',
        'B. <ligthning-input-field field-name="Salary__c"></lightning-input-field>',
        'C. <lightning-input type="number" value="Salary__c" formatter="currency"></lightning-input>',
        'D. <lightning-formatted-number value="Salary__c" format-style="currency"></lightning-formatted-number>',
      ],
      answer: "B",
      title: "Question 91",
    },
    {
      content:
        "To which primitive data type in Apex is a currency field atomically assigned?",
      options: ["A. Decimal", "B. Integer", "C. Double", "D. Currency"],
      answer: "A",
      title: "Question 92",
    },
    {
      content:
        "When using SalesforceDX, what does a developer need to enable to create and manage scratch orgs?",
      options: [
        "A. Dev Hub",
        "B. Production",
        "C. Environment Hub",
        "D. Sandbox",
      ],
      answer: "A",
      title: "Question 93",
    },
    {
      content:
        "Universal Containers wants to back up all of the data and attachments in its Salesforce org once month. Which approach should a developer use to meet this requirement?",
      options: [
        "A. Define a Data Export scheduled job.",
        "B. Use the Data Loader command line.",
        "C. Create a Schedulable Apex class.",
        "D. Schedule a report.",
      ],
      answer: "A",
      title: "Question 94",
    },
    {
      content:
        "A developer needs to include a Visualforce page in the detail section of a page layout for the Account object, but does not see the page as an available option in the Page Layout Editor. Which attribute must the developer include in the <apex:page> tag to ensure the Visualforce page can be embedded in a page layout?",
      options: [
        'A. Action="AccountId"',
        'B. Controller="Account"',
        'C. Extensions="AccountController"',
        'D. StandardController="Account"',
      ],
      answer: "D",
      title: "Question 95",
    },
    {
      content:
        "From which 2 locations can a developer determine the overall code coverage for a sandbox?",
      options: [
        "A. The tests tab of the developer console",
        "B. The apex test execution page",
        "C. The test suite run panel of the developer console",
        "D. The apex classes setup page",
      ],
      answer: "A,D",
      title: "Question 96",
    },
    {
      content:
        "A developer uses a Test Setup method to create an Account named 'Test'. The first test method deletes the Account record. What must be done in the second test method to use the Account?",
      options: [
        "A. Use SELECT Id from Account where Name='Test'",
        "B. Call the Test Setup method at the start of the test",
        "C. Restore the Account using an undeleted statement",
        "D. The Account cannot be used in the second test method",
      ],
      answer: "A",
      title: "Question 97",
    },
    {
      content:
        "A developer needs an Apex method that can process Account or Contact records. Which method signature should the developer use?",
      options: [
        "A. Public void doWork(Account || Contatc)",
        "B. Public void doWork(Record theRecord)",
        "C. Public void doWork(sObject theRecord)",
        "D. Public void doWork(Account Contact)",
      ],
      answer: "C",
      title: "Question 98",
    },
    {
      content:
        "A developer has the controller class below.Which code block will run successfully in an execute anonymous window?",
      options: [
        "A. myFooController m = new myFooController();System.assert(m.prop ==0);",
        "B. myFooController m = new myFooController();System.assert(m.prop !=null);",
        "C. myFooController m = new myFooController();System.assert(m.prop ==1);",
        "D. myFooController m = new myFooController();System.assert(m.prop ==null);",
      ],
      answer: "D",
      title: "Question 99",
    },
    {
      content:
        "A developer needs to know if all tests currently pass in a Salesforce environment. Which feature can the developer use? (Choose 2)",
      options: [
        "A. Developer Console",
        "B. ANT Migration Tool",
        "C. Workbench Metadata Retrieval",
        "D. Salesforce UI Apex Test Execution",
      ],
      answer: "A,D",
      title: "Question 100",
    },
  ],
});
