window.testContent = window.testContent || [];
var testId = "Salesforce.Platform-App-Builder";
var testName = "Salesforce.Platform-App-Builder";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "Salesforce.Platform-App-Builder.v2021-08-03.q110",
  content: [
    {
      content:
        "Universal containers wants to ensure that they are accepting clean data from their users and verify that important fields are entered. What should an app builder recommend to meet this requirement?",
      options: [
        "A. Update the important fields to be required on the page layout",
        "B. Create a workflow rule to check the fields are formatted correctly",
        "C. Configure a validation to require a field for a specific record type",
        "D. Make a formula field to check the format of the important fields",
      ],
      answer: "C",
      title: "Question 1",
      explanation: "",
    },
    {
      content:
        "A new custom object is being created with a private sharing setting. The business wants to share individual records with specific people or group of people on a case by case basis. What options does the business user have to manually share individual records? Choose 3 answers",
      options: [
        "A. Users",
        "B. Public Groups",
        "C. Permission Sets",
        "D. Roles",
        "E. Profiles",
      ],
      answer: "A,B,D",
      title: "Question 2",
      explanation: "",
    },
    {
      content:
        "Universal Containers conduct evaluations of their sales reps using a custom object consisting of numerical scores and executive comments. The company wants to ensure that only the sales reps, and their manager's executive can view the rep's evaluation record but the reps should not be able to view the executive comment field on their review. How can these requirement be met?",
      options: [
        "A. Use a private sharing model granting record access using hierarchy; manage field access with field-level security",
        "B. Use a private sharing model granting record access using custom setting; manage field access with page layouts and field level security",
        "C. Use a private sharing model granting record access using custom setting; manage field access with record types and page layouts",
        "D. Use a private sharing model granting record access using hierarchy; manage field access with record types and field-level security",
      ],
      answer: "A",
      title: "Question 3",
      explanation: "",
    },
    {
      content:
        "Universal con needs a field on the account to track how many opportunitiesare closing within the next 30 days.\nWhat can be used?",
      options: [
        "A. Roll-up summary field",
        "B. Process builder",
        "C. Apex code",
        "D. Workflow rule",
      ],
      answer: "C",
      title: "Question 4",
      explanation: "",
    },
    {
      content:
        "When configuring a record type, an App Builder can configure the available value of a picklist field for the page layout. Which opportunity standard field is available to be configured directly in the Opportunity record type? Choose 2 answers",
      options: [
        "A. Type",
        "B. Lead Source",
        "C. Forecast Category",
        "D. Stage",
      ],
      answer: "A,B",
      title: "Question 5",
      explanation: "",
    },
    {
      content:
        "UVC uses a custom object called Candidates to track information about people who are being recruited for jobs within the company. When an employee refers a recruiting candidate, that employee should have access to the Candidate record, however, only HR users should be able to view, edit, and report on the Salary field.\nWhich action should be recommended for controlling who can view the Salary field?",
      options: [
        "A. Create and assign separate Candidate record types for general employee users and HR users",
        'B. Restrict access to the "Salary" field for general employee users using field-level security',
        'C. Restrict access to the "Salary" field for general employee users using custom sharing settings',
        "D. Create and assign separate Candidate page layouts for general employee users and HR users",
      ],
      answer: "B",
      title: "Question 6",
      explanation: "",
    },
    {
      content:
        "A custom field contains a feedback score which is on a scale of one to five. End users would like a visual indicator of one to five stars based on the number found in the feedback score custom field. How can this visual indicator be displayed?",
      options: [
        "A. Use a custom formula field.",
        "B. Use a custom text field",
        "C. Use a custom image field.",
        "D. Use a custom number field.",
      ],
      answer: "A",
      title: "Question 7",
      explanation: "",
    },
    {
      content:
        "Which statement is true for embedding a Visualforce page in a page Layout. Choose 2 Answers",
      options: [
        "A. Visualforce Pages can only be place in the Visualforce section in a page layout.",
        "B. Visualforce Pages on a page layout have attributes for width and height",
        "C. Visualforce Pages on a field set have attributes for width and height.",
        "D. Visualforce Pages can be placed anywhere in the page layout.",
      ],
      answer: "B,D",
      title: "Question 8",
      explanation: "",
    },
    {
      content:
        "User at Universal Containers needs to be able to quickly create a contact record from the Account record's Chatter feed. How should the App Builder enable the functionality?",
      options: [
        'A. By creating a custom "Create a Record" Action on the Contract',
        'B. By creating a custom "Detail Page" Button on the Account.',
        'C. By creating a custom "Detail Page" Button on the Contract.',
        'D. By creating a custom "Create a Record" Action on the Account.',
      ],
      answer: "D",
      title: "Question 9",
      explanation: "",
    },
    {
      content:
        "UVC has two types of customer support processes: Platinum and Diamond. The App Builder created separate record types for each process on the Case Object. The customer support team should not be able to create new cases with the Diamond record type. How can this requirement be met?",
      options: [
        "A. Update the OWD to private",
        "B. Update the profile to remove the Diamond record type from the support team",
        "C. Make the record type hidden to all users and then use sharing rules to share it",
        "D. Remove the ability for the support team to create new case records",
      ],
      answer: "B",
      title: "Question 10",
      explanation: "",
    },
    {
      content: "What is true about social accounts, contacts, and leads?",
      options: [
        "A. To use Social Accounts, Contacts and lead feature, a separate feature license must be assigned to the user in salesforce",
        "B. To use Social Accounts, Contacts and lead feature, users need to have a personal social network accounts for the social network they would like to view",
        "C. The social feature automatically imports the social profile for a lead or contact in salesforce if the user is connected with the lead or contact on the social network",
        "D. The social feature displays the social profile for a Lead or Contact even if the user is not connected with the Lead or Contact on the Social network",
      ],
      answer: "B",
      title: "Question 11",
      explanation: "",
    },
    {
      content:
        "Universal con has purchased a lighting component on the appExchange. Where can that component be utilized? (Choose 2)",
      options: [
        "A. Salesforce lighting app",
        "B. Visual workflow",
        "C. Lightning process builder",
        "D. Salesforce1 mobile app",
      ],
      answer: "A,D",
      title: "Question 12",
      explanation: "",
    },
    {
      content:
        "The app builder at Universal Containers has been asked to ensure that the Country field on the Account object Is captured as the two letter abbreviation How can the app builder satisfy this requirement?",
      options: [
        "A. Create a workflow rule to set values using an external data source.",
        "B. Create a validation rule to set values using an external data source",
        "C. Create a workflow rule that only allows the expected format.",
        "D. Create a validation rule that only allows the expected format",
      ],
      answer: "A",
      title: "Question 13",
      explanation: "",
    },
    {
      content:
        "SERVICE AGENTS ARE REQUIRED TO CONFIRM A USER IDENTITY BEFORE PROVIDING SUPPORT INFORMATION OVER THE PHONE. WHAT FEATURE CAN AN APP BUILDER USE TO HELP AGENTS MEET THIS REQUIREMENT?",
      options: [
        "A. Case Validation Rules",
        "B. Guided Action Flows on the record page",
        "C. Add Path to the top of the Case layout",
        "D. Include Surveys as a Case related list",
      ],
      answer: "A",
      title: "Question 14",
      explanation: "",
    },
    {
      content: "Which object can be member of a campaign? (Choose 2)",
      options: ["A. Contact", "B. Opportunity", "C. Lead", "D. Account"],
      answer: "A,C",
      title: "Question 15",
      explanation: "",
    },
    {
      content:
        "The VP of Sales wants a Chatter post to the All Sales private group when an Opportunity goes to the closed won stage.\nWhat two tools should the app builder use to automate this process?\nChoose 2 answers",
      options: [
        "A. Flow",
        "B. Workflow",
        "C. Big Deal Alert",
        "D. Process Builder",
      ],
      answer: "A,D",
      title: "Question 16",
      explanation: "",
    },
    {
      content:
        "An app builder wants to deploy a new version of an auto launched flow production in an active state so that the new functionality is immediately available to users.\nWhat should the app builder take into consideration when planning the deployment?",
      options: [
        "A. Include the profile that access the flow in the deployment",
        "B. Include the process builder calling the flow in the deployment",
        "C. Verify there is a static resource that provides test coverage for the flow",
        "D. Verify there is an apex test that provides test coverage for the flow",
      ],
      answer: "D",
      title: "Question 17",
      explanation: "",
    },
    {
      content:
        "Universal containers created a custom object called component to capture details about products sold. what approach should an app builder take to show component as a related list on product?",
      options: [
        "A. Created junction object to relate component and product. Add the component related list to the product page layout.",
        "B. Create a master-detail- relationship on product to component. Add the component related list to the product page layout.",
        "C. Create a roll-up on product. Add the component related list to the product page layout.",
        "D. Create a lookup relationship on component to product . Add the component related list to the product page layout.",
      ],
      answer: "A",
      title: "Question 18",
      explanation: "",
    },
    {
      content:
        'A custom object named Assignment has a private sharing setting that grants access using hierarchies. The organization has a role hierarchy where the "Specialist" role reports to a "Manager" role which reports to a\n"Director" role. The director role is at the top of the role hierarchy. A user who is the manager role creates a new Assignment record. Who can send this record?',
      options: [
        "A. The record owner and the specialists in their hierarchy",
        "B. The record owner and those above the specialist role in their hierarchy",
        "C. The record owner and the directors in their hierarchy.",
        "D. The record owner and the managers in their hierarchy",
      ],
      answer: "C",
      title: "Question 19",
      explanation: "",
    },
    {
      content:
        "In order to delete the Opportunities, Universal Containers would like sales reps to submit requests for approval from their sales manager. What can be used to meet these requirements?",
      options: [
        "A. Approval Process with Time-Dependent workflow action.",
        "B. Process Builder with Submit for Approval action",
        "C. Approval Process with Apex Trigger.",
        "D. Two-step Approval process.",
      ],
      answer: "C",
      title: "Question 20",
      explanation: "",
    },
    {
      content: "What is a use case for approval processes? Choose 2 answers.",
      options: [
        "A. Require the CFO to review the salary range for all job offers.",
        "B. Approve expense reports automatically when less than $50.",
        "C. Update the PTO record field with the user's manager.",
        "D. Ensure an opportunity that has at least one product added.",
      ],
      answer: "A,B",
      title: "Question 21",
      explanation: "",
    },
    {
      content:
        "UC wants to standardize their business logic. They want to ensure that workflow order is guaranteed to the same each time. Which feature can be used to accomplish this? Select 2",
      options: [
        "A. Lighting process builder",
        "B. Visual workflow",
        "C. Workflow",
        "D. Chatter actions",
      ],
      answer: "A,B",
      title: "Question 22",
      explanation: "",
    },
    {
      content:
        "Universal containers has a custom picklist called support level on the account object. They would like to show the real time value of support level on all case records. How can an app builder implement this requirement?",
      options: [
        "A. Create a roll-up summary field using support level on the account object",
        "B. Create a formula field on the account object using the ISPICKVAL function",
        "C. Create a process builder and use a field update on the case object.",
        "D. Create a formula field on the case object using the TEXT function.",
      ],
      answer: "C",
      title: "Question 23",
      explanation: "",
    },
    {
      content:
        "The Director of Marketing has asked the AppBuilder to create a formula fieldthat tracks how many days have elapsed since a contact was sent a marketingcommunication. The director is only interested in whole units.",
      options: ["A. Today()", "B. Datevalue()", "C. Now()", "D. Date()"],
      answer: "A",
      title: "Question 24",
      explanation: "",
    },
    {
      content:
        "Universal Containers needsto send an Outbound Message to an external system whenrecord has been updated.\nWhat is recommended feature to meet this requirement?",
      options: [
        "A. Workflow",
        "B. Lightning Connect",
        "C. Visual Workflow",
        "D. Process Builder",
      ],
      answer: "A",
      title: "Question 25",
      explanation: "",
    },
    {
      content:
        "What is a true statement in regard to creating custom report types?",
      options: [
        "A. Once a report type is saved with a standard or custom primary object, the primary object cannot be changed for the report type",
        "B. The detail object in a master-detail relationship cannot be added as a secondary object on a custom report type",
        "C. Any object can be chosen unless the object is not visible to the person creating the report type through security settings",
        "D. When the primary object is a custom object and is deleted, then the report type and any reports created from it must be deleted manually",
      ],
      answer: "A",
      title: "Question 26",
      explanation: "",
    },
    {
      content:
        "UVC has deployed custom tabs to Production via change sets, without including the profiles settings. What is true about the visibility of custom tabs in Enterprise Edition?",
      options: [
        "A. Custom tabs are not deployed",
        "B. Custom tabs are hidden for all users",
        "C. Custom tabs are default on for all the users",
        "D. Custom tabs are default off for all the users.",
      ],
      answer: "B",
      title: "Question 27",
      explanation: "",
    },
    {
      content:
        "What tools you need to use to migrate Metadata to Two Different Production Orgs? (3)",
      options: [
        "A. Unmanaged Package",
        "B. Force.Com Migration Tool",
        "C. Change Set",
        "D. Data Loader",
        "E. Force.Com IDE",
      ],
      answer: "A,B,E",
      title: "Question 28",
      explanation: "",
    },
    {
      content:
        "Universal Containers uses a private sharing model for opportunities. This model CANNOT be changed due to a regional structure A new sales operations team has been created. This team needs to perform analysis on Opportunity data, all should have read arid write access to all Opportunities.\nWhat are two recommended solutions for the app builder to give the users appropriate access? Choose 2 answers",
      options: [
        "A. Create a criteria based sharing rule to all opportunities with the sales operations public group.",
        "B. Add a manual share for all opportunities with each user on the sales operations team.",
        "C. Create a criteria-based sharing rule to share all opportunities with the sales operations private group",
        "D. Add a permission set with 'View All\" and 'Modify All'' opportunity permissions enabled.",
      ],
      answer: "B",
      title: "Question 29",
      explanation: "",
    },
    {
      content:
        "What type of field can be referenced by a Roll-up Summary field using SUM? Choose 3 answers",
      options: [
        "A. Formula",
        "B. Currency",
        "C. Number",
        "D. Percent",
        "E. Date",
      ],
      answer: "B,C,D",
      title: "Question 30",
      explanation:
        "Explanation\n https://help.salesforce.com/HTViewHelpDoc?id=fields_about_roll_up_summary_fields.htm",
    },
    {
      content:
        "The app builder at UVC has been asked to ensure that the amount field ispopulated when the stage is set to closed won. What can be used to meet this requirement?",
      options: [
        "A. Workflow",
        "B. Validation rule",
        "C. Approval process",
        "D. Lighting process builder",
      ],
      answer: "A",
      title: "Question 31",
      explanation: "",
    },
    {
      content:
        "Which two features can extend record access beyond the organization-wide defaults?",
      options: [
        "A. Owner-based sharing rules",
        "B. Dynamic role hierarchy",
        "C. Public or private groups",
        "D. Criteria-based sharing rules",
      ],
      answer: "A,D",
      title: "Question 32",
      explanation: "",
    },
    {
      content:
        "What metadata changes can be made directly in a production environment without deploying from sandbox?\nChoose 2 answers",
      options: [
        "A. Apex Triggers",
        "B. Visualforce Pages",
        "C. Validation Rules",
        "D. Apex Classes",
      ],
      answer: "B,C",
      title: "Question 33",
      explanation: "",
    },
    {
      content:
        "Which is correctly referencing a field on the Force.com custom object Position__c?",
      options: [
        "A. [&Position__c.Status__c]",
        "B. {!Position__c.Status__c}",
        "C. {&Position__c.Status__c}",
        "D. [!Position__c.Status__c]",
      ],
      answer: "B",
      title: "Question 34",
      explanation: "",
    },
    {
      content:
        "Ann app builder has been to display an overdue date that is two months after a tasks due date. Which approach should the app builder take?",
      options: [
        "A. Use process builder and set overdue date equal to DueDate + ((365/12)*2)",
        "B. Use process builder and set overdue Date equal to DueDate + 60",
        "C. Create a formula field using the ADDMONTHS () function",
        "D. Create a formula field using DueDate + 60",
      ],
      answer: "C",
      title: "Question 35",
      explanation: "",
    },
    {
      content: "What is a true statement when deleting a dashboard?",
      options: [
        "A. Deleting a dashboard requires a user to first edit the components to remove the underlying reports",
        "B. Deleting a dashboard also deletes the components within it. It does not delete the custom reports used by the components.",
        "C. Deleting a dashboard also deletes the components within it, as well as the custom reports used by the components",
        "D. Deleting a dashboard does not move the dashboard to the recycle bin and therefore the dashboard cannot be recovered.",
      ],
      answer: "B",
      title: "Question 36",
      explanation: "",
    },
    {
      content:
        "What salesforce functionality is ignored when processing field updates in workflow rules and approval processes? Choose 3 answers",
      options: [
        "A. Validation Rules",
        "B. Multiple Currencies",
        "C. Field Level Security",
        "D. Record Type Picklist Value Assignments",
        "E. Decimal Places and Character Limits",
      ],
      answer: "A,C,D",
      title: "Question 37",
      explanation: "",
    },
    {
      content:
        "What is a section of the Lightning App Builder Tool? Choose 3 Answers",
      options: [
        "A. Mobile Cards",
        "B. Components",
        "C. Selected Publisher Actions",
        "D. Canvas",
        "E. Mini Page Layout",
      ],
      answer: "B,C,D",
      title: "Question 38",
      explanation: "",
    },
    {
      content:
        "The VP of account management at Universal Containers has requested that all contacts mailing postal codes match the associated accounts shipping postal code. How can this be enforced using validation rules?",
      options: [
        "A. Create a validation rule using a compare operator",
        "B. Create a validation rule using the distance() function",
        "C. Create a validation rule using a not equal operator",
        "D. Create a validation rule using the geolocation() function",
      ],
      answer: "C",
      title: "Question 39",
      explanation: "",
    },
    {
      content:
        "Universal container manages internal projects by department using a custom object called projects. Only employees in the project's respective department should have view access to all of the department's project records. If an employee changes job roles and moves to another department, the employee should no longer have access to the projects within their former department. How can these requirements be met, assuming the organization-wide default for projects is set to private? Choose 2 answers",
      options: [
        "A. Create a criteria based sharing rule using the projects department that grants access to users by profiles",
        "B. Create a criteria based sharing rule using the projects department that grants access to users by roles.",
        "C. Create a criteria based sharing rule using the projects department that grants access to users by permission set.",
        "D. Create a criteria based sharing rule using the projects department that grants access to users by public groups.",
      ],
      answer: "B,D",
      title: "Question 40",
      explanation: "",
    },
    {
      content:
        "Universal Containers has deployed custom tabs through change sets, without including the profiles, to Production (Enterprise Edition). Which statement is true in regards to the visibility of custom tabs?",
      options: [
        "A. Custom tabs are hidden for all users.",
        "B. Custom tabs are default off for all users.",
        "C. Custom tabs are default on for all users.",
        "D. Custom tabs are exposed for all users.",
      ],
      answer: "A",
      title: "Question 41",
      explanation: "",
    },
    {
      content:
        "UC would like to embed a chart of all related opportunities, by stage, on the account details page. Which type of report should use",
      options: [
        "A. A tabular report on the opportunity object",
        "B. A summary report on the account object",
        "C. A tabular report on the account object",
        "D. A summary report on the opportunity object",
      ],
      answer: "D",
      title: "Question 42",
      explanation: "",
    },
    {
      content:
        'Universal Containers would like to collaborate with its customers within Salesforce, and has decided to enable the "Allow Customer Invitations" Chatter setting. What permission is granted to Customers when invited to Chatter Group?',
      options: [
        "A. The ability to request access to public groups",
        "B. The ability to invite members to groups of which they are a member",
        "C. The ability to @mention accounts of which they are a contact.",
        "D. The ability to interact with members of their groups",
      ],
      answer: "D",
      title: "Question 43",
      explanation: "",
    },
    {
      content:
        "An app builder has been asked to provide users a way to identify a contact's \"preferred contact method\" directly on the contact record. users need to be able to identify whether a phone number or an email, is the contact's preferred communication method. Which field type will allow the app builder to accomplish this with the fewest fields possible?",
      options: ["A. Formula", "B. Email", "C. Checkboxes", "D. Picklist"],
      answer: "D",
      title: "Question 44",
      explanation: "",
    },
    {
      content: "What is recommended to refresh a full sandbox?",
      options: [
        "A. After a major production release.",
        "B. Within 3 hours of when it is needed.",
        "C. Whenever a new production user is added.",
        "D. After a UAT sign-off",
      ],
      answer: "A",
      title: "Question 45",
      explanation: "",
    },
    {
      content: "What is the capability of a schema builder? Choose 2 answers",
      options: [
        "A. To enable field history tracking on standard objects.",
        "B. To modify custom field help text on standard objects",
        "C. To update description of standard and custom objects.",
        "D. To create new look-up or master-detail object relationship",
      ],
      answer: "B,D",
      title: "Question 46",
      explanation: "",
    },
    {
      content:
        "Universal containers (uc) wants to delete data in several fields for 5000 lead records. UC export the selected record IDs and fields that need to have data deleted in a csv file. Which two steps should an app builder suggest to meet these requirements ? Choose 2 answers",
      options: [
        "A. Select insert null values in setting",
        "B. Select the correct record type",
        "C. Use import Wizard to update leads using the CSV file",
        "D. Use Data Loader to update leads using the CSV file",
      ],
      answer: "D",
      title: "Question 47",
      explanation: "",
    },
    {
      content:
        "UV has a customer base where many customers have the same or similar company names.",
      options: [
        "A. Update the account search layout accounts tab columns displayed.",
        "B. Update the account search layout search filter fields.",
        "C. Update the account search layout list view filter settings.",
        "D. Update the account search layout search results columns displayed.",
      ],
      answer: "C",
      title: "Question 48",
      explanation: "",
    },
    {
      content:
        "A customer service representative at a call center would like to be able to collect information from customers using a series of question prompts. What could be used to accomplish this?",
      options: [
        "A. Visual workflow",
        "B. Lightning Connect",
        "C. Workflow Rules",
        "D. Lightning process builder",
      ],
      answer: "A",
      title: "Question 49",
      explanation: "",
    },
    {
      content: "What is true regarding compact layouts? Choose 2 answers.",
      options: [
        "A. Compact layouts must be configured for fields to be displayed in the record header",
        "B. If a user doesn't have access to a field it won't be displayed",
        "C. Compact layouts can be assigned to different record types",
        "D. Compact layouts support all field types",
      ],
      answer: "B,C",
      title: "Question 50",
      explanation: "",
    },
    {
      content:
        "Universal Containers introduces a custom object called Service, which has a lookup to Account. Field enter Service using the Salesforce1 mobile app. Operators create new Service records when viewing Account name which needs to automatically display the current Account. How can this be accomplished?",
      options: [
        "A. Create an action in the Account object and add it to the Account page layout.",
        "B. Create an action in the Service object and add it to the Account page layout",
        "C. Create an action in the Account object and add it to the Service page layout.",
        "D. Create an action in the Service object and add it to the Service page layout",
      ],
      answer: "A",
      title: "Question 51",
      explanation: "",
    },
    {
      content:
        "Universal Containers has public Read-Write as the Account Org Wide Default (OWO) setting. visit form to the Universal Containers Customer Community report they can see all of Universal Containers' account records.\nHow should an app builder configure Account sharing so that Community users only see their own Account.",
      options: [
        "A. Define a Permission Set External Accounts.",
        "B. Set the Account External OWD to Private.",
        "C. Define an Owner-based Sharing Rule for External Accounts.",
        "D. Create an Account record type for External Accounts.",
      ],
      answer: "A",
      title: "Question 52",
      explanation: "",
    },
    {
      content:
        'Universal Containers uses a custom object to track Site Visits. When the status of a Site Visit is changed from\n"In Progress" to "On Hold", the business wants the Site visit owner to be automatically assigned to an "On Hold" queue. Which capability can be used to accomplish this?',
      options: [
        "A. Action",
        "B. Visual Workflow",
        "C. Apex Trigger",
        "D. Assignment Rule",
      ],
      answer: "D",
      title: "Question 53",
      explanation: "",
    },
    {
      content: "Which two are a capability of record types? Choose two answers",
      options: [
        "A. Displaying different page layouts",
        "B. Filtering picklist values",
        "C. Having multiple record types on the record",
        "D. Displaying different field labels",
      ],
      answer: "A,B",
      title: "Question 54",
      explanation: "",
    },
    {
      content:
        "A manager wants to calculate the number of days an account has been last contacted through mail. Which field should be used to achieve this?",
      options: [
        "A. Rollup Summary Field",
        "B. Date Field",
        "C. Number Field",
        "D. Formula Field",
      ],
      answer: "D",
      title: "Question 55",
      explanation: "",
    },
    {
      content:
        "In a real estate app, if a listing is sold, all related inspections for the listing must be cancelled. What business logic feature best caters to this requirement? Choose 1 answer.",
      options: [
        "A. Use Visual Workflow to define a flow to iterate through the related inspection records and update the status to 'Cancelled'",
        "B. Use a trigger to update the status of the related inspection records when the listing status is updated B.\n         Use Process Builder to define a process action to update related records based on the listing status change",
        "C. Create a standard workflow on the Listing object with a workflow record update action on the related Inspection records",
      ],
      answer: "A",
      title: "Question 56",
      explanation: "",
    },
    {
      content:
        "A company wants to invite customers to chatter, what options can a customerhave?",
      options: [
        "A. Invite other members to groups they are a part of",
        "B. Add them on FB,Twitter and Instagram",
        "C. Request to join public groups",
        "D. @mention other members of the group",
      ],
      answer: "A",
      title: "Question 57",
      explanation: "",
    },
    {
      content:
        "An App Builder wants to deploy a new version of an auto launched flow to production in an active state so that the new functionality Is immediately available to users What should the App Builder rake Into consideration when planning the deployment?",
      options: [
        "A. Manually activate the Flow after deployment",
        "B. Verify there is an Apex test that provides test coverage for the Flow.",
        "C. Include the Process Builder calling the Flow In the deployment",
        "D. Grant user access to the Flow.",
      ],
      answer: "B",
      title: "Question 58",
      explanation: "",
    },
    {
      content:
        "Which two metadata changes can be made directly in a production environment without deploying from a sandbox?",
      options: [
        "A. Validation rules",
        "B. Apex triggers",
        "C. Visualforce pages",
        "D. Apex classes",
      ],
      answer: "A,C",
      title: "Question 59",
      explanation: "",
    },
    {
      content:
        "What is true statement regarding master - detail relationship? Choose 3 answers",
      options: [
        "A. A master-detail relationship cannot be created if the custom object on the detail side already contains data.",
        "B. Master-detail relationship can convert to a look -up relationship if no roll-up summary field exist on the master object",
        "C. A master - detail relationship cannot be converted to a look-up relationship",
        "D. Standard objects can be on the detail side of the custom object in a master-detail relationship",
        "E. Deleting a master record in a master detail relationship deletes all related detail records",
      ],
      answer: "A,B,E",
      title: "Question 60",
      explanation: "",
    },
    {
      content:
        "Universal Containers stores invoices in SAP. Users want to view invoice data on the related Account records in Salesforce. How can this be achieved? Choose 2 answers",
      options: [
        "A. Connect to an OData Publisher Service for SAP databases",
        "B. Use SAP data export functions to load data directly in Salesforce",
        "C. Create an external object connected to an invoice table in SAP.",
        "D. Create a custom Invoice object and connect to SAP using Data Loader.",
      ],
      answer: "A,C",
      title: "Question 61",
      explanation: "",
    },
    {
      content:
        "UVC sells to three different types of organizations. Partner, Enterprise, and Small Business. Some of the information collected about each organization overlaps; however, there are also unique attributes to each type of organization that need to be tracked, some of which are required. What Solution meets these requirements?",
      options: [
        "A. Three Account record types, each with its own page layout to display the relevant fields for that type of organization",
        "B. Three custom objects for the three organization types, each with custom fields that pertain to that type of organization",
        "C. Three different sections on an Account page layout, with each section displaying the relevant fields for that organization.",
        "D. A Partner Community for partner organization records, and two lead record types for Enterprise and Small Business organizations",
      ],
      answer: "A",
      title: "Question 62",
      explanation: "",
    },
    {
      content:
        "A business user wants a quick way to edit a record's status and enter a custom due date field from the record's feed in Salesforce1 Mobile App. What could be used to accomplish this?",
      options: [
        "A. Custom URL formula field",
        "B. Custom Action",
        "C. Custom Button",
        "D. Custom quick access link",
      ],
      answer: "B",
      title: "Question 63",
      explanation: "",
    },
    {
      content:
        "At Universal Containers, the VP of Service has requested a visual indicator flag on each case, based on the case priority. High-priority cases should be flagged red, medium-priority should be flagged yellow, and low-priority cases should be flagged green. Which formula would accomplish this requirement? Choose 2 answers",
      options: [
        'A. IF(ISPICKVAL(Priority, "Low"), "img/samples/flag_green.gif", IF(ISPICKVAL(Priority, "Medium"),\n         "img/samples/flag_yellow.gif", IF(ISPICKVAL(Priority, "High"), "img/samples/flag_red.gif",\n         "/s.gif")))',
        'B. IMAGE( IF(ISPICKVAL(Priority, "Low"), "img/samples/flag_green.gif", IF(ISPICKVAL(Priority,\n         "Medium"), "img/samples/flag_yellow.gif", IF(ISPICKVAL(Priority, "High"),\n         "img/samples/flag_red.gif"))), "Priority Flag")',
        'C. IMAGE(CASE( Priority, "Low", "img/samples/flag_green.gif", "Medium",\n         "img/samples/flag_yellow.gif", "High", "img/samples/flag_red.gif", "Priority Flag")',
        'D. CASE( Priority, "Low", "img/samples/flag_green.gif", "Medium", "img/samples/flag_yellow.gif",\n         "High", "img/samples/flag_red.gif", "/s.gif")',
      ],
      answer: "B,C",
      title: "Question 64",
      explanation: "",
    },
    {
      content:
        "The organization wide defaults for a custom object is set to private. The Supervisor profile grants view access to the same object. A user with the Supervisor profile is also listed as the Manager on the user detail records for access. However, the supervisor still cannot view records owned by the subordinate. What is preventing the Supervisor from viewing records owned by the subordinate? Choose 2 answers",
      options: [
        "A. Organization wide settings for the custom object do not grant access using hierarchy",
        "B. The Supervisor requires a permission set in order to view the subordinate's record",
        "C. Organization wide settings for the custom object grant access to other users with the same role",
        "D. The Supervisor's role is not above the subordinate's role in hierarchy",
      ],
      answer: "A,D",
      title: "Question 65",
      explanation: "",
    },
    {
      content:
        "A custom object has a public reads only sharing settings that does not grant access using hierarchies. A dynamic sharing rule provides write access to the object to the global marketing public group if the record is marked as global. A user creates a new record and marks it as global. Who will have write access to the record?",
      options: [
        "A. The record owner and the global marketing public group.",
        "B. The record owner and anyone above the owner in the role hierarchy",
        "C. The global marketing public group, the record owner, and anyone above the owner in the role hierarchy.",
        "D. The global marketing public group and anyone above the owner in the role hierarchy",
      ],
      answer: "A",
      title: "Question 66",
      explanation: "",
    },
    {
      content:
        "The convert button on leads should NOT appear until the lead status picklist is set to a qualified. What should an app builder suggest to meet these requirements?",
      options: [
        "A. Picklist dependency, page layouts, record types",
        "B. Process builder field update, quick action, record type",
        "C. Custom button, validation rule, record types",
        "D. Page layout, record types, process builder field update",
      ],
      answer: "A",
      title: "Question 67",
      explanation: "",
    },
    {
      content:
        "A manager wants to calculate the number of days since an account was last contacted through email. Which field type should be used to accomplish this?",
      options: ["A. Formula", "B. Number", "C. Roll-up Summary", "D. Date"],
      answer: "A",
      title: "Question 68",
      explanation: "",
    },
    {
      content:
        "What may occur if workflow rules are reevaluated after a field change by afield update?",
      options: [
        "A. Cross-object workflow rules result in re-evaluation after field change.",
        "B. Workflow rules trigger validation rules on field updates.",
        "C. Workflow rules trigger more workflow rules to be re-evaluated.",
        "D. A recursive loop potentially results in exceeding organizational limits.",
      ],
      answer: "C,D",
      title: "Question 69",
      explanation: "",
    },
    {
      content:
        "Universal Containers manages internal projects by department using a customobject called projects. Only employees in the project's respective departmentshould have view access to all of the department's project records. If an employeechanges job roles and moves to another department, the employee should nolonger have access to the projects within their former department. How can theserequirements be met assuming the organization wide default for projects is set to private? (Choose 2)",
      options: [
        "A. Create a criteria-based sharing rule using the project's department that grants access to users by profiles.",
        "B. Create a criteria-based sharing rule using the project's department that grants access to users by public groups.",
        "C. Create a criteria-based sharing rule using the project's department that grants access to users byroles.",
        "D. Create a criteria-based sharing rule using the project's department that grants access to users bypermission sets.",
      ],
      answer: "B,C",
      title: "Question 70",
      explanation: "",
    },
    {
      content:
        "Universal Containers has deployed custom tabs to Production via changes sets, without including the profile settings or permission sets.\nWhat is the settings for the visibility of custom tabs?",
      options: [
        "A. Custom tabs are default off for all users.",
        "B. Custom tabs are NOT deployed.",
        "C. Custom tabs are hidden for all users.",
        "D. Custom tabs are default on for all uses.",
      ],
      answer: "C",
      title: "Question 71",
      explanation: "",
    },
    {
      content:
        "What Is true statement regarding roll up summary fields. Select 2.",
      options: [
        "A. Multi select picklist files can be used in the field column of the field column of roll up summary filters.",
        "B. The roll up summary field inherits the field level security of the child object.",
        "C. Roll up summary fields can only be created on the master of master-detail relationship",
        "D. Changes to the value of a roll up summary field can trigger assignment rules to run",
      ],
      answer: "C,D",
      title: "Question 72",
      explanation: "",
    },
    {
      content:
        "The Vp of sales at universal con has requested the sales reps be given access to view all accounts in salesforce.\nHowever, they've also requested the sales rep only be allowed to create new opportunities on accounts they own",
      options: [
        "A. Create a new opportunity quick action that validation account ownership",
        "B. Create an opportunity validation rule that compares the opportunity and account owner",
        "C. Set the organization wide default sharing on opportunities to controlled by parent",
        "D. Set the organization wide default sharing on opportunities to private and recalculate sharing",
      ],
      answer: "B",
      title: "Question 73",
      explanation: "",
    },
    {
      content:
        "An App Builder at UVC would like to prevent users from creating new records on an Account related list by overriding standard buttons. Which two should the App Builder consider before overriding standard buttons?",
      options: [
        "A. Standard buttons can be overridden with a Visualforce page",
        "B. Standard buttons can be overridden, relocated on the detail page, and relabeled",
        "C. Standard buttons can be changed on lookup dialogs, list views, and search result layouts",
        "D. Standard buttons that are not available for overrides can still be hidden on page layouts",
      ],
      answer: "A,D",
      title: "Question 74",
      explanation: "",
    },
    {
      content:
        "UVC needs to update a field on an Account when an Opportunity Stage is changed to Closed-Lost. Which two should be used to accomplish this requirement? Choose two answers",
      options: [
        "A. Assignment Rule",
        "B. Approval Process",
        "C. Process Builder",
        "D. Workflow Rule",
      ],
      answer: "C,D",
      title: "Question 75",
      explanation: "",
    },
    {
      content: "What can be branded in SF1?(Select 3)",
      options: [
        "A. Loading logo",
        "B. Header and Search",
        "C. Action tab bar",
        "D. Loading page color",
      ],
      answer: "A,B,D",
      title: "Question 76",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants to track installation information once it container has been purchased on a custom object. Sales reps should have visibility of all the installation with their opportunities.\nvisibility of all the installations associated with their opportunities.\nWhat kind of relationship should this new object have to the Opportunity?",
      options: [
        "A. Lookup",
        "B. Many to Many",
        "C. Hierarchical",
        "D. Master-Detail",
      ],
      answer: "D",
      title: "Question 77",
      explanation: "",
    },
    {
      content:
        "UVC wants to show different picklist values to different groups of users in a custom picklist field. What should be configured?",
      options: [
        "A. Record Types",
        "B. Permission sets",
        "C. Field-level security",
        "D. Page Layout",
      ],
      answer: "A",
      title: "Question 78",
      explanation: "",
    },
    {
      content:
        "Universal containers require different fields to be out at each of the opportunity sales process. What configuration steps can an app builder use to meet this requirement?",
      options: [
        "A. Add the path component to the lightning record type",
        "B. Set page layout required fields based on the current stage",
        "C. Create a process builder to prompt the user for filed information",
        "D. Define record type and page payouts for each stage",
      ],
      answer: "C",
      title: "Question 79",
      explanation: "",
    },
    {
      content:
        "Universal container would like to use a chatter group for their mergers and acquisitions team to collaborate on potential new projects. This project should not be visible for non-members to see or join, and can be accessed by invites only.",
      options: [
        "A. Public group",
        "B. Private group",
        "C. Unlisted group",
        "D. Member group",
      ],
      answer: "C",
      title: "Question 80",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants to its sales team to only see the accounts that they own. Separate Month American and Environment manufacturing teams should only see accounts in their respective regions. The Inside sales team needs to see all accounts in Salesforce.\nHow should an app builder accomplish this?",
      options: [
        "A. Set the Organization-wide Default to public for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team permission set with the ''View All'' Setting for accounting for accounts.",
        "B. Set the Organization Team profile Default to Private for accounts. Create criteria-based sharing rules for each Marketing Team. and create an inside Sales Team profile with the ''View All'' setting for accounts. ",
        "C. Set the organization--Wide Default to publish for accounts. Create profiles for each Marketing Team, and create an inside Sales Team role that is at the top of the Role Hierarchy.",
        "D. Set the Organization-wide Default to public for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team permission set with the ''View All'' Setting for accounts.",
        "E. Set the Organization Team profile Default to Private for accounts. Create criteria-based sharing rules for each Marketing Team. and create an inside Sales Team profile with the ''View All'' setting for accounts.",
        "F. Set the Organization-Wide Default to private for accounts. Create permission setts for each Marketing Team, and create an Inside Sales team Profile with the ''View All'' setting for accounts.",
      ],
      answer: "A",
      title: "Question 81",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants to rollout new product bundles with several pricing options. Pricing options include product-price bundles, account specific pricing and more. Which product satisfies the needs?",
      options: [
        "A. Custom AppExchange-app for product-pricing",
        "B. Workflow on Opportunity/Opportunity Product",
        "C. Lightning process builder",
        "D. Formula fields on Opportunity/Opportunity Product",
      ],
      answer: "C",
      title: "Question 82",
      explanation: "",
    },
    {
      content:
        "At UVC, the Account object has a MD relationship with an Invoice custom object. The app builder would like to change this to a lookup field, but is not able to do so. What could be causing this?",
      options: [
        "A. The Account is included in the workflow on the Invoice Object",
        "B. The invoice records have existing values in the Account",
        "C. The Invoice must have at least one MD field for reporting",
        "D. The Account record includes invoice roll-up summary fields",
      ],
      answer: "D",
      title: "Question 83",
      explanation: "",
    },
    {
      content: "What is recommended to refresh a fullsandbox?",
      options: [
        "A. After a major production release.",
        "B. After UAT sign-off.",
        "C. Within 3 hours of when it is needed.",
        "D. Whenever a new production used is added.",
      ],
      answer: "B",
      title: "Question 84",
      explanation: "",
    },
    {
      content: "Identify the standard Lightning components. (Choose 3 answers)",
      options: [
        "A. List View",
        "B. Reports",
        "C. Dashboards",
        "D. Rich Text",
        "E. Visualforce Page",
      ],
      answer: "A,D,E",
      title: "Question 85",
      explanation: "",
    },
    {
      content: "What are two capabilities of Schema Builder? Choose 2 answers",
      options: [
        "A. Editing custom settings",
        "B. Creating a new record type",
        "C. Viewing page layouts in a new window",
        "D. Showing selected objects on a page",
      ],
      answer: "C,D",
      title: "Question 86",
      explanation: "",
    },
    {
      content:
        "When a user creates a record by using an object-specific create action, what feed item for that record appears?\n(Choose 3 answers)",
      options: [
        "A. In the Chatter feed of the user who created the record",
        "B. In the Chatter feed of the first user who follows the record on which the record was created",
        "C. As the first entry in the feed for the new record",
        "D. In the feed for the record on which the new record was created",
        "E. In the user profile feed for all users who can view the record",
      ],
      answer: "A,C,D",
      title: "Question 87",
      explanation: "",
    },
    {
      content:
        "Invoices in SAP need to be reviewed from Salesforce Account object Home. (Select 2)",
      options: [
        "A. External object",
        "B. Data Loader",
        "C. O-DATA",
        "D. From SAP config",
      ],
      answer: "A,C",
      title: "Question 88",
      explanation: "",
    },
    {
      content:
        "Universal Containers would like to automatically assign a specific permission set to new users. How can this requirement be met? Choose 2 Answers",
      options: [
        "A. Create a lightning process on the user object to launch a flow.",
        "B. Create an approval process on the User object to assign a permission set",
        "C. Create a flow on the user object to assign a permission set.",
        "D. Create a workflow rule on the User object to assign a permission set.",
      ],
      answer: "A,C",
      title: "Question 89",
      explanation: "",
    },
    {
      content:
        "What may occur if workflow rules are re-evaluated after a field change by a field update? Choose 2 answers",
      options: [
        "A. Cross-object workflow rules result in re-evaluation after field change.",
        "B. Workflow rules trigger validation rules on field updates",
        "C. Workflow rules trigger more workflow rules to be re-evaluated.",
        "D. A recursive loop potentially results in exceeding organizational limits.",
      ],
      answer: "C,D",
      title: "Question 90",
      explanation: "",
    },
    {
      content:
        "A custom button can be used for performing all of the following actions, except: Choose 1 answer.",
      options: [
        "A. Invoke an Apex Trigger",
        "B. Invoke a webpage URL",
        "C. Invoke a visualforce page in your Salesforce org",
        "D. Invoke a Javascript",
      ],
      answer: "A",
      title: "Question 91",
      explanation: "",
    },
    {
      content:
        "The VP of Marketing wants to broadcast an email to 10,000 contacts in Salesforce on a regular basis, but realizes Salesforce's mass email functionality has a limitation on the number of emails that can be sent each day.",
      options: [
        "A. Develop Apex code and Visualforce pages to send the emails.",
        "B. Download all contacts to a CSV file and use an email client to send the mails",
        "C. Research and evaluate products available on AppExchange to send mass emails",
        "D. Request Salesforce increase the number of maximum daily mails.",
      ],
      answer: "C",
      title: "Question 92",
      explanation:
        "Explanation\n Check out the following link: MassMailer App Link on\n AppExchangehttps://appexchange.salesforce.com/listingDetail?listingId=a0N30000005uxj5EAA",
    },
    {
      content:
        "Universal Containers created a custom object called Component to capture details about products sold.\nWhat approach should an app builder take to show Component as a related list on Product?",
      options: [
        "A. Create a roll-up on Product. Add the Component related list to the Product page layout.",
        "B. Create a junction object to relate Component and Product. Add the Component related list to the Product page layout.",
        "C. Create a lookup relationship on Component to Product. Add the Component related list to the Product page layout.",
        "D. Create a master-detail relationship on Product to Component. Add the Component related list to the Product page layout.",
      ],
      answer: "C,D",
      title: "Question 93",
      explanation: "",
    },
    {
      content:
        "When an opportunity is closed date is pushed more than 30 days, manager approval is required. An approval process is in place but reps frequently forget to submit for approval to run the process.\nHow can an app builder ensure that these opportunities are submitted into the approval process?",
      options: [
        'A. Give the manager the "API Enabled" permission to permit approval responses by email.',
        "B. Submit the record for approval from an automated process.",
        "C. Change the entry criteria on the approval process to criteria are met and lock the record on initial submission.",
        "D. Use a validation rule and an email alert to the manager requesting approval.",
      ],
      answer: "B",
      title: "Question 94",
      explanation: "",
    },
    {
      content:
        "A divisional manager wants to add a chart into a page layout Which report format can be used as the source report to accomplish this? Choose 2 answers.",
      options: [
        "A. Joined format with a chart.",
        "B. Summary format with a chart.",
        "C. Matrix format with a chart.",
        "D. Tabular format with a chart.",
      ],
      answer: "B,C",
      title: "Question 95",
      explanation: "",
    },
    {
      content:
        'Universal Containers has a workflow on opportunity that will change the status field to "In Progress" when the Stage field is changed "Negotiation." In addition, there is a validation rule on Status that will prevent the status being set to "In Progress" if the amount of the opportunity is less than $10,000.A user named Frank does not have FLS to see status. When Frank changes opportunities to a stage of "Negotiation" the status is still being changed to "In Progress", why is this occurring?',
      options: [
        "A. Workflow rules cannot trigger a validation rule",
        "B. Field Level Security prevents the validation rule from running.",
        "C. Workflow rules occur after validation rules and thus override validation rules.",
      ],
      answer: "A",
      title: "Question 96",
      explanation: "",
    },
    {
      content:
        "How should an app builder configure access to a contact's Twitter profile for Salesforce mobile app users?",
      options: [
        "A. Add a formula field to the Contact page layout.",
        "B. Add the Twitter component to mobile view Lightning pages.",
        "C. Add an AppExchange Lightning Component to the mobile app.",
        "D. Add a Twitter Quick Action to the mobile navigation.",
      ],
      answer: "B",
      title: "Question 97",
      explanation: "",
    },
    {
      content:
        "Universal Containers is using a custom app to record performance review info for their employees. The performance review should be visible to the employee and the employee's manager, as well as the HR director.\nHow can this be configured? Choose 1 answer.",
      options: [
        "A. Set the org wide default for Performance Review to private and add a criteria based sharing rule to share performance review records with a public group that includes the employee managers and HR director",
        "B. Use manager sharing to enable sharing with the employee's manager and HR director",
        "C. Set the org wide default for Performance Review to private and use grant access using hierarchies to give visibility to the employee's manager and HR director",
        "D. Set the org wide default for Performance Review to private, do not use grant access using hierarchies and use manual sharing for the employee manager and HR director",
      ],
      answer: "D",
      title: "Question 98",
      explanation: "",
    },
    {
      content:
        "Cool Air Conditioners has been using Service Cloud to manage cases, but are now considering using it to manage field service jobs. They would like to track field service activity and assignment to technicians. What is the recommended solution to meet these requirements? Choose 1 answer.",
      options: [
        "A. Extend the Service Cloud configuration to handle Field Service cases",
        "B. Utilize the standard objects Work Order and Work Order Line Items",
        "C. Use real time API integration to connect Salesforce with an external field service application",
        "D. Install an AppExchange product that provides Field Service functionality",
      ],
      answer: "B",
      title: "Question 99",
      explanation: "",
    },
    {
      content:
        "What are the recommendations for unmanaged packages? (Choose 2)",
      options: [
        "A. For open source",
        "B. Should be deployed from Dev Edition",
        "C. For move to production",
        "D. For sale in App Ex",
      ],
      answer: "A,B",
      title: "Question 100",
      explanation: "",
    },
    {
      content:
        "The VP of sales requested that Account Site Information should be visible on an Opportunity record. What is the recommended salutation to meet this requirement?",
      options: [
        "A. Workflow Rule",
        "B. Cross-Object Formula Field",
        "C. Roll-Up Summary Field",
        "D. Process Builder",
      ],
      answer: "B",
      title: "Question 101",
      explanation: "",
    },
    {
      content:
        "A production org includes custom objects containing confidential Information. A sandbox h needed that Includes data records, excludes all of the confidential objects, and can be refreshed weekly the confidential objects, and can be refreshed weekly.\nWhat steps should an App Builder take to meet these requirements?",
      options: [
        "A. Create a Partial Copy Sandbox and use a sandbox template.",
        "B. Create a Full Sandbox and use a sandbox template",
        "C. Create a Developer Sandbox and schedule Data loader to download selected object data weekly.",
        "D. Create a Developer Pro Sandbox and schedule Data loader to download selected object data weekly.",
      ],
      answer: "A",
      title: "Question 102",
      explanation: "",
    },
    {
      content:
        "What should be done to provide managers access to records of which they are not the owner in a private sharing model?",
      options: [
        "A. Define a Role Hierarchy and use the Grant Access Using Hierarchies option",
        'B. Create a Manager Permission set and select the "View All Data" option',
        "C. Set the Manger field for each User Record on the Manager's team.",
        'D. Create a Manager profile and select the "View My Teams Data" option.',
      ],
      answer: "B",
      title: "Question 103",
      explanation: "",
    },
    {
      content:
        "Universal Containers sales reps can modify fields on an opportunity until it is closed. Only the sales operation team can modify the post closed follow-up dates and post closed follow-up comments fields. How can these requirements be met?",
      options: [
        "A. Use field level security to mark fields as read only on the sales profile",
        "B. Use record types with field sets and restrict editing fields using field-level security.",
        "C. Use multiple record types, page layouts and profiles.",
        "D. Use field-level security on page layouts to restrict editing fields",
      ],
      answer: "D",
      title: "Question 104",
      explanation: "",
    },
    {
      content:
        "What is true regarding the user interface for external object data? Choose 1 answer.",
      options: [
        "A. External object data can be accessed via detail pages",
        "B. External object data can be accessed via custom tabs",
        "C. All of the above",
        "D. Chatter Feeds can be enabled on external object pages",
        "E. External object data can be accessed via lists views",
      ],
      answer: "C",
      title: "Question 105",
      explanation: "",
    },
    {
      content:
        "Universal containers would like to use a chatter group for their mergers and acquisition team to collaborate on potential new projects. This group should not be visible for non-members to see or join, and can be accessed by invite only. Which chatter Group type should the App Builder recommend?",
      options: [
        "A. Member Group",
        "B. Public Group",
        "C. Private Group",
        "D. Unlisted Group",
      ],
      answer: "D",
      title: "Question 106",
      explanation: "",
    },
    {
      content:
        "Universal containers uses a private Account sharing model. They have a Process Improvement team with representatives from multiple departments that need s to view all accounts that have been flagged as problem accounts. How should this team be granted access to the records?",
      options: [
        "A. User a record Owner sharing rule that is shared with the Process Improvement public group",
        "B. Use a record owner sharing rule that is shared with the Process Improvement role",
        "C. Use a criteria-based sharing rule where the account are shared with the Process Improvement public group",
        "D. Write a trigger to use Apex Managed Sharing to grant access with the Process Improvement team",
        "E. Option 5",
      ],
      answer: "C",
      title: "Question 107",
      explanation: "",
    },
    {
      content:
        "Universal containers needs to flag Leads with one or more business areas. They need to add a field to capture these to the Lead records. There is no need to report on this field.\nWhat is the appropriate field type?",
      options: [
        "A. Radio Buttons (multi select)",
        "B. Text area",
        "C. Picklist",
        "D. Picklist (multi-select)",
      ],
      answer: "D",
      title: "Question 108",
      explanation: "",
    },
    {
      content:
        "Actions on a Lightning Page allow you to do which of the following?",
      options: [
        "A. Send email and delete or clone records.",
        "B. Send email, create a task, and create or update records.",
        "C. Clone records, add users, and assign permissions.",
        "D. Send email, send outbound messages, and launch a flow.",
      ],
      answer: "B",
      title: "Question 109",
      explanation: "",
    },
    {
      content:
        "What type of field can be used to filter a report chart that has been added to page Layout?",
      options: [
        "A. Standard field",
        "B. Formula field",
        "C. Matching ID field",
        "D. Name field",
      ],
      answer: "C",
      title: "Question 110",
      explanation: "",
    },
  ],
});
