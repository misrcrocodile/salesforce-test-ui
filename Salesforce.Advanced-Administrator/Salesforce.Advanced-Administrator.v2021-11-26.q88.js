window.testContent = window.testContent || [];
var testId = "Salesforce.Advanced-Administrator";
var testName = "Salesforce.Advanced-Administrator";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "Salesforce.Advanced-Administrator.v2021-11-26.q88",
  content: [
    {
      content:
        "The administrator at Universal Containers has been asked to create an account management dashboard displaying opportunities and activities for each of its top five clients.\nWhich dashboard feature should the Administrator use to meet this requirement?",
      options: [
        "A. Dynamic dashboard",
        "B. Dashboard Filter",
        "C. Joined reports on a dashboard",
        "D. Matrix reports on a dashboard",
      ],
      answer: "A",
      title: "Question 1",
      explanation: "",
    },
    {
      content:
        "Which of the following features is NOT unique to Salesforce Knowledge? * (1 Point)",
      options: [
        "A. Synonym Search",
        "B. Custom Page Layouts",
        "C. Categories",
        "D. Article Types",
      ],
      answer: "B",
      title: "Question 2",
      explanation: "",
    },
    {
      content:
        "Which two types of data should a sales representative access from the Forecasts tab when using Collaborative Forecasts?\nChoose 2 answers.",
      options: [
        "A. Forecast amount for each forecast category",
        "B. Forecast amount for each opportunity stage",
        "C. Opportunities that make up each forecast amount",
        "D. Forecast amount for other representatives on their team",
      ],
      answer: "A,B",
      title: "Question 3",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants to track invoices with a custom object. They want to be able to view any invoices as a related list on the Opportunity record page.\nWhich feature would ensure can view all invoices associated with an Opportunity if the user can view the parent Opportunity record?",
      options: [
        "A. Master-Detail Relationships",
        "B. Sharing Rules",
        "C. Field Level Security",
        "D. Lookup Relationships",
      ],
      answer: "A",
      title: "Question 4",
      explanation: "",
    },
    {
      content:
        "The administrator of universal containers is testing an approval process in a refreshed developer pro sandbox and is finding that none of the notification emails are being sent to the approvers.\nWhat could be the cause of this? choose 2",
      options: [
        "A. The email addresses for the users are incorrect",
        "B. Workflow emails only work in full sandboxes.",
        "C. HTML templates are not available in sandboxes.",
        "D. The Deliverability Access Level setting is incorrect.",
      ],
      answer: "B,C",
      title: "Question 5",
      explanation: "",
    },
    {
      content:
        "An administrator has been asked to create a report showing all newly created chatter groups by a custom designation divided by the four departments that maintain chatter groups- partners, corporate, practices and solutions.\nHow can an administrator meet this reporting requirement?",
      options: [
        "A. Create tags for chatter groups and create a summary report for newly created chatter groups.",
        "B. Create a report type for chatter groups and create a summary report for newly- created chatter group.",
        "C. Use a multi-select picklist field to bucket chatter groups in the report according to department.",
        "D. Use a bucket in the chatter groups report to categorize the four different departments. (100%)",
      ],
      answer: "D",
      title: "Question 6",
      explanation: "",
    },
    {
      content:
        "A Recruiting User needs to setup an object relationship between the Position object and the Job Applicant object so that a Position record can have many applicants and Job Applicant can apply for many positions.\nHe also needs this in a setup where deleting a Job Application record will delete all information related to the job applicant in the Position object. What can a system administrator do to fulfill the requirement? * (1 Point)",
      options: [
        "A. Create a master-detail relationship only on the child object",
        "B. Create a lookup relationship using a junction object.",
        "C. Create a many-to-many master-detail relationship using a junction object.",
        "D. Create a lookup relationship only on the parent object",
      ],
      answer: "C",
      title: "Question 7",
      explanation: "",
    },
    {
      content:
        "U.C wants to archive cases that have been closed for two or more years. the cases need to be revoved from salesforce and be available to be loaded into loaded into the company's data warehouse.\nhow can the administrator automate this process? choose 2",
      options: [
        "A. enable the case archied feature.",
        "B. schedule the data export service.",
        "C. use an Appexchange product",
        "D. use the apex dataloader",
      ],
      answer: "C,D",
      title: "Question 8",
      explanation: "",
    },
    {
      content:
        "Which two deployment tools should be used to delete metadata from an organization? Choose 2 answers * (1 Point)",
      options: [
        "A. Developer Console",
        "B. Unmanaged packages",
        "C. Change sets",
        "D. ANT Migration Tool",
      ],
      answer: "A,D",
      title: "Question 9",
      explanation: "",
    },
    {
      content:
        "AW Computing uses a private sharing model for cases. A select group of five users need read/write access to all cases with a specific record type. Of these users, one is assigned the Support Manager profile and four are assigned the Support Representative profile. How can the administrator meet this requirement?",
      options: [
        "A. Modify the Support Manager and Support Representative profiles to View All Data access on all cases with the record type.",
        "B. Create a public group for the users and use criteria-based sharing rules to share cases with the record type to that group.",
        "C. Create a public group for the users and a custom parent case record with the record type; share this case by record owner.",
        "D. Create a new profile for the five users with View All Data access; remove access to the record type from all other profiles.",
      ],
      answer: "D",
      title: "Question 10",
      explanation: "",
    },
    {
      content:
        "Leads come to universal containers from various sources and need to be assigned to the correct sales team. When a lead comes for the APAC region, it can be passed to an external partner if the sales director approves the transfer. The partner's channel manager must be notified when the partner has been assigned the lead.\nAt the minimum, which combination of automation tools will be needed to meet these requirements?",
      options: [
        "A. Assignment rules, auto-response rules, and workflow rules",
        "B. Assignment rules and workflow rules.",
        "C. Assignment rules and approval processes",
        "D. Assignment rules, approval processes, and workflow rules",
      ],
      answer: "D",
      title: "Question 11",
      explanation: "",
    },
    {
      content:
        "A change set has already been uploaded but changes need to be made to its contents.\nwhat is a best practice for adding these changes?",
      options: [
        "A. Manually make changes in change set destination org.",
        "B. Delete existing change set, add changes to new change set, upload change set",
        "C. clone the change set, add needed change set and upload again.",
        "D. Edit existing change set, add needed changes, upload again.",
      ],
      answer: "C",
      title: "Question 12",
      explanation: "",
    },
    {
      content:
        "Sales management wants to enforce a process in which the name of an account is always included in the name of an opportunity. How can automation be used to help meet this requirement?",
      options: [
        "A. Use approval process that routes newly created opportunities to management for data quality review.",
        "B. Use an Apex Trigger on the Account object that adds the account name to the opportunity name.",
        "C. Write a validation rule that updates the opportunity name with the account name using a cross-object formula.",
        "D. Write a criteria-based workflow rule that updates the opportunity name concatenated with the account name.",
      ],
      answer: "D",
      title: "Question 13",
      explanation: "",
    },
    {
      content:
        "A set of Cases records with a specific record type needs to be restricted so that only a Support manager and four Support users have access. What can you do as a system administrator to meet this requirement? * (1 Point)",
      options: [
        "A. Create a criteria-based sharing rule for the 5 users",
        "B. Create a new profile and assign the 5 users to the new profile",
        "C. Remove the record type access for all users except the 5 mentioned",
        'D. Givethe"ViewAllData"permissiontothe5mentionedusersusingpermissionsets',
      ],
      answer: "A",
      title: "Question 14",
      explanation: "",
    },
    {
      content:
        "How can content types be used in CRM Content? (Choose two answers.) * (1 Point)",
      options: [
        "A. With validation rules, to capture complete data",
        "B. With content fields, to control the content detail page layout",
        "C. With upload rules, to limit the size of content files.",
        "D. With library rules, to limit the number of libraries created",
      ],
      answer: "A,B",
      title: "Question 15",
      explanation: "",
    },
    {
      content:
        "The VP of Marketing is launching campaigns in each region to target accounts that do not have open opportunities. What reporting solution can an administrator set up to assist with this?",
      options: [
        "A. Standard Filter",
        "B. Cross Filter",
        "C. Joined report",
        "D. Reporting snapshot",
      ],
      answer: "B",
      title: "Question 16",
      explanation: "",
    },
    {
      content:
        "Universal Containers uses Enterprise Territory Management to manage its sales territories. The sales managers want to see who the account is manually shared outside of territory rules. How can the system administrator meet this requirement? * (1 Point)",
      options: [
        'A. Add "Assign Territories" permission to the sales manager\'s profile',
        'B. Add the "Assigned Territories" related list to the sales page layout',
        'C. Add "Manage Territories" permission to the sales manager\'s profile',
        'D. Add the "Users in Assigned Territories" related list to the sales page layout',
      ],
      answer: "D",
      title: "Question 17",
      explanation: "",
    },
    {
      content:
        "Universal Containers has a private sharing model. Their field service manager wants to edit Cases owned by the service team but is unable to edit Case records.\nWhich option should an administrator use to solve this issue?",
      options: [
        "A. Assign the manager a permission set with edit access to the Case object.",
        "B. Set the Organization-Wide Default to public read/write for cases and Accounts.",
        "C. Update the manager's profile to include edit access to the Case object.",
        "D. Create a public group with read/write for cases and Accounts.",
      ],
      answer: "A",
      title: "Question 18",
      explanation: "",
    },
    {
      content:
        "The Sales Manager at Universal Containers would like a dashboard to view each of the sales representative's opportunities, accounts, and related cases. What is a recommended solution?",
      options: [
        'A. Create a dynamic dashboard and insure the sales manager has the "View My Team\'s Dashboard" permission.',
        "B. Create an individual dashboard for each sales representative with opportunity, account, and case components.",
        "C. Create a dynamic dashboard and add filters for opportunities, accounts and cases.",
        "D. Create a dashboard and add filters for users, opportunities, accounts, and cases.",
      ],
      answer: "A",
      title: "Question 19",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants to create a Job Application custom object related to a Job Posting custom object. They would also like a no-code solution to calculate the number of Job Applications for each Job Posting.\nWhat type of field should an administrator create on the Job Application to enable this functionality?",
      options: [
        "A. Lookup",
        "B. Formula",
        "C. Roll-up Summary",
        "D. Master-Detail",
      ],
      answer: "D",
      title: "Question 20",
      explanation: "",
    },
    {
      content:
        "Dylan has submitted a vacation request for approval by his manager, but the manager is not receiving any email alerts. What can you use in order to troubleshoot the issue? Choosetwoanswers.* (1 Point)",
      options: [
        "A. The Setup Audit Trail",
        "B. Debug Log",
        "C. Email log",
        "D. A Time-Based Workflow",
      ],
      answer: "B,C",
      title: "Question 21",
      explanation: "",
    },
    {
      content:
        "When using Customizable Forecasts, which forecast category is not included in the forecast? * (1 Point)",
      options: ["A. Pipeline", "B. Omitted", "C. Best Case", "D. Closed"],
      answer: "B",
      title: "Question 22",
      explanation: "",
    },
    {
      content:
        "A sales manager cannot view a contact owned by a salesperson. The salesperson is below the sales manager in the role hierarchy. Why is the sales manager unable to view the contact?",
      options: [],
      answer: "",
      title: "Question 23",
      explanation:
        "Contact sharing settings have grant access using hierarchies unchecked",
    },
    {
      content:
        "Universal Containers has implemented a custom process related to products. They have a custom object called Draft Product. Once a Draft Product is approved, automation is needed to create a new Product record and delete the original Draft Product record.\nWhich two options would meet this requirement?\nChoose 2 answers",
      options: [
        "A. Process Builder that calls Apex",
        "B. Process Builder that calls a Flow",
        "C. Process Builder that calls a workflow Rule",
        "D. Flow that calls a Process Builder",
      ],
      answer: "A,B",
      title: "Question 24",
      explanation: "",
    },
    {
      content:
        "The recruiting manager at universal containers has requested a new picklist value in the type field on the position object by the end of the week.\nIf the administrator is unable to complete this request in the desired timeline, what type of access will allow the recruiting manager to make the changes in salesforce?",
      options: [
        "A. Create, Read, Edit and Delete access to the position object.",
        "B. Delegated administration to manage recruiting users.",
        "C. Modify all and view all access to the position object.",
        "D. Delegated administration over the position object.",
      ],
      answer: "D",
      title: "Question 25",
      explanation: "",
    },
    {
      content:
        "How can the administrator ensure article managers use specified values for custom article fields?",
      options: [
        "A. Create a validation rule on the article.",
        "B. Create different article type for different requirements.",
        "C. Use field dependencies on article types.",
        "D. Require a field on the page layout.",
      ],
      answer: "A",
      title: "Question 26",
      explanation: "",
    },
    {
      content:
        "What should an administrator consider when setting up and maintaining Salesforce Knowledge? Choose three answers. * (1 Point)",
      options: [
        "A. Data category visibility is assigned through roles and profiles",
        "B. Article version numbers must be assigned by a Knowledge Manager for tracking",
        "C. Solution category browsing must be enabled in Solution settings.",
        "D. Enabling certain Knowledge features on a user record requires licensing.",
        "E. Knowledge settings must be configured to allow users to create an article from a case",
      ],
      answer: "A,D,E",
      title: "Question 27",
      explanation: "",
    },
    {
      content:
        "A sales manager would like access to the following:\nAll closed/won opportunities in the last six months for each account the manager owns.\nAll cases created within the last six months for each account the manager owns.\nWhat can the administrator create to meet these requirements ?",
      options: [
        "A. Create a custom report type to combine the data into a single report.",
        "B. Create a single report using the Joined Reports feature.",
        "C. Create an Account report and add Opportunity and Case cross filters.",
        "D. Create an Account report that groups by both opportunities and cases.",
      ],
      answer: "C",
      title: "Question 28",
      explanation: "",
    },
    {
      content:
        "When can a user become an owner of a record without being a record creator? Choose 2 answers.* (1 Point)",
      options: [
        "A. If the record is in a queue",
        "B. If person is above the owner of the record in role hierarchy",
        "C. If he is already a record owner",
        "D. if someone shares the record to the record owner",
      ],
      answer: "A,B",
      title: "Question 29",
      explanation: "",
    },
    {
      content:
        "How can a system administrator ensure that an Account Name is unique? * (1 Point)",
      options: [
        "A. Use the HLOOKUP operator in a validation rule for the account name",
        "B. Use an APEX Trigger",
        "C. Make the account name field unique",
        "D. Use the VLOOKUP operator in a validation rule for the account name",
      ],
      answer: "B",
      title: "Question 30",
      explanation: "",
    },
    {
      content:
        "what should an administrator do before case feeds can be enabled? choose 2",
      options: [
        "A. Enable default email templates",
        "B. Enable feed tracking on cases.",
        "C. Enable chatter.",
        "D. Enable case assignment rules.",
      ],
      answer: "B,C",
      title: "Question 31",
      explanation: "",
    },
    {
      content:
        "Which two requirements must be met for a user to view knowledge Articles within a Salesforce organization?\nCheck 2 answers.",
      options: [
        "A. The user must have access to the articles tab.",
        "B. The user must have the manage articles permission on the profile.",
        "C. The user must be assigned a Salesforce Knowledge license.",
        "D. The user's profile must have the read permission for the at lease one article type.",
      ],
      answer: "A,D",
      title: "Question 32",
      explanation: "",
    },
    {
      content:
        "What should an administrator consider when moving approval processes using a change set?",
      options: [
        "A. Change sets do not include the approval and rejection actions from the source organization",
        "B. Custom fields on standard objects will need to be manually added in the target organization.",
        "C. The Unique Name of the approval process is not allowed to be changed once deployed in the target organization.",
        "D. Change Sets do not include the order of active approval processes from the source organization.",
      ],
      answer: "A",
      title: "Question 33",
      explanation: "",
    },
    {
      content:
        "The sales manager at Universal Containers wants to see all opportunities that do not have any activities.\nWhich report type could be used to meet this requirement? Choose two answers. * (1 Point)",
      options: [
        "A. A standard opportunity filtered by the field Last Activity and a custom date range that is blank",
        "B. A custom report type with Opportunity as the primary object and Activity as the secondary object",
        "C. An opportunity report with across-object filter of opportunities without activities",
        "D. A joined report using an opportunity report in Block A; a task and event report filtered by tasks for Block B",
      ],
      answer: "A,C",
      title: "Question 34",
      explanation: "",
    },
    {
      content:
        "How can you, as a System Administrator, enforce standardization of tags in libraries?\nChoosetwoanswers.* (1 Point)",
      options: [
        "A. Enable restrictive tagging",
        "B. Enable workflow to send email alert for unnamed tags",
        "C. Change Tagging Field to multi select picklist",
        "D. Guided tags",
      ],
      answer: "A,D",
      title: "Question 35",
      explanation: "",
    },
    {
      content:
        "a salesforce user has created a lightning report that lists all customer support cases. other users can change the date range but are NOT allowed to changed case statuses.\nhow can the report creator configure the report to meet these requirements?",
      options: [
        "A. Save the report in public folder and grant Read Only access to the folder.",
        "B. Save the report in private folder and grant Read Only access to the folder.",
        "C. Save the report in public folder and lock the status filter on the report.",
        "D. Save the report in private folder and lock the status filter on the report.",
      ],
      answer: "B",
      title: "Question 36",
      explanation: "",
    },
    {
      content:
        "The administrator at Universal Containers needs to convert a lookup relationship to a master-detail relationship.\nwhat should the administrator verify to ensure that the conversion is successful?",
      options: [
        "A. No roll-up summaries exist on the lookup object.",
        "B. The lookup field in all records contains a value.",
        "C. The owner is the same for all related records",
        "D. The lookup field is required on the child object.",
      ],
      answer: "B",
      title: "Question 37",
      explanation: "",
    },
    {
      content:
        "Universal Containers uses Territory Management to manage its sales territories. Territory managers and sales representatives are at the same role level in the role hierarchy. Account and Opportunity objects are set to private.\nWhich three permissions should be granted to territory managers.\nChoose 3 answers",
      options: [
        "A. View, Edit, Transfer, and Delete accounts assigned to the territory, regardless of who owns the accounts.",
        "B. Edit All opportunities associated with accounts in the territory, regardless of who owns the opportunities.",
        "C. View All opportunities associated with accounts in the territory, regardless of who owns the opportunities.",
        "D. Transfer All opportunities associated with accounts in the territory, regardless of who owns the opportunities.",
        "E. Transfer and Delete opportunity assigned to the territory, regardless of who owns the opportunities.",
      ],
      answer: "B,C,E",
      title: "Question 38",
      explanation: "",
    },
    {
      content:
        'An administrator has unchecked the "Enable contact pack creation" checkbox after users had created content packs. What is the impact of the change? * (1 Point)',
      options: [
        "A. Users can modify the description and title of existing packs",
        "B. Users can continue to edit the contents of existing packs",
        "C. All existing content packs will be deleted.",
      ],
      answer: "A",
      title: "Question 39",
      explanation: "",
    },
    {
      content:
        "A member of Universal Container's support team is assisting a sales rep in managing a top customer. The sales rep has manually shared an opportunity with the support member in hopes that the support member can update some of the technical sales fields on the record. But the support member is unable to edit the opportunity.\nWhat is the recommended solution to provide edit access to the opportunity?",
      options: [
        "A. Change the support team member's role to a above the sales rep in the org's role hierarchy.",
        "B. Change the Organization Wide Default internal access for opportunity to public read/write.",
        "C. Add the support team member to the opportunity team. Assign read/write access to the member.",
        "D. Create a permission set for opportunity edit and add it to the support member's user record.",
      ],
      answer: "B",
      title: "Question 40",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks wants to understand the implications of archived Activities.\nWhich two considerations should an administrator communicate regarding archived Activities?\nChoose 2 answers.",
      options: [
        "A. Closed tasks created more than 365 days ago with no due date are archived.",
        "B. Events that ended more than 365 days ago are archived.",
        "C. Archived activities are deleted after 365 days.",
        "D. Events created more than 365 days ago are archived.",
      ],
      answer: "C,D",
      title: "Question 41",
      explanation: "",
    },
    {
      content:
        "Your organization-wide defaults for access rights to Price Books are set to Use, but only Sales Reps should have access to Price Books, What should be your first step? * (1 Point)",
      options: [
        "A. Leave the organization-wide default setting, but change the Sales Reps' access rights.",
        "B. Change the organization-wide default setting to View Only.",
        "C. Change the Sales Reps' access rights to Use.",
        "D. Change the organization-wide default setting to No Access.",
      ],
      answer: "D",
      title: "Question 42",
      explanation: "",
    },
    {
      content:
        "North Trail Outfitters want to automate the assignment of territories to opportunities.\nWhich two features are needed to meet this requirement.",
      options: [
        "A. Create Assignment Rules",
        "B. Enable opportunity owner-based sharing",
        "C. Enable filter-based Opportunity Territory Assignment",
        "D. Create an Apex Class",
      ],
      answer: "A,C",
      title: "Question 43",
      explanation: "",
    },
    {
      content:
        "Which of the following data enrichment options is available to a system administrator through the Social Accounts, Contacts, and Leads feature? * (1 Point)",
      options: [
        "A. Use Linked in to import educational background",
        "B. Use Twitter to view recent tweets posted by a contact",
        "C. Use Facebook to import educational background",
        "D. Use the Company's salesforce Facebook account",
      ],
      answer: "B",
      title: "Question 44",
      explanation: "",
    },
    {
      content:
        "Content and has been asked to restrict the content types that are available In a library.\nHow can an administrator meet this requirement' Choose 2 answers",
      options: [
        "A. Add the Related Content related list to the page layout for the associated object",
        "B. Select the 'Restrict the content types available in the library\" checkbox.",
        "C. Add the default content type to the selected Content Types list.",
        "D. Add members to the library who are users or members of public groups.",
      ],
      answer: "B,D",
      title: "Question 45",
      explanation: "",
    },
    {
      content:
        "Which two actions could the delegated administrator complete after delegated administration is granted for a custom object? Choose 2 answers",
      options: [
        "A. Change the relationship with another object.",
        "B. Change organization-wide snaring rules for the object.",
        "C. Add a custom picklist field to the object",
        "D. Create a custom tab for the object",
      ],
      answer: "C,D",
      title: "Question 46",
      explanation: "",
    },
    {
      content:
        "What should a system administrator consider before using territory management? Choose three answers. * (1 Point)",
      options: [
        "A. It does not working parallel with sharing functions",
        "B. Forecasts are derived from Territory hierarchy not Role hierarchy",
        "C. Once enabled it cannot be disabled",
        "D. You need to contact Salesforce to have it enabled",
      ],
      answer: "B,C,D",
      title: "Question 47",
      explanation: "",
    },
    {
      content:
        "In addition to setting the standard price, what must you also do in order to add a Product to a Custom Price Book? * (1 Point)",
      options: [
        "A. Select a Product Family",
        "B. Enter a Product Description.",
        "C. Enter a Product Code.",
        "D. Check the Active checkbox.",
      ],
      answer: "D",
      title: "Question 48",
      explanation: "",
    },
    {
      content:
        "What type of data can be migrated between environments using change sets? Choose 2 answers",
      options: [
        "A. Email templates",
        "B. Field type changes",
        "C. Account team roles",
        "D. Custom fields",
      ],
      answer: "A,D",
      title: "Question 49",
      explanation: "",
    },
    {
      content:
        "Which two results can be expected it an administrator uses Data Loader to transfer ownership of account records? Choose 2 Answers.",
      options: [
        "A. All new owners are automatically notified of their new account ownership.",
        "B. All ownership-based sharing rules for the records are recalculated.",
        "C. All manual sharing is removed from the records that are transferred.",
        "D. All account teams are removed from the records that are transferred.",
      ],
      answer: "A,C",
      title: "Question 50",
      explanation: "",
    },
    {
      content:
        "What is the first step before setting up entitlements? * (1 Point)",
      options: [
        "A. Enable entitlement management",
        "B. Customize entitlements fields",
        "C. Specify the entitlements-related lookup filters on cases",
        "D. Set up service contracts",
      ],
      answer: "A",
      title: "Question 51",
      explanation: "",
    },
    {
      content:
        "Which two permissions need to be enabled to set up entitlement management, including milestones, entitlement processes, and entitlement templates?",
      options: [
        "A. Customize Entitlements",
        "B. Manage Milestones",
        "C. Customize Application",
        "D. Manage Entitlements",
      ],
      answer: "C,D",
      title: "Question 52",
      explanation: "",
    },
    {
      content:
        "Universal Containers has three different profiles for the support desk. The VP of Support requests permission to only reassign profiles for support desk users.\nHow should this access be granted?",
      options: [
        "A. The administrator profile.",
        "B. The manage users permission to the profile.",
        "C. Delegated administration access to the three profiles.",
        "D. A permission set with the manage users permission.",
      ],
      answer: "C",
      title: "Question 53",
      explanation: "",
    },
    {
      content:
        "What is the correct order of steps to follow when working with inbound change sets?",
      options: [
        "A. Deploy, Monitor, Validate",
        "B. Deploy, validate, Monitor",
        "C. Validate, Deploy, Monitor",
        "D. Monitor, Deploy, Validate",
      ],
      answer: "C",
      title: "Question 54",
      explanation: "",
    },
    {
      content:
        "Which two should an administrator consider when setting up Salesforce CRM Content ? Choose 2 answers.",
      options: [
        "A. An approval process can ensure that all product-related content is reviewed.",
        "B. A validation rule can ensure a description is required for all contributed content.",
        "C. The content type determines which fields appear on the Content Detail page layout.",
        "D. The library type determines the size of files that can be contributed to content.",
      ],
      answer: "B,C",
      title: "Question 55",
      explanation: "",
    },
    {
      content:
        "A sales manager cannot vim a contact owned by a salesperson. The salesperson is below the sales manager in the role hierarchy.\nWhy is the sales manager unable to view the contact?",
      options: [
        "A. The contact has MOT been manually shared with the manager.",
        "B. Contact sharing settings ace Private.",
        "C. Contact sharing settings have Grant Access Using Hierarchies unchecked.",
        "D. The contact is NOT linked to an account.",
      ],
      answer: "D",
      title: "Question 56",
      explanation: "",
    },
    {
      content:
        'A sales manager is receiving an "insufficient privileges" error when viewing a contact. The contact owner is under the manager in the role hierarchy and\n"grant access using hierarchies"is checked in their sharing settings. Why is the sales manager not able to view the contact? * (1 Point) The contact sharing settings are controlled by the parent, and the account owner is',
      options: [
        "A. The contact owner has NOT selected the option to share contacts with others in the role hierarchy",
        "B. The contact sharing settings are private, so access to the record is omitted to the contact owner and system administrator",
        "C. The account sharing settings are controlled by the parent, and the account owner is NOT under the sales manager's role",
        "D. NOT under the sales manager's role",
      ],
      answer: "D",
      title: "Question 57",
      explanation: "",
    },
    {
      content:
        "Which permission do you need to manage entitlements? Choose two answers. * (1 Point)",
      options: [
        'A. "Customize Application"',
        'B. "Manage Entitlements"',
        'C. "Manage Application"',
        'D. "Customize Entitlement"',
      ],
      answer: "A,B",
      title: "Question 58",
      explanation: "",
    },
    {
      content:
        "Universal Containers has set up a picklist dependency between region and zone on the Account object. The sales manager has requested that when a user selects a region, a zone must also be selected.\nHow should this be achieved?",
      options: [
        "A. Set default values for both picklist fields.",
        "B. Make the zone field required on the page layout.",
        "C. Make both picklist fields required at the field level.",
        "D. Create a validation rule using ISBLANK().",
      ],
      answer: "D",
      title: "Question 59",
      explanation: "",
    },
    {
      content:
        "Which two values roll up the hierarchy to the manager for Collaborative Forecasting?\nChoose 2 answers.",
      options: [
        "A. Quota amount",
        "B. Product quantity",
        "C. Opportunity amount",
        "D. Expected revenue",
      ],
      answer: "C",
      title: "Question 60",
      explanation: "",
    },
    {
      content:
        "An administrator has uploaded a change set from a sandbox to a production organization and would like to add a missing component to the change set before deployment.\nWhat option does the administrator have to modify the change set? Choose 2 answers.",
      options: [
        "A. Edit the change set in production, add the component, and use the redeploy option.",
        "B. Create a new change set in the sandbox environment, add all the required components and upload it to production",
        "C. Edit the change set in the sandbox environment and upload it to production.",
        "D. Clone the change set in the sandbox environment, add the component and upload it to production",
      ],
      answer: "B,D",
      title: "Question 61",
      explanation: "",
    },
    {
      content:
        "A sales manager would like a report of accounts with no closed/won opportunities in the last year. How can this requirement be met?",
      options: [
        "A. Create a joined report using the Accounts report type and the Opportunities report types.",
        "B. Create a tabular report using the Account report type and add a cross filter using Opportunities.",
        "C. Create a customer report type for Accounts without Opportunities.",
        "D. Create a summary report using the Accounts report type with a formula field for opportunity count.",
      ],
      answer: "A",
      title: "Question 62",
      explanation: "",
    },
    {
      content:
        "Universal Containers uses a custom object to track resources called Supply Items with a lookup to Accounts. The Supply Items records should only be visible by users that own the Account records. What sharing setting provides the correct visibility?",
      options: [
        "A. Controlled by Parent",
        "B. Public Read Only",
        "C. Private",
        "D. Public Read/Write/Transfer",
      ],
      answer: "A",
      title: "Question 63",
      explanation: "",
    },
    {
      content:
        "Universal containers is using a web-to-lead from to collect contact information on people interested in its product and wants to ensure that these leads are contacted in a timely manner. The following actions are required:\n* send the lead an email with appropriate product information, depending on which product was selected on the web-to-lead form\n* Assign the appropriate salesperson to be the lead owner, depending on the product selected\n* create a task for the salesperson to follow up with the lead.\nAt a minimum, which combination of salesforce automation tools will be\nrequired to meet these requirement?",
      options: [
        "A. lead assignment rule and publisher action.",
        "B. Lead assignment rule, auto response rule and workflow rules",
        "C. Lead assignment rule and workflow rule",
        "D. Lead assignment rule and auto response rule.",
      ],
      answer: "B",
      title: "Question 64",
      explanation: "",
    },
    {
      content:
        "What privileges can be given to a delegated administrator? Choose three answers. * (1 Point)",
      options: [
        "A. Assign users to specified profiles.",
        "B. Create and edit users.",
        "C. Modify the role hierarchy.",
        "D. Manage custom objects.",
        "E. Modify profile permissions.",
      ],
      answer: "A,B,D",
      title: "Question 65",
      explanation: "",
    },
    {
      content:
        "Universal Container (UC) is considering using Communities. Each partner is associated with a product and will need a separate community?\nSome partners will need to access to more than one community.\nWhat are two consideration an administrator should be aware of?\nChoose 2 answers",
      options: [
        "A. Community license choice of member-based or login-based.",
        "B. The org limit of 100 communities includes active, inactive, and preview communities.",
        "C. Communities licenses are associated with a specific community.",
        "D. The org limit of 100 community does not include inactive or preview communities.",
      ],
      answer: "A,B",
      title: "Question 66",
      explanation: "",
    },
    {
      content:
        "what type of data can be migrated between environments using change sets? choose 2",
      options: [
        "A. Account team roles.",
        "B. standard field picklist values.",
        "C. Email templates.(100%)",
        "D. Custom fields(100%)",
      ],
      answer: "C,D",
      title: "Question 67",
      explanation: "",
    },
    {
      content:
        "Universal Containers uses Salesforce Knowledge and has defined its category groups based on the regions of Europe, of Americas, Africa, and Asi a. The administrator needs to restrict visibility of each category to the sales representatives within each region. How should the administrator control access to these category groups?",
      options: [
        "A. Modify object settings for the category groups on the sales users profiles.",
        "B. Add or remove sales users from a public group with access to the category groups.",
        "C. Add custom category groups to the roles assigned to the sales users.",
        "D. Add custom category groups to the profiles assigned to the sales users.",
      ],
      answer: "C",
      title: "Question 68",
      explanation: "",
    },
    {
      content:
        "What would you check to see whether a workflow failed? * (1 Point)",
      options: [
        "A. workflow log",
        "B. integration log",
        "C. debug log",
        "D. failed work flow log",
      ],
      answer: "C",
      title: "Question 69",
      explanation: "",
    },
    {
      content:
        "Universal Containers plans to migrate its existing knowledge base in to Salesforce Lightning Knowledge. Which two statements must be considered? Choose2 answers.* (1 Point)",
      options: [
        "A. Article numbers change during migration",
        "B. Classic Knowledge Attachments are moved to the files related list",
        "C. Each article must be associated to a record type",
        "D. Approval process history migrate to Lightning Knowledge",
      ],
      answer: "B,C",
      title: "Question 70",
      explanation: "",
    },
    {
      content:
        "Salesforce Knowledge offers administrators the ability to fully customize the way an article type displays to an end user. * (1 Point)",
      options: ["A. False", "B. True"],
      answer: "B",
      title: "Question 71",
      explanation: "",
    },
    {
      content:
        "Universal containers uses a private sharing model for accounts. A user who owns an account record needs to temporarly grant delete access to this records associated contacts to another user. how can this be accomplished?",
      options: [
        "A. Transfer ownership of the account record to the user.",
        "B. Add the user to the owner's default account team",
        "C. Use the manual sharing button on the account.",
        "D. Manually add the user to the account team.",
      ],
      answer: "A",
      title: "Question 72",
      explanation: "",
    },
    {
      content:
        "The VP of Finance wants to ensure that once an opportunity is closed, it cannot be modified by any user.\nHow can an administrator meet this requirement?",
      options: [
        "A. Set the Do Not Modify Closed Opportunity permission for all profiles.",
        "B. Set all fields to Read-Only on the standard Closed Opportunity page layout.",
        "C. Create a workflow field update to update the IsClosed field to True if a dosed opportunity is modified.",
        "D. Create an opportunity validation rule with the formula; PWORVALUE( IsClosed ) - True.",
      ],
      answer: "D",
      title: "Question 73",
      explanation: "",
    },
    {
      content:
        "The VP of Finance wants to ensure that once an opportunity is closed, it cannot be modified by any user. How can an administrator meet this requirement?",
      options: [
        "A. Create a workflow field update to update the IsClosed field to True if a closed opportunity is modified.",
        "B. Create an opportunity validation rule with the formula: PRIORVALUE( IsClosed ) = True.",
        "C. Set the Do Not Modify Closed Opportunity permission for all profiles.",
        "D. Set all fields to Read-Only on the standard Closed Opportunity page layout.",
      ],
      answer: "B",
      title: "Question 74",
      explanation: "",
    },
    {
      content:
        "In Collaborative Forecasts, which permissions are required in order to upload quota data for all users? Choose 2. * (1 Point)",
      options: [
        "A. Manage Quotas",
        "B. Customize Quotas",
        "C. View all Forecasts",
        "D. Customize Forecasts",
        "E. Manage all data",
        "F. View all data.",
      ],
      answer: "A,C",
      title: "Question 75",
      explanation: "",
    },
    {
      content:
        "An administrator at Universal Containers hat completed a new set of validation rule along with a Process Builder in a sandbox and wants to move these changes to production via a change set but they are currently unable to do so.\nWhat are two configurations an administrator needs before they are able to deploy changes? Choose 2 answers",
      options: [
        "A. The Deploy Change Sets permission must be granted",
        "B. The Production Org must be configured to Allow inbound Changes from the sandbox",
        "C. The Sandbox must be configured to Allow Outbound Changes to Production",
        "D. Create the Validation Rules in Production because they can't be deployed via Change Sets",
      ],
      answer: "B,C",
      title: "Question 76",
      explanation: "",
    },
    {
      content:
        "Universal Containers has a process to allow an employee to submit a vacation request and route it to the employee's manager for approval. An employee attempted to submit a request but it could not be submitted. How could the administrator troubleshoot this?",
      options: [
        "A. Use workflow to email the administrator if the process fails.",
        "B. Ensure the approval step has an associated action",
        "C. Ensure the user record has an assigned active manager.",
        "D. Review the system log to determine the root cause.",
      ],
      answer: "C",
      title: "Question 77",
      explanation: "",
    },
    {
      content:
        "Which three password options are available for the administrator to set on content deliveries? Choose 3 answers",
      options: [
        "A. Password protection Is optional and defaults to ON",
        "B. Administrator-provided default password",
        "C. Password protection is required",
        "D. Password protection Is optional and defaults to OFF",
        "E. Password complexity rules",
      ],
      answer: "C,D,E",
      title: "Question 78",
      explanation: "",
    },
    {
      content:
        "A sales manager wants to edit the opportunities owned by the sales team. The manager does not have Edit access to the Opportunity object. What is a recommended solution? * (1 Point)",
      options: [
        'A. Redefine the role hierarchy by enabling"grant access using hierarchies',
        "B. Enable team selling on the Opportunity object to Grant Read/Writeaccess",
        "C. Change the opportunity's organization-wide default setting to Public Read/Write",
        "D. Create permission set and associate Edit opportunity to the user record",
      ],
      answer: "D",
      title: "Question 79",
      explanation: "",
    },
    {
      content: "Which feature license is required to use Content? * (1 Point)",
      options: [
        "A. Salesforce CRM Content Creator",
        "B. Salesforce CRM Content User",
        "C. Salesforce CRM Content Manager",
        "D. Salesforce CRM Content Contributor",
      ],
      answer: "B",
      title: "Question 80",
      explanation: "",
    },
    {
      content:
        "What should an administrator consider when setting up salesforce entitlements? choose 2",
      options: [
        "A. The service level agreements related list on a case gives support agents access to contract details.",
        "B. Salesforce entitlements require service cloud user feature licensing.",
        "C. The entitlement model dictates the level of detail for the entitlement process.",
        "D. Salesforce entitlements require an entitlement process with milestones and milestone actions.",
      ],
      answer: "A,D",
      title: "Question 81",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants customers who buy the Freight Container product to be billed in monthly installments. How should an administrator meet this requirement?",
      options: [
        "A. Create a default quantity schedule on the product",
        "B. Create custom fields on the product.",
        "C. Create a default revenue schedule on the product.",
        "D. Create a workflow rule on the product.",
      ],
      answer: "C",
      title: "Question 82",
      explanation: "",
    },
    {
      content: "What is a capability of Territory management? Choose 2 answers",
      options: [
        "A. Support for complex and frequently changed sales organization structures",
        "B. Territory hierarchy replaces the role hierarchy for sharing",
        "C. The ability to use opportunity criteria to expand a private sharing model",
        "D. The ability to use account criteria to expand a private sharing model",
      ],
      answer: "A,D",
      title: "Question 83",
      explanation: "",
    },
    {
      content:
        "Cloud kicks wants to understand the implications of archived Activities.\nWhich two considerations should an administrator communicate regarding archived Activities?\nChoose 2 answers",
      options: [
        "A. Archived activities are deleted after 365 days.",
        "B. Events that ended more than 365 days ago are archived.",
        "C. Events created more than 365 days ago are archived.",
        "D. Closed tasks created more than 365 days ago with no due data are archived.",
      ],
      answer: "B,C",
      title: "Question 84",
      explanation: "",
    },
    {
      content:
        'Which three actions can occur when an administrators clicks "save" after making a number of changes to Knowledge data categories in a category group and changing their position in the hierarchy? Choose three.',
      options: [
        "A. The contents of category drop-down menu change",
        "B. The history of article usage is reset to zero utilization",
        "C. Users are temporarily locked out of the ability to access articles",
        "D. Users may temporarily experience performance issues when searching for articles",
        "E. The articles and questions visible to users change",
      ],
      answer: "A,D,E",
      title: "Question 85",
      explanation: "",
    },
    {
      content:
        "Which actions can you add to a milestone? (Choose three answers.) * (1 Point)",
      options: [
        "A. Violation actions",
        "B. Success actions",
        "C. Repeat actions",
        "D. Warning actions",
      ],
      answer: "A,B,D",
      title: "Question 86",
      explanation: "",
    },
    {
      content:
        "A member of Universal container's support team is assisting as a lesrep in managing a top customer. The sales rep has manually shared an opportunity with the support member in hopes that the support member can update some of the technical sales fields on the record, but the support member is unable to edit the opportunity, Which solution would provide edit access to the opportunity?* (1 Point)",
      options: [
        "A. Change the support team member's role to a role above the sales rep in the org's role hierarchy",
        "B. Add the support team member to the opportunity team and assign read/write access to the member",
        "C. Create a permission set for opportunity edit and add it to the support member's user record",
        "D. Change the Organization-Wide Defaults internal access for opportunities to public read/write",
      ],
      answer: "B",
      title: "Question 87",
      explanation: "",
    },
    {
      content:
        "When a sales rep at Northern Trail tiers to submit a discount request on an opportunity they receive an error:\nWhich two consideration would cause this error?",
      options: [
        "A. The approval process is assigned to a queue.",
        "B. This field updated is on a cross-object.",
        "C. The approval assigned in the process is inactive",
        "D. A validation rule prevents the field update",
      ],
      answer: "C,D",
      title: "Question 88",
      explanation: "",
    },
  ],
});
