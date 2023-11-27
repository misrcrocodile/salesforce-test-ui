window.testContent = window.testContent || [];
var testId = "SalesforceAdmin1";
var testName = "SalesforceAdmin1.ADM-201";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "SalesforceAdmin1.ADM-201.v2022-03-11.q103",
  content: [
    {
      content:
        "The marketing team at Ursa Major Solar wants to send a personalized email whenever a lead fills out the web-to-lead form on their website. They want to send different messages based on the Lead Industry field value. What should an administrator configure to meet this requirement?",
      options: [
        "A. Configure an auto-response rule to email the lead.",
        "B. Add a public group and Process Builder to email the lead.",
        "C. Use a validation rule to trigger workflow to email the lead.",
        "D. Create an assignment rule to email the lead.",
      ],
      answer: "A",
      title: "Question 1",
    },
    {
      content:
        "Northern Trail Outfitters has a custom quick action on Account that creates a new Case. How should an administrator make the quick action available on the Salesforce mobile app?",
      options: [
        "A. Include the action in the Salesforce Mobile Navigation menu.",
        "B. Modify compact Case page layout to include the action.",
        "C. Add the Salesforce Mobile and Lightning Experience action to the page layout.",
        "D. Create a custom Lightning App with the action.",
      ],
      answer: "A",
      title: "Question 2",
    },
    {
      content:
        "An administrator at Universal Containers has been asked to prevent users from accessing Salesforce from outside of their network. What are two considerations for this configuration? Choose 2 answers",
      options: [
        "A. Single sign-on will allow users to Jog In from anywhere.",
        "B. IP address restrictions are set on the profile or globally for the org.",
        "C. Enforce Login IP Ranges on Every Request must be selected to enforce IP restrictions.",
        "D. Users can change their password to avoid login IP restrictions.",
      ],
      answer: "B,C",
      title: "Question 3",
    },
    {
      content:
        "Ursa Major Solar offers amazing experiences for all of its employees. The employee engagement committee wants to post updates while restricting other employees from posting. What should the administrator create to meet this request?",
      options: [
        "A. Chatter Recommendations",
        "B. Chatter Broadcast Group",
        "C. Chatter Unlisted Group",
        "D. Chatter Stream",
      ],
      answer: "B",
      title: "Question 4",
    },
    {
      content:
        "Ursa Major Solar is using products and price books. Which two items should an administrator take into considerations about these features? Choose 2 answers",
      options: [
        "A. Products without a price are automatically added to the standard price book.",
        "B. A product can have a different list price in different price books.",
        "C. The standard and list price for a product can be listed In more than one currency.",
        "D. If price books contain assets, they can NOT contain products.",
      ],
      answer: "B,C",
      title: "Question 5",
    },
    {
      content:
        "Universal Containers successfully deployed a partner community last quarter and is experiencing performance issues. Which two strategies should a system administrator use to improve community performance? Choose 2 answers",
      options: [
        "A. Create a new custom partner profile",
        "B. Use sharing sets",
        "C. Delete the Executive and Manager roles",
        "D. Grant super user access to appropriate external users",
      ],
      answer: "C,D",
      title: "Question 6",
    },
    {
      content:
        "Which two actions should an administrator perform with Case escalation rules? Choose 2 answers",
      options: [
        "A. Re-open the Case.",
        "B. Re-assign the Case.",
        "C. Change the Case Priority.",
        "D. Send email notifications.",
      ],
      answer: "B,C",
      title: "Question 7",
    },
    {
      content:
        'The VP of sales at universal containers requested that "Verbal Agreement" be added as a new opportunity stage. The Administrator added this new picklist value to the stage field but found that the new value was not available to users. What should the administrator do?',
      options: [
        "A. Ensure the limit of 10 stage values was not exceeded",
        "B. Ensure the new value was marked as active",
        "C. Add the new value to the appropriate record type",
        "D. Add the new value to the appropriate sales process",
      ],
      answer: "D",
      title: "Question 8",
    },
    {
      content:
        "A new sales rep at Ursa Major Solar has a qualified lead that is ready for conversion.When using the Lead conversion process, which two records can be created? Choose 2 answers",
      options: ["A. Contact", "B. Case", "C. Campaign", "D. Account"],
      answer: "A,D",
      title: "Question 9",
    },
    {
      content:
        "North Trail Outfitters wants a backup administrator set up for their org. once the administrator is set up, they report that they are unable to perform any of the administrator duties What are two possible reasons for the access issues? Choose 2 answers",
      options: [
        "A. The role needs to be specified on the user record",
        "B. The active checkbox is unchecked by default.",
        "C. The system Administrator profile is unavailable under the Salesforce Platform license.",
        "D. The user was given the delegated administrator group access.",
      ],
      answer: "A,C",
      title: "Question 10",
    },
    {
      content:
        "An administrator for Ursa Major Solar wants to allow internal users to view a dashboard as a Sales Manager within a given sales region. How can these be configured?",
      options: [
        "A. Create a dashboard for all opportunites in the region",
        "B. Create 3 dashboard to run as 3 specified user,",
        "C. Create a dashboard with multiple components.",
        "D. Create a dashboard to run as the logged-in user.",
      ],
      answer: "B",
      title: "Question 11",
    },
    {
      content:
        "At Universal Containers, there is a custom field on the Lead named Product_Category_c. Management would like this information to be part of the opportunity upon lead conversion. What action should the administrator take to satisfy the request?",
      options: [
        "A. Crete a workflow to update opportunity fields based on the lead.",
        "B. Map the lead custom field to the product' product category field.",
        "C. Create a custom field on the Opportunity and map the two fields.",
        "D. Configure the product categories picklist field on the product.",
      ],
      answer: "C",
      title: "Question 12",
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
      title: "Question 13",
    },
    {
      content:
        "A user at Cloud Kicks Is having Issues logging in to Salesforce. The user asks the administrator to reset their password. Which two options should the administrator consider when resetting the user's password? Choose 2 answers",
      options: [
        "A. After resetting a password, the user may be required to activate their device to successfully log In to Salesforce.",
        "B. Resetting the password will change the user's password policy.",
        "C. Single sign-on users can reset their own passwords using the forgot password link,",
        "D. Resetting a locked-out user's password automatically unlocks the user's account.",
      ],
      answer: "A,D",
      title: "Question 14",
    },
    {
      content:
        "The support group at Universal Containers wants agents to capture different Information for product support and Inquiry cases. In addition, the lifecycle for product support cases should have more steps than the lifecycle for inquiry cases. Which three features should an administrator use to meet these requirements? Choose 3 answers Calculator",
      options: [
        "A. Page layouts",
        "B. Permission sets",
        "C. Support processes",
        "D. Field -level security",
        "E. Record types",
      ],
      answer: "A,C,E",
      title: "Question 15",
    },
    {
      content:
        "A sales rep has left the company and an administrator has been asked to re-assign all their accounts and opportunities to a new sales rep and keep the teams as is. Which tool should an administrator use to accomplish this?",
      options: [
        "A. Mass Transfer Tool",
        "B. Dataloader.io",
        "C. Data Import Wizard",
        "D. Data Loader",
      ],
      answer: "A",
      title: "Question 16",
    },
    {
      content:
        "The administrator at Universal Containers is unable to see the user license option when creating new users today, despite creating new users with this license type earlier in the week. What should the administrator consider first in order to diagnose the problem?",
      options: [
        "A. Open a Salesforce Support Case.",
        "B. Verify that Salesforce is a valid license type for the User object.",
        "C. Check on the remaining available Salesforce licenses under Company Information.",
        "D. Check on the remaining available Salesforce licenses under User Management Settings.",
      ],
      answer: "C",
      title: "Question 17",
    },
    {
      content:
        "Northern Trail Outfitters wants emails received from customers to generate cases automatically. How should the administrator ensure that the emails are sent to the correct queue?",
      options: [
        "A. Create an Escalation Rule to send cases to the correct queue.",
        "B. Configure Email-to-Case so emails are delivered to the correct queue.",
        "C. Utilize a flow to Identify the correct queue and assign the case.",
        "D. Use a custom email service to set the owner of the case upon creation.",
      ],
      answer: "B",
      title: "Question 18",
    },
    {
      content:
        "Ursa Major Solar needs a case to be automatically created. Which three features can an administrator use to accomplish this goal? Choose 3 answers",
      options: [
        "A. SMS-to-case",
        "B. Process Builder",
        "C. Email-to-case",
        "D. Web-to-case",
        "E. Lightning for Outlook",
      ],
      answer: "B,C,D",
      title: "Question 19",
    },
    {
      content:
        "When a Cloud Kicks opportunity closes, the company would like to automatically create a renewal opportunity. Which two automation tools should an administrator use to accomplish this request? acne Choose 2 answers",
      options: [
        "A. Workflow Rule",
        "B. Process Builder",
        "C. Flow Builder",
        "D. Approval Process",
      ],
      answer: "B,C",
      title: "Question 20",
    },
    {
      content:
        "Cloud Kicks wants to allow customers to create their own cases while visiting Its public homepage. What should the administrator recommend?",
      options: [
        "A. Web-to-Case",
        "B. Omni-Channel",
        "C. SMS Response",
        "D. Email-to-Case",
      ],
      answer: "A",
      title: "Question 21",
    },
    {
      content:
        "The administrator at Cloud Kicks has created an approval process for time off requests. Which two automated actions are available to be added as part of approval process? Choose 2 answers",
      options: [
        "A. Chatter Post",
        "B. Field Update",
        "C. Autolaunched Flow",
        "D. Email Alert",
      ],
      answer: "B,D",
      title: "Question 22",
    },
    {
      content:
        "Ursa Major Solar has a path on Case. The company wants to require its users to follow the status values as they are on the path. Agents should be prohibited from reverting the Case back to a previous status.",
      options: [
        "A. Global Value Picklists",
        "B. Predefined Field Values",
        "C. Validation Rules",
        "D. Dependent Picklists",
      ],
      answer: "C",
      title: "Question 23",
    },
    {
      content:
        "Universal Containers has two sales teams, sales team A and sales team B.Each team has their own role in the role hierarchy. Both roles are subordinates of the same Manager role. How should the administrator share records owned by sales team A with sales team B?",
      options: [
        "A. Hierarchical sharing",
        "B. Criteria-based sharing",
        "C. Use manual sharing",
        "D. Owner-based sharing",
      ],
      answer: "D",
      title: "Question 24",
    },
    {
      content:
        "The Universal Containers Administrator is editing the page layout for a new custom object when a text area field is inadvertently deleted from the page layout. What are three methods for restoring the field to the page layout? Choose 3 answers",
      options: [
        "A. Click the Undo button or the Cancel button.",
        "B. From the Fields palette, drag the field into the same position.",
        "C. Restore from the recycle bin within 1 5 days.",
        "D. Restore original page layout from a sandbox.",
        "E. Clone the layout from a different profile and use Save As.",
      ],
      answer: "A,B,D",
      title: "Question 25",
    },
    {
      content: "What must an administrator do when creating a record type?",
      options: [
        "A. Create a new page layout for the record type",
        "B. Set the field-level security for the record type",
        "C. Assign the record type to the appropriate profiles",
        "D. Add the record type to the required user records",
      ],
      answer: "C",
      title: "Question 26",
    },
    {
      content:
        "universal containers (UC) has a Web -to -Case form on its Lightning Customer Community.UC wants to separate Cases into the following product categories: Corrugated Paper, Plastic, Fiberboard, and Metal. UC has added a picklist field to store this data. How can the Case be automatically placed in the correct queue upon submission?",
      options: [
        "A. Create Assignment Rules based on the picklist values to move Cases to a Queue.",
        "B. Create an Escalation Rule entry for each picklist value and set to zero minutes.",
        "C. Create Record Types for each picklist value and a Business Process to move each Case to the correct Queue.",
        "D. Create Record Types for each picklist value and assign to each product team's profile.",
      ],
      answer: "A",
      title: "Question 27",
    },
    {
      content:
        "Users at Cloud Kicks want to be able to create a task that will repeat every two weeks. What should an administrator do to meet this requirement?",
      options: [
        "A. Turn on Recurring Activities",
        "B. Workflow rule to create recurring tasks",
        "C. Enable Creation of Recurring Tasks",
        "D. Flow to create recurring tasks",
      ],
      answer: "C",
      title: "Question 28",
    },
    {
      content:
        "Ursa Major Solar wants to upload 10,000 Campaigns to Salesforce. Which tool should the administrator utilize to accomplish this task?",
      options: [
        "A. AppExchange package",
        "B. Data Loader",
        "C. Data Import Wizard",
        "D. Bulk Data Load Jobs",
      ],
      answer: "C",
      title: "Question 29",
    },
    {
      content:
        "Which set of small and large data backup methods are available in native Salesforce",
      options: [
        "A. Report Exports, Weekly Data Export Service, and Data Loader Exports",
        "B. Dashboard Exports, Report Exports, and Weekly Data Export Service",
        "C. Mass Exports, Weekly Data Export Service, and Data Loader Exports",
        "D. Mass Export Wizard, Weekly Data Export Service, and Data Loader Exports Calculator",
      ],
      answer: "B",
      title: "Question 30",
    },
    {
      content:
        "The administrator at Cloud Kicks has a custom plckilst field on Lead, which Is missing on the Contact when leads are converted. Which two Items should the administrator do to make sure these values are populated? Choose 2 answers",
      options: [
        "A. Update the picklist value with a validation rule.",
        "B. Map the pickilst field on the Lead to the Contact.",
        "C. Create a custom picklist field on Contact.",
        "D. Set the pickilst field to be required on the Lead object.",
      ],
      answer: "B,C",
      title: "Question 31",
    },
    {
      content:
        "Ursa Major Solar's administrator created a new account record type, but when marketing users are creating new account records, they are enabled to choose the new record type. What are two potential causes of this issue? Choose 2 answers",
      options: [
        "A. The record type is deactivated.",
        "B. The record type default setting is disabled.",
        "C. The record type is disabled on the marketing user profile.",
        "D. The record type is dissociated from the page layout.",
      ],
      answer: "A,C",
      title: "Question 32",
    },
    {
      content:
        "Which two statements apply when custom fiscal year is enabled? Choose 2 answers",
      options: [
        "A. The custom fiscal year setting CANNOT be disabled.",
        "B. The custom fiscal year must be defined manually.",
        "C. The defined custom fiscal year only affects forecasts.",
        "D. The custom fiscal year automatically updates product schedules.",
      ],
      answer: "B",
      title: "Question 33",
    },
    {
      content:
        "When users log In to Salesforce via the user interface, which two settings does the system check for authentication? Choose 2 answers",
      options: [
        "A. The users TWo-Factor Authentication for User Interface Logins permission",
        "B. The user's TWo-Factor Authentication for API Logins permission",
        "C. The role IP address restrictions",
        "D. The user's profile login hours restrictions",
      ],
      answer: "B,D",
      title: "Question 34",
    },
    {
      content:
        "A senior realtor at Ursa Major Solar has received a long list of new residential homes to sell to for the spring. Management needs the spreadsheet of the new residential homes and a separate spreadsheet of pricebooks loaded into Salesforce. Which Salesforce data tool will meet this request?",
      options: [
        "A. Data Import Wizard",
        "B. Data Loader",
        "C. Mass Create Records",
        "D. Mass Transfer Records",
      ],
      answer: "B",
      title: "Question 35",
    },
    {
      content: "What does campaign Influence allow a user to do?",
      options: [
        "A. Adjust the percentage of influence each campaign has on an opportunity.",
        "B. Report on the campaigns that have contributed to an opportunity.",
        "C. View the entire campaign hierarchy.",
        "D. Summarize campaign member statistics on a campaign.",
      ],
      answer: "A",
      title: "Question 36",
    },
    {
      content:
        "Northern Trail Outfitters has two sales groups. Each group has its own unique sales process. Management wants to ensure that the sales groups see their relevant sales process when working on opportunities. How should an administrator meet this requirement?",
      options: [
        "A. Opportunity Teams",
        "B. Page Layouts",
        "C. Record types",
        "D. Enable Paths",
      ],
      answer: "C",
      title: "Question 37",
    },
    {
      content:
        "Ursa Major Solar wants to upload data to Salesforce and heard about the Data Import Wizard. They want to upload the following data: Os)* 60,000 Accounts ?* 20,000 Contacts Calculator* 10,000 Opportunities . .* 5,000 Conference custom object recordsWhat two considerations should be kept in mind when using the Data Import Wizard? Choose 2 answers",
      options: [
        "A. Opportunities need to be uploaded with a different tool.",
        "B. There is a limit of 10,000 records that can be uploaded at once.",
        "C. Custom Objects need to be uploaded with a different tool.",
        "D. There is a limit of 50,000 records that can be uploaded at once.",
      ],
      answer: "A,D",
      title: "Question 38",
    },
    {
      content:
        "Universal Containers has a new data requirement that all Account records must have a value in the type field. The administrator has been asked to provide automation to ensure that this data requirement is met. What should an administrator consider when designing an automation solution?",
      options: [
        "A. The type field must be included on all page layouts.",
        "B. All Account record types include type values.",
        "C. Existing records will NOT be automatically updated.",
        "D. There are fewer than 1 million Account records.",
      ],
      answer: "B",
      title: "Question 39",
    },
    {
      content:
        "An Administrator at Ursa Major Solar is converting a lead and needs to capture custom lead data on the converted contact, what should the administrator do to accomplish this goal?",
      options: [
        "A. Utilize the lead conversion wizard to select the fields.",
        "B. Utilize the data loader to move the custom lead data.",
        "C. Map custom lead fields to standard contact fields.",
        "D. Map custom lead fields to custom contact fields.",
      ],
      answer: "D",
      title: "Question 40",
    },
    {
      content:
        "Anytime an Opportunity is moved to Closed Won, Sales reps at Universal Containers (UC) are supposed to create a record on a child object of Opportunities called Survey Request.This action, however, does not always occur. Sales reps do not always populate all fields correctly. Which two tools should be used to remove permissions from Sales to create these records and automate record creation? Choose 2 answers",
      options: ["A. Process Builder", "B. Flow", "C. Approvals", "D. Workflow"],
      answer: "A,B",
      title: "Question 41",
    },
    {
      content:
        "The administrator at AW Computing wants to send off client welcome tasks and a welcome email to the primary contact automatically when an opportunity is closed won. What automation tool best accomplishes this?",
      options: [
        "A. Outbound Message",
        "B. Approval Process",
        "C. Process Builder",
        "D. Validation Rule |us",
      ],
      answer: "C",
      title: "Question 42",
    },
    {
      content:
        "Universal Containers (UC) customers have provided feedback that their support cases are not being responded to quickly enough. UC wants to send all unassigned Cases that have been open for more than 2 hours to an urgent Case queue and alert the support manager. Which feature should an administrator configure to meet this requirement?",
      options: [
        "A. Case Dashboard Refreshes",
        "B. Case Scheduled Reports",
        "C. Case Assignment Rules",
        "D. Case Escalation Rules",
      ],
      answer: "D",
      title: "Question 43",
    },
    {
      content:
        'The administrator creates a validation rule that will require a custom text field called "Details" be updated based on the value of another picklist field called "Status." Which two actions should the administrator take before activating the validation rule? Choose 2 answers',
      options: [
        "A. Update the field types to be compatible with validation rules.",
        "B. Add the fields to the page layout.",
        "C. Update the user's profile to read/write access to both fields.",
        "D. Add the validation rule to the user's profile.",
      ],
      answer: "C",
      title: "Question 44",
    },
    {
      content:
        "Which object must be related in order to create an opportunity record?",
      options: ["A. Account", "B. Contact", "C. Quote", "D. Lead"],
      answer: "A",
      title: "Question 45",
    },
    {
      content:
        "An administrator at Ursa Major Solar (UHS) has created a new Lightning record page for the sales team to display a report chart embedded on the account page. No record types exist for an account at this time. Which action should the administrator perform to make this page the default view of the UMS app for the sales team without impacting the support team?",
      options: [
        "A. Make the page the default object record page for the UMS app.",
        "B. Make the page the org default.",
        "C. Make the page the default object record page for the UMS app for the sates profile.",
        "D. Create an account record type and make the page the default object record page.",
      ],
      answer: "A",
      title: "Question 46",
    },
    {
      content:
        "Universal Containers wants to set up a customer service community where existing and potential customers can view public discussions, collaborate with other members, and search for solutions posted by other members without logging into the community. How should an administrator allow access to the community?",
      options: [
        "A. Use the community's guest user profile",
        "B. Create a custom community profile",
        "C. Set up self-registration for the community",
        "D. Use Linkedin or Facebook as authentication providers",
      ],
      answer: "A",
      title: "Question 47",
    },
    {
      content:
        "Ursa Major Solar has service level agreements (SLA) that are routed to support queues. Cases that meet the 24 hour SLA need to be automatically re-assigned to the next tier queue. Which feature should be used to fulfill this requirement?",
      options: [
        "A. Case assignment rule",
        "B. Einstein Case Routing",
        "C. Auto-response rule",
        "D. Case escalation rule",
      ],
      answer: "D",
      title: "Question 48",
    },
    {
      content:
        "Users have noticed that when they click on a report In a dashboard to view the report details, the values In the report are different from the values displayed on the dashboard. What are the two reasons this .Is likely to occur? Choose 2 answers",
      options: [
        "A. The running dashboard user and viewer have different permissions.",
        "B. The dashboard needs to be refreshed.",
        "C. The report needs to be refreshed.",
        "D. The current user does not have access to the report folder.",
      ],
      answer: "A,B",
      title: "Question 49",
    },
    {
      content:
        'Ursa Major Solar has Its business hours set from 9:00 AM to 5:00 PM for the reps that are on Pacific Time. "The reps on eastern Time need business hours set to start 3 hours earlier to cover for support. How should an administrator solve for this Issue0',
      options: [
        "A. Set temporary business hours for each time zone.",
        "B. Allow the reps to set business hours manually.",
        "C. Adjust the current business hours to accommodate the Eastern Time Zone.",
        "D. Create one set of business hours per time zone.",
      ],
      answer: "D",
      title: "Question 50",
    },
    {
      content:
        "Cloud Kicks wants its reports to show a Fiscal Year that starts on February 1 and has 12 months. How should the administrator address this requirement?",
      options: [
        "A. A Set the Fiscal Year to Custom and the starting month as February.",
        "B. Set the Fiscal Year to Custom and the duration to 4 quarters.",
        "C. Set the Fiscal Year to Standard and the starting month as February.",
        "D. Set the Fiscal Year to Standard and the duration to 12 months.",
      ],
      answer: "C",
      title: "Question 51",
    },
    {
      content:
        "The business development team at Cloud Kicks thinks the Account creation process has too many fields to fill out and the page feels cluttered. They have requested the administrator to simplify the process. Which automation tool should an administrator use?",
      options: [
        "A. Validation Rule",
        "B. Workflow Rule",
        "C. Flow Builder",
        "D. Approval Process",
      ],
      answer: "C",
      title: "Question 52",
    },
    {
      content:
        "Universal Containers frequently uses Case escalations and wants the ability to track any Cases that has been escalated. The administrator has found that when any escalated Cases are closed, the escalated check automatically unchecks. What two actions should the administrator configure to meet this requirement?",
      options: [
        "A. Create a custom checkbox field called Has_Been_Excalated_c",
        "B. Select show closed statuses in Case status field in support settings.",
        "C. Modify the time criteria in the escalation rule.",
        "D. Use a Process statuses in Case Status field in support settings.",
      ],
      answer: "A,C",
      title: "Question 53",
    },
    {
      content:
        "The VP of Sales at Cloud Kicks would like a graphic on the company performance dashboard to display the total current pipeline against the goal for the year, Which type of component should be used to display the requested information?",
      options: ["A. Table", "B. Metric", "C. Stacked Bar", "D. Gauge"],
      answer: "C",
      title: "Question 54",
    },
    {
      content:
        "An administrator at Cloud Kicks has a flow In production that is supposed to emit new words. However, no new records are being created. What could the issue be?",
      options: [
        "A. The flow url Is deactivated.",
        "B. The flow Is read only.",
        "C. The flow trigger is missing.",
        "D. The flow is Inactive.",
      ],
      answer: "D",
      title: "Question 55",
    },
    {
      content:
        "A time -dependent action Is placed In the workflow queue when the record Is created. Which two scenarios will cause the action to be removed from the queue? Choose 2 answers",
      options: [
        "A. When a validation rule is triggered for the record",
        "B. When the action is deleted from the workflow queue",
        "C. When another record triggers the same workflow rule",
        "D. When the record no longer matches the rule criteria",
      ],
      answer: "B,D",
      title: "Question 56",
    },
    {
      content:
        "What should an administrator consider when setting up Case Feed?",
      options: [
        "A. Chatter Feed tracking must be enabled for the case object.",
        "B. Case Feed replaces the standard case detail page by default.",
        "C. The Use Case Feed permission is automatically active for all profiles",
        "D. Case Feed requires the Service Cloud User feature license.",
      ],
      answer: "A",
      title: "Question 57",
    },
    {
      content:
        "Ursa Major Solar needs its sales users to be able to do the following:* View their open Opportunities grouped by Stage* View their open Opportunities grouped by source report on a dashboard component.which report format needs to be used to accomplish this goal?",
      options: ["A. Matrix", "B. Joined", "C. Summary", "D. Tabular"],
      answer: "C",
      title: "Question 58",
    },
    {
      content:
        "Cloud Kicks has a customer success agent going on leave and needs to change ownership on multiple cases. Which two users are able to fulfill this request? Choose 2 answers",
      options: [
        "A. A user with the Manage Cases permission.",
        "B. A user with the System Administrator profile.",
        "C. A user with a manager role above the agent.",
        "D. A user with Read permission on the account.",
      ],
      answer: "A,B",
      title: "Question 59",
    },
    {
      content:
        "When a sales rep dicks a button on an opportunity, a simple discount calculator screen should be launched. Which automation tool should an administrator use to build this discount calculator screen?",
      options: [
        "A. Platform Event",
        "B. Workflow Rule",
        "C. Process Builder",
        "D. Flow Builder",
      ],
      answer: "D",
      title: "Question 60",
    },
    {
      content:
        "Users in separate departments are able to see and edit different fields on Opportunities. The Sales team can edit all fields on the Opportunity while the Support team has read-only access to these fields.Where is field -level Security controlled for users on these teams?",
      options: [
        "A. Public Groups",
        "B. Sharing Rules",
        "C. Role",
        "D. Profile",
      ],
      answer: "D",
      title: "Question 61",
    },
    {
      content:
        "An administrator at Cloud Kicks is building a flow that needs to search for records that meet certain conditions and store values from those records in variables for use later in the flow. What flow element should the administrator add?",
      options: [
        "A. Create Records",
        "B. Update Records",
        "C. Get Records",
        "D. Assignment",
      ],
      answer: "C",
      title: "Question 62",
    },
    {
      content:
        "The client services and customer support teams share the same profile but have different permission sets. The custom object Retention related list needs to be restricted to the client services team on the Lightning record page layout. What should the administrator use to fulfill this request?",
      options: [
        "A. Sharing Settings",
        "B. Record Type Assignment",
        "C. Component Visibility",
        "D. Page Layout Assignment",
      ],
      answer: "C",
      title: "Question 63",
    },
    {
      content:
        "The administrator at Ursa Major Solar has created a new record type for customer warranty Cases. Which two assignments should the administrator use to display the new record type to users? Choose 2 answers",
      options: [
        "A. Page Layout Assignment",
        "B. Profile Assignment",
        "C. Role Assignment",
        "D. App Manager Assignment",
      ],
      answer: "A,B",
      title: "Question 64",
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
      title: "Question 65",
    },
    {
      content:
        "Northern Trail Outfitters has requested that when the Referral Date field is updated on the custom object Referral Source, the parent object Referral also needs to be updated. Which automation solution should an administrator use to meet this request?",
      options: [
        "A. Workflow Field Update",
        "B. Approval Process",
        "C. Process Builder",
        "D. Lightning Web Component",
      ],
      answer: "C",
      title: "Question 66",
    },
    {
      content:
        "Universal Containers introduced a new product and wants to track all associated cases that get logged. They are looking for an automated solution that would give the product's two lead engineers read/write access to all new cases that reference the new product. What should an administrator do to satisfy this requirement?",
      options: [
        "A. Create a predefined case team and an assignment rule.",
        "B. Create an auto-response rule and a public group.",
        "C. Create a user-based sharing rule and an ad-hoc case team.",
        "D. Create a queue and a criteria-based sharing rule.",
      ],
      answer: "C",
      title: "Question 67",
    },
    {
      content:
        "An administrator at Universal Containers is reviewing current security settings in the company's Salesforce org. What should the administrator do to prevent unauthorized access to Salesforce?",
      options: [
        "A. Enable caching and autocomplete on login page",
        "B. Disable TLS requirements for sessions",
        "C. Enable multi-factor authentication",
        "D. Customize organization-wide defaults",
      ],
      answer: "C",
      title: "Question 68",
    },
    {
      content:
        "The VP of sales at Cloud Kicks is receiving an error message that prevents them from saving an opportunity. The administrator attempted the same edit without receiving an error. How can the administrator validate the error the user is receiving?",
      options: [
        "A. Review the sharing model.",
        "B. View the setup audit trail.",
        "C. Log in as the user.",
        "D. Edit the page layout.",
      ],
      answer: "A,C",
      title: "Question 69",
    },
    {
      content:
        "Universal Containers has a new sales rep who will be responsible for the government vertical. All existing government accounts should be moved to the new rep using mass transfer for accounts. Which two records will also transferred from the current account owner to the new rep in this scenario? Choose 2 answers",
      options: [
        "A. All Contacts",
        "B. All Open opportunity",
        "C. All open Cases",
        "D. All Activities",
      ],
      answer: "B,C",
      title: "Question 70",
    },
    {
      content:
        "Universal Containers (UC) has a queue that is used for managing tasks that need to be worked by the UC customer support team. The same team will now be working some of UC's Cases. Which two options should the administrator use to help the support team? Choose 2 answers",
      options: [
        "A. Add Cases to the existing queue as available object.",
        "B. Use assignment rules to set the queue as the owner of the case.",
        "C. Create a new queue and add Cases as an available object.",
        "D. Configure a flow to assign the cases to the queue.",
      ],
      answer: "C",
      title: "Question 71",
    },
    {
      content:
        "The administrator at Universal Container was tasked with creating a user creating a user record for a new hire. Upon saving the ....display and the record was not saved. Which two considerations should the administrator take into account when creating a user record? Choose 2 answers",
      options: [
        "A. The password must be unique to the Salesforce organization.",
        "B. The username already exists and needs to be unique across all Salesforce orgs.",
        "C. The data in the username field needs to resemble an email address.",
        "D. The locale settings are based on the computer's locate settings.",
      ],
      answer: "B,C",
      title: "Question 72",
    },
    {
      content:
        "The support manager at Cloud Kicks wants to respond to customers as quickly as possible. They have requested that the response Include the top five troubleshooting tips that could help solve the customer's issue. What should the administrator suggest to meet these requirements?",
      options: [
        "A. Email Alerts",
        "B. Knowledge Articles",
        "C. Auto-Response Rules",
        "D. Assignment Rules",
      ],
      answer: "D",
      title: "Question 73",
    },
    {
      content:
        "Ursa Major Solar users want to utilize Salesforce Knowledge. Which statement accurately describes Knowledge? Calculator",
      options: [
        "A. A knowledge base that uses Machine Learning to generate an article to solve customer support issues",
        "B. An automated Machine Learning tool that converts Leads to Opportunities given a predefined set of conditions",
        "C. A knowledge base comprised of articles that can be written and utilized by support agents",
        "D. An automated tool that closes Cases based on historical information",
      ],
      answer: "C",
      title: "Question 74",
    },
    {
      content:
        "An administrator at Universal Containers needs a simple way to trigger an alert to the director of sales when opportunities reach an amount of $500,000. What should the administrator configure to meet this requirement?",
      options: [
        "A. Key Deals component on the homepage",
        "B. Set up Big Deal Alerts for the amount.",
        "C. Enable Opportunity Update Reminders.",
        "D. Opportunity warnings in Kanban View",
      ],
      answer: "B",
      title: "Question 75",
    },
    {
      content:
        "A user with administrator privileges accidentally deleted a custom field in an org one day ago. What should the administrator consider to restore the field?",
      options: [
        "A. The deleted field and its data CANNOT be restored.",
        "B. The deleted field and its data can be restored up to 15 days after deletion.",
        "C. The deleted field and its data can be restored up to 30 days after deletion.",
        "D. The deleted field can be restored up to 15 days after deletion, but all data will be lost.",
      ],
      answer: "B",
      title: "Question 76",
    },
    {
      content:
        "At Ursa Major Solar, Salesforce users have a session timeout of 12 hours, but management wants the session timeout to be increased to 24 Os) hours, Additionally, management wants inactive users to be logged out at that time. ?What should the administrator do to fulfill this request?",
      options: [
        "A. In user profiles, type in 24 hours in the timeout section, and uncheck the box for force logout on session timeout.",
        "B. In session settings, select 24 hours, and check the box for force logout on session timeout.",
        "C. In session settings, select 24 hours, and uncheck the box for force logout on session timeout.",
        "D. In user profiles, enter 24 hours in the timeout section, and check the box for Force logout on session timeout.",
      ],
      answer: "B",
      title: "Question 77",
    },
    {
      content:
        "Cloud Kicks has asked the administrator to test a new screen flow that creates contacts. What are two key components of testing the flow? Choose 2 answers",
      options: [
        "A. Use Debug to test the flow in Flow Builder.",
        "B. Test the flow in a sandbox.",
        "C. Run the flow using it to create contacts.",
        "D. Set up a flow interview to test the flow.",
      ],
      answer: "A,D",
      title: "Question 78",
    },
    {
      content:
        "Ursa Major Solar is bringing a new type of solar panel to market. An administrator needs to create a sales process for this new product. Os) What are three considerations for the administrator in this scenario? Choose 3 answers",
      options: [
        "A. Adding a new value to the record type master picklist value list adds the value to all existing record type picklists.",
        "B. The record type name assignment becomes permanent upon save of a new record type.",
        "C. All picklist values on the page layout must be added to the master picklist value list or be active values.",
        "D. The record type's page layout is assigned to users through their profile assignments.",
        "E. An opportunity record type will need to be created and assigned to the sales process.",
      ],
      answer: "A,C,D",
      title: "Question 79",
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
      title: "Question 80",
    },
    {
      content:
        "Ursa Major Solar is setting up case assignment rules. What are two places where the cases can be assigned? Choose 2 answers",
      options: ["A. Queue", "B. User", "C. Contact", "D. Profile"],
      answer: "A,B",
      title: "Question 81",
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
      title: "Question 82",
    },
    {
      content:
        "Cloud Kicks wants users to only be able to choose Opportunity stage closed won If the Lead source has been selected. How should the administrator accomplish this goal?",
      options: [
        "A. Make Lead source a dependent picklist to the Opportunity stage field.",
        "B. Configure a validation rule requiring Lead source when the stage is set to closed won.",
        "C. Change the Opportunity stage field to read only on the page layout,",
        "D. Modify the Opportunity stage a dependent picklist to the Lead source field.",
      ],
      answer: "B",
      title: "Question 83",
    },
    {
      content:
        "Management at Cloud Kicks is requesting all records from a custom object that are more than 12 months old and have a status of new be deleted. What should the administrator use to honor this request?",
      options: [
        "A. Mass delete",
        "B. Data Loader",
        "C. Data Import Wizard",
        "D. Mass edit from lists",
      ],
      answer: "B",
      title: "Question 84",
    },
    {
      content:
        "Sales executives at Ursa Major Solar (USM) frequently schedule virtual and remote meetings with key customer stakeholders.USM wants to track activities for this meeting category to clearly display customer meetings in the account, contact, or opportunity page layouts, as well as adding this data to reports. What should the administrator do to meet this goal?",
      options: [
        "A. Inform the user to manually enter the meeting details in the description field on accounts, contacts, and opportunities.",
        "B. Add a new value to the type field on tasks used for accounts, contacts, and opportunities.",
        "C. Inform the user to manually enter the meeting details in the account comments.",
        "D. Add a new value to the type field on accounts, contacts, and opportunities.",
      ],
      answer: "B",
      title: "Question 85",
    },
    {
      content:
        "Ursa Major Solar has an existing process for their solar panel Opportunities that include the following stages:* Prospecting* Value Proposition* Negotiation/Review* Closed Won* Closed LostThe want to implement a new process for their battery Opportunities using the following stages:* Qualification* Value Prospection* Negotiation/Review* Closed Won* Closed LostWhat should the administrator configure to implement these changes?",
      options: [
        "A. Update the existing Opportunity sales process to includes qualification as a valid stage.",
        "B. Create a new battery record type on Opportunity and add the appropriate values to the stage picklist.",
        "C. Edit the stage field on Opportunity and activate qualification as a value.",
        "D. Create a new sales process that includes the relevant stages and assign it to the new battery record type on opportunity.",
      ],
      answer: "D",
      title: "Question 86",
    },
    {
      content:
        "After a recent restructure of its Sales Department. Ursa Major Solar is having issues with records being omitted in the new Opportunity Report. Which three questions should the administrator ask to research this issue? Choose 3 answers",
      options: [
        "A. Do owners of all records have Roles and correct Territory Assignments?",
        "B. Did the sales manager start from a copy or done of an existing report?",
        "C. Do the records the sales managers expect to see match the filter criteria?",
        "D. Are records currently being shared with the sales manager?",
        "E. Have the owners of the records been frozen?",
      ],
      answer: "A,C,D",
      title: "Question 87",
    },
    {
      content:
        "Northern Trail Outfitters is partnering with a new business and needs to import 100,000 new records nightly into its Salesforce organization. Which tool should the administrator use to accomplish this task?",
      options: [
        "A. third-party tool from the AppExchange",
        "B. Mass Transfer Records",
        "C. Data Import Wizard",
        "D. Data Loader",
      ],
      answer: "D",
      title: "Question 88",
    },
    {
      content:
        "A new custom object called Parts has been created for Ursa Major Solar.Where should an administrator adjust how the object appears when it is found in the global search?",
      options: [
        "A. Global search, parts, and search layouts",
        "B. Global search, parts, and global search Layouts",
        "C. Object manager, parts, and page layouts",
        "D. Object manager, parts, and search layouts",
      ],
      answer: "D",
      title: "Question 89",
    },
    {
      content:
        "Ursa Major Solar wants to assign feature licenses to user records in Salesforce. Which two feature licenses can be assigned to a user record in Salesforce? Choose 2 answers",
      options: [
        "A. Console User",
        "B. Knowledge User",
        "C. Service Cloud User",
        "D. Opportunity User",
      ],
      answer: "B,C",
      title: "Question 90",
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
      answer: "A,B,E",
      title: "Question 91",
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
      answer: "C",
      title: "Question 92",
    },
    {
      content:
        "Northern Trail Outfitters has a web form for cases.If the case assignment rules inactive, who will be assigned ownership when the case is created?",
      options: [
        "A. A The default case owner will be assigned.",
        "B. The system administrator will be assigned.",
        "C. The case will be assigned to a default case queue.",
        "D. The case will be assigned to the default workflow user.",
      ],
      answer: "C",
      title: "Question 93",
    },
    {
      content:
        "An administrator wants to trigger a follow-up task for the opportunity owner when they close an opportunity as won, and another task after 60 days to check in with the customer. Which two automation tools should the administrator use? Choose 2 answers",
      options: [
        "A. Workflow Rule",
        "B. Field Update",
        "C. Outbound Message",
        "D. Process Builder",
      ],
      answer: "A",
      title: "Question 94",
    },
    {
      content:
        "Northern Trail Outfitters converts support requests submitted through its website with web-to-case. The support team wants an email automatically sent to the customer containing the password reset instructions when the case subject contains the words 'forgot\" and 'password\". What should the administrator configure to meet this requirement?",
      options: [
        "A. Auto-response rule",
        "B. Omni-Channel",
        "C. Email-to-case",
        "D. Escalation rule",
      ],
      answer: "A",
      title: "Question 95",
    },
    {
      content:
        "An administrator wants to create a form in Salesforce for users to fill out when they lose a client. Which automation tool supports creating a wizard to accomplish this goal?",
      options: [
        "A. Outbound Message",
        "B. Process Builder",
        "C. Approval Process",
        "D. Flow Builder",
      ],
      answer: "D",
      title: "Question 96",
    },
    {
      content:
        "Users at Cloud Kicks are reporting different options when updating a custom plcklist on the Opportunity object based on the kind of opportunity.Where should an administrator update the option in the picklist?",
      options: [
        "A. Plcklist value sets",
        "B. Record type",
        "C. Related lookup filters",
        "D. Fields and relationships",
      ],
      answer: "B",
      title: "Question 97",
    },
    {
      content:
        "An administrator at Cloud Kicks wants to deactivate a user who has left the company. What are two reasons that would prevent a user from being deactivated? Choose 2 answers",
      options: [
        "A. The user is assigned in a workflow email alert.",
        "B. The user is the highest role in the role hierarchy.",
        "C. The user is part of a territory hierarchy.",
        "D. The user is in a custom hierarchy field",
      ],
      answer: "A,D",
      title: "Question 98",
    },
    {
      content:
        "Ursa Major Solar uses Opportunity to track sales of solar energy products. The company has two separate sales teams that focus on different energy markets. The services team also wants to use Opportunity to track installation, All three teams will need to use different fields and stages. How should the administrator configure this requirement?",
      options: [
        "A. Create three sales processes. Create three record types and three page layouts.",
        "B. Create one sales process. Create three record types and three page layouts.",
        "C. Create one sales process. Create one record type and three page layout.",
        "D. Create three sales processes. Create three record types and one page layout.",
      ],
      answer: "B",
      title: "Question 99",
    },
    {
      content:
        "Which tool should an administrator use to review recent configuration changes made in their org?",
      options: [
        "A. Field History Tracking",
        "B. Setup Audit Trail",
        "C. Debug Logs",
        "D. Critical Updates",
      ],
      answer: "B",
      title: "Question 100",
    },
    {
      content:
        "Universal Containers wants to ensure that Its org Is secure and has asked an Administrator to configure password requirements for its users. Which three actions are Administrators able to configure? Choose 3 answers",
      options: [
        "A. Set maximum invalid login attempts.",
        "B. Set prohibited password values.",
        "C. Set requirement that passwords must be unique for each user.",
        "D. Set the length of time before passwords expire.",
        "E. Set password complexity requirements.",
      ],
      answer: "A,D,E",
      title: "Question 101",
    },
    {
      content:
        "An administrator needs to store the ID of a record type for later use in a flow. Which kind of variable should the administrator use?",
      options: [
        "A. Text variable",
        "B. ID variable",
        "C. Record variable",
        "D. Boolean variable",
      ],
      answer: "A",
      title: "Question 102",
    },
    {
      content:
        "A new approval process is being adapted by Ursa Major Solar. After an opportunity has been approved, the contract is sent to the customer for signature as the final step in that process.Hon can the administrator implement this functionality?",
      options: [
        "A. Use the Salesforce Autosign flow.",
        "B. Hire a consulting firm to develop a document signing workflow.",
        'C. Check the "Send PDF" box on the approval process setup.',
        "D. Install an app from the AppExchange.",
      ],
      answer: "D",
      title: "Question 103",
    },
  ],
});
