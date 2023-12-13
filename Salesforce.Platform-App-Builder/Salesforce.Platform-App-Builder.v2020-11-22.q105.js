window.testContent = window.testContent || [];
var testId = "Salesforce.Platform-App-Builder";
var testName = "Salesforce.Platform-App-Builder";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "Salesforce.Platform-App-Builder.v2020-11-22.q105",
  content: [
    {
      content: "What is a use case for validation rules?",
      options: [
        "A. Prevent deals with less than a 10% discount from entering an approval process",
        "B. Prevent non-managers from joining a private Chatter Group",
        "C. Restrict partner Lead visibility to the channel sales team",
        "D. Ensure zip/postal codes are entered in the correct format",
      ],
      answer: "D",
      title: "Question 1",
      explanation: "",
    },
    {
      content:
        "An App Builder at UVC would like to prevent users from creating new records on an Account related list by overriding standard buttons. Which two should the App Builder consider before overriding standard buttons?",
      options: [
        "A. Standard buttons can be overridden with a Visualforce page",
        "B. Standard buttons can be changed on lookup dialogs, list views, and search result layouts",
        "C. Standard buttons can be overridden, relocated on the detail page, and relabeled",
        "D. Standard buttons that are not available for overrides can still be hidden on page layouts",
      ],
      answer: "A,D",
      title: "Question 2",
      explanation: "",
    },
    {
      content:
        'The Director of Customer Service wants to know when agents are overwhelmed with high-priority items in the support queue. The Director wants to receive a notification when a new case is open with the status of "New" for more than four business hours. Which automation process could be used to accomplish this? Choose 2 answers',
      options: [
        "A. Lightning Process Builder",
        "B. Scheduled Apex",
        "C. Escalation rules",
        "D. Visual workflow",
      ],
      answer: "A,C",
      title: "Question 3",
      explanation: "",
    },
    {
      content:
        "Sales reps at Universal Containers use Salesforce on their mobile devices. They want a way to odd new contacts quickly and then follow up later to complete the additional Information necessary.\nWhat mobile solution should an App Builder recommend?",
      options: [
        "A. Customize the mobile menu to move Contacts to the top.",
        "B. Use Path and set pre-defined values",
        "C. Add a compact layout to Contacts.",
        "D. Build a global action to create Contacts.",
      ],
      answer: "C",
      title: "Question 4",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants to test code against a subject of production data that is under 5 GB. They want to refresh a sandbox weekly. Which type of sandbox should be used?",
      options: [
        "A. Developer Sandbox",
        "B. Enterprise Sandbox",
        "C. Full Sandbox",
        "D. Partial Copy Sandbox",
        "E. Developer Pro Sandbox",
      ],
      answer: "D",
      title: "Question 5",
      explanation: "",
    },
    {
      content:
        "A manager wants to calculate the number of days an account has been last contacted through mail. Which field should be used to achieve this?",
      options: [
        "A. Number Field",
        "B. Rollup Summary Field",
        "C. Formula Field",
        "D. Date Field",
      ],
      answer: "C",
      title: "Question 6",
      explanation: "",
    },
    {
      content:
        "UV has a customer base where many customers have the same or similar company names.",
      options: [
        "A. Update the account search layout list view filter settings.",
        "B. Update the account search layout search filter fields.",
        "C. Update the account search layout search results columns displayed.",
        "D. Update the account search layout accounts tab columns displayed.",
      ],
      answer: "A",
      title: "Question 7",
      explanation: "",
    },
    {
      content:
        "universal containers has 20 different workflows on the opportunity object. To ensure that updates are processing properly for all field updates uc has the re-evaluete workflow rules after field change checkbox checked. Recently after adding a new workflow, users have reported receiving errors about workflow limits.\nWhat should a app builder look at so address this?",
      options: [
        "A. Talk to a developer about apex code issues",
        "B. Workflows on other objects that are being re triggered",
        "C. Workflows that cause each other to fire back and forth recursively",
        "D. Number of workflows per object limits",
      ],
      answer: "C",
      title: "Question 8",
      explanation: "",
    },
    {
      content:
        "What is a key consideration when using Unmanaged packages? Choose 2 answers",
      options: [
        "A. A namespace is not required to create an Unamanged package",
        "B. The person who created the Unamanged package has no control over the installed components",
        "C. A namespace is required to create an Unmanaged package",
        "D. The person who created the Unmanaged package can change or upgrade installed components",
      ],
      answer: "A,B",
      title: "Question 9",
      explanation: "",
    },
    {
      content:
        "Universal Containers needsto send an Outbound Message to an external system whenrecord has been updated.\nWhat is recommended feature to meet this requirement?",
      options: [
        "A. Visual Workflow",
        "B. Lightning Connect",
        "C. Process Builder",
        "D. Workflow",
      ],
      answer: "D",
      title: "Question 10",
      explanation: "",
    },
    {
      content:
        "SERVICE AGENTS ARE REQUIRED TO CONFIRM A USER IDENTITY BEFORE PROVIDING SUPPORT INFORMATION OVER THE PHONE. WHAT FEATURE CAN AN APP BUILDER USE TO HELP AGENTS MEET THIS REQUIREMENT?",
      options: [
        "A. Case Validation Rules",
        "B. Include Surveys as a Case related list",
        "C. Guided Action Flows on the record page",
        "D. Add Path to the top of the Case layout",
      ],
      answer: "A",
      title: "Question 11",
      explanation: "",
    },
    {
      content:
        "Universal containers is importing 1000 records into Salesforce. They want to avoid any duplicate records from being created during the import. How can these requirements be met?",
      options: [
        "A. After importing all of the custom objects, run a duplicate check report, export the record to a CSV File, and run a mass delete to purge any duplicates.",
        "B. After importing all of the custom objects, review all records created and manually merge or delete and duplicate record",
        'C. When importing the file, select the "Prevent Duplicates" option on the last step of the Import Wizard and import the file.',
        "D. Include a column in the import file that has either record names, Salesforce IDs, or external IDs that can be used to match records.",
      ],
      answer: "D",
      title: "Question 12",
      explanation: "",
    },
    {
      content:
        "What type of field can be used to filter a Report Chart that has been added to a Page Layout?",
      options: [
        "A. Name Field",
        "B. Standard Field",
        "C. Formula Field",
        "D. Matching ID Field",
      ],
      answer: "D",
      title: "Question 13",
      explanation: "",
    },
    {
      content:
        "Universal Container installs an unmanaged package. Which of the following are true: (choose 2)",
      options: [
        "A. Components of unmanaged packages can be edited",
        "B. Unmanaged packages have a namespace prefix",
        "C. Unmanaged packages don't have a version number",
        "D. Tests are executed during deployment",
        "E. Unmanaged packages can be upgraded",
      ],
      answer: "A,D",
      title: "Question 14",
      explanation: "",
    },
    {
      content:
        "User at Universal Containers needs to be able to quickly create a contact record from the Account record's Chatter feed. How should the App Builder enable the functionality?",
      options: [
        'A. By creating a custom "Detail Page" Button on the Contract.',
        'B. By creating a custom "Detail Page" Button on the Account.',
        'C. By creating a custom "Create a Record" Action on the Account.',
        'D. By creating a custom "Create a Record" Action on the Contract',
      ],
      answer: "C",
      title: "Question 15",
      explanation: "",
    },
    {
      content:
        "Universal Containers conduct evaluations of their sales reps using a custom object consisting of numerical scores and executive comments. The company wants to ensure that only the sales reps, and their manager's executive can view the rep's evaluation record but the reps should not be able to view the executive comment field on their review. How can these requirement be met?",
      options: [
        "A. Use a private sharing model granting record access using hierarchy; manage field access with record types and field-level security",
        "B. Use a private sharing model granting record access using hierarchy; manage field access with field-level security",
        "C. Use a private sharing model granting record access using custom setting; manage field access with page layouts and field level security",
        "D. Use a private sharing model granting record access using custom setting; manage field access with record types and page layouts",
      ],
      answer: "B",
      title: "Question 16",
      explanation: "",
    },
    {
      content:
        "A divisional manager wants to add a chart into a page layout Which report format can be used as the source report to accomplish this? Choose 2 answers.",
      options: [
        "A. Tabular format with a chart.",
        "B. Summary format with a chart.",
        "C. Matrix format with a chart.",
        "D. Joined format with a chart.",
      ],
      answer: "B,C",
      title: "Question 17",
      explanation: "",
    },
    {
      content:
        "The VP of marketing wants to broadcast an emailto 10,000 contacts insalesforce on a regular basis, but realizes salesforce'smass email functionality has alimitation on the number of emails that can besent each day",
      options: [
        "A. Download all contacts to a CSV file and use an email client to send the emails",
        "B. Request salesforce increase the number of maximum daily emails",
        "C. Develop apex code and Visualforce pages to sent the emails",
        "D. Research and evaluate products available on appExchange to send mass emails",
      ],
      answer: "D",
      title: "Question 18",
      explanation:
        "Explanation: Tabular, Summary, or Matrix to JoinedThe existing report becomes the first block in the joined report, and the report type becomesthe principle report type for the joined report.Joined report blocks are formatted as summary reports, so if you switch from a summary to ajoined report, your groupings stay the same. If you switch from a matrix to a joined report,groupings are converted the same way as when you switch from a matrix to a summary report.The following items aren't supported in joined reports, and aren't converted:Bucket fieldsCross filtersThe Rows to Display filterhttps://help.salesforce.com/htviewhelpdoc?id=reports_changing_format.htm&siteLang=en_US",
    },
    {
      content:
        "Universal Containers introduces a custom object called Service, which has a lookup to Account. Field enter Service using the Salesforce1 mobile app. Operators create new Service records when viewing Account name which needs to automatically display the current Account. How can this be accomplished?",
      options: [
        "A. Create an action in the Account object and add it to the Account page layout.",
        "B. Create an action in the Service object and add it to the Account page layout",
        "C. Create an action in the Service object and add it to the Service page layout",
        "D. Create an action in the Account object and add it to the Service page layout.",
      ],
      answer: "A",
      title: "Question 19",
      explanation: "",
    },
    {
      content:
        "A custom object has a public reads only sharing settings that does not grant access using hierarchies. A dynamic sharing rule provides write access to the object to the global marketing public group if the record is marked as global. A user creates a new record and marks it as global. Who will have write access to the record?",
      options: [
        "A. The global marketing public group, the record owner, and anyone above the owner in the role hierarchy.",
        "B. The record owner and anyone above the owner in the role hierarchy",
        "C. The global marketing public group and anyone above the owner in the role hierarchy",
        "D. The record owner and the global marketing public group.",
      ],
      answer: "D",
      title: "Question 20",
      explanation: "",
    },
    {
      content:
        "Universal Containers has two teams: Sales and Services. Both teams interact with the same records. Sales users use ten fields on the Account record. Services users use three of the same fields as the Sales team, but also have five of their own, which the sales team does not use. What is the minimum configuration necessary to meet this requirement?",
      options: [
        "A. One profile, two record types, one page layout",
        "B. Two profiles, two record types, two page layouts",
        "C. One profile, one record type, one page layout.",
        "D. Two profiles, one record type, two page layouts",
      ],
      answer: "B",
      title: "Question 21",
      explanation:
        "Explanation- Record types allow you to offer different business processes, picklist values, and page layouts to different users based on their profiles.",
    },
    {
      content:
        "Representatives at Universal Con use salesforce to record information for new Leads. When new prospects are added, an outbound message is sent to SAP with the Lead's info.",
      options: [
        "A. Use Visual Workflow",
        "B. Create a process using lightning process builder",
        "C. Design an approval process",
        "D. Create a workflow rule",
      ],
      answer: "D",
      title: "Question 22",
      explanation: "",
    },
    {
      content:
        "At Universal Containers, each admin and developer use a separate developer pro sandbox. Configuration and code are then migrated to a partial data sandbox for combination and initial testing. Once approved the configuration and code are then migrated to a full sandbox for final toad and regression testing before going to production.\nWhen should the full sandbox be refreshed?",
      options: [
        "A. After each major release to production.",
        "B. After a new user is added to production.",
        "C. After user acceptance testing is complete.",
        "D. After each push from the partial data sandbox.",
      ],
      answer: "D",
      title: "Question 23",
      explanation: "",
    },
    {
      content:
        "UVC needs to update a field on an Account when an Opportunity Stage is changed to Closed-Lost. Which two should be used to accomplish this requirement? Choose two answers",
      options: [
        "A. Assignment Rule",
        "B. Process Builder",
        "C. Approval Process",
        "D. Workflow Rule",
      ],
      answer: "B,D",
      title: "Question 24",
      explanation: "",
    },
    {
      content:
        "At Universal Containers, the Account object has a Master-Detail relationship with an Invoice custom object.\nThe App Builder would like to change to a lookup field, but is not able to do so. What could be causing this?",
      options: [
        "A. The Account record includes Invoice roll-up summary fields.",
        "B. The invoice must have at least one Master-Detail field for reporting.",
        "C. The Invoice records have existing values in the Account.",
        "D. The Account is included in the workflow on the Invoice object.",
      ],
      answer: "A",
      title: "Question 25",
      explanation: "",
    },
    {
      content:
        "UVC has deployed custom tabs to Production via change sets, without including the profiles settings. What is true about the visibility of custom tabs in Enterprise Edition?",
      options: [
        "A. Custom tabs are default on for all the users",
        "B. Custom tabs are default off for all the users.",
        "C. Custom tabs are hidden for all users",
        "D. Custom tabs are not deployed",
      ],
      answer: "C",
      title: "Question 26",
      explanation: "",
    },
    {
      content:
        "Universal containers wants to provide a different view for its users when they access an Account record in Salesforce1 instead of the standard web version. How can this be accomplished? Choose 2 answers",
      options: [
        "A. By adding a mobile layout and assigning it to a profile.",
        "B. By adding actions in the Salesforce1 action bar section.",
        "C. By adding quick actions in the publisher section.",
        "D. By adding Visualforce page to the mobile cards section",
      ],
      answer: "A,D",
      title: "Question 27",
      explanation: "",
    },
    {
      content:
        "Universal containers require different fields to be filled out at each stage of the opportunity sales process what configuration steps san an app builder use to meet this requirement?",
      options: [
        "A. Define record types and page layouts for each stage",
        "B. Create a process builder to prompt the user for field information",
        "C. Set page layout required fields based on the current stage",
        "D. Add the path component to the lightning record page",
      ],
      answer: "A",
      title: "Question 28",
      explanation: "",
    },
    {
      content:
        "What option is available to an App Builder when defining an object-specific Create Record custom action?\nChoose 2 answers",
      options: [
        "A. Redirecting the end user to the detail page of the target object",
        "B. Allowing the end user to choose the record type",
        "C. Specifying the fields and layout of the action.",
        "D. Pre-Defining field values on the target object.",
      ],
      answer: "B,C",
      title: "Question 29",
      explanation: "",
    },
    {
      content: "What is a use case for approval processes? Choose 2 answers.",
      options: [
        "A. Ensure an opportunity that has at least one product added.",
        "B. Approve expense reports automatically when less than $50.",
        "C. Update the PTO record field with the user's manager.",
        "D. Require the CFO to review the salary range for all job offers.",
      ],
      answer: "B,D",
      title: "Question 30",
      explanation: "",
    },
    {
      content:
        "A custom field contains a feedback score which is on a scale of one to five. End users would like a visual indicator of one to five stars based on the number found in the feedback score custom field. How can this visual indicator be displayed?",
      options: [
        "A. Use a custom number field.",
        "B. Use a custom formula field.",
        "C. Use a custom text field",
        "D. Use a custom image field.",
      ],
      answer: "B",
      title: "Question 31",
      explanation: "",
    },
    {
      content:
        "Universal containers require different fields to be out at each of the opportunity sales process. What configuration steps can an app builder use to meet this requirement?",
      options: [
        "A. Create a process builder to prompt the user for filed information",
        "B. Define record type and page payouts for each stage",
        "C. Add the path component to the lightning record type",
        "D. Set page layout required fields based on the current stage",
      ],
      answer: "A",
      title: "Question 32",
      explanation: "",
    },
    {
      content:
        "Universal Containers sales reps can modify fields on an opportunity until it is closed. Only the sales operation team can modify the post closed follow-up dates and post closed follow-up comments fields. How can these requirements be met?",
      options: [
        "A. Use field-level security on page layouts to restrict editing fields",
        "B. Use record types with field sets and restrict editing fields using field-level security.",
        "C. Use multiple record types, page layouts and profiles.",
        "D. Use field level security to mark fields as read only on the sales profile",
      ],
      answer: "A",
      title: "Question 33",
      explanation: "",
    },
    {
      content:
        "A custom button can be used for performing all of the following actions, except: Choose 1 answer.",
      options: [
        "A. Invoke a Javascript",
        "B. Invoke an Apex Trigger",
        "C. Invoke a webpage URL",
        "D. Invoke a visualforce page in your Salesforce org",
      ],
      answer: "B",
      title: "Question 34",
      explanation: "",
    },
    {
      content: "How many charts can you embed into the account page layout?",
      options: ["A. 4", "B. 2", "C. 1", "D. 3"],
      answer: "B",
      title: "Question 35",
      explanation: "",
    },
    {
      content:
        "The VP of Marketing wants to broadcast an email to 10,000 contacts in Salesforce on a regular basis, but realizes Salesforce's mass email functionality has a limitation on the number of emails that can be sent each day.",
      options: [
        "A. Develop Apex code and Visualforce pages to send the emails.",
        "B. Download all contacts to a CSV file and use an email client to send the mails",
        "C. Research and evaluate products available on AppExchange to send mass emails",
        "D. Request Salesforce increase the number of maximum daily mails.",
      ],
      answer: "C",
      title: "Question 36",
      explanation:
        "Explanation\n Check out the following link: MassMailer App Link on\n AppExchangehttps://appexchange.salesforce.com/listingDetail?listingId=a0N30000005uxj5EAA",
    },
    {
      content:
        "Which statement is true about converting a lead? Choose 3 answers",
      options: [
        "A. Users can convert leads that are associated with an active approval process.",
        "B. The system automatically maps standard lead fields to standard account, contact, and opportunity fields.",
        "C. Multi-select picklist values on lead records overwrite values on the contact's corresponding field.",
        "D. Administrators may choose whether to enforce validation rules & triggers",
        'E. The lead\'s most recent campaign record is automatically applied to the "PRIMARY campaign source" field on the opportunity',
      ],
      answer: "B,D,E",
      title: "Question 37",
      explanation: "",
    },
    {
      content:
        "Universal Containers provide access to Salesforce for their sales, service and marketing teams. Management wants to ensure that when user login, their home tab provides access to links and documentation that are specifically relevant to their job function. How can this requirement be met?",
      options: [
        "A. Create separate home page custom components and layouts; assign to user by profile.",
        "B. Create separate home page custom components and layouts; assign to user by role.",
        "C. Expose specific elements within a home page custom component determined by profile.",
        "D. Expose specific elements within a home page custom component determined by role.",
      ],
      answer: "A",
      title: "Question 38",
      explanation: "",
    },
    {
      content:
        "What are two reason to create an unmanaged package? Choose 2 answers",
      options: [
        "A. Distributing upgradeable components to other Salesforce org",
        "B. Publishing an application for sale on the AppExchange",
        "C. Distributing open-source projects on the AppExchange.",
        "D. Deploying from a Developer Edition environment",
      ],
      answer: "A,C",
      title: "Question 39",
      explanation: "",
    },
    {
      content:
        "In order to create an App Launcher component in Lightning what must an admin do?",
      options: [
        "A. Navigate to Setup-Customize-User Interface to enable the component for the Lightning App Builder.",
        "B. Join the pilot Lightning App Builder team.",
        "C. Contact Salesforce to have the component activated for the Lightning App Builder.",
        "D. Purchase a license for the Lightning App Builder.",
      ],
      answer: "C",
      title: "Question 40",
      explanation: "",
    },
    {
      content:
        "Universal Containers has a custom assessment object used by three divisions. Each division wants to track different information on the assessments, including different values for the status picklist. Division managers do not want their teams to be able to create another division's assessment.\nHow can this be accomplished?",
      options: [
        "A. Create a separate page layout for each division and assign them profiles. Use the profile setting to configure each division's custom field list and picklist values for assessments.",
        "B. Create three page layouts to determine the fields and picklist values for each user based on the division indicated on their user record. Use field-level security to restrict access to each division's fields.",
        "C. Create additional custom assessment objects, one for each division, to track their assessments so information can be tracked separately. Use profiles to restrict access to the three custom objects.",
        "D. Create separate assessment record types for each division and use them to limit picklist values. Create separate page layouts for each record type and use profiles to restrict record type access.",
      ],
      answer: "D",
      title: "Question 41",
      explanation: "",
    },
    {
      content:
        'UVC uses a custom object to track site visits, When the status of a site visit ischanged from "in process " to\n"On hold " the business wants the site visit owner tobe automatically assigned to an "On hold " Queue. Which capability can be used toaccomplish this?',
      options: [
        "A. Apex Trigger",
        "B. Action",
        "C. Visual workflow",
        "D. Assignment rule",
      ],
      answer: "D",
      title: "Question 42",
      explanation: "",
    },
    {
      content:
        "What is a true statement regarding roll-up summary fields? Choose 2 answers",
      options: [
        "A. Multi-select picklist fields can be used in the field column of roll-up summary filters.",
        "B. Roll-up summary fields can only be created on the master of a master-detail relationship.",
        "C. The roll-up summary field inherits the field - level security of the child object",
        "D. Changes to the value of a roll-up summary field column of roll-up summary filters.",
      ],
      answer: "B,C",
      title: "Question 43",
      explanation: "",
    },
    {
      content:
        "UVC wants to show different picklist values to different groups of users in a custom picklist field. What should be configured?",
      options: [
        "A. Record Types",
        "B. Page Layout",
        "C. Field-level security",
        "D. Permission sets",
      ],
      answer: "A",
      title: "Question 44",
      explanation: "",
    },
    {
      content:
        "At Universal Containers, the VP of Service has requested a visual indicator flag on each case, based on the case priority. High-priority cases should be flagged red, medium-priority should be flagged yellow, and low-priority cases should be flagged green. Which formula would accomplish this requirement? Choose 2 answers",
      options: [
        'A. IMAGE( IF(ISPICKVAL(Priority, "Low"), "img/samples/flag_green.gif", IF(ISPICKVAL(Priority,\n         "Medium"), "img/samples/flag_yellow.gif", IF(ISPICKVAL(Priority, "High"),\n         "img/samples/flag_red.gif"))), "Priority Flag")',
        'B. IMAGE(CASE( Priority, "Low", "img/samples/flag_green.gif", "Medium",\n         "img/samples/flag_yellow.gif", "High", "img/samples/flag_red.gif", "Priority Flag")',
        'C. IF(ISPICKVAL(Priority, "Low"), "img/samples/flag_green.gif", IF(ISPICKVAL(Priority, "Medium"),\n         "img/samples/flag_yellow.gif", IF(ISPICKVAL(Priority, "High"), "img/samples/flag_red.gif",\n         "/s.gif")))',
        'D. CASE( Priority, "Low", "img/samples/flag_green.gif", "Medium", "img/samples/flag_yellow.gif",\n         "High", "img/samples/flag_red.gif", "/s.gif")',
      ],
      answer: "A,B",
      title: "Question 45",
      explanation: "",
    },
    {
      content: "What is a section of the lightning app builder tool? Select 3",
      options: [
        "A. Components",
        "B. Mobile card",
        "C. Canvas",
        "D. Selected publisher actions",
        "E. Mini page layout",
      ],
      answer: "A,C,D",
      title: "Question 46",
      explanation: "",
    },
    {
      content: "Which object can be member of a campaign? (Choose 2)",
      options: ["A. Contact", "B. Account", "C. Opportunity", "D. Lead"],
      answer: "A,D",
      title: "Question 47",
      explanation: "",
    },
    {
      content:
        "UC would like to embed a chart of all related opportunities, by stage, on the account details page. Which type of report should use",
      options: [
        "A. A summary report on the account object",
        "B. A tabular report on the opportunity object",
        "C. A tabular report on the account object",
        "D. A summary report on the opportunity object",
      ],
      answer: "D",
      title: "Question 48",
      explanation: "",
    },
    {
      content:
        "A business user wants a quick way to edit a record's status and enter a custom due date field from the record's feed in Salesforce1 Mobile App. What could be used to accomplish this?",
      options: [
        "A. Custom URL formula field",
        "B. Custom Button",
        "C. Custom quick access link",
        "D. Custom Action",
      ],
      answer: "D",
      title: "Question 49",
      explanation: "",
    },
    {
      content:
        "An app builder wants to deploy a new version of an auto launched flow production in an active state so that the new functionality is immediately available to users.\nWhat should the app builder take into consideration when planning the deployment?",
      options: [
        "A. Include the profile that access the flow in the deployment",
        "B. Include the process builder calling the flow in the deployment",
        "C. Verify there is an apex test that provides test coverage for the flow",
        "D. Verify there is a static resource that provides test coverage for the flow",
      ],
      answer: "C",
      title: "Question 50",
      explanation: "",
    },
    {
      content: "What is the capability of schema Builder? Choose 2 Answers",
      options: [
        "A. Creating a new record type",
        "B. Editing custom settings",
        "C. Viewing page layout in a new window",
        "D. Showing selected objects on the page.",
      ],
      answer: "C,D",
      title: "Question 51",
      explanation: "",
    },
    {
      content:
        "Universal Containers is setting up Salesforce for the first time. Management wants the sales and marketing have different navigation menus in the Salesforce 1 mobile app. Which option is available for an App Builder to satisfy this requirement?",
      options: [
        "A. Create roles for sales and marketing and assign a custom home page layout for each profile",
        "B. Create mobile navigation menus for both sales and marketing profile",
        "C. Create mobile navigation menus for both sales and marketing profile ",
        "D. Create public group for Sales and Marketing and create mobile navigation menus for each group",
      ],
      answer: "C",
      title: "Question 52",
      explanation: "",
    },
    {
      content:
        "The VP of Sales has requested that Account Site information should be visible onall Opportunity records.\nWhat is the recommended solution to meet this requirement?",
      options: [
        "A. Process Builder",
        "B. Cross-Object Formula Field",
        "C. Roll-Up Summary Field",
        "D. Workflow Rule",
      ],
      answer: "B",
      title: "Question 53",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants to rollout new product bundles with several pricing options. Pricing options include product-price bundles, account specific pricing and more. Which product satisfies the needs?",
      options: [
        "A. Formula fields on Opportunity/Opportunity Product",
        "B. Custom AppExchange-app for product-pricing",
        "C. Workflow on Opportunity/Opportunity Product",
        "D. Lightning process builder",
      ],
      answer: "D",
      title: "Question 54",
      explanation: "",
    },
    {
      content: "Which type of field cannot be universally required?",
      options: ["A. Summary", "B. Text", "C. Lookup", "D. Email"],
      answer: "A,C",
      title: "Question 55",
      explanation: "",
    },
    {
      content:
        "Universal Containers (UC) uses a custom object to track expense reports. UC wants to automatically post updates on a record's feed whenever an expense report has been approved Which social feature can be used to accomplish this?",
      options: [
        "A. Auto-response rule",
        "B. Approval process",
        "C. Feed tracking",
        "D. Feed Quick action",
      ],
      answer: "C",
      title: "Question 56",
      explanation: "",
    },
    {
      content:
        "Which statement is true about field update actions from workflow rules and approval processes? Choose 2 answers",
      options: [
        'A. Field update with "re-evaluate workflow rules" selected can cause a recursive loop if the updated field is included in a workflow.',
        "B. Field update are not available on currency field if the organization uses multi-currency.",
        "C. Field updates to records based on workflow rules and approval processes do not trigger validation rules",
        "D. Field updates are tracked in the history related list of a record regardless of whether or not History tracking is set for those fields.",
      ],
      answer: "A,C",
      title: "Question 57",
      explanation:
        "Explanation\n https://help.salesforce.com/apex/HTViewHelpDoc?id=workflow_field_update_considerations.htm&language=en",
    },
    {
      content:
        "UVC wants to automate a business process using workflow. They are aware that workflow rules may cause recursive behavior, and as a result certain actions will only cause workflow rules that didn't fire previously to be retriggered. Which workflow action might cause this behavior?",
      options: [
        'A. Workflow Outbound messages with the "Protected Component" field selected',
        'B. Workflow Field Updates with the "Re-evaluate Workflow Rules After Field Changes" field selected',
        "C. Workflow Emails containing hard coded links with Salesforce IDs referencing specific workflow rules",
        'D. Workflow Tasks where the "Due Date" field is set to "Rule Trigger Date" minus X days',
      ],
      answer: "B",
      title: "Question 58",
      explanation: "",
    },
    {
      content:
        "A company wants to invite customers to chatter, what options can a customerhave?",
      options: [
        "A. Add them on FB,Twitter and Instagram",
        "B. @mention other members of the group",
        "C. Invite other members to groups they are a part of",
        "D. Request to join public groups",
      ],
      answer: "C",
      title: "Question 59",
      explanation: "",
    },
    {
      content:
        "Universal Insurance would like to highlight on a report claims that have been open for more than 30 days.\nWhat feature could be used for this? Choose 1 answer.",
      options: [
        "A. Report Highlighting",
        "B. Bucket Highlighting",
        "C. Conditional Highlighting",
        "D. Field Highlighting",
      ],
      answer: "C",
      title: "Question 60",
      explanation: "",
    },
    {
      content:
        "Universal Containers generates leads from three different sources: web, trade shows, and partners. Some of the information collected is applicable to all sources, there is also information that is unique to each type of lead.\nWhat should an app builder configure to meet these requirements?",
      options: [
        "A. Create three lead record types each with its own page layout containing the relevant fields",
        "B. Create three sections on the lead layout and instruct users to collapse the non-relevant fields",
        "C. Create a partner community and a record type for web and trade show leads",
        "D. Create custom page payouts for each type of lead only containing the relevant fields",
      ],
      answer: "A",
      title: "Question 61",
      explanation: "",
    },
    {
      content:
        "Which use case can be accomplished using a custom link?(Select 3)",
      options: [
        "A. To create a custom visual flow",
        "B. To a process to update current record",
        "C. Navigate to Apex trigger",
        "D. To create a record page",
        "E. To external system using data of salesforce",
      ],
      answer: "B,D,E",
      title: "Question 62",
      explanation: "",
    },
    {
      content:
        "Sales managers want to be automatically notified any time there is a change to an opportunity close date and want these changes to be tracked on the opportunity. Which two configurations should an app builder recommend? Choose 2 answers",
      options: [
        "A. Create an opportunity outbound message",
        "B. Activate historical trending for opportunities",
        "C. Enable feed tracking on opportunities",
        "D. Use process builder on opportunities and a chatter post action",
      ],
      answer: "A",
      title: "Question 63",
      explanation: "",
    },
    {
      content:
        "UVC uses a custom object to track expense reports. They would like to automatically post updates in a record's feed whenever an expense report has been approved. Which social feature can be used to accomplish this?",
      options: [
        "A. Feed Tracking",
        "B. Approval Process",
        "C. Feed Quick Action",
        "D. Auto-response rule",
      ],
      answer: "A",
      title: "Question 64",
      explanation: "",
    },
    {
      content:
        "Which statement is true for embedding a Visualforce page in a page Layout. Choose 2 Answers",
      options: [
        "A. Visualforce Pages on a page layout have attributes for width and height",
        "B. Visualforce Pages on a field set have attributes for width and height.",
        "C. Visualforce Pages can be placed anywhere in the page layout.",
        "D. Visualforce Pages can only be place in the Visualforce section in a page layout.",
      ],
      answer: "A,C",
      title: "Question 65",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants to build a recruiting app that allows for multiple positions to appear on custom objects websites and postings. UC requires a report that shows the related custom objects of postings. Which two items should an app builder configure to implement this?",
      options: [
        "A. Create two new custom report type",
        "B. Utilize the standard report type",
        "C. Configure a postings object with lookup field to both positions and websites",
        "D. Configure a postings object with master detail field to both positions and websites",
      ],
      answer: "A",
      title: "Question 66",
      explanation: "",
    },
    {
      content:
        "At Universal containers, all US Sales reps should be able to view the US Team dashboard, however, only the US sales directors should be able to see the data in the component and view its source report. How can an app builder ensure the proper access is granted?",
      options: [
        "A. Share the dashboard folder with roles and subordinates of the US Sales Director and share the report folder with the role of US Sales Director",
        "B. Make the dashboard dynamic and give US Sales Reps the view my teams dashboard permission",
        "C. Make the US Sales Director the running user and share the dashboard folder with the role US Sales Rep",
        "D. Share the dashboard with the public group US Sales Reps and share the dashboard source reports folder with the US Sales Director profile",
      ],
      answer: "D",
      title: "Question 67",
      explanation: "",
    },
    {
      content: "In order to delete a record smth needs to be approved.",
      options: [
        "A. Option 4",
        "B. Approval with Workflow",
        "C. Approval with Apex Trigger",
        "D. Option 3",
      ],
      answer: "C",
      title: "Question 68",
      explanation: "",
    },
    {
      content:
        "Universal Containers needs to update a field on an Account when an Opportunity Stage is changed to Closed Lost. What tools can we use to accomplish this requirement? (Choose 2)",
      options: [
        "A. Workflow Rule",
        "B. Assignment Rule",
        "C. Lightning Process Builder",
        "D. Approval Process",
      ],
      answer: "A,C",
      title: "Question 69",
      explanation: "",
    },
    {
      content:
        "Which two features can be used to allow users to access flows. Choose 2 answers?",
      options: [
        "A. Flow launcher",
        "B. Quick action",
        "C. Invoked by a process",
        "D. Custom button",
      ],
      answer: "B,D",
      title: "Question 70",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants to standardize their business logic. They want to ensure that the workflow order is guaranteed to be the same each time. Which feature can be used to accomplish this? Choose 2 answers.",
      options: [
        "A. Chatter Actions",
        "B. Visual Workflow",
        "C. Workflow",
        "D. Lightning Process Builder",
      ],
      answer: "B,D",
      title: "Question 71",
      explanation: "",
    },
    {
      content:
        "The Director of customer service wants to receive a notification when a case stays in the '' new'' status for more than four business hours.\nWhich two automation processes should be used to accomplish this?\nChoose 2 answers",
      options: [
        "A. Scheduled Apex",
        "B. Process Builder",
        "C. Flow Builder",
        "D. Escalation rules",
      ],
      answer: "B,D",
      title: "Question 72",
      explanation: "",
    },
    {
      content:
        "Which attribute must field have to be used in external modeling?",
      options: [
        "A. External ID",
        "B. None of the above",
        "C. Unique",
        "D. Required",
      ],
      answer: "A",
      title: "Question 73",
      explanation: "",
    },
    {
      content:
        "Universal containers has a custom object that has a N:M relationship with opportunityLineItem carrying price and amount information. In order to compute total amounts and total prices per Opportunity using Rollup summary fields, what field type will you use.",
      options: [
        "A. Crossobject",
        "B. Lookup",
        "C. Master-Detail",
        "D. Junction",
      ],
      answer: "C",
      title: "Question 74",
      explanation: "",
    },
    {
      content:
        "A new custom object is being created with a private sharing setting. The business wants to share individual records with specific people or group of people on a case by case basis. What options does the business user have to manually share individual records? Choose 3 answers",
      options: [
        "A. Roles",
        "B. Public Groups",
        "C. Users",
        "D. Permission Sets",
        "E. Profiles",
      ],
      answer: "A,B,C",
      title: "Question 75",
      explanation: "",
    },
    {
      content:
        "The marketing team at UVC has a list of 400 leads it wants to upload to Salesforce. The team need to avoid creating duplicate records. Which two actions should be taken to meet this requirement? Choose 2 answers",
      options: [
        "A. Upload the lead list using the import wizard and select a Matching type to prevent duplicate lead creation.",
        "B. Utilize a Lead Matching Rule and corresponding Duplicate Rule to block newly created duplicate leads.",
        "C. Enable Duplicate Matching in the Data Management section in Setup and activate the Lead-to_Lead scenario.",
        "D. Use Data Loader's update function to import lead and match to existing records based on e-mail address.",
      ],
      answer: "A,B",
      title: "Question 76",
      explanation: "",
    },
    {
      content:
        "Universal Containers has separated business requirements for consumer and Business Opportunities. The sales team work with both types of Opportunities. The app builder created two record types on the Opportunity Object. Which action can now be performed? Choose 2 answers",
      options: [
        "A. Create unique Opportunity stages by sales process.",
        "B. Prevent access to secure data fields by sales process.",
        "C. Enable field validation by sales process.",
        "D. Specify a different page layout by sales process.",
      ],
      answer: "C,D",
      title: "Question 77",
      explanation: "",
    },
    {
      content:
        "Which capability allows an app builder to grant object-level access? Choose 2 answers",
      options: [
        "A. Assigning a user a Profile that allows Read access to an object",
        "B. Assigning a user a Permission Set that allows for Read and Edit access to an object",
        "C. Assigning a user a Role that allows Read access to an object.",
        "D. Assigning a user a Public Group that allows for Read and Edit access to an object",
      ],
      answer: "A,B",
      title: "Question 78",
      explanation: "",
    },
    {
      content:
        "Sales and marketing users have similar roles, and use similar record types. However sales uses 3 different fields and marketing has 5, how do you set up processes the most efficiently (something like that)",
      options: [
        "A. 2 page layouts, 2 record types, 2 profiles",
        "B. 1 page layout, 2 record types, 2 profiles",
        "C. 1 page layout, 1 record type, 1 profile",
        "D. 2 page layouts, 1 record type, 2 profiles",
      ],
      answer: "D",
      title: "Question 79",
      explanation: "",
    },
    {
      content:
        "Which statement is true when using record types to control picklist value. (Select 2)",
      options: [
        "A. If a picklist value is removed from the master, then it is no longer available when records assigned to that value are unchanged",
        "B. If values are added to the Opportunity Stage, Case Status, and Lead Status fields, then the values must be manually adjusted for each record type",
        "C. If a record type is renamed, then the list of values included in that record type are also changed to newly renamed record types",
        "D. If a picklist value is added to the master picklist, then the new value must be manually included in the appropriate record types",
      ],
      answer: "A,D",
      title: "Question 80",
      explanation: "",
    },
    {
      content:
        "The App Builder at Universal Containers has been asked to ensure that the Amount field is populated when the stage is set to Closed Won. What can be used to meet this requirement?",
      options: [
        "A. Lightning Process Builder",
        "B. Workflow",
        "C. Approval Process",
        "D. Validation Rule",
      ],
      answer: "B",
      title: "Question 81",
      explanation: "",
    },
    {
      content:
        "The app builder needs to change the data types of new custom fields. The app builder is not able to delete and recreate any of the fields, nor modify any apex code. Which data type change will require the app builder to perform the additional steps in order to retain existing functionalities?",
      options: [
        "A. Changing the data type of a field used in an apex class from number to text.",
        "B. Changing the data type of a field used in a report from a text to an encrypted field",
        "C. Changing the data type of a field used as an external id from number to text.",
        "D. Changing the data type of a field used in lead conversion from number to text",
      ],
      answer: "C",
      title: "Question 82",
      explanation:
        "Explanation\n If you change the data type of any custom field that is used for lead conversion, that lead field mapping will be deleted. If you change the data type of a custom field that is set as an external ID, choosing a data type other than text, number, or email will cause the field to no longer act as an external ID.\n The option to change the data type of a custom field is not available for all data types. For example, existing custom fields cannot be converted into encrypted fields nor can encrypted fields be converted into another data type.\n https://help.salesforce.com/apex/HTViewHelpDoc?id=notes_on_changing_custom_field_types.\n htm&language=en",
    },
    {
      content: "Need to change ownership when field of custom object changed.",
      options: [
        "A. Visual Workflow",
        "B. Assignment Rule",
        "C. Apex trigger",
        "D. Validation Rule",
      ],
      answer: "B",
      title: "Question 83",
      explanation: "",
    },
    {
      content:
        "At UVC, multiple departments utilize the Case object for different purposes. Some users submit cases while other users provide customer support with case records. What is the minimum required configuration for an App Builder to enable different users to see different fields, based on the case type?",
      options: [
        "A. Record Types, Page Layouts, Permission Sets and Profiles",
        "B. Record Types, Page Layouts, Case Teams and Profiles",
        "C. Record Types, Page Layouts, Field Sets and Profiles",
        "D. Record Types, Page Layouts, Support Process and Profiles",
      ],
      answer: "C",
      title: "Question 84",
      explanation: "",
    },
    {
      content:
        "Which rule can be configured for the Opportunity object? Choose 2 answers",
      options: [
        "A. Assignment Rule",
        "B. Escalation Rule",
        "C. Validation Rule",
        "D. Workflow Rule",
      ],
      answer: "C,D",
      title: "Question 85",
      explanation: "",
    },
    {
      content:
        "Sales representatives want to capture custom Feedback record details related to each Account. The sales reps want to accomplish this with minimal clicks on the Salesforce1 mobile application. What is the recommended solution to meet this requirement? Choose 2 answers.",
      options: [
        "A. Create predefined values for most of the fields.",
        "B. Create a global action on Account.",
        "C. Create a feedback object as a parent of Account",
        "D. Create an object-specific action on Account",
      ],
      answer: "A,D",
      title: "Question 86",
      explanation:
        "Explanation\n https://developer.salesforce.com/docs/atlas.enus.salesforce1appadmin.meta/salesforce1appadmin/s1_admin_guid",
    },
    {
      content:
        "The VP of Sales at Universal Containers has requested that Sales reps be given access to view all Accounts in Salesforce. However, they've also requested that sales reps only be allowed to create new Opportunities on Accounts they own. How can this requirement be met?",
      options: [
        "A. Set the Organization-Wide Defaults sharing on Opportunities to Private and recalculate sharing.",
        "B. Create an Opportunity Validation Rule that compares the Opportunity and Account Owners",
        "C. Create a new Opportunity Quick Action that validates Account ownership.",
        "D. Set the Organization-Wide Defaults sharing on Opportunities to Controlled by Parent.",
      ],
      answer: "D",
      title: "Question 87",
      explanation: "",
    },
    {
      content:
        "UVC needs to send an outbound message to an external system when a record has been updated. What is the recommended feature to meet this requirement?",
      options: [
        "A. Visual Workflow",
        "B. Process Builder",
        "C. Workflow",
        "D. Lightning Component",
      ],
      answer: "C",
      title: "Question 88",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants to deliver purchased containers to remote construction address. In these cases the customers will supply UC with the coordinates to the location.\nWhat type of field should the app builder use to capture this information?",
      options: ["A. Text", "B. Number", "C. External Lookup", "D. Goelocation"],
      answer: "C",
      title: "Question 89",
      explanation: "",
    },
    {
      content:
        "What is a section of the Lightning App Builder Tool? Choose 3 Answers",
      options: [
        "A. Canvas",
        "B. Components",
        "C. Mini Page Layout",
        "D. Selected Publisher Actions",
        "E. Mobile Cards",
      ],
      answer: "A,B,D",
      title: "Question 90",
      explanation: "",
    },
    {
      content:
        "The Director of Marketing has asked the AppBuilder to create a formula fieldthat tracks how many days have elapsed since a contact was sent a marketingcommunication. The director is only interested in whole units.",
      options: ["A. Datevalue()", "B. Now()", "C. Date()", "D. Today()"],
      answer: "D",
      title: "Question 91",
      explanation: "",
    },
    {
      content: "Where custom buttons can be placed? (Choose 3)",
      options: [
        "A. Record page",
        "B. Personal account",
        "C. Related object",
        "D. Web to case",
      ],
      answer: "A,B,C",
      title: "Question 92",
      explanation: "",
    },
    {
      content:
        "universal containers is migrating its sales operations from a legacy system that was used. opportunities need to be imported with the proper country currency. Which two steps should an app builder configure to meet these requirements ?\nChoose 2 answers.",
      options: [
        "A. Include the currency ISO code in all currency fields in the import file.",
        "B. Use Data Loader to import the records.",
        "C. Use import the currency ISO Code Column in the import file.",
        "D. Include the currency ISO Code Column in the import file.",
        "E. Use Import Wizard to import the records.",
      ],
      answer: "C,D",
      title: "Question 93",
      explanation: "",
    },
    {
      content:
        "Universal container has a custom object for shipping information. They have to ship to both businesses and consumers. They need to show additional values in the custom field called insurance type for business shipping records. How can this be set up?",
      options: [
        "A. Use Record type with single page layout.",
        "B. Use record types with multiple page layout",
        "C. Create multiple picklist fields on the object",
        "D. Create a multi-select pick-list field.",
      ],
      answer: "D",
      title: "Question 94",
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
      title: "Question 95",
      explanation: "",
    },
    {
      content:
        "Universal Containers would like to embed a chart of all related Opportunities, by stage, on the Account detail page. Which type of report should the App Builder create to add to the Account page layout?",
      options: [
        "A. A tabular report on the Account object.",
        "B. A tabular report on the Opportunity object.",
        "C. A summary report on the Account object.",
        "D. A summary report on the Opportunity object.",
      ],
      answer: "D",
      title: "Question 96",
      explanation: "",
    },
    {
      content:
        "Universal Containers has a junction object called Invoices with a primary Master-Detail relationship with Accounts and a secondary Master-Detail relationship with Contacts. The app builder has a requirement to change the primary Master-Detail relationship to Lookup.\nWhat happens to the Master-Detail relationship with Contacts?",
      options: [
        "A. The Contacts Master-Detail values are cleared from invoices.",
        "B. The Contacts Master-Detail also converts to Lookup.",
        "C. The Contacts Master-Detail field is deleted from the object.",
        "D. The Contacts Master-Detail becomes the primary.",
      ],
      answer: "D",
      title: "Question 97",
      explanation:
        "Explanation - The second master-detail relationship you create on your junction object becomes the secondary relationship. If you delete the primary master-detail relationship or convert it to a lookup relationship, the secondary master object becomes primary.\n https://help.salesforce.com/HTViewHelpDoc?id=relationships_considerations.htm&language=en_US",
    },
    {
      content:
        "The organization wide defaults for a custom object is set to private. The Supervisor profile grants view access to the same object. A user with the Supervisor profile is also listed as the Manager on the user detail records for access. However, the supervisor still cannot view records owned by the subordinate. What is preventing the Supervisor from viewing records owned by the subordinate? Choose 2 answers",
      options: [
        "A. The Supervisor requires a permission set in order to view the subordinate's record",
        "B. Organization wide settings for the custom object grant access to other users with the same role",
        "C. The Supervisor's role is not above the subordinate's role in hierarchy",
        "D. Organization wide settings for the custom object do not grant access using hierarchy",
      ],
      answer: "C,D",
      title: "Question 98",
      explanation: "",
    },
    {
      content:
        "The CRM Manager at Universal Containers has requested that a custom text field be converted to a picklist in order to promote better data hygiene. What needs to be considered before changing the field type? Choose 2 answers",
      options: [
        "A. Changing a field type will remove existing field history.",
        "B. Field references will be removed in Visualforce pages",
        "C. Existing list views that reference the field may be deleted.",
        "D. All data should be backed up before converting a text field.",
      ],
      answer: "C,D",
      title: "Question 99",
      explanation: "",
    },
    {
      content:
        "What may occur if workflow rules are re-evaluated after a field change by a field update? Choose 2 answers",
      options: [
        "A. A recursive loop potentially results in exceeding organizational limits.",
        "B. Workflow rules trigger more workflow rules to be re-evaluated.",
        "C. Workflow rules trigger validation rules on field updates",
        "D. Cross-object workflow rules result in re-evaluation after field change.",
      ],
      answer: "A,B",
      title: "Question 100",
      explanation: "",
    },
    {
      content: "Which two are a capability of record types? Choose two answers",
      options: [
        "A. Displaying different field labels",
        "B. Having multiple record types on the record",
        "C. Displaying different page layouts",
        "D. Filtering picklist values",
      ],
      answer: "C,D",
      title: "Question 101",
      explanation: "",
    },
    {
      content:
        "What is true statement regarding master - detail relationship? Choose 3 answers",
      options: [
        "A. A master - detail relationship cannot be converted to a look-up relationship",
        "B. Deleting a master record in a master detail relationship deletes all related detail records",
        "C. Standard objects can be on the detail side of the custom object in a master-detail relationship",
        "D. Master-detail relationship can convert to a look -up relationship if no roll-up summary field exist on the master object",
        "E. A master-detail relationship cannot be created if the custom object on the detail side already contains data.",
      ],
      answer: "B,D,E",
      title: "Question 102",
      explanation: "",
    },
    {
      content:
        "What is a true statement in regard to managing access to reports and dashboards?\nChoose 2 answers",
      options: [
        "A. Users must have certain permissions to access public, hidden, or shared folders.",
        'B. Users with the "Manage Public Reports" and "Create and Customize Reports"permissions can create custom reports that all users canview.',
        "C. Users that want to grant access to personal folders can manually share a personal folder with a user or publicgroup.",
        'D. Users with the "Manage Public Reports" permission can organize reports by creating custom report folders and sending invitations to users to access them.',
      ],
      answer: "B,D",
      title: "Question 103",
      explanation: "",
    },
    {
      content:
        "The VP of sales requested that Account Site Information should be visible on an Opportunity record. What is the recommended salutation to meet this requirement?",
      options: [
        "A. Process Builder",
        "B. Roll-Up Summary Field",
        "C. Workflow Rule",
        "D. Cross-Object Formula Field",
      ],
      answer: "D",
      title: "Question 104",
      explanation: "",
    },
    {
      content:
        "Universal Containers has deployed custom tabs to Production via changes sets, without including the profile settings or permission sets.\nWhat is the settings for the visibility of custom tabs?",
      options: [
        "A. Custom tabs are default off for all users.",
        "B. Custom tabs are default on for all uses.",
        "C. Custom tabs are hidden for all users.",
        "D. Custom tabs are NOT deployed.",
      ],
      answer: "C",
      title: "Question 105",
      explanation: "",
    },
  ],
});
