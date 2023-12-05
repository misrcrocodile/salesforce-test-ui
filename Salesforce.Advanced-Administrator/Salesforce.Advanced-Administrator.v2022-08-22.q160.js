window.testContent = window.testContent || [];
var testId = "Salesforce.Advanced-Administrator";
var testName = "Salesforce.Advanced-Administrator";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "Salesforce.Advanced-Administrator.v2022-08-22.q160",
  content: [
    {
      content:
        'The sales team has requested that a new field be added to accounts called Current Customer. The default value will be No and will change "Yes" if any related opportunity is successfully closed as won.\nWhat can an admin do to meet this requirement?',
      options: [
        "A. Configure current customer as a text field and use an approval process to recalculate its value",
        "B. Use a workflow rule on the Opportunity object that sets the current customer filed an opportunity is won.",
        "C. Use an Apex trigger on the Account object that sets the Current customer field when an opportunity is won.",
        "D. Configure current customer as a roll-up summary field that will recalculate whenever an opportunity is won",
      ],
      answer: "C",
      title: "Question 1",
      explanation: "",
    },
    {
      content:
        "Users report they are getting an Apex trigger error when they try to save a specific Account record. How could an administrator collect more information about the processing for that record?",
      options: [
        "A. Activate debug logging for the Apex trigger.",
        "B. Review the Setup Audit Trail",
        "C. Enable debug Logging for the user.",
        "D. Create a Flow with a fault connector.",
      ],
      answer: "A",
      title: "Question 2",
      explanation: "",
    },
    {
      content:
        "Which two should an administrator consider when setting up Salesforce CRM Content ? Choose 2 answers.",
      options: [
        "A. An approval process can ensure that all product-related content is reviewed.",
        "B. The library type determines the size of files that can be contributed to content.",
        "C. The content type determines which fields appear on the Content Detail page layout.",
        "D. A validation rule can ensure a description is required for all contributed content.",
      ],
      answer: "C,D",
      title: "Question 3",
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
      title: "Question 4",
      explanation: "",
    },
    {
      content:
        "If you wanted to make a report that shows sales growth year over year, which logical command would you use? * (1 Point)",
      options: [
        "A. priorval custom field",
        "B. preVal",
        "C. prevGroupVal",
        "D. Parentgroupval",
      ],
      answer: "C",
      title: "Question 5",
      explanation: "",
    },
    {
      content:
        "The administrator at Cloud Kicks recently replaced several case workflow rules with a single before save flow. Since this change, some cases are routing In unexpected ways.\nWhat could be the cause or the charges to routing?",
      options: [
        "A. The flow precedes assignment rules; workflow rules are after assignment rules.",
        "B. Assignment rules no longer reference the correct fields.",
        "C. The old workflow rules are still active and impacting routing.",
        "D. Multiple automation tools have been used and the automation is executed in a different order.",
      ],
      answer: "A",
      title: "Question 6",
      explanation: "",
    },
    {
      content:
        "Which of the following is NOT true about article types in Salesforce Knowledge? * (1 Point)",
      options: [
        "A. Article Types should enable 'actionable' content.",
        "B. Article Types may include attachments.",
        "C. Article Types are typically short HTML documents.",
        "D. An organization must have 2 article types to enable Knowledge.",
      ],
      answer: "D",
      title: "Question 7",
      explanation: "",
    },
    {
      content:
        "An administrator wants to allow users who are creating leads to have access to the find duplicates button.\nWhich lead object-level permission will the administrator need to provide to these users? * (1 Point)",
      options: ["A. View All", "B. Merge", "C. Read and Edit", "D. Delete"],
      answer: "A",
      title: "Question 8",
      explanation: "",
    },
    {
      content:
        "When the delete permission is selected in a muting permission set, which other permission is automatically muted?",
      options: [
        "A. View Al Data",
        "B. New Al Records",
        "C. Modify All Data",
        "D. Modify All Records",
      ],
      answer: "D",
      title: "Question 9",
      explanation: "",
    },
    {
      content:
        "Which three features are supported in delegated administration?",
      options: [
        "A. Unlock Communities users",
        "B. Create and edit users",
        "C. Unlock non-Communities users",
        "D. Set org-wide sharing defaults",
        "E. Manage custom objects",
      ],
      answer: "B,C,E",
      title: "Question 10",
      explanation: "",
    },
    {
      content:
        'The wrong choices on the list should be improved.\nA lead needs to be assigned automatically to a Sales Rep if there has been no action on the account after 10 days. And the Deal status should be set to "Stalled" after it has been approved by a Manager. Which automation processes can a system administrator use? * (1 Point)',
      options: [
        "A. Assignment Rule. Approval Process. Workflow Rule",
        "B. Assignment Rule. Auto-Response Rule, Workflow Rule",
        "C. Assignment Rule, Approval Process",
        "D. Validation Rule. Assignment rule. Approval Process.",
      ],
      answer: "C",
      title: "Question 11",
      explanation: "",
    },
    {
      content:
        "Which two deployment tools should be used to deploy metadata from a Developer Edition organization to another organization?\nChoose 2 answers",
      options: [
        "A. Data Loader",
        "B. Salesforce Extensions for Visual Studio Code",
        "C. Change sets",
        "D. Ant Migration Tool",
      ],
      answer: "C,D",
      title: "Question 12",
      explanation: "",
    },
    {
      content:
        "What is the first step before setting up entitlements? * (1 Point)",
      options: [
        "A. Enable entitlement management",
        "B. Set up service contracts",
        "C. Specify the entitlements-related lookup filters on cases",
        "D. Customize entitlements fields",
      ],
      answer: "A",
      title: "Question 13",
      explanation: "",
    },
    {
      content:
        "The recruiting manager at universal containers has requested a new picklist value in the type field on the position object by the end of the week.\nIf the administrator is unable to complete this request in the desired timeline, what type of access will allow the recruiting manager to make the changes in salesforce?",
      options: [
        "A. Modify all and view all access to the position object.",
        "B. Delegated administration over the position object.",
        "C. Delegated administration to manage recruiting users.",
        "D. Create, Read, Edit and Delete access to the position object.",
      ],
      answer: "B",
      title: "Question 14",
      explanation: "",
    },
    {
      content:
        "What are two considerations an administrator should consider when setting up quotes?\nChoose 2 answers",
      options: [
        "A. Discount fields on quotes can be a negative number",
        "B. Quote PDF text aligns to the left side of the page instead of the right.",
        "C. Quotes can be synced with multiple active quotes",
        "D. When a quote is deleted the related opportunity and products are deleted as well",
        "E. Price books must be active in an opportunity before you can create quote for the opportunity",
      ],
      answer: "B,E",
      title: "Question 15",
      explanation: "",
    },
    {
      content:
        "Select power users want the ability to make configuration changes to a specific custom object.\nWhat tool should the administrator assign to the power users to enable this?",
      options: [
        "A. Sharing Rule",
        "B. Modify All Data",
        "C. Delegated Administration",
        "D. View Setup and Configuration",
      ],
      answer: "C",
      title: "Question 16",
      explanation: "",
    },
    {
      content:
        "A sales manager cannot view a contact owned by a salesperson. The salesperson is below the sales manager in the role hierarchy. Why can't the sales manager view the contact?",
      options: [
        "A. Contact sharing settings have Grant Access Using Hierarchies unchecked.",
        "B. The contact has not been manually shared with the manager.",
        "C. The contact is not linked to an account.",
        "D. Contact sharing settings are Private.",
      ],
      answer: "C",
      title: "Question 17",
      explanation: "",
    },
    {
      content:
        "An administrator at Universal Containers hat completed a new set of validation rule along with a Process Builder in a sandbox and wants to move these changes to production via a change set but they are currently unable to do so.\nWhat are two configurations an administrator needs before they are able to deploy changes? Choose 2 answers",
      options: [
        "A. The Production Org must be configured to Allow inbound Changes from the sandbox",
        "B. Create the Validation Rules in Production because they can't be deployed via Change Sets",
        "C. The Sandbox must be configured to Allow Outbound Changes to Production",
        "D. The Deploy Change Sets permission must be granted",
      ],
      answer: "A,C",
      title: "Question 18",
      explanation: "",
    },
    {
      content:
        "Universal Containers uses Salesforce Knowledge and has defined its category groups based on the regions of Europe, of Americas, Africa, and Asi a. The administrator needs to restrict visibility of each category to the sales representatives within each region. How should the administrator control access to these category groups?",
      options: [
        "A. Modify object settings for the category groups on the sales users profiles.",
        "B. Add custom category groups to the profiles assigned to the sales users.",
        "C. Add or remove sales users from a public group with access to the category groups.",
        "D. Add custom category groups to the roles assigned to the sales users.",
      ],
      answer: "D",
      title: "Question 19",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks wants its sales reps to always use the same full zip code format with a hyphen where applicable.\nWhat should the administrator implement to help ensure consistent formatting?",
      options: [
        "A. Edit the standard field length to five characters.",
        "B. Add a quick create function for the sales reps to use.",
        "C. Add a help text instructing the sales rep on how to enter this field.",
        "D. Create a REGEX function to use in a validation rule on the field.",
      ],
      answer: "D",
      title: "Question 20",
      explanation: "",
    },
    {
      content:
        "Sales management wants to enforce a process in which the name of an account is always included in the name of an opportunity. How can automation be used to help meet this requirement?",
      options: [
        "A. Write a criteria-based workflow rule that updates the opportunity name concatenated with the account name.",
        "B. Use approval process that routes newly created opportunities to management for data quality review.",
        "C. Use an Apex Trigger on the Account object that adds the account name to the opportunity name.",
        "D. Write a validation rule that updates the opportunity name with the account name using a cross-object formula.",
      ],
      answer: "A",
      title: "Question 21",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks has o custom object called Membership Details that records information about customers' preferences for their memberships. Depending, on the membership level, different data needs to be displayed.\n* when cue running user has the Market no profile, all data should be visible.\n* When the running user has the Support profile, only the Support preference fields should be visible.\n* Both Marketing and Support users should be able to report on all data.\nHow should the administrator deliver this solution?",
      options: [
        "A. Make a permission set with a Muting permission.",
        "B. Set up Dynamic forms to conditionally show data.",
        "C. Create two record types und two page layouts.",
        "D. Use Field-Level Security to control data access.",
      ],
      answer: "B",
      title: "Question 22",
      explanation: "",
    },
    {
      content:
        "When should an administrator consider when using Person Accounts'",
      options: [
        "A. In a business model that needs a separate Contact and Account to be included on all Case records submitted.",
        "B. In a complex business model and the users find it easiest to record Opportunity information on Contacts rather than Accounts.",
        "C. In a B2C business model and the consumer is the intended recipient of sates and marketing attention.",
        "D. In a B2B business model and is selling to the primary contact at a business organization.",
      ],
      answer: "C",
      title: "Question 23",
      explanation: "",
    },
    {
      content:
        "What access can users have to Accounts and Opportunities when territory management is enabled? * (1 Point)",
      options: [
        "A. Edit,TransferandDeleteOpportunityrecordsregardlessoftherecordoftheowner",
        "B. Edit Opportunity records regardless of the account owner",
        "C. Transfer and Delete opportunities regardless of the owner of the record",
        "D. View Account records regardless of the account record owner",
      ],
      answer: "D",
      title: "Question 24",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks has two record-triggered flows on the same object. One flow creates a child record when criteria are met. The second record-triggered flow is based on criteria to check if the child record exists and updates a field. The field on the child record that needs to be updated Is still null after the second record trigger.\nWhat should the administrator do to resolve this issue?",
      options: [
        "A. flows into schedule flows and have them update the field.",
        "B. Combine the two flows into one with checks to see which part of the flow needs to be run.",
        "C. Make a new record-triggered flow on the child object to update the field on the parent record.",
        "D. Have the record-triggered flows fire on create or edit to update the field.",
      ],
      answer: "B",
      title: "Question 25",
      explanation: "",
    },
    {
      content: "What is a capability of Territory management? Choose 2 answers",
      options: [
        "A. The ability to use opportunity criteria to expand a private sharing model",
        "B. The ability to use account criteria to expand a private sharing model",
        "C. Support for complex and frequently changed sales organization structures",
        "D. Territory hierarchy replaces the role hierarchy for sharing",
      ],
      answer: "B,C",
      title: "Question 26",
      explanation: "",
    },
    {
      content:
        "Universal Containers has a Positions object that represents job Positions and a Applications object that represent people that have applied to the position. The Job Application object has a lookup to position. They want to run a report that shows all Positions that do NOT have any child job Applications.\nWhich solution would meet the requirements?",
      options: [
        "A. Use the standard Position report type with a cross filters.",
        "B. Use the standard Job Application with Position report type.",
        "C. Use the standard Position without job Application report type.",
        "D. Use a custom report type that only displays job Application without Positions.",
      ],
      answer: "D",
      title: "Question 27",
      explanation: "",
    },
    {
      content:
        "Which of the following options would be used to limit the number of records and assist with data consistency? * (1 Point)",
      options: [
        "A. Custom formula fields",
        "B. Record types and page layouts",
        "C. Picklist and dependent picklist fields",
        "D. Custom lookup fields and lookup filters",
        "E. Workflow field updates",
      ],
      answer: "D",
      title: "Question 28",
      explanation: "",
    },
    {
      content:
        "Universal Containers is using approval process with email notifications to streamline administrator process, A new approval process has been written that allow for delegated approvers. In testing, resulting show the primary approver is receiving the email notification but the delegated approver is NOT.\nWhich two steps should an administrator take to troubleshoot?",
      options: [
        "A. Verify that each approval step is set to allow delegated approvers.",
        "B. Check the delegated approver's user settings.",
        "C. Verify that the email was sent in the setup Audit Trail.",
        "D. Check Approval History to make sure the Submit for approval button was clicked.",
      ],
      answer: "B,C",
      title: "Question 29",
      explanation: "",
    },
    {
      content:
        "A member of Universal Container's support team is assisting a sales rep in managing a top customer. The sales rep has manually shared an opportunity with the support member in hopes that the support member can update some of the technical sales fields on the record. But the support member is unable to edit the opportunity.\nWhat is the recommended solution to provide edit access to the opportunity?",
      options: [
        "A. Change the support team member's role to a above the sales rep in the org's role hierarchy.",
        "B. Add the support team member to the opportunity team. Assign read/write access to the member.",
        "C. Change the Organization Wide Default internal access for opportunity to public read/write.",
        "D. Create a permission set for opportunity edit and add it to the support member's user record.",
      ],
      answer: "C",
      title: "Question 30",
      explanation: "",
    },
    {
      content:
        "The Sales Manager at Universal Containers would like a dashboard to view each of the sales representative's opportunities, accounts, and related cases. What is a recommended solution?",
      options: [
        "A. Create a dashboard and add filters for users, opportunities, accounts, and cases.",
        "B. Create an individual dashboard for each sales representative with opportunity, account, and case components.",
        "C. Create a dynamic dashboard and add filters for opportunities, accounts and cases.",
        'D. Create a dynamic dashboard and insure the sales manager has the "View My Team\'s Dashboard" permission.',
      ],
      answer: "D",
      title: "Question 31",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks wants to force its users to set a value for a custom called Tier by answering a series of questions.\nWhat two functions should the administrator use to ensure that users cannot bypass answering these questions in order to determine their Tier value.\nChoose 2 answers",
      options: [
        "A. Set up a restriction rule on the field.",
        "B. Use a screen flow to ask the question.",
        "C. Set up a list view for the list of questions.",
        "D. Make the field Read Only on the page layout.",
      ],
      answer: "B",
      title: "Question 32",
      explanation: "",
    },
    {
      content:
        "What type of prices can the system administrator set for an organization's products?",
      options: [
        "A. Product prices.",
        "B. List prices.(100%)",
        "C. Sales prices.(100%)",
        "D. Standard prices.(100%)",
        "E. Discount prices.",
      ],
      answer: "B,C,D",
      title: "Question 33",
      explanation: "",
    },
    {
      content:
        "Universal Containers uses Enterprise Territory Management to assist with the assignment of records. Each territory has only one user assigned. A sales rep converts a lead to an opportunity and the lead owner belongs to the same territory as an account that the opportunity was converted to.\nWhat ts the expected assignment of the opportunity?",
      options: [
        "A. The opportunity is assigned to the same territory as the account, and the lead owner becomes the opportunity owner.",
        "B. The opportunity is assigned to the forecast manager of the territory.",
        "C. The opportunity is assigned to the same territory as the account,, and the lead owner becomes the opportunity owner. The lead owner is added as an inactive member of the territory,",
        "D. A The opportunity is assigned to the same territory as the account, and the opportunity owner is the sole member of the territory.",
      ],
      answer: "D",
      title: "Question 34",
      explanation: "",
    },
    {
      content:
        "The distributors at Cloud Kicks are eligible for support based on a specific service contract-How should the administrator show this in Salesforce?",
      options: [
        "A. Add a service contract to the record.",
        "B. Use entitlement management.",
        "C. Build a new custom object.",
        "D. Turn on Service Cloud.",
      ],
      answer: "B",
      title: "Question 35",
      explanation: "",
    },
    {
      content:
        "Universal Containers plans to migrate its existing knowledge base in to Salesforce Lightning Knowledge. Which two statements must be considered? Choose2 answers.* (1 Point)",
      options: [
        "A. Each article must be associated to a record type",
        "B. Approval process history migrate to Lightning Knowledge",
        "C. Article numbers change during migration",
        "D. Classic Knowledge Attachments are moved to the files related list",
      ],
      answer: "A,D",
      title: "Question 36",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants to track expense reports and expense line items. Values from expense line item records need to be aggregated and displayed on the expense record. What type of relationship should an administrator use to ensure that expense line items can be aggregated?",
      options: [
        "A. Roll-up summary",
        "B. Lookup",
        "C. Hierarchical",
        "D. Master-detail",
      ],
      answer: "D",
      title: "Question 37",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks has created a new flow that deletes records.\nWhat should the administrator consider when testing the flow?",
      options: [
        "A. Flow with delete elements need to ne inactivate to ensure that the test record is not actually deleted.",
        "B. Record deleted by Flow when debugging are hard deleted.",
        "C. Flows with delete elements cannot be debugged by the Flow debugged tool.",
        "D. Even if the flow is inactive, debugging the flow will delete the test record.",
      ],
      answer: "D",
      title: "Question 38",
      explanation: "",
    },
    {
      content:
        "On the Planet custom object, Ursa Major Solar's sales director wants only certain action buttons to appear depending on if a given planet is defined as gaseous.\nWhich Lightning component should the administrator define dynamic action buttons?",
      options: [
        "A. Related Lists",
        "B. Highlights Panel",
        "C. Record Detail",
        "D. Activities",
      ],
      answer: "B",
      title: "Question 39",
      explanation: "",
    },
    {
      content:
        "A user changes roles from an EMEA sales representative to a US sales representative. How will this impact the ownership-based sharing rules for the user's records?",
      options: [
        "A. This will only affect ownership-based sharing rules if the user moves up in the role hierarchy.",
        "B. None of the ownership-based sharing rules are recalculated.",
        "C. This will affect the ownership of records for standard objects but not custom objects.",
        "D. All of the ownership-based sharing rules are recalculated.",
      ],
      answer: "D",
      title: "Question 40",
      explanation: "",
    },
    {
      content:
        "Universal Containers would like applicants to apply for multiple positions, tracking how many applicants have applied and how many positions each individual applicant has applied for. To do this, the administrator will create a Job Application junction object between Applicant and Position objects. Why will this action meet the requirement ?",
      options: [
        "A. The Job Application object as a master to Positions and Applicant objects will allow rollup summary fields on the Positions and Applicant objects.",
        "B. The junction object allows a many-to-many relationship and also roll-up summary fields on the parent objects.",
        "C. The junction object allows the administrator to add a workflow rule to update fields on the Position and Applicant objects.",
        "D. A lookup relationship on the Applicant object with Position as the master provides rollup summary fields without code.",
      ],
      answer: "B",
      title: "Question 41",
      explanation: "",
    },
    {
      content:
        'What are the different ways a Visual Workflow "flow" can be deployed? (Choose three answers.) * (1 Point)',
      options: [
        "A. Apex Trigger",
        "B. Visualforce page",
        "C. Field Updates",
        "D. Custom button",
        "E. Custom link",
      ],
      answer: "B,D,E",
      title: "Question 42",
      explanation: "",
    },
    {
      content:
        "Users at AW Computing use a custom object to manage order*. All profiles share a single page layout. Customer Service and Sales users express frustration overseeing actions that-do not always apply to their situation on the page layout.\nWhat should an administrator recommend?",
      options: [
        "A. Create separate record types for the Customer Service and Sales users' records.",
        "B. Use Dynamic Actions and conditional visibility to show the appropriate actions to the applicable users.",
        "C. Configure two separate permission sets and assign the appropriate permissions to each user.",
        "D. Make two separate Lightning record pages and assign them to the applicable profiles.",
      ],
      answer: "B",
      title: "Question 43",
      explanation: "",
    },
    {
      content:
        "At Cloud Kicks, the distributor account information is sensitive information. The administrator needs to make sure this information is unavailable to testers in the full sandbox.\nWhat should the administrator recommend?",
      options: [
        "A. Delete the sensitive information.",
        "B. Use the data masking tool.",
        "C. Assign the users a new permission set.",
        "D. Refresh the sandbox.",
      ],
      answer: "B",
      title: "Question 44",
      explanation: "",
    },
    {
      content:
        "When an opportunity with at least one opportunity product close wins, Universal containers requires that an Invoice_c record be created with Invoice_Line_Item_c records for each Product on the Opportunity. How should an administrator implement this request? * (1 Point)",
      options: [
        "A. Use a Process Builder that calls a Flow",
        "B. Use Einstein Next Best Actions",
        "C. Use a custom button on the Opportunity",
        "D. Use an Opportunity Approval Process",
      ],
      answer: "A",
      title: "Question 45",
      explanation: "",
    },
    {
      content:
        "what action is required before a change set can be deployed from a sandbox environment to a production environment? choose 2",
      options: [
        "A. configure the deployment connection in the sandbox to allow inbound\n         changes.",
        "B. create an outbound change set in the sandbox that includes the components to be moved",
        "C. Install the force.com IDE and configure its settings to work with change sets.",
        "D. Configure the deployment connection in production to allow inbound changes.",
      ],
      answer: "B,D",
      title: "Question 46",
      explanation: "",
    },
    {
      content:
        "What should a system administrator consider before using territory management? Choose three answers. * (1 Point)",
      options: [
        "A. Forecasts are derived from Territory hierarchy not Role hierarchy",
        "B. It does not working parallel with sharing functions",
        "C. You need to contact Salesforce to have it enabled",
        "D. Once enabled it cannot be disabled",
      ],
      answer: "A,C,D",
      title: "Question 47",
      explanation: "",
    },
    {
      content:
        "What should the administrator consider before enabling Person Accounts?",
      options: [
        "A. Person Account and Business Accounts cannot be in the same sharing model.",
        "B. Person Account requires less data storage.",
        "C. Person Account cannot be disabled.",
        "D. All standard Account news can be converted to Person Account field.",
      ],
      answer: "C",
      title: "Question 48",
      explanation: "",
    },
    {
      content:
        "The sales operations team has required a new custom object with the\nfollowing requirement:\n. The sales managers should have full access to all records created\n. The object's sharing default should be set to private.\n. No new sharing rules should be created.\nhow can the system administrator set up the security for this object? choose 2",
      options: [
        'A. Add the "modify all" permission to the sales manager profile for the new object',
        'B. Create a Record type with "Modify all" checked, and assign this Record type to the sales manager profile.',
        'C. create a role for all sales Manager users with "Modify all" checked for the object.',
        'D. Create a permission set for all sales Manager users with "modify all" checked for the object.',
      ],
      answer: "C",
      title: "Question 49",
      explanation: "",
    },
    {
      content:
        "Which two tools should an administrator use to required data to be entered in a field and improve data quality on a record in Salesrorce?\nChoose 2 answers",
      options: [
        "A. Page Layouts",
        "B. validation Rules",
        "C. Dashboards",
        "D. Workflow Rules",
      ],
      answer: "A,B",
      title: "Question 50",
      explanation: "",
    },
    {
      content:
        "Leads come to universal containers from various sources and need to be assigned to the correct sales team. When a lead comes for the APAC region, it can be passed to an external partner if the sales director approves the transfer. The partner's channel manager must be notified when the partner has been assigned the lead.\nAt the minimum, which combination of automation tools will be needed to meet these requirements?",
      options: [
        "A. Assignment rules and workflow rules.",
        "B. Assignment rules, auto-response rules, and workflow rules",
        "C. Assignment rules and approval processes",
        "D. Assignment rules, approval processes, and workflow rules",
      ],
      answer: "D",
      title: "Question 51",
      explanation: "",
    },
    {
      content:
        "A sales manager wants to edit the opportunities owned by the sales team. The manager does not have Edit access to the Opportunity object. What is a recommended solution? * (1 Point)",
      options: [
        "A. Change the opportunity's organization-wide default setting to Public Read/Write",
        "B. Create permission set and associate Edit opportunity to the user record",
        'C. Redefine the role hierarchy by enabling"grant access using hierarchies',
        "D. Enable team selling on the Opportunity object to Grant Read/Writeaccess",
      ],
      answer: "B",
      title: "Question 52",
      explanation: "",
    },
    {
      content:
        "how can an administrator use the service cloud console to increase the efficiency of support users? choose 3",
      options: [
        "A. configure it to manage chatter answers cases and live agent chat conversations.",
        "B. use publisher actions in case feed to combine the publisher extension menus in a single row.",
        "C. configure the idea themes page layout with buttons and links to case detail information",
        "D. customize the softphone to provide a screen pop-up on incoming support calls.",
        "E. enable the service cloud console application in salesforce communities.",
      ],
      answer: "A,D,E",
      title: "Question 53",
      explanation: "",
    },
    {
      content:
        "Northern Trail Outfitters (NTO) is expending into the U.K. While most of NTO's product are the same as in the US. Pricing will vary from product due to shipping and raw material cost differences.\nWhat should the administrator configure for a smooth rollout to the U.K.?",
      options: [
        "A. Write a flow the translates the currency from dollars to euros using a custom Exchange Rate field.",
        "B. Add a new U.K Order Form that has the euro symbol instead of the dollar symbol.",
        "C. Create a new Price Book for the U.K product pricing.",
        "D. Configure a U.K Opportunity record type.",
      ],
      answer: "C",
      title: "Question 54",
      explanation: "",
    },
    {
      content:
        "pay grade on the custom Position object need updating and require frequent change. Because frequent changes have to be made to these Position fields, they are requesting the ability to update these picklist values.\nWhich feature should the administrator consider that allows for this?",
      options: [
        "A. A permission set containing the modify all data permission for the Position object.",
        "B. Delegated administration for the Position object",
        "C. Screen Flow using custom metadata types",
        "D. Field accessibility set to editable for the picklists for the Position object.",
      ],
      answer: "B",
      title: "Question 55",
      explanation: "",
    },
    {
      content:
        "Universal Container (UC) is considering using Communities. Each partner is associated with a product and will need a separate community?\nSome partners will need to access to more than one community.\nWhat are two consideration an administrator should be aware of?\nChoose 2 answers",
      options: [
        "A. The org limit of 100 communities includes active, inactive, and preview communities.",
        "B. Communities licenses are associated with a specific community.",
        "C. Community license choice of member-based or login-based.",
        "D. The org limit of 100 community does not include inactive or preview communities.",
      ],
      answer: "A,C",
      title: "Question 56",
      explanation: "",
    },
    {
      content:
        "Universal containers uses a private sharing model for accounts. A user who owns an account record needs to temporarly grant delete access to this records associated contacts to another user. how can this be accomplished?",
      options: [
        "A. Transfer ownership of the account record to the user.",
        "B. Add the user to the owner's default account team",
        "C. Manually add the user to the account team.",
        "D. Use the manual sharing button on the account.",
      ],
      answer: "A",
      title: "Question 57",
      explanation: "",
    },
    {
      content:
        "A user is getting an error when attempting to merge two accounts. The administrator checks the profile to see the user has Read/Write permission on Accounts and is the owner of both records.\nWhat is preventing the user from completing the merge?",
      options: [
        "A. The user is assigned to the wrong territory,",
        "B. The Delete permission Is missing on the user for Accounts.",
        "C. The Account matching rules are not set.",
        "D. Only administrators have permission to merge records.",
      ],
      answer: "B",
      title: "Question 58",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks (CK) wants the forecast numbers to be shown by territory regardless of who owns the record. CK also wants a way to forecast based on role hierarchy.\nWhich three options should an administrator recommend?\nChoose 3 answers",
      options: [
        "A. Enable Territory Forecast.",
        "B. Have the user select the forecast type listed under the Forecast Type in the Display Settings.",
        "C. Make a custom field to track the amounts for Territory and Hierarchy Forecast.",
        "D. Enable Role Hierarchy Forecast.",
        "E. Modify the Territory Forecast to match the Hierarchy Forecast model.",
      ],
      answer: "A,B,D",
      title: "Question 59",
      explanation: "",
    },
    {
      content:
        "After setting up field history tracking on the Account object, the administrator for AW Computing wants to retrieve the field history data for analysis.\nhow should the administrator acquire this data?",
      options: [
        "A. Create a list view of Account History and print using the Printable View action.",
        "B. Create a report of Accounts and export it to Excel.",
        "C. Query and export the Account History object using Data Loader.",
        "D. Use the Data export service in setup.",
      ],
      answer: "C",
      title: "Question 60",
      explanation: "",
    },
    {
      content:
        "What is the maximum file size that can be uploaded in CRM Content? * (1 Point)",
      options: ["A. 2GB", "B. 10GB", "C. 500MB", "D. 100MB"],
      answer: "A",
      title: "Question 61",
      explanation: "",
    },
    {
      content:
        "Dylan has submitted a vacation request for approval by his manager, but the manager is not receiving any email alerts. What can you use in order to troubleshoot the issue? Choosetwoanswers.* (1 Point)",
      options: [
        "A. Email log",
        "B. The Setup Audit Trail",
        "C. Debug Log",
        "D. A Time-Based Workflow",
      ],
      answer: "A,C",
      title: "Question 62",
      explanation: "",
    },
    {
      content:
        "Your company sells large mainframes that are delivered in one delivery but are paid for with several regular installments. What type of schedule should you set up? * (1 Point)",
      options: [
        "A. Default Quantity Schedule",
        "B. Default Revenue and Quantity Schedule",
        "C. Default Revenue Schedule",
        "D. Don't create any default schedule",
      ],
      answer: "C",
      title: "Question 63",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks has updated several profiles and created a new app in the sandbox. After testing, everything is working as expected. Which two options should the administrator use to migrate these changes to production from the sandbox?\nChoose 2 answers",
      options: [
        "A. Inbound Change Set",
        "B. Outbound Change Set",
        "C. Change Data Capture",
        "D. Package deployment",
      ],
      answer: "B,D",
      title: "Question 64",
      explanation: "",
    },
    {
      content:
        "What permissions would you need if you want to merge accounts with related lists of cases and opportunity? * (1 Point)",
      options: [
        "A. delete on the Account object",
        "B. deletion Account objects and edition Opportunities and Cases",
        "C. edition Opportunity and Cases objects",
        "D. edit on Account objects and edit on Opportunities and Cases",
        "E. edit on Account objects and delete on Opportunities and Cases",
      ],
      answer: "B",
      title: "Question 65",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks call center agents have given their manager feedback that It takes too long to find relevant articles to answer questions on customer cases. The call center manager has asked the administrator to improve suggestions displayed to agents in the Knowledge component on Cases.\nWhich setting should the administrator use to meet the requirement?",
      options: [
        "A. Turn off auto-complete keyword search",
        "B. Selected Case Fields",
        "C. Highlights and Snippets",
        "D. Enable Einstein Search",
      ],
      answer: "D",
      title: "Question 66",
      explanation: "",
    },
    {
      content:
        "A previous consultant helped Universal Containers automate many of its business processes. The administrator changed the email address on the consultant's user record and deactivated it. The consultant called to say they continue to get email messages from failed flows and processes.\nWhat steps should the administrator perform to stop the fault messages from going to the consultant?",
      options: [
        "A. Request an Email Log from Email Log Files in Setup and filter the request by the consultant's email. Manually update any flows or processes listed on the log.",
        "B. Create a custom metadata type and associate the LastModifiedBy field. Write a flow that updates the field in any flows or processes equal to the consultant's name.",
        "C. Set Send Process or Flow Error Email' to Apex Exception Email Recipients' in Automation settings. Add the System Admin's email to the Apex Exception Email page in Setup.",
        "D. Export Flow Interviews filtered by LastModifiedBy.email using Data Loader. In the .csv file, change LastModifiedBy to the System Admin and upload changes with Data Loader.",
      ],
      answer: "C",
      title: "Question 67",
      explanation: "",
    },
    {
      content:
        "Sales leaders at Ursa Major Solar would like to be able to calculate forecasts based on megawatts.\nHow can the administrator create forecast types based on a megawatts measurement?",
      options: [
        "A. Customize a standard field.",
        "B. Use a standard currency field.",
        "C. Create a custom formula field.",
        "D. Create a custom number field.",
      ],
      answer: "D",
      title: "Question 68",
      explanation: "",
    },
    {
      content:
        "an administrator has been asked to set up two custom objects named issues and tickets. multiple tickets can be associated with each issue, and each issue may be associated with multiple tickets.\nhow should the administrator set up the relationship between issues and tickets?",
      options: [
        "A. Create a master detail relationship with issues as the master object",
        "B. Create a lookup relationship with tickets as the master object.",
        "C. Create a lookup relationship on both the tickets and issues object.",
        "D. Create a junction object with both tickets and issues as master objects.",
      ],
      answer: "D",
      title: "Question 69",
      explanation: "",
    },
    {
      content:
        "Which three capabilities of Live Agent in the Salesforce Console for Service? Choose 3 answers.",
      options: [
        "A. Chats can be transferred to other agents.",
        "B. The Details tab can be used to see information about the visitor.",
        "C. Multiple visitors can chat in one window",
        "D. The Articles tool can be used to search for Knowledge Articles",
        "E. Approval Processes can be used to escalate cases in the chat window.",
      ],
      answer: "A,B,D",
      title: "Question 70",
      explanation: "",
    },
    {
      content:
        "On the Contact record, if a contact has the value of 'CEO' in the Title field, the administrator wants to require the users to also put a phone number in the Phone field.\nWhat formula should the administrator put in the Error Condition Formula of a validation rule to enable this?",
      options: [
        "A. Title <> 'CEO' && ISBLANK(Phone)",
        "B. Title - 'CEO\" && NOT(ISBLANK(Phone))",
        "C. Title <> 'CEO' && NOT(ISBLANK(Phone))",
        "D. Title = CEO && ISBLANK(Phone)",
      ],
      answer: "D",
      title: "Question 71",
      explanation: "",
    },
    {
      content:
        "A user reports that a field can no longer be seen in a given page layout. What can a system administrator use in order to troubleshoot this? * (1 Point)",
      options: [
        "A. Use Field History Tracking",
        "B. View the system log",
        "C. Perform a Field Audit",
        "D. View the Setup Audit Trail",
      ],
      answer: "D",
      title: "Question 72",
      explanation: "",
    },
    {
      content:
        "The finance director at Cloud Kicks asks the administrator for an exception report that shows all B2C accounts that are missing the credit card number. The credit card number is a classic encrypted field.\nWhat action should the administrator take to meet this requirement?",
      options: [
        "A. Unmask the encrypted credit card number field to make it available and add a custom filter to a report where credit card number is blank.",
        "B. Build a custom checkbox called Has Credit Card' that Finance checks when a credit card is recorded and a tabular report filtered on the checkbox equal to false.",
        "C. Create a summary report that includes a cross-filter to the Account object with a sub-filter for credit card number equal to null.",
        "D. Add 'View Encrypted Fields' to a permission set assigned to Finance and system administrators and a summary report filtered by credit card number.",
      ],
      answer: "B",
      title: "Question 73",
      explanation: "",
    },
    {
      content:
        "The sates VP wants to see the custom Bonus Amount field summed to the Amount level; however, the ability to create a summary field is grayed out.\nWinch adjustment does the administrator need to make in order to utilize a custom summary field?",
      options: [
        "A. Add filter logic",
        "B. Add data grouping.",
        "C. Create ticket field.",
        "D. Reorder columns.",
      ],
      answer: "B",
      title: "Question 74",
      explanation: "",
    },
    {
      content:
        "what should an administrator do before case feeds can be enabled? choose 2",
      options: [
        "A. Enable feed tracking on cases.",
        "B. Enable case assignment rules.",
        "C. Enable chatter.",
        "D. Enable default email templates",
      ],
      answer: "A,C",
      title: "Question 75",
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
      title: "Question 76",
      explanation: "",
    },
    {
      content:
        "AW Computing created new multi-tier service plans. The primary difference between the packages Is the length of the term. The company wants to capture start and end dates for each service plan sold, which can direr from the contract dates of the subscription.\nHow should an administrator ensure the data is captured properly?",
      options: [
        "A. Configure formula fields to reflect the close date of the opportunity.",
        "B. Build a validation rule on the Opportunity object to require custom date fields based on the product(s) selected.",
        "C. Make a validation rule on the Opportunity Product object to require custom date fields based on the product family.",
        "D. Create a new price book for service plans with term lengths.",
      ],
      answer: "A",
      title: "Question 77",
      explanation: "",
    },
    {
      content:
        "Users at AW Computing are receiving a duplicate message when they enter contacts with common first and last names. Management wants to improve the user experience but also keep the data Integrity of contacts.\nWhat should an administrator implement for this issue?",
      options: [
        "A. Update the matching method on the rule from fuzzy to exact for First Name and Last Name.",
        "B. Change the duplicate rule to report Instead of alert so the message is avoided.",
        "C. Add a secondary matching rule to the duplicate rule to match on the associated customer.",
        "D. Include the Email field to the existing matching rule for a more exact match.",
      ],
      answer: "A",
      title: "Question 78",
      explanation: "",
    },
    {
      content:
        "When an administrator enables customizable prebuilt entitlements, which three options are automatically created?\nChoose 3 answers",
      options: [
        "A. Three field updates",
        "B. Three milestone types",
        "C. One Warning Action",
        "D. One escalation rulte",
        "E. One SLA process",
      ],
      answer: "B,D,E",
      title: "Question 79",
      explanation: "",
    },
    {
      content:
        "Universal containers has a workflow rule that sends an email alert to the VP of sales when a large deal is won. The VP is reporting that these emails are not being delivered.\nWhat tool could be used to determine the problem? choose 2",
      options: [
        "A. Workflow monitor.",
        "B. System audit trail.",
        "C. Email log.",
        "D. Debug log.",
      ],
      answer: "A,C",
      title: "Question 80",
      explanation: "",
    },
    {
      content:
        "What deployment tool allows an administrator to validate metadata during package installation, instead of during package version creation?",
      options: [
        "A. Org-Dependent Unlocked Package",
        "B. Managed and Unmanaged Packages",
        "C. Ant Migration Tool",
        "D. Inbound and Outbound Changesets",
      ],
      answer: "B",
      title: "Question 81",
      explanation: "",
    },
    {
      content:
        "Northern Trail Outfitters requires the sales user to input a use case before moving the opportunity stage to qualified. A consultant has reviewed the business requirement and ran a report to check the state of data completion. When pulling a report for opportunities in the qualified stage or beyond, it appears that only 30% of records have a use case filled out with varying text strings.\nWhat should the administrator recommend?",
      options: [
        "A. Create a validation rule and add the Use Case field to the Stage Guidance in Path.",
        "B. Use a quick action with the Use Case field in the layout, and add it as a Lightning component.",
        "C. Write a record-triggered flow that populates the Use Case field when an opportunity is closed.",
        "D. Make the Use Case field required on the master Opportunity layout.",
      ],
      answer: "A",
      title: "Question 82",
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
      title: "Question 83",
      explanation: "",
    },
    {
      content:
        "What are two capabilities of Enterprise Territory Management?\nChoose 2 answers.",
      options: [
        "A. Territory hierarchy replaces the role hierarchy for sharing",
        "B. The ability to use 20 territories assignment rules per model",
        "C. Prioritize territories to indicate highest priority or lowest priority",
        "D. The ability to use filter-based opportunity criteria to expand assignment rules",
      ],
      answer: "C,D",
      title: "Question 84",
      explanation: "",
    },
    {
      content:
        "Which permission do you need to manage entitlements? Choose two answers. * (1 Point)",
      options: [
        'A. "Manage Entitlements"',
        'B. "Customize Entitlement"',
        'C. "Customize Application"',
        'D. "Manage Application"',
      ],
      answer: "A,C",
      title: "Question 85",
      explanation: "",
    },
    {
      content:
        "When a lookup relationship is created between two objects, which three options can the administrator select to help manage situations when a lookup record is deleted?\nChoose 3 answers.",
      options: [
        "A. Prompt the user to enter another record to resolve the lookup relationship.",
        "B. Clear the value of the lookup field.",
        "C. Delete the related record also.",
        "D. Notify the record owner.",
        "E. Do not allow deletion of a lookup record that is part of a lookup relationship.",
      ],
      answer: "B,C,E",
      title: "Question 86",
      explanation: "",
    },
    {
      content:
        "At Ursa Major Solar, there is a custom object called Galaxy. The sales director wants users to only see certain field market.\nWhat Lightning will satisfy this requirement?",
      options: [
        "A. Record Detail Component",
        "B. Fields component",
        "C. Highlights Panel Component",
        "D. Path Component",
      ],
      answer: "B",
      title: "Question 87",
      explanation: "",
    },
    {
      content:
        "An administrator has been asked to create a report showing all newly created chatter groups by a custom designation divided by the four departments that maintain chatter groups- partners, corporate, practices and solutions.\nHow can an administrator meet this reporting requirement?",
      options: [
        "A. Use a multi-select picklist field to bucket chatter groups in the report according to department.",
        "B. Use a bucket in the chatter groups report to categorize the four different departments. (100%)",
        "C. Create a report type for chatter groups and create a summary report for newly- created chatter group.",
        "D. Create tags for chatter groups and create a summary report for newly created chatter groups.",
      ],
      answer: "B",
      title: "Question 88",
      explanation: "",
    },
    {
      content:
        "The administrator at Cloud Kicks made new fields and page layout adjustments based on new requirements from the service teem. The changes have been built In a sandbox and are ready to be deployed Into production.\nWhet should en administrator do before deploying the change set in production?",
      options: [
        "A. Push the change set to another sandbox to restore from.",
        "B. Request a new sandbox based on the sandbox where the changes were made.",
        "C. Create the fields and update the page layouts In production.",
        "D. Make a new sandbox based on production to restore changes from.",
      ],
      answer: "D",
      title: "Question 89",
      explanation: "",
    },
    {
      content:
        "Dream house Realty has created a custom object to track its Open Houses with a master-detail relationship up to a custom object for Properties. Agents need to quickly calculate the number of Open House records in a status or Pending so they can see the value from the Property record.\nWhat feature should the administrator implement?",
      options: [
        "A. Roll-Up Summary",
        "B. visualforce Page",
        "C. Lightning Component",
        "D. Formula Fields",
      ],
      answer: "A",
      title: "Question 90",
      explanation: "",
    },
    {
      content:
        "AW Computing wants to create a process to assign accounts to different salespeople based on the annual revenue.... of the company. The administrator has decided to create a flow.\nWhich two consideration should the administrator make sure to remember when creating the flow? Choose 2 answers",
      options: [
        "A. Update Record elements should be placed inside the flow loop.",
        "B. Use a Get Record component instead of hard coding record IDs.",
        "C. Update record elements should be placed outside the flow loop.",
        "D. The running user of a flow is the user that last saved the flow.",
      ],
      answer: "B,C",
      title: "Question 91",
      explanation: "",
    },
    {
      content:
        "The sale VP notices several sales reps generating a contract too early in the sales stage. The help correct.... Behavior, the has requested the Create Contract button only be available when the opportunity reach... negotiation stage.\nHow should the administrator meet this requirement?",
      options: [
        "A. Create a custom permission.",
        "B. Create a validation rule.",
        "C. Modify page layout.",
        "D. Configure dynamic action.",
      ],
      answer: "D",
      title: "Question 92",
      explanation: "",
    },
    {
      content:
        "An administrator at Universal Containers has been asked to configure product schedules.\nWhat should the administrator consider before enabling this feature?",
      options: [
        "A. Customizable product schedule page layouts cannot be modified.",
        "B. The Product Schedule is unavailable in Process Builder and Flow.",
        "C. To remove o product schedule completely, remove It from the standard price book.",
        "D. Line Item Schedule is unavailable In Process Builder and Workflow.",
      ],
      answer: "D",
      title: "Question 93",
      explanation: "",
    },
    {
      content:
        "The Service team at Cloud Kicks needs a way to show the current status from the Account on the Case. This value should be on the page and is used in validation rules.\nWhat should the administrator recommend to solve this?",
      options: [
        "A. Make a Rollup Summary.",
        "B. Create a cross-object formula.",
        "C. Use a picklist field.",
        "D. Add a lookup field to Account.",
      ],
      answer: "B",
      title: "Question 94",
      explanation: "",
    },
    {
      content:
        "A sales rep at Ursa Major Solar was assigned to a role under their manager and is the record owner of several opportunities; however, the sales rep is missing from the manager's forecast.\nWhat should the administrator review to solve this issue?",
      options: [
        "A. Allow Override Forecasts",
        "B. Enable manager adjustments",
        "C. Enable owner adjustment",
        "D. Allow Forecasting",
      ],
      answer: "B",
      title: "Question 95",
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
      title: "Question 96",
      explanation: "Quantity Schedule Only",
    },
    {
      content:
        "A maintenance fee is added to each opportunity. this maintenance fee should NOT be included in the sales Rep's forecast so a custom field called Rep amount is used.\nhow should an admin configure forecasting?",
      options: [
        "A. create a Forecasting report, summarized by the Rep amount field.",
        "B. Enable Collaborative Forecasting, create a forecast on the Rep Amount field.",
        "C. Create a Forecasting report, Summarized by the Opportunity Owner field.",
        "D. Enable customizable forecasting, create a forecast on the Rep amount field.",
      ],
      answer: "B",
      title: "Question 97",
      explanation: "",
    },
    {
      content:
        "What is the correct order of steps to follow when working with inbound change sets?",
      options: [
        "A. Deploy, validate, Monitor",
        "B. Deploy, Monitor, Validate",
        "C. Monitor, Deploy, Validate",
        "D. Validate, Deploy, Monitor",
      ],
      answer: "D",
      title: "Question 98",
      explanation: "",
    },
    {
      content:
        "The administrator of Universal Containers is testing an approval process in a recently refreshed Developer Pro sandbox and is finding that none of the notification emails are being sent to the approvers.\nwhich two reasons could be the cause?\nChoose 2 answers",
      options: [
        "A. The email addresses for the users are incorrect.",
        "B. The deliverability access level setting Is incorrect.",
        "C. Workflow emails only work in Full sandboxes.",
        "D. HTML templates are unavailable in sandboxes.",
      ],
      answer: "A,B",
      title: "Question 99",
      explanation: "",
    },
    {
      content:
        "Assuming that the training sandbox will contain approximately 500MB of production data and be refreshed after daily training sessions, which type of sandbox can be used to train users on new functionality that has recently been deployed to production? * (1 Point)",
      options: [
        "A. Developer Sandbox",
        "B. Developer Pro Sandbox",
        "C. Partial Data Sandbox",
        "D. Full Sandbox",
      ],
      answer: "B",
      title: "Question 100",
      explanation: "",
    },
    {
      content:
        "Universal Containers suspects a used is logging in as other users and editing Account records without their approval.\nWhere would an administrator go to verify who is logging in as other users?",
      options: [
        "A. Users Login History",
        "B. Setup Audit Trail",
        "C. History Tracking on the Account",
        "D. Debug Logs",
      ],
      answer: "B",
      title: "Question 101",
      explanation: "",
    },
    {
      content:
        "The VP of Sales wants to require that the Next Step Field is always updated when an opportunity stage is changed. How can this process be automated?",
      options: [
        "A. Create a validation rule with the following formula: AND( ISCHANGED(StageName), NOT(ISCHANGED(NextStep))",
        "B. Create a validation rule with the following formula: AND( ISCHANGED(ISPICKVAL(StageName)), NOT(ISCHANGED(NextStep)))",
        "C. Create a workflow rule with the following formula: AND( ISCHANGED(ISPICKVAL(StageName)), NOT(ISCHANGED(NextStep))",
        "D. Create a workflow rule with the following formula: AND( ISCHANGED(StageName), NOT(ISCHANGED(NextStep))",
      ],
      answer: "A",
      title: "Question 102",
      explanation: "",
    },
    {
      content:
        "An administrator is planning he release process for the year. The team will be using change sets to process deployment to production.\nWhich three best practices should be considered?",
      options: [
        "A. Make sure to deploy all dependent components.",
        "B. Make sure change sets are limited to 10,000 files.",
        "C. Use matching names for global publisher layouts and Outlook publisher layouts.",
        "D. Be sure to test only after business hours the data after deployment.",
        "E. Plan your deployments around the production and sandbox maintenance schedules.",
      ],
      answer: "A,B,E",
      title: "Question 103",
      explanation: "",
    },
    {
      content:
        "Which two types of data should a sales representative access from the Forecasts tab when using Collaborative Forecasts?\nChoose 2 answers.",
      options: [
        "A. Opportunities that make up each forecast amount",
        "B. Forecast amount for other representatives on their team",
        "C. Forecast amount for each forecast category",
        "D. Forecast amount for each opportunity stage",
      ],
      answer: "C,D",
      title: "Question 104",
      explanation: "",
    },
    {
      content:
        "The administrator at Universal Containers needs to convert a lookup relationship to a master-detail relationship.\nwhat should the administrator verify to ensure that the conversion is successful?",
      options: [
        "A. The lookup field in all records contains a value.",
        "B. The lookup field is required on the child object.",
        "C. The owner is the same for all related records",
        "D. No roll-up summaries exist on the lookup object.",
      ],
      answer: "A",
      title: "Question 105",
      explanation: "",
    },
    {
      content:
        "Support agents at Cloud Kicks associate Cases and Bugs so that can report on how many Cases are related to a Bug. A Bug is required to have a Case in order to be created.\nWhich type of object relationship will meet this requirement?",
      options: [
        "A. Junction",
        "B. Master-detail",
        "C. Hierarchical",
        "D. Lookup",
      ],
      answer: "B",
      title: "Question 106",
      explanation: "",
    },
    {
      content:
        "What type of process can the system administrator set for an organization's products?\nChoose 3 answers",
      options: [
        "A. Discount prices",
        "B. Standard prices",
        "C. Product prices",
        "D. Sales prices",
        "E. List prices",
      ],
      answer: "B,D,E",
      title: "Question 107",
      explanation: "",
    },
    {
      content:
        "A user started to work remotely. They are having an Issue logging in.\nWhat could be the issue?",
      options: [
        "A. They are signing in from a mobile device.",
        "B. The user Is not In the IP range for their profile.",
        "C. The time zone for the profile is outside of login hours.",
        "D. The login session has expired for this user.",
      ],
      answer: "B",
      title: "Question 108",
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
      title: "Question 109",
      explanation: "",
    },
    {
      content:
        "Ursa Major Solar has a junction object that connects Docs with Solar Panels. The administrator needs users to be able to see all the solar panels that a Dot is related to. Users already have access to the Bot and the Junction, but not the Solar Panel object.\nWhat access docs the user need to be able to see the solar panel records?",
      options: [
        "A. Access permission Is not required on either master record.",
        "B. Read permission is required on both master records.",
        "C. Read permission is required on at least are master record.",
        "D. Create permission Is required on both master records.",
      ],
      answer: "B",
      title: "Question 110",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks maintains Inventory in a legacy application. Management wants the information to also be available to view and report on in Saiesforce.\nWhich action should the administrator take to achieve this goal?",
      options: [
        "A. Import the data into a custom object when needed; delete after it is used.",
        "B. Build a Lightning component and use SFDX to connect to the inventory app.",
        "C. Create an external object that maps to the inventory application.",
        "D. Upload an Excel spreadsheet with the data into the Files tab.",
      ],
      answer: "D",
      title: "Question 111",
      explanation: "",
    },
    {
      content:
        "Which two values roll up the Hierarchy to the manager for both Customizable and Collaborative Forecasts? Choose 2 answers",
      options: [
        "A. Quota amount",
        "B. Expected revenue",
        "C. Product quantity",
        "D. Opportunity amount",
      ],
      answer: "A,D",
      title: "Question 112",
      explanation: "",
    },
    {
      content:
        "Ursa Major Solar customer records have a lot of fields and Lightning components to give users a variety of information and available functions. Recently,usrrs have noted that their pages take a long time to load and it's starting to negatively impact their experience.\nWhat should the administrator do to help diagnose where improvements can be made?",
      options: [
        "A. Check the debug logs found in the Environment section of Setup.",
        "B. Review the debug logs from the Developer Console.",
        "C. Click Analyze from the Lightning App Builder toolbar.",
        "D. Use the Apex debugger while loading a customer record.",
      ],
      answer: "C",
      title: "Question 113",
      explanation: "",
    },
    {
      content:
        "An administrator need a business process automated, but only for certain user and profiles. The administrator will need to frequently update which users and profiles will use the process. After evaluating the declarative options, it was determined that this functionality must be done via an Apex trigger.\nWhat software requirement should the administrator request so that process execution can be declaratively controlled?",
      options: [
        "A. Use Apex Class Access to assign the Apex code to the user or profile.",
        "B. Use Process Automation Setting in Setup to the appropriate users or profiles.",
        "C. Use a custom permission set that is assigned to the user.",
        "D. Use a System permission that is assigned to the user or profile.",
      ],
      answer: "C",
      title: "Question 114",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks has an app that should only be used in the VIP showroom.\nWhich feature should an administrator use to permit access to the app?",
      options: [
        "A. Permission Set Group",
        "B. Single Sign-On",
        "C. Session-Based Permission Set",
        "D. Delegated Administration",
      ],
      answer: "C",
      title: "Question 115",
      explanation: "",
    },
    {
      content:
        "Sales reps end partner consultants at Cloud Kicks work on the same kinds of shoe deals. The administrator has been asked to ensure that the Profit new on the Opportunity object is available to sales reps and is hidden from partners using Field Level Security.\nWhich two features should the administrator use to fulfill I this request?\nChoose 2 answers",
      options: [
        "A. Organization-wide Defaults",
        "B. Permission Set",
        "C. Profiles",
        "D. Record Type",
      ],
      answer: "B,C",
      title: "Question 116",
      explanation: "",
    },
    {
      content:
        "An administrator would like to know which delegated administrators are actively customizing their organization.\ntheir organization. Where can the administrator find this information?",
      options: [
        "A. Debug log",
        "B. Login history",
        "C. Setup audit trail",
        "D. Delegated administrator log",
      ],
      answer: "C",
      title: "Question 117",
      explanation: "",
    },
    {
      content:
        "Which Value rolls up the hierarchy to the manager for Collaborative Forecasts?",
      options: [
        "A. Product quantity",
        "B. Expected revenue",
        "C. Opportunity amount",
        "D. Quota amount",
      ],
      answer: "C",
      title: "Question 118",
      explanation: "",
    },
    {
      content:
        "Universal Containers has found duplicate contacts in Salesforce. The sales team administrator prevent duplicate records from being created.\nWhich two ways should the administrator customize duplicate management?\nChoose 2 answers",
      options: [
        "A. Configure custom duplicate rules.",
        "B. Modify the Global Picklist Value Sets.",
        "C. Create custom matching rules.",
        "D. Set up mobile duplicate alerts.",
      ],
      answer: "A,C",
      title: "Question 119",
      explanation: "",
    },
    {
      content:
        "An administrator at Cloud Kicks has been asked to reduce the file size of full data exports in order to have quicker exports.\nWhich three recommendations should the administrator make?\nChoose 3 answers",
      options: [
        "A. Keep deleted record counts to a minimum.",
        "B. Deselect 'Include images, documents, and attachments' in the export.",
        "C. Request a backup file every 5 days.",
        "D. Unselect the recycle bin in the object export option.",
        "E. Reduce the amount of objects per export.",
      ],
      answer: "A,B,E",
      title: "Question 120",
      explanation: "",
    },
    {
      content:
        "A sales manager at AW Computing has created a contact record but is missing some of the information to complete the record. The organization-wide default for Accounts is set to Public Read Only, and Contacts are controlled by parent.",
      options: [
        "A. All users in the organization",
        "B. Sales manager and system administrator",
        "C. Who will be able to edit this new contact record?",
        "D. Users above the sales manager in the role hierarchy",
        "E. The owner and users below the owner in the role hierarchy",
      ],
      answer: "E",
      title: "Question 121",
      explanation: "",
    },
    {
      content:
        "AW Computing has several service plans it offers with its laptops. Management wants the sales team to focus on bringing in new business and to have the creation of the renewal opportunity for the service plans happen automatically.\nWhat approach should the administrator take to automate the renewal process7",
      options: [
        "A. Configure a flow that will create the renewal based on the closed-won date and opportunity line items.",
        "B. Create a dynamic Lightning page with rich text to remind the rep to create a renewal opportunity when the opportunity is closed won.",
        "C. Configure a time-based workflow to send an email reminder to the sales rep when the service plan expires.",
        "D. Create a validation rule to prevent the rep from closing the opportunity until a renewal is associated.",
      ],
      answer: "A",
      title: "Question 122",
      explanation: "",
    },
    {
      content:
        "Universal Containers has a requirement to report on opportunities where the probability has dropped beneath 50%. The administrator has created a custom checkbox as a way to identify these records.\nWhat else should the administrator do to meet this requirement? * (1 Point)",
      options: [
        "A. Enable field history tracking on the field and include the history in the report filter",
        "B. Create an approval process that submits the opportunity for approval when the custom checkbox is true",
        "C. Build a validation rule that displays an error",
        "D. Create a workflow rule that updates the field when the probability drops below 50%",
      ],
      answer: "D",
      title: "Question 123",
      explanation: "",
    },
    {
      content:
        "In Collaborative Forecasts, which permissions are required in order to upload quota data for all users? Choose 2. * (1 Point)",
      options: [
        "A. Customize Quotas",
        "B. Manage all data",
        "C. View all data.",
        "D. View all Forecasts",
        "E. Manage Quotas",
        "F. Customize Forecasts",
      ],
      answer: "D,E",
      title: "Question 124",
      explanation: "",
    },
    {
      content:
        "An administrator notices that there are two account records in the system with the same name. A contact record with the same name is associated with each account.\nWhich set of steps should be taken lo merge these accounts using the Salesforce merge feature?",
      options: [
        "A. Merge the duplicate accounts and check the box that optionally merges the duplicate contacts.",
        "B. Merge the duplicate accounts and the duplicate contacts will be merged automatically.",
        "C. Merge the duplicate accounts and then merge the duplicate contacts.",
        "D. Merge the duplicate contacts and then merge the duplicate accounts.",
      ],
      answer: "C",
      title: "Question 125",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks has just released a new Process Builder on the Account in production. The end users keep getting error messages that prevent them from completing their updates to the Account.\nWhich three things should the administrator do to resolve this issue?\nChoose 3 answers",
      options: [
        "A. Fix the Process Builder in a sandbox and migrate the change to production.",
        "B. Manually make the updates to the Account as the logged-in user.",
        "C. Have the users refresh the Account page so they get the current Process Builder.",
        "D. Deactivate the Process Builder in production.",
        "E. Review the Error Email for the Process Builder and rectify the issues.",
      ],
      answer: "A,B,D",
      title: "Question 126",
      explanation: "",
    },
    {
      content:
        "An administrator has been tasked with sending an email notification to all project team members when project status is changed to Allocated. Project teams contain users from different departments and different roles.\nHow should an administrator ensure the proper users will receive the email?",
      options: [
        "A. Configure a queue for the project team and have members view the queue's list view.",
        "B. Move the project users to the same role and send the email alert to everyone in the role.",
        "C. Create public groups for each project team and send the email alert to the project group.",
        "D. Use sharing rules to automatically share with the individual users in the project team.",
      ],
      answer: "C",
      title: "Question 127",
      explanation: "",
    },
    {
      content:
        "Universal containers would like to ensure that when an opportunity stage is closed lost the reason is captured in a custom reason lost field before the record can be saved.\nWhat is the recommended approach to meet this requirement?",
      options: [
        "A. Create a page layout for closed lost opportunities and make reason lost a required field.",
        "B. Create a trigger that requires reason lost to be populated once the opportunity stage is closed lost.",
        "C. Create a validation rule that requires reason lost to be populated once the opportunity stage is closed lost.",
        "D. Create a workflow rule that fires on the closed lost stage and populates the reason lost field.",
      ],
      answer: "C",
      title: "Question 128",
      explanation: "",
    },
    {
      content:
        "The sales department has asked to limit access to the Amount field on the Opportunity to oily those users In the sales department and on the executive team. Northern Trail Outfitters uses six custom profiles including Sales user. Marketing User, Call Center user Executive user, Sales Manager user, and call center Manager user. Field level access is removed from three of the profiles in the sandbox.\nWhat action should an administrator take to make sure this change Is in production?",
      options: [
        "A. Manually restrict access to this field for each profile via Setup Just like the sandbox.",
        "B. Process a change set with the profiles that should no longer have access to the field.",
        "C. Deploy a change set from the sandbox to production including the Amount field with all the custom profiles.",
        "D. Create a sandbox template and push it to production to reflect the update.",
      ],
      answer: "C",
      title: "Question 129",
      explanation: "",
    },
    {
      content:
        "DreamHouse Realty currently deals only with single-family homes but is expanding its business it include condos in large cities. There are some features and amenities that inly apply to condos, such as the amount of a deposit and concierge services.\nHow should an administrator configure the Opportunity object to ensure that only relevant fields are displayed on the record?\nHow should an administrator configure the Opportunity object to ensure that only relevant fields are displayed on the record?",
      options: [
        "A. Make is custom Lightning page to display specific fields based on the type of property.",
        "B. Configure a validation rule to display fields based on the type of property the user is viewing.",
        "C. Create a Record Type for the type of property and custom page layouts for each.",
        "D. Build a Lightning component to display fields that only apply to condos.",
      ],
      answer: "C",
      title: "Question 130",
      explanation: "",
    },
    {
      content:
        "AW Computing is conducting an audit and wants to understand how many objects have been shared as public externally.\nwhich tool should the administrator use to quickly obtain this details?",
      options: [
        "A. Object Manager",
        "B. Session Security Settings",
        "C. Setup Audit Trail",
        "D. Security Health Check",
      ],
      answer: "B",
      title: "Question 131",
      explanation: "",
    },
    {
      content:
        "The VP of Finance wants to ensure that once an opportunity is closed, it cannot be modified by any user.\nHow can an administrator meet this requirement?",
      options: [
        "A. Create a workflow field update to update the IsClosed field to True if a dosed opportunity is modified.",
        "B. Set the Do Not Modify Closed Opportunity permission for all profiles.",
        "C. Set all fields to Read-Only on the standard Closed Opportunity page layout.",
        "D. Create an opportunity validation rule with the formula; PWORVALUE( IsClosed ) - True.",
      ],
      answer: "D",
      title: "Question 132",
      explanation: "",
    },
    {
      content:
        "UC has engaged a developer to create a custom Apex Rest service that is used by external systems to manipulate data in salesforce.\nwhich two methods can the administrator use to grant permission to use the Apex Rest service to the users of the external systems? choose 2 answers",
      options: [
        "A. Update the profile for the external systems to include access to the Remote site settings that correspond to the apex Rest services.",
        "B. Create a permission set that grants the API enabled administrative permission, and assign it to the users for the external systems.",
        "C. Create a Connected App and a new permission set to grant access to the Apex Rest services. Assign the permission set to the users for the external systems.",
        "D. create a permission set that grants access to the apex classes and grants the use apex Rest services permission and assign it to the users for the external",
      ],
      answer: "A,C",
      title: "Question 133",
      explanation: "systems.",
    },
    {
      content:
        "Which of the following data enrichment options is available to a system administrator through the Social Accounts, Contacts, and Leads feature? * (1 Point)",
      options: [
        "A. Use Linked in to import educational background",
        "B. Use Twitter to view recent tweets posted by a contact",
        "C. Use the Company's salesforce Facebook account",
        "D. Use Facebook to import educational background",
      ],
      answer: "B",
      title: "Question 134",
      explanation: "",
    },
    {
      content:
        "An administrator at Cloud Kicks has been tasked by the compliance team to flag where sensitive information is stored in Salesforce.\nWhat feature should the administrator use to fulfill this requirement?",
      options: [
        "A. Data Classification",
        "B. Field-Level Security",
        "C. Schema Builder",
        "D. Classic Encryption",
      ],
      answer: "A",
      title: "Question 135",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks (CK) has deployed several new custom apps that use Lightning Web components. The administrator is now concerned that they may need to make some adjustments to CK's org to make it more secure.\nWhich tools should the administrator use to expose possible security risks within a Lightning web component?",
      options: [
        "A. Master Encryption Keys",
        "B. Self-signed Certificates",
        "C. Health Check",
        "D. Salesforce Optimizer",
      ],
      answer: "C",
      title: "Question 136",
      explanation: "",
    },
    {
      content:
        "Universal Containers is implementing a new lead status process and wants to be able to do the following:\n- Track leads through five different status values\n- Run reports showing the duration a lead spends in each status\n- Run full Lifetime reports of a lead from creation to conversion\n- Prevent leads from skipping a lead status\nHow can these requirements be met?",
      options: [
        "A. Use lead history reporting to track changes in the lead status field, and use custom reporting fields to calculate status duration. Use validation rules to prevent status skipping",
        "B. Use an Apex Trigger to populate custom date fields for each status, and use custom formula fields for calculating duration of each status",
        "C. Use custom date fields and workflow rules for each status, and use custom formula fields for calculating duration of a status. Use validation rules to prevent status skipping",
        "D. Use field history tracking on the lead status field to track the duration of each status. Use validation rules to prevent status skipping",
      ],
      answer: "A",
      title: "Question 137",
      explanation: "",
    },
    {
      content:
        "An administrator needs to Import a large amount of historical data (more than 100,000 records) from another system.\nhow should the administrator import the data?",
      options: [
        "A. An AppExchange package",
        "B. Import Wizard with Add Only",
        "C. SOAP based API with Developer console",
        "D. Data Loader with Bulk API Enabled",
      ],
      answer: "A",
      title: "Question 138",
      explanation: "",
    },
    {
      content:
        "While reviewing the quarterly forecast, a manager notices the newest team member is missing in the forecast- After looking at a few the manager can see where the sales representative has closed six opportunities this month and has three additional opportunities m progress.\nWhere should the administrator start troubleshooting?",
      options: [
        "A. Assign View All Forecasting permission to the sales profile.",
        "B. Verify the app the user is selecting and adjust tabs as needed.",
        "C. Create a permission set with View All Forecasting permission.",
        "D. Chide Allow Forecasting under general Information for user.",
      ],
      answer: "A",
      title: "Question 139",
      explanation: "",
    },
    {
      content:
        "Universal Containers has four sales regions: North America, APAC, EMEA, and LATAM. Each sales region is led by a VP of Sales. Each of the VPs wants to have a dashboard emailed to them every Monday morning that contains components with only the data for their region. How can an administrator meet this requirement?",
      options: [
        "A. Create a reporting snapshot and check the dashboard option, scheduled to be delivered on Monday mornings.",
        "B. Create one dashboard using Visualforce to create a filter, scheduled to be delivered on Monday mornings.",
        "C. Create a separate dashboard with data specific to each sales VP, scheduled to be delivered on Monday mornings.",
        "D. Create one dashboard that includes a filter for each region, scheduled to be delivered on Monday mornings.",
      ],
      answer: "C",
      title: "Question 140",
      explanation: "",
    },
    {
      content:
        "A sales manager would like access to the following:\nAll closed/won opportunities in the last six months for each account the manager owns.\nAll cases created within the last six months for each account the manager owns.\nWhat can the administrator create to meet these requirements ?",
      options: [
        "A. Create an Account report and add Opportunity and Case cross filters.",
        "B. Create an Account report that groups by both opportunities and cases.",
        "C. Create a single report using the Joined Reports feature.",
        "D. Create a custom report type to combine the data into a single report.",
      ],
      answer: "A",
      title: "Question 141",
      explanation: "",
    },
    {
      content:
        "Universal Containers purchased Field Service Lightning Licenses in Production and wants to make these license available in an active development sandbox with the minimum development impact.\nHow should an administrator create these licenses in the sandbox?",
      options: [
        "A. Use the Match Production Licenses tool.",
        "B. Submit a Salesforce support case.",
        "C. Merge Production and the sandbox using a template.",
        "D. Refresh the sandbox from production.",
      ],
      answer: "D",
      title: "Question 142",
      explanation: "",
    },
    {
      content:
        "AW Computing wants to embed a report chart on the Account record page that shows the value of closed sales for that account. The chart should be limited to users in the Sales Manager role on the Account record pages.\nhow should this be accomplished?",
      options: [
        "A. Filter component visibility for the Sales Manager role.",
        "B. Create a new report and assign it to the component.",
        "C. Create a new page layout for the Sales Manager role.",
        "D. Filter component visibility for the Account ID.",
      ],
      answer: "A",
      title: "Question 143",
      explanation: "",
    },
    {
      content:
        "A sales user is assigned to a permission set group that gives them Modify All access to Accounts. An administrator assigns the same user to a muting permission set that mutes Deletes access on Account.\nWhat level of access will the sales user have on the Account object?",
      options: [
        "A. No Access",
        "B. Modify All",
        "C. Read, Create, and Edit",
        "D. Read-only",
      ],
      answer: "C",
      title: "Question 144",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks needs to automate several updates to lead records and update unrelated records. Select changes should happen every time a record is created or updated, Put other changes should only happen when the record is updated.\nWhich two options should the administrator use to automate these updates?\nChoose 2 answers",
      options: [
        "A. Create a Process Builder that runs when a record is changed.",
        'B. Use a Decision element with the "Only if the record that triggered the flow to run is updated to meet the condition requirements" option.',
        'C. Use "formula evaluates to true" workflow rule with the ISCHANCEO function to make changes when the record Is updated.',
        "D. Create a flow that runs when a record is created or updated.",
      ],
      answer: "B,D",
      title: "Question 145",
      explanation: "",
    },
    {
      content:
        "A change set that has already been submitted for deployment is missing a component.\nWhat can you do in order to correct the issue? * (1 Point)",
      options: [
        "A. Create another change set containing all components and deploy it",
        "B. Clone the change set. edit the components and deploy it",
        "C. Edit the change set, deactivate it and then add the missing component",
        "D. Deploy the change set and then submit another change set for deployment",
      ],
      answer: "B",
      title: "Question 146",
      explanation: "",
    },
    {
      content:
        "When a sales rep at Northern Trail tiers to submit a discount request on an opportunity they receive an error:\nWhich two consideration would cause this error?",
      options: [
        "A. This field updated is on a cross-object.",
        "B. The approval process is assigned to a queue.",
        "C. The approval assigned in the process is inactive",
        "D. A validation rule prevents the field update",
      ],
      answer: "C,D",
      title: "Question 147",
      explanation: "",
    },
    {
      content:
        "A user with permissions to create price books wants to quickly create a new product with the same information as the existing product by cloning the product. What is an important consideration when cloning a product?",
      options: [
        "A. Price book entries will not be created in the standard price book.",
        "B. Price book entries in price books that you don't have sharing access to are created.",
        "C. Price book entries in price books that you don't have sharing access to aren't created.",
        "D. Price book entries need to be activated before users can use the new price book.",
      ],
      answer: "D",
      title: "Question 148",
      explanation: "",
    },
    {
      content:
        "Which two deployment tools should be used to delete metadata from an organization? Choose 2 answers * (1 Point)",
      options: [
        "A. Change sets",
        "B. Unmanaged packages",
        "C. Developer Console",
        "D. ANT Migration Tool",
      ],
      answer: "C,D",
      title: "Question 149",
      explanation: "",
    },
    {
      content:
        "The sales team at Cloud Kicks is noticing that sales reps are misusing the new Screen Flow tool for data entry, since they are viewed the initial screen after clicking finish.\nWhat should the administrator do to fix this?",
      options: [
        "A. Create a new flow to redirect the user when the other flow finishes.",
        "B. Update the flow with a local redirect action.",
        "C. Add a trigger to redirect the user to a new page.",
        "D. Use a lightning action to redirect the user",
      ],
      answer: "B",
      title: "Question 150",
      explanation: "",
    },
    {
      content:
        "The sales manager at Cloud Kicks wants a way to report on information from a form their clients fill out during the sales cycle. Once a form has been submitted, the client is unable to access it. This form may need to be filled out more than once during the sales cycle. There are more than 30 fields on this form, and the sales team needs to be able to see what changed from one submission to the next.\nWhich two options should an administrator use to solve this scenario?\nChoose 2 answers",
      options: [
        "A. Make custom fields.",
        "B. Add forms as attachments.",
        "C. Create a custom object.",
        "D. Turn on Field Tracking.",
      ],
      answer: "B,C",
      title: "Question 151",
      explanation: "",
    },
    {
      content:
        "Northern Trail Outfitters has many users set up as system administrators to perform Salesforce Administration.\nWhich two functions would a delegated administrator be able to perform in order to help the existing Salesforce Administrator?\nChoose 2 answers",
      options: [
        "A. Make updates to permission set configurations.",
        "B. Configure updates to sharing rules.",
        "C. Set up users and password management.",
        "D. Manage custom objects and customize nearly every aspect.",
      ],
      answer: "C,D",
      title: "Question 152",
      explanation: "",
    },
    {
      content:
        "On a monthly basis, an administrator would like to pull data related to service contracts from Salesforce to store elsewhere. Which two ways can an administrator accomplish this? Choose 2 answers",
      options: [
        "A. Use Data Loader to export the data each month.",
        "B. Use Data Exporter to export the data each month.",
        'C. Use the "Object Export" feature under Data Management',
        'D. Configure the "Schedule Export" options under Data Export',
      ],
      answer: "A,D",
      title: "Question 153",
      explanation: "",
    },
    {
      content:
        "DreamHouse Realty wants to notify an assigned agent when an appointment Is booked on a custom object for one of their listed homes along with the total number of appointments booked so far. The administrator has configured a Roll-up Summary for the number of appointments as well as a flow to detect the creation of a new appointment and send the information to the agent.\nWhat consideration about process automation should the administrator be aware of to ensure the right Information is delivered?",
      options: [
        "A. Roll-up Summary calculations run after processes and workflows.",
        "B. Only standard objects can be used with Roll-up Summary fields.",
        "C. Rows can only be triggered from the records created on standard objects.",
        "D. Roll-up Summary calculations will prevent a Mow from being triggered.",
      ],
      answer: "A",
      title: "Question 154",
      explanation: "",
    },
    {
      content:
        "An administrator is creating a custom Opportunity record page for Sales users for new logo opportunities. They need to control what fields display on the record when a sales user is viewing the opportunity.\nWhere should the administrator edit what fields display in the details of the record page?",
      options: [
        "A. Page Layout",
        "B. Record Detail Component",
        "C. Record Types",
        "D. Custom Lightning Component",
      ],
      answer: "B",
      title: "Question 155",
      explanation: "",
    },
    {
      content:
        "A user at Universal Containers wants to load records into a custom object named Location from a .csv file. While using Data Loader, they cannot rind the Location object.\nWhat are two reasons this is happening?\nChoose 2 answers",
      options: [
        "A. The users profile needs Create access to Location.",
        "B. Location has a master-detail field to Account.",
        "C. Date Loader should only be used with standard objects.",
        "D. The label or Location may have been changed.",
      ],
      answer: "A,B",
      title: "Question 156",
      explanation: "",
    },
    {
      content:
        'Cloud Kicks has a requirement to display sensitive data only to appropriate users. The amount m the Salary field on the User object should display data only when the user record is being viewed by the user or by users with the MR profile. For all other users viewing the user record, the Salary field should display the word "Confidential* as text in the field.\nWhat should the administrator to fulfill this requirement?',
      options: [
        "A. Page Layout",
        "B. Formula field",
        "C. Validation Rule",
        "D. Process Builder",
      ],
      answer: "D",
      title: "Question 157",
      explanation: "",
    },
    {
      content:
        "The VP of sales wants to require that the next step field is always updated when an opportunity stage is changed.\nHow can this process be automated?",
      options: [
        "A. Create a validation rule with the following formula:\n         AND(ISCHANGED(ISPICKVAL(StageName)),NOT(ISCHANGED(NextStep))).",
        "B. Create a workflow rule with the following formula:\n         AND(ISCHANGED(ISPICKVAL(StageName)),ISCHANGED(NextStep)).",
        "C. Create a validation rule with the following formula:\n         AND(ISCHANGED(StageName),NOT(ISCHANGED(NextStep))).",
        "D. Create a workflow rule with the following formula:\n         AND(ISCHANGED(StageName),NOT(ISCHANGED(NextStep))",
      ],
      answer: "B",
      title: "Question 158",
      explanation: "",
    },
    {
      content: "Which three are capabilities of Collaborative Forecasting?",
      options: [
        "A. Forecast using opportunity splits",
        "B. Rename categories",
        "C. Add categories",
        "D. Overlay quota",
        "E. Select a default forecast currency setting",
      ],
      answer: "A,B,E",
      title: "Question 159",
      explanation: "",
    },
    {
      content:
        "Which forecasting schedule type would you use if you wanted a benchmark of how much should be sold within a certain time frame? * (1 Point)",
      options: ["A. Pipeline", "B. Quota", "C. Forecast"],
      answer: "B",
      title: "Question 160",
      explanation: "",
    },
  ],
});
