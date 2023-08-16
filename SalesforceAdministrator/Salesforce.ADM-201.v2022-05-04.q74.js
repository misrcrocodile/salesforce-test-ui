window.testContent = window.testContent || [];
var testId = "SalesforceAdmin1";
var testName = "SalesforceAdmin1.ADM-201";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "SalesforceAdmin1.ADM-201.v2022-05-04.q74",
  content: [
    {
      content:
        "Which setting on a profile makes a tab hidden in the All App Launcher or viable in arty app, but still allows a user to view records that would normally be found under this tab?",
      options: [
        "A. Tab Settings",
        "B. App Permissions",
        "C. Object Permissions",
        "D. Pig wide Defaults",
      ],
      answer: "A",
      title: "Question 1",
    },
    {
      content:
        "An administrator at Cloud Kicks has a flow in production that is supposed to create new records. However, no new records are being created. What could the issue be?",
      options: [
        "A. The flow URL is deactivated.",
        "B. The flow is read only.",
        "C. The flow trigger is missing.",
        "D. The flow is inactive.",
      ],
      answer: "D",
      title: "Question 2",
    },
    {
      content:
        "What are two considerations an administrator should keep in mind when working with Salesforce objects? Choose 2 answers",
      options: [
        "A. Standard objects are included with Salesforce.",
        "B. Only standard objects support master-detail relationships.",
        "C. A new standard object can be created.",
        "D. Custom and standard objects have standard fields.",
      ],
      answer: "A,D",
      title: "Question 3",
    },
    {
      content:
        "Which tool should an administrator use to identify and fix potential session vulnerabilities?",
      options: [
        "A. Field History Tracking",
        "B. Organization-Wide Defaults",
        "C. Security Health Check",
        "D. Setup Audit Trail",
      ],
      answer: "C",
      title: "Question 4",
    },
    {
      content:
        "Northern Trail outfitters has hired interns to enter Leads into Salesforce and has requested a way to is identify these new records from existing Leads. What approach should an administrator take to meet this requirement?",
      options: [
        "A. Create a separate Lead Lightning App.",
        "B. Update the active Leas Assignment Rules.",
        "C. Set up Web-to-Lead form the interns use.",
        "D. Define a record type and assign it to the interns.",
      ],
      answer: "D",
      title: "Question 5",
    },
    {
      content:
        "An Administrator supporting global team of salesforce users has been asked to configure the company settings Which two options should the administrator configure? Choose 2 answers",
      options: [
        "A. Currency Local",
        "B. Default Language",
        "C. Password Policy",
        "D. Login Hours",
      ],
      answer: "A,B",
      title: "Question 6",
    },
    {
      content:
        "The administrator at cloud kicks is trying to debug a screen flow that create contacts. One of the variables in the flow is missing on the debug screen. What could cause this issue?",
      options: [
        "A. The flow is an inactive version",
        "B. The available for output checkbox was unchecked.",
        "C. The available for input checkbox was unchecked.",
        "D. The field type is unsupported by debugging.",
      ],
      answer: "D",
      title: "Question 7",
    },
    {
      content:
        "Executives at Cloud Kicks have reported that their dashboards are showing inaccurate data. The administrator has discovered been changing the source reports. Which two actions should the administrator take to preserve the integrity of the source reports? Choose 2 answers",
      options: [
        "A. Create a new report folder with viewer access.",
        "B. Change the dashboard to be a dynamic dashboard",
        "C. Move the dashboard reports to the view-only folder.",
        "D. Move the dashboard to the user's private folder.",
      ],
      answer: "A,C",
      title: "Question 8",
    },
    {
      content:
        "When a cloud kicks Opportunity closes, the company would like to automatically create a renewal opportunity. Which two automation tools should an administrator use to accomplish this request? Choose 2 answers",
      options: [
        "A. Flow Builder",
        "B. WorkFlow Rule",
        "C. Approval Process",
        "D. Process Builder",
      ],
      answer: "A,D",
      title: "Question 9",
    },
    {
      content:
        "An administrator has been asked to change the data type of an auto number to text field. What should the administrator be aware of before changing the field?",
      options: [
        "A. Existing field values will be deleted.",
        "B. Existing field values will be Converted.",
        "C. Existing auto number field to Text is prevented.",
        "D. Existing field values will remain unchanged.",
      ],
      answer: "D",
      title: "Question 10",
    },
    {
      content:
        "Cloud Kicks has a Customer success agent going on leave and needs to change ownership on multiple cases. Which two users are able to fulfill this request? Choose 2 answers",
      options: [
        "A. A user with Read Permission on account.",
        "B. A user with the Manage Cases Permission",
        "C. A user with manager role above the agent.",
        "D. A user with the System Administrator profile.",
      ],
      answer: "B,D",
      title: "Question 11",
    },
    {
      content:
        "The administrator at Cloud kicks deleted a custom field but realized there is a business unit that still uses the field. What should an administrator take into consideration when undeleting the field?",
      options: [
        "A. The field history will remain deleted.",
        "B. The field needs to be re-added to reports.",
        "C. The field needs to be restored from the recycle bin.",
        "D. The field needs to be re-added to page Layouts.",
      ],
      answer: "C",
      title: "Question 12",
    },
    {
      content:
        "Northern Trail Outfitters has requested that when the Referral Date field is updated on the custom object Referral Source, the parent object Referral also needs to be updated. Which automation solution should an administrator use to meet this request?",
      options: [
        "A. Lightning Web Component",
        "B. Workflow Field Update",
        "C. Approval Process",
        "D. Process Builder",
      ],
      answer: "D",
      title: "Question 13",
    },
    {
      content:
        "When a Sales rep clicks a button on an opportunity, a simple discount calculator screen should be launched. Which automation tool should an administrator use to build this discount calculator screen?",
      options: [
        "A. Process Builder",
        "B. Workflow Rule",
        "C. Platform Event",
        "D. Flow Builder",
      ],
      answer: "D",
      title: "Question 14",
    },
    {
      content:
        "An analytics user at Cloud Kicks needs Read, Create, and Edit access for objects and Should be restricted from deleting any records. What should the administrator do to meet this requirement?",
      options: [
        "A. Create and assign a custom profile with delete access removed for each object.",
        "B. Assign the standard System Administrator profile to the analytical user.",
        "C. Create and assign a permission set that includes Read, Create, and Edit access",
        "D. Give the user View all access and assign them to the highest role in the role hierarchy.",
      ],
      answer: "A",
      title: "Question 15",
    },
    {
      content:
        "The Sales director at Cloud Kicks wants to be able to predict upcoming revenue in the next several fiscal quarters so they can set goals and benchmark how reps are performing. Which two features should the administrator configure? Choose 2 answers",
      options: [
        "A. Opportunity Stages",
        "B. Opportunity List View",
        "C. Forecasting",
        "D. Sales Quotes",
      ],
      answer: "C,D",
      title: "Question 16",
    },
    {
      content:
        "The DreamHouse Realty team has a master-detail relationship set up with open house as the parent object and visitors as the child object. What type of field should the administrator add to the open house object to track number of visitors?",
      options: [
        "A. Cross-object formula",
        "B. Indirect lookup",
        "C. Multi-select Picklist",
        "D. Roll-up Summary.",
      ],
      answer: "D",
      title: "Question 17",
    },
    {
      content:
        "Cloud Kicks need to be able to show different picklist values for sales and marketing users. Which two options will meet this requirement? Choose 2 answers",
      options: [
        "A. One record type, two profiles, one picklist",
        "B. Two permission sets, one record type, one picklist",
        "C. One page layout, two record types, one picklist",
        "D. Two page layouts, one record type, two picklists",
      ],
      answer: "C,D",
      title: "Question 18",
    },
    {
      content:
        "An administrator at Northern Trail Outfitters is unable to add a new user in salesforce. What could cause this issue?",
      options: [
        "A. The Username is already in use.",
        "B. The Username is not a corporate email address",
        "C. The username is less than 80 characters.",
        "D. The Username is a fake email address.",
      ],
      answer: "A",
      title: "Question 19",
    },
    {
      content:
        "Northern Trail Outfitters has a custom quick action on Account that creates a new Case. How should an administrator make the quick action available on the Salesforce mobile app?",
      options: [
        "A. Modify compact Case page layout to include the action.",
        "B. Include the action in the Salesforce Mobile Navigation menu.",
        "C. Add the Salesforce Mobile and Lightning Experience action to the page layout.",
        "D. Create a custom Lightning App with the action.",
      ],
      answer: "B",
      title: "Question 20",
    },
    {
      content:
        "Sales reps at Ursa Major Solar are having difficulty managing deals. The leadership team has asked administrator to help sales reps prioritize and close more deals.the administrator configure to help with these issues?",
      options: [
        "A. Einstein Opportunity Scoring",
        "B. Einstein Search Personalization Einstein Lead Scoring",
        "C. Einstein Activity Capture",
      ],
      answer: "A",
      title: "Question 21",
    },
    {
      content:
        "administrator at Northern Trail Outfitters is unable to add a new user in Salesforce. What could cause this issue?",
      options: [
        "A. The username is restricted to a domain specific to my domain.",
        "B. The email address used for the username has a contact record.",
        "C. The email used for the username is not a corporate email address.",
        "D. The username is already in use another organization.",
      ],
      answer: "D",
      title: "Question 22",
    },
    {
      content:
        "Cloud Kicks has a screen flow with two questions on the same screen, but only one is necessary at a time. The administrator has been asked to show only the questions that is needed. How should an administrator complete this?",
      options: [
        "A. Use a conditional visibility to hide the unnecessary question",
        "B. Use branching in the flow screen to show the proper scenario",
        "C. Use a decision element and a new screen to show the proper question",
        "D. Use a new version of the flow for each scenario.",
      ],
      answer: "A",
      title: "Question 23",
    },
    {
      content:
        "Cloud kicks has the organization-wide sharing default set to private on the shoe object. The sales manager should be able to view a report containing shoe records for all of the sales reps on their team. Which 3 items should the administrator configure to provide appropriate access to the report?Choose 3 answers",
      options: [
        "A. Folder access",
        "B. Field level security",
        "C. Report subscription",
        "D. Custom report type",
        "E. Role hierarchy",
      ],
      answer: "A,B,E",
      title: "Question 24",
    },
    {
      content:
        "Northern Trail Outfitters has two different sales processes: one for business opportunities with four stages and one for partner opportunities with eight stages. Both processes will vary in page layouts and picklist value options. What should an administrator configure to meet these requirements?",
      options: [
        "A. Public groups to limit record types and sales processes for opportunities.",
        "B. Validation rules that ensure that users are entering accurate sales stage information.",
        "C. Separate record types and Sales processes for the different types of opportunities.",
        "D. Different page layouts that control the picklist values for the opportunity types.",
      ],
      answer: "C",
      title: "Question 25",
    },
    {
      content:
        "Sales Users at Cloud Kicks are requesting that the data in the industry field on the Account object displays on the Opportunity page layout. Which type of the field should an administrator create to accomplish this?",
      options: [
        "A. Cross Object Formula Field",
        "B. Standard Account Field.",
        "C. Custom Account Field",
        "D. Master detail relationship Field",
      ],
      answer: "A",
      title: "Question 26",
    },
    {
      content:
        "An administrator at Universal Containers has been asked to prevent users from accessing Salesforce from outside of their network. What are two considerations for this configuration? Choose 2 answers",
      options: [
        "A. IP address restrictions are set on the profile or globally for the org.",
        "B. Enforce Login IP Ranges on Every Request must be selected to enforce IP restrictions.",
        "C. Users can change their password to avoid login IP restrictions.",
        "D. Single sign-on will allow users to log in from anywhere.",
      ],
      answer: "A,B",
      title: "Question 27",
    },
    {
      content:
        "Universal Containers (UC) has a queue that is used for managing tasks that need to be worked by the UC customer support team. The same team will now be working some of UC's Cases. Which two options should the administrator use to help the support team? Choose 2 answers",
      options: [
        "A. Create a new queue and add Cases as an available object.",
        "B. Configure a flow to assign the cases to the queue.",
        "C. Add Cass to the existing queue as available object.",
        "D. Use assignment rules to set the queue as the owner of the case.",
      ],
      answer: "B,D",
      title: "Question 28",
    },
    {
      content:
        "Dreamhouse Realty agents are double-booking open house event nights. The evet manager wants to event submission process to help agents fill in event details and request dates. How should an administrator accomplish the request?",
      options: [
        "A. Create a campaign for agents to request event dates.",
        "B. Create a sharing rule so that other agents can view events.",
        "C. Create a workflow role to update the Event Date Field.",
        "D. Create an approval process on the Campaign object.",
      ],
      answer: "A",
      title: "Question 29",
    },
    {
      content:
        "An administrator at Universal Container needs an automated way to delete records based on field values. What automated solution should the administrator use?",
      options: [
        "A. Flow Builder",
        "B. Process Builder",
        "C. Automation Studio",
        "D. Workflow",
      ],
      answer: "A",
      title: "Question 30",
    },
    {
      content:
        "The sales manager at cloud Kicks approves time off for their employees. They asked the administrator to ensure these requests are seen and responded to by a backup manager while the sales manager is out on vacation. What should administrator use to fulfill the requirement?",
      options: [
        "A. Approval history related list",
        "B. Delegated Administrator",
        "C. Two step Approval process",
        "D. Delegated approver",
      ],
      answer: "D",
      title: "Question 31",
    },
    {
      content:
        "A sales rep has left the company and an administrator has been asked to re-assign all their accounts and opportunities to a new sales rep and keep the teams as is. Which tool should an administrator use to accomplish this?",
      options: [
        "A. Data Import Wizard",
        "B. Mass Transfer Tool",
        "C. Data Loader",
        "D. Dataloader.io",
      ],
      answer: "B",
      title: "Question 32",
    },
    {
      content:
        "The administrator at cloud kicks has been told that users are unable to add repeating tasks in salesforce. Which two solutions the administrator use to ensure users are able to do this? Choose 2 answers",
      options: [
        "A. Add create Recurring series of Tasks field on Page Layouts",
        "B. Enable creation of Recurring Tasks in Activity Settings",
        "C. Disable shares Activities.",
        "D. Turn on Task Notifications service.",
      ],
      answer: "A,B",
      title: "Question 33",
    },
    {
      content:
        "A sales rep has a list of 300 accounts with contacts that they want to load at one time. Which tool should the administrator utilize to import the records to salesforce?",
      options: [
        "A. Data Import Wizard",
        "B. Dataloader.io",
        "C. Data Loader",
        "D. Manual Import",
      ],
      answer: "A",
      title: "Question 34",
    },
    {
      content:
        "Sales reps miss key fields when filling out on opportunity record through the process. Reps need to move forward Win unable to enter previous stage. Which three options should the administrator use to address this need?Choose Three answers",
      options: [
        "A. Enable guided selling.",
        "B. Mark fields required on the page layout.",
        "C. Use Flow to mark fields required.",
        "D. Use Validation Rules.",
        "E. Configure Opportunity Path.",
      ],
      answer: "B,D,E",
      title: "Question 35",
    },
    {
      content:
        "AW Computing (AWC) occasionally works with independent contractors, who the company stores as Contacts in Salesforce. Contractors often change agencies, and AWC wants to maintain the historical accuracy of the record. What should AWC use to track Contacts?",
      options: [
        "A. Enable Contacts to multiple Accounts.",
        "B. Use a partner community to track the Contacts.",
        "C. Create a Junction object to track many-to-many relationship.",
        "D. Create a new Contact record for each agency.",
      ],
      answer: "A",
      title: "Question 36",
    },
    {
      content:
        "Universal Containers administrator has been asked to create a many-to-many relationship between two existing custom objects. Which two steps should the administrator take when enabling the many-to-many relationship? Choose 2 answers",
      options: [
        "A. Create two lookup relationships on the new object.",
        "B. Create two master detail relationships on the new object.",
        "C. Create URL fields on a custom object.",
        "D. Create a junction with a custom object.",
      ],
      answer: "B,D",
      title: "Question 37",
    },
    {
      content:
        "Cloud Kicks (CK) is partnering with a used shoe store and second-hand bicycle emporium. CK has an automated business process it wants to run once a week to count the number of open cases related to an account. How should the administrator recommend automating this business process?",
      options: [
        "A. Set up a scheduled process in Process Builder.",
        "B. Create a workflow rule with an outbound message.",
        "C. Use a process to update the account when it is edited",
        "D. Configure a scheduled flow in flow Builder.",
      ],
      answer: "D",
      title: "Question 38",
    },
    {
      content:
        "Cloud Kicks wants to allow customers to create their own cases while visiting its public homepage. What should the administrator recommend?",
      options: [
        "A. Email-to-Case",
        "B. Web-to-Case",
        "C. SMS Response",
        "D. Omni-Channel",
      ],
      answer: "B",
      title: "Question 39",
    },
    {
      content:
        "An administrator at Northern Trail Outfitters is creating a validation rule. Which two functions should the administrator use when creating a validation rule? Choose 2 answers",
      options: [
        "A. Rule active date",
        "B. Error message location",
        "C. Formula return type",
        "D. Error condition formula",
      ],
      answer: "B,D",
      title: "Question 40",
    },
    {
      content:
        "An administrator is on a tight deadline to create dashboards for the sales and marketing teams at AW Computing. What should the administrator do to meet the deadline without increasing the budget?",
      options: [
        "A. Check the AppExchange for prebuilt Solution that can be easily customized.",
        "B. Train someone on the sales and marketing teams to build dashboards.",
        "C. Build the dashboards manually to meet the deadline.",
        "D. Hire a Consultant to build the custom dashboards.",
      ],
      answer: "A",
      title: "Question 41",
    },
    {
      content:
        "An administrator at Universal Containers needs a simple way to trigger an alert to the director of sales when opportunities reach an amount of $500,000. What should the administrator configure to meet this requirement?",
      options: [
        "A. Set up Big Deal Alerts for the amount.",
        "B. Key Deals component on the homepage",
        "C. Opportunity warning in Kanban View.",
        "D. Enable Opportunity Update Reminders",
      ],
      answer: "A",
      title: "Question 42",
    },
    {
      content:
        "Northern Trail Outfitters wants emails received from customers to generate cases automatically. How should the administrator ensure that the emails are sent to the correct queue?",
      options: [
        "A. Configure Email-to-Case so emails are delivered to the correct queue",
        "B. Create an Escalation Rules to send cases to the correct queue.",
        "C. Utilize a flow to identify the correct queue and assign the case.",
        "D. Use a custom email services to set the owner of the case upon creation.",
      ],
      answer: "A",
      title: "Question 43",
    },
    {
      content:
        "Cloud kicks wants to track shoe designs by products. Shoe designs should be unable to be deleted, and there can be multiple design for one product across various stages. Which two steps should the administration configure to meet this requirement? Choose 2 answers",
      options: [
        "A. Configure a Custom Lookup Field for shoe design on the product object.",
        "B. Add a custom master detail field for shoe design on the Product Object.",
        "C. Use the Standard Object for designs.",
        "D. Create a Custom Object for shoe design.",
      ],
      answer: "B,D",
      title: "Question 44",
    },
    {
      content:
        "The VP of sales at Universal Containers wants to prevent members of the sales team from changing an opportunity to a date in the past. What should an administrator configure to meet this requirement?",
      options: [
        "A. Field-Level Security",
        "B. Validation Rule",
        "C. Approval Process",
        "D. Assignment Rule",
      ],
      answer: "B",
      title: "Question 45",
    },
    {
      content:
        "AW Computing would like to improve its Case Lightning record page by including:* A filtered component to display a message in bold font when a case is saved as acriticalrecord type.* A quick way to update the account status from the case layout. Which two components should an administrator use to satisfy these requests? Choose 2 answers",
      options: [
        "A. Record details",
        "B. Related List",
        "C. Rich text",
        "D. Related Record",
      ],
      answer: "B,C",
      title: "Question 46",
    },
    {
      content:
        "DreamHouse reality has an approval process. A manager attempts to approve the record but receives an error. What should an administrator review to troubleshoot this request?",
      options: [
        "A. Review the page layout to ensure, the fields updated in the process are visible",
        "B. Check if the user in the next approver is inactive or missing",
        "C. Update the field level security to view on fields that are updated in the process.",
        "D. Add a delegated approver for the next approver in the process.",
      ],
      answer: "B",
      title: "Question 47",
    },
    {
      content:
        "Universal Containers (UC) customers have provided feedback that their support cases are not being responded to quickly enough. UC wants to send all unassigned Cases that have been open for more than 2 hours to an urgent Case queue and alert the support manager. Which feature should an administrator configure to meet this requirement?",
      options: [
        "A. Case Assignment Rules.",
        "B. Case Scheduled Reports.",
        "C. Case Dashboard Refreshes.",
        "D. Case Escalation Rules.",
      ],
      answer: "D",
      title: "Question 48",
    },
    {
      content:
        "An Administrator at DreamHouse Realty wants an easier way to assign an agent capacity and skill set. Which feature should the administrator enable to meet this requirement?",
      options: [
        "A. Knowledge Management.",
        "B. Omni-Channel",
        "C. Territory Manag",
        "D. Escalation Rules",
      ],
      answer: "B",
      title: "Question 49",
    },
    {
      content:
        "The sales team at Ursa Major Solar has asked the administrator to automate an outbound message. What should the administrator utilize to satisfy the request?",
      options: [
        "A. Flow builder",
        "B. Workflow rule",
        "C. Task assignment",
        "D. Process builder",
      ],
      answer: "B",
      title: "Question 50",
    },
    {
      content:
        "DreamHouse Realty (DHR) wants a templated process with a mortgage calculator that generated leads for loans. DHR needs to complete the project within 30 days and has maxed out its budget for the year. Which AppExchange item should help the administrator to meet the request?",
      options: [
        "A. Flow Solutions",
        "B. Lightning Data",
        "C. Bolt Solutions",
        "D. Lightning Community",
      ],
      answer: "A",
      title: "Question 51",
    },
    {
      content:
        "Sales raps at Ursa Solar are having difficulty managing deals. The leadership team has asked the administrator to help sales reps prioritize and close more deals. What should the administrator and close more deals.",
      options: [
        "A. Einstein Lead Scoring",
        "B. Einstein Opportunity Scoring",
        "C. Einstein Search Personalization",
        "D. Einstein Activity Capture",
      ],
      answer: "B",
      title: "Question 52",
    },
    {
      content:
        "The administrator has been asked to automate a simple field update on the account. When a support agent changes the status of the account to 'Audited', they would like the system to automatically update the Audited date field on the account with today's date. Which tool should the administrator use to complete this automation?",
      options: [
        "A. Validation Rule",
        "B. Formula Field",
        "C. Approval process",
        "D. Flow Builder",
      ],
      answer: "D",
      title: "Question 53",
    },
    {
      content:
        "An administrator at Cloud Kicks is building a flow that needs to search for records that meet certain conditions and store values from those records in variable for use later in the flow. What flow element should the administrator add?",
      options: [
        "A. Assignment",
        "B. Update Records",
        "C. Get Records",
        "D. Create Records",
      ],
      answer: "C",
      title: "Question 54",
    },
    {
      content:
        "Cloud Kicks has created a screen flow for their sales team to use when they add new leads. The screen flow collect name, email and shoe preference. Which two things should the administrator do to display the screen flow? Choose 2 answers",
      options: [
        "A. use a flow element and add the screen flow to the record page.",
        "B. Add the flow in the utility bar of the console",
        "C. Create a tab and add the screen flow to the page.",
        "D. install an app from the AppExchange",
      ],
      answer: "A,C",
      title: "Question 55",
    },
    {
      content:
        "Which three aspects of standard fields should an administrator customize?Choose 3 answers",
      options: [
        "A. Field history tracking",
        "B. Picklist Values",
        "C. Decimal Places",
        "D. Field name",
        "E. Help Text",
      ],
      answer: "A,B,E",
      title: "Question 56",
    },
    {
      content:
        "Sales managers would like to know what could be implemented to surface important values based on the stage of the opportunity. Which tool should an administrator use to meet the requirement?",
      options: [
        "A. Opportunity processes",
        "B. Path key fields",
        "C. Dynamic forms",
        "D. Workflow rules",
      ],
      answer: "B",
      title: "Question 57",
    },
    {
      content:
        "Which two solutions could an administrator find on the AppExchange to enhance their organization? Choose 2 answers",
      options: [
        "A. Consultants",
        "B. Customers",
        "C. Communities",
        "D. Components",
      ],
      answer: "A,D",
      title: "Question 58",
    },
    {
      content:
        "Northern Trail Outfitters uses a custom object Invoice to collect customer payment information from an external billing system. The Billing System field needs to be filled on every Invoice record. How should an administrator ensure this requirement?",
      options: [
        "A. Require the field on the record type.",
        "B. Define an approval process for the child.",
        "C. Make the field universally required.",
        "D. Create a Process Builder to set the field.",
      ],
      answer: "D",
      title: "Question 59",
    },
    {
      content:
        "Universal Containers has two sales teams, Sales team A and Sales team B. Each team has their own role in the role hierarchy. Both roles are subordinates of the same Manager role. How Should the administrator share records owned by sales team A with Sales team B?",
      options: [
        "A. Criteria based sharing",
        "B. Owner based sharing",
        "C. Use Manual sharing",
        "D. Hierarchical sharing",
      ],
      answer: "B",
      title: "Question 60",
    },
    {
      content:
        "An administrator at Universal Container needs an automated way to delete records based on field values. What automated solution should the administrator use?",
      options: [
        "A. Process Builder",
        "B. Automation Studio",
        "C. Workflow",
        "D. Flow Builder",
      ],
      answer: "D",
      title: "Question 61",
    },
    {
      content:
        "DreamHouse Reality needs to use consistent picklist value on a category filed on accounts and cases, with value respective to record types. Which two features should the administrator use to fulfill this requirement? Choose 2 answers",
      options: [
        "A. Multi-Select Picklist",
        "B. Dependent Picklist",
        "C. Custom Picklist",
        "D. Global Picklist",
      ],
      answer: "C,D",
      title: "Question 62",
    },
    {
      content:
        "Cloud Kicks executives have noticed the opportunity Expected revenue Field displays incorrect values. How Should the administrator correct this?",
      options: [
        "A. Update the expected revenue associated with the stage.",
        "B. Adjust the forecast category associated with the stage.",
        "C. Change the probability associated with the stage.",
        "D. Modify the closed won value associated with the stage.",
      ],
      answer: "C",
      title: "Question 63",
    },
    {
      content:
        "Universal Containers requires that when an Opportunity is closed won, all other open opportunities on the same account must be marked as closed lost. Which automation solution should an administrator use to implement this request?",
      options: [
        "A. Workflow Rule",
        "B. Flow Builder",
        "C. Quick Action",
        "D. Outbound Message",
      ],
      answer: "B",
      title: "Question 64",
    },
    {
      content:
        "Ursa Major Solar wants to know which of its marketing efforts are helping the team win Opportunities. What should an administrator configure to provide these insights?",
      options: [
        "A. Map Custom Lead Fields",
        "B. List Email Activities",
        "C. Campaign Hierarchy.",
        "D. Campaign Influence",
      ],
      answer: "D",
      title: "Question 65",
    },
    {
      content:
        "Universal Container wants to prevent its service team from accessing deal records. While service users are unable to access deal list views, they are able to find the deal records via a search. What options should the administrator adjust to fully restrict access?",
      options: [
        "A. App permissions and search terms",
        "B. Page layouts and field- level security",
        "C. Permissions and tab visibility",
        "D. Record setting and search index",
      ],
      answer: "B",
      title: "Question 66",
    },
    {
      content:
        "Ursa Major Solar offers amazing experiences for all of it employees. The Employee engagement committee wants to post updates while restricting other employees from posting. What should the administrator create to meet this request?",
      options: [
        "A. Chatter Unlisted Group",
        "B. Chatter Recommendations.",
        "C. Chatter Broadcast Group",
        "D. Chatter Stream.",
      ],
      answer: "C",
      title: "Question 67",
    },
    {
      content:
        "Northern Trail Outfitters wants to calculate how much revenue has been generated for each of its marketing campaigns. How should an administrator deliver this information?",
      options: [
        "A. Add a Total Value Field on campaign and use a workflow rule to update the value when an opportunity is won.",
        "B. Create a roll-up summary field on Opportunity to Campaign.",
        "C. Perform periodic data job to update campaign records.",
        "D. Design a standard Campaign report and add the value Won Opportunities in Campaign field.",
      ],
      answer: "D",
      title: "Question 68",
    },
    {
      content:
        "The administrator for AW Computing is working with a user who is having trouble logging in to salesforce. What should the administrator do to identify why the user is unable to login?",
      options: [
        "A. Review the Security token.",
        "B. Review the Login history",
        "C. Review the Password policies.",
        "D. Review the password history.",
      ],
      answer: "A",
      title: "Question 69",
    },
    {
      content:
        "The Client services and customer support teams share the same profile but have different permission sets. The Custom Object Retention related list needs to be restricted to the client services team on the Lightning record page layout. What should the administrator use to fulfil this request?",
      options: [
        "A. Component Visibility",
        "B. Record Type Assignment",
        "C. Page Layout Assignment",
        "D. Sharing settings",
      ],
      answer: "A",
      title: "Question 70",
    },
    {
      content:
        "Cloud Kicks is working on a better way to track its product shipments utilizing Salesforce. Which field type should an administrator use to capture coordinates?",
      options: [
        "A. Custom address",
        "B. Geofence",
        "C. Geolocation",
        "D. External lookup",
      ],
      answer: "C",
      title: "Question 71",
    },
    {
      content:
        "The administrator at Ursa Major Solar has Created a new record type for customer warranty cases which two assignments should the administrator use to display the new record type to users? Choose 2 answers",
      options: [
        "A. App Manager Assignment.",
        "B. Role Assignment",
        "C. Page layout Assignment.",
        "D. Profile Assignment",
      ],
      answer: "C,D",
      title: "Question 72",
    },
    {
      content:
        "The administrator at Cloud Kicks has a Custom picklist field on Lead, Which is missing on the Contact when leads are converted. Which two items should the administrator do to make sure these values are populated? Choose 2 answers",
      options: [
        "A. Create a custom picklist field on Contact.",
        "B. Update the picklist value with a validation rule.",
        "C. Set the picklist field to be required on the Lead Object.",
        "D. Map the picklist field on the Lead to the Contact.",
      ],
      answer: "A,D",
      title: "Question 73",
    },
    {
      content:
        "Cloud Kicks (CK) has new administrator who is asked to put together a memo detailing salesforce uses to budget for upcoming license purchases. Where Should the administrator go to find out what type of licenses CK Has purchased and how many are available.",
      options: [
        "A. Usage based entitlement related list in company information.",
        "B. Search for licenses types in setup.",
        "C. User Licenses Related List in Company information.",
        "D. User Management settings in setup.",
      ],
      answer: "C",
      title: "Question 74",
    },
  ],
});
