window.testContent = window.testContent || [];
var testId = "Salesforce.Platform-Developer-II";
var testName = "Salesforce.Platform-Developer-II";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "Salesforce.Platform-Developer-II.v2022-07-07.q131",
  content: [
    {
      content:
        "Refer to the code snippet below:As part of an Integration development effort, a developer is tasked to create an Apex method mat solely relies on the use of foreign identifiers In order to relate new contact records to existing Accounts in Salesforce. The account object contains a field marked as an external ID, the API Name of this field is Legacy_Id_c.What Is the most efficient way to instantiate the parentAccount: variable on line 02 to ensure the newly created contact is properly related to the Account?",
      options: ["A. Option D", "B. Option B", "C. Option C", "D. Option A"],
      answer: "D",
      title: "Question 1",
    },
    {
      content:
        "Given the following code:Assuming there were 10 Contacts and five Accounts created today, what is the expected result?",
      options: [
        "A. System. LimitException: To many SOQL Queries on Account.",
        "B. System. QueryException: To many DML Statement errors on Contact",
        "C. System. LimitException: Too many SOQL Queries on Contract",
        "D. System. QueryException: List has more than one row after Assignment on Account.",
      ],
      answer: "D",
      title: "Question 2",
    },
    {
      content:
        "What are three benefits of using declarative customizations over code? Choose 3 answers",
      options: [
        "A. Declarative customizations are not subject to governor limits.",
        "B. Declarative customizations cannot generate run time errors.",
        "C. Declarative customizations generally require less maintenance.",
        "D. Declarative customizations will automatically update with each Salesforce release.",
        "E. Declarative customizations do not require user testing.",
      ],
      answer: "A,D,E",
      title: "Question 3",
    },
    {
      content:
        "A developer is building a Lightning web component that retrieves data from Salesforce and assigns it to the record property.What must be done in the component to get the data from Salesforce?A)B)C)D)",
      options: ["A. Option D", "B. Option C", "C. Option B", "D. Option A"],
      answer: "C",
      title: "Question 4",
    },
    {
      content:
        "A developer created a custom component to display an HTML table. The developer wants to be able to use the component on different Visualforce Pages and specify different header text for the table.Which tag should the developer use inside the component?",
      options: [
        "A. <apex:attribute>",
        "B. <apex:param>",
        "C. <apex:variable>",
        "D. <apex:define>",
      ],
      answer: "A",
      title: "Question 5",
    },
    {
      content:
        "Business rules require a Contact to always be created when a new Account is created. What can be used when developing a custom screen to ensure an Account is not created if the creation of the Contact fails?",
      options: [
        "A. use the Database.Delete method if the Contact insertion fails.",
        "B. Disable validation rules on Contacts and set default values with a Trigger.",
        "C. use the Database.Insert method with allOrNone set to False.",
        "D. use setSavePoint() and rollback() with a try/catch block.",
      ],
      answer: "D",
      title: "Question 6",
    },
    {
      content: "What is the transaction limit for the number of SOSL queries?",
      options: [
        "A. 200 (synchronous), 100 (async)",
        "B. 100 (synchronous), 200 (async)",
        "C. 2,000",
        "D. There is no limit",
        "E. 20",
      ],
      answer: "E",
      title: "Question 7",
    },
    {
      content:
        "When developing a Visualforce page that will be used by a global organization that does business in many languages and many currencies, which feature should be used? (Choose three.)",
      options: [
        "A. Global Labels",
        "B. Translation Workberic",
        "C. convertCurrency()",
        "D. Custom Labels",
        "E. getLocalCurrency()",
      ],
      answer: "B,C,D",
      title: "Question 8",
    },
    {
      content:
        "A developer is writing a Visualforce page that queries accounts in the system and presents a data table with the results. The users want to be able to filter the results based on up to five fields. However, the users want to pick the five fields to use as filter fields when they run the page.Which feature of Apex code is required to facilitate this solution?",
      options: [
        "A. REST API",
        "B. Dynamic Schema binding",
        "C. describeSObjects()",
        "D. SOSL queries",
      ],
      answer: "C",
      title: "Question 9",
    },
    {
      content:
        "Line 1 public class AttributeTypes Line 2 { Line 3 private final String[] arrayItems; Line 4 Line 5 @AuraEnabled Line 6 public List<String> getStringArray() { Line 7 Strings+ arrayItems = new String*+, 'red', 'green', 'blue' -; Line 8 return arrayItems; Line 9 } Line 10 } Consider the Apex controller above that is called from a Lightning Aura Component. What is wrong with it?",
      options: [
        "A. Line 6: method must be static",
        "B. Line 8: method must first serialize the list to JSON before returning",
        "C. Line 1: class must be global",
        "D. Lines 1 and 6: class and method must be global",
      ],
      answer: "A",
      title: "Question 10",
    },
    {
      content:
        "What is the best practice to initialize a Visualforce page in a test class?",
      options: [
        "A. Use Test, setCurrentPage(Page.MyTestPage);",
        "B. Use Test.setCurrentpage,MyTestPage;",
        "C. Use Test.currentpage, getParameter, put (MyTestPage);",
        "D. Use controller,currentPage, setPage (MyTestPage",
      ],
      answer: "A",
      title: "Question 11",
    },
    {
      content:
        "Customer billing data must be added and updated into Salesforce from a remote system on a weekly basis. Additionally, customer activity information must be extracted from Salesforce and put it into an on-premises data warehouse on a weekly basis.Which approach should be used to import data into Salesforce and export data out of Salesforce, taking into consideration that these imports and exports can interfere with end-user operations during business hours and involve large amounts of data?",
      options: [
        "A. Salesforce Connect to push data to and pull data from the remote systems",
        "B. Call-in directly from each remote system to Salesforce APIs to push and pull the data",
        "C. Replication via third-party ETL to push data into Salesforce and pull data out in batches",
        "D. Batch Apex, where Salesforce pushes data to and pulls data from the remote systems",
      ],
      answer: "A",
      title: "Question 12",
    },
    {
      content:
        "What is the most efficient way in Visualforce to show information based on data filters defined by an end-user for a large volume of data?",
      options: [
        "A. Use filter conditions in a SOQL query to limit data based on data filters",
        "B. Use an Apex controller to refine raw data based on data filters and store the result in a transient variable",
        "C. Use an Apex controller to refine raw data based on data filters and store the result in a static variable",
        "D. Use the rendered condition in Visualforce to limit data based on data filters",
      ],
      answer: "A",
      title: "Question 13",
    },
    {
      content:
        "What level can a hierarchy custom setting be defined for? (Choose three.)",
      options: [
        "A. Organization",
        "B. Profiles",
        "C. Groups",
        "D. Users",
        "E. Roles",
      ],
      answer: "A,B,D",
      title: "Question 14",
    },
    {
      content:
        "For compliance purposes, a company is required to track long-term product usage in their org. The information that they need to log will be collected from more than one object and. over time, they predict they will have hundreds of millions of records.What should a developer use to implement this?",
      options: [
        "A. Big objects",
        "B. Setup Audit Trail",
        "C. Field History Tracking",
        "D. Field Audit Trail",
      ],
      answer: "A",
      title: "Question 15",
    },
    {
      content:
        "A developer receives an error when trying to call a global server-side method using the @remoteAction decorator. How can the developer resolve the error?",
      options: [
        "A. Decorate the server-side method with (static=true).",
        "B. Change the function signature to be private static.",
        "C. Add static to the server-side method signature.",
        "D. Decorate the server-side method with (static=false)",
      ],
      answer: "C",
      title: "Question 16",
    },
    {
      content:
        "A developer wrote a trigger on Opportunity that will update a custom Last Sold Date field on the Opportunity's Account whenever an Opportunity is dosed. In the test class for the trigger, the assertion to validate the Last Sold Date field fails.What might be causing the failed assertion?",
      options: [
        "A. The test class has not re-queried the Account record after updating the Opportunity.",
        "B. The test class is not using System.runAs() to run tests as a Salesforce administrator.",
        "C. The test class has not defined an Account owner when inserting the test data.",
        "D. The test class has not implemented seeAIIData-truwh the test method.",
      ],
      answer: "A",
      title: "Question 17",
    },
    {
      content:
        "A developer has a Batch Apex process, Batch_Account_Sales, that updates the sales amount for 10,000 Accounts on a nightly basis. The Batch Apex works as designed In the sandbox. However, the developer cannot get code coverage on the Batch Apex class.The test class is below:What is causing the code coverage problem?",
      options: [
        "A. The batch process will not recognize new accounts created in the same session",
        "B. The account creation already sets the sates amount to 0.",
        "C. The batch needs more than one account record created.",
        "D. The executeBatch must fail within test. startTest ( ) and - test. stopTest().",
      ],
      answer: "D",
      title: "Question 18",
    },
    {
      content:
        "The Account edit button must be overridden in an org where a subset of users still use Salesforce Classic. The org already has a Lightning Component that will do the work necessary for the override, and the client wants to be able to reuse it,How should a developer implement this?",
      options: [
        "A. Override the edit button for Lightning with a Lightning Page; and for Classic, override the edit button with a Visualforce pag That contains the Lightning Component.",
        "B. Override the edit button for both Lightning and Classic with a Lightning Component.",
        "C. the edit button for both Lightning and Classic with a new Visualforce page.",
        "D. Override the edit button for Lightning with a Lightning Component; and for Classic, override the edit button with a Visualforce page that contains the Lightning Component.",
      ],
      answer: "D",
      title: "Question 19",
    },
    {
      content:
        "A company uses an external system to manage its custom account territory assignments. Every quarter, millions of Accounts may be updated in Salesforce with new Owners when the territory assignments are completed in the external system. What is the optimal way to update the Accounts from the external system?",
      options: [
        "A. SOAP API",
        "B. Apex REST Web Service",
        "C. Bulk API",
        "D. Composite REST API",
      ],
      answer: "B",
      title: "Question 20",
    },
    {
      content:
        "How should a developer verify that a specific Account record is being tested in a test class for a visualforce controller?",
      options: [
        "A. Insert the Account in the test class, instantiate the page reference in the test class, then use System.currentPageReference().getParameters{}.put() to set the Account ID.",
        "B. Instantiate the page reference in the test class, insert the Account in the test class, then use System.setParentRecordld().get() to set the Account ID.",
        "C. Insert the Account into Salesforce, instantiate the page reference in the test class, then use System.setParentRecordId().get() to set the Account ID.",
        "D. Instantiate the page reference in the test class, insert the Account in the test class, then use seeAHData-true to view the Account.",
      ],
      answer: "A",
      title: "Question 21",
    },
    {
      content:
        "A developer is asked to build a solution that will automatically send an email to the Customer when an Opportunity stage changes. The solution must scale to allow for 10,000 emails per day. The criteria to send the email should be evaluated after all Workflow Rules have fired. What is the optimal way to accomplish this?",
      options: [
        "A. Use a SingleEmailMessage() with an Apex Trigger.",
        "B. Use an Email Alert with Process Builder.",
        "C. Use a Workflow Email Alert.",
        "D. Usea MassEmailMessage() with an Apex Trigger.",
      ],
      answer: "B",
      title: "Question 22",
    },
    {
      content:
        "How can the DISTANCE and GEOLOCATION functions be used i|n SOQL queries? (Choose two.)",
      options: [
        "A. To get the distance results from a latitude and longitude",
        "B. To order results by distance from a latitude or longitude",
        "C. To filter results based on distance from a latitude and longitude",
        "D. To group results in distance ranges from a latitude and longitude",
      ],
      answer: "B,C",
      title: "Question 23",
    },
    {
      content:
        'What is the correct order of execution for Visualforce Page "get" requests (initial page visit)?',
      options: [
        "A. Evaluate constructors, extensions, and expression on attribute definitions on any custom components present2) Evaluate constructors on controller and extensions3) Evaluate expressions, <apex:page> attribute actions, and other method calls (getters/setters) on main page4) If there's a <apex:form> element, create the view state5) Send HTML to Browser",
        "B. Evaluate constructors on controller and extensions2) Evaluate constructors, extensions, and expression on attribute definitions on any custom components present3) Evaluate expressions, <apex:page> attribute actions, and other method calls (getters/setters) on main page4) If there's a <apex:form> element, create the view state5) Send HTML to Browser",
        "C. Evaluate constructors on controller and extensions2) If there's a <apex:form> element, create the view state3) Evaluate expressions, <apex:page> attribute actions, and other method calls (getters/setters) on main page4) Evaluate constructors, extensions, and expression on attribute definitions on any custom components present5) Send HTML to Browser",
      ],
      answer: "B",
      title: "Question 24",
    },
    {
      content:
        "When developing a Lightning web component, which setting displays lightning-layout-items in one column on small devices, such as mobile phones, and in two columns on tablet-size and desktop-size screens?",
      options: [
        'A. Set size=M6" mobile-device-size="12"',
        'B. Set size="12" medium-device-size="6"',
        'C. Set size="12" tablet-device-size="6"',
        'D. Set size="6" small-device-size="12"',
      ],
      answer: "B",
      title: "Question 25",
    },
    {
      content:
        "When calling a RESTful web service, a developer receives a JSON payload that has a data hierarchy that is nested three levels deep. How can the developer describe the external data?",
      options: [
        "A. Declare a class with three levels and deserialize the JSON typed with this class.",
        "B. Deserialize the data untyped and then process it.",
        "C. Use the ANT migration tool, the custom metadata API, or the Dataloader.",
        "D. Use middleware to flatten the JSON and consume it as a new custom object.",
      ],
      answer: "B",
      title: "Question 26",
    },
    {
      content:
        "A developer is working on code that requires a call to an external web service from a batch. How should the developer enable this functionality?",
      options: [
        "A. Implement an @future method for the callout, and invoke it from the batch",
        "B. Implement a custom System.CalloutException class",
        "C. Include Database.AllowCallout() in the class definition",
        'D. Specify "callout=true" in the batch implementation',
      ],
      answer: "C",
      title: "Question 27",
    },
    {
      content:
        "A company wants to incorporate a third-party web service to set the Address fields when an Account is inserted, if they have not already been set. What is the optimal way to achieve this?",
      options: [
        "A. Create a Process, call an Apex @InvocableMethod from it, and make the callout from that Apex method.",
        "B. Create a Process, call an Apex @future(callout=true) method from it, and make the callout from that Apex method.",
        "C. Create an after insert trigger, call an Apex @InvocableMethod method from it, and make the callout from that Apex method",
        "D. Create an after insert trigger, call an @future(callout=true) method from it, and make the callout from that Apex method.",
      ],
      answer: "D",
      title: "Question 28",
    },
    {
      content:
        "A company has a custom object, Sales Demo Request, that has a lookup to an Opportunity. It is required that a Sales Demo Request record be created when an Opportunity's Probability is greater than 50%. What is the optimal way to automate this?",
      options: [
        "A. Create a Workflow on Opportunity.",
        "B. Use an Apex Trigger on Opportunity.",
        "C. Build a Process on Opportunity",
        "D. Build a Flow on Opportunity.",
      ],
      answer: "B",
      title: "Question 29",
    },
    {
      content:
        "How should a developer assert that a trigger with an asynchronous process has successfully run?",
      options: [
        "A. Create all test data in the test class, invoke Test.startTest() and Test.stopTest() and then perform assertions,",
        "B. Create all test data, use @future In the test class, then perform assertions.",
        "C. Create at test data in the test class, use System.runAs() to invoke the trigger, then perform assertions.",
        "D. Insert records into Salesforce, use seeAllData-true, then perform assertions.",
      ],
      answer: "A",
      title: "Question 30",
    },
    {
      content:
        "A Developer wishes to improve runtime performance of Apex calls by caching results on the client. What is the best way to implement this?",
      options: [
        "A. Set a cookie in the browser for use upon return to the page.",
        "B. Decorate the server-side method with @AuraEnabled(cacheable=true).",
        "C. Call the setStorable() method on the action in the JavaScript client-side code.",
        "D. Decorate the server-side method with @AuraEnabled(storable=true).",
      ],
      answer: "D",
      title: "Question 31",
    },
    {
      content:
        "A company has a custom object. Request__c. that has a field, Completed__c. and a Lookup to Opportunity, Opportunity__c.Which SOQL query will get a unique list of all of the Opportunity records that have a Completed Request?",
      options: ["A. ", "B. ", "C. ", "D. "],
      answer: "C",
      title: "Question 32",
    },
    {
      content:
        "During the order of execution of a Visualforce page GET request, what happens after this step? Evaluate constructors on controllers and extensions",
      options: [
        "A. Evaluate expressions, action attributes, and method calls",
        "B. Evaluate constructors and expressions on custom components",
        "C. Create view state if <apex: form> exists",
        "D. Send the HTML response to the browser",
      ],
      answer: "B",
      title: "Question 33",
    },
    {
      content:
        'What is the transaction limit on the number of "sendEmail" method calls?',
      options: ["A. 20", "B. 10", "C. 50", "D. 100", "E. There is no limit"],
      answer:
        "B  Reference: The reserveEmailCapacity methods let you declare how many emails you want to send prior to actually sending, allowing you to handle limit errors prematurely ",
      title: "Question 34",
    },
    {
      content:
        'A company has a custom object. Order__c, that has a custom picklist field. Status__c, with values of New, In Progress," or Fulfilled and a lookup field, Contact_c, to Contact.Which SOQL query wrii return a unique list of all the Contact records that have no Fulfilled Orders?',
      options: [
        "A. SELECT iD FROM Contact WHERE id NOT IN (SELECT id From order_c WHERE_c = Fulfilled')",
        "B. SELECT Contact_c FROM Order_c Where Status_c <> ;Fulfilled'",
        "C. SELECT Contact_c From order_c Where id NOT IN (SELECT id FROM_c Where States_c + Fulfilled')",
        "D. SELECT id FROM Contact WHERE id NOT IN (SELECT Contact _c FROM order_c Where Status_c = fulfilled')",
      ],
      answer: "D",
      title: "Question 35",
    },
    {
      content:
        "A developer is building a Lightning web component to get data from an Apex method called getData that takes a parameter, name. The data should be retrieved when the user clicks the Load Data button.Exhibit.What must be added to get the data?",
      options: [
        "A. Add @wire(getData, (name: $name')} to the account field and this, account = getData ( ) ; to t loadData ( ) function.",
        "B. Add this, account = getData (this,name); to the loadData ( ) function.",
        "C. Add @wire(getData, {name: $name'}) to the account field and delete loadData ( ) because it is not needed.",
        "D. Add getData ({ name; this,name}) , then (result=> { this.account = result}) to the LeadData ( ) function.",
      ],
      answer: "D",
      title: "Question 36",
    },
    {
      content:
        "Given the following containment hierarchy:What is the correct way to communicate the new value of a property named ''passthrough'' to my-parent component if the property is defined within my-child-component?A)B)C)D)",
      options: ["A. Option A", "B. Option B", "C. Option D", "D. Option C"],
      answer: "B",
      title: "Question 37",
    },
    {
      content: "What is the transaction limit on the number of callouts?",
      options: ["A. 200", "B. 100", "C. 50", "D. 150", "E. There is no limit"],
      answer: "C",
      title: "Question 38",
    },
    {
      content:
        "A developer is writing code that requires making callouts to an external web service. Which scenario necessitates that the callout be made in an @future method?",
      options: [
        "A. The callouts will be made in an Apex Test class.",
        "B. The callouts will be made in an Apex Trigger.",
        "C. over 10 callouts will be made in a single transaction.",
        "D. The callout could take longer than 60 seconds to complete.",
      ],
      answer: "B",
      title: "Question 39",
    },
    {
      content:
        "A custom Aura component, AddressValidation,cmp,exists in the system. The Salesforce admin for the organization is unable to find and select the component while creating a quick action for the Account sObject.What should the developer do to ensure that AddressValidation,cmp can be selected when creating a quick action?",
      options: [
        "A. Ensure the component implements the lightning:actionOverride interface.",
        "B. Ensure the component implements the force:lighningQuickAction.interface.",
        "C. Ensure the access attribute of the aura:component tag is st t Global.",
        "D. Ensure the component implements the force:hasRecordedId interface.",
      ],
      answer: "B",
      title: "Question 40",
    },
    {
      content:
        "A developer has written the following method:static void processList(List<sobject> input){Which code block can be used to call the method?",
      options: [
        "A. for Account ace : [SELECT Id, Name FROM Account])",
        "B. processList ([FIND 'Acme\" 'RETURNING Account])",
        "C. processList (ace)",
        "D. processList([SELECT Id, Name FROM sObject WHERE Type = 'Account'])",
      ],
      answer: "D",
      title: "Question 41",
    },
    {
      content:
        "Which use case is an appropriate fit for the @future asynchronous Apex method? (Choose two.)",
      options: [
        "A. A developer has long-running methods and needs to prevent delaying an Apex transaction",
        "B. A developer has long-running jobs with large data volumes that need to be performed in batches",
        "C. A developer needs to segregate DML operations and bypass the mixed save DML error",
        "D. A developer has jobs that need larger query results than regular transactions allow",
      ],
      answer: "A,C",
      title: "Question 42",
    },
    {
      content:
        "Universal Containers wants to use a Customer Community with Customer Community Plus licenses to allow their customers access to track how many containers they have rented and when they are due back. Universal Containers uses a Private sharing model for External users.Many of their customers are multi-national corporations with complex Account hierarchies. Each account on the hierarchy represents a department within the same business.One of the requirements is to allow certain community users within the same Account hierarchy to see several departments' containers, based on a custom junction object that relates the Contact to the various Account records that represent the departments.Which solution solves these requirements?",
      options: [
        "A. An Apex trigger that creates Apex managed sharing records based on the junction object's relationships",
        "B. A Visualforce page that uses a custom controller that specifies wither sharing to expose the records",
        "C. Lightning web component on the Community Home Page that uses Lightning Data Services.",
        "D. A custom list view on the junction object with filters that will show the proper records based on owner",
      ],
      answer: "A",
      title: "Question 43",
    },
    {
      content:
        "A developer is building a Lightning web component that displays quantity, unit price, and the total for an order line item. The total is calculated dynamically as the quantity multiplied by the unit price.What must be added to display the total?",
      options: [
        "A. Add Total: {quantity * UnitPrice} in the template.",
        "B. Add get total() { return quantity * unitPrice;} to the JavaScript and Total: {total} in the template.",
        "C. Add calculate Total() {return quantity * unitPrice;} to the javaScript and Total : {calculate Total()} in the template.",
        "D. Add Total; {multiple quantit,y unitprice)} in the template.",
      ],
      answer: "C",
      title: "Question 44",
    },
    {
      content:
        "What are the ways a developer can create test data of Contacts? (Choose two.)",
      options: [
        "A. myDataFactory.createContacts(10)",
        "B. Test.loadData(Contact.sObjectType, 'staticResource')",
        "C. Test.loadTestRecords(Contact.sObjectType, 'staticResource')",
        "D. Test.createTestData ()",
      ],
      answer: "A,B",
      title: "Question 45",
    },
    {
      content:
        "Which method should be used to convert a Date to a String in the current user's locale?",
      options: [
        "A. Date.parse",
        "B. String.format",
        "C. String. valueOf",
        "D. Date.format",
      ],
      answer: "C",
      title: "Question 46",
    },
    {
      content:
        "A developer has requirement to query three fields (id, name, Type) from an Account and first and last names for all Contacts associated with the Account.Which option is the preferred optimized method to achieve this for the Account named 'Ozene Electronics'?",
      options: [
        "A. List 1Contacts = new list ( );for(Contact c ; 1Select firstname, lastname Account, Name Account,ID Account, Type from Contact where Account: Name=' electronics')) ( iContacts.add(c);)",
        "B. Account a = (SELECT ID, Name, Type from Account where name= Ozone Electronics;)list 1contacts = (SELECT firstname, lastname from Contacts where accountid=: a -ID0;",
        "C. Account a = (SELECT ID, Name, Type, (select contat,firstName, Contact,LastName from Account, Contacts) from Account where name; Ozone Electronic' Limit 1 );",
        "D. List 1Accounts = (Select ID, Name, Type from Account Join (Select ID, firstname, lastname form Contact where contact account , name 'ozone electronics));",
      ],
      answer: "C",
      title: "Question 47",
    },
    {
      content:
        "Universal Containers uses a custom Lightning page to provide a mechanism to perform a step-by-step wizard search for Accounts. One of the steps in the wizard is to allow the user to input text into a text field, ERP_Number__c, that is then used in a query to find matching Accounts.A developer receives the exception 'SOQL query not selective enough.Which step should be taken to resolve the issue?",
      options: [
        "A. Move the SOQL query to within an asyncronous process.",
        "B. Mark the ERP_Number__c field as required.",
        "C. Mark the lRP_Number__c field as an external ID.",
        "D. Perform the SOQL query as part of a for loop.",
      ],
      answer: "B",
      title: "Question 48",
    },
    {
      content:
        "Which of the follow be used together in DML operations (transaction)? (Choose two.)",
      options: [
        "A. Opportunity - User",
        "B. Acco u nt - Acco u ntS ha re",
        "C. Account - Order",
        "D. Case - CaseComment",
      ],
      answer: "C,D",
      title: "Question 49",
    },
    {
      content:
        "Consider the above trigger intended to assign the Account to the manager of the Account''s region. Which two changes should a developer make in this trigger to adhere to best practices? Choose 2 answers",
      options: [
        "A. Move the Region__c query to outside the loop.",
        "B. Remove the last line updating accountList as it is not needed.",
        "C. Use a Map accountMap instead of List accountList.",
        "D. Use a Map to cache the results of the Region__c query by Id.",
      ],
      answer: "A,B",
      title: "Question 50",
    },
    {
      content: "What is the transaction limit on the max execution time?",
      options: [
        "A. There is no limit",
        "B. 20 minutes",
        "C. 5 minutes",
        "D. 15 minutes",
        "E. 10 minutes",
      ],
      answer: "E",
      title: "Question 51",
    },
    {
      content:
        "A large company uses Salesforce across several departments. Each department has its own Salesforce Administrator. It was agreed that each Administrator would have their own sandbox in which to test changes. Recently, users notice that fields that were recently added for one department suddenly disappear without warning. Also, Workflows that once sent emails and created tasks no longer do so. Which two statements are true regarding these issues and resolution? Choose 2 answers",
      options: [
        "A. A sandbox should be created to use as a unified testing environment instead of deploying Change Sets directly to production.",
        "B. The administrators are deploying their own Change Sets over each other, thus replacing entire Page Layouts and Workflows in Production",
        "C. Page Layouts should never be deployed via Change Sets, as this causes Workflows and Field-level Security to be reset and fields to disappear.",
        "D. The administrators are deploying their own Change Sets, thus deleting each other's fields from the objects in production.",
      ],
      answer: "A,B",
      title: "Question 52",
    },
    {
      content:
        "Which three approaches should a developer Implement to obtain the best performance for data retrieval when building a Lightning web component?Choose 3 answers",
      options: [
        "A. Use layoutTypes : ['Full'] to display a set of fields.",
        "B. Use the Lightning Data Service.",
        "C. Use (cacheable-true) whenever possible.",
        "D. Use getRecordUi to obtain metadata.",
        "E. Use lazy load for occasionally accessed data.",
      ],
      answer: "B,C,E",
      title: "Question 53",
    },
    {
      content:
        "A developer needs to design a custom object that will be integrated into a back-end system.What should the developer do to ensure good data quality and to ensure that data imports, integrations, and searches perform well? (Choose two.)",
      options: [
        "A. Configure a custom field as unique",
        "B. Configure a custom field as Salesforce ID",
        "C. Configure a custom field as indexed",
        "D. Configure a custom field as external ID",
      ],
      answer: "A,D",
      title: "Question 54",
    },
    {
      content:
        "This sales team needs a custom Visualforce page to enter sales orders. When a product is selected on the Visualforce page, a web service is invoked to determine if the product is in stock, and the result is displayed on the page.How can a developer write this page to display the result of the web service and ensure governor limits for concurrent usage are not exceeded?",
      options: [
        "A. Use visualforce Remoting to handle the web service callout.",
        "B. Use an Apex trigger with callout=true annotation.",
        "C. Use Continuation that is invoked when a Submit button is clicked.",
        "D. Use the Salesforce Metadata API in the web service callout.",
      ],
      answer: "C",
      title: "Question 55",
    },
    {
      content:
        "What is the best way to display field-level error messages in Lightning?",
      options: [
        "A. auraxomponent",
        "B. apex:message",
        "C. ukoutputText",
        "D. ukinputDefaultError",
      ],
      answer: "D",
      title: "Question 56",
    },
    {
      content:
        "A developer has created a Visualforce page that uses a third-party JavaScript framework. The developer has decided to supply data to the JavaScript functions using JavaScript Remoting for Apex Controllers.What is the correct syntax to declare a remote method in Apex? (Choose two.)",
      options: [
        "A. @RemoteAction global String getTable()",
        "B. @RemoteAction global static String getTable()",
        "C. @RemoteObject global static String getTableQ",
        "D. @RemoteAction public static String getTable()",
      ],
      answer: "B,D",
      title: "Question 57",
    },
    {
      content:
        "A Visualforce page contains an industry select list and displays a table of Accounts that have a matching value in their Industry field.When a user changes the value in the industry select list, the table of Accounts should be automatically updated to show the Accounts associated with the selected industry.What is the optimal way to implement this?",
      options: [
        "A. Add an <apex: actionSupport> within the <apex: selectOptions>.",
        "B. Add an <apex: actionSupport> within the <apex:selectList>.",
        "C. Add an <apex: actionFunction> within the <apex: select List >.",
        "D. Add an <apex: actionFunction> within the <apex : selectOptions>.",
      ],
      answer: "C",
      title: "Question 58",
    },
    {
      content:
        "An org has a requirement that an Account must always have one and only one Contact listed as Primary. So selecting one Contact will de-select any others. The client wants a checkbox on the Contact called 'Is Primary' to control this feature. The client also wants to ensure that the last name of every Contact is stored entirely in uppercase characters. What is the optimal way to implement these requirements?",
      options: [
        "A. write a single trigger on Contact for both after update and before update and callout to helper classes to handle each set of logic.",
        "B. Write an after update trigger on Contact for the Is Primary logic and a separate before update trigger on Contact for the last name logic.",
        "C. write an after update trigger on Account for the Is Primary logic and a before update trigger on Contact for the last name logic.",
        "D. write a Validation Rule on the Contact for the Is Primary logic and a before update trigger on Contact for the last name logic.",
      ],
      answer: "A",
      title: "Question 59",
    },
    {
      content:
        "A developer has built a multi-page wizard using a single Custom Controller to query and update data. Users are complaining that the pages are loading slowly.What will improve performance? (Choose three.)",
      options: [
        "A. Using selective queries",
        "B. Reducing the view state",
        "C. Setting the Apex Page attribute cache=true",
        "D. Turning off the standard stylesheet",
        "E. Using actionRegion and rerender",
      ],
      answer: "A,B,C",
      title: "Question 60",
    },
    {
      content:
        "A developer is trying to access org data from within a test class. Which sObject type requires the test class to have the (seeAllData=true) annotation?",
      options: ["A. Profile", "B. RecordType", "C. User", "D. Report"],
      answer: "A",
      title: "Question 61",
    },
    {
      content:
        "The Salesforce admin at Cloud Kicks created a custom object called Region__c to store all postal zip codes in the United States and the CloudKicks sales region the zip code belongs to.Cloud Kicks wants a trigger on the Lead to populate the Region based on the Lead's zip code.A)B)D)",
      options: ["A. Option C", "B. Option B", "C. Option D", "D. Option A"],
      answer: "D",
      title: "Question 62",
    },
    {
      content:
        "Consider the following code snippet, depicting an Azure component:Which two interfaces can the developer implement to make the component available as a quick action?Choose 2 answers",
      options: [
        "A. Force:lightningQuicAction",
        "B. Force:hasRecordId",
        "C. Lightning QuickActionAPI",
        "D. Force:lightningQuickActionWithoutHeader",
        "E. Force hasObjectName",
      ],
      answer: "A,D",
      title: "Question 63",
    },
    {
      content:
        "An Apex trigger creates an Order__c record every time an Opportunity is won by a Sales Rep. Recently the trigger is creating two orders. What is the optimal method for a developer to troubleshoot this?",
      options: [
        "A. Set up debug logging for every Sales Rep, then monitor the logs for errors and exceptions.",
        "B. Turn off all Workflow Rules, then turn them on one at time to see which one causes the error.",
        "C. add system.debug() statements to the code and use the Developer Console logs to trace the code.",
        "D. Run the Apex Test Classes for the Apex trigger to ensure the code still has sufficient code coverage.",
      ],
      answer: "C",
      title: "Question 64",
    },
    {
      content:
        "What Salesforce tool lets you deploy/retrieve metadata, check status of apex jobs, and check responses of REST calls?",
      options: [
        "A. Streaming API",
        "B. Force.com Migration Tool",
        "C. Workbench",
        "D. Developer Console",
      ],
      answer: "C",
      title: "Question 65",
    },
    {
      content:
        "Part of a custom Lightning Component displays the total number of Opportunities in the org, which is in the millions. The Lightning Component uses an Apex Controller to get the data it needs. What is the optimal way for a developer to get the total number of Opportunities for the Lightning Component?",
      options: [
        "A. Apex Batch job that counts the number of Opportunity records",
        "B. SOQL for loop that counts the number of Opportunities records",
        "C. COUNT() SOQL aggregate query on the Opportunity object",
        "D. SUM() SOQL aggregate query on the Opportunity object",
      ],
      answer: "C",
      title: "Question 66",
    },
    {
      content:
        "In a VisualForce page with a VisualForce component that has rendered set to false when the page loads, how can a developer ensure it will show on a re-render?",
      options: [
        "A. Set the rendered attribute of the component to true and re-render the component.",
        "B. Set the rendered attribute of the component to true and re-render a parent component.",
        "C. Set the re-render attribute of the component to true.",
        "D. Perform a full page refresh since rendered elements cannot be re-rendered without refreshing.",
      ],
      answer: "B",
      title: "Question 67",
    },
    {
      content:
        "A developer has a page with two extensions overriding the Standard controller for Case.What will happen when a user clicks the command button?",
      options: [
        "A. All of the three Save methods will be executed",
        "B. Save from CaseExtensionTwo will be executed",
        "C. Save from Case Standard Controller will be executed",
        "D. Save from CaseExtensionOne will be executed",
      ],
      answer: "D",
      title: "Question 68",
    },
    {
      content:
        "A developer is using a third-party JavaScript library to create a custom user interface in Visualforce. The developer needs to use JavaScript to get data from a controller method in response to a user action.How can the developer accomplish this?",
      options: [
        "A. Use the $Controller global variable to access the controller method via JavaScript",
        "B. Use <apex:actionFunction> to create a JavaScript wrapper for the controller method",
        "C. Use the @RemoteAction annotation on the method definition with JavaScript Remoting",
        "D. Use <apex:actionSupport> to enable JavaScript support for the controller method",
      ],
      answer: "C",
      title: "Question 69",
    },
    {
      content:
        "Universal Containers allows customers to log into a Salesforce Community and update their orders via a custom Visualforce page. Universal Containers' sales representatives can edit the orders on the same Visualforce page.What should a developer use in an Apex test class to test that record sharing is enforced on the Visualforce page?",
      options: [
        "A. Use System.profllels() to test as an administrator and a community user,",
        "B. Use System.runAs() to test as an administrator and a community user.",
        "C. Use System.runAs() to test as a sales rep and a community user.",
        "D. Use System.profilels() to test as a sales rep and a community user.",
      ],
      answer: "C",
      title: "Question 70",
    },
    {
      content:
        "A company processes Orders within their Salesforce instance. When an Order's status changes to 'Paid' it must notify the company's order management system (OMS). The OMS exposes SOAP web service endpoints to listen for when to retrieve the data from Salesforce. What is the optimal method to implement this?",
      options: [
        "A. Create an Apex trigger and make a callout to the OMS from the trigger.",
        "B. Create an Outbound Message that contains the session ID and send it to the OMS.",
        "C. Generate the Enterprise WSDL and use it to make a callout to the OMS.",
        "D. Generate the Partner WSDL and use it to make a callout to the OMS.",
      ],
      answer: "C",
      title: "Question 71",
    },
    {
      content:
        "Which use case can only be performed by using asynchronous Apex?",
      options: [
        "A. Scheduling a batch process to complete in the future",
        "B. Processing high volumes of records",
        "C. Calling a web service from an Apex trigger",
        "D. Updating a record after the completion of an insert",
      ],
      answer: "C",
      title: "Question 72",
    },
    {
      content:
        "A company has the Lightning Component above that allows users to dick a button to save their changes and redirects them to a different page. Currently, when the user hits the Save button the records are getting saved, but they are not redirected.Which three techniques can a developer use to debug the JavaScript? Choose 3 answers",
      options: [
        "A. Use Developer Console to view the debug log.",
        "B. Enable Debug Mode for Lightning components for the user.",
        "C. Use Developer Console to view checkpoints.",
        "D. Use the browser's dev tools to debug the JavaScript.",
        "E. Use consde.log() messages in the JavaScript.",
      ],
      answer: "B,D,E",
      title: "Question 73",
    },
    {
      content:
        "An Apex class does not achieve expected code coverage. The testSetup method explicitly calls a method in the Apex class. How can the developer generate the code coverage?",
      options: [
        "A. Verify the user has permissions passing a user into System.runAs().",
        "B. Call the Apex class method from a testMethod instead of the testSetup method.",
        "C. Add @testVisible to the method in the class the developer is testing.",
        "D. Use system.assert() in testSetup to verify the values are being returned.",
      ],
      answer: "B",
      title: "Question 74",
    },
    {
      content:
        "Which type of controller is best suited when you want all of the basic DML functions from an object's normal new/edit page?",
      options: [
        "A. Standard List/Set Controller",
        "B. Custom Controller",
        "C. Standard Controller",
        "D. Controller Extensions",
      ],
      answer: "C",
      title: "Question 75",
    },
    {
      content:
        "A company represents their customers as Accounts in Salesforce. All customers have a unique Customer_Number__c that is unique across all of the company's systems. They also have a custom Invoice__c object, with a Lookup to Account, to represent invoices that are sent out from their external system. This company wants to integrate invoice data back into Salesforce so Sales Reps can see when a customer is paying their bills on time. What is the optimal way to implement this?",
      options: [
        "A. Ensure Customer_Number__c is an External ID and that a custom field Invoice_Number__c is an External ID and Upsert invoice data nightly.",
        "B. Create a cross-reference table in the custom invoicing system with the Salesforce Account ID of each Customer and insert invoice data nightly.",
        "C. Query the Account Object upon each call to insert invoice data to fetch the Salesforce ID corresponding to the Customer Number on the invoice",
        "D. Use Salesforce Connect and external data objects to seamlessly import the invoice data into Salesforce without custom code.",
      ],
      answer: "A",
      title: "Question 76",
    },
    {
      content:
        "A developer created a JavaScript library that simplifies the development of repetitive tasks and features and uploaded the library as a static resource called jsutils in Salesforce. Another developer is coding a new Lightning web component (LWC) and wants to leverage the library.Which statement properly loads the static resource within the LWC?",
      options: [
        "A. import {jsUtilities} from '@salesforce/reaourceUrljsUtila';",
        "B. import jUtilities from '@salesforce/reaourceUrljsUtila';",
        "C. <lightning-require scripts=N { ! SReaource. j sUtils}''/>",
        "D. const jsUtility = SA.get ('SReaource.jsUtils');",
      ],
      answer: "B",
      title: "Question 77",
    },
    {
      content:
        "A developer built a Component to be used at the front desk for guests to self-register upon arrival at a kiosk. The developer is now asked to create a Component for the Utility Tray to alert Users whenever a guest has arrived at the front desk. What should be used?",
      options: [
        "A. Application Event",
        "B. Component Event",
        "C. Changelog",
        "D. DML Operation",
      ],
      answer: "A",
      title: "Question 78",
    },
    {
      content:
        "A developer must create a custom pagination solution for accessing approximately 2000 records and displaying 50 records on each page. Data from Salesforce will be accessed via an API and not via Apex.How can the developer meet these requirements? (Choose two.)",
      options: [
        "A. Use CURSOR 50 in SOQL queries",
        "B. Use LIMIT 50 in SOQL queries",
        "C. Use OFFSET in SOQL queries",
        "D. Use a StandardSetController",
      ],
      answer: "B,C",
      title: "Question 79",
    },
    {
      content:
        "Ursa Major Solar has a custom object, serviceJcb__c, with an optional Lookup field to Account called Partr,er_service_Provider__c.The TocaUobs__c field on Account tracks the total number of serviceJcb__o records to which a partner service provider Account is related.What should be done to ensure that the TotalJobs_c field is kept up to date?",
      options: [
        "A. Change TotalJobi__a to a roll-up summary field.",
        "B. Create an Apex trigger on serviceJob__c",
        "C. Implement a workflow cross-object field update.",
        "D. Build a Process Builder with an invocable action.",
      ],
      answer: "B",
      title: "Question 80",
    },
    {
      content:
        "Consider the controller code above that is called from a Lightning component and returns data wrapped in a class.Consider the controller code above that is called from a Lightning component and returns data wrapped in a class.The developer verified that the Queries return a single record each and there is error handing in the Lightning component, but the component is not getting anything back when calling the controller getSomeData().What is wrong?",
      options: [
        "A. The member's Name and Option of the class MyDataWrapper should be annotated with @AuraEnabled too.",
        "B. Instances of Apex classes such as MyDataWrapper cannot be returned to a Lightning component.",
        "C. The member's Name and Option should not have getter and setter.",
        "D. The member's Name and Option should not be declared public.",
      ],
      answer: "A",
      title: "Question 81",
    },
    {
      content:
        "A lead developer is creating tests for a Lightning web component. The component re-renders when a property called bypassSelection. changes its value.What should the developer use to the test that the component re-renders successfully when the property changes?",
      options: [
        "A. Promise. resolve ( )",
        "B. Windows, set State ( )",
        "C. Windows, Setinterval ( )",
        "D. dispatchEvent (new CustomEvent (' bypassSelection'))",
      ],
      answer: "C",
      title: "Question 82",
    },
    {
      content:
        "When testing batch classes, what must a developer do? (Choose two.)",
      options: [
        "A. Use seeAIIData=true",
        "B. Encapsulate code in Test.startTestQ and Test.stopTestQ",
        'C. Call the class* "execute" method',
        "D. Limit the amount of records you test to < 200",
      ],
      answer: 'B,D  If you use "seeAIIData=true," you are a bad person ',
      title: "Question 83",
    },
    {
      content:
        "The progress of an apex job queued is using the System.enqueueJob method and needs to be monitored.Which options are valid? (Choose two.)",
      options: [
        "A. Use the Scheduled Jobs page in setup",
        "B. Query the AsyncApexJob record",
        "C. Use the Apex Jobs page in setup",
        "D. Query the Queueable Apex record",
      ],
      answer: "B,C",
      title: "Question 84",
    },
    {
      content:
        "A company has a custom object Sales_Help_Request__c that has a Lookup relationship to Opportunity. The Sales_Help_Request__c has a number field, Number_of_Hours__c, that represents the amount of time spent on the Sales_Help_Request__c.A developer is tasked with creating a field, Total_Hours__c, on Opportunity that should be the sum of all of the Number_of_Hours__c values for the Sales_Help_Request__c records related to that Opportunity.What should the developer use to implement this?",
      options: [
        "A. A trigger on Sales_Help_Request__c",
        "B. A roll-up summary field on the Opportunity object",
        "C. A workflow rule on the Sales_Help_Request__c object",
        "D. A trigger on the Opportunity object",
      ],
      answer: "A",
      title: "Question 85",
    },
    {
      content: "Which of the following about Dynamic Apex is incorrect?",
      options: [
        "A. You can retrieve the sObject type from an Id by calling .getSObjectTypeQ",
        "B. getDescribe() can get you a variety of info on a particular object/field",
        "C. Schema.getGlobalDescribeQ gives you a map of all sObject",
        "D. In dynamic SOQL, you can use bind variables and bind variable fields",
      ],
      answer:
        "D  Reference: While you can use simple bind variables in dynamic SOQL, you cann|ot use bind variable fields (e.g. :myVariable.field1_c) Use escapeSingleQuotes to prevent SOQL injection ",
      title: "Question 86",
    },
    {
      content:
        "A developer must create a way for external partners to submit millions of leads into Salesforce per day-How should the developer meet this requirement?",
      options: [
        "A. Create a web service on Heroku that uses Heroku Connect",
        "B. Host a Web-to-Lead form on the company website",
        "C. Publicly expose an Apex Web Service via Force.com Sites",
        "D. Publicly expose a Visualforce page via Force.com Sites",
      ],
      answer: "A",
      title: "Question 87",
    },
    {
      content:
        "A developer is developing a reuseable Aura Component that will reside on an sObject Lightning Page with the following HTML snippet:<aura:component implements=\"force:hasRecordId,flexipage:availableForAIIPageTypesM><div>Hello!</div></aura:component>How can the component's Controller get the context of the Lightning Page that the sObject is on without requiring additional test coverage?",
      options: [
        "A. Add force:hasSobjectName to the implements.",
        "B. Create a design attribute and configure via App builder.",
        "C. Set the sObject type as a component attribute.",
        "D. Use the getSObjectTypeQ method in an Apex class.",
      ],
      answer: "A",
      title: "Question 88",
    },
    {
      content:
        "What is a valid request for the following REST method? (Choose two.)@HttpPost global static void myPostMethod(String si, Integer il, Boolean bl, String 52)",
      options: [
        "A. <request> <sl>my first string</sl> <ll>123</il> <32>my second string</32> <bl>false</bl> </request>",
        'B. il" : 123, "SI" : "my first string", "S2" : "my second string", "bl" : false',
        'C. <request> <sl>"my first string"</sl> <il>123</il> <sZ>!,my second string"</32> <bl>false</bl> </request>',
        'D. si" : "my first string", 11" : "123", "bl" : "false", "S2" : "my second string"',
      ],
      answer: "B,C",
      title: "Question 89",
    },
    {
      content:
        "Which scenario requires a developer to use an Apex callout instead of Outbound Messaging?",
      options: [
        "A. The Target system uses a REST API.",
        "B. The Target system uses a SOAP API.",
        "C. The callout needs to be asynchronous.",
        "D. The callout needs to be invoked from a Workflow Rule.",
      ],
      answer: "A",
      title: "Question 90",
    },
    {
      content:
        "A lead developer for a Salesforce organization needs to develop a page-centric application that allows the user to interact with multiple objects related to a Contact The application needs to implement a third-party JavaScript framework such as Angular, and must be made available in both Classic and Lightning Experience.Given these requirements, what is the recommended solution to develop the application?",
      options: [
        "A. Aura Components",
        "B. Visualforce",
        "C. Lightning Web Components",
        "D. Lightning Experience Builder",
      ],
      answer: "B",
      title: "Question 91",
    },
    {
      content:
        "What should be added to the setup, in the location indicated, for the unit test above to create the controller extension for the test?A)B)C)D)",
      options: ["A. Option D", "B. Option B", "C. Option C", "D. Option A"],
      answer: "C",
      title: "Question 92",
    },
    {
      content: "How can Apex be used with Visual Workflow?",
      options: [
        "A. To start a Flow automatically",
        "B. To set the version of a Flow being run",
        "C. To add custom styling to a Flow",
        "D. To control access to a Flow",
      ],
      answer: "A",
      title: "Question 93",
    },
    {
      content:
        "Which two objects can be inserted in the same transaction? (Choose two.)",
      options: [
        "A. Case and CaseComment",
        "B. Account and AccountShare",
        "C. Opportunity and User",
        "D. Account and Group",
      ],
      answer: "A,B",
      title: "Question 94",
    },
    {
      content:
        "As part of their quoting and ordering process, a company needs to send PDFs to their document storage system's REST endpoint that supports OAuth 2.0. Each Salesforce user must be individually authenticated with the document storage system to send the PDF.What is the optimal way for a developer to implement the authentication to the REST endpoint?",
      options: [
        "A. Hierarchy Custom Setting with an OAuth token custom field",
        "B. Hierarchy Custom Setting with a password custom field",
        "C. Named Credential with an OAuth Authentication Provider",
        "D. Named Credential with Password Authentication",
      ],
      answer: "C",
      title: "Question 95",
    },
    {
      content:
        "Which of the following exceptions cannot be caught and will force an error? (Choose three.)",
      options: [
        "A. LimitException",
        "B. AssertException",
        "C. SObjectExceptions",
        "D. DMLException",
        "E. License exceptions",
        "F. ListException",
      ],
      answer:
        'A,B,E  Reference: SObjectException occurs when accessing a field not queried, or you try to change a field during the wrong dml statement (i.e. an edit-only field being set on insert) Custom exceptions must extend the "Exception" class ',
      title: "Question 96",
    },
    {
      content: "Choose the correct definition for <apex:actionFunction>.",
      options: [
        'A. Can be associated with an AJAX request (actionFunction/actionSupport/actionPoller) and shows content conditionally depending on the status of the request (in progress/complete). Use the "id" field to specify name; use "status" field on related components to connect them',
        "B. Signifies which components should be processed by the server when an AJAX request is generated",
        "C. Adds AJAX support to another component (e.g. onClick, onMouseUp, onFocus, etc.)",
        "D. Allows for controller methods to be called directly from Javascript. Must be| encapsulated in <apex:form> tags. Unlike actionSupport, these function<apex:actionPoller>s can be called directly from Javascript codeB Sends an AJAX request according to the time interval you specify. If this ever gets re-rendered, it resets",
      ],
      answer: "A",
      title: "Question 97",
    },
    {
      content:
        "A company wants to build a custom Lightning Component that will display a specified Account Field Set and that can only be added to the Account record page. Which design resource configuration should be used?",
      options: ["A. ", "B. ", "C. ", "D. "],
      answer: "A",
      title: "Question 98",
    },
    {
      content:
        "A company's support process dictates that any time a Case is closed with a Status of 'Could not fix,' an Engineering Review custom object record should be created and populated with information from the Case, the Contact, and any of the Products associated with the Case. What is the correct way to automate this using an Apex trigger?",
      options: [
        "A. An after update trigger that creates the Engineering Review record and inserts it",
        "B. An after upsert trigger that creates the Engineering Review record and inserts it",
        "C. A before update trigger that creates the Engineering Review record and inserts it ",
        "D. A before update trigger that creates the Engineering Review record and inserts it",
      ],
      answer: "A",
      title: "Question 99",
    },
    {
      content:
        "Universal Containers wants to use a Customer Community with Customer Community Plus licenses so their customers can track how many of containers they are renting and when they are due back. Many of their customers are global companies with complex Account hierarchies, representing various departments within the same organization. One of the requirements is that certain community users within the same Account hierarchy be able to see several departments' containers, based on a junction object that relates the Contact to the various Account records that represent the departments. Which solution solves these requirements?",
      options: [
        "A. A Custom Report Type and a report Lightning Component on the Community Home Page",
        "B. A Custom List View on the junction object with filters that will show the proper records based on owner",
        "C. A Visualforce page that uses a Custom Controller that specifies without sharing to expose the records",
        "D. An Apex Trigger that creates Apex Managed Sharing records based on the junction object's relationships",
      ],
      answer: "A",
      title: "Question 100",
    },
    {
      content:
        "A developer wants to create a Visualforce page that allows a user to search for a given account by Name. If the account is found, the account details should be populated on screen. If no account is found, an error message should be displayed to the user.How can this be accomplished? (Choose two.)",
      options: [
        "A. Use the <apex:pageMessages> tag to display the error message",
        "B. Use the ApexPages.addMessage() method to add the error message",
        "C. Use the accountaddErrorQ method to add the error message",
        "D. Use the (apex: information) tag to display the error message",
      ],
      answer: "A,B",
      title: "Question 101",
    },
    {
      content:
        "A developer Is asked to develop a new AppExthange application. A feature of the program creates Survey records when a Case reaches a certain stage and Is of a certain Record Type. This feature needs to be configurable, as different Salesforce instances require Surveys at different times. Additionally, the out-of-the-box AppExchange app needs to come with a set of best practice settings that apply to most customers.What should the developer use to store and package the custom configuration settings for the app?",
      options: [
        "A. Custom Objects",
        "B. Process Builder",
        "C. Custom Metadata",
        "D. Custom Settings",
      ],
      answer: "C",
      title: "Question 102",
    },
    {
      content:
        "Consider the following code snippet:A developer needs to built an interactive Aura component that responds to the user's input by hiding or showing sections according the user preferences.What are two best practices the developer can implement to hide or show the powerVserView and s-rar.daraVserView inner components, based on the value of the attribute isPowexUser?Choose 2 answersA)B)C)",
      options: ["A. Option B", "B. Option C", "C. Option A", "D. Option D"],
      answer: "A",
      title: "Question 103",
    },
    {
      content:
        "[FIND 'map' IN ALL FIELDS RETURNING Account (Id, Name), Contact, Opportunity, Lead] What is a valid return type for th|e following SOSL query?",
      options: [
        "A. List<List<sObject>>",
        "B. List<sObject>",
        "C. List<AggregateResult>",
        "D. List<Account>",
      ],
      answer: "A",
      title: "Question 104",
    },
    {
      content:
        "What is the transaction limit for the number of records per DML statement?",
      options: [
        "A. 50,000",
        "B. 10,000",
        "C. 20,000",
        "D. 5,000",
        "E. There is no limit",
      ],
      answer: "B",
      title: "Question 105",
    },
    {
      content:
        "What is a recommended practice with regard to the Apex CPU limit? (Choose two.)",
      options: [
        "A. Reduce view state in Visualforce pages",
        "B. Use Map collections to cache sObjects",
        "C. Avoid nested Apex iterations",
        "D. Optimize SOQL query performance",
      ],
      answer: "B,C",
      title: "Question 106",
    },
    {
      content:
        "Which two queries are selective SOQL queries and can be used for a large data set of 200,000 Account records? Choose 2 answers",
      options: [
        "A. SELECT id FROM ACCOUNT WHERE Name = Null AND Customer_Number_c= 'ValueA'",
        "B. SELECT id FROM ACCOUNT WHERE Name = !: ' '",
        "C. SELECT id FROM ACCOUNT WHERE id IN (list of Account Ids)",
        "D. SELECT id FROM ACCOUNT WHERE Name = Null",
      ],
      answer: "B,C",
      title: "Question 107",
    },
    {
      content:
        "Refer to re code segment above.When following best practices for writing Apex taggers, which two lots are wrong or cause for concern? Choose 2 answers",
      options: ["A. Line 20", "B. Line 11", "C. Line 16", "D. Line 6"],
      answer: "A,D",
      title: "Question 108",
    },
    {
      content:
        "A developer is creating a Lightning web component that can be added to a Lightning App Page and displayed when the page Is rendered in desktop and mobile phone format. To ensure a great mobile experience, the developer chooses to use the SLDS grid utility.Which two Lighting web components should the developer implement to ensure the application Is mobile-ready? Choose 2 answers",
      options: [
        "A. <lightning-layout-item></lightning-layout-item>",
        "B. <lightning-tree-grid></lightning-tree-grid>",
        "C. <lightning-layou></lightning-layout>",
        "D. <lightning-tree></lightning-tree>",
      ],
      answer: "A,C",
      title: "Question 109",
    },
    {
      content:
        "After a Platform Event Is defined in a Salesforce org, events can be published via which two mechanisms?Choose 2 answers",
      options: [
        "A. External Apps use an API to publish event messages",
        "B. Internal Apps can use Outbound Messages.",
        "C. Internal Apps can use Process Builder.",
        "D. External Apps require the standard Streaming API",
      ],
      answer: "A,C",
      title: "Question 110",
    },
    {
      content:
        "What is the transaction limit for the number of records for SOSL?",
      options: [
        "A. There is no limit",
        "B. 20",
        "C. 200 (synchronous), 100 (async)",
        "D. 2,000",
        "E. 100 (synchronous), 200 (async)",
      ],
      answer: "D",
      title: "Question 111",
    },
    {
      content:
        "A company accepts orders for customers in their enterprise resource planning (ERP) crder__c records with a lookup field to Account. The Account object has an External ID field, ERP_Customer_ID__c.What should the integration use to create new Order__c records that will automatically be related to the correct Account?",
      options: [
        "A. Insert on the Order__c object followed by an update on the Order__c object.",
        "B. Upsert on the Account and specify the ERP_Customer_ID__c.",
        "C. Merge on the Order__c object and specify the ERP_Customer_ID__c.",
        "D. Upsert on the Order__c object and specify the ERP_Customer_ID__c.",
      ],
      answer: "A",
      title: "Question 112",
    },
    {
      content:
        "Exhibit.A developer created a JavaScript function as a part of a Lightning web component (LWC) that surfaces information... about leads by imperatively calling getFetchLeadList when certain criteria are met.What are these changes the developer should implement in the Apex class above to ensure the LWC can displ... data efficiently while preserving security?Choose 3 answers",
      options: [
        "A. Implement the without sharing keyword in the class declaration.",
        "B. Implement the with sharing keyword in the class declaration.",
        "C. Annotate the Apex method with 8AuraEnabled (Cacheable-true).",
        "D. Use the WITH SECURITY_ENFORCED clause within the SOQL query.",
        "E. Annotate the Apex method with gAuraEnabled-",
      ],
      answer: "B,C,D",
      title: "Question 113",
    },
    {
      content:
        "A company notices that their unit tests in a test class with many methods to create many records for prerequisite reference data are slow. What can a developer to do address the issue?",
      options: [
        "A. Move the prerequisite reference data setup to a static method in the test class and call that from each test method.",
        "B. Move the prerequisite reference data setup to the constructor for the test class.",
        "C. Move the prerequisite reference data setup to a TestDataFactory and call that from each test method.",
        "D. Move the prerequisite reference data setup to a @testSetup method in the test class.",
      ],
      answer: "C",
      title: "Question 114",
    },
    {
      content:
        "Which three Visualforce components can be used to initiate Ajax behavior to perform partial page updates? Choose 3 answers",
      options: ["A. ", "B. ", "C. ", "D. ", "E. "],
      answer: "A,B,C",
      title: "Question 115",
    },
    {
      content:
        'During the Visualforce Page execution, what step follows immediately after "Evaluate constructors on controller and extensions"?',
      options: [
        "A. Create the view state",
        "B. Evaluate constructors, extensions, and expression on attribute definitions on any custom components present",
        "C. Send HTML to Browser",
        "D. Evaluate expressions, <apex:page> attribute actions, and other method calls (getters/setters) on main page",
      ],
      answer: "B",
      title: "Question 116",
    },
    {
      content:
        ".A developer is asked to update data in an org based on new business rules. The new rules state that Accounts with the type set to 'Customer' should have a status of 'Active,' and Accounts with the type set to 'Prospect' should have a status of 'Pending.' No other changes to data should be made. Which code block will accurately meet the business requirements?A)B)C)D)",
      options: ["A. Option D", "B. Option A", "C. Option C", "D. Option B"],
      answer: "A",
      title: "Question 117",
    },
    {
      content:
        "Universal Containers (UC) wants to develop a customer community to help their customers log issues with their containers. The community needs to function for their German- and Spanish-speaking customers also. UC heard that it's easy to create an international community using Salesforce, and hired a developer to build out the site.What should the developer use to ensure the site is multilingual?",
      options: [
        "A. Use Custom Objects to translate custom picklist values.",
        "B. Use Custom Settings to ensure custom messages are translated properly.",
        "C. Use Custom Labels to ensure custom messages are translated property.",
        "D. Use Custom Metadata to translate custom picklist values.",
      ],
      answer: "C",
      title: "Question 118",
    },
    {
      content:
        "A developer created and tested a Visualforce page in their developer sandbox, but now receives reports that users are encountering ViewState errors when using it in Production. What should the developer ensure to correct these errors?",
      options: [
        "A. Ensure properties are marked as Transient.",
        "B. Ensure properties are marked as private.",
        "C. Ensure queries do not exceed governor limits.",
        "D. Ensure profiles have access to the Visualforce page.",
      ],
      answer: "A",
      title: "Question 119",
    },
    {
      content:
        "Which of the following elements can be members of a public group? (Choose three.)",
      options: [
        "A. Roles",
        "B. Profiles",
        "C. Territories",
        "D. Case Teams",
        "E. Users",
      ],
      answer: "A,C,E",
      title: "Question 120",
    },
    {
      content:
        "A developer wrote an Apex class to make several callouts to an external system.If the URLs used in these callouts will change often, which feature should the developer use to minimize changes needed to the Apex class?",
      options: [
        "A. Named Credentials",
        "B. Remote Site Settings",
        "C. Connected Apps",
        "D. Session Id",
      ],
      answer: "A",
      title: "Question 121",
    },
    {
      content:
        "What is a best practice when unit testing a controller? (Choose two.)",
      options: [
        "A. Simulate user interaction by leveraging Test.setMock()",
        "B. Set query parameters by using getParameters().put",
        "C. Verify correct references by using getURL()",
        "D. Access test data by using seeAIIData=true",
      ],
      answer: "B,C",
      title: "Question 122",
    },
    {
      content:
        "What is the transaction limit for the number of records for SOQL queries?",
      options: [
        "A. 20,000",
        "B. 50,000",
        "C. 10,000",
        "D. 5,000",
        "E. There is no limit",
      ],
      answer: "B",
      title: "Question 123",
    },
    {
      content:
        "A developer needs to send Account records to an external system for backup purposes. The process must take a snapshot of Accounts as they are saved and then make a callout to a RESTful web service. The web service can only receive, at most, one record per call. Which feature should be used to implement these requirements?",
      options: [
        "A. Process Builder",
        "B. Queueable",
        "C. @future",
        "D. workflow",
      ],
      answer: "A",
      title: "Question 124",
    },
    {
      content: "What is a potential design issue with the following code?",
      options: [
        "A. The code will result in a System.LimitException: Apex CPU time limit exceeded error",
        "B. The code will result in a System.DmException:Entity_is_Deleted error",
        "C. SOQL could be avoided by creating a formula field for StageName in Account from the related Opportunity",
        "D. The code will result in a System.LimitException : Too many script statements error",
      ],
      answer: "A",
      title: "Question 125",
    },
    {
      content:
        "A developer needs to create a Lightning page for entering Order Information. An error message should be displayed if the zip code entered as part of the Order's shipping address is not numeric.What is a recommended way for the error message be displayed to the end user?",
      options: [
        "A. Use the uhoutputText tag to display errors",
        "B. Use the uhinputDefaultError tag to display errors",
        "C. Use the apex:message tag to display errors",
        "D. Use the aura:component tag to display errors",
      ],
      answer: "B",
      title: "Question 126",
    },
    {
      content:
        "Consider the code above.When a user dicks on the Link of a Contact's name, what happens'",
      options: [
        "A. The outputPanel refreshes, showing the Contacts details.",
        "B. A new page opens, showing the Contact's details.",
        "C. The page refreshes, showing the Contact's details.",
        "D. Nothing happens: the commandLink is missing an action attribute.",
      ],
      answer: "A",
      title: "Question 127",
    },
    {
      content: "The Metadata API___________.",
      options: [
        "A. Is used to retrieve, deploy, create, update, or delete customizations for your org. The most common use is to migrate changes from a sandbox or testing org to your production environment",
        "B. Is based on REST principles and is optimized for loading or deleting large sets of data. You can use it to query, queryAII, insert, update, upsert, or delete many records asynchronously by submitting batches",
        "C. Provides a powerful, convenient, and simple REST-based web services interface for interacting with Salesforce. Its advantages include ease of integration and development, and it's an excellent choice of technology for use with mobile applications and web projects",
        "D. Is used to create, retrieve, update or delete records, such as accounts, leads, and custom objects, and allows you to maintain passwords, perform searches, and much more",
      ],
      answer: "A",
      title: "Question 128",
    },
    {
      content:
        "Assuming the CreateOneAccount class creates one account and implements the Queuetable interface, which syntax tests the Apex code?A)B)C)D)",
      options: ["A. Option C", "B. Option A", "C. Option D", "D. Option B"],
      answer: "D",
      title: "Question 129",
    },
    {
      content:
        "A developer needs to store variables to control the style and behavior of a Lightning Web Component. Which feature should be used to ensure that the variables are testable in both Production and all Sandboxes?",
      options: [
        "A. Custom Variable",
        "B. Custom Setting",
        "C. Custom Metadata",
        "D. Custom Object",
      ],
      answer: "C",
      title: "Question 130",
    },
    {
      content:
        "The head of recruiting at Universal Containers wants to provide all internal users the ability to search for open positions by role, department, and location via a new recruiting app, In addition to search, users of the app should be able to refer a fried, apply for a position, and review the status of their current submissions. The app should be made available in Salesforce Mobile, but offline access is not required.Given these requirements, what is the recommended approach to developer the app?",
      options: [
        "A. Lightning Experience Builder",
        "B. Salesforce SDK",
        "C. Visualforce",
        "D. Lightning Web Components",
      ],
      answer: "B",
      title: "Question 131",
    },
  ],
});
