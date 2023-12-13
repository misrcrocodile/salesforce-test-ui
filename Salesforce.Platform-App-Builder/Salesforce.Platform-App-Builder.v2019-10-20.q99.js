window.testContent = window.testContent || [];
var testId = "Salesforce.Platform-App-Builder";
var testName = "Salesforce.Platform-App-Builder";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "Salesforce.Platform-App-Builder.v2019-10-20.q99",
  content: [
    {
      content:
        "Which of these actions are executed after a re-evaluated workflow? (Choose 3 answers)",
      options: [
        "A. Previously fired workflow rules",
        "B. Active Validation rules",
        "C. Cross-object workflow rules",
        "D. Active Escalation rules",
        "E. Criteria-based sharing rules",
      ],
      answer: "A,D,E",
      title: "Question 1",
      explanation: "",
    },
    {
      content:
        "An app builder would like to streamline the user experience by reflecting summarized calculations of specific fields on various objects. Which field types could be used in roll-up summary fields to accomplish this?\nChoose 3 answers",
      options: [
        "A. Date",
        "B. Time",
        "C. Checkbox",
        "D. Percent",
        "E. Currency",
      ],
      answer: "A,D,E",
      title: "Question 2",
      explanation: "",
    },
    {
      content:
        "Universal Containers would like to show different picklist values to different groups of user in a custom picklist field. What should be configured?",
      options: [
        "A. Field-level security",
        "B. Permission sets",
        "C. Record Types",
        "D. Page Layouts",
      ],
      answer: "C",
      title: "Question 3",
      explanation: "",
    },
    {
      content:
        "Universal Containers needs the ability to generate contract documents. All the data required for a contract resides in a custom object. What is the recommended solutions?",
      options: [
        "A. Enable the contract feature and create a custom Contract template based on the Standard template.",
        "B. Create the HTML template for contracts and store it in the Public Folder.",
        "C. Select and install an AppExchange product to meet the contract generation needs.",
        "D. Store a template in the static resources and configure the Action Link Template to use it.",
      ],
      answer: "C",
      title: "Question 4",
      explanation: "",
    },
    {
      content:
        "Which statement is true about an external id field? Choose 2 answers",
      options: [
        "A. The field must be unique since duplicates are not allowed within salesforce",
        "B. The field can be unique based on case-sensitive or case-insensitive values.",
        "C. The field contains unique records identifiers from a system outside of salesforce",
        "D. The field must contain at least one number and at least one letter",
      ],
      answer: "A,C",
      title: "Question 5",
      explanation: "",
    },
    {
      content:
        "Universal Containers has two teams: Sales and Services. Both teams interact with the same records. Sales users use ten fields on the Account record. Services users use three of the same fields as the Sales team, but also have five of their own, which the sales team does not use. What is the minimum configuration necessary to meet this requirement?",
      options: [
        "A. One profile, one record type, one page layout.",
        "B. Two profiles, one record type, two page layouts",
        "C. One profile, two record types, one page layout",
        "D. Two profiles, two record types, two page layouts",
      ],
      answer: "D",
      title: "Question 6",
      explanation: "",
    },
    {
      content:
        'A custom object named Assignment has a private sharing setting that grants access using hierarchies. The organization has a role hierarchy where the "Specialist" role reports to a "Manager" role which reports to a\n"Director" role. The director role is at the top of the role hierarchy. A user who is the manager role creates a new Assignment record. Who can send this record?',
      options: [
        "A. The record owner and the directors in their hierarchy.",
        "B. The record owner and those above the specialist role in their hierarchy",
        "C. The record owner and the managers in their hierarchy",
        "D. The record owner and the specialists in their hierarchy",
      ],
      answer: "A",
      title: "Question 7",
      explanation: "",
    },
    {
      content:
        "Universal containers wants to provide a different view for its users when they access an Account record in Salesforce1 instead of the standard web version. How can this be accomplished? Choose 2 answers",
      options: [
        "A. By adding actions in the Salesforce1 action bar section.",
        "B. By adding quick actions in the publisher section.",
        "C. By adding Visualforce page to the mobile cards section",
        "D. By adding a mobile layout and assigning it to a profile.",
      ],
      answer: "C",
      title: "Question 8",
      explanation: "",
    },
    {
      content:
        "Universal Containers stores invoices in SAP. Users want to view invoice data on the related Account records in Salesforce. How can this be achieved? Choose 2 answers",
      options: [
        "A. Create a custom Invoice object and connect to SAP using Data Loader.",
        "B. Use SAP data export functions to load data directly in Salesforce",
        "C. Connect to an OData Publisher Service for SAP databases",
        "D. Create an external object connected to an invoice table in SAP.",
      ],
      answer: "C,D",
      title: "Question 9",
      explanation: "",
    },
    {
      content:
        "Universal Containers is setting up salesforce for the first time. Management wants the sales and marketing teams to have different navigation names in the salesforce1 mobile app. Which option is available to an app builder to satisfy the requirement?",
      options: [
        "A. Create public groups for sales and marketing and create mobile navigation menus for each group.",
        "B. Create mobile navigation menus for both the sales and marketing profiles.",
        "C. Create sales and marketing profiles to ensure read access to different objects",
        "D. Create roles for sales and marketing and assign a custom homepage layout for each role.",
      ],
      answer: "C",
      title: "Question 10",
      explanation: "",
    },
    {
      content:
        "UC has a requirement that an opportunity should have a field showing the value of its associated account's billing state. This value should not change after the opportunity has been created. Is there a recommended solution to configure this automated behavior?",
      options: [
        "A. Formula field",
        "B. Apex",
        "C. Workflow",
        "D. Roll-up summary field",
      ],
      answer: "C",
      title: "Question 11",
      explanation: "",
    },
    {
      content:
        "Universal Containers has deployed custom tabs through change sets, without including the profiles, to Production (Enterprise Edition). Which statement is true in regards to the visibility of custom tabs?",
      options: [
        "A. Custom tabs are exposed for all users.",
        "B. Custom tabs are default off for all users.",
        "C. Custom tabs are hidden for all users.",
        "D. Custom tabs are default on for all users.",
      ],
      answer: "C",
      title: "Question 12",
      explanation: "",
    },
    {
      content: "What is the capability of schema Builder? Choose 2 Answers",
      options: [
        "A. Viewing page layout in a new window",
        "B. Editing custom settings",
        "C. Creating a new record type",
        "D. Showing selected objects on the page.",
      ],
      answer: "A,D",
      title: "Question 13",
      explanation: "",
    },
    {
      content:
        "A custom field on an account is used to track finance information about a customer. Only members of the Finance Team have access to this field. However, the business wants to allow one customer service agent, who is assigned the customer service profile, read-only access to this field for special circumstances. What is the recommended solution to grant the customer service agent access to the field?",
      options: [
        "A. Update the Customer Service Profile already assigned to the agent to allow for read-only access to the field via Field Level Security",
        "B. Create a new profile to allow for read-only access to the field via Field Level Security and assign it to the agent",
        "C. Create a permission set that allows read-only access to the field via Field Level Security and assign it to the agent.",
        "D. Update the custom field's Field Level Security in setup to allow the agent read-only access to the field.",
      ],
      answer: "C",
      title: "Question 14",
      explanation: "",
    },
    {
      content:
        "A custom object has a public reads only sharing settings that does not grant access using hierarchies. A dynamic sharing rule provides write access to the object to the global marketing public group if the record is marked as global. A user creates a new record and marks it as global. Who will have write access to the record?",
      options: [
        "A. The record owner and the global marketing public group.",
        "B. The record owner and anyone above the owner in the role hierarchy",
        "C. The global marketing public group and anyone above the owner in the role hierarchy",
        "D. The global marketing public group, the record owner, and anyone above the owner in the role hierarchy.",
      ],
      answer: "A",
      title: "Question 15",
      explanation: "",
    },
    {
      content:
        "What determines whether a user can create a new record using a specific record type?",
      options: [
        "A. Sharing",
        "B. Profile",
        "C. Field level security",
        "D. Page Layout",
      ],
      answer: "B",
      title: "Question 16",
      explanation: "",
    },
    {
      content:
        "Universal Containers sales reps can modify fields on an opportunity until it is closed. Only the sales operation team can modify the post closed follow-up dates and post closed follow-up comments fields. How can these requirements be met?",
      options: [
        "A. Use field-level security on page layouts to restrict editing fields",
        "B. Use multiple record types, page layouts and profiles.",
        "C. Use field level security to mark fields as read only on the sales profile",
        "D. Use record types with field sets and restrict editing fields using field-level security.",
      ],
      answer: "A",
      title: "Question 17",
      explanation: "",
    },
    {
      content:
        "Which statement is true about field update actions from workflow rules and approval processes? Choose 2 answers",
      options: [
        "A. Field updates are tracked in the history related list of a record regardless of whether or not History tracking is set for those fields.",
        "B. Field update are not available on currency field if the organization uses multi-currency.",
        'C. Field update with "re-evaluate workflow rules" selected can cause a recursive loop if the updated field is included in a workflow.',
        "D. Field updates to records based on workflow rules and approval processes do not trigger validation rules",
      ],
      answer: "C,D",
      title: "Question 18",
      explanation: "",
    },
    {
      content:
        "Universal Container wants to display a message when a case needs follow up. What can be used to display different text on the case record depending on the number of days a case is opened?",
      options: [
        "A. Case Process",
        "B. Lightning Process Builder",
        "C. Formula Field",
        "D. Workflow Update",
      ],
      answer: "C",
      title: "Question 19",
      explanation: "",
    },
    {
      content: "What is the capability of a schema builder? Choose 2 answers",
      options: [
        "A. To enable field history tracking on standard objects.",
        "B. To update description of standard and custom objects.",
        "C. To create new look-up or master-detail object relationship",
        "D. To modify custom field help text on standard objects",
      ],
      answer: "C,D",
      title: "Question 20",
      explanation: "",
    },
    {
      content: "Which statement about record types is true? (Select 2)",
      options: [
        "A. The ability to create records of a specific record type is determined by the profile",
        "B. Record types can only be assigned to one profile at a time",
        "C. Users cannot view records assigned to a record type their profile does not have access to",
        "D. Record types can be used to define picklist values available for a given field",
      ],
      answer: "A,D",
      title: "Question 21",
      explanation: "",
    },
    {
      content:
        "What is a true statement in regards to converting a tabular, summary, ormatrix report to a joined report?\n(Choose 3)",
      options: [
        "A. Cross filter are not supported in joined reports",
        "B. Bucket field are not supported in joined reports",
        "C. Joined report blocks are formatted as matrix reports",
        "D. The rows to display filter is not supported in joined reports",
        "E. Report formula fields are not supported in joined reports",
      ],
      answer: "A,B,D",
      title: "Question 22",
      explanation: "",
    },
    {
      content:
        "UVC wants to automate a business process using workflow. They are aware that workflow rules may cause recursive behavior, and as a result certain actions will only cause workflow rules that didn't fire previously to be retriggered. Which workflow action might cause this behavior?",
      options: [
        'A. Workflow Field Updates with the "Re-evaluate Workflow Rules After Field Changes" field selected',
        'B. Workflow Tasks where the "Due Date" field is set to "Rule Trigger Date" minus X days',
        "C. Workflow Emails containing hard coded links with Salesforce IDs referencing specific workflow rules",
        'D. Workflow Outbound messages with the "Protected Component" field selected',
      ],
      answer: "A",
      title: "Question 23",
      explanation: "",
    },
    {
      content:
        "Which statement is true when using record types to control picklist value. (Select 2)",
      options: [
        "A. If values are added to the Opportunity Stage, Case Status, and Lead Status fields, then the values must be manually adjusted for each record type",
        "B. If a picklist value is removed from the master, then it is no longer available when records assigned to that value are unchanged",
        "C. If a record type is renamed, then the list of values included in that record type are also changed to newly renamed record types",
        "D. If a picklist value is added to the master picklist, then the new value must be manually included in the appropriate record types",
      ],
      answer: "B,D",
      title: "Question 24",
      explanation: "",
    },
    {
      content:
        "In a real estate app, if a listing is sold, all related inspections for the listing must be cancelled. What business logic feature best caters to this requirement? Choose 1 answer.",
      options: [
        "A. Use Visual Workflow to define a flow to iterate through the related inspection records and update the status to 'Cancelled'",
        "B. Create a standard workflow on the Listing object with a workflow record update action on the related Inspection records",
        "C. Use a trigger to update the status of the related inspection records when the listing status is updated B.\n         Use Process Builder to define a process action to update related records based on the listing status change",
      ],
      answer: "A",
      title: "Question 25",
      explanation: "",
    },
    {
      content:
        "Universal Containers would like to embed a chart of all related Opportunities, by stage, on the Account detail page. Which type of report should the App Builder create to add to the Account page layout?",
      options: [
        "A. A tabular report on the Opportunity object.",
        "B. A summary report on the Account object.",
        "C. A tabular report on the Account object.",
        "D. A summary report on the Opportunity object.",
      ],
      answer: "D",
      title: "Question 26",
      explanation: "",
    },
    {
      content:
        "Universal Containers has deployed custom tabs through change sets, without including the profiles, to production (enterprise edition). Which statement is true in regards to the visibility of custom tabs?",
      options: [
        "A. Custom tabs are default off for all users",
        "B. Custom tabs are hidden for all users",
        "C. Custom tabs are exposed for all users",
        "D. Custom tabs are default on for all users",
      ],
      answer: "B",
      title: "Question 27",
      explanation: "",
    },
    {
      content: "What rules can be used to Opportunity object? (2)",
      options: [
        "A. Assignment",
        "B. Validation",
        "C. Workflow",
        "D. Auto-response",
      ],
      answer: "B,C",
      title: "Question 28",
      explanation: "",
    },
    {
      content: "What can be branded in SF1?(Select 3)",
      options: [
        "A. Loading page color",
        "B. Loading logo",
        "C. Header and Search",
        "D. Action tab bar",
      ],
      answer: "A,B,C",
      title: "Question 29",
      explanation: "",
    },
    {
      content:
        "In order to delete the Opportunities, Universal Containers would like sales reps to submit requests for approval from their sales manager. What can be used to meet these requirements?",
      options: [
        "A. Process Builder with Submit for Approval action",
        "B. Approval Process with Apex Trigger.",
        "C. Two-step Approval process.",
        "D. Approval Process with Time-Dependent workflow action.",
      ],
      answer: "C",
      title: "Question 30",
      explanation: "",
    },
    {
      content:
        "Universal Containers is using a custom app to record performance review info for their employees. The performance review should be visible to the employee and the employee's manager, as well as the HR director.\nHow can this be configured? Choose 1 answer.",
      options: [
        "A. Set the org wide default for Performance Review to private and add a criteria based sharing rule to share performance review records with a public group that includes the employee managers and HR director",
        "B. Set the org wide default for Performance Review to private, do not use grant access using hierarchies and use manual sharing for the employee manager and HR director",
        "C. Set the org wide default for Performance Review to private and use grant access using hierarchies to give visibility to the employee's manager and HR director",
        "D. Use manager sharing to enable sharing with the employee's manager and HR director",
      ],
      answer: "B",
      title: "Question 31",
      explanation: "",
    },
    {
      content:
        "What is true statement regarding master - detail relationship? Choose 3 answers",
      options: [
        "A. A master - detail relationship cannot be converted to a look-up relationship",
        "B. Deleting a master record in a master detail relationship deletes all related detail records",
        "C. A master-detail relationship cannot be created if the custom object on the detail side already contains data.",
        "D. Standard objects can be on the detail side of the custom object in a master-detail relationship",
        "E. Master-detail relationship can convert to a look -up relationship if no roll-up summary field exist on the master object",
      ],
      answer: "B,C,E",
      title: "Question 32",
      explanation: "",
    },
    {
      content:
        "What is true when changing the following field types? (Choose 3)",
      options: [
        "A. Data is lost when changing Number to Currency",
        "B. Data can be lost when changing from Rich Text to Long Text",
        "C. No data is lost when converting Text to auto number",
        "D. No data is lost when changing Picklist to Multipicklist",
        "E. Rollup summary fields will stop calculate if Master Detail is changed to lookup",
      ],
      answer: "B,C,D",
      title: "Question 33",
      explanation: "",
    },
    {
      content:
        "Which three standard component types are available in the Lightning App Builder? Choose 3 answers",
      options: [
        "A. Filter Text",
        "B. Recent Items",
        "C. Rich Text",
        "D. Plain Text",
        "E. Report details",
      ],
      answer: "B,C,D",
      title: "Question 34",
      explanation: "",
    },
    {
      content:
        "Universal container needs to update a field on an account when an opportunity stage is changed to close lost.\nWhat can be used to accomplish this requirement? Choose 2",
      options: [
        "A. Assignment Rules",
        "B. Lightning Process Builder",
        "C. Workflow Rule",
        "D. Approval Process",
      ],
      answer: "B,C",
      title: "Question 35",
      explanation: "",
    },
    {
      content:
        "UVC needs to update a field on an Account when an Opportunity Stage is changed to Closed-Lost. Which two should be used to accomplish this requirement? Choose two answers",
      options: [
        "A. Workflow Rule",
        "B. Assignment Rule",
        "C. Approval Process",
        "D. Process Builder",
      ],
      answer: "A,D",
      title: "Question 36",
      explanation: "",
    },
    {
      content:
        "An App Builder at UVC would like to prevent users from creating new records on an Account related list by overriding standard buttons. Which two should the App Builder consider before overriding standard buttons?",
      options: [
        "A. Standard buttons can be changed on lookup dialogs, list views, and search result layouts",
        "B. Standard buttons can be overridden, relocated on the detail page, and relabeled",
        "C. Standard buttons can be overridden with a Visualforce page",
        "D. Standard buttons that are not available for overrides can still be hidden on page layouts",
      ],
      answer: "D",
      title: "Question 37",
      explanation: "",
    },
    {
      content:
        "A workflow has been written to update the 'Stage' field on opps. What will be the impact of this field update?",
      options: [
        "A. No Impact",
        "B. Type fields on opp",
        "C. Both A&B",
        "D. Forecast field on opp",
      ],
      answer: "C",
      title: "Question 38",
      explanation: "",
    },
    {
      content:
        "Representatives at Universal Containers use Salesforce to record information for leads. When new prospects are added, an outbound message is sent to SAP with lead's information. Which automation process will accomplish this without writing any code?",
      options: [
        "A. Use Visual Workflow to create a wizard that will send an outbound message.",
        "B. Create a Workflow Rule with an outbound message as the action",
        "C. Design an Approval Process that sends an outbound message upon arrival.",
        "D. Create a process using Lightning Process Builder to send the outbound message.",
      ],
      answer: "B",
      title: "Question 39",
      explanation: "",
    },
    {
      content:
        "UC would like to automatically assign a specific permission set to new users. How can they do that?",
      options: [
        "A. Create a lighting process on the user object to launch a flow",
        "B. Option 4",
        "C. Create a flow on the user object to assign permission set",
        "D. Create a workflow rule on the user object to assign a permission set",
      ],
      answer: "C",
      title: "Question 40",
      explanation: "",
    },
    {
      content:
        "Which capability allows an app builder to grant object-level access? Choose 2 answers",
      options: [
        "A. Assigning a user a Public Group that allows for Read and Edit access to an object",
        "B. Assigning a user a Profile that allows Read access to an object",
        "C. Assigning a user a Permission Set that allows for Read and Edit access to an object",
        "D. Assigning a user a Role that allows Read access to an object.",
      ],
      answer: "B,C",
      title: "Question 41",
      explanation: "",
    },
    {
      content:
        "How would you ensure that records of a particular object are visible only to the user, and users higher in the role hierarchy? choose 2 answers.",
      options: [
        "A. Define a role hierarchy",
        "B. Set org wide sharing default for the object as manager view",
        "C. Set org wide sharing default for the object as private",
        "D. Define a profile list",
      ],
      answer: "A,C",
      title: "Question 42",
      explanation: "",
    },
    {
      content:
        "Universal Containers has separated business requirements for consumer and Business Opportunities. The sales team work with both types of Opportunities. The app builder created two record types on the Opportunity Object. Which action can now be performed? Choose 2 answers",
      options: [
        "A. Prevent access to secure data fields by sales process.",
        "B. Specify a different page layout by sales process.",
        "C. Create unique Opportunity stages by sales process.",
        "D. Enable field validation by sales process.",
      ],
      answer: "B,D",
      title: "Question 43",
      explanation: "",
    },
    {
      content:
        "The organization-wide default for a custom object is set to private. The superior profile grants view access to the same object. A user with the superior profile is also listed as the manager on the user detail record for a subordinate. However, the superior still cannot view records owned by the subordinate.\nWhat is preventing the superior from viewing records owned by the subordinate? Choose 2 answers",
      options: [
        "A. The superior requires permission set in order to view the subordinate's records.",
        "B. Organization-wide settings for the custom object grant access to other user with the same role.",
        "C. The superiors' role is not above the subordinate's role in the hierarchy.",
        "D. Organization-wide settings for the custom object do not grant access using hierarchy.",
      ],
      answer: "C,D",
      title: "Question 44",
      explanation: "",
    },
    {
      content:
        "What is a true statement in regard to creating custom report types?",
      options: [
        "A. The detail object in a master-detail relationship cannot be added as a secondary object on a custom report type",
        "B. When the primary object is a custom object and is deleted, then the report type and any reports created from it must be deleted manually",
        "C. When the primary object is a custom object and is deleted, then the report type and any reports created from it must be deleted manually ",
        "D. Once a report type is saved with a standard or custom primary object, the primary object cannot be changed for the report type",
        "E. Any object can be chosen unless the object is not visible to the person creating the report type through security settings",
      ],
      answer: "A",
      title: "Question 45",
      explanation: "",
    },
    {
      content:
        "Universal container manages internal projects by department using a custom object called projects. Only employees in the project's respective department should have view access to all of the department's project records. If an employee changes job roles and moves to another department, the employee should no longer have access to the projects within their former department. How can these requirements be met, assuming the organization-wide default for projects is set to private? Choose 2 answers",
      options: [
        "A. Create a criteria based sharing rule using the projects department that grants access to users by roles.",
        "B. Create a criteria based sharing rule using the projects department that grants access to users by public groups.",
        "C. Create a criteria based sharing rule using the projects department that grants access to users by profiles",
        "D. Create a criteria based sharing rule using the projects department that grants access to users by permission set.",
      ],
      answer: "A,B",
      title: "Question 46",
      explanation: "",
    },
    {
      content:
        "Universal Containers has purchased a Lightning Component on the AppExchange. Where can that component be utilized. Choose 2 answers",
      options: [
        "A. Standalone Lightning App",
        "B. Visual Workflow",
        "C. Salesforce1 Mobile App",
        "D. Lightning Process Builder",
      ],
      answer: "A,C",
      title: "Question 47",
      explanation: "",
    },
    {
      content:
        "Which two statements are true about record types? Choose two answers",
      options: [
        "A. They allow different picklist values for all picklist fields",
        "B. They allow different page layouts and mandatory fields",
        "C. They can be enabled by profile and permission set",
        "D. They can be used to control user role hierarchy",
      ],
      answer: "A,B",
      title: "Question 48",
      explanation: "",
    },
    {
      content:
        "What data type can be used to summarizeroll-up summary. (Choose 3)",
      options: [
        "A. Currency",
        "B. Date",
        "C. Number",
        "D. Percent",
        "E. Formula",
      ],
      answer: "A,C,D",
      title: "Question 49",
      explanation: "",
    },
    {
      content:
        "What should be done to provide managers access to records of which they are not the owner in a private sharing model?",
      options: [
        'A. Create a Manager Permission set and select the "View All Data" option',
        'B. Create a Manager profile and select the "View My Teams Data" option.',
        "C. Set the Manger field for each User Record on the Manager's team.",
        "D. Define a Role Hierarchy and use the Grant Access Using Hierarchies option",
      ],
      answer: "A",
      title: "Question 50",
      explanation: "",
    },
    {
      content:
        "Cool Air Conditioners has been using Service Cloud to manage cases, but are now considering using it to manage field service jobs. They would like to track field service activity and assignment to technicians. What is the recommended solution to meet these requirements? Choose 1 answer.",
      options: [
        "A. Extend the Service Cloud configuration to handle Field Service cases",
        "B. Utilize the standard objects Work Order and Work Order Line Items",
        "C. Install an AppExchange product that provides Field Service functionality",
        "D. Use real time API integration to connect Salesforce with an external field service application",
      ],
      answer: "B",
      title: "Question 51",
      explanation: "",
    },
    {
      content:
        "Universal Containers would like to embed a chart of all related Opportunities, by stage, on the Account detail page. Which type of report should the App Builder create to add to the Account page layout?",
      options: [
        "A. A summary report on the Opportunity object.",
        "B. A tabular report on the Opportunity object.",
        "C. A summary report on the Account object.",
        "D. A tabular report on the Account object.",
      ],
      answer: "A",
      title: "Question 52",
      explanation: "",
    },
    {
      content:
        "An App Builder has been asked to integrate Salesforce with an external web service. The web service must be notified every time an Opportunity is Won. Which two can satisfy this requirement?",
      options: [
        "A. Use a process and Apex Code",
        "B. Use a process and an outbound message",
        "C. Use a flow and an outbound message",
        "D. Use a workflow rule and an outbound message",
      ],
      answer: "D",
      title: "Question 53",
      explanation: "",
    },
    {
      content:
        "A customer service representative at a call center would like to be able to collect information from customers using a series of question prompts. What could be used to accomplish this?",
      options: [
        "A. Workflow Rules",
        "B. Lightning process builder",
        "C. Lightning Connect",
        "D. Visual workflow",
      ],
      answer: "D",
      title: "Question 54",
      explanation: "",
    },
    {
      content: "What is a use case for validation rules?",
      options: [
        "A. Ensure zip/postal codes are entered in the correct format",
        "B. Prevent non-managers from joining a private Chatter Group",
        "C. Prevent deals with less than a 10% discount from entering an approval process",
        "D. Restrict partner Lead visibility to the channel sales team",
      ],
      answer: "A",
      title: "Question 55",
      explanation: "",
    },
    {
      content:
        "Universal Con conducts evaluations of their sales reps using a custom objectconsisting of numerical scores and executive comments. The company wants toensure that only the sales reps, their managers,and their managers' executives canview the rep's evaluation record, but the reps should not be able to view theexecutive comment field on their review.",
      options: [
        "A. Use a private sharing model granting record across using hierarchy, managefield access with record types and field-level security",
        "B. Use a private sharing model granting access using customer settings, managefield access with page layouts and field-level security",
        "C. Hierarchy, manage field access with field-level security",
        "D. Using custom settings, manage field access with record types and pagelayouts",
      ],
      answer: "C",
      title: "Question 56",
      explanation: "",
    },
    {
      content:
        "Universal Containers has created the custom objects Candidate and Interview in Salesforce to track candidates and interviews respectively. The company wants to track the total number of interviews a candidate has gone through on the candidate record without writing any code. How can app builder accomplish this requirements?\nChoose 2 answers",
      options: [
        "A. Use a master-detail relationship between the Candidate and the Interview objects.",
        "B. Use a roll-up summary field on the candidate record to show the total number of interviews.",
        "C. Use a lookup relationship between the Candidate and Interview objects",
        "D. Use a formula field on the candidate record to show the total number of interviews",
      ],
      answer: "A,B",
      title: "Question 57",
      explanation: "",
    },
    {
      content:
        "Which statement is true when defining a Create custom action for the Contact object? Choose 2 answers",
      options: [
        "A. The create action allows a user to select a record type",
        "B. The create action will ignore field requirements",
        "C. The create action will respect validation rules",
        "D. The create action can pre-define Contact field values",
      ],
      answer: "A,C",
      title: "Question 58",
      explanation: "",
    },
    {
      content:
        "Representatives at Universal Con use salesforce to record information for new Leads. When new prospects are added, an outbound message is sent to SAP with the Lead's info.",
      options: [
        "A. Design an approval process",
        "B. Create a workflow rule",
        "C. Use Visual Workflow",
        "D. Create a process using lightning process builder",
      ],
      answer: "B",
      title: "Question 59",
      explanation: "",
    },
    {
      content:
        "Which use case can be accomplished using a custom link?(Select 3)",
      options: [
        "A. To a process to update current record",
        "B. To external system using data of salesforce",
        "C. To create a record page",
        "D. To create a custom visual flow",
        "E. Navigate to Apex trigger",
      ],
      answer: "A,B,C",
      title: "Question 60",
      explanation: "",
    },
    {
      content:
        "Universal Containers has a requirement that an Opportunity should have a field showing the value of its associated account's billing state. This value should not change after the Opportunity has been created. What is the recommended solution to configure this automation behavior?",
      options: [
        "A. Roll-up-summary field",
        "B. Workflow",
        "C. Apex",
        "D. Formula Field",
      ],
      answer: "B",
      title: "Question 61",
      explanation: "",
    },
    {
      content:
        "The marketing team at UVC has a list of 400 leads it wants to upload to Salesforce. The team need to avoid creating duplicate records. Which two actions should be taken to meet this requirement? Choose 2 answers",
      options: [
        "A. Enable Duplicate Matching in the Data Management section in Setup and activate the Lead-to_Lead scenario.",
        "B. Utilize a Lead Matching Rule and corresponding Duplicate Rule to block newly created duplicate leads.",
        "C. Upload the lead list using the import wizard and select a Matching type to prevent duplicate lead creation.",
        "D. Use Data Loader's update function to import lead and match to existing records based on e-mail address.",
      ],
      answer: "B,C",
      title: "Question 62",
      explanation: "",
    },
    {
      content:
        "You want to use an External Data Object Table from Heroku carrying Product Category information. The data need to be included in Salesforce and searchable. What do you have to do before you can use the connection.\n(Choose 2)",
      options: [
        'A. Choose "include in Salesforce searches" option',
        'B. Press "validate and sync"',
        "C. URL / choose the URL",
        'D. Choose "include as index field"',
      ],
      answer: "A,B",
      title: "Question 63",
      explanation: "",
    },
    {
      content:
        "Which two features can be used to allow users to access Visual Workflows? Choose 2 answers",
      options: [
        "A. Quick Action",
        "B. Visual Workflow Launcher",
        "C. Custom Button",
        "D. Invoked by Process",
      ],
      answer: "B,D",
      title: "Question 64",
      explanation: "",
    },
    {
      content:
        "At UVC, the Account object has a MD relationship with an Invoice custom object. The app builder would like to change this to a lookup field, but is not able to do so. What could be causing this?",
      options: [
        "A. The Invoice must have at least one MD field for reporting",
        "B. The Account is included in the workflow on the Invoice Object",
        "C. The invoice records have existing values in the Account",
        "D. The Account record includes invoice roll-up summary fields",
      ],
      answer: "D",
      title: "Question 65",
      explanation: "",
    },
    {
      content:
        "Which statement is true for embedding a visual force page in a page layout?(Choose 2)",
      options: [
        "A. Visualforce pages on a page layout have attributes for width and height",
        "B. Visualforce pages can only be placed in the visual force section in the page layout",
        "C. Visualforce pages on a field set have attributes for width and height",
        "D. Visualforce pages can be placed anywhere in a page layout",
      ],
      answer: "A,B",
      title: "Question 66",
      explanation: "",
    },
    {
      content:
        "UVC wants to show different picklist values to different groups of users in a custom picklist field. What should be configured?",
      options: [
        "A. Record Types",
        "B. Permission sets",
        "C. Field-level security",
        "D. Page Layout",
      ],
      answer: "A",
      title: "Question 67",
      explanation: "",
    },
    {
      content:
        "The App Builder at Universal Containers has been asked to ensure that the Amount field is populated when the stage is set to Closed Won. What can be used to meet this requirement?",
      options: [
        "A. Workflow",
        "B. Lightning Process Builder",
        "C. Approval Process",
        "D. Validation Rule",
      ],
      answer: "A",
      title: "Question 68",
      explanation: "",
    },
    {
      content:
        "A Customer Support Manager at Universal Containers would like to implement call scripting for their caller agents. What automation tool can be used to accomplish this?",
      options: [
        "A. Lightning Process Builder",
        "B. Workflow",
        "C. Visual Workflow",
        "D. Lightning Connect",
      ],
      answer: "C",
      title: "Question 69",
      explanation: "",
    },
    {
      content:
        "A company wants to invite customers to chatter, what options can a customerhave?",
      options: [
        "A. Request to join public groups",
        "B. @mention other members of the group",
        "C. Invite other members to groups they are a part of",
        "D. Add them on FB,Twitter and Instagram",
      ],
      answer: "C",
      title: "Question 70",
      explanation: "",
    },
    {
      content:
        "Universal container would like to use a chatter group for their mergers andacquisitions team to collaborate on potential new projects. This project should notbe visible for non-members to see or join,and can be accessed by invites only.",
      options: [
        "A. Member group",
        "B. Public group",
        "C. Private group",
        "D. Unlisted group",
      ],
      answer: "D",
      title: "Question 71",
      explanation: "",
    },
    {
      content:
        "At Universal Containers, multiple departments utilize the Case object for different purposes. Some users submit cases for IT and HR requests. Other users provide customer support with case records. How can an App Builder enable different users to see different fields, based on the case type?",
      options: [
        "A. Create different case record types for IT, HR and Customer Support. Assign different page layouts to each record type by profile.",
        "B. Create different case field sets for IT, HR and Customer Support. Assign different field sets by role.",
        "C. Create different case field sets for IT, HR and Customer Support. Assign different field sets by profile.",
        "D. Create different case record types for IT, HR and Customer Support. Assign different page layouts to each record type by role.",
      ],
      answer: "A",
      title: "Question 72",
      explanation: "",
    },
    {
      content:
        "Which type of membership can be defined with external objects? (Choose 2)",
      options: [
        "A. External lookup",
        "B. Cross-organization lookup",
        "C. Indirect lookup",
        "D. External master-detail",
      ],
      answer: "A,C",
      title: "Question 73",
      explanation: "",
    },
    {
      content:
        'The Director of Customer Service wants to know when agents are overwhelmed with high-priority items in the support queue. The Director wants to receive a notification when a new case is open with the status of "New" for more than four business hours. Which automation process could be used to accomplish this? Choose 2 answers',
      options: [
        "A. Lightning Process Builder",
        "B. Visual workflow",
        "C. Escalation rules",
        "D. Scheduled Apex",
      ],
      answer: "A,C",
      title: "Question 74",
      explanation: "",
    },
    {
      content: "Which two rules can be configured for the Opportunity object?",
      options: [
        "A. Workflow Rule",
        "B. Assignment Rule",
        "C. Escalation Rule",
        "D. Validation Rule",
      ],
      answer: "A,D",
      title: "Question 75",
      explanation: "",
    },
    {
      content:
        "An app builder has created a report for sales people to view records from the custom object, some users have complained that they are unable to see all of the appropriate records. What steps should be taken to ensure data visibility within the report? Choose 3 Answers",
      options: [
        "A. Check reports filter",
        "B. Check Sharing rules",
        "C. Check organization-wide defaults",
        "D. Check the report folder sharing settings",
        "E. Check the user's profile for object settings.",
      ],
      answer: "B,C,E",
      title: "Question 76",
      explanation: "",
    },
    {
      content:
        'Universal Containers uses a custom object to track Site Visits. When the status of a Site Visit is changed from\n"In Progress" to "On Hold", the business wants the Site visit owner to be automatically assigned to an "On Hold" queue. Which capability can be used to accomplish this?',
      options: [
        "A. Apex Trigger",
        "B. Assignment Rule",
        "C. Visual Workflow",
        "D. Action",
      ],
      answer: "A",
      title: "Question 77",
      explanation: "",
    },
    {
      content:
        "An app builder wants to show groups as the last navigation menu item in the salesforce1 mobile app. however, the app builder is not able to select groups as one of the items on the drop-down menu. What could cause this?",
      options: [
        "A. Groups is included in the smart search items but not on the navigation menu",
        "B. Groups cannot be the last item in the navigation menu.",
        "C. Groups is showing up in the recent section and not in the navigation menu",
        "D. Groups is not included in the selecteCreate a criteria based sharing rule using the projects department that grd list for the navigation menu",
      ],
      answer: "D",
      title: "Question 78",
      explanation: "",
    },
    {
      content:
        "The director of marketing has asked the app builder to create a formula field that tracks how many days have elapsed since a contact was sent a marketing communication. The director is only interested in whole units.\nWhich function should be used to calculate the difference?",
      options: ["A. Date()", "B. Datevalue()", "C. Today()", "D. Now()"],
      answer: "C",
      title: "Question 79",
      explanation: "",
    },
    {
      content:
        "Which type of relationship can be defined with external objects? Choose 2 Answers",
      options: [
        "A. Cross Organizational Look-up",
        "B. External Look-Up",
        "C. External Master-Detail",
        "D. Indirect Look-Up",
      ],
      answer: "B,D",
      title: "Question 80",
      explanation: "",
    },
    {
      content:
        "A business user wants a quick way to edit a record's status and enter a custom due date field from the record's feed in Salesforce1 Mobile. What could be used to accomplish this?",
      options: [
        "A. Custom URL formula field",
        "B. Custom Action",
        "C. Custom Button",
        "D. Custom quick access link",
      ],
      answer: "B",
      title: "Question 81",
      explanation: "",
    },
    {
      content:
        "UVC sells to three different types of organizations. Partner, Enterprise, and Small Business. Some of the information collected about each organization overlaps; however, there are also unique attributes to each type of organization that need to be tracked, some of which are required. What Solution meets these requirements?",
      options: [
        "A. Three Account record types, each with its own page layout to display the relevant fields for that type of organization",
        "B. A Partner Community for partner organization records, and two lead record types for Enterprise and Small Business organizations",
        "C. Three custom objects for the three organization types, each with custom fields that pertain to that type of organization",
        "D. Three different sections on an Account page layout, with each section displaying the relevant fields for that organization.",
      ],
      answer: "A",
      title: "Question 82",
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
      title: "Question 83",
      explanation: "",
    },
    {
      content:
        "Universal container sales reps can modify fields on an opportunity until it isclosed. Only the sales operations team can modify the post close follow up date andpost close followup comments fields. How to make this happen?",
      options: [
        "A. Use record types with field sets and restrict editing fields using field-level security",
        "B. Use field-level security to mark fields as read-only on the sales profile",
        "C. Use field-level security on page layouts to restrict editing fields",
        "D. Use multiple record types, page layouts, and profiles",
      ],
      answer: "D",
      title: "Question 84",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants to standardize their business logic. They want to ensure that the workflow order is guaranteed to be the same each time. Which feature can be used to accomplish this? Choose 2 answers.",
      options: [
        "A. Chatter Actions",
        "B. Workflow",
        "C. Lightning Process Builder",
        "D. Visual Workflow",
      ],
      answer: "C,D",
      title: "Question 85",
      explanation: "",
    },
    {
      content:
        "Actions on a Lightning Page allow you to do which of the following?",
      options: [
        "A. Send email, create a task, and create or update records.",
        "B. Clone records, add users, and assign permissions.",
        "C. Send email and delete or clone records.",
        "D. Send email, send outbound messages, and launch a flow.",
      ],
      answer: "A",
      title: "Question 86",
      explanation: "",
    },
    {
      content:
        "Universal con has purchased a lighting component on the appExchange. Where can that component be utilized? (Choose 2)",
      options: [
        "A. Salesforce lighting app",
        "B. Lightning process builder",
        "C. Salesforce1 mobile app",
        "D. Visual workflow",
      ],
      answer: "A,C",
      title: "Question 87",
      explanation: "",
    },
    {
      content: "Which two are a capability of record types? Choose two answers",
      options: [
        "A. Filtering picklist values",
        "B. Having multiple record types on the record",
        "C. Displaying different field labels",
        "D. Displaying different page layouts",
      ],
      answer: "A,D",
      title: "Question 88",
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
      title: "Question 89",
      explanation: "",
    },
    {
      content: "When should Unmanaged packages be created? Choose 2 answers",
      options: [
        "A. Publishing an application for sale on the AppExchange.",
        "B. Deploying from a Developer Edition environment.",
        "C. Distributing open-source projects on AppExchange",
        "D. Migrating of components from sandbox to production",
      ],
      answer: "B,C",
      title: "Question 90",
      explanation: "",
    },
    {
      content:
        "Universal containers has a custom object that has a N:M relationship with opportunityLineItem carrying price and amount information. In order to compute total amounts and total prices per Opportunity using Rollup summary fields, what field type will you use.",
      options: [
        "A. Junction",
        "B. Crossobject",
        "C. Lookup",
        "D. Master-Detail",
      ],
      answer: "D",
      title: "Question 91",
      explanation: "",
    },
    {
      content:
        "The VP of Marketing wants to broadcast an email to 10,000 contacts in Salesforce on a regular basis, but realizes Salesforce's mass email functionality has a limitation on the number of emails that can be sent each day.",
      options: [
        "A. Download all contacts to a CSV file and use an email client to send the mails",
        "B. Develop Apex code and Visualforce pages to send the emails.",
        "C. Request Salesforce increase the number of maximum daily mails.",
        "D. Research and evaluate products available on AppExchange to send mass emails",
      ],
      answer: "D",
      title: "Question 92",
      explanation: "",
    },
    {
      content:
        "What type of field can be referenced by a Roll-up Summary field using SUM? Choose 3 answers",
      options: [
        "A. Date",
        "B. Formula",
        "C. Percent",
        "D. Number",
        "E. Currency",
      ],
      answer: "C,D,E",
      title: "Question 93",
      explanation: "",
    },
    {
      content:
        'Universal Containers would like to collaborate with its customers within Salesforce, and has decided to enable the "Allow Customer Invitations" Chatter setting. What permission is granted to Customers when invited to Chatter Group?',
      options: [
        "A. The ability to invite members to groups of which they are a member",
        "B. The ability to interact with members of their groups",
        "C. The ability to request access to public groups",
        "D. The ability to @mention accounts of which they are a contact.",
      ],
      answer: "B",
      title: "Question 94",
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
      title: "Question 95",
      explanation: "",
    },
    {
      content:
        "Invoices in SAP need to be reviewed from Salesforce Account object Home. (Select 2)",
      options: [
        "A. Data Loader",
        "B. From SAP config",
        "C. O-DATA",
        "D. External object",
      ],
      answer: "C,D",
      title: "Question 96",
      explanation: "",
    },
    {
      content:
        "When configuring a record type, an App Builder can configure the available value of a picklist field for the page layout. Which opportunity standard field is available to be configured directly in the Opportunity record type? Choose 2 answers",
      options: [
        "A. Forecast Category",
        "B. Lead Source",
        "C. Stage",
        "D. Type",
      ],
      answer: "B,D",
      title: "Question 97",
      explanation: "",
    },
    {
      content:
        'Universal Containers has a workflow on opportunity that will change the status field to "In Progress" when the Stage field is changed "Negotiation." In addition, there is a validation rule on Status that will prevent the status being set to "In Progress" if the amount of the opportunity is less than $10,000.A user named Frank does not have FLS to see status. When Frank changes opportunities to a stage of "Negotiation" the status is still being changed to "In Progress", why is this occurring?',
      options: [
        "A. Workflow rules occur after validation rules and thus override validation rules.",
        "B. Field Level Security prevents the validation rule from running.",
        "C. Workflow rules cannot trigger a validation rule",
      ],
      answer: "C",
      title: "Question 98",
      explanation: "",
    },
    {
      content:
        "What the true statement is in regards to converting a tabular, summary, or matrix report to a joined report?\nChoose 3 answers",
      options: [
        "A. Cross filters are not supported in joined reports",
        "B. The rows to display filter is not supported in Joined reports",
        "C. Report formula fields are nor supported in Joined reports",
        "D. Joined report blocks are formatted as matrix reports.",
        "E. Bucket fields are not supported in joined reports.",
      ],
      answer: "A,B,E",
      title: "Question 99",
      explanation: "",
    },
  ],
});
