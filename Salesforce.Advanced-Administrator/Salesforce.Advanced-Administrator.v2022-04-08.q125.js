window.testContent = window.testContent || [];
var testId = "Salesforce.Advanced-Administrator";
var testName = "Salesforce.Advanced-Administrator";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "Salesforce.Advanced-Administrator.v2022-04-08.q125",
  content: [
    {
      content:
        "Universal containers uses a private sharing model for accounts. A user who owns an account record needs to temporarly grant delete access to this records associated contacts to another user. how can this be accomplished?",
      options: [
        "A. Add the user to the owner's default account team",
        "B. Use the manual sharing button on the account.",
        "C. Transfer ownership of the account record to the user.",
        "D. Manually add the user to the account team.",
      ],
      answer: "C",
      title: "Question 1",
      explanation: "",
    },
    {
      content:
        "Universal Containers needs to create price books for sales representatives in multiple regions. How can the administrator meet this requirement?",
      options: [
        "A. Delete the standard price book and create a new price book for each region",
        "B. Delete the products that are not needed by a region from the standard price book",
        "C. Clone the standard price book and create a new price book for each region",
        "D. Add new price book entries to the standard price book for each region",
      ],
      answer: "C",
      title: "Question 2",
      explanation: "",
    },
    {
      content:
        "An administrator has been asked to create a report showing all newly created chatter groups by a custom designation divided by the four departments that maintain chatter groups- partners, corporate, practices and solutions.\nHow can an administrator meet this reporting requirement?",
      options: [
        "A. Create tags for chatter groups and create a summary report for newly created chatter groups.",
        "B. Use a bucket in the chatter groups report to categorize the four different departments. (100%)",
        "C. Use a multi-select picklist field to bucket chatter groups in the report according to department.",
        "D. Create a report type for chatter groups and create a summary report for newly- created chatter group.",
      ],
      answer: "B",
      title: "Question 3",
      explanation: "",
    },
    {
      content:
        "Which two deployment tools should be used to deploy metadata from a Developer Edition organization to another organization?\nChoose 2 answers",
      options: [
        "A. Change sets",
        "B. Salesforce Extensions for Visual Studio Code",
        "C. Ant Migration Tool",
        "D. Data Loader",
      ],
      answer: "A,C",
      title: "Question 4",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants to use Salesforce as part of their recruiting process. They need to track applicants and positions. Applicants should be able to apply for multiple positions. There should be a field on both the position and applicant records that sums the number of applications for each candidate.\nHow should an administrator define an application object to meet these requirements?",
      options: [
        "A. Create a lookup field on both the position and applicant to the application.",
        "B. Create master-detail fields on the application object to both the position and applicant.",
        "C. Create lookup fields on the application object to both the position and applicant.",
        "D. Create a master-detail field on both the position and applicant to the application.",
      ],
      answer: "D",
      title: "Question 5",
      explanation: "",
    },
    {
      content:
        "An administrator for Cloud Kicks has received several requests to update Salesforce reports with fields that users are unable to see on the report. The administrator notices that the missing fields are new custom fields and the reports are created with custom report types.\nWhat should the administrator do to make this an easier process?",
      options: [
        "A. Build reports for the users and save them in a shared folder.",
        "B. Enable Auto add new custom fields to custom report type layouts.",
        "C. Ensure the reports are being created with the correct hierarchy level.",
        "D. Mark the fields and Visible and Read Only on the user Profiles.",
      ],
      answer: "B",
      title: "Question 6",
      explanation: "",
    },
    {
      content:
        "Ursa Major Solar's administrator has configured multiple record-triggered flows to run before or after the record is saved on the Account object.\nWhat should the administrator consider when a record-triggered flow executes first?",
      options: [
        "A. The flow with the longest execution time will execute first.",
        "B. The order in which those flows are executed is not guaranteed.",
        "C. Assign the highest priority to the record-triggered flow which should execute first.",
        "D. The flow with the shortest execution time will execute first.",
      ],
      answer: "B",
      title: "Question 7",
      explanation: "",
    },
    {
      content:
        "Universal Containers has a requirement to report on opportunities where the probability has dropped beneath 50%. The administrator has created a custom checkbox as a way to identify these records.\nWhat else should the administrator do to meet this requirement? * (1 Point)",
      options: [
        "A. Create a workflow rule that updates the field when the probability drops below 50%",
        "B. Build a validation rule that displays an error",
        "C. Create an approval process that submits the opportunity for approval when the custom checkbox is true",
        "D. Enable field history tracking on the field and include the history in the report filter",
      ],
      answer: "A",
      title: "Question 8",
      explanation: "",
    },
    {
      content:
        "Support agents at Cloud Kicks associate Cases and Bugs so that can report on how many Cases are related to a Bug. A Bug is required to have a Case in order to be created.\nWhich type of object relationship will meet this requirement?",
      options: [
        "A. Hierarchical",
        "B. Lookup",
        "C. Master-detail",
        "D. Junction",
      ],
      answer: "C",
      title: "Question 9",
      explanation: "",
    },
    {
      content:
        "What should a system administrator consider before using territory management? Choose three answers. * (1 Point)",
      options: [
        "A. Once enabled it cannot be disabled",
        "B. You need to contact Salesforce to have it enabled",
        "C. Forecasts are derived from Territory hierarchy not Role hierarchy",
        "D. It does not working parallel with sharing functions",
      ],
      answer: "A,B,C",
      title: "Question 10",
      explanation: "",
    },
    {
      content:
        "What should an administrator consider when moving approval processes using a change set? * (1 Point)",
      options: [
        "A. The unique name of the approval process is NOT allowed to be changed once deployed in the target organization",
        "B. Change sets do NOT include the approval and rejection actions from the source organization",
        "C. Custom fields on standard objects will need to be manually added in the target organization.",
        "D. Change sets do NOT include the order of active approval processes from the source organization",
      ],
      answer: "D",
      title: "Question 11",
      explanation: "",
    },
    {
      content:
        'Which three actions can occur when an administrators clicks "save" after making a number of changes to Knowledge data categories in a category group and changing their position in the hierarchy? Choose three.',
      options: [
        "A. The contents of category drop-down menu change",
        "B. Users are temporarily locked out of the ability to access articles",
        "C. Users may temporarily experience performance issues when searching for articles",
        "D. The articles and questions visible to users change",
        "E. The history of article usage is reset to zero utilization",
      ],
      answer: "A,C,D",
      title: "Question 12",
      explanation: "",
    },
    {
      content:
        "A previous consultant helped Universal Containers automate many of its business processes. The administrator changed the email address on the consultant's user record and deactivated it. The consultant called to say they continue to get email messages from failed flows and processes.\nWhat steps should the administrator perform to stop the fault messages from going to the consultant?",
      options: [
        "A. Set Send Process or Flow Error Email' to Apex Exception Email Recipients' in Automation settings. Add the System Admin's email to the Apex Exception Email page in Setup.",
        "B. Export Flow Interviews filtered by LastModifiedBy.email using Data Loader. In the .csv file, change LastModifiedBy to the System Admin and upload changes with Data Loader.",
        "C. Request an Email Log from Email Log Files in Setup and filter the request by the consultant's email. Manually update any flows or processes listed on the log.",
        "D. Create a custom metadata type and associate the LastModifiedBy field. Write a flow that updates the field in any flows or processes equal to the consultant's name.",
      ],
      answer: "A",
      title: "Question 13",
      explanation: "",
    },
    {
      content:
        'If a system administrator has unchecked the" Enable Content Pack Creation" setting, what can users do with content packs? * (1 Point)',
      options: [
        "A. Users can modify existing content packs",
        "B. Users can only edit description and title of existing content packs",
        "C. Users cannot do anything to existing content pack",
      ],
      answer: "C",
      title: "Question 14",
      explanation: "",
    },
    {
      content:
        "A new administrator at Cloud Kicks has reported that they are unable to use outbound change sets as requested.\nWhat permission should be reviewed to determine if it is missing from the administrator user or profile?",
      options: [
        "A. Deploy Change Sets",
        "B. API Enabled",
        "C. Create and Upload Change Sets",
        "D. Modify Metadata Through Metadata API Functions",
      ],
      answer: "B",
      title: "Question 15",
      explanation: "",
    },
    {
      content:
        "An administrator has a request to write a report listing accounts that have sales from this year and that have a completed activity in the last 30 days.\nWhat reporting feature should the administrator employ to provide only the list of accounts, without listing the details of the opportunities?",
      options: [
        "A. Cross-Filter",
        "B. Filter Logic",
        "C. Summary Report",
        "D. Joined Report",
      ],
      answer: "A",
      title: "Question 16",
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
      title: "Question 17",
      explanation: "",
    },
    {
      content:
        "Whatarethesimilaritiesofcustomizableandcollaborativeforecasting? Choose two answers. * (1 Point)",
      options: [
        "A. Territory management",
        "B. Submit Forecast",
        "C. Quotas",
        "D. Monthly and Quarterly Forecasts",
      ],
      answer: "C,D",
      title: "Question 18",
      explanation: "",
    },
    {
      content:
        "The administrator at Universal Containers has been asked to create an account management dashboard displaying opportunities and activities for each of its top five clients.\nWhich dashboard feature should the Administrator use to meet this requirement?",
      options: [
        "A. Dashboard Filter",
        "B. Joined reports on a dashboard",
        "C. Dynamic dashboard",
        "D. Matrix reports on a dashboard",
      ],
      answer: "C",
      title: "Question 19",
      explanation: "",
    },
    {
      content:
        "Universal containers has a workflow rule that sends an email alert to the VP of sales when a large deal is won. The VP is reporting that these emails are not being delivered.\nWhat tool could be used to determine the problem? choose 2",
      options: [
        "A. Debug log.",
        "B. Workflow monitor.",
        "C. Email log.",
        "D. System audit trail.",
      ],
      answer: "B,C",
      title: "Question 20",
      explanation: "",
    },
    {
      content:
        "The distributors at Cloud Kicks are eligible for support based on a specific service contract-How should the administrator show this in Salesforce?",
      options: [
        "A. Build a new custom object.",
        "B. Use entitlement management.",
        "C. Add a service contract to the record.",
        "D. Turn on Service Cloud.",
      ],
      answer: "B",
      title: "Question 21",
      explanation: "",
    },
    {
      content:
        "Your organization's VP of Sales wants to automatically add the account name to an opportunity name once a record is saved. How can this be done? * (1 Point)",
      options: [
        "A. Use an Apex Trigger",
        "B. Create a Workflow Rule with an immediate workflow trigger to update the opportunity name field using concatenate",
        "C. Enforce an opportunity naming guideline for Sales Reps",
        "D. Use validation to update the field",
      ],
      answer: "B",
      title: "Question 22",
      explanation: "",
    },
    {
      content:
        "Universal containers is implementing a time recording system in salesforce.\nEmployees are required to record their time in a work log custom objectagainst either an opportunity or a case. The company wants to see total hours worked on an opportunity or a case. which type of relationship field should an administrator use to relate the work log to the opportunity or case?",
      options: [
        "A. Master-detail.",
        "B. Hierarchical.",
        "C. Junction",
        "D. Lookup.",
      ],
      answer: "C",
      title: "Question 23",
      explanation: "",
    },
    {
      content:
        "Recruiters at universal containers wants to associate positions with their related job applications using two custom objects position and job application. a job application must always have a related position. if a position is deleted, the corresponding job applications are deleted.\nwhat type of object relation ship will meet this requirement?",
      options: [
        "A. junction",
        "B. Lookup",
        "C. Master detail",
        "D. Hierarchical",
      ],
      answer: "C",
      title: "Question 24",
      explanation: "",
    },
    {
      content:
        "In Collaborative Forecasts, which permissions are required in order to upload quota data for all users? Choose 2. * (1 Point)",
      options: [
        "A. Customize Quotas",
        "B. View all Forecasts",
        "C. Customize Forecasts",
        "D. Manage Quotas",
        "E. View all data.",
        "F. Manage all data",
      ],
      answer: "B,D",
      title: "Question 25",
      explanation: "",
    },
    {
      content:
        "The administrator of universal containers is testing an approval process in a refreshed developer pro sandbox and is finding that none of the notification emails are being sent to the approvers.\nWhat could be the cause of this? choose 2",
      options: [
        "A. Workflow emails only work in full sandboxes.",
        "B. The Deliverability Access Level setting is incorrect.",
        "C. The email addresses for the users are incorrect",
        "D. HTML templates are not available in sandboxes.",
      ],
      answer: "A,D",
      title: "Question 26",
      explanation: "",
    },
    {
      content:
        "In a two-step approval process where the first step is a hiring manager and second is the appropriate director, which of the following relationship types would a system administrator use to establish a relationship between the two approvers? * (1 Point)",
      options: [
        "A. Sibling relationship",
        "B. Master detail relationship",
        "C. Hierarchical relationship",
        "D. Look up relationship",
      ],
      answer: "C",
      title: "Question 27",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants to create a Feedback__c custom object related to Account and ensure all feedback records are owned by the same user as the Account owner.\nHow should an administrator relate Feedback__c to Account?",
      options: [
        "A. Create a hierarchical field on Feedback__c.",
        "B. Create a master-detail field on Feedback__c.",
        "C. Create a lookup Account field and filter on Feedback__c.",
        "D. Create a junction object between Account and Feedback__c.",
      ],
      answer: "A",
      title: "Question 28",
      explanation: "",
    },
    {
      content:
        "Sales managers at Ursa Major Solar have asked for some additional automation around opportunity reminders. If the opportunity is in the Proposal stage a week before the close date, they want an email sent to the opportunity owner and manager. If the Budget Approved custom field is checked, the managers want to be notified immediately.\nHow should these requirements be met without using code?",
      options: [
        "A. Create a schedule-triggered flow for the Opportunity object. Configure the trigger to flow daily.",
        "B. Create a record-triggered flow with scheduled paths. Configure the trigger to flow before the record is saved.",
        "C. Create a schedule-triggered flow. Configure the trigger to flow weekly.",
        "D. Create a record-triggered flow with scheduled paths. Configure the trigger to flow after the record is saved.",
      ],
      answer: "A",
      title: "Question 29",
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
      title: "Question 30",
      explanation: "",
    },
    {
      content:
        "AW Computing uses a private sharing model for cases. A select group of five users need read/write access to all cases with a specific record type. Of these users, one is assigned the Support Manager profile and four are assigned the Support Representative profile. How can the administrator meet this requirement?",
      options: [
        "A. Create a new profile for the five users with View All Data access; remove access to the record type from all other profiles.",
        "B. Modify the Support Manager and Support Representative profiles to View All Data access on all cases with the record type.",
        "C. Create a public group for the users and use criteria-based sharing rules to share cases with the record type to that group.",
        "D. Create a public group for the users and a custom parent case record with the record type; share this case by record owner.",
      ],
      answer: "A",
      title: "Question 31",
      explanation: "",
    },
    {
      content:
        "What declarative toot fete administrators test Lightning email temples and automations in a sandbox environment and then move what's successful to a production environment?",
      options: [
        "A. Salesforce CLl",
        "B. Change Sets",
        "C. ANT Migration Tool",
        "D. lightning Flow",
      ],
      answer: "C",
      title: "Question 32",
      explanation: "",
    },
    {
      content:
        "What are two considerations when setting up Salesforce Content?\nChoose 2 answers.",
      options: [
        "A. The library type determines the size of files that can be contributed to content.",
        "B. A validation rule can ensure a description is required for all contributed content.",
        "C. The content type determines which fields appear on the content Detail page layout.",
        "D. An approval process can ensure that all product-related content is reviewed.",
      ],
      answer: "B,C",
      title: "Question 33",
      explanation: "",
    },
    {
      content:
        "Universal containers would like to ensure that when an opportunity stage is closed lost the reason is captured in a custom reason lost field before the record can be saved.\nWhat is the recommended approach to meet this requirement?",
      options: [
        "A. Create a page layout for closed lost opportunities and make reason lost a required field.",
        "B. Create a trigger that requires reason lost to be populated once the opportunity stage is closed lost.",
        "C. Create a workflow rule that fires on the closed lost stage and populates the reason lost field.",
        "D. Create a validation rule that requires reason lost to be populated once the opportunity stage is closed lost.",
      ],
      answer: "D",
      title: "Question 34",
      explanation: "",
    },
    {
      content:
        "A system administrator wants to change the field type from a lookup field to a master-detail field. What must the system administrator check in order for the change To be implemented successfully? * (1 Point)",
      options: [
        "A. Make sure that the lookup value is set to Required",
        "B. Make sure that all lookup fields in all records contain a value",
        "C. Make sure that the lookup field has a related record",
      ],
      answer: "B",
      title: "Question 35",
      explanation: "",
    },
    {
      content:
        "Which two values roll up the hierarchy to the manager for Collaborative Forecasting?\nChoose 2 answers.",
      options: [
        "A. Product quantity",
        "B. Quota amount",
        "C. Opportunity amount",
        "D. Expected revenue",
      ],
      answer: "C",
      title: "Question 36",
      explanation: "",
    },
    {
      content:
        "How many versions of any given flow, created with Visual Workflow, can be active at one time? * (1 Point)",
      options: ["A. 4", "B. 3", "C. 2", "D. 1"],
      answer: "D",
      title: "Question 37",
      explanation: "",
    },
    {
      content:
        "Universal Containers uses a custom object to track customer complaints. The company wants to have a field on the custom object where they can include a reference to another complaint.\nWhat types of relationship can be used to accomplish this?",
      options: [
        "A. Junction",
        "B. Master-detail",
        "C. Lookup",
        "D. Hierarchical",
      ],
      answer: "C",
      title: "Question 38",
      explanation: "",
    },
    {
      content:
        "Sales representatives are reporting trouble syncing quotes with their related opportunities.\nWhat is a possible explanation for this problem? Choose two",
      options: [
        "A. The quote is attached to a closed opportunity.",
        "B. The attached currency is no longer active.",
        "C. The user does not have Edit permissions on the quote.",
        "D. The quote contains an archived list price.",
      ],
      answer: "B",
      title: "Question 39",
      explanation: "",
    },
    {
      content:
        "Which three actions should occur when an administrator clicks save after making a number of modifications to Knowledge data categories in a category group and changing their positions in the hierarchy?\nChoose 3 answers * (1 Point)",
      options: [
        "A. The articles and questions visible to users change",
        "B. Users are temporarily locked out of their ability to access articles",
        "C. The history of article usage is reset to zero utilization",
        "D. Users may temporarily experience performance issues when searching for articles",
        "E. The contents of the category drop-down menu change",
      ],
      answer: "A,D,E",
      title: "Question 40",
      explanation: "",
    },
    {
      content:
        "U.C wants to archive cases that have been closed for two or more years. the cases need to be revoved from salesforce and be available to be loaded into loaded into the company's data warehouse.\nhow can the administrator automate this process? choose 2",
      options: [
        "A. use the apex dataloader",
        "B. enable the case archied feature.",
        "C. use an Appexchange product",
        "D. schedule the data export service.",
      ],
      answer: "A,C",
      title: "Question 41",
      explanation: "",
    },
    {
      content:
        "Which two deployment tools should be used to delete metadata from an organization? Choose 2 answers * (1 Point)",
      options: [
        "A. Change sets",
        "B. Developer Console",
        "C. ANT Migration Tool",
        "D. Unmanaged packages",
      ],
      answer: "B,C",
      title: "Question 42",
      explanation: "",
    },
    {
      content:
        "Which two processing steps are triggered when reassigning Account owners using the Mass Transfer too?\nChoose 2 answers",
      options: [
        "A. All manual sharing is removed from the Accounts",
        "B. Only Owner-based sharing rules are recalculated.",
        "C. Manual sharing is updated to reflect the new Owner",
        "D. All Account sharing rules are recalculated.",
      ],
      answer: "C,D",
      title: "Question 43",
      explanation: "",
    },
    {
      content:
        "A sales manager would like a report of accounts with no closed/won opportunities in the last year. How can this requirement be met?",
      options: [
        "A. Create a customer report type for Accounts without Opportunities.",
        "B. Create a summary report using the Accounts report type with a formula field for opportunity count.",
        "C. Create a tabular report using the Account report type and add a cross filter using Opportunities.",
        "D. Create a joined report using the Accounts report type and the Opportunities report types.",
      ],
      answer: "D",
      title: "Question 44",
      explanation: "",
    },
    {
      content:
        "Your organization-wide defaults for access rights to Price Books are set to Use, but only Sales Reps should have access to Price Books, What should be your first step? * (1 Point)",
      options: [
        "A. Leave the organization-wide default setting, but change the Sales Reps' access rights.",
        "B. Change the organization-wide default setting to No Access.",
        "C. Change the organization-wide default setting to View Only.",
        "D. Change the Sales Reps' access rights to Use.",
      ],
      answer: "B",
      title: "Question 45",
      explanation: "",
    },
    {
      content:
        "An administrator must select milestones from an existing list of available milestones. * (1 Point)",
      options: ["A. False", "B. True"],
      answer: "A",
      title: "Question 46",
      explanation: "",
    },
    {
      content:
        "What are two capabilities of Enterprise Territory Management?\nChoose 2 answers.",
      options: [
        "A. Prioritize territories to indicate highest priority or lowest priority",
        "B. The ability to use 20 territories assignment rules per model",
        "C. The ability to use filter-based opportunity criteria to expand assignment rules",
        "D. Territory hierarchy replaces the role hierarchy for sharing",
      ],
      answer: "A,C",
      title: "Question 47",
      explanation: "",
    },
    {
      content:
        "The administrator at Universal Containers needs to convert a lookup relationship to a master-detail relationship.\nwhat should the administrator verify to ensure that the conversion is successful?",
      options: [
        "A. No roll-up summaries exist on the lookup object.",
        "B. The lookup field is required on the child object.",
        "C. The lookup field in all records contains a value.",
        "D. The owner is the same for all related records",
      ],
      answer: "C",
      title: "Question 48",
      explanation: "",
    },
    {
      content:
        "What should an administrator consider when setting up salesforce entitlements? choose 2",
      options: [
        "A. Salesforce entitlements require service cloud user feature licensing.",
        "B. The service level agreements related list on a case gives support agents access to contract details.",
        "C. Salesforce entitlements require an entitlement process with milestones and milestone actions.",
        "D. The entitlement model dictates the level of detail for the entitlement process.",
      ],
      answer: "B,C",
      title: "Question 49",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants to assign a task due date on one of two fields. Estimated Shipping Date or Client Need By Date, which is further in the future.\nWhich two combined automation tools should the administrator use to create the task record and assign based on date criteria?\nChoose 2 answers",
      options: [
        "A. Create a formula capture the MAX date.",
        "B. Design an approval process to capture the furthest date.",
        "C. Make a Process Builder to create the task.",
        "D. Configure a workflow to create the task.",
      ],
      answer: "A,D",
      title: "Question 50",
      explanation: "",
    },
    {
      content:
        "Which deployment tool can be used to deploy metadata from a developer\nedition organization to another organization? choose 2",
      options: [
        "A. Force.com IDE",
        "B. Change sets",
        "C. Force.com Migration tool(100%)(salesforce extensions for visual studio code)",
        "D. Data loader.",
      ],
      answer: "A,C",
      title: "Question 51",
      explanation: "",
    },
    {
      content:
        "AW Computers is looking to enhance Salesforce to track conference rooms and IT equipment. An administrator has created a custom object called Room. The administrator also created a custom object called Equipment. This object has two fields: a currency field Price, and a lookup relationship to Room. While performing user acceptance testing, management requested to roll up all the Price values and display them on the corresponding Room record.\nHow should an administrator accomplish this?",
      options: [
        "A. Make record-triggered flows whenever Equipment records are created, modified, or deleted.",
        "B. Configure a roll-up summary field on Equipment.",
        "C. Write record-triggered flows whenever Room records are created, modified, or deleted.",
        "D. Create a roll-up summary field on Room.",
      ],
      answer: "A",
      title: "Question 52",
      explanation: "",
    },
    {
      content:
        "Universal Containers suspects a used is logging in as other users and editing Account records without their approval.\nWhere would an administrator go to verify who is logging in as other users?",
      options: [
        "A. Setup Audit Trail",
        "B. History Tracking on the Account",
        "C. Users Login History",
        "D. Debug Logs",
      ],
      answer: "A",
      title: "Question 53",
      explanation: "",
    },
    {
      content:
        "A user at Ursa Major Solar is experiencing a flow error while trying to process a record to the next status. The users with the same access can process records without any errors.\nWhat should the administrator do to troubleshoot the issue?",
      options: [
        "A. Change the flow to run as System Context Without Sharing - Access All Data.",
        "B. Grant the user more data access by moving them higher in the role hierarchy.",
        "C. Grant the user the Modify All permission to ensure they have full system access.",
        "D. Use the flow debug option and set the selection to Run as another user.",
      ],
      answer: "C",
      title: "Question 54",
      explanation: "",
    },
    {
      content:
        "How would you configure a profile to find duplicate records? * (1 Point)",
      options: ["A. view all", "B. Delete", "C. read,edit", "D. merge"],
      answer: "A",
      title: "Question 55",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants to use the Omni Channel routing feature in Service Cloud. They are using assignment rules and want to ensure that the routing chosen meets the requirements.\nWhat should an administrator take into consideration before implementation?",
      options: [
        "A. Assignment rules are triggered when an agent accepts the work and edits and saves the work.",
        "B. If there is a tie in the Omni-Channel routing logic, Omni-Channel routes the work to the agent who most recently received a work item.",
        "C. Assignment rules are triggered when Omni-Channel routing routes a work item to an agent and the agent accepts the work.",
        "D. The least active routing model looks for the agent who has the largest maximum work capacity.",
      ],
      answer: "A",
      title: "Question 56",
      explanation: "",
    },
    {
      content:
        "Universal Containers has a process to allow an employee to submit a vacation request and route it to the employee's manager for approval. An employee attempted to submit a request but it could not be submitted. How could the administrator troubleshoot this?",
      options: [
        "A. Use workflow to email the administrator if the process fails.",
        "B. Review the system log to determine the root cause.",
        "C. Ensure the user record has an assigned active manager.",
        "D. Ensure the approval step has an associated action",
      ],
      answer: "C",
      title: "Question 57",
      explanation: "",
    },
    {
      content:
        "AW Computing is conducting an audit and wants to understand how many objects have been shared as public externally.\nwhich tool should the administrator use to quickly obtain this details?",
      options: [
        "A. Object Manager",
        "B. Setup Audit Trail",
        "C. Security Health Check",
        "D. Session Security Settings",
      ],
      answer: "D",
      title: "Question 58",
      explanation: "",
    },
    {
      content:
        "Developers at universal containers have created new custom objects and fields in a sandbox. Records have also been created for these new objects.\nwhat should an administrator do to move these objects, fields and records to a production environment?",
      options: [
        "A. Use the Force.com IDE's built in deployment wizard to migrate all changes.",
        "B. Use change set to migrate the metadata and data loader to migrate the records",
        "C. Use the Data loader to migrate all the new metadata and the related records",
        "D. Use change sets to migrate both the metadata and the records.",
      ],
      answer: "B",
      title: "Question 59",
      explanation: "",
    },
    {
      content:
        "What is the maximum file size that can be uploaded in CRM Content? * (1 Point)",
      options: ["A. 2GB", "B. 10GB", "C. 100MB", "D. 500MB"],
      answer: "A",
      title: "Question 60",
      explanation: "",
    },
    {
      content:
        "When should an administrator consider when using Person Accounts'",
      options: [
        "A. In a B2C business model and the consumer is the intended recipient of sates and marketing attention.",
        "B. In a business model that needs a separate Contact and Account to be included on all Case records submitted.",
        "C. In a B2B business model and is selling to the primary contact at a business organization.",
        "D. In a complex business model and the users find it easiest to record Opportunity information on Contacts rather than Accounts.",
      ],
      answer: "A",
      title: "Question 61",
      explanation: "",
    },
    {
      content:
        "In Lightning, an opportunity pipeline report listing opportunities by sales representative shows multiple opportunities written for the same account. The sales Manager would like to know how many individual account each representative has written business for.\nHow should the report be identified to include the number of individual accounts represented by representative?",
      options: [
        "A. Create a custom summary formula and group by account.",
        "B. Add a bucket field for Account Name and group by the bucket field.",
        "C. Select Show Unique Count on the Account Name Column in the report builder.",
        "D. Group by Account and summarize a custom checkbox defaulted to checked.",
      ],
      answer: "A",
      title: "Question 62",
      explanation: "",
    },
    {
      content:
        "Universal Containers created a few new fields on the account object as well as a new section on the page layout in the config sandbox. After positive test results, the administrator created and uploaded a change set with the new fields from the sandbox to production. Unfortunately, the administrator forgot to add the page layout.\nWhich two options can the administrator take to deploy the page layout?\nChoose 2 answers.",
      options: [
        "A. Clone the change set in the sandbox, add the new page layout to it and upload to production.",
        "B. Deploy the existing change set. create and deploy a new change set containing the page layout.",
        "C. Add the page layout to the existing change set in the sandbox and upload the change set again.",
        "D. Edit the change set in production to add the new page layout before deploying the change set.",
      ],
      answer: "B,C",
      title: "Question 63",
      explanation: "",
    },
    {
      content:
        "Ursa Major Solar has a training sandbox with 160MB of test data that needs to be refreshed every other day.\nWhich two sandboxes should be used in this instance?\nChoose 2 answers",
      options: ["A. Developer", "B. Full", "C. Partial", "D. Developer Pro"],
      answer: "B,D",
      title: "Question 64",
      explanation: "",
    },
    {
      content:
        "When should an administrator consider when using Person Accounts'",
      options: [
        "A. In a B2B business model and is selling to the primary contact at a business organization.",
        "B. In a business model that needs a separate Contact and Account to be included on all Case records submitted.",
        "C. In a B2C business model and the consumer is the intended recipient of sates and marketing attention.",
        "D. In a complex business model and the users find it easiest to record Opportunity information on Contacts rather than Accounts.",
      ],
      answer: "C",
      title: "Question 65",
      explanation: "",
    },
    {
      content:
        "While reviewing the quarterly forecast, a manager notices the newest team member is missing in the forecast- After looking at a few the manager can see where the sales representative has closed six opportunities this month and has three additional opportunities m progress.\nWhere should the administrator start troubleshooting?",
      options: [
        "A. Verify the app the user is selecting and adjust tabs as needed.",
        "B. Chide Allow Forecasting under general Information for user.",
        "C. Assign View All Forecasting permission to the sales profile.",
        "D. Create a permission set with View All Forecasting permission.",
      ],
      answer: "C",
      title: "Question 66",
      explanation: "",
    },
    {
      content:
        "Universal Containers' Support team is growing globally, and the manager has inquired about implementing Omni-Channel. The team supports multiple products that require complex expertise across multiple languages.\nWhich routing option should the administrator recommend to ensure the right cases get to the correct agents for resolution?",
      options: [
        "A. Translation Workbench",
        "B. Skills-Based Routing",
        "C. Case Assignment Rules",
        "D. Queue-Based Routing",
      ],
      answer: "B",
      title: "Question 67",
      explanation: "",
    },
    {
      content:
        "The marketing department at universal containers regularly changes the\npage layout requirements for its custom marketing objects. The VP of\nMarketing has asked the administrator for permission to configure only\nthese objects.\nWhat can the administrator do to meet this request?",
      options: [
        "A. Set up the VP of Marketing as a delegated administrator for the custom marketing objects.",
        "B. Enable the marketing user permission on the user recrord for the VP of Marketing",
        "C. Create a custom profile with edit permission on the custom marketing objects and assign to the VP of marketing.",
        "D. Grant the VP of marketing the ability to log in as a user who is a system administrator.",
      ],
      answer: "C",
      title: "Question 68",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks (CK) does business directly with individual consumers (B2C) and large businesses (B2B). Some of CK's B2C customers are employed at its larger customer accounts and should be tracked under both.\nWhich two options will CK need to use to manage its customers' accounts?\nChoose 2 answers",
      options: [
        "A. Campaign Members",
        "B. Contacts to Multiple Accounts",
        "C. Person Accounts",
        "D. Leads",
      ],
      answer: "B,C",
      title: "Question 69",
      explanation: "",
    },
    {
      content:
        "what type of data can be migrated between environments using change sets? choose 2",
      options: [
        "A. Custom fields(100%)",
        "B. Email templates.(100%)",
        "C. Account team roles.",
        "D. standard field picklist values.",
      ],
      answer: "A,B",
      title: "Question 70",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants customers who buy the Freight Container product to be billed in monthly installments. How should an administrator meet this requirement?",
      options: [
        "A. Create a default quantity schedule on the product",
        "B. Create a workflow rule on the product.",
        "C. Create a default revenue schedule on the product.",
        "D. Create custom fields on the product.",
      ],
      answer: "C",
      title: "Question 71",
      explanation: "",
    },
    {
      content:
        "The marketing department at Universal Containers regularly changes the page layout requirements for its customer marketing objects. The VP of Marketing has asked the administrator for permission to configure only these objects. What can the administrator do to meet this request?",
      options: [
        "A. Grant the VP of Marketing the ability log in as a user who is an administrator.",
        "B. Enable Marketing User permission on the user record for the VP of Marketing.",
        "C. Create a custom profile with the Edit permissions on the custom marketing objects and assign to the VP of Marketing",
        "D. Setup the VP of Marketing as a delegated administrator for the custom marketing objects.",
      ],
      answer: "D",
      title: "Question 72",
      explanation: "",
    },
    {
      content:
        "When an administrator enables customizable prebuilt entitlements, which three options are automatically created?\nChoose 3 answers",
      options: [
        "A. One SLA process",
        "B. One Warning Action",
        "C. One escalation rulte",
        "D. Three milestone types",
        "E. Three field updates",
      ],
      answer: "A,C,D",
      title: "Question 73",
      explanation: "",
    },
    {
      content:
        "The administrator at Universal Containers wants to improve data quality by ensuring that all accounts have a billing State/Province based upon the Billing Postal Code for that account. Which two solutions can meet this requirement?\nChoose 2 answers.",
      options: [
        "A. Use a validation rule to do a HLOOKUP of the Billing Postal Code to a custom object that maps postal codes to states/provinces.",
        "B. Use a workflow rule that populates Billing State/Province based on a custom object that maps postal codes to states/provinces.",
        "C. Use a validation rule to do a VLOOKUP of the Billing Postal Code to a custom object that maps postal codes to states/provinces.",
        "D. Use a trigger that populates Billing State/Province based on a custom object that maps postal codes to states/provinces.",
      ],
      answer: "C,D",
      title: "Question 74",
      explanation: "",
    },
    {
      content:
        "A sales rep needs to help cross-sell an opportunity but is unable to make updates on the record or update the opportunity team.\nWhich two options would be required for a sales rep to add a rep to the opportunity team?\nChoose 2 answers",
      options: [
        "A. Transferred ownership of the Opportunity to the sales rep",
        "B. A permission with Edit access on the Account object",
        "C. A role above the Opportunity owner in the role hierarchy",
        "D. Transferred ownership of the Account to the sales rep",
      ],
      answer: "B,C",
      title: "Question 75",
      explanation: "",
    },
    {
      content:
        "Sales reps at Cloud Kicks have noticed there are similar account records found on Account list views m Duplicates component on the Lightning account record page displays no potential duplicates.\nWhat should the administrator customs to improve the output of the Potential Duplicates component?",
      options: [
        "A. Duplicate Jobs ",
        "B. Duplicate Record Sets",
        "C. Duplicate Jobs",
        "D. Duplicate Rules",
        "E. Duplicate Reports",
      ],
      answer: "D",
      title: "Question 76",
      explanation: "",
    },
    {
      content:
        "When an opportunity with a least one opportunity product close wins, Universal Containers requires that an Invoice record be created with Invoice_Line_item_c records for each Product on the Opportunity.\nHow should an administrator implement this request?",
      options: [
        "A. Use Einstein Next Best Actions.",
        "B. Use an Opportunity that calls a Flow",
        "C. Use an Opportunity Approval process.",
        "D. Use a custom button on the Opportunity.",
      ],
      answer: "A",
      title: "Question 77",
      explanation: "",
    },
    {
      content:
        "An administrator has created a change set to include a validation rule and three custom fields in their personal sandbox. When clicking the button to upload to production, no target organizations are available.\nWhich two options should the administrator check?\nChoose 2 answers",
      options: [
        "A. Deployment connection is incomplete.",
        "B. Deployment connection needs to be authorized.",
        "C. The change set has missing dependencies.",
        "D. The change set is in an open status.",
      ],
      answer: "A,B",
      title: "Question 78",
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
      title: "Question 79",
      explanation: "Quantity Schedule Only",
    },
    {
      content:
        "Universal Containers uses Territory Management to manage its sales territories. Territory managers and sales representatives are at the same role level in the role hierarchy. Account and Opportunity objects are set to private.\nWhich three permissions should be granted to territory managers.\nChoose 3 answers",
      options: [
        "A. Transfer and Delete opportunity assigned to the territory, regardless of who owns the opportunities.",
        "B. Transfer All opportunities associated with accounts in the territory, regardless of who owns the opportunities.",
        "C. Edit All opportunities associated with accounts in the territory, regardless of who owns the opportunities.",
        "D. View All opportunities associated with accounts in the territory, regardless of who owns the opportunities.",
        "E. View, Edit, Transfer, and Delete accounts assigned to the territory, regardless of who owns the accounts.",
      ],
      answer: "A,C,D",
      title: "Question 80",
      explanation: "",
    },
    {
      content:
        'The inside sales manager at Universal Containers wants to be able to report on how long leads have a Lead Status of "Open" before the status changes to another value. Additionally, the sales team has requested the status value be changed with fewer clicks. What should the administrator do to meet this requirement?',
      options: [
        "A. Turn on field history tracking for the lead status field and create a report based on that field.",
        "B. Use a quick action to change the status value and a workflow rule to update a date field.",
        "C. Use a formula field to calculate the difference between the current and created data when the status changes through inline editing.",
        "D. Use a workflow rule that sends an email when the Lead Status is changed and an approval process to update the status.",
      ],
      answer: "C",
      title: "Question 81",
      explanation: "",
    },
    {
      content:
        "What should an administrator consider when setting up and maintaining Salesforce Knowledge? Choose three answers. * (1 Point)",
      options: [
        "A. Data category visibility is assigned through roles and profiles",
        "B. Knowledge settings must be configured to allow users to create an article from a case",
        "C. Enabling certain Knowledge features on a user record requires licensing.",
        "D. Solution category browsing must be enabled in Solution settings.",
        "E. Article version numbers must be assigned by a Knowledge Manager for tracking",
      ],
      answer: "A,B,C",
      title: "Question 82",
      explanation: "",
    },
    {
      content:
        "You can cancel pending actions in the entitlement process queue. * (1 Point)",
      options: ["A. False", "B. True"],
      answer: "B",
      title: "Question 83",
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
      title: "Question 84",
      explanation: "",
    },
    {
      content:
        "How should an administrator ensure article managers use specified values for custom article fields?",
      options: [
        "A. Require a held on the page layout.",
        "B. Use field dependencies on record type",
        "C. Create a formula field m the article.",
        "D. Create different record types for different requirements.",
      ],
      answer: "C",
      title: "Question 85",
      explanation: "",
    },
    {
      content:
        "What would cause are quired field to not be populated on some records? Choose 2 answers. * (1 Point)",
      options: [
        "A. The field is not in the page layout",
        "B. The field is protected by field level security",
        "C. The field is set to Read Only",
        "D. The field is hidden",
      ],
      answer: "A,C",
      title: "Question 86",
      explanation: "",
    },
    {
      content:
        "Universal Container (UC) is considering using Communities. Each partner is associated with a product and will need a separate community?\nSome partners will need to access to more than one community.\nWhat are two consideration an administrator should be aware of?\nChoose 2 answers",
      options: [
        "A. Community license choice of member-based or login-based.",
        "B. Communities licenses are associated with a specific community.",
        "C. The org limit of 100 community does not include inactive or preview communities.",
        "D. The org limit of 100 communities includes active, inactive, and preview communities.",
      ],
      answer: "A,D",
      title: "Question 87",
      explanation: "",
    },
    {
      content:
        "What should an administrator do to keep secure fields protected in email templates'?",
      options: [
        "A. Set up an approval process for email alerts.",
        "B. Remove the fields from the email.",
        "C. Use classic encrypted fields.",
        "D. Implement GDPR.",
      ],
      answer: "C",
      title: "Question 88",
      explanation: "",
    },
    {
      content:
        'What are the different ways a Visual Workflow "flow" can be deployed? (Choose three answers.) * (1 Point)',
      options: [
        "A. Apex Trigger",
        "B. Visualforce page",
        "C. Custom link",
        "D. Field Updates",
        "E. Custom button",
      ],
      answer: "B,C,E",
      title: "Question 89",
      explanation: "",
    },
    {
      content:
        "Universal Containers created and tested a new approval process in a developer sandbox. While the approval routings were correct, the approvers were NOT receiving the notification emails.\nWhat could be the cause of this issue?",
      options: [
        "A. The email relay is disabled in the sandbox.",
        "B. Approvals can only be tested in a fail or partial data sandbox.",
        "C. Email deliverability CANNOT be changed in a sandbox.",
        "D. The email address for the users in the sandbox are invalid.",
      ],
      answer: "D",
      title: "Question 90",
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
      title: "Question 91",
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
      title: "Question 92",
      explanation: "",
    },
    {
      content:
        "Ursa Major Solar has a global customer base. Recent issues with customs have greatly delayed shipping to Canadian customers. While the Country field is already on the page layout, the sales team wants Canadian customers highlighted as a potential challenge for fulfillment until the shipping issue is resolved.\nHow should the administrator solve this issue?",
      options: [
        "A. Modify the page layouts to move the Country field into its own section.",
        "B. Create an in-app guidance prompt for Canadian records.",
        "C. Create a new record type and page layout for Canadian customers, ensuring their pages look different.",
        "D. Add a rich text component to the Lightning page. Use conditional visibility to only show the component if the account is Canadian.",
      ],
      answer: "B",
      title: "Question 93",
      explanation: "",
    },
    {
      content:
        "When configuring a change set, which two practices should an administrator adhere to in order to ensure a successful deployment to production?\nChoose 2 answers",
      options: [
        "A. When deploying a new record type, ensure the new record type is the only component in the change set.",
        "B. Run deployment validations on the change set in the sandbox prior to uploading to production.",
        "C. Add permissions and access settings to outbound change sets in addition to the dependent component list.",
        "D. Clone a change set to add forgotten dependent components to an uploaded change set.",
      ],
      answer: "B,D",
      title: "Question 94",
      explanation: "",
    },
    {
      content:
        'The sales team has requested that a new field be added to accounts called Current Customer. The default value will be No and will change "Yes" if any related opportunity is successfully closed as won.\nWhat can an admin do to meet this requirement?',
      options: [
        "A. Use a workflow rule on the Opportunity object that sets the current customer filed an opportunity is won.",
        "B. Configure current customer as a text field and use an approval process to recalculate its value",
        "C. Use an Apex trigger on the Account object that sets the Current customer field when an opportunity is won.",
        "D. Configure current customer as a roll-up summary field that will recalculate whenever an opportunity is won",
      ],
      answer: "C",
      title: "Question 95",
      explanation: "",
    },
    {
      content:
        "Leads come to universal containers from various sources and need to be assigned to the correct sales team. When a lead comes for the APAC region, it can be passed to an external partner if the sales director approves the transfer. The partner's channel manager must be notified when the partner has been assigned the lead.\nAt the minimum, which combination of automation tools will be needed to meet these requirements?",
      options: [
        "A. Assignment rules and approval processes",
        "B. Assignment rules, auto-response rules, and workflow rules",
        "C. Assignment rules, approval processes, and workflow rules",
        "D. Assignment rules and workflow rules.",
      ],
      answer: "C",
      title: "Question 96",
      explanation: "",
    },
    {
      content:
        "an administrator has been asked to set up two custom objects named issues and tickets. multiple tickets can be associated with each issue, and each issue may be associated with multiple tickets.\nhow should the administrator set up the relationship between issues and tickets?",
      options: [
        "A. Create a lookup relationship with tickets as the master object.",
        "B. Create a junction object with both tickets and issues as master objects.",
        "C. Create a master detail relationship with issues as the master object",
        "D. Create a lookup relationship on both the tickets and issues object.",
      ],
      answer: "B",
      title: "Question 97",
      explanation: "",
    },
    {
      content:
        "An administrator at Cloud Kicks has enabled Territory Management and is setting up a territory model. Some users in a territory need to access Contacts and Opportunities related to the Account.\nWhich two capabilities are available for users in a territory?\nChoose 2 answers",
      options: [
        "A. View Only",
        "B. View and Edit",
        "C. View. Edit, Transfer, Delete",
        "D. View and Transfer",
      ],
      answer: "C,D",
      title: "Question 98",
      explanation: "",
    },
    {
      content:
        "At Universal Containers, Organization-Wide Defaults (OWD) for Cases has been set to Public Read Only. A custom object calls Audits has a master-detail relationship to the Case object. Audit records should be accessible by the members of the Oversight Team only. A Public Group for the Oversight Team has been created.\nWhat two next steps should the administrator tale to meet this requirement?",
      options: [
        "A. Remove create, read, edit and delete permissions to the Audits object for all profiles.",
        "B. Set OWD to private for Cases and assign the public group a role Support Users in the hierarchy.",
        "C. Build a permission set with create, read, and edit Audits selected and assign it to the individual public group members.",
        "D. Create a sharing rule that gives the public group Read/Write access to Audits.",
      ],
      answer: "B,C",
      title: "Question 99",
      explanation: "",
    },
    {
      content:
        "The administrator at Cloud Kicks (CK) is troubleshooting why users are missing expected email alerts from an automated process. The investigation shows that CK is hitting its daily limit.\nWhat should the administrator review to resolve the issue?",
      options: [
        "A. Email Logs",
        "B. Outbound Messages",
        "C. Notification Delivery Settings",
        "D. HTML Email Status Report",
      ],
      answer: "A",
      title: "Question 100",
      explanation: "",
    },
    {
      content:
        "At Cloud Kicks, the Sales team uses a specific dashboard to see how they are doing daily. The team has asked the administrator for an easier way to see this dashboard.\nWhat should the administrator recommend?",
      options: [
        "A. Update the Sales team's app with a new dashboard.",
        "B. Add the dashboard to the Sales team's home page.",
        "C. Create a custom app with a dashboard.",
        "D. Email the dashboard to the Sales Team every morning.",
      ],
      answer: "B",
      title: "Question 101",
      explanation: "",
    },
    {
      content:
        "Which capability is available in both customizable Forecasting and collaborative forecasting? choose 2",
      options: [
        "A. Ability to choose to forecast either monthly or quarterly.(100%)",
        "B. Ability to track forecasts against sales quotas.(100%)",
        "C. Ability to rename forecast categories.",
        "D. Ability to customize the forecast object with custom fields.",
      ],
      answer: "A,B",
      title: "Question 102",
      explanation: "",
    },
    {
      content:
        "At Ursa Major Solar, several different planetary teams handle leads depending on which planet the lead is coming from. While most of the teams only need a few fields filled out to work the lead, the Jupiter team requires additional information to be filled out, such as which moon the lead is coming from. The administrator needs to automate which team is allocated the lead record based on the planet and ensure that every team has all of the information they need.\nWhich two features will satisfy these requirements?\nChoose 2 answers",
      options: [
        "A. Workflow Rules",
        "B. Assignment Rules",
        "C. Validation Rules",
        "D. Matching Rules",
      ],
      answer: "B,D",
      title: "Question 103",
      explanation: "",
    },
    {
      content:
        "Which two permissions need to be enabled to set up entitlement management, including milestones, entitlement processes, and entitlement templates?",
      options: [
        "A. Manage Milestones",
        "B. Manage Entitlements",
        "C. Customize Application",
        "D. Customize Entitlements",
      ],
      answer: "B,C",
      title: "Question 104",
      explanation: "",
    },
    {
      content:
        "what should an administrator do before case feeds can be enabled? choose 2",
      options: [
        "A. Enable case assignment rules.",
        "B. Enable chatter.",
        "C. Enable feed tracking on cases.",
        "D. Enable default email templates",
      ],
      answer: "B,C",
      title: "Question 105",
      explanation: "",
    },
    {
      content:
        "The administrator of Universal Containers is testing an approval process in a recently refreshed Developer Pro sandbox and is finding that none of the notification emails are being sent to the approvers.\nwhich two reasons could be the cause?\nChoose 2 answers",
      options: [
        "A. The deliverability access level setting Is incorrect.",
        "B. The email addresses for the users are incorrect.",
        "C. HTML templates are unavailable in sandboxes.",
        "D. Workflow emails only work in Full sandboxes.",
      ],
      answer: "A,B",
      title: "Question 106",
      explanation: "",
    },
    {
      content:
        "List the different prices that are available for a product. Choose three answers. * (1 Point)",
      options: [
        "A. List Price",
        "B. Sales Price",
        "C. Discounted List Price",
        "D. Product Price",
        "E. Standard Price",
      ],
      answer: "A,B,E",
      title: "Question 107",
      explanation: "",
    },
    {
      content:
        "Which of the following is NOT true about article types in Salesforce Knowledge? * (1 Point)",
      options: [
        "A. An organization must have 2 article types to enable Knowledge.",
        "B. Article Types are typically short HTML documents.",
        "C. Article Types may include attachments.",
        "D. Article Types should enable 'actionable' content.",
      ],
      answer: "A",
      title: "Question 108",
      explanation: "",
    },
    {
      content:
        "The support manager at Universal Containers wants a dashboard that shows the number of cases that remain open as of 5:00 p.m. each day.\nWhich type of report should be used in the dashboard component?",
      options: [
        "A. Custom summary report where unit equals business hours.",
        "B. Report based on custom report type using cases and business hours.",
        "C. Standard case lifecycle report where unit equals business hours.",
        "D. Report based on a reporting snapshot that runs dally at 5:00 p.m.",
      ],
      answer: "D",
      title: "Question 109",
      explanation: "",
    },
    {
      content:
        "A change set has already been uploaded but changes need to be made to its contents.\nwhat is a best practice for adding these changes?",
      options: [
        "A. clone the change set, add needed change set and upload again.",
        "B. Manually make changes in change set destination org.",
        "C. Delete existing change set, add changes to new change set, upload change set",
        "D. Edit existing change set, add needed changes, upload again.",
      ],
      answer: "A",
      title: "Question 110",
      explanation: "",
    },
    {
      content:
        "Which three password options are available for the administrator to set on content deliveries? Choose 3 answers",
      options: [
        "A. Password complexity rules",
        "B. Password protection Is optional and defaults to OFF",
        "C. Password protection Is optional and defaults to ON",
        "D. Administrator-provided default password",
        "E. Password protection is required",
      ],
      answer: "A,B,E",
      title: "Question 111",
      explanation: "",
    },
    {
      content:
        "Ursa Major Solar customer records have a lot of fields and Lightning components to give users a variety of information and available functions. Recently,usrrs have noted that their pages take a long time to load and it's starting to negatively impact their experience.\nWhat should the administrator do to help diagnose where improvements can be made?",
      options: [
        "A. Check the debug logs found in the Environment section of Setup.",
        "B. Click Analyze from the Lightning App Builder toolbar.",
        "C. Use the Apex debugger while loading a customer record.",
        "D. Review the debug logs from the Developer Console.",
      ],
      answer: "B",
      title: "Question 112",
      explanation: "",
    },
    {
      content:
        "Which two should an administrator consider when setting up Salesforce CRM Content ? Choose 2 answers.",
      options: [
        "A. The content type determines which fields appear on the Content Detail page layout.",
        "B. An approval process can ensure that all product-related content is reviewed.",
        "C. A validation rule can ensure a description is required for all contributed content.",
        "D. The library type determines the size of files that can be contributed to content.",
      ],
      answer: "A,C",
      title: "Question 113",
      explanation: "",
    },
    {
      content:
        "Sales management wants to enforce a process in which the name of an account is always included in the name of an opportunity. How can automation be used to help meet this requirement?",
      options: [
        "A. Write a validation rule that updates the opportunity name with the account name using a cross-object formula.",
        "B. Write a criteria-based workflow rule that updates the opportunity name concatenated with the account name.",
        "C. Use an Apex Trigger on the Account object that adds the account name to the opportunity name.",
        "D. Use approval process that routes newly created opportunities to management for data quality review.",
      ],
      answer: "B",
      title: "Question 114",
      explanation: "",
    },
    {
      content:
        "What type of prices can the system administrator set for an organization's products?",
      options: [
        "A. Sales prices.(100%)",
        "B. Discount prices.",
        "C. Standard prices.(100%)",
        "D. List prices.(100%)",
        "E. Product prices.",
      ],
      answer: "A,C,D",
      title: "Question 115",
      explanation: "",
    },
    {
      content:
        "AW Computing has several service plans it offers with its laptops. Management wants the sales team to focus on bringing in new business and to have the creation of the renewal opportunity for the service plans happen automatically.\nWhat approach should the administrator take to automate the renewal process7",
      options: [
        "A. Configure a flow that will create the renewal based on the closed-won date and opportunity line items.",
        "B. Create a dynamic Lightning page with rich text to remind the rep to create a renewal opportunity when the opportunity is closed won.",
        "C. Create a validation rule to prevent the rep from closing the opportunity until a renewal is associated.",
        "D. Configure a time-based workflow to send an email reminder to the sales rep when the service plan expires.",
      ],
      answer: "A",
      title: "Question 116",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants to track invoices with a custom object. They want to be able to view any invoices as a related list on the Opportunity record page.\nWhich feature would ensure can view all invoices associated with an Opportunity if the user can view the parent Opportunity record?",
      options: [
        "A. Master-Detail Relationships",
        "B. Sharing Rules",
        "C. Lookup Relationships",
        "D. Field Level Security",
      ],
      answer: "A",
      title: "Question 117",
      explanation: "",
    },
    {
      content:
        "The sales manager at Universal Containers would like a dashboard to view each of the sales representative's opportunities, accounts, and related cases.\nWhat is a recommended solution?",
      options: [
        "A. Create a dynamic dashboard and add fitters for opportunities, accounts, and cases.",
        "B. Create an individual dashboard for each sales representative with opportunity, account, and case components.",
        "C. Create a dashboard and add filters for users, opportunities, accounts, and cases.",
        "D. Create a dynamic dashboard and ensure the sales manager has the view My Team's Dashboard permission.",
      ],
      answer: "D",
      title: "Question 118",
      explanation: "",
    },
    {
      content:
        "An administrator at Cloud Kicks has been asked to reduce the file size of full data exports in order to have quicker exports.\nWhich three recommendations should the administrator make?\nChoose 3 answers",
      options: [
        "A. Reduce the amount of objects per export.",
        "B. Request a backup file every 5 days.",
        "C. Keep deleted record counts to a minimum.",
        "D. Unselect the recycle bin in the object export option.",
        "E. Deselect 'Include images, documents, and attachments' in the export.",
      ],
      answer: "A,C,E",
      title: "Question 119",
      explanation: "",
    },
    {
      content:
        "AW Computing has a new requirement from its security team where audit information relating to an account must be recorded in a new custom object called Audit. Audit records need to be preserved for 10 years and only accessible by the audit team.\nWhat relationship should be used to relate the Audit object to the Account object?",
      options: ["A. Many-To-Many", "B. Master-Detail", "C. Self", "D. Lookup"],
      answer: "D",
      title: "Question 120",
      explanation: "",
    },
    {
      content:
        "Universal Containers would like applicants to apply for multiple positions, tracking how many applicants have applied and how many positions each individual applicant has applied for. To do this, the administrator will create a Job Application junction object between Applicant and Position objects. Why will this action meet the requirement ?",
      options: [
        "A. The junction object allows a many-to-many relationship and also roll-up summary fields on the parent objects.",
        "B. A lookup relationship on the Applicant object with Position as the master provides rollup summary fields without code.",
        "C. The junction object allows the administrator to add a workflow rule to update fields on the Position and Applicant objects.",
        "D. The Job Application object as a master to Positions and Applicant objects will allow rollup summary fields on the Positions and Applicant objects.",
      ],
      answer: "A",
      title: "Question 121",
      explanation: "",
    },
    {
      content:
        "How can content types be used in CRM Content? (Choose two answers.) * (1 Point)",
      options: [
        "A. With validation rules, to capture complete data",
        "B. With library rules, to limit the number of libraries created",
        "C. With content fields, to control the content detail page layout",
        "D. With upload rules, to limit the size of content files.",
      ],
      answer: "A,C",
      title: "Question 122",
      explanation: "",
    },
    {
      content:
        "Which three capabilities of Live Agent in the Salesforce Console for Service? Choose 3 answers.",
      options: [
        "A. The Articles tool can be used to search for Knowledge Articles",
        "B. Multiple visitors can chat in one window",
        "C. The Details tab can be used to see information about the visitor.",
        "D. Chats can be transferred to other agents.",
        "E. Approval Processes can be used to escalate cases in the chat window.",
      ],
      answer: "A,C,D",
      title: "Question 123",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks wants to implement multi-factor authentication (MFA) to help better secure its Salesforce org.\nWhich two options should the administrator consider to use MFA?\nChoose 2 answers",
      options: [
        "A. A Security Token",
        "B. An Encryption Key",
        "C. An Authentication App",
        "D. A Username and Password",
      ],
      answer: "C,D",
      title: "Question 124",
      explanation: "",
    },
    {
      content:
        "A member of Universal Container's support team is assisting a sales rep in managing a top customer. The sales rep has manually shared an opportunity with the support member in hopes that the support member can update some of the technical sales fields on the record. But the support member is unable to edit the opportunity.\nWhat is the recommended solution to provide edit access to the opportunity?",
      options: [
        "A. Change the Organization Wide Default internal access for opportunity to public read/write.",
        "B. Add the support team member to the opportunity team. Assign read/write access to the member.",
        "C. Create a permission set for opportunity edit and add it to the support member's user record.",
        "D. Change the support team member's role to a above the sales rep in the org's role hierarchy.",
      ],
      answer: "A",
      title: "Question 125",
      explanation: "",
    },
  ],
});
