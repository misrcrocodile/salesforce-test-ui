window.testContent = window.testContent || [];
var testId = "PlatformDeveloper1";
var testName = "PlatformDeveloper1.PDI";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "PlatformDeveloper1.PDI.v2022-08-06.q88",
  content: [
    {
      content:
        "Universal Containers decides to use purely declarative development to build out a new Salesforce application.Which three options can be used to build out the business logic layer for this application?Choose 3 answers",
      options: ["A. Flow Builder", "B. Validation Rules", "C. Process builder"],
      answer: "A,B,C",
      title: "Question 1",
    },
    {
      content:
        "Which three per-transaction limits have higher governor limits in asynchronous Apex transactions?",
      options: [
        "A. Maximum CPU time",
        "B. Total SOQL queries",
        "C. Records returned by SOQL",
        "D. Maximum heap size",
        "E. Maximum execution time",
      ],
      answer: "A,B,C",
      title: "Question 2",
    },
    {
      content:
        "How should a custom user interface be provided when a user edits an Account in Lightning Experience?",
      options: [
        "A. Override the Account's Edit button with Lightning Action",
        "B. Override the Account's Edit button with Lightning page.",
        "C. Override the Account's Edit button with Lightning Flow",
        "D. Override the Account's Edit button with Lightning component.",
      ],
      answer: "D",
      title: "Question 3",
    },
    {
      content:
        "Refer to the following code snippet for an environment has more than 200 Accounts belonging to the Technology' industry:When the code execution, which two events occur as a result of the Apex transaction?When the code executes, which two events occur as a result of the Apex transaction?Choose 2 answers",
      options: [
        "A. If executed In a synchronous context, the apex transaction is likely to fall by exceeding the DHL governor limit.",
        "B. If executed in an asynchronous context, the apex transaction is likely to fall by exceeding the DML governor limit",
        "C. The Apex transaction succeeds regardless of any uncaught exception and all processed accounts are updated.",
        "D. The Apex transaction fails with the following message. \"SObject row was retrieved via SOQL without querying the requested field Account.Is.Tech__c''.",
      ],
      answer: "D",
      title: "Question 4",
    },
    {
      content:
        "Which three data types can a SOQL query return? Choose 3 answers",
      options: ["A. Long", "B. Integer", "C. sObject", "D. List"],
      answer: "B,C,D",
      title: "Question 5",
    },
    {
      content:
        "Which two sfdx commands can be used to add testing data to a Developer sandbox?",
      options: [
        "A. Forced: data:bulk:upsert",
        "B. Forced: data: tree: upsert",
        "C. Forced: data:async:upsert",
        "D. Forced: data: object :upsert",
      ],
      answer: "A,B",
      title: "Question 6",
    },
    {
      content:
        "Universal Containers decides to use exclusively declarative development to build out a new Salesforce application. Which three options should be used to build out the database layer for the application? Choose 3 answers",
      options: [
        "A. Process Builder",
        "B. Relationships",
        "C. Triggers",
        "D. Custom Objects and Fields",
        "E. Roll-Up Summaries",
      ],
      answer: "B,D,E",
      title: "Question 7",
    },
    {
      content:
        "Which two statements are true about using the @testSetup annotation in an Apex test class?Choose 2 answers",
      options: [
        "A. Test data is inserted once for all test methods in a class.",
        "B. Records created in the test setup method cannot be updated in individual test methods.",
        "C. Qo The @testSetup annotation is not supported when the GisTest(SeeAllData=True) annotation is used.",
        "D. A method defined with the @testSetup annotation executes once for each test method in the test class and counts towards system limits.",
      ],
      answer: "C,D",
      title: "Question 8",
    },
    {
      content: "Which code displays the content of Visualforce page as PDF?",
      options: [
        'A. <apex:page renderAs="pdf">',
        "B. <apex:page contentype '' application/pdf'')",
        "C. <apex:page readerAs= ''application/pdf''>",
        "D. <apex:page readeras'' application/pdf''>",
      ],
      answer: "A",
      title: "Question 9",
    },
    {
      content:
        "An org tracks customer orders on an Order object and the items of an Order on the Line Item object. The Line Item object has a MasterDetail relationship to the order object. A developer has a requirement to calculate the order amount on an Order and the line amount on each Line item based on quantity and price.What is the correct implementation?",
      options: [
        "A. Write a process on the Line item that calculates the item amount and order amount and updates the filed on the Line Item and the order.",
        "B. Implement the line amount as a numeric formula field and the order amount as a roll-up summary field.",
        "C. Implement the Line amount as a currency field and the order amount as a SUM formula field.",
        "D. Write a single before trigger on the Line Item that calculates the item amount and updates the order amount on the Order.",
      ],
      answer: "B",
      title: "Question 10",
    },
    {
      content:
        "A developer created a child Lightning web component nested inside a parent Lightning web component, parent component needs to pass a string value to the child component.In which two ways can this be accomplished?Choose 2 answers",
      options: [
        "A. The parent component can use a public property to pass the data to the child component.",
        "B. The parent component can use a custom event to pass the data to the child component,",
        "C. The parent component can invoke a method in the child component",
        "D. The parent component can use the Apex controller class to send data to the child component.",
      ],
      answer: "A,B",
      title: "Question 11",
    },
    {
      content:
        "A developer created a custom order management app that uses an Apex class. The order is represented by an Order object and an Orderltem object that has a master-detail relationship to Order. During order processing, an order may be split into multiple orders.What should a developer do to allow their code to move some existing Orderltem records to a new Order record?",
      options: [
        "A. Add without sharing to the Apex class declaration.",
        "B. Change the master-detail relationship to an external lookup relationship.",
        "C. Select the Allow reparenting option on the master-detail relationship.",
        "D. Create a junction object between Orderltem and Order.",
      ],
      answer: "C",
      title: "Question 12",
    },
    {
      content:
        "Which two are phases in the Salesforce Application Event propagation framework? Choose2 answers",
      options: ["A. Capture", "B. Default", "C. Bubble"],
      answer: "A,B",
      title: "Question 13",
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
      title: "Question 14",
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
      title: "Question 15",
    },
    {
      content:
        "Refer to the following code that runs in an Execute Anonymous block:",
      options: [
        "A. The total number of records processed as a result of DML statements will be exceeded.",
        "B. The total number of DML statements will be exceeded.",
        "C. The transaction will succeed and the first ten thousand records will be committed to the database.",
        "D. In an environment where the full result set is returned, what is a possible outcome of this code?",
      ],
      answer: "A",
      title: "Question 16",
    },
    {
      content:
        "A Lightning component has a wired property, searchResults, that stores a list of Opportunities. Which definition of the Apex method, to which the searchResults property is wired, should be used?",
      options: [
        "A. @AuraEnabled(cacheable=false)public List<Opportunity> search(String term) { /*implementation*/ }",
        "B. @AuraEnabled(cacheable=true)public List<Opportunity> search(String term) { /*implementation*/ }",
        "C. @AuraEnabled(cacheable=false)public static List<Opportunity> search(String term) { /*implementation*/ }",
        "D. @AuraEnabled(cacheable=true)public static List<Opportunity> search(String term) { /* implementation*/ }",
      ],
      answer: "D",
      title: "Question 17",
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
      title: "Question 18",
    },
    {
      content:
        "A developer wants to mark each Account in a List<Account> as either or Inactive based on the LastModified field value being more than 90 days.Which Apex technique should the developer use?",
      options: [
        "A. An If/else statement, with a for loop inside",
        "B. A for loop, with a switch statement inside",
        "C. A Switch statement, with a for loop inside",
        "D. A for loop, with an if/else statement inside",
      ],
      answer: "D",
      title: "Question 19",
    },
    {
      content:
        "A developer created these three Rollup Summary fields in the custom object, Project_ct,The developer is asked to create a new field that shows the ratio between rejected and approved timesheets for a given project.Which should the developer use to Implement the business requirement in order to minimize maintenance overhead?",
      options: [
        "A. Apex Trigger",
        "B. Formula field",
        "C. Record-triggered Flow",
        "D. Process Builder",
      ],
      answer: "B",
      title: "Question 20",
    },
    {
      content: "Which two characteristics are true for Aura component events?",
      options: [
        "A. Calling event, stopPropagation ( ) may or may not stop the event propagation based of the current propagation phase.",
        "B. Only parent components that create subcomponents (either in their markup or programmatically) can handle events.",
        "C. The event propagates to every owner In the containment hierarchy.",
        "D. If a container component needs to handle a component event, add a handleFacets='' attribute to Its handler.",
      ],
      answer: "A,C",
      title: "Question 21",
    },
    {
      content:
        "An Apex method, getAccounts, that returns a List of Accounts given a searchTerm, is available for Lightning Web components to use.What is the correct definition of a Lightning Web component property that uses the getAccounts method?",
      options: ["A. Option A", "B. Option C", "C. Option D", "D. Option B"],
      answer: "A",
      title: "Question 22",
    },
    {
      content:
        "A developer created a Lightning web component called statusComponent to be inserted into the Account record page.Which two things should the developer do to make the component available?",
      options: [
        "A. Add <isExposed> true</isExposed> to the statusComponent.js-meta ml file.",
        "B. Add < masterLabel>Account</master Label> to the statusComponent.js-meta ml file.",
        "C. Add <target> lighting _RecordPage </target> to the statusComponent.js-meta ml file.",
        "D. Add<target> Lightning_RecordPage </target> to the statusComponent.js file.",
      ],
      answer: "A,C",
      title: "Question 23",
    },
    {
      content:
        "Which two statements true about Getter and Setter methods as they relate to Visualforce? Choose 2 answers",
      options: [
        "A. Setter methods can pass a value from a controller to a page.",
        "B. There is no guarantee for the order in which Getter or Setter methods are executed.",
        "C. Getter methods can pass a value from a controller to a page.",
        "D. Setter methods always have to be declared global.",
      ],
      answer: "A,B",
      title: "Question 24",
    },
    {
      content:
        "What are two use cases for executing Anonymous Apex code? Choose 2 answers",
      options: [
        "A. To schedule an Apex class to run periodically",
        "B. To add unit test code coverage to an org",
        "C. To delete 15,000 inactive Accounts In a single transaction after a deployment",
        "D. To run a batch Apex class to update all Contacts",
      ],
      answer: "A,D",
      title: "Question 25",
    },
    {
      content:
        "Which two are best practices when it comes to component and application event handling? (Choose two.)",
      options: [
        "A. Use component events to communicate actions that should be handled at the application level.",
        "B. Handle low-level events in the event handler and re-fire them as higher-level events.",
        "C. Try to use application events as opposed to component events.",
        "D. Reuse the event logic in a component bundle, by putting the logic in the helper.",
      ],
      answer: "B,D",
      title: "Question 26",
    },
    {
      content:
        "A developer has a single custom controller class that works with a Visualforce Wizard to support creating and editing multiple subjects. The wizard accepts data from user inputs across multiple Visualforce pages and from a parameter on the initial URL.Which three statements are useful inside the unit test to effectively test the custom controller?Choose 3 answers",
      options: [
        "A. insert pageRef.",
        "B. Test.setCurrentPage(pageRef);",
        "C. ApexPages.CurrentPage().getParameters().put('input\\', 'TestValue');",
        "D. String nextPage - controller.save().getUrl();",
        "E. public ExtendedController(ApexPages StandardController cntrl) { }",
      ],
      answer: "B,C,D",
      title: "Question 27",
    },
    {
      content:
        "Given the following block code: try{ List <Accounts> retrievedRecords = [SELECT Id FROM Account WHERE Website = null]; }catch(Exception e){ //manage exception logic } What should a developer do to ensure the code execution is disrupted if the retrievedRecordslist remains empty after the SOQL query?",
      options: [
        "A. Check the state of the retrievedRecords variable and use System.assert(false) if the variable is empty",
        "B. Check the state of the retrievedRecords variable and access the first element of the list if the variable is empty.",
        "C. Replace the retrievedRecords variable declaration from ftount to a single Account.",
        "D. Check the state of the retrieveRecords variable and throw a custom exception if the variable is empty.",
      ],
      answer: "A",
      title: "Question 28",
    },
    {
      content:
        "A developer has to identify a method in en Apex class that performs resource intensive actions in memory by iterating over the result set of a SOQL statement on the account. The method also performs a SOQL statement to save the changes to the database.Which two techniques should the developer implement as a best practice to ensure transaction control and avoid exceeding governor limits?Choose 2 answers",
      options: [
        "A. Use the System.Limit class to monitor the current CPU governor limit consumption.",
        "B. Use the @ReadOnly annotation to bypass the number of rows returned by a SOQL.",
        "C. Use the Database.Savepoint method to enforce database integrity.",
        "D. Use Partial DHL statements to ensure only valid data is committed.",
      ],
      answer: "A,C",
      title: "Question 29",
    },
    {
      content:
        "A developer is debugging the following code to determinate why Accounts are not being created Account a = new Account(Name = 'A'); Database.insert(a, false); How should the code be altered to help debug the issue?",
      options: [
        "A. Collect the insert method return value a Saveresult variable",
        "B. Set the second insert method parameter to TRUE",
        "C. Add a try/catch around the insert method",
        "D. Add a System.debug() statement before the insert method",
      ],
      answer: "A",
      title: "Question 30",
    },
    {
      content:
        "A developer created a weather app that contains multiple Lightning web components.One of the components, called Toggle, has a toggle for Fahrenheit or Celsius units. Another component, called Temperature, displays the current temperature in the unit selected in the Toggle component When a user toggles from Fahrenheit to Celsius or vice versa in the Toggle component, the information must be sent to the Temperature component so the temperature can be converted and displayed.What is the recommend way to accomplish this?",
      options: [
        "A. Use Lightning Message Service to communicate between the component.",
        "B. Create a custom event to handle the communicate between the components.",
        "C. The Toggle component should call a method in the Temperature component.",
        "D. Use Lightning Message Service to communicate between the components.",
      ],
      answer: "B",
      title: "Question 31",
    },
    {
      content:
        "In the Lightning UI, where should a developer look to find information about a Paused Flow Interview?",
      options: [
        "A. On the Paused Row Interviews related List for a given record",
        "B. In the system debug log by Altering on Paused Row Interview",
        "C. On the Paused Row Interviews component on the Home page",
        "D. In the Paused Interviews section of the Apex Flex Queue",
      ],
      answer: "D",
      title: "Question 32",
    },
    {
      content:
        "The Job_Application__c custom object has a field that is a Master-Detail relationship to the Contact object, where the Contact object is the Master. As part of a feature implementation, a developer needs to retrieve a list containing all Contact records where the related Account Industry is 'Technology' while also retrieving the contact's Job_Application__c records.Based on the object's relationships, what is the most efficient statement to retrieve the list of contacts?",
      options: [
        "A. [SELECT Id, (SELECT Id FROM Job_Applications_r) FROM Contact WHEREAccounts.Industry = 'Technology'];",
        "B. [SELECT Id, (SELECT Id FROM Job_Application_c) FROM Contact WHEREAccount.Industry = 'Technology'];",
        "C. [SELECT Id, (SELECT Id FROM Job_Applications_r) FROM Contact WHEREAccount.Industry = 'Technology'];",
        "D. [SELECT Id, (SELECT Id FROM Job_Applications_c) FROM Contact WHEREAccounts.Industry = 'Technology'];",
      ],
      answer: "C",
      title: "Question 33",
    },
    {
      content:
        "Which two statements are true about Getter and Setter methods as they relate to Visualforce?",
      options: [
        "A. Setter methods always have to be declared global.",
        "B. There is no guarantee for the order in which Getter methods are called.",
        "C. Getter methods pass values from a controller to a page.",
        "D. A corresponding Setter method is required for each Getter method.",
      ],
      answer: "C,D",
      title: "Question 34",
    },
    {
      content:
        "When importing and exporting data into Salesforce, which two statements are true?Choose 2 answers",
      options: [
        "A. Data import wizard is a client application provided by Salesforce.",
        "B. Bulk API can be used to import large data volumes in development environments without bypassing the storage limits.",
        "C. Developer and Developer Pro sandboxes have different storage limits.",
        "D. Bulk API can be used to bypass the storage limits when importing large data volumes in development environments.",
      ],
      answer: "A,C",
      title: "Question 35",
    },
    {
      content:
        "For which three items can a trace flag be configured?Choose 3 answers",
      options: [
        "A. User",
        "B. Process Builder",
        "C. Apex Class",
        "D. Visualforce",
        "E. Apex Trigger",
      ],
      answer: "A,C,E",
      title: "Question 36",
    },
    {
      content:
        "A developer is creating a Lightning web component to show a list of sales records.The Sales Representative user should be able to see the commission-field on each record. The Sales Assistance user should be able to see all field on the record except the commission field.How should this be enforced so that the component works for both users without showing any errors?",
      options: [
        "A. Use security. stripInaccessible to remove fields inaccessible to the current user.",
        "B. Use with SECURITY_EMFoRCED in the SOQL that fetches the data for the component.",
        "C. Use Lightning Data Service to get the collection of sales records.",
        "D. Use Lightning Locker Service to enforce sharing rules and field-level security.",
      ],
      answer: "A",
      title: "Question 37",
    },
    {
      content:
        "If apex code executes inside the execute() method of an Apex class when implementing the Batchable interface, which statement are true regarding governor limits? Choose 2 answers",
      options: [
        "A. The Apex governor limits are relaxed while calling the constructor of the Apex class.",
        "B. The apex governor limits are reset for each iteration of the execute() method.",
        "C. The Apex governor limits cannot be exceeded due to the asynchronous nature of the transaction,",
        "D. The Apex governor limits might be higher due to the asynchronous nature of the transaction.",
      ],
      answer: "B,D",
      title: "Question 38",
    },
    {
      content:
        "A developer is building custom search functionality that uses SOSL to search account and contact records that match search terms provided by the end user. The feature is exposed through a Lightning web component, and the end user is able to provide a list of terms to search.Consider the following code snippet:What is the maximum number of search terms the end user can provide to successfully execute the search without exceeding a governor limit?",
      options: ["A. 200", "B. 20", "C. 2,000", "D. 150"],
      answer: "D",
      title: "Question 39",
    },
    {
      content:
        "what are the methods used to show input in classic and lightning ?",
      options: [
        "A. Use visualforce page in classic and lightning component in lightning",
      ],
      answer: "A",
      title: "Question 40",
    },
    {
      content:
        "Given the code below:What should a developer do to correct the code so that there is no chance of hitting a governor limit?",
      options: [
        "A. Rework the code and eliminate the for loop.",
        "B. Add a LIMIT clause to the first SELECT SOQL statement.",
        "C. combine the two SELECT statements into a single SOQL statement.",
        "D. Add a WHERE clause to the first SELECT SOQL statement.",
      ],
      answer: "B",
      title: "Question 41",
    },
    {
      content:
        "A developer must build application that tracks which Accounts have purchase specific pieces of equal products. Each Account could purchase many pieces of equipment.How should the developer track that an Account has purchased a piece of equipment.",
      options: [
        "A. Use the Asset object.",
        "B. Use a Lookup on Account to product.",
        "C. Use a Master-Detail on Product to Account",
        "D. Use a Custom object.",
      ],
      answer: "C",
      title: "Question 42",
    },
    {
      content:
        "A developer must modify the following code snippet to prevent the number of SOQL queries issued from exceeding the platform governor limit. public class without sharing OpportunityService( public static List<OpportunityLineItem> getOpportunityProducts(Set<Id> opportunityIds){ List<OpportunitylineItem> oppLineItems = new List<OpportunityLineItem>(); for(Id thisOppId : opportunityIds){ oppLineItems.addAll([Select Id FROM OpportunityLineItems WHERE OpportunityId = :thisOppId)]; } return oppLineItems; } } The above method might be called during a trigger execution via a Lightning component. Which technique should be implemented to avoid reaching the governor limit?",
      options: [
        "A. Refector the code above to perform the SOQL query only if the Set of opportunityIds contains less 100 Ids.",
        "B. Use the System.Limits.getQueries() method to ensure the number of queries is less than 100.",
        "C. Refactor the code above to perform only one SOQL query, filtering by the Set of opportunityIds.",
        "D. Use the System.Limits.getlimitQueries() method to ensure the number of queries is less than 100.",
      ],
      answer: "C",
      title: "Question 43",
    },
    {
      content:
        "How can a developer check the test coverage of active Process Builder and Flows deploying them in a Changing Set?",
      options: [
        "A. Use the code Coverage Setup page",
        "B. Use SOQL and the Tooling API",
        "C. Use the Flow properties page.",
        "D. Use the Apex testresult class",
      ],
      answer: "B",
      title: "Question 44",
    },
    {
      content:
        "Considering the following code snippet:When the code executes a DML exception is thrown.How should the developer modify the code to ensure exceptions are handled gracefully?",
      options: [
        "A. Remove null items from the list if Accounts.",
        "B. Implement Change Data Capture",
        "C. Implement the upsert DML statement.",
        "D. Implement a try/catch block for the DML.",
      ],
      answer: "D",
      title: "Question 45",
    },
    {
      content:
        "A team of developers is working on a source-driven project that allows them to work independently, with many different org configurations. Which type of Salesforce orgs should they use for their development?",
      options: [
        "A. Developer orgs",
        "B. Developer sandboxes",
        "C. Full Copy sandboxes",
        "D. Scratch orgs",
      ],
      answer: "D",
      title: "Question 46",
    },
    {
      content:
        "Which Lightning code segment should be written to declare dependencies on a Lightning component, c:accountList, that is used in a Visualforce page?A)B)C)D)",
      options: ["A. Option D", "B. Option A", "C. Option C", "D. Option B"],
      answer: "B",
      title: "Question 47",
    },
    {
      content:
        "A primaryid_c custom field exists on the candidate_c custom object. The filed is used to store each candidate's id number and is marked as Unique in the schema definition.As part of a data enrichment process. Universal Containers has a CSV file that contains updated data for all candidates in the system, the file contains each Candidate's primary id as a data point. Universal Containers wants to upload this information into Salesforce, while ensuring all data rows are correctly mapped to a candidate in the system.Which technique should the developer implement to streamline the data upload?",
      options: [
        "A. Upload the CSV into a custom object related to Candidate_c.",
        "B. Create a Process Builder on the Candidate_c object to map the records.",
        "C. Update the primaryid__c field definition to mark it as an External Id",
        "D. Create a before Insert trigger to correctly map the records.",
      ],
      answer: "C",
      title: "Question 48",
    },
    {
      content: "What can be developed using the Lightning Component framework?",
      options: [
        "A. Hosted web applications",
        "B. Dynamic web sites",
        "C. Single-page web apps",
        "D. Salesforce integrations",
      ],
      answer: "C",
      title: "Question 49",
    },
    {
      content:
        "Universal Containers stores Orders and Line Items in Salesforce. For security reason, financial representatives are allowed to see information on the Order such as order amount, but they are not allowed to see the Line items on the Order. Which type of relationship should be used?",
      options: [
        "A. Direct Lookup",
        "B. Indirect lookup",
        "C. Master Detail",
        "D. Lookup",
      ],
      answer: "D",
      title: "Question 50",
    },
    {
      content:
        "What is a key difference between a Master-Detail Relationship and a Lookup Relationship?",
      options: [
        "A. When a record of a master object in a Master-Detail Relationship is deleted, the detail records are kept and not deleted.",
        "B. A Master-Detail Relationship detail record inherits the sharing and security of its master record.",
        "C. When a record of a master object in a Lookup Relationship is deleted, the detail records are also deleted.",
        "D. A Lookup Relationship is a required field on an object.",
      ],
      answer: "B",
      title: "Question 51",
    },
    {
      content:
        "The orderHelper class is a utility class that contains business logic for processing orders. Consider the following code snippet:A developer needs to create a constant named DELIVERY_MULTIFILTER with a value of 4.15. The value of the constant should not change at any time in the code.How should the developer declare the DELIVERY_MULTIFILTER constant to meet the business objectives?",
      options: [
        "A. Constant decimal DELIVERY_MULTIFILTER = 4.15;",
        "B. Static final decimal DELIVERY_MULTIFILTER = 4.15;",
        "C. Static decimal DELIVERY_MULTIFILTER = 4.15;",
        "D. Decimal DELIVERY_MULTIFILTER = 4.15;",
      ],
      answer: "B",
      title: "Question 52",
    },
    {
      content:
        "Which statement is true about developing in a multi-tenant environment?",
      options: [
        "A. Org-level data security controls which users can see data from multiple tenants on the same instance",
        "B. Global apex classes can be referenced from multiple tenants on the same instance",
        "C. Apex sharing controls access to records fomr multiple tenants on the same instance",
        "D. Governor limits prevent apex from impactiong the performance of multiple tenants on the same instance",
      ],
      answer: "D",
      title: "Question 53",
    },
    {
      content:
        'A developer uses a loop to check each Contact in a list. When a Contact with the Title of"Boss" is found, the Apex method should jump to the first line of code outside of the for loop.Which Apex solution will let the developer implement this requirement?',
      options: ["A. Exit", "B. Continue", "C. break;", "D. Next"],
      answer: "C",
      title: "Question 54",
    },
    {
      content:
        "Which three Salesforce resources can be accessed from a Lightning web component?Choose 3 answers",
      options: [
        "A. Third-party web components",
        "B. All external libraries",
        "C. SVG resources",
        "D. Content asset files",
        "E. Static resources",
      ],
      answer: "B,C,E",
      title: "Question 55",
    },
    {
      content:
        "A developer wants to invoke on outbound message when a record meets a specific criteria.Which three features satisfy this use case?Choose 3 answer",
      options: [
        "A. Process builder can be used to check the record criteria and send an outbound messagewithout Apex Code.",
        "B. Visual Workflow can be used to check the record criteria and send an outbound message without Apex Code.",
        "C. Process builder can be used to check the record criteria and send an outbound message with Apex Code.",
        "D. Approval Process has the capacity to check the record criteria and send an outbound message without Apex Code",
        "E. workflows can be used to check the record criteria and send an outbound message.",
      ],
      answer: "C,D,E",
      title: "Question 56",
    },
    {
      content:
        "When a user edits the Postal Code on an Account, a custom Account text field named ''Timezone'' must be updated based on the values in a postalCodeToTimezone_c custom object.What should be built to implement this feature?",
      options: [
        "A. Account assignment rule",
        "B. Account custom trigger",
        "C. Account approval process",
        "D. Account workflow rule",
      ],
      answer: "B",
      title: "Question 57",
    },
    {
      content: "What can used to delete components from production?",
      options: [
        "A. An ant migration tool deployment with a destructivechanges XML file and an empty package .xml file",
        "B. A change set deployment with a destructivechanges XML file",
        "C. A change set deployment with the delete option checked",
        "D. An ant migration tool deployment with destructivechanges xml file and the components to delete in the package .xml file",
      ],
      answer: "D",
      title: "Question 58",
    },
    {
      content:
        "An org has an existing Visual Flow that creates an Opportunity with an Update records element. A developer must update the Visual Flow also created a Contact and store the created Contact's ID on the Opportunity.",
      options: [
        "A. Add a new Get Records element.",
        "B. Add a new Create records element.",
        "C. Add a new Update records element",
        "D. Add a new Quick Action (of type create) element.",
      ],
      answer: "B",
      title: "Question 59",
    },
    {
      content:
        "A develop completed modification to a customized feature that is comprised of two elements:Apex triggerTrigger handler Apex classWhat are two factors that the developer must take into account to properly deploy the modification to the production environment?",
      options: [
        "A. Test methods must be declared with the testMethod keyword.",
        "B. Apex classes must have at least 75% code coverage org-wide.",
        "C. All methods in the test classes must use @isTest.",
        "D. At least one line of code must be executed for the Apex trigger.",
      ],
      answer: "B,D",
      title: "Question 60",
    },
    {
      content:
        "A developer receives an error when trying to call a global server-side method using the remoteAction decorator.How can the developer resolve the error?",
      options: [
        "A. Change the function signature to be private static.",
        "B. Add static to the server-side method signature.",
        "C. A Decorate the server-side method with (static=true).",
        "D. Decorate the server-side method with (static=false).",
      ],
      answer: "B",
      title: "Question 61",
    },
    {
      content:
        "When using SalesforceDX, what does a developer need to enable to create and manage scratch orgs?",
      options: [
        "A. Production",
        "B. Dev Hub",
        "C. Sandbox",
        "D. Environment Hub",
      ],
      answer: "B",
      title: "Question 62",
    },
    {
      content:
        "Which Apex class contains methods to return the amount of resources that have been used for a particular governor, such as the number of DML statements?",
      options: ["A. Limits", "B. OrgLimits", "C. Exception", "D. Messaging"],
      answer: "A",
      title: "Question 63",
    },
    {
      content:
        "Which three resources in an Azure Component can contain JavaScript functions?",
      options: [
        "A. Style",
        "B. helper",
        "C. Controllers",
        "D. Renderer",
        "E. Design",
      ],
      answer: "B,C,D",
      title: "Question 64",
    },
    {
      content:
        "How many accounts will be inserted by the following block ofcode? for(Integer i = 0 ; i < 500; i++) { Account a = new Account(Name='New Account ' + i); insert a; }",
      options: ["A. 0", "B. 100", "C. 500", "D. 150"],
      answer: "A",
      title: "Question 65",
    },
    {
      content:
        "Which statement should be used to allow some of the records in a list of records to be inserted rf others fail to be inserted?",
      options: [
        "A. Database.insert(records, false)",
        "B. insert records",
        "C. insert (records, false)",
        "D. Database.insert(records, true)",
      ],
      answer: "A",
      title: "Question 66",
    },
    {
      content:
        "An org has an existing Flow that creates an Opportunity with an Update Records element. A developer update the Flow to also create a Contact and store the created Contact's ID on the Opportunity.Which update should the developer make in the Flow?",
      options: [
        "A. Add a new Create Records element.",
        "B. Add a new Update Records element.",
        "C. Add a new Get Records element.",
        "D. Add a new Quick Action element(of type Create).",
      ],
      answer: "A",
      title: "Question 67",
    },
    {
      content:
        "What is a benefit of developing applications in a multi-tenant environment?",
      options: [
        "A. Enforced best practices for development",
        "B. Unlimited processing power and memory",
        "C. Default out-of-the-box configuration",
        "D. Access to predefined computing resources",
      ],
      answer: "C",
      title: "Question 68",
    },
    {
      content:
        "A developer is asked to create a Visualforce page for Opportunities that allows users to save or merge the current record.Which approach should the developer to meet this requirement?",
      options: [
        "A. Standard controller methods",
        "B. A custom controller extension",
        "C. A custom controller",
        "D. Visualforce page JavaScript",
      ],
      answer: "C",
      title: "Question 69",
    },
    {
      content:
        "A software company uses the following objects and relationships:* Case: to handle customer support issues* Defect_c: a custom object to represent known issues with the company's software* case_Defect__c: a junction object between Case and Defector to represent that a defect Is a customer issue What should be done to share a specific Case-Defect_c record with a user?",
      options: [
        "A. Share the Case_Defect_c record.",
        "B. Share the parent Case and Defect_c records.",
        "C. Share the parent Case record.",
        "D. Share the parent Defect_c record.",
      ],
      answer: "B",
      title: "Question 70",
    },
    {
      content:
        "A developer created a trigger on the Account object and wants to test if the trigger is properly bulklfield. The developer team decided that the trigger should be tested with 200 account records with unique names.What two things should be done to create the test data within the unit test with the least amount of code? Choose 2 answers A developer created a trigger on the Account object and wants to test if the trigger is properly bulklfield. The developer team decided that the trigger should be tested with 200 account records with unique names.What two things should be done to create the test data within the unit test with the least amount of code?Choose 2 answers",
      options: [
        "A. Use the @isTest(isParallel=true) annotation in the test class.",
        "B. Use Test.loadData to populate data in your test methods.",
        "C. Use the @isTest(seeAllData=true) annotation in the test class.",
        "D. Create a static resource containing test data.",
      ],
      answer: "B,D",
      title: "Question 71",
    },
    {
      content:
        "Given the following Anonymous Block:Which one do you like?What should a developer consider for an environment that has over 10,000 Case records?",
      options: [
        "A. The transaction will fail due to exceeding the governor limit.",
        "B. The try/catch block will handle exceptions thrown by governor limits.",
        "C. The transaction will succeed and changes will be committed.",
        "D. The try/catch block will handle any DML exceptions thrown.",
      ],
      answer: "C",
      title: "Question 72",
    },
    {
      content:
        "Which two settings must be defined in order to update a record of a junction object? Choose 2 answers",
      options: [
        "A. Read/Write access on the secondary relationship",
        "B. Read access on the primary relationship",
        "C. Read/Write access on the primary relationship",
        "D. Read/Write access on the junction object",
      ],
      answer: "A,C",
      title: "Question 73",
    },
    {
      content:
        "A developer needs to implement the functionality for a service agent to gather multiple pieces of information from a customer in order to send a replacement credit card.Which automation tool meets these requirements?",
      options: ["A. Flow Builder"],
      answer: "A",
      title: "Question 74",
    },
    {
      content:
        "A Salesforce Administrator is creating a record-triggered flow. When certain criteria are met, the flow must call an Apex method to execute complex validation involving several types of objects.When creating the Apex method, which annotation should a developer use to ensure the method Can be used within the flow?",
      options: [
        "A. @future",
        "B. @InvocableMethod",
        "C. @AuraEnaled",
        "D. @RemoteAction",
      ],
      answer: "B",
      title: "Question 75",
    },
    {
      content:
        "A Visual Flow uses an apex Action to provide additional information about multiple Contacts, stored in a custom class, contactInfo. Which is the correct definition of the Apex method that gets additional information?",
      options: [
        "A. @invocableMethod(label)='Additional Info')public static List<ContactInfo> getInfo(List<Id> contactIds){ /*Implementation*/ }",
        "B. @InvocableMethod(Label='additional Info')public ContactInfo(Id contactId){ /*implementation*/ }",
        "C. @InvocableMethod(label='Additional Info')public List<ContactInfo> getInfo(List<Id> contactIds){ /*implementation*/ }",
        "D. @InvocableMethod(label='additional Info')public static ContactInfo getInfo(Id contactId){ /*implementation*/ }",
      ],
      answer: "A",
      title: "Question 76",
    },
    {
      content:
        "What are two ways that a controller and extension can be specified on a Visualforce page?Choose 2 answers",
      options: [
        'A. Qo apex:page standardController="Account" extensions="myControllerExtension"',
        'B. apex:page controller="Account" extensions="myControllerExtension""',
        'C. [email protected]:page=Account extends="myControllerExtension"',
        'D. apex:page controllers="Account, myControllerExtension"',
      ],
      answer: "A,B",
      title: "Question 77",
    },
    {
      content:
        "Which standard field is required when creating a new contact record?",
      options: ["A. Name", "B. FirstName", "C. AccountId", "D. LastName"],
      answer: "D",
      title: "Question 78",
    },
    {
      content:
        "Einstein Next Best Action Is configured at Universal Containers to display recommendations to internal users on the Account detail page.If the recommendation is approved, a new opportunity record and task should be generated. If the recommendation is rejected, an Apex method must be executed to perform a callout to an external system.Which three factors should a developer keep Hi mind when implementing the Apex method?Choose 3 answers",
      options: [
        "A. The method must be defined as static.",
        "B. The method must be defined as public.",
        "C. The method must use the @invocableMethod annotation.",
        "D. The method must use the @Future annotation.",
        "E. The method must use the @AuraEnabled annotation.",
      ],
      answer: "A,B,D",
      title: "Question 79",
    },
    {
      content:
        "A developer is implementing an Apex class for a financial system. Within the class, the variables 'creditAmount' and 'debtAmount' should not be able to change once a value is assigned. In which two ways can the developer declare the variables to ensure their value can only be assigned one time? Choose 2 answers",
      options: [
        "A. Use the final keyword and assign its value in the class constructor.",
        "B. Use the static keyword and assign its value in the class constructor.",
        "C. Use the static keyword and assign its value in a static initializer.",
        "D. Use the final keyword and assign its value when declaring the variable.",
      ],
      answer: "A,D",
      title: "Question 80",
    },
    {
      content: "What should be used to create scratch orgs?",
      options: [
        "A. Workbench",
        "B. Developer Console",
        "C. Salesforce CLI",
        "D. Sandbox refresh",
      ],
      answer: "C",
      title: "Question 81",
    },
    {
      content:
        "Application Events follow the traditional publish-subscribe model. Which method is used to fire an event?",
      options: [
        "A. RegisterEvent()",
        "B. FireEvent()",
        "C. Fire()",
        "D. Emit()",
      ],
      answer: "C",
      title: "Question 82",
    },
    {
      content:
        "What is the maximum number of SOQL queries used by the following code? List<Account> aList = [SELECT Id FROM Account LIMIT 5]; for (Account a : aList){ List<Contact> cList = [SELECT Id FROM Contact WHERE AccountId = :a.Id); }",
      options: ["A. 2", "B. 1", "C. 6", "D. 5"],
      answer: "C",
      title: "Question 83",
    },
    {
      content:
        'A Licensed_Professional__c custom object exist in the system with two Master-Detail fields for the following objects: Certification__c and Contact. Users with the "Certification Representative" role can access the Certification records they own and view the related Licensed Professionals records, however users with the "Salesforce representative" role report they cannot view any Licensed professional records even though they own the associated Contact record. What are two likely causes of users in the "Sales Representative" role not being able to access the Licensed Professional records? Choose 2 answers',
      options: [
        "A. The organization's sharing rules for Licensed_Professional__c have not finished their recalculation process.",
        "B. The organization has a private sharing model for Certification__c, and Certification__c is the primary relationship in the Licensed_Professional__c object.",
        "C. The organization has a private sharing model for Certification__c, and Contact is the primary relationship in the Licensed_Professional__c object",
        "D. The organization recently modified the Sales representative role to restrict Read/Write access to Licensed_Professional__c",
      ],
      answer: "A,B",
      title: "Question 84",
    },
    {
      content:
        "A third-party vendor created an unmanaged Lightning web component. The Salesforce Administrator wishes to expose the component only on Record Page Layouts.Which two actions should the developer take to accomplish this business objective?Choose 2 answers",
      options: [
        "A. Specify lightning_RecordPage as a target in the XML file.",
        "B. Ensure isExposed is set to true on the XML file.",
        "C. Specify lightningCommunity_Page as a target in the XML file.",
        "D. Specify lightningCommunity_Page_Layout as a target in the XML file.",
      ],
      answer: "A,B",
      title: "Question 85",
    },
    {
      content:
        "Which three process automations can immediately send an email notification to the owner of an Opportunity when its Amount is changed to be greater than $10,000? Choose 3 answers",
      options: [
        "A. Approval Process",
        "B. Process Builder",
        "C. Escalation Rule",
        "D. Flow Builder",
        "E. Workflow Rule",
      ],
      answer: "B,D,E",
      title: "Question 86",
    },
    {
      content:
        "A developer has a Visualforce page and custom controller to save Account records. The developer wants to display any validation rule violation to the user. How can the developer make sure that validation rule violations are displayed?",
      options: [
        "A. Perform the DML using the Database.upsert() method.",
        "B. Include <apex:message> on the Visualforce page.",
        "C. Use a try/catch with a custom exception class.",
        "D. Add cuatom controller attributes to display the message.",
      ],
      answer: "B",
      title: "Question 87",
    },
    {
      content:
        "A developer wrote the following two classes:The StatusFetcher class successfully compiled and saved. However, the Calculator class has a compile time error.How should the developer fix this code?",
      options: [
        "A. Make the isActive method in the StatusFetcher class public.",
        "B. Make the doCalculations method in the Calculation class private.",
        "C. Change the class declaration for the Calculator class to public with inherited sharing.",
        "D. Change the class declaration for the statusFetcher class to public with inherited sharing.",
      ],
      answer: "A",
      title: "Question 88",
    },
  ],
});
