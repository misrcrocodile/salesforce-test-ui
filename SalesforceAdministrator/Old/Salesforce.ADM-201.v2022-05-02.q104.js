window.testContent = window.testContent || [];
var testId = "SalesforceAdmin1";
var testName = "SalesforceAdmin1.ADM-201";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "SalesforceAdmin1.ADM-201.v2022-05-02.q104",
  content: [
    {
      content:
        "For each profile, you can set the hours when users can log in and the IP addresses from which they can log in.",
      options: ["A. False", "B. True"],
      answer: "B",
      title: "Question 1",
    },
    {
      content:
        "administrator at Northern Trail Outfitters is unable to add a new user in Salesforce. What could cause this issue?",
      options: [
        "A. The email address used for the username has a contact record.",
        "B. The username is restricted to a domain specific to my domain.",
        "C. The email used for the username is not a corporate email address.",
        "D. The username is already in use another organization.",
      ],
      answer: "D",
      title: "Question 2",
    },
    {
      content:
        "Deleting a lead from a campaign does not delete the lead itself, but it is no longer a campaign member.",
      options: ["A. True", "B. False"],
      answer: "A",
      title: "Question 3",
    },
    {
      content: "SIMULATIONDefine the Summary Report.",
      options: [],
      answer:
        "  See the answer below Explanation/Reference: Explanation: Provides a listing of data, plus sorting and subtotaling of data. May be used to support dashboard components. ",
      title: "Question 4",
    },
    {
      content:
        "Ursa Major is onboarding 15 new employees in three weeks. The Administrator needs to create user records in Salesforce without activating them. Which two methods allow the Administrator to achieve this goal? (Choose two.)",
      options: [
        "A. Create them with the User Import Wizard and ensure that Active is unchecked.",
        "B. Click Add Multiple Users and ensure that Generate New Password and Notify User Immediately are unchecked.",
        "C. Schedule a Time-Dependent Workflow to create users in three weeks.",
        "D. Create a .csv file ensuring that IsActive = False, and use the data loader to insert.",
      ],
      answer: "B,D",
      title: "Question 5",
    },
    {
      content:
        "Ursa Major Solar has selected report folders that are shared with a small group of users who are on Lightning Experience. The administrator needs to prevent these users from customizing the information in the reports. What should the administrator do to achieve this goal?",
      options: [
        "A. Utilize Custom Report Types.",
        "B. Change Field Level Security.",
        "C. Lock report filters.",
        "D. Run the report as a specified user.",
      ],
      answer: "C",
      title: "Question 6",
    },
    {
      content:
        "Universal Containers would like their sales reps to be able to send branded email invitations to customers for business meetings and to collaborate with customers from a branded Website to find a suitable meeting time. How can an Administrator accomplish this?",
      options: [
        "A. Enable Chatter to allow reps to Communicate with customers",
        "B. Create a custom email template for invitations that displays your compant logo",
        "C. Create an external integration with Google calendar using Sites",
        "D. Add a company logo to meeting requests in Salesforce",
      ],
      answer: "D",
      title: "Question 7",
    },
    {
      content:
        "Customer Portal users can view the tags section of a page, if it is included in a page layout.",
      options: ["A. True", "B. False"],
      answer: "B",
      title: "Question 8",
    },
    {
      content:
        "Universal Containers has enabled Data Protection and Privacy for its org. Which page layouts will have the Individual field available for tracking data privacy information?",
      options: [
        "A. Contact, Lead, and Person Account",
        "B. Individual, User, and Account",
        "C. Case and Opportunity",
        "D. Account and User",
      ],
      answer: "D",
      title: "Question 9",
    },
    {
      content:
        "The support group at universal container wants agents to. capture different information for product support and inquiry cases. In addition, the lifecycle for product support cases should have more steps than the lifecycle for inquiry cases. What feature should an administrator use to. meet the requirement? (3 answers)",
      options: [
        "A. Page layouts",
        "B. Permission sets",
        "C. Record Types",
        "D. Field-level Security",
        "E. Support processes",
      ],
      answer: "A,C,E",
      title: "Question 10",
    },
    {
      content:
        "The Chatter Free license gives users the ability to access People, Profiles, Groups and Files as well as (Choose all that apply.)",
      options: [
        "A. Make posts",
        "B. View comments",
        "C. Upload files",
        "D. Join groups",
        "E. View records",
      ],
      answer: "A,B,C,D",
      title: "Question 11",
    },
    {
      content:
        "A Workflow rule can only be triggered when a record is created.",
      options: ["A. True", "B. False"],
      answer: "B",
      title: "Question 12",
    },
    {
      content:
        "Which relationship can be selected in a custom report type where Accounts is the primary object and contacts is the related object?",
      options: [
        "A. Each account must not have related contacts",
        "B. Each contact may or may not have related account",
        "C. Each contact must have a related account",
        "D. Each account may or may not have related contacts",
      ],
      answer: "D",
      title: "Question 13",
    },
    {
      content: "SIMULATIONHow does Cloud Scheduler Work?",
      options: [],
      answer:
        "  See the answer below Explanation/Reference: Explanation: When you use Cloud Scheduler to request a meeting, Salesforce.com creates a unique Web page for your meeting that displays the proposed meeting times. When invitees visit the page, they select the times that work for them, and send you a reply. Salesforce.com tracks all the responses so you can pick the best time to meet when you confirm the meeting. ",
      title: "Question 14",
    },
    {
      content:
        "Universal Container wants to prevent its service team from accessing deal records. While service users are unable to access deal list views, they are able to find the deal records via a search. What options should the administrator adjust to fully restrict access?",
      options: [
        "A. Permissions and tab visibility",
        "B. Page layouts and field- level security",
        "C. Record setting and search index",
        "D. App permissions and search terms",
      ],
      answer: "B",
      title: "Question 15",
    },
    {
      content:
        "Which are true about Email to Salesforce Enhancements after Spring 11 release?",
      options: [
        "A. These enhancements will automatically apply without the need for setup.",
        "B. Is now available in all editions except contact manager and group.",
        "C. You can now choose whether you'd like emails we couldn't automatically assign to be sent to My Unresolved Items.",
        "D. You can now choose whether you'd like all emails to be sent to My Unresolved Items so you can manually assign them to related records or whether you'd like us to first try to automatically assign them.",
      ],
      answer: "C,D",
      title: "Question 16",
    },
    {
      content:
        "Sales reps miss key fields when filling out on opportunity record through the process. Reps need to move forward Win unable to enter previous stage. Which three options should the administrator use to address this need? Choose Three answers",
      options: [
        "A. Enable guided selling.",
        "B. Use Validation Rules.",
        "C. Configure Opportunity Path.",
        "D. Use Flow to mark fields required.",
        "E. Mark fields required on the page layout.",
      ],
      answer: "B,C,E",
      title: "Question 17",
    },
    {
      content: "What does a Profile Control?",
      options: [
        "A. Record Type Access",
        "B. Hours of IP Address",
        "C. Access to Application",
        "D. Permissions",
        "E. Data Visibility",
      ],
      answer: "A,B,C,D",
      title: "Question 18",
    },
    {
      content:
        "The administrator at Aw Computing wants Account Details, related list and chatter feeds to each appear on separate tabs when reviewing an account. Which type of page should the administrator create?",
      options: [
        "A. Lightning page Tab.",
        "B. Lightning record page.",
        "C. Lightning page Component.",
        "D. Lightning app page.",
      ],
      answer: "A",
      title: "Question 19",
    },
    {
      content:
        "What type of field administrators use when creating a junction object?",
      options: ["A. Formula", "B. Look-up", "C. Master-detail", "D. Text area"],
      answer: "C",
      title: "Question 20",
    },
    {
      content:
        "An administrator has been asked to change the data type of an auto number to text field. What should the administrator be aware of before changing the field?",
      options: [
        "A. Existing field values will remain unchanged.",
        "B. Existing field values will be deleted.",
        "C. Existing auto number field to Text is prevented.",
        "D. Existing field values will be Converted.",
      ],
      answer: "A",
      title: "Question 21",
    },
    {
      content:
        "Spring \\'11 includes a managed version of Chatter Desktop for enterprise deployments, and administration controls for controlling access to Chatter Desktop in your organization.",
      options: ["A. True", "B. False"],
      answer: "A",
      title: "Question 22",
    },
    {
      content:
        "If a lead, with a single marketing campaign is converted, the campaign information will map to the newly created contact and opportunity record automatically",
      options: ["A. False", "B. True"],
      answer: "B",
      title: "Question 23",
    },
    {
      content:
        "As a system administrator you can create page layout in the console and assign it to profiles.",
      options: ["A. True", "B. False"],
      answer: "A",
      title: "Question 24",
    },
    {
      content:
        'Ursa Major Solar is experiencing quality assurance issues with a product line. An administrator needs to use a standard object to track the extent of the problem. Which standard object should be used"3',
      options: ["A. Case", "B. Opportunity", "C. Product", "D. Account"],
      answer: "B",
      title: "Question 25",
    },
    {
      content: "Which of the following are true about formula fields?",
      options: [
        "A. They are read-only",
        "B. They will not display on record edit pages",
        "C. They will not display on record detail pages",
        "D. They are not searchable",
        "E. They will not display on reports",
      ],
      answer: "A,B,D",
      title: "Question 26",
    },
    {
      content: "You can enable field encryption by:",
      options: [
        'A. Selecting "Enable Field Encryption" under Organization Wide Defaults',
        "B. Contacting Saleforce.com Customer Support",
        "C. It is enabled by default",
      ],
      answer: "B",
      title: "Question 27",
    },
    {
      content:
        "Which of the following statements is true about transferring leads?",
      options: [
        "A. You can transfer to users, but not to queues",
        "B. You can transfer to both queues and users",
        "C. You can transfer to queues, but not to users",
      ],
      answer: "B",
      title: "Question 28",
    },
    {
      content:
        "Which two capabilities are considerations when marking a field as required In Object Manager? Choose 2 answers",
      options: [
        "A. The field Is not required to save records via the API on that object.",
        "B. The field Is optional when saving records via web-to-lead and web-to-case.",
        "C. The field Is universally required to save a record on that object.",
        "D. The field Is added to every page layout on that object.",
      ],
      answer: "B,C",
      title: "Question 29",
    },
    {
      content:
        "Is it true that campaigns and opportunities have many to many relationship?",
      options: ["A. False", "B. True"],
      answer: "A",
      title: "Question 30",
    },
    {
      content:
        "The Administrator at Ursa Major Solar needs to provide information for Total Salesforce Licenses, Used Licenses, and the Remaining Salesforce licenses.Where is Setup can this information be found?",
      options: [
        "A. Users",
        "B. Profiles",
        "C. Company Information",
        "D. Critical Updates",
      ],
      answer: "C",
      title: "Question 31",
    },
    {
      content:
        "Northern Trail outfitters has hired interns to enter Leads into Salesforce and has requested a way to is identify these new records from existing Leads. What approach should an administrator take to meet this requirement?",
      options: [
        "A. Define a record type and assign it to the interns.",
        "B. Create a separate Lead Lightning App.",
        "C. Update the active Leas Assignment Rules.",
        "D. Set up Web-to-Lead form the interns use.",
      ],
      answer: "A",
      title: "Question 32",
    },
    {
      content: "A public group is a grouping of all Except?",
      options: [
        "A. Users",
        "B. Public Groups",
        "C. Roles and Subordinates",
        "D. Roles",
        "E. Queue",
      ],
      answer: "E",
      title: "Question 33",
    },
    {
      content:
        "FILL BLANKWhich report type must be used to create dashboard components?",
      options: [],
      answer: "  Summary / matrix ",
      title: "Question 34",
    },
    {
      content: "A new list view can be created from within the console",
      options: ["A. True", "B. False"],
      answer: "B",
      title: "Question 35",
    },
    {
      content: "Following are the Custom Business Objects EXCEPT:",
      options: [
        "A. All of the above",
        "B. Capture key, related information that applies to your business",
        "C. Standard Salesforce.com Objects",
        "D. Use Force.com builder to build your own objects",
        "E. Correlate to tables in the database",
      ],
      answer: "C",
      title: "Question 36",
    },
    {
      content:
        "When using Territory Management, can an opportunity be associated with multiple territories?",
      options: ["A. Yes", "B. No"],
      answer: "B",
      title: "Question 37",
    },
    {
      content:
        "Universal Containers wants to increase the security of their org by requiring stricter user passwords. Which two of the following should an administrator configure? Choose 2 answers",
      options: [
        "A. Password different than username",
        "B. Minimum password length",
        "C. Prevent common words",
        "D. Password complexity requirement",
      ],
      answer: "B,D",
      title: "Question 38",
    },
    {
      content:
        "Which action can be performed on the Campaign Member object? Choose 3 answers",
      options: [
        "A. Relate a business account to a campaign record",
        "B. Create validation rules related to the campaign member record",
        "C. Create custom lookup field to another object",
        "D. Change a lead to a contact from the campaign member record",
      ],
      answer: "A,B,D",
      title: "Question 39",
    },
    {
      content:
        "If a lead, with a single marketing campaign is converted, the campaign information will map to the newly created contact and opportunity record automatically",
      options: ["A. False", "B. True"],
      answer: "B",
      title: "Question 40",
    },
    {
      content:
        "You have to enable the Report Builder Upgrade first to use Scatter Charts.",
      options: ["A. False", "B. True"],
      answer: "B",
      title: "Question 41",
    },
    {
      content:
        "How should a System Administrator prevent a user from logging in if they are a running user of a dashboard?",
      options: [
        "A. Freeze the user.",
        "B. Delete the user.",
        "C. Change user profile to Read Only.",
        "D. Deactivate the user",
      ],
      answer: "A",
      title: "Question 42",
    },
    {
      content:
        "To email a report to other users, the report must be in a public folder with access granted to the other users?",
      options: ["A. True", "B. False"],
      answer: "A",
      title: "Question 43",
    },
    {
      content:
        "The Self Service Portal and Customer Portal are the same technology?",
      options: ["A. Yes", "B. No"],
      answer: "B",
      title: "Question 44",
    },
    {
      content:
        "When you configure Search Settings for Your Organization, the new value must be between 5 and 50",
      options: ["A. True", "B. False"],
      answer: "A",
      title: "Question 45",
    },
    {
      content:
        "The Self Service Portal and Customer Portal are the same technology?",
      options: ["A. No", "B. Yes"],
      answer: "A",
      title: "Question 46",
    },
    {
      content: "Define the Contract Manager profile.",
      options: [
        "A. Standard user perm + edit, approve, activate, delete contracts",
      ],
      answer: "A",
      title: "Question 47",
    },
    {
      content:
        "Universal Containers is having a quality control problem with one of its product lines.Multiple BooksWhich standard object can be used to track the extent of the problem?",
      options: [
        "A. Product",
        "B. Case",
        "C. Opportunity Calculator",
        "D. Account",
      ],
      answer: "B",
      title: "Question 48",
    },
    {
      content:
        "Universal Containers has two sales groups. Each group has its own unique sales process. How can an administrator ensure that sales representatives have access to only the stages relevant to their sales process when working on opportunities?",
      options: [
        "A. Multi-select picklists",
        "B. Page layouts",
        "C. Record types",
        "D. Roles",
      ],
      answer: "C",
      title: "Question 49",
    },
    {
      content:
        "Which of the following is the new workflow feature of Spring'11 Release?",
      options: [
        "A. Field Update",
        "B. Workflow Rules",
        "C. Outbound messages",
        "D. Flows",
      ],
      answer: "D",
      title: "Question 50",
    },
    {
      content:
        "When Chatter is enabled in an org, the following happens (choose all that apply).",
      options: [
        "A. The Chatter app is added to the Force.com app menu",
        "B. The Chatter tab is added to all standard apps",
        "C. Accounts, Contacts, Cases, Leads and Opportunities are enabled for Chatter",
        "D. All users are added to the All Chatter group",
        "E. All of the above",
      ],
      answer: "A,B,C",
      title: "Question 51",
    },
    {
      content: "Can WF update formula fields?",
      options: ["A. Yes", "B. No"],
      answer: "B",
      title: "Question 52",
    },
    {
      content: "Match the workflow steps with the setup requirement?",
      options: [
        "A. Task - Select the Subject, status and priorityEmail Alert - Select a templateField Update - Select a fieldRule - Select the subject status and priority",
      ],
      answer: "A",
      title: "Question 53",
    },
    {
      content: "An account team can be added by all Except:",
      options: [
        "A. Anyone in the team",
        "B. Anyone above owner in role hierarchy",
        "C. Administrator",
        "D. Owner",
      ],
      answer: "A",
      title: "Question 54",
    },
    {
      content:
        "Joe is attempting to import an invalid value into a picklist field. The import wizard will respond with an error message.",
      options: ["A. True", "B. False"],
      answer: "B",
      title: "Question 55",
    },
    {
      content: "The Report Builder is different from the Report Wizard.",
      options: ["A. True", "B. False"],
      answer: "A",
      title: "Question 56",
    },
    {
      content: "Which file types can you use when exporting reports?",
      options: [
        "A. You can not export a report. You can only email it.",
        "B. Comma Delimited (.csv)",
        "C. Excel (.xls)",
        "D. PDF",
      ],
      answer: "B,C",
      title: "Question 57",
    },
    {
      content:
        "Universal Containers has a custom object named Feedback which is used to capture Users' candid comments about their experiences at work. The sales team manager and all representatives have rolesin the role hierarchy with sales representatives directly under the sales team manager. HR requires that all Feedback records be private to each User. Managers should not have access to subordinates' Feedback records. What action should an Administrator take to ensure this requirement is met?",
      options: [
        "A. Custom feedback object is set to private and uncheck 'Enable Role Hierarchy' in Organization-wide sharing",
        "B. Custom feedback object is set to private and uncheck 'grant access using hierarchies' in Organization-wide sharing",
        "C. Custom feedback object is set to restricted and uncheck 'Enable Role Hierarchy' in Organization wide sharing",
        "D. Custom feedback object is set to restricted and uncheck 'grant access using hierarchies' in Organization-wide sharing",
      ],
      answer: "B",
      title: "Question 58",
    },
    {
      content: "Dashboard components can be sorted by how many levels?",
      options: ["A. 4", "B. 2", "C. 1", "D. 5"],
      answer: "B",
      title: "Question 59",
    },
    {
      content:
        "An Administrator needs to configure Ursa Major Solar's Salesforce Mobile app with the company's brand- specific images and color schemes. Which set of branding options should the Administrator use?",
      options: [
        "A. Individual Page Colors, Multiple Loading Page Logos",
        "B. Loading Page Color, Action Colors, Loading Page Logo",
        "C. Tab Colors, Action Colors, Loading Page Logo",
        "D. Loading Page Logo, Brand Color, Loading Page Color",
      ],
      answer: "D",
      title: "Question 60",
    },
    {
      content:
        "Which of the following components is displayed only if the record in the detail view has associated records?",
      options: [
        "A. Mini Page Layout",
        "B. Mini View",
        "C. Console layout",
        "D. List view",
      ],
      answer: "B",
      title: "Question 61",
    },
    {
      content:
        "The sales operations team ta Universal Containers purchase a list of shipping companies they would like to be imported into the Salesforce org ... import Wizard. Some companies on the list may already be customers. Which fields should administrator use to prevent duplicates when importing these Account records?",
      options: [
        "A. Account name and Account Site.",
        "B. Account name and Created Date.",
        "C. Account Name and Billing Address.",
        "D. Owner name and Account Name.",
      ],
      answer: "D",
      title: "Question 62",
    },
    {
      content:
        "What feature would a system administrator implement to allow AW Computing's prospects/customers to complete a form on the corporate website and have that data automatically become a lead in Salesforce?",
      options: [
        "A. Web-to-Lead",
        "B. Escalation Rules",
        "C. Assignment Rules",
        "D. Auto Response Rules",
      ],
      answer: "A",
      title: "Question 63",
    },
    {
      content: "What is the limit of Master-Detail Relationships per object?",
      options: ["A. 35", "B. 25", "C. 15", "D. 3", "E. 2", "F. 8"],
      answer: "E",
      title: "Question 64",
    },
    {
      content:
        "DreamHouse Realty uses Content to store files for Marketing collateral. The Marketing VP wants the Collateral_ID__c to be required and for the ID to contain a minimum of ten characters. What should an administrator suggest to meet these requirements?",
      options: [
        "A. Validation Rules",
        "B. Workflow Rules",
        "C. Create Collateral_ID__c as a formula field.",
        "D. Mark Collateral_ID__c as required on the page layout.",
      ],
      answer: "A",
      title: "Question 65",
    },
    {
      content:
        "Which two solutions could an administrator find on the AppExchange to enhance their organization? Choose 2 answers",
      options: [
        "A. Consultants",
        "B. Customers",
        "C. Components",
        "D. Communities",
      ],
      answer: "A,C",
      title: "Question 66",
    },
    {
      content:
        "In List View Enhancements, users can export list results to CSV file",
      options: ["A. True", "B. False"],
      answer: "B",
      title: "Question 67",
    },
    {
      content:
        "Which Salesforce editions provide option for customizing profiles?",
      options: [
        "A. All Editions",
        "B. Professional, Unlimited, and Developer Editions",
        "C. All except Group Edition",
        "D. Unlimited, Developer and Enterprise Editions",
        "E. Enterprise, Unlimited, and Developer Editions",
        "F. All except Professional Edition",
      ],
      answer: "D,E",
      title: "Question 68",
    },
    {
      content:
        "Ursa Major Solar has the following environment and requirements:* Critical, high-priority accounts have an assigned District Manager, Sales Representative, Inside Sales Representative, and Customer Service Representative.* The Sales Manager wants to prevent these accounts from being inadvertently contacted more than once on the same day.* The Sales Manager wants to report on various customer interactions. How should the administrator fulfill these requirements7",
      options: [
        "A. Log a separate task, call, or activity on the account.",
        "B. Enter comments into the notes section on the account.",
        "C. Log a case on the account.",
        "D. Post customer interactions in Chatter on the account.",
      ],
      answer: "A",
      title: "Question 69",
    },
    {
      content:
        "Universal Containers introduced a new product and wants to track all associated cases that get logged. They are looking for an automated solution that would give the product's two lead engineers read/write access to all new cases that reference the new product. What should an administrator do to satisfy this requirement?",
      options: [
        "A. Create a user-based sharing rule and an ad-hoc case team.",
        "B. Create a queue and a criteria-based sharing rule.",
        "C. Create a predefined case team and an assignment rule.",
        "D. Create an auto-response rule and a public group.",
      ],
      answer: "A",
      title: "Question 70",
    },
    {
      content:
        "All of the following may be uploaded to the AppExchange Directory EXCEPT:",
      options: [
        "A. Custom Tabs",
        "B. Custom Fields on Custom Objects",
        "C. Custom Fields on Standard Objects",
        "D. Custom Assignment Rules",
      ],
      answer: "C",
      title: "Question 71",
    },
    {
      content:
        "Cloud Kicks wants to update a screen flow so that if the checkbox field High Value Customer is set to true, the first screen is skipped and the user is directed to the second screen. How should the administrator configure the decision element?",
      options: [
        "A. Use the contains operator and {!$GlobalConstant.False} as the value.",
        'B. Use the equals operator and "High Value Customer" as the value.',
        'C. Use the contains operator and "High Value Customer" as the value',
        "D. Use the equals operator and {!$GlobalConstant.True} as the value.",
      ],
      answer: "D",
      title: "Question 72",
    },
    {
      content: "Custom Objects are reportable.",
      options: ["A. True", "B. False"],
      answer: "A",
      title: "Question 73",
    },
    {
      content:
        "An administrator is on a tight deadline to create dashboards for the sales and marketing teams at AW Computing. What should the administrator do to meet the deadline without increasing the budget?",
      options: [
        "A. Train someone on the sales and marketing teams to build dashboards,",
        "B. Hire a consultant to build the custom dashboards.",
        "C. Build the dashboards manually to meet the deadline.",
        "D. Check the AppExchange for a prebuilt solution that can be easily customized.",
      ],
      answer: "D",
      title: "Question 74",
    },
    {
      content:
        "The Campaign ROI Analysis Report uses which of the following calculations to determine the ROI percentage for a campaign?",
      options: [
        "A. Expected Revenue / Budgeted Cost",
        "B. Total Amount of Opportunities / Expected Revenue",
        "C. (Amount of Won Opportunities minus Actual Cost) / Actual Cost",
        "D. Amount of Won Opportunities / Budgeted Cost",
      ],
      answer: "C",
      title: "Question 75",
    },
    {
      content: "In order to Enable Territory Management you should have:",
      options: [
        "A. Standard Profile",
        "B. Customizable Forecasting",
        "C. Enable Forecasting",
        "D. All of the above",
      ],
      answer: "B",
      title: "Question 76",
    },
    {
      content:
        "Cloud Kicks (CK) has a new administrator who is asked to put together a memo detailing Salesforce usage to budget for upcoming license purchases.Where should the administrator go to find out what type of licenses CK has purchased and how many are available?",
      options: [
        "A. Search for licenses types in setup",
        "B. User management settings in setup in setup",
        "C. User licenses related list in company information",
        "D. SageNbASSR entitlements related list in company information",
      ],
      answer: "C",
      title: "Question 77",
    },
    {
      content:
        "If the lead has a record type, the default record type of the new owner is assigned to records created during lead conversion.",
      options: ["A. True", "B. False"],
      answer: "A",
      title: "Question 78",
    },
    {
      content:
        "A company has a complicated Sales process regarding its opportunities. The company has three different lines of business (Widget A, Widget B, Widget C) that each contain fields specific to that line of business's industry and customers. For each line of business, there is a specific set of fields that Sales users should see and a different set of fields that Marketing users should see. allow should an Administrator configure Page Layouts and Record Types for the Opportunity object so that each team sees what it needs to see, without cluttered layouts containing unnecessary fields?",
      options: [
        "A. Create six Record Types (Sales Widget A, Sales Widget B, Sales Widget C, Marketing Widget A, Marketing Widget B, and Marketing Widget C) with six total Page Layouts, one for each Record Type.",
        "B. Create one Record Type with six Page Layouts (Sales Widget A, Sales Widget B, Sales Widget C, Marketing Widget A, Marketing Widget B, and Marketing Widget C).",
        "C. Create three Record Types (Widget A, Widget B, Widget C) with six Page Layouts (Sales Widget A, Sales Widget B, Sales Widget C, Marketing Widget A, Marketing Widget B, and Marketing Widget C).",
        "D. Create six Record Types (Sales Widget A, Sales Widget B, Sales Widget C, Marketing Widget A, Marketing Widget B, and Marketing Widget C) with one Page Layout.",
      ],
      answer: "C",
      title: "Question 79",
    },
    {
      content:
        "Which of the following cannot be used as a source report for the Analytical Snap Shot?",
      options: [
        "A. Tabular Reports",
        "B. All can be used",
        "C. Summary Reports",
        "D. Matrix Reports",
      ],
      answer: "D",
      title: "Question 80",
    },
    {
      content:
        "Ursa Major Solar's administrator created a new account record type, but when marketing users are creating new account records, they are unable to choose the new record type. What are two potential causes of this issue? (Choose two.)",
      options: [
        "A. The record type is disassociated from the page layout.",
        "B. The record type is disabled on the marketing user profile.",
        "C. The record type default setting is disabled.",
        "D. The record type is deactivated.",
      ],
      answer: "B,D",
      title: "Question 81",
    },
    {
      content: "Custom Objects are reportable.",
      options: ["A. False", "B. True"],
      answer: "B",
      title: "Question 82",
    },
    {
      content:
        "What feature allows a user to group campaigns within a specific marketing program or initiative?",
      options: [
        "A. Campaign members",
        "B. Campaign lists",
        "C. Campaign hierarchy",
        "D. Campaign influence",
      ],
      answer: "C",
      title: "Question 83",
    },
    {
      content:
        "Sales reps at AW Computing need assistance from product managers when selling certain products. Product managers do not have access to Opportunities but need to gain access when assisting on a specific deal. How can the system administrator accomplish this?",
      options: [
        "A. Notify the product manager using opportunity update reminders",
        "B. Use similar opportunities to show opportunities related to the product manager",
        "C. Enable account teams and allow users to add the product manager",
        "D. Enable sales teams and allow users to add the product manager",
      ],
      answer: "D",
      title: "Question 84",
    },
    {
      content:
        "Are custom object reports accessible when you add a custom object tab?",
      options: [
        "A. Only if the Object is not related to any other object",
        "B. No",
        "C. Yes",
      ],
      answer: "B",
      title: "Question 85",
    },
    {
      content:
        "Northern Trail Outfitters wants to know the average stage duration for all closed opportunities. How should an administrator support this request?",
      options: [
        "A. Refresh weekly reporting shapshots for Closed Opportunities.",
        "B. Run the Opportunity Stage Duration report.",
        "C. Use Process Builder to capture the daily average on each Opportunity. Pee",
        "D. Add formula fields to track Stages on each Opportunity.",
      ],
      answer: "B",
      title: "Question 86",
    },
    {
      content:
        "Users with access to opportunities as sales team members cannot extend sharing for those records:",
      options: ["A. False", "B. True"],
      answer: "B",
      title: "Question 87",
    },
    {
      content: "SIMULATIONWhat is the Cloud Scheduler?",
      options: [],
      answer:
        "  See the answer below Explanation/Reference: Explanation: Cloud Scheduler allows you to request meetings with your customers, and have your customers select when they can meet before you confirm the meeting. ",
      title: "Question 88",
    },
    {
      content:
        "The VP of Marketing wants Sales Reps to get updates when materials are updated in the Marketing library. What feature should an Administrator recommend7",
      options: [
        "A. Approval process",
        "B. Email alert",
        "C. Subscribe",
        "D. Validation rule",
      ],
      answer: "C",
      title: "Question 89",
    },
    {
      content: "How do you find out that the Approval Process is edited?",
      options: [
        "A. Last Modified By Field",
        "B. Audit trail",
        "C. History Record on Approval page layout",
        "D. All of the Above",
      ],
      answer: "D",
      title: "Question 90",
    },
    {
      content: "Final reject actions can include actions such as email alerts",
      options: ["A. False", "B. True"],
      answer: "B",
      title: "Question 91",
    },
    {
      content:
        "What are two considerations for sharing email template folders? (Choose two.)",
      options: [
        "A. Sharing a folder shares all subfolders in that folder.",
        "B. Lightning email templates support packaging.",
        "C. Subfolders are shared separately from the parent folder.",
        "D. Sharing on Lightning email templates in inherited from the folder it is in.",
      ],
      answer: "A,D",
      title: "Question 92",
    },
    {
      content:
        "Which type of field do administrators use when creating a junction object?",
      options: ["A. Text area", "B. Look-up", "C. Master-detail", "D. Formula"],
      answer: "C",
      title: "Question 93",
    },
    {
      content:
        "Adding Records: I must always search for a company or contact record BEFORE adding a new lead, opportunity, contact, or account into Salesforce.",
      options: ["A. True", "B. False"],
      answer: "A",
      title: "Question 94",
    },
    {
      content:
        "Which set of small and large data backup methods are available in native Salesforce",
      options: [
        "A. Mass Exports, Weekly Data Export Service, and Data Loader Exports",
        "B. Dashboard Exports, Report Exports, and Weekly Data Export Service",
        "C. Report Exports, Weekly Data Export Service, and Data Loader Exports",
        "D. Mass Export Wizard, Weekly Data Export Service, and Data Loader Exports Calculator",
      ],
      answer: "C",
      title: "Question 95",
    },
    {
      content:
        "Workflow rules can't be triggered by campaign statistic fields, including individual campaign statistics and campaign hierarchy statistics.",
      options: ["A. True", "B. False"],
      answer: "A",
      title: "Question 96",
    },
    {
      content:
        "Ursa Major Solar uses a validation rule to prevent invalid data. What are three conditions where this rule is used? (Choose three.)",
      options: [
        "A. When records are imported.",
        "B. When records are updated by a workflow rule.",
        "C. When records are deleted by a user.",
        "D. When records are submitted using web-to-lead.",
        "E. When records are edited and saved by a user.",
      ],
      answer: "A,D,E",
      title: "Question 97",
    },
    {
      content:
        "Editing Records: If I see a magnifying glass icon next to any field in SFDC, this means I can start typing into the field and matches will automatically appear to choose from. Or, I can click on the magnifying glass icon and look up data to fill the field with.",
      options: ["A. False", "B. True"],
      answer: "B",
      title: "Question 98",
    },
    {
      content: "Reports and views are not renamed based on the new label value",
      options: ["A. True", "B. False"],
      answer: "A",
      title: "Question 99",
    },
    {
      content: "SIMULATIONList the objects that may have Sharing Rules",
      options: [],
      answer:
        "  See the answer below Explanation/Reference: Explanation: * Lead * Account * Contact * Opportunity * Case * Campaign * Custom Objects ",
      title: "Question 100",
    },
    {
      content:
        "A custom multi-select picklist can be the controlling field for a dependent field",
      options: ["A. False", "B. True"],
      answer: "A",
      title: "Question 101",
    },
    {
      content:
        "Lead assignment rules assign leads to owners and queues based on the criteria the system admin specifies within the rule.",
      options: ["A. False", "B. True"],
      answer: "B",
      title: "Question 102",
    },
    {
      content:
        "A user is having trouble logging into Salesforce. The user's login history shows that this person has attempted log in multiple times and has been locked out of organization. How can the system administrator help the user log into Salesforce? Choose 2 answers",
      options: [
        "A. Log in as the user and enter a new password.",
        "B. Click unlock on the user's record detail page.",
        "C. Send an email to the user containing the user's password.",
        "D. Click Reset Password on the user's record detail page.",
      ],
      answer: "B,D",
      title: "Question 103",
    },
    {
      content:
        "When users log in to Salesforce, either via the user interface, the API, or a desktop client Salesforce CRM confirms the log in is authorized using all of the following EXCEPT:",
      options: [
        "A. Salesforce CRM checks whether the organization has login hour restrictions. If login hour restrictions are specified, any login outside the specified hours is denied.",
        "B. Salesforce CRM then checks whether the user's profile has IP address restrictions. If IP address restrictions are defined for the user's profile, any login from an undesignated IP address is denied and any login from a specified IP address is allowed",
        "C. Salesforce CRM checks whether the user's profile has login hour restrictions. If login hour restrictions are specified for the user's profile, any login outside the specified hours is denied.",
        "D. If profile-based IP address restrictions aren't set, then Salesforce CRM checks whether the user is logging in from an IP address she or he hasn't used to access Salesforce CRM before",
      ],
      answer: "A",
      title: "Question 104",
    },
  ],
});
