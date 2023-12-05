window.testContent = window.testContent || [];
var testId = "Salesforce.Advanced-Administrator";
var testName = "Salesforce.Advanced-Administrator";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "Salesforce.Advanced-Administrator.v2023-06-10.q141",
  content: [
    {
      content:
        "During Deployment from Sandbox to production using Changeset , Few components missed. How you are going to add those component to production ?",
      options: [
        "A. Edit Changset and re-deploy",
        "B. Create New and Redeploy",
        "C. Clone existing and make changes and Re-deploy",
      ],
      answer: "C",
      title: "Question 1",
      explanation: "",
    },
    {
      content:
        "The administrator at Universal Containers needs to convert a lookup relationship to a master-detail relationship. What should the administrator verify to ensure that conversion is successful?",
      options: [
        "A. The owner is the same for all related records",
        "B. No roll-up summaries exist on the lookup object",
        "C. The lookup field in all records contains a value",
        "D. The lookup field is required on the child object",
      ],
      answer: "C",
      title: "Question 2",
      explanation: "",
    },
    {
      content:
        "An administrator notices that there are two account records in the system with the same name. A contact record with the same name is associated with each account.\nWhich set of steps should be taken to merge these accounts using the Salesforce merge feature?",
      options: [
        "A. Merge the duplicate accounts and then merge the duplicate contacts",
        "B. Merge the duplicate contacts and then merge the duplicate accounts",
        "C. Merge the duplicate accounts and the duplicate contacts will be merged automatically",
        "D. Merge the duplicate accounts and check the box that optionally merges the duplicate contacts",
      ],
      answer: "A",
      title: "Question 3",
      explanation: "",
    },
    {
      content:
        "Which two deployment tools can be used to deploy metadata from a Developer Edition organization to another organization? (Choose two.)",
      options: [
        "A. Change sets",
        "B. Data Loader",
        "C. Salesforce Extensions for Visual Studio Code",
        "D. Ant Migration Tool",
      ],
      answer: "A,C",
      title: "Question 4",
      explanation: "",
    },
    {
      content:
        "Universal Containers is implementing a new lead status process and wants to be able to do the following:\n- Track leads through five different status values\n- Run reports showing the duration a lead spends in each status\n- Run full Lifetime reports of a lead from creation to conversion\n- Prevent leads from skipping a lead status\nHow can these requirements be met?",
      options: [
        "A. Use field history tracking on the lead status field to track the duration of each status. Use validation rules to prevent status skipping",
        "B. Use custom date fields and workflow rules for each status, and use custom formula fields for calculating duration of a status. Use validation rules to prevent status skipping",
        "C. Use an Apex Trigger to populate custom date fields for each status, and use custom formula fields for calculating duration of each status",
        "D. Use lead history reporting to track changes in the lead status field, and use custom reporting fields to calculate status duration. Use validation rules to prevent status skipping",
      ],
      answer: "D",
      title: "Question 5",
      explanation: "",
    },
    {
      content:
        "Which text formula is correct to assign a value based on a custom lead field?",
      options: [
        'A. CASE( Lead_Score__c 10, "Cold", 20, "Warm", 30, Hot, "Null")',
        'B. CASE( Lead_Score__c , 10, "Cold", 20, "Warm", 30, Hot)',
        "C. CASE( Lead_Score__c , 10, Cold, 20, Warm, 30, Hot)",
        'D. CASE( Lead_Score__c , "10", Cold, "20", Warm, " 30", Hot, Null)',
      ],
      answer: "A",
      title: "Question 6",
      explanation: "",
    },
    {
      content: "See the 4-week moving average of the number of new cases (1)",
      options: [
        "A. dashboard filter",
        "B. reporting snapshot",
        "C. PREVGROUPVAL function",
        "D. cross filter",
        "E. bucket field",
        "F. custom report type",
      ],
      answer: "C",
      title: "Question 7",
      explanation: "",
    },
    {
      content:
        "Which feature should the administrator consider that allows for this?",
      options: [
        "A. A permission set containing the modify all data permission for the Position object.",
        "B. Delegated administration for the Position object",
        "C. Screen Flow using custom metadata types",
        "D. Field accessibility set to editable for the picklists for the Position object.",
      ],
      answer: "B",
      title: "Question 8",
      explanation: "",
    },
    {
      content:
        "Sales management wants a small subset of users with different profiles and roles to be able to view all data for compliance purposes. How can an administrator meet this requirement?",
      options: [
        "A. Create a permission set with the View All Data permission for the subset of users",
        "B. Assign delegated administration to the subset of users to View All Data",
        "C. Enable the View All Data permission for the roles of the subset of users",
        "D. Create a new profile and role for the subset of users with the View All Data permission",
      ],
      answer: "A",
      title: "Question 9",
      explanation: "",
    },
    {
      content:
        "An administrator is using the Dev Console Log Inspector to troubleshoot a Process Builder.\nWhat event type should the administrator look for in the event column?",
      options: [
        "A. Event types beginning with PROCESS",
        "B. Event types beginning with FLOW",
        "C. Event types beginning with WORKFLOW",
        "D. Event types beginning with AUTOMATED.",
      ],
      answer: "B",
      title: "Question 10",
      explanation: "",
    },
    {
      content:
        "What are permissions needed for the Accounts and Opportunity Object when merging Accounts.",
      options: [
        "A. Edit and Delete for Account and Edit and Delete on Opportunity",
        "B. Edit and Delete for Account and Read on Opportunity",
        "C. Edit permission for Account and Delete Permission for Opportunity",
      ],
      answer: "B",
      title: "Question 11",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks wants to understand the implications ot archived Activities.\nWhich two considerations should an administrator communicate regarding archived Activities?\nChoose 2 answers.",
      options: [
        "A. Events that ended more than 365 days ago are archived.",
        "B. Events created more than 365 days ago are archived.",
        "C. Closed tasks created more than 365 days ago with no due date are archived.",
        "D. Archived activities are deleted after 365 days.",
      ],
      answer: "B,D",
      title: "Question 12",
      explanation: "",
    },
    {
      content:
        "Sales Rep Phil Smith has an opportunity for 55,000 in the Commit stage. Which aggregates on Phil'sforecast willinclude this amount? Choose three answers.* (1 Point)",
      options: ["A. Best Case", "B. Pipeline", "C. Closed", "D. Commit"],
      answer: "A,B,D",
      title: "Question 13",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks (CK) has introduced its new Alpha Shoe line. Customers create cases from CK's website. Managers receive a report of all cases created last week. Managers would like a way to easily see in the report if the customer refers to the new shoe line in the case subject.\nHow should the system administrator modify thr report meet this request?",
      options: [
        "A. Build a row-level formula.",
        "B. Include a contains filter on Subject.",
        "C. Change the format to a joined repi",
        "D. Add a cross-filter and a with' sub-filter.",
      ],
      answer: "B",
      title: "Question 14",
      explanation: "",
    },
    {
      content:
        "Customer wants to make sure that he is given a summary report on 4 regions weekly. How to achieve this ?",
      options: [
        "A. Dynamic dashboard with filters given to them weekly",
        "B. Analytical snapshot",
        "C. Created dashboard with filters given to them weekly",
        "D. Create individual dashboards for each then sched them weekly",
      ],
      answer: "C",
      title: "Question 15",
      explanation: "",
    },
    {
      content:
        "AW Computing organizes Its sales regions as East, Central, and West. Each region has sales reps, a sales director, and sales operations members. The organization-wide default for all objects is set to Private. Members of the operations team for the East region need access to all the accounts and opportunities in the region.\nHow should the administrator configure this requirement?",
      options: [
        "A. Utilize territory management to add the operations team to the East territory.",
        "B. Instruct the operations team members to add themselves to the account teams.",
        "C. Share an Opportunity sharing the with a public group containing the East operations profile.",
        "D. Assign to a role in the role hierarchy positioned above the East sales director.",
      ],
      answer: "A",
      title: "Question 16",
      explanation: "",
    },
    {
      content:
        "What are abilities of both Customizable and Collaborative forecasting. Choose 2",
      options: [
        "A. Ability to do monthly and quarterly forecast",
        "B. Ability to have Product family in Forecast",
        "C. Ability to edit Forecast of Users",
        "D. Ability to setup forecast category",
      ],
      answer: "A,B",
      title: "Question 17",
      explanation: "",
    },
    {
      content:
        "Agents can file vacation leave request that must be approved by the manager. An agent is unable to submit the request. What could be the possible cause?",
      options: [
        "A. There is no Manager for User",
        "B. There is System Error",
        "C. Approval Process is not enabled for them",
      ],
      answer: "A",
      title: "Question 18",
      explanation: "",
    },
    {
      content:
        "An administrator is asked to create a report to calculate the year-over-year changed in the dollar amount of a company's opportunities.\nWhat reporting tool should be used to complete this request?",
      options: [
        "A. A custom summary formula with the PREVGROUPVAL function.",
        "B. A joined report with two report blocks for each year",
        "C. A custom summary formula with PARENTGROUPVAL function",
        "D. A row-level formula to compare amounts grouped by year.",
      ],
      answer: "A",
      title: "Question 19",
      explanation: "",
    },
    {
      content:
        "An administrator has initiated the process of deploying changes from a sandbox to the production environment using the Visual Studio Code.\nWhich three pieces of information must be supplied to Visual Studio Code during this process? Choose 3 answers. * (1 Point)",
      options: [
        "A. Authorize the environment in to which the changes will be deployed",
        "B. Authorize change set connection information",
        "C. Deploy the metadata components using a SFDX command",
        "D. Using SFDX commands, create a change set and add the metadata components",
        "E. Set the environment as the default environment",
      ],
      answer: "A,C,E",
      title: "Question 20",
      explanation: "",
    },
    {
      content:
        "Which two values roll up the Hierarchyto the manager for both Customizable and Collaborative Forecasts?\nChoose 2 answers",
      options: [
        "A. Expected revenue",
        "B. Product quantity",
        "C. Quota amount",
        "D. Opportunity amount",
      ],
      answer: "C,D",
      title: "Question 21",
      explanation: "",
    },
    {
      content:
        "The administrator at Ursa Major Solar has set up IT policies for all user passwords to be a minimum length of\n3 characters and have an expiration period of 90 days. The security team recently decided that administrators of any system should have a 15-character minimum password with a 30-day expiration period.\nWhere should the administrator make this change?",
      options: [
        "A. Password Policies on the System Administrator profile .",
        "B. Organi2ation-wide password policies",
        "C. Session Settings on the User record",
        "D. Password complexity requirements on the permission set",
      ],
      answer: "A",
      title: "Question 22",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants to allow its customers to submit support requests across multiple channels.\nIn which two ways can this be accomplished with Salesforce? (Choose two.)",
      options: [
        "A. Expose the case feeds option on the company's website",
        "B. Offer a Chat button on the company website",
        "C. Enable Chatter Questions in the company's Customer Community",
        "D. Enable the Service Cloud Console app on the company website",
      ],
      answer: "B,C",
      title: "Question 23",
      explanation: "Explanation",
    },
    {
      content:
        "Which value rolls up for both customizable and collaborative forecasting? * (1 Point)",
      options: [
        "A. Amount",
        "B. Quota",
        "C. Opportunity amount",
        "D. Expected revenue",
      ],
      answer: "C",
      title: "Question 24",
      explanation: "",
    },
    {
      content:
        "After a recent release, users report that the look and feel of the app they use is different. Fields are appearing in a different place on the page, related lists are missing, and tabs are rearranged.\nHow should an administrator troubleshoot this?",
      options: [
        "A. Setup Audit Trail",
        "B. Debug Log",
        "C. Page Layouts",
        "D. App Manager",
      ],
      answer: "A",
      title: "Question 25",
      explanation: "",
    },
    {
      content:
        "SFB Industries is currently granting access to a number of users around the business to various reports and folders in Salesforce. They are currently granting access based on the specific users. Which feature in Salesforce can be used to make this more efficient?",
      options: [
        "A. Create a sharing rule and add the users to it",
        "B. Create a public group and add the users to it",
        "C. Place all users in the same Role",
        "D. Create a new profile for the users",
      ],
      answer: "B",
      title: "Question 26",
      explanation: "",
    },
    {
      content:
        "Universal Containers uses a Private Sharing model for Account. User A is on-boarded to User B's team and given the same profile and Role Both users own 20 Accounts but user User B is a able to see 40 Accounts whereas User A can only see the 20 that the own.\nWhat are the possible reasons for this?",
      options: [
        "A. User B is a member of a Queue that gained access to the records through a Sharing Rule",
        "B. User B is a member of a Group that gained access to the records through a Sharing Rule.",
        "C. User B had the records shared with them through a Permission Set.",
        "D. User B had the records manually shared with them.",
      ],
      answer: "C",
      title: "Question 27",
      explanation: "",
    },
    {
      content:
        "A sales manager wants to edit the opportunities entered by the sales team. The manager does not have Edit access to the Opportunity object. What is a recommended solution?",
      options: [
        "A. Create a permission set and associate Edit opportunity to the user record.",
        "B. Enabling team selling on the Opportunity object to grant Read/Write access.",
        "C. Change the opportunity's Organization-wide default setting to Public Read/Write.",
        'D. Redefine the role hierarchy by enabling "grant access using hierarchies."',
      ],
      answer: "A",
      title: "Question 28",
      explanation: "",
    },
    {
      content:
        "An administrator needs to Import a large amount of historical data (more than 100,000 records) from another system.\nhow should the administrator import the data?",
      options: [
        "A. Import Wizard with Add Only",
        "B. Data Loader with Bulk API Enabled",
        "C. An AppExchange package",
        "D. SOAP based API with Developer console",
      ],
      answer: "C",
      title: "Question 29",
      explanation: "",
    },
    {
      content:
        "AW Computing has several service plans it offers with its laptops. Management wants the sales team to focus on bringing in new business and to have the creation of the renewal opportunity for the service plans happen automatically.\nWhat approach should the administrator take to automate the renewal process7",
      options: [
        "A. Create a dynamic Lightning page with rich text to remind the rep to create a renewal opportunity when the opportunity is closed won.",
        "B. Configure a flow that will create the renewal based on the closed-won date and opportunity line items.",
        "C. Create a validation rule to prevent the rep from closing the opportunity until a renewal is associated.",
        "D. Configure a time-based workflow to send an email reminder to the sales rep when the service plan expires.",
      ],
      answer: "B",
      title: "Question 30",
      explanation: "",
    },
    {
      content:
        "When will account assignment rules automatically assign an opportunity to a territory",
      options: [
        "A. Account has multiple territories",
        "B. Account has no assigned territory",
        "C. Account ownership was changed",
        "D. When opportunity has no assigned territory and account has been assigned to a territory",
      ],
      answer: "D",
      title: "Question 31",
      explanation: "",
    },
    {
      content:
        "A sales manager cannot view a contact owned by a salesperson. The person is below the sales manager in the role hierarchy.\nWhy is the sales manager unable to view the contact?",
      options: [
        "A. The contact has NOT been manually shared with the manager",
        "B. The contact is NOT linked to an account",
        "C. Contact sharing settings are Private",
        "D. Contact sharing settings have Grant Access Using Hierarchies unchecked",
      ],
      answer: "C",
      title: "Question 32",
      explanation: "",
    },
    {
      content:
        "An Administrator wants to create a Knowledge base for articles such as FAQ Setup Guides & Guides with Images. What should be created to accommodate this?",
      options: [
        "A. Data Categories",
        "B. Knowledge Categories",
        "C. Display Types",
        "D. Article Types",
      ],
      answer: "D",
      title: "Question 33",
      explanation: "",
    },
    {
      content:
        "Universal Containers has a process to allow an employee to submit a vacation request and route it to the employee's manager for approval. An employee attempted to submit a request but it could not be submitted.\nHow could the administrator troubleshoot this?",
      options: [
        "A. Ensure the approval step has an associated action",
        "B. Review the system log to determine the root cause.",
        "C. Use workflow to email the administrator if the process fails.",
        "D. Ensure the user record has an assigned active manager.",
      ],
      answer: "D",
      title: "Question 34",
      explanation: "",
    },
    {
      content:
        "An administrator has a request to write a report listing accounts that have sales from this year and that have a completed activity in the last 30 days.\nWhat reporting feature should the administrator employ to provide only the list of accounts, without listing the details of the opportunities?",
      options: [
        "A. Filter Logic",
        "B. Summary Report",
        "C. Joined Report",
        "D. Cross-Filter",
      ],
      answer: "D",
      title: "Question 35",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks has created a new flow that deletes records.\nWhat should the administrator consider when testing the flow?",
      options: [
        "A. Flow with delete elements need to ne inactivate to ensure that the test record is not actually deleted.",
        "B. Flows with delete elements cannot be debugged by the Flow debugged tool.",
        "C. Even if the flow is inactive, debugging the flow will delete the test record.",
        "D. Record deleted by Flow when debugging are hard deleted.",
      ],
      answer: "C",
      title: "Question 36",
      explanation: "",
    },
    {
      content:
        "Northern Trail Outfitters requires the sales user to input a use case before moving the opportunity stage to qualified. A consultant has reviewed the business requirement and ran a report to check the state of data completion. When pulling a report for opportunities in the qualified stage or beyond, it appears that only 30% of records have a use case filled out with varying text strings.\nWhat should the administrator recommend?",
      options: [
        "A. Write a record-triggered flow that populates the Use Case field when an opportunity is closed.",
        "B. Use a quick action with the Use Case field in the layout, and add it as a Lightning component.",
        "C. Create a validation rule and add the Use Case field to the Stage Guidance in Path.",
        "D. Make the Use Case field required on the master Opportunity layout.",
      ],
      answer: "C",
      title: "Question 37",
      explanation: "",
    },
    {
      content:
        '"Object" data needs to be pulled up monthly from an org and stored else where. What can be done to perform this? Choose 2',
      options: [
        'A. Select "Schedule Export" from Data Export',
        "B. Use Data Loader",
        "C. IUse Data Exporter",
        'D. Select "Object" Export from Data Management',
      ],
      answer: "A,B",
      title: "Question 38",
      explanation: "",
    },
    {
      content: "How to streamline knowledge article creation process ?",
      options: [
        "A. Workflow that new article is created on case",
        "B. Validation rule that check article is updated",
        "C. Escalation process need approval of draft created from article manager",
      ],
      answer: "A",
      title: "Question 39",
      explanation: "",
    },
    {
      content:
        "Users report that the Industry picklist field is no longer visible on account records.\nWhich tool can an administrator use to troubleshoot this issue?",
      options: [
        "A. Debug log",
        "B. Setup audit trail",
        "C. Field history tracking",
        "D. Field audit history",
      ],
      answer: "B",
      title: "Question 40",
      explanation: "",
    },
    {
      content:
        "Which feature should NOT be used if SFB Consulting wants to validate data being entered via an API?",
      options: [
        'A. Marking "Required" via the page layout edit page',
        'B. Checking the "Required" box when creating a field.',
        "C. Validation Rules",
      ],
      answer: "A",
      title: "Question 41",
      explanation: "",
    },
    {
      content:
        "Ursa Major Solar wants to add a chat component to its corporate website, where its service agents can respond directly from Salesforce.\nWhat are two considerations the administrator should understand before adding Chat to the Service Console? Choose 2 answers",
      options: [
        "A. Chat must be routed with Omni-Channel in Lightning Experience.",
        "B. Chat is unavailable in Lightning Experience if also using Omni-Channel.",
        "C. Chat can only be added to Standard navigation Lightning apps.",
        "D. Chat can only be added to Console navigation Lightning apps.",
      ],
      answer: "C,D",
      title: "Question 42",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks needs to automate several updates to lead records and update unrelated records. Select changes should happen every time a record is created or updated, Put other changes should only happen when the record is updated.\nWhich two options should the administrator use to automate these updates?\nChoose 2 answers",
      options: [
        "A. Create a flow that runs when a record is created or updated.",
        "B. Create a Process Builder that runs when a record is changed.",
        'C. Use a Decision element with the "Only if the record that triggered the flow to run is updated to meet the condition requirements" option.',
        'D. Use "formula evaluates to true" workflow rule with the ISCHANCEO function to make changes when the record Is updated.',
      ],
      answer: "A,C",
      title: "Question 43",
      explanation: "",
    },
    {
      content:
        "Which features are available only in Customizable forecast ? Choose 3",
      options: [
        "A. Snapshots and Forecast History",
        "B. Rename Categories",
        "C. Share Forecasts",
        "D. Territory Management",
      ],
      answer: "A,C,D",
      title: "Question 44",
      explanation: "",
    },
    {
      content:
        "How can the administrator ensure article managers use specified values for custom article fields?",
      options: [
        "A. Create different article type for different requirements.",
        "B. Create a validation rule on the article.",
        "C. Use field dependencies on article types.",
        "D. Require a field on the page layout.",
      ],
      answer: "B",
      title: "Question 45",
      explanation: "",
    },
    {
      content:
        "Universal containers is using a web-to-lead from to collect contact information on people interested in its product and wants to ensure that these leads are contacted in a timely manner. The following actions are required:\n● send the lead an email with appropriate product information, depending on which product was selected on the web-to-lead form\n● Assign the appropriate salesperson to be the lead owner, depending on the product selected\n● create a task for the salesperson to follow up with the lead.\nAt a minimum, which combination of salesforce automation tools will be\nrequired to meet these requirement?",
      options: [
        "A. Lead assignment rule and auto response rule.",
        "B. Lead assignment rule and workflow rule",
        "C. Lead assignment rule, auto response rule and workflow rules",
        "D. lead assignment rule and publisher action.",
      ],
      answer: "C",
      title: "Question 46",
      explanation: "",
    },
    {
      content:
        "The administrator at Ursa Major Solar has set up IT policies for all user passwords to be a minimum length of 3 characters and have an expiration period of 90 days. The security team recently decided that administrators of any system should have a 15-character minimum password with a 30-day expiration period.\nWhere should the administrator make this change?",
      options: [
        "A. Session Settings on the User record",
        "B. Organi2ation-wide password policies",
        "C. Password complexity requirements on the permission set",
        "D. Password Policies on the System Administrator profile .",
      ],
      answer: "D",
      title: "Question 47",
      explanation: "",
    },
    {
      content:
        "What needs to be done before converting lookup to Master detail relationship",
      options: [
        "A. Make sure that all lookup fields have values",
        "B. Use Data Loader to convert all lookup to Master detail",
        "C. First delete lookup field and create new Master Detail",
        "D. OWD of master must be public Read/Write",
      ],
      answer: "A",
      title: "Question 48",
      explanation: "",
    },
    {
      content:
        "The Sales Manager at Universal Containers would like a dashboard to view each of the sales representative's opportunities, accounts, and related cases.What is a recommended solution ?\nDiscuss",
      options: [
        "A. Create a dynamic dashboard and add filters for opportunities, accounts and cases.",
        "B. Create an individual dashboard for each sales representative with opportunity, account, and case components.",
        'C. Create a dynamic dashboard and insure the sales manager has the "View My Team\'s Dashboard" permission.',
        "D. Create a dashboard and add filters for users, opportunities, accounts, and cases.",
      ],
      answer: "A",
      title: "Question 49",
      explanation: "",
    },
    {
      content:
        "What can an administrator do to enable customers to submit service request? Choose 2.",
      options: [
        "A. Enable chatter answers",
        "B. Enter live chat agent on the company website",
        "C. Enable the service cloud console on the company website",
        "D. Enable case feed on the company website",
      ],
      answer: "A,B",
      title: "Question 50",
      explanation: "",
    },
    {
      content:
        "A sales manager wants a report of accounts without any closed/won opportunities in the last year.\nHow can this requirement be met?",
      options: [
        "A. Create a summary report using the Accounts report type with a formula field for opportunity count",
        "B. Create a custom report type for Accounts without Opportunities",
        "C. Create a joined report using the Accounts report type and the Opportunities report types",
        "D. Create a tabular report using the Account report type and add a cross filter using Opportunities",
      ],
      answer: "D",
      title: "Question 51",
      explanation: "",
    },
    {
      content:
        "The administrator at AW Computing has been asked to review whether any users are making configuration changes directly in production.\nWhich item should the administrator review to find these details?",
      options: [
        "A. Field History Tracking",
        "B. Setup Audit Trail",
        "C. Login History",
        "D. Organization-Wide Defaults",
      ],
      answer: "B",
      title: "Question 52",
      explanation: "",
    },
    {
      content:
        "Sales reps at AW Computing hove been reporting that contact phone numbers sometimes revert book to on old value after being updated.\nWhat should the administrator do to resolve this issue?",
      options: [
        "A. Schedule Apex jobs.",
        "B. Delete all workflow rules.",
        "C. Consolidate automation tools.",
        "D. Add an invocable process.",
      ],
      answer: "C",
      title: "Question 53",
      explanation: "",
    },
    {
      content:
        "A set of Cases records with a specific record type needs to be restricted so that only a Support manager and four Support users have access. What can you do as a system administrator to meet this requirement? * (1 Point)",
      options: [
        "A. Create a new profile and assign the 5 users to the new profile",
        "B. Create a criteria-based sharing rule for the 5 users",
        "C. Remove the record type access for all users except the 5 mentioned",
        'D. Givethe"ViewAllData"permissiontothe5mentionedusersusingpermissionsets',
      ],
      answer: "B",
      title: "Question 54",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants to create a Job Application custom object related to a Job Posting custom object. They would also like a no-code solution to calculate the number of Job Applications for each Job Posting.\nWhat type of field should an administrator create on the Job Application to enable this functionality?",
      options: [
        "A. Master-Detail",
        "B. Roll-up Summary",
        "C. Lookup",
        "D. Formula",
      ],
      answer: "A",
      title: "Question 55",
      explanation: "",
    },
    {
      content:
        "What should an administrator consider when enabling territory management? choose 3",
      options: [
        "A. Territory hierarchy must match the organization",
        "B. Users can only be a member of one territory at a time.",
        "C. Sharing for accounts,contacts, opportunities and cases is impacted.(100%)",
        "D. It is permanent and cannot be disabled.(100%)",
        "E. It limits the type of forecasting that can be used.(100%)",
      ],
      answer: "C,D,E",
      title: "Question 56",
      explanation: "",
    },
    {
      content:
        "Which three actions should occur when an administrator clicks save after making a number of modifications to Knowledge data categories in a category group and changing their positions in the hierarchy?\nChoose 3 answers * (1 Point)",
      options: [
        "A. The history of article usage is reset to zero utilization",
        "B. The contents of the category drop-down menu change",
        "C. Users may temporarily experience performance issues when searching for articles",
        "D. The articles and questions visible to users change",
        "E. Users are temporarily locked out of their ability to access articles",
      ],
      answer: "B,C,D",
      title: "Question 57",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks call center agents have given their manager feedback that It takes too long to find relevant articles to answer questions on customer cases. The call center manager has asked the administrator to improve suggestions displayed to agents in the Knowledge component on Cases.\nWhich setting should the administrator use to meet the requirement?",
      options: [
        "A. Turn off auto-complete keyword search",
        "B. Enable Einstein Search",
        "C. Selected Case Fields",
        "D. Highlights and Snippets",
      ],
      answer: "B",
      title: "Question 58",
      explanation: "",
    },
    {
      content:
        "Position and job opening is a Master Detail relationship. OWD for Position is Private. Someone else wants to edit Job Openings. How to do it.",
      options: [
        "A. Create Sharing rule in Position",
        "B. Create Manual Sharing",
        "C. Create Sharing rule in Job Application",
        "D. Create Apex based Sharing",
      ],
      answer: "A",
      title: "Question 59",
      explanation: "",
    },
    {
      content:
        "Ursa Major Solar customers have two levels of support available based on their contracted services. Gold-level customers receive email and chat support with a 2-day response window. Platinum-level customers receive\n24/7 phone and chat support with a 2-hour response window.\nWhat should an administrator configure to ensure support agents respond within an appropriate service level?",
      options: [
        "A. Entitlement Process",
        "B. Omni-Channel",
        "C. Escalation Rules",
        "D. Assignment Rule",
      ],
      answer: "C",
      title: "Question 60",
      explanation: "",
    },
    {
      content:
        "What should an administrator consider when moving approval processes using a change set? * (1 Point)",
      options: [
        "A. Change sets do NOT include the approval and rejection actions from the source organization",
        "B. Custom fields on standard objects will need to be manually added in the target organization.",
        "C. The unique name of the approval process is NOT allowed to be changed once deployed in the target organization",
        "D. Change sets do NOT include the order of active approval processes from the source organization",
      ],
      answer: "D",
      title: "Question 61",
      explanation: "",
    },
    {
      content:
        "A job applicant object needs to be associated to Position object. Company wants that when a Position is deleted, all applicants should also be deleted. What type of relationship would this be?",
      options: [
        "A. Master-detail",
        "B. System information",
        "C. Lookup",
        "D. Hierarchical",
      ],
      answer: "A",
      title: "Question 62",
      explanation: "",
    },
    {
      content:
        "What should a system administrator consider before using territory management? Choose three answers. * (1 Point)",
      options: [
        "A. Forecasts are derived from Territory hierarchy not Role hierarchy",
        "B. Once enabled it cannot be disabled",
        "C. You need to contact Salesforce to have it enabled",
        "D. It does not working parallel with sharing functions",
      ],
      answer: "A,B,C",
      title: "Question 63",
      explanation: "",
    },
    {
      content:
        "Salesforce Knowledge offers administrators the ability to fully customize the way an article type displays to an end user. * (1 Point)",
      options: ["A. True", "B. False"],
      answer: "A",
      title: "Question 64",
      explanation: "",
    },
    {
      content:
        "Universal Containers created a few new fields on the account object as well as a new section on the page layout in the config sandbox. After positive test results, the administrator created and uploaded a change set with the new fields from the sandbox to production. Unfortunately, the administrator forgot to add the page layout.\nWhich two options can the administrator take to deploy the page layout?\nChoose 2 answers.",
      options: [
        "A. Add the page layout to the existing change set in the sandbox and upload the change set again.",
        "B. Clone the change set in the sandbox, add the new page layout to it and upload to production.",
        "C. Edit the change set in production to add the new page layout before deploying the change set.",
        "D. Deploy the existing change set. create and deploy a new change set containing the page layout.",
      ],
      answer: "A,D",
      title: "Question 65",
      explanation: "",
    },
    {
      content:
        "Admin wants to make exact copy of production metadata in developer sandbox.",
      options: [
        "A. Create and Deploy changeset",
        "B. Use Developer Console",
        "C. Schedule Sandbox refresh",
        "D. Schedule full weekly backup",
      ],
      answer: "A",
      title: "Question 66",
      explanation: "",
    },
    {
      content:
        'How can SFB Industries ensure that incoming cases are routed to the correct department based on the "Type" field on Cases?',
      options: [
        "A. Enable case routing for agents",
        "B. Use Assignment rules & Queues",
        "C. Create a workflow rule to assign users the correct case",
        "D. Use Auto--response rules & Queues",
      ],
      answer: "A",
      title: "Question 67",
      explanation: "",
    },
    {
      content:
        "Admin wants parent case cant be closed until all child cases are closed.",
      options: [
        "A. Apex trigger to check child case status before closing it",
        "B. Workflow on parent to check status of child case",
        "C. Rollup summary on child",
        "D. Validation rule on child case before closing it",
      ],
      answer: "A",
      title: "Question 68",
      explanation: "",
    },
    {
      content:
        "AW Computing wants to identify If certain customer is eligible for a service contract based on product. How to check it ?",
      options: [
        "A. Entitlements Only",
        "B. Service Contracts with Entitlements",
        "C. Service Contracts with Contract Line Items and Entitlements",
      ],
      answer: "C",
      title: "Question 69",
      explanation: "",
    },
    {
      content:
        "SFB Industries need to create a relationship between two objects. They need to have their own independent security settings but if a child record has a parent, the parent CANNOT be deleted. How can this be achieved?",
      options: [
        "A. Create a Master--detail relationship",
        "B. Create a lookup relationship",
        "C. Create a master--detail relationship and enforce the checkbox that does not allow deletion of parent records",
        "D. Create a lookup relationship and enforce the checkbox that does not allow deletion of parent records.",
      ],
      answer: "D",
      title: "Question 70",
      explanation: "",
    },
    {
      content:
        "Users report they are getting an Apex trigger error when they try to save a specific Account record. How could an administrator collect more information about the processing for that record?",
      options: [
        "A. Review the Setup Audit Trail",
        "B. Activate debug logging for the Apex trigger.",
        "C. Enable debug Logging for the user.",
        "D. Create a Flow with a fault connector.",
      ],
      answer: "B",
      title: "Question 71",
      explanation: "",
    },
    {
      content:
        "A user has been granted a delegated admin to a custom object. What can he complete on that object. Choose 2",
      options: [
        "A. Modify OWD",
        "B. Create custom Picklist in that object",
        "C. Create a new Custom field",
        "D. Modify Sharing Settings",
      ],
      answer: "B,C",
      title: "Question 72",
      explanation: "",
    },
    {
      content:
        "A sales manager at AW Computing has created a contact record but is missing some of the information to complete the record. The organization-wide default for Accounts is set to Public Read Only, and Contacts are controlled by parent.",
      options: [
        "A. Sales manager and system administrator",
        "B. Users above the sales manager in the role hierarchy",
        "C. All users in the organization",
        "D. Who will be able to edit this new contact record?",
        "E. The owner and users below the owner in the role hierarchy",
      ],
      answer: "E",
      title: "Question 73",
      explanation: "",
    },
    {
      content:
        "What happens when an admin creates a custom tab for a custom object (3)",
      options: [
        "A. new records of the custom object can be created from the sidebar",
        "B. a custom app containing the custom tab is automatically created",
        "C. new records of the custom object can only be accessed from the related list on the parent record",
        "D. the custom object has a home page",
        "E. users can search for records of the custom object",
      ],
      answer: "A,D,E",
      title: "Question 74",
      explanation: "",
    },
    {
      content:
        "Northern Trail Outfitters (NTO) has a private sharing model for records containing a customer's credit Information. These records should be visible to a sales rep's manager but hidden from their colleagues.\nHow should an administrator adjust NTO's sharing model to ensure the correct amount of confidentiality?",
      options: [
        "A. Create sharing rules for each manager based on the record owner.",
        "B. Grant access using hierarchies via the sharing settings.",
        "C. Use validation rules targeting the logged-in user.",
        "D. Add View All access for the object via the managers profile.",
      ],
      answer: "B",
      title: "Question 75",
      explanation: "",
    },
    {
      content:
        "A sales representative changed the ownership of an account that they owned. What impact will this have on sharing?",
      options: [
        "A. Related opportunity records will become Read-Only for account team members.",
        "B. All ownership-based sharing rules will be recalculated.",
        "C. All criteria-based sharing rules will be recalculated.",
        "D. Users who had access through manual sharing will lose access.",
      ],
      answer: "B,D",
      title: "Question 76",
      explanation: "",
    },
    {
      content:
        "The finance director at Cloud Kicks asks the administrator for an exception report that shows all B2C accounts that are missing the credit card number. The credit card number is a classic encrypted field.\nWhat action should the administrator take to meet this requirement?",
      options: [
        "A. Create a summary report that includes a cross-filter to the Account object with a sub-filter for credit card number equal to null.",
        "B. Add 'View Encrypted Fields' to a permission set assigned to Finance and system administrators and a summary report filtered by credit card number.",
        "C. Build a custom checkbox called Has Credit Card' that Finance checks when a credit card is recorded and a tabular report filtered on the checkbox equal to false.",
        "D. Unmask the encrypted credit card number field to make it available and add a custom filter to a report where credit card number is blank.",
      ],
      answer: "C",
      title: "Question 77",
      explanation: "",
    },
    {
      content:
        "The VP of Marketing is launching campaigns in each region to target accounts that do not have open opportunities. What reporting solutions can an administrator set up to assist with this?",
      options: [
        "A. Joined report",
        "B. Cross filter",
        "C. Reporting snapshot",
        "D. Standard filter",
      ],
      answer: "B",
      title: "Question 78",
      explanation: "",
    },
    {
      content:
        "A customer object was created at Universal Containers to store information employees will need for their annual reviews. Only the employees should be able to access their records. The administrator has set Organization-Wide Defaults (OWD) to private for the object. These records are accessible by the employee's manager.\nWhat additional step should the administrator take to remove the manager access to these records?",
      options: [
        "A. Uncheck Grant Access using Hierarchies in Sharing Settings.",
        "B. Verify that Allow Search is unchecked on the custom object.",
        "C. Uncheck Allow Users to Access Privacy Data on each profile",
        "D. Enable Hide Personal Information in User Management Settings.",
      ],
      answer: "C",
      title: "Question 79",
      explanation: "",
    },
    {
      content:
        'A sales manager is receiving an "insufficient privileges" error when viewing a contact. The contact owner is under the manager in the role hierarchy and "grant access using hierarchies" is checked in their sharing settings. Why is the sales manager not able to view the contact?',
      options: [
        "A. The contact sharing settings are private, so access to the record is omitted to the contact owner and the system administrator",
        "B. The contact sharing settings are controlled by the parent, and the account owner is not under the sales manager's role",
        "C. The contact owner has not selected the option to share contacts with others in the role hierarchy",
        "D. The account sharing settings are controlled by the parent, and the account owner is not under the sales manager's role",
      ],
      answer: "B",
      title: "Question 80",
      explanation: "",
    },
    {
      content: "How User can import Quota in Forecast ? Choose 2",
      options: [
        "A. Using Import Wizard",
        "B. Using CHangeset",
        "C. Using Forecast Tab",
        "D. Dataloader and API",
        "E. User Information / Records related list",
      ],
      answer: "D,E",
      title: "Question 81",
      explanation: "",
    },
    {
      content:
        "What must be considered in Communities for internal and external users. External users are using chatter. Choose 2",
      options: [
        "A. You need to enable Chatter",
        "B. External and Internal users should be on different community",
        "C. Use Ideas, Q&A",
        "D. New Users should use Customer portal and partner portal instead of community",
      ],
      answer: "A,C",
      title: "Question 82",
      explanation: "",
    },
    {
      content:
        "The administrator at universal containers has been asked to track training classes taken by employees. Employees may take several classes. The employee and class objects have already been created. How should the administrator relate the two objects?",
      options: [
        "A. Create a junction object with both employee and class as master objects",
        "B. Create a lookup relationship with employee as the master object",
        "C. Create a master detail relationship with class as the master object.",
        "D. Create a lookup relationship on both the employee and class objects",
      ],
      answer: "A",
      title: "Question 83",
      explanation: "",
    },
    {
      content:
        "Administrator has been tasked with creating a new custom field on the Account object called Government Der. The compliance department has determined that this field contains sensitive Information and needs to be encrypted using Classic Encryption.\nHow will this impact users when reading, editing, or reporting on Accounts?",
      options: [
        "A. Users with the View Encrypted Data permission can see the field, regardless of Field-Level Security.",
        "B. Encrypted fields are unable to be used the report criteria or list views filters.",
        "C. Users will need the View Encrypted Data permission to edit the field.",
        "D. Encrypted fields can be added to a list view and rule filters.",
      ],
      answer: "B",
      title: "Question 84",
      explanation: "",
    },
    {
      content:
        "A sales rep at AW Computing needs to give read/write access to an Account and related records to a teammate #m*e the sates rep is on vacation.\nHow could the administrator enable the sales rep to give record access to a colleague?",
      options: [
        "A. Add the Manual Sharing button the page layout.",
        "B. Include the nap on the Opportunity Team.",
        "C. Create an ownership-based sharing rule.",
        "D. Enable public groups for sharing.",
      ],
      answer: "B",
      title: "Question 85",
      explanation: "",
    },
    {
      content:
        "When an opportunity with a least one opportunity product close wins, Universal Containers requires that an Invoice record be created with Invoice_Line_item_c records for each Product on the Opportunity.\nHow should an administrator implement this request?",
      options: [
        "A. Use Einstein Next Best Actions.",
        "B. Use an Opportunity Approval process.",
        "C. Use a custom button on the Opportunity.",
        "D. Use an Opportunity that calls a Flow",
      ],
      answer: "A",
      title: "Question 86",
      explanation: "",
    },
    {
      content:
        "How to configure to make easier to search Knowledge Article ? Choose 5",
      options: [
        "A. Use Profiles",
        "B. Use Article Type and Select Filters like Data Category",
        "C. Use Stemming",
        "D. Search using Global Search",
        "E. Use Search Column",
        "F. Synonyms",
        "G. Auto Complete tag",
        "H. Search from Article Tab",
      ],
      answer: "B,C,F,G,H",
      title: "Question 87",
      explanation: "",
    },
    {
      content:
        "The Sales Manager at Universal Containers would like a dashboard to view each of the sales representative's opportunities, accounts, and related cases. What is a recommended solution?",
      options: [
        'A. Create a dynamic dashboard and insure the sales manager has the "View My Team\'s Dashboard" permission.',
        "B. Create a dynamic dashboard and add filters for opportunities, accounts and cases.",
        "C. Create adashboard and add filters for users, opportunities, accounts, and cases.",
        "D. Create an individual dashboard for each sales representative with opportunity, account, and case components.",
      ],
      answer: "A",
      title: "Question 88",
      explanation: "",
    },
    {
      content:
        "On the Contact record, if a contact has the value of 'CEO' in the Title field, the administrator wants to require the users to also put a phone number in the Phone field.\nWhat formula should the administrator put in the Error Condition Formula of a validation rule to enable this?",
      options: [
        "A. Title = 'CEO' && NOT(ISBLANK(Phone))",
        "B. Q Title = 'CEO' && ISBLANK(Phone)",
        "C. Title <> 'CEO' && NOT(ISBLANK(Phone))",
        "D. Title <> 'CEO' && ISBLANK(Phone)",
      ],
      answer: "B",
      title: "Question 89",
      explanation: "",
    },
    {
      content:
        "What permission do you need enabled to see the Find Duplicates button?",
      options: ["A. Delete", "B. Merge", "C. Read, Edit", "D. View All Data"],
      answer: "D",
      title: "Question 90",
      explanation: "",
    },
    {
      content:
        "Universal Container sells container and they ship it one time and payment is made monthly. What should be Scheduling ?",
      options: [
        "A. Quota",
        "B. Revenue",
        "C. Quantity",
        "D. Revenue and Quantity",
      ],
      answer: "B",
      title: "Question 91",
      explanation: "",
    },
    {
      content:
        "AW Computing has a new requirement from its security team where audit information relating to an account must be recorded in a new custom object called Audit. Audit records need to be preserved for 10 years and only accessible by the audit team.\nWhat relationship should be used to relate the Audit object to the Account object?",
      options: ["A. Master-Detail", "B. Many-To-Many", "C. Self", "D. Lookup"],
      answer: "D",
      title: "Question 92",
      explanation: "",
    },
    {
      content:
        "An administrator would like to convert a Master-Detail relationship to a Lookup relationship. What action should be taken prior to converting the relationship?",
      options: [
        "A. Delete all roll-up summaries that reference the detail object prior to converting",
        "B. Delete all reports that use the master object with the detail object report type",
        "C. Remove child object related lists from the parent object page layouts",
        "D. Select the Allow Re-parenting option on the master detail relationship",
      ],
      answer: "A",
      title: "Question 93",
      explanation: "",
    },
    {
      content:
        "AW Computing (AVVC) has customers In multiple countries. AWC would li<e to set up advanced currency management for Its system.\nWhich two considerations should AWC be aware or prior to implementing this change to the existing system?\nChoose 2 answers",
      options: [
        "A. When a currency is added to an organization's List of supported currencies, it cannot be deleted.",
        "B. Historical trend reports will only use the last dated exchange rate.",
        "C. Opportunities will only display sales In the customer's localized currency.",
        "D. Once enabled, advanced currency management cannot be disabled.",
      ],
      answer: "A,B",
      title: "Question 94",
      explanation: "",
    },
    {
      content:
        "What tool would you use to automate a process so a parent case is closed, the child case automatically closes?* (1 Point)",
      options: [
        "A. Validation rule field update",
        "B. Apex trigger",
        "C. Workflow rule field update",
        "D. Auto response rule",
      ],
      answer: "B",
      title: "Question 95",
      explanation: "",
    },
    {
      content:
        'Suri only has the "read" permission for the case object on her profile. A criteria-based sharing rule gives her read/write access to product support cases. Will Suri be able to edit product support cases?',
      options: ["A. Yes", "B. No"],
      answer: "B",
      title: "Question 96",
      explanation: "",
    },
    {
      content:
        "The administrator at AW Computing implements multi-factor authentication using the Salesforce Authenticator app downloaded on company-provided iPhones. A sales rep breaks their phone and needs to update an opportunity record.\nHow should the administrator grant access for the sales rep?",
      options: [
        "A. Add the sales rep's IP address to the trusted IP ranges.",
        "B. Instruct the sales rep to log in from the company's VPN.",
        "C. Generate a temporary identity verification code for the rep.",
        "D. Delegate multi-factor identification to the sales rep.",
      ],
      answer: "C",
      title: "Question 97",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks would like to reassign ownership of all leads that are open and more than 60 days old. The system administrator has written an assignment rule to distribute these leads to the correct owners or queues.\nWhich two tools should the administrator use to update the owner of these leads?\nChoose 2 answers",
      options: [
        "A. Mass Update",
        "B. Import Wizard",
        "C. Dataloader.io",
        "D. Bulk API",
      ],
      answer: "A,D",
      title: "Question 98",
      explanation: "",
    },
    {
      content:
        "While Seeing a case record that has a blank field even though that field is set as required on page layout. What may be possible reason for this kind of unexpected behavior ?",
      options: [
        "A. It is because of Validation",
        "B. Data entered through Dataloader",
        "C. Error in Salesforce",
        "D. Workflow is used to close the record",
      ],
      answer: "B",
      title: "Question 99",
      explanation: "",
    },
    {
      content:
        "In Collaborative Forecasts, which permissions are required in order to upload quota data for al users? Choose\n2.",
      options: [
        "A. Customize Forecasts",
        "B. View all data.",
        "C. Customize Quotas",
        "D. View all Forecasts",
        "E. Manage all data",
        "F. Manage Quotas",
      ],
      answer: "D,F",
      title: "Question 100",
      explanation: "",
    },
    {
      content:
        "Northern Trail Outfitters has five delegated administrators and two system administrators. There have been a couple of cases reported that login settings for sales reps have changed.\nWhere would the administrator find what settings have been changed?",
      options: [
        "A. Setup audit trail",
        "B. Debug log",
        "C. Field history tracking",
        "D. Login history",
      ],
      answer: "C",
      title: "Question 101",
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
      answer: "C",
      title: "Question 102",
      explanation: "",
    },
    {
      content:
        "With Customizable Forecasting you can forecast any of the following data.\nChoose three answers.",
      options: [
        "A. Quantity",
        "B. Amount",
        "C. Units of Individual Products",
        "D. Units of Product Family",
      ],
      answer: "A,B,D",
      title: "Question 103",
      explanation: "",
    },
    {
      content:
        "Suggest a feature that SFB Industries can enable to increase call deflection.",
      options: [
        "A. Public Knowledge Base",
        "B. Live Chat",
        "C. Click--to--dial",
        "D. Email--to--Case",
      ],
      answer: "A",
      title: "Question 104",
      explanation: "",
    },
    {
      content:
        "Noah wants a report that shows how many cases and closures for all of his subordinates at 6PM each day. How can you configure this?",
      options: [
        "A. Use a dynamic dashboard and specify each individual",
        "B. Use a single dashboard with an Analytic Snapshot",
        "C. Use a dynamic dashboard for all subordinates",
        "D. Use a single dashboard and apply cross filters",
      ],
      answer: "B",
      title: "Question 105",
      explanation: "",
    },
    {
      content:
        "Ursa Major Solar (UMS) receives hundred of cases every week from both consumers and retail partners. UMS wants to ensure it's meeting all service-level agreements to maintain high levels of customer satisfaction.\nWhat should the administrator do to help meet this goal?",
      options: [
        "A. Configure the Milestones object on Service Contracts to sequential milestones for common case issues.",
        "B. Expose the Service Contracts object in the Service Console for an agent to view when working a case.",
        "C. Set up and configure Entitlement Process to design timelines and track issue resolution.",
        "D. Design a Net Promoter Score survey using Surveys that is automatically sent when a case is closed.",
      ],
      answer: "C",
      title: "Question 106",
      explanation: "",
    },
    {
      content:
        "A sales manager wanes to edit the Opportunities owned by the sales team. The manager does NOT have edit access to the Opportunity object.\nWhat is the recommended solution?",
      options: [
        "A. Create a permission set for Opportunity edit and associate it to the year record.",
        "B. Enable team setting on the Opportunity object to grant read/write access.",
        "C. Change the Opportunity's organization-wide default setting to public read/write.",
        "D. Redefine the role hierarchy grant access using hierarchies.",
      ],
      answer: "C",
      title: "Question 107",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants to allow its customers to submit support requests across multiple channels. In which two ways can this be accomplished with Salesforce ?",
      options: [
        "A. Expose the case feeds option on the company's website.",
        "B. Enable Chatter Answers in the company's Customer Community.",
        "C. Create a Live Agent chat button on the company website.",
        "D. Enable the Service Cloud Console app on the company website.",
      ],
      answer: "B,C",
      title: "Question 108",
      explanation: "",
    },
    {
      content:
        "In addition to setting the standard price, what must you also do in order to add a Product to a Custom Price Book? * (1 Point)",
      options: [
        "A. Select a Product Family",
        "B. Check the Active checkbox.",
        "C. Enter a Product Description.",
        "D. Enter a Product Code.",
      ],
      answer: "B",
      title: "Question 109",
      explanation: "",
    },
    {
      content:
        "An administrator created two record types on the Account object: Internal Customers and External Customers.\nA custom profile called Sales has the External Customers record type assigned. The sharing rules for Accounts arm set to Public Read Only. On occasion. Sales users notice that an Account record has the wrong record type assigned. The administrator has created a screen flow that will change the record type on the user's behalf.\nWhat will happen to the Sales user's record access after running this flow?",
      options: [
        "A. Record Access remains the same.",
        "B. A new record owner will be assigned.",
        "C. Edit access will be lost to the record.",
        "D. Read access will be lost to the record.",
      ],
      answer: "C",
      title: "Question 110",
      explanation: "",
    },
    {
      content:
        "The sales agents at DreamHouse Realty have a profile that allows them to import records for a custom object called House. The agents only need to make imports occasionally and typically Import around 100 new records at a time.\nWhat tool should the agents use to upload records?",
      options: [
        "A. Apex",
        "B. Data Loader",
        "C. Bulk API",
        "D. Date Xmport Wizard",
      ],
      answer: "D",
      title: "Question 111",
      explanation: "",
    },
    {
      content:
        "How should a Workflow issue be properly monitored and Debugged?",
      options: [
        "A. Check the standard Debug Logs",
        "B. Check the standard Workflow logs",
        "C. Add a new monitored user and check the Debug Logs",
        "D. Check the Time Based Workflow Log",
      ],
      answer: "C",
      title: "Question 112",
      explanation: "",
    },
    {
      content:
        'Which of the following statements are true about the Opportunity field, "Stage"? Choose two answers.',
      options: [
        "A. There are 10 default stage values, based on a commonly used sales methodology.",
        "B. The list of default stage values cannot be edited or added.",
        "C. There are other sales methodologies that can be downloaded from the AppExchange and used within Salesforce",
      ],
      answer: "A,C",
      title: "Question 113",
      explanation: "",
    },
    {
      content:
        'A sales manager is receiving an "insufficient privileges" error when viewing a contact. The contact owner is under the manager in the role hierarchy. What is the reason the sales manager is not able to view the contact?',
      options: [
        "A. The contact sharing settings are private, so access to the record is limited to the contact owner and system administrator.",
        "B. The account sharing settings are controlled by the parent, and the account owner is not under the sales manger's role.",
        "C. The contact sharing settings are controlled by the parent, and the account owner is not under the sales manager's role.",
        "D. The contact owner has not selected the option to share contacts with others in the role hierarchy.",
      ],
      answer: "B",
      title: "Question 114",
      explanation: "",
    },
    {
      content:
        "AW Computing continues to grow and has concerns about the volume of sensitive data being stored in its org. The administrator suggests utilizing Salesforce Shield.\nWhat should the team consider before Implementing Salesforce Shield?",
      options: [
        "A. Einstein Lead Scoring is available on encrypted fields.",
        "B. Encrypted f elcz art j-ab e to be referenced in flows.",
        "C. Paused flows can cause data to be saved in an unencrypted state.",
        "D. Shield Platform Encryption can be used with custom metadata types.",
      ],
      answer: "A",
      title: "Question 115",
      explanation: "",
    },
    {
      content:
        "The administrator at universal containers has been asked to track training classes taken by employees.\nEmployees may take several classes. The employee and class objects have already been created. How should the administrator relate the two objects?",
      options: [
        "A. Create a lookup relationship on both the employee and class objects",
        "B. Create a junction object with both employee and class as master objects",
        "C. Create a master detail relationship with class as the master object.",
        "D. Create a lookup relationship with employee as the master object",
      ],
      answer: "B",
      title: "Question 116",
      explanation: "",
    },
    {
      content: "What happen when using changesets ( choose 2)",
      options: [
        "A. Needs one inbound and outbound",
        "B. Transfer all Profiles",
        "C. Has a feature that will validate the changeset before deploying",
        "D. Transfer all Data",
      ],
      answer: "A,C",
      title: "Question 117",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks maintains Inventory in a legacy application. Management wants the information to also be available to view and report on in Saiesforce.\nWhich action should the administrator take to achieve this goal?",
      options: [
        "A. Upload an Excel spreadsheet with the data into the Files tab.",
        "B. Import the data into a custom object when needed; delete after it is used.",
        "C. Build a Lightning component and use SFDX to connect to the inventory app.",
        "D. Create an external object that maps to the inventory application.",
      ],
      answer: "D",
      title: "Question 118",
      explanation: "",
    },
    {
      content:
        "What should an administrator use as an alternative to a Process Builder to expedite the time required to update the records?",
      options: [
        "A. Workflow Rule Field Change",
        "B. Screen Row",
        "C. Batch Update",
        "D. Before save How Trigger",
      ],
      answer: "D",
      title: "Question 119",
      explanation: "",
    },
    {
      content:
        "The administrator needs to give an IT Manager full access to customize Salesforce. How can this be accomplished?",
      options: [
        "A. Create a delegated Administrator group",
        "B. Create a new profile for the user and grant edit access to all objects",
        "C. Create a permission set and grant Customize Application permission",
        "D. Create a permission set and grant edit access to all objects",
      ],
      answer: "C",
      title: "Question 120",
      explanation: "",
    },
    {
      content:
        "An administrator has been asked to create a replica of the production organization. The requirement states that existing fields, page layouts, record types, objects, and data contained in the fields and objects need to be available in the replica organization. How can the administrator meet the requirement?",
      options: [
        "A. Create a configuration-only Sandbox",
        "B. Create a Full Sandbox",
        "C. Create a metadata sandbox",
        "D. Create a developer sandbox",
      ],
      answer: "B",
      title: "Question 121",
      explanation: "",
    },
    {
      content:
        "The Marketing Manager has requested that a field be added to each account that displays the number of contacts associated with that account. The manager wants to use this field as part of an email marketing segmentation strategy. How can this requirement be met?",
      options: [
        "A. Create a custom field on the account. Use a workflow rule to update the field when contacts are added or deleted.",
        "B. Create a roll-up summary field that counts the number of contacts and displays that count on the account.",
        "C. Create a custom field on the account. Use an Apex trigger to update the field when contacts are added or deleted.",
        "D. Create a custom formula field on the account using the count() function to count the number of related contacts.",
      ],
      answer: "B",
      title: "Question 122",
      explanation: "",
    },
    {
      content:
        "An administrator notices that there are two account records in the system with the same name. A contact record with the same name is associated with each account.\nWhich set of steps should be taken lo merge these accounts using the Salesforce merge feature?",
      options: [
        "A. Merge the duplicate contacts and then merge the duplicate accounts.",
        "B. Merge the duplicate accounts and check the box that optionally merges the duplicate contacts.",
        "C. Merge the duplicate accounts and the duplicate contacts will be merged automatically.",
        "D. Merge the duplicate accounts and then merge the duplicate contacts.",
      ],
      answer: "B",
      title: "Question 123",
      explanation: "",
    },
    {
      content:
        "When can a user become an owner of a record without being a record creator?\nChoose 2 answers.",
      options: [
        "A. If the record is in a queue",
        "B. If person is above the owner of the record in role hierarchy",
        "C. If he is already a record owner",
        "D. if someone shares the record to the record owner",
      ],
      answer: "A,B",
      title: "Question 124",
      explanation:
        "Explanation\n See\n also:https://help.salesforce.com/apex/HTViewHelpDoc?id=queues_overview.htm&language=enhttps://help.sales",
    },
    {
      content:
        "The VP of finance noticed incomplete information on the record that indicates if the borrower was approved or offered an alternate product. This information is collected mid-way through the sales cycle in a picklist.\nHow should the administrator ensure this Add is completed prior to dosing the opportunity?",
      options: [
        "A. Make the field required in field-level security.",
        "B. Make the field required on the page layout.",
        "C. Create a workflow rule.",
        "D. Create a validation rule,",
      ],
      answer: "D",
      title: "Question 125",
      explanation: "",
    },
    {
      content:
        "What is the maximum file size that can be uploaded in CRM Content? * (1 Point)",
      options: ["A. 500MB", "B. 100MB", "C. 2GB", "D. 10GB"],
      answer: "C",
      title: "Question 126",
      explanation: "",
    },
    {
      content:
        "The administrator of Universal Containers is testing an approval process in a recently refreshed Developer Pro sandbox and is finding that none of the notification emails are being sent to the approvers.\nWhich two reasons could be the cause? (Choose two.)",
      options: [
        "A. HTML templates are NOT available in sandboxes",
        "B. The email addresses for the users are incorrect",
        "C. The Deliverability Access Level setting is incorrect",
        "D. Workflow emails only work in Full sandboxes",
      ],
      answer: "B,C",
      title: "Question 127",
      explanation: "",
    },
    {
      content:
        "What is true about Salesforce Communities? Choose two answers. * (1 Point)",
      options: [
        "A. Ideas tab is used by community users to submit, like and promote Ideas",
        "B. Crowd-sourced Knowledge is accessible in Q&A tab",
        "C. Reputation level is the same across all communities",
        "D. Communities can only be used by internal salesforce users",
      ],
      answer: "A,B",
      title: "Question 128",
      explanation: "",
    },
    {
      content:
        "A sales manager wants to edit the opportunities owned by the sales team. The manager does not have Edit access to the Opportunity object. What is a recommended solution? * (1 Point)",
      options: [
        'A. Redefine the role hierarchy by enabling"grant access using hierarchies',
        "B. Create permission set and associate Edit opportunity to the user record",
        "C. Change the opportunity's organization-wide default setting to Public Read/Write",
        "D. Enable team selling on the Opportunity object to Grant Read/Writeaccess",
      ],
      answer: "B",
      title: "Question 129",
      explanation: "",
    },
    {
      content:
        "Ursa Major Solar uses the custom object Product Development to track Ideas R&D is wording on. A former administrator added the custom object Potential Name with a lookup to Product Development to allow R&D to track names under consideration for those product. The R&D manager recently ran a record and noticed several potential names where the relationship to the Product Development record was missing. The current administrator needs to change this relationship to master detail to ensure a potential name only exists when there is product development.\nWhich two options are available for altering the existing Potential Name records for the deployment of this change to be successful?\nChoose 2 answers",
      options: [
        "A. Remove any existing data in the lookup field n Potential Name records",
        "B. Move any Potential Name records with blank lookup fields to the recycle bin.",
        "C. Remove the lookup field from the page layout so the data is maintained without changes.",
        "D. Assign any Potential Name records with blank lookup fields to an existing record from Product Development.",
      ],
      answer: "B,D",
      title: "Question 130",
      explanation: "",
    },
    {
      content:
        "When a lookup relationship is created between two objects, which three options can the administrator select to help manage situations when a lookup record is deleted?Choose 3 answers.",
      options: [
        "A. Prompt the user to enter another record to resolve the lookup relationship.",
        "B. Delete the related record also.",
        "C. Clear the value of the lookup field.",
        "D. Do not allow deletion of a lookup record that is part of a lookup relationship.",
        "E. Notify the record owner.",
      ],
      answer: "B,C,D",
      title: "Question 131",
      explanation: "",
    },
    {
      content:
        "A user changes roles from an EMEA sales representative to a US sales representative. How will this impact the ownership-based sharing rules for the user's records?",
      options: [
        "A. This will affect the ownership of records for standard objects but not custom objects.",
        "B. None of the ownership-based sharing rules are recalculated.",
        "C. All of the ownership-based sharing rules are recalculated.",
        "D. This will only affect ownership-based sharing rules if the user moves up in the role hierarchy.",
      ],
      answer: "C",
      title: "Question 132",
      explanation: "",
    },
    {
      content:
        "VP of Sales wants to automatically add the account name to the opportunity name once a record is saved. How can this be done?",
      options: [
        "A. Create a Workflow Rule with an immediate workflow trigger to update the opportunity name field",
        "B. Use an Apex Trigger",
        "C. Enforce an opportunity naming guideline for Sales Reps",
      ],
      answer: "A",
      title: "Question 133",
      explanation: "",
    },
    {
      content:
        "Which of the following is NOT true about article types in Salesforce Knowledge?",
      options: [
        "A. An organization must have 2 article types to enable Knowledge.",
        "B. Article Types are typically short HTML documents.",
        "C. Article Types may include attachments.",
        "D. Article Types should enable 'actionable' content.",
      ],
      answer: "A",
      title: "Question 134",
      explanation: "",
    },
    {
      content:
        "Universal Containers uses a custom object to track customer complaints. The company wants to have a field on the custom object where they can include a reference to another complaint. What type of relationship can be used to accomplish this?",
      options: [
        "A. Master-detail",
        "B. Hierarchical",
        "C. Junction",
        "D. Lookup",
      ],
      answer: "D",
      title: "Question 135",
      explanation: "",
    },
    {
      content:
        "Customer already have products delivered and payment is done on monthly basis. What kind of scheduling can be done ?",
      options: [
        "A. Default Quantity Scheduling",
        "B. Default Scheduling",
        "C. Default Revenue scheduling",
        "D. Default Quota scheduling",
      ],
      answer: "C",
      title: "Question 136",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks (CK) has a sneaker of the month product that is sold as an annual subscription at the price of $1, What type of product scheduling should the CK administrator set up to accurately capture that information?",
      options: [
        "A. Quantity Schedule Only",
        "B. Quantity and Revenue Schedules.",
        "C. Inbound Scheduling",
        "D. Revenue Schedule Only",
      ],
      answer: "B",
      title: "Question 137",
      explanation: "",
    },
    {
      content:
        "In the case team list, users can view the case details and related lists depending on their rights (T/F)",
      options: ["A. True", "B. False"],
      answer: "B",
      title: "Question 138",
      explanation: "",
    },
    {
      content: "You can track only Assets sold by your company.",
      options: ["A. False", "B. True"],
      answer: "A",
      title: "Question 139",
      explanation: "",
    },
    {
      content:
        "An administrator at Cloud Kicks has enabled Territory Management and is setting up a territory model. Some users in a territory need to access Contacts and Opportunities related to the Account.\nWhich two capabilities are available for users in a territory?\nChoose 2 answers",
      options: [
        "A. View. Edit, Transfer, Delete",
        "B. View and Edit",
        "C. View and Transfer",
        "D. View Only",
      ],
      answer: "A,C",
      title: "Question 140",
      explanation: "",
    },
    {
      content:
        "What access can users have to Accounts and Opportunities when territory management is enabled? * (1 Point)",
      options: [
        "A. View Account records regardless of the account record owner",
        "B. Edit,TransferandDeleteOpportunityrecordsregardlessoftherecordoftheowner",
        "C. Edit Opportunity records regardless of the account owner",
        "D. Transfer and Delete opportunities regardless of the owner of the record",
      ],
      answer: "A",
      title: "Question 141",
      explanation: "",
    },
  ],
});
