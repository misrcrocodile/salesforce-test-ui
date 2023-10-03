window.testContent = window.testContent || [];
var testId = "Salesforce.Platform-Developer-I";
var testName = "Salesforce.Platform-Developer-I";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "Salesforce.Platform-Developer-I.v2020-02-07.q82",
  content: [
    {
      content:
        "How can a developer avoid exceeding governor limits when using Apex Triggers? (Choose 2)",
      options: [
        "A. By using Maps to hold data from query results",
        "B. By using the Database class to handle DML transactions",
        "C. By performing DML transactions on a list of sObjects.",
        "D. By using a helper class that can be invoked from multiple triggers",
      ],
      answer: "A,C",
      title: "Question 1",
    },
    {
      content:
        "What is a capability of a StandardSetController? Choose 2 answers",
      options: [
        "A. It allows pages to perform mass updates of records",
        "B. It enforces field-level security when reading large record sets",
        "C. It allows pages to perform pagination with large record sets",
        "D. It extends the functionality of a standard or custom controller",
      ],
      answer: "A,C",
      title: "Question 2",
    },
    {
      content:
        "Which statement should a developer avoid using inside procedural loops? (Choose 2)",
      options: [
        "A. Update contactList;",
        "B. System.debug('Amount of CPU time (in ms) used so far: ' + Limits.getCpuTime() );",
        "C. If(o.accountId == a.id)",
        "D. List contacts = [SELECT Id, Salutation, FirstName, LastName, Email FROM Contact WHERE AccountId = :a.Id];",
      ],
      answer: "A,D",
      title: "Question 3",
    },
    {
      content:
        "The sales management team requires that the lead source field of the Lead record be populated when Lead is converted. What would a developer use to ensure that a user populates the Lead source field?",
      options: [
        "A. Workflow rule",
        "B. Validation rule",
        "C. Formula field",
        "D. Process builder",
      ],
      answer: "B",
      title: "Question 4",
    },
    {
      content:
        "A developer creates an Apex class that includes private methods. What can the developer do to ensure that the private methods can be accessed by the test class?",
      options: [
        "A. Add the SeeAllData attribute to the test class",
        "B. Add the TestVisible attribute to the apex methods.",
        "C. Add the SeeAllData attribute to the test methods.",
        "D. Add the TestVisible attribute to the Apex class",
      ],
      answer: "B",
      title: "Question 5",
    },
    {
      content:
        "A developer needs to update an unrelated object when a record gets saved. Which two trigger types should the developer create?",
      options: [
        "A. After update",
        "B. Before insert",
        "C. After insert",
        "D. Before update",
      ],
      answer: "A,C",
      title: "Question 6",
    },
    {
      content:
        "Opportunity opp=[select id ,stagename from opportunity limit 1] Given the code above, how can a developer get the label for the stagename field?",
      options: [
        'A. Call"opp.stagename.label"',
        'B. Call"opp.stagename.getdescribe().getlabel()"',
        'C. Call "opportunity.stagename.label"',
        'D. Call"opportunity.stagename.getdescribe().getlabel()"',
      ],
      answer: "D",
      title: "Question 7",
    },
    {
      content:
        "What is considered the primary purpose for creating Apex tests?",
      options: [
        "A. To guarantee at least 50% of code is covered by unit tests before it is deployed",
        "B. To confirm every trigger in executed at least once",
        "C. To confirm all classes and triggers compile successfully",
        "D. To ensure every use case of the application is covered by a test",
      ],
      answer: "D",
      title: "Question 8",
    },
    {
      content:
        "How can a custom type be identified as unique when added to a Set?",
      options: [
        "A. Methods in the class must be global",
        "B. The class must have a method with the @InvocableMethod annotation",
        "C. Methods in the class must be static",
        "D. The class must implement the Equals and Hashcode methods",
      ],
      answer: "D",
      title: "Question 9",
    },
    {
      content:
        "A developer working on a time management application wants to make total hours for each timecard available to applications users. A timecard entry has a Master-Detail relationship to a timecard. Which approach should the developer use to accomplish this declaratively?",
      options: [
        "A. A visualforce page that calculates the total number of hours for a timecard and displays it on the page.",
        "B. A Process Builder process that updates a field on the timecard entry is created.",
        "C. An Apex trigger that uses an Aggregate Query to calculate the hours for a given timecard and stores it in a custom field.",
        "D. A Roll-up Summary field on the Timecard Object that calculates the total hours from timecard entries for that timecard.",
      ],
      answer: "D",
      title: "Question 10",
    },
    {
      content:
        "Which feature allows a developer to create test records for use in test classes?",
      options: [
        "A. Static resources",
        "B. Webservicetests",
        "C. Httpcalloutmocks",
        "D. Documents",
      ],
      answer: "A",
      title: "Question 11",
    },
    {
      content:
        "An Account trigger updates all related Contacts and Cases each time an Account is saved using the following two DML statements:update allContacts; update allCases;What is the result if the Case update exceeds the governor limit for maximum number of DML records?",
      options: [
        "A. The Account save succeeds, Contacts are updated, but Cases are not.",
        "B. The Account save is retried using a smaller trigger batch size.",
        "C. The Account save succeeds and no Contacts or Cases are updated",
        "D. The Account save fails and no Contacts or Cases are updated",
      ],
      answer: "D",
      title: "Question 12",
    },
    {
      content:
        "Which statement is true about developing in a multi-tenant environment?",
      options: [
        "A. Org-level data security controls which users can see data from multiple tenants on the same instance",
        "B. Apex sharing controls access to records fomr multiple tenants on the same instance",
        "C. Governor limits prevent apex from impactiong the performance of multiple tenants on the same instance",
        "D. Global apex classes can be referenced from multiple tenants on the same instance",
      ],
      answer: "C",
      title: "Question 13",
    },
    {
      content:
        "A platform developer at Universal Containers needs to create a custom button for the Account object that, when clicked, will perform a series of calculations and redirect the user to a custom Visualforce page.Which three attributes need to be defined with values in the <apex:page> tag to accomplish this? (Choose three.)",
      options: [
        "A. readOnly",
        "B. action",
        "C. extensions",
        "D. standardController",
        "E. renderAs",
      ],
      answer: "B,D,E",
      title: "Question 14",
    },
    {
      content:
        "What would a developer do to update a picklist field on related Opportunity records when a modification to the associated Account record is detected?",
      options: [
        "A. Create a Visualforce page.",
        "B. Create a Lightning Component.",
        "C. Create a workflow rule with a field update.",
        "D. Create a process with Process Builder.",
      ],
      answer: "D",
      title: "Question 15",
    },
    {
      content:
        "A developer needs to provide a Visualforce page that lets users enter Product-specific details during a Sales cycle. How can this be accomplished? (Choose 2)",
      options: [
        "A. Copy the standard page and then make a new Visualforce page for Product data entry.",
        "B. Download an Unmanaged Package from the AppExchange that provides a custom Visualforce page to modify.",
        "C. Download a Managed Package from the AppExhange that provides a custom Visualforce page to modify.",
        "D. Create a new Visualforce page and an Apex controller to provide Product data entry.",
      ],
      answer: "B,D",
      title: "Question 16",
    },
    {
      content:
        "What si the debug output of the following apex code? Decimal thevalue; system.debug(thevalue);",
      options: ["A. 0.0", "B. Undefined", "C. 0", "D. Null"],
      answer: "D",
      title: "Question 17",
    },
    {
      content:
        "Which type of code represents the Model in the MVC architecture on the Force.com platform?",
      options: [
        "A. A list of Account records returned from a Controller Extension method",
        "B. A Controller Extension method that uses SOQL to query for a list of Account records",
        "C. A Controller Extension method that saves a list of Account records",
        "D. Custom JavaScript that processes a list of Account records.",
      ],
      answer: "A",
      title: "Question 18",
    },
    {
      content:
        "What are two considerations for custom Apex Exception classes? Choose 2 answers.",
      options: [
        "A. Constructor for custom Exceptions can only accept string values as arguments.",
        "B. Custom Exception class names must end with the word 'Exception'.",
        "C. Custom Exception classes must extend the base Exception class.",
        "D. Custom Exceptions cannot be extended by other Exception classes.",
      ],
      answer: "B,C",
      title: "Question 19",
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
      title: "Question 20",
    },
    {
      content:
        "Where can a developer identify the time taken by each process in a transaction using Developer Console log inspector?",
      options: [
        "A. Execution Tree tab under Stack Tree panel",
        "B. Performance Tree tab under Stack Tree panel",
        "C. Timeline tab under Execution Overview panel",
        "D. Save Order tab under Execution Overview panel",
      ],
      answer: "C",
      title: "Question 21",
    },
    {
      content:
        "A developer needs an Apex method that can process Account or Contact records. Which method signature should the developer use?",
      options: [
        "A. Public void doWork(Record theRecord)",
        "B. Public void doWork(Account || Contatc)",
        "C. Public void doWork(Account Contact)",
        "D. Public void doWork(sObject theRecord)",
      ],
      answer: "D",
      title: "Question 22",
    },
    {
      content:
        "What are two valid options for iterating through each Account in the collection List<Account> named AccountList? (Choose two.)",
      options: [
        "A. for (Account theAccount : AccountList) {...}",
        "B. for (List L : AccountList) {...}",
        "C. for (Integer i=0; i < AccountList.Size(); i++) {...}",
        "D. for(AccountList) {...}",
      ],
      answer: "A,C",
      title: "Question 23",
    },
    {
      content:
        "An apex trigger fails because it exceeds governor limits. Which two techniques should a developer use to resolve the problem? Choose 2 answers",
      options: [
        "A. Use the database class to handle DML operations",
        "B. Use SOQL aggregate queries to retrieve child records",
        "C. Use lists for all DML operations",
        "D. Use maps to reference related records",
      ],
      answer: "C,D",
      title: "Question 24",
    },
    {
      content:
        "The operation manager at a construction company uses a custom object called Machinery to manage the usage and maintenance of its cranes and other machinery. The manager wants to be able to assign machinery to different constructions jobs, and track the dates and costs associated with each job. More than one piece of machinery can be assigned to one construction job.What should a developer do to meet these requirements?",
      options: [
        "A. Create a lookup field on the Construction Job object to the Machinery object.",
        "B. Create a lookup field on the Machinery object to the Construction Job object.",
        "C. Create a Master-Detail Lookup on the Machinery object to the Construction Job object.",
        "D. Create a junction object with Master-Detail Relationship to both the Machinery object and the Construction Job object.",
      ],
      answer: "D",
      title: "Question 25",
    },
    {
      content:
        "How should a developer make sure that a child record on a custom object, with a lookup to the Account object, has the same sharing access as its associated account?",
      options: [
        "A. Create a validation rule on the custom object comparing the record owners on both records.",
        "B. Ensure that the relationship between the objects is Master-Detail.",
        "C. Create a Sharing Rule comparing the custom object owner to the account owner.",
        "D. Include the sharing related list on the custom object page layout.",
      ],
      answer: "B",
      title: "Question 26",
    },
    {
      content:
        "Which three options allow a developer to use custom styling in a Visualforce page? (Choose three.)",
      options: [
        "A. A static resource",
        "B. Inline CSS",
        "C. <apex:stylesheet> tag",
        "D. <apex:stylesheets>tag",
        "E. <apex:style>tag",
      ],
      answer: "A,B,C",
      title: "Question 27",
    },
    {
      content:
        "Given the code block: Integer x; For(x=0;x<10; x+=2) { If(x==8) break; If(x==10) break; } System.debug(x); Which value will the system debug statement display?",
      options: ["A. 8", "B. 10", "C. 4", "D. 2"],
      answer: "A",
      title: "Question 28",
    },
    {
      content:
        "Which trigger event allows a developer to update fields in the Trigger.new list without using an additional DML statement? Choose 2 answers",
      options: [
        "A. Before insert",
        "B. After insert",
        "C. Before update",
        "D. After update",
      ],
      answer: "A,C",
      title: "Question 29",
    },
    {
      content:
        "Which two statement can a developer use to throw a custom exception of type MissingFieldValueException? Choose 2 answers",
      options: [
        "A. Throw new MissingFieldValueException('Problem occurred');",
        "B. Throw Exception(new MissingFieldValueException());",
        "C. Throw new MissingFieldValueException();",
        "D. Throw (MissingFieldValueException,'Problem occurred');",
      ],
      answer: "A,C",
      title: "Question 30",
    },
    {
      content:
        "The sales team at Universal Containers would like to see a visual indicator appear on both Account and Opportunity page layouts to alert salespeople when an Account is late making payments or has entered the collections process. What can a developer implement to achieve this requirement without having to write custom code?",
      options: [
        "A. Workflow Rule",
        "B. Quick Action",
        "C. Roll-up Summary Field",
        "D. Formula Field",
      ],
      answer: "D",
      title: "Question 31",
    },
    {
      content:
        "Which Apex collection is used to ensure that all values are unique?",
      options: ["A. A List", "B. An Enum", "C. A Set", "D. An sObject"],
      answer: "C",
      title: "Question 32",
    },
    {
      content:
        "Which statement about change set deployments is accurate? (Choose 3)",
      options: [
        "A. They can be used only between related organizations.",
        "B. They use an all or none deployment model.",
        "C. They require a deployment connection.",
        "D. They can be used to deploy custom settings data.",
        "E. They ca be used to transfer Contact records.",
      ],
      answer: "A,B,C",
      title: "Question 33",
    },
    {
      content:
        "Universal Containers wants Opportunities to be locked from editing when reaching the Closed/Won stage.Which two strategies should a developer use to accomplish this? (Choose two.)",
      options: [
        "A. Use a validation rule.",
        "B. Use a Trigger.",
        "C. Use a Visual Workflow.",
        "D. Use the Process Automation Settings.",
      ],
      answer: "A,B",
      title: "Question 34",
    },
    {
      content:
        "A developer needs to include a visualforce page in the detail section of a page layout for the account object, but does not see the page as an available option in the page layout editorwhich attribute must the developer include in the <apex:page> tag to ensure the visualforce page can be embedded in a page layout",
      options: [
        'A. Standardcontroller="account"',
        'B. Action="accountid"',
        'C. Extensions="accountcontroller"',
        'D. Controller="account"',
      ],
      answer: "A",
      title: "Question 35",
    },
    {
      content: "Managed Packages can be created in which type of org?",
      options: [
        "A. Developer Edition",
        "B. Partial Copy Sandbox",
        "C. Unlimited Edition",
        "D. Developer Sandbox",
      ],
      answer: "A",
      title: "Question 36",
    },
    {
      content:
        "Which approach should a developer use to add pagination to a Visualforce page?",
      options: [
        "A. The extensions attribute for a page",
        "B. A StandardSetController",
        "C. The Action attribute for a page",
        "D. A StandardController",
      ],
      answer: "B",
      title: "Question 37",
    },
    {
      content:
        "Which type of code represents the Model in the MVC architecture when using Apex and Visualforce pages?",
      options: [
        "A. A Controller Extension method that uses SOQL to query for a list of Account records",
        "B. A list of Account records returned from a Controller Extension method",
        "C. Custom JavaScript that processes a list of Account records",
        "D. A Controller Extension method that saves a list of Account records",
      ],
      answer: "B",
      title: "Question 38",
    },
    {
      content:
        "Which two sosl searches will return records matching search criteria contained in any of the searchable text fields on an object? choose 2 answers",
      options: [
        "A. [find 'acme*' in any fields returning account,opportunity]",
        "B. [find 'acme*'returning account,opportunity]",
        "C. [find 'acme*' in text fields returning account,opportunity]",
        "D. [find 'acme*'in all fields returning account,opportunity]",
      ],
      answer: "D",
      title: "Question 39",
    },
    {
      content:
        "Which three statements are true regarding cross-object formulas? Choose 3 answers",
      options: [
        "A. Cross-object formulas can reference fields from objects that are up to 10 relantionship away",
        "B. Cross-object formulas can be referenced in roll-up summary field",
        "C. Cross-object formulas can expose data the user does not have access to in a record",
        "D. Cross-object formulas can reference fields from master-detail or lookup relantionships",
        "E. Cross-object formulas can reference child fields to perform an average",
      ],
      answer: "A,C,D",
      title: "Question 40",
    },
    {
      content:
        "A visualforce page uses the contact standard controller. How can a developer display the name from the parent account record on the page?",
      options: [
        "A. Use additional apex logic within the controller to query for the name field",
        "B. Use the {!contact.account.name} merge field syntax",
        "C. Use an additional standard controller for accounts",
        "D. Use SOQL syntax to find the related accounts name field",
      ],
      answer: "B",
      title: "Question 41",
    },
    {
      content:
        "A lead object has a custom field Prior_Email__c. The following trigger is intended to copy the current Email into the Prior_Email__c field any time the Email field is changed:Which type of exception will this trigger cause?",
      options: [
        "A. A DML exception",
        "B. A limit exception when doing a bulk update",
        "C. A compile time exception",
        "D. A null reference exception",
      ],
      answer: "A",
      title: "Question 42",
    },
    {
      content:
        "In a single record, a user selects multiple values from a multi-select picklist.How are the selected values represented in Apex?",
      options: [
        "A. As a String with each value separated by a comma",
        "B. As a Set<String> with each value as an element in the set",
        "C. As a List<String> with each value as an element in the list",
        "D. As a String with each value separated by a semicolon",
      ],
      answer: "D",
      title: "Question 43",
    },
    {
      content:
        "Which action can a developer take to reduce the execution time of the following code? \nList allaccounts = [select id from account]; \nlist allcontacts = [select id, accountid from contact]; \nfor (account a :allaccounts){\n　for (contact c:allcontacts){\n　　if(c.accountid = a.id){ //do work } \n 　}\n}",
      options: [
        "A. Add a group by clause to the contact SOQL",
        "B. Use a map <id,contact> for allaccounts",
        "C. Create an apex helper class for the SOQL",
        "D. Put the account loop inside the contact loop",
      ],
      answer: "B",
      title: "Question 44",
    },
    {
      content:
        "What is the return data type when ApexPages.currentPage().getParameters() is used to retrieve URL parameters from a visualforce controller?",
      options: ["A. List", "B. Map", "C. String[]", "D. Enum"],
      answer: "B",
      title: "Question 45",
    },
    {
      content:
        "A sales manager wants to make sure that whenever an opportunity stage is changed to 'Closed Won', a new case will be of created for the support team to collect necessary information from the customer. How should a developer accomplish this?",
      options: [
        "A. Create a workflow rule to create the new case.",
        "B. Create a Process Builder to create the new case.",
        "C. Set up a validation rule on the Opportunity Stage.",
        "D. Create a lookup field to the Case object on the opportunity object.",
      ],
      answer: "B",
      title: "Question 46",
    },
    {
      content:
        "When would a developer use a custom controller instead of a controller extension? Choose 2 answers:",
      options: [
        "A. When a Visualforce page should not enforce permissions or field-level security.",
        "B. When a Visualforce page needs to add new actions to a standard controller.",
        "C. When a Visualforce page needs to replace the functionality of a standard controller.",
        "D. When a Visualforce page does not reference a single primary object.",
      ],
      answer: "A,D",
      title: "Question 47",
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
      title: "Question 48",
    },
    {
      content:
        "Which type of code represents the view in the MVC architecture on the Force.com platform?",
      options: [
        "A. An apex method in an extension that returns a list of cases",
        "B. A visualforce page that dysplays information about case records by iterating over a list of cases",
        "C. An apex method that executes SOQL to retrieve a list of cases",
        "D. Validation rules for a page layout that includes a related list of cases",
      ],
      answer: "B",
      title: "Question 49",
    },
    {
      content:
        "A developer needs to display all of the available fields for an object.In which two ways can the developer retrieve the available fields if the variable myObject represents the name of the object? (Choose two.)",
      options: [
        "A. Use mySObject.myObject.fields.getMap() to return a map of fields.",
        "B. Use getGlobalDescribe().get(myObject).getDescribe().fields.getMap() to return a map of fields.",
        "C. Use Schema.describeSObjects(new String[]{myObject})[0].fields.getMap() to return a map of fields.",
        "D. Use myObject.sObjectType.getDescribe().fieldSet() to return a set of fields.",
      ],
      answer: "A,C",
      title: "Question 50",
    },
    {
      content:
        "In which two trigger types can a developer modify the new sObject records that are obtained by the trigger.new context? Choose 2 answers",
      options: [
        "A. After update",
        "B. Before insert",
        "C. After insert",
        "D. Before update",
      ],
      answer: "B,D",
      title: "Question 51",
    },
    {
      content:
        "What must the Controller for a Visulforce page utilized to override the standard Opportunity view button?",
      options: [
        "A. The StandardSetController to support related lists for pagination",
        "B. A callback constructor to reference the StandardController",
        "C. A constructor that initialized a private Opportunity variable.",
        "D. The Opportunity StandardController for pre-built functionality",
      ],
      answer: "D",
      title: "Question 52",
    },
    {
      content:
        "A Visual force page displays two fields named Phone Number and Email.User1 has access to Phone Number, but not to Email.User2 has access to Email, but not Phone NumberA developer needs to ensure that User1 can only see Phone Number, and User2 can only see Email.Which method can the developer use to achieve this?",
      options: [
        "A. Schema isReadable() method.",
        "B. Schema isUpdateable() method.",
        "C. Schema isAccessible() method.",
        "D. Schema isCreateable() method.",
      ],
      answer: "C",
      title: "Question 53",
    },
    {
      content:
        "What is a valid statement about Apex classes and interfaces? Choose 2 answers:",
      options: [
        "A. A class can have multiple levels of inner classes.",
        "B. The default modifier for an interface is private.",
        "C. The default modifier for a class is private.",
        "D. Exception classes must end with the word exception.",
      ],
      answer: "B,D",
      title: "Question 54",
    },
    {
      content:
        "What is a good practice for a developer to follow when writing a trigger? (Choose 2)",
      options: [
        "A. Using @future methods to perform DML operations.",
        "B. Using synchronous callouts to call external systems.",
        "C. Using the Set data structure to ensure distinct records.",
        "D. Using the Map data structure to hold query results by ID.",
      ],
      answer: "C,D",
      title: "Question 55",
    },
    {
      content: "Which three methods help ensure quality data?",
      options: [
        "A. Create a lookup filter",
        "B. Adding a validation rule",
        "C. Adding an error to a field in before trigger",
        "D. Handling an exception in Apex",
        "E. Sending an email alert using a workflow rule",
      ],
      answer: "A,B,E",
      title: "Question 56",
    },
    {
      content:
        "To which primitive data type in Apex is a currency field atomically assigned?",
      options: ["A. Double", "B. Decimal", "C. Integer", "D. Currency"],
      answer: "B",
      title: "Question 57",
    },
    {
      content: "What is a benefit of the lightning component framework?",
      options: [
        "A. More Centralized control via server-side logic",
        "B. Better integration with Force.com sites",
        "C. Better performance for custom Salesforce1 Mobile Apps",
        "D. More pre-built components to replicate the salesforce look and feel",
      ],
      answer: "D",
      title: "Question 58",
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
      title: "Question 59",
    },
    {
      content:
        "When creating unit tests in Apex, which statement is accurate? Choose 2",
      options: [
        "A. System Assert statements that do not Increase code coverage contribute important feedback in unit tests",
        "B. Increased test coverage requires large test classes with many lines of code in one method.",
        "C. Unit tests with multiple methods result in all methods failing every time one method fails.",
        "D. Triggers do not require any unit tests in order to deploy them from sandbox to production.",
      ],
      answer: "A,C",
      title: "Question 60",
    },
    {
      content:
        "Which two statements are true about using the @testSetup annotation in an Apex test class? (Choose two.)",
      options: [
        "A. Records created in the @testSetup method cannot be updates in individual test methods.",
        "B. The @testSetup annotation cannot be used when the @isTest(SeeAllData=True) annotation is used.",
        "C. Test data is inserted once for all test methods in a class.",
        "D. The @testSetup method is automatically executed before each test method in the test class is executed.",
      ],
      answer: "D",
      title: "Question 61",
    },
    {
      content:
        "An Apex transaction inserts 100 Account records and 2,000 Contact records before encountering a DML exception when attempting to insert 500 Opportunity records. The Account records are inserted by calling the database.insert() method with the allOrNone argument set to false. The Contact and Opportunity records are inserted using the standalone insert statement. How many total records will be committed to the database in this transaction?",
      options: ["A. 2000", "B. 0", "C. 2100", "D. 100"],
      answer: "D",
      title: "Question 62",
    },
    {
      content:
        "What is the requirement for a class to be used as a custom Visualforce controller?",
      options: [
        "A. Any top-level Apex class that implements the controller interface",
        "B. Any top-level Apex class that extends a PageReference",
        "C. Any top-level Apex class that has a constructor that returns a PageReference",
        "D. Any top-level Apex class that has a default, no-argument constructor",
      ],
      answer: "A",
      title: "Question 63",
    },
    {
      content:
        "Which data structure is returned to a developer when performing a SOSL search?",
      options: [
        "A. A map of sObject types to a list of sObjects",
        "B. A map of sObject types to a list oflists of sobjects",
        "C. A list of lists of sObjects.",
        "D. A list of sObjects.",
      ],
      answer: "C",
      title: "Question 64",
    },
    {
      content: "What is the advantage of Salesforce Lightning?",
      options: [
        "A. Uses service side for better handling",
        "B. Option 3",
        "C. Pre-defined components to give Standard Look and Feel",
        "D. Option 4",
      ],
      answer: "C",
      title: "Question 65",
    },
    {
      content:
        "A user selects a value from a multi-select picklist. How is this selected value represented in Apex?",
      options: [
        "A. As a set< string > with one element",
        "B. As a list< String > with one element",
        "C. As a string ending with a comma",
        "D. As a string",
      ],
      answer: "D",
      title: "Question 66",
    },
    {
      content:
        "Which collection type provides unique key/value pairings of data?",
      options: ["A. List", "B. Set", "C. Array", "D. Map"],
      answer: "D",
      title: "Question 67",
    },
    {
      content:
        "How can a developer use a Set<Id> to limit the number of records returned by a SOQL query?",
      options: [
        "A. Reference the Set in the WHERE clause of the query",
        "B. Reference the Set in the LIMIT clause of the query",
        "C. Pass the query results as an argument in a reference to the Set.containsAll() method.",
        "D. Pass the Set as an argument in a reference to the Database.query() method",
      ],
      answer: "B",
      title: "Question 68",
    },
    {
      content:
        "Before putting an app into production, which step should be taken?",
      options: [
        "A. Switch to a production database",
        "B. Run the production check feature via the web interface",
        "C. Insure that you have installed a performance introspection add-on",
        "D. Scale your dynos",
      ],
      answer: "B",
      title: "Question 69",
    },
    {
      content: "What is an accurate statement about variable scope? (Choose 3)",
      options: [
        "A. Parallel blocks can use the same variable name.",
        "B. Sub-blocks can reuse a parent block's variable name if it's value is null.",
        "C. A variable can be defined at any point in a block.",
        "D. A static variable can restrict the scope to the current block of its value is null.",
        "E. Sub-blocks cannot reuse a parent block's variable name.",
      ],
      answer: "A,C,E",
      title: "Question 70",
    },
    {
      content:
        "A developer has the following class and trigger code public class insurancerates{ public static final decimal smokercharge = 0.01; } trigger contacttrigger on contact (before insert){ insurancerates rates = new insurancerates(); decimal basecost=xxx; } Which code segment should a developer insert at the xxx to set the basecost variable to the value of the class variable smokercharge?",
      options: [
        "A. Contacttrigger.insurancerates.smokercharge",
        "B. Insurancerates.smokercharge",
        "C. Rates.smokercharge",
        "D. Rates.getsmokercharge()",
      ],
      answer: "B",
      title: "Question 71",
    },
    {
      content:
        "Which two queries can a developer use in a Visualforce controller to protect against SOQL injection vulnerabilities? Choose 2 answers",
      options: [
        "A. String qryName = % + name % ;String qryString = SELECT Id FROM Contact WHERE Name LIKE :qryNAme ;List queryResults = Database.query(qryString);",
        "B. String qryString = SELECT Id FROM Contact WHERE Name LIKE :qryNAme ; List queryResults = Database.query(qryString);",
        "C. String qryName = % + String.escapeSingleQuotes(name)+ % ;String qryString = SELECT Id FROM Contact WHERE Name LIKE :qryNAme ;List queryResults = Database.query(qryString);",
        "D. String qryName = % + String.enforceSecurityChecks(name)+ % ;String qryString = SELECT Id FROM Contact WHERE Name LIKE :qryNAme ;List queryResults = Database.query(qryString);",
      ],
      answer: "A,C",
      title: "Question 72",
    },
    {
      content: "What is a capability of the Developer Console?",
      options: [
        "A. Execute Anonymous Apex code, Create/Edit code, view Debug Logs.",
        "B. Execute Anonymous Apex code, Run REST API, deploy code changes.",
        "C. Execute Anonymous Apex code, Run REST API, create/Edit code.",
        "D. Execute Anonymous Apex code, Create/Edit code, Deploy code changes.",
      ],
      answer: "A",
      title: "Question 73",
    },
    {
      content:
        "What is the accurate statement about with sharing keyword? choose 2 answers",
      options: [
        "A. Both inner and outer class can be declared as with sharing",
        "B. Inner class inherit the sharing setting from the container class",
        "C. Inner class do not inherit the sharing setting from the container class",
        "D. Either inner class or outer classes can be declared as with sharing but not both",
      ],
      answer: "A,C",
      title: "Question 74",
    },
    {
      content:
        "A developer wants to create a custom object to track Customer Invoices.How should Invoices and Accounts be related to ensure that all Invoices are visible to everyone with access to an Account?",
      options: [
        "A. The Invoice should have a Master-Detail relationship to the Account",
        "B. The Account should have a Master-Detail relationship to the Invoice.",
        "C. The Invoice should have a Lookup relationship to the Account Previous",
        "D. The Account should have a Lookup relationship to the Invoice",
      ],
      answer: "A",
      title: "Question 75",
    },
    {
      content:
        "A change set deployment from a sandbox to production fails due to a failure in a managed package unit test.The developer spoke with the manager package owner and they determined it is a false positive and can be ignored. What should the developer do to successfully deploy?",
      options: [
        "A. Select 'Run local tests' to run all tests in the org that are not in the managed package.",
        "B. Select 'Fast Deploy' to run only the tests that are in the change set.",
        "C. Select 'Run local tests' to run only the tests that are in the change set.",
        "D. Edit the managed package's unit test.",
      ],
      answer: "A",
      title: "Question 76",
    },
    {
      content:
        "Using the Schema Builder, a developer tries to change the API name of a field that is referenced in an Apex test class.What is the end result?",
      options: [
        "A. The API name of the field and the reference in the test class is changed.",
        "B. The API name of the field and the reference in the test class is updated.",
        "C. The API name of the field is changed, and a warning is issued to update the class.",
        "D. The API name is not changed and there are no other impacts.",
      ],
      answer: "C",
      title: "Question 77",
    },
    {
      content:
        "A Visualforce page has a standard controller for an object that has a lookup relationship to a parent object.How can a developer display data from the parent record on the page?",
      options: [
        "A. By using merge field syntax to retrieve data from the parent record.",
        "B. By adding a second standard controller to the page for the parent record.",
        "C. By using a roll-up formula field on the child record to include data from the parent record.",
        "D. By using SOQL on the Visualforce page to query for data from the parent record.",
      ],
      answer: "A",
      title: "Question 78",
    },
    {
      content:
        "A developer needs to create records for the object Property__c. The developer creates the following code block:List propertiesToCreate = helperClass.createProperties();try { // line 3 } catch (Exception exp ) {//exceptionhandling }Which line of code would the developer insert at line 3 to ensure that at least some records are created, even if a few records have errors and fail to be created?",
      options: [
        "A. insert propertiesToCreate;",
        "B. Database.insert(propertiesToCreate, System.ALLOW_PARTIAL);",
        "C. Database.insert(propertiesToCreate);",
        "D. Database.insert(propertiesToCreate, false);",
      ],
      answer: "D",
      title: "Question 79",
    },
    {
      content:
        "Which two approaches optimize test maintenance and support future declarative configuration changes? Choose 2 answers.",
      options: [
        "A. Create a method that performs a callout for valid records, then call this method within test methods.",
        "B. Create a methods that loads valid Account records from a static resources, then call this method within test methods.",
        "C. Create a method that queries for valid records, then call this method within test methods.",
        "D. Create a method that creates valid records,then call this method within test methods.",
      ],
      answer: "B,D",
      title: "Question 80",
    },
    {
      content:
        "When the number of record in a recordset is unknown, which control statement should a developer use to implement a set of code that executes for every record in the recordset, without performing a .size() or.length() method call?",
      options: [
        "A. Do { } While (Condition)",
        "B. For (variable : list_or_set) { }",
        "C. For (init_stmt, exit_condition; increment_stmt) { }",
        "D. While (Condition) { ... }",
      ],
      answer: "B",
      title: "Question 81",
    },
    {
      content:
        "Which standard field is required when creating a new contact record?",
      options: ["A. Name", "B. AccountId", "C. LastName", "D. FirstName"],
      answer: "C",
      title: "Question 82",
    },
  ],
});
