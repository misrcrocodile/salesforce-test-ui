window.testContent = window.testContent || [];
var testId = "Salesforce.Platform-App-Builder";
var testName = "Salesforce.Platform-App-Builder";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "Salesforce.Platform-App-Builder.v2020-04-01.q60",
  content: [
    {
      content:
        "An App Builder at UVC would like to prevent users from creating new records on an Account related list by overriding standard buttons.\nWhich two should the App Builder consider before overriding standard buttons?",
      options: [
        "A. Standard buttons can be overridden, relocated on the detail page, and relabeled",
        "B. Standard buttons that are not available for overrides can still be hidden on page layouts",
        "C. Standard buttons can be changed on lookup dialogs, list views, and search result layouts",
        "D. Standard buttons can be overridden with a Visualforce page",
      ],
      answer: "B,D",
      title: "Question 1",
      explanation: "",
    },
    {
      content: "Which two rules can be configured for the Opportunity object?",
      options: [
        "A. Assignment Rule",
        "B. Escalation Rule",
        "C. Validation Rule",
        "D. Workflow Rule",
      ],
      answer: "C,D",
      title: "Question 2",
      explanation: "",
    },
    {
      content: "What is the capability of sandbox templates? Choose 2 answers",
      options: [
        "A. Specify the object whose data should be replicated in a Partial Copy sandbox environment.",
        "B. Create a Partial Copy sandbox from a Partial Copy sandboxes environment.",
        "C. Save a template for re-use when creating a Partial Copy sandbox environment.",
        "D. Specify the data range for data being replicated in a Partial Copy sandbox environment",
      ],
      answer: "A,C",
      title: "Question 3",
      explanation: "",
    },
    {
      content:
        "Universal containers wants to provide a different view for its users when they access an Account record in Salesforce1 instead of the standard web version. How can this be accomplished? Choose 2 answers",
      options: [
        "A. By adding quick actions in the publisher section.",
        "B. By adding a mobile layout and assigning it to a profile.",
        "C. By adding Visualforce page to the mobile cards section",
        "D. By adding actions in the Salesforce1 action bar section.",
      ],
      answer: "B,C",
      title: "Question 4",
      explanation: "",
    },
    {
      content:
        "Which statement is true about converting a lead? Choose 3 answers",
      options: [
        'A. The lead\'s most recent campaign record is automatically applied to the "PRIMARY campaign source" field on the opportunity',
        "B. The system automatically maps standard lead fields to standard account, contact, and opportunity fields.",
        "C. Users can convert leads that are associated with an active approval process.",
        "D. Multi-select picklist values on lead records overwrite values on the contact's corresponding field.",
        "E. Administrators may choose whether to enforce validation rules & triggers",
      ],
      answer: "A,B,E",
      title: "Question 5",
      explanation: "",
    },
    {
      content:
        "Universal Containers has a junction object called Invoices with a primary Master-Detail relationship with Accounts and a secondary Master-Detail relationship with Contacts. The app builder has a requirement to change the primary Master-Detail relationship to Lookup. What happens to the Master-Detail relationship with Contacts?",
      options: [
        "A. The Contacts Master-Detail field is deleted from the object",
        "B. The Contacts Master-Detail becomes the primary.",
        "C. The Contacts Master-Detail also converts to Lookup.",
        "D. The Contacts Master-Detail values are cleared from invoices.",
      ],
      answer: "B",
      title: "Question 6",
      explanation: "",
    },
    {
      content:
        "Universal con needs a field on the account to track how many opportunitiesare closing within the next 30 days.\nWhat can be used?",
      options: [
        "A. Process builder",
        "B. Apex code",
        "C. Workflow rule",
        "D. Roll-up summary field",
      ],
      answer: "B",
      title: "Question 7",
      explanation: "",
    },
    {
      content:
        "User at Universal Containers needs to be able to quickly create a contact record from the Account record's Chatter feed. How should the App Builder enable the functionality?",
      options: [
        'A. By creating a custom "Detail Page" Button on the Contract.',
        'B. By creating a custom "Create a Record" Action on the Account.',
        'C. By creating a custom "Create a Record" Action on the Contract',
        'D. By creating a custom "Detail Page" Button on the Account.',
      ],
      answer: "B",
      title: "Question 8",
      explanation: "",
    },
    {
      content:
        "UVC uses a custom object to track expense reports. They would like to automatically post updates in a record's feed whenever an expense report has been approved. Which social feature can be used to accomplish this?",
      options: [
        "A. Feed Quick Action",
        "B. Approval Process",
        "C. Auto-response rule",
        "D. Feed Tracking",
      ],
      answer: "D",
      title: "Question 9",
      explanation: "",
    },
    {
      content:
        "Which statement is true about an external id field? Choose 2 answers",
      options: [
        "A. The field can be unique based on case-sensitive or case-insensitive values.",
        "B. The field contains unique records identifiers from a system outside of salesforce",
        "C. The field must contain at least one number and at least one letter",
        "D. The field must be unique since duplicates are not allowed within salesforce",
      ],
      answer: "B,D",
      title: "Question 10",
      explanation: "",
    },
    {
      content:
        "The Training team at UVC uses a custom Training object to track their customer trainings. An App Builder needs to create a relationship between the Training object and the related Student's record. A private sharing model is in place for both Students and Training. Which two statements are true when creating a Student lookup field on the Training object? Choose 2 answers",
      options: [
        "A. Cross-object field updates between Training and Student records are not supported",
        "B. On Training record, users can only delete students, if they have access to it",
        "C. On Training record, the Student Lookup field can be made optional",
        "D. On Student Record, users can set up Roll-up summary fields on Training records",
      ],
      answer: "B,C",
      title: "Question 11",
      explanation: "",
    },
    {
      content: "How many charts can you embed into the account page layout?",
      options: ["A. 3", "B. 2", "C. 1", "D. 4"],
      answer: "B",
      title: "Question 12",
      explanation: "",
    },
    {
      content:
        "The VP of Sales at Universal Containers has requested that Sales reps be given access to view all Accounts in Salesforce. However, they've also requested that sales reps only be allowed to create new Opportunities on Accounts they own. How can this requirement be met?",
      options: [
        "A. Create a new Opportunity Quick Action that validates Account ownership.",
        "B. Set the Organization-Wide Defaults sharing on Opportunities to Private and recalculate sharing.",
        "C. Create an Opportunity Validation Rule that compares the Opportunity and Account Owners",
        "D. Set the Organization-Wide Defaults sharing on Opportunities to Controlled by Parent.",
      ],
      answer: "D",
      title: "Question 13",
      explanation: "",
    },
    {
      content:
        "An admin is trying to add a custom VF page to the mobile app quick navigation menu but can't. What might be the problem?",
      options: [
        "A. The menu configuration has not been set up correctly for the VF page",
        "B. A tab has not been created for the VF page",
        "C. The smart search is not enabled for the VF page",
        "D. The VF page references / fields that the user can't access",
      ],
      answer: "B",
      title: "Question 14",
      explanation: "",
    },
    {
      content:
        "What salesforce functionality is ignored when processing field updates in workflow rules and approval processes? Choose 3 answers",
      options: [
        "A. Multiple Currencies",
        "B. Validation Rules",
        "C. Decimal Places and Character Limits",
        "D. Field Level Security",
        "E. Record Type Picklist Value Assignments",
      ],
      answer: "B,D,E",
      title: "Question 15",
      explanation: "",
    },
    {
      content:
        "The VP of account management at Universal Containers has requested that all contacts mailing postal codes match the associated accounts shipping postal code. How can this be enforced using validation rules?",
      options: [
        "A. Create a validation rule using a not equal operator",
        "B. Create a validation rule using a compare operator",
        "C. Create a validation rule using the distance() function",
        "D. Create a validation rule using the geolocation() function",
      ],
      answer: "A",
      title: "Question 16",
      explanation: "",
    },
    {
      content:
        "At UVC, the Account object has a MD relationship with an Invoice custom object. The app builder would like to change this to a lookup field, but is not able to do so. What could be causing this?",
      options: [
        "A. The Account is included in the workflow on the Invoice Object",
        "B. The Invoice must have at least one MD field for reporting",
        "C. The Account record includes invoice roll-up summary fields",
        "D. The invoice records have existing values in the Account",
      ],
      answer: "C",
      title: "Question 17",
      explanation: "",
    },
    {
      content:
        "When a user creates an account report, the user does not see industry as an available field in the report builder.\nHowever, this same user is able to see in the account page layout. What scenario would cause this?",
      options: [
        "A. The user uses a custom report type which does not include the industry field",
        "B. The industry field is not enabled for the particular record type",
        "C. The industry field has no record values in the account.",
        "D. The user does not have industry field visibility in the field level security",
      ],
      answer: "C",
      title: "Question 18",
      explanation: "",
    },
    {
      content:
        "Invoices in SAP need to be reviewed from Salesforce Account object Home. (Select 2)",
      options: [
        "A. Data Loader",
        "B. O-DATA",
        "C. External object",
        "D. From SAP config",
      ],
      answer: "B,C",
      title: "Question 19",
      explanation: "",
    },
    {
      content:
        "Universal Containers would like to show different picklist values to different groups of user in a custom picklist field. What should be configured?",
      options: [
        "A. Permission sets",
        "B. Page Layouts",
        "C. Record Types",
        "D. Field-level security",
      ],
      answer: "C",
      title: "Question 20",
      explanation: "",
    },
    {
      content:
        "An App Builder is loading the data into salesforce. To link the new records back to the legacy system, a field will be used to track the legacy ID on the account object. For future data loads this ID will be used when upserting records. Which field attribute should be selected? Choose 2 answers",
      options: [
        "A. Required",
        "B. Text (encrypted)",
        "C. Unique",
        "D. External ID",
      ],
      answer: "C,D",
      title: "Question 21",
      explanation: "",
    },
    {
      content:
        "A junction object has two Master-Detail relationships. What happens to a junction object record when either associated master record is deleted?",
      options: [
        "A. The look-up field on the junction object record is cleared.",
        "B. The master record can't be deleted if it has a child record.",
        "C. The record is permanently deleted and can't be restored.",
        "D. The record is deleted and placed in the recycle bin.",
      ],
      answer: "D",
      title: "Question 22",
      explanation: "",
    },
    {
      content: "What is a capability of schema builder? (Select 2)",
      options: [
        "A. To enable field history tracking on standard objects",
        "B. To update descriptions of standard and custom objects",
        "C. To modify custom field help text on standard objects",
        "D. To create new lookup or master-detail object relationships",
      ],
      answer: "C,D",
      title: "Question 23",
      explanation: "",
    },
    {
      content:
        "In order to create an App Launcher component in Lightning what must an admin do?",
      options: [
        "A. Navigate to Setup-Customize-User Interface to enable the component for the Lightning App Builder.",
        "B. Purchase a license for the Lightning App Builder.",
        "C. Contact Salesforce to have the component activated for the Lightning App Builder.",
        "D. Join the pilot Lightning App Builder team.",
      ],
      answer: "C",
      title: "Question 24",
      explanation: "",
    },
    {
      content:
        "Which statement is true about field update actions from workflow rules and approval processes? Choose 2 answers",
      options: [
        "A. Field updates are tracked in the history related list of a record regardless of whether or not History tracking is set for those fields.",
        'B. Field update with "re-evaluate workflow rules" selected can cause a recursive loop if the updated field is included in a workflow.',
        "C. Field update are not available on currency field if the organization uses multi-currency.",
        "D. Field updates to records based on workflow rules and approval processes do not trigger validation rules",
      ],
      answer: "B,D",
      title: "Question 25",
      explanation: "",
    },
    {
      content:
        "Which two statements are true about an External ID field? Choose 2 answers",
      options: [
        "A. The field can be used to contain unique record identifiers from a system outside of Salesforce.",
        "B. The field must be unique since duplicates are NOT allowed within Salesforce.",
        "C. The field can be unique based on case-sensitive or case-insensitive values.",
        "D. The field must contain at least one number and at least one letter.",
      ],
      answer: "A,C",
      title: "Question 26",
      explanation: "",
    },
    {
      content:
        "Which of these actions are executed after a re-evaluated workflow? (Choose 3 answers)",
      options: [
        "A. Criteria-based sharing rules",
        "B. Previously fired workflow rules",
        "C. Active Escalation rules",
        "D. Cross-object workflow rules",
        "E. Active Validation rules",
      ],
      answer: "A,B,C",
      title: "Question 27",
      explanation: "",
    },
    {
      content: "What can be branded in SF1?(Select 3)",
      options: [
        "A. Header and Search",
        "B. Loading page color",
        "C. Action tab bar",
        "D. Loading logo",
      ],
      answer: "A,B,D",
      title: "Question 28",
      explanation: "",
    },
    {
      content:
        "Sales and marketing users have similar roles, and use similar record types. However sales uses 3 different fields and marketing has 5, how do you set up processes the most efficiently (something like that)",
      options: [
        "A. 2 page layouts, 2 record types, 2 profiles",
        "B. 1 page layout, 1 record type, 1 profile",
        "C. 1 page layout, 2 record types, 2 profiles",
        "D. 2 page layouts, 1 record type, 2 profiles",
      ],
      answer: "D",
      title: "Question 29",
      explanation: "",
    },
    {
      content:
        "The Vp of sales at universal con has requested the sales reps be given access to view all accounts in salesforce.\nHowever, they've also requested the sales rep only be allowed to create new opportunities on accounts they own",
      options: [
        "A. Create an opportunity validation rule that compares the opportunity and account owner",
        "B. Set the organization wide default sharing on opportunities to private and recalculate sharing",
        "C. Create a new opportunity quick action that validation account ownership",
        "D. Set the organization wide default sharing on opportunities to controlled by parent",
      ],
      answer: "A",
      title: "Question 30",
      explanation: "",
    },
    {
      content:
        "Which statement is true for embedding a Visualforce page in a page Layout. Choose 2 Answers",
      options: [
        "A. Visualforce Pages on a field set have attributes for width and height.",
        "B. Visualforce Pages can be placed anywhere in the page layout.",
        "C. Visualforce Pages can only be place in the Visualforce section in a page layout.",
        "D. Visualforce Pages on a page layout have attributes for width and height",
      ],
      answer: "B,D",
      title: "Question 31",
      explanation: "",
    },
    {
      content:
        "The VP of Marketing wants to broadcast an email to 10,000 contacts in Salesforce on a regular basis, but realizes Salesforce's mass email functionality has a limitation on the number of emails that can be sent each day.",
      options: [
        "A. Develop Apex code and Visualforce pages to send the emails.",
        "B. Research and evaluate products available on AppExchange to send mass emails",
        "C. Download all contacts to a CSV file and use an email client to send the mails",
        "D. Request Salesforce increase the number of maximum daily mails.",
      ],
      answer: "B",
      title: "Question 32",
      explanation: "",
    },
    {
      content:
        "Which type of relationships can be defined with external objects? Choose 2 answers",
      options: [
        "A. Cross-Ogranization Lookup",
        "B. External Master-Detail",
        "C. Indirect Lookup",
        "D. External Lookup",
      ],
      answer: "C,D",
      title: "Question 33",
      explanation: "",
    },
    {
      content:
        "Universal Containers manages internal projects by department using a customobject called projects. Only employees in the project's respective departmentshould have view access to all of the department's project records. If an employeechanges job roles and moves to another department, the employee should nolonger have access to the projects within their former department. How can theserequirements be met assuming the organization wide default for projects is set to private? (Choose 2)",
      options: [
        "A. Create a criteria-based sharing rule using the project's department that grants access to users by public groups.",
        "B. Create a criteria-based sharing rule using the project's department that grants access to users by profiles.",
        "C. Create a criteria-based sharing rule using the project's department that grants access to users by permission sets.",
        "D. Create a criteria-based sharing rule using the project's department that grants access to users by roles.",
      ],
      answer: "A,D",
      title: "Question 34",
      explanation: "",
    },
    {
      content:
        'Universal Containers has a workflow on opportunity that will change the status field to "In Progress" when the Stage field is changed "Negotiation." In addition, there is a validation rule on Status that will prevent the status being set to "In Progress" if the amount of the opportunity is less than $10,000.A user named Frank does not have FLS to see status. When Frank changes opportunities to a stage of "Negotiation" the status is still being changed to "In Progress", why is this occurring?',
      options: [
        "A. Workflow rules cannot trigger a validation rule",
        "B. Workflow rules occur after validation rules and thus override validation rules.",
        "C. Field Level Security prevents the validation rule from running.",
      ],
      answer: "A",
      title: "Question 35",
      explanation: "",
    },
    {
      content:
        "Universal Containers has a custom assessment object used by three divisions. Each division wants to track different information on the assessments, including different values for the status picklist. Division managers do not want their teams to be able to create another division's assessment. How can this be accomplished?",
      options: [
        "A. Create separate assessment record types for each division and use them to limit picklist values. Create separate page layouts for each record type and use profiles to restrict record type access.",
        "B. Create additional custom assessment objects, one for each division, to track their assessments so information can be tracked separately. Use profiles to restrict access to the three custom objects.",
        "C. Create three page layouts to determine the fields and picklist values for each user based on the division indicated on their user record. Use field-level security to restrict access to each division's fields.",
        "D. Create a separate page layout for each division and assign them profiles. Use the profile setting to configure each division's custom field list and picklist values for assessments",
      ],
      answer: "A",
      title: "Question 36",
      explanation: "",
    },
    {
      content:
        "The CRM Manager at Universal Containers has requested that a custom text field be converted to a picklist in order to promote better data hygiene. What needs to be considered before changing the field type? Choose 2 answers",
      options: [
        "A. All data should be backed up before converting a text field.",
        "B. Changing a field type will remove existing field history.",
        "C. Field references will be removed in Visualforce pages",
        "D. Existing list views that reference the field may be deleted.",
      ],
      answer: "A,D",
      title: "Question 37",
      explanation: "",
    },
    {
      content:
        "What is a true statement regarding case assignment rules? (Choose 3 answers)",
      options: [
        "A. They allow for more than one rule entry for each assignment rule",
        "B. A predefined Case Team is mandatory for each rule entry",
        "C. Salesforce processes case assignment rules before workflow rules",
        "D. They allow for more than one active rule at the same time",
        "E. They allow cases to be assigned to a queue",
      ],
      answer: "A,B,E",
      title: "Question 38",
      explanation: "",
    },
    {
      content:
        "Universal Containers introduces a custom object called Service, which has a lookup to Account. Field enter Service using the Salesforce1 mobile app. Operators create new Service records when viewing Account name which needs to automatically display the current Account. How can this be accomplished?",
      options: [
        "A. Create an action in the Account object and add it to the Service page layout.",
        "B. Create an action in the Account object and add it to the Account page layout.",
        "C. Create an action in the Service object and add it to the Account page layout",
        "D. Create an action in the Service object and add it to the Service page layout",
      ],
      answer: "B",
      title: "Question 39",
      explanation: "",
    },
    {
      content:
        "Which statements are true regarding Roll-Up Summary fields? (select all thatapply)",
      options: [
        "A. Validation errors can display when saving either the detail or master record.",
        "B. Because roll-up summary fields are not displayed on edit pages, you can use them in validation rules.",
        "C. Once created, you cannot change the detail object selected or delete any field referenced in your roll-up summary definition.",
        "D. Advanced currency management has no affect on roll-up summary fields.",
      ],
      answer: "A,B,C",
      title: "Question 40",
      explanation: "",
    },
    {
      content:
        "Universal Containers uses a custom object to track open job positions. They would like to automatically post updates on a record's feed whenever a position stage is changed.",
      options: [
        "A. Feed Quick Action",
        "B. Auto-response rule",
        "C. Workflow rule",
        "D. Feed tracking",
      ],
      answer: "D",
      title: "Question 41",
      explanation: "",
    },
    {
      content:
        "Actions on a Lightning Page allow you to do which of the following?",
      options: [
        "A. Send email, send outbound messages, and launch a flow.",
        "B. Send email, create a task, and create or update records.",
        "C. Send email and delete or clone records.",
        "D. Clone records, add users, and assign permissions.",
      ],
      answer: "B",
      title: "Question 42",
      explanation: "",
    },
    {
      content:
        "What is a true statement regarding master-detail relationships? Choose 3 answers",
      options: [
        "A. A master-detail relationship cannot be created if the custom object on the detail side already contains data",
        "B. Deleting a master record in a master-detail relationship deletes all related detail records",
        "C. Master-detail relationships cannot be converted to a look-up relationship",
        "D. Master-detail relationship can be convert to a lookup relationship if no roll-up summary fields exist on the master object",
        "E. Standard objects can be on the detail side of a custom object in a master-details relationship",
      ],
      answer: "A,B,D",
      title: "Question 43",
      explanation: "",
    },
    {
      content:
        "Which attribute must field have to be used in external modeling?",
      options: [
        "A. External ID",
        "B. None of the above",
        "C. Required",
        "D. Unique",
      ],
      answer: "A",
      title: "Question 44",
      explanation: "",
    },
    {
      content: "Which two are a capability of record types? Choose two answers",
      options: [
        "A. Displaying different field labels",
        "B. Displaying different page layouts",
        "C. Filtering picklist values",
        "D. Having multiple record types on the record",
      ],
      answer: "B,C",
      title: "Question 45",
      explanation: "",
    },
    {
      content:
        "Universal Containers has deployed custom tabs through change sets, without including the profiles, to production (enterprise edition). Which statement is true in regards to the visibility of custom tabs?",
      options: [
        "A. Custom tabs are hidden for all users",
        "B. Custom tabs are exposed for all users",
        "C. Custom tabs are default on for all users",
        "D. Custom tabs are default off for all users",
      ],
      answer: "A",
      title: "Question 46",
      explanation: "",
    },
    {
      content:
        "Universal Containers is setting up salesforce for the first time. Management wants the sales and marketing teams to have different navigation names in the salesforce1 mobile app. Which option is available to an app builder to satisfy the requirement?",
      options: [
        "A. Create public groups for sales and marketing and create mobile navigation menus for each group.",
        "B. Create roles for sales and marketing and assign a custom homepage layout for each role.",
        "C. Create mobile navigation menus for both the sales and marketing profiles.",
        "D. Create sales and marketing profiles to ensure read access to different objects",
      ],
      answer: "D",
      title: "Question 47",
      explanation: "",
    },
    {
      content:
        "Universal Containers is using a custom app to record performance review info for their employees. The performance review should be visible to the employee and the employee's manager, as well as the HR director.\nHow can this be configured? Choose 1 answer.",
      options: [
        "A. Set the org wide default for Performance Review to private and add a criteria based sharing rule to share performance review records with a public group that includes the employee managers and HR director",
        "B. Set the org wide default for Performance Review to private and use grant access using hierarchies to give visibility to the employee's manager and HR director",
        "C. Set the org wide default for Performance Review to private, do not use grant access using hierarchies and use manual sharing for the employee manager and HR director",
        "D. Use manager sharing to enable sharing with the employee's manager and HR director",
      ],
      answer: "C",
      title: "Question 48",
      explanation: "",
    },
    {
      content:
        "UVC wants to optimize routes for its traveling service personnel. What is recommended solution?",
      options: [
        "A. Configure Territory hierarchy and rules for routes based on territory",
        "B. Use an AppExchange partner product",
        "C. Use geolocation fields with Distance and Geolocation formulas",
        "D. Configure routing options in a custom object",
      ],
      answer: "B",
      title: "Question 49",
      explanation: "",
    },
    {
      content: "Which objects can be members of a Campaign? Choose 2 answers",
      options: ["A. Contact", "B. Lead", "C. Opportunity", "D. Account"],
      answer: "A,B",
      title: "Question 50",
      explanation: "",
    },
    {
      content: "Where custom buttons can be placed? (Choose 3)",
      options: [
        "A. Web to case",
        "B. Related object",
        "C. Personal account",
        "D. Record page",
      ],
      answer: "B,C,D",
      title: "Question 51",
      explanation: "",
    },
    {
      content:
        "Which setting is available to customize Salesforce1 mobile app for branding? Choose 3 answers",
      options: [
        "A. Action bar color",
        "B. Background color on loading page.",
        "C. Header and search bar color.",
        "D. Notification and search icon",
        "E. The image on loading page",
      ],
      answer: "B,C,E",
      title: "Question 52",
      explanation: "",
    },
    {
      content:
        "Representatives at Universal Con use salesforce to record information for new Leads. When new prospects are added, an outbound message is sent to SAP with the Lead's info.",
      options: [
        "A. Create a process using lightning process builder",
        "B. Create a workflow rule",
        "C. Design an approval process",
        "D. Use Visual Workflow",
      ],
      answer: "B",
      title: "Question 53",
      explanation: "",
    },
    {
      content:
        "Universal Containers provide access to Salesforce for their sales, service and marketing teams. Management wants to ensure that when user login, their home tab provides access to links and documentation that are specifically relevant to their job function. How can this requirement be met?",
      options: [
        "A. Expose specific elements within a home page custom component determined by role.",
        "B. Create separate home page custom components and layouts; assign to user by profile.",
        "C. Create separate home page custom components and layouts; assign to user by role.",
        "D. Expose specific elements within a home page custom component determined by profile.",
      ],
      answer: "B",
      title: "Question 54",
      explanation: "",
    },
    {
      content:
        "The App Builder at Universal Containers has been asked to ensure that the Amount field is populated when the stage is set to Closed Won. What can be used to meet this requirement?",
      options: [
        "A. Lightning Process Builder",
        "B. Approval Process",
        "C. Workflow",
        "D. Validation Rule",
      ],
      answer: "C",
      title: "Question 55",
      explanation: "",
    },
    {
      content: "Where can a custom button be placed? Choose 3 answers",
      options: [
        "A. On a related list",
        "B. On the User Object",
        "C. On the Custom List View",
        "D. On a Person Account",
        "E. On a Web-to-Case form",
      ],
      answer: "A,C,D",
      title: "Question 56",
      explanation: "",
    },
    {
      content:
        "Universal Containers stores invoices in SAP. Users want to view invoice data on the related Account records in Salesforce. How can this be achieved? Choose 2 answers",
      options: [
        "A. Use SAP data export functions to load data directly in Salesforce",
        "B. Create an external object connected to an invoice table in SAP.",
        "C. Connect to an OData Publisher Service for SAP databases",
        "D. Create a custom Invoice object and connect to SAP using Data Loader.",
      ],
      answer: "B,C",
      title: "Question 57",
      explanation: "",
    },
    {
      content:
        "Universal container manages internal projects by department using a custom object called projects. Only employees in the project's respective department should have view access to all of the department's project records. If an employee changes job roles and moves to another department, the employee should no longer have access to the projects within their former department. How can these requirements be met, assuming the organization-wide default for projects is set to private? Choose 2 answers",
      options: [
        "A. Create a criteria based sharing rule using the projects department that grants access to users by roles.",
        "B. Create a criteria based sharing rule using the projects department that grants access to users by profiles",
        "C. Create a criteria based sharing rule using the projects department that grants access to users by public groups.",
        "D. Create a criteria based sharing rule using the projects department that grants access to users by permission set.",
      ],
      answer: "A,C",
      title: "Question 58",
      explanation: "",
    },
    {
      content:
        "In order to delete Opportunities, Universal Containers would like sales reps to submit a request for approval to their sales manager. What can be used to meet these requirements?",
      options: [
        "A. Two-step Approval Process",
        "B. Approval Process with Time-dependent Workflow Action",
        "C. Process Builder with Submit for Approval Button",
        "D. Approval Process with Apex Trigger",
      ],
      answer: "D",
      title: "Question 59",
      explanation: "",
    },
    {
      content:
        "A divisional manager wants to add a chart into a page layout Which report format can be used as the source report to accomplish this? Choose 2 answers.",
      options: [
        "A. Matrix format with a chart.",
        "B. Tabular format with a chart.",
        "C. Summary format with a chart.",
        "D. Joined format with a chart.",
      ],
      answer: "A,C",
      title: "Question 60",
      explanation: "",
    },
  ],
});
