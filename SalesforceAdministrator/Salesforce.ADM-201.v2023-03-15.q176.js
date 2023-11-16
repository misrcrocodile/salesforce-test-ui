window.testContent = window.testContent || [];
var testId = "SalesforceAdmin1";
var testName = "SalesforceAdmin1.ADM-201";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "SalesforceAdmin1.ADM-201.v2023-03-15.q176",
  content: [
    {
      content: 'Which of these is NOT true of "list views" in SFDC:',
      options: [
        "A. I can choose different list formats from the drop-down menu at the top of any list.",
        "B. List views can only be created or customized by my administrator",
        "C. List views are customizable, and I can create and customize my own views",
        "D. I can change my list view format for any record type by choosing a view type from the drop-down-menu",
        "E. I can drag and drop columns within my list view to change the appearance or order of data",
      ],
      answer: "B",
      title: "Question 2",
      explanation: "Section: Volume J",
    },
    {
      content: "Which is a capability of a campaign? Choose 2 answers MMM",
      options: [
        "A. Track the number of business accounts related to a campaign",
        "B. Convert leads to contacts from the campaign record",
        "C. Add campaign members to other related campaigns using an Apex trigger",
        "D. Update the campaign member status of a lead using the manage campaign members feature",
      ],
      answer: "C,D",
      title: "Question 3",
      explanation: "",
    },
    {
      content:
        "Which of the following features is not available in Professional Edition?",
      options: [
        "A. Big Deal Alert",
        "B. Workflow",
        "C. Account Sharing Rules",
        "D. Multi-Currency",
      ],
      answer: "B",
      title: "Question 4",
      explanation: "Section: Volume C",
    },
    {
      content:
        "This type of relationship links two objects together, but it has no effect on deletion, record ownership, or security, and the lookup relationship field is not required in the page layout.",
      options: [
        "A. Master-Detail-Sub detail Relationship",
        "B. Master-Datail Relationship",
        "C. Lookup Relationship",
      ],
      answer: "C",
      title: "Question 5",
      explanation: "",
    },
    {
      content:
        "You will need a security token to access Salesforce via (choose all that apply)",
      options: [
        "A. Import Wizard",
        "B. Data Loader",
        "C. Salesforce for Outlook",
        "D. All of the above",
      ],
      answer: "B,C",
      title: "Question 6",
      explanation: "Section: Volume A",
    },
    {
      content:
        "What should a system administrator consider before importing a set of records into Salesforce.",
      options: [
        "A. The import file should include a record owner for each record",
        "B. Validation rules are not triggered when importing data using the import wizard",
        "C. Data should be de-duplicated in the import file prior to import",
        "D. Currency field values will default to the personal currency of the record owner",
      ],
      answer: "A,C",
      title: "Question 7",
      explanation: "Section: Volume A",
    },
    {
      content:
        "All fields on the Approval page layout are available to view on the Approval History related list",
      options: ["A. True", "B. False"],
      answer: "B",
      title: "Question 8",
      explanation: "Section: Volume B\n Explanation",
    },
    {
      content: "CORRECT TEXT\nHow can users obtain a security token?",
      options: [],
      answer: "",
      title: "Question 9",
      explanation:
        "1. By changing their password\n 2. By resetting their security token via the Salesforce UI",
    },
    {
      content:
        "Using the following hierarchy, if a sharing rule exists granting Operations Person Read/Write access to Sales Management on the Account Object, what access does Operations Management have to Sales Management's accounts?\nDefault access for the Account object is Public Read Only.\nExecutive Management\nSales Management\nSales Person\nOperations Management\nOperations Person",
      options: [
        "A. None",
        "B. Read Only",
        "C. Read/Write",
        "D. Read/Write/Transfer",
      ],
      answer: "C",
      title: "Question 10",
      explanation:
        "Explanation/Reference:\n Explanation/Reference:\n Read/Write is granted through role hierarchy permissions from the sharing rule. If the sharing rule referenced a sharing group then the Grant Access Using Hierarchies would not apply. This could also be true for a custom object; all standard objects require Grant Access Using Hierarchies.",
    },
    {
      content: "If you delete a case, which two also get deleted?",
      options: ["A. Account", "B. Event", "C. Attachments", "D. Solution"],
      answer: "B,C",
      title: "Question 11",
      explanation: "",
    },
    {
      content: "What is required to create a new user?",
      options: [
        "A. Unique Username in email format.",
        "B. Locale Settings",
        "C. Profile - Standard or Custom",
        "D. Role",
      ],
      answer: "A,B,C,D",
      title: "Question 12",
      explanation: "Section: Volume G",
    },
    {
      content:
        "Custom formula fields can reference other custom formula fields including themselves.",
      options: ["A. False", "B. True"],
      answer: "A",
      title: "Question 13",
      explanation: "",
    },
    {
      content: "For how many days deleted records are kept in the Recycle Bin?",
      options: ["A. 15", "B. 30", "C. 45", "D. 60"],
      answer: "A",
      title: "Question 14",
      explanation: "Section: Volume D\n Explanation/Reference:",
    },
    {
      content:
        "Universal Containers has decided to offer a partner its products at a discounted rate applied to all opportunities. What should the Administrator do to make sure that the appropriate prices are applied to products on opportunities for this partner?",
      options: [
        "A. Create a custom Price Book with the discounted list prices.",
        "B. Create a new list price on the the Standard Price Book.",
        "C. Create a new discount Record Type on the Products object",
        "D. Create a custom object for the discounted products.",
      ],
      answer: "A",
      title: "Question 15",
      explanation: "",
    },
    {
      content:
        "Users at DreamHouse Realty are only allowed to see opportunities they own. Leadership wants an enterprise-wide dashboard of all open opportunities in the pipeline so that users can see how the company is performing at any point in time.\nHow should an administrator create the dashboard without changing any sharing settings?",
      options: [
        "A. Update the dashboard folder settings to manager for the sales reps role.",
        "B. Add a filter to the dashboard to filter the opportunities by owner role.",
        "C. Build individual dashboards for profiles that need to see the enterprise results.",
        "D. Create a dashboard with the running user set as someone who can see all opportunities.",
      ],
      answer: "C",
      title: "Question 16",
      explanation: "",
    },
    {
      content:
        "Which Service Cloud and Service Cloud Console Enhancements in Spring 11 are Automatically visible to all Administrators without any setup required?",
      options: [
        "A. Salesforce Knowledge Article Number",
        "B. Multiple Languages for Salesforce Knowledge",
        "C. Global Search for the Service Cloud Console",
        "D. Additional Case Article Fields Available for Reports and the Articles Related List",
        "E. Salesforce Knowledge Sidebar for the Service Cloud Console (Contextual Knowledge)",
      ],
      answer: "B,D,E",
      title: "Question 17",
      explanation: "",
    },
    {
      content: "Which statement is true about custom summary formula?",
      options: [
        "A. It can only be used in Custom Reports",
        "B. It cannot reference other formula fields in an object",
        "C. It cannot be used in graphs",
        "D. It can only be used in Standard Reports",
      ],
      answer: "B",
      title: "Question 18",
      explanation: "",
    },
    {
      content: "Who can delete records?",
      options: [
        'A. The ability to delete individual records is controlled by administrators, the record owner, users in a role hierarchy above the record owner, and any user that has been granted "Full Access."',
      ],
      answer: "A",
      title: "Question 19",
      explanation: "",
    },
    {
      content:
        'The Director of Sales wants a report that meets the following criteria:\nAll accounts in NY, MA, PA and NJ Account rating of "Hot" or Annual Rev over $8M .The report must meet the state criteria but can optionally meet the account rating or the annual revenue.\nWhich report format would you use to create this custom report?',
      options: [
        "A. The Tabular Report",
        "B. The Summary Report",
        "C. Matrix Report.",
      ],
      answer: "A",
      title: "Question 20",
      explanation: "Section: Volume G",
    },
    {
      content:
        "Which action type is represented by an icon in the process visualizer? Choose 2 answers",
      options: [
        "A. Start a new task",
        "B. Request rejection details",
        "C. Send an email alert",
        "D. View recall details",
      ],
      answer: "A,C",
      title: "Question 21",
      explanation: "",
    },
    {
      content:
        "Data Validation rules are also enforced using the API and Import Wizards.",
      options: ["A. True", "B. False"],
      answer: "A",
      title: "Question 22",
      explanation: "Section: Volume F",
    },
    {
      content: "Fill in the blank.\nWhat does a workflow approval process do?",
      options: [],
      answer: "",
      title: "Question 23",
      explanation:
        "See the answer below\n Explanation/Reference:\n Explanation: It electronically captures a business approval on a SF data record.",
    },
    {
      content:
        "Data Validation rules is not supported in which Salesforce edition?",
      options: [
        "A. Group",
        "B. Unlimited",
        "C. All Editions are supported",
        "D. Contact Manager",
        "E. Professional",
        "F. Developer",
      ],
      answer: "C",
      title: "Question 24",
      explanation: "",
    },
    {
      content:
        "Ursa Major Solar wants to customize Activities (tasks and events). What are three types of customization that occur? Choose 3 answers",
      options: [
        "A. Custom Fields",
        "B. Field Tracking",
        "C. Workflow Rules",
        "D. Assignment Rules",
        "E. validation Rules",
      ],
      answer: "A,C,E",
      title: "Question 25",
      explanation: "",
    },
    {
      content:
        "Which step is required when configuring the new Salesforce for outlook?",
      options: [
        "A. Assign users and profiles to a configuration",
        "B. Select the appropriate config template",
        "C. Select sync direction and conflict behaviour",
        "D. Enable the chatter feed sync with Outlook",
      ],
      answer: "A,C",
      title: "Question 26",
      explanation: "",
    },
    {
      content: "What is a Dashboard made of?",
      options: ["A. Summary Reports", "B. Gauges", "C. Tables", "D. Charts"],
      answer: "A,B,C",
      title: "Question 27",
      explanation: "",
    },
    {
      content: "Page layouts are assigned to _____________.",
      options: [
        "A. Users",
        "B. Profiles",
        "C. Roles",
        "D. Roles & subordinates",
      ],
      answer: "B",
      title: "Question 28",
      explanation: "Section: Volume A",
    },
    {
      content:
        "AW Computing has six sales teams in a region. These teams always consists of the same account manager, engineer, and assistant.\nWhat should the administrator configure to make it easier for teams to collaborate with the same customer?",
      options: [
        "A. Enable and configure standard opportunity teams with splits.",
        "B. Propose the users manually share all their accounts with their teammates.",
        "C. Create a queue for each team and assign account ownership to the queue.",
        "D. Enable account teams and show the users how to set up a default account team.",
      ],
      answer: "D",
      title: "Question 29",
      explanation: "",
    },
    {
      content:
        "What is the Impact on a User of the Organization level Locale Changes?",
      options: [
        "A. The default Locale of the user is also set to the new Organization Level locale",
        "B. The User is asked for a Choice; if he would like to choose New Organization Locale or his own Locale",
        "C. No Impact on the User as he keeps using his own default Locale",
        "D. From a new session, user will see everything in the New Organization Locale",
      ],
      answer: "C",
      title: "Question 30",
      explanation: "Section: Volume D",
    },
    {
      content:
        "Where do images for email templates, Cloud Scheduler, etc. need to be stored?",
      options: ["A. In SF Documents"],
      answer: "A",
      title: "Question 31",
      explanation: "",
    },
    {
      content:
        "Universal Containers has purchased additional licenses for five new sales representatives that will start in 30 days. The email accounts for the new representatives will not be active until they start. The new users should be set up ahead of time to assign records, list views, and other Salesforce utilities needed on the day they start.\nWhich method should a System Administrator use to set up the new users without sending a notification?",
      options: [
        "A. Create new users, and then set the start date for 30 days ahead.",
        "B. Create new users, and then assign a permission set with a start date for 30 days ahead.",
        "C. Create new users, and then Freeze the users.",
        "D. Create new users, and uncheck Generate new password, and notify the user immediately.",
      ],
      answer: "A",
      title: "Question 32",
      explanation: "Section: Volume J",
    },
    {
      content: "Define the Contract Manager profile.",
      options: [
        "A. Standard user perm + edit, approve, activate, delete contracts",
      ],
      answer: "A",
      title: "Question 33",
      explanation: "",
    },
    {
      content:
        "When you transfer an Account which of the following objects are automatically transferred?",
      options: [
        "A. Contacts (on business accounts only), attachments, open opportunities owned by the current account owner",
        "B. Contacts (on business accounts only), attachments, notes, open activities, open opportunities owned by the current account owner",
        "C. Attachments, notes, open activities, open opportunities owned by the current account owner",
        "D. Contacts (on business accounts only), attachments, notes, open activities",
      ],
      answer: "B",
      title: "Question 34",
      explanation: "Section: Volume I",
    },
    {
      content:
        "A sales rep at Ursa Major Solar has launched a series of networking events. They are hosting one event per month and want to be able to report on Campaign ROI by month and senes.\nHow should the administrator set up the Campaign to simplify reporting?",
      options: [
        "A. Create individual Campaigns that all have the same name.",
        "B. Configure Campaign Member Statuses to record which event Members attended.",
        "C. Add different record types for the monthly event types.",
        "D. Use Campaign Hierarchy where the monthly events roll up to a parent Campaign.",
      ],
      answer: "B",
      title: "Question 35",
      explanation: "",
    },
    {
      content: "Which of the following is a standard Profile?",
      options: [
        "A. Sales User",
        "B. Marketing User",
        "C. Invoice Manager",
        "D. Contract Manager",
      ],
      answer: "B,D",
      title: "Question 36",
      explanation: "Section: Volume C\n Explanation/Reference:",
    },
    {
      content: "Can I change the location of Chatter feeds? How?",
      options: [
        "A. None of the Above",
        "B. Yes. But only for Admin users",
        "C. Yes. Using page layouts",
        "D. No. But it can be hidden or shown depending on user preferrence",
      ],
      answer: "D",
      title: "Question 37",
      explanation: "",
    },
    {
      content: "What functionality is available for tasks? (Choose 2 answers)",
      options: [
        "A. Roll-up summary fields can be created for tasks",
        "B. Recurring tasks can be assigned to more than one user.",
        "C. Record types can be created for tasks.",
        "D. Validation rules can be created for tasks.",
      ],
      answer: "C,D",
      title: "Question 38",
      explanation: "",
    },
    {
      content:
        "The administrator at Ursa Major Solar has been asked to change the Work Item and Project custom object relationship from a master-detail to a lookup.\nWhich scenario could prevent the administrator from fulfilling this requirement?",
      options: [
        "A. A junction object is required to support the lookup.",
        "B. Roll-up summary fields exist on the master object.",
        "C. The lookup field is required for saving records.",
        "D. The lookup field in all the records contains a value.",
      ],
      answer: "D",
      title: "Question 39",
      explanation: "",
    },
    {
      content:
        "Which of the following will not bypass Identity Confirmation? (Select one)",
      options: [
        "A. The user is logging in from an IP address within the list of trusted networks.",
        'B. The user\'s record has the "Bypass User Identity Confirmation" checkbox enabled.',
        "C. The user has activated this computer before and has a stored activation cookie.",
        "D. The user's profile has IP login restrictions enabled.",
        "E. The user has logged into Salesforce previously from their current IP address.",
      ],
      answer: "B",
      title: "Question 40",
      explanation: "",
    },
    {
      content:
        "A System Administrator followed the click path: Your Name ? Setup ? Customize ? Reports & Dashboards?\nUser Interface Settings but found no option to enable the Report Builder Upgrade. Which statements could explain this scenario?",
      options: [
        "A. Another System Administrator had already enabled it.",
        "B. That is not the right click path to do the upgrade.",
        "C. They created their Salesforce Org after the Spring 11 release. Thus there is no need for the upgrade.",
        "D. There is no Report Builder Upgrade spring 11 just made it available to all profiles.",
      ],
      answer: "A,C",
      title: "Question 41",
      explanation: "",
    },
    {
      content:
        "With sharing rules one can make automatic exceptions to the organization-wide default for defined sets of users.",
      options: ["A. True", "B. False"],
      answer: "A",
      title: "Question 42",
      explanation: "Section: Volume E",
    },
    {
      content:
        "The user default login hours are 8:00 AM - 5:00 PM. The user logs in at 4:30 PM and stays on till 5:01 PM.\nWhat happens?",
      options: [
        "A. The user continues with the session without any interruption",
        "B. The user loses all unsaved data after terminating the session",
        "C. The user terminates the session without losing any data",
        "D. The user is able to work without issues but cannot start new sessions",
        "E. The user is able to work without issues and can start new sessions",
      ],
      answer: "B",
      title: "Question 43",
      explanation: "Section: Volume H",
    },
    {
      content: "CORRECT TEXT\nDefine the Summary Report.",
      options: [],
      answer: "",
      title: "Question 44",
      explanation:
        "Provides\n a listing of data, plus sorting and subtotaling of data. May be used to support dashboard components.",
    },
    {
      content:
        "The VP of sales at Cloud Kicks is receiving an error message that prevents them from saving an opportunity. The administrator attempted the same edit without receiving an error.\nHow can the administrator validate the error the user is receiving?",
      options: [
        "A. Edit the page layout.",
        "B. Log in as the user.",
        "C. Review the sharing model.",
        "D. View the setup audit trail.",
      ],
      answer: "B,C",
      title: "Question 45",
      explanation: "",
    },
    {
      content: "Are Tags searchable from standard Search component?",
      options: ["A. Yes", "B. No"],
      answer: "A",
      title: "Question 46",
      explanation: "",
    },
    {
      content: "You can't package workflow rules with time triggers.",
      options: ["A. True", "B. False"],
      answer: "A",
      title: "Question 47",
      explanation: "Section: Volume G",
    },
    {
      content:
        "The CTO of AW Computing has defined a new policy for cases to improve customer satisfaction. All cases submitted with a Case Reason of Installation must be acknowledged immediately via email and assigned to the appropriate agents. Any cases that are still in the New status after 4 hours must be escalated to support management.\nWhat case management tools need to be utilized for this requirement?",
      options: [
        "A. Auto-response rules, Entitlements, Escalation Rules",
        "B. Auto-response rules, Queues, Escalation Rules",
        "C. Auto-response rules, Macros, Entitlements",
        "D. Auto-response rules, Queues, Macros",
      ],
      answer: "D",
      title: "Question 48",
      explanation: "",
    },
    {
      content: "What objects are cases related to?",
      options: ["A. Contacts", "B. Campaign", "C. Forecast", "D. Accounts"],
      answer: "A,D",
      title: "Question 49",
      explanation: "",
    },
    {
      content:
        "Universal Containers uses a custom field on the account object to. capture the account credit status.\nThe sales team wants to. display the account credit status on opportunities.\nWhich feature should a system administrator use to. meet the reqquirements?",
      options: [
        "A. Roll-up summary field",
        "B. Cross-object formula field",
        "C. Workflow field update",
        "D. Look-up Field",
      ],
      answer: "B",
      title: "Question 50",
      explanation: "",
    },
    {
      content:
        "Is identity confirmation necessary if a user's IP address is known and browser cookie exists?",
      options: ["A. True", "B. False"],
      answer: "B",
      title: "Question 51",
      explanation: "Section: Volume C",
    },
    {
      content:
        "Universal Containers wants sales reps to see the industry, annual revenue, and account owner at a glance on their mobile device. This information should be located at the top of the account reord.\nWhich feature should the administrator configure to meet this requirement?",
      options: [
        "A. Page Layout",
        "B. Mobile Card",
        "C. Field Set",
        "D. Compact Layout",
      ],
      answer: "D",
      title: "Question 52",
      explanation: "",
    },
    {
      content:
        "Sales Rep and Sales Rep B view an Account report for all Accounts without any filters. The company uses a private sharing model. Each rep sees a different number of results.\nWhat is the explanation for the discrepancy in the reports?",
      options: [
        "A. Sales Rep B needs to be assigned to the Sales Rep permission set.",
        "B. Sales Rep B needs to be assigned to the Sales Rep profile.",
        "C. Sales Rep B needs to be assigned to the Sales Rep queue.",
        "D. Sales Rep B needs to be assigned to the Sales Rep role.",
      ],
      answer: "D",
      title: "Question 53",
      explanation: "",
    },
    {
      content: "What is the limit of Look-up Relationships per object?",
      options: ["A. 4", "B. 3", "C. 25", "D. 5", "E. 10", "F. 6"],
      answer: "C",
      title: "Question 54",
      explanation: "",
    },
    {
      content:
        "The difference between an opportunity record type and a sales process is:",
      options: [
        "A. The sales process controls all picklist fields",
        "B. The sales process controls the stage field, the record type controls all other picklist fields",
        "C. The record type controls the stage field, the sales process controls all other picklist fields",
        "D. The record type controls the picklist fields",
      ],
      answer: "B",
      title: "Question 55",
      explanation: "",
    },
    {
      content:
        "Cloud kicks needs to ensure appropriate shipping details are used in orders. Reps should have a streamlined solutions to update the shipping address on selected orders associated with an account when the shipping address is changed on the account.\nHow should the administrator deliver this requirement?",
      options: [
        "A. A screen flow on the order page that lets the reps choose the updated account shipping address in all open associated orders",
        "B. An autolaunched flow on the account page that updates all open orders shipping addresses whenever the account shipping addresses changes.",
        "C. An autolaunched flow on the order page that updates all open orders shipping addresses whenever the account shipping addresses changes.",
        "D. A screen flow on the account page that lets the reps choose the updated account shipping address in all open associated orders",
      ],
      answer: "B",
      title: "Question 56",
      explanation: "",
    },
    {
      content:
        "The Director of Sales wants a report that shows the trending performance of his sales reps. He would like to see the trend by month, with a review of the previous 6 months. Which report format would you use to create this custom report?",
      options: [
        "A. The Tabular Report",
        "B. The Summary Report",
        "C. Matrix Report.",
      ],
      answer: "C",
      title: "Question 57",
      explanation: "",
    },
    {
      content:
        "An administrator needs to configure Ursa Major Solar's Salesforce Mobile app with the company's bran-specific images and color schemes.\nWhich set of branding options should the administrator use?",
      options: [
        "A. Loading page Logo, Brand Color, Loading page Color",
        "B. Loading Page Color, Action Colors, Loading page Logo",
        "C. Individual page Colors, Multiple Loading page Logos",
        "D. Tab Colors, Action Colors, Loading Page Logo",
      ],
      answer: "B",
      title: "Question 58",
      explanation: "",
    },
    {
      content: "Describe the methods to allow access to the application?",
      options: [
        "A. Web Browsers(UI)",
        "B. Mobile application(blackberry)",
        "C. API (Connect for outlook, Connect for Lotus notes, Office edition, online edition ,Data Loader)",
      ],
      answer: "A,B,C",
      title: "Question 59",
      explanation: "",
    },
    {
      content:
        "Which action must be taken to view contacts associated with a case in the console?",
      options: [
        "A. The mini page layout of the case page layout must be modified",
        "B. The related object of the case page layout must be modified",
        "C. The related lists of the case page layout must be modified",
        "D. The custom links of the case page layout must be modified",
      ],
      answer: "A",
      title: "Question 60",
      explanation: "",
    },
    {
      content:
        "The VP of Sales at Cloud Kicks is receiving an error message that prevents them form saving an Opportunity. The administrator attempted the same edit without receiving an error.\nHow can the administrator validate the error the user is receiving?",
      options: [
        "A. Log in as the user",
        "B. Edit the page layout.",
        "C. View the setup audit trail.",
        "D. Review the sharing model",
      ],
      answer: "A",
      title: "Question 61",
      explanation: "",
    },
    {
      content:
        "What should a system administrator consider when deleting a custom field? Choose 3 answers.",
      options: [
        "A. Deleted fields and values can be restored from the recycle bin within 15 days",
        "B. Existing field values must be transferred to a new custom field",
        "C. Field values should be backed up before a field is deleted",
        "D. Fields must be removed from page layouts after being deleted",
        "E. Fields used in workflow and assignment rule cannot be deleted",
      ],
      answer: "A,C,E",
      title: "Question 62",
      explanation: "",
    },
    {
      content:
        "You CANNOT delete standard fields but you can remove non-required standard fields from a page layout",
      options: ["A. True", "B. False"],
      answer: "A",
      title: "Question 63",
      explanation: "Section: Volume C",
    },
    {
      content:
        "Sales users at Universal Containers are reporting that it is taking a long time to edit opportunity records. Normally, the only field they are editing is the Stage field.\nWhich two options should the administrator recommend to help simplify the process?\nChoose 2 answers",
      options: [
        "A. Configure an auto launched flow for Opportunity editing.",
        "B. Use a Kanban list view for Opportunity.",
        "C. Create a simplified Opportunity page layout.",
        "D. Add a path for stage to the opportunity record page.",
      ],
      answer: "A,D",
      title: "Question 64",
      explanation: "",
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
      title: "Question 65",
      explanation: "Section: Volume A",
    },
    {
      content:
        "How can an Administrator customize campaign members? Choose 2 answers: MMM",
      options: [
        "A. Display key campaign member data on an opportunity record",
        "B. Customize the campaign history related list to include campaign member custom fields",
        "C. Display Lead or Contact data directly on a campaign member record",
        "D. Create an approval process for new campaign members",
      ],
      answer: "B,C",
      title: "Question 66",
      explanation: "",
    },
    {
      content:
        "What feature would a system administrator implement to allow AW Computing's prospects/customers to complete a form on the corporate website and have that data automatically become a lead in Salesforce?",
      options: [
        "A. Web-to-Lead",
        "B. Escalation Rules",
        "C. Auto Response Rules",
        "D. Assignment Rules",
      ],
      answer: "A",
      title: "Question 67",
      explanation: "",
    },
    {
      content:
        "Which of the following statements are true about trusted ranges?",
      options: [
        "A. They approve login requests from unknown browsers and IP addresses.",
        "B. They enable end users to activate additional IP addresesses for accessing salesforce.",
        "C. They include IP addresses that are used in conjuction with a browser cookie.",
        "D. They are used to identify regular SF users.",
      ],
      answer: "C,D",
      title: "Question 68",
      explanation: "",
    },
    {
      content: "What are two sources from which cases can be created?",
      options: [
        "A. Connect for Outlook",
        "B. Web-to-Web",
        "C. Email-to-Case",
        "D. Web-to-Lead",
      ],
      answer: "A,C",
      title: "Question 69",
      explanation: "",
    },
    {
      content:
        "A custom lookup field can be added to create a relationship between a standard object and which of the following objects?",
      options: [
        "A. Users and Custom Objects",
        "B. Custom Objects, Contract and Campaigns",
        "C. Leads, Accounts, Contacts and Custom Objects",
        "D. Users, Custom Objects and Campaigns",
      ],
      answer: "A",
      title: "Question 70",
      explanation: "",
    },
    {
      content:
        'After Spring &39; 11 upgrade the System Administrator noticed that he can no longer see the "Report Builder" permission on profiles. Which of the following explains the scenario?',
      options: [
        "A. Report Builder is no longer in use in Spring 11.",
        "B. All profiles get access to the report builder by default.",
        "C. Only Enterprise and Unlimited Edition organizations can use report builder.",
        "D. Only Group and Professional Edition organizations can use report builder.",
        "E. None of the above.",
        "F. The old report wizard will be available only to users in Accessibility Mode.",
      ],
      answer: "B",
      title: "Question 71",
      explanation: "",
    },
    {
      content: 'Specifying a "running user" in dashboard means:',
      options: [
        "A. Any user above running user can edit and delete the dashboard",
        "B. Any user below running user can view only their own records",
        "C. Any user can view all records that the running user role can view",
        "D. Only the running user can view the dashboard",
      ],
      answer: "C",
      title: "Question 72",
      explanation: "",
    },
    {
      content:
        "Active Currencies live in Company Profile, user record (Personal Setup) and in Opportunity (Record).",
      options: ["A. False", "B. True"],
      answer: "B",
      title: "Question 73",
      explanation: "",
    },
    {
      content:
        "An administrator has reviewed an upcoming critical update.\nHow should the administrator proceed with activation of the critical update?",
      options: [
        "A. Activate the critical update in production.",
        "B. Allow the critical update to auto-activate.",
        "C. Activate the critical update in a sandbox",
        "D. Allow the critical update to auto-activate In a sandbox.",
      ],
      answer: "C",
      title: "Question 74",
      explanation: "",
    },
    {
      content:
        "The safes director at Cloud Kicks wants to be able to predict upcoming revenue In the next several fiscal quarters so they can set goals and benchmark how reps are performing.\nWhich two features should the administrator configure?\nChoose 2 answers",
      options: [
        "A. Forecasting",
        "B. Opportunity Stages",
        "C. Sales Quotas",
        "D. Opportunity List View",
      ],
      answer: "A,C",
      title: "Question 75",
      explanation: "",
    },
    {
      content: "Data storage include the following: (check all that apply)",
      options: [
        "A. Salesforce Chatter",
        "B. Files in attachments",
        "C. Cases",
        "D. Email Messages",
        "E. Ideas",
      ],
      answer: "C,D,E",
      title: "Question 76",
      explanation: "Section: Volume I",
    },
    {
      content:
        "Ursa Major Solar recently enabled the multiple currencies feature.\nAs a result, which currency will be used as the foundation for all currency conversion rates?",
      options: [
        "A. Corporate currency",
        "B. Personal currency",
        "C. Record currency",
        "D. Active currency",
      ],
      answer: "A",
      title: "Question 77",
      explanation: "",
    },
    {
      content:
        "There are many dashboard components from SF Labs including the Apex Dashboard Kit which can be installed:",
      options: ["A. True", "B. False"],
      answer: "A",
      title: "Question 78",
      explanation: "",
    },
    {
      content: "Which of the statements are true for Cases:",
      options: [
        "A. Manually entering the case received from an email",
        "B. Associated to Contacts and Accounts",
        "C. Automatically generated by an email or website form",
        "D. Can be assigned only automatically by rule assignment however it can be reassigned manually at later time",
      ],
      answer: "A,B,C",
      title: "Question 79",
      explanation: "",
    },
    {
      content:
        "Which of the following is not an available function in the Formula Fields?",
      options: ["A. RPad", "B. Vlookup", "C. HyperLink", "D. Substitute"],
      answer: "B",
      title: "Question 80",
      explanation: "",
    },
    {
      content:
        "Is it possible to have Sidebar search enabled with Global Search?",
      options: ["A. Yes", "B. No"],
      answer: "B",
      title: "Question 81",
      explanation: "Section: Volume E",
    },
    {
      content:
        "Using the following hierarchy, if a sharing rule exists granting Operations Person Read/Write access to Sales Management on the Account Object, what access does Operations Management have to Sales Management's accounts?\nDefault access for the Account object is Public Read Only.\nExecutive Management\nSales Management\nSales Person\nOperations Management\nOperations Person",
      options: [
        "A. Read Only",
        "B. Read/Write",
        "C. None",
        "D. Read/Write/Transfer",
      ],
      answer: "B",
      title: "Question 82",
      explanation: "",
    },
    {
      content:
        "Account team is a set of users that normally work together on _________?",
      options: [
        "A. Accounts",
        "B. Opportunities",
        "C. Cases",
        "D. Leads",
        "E. Contacts",
      ],
      answer: "A",
      title: "Question 83",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks has a customer success agent going on leave and needs to change ownership on multiple cases.\nWhich two users are able to fulfill this request?\nChoose 2 answers",
      options: [
        "A. A user with Read permission on the account.",
        "B. A user with a manager role above the agent.",
        "C. A user with the Manage Cases permission.",
        "D. A user with the System Administrator profile.",
      ],
      answer: "C,D",
      title: "Question 84",
      explanation: "",
    },
    {
      content:
        "Users in separate departments are able to see and edit different fields on Opportunities. The Sales team can edit all fields on the Opportunity while the Support team has read-only access to these fields.\nWhere is field -level Security controlled for users on these teams?",
      options: [
        "A. Role",
        "B. Public Groups",
        "C. Sharing Rules",
        "D. Profile",
      ],
      answer: "D",
      title: "Question 85",
      explanation: "",
    },
    {
      content:
        'Which feature effectively allows you to "lock" the converted amount on closed opportunities?',
      options: [
        "A. Locale",
        "B. Company Profile",
        "C. Multi-currency",
        "D. Advanced Currency Management",
        "E. None of the above",
      ],
      answer: "D",
      title: "Question 86",
      explanation: "Section: Volume A",
    },
    {
      content:
        "DreamHouse Realty (DHR) wants a templated process with a mortgage calculator that generates leads for loans. DHR needs to complete the project within 30 days and has maxed out its budget for the year.\nWhich AppExchange item should help the administrator meet the request?",
      options: [
        "A. Bolt Solutions",
        "B. Lightning Community",
        "C. Lightning Data",
        "D. Flow Solutions",
      ],
      answer: "D",
      title: "Question 87",
      explanation: "",
    },
    {
      content:
        "The administrator at Ursa Major Solar has been asked to change the work Item and Project Custom Object Relationship from a master detail to a Lookup.\nWhich Scenario Could prevent the administrator from fulfilling this requirement?",
      options: [
        "A. Roll-Up summary field sexist on the master object.",
        "B. The Look-Up field is required for Saving Records.",
        "C. The lookup field in all the records contains a value.",
        "D. A junction objs aect is required to support the lookup.",
      ],
      answer: "A",
      title: "Question 88",
      explanation: "",
    },
    {
      content:
        "Ursa Major Solar has the following environment and requirements:\n* A new custom object named Regulations is a child of the Account object.\n* All users need the ability to view Regulations when viewing Accounts with the Sales Account Page Layout.\nHow should a Salesforce Administrator provide access to Regulations on the Sales Account Page Layout?",
      options: [
        "A. By adding a new custom link for Regulations__c to the Sales Account Page Layout",
        "B. By adding a new section for Regulations__c to the Sales Account Page Layout",
        "C. By adding a new related list for Regulations__c to the Sales Account Page Layout",
        "D. By adding a new action for Regulations__c to the Sales Account Page Layout",
      ],
      answer: "C",
      title: "Question 89",
      explanation: "Section: Volume L",
    },
    {
      content:
        "Where can the multilingual solution search feature be enabled? (2 answers)",
      options: [
        "A. Self-service portal",
        "B. Solution tab search",
        "C. Salesforce content",
        "D. Public knowledge base",
      ],
      answer: "A,D",
      title: "Question 90",
      explanation: "",
    },
    {
      content:
        "Which of the following can be done on the Activity Settings page at Your Name | Setup | Customize | Activities | Activity Settings?",
      options: [
        "A. Enable Group Tasks.",
        "B. Enable Email Attachements.",
        "C. Mass transfer activities.",
        "D. Change the Activities page layout.",
        "E. Show Event Details on Multi-User Calendar View.",
        "F. Enable Email Tracking.",
      ],
      answer: "A,E,F",
      title: "Question 91",
      explanation: "",
    },
    {
      content:
        "Which two dashboards components should display data from the summary rows of a report? (Choose two.)",
      options: ["A. Metric", "B. Chart", "C. Gauge", "D. Table"],
      answer: "B,D",
      title: "Question 92",
      explanation: "Section: Volume J",
    },
    {
      content: "What is Force.com Builder? Choose 3 answers:",
      options: [
        "A. Modify the applications to meet your needs – (No- Coding)",
        "B. Group standard and custom tabs into new custom applications",
        "C. Point-and-click customization tool",
        "D. Build custom Applications",
        "E. Customize standard applications provided by Salesforce.com or build their own on-demand applications",
      ],
      answer: "A,C,D",
      title: "Question 93",
      explanation: "",
    },
    {
      content:
        "Which of the following is not a Standard Salesforce.com Application?",
      options: [
        "A. Marketing",
        "B. Service",
        "C. Community",
        "D. Call Center",
        "E. Sales",
      ],
      answer: "B",
      title: "Question 94",
      explanation: "",
    },
    {
      content:
        "You can use Sharing Rules to grant wider access to data. You cannot restrict access below your OWD levels.",
      options: ["A. True", "B. False"],
      answer: "A",
      title: "Question 95",
      explanation: "Topic 4, Volume D",
    },
    {
      content:
        "Sales Rep A shared a pricing guide from a Content library with Sales Rep B.\nSales Rep B reports that the pricing guide is unavailable. How should an administrator troubleshoot this issue?",
      options: [
        "A. Review the search results",
        "B. Review the tagging rules",
        "C. Review the member settings",
        "D. Review the publication date",
      ],
      answer: "D",
      title: "Question 96",
      explanation: "",
    },
    {
      content: "Standard profile permissions cannot be edited.",
      options: ["A. False", "B. True"],
      answer: "B",
      title: "Question 97",
      explanation: "",
    },
    {
      content:
        "An administrator supporting a global team of Salesforce users has been asked to configure company settings.\nWhich two options should the administrator configure?\nChoose 2 answers",
      options: [
        "A. Default Language",
        "B. Currency Locale",
        "C. Login Hours",
        "D. Password Policy",
      ],
      answer: "A,B",
      title: "Question 98",
      explanation: "",
    },
    {
      content:
        "In which two ways should Knowledge articles be used? (Choose two.)",
      options: [
        "A. To display Salesforce Solutions",
        "B. To display for customer self-service",
        "C. To display Salesforce Answers",
        "D. To resolve customer cases.",
      ],
      answer: "B,D",
      title: "Question 99",
      explanation: "Section: Volume J",
    },
    {
      content:
        'To minimize the number of sharing rules, use "Roles and Subordinates" over "Roles" where possible.',
      options: ["A. False", "B. True"],
      answer: "B",
      title: "Question 100",
      explanation: "",
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
      title: "Question 101",
      explanation: "Section: Volume A",
    },
    {
      content:
        "Which action type is represented by an icon in the process visualizer? Choose 2 answers",
      options: [
        "A. Start a new task",
        "B. View recall details",
        "C. Request rejection details",
        "D. Send an email alert",
      ],
      answer: "A,D",
      title: "Question 102",
      explanation: "",
    },
    {
      content:
        "Customizable Forecasting must be enabled for use with Custom Fiscal years.",
      options: ["A. True", "B. False"],
      answer: "A",
      title: "Question 103",
      explanation: "Section: Volume B",
    },
    {
      content: "What is true regarding a Running User",
      options: [
        "A. The Running User follows the sharing model and will allow the users who see the dashboard to see high level sales data for just what they own",
        "B. The Running User overrides the sharing model and will allow the users who see the dashboard to see high level sales data for everyone, except their own",
        "C. The Running User overrides the sharing model and will allow the users who see the dashboard to see high level sales data for everyone, not just their own",
        "D. The Running User follows the sharing model and will allow the users who see the dashboard to see high level sales data for just what they own plus role hierarchy.",
      ],
      answer: "C",
      title: "Question 104",
      explanation: "",
    },
    {
      content:
        "Which is a consideration when creating a drill-to-detail dashboard component?",
      options: [
        "A. The source report must be stored in the drill-to-detail folder.",
        "B. The dashboard component type must be a gauge.",
        "C. Drill-to-detail must be enabled on the custom report type.",
        "D. The source report must be grouped by record name, record owner, or feed post.",
      ],
      answer: "D",
      title: "Question 105",
      explanation: "",
    },
    {
      content: "How many roles can you create for your org?",
      options: ["A. 200", "B. 300", "C. 500", "D. No Limit"],
      answer: "C",
      title: "Question 106",
      explanation: "Section: Volume D\n Explanation/Reference:",
    },
    {
      content:
        "Northern Trail Oufitters has a new flow that automatically sets field values when a new account is created. The flow is launched by a process, but the flow is not working properly.",
      options: [
        "A. Review debug logs with the flow logging level.",
        "B. Use the native feature in the Flow Builder.",
        "C. View the setup audit trail and review for errors.",
        "D. Set up email logs and review the send error logs.",
      ],
      answer: "B",
      title: "Question 107",
      explanation: "",
    },
    {
      content: "Which statements are true about business processes?",
      options: [
        "A. Each business process is associated with one or more record types",
        "B. Each record type is associated with one or more business processes",
        "C. For opportunity objects records are created before business processes",
        "D. Record types implement business processes through page layouts",
        "E. Record types help track sales lifecycle s across divisions, groups and markets.",
      ],
      answer: "A,D",
      title: "Question 108",
      explanation: "Section: Volume I",
    },
    {
      content:
        "All fields on the Approval page layout are available to view on the Approval History related list",
      options: ["A. True", "B. False"],
      answer: "B",
      title: "Question 109",
      explanation: "Section: Volume B",
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
      title: "Question 110",
      explanation: "in to Salesforce.",
    },
    {
      content: "What can an agent do when resolving a case? Choose 2 answers",
      options: [
        "A. Create an article upon closing a case",
        "B. Attach only one article to a case",
        "C. Email articles to a customer",
        "D. Assign data categories to a case",
      ],
      answer: "A,C",
      title: "Question 111",
      explanation: "",
    },
    {
      content:
        "The administrator at Aw Computing wants Account Details, related list and chatter feeds to each appear on separate tabs when reviewing an account.\nWhich type of page should the administrator create?",
      options: [
        "A. Lightning page Tab.",
        "B. Lightning app page.",
        "C. Lightning page Component.",
        "D. Lightning record page.",
      ],
      answer: "A",
      title: "Question 112",
      explanation: "",
    },
    {
      content:
        "The marketing team at universal containers wants to. send an email to. each lead received from its website. The country of the incoming lead should determine the language of the email that will be sent to. the lead. How can the system administrator automate this process?",
      options: [
        "A. Create an email template for each language and an assignment rule to. send appropriate template",
        "B. Create a single email template and use the translation workbench to. translate and send the appropriate template",
        "C. Create an email template for each language and a workflow alert to. send appropriate template",
        "D. Create an email template for each language and an auto. response rule to. send appropriate template",
      ],
      answer: "B",
      title: "Question 113",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks has a custom object named Shoe. The administrator has been asked to ensure that when a relationship is created between Account and Shoe to prevent orphaned shoe records.\nWhat should the administrator do to complete this requirement?",
      options: [
        "A. Create a hierarchical lookup",
        "B. Create a master-detail lookup",
        "C. Create an encrypted lookup",
        "D. Create an indirect lookup",
      ],
      answer: "B",
      title: "Question 114",
      explanation: "",
    },
    {
      content:
        "Salesforce Console only displays views that were previously created.",
      options: ["A. False", "B. True"],
      answer: "B",
      title: "Question 115",
      explanation: "",
    },
    {
      content: "A custom lead field can be mapped to:",
      options: [
        "A. One solution field",
        "B. One account field",
        "C. Two contact fields",
        "D. One case comment",
      ],
      answer: "B",
      title: "Question 116",
      explanation: "",
    },
    {
      content:
        "You CANNOT delete standard fields but you can remove non-required standard fields from a page layout",
      options: ["A. False", "B. True"],
      answer: "B",
      title: "Question 117",
      explanation: "",
    },
    {
      content:
        "What should an administrator take into consideration when creating Content tags?",
      options: [
        "A. Tags are case sensitive.",
        "B. Tags are updatable.",
        "C. Tags combine singular and plural versions",
        "D. Tags are case insensitive.",
      ],
      answer: "D",
      title: "Question 118",
      explanation: "",
    },
    {
      content: "Fill in the blank.\nHow does a Profile differ from a Role?",
      options: [],
      answer: "",
      title: "Question 119",
      explanation:
        "See the answer below\n Explanation/Reference:\n Profile controls what a user can do (read, create, edit, delete) with records",
    },
    {
      content:
        "When I convert a lead to an Opportunity, I must give the opportunity a unique name so I know what it is (ex: Pacific Bank – Red Package).",
      options: ["A. False", "B. True"],
      answer: "B",
      title: "Question 120",
      explanation: "",
    },
    {
      content: "Which type of field cannot have universal requiredness?",
      options: ["A. Email", "B. Lookup", "C. Number", "D. Text"],
      answer: "B",
      title: "Question 121",
      explanation: "",
    },
    {
      content: "Identify the statement that correctly defines data validation",
      options: [
        "A. Data validation ensures the integrity of data when data is imported in SF",
        "B. Data validation ensures the integrity of data when data is exported in SF",
        "C. Data validation ensures the integrity of data before its saved in SF",
        "D. Data validation ensures the integrity of data after its saved in SF",
      ],
      answer: "C",
      title: "Question 122",
      explanation: "",
    },
    {
      content: "What is parallel approval Routing?",
      options: [
        "A. The ability to take back approval requests once you have sent them",
        "B. When you can mass assign your locked records to users in your same Role",
        "C. The ability to send approval requests to yourself multiple times, so you can approve a record",
        "D. The ability to send approval requests to multiple approvers in a single step",
      ],
      answer: "D",
      title: "Question 123",
      explanation: "",
    },
    {
      content:
        "How many fields can be enabled for tracking on a custom Object?",
      options: ["A. 10", "B. 20", "C. 30", "D. 40"],
      answer: "B",
      title: "Question 124",
      explanation: "Section: Volume E",
    },
    {
      content:
        "What are two good use cases for Salesforce approval process? (Choose two.)",
      options: [
        "A. A sales process that involves approvals for all Opportunities by a Sales VP where a Sales VP is allowed to delegate their approval to someone else.",
        "B. A sales process where the first level approval can be denied and automatically routed to the Sales VP for final approval.",
        "C. A sales process where the approval manager is randomly assigned from a public group of managers and a second approval by the Sales VP.",
        "D. A sales process that involves approval to a queue member for all Opportunities and an additional approval by a Sales VP for Opportunities over a certain amount.",
      ],
      answer: "A,B",
      title: "Question 125",
      explanation: "Section: Volume J",
    },
    {
      content:
        "You are about to enter a new lead from a cold call into SFDC. What do you do first?",
      options: [
        "A. Start entering the new lead",
        "B. Search to determine if the company record already exists in Salesforce because you NEVER want to add duplicate data.",
        "C. Import the lead into SFDC using your Outlook email account",
      ],
      answer: "B",
      title: "Question 126",
      explanation: "",
    },
    {
      content:
        "Custom Report Types (CRT) allows you to build a framework from which users can create and customize reports in the report wizard but not in report builder.",
      options: ["A. True", "B. False"],
      answer: "B",
      title: "Question 127",
      explanation: "Section: Volume C",
    },
    {
      content: "Select the option that is NOT true of opportunities:",
      options: [
        "A. Probability is the confidence factor that I will win the Opportunity, and is typically based on the Stage Value",
        "B. Expected Revenue is automatically generated by multiplying the Amount field by the Probability Field (I do not need to add this figure)",
        "C. I should use consistent naming conventions when identifying my opportunities (ex: Account Name - Package offered)",
        "D. The amount field is not for the estimated amount of the sale, but dollar amount I will pay Bill Nuttall for processing my order.",
        'E. Close Date should be the "best" guess as to when I will close a deal',
      ],
      answer: "D",
      title: "Question 128",
      explanation: "",
    },
    {
      content: "What must an administrator do when creating a record type?",
      options: [
        "A. Add the record type to the required user records",
        "B. Assign the record type to the appropriate profiles",
        "C. Create a new page layout for the record type",
        "D. Set the field-level security for the record type",
      ],
      answer: "A",
      title: "Question 129",
      explanation: "",
    },
    {
      content:
        "Which three features can automatically create a Case? (Choose three.)",
      options: [
        "A. Process Builder",
        "B. Lightning for Outlook",
        "C. Web-to-Case",
        "D. Email-to-Case",
        "E. SMS-to-Case",
      ],
      answer: "A,C,D",
      title: "Question 130",
      explanation: "",
    },
    {
      content:
        "A sales user at universal container has updated the opportunity stage for an opportunity in the pipeline. What may be updated because of the stage change? Choose 2 answers",
      options: [
        "A. Sales Quota",
        "B. Account Rating",
        "C. Forecast Category",
        "D. Probability",
      ],
      answer: "C,D",
      title: "Question 131",
      explanation:
        "The Probability value is always updated by a change in the Stage value, even if Probability is marked as read only on your page layout. The Forecast category is tied to the opportunity Stage.\n https://help.salesforce.com/articleView?id=opp_fields.htm&type=5",
    },
    {
      content:
        "Account team is a set of users that normally work together on _________?",
      options: [
        "A. Accounts",
        "B. Leads",
        "C. Opportunities",
        "D. Contacts",
        "E. Cases",
      ],
      answer: "A",
      title: "Question 132",
      explanation: "Section: Volume E",
    },
    {
      content:
        "An administrator at Cloud Kicks has a flow in production that is supposed to create new records.\nHowever, no new records are being created.\nWhat could the issue be?",
      options: [
        "A. The flow is read only.",
        "B. The flow trigger is missing.",
        "C. The flow is inactive.",
        "D. The flow URL is deactivated.",
      ],
      answer: "C",
      title: "Question 133",
      explanation: "",
    },
    {
      content:
        "At Universal Containers, a user's department determines which fields the user can see and edit on Opportunities. For example, users on the Sales team can edit all fields on the Opportunity, while users on the Support team have read-only access to these fields.\nIn which location is field-level security controlled for users on these teams?",
      options: [
        "A. Role",
        "B. Sharing Rules",
        "C. Profile",
        "D. Public Groups",
      ],
      answer: "C",
      title: "Question 134",
      explanation: "",
    },
    {
      content: "Final reject actions can include actions such as email alerts",
      options: ["A. True", "B. False"],
      answer: "A",
      title: "Question 135",
      explanation: "Section: Volume F",
    },
    {
      content:
        "Customer service accesses articles with the KnowledgeLightning component on the Service Cloud Console.\nBilling department users would like similar functionality on the case record without using the console.\nHow should the administrator configure this request?",
      options: [
        "A. Add the Knowledge component list to the page layout.",
        "B. Add the knowledge component to the page layout.",
        "C. Add the Knowledge related list to the page layout.",
        "D. Add the knowledge related list to the record page",
      ],
      answer: "D",
      title: "Question 136",
      explanation: "",
    },
    {
      content: "Recent item and Lookup Hovers use the Record Mini Page.",
      options: ["A. False", "B. True"],
      answer: "B",
      title: "Question 137",
      explanation: "",
    },
    {
      content: "Time-Dependent Workflow – Maximum Triggers Allowed Per Rule:",
      options: [
        "A. Maximum of 20 time triggers per rule",
        "B. Maximum of 10 time triggers per rule",
        "C. Maximum of 50 time triggers per rule",
      ],
      answer: "B",
      title: "Question 138",
      explanation: "",
    },
    {
      content:
        "Which two capabilities are considerations when marking a field as required In Object Manager?\nChoose 2 answers",
      options: [
        "A. The field Is not required to save records via the API on that object.",
        "B. The field Is optional when saving records via web-to-lead and web-to-case.",
        "C. The field Is universally required to save a record on that object.",
        "D. The field Is added to every page layout on that object.",
      ],
      answer: "A,B",
      title: "Question 139",
      explanation: "",
    },
    {
      content:
        "When using Territory Management, can an opportunity be associated with multiple territories?",
      options: ["A. Yes", "B. No"],
      answer: "B",
      title: "Question 140",
      explanation:
        "Explanation/Reference:\n Accounts and Users can be associated with multiple opportunities but Opportunities can only be in one territory.",
    },
    {
      content:
        "Which are true about Email to Salesforce Enhancements after Spring 11 release?",
      options: [
        "A. These enhancements will automatically apply without the need for setup.",
        "B. Is now available in all editions except contact manager and group.",
        "C. You can now choose whether you'd like all emails to be sent to My Unresolved Items so you can manually assign them to related records or whether you'd like us to first try to automatically assign them.",
        "D. You can now choose whether you'd like emails we couldn't automatically assign to be sent to My Unresolved Items.",
      ],
      answer: "C,D",
      title: "Question 141",
      explanation: "",
    },
    {
      content: "Both accounts and users can exist in multiple territories.",
      options: ["A. True", "B. False"],
      answer: "A",
      title: "Question 142",
      explanation: "",
    },
    {
      content:
        "What can an Administrator use to create different content pages for a FAQ and a Help Article for the support team?",
      options: [
        "A. Knowledge article types",
        "B. Knowledge article record types",
        "C. Knowledge article versions",
        "D. Knowledge data categories",
      ],
      answer: "D",
      title: "Question 143",
      explanation: "",
    },
    {
      content:
        "You can customize the Opportunity Stage History related list on an Opportunity Page Layout.",
      options: ["A. True", "B. False"],
      answer: "B",
      title: "Question 144",
      explanation: "",
    },
    {
      content:
        "Which of the following are true about the Default Division field on the User object?",
      options: [
        "A. Division that is applied, by default, to all new accounts and leads created by the user, unless he or she explicitly sets a different division. When users create records related to an account or other record that already has a division, the new record is assigned to the existing record’s division; the default division is not used. This setting does not restrict the user from viewing or creating records in other divisions.Users can change their division at any time. Available only in organizations that use divisions to segment their data.",
        "B. Division that is applied, by default, to all new accounts and leads created by the user, unless he or she explicitly sets a different division. When users create records related to an account or other record that already has a division, the new record is assigned to the existing record’s division; the default division is not used. This setting restricts the user from viewing or creating records in other divisions. Users cannot change their division. Available only in organizations that use divisions to segment their data.",
        "C. Division that is applied, by default, to all new accounts and leads created by the user, unless he or she explicitly sets a different division. When users create records related to an account or other record that already has a division, the new record is assigned to the existing record’s division; the default division is not used. This setting does not restrict the user from viewing or creating records in other divisions.Users cannot change their division. Available only in organizations that use divisions to segment their data.",
      ],
      answer: "C",
      title: "Question 145",
      explanation: "",
    },
    {
      content: "What can be modified on standard object fields? (3 answers)",
      options: [
        "A. Default text",
        "B. Field type",
        "C. Help text",
        "D. Picklist Values",
        "E. Label",
      ],
      answer: "C,D,E",
      title: "Question 146",
      explanation: "",
    },
    {
      content:
        "The support team at Universal Containers wants to be more proactive about renewing support plans with customers. They would like the support representative dedicated to each account to be notified a month before the account's support plan expires.\nWhat should an administrator configure to meet this requirement?",
      options: [
        "A. Assignment rule",
        "B. Workflow rule",
        "C. Auto-response rule",
        "D. Escalation rule",
      ],
      answer: "B",
      title: "Question 147",
      explanation: "Section: Volume J",
    },
    {
      content:
        "What happens when a user clicks on the Create New Apps option present in the List of Apps section?",
      options: [
        "A. User is taken to a Create new App Page in salesforce.com",
        "B. User is taken to App Exchange",
        "C. User is taken to developer.force.com page",
        "D. None of the above",
      ],
      answer: "C",
      title: "Question 148",
      explanation: "Section: Volume B",
    },
    {
      content:
        "Which object must be related in order to create an Opportunity record?",
      options: ["A. Account", "B. Quote", "C. Contact", "D. Lead"],
      answer: "A",
      title: "Question 149",
      explanation: "Section: Volume J",
    },
    {
      content: "What does a page layout allow an administrator to control?",
      options: [
        "A. The fields users see on detail and edit pages",
        "B. The record types available to each role and profile",
        "C. The business process and related picklist values displayed",
        "D. The fields users see in reports and list views",
      ],
      answer: "A",
      title: "Question 150",
      explanation: "",
    },
    {
      content:
        "What type of information can NOT be shown with an S-Control Dashboard component?",
      options: [
        "A. External feed of data",
        "B. Data Warehouse information",
        "C. Combination of two other Dashboard components",
        "D. Flash representations of data",
      ],
      answer: "A",
      title: "Question 151",
      explanation: "",
    },
    {
      content: "Can logins on specific days be restricted?",
      options: ["A. Yes", "B. No"],
      answer: "A",
      title: "Question 152",
      explanation:
        "Explanation/Reference:\n By setting the start and end times on the profile login hours to the same value.",
    },
    {
      content:
        "Standard picklists can be the controlling field but not the dependent in a field dependency:",
      options: ["A. True", "B. False"],
      answer: "A",
      title: "Question 153",
      explanation: "Section: Volume F",
    },
    {
      content:
        "Fields hidden using Field Level Security are subject to Data Validation Rules.",
      options: ["A. True", "B. False"],
      answer: "A",
      title: "Question 154",
      explanation: "Section: Volume B",
    },
    {
      content: "A check box can be a controlling field in a field dependency:",
      options: ["A. True", "B. False"],
      answer: "A",
      title: "Question 155",
      explanation: "Section: Volume B",
    },
    {
      content:
        "Cloud Kicks wants users to only be able to choose Opportunity stage closed won If the Lead source has been selected.\nHow should the administrator accomplish this goal?",
      options: [
        "A. Modify the Opportunity stage a dependent picklist to the Lead source field.",
        "B. Change the Opportunity stage field to read only on the page layout,",
        "C. Configure a validation rule requiring Lead source when the stage is set to closed won.",
        "D. Make Lead source a dependent picklist to the Opportunity stage field.",
      ],
      answer: "B",
      title: "Question 156",
      explanation: "",
    },
    {
      content:
        "Which is the new type of Dashboard Chart to make entry in Spring'11 Release?",
      options: [
        "A. Scatter",
        "B. Metric",
        "C. Organization Chart",
        "D. Gauge",
        "E. Waterfall Chart",
      ],
      answer: "A",
      title: "Question 157",
      explanation: "",
    },
    {
      content:
        "True or False, Final reject actions in a workflow approval process can include actions such as email alerts.",
      options: ["A. False", "B. True"],
      answer: "B",
      title: "Question 158",
      explanation: "",
    },
    {
      content: "You can enable field encryption by:",
      options: [
        "A. It is enabled by default",
        'B. Selecting "Enable Field Encryption" under Organization Wide Defaults',
        "C. Contacting Saleforce.com Customer Support",
      ],
      answer: "C",
      title: "Question 159",
      explanation: "",
    },
    {
      content:
        "Which dashboard component can display data from the summary rows of reports? (2 answers)",
      options: ["A. Metric", "B. Table", "C. Gauge", "D. Chart"],
      answer: "B,D",
      title: "Question 160",
      explanation: "",
    },
    {
      content:
        "Supervisors at Universal Containers have read access to Contacts through their profiles. Sales reps have a separate profile that allows them to edit Contacts. Some sales reps are attending a conference for a week and supervisors will need to fill in to update Contact details while they are out.\nHow should an administrator grant proper access to the supervisors?",
      options: [
        "A. Change the supervisor users profiles to be sales rep.",
        "B. Assign a permission set with the edit permission on Contact to the supervisors that need it.",
        "C. Update the supervisor profile with edit permission on Contact.",
        "D. Create a sharing rule to grant read/write access on Contact to the supervisor role.",
      ],
      answer: "B",
      title: "Question 161",
      explanation: "",
    },
    {
      content: "Can WF update formula fields?",
      options: ["A. No", "B. Yes"],
      answer: "A",
      title: "Question 162",
      explanation: "",
    },
    {
      content: "What is not true about sharing Rules?",
      options: [
        "A. When u delete a sharing rule, the sharing access created by that rule is automatically removed",
        "B. Sharing rules apply to all new and existing records owned by the specified role / group members",
        "C. U can edit the access levels for any sharing rule. You can change the specified groups / roles for the rule",
        "D. When u modify which users are in a group rule, the sharing rules are re-evaluated to add/remove access as necessary.",
        "E. Sharing rules open up access whereas org wide defaults restrict access",
      ],
      answer: "C",
      title: "Question 163",
      explanation: "",
    },
    {
      content:
        "When transferring an account from one user to another, which of the following options are selectable?\n(Choose all that apply.)",
      options: [
        "A. Transfer closed cases",
        "B. Transfer closed opportunities",
        "C. Transfer open activities",
        "D. Transfer closed activities",
      ],
      answer: "A,B",
      title: "Question 164",
      explanation: "Section: Volume D",
    },
    {
      content: "How many lead assignment rules can be active at one time?",
      options: ["A. One", "B. Two", "C. Eleven", "D. Twenty-three"],
      answer: "A",
      title: "Question 165",
      explanation: "Section: Volume I\n Explanation/Reference:",
    },
    {
      content:
        "In which two locations can a system administrator assign a page layout? (Choose two.)",
      options: ["A. Record Type", "B. Profile", "C. Role", "D. App"],
      answer: "A,B",
      title: "Question 166",
      explanation: "",
    },
    {
      content:
        "A sales user at universal container has updated the opportunity stage for an opportunity in the pipeline. What may be updated because of the stage change? Choose 2 answers",
      options: [
        "A. Sales Quota",
        "B. Account Rating",
        "C. Forecast Category",
        "D. Probability",
      ],
      answer: "C,D",
      title: "Question 167",
      explanation:
        "Explanation\n The Probability value is always updated by a change in the Stage value, even if Probability is marked as read only on your page layout. The Forecast category is tied to the opportunity Stage.\n https://help.salesforce.com/articleView?id=opp_fields.htm&type=5",
    },
    {
      content:
        "You can map custom lead fields to standard fields on the Account, Contact, and Opportunity.",
      options: ["A. True", "B. False"],
      answer: "B",
      title: "Question 168",
      explanation: "",
    },
    {
      content:
        "A custom multi-select picklist can be the controlling field for a dependent field",
      options: ["A. True", "B. False"],
      answer: "B",
      title: "Question 169",
      explanation: "",
    },
    {
      content:
        "What is a method for adding content to. Salesforce CRM content? (2 answers)",
      options: [
        "A. Libraries",
        "B. Chatter files",
        "C. Attachments",
        "D. Documents",
      ],
      answer: "A,B",
      title: "Question 170",
      explanation: "",
    },
    {
      content:
        "The company wants all opportunities associated with an account to be added in and displayed on the account record detail page. Is it possible?",
      options: [
        "A. Yes, workflow rule",
        "B. Yes, custom summary field",
        "C. Yes, roll up summary field",
        "D. No, accounts cannot be edited",
      ],
      answer: "C",
      title: "Question 171",
      explanation: "Section: Volume I\n Explanation/Reference:",
    },
    {
      content: "Which is true about Storage Limits?",
      options: [
        "A. Document tabs count against overall storage",
        "B. Salesforce will not allow user to upload data",
        "C. Salesforce will allow a user to enter data up to 5% over capacity,",
      ],
      answer: "B",
      title: "Question 172",
      explanation: "",
    },
    {
      content: "SIMULATION\nList the objects that may have Sharing Rules",
      options: [],
      answer: "",
      title: "Question 173",
      explanation:
        "See the answer below\n Explanation/Reference:\n Explanation:\n * Lead\n * Account\n * Contact\n * Opportunity\n * Case\n * Campaign\n * Custom Objects",
    },
    {
      content:
        "A checkbox can be the controlling field to a dependent picklist.",
      options: ["A. True", "B. False"],
      answer: "A",
      title: "Question 174",
      explanation: "Section: Volume A",
    },
    {
      content:
        "Sales representatives use a custom report type for Account reports. New fields have been created on the Account Object.\nWhat should a System Administrator do to report on the newly created fields?",
      options: [
        "A. From the Custom Report Type, Edit Object Relationships, then add the new fields to the report.",
        "B. Create a new account report folder, go to share, and then add the new fields.a",
        "C. Create a new account report and add the new fields from the Report Builder.",
        "D. From the Custom Report Type, Edit Layout, then add the new fields to the report. Calculator",
      ],
      answer: "D",
      title: "Question 175",
      explanation: "",
    },
    {
      content: "Record Types are not available in Select the right choice",
      options: [
        "A. Enterprise Edition",
        "B. Professional Edition",
        "C. Unlimited Edition",
        "D. Developer Edition",
      ],
      answer: "B",
      title: "Question 176",
      explanation: "",
    },
  ],
});
