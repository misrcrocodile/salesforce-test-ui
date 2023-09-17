window.testContent = window.testContent || [];
var testId = "Salesforce.Platform-App-Builder";
var testName = "Salesforce.Platform-App-Builder";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "Salesforce.Platform-App-Builder.v2023-03-06.q159",
  content: [
    {
      content:
        "UVC wants to show different picklist values to different groups of users in a custom picklist field. What should be configured?",
      options: [
        "A. Permission sets",
        "B. Record Types",
        "C. Field-level security",
        "D. Page Layout",
      ],
      answer: "B",
      title: "Question 1",
    },
    {
      content:
        "Which two standard Lightning page components are available in the Lightning App Builder?Choose 2 answers",
      options: [
        "A. Quick Text",
        "B. Accordion",
        "C. Highlights Panel",
        "D. Path",
      ],
      answer: "B,C",
      title: "Question 2",
    },
    {
      content: "What can be done after workflow field re-evaluation?",
      options: [
        "A. Trigger another rule",
        "B. Option 1",
        "C. Out of hour limit (loop)",
        "D. Invalid data",
      ],
      answer: "C",
      title: "Question 3",
    },
    {
      content:
        "Cloud Kicks (CK) switched to Lightning Experience and started using Chatter across its global workforce to support its fast-paced sales cycle. CK loves Chatter but struggle with gathering feedback from core team members, including understanding who is available to respond.Which two ways could CK use Chatter to solve this problem?Choose 2 answers",
      options: ["A. Topics", "B. Streams", "C. Out of Office", "D. Polls"],
      answer: "C,D",
      title: "Question 4",
    },
    {
      content:
        "What is true regarding person accounts in Salesforce? (Choose two.)",
      options: [
        "A. Leads cannot be converted to Person Accounts.",
        "B. Person accounts can have contacts.",
        "C. Person Accounts can be enabled in setup.",
        'D. Person accounts do not have a "Parent Account" field.',
        "E. Person accounts do not have the Account Hierarchy feature.",
      ],
      answer: "D,E",
      title: "Question 5",
    },
    {
      content:
        'Universal Containers uses a custom object to track Site Visits. When the status of a Site Visit is changed from"In Progress" to "On Hold", the business wants the Site visit owner to be automatically assigned to an "On Hold" queue. Which capability can be used to accomplish this?',
      options: [
        "A. Action",
        "B. Assignment Rule",
        "C. Visual Workflow",
        "D. Apex Trigger",
      ],
      answer: "B",
      title: "Question 6",
    },
    {
      content:
        "Sales Managers want to be automatically notified any time there rs a change to an Opportunity Close Date and want these changes to be tracked on the Opportunity.Which two configurations should an app builder recommend?Choose 2 answers",
      options: [
        "A. Enable Feed Tracking on Opportunities.",
        "B. Activate Historical Trending for Opportunities.",
        "C. Create an Opportunity outbound message.",
        "D. Use Process Builder on Opportunities and a Chatter post action.",
      ],
      answer: "B,D",
      title: "Question 7",
    },
    {
      content:
        "At Universal Containers, the Account object has a Master-Detail relationship with an Invoice custom object.The App Builder would like to change to a lookup field, but is not able to do so. What could be causing this?",
      options: [
        "A. The invoice must have at least one Master-Detail field for reporting.",
        "B. The Account is included in the workflow on the Invoice object.",
        "C. The Invoice records have existing values in the Account.",
        "D. The Account record includes Invoice roll-up summary fields.",
      ],
      answer: "D",
      title: "Question 8",
    },
    {
      content:
        "Universal con has purchased a lighting component on the appExchange. Where can that component be utilized? (Choose 2)",
      options: [
        "A. Lightning process builder",
        "B. Salesforce lighting app",
        "C. Visual workflow",
        "D. Salesforce1 mobile app",
      ],
      answer: "B,D",
      title: "Question 9",
    },
    {
      content:
        "Cloud Kicks wants to set up a new opportunity approval process and execute various action items based on the initial submission.Which three action types should an app builder use in the approval process?Choose 3 answers",
      options: [
        "A. Invocable Process Builder",
        "B. Invocable Flow",
        "C. Task",
        "D. Email Alert",
        "E. Outbound Message",
      ],
      answer: "C,D,E",
      title: "Question 10",
    },
    {
      content:
        "AMAZON.MoreIntentis comparable to which of the following Amazon Alexa intents? (Choose two.)",
      options: [
        "A. AMAZON.ResumeIntent",
        "B. AMAZON.ScrollDownIntent",
        "C. AMAZON.RepeatIntent",
        "D. AMAZON.ScrollRightIntent",
        "E. AMAZON.LoopOnIntent",
      ],
      answer: "B,D",
      title: "Question 11",
    },
    {
      content:
        "Which setting is available to customize the salesforce1 mobile app for branding ? Select 3",
      options: [
        "A. Notification and search icon",
        "B. Background color on loading page",
        "C. Header and search bar color",
        "D. The image on loading page",
        "E. Action bar color",
      ],
      answer: "B,C,D",
      title: "Question 12",
    },
    {
      content: "What is true about Case Assignment rules? (Choose three.)",
      options: [
        "A. They allow cases to be assigned to queues.",
        "B. They allow more than one active assignment rule.",
        "C. Create a complex business logic assignment rules.",
        "D. Predefined Case Team is mandatory for each entry rule.",
        "E. They allow more than one rule entry per rule.",
      ],
      answer: "A,C,E  Explanation ",
      title: "Question 13",
    },
    {
      content: "How can you control object level access? (Choose two.)",
      options: [
        "A. Permission Sets",
        "B. OWD",
        "C. Profiles",
        "D. Groups",
        "E. Roles",
      ],
      answer: "A,C",
      title: "Question 14",
    },
    {
      content:
        "Which statement is true about converting a lead? Choose 3 answers",
      options: [
        "A. Administrators may choose whether to enforce validation rules & triggers",
        'B. The lead\'s most recent campaign record is automatically applied to the "PRIMARY campaign source" field on the opportunity',
        "C. The system automatically maps standard lead fields to standard account, contact, and opportunity fields.",
        "D. Multi-select picklist values on lead records overwrite values on the contact's corresponding field.",
        "E. Users can convert leads that are associated with an active approval process.",
      ],
      answer: "A,B,C",
      title: "Question 15",
    },
    {
      content:
        "Universal Containers has a Lightning record page that supports both the mobile app and desktop. An app builder has downloaded a custom Lightning component from AppExchange, but users are unable to view the component on mobile devices.What can be the issue?",
      options: [
        "A. The record page needs to be activated.",
        "B. The component needs to be activated.",
        "C. The component has been developed for Desktop Pages.",
        "D. The record page template is unable to support mobile devices.",
      ],
      answer: "D",
      title: "Question 16",
    },
    {
      content: "Actions on a Lightning Page allow you to __________.",
      options: [
        "A. Send e-mail, create a task, and create or update records.",
        "B. Clone records, add users, and assign permissions.",
        "C. Send e-mail, send outbound messages, and launch a flow.",
        "D. Send e-mail and delete or clone records.",
      ],
      answer: "A",
      title: "Question 17",
    },
    {
      content:
        "Universal Containers has two types of applicants, hourly and salary. There are separate record types for each.While all members of the human resource department need to be able to view all applicant records, only the hiring Manager and VP of HR should be able to create salary applicant records.What should the app builder recommend to meet this requirement?",
      options: [
        "A. Configure the hourly record type as the default and instruct non-management users to accept the default record type.",
        "B. Update the org-wide default to private and create a sharing rule for the role of recruiting manager.",
        'C. Remove "create" permission for the salary applicant object for everyone except the manager and VP.',
        "D. Create a permission set containing the salary record type and assign it to the appropriate users.",
      ],
      answer: "D",
      title: "Question 18",
    },
    {
      content:
        "The recruiters at Universal Containers have requested that the candidate list view match the look and feel of the employee referral web page. What can be used to accomplish this?",
      options: [
        "A. Record Types",
        "B. Publisher Actions",
        "C. Visualforce",
        "D. Page Layouts",
      ],
      answer: "C",
      title: "Question 19",
    },
    {
      content:
        "Universal Container installs an unmanaged package. Which of the following are true: (choose 2)",
      options: [
        "A. Unmanaged packages don't have a version number",
        "B. Components of unmanaged packages can be edited",
        "C. Unmanaged packages have a namespace prefix",
        "D. Tests are executed during deployment",
        "E. Unmanaged packages can be upgraded",
      ],
      answer: "B,D",
      title: "Question 20",
    },
    {
      content:
        "What are the limitations of Schema Builder when creating a custom object?",
      options: [
        'A. "Save" should be clicked each time a new object, field, or relationship is created.',
        "B. Custom fields can be added to any custom objects, excluding formula field types.",
        "C. Fields and relationships can be created, but they will be unable to add the fields to the page layout from the canvas.",
        "D. Relationships can be made to any custom objects, but any relationships to standard objects should be built in Lightning Object Manager.",
      ],
      answer: "C",
      title: "Question 21",
    },
    {
      content:
        "Universal Containers wants to display a message when an opportunity close date is less than 60 days in the future.What can be used to display different text on the opportunity record depending on the number of days until the target close date?",
      options: [
        "A. Formula Field",
        "B. Process Builder",
        "C. Workflow Update",
        "D. Sales Process",
      ],
      answer: "A",
      title: "Question 22",
    },
    {
      content:
        "Universal Containers (UC) uses a custom object to track expense reports. UC wants to automatically post updates on a record's feed whenever an expense report has been approved Which social feature can be used to accomplish this?",
      options: [
        "A. Auto-response rule",
        "B. Feed Quick action",
        "C. Approval process",
        "D. Feed tracking",
      ],
      answer: "D",
      title: "Question 23",
    },
    {
      content:
        "Universal Containers (UC) tracks Account locations in Zip Code, a custom text field with a validation rule to enforce proper formatting of the US ZIP+4 code for UC's orders.What formula should the app builder create on Order to display only the first five digits of Zip Code from the parent Account?",
      options: [
        "A. TEXT(Account.Zip_Code_c, 5)",
        "B. BEGINS(Account.Zip_Code_r, 5)",
        "C. LEFT(Account.Zip_Code_c, 5)",
        "D. LPAD(Account.Zip_Code__r, 5)",
      ],
      answer: "C",
      title: "Question 24",
    },
    {
      content:
        "Due to the complexity of the Universal Containers sandbox release schedule and requirements, it is advised that change sets are used as often as possible to migrate from one environment to another.Which three common items can an app builder move when using a change set?Choose 3 answers",
      options: [
        "A. Standard fields",
        "B. Web-to-lead",
        "C. Custom field",
        "D. Custom object",
        "E. Apex class",
      ],
      answer: "C,D,E",
      title: "Question 25",
    },
    {
      content:
        "You have Custom Object A & Custom Object B; a record has to be created on B once certain criteria is met A.How can this be achieved?",
      options: [
        "A. Lightning Process on Object B",
        "B. APEX Trigger on Object B",
        "C. Workflow Rule",
        "D. Lightning Process on Object A",
      ],
      answer: "D",
      title: "Question 26",
    },
    {
      content:
        'A custom object named Assignment has a private sharing setting that grants access using hierarchies. The organization has a role hierarchy where the "Specialist" role reports to a "Manager" role which reports to a "Director" role. The director role is at the top of the role hierarchy. A user who is the manager role creates a new Assignment record. Who can send this record?',
      options: [
        "A. The record owner and the managers in their hierarchy",
        "B. The record owner and the directors in their hierarchy.",
        "C. The record owner and those above the specialist role in their hierarchy",
        "D. The record owner and the specialists in their hierarchy",
      ],
      answer: "B",
      title: "Question 27",
    },
    {
      content:
        "Which statement is true about an external id field? Choose 2 answers",
      options: [
        "A. The field must contain at least one number and at least one letter",
        "B. The field must be unique since duplicates are not allowed within salesforce",
        "C. The field can be unique based on case-sensitive or case-insensitive values.",
        "D. The field contains unique records identifiers from a system outside of salesforce",
      ],
      answer: "B,D",
      title: "Question 28",
    },
    {
      content:
        "An app builder has downloaded a component from the AppExchange successfully; however, they are unable to add it to the Lightning home page.Which two reasons can be preventing the app builder from being able to add the custom component?Choose 2 answers",
      options: [
        "A. The component is tagged for record pages instead of home pages and is not showing up in the App Builder.",
        "B. My Domain must be deployed to add custom components to the page with the App Builder.",
        "C. The component requires a developer permission to add it to the page with the App Builder.",
        "D. A custom tab must be created to add custom components to the page with the App Builder.",
      ],
      answer: "A,B",
      title: "Question 29",
    },
    {
      content: "Need to change ownership when field of custom object changed.",
      options: [
        "A. Apex trigger",
        "B. Assignment Rule",
        "C. Visual Workflow",
        "D. Validation Rule",
      ],
      answer: "B",
      title: "Question 30",
    },
    {
      content:
        "Universal Containers has a single Contact Lightning record page. A component takes up a lot of room on the page and is NOT needed by users with a Marketing profile.What should the app builder use to solve this Issue?",
      options: [
        "A. AppExchange",
        "B. Component visibility filter",
        "C. Field-level security",
        "D. Detail page layouts",
      ],
      answer: "B",
      title: "Question 31",
    },
    {
      content:
        "UC wants to standardize their business logic. They want to ensure that workflow order is guaranteed to the same each time. Which feature can be used to accomplish this? Select 2",
      options: [
        "A. Lighting process builder",
        "B. Workflow",
        "C. Visual workflow",
        "D. Chatter actions",
      ],
      answer: "A,C",
      title: "Question 32",
    },
    {
      content:
        "Universal Containers provide access to Salesforce for their sales, service and marketing teams. Management wants to ensure that when user login, their home tab provides access to links and documentation that are specifically relevant to their job function. How can this requirement be met?",
      options: [
        "A. Expose specific elements within a home page custom component determined by role.",
        "B. Create separate home page custom components and layouts; assign to user by profile.",
        "C. Create separate home page custom components and layouts; assign to user by role.",
        "D. Exposespecific elements within a home page custom component determined by profile.",
      ],
      answer: "B",
      title: "Question 33",
    },
    {
      content:
        "The convert button on leads should NOT appear until the lead status picklist is set to a qualified. What should an app builder suggest to meet these requirements?",
      options: [
        "A. Page layout, record types, process builder field update",
        "B. Custom button, validation rule, record types",
        "C. Picklist dependency, page layouts, record types",
        "D. Process builder field update, quick action, record type",
      ],
      answer: "A",
      title: "Question 34",
    },
    {
      content:
        "Universal Con conducts evaluations of their sales reps using a custom objectconsisting of numerical scores and executive comments. The company wants toensure that only the sales reps, their managers,and their managers' executives canview the rep's evaluation record, but the reps should not be able to view the executive comment field on their review.",
      options: [
        "A. Using custom settings, manage field access with record types and pagelayouts",
        "B. Use a private sharing model granting access using customer settings, managefield access with page layouts and field-level security",
        "C. Use a private sharing model granting record across using hierarchy, managefield access with record types and field-level security",
        "D. Hierarchy, manage field access with field-level security",
      ],
      answer: "D",
      title: "Question 35",
    },
    {
      content:
        "An app builder wants to create a new field using Schema Builder.Who will get access to the new field by default?",
      options: [
        "A. Internal profiles",
        "B. All profiles",
        "C. Standard profiles",
        "D. No profiles",
      ],
      answer: "A",
      title: "Question 36",
    },
    {
      content:
        "At Universal Containers, the Account object has a Master-Detail relationship with an Invoice custom object.The app builder would like to change this to a lookup field, but is not able to do so.What could be causing this?",
      options: [
        "A. The Account record includes Invoice roll-up summary fields.",
        "B. The Account is included in the workflow on the Invoice object.",
        "C. The Invoice must have at least one Master-Detail field for reporting.",
        "D. The Invoice records have existing values in the Account.",
      ],
      answer: "A",
      title: "Question 37",
    },
    {
      content:
        "What is the name for an object that enables a many-to-many relationship between two other objects?",
      options: [
        "A. Child Object",
        "B. Junction Object",
        "C. Schema Object",
        "D. Parent Object",
        "E. Connector Object",
      ],
      answer: "B",
      title: "Question 38",
    },
    {
      content:
        "In order to create an App Launcher component in Lightning what must an admin do?",
      options: [
        "A. Join the pilot Lightning App Builder team.",
        "B. Purchase a license for the Lightning App Builder.",
        "C. Navigate to Setup-Customize-User Interface to enable the component for the Lightning App Builder.",
        "D. Contact Salesforce to have the component activated for the Lightning App Builder.",
      ],
      answer: "D",
      title: "Question 39",
    },
    {
      content:
        "What is a true statement regarding roll-up summary fields? Choose 2 answers",
      options: [
        "A. The roll-up summary field inherits the field - level security of the child object",
        "B. Roll-up summary fields can only be created on the master of a master-detail relationship.",
        "C. Multi-select picklist fields can be used in the field column of roll-up summary filters.",
        "D. Changes to the value of a roll-up summary field column of roll-up summary filters.",
      ],
      answer: "A,B",
      title: "Question 40",
    },
    {
      content:
        "the services manager would like to highlight case age. When a case is new, they would like to see a green flag on the case record. The flag should be yellow if the case is still open after one day. Tha flag should be red when cases are open after three days. Which two options should an app builder use to implement this requirements? Choose 2",
      options: [
        "A. VLOOKUP",
        "B. Quick action",
        "C. Image",
        "D. Formula field",
      ],
      answer: "C,D",
      title: "Question 41",
    },
    {
      content:
        "A company wants to invite customers to chatter, what options can a customerhave?",
      options: [
        "A. @mention other members of the group",
        "B. Request to join public groups",
        "C. Invite other members to groups they are a part of",
        "D. Add them on FB,Twitter and Instagram",
      ],
      answer: "C",
      title: "Question 42",
    },
    {
      content:
        "Cloud Kicks (CK) wants to simultaneously delete a Suppliere record and all Supplierltem__c records if a partnership ends with a supplier.What solution could an app builder use to meet the requirement?",
      options: [
        "A. Many-to-many",
        "B. Master-detail",
        "C. Indirect lookup",
        "D. Hierarchical",
      ],
      answer: "A",
      title: "Question 43",
    },
    {
      content:
        "Customer services wish to analyze how many open cases there are each day over a period of time.How can they achieve this?",
      options: [
        "A. Summary Reports",
        "B. Matrix Reports",
        "C. Analytic Snapshot",
        "D. Tabular Reports",
      ],
      answer: "C",
      title: "Question 44",
    },
    {
      content:
        "At Ursa Major Solar there is a requirement for a new field called Planet Details on the Planet object where users can write detailed descriptions that can include pictures and links.What field type should the app builder utilize to fulfill this requirement?",
      options: [
        "A. Long Text Area",
        "B. URL",
        "C. Rich Text Area",
        "D. Multi-Select Picklist",
      ],
      answer: "A",
      title: "Question 45",
    },
    {
      content:
        "What should be done to provide managers access to records of which they are not the owner in a private sharing model?",
      options: [
        "A. Set the Manger field for each User Record on the Manager's team.",
        'B. Create a Manager profile and select the "View My Teams Data" option.',
        'C. Create a Manager Permission set and select the "View All Data" option',
        "D. Define a Role Hierarchy and use the Grant Access Using Hierarchies option",
      ],
      answer: "C",
      title: "Question 46",
    },
    {
      content:
        "universal containers has several new fields they requested for the opportunity product object. What should an app builder be able to configure using a formula field ?",
      options: [
        "A. A hyperlink to the parent account of the parent opportunity.",
        "B. A Rich text area field that uses HTML to bold certain characters",
        "C. A mix of functions and concatenation of 10 account fields and 10 opportunity fields.",
        "D. A combination of the opportunity`s text and a description fields.",
      ],
      answer: "A",
      title: "Question 47",
    },
    {
      content: "Which objects can be members of a campaign? Choose 2 answers",
      options: ["A. Contact", "B. Account", "C. Opportunity", "D. Lead"],
      answer:
        "A,D  Explanation Campaign members are created from lead, contact, or person account records. Salesforce provides a variety of ways in which you can manage your campaign members. You can add and update up to 50,000 campaign members at a time through lead, contact, and person account reports; you can search for and add or edit multiple leads and contacts from the Manage Members page; you can add an unlimited number of leads and contacts using a CSV import file; or you can add members to a campaign one at a time from contact or lead detail pages. ",
      title: "Question 48",
    },
    {
      content:
        "In Salesforce Classic, Universal Containers provides access to Salesforce for their Customer Support and Sales Operations teams. Management wants to ensure that when users log in, their home tab provides access to links and documentation that are specifically relevant to their team's function.How can this requirement be met?",
      options: [
        "A. Create three home page custom components and three layouts; assign user by profile.",
        "B. Create two home page custom components and two layouts; assign to users by profile.",
        "C. Create three home page custom components and three layouts; assign users by team.",
        "D. Create two home page custom components and two layouts; assign to users by team.",
      ],
      answer: "B",
      title: "Question 49",
    },
    {
      content:
        "A junction object has two Master-Detail relationships. What happens to a junction object record when either associated master record is deleted?",
      options: [
        "A. The record is deleted and placed in the recycle bin.",
        "B. The master record can't be deleted if it has a child record.",
        "C. The look-up field on the junction object record is cleared.",
        "D. The record is permanently deleted and can't be restored.",
      ],
      answer: "A",
      title: "Question 50",
    },
    {
      content:
        "An app builder needs to change the data types of a few custom fields. The appbuilder is not able to delete and recreate any of the fields, nor modify any apexcode. Which data type change will require the app builder to perform additionalsteps in order to retain existing functionality?",
      options: [
        "A. Changing the data type of a field used in a report from text to an encrypted field",
        "B. In lead conversion from number to text",
        "C. In an apex class from number to text",
        "D. As an external ID from number to text",
      ],
      answer: "B",
      title: "Question 51",
    },
    {
      content:
        "Cloud Kicks's management team frequently travels and wants to approve requests from their team on the go via Chatter.Where would an app builder enable this ability?",
      options: [
        "A. Approval Process Settings",
        "B. Chatter Feed Tracking",
        "C. Chatter Settings",
        "D. Object Settings",
      ],
      answer: "C",
      title: "Question 52",
    },
    {
      content:
        "The VP of Account Management at Universal Containers has requested that all Contacts' mailing postal codes match the associated account's shipping postal code.How can this be enforced using validation rules?",
      options: [
        "A. Create a validation rule using a Not Equal operator.",
        "B. Create a validation rule using a Compare operator.",
        "C. Create a validation rule using the DISTANCE() function.",
        "D. Create a validation rule using the GEOLOCATION() function.",
      ],
      answer: "A",
      title: "Question 53",
    },
    {
      content:
        "Universal con needs a field on the account to track how many opportunitiesare closing within the next 30 days.What can be used?",
      options: [
        "A. Process builder",
        "B. Workflow rule",
        "C. Roll-up summary field",
        "D. Apex code",
      ],
      answer: "D",
      title: "Question 54",
    },
    {
      content: "When do you need to refresh a sandbox? (Choose two.)",
      options: [
        "A. Anytime.",
        "B. When you are done making changes to it.",
        "C. 3 Hours before you need it.",
        "D. When modification have been made to the production organization.",
      ],
      answer: "B,D",
      title: "Question 55",
    },
    {
      content:
        "Universal Containers would like to automatically assign a specific permission set to new users. How can this requirement be met? Choose 2 Answers",
      options: [
        "A. Create a workflow rule on the User object to assign a permission set.",
        "B. Create an approval process on the User object to assign a permission set",
        "C. Create a lightning process on the user object to launch a flow.",
        "D. Create a flow on the user object to assign a permission set.",
      ],
      answer: "A,C",
      title: "Question 56",
    },
    {
      content:
        "Universal Containers manages leads in a Lead qualification queue where sales reps can accept ownership of the Lead. Campaign members are required to have a sales owner.What validation rule should an app builder configure?",
      options: [
        "A. NOT(ISNEW() && ISBLANK(Lead.Owner:Queue.Id))",
        "B. AND(ISNEW(), ISBLANK(Lead.Owner:User.Id))",
        "C. NOT( ISBLANK(Lead.Owner:Queue.Id))",
        "D. AND( ISBLANK(Lead.Owner.Id) )",
      ],
      answer: "C",
      title: "Question 57",
    },
    {
      content:
        "Universal Containers wants to test code against a subset of production data that is under 5 GB. Additionally, Universal Containers would like to refresh this sandbox every weekend.What type of sandbox should be used to accomplish this?",
      options: [
        "A. Developer Pro",
        "B. Developer",
        "C. Full",
        "D. Partial Copy",
      ],
      answer: "D",
      title: "Question 58",
    },
    {
      content:
        "Universal Containers has deployed custom tabs to Production via changes sets, without including the profile settings or permission sets.What is the settings for the visibility of custom tabs?",
      options: [
        "A. Custom tabs are default on for all uses.",
        "B. Custom tabs are hidden for all users.",
        "C. Custom tabs are default off for all users.",
        "D. Custom tabs are NOT deployed.",
      ],
      answer: "B",
      title: "Question 59",
    },
    {
      content:
        "Which three standard component types are available in the Lightning App Builder? Choose 3 answers",
      options: [
        "A. Filter Text",
        "B. Rich Text",
        "C. Report details",
        "D. Plain Text",
        "E. Recent Items",
      ],
      answer: "B,D,E",
      title: "Question 60",
    },
    {
      content:
        "A business user wants a quick way to edit a record's status and enter a custom due date field from the record's feed in Salesforce1 Mobile App. What could be used to accomplish this?",
      options: [
        "A. Custom quick access link",
        "B. Custom Button",
        "C. Custom URL formula field",
        "D. Custom Action",
      ],
      answer: "D",
      title: "Question 61",
    },
    {
      content:
        "Which capability allows an app builder to grant object-level access? (Choose two.)",
      options: [
        "A. Assigning a user a Permission Set that allows Read and Edit access to an object.",
        "B. Assigning a user a Profile that allows Read access to an object.",
        "C. Assigning a user a Role that allows Read access to an object.",
        "D. Assigning a user a Public Group that allows for Read and Edit access to an object.",
      ],
      answer: "A,B",
      title: "Question 62",
    },
    {
      content:
        "Universal container has included its orders as an external data object into Salesforce. You want to create a relationship between Accounts and the Orders object (one-to-many relationship) leveraging a key field for account which is on both external object and Account.Which relationship do you create?",
      options: [
        "A. Lookup Relationship",
        "B. Hierarchical Relationship",
        "C. Master Detail Relationship",
        "D. Indirect Lookup Relationship",
        "E. External Lookup Relationship",
      ],
      answer: "D  Explanation ",
      title: "Question 63",
    },
    {
      content:
        "A developer wants to make sure that all fields on his new custom object are editable to all profiles.What should be checked on field level security?",
      options: [
        "A. Enable Visible and Read-Only.",
        "B. Enable Visible but Disable Read-Only.",
        "C. Disable Visible and Read-Only.",
        "D. Disable Visible but Enable Read-Only.",
      ],
      answer: "B",
      title: "Question 64",
    },
    {
      content:
        "Universal Containers has two teams: Sales and Services. Both teams interact with the same records. Sales users use ten fields on the Account record. Services users use three of the same fields as the Sales team, but also have five of their own, which the sales team does not use. What is the minimum configuration necessary to meet this requirement?",
      options: [
        "A. One profile, one record type, one page layout.",
        "B. Two profiles, two record types, two page layouts",
        "C. Two profiles, one record type, two page layouts",
        "D. One profile, two record types, one page layout",
      ],
      answer: "B",
      title: "Question 65",
    },
    {
      content:
        "Which values must be defined when creating a new Opportunity stage? Choose 3",
      options: [
        "A. Amount",
        "B. Close date",
        "C. Type",
        "D. Probability",
        "E. Forecast category",
      ],
      answer: "C,D,E",
      title: "Question 66",
    },
    {
      content:
        "Universal Containers wants to test code against a subset of production data that is under 5 GB. Additionally, Universal Containers would like to refresh this sandbox every weekend.What type of sandbox should be used to accomplish this?",
      options: [
        "A. Partial Copy",
        "B. Developer",
        "C. Full",
        "D. Developer Pro",
      ],
      answer: "A",
      title: "Question 67",
    },
    {
      content:
        "Which three statements are true about Master-Detail relationships? (Choose three.)",
      options: [
        "A. SF displays a waiting page after you request to change a master detail to a look-up or vice versa.",
        "B. You can't convert it if there is a roll-up summary field.",
        "C. A look-up can be converted to a master detail if there are existing records with null values.",
        "D. Converting a look-up to master detail changes the OWD to Controlled by Parent.",
      ],
      answer: "A,B,D",
      title: "Question 68",
    },
    {
      content:
        "Universal Containers wants to build a recruiting app that allows for multiple positions to appear on customobjects websites and postings. UC requires a report that shows the related custom objects of postings.Which two items should an app builder configure to implement this?",
      options: [
        "A. Configure a postings object with lookup field to both positions and websites",
        "B. Configurea postings object with master detail field to both positions and websites",
        "C. Create two new custom report type",
        "D. Utilize the standard report type",
      ],
      answer: "C",
      title: "Question 69",
    },
    {
      content: "Which two are capabilities of record types? (Choose two.)",
      options: [
        "A. Displaying different page layouts.",
        "B. Having multiple record types on one record.",
        "C. Filtering picklist values.",
        "D. Displaying different field labels.",
      ],
      answer: "A,C",
      title: "Question 70",
    },
    {
      content:
        "UC would like to embed a chart of all related opportunities, by stage, on the account details page. Which type of report should use",
      options: [
        "A. A tabular report on the opportunity object",
        "B. A tabular report on the account object",
        "C. A summary report on the opportunity object",
        "D. A summary report on the account object",
      ],
      answer: "C",
      title: "Question 71",
    },
    {
      content:
        "Universal Containers is setting up salesforce for the first time. Management wants the sales and marketing teams to have different navigation names in the salesforce1 mobile app. Which option is available to an app builder to satisfy the requirement?",
      options: [
        "A. Create public groups for sales and marketing and create mobile navigation menus for each group.",
        "B. Create sales and marketing profiles to ensure read access to different objects",
        "C. Create mobile navigation menus for both the sales and marketing profiles.",
        "D. Create roles for sales and marketing and assign a custom homepage layout for each role.",
      ],
      answer: "B",
      title: "Question 72",
    },
    {
      content:
        "Which three statements are true about Master-Detail relationships? (Choose three.)",
      options: [
        "A. A Master-Detail relationship cannot be created if the custom object on the detail side already contains data.",
        "B. Deleting a master record in a Master-Detail relationship deletes all related detail records.",
        "C. Master-Detail relationships can convert to a lookup relationship if no roll-up summary fields exist on the master object.",
        "D. Master-Detail relationships cannot be converted to a look-up relationship.",
        "E. Standard objects can be on the detail side of a custom object in a Master-Detail relationship.",
      ],
      answer: "A,B,C",
      title: "Question 73",
    },
    {
      content:
        "Ursa Major Solar wants to provide sales console users with an Incredible experience, with the most-used components easily accessible at all times.What solution can enable reps to see and access these components from anywhere within the app without leaving the pagere where the team is working?",
      options: [
        "A. Home page",
        "B. Utility bar",
        "C. Global actions",
        "D. Favorites",
      ],
      answer: "B",
      title: "Question 74",
    },
    {
      content:
        "Universal Containers has two types of customer support processes: Platinum and Diamond. The app builder created separate record types for each process on the Case object. The customer support team should not be able to create new cases with the Diamond record type.How can this requirement be met?",
      options: [
        "A. Update the organization-wide defaults to private.",
        "B. Remove the ability for the support team to create new case records.",
        "C. Make the record type hidden to all users and then use sharing rules to share it.",
        "D. Update the profile to remove the Diamond record type from the support team.",
      ],
      answer: "D",
      title: "Question 75",
    },
    {
      content:
        "Ursa Major Solar wants to convert the relationship between Galaxy and Star from a lookup relationship to a master-detail relationship so each Galaxy record can be equipped with a roll-up summary count of Star records.Which two considerations should be made?Choose 2 answers",
      options: [
        "A. The Galaxy object has fewer than two existing master-detail relationships.",
        "B. The Galaxy object is required to contain existing roll-up summary fields.",
        "C. The Star records are all required to have an existing value in their Galaxy field.",
        "D. The Star object has fewer than two existing master-detail relationships.",
      ],
      answer: "C,D",
      title: "Question 76",
    },
    {
      content: "What is recommended to refresh a fullsandbox?",
      options: [
        "A. After a major production release.",
        "B. Whenever a new production used is added.",
        "C. Within 3 hours of when it is needed.",
        "D. After UAT sign-off.",
      ],
      answer: "D",
      title: "Question 77",
    },
    {
      content:
        "An app builder received a request to extend record access beyond the organization-wide defaults configured.Which two features satisfy this requirement?Choose 2 answers",
      options: [
        "A. Sharing Rules",
        "B. Manual Sharing Rules",
        "C. Permission Set Groups",
        "D. Public Groups",
      ],
      answer: "A,D",
      title: "Question 78",
    },
    {
      content:
        "Universal containers uses a private Account sharing model. They have a Process Improvement team with representatives from multiple departments that need s to view all accounts that have been flagged as problem accounts. How should this team be granted access to the records?",
      options: [
        "A. Use a record owner sharing rule that is shared with the Process Improvement role",
        "B. User a record Owner sharing rule that is shared with the Process Improvement public group",
        "C. Write a trigger to use Apex Managed Sharing to grant access with the Process Improvement team",
        "D. Use a criteria-based sharing rule where the account are shared with the Process Improvement public group",
        "E. Option 5",
      ],
      answer: "D",
      title: "Question 79",
    },
    {
      content:
        "Universal Containers wants to test code against a subset of production data that is under 5 GB. Additionally, Universal Containers wants to refresh this sandbox every weekend.What type of sandbox should be used to accomplish this?",
      options: [
        "A. Developer Pro",
        "B. Developer",
        "C. Full",
        "D. Partial Copy",
      ],
      answer: "D  Explanation ",
      title: "Question 80",
    },
    {
      content:
        "Which two report formats can be used as a source report to configure a reporting snapshot? Choose 2 answers",
      options: [
        "A. Tabular format",
        "B. Summary format",
        "C. Joined format",
        "D. Matrix format",
      ],
      answer: "B,D",
      title: "Question 81",
    },
    {
      content:
        "An app Builder creates an Account validation rule on the Industry field that will throw an error if the length of the field is longer than 6 characters. Another App Builder creates a workflow rule with a field update that sets the Industry field to Technology whenever the Billing City field is set to San Francisco. What will happen the next time a sales person saves an Account with a Billing City of San Francisco?",
      options: [
        "A. The record will save and the Industry field will change to Technology",
        "B. The record will save but the Industry field will not change to Technology",
        "C. The record will not save and the validation rule's error message will be displayed",
        "D. The record will not save and no error message will be displayed",
      ],
      answer: "A",
      title: "Question 82",
    },
    {
      content:
        "Universal Containers has two teams: Sales and Services. Both teams interact with the same records. Sales users use ten fields on the Account record. Services users use three of the same fields as the Sales team, but also have five of their own, which the sales team does not use. What is the minimum configuration necessary to meet this requirement?",
      options: [
        "A. One profile, two record types, one page layout",
        "B. Two profiles, two record types, two page layouts",
        "C. Two profiles, one record type, two page layoutsExplanation- Record types allow you to offer different business processes, picklist values, and page layouts to different users based on their profiles.",
        "D. One profile, one record type, one page layout.",
      ],
      answer: "B",
      title: "Question 83",
    },
    {
      content:
        "The convert button on leads should NOT appear until the lead status picklist is set to a qualified. What should an app builder suggest to meet these requirements ?",
      options: [
        "A. Page layout, record types, process builder field update",
        "B. Process builder field update, quick action, record type",
        "C. Custom button, validation rule, record types",
        "D. Picklist dependency, page layouts, record types",
      ],
      answer: "D",
      title: "Question 84",
    },
    {
      content:
        "At Universal Containers, multiple departments utilize the Case object for different purposes. Some users submit cases while other users provide customer support with case records.What is the minimum required configuration for an app builder to enable different users to see different fields, based on the case type?",
      options: [
        "A. Record Types, Page Layouts, Field Sets, and Profiles.",
        "B. Record Types, Page Layouts, Permission Sets, and Profiles.",
        "C. Record Types, Page Layouts, Case Teams, and Profiles.",
        "D. Record Types, Page Layouts, Support Process, and Profiles.",
      ],
      answer: "B",
      title: "Question 85",
    },
    {
      content: "What is a self-relationship?",
      options: [
        "A. A lookup field to the user object.",
        "B. A lookup to the global search.",
        "C. A relationship of account to opportunity owned by the same owner.",
        "D. A lookup field to the same object.",
      ],
      answer: "D",
      title: "Question 86",
    },
    {
      content:
        "The app builder has just created a Visual Workflow for the VP of Service.Which two Flow be accessed by users? (Choose two.)",
      options: [
        "A. Quick Action",
        "B. Visual Workflow Launcher",
        "C. From a Process",
        "D. Custom Button",
      ],
      answer: "C,D",
      title: "Question 87",
    },
    {
      content:
        "UVC has deployed custom tabs to Production via change sets, without including the profiles settings. What is true about the visibility of custom tabs in Enterprise Edition?",
      options: [
        "A. Custom tabs are not deployed",
        "B. Custom tabs are hidden for all users",
        "C. Custom tabs are default on for all the users",
        "D. Custom tabs are default off for all the users.",
      ],
      answer: "B",
      title: "Question 88",
    },
    {
      content:
        "A sales manager would like to look at an account record and view charts of all of the related open opportunities. Closed/won opportunities, and open cases. How many report charts can be added to the account page layout to meet this requirement?",
      options: ["A. 3", "B. 2", "C. 1", "D. 4"],
      answer: "B",
      title: "Question 89",
    },
    {
      content:
        "Universal Containers needs the 18-digit record ID from Opportunity records when exporting data to Excel in order to ensure each record is treated uniquely.What formula should an app builder use to create this new field?",
      options: [
        "A. CASESAFEID(Id)",
        "B. ISNUMBER(Id)",
        "C. TEXT(Id)",
        "D. VALUE(Id)",
      ],
      answer: "A",
      title: "Question 90",
    },
    {
      content:
        "Which of the following sequences of milestones would represent a typical application lifecycle?",
      options: [
        "A. Development, User Acceptance Testing, Production Migration.",
        "B. Development, Integration Testing, User Acceptance Testing, Regression Testing, Production Migration.",
        "C. Development, Integration Testing, User Acceptance Testing, Staging, Product Migration.",
        "D. Development, Training, User Acceptance Testing, Staging, Production Migration.",
      ],
      answer: "C",
      title: "Question 91",
    },
    {
      content:
        "DreamHouse Realty is building a custom Lightning app to track its expanding solar water collection business.The Lightning app currently contains a custom Lightning record page with standard components.From which two resources should an app builder get custom components to bring into the new Lightning app?Choose 2 answers",
      options: [
        "A. AppExchange",
        "B. Import Wizard",
        "C. Visualforce",
        "D. Apex Code",
      ],
      answer: "B,C",
      title: "Question 92",
    },
    {
      content: "What is true about dashboard filters? (Choose three.)",
      options: [
        "A. Filters can be added to dashboards that contain Visualforce components.",
        "B. Filters aren't applied when you schedule or e-mail a dashboard.",
        "C. You can't filter data on a joined report in dashboard view or add a filter to a dashboard that only has joined reports.",
        "D. It's not possible to filter on bucket fields.",
      ],
      answer: "B,C,D",
      title: "Question 93",
    },
    {
      content:
        "A production org includes custom objects containing confidential information. A sandbox is needed that includes data records, excludes all of the confidential objects, and can be refreshed weekly.What steps should an app builder take to meet these requirements?",
      options: [
        "A. Create a Full Sandbox and use a sandbox template.",
        "B. Create a Partial Copy Sandbox and use a sandbox template.",
        "C. Create a Developer Sandbox and schedule Data Loader to download selected object data weekly.",
        "D. Create a Developer Pro Sandbox and schedule Data Loader to download selected object data weekly.",
      ],
      answer: "B",
      title: "Question 94",
    },
    {
      content:
        "What sandbox should you use for data load and integration testing?",
      options: [
        "A. Full Sandbox",
        "B. Developer",
        "C. Partial Copy",
        "D. Developer Pro",
      ],
      answer: "D",
      title: "Question 95",
    },
    {
      content:
        "An app builder is creating a Lightning record page and has added Mobile & Lightning Actions to the page layout.What two components could be included on the layout to display the actions?Choose 2 answers",
      options: [
        "A. Path",
        "B. Activities",
        "C. Chatter",
        "D. Highlights panel",
      ],
      answer: "B,D",
      title: "Question 96",
    },
    {
      content:
        "For an external object relationship, you can create an external lookup relationship.What type of object(s) can be the parent?",
      options: [
        "A. External",
        "B. Standard or Custom",
        "C. Standard or External",
        "D. Custom",
      ],
      answer:
        "A  Explanation: For an external lookup you can only have an external object as the parent, but can have all 3 as the child. Does not require a Salesforce ID. ",
      title: "Question 97",
    },
    {
      content:
        "Universal containers wants to display the real time stock price for each account on the account record page.How should an app builder implement this request?",
      options: [
        "A. Install a solution from the appexchange",
        "B. Create a lightning web component",
        "C. Build a visual flow that users API calls",
      ],
      answer: "C",
      title: "Question 98",
    },
    {
      content:
        "Which two relationship types can be defined with external object? Choose 2 answers",
      options: [
        "A. Cross-Organization Lookup",
        "B. External Lookup",
        "C. Indirect Lookup",
        "D. External Master-Detail",
      ],
      answer: "B,C",
      title: "Question 99",
    },
    {
      content:
        "Which use case can be accomplished using a custom link?(Select 3)",
      options: [
        "A. To external system using data of salesforce",
        "B. To a process to update current record",
        "C. To create a custom visual flow",
        "D. Navigate to Apex trigger",
        "E. To create a record page",
      ],
      answer: "A,B,E",
      title: "Question 100",
    },
    {
      content:
        "Which permission is required to install and uninstall packages from Salesforce AppExchange?",
      options: [
        "A. Create AppExchange Packages.",
        "B. Download AppExchange Packages.",
        "C. Manage Package Licenses.",
        "D. Upload AppExchange Packages.",
      ],
      answer: "B",
      title: "Question 101",
    },
    {
      content:
        "Universal Containers has limited in-house development resources, but would like to support online payment processing for its products.What is the recommended solution to meet this requirement?",
      options: [
        "A. Configure Outbound Messaging to send a message to an external Payment Gateway.",
        "B. Install an AppExchange product to provide Payment Gateway processing.",
        "C. Configure price books, products, and payment schedules to enable this capability.",
        "D. Work with developers to develop custom code for payment processing.",
      ],
      answer: "B",
      title: "Question 102",
    },
    {
      content:
        "Which two options are available to an app builder when defining an object-specific Create Record custom action? (Choose two.)",
      options: [
        "A. Specifying the fields and layout of the action.",
        "B. Redirecting the end user to the detail page of the target object.",
        "C. Pre-defining field values on the target object.",
        "D. Allowing the end user to choose the record type.",
      ],
      answer: "A,D",
      title: "Question 103",
    },
    {
      content:
        "The VP of Marketing wants to broadcast an e-mail to 10,000 contacts in Salesforce on a regular basis, but realizes Salesforce's mass e-mail functionality has a limitation on the number of e-mails that can be sent each day.What action should the app builder take?",
      options: [
        "A. Research and evaluate products available on AppExchange to send mass e-mails.",
        "B. Request Salesforce increase the number of maximum daily e-mails.",
        "C. Develop Apex code and Visualforce pages to send the e-mails.",
        "D. Download all Contacts to a CSV file and use an e-mail client to send the e-mails.",
      ],
      answer: "A",
      title: "Question 104",
    },
    {
      content:
        "Universal Containers uses a custom object called Projects. When managers assign projects they set a custom field on the Uroject called Estimated Hours. Once set, users should be able to decrease but not increase the value How can an app builder meet this requirement?",
      options: [
        "A. Create a formula held that uses the PREVGROUPVAL function",
        "B. Create a validation rule that uses the PRIOR VALUE function.",
        "C. Create a validation rule that uses the ISCHANGED function",
        "D. Create a formula default value for the custom field.",
      ],
      answer: "B",
      title: "Question 105",
    },
    {
      content: "Which of the following is true about Roll-up Summary Fields?",
      options: [
        "A. Roll-up Summary can be used to compute SUM, MIN, MAX, AVG over a set of records.",
        "B. Roll-up Summary can only be set on the parent of a Master-Detail or Lookup relationship.",
        "C. Roll-up Summary Fields are readonly.",
        "D. The results of the Roll-up Summary is displayed on the child in a master-detail relationship.",
      ],
      answer: "C",
      title: "Question 106",
    },
    {
      content:
        "Universal Containers uses a private sharing model for opportunities. This model CANNOT be changed due to a regional structure A new sales operations team has been created. This team needs to perform analysis on Opportunity data, all should have read arid write access to all Opportunities.What are two recommended solutions for the app builder to give the users appropriate access? Choose 2 answers",
      options: [
        "A. Create a criteria-based sharing rule to share all opportunities with the sales operations private group",
        "B. Create a criteria based sharing rule to all opportunities with the sales operations public group.",
        "C. Add a permission set with 'View All\" and 'Modify All'' opportunity permissions enabled.",
        "D. Add a manual share for all opportunities with each user on the sales operations team.",
      ],
      answer: "D",
      title: "Question 107",
    },
    {
      content:
        "Global actions can be created to let users create which of the following kinds of records? (Choose three.)",
      options: [
        "A. Opportunity",
        "B. Question",
        "C. Users",
        "D. Chatter Post",
        "E. Event (without invitees)",
        "F. Products",
      ],
      answer: "A,B,E",
      title: "Question 108",
    },
    {
      content:
        "What is a true statement in regards to creating custom report types?",
      options: [
        "A. Once a report type is saved with a standard or custom primary object, the primary object cannot be changed for that report type.",
        "B. Any object can be chosen unless the object is no visible to the person creating the report type through security settings",
        "C. The detail object in a master- detail relationship cannot be added as a secondary object on a custom report type",
        "D. When the primary object is a custom object and is deleted, then the report type and any reports created from it must be deleted manually.",
      ],
      answer: "A",
      title: "Question 109",
    },
    {
      content:
        "An app builder wants to show groups as the last navigation menu item in the salesforce1 mobile app. however, the app builder is not able to select groups as one of the items on the drop-down menu. What could cause this?",
      options: [
        "A. Groups is showing up in the recent section and not in the navigation menu",
        "B. Groups is not included in the selecteCreate a criteria based sharing rule using the projects department that grd list for the navigation menu",
        "C. Groups is included in the smart search items but not on the navigation menu",
        "D. Groups cannot be the last item in the navigation menu.",
      ],
      answer: "C",
      title: "Question 110",
    },
    {
      content:
        "Universal Containers has a custom picklist called Support Level on the Account object. They would like to show the real-time value of Support Level on all case records.How should an app builder implement this requirement?",
      options: [
        "A. Create a Process Builder and use a field update on the Case object.",
        "B. Create a formula field on the Case object using the TEXT function.",
        "C. Create a formula field on the Account object using the ISPICKVAL function.",
        "D. Create a roll-up summary field using Support Level on the Account object.",
      ],
      answer: "A",
      title: "Question 111",
    },
    {
      content:
        "Which two relationship types can be defined with external objects? (Choose two.)",
      options: [
        "A. External Master-Detail",
        "B. Indirect Lookup",
        "C. Cross-Organization Lookup",
        "D. External Lookup",
      ],
      answer: "B,D",
      title: "Question 112",
    },
    {
      content:
        "An app builder has been asked to provide users a way to identify a Contact's \"Preferred Contact Method\" direction on Contact record. Users need to be able to identify whether a phone number or an email, is the Contact's preferred communication method. Which filed type will allow the App Builder to accomplish this with the fewest fields possible?",
      options: ["A. Formula", "B. Picklist", "C. Email", "D. Checkboxes"],
      answer: "B,D",
      title: "Question 113",
    },
    {
      content:
        "Cloud Kicks (CK) wants to set up a custom child object to track gift cards issued to a customer. A key requirement is to track the total number of gift cards opened and gift cards issued on an Account. CK wants to permanently ensure the gift cards are unable to be moved across any other Account once it is created.On the gift card object, what type of field should be created to support this requirement?",
      options: [
        "A. Formula",
        "B. Lookup relationship",
        "C. Roll-up summary",
        "D. Master-detail relationship",
      ],
      answer: "D",
      title: "Question 114",
    },
    {
      content:
        "Universal Containers wants to test code against a subject of production data that is under 5 GB. They want to refresh a sandbox weekly. Which type of sandbox should be used?",
      options: [
        "A. Developer Sandbox",
        "B. Partial Copy Sandbox",
        "C. Developer Pro Sandbox",
        "D. Full Sandbox",
        "E. Enterprise Sandbox",
      ],
      answer: "B",
      title: "Question 115",
    },
    {
      content:
        "An app builder wants to use Process Builder to automate some of the work being done by the sales team.What are three capabilities of Process Builder that can improve productivity?Choose 3 answers",
      options: [
        "A. Delete a related record.",
        "B. Update a related record.",
        "C. Create a child record.",
        "D. Send an email alert.",
        "E. Send an outbound message.",
      ],
      answer: "B,C,D",
      title: "Question 116",
    },
    {
      content:
        "An app builder is loading data into Salesforce. To link new records back to the legacy system, a field will be used to track the legacy ID on the Account object. For future data loads this ID will be used when upserting records.Which two fields attributes should be selected? (Choose two.)",
      options: [
        "A. Unique",
        "B. External ID",
        "C. Text (encrypted)",
        "D. Required",
      ],
      answer: "A,B",
      title: "Question 117",
    },
    {
      content:
        "Universal Containers has a Lightning record page that supports both the mobile app and desktop. An app builder has downloaded a custom Lightning component from AppExchange, but users are unable to view the component on mobile devices.What can be the issue?",
      options: [
        "A. The component has been developed for Desktop Pages.",
        "B. The record page needs to be activated.",
        "C. The component needs to be activated.",
        "D. The record page template is unable to support mobile devices.",
      ],
      answer: "C",
      title: "Question 118",
    },
    {
      content: "Which of these is true about the Lookup Relationship?",
      options: [
        "A. Security access of the child record is dependent upon the parent record.",
        "B. Deleting an object deletes its children.",
        "C. Roll-up Summary Field can be used to perform basic operations over all children of a parent record.",
        "D. Parent is not a required field and may be omitted.",
      ],
      answer: "D",
      title: "Question 119",
    },
    {
      content:
        "Which deployment tool will you use to deploy metadata from one organization to another organization?",
      options: [
        "A. Force.com Migration Tool",
        "B. Force.com IDE",
        "C. Unmanaged Packages",
        "D. Change sets",
      ],
      answer: "B",
      title: "Question 120",
    },
    {
      content:
        "An app builder has been asked to integrate Salesforce with an external web service. The web service must be notified every time an Opportunity is Won.Which two can satisfy this requirement? (Choose two.)",
      options: [
        "A. Use a workflow rule and an outbound message.",
        "B. Use Process Builder and Apex code.",
        "C. Use Process Builder with an outbound message.",
        "D. Use a flow and an outbound message.",
      ],
      answer: "A,B",
      title: "Question 121",
    },
    {
      content:
        "Sales reps at Cloud Kicks (CK) forget to submit for approval when CK needs orders reviewed before close won. CK wants to automatically submit opportunities into the Secure Commitment Stage to eliminate manual submission.Which three features would meet the business requirements'Choose 3 answers",
      options: [
        "A. Process Builder",
        "B. Workflow",
        "C. Chatter action",
        "D. Flow",
        "E. Apex",
      ],
      answer: "A,D,E",
      title: "Question 122",
    },
    {
      content:
        "An app builder needs to change the data types of a few custom fields. The appbuilder is not able to delete and recreate any of the fields, nor modify any apexcode. Which data type change will require the app builder to perform additionalsteps in order to retain existing functionality?",
      options: [
        "A. Changing the data type of a field used in a report from text to an encrypted field",
        "B. In lead conversion from number to text",
        "C. In an apex class from number to text",
        "D. As an external ID from number to text",
      ],
      answer: "B",
      title: "Question 123",
    },
    {
      content:
        "When a user creates a record by using an object specific create action, what feed item for that record appears? (Choose three.)",
      options: [
        "A. In the user profile feed for all users who can view the record.",
        "B. As the first entry in the feed for the new record.",
        "C. In the feed for the record on which the new record was created.",
        "D. In the Chatter feed of the first user who follows the record on the record was created.",
        "E. In the Chatter feed of the user who created the record.",
      ],
      answer: "B,C,E",
      title: "Question 124",
    },
    {
      content:
        "Universal Containers wants to understand return on investment for the latest advertising buy. They currently use a private security model for all objects.What should an app builder recommend?",
      options: [
        "A. Utilize Account Hierarchies and Roil-Up Summary fields",
        "B. Change to a public security model",
        "C. Run an opportunities pipeline report",
        "D. Configure Campaign Hierarchies and Campaign statistics",
      ],
      answer: "C",
      title: "Question 125",
    },
    {
      content:
        "Cloud Kicks wants to make sure that users without the Marketing role are unable to update the Contact Retail Opt In picklist field to Yes.What validation rule would an app builder use to prevent other users from making this update?",
      options: [
        "A. AND( $UserRole.Name = 'Marketing', ISPICKVAL(Retail_Opt_In_c,\"Yes\") )",
        "B. AND( $UserRole.Name != 'Marketing', Retail_Opt_In_c = \"Yes\" )",
        "C. AND( $UserRole.Name != 'Marketing', ISCHANGED(Retail_Opt_In__c), ISPICKVAL(Retail_0pt_In_c,\"Yes\") )",
        "D. AND( $UserRole.Name = 'Marketing', Retail_Opt_In__c = \"Yes\" )",
      ],
      answer: "C",
      title: "Question 126",
    },
    {
      content:
        "Cloud Kicks has leads owned by users and queues.The sales manager wants the status to change to working when a user takes ownership.What does an app builder need to have in the criteria to ensure the process runs without error?",
      options: [
        "A. NOT(ISBLANK([Lead].OwnerId))",
        'B. BEGINS([Lead].OwnerId, ,,005")',
        "C. [Lead].Owner:User.Role Is Null = False",
        "D. [Lead].Owner:Queue.OwnerId Is Null = True",
      ],
      answer: "A",
      title: "Question 127",
    },
    {
      content:
        "Universal Containers uses a custom picklist field Account Region on the account record. They want this region to be reflected on all related contact records and stay in sync if the value of this field changes on the Account.How should an app builder meet this requirement?",
      options: [
        "A. Create a formula field on the Contact object > Set the value of the formula to ISPICKVAL(Account.Account_Region__c).",
        "B. Create a picklist field called 'Account Region' on Contact object > Create a workflow rule to update this picklist field if the Account Region field on the Account is changed.",
        "C. Create a formula field on the Contact object > Set the value of the formula to TEXT(Account.Account_Region__c).",
        "D. Create a text field called 'Account Region' on Contact object > Create a workflow rule to update this picklist field if the Account Region field on the Account is changed.",
      ],
      answer: "C",
      title: "Question 128",
    },
    {
      content:
        "An app builder has created a report for sales people to view records from the custom object, some users have complained that they are unable to see all of the appropriate records. What steps should be taken to ensure data visibility within the report? Choose 3 Answers",
      options: [
        "A. Check reports filter",
        "B. Check organization-wide defaults",
        "C. Check the user's profile for object settings.",
        "D. Check Sharing rules",
        "E. Check the report folder sharing settings",
      ],
      answer: "B,C,D",
      title: "Question 129",
    },
    {
      content:
        "Universal Containers has a junction object called Invoices with a primary Master-Detail relationship with Accounts and a secondary Master-Detail relationship with Contacts. The app builder has a requirement to change the primary Master-Detail relationship to Lookup. What happens to the Master-Detail relationship with Contacts?",
      options: [
        "A. The Contacts Master-Detail values are cleared from invoices.",
        "B. The Contacts Master-Detail also converts to Lookup.",
        "C. The Contacts Master-Detail field is deleted from the object",
        "D. The Contacts Master-Detail becomes the primary.",
      ],
      answer: "D",
      title: "Question 130",
    },
    {
      content:
        "Actions on a Lightning Page allow you to do which of the following?",
      options: [
        "A. Send email and delete or clone records.",
        "B. Send email, create a task, and create or update records.",
        "C. Send email, send outbound messages, and launch a flow.",
        "D. Clone records, add users, and assign permissions.",
      ],
      answer: "B",
      title: "Question 131",
    },
    {
      content: "Which object can be member of a campaign? (Choose 2)",
      options: ["A. Contact", "B. Account", "C. Opportunity", "D. Lead"],
      answer: "A,D",
      title: "Question 132",
    },
    {
      content:
        "Universal Containers uses a custom object to track open job positions. They would like to automatically post updates on a record's feed whenever a position stage is changed.",
      options: [
        "A. Auto-response rule",
        "B. Feed Quick Action",
        "C. Workflow rule",
        "D. Feed tracking",
      ],
      answer: "D",
      title: "Question 133",
    },
    {
      content:
        "Universal containers require different fields to be filled out at each stage of the opportunity sales process what configuration steps san an app builder use to meet this requirement?",
      options: [
        "A. Add the path component to the lightning record page",
        "B. Set page layout required fields based on the current stage",
        "C. Create a process builder to prompt the user for field information",
        "D. Define record types and page layouts for each stage",
      ],
      answer: "D",
      title: "Question 134",
    },
    {
      content:
        "Universal Containers has a requirement that an Opportunity should have a field showing the value of its associated account's billing state. This value should not change after the Opportunity has been created. What is the recommended solution to configure this automation behavior?",
      options: [
        "A. Roll-up-summary field",
        "B. Formula Field",
        "C. Workflow",
        "D. Apex",
      ],
      answer: "C",
      title: "Question 135",
    },
    {
      content:
        "Universal Containers sales reps can modify fields on an opportunity until it is closed. Only the sales operation team can modify the post closed follow-up dates and post closed follow-up comments fields. How can these requirements be met?",
      options: [
        "A. Use field-level security on page layouts to restrict editing fields",
        "B. Use field level security to mark fields as read only on the sales profile",
        "C. Use record types with field sets and restrict editing fields using field-level security.",
        "D. Use multiple record types, page layouts and profiles.",
      ],
      answer: "A",
      title: "Question 136",
    },
    {
      content:
        "Ursa Major Solar's sales team has been struggling to enter data on mobile since rollout; the team dislikes scrolling through all of the fields to input only the necessary data.How could the app builder solve this with minimal impact to desktop users?",
      options: [
        "A. Reorder the fields to make sense for the reps when in the field.",
        "B. Update the training documentation with better screenshots.",
        "C. Deselect the phone radio button on the Lightning record page assignment.",
        "D. Filter components by device using Form Factor.",
      ],
      answer: "A",
      title: "Question 137",
    },
    {
      content:
        "Which two may occur if workflow rules are reevaluated after a field change by a field update? (Choose two.)",
      options: [
        "A. A recursive loop potentially results in exceeding governor limits.",
        "B. Workflow rules trigger validation rules on field updates.",
        "C. Cross-object workflow rules result in re-evaluation after field change.",
        "D. Workflow rules trigger more workflow rules to be re-evaluated.",
      ],
      answer: "A,D",
      title: "Question 138",
    },
    {
      content:
        "How would you ensure that records of a particular object are visible only to the user, and users higher in the role hierarchy? choose 2 answers.",
      options: [
        "A. Set org wide sharing default for the object as private",
        "B. Define a role hierarchy",
        "C. Define a profile list",
        "D. Set org wide sharing default for the object as manager view",
      ],
      answer: "A,B",
      title: "Question 139",
    },
    {
      content:
        "A business user wants a quick way to edit a record's status and enter a custom due date field from the record's feed in Salesforce1 Mobile. What could be used to accomplish this?",
      options: [
        "A. Custom quick access link",
        "B. Custom URL formula field",
        "C. Custom Button",
        "D. Custom Action",
      ],
      answer: "D",
      title: "Question 140",
    },
    {
      content:
        'Universal Containers would like to collaborate with its customers within Salesforce, and has decided to enable the "Allow Customer Invitations" Chatter setting. What permission is granted to Customers when invited to Chatter Group?',
      options: [
        "A. The ability to invite members to groups of which they are a member",
        "B. The ability to@mention accounts of which they are a contact.",
        "C. The ability to request access to public groups",
        "D. The ability to interact with members of their groups",
      ],
      answer: "D",
      title: "Question 141",
    },
    {
      content:
        "Universal Containers would like to show different picklist values to different groups of user in a custom picklist field. What should be configured?",
      options: [
        "A. Record Types",
        "B. Page Layouts",
        "C. Field-level security",
        "D. Permission sets",
      ],
      answer: "A",
      title: "Question 142",
    },
    {
      content:
        "What is true regarding changing the field type of a rich text area?",
      options: [
        "A. It is not possible to change the field type of a rich text area.",
        "B. Rich text area fields can be converted but only to a long text area field type.",
        "C. Images in a rich text area are deleted when the field type is converted.",
        "D. Rich text area fields can be converted to a text area field type but data may be truncate.",
      ],
      answer: "B",
      title: "Question 143",
    },
    {
      content:
        "Universal Containers needs a field on the Account to track how many Opportunities are closing within the next 30 days. What can be used to accomplish this goal?",
      options: [
        "A. Roll-up Summary Field",
        "B. Apex Code",
        "C. Workflow Rule",
        "D. Process Builder",
      ],
      answer: "A",
      title: "Question 144",
    },
    {
      content:
        "Universal Containers require different fields to be filled out at each stage of the Opportunity sales process.What configuration steps can an app builder use to meet this requirement?",
      options: [
        "A. Create a Process Builder to prompt the User for field information",
        "B. Add the Path component to the Lightning record page",
        "C. Define record types and page layouts for each stage",
        "D. Set page layout required fields based on the current stage",
      ],
      answer: "D",
      title: "Question 145",
    },
    {
      content:
        "An App Builder wants to deploy a new version of an auto launched flow to production in an active state so that the new functionality Is immediately available to users What should the App Builder rake Into consideration when planning the deployment?",
      options: [
        "A. Grant user access to the Flow.",
        "B. Verify there is an Apex test that provides test coverage for the Flow.",
        "C. Manually activate the Flow after deployment",
        "D. Include the Process Builder calling the Flow In the deployment",
      ],
      answer: "B",
      title: "Question 146",
    },
    {
      content:
        "Field type conversion.Which of the following are true? (Choose two.)",
      options: [
        "A. Data can be lost converting from number to currency (assuming that field lengths are identical).",
        "B. Data can be lost when converting from auto-number to text.",
        "C. Data can be lost when converting from simple picklist to multi picklist.",
        "D. Information can be lost when converting from text area (rich) to text area (long).",
      ],
      answer: "A,C",
      title: "Question 147",
    },
    {
      content:
        "Which statement is true when using record types to control picklist value. (Select 2)",
      options: [
        "A. If a picklist value is added to the master picklist, then the new value must be manually included in the appropriate record types",
        "B. If values are added to the Opportunity Stage, Case Status, and Lead Status fields, then the values must be manually adjusted for each record type",
        "C. If a record type is renamed, then the list of values included in that record type are also changed to newly renamed record types",
        "D. If a picklist value is removed from the master, then it is no longer available when records assigned to that value are unchanged",
      ],
      answer: "A,D",
      title: "Question 148",
    },
    {
      content:
        "An app builder would like to streamline the user experience by reflecting summarized calculations of specific fields on various objects.Which three field types could be used in roll-up summary fields to accomplish this? (Choose three.)",
      options: [
        "A. Currency",
        "B. Percent",
        "C. Date",
        "D. Checkbox",
        "E. Time",
      ],
      answer: "A,B,C",
      title: "Question 149",
    },
    {
      content:
        "Universal containers require different fields to be filled out at each stage of the opportunity sales process. what configuration steps san an app builder use to meet this requirement?",
      options: [
        "A. Set page layout required fields based on the current stage",
        "B. Define record types and page layouts for each stage",
        "C. Create a process builder to prompt the user for field information",
        "D. Add the path component to the lightning record page",
      ],
      answer: "D",
      title: "Question 150",
    },
    {
      content:
        "Ursa Major Solar (UMS) has a custom object where they track Galactic Vendors. The object has four custom fields for the Galactic Vendors's location:The UMS's leadership wants these fields to be concatenated into a single formula field on two lines.Which formula fulfills this requirement?A)B)C)D)",
      options: ["A. Option C", "B. Option A", "C. Option D", "D. Option B"],
      answer: "A",
      title: "Question 151",
    },
    {
      content:
        "Your manager has asked you to create an object with radio buttons that track a rating of 1-5.How will you achieve this?",
      options: [
        "A. Create a dependent picklist that feeds the radio button type field.",
        "B. Create a formula field.",
        "C. Create a Visualforce page with radio buttons.",
        "D. Create a radio button with 5 option.",
      ],
      answer: "C",
      title: "Question 152",
    },
    {
      content: "What is a user case for validation rules?",
      options: [
        "A. Prevent non-managers from joining a private Chatter Group.",
        "B. Prevent deals with less than a 10% discount from entering an approval process.",
        "C. Ensure Zip/Postal Codes are entered in the correct formal.",
        "D. Restrict partner Lead visibility to the channel sales team.",
      ],
      answer: "B",
      title: "Question 153",
    },
    {
      content:
        "Which two statements are true about record types? Choose two answers",
      options: [
        "A. They can be used to control user role hierarchy",
        "B. They can be enabled by profile and permission set",
        "C. They allow different page layouts and mandatory fields",
        "D. They allow different picklist values for all picklist fields",
      ],
      answer: "C,D",
      title: "Question 154",
    },
    {
      content:
        "Universal containers wants to provide a different view for its users when they access an Account record in Salesforce1 instead of the standard web version. How can this be accomplished? Choose 2 answers",
      options: [
        "A. By adding quick actions in the publisher section.",
        "B. By adding Visualforce page to the mobile cards section",
        "C. By adding a mobile layout and assigning it to a profile.",
        "D. By adding actions in the Salesforce1 action bar section.",
      ],
      answer: "B",
      title: "Question 155",
    },
    {
      content:
        "DreamHouse Realty (DR) is expanding into subsidized housing by partnering with local government entitles. DR uses Sales Cloud and has enabled field history tracking on the Opportunity object. Due to increased Information requirements, the App Dev team is changing Text Area (Long) fields to Rich Text fields to allow for up to 1,000 characters and better descriptions.Which two considerations should be made by the team?",
      options: [
        "A. Data loss may occur when changing custom field types.",
        "B. Field History Tracking records value changes of 255 characters or less.",
        "C. Rich text field values of all lengths are displayed fully in reports.",
        "D. Audit Trail is available through REST API extracts.",
      ],
      answer: "A,B",
      title: "Question 156",
    },
    {
      content:
        "Universal Containers has created two custom objects called Seminars and Attendees. Organization-wide defaults for those objects have been set to private. Universal Containers wants to set up a new junction object between these objects. A select group of users should be able to edit records in the junction object.Which two steps should an app builder take to configure the proper security?",
      options: [
        "A. Set Sharing Settings to Read Only on both master-detail relationship fields.",
        "B. Create an owner-based sharing rule that gives Read access to the junction object.",
        "C. Set lookup filters on both junction object relationship fields.",
        "D. Create owner-based sharing rules that give Read access to the master objects.",
      ],
      answer: "C,D",
      title: "Question 157",
    },
    {
      content:
        "An Alexa Skill Builder built a skill with the following interaction model:Which utterance would invoke HelloIntent?",
      options: [
        'A. "Alexa, use my first skill to say hello."',
        'B. "Alexa, ask my first skill to say hello to John."',
        'C. "Alexa, open my first skill."',
        'D. "Alexa, say hello to my first skill."',
      ],
      answer: "D",
      title: "Question 158",
    },
    {
      content:
        "Which three Salesforce functionalities are ignored when processing field updates in workflow rules and approval processes? (Choose three.)",
      options: [
        "A. Field-level security",
        "B. Record type picklist value assignments",
        "C. Multiple currencies",
        "D. Validation rules",
        "E. Decimal places and character limits",
      ],
      answer: "B,C,E",
      title: "Question 159",
    },
  ],
});
