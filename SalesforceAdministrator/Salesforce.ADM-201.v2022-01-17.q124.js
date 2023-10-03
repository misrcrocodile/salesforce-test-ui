window.testContent = window.testContent || [];
var testId = "SalesforceAdmin1";
var testName = "SalesforceAdmin1.ADM-201";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "SalesforceAdmin1.ADM-201.v2022-01-17.q124",
  content: [
    {
      content:
        "Universal Containers fs trying to Improve the user experience when searching for the right status on a case. The company currently has one support process that is used for all record types on cases. The support process has 10 status values. Service reps say they never need more than five depending on what kind of case they are working on. How should the administrator improve on the currant implementation?",
      options: [
        "A. Review which status choices &re needed for each record type and create support processes for each that is necessary.",
        "B. Edit the status choices directly on the record type.",
        "C. Create a Screen Flow that shows only the correct values for status and surface the flow in the utility bar of the console.",
        "D. Reduce the number of case status values to five.",
      ],
      answer: "A",
      title: "Question 1",
    },
    {
      content:
        "Northern Trail Outfitters has a custom quick action on Account that creates a new Case. How should an administrator make the quick action available on the Salesforce mobile app?",
      options: [
        "A. Include the action in the Salesforce Mobile Navigation menu.",
        "B. Create a custom Lightning App with the action.",
        "C. Add the Salesforce Mobile and Lightning Experience action to the page layout.",
        "D. Modify compact Case page layout to include the action.",
      ],
      answer: "C",
      title: "Question 2",
    },
    {
      content:
        "Ursa Major Solar uses Opportunity to track sales of solar energy products. The company has two separate sales teams that focus on different energy markets. The services team also wants to use Opportunity to track installation, All three teams will need to use different fields and stages. How should the administrator configure this requirement?",
      options: [
        "A. Create three sales processes. Create three record types and three page layouts.",
        "B. Create one sales process. Create one record type and three page layout.",
        "C. Create three sales processes. Create three record types and one page layout.",
        "D. Create one sales process. Create three record types and three page layouts.",
      ],
      answer: "D",
      title: "Question 3",
    },
    {
      content:
        "Sales managers would like to know what could be implemented to surface important values based on the stage of the opportunity. Which tool should an administrator use to meet this requirement?",
      options: [
        "A. Workflow Rules",
        "B. Opportunity Processes",
        "C. Path Key Fields",
        "D. Dynamic Forms",
      ],
      answer: "C",
      title: "Question 4",
    },
    {
      content:
        "A senior realtor at Ursa Major Solar has received a long list of new residential homes to sell to for the spring. Management needs the spreadsheet of the new residential homes and a separate spreadsheet of pricebooks loaded into Salesforce. Which Salesforce data tool will meet this request?",
      options: [
        "A. Data Import Wizard",
        "B. Mass Transfer Records",
        "C. Data Loader",
        "D. Mass Create Records",
      ],
      answer: "C",
      title: "Question 5",
    },
    {
      content:
        "Cloud Kicks wants to track shoe designs by products. Shoe designs should be unable to be deleted, and there can be multiple designs for one | | product across various stages. Which two steps should the administrator configure to meet this requirement?",
      options: [
        "A. Add a custom master-detail field for shoe designs on the Product object.",
        "B. Choose 2 answers",
        "C. Configure a custom lookup field for shoe designs on the Product object.",
        "D. Use the standard object for designs.",
        "E. Create a custom object for shoe designs.",
      ],
      answer: "B,E",
      title: "Question 6",
    },
    {
      content:
        "What are two considerations for sharing email template folders? Choose 2 answers",
      options: [
        "A. Sharing a folder shares all subfolders in that folder.",
        "B. Subfolders are shared separately from the parent folder.",
        "C. Sharing on Lightning email templates is inherited from the folder it is in.",
        "D. Lightning email templates support packaging.",
      ],
      answer: "A,C",
      title: "Question 7",
    },
    {
      content:
        "Sales Rep A and Sales Rep B view an Account report for All Accounts without any filters. The company uses a private sharing model. Each rep sees a different number of results. What is the explanation for the discrepancy in the reports?",
      options: [
        "A. Sales Rep B needs to be assigned to the Sales Rep role.",
        "B. Sales Rep B needs to be assigned to the Sales Rep profile.",
        "C. Sales Rep B needs to be assigned to the Sales Rep permission set.",
        "D. Sales Rep B needs to be assigned to the Sales Rep queue.",
      ],
      answer: "D",
      title: "Question 8",
    },
    {
      content:
        "Northern Trail Outfitters held an event for hikers to blaze the trail for the new year. Their marketing team collected over a million new lead records to upload into Salesforce. What is the recommended method for uploading this data?",
      options: [
        "A. AppExchange app",
        "B. Data Loader",
        "C. Lightning Sync",
        "D. Data Import Wizard",
      ],
      answer: "A",
      title: "Question 9",
    },
    {
      content:
        "What are two considerations an administrator should keep in mind when working with Salesforce objects? Choose 2 answers",
      options: [
        "A. Custom and standard objects have standard fields.",
        "B. Standard objects are included with Salesforce.",
        "C. A new standard object can be created.",
        "D. Only standard objects support master-detail relationships.",
      ],
      answer: "A,B",
      title: "Question 10",
    },
    {
      content:
        "Which two methods can be used to share records using sharing rules? Choose 2 answers",
      options: [
        "A. Roles and subordinates",
        "B. Profiles",
        "C. Public groups",
        "D. Queues",
      ],
      answer: "A,C",
      title: "Question 11",
    },
    {
      content:
        "Which two action should an administrator perform to provide a sales team with an easy solution for gathering customer requirements and sharing presentations with the customers? Choose 2 answers",
      options: [
        "A. Use Salesforce Files to post presentation in Chatter.",
        "B. Add customers to libraries",
        "C. Ensure opportunity teams are created for customers.",
        "D. Add customers to private Chatter groups.",
      ],
      answer: "A,D",
      title: "Question 12",
    },
    {
      content:
        "Ursa Major Solar's default, organization-wide sharing for accounts is set to public read/write. The administrator needs to ensure that marketing never modifies an account record. Which action should the administrator take to accomplish this goal?",
      options: [
        "A. Switch organization-wide default sharing to public read only.",
        "B. Remove edit access on accounts from the custom marketing profile.",
        "C. Assign a permission set to marketing users which removes edit permission.",
        "D. Separate the marketing role hierarchy from the sales role hierarchy.",
      ],
      answer: "B",
      title: "Question 13",
    },
    {
      content:
        "Ursa Major (UH) is using an approval process.which two statements are correct about this scenario? Choose 2 answers",
      options: [
        "A. UM can use an assignment rule to define the approver for each step in the process.",
        "B. A delegated approver can reassign approval requests.",
        "C. To track the process, UM can use the approval history related list.",
        "D. An approval action defines the result of record approval or rejection.",
      ],
      answer: "C,D",
      title: "Question 14",
    },
    {
      content:
        "Universal Containers has a public read only sharing model on accounts. A new sales team has been created that will be dealing with high-security customers. The administrator has been asked to hide these accounts from anyone NOT on this team. Which two steps must be taken to hide these accounts without impacting access to the rest of the Sales team? Choose 2 answers",
      options: [
        "A. Create a new account type to separate both teams.",
        "B. Create ownership-based sharing rules",
        "C. Change the new team role to be outside the company hierarchy.",
        "D. Change organization-wide default on account to private.",
      ],
      answer: "B,C",
      title: "Question 15",
    },
    {
      content:
        "A time -dependent action Is placed In the workflow queue when the record Is created. Which two scenarios will cause the action to be removed from the queue? Choose 2 answers",
      options: [
        "A. When the record no longer matches the rule criteria",
        "B. When a validation rule is triggered for the record",
        "C. When the action is deleted from the workflow queue",
        "D. When another record triggers the same workflow rule",
      ],
      answer: "A,C",
      title: "Question 16",
    },
    {
      content:
        "A customer created a case using web to case. They contacted phone support to get an update on the cave two days later. The support agent cannot find the case although the customer is positive that it was created and logged. What should the administrator reference to troubleshoot this issue?",
      options: [
        "A. Contact email address",
        "B. Validation rules",
        "C. Setup Audit Trail",
        "D. Assignment rules",
      ],
      answer: "C",
      title: "Question 17",
    },
    {
      content:
        "Cloud Kicks has the organization-wide defaults for Opportunity set to Private. Which two features should the administrator use to open up access to opportunity records for sales users working on collaborative deals? Choose 2 answers",
      options: [
        "A. Sharing set",
        "B. Role hierarchy",
        "C. Sharing rules",
        "D. Profiles",
      ],
      answer: "B,C",
      title: "Question 18",
    },
    {
      content:
        "What are two considerations when configuring the lead conversion process? Choose 2 answers",
      options: [
        "A. Custom lead fields can be mapped to account, contact, and opportunity fields.",
        "B. Roll -up summary lead fields can be mapped to custom contact fields.",
        "C. Standard lead fields are automatically converted to account, contact, and opportunity fields.",
        "D. Custom lead fields can be mapped to custom object fields.",
      ],
      answer: "A,C",
      title: "Question 19",
    },
    {
      content: "What describes the capabilities of Salesforce Knowledge?",
      options: [
        "A. An automated Al tool that converts Leads to Opportunities given a predefined set of conditions",
        "B. A knowledge base composed of articles that can be written and used by support agents",
        "C. A knowledge base that uses Alto generate an article to solve customer support issues",
        "D. An automated tool that closes Cases based on historical information",
      ],
      answer: "A",
      title: "Question 20",
    },
    {
      content:
        "Ursa Major Solar users want to utilize Salesforce Knowledge. Which statement accurately describes Knowledge? Calculator",
      options: [
        "A. An automated Machine Learning tool that converts Leads to Opportunities given a predefined set of conditions",
        "B. A knowledge base comprised of articles that can be written and utilized by support agents",
        "C. A knowledge base that uses Machine Learning to generate an article to solve customer support issues",
        "D. An automated tool that closes Cases based on historical information",
      ],
      answer: "B",
      title: "Question 21",
    },
    {
      content:
        "Ursa Major Solar has a path on Case. The company wants to require its users to follow the status values as they are on the path. Agents should be prohibited from reverting the Case back to a previous status.",
      options: [
        "A. Dependent Picklists",
        "B. Global Value Picklists",
        "C. Validation Rules",
        "D. Predefined Field Values",
      ],
      answer: "C",
      title: "Question 22",
    },
    {
      content:
        "A Sales executive at Universal Containers (UC) is utilizing Collaborative Forecasting to track sales rep quote attainment and wants to be alerted when an opportunity stage is moved backward In the sales process. Which feature should the administrator use to fulfill this request?",
      options: [
        "A. Field History Tracking report",
        "B. Validation Rule",
        "C. Workflow rule",
        "D. Big Deal Alert",
      ],
      answer: "C",
      title: "Question 23",
    },
    {
      content:
        "Sales representatives use a custom report type for Account reports. New fields have been created on the Account Object. What should a System Administrator do to report on the newly created fields?",
      options: [
        "A. From the Custom Report Type, Edit Layout, then add the new fields to the report. Calculator",
        "B. Create a new account report and add the new fields from the Report Builder.",
        "C. From the Custom Report Type, Edit Object Relationships, then add the new fields to the report.",
        "D. Create a new account report folder, go to share, and then add the new fields.",
      ],
      answer: "A",
      title: "Question 24",
    },
    {
      content:
        "When working on opportunities, sales representatives at Universal Containers need to understand how their peers have successfully managed other opportunities with comparable products, competing against the same competitors. Which two features should an administrator use to facilitate this? Choose 2 answers",
      options: [
        "A. Opportunity Dashboard",
        "B. Opportunity update reminders",
        "C. Big deal alerts",
        "D. Chatter groups",
      ],
      answer: "A,D",
      title: "Question 25",
    },
    {
      content:
        "Cloud Kicks wants to try out an app from the AppExchange to ensure that the app meets its needs. Which two options should the administrator suggest? Choose 2 answers",
      options: [
        "A. Install in a sandbox.",
        "B. Download into a Trailhead Playground.",
        "C. Check edition compatibility. -",
        "D. Test Drive in a production org.",
      ],
      answer: "A,B",
      title: "Question 26",
    },
    {
      content:
        "Universal Containers wants to create a new sales team that focuses exclusively on small to medium business customers. This group will track information with the same fields and picklist values but will have 2 new options on Stage field. How should the system administrator accomplish this task?",
      options: [
        "A. Create a new Sales process.",
        "B. Create a new Record Type.",
        "C. Create a new Record type and a new sales process.",
        "D. Create a new Record type and a page layout.",
      ],
      answer: "A",
      title: "Question 27",
    },
    {
      content:
        "Ursa Major wants to add charts to a Salesforce dashboard. What are three standard chart types that are available? Choose 3 answers",
      options: [
        "A. Tables",
        "B. Bar charts",
        "C. Venn Diagram",
        "D. Heat maps",
        "E. Gauge charts",
      ],
      answer: "A,B,E",
      title: "Question 28",
    },
    {
      content:
        "Universal Containers requires a different Lightning page to be displayed when Accounts are viewed In the Sales Console and In the Service Console. How should an administrator meet this requirement?",
      options: [
        "A. Create different user profiles.",
        "B. Update page layout assignments.",
        "C. Define multiple record types.",
        "D. Assign Lightning pages as app default.",
      ],
      answer: "D",
      title: "Question 29",
    },
    {
      content:
        "A user at Cloud Kicks Is having Issues logging in to Salesforce. The user asks the administrator to reset their password. Which two options should the administrator consider when resetting the user's password? Choose 2 answers",
      options: [
        "A. Single sign-on users can reset their own passwords using the forgot password link,",
        "B. After resetting a password, the user may be required to activate their device to successfully log In to Salesforce.",
        "C. Resetting a locked-out user's password automatically unlocks the user's account.",
        "D. Resetting the password will change the user's password policy.",
      ],
      answer: "B,C",
      title: "Question 30",
    },
    {
      content:
        "Users at Cloud Kicks want to be able to create a task that will repeat every two weeks. What should an administrator do to meet this requirement?",
      options: [
        "A. Turn on Recurring Activities",
        "B. Enable Creation of Recurring Tasks",
        "C. Workflow rule to create recurring tasks",
        "D. Flow to create recurring tasks",
      ],
      answer: "B",
      title: "Question 31",
    },
    {
      content:
        "The sales manager at Cloud Kicks approves time off for their employees. They asked the administrator to ensure these requests are seen and responded to by a backup manager while the sales manager is out on vacation. What should the administrator use to fulfill the requirement?",
      options: [
        "A. Delegated Administrator",
        "B. Approval History Related List",
        "C. Two-Step Approval Process",
        "D. Delegated Approver",
      ],
      answer: "D",
      title: "Question 32",
    },
    {
      content:
        "Under which three conditions should a validation rule be used to prevent invalid data? Choose 3 answers",
      options: [
        "A. When records are submitted using web -to -lead.",
        "B. When records are imported.",
        "C. When records are edited and saved by a user.",
        "D. When records are updated by a workflow rule",
        "E. When records are deleted by a user.",
      ],
      answer: "B,D,E",
      title: "Question 33",
    },
    {
      content:
        "An administrator has been asked to change the data type of an auto number to a text field. What should the administrator be aware of before changing the field?",
      options: [
        "A. Existing field values will remain unchanged.",
        "B. Existing Auto Number field to Text is prevented.",
        "C. Existing field values will be deleted.",
        "D. Existing field values will be converted.",
      ],
      answer: "A",
      title: "Question 34",
    },
    {
      content:
        'A System Administrator attempts to deactivate a user but receives the error message "You CANNOT deactivate this user" What is the reason the Administrator is unable to to deactivate the user?',
      options: [
        "A. The user is still the owner on open opportunities.",
        "B. The user is logged into Salesforce.",
        "C. The user is logged into Salesforce",
        "D. The user is not assigned to a role.",
      ],
      answer: "C",
      title: "Question 35",
    },
    {
      content:
        "Anytime an Opportunity is moved to Closed Won, Sales reps at Universal Containers (UC) are supposed to create a record on a child object of Opportunities called Survey Request.This action, however, does not always occur. Sales reps do not always populate all fields correctly. Which two tools should be used to remove permissions from Sales to create these records and automate record creation? Choose 2 answers",
      options: ["A. Approvals", "B. Workflow", "C. Flow", "D. Process Builder"],
      answer: "C,D",
      title: "Question 36",
    },
    {
      content:
        "The administrator at Ursa Major Solar accidentally deleted a required field on Account. The field now appears under deleted fields on Account. Which three considerations should an administrator consider when deleting a field? Choose 3 answers",
      options: [
        "A. The field will need to be marked as required again.",
        "B. The field will reappear on page layouts if they have not changed since the deletion.",
        "C. The data will need to be repopulated after restoring the field.",
        "D. Restoring the field will also restore the data.",
        "E. It is not possible to restore the field without recreating it.",
      ],
      answer: "A,D",
      title: "Question 37",
    },
    {
      content:
        'The administrator has created new users for 10 new employees at Universal Containers. Why are these users unable to access the account object in the Salesforce org"?',
      options: [
        "A. Users' roles are low on the Role hierarchy.",
        "B. Users' profile requires a sharing rule for accounts.",
        "C. Organization-wide defaults are set to private.",
        "D. Users' profile requires permission to the account object.",
      ],
      answer: "D",
      title: "Question 38",
    },
    {
      content:
        "Which setting on a profile makes a tab hidden in the App Launcher, but still allows a user to view records that would normally be found under these tab?",
      options: [
        "A. Org-wide Defaults",
        "B. Tab Settings",
        "C. Object Permissions",
        "D. App Permissions",
      ],
      answer: "B",
      title: "Question 39",
    },
    {
      content:
        "The support manager at Cloud Kicks wants to respond to customers as quickly as possible. They have requested that the response Include the top five troubleshooting tips that could help solve the customer's issue. What should the administrator suggest to meet these requirements?",
      options: [
        "A. Knowledge Articles",
        "B. Assignment Rules",
        "C. Email Alerts",
        "D. Auto-Response Rules",
      ],
      answer: "D",
      title: "Question 40",
    },
    {
      content:
        "Universal Containers wants to create a new sales team that focuses exclusively on small to medium business customers. This group will track information with the same fields and picklist values but will need two new options on the stage field. How should the administrator accomplish this task?",
      options: [
        "A. Create a new record type.",
        "B. Create a new record type and page layout.",
        "C. Create a new record type and sales process.",
        "D. Create a new sales process.",
      ],
      answer: "C",
      title: "Question 41",
    },
    {
      content:
        "DreamHouse Realty agents are double-booking open house event nights. The events manager wants an event submission process to help agents fill in event details and request dates. How should an administrator accomplish this request?",
      options: [
        "A. Create a sharing rule so that other agents can view events.",
        "B. Create an approval process on the Campaign object.",
        "C. Create a workflow rule to update the Event Date field.",
        "D. Create a campaign for agents to request event dates.",
      ],
      answer: "D",
      title: "Question 42",
    },
    {
      content:
        "In which two ways should Knowledge articles be used? Choose 2 answers",
      options: [
        "A. To resolve customer cases",
        "B. To display for customer self-service",
        "C. To display Salesforce Answers",
        "D. To display Salesforce Solutions",
      ],
      answer: "B,D",
      title: "Question 43",
    },
    {
      content:
        "The administrator has added the company IP address ranges to the network acess section, What will happen when a user tries to log in from outside the company network?",
      options: [
        "A. Users must enter a verification code.",
        "B. Login attempts using the API are denied.",
        "C. Users are redirected to the VPN.",
        "D. Login attempts by all users are denied.",
      ],
      answer: "A",
      title: "Question 44",
    },
    {
      content:
        "The administrator at Ursa Major Solar needs to make sure that unassigned cases from VIP customers get transferred to the appropriate service representative within 5 hours. VIP customers have access to support 24 hours a day. How should this be configured?",
      options: [
        "A. Business Hours",
        "B. Escalation Rules",
        "C. Case Queues",
        "D. Assignment Rules",
      ],
      answer: "D",
      title: "Question 45",
    },
    {
      content:
        "Cloud Kicks needs to ensure appropriate shipping details are used in Orders. Reps should have a streamlined solution to update the shipping addresses on selected Orders associated with an Account when the shipping address is changed on the Account. How should the administrator deliver this requirement?",
      options: [
        "A. A screen flow on the Order page that lets the rep choose the updated Account shipping address in all open associated Orders",
        "B. An autolaunched flow on the Order page that updates all open Order shipping addresses whenever the Account shipping address charges",
        "C. An autolaunched flow on the Account page that updates all open Order shipping addresses whenever the Account shipping address changes",
        "D. A screen flow on the Account page that lets the rep choose the updated Account shipping address in open associated Orders",
      ],
      answer: "C",
      title: "Question 46",
    },
    {
      content:
        "What will happen when a user attempts to log In to Salesforce from an IP address that is outside the login IP range on the user's profile but within the organization -wide trusted IP range?",
      options: [
        "A. The user will not be able to log In at all.",
        "B. The user will be able to log in after answering a security question.",
        "C. The user will be able to log in after the computer is activated.",
        "D. The user will be able to log in without activating the computer.",
      ],
      answer: "A",
      title: "Question 47",
    },
    {
      content:
        "In which two ways can users access Salesforce from their mobile devices'? Choose 2 answers",
      options: [
        "A. Install the Salesforce mobile configuration.",
        "B. Use the Lightning Experience in web browser.",
        "C. Use the downloadable Salesforce mobile application",
        "D. install Salesforce Connect for mobile.",
      ],
      answer: "B,C",
      title: "Question 48",
    },
    {
      content:
        "Executives at Cloud Kicks have reported that their dashboards are showing Inaccurate data. The administrator has discovered that users have been changing the source reports. Which two actions should the administrator take to preserve the integrity of the source reports? Choose 2 answers",
      options: [
        "A. Create a new report folder with viewer access.",
        "B. Move the dashboard reports to the view-only folder.",
        "C. Change the dashboard to be a dynamic dashboard.",
        "D. Move the dashboard to the user's private folder.",
      ],
      answer: "A,B",
      title: "Question 49",
    },
    {
      content:
        "Universal Containers (UC) would like to count the number of open cases associated with each Account and update the Account with this value every Friday evening. UC has several hundred open cases at any given time. What should the administrator use to complete this request?",
      options: [
        "A. Use a Roll-Up Summary field on Case.",
        "B. Use a record triggered flow.",
        "C. Use a scheduled flow.",
        "D. Use a scheduled Process Builder",
      ],
      answer: "B",
      title: "Question 50",
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
      title: "Question 51",
    },
    {
      content:
        "The administrator at Cloud Kicks deleted a custom field but realized there is a business unit that still uses the field. What should an administrator take into consideration when undeleting the field?",
      options: [
        "A. The field needs to be re-added to page layouts.",
        "B. The field needs to be restored from the recycle bin.",
        "C. The field history will remain deleted.",
        "D. The field needs to be re-added to reports.",
      ],
      answer: "B",
      title: "Question 52",
    },
    {
      content:
        "Ursa Major Solar utilizes accounts in its sales process; however, not all users have access to them. New users require read access to accounts. Additionally, four new users require edit access. ?What should an administrator do to configure access for the new users?",
      options: [
        "A. Configure a sharing rule for account view access and another sharing rule for edit access to specific users.",
        "B. Configure a profile to grant account edit access and a permission set to restrict read access to specific users.",
        "C. Configure a profile to grant account view access and a permission set to grant account edit access to specific users.",
        "D. Configure a permission set to grant account edit access to specific users and modify the standard user profile.",
      ],
      answer: "D",
      title: "Question 53",
    },
    {
      content:
        "A sales rep has left the company and an administrator has been asked to re-assign all their accounts and opportunities to a new sales rep and keep the teams as is. Which tool should an administrator use to accomplish this?",
      options: [
        "A. Data Loader",
        "B. Data Import Wizard",
        "C. Mass Transfer Tool",
        "D. Dataloader.io",
      ],
      answer: "C",
      title: "Question 54",
    },
    {
      content:
        "What are three considerations when a user is importing data via Data Loader? Choose 3 answers",
      options: [
        "A. Importing data into checkbox fields allows for the use of TRUE/FALSE.",
        "B. Field -Level Security access determines which fields will be visible.",
        "C. Unrestricted picklists, a new picklist value will be applied but will not be added to the picklist.",
        "D. Validation rules do not execute when importing data.",
        "E. Restricted picklists, a new picklist value will be Ignored and the default value applied.",
      ],
      answer:
        "A,B,C  The true/false use is definitely allowed while importing data into the checkbox fields. Also field level security decides the fields that will be visible to all, and the restricted picklists, a new picklist value is never set to the default value. However, in case of the unrestricted picklists, a new picklist value is definitely going to be applied however, it will not be added to the picklist. And there is no option to stop the validation rules from executing while importing the data. ",
      title: "Question 55",
    },
    {
      content:
        "Which three aspects of standard fields should an administrator customize? Choose 3 answers",
      options: [
        "A. Field history tracking",
        "B. Picklist values",
        "C. Decimal places Calculator",
        "D. Field name rat",
        "E. Help text",
      ],
      answer: "A,B,E",
      title: "Question 56",
    },
    {
      content:
        "Universal Container's administrator has been asked to create a many-to-many relationship between two existing custom objects. Which two steps should the administrator take when enabling the many-to-many relationship? Choose 2 answers",
      options: [
        "A. Create URL fields on a custom object.",
        "B. Create two lookup relationships on the new object.",
        "C. Create a junction with a custom object.",
        "D. Create two master-detail relationships on the new object.",
      ],
      answer: "C,D",
      title: "Question 57",
    },
    {
      content:
        "The administrator at Cloud Kicks updated the custom object Event to include a lookup field to the primary contact for the event. When running an event report, they want to reference fields from the associated contact record. What should the administrator do to pull contact fields into the custom report?",
      options: [
        "A. Create a new report type with Event as the primary object and Contact as a related object.",
        "B. Edit the custom Event report type and add fields related via lookup.",
        "C. Configure formula fields on Event to populate contact information.",
        "D. Use a dashboard with filters to show Event and contact data as requested.",
      ],
      answer: "B",
      title: "Question 58",
    },
    {
      content:
        "The Cloud Kicks sales manager wants to boost productivity by providing insights for sales reps at the start of each day. Which three sales-specific standard Lightning components should an administrator add to the homepage to meet this requirement? Choose 3 answers",
      options: [
        "A. Key Deals",
        "B. Activities",
        "C. Path",
        "D. Assistant",
        "E. Performance Chart",
      ],
      answer: "A,B,C",
      title: "Question 59",
    },
    {
      content:
        "An administrator is on a tight deadline to create dashboards for the sales and marketing teams at AW Computing. What should the administrator do to meet the deadline without increasing the budget?",
      options: [
        "A. Check the AppExchange for a prebuilt solution that can be easily customized.",
        "B. Train someone on the sales and marketing teams to build dashboards,",
        "C. Build the dashboards manually to meet the deadline.",
        "D. Hire a consultant to build the custom dashboards.",
      ],
      answer: "A",
      title: "Question 60",
    },
    {
      content:
        "Ursa Major Solar's support team currently has a very high call volume. They want to decrease this volume by creating a sell-service community that will best published articles with Frequently Asked Questions (FAQs), and provide a chat with Help Desk representatives Which two features should be used to fulfill this goal? Choose 2 answers",
      options: ["A. Knowledge", "B. Content", "C. SoS", "D. Chat"],
      answer: "A,D",
      title: "Question 61",
    },
    {
      content:
        "The service manager at Ursa Major Solar wants to let customers know that they have received their cases via email and their website. Medium-priority and high-priority cases should receive different email notifications than low-priority cases. The administrator has created three email templates for this purpose. How should an administrator configure this requirement?",
      options: [
        "A. Create one auto-response rule. Configure three rule entry criteria and set a filter for case priority.",
        "B. Configure one workflow rule that fires when cases are created. Add a filter for case priority. Select the appropriate email template for the rule.",
        "C. Add three auto-response rules. Configure one rule entry criteria for each rule and set a filter for case priority. Select the appropriate email template for each rule entry.",
        "D. Select the appropriate email template for each rule entry.",
        "E. Include three assignment rules that fire when cases are created. Add a filter for case priority. Select the appropriate email template for each rule.",
      ],
      answer: "A",
      title: "Question 62",
    },
    {
      content:
        "AW Computing (AWC) occasionally works with Independent contractors, who the company stores as Contacts In Salesforce. Contractors often change agencies, and AWC wants to maintain the historical accuracy of the record. What should AWC use to track Contacts?",
      options: [
        "A. Enable Contacts to multiple Accounts.",
        "B. Create a junction object to track many-to-many relationship. Solar need to see different fields on the Case",
        "C. Create a new Contact record for each agency.",
        "D. Use a partner community to track the Contacts.",
      ],
      answer: "A",
      title: "Question 63",
    },
    {
      content:
        "A Salesforce user at Universal Containers has been deactivated. What will happen to the records the user owns in Salesforce?",
      options: [
        "A. All records are automatically assigned to the Administrator.",
        "B. All records are automatically assigned to another user.",
        "C. All records are assigned to the deactivated user until reassigned.",
        "D. All records are automatically deleted.",
      ],
      answer: "C",
      title: "Question 64",
    },
    {
      content:
        "Salts reps at Northern Trail Outfitters have asked for a way to change the Probability field value of their Opportunities. What should an administrator suggest to meet this request?",
      options: [
        "A. Make the field editable on page layouts.",
        "B. Configure Forecasting support.",
        "C. Define a new Stage picklist value.",
        "D. Create a custom field on Opportunity.",
      ],
      answer: "A",
      title: "Question 65",
    },
    {
      content:
        "When a Cloud Kicks opportunity closes, the company would like to automatically create a renewal opportunity. Which two automation tools should an administrator use to accomplish this request? acne Choose 2 answers",
      options: [
        "A. Flow Builder",
        "B. Workflow Rule",
        "C. Approval Process",
        "D. Process Builder",
      ],
      answer: "A,D",
      title: "Question 66",
    },
    {
      content:
        "Support agents at Cloud Kicks are spending too much time finding resources to solve customer cases. The agents need a more efficient way to find documentation and similar cases from the Case page layout. How should an administrator meet this requirement?",
      options: [
        "A. Use an interview flow to capture Case details.",
        "B. Direct users to Global Search to look for similar cases.",
        "C. Configure Knowledge with articles and data categories.",
        "D. Create a custom object to capture popular Case resolutions.",
      ],
      answer: "B",
      title: "Question 67",
    },
    {
      content:
        "What is the maximum number of objects that can be added to a custom report type?",
      options: [
        "A. One as long as the object has a master -child relationship",
        "B. Two as long as the objects have associations",
        "C. Four as long as the objects have associations",
        "D. Unlimited as long as the objects have associations",
      ],
      answer: "C",
      title: "Question 68",
    },
    {
      content:
        "Ursa Major Solar wants to assign feature licenses to user records in Salesforce. Which two feature licenses can be assigned to a user record in Salesforce? Choose 2 answers",
      options: [
        "A. Knowledge User",
        "B. Opportunity User",
        "C. Console User",
        "D. Service Cloud User",
      ],
      answer: "A,D",
      title: "Question 69",
    },
    {
      content: "What does campaign Influence allow a user to do?",
      options: [
        "A. Adjust the percentage of influence each campaign has on an opportunity.",
        "B. View the entire campaign hierarchy.",
        "C. Report on the campaigns that have contributed to an opportunity.",
        "D. Summarize campaign member statistics on a campaign.",
      ],
      answer: "A",
      title: "Question 70",
    },
    {
      content:
        "Ursa Major Solar is bringing a new type of solar panel to market. An administrator needs to create a sales process for this new product. Os) What are three considerations for the administrator in this scenario? Choose 3 answers",
      options: [
        "A. All picklist values on the page layout must be added to the master picklist value list or be active values.",
        "B. Adding a new value to the record type master picklist value list adds the value to all existing record type picklists.",
        "C. An opportunity record type will need to be created and assigned to the sales process.",
        "D. The record type name assignment becomes permanent upon save of a new record type.",
        "E. The record type's page layout is assigned to users through their profile assignments.",
      ],
      answer: "A,B,E",
      title: "Question 71",
    },
    {
      content:
        "The client services and customer support teams share the same profile but have different permission sets. The custom object Retention related list needs to be restricted to the client services team on the Lightning record page layout. What should the administrator use to fulfill this request?",
      options: [
        "A. Page Layout Assignment",
        "B. Sharing Settings",
        "C. Component Visibility",
        "D. Record Type Assignment",
      ],
      answer: "C",
      title: "Question 72",
    },
    {
      content:
        "Users have noticed that when they click on a report In a dashboard to view the report details, the values In the report are different from the values displayed on the dashboard. What are the two reasons this .Is likely to occur? Choose 2 answers",
      options: [
        "A. The dashboard needs to be refreshed.",
        "B. The running dashboard user and viewer have different permissions.",
        "C. The current user does not have access to the report folder.",
        "D. The report needs to be refreshed.",
      ],
      answer: "A,B",
      title: "Question 73",
    },
    {
      content:
        "Cloud Kicks wants to update a screen flow so that if the checkbox field High Value Customer is set to true, the first screen is skipped and the user is directed to the second screen. How should the administrator configure the decision element?",
      options: [
        'A. Use the equals operator and "High Value Customer" as the value.',
        'B. Use the contains operator and "High Value Customer" as the value.',
        "C. Use the equals operator and {!$GlobaIConstant.True> as the value.",
        "D. Use the contains operator and {!$GlobalConstant.False} as the value.",
      ],
      answer: "C",
      title: "Question 74",
    },
    {
      content:
        "Cloud Kicks needs to change the owner of a case when it has been open for more than 7 days. How should the administrator complete this requirement?",
      options: [
        "A. Escalation Rules",
        "B. Assignment Rules",
        "C. Auto-Response Rules",
        "D. Validation Rules",
      ],
      answer: "A",
      title: "Question 75",
    },
    {
      content:
        "Which three settings are controlled by a users profile? Choose 3 answers",
      options: [
        "A. Feature license assignment",
        "B. Locale settings",
        "C. Assigned apps",
        "D. Field -level security",
        "E. a Record type assignment",
      ],
      answer: "C,D,E",
      title: "Question 76",
    },
    {
      content:
        'The administrator at Universal Containers has a screen flow that helps users create new leads. When Lead Source is "Search Engine", the administrator needs to require the user to choose a specific search engine from a picklist. If Lead Source is not "Search Engine", this picklist should be hidden. How should the administrator complete this requirement?',
      options: [
        'A. Create a picklist for Specific Search Engine, and set conditional visibility so that it is only shown when Lead Source is "Search Engine".',
        'B. Configure a picklist for Specific Search Engine, and use a validation rule to conditionally show only when Lead Source is "Search Engine".',
        'C. Assign a decision element to direct the user to a second screen to hold Specific Search Engine only when Lead Source is "Search Engine".',
        'D. Use an assignment element, one for when Lead Source is "Search Engine" and one for everything else.',
      ],
      answer: "C",
      title: "Question 77",
    },
    {
      content:
        "Universal Containers wants to ensure that Its org Is secure and has asked an Administrator to configure password requirements for its users. Which three actions are Administrators able to configure? Choose 3 answers",
      options: [
        "A. Set requirement that passwords must be unique for each user.",
        "B. Set password complexity requirements.",
        "C. Set maximum invalid login attempts.",
        "D. Set prohibited password values.",
        "E. Set the length of time before passwords expire.",
      ],
      answer: "B,C,E",
      title: "Question 78",
    },
    {
      content:
        "The Support Manager wants to send an automatic email to the Case Contact when a case is closed. Which automation tool can the administrator use?",
      options: [
        "A. Sharing Rule",
        "B. Validation Rule",
        "C. Case Auto-Response Rule",
        "D. Workflow Rule",
      ],
      answer: "D",
      title: "Question 79",
    },
    {
      content:
        "Northern Trail Outfitters wants to know the average stage duration for all closed opportunities. How should an administrator support this request?",
      options: [
        "A. Use Process Builder to capture the daily average on each Opportunity.",
        "B. Add formula fields to track Stages on each Opportunity.",
        "C. Run the Opportunity Stage Duration report.",
        "D. Refresh weekly reporting shapshots for Closed Opportunities.",
      ],
      answer: "C",
      title: "Question 80",
    },
    {
      content:
        "The administrator at Cloud Kicks needs to automatically route support cases, regardless of how they are created, to a queue based on case priority. What tool should the administrator use?",
      options: [
        "A. Email-to-Case",
        "B. Assignment Rules",
        "C. Web-to-Case",
        "D. Auto-Response Rules",
      ],
      answer: "B",
      title: "Question 81",
    },
    {
      content:
        "AW Computing has six sales teams in a region. These teams always consist of the same account manager, engineer, and assistant. What should the administrate- configure to make it easier for teams to collaborate with the same customer?",
      options: [
        "A. Enable and configure standard opportunity teams with splits.",
        "B. Create a queue for each team and assign account ownership to the queue.",
        "C. Enable account teams and show the users how to set up a default account team.",
        "D. Propose the users manually share ail their accounts with their teammates.",
      ],
      answer: "C",
      title: "Question 82",
    },
    {
      content:
        "Recently, one of Ursa Major Solar's (UMS) competitors lost critical data after a powerful hurricane caused multiple power outages.UMS needs to ensure that its Salesforce data is backed up an protected from such an event. Which two statements are true regarding this goal?",
      options: [
        "A. UMS can download an app from the AppExchange.",
        "B. UMS can use Salesforce's daily backup service, which is provided via a zip file.",
        "C. UMS can use Salesforce's weekly or monthly backup service, which is provided via a zip file.",
        "D. UMS should contact Salesforce Support for a free backup.",
      ],
      answer: "B,C",
      title: "Question 83",
    },
    {
      content:
        "Which three items are available in the mobile navigation menu? Choose 3 answers",
      options: [
        "A. Lightning Home Page",
        "B. Utility Bar",
        "C. Lightning App Pages",
        "D. Chatter",
        "E. Dashboards",
      ],
      answer: "A",
      title: "Question 84",
    },
    {
      content:
        "Northern TVail Outfitters wants to track ROI for contacts that are key stakeholders for opportunities. The VP of sales requested that this information be accessible on the opportunity and available for reporting. Which two options should the administrator configure to meet these requirements? Choose 2 answers",
      options: [
        "A. Customize Campaign Member Role.",
        "B. Add the Campaign Member related list to the Opportunity page layout.",
        "C. Add the Opportunity Contact Role related list to the Opportunity page layout.",
        "D. Customize Campaign Role.",
        "E. Customize Opportunity Contact Role.",
      ],
      answer: "C,E",
      title: "Question 85",
    },
    {
      content:
        "Cloud Kicks (CK) Is partnering with a used shoe store and second-hand bicycle emporium. CK has an automated business process it wants to run once a week to count the number of open cases related to an account. How should the administrator recommend automating this business process?",
      options: [
        "A. Configure a scheduled flow m Flow Builder.",
        "B. Use a process to update the account when It is edited.",
        "C. Create a workflow rule with an outbound message.",
        "D. Set up a scheduled process in Process Builder.",
      ],
      answer: "C",
      title: "Question 86",
    },
    {
      content:
        "Ursa Major Solar needs to fulfill the following requirements:* A custom object must be created to capture account survey data.* Users need the ability to select an account from the survey record and view related surveys on the account record. Which two actions can an administrator configure to meet these requirements' Choose 2 answers",
      options: [
        "A. Put the survey related list on the account page layout.",
        "B. Create a lookup relationship field on the account object.",
        "C. Put the account related list on the survey page layout.",
        "D. Create a lookup relationship field on the survey object.",
      ],
      answer: "A,D",
      title: "Question 87",
    },
    {
      content:
        "DreamHouse Realty needs to use consistent pickhst values in the Category field on Accounts and Cases, with values respective to record types. Which two features should the administrator use to fulfill this requirement? Choose 2 answers",
      options: [
        "A. Dependent pickhst",
        "B. Custom pickhst",
        "C. Global pickhst",
        "D. Multi-select picklist",
      ],
      answer: "B,C",
      title: "Question 88",
    },
    {
      content:
        "Universal Containers wants to prevent its service team from accessing deal records. While service users are unable to access deal list views, they are able to find deal records via a search. What option should the administrator adjust to fully restrict access?",
      options: [
        "A. Page layouts and field-level security",
        "B. Permissions and tab visibility",
        "C. Record settings and search index",
        "D. App permissions and search terms",
      ],
      answer: "A",
      title: "Question 89",
    },
    {
      content:
        "Cloud Kicks has the organization-wide sharing default set to private on the Shoe object. The sales manager should be able to view a report containing shoe records for all of the sales reps on their team. Which three items should the administrator configure to provide appropriate access to the report? Choose 3 answers",
      options: [
        "A. Role Hierarchy",
        "B. Report Subscription",
        "C. Custom Report Type",
        "D. Field-Level Security",
        "E. Folder Access",
      ],
      answer: "A,D,E",
      title: "Question 90",
    },
    {
      content:
        "Which tool should an administrator use to review recent configuration changes made in their org?",
      options: [
        "A. Setup Audit Trail",
        "B. Debug Logs",
        "C. Field History Tracking",
        "D. Critical Updates",
      ],
      answer: "A",
      title: "Question 91",
    },
    {
      content:
        "Ursa Major Solar recently acquired a company whose sales team has a unique sales process, with stages that are different from the current setup of stages in Salesforce. The Chief Technology Officer (CTO) has decided that the new sales team should NOT change their process at all. What should the administrator do to incorporate the new sales teams process?",
      options: [
        "A. Create new values for the opportunity stage field; order them so that the new Sales team's values are at the bottom of the picklist.",
        "B. Create new values for the opportunity stage field; create a new sales process assigned to a custom record type for the new sales team.",
        "C. Create new values for the opportunity stage field and use field-level security to control which teams see which fields.",
        "D. Create a record type and page layout for the new sales team and a custom field for the new stages.",
      ],
      answer: "B",
      title: "Question 92",
    },
    {
      content:
        "Universal Containers requires that when an opportunity is closed won, all other open opportunities on the same account must be marked as closed lost. Which automation solution should an administrator use to Implement this request?",
      options: [
        "A. Flow Builder",
        "B. Quick Action",
        "C. Outbound Message",
        "D. Workflow Rule",
      ],
      answer: "A",
      title: "Question 93",
    },
    {
      content:
        "universal containers (UC) has a Web -to -Case form on its Lightning Customer Community.UC wants to separate Cases into the following product categories: Corrugated Paper, Plastic, Fiberboard, and Metal. UC has added a picklist field to store this data. How can the Case be automatically placed in the correct queue upon submission?",
      options: [
        "A. Create Assignment Rules based on the picklist values to move Cases to a Queue.",
        "B. Create Record Types for each picklist value and assign to each product team's profile.",
        "C. Create Record Types for each picklist value and a Business Process to move each Case to the correct Queue.",
        "D. Create an Escalation Rule entry for each picklist value and set to zero minutes.",
      ],
      answer: "A",
      title: "Question 94",
    },
    {
      content:
        "The administrator at Cloud Kicks is trying to debug a screen flow that creates contacts. One of the variables in the flow is missing on the debug screen. What could cause this issue?",
      options: [
        "A. The Available for Input checkbox was unchecked.",
        "B. The flow is an inactive version.",
        "C. The Available for Output checkbox was unchecked.",
        "D. The field type is unsupported by Debugging.",
      ],
      answer: "D",
      title: "Question 95",
    },
    {
      content:
        "Universal Containers (UC) puts a priority on this confidentially of their customers. UC ............... Which Contact sharing setting should an Administrator configure to meet this request?",
      options: [
        "A. Public Read Only",
        "B. Private",
        "C. Controlled by parent",
        "D. Public Read/Write",
      ],
      answer: "C",
      title: "Question 96",
    },
    {
      content:
        "An analytics user at Cloud Kicks needs Read, Create, and Edit access for objects and should be restricted from deleting any records. What should the administrator do to meet this requirement?",
      options: [
        "A. Create and assign a custom profile with Delete access removed for each object.",
        "B. Give the user View All access and assign them to the highest role in the role hierarchy.",
        "C. Assign the standard System Administrator profile to the analytics user.",
        "D. Create and assign a permission set that includes Read, Create, and Edit access.",
      ],
      answer: "A",
      title: "Question 97",
    },
    {
      content:
        "The administrator at Ursa Major Solar imported records into an object by mistake. Which two tools should be used to undo this import? Choose 2 answers",
      options: [
        "A. Data Loader",
        "B. Data Import Wizard",
        "C. Mass Delete Records",
        "D. Weekly Data Export",
      ],
      answer: "A,C",
      title: "Question 98",
    },
    {
      content:
        "How can an administrator allow all internal users to view a dashboard as a Sales Manager within a sales region?",
      options: [
        "A. Create a dashboard to run as a specified user.",
        "B. Create a dashboard with multiple components.",
        "C. Create a dashboard to run as the logged -In user.",
        "D. Create a dashboard for all opportunities in the region.",
      ],
      answer: "A",
      title: "Question 99",
    },
    {
      content:
        "The marketing team at Ursa Major Solar wants to send a personalized email whenever a lead fills out the web-to-lead form on their website. They want to send different messages based on the Lead Industry field value. What should an administrator configure to meet this requirement?",
      options: [
        "A. Add a public group and Process Builder to email the lead.",
        "B. Use a validation rule to trigger workflow to email the lead.",
        "C. Configure an auto-response rule to email the lead.",
        "D. Create an assignment rule to email the lead.",
      ],
      answer: "C",
      title: "Question 100",
    },
    {
      content:
        "DreamHouse Realty has an approval process. A manager attempts to approve the record but receives an error. What should the administrator review to troubleshoot this request?",
      options: [
        "A. Check if the user in the next approver is inactive or missing.",
        "B. Update the field-level security to view on fields that are updated in the process.",
        "C. Add a delegated approver for the next approver in the process.",
        "D. Review the page layout to ensure the fields updated in the process are visible.",
      ],
      answer: "A",
      title: "Question 101",
    },
    {
      content:
        "An administrator at Ursa Major Solar needs to send information to an external accounting system whenever an opportunity closes. What workflow action should the administrator use to accomplish this? ,",
      options: [
        "A. Create a Record",
        "B. Outbound Message",
        "C. Assign Task",
        "D. Custom Notification",
      ],
      answer: "B",
      title: "Question 102",
    },
    {
      content:
        "A company has a complicated Sales process regarding its opportunities. The company has three different lines of business (Widget A, Widget B, Widget C) that each contain fields specific to that line of business's industry and customers. For each line of business, there is a specific set of fields that Sales users should see and a different set of fields that Marketing users should see. allow should an Administrator configure Page Layouts and Record Types for the Opportunity object so that each team sees what it needs to see, without cluttered layouts containing unnecessary fields?",
      options: [
        "A. Create six Record Types (Sales Widget A, Sales Widget B, Sales Widget C, Marketing Widget A, Marketing Widget B, and Marketing Widget C) with six total Page Layouts, one for each Record Type.",
        "B. Create one Record Type with six Page Layouts (Sales Widget A, Sales Widget B, Sales Widget C, Marketing Widget A, Marketing Widget B, and Marketing Widget C).",
        "C. Create three Record Types (Widget A, Widget B, Widget C) with six Page Layouts (Sales Widget A, Sales Widget B, Sales Widget C, Marketing Widget A, Marketing Widget B, and Marketing Widget C).",
        "D. Create six Record Types (Sales Widget A, Sales Widget B. Sales Widget C. Marketing Widget A, Marketing Widget B, and Marketing Widget C) with one Page Layout.",
      ],
      answer: "C",
      title: "Question 103",
    },
    {
      content:
        "Ursa Major Solar uses data from the grand total of a custom report to create their dashboard. Which two components will populate the grand total properly? Choose 2 answers",
      options: ["A. Table", "B. Chart", "C. Gauge", "D. Metric"],
      answer: "A,B",
      title: "Question 104",
    },
    {
      content:
        "Universal Containers successfully deployed a partner community last quarter and is experiencing performance issues. Which two strategies should a system administrator use to improve community performance? Choose 2 answers",
      options: [
        "A. Use sharing sets",
        "B. Grant super user access to appropriate external users",
        "C. Create a new custom partner profile",
        "D. Delete the Executive and Manager roles",
      ],
      answer: "B,D",
      title: "Question 105",
    },
    {
      content:
        "Which relationship can be selected in a custom report type where Accounts is the primary object and Contacts is the related object?",
      options: [
        "A. Each contact must have a related account.",
        "B. Each account may or may NOT have related contacts.",
        "C. Each account must NOT have related contacts.",
        "D. Each contact may or may NOT have a related account.",
      ],
      answer: "B",
      title: "Question 106",
    },
    {
      content:
        "Northern Trail Outfitters has requested that when the Referral Date field is updated on the custom object Referral Source, the parent object Referral also needs to be updated. Which automation solution should an administrator use to meet this request?",
      options: [
        "A. Process Builder",
        "B. Lightning Web Component",
        "C. Approval Process",
        "D. Workflow Field Update",
      ],
      answer: "A",
      title: "Question 107",
    },
    {
      content:
        "Ursa Major Solar (UMS) wants to assign a Lightning for Outlook layout. Which two options can UMS assign this layout to? Choose 2 answers",
      options: ["A. Team", "B. Profile", "C. Role", "D. User"],
      answer: "B,D",
      title: "Question 108",
    },
    {
      content:
        "The managers at Ursa Major Solar asked the administrator to quickly provide access to sales reports and dashboards. How can this be done?",
      options: [
        "A. Use the Salesforce Auto-Report Builder.",
        "B. Log a case to Salesforce Support",
        "C. Search the AppExchange for free adoption report apps.",
        "D. Build reports and dashboards.",
      ],
      answer: "C",
      title: "Question 109",
    },
    {
      content:
        "The events manager at DreamHouse Realty has a hot lead from a successful open house that needs to become a Contact with an associated Opportunity. How should this be accomplished from the Campaign keeping the associated Campaign Member history?",
      options: [
        "A. Clone the lead and convert the cloned record to a Contact.",
        "B. Convert the lead from the Campaign Member Detail page.",
        "C. Add a Contact from the Campaign Member Detail page.",
        "D. Delete the lead and create a new Contact and Opportunity.",
      ],
      answer: "B",
      title: "Question 110",
    },
    {
      content:
        "The Universal Containers Administrator is editing the page layout for a new custom object when a text area field is inadvertently deleted from the page layout. What are three methods for restoring the field to the page layout? Choose 3 answers",
      options: [
        "A. From the Fields palette, drag the field into the same position.",
        "B. Restore from the recycle bin within 1 5 days.",
        "C. Click the Undo button or the Cancel button.",
        "D. Restore original page layout from a sandbox.",
        "E. Clone the layout from a different profile and use Save As.",
      ],
      answer: "A,C,D",
      title: "Question 111",
    },
    {
      content:
        "An administrator has assigned a permission set group with the two-factor authentication for User Interface Logins permission and the two-factor authentication for API Logins permission to a group of users. Which two prompts will happen when one of the users attempts to log In to Data Loader? Choose 2 answers",
      options: [
        "A. Users need to enter a verification code from email or SMS, whichever has higher priority.",
        "B. Users need to connect an authenticator app to their Salesforce account.",
        "C. Users need to get a security token from a trusted network using Reset My Security Token.",
        "D. Users need to download and install an authenticator app on their mobile device.",
      ],
      answer: "B,D",
      title: "Question 112",
    },
    {
      content:
        "Cloud Kicks' executives have noticed the Opportunity Expected Revenue field displays incorrect values. How should the administrator correct this'",
      options: [
        "A. Change the probability associated with the stage.",
        "B. Modify the closed won value associated with the stage.",
        "C. Update the expected revenue associated with the stage.",
        "D. Adjust the forecast category associated with the stage.",
      ],
      answer: "A",
      title: "Question 113",
    },
    {
      content: "Which two are purposes of AppExchange?",
      options: [
        "A. Administrators can download and customize pre-built dashboards and reports.",
        "B. Customers can share and install apps published by Salesforce partners.",
        "C. Support users can install the Service Cloud console custom app.",
        "D. Partners can download accounts and contacts to collaborate on sales deals.",
      ],
      answer: "A,B",
      title: "Question 114",
    },
    {
      content:
        "The marketing director at Northern Trail Outfitters has requested that the Budget field is populated in order for the Lead Status field to be marked as qualified. What tool should the administrator use to fulfill this request?",
      options: [
        "A. Require Field",
        "B. Workflow Rule",
        "C. Validation Rule",
        "D. Lead Conversion",
      ],
      answer: "C",
      title: "Question 115",
    },
    {
      content:
        "Universal Containers wants to begin selling to consumers, in addition to businesses. The Opportunity stages for selling to consumers will be different than those used for businesses. Which feature in Salesforce will allow for this to be accomplished? .",
      options: [
        "A. Page Layouts",
        "B. Sharing Rules",
        "C. Record Types",
        "D. Business Processes",
      ],
      answer: "C",
      title: "Question 116",
    },
    {
      content:
        "What are two considerations when activating and assigning Themes and Branding? Choose 2 answers",
      options: [
        "A. Only one Theme can be applied in an org at a time.",
        "B. Themes apply to both Lightning Experience and mobile.",
        "C. Up to 300 custom Themes can be created per org.",
        "D. Each profile can be applied a different Theme.",
      ],
      answer: "A,C",
      title: "Question 117",
    },
    {
      content:
        "Universal Containers has a new data requirement that all Account records must have a value in the type field. The administrator has been asked to provide automation to ensure that this data requirement is met. What should an administrator consider when designing an automation solution?",
      options: [
        "A. All Account record types include type values.",
        "B. There are fewer than 1 million Account records.",
        "C. The type field must be included on all page layouts.",
        "D. Existing records will NOT be automatically updated.",
      ],
      answer: "A",
      title: "Question 118",
    },
    {
      content:
        "Salas and Customer Cant at Ursa Major Solar need to see different fields on the Case related list from the Account record. Sales users want to see Case created date and status while Customer Care would like to see owner, status, and contact. What should the administrator use to achieve this?",
      options: [
        "A. Compact Layout Editor",
        "B. Related Lookup Filters",
        "C. Page Layout Editor",
        "D. Search Layout Editor",
      ],
      answer: "C",
      title: "Question 119",
    },
    {
      content:
        "An Administrator at Ursa Major Solar is converting a lead and needs to capture custom lead data on the converted contact, what should the administrator do to accomplish this goal?",
      options: [
        "A. Map custom lead fields to custom contact fields.",
        "B. Map custom lead fields to standard contact fields.",
        "C. Utilize the lead conversion wizard to select the fields.",
        "D. Utilize the data loader to move the custom lead data.",
      ],
      answer: "B",
      title: "Question 120",
    },
    {
      content:
        "An administrator wants to trigger a follow-up task for the opportunity owner when they close an opportunity as won, and another task after 60 days to check in with the customer. Which two automation tools should the administrator use? Choose 2 answers",
      options: [
        "A. Process Builder",
        "B. Field Update",
        "C. Workflow Rule",
        "D. Outbound Message",
      ],
      answer: "C",
      title: "Question 121",
    },
    {
      content:
        "The administrator at Ursa Major Solar has just finished creating new hot Account reports that filter Accounts that were modified this year with a rating of hot. The report was shared with the entire sales team. Some users are seeing some Accounts that have NOT been modified since last year and other Accounts where the rating is cold. What should the administrator do to ensure that the report works as intended for all users?",
      options: [
        "A. Create the report in a private folder.",
        "B. Create a filter using bucketing.",
        "C. Lock the report filters.",
        "D. Use a cross-object filter.",
      ],
      answer: "C",
      title: "Question 122",
    },
    {
      content:
        "The VP of Marketing wants Sales Reps to get updates when materials are updated in the Marketing library. What feature should an Administrator recommend?",
      options: [
        "A. Email alert",
        "B. Approval process",
        "C. Subscribe",
        "D. Validation rule",
      ],
      answer: "A",
      title: "Question 123",
    },
    {
      content:
        "An administrator supporting a global team of Salesforce users has been asked to configure company settings. Which two options should the administrator configure? Choose 2 answers",
      options: [
        "A. Currency Locale",
        "B. Password Policy",
        "C. Login Hours",
        "D. Default Language",
      ],
      answer: "A,D",
      title: "Question 124",
    },
  ],
});
