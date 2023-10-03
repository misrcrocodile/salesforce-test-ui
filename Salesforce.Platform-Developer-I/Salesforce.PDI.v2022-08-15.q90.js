window.testContent = window.testContent || [];
var testId = "Salesforce.Platform-Developer-I";
var testName = "Salesforce.Platform-Developer-I";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "Salesforce.Platform-Developer-I.v2022-08-15.q90",
  content: [
    {
      content:
        "Which two statements accurately represent the MVC frameworkimplementation in Salesforce? Choose 2 answers",
      options: [
        "A. Standard and Custom objects used in the app schema represent the View (V) part of the MVC framework",
        "B. Validation rules enforce business rules and represent the Controller (C) part of the MVC framework",
        "C. Triggers that create records represent the Model (M) part of the MVC framework.",
        "D. Lightning component HTML files represent the Model (M) part of the MVC framework.",
      ],
      answer: "B,C",
      title: "Question 1",
    },
    {
      content:
        "Universal Container is building a recruiting app with an Applicant object that stores information about an individual person that represents a job. Each application may apply for more than one job. What should a developer implement to represent that an applicant has applied for a job?",
      options: [
        "A. Lookup field from Applicant to Job",
        "B. Junction object between Applicant and Job",
        "C. Formula field on Applicant that references Job",
        "D. Master-detail field from Applicant to Job",
      ],
      answer: "B",
      title: "Question 2",
    },
    {
      content:
        "TheJob_Application__ccustom object has a field that is a Master-Detail relationship totheContactobject, where theContactobject is the Master. As part of a feature implementation, a developer needs to retrieve a list containing allContactrecords where the related Account Industry is 'Technology' while also retrieving the contact'sJob_Application__crecords.Based on the object's relationships, what is the most efficient statement to retrieve the list of contacts?",
      options: [
        "A. [SELECT Id, (SELECT Id FROM Job_Application_c) FROM Contact WHEREAccount.Industry = 'Technology'];",
        "B. [SELECT Id, (SELECT Id FROM Job_Applications_c) FROM Contact WHEREAccounts.Industry = 'Technology'];",
        "C. [SELECT Id, (SELECT Id FROM Job_Applications_r) FROM Contact WHEREAccounts.Industry = 'Technology'];",
        "D. [SELECT Id, (SELECT Id FROM Job_Applications_r) FROM Contact WHEREAccount.Industry = 'Technology'];",
      ],
      answer: "D",
      title: "Question 3",
    },
    {
      content:
        "For which three items can a trace flag be configured? Choose 3 answers",
      options: [
        "A. Apex Trigger",
        "B. Process Builder",
        "C. Visualforce",
        "D. Apex Class",
        "E. User",
      ],
      answer: "A,D,E",
      title: "Question 4",
    },
    {
      content:
        "Which three steps allow a custom SVG to be included in a Lightning web component? Choose 3 answers",
      options: [
        "A. Import the static resource and provide a getter for it in JavaScript.",
        "B. Reference the import in the HTML template.",
        "C. Upload the SVG asa static resource.",
        "D. Import the SVG as a content asset file.",
        "E. Reference the getter in the HTML template.",
      ],
      answer: "A,C,E",
      title: "Question 5",
    },
    {
      content:
        "A developer needs to implement a custom SOAP Web Service that is used by an external Web Application. The developer chooses to Include helper methods that are not used by the Web Application In the Implementation of the Web Service Class. Which code segment shows the correct declaration of the class and methods?",
      options: [
        "A. \nwebservice class WebServiceClass {\n　private Boolean helperMethod(){/* implementation ... */}\n　global static String updateRecords() { /* implementation ... */}\n}",
        "B. \nglobal class WebServiceClass {\n　private Boolean helperMethod() { /* implementation ... */}\n　Webservice static String updateRecords() {/* implementation ... */}\n}",
        "C. \nwebservice class WebServiceClass{\n　private Boolean helperMethod() { /* implementation ... */}\n　webservice static String updateRecords() { /* implementation ... */}\n}",
        "D. \nglobal class WebServiceClass {\n　private Boolean helperMethod() { /* implementation ... */}\n　global String updateRecords() { /* implementation ... */}\n}",
      ],
      answer: "B",
      title: "Question 6",
    },
    {
      content:
        "A developer needs to confirm that an Account trigger is working correctly without changing the organization's data. What would the developer do to test the Account trigger?",
      options: [
        "A. Use the New button on the Salesforce Accounts Tab to create a new Account record.",
        "B. Use the Test menu on the developer Console to run all test classes for the account trigger.",
        "C. Use the Open Execute Anonymous feature on the Developer Console to run an 'insert Account' DML statement.",
        "D. Use Deply from the Force.comIDE to deploy an 'insert Account' Apex class.",
      ],
      answer: "B",
      title: "Question 7",
    },
    {
      content:
        "Which statement should be used to allow some of the records in a list of records to be inserted rf others fail to be inserted?",
      options: [
        "A. Database.insert(records, true)",
        "B. Database.insert(records, false)",
        "C. insert records",
        "D. insert (records, false)",
      ],
      answer: "B",
      title: "Question 8",
    },
    {
      content:
        "A developer creates aLightning web component that imports a method within an Apex class. When a Validate button is pressed, the method runs to execute complex validations.In this implementation scenario, which artifact is part of the Controller according to the MVC architecture?",
      options: [
        "A. XML file",
        "B. JavaScript file",
        "C. Apex class",
        "D. HTML file",
      ],
      answer: "C",
      title: "Question 9",
    },
    {
      content:
        "Which two statements are true about using the @testSetup annotation in an Apex test class? Choose 2 answers",
      options: [
        "A. Records created in the test setup method cannot be updated in individual test methods.",
        "B. Qo The @testSetup annotation is not supported when the GisTest(SeeAllData=True) annotation is used.",
        "C. A method defined with the @testSetup annotation executes once for each test method in the test class and counts towards system limits.",
        "D. Test data is inserted once for all test methods in a class.",
      ],
      answer: "B,C",
      title: "Question 10",
    },
    {
      content:
        "A developer is implementingan Apex class for a financial system. Within the class, the variables 'creditAmount' and 'debtAmount' should not be able to change once a value is assigned. In which two ways can the developer declare the variables to ensure their value can only be assigned one time? Choose 2 answers",
      options: [
        "A. Usethe final keyword and assign its value when declaring the variable.",
        "B. Use the final keyword and assign its value in the class constructor.",
        "C. Use the static keyword and assign its value in the class constructor.",
        "D. Use the static keyword and assign its value in a static initializer.",
      ],
      answer: "A,B",
      title: "Question 11",
    },
    {
      content:
        "Which code displays the contents of a Visualforce page as a PDF?",
      options: [
        'A. <apex:page contentType="pdf">',
        'B. <apex:page rendersAs="application/pdf">',
        'C. <apex:pagecontentType="application/pdf">',
        'D. <apex:page renderAs="pdf">',
      ],
      answer: "D",
      title: "Question 12",
    },
    {
      content:
        "When importing and exporting data into Salesforce, which two statements are true? Choose 2 answers",
      options: [
        "A. Data import wizard is a client application provided by Salesforce.",
        "B. Developer andDeveloper Pro sandboxes have different storage limits.",
        "C. Bulk API can be used to bypass the storage limits when importing large data volumes in development environments.",
        "D. Bulk API can be used to import large data volumes in development environments without bypassing the storage limits.",
      ],
      answer: "A,B",
      title: "Question 13",
    },
    {
      content:
        "A developer must write an Apex method that will be called from a Lightning component. The method may delete an Account stored in theaccountRecvariable. Which method should a developer use to ensure only users that should be able to delete Accounts can successfully perform deletions?",
      options: [
        "A. Schema.sObjectType.Account.isDeletable()",
        "B. accountRec.sObjectType.isDeletable()",
        "C. accountRec.isDeletable()",
        "D. Account.isDeletable()",
      ],
      answer: "A",
      title: "Question 14",
    },
    {
      content:
        "A developer identifies the following triggers on the Expense_c object:\n　* deteleExpense,\n　* applyDefaultsToExpense\n　* validateExpenseUpdate;\nThe triggers process before delete, before insert, and before update events respectively. Which two techniques should the developer implement to ensure trigger best practice are followed?",
      options: [
        "A. Unify all three triggers in a single trigger on the Expense__c object that includes all events.",
        "B. Create helper classes to execute the appropriate logic when a record is saved.",
        "C. Unify the before insert and before update triggers and use Process Builder for the delete action.",
        "D. Maintain all three triggers on the Expense__c object, but move the Apex logic out for the trigger definition.",
      ],
      answer: "A,B",
      title: "Question 15",
    },
    {
      content:
        "A primaryid_c custom field exists on the candidate_c custom object. The filed is used to store each candidate's id number and is marked as Unique in the schema definition.As part of a data enrichment process. Universal Containers has a CSV file that contains updated data for all candidates in the system, the file contains each Candidate's primary id as a data point. Universal Containers wants to upload this information into Salesforce, while ensuring all data rows are correctly mapped to a candidate in the system. Which technique should the developer implement to streamline the data upload?",
      options: [
        "A. Upload the CSV into a custom object related to Candidate_c.",
        "B. Update the primaryid__c field definition to mark it as an External Id",
        "C. Create a Process Builder on the Candidate_c object to map the records.",
        "D. Create a before Insert trigger to correctly map the records.",
      ],
      answer: "B",
      title: "Question 16",
    },
    {
      content:
        "Universal Container uses Service Cloud with a custom field, stage_c, on the Case object.Management wants to send a follow-up email reminder 6 hours after the stage_c field isset to '';Waiting on customer'' The .... Administrator wants to ensure the solution used is bulk safe. Which two automation tools should a developer recommend to meet these business requirements? Choose 2 answers",
      options: [
        "A. Scheduled Flow",
        "B. Record_Triggered Flow",
        "C. Process Builder",
        "D. Einstein Next Best Action",
      ],
      answer: "A,B",
      title: "Question 17",
    },
    {
      content:
        "An Apex method,getAccounts, that returns a List of Accounts given a searchTerm, is available for Lightning Web components to use. What is the correct definition of a Lightning Web component property that uses thegetAccountsmethod?",
      options: ["A. Option A", "B. Option D", "C. Option B", "D. Option C"],
      answer: "A",
      title: "Question 18",
    },
    {
      content:
        "code below deserializes input into a list of Accounts. Which code modification should be made to insert the Accounts so that field-level security is respected?",
      options: [
        "A. 05: If (SobjectType.Account,isCreatable())",
        "B. 01: Public with sharing class AcctCreator",
        "C. 05: Accts = database.stripinaccesible (accts, Database. CREATEABLE);",
        "D. 05: SobjectAcessDecision sd= Security,stripINaccessible(AccessType,CREATABLE,",
      ],
      answer: "B",
      title: "Question 19",
    },
    {
      content:
        "AW Computing (AWC) handles orders In Salesforce and stores Its product Inventory In a fter, inventory__c, on a custom object, Product__c. When en order for a Product__c Is placed, the inventory__c field Is reduced by the quantity of the order using an Apex trigger.\npublic void reduceInventory(Id prodId, Integer qty) {\n　Integer newInventoryAmt = getNewInventoryAmt(prodId, qty);\n　Product__c p = new Product__c(Id = prodId, Inventory__c = newInventoryAmt);\n　update p;\n\n　// code goes here\n}\nAWC wants the real-time inventory reduction for a product to be sent to many of Its external systems, Including some future systems the company Is currently planning. What should a developer add to the code at the placeholder to meet these requirements?A)B)C)D)",
      options: [
        "A.\nInventoryReductionEvent__e ev = new InventoryReductionEvent__e(ProductId__c = prodId, Reduction__c = qty);\nEventBus.publish(ev);\n",
        "B.\nInventoryReductionEvent__e ev = new InventoryReductionEvent__e(ProductId__c = prodId, Reduction__c = qty);\ninsert ev;\n",
        "C.\nInventoryReductionEvent__c ev = new InventoryReductionEvent__c(ProductId__c = prodId, Reduction__c = qty);\nEventBus.publish(ev);\n",
        "D.\nInventoryReductionEvent__c ev = new InventoryReductionEvent__c(ProductId__c = prodId, Reduction__c = qty);\ninsert ev;\n",
      ],
      answer: "C",
      title: "Question 20",
    },
    {
      content:
        "Which three statements are accurate about debug logs? Choose 3 answers",
      options: [
        "A. The Apex transaction fails with the following message. \"SObject row was retrieved via SOQL without queryingthe requested field Account.Is.Tech__c''.",
        "B. If executed in an asynchronous context, the apex transaction is likely to fallby exceeding the DML governor limit",
        "C. The Apex transaction succeeds regardless of any uncaught exception and all processed accounts are updated.",
        "D. If executed In a synchronous context, the apex transaction is likely to fall by exceeding the DHL governor limit.",
      ],
      answer: "A",
      title: "Question 21",
    },
    {
      content:
        "A developer is asked to create a Visualforce page for Opportunities that allows users to save ormerge the current record. Which approach should the developer to meet this requirement?",
      options: [
        "A. A custom controller",
        "B. A custom controller extension",
        "C. Visualforce page JavaScript",
        "D. Standard controller methods",
      ],
      answer: "A",
      title: "Question 22",
    },
    {
      content: "What should be used to create scratch orgs?",
      options: [
        "A. Sandbox refresh",
        "B. Developer Console",
        "C. Salesforce CLI",
        "D. Workbench",
      ],
      answer: "C",
      title: "Question 23",
    },
    {
      content:
        "A recursive transaction is limited by a DML statement creating records for these two objects:\n　1. Accounts\n　2. Contacts\nThe Account trigger hits a stack depth of 16.\nWhich statement is true regarding the outcome of the transaction?",
      options: [
        "A. The transaction succeeds and all the changes are committed to the database.",
        "B. The transaction fails and all the changes are rolled back.",
        "C. The transaction fails only if the Contact trigger stack depth is greater or equal to 16.",
        "D. The transaction succeeds as long as the Contact trigger stack depth is less than 16.",
      ],
      answer: "A",
      title: "Question 24",
    },
    {
      content:
        "A developer must create an Apex class, contactcontroller, that a Lightning component can use to search for Contact records. User of the Lightning component should only be able to search Contact records to which they have access. Which two will restrict the records correctly?",
      options: [
        "A. public class ContactController",
        "B. public with sharing class ContactController",
        "C. public inherited sharing class ContactController",
        "D. public without sharing class ContactController",
      ],
      answer: "B,C",
      title: "Question 25",
    },
    {
      content:
        "A developer has requirement to write Apex code to update a large number of account records on a nightly basis. The systemadministrator needs to be able to schedule the class to run after business hours on an as-needed basis. Which class definition should be used to successfully implement this requirement?",
      options: [
        "A. Gloabal inherited sharing class processAccount Processor implements Database>Bachable<sObject> Schedulable.",
        "B. Global inherited sharing class ProcessAccount Process implements Queueable",
        "C. Global inherited sharing class ProcessAccountProcessor implementsDatabase. Batchable<sObject>",
        "D. Global inherited sharing class ProcessAccountProcess Implements Queueable",
      ],
      answer: "D",
      title: "Question 26",
    },
    {
      content: "How can a developer implement this feature?",
      options: [
        "A. Build an account assignment rule.",
        "B. Build a workflow rule.",
        "C. Build a flow with Flow Builder.",
        "D. Build an account approval process.",
      ],
      answer: "C",
      title: "Question 27",
    },
    {
      content:
        "Which statement is true about developing in a multi-tenant environment?",
      options: [
        "A. Global apex classes can be referenced from multiple tenants on the same instance",
        "B. Governor limits prevent apex from impactiong the performance of multiple tenants on the same instance",
        "C. Org-level data security controls which users can see datafrom multiple tenants on the same instance",
        "D. Apex sharing controls access to records fomr multiple tenants on the same instance",
      ],
      answer: "B",
      title: "Question 28",
    },
    {
      content:
        "The following code snippet is executed by a Lightning web component in an environment with more than2,000 lead records:Which governor limit will likely be exceeded within the Apex transaction?",
      options: [
        "A. Total number of records retrieved by SOQL queries",
        "B. Total number of records processed as a result of DML statements",
        "C. Total number of DML statement issued",
        "D. Total number of SOQL queries issued",
      ],
      answer: "A",
      title: "Question 29",
    },
    {
      content:
        "Get Cloudy Consulting (GCC) has a multitude of servers that host its customers' websites. GCC wants to provide a servers status page that is always on display in its call center. It should update in real time with any changes made to any servers. To accommodate this on the server side, a developer created a server Update platform event. The developer is working on a Lightning web component to display the information.",
      options: [
        "A. import (subscribe, unsubscribe, onError ) from 'lightning/MessageChannel'",
        "B. import ( subscribe, unsubscribe, onError ) from 'lightning/empApi '",
        "C. import ( subscribe, unsubscribe, onError ) from 'lightning/ServerUpdate'",
        "D. import ( subscribe, unsubscribe, onError ) from 'lightning/pubsub'",
      ],
      answer: "B",
      title: "Question 30",
    },
    {
      content:
        "A team of many developers work in their own individual orgs that have the same configuration at the production org. Which type of org is best suited forthis scenario?",
      options: [
        "A. Full Sandbox",
        "B. Partner Developer Edition",
        "C. Developer Edition",
        "D. Developer Sandbox",
      ],
      answer: "D",
      title: "Question 31",
    },
    {
      content:
        'A developer has a requirement to create an Order When an Opportunityreaches a "Closed-Won" status. Which tool should be used to implement this requirement?',
      options: [
        "A. Apex trigger",
        "B. Lightning Component",
        "C. Lightning",
        "D. Process Builder",
      ],
      answer: "D",
      title: "Question 32",
    },
    {
      content:
        "A developer must create a lightning component that allows users to input contact record information to create a contact record, including a salary__c custom field. what should the developeruse, along with a lightning-record-edit form, so that salary__c field functions as a currency input and is only viewable and editable by users that have the correct field levelpermissions on salary__C?",
      options: [
        'A. <lightning-formatted-number value="Salary__c" format-style="currency"></lightning-formatted-number>',
        'B. <lightning-input-currencyvalue="Salary__c"></lightning-input-currency>',
        'C. <ligthning-input-field field-name="Salary__c"></lightning-input-field>',
        'D. <lightning-input type="number" value="Salary__c" formatter="currency"></lightning-input>',
      ],
      answer: "C",
      title: "Question 33",
    },
    {
      content:
        "A developer created a custom order management app that uses an Apex class. The order is represented by an Order object and an Orderltem object that has a master-detail relationship to Order. During order processing, an order may be split into multiple orders. What should a developer do to allow their code to move some existing Orderltem records to a new Order record?",
      options: [
        "A. Add without sharing to the Apex class declaration.",
        "B. Select the Allow reparenting option on the master-detail relationship.",
        "C. Change the master-detailrelationship to an external lookup relationship.",
        "D. Create a junction object between Orderltem and Order.",
      ],
      answer: "B",
      title: "Question 34",
    },
    {
      content:
        "What is a benefitof developing applications in a multi-tenant environment?",
      options: [
        "A. Unlimited processing power and memory",
        "B. Default out-of-the-box configuration",
        "C. Access to predefined computing resources",
        "D. Enforced best practices for development",
      ],
      answer: "B",
      title: "Question 35",
    },
    {
      content: "Which scenario is valid for execution by unit tests?",
      options: [
        "A. Load data from a remote site with a callout.",
        "B. Generate a Visualforce PDF with geccontentAsPDF ().",
        "C. Set the created date of a record using a system method.",
        "D. Execute anonymous Apex as a different user.",
      ],
      answer: "C",
      title: "Question 36",
    },
    {
      content:
        "Management asked for opportunities to be automatically created for accounts with annual revenue greater than$1,000,000. A developer created the following trigger on the Account object to satisfy this requirement.Users are able to update the account records via the UI and can see an opportunity created for high annual revenue accounts. However, when the administrator tries to upload a list of 179 accounts using Data Loader, It fails withsystem. Exception errors. Which two actions should the developer take to fix the code segment shown above? Choose 2 answers",
      options: [
        "A. Move the DML that saves opportunities outside the for loop.",
        "B. Query for existing opportunities outside the for loop.",
        "C. Use Database.query to query the opportunities.",
        "D. Check if all the required fields for Opportunity are being added on creation.",
      ],
      answer: "A,B",
      title: "Question 37",
    },
    {
      content:
        "Universal Containers wants Opportunities to no longer be editable when it reaches the Closed/Won stage. Which two strategies can a developer use to accomplish this? Choose 2 answers",
      options: [
        "A. Use a trigger.",
        "B. Use a validation rule.",
        "C. Use an after-save flow.",
        "D. Use the Process Automation settings.",
      ],
      answer: "A,B",
      title: "Question 38",
    },
    {
      content:
        "Universal Containers has a Visualforce page that displays a table of every Container_c. being ....... Is falling with a view state limit because some of the customers rent over 10,000 containers. What should a developer change about the Visualforce page to help with the page load errors?",
      options: [
        "A. Implement pagination with a StandardSetController,",
        "B. Implement pagination with an OffsetController.",
        "C. Use JavaScript remoting with SOQL Offset.",
        "D. Use Lazy loading and a transient List variable.",
      ],
      answer: "A",
      title: "Question 39",
    },
    {
      content:
        "Aspart of a data cleanup strategy, AW Computing wants to proactively delete associated opportunity records when the related Account is deleted. Which automation tool should be used to meet this business requirement?",
      options: [
        "A. Scheduled job",
        "B. Record-Triggered Flow",
        "C. Process Builder",
        "D. Workflow Rules",
      ],
      answer: "B",
      title: "Question 40",
    },
    {
      content:
        "In the following example, which sharing context will myMethod execute when it is invoked?",
      options: [
        "A. Sharing rules Ail be enforced by the instantiating class",
        "B. Sharing rules will not be enforced for the running user.",
        "C. Sharing rules will be inherited from the calling context.",
        "D. Sharing rules Ml be enforced for the running user.",
      ],
      answer: "C",
      title: "Question 41",
    },
    {
      content:
        "Which two are phases in the Aura application event propagation framework? Choose 2 answers",
      options: ["A. Bubble", "B. Control", "C. Default", "D. Emit"],
      answer: "A,C",
      title: "Question 42",
    },
    {
      content:
        "A developer must modify the following code snippet to prevent the number of SOQL queries issued from exceeding the platform governor limit. public class without sharing OpportunityService{\n　public static List<OpportunityLineItem> getOpportunityProducts(Set<Id> opportunityIds) {\n　　List<OpportunitylineItem> oppLineItems = new List<OpportunityLineItem>();\n　　for(Id thisOppId : opportunityIds) {\n　　　oppLineItems.addAll([Select Id FROM OpportunityLineItems WHERE OpportunityId = :thisOppId)]; \n 　} \n return oppLineItems;\n　}\n}\nThe above method might be called during a trigger execution via a Lightning component.\nWhich technique should be implemented to avoid reaching the governor limit?",
      options: [
        "A. Use the System.Limits.getlimitQueries() method to ensure the number of queries is less than 100.",
        "B. Use the System.Limits.getQueries() method to ensure the number of queries is less than 100.",
        "C. Refactor the code above to perform only one SOQL query, filtering by the Set of opportunityIds.",
        "D. Refector the code above to perform the SOQL query only if the Set of opportunityIds contains less 100 Ids.",
      ],
      answer: "C",
      title: "Question 43",
    },
    {
      content: "What can be developed using the LightningComponent framework?",
      options: [
        "A. Salesforce integrations",
        "B. Single-page web apps",
        "C. Hosted web applications",
        "D. Dynamic web sites",
      ],
      answer: "B",
      title: "Question 44",
    },
    {
      content:
        "A developer is migrating a Visualforce page into a Lightning web component. The Visualforce page shows information about a single record. The developer decides to use Lightning DataService to access record data. Which security consideration should the developer be aware of?",
      options: [
        "A. The with sharing keyword must be used to enforce sharing rules.",
        "B. The isAccessible ( ) method must be used for field-level access checks",
        "C. Lightning Data Service handles sharing rules and field-level security.",
        "D. Lightning Data Service ignores field-level security.",
      ],
      answer: "C",
      title: "Question 45",
    },
    {
      content:
        "A developer needs to create a baseline set of data (Accounts, Contacts, Products, Assets) for an entire suite of testallowing them to test independent requirements various types of Salesforce Cases. Which approach can efficiently generate the required data for each unit test?",
      options: [
        "A. Use @TestSetup with a viod method.",
        "B. Create test data before Test.startTest() in the unittest.",
        "C. Create a nock using the Stud API",
        "D. Add @isTest(seeAllData=true) at the start of the unit test class.",
      ],
      answer: "A",
      title: "Question 46",
    },
    {
      content:
        "Which three Salesforce resources can be accessed from a Lightning webcomponent? Choose 3 answers",
      options: [
        "A. All external libraries",
        "B. Third-party web components",
        "C. Content asset files",
        "D. Static resources",
        "E. SVG resources",
      ],
      answer: "A,D,E",
      title: "Question 47",
    },
    {
      content:
        "The values 'High', 'Medium', and 'Low' are Identified as common values for multiple picklist across different object. What is an approach a developer can take to streamline maintenance of the picklist and their values, whilealso restricting the values to the ones mentioned above?",
      options: [
        "A. Create the Picklist on each object and use a Global Picklist Value Set containing the Values.",
        'B. Create the Picklist on each object as a required field and select "Display values alphabeticaly, not in the order entered".',
        "C. Create the Picklist on each and add a validation rule to ensure data integrity.",
        'D. Create the Picklist on each object and select "Restrict picklist to the values defined in the value set".',
      ],
      answer: "A",
      title: "Question 48",
    },
    {
      content:
        "Where are two locations a developercan look to find information about the status of asynchronous or future methods? Choose 2 answers",
      options: [
        "A. Apex Jobs",
        "B. Paused Flow Interviews component",
        "C. Apex Flex Queue",
        "D. Time-Based Workflow Monitor",
      ],
      answer: "A,C",
      title: "Question 49",
    },
    {
      content:
        "Which two sfdx commands can be used to add testing data to a Developer sandbox?",
      options: [
        "A. Forced: data: tree: upsert",
        "B. Forced: data:bulk:upsert",
        "C. Forced: data: object :upsert",
        "D. Forced: data:async:upsert",
      ],
      answer: "A,B",
      title: "Question 50",
    },
    {
      content:
        "An Approval Process is defined in the Expense_Item__c. A business rule dictates that whenever auser changes the Status to 'Submitted' on an Expense_Report__c record, all the Expense_Item__c records related to the expense report must enter the approval process individually. Which approach should be used to ensure the business requirement is met?",
      options: [
        "A. Create two Process Builder, one on Expense_Report__c to mark the related Expense_Item__c as submittable and the second on Expense_Item__c to submit the records for approval.",
        "B. Create a Process Builder on Expense_Report__c with a 'Submit for Approval' action type to submit all related Expense_Item__c records when the criteria is met.",
        "C. Create a Process Builder on Expense_Report__c to mark the related Expense_Item__c as submittable and trigger on Expense_item__c to submit the records for approval.",
        "D. Createa Process Builder on Expense_Report__c with an 'Apex' action type to submit all related Expense_Item__c records when the criteria is met.",
      ],
      answer: "A",
      title: "Question 51",
    },
    {
      content:
        "A businessimplemented a magnification plan to encourage its customers to watch some educational videos.Customers can watch videos over several days, and their progress is recorded. Award points are granted to customers for all completed videos. When the video is marked as completed in Salesforce, an external web service must be called so that points can be awarded to the user.A developer implemented these requirements in the after update trigger by making a calf to an external web service. However, a System.CalloutException is occurring. What should the developer do to fix this error?",
      options: [
        "A. Replace the after update trigger with a before insert trigger.",
        "B. Move the callout to an asynchronousmethod with structure (callout=true) annotation.",
        "C. Write a REST service to integrate with the external web service.",
        "D. Surround the external call with a try-catch block to handle the exception.",
      ],
      answer: "B",
      title: "Question 52",
    },
    {
      content:
        "A developer is building custom search functionality that uses SOSL to search account and contact records that match search terms provided by the end user. The feature is exposed through a Lightning web component, and the end user is able to providea list of terms to search.Consider the following code snippet:What is the maximum number of search terms the end user can provide to successfully execute the search without exceeding a governor limit?",
      options: ["A. 200", "B. 150", "C. 2,000", "D. 20"],
      answer: "B",
      title: "Question 53",
    },
    {
      content: "What can used to delete components from production?",
      options: [
        "A. An ant migration tool deployment with a destructivechanges XML file and an empty package .xml file",
        "B. A change set deployment with the delete option checked",
        "C. A change set deployment with a destructivechanges XML file",
        "D. An ant migration tool deployment with destructivechanges xml file and the components to delete inthe package .xml file",
      ],
      answer: "D",
      title: "Question 54",
    },
    {
      content:
        "A development team wants to use a deployment script lo automatically deploy lo a sandbox during their development cycles. Which two tools can they use to run a script that deploysto a sandbox? Choose 2 answers",
      options: [
        "A. Change Sets",
        "B. SFDX CLI",
        "C. Developer Console",
        "D. Ant Migration Tool",
      ],
      answer: "B,D",
      title: "Question 55",
    },
    {
      content:
        "A developeris debugging the following code to determinate why Accounts are not being created Account a = new Account(Name = 'A'); Database.insert(a, false); How should the code be altered to help debug the issue?",
      options: [
        "A. Collect the insert method return value a Saveresult variable",
        "B. Add a try/catch around the insert method",
        "C. Add a System.debug() statement before the insert method",
        "D. Set the second insert method parameter to TRUE",
      ],
      answer: "A",
      title: "Question 56",
    },
    {
      content:
        "Which Lightning code segment should be written to declare dependencies on a Lightning component, c:accountList, that is used in a Visualforce page?\nA.\n&lt;aura:application access=&quot;GLOBAL&quot; extends=&quot;ltng:outApp&quot;&gt;\n　&lt;aura:dependency resource=&quot;c:accountList&quot;/&gt;\n&lt;/aura:application&gt;\n\nB.\n&lt;aura:component access=&quot;GLOBAL&quot; extends=&quot;ltng:outApp&quot;&gt;\n　&lt;aura:dependency resource=&quot;c:accountList&quot;/&gt;\n&lt;/aura:component&gt;\n\nC.\n&lt;aura:component access=&quot;GLOBAL&quot;&gt;\n　&lt;aura:dependency resource=&quot;c:accountList&quot;/&gt;\n&lt;/aura:component&gt;\n\nD.\n&lt;aura:application access=&quot;GLOBAL&quot;&gt;\n　&lt;aura:dependency resource=&quot;c:accountList&quot;/&gt;\n&lt;/aura:application&gt;",
      options: ["A. Option A", "B. Option B", "C. Option C", "D. Option D"],
      answer: "A",
      title: "Question 57",
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
      title: "Question 58",
    },
    {
      content:
        "Which two settings must be defined in order to update a record of a junction object? Choose 2 answers",
      options: [
        "A. Read/Write access on the primary relationship",
        "B. Read/Write access on the secondary relationship",
        "C. Read access on the primary relationship",
        "D. Read/Write access on the junction object",
      ],
      answer: "A,B",
      title: "Question 59",
    },
    {
      content:
        "What is the order of operations when a record is saved in Salesforce?",
      options: [
        "A. Workflow, process flows, triggers, commit",
        "B. Triggers, workflow, process flows, commit",
        "C. Workflow, triggers, process flows, commit",
        "D. Process flows, triggers, workflow,commit",
      ],
      answer: "B",
      title: "Question 60",
    },
    {
      content:
        "What are two characteristics related to formulas? Choose 2 answers.",
      options: [
        "A. Formula can reference themselves.",
        "B. Fields that are used in a formula field can be deleted or edited without the formula.",
        "C. Formulascan reference values in related objects.",
        "D. Formulas are calculated at runtime and are not stored in the database.",
      ],
      answer: "C,D",
      title: "Question 61",
    },
    {
      content:
        "A Salesforce developer wants to review their code changes immediately and does not want toinstall anything on their computer or on the org. Which tool is best suited?",
      options: [
        "A. Third-party apps from App Exchange",
        "B. Salesforce Extension for VSCode",
        "C. Developer Console",
        "D. Setup Menu",
      ],
      answer: "C",
      title: "Question 62",
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
      title: "Question 63",
    },
    {
      content:
        "Since Aura application events follow the traditionalpublish-subscribe model, which method is used to fire an event?",
      options: [
        "A. fireEvent()",
        "B. registerEvent()",
        "C. fire()",
        "D. ernit()",
      ],
      answer: "C",
      title: "Question 64",
    },
    {
      content:
        "How does the Lightning Component framework help developersimplement solutions faster?",
      options: [
        "A. By providing code review standards and processes",
        "B. By providing device-awareness for mobile and desktops",
        "C. By providing change history and version control",
        "D. By providing an Agile process with default steps",
      ],
      answer: "B",
      title: "Question 65",
    },
    {
      content:
        "A developer needs to prevent the creation of Request_c records when certain conditions exist in the system. A RequestLogic class exists to checks the conditions. What is the correct implementation?",
      options: [
        "A. Trigger RequestTrigger on Request (after insert) {RequestLogic.validateRecords {trigger.new};}",
        "B. Trigger RequestTrigger on Request (before insert) {if (RequestLogic.isvalid{Request})Request.addError {'Your request cannot be created at this time.'};}",
        "C. Trigger RequestTrigger on Request (after insert) {if (RequestLogic.isValid{Request})Request.addError {'Your request cannot be created atthis time.'};}",
        "D. Trigger RequestTrigger on Request (before insert) {RequestLogic.validateRecords {trigger.new};}",
      ],
      answer: "D",
      title: "Question 66",
    },
    {
      content:
        "Which three per-transaction limits have higher governor limits in asynchronous Apex transactions?",
      options: [
        "A. Maximum CPU time",
        "B. Records returned by SOQL",
        "C. Total SOQL queries",
        "D. Maximum execution time",
        "E. Maximum heap size",
      ],
      answer: "A,B,C",
      title: "Question 67",
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
      title: "Question 68",
    },
    {
      content:
        "Which Apex class contains methods to return theamount of resources that have been used for a particular governor, such as the number of DML statements?",
      options: ["A. OrgLimits", "B. Limits", "C. Messaging", "D. Exception"],
      answer: "B",
      title: "Question 69",
    },
    {
      content:
        "Whichaspect of Apex programming is limited due to multitenancy?",
      options: [
        "A. The number of records processed in a loop",
        "B. The number of records returned from database queries",
        "C. The number of methods in an Apex Class",
        "D. The number of active Apex classes",
      ],
      answer: "B",
      title: "Question 70",
    },
    {
      content:
        "UniversalContainers decides to use purely declarative development to build out a new Salesforce application. Which three options can be used to build out the business logic layer for this application? Choose 3 answers",
      options: ["A. Processbuilder", "B. Flow Builder", "C. Validation Rules"],
      answer: "A,B,C",
      title: "Question 71",
    },
    {
      content:
        "UniversalContainer use a simple order Management app. On the Order Lines, the order line total is calculated by multiplying the item price with the quantity ordered. There is a Master-Detail relationship between the Order and the Order Lines object. What is the practice to get the sum of all order line totals on the order header?",
      options: [
        "A. Declarative Roll-Up Summaries App",
        "B. Apex Trigger",
        "C. Process Builder",
        "D. Roll-Up Summary Field",
      ],
      answer: "D",
      title: "Question 72",
    },
    {
      content:
        "A developer Edition org has five existing accounts. A developer wants to add 10 more accounts for ... The following code is executed in the Developer Console using the Executor Anonymous window:How many total accounts will be in the org after this code is executed?",
      options: ["A. 10", "B. 15", "C. 6", "D. 5"],
      answer: "A",
      title: "Question 73",
    },
    {
      content:
        "What will be the output in the debug log in the event of a QueryExeption during a call to the @query method in the following Example?",
      options: [
        "A. Querying Accounts. Query Exception.",
        "B. Querying Accounts. Custom Exception Done.",
        "C. Querying Accounts. Query Exception. Done",
        "D. Querying Accounts. Custom Exception.",
      ],
      answer: "C",
      title: "Question 74",
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
      title: "Question 75",
    },
    {
      content:
        "What are two benefits of using declarative customizationsover code? Choose 2 answers What are two benefits of using declarative customizations over code?",
      options: [
        "A. Declarative customizations automatically generate test classes. ",
        "B. Declarative customizations automatically update with each Salesforce release.",
        "C. Declarative customizations generally require less maintenance.",
        "D. Declarative customizations automatically generate test classes.",
      ],
      answer: "B,C",
      answer: "A,C",
      title: "Question 76",
    },
    {
      content:
        "Which three process automations can immediately send an email notification to the owner of an Opportunity when its Amount ischanged to be greater than $10,000? Choose 3 answers",
      options: [
        "A. Process Builder",
        "B. Escalation Rule",
        "C. Flow Builder",
        "D. Workflow Rule",
        "E. Approval Process",
      ],
      answer: "A,C,D",
      title: "Question 77",
    },
    {
      content:
        "A developer writes a trigger on the Account object on the before update event that increments a count field. A workflow rule also increments the count field every time that an Account is created or updated. The field update in the workflow rule is configured to not re-evaluate workflow rules. What is the value of the count fieldif an Account is inserted with an initial value of zero, assuming no other automation logic is implemented on the Account?",
      options: ["A. 1", "B. 4", "C. 2", "D. 3"],
      answer: "C",
      title: "Question 78",
    },
    {
      content:
        "Application Events follow the traditional publish-subscribe model. Which method is used to fire an event?",
      options: [
        "A. Emit()",
        "B. FireEvent()",
        "C. Fire()",
        "D. RegisterEvent()",
      ],
      answer: "C",
      title: "Question 79",
    },
    {
      content:
        "A developer needs to create a custom button for the Account object that, when clicked, will perform a series of calculation and redirect the user to a custom visualforce page. Which three attributes need to bedefined with values in the <apex:page> tag to accomplish this? Choose 3 answers",
      options: [
        "A. standard Controller",
        "B. readOnly",
        "C. Action",
        "D. extensions",
        "E. renderAs",
      ],
      answer: "A,C,D",
      title: "Question 80",
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
      title: "Question 81",
    },
    {
      content:
        "How many accounts will be inserted by the following block ofcode? for(Integer i = 0 ; i < 500; i++) { Account a = new Account(Name='New Account ' + i); insert a; }",
      options: ["A. 500", "B. 150", "C. 0", "D. 100"],
      answer: "C",
      title: "Question 82",
    },
    {
      content:
        "Universal Containers has a support process that allows users torequest support from its engineering team using a custom object, Engineering_Support__c.Users should be able to associate multiple engineering_Support__c records to a single Opportunity record.Additionally, aggregate Information about the Engineering_support__c records should be shown on the Opportunity record. What should a developer Implement to support these requirements?",
      options: [
        "A. Lookup field from Engineering_support__c to Opportunity",
        "B. Master-detail field from Opportunity to Engineering_Support__c",
        "C. Lookup field from Opportunity to Engineering_Support__c",
        "D. Master-detail field from Engineering_Support__c to Opportunity.",
      ],
      answer: "D",
      title: "Question 83",
    },
    {
      content:
        "Assuming that 'name; is a String obtained by an <apex:inputText> tag on a Visualforce page. Which two SOQL queries performed are safe from SOQL injections? Choose 2 answers",
      options: [
        "A. String query = 'SELECT Id FROM Account WHERE Name LIKE \\''%' + name + '%\\''; List<Account> results = Database.query(query);",
        "B. String query = 'SELECT Id FROM Account WHERE Name LIKE \\''%' +String.escapeSingleQuotes(name) + '%\\'';List<Account> results = Database.query(query);",
        "C. String query = '%' + name + '%';List<Account> results = [SELECT Id FROM Account WHERE Name LIKE :query];",
        "D. String query = 'SELECTId FROM Account WHERE Name LIKE \\''%' + name.noQuotes() + '%\\''; List<Account> results = Database.query(query);",
      ],
      answer: "B,C",
      title: "Question 84",
    },
    {
      content:
        "A developer wants to import 500 Opportunity records into a sandbox. Why should the developer choose to use data Loader instead of Data Import Wizard?",
      options: [
        "A. Data Import Wizard does not support Opportunities.",
        "B. Data Loader runs from the developer's browser.",
        "C. Data Import Wizard can not import all 500 records.",
        "D. Data Loader automatically relates Opportunities to Accounts.",
      ],
      answer: "A",
      title: "Question 85",
    },
    {
      content:
        "Which two statements are accurate regarding Apex classes and interfaces? Choose 2 answers",
      options: [
        "A. Interface methods are public by default.",
        "B. Inner classes are public by default.",
        "C. Classes are finalby default.",
        "D. A top-level class can only have one inner class level.",
      ],
      answer: "A,D",
      title: "Question 86",
    },
    {
      content:
        "Universal Containers recently transitioned from Classic to Lighting Experience. One of its business processes requires certain value from the opportunity object to be sent via HTTP REST callout to its external order management system based on a user-initiated action on the opportunity page. Example values are as follow* Name* Amount* AccountWhich two methods should the developer implement to fulfill thebusiness requirement? (Choose 2 answers)",
      options: [
        "A. Create a Lightning component that performs the HTTP REST callout, and use a Lightning Action to expose the component on the Opportunity detail page.",
        "B. Create a Process Builder on the Opportunity object that executes an Apex immediate action to perform the HTTP REST callout whenever the Opportunity is updated.",
        "C. Create an after update trigger on the Opportunity object that calls a helper method using@Future(Callout=true) to perform the HTTP REST callout.",
        "D. Create a Visualforce page that performs the HTTP REST callout, and use a Visualforce quick action to expose the component on the Opportunity detail page.",
      ],
      answer: "A,C",
      title: "Question 87",
    },
    {
      content:
        "A develop completed modification to a customized feature that is comprised of two elements:Apex triggerTrigger handler Apex classWhat are two factors that the developer must take into account to properly deploy the modification to the production environment?",
      options: [
        "A. At least one line of code must be executed for the Apex trigger.",
        "B. Test methods must be declared with the testMethod keyword.",
        "C. All methods in the test classes must use @isTest.",
        "D. Apex classes must have at least 75% code coverage org-wide.",
      ],
      answer: "A,D",
      title: "Question 88",
    },
    {
      content:
        "A workflow updates the value of a custom field for an existing Account. How can a developer access the updated custom fieldvalue from a trigger?",
      options: [
        "A. By writing, a Before Update trigger and accessing the field value from Trigger.new",
        "B. By writing a Before Insert trigger and accessing the field value from Trigger.new",
        "C. By writing an After Insert trigger and accessing the field value from Trigger.old",
        "D. By writing an After Update trigger and accessing the field value from Trigger.old",
      ],
      answer: "A",
      title: "Question 89",
    },
    {
      content:
        "A developer created a weather app that contains multiple Lightning web components.One of the components, called Toggle, has a toggle forFahrenheit or Celsius units. Another component, called Temperature, displays the current temperature in the unit selected in the Toggle component When a user toggles from Fahrenheit to Celsius or vice versa in the Toggle component, the information must besent to the Temperature component so the temperature can be converted and displayed. What is the recommend way to accomplish this?",
      options: [
        "A. The Toggle component should call a method in the Temperature component.",
        "B. Create a custom event to handle the communicate between the components.",
        "C. Use Lightning Message Service to communicate between the component.",
        "D. Use Lightning Message Service to communicate between the components.",
      ],
      answer: "B",
      title: "Question 90",
    },
  ],
});
