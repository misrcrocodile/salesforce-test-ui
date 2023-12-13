window.testContent = window.testContent || [];
var testId = "Salesforce.Platform-App-Builder";
var testName = "Salesforce.Platform-App-Builder";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "Salesforce.Platform-App-Builder.v2022-03-30.q110",
  content: [
    {
      content:
        "Universal Containers generates leads from three different sources: web, trade shows, and partners. Some of the information collected is applicable to all sources, there is also information that is unique to each type of lead.\nWhat shouldan app builder configure to meet these requirements?",
      options: [
        "A. Create custom page payouts for each type of lead only containing the relevant fields",
        "B. Create three lead record types each with its own page layout containing the relevant fields",
        "C. Create three sections on thelead layout and instruct users to collapse the non-relevant fields",
        "D. Create a partner community and a record type for web and trade show leads",
      ],
      answer: "C",
      title: "Question 1",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants to trackinstallation information once it container has been purchased on a custom object. Sales reps should have visibility of all the installation with their opportunities.\nvisibility of all the installations associated with their opportunities.\nWhat kind of relationship should this new object have to the Opportunity?",
      options: [
        "A. Master-Detail",
        "B. Many to Many",
        "C. Lookup",
        "D. Hierarchical",
      ],
      answer: "A",
      title: "Question 2",
      explanation: "",
    },
    {
      content:
        "At UVC, the Account object has a MD relationship with an Invoice custom object. The app builder would like to change this to a lookup field, but is not able to do so. What could be causing this?",
      options: [
        "A. The invoice records have existing values in the Account",
        "B. The Invoice must have at least one MD field for reporting",
        "C. The Account record includes invoice roll-up summary fields",
        "D. The Account is included in the workflow on theInvoice Object",
      ],
      answer: "C",
      title: "Question 3",
      explanation: "",
    },
    {
      content:
        "Universal Containers would like to automatically assign a specific permission set to new users. How can this requirement be met? Choose 2 Answers",
      options: [
        "A. Create an approval process on theUser object to assign a permission set",
        "B. Create a flow on the user object to assign a permission set.",
        "C. Create a lightning process on the user object to launch a flow.",
        "D. Create a workflow rule on the User object to assign a permission set.",
      ],
      answer: "B,C",
      title: "Question 4",
      explanation: "",
    },
    {
      content:
        "UVC wants to optimize routes for its traveling service personnel. What is recommended solution?",
      options: [
        "A. Use geolocation fields with Distance and Geolocation formulas",
        "B. Configure routing options in a custom object",
        "C. Use an AppExchange partner product",
        "D. Configure Territory hierarchy and rules for routes based on territory",
      ],
      answer: "C",
      title: "Question 5",
      explanation: "",
    },
    {
      content:
        "Which three standard component typesare available in the Lightning App Builder? Choose 3 answers",
      options: [
        "A. Filter Text",
        "B. Report details",
        "C. Plain Text",
        "D. Rich Text",
        "E. Recent Items",
      ],
      answer: "B,D,E",
      title: "Question 6",
      explanation: "",
    },
    {
      content:
        'The Director of Customer Service wants to know when agents are overwhelmed with high-priority items in the support queue. The Director wants to receive a notification when a new case is open with the status of "New" for more than four business hours. Which automation process could be used to accomplish this? Choose 2 answers',
      options: [
        "A. Visual workflow",
        "B. Lightning Process Builder",
        "C. Scheduled Apex",
        "D. Escalation rules",
      ],
      answer: "B,D",
      title: "Question 7",
      explanation: "",
    },
    {
      content:
        "Sales and marketing users have similar roles, and use similar record types. However sales uses 3 different fields and marketing has 5, how do you set up processesthe most efficiently (something like that)",
      options: [
        "A. 1 page layout, 2 record types, 2 profiles",
        "B. 2 page layouts, 1 record type, 2 profiles",
        "C. 1 page layout, 1 record type, 1 profile",
        "D. 2 page layouts, 2 record types, 2 profiles",
      ],
      answer: "B",
      title: "Question 8",
      explanation: "",
    },
    {
      content:
        "A business user wants a quick way to edit a record's status and enter a custom due date field from the record's feed in Salesforce1 Mobile App.What could be used to accomplish this?",
      options: [
        "A. Custom Action",
        "B. Custom Button",
        "C. Custom URL formula field",
        "D. Custom quick access link",
      ],
      answer: "A",
      title: "Question 9",
      explanation: "",
    },
    {
      content:
        "UVC sells to three different types of organizations. Partner, Enterprise, and Small Business. Some of the information collected about each organization overlaps; however, there are alsounique attributes to each type of organization that need to be tracked, some of which are required. What Solution meets these requirements?",
      options: [
        "A. Three custom objects for the three organization types, each with custom fields that pertain to that type of organization",
        "B. Three Account record types, each with its own page layout to display the relevant fields for that type of organization",
        "C. A Partner Community for partner organization records, and two lead record types for Enterprise and Small Business organizations",
        "D. Three different sections on an Account page layout, with each section displaying the relevant fields for that organization.",
      ],
      answer: "B",
      title: "Question 10",
      explanation: "",
    },
    {
      content:
        "What may occur if workflow rules arere-evaluated after a field change by a field update? Choose 2 answers",
      options: [
        "A. A recursive loop potentially results in exceeding organizational limits.",
        "B. Workflow rules trigger more workflow rules to bere-evaluated.",
        "C. Cross-object workflow rules result in re-evaluation after field change.",
        "D. Workflow rules trigger validation rules on field updates",
      ],
      answer: "A,B",
      title: "Question 11",
      explanation: "",
    },
    {
      content:
        "What is a true statement in regard to managing access to reports and dashboards?\nChoose 2 answers",
      options: [
        "A. Users that want to grant access to personal folders can manually share a personal folder with a user or publicgroup.",
        'B. Users with the "Manage Public Reports" and "Create and Customize Reports"permissions can create custom reports that all users canview.',
        'C. Users with the "Manage Public Reports" permission can organize reports by creating custom report folders and sending invitations to usersto access them.',
        "D. Users must have certain permissions to access public, hidden, or shared folders.",
      ],
      answer: "B,C",
      title: "Question 12",
      explanation: "",
    },
    {
      content:
        "CoolAir Conditioners has been using Service Cloud to manage cases, but are now considering using it to manage field service jobs. They would like to track field service activity and assignment to technicians. What is the recommended solution to meet these requirements? Choose 1 answer.",
      options: [
        "A. Install an AppExchange product that provides Field Service functionality",
        "B. Utilize the standard objects Work Order and Work Order Line Items",
        "C. Extend the Service Cloud configuration to handle Field Service cases",
        "D. Use realtime API integration to connect Salesforce with an external field service application",
      ],
      answer: "B",
      title: "Question 13",
      explanation: "",
    },
    {
      content: "When do you refresh a Sandbox?",
      options: [
        "A. After a major update",
        "B. When a Production user is added",
        "C. Before UAT",
        "D. Option 4",
      ],
      answer: "C",
      title: "Question 14",
      explanation: "",
    },
    {
      content:
        "Which of the following is true in regards to the User Acceptance testing (UAT) step in a large enterprise application lifecycle? Choose 2 answers.",
      options: [
        "A. UAT is typically the last step before deploying changes to production",
        "B. UAT comes before Integration testing",
        "C. UAT can be used for end user testing or training",
        "D. UAT come after Integration Testing",
      ],
      answer: "C,D",
      title: "Question 15",
      explanation: "",
    },
    {
      content:
        "What is a true statement in regards to creating custom report types?",
      options: [
        "A. When the primary object is a custom object and is deleted, then the report type and any reports created from it must be deleted manually.",
        "B. The detail object in a master- detail relationship cannot be added as a secondary object on a custom report type",
        "C. Once a report type is saved with a standard or custom primary object, the primary object cannot be changed for that report type.",
        "D. Any object can be chosen unless the object is no visible to the person creating thereport type through security settings",
      ],
      answer: "C",
      title: "Question 16",
      explanation:
        "Explanation\n You can choose from all objects-even those you don't have permission to view. This lets you buildreport types for a variety of users.Once you save a report type, you can't change the primaryobject.If the primary object on a report type is a custom object, and the custom object is deleted, then thereport type and any reports created from it are automatically deleted.If you remove an object from a report type, all references to that object and its associated objectsare automatically removed from reports and dashboards based on that type.\n http://help.salesforce.com/apex/htviewhelpdoc?id=reports_defining_report_types.htm&language=en_us",
    },
    {
      content:
        "Sales rep at universal containers use salesforce on their mobile devices. They want a way to add new contacts quickly and then follow up later to complete the additional information necessary. What mobile should an app builder recommend?",
      options: [
        "A. Use path and set pre-defined values",
        "B. Add a compact layout to contacts",
        "C. Build a global action to create contacts",
        "D. Customize the mobile menu to move contacts to the top",
      ],
      answer: "A",
      title: "Question 17",
      explanation: "",
    },
    {
      content:
        "An App Builder at UVC would like to prevent users from creating new records on an Account related list by overriding standard buttons. Which two should the App Builder consider before overriding standard buttons?",
      options: [
        "A. Standard buttons can be changed on lookup dialogs, list views, and search result layouts",
        "B. Standard buttons can be overridden with a Visualforce page",
        "C. Standard buttons that are not available for overrides can still be hidden on page layouts",
        "D. Standard buttons can be overridden, relocated on the detail page, and relabeled",
      ],
      answer: "B,C",
      title: "Question 18",
      explanation: "",
    },
    {
      content:
        "Universal containers wants to provide a different view for its users when they access an Account record in Salesforce1 instead of the standard web version. How can this be accomplished? Choose 2 answers",
      options: [
        "A. By adding Visualforce page to the mobile cards section",
        "B. By adding a mobile layout and assigning it to a profile.",
        "C. By adding quick actions in the publisher section.",
        "D. By adding actions in the Salesforce1 action bar section.",
      ],
      answer: "A,B",
      title: "Question 19",
      explanation: "",
    },
    {
      content: "Where can a custom button be placed? Choose 3 answers",
      options: [
        "A. On the Custom List View",
        "B. On the User Object",
        "C. On aPerson Account",
        "D. On a Web-to-Case form",
        "E. On a related list",
      ],
      answer: "A,C,E",
      title: "Question 20",
      explanation: "",
    },
    {
      content:
        "A junction object has two Master-Detail relationships. What happens to a junction object record when either associated master record is deleted?",
      options: [
        "A. The master record can't be deleted if it has a child record.",
        "B. The record is deleted and placed in the recycle bin.",
        "C. The record is permanently deleted andcan't be restored.",
        "D. The look-up field on the junction object record is cleared.",
      ],
      answer: "B",
      title: "Question 21",
      explanation: "",
    },
    {
      content:
        "The director of marketing has asked the app builderto create a formula field that tracks how many days have elapsed since a contact was sent a marketing communication. The director is only interested in whole units.\nWhich function should be used to calculate the difference?",
      options: ["A. Datevalue()", "B. Today()", "C. Date()", "D. Now()"],
      answer: "B",
      title: "Question 22",
      explanation: "",
    },
    {
      content:
        "What tools you need to use to migrate Metadata to Two Different Production Orgs? (3)",
      options: [
        "A. Force.Com Migration Tool",
        "B. Data Loader",
        "C. Force.Com IDE",
        "D. Unmanaged Package",
        "E. Change Set",
      ],
      answer: "A,C,D",
      title: "Question 23",
      explanation: "",
    },
    {
      content:
        "Which statement is true when defining a Create custom action for the Contact object? Choose 2 answers",
      options: [
        "A. The create action will respect validation rules",
        "B. The create action will ignore field requirements",
        "C. The create action can pre-define Contact field values",
        "D. The create action allows a user toselect a record type",
      ],
      answer: "A,D",
      title: "Question 24",
      explanation: "",
    },
    {
      content:
        "The App Builder at Universal Containers has been asked to ensure that the Amount field is populated when the stage is set to Closed Won. What can beused to meet this requirement?",
      options: [
        "A. Lightning Process Builder",
        "B. Validation Rule",
        "C. Workflow",
        "D. Approval Process",
      ],
      answer: "C",
      title: "Question 25",
      explanation: "",
    },
    {
      content:
        "Universal containers has a custom object that has a N:M relationship with opportunityLineItem carrying price and amount information. In order to compute total amounts and total prices per Opportunity using Rollup summary fields, what field type will you use.",
      options: [
        "A. Lookup",
        "B. Junction",
        "C. Crossobject",
        "D. Master-Detail",
      ],
      answer: "D",
      title: "Question 26",
      explanation: "",
    },
    {
      content:
        "Universal Containers has a requirement that an Opportunity should have a field showing the value of its associatedaccount's billing state. This value should not change after the Opportunity has been created. What is the recommended solution to configure this automation behavior?",
      options: [
        "A. Roll-up-summary field",
        "B. Workflow",
        "C. Apex",
        "D. Formula Field",
      ],
      answer: "B",
      title: "Question 27",
      explanation: "",
    },
    {
      content:
        "Universal Containers has two teams: Sales and Services. Both teams interact with the same records. Sales users use ten fields on the Account record. Services usersuse three of the same fields as the Sales team, but also have five of their own, which the sales team does not use. What is the minimum configuration necessary to meet this requirement?",
      options: [
        "A. One profile, two record types, one page layout",
        "B. Two profiles, tworecord types, two page layouts",
        "C. One profile, one record type, one page layout.",
        "D. Two profiles, one record type, two page layouts",
      ],
      answer: "B",
      title: "Question 28",
      explanation:
        "Explanation- Record types allow you to offer different business processes, picklist values, and page layouts todifferent users based on their profiles.",
    },
    {
      content: "What is recommended to refresh a full sandbox?",
      options: [
        "A. Within 3 hours of when it is needed.",
        "B. Whenever a new production user is added.",
        "C. After a major production release.",
        "D. After a UAT sign-off",
      ],
      answer: "C",
      title: "Question 29",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants to standardize their business logic. They want to ensure that the workflow order is guaranteed to be the same each time. Which feature can be used to accomplishthis? Choose 2 answers.",
      options: [
        "A. Workflow",
        "B. Lightning Process Builder",
        "C. Visual Workflow",
        "D. Chatter Actions",
      ],
      answer: "B,C",
      title: "Question 30",
      explanation: "",
    },
    {
      content:
        "UVC is importing 1000 records into salesforce. They want to avoid any duplicaterecords from being created during the import. How can these requirement met?",
      options: [
        "A. Manually merge",
        "B. Run duplicate check",
        "C. Include a column in the import file that has other record name",
        'D. Use "prevent duplicates"',
      ],
      answer: "C",
      title: "Question 31",
      explanation: "",
    },
    {
      content:
        "A manager wants to calculate the number of days since an account was last contacted through email. Which field type should be used to accomplish this?",
      options: ["A. Date", "B. Number", "C. Roll-up Summary", "D. Formula"],
      answer: "D",
      title: "Question 32",
      explanation: "",
    },
    {
      content: "Where custom buttons can be placed? (Choose 3)",
      options: [
        "A. Record page",
        "B. Web to case",
        "C. Personal account",
        "D. Related object",
      ],
      answer: "A,C,D",
      title: "Question 33",
      explanation: "",
    },
    {
      content:
        "Universal containers uses a private Account sharing model. They have a Process Improvement team with representatives from multiple departments that need s to view all accounts that have been flagged as problem accounts. How should thisteam be granted access to the records?",
      options: [
        "A. Option 5",
        "B. Use a record owner sharing rule that is shared with the Process Improvement role",
        "C. Use a criteria-basedsharing rule where the account are shared with the Process Improvement public group",
        "D. User a record Owner sharing rule that is shared with the Process Improvement public group",
        "E. Write a trigger to use Apex Managed Sharing to grant access with the Process Improvement team",
      ],
      answer: "C",
      title: "Question 34",
      explanation: "",
    },
    {
      content:
        "Universal Container needs to add an additional recipient to a workflow email alert that is fired from the case object. What type of field could be added to the case object to allow the additional desired recipient on the email alert? Choose 2 Answers",
      options: [
        "A. Lookup field",
        "B. Email Field",
        "C. Text Field",
        "D. Formula field",
      ],
      answer: "B,C",
      title: "Question 35",
      explanation: "",
    },
    {
      content:
        "An app builder has created a report for sales people to view records from the custom object, some users have complained that they are unable tosee all of the appropriate records. What steps should be taken to ensure data visibility within the report? Choose 3 Answers",
      options: [
        "A. Check organization-wide defaults",
        "B. Check Sharing rules",
        "C. Check the report folder sharing settings",
        "D. Check the user's profile for object settings.",
        "E. Check reports filter",
      ],
      answer: "A,B,D",
      title: "Question 36",
      explanation: "",
    },
    {
      content:
        "Universal Containers has created the custom objects Candidate and Interview in Salesforce to track candidates and interviews respectively. The company wants to track the total number of interviews a candidate has gone through on the candidate record without writing any code. How can app builder accomplish this requirements?\nChoose 2 answers",
      options: [
        "A. Use a formula field on the candidate record to show the total number of interviews",
        "B. Use a master-detail relationship between the Candidate and the Interview objects.",
        "C. Use a lookup relationship between the Candidate and Interview objects",
        "D. Use a roll-up summary field on the candidate record to show the total number of interviews.",
      ],
      answer: "B,D",
      title: "Question 37",
      explanation: "",
    },
    {
      content:
        "Which two features can be used to allow users to access Visual Workflows? Choose 2answers",
      options: [
        "A. Quick Action",
        "B. Invoked by Process",
        "C. Custom Button",
        "D. Visual Workflow Launcher",
      ],
      answer: "A,C",
      title: "Question 38",
      explanation: "",
    },
    {
      content:
        "Universal Containers is setting up salesforce for the first time. Management wants the sales and marketing teams to have different navigation names in the salesforce1 mobile app.Which option is available to an app builder to satisfy the requirement?",
      options: [
        "A. Create public groups for sales and marketing and create mobile navigation menus for each group.",
        "B. Create roles for sales and marketing and assign a custom homepage layout for each role.",
        "C. Create mobile navigation menus for both the sales and marketing profiles.",
        "D. Create sales and marketing profiles to ensure read access to different objects",
      ],
      answer: "D",
      title: "Question 39",
      explanation: "",
    },
    {
      content:
        "Universal Containers needsto send an Outbound Message to an external system whenrecord has been updated.\nWhat is recommended feature to meet this requirement?",
      options: [
        "A. Process Builder",
        "B. Lightning Connect",
        "C. Visual Workflow",
        "D. Workflow",
      ],
      answer: "D",
      title: "Question 40",
      explanation: "",
    },
    {
      content: "What is a use case for approval processes?",
      options: [
        "A. Roll-up summary fields can only be created on the master of a master-detail relationship.",
        "B. Multi-select picklist fields can be used in the field column of roll-up summary filters.",
        "C. The roll-up summary field inherits the field - level security of the child object",
        "D. Changes to the value of a roll-up summary fieldcolumn of roll-up summary filters.",
      ],
      answer: "A,C",
      title: "Question 41",
      explanation: "",
    },
    {
      content: "Which object can be member of a campaign? (Choose 2)",
      options: ["A. Lead", "B. Account", "C. Contact", "D. Opportunity"],
      answer: "A,C",
      title: "Question 42",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants to streamline its data capture process by linking fields together. They wish to do this so that the available value on dependents fields are driven by value selected on controlling fields. Which consideration supports the stated requirements? Choose 3 answers",
      options: [
        "A. Multi select picklist can be dependent picklist but not controlling fields",
        "B. The import wizard only allows value to be imported into a dependent picklist if they match the appropriate controlling field",
        "C. Checkbox fields can be controlling fields but not dependent fields",
        "D. Standard and custom picklist fields can be dependent fields.",
        "E. Custom picklist field can be either controlling or dependent field",
      ],
      answer: "A,C,E",
      title: "Question 43",
      explanation: "",
    },
    {
      content:
        "Universal Containers manages internal projects by department using a customobject calledprojects. Only employees in the project's respective departmentshould have view access to all of the department's project records. If an employeechanges job roles and moves to another department, the employee should nolonger have access to the projects within their former department. How can theserequirements be met assuming the organization wide default for projects is set to private? (Choose 2)",
      options: [
        "A. Create a criteria-based sharing rule using the project's department that grants access to users by roles.",
        "B. Create a criteria-based sharing rule using the project's department that grants access to users by profiles.",
        "C. Create a criteria-based sharing rule using the project's department that grants access to users by permission sets.",
        "D. Create a criteria-based sharing rule using the project's department that grants access to users by public groups.",
      ],
      answer: "A,D",
      title: "Question 44",
      explanation: "",
    },
    {
      content:
        "Which statement is true when a new full sandbox is created? Choose 2 answers",
      options: [
        "A. Chatter data will be copied to the sandbox by default",
        "B. Default email deliverability is set to system email only",
        "C. Usernames will be modified uniquely for that sandbox",
        "D. User's email addresses will not be modified.",
      ],
      answer: "B,D",
      title: "Question 45",
      explanation: "",
    },
    {
      content: "Which objects can be members of a campaign? Choose 2 answers",
      options: ["A. Contact", "B. Account", "C. Opportunity", "D. Lead"],
      answer: "A,D",
      title: "Question 46",
      explanation:
        "Explanation\n Campaign members are created from lead, contact, or person account records. Salesforce provides a variety of ways in which you can manage your campaign members. You can add and updateup to 50,000 campaign members at a time through lead, contact, and person account reports; you can search for and add or edit multiple leads and contacts from the Manage Members page; you can add an unlimited number of leads and contacts using a CSV importfile; or you can add members to a campaign one at a time from contact or lead detail pages.",
    },
    {
      content:
        "In order to delete theOpportunities, Universal Containers would like sales reps to submit requests for approval from their sales manager. What can be used to meet these requirements?",
      options: [
        "A. Approval Process with Apex Trigger.",
        "B. Two-step Approval process.",
        "C. Process Builder with Submit for Approval action",
        "D. Approval Process with Time-Dependent workflow action.",
      ],
      answer: "A",
      title: "Question 47",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants to rollout new product bundles with several pricing options. Pricing options include product-price bundles, account specific pricing and more. Which product satisfies the needs?",
      options: [
        "A. Workflow on Opportunity/Opportunity Product",
        "B. Formula fields on Opportunity/Opportunity Product",
        "C. Lightning process builder",
        "D. Custom AppExchange-app for product-pricing",
      ],
      answer: "C",
      title: "Question 48",
      explanation: "",
    },
    {
      content:
        "In a real estate app, if a listing is sold, all related inspections for the listing must be cancelled. What business logic feature best caters to this requirement? Choose 1 answer.",
      options: [
        "A. Use Visual Workflow to define a flow to iterate through the related inspection records and update the status to 'Cancelled'",
        "B. Use a trigger to update the status of the related inspection records when the listing status is updated B.\n         Use Process Builder to define a process action to update related records based on the listingstatus change",
        "C. Create a standard workflow on the Listing object with a workflow record update action on the related Inspectionrecords",
      ],
      answer: "A",
      title: "Question 49",
      explanation: "",
    },
    {
      content:
        "A customer service representative at Cloud Kicks wants to be able to collectinformation from customers using a prompts. Once the questions are completed, an email should be sent to the customer with a feedback form.\nWhat should be used to accomplish this?",
      options: [
        "A. Apex Trigger",
        "B. Einstein Next Best Action",
        "C. Process Builder",
        "D. Lightning Flow",
      ],
      answer: "D",
      title: "Question 50",
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
      title: "Question 51",
      explanation: "",
    },
    {
      content:
        "Which type of relationships can be defined with external objects? Choose 2 answers",
      options: [
        "A. External Lookup",
        "B. External Master-Detail",
        "C. Indirect Lookup",
        "D. Cross-Ogranization Lookup",
      ],
      answer: "A,C",
      title: "Question 52",
      explanation: "",
    },
    {
      content:
        "In order to create an App Launcher component in Lightning what must an admin do?",
      options: [
        "A. Purchase a license for the Lightning App Builder.",
        "B. Contact Salesforceto have the component activated for the Lightning App Builder.",
        "C. Join the pilot Lightning App Builderteam.",
        "D. Navigate to Setup-Customize-User Interface to enable the component for the Lightning App Builder.",
      ],
      answer: "B",
      title: "Question 53",
      explanation: "",
    },
    {
      content:
        "Universal containers would like to use a chatter group for their mergers and acquisition team to collaborate on potential new projects. This group should not be visible for non-members to see or join, and can be accessed by invite only. Which chatter Group type should the App Builder recommend?",
      options: [
        "A. Private Group",
        "B. Unlisted Group",
        "C. Public Group",
        "D. Member Group",
      ],
      answer: "B",
      title: "Question 54",
      explanation: "",
    },
    {
      content:
        "Which of the following can be source of report chart placed in page layout?(Choose 2)",
      options: ["A. Joined", "B. Matrix", "C. Summary", "D. Tabular"],
      answer: "B,C",
      title: "Question 55",
      explanation: "",
    },
    {
      content:
        "universal containers has several large customers that sell their products through dealers. Each customer and dealer has an individual rep who worksdirectly with uc and each is billed separately. How can an app builder implement these requirements?",
      options: [
        "A. Create both customer and dealer as accounts, add each rep as a contact on the corresponding account and create an account hierarchy.",
        "B. Create a single account record, add each rep as a contact and create a custom dealer object",
        "C. Create a single parent record, add each rep as a contact to the parent account and add each dealer as a child record",
        "D. Create both customer and dealer as accounts, create account teams on each account and associate the dealer records with the parent account.",
      ],
      answer: "A",
      title: "Question 56",
      explanation: "",
    },
    {
      content:
        "Universal Containers has a customer base where many customers have thesame or similar company names.\nWhich functionality should be configured to improve an end user`s search experience?\nChoose 2 answers",
      options: [
        "A. Update the account search layouts view filtersettings.",
        "B. Update the account search layouts search results columnsdisplayed.",
        "C. Update the account search filter fields.",
        "D. Update the account search layouts accounts tab columns displayed.",
      ],
      answer: "B,C",
      title: "Question 57",
      explanation: "",
    },
    {
      content: "Which two rules can be configured for the Opportunity object?",
      options: [
        "A. Escalation Rule",
        "B. Workflow Rule",
        "C. Validation Rule",
        "D. Assignment Rule",
      ],
      answer: "B,C",
      title: "Question 58",
      explanation: "",
    },
    {
      content:
        "An App Builder wants to deploy a new version of an auto launched flow to production in an active stateso that the new functionality Is immediately available to users What should the App Builder rake Into consideration when planning the deployment?",
      options: [
        "A. Verify there is an Apex test that provides test coverage for the Flow.",
        "B. Manually activate the Flow after deployment",
        "C. Grant user access to the Flow.",
        "D. Include the Process Builder calling the Flow In the deployment",
      ],
      answer: "A",
      title: "Question 59",
      explanation: "",
    },
    {
      content:
        "UVC needs to send an outbound message to an external system when arecord has been updated. What is the recommended feature to meet this requirement?",
      options: [
        "A. Process Builder",
        "B. Lightning Component",
        "C. Visual Workflow",
        "D. Workflow",
      ],
      answer: "D",
      title: "Question 60",
      explanation: "",
    },
    {
      content:
        "Universal Insurance would like to highlight on a report claims that have been open for more than 30 days.What feature could be used for this? Choose 1 answer.",
      options: [
        "A. Bucket Highlighting",
        "B. Field Highlighting",
        "C. Conditional Highlighting",
        "D. Report Highlighting",
      ],
      answer: "C",
      title: "Question 61",
      explanation: "",
    },
    {
      content:
        "A sales manager would like to look at an account record and view charts of all of the related open opportunities. Closed/won opportunities, and open cases. How many report charts can be added to theaccount page layout to meet this requirement?",
      options: ["A. 3", "B. 2", "C. 1", "D. 4"],
      answer: "B",
      title: "Question 62",
      explanation:
        "Explanation\n You can have two report charts per page.\n You can only add report charts from the enhanced page layout editor. The mini console and the original page layout editor are notsupported.\n On detail pages, users can refresh up to 100 report charts every 60 minutes.\n Your organization can refresh up to 3,000 report charts every 60 minutes.\n https://help.salesforce.com/HTViewHelpDoc?id=reports_embed_limits.htm&language=en_US",
    },
    {
      content:
        "Universal containers has included its orders as an external data object into Salesforce. You want to create a relationship between Accounts and the Orders object (one-to-many relationship) leveraging a key field for account which is on both external object and Account. Which relationship do you create:",
      options: [
        "A. Indirect Lookup Relationship",
        "B. Lookup Relationship",
        "C. Master Detail Relationship",
        "D. External Lookup Relationship",
      ],
      answer: "A",
      title: "Question 63",
      explanation: "",
    },
    {
      content:
        "When a user creates a record by using an object-specific create action, what feed item for that record appears?(Choose 3 answers)",
      options: [
        "A. In the Chatter feed of the user who created the record",
        "B. As the first entry in the feed for the new record",
        "C. In the feed for the record on which the new record was created",
        "D. In the Chatter feed of the first user who follows the record on which the record was created",
        "E. In the user profile feed for all users who can view the record",
      ],
      answer: "A,B,C",
      title: "Question 64",
      explanation: "",
    },
    {
      content:
        "Which use case can be accomplished using a custom link?(Select 3)",
      options: [
        "A. To a process to update current record",
        "B. To create a record page",
        "C. To external system using data of salesforce",
        "D. To create a custom visual flow",
        "E. Navigate to Apex trigger",
      ],
      answer: "A,B,C",
      title: "Question 65",
      explanation: "",
    },
    {
      content:
        "The customer service team at Universal containers uses a custom Project object to track their customer projects. An App builder needs tocreate a relationship between the project object and the related client Account record. A private sharing model is in place for both Accounts and projects. Which statement is true when creating an Account lookup field on the Project object? Choose 2 answers",
      options: [
        "A. Cross-object field updates between the Project and Account records are not supported",
        "B. The account lookup field on the project record can be made optional.",
        "C. The account record can include roll-up summary field with data from the project records",
        "D. Users can only delete Accounts if they have access to related projects records",
      ],
      answer: "B,D",
      title: "Question 66",
      explanation: "",
    },
    {
      content:
        "Which type of relationship can be defined with external objects? Choose 2 Answers",
      options: [
        "A. Cross Organizational Look-up",
        "B. External Master-Detail",
        "C. External Look-Up",
        "D. Indirect Look-Up",
      ],
      answer: "C,D",
      title: "Question 67",
      explanation: "",
    },
    {
      content:
        "You are explaining to another developer, who is not familiar with Force.com, how an external ID field can be used to work with data coming from another system. What features would you mention? Choose 3 answers.",
      options: [
        "A. An external ID is indexed andincreases query performance",
        "B. An external ID is used to represent an identifier for a record from an external system",
        "C. An external ID can be either text, number or email data types",
        "D. External IDs are not case sensitive",
      ],
      answer: "A,B,C",
      title: "Question 68",
      explanation: "",
    },
    {
      content:
        "Universal container needs to update a field on an account when an opportunity stage is changed to close lost.\nWhat can be used to accomplish this requirement? Choose 2",
      options: [
        "A. Approval Process",
        "B. Workflow Rule",
        "C. Assignment Rules",
        "D. Lightning Process Builder",
      ],
      answer: "B,D",
      title: "Question 69",
      explanation: "",
    },
    {
      content:
        "The Director of Marketing has asked the AppBuilder to create a formula fieldthat tracks how many days have elapsed since a contact was sent a marketingcommunication. The director is only interested in whole units.",
      options: ["A. Date()", "B. Now()", "C. Today()", "D. Datevalue()"],
      answer: "C",
      title: "Question 70",
      explanation: "",
    },
    {
      content:
        "Which two statements are true about record types? Choose two answers",
      options: [
        "A. They allow different page layouts and mandatory fields",
        "B. They can be used to control user role hierarchy",
        "C. They allow different picklist values for allpicklist fields",
        "D. They can be enabled by profile and permission set",
      ],
      answer: "A,C",
      title: "Question 71",
      explanation: "",
    },
    {
      content:
        "Universal Containers (UC) uses a custom object to track expense reports. UC wants to automatically post updates on a record's feed whenever an expense report has been approved Whichsocial feature can be used to accomplish this?",
      options: [
        "A. Feed Quick action",
        "B. Auto-response rule",
        "C. Approval process",
        "D. Feed tracking",
      ],
      answer: "D",
      title: "Question 72",
      explanation: "",
    },
    {
      content:
        "Which three Salesforce functionalities are ignored when process field updates in workflow rules and approval processes?",
      options: [
        "A. Validation Rules",
        "B. Field-Level Security",
        "C. Multiple currencies",
        "D. Record type picklist value assignments",
        "E. Decimal places and character limits",
      ],
      answer: "A,B,D",
      title: "Question 73",
      explanation: "",
    },
    {
      content:
        "What determines whether a user can create a new record using a specific record type?",
      options: [
        "A. Page Layout",
        "B. Sharing",
        "C. Field level security",
        "D. Profile",
      ],
      answer: "D",
      title: "Question 74",
      explanation: "",
    },
    {
      content:
        "Universal containers require different fields to be filled out at each stage of the opportunity sales process. what configuration steps san anapp builder use to meet this requirement?",
      options: [
        "A. Create a process builder to prompt the user for field information",
        "B. Set page layout required fieldsbased on the current stage",
        "C. Add the path component to the lightning record page",
        "D. Define record types and page layouts for each stage",
      ],
      answer: "C",
      title: "Question 75",
      explanation: "",
    },
    {
      content:
        "universal containers has several new fields they requested for the opportunity product object. What should an app builder be able to configure using a formula field ?",
      options: [
        "A. A hyperlink to the parent account of the parent opportunity.",
        "B. A Rich text area field that uses HTML to bold certain characters",
        "C. A combination of the opportunity`s text and a description fields.",
        "D. A mix of functions and concatenation of 10 account fields and 10 opportunity fields.",
      ],
      answer: "B",
      title: "Question 76",
      explanation: "",
    },
    {
      content:
        "What should be done to provide managers access to records of which they are not the owner in a private sharing model?",
      options: [
        "A. Set the Manger field for each User Record on the Manager's team.",
        'B. Create a Manager profile and select the "View My Teams Data" option.',
        'C. Create a Manager Permission setand select the "View All Data" option',
        "D. Define a Role Hierarchy and use the Grant Access Using Hierarchies option",
      ],
      answer: "C",
      title: "Question 77",
      explanation: "",
    },
    {
      content:
        "Which is correctly referencing a field on the Force.com custom object Position__c?",
      options: [
        "A. [!Position__c.Status__c]",
        "B. [&Position__c.Status__c]",
        "C. {&Position__c.Status__c}",
        "D. {!Position__c.Status__c}",
      ],
      answer: "D",
      title: "Question 78",
      explanation: "",
    },
    {
      content:
        "UVC uses a custom object to track open job positions. They would liketo automatically post updates on a record's feed whenever a position stage is changed. Which social feature can be used to accomplish this.",
      options: [
        "A. Workflow rule",
        "B. Feed tracking",
        "C. Auto response rule",
        "D. Feed quick Action",
      ],
      answer: "B",
      title: "Question 79",
      explanation: "",
    },
    {
      content:
        "UVC uses a custom object to track expense reports. They would like to automatically post updates in a record's feed whenever an expense report has been approved. Which social feature can be used to accomplish this?",
      options: [
        "A. Feed Quick Action",
        "B. Auto-response rule",
        "C. Feed Tracking",
        "D. Approval Process",
      ],
      answer: "C",
      title: "Question 80",
      explanation: "",
    },
    {
      content:
        "UC wants to standardize their business logic. They want to ensure that workflow order is guaranteed to the same each time. Which feature can be used to accomplish this? Select 2",
      options: [
        "A. Chatter actions",
        "B. Workflow",
        "C. Lighting processbuilder",
        "D. Visual workflow",
      ],
      answer: "C,D",
      title: "Question 81",
      explanation: "",
    },
    {
      content:
        "Universal Containers would like to show different picklist values to different groups of user in a custom picklistfield. What should be configured?",
      options: [
        "A. Page Layouts",
        "B. Record Types",
        "C. Permission sets",
        "D. Field-level security",
      ],
      answer: "B",
      title: "Question 82",
      explanation: "",
    },
    {
      content:
        "A custom field contains a feedback score which is on a scale of one to five. Endusers would like a visual indicator of one to five stars based on the number found inthe feedback scorecustomer field.",
      options: ["A. Formula", "B. Number", "C. Text", "D. Use a custom image"],
      answer: "A",
      title: "Question 83",
      explanation: "",
    },
    {
      content:
        "Which values must be defined when creating a new Opportunity stage? Choose 3",
      options: [
        "A. Amount",
        "B. Probability",
        "C. Type",
        "D. Close date",
        "E. Forecast category",
      ],
      answer: "A,D,E",
      title: "Question 84",
      explanation: "",
    },
    {
      content:
        'Universal Containers would like to collaborate with its customers within Salesforce, and has decided to enable the "Allow Customer Invitations" Chatter setting. What permission is granted to Customers when invited to Chatter Group?',
      options: [
        "A. The ability to interact with members of their groups",
        "B. The ability to request access to public groups",
        "C. The ability to invite members to groups of which they are a member",
        "D. The ability to@mention accounts of which they are a contact.",
      ],
      answer: "A",
      title: "Question 85",
      explanation: "",
    },
    {
      content:
        "The VP of Sales has requested that Account Site information should be visible onall Opportunity records.\nWhat is the recommendedsolution to meet this requirement?",
      options: [
        "A. Cross-Object Formula Field",
        "B. Workflow Rule",
        "C. Roll-Up Summary Field",
        "D. Process Builder",
      ],
      answer: "A",
      title: "Question 86",
      explanation: "",
    },
    {
      content: "In order to delete a record smth needs to be approved.",
      options: [
        "A. Approval with Apex Trigger",
        "B. Approval with Workflow",
        "C. Option 3",
        "D. Option 4",
      ],
      answer: "A",
      title: "Question 87",
      explanation: "",
    },
    {
      content:
        "The app builder at UVC has been asked to ensure that the amount field ispopulated when the stage is set to closed won. What can be used to meet this requirement?",
      options: [
        "A. Validation rule",
        "B. Workflow",
        "C. Approval process",
        "D. Lighting process builder",
      ],
      answer: "B",
      title: "Question 88",
      explanation: "",
    },
    {
      content:
        "Universal container would like to use a chatter group for their mergers and acquisitions team to collaborate on potential new projects. This project should not be visible for non-members to see or join, and can be accessed by invites only.",
      options: [
        "A. Unlisted group",
        "B. Member group",
        "C. Public group",
        "D. Private group",
      ],
      answer: "A",
      title: "Question 89",
      explanation: "",
    },
    {
      content:
        "An App Builder is loading the data into salesforce. To link the new records back to the legacy system, a field will be used to track the legacy ID on the account object. For future data loads this ID will be used when upserting records. Which field attribute should be selected? Choose 2 answers",
      options: [
        "A. External ID",
        "B. Required",
        "C. Text (encrypted)",
        "D. Unique",
      ],
      answer: "A,B",
      title: "Question 90",
      explanation: "",
    },
    {
      content:
        "What salesforce functionalityis ignored when processing field updates in workflow rules and approval processes? Choose 3 answers",
      options: [
        "A. Validation Rules",
        "B. Field Level Security",
        "C. Record Type Picklist Value Assignments",
        "D. Multiple Currencies",
        "E. Decimal Places and Character Limits",
      ],
      answer: "A,B,C",
      title: "Question 91",
      explanation: "",
    },
    {
      content:
        "Which two standard Lightning page components are available in the Lightning App Builder?\nChoose 2 answers",
      options: [
        "A. Highlights Panel",
        "B. Accordion",
        "C. Path",
        "D. Quick Text",
      ],
      answer: "A,B",
      title: "Question 92",
      explanation: "",
    },
    {
      content:
        "What is true regarding the user interface for external object data? Choose 1 answer.",
      options: [
        "A. External object data can be accessed via custom tabs",
        "B. External object data can be accessed via detail pages",
        "C. All of the above",
        "D. Chatter Feeds can be enabled on external object pages",
        "E. External object data can be accessed via lists views",
      ],
      answer: "C",
      title: "Question 93",
      explanation: "",
    },
    {
      content:
        "universal containers has 20 different workflows on the opportunity object. To ensure that updates are processing properly for all field updatesuc has the re-evaluete workflow rules after field change checkbox checked. Recently after adding a new workflow, users have reported receiving errors about workflow limits.\nWhat should a app builder look at so address this?",
      options: [
        "A. Talk to a developer about apex code issues",
        "B. Number of workflows per object limits",
        "C. Workflows that cause each other to fire back and forth recursively",
        "D. Workflows on other objects that are being re triggered",
      ],
      answer: "C",
      title: "Question 94",
      explanation: "",
    },
    {
      content: "Field type conversion. Which of the following are true: (2)",
      options: [
        "A. Information can be lost when converting from text area (rich) to text area (long)",
        "B. Data can be lost when converting from simple picklist to multi picklist",
        "C. Data can be lost when converting from auto-number to text",
        "D. Data can be lost when converting from number to currency (assuming that field lengths are identical)",
      ],
      answer: "A,C",
      title: "Question 95",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants to test code against a subject of production data that is under 5 GB. They want to refresh a sandbox weekly. Which type of sandbox should be used?",
      options: [
        "A. Full Sandbox",
        "B. Developer Sandbox",
        "C. Partial Copy Sandbox",
        "D. Developer Pro Sandbox",
        "E. Enterprise Sandbox",
      ],
      answer: "C",
      title: "Question 96",
      explanation: "",
    },
    {
      content:
        "Manage at Universal Containers want a quick to create additional accounts to form a hierarchy froma parent account record. They want to auto-populate five fields based on the parent to make it easier for users to create the child accounts quickly.",
      options: [
        "A. Custom Global Quick Action",
        "B. Custom action on Account",
        "C. Custom Global Quick Account.",
        "D. Custom link on Account",
      ],
      answer: "C",
      title: "Question 97",
      explanation: "",
    },
    {
      content:
        "At Universal Containers, the Account object has a Master-Detail relationship with an Invoice custom object.\nTheApp Builder would like to change to a lookup field, but is not able to do so. What could be causing this?",
      options: [
        "A. The Invoice records have existing values in the Account.",
        "B. The invoice must have at least one Master-Detail field for reporting.",
        "C. The Account record includes Invoice roll-up summary fields.",
        "D. The Account is included in the workflow on the Invoice object.",
      ],
      answer: "C",
      title: "Question 98",
      explanation: "",
    },
    {
      content:
        "An app builder would like to streamline the userexperience by reflecting summarized calculations of specific fields on various objects. Which field types could be used in roll-up summary fields to accomplish this?\nChoose 3 answers",
      options: [
        "A. Percent",
        "B. Date",
        "C. Checkbox",
        "D. Time",
        "E. Currency",
      ],
      answer: "A,B,E",
      title: "Question 99",
      explanation: "",
    },
    {
      content:
        "A new custom object is being created with a private sharing setting. The business wants to share individual records with specific people or group of people on a case by case basis. What options does the business user have to manually share individual records? Choose 3 answers",
      options: [
        "A. Roles",
        "B. Public Groups",
        "C. Profiles",
        "D. Users",
        "E. Permission Sets",
      ],
      answer: "A,B,D",
      title: "Question 100",
      explanation: "",
    },
    {
      content:
        "The CRM Manager at Universal Containers has requested that a custom text field be converted to a picklist in order to promote better data hygiene. What needs to be considered before changing the field type? Choose 2 answers",
      options: [
        "A. All data should be backed up before converting a text field.",
        "B. Field references will be removed in Visualforce pages",
        "C. Existing list views that reference the field may be deleted.",
        "D. Changing a field type will remove existing field history.",
      ],
      answer: "A,C",
      title: "Question 101",
      explanation: "",
    },
    {
      content:
        "The app builder at Universal Containers has been asked to ensure that the Country field on the Account object Is captured as the two letter abbreviation How can the app builder satisfy this requirement?",
      options: [
        "A. Create a validation rule to set values using an external data source",
        "B. Create a workflow rule that only allows the expected format.",
        "C. Create a workflow rule to setvalues using an external data source.",
        "D. Create a validation rule that only allows the expected format",
      ],
      answer: "C",
      title: "Question 102",
      explanation: "",
    },
    {
      content:
        "Universal containers uses a custom called reviews to capture information generated by interviews during the candidate process. The review records are visible to any user that has access to the related custom candidate record. The VP of human resources wants the comment field on the review to be private to anyone outside of the HR department.",
      options: [
        "A. Create a page layout with the field for HR users and another page layout without the field for all other users",
        "B. Create a sharing rule to share the filed with the VP of HR with role and subordinates",
        "C. Create a page layout with the field and use field level security to hide the from all others users",
        "D. Create an apex sharingrule to share the field with users that have HR in their role",
      ],
      answer: "C",
      title: "Question 103",
      explanation: "",
    },
    {
      content:
        "Universal container sales reps can modify fields on an opportunity until it isclosed. Only the sales operations team can modify the post close follow up date andpost close followup comments fields. How to make this happen?",
      options: [
        "A. Use field-level security on page layouts to restrict editing fields",
        "B. Use multiple record types, page layouts, and profiles",
        "C. Use record types with field sets and restrict editing fields using field-level security",
        "D. Use field-level security to mark fields as read-only on the sales profile",
      ],
      answer: "A",
      title: "Question 104",
      explanation: "",
    },
    {
      content:
        "What option is available to an App Builder when defining an object-specific Create Record custom action?\nChoose 2 answers",
      options: [
        "A. Pre-Defining field values on the target object.",
        "B. Redirecting the end user to the detail page of the target object",
        "C. Specifying the fields and layout of the action.",
        "D. Allowing the end user to choose the record type",
      ],
      answer: "C,D",
      title: "Question 105",
      explanation: "",
    },
    {
      content:
        "Universal containers allows users to create standard reports on demand. What are two considerations users should be aware of when creating a new report?",
      options: [
        "A. Reports created from standard report types are available to all users",
        "B. The report type determines the types of records and fields that will be available",
        "C. Users can require that child objects exist for parent records using a cross filter",
        "D. Records will be available in the in the report regardless of security permissions",
      ],
      answer: "B",
      title: "Question 106",
      explanation: "Explanation",
    },
    {
      content:
        "Describe the ramifications of field updates and potential for recursion for the following scenario: If a field update for Rule1 triggers Rule2, and a field update for Rule2 triggers Rule1",
      options: [
        "A. When the second trigger is saved a ImminentLoop Error message will be displayed and the workflow rule update will not save",
        "B. The updates create a loop and the org be blocked until the admin resolves the issue",
        "C. Loop is allowed to run 25 times within one hour. If it does not end on its own the process will be stopped by R&D",
        "D. The updates create a loop and the org limits for workflow time triggers per hour will likely be violated",
      ],
      answer: "D",
      title: "Question 107",
      explanation: "",
    },
    {
      content:
        "An app builder has been asked to provide users a way to identify a contact's \"preferred contact method\" directly on the contact record. users need to be able to identify whether a phone number or an email, is the contact's preferred communication method.Which field type will allow the app builder to accomplish this with the fewest fields possible?",
      options: ["A. Checkboxes", "B. Picklist", "C. Formula", "D. Email"],
      answer: "B",
      title: "Question 108",
      explanation: "",
    },
    {
      content:
        "What are two reason to create an unmanaged package? Choose 2 answers",
      options: [
        "A. Distributing upgradeable components to other Salesforce org",
        "B. Distributing open-source projects on the AppExchange.",
        "C. Publishing an application for sale on theAppExchange",
        "D. Deploying from a Developer Edition environment",
      ],
      answer: "A,B",
      title: "Question 109",
      explanation: "",
    },
    {
      content:
        "What is true when changing the following field types? (Choose 3)",
      options: [
        "A. No data is lost when changing Picklist to Multipicklist",
        "B. Data can be lost when changing from Rich Text to Long Text",
        "C. Data is lost when changing Number to Currency",
        "D. Rollup summary fields will stop calculate if Master Detail is changed to lookup",
        "E. No data is lost when converting Text to auto number",
      ],
      answer: "A,B,E",
      title: "Question 110",
      explanation: "",
    },
  ],
});
