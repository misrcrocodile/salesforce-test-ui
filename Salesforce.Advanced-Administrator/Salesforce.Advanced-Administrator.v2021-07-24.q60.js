window.testContent = window.testContent || [];
var testId = "Salesforce.Advanced-Administrator";
var testName = "Salesforce.Advanced-Administrator";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "Salesforce.Advanced-Administrator.v2021-07-24.q60",
  content: [
    {
      content:
        "Which two actions could the delegated administrator complete after delegated administration is granted for a custom object? Choose 2 answers",
      options: [
        "A. Create a custom tab for the object",
        "B. Add a custom picklist field to the object",
        "C. Change organization-wide snaring rules for the object.",
        "D. Change the relationship with another object.",
      ],
      answer: "A,B",
      title: "Question 1",
      explanation: "",
    },
    {
      content:
        "What are two considerations when setting up Salesforce Content?\nChoose 2 answers.",
      options: [
        "A. The library type determines the size of files that can be contributed to content.",
        "B. A validation rule can ensure a description is required for all contributed content.",
        "C. An approval process can ensure that all product-related content is reviewed.",
        "D. The content type determines which fields appear on the content Detail page layout.",
      ],
      answer: "B,D",
      title: "Question 2",
      explanation: "",
    },
    {
      content:
        "Universal containers uses a private sharing model for accounts. A user who owns an account record needs to temporarly grant delete access to this records associated contacts to another user. how can this be accomplished?",
      options: [
        "A. Use the manual sharing button on the account.",
        "B. Add the user to the owner's default account team",
        "C. Transfer ownership of the account record to the user.",
        "D. Manually add the user to the account team.",
      ],
      answer: "C",
      title: "Question 3",
      explanation: "",
    },
    {
      content:
        "Universal Containers is implementing a new lead status process and wants to be able to do the following:\n- Track leads through five different status values\n- Run reports showing the duration a lead spends in each status\n- Run full Lifetime reports of a lead from creation to conversion\n- Prevent leads from skipping a lead status\nHow can these requirements be met?",
      options: [
        "A. Use an Apex Trigger to populate custom date fields for each status, and use custom formula fields for calculating duration of each status",
        "B. Use lead history reporting to track changes in the lead status field, and use custom reporting fields to calculate status duration. Use validation rules to prevent status skipping",
        "C. Use custom date fields and workflow rules for each status, and use custom formula fields for calculating duration of a status. Use validation rules to prevent status skipping",
        "D. Use field history tracking on the lead status field to track the duration of each status. Use validation rules to prevent status skipping",
      ],
      answer: "B",
      title: "Question 4",
      explanation: "",
    },
    {
      content:
        "A sales manager cannot vim a contact owned by a salesperson. The salesperson is below the sales manager in the role hierarchy.\nWhy is the sales manager unable to view the contact?",
      options: [
        "A. The contact has MOT been manually shared with the manager.",
        "B. Contact sharing settings ace Private.",
        "C. The contact is NOT linked to an account.",
        "D. Contact sharing settings have Grant Access Using Hierarchies unchecked.",
      ],
      answer: "C",
      title: "Question 5",
      explanation: "",
    },
    {
      content:
        "What should an administrator consider when moving approval processes using a change set?",
      options: [
        "A. Custom fields on standard objects will need to be manually added in the target organization.",
        "B. The Unique Name of the approval process is not allowed to be changed once deployed in the target organization.",
        "C. Change Sets do not include the order of active approval processes from the source organization.",
        "D. Change sets do not include the approval and rejection actions from the source organization",
      ],
      answer: "D",
      title: "Question 6",
      explanation: "",
    },
    {
      content:
        "The sales operations team at Universal Containers wants to ensure that when an opportunity is won the custom shipment date field is populated.\nHow should the administrator configure salesforce to meet this requirement?",
      options: [
        "A. Make the shipment date field required on the opportunity page layout.",
        "B. Create a dependency between the stage and shipment date fields.",
        "C. Add a default value to the shipment date using the Today() function.",
        "D. Create a validation rule on the opportunity using the ISBLANK() function.",
      ],
      answer: "D",
      title: "Question 7",
      explanation: "",
    },
    {
      content:
        "Universal Containers created a few new fields on the account object as well as a new section on the page layout in the config sandbox. After positive test results, the administrator created and uploaded a change set with the new fields from the sandbox to production. Unfortunately, the administrator forgot to add the page layout.\nWhich two options can the administrator take to deploy the page layout?\nChoose 2 answers.",
      options: [
        "A. Clone the change set in the sandbox, add the new page layout to it and upload to production.",
        "B. Deploy the existing change set. create and deploy a new change set containing the page layout.",
        "C. Edit the change set in production to add the new page layout before deploying the change set.",
        "D. Add the page layout to the existing change set in the sandbox and upload the change set again.",
      ],
      answer: "B,D",
      title: "Question 8",
      explanation: "",
    },
    {
      content:
        "What should an administrator consider when setting up and maintaining salesforce knowledge? choose 3",
      options: [
        "A. knowledge settings must be configured to allow users to create an article from a case",
        "B. Enabling knowledge on a user record requires licensing.",
        "C. solution category browsing must be enabled in solution settings.",
        "D. Data category visibility is assigned through roles and profiles.",
        "E. Article version numbers must be assigned by a knowledge manager for tracking.",
      ],
      answer: "A,B,D",
      title: "Question 9",
      explanation: "",
    },
    {
      content:
        "North Trail Outfitters want to automate the assignment of territories to opportunities.\nWhich two features are needed to meet this requirement.",
      options: [
        "A. Enable opportunity owner-based sharing",
        "B. Create Assignment Rules",
        "C. Create an Apex Class",
        "D. Enable filter-based Opportunity Territory Assignment",
      ],
      answer: "B,D",
      title: "Question 10",
      explanation: "",
    },
    {
      content:
        "An administrator has been asked to create a new field called region code on the opportunity object. this field should only be visible to users with the outside sales, Manager and system Administrator profiles and editable by users with the system administrator and manager profiles.\nHow should the administrator ensure this field is accessible to only these users?",
      options: [
        "A. Create a new record type and page layout for the opportunity object for these three profiles.",
        "B. Create a new page layout for the opportunity object for these three profiles.",
        "C. Edit the role hierarchy and move the outside sales and manager roles lower in the hierarchy.",
        "D. Edit the field-level security on the region code field for these three profiles.",
      ],
      answer: "D",
      title: "Question 11",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants customers who buy the Freight Container product to be billed in monthly installments. How should an administrator meet this requirement?",
      options: [
        "A. Create a default revenue schedule on the product.",
        "B. Create custom fields on the product.",
        "C. Create a workflow rule on the product.",
        "D. Create a default quantity schedule on the product",
      ],
      answer: "A",
      title: "Question 12",
      explanation: "",
    },
    {
      content:
        "An administrator has been asked to create a replica of the production organization. The requirement states that existing fields, page layouts, record types, objects, and data contained in the fields and objects need to be available in the replica organization. How can the administrator meet the requirement?",
      options: [
        "A. Create a metadata sandbox",
        "B. Create a configuration-only Sandbox",
        "C. Create a developer sandbox",
        "D. Create a Full Sandbox",
      ],
      answer: "D",
      title: "Question 13",
      explanation: "",
    },
    {
      content:
        "Universal Containers has a private sharing model. Their field service manager wants to edit Cases owned by the service team but is unable to edit Case records.\nWhich option should an administrator use to solve this issue?",
      options: [
        "A. Create a public group with read/write for cases and Accounts.",
        "B. Assign the manager a permission set with edit access to the Case object.",
        "C. Update the manager's profile to include edit access to the Case object.",
        "D. Set the Organization-Wide Default to public read/write for cases and Accounts.",
      ],
      answer: "B",
      title: "Question 14",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants to convert a lookup relationship to a master detail relationship.\nWhat action should the administrator take prior to converting the relationship?",
      options: [
        "A. Select the allow re-parenting option on the master-detail relationship field.",
        "B. Ensure all existing records have a value in the current lookup field.",
        "C. Remove roll-up summary fields on the parent prior to changing the field type.",
        "D. Delete the current lookup field before adding the new master-detail field.",
      ],
      answer: "B",
      title: "Question 15",
      explanation: "",
    },
    {
      content:
        "pay grade on the custom Position object need updating and require frequent change. Because frequent changes have to be made to these Position fields, they are requesting the ability to update these picklist values.\nWhich feature should the administrator consider that allows for this?",
      options: [
        "A. Delegated administration for the Position object",
        "B. Field accessibility set to editable for the picklists for the Position object.",
        "C. Screen Flow using custom metadata types",
        "D. A permission set containing the modify all data permission for the Position object.",
      ],
      answer: "A",
      title: "Question 16",
      explanation: "",
    },
    {
      content:
        "Universal Containers has a workflow rule that sends and email alert to the VP of Sales when a large deal is won. The VP is reporting that these emails are not being delivered. Which two tools should be used to determine the problem?",
      options: [
        "A. Workflow monitor",
        "B. Debug logo",
        "C. Email log",
        "D. System audit trail",
      ],
      answer: "B,C",
      title: "Question 17",
      explanation: "",
    },
    {
      content:
        "Sales management wants to enforce a process in which the name of an account is always included in the name of an opportunity. How can automation be used to help meet this requirement?",
      options: [
        "A. Write a validation rule that updates the opportunity name with the account name using a cross-object formula.",
        "B. Use approval process that routes newly created opportunities to management for data quality review.",
        "C. Write a criteria-based workflow rule that updates the opportunity name concatenated with the account name.",
        "D. Use an Apex Trigger on the Account object that adds the account name to the opportunity name.",
      ],
      answer: "C",
      title: "Question 18",
      explanation: "",
    },
    {
      content:
        "What type of prices can the system administrator set for an organization's products?",
      options: [
        "A. Sales prices.(100%)",
        "B. List prices.(100%)",
        "C. Product prices.",
        "D. Standard prices.(100%)",
        "E. Discount prices.",
      ],
      answer: "A,B,D",
      title: "Question 19",
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
      title: "Question 20",
      explanation: "",
    },
    {
      content:
        "A maintenance fee is added to each opportunity. this maintenance fee should NOT be included in the sales Rep's forecast so a custom field called Rep amount is used.\nhow should an admin configure forecasting?",
      options: [
        "A. Enable Collaborative Forecasting, create a forecast on the Rep Amount field.",
        "B. Create a Forecasting report, Summarized by the Opportunity Owner field.",
        "C. create a Forecasting report, summarized by the Rep amount field.",
        "D. Enable customizable forecasting, create a forecast on the Rep amount field.",
      ],
      answer: "A",
      title: "Question 21",
      explanation: "",
    },
    {
      content:
        "The administrator at Universal Containers has been asked to create an account management dashboard displaying opportunities and activities for each of its top five clients.\nWhich dashboard feature should the Administrator use to meet this requirement?",
      options: [
        "A. Matrix reports on a dashboard",
        "B. Dashboard Filter",
        "C. Joined reports on a dashboard",
        "D. Dynamic dashboard",
      ],
      answer: "A",
      title: "Question 22",
      explanation: "",
    },
    {
      content:
        'In order to provide customer support agents with a 360 view of the customer, UC wants support agents to continue to have read only access to accounts but allow create and edit access to contacts and cases. the current OWD for contacts is\n"Controlled by parent".\nwhat solution should be implemented?',
      options: [
        "A. Create read/write sharing rules to share all contacts to all support agents and grant read only access to cases on agent profile.",
        "B. Change OWD of contacts to public read only and grant create/edit access to cases on support agent profile.",
        "C. Grant create/edit access to contacts and cases on support agent profile.",
        "D. Change the OWD of contacts and cases to private and create read/write sharing for all support agents.",
      ],
      answer: "C",
      title: "Question 23",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks wants to understand the implications of archived Activities.\nWhich two considerations should an administrator communicate regarding archived Activities?\nChoose 2 answers.",
      options: [
        "A. Archived activities are deleted after 365 days.",
        "B. Closed tasks created more than 365 days ago with no due date are archived.",
        "C. Events created more than 365 days ago are archived.",
        "D. Events that ended more than 365 days ago are archived.",
      ],
      answer: "A,C",
      title: "Question 24",
      explanation: "",
    },
    {
      content:
        "How can an administrator ensure article managers use specified values for custom article field?",
      options: [
        "A. Create field dependecies on article types.",
        "B. Create a record type containing preset values",
        "C. Create a required field on the article page layout.",
        "D. Create different article types for different requirements.",
      ],
      answer: "B",
      title: "Question 25",
      explanation: "",
    },
    {
      content:
        "Universal containers wants a summary report that displays the percemtage growth of revenue year over year.\nWhat function should an administrator use to calculate this information?",
      options: [
        "A. DATEVALUE",
        "B. PREVGROUPVAL",
        "C. PRIORVALUE",
        "D. PARENTGROUPVAL.",
      ],
      answer: "D",
      title: "Question 26",
      explanation: "",
    },
    {
      content:
        "the vp of sales noticed that sales representatives are extending their close dates to the future on their opportunities.\nhow can the sales managers determine how many times close dates are being changed? choose 2",
      options: [
        "A. use workflow to update a count field when the close date field has changed using the criteria closedate> PRIORVALUE(closedate)",
        "B. use workflow to update a count field when the close date field has changed using the criteria ISCHANGED(closedate).",
        "C. Add a formula field on the page layout of the opportunity with the default value set to PRIORVALUE(close date).",
        "D. have a developer create an apex trigger to update a count field when a change to the close date field has been made.",
      ],
      answer: "A,B",
      title: "Question 27",
      explanation: "",
    },
    {
      content:
        "How can an administrator improve the relevance of search results for support agents searching for knowledge articles to solve articles?\nChoose 3 answers",
      options: [
        "A. Pre-populate article search filters based on the values of case fields.",
        "B. Define synonyms for common search terms.",
        "C. Enable feed tracking on all relevant article types.",
        "D. Create data categories and assign articles to each category.",
        "E. Create a record type for each data category.",
      ],
      answer: "A,B,D",
      title: "Question 28",
      explanation: "",
    },
    {
      content:
        "The administrator at Universal Containers needs to convert a lookup relationship to a master-detail relationship.\nwhat should the administrator verify to ensure that the conversion is successful?",
      options: [
        "A. The owner is the same for all related records",
        "B. No roll-up summaries exist on the lookup object.",
        "C. The lookup field is required on the child object.",
        "D. The lookup field in all records contains a value.",
      ],
      answer: "D",
      title: "Question 29",
      explanation: "",
    },
    {
      content:
        "Universal containers uses Salesforce to track job positions and applicants. Applicants can apply for multiple positions and positions will have multiple applicants. The company wants to ensure that if an applicant is deleted, all associations between the applicant and the position(s) that he or she has applied for are deleted.\nHow can this be accomplished?",
      options: [
        "A. Create a master detail relationship between applicants and positions with applicants as the master.",
        "B. Create a lookup relationship between applicants and positions with applicants as the parent.",
        "C. Create a custom object between applicants and positions with lookup fields on the junction to both the objects.",
        "D. Create a many -to- many relationships using junction object with both positions and applicants as masters.",
      ],
      answer: "A",
      title: "Question 30",
      explanation: "",
    },
    {
      content:
        "Which two processing steps are triggered when reassigning Account owners using the Mass Transfer too?\nChoose 2 answers",
      options: [
        "A. All Account sharing rules are recalculated.",
        "B. Manual sharing is updated to reflect the new Owner",
        "C. All manual sharing is removed from the Accounts",
        "D. Only Owner-based sharing rules are recalculated.",
      ],
      answer: "A,B",
      title: "Question 31",
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
      answer: "A",
      title: "Question 32",
      explanation: "",
    },
    {
      content: "Which three are capabilities of Collaborative Forecasting?",
      options: [
        "A. Rename categories",
        "B. Overlay quota",
        "C. Select a default forecast currency setting",
        "D. Forecast using opportunity splits",
        "E. Add categories",
      ],
      answer: "A,C,D",
      title: "Question 33",
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
      title: "Question 34",
      explanation: "",
    },
    {
      content:
        "When a sales rep at Northern Trail tiers to submit a discount request on an opportunity they receive an error:\nWhich two consideration would cause this error?",
      options: [
        "A. The approval process is assigned to a queue.",
        "B. A validation rule prevents the field update",
        "C. This field updated is on a cross-object.",
        "D. The approval assigned in the process is inactive",
      ],
      answer: "B,D",
      title: "Question 35",
      explanation: "",
    },
    {
      content:
        "The administrator of Universal Containers is testing an approval process in a recently refreshed Developer Pro sandbox and is finding that none of the notification emails are being sent to the approvers.\nwhich two reasons could be the cause?\nChoose 2 answers",
      options: [
        "A. The deliverability access level setting Is incorrect.",
        "B. The email addresses for the users are incorrect.",
        "C. Workflow emails only work in Full sandboxes.",
        "D. HTML templates are unavailable in sandboxes.",
      ],
      answer: "A,B",
      title: "Question 36",
      explanation: "",
    },
    {
      content:
        "Universal containers is implementing a time recording system in salesforce.\nEmployees are required to record their time in a work log custom objectagainst either an opportunity or a case. The company wants to see total hours worked on an opportunity or a case. which type of relationship field should an administrator use to relate the work log to the opportunity or case?",
      options: [
        "A. Master-detail.",
        "B. Lookup.",
        "C. Hierarchical.",
        "D. Junction",
      ],
      answer: "D",
      title: "Question 37",
      explanation: "",
    },
    {
      content:
        "An administrator would like to know which delegated administrators are actively customizing their organization.\ntheir organization. Where can the administrator find this information?",
      options: [
        "A. Delegated administrator log",
        "B. Debug log",
        "C. Setup audit trail",
        "D. Login history",
      ],
      answer: "C",
      title: "Question 38",
      explanation: "",
    },
    {
      content:
        "Universal Containers' support team needs to track service level agreements for customers. Today, they manually look up contracts by name when a customer calls.\nHow should an administrator automate this process?",
      options: [
        "A. Enable Case Feed and add a Contracts custom publisher to the Case Feed layout.",
        "B. Enable entitlements and add the tabs for entitlements and service contracts.",
        "C. Configure a workflow rule that sends an email alert of old cases to the support manager.",
        "D. Create a private Chatter group for customers with high-priority service level agreements.",
      ],
      answer: "B",
      title: "Question 39",
      explanation: "",
    },
    {
      content:
        "Universal Containers is working on an implementation strategy for Salesforce CRM content and wants to ensure consistent tagging across and within its libraries, minimizing accidental duplicate tags.\nWhat action can be taken to ensure this consistent tagging in universal containers libraries? choose 2",
      options: [
        "A. Enable restricted tagging upon the creation of library.(100%)",
        "B. Establish tag names with contributors upon the creation of library.(100%)",
        "C. Create a workflow email alert for unrelated tags within a library.",
        "D. Change the tag field to a pre-populated picklist.",
      ],
      answer: "A,B",
      title: "Question 40",
      explanation: "",
    },
    {
      content:
        "Which three capabilities should an administrator consider about change sets?\nChoose 3 answers.",
      options: [
        "A. When custom fields are added to a change set, field-level security is automatically included.",
        "B. When a change set is deployed to production, by default, all unmanaged Apex tests will automatically be run.",
        "C. There is a feature that allows the user to validate a change set before deploying it.",
        "D. When a component is added to a change set, all dependent components automatically get added.",
        "E. To use change sets, at least one Inbound and one outbound connection must exist.",
      ],
      answer: "A,C,E",
      title: "Question 41",
      explanation: "",
    },
    {
      content:
        "When the delete permission is selected in a muting permission set, which other permission is automatically muted?",
      options: [
        "A. Modify All Records",
        "B. Modify All Data",
        "C. New Al Records",
        "D. View Al Data",
      ],
      answer: "A",
      title: "Question 42",
      explanation: "",
    },
    {
      content:
        'A growing number of duplicate leads are being entered into salesforce.\nuniversal containers IT department wants to give all marketing team members the ability to leverage the "find duplicates" functionality in saleforce to reduce the number of duplicate leads in the system through merges.\nwhat lead object level permission is needed to allow the marketing team members to complete this task?',
      options: ["A. Read and edit", "B. Delete", "C. View all", "D. Merge"],
      answer: "B",
      title: "Question 43",
      explanation: "",
    },
    {
      content:
        "A sales manager cannot view a contact owned by a salesperson. The salesperson is below the sales manager in the role hierarchy. Why is the sales manager unable to view the contact?",
      options: [],
      answer: "",
      title: "Question 44",
      explanation:
        "Contact sharing settings have grant access using hierarchies unchecked",
    },
    {
      content:
        "a sales manager wants to edit the opportunities owned by the sales team.\nthe manager does not have edit access to opportunity object.\nWhat is a recommended solution?",
      options: [
        "A. Create a permission set and associate Edit opportunity to the user record.",
        "B. Enable team selling on the opportunity object to grant Read/write access.",
        "C. change the opportunity organization-wide default setting to public Read/Write.",
        'D. Redefine the role hierarchy by enabling " grant access using hierarchies".',
      ],
      answer: "A,B",
      title: "Question 45",
      explanation: "",
    },
    {
      content:
        "Universal Containers has four sales regions: North America, APAC, EMEA, and LATAM. Each sales region is led by a VP of Sales. Each of the VPs wants to have a dashboard emailed to them every Monday morning that contains components with only the data for their region. How can an administrator meet this requirement?",
      options: [
        "A. Create one dashboard using Visualforce to create a filter, scheduled to be delivered on Monday mornings.",
        "B. Create a reporting snapshot and check the dashboard option, scheduled to be delivered on Monday mornings.",
        "C. Create one dashboard that includes a filter for each region, scheduled to be delivered on Monday mornings.",
        "D. Create a separate dashboard with data specific to each sales VP, scheduled to be delivered on Monday mornings.",
      ],
      answer: "D",
      title: "Question 46",
      explanation: "",
    },
    {
      content:
        "Support agents at Cloud Kicks associate Cases and Bugs so that can report on how many Cases are related to a Bug. A Bug is required to have a Case in order to be created.\nWhich type of object relationship will meet this requirement?",
      options: [
        "A. Hierarchical",
        "B. Master-detail",
        "C. Lookup",
        "D. Junction",
      ],
      answer: "B",
      title: "Question 47",
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
      answer: "A",
      title: "Question 48",
      explanation: "",
    },
    {
      content:
        "Universal Containers uses Territory Management to manage its sales territories. Territory managers and sales representatives are at the same role level in the role hierarchy. Account and Opportunity objects are set to private.\nWhich three permissions should be granted to territory managers.\nChoose 3 answers",
      options: [
        "A. View All opportunities associated with accounts in the territory, regardless of who owns the opportunities.",
        "B. Transfer All opportunities associated with accounts in the territory, regardless of who owns the opportunities.",
        "C. Edit All opportunities associated with accounts in the territory, regardless of who owns the opportunities.",
        "D. View, Edit, Transfer, and Delete accounts assigned to the territory, regardless of who owns the accounts.",
        "E. Transfer and Delete opportunity assigned to the territory, regardless of who owns the opportunities.",
      ],
      answer: "A,C,E",
      title: "Question 49",
      explanation: "",
    },
    {
      content:
        "What is the correct order of steps to follow when working with inbound change sets?",
      options: [
        "A. Monitor, Deploy, Validate",
        "B. Deploy, validate, Monitor",
        "C. Validate, Deploy, Monitor",
        "D. Deploy, Monitor, Validate",
      ],
      answer: "C",
      title: "Question 50",
      explanation: "",
    },
    {
      content:
        "Northern Trail Outfitters has five delegated administrators and two system administrators. There have been a couple of cases reported that login settings for sales reps have changed.\nWhere would the administrator find what settings have been changed?",
      options: [
        "A. Debug log",
        "B. Field history tracking",
        "C. Login history",
        "D. Setup audit trail",
      ],
      answer: "B",
      title: "Question 51",
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
      title: "Question 52",
      explanation: "",
    },
    {
      content:
        "A member of Universal Container's support team is assisting a sales rep in managing a top customer. The sales rep has manually shared an opportunity with the support member in hopes that the support member can update some of the technical sales fields on the record. But the support member is unable to edit the opportunity.\nWhat is the recommended solution to provide edit access to the opportunity?",
      options: [
        "A. Change the support team member's role to a above the sales rep in the org's role hierarchy.",
        "B. Create a permission set for opportunity edit and add it to the support member's user record.",
        "C. Add the support team member to the opportunity team. Assign read/write access to the member.",
        "D. Change the Organization Wide Default internal access for opportunity to public read/write.",
      ],
      answer: "D",
      title: "Question 53",
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
      title: "Question 54",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants to use the Omni Channel routing feature in Service Cloud. They are using assignment rules and want to ensure that the routing chosen meets the requirements.\nWhat should an administrator take into consideration before implementation?",
      options: [
        "A. Assignment rules are triggered when an agent accepts the work and edits and saves the work.",
        "B. Assignment rules are triggered when Omni-Channel routing routes a work item to an agent and the agent accepts the work.",
        "C. The least active routing model looks for the agent who has the largest maximum work capacity.",
        "D. If there is a tie in the Omni-Channel routing logic, Omni-Channel routes the work to the agent who most recently received a work item.",
      ],
      answer: "A",
      title: "Question 55",
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
      title: "Question 56",
      explanation: "",
    },
    {
      content:
        "Sales representatives are reporting trouble syncing quotes with their related opportunities.\nWhat is a possible explanation for this problem? Choose two",
      options: [
        "A. The attached currency is no longer active.",
        "B. The quote is attached to a closed opportunity.",
        "C. The quote contains an archived list price.",
        "D. The user does not have Edit permissions on the quote.",
      ],
      answer: "A",
      title: "Question 57",
      explanation: "",
    },
    {
      content:
        "Which two should an administrator consider when setting up Salesforce CRM Content ? Choose 2 answers.",
      options: [
        "A. The content type determines which fields appear on the Content Detail page layout.",
        "B. The library type determines the size of files that can be contributed to content.",
        "C. An approval process can ensure that all product-related content is reviewed.",
        "D. A validation rule can ensure a description is required for all contributed content.",
      ],
      answer: "A,D",
      title: "Question 58",
      explanation: "",
    },
    {
      content:
        "A user has pore with read-only permissions for the case object.\nHow can the user be granted edit permission for cases?",
      options: [
        "A. Create permission set with edit permissions for the case object.",
        "B. Create a sharing rule on the case object with read/write level of access.",
        "C. Create a public group with edit permissions for the case object.",
        "D. Add the user in a role hierarchy above the users with edit permissions on the case object.",
      ],
      answer: "A",
      title: "Question 59",
      explanation: "",
    },
    {
      content:
        "The VP of sales at Universal Containers has reported that users are changing the stage of opportunity records that they do not own. The VP wants only the owner of an opportunity to be able to change the stage of an opportunity-wide Default are set to pubic read/write.\nWhich validation rule should the administrator use to allow only the record owner to edit the stage field?",
      options: [
        "A. AND(ISCHANGED(StageName) < >; $user.id)",
        "B. AND(PRIORVALUE (StageName), Ownerid < >; $user,id)",
        "C. NOT(PRIORVALUE(StageName) , Ownerid = $user.id)",
        "D. NOT(ISCHANGED(StageName) , ownerid = $user.id)",
      ],
      answer: "A",
      title: "Question 60",
      explanation: "",
    },
  ],
});
