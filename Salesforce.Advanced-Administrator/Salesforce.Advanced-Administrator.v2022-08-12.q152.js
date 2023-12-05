window.testContent = window.testContent || [];
var testId = "Salesforce.Advanced-Administrator";
var testName = "Salesforce.Advanced-Administrator";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "Salesforce.Advanced-Administrator.v2022-08-12.q152",
  content: [
    {
      content:
        "The VP of Finance wants to ensure that once an opportunity is closed, it cannot be modified by any user. How can an administrator meet this requirement?",
      options: [
        "A. Create an opportunity validation rule with the formula: PRIORVALUE( IsClosed ) = True.",
        "B. Set the Do Not Modify Closed Opportunity permission for all profiles.",
        "C. Create a workflow field update to update the IsClosed field to True if a closed opportunity is modified.",
        "D. Set all fields to Read-Only on the standard Closed Opportunity page layout.",
      ],
      answer: "A",
      title: "Question 1",
      explanation: "",
    },
    {
      content:
        "Your company sells large mainframes that are delivered in one delivery but are paid for with several regular installments. What type of schedule should you set up? * (1 Point)",
      options: [
        "A. Default Quantity Schedule",
        "B. Default Revenue Schedule",
        "C. Don't create any default schedule",
        "D. Default Revenue and Quantity Schedule",
      ],
      answer: "B",
      title: "Question 2",
      explanation: "",
    },
    {
      content:
        "A custom object was created at Universal Containers to store information employees will need for their annual reviews. Only the employee should be able to access their records. The administrator has set Organization-Wide Defaults to private for the object. These records are accessible by the employee's manager.\nWhat additional step should be taken to remove the manager's access to these records?",
      options: [
        "A. Remove access to the custom object on the manager's profile.",
        "B. Uncheck the manual sharing for the custom object on each profile.",
        "C. Recalculate the sharing rules in sharing settings.",
        "D. Uncheck grant access using hierarchies in sharing settings.",
      ],
      answer: "C",
      title: "Question 3",
      explanation: "",
    },
    {
      content:
        "A user with permissions to create price books wants to quickly create a new product with the same information as the existing product by cloning the product.\nWhat is an important consideration when cloning a product?",
      options: [
        "A. Price book entries in price books that the user does NOT have access to will be created.",
        "B. Price book entries need to be activated before users can use the new price book.",
        "C. Price book entries will NOT be created in the standard price book.",
        "D. Price book entries in price books that the user does NOT have access to will not be created.",
      ],
      answer: "D",
      title: "Question 4",
      explanation: "",
    },
    {
      content:
        "Universal Containers sells monthly service subscriptions and wants to ensure their Opportunity report accurately represent the amount of money to be received each month.\nWhich solution an administrator use to meet this requirement?",
      options: [
        "A. Use process Builder and Flow to create custom object records",
        "B. Use Opportunity formula fields for each reporting period.",
        "C. Use monthly Opportunity reporting snapshot.",
        "D. Use product revenue schedules for each revenue period.",
      ],
      answer: "C",
      title: "Question 5",
      explanation: "",
    },
    {
      content:
        "Universal Containers has three different profiles for the support desk. The VP of Support requests permission to only reassign profiles for support desk users.\nHow should this access be granted?",
      options: [
        "A. Delegated administration access to the three profiles.",
        "B. The manage users permission to the profile.",
        "C. The administrator profile.",
        "D. A permission set with the manage users permission.",
      ],
      answer: "A",
      title: "Question 6",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks has a Process Builder which should trigger upon a status change from on approval process. The Process Builder triggers if the status is updated manually, but not as a result or the approval process update.\nWhat could the administrator do to troubleshoot the issue?",
      options: [
        "A. Check the Reevaluate Workflow Rules After Field Change box on the Approval Process Field Update Action.",
        "B. Check the Approval Process to make sure it is on the correct version.",
        "C. Turn Recursion the Process Builder under the Advanced Settings so the Process Builder fires again.",
        "D. Change the value with a Specific New Field Value so the Process Builder knows what value to look for.",
      ],
      answer: "A",
      title: "Question 7",
      explanation: "",
    },
    {
      content:
        "The administrator at Cloud Kicks noticed that the before trigger they are working on executes successfully but fails to save the original version of the record to the external data archive. The administrator finds there is also a record-triggered flow on that object that is configured to run before save.\nHow should the administrator advise the developer'",
      options: [
        "A. A validation rule could be preventing records from ever meeting the conditions in the trigger.",
        "B. Record-triggered flows that are configured to",
        "C. The code could be trying to create duplicates in the archive when it is unable to.",
        "D. The trigger is writing the data to the wrong place in the external data archive.",
      ],
      answer: "B,C",
      title: "Question 8",
      explanation: "",
    },
    {
      content:
        "The sates VP wants to see the custom Bonus Amount field summed to the Amount level; however, the ability to create a summary field is grayed out.\nWinch adjustment does the administrator need to make in order to utilize a custom summary field?",
      options: [
        "A. Reorder columns.",
        "B. Add filter logic",
        "C. Create ticket field.",
        "D. Add data grouping.",
      ],
      answer: "D",
      title: "Question 9",
      explanation: "",
    },
    {
      content:
        "Universal Containers uses territory management to manage its sales territories. Territory managers and sales reps are at the same role level in the sold hierarchy. Account and opportunity objects are set to private. What record access can territory managers have for accounts and opportunities that are assigned to their territories? Choose 3",
      options: [
        "A. Transfer all opportunities associated with accounts in the territory, regardless of who owns the opportunities.",
        "B. View all opportunities associated with accounts in the territory, regardless of who owns the opportunities",
        "C. Edit all opportunities associated with accounts in the territory, regardless of who owns the opportunities.",
        "D. View edit transfer and delete accounts assigned to the territory, regardless of who owns the accounts.",
        "E. Transfer and delete opportunities assigned to the territory, regardless of who owns the opportunities",
      ],
      answer: "B,C,D",
      title: "Question 10",
      explanation: "",
    },
    {
      content:
        "Universal Containers uses Territory Management to manage its sales territories. Territory managers and sales representatives are at the same role level in the role hierarchy. Account and Opportunity objects are set to private.\nWhich three permissions should be granted to territory managers.\nChoose 3 answers",
      options: [
        "A. Transfer and Delete opportunity assigned to the territory, regardless of who owns the opportunities.",
        "B. View, Edit, Transfer, and Delete accounts assigned to the territory, regardless of who owns the accounts.",
        "C. Transfer All opportunities associated with accounts in the territory, regardless of who owns the opportunities.",
        "D. View All opportunities associated with accounts in the territory, regardless of who owns the opportunities.",
        "E. Edit All opportunities associated with accounts in the territory, regardless of who owns the opportunities.",
      ],
      answer: "A,D,E",
      title: "Question 11",
      explanation: "",
    },
    {
      content:
        "AW Computers has enabled the feature for Contact to multiple Accounts. A rep is trying to remove the primary Account from a Contact but Is unable to do so. The administrator has already updated the page layout to no longer require an Account.\nWhat could be the issue?",
      options: [
        "A. The Contact has Indirect relationships to other Accounts.",
        "B. A primary Account relationship Is required on a Contact regardless of the page layout settings.",
        "C. Private Contacts need to be enabled in Setup.",
        "D. The Account Contact relationship record needs to be deleted first In order to disassociate Contact from the Account.",
      ],
      answer: "B",
      title: "Question 12",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks has two record-triggered flows on the same object. One flow creates a child record when criteria are met. The second record-triggered flow is based on criteria to check if the child record exists and updates a field. The field on the child record that needs to be updated Is still null after the second record trigger.\nWhat should the administrator do to resolve this issue?",
      options: [
        "A. Combine the two flows into one with checks to see which part of the flow needs to be run.",
        "B. flows into schedule flows and have them update the field.",
        "C. Make a new record-triggered flow on the child object to update the field on the parent record.",
        "D. Have the record-triggered flows fire on create or edit to update the field.",
      ],
      answer: "A",
      title: "Question 13",
      explanation: "",
    },
    {
      content:
        "Which of the following data enrichment options is available to a system administrator through the Social Accounts, Contacts, and Leads feature? * (1 Point)",
      options: [
        "A. Use Twitter to view recent tweets posted by a contact",
        "B. Use Facebook to import educational background",
        "C. Use Linked in to import educational background",
        "D. Use the Company's salesforce Facebook account",
      ],
      answer: "A",
      title: "Question 14",
      explanation: "",
    },
    {
      content:
        "What are two capabilities of Enterprise Territory Management?\nChoose 2 answers.",
      options: [
        "A. The ability to use 20 territories assignment rules per model",
        "B. Prioritize territories to indicate highest priority or lowest priority",
        "C. Territory hierarchy replaces the role hierarchy for sharing",
        "D. The ability to use filter-based opportunity criteria to expand assignment rules",
      ],
      answer: "B,D",
      title: "Question 15",
      explanation: "",
    },
    {
      content:
        "Which two requirements must be met for a user to view knowledge Articles within a Salesforce organization?\nCheck 2 answers.",
      options: [
        "A. The user must be assigned a Salesforce Knowledge license.",
        "B. The user must have access to the articles tab.",
        "C. The user's profile must have the read permission for the at lease one article type.",
        "D. The user must have the manage articles permission on the profile.",
      ],
      answer: "B,C",
      title: "Question 16",
      explanation: "",
    },
    {
      content:
        "What privileges can be given to a delegated administrator? Choose three answers. * (1 Point)",
      options: [
        "A. Create and edit users.",
        "B. Modify the role hierarchy.",
        "C. Assign users to specified profiles.",
        "D. Manage custom objects.",
        "E. Modify profile permissions.",
      ],
      answer: "A,C,D",
      title: "Question 17",
      explanation: "",
    },
    {
      content:
        "The Cloud Kicks online Lead Intake form was recently updated to allow for new choices on some older picklist fields. The leads are all being created properly in Salesforce, but reps are getting errors as they try to work the leads.\nWhat tool should the administrator use to evaluate what is causing the errors?",
      options: [
        "A. Debug Log",
        "B. Record History",
        "C. Setup Audit Log",
        "D. Login History",
      ],
      answer: "A",
      title: "Question 18",
      explanation: "",
    },
    {
      content:
        "What type of prices can the system administrator set for an organization s products?",
      options: [
        "A. Sales prices.(100%)",
        "B. Standard prices.(100%)",
        "C. Discount prices.",
        "D. Product prices.",
        "E. List prices.(100%)",
      ],
      answer: "A,B,E",
      title: "Question 19",
      explanation: "",
    },
    {
      content:
        "The administrator at Universal Containers has been asked to create an account management dashboard displaying opportunities and activities for each of its top five clients.\nWhich dashboard feature should the Administrator use to meet this requirement?",
      options: [
        "A. Joined reports on a dashboard",
        "B. Matrix reports on a dashboard",
        "C. Dynamic dashboard",
        "D. Dashboard Filter",
      ],
      answer: "C",
      title: "Question 20",
      explanation: "",
    },
    {
      content:
        "An administrator at Cloud kicks recently built a screen flow in a sandbox that creates a case and follow-up task. When the flow runs in the sandbox, it works just as expected. When tested in production, the flow errors when creating the records.\nChoose 2 answers",
      options: [
        "A. Change the Default Case Creator to the user's manager.",
        "B. Change the user experiencing the issue to the System Administrator profile.",
        "C. Open the flow In Debug mode and Run the Flow as another user.",
        "D. Log in as another user and run the flow.",
      ],
      answer: "C,D",
      title: "Question 21",
      explanation: "",
    },
    {
      content:
        "Ursa Major Solar's administrator has configured multiple record-triggered flows to run before or after the record is saved on the Account object.\nWhat should the administrator consider when a record-triggered flow executes first?",
      options: [
        "A. The flow with the longest execution time will execute first.",
        "B. The flow with the shortest execution time will execute first.",
        "C. Assign the highest priority to the record-triggered flow which should execute first.",
        "D. The order in which those flows are executed is not guaranteed.",
      ],
      answer: "C",
      title: "Question 22",
      explanation: "",
    },
    {
      content:
        "Universal Containers has a Positions object that represents job Positions and a Applications object that represent people that have applied to the position. The Job Application object has a lookup to position. They want to run a report that shows all Positions that do NOT have any child job Applications.\nWhich solution would meet the requirements?",
      options: [
        "A. Use a custom report type that only displays job Application without Positions.",
        "B. Use the standard Job Application with Position report type.",
        "C. Use the standard Position without job Application report type.",
        "D. Use the standard Position report type with a cross filters.",
      ],
      answer: "A",
      title: "Question 23",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks has created a new flow that deletes records.\nWhat should the administrator consider when testing the flow?",
      options: [
        "A. Even if the flow is inactive, debugging the flow will delete the test record.",
        "B. Flows with delete elements cannot be debugged by the Flow debugged tool.",
        "C. Flow with delete elements need to ne inactivate to ensure that the test record is not actually deleted.",
        "D. Record deleted by Flow when debugging are hard deleted.",
      ],
      answer: "A",
      title: "Question 24",
      explanation: "",
    },
    {
      content:
        'What are the different ways a Visual Workflow "flow" can be deployed? (Choose three answers.) * (1 Point)',
      options: [
        "A. Visualforce page",
        "B. Custom link",
        "C. Field Updates",
        "D. Custom button",
        "E. Apex Trigger",
      ],
      answer: "A,B,D",
      title: "Question 25",
      explanation: "",
    },
    {
      content:
        "Which two ways can an administrator review the page performance for a Lightning record page?\nChoose 2 answers",
      options: [
        "A. Analyze Button",
        "B. Activation Button",
        "C. Pages Menu",
        "D. Lightning Usage App",
      ],
      answer: "A,D",
      title: "Question 26",
      explanation: "",
    },
    {
      content:
        "Which of the following is NOT true about article types in Salesforce Knowledge? * (1 Point)",
      options: [
        "A. An organization must have 2 article types to enable Knowledge.",
        "B. Article Types may include attachments.",
        "C. Article Types should enable 'actionable' content.",
        "D. Article Types are typically short HTML documents.",
      ],
      answer: "A",
      title: "Question 27",
      explanation: "",
    },
    {
      content:
        "A user is trying to add a product to an opportunity and wants to select a price book to reflect the correct price for the customer. They are sure they have access to several different price books but the option to choose which one is missing.\nWhat should an administrator do to resolve the issue?",
      options: [
        "A. Add the Choose Price Book button on the Lightning page.",
        "B. Add the Choose Price Book button on the Product Related List of the Opportunity layout.",
        "C. Add the Choose Price Book button on the Detail section of the Opportunity layout.",
        "D. Add the Choose Price Book button on the Detail section of the Product layout.",
      ],
      answer: "B",
      title: "Question 28",
      explanation: "",
    },
    {
      content:
        "An administrator wants to allow users who are creating leads to have access to the find duplicates button.\nWhich lead object-level permission will the administrator need to provide to these users?",
      options: ["A. View All", "B. Delete", "C. Read and Edit", "D. Merge"],
      answer: "B",
      title: "Question 29",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants to assign a task due date on one of two fields. Estimated Shipping Date or Client Need By Date, which is further in the future.\nWhich two combined automation tools should the administrator use to create the task record and assign based on date criteria?\nChoose 2 answers",
      options: [
        "A. Design an approval process to capture the furthest date.",
        "B. Configure a workflow to create the task.",
        "C. Create a formula capture the MAX date.",
        "D. Make a Process Builder to create the task.",
      ],
      answer: "B,C",
      title: "Question 30",
      explanation: "",
    },
    {
      content:
        "AW Computing has been advertising a new keyboard that was released at the beginning of the month. The sales team has an additional incentive to add the keyboards to every sale. The administrator already added the product to Salesforce but the reps are unable to select the product on the opportunity.\nWhich two options should an administrator check to ensure the product is available?\nChoose 2 answers",
      options: [
        "A. Confirm the correct price book is selected on the opportunity.",
        "B. Verify the product has a start date entered.",
        "C. Ensure the product is associated with the correct price book.",
        "D. Make sure the price book Is in the company currency.",
      ],
      answer: "A,C",
      title: "Question 31",
      explanation: "",
    },
    {
      content:
        "An administrator is receiving cases that users are getting logged out of Salesforce without notice.\nWhat should the administrator do to address this issue?",
      options: [
        "A. Remove the session timeout settings.",
        "B. Select force logout on session timeout.",
        "C. Enable Remember me until logout.",
        "D. Deselect disable session timeout warning popup.",
      ],
      answer: "D",
      title: "Question 32",
      explanation: "",
    },
    {
      content:
        "What should an administrator consider when setting up and maintaining salesforce knowledge? choose 3",
      options: [
        "A. Article version numbers must be assigned by a knowledge manager for tracking.",
        "B. Data category visibility is assigned through roles and profiles.",
        "C. solution category browsing must be enabled in solution settings.",
        "D. knowledge settings must be configured to allow users to create an article from a case",
        "E. Enabling knowledge on a user record requires licensing.",
      ],
      answer: "B,D,E",
      title: "Question 33",
      explanation: "",
    },
    {
      content:
        "Sales representatives are reporting trouble syncing quotes with their related opportunities.\nWhat is a possible explanation for this problem? Choose two",
      options: [
        "A. The quote contains an archived list price.",
        "B. The attached currency is no longer active.",
        "C. The user does not have Edit permissions on the quote.",
        "D. The quote is attached to a closed opportunity.",
      ],
      answer: "B",
      title: "Question 34",
      explanation: "",
    },
    {
      content:
        "What would cause are quired field to not be populated on some records? Choose 2 answers. * (1 Point)",
      options: [
        "A. The field is hidden",
        "B. The field is protected by field level security",
        "C. The field is set to Read Only",
        "D. The field is not in the page layout",
      ],
      answer: "C,D",
      title: "Question 35",
      explanation: "",
    },
    {
      content:
        "How would you configure a profile to find duplicate records? * (1 Point)",
      options: ["A. Delete", "B. merge", "C. view all", "D. read,edit"],
      answer: "C",
      title: "Question 36",
      explanation: "",
    },
    {
      content:
        "AW Computing it running a special bundle deal on monitors and keyboards. Normally, discounts need VP approval, but this special bundle is pre-approved.\nWhat should the administrator recommend for these requirements?",
      options: [
        "A. Enable Subscriptions.",
        "B. Implement CPQ.",
        "C. Remove the approval process.",
        "D. Create a separate price book.",
      ],
      answer: "B",
      title: "Question 37",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks (CK) has e sneaker maintenance plan that It Includes with all orders for Its new line of Bluetooth-enabled custom sneakers. The sneaker maintenance plan gives each customer 6 months of phone support in case they have Issues with their new sneakers. The administrator at CK is having a hard time keeping up with the work associated with managing the maintenance plan.\nWhat should the administrator do to help manage the plan?",
      options: [
        "A. Use Flow to automatically create and assign entitlements.",
        "B. Set up and configure entitlement templates.",
        "C. Ensure milestones are in place for the maintenance plan.",
        "D. Create a support process for the maintenance plan.",
      ],
      answer: "B",
      title: "Question 38",
      explanation: "",
    },
    {
      content:
        "When using Customizable Forecasts, which forecast category is not included in the forecast? * (1 Point)",
      options: ["A. Closed", "B. Omitted", "C. Best Case", "D. Pipeline"],
      answer: "B",
      title: "Question 39",
      explanation: "",
    },
    {
      content:
        "How can an administrator meet this requirement' Choose 2 answers",
      options: [
        "A. Select the 'Restrict the content types available in the library\" checkbox.",
        "B. Add members to the library who are users or members of public groups.",
        "C. Add the default content type to the selected Content Types list.",
        "D. Add the Related Content related list to the page layout for the associated object",
      ],
      answer: "A,B",
      title: "Question 40",
      explanation: "",
    },
    {
      content:
        "A user started to work remotely. They are having an Issue logging in.\nWhat could be the issue?",
      options: [
        "A. They are signing in from a mobile device.",
        "B. The login session has expired for this user.",
        "C. The time zone for the profile is outside of login hours.",
        "D. The user Is not In the IP range for their profile.",
      ],
      answer: "D",
      title: "Question 41",
      explanation: "",
    },
    {
      content:
        "An auto-response rule sends en email using Template when the field Case Source Is 'email' and Template when Case Source is blank. A Process Builder updates Case Source to 'email' when a case is created using Email-to-Case and to web' when a case Is created using Web-to-Case. Otherwise, Case Source Is blank.\nWhat will occur when a case is created from an Incoming email?",
      options: [
        "A. An email la sent out using Template and then Case Source updates to 'email'.",
        "B. An email is sent out using Template and then Case Source updates to email'.",
        "C. Case Source updates to 'email' and an email is sent out using Template2.",
        "D. Case Source updates to email and an email Is sent out using Template1.",
      ],
      answer: "A",
      title: "Question 42",
      explanation: "",
    },
    {
      content:
        "Which three capabilities should an administrator consider about change sets?\nChoose 3 answers.",
      options: [
        "A. To use change sets, at least one Inbound and one outbound connection must exist.",
        "B. When a change set is deployed to production, by default, all unmanaged Apex tests will automatically be run.",
        "C. When custom fields are added to a change set, field-level security is automatically included.",
        "D. When a component is added to a change set, all dependent components automatically get added.",
        "E. There is a feature that allows the user to validate a change set before deploying it.",
      ],
      answer: "A,C,E",
      title: "Question 43",
      explanation: "",
    },
    {
      content:
        "The administrator at Cloud Kicks recently replaced several case workflow rules with a single before save flow.\nSince this change, some cases are routing In unexpected ways.\nWhat could be the cause or the charges to routing?",
      options: [
        "A. Assignment rules no longer reference the correct fields.",
        "B. Multiple automation tools have been used and the automation is executed in a different order.",
        "C. The flow precedes assignment rules; workflow rules are after assignment rules.",
        "D. The old workflow rules are still active and impacting routing.",
      ],
      answer: "C",
      title: "Question 44",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks wants its sales reps to always use the same full zip code format with a hyphen where applicable.\nWhat should the administrator implement to help ensure consistent formatting?",
      options: [
        "A. Edit the standard field length to five characters.",
        "B. Create a REGEX function to use in a validation rule on the field.",
        "C. Add a help text instructing the sales rep on how to enter this field.",
        "D. Add a quick create function for the sales reps to use.",
      ],
      answer: "B",
      title: "Question 45",
      explanation: "",
    },
    {
      content:
        "Which actions can you add to a milestone? (Choose three answers.) * (1 Point)",
      options: [
        "A. Violation actions",
        "B. Repeat actions",
        "C. Warning actions",
        "D. Success actions",
      ],
      answer: "A,C,D",
      title: "Question 46",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks call center agents have given their manager feedback that It takes too long to find relevant articles to answer questions on customer cases. The call center manager has asked the administrator to improve suggestions displayed to agents in the Knowledge component on Cases.\nWhich setting should the administrator use to meet the requirement?",
      options: [
        "A. Highlights and Snippets",
        "B. Turn off auto-complete keyword search",
        "C. Enable Einstein Search",
        "D. Selected Case Fields",
      ],
      answer: "C",
      title: "Question 47",
      explanation: "",
    },
    {
      content:
        "A sales rep at Ursa Major Solar was assigned to a role under their manager and is the record owner of several opportunities; however, the sales rep is missing from the manager's forecast.\nWhat should the administrator review to solve this issue?",
      options: [
        "A. Allow Override Forecasts",
        "B. Allow Forecasting",
        "C. Enable owner adjustment",
        "D. Enable manager adjustments",
      ],
      answer: "D",
      title: "Question 48",
      explanation: "",
    },
    {
      content:
        "Universal Containers would like applicants to apply for multiple positions, tracking how many applicants have applied and how many positions each individual applicant has applied for. To do this, the administrator will create a Job Application junction object between Applicant and Position objects. Why will this action meet the requirement ?",
      options: [
        "A. The junction object allows the administrator to add a workflow rule to update fields on the Position and Applicant objects.",
        "B. The Job Application object as a master to Positions and Applicant objects will allow rollup summary fields on the Positions and Applicant objects.",
        "C. A lookup relationship on the Applicant object with Position as the master provides rollup summary fields without code.",
        "D. The junction object allows a many-to-many relationship and also roll-up summary fields on the parent objects.",
      ],
      answer: "D",
      title: "Question 49",
      explanation: "",
    },
    {
      content:
        "What should an administrator consider when setting up salesforce entitlements? choose 2",
      options: [
        "A. The entitlement model dictates the level of detail for the entitlement process.",
        "B. The service level agreements related list on a case gives support agents access to contract details.",
        "C. Salesforce entitlements require an entitlement process with milestones and milestone actions.",
        "D. Salesforce entitlements require service cloud user feature licensing.",
      ],
      answer: "B,C",
      title: "Question 50",
      explanation: "",
    },
    {
      content:
        "Universal Containers' Support team is growing globally, and the manager has inquired about implementing Omni-Channel. The team supports multiple products that require complex expertise across multiple languages.\nWhich routing option should the administrator recommend to ensure the right cases get to the correct agents for resolution?",
      options: [
        "A. Case Assignment Rules",
        "B. Translation Workbench",
        "C. Queue-Based Routing",
        "D. Skills-Based Routing",
      ],
      answer: "D",
      title: "Question 51",
      explanation: "",
    },
    {
      content:
        "Universal Containers has a white-glove service level for its top customers.\nAfter a case is created, how should the administrator allow the agent to see the number of hours remaining before the service agreement is overdue?",
      options: [
        "A. Assign an independent milestone.",
        "B. Create sequential milestones.",
        "C. Include a Milestone formula held",
        "D. Add Milestone Tracker Time com",
      ],
      answer: "A",
      title: "Question 52",
      explanation: "",
    },
    {
      content:
        "Dylan has submitted a vacation request for approval by his manager, but the manager is not receiving any email alerts. What can you use in order to troubleshoot the issue? Choosetwoanswers.* (1 Point)",
      options: [
        "A. The Setup Audit Trail",
        "B. A Time-Based Workflow",
        "C. Debug Log",
        "D. Email log",
      ],
      answer: "C,D",
      title: "Question 53",
      explanation: "",
    },
    {
      content:
        "The VP of sales wants to require that the next step field is always updated when an opportunity stage is changed.\nHow can this process be automated?",
      options: [
        "A. Create a workflow rule with the following formula:\n         AND(ISCHANGED(StageName),NOT(ISCHANGED(NextStep))",
        "B. Create a validation rule with the following formula:\n         AND(ISCHANGED(StageName),NOT(ISCHANGED(NextStep))).",
        "C. Create a workflow rule with the following formula:\n         AND(ISCHANGED(ISPICKVAL(StageName)),ISCHANGED(NextStep)).",
        "D. Create a validation rule with the following formula:\n         AND(ISCHANGED(ISPICKVAL(StageName)),NOT(ISCHANGED(NextStep))).",
      ],
      answer: "C",
      title: "Question 54",
      explanation: "",
    },
    {
      content:
        "A sales rep at Ursa Major Solar realized that the wrong price book was selected for an opportunity- How can the sales rep change the price book on the opportunity?",
      options: [
        "A. The change can be made through the desktop site.",
        "B. Once selected, the price book can be updated via the forecasting tab.",
        "C. The change can be made through the mobile app.",
        "D. Once selected, the price book is locked on the opportunity.",
      ],
      answer: "A",
      title: "Question 55",
      explanation: "",
    },
    {
      content:
        "The Sales Manager at Universal Containers would like a dashboard to view each of the sales representative's opportunities, accounts, and related cases. What is a recommended solution?",
      options: [
        'A. Create a dynamic dashboard and insure the sales manager has the "View My Team\'s Dashboard" permission.',
        "B. Create a dashboard and add filters for users, opportunities, accounts, and cases.",
        "C. Create an individual dashboard for each sales representative with opportunity, account, and case components.",
        "D. Create a dynamic dashboard and add filters for opportunities, accounts and cases.",
      ],
      answer: "A",
      title: "Question 56",
      explanation: "",
    },
    {
      content:
        'Cloud Kicks has a requirement to display sensitive data only to appropriate users. The amount m the Salary field on the User object should display data only when the user record is being viewed by the user or by users with the MR profile. For all other users viewing the user record, the Salary field should display the word\n"Confidential* as text in the field.\nWhat should the administrator to fulfill this requirement?',
      options: [
        "A. Validation Rule",
        "B. Formula field",
        "C. Page Layout",
        "D. Process Builder",
      ],
      answer: "D",
      title: "Question 57",
      explanation: "",
    },
    {
      content:
        "Universal Containers categorizes its accounts with one of two status values - Prospect or Customer. The administrator wants to automatically change the value from Prospect to Customer when an opportunity is won. Which two actions should the administrator take to accomplish this?\nChoose 2 answers",
      options: [
        "A. Create an account workflow rule that updates the Account Status field.",
        "B. Create an opportunity workflow rule that updates the Account Status field.",
        "C. Use an Apex trigger to update the Account Status field.",
        "D. Use Visualforce to update the Account Status field.",
      ],
      answer: "B,C",
      title: "Question 58",
      explanation: "",
    },
    {
      content:
        "The AW Computing administrator team does significant amounts of work around process automation and ensuring data integrity. When an administrator created a new validation rule in production, the development team complained that their deployment to production failed.\nWhat should be implemented to prevent this conflict from happening?",
      options: [
        "A. Review the setup audit trail prior to changes.",
        "B. Build automation and validation rules using screen flows.",
        "C. Test changes in a shared sandbox.",
        "D. Refresh the full copy sandbox daily.",
      ],
      answer: "C",
      title: "Question 59",
      explanation: "",
    },
    {
      content:
        "Salesforce Knowledge offers administrators the ability to fully customize the way an article type displays to an end user. * (1 Point)",
      options: ["A. False", "B. True"],
      answer: "B",
      title: "Question 60",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks (CK) has deployed several new custom apps that use Lightning Web components. The administrator is now concerned that they may need to make some adjustments to CK's org to make it more secure.\nWhich tools should the administrator use to expose possible security risks within a Lightning web component?",
      options: [
        "A. Salesforce Optimizer",
        "B. Health Check",
        "C. Master Encryption Keys",
        "D. Self-signed Certificates",
      ],
      answer: "B",
      title: "Question 61",
      explanation: "",
    },
    {
      content:
        'A sales manager is receiving an "insufficient privileges" error when viewing a contact. The contact owner is under the manager in the role hierarchy. What is the reason the sales manager is not able to view the contact?',
      options: [
        "A. The contact sharing settings are controlled by the parent, and the account owner is not under the sales manager's role.",
        "B. The contact owner has not selected the option to share contacts with others in the role hierarchy.",
        "C. The contact sharing settings are private, so access to the record is limited to the contact owner and system administrator.",
        "D. The account sharing settings are controlled by the parent, and the account owner is not under the sales manger's role.",
      ],
      answer: "C",
      title: "Question 62",
      explanation: "",
    },
    {
      content:
        "An administrator has been asked to create a replica of the production organization. The requirement states that existing fields, page layouts, record types, objects, and data contained in the fields and objects need to be available in the replica organization. How can the administrator meet the requirement?",
      options: [
        "A. Create a metadata sandbox",
        "B. Create a Full Sandbox",
        "C. Create a developer sandbox",
        "D. Create a configuration-only Sandbox",
      ],
      answer: "B",
      title: "Question 63",
      explanation: "",
    },
    {
      content:
        "A sales rep needs to help cross-sell an opportunity but is unable to make updates on the record or update the opportunity team.\nWhich two options would be required for a sales rep to add a rep to the opportunity team?\nChoose 2 answers",
      options: [
        "A. Transferred ownership of the Opportunity to the sales rep",
        "B. A role above the Opportunity owner in the role hierarchy",
        "C. A permission with Edit access on the Account object",
        "D. Transferred ownership of the Account to the sales rep",
      ],
      answer: "B,C",
      title: "Question 64",
      explanation: "",
    },
    {
      content:
        "The salts team at Universal Containers has asked the administrator to build functionality to automatically update the account checkbox field 'Opportunity Created' to checked when at least one related opportunity has been created.\nWhat feature should the administrator use to build this functionality?",
      options: [
        "A. Screen flow",
        "B. Assignment rule",
        "C. Record-triggered flow",
        "D. Workflow rule",
      ],
      answer: "C",
      title: "Question 65",
      explanation: "",
    },
    {
      content:
        "Whatarethesimilaritiesofcustomizableandcollaborativeforecasting? Choose two answers. * (1 Point)",
      options: [
        "A. Monthly and Quarterly Forecasts",
        "B. Territory management",
        "C. Submit Forecast",
        "D. Quotas",
      ],
      answer: "A,D",
      title: "Question 66",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks (CK) has recently decided to use Collaborative Forecasting to optimize the accuracy and efficiency of its sales cycle. The CK sales operation manager wants to enable supervisors and their subordinates to make changes to any forecast amounts that inaccurately reflect their current pipeline.\nWhich two settings should be enabled to meet this requirement?\nChoose 2 answers",
      options: [
        "A. Owner adjustments",
        "B. Payout adjustments",
        "C. Manager adjustments",
        "D. Revenue adjustments",
      ],
      answer: "A,C",
      title: "Question 67",
      explanation: "",
    },
    {
      content:
        "A change set has already been uploaded but changes need to be made to its contents.\nwhat is a best practice for adding these changes?",
      options: [
        "A. clone the change set, add needed change set and upload again.",
        "B. Delete existing change set, add changes to new change set, upload change set",
        "C. Manually make changes in change set destination org.",
        "D. Edit existing change set, add needed changes, upload again.",
      ],
      answer: "A",
      title: "Question 68",
      explanation: "",
    },
    {
      content:
        "The sales agents at DreamHouse Realty have a profile that allows them to import records for a custom object called House. The agents only need to make imports occasionally and typically Import around 100 new records at a time.\nWhat tool should the agents use to upload records?",
      options: [
        "A. Bulk API",
        "B. Date Xmport Wizard",
        "C. Data Loader",
        "D. Apex",
      ],
      answer: "B",
      title: "Question 69",
      explanation: "",
    },
    {
      content:
        "Which three features are supported in delegated administration?",
      options: [
        "A. Set org-wide sharing defaults",
        "B. Unlock non-Communities users",
        "C. Unlock Communities users",
        "D. Manage custom objects",
        "E. Create and edit users",
      ],
      answer: "B,D,E",
      title: "Question 70",
      explanation: "",
    },
    {
      content:
        "An administrator at Cloud Kicks has been asked to reduce the file size of full data exports in order to have quicker exports.\nWhich three recommendations should the administrator make?\nChoose 3 answers",
      options: [
        "A. Deselect 'Include images, documents, and attachments' in the export.",
        "B. Request a backup file every 5 days.",
        "C. Reduce the amount of objects per export.",
        "D. Keep deleted record counts to a minimum.",
        "E. Unselect the recycle bin in the object export option.",
      ],
      answer: "A,C,D",
      title: "Question 71",
      explanation: "",
    },
    {
      content:
        "Universal Containers has found duplicate contacts in Salesforce. The sales team administrator prevent duplicate records from being created.\nWhich two ways should the administrator customize duplicate management?\nChoose 2 answers",
      options: [
        "A. Modify the Global Picklist Value Sets.",
        "B. Configure custom duplicate rules.",
        "C. Create custom matching rules.",
        "D. Set up mobile duplicate alerts.",
      ],
      answer: "B,C",
      title: "Question 72",
      explanation: "",
    },
    {
      content:
        "North Trail Outfitters want to automate the assignment of territories to opportunities.\nWhich two features are needed to meet this requirement.",
      options: [
        "A. Create Assignment Rules",
        "B. Enable filter-based Opportunity Territory Assignment",
        "C. Create an Apex Class",
        "D. Enable opportunity owner-based sharing",
      ],
      answer: "A,B",
      title: "Question 73",
      explanation: "",
    },
    {
      content:
        "Which two values roll up the Hierarchy to the manager for both Customizable and Collaborative Forecasts?\nChoose 2 answers",
      options: [
        "A. Expected revenue",
        "B. Product quantity",
        "C. Opportunity amount",
        "D. Quota amount",
      ],
      answer: "C,D",
      title: "Question 74",
      explanation: "",
    },
    {
      content:
        "Universal Containers' support team needs to track service level agreements for customers. Today, they manually look up contracts by name when a customer calls.\nHow should an administrator automate this process?",
      options: [
        "A. Enable Case Feed and add a Contracts custom publisher to the Case Feed layout.",
        "B. Create a private Chatter group for customers with high-priority service level agreements.",
        "C. Enable entitlements and add the tabs for entitlements and service contracts.",
        "D. Configure a workflow rule that sends an email alert of old cases to the support manager.",
      ],
      answer: "C",
      title: "Question 75",
      explanation: "",
    },
    {
      content:
        "After an Administrator has refreshed a sandbox, what behavior should users expect to see in the sandbox?",
      options: [
        "A. All new data since the last refresh will be added to the existing information in the sandbox",
        "B. Metadata changes since the last refresh will be added to the existing information m the sandbox",
        "C. Users in the sandbox that do not exist in production will no longer exist in the sandbox.",
        "D. Users in production will now be able to receive emails sent out from the sandbox.",
      ],
      answer: "A",
      title: "Question 76",
      explanation: "",
    },
    {
      content:
        "The administrator at Ursa Major Solar has set up IT policies for all user passwords to be a minimum length of\n3 characters and have an expiration period of 90 days. The security team recently decided that administrators of any system should have a 15-character minimum password with a 30-day expiration period.\nWhere should the administrator make this change?",
      options: [
        "A. Organi2ation-wide password policies",
        "B. Session Settings on the User record",
        "C. Password Policies on the System Administrator profile .",
        "D. Password complexity requirements on the permission set",
      ],
      answer: "C",
      title: "Question 77",
      explanation: "",
    },
    {
      content: "What is a capability of Territory management? Choose 2 answers",
      options: [
        "A. Territory hierarchy replaces the role hierarchy for sharing",
        "B. Support for complex and frequently changed sales organization structures",
        "C. The ability to use opportunity criteria to expand a private sharing model",
        "D. The ability to use account criteria to expand a private sharing model",
      ],
      answer: "B,D",
      title: "Question 78",
      explanation: "",
    },
    {
      content:
        "A team is assigned to standardize processes across internal teams for Salesforce Knowledge. The team finds it difficult to effectively group the articles due to the slightly different verbiage used by each of the Support teams, which makes searching and search results inconsistent.\nWhich two customizations should an administrator use to allow for a better experience when searching?\nChoose 2 answers",
      options: [
        "A. Configure new page layout.",
        "B. Create search activity report with promoted search terms.",
        "C. Highlight relevant article text within search results.",
        "D. Set up synonym groups.",
      ],
      answer: "C,D",
      title: "Question 79",
      explanation: "",
    },
    {
      content:
        "which deployment tool can be used to delete metadata from an organization?\nchoose 2",
      options: [
        "A. Change Sets.",
        "B. Unmanaged packages.",
        "C. Force.com IDE.(100%)(developer console)",
        "D. force.com Migration Tool.",
      ],
      answer: "C,D",
      title: "Question 80",
      explanation: "",
    },
    {
      content:
        "While reviewing the quarterly forecast, a manager notices the newest team member is missing in the forecast- After looking at a few the manager can see where the sales representative has closed six opportunities this month and has three additional opportunities m progress.\nWhere should the administrator start troubleshooting?",
      options: [
        "A. Verify the app the user is selecting and adjust tabs as needed.",
        "B. Assign View All Forecasting permission to the sales profile.",
        "C. Create a permission set with View All Forecasting permission.",
        "D. Chide Allow Forecasting under general Information for user.",
      ],
      answer: "B",
      title: "Question 81",
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
      title: "Question 82",
      explanation: "",
    },
    {
      content:
        "A user reports that a field can no longer be seen in a given page layout. What can a system administrator use in order to troubleshoot this? * (1 Point)",
      options: [
        "A. Perform a Field Audit",
        "B. View the Setup Audit Trail",
        "C. Use Field History Tracking",
        "D. View the system log",
      ],
      answer: "B",
      title: "Question 83",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks is a large company with many divisions. Some divisions have a higher turnover, so each division wants to be able to create and manage users only within their division.\nWhat should the administrator do to set this up?",
      options: [
        "A. Create a permission set group for the division leaders.",
        "B. Customize and assign profiles for the division teams.",
        "C. Set up delegated administrators for the division leaders.",
        "D. Assign a flat territory role hierarchy for the divisions.",
      ],
      answer: "C",
      title: "Question 84",
      explanation: "",
    },
    {
      content:
        "At Cloud Kicks, the Sales team uses a specific dashboard to see how they are doing daily. The team has asked the administrator for an easier way to see this dashboard.\nWhat should the administrator recommend?",
      options: [
        "A. Add the dashboard to the Sales team's home page.",
        "B. Email the dashboard to the Sales Team every morning.",
        "C. Update the Sales team's app with a new dashboard.",
        "D. Create a custom app with a dashboard.",
      ],
      answer: "A",
      title: "Question 85",
      explanation: "",
    },
    {
      content:
        "An administrator at Universal Containers hat completed a new set of validation rule along with a Process Builder in a sandbox and wants to move these changes to production via a change set but they are currently unable to do so.\nWhat are two configurations an administrator needs before they are able to deploy changes? Choose 2 answers",
      options: [
        "A. The Sandbox must be configured to Allow Outbound Changes to Production",
        "B. Create the Validation Rules in Production because they can't be deployed via Change Sets",
        "C. The Production Org must be configured to Allow inbound Changes from the sandbox",
        "D. The Deploy Change Sets permission must be granted",
      ],
      answer: "A,C",
      title: "Question 86",
      explanation: "",
    },
    {
      content:
        "Universal Containers has a requirement to report on opportunities where the probability has dropped beneath\n50%. The administrator has created a custom checkbox as a\nway to identify these records.\nWhat else should the administrator do to meet this requirement? * (1 Point)",
      options: [
        "A. Create a workflow rule that updates the field when the probability drops below 50%",
        "B. Create an approval process that submits the opportunity for approval when the custom checkbox is true",
        "C. Enable field history tracking on the field and include the history in the report filter",
        "D. Build a validation rule that displays an error",
      ],
      answer: "A",
      title: "Question 87",
      explanation: "",
    },
    {
      content:
        "An administrator at AW Computing is trying to track the login history for a specific user. The AW Computing org has 150,000 users and multi-factor authentication (MFA) is enabled and enforced for all users. In reviewing the Identity Verification History data, the administrator is unable to find any information for the mentioned user. The user used to log in regularly but has been inactive this quarter.\nWhich two reasons explain why the user's data is missing from Identity Verification History?\nChoose 2 answers",
      options: [
        "A. Up to 20,000 records of users' identity verification attempts are stored.",
        "B. Identity Verification History stores the last year's worth of data.",
        "C. User belongs to a specific role for which identity verification data is not stored.",
        "D. The last 6 months worth of data is stored in the Identity Verification History.",
      ],
      answer: "A,D",
      title: "Question 88",
      explanation: "",
    },
    {
      content:
        "AW Computing has a new requirement from its security team where audit information relating to an account must be recorded in a new custom object called Audit. Audit records need to be preserved for 10 years and only accessible by the audit team.\nWhat relationship should be used to relate the Audit object to the Account object?",
      options: ["A. Self", "B. Many-To-Many", "C. Lookup", "D. Master-Detail"],
      answer: "D",
      title: "Question 89",
      explanation: "",
    },
    {
      content:
        "How can additional permissions be given to a user without editing the profile itself? Choose two answers. * (1 Point)",
      options: [
        "A. role hierarch",
        "B. delegated administration",
        "C. permission set",
        "D. sharing rule",
      ],
      answer: "B,C",
      title: "Question 90",
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
      title: "Question 91",
      explanation: "",
    },
    {
      content:
        "What should a system administrator consider before using territory management? Choose three answers. * (1 Point)",
      options: [
        "A. Once enabled it cannot be disabled",
        "B. Forecasts are derived from Territory hierarchy not Role hierarchy",
        "C. You need to contact Salesforce to have it enabled",
        "D. It does not working parallel with sharing functions",
      ],
      answer: "A,B,C",
      title: "Question 92",
      explanation: "",
    },
    {
      content:
        "What should an administrator consider when setting up and maintaining Salesforce Knowledge? Choose three answers. * (1 Point)",
      options: [
        "A. Article version numbers must be assigned by a Knowledge Manager for tracking",
        "B. Solution category browsing must be enabled in Solution settings.",
        "C. Data category visibility is assigned through roles and profiles",
        "D. Enabling certain Knowledge features on a user record requires licensing.",
        "E. Knowledge settings must be configured to allow users to create an article from a case",
      ],
      answer: "C,D,E",
      title: "Question 93",
      explanation: "",
    },
    {
      content:
        'The sales team has requested that a new field be added to accounts called Current Customer. The default value will be No and will change "Yes" if any related opportunity is successfully closed as won.\nWhat can an admin do to meet this requirement?',
      options: [
        "A. Configure current customer as a roll-up summary field that will recalculate whenever an opportunity is won",
        "B. Configure current customer as a text field and use an approval process to recalculate its value",
        "C. Use an Apex trigger on the Account object that sets the Current customer field when an opportunity is won.",
        "D. Use a workflow rule on the Opportunity object that sets the current customer filed an opportunity is won.",
      ],
      answer: "C",
      title: "Question 94",
      explanation: "",
    },
    {
      content:
        "When configuring a change set, which two practices should an administrator adhere to in order to ensure a successful deployment to production?\nChoose 2 answers",
      options: [
        "A. Add permissions and access settings to outbound change sets in addition to the dependent component list.",
        "B. Run deployment validations on the change set in the sandbox prior to uploading to production.",
        "C. When deploying a new record type, ensure the new record type is the only component in the change set.",
        "D. Clone a change set to add forgotten dependent components to an uploaded change set.",
      ],
      answer: "B,D",
      title: "Question 95",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks has Service end Soles Manager roles that need to be able to see a I Accounts. Currently, they each have their own custom profile. The organization-wide defaults are set to Private and a sharing rule share access to Accounts to the sales and service teams based on criteria.\nWhat should the administrator do to allow the service and sales Manager to sec all Accounts?",
      options: [
        "A. Create a permission set with view All to Accounts and assign it to the Service and Sales Managers.",
        "B. Move the Service and Sales Managers higher in the role hierarchy.",
        "C. Set the organization-wide default for Accounts to Public Read Only.",
        "D. Configure a custom profile for each manager that gives them view All on Accounts.",
      ],
      answer: "A",
      title: "Question 96",
      explanation: "",
    },
    {
      content:
        "Which two actions could the delegated administrator complete after delegated administration is granted for a custom object? Choose 2 answers",
      options: [
        "A. Create a custom tab for the object",
        "B. Change the relationship with another object.",
        "C. Change organization-wide snaring rules for the object.",
        "D. Add a custom picklist field to the object",
      ],
      answer: "A,D",
      title: "Question 97",
      explanation: "",
    },
    {
      content:
        "A set of Cases records with a specific record type needs to be restricted so that only a Support manager and four Support users have access. What can you do as a system administrator to meet this requirement? * (1 Point)",
      options: [
        "A. Remove the record type access for all users except the 5 mentioned",
        "B. Create a criteria-based sharing rule for the 5 users",
        'C. Givethe"ViewAllData"permissiontothe5mentionedusersusingpermissionsets',
        "D. Create a new profile and assign the 5 users to the new profile",
      ],
      answer: "B",
      title: "Question 98",
      explanation: "",
    },
    {
      content:
        "Recruiters at universal containers wants to associate positions with their related job applications using two custom objects position and job application. a job application must always have a related position. if a position is deleted, the corresponding job applications are deleted.\nwhat type of object relation ship will meet this requirement?",
      options: [
        "A. Lookup",
        "B. junction",
        "C. Master detail",
        "D. Hierarchical",
      ],
      answer: "C",
      title: "Question 99",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks has just released a new Process Builder on the Account in production. The end users keep getting error messages that prevent them from completing their updates to the Account.\nWhich three things should the administrator do to resolve this issue?\nChoose 3 answers",
      options: [
        "A. Fix the Process Builder in a sandbox and migrate the change to production.",
        "B. Deactivate the Process Builder in production.",
        "C. Manually make the updates to the Account as the logged-in user.",
        "D. Review the Error Email for the Process Builder and rectify the issues.",
        "E. Have the users refresh the Account page so they get the current Process Builder.",
      ],
      answer: "A,B,C",
      title: "Question 100",
      explanation: "",
    },
    {
      content:
        "AW Computing sells a variety of software programs for Its customers to choose from. Management wants to ensure that the customer automatically receives phone support when they purchase photo editing. software.\nhow should an administrator meet these retirements?",
      options: [
        "A. Create a flow to attach an entitlement to the asset upon purchase.",
        "B. Add an entitlement template to the product for phone support.",
        "C. Configure a flow to create a milestone co the asset upon purchase.",
        "D. Include a milestone to the product with a term of 365 days for phone support.",
      ],
      answer: "B",
      title: "Question 101",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants to allow its customers to submit support requests across multiple channels.\nIn which two ways can this be accomplished with Salesforce?\nChoose 2 answers",
      options: [
        "A. Enable Chatter Questions in the company's customer Community",
        "B. Offer a Chat button on the company website.",
        "C. Expose the case feeds option on the company's website.",
        "D. Enable the Service Cloud Console app on the company's website.",
      ],
      answer: "B,C",
      title: "Question 102",
      explanation: "",
    },
    {
      content:
        "Northern Trail Outfitters (NTO) wants to start using Salesforce for its HR recruiting process. NTO needs to ensure that every application is linked to both a job posting and an applicants can apply for more one job posting, and each job posting can have more than one application.\nHow should an administrator configure the objects?",
      options: [
        "A. Configure Job Application as a Junction object with master-detail relationship to both Application and Job Postings.",
        "B. Add applicants as a junction object with master-detail relationship to both Posting and Job Applications.",
        "C. Create Application as a junction object with a master- detail relations to Job Postings and a lookup relationship to Job Applications.",
        "D. Make Job Application as a junction object with a master-detail relationship to Applications and a lookup relationship to Job Posting.",
      ],
      answer: "A",
      title: "Question 103",
      explanation: "",
    },
    {
      content:
        "The administrator at Universal Containers does a soft launch of the Salesforce Authenticator app and allows users to optionally use it to log In. The administrator would now like to look at how many users have successfully used it since It was rolled out.\nWhat are two ways the administrator can get this Information?\nChoose 2 answers",
      options: [
        "A. Run a session setting report, specifying login methods by user.",
        "B. Create a new view In Identity Verification History, specifying Method.",
        "C. Export Login History and filter based off of Authentication Method Reference,",
        "D. Open the Login Access Policies In Setup which shows how many users are using MFA.",
      ],
      answer: "A,D",
      title: "Question 104",
      explanation: "",
    },
    {
      content:
        "Users report that the industry picklist field is no longer visible on account records. What test can an administrator use to troubleshoot the issue?",
      options: [
        "A. Field history tracking",
        "B. Field audit history",
        "C. Debug log",
        "D. Setup audit trail",
      ],
      answer: "D",
      title: "Question 105",
      explanation: "",
    },
    {
      content:
        "which feature is supported in delegated administrator? choose 3",
      options: [
        "A. Manage custom objects",
        "B. set org wide sharing defaults",
        "C. unlock non-communities users",
        "D. unlock communities users",
        "E. create and edit users",
      ],
      answer: "A,C,E",
      title: "Question 106",
      explanation: "",
    },
    {
      content:
        "Universal Containers has a private sharing model. Their field service manager wants to edit Cases owned by the service team but is unable to edit Case records.\nWhich option should an administrator use to solve this issue?",
      options: [
        "A. Create a public group with read/write for cases and Accounts.",
        "B. Update the manager's profile to include edit access to the Case object.",
        "C. Assign the manager a permission set with edit access to the Case object.",
        "D. Set the Organization-Wide Default to public read/write for cases and Accounts.",
      ],
      answer: "C",
      title: "Question 107",
      explanation: "",
    },
    {
      content:
        "The administrator at Cloud Kicks made new fields and page layout adjustments based on new requirements from the service teem. The changes have been built In a sandbox and are ready to be deployed Into production.\nWhet should en administrator do before deploying the change set in production?",
      options: [
        "A. Create the fields and update the page layouts In production.",
        "B. Make a new sandbox based on production to restore changes from.",
        "C. Push the change set to another sandbox to restore from.",
        "D. Request a new sandbox based on the sandbox where the changes were made.",
      ],
      answer: "B",
      title: "Question 108",
      explanation: "",
    },
    {
      content:
        "what action is required before a change set can be deployed from a sandbox environment to a production environment? choose 2",
      options: [
        "A. Install the force.com IDE and configure its settings to work with change sets.",
        "B. Configure the deployment connection in production to allow inbound changes.",
        "C. configure the deployment connection in the sandbox to allow inbound\n         changes.",
        "D. create an outbound change set in the sandbox that includes the components to be moved",
      ],
      answer: "B,D",
      title: "Question 109",
      explanation: "",
    },
    {
      content:
        "An administrator has uploaded a change set from a sandbox to a production organization and would like to add a missing component to the change set before deployment.\nWhat option does the administrator have to modify the change set? Choose 2 answers.",
      options: [
        "A. Edit the change set in the sandbox environment and upload it to production.",
        "B. Create a new change set in the sandbox environment, add all the required components and upload it to production",
        "C. Clone the change set in the sandbox environment, add the component and upload it to production",
        "D. Edit the change set in production, add the component, and use the redeploy option.",
      ],
      answer: "B,C",
      title: "Question 110",
      explanation: "",
    },
    {
      content:
        "The sales manager at Universal Containers would like a dashboard to view each of the sales representative's opportunities, accounts, and related cases.\nWhat is a recommended solution?",
      options: [
        "A. Create an individual dashboard for each sales representative with opportunity, account, and case components.",
        "B. Create a dynamic dashboard and ensure the sales manager has the view My Team's Dashboard permission.",
        "C. Create a dashboard and add filters for users, opportunities, accounts, and cases.",
        "D. Create a dynamic dashboard and add fitters for opportunities, accounts, and cases.",
      ],
      answer: "B",
      title: "Question 111",
      explanation: "",
    },
    {
      content:
        "A sales manager at AW Computing has created a contact record but is missing some of the information to complete the record. The organization-wide default for Accounts is set to Public Read Only, and Contacts are controlled by parent.",
      options: [
        "A. The owner and users below the owner in the role hierarchy",
        "B. Sales manager and system administrator",
        "C. Users above the sales manager in the role hierarchy",
        "D. Who will be able to edit this new contact record?",
        "E. All users in the organization",
      ],
      answer: "A",
      title: "Question 112",
      explanation: "",
    },
    {
      content:
        "How can an administrator ensure article managers use specified values for custom article field?",
      options: [
        "A. Create a record type containing preset values",
        "B. Create different article types for different requirements.",
        "C. Create field dependecies on article types.",
        "D. Create a required field on the article page layout.",
      ],
      answer: "A",
      title: "Question 113",
      explanation: "",
    },
    {
      content:
        "How can you make sure that a field will be visible on 2 profiles only? * (1 Point)",
      options: [
        "A. validation rules",
        "B. Field-Level Security",
        "C. workflow field update",
        "D. create a page layout and hide the field",
      ],
      answer: "B",
      title: "Question 114",
      explanation: "",
    },
    {
      content:
        "How can you, as a System Administrator, enforce standardization of tags in libraries?\nChoosetwoanswers.* (1 Point)",
      options: [
        "A. Change Tagging Field to multi select picklist",
        "B. Guided tags",
        "C. Enable restrictive tagging",
        "D. Enable workflow to send email alert for unnamed tags",
      ],
      answer: "B,C",
      title: "Question 115",
      explanation: "",
    },
    {
      content:
        "DreamHouse Realty (DR) wants to ensure that its data is protected. There have been several recent attempts to phish employees.\nWhat should DR do to help ensure that the user that is logged in is the right user when the running user is trying to view reports and dashboards?",
      options: [
        "A. Require a high assurance session when exporting or printing reports and dashboards.",
        "B. Require a Usemame, Password, and Security Token when logging in.",
        "C. Require MFA when users need to view and export dashboards and reports.",
        "D. Set up an authentication provider for reports and dashboards.",
      ],
      answer: "A",
      title: "Question 116",
      explanation: "",
    },
    {
      content:
        "DreamHouse Realty has a rental team and a real estate team. The two teams have different safes processes and capture different client information on their opportunities.\nHow should an administrator extend the Opportunity object to meet the teams' different needs?",
      options: [
        "A. Use separate record types, page layouts, and sales processes for the Rental and Real Estate Teams.",
        "B. Leverage Opportunities for the Real Estate Team and create a new custom object for the Rental Team Opportunities.",
        "C. Create Opportunity Teams for the Rental and Real Estate Teams and make appropriate fields visible to only the necessary team.",
        "D. Add a section for Rental and a section for Real Estate on the Opportunity Master Record Type to keep the information separate.",
      ],
      answer: "A",
      title: "Question 117",
      explanation: "",
    },
    {
      content:
        "The distributors at Cloud Kicks are eligible for support based on a specific service contract-How should the administrator show this in Salesforce?",
      options: [
        "A. Turn on Service Cloud.",
        "B. Add a service contract to the record.",
        "C. Build a new custom object.",
        "D. Use entitlement management.",
      ],
      answer: "D",
      title: "Question 118",
      explanation: "",
    },
    {
      content:
        "An administrator recently Implemented multi-factor authentication (MFA) with a standard security level selectee. They are receiving cases that users are unable to log in.\nWhat should me administrator do to troubleshoot?",
      options: [
        "A. Reset the user passwords and ask them to try again.",
        "B. Change MF-A to High Assurance.",
        "C. Temporarily disable MFA.",
        "D. Check the session security level required at login on the user profile.",
      ],
      answer: "D",
      title: "Question 119",
      explanation: "",
    },
    {
      content:
        "Users have been given Read/Write access to product support cases through criteria-based sharing rules. A user's profile only has the Read permission for cases.\nWhat can the user expect regarding their ability to edit product support cases?",
      options: [
        "A. The user will only be able to edit cases manually shared with them.",
        "B. The user will be able to edit product support cases.",
        "C. The user will NOT be able to edit product support cases.",
        "D. The user will only be able to edit the cases that they created.",
      ],
      answer: "C",
      title: "Question 120",
      explanation: "",
    },
    {
      content:
        "Ursa Major Solar has a junction object that connects Docs with Solar Panels. The administrator needs users to be able to see all the solar panels that a Dot is related to. Users already have access to the Bot and the Junction, but not the Solar Panel object.\nWhat access docs the user need to be able to see the solar panel records?",
      options: [
        "A. Create permission Is required on both master records.",
        "B. Read permission is required on at least are master record.",
        "C. Read permission is required on both master records.",
        "D. Access permission Is not required on either master record.",
      ],
      answer: "C",
      title: "Question 121",
      explanation: "",
    },
    {
      content:
        "In a two-step approval process where the first step is a hiring manager and second is the appropriate director, which of the following relationship types would a system administrator use to establish a relationship between the two approvers? * (1 Point)",
      options: [
        "A. Sibling relationship",
        "B. Look up relationship",
        "C. Master detail relationship",
        "D. Hierarchical relationship",
      ],
      answer: "D",
      title: "Question 122",
      explanation: "",
    },
    {
      content:
        "Universal Containers created a few new fields on the account object as well as a new section on the page layout in the config sandbox. After positive test results, the administrator created and uploaded a change set with the new fields from the sandbox to production. Unfortunately, the administrator forgot to add the page layout.\nWhich two options can the administrator take to deploy the page layout?\nChoose 2 answers.",
      options: [
        "A. Edit the change set in production to add the new page layout before deploying the change set.",
        "B. Deploy the existing change set. create and deploy a new change set containing the page layout.",
        "C. Add the page layout to the existing change set in the sandbox and upload the change set again.",
        "D. Clone the change set in the sandbox, add the new page layout to it and upload to production.",
      ],
      answer: "B,C",
      title: "Question 123",
      explanation: "",
    },
    {
      content:
        "After setting up field history tracking on the Account object, the administrator for AW Computing wants to retrieve the field history data for analysis.\nhow should the administrator acquire this data?",
      options: [
        "A. Create a report of Accounts and export it to Excel.",
        "B. Query and export the Account History object using Data Loader.",
        "C. Use the Data export service in setup.",
        "D. Create a list view of Account History and print using the Printable View action.",
      ],
      answer: "B",
      title: "Question 124",
      explanation: "",
    },
    {
      content:
        'Which three actions can occur when an administrators clicks "save" after making a number of changes to Knowledge data categories in a category group and changing their position in the hierarchy? Choose three.',
      options: [
        "A. The history of article usage is reset to zero utilization",
        "B. The contents of category drop-down menu change",
        "C. Users may temporarily experience performance issues when searching for articles",
        "D. The articles and questions visible to users change",
        "E. Users are temporarily locked out of the ability to access articles",
      ],
      answer: "B,C,D",
      title: "Question 125",
      explanation: "",
    },
    {
      content:
        "A Recruiting User needs to setup an object relationship between the Position object and the Job Applicant object so that a Position record can have many applicants and Job Applicant can apply for many positions.\nHe also needs this in a setup where deleting a Job Application record will delete all information related to the job applicant in the Position object. What can a system administrator do to fulfill the requirement? * (1 Point)",
      options: [
        "A. Create a lookup relationship only on the parent object",
        "B. Create a lookup relationship using a junction object.",
        "C. Create a many-to-many master-detail relationship using a junction object.",
        "D. Create a master-detail relationship only on the child object",
      ],
      answer: "C",
      title: "Question 126",
      explanation: "",
    },
    {
      content:
        "When converting a lead to an existing account, the user is getting an error of insufficient privileges.\nWhich two options could be preventing the user from converting the lead to the existing account?\nChoose 2 answers",
      options: [
        "A. Account is owned by someone above them in the rote hierarchy.",
        "B. Account is owned by someone in the same role.",
        "C. Organisation-wide Sharing Is set to Private for Account and Contact.",
        "D. Organisation wide sharing is set to Controlled by Parent for Account and Contact.",
      ],
      answer: "A,B",
      title: "Question 127",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks (CK) does business directly with individual consumers (B2C) and large businesses (B2B). Some of CK's B2C customers are employed at its larger customer accounts and should be tracked under both.\nWhich two options will CK need to use to manage its customers' accounts?\nChoose 2 answers",
      options: [
        "A. Contacts to Multiple Accounts",
        "B. Person Accounts",
        "C. Leads",
        "D. Campaign Members",
      ],
      answer: "A,B",
      title: "Question 128",
      explanation: "",
    },
    {
      content:
        "Which capability is available in both customizable Forecasting and collaborative forecasting? choose 2",
      options: [
        "A. Ability to rename forecast categories.",
        "B. Ability to customize the forecast object with custom fields.",
        "C. Ability to track forecasts against sales quotas.(100%)",
        "D. Ability to choose to forecast either monthly or quarterly.(100%)",
      ],
      answer: "C,D",
      title: "Question 129",
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
      title: "Question 130",
      explanation: "",
    },
    {
      content:
        "Which two deployment tools should be used to deploy metadata from a Developer Edition organization to another organization?\nChoose 2 answers",
      options: [
        "A. Ant Migration Tool",
        "B. Data Loader",
        "C. Salesforce Extensions for Visual Studio Code",
        "D. Change sets",
      ],
      answer: "A,D",
      title: "Question 131",
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
      title: "Question 132",
      explanation: "",
    },
    {
      content:
        "Which permission do you need to manage entitlements? Choose two answers. * (1 Point)",
      options: [
        'A. "Manage Application"',
        'B. "Manage Entitlements"',
        'C. "Customize Entitlement"',
        'D. "Customize Application"',
      ],
      answer: "B,D",
      title: "Question 133",
      explanation: "",
    },
    {
      content:
        "DreamHouse Realty manages Its accounts and contacts In Salesforce using a B2C account model. The business has requested that third-party loan advisors be tracked in Salesforce along with the customers they work with.\nHour should the administrator track third-party financial advisors and the customers they work with?",
      options: [
        "A. Use a Hierarchical lookup on Contact to track loan advisors' customers,",
        "B. Create a Hierarchical lookup on Account to track loan advisors' customers.",
        "C. Use a B2B Account Model to track loan advisors' customers.",
        "D. Set up Contacts to Multiple Accounts for loan advisors.",
      ],
      answer: "D",
      title: "Question 134",
      explanation: "",
    },
    {
      content:
        "Which Visual Workflows element would you use to prompt a phone rep to wrap up a cross-selling function and end the call with a customer? * (1 Point)",
      options: ["A. Assignment", "B. Screen", "C. Decision", "D. Step"],
      answer: "B",
      title: "Question 135",
      explanation: "",
    },
    {
      content:
        "What can an administrator do to enable customer-submitted service requests? Choose two answers.* (1 Point)",
      options: [
        "A. Enable the service cloud console on the company website",
        "B. Enable live agent on the company website",
        "C. Enable chatter answers",
        "D. Enable case feed on the company website",
      ],
      answer: "B,C",
      title: "Question 136",
      explanation: "",
    },
    {
      content:
        "Users at AW Computing are receiving a duplicate message when they enter contacts with common first and last names. Management wants to improve the user experience but also keep the data Integrity of contacts.\nWhat should an administrator implement for this issue?",
      options: [
        "A. Include the Email field to the existing matching rule for a more exact match.",
        "B. Add a secondary matching rule to the duplicate rule to match on the associated customer.",
        "C. Change the duplicate rule to report Instead of alert so the message is avoided.",
        "D. Update the matching method on the rule from fuzzy to exact for First Name and Last Name.",
      ],
      answer: "D",
      title: "Question 137",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks (CK) has a sneaker of the month product that is sold as an annual subscription at the price of $1, What type of product scheduling should the CK administrator set up to accurately capture that information?",
      options: [
        "A. Revenue Schedule Only",
        "B. Quantity Schedule Only",
        "C. Inbound Scheduling",
        "D. Quantity and Revenue Schedules.",
      ],
      answer: "D",
      title: "Question 138",
      explanation: "",
    },
    {
      content:
        "Which feature should the administrator consider that allows for this?",
      options: [
        "A. Field accessibility set to editable for the picklists for the Position object.",
        "B. A permission set containing the modify all data permission for the Position object.",
        "C. Delegated administration for the Position object",
        "D. Screen Flow using custom metadata types",
      ],
      answer: "C",
      title: "Question 139",
      explanation: "",
    },
    {
      content:
        "DreamHouse Realty wants to notify an assigned agent when an appointment Is booked on a custom object for one of their listed homes along with the total number of appointments booked so far. The administrator has configured a Roll-up Summary for the number of appointments as well as a flow to detect the creation of a new appointment and send the information to the agent.\nWhat consideration about process automation should the administrator be aware of to ensure the right Information is delivered?",
      options: [
        "A. Roll-up Summary calculations will prevent a Mow from being triggered.",
        "B. Only standard objects can be used with Roll-up Summary fields.",
        "C. Rows can only be triggered from the records created on standard objects.",
        "D. Roll-up Summary calculations run after processes and workflows.",
      ],
      answer: "D",
      title: "Question 140",
      explanation: "",
    },
    {
      content:
        "AW Computing is conducting an audit and wants to understand how many objects have been shared as public externally.\nwhich tool should the administrator use to quickly obtain this details?",
      options: [
        "A. Security Health Check",
        "B. Object Manager",
        "C. Session Security Settings",
        "D. Setup Audit Trail",
      ],
      answer: "C",
      title: "Question 141",
      explanation: "",
    },
    {
      content:
        "Universal Containers needs to use a different pricebook for sales\nrepresentatives in each of the US, LATAM, EMEA, and APAC regions. What\nshould the system\nadministrator do? * (1 Point)",
      options: [
        "A. Create a separate pricebook for each region",
        "B. Clone the standard pricebook and create separate pricebooks for each region",
        "C. Add a different list price for products depending on the region",
      ],
      answer: "B",
      title: "Question 142",
      explanation: "",
    },
    {
      content:
        "What deployment tool allows an administrator to validate metadata during package installation, instead of during package version creation?",
      options: [
        "A. Managed and Unmanaged Packages",
        "B. Inbound and Outbound Changesets",
        "C. Org-Dependent Unlocked Package",
        "D. Ant Migration Tool",
      ],
      answer: "A",
      title: "Question 143",
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
      title: "Question 144",
      explanation: "",
    },
    {
      content:
        "In addition to setting the standard price, what must you also do in order to add a Product to a Custom Price Book? * (1 Point)",
      options: [
        "A. Enter a Product Description.",
        "B. Enter a Product Code.",
        "C. Select a Product Family",
        "D. Check the Active checkbox.",
      ],
      answer: "D",
      title: "Question 145",
      explanation: "",
    },
    {
      content:
        "If my boss is always traveling and rarely brings his computer (because he loves his Android tablet), how can I make it convenient for the CEO to approve requests from his organization?\nChoose2 answers.* (1 Point)",
      options: [
        "A. Enable Mobile Lite for Approval Processes",
        "B. Enable chatter feed approval",
        "C. Enable SMS/IM approval",
        "D. Enable email approval",
      ],
      answer: "B,D",
      title: "Question 146",
      explanation: "",
    },
    {
      content:
        "A user at Universal Containers wants to load records into a custom object named Location from a .csv file.\nWhile using Data Loader, they cannot rind the Location object.\nWhat are two reasons this is happening?\nChoose 2 answers",
      options: [
        "A. The users profile needs Create access to Location.",
        "B. Date Loader should only be used with standard objects.",
        "C. The label or Location may have been changed.",
        "D. Location has a master-detail field to Account.",
      ],
      answer: "A,D",
      title: "Question 147",
      explanation: "",
    },
    {
      content:
        "Universal Containers uses a Private Sharing model for Accounts. User A is onboarded to User B's team and given the same Profile and Role. Both users own 20 Accounts but User B is able to see 40 Accounts, whereas User A can only see the 20 they own.\nWhat are two possible reasons for this?\nChoose 2 answers.",
      options: [
        "A. User B had the records manually shared with them.",
        "B. User B is a member of a Group that gained access to the records through a Sharing Rule.",
        "C. User B had the records shared with them through a Permission Set.",
        "D. User B is a member of a Queue that gained access to the records through a sharing Rule.",
      ],
      answer: "B,C",
      title: "Question 148",
      explanation: "",
    },
    {
      content:
        "Universal Containers has a process to allow an employee to submit a vacation request and route it to the employee's manager for approval. An employee attempted to submit a request but it could not be submitted.\nHow could the administrator troubleshoot this?",
      options: [
        "A. Ensure the approval step has an associated action",
        "B. Ensure the user record has an assigned active manager.",
        "C. Use workflow to email the administrator if the process fails.",
        "D. Review the system log to determine the root cause.",
      ],
      answer: "B",
      title: "Question 149",
      explanation: "",
    },
    {
      content:
        "Northern Trail Outfitters has many users set up as system administrators to perform Salesforce Administration.\nWhich two functions would a delegated administrator be able to perform in order to help the existing Salesforce Administrator?\nChoose 2 answers",
      options: [
        "A. Make updates to permission set configurations.",
        "B. Configure updates to sharing rules.",
        "C. Manage custom objects and customize nearly every aspect.",
        "D. Set up users and password management.",
      ],
      answer: "C,D",
      title: "Question 150",
      explanation: "",
    },
    {
      content:
        "Select power users want the ability to make configuration changes to a specific custom object.\nWhat tool should the administrator assign to the power users to enable this?",
      options: [
        "A. Modify All Data",
        "B. Delegated Administration",
        "C. View Setup and Configuration",
        "D. Sharing Rule",
      ],
      answer: "B",
      title: "Question 151",
      explanation: "",
    },
    {
      content:
        "Which statement is true about the creation of entitlement processes?\nChoose 2 answers",
      options: [
        "A. Entitlement versioning allows changes to existing entitlement processes.",
        "B. Entitlements have their own organization-wide default settings.",
        "C. The Manage Entitlements permission must be enabled.",
        "D. Milestones can be created dynamically based on other fields.",
      ],
      answer: "C,D",
      title: "Question 152",
      explanation: "",
    },
  ],
});
