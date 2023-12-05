window.testContent = window.testContent || [];
var testId = "Salesforce.Advanced-Administrator";
var testName = "Salesforce.Advanced-Administrator";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "Salesforce.Advanced-Administrator.v2020-07-25.q106",
  content: [
    {
      content:
        "Which two values roll up the Hierarchy to the manager for both Customizable and Collaborative Forecasts? Choose 2 answers",
      options: [
        "A. Quota amount",
        "B. Opportunity amount",
        "C. Product quantity",
        "D. Expected revenue",
      ],
      answer: "A,B",
      title: "Question 1",
      explanation: "",
    },
    {
      content:
        "UC needs to use different a pricebook for sales representatives in US, LATAM, EMEA and APAC.\nWhat should the system administrator do? Choose 1.",
      options: [
        "A. Clone standard Pricebook and assigned separate prices for each region",
        "B. delete standard pricebook and create pricebooks",
      ],
      answer: "A",
      title: "Question 2",
      explanation: "",
    },
    {
      content: "You can track only Assets sold by your company.",
      options: ["A. True", "B. False"],
      answer: "B",
      title: "Question 3",
      explanation: "",
    },
    {
      content:
        "A user has pore with read-only permissions for the case object.\nHow can the user be granted edit permission for cases?",
      options: [
        "A. Add the user in a role hierarchy above the users with edit permissions on the case object.",
        "B. Create a public group with edit permissions for the case object.",
        "C. Create permission set with edit permissions for the case object.",
        "D. Create a sharing rule on the case object with read/write level of access.",
      ],
      answer: "C",
      title: "Question 4",
      explanation: "",
    },
    {
      content:
        "An administrator has uploaded a change set from a sandbox to a production organization and would like to add a missing component to the change set before deployment.\nWhat option does the administrator have to modify the change set? Choose 2 answers.",
      options: [
        "A. Edit the change set in the sandbox environment and upload it to production.",
        "B. Clone the change set in the sandbox environment, add the component and upload it to production",
        "C. Create a new change set in the sandbox environment, add all the required components and upload it to productionD. Edit the change set in production, add the component, and use the redeploy option.",
      ],
      answer: "B,C",
      title: "Question 5",
      explanation: "",
    },
    {
      content:
        "The administrator at Universal Containers needs to convert a lookup relationship to a master-detail relationship.\nwhat should the administrator verify to ensure that the conversion is successful?",
      options: [
        "A. No roll-up summaries exist on the lookup object.",
        "B. The lookup field in all records contains a value.",
        "C. The lookup field is required on the child object.",
        "D. The owner is the same for all related records",
      ],
      answer: "B",
      title: "Question 6",
      explanation: "",
    },
    {
      content:
        "A system administrator wants to change the field type from a lookup field to a master-detail field. What must the system administrator check in order for the change to be implemented successfully?",
      options: [
        "A. Make sure that all lookup fields on the record are filled up",
        "B. Make sure that the lookup field has a related record",
        "C. Option4",
        "D. Make sure the lookup value is required",
      ],
      answer: "A",
      title: "Question 7",
      explanation: "",
    },
    {
      content:
        "If your support process is not based on individual service contracts which steps should you perform when settling up entitlements?",
      options: [
        "A. customize entitlement fields and entitlements page layout",
        "B. set up service contracts b. set up contract line items",
        "C. set up both service contracts and contract line items",
      ],
      answer: "C",
      title: "Question 8",
      explanation: "",
    },
    {
      content:
        "What tool would you use if you wanted to create a report that would compare results over time based on specific criteria?",
      options: [
        "A. custom report types (CRT)",
        "B. Standard Report",
        "C. Exception Report",
        "D. analytic snapshots",
      ],
      answer: "D",
      title: "Question 9",
      explanation: "",
    },
    {
      content:
        "An administrator wants to allow users who are creating leads to have access to the Find Duplicates button. What lead object-level permission will the administrator need to provide these users?",
      options: ["A. View All", "B. Delete", "C. Merge", "D. Read and Edit"],
      answer: "A",
      title: "Question 10",
      explanation: "",
    },
    {
      content:
        "The administrator at universal containers has been asked to track training classes taken by employees. Employees may take several classes. The employee and class objects have already been created. How should the administrator relate the two objects?",
      options: [
        "A. Create a junction object with both employee and class as master objects",
        "B. Create a lookup relationship with employee as the master object",
        "C. Create a lookup relationship on both the employee and class objects",
        "D. Create a master detail relationship with class as the master object.",
      ],
      answer: "A",
      title: "Question 11",
      explanation: "",
    },
    {
      content:
        "What type of data can be migrated between environments using change sets? Choose 2 answers",
      options: [
        "A. Account team roles",
        "B. Custom fields",
        "C. Email templates",
        "D. Field type changes",
      ],
      answer: "B,C",
      title: "Question 12",
      explanation: "",
    },
    {
      content:
        "How to create a report showing Company growth Year after Year. What function to use ?",
      options: [
        "A. PRIORVALUE",
        "B. PARENTGROUPVAL",
        "C. PREVGROUPVAL",
        "D. DATEVAL",
      ],
      answer: "C",
      title: "Question 13",
      explanation: "",
    },
    {
      content:
        "Choose the Forecast schedule type that is a revenue projection that can be expressed in dollar amount, units of product family, or both.",
      options: ["A. Forecast", "B. Pipeline", "C. Quota"],
      answer: "A",
      title: "Question 14",
      explanation: "",
    },
    {
      content:
        "A member of Universal Container's support team is assisting a sales rep in managing a top customer. The sales rep has manually shared an opportunity with the support member in hopes that the support member can update some of the technical sales fields on the record. But the support member is unable to edit the opportunity.\nWhat is the recommended solution to provide edit access to the opportunity?",
      options: [
        "A. Change the support team member's role to a above the sales rep in the org's role hierarchy.",
        "B. Add the support team member to the opportunity team. Assign read/write access to the member.",
        "C. Create a permission set for opportunity edit and add it to the support member's user record.",
        "D. Change the Organization Wide Default internal access for opportunity to public read/write.",
      ],
      answer: "C",
      title: "Question 15",
      explanation: "",
    },
    {
      content:
        "How are the detail records shared in a master-detail relationship?\nSelect one:",
      options: [
        "A. With Permission Sets.",
        "B. They inherit the sharing settings of their master (parent) record.",
        "C. They have their own OWD sharing settings.",
        "D. With Field Level Security settings.",
      ],
      answer: "B",
      title: "Question 16",
      explanation: "",
    },
    {
      content:
        "Which deployment tool can be used to delete metadata from an organization? (choose 2 answers)",
      options: [
        "A. Change sets",
        "B. Unmanaged packages",
        "C. Force.com Migration Tool",
        "D. Force.com IDE",
      ],
      answer: "C,D",
      title: "Question 17",
      explanation: "",
    },
    {
      content: "What actions can you add to a milestone (3)",
      options: [
        "A. Success actions ",
        "B. Warning actions",
        "C. Violation actions ",
        "D. Success actions",
        "E. Repeat actions",
        "F. Warning actions ",
        "G. Violation actions",
      ],
      answer: "B,D,G",
      title: "Question 18",
      explanation: "",
    },
    {
      content:
        "SFB Industries are tightening up their forecasting procedure. Sales Managers would now like to see a submission of each users forecast at the end of each week.\nWhich feature will allow you to do this?",
      options: ["A. Collaborative Forecasting", "B. Customizable Forecasting"],
      answer: "B",
      title: "Question 19",
      explanation: "",
    },
    {
      content:
        "SFB Industries have set their Sales users profiles to read only on cases. But they have recently created a sharing rule that grants all sales users write access. What is true about the sales users level of access?",
      options: [
        "A. They cannot edit cases",
        "B. They can only edit cases if they are the owner of the account",
        "C. They can only edit cases if they are the owner of the case",
        "D. They can edit cases",
      ],
      answer: "A",
      title: "Question 20",
      explanation: "",
    },
    {
      content:
        "Sales management wants to enforce a process in which the name of an account is always included in the name of an opportunity. How can automation be used to help meet this requirement?",
      options: [
        "A. Write a criteria-based workflow rule that updates the opportunity name concatenated with the account name.",
        "B. Use approval process that routes newly created opportunities to management for data quality review.",
        "C. Write a validation rule that updates the opportunity name with the account name using a cross-object formula.",
        "D. Use an Apex Trigger on the Account object that adds the account name to the opportunity name.",
      ],
      answer: "A",
      title: "Question 21",
      explanation: "",
    },
    {
      content:
        "Universal Containers has a requirement to report on opportunities where the probability has dropped beneath 50%. The administrator has created a custom checkbox as a way to identify these records. What else should the administrator do to meet this requirement?",
      options: [
        "A. Build a validation rule that displays an error when the user enters the probability to less than 50%",
        "B. Enable field history tracking on the field and include the history in the report filter",
        "C. Create a workflow rule that updates the field when the probability drops below 50%",
        "D. Create an approval process that submits the opportunity for approval when the custom checkbox is true.",
      ],
      answer: "C",
      title: "Question 22",
      explanation: "",
    },
    {
      content:
        "The support manager at Universal Containers wants a dashboard that shows the number of cases that remain open as of 5:00 p.m. each day.What type of report should be used in the dashboard component?",
      options: [
        "A. Custom summary report where unit equals business hours",
        "B. Report based on a reporting snapshot that runs daily at 5:00 p.m.",
        "C. Standard case lifecycle report where unit equals business hours",
        "D. Report based on custom report type using cases and business hours.",
      ],
      answer: "B",
      title: "Question 23",
      explanation: "",
    },
    {
      content:
        "The VP of Marketing is launching campaigns in each region to target accounts that do not have open opportunities. What reporting solution can an administrator set up to assist with this?",
      options: [
        "A. Joined report",
        "B. Standard Filter",
        "C. Cross Filter",
        "D. Reporting snapshot",
      ],
      answer: "D",
      title: "Question 24",
      explanation: "",
    },
    {
      content:
        "Which features make repetitive actions in the Service Console quicker and easier for agents?\nSelect 3",
      options: [
        "A. Macros",
        "B. Quick Text",
        "C. Heuristic Logic",
        "D. Predictive text",
        "E. Email Templates",
      ],
      answer: "A,B,E",
      title: "Question 25",
      explanation: "",
    },
    {
      content:
        "Developers at Universal Containers have created new custom objects and fields in a sandbox.\nRecords have also been created for these new objects. What should an administrator do to move these objects, fields , and records to a production environment ?",
      options: [
        "A. Use the Data Loader to Migrate all the new metadata and the related records.",
        "B. Use the change sets to migrate both the metadata and the records.",
        "C. Use the change sets to migrate the new metadata and Data Loader to migrate the records.",
        "D. Use the Force.com IDE's built-in deployment wizard to migrate all changes.",
      ],
      answer: "C",
      title: "Question 26",
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
      title: "Question 27",
      explanation: "",
    },
    {
      content:
        "An Administrator is preparing to deploy change set into the production environment. Until the deployment is complete, only user with System Administrator profile should be allowed to access data in the production system. When any other user attempts to log in, a maintenance notice should be displayed instead. How can administrator meet this requirement?",
      options: [
        "A. Add login hours to all profiles except System Administrator and set the custom maintenance message",
        "B. Add Individual IP range to all profiles except System Administrator and add a custom home page message",
        "C. Activate Planned maintenance window feature and set the custom maintenance message",
        "D. Assign all other users a custom profile with read access to all objects revoked and add a custom home page message",
      ],
      answer: "D",
      title: "Question 28",
      explanation: "",
    },
    {
      content:
        "A sales manager would like access to the following:\nAll closed/won opportunities in the last six months for each account the manager owns.\nAll cases created within the last six months for each account the manager owns.\nWhat can the administrator create to meet these requirements ?",
      options: [
        "A. Create a custom report type to combine the data into a single report.",
        "B. Create an Account report that groups by both opportunities and cases.",
        "C. Create an Account report and add Opportunity and Case cross filters.",
        "D. Create a single report using the Joined Reports feature.",
      ],
      answer: "C",
      title: "Question 29",
      explanation: "",
    },
    {
      content:
        "A user with Delegated Administration cannot do which of the following for users accounts that she/he has delegated authority for (select all that apply):\nSelect one or more:",
      options: [
        "A. Create default opportunity teams.",
        "B. Unlock users.",
        'C. Assign a profile with the "Modify all Data" permission.',
        "D. Change the profile for a user.",
        "E. Reset passwords.",
        "F. Modify a profile",
        "G. Set Quotas.",
      ],
      answer: "C,F",
      title: "Question 30",
      explanation: "",
    },
    {
      content:
        "How can you display a dynamic traffic light style image (Red Amber, Green) on the Lead Object, depending on a custom Lead Score field?",
      options: [
        "A. Create a workflow rule to automatically update a custom field with the relevant image",
        "B. Use a formula field with the IMAGE() function",
        "C. Create an Image field and set a default formula using the IMAGE() function",
        "D. Enable the Lead Score image field",
      ],
      answer: "B",
      title: "Question 31",
      explanation: "",
    },
    {
      content:
        "Universal Containers uses Enterprise Territory Management to manage its sales territories. The sales managers want to see who the account is manually shared outside of territory rules.\nHow can the system administrator meet this requirement?",
      options: [
        'A. Add the "Assigned Territories" related list to the sales page layout',
        'B. Add the "Users in Assigned Territories" related list to the sales page layout',
        'C. Add "Manage Territories" permission to the sales manager\'s profile',
        'D. Add "Assign Territories" permission to the sales manager\'s profile',
      ],
      answer: "B",
      title: "Question 32",
      explanation: "",
    },
    {
      content:
        "Who can collaborate about your business with Salesforce Communities? Select 3",
      options: [
        "A. Competitors",
        "B. Partners",
        "C. Customers",
        "D. Employees",
        "E. Suppliers",
      ],
      answer: "B,C,D",
      title: "Question 33",
      explanation: "",
    },
    {
      content: "The best practice when creating Profiles is to:\nSelect one:",
      options: [
        "A. Start with a blank profile and customize it to what you need.",
        "B. Clone one of the built in standard profiles that is close to what you need",
        "C. Use one profile for all users.",
        "D. Edit one of the existing built in profiles.",
      ],
      answer: "B",
      title: "Question 34",
      explanation: "",
    },
    {
      content:
        "Universal Containers uses a custom object to track resources called Supply Items with a lookup to Accounts. The Supply Items records should only be visible by users that own the Account records. What sharing setting provides the correct visibility?",
      options: [
        "A. Private",
        "B. Public Read Only",
        "C. Public Read/Write/Transfer",
        "D. Controlled by Parent",
      ],
      answer: "D",
      title: "Question 35",
      explanation: "",
    },
    {
      content:
        "Universal Containers needs to create price books for sales representatives in multiple regions.\nHow should the administrator meet this requirement?",
      options: [
        "A. Delete the standard price book and create new price books for each region.",
        "B. Clone the standard price book and create a new price book for each region.",
        "C. Add new Price book entries to the standard price book for each region.",
        "D. Delete the products that are not needed by a region from the standard price book.",
      ],
      answer: "B",
      title: "Question 36",
      explanation: "",
    },
    {
      content:
        "SFB Industries needs to use two Custom Objects Shipments & Shipment items. Every time a Shipment item is marked as packed, it needs to trigger a field update on the master shipment record. What kind of relationship and feature needs to be present for this to work?",
      options: [
        "A. Lookup--relationship with a roll--up summary field",
        "B. Lookup--relationship with a cross object field update",
        "C. Master--detail relationship with a roll--up summary field",
        "D. Master--detail relationship with a cross object field update",
      ],
      answer: "D",
      title: "Question 37",
      explanation: "",
    },
    {
      content:
        "Agents can file vacation leave request that must be approved by the manager. An agent is unable to submit the request. What could be the possible cause?",
      options: [
        "A. There is error in Approval Process",
        "B. Agent's manager is inactive",
        "C. Approval process is not activated for him",
        "D. He is not Manager of any User",
      ],
      answer: "B",
      title: "Question 38",
      explanation: "",
    },
    {
      content:
        "Leads come to universal containers from various sources and need to be assigned to the correct sales team. When a lead comes for the APAC region, it can be passed to an external partner if the sales director approves the transfer. The partner's channel manager must be notified when the partner has been assigned the lead.\nAt the minimum, which combination of automation tools will be needed to meet these requirements?",
      options: [
        "A. Assignment rules and approval processes",
        "B. Assignment rules, approval processes, and workflow rules",
        "C. Assignment rules, auto-response rules, and workflow rules",
        "D. Assignment rules and workflow rules.",
      ],
      answer: "B",
      title: "Question 39",
      explanation: "",
    },
    {
      content:
        "Universal Containers has four sales regions: North America, APAC, EMEA, and LATAM. Each sales region is led by a VP of Sales. Each of the VPs wants to have a dashboard emailed to them every Monday morning that contains components with only the data for their region. How can an administrator meet this requirement?",
      options: [
        "A. Create a separate dashboard with data specific to each sales VP, scheduled to be delivered on Monday mornings.",
        "B. Create a reporting snapshot and check the dashboard option, scheduled to be delivered on Monday mornings.",
        "C. Create one dashboard using Visualforce to create a filter, scheduled to be delivered on Monday mornings.",
        "D. Create one dashboard that includes a filter for each region, scheduled to be delivered on Monday mornings.",
      ],
      answer: "A",
      title: "Question 40",
      explanation: "",
    },
    {
      content:
        "To set up entitlement management, including milestones, entitlement processes, and entitlement templates which two permissions need to be enabled?Choose 2 answers",
      options: [
        "A. Manage Milestones",
        "B. Customize Application",
        "C. Manage Entitlements",
        "D. Customize Entitlements",
      ],
      answer: "B,C",
      title: "Question 41",
      explanation: "",
    },
    {
      content: "What is an Article Type?",
      options: [
        "A. Each Article created will have a corresponding Article Type that controls its content",
        "B. An Article Type defines the access and security of an article",
        "C. An Article Type defines which channel can access the article and Internal & Partner & Customer etc.",
        "D. An Article Type defines the structure and format of an article",
      ],
      answer: "D",
      title: "Question 42",
      explanation: "",
    },
    {
      content:
        "What permission would you need to locate duplicate records that you do not own in a custom object?",
      options: ["A. Delete", "B. View All Data", "C. Read, Edit", "D. Merge"],
      answer: "B",
      title: "Question 43",
      explanation: "",
    },
    {
      content:
        "What permission do you need enabled to see the Find Duplicates button?",
      options: ["A. Read, Edit", "B. View All Data", "C. Merge", "D. Delete"],
      answer: "B",
      title: "Question 44",
      explanation: "",
    },
    {
      content:
        "How can an administrator improve the relevance of search results for support agents searching for knowledge articles to solve articles?\nChoose 3 answers",
      options: [
        "A. Pre-populate article search filters based on the values of case fields.",
        "B. Define synonyms for common search terms.",
        "C. Create a record type for each data category.",
        "D. Enable feed tracking on all relevant article types.",
        "E. Create data categories and assign articles to each category.",
      ],
      answer: "A,B,E",
      title: "Question 45",
      explanation: "",
    },
    {
      content:
        "Universal Containers uses a custom object to track services called Work Items with a lookup to Accounts. The Work Item records should only be visible by users that own the Account records.\nWhich sharing setting provides the correct visibility?",
      options: [
        "A. Public Read/Went/Transfer",
        "B. Controlled by Parent",
        "C. Public Read Only",
        "D. Private",
      ],
      answer: "D",
      title: "Question 46",
      explanation: "",
    },
    {
      content:
        "If using the Salesforce Data Loader, you need to use your username, password and:\nSelect one:",
      options: [
        "A. A one-time password.",
        "B. Security Token.",
        "C. A CAPTCHA.",
        "D. A security key.",
      ],
      answer: "B",
      title: "Question 47",
      explanation: "",
    },
    {
      content:
        "Support Records with a specific record type needs the access restricted to only a Support Manager and four support users. What can you do as a system administrator?",
      options: [
        "A. Create a new profile and assign the 5 users to the new profile.",
        "B. Remove the record type access for all users except the 5 mentioned.",
        "C. Create a criteria based sharing rule for the 5 users.",
        'D. Give the "View All Data" permission to the 5 mentioned users using permission sets.',
      ],
      answer: "C",
      title: "Question 48",
      explanation: "",
    },
    {
      content:
        "Select an option below that you would use to limit the number of records and assist with data consistency.",
      options: [
        "A. Record types and page layouts",
        "B. Picklist and dependent picklist fields",
        "C. Workflow field updates",
        "D. Custom formula fields",
        "E. Custom lookup fields and lookup filters",
      ],
      answer: "E",
      title: "Question 49",
      explanation: "",
    },
    {
      content: "What is true about Territory Management? (Choose 2)",
      options: [
        "A. Users can belong to one territory",
        "B. Users can belong to one or more territories",
        "C. Accounts can belong to one or more territories",
        "D. Accounts can belong to one territory",
      ],
      answer: "B,C",
      title: "Question 50",
      explanation: "",
    },
    {
      content:
        "A Sales Manager needs to see a pipeline report based on standard industries. The company has 3 main groups of industries they sell into and the report needs to reflect this.\nWhich feature can be used to group the various standard\nindustries into groups on the report?",
      options: [
        "A. Custom Summary Formulas",
        "B. Summary grouping",
        "C. Bucket Fields",
        "D. Parent Grouping",
      ],
      answer: "C",
      title: "Question 51",
      explanation: "",
    },
    {
      content:
        "Some users across the business in various departments need the ability to export reports. Which feature will best grant access to these users?",
      options: [
        "A. Enable the Export Reports permission on their existing profiles",
        "B. Create a permission set with the Export Reports permission and assign it to the relevant users",
        "C. Create a new profile with the Export Reports permission",
        "D. Use Delegated Administration and assign it to the relevant users",
      ],
      answer: "B",
      title: "Question 52",
      explanation: "",
    },
    {
      content:
        "Which of the following statements are true about an end user's forecast? (Select 3)",
      options: [
        "A. This aggregate can be dollars of revenue",
        "B. It is updated in the system every evening at 5 pm",
        "C. Rolls up according to the forecast hierarchy",
        "D. This aggregate can be units of product",
      ],
      answer: "A,C,D",
      title: "Question 53",
      explanation: "",
    },
    {
      content:
        "A Sales manager at SFB Industries would like to view the global company sales dashboard but be able to switch between a US EMEA & APAC view. How can this best be achieved?",
      options: [
        "A. Use Dashboard filters",
        "B. Change the filters on the various reports",
        "C. Clone the Dashboard and change the filters on the various reports",
        "D. Use a Dynamic Dashboard to switch between regions",
      ],
      answer: "A",
      title: "Question 54",
      explanation: "",
    },
    {
      content:
        'An administrator has unchecked the "Enable contact pack creation" checkbox after users had created content packs. What is the impact of the change?',
      options: [
        "A. The clone & customize button will continue to be available.",
        "B. Users can continue to edit the contents of existing packs.",
        "C. All existing content packs will be deleted",
        "D. Users can modify the description and title of existing packs.",
      ],
      answer: "D",
      title: "Question 55",
      explanation: "",
    },
    {
      content:
        "SFB Industries have a requirement to see how many cases are open at any one time over the year. How can this be achieved?",
      options: [
        "A. Exception Reports",
        "B. Scheduled Reports",
        "C. Custom Report Types",
        "D. Analytical Snapshots",
      ],
      answer: "D",
      title: "Question 56",
      explanation: "",
    },
    {
      content:
        "Universal Containers has setup a picklist dependency between Region and Zone on the Account object. The sales manager has requested that when a user selects a region a zone must also be selected. How can this be achieved?",
      options: [
        "A. Set the default values for both picklist fields.",
        "B. Create a validation rule using ISPICKVAL().",
        "C. Make both picklist fields required on the field level.",
        "D. Make the Zone field required on the page layout.",
      ],
      answer: "B",
      title: "Question 57",
      explanation: "",
    },
    {
      content:
        "Sales representatives are reporting trouble syncing quotes with their related opportunities.\nWhat is a possible explanation for this problem? Choose two",
      options: [
        "A. The quote contains an archived list price.",
        "B. The user does not have Edit permissions on the quote.",
        "C. The quote is attached to a closed opportunity.",
        "D. The attached currency is no longer active.",
      ],
      answer: "D",
      title: "Question 58",
      explanation: "",
    },
    {
      content:
        "What must be considered in Communities for internal and external users. External users are using chatter. Choose 2",
      options: [
        "A. External and Internal users should be on different community",
        "B. Use Ideas, Q&A",
        "C. You need to enable Chatter",
        "D. New Users should use Customer portal and partner portal instead of community",
      ],
      answer: "B,C",
      title: "Question 59",
      explanation: "",
    },
    {
      content:
        "Universal Containers would like applicants to apply for multiple positions, tracking how many applicants have applied and how many positions each individual applicant has applied for. To do this, the administrator will create a Job Application junction object between Applicant and Position objects. Why will this action meet the requirement ?",
      options: [
        "A. A lookup relationship on the Applicant object with Position as the master provides rollup summary fields without code.",
        "B. The Job Application object as a master to Positions and Applicant objects will allow rollup summary fields on the Positions and Applicant objects.",
        "C. The junction object allows a many-to-many relationship and also roll-up summary fields on the parent objects.",
        "D. The junction object allows the administrator to add a workflow rule to update fields on the Position and Applicant objects.",
      ],
      answer: "C",
      title: "Question 60",
      explanation: "",
    },
    {
      content:
        "What can a Sales Representative see once he clicks on the Forecast (Collaborative) tab? Select 4",
      options: [
        "A. Quotas",
        "B. Forecast Categories",
        "C. Data Source",
        "D. Opportunity list column",
        "E. Forecast Range",
      ],
      answer: "A,B,D,E",
      title: "Question 61",
      explanation: "",
    },
    {
      content: "What is a capability of Territory management? Choose 2 answers",
      options: [
        "A. The ability to use account criteria to expand a private sharing model",
        "B. Territory hierarchy replaces the role hierarchy for sharing",
        "C. Support for complex and frequently changed sales organization structures",
        "D. The ability to use opportunity criteria to expand a private sharing model",
      ],
      answer: "A,C",
      title: "Question 62",
      explanation: "",
    },
    {
      content:
        "Which of the following is true about the Salesforce Console for Sales? (Choose 3 answers)",
      options: [
        "A. It is necessary to edit the user record to assign this license to a user.",
        "B. An add-on license is required for each user who needs to access the console.",
        "C. To assign Sales Console access permission, you must edit the user record.",
        "D. To activate the sales console, it is necessary to check the Sales Console permission checkbox in the appropriate permission set.",
        "E. Edit user profiles to assign this license to a group of users.",
      ],
      answer: "A,B,D",
      title: "Question 63",
      explanation: "",
    },
    {
      content:
        "What object permission should the administrator provide for users to find duplicates under the lead object?",
      options: ["A. View All", "B. Read, Edit", "C. Delete", "D. Merge"],
      answer: "A",
      title: "Question 64",
      explanation: "",
    },
    {
      content:
        "The sales operations team has requested a new custom object with the following requirements:\nThe Sales Managers should have full access to all records created. The object's sharing default should be set to Private No new sharing rules should be created Which two options can the system administrator setup for the security for this object? Check 2 answers.",
      options: [
        'A. Create a Permission set for all Sales Manager users with "modify all" checked for the Object',
        'B. Create a rule for all Sales Manager users with "modify call" checked for the object.',
        'C. Create a Record Type with "modify all" checked, and assign this Record Type to the Sales Manager Profile',
        'D. Add the "modify all" permission to the Sales Manager Profile for the new Object',
      ],
      answer: "C,D",
      title: "Question 65",
      explanation: "",
    },
    {
      content:
        "Sales management wants a small subset of users with different profiles and roles to be able to view all data for compliance purposes. How can an administrator meet this requirement?",
      options: [
        "A. Enable the View All Data permission for the roles of the subset of users.",
        "B. Assign delegated administrator to the subset of users to View All Data.",
        "C. Create a new profile and role for the subset of users with the View All Data permission.",
        "D. Create a permission set with the View All Data permission for the subset of users.",
      ],
      answer: "D",
      title: "Question 66",
      explanation: "",
    },
    {
      content:
        "Which two options are allowed with Territory Management and the territory hierarchy, but NOT with the standard Role Hierarchy? Choose 2 answers",
      options: [
        "A. Allow multiple forecasts for each user.",
        "B. Allow visibility into direct reports' records for management.",
        "C. Grant access to records regardless of ownership.",
        "D. Grant access to related records based on account sharing.",
      ],
      answer: "A,D",
      title: "Question 67",
      explanation: "",
    },
    {
      content:
        "A customer object was created at Universal Containers to store information employees will need for their annual reviews. Only the employees should be able to access their records. The administrator has set Organization-Wide Defaults (OWD) to private for the object. These records are accessible by the employee's manager.\nWhat additional step should the administrator take to remove the manager access to these records?",
      options: [
        "A. Enable Hide Personal Information in User Management Settings.",
        "B. Verify that Allow Search is unchecked on the custom object.",
        "C. Uncheck Grant Access using Hierarchies in Sharing Settings.",
        "D. Uncheck Allow Users to Access Privacy Data on each profile",
      ],
      answer: "D",
      title: "Question 68",
      explanation: "",
    },
    {
      content: "Service Entitlements in Service Cloud help you to: Select 3",
      options: [
        "A. Define and maintain service contracts.",
        "B. Verify if your customer is eligible for support.",
        "C. Track the service levels you provide to your clients.",
        "D. Track your supplier performance.",
      ],
      answer: "A,B,C",
      title: "Question 69",
      explanation: "",
    },
    {
      content:
        "A sales manager would like a report of accounts with no closed/won opportunities in the last year. How can this requirement be met?",
      options: [
        "A. Create a tabular report using the Account report type and add a cross filter using Opportunities.",
        "B. Create a summary report using the Accounts report type with a formula field for opportunity count.",
        "C. Create a customer report type for Accounts without Opportunities.",
        "D. Create a joined report using the Accounts report type and the Opportunities report types.",
      ],
      answer: "A",
      title: "Question 70",
      explanation: "",
    },
    {
      content:
        "What permissions must be enabled on a profile to find duplicate records?",
      options: [
        "A. Delete",
        "B. Locate Duplicate Records",
        "C. View All Data",
        "D. Read and Edit",
        "E. Merge",
      ],
      answer: "C",
      title: "Question 71",
      explanation: "",
    },
    {
      content:
        "When removing test data from a new Developer Org using Mass Delete Records, why is it necessary to Mass Delete Accounts as the last step.\nSelect one:",
      options: [
        "A. The order does not matter",
        "B. They must be done in reverse alphabetical order",
        "C. Related child records exist",
        "D. It's an internal Salesforce requirement",
      ],
      answer: "C",
      title: "Question 72",
      explanation: "",
    },
    {
      content: "To setup the Entitlement Process what must you do ?",
      options: [
        "A. Delete all pending actions in the entitlement process queue",
        "B. Setup Service Contracts with Contract Line items and entitlement",
        "C. Specify Actions that you will add to your entitlement Process",
        "D. Setup Milestones that you will add to entitlement process",
      ],
      answer: "D",
      title: "Question 73",
      explanation: "",
    },
    {
      content:
        "What permission will you give a user without editing the profile itself?",
      options: [
        "A. Delegated administration",
        "B. Sharing rule",
        "C. Permission set",
        "D. Role hierarchy",
      ],
      answer: "A",
      title: "Question 74",
      explanation: "",
    },
    {
      content:
        "SFB Industries is currently granting access to a number of users around the business to various reports and folders in Salesforce. They are currently granting access based on the specific users. Which feature in Salesforce can be used to make this more efficient?",
      options: [
        "A. Create a new profile for the users",
        "B. Place all users in the same Role",
        "C. Create a sharing rule and add the users to it",
        "D. Create a public group and add the users to it",
      ],
      answer: "D",
      title: "Question 75",
      explanation: "",
    },
    {
      content:
        "How can the Social Accounts and Contacts feature be used to enrich Salesforce data?",
      options: [
        "A. Users can use their Twitter logins to display a contact's tweets when they are viewing contact records.",
        "B. The administrator can use the company's Facebook login to allow all users to see all public information on contacts.",
        "C. Users can use their Facebook logins to import education information for all of their Facebook friends.",
        "D. The administrator can log into LinkedIn to Import publicly displayed education information for contacts.",
      ],
      answer: "D",
      title: "Question 76",
      explanation: "",
    },
    {
      content:
        "Universal Containers uses Salesforce Knowledge and has defined its category groups based on the regions of Europe, of Americas, Africa, and Asi a. The administrator needs to restrict visibility of each category to the sales representatives within each region. How should the administrator control access to these category groups?",
      options: [
        "A. Add custom category groups to the roles assigned to the sales users.",
        "B. Add custom category groups to the profiles assigned to the sales users.",
        "C. Add or remove sales users from a public group with access to the category groups.",
        "D. Modify object settings for the category groups on the sales users profiles.",
      ],
      answer: "A",
      title: "Question 77",
      explanation: "",
    },
    {
      content:
        "Suggest a feature that SFB Industries can enable to increase call deflection.",
      options: [
        "A. Email--to--Case",
        "B. Click--to--dial",
        "C. Public Knowledge Base",
        "D. Live Chat",
      ],
      answer: "C",
      title: "Question 78",
      explanation: "",
    },
    {
      content:
        "Universal Containers uses a Private Sharing model for Account. User A is on-boarded to User B's team and given the same profile and Role Both users own 20 Accounts but user User B is a able to see 40 Accounts whereas User A can only see the 20 that the own.\nWhat are the possible reasons for this?",
      options: [
        "A. User B is a member of a Group that gained access to the records through a Sharing Rule.",
        "B. User B had the records shared with them through a Permission Set.",
        "C. User B is a member of a Queue that gained access to the records through a Sharing Rule",
        "D. User B had the records manually shared with them.",
      ],
      answer: "B",
      title: "Question 79",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants to track expense reports and expense line items. Values from expense line item records need to be aggregated and displayed on the expense record. What type of relationship should an administrator use to ensure that expense line items can be aggregated?",
      options: [
        "A. Lookup",
        "B. Master-detail",
        "C. Hierarchical",
        "D. Roll-up summary",
      ],
      answer: "B",
      title: "Question 80",
      explanation: "",
    },
    {
      content:
        "To set the default level of access for users to be able to access each other's records, you would use:\nSelect one:",
      options: [
        "A. Sharing Rules.",
        "B. The Role Hierarchy.",
        "C. Territory Management",
        "D. Organization Wide Defaults.",
      ],
      answer: "D",
      title: "Question 81",
      explanation: "",
    },
    {
      content:
        "Universal Containers needs to use a different pricebook for sales representatives in each of the US, LATAM, EMEA, and APAC regions. What should the system administrator do?",
      options: [
        "A. Create a separate pricebook for each region.",
        "B. Add a different list price for products depending on the region.",
        "C. Clone the standard pricebook and create separate pricebooks for each region.",
      ],
      answer: "C",
      title: "Question 82",
      explanation: "",
    },
    {
      content:
        "Both a sharing rule and an account team give Jose access to the Dixon Chemical account. The sharing rule gives him read access, and the account team gives him read/write access. Will Jose be able to edit the Dixon Chemical account?",
      options: ["A. Yes", "B. No"],
      answer: "A",
      title: "Question 83",
      explanation: "",
    },
    {
      content:
        "Universal Containers has a workflow rule that sends and email alert to the VP of Sales when a large deal is won. The VP is reporting that these emails are not being delivered.Which two tools should be used to determine the problem?",
      options: [
        "A. Debug logo",
        "B. Email log",
        "C. System audit trail",
        "D. Workflow monitor",
      ],
      answer: "A,B",
      title: "Question 84",
      explanation: "",
    },
    {
      content:
        "Salesforce Knowledge offers administrators the ability to fully customize the way an article type displays to an end user.",
      options: ["A. False", "B. True"],
      answer: "B",
      title: "Question 85",
      explanation: "",
    },
    {
      content:
        "James, a recruiting manager needs a picklist field implemented on the Position object done by the end of the week. Matt, the system administrator was too busy to fulfill the requirement.\nWhat should Matt do, to prevent this from happening again?",
      options: [
        "A. Delegate James as a delegated administrator for the Position Object",
        "B. Delegate James as a delegated administrator for the Recruiting App",
        "C. Changed OWD for the Position Object to Public Read/Write.",
        'D. Assign James with the "Modify All Data" permission set',
      ],
      answer: "A",
      title: "Question 86",
      explanation: "",
    },
    {
      content:
        'When an Opportunity reaches a certain value new fields need to be displayed to collect more "high profile" information. How can this be automated inside of Salesforce?',
      options: [
        "A. Create a page layout & workflow rule with a field update",
        "B. Create a page layout, record type & workflow rule with a field update.",
        "C. Create a page layout, record type & Apex trigger",
        "D. Create a page layout & Apex Trigger",
      ],
      answer: "B",
      title: "Question 87",
      explanation: "",
    },
    {
      content:
        "How is Salesforce Knowledge enabled for users that need access to article management?",
      options: [
        "A. Use the Knowledge checkbox on a user record to enable the feature license",
        "B. Add users that need access to Knowledge inside the App",
        "C. Use the Knowledge checkbox on a profile to enable to feature license",
        "D. Contact Salesforce Support",
      ],
      answer: "A",
      title: "Question 88",
      explanation: "",
    },
    {
      content:
        'Which three actions can occur when an administrators clicks "save" after making a number of changes to Knowledge data categories in a category group and changing their position in the hierarchy? Choose three.',
      options: [
        "A. The history of article usage is reset to zero utilization",
        "B. The articles and questions visible to users change",
        "C. The contents of category drop-down menu change",
        "D. Users may temporarily experience performance issues when searching for articles",
        "E. Users are temporarily locked out of the ability to access articles",
      ],
      answer: "A,B,E",
      title: "Question 89",
      explanation: "",
    },
    {
      content:
        "The administrator at Universal Containers wants to improve data quality by ensuring that all accounts have a Billing State/Province based upon the Billing Postal Code for that account. How can this be achieved? Choose 2 answers",
      options: [
        "A. Use a trigger that populates Billing State/Province based on a custom object that maps postal codes to states/provinces",
        "B. Use validation rule to do a VLOOKUP of the Billing Postal Code to a custom object that maps postal codes to states/provinces",
        "C. Use validation rule to do an HLOOKUP of the Billing Postal Code to a custom object that maps postal codes to states/provinces",
        "D. Use a workflow that populates Billing State/Province based on a custom object that maps postal codes to states/provinces",
      ],
      answer: "B,D",
      title: "Question 90",
      explanation: "",
    },
    {
      content:
        "Which text formula is correct to assign a value based on a custom lead field?",
      options: [
        'A. CASE( Lead_Score__c , 10, "Cold", 20, "Warm", 30, Hot)',
        "B. CASE( Lead_Score__c , 10, Cold, 20, Warm, 30, Hot)",
        'C. CASE( Lead_Score__c 10, "Cold", 20, "Warm", 30, Hot, "Null")',
        'D. CASE( Lead_Score__c , "10", Cold, "20", Warm, " 30", Hot, Null)',
      ],
      answer: "C",
      title: "Question 91",
      explanation: "",
    },
    {
      content:
        "On a monthly basis, an administrator would like to pull data related to service contracts from Salesforce to store elsewhere. Which two ways can an administrator accomplish this?Choose 2 answers",
      options: [
        'A. Configure the "Schedule Export" options under Data Export',
        "B. Use Data Loader to export the data each month.",
        'C. Use the "Object Export" feature under Data Management',
        "D. Use Data Exporter to export the data each month.",
      ],
      answer: "A,B",
      title: "Question 92",
      explanation: "",
    },
    {
      content:
        "Universal Containers categorizes its accounts with one of two status values - Prospect or Customer. The administrator wants to automatically change the value from Prospect to Customer when an opportunity is won. Which two actions should the administrator take to accomplish this? Choose 2 answers",
      options: [
        "A. Create an opportunity workflow rule that updates the Account Status field.",
        "B. Use an Apex trigger to update the Account Status field.",
        "C. Use Visualforce to update the Account Status field.",
        "D. Create an account workflow rule that updates the Account Status field.",
      ],
      answer: "A,B",
      title: "Question 93",
      explanation: "",
    },
    {
      content:
        "A user has asked the Administrator at SFB Industries if they should have access to the salary field on the user object they should not. The Administrator has checked their profile and they do not have access to this field on field level security. Where else should they check?",
      options: [
        "A. Permission Sets",
        "B. Sharing Rules",
        "C. Profile Object settings",
        "D. Org--wide defaults",
      ],
      answer: "A",
      title: "Question 94",
      explanation: "",
    },
    {
      content:
        "Universal Containers has four sales region: North America, APAC, EMEA, and LATAM. Each sales region is led by a VP of sales. Each of the VPs wants to have a dashboard emailed to them every IT Monday morning that contains components with only the data for their region. How can an administrator meet this requirement?",
      options: [
        "A. Create one dashboard that includes a filter for each region, scheduled to be delivered on Monday mornings",
        "B. Create a separate dashboard with data specific to each sales VP, scheduled to be delivered on Monday mornings",
        "C. Create a reporting snapshot and check the dashboard option, scheduled to be delivered on Monday mornings",
        "D. Create one dashboard using Visualforce to create a filter, scheduled to be delivered on Monday mornings",
      ],
      answer: "A",
      title: "Question 95",
      explanation: "",
    },
    {
      content:
        "Users report that the industry picklist field is no longer visible on account records. What test can an administrator use to troubleshoot the issue?",
      options: [
        "A. Setup audit trail",
        "B. Debug log",
        "C. Field history tracking",
        "D. Field audit history",
      ],
      answer: "A",
      title: "Question 96",
      explanation: "",
    },
    {
      content:
        "Which value rolls up for both customizable and collaborative forecasting?",
      options: [
        "A. Quota",
        "B. Opportunity amount",
        "C. Amount",
        "D. Expected revenue",
      ],
      answer: "B",
      title: "Question 97",
      explanation: "",
    },
    {
      content:
        "Product is payed for once, but receive product in increments (1)",
      options: [
        "A. create revenue schedules",
        "B. set up default quantity schedules",
        "C. set up default revenue schedules",
        "D. create quantity schedules",
      ],
      answer: "D",
      title: "Question 98",
      explanation: "",
    },
    {
      content: "What is a capability of territory management?",
      options: [
        "A. Accounts can be assigned to one or more territories.",
        "B. Territory hierarchy grants access to accounts.",
        "C. Users can only be assigned to one territory.",
        "D. Role hierarchy and sharing rules are ignored.",
      ],
      answer: "A,B",
      title: "Question 99",
      explanation: "",
    },
    {
      content:
        "What are three characteristics of Dynamic Dashboards? (Select 3)",
      options: [
        "A. Dynamic Dashboards can display the data of a set running user",
        "B. Authorised users can change the running user of a Dynamic Dashboard",
        "C. Dynamic Dashboards can display the data of the logged-in user",
        "D. Dynamic Dashboards can be viewed by anyone",
      ],
      answer: "A,B,C",
      title: "Question 100",
      explanation: "",
    },
    {
      content: "Which three are capabilities of Collaborative Forecasting?",
      options: [
        "A. Overlay quota",
        "B. Add categories",
        "C. Select a default forecast currency setting",
        "D. Forecast using opportunity splits",
        "E. Rename categories",
      ],
      answer: "C,D,E",
      title: "Question 101",
      explanation: "",
    },
    {
      content:
        "What do you need to configure on a profile to allow it to find duplicate records?",
      options: ["A. Delete", "B. View All", "C. Read and Edit", "D. Merge"],
      answer: "B",
      title: "Question 102",
      explanation: "",
    },
    {
      content:
        'A system administrator has unchecked the setting "Enable Content Pack Creation". What can users do with content packs? Choose 1.',
      options: [
        "A. Modify existing content packs.",
        "B. hindi ko alam",
        "C. Edit description and title of existing content packs",
        "D. All content Packs will be deleted.",
      ],
      answer: "C",
      title: "Question 103",
      explanation: "",
    },
    {
      content:
        "Universal Containers support team needs to track service level agreements for customers.\nToday, they manually look up contacts by name when a customer calls. How can the administrator automate this process?",
      options: [
        "A. Configure a workflow rule that sends and email alert of old cases to the support manager.",
        "B. Create a private Chatter group for customers with high-priority service level agreements.",
        "C. Enable entitlements and add the tab for entitlements and service contracts.",
        "D. Enable Case Feed and add a Contracts custom publisher to the Case Feed layout.",
      ],
      answer: "C",
      title: "Question 104",
      explanation: "",
    },
    {
      content:
        "How can you as a System Administrator enforce standardization of tags in libraries to prevent duplicate tags? Choose 2",
      options: [
        "A. Customize tags with contributor upon library creation",
        "B. Enable workflow to send email alert for unnamed tags",
        "C. Enable restrictive tagging",
        "D. Change Tagging Field to multiselect picklist",
      ],
      answer: "A,C",
      title: "Question 105",
      explanation: "",
    },
    {
      content:
        "Which Visual Workflows element would you use to prompt a phone rep to wrap up a crossselling function and end the call with a customer?",
      options: ["A. Step", "B. Assignment", "C. Screen", "D. Decision"],
      answer: "C",
      title: "Question 106",
      explanation: "",
    },
  ],
});
