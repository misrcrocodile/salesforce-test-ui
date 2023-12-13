window.testContent = window.testContent || [];
var testId = "Salesforce.Platform-App-Builder";
var testName = "Salesforce.Platform-App-Builder";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "Salesforce.Platform-App-Builder.v2019-10-25.q63",
  content: [
    {
      content:
        "Universal containers is importing 1000 records into Salesforce. They want to avoid any duplicate records from being created during the import. How can these requirements be met?",
      options: [
        "A. After importing all of the custom objects, run a duplicate check report, export the record to a CSV File, and run a mass delete to purge any duplicates.",
        "B. Include a column in the import file that has either record names, Salesforce IDs, or external IDs that can be used to match records.",
        "C. After importing all of the custom objects, review all records created and manually merge or delete and duplicate record",
        'D. When importing the file, select the "Prevent Duplicates" option on the last step of the Import Wizard and import the file.',
      ],
      answer: "B",
      title: "Question 1",
      explanation: "",
    },
    {
      content:
        "An app builder has created a report for sales people to view records from the custom object, some users have complained that they are unable to see all of the appropriate records. What steps should be taken to ensure data visibility within the report? Choose 3 Answers",
      options: [
        "A. Check reports filter",
        "B. Check the user's profile for object settings.",
        "C. Check the report folder sharing settings",
        "D. Check organization-wide defaults",
        "E. Check Sharing rules",
      ],
      answer: "B,D,E",
      title: "Question 2",
      explanation: "",
    },
    {
      content:
        "Sales representatives want to capture custom Feedback record details related to each Account. The sales reps want to accomplish this with minimal clicks on the Salesforce1 mobile application. What is the recommended solution to meet this requirement? Choose 2 answers.",
      options: [
        "A. Create a global action on Account.",
        "B. Create an object-specific action on Account",
        "C. Create predefined values for most of the fields.",
        "D. Create a feedback object as a parent of Account",
      ],
      answer: "B,C",
      title: "Question 3",
      explanation: "",
    },
    {
      content: "What is the capability of schema Builder? Choose 2 Answers",
      options: [
        "A. Creating a new record type",
        "B. Editing custom settings",
        "C. Viewing page layout in a new window",
        "D. Showing selected objects on the page.",
      ],
      answer: "C,D",
      title: "Question 4",
      explanation: "",
    },
    {
      content:
        "An app builder would like to streamline the user experience by reflecting summarized calculations of specific fields on various objects. Which field types could be used in roll-up summary fields to accomplish this?\nChoose 3 answers",
      options: [
        "A. Date",
        "B. Checkbox",
        "C. Currency",
        "D. Time",
        "E. Percent",
      ],
      answer: "A,C,E",
      title: "Question 5",
      explanation: "",
    },
    {
      content:
        "Universal Containers has purchased a Lightning Component on the AppExchange. Where can that component be utilized. Choose 2 answers",
      options: [
        "A. Salesforce1 Mobile App",
        "B. Visual Workflow",
        "C. Standalone Lightning App",
        "D. Lightning Process Builder",
      ],
      answer: "A,C",
      title: "Question 6",
      explanation: "",
    },
    {
      content:
        "What metadata can be made manually in production without deployment? (Choose 2)",
      options: [
        "A. Apex class",
        "B. Reports and Dashboards",
        "C. Apex trigger",
        "D. Visualforce",
      ],
      answer: "B,D",
      title: "Question 7",
      explanation: "",
    },
    {
      content:
        "The CRM Manager at Universal Containers has requested that a custom text field be converted to a picklist in order to promote better data hygiene. What needs to be considered before changing the field type? Choose 2 answers",
      options: [
        "A. Field references will be removed in Visualforce pages",
        "B. Changing a field type will remove existing field history.",
        "C. All data should be backed up before converting a text field.",
        "D. Existing list views that reference the field may be deleted.",
      ],
      answer: "C,D",
      title: "Question 8",
      explanation: "",
    },
    {
      content:
        "Universal Containers is using a custom app to record performance review info for their employees. The performance review should be visible to the employee and the employee's manager, as well as the HR director.\nHow can this be configured? Choose 1 answer.",
      options: [
        "A. Use manager sharing to enable sharing with the employee's manager and HR director",
        "B. Set the org wide default for Performance Review to private and use grant access using hierarchies to give visibility to the employee's manager and HR director",
        "C. Set the org wide default for Performance Review to private and add a criteria based sharing rule to share performance review records with a public group that includes the employee managers and HR director",
        "D. Set the org wide default for Performance Review to private, do not use grant access using hierarchies and use manual sharing for the employee manager and HR director",
      ],
      answer: "D",
      title: "Question 9",
      explanation: "",
    },
    {
      content: "What is a use case for approval processes? Choose 2 answers.",
      options: [
        "A. Approve expense reports automatically when less than $50.",
        "B. Ensure an opportunity that has at least one product added.",
        "C. Update the PTO record field with the user's manager.",
        "D. Require the CFO to review the salary range for all job offers.",
      ],
      answer: "A,D",
      title: "Question 10",
      explanation: "",
    },
    {
      content:
        "Universal Containers is rolling out a new customer service process. Customer service managers will need to edit cases for their subordinates, but not cases for other groups. Managers and users should be able to view all cases. What is the recommended solution to configure this? Choose 2 answers",
      options: [
        "A. Create standard role hierarchies",
        "B. Create criteria-based sharing rules.",
        "C. Set organization-wide sharing defaults to public read/only.",
        "D. Set organization-wide sharing defaults to private.",
      ],
      answer: "A,C",
      title: "Question 11",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants to standardize their business logic. They want to ensure that the workflow order is guaranteed to be the same each time. Which feature can be used to accomplish this? Choose 2 answers.",
      options: [
        "A. Visual Workflow",
        "B. Lightning Process Builder",
        "C. Workflow",
        "D. Chatter Actions",
      ],
      answer: "A,B",
      title: "Question 12",
      explanation: "",
    },
    {
      content:
        "Which use case can be accomplished using a custom link?(Select 3)",
      options: [
        "A. To create a custom visual flow",
        "B. To create a record page",
        "C. To a process to update current record",
        "D. To external system using data of salesforce",
        "E. Navigate to Apex trigger",
      ],
      answer: "B,C,D",
      title: "Question 13",
      explanation: "",
    },
    {
      content:
        "UC has a requirement that an opportunity should have a field showing the value of its associated account's billing state. This value should not change after the opportunity has been created. Is there a recommended solution to configure this automated behavior?",
      options: [
        "A. Apex",
        "B. Roll-up summary field",
        "C. Formula field",
        "D. Workflow",
      ],
      answer: "D",
      title: "Question 14",
      explanation: "",
    },
    {
      content:
        "Which opportunity standard field is available tobe configured directly? Choose3",
      options: [
        "A. Lead source",
        "B. Type",
        "C. Stage",
        "D. Forecast category",
      ],
      answer: "A,B,C",
      title: "Question 15",
      explanation: "",
    },
    {
      content: "Where can a custom button be placed? Choose 3 answers",
      options: [
        "A. On the Custom List View",
        "B. On a Person Account",
        "C. On a related list",
        "D. On a Web-to-Case form",
        "E. On the User Object",
      ],
      answer: "A,B,C",
      title: "Question 16",
      explanation: "",
    },
    {
      content:
        "Which statements are true regarding Roll-Up Summary fields? (select all thatapply)",
      options: [
        "A. Validation errors can display when saving either the detail or master record.",
        "B. Advanced currency management has no affect on roll-up summary fields.",
        "C. Because roll-up summary fields are not displayed on edit pages, you can use them in validation rules.",
        "D. Once created, you cannot change the detail object selected or delete any field referenced in your roll-up summary definition.",
      ],
      answer: "A,C,D",
      title: "Question 17",
      explanation: "",
    },
    {
      content:
        "UVC has two types of customer support processes: Platinum and Diamond. The App Builder created separate record types for each process on the Case Object. The customer support team should not be able to create new cases with the Diamond record type.How can this requirement be met?",
      options: [
        "A. Update the OWD to private",
        "B. Remove the ability for the support team to create new case records",
        "C. Make the record type hidden to all users and then use sharing rules to share it",
        "D. Update the profile to remove the Diamond record type from the support team",
      ],
      answer: "D",
      title: "Question 18",
      explanation: "",
    },
    {
      content:
        "The organization-wide default for a custom object is set to private. The superior profile grants view access to the same object. A user with the superior profile is also listed as the manager on the user detail record for a subordinate. However, the superior still cannot view records owned by the subordinate.\nWhat is preventing the superior from viewing records owned by the subordinate? Choose 2 answers",
      options: [
        "A. The superiors' role is not above the subordinate's role in the hierarchy.",
        "B. The superior requires permission set in order to view the subordinate's records.",
        "C. Organization-wide settings for the custom object grant access to other user with the same role.",
        "D. Organization-wide settings for the custom object do not grant access using hierarchy.",
      ],
      answer: "A,D",
      title: "Question 19",
      explanation: "",
    },
    {
      content:
        "What is true regarding the user interface for external object data? Choose 1 answer.",
      options: [
        "A. External object data can be accessed via custom tabs",
        "B. External object data can be accessed via lists views",
        "C. All of the above",
        "D. Chatter Feeds can be enabled on external object pages",
        "E. External object data can be accessed via detail pages",
      ],
      answer: "C",
      title: "Question 20",
      explanation: "",
    },
    {
      content: "Which object can be member of a campaign? (Choose 2)",
      options: ["A. Lead", "B. Opportunity", "C. Contact", "D. Account"],
      answer: "A,C",
      title: "Question 21",
      explanation: "",
    },
    {
      content:
        "When configuring a record type, an App Builder can configure the available value of a picklist field for the page layout. Which opportunity standard field is available to be configured directly in the Opportunity record type? Choose 2 answers",
      options: [
        "A. Lead Source",
        "B. Stage",
        "C. Type",
        "D. Forecast Category",
      ],
      answer: "A,C",
      title: "Question 22",
      explanation: "",
    },
    {
      content:
        "Universal container needs to update a field on an account when an opportunity stage is changed to close lost.\nWhat can be used to accomplish this requirement? Choose 2",
      options: [
        "A. Lightning Process Builder",
        "B. Assignment Rules",
        "C. Workflow Rule",
        "D. Approval Process",
      ],
      answer: "A,C",
      title: "Question 23",
      explanation: "",
    },
    {
      content:
        "A customer service representative at a call center would like to be able to collect information from customers using a series of question prompts. What could be used to accomplish this?",
      options: [
        "A. Workflow Rules",
        "B. Visual workflow",
        "C. Lightning Connect",
        "D. Lightning process builder",
      ],
      answer: "B",
      title: "Question 24",
      explanation: "",
    },
    {
      content:
        "Which statement is true about field update actions from workflow rules and approval processes? Choose 2 answers",
      options: [
        "A. Field updates are tracked in the history related list of a record regardless of whether or not History tracking is set for those fields.",
        'B. Field update with "re-evaluate workflow rules" selected can cause a recursive loop if the updated field is included in a workflow.',
        "C. Field updates to records based on workflow rules and approval processes do not trigger validation rules",
        "D. Field update are not available on currency field if the organization uses multi-currency.",
      ],
      answer: "B,C",
      title: "Question 25",
      explanation: "",
    },
    {
      content:
        "UVC wants to show different picklist values to different groups of users in a custom picklist field. What should be configured?",
      options: [
        "A. Page Layout",
        "B. Field-level security",
        "C. Record Types",
        "D. Permission sets",
      ],
      answer: "C",
      title: "Question 26",
      explanation: "",
    },
    {
      content:
        "Actions on a Lightning Page allow you to do which of the following?",
      options: [
        "A. Send email and delete or clone records.",
        "B. Clone records, add users, and assign permissions.",
        "C. Send email, create a task, and create or update records.",
        "D. Send email, send outbound messages, and launch a flow.",
      ],
      answer: "C",
      title: "Question 27",
      explanation: "",
    },
    {
      content:
        "The VP of Marketing wants to broadcast an email to 10,000 contacts in Salesforce on a regular basis, but realizes Salesforce's mass email functionality has a limitation on the number of emails that can be sent each day.",
      options: [
        "A. Download all contacts to a CSV file and use an email client to send the mails",
        "B. Develop Apex code and Visualforce pages to send the emails.",
        "C. Research and evaluate products available on AppExchange to send mass emails",
        "D. Request Salesforce increase the number of maximum daily mails.",
      ],
      answer: "C",
      title: "Question 28",
      explanation: "",
    },
    {
      content:
        "A manager wants to calculate the number of days since an account was last contacted through email. Which field type should be used to accomplish this?",
      options: ["A. Roll-up Summary", "B. Formula", "C. Number", "D. Date"],
      answer: "B",
      title: "Question 29",
      explanation: "",
    },
    {
      content:
        "Universal Containers manages internal projects by department using a customobject called projects. Only employees in the project's respective departmentshould have view access to all of the department's project records. If an employeechanges job roles and moves to another department, the employee should nolonger have access to the projects within their former department. How can theserequirements be met assuming the organization wide default for projects is set to private? (Choose 2)",
      options: [
        "A. Create a criteria-based sharing rule using the project's department that grants access to users by roles.",
        "B. Create a criteria-based sharing rule using the project's department that grants access to users by public groups.",
        "C. Create a criteria-based sharing rule using the project's department that grants access to users by profiles.",
        "D. Create a criteria-based sharing rule using the project's department that grants access to users by permission sets.",
      ],
      answer: "A,B",
      title: "Question 30",
      explanation: "",
    },
    {
      content:
        "Universal container sales reps can modify fields on an opportunity until it isclosed. Only the sales operations team can modify the post close follow up date andpost close followup comments fields. How to make this happen?",
      options: [
        "A. Use field-level security on page layouts to restrict editing fields",
        "B. Use field-level security to mark fields as read-only on the sales profile",
        "C. Use multiple record types, page layouts, and profiles",
        "D. Use record types with field sets and restrict editing fields using field-level security",
      ],
      answer: "C",
      title: "Question 31",
      explanation: "",
    },
    {
      content:
        "A custom field contains a feedback score which is on a scale of one to five. End users would like a visual indicator of one to five stars based on the number found in the feedback score custom field. How can this visual indicator be displayed?",
      options: [
        "A. Use a custom text field",
        "B. Use a custom formula field.",
        "C. Use a custom image field.",
        "D. Use a custom number field.",
      ],
      answer: "B",
      title: "Question 32",
      explanation: "",
    },
    {
      content:
        "Universal Containers needs to update a field on an Account when anOpportunity Stage is changed to Closed Lost. What tools can we use to accomplishthis requirement? (Choose 2)",
      options: [
        "A. Assignment Rule",
        "B. Workflow Rule",
        "C. Lightning Process Builder",
        "D. Approval Process",
      ],
      answer: "B,C",
      title: "Question 33",
      explanation: "",
    },
    {
      content:
        "Universal container has a custom object for shipping information. They have to ship to both businesses and consumers. They need to show additional values in the custom field called insurance type for business shipping records. How can this be set up?",
      options: [
        "A. Create multiple picklist fields on the object",
        "B. Create a multi-select pick-list field.",
        "C. Use Record type with single page layout.",
        "D. Use record types with multiple page layout",
      ],
      answer: "B",
      title: "Question 34",
      explanation: "",
    },
    {
      content:
        "A divisional manager wants to add a chart into a page layout Which report format can be used as the source report to accomplish this? Choose 2 answers.",
      options: [
        "A. Joined format with a chart.",
        "B. Tabular format with a chart.",
        "C. Matrix format with a chart.",
        "D. Summary format with a chart.",
      ],
      answer: "C,D",
      title: "Question 35",
      explanation: "",
    },
    {
      content: "Which type of field cannot be universally required?",
      options: ["A. Summary", "B. Lookup", "C. Email", "D. Text"],
      answer: "A,B",
      title: "Question 36",
      explanation: "",
    },
    {
      content:
        "Universal Containers uses a custom object to track open job positions. They would like to automatically post updates on a record's feed whenever a position stage is changed.",
      options: [
        "A. Feed tracking",
        "B. Feed Quick Action",
        "C. Auto-response rule",
        "D. Workflow rule",
      ],
      answer: "A",
      title: "Question 37",
      explanation: "",
    },
    {
      content: "Which sandbox type allows for the use of a sandbox template?",
      options: [
        "A. Developer Pro Sandbox",
        "B. Partial Sandbox",
        "C. Developer Sandbox",
        "D. Config Sandbox",
      ],
      answer: "B",
      title: "Question 38",
      explanation: "",
    },
    {
      content:
        'Universal Containers would like to collaborate with its customers within Salesforce, and has decided to enable the "Allow Customer Invitations" Chatter setting. What permission is granted to Customers when invited to Chatter Group?',
      options: [
        "A. The ability to request access to public groups",
        "B. The ability to invite members to groups of which they are a member",
        "C. The ability to interact with members of their groups",
        "D. The ability to @mention accounts of which they are a contact.",
      ],
      answer: "C",
      title: "Question 39",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants to streamline its data capture process by linking fields together. They wish to do this so that the available value on dependents fields are driven by value selected on controlling fields. Which consideration supports the stated requirements? Choose 3 answers",
      options: [
        "A. Checkbox fields can be controlling fields but not dependent fields",
        "B. Standard and custom picklist fields can be dependent fields.",
        "C. Custom picklist field can be either controlling or dependent field",
        "D. Multi select picklist can be dependent picklist but not controlling fields",
        "E. The import wizard only allows value to be imported into a dependent picklist if they match the appropriate controlling field",
      ],
      answer: "A,C,D",
      title: "Question 40",
      explanation: "",
    },
    {
      content:
        "The marketing team at UVC has a list of 400 leads it wants to upload to Salesforce. The team need to avoid creating duplicate records. Which two actions should be taken to meet this requirement? Choose 2 answers",
      options: [
        "A. Utilize a Lead Matching Rule and corresponding Duplicate Rule to block newly created duplicate leads.",
        "B. Use Data Loader's update function to import lead and match to existing records based on e-mail address.",
        "C. Upload the lead list using the import wizard and select a Matching type to prevent duplicate lead creation.",
        "D. Enable Duplicate Matching in the Data Management section in Setup and activate the Lead-to_Lead scenario.",
      ],
      answer: "A,C",
      title: "Question 41",
      explanation: "",
    },
    {
      content:
        "Universal Containers would like to embed a chart of all related Opportunities, by stage, on the Account detail page. Which type of report should the App Builder create to add to the Account page layout?",
      options: [
        "A. A tabular report on the Account object.",
        "B. A tabular report on the Opportunity object.",
        "C. A summary report on the Account object.",
        "D. A summary report on the Opportunity object.",
      ],
      answer: "D",
      title: "Question 42",
      explanation: "",
    },
    {
      content:
        "UVC uses a custom object called Candidates to track information about people who are being recruited for jobs within the company. When an employee refers a recruiting candidate, that employee should have access to the Candidate record, however, only HR users should be able to view, edit, and report on the Salary field.\nWhich action should be recommended for controlling who can view the Salary field?",
      options: [
        'A. Restrict access to the "Salary" field for general employee users using field-level security',
        "B. Create and assign separate Candidate record types for general employee users and HR users",
        "C. Create and assign separate Candidate page layouts for general employee users and HR users",
        'D. Restrict access to the "Salary" field for general employee users using custom sharing settings',
      ],
      answer: "A",
      title: "Question 43",
      explanation: "",
    },
    {
      content:
        'A custom object named assignment has a private sharing setting that grantsaccess using hierarchies. The organization has a role hierarchy where the"Specialist" role reports to a "Manager" role which reports to a\n"Director" role. TheDirector role is at the top of the role hierarchy. A user who is in the manager rolecreate a new assignment record. Who can see this record?',
      options: [
        "A. The record owner and the specialists in their hierarchy.",
        "B. The record owner and the managers in their hierarchy.",
        "C. The record owner and the directors in their Hierarchy.",
        "D. The record owner and those above the specialist role in their hierarchy.",
      ],
      answer: "C",
      title: "Question 44",
      explanation: "",
    },
    {
      content:
        "Universal Con conducts evaluations of their sales reps using a custom objectconsisting of numerical scores and executive comments. The company wants toensure that only the sales reps, their managers,and their managers' executives canview the rep's evaluation record, but the reps should not be able to view theexecutive comment field on their review.",
      options: [
        "A. Use a private sharing model granting access using customer settings, managefield access with page layouts and field-level security",
        "B. Using custom settings, manage field access with record types and pagelayouts",
        "C. Use a private sharing model granting record across using hierarchy, managefield access with record types and field-level security",
        "D. Hierarchy, manage field access with field-level security",
      ],
      answer: "D",
      title: "Question 45",
      explanation: "",
    },
    {
      content:
        "At Universal Containers, the Account object has a Master-Detail relationship with an Invoice custom object.\nThe App Builder would like to change to a lookup field, but is not able to do so. What could be causing this?",
      options: [
        "A. The invoice must have at least one Master-Detail field for reporting.",
        "B. The Account record includes Invoice roll-up summary fields.",
        "C. The Account is included in the workflow on the Invoice object.",
        "D. The Invoice records have existing values in the Account.",
      ],
      answer: "B",
      title: "Question 46",
      explanation: "",
    },
    {
      content:
        "An app builder wants to show groups as the last navigation menu item in the salesforce1 mobile app. however, the app builder is not able to select groups as one of the items on the drop-down menu. What could cause this?",
      options: [
        "A. Groups is not included in the selecteCreate a criteria based sharing rule using the projects department that grd list for the navigation menu",
        "B. Groups cannot be the last item in the navigation menu.",
        "C. Groups is included in the smart search items but not on the navigation menu",
        "D. Groups is showing up in the recent section and not in the navigation menu",
      ],
      answer: "A",
      title: "Question 47",
      explanation: "",
    },
    {
      content:
        "What is a true statement in regards to managing access to reports and dashboards? Choose 2 answers",
      options: [
        'A. Users with the "Manage Public Reports" permission can organize reports by creating custom report folders and sending invitations to users to access them.',
        "B. Users that want to grant access to personal folders can manually share a personal folder with a user or public group.",
        "C. Users must have certain permissions to access public, hidden, or shared folder.",
        'D. Users with the "Manage Public Reports" and "Create and Customize Reports" permissions can create custom reports that all users can view.',
      ],
      answer: "A,D",
      title: "Question 48",
      explanation: "",
    },
    {
      content: "What can be branded in SF1?(Select 3)",
      options: [
        "A. Loading logo",
        "B. Action tab bar",
        "C. Loading page color",
        "D. Header and Search",
      ],
      answer: "A,C,D",
      title: "Question 49",
      explanation: "",
    },
    {
      content:
        "A Customer Support Manager at Universal Containers would like to implement call scripting for their caller agents. What automation tool can be used to accomplish this?",
      options: [
        "A. Lightning Process Builder",
        "B. Lightning Connect",
        "C. Workflow",
        "D. Visual Workflow",
      ],
      answer: "D",
      title: "Question 50",
      explanation: "",
    },
    {
      content:
        "What is a true statement regarding master-detail relationships? Choose 3 answers",
      options: [
        "A. Master-detail relationships cannot be converted to a look-up relationship",
        "B. Standard objects can be on the detail side of a custom object in a master-details relationship",
        "C. Deleting a master record in a master-detail relationship deletes all related detail records",
        "D. A master-detail relationship cannot be created if the custom object on the detail side already contains data",
        "E. Master-detail relationship can be convert to a lookup relationship if no roll-up summary fields exist on the master object",
      ],
      answer: "C,D,E",
      title: "Question 51",
      explanation: "",
    },
    {
      content: "What is the capability of a schema builder? Choose 2 answers",
      options: [
        "A. To update description of standard and custom objects.",
        "B. To modify custom field help text on standard objects",
        "C. To enable field history tracking on standard objects.",
        "D. To create new look-up or master-detail object relationship",
      ],
      answer: "B,D",
      title: "Question 52",
      explanation: "",
    },
    {
      content:
        "A sales manager would like to look at an account record and view charts of all of the related open opportunities. Closed/won opportunities, and open cases. How many report charts can be added to the account page layout to meet this requirement?",
      options: ["A. 1", "B. 2", "C. 3", "D. 4"],
      answer: "B",
      title: "Question 53",
      explanation: "",
    },
    {
      content:
        "The VP of sales requested that Account Site Information should be visible on an Opportunity record. What is the recommended salutation to meet this requirement?",
      options: [
        "A. Process Builder",
        "B. Workflow Rule",
        "C. Cross-Object Formula Field",
        "D. Roll-Up Summary Field",
      ],
      answer: "C",
      title: "Question 54",
      explanation: "",
    },
    {
      content:
        "Universal Insurance would like to highlight on a report claims that have been open for more than 30 days.\nWhat feature could be used for this? Choose 1 answer.",
      options: [
        "A. Bucket Highlighting",
        "B. Report Highlighting",
        "C. Field Highlighting",
        "D. Conditional Highlighting",
      ],
      answer: "D",
      title: "Question 55",
      explanation: "",
    },
    {
      content:
        "An App Builder at UVC would like to prevent users from creating new records on an Account related list by overriding standard buttons. Which two should the App Builder consider before overriding standard buttons?",
      options: [
        "A. Standard buttons that are not available for overrides can still be hidden on page layouts",
        "B. Standard buttons can be changed on lookup dialogs, list views, and search result layouts",
        "C. Standard buttons can be overridden, relocated on the detail page, and relabeled",
        "D. Standard buttons can be overridden with a Visualforce page",
      ],
      answer: "A",
      title: "Question 56",
      explanation: "",
    },
    {
      content:
        "At Universal Containers, the VP of Service has requested a visual indicator flag on each case, based on the case priority. High-priority cases should be flagged red, medium-priority should be flagged yellow, and low-priority cases should be flagged green. Which formula would accomplish this requirement? Choose 2 answers",
      options: [
        'A. IF(ISPICKVAL(Priority, "Low"), "img/samples/flag_green.gif", IF(ISPICKVAL(Priority, "Medium"),\n         "img/samples/flag_yellow.gif", IF(ISPICKVAL(Priority, "High"), "img/samples/flag_red.gif",\n         "/s.gif")))',
        'B. CASE( Priority, "Low", "img/samples/flag_green.gif", "Medium", "img/samples/flag_yellow.gif",\n         "High", "img/samples/flag_red.gif", "/s.gif")',
        'C. IMAGE(CASE( Priority, "Low", "img/samples/flag_green.gif", "Medium",\n         "img/samples/flag_yellow.gif", "High", "img/samples/flag_red.gif", "Priority Flag")',
        'D. IMAGE( IF(ISPICKVAL(Priority, "Low"), "img/samples/flag_green.gif", IF(ISPICKVAL(Priority,\n         "Medium"), "img/samples/flag_yellow.gif", IF(ISPICKVAL(Priority, "High"),\n         "img/samples/flag_red.gif"))), "Priority Flag")',
      ],
      answer: "C,D",
      title: "Question 57",
      explanation: "",
    },
    {
      content:
        "Which three Salesforce functionalities are ignored when process field updates in workflow rules and approval processes?",
      options: [
        "A. Validation Rules",
        "B. Field-Level Security",
        "C. Decimal places and character limits",
        "D. Multiple currencies",
        "E. Record type picklist value assignments",
      ],
      answer: "A,B,E",
      title: "Question 58",
      explanation: "",
    },
    {
      content:
        "What the true statement is in regards to converting a tabular, summary, or matrix report to a joined report?\nChoose 3 answers",
      options: [
        "A. Joined report blocks are formatted as matrix reports.",
        "B. Report formula fields are nor supported in Joined reports",
        "C. Cross filters are not supported in joined reports",
        "D. The rows to display filter is not supported in Joined reports",
        "E. Bucket fields are not supported in joined reports.",
      ],
      answer: "C,D,E",
      title: "Question 59",
      explanation: "",
    },
    {
      content:
        "UVC has created the custom objects Candidate and Interview in Salesforce to track candidates and interviews respectively. The company wants to track the total number of interviews a candidate has gone through on the candidate record without writing any code. Which two actions can an App Builder take to accomplish this requirement? Choose 2 answers",
      options: [
        "A. Use a roll-up summary field on the Candidate record to show the total number of interviews",
        "B. Use a MD relationship between the Candidate and Interview Objects",
        "C. Use a formula field on the Candidate record to show the total number of interviews",
        "D. Use a lookup relationship between the Candidate and Interview objects (Your Answer)",
      ],
      answer: "A,B",
      title: "Question 60",
      explanation: "",
    },
    {
      content:
        "Universal Containers has a junction object called Invoices with a primary Master-Detail relationship with Accounts and a secondary Master-Detail relationship with Contacts. The app builder has a requirement to change the primary Master-Detail relationship to Lookup. What happens to the Master-Detail relationship with Contacts?",
      options: [
        "A. The Contacts Master-Detail also converts to Lookup.",
        "B. The Contacts Master-Detail values are cleared from invoices.",
        "C. The Contacts Master-Detail field is deleted from the object",
        "D. The Contacts Master-Detail becomes the primary.",
      ],
      answer: "D",
      title: "Question 61",
      explanation: "",
    },
    {
      content:
        "To synchronize accounts, orders, and shipments in real time, a developer hasbuilt a custom interface between an external system and salesforce. Prior todeployment, the developer needs to confirm that the interface can sustain thesyncing of thousands of records at a time. Which sandbox environment isrecommended to complete performance and load testing?",
      options: [
        "A. Full sandbox",
        "B. Developer sandbox",
        "C. Partial sandbox",
        "D. Developer pro sandbox",
      ],
      answer: "A",
      title: "Question 62",
      explanation: "",
    },
    {
      content:
        "What is true when changing the following field types? (Choose 3)",
      options: [
        "A. Rollup summary fields will stop calculate if Master Detail is changed to lookup",
        "B. No data is lost when changing Picklist to Multipicklist",
        "C. Data can be lost when changing from Rich Text to Long Text",
        "D. No data is lost when converting Text to auto number",
        "E. Data is lost when changing Number to Currency",
      ],
      answer: "B,C,D",
      title: "Question 63",
      explanation: "",
    },
  ],
});
