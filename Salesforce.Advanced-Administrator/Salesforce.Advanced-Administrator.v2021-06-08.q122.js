window.testContent = window.testContent || [];
var testId = "Salesforce.Advanced-Administrator";
var testName = "Salesforce.Advanced-Administrator";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "Salesforce.Advanced-Administrator.v2021-06-08.q122",
  content: [
    {
      content: "What is NOT a feature of Custom Report Types?",
      options: [
        "A. Add default filters",
        "B. Add fields to the report type via lookups",
        "C. Select which fields appear as columns by default",
        "D. Remove reorder and rename fields",
      ],
      answer: "A",
      title: "Question 1",
      explanation: "",
    },
    {
      content:
        "The administrator for SFB Industries would like to deploy a custom object and fields to an unrelated Org.\nWhat is the best way to do this using declarative functionality?",
      options: [
        "A. Force.com IDE",
        "B. Change Sets",
        "C. Force.com Migration Tools",
        "D. Unmanaged package",
      ],
      answer: "D",
      title: "Question 2",
      explanation: "",
    },
    {
      content:
        "When using Customizable Forecasts, which forecast category is not included in the forecast?",
      options: ["A. Best Case", "B. Omitted", "C. Pipeline", "D. Closed"],
      answer: "B",
      title: "Question 3",
      explanation: "",
    },
    {
      content:
        "How can you create a report in Salesforce that shows all\nAccounts with and without Opportunities?",
      options: [
        "A. Create a Joined Report",
        "B. Create an Exception Report",
        "C. Create a Custom Report Type",
        "D. Use the standard Accounts & Opportunities Report",
      ],
      answer: "C",
      title: "Question 4",
      explanation: "",
    },
    {
      content:
        "How to create a report showing Company growth Year after Year. What function to use ?",
      options: [
        "A. PREVGROUPVAL",
        "B. PARENTGROUPVAL",
        "C. DATEVAL",
        "D. PRIORVALUE",
      ],
      answer: "A",
      title: "Question 5",
      explanation: "",
    },
    {
      content:
        'JP Dela Cruz, a user with the" APAC Sales Representative" role, has been assigned the "US Sales Representative Role". Which sharing rules are recalculated?',
      options: [
        "A. Criteria based sharing rules will be recalculated",
        "B. Ownership based rules will be recalculated",
        "C. No changes will be made",
        "D. Sales Team sharing rules will be recalculated.",
      ],
      answer: "B",
      title: "Question 6",
      explanation: "",
    },
    {
      content:
        "A user has pore with read-only permissions for the case object.\nHow can the user be granted edit permission for cases?",
      options: [
        "A. Create a sharing rule on the case object with read/write level of access.",
        "B. Create permission set with edit permissions for the case object.",
        "C. Add the user in a role hierarchy above the users with edit permissions on the case object.",
        "D. Create a public group with edit permissions for the case object.",
      ],
      answer: "B",
      title: "Question 7",
      explanation: "",
    },
    {
      content:
        'An administrator has unchecked the "Enable contact pack creation" checkbox after users had created content packs. What is the impact of the change?',
      options: [
        "A. The clone & customize button will continue to be available.",
        "B. Users can modify the description and title of existing packs.",
        "C. All existing content packs will be deleted",
        "D. Users can continue to edit the contents of existing packs.",
      ],
      answer: "B",
      title: "Question 8",
      explanation: "",
    },
    {
      content:
        "A custom object was created in Universal Containers only system administrator has CRED. Access needs to be extended to VP and Standard User? choose 2",
      options: [
        "A. Permission Set for VP and Standard User",
        "B. Add CRED to VP and Standard User profile",
        "C. Create a custom profile and add VP and Standard User",
        'D. Give "modify all" to both VP and Standard User',
      ],
      answer: "A,C",
      title: "Question 9",
      explanation: "",
    },
    {
      content:
        "Universal Containers uses territory management to manage its sales territories. Territory managers and sales reps are at the same role level in the sold hierarchy. Account and opportunity objects are set to private. What record access can territory managers have for accounts and opportunities that are assigned to their territories? Choose 3",
      options: [
        "A. Transfer all opportunities associated with accounts in the territory, regardless of who owns the opportunities.",
        "B. Transfer and delete opportunities assigned to the territory, regardless of who owns the opportunities",
        "C. Edit all opportunities associated with accounts in the territory, regardless of who owns the opportunities.",
        "D. View edit transfer and delete accounts assigned to the territory, regardless of who owns the accounts.",
        "E. View all opportunities associated with accounts in the territory, regardless of who owns the opportunities",
      ],
      answer: "C,D,E",
      title: "Question 10",
      explanation: "",
    },
    {
      content:
        "Universal Containers has a requirement to report on opportunities where the probability has dropped beneath\n50%. The administrator has created a custom checkbox as a way to identify these records. What else should the administrator do to meet this requirement?",
      options: [
        "A. Create an approval process that submits the opportunity for approval when the custom checkbox is true.",
        "B. Build a validation rule that displays an error when the user enters the probability to less than 50%",
        "C. Create a workflow rule that updates the field when the probability drops below 50%",
        "D. Enable field history tracking on the field and include the history in the report filter",
      ],
      answer: "C",
      title: "Question 11",
      explanation: "",
    },
    {
      content: "What is an Article Type?",
      options: [
        "A. An Article Type defines which channel can access the article and Internal & Partner & Customer etc.",
        "B. Each Article created will have a corresponding Article Type that controls its content",
        "C. An Article Type defines the access and security of an article",
        "D. An Article Type defines the structure and format of an article",
      ],
      answer: "D",
      title: "Question 12",
      explanation: "",
    },
    {
      content:
        "A Sales manager wants to implement a new B2B wherein when an opportunity is closed, it will add the name of the Account to the opportunity name",
      options: [
        "A. Use validation to update the field",
        "B. Use Rollup Summary field to concatenate",
        "C. Use Apex trigger to add the Account name to the Opportunity name",
        "D. Create Approval process to add account and opportunity",
        "E. Create a workflow field update to concatenate Account name and Opportunity name",
      ],
      answer: "E",
      title: "Question 13",
      explanation: "",
    },
    {
      content: "Which permission do you need to manage entitlements? Choose 2",
      options: [
        "A. Customize Entitlement",
        "B. Manage Entitlements",
        'C. Customize Application"',
        "D. Manage Application",
      ],
      answer: "A",
      title: "Question 14",
      explanation: "",
    },
    {
      content:
        "When setting up a Workflow rule with a field update you\nrealise that some users may not have access to the field in question due to Field Level Security. What will happen if a user who cannot see this field triggers the Workflow rule?",
      options: [
        "A. An error will appear when the record is saved",
        "B. The field will update as normal",
        "C. The Administrator will have to approve the update,",
        "D. The field will not update",
      ],
      answer: "B",
      title: "Question 15",
      explanation: "",
    },
    {
      content:
        "A user has asked the Administrator at SFB Industries if they should have access to the salary field on the user object they should not. The Administrator has checked their profile and they do not have access to this field on field level security. Where else should they check?",
      options: [
        "A. Sharing Rules",
        "B. Permission Sets",
        "C. Profile Object settings",
        "D. Org-wide defaults",
      ],
      answer: "B",
      title: "Question 16",
      explanation: "",
    },
    {
      content:
        "When importing revenue quota data for Collaborative Forecasts using Data Loader what information must be included in the import file? (3)",
      options: [
        "A. User record ID",
        "B. Quota quantity",
        "C. User full name",
        "D. Quota amount",
        "E. Start date of the forecast period",
      ],
      answer: "A,D,E",
      title: "Question 17",
      explanation: "",
    },
    {
      content: "Which three are capabilities of Collaborative Forecasting?",
      options: [
        "A. Add categories",
        "B. Overlay quota",
        "C. Rename categories",
        "D. Forecast using opportunity splits",
        "E. Select a default forecast currency setting",
      ],
      answer: "C,D,E",
      title: "Question 18",
      explanation: "",
    },
    {
      content: "What is true about Salesforce Communities? Choose 2",
      options: [
        "A. Ideas tab is used by community users to submit, like and promote Ideas",
        "B. Communities can be used by internal Salesforce users only",
        "C. Reputation level is the same across all communities",
        "D. Crowd sourced Knowledge in Q&A tab",
      ],
      answer: "A,D",
      title: "Question 19",
      explanation:
        "Explanation\n https://help.salesforce.com/apex/HTViewHelpDoc?id=ideas_about.htm&language=en\n https://help.salesforce.com/apex/HTViewHelpDoc?id=questions_portal_overview.htm&language=en",
    },
    {
      content:
        "Which statement is true about the creation of entitlement processes?\nChoose 2 answers",
      options: [
        "A. Milestones can be created dynamically based on other fields.",
        "B. Entitlement versioning allows changes to existing entitlement processes.",
        "C. Entitlements have their own organization-wide default settings.",
        "D. The Manage Entitlements permission must be enabled.",
      ],
      answer: "A,D",
      title: "Question 20",
      explanation: "",
    },
    {
      content:
        "What should an administrator consider when moving approval processes using a change set?",
      options: [
        "A. Custom fields on standard objects will need to be manually added in target organization",
        "B. Change sets do not include the approval and rejection actions from the source organization",
        "C. Change sets do not include the order of active approval processes from the source organization",
        "D. The Unique Name of approval process is not allowed to be changed once deployed in the target organization",
      ],
      answer: "B",
      title: "Question 21",
      explanation: "",
    },
    {
      content:
        "The administrator of Universal Containers is testing an approval process in a recently refreshed Developer Pro sandbox and is finding that none of the notification emails are being sent to the approvers. Which two reasons could be the cause? Choose 2 Answers",
      options: [
        "A. HTML templates are not available in sandboxes.",
        "B. Workflow emails only work in Full sandboxes.",
        "C. The email addresses for the users are incorrect.",
        "D. The Deliverability Access Level setting is incorrect.",
      ],
      answer: "C,D",
      title: "Question 22",
      explanation: "",
    },
    {
      content: "The best practice when creating Profiles is to:\nSelect one:",
      options: [
        "A. Clone one of the built in standard profiles that is close to what you need",
        "B. Start with a blank profile and customize it to what you need.",
        "C. Use one profile for all users.",
        "D. Edit one of the existing built in profiles.",
      ],
      answer: "A",
      title: "Question 23",
      explanation: "",
    },
    {
      content: "Which feature is required to use Territory Management?",
      options: [
        "A. Collaborative Forecasting",
        "B. Advanced Currency Management",
        "C. Customizable Forecasting",
        "D. Multiple Currencies",
      ],
      answer: "C",
      title: "Question 24",
      explanation: "",
    },
    {
      content:
        "Admin is asked to restrict visibility of cases of a particular record type to 5 users. One user is assigned the Support Manager Profile, while the other four are assigned the Support Representative Profile. How can admin accomplish this?",
      options: [
        "A. Create a new profile for the 5 users",
        "B. Create a Public Group and parent case record type",
        "C. Create a Public Group and criteria-based sharing rule to extend to the 5 users",
        "D. Modify the profiles of the 5 users",
      ],
      answer: "A",
      title: "Question 25",
      explanation: "",
    },
    {
      content:
        "The VP of Sales wants to enforce a new B2B sales process for the sales representatives. For example, if an opportunity is still in the Prospecting stage one day after the next stage is due, the Deal Status should change to Stalled and the number of deals stalled on the account should be incremented. Which two actions can an administrator use to automate this process? Choose two",
      options: [
        "A. Roll-up summary field on the account",
        "B. Workflow Field update on the opportunity",
        "C. Cross-object workflow field update",
        "D. Workflow field update on the account",
      ],
      answer: "A,B",
      title: "Question 26",
      explanation: "",
    },
    {
      content: "What are the three types of visibility with Data Categories?",
      options: [
        "A. Internal",
        "B. All Categories",
        "C. None",
        "D. Custom",
        "E. External",
      ],
      answer: "B,C,D",
      title: "Question 27",
      explanation: "",
    },
    {
      content:
        "Which forecasting schedule type would you use if you wanted a benchmark of how much should be sold within a certain time frame?",
      options: ["A. Forecast", "B. Quota", "C. Pipeline"],
      answer: "B",
      title: "Question 28",
      explanation: "",
    },
    {
      content:
        "What password option is available for the administrator to set on content deliveries? Choose 3",
      options: [
        "A. Password protection is optional and defaults to OFF",
        "B. Password protection is optional and defaults to ON",
        "C. Password protection is required",
        "D. Password complexity rules",
        "E. Administrator provided default password",
      ],
      answer: "A,B,C",
      title: "Question 29",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants to track expense reports and expense line items. Values from expense line item records need to be aggregated and displayed on the expense record. What type of relationship should an administrator use to ensure that expense line items can be aggregated?",
      options: [
        "A. Roll-up summary",
        "B. Master-detail",
        "C. Hierarchical",
        "D. Lookup",
      ],
      answer: "B",
      title: "Question 30",
      explanation: "",
    },
    {
      content:
        'How can SFB Industries ensure that incoming cases are routed to the correct department based on the "Type" field on Cases?',
      options: [
        "A. Create a workflow rule to assign users the correct case",
        "B. Use Auto-response rules & Queues",
        "C. Enable case routing for agents",
        "D. Use Assignment rules & Queues",
      ],
      answer: "C",
      title: "Question 31",
      explanation: "",
    },
    {
      content:
        "Managers wants to view a dashboard report without logging in to Salesforce and have the data sent via email weekly.",
      options: [
        "A. Create a report and dashboard from that report and schedule a weekly refresh and set an email to be sent to the manager",
        "B. Create Joint Report",
        "C. Create an analytical snapshot weekly",
        "D. Create Dynamic Dashboard",
      ],
      answer: "A",
      title: "Question 32",
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
      title: "Question 33",
      explanation: "",
    },
    {
      content:
        "What do you need to configure on a profile to allow it to find duplicate records?",
      options: ["A. Merge", "B. Delete", "C. View All", "D. Read and Edit"],
      answer: "C",
      title: "Question 34",
      explanation: "",
    },
    {
      content:
        "Which features make repetitive actions in the Service Console quicker and easier for agents?\nSelect 3",
      options: [
        "A. Email Templates",
        "B. Quick Text",
        "C. Macros",
        "D. Heuristic Logic",
        "E. Predictive text",
      ],
      answer: "A,B,C",
      title: "Question 35",
      explanation: "",
    },
    {
      content: "Analyze the number of open cases for each week this year (1)",
      options: [
        "A. joined report",
        "B. PREVGROUPVAL function",
        "C. custom report type",
        "D. dashboard filter",
        "E. reporting snapshot",
        "F. cross filter",
        "G. bucket field",
      ],
      answer: "E",
      title: "Question 36",
      explanation: "",
    },
    {
      content:
        "How can the administrator ensure article managers use specified values for custom article fields?",
      options: [
        "A. Use field dependencies on article types.",
        "B. Create a validation rule on the article.",
        "C. Create different article type for different requirements.",
        "D. Require a field on the page layout.",
      ],
      answer: "B",
      title: "Question 37",
      explanation: "",
    },
    {
      content:
        'A system administrator has unchecked the setting "Enable Content Pack Creation". What can users do with content packs? Choose 1.',
      options: [
        "A. All content Packs will be deleted.",
        "B. Modify existing content packs.",
        "C. Edit description and title of existing content packs",
        "D. hindi ko alam",
      ],
      answer: "C",
      title: "Question 38",
      explanation: "",
    },
    {
      content:
        "Which Visual Workflows element would you add to a flow to create a new opportunity record?",
      options: [
        "A. Record Lookup",
        "B. Record Delete",
        "C. Record Update",
        "D. Record Create",
      ],
      answer: "D",
      title: "Question 39",
      explanation: "",
    },
    {
      content:
        "How could you show a report of Accounts that do not have any Opportunity associated with them?",
      options: [
        "A. Use a cross filter on the standard Accounts report type and set it to without Opportunities",
        "B. Create a Custom Report Type for Accounts & without Opportunities",
        "C. Use the standard Accounts without Opportunities Report",
        "D. Use a filter on the standard Accounts report type and set it to without Opportunities",
      ],
      answer: "A",
      title: "Question 40",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants customers who buy the Freight Container product to be billed in monthly installments. How should an administrator meet this requirement?",
      options: [
        "A. Create custom fields on the product.",
        "B. Create a default quantity schedule on the product",
        "C. Create a default revenue schedule on the product.",
        "D. Create a workflow rule on the product.",
      ],
      answer: "C",
      title: "Question 41",
      explanation: "",
    },
    {
      content:
        "An administrator has created content types for Salesforce CRM Content and has been asked to restrict the content types that are m a library.\nHow can an administrator meet this requirement^ Choose 2 answers",
      options: [
        "A. Add the Related Content related list to the page layout for the associated object.",
        "B. Add members to the library who are users or members of public groups.",
        "C. Add the default content type to the Selected Content Types list.",
        'D. Select the "Restrict the content types available in the library" checkbox.',
      ],
      answer: "B,C",
      title: "Question 42",
      explanation: "",
    },
    {
      content:
        "Which of the following forecast schedule types consists of opportunities in various stages of maturity?",
      options: ["A. Pipeline", "B. Quota", "C. Forecast"],
      answer: "A",
      title: "Question 43",
      explanation: "",
    },
    {
      content: "What is NOT a feature of Content Delivery?",
      options: [
        "A. Setting an expiry time on when the content is available till",
        "B. View Microsoft PowerPoint and Word files in a browser",
        "C. Add comments to the document",
        "D. View how often the content has been viewed or downloaded",
      ],
      answer: "C",
      title: "Question 44",
      explanation: "",
    },
    {
      content:
        'Which of the following statements are true about the Opportunity field, "Stage"? Choose two answers.',
      options: [
        "A. The list of default stage values cannot be edited or added.",
        "B. There are other sales methodologies that can be downloaded from the AppExchange and used within Salesforce",
        "C. There are 10 default stage values, based on a commonly used sales methodology.",
      ],
      answer: "B,C",
      title: "Question 45",
      explanation: "",
    },
    {
      content:
        "A user is trying to access content in a library but is receiving an insufficient privleges message. Which two ways should the administrator troubleshoot this issue? Choose two.",
      options: [
        'A. Determine if the user has been granted "Viewer" permission to the library of interest.',
        "B. Determine if the user's record has the Salesforce CRM Content feature license enabled.",
        "C. Determine if the user has been granted viewer permission to the content",
        "D. Determine if the user's profile has the CRM Content user permission enabled.",
      ],
      answer: "A,B",
      title: "Question 46",
      explanation: "",
    },
    {
      content:
        'The inside sales manager at Universal Containers wants to be able to report on how long leads have a Lead Status of "Open" before the status changes to another value. Additionally, the sales team has requested the status value be changed with fewer clicks. What should the administrator do to meet this requirement?',
      options: [
        "A. Use a workflow rule that sends an email when the Lead Status is changed and an approval process to update the status.",
        "B. Use a formula field to calculate the difference between the current and created data when the status changes through inline editing.",
        "C. Use a quick action to change the status value and a workflow rule to update a date field.",
        "D. Turn on field history tracking for the lead status field and create a report based on that field.",
      ],
      answer: "C",
      title: "Question 47",
      explanation: "",
    },
    {
      content:
        "Knowledge Articles are classified into which structure to make searching easier?",
      options: [
        "A. Record Types -> Categories",
        "B. Groups -> Categories",
        "C. Articles -> Groups",
        "D. Categories -> Groups",
      ],
      answer: "B",
      title: "Question 48",
      explanation: "",
    },
    {
      content: "Territory Management can set access to which objects?",
      options: [
        "A. Accounts, Contacts, Cases & Opportunities",
        "B. Accounts only",
        "C. Accounts, Contacts & Opportunities",
        "D. Accounts, Contacts, Cases, Opportunities & Custom Objects",
      ],
      answer: "A",
      title: "Question 49",
      explanation: "",
    },
    {
      content:
        "Universal Containers has four sales region: North America, APAC, EMEA, and LATAM. Each sales region is led by a VP of sales. Each of the VPs wants to have a dashboard emailed to them every IT Monday morning that contains components with only the data for their region. How can an administrator meet this requirement?",
      options: [
        "A. Create one dashboard that includes a filter for each region, scheduled to be delivered on Monday mornings",
        "B. Create a separate dashboard with data specific to each sales VP, scheduled to be delivered on Monday mornings",
        "C. Create one dashboard using Visualforce to create a filter, scheduled to be delivered on Monday mornings",
        "D. Create a reporting snapshot and check the dashboard option, scheduled to be delivered on Monday mornings",
      ],
      answer: "A",
      title: "Question 50",
      explanation: "",
    },
    {
      content:
        "If my boss is always traveling and rarely brings his computer (because he loves his Android tablet), how can I make it convenient for the CEO to approve requests from his organization?\nChoose 2 answers.",
      options: [
        "A. Enable email approval",
        "B. Enable chatter feed approval",
        "C. Enable Mobile Lite for Approval Processes",
        "D. Enable SMS/IM approval",
      ],
      answer: "A,B",
      title: "Question 51",
      explanation:
        "Explanation\n https://help.salesforce.com/HTViewHelpDoc?id=wf_approval_settings.htm&language=en_UShttps://help.salesf",
    },
    {
      content:
        "The administrator at Universal Containers wants to improve data quality by ensuring that all accounts have a Billing State/Province based upon the Billing Postal Code for that account. How can this be achieved? Choose 2 answers",
      options: [
        "A. Use a trigger that populates Billing State/Province based on a custom object that maps postal codes to states/provinces",
        "B. Use a workflow that populates Billing State/Province based on a custom object that maps postal codes to states/provinces",
        "C. Use validation rule to do an HLOOKUP of the Billing Postal Code to a custom object that maps postal codes to states/provinces",
        "D. Use validation rule to do a VLOOKUP of the Billing Postal Code to a custom object that maps postal codes to states/provinces",
      ],
      answer: "B,D",
      title: "Question 52",
      explanation: "",
    },
    {
      content:
        "What are two considerations when setting up Salesforce Content?\nChoose 2 answers.",
      options: [
        "A. A validation rule can ensure a description is required for all contributed content.",
        "B. The content type determines which fields appear on the content Detail page layout.",
        "C. An approval process can ensure that all product-related content is reviewed.",
        "D. The library type determines the size of files that can be contributed to content.",
      ],
      answer: "A,B",
      title: "Question 53",
      explanation: "",
    },
    {
      content:
        "Universal Containers uses Salesforce Knowledge and has defined its category groups based on the regions of Europe, of Americas, Africa, and Asia. The administrator needs to restrict visibility of each category to the sales representatives within each region. How should the administrator control access to these category groups?",
      options: [
        "A. Add or remove sales users from a public group with access to the category groups.",
        "B. Modify object settings for the category groups on the sales users profiles.",
        "C. Add custom category groups to the profiles assigned to the sales users.",
        "D. Add custom category groups to the roles assigned to the sales users.",
      ],
      answer: "D",
      title: "Question 54",
      explanation: "",
    },
    {
      content:
        "Which report type could be used to meet this requirement? Choose two answers.",
      options: [
        "A. A standard opportunity filtered by the field Last Activity and a custom date range that is blank",
        "B. An opportunity report with a cross-object filter of opportunities without activities",
        "C. A joined report using an opportunity report in Block A; a task and event report filtered by tasks for Block B",
        "D. A custom report type with Opportunity as the primary object and Activity as the secondary object",
      ],
      answer: "A,B",
      title: "Question 55",
      explanation: "",
    },
    {
      content:
        "The VP of Marketing is launching campaigns in each region to target accounts that do not have open opportunities. What reporting solutions can an administrator set up to assist with this?",
      options: [
        "A. Joined report",
        "B. Standard filter",
        "C. Reporting snapshot",
        "D. Cross filter",
      ],
      answer: "D",
      title: "Question 56",
      explanation: "",
    },
    {
      content:
        "An administrator wants to allow users who are creating leads to have access to the find duplicates button.\nWhich lead object-level permission will the administrator need to provide to these users?",
      options: ["A. Delete", "B. Read and Edit", "C. Merge", "D. View All"],
      answer: "D",
      title: "Question 57",
      explanation: "",
    },
    {
      content:
        "A user with permissions to create price books wants to quickly create a new product with the same information as the existing product by cloning the product. What is an important consideration when cloning a product?",
      options: [
        "A. Price book entries need to be activated before users can use the new price book.",
        "B. Price book entries in price books that you don't have sharing access to are created.",
        "C. Price book entries in price books that you don't have sharing access to aren't created.",
        "D. Price book entries will not be created in the standard price book.",
      ],
      answer: "C",
      title: "Question 58",
      explanation: "",
    },
    {
      content:
        "Your organization-wide defaults for Price Books are set to No Access, What should you do to enable your Sales Reps to view the South America Price Book and add Products in this Price Book to Opportunities?",
      options: [
        "A. Change all Custom Price Books' access for Sales Reps to Use.",
        "B. Grant specific Use access rights to Sales Reps for the South America Price Book.",
        "C. Set the organization-wide defaults for all Sales Reps to Use",
        "D. Set the organization-wide defaults to Use, then manually change all non Sales Reps' access to No Access.",
      ],
      answer: "B",
      title: "Question 59",
      explanation: "",
    },
    {
      content: "What can Delegated Administrators NOT do?",
      options: [
        "A. Create users",
        "B. Manage custom objects",
        "C. Login as a specific user",
        "D. Create Profiles",
      ],
      answer: "D",
      title: "Question 60",
      explanation: "",
    },
    {
      content:
        "Which two results can be expected it an administrator uses Data Loader to transfer ownership of account records? Choose 2 Answers.",
      options: [
        "A. All manual sharing is removed from the records that are transferred.",
        "B. All new owners are automatically notified of their new account ownership.",
        "C. All ownership-based sharing rules for the records are recalculated.",
        "D. All account teams are removed from the records that are transferred.",
      ],
      answer: "A,B",
      title: "Question 61",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants to use Salesforce as part of their recruiting process. They need to track applicants and positions. Applicants should be able to apply for multiple positions. There should be a field on both the position and applicant records that sums the number of applications for each candidate.\nHow should an administrator define an application object to meet these requirements?",
      options: [
        "A. Create lookup fields on the application object to both the position and applicant.",
        "B. Create master-detail fields on the application object to both the position and applicant.",
        "C. Create a lookup field on both the position and applicant to the application.",
        "D. Create a master-detail field on both the position and applicant to the application.",
      ],
      answer: "D",
      title: "Question 62",
      explanation: "",
    },
    {
      content:
        "Assuming that the training sandbox will contain approximately 500MB of production data and be refreshed after daily training sessions, which type of sandbox can be used to train users on new functionality that has recently been deployed to production?",
      options: [
        "A. Partial Data Sandbox",
        "B. Full Sandbox",
        "C. Developer Sandbox",
        "D. Developer Pro Sandbox",
      ],
      answer: "D",
      title: "Question 63",
      explanation: "",
    },
    {
      content:
        "Your company sells large mainframes that are delivered in one delivery but are paid for with several regular installments. What type of schedule should you set up?",
      options: [
        "A. Default Revenue and Quantity Schedule",
        "B. Default Quantity Schedule",
        "C. Don't create any default schedule",
        "D. Default Revenue Schedule",
      ],
      answer: "D",
      title: "Question 64",
      explanation: "",
    },
    {
      content: "What would you check to see whether a workflow failed?",
      options: [
        "A. debug log",
        "B. workflow log",
        "C. integration log",
        "D. failed work flow log",
      ],
      answer: "A",
      title: "Question 65",
      explanation:
        "Explanation\n http://help.salesforce.com/HTViewHelpDoc?id=code_debug_log.htm&language=en_US",
    },
    {
      content:
        "What would cause a required field to not be populated on some records? Choose 2",
      options: [
        "A. The field is set to Read Only",
        "B. The field is hidden",
        "C. The field is protected by field level security",
        "D. The field is not in the page layout",
      ],
      answer: "A,D",
      title: "Question 66",
      explanation: "",
    },
    {
      content:
        "Which text formula is correct to assign a value based on a custom lead field?",
      options: [
        'A. CASE( Lead_Score__c , "10", Cold, "20", Warm, " 30", Hot, Null)',
        'B. CASE( Lead_Score__c 10, "Cold", 20, "Warm", 30, Hot, "Null")',
        "C. CASE( Lead_Score__c , 10, Cold, 20, Warm, 30, Hot)",
        'D. CASE( Lead_Score__c , 10, "Cold", 20, "Warm", 30, Hot)',
      ],
      answer: "B",
      title: "Question 67",
      explanation: "",
    },
    {
      content:
        'Suri only has the "read" permission for the case object on her profile. A criteria-based sharing rule gives her read/write access to product support cases. Will Suri be able to edit product support cases?',
      options: ["A. Yes", "B. No"],
      answer: "B",
      title: "Question 68",
      explanation: "",
    },
    {
      content:
        "What object permission should the administrator provide for users to find duplicates under the lead object?",
      options: ["A. Delete", "B. View All", "C. Merge", "D. Read, Edit"],
      answer: "B",
      title: "Question 69",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants to create a Job Application custom object related to a Job Posting custom object.\nThey would also like a no-code solution to calculate the number of Job Applications for each Job Posting.\nWhat type of field should an administrator create on the Job Application to enable this functionality?",
      options: [
        "A. Roll-up Summary",
        "B. Formula",
        "C. Lookup",
        "D. Master-Detail",
      ],
      answer: "C",
      title: "Question 70",
      explanation: "",
    },
    {
      content:
        "Which is the most efficient way to protect a Social Security Number that must be stored on a customer's Contact record?\nSelect one:",
      options: [
        "A. Page Layouts linked to Record Types.\n         NOTES:\n         While you can remove the field in page layouts, the field will still be visible to those users in a report, list view, merge template etc. Field Level Security will prevent the user from seeing the contents of this field anywhere.\n         https://developer.salesforce.com/docs/atlas.enus.securityImplGuide.meta/securityImplGuide/admin_fls.htm",
        "B. Field Level Security",
        "C. Page Layouts linked to Profiles.",
        "D. Page Layouts.",
      ],
      answer: "B",
      title: "Question 71",
      explanation: "",
    },
    {
      content:
        "Product is payed for once, but receive product in increments (1)",
      options: [
        "A. set up default quantity schedules",
        "B. create revenue schedules",
        "C. set up default revenue schedules",
        "D. create quantity schedules",
      ],
      answer: "D",
      title: "Question 72",
      explanation: "",
    },
    {
      content:
        "A system administrator needs to merge duplicate accounts with duplicate contacts, how can this can be accomplished?",
      options: [
        "A. Merge duplicate accounts and duplicate contacts will automatically be merged",
        "B. Merge accounts and select the option to merge duplicate contacts",
        "C. Merge duplicate contacts and then duplicate accounts.",
        "D. Merge duplicate accounts and then merge duplicate contacts",
      ],
      answer: "D",
      title: "Question 73",
      explanation: "",
    },
    {
      content:
        "Select an option below that you would use to limit the number of records and assist with data consistency.",
      options: [
        "A. Custom formula fields",
        "B. Picklist and dependent picklist fields",
        "C. Workflow field updates",
        "D. Custom lookup fields and lookup filters",
        "E. Record types and page layouts",
      ],
      answer: "D",
      title: "Question 74",
      explanation: "",
    },
    {
      content:
        "The Sales manager at SFB Industries would like to display the amounts closed this month this quarter, and this year so far on an existing dashboard. Which component would best represent this?",
      options: ["A. Metric", "B. Chart", "C. Table", "D. Gauge"],
      answer: "A",
      title: "Question 75",
      explanation: "",
    },
    {
      content:
        "Which deployment tool would you use to deploy metadata from one organization to a RELATED organization?",
      options: [
        "A. Unmanaged Packages",
        "B. Force.com IDE",
        "C. Force.com Migration Tool",
        "D. Change sets",
      ],
      answer: "D",
      title: "Question 76",
      explanation: "",
    },
    {
      content:
        'A sales manager is receiving an "insufficient privileges" error when viewing a contact. The contact owner is under the manager in the role hierarchy. What is the reason the sales manager is not able to view the contact?',
      options: [
        "A. The account sharing settings are controlled by the parent, and the account owner is not under the sales manger's role.",
        "B. The contact sharing settings are private, so access to the record is limited to the contact owner and system administrator.",
        "C. The contact sharing settings are controlled by the parent, and the account owner is not under the sales manager's role.",
        "D. The contact owner has not selected the option to share contacts with others in the role hierarchy.",
      ],
      answer: "A",
      title: "Question 77",
      explanation: "",
    },
    {
      content:
        "A Sales Manager needs to see a pipeline report based on standard industries. The company has 3 main groups of industries they sell into and the report needs to reflect this.\nWhich feature can be used to group the various standard\nindustries into groups on the report?",
      options: [
        "A. Summary grouping",
        "B. Parent Grouping",
        "C. Custom Summary Formulas",
        "D. Bucket Fields",
      ],
      answer: "D",
      title: "Question 78",
      explanation: "",
    },
    {
      content:
        "What happens when an admin creates a custom tab for a custom object (3)",
      options: [
        "A. the custom object has a home page",
        "B. a custom app containing the custom tab is automatically created",
        "C. new records of the custom object can only be accessed from the related list on the parent record",
        "D. new records of the custom object can be created from the sidebar",
        "E. users can search for records of the custom object",
      ],
      answer: "A,D,E",
      title: "Question 79",
      explanation: "",
    },
    {
      content:
        "SFB Industries needs to use two Custom Objects Shipments & Shipment items. Every time a Shipment item is marked as packed, it needs to trigger a field update on the master shipment record. What kind of relationship and feature needs to be present for this to work?",
      options: [
        "A. Master-detail relationship with a cross object field update",
        "B. Lookup-relationship with a cross object field update",
        "C. Master-detail relationship with a roll-up summary field",
        "D. Lookup-relationship with a roll-up summary field",
      ],
      answer: "A",
      title: "Question 80",
      explanation: "",
    },
    {
      content:
        "AW Computing uses a private sharing model for cases. A select group of five users need read/write access to all cases with a specific record type. Of these users, one is assigned the Support Manager profile and four are assigned the Support Representative profile. How can the administrator meet this requirement?",
      options: [
        "A. Create a public group for the users and use criteria-based sharing rules to share cases with the record type to that group.",
        "B. Modify the Support Manager and Support Representative profiles to View All Data access on all cases with the record type.",
        "C. Create a public group for the users and a custom parent case record with the record type; share this case by record owner.",
        "D. Create a new profile for the five users with View All Data access; remove access to the record type from all other profiles.",
      ],
      answer: "A",
      title: "Question 81",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants only users from the sales department to have access to price books. How can an administrator meet this requirement?",
      options: [
        "A. Set the organization-wide default for price book to Use.",
        "B. Manually share each price book to the sales users roles.",
        "C. Clone all custom price books from the standard price book.",
        "D. Create a sharing rule to share all price books to sales users.",
      ],
      answer: "A",
      title: "Question 82",
      explanation: "",
    },
    {
      content:
        "While working with a report a Sales Manager at SFB Industries would like to see the % that each opportunity is contributing to the overall pipeline. How can this be achieved?",
      options: [
        "A. Create a custom summary formula and use the PARENTGROUPVAL function",
        "B. Create a formula field on the opportunity that uses the PARENTGROUPVAL function. Include this in the report",
        "C. Create a custom summary formula and use the PREVGROUPVAL function",
        "D. Create a formula field on the opportunity and include this in the report",
      ],
      answer: "A",
      title: "Question 83",
      explanation: "",
    },
    {
      content:
        "Both a sharing rule and an account team give Jose access to the Dixon Chemical account. The sharing rule gives him read access, and the account team gives him read/write access. Will Jose be able to edit the Dixon Chemical account?",
      options: ["A. Yes", "B. No"],
      answer: "A",
      title: "Question 84",
      explanation: "",
    },
    {
      content:
        "On a monthly basis, an administrator would like to pull data related to service contracts from Salesforce to store elsewhere. Which two ways can an administrator accomplish this? Choose 2 answers",
      options: [
        'A. Configure the "Schedule Export" options under Data Export',
        "B. Use Data Loader to export the data each month.",
        "C. Use Data Exporter to export the data each month.",
        'D. Use the "Object Export" feature under Data Management',
      ],
      answer: "A,B",
      title: "Question 85",
      explanation: "",
    },
    {
      content:
        "Regardless of the entitlement model used, which page layouts might you want to customize?",
      options: [
        "A. all of the above",
        "B. Account page layouts",
        "C. none of the above",
        "D. Entitlements page layout",
        "E. Contact page layouts",
        "F. Asset page layouts",
        "G. Case page layouts",
      ],
      answer: "A",
      title: "Question 86",
      explanation: "",
    },
    {
      content: "How do you create an Exception Report?",
      options: [
        'A. Create a custom report type with a "without" filter',
        "B. Use an Exception report type",
        "C. Create a cross filter on the report builder",
        "D. Create a cross filter on the custom report type",
      ],
      answer: "C",
      title: "Question 87",
      explanation: "",
    },
    {
      content:
        "Universal Containers would like applicants to apply for multiple positions, tracking how many applicants have applied and how many positions each individual applicant has applied for. To do this, the administrator will create a Job Application junction object between Applicant and Position objects. Why will this action meet the requirement ?",
      options: [
        "A. The Job Application object as a master to Positions and Applicant objects will allow rollup summary fields on the Positions and Applicant objects.",
        "B. A lookup relationship on the Applicant object with Position as the master provides rollup summary fields without code.",
        "C. The junction object allows the administrator to add a workflow rule to update fields on the Position and Applicant objects.",
        "D. The junction object allows a many-to-many relationship and also roll-up summary fields on the parent objects.",
      ],
      answer: "D",
      title: "Question 88",
      explanation: "",
    },
    {
      content:
        "Which of the following are current limitations of Salesforce Knowledge? (@Winter 18) Select 3",
      options: [
        "A. You can define up to 5 category groups.",
        "B. You can define up to 50,000 articles in total.",
        "C. You can have up to 100 categories in each group.",
        "D. You can have up to 100 groups in each category.",
        "E. You can define up to 5 category groups with only 3 active at any time.",
      ],
      answer: "B,C,E",
      title: "Question 89",
      explanation: "",
    },
    {
      content:
        "Which value rolls up for both customizable and collaborative forecasting?",
      options: [
        "A. Opportunity amount",
        "B. Expected revenue",
        "C. Quota",
        "D. Amount",
      ],
      answer: "A",
      title: "Question 90",
      explanation: "",
    },
    {
      content:
        "In Collaborative Forecasts, which permissions are required in order to upload quota data for al users? Choose\n2.",
      options: [
        "A. Customize Forecasts",
        "B. Customize Quotas",
        "C. View all data.",
        "D. Manage Quotas",
        "E. View all Forecasts",
        "F. Manage all data",
      ],
      answer: "D,E",
      title: "Question 91",
      explanation: "",
    },
    {
      content:
        "What permissions must be enabled on a profile to find duplicate records?",
      options: [
        "A. Read and Edit",
        "B. Delete",
        "C. Locate Duplicate Records",
        "D. Merge",
        "E. View All Data",
      ],
      answer: "E",
      title: "Question 92",
      explanation: "",
    },
    {
      content:
        "What statements are true regarding Territory Management? Choose 2.",
      options: [
        "A. Users in a territory can view, edit, transfer, and delete Opportunities assigned to the territory.o Users in a territory can view all opportunities associated with accounts in the territory, regardless of who owns the opportunities.",
        "B. Users in a territory can view, edit and delete all opportunities associated with accounts in the territory, regardless of who owns the opportunities.",
        "C. Users in a territory can view, edit, transfer, and delete accounts assigned to the territory.",
        "D. Users in a territory can view, edit, transfer and delete all opportunities associated with accounts in the territory, regardless of who owns the opportunities.",
      ],
      answer: "B,C",
      title: "Question 93",
      explanation: "",
    },
    {
      content:
        "Users have been given Read/Write access to product support cases through criteria-based sharing rules. A user's profile only has read permission for cases.What can the user expect regarding their ability to edit product support cases?",
      options: [
        "A. The user will only be able to edit cases manually shared with them.",
        "B. The user will only be able to edit the cases that they created.",
        "C. The user will not be able to edit product support cases.",
        "D. The user will be able to edit product support cases.",
      ],
      answer: "C",
      title: "Question 94",
      explanation: "",
    },
    {
      content:
        "When removing test data from a new Developer Org using Mass Delete Records, why is it necessary to Mass Delete Accounts as the last step.\nSelect one:",
      options: [
        "A. It's an internal Salesforce requirement",
        "B. They must be done in reverse alphabetical order",
        "C. The order does not matter",
        "D. Related child records exist",
      ],
      answer: "D",
      title: "Question 95",
      explanation: "",
    },
    {
      content:
        "How can you as a System Administrator enforce standardization of tags in libraries to prevent duplicate tags? Choose 2",
      options: [
        "A. Enable restrictive tagging",
        "B. Customize tags with contributor upon library creation",
        "C. Change Tagging Field to multiselect picklist",
        "D. Enable workflow to send email alert for unnamed tags",
      ],
      answer: "A,B",
      title: "Question 96",
      explanation: "",
    },
    {
      content:
        "SFB Industries would like to create a custom objects to link Contacts to multiple Accounts. What type of object/relationship should be created?",
      options: [
        "A. Custom Object with Lookup relationship fields to Contact & Account",
        "B. Custom Object with Lookup field to Accounts",
        "C. Custom Object with two Master-detail relationship fields to Contact & Account",
        "D. Custom Object with Master-Detail relationship field to Accounts",
      ],
      answer: "C",
      title: "Question 97",
      explanation: "",
    },
    {
      content:
        "Roll-up Summary Fields work with Opportunity Line Items to Opportunities?",
      options: ["A. True", "B. False"],
      answer: "A",
      title: "Question 98",
      explanation: "",
    },
    {
      content: "Google Docs can be added to Salesforce CRM Content?",
      options: ["A. True", "B. False"],
      answer: "A",
      title: "Question 99",
      explanation: "",
    },
    {
      content:
        "What must be considered in Communities for internal and external users. External users are using chatter. Choose 2",
      options: [
        "A. External and Internal users should be on different community",
        "B. You need to enable Chatter",
        "C. New Users should use Customer portal and partner portal instead of community",
        "D. Use Ideas, Q&A",
      ],
      answer: "B,D",
      title: "Question 100",
      explanation: "",
    },
    {
      content:
        "A sales manager would like access to the following:\nAll closed/won opportunities in the last six months for each account the manager owns.\nAll cases created within the last six months for each account the manager owns.\nWhat can the administrator create to meet these requirements ?",
      options: [
        "A. Create an Account report and add Opportunity and Case cross filters.",
        "B. Create an Account report that groups by both opportunities and cases.",
        "C. Create a custom report type to combine the data into a single report.",
        "D. Create a single report using the Joined Reports feature.",
      ],
      answer: "A",
      title: "Question 101",
      explanation: "",
    },
    {
      content:
        "To create a large number of Salesforce user accounts from a CSV import file, you can use ________ to perform the import.\nSelect one:",
      options: [
        "A. Data Loader\n         NOTES:\n         Data Loader does allow you to import users, you cannot import users with the Data Import Wizard.",
        "B. Data Import Wizard",
        "C. Bitlocker",
        "D. Excel",
      ],
      answer: "A",
      title: "Question 102",
      explanation: "",
    },
    {
      content: "What is NOT a feature of CRM Content Packs?",
      options: [
        "A. If individual documents are updated the content pack can also be updated",
        "B. CRM Content requires a feature license,",
        "C. A content pack can contain a collection of related documents",
        "D. A content pack can include any file from inside CRM content",
      ],
      answer: "B",
      title: "Question 103",
      explanation: "",
    },
    {
      content:
        "An administrator would like to know which delegated administrators are actively customizing their organization.\ntheir organization. Where can the administrator find this information?",
      options: [
        "A. Setup audit trail",
        "B. Login history",
        "C. Delegated administrator log",
        "D. Debug log",
      ],
      answer: "A",
      title: "Question 104",
      explanation: "",
    },
    {
      content:
        "Salesforce Knowledge offers the ability to store PowerPoint files, PDFs, office documents, and any other type of file with no restriction on size or length.",
      options: ["A. True", "B. False"],
      answer: "B",
      title: "Question 105",
      explanation: "",
    },
    {
      content:
        "Salesforce Knowledge offers administrators the ability to fully customize the way an article type displays to an end user.",
      options: ["A. True", "B. False"],
      answer: "A",
      title: "Question 106",
      explanation: "",
    },
    {
      content:
        "What is the maximum file size that can be uploaded in CRM Content?",
      options: ["A. 10GB", "B. 2GB", "C. 500MB", "D. 100MB"],
      answer: "B",
      title: "Question 107",
      explanation: "",
    },
    {
      content:
        "A custom object was created at Universal Containers to store information employees will need for their annual reviews. Only the employee should be able to access their records. The administrator has set Organization-Wide Defaults to private for the object. These records are accessible by the employee's manager.\nWhat additional step should be taken to remove the manager's access to these records?",
      options: [
        "A. Recalculate the sharing rules in sharing settings.",
        "B. Uncheck grant access using hierarchies in sharing settings.",
        "C. Uncheck the manual sharing for the custom object on each profile.",
        "D. Remove access to the custom object on the manager's profile.",
      ],
      answer: "A",
      title: "Question 108",
      explanation: "",
    },
    {
      content:
        "SFB Industries have set their Sales users profiles to read only on cases. But they have recently created a sharing rule that grants all sales users write access. What is true about the sales users level of access?",
      options: [
        "A. They cannot edit cases",
        "B. They can only edit cases if they are the owner of the case",
        "C. They can edit cases",
        "D. They can only edit cases if they are the owner of the account",
      ],
      answer: "A",
      title: "Question 109",
      explanation: "",
    },
    {
      content:
        "In a private sharing model, what is a possible reason a user can view an account record without being the record owner or system administrator?",
      options: [
        "A. The user's direct report in the role hierarchy owns the account.",
        "B. The user is a member of the account team.",
        "C. The user is in a public group at the top of the group hierarchy.",
        "D. The user is a member of a queue that owns the account.",
      ],
      answer: "A,B",
      title: "Question 110",
      explanation: "",
    },
    {
      content:
        "Universal Containers uses a custom object to track customer complaints. The company wants to have a field on the custom object where they can include a reference to another complaint.\nWhat types of relationship can be used to accomplish this?",
      options: [
        "A. Junction",
        "B. Lookup",
        "C. Hierarchical",
        "D. Master-detail",
      ],
      answer: "B",
      title: "Question 111",
      explanation: "",
    },
    {
      content: "What Publisher Action cannot be Global?",
      options: ["A. Update", "B. Log a Call", "C. Create", "D. Custom"],
      answer: "A",
      title: "Question 112",
      explanation: "",
    },
    {
      content:
        "The recruiting manager at Universal Containers has requested a new picklist value in the Type field on the Position object by the end of the week. If the administrator is unable to complete this request in the desired timeline, what type of access will allow the recruiting manager to make the changes in Salesforce?",
      options: [
        "A. Delegated administration to manage recruiting users",
        "B. Create, Read, Edit, and Delete access to the Position object",
        "C. Modify All and View All access to the Position object",
        "D. Delegated administration over the Position object",
      ],
      answer: "D",
      title: "Question 113",
      explanation: "",
    },
    {
      content:
        "If your support process is not based on individual service contracts which steps should you perform when settling up entitlements?",
      options: [
        "A. set up service contracts b. set up contract line items",
        "B. set up both service contracts and contract line items",
        "C. customize entitlement fields and entitlements page layout",
      ],
      answer: "B",
      title: "Question 114",
      explanation: "",
    },
    {
      content:
        "A change set that has already been submitted for deployment is missing a component. What can you do in order to correct the issue?",
      options: [
        "A. Create another change set containing all components and deploy it",
        "B. Edit the change set, deactivate it and then add the missing component",
        "C. Deploy the change set and then submit another change set for deployment",
        "D. Clone the change set. edit the components and deploy it",
      ],
      answer: "D",
      title: "Question 115",
      explanation: "",
    },
    {
      content:
        "Which Objects in Salesforce does Data.com allow you to cleanse? (Select 3)",
      options: ["A. Contacts", "B. Leads", "C. Cases", "D. Accounts"],
      answer: "A,B,D",
      title: "Question 116",
      explanation: "",
    },
    {
      content:
        "What permission would you need to locate duplicate records that you do not own in a custom object?",
      options: ["A. Merge", "B. Read, Edit", "C. View All Data", "D. Delete"],
      answer: "C",
      title: "Question 117",
      explanation: "",
    },
    {
      content:
        "Which two requirements must be met for a user to view knowledge Articles within a Salesforce organization?\nCheck 2 answers.",
      options: [
        "A. The user must be assigned a Salesforce Knowledge license.",
        "B. The user must have the manage articles permission on the profile.",
        "C. The user must have access to the articles tab.",
        "D. The user's profile must have the read permission for the at lease one article type.",
      ],
      answer: "C,D",
      title: "Question 118",
      explanation: "",
    },
    {
      content:
        "Suggest a feature that SFB Industries can enable to increase call deflection.",
      options: [
        "A. Click-to-dial",
        "B. Email-to-Case",
        "C. Live Chat",
        "D. Public Knowledge Base",
      ],
      answer: "D",
      title: "Question 119",
      explanation: "",
    },
    {
      content:
        "Your support process is NOT based on individual service contracts. Which steps should you perform when setting up entitlements?",
      options: [
        "A. Customize entitlements fields and the entitlements page layout",
        "B. Set up contract line items",
        "C. Set up service contracts",
        "D. Set up both service contracts and contract line items",
      ],
      answer: "A",
      title: "Question 120",
      explanation: "",
    },
    {
      content:
        "To set the default level of access for users to be able to access each other's records, you would use:\nSelect one:",
      options: [
        "A. Territory Management",
        "B. Organization Wide Defaults.",
        "C. Sharing Rules.",
        "D. The Role Hierarchy.",
      ],
      answer: "B",
      title: "Question 121",
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
      answer: "C,D",
      title: "Question 122",
      explanation: "",
    },
  ],
});
