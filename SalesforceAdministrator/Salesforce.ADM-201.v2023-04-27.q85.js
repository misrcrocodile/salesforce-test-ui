window.testContent = window.testContent || [];
var testId = "SalesforceAdmin1";
var testName = "SalesforceAdmin1.ADM-201";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "SalesforceAdmin1.ADM-201.v2023-04-27.q85",
  content: [
    {
      content:
        "Which two objects are customizable the Stage Setup Flow?\nChoose 2 answers",
      options: [
        "A. Campaigns",
        "B. Campaign Members",
        "C. Leads",
        "D. Opportunities",
      ],
      answer: "C,D",
      title: "Question 1",
      explanation: "",
    },
    {
      content:
        "The administrator for AW Computing is working with a user who is having trouble togging in to Salesforce.\nWhat should the administrator do to identify why the user Is unable to log in?",
      options: [
        "A. Reset the security token for the profile.",
        "B. Check the attempted logins by running the setup audit trail.",
        "C. Pull the password history to ensure the password policy was followed.",
        "D. Review the login history for the user.",
      ],
      answer: "D",
      title: "Question 2",
      explanation: "",
    },
    {
      content:
        "A user at Cloud Kicks is having issues logging in to Salesforce. The user asks the administrator to reset their password.\nWhich two options should the administrator consider when resetting the user's password?\nChoose 2 answers",
      options: [
        "A. Resetting the password will change the user's password policy.",
        "B. Single sign-on users can reset their own passwords using the forgot password link.",
        "C. Resetting a locked-out user's password automatically unlocks the user's account.",
        "D. After resetting a password, the user may be required to activate their device to successfully log",
      ],
      answer: "C,D",
      title: "Question 3",
      explanation: "in to Salesforce.",
    },
    {
      content:
        "An administrator at Northern Trail Outfitters is unable to add a new user in salesforce.\nWhat could cause this issue?",
      options: [
        "A. The Username is not a corporate email address",
        "B. The Username is already in use.",
        "C. The username is less than 80 characters.",
        "D. The Username is a fake email address.",
      ],
      answer: "B",
      title: "Question 4",
      explanation: "",
    },
    {
      content:
        "At universal Containers, users would like to be able to share Salesforce records with other members of their team, while collaborating around general topics as well.\nWhich are two considerations for enabling this functionality?\nChoose 2 answers",
      options: [
        "A. Object layouts should be configured to include the groups related list.",
        "B. The Add Record action must be configured in the group publisher.",
        "C. Collaboration groups are created automatically for every department.",
        "D. An administrator needs to create a group to enable record sharing",
      ],
      answer: "B,D",
      title: "Question 5",
      explanation: "",
    },
    {
      content:
        "Users at Cloud Kicks are reporting different options when uploading a custom picklist on the Opportunity object based on the kind of opportunity.\nWhere Should an administrator update the option in the picklist?",
      options: [
        "A. Fields and relationships",
        "B. Record Type",
        "C. Picklist value sets",
        "D. Related lookup filters",
      ],
      answer: "B",
      title: "Question 6",
      explanation: "",
    },
    {
      content:
        "A user at Universal Containers left the company. The administrator needs to create new user for their replacement, but they have assigned all available users licenses.\nWhat should the administrator do to free up users licenses for the new users?",
      options: [
        "A. Delete former employees user record.",
        "B. Deactivate the former employees user record.",
        "C. Change the formers users record to the new user.",
        "D. Freeze former employees user record.",
      ],
      answer: "C",
      title: "Question 7",
      explanation: "",
    },
    {
      content:
        "The marketing team wants a new picklist value added to the Campaign Member Status field for the upsell promotional campaign.\nWhich two solutions should the administrator use to modify the picklist field values?\nChoose 2 answers",
      options: [
        "A. Add the Campaign Member Statuses related list to the Page Layout.",
        "B. Mass modify the Campaign Member Statuses related list.",
        "C. Edit the picklist values for the Campaign Status in object Manager.",
        "D. Modify the picklist value on the Campaign Member Statuses related list",
      ],
      answer: "A,C",
      title: "Question 8",
      explanation: "",
    },
    {
      content:
        "An administration needs to store the ID of record type of later use in a flow.\nWhich kind of variable should the administrator use?",
      options: [
        "A. Record variable",
        "B. Text variable",
        "C. ID variable",
        "D. Boolean variable",
      ],
      answer: "A",
      title: "Question 9",
      explanation: "",
    },
    {
      content:
        "An administrator at AW Computing has been asked to help the Support team with report folders. They want a folder called Support Reports and two folders underneath called Helpdesk and R&D. The Support organization uses public groups for Support Agents, R&D, and Managers. Support agents should be able to run Helpdesk reports, but should not be able to view R&D reports. Support managers should be able to view and edit all reports.\nWhich two ways should these folders be shared?\nChoose 2 answers",
      options: [
        "A. Share the R&D folder with Support Managers with Edit Access.",
        "B. Share the Support Reports folder with Support Managers with Edit Access.",
        "C. Share the Helpdesk folder with Support Agents with View access.",
        "D. hare the Support Reports folder with Support Agents with View Access.",
      ],
      answer: "B,C",
      title: "Question 10",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks (CK) stores information about specific customers in Contacts and information about shoes and accessories in a custom Merchandise object.\nWhat should the CK administrator use to represent that Contact can be interested in multiple pieces of Merchandies?",
      options: [
        "A. Hierarchy column",
        "B. Lookup filter",
        "C. Formula field",
        "D. Junction object",
      ],
      answer: "C",
      title: "Question 11",
      explanation: "",
    },
    {
      content:
        "Executives at Cloud Kicks have reported that their dashboards are showing inaccurate dat a. The administrator has discovered been changing the source reports.\nWhich two actions should the administrator take to preserve the integrity of the source reports?\nChoose 2 answers",
      options: [
        "A. Move the dashboard to the user's private folder.",
        "B. Change the dashboard to be a dynamic dashboard",
        "C. Create a new report folder with viewer access.",
        "D. Move the dashboard reports to the view-only folder.",
      ],
      answer: "C,D",
      title: "Question 12",
      explanation: "",
    },
    {
      content:
        "Universal Containers (UC) has a queue that is used for managing tasks that need to be worked by the UC customer support team. The same team will now be working some of UC's Cases.\nWhich two options should the administrator use to help the support team?\nChoose 2 answers",
      options: [
        "A. Configure a flow to assign the cases to the queue.",
        "B. Use assignment rules to set the queue as the owner of the case.",
        "C. Create a new queue and add Cases as an available object.",
        "D. Add Cass to the existing queue as available object.",
      ],
      answer: "A,B",
      title: "Question 13",
      explanation: "",
    },
    {
      content:
        "DreamHouse Realty regularly processes customer requests for warranty work and would like to offer customers a self-serve option to generate cases.\nWhich two solutions should an administrator use to meet this request?\nChoose 2 answers",
      options: [
        "A. Web-to-Case",
        "B. Email-to-Case",
        "C. Case Queues",
        "D. Case Escalation",
      ],
      answer: "A,B",
      title: "Question 14",
      explanation: "",
    },
    {
      content:
        "Universal Containers administrator has been asked to create a many-to-many relationship between two existing custom objects.\nWhich two steps should the administrator take when enabling the many-to-many relationship?\nChoose 2 answers",
      options: [
        "A. Create a junction with a custom object.",
        "B. Create two master detail relationships on the new object.",
        "C. Create URL fields on a custom object.",
        "D. Create two lookup relationships on the new object.",
      ],
      answer: "A,B",
      title: "Question 15",
      explanation: "",
    },
    {
      content:
        "An administrator wants to create a form in Salesforce for users to fill out when they lose a client.\nWhich automation tool supports creating a wizard to accomplish this goal?",
      options: [
        "A. Outbound Message",
        "B. Flow Builder",
        "C. Process Builder",
        "D. Approval Process",
      ],
      answer: "B",
      title: "Question 16",
      explanation: "",
    },
    {
      content:
        "Dream house realty needs to use consistent picklist values in the category field on accounts and cases, with values respective to record types.\nChoose 2 options",
      options: [
        "A. Multi-select picklist",
        "B. Global picklist",
        "C. Dependent picklist",
        "D. Custom picklist",
      ],
      answer: "B,D",
      title: "Question 17",
      explanation: "",
    },
    {
      content:
        "When a cloud kicks Opportunity closes, the company would like to automatically create a renewal opportunity.\nWhich two automation tools should an administrator use to accomplish this request?\nChoose 2 answers",
      options: [
        "A. WorkFlow Rule",
        "B. Process Builder",
        "C. Approval Process",
        "D. Flow Builder",
      ],
      answer: "D",
      title: "Question 18",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks has decided to delete a custom field.\nWhat will happen to the data in the field when it is deleted?",
      options: [
        "A. The data associated with the field is required.",
        "B. The data in the field is stored for 20 days.",
        "C. The data is permanently deleted.",
        "D. The data is restorable from the recycle bin.",
      ],
      answer: "C",
      title: "Question 19",
      explanation: "",
    },
    {
      content:
        "The VP of Sales at Cloud Kicks is receiving an error message that prevents them form saving an Opportunity. The administrator attempted the same edit without receiving an error.\nHow can the administrator validate the error the user is receiving?",
      options: [
        "A. View the setup audit trail.",
        "B. Review the sharing model",
        "C. Edit the page layout.",
        "D. Log in as the user",
      ],
      answer: "D",
      title: "Question 20",
      explanation: "",
    },
    {
      content:
        "What should an administrator use as an identifier when importing and updating records from a separate system?",
      options: [
        "A. Auto-Number field",
        "B. Record ID",
        "C. External ID",
        "D. Rich Text field",
      ],
      answer: "C",
      title: "Question 21",
      explanation: "",
    },
    {
      content:
        "When a Sales rep clicks a button on an opportunity, a simple discount calculator screen should be launched.\nWhich automation tool should an administrator use to build this discount calculator screen?",
      options: [
        "A. Process Builder",
        "B. Workflow Rule",
        "C. Platform Event",
        "D. Flow Builder",
      ],
      answer: "D",
      title: "Question 22",
      explanation: "",
    },
    {
      content:
        "An administrator installed a managed package that contains a permission set group. The permission set group that was installed includes Delete access on several objects, and the administrator needs to prevent users in the permission set group from being able to delete records.\nWhat should the administrator do to control Delete access?",
      options: [
        "A. Create a new permission set that has Delete access deselected for the objects.",
        "B. Use a muting permission set with a permission set group to mute selected permissions.",
        "C. Create a new role that prevents Delete permissions from rolling up to the users.",
        "D. Edit the profile for the users to remove Delete access from the objects.",
      ],
      answer: "B",
      title: "Question 23",
      explanation: "",
    },
    {
      content:
        "Universal Containers (UC) customers have provided feedback that their support cases are not being responded to quickly enough. UC wants to send all unassigned Cases that have been open for more than 2 hours to an urgent Case queue and alert the support manager.\nwhich feature should an administrator configure to meet this requirement?",
      options: [
        "A. Case Assignment Rules.",
        "B. Case Escalation Rules.",
        "C. Case Dashboard Refreshes.",
        "D. Case Scheduled Reports.",
      ],
      answer: "B",
      title: "Question 24",
      explanation: "",
    },
    {
      content: "How should an administrator support this request?",
      options: [
        "A. Use process builder to capture the daily average on each opportunity.",
        "B. Refresh weekly reporting snapshots for Closed Opportunities.",
        "C. Run the Opportunity Stage Duration report.",
        "D. Add Formula Fields to track Stages on each Opportunity.",
      ],
      answer: "C",
      title: "Question 25",
      explanation: "",
    },
    {
      content:
        "Sales managers would like to know what could be implemented to surface important values based on the stage of the opportunity.\nWhich tool should an administrator use to meet this requirement?",
      options: [
        "A. Opportunity Processes",
        "B. Workflow Rules",
        "C. Path Key fields",
        "D. Dynamic Forms",
      ],
      answer: "C",
      title: "Question 26",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks wants to track shoe designs by products. Shoe designs should be unable to be deleted, and there can be multiple designs for one product across various stages.\nWhich two steps should the administrator configure to meet this requirement?\nChoose 2 answers",
      options: [
        "A. Configure a Custom Lookup Field for shoe design on the product object.",
        "B. Add a custom master detail field for shoe design on the Product Object.",
        "C. Create a Custom Object for shoe design.",
        "D. Use the Standard Object for designs.",
      ],
      answer: "A,C",
      title: "Question 27",
      explanation: "",
    },
    {
      content:
        "A Sales user is trying to manage Campaign Members for an upcoming networking event. The user can view the Campaign, but add new Campaign Members or update Member statuses.\nHow can an administrator troubleshoot this problem?",
      options: [
        "A. Create a permission set to allow the user to edit Campaign Members.",
        "B. Run a Campaign report and update any Member information via Data Loader.",
        "C. Make sure the Marketing User Checkbox is checked on the user record page.",
        "D. Provide the user access to both Leads and Contacts to edit all Members.",
      ],
      answer: "C",
      title: "Question 28",
      explanation: "",
    },
    {
      content:
        "Universal Container wants to prevent its service team from accessing deal records. While service users are unable to access deal list views, they are able to find the deal records via a search.\nWhat options should the administrator adjust to fully restrict access?",
      options: [
        "A. App permissions and search terms",
        "B. Record setting and search index",
        "C. Page layouts and field- level security",
        "D. Permissions and tab visibility",
      ],
      answer: "C",
      title: "Question 29",
      explanation: "",
    },
    {
      content:
        "The administrator at Ursa Major Solar has created a custom report type and built a report for sales operation team. However, none of the user are able to access the report.\nWhich two options could cause this issue?\nChoose 2 Answers",
      options: [
        "A. The user's profile is missing view access.",
        "B. The custom report type is in development.",
        "C. The org has reached its limit of custom report types.",
        "D. The report is saved in a private folder",
      ],
      answer: "A,D",
      title: "Question 30",
      explanation: "",
    },
    {
      content:
        "Universal Containers introduced a new product and wants to track all associated cases that get logged. They are looking for an automated solution that would give the product's two lead engineers read/write access to all new cases that reference the new product.\nWhat should an administrator do to satisfy this requirement?",
      options: [
        "A. Create a user-based sharing rule and an ad-hoc case team.",
        "B. Create a queue and a criteria-based sharing rule.",
        "C. Create a predefined case team and an assignment rule.",
        "D. Create an auto-response rule and a public group.",
      ],
      answer: "A",
      title: "Question 31",
      explanation: "",
    },
    {
      content:
        "AW Computing has added a new custom text field called Market Segment on the Lead object. When a Lead is converted, the new field is not getting copied to the Account record.\nWhat should the administrator do to ensure the Market Segment field from a Lead is copied to the converted Account record in routine?",
      options: [
        "A. Write a record-triggered flow to copy the custom field from Lead to Account.",
        "B. Write a Validation Rule to ensure the Account has a value in that field.",
        "C. Ensure Account has a field that has the exact same name as the new Lead field.",
        "D. Ensure the Market Segment field on the Lead is mapped to right field on Account.",
      ],
      answer: "A",
      title: "Question 32",
      explanation: "",
    },
    {
      content:
        "Ursa Major Solar has its business hours set from 9:00 AM to 5:00 PM for the reps that are on pacific time. The reps on Eastern Time need business hours set to start 3 hours earlier to cover for support.\nHow should an administrator solve for this issue?",
      options: [
        "A. Set temporary business hours for each time zone.",
        "B. Adjust the currant business hours to accommodate the Eastern Time Zone.",
        "C. Allow the reps to set business hours manually.",
        "D. Create one set of business hours per time zone.",
      ],
      answer: "D",
      title: "Question 33",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks is Introducing a new shoe model and wants to advertise on TV, radio, print, and social under the banner of a called New Runners. In addition, total statistics for this marketing effort need to be aggregated and visible.\nWhich feature should the administrator use to implement this functionality?",
      options: [
        "A. Parent campaign field",
        "B. Lookup relationship",
        "C. Junction object",
        "D. Master-detail relationship",
      ],
      answer: "D",
      title: "Question 34",
      explanation: "",
    },
    {
      content:
        "Cloud kicks needs to ensure appropriate shipping details are used in orders. Reps should have a streamlined solutions to update the shipping address on selected orders associated with an account when the shipping address is changed on the account.\nHow should the administrator deliver this requirement?",
      options: [
        "A. An autolaunched flow on the account page that updates all open orders shipping addresses whenever the account shipping addresses changes.",
        "B. A screen flow on the order page that lets the reps choose the updated account shipping address in all open associated orders",
        "C. A screen flow on the account page that lets the reps choose the updated account shipping address in all open associated orders",
        "D. An autolaunched flow on the order page that updates all open orders shipping addresses whenever the account shipping addresses changes.",
      ],
      answer: "A",
      title: "Question 35",
      explanation: "",
    },
    {
      content:
        "The VP of sales at Dreamhouse Realty has requested a dashboard to visualize enterprise sales across the different teams. The key place of data is the total of all sales for the year and the progress to the enterprise sales goal.\nWhat dashboard component will effectively show this number and the proximity to the total goal as a single value?",
      options: ["A. Gauge", "B. Donut", "C. Stacked Bar", "D. Table"],
      answer: "A",
      title: "Question 36",
      explanation: "",
    },
    {
      content:
        "Marketing users at Cloud Kicks should be able to view and edit converted leads. The administrator has assigned them permission set with the View and edit Converted Leads permission.\nWhich two ways can the marketing users now access converted leads for editing?\nChoose 2 answers",
      options: [
        "A. Search the Recent Records component on the homepage.",
        "B. Use the Data Import Wizard,",
        "C. Find them in the global search result.",
        "D. Utilize a list view where lead status equals Qualified.",
      ],
      answer: "D",
      title: "Question 37",
      explanation: "",
    },
    {
      content:
        "Ursa Major Solar has service level agreements (SLA) that are routed to support queues. Cases that meet the 24 hour SLA need to be automatically re-assigned to the next tier queue.\nWhich feature should be used to fulfill this requirement?",
      options: [
        "A. Auto-response rule",
        "B. Case escalation rule",
        "C. Einstein Case Routing",
        "D. Case assignment rule",
      ],
      answer: "B",
      title: "Question 38",
      explanation: "",
    },
    {
      content:
        "AW Computing (AWC) occasionally works with independent contractors, who the company stores as Contacts in Salesforce. Contractors often change agencies, and AWC wants to maintain the historical accuracy of the record.\nWhat should AWC use to track Contacts?",
      options: [
        "A. Enable Contacts to multiple Accounts.",
        "B. Create a new Contact record for each agency.",
        "C. Use a partner community to track the Contacts.",
        "D. Create a Junction object to track many-to-many relationship.",
      ],
      answer: "A",
      title: "Question 39",
      explanation: "",
    },
    {
      content:
        "An administrator at Ursa Major Solar needs to send information to an external accounting system What workflow action should the administrator use to accomplish this?",
      options: [
        "A. Outbound Message",
        "B. Create Record",
        "C. Custom Notification",
        "D. Assign Task",
      ],
      answer: "A",
      title: "Question 40",
      explanation: "",
    },
    {
      content:
        "Sales and Customer Care at Ursa Major Solar need to see different fields on the Case related list from the Account record. Sales users want to see Case created date and status while Customer Care would like to see owner, status, and contact.\nWhat should the administrator use to achieve this?",
      options: [
        "A. Related Lookup Filters",
        "B. Search Layout Editor",
        "C. Compact Layout Editor",
        "D. Page Layout editor",
      ],
      answer: "C",
      title: "Question 41",
      explanation: "",
    },
    {
      content:
        "An administrator at Universal Containers has been asked to prevent users from accessing Salesforce from outside of their network.\nWhat are two considerations for this configuration?\nChoose 2 answers",
      options: [
        "A. IP address restrictions are set on the profile or globally for the org.",
        "B. Enforce Login IP Ranges on Every Request must be selected to enforce IP restrictions.",
        "C. Single sign-on will allow users to log in from anywhere.",
        "D. Users can change their password to avoid login IP restrictions.",
      ],
      answer: "A,B",
      title: "Question 42",
      explanation: "",
    },
    {
      content:
        "The Administrator at Universal Container wants to add branding to salesforce.\nWhich two considerations should the administrator keep in mind?\nChoose 2 Answers",
      options: [
        "A. Up to 150 custom themes can be created, modified, or cloned from the built-in themes.",
        "B. Chatter external users see the built-in Lightning theme only.",
        "C. Only one theme can be active at a time, and a theme applies to the entire org.",
        "D. Themes apply to salesforce classic and to the salesforce mobile app.",
      ],
      answer: "A,C",
      title: "Question 43",
      explanation: "",
    },
    {
      content:
        "User at Cloud Kicks want to see information more useful for their role on the Case page.\nHow should an administrator make the pages more dynamic and easier to use?",
      options: [
        "A. Include more tab components with filters.",
        "B. Add Component visibility filters to the Components.",
        "C. Delete the extra component from the page.",
        "D. Remove fields from the record details component.",
      ],
      answer: "B",
      title: "Question 44",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks wants to try out an app from the AppExchange to ensure that the app meets its needs.\nWhich two options should the administrator suggest?\nChoose two answers",
      options: [
        "A. Test Drive in a production org.",
        "B. Download into a Trailhead Playground.",
        "C. Check edition compatibility.",
        "D. Install in a sandbox.",
      ],
      answer: "B,D",
      title: "Question 45",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks is working on a better way to track its product shipments utilizing Salesforce.\nWhich field type should an administrator use to capture coordinates?",
      options: [
        "A. Geolocation",
        "B. Custom address",
        "C. External lookup",
        "D. Geofence",
      ],
      answer: "A",
      title: "Question 46",
      explanation: "",
    },
    {
      content:
        "Dreamhouse Realty agents are double-booking open house event nights. The evet manager wants to event submission process to help agents fill in event details and request dates.\nHow should an administrator accomplish the request?",
      options: [
        "A. Create an approval process on the Campaign object.",
        "B. Create a campaign for agents to request event dates.",
        "C. Create a workflow role to update the Event Date Field.",
        "D. Create a sharing rule so that other agents can view events.",
      ],
      answer: "B",
      title: "Question 47",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks want to have consistency when communication with customers on cases. The company has requested messages to be sent in an email channel with categories to help search for the proper message.\nWhich Solution Should be administrator suggest to meet this requirement?",
      options: [
        "A. Prebuilt Flow Templates.",
        "B. Prebuilt Quick Texts",
        "C. Prebuilt Email Templates.",
        "D. Prebuilt Auto-Responses.",
      ],
      answer: "D",
      title: "Question 48",
      explanation: "",
    },
    {
      content:
        "The administrator at Ursa Major Solar has Created a new record type for customer warranty cases which two assignments should the administrator use to display the new record type to users?\nChoose 2 answers",
      options: [
        "A. Role Assignment",
        "B. Profile Assignment",
        "C. Page layout Assignment.",
        "D. App Manager Assignment.",
      ],
      answer: "B,C",
      title: "Question 49",
      explanation: "",
    },
    {
      content:
        "An administrator needs to create a one-to-many relationship between two objects with limited access to child records.\nWhat type of field should the administrator use?",
      options: [
        "A. Master-detail field",
        "B. Lookup field",
        "C. Roll-up summary",
        "D. Cross Object formula",
      ],
      answer: "B",
      title: "Question 50",
      explanation: "",
    },
    {
      content:
        "An administrator is planning to use Data Loader to mass import new records to a custom object from a new API.\nWhat will the administrator need to do to use the Data Loader?",
      options: [
        "A. Reset their password and their security token.",
        "B. Add a permission set that allows them to import data.",
        "C. Use the Data Import Tool to mass import custom object records.",
        "D. Append their security token at the end of their password to login.",
      ],
      answer: "A",
      title: "Question 51",
      explanation: "",
    },
    {
      content:
        "An administrator at Universal Container needs an automated way to delete records based on field values.\nWhat automated solution should the administrator use?",
      options: [
        "A. Process Builder",
        "B. Workflow",
        "C. Flow Builder",
        "D. Automation Studio",
      ],
      answer: "A",
      title: "Question 52",
      explanation: "",
    },
    {
      content:
        "Ursa Major classifies its accounts as Silver, Gold, or Platinum Level. When a new case is created for a Silver or Gold partner, it should to the Regular Support Queue. When an account is Platinum Level, it should automatically go to the Priority Support Queue.\nWhat should the administrator use to achieve this?",
      options: [
        "A. Workflow Rules",
        "B. Assignment Rules",
        "C. Escalation Rules",
        "D. Case Rules",
      ],
      answer: "B",
      title: "Question 53",
      explanation: "",
    },
    {
      content:
        "The Call centre manager in Ursa Major Solar wants to provide agents with a case dashboard that can be drilled down by case origin, status and owner.\nWhat should an Administrator add to the dashboard to fulfil the request?",
      options: [
        "A. Dashboard Filter",
        "B. Bucket column",
        "C. Combination Chart",
        "D. Dashboard component",
      ],
      answer: "A",
      title: "Question 54",
      explanation: "",
    },
    {
      content:
        "Universal Containers (UC) would like to count the number of open cases associated with each account and update the account with this value every Friday evening. UC has several hundred open cases at any given time.\nWhat should the administrator use to complete this request?",
      options: [
        "A. Use a record trigger flow.",
        "B. Use a scheduled flow",
        "C. Use a scheduled process builder.",
        "D. Use a Roll-Up summary.",
      ],
      answer: "B",
      title: "Question 55",
      explanation: "",
    },
    {
      content:
        "Which tool should an administrator use to review recent configuration changes made in their org?",
      options: [
        "A. Field History Tracking",
        "B. Setup Audit Trail",
        "C. Debug logs",
        "D. Critical Updates",
      ],
      answer: "B",
      title: "Question 56",
      explanation: "",
    },
    {
      content:
        "Support reps at Cloud Kicks (CK) are reporting that when they try to close a case, the Closed option in the Case Status picklist is missing. CK has asked the administrator to find a solution.\nWhy are the support reps unable to see the Closed option in the specified piclist?",
      options: [
        "A. The Support Process being used omits Closed as a status choice.",
        "B. The Case record type is missing Closed as a picklist value.",
        "C. The Close Case page layout must be used to close a case.",
        "D. The Show Closed Statuses m Case Status Field checkbox is set to the default.",
      ],
      answer: "B",
      title: "Question 57",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks executives have noticed the opportunity Expected revenue Field displays incorrect values.\nHow Should the administrator correct this?",
      options: [
        "A. Update the expected revenue associated with the stage.",
        "B. Modify the closed won value associated with the stage.",
        "C. Change the probability associated with the stage.",
        "D. Adjust the forecast category associated with the stage.",
      ],
      answer: "C",
      title: "Question 58",
      explanation: "",
    },
    {
      content:
        "An administrator at Northern Trail Outfitters is creating a validation rule.\nWhich two functions should the administrator use when creating a validation rule?\nChoose 2 answers",
      options: [
        "A. Formula return type",
        "B. Error message location",
        "C. Rule active date",
        "D. Error condition formula",
      ],
      answer: "B,D",
      title: "Question 59",
      explanation: "",
    },
    {
      content:
        "A sales rep has a list of 300 accounts with contacts that they want to load at one time.\nWhich tool should the administrator utilize to import the records to salesforce?",
      options: [
        "A. Data Loader",
        "B. Data Import Wizard",
        "C. Dataloader.io",
        "D. Manual Import",
      ],
      answer: "B",
      title: "Question 60",
      explanation: "",
    },
    {
      content:
        "Which tool should an administrator use to identify and fix potential session vulnerabilities?",
      options: [
        "A. Security Health Check",
        "B. Setup Audit Trail",
        "C. Organization-Wide Defaults",
        "D. Field History Tracking",
      ],
      answer: "A",
      title: "Question 61",
      explanation: "",
    },
    {
      content:
        "An analytics user at Cloud Kicks needs Read, Create, and Edit access for objects and Should be restricted from deleting any records.\nWhat should the administrator do to meet this requirement?",
      options: [
        "A. Assign the standard System Administrator profile to the analytical user.",
        "B. Give the user View all access and assign them to the highest role in the role hierarchy.",
        "C. Create and assign a custom profile with Delete access removed for each object.",
        "D. Create and assign a permission set that includes Read, Create, and Edit access",
      ],
      answer: "C",
      title: "Question 62",
      explanation: "",
    },
    {
      content:
        "The IT manager at universal Containers is doing an audit of the systems security.\nMow should the administrator provide a summary of the org's security health?",
      options: [
        "A. Download the last six months of user login data.",
        "B. Run a Health Check to identify vulnerabilities.",
        "C. Change the Organization-Wide Default to private to restrict visibility.",
        "D. Turn on Event Monitoring to track user events.",
      ],
      answer: "B",
      title: "Question 63",
      explanation: "",
    },
    {
      content:
        "Users at Dreamhouse Reality are only allowed to see opportunities they own. Leadership wants an enterprise- wide dashboard of all open opportunities in the pipeline so that users can see how the company is performing at any point in time.\nHow should an administrator create the dashboard without changing any sharing setting?",
      options: [
        "A. Update the dashboard folder settings to manager for the sales reps role.",
        "B. Add a filter to the dashboard to filter the opportunities by owner role.",
        "C. Build individual dashboards for profiles that need to see the enterprise results.",
        "D. Create a dashboard with the running user set as someone who can see all opportunities.",
      ],
      answer: "D",
      title: "Question 64",
      explanation: "",
    },
    {
      content:
        "The marketing director at Northern Trail Outfitters has requested that the budget field is populated in order for the Lead Status field to be marked as qualified.\nWhat tool should the administrator use to fulfill this request?",
      options: [
        "A. Validation Rule",
        "B. Lead Conversion.",
        "C. Require Field.",
        "D. Workflow Rule",
      ],
      answer: "A",
      title: "Question 65",
      explanation: "",
    },
    {
      content:
        "The service manager at Ursa Major Solar wants to let customers know that they have received their cases via email and their websites. Medium-priority and high-priority cases should receive different email notifications than low-priority cases. The administrator has created three email templates for this purpose.\nHow should an administrator configure this requirement?",
      options: [
        "A. Add three auto-response rules. Configure one rule entry criteria for each rule and set a filter for case priority. Select the appropriate email template for each rule entry.",
        "B. Include three assignment rules that fire when cases are created. Add a filter for case priority. Select the appropriate email template for each rule.",
        "C. Create one auto-response rule. Configure three rule entry criteria and set a filter for case priority.Select the appropriate email template for each rule entry.",
        "D. Configure one workflow rule that fires when cases are created. Add a filter for case priority. Select the appropriate email template for the rule.",
      ],
      answer: "C",
      title: "Question 66",
      explanation: "",
    },
    {
      content:
        "The administrator at Ursa Major Solar has been asked to change the work Item and Project Custom Object Relationship from a master detail to a Lookup.\nWhich Scenario Could prevent the administrator from fulfilling this requirement?",
      options: [
        "A. The Look-Up field is required for Saving Records.",
        "B. The lookup field in all the records contains a value.",
        "C. Roll-Up summary field exist on the master object.",
        "D. A junction object is required to support the lookup.",
      ],
      answer: "C",
      title: "Question 67",
      explanation: "",
    },
    {
      content:
        "The Administrator at Cloud Kicks need to automatically route support cases, regardless of how they are created, to a queue based on case priority.\nWhat tool should the administrator use?",
      options: [
        "A. Auto-Response Rules",
        "B. Email-to-Case",
        "C. Web-to-case",
        "D. Assignment Rules",
      ],
      answer: "D",
      title: "Question 68",
      explanation: "",
    },
    {
      content:
        "Clod Kicks has the organization wide defaults for Opportunity set to private.\nwhich two features should the administrator use to open up access to Opportunity records for sales users working on collaborative deals?\nChoose 2 answers",
      options: [
        "A. Sharing set",
        "B. Role hierarchy",
        "C. Sharing rules",
        "D. Profiles",
      ],
      answer: "B,C",
      title: "Question 69",
      explanation: "",
    },
    {
      content:
        "The sales manager at cloud Kicks approves time off for their employees. They asked the administrator to ensure these requests are seen and responded to by a backup manager while the sales manager is out on vacation.\nWhat should administrator use to fulfill the requirement?",
      options: [
        "A. Delegated Administrator",
        "B. Delegated approver",
        "C. Approval history related list",
        "D. Two step Approval process",
      ],
      answer: "B",
      title: "Question 70",
      explanation: "",
    },
    {
      content:
        "The administrator at Ursa Major Solar need to make sure the unassigned cases from VP customers get transferred to the appropriate service representative within 5 hours. VIP Customers have access to support 24 hours a day.\nHow should this be configured?",
      options: [
        "A. Business Hours.",
        "B. Escalation Rules",
        "C. Case Queues",
        "D. Assignment Rules.",
      ],
      answer: "D",
      title: "Question 71",
      explanation: "",
    },
    {
      content:
        "A sales rep at Ursa Major Solar has launched a series of networking events. They are hosting one event per month and want to be able to report on campaign ROI by month and series.\nHow should the administrator set up the Campaign to simplify reporting?",
      options: [
        "A. Configure campaign Member Statuses to record which event members attended.",
        "B. Create individual Campaigns that all have the same name.",
        "C. Add different record types for the monthly event types.",
        "D. Use Campaign Hierarchy where the monthly events roll up to a parent Campaign",
      ],
      answer: "D",
      title: "Question 72",
      explanation: "",
    },
    {
      content:
        "Northern Trail Outfitters has requested that when the Referral Date field is updated on the custom object Referral Source, the parent object Referral also needs to be updated.\nWhich automation solution should an administrator use to meet this request?",
      options: [
        "A. Process Builder",
        "B. Approval Process",
        "C. Lightning Web Component",
        "D. Workflow Field Update",
      ],
      answer: "A",
      title: "Question 73",
      explanation: "",
    },
    {
      content:
        "Northern Trail Outfitters wants to track ROI for contacts that are key stakeholders for opportunities.\nThe VP of Sales requested that this information be accessible on the opportunity and available for reporting.\nWhich two options should the administrator configure to meet these requirements?\nChoose 2 answers",
      options: [
        "A. Customize Campaign Role.",
        "B. Add the Campaign Member related list to the Opportunity page layout.",
        "C. Add the Opportunity Contact Role related list to the Opportunity page layout.",
        "D. Customize Campaign Member Role.",
        "E. Customize Opportunity Contact Role.",
      ],
      answer: "C,E",
      title: "Question 74",
      explanation: "",
    },
    {
      content:
        "The administrator at cloud kicks has been told that users are unable to add repeating tasks in salesforce.\nWhich two solutions the administrator use to ensure users are able to do this?\nChoose 2 Answers",
      options: [
        "A. Disable shares Activities.",
        "B. Turn on Task Notifications service.",
        "C. Add create Recurring series of Tasks field on Page Layouts",
        "D. Enable creation of Recurring Tasks in Activity Settings",
      ],
      answer: "C,D",
      title: "Question 75",
      explanation: "",
    },
    {
      content:
        "Sales raps at Ursa Solar are having difficulty managing deals. The leadership team has asked the administrator to help sales reps prioritize and close more deals.\nWhat should the administrator and close more deals.",
      options: [
        "A. Einstein Activity Capture",
        "B. Einstein Search Personalization",
        "C. Einstein Lead Scoring",
        "D. Einstein Opportunity Scoring",
      ],
      answer: "D",
      title: "Question 76",
      explanation: "",
    },
    {
      content:
        "What are two considerations an administrator should keep in mind when working with Salesforce objects?\nChoose 2 answers",
      options: [
        "A. Custom and standard objects have standard fields.",
        "B. A new standard object can be created.",
        "C. Standard objects are included with Salesforce.",
        "D. Only standard objects support master-detail relationships.",
      ],
      answer: "A,C",
      title: "Question 77",
      explanation: "",
    },
    {
      content:
        "The administrator at AW Consulting has created a custom picklist field. Business users have requested that it be a text field. The administrator attempts to change the field type but, is unable to because it is referenced by other functionalities.\nWhich functionality is preventing the field type from being changed?",
      options: [
        "A. Visualforce",
        "B. Formula fields",
        "C. Record types",
        "D. Javascript",
      ],
      answer: "D",
      title: "Question 78",
      explanation: "",
    },
    {
      content:
        "Sales reps at Ursa Major Solar are having difficulty managing deals. The leadership team has asked administrator to help sales reps prioritize and close more deals.\nthe administrator configure to help with these issues?",
      options: [
        "A. Einstein Activity Capture",
        "B. Einstein Opportunity Scoring",
        "C. Einstein Search Personalization Einstein Lead Scoring",
      ],
      answer: "B",
      title: "Question 79",
      explanation: "",
    },
    {
      content:
        "Ursa Major Solar wants to automatically notify a manager about any cases awaiting a response from an agent for more than 2 hours after case creation.\nWhich feature should an administrator use to fulfill this requirement?",
      options: [
        "A. Case Escalation Rule",
        "B. Omni-Channel Supervisor",
        "C. Assignment Rule",
        "D. Formula Field",
      ],
      answer: "A",
      title: "Question 80",
      explanation: "",
    },
    {
      content:
        "The administrator at Cloud Kicks has created an approval process for time off requests.\nWhich two automated actions are available to be added as part of the approval process?\nChoose 2 answers",
      options: [
        "A. Auto launched Flow",
        "B. Field Update",
        "C. Email Alert",
        "D. Chatter Post",
      ],
      answer: "B,C",
      title: "Question 81",
      explanation: "",
    },
    {
      content:
        "Cloud kicks has the organization-wide sharing default set to private on the shoe object. The sales manager should be able to view a report containing shoe records for all of the sales reps on their team.\nWhich 3 items should the administrator configure to provide appropriate access to the report?\nChoose 3 answers",
      options: [
        "A. Folder access",
        "B. Field level security",
        "C. Custom report type.",
        "D. Report subscription",
      ],
      answer: "A,B,C",
      title: "Question 82",
      explanation: "",
    },
    {
      content:
        "An administrator at Cloud Kicks needs to export a file of closed won opportunities from the last 90 days. The file should include the Opportunity Name, ID, Close Date, and Amount.\nHow should the administrator export this file?",
      options: [
        "A. Data Loader.",
        "B. Data Export Wizard.",
        "C. Data Import Wizard.",
        "D. Data Export Wizard. ",
      ],
      answer: "A",
      title: "Question 83",
      explanation: "",
    },
    {
      content:
        "Ursa Major Solar provides a 1-year warranty on all of the panels it installs. Installation details, along with the warranty information, a captured on a custom object called Installation. The installation record is created by the installer from the mobile app. Customers son receive a longer warranty as a way of increasing customer satisfaction when an installation gets delayed or has issues.\nHow should the administrator configure Salesforce to capture the expiration date of the warranty?",
      options: [
        "A. Create a formula field to display l year from the warranty purchased.",
        "B. Use a formula as the default value of the warranty Expiration Date field.",
        "C. Add a validation rule to ensure the Expiration Date field is populated.",
        "D. Include the warranty Expiration Date field on the mobile page layout.",
      ],
      answer: "A",
      title: "Question 84",
      explanation: "",
    },
    {
      content:
        "Universal Containers has three separate lines of business. Each line has specific fields that must be displayed to users. However, the fields needed by the sales team are different than the fields needed by the service team.\nHow should the administrator configure this requirement?",
      options: [
        "A. Create six record types, each with 1 page layout.",
        "B. Create one record type with six Page Layouts.",
        "C. Create three record types, each with 2 page layouts.",
        "D. Create two record types, each with 3 page layouts.",
      ],
      answer: "C",
      title: "Question 85",
      explanation: "",
    },
  ],
});
