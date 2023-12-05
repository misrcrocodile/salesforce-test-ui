window.testContent = window.testContent || [];
var testId = "Salesforce.Advanced-Administrator";
var testName = "Salesforce.Advanced-Administrator";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "Salesforce.Advanced-Administrator.v2022-04-09.q102",
  content: [
    {
      content:
        "Universal Containers uses Enterprise Territory Management to assist with the assignment of records. Each territory has only one user assigned. A sales rep converts a lead to an opportunity and the lead owner belongs to the same territory as an account that the opportunity was converted to.\nWhat ts the expected assignment of the opportunity?",
      options: [
        "A. The opportunity is assigned to the same territory as the account,, and the lead owner becomes the opportunity owner. The lead owner is added as an inactive member of the territory,",
        "B. The opportunity is assigned to the same territory as the account, and the lead owner becomes the opportunity owner.",
        "C. A The opportunity is assigned to the same territory as the account, and the opportunity owner is the sole member of the territory.",
        "D. The opportunity is assigned to the forecast manager of the territory.",
      ],
      answer: "C",
      title: "Question 1",
      explanation: "",
    },
    {
      content:
        "Salesforce Knowledge offers the ability to store PowerPoint files, PDFs, office documents, and any other type of file with no restriction on size or length. * (1 Point)",
      options: ["A. False", "B. True"],
      answer: "A",
      title: "Question 2",
      explanation: "",
    },
    {
      content:
        "An administrator for Cloud Kicks has received several requests to update Salesforce reports with fields that users are unable to see on the report. The administrator notices that the missing fields are new custom fields and the reports are created with custom report types.\nWhat should the administrator do to make this an easier process?",
      options: [
        "A. Mark the fields and Visible and Read Only on the user Profiles.",
        "B. Ensure the reports are being created with the correct hierarchy level.",
        "C. Build reports for the users and save them in a shared folder.",
        "D. Enable Auto add new custom fields to custom report type layouts.",
      ],
      answer: "D",
      title: "Question 3",
      explanation: "",
    },
    {
      content:
        "Universal Containers uses a Private Sharing model for Accounts. User A is onboarded to User B's team and given the same Profile and Role. Both users own 20 Accounts but User B is able to see 40 Accounts, whereas User A can only see the 20 they own.\nWhat are two possible reasons for this?\nChoose 2 answers.",
      options: [
        "A. User B is a member of a Queue that gained access to the records through a sharing Rule.",
        "B. User B is a member of a Group that gained access to the records through a Sharing Rule.",
        "C. User B had the records manually shared with them.",
        "D. User B had the records shared with them through a Permission Set.",
      ],
      answer: "B,D",
      title: "Question 4",
      explanation: "",
    },
    {
      content:
        "The administrator at Universal Containers needs to convert a lookup relationship to a master-detail relationship.\nwhat should the administrator verify to ensure that the conversion is successful?",
      options: [
        "A. The lookup field is required on the child object.",
        "B. No roll-up summaries exist on the lookup object.",
        "C. The lookup field in all records contains a value.",
        "D. The owner is the same for all related records",
      ],
      answer: "C",
      title: "Question 5",
      explanation: "",
    },
    {
      content:
        "What is the first step before setting up entitlements? * (1 Point)",
      options: [
        "A. Enable entitlement management",
        "B. Customize entitlements fields",
        "C. Set up service contracts",
        "D. Specify the entitlements-related lookup filters on cases",
      ],
      answer: "A",
      title: "Question 6",
      explanation: "",
    },
    {
      content:
        "how can an administrator use the service cloud console to increase the efficiency of support users? choose 3",
      options: [
        "A. configure the idea themes page layout with buttons and links to case detail information",
        "B. configure it to manage chatter answers cases and live agent chat conversations.",
        "C. customize the softphone to provide a screen pop-up on incoming support calls.",
        "D. enable the service cloud console application in salesforce communities.",
        "E. use publisher actions in case feed to combine the publisher extension menus in a single row.",
      ],
      answer: "B,C,D",
      title: "Question 7",
      explanation: "",
    },
    {
      content:
        "After a recent release, users report that the look and feel of the app they use is different. Fields are appearing in a different place on the page, related lists are missing, and tabs are rearranged.\nHow should an administrator troubleshoot this?",
      options: [
        "A. Setup Audit Trail",
        "B. Debug Log",
        "C. App Manager",
        "D. Page Layouts",
      ],
      answer: "A",
      title: "Question 8",
      explanation: "",
    },
    {
      content:
        "Which permission do you need to manage entitlements? Choose two answers. * (1 Point)",
      options: [
        'A. "Customize Entitlement"',
        'B. "Customize Application"',
        'C. "Manage Entitlements"',
        'D. "Manage Application"',
      ],
      answer: "B,C",
      title: "Question 9",
      explanation: "",
    },
    {
      content:
        "Universal Containers needs to use a different pricebook for sales\nrepresentatives in each of the US, LATAM, EMEA, and APAC regions. What\nshould the system\nadministrator do? * (1 Point)",
      options: [
        "A. Clone the standard pricebook and create separate pricebooks for each region",
        "B. Add a different list price for products depending on the region",
        "C. Create a separate pricebook for each region",
      ],
      answer: "A",
      title: "Question 10",
      explanation: "",
    },
    {
      content:
        "Which tools would you use to deploy metadata from one organization to either a RELATED or UNRELATED organization? Choose two answers. * (1 Point)",
      options: [
        "A. Unmanaged Packages",
        "B. Force.com IDE",
        "C. Force.com Migration Tool",
        "D. Change sets",
      ],
      answer: "B,C",
      title: "Question 11",
      explanation: "",
    },
    {
      content:
        'A sales manager is receiving an "insufficient privileges" error when viewing a contact. The contact owner is under the manager in the role hierarchy and\n"grant access using hierarchies"is checked in their sharing settings. Why is the sales manager not able to view the contact? * (1 Point) The contact sharing settings are controlled by the parent, and the account owner is',
      options: [
        "A. The contact sharing settings are private, so access to the record is omitted to the contact owner and system administrator",
        "B. The account sharing settings are controlled by the parent, and the account owner is NOT under the sales manager's role",
        "C. NOT under the sales manager's role",
        "D. The contact owner has NOT selected the option to share contacts with others in the role hierarchy",
      ],
      answer: "C",
      title: "Question 12",
      explanation: "",
    },
    {
      content:
        "How can content types be used in CRM Content? (Choose two answers.) * (1 Point)",
      options: [
        "A. With upload rules, to limit the size of content files.",
        "B. With library rules, to limit the number of libraries created",
        "C. With validation rules, to capture complete data",
        "D. With content fields, to control the content detail page layout",
      ],
      answer: "C,D",
      title: "Question 13",
      explanation: "",
    },
    {
      content:
        "Which deployment tool can be used to deploy metadata from a developer\nedition organization to another organization? choose 2",
      options: [
        "A. Force.com Migration tool(100%)(salesforce extensions for visual studio code)",
        "B. Force.com IDE",
        "C. Data loader.",
        "D. Change sets",
      ],
      answer: "A,B",
      title: "Question 14",
      explanation: "",
    },
    {
      content:
        "What declarative toot fete administrators test Lightning email temples and automations in a sandbox environment and then move what's successful to a production environment?",
      options: [
        "A. Change Sets",
        "B. ANT Migration Tool",
        "C. Salesforce CLl",
        "D. lightning Flow",
      ],
      answer: "B",
      title: "Question 15",
      explanation: "",
    },
    {
      content:
        "an administrator wants to report on activities related to a specific account over the past 18 months but some of these activities have been archived.\nhow can the administrator obtain a report with the correct data? choose 3",
      options: [
        "A. Export archived activities using the data loader.",
        "B. use the weekly data export to obtain the archived activities.",
        "C. open a case with support to extend archived days.",
        "D. Restore archived activities from the activity archive object.",
      ],
      answer: "A",
      title: "Question 16",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants to track invoices with a custom object. They want to be able to view any invoices as a related list on the Opportunity record page.\nWhich feature would ensure can view all invoices associated with an Opportunity if the user can view the parent Opportunity record?",
      options: [
        "A. Sharing Rules",
        "B. Lookup Relationships",
        "C. Field Level Security",
        "D. Master-Detail Relationships",
      ],
      answer: "D",
      title: "Question 17",
      explanation: "",
    },
    {
      content:
        "Universal Containers plans to migrate its existing knowledge base in to Salesforce Lightning Knowledge. Which two statements must be considered? Choose2 answers.* (1 Point)",
      options: [
        "A. Article numbers change during migration",
        "B. Each article must be associated to a record type",
        "C. Classic Knowledge Attachments are moved to the files related list",
        "D. Approval process history migrate to Lightning Knowledge",
      ],
      answer: "B,C",
      title: "Question 18",
      explanation: "",
    },
    {
      content:
        "Which two results can be expected it an administrator uses Data Loader to transfer ownership of account records? Choose 2 Answers.",
      options: [
        "A. All manual sharing is removed from the records that are transferred.",
        "B. All account teams are removed from the records that are transferred.",
        "C. All new owners are automatically notified of their new account ownership.",
        "D. All ownership-based sharing rules for the records are recalculated.",
      ],
      answer: "A,C",
      title: "Question 19",
      explanation: "",
    },
    {
      content:
        "Recruiters at Universal Containers want to associate a position with their related job applications using two custom objects-Position and Job always have a related position. If a position is deleted, the corresponding job applications are deleted. What type of object relationship will meet this requirement? * (1 Point)",
      options: [
        "A. Junction",
        "B. Hierarchical",
        "C. Lookup",
        "D. Master-detail",
      ],
      answer: "D",
      title: "Question 20",
      explanation: "",
    },
    {
      content:
        "Which two types of data should a sales representative access from the Forecasts tab when using Collaborative Forecasts?\nChoose 2 answers.",
      options: [
        "A. Forecast amount for each opportunity stage",
        "B. Opportunities that make up each forecast amount",
        "C. Forecast amount for other representatives on their team",
        "D. Forecast amount for each forecast category",
      ],
      answer: "A,D",
      title: "Question 21",
      explanation: "",
    },
    {
      content:
        "Your company sells large mainframes that are delivered in one delivery but are paid for with several regular installments. What type of schedule should you set up? * (1 Point)",
      options: [
        "A. Don't create any default schedule",
        "B. Default Revenue and Quantity Schedule",
        "C. Default Quantity Schedule",
        "D. Default Revenue Schedule",
      ],
      answer: "D",
      title: "Question 22",
      explanation: "",
    },
    {
      content:
        "Universal Containers created a few new fields on the account object as well as a new section on the page layout in the config sandbox. After positive test results, the administrator created and uploaded a change set with the new fields from the sandbox to production. Unfortunately, the administrator forgot to add the page layout.\nWhich two options can the administrator take to deploy the page layout?\nChoose 2 answers.",
      options: [
        "A. Deploy the existing change set. create and deploy a new change set containing the page layout.",
        "B. Edit the change set in production to add the new page layout before deploying the change set.",
        "C. Add the page layout to the existing change set in the sandbox and upload the change set again.",
        "D. Clone the change set in the sandbox, add the new page layout to it and upload to production.",
      ],
      answer: "A,C",
      title: "Question 23",
      explanation: "",
    },
    {
      content:
        "An Administrator has been asked to grant read, create and edit access to the product object for users who currently have the standard marketing user profile.\nWhich two approaches could be used to meet this request? Choose 2 answers.",
      options: [
        "A. Create a permission set with read and write access for the product object and assign it to the marketing users",
        "B. Change the access levels in the marketing user standard profile to read, create and edit for the product object",
        "C. Create a new profile for the marketing users and change the access levels to read, create and edit for the product object",
        "D. Create a permission set with read, create and edit access for the product object and assign it to the marketing users",
      ],
      answer: "C,D",
      title: "Question 24",
      explanation: "",
    },
    {
      content:
        "AW Computing uses a private sharing model for cases. A select group of five users need read/write access to all cases with a specific record type. Of these users, one is assigned the Support Manager profile and four are assigned the Support Representative profile. How can the administrator meet this requirement?",
      options: [
        "A. Modify the Support Manager and Support Representative profiles to View All Data access on all cases with the record type.",
        "B. Create a new profile for the five users with View All Data access; remove access to the record type from all other profiles.",
        "C. Create a public group for the users and use criteria-based sharing rules to share cases with the record type to that group.",
        "D. Create a public group for the users and a custom parent case record with the record type; share this case by record owner.",
      ],
      answer: "B",
      title: "Question 25",
      explanation: "",
    },
    {
      content:
        "In Collaborative Forecasts, which permissions are required in order to upload quota data for all users? Choose 2. * (1 Point)",
      options: [
        "A. Customize Quotas",
        "B. View all Forecasts",
        "C. View all data.",
        "D. Manage all data",
        "E. Manage Quotas",
        "F. Customize Forecasts",
      ],
      answer: "B,E",
      title: "Question 26",
      explanation: "",
    },
    {
      content:
        "the vp of sales noticed that sales representatives are extending their close dates to the future on their opportunities.\nhow can the sales managers determine how many times close dates are being changed? choose 2",
      options: [
        "A. use workflow to update a count field when the close date field has changed using the criteria ISCHANGED(closedate).",
        "B. have a developer create an apex trigger to update a count field when a change to the close date field has been made.",
        "C. use workflow to update a count field when the close date field has changed using the criteria closedate> PRIORVALUE(closedate)",
        "D. Add a formula field on the page layout of the opportunity with the default value set to PRIORVALUE(close date).",
      ],
      answer: "A,C",
      title: "Question 27",
      explanation: "",
    },
    {
      content:
        "The Sales Manager at Universal Containers would like a dashboard to view each of the sales representative's opportunities, accounts, and related cases. What is a recommended solution?",
      options: [
        'A. Create a dynamic dashboard and insure the sales manager has the "View My Team\'s Dashboard" permission.',
        "B. Create an individual dashboard for each sales representative with opportunity, account, and case components.",
        "C. Create a dashboard and add filters for users, opportunities, accounts, and cases.",
        "D. Create a dynamic dashboard and add filters for opportunities, accounts and cases.",
      ],
      answer: "A",
      title: "Question 28",
      explanation: "",
    },
    {
      content:
        "Which of the following is NOT true about article types in Salesforce Knowledge? * (1 Point)",
      options: [
        "A. An organization must have 2 article types to enable Knowledge.",
        "B. Article Types may include attachments.",
        "C. Article Types are typically short HTML documents.",
        "D. Article Types should enable 'actionable' content.",
      ],
      answer: "A",
      title: "Question 29",
      explanation: "",
    },
    {
      content:
        'The inside sales manager at Universal Containers wants to be able to report on how long leads have a Lead Status of "Open" before the status changes to another value. Additionally, the sales team has requested the status value be changed with fewer clicks. What should the administrator do to meet this requirement?',
      options: [
        "A. Use a quick action to change the status value and a workflow rule to update a date field.",
        "B. Use a formula field to calculate the difference between the current and created data when the status changes through inline editing.",
        "C. Use a workflow rule that sends an email when the Lead Status is changed and an approval process to update the status.",
        "D. Turn on field history tracking for the lead status field and create a report based on that field.",
      ],
      answer: "B",
      title: "Question 30",
      explanation: "",
    },
    {
      content:
        "What should an administrator consider when setting up and maintaining salesforce knowledge? choose 3",
      options: [
        "A. knowledge settings must be configured to allow users to create an article from a case",
        "B. Article version numbers must be assigned by a knowledge manager for tracking.",
        "C. Enabling knowledge on a user record requires licensing.",
        "D. solution category browsing must be enabled in solution settings.",
        "E. Data category visibility is assigned through roles and profiles.",
      ],
      answer: "A,C,E",
      title: "Question 31",
      explanation: "",
    },
    {
      content:
        "North Trail Outfitters want to automate the assignment of territories to opportunities.\nWhich two features are needed to meet this requirement.",
      options: [
        "A. Create an Apex Class",
        "B. Enable filter-based Opportunity Territory Assignment",
        "C. Enable opportunity owner-based sharing",
        "D. Create Assignment Rules",
      ],
      answer: "B,D",
      title: "Question 32",
      explanation: "",
    },
    {
      content:
        "Universal Containers created and tested a new approval process in a developer sandbox. While the approval routings were correct, the approvers were NOT receiving the notification emails.\nWhat could be the cause of this issue?",
      options: [
        "A. Approvals can only be tested in a fail or partial data sandbox.",
        "B. The email relay is disabled in the sandbox.",
        "C. Email deliverability CANNOT be changed in a sandbox.",
        "D. The email address for the users in the sandbox are invalid.",
      ],
      answer: "D",
      title: "Question 33",
      explanation: "",
    },
    {
      content:
        "The marketing department at universal containers regularly changes the\npage layout requirements for its custom marketing objects. The VP of\nMarketing has asked the administrator for permission to configure only\nthese objects.\nWhat can the administrator do to meet this request?",
      options: [
        "A. Grant the VP of marketing the ability to log in as a user who is a system administrator.",
        "B. Set up the VP of Marketing as a delegated administrator for the custom marketing objects.",
        "C. Create a custom profile with edit permission on the custom marketing objects and assign to the VP of marketing.",
        "D. Enable the marketing user permission on the user recrord for the VP of Marketing",
      ],
      answer: "C",
      title: "Question 34",
      explanation: "",
    },
    {
      content:
        "An administrator has been asked to create a report showing all newly created chatter groups by a custom designation divided by the four departments that maintain chatter groups- partners, corporate, practices and solutions.\nHow can an administrator meet this reporting requirement?",
      options: [
        "A. Use a multi-select picklist field to bucket chatter groups in the report according to department.",
        "B. Create tags for chatter groups and create a summary report for newly created chatter groups.",
        "C. Create a report type for chatter groups and create a summary report for newly- created chatter group.",
        "D. Use a bucket in the chatter groups report to categorize the four different departments. (100%)",
      ],
      answer: "D",
      title: "Question 35",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants to create a Feedback__c custom object related to Account and ensure all feedback records are owned by the same user as the Account owner.\nHow should an administrator relate Feedback__c to Account?",
      options: [
        "A. Create a lookup Account field and filter on Feedback__c.",
        "B. Create a master-detail field on Feedback__c.",
        "C. Create a junction object between Account and Feedback__c.",
        "D. Create a hierarchical field on Feedback__c.",
      ],
      answer: "D",
      title: "Question 36",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks (CK) has recently decided to use Collaborative Forecasting to optimize the accuracy and efficiency of its sales cycle. The CK sales operation manager wants to enable supervisors and their subordinates to make changes to any forecast amounts that inaccurately reflect their current pipeline.\nWhich two settings should be enabled to meet this requirement?\nChoose 2 answers",
      options: [
        "A. Revenue adjustments",
        "B. Owner adjustments",
        "C. Manager adjustments",
        "D. Payout adjustments",
      ],
      answer: "B,C",
      title: "Question 37",
      explanation: "",
    },
    {
      content:
        "A member of Universal container's support team is assisting as a lesrep in managing a top customer. The sales rep has manually shared an opportunity with the support member in hopes that the support member can update some of the technical sales fields on the record, but the support member is unable to edit the opportunity, Which solution would provide edit access to the opportunity?* (1 Point)",
      options: [
        "A. Add the support team member to the opportunity team and assign read/write access to the member",
        "B. Change the support team member's role to a role above the sales rep in the org's role hierarchy",
        "C. Change the Organization-Wide Defaults internal access for opportunities to public read/write",
        "D. Create a permission set for opportunity edit and add it to the support member's user record",
      ],
      answer: "A",
      title: "Question 38",
      explanation: "",
    },
    {
      content:
        "Universal Containers uses Territory Management to manage its sales territories. Territory managers and sales representatives are at the same role level in the role hierarchy. Account and Opportunity objects are set to private.\nWhich three permissions should be granted to territory managers.\nChoose 3 answers",
      options: [
        "A. View, Edit, Transfer, and Delete accounts assigned to the territory, regardless of who owns the accounts.",
        "B. View All opportunities associated with accounts in the territory, regardless of who owns the opportunities.",
        "C. Transfer All opportunities associated with accounts in the territory, regardless of who owns the opportunities.",
        "D. Transfer and Delete opportunity assigned to the territory, regardless of who owns the opportunities.",
        "E. Edit All opportunities associated with accounts in the territory, regardless of who owns the opportunities.",
      ],
      answer: "B,D,E",
      title: "Question 39",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks (CK) has a sneaker of the month product that is sold as an annual subscription at the price of $1, What type of product scheduling should the CK administrator set up to accurately capture that information?",
      options: [
        "A. Revenue Schedule Only",
        "B. Inbound Scheduling",
        "C. Quantity and Revenue Schedules.",
      ],
      answer: "C",
      title: "Question 40",
      explanation: "Quantity Schedule Only",
    },
    {
      content:
        "The VP of Finance wants to ensure that once an opportunity is closed, it cannot be modified by any user.\nHow can an administrator meet this requirement?",
      options: [
        "A. Create a workflow field update to update the IsClosed field to True if a dosed opportunity is modified.",
        "B. Set all fields to Read-Only on the standard Closed Opportunity page layout.",
        "C. Set the Do Not Modify Closed Opportunity permission for all profiles.",
        "D. Create an opportunity validation rule with the formula; PWORVALUE( IsClosed ) - True.",
      ],
      answer: "D",
      title: "Question 41",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants to convert a lookup relationship to a master detail relationship.\nWhat action should the administrator take prior to converting the relationship?",
      options: [
        "A. Ensure all existing records have a value in the current lookup field.",
        "B. Delete the current lookup field before adding the new master-detail field.",
        "C. Select the allow re-parenting option on the master-detail relationship field.",
        "D. Remove roll-up summary fields on the parent prior to changing the field type.",
      ],
      answer: "A",
      title: "Question 42",
      explanation: "",
    },
    {
      content:
        "What access can users have to Accounts and Opportunities when territory management is enabled? * (1 Point)",
      options: [
        "A. Transfer and Delete opportunities regardless of the owner of the record",
        "B. View Account records regardless of the account record owner",
        "C. Edit,TransferandDeleteOpportunityrecordsregardlessoftherecordoftheowner",
        "D. Edit Opportunity records regardless of the account owner",
      ],
      answer: "B",
      title: "Question 43",
      explanation: "",
    },
    {
      content:
        "A sales manager cannot vim a contact owned by a salesperson. The salesperson is below the sales manager in the role hierarchy.\nWhy is the sales manager unable to view the contact?",
      options: [
        "A. Contact sharing settings have Grant Access Using Hierarchies unchecked.",
        "B. The contact is NOT linked to an account.",
        "C. The contact has MOT been manually shared with the manager.",
        "D. Contact sharing settings ace Private.",
      ],
      answer: "B",
      title: "Question 44",
      explanation: "",
    },
    {
      content:
        "Universal Containers purchased Field Service Lightning Licenses in Production and wants to make these license available in an active development sandbox with the minimum development impact.\nHow should an administrator create these licenses in the sandbox?",
      options: [
        "A. Use the Match Production Licenses tool.",
        "B. Merge Production and the sandbox using a template.",
        "C. Refresh the sandbox from production.",
        "D. Submit a Salesforce support case.",
      ],
      answer: "C",
      title: "Question 45",
      explanation: "",
    },
    {
      content:
        "U.C wants to archive cases that have been closed for two or more years. the cases need to be revoved from salesforce and be available to be loaded into loaded into the company's data warehouse.\nhow can the administrator automate this process? choose 2",
      options: [
        "A. enable the case archied feature.",
        "B. schedule the data export service.",
        "C. use the apex dataloader",
        "D. use an Appexchange product",
      ],
      answer: "C,D",
      title: "Question 46",
      explanation: "",
    },
    {
      content:
        "Cloud kicks wants to understand the implications of archived Activities.\nWhich two considerations should an administrator communicate regarding archived Activities?\nChoose 2 answers",
      options: [
        "A. Events created more than 365 days ago are archived.",
        "B. Archived activities are deleted after 365 days.",
        "C. Events that ended more than 365 days ago are archived.",
        "D. Closed tasks created more than 365 days ago with no due data are archived.",
      ],
      answer: "A,C",
      title: "Question 47",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants to create a Job Application custom object related to a Job Posting custom object. They would also like a no-code solution to calculate the number of Job Applications for each Job Posting.\nWhat type of field should an administrator create on the Job Application to enable this functionality?",
      options: [
        "A. Lookup",
        "B. Roll-up Summary",
        "C. Master-Detail",
        "D. Formula",
      ],
      answer: "C",
      title: "Question 48",
      explanation: "",
    },
    {
      content:
        "How should an administrator ensure article managers use specified values for custom article fields?",
      options: [
        "A. Create a formula field m the article.",
        "B. Use field dependencies on record type",
        "C. Create different record types for different requirements.",
        "D. Require a held on the page layout.",
      ],
      answer: "A",
      title: "Question 49",
      explanation: "",
    },
    {
      content:
        "Which two deployment tools should be used to deploy metadata from a Developer Edition organization to another organization?\nChoose 2 answers",
      options: [
        "A. Salesforce Extensions for Visual Studio Code",
        "B. Data Loader",
        "C. Ant Migration Tool",
        "D. Change sets",
      ],
      answer: "C,D",
      title: "Question 50",
      explanation: "",
    },
    {
      content:
        "Sales representatives are reporting trouble syncing quotes with their related opportunities.\nWhat is a possible explanation for this problem? Choose two",
      options: [
        "A. The user does not have Edit permissions on the quote.",
        "B. The quote contains an archived list price.",
        "C. The quote is attached to a closed opportunity.",
        "D. The attached currency is no longer active.",
      ],
      answer: "D",
      title: "Question 51",
      explanation: "",
    },
    {
      content:
        "An administrator has been asked to create a replica of the production organization. The requirement states that existing fields, page layouts, record types, objects, and data contained in the fields and objects need to be available in the replica organization. How can the administrator meet the requirement?",
      options: [
        "A. Create a Full Sandbox",
        "B. Create a configuration-only Sandbox",
        "C. Create a developer sandbox",
        "D. Create a metadata sandbox",
      ],
      answer: "A",
      title: "Question 52",
      explanation: "",
    },
    {
      content:
        "A sales manager wanes to edit the Opportunities owned by the sales team. The manager does NOT have edit access to the Opportunity object.\nWhat is the recommended solution?",
      options: [
        "A. Redefine the role hierarchy grant access using hierarchies.",
        "B. Create a permission set for Opportunity edit and associate it to the year record.",
        "C. Change the Opportunity's organization-wide default setting to public read/write.",
        "D. Enable team setting on the Opportunity object to grant read/write access.",
      ],
      answer: "C",
      title: "Question 53",
      explanation: "",
    },
    {
      content:
        "What are two capabilities of Enterprise Territory Management?\nChoose 2 answers.",
      options: [
        "A. The ability to use filter-based opportunity criteria to expand assignment rules",
        "B. Prioritize territories to indicate highest priority or lowest priority",
        "C. Territory hierarchy replaces the role hierarchy for sharing",
        "D. The ability to use 20 territories assignment rules per model",
      ],
      answer: "A,B",
      title: "Question 54",
      explanation: "",
    },
    {
      content:
        "Universal Containers uses Enterprise Territory Management to manage its sales territories. The sales managers want to see who the account is manually shared outside of territory rules. How can the system administrator meet this requirement? * (1 Point)",
      options: [
        'A. Add "Manage Territories" permission to the sales manager\'s profile',
        'B. Add "Assign Territories" permission to the sales manager\'s profile',
        'C. Add the "Users in Assigned Territories" related list to the sales page layout',
        'D. Add the "Assigned Territories" related list to the sales page layout',
      ],
      answer: "C",
      title: "Question 55",
      explanation: "",
    },
    {
      content:
        "Multiple developers work in the AW Computing developer sandbox for testing and merging code. A developer is reporting that one of the Lightning web Components is no longer visible in the user interface.\nWhat can the administrator use to troubleshoot?",
      options: [
        "A. Salesferce CLI",
        "B. Apex Jobs page",
        "C. Setup Audit Trail",
        "D. Flex Queue",
      ],
      answer: "A",
      title: "Question 56",
      explanation: "",
    },
    {
      content:
        "A set of Cases records with a specific record type needs to be restricted so that only a Support manager and four Support users have access. What can you do as a system administrator to meet this requirement? * (1 Point)",
      options: [
        "A. Create a criteria-based sharing rule for the 5 users",
        "B. Remove the record type access for all users except the 5 mentioned",
        "C. Create a new profile and assign the 5 users to the new profile",
        'D. Givethe"ViewAllData"permissiontothe5mentionedusersusingpermissionsets',
      ],
      answer: "A",
      title: "Question 57",
      explanation: "",
    },
    {
      content:
        "which feature is supported in delegated administrator? choose 3",
      options: [
        "A. create and edit users",
        "B. set org wide sharing defaults",
        "C. unlock communities users",
        "D. unlock non-communities users",
        "E. Manage custom objects",
      ],
      answer: "A,D,E",
      title: "Question 58",
      explanation: "",
    },
    {
      content:
        "What are two considerations an administrator should consider when setting up quotes?\nChoose 2 answers",
      options: [
        "A. Quote PDF text aligns to the left side of the page instead of the right.",
        "B. Discount fields on quotes can be a negative number",
        "C. Price books must be active in an opportunity before you can create quote for the opportunity",
        "D. When a quote is deleted the related opportunity and products are deleted as well",
        "E. Quotes can be synced with multiple active quotes",
      ],
      answer: "A,C",
      title: "Question 59",
      explanation: "",
    },
    {
      content:
        "After an Administrator has refreshed a sandbox, what behavior should users expect to see in the sandbox?",
      options: [
        "A. All new data since the last refresh will be added to the existing information in the sandbox",
        "B. Users in production will now be able to receive emails sent out from the sandbox.",
        "C. Metadata changes since the last refresh will be added to the existing information m the sandbox",
        "D. Users in the sandbox that do not exist in production will no longer exist in the sandbox.",
      ],
      answer: "A",
      title: "Question 60",
      explanation: "",
    },
    {
      content:
        "Universal Containers' Support team is growing globally, and the manager has inquired about implementing Omni-Channel. The team supports multiple products that require complex expertise across multiple languages.\nWhich routing option should the administrator recommend to ensure the right cases get to the correct agents for resolution?",
      options: [
        "A. Case Assignment Rules",
        "B. Skills-Based Routing",
        "C. Translation Workbench",
        "D. Queue-Based Routing",
      ],
      answer: "B",
      title: "Question 61",
      explanation: "",
    },
    {
      content:
        "How can you make sure that a field will be visible on 2 profiles only? * (1 Point)",
      options: [
        "A. validation rules",
        "B. Field-Level Security",
        "C. create a page layout and hide the field",
        "D. workflow field update",
      ],
      answer: "B",
      title: "Question 62",
      explanation: "",
    },
    {
      content:
        "How would you configure a profile to find duplicate records? * (1 Point)",
      options: ["A. merge", "B. read,edit", "C. view all", "D. Delete"],
      answer: "C",
      title: "Question 63",
      explanation: "",
    },
    {
      content:
        "While reviewing the quarterly forecast, a manager notices the newest team member is missing in the forecast- After looking at a few the manager can see where the sales representative has closed six opportunities this month and has three additional opportunities m progress.\nWhere should the administrator start troubleshooting?",
      options: [
        "A. Create a permission set with View All Forecasting permission.",
        "B. Assign View All Forecasting permission to the sales profile.",
        "C. Chide Allow Forecasting under general Information for user.",
        "D. Verify the app the user is selecting and adjust tabs as needed.",
      ],
      answer: "B",
      title: "Question 64",
      explanation: "",
    },
    {
      content:
        'Cloud Kicks has a requirement to display sensitive data only to appropriate users. The amount m the Salary field on the User object should display data only when the user record is being viewed by the user or by users with the MR profile. For all other users viewing the user record, the Salary field should display the word "Confidential* as text in the field.\nWhat should the administrator to fulfill this requirement?',
      options: [
        "A. Process Builder",
        "B. Page Layout",
        "C. Validation Rule",
        "D. Formula field",
      ],
      answer: "A",
      title: "Question 65",
      explanation: "",
    },
    {
      content:
        "Which three capabilities of Live Agent in the Salesforce Console for Service? Choose 3 answers.",
      options: [
        "A. Chats can be transferred to other agents.",
        "B. The Details tab can be used to see information about the visitor.",
        "C. The Articles tool can be used to search for Knowledge Articles",
        "D. Multiple visitors can chat in one window",
        "E. Approval Processes can be used to escalate cases in the chat window.",
      ],
      answer: "A,B,C",
      title: "Question 66",
      explanation: "",
    },
    {
      content:
        "Recruiters at universal containers wants to associate positions with their related job applications using two custom objects position and job application. a job application must always have a related position. if a position is deleted, the corresponding job applications are deleted.\nwhat type of object relation ship will meet this requirement?",
      options: [
        "A. Hierarchical",
        "B. Master detail",
        "C. junction",
        "D. Lookup",
      ],
      answer: "B",
      title: "Question 67",
      explanation: "",
    },
    {
      content:
        "How can you, as a System Administrator, enforce standardization of tags in libraries?\nChoosetwoanswers.* (1 Point)",
      options: [
        "A. Guided tags",
        "B. Change Tagging Field to multi select picklist",
        "C. Enable restrictive tagging",
        "D. Enable workflow to send email alert for unnamed tags",
      ],
      answer: "A,C",
      title: "Question 68",
      explanation: "",
    },
    {
      content:
        "Which two processing steps are triggered when reassigning Account owners using the Mass Transfer too?\nChoose 2 answers",
      options: [
        "A. All manual sharing is removed from the Accounts",
        "B. All Account sharing rules are recalculated.",
        "C. Manual sharing is updated to reflect the new Owner",
        "D. Only Owner-based sharing rules are recalculated.",
      ],
      answer: "B,C",
      title: "Question 69",
      explanation: "",
    },
    {
      content:
        "An administrator at Universal Containers hat completed a new set of validation rule along with a Process Builder in a sandbox and wants to move these changes to production via a change set but they are currently unable to do so.\nWhat are two configurations an administrator needs before they are able to deploy changes? Choose 2 answers",
      options: [
        "A. The Deploy Change Sets permission must be granted",
        "B. The Sandbox must be configured to Allow Outbound Changes to Production",
        "C. The Production Org must be configured to Allow inbound Changes from the sandbox",
        "D. Create the Validation Rules in Production because they can't be deployed via Change Sets",
      ],
      answer: "B,C",
      title: "Question 70",
      explanation: "",
    },
    {
      content:
        "What should a system administrator consider before using territory management? Choose three answers. * (1 Point)",
      options: [
        "A. You need to contact Salesforce to have it enabled",
        "B. Forecasts are derived from Territory hierarchy not Role hierarchy",
        "C. It does not working parallel with sharing functions",
        "D. Once enabled it cannot be disabled",
      ],
      answer: "A,B,D",
      title: "Question 71",
      explanation: "",
    },
    {
      content:
        "Universal Containers uses a custom object to track customer complaints. The company wants to have a field on the custom object where they can include a reference to another complaint.\nWhat types of relationship can be used to accomplish this?",
      options: [
        "A. Junction",
        "B. Master-detail",
        "C. Hierarchical",
        "D. Lookup",
      ],
      answer: "D",
      title: "Question 72",
      explanation: "",
    },
    {
      content:
        "Universal containers uses Salesforce to track job positions and applicants. Applicants can apply for multiple positions and positions will have multiple applicants. The company wants to ensure that if an applicant is deleted, all associations between the applicant and the position(s) that he or she has applied for are deleted.\nHow can this be accomplished?",
      options: [
        "A. Create a custom object between applicants and positions with lookup fields on the junction to both the objects.",
        "B. Create a many -to- many relationships using junction object with both positions and applicants as masters.",
        "C. Create a master detail relationship between applicants and positions with applicants as the master.",
        "D. Create a lookup relationship between applicants and positions with applicants as the parent.",
      ],
      answer: "C",
      title: "Question 73",
      explanation: "",
    },
    {
      content:
        "Universal Containers' support team needs to track service level agreements for customers. Today, they manually look up contracts by name when a customer calls.\nHow should an administrator automate this process?",
      options: [
        "A. Create a private Chatter group for customers with high-priority service level agreements.",
        "B. Enable entitlements and add the tabs for entitlements and service contracts.",
        "C. Enable Case Feed and add a Contracts custom publisher to the Case Feed layout.",
        "D. Configure a workflow rule that sends an email alert of old cases to the support manager.",
      ],
      answer: "B",
      title: "Question 74",
      explanation: "",
    },
    {
      content:
        "How can an administrator improve the relevance of search results for support agents searching for knowledge articles to solve articles?\nChoose 3 answers",
      options: [
        "A. Define synonyms for common search terms.",
        "B. Create data categories and assign articles to each category.",
        "C. Enable feed tracking on all relevant article types.",
        "D. Pre-populate article search filters based on the values of case fields.",
        "E. Create a record type for each data category.",
      ],
      answer: "A,B,D",
      title: "Question 75",
      explanation: "",
    },
    {
      content:
        "A sales manager cannot view a contact owned by a salesperson. The salesperson is below the sales manager in the role hierarchy. Why can't the sales manager view the contact?",
      options: [
        "A. Contact sharing settings are Private.",
        "B. Contact sharing settings have Grant Access Using Hierarchies unchecked.",
        "C. The contact is not linked to an account.",
        "D. The contact has not been manually shared with the manager.",
      ],
      answer: "C",
      title: "Question 76",
      explanation: "",
    },
    {
      content:
        "When can a user become an owner of a record without being a record creator? Choose 2 answers.* (1 Point)",
      options: [
        "A. If he is already a record owner",
        "B. If the record is in a queue",
        "C. if someone shares the record to the record owner",
        "D. If person is above the owner of the record in role hierarchy",
      ],
      answer: "B,D",
      title: "Question 77",
      explanation: "",
    },
    {
      content:
        "The marketing department at Universal Containers regularly changes the page layout requirements for its customer marketing objects. The VP of Marketing has asked the administrator for permission to configure only these objects. What can the administrator do to meet this request?",
      options: [
        "A. Grant the VP of Marketing the ability log in as a user who is an administrator.",
        "B. Enable Marketing User permission on the user record for the VP of Marketing.",
        "C. Setup the VP of Marketing as a delegated administrator for the custom marketing objects.",
        "D. Create a custom profile with the Edit permissions on the custom marketing objects and assign to the VP of Marketing",
      ],
      answer: "C",
      title: "Question 78",
      explanation: "",
    },
    {
      content:
        "What is the correct order of steps to follow when working with inbound change sets?",
      options: [
        "A. Monitor, Deploy, Validate",
        "B. Deploy, validate, Monitor",
        "C. Deploy, Monitor, Validate",
        "D. Validate, Deploy, Monitor",
      ],
      answer: "D",
      title: "Question 79",
      explanation: "",
    },
    {
      content:
        "The sales manager at Universal Containers wants to see all opportunities that do not have any activities.\nWhich report type could be used to meet this requirement? Choose two answers. * (1 Point)",
      options: [
        "A. A joined report using an opportunity report in Block A; a task and event report filtered by tasks for Block B",
        "B. An opportunity report with across-object filter of opportunities without activities",
        "C. A custom report type with Opportunity as the primary object and Activity as the secondary object",
        "D. A standard opportunity filtered by the field Last Activity and a custom date range that is blank",
      ],
      answer: "B,D",
      title: "Question 80",
      explanation: "",
    },
    {
      content:
        "A change set that has already been submitted for deployment is missing a component.\nWhat can you do in order to correct the issue? * (1 Point)",
      options: [
        "A. Edit the change set, deactivate it and then add the missing component",
        "B. Clone the change set. edit the components and deploy it",
        "C. Deploy the change set and then submit another change set for deployment",
        "D. Create another change set containing all components and deploy it",
      ],
      answer: "B",
      title: "Question 81",
      explanation: "",
    },
    {
      content: "Which feature license is required to use Content? * (1 Point)",
      options: [
        "A. Salesforce CRM Content Manager",
        "B. Salesforce CRM Content Creator",
        "C. Salesforce CRM Content Contributor",
        "D. Salesforce CRM Content User",
      ],
      answer: "D",
      title: "Question 82",
      explanation: "",
    },
    {
      content:
        "Which three types of prices should an administrator set for an organization's products?\nChoose 3 answers.",
      options: [
        "A. Discount prices",
        "B. Sales prices",
        "C. Standard prices",
        "D. Product prices",
        "E. List prices",
      ],
      answer: "A,C,E",
      title: "Question 83",
      explanation: "",
    },
    {
      content:
        "A sales rep at AW Computing needs to give read/write access to an Account and related records to a teammate #m*e the sates rep is on vacation.\nHow could the administrator enable the sales rep to give record access to a colleague?",
      options: [
        "A. Include the nap on the Opportunity Team.",
        "B. Enable public groups for sharing.",
        "C. Add the Manual Sharing button the page layout.",
        "D. Create an ownership-based sharing rule.",
      ],
      answer: "A",
      title: "Question 84",
      explanation: "",
    },
    {
      content:
        "The administrator of Universal Containers is testing an approval process in a recently refreshed Developer Pro sandbox and is finding that none of the notification emails are being sent to the approvers.\nwhich two reasons could be the cause?\nChoose 2 answers",
      options: [
        "A. Workflow emails only work in Full sandboxes.",
        "B. HTML templates are unavailable in sandboxes.",
        "C. The deliverability access level setting Is incorrect.",
        "D. The email addresses for the users are incorrect.",
      ],
      answer: "C,D",
      title: "Question 85",
      explanation: "",
    },
    {
      content:
        "What would cause are quired field to not be populated on some records? Choose 2 answers. * (1 Point)",
      options: [
        "A. The field is hidden",
        "B. The field is not in the page layout",
        "C. The field is set to Read Only",
        "D. The field is protected by field level security",
      ],
      answer: "B,C",
      title: "Question 86",
      explanation: "",
    },
    {
      content:
        "An administrator is setting up Salesforce Knowledge and wants to implement an easy way for agents to create new articles from multiple objects.\nWhich two options could the administrator do to meet this requirement?\nChoose 2 answers",
      options: [
        "A. Deploy a screen-based flow from the home page.",
        "B. Create a custom quick action for each object.",
        "C. Use the Service Setup Assistant to Configure Knowledge.",
        "D. Add the New Article global action to required page layouts.",
      ],
      answer: "B,D",
      title: "Question 87",
      explanation: "",
    },
    {
      content: "What is a capability of Territory management? Choose 2 answers",
      options: [
        "A. The ability to use account criteria to expand a private sharing model",
        "B. The ability to use opportunity criteria to expand a private sharing model",
        "C. Support for complex and frequently changed sales organization structures",
        "D. Territory hierarchy replaces the role hierarchy for sharing",
      ],
      answer: "A,C",
      title: "Question 88",
      explanation: "",
    },
    {
      content:
        "How can an administrator ensure article managers use specified values for custom article field?",
      options: [
        "A. Create a record type containing preset values",
        "B. Create a required field on the article page layout.",
        "C. Create field dependecies on article types.",
        "D. Create different article types for different requirements.",
      ],
      answer: "A",
      title: "Question 89",
      explanation: "",
    },
    {
      content:
        "Which capability is available in both customizable Forecasting and collaborative forecasting? choose 2",
      options: [
        "A. Ability to choose to forecast either monthly or quarterly.(100%)",
        "B. Ability to rename forecast categories.",
        "C. Ability to track forecasts against sales quotas.(100%)",
        "D. Ability to customize the forecast object with custom fields.",
      ],
      answer: "A,C",
      title: "Question 90",
      explanation: "",
    },
    {
      content:
        "A user has pore with read-only permissions for the case object.\nHow can the user be granted edit permission for cases?",
      options: [
        "A. Create a sharing rule on the case object with read/write level of access.",
        "B. Create a public group with edit permissions for the case object.",
        "C. Create permission set with edit permissions for the case object.",
        "D. Add the user in a role hierarchy above the users with edit permissions on the case object.",
      ],
      answer: "C",
      title: "Question 91",
      explanation: "",
    },
    {
      content:
        "An administrator wants to allow users who are creating leads to have access to the find duplicates button.\nWhich lead object-level permission will the administrator need to provide to these users?",
      options: ["A. Merge", "B. Read and Edit", "C. Delete", "D. View All"],
      answer: "C",
      title: "Question 92",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks has an app that should only be used in the VIP showroom.\nWhich feature should an administrator use to permit access to the app?",
      options: [
        "A. Single Sign-On",
        "B. Delegated Administration",
        "C. Permission Set Group",
        "D. Session-Based Permission Set",
      ],
      answer: "D",
      title: "Question 93",
      explanation: "",
    },
    {
      content:
        "an administrator has been asked to set up two custom objects named issues and tickets. multiple tickets can be associated with each issue, and each issue may be associated with multiple tickets.\nhow should the administrator set up the relationship between issues and tickets?",
      options: [
        "A. Create a master detail relationship with issues as the master object",
        "B. Create a lookup relationship with tickets as the master object.",
        "C. Create a junction object with both tickets and issues as master objects.",
        "D. Create a lookup relationship on both the tickets and issues object.",
      ],
      answer: "C",
      title: "Question 94",
      explanation: "",
    },
    {
      content:
        "The VP of Sales wants to require that the Next Step Field is always updated when an opportunity stage is changed. How can this process be automated?",
      options: [
        "A. Create a workflow rule with the following formula: AND( ISCHANGED(StageName), NOT(ISCHANGED(NextStep))",
        "B. Create a workflow rule with the following formula: AND( ISCHANGED(ISPICKVAL(StageName)), NOT(ISCHANGED(NextStep))",
        "C. Create a validation rule with the following formula: AND( ISCHANGED(ISPICKVAL(StageName)), NOT(ISCHANGED(NextStep)))",
        "D. Create a validation rule with the following formula: AND( ISCHANGED(StageName), NOT(ISCHANGED(NextStep))",
      ],
      answer: "D",
      title: "Question 95",
      explanation: "",
    },
    {
      content:
        "Universal containers is using a web-to-lead from to collect contact information on people interested in its product and wants to ensure that these leads are contacted in a timely manner. The following actions are required:\n* send the lead an email with appropriate product information, depending on which product was selected on the web-to-lead form\n* Assign the appropriate salesperson to be the lead owner, depending on the product selected\n* create a task for the salesperson to follow up with the lead.\nAt a minimum, which combination of salesforce automation tools will be\nrequired to meet these requirement?",
      options: [
        "A. lead assignment rule and publisher action.",
        "B. Lead assignment rule, auto response rule and workflow rules",
        "C. Lead assignment rule and auto response rule.",
        "D. Lead assignment rule and workflow rule",
      ],
      answer: "B",
      title: "Question 96",
      explanation: "",
    },
    {
      content:
        "An administrator wants to allow users who are creating leads to have access to the find duplicates button.\nWhich lead object-level permission will the administrator need to provide to these users? * (1 Point)",
      options: ["A. Delete", "B. View All", "C. Read and Edit", "D. Merge"],
      answer: "B",
      title: "Question 97",
      explanation: "",
    },
    {
      content:
        "A user with permissions to create price books wants to quickly create a new product with the same information as the existing product by cloning the product.\nWhat is an important consideration when cloning a product?",
      options: [
        "A. Price book entries in price books that the user does NOT have access to will not be created.",
        "B. Price book entries in price books that the user does NOT have access to will be created.",
        "C. Price book entries will NOT be created in the standard price book.",
        "D. Price book entries need to be activated before users can use the new price book.",
      ],
      answer: "A",
      title: "Question 98",
      explanation: "",
    },
    {
      content:
        "Universal Containers is working on an implementation strategy for Salesforce CRM content and wants to ensure consistent tagging across and within its libraries, minimizing accidental duplicate tags.\nWhat action can be taken to ensure this consistent tagging in universal containers libraries? choose 2",
      options: [
        "A. Create a workflow email alert for unrelated tags within a library.",
        "B. Establish tag names with contributors upon the creation of library.(100%)",
        "C. Change the tag field to a pre-populated picklist.",
        "D. Enable restricted tagging upon the creation of library.(100%)",
      ],
      answer: "B,D",
      title: "Question 99",
      explanation: "",
    },
    {
      content:
        "A user is trying to add a product to an opportunity and wants to select a price book to reflect the correct price for the customer. They are sure they have access to several different price books but the option to choose which one is missing.\nWhat should an administrator do to resolve the issue?",
      options: [
        "A. Add the Choose Price Book button on the Detail section of the Opportunity layout.",
        "B. Add the Choose Price Book button on the Detail section of the Product layout.",
        "C. Add the Choose Price Book button on the Lightning page.",
        "D. Add the Choose Price Book button on the Product Related List of the Opportunity layout.",
      ],
      answer: "D",
      title: "Question 100",
      explanation: "",
    },
    {
      content:
        "An administrator at Cloud Kicks has been asked to clean up old approval delete.\nWhich two things could prevent the process from being deleted?\nChoose 2 answers",
      options: [
        "A. The proems w marked as inactive.",
        "B. There are pending approval requests in the Recycle Bin.",
        "C. The process is marked as active.",
        "D. There is a report in the Administrative 'Reports folder.",
      ],
      answer: "B,C",
      title: "Question 101",
      explanation: "",
    },
    {
      content:
        "The administrator of universal containers is testing an approval process in a refreshed developer pro sandbox and is finding that none of the notification emails are being sent to the approvers.\nWhat could be the cause of this? choose 2",
      options: [
        "A. The email addresses for the users are incorrect",
        "B. The Deliverability Access Level setting is incorrect.",
        "C. HTML templates are not available in sandboxes.",
        "D. Workflow emails only work in full sandboxes.",
      ],
      answer: "C,D",
      title: "Question 102",
      explanation: "",
    },
  ],
});
