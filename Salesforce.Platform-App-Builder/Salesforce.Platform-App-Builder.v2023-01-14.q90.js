window.testContent = window.testContent || [];
var testId = "Salesforce.Platform-App-Builder";
var testName = "Salesforce.Platform-App-Builder";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "Salesforce.Platform-App-Builder.v2023-01-14.q90",
  content: [
    {
      content:
        "Sales reps at Universal Containers create multiple quotes per opportunity.\n       What automation tool should an app builder recommend to delete rejected quotes?",
      options: [
        "A. Approval process",
        "B. Validation rule",
        "C. Workflow rule",
        "D. Flow",
      ],
      answer: "D",
      title: "Question 1",
    },
    {
      content:
        "On the Account Lightning record page, users need to see ten fields and the ability to sort and wrap text on their Related Lists.\n       What Related List type would the app builder select for the Related List Lightning component?",
      options: [
        "A. Basic List",
        "B. List Class",
        "C. ListVlew",
        "D. Enhanced List",
      ],
      answer: "D",
      title: "Question 2",
    },
    {
      content:
        "Cloud Kicks wants to efficiently Increase the company's adoption of Salesforce while simultaneously moving away from their reliance on spreadsheets. An app builder is given a spreadsheet everyone is sharing that needs to be added to Salesforce. The object with fields needs to be created and the data inserted simultaneously.\n       Which tool should be used?",
      options: [
        "A. Data Loader",
        "B. Import Wizard",
        "C. Lightning Object Creator",
        "D. Schema Builder",
      ],
      answer: "C",
      title: "Question 3",
    },
    {
      content:
        "DreamHouse Realty (DR) employees started using company-owned airplanes for work travel after Ursa Major Solar was acquired. DR executives want to automate the submission travel request forms to enforce the Internal policy.\n       How should an app builder automate travel requests based on these criteria?",
      options: [
        "A. Apex",
        "B. Workflow rule",
        "C. Approval process",
        "D. Process Builder",
      ],
      answer: "C",
      title: "Question 4",
    },
    {
      content:
        "An app builder is preparing to deploy a new app from the sandbox to production using change sets.\n       What two considerations should an app builder keep in mind during this process?\n       Choose 2 answers",
      options: [
        "A. Users should be logged out of production when receiving inbound change sets.",
        "B. Salesforce Connect automatically establishes a link between environments.",
        "C. Change sets do not include all components and may have to perform some changes manually.",
        "D. Transactions will revert if the deployment errors.",
      ],
      answer: "C,D",
      title: "Question 5",
    },
    {
      content:
        "Universal Containers wants to match Opportunity data from Salesforce to the records in a financial database.\n       What is required to configure an indirect lookup relationship in Salesforce between the Salesforce Opportunity records and those in a financial database?",
      options: [
        "A. Salesforce Record ID",
        "B. External ID",
        "C. TEXT(Id)",
        "D. CASESAFE(Id)",
      ],
      answer: "B",
      title: "Question 6",
    },
    {
      content:
        "Cloud Kicks (CK) wants to set up a custom child object to track gift cards issued to a customer. A key requirement is to track the total number of gift cards opened and gift cards issued on an Account. CK wants to permanently ensure the gift cards are unable to be moved across any other Account once it is created.\n       On the gift card object, what type of field should be created to support this requirement?",
      options: [
        "A. Master-detail relationship",
        "B. Formula",
        "C. Roll-up summary",
        "D. Lookup relationship",
      ],
      answer: "A",
      title: "Question 7",
    },
    {
      content:
        "When a sales rep submits an account for approval, Universal Containers wants the user to answer additional questions via a popup window to populate additional record fields.\n       What should an app builder use to achieve the desired result?",
      options: [
        "A. Process Builder and Flow",
        "B. Custom button and Flow",
        "C. Lightning component and Process Builder",
        "D. Custom picklist field and Process Builder",
      ],
      answer: "B",
      title: "Question 8",
    },
    {
      content:
        "Universal Containers uses a custom object called Projects. When managers assign projects they set a custom field on the Uroject called Estimated Hours. Once set, users should be able to decrease but not increase the value How can an app builder meet this requirement?",
      options: [
        "A. Create a formula default value for the custom field.",
        "B. Create a formula held that uses the PREVGROUPVAL function",
        "C. Create a validation rule that uses the PRIOR VALUE function.",
        "D. Create a validation rule that uses the ISCHANGED function",
      ],
      answer: "C",
      title: "Question 9",
    },
    {
      content:
        "Ursa Major Solar wants to create a relationship between the standard Contact object and a custom Solar Project object Contacts potentially be related to multiple Solar Project objects, and a Solar Project can have multiple Contacts associated with it.\n       How should an app builder configure the data model?",
      options: [
        "A. Two Lookup relationships on a new custom object",
        "B. One Master-detail relationship on Conuct and one Master-detail relationship on Solar Project",
        "C. One Lookup relationship on Contact and one Lookup relationship on Solar Project",
        "D. Two Master-detail relationships on a new custom object",
      ],
      answer: "B",
      title: "Question 10",
    },
    {
      content:
        "A sales rep at AW Computing is unable to find what they are looking for while scrolling through their Chatter feed.\n       How can a filter be utilized to show only posts from their key account and opportunity records?",
      options: [
        "A. Create a Chatter notification.",
        "B. Create a Chatter group.",
        "C. Create a Chatter stream.",
        "D. Create Chatter bookmarks",
      ],
      answer: "C",
      title: "Question 11",
    },
    {
      content:
        "The appraisal team at DreamHouse Realty wants to leverage Salesforce mobile app.\n       What are three things an app builder should do to optimize mobile experience?\n       Choose 3 answers",
      options: [
        "A. Create individual customized layouts for different phone operating systems.",
        "B. Put the most important fields in the compact layout so they are easy to find.",
        "C. Use Global Actions to make it easy to perform vital functionality on mobile.",
        "D. Minimize the amount of formula fields and lookup fields to reduce page load time.",
        "E. Avoid using default field values so that the user is required to fill in all fields on the screen.",
      ],
      answer: "B,C,D",
      title: "Question 12",
    },
    {
      content:
        "Universal Containers (UC) has a custom Invoice object and a custom Invoice Line Item object. TTie Invoice Line Item object has a lookup relationship to the Invoice. UC would like to convert the lookup relationship to a master-detail relationship but is unable to do so.\n       Which two reasons could be preventing this relationship conversion?\n       Choose 2 answers",
      options: [
        "A. Invoice Line Item records exist without having the Invoice lookup field populated.",
        "B. There are already two master-detail relationships on the Invoice Line Item.",
        "C. There is a roll-up summary field on the Invoice object.",
        "D. Custom objects are unable to be on the detail side of a master-detail relationship.",
      ],
      answer: "A,B",
      title: "Question 13",
    },
    {
      content:
        "Universal Containers created a 'New Task' custom action on the Opportunity object. The action was added to all page layouts in the Mobile & Lightning Actions section.\n       Which Lightning component should the app builder add to the layout to display the action?",
      options: [
        "A. Highlights panel",
        "B. Related lists",
        "C. Activities",
        "D. Related record",
      ],
      answer: "C",
      title: "Question 14",
    },
    {
      content:
        "An app builder has a custom component they want to make available on the utility bar, but the component is unavailable.\n       How should the component be tagged?",
      options: [
        "A. For use on record pages.",
        "B. For use in Lightning App Builder.",
        "C. For use in App Manager.",
        "D. For use on the utility bar.",
      ],
      answer: "B",
      title: "Question 15",
    },
    {
      content:
        "At Universal Containers, the Account object has a Master-Detail relationship with an Invoice custom object.\n       The App Builder would like to change to a lookup field, but is not able to do so. What could be causing this?",
      options: [
        "A. The invoice must have at least one Master-Detail field for reporting.",
        "B. The Account record includes Invoice roll-up summary fields.",
        "C. The Invoice records have existing values in the Account.",
        "D. The Account is included in the workflow on the Invoice object.",
      ],
      answer: "B",
      title: "Question 16",
    },
    {
      content:
        "The Recruiting ream at AW Computing captures the job acceptance and date of hire of a candidate on the Job Application custom object. Once the candidate accepts the recruiter s job offer, the date of hire should be entered and not be changed on subsequent cecord edit.\n       Which validation formula should the app builder use?",
      options: [
        "A. NOT(ISCLANK(Job_Accepted_c)) && ISCHANGED(Hire_Date_c)",
        "B. (ISBLANK(Job_Accepted_c) II NOT(lSCMANGED(Mire_Daie_c))",
        "C. (lSBLANK(Job_Accepted_c) && NOT(lSCHANGED(Hire_Date_c))",
        "D. NOT{IS&lANK(Job_Accepted_c)) II ISCHANGED(Hire_Date_c)",
      ],
      answer: "A",
      title: "Question 17",
    },
    {
      content:
        "A custom field on an account is used to track finance information about a customer. Only members of the Finance Team have access to this field. However, the business wants to allow one customer service agent, who is assigned the customer service profile, read-only access to this field for special circumstances. What is the recommended solution to grant the customer service agent access to the field?",
      options: [
        "A. Update the Customer Service Profile already assigned to the agent to allow for read-only access to the field via Field Level Security",
        "B. Create a permission set that allows read-only access to the field via Field Level Security and assign it to the agent.",
        "C. Update the custom field's Field Level Security in setup to allow the agent read-only access to the field.",
        "D. Create a new profile to allow for read-only access to the field via Field Level Security and assign it to the agent",
      ],
      answer: "B",
      title: "Question 18",
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
      title: "Question 19",
    },
    {
      content:
        "To increase adoption, Universal Containers is proposing changes to its Salesforce data model to allow easier visibility for sales reps into key metrics. The proposal has three custom objects related to the Account object, one with a master-detail, and two that are not. Each of these objects has 15 fields they would like to summarize on the Account object.\n       What are two considerations for this proposal?\n       Choose 2 answers",
      options: [
        "A. Roll-up summaries are limited to master-detail relationships.",
        "B. An object can have 20 object references.",
        "C. Roll-up summaries allow MAX, MIN, SUM, COUNT, and AVG.",
        "D. An object can have 25 roll-up summaries.",
      ],
      answer: "C,D",
      title: "Question 20",
    },
    {
      content:
        "Which two places can an app builder go to see a list of available Custom Lightning components in their org?\n       Choose 2 answers",
      options: [
        "A. Visualforce components in Setup",
        "B. Lightning component Generator",
        "C. Lightning App Builder",
        "D. Lightning components in Setup",
      ],
      answer: "C,D",
      title: "Question 21",
    },
    {
      content:
        "Universal Containers utilizes opportunities and a custom object called Detaited.Sales__c. The company would like to roll sales metrics up to an opportunity for only Detailed.Sales__c records that have their picklist status set to Active.\n       What is the recommended method for the app bunder to achieve this request?",
      options: [
        "A. Create a lookup relationship between the parent and child object with a roll-up summary held that filters on the status field.",
        "B. Utilize Apex code to roll up the desired amounts.",
        "C. Utilize the AppExchange to download a third-party application that can roH up the sales dollars with the appropriate filter.",
        "D. Create a master-detail relationship between the parent and child object with a roll-up summary field that fitters on the status held.",
      ],
      answer: "D",
      title: "Question 22",
    },
    {
      content:
        "At Universal Containers, the VP of Service has requested a visual indicator flag on each case, based on the case priority. High-priority cases should be flagged red, medium-priority should be flagged yellow, and low-priority cases should be flagged green. Which formula would accomplish this requirement? Choose 2 answers",
      options: [
        'A. IMAGE(CASE( Priority, "Low", "img/samples/flag_green.gif", "Medium","img/samples/flag_yellow.gif", "High", "img/samples/flag_red.gif", "Priority Flag")',
        'B. CASE( Priority, "Low", "img/samples/flag_green.gif", "Medium", "img/samples/flag_yellow.gif","High", "img/samples/flag_red.gif", "/s.gif")',
        'C. IMAGE( IF(ISPICKVAL(Priority, "Low"), "img/samples/flag_green.gif", IF(ISPICKVAL(Priority,"Medium"), "img/samples/flag_yellow.gif", IF(ISPICKVAL(Priority, "High"),"img/samples/flag_red.gif"))), "Priority Flag")',
        'D. IF(ISPICKVAL(Priority, "Low"), "img/samples/flag_green.gif", IF(ISPICKVAL(Priority, "Medium"),"img/samples/flag_yellow.gif", IF(ISPICKVAL(Priority, "High"), "img/samples/flag_red.gif","/s.gif")))',
      ],
      answer: "A,C",
      title: "Question 23",
    },
    {
      content:
        "UC has a requirement that an opportunity should have a field showing the value of its associated account's billing state. This value should not change after the opportunity has been created. Is there a recommended solution to configure this automated behavior?",
      options: [
        "A. Apex",
        "B. Roll-up summary field",
        "C. Formula field",
        "D. Workflow",
      ],
      answer: "D",
      title: "Question 24",
    },
    {
      content:
        "An app builder at Ursa Major Solar has been working on a new custom app in a sandbox that has been upgraded to the next major Salesforce version, and their production instance is still on the current Salesforce version. The development is complete and they are ready to deploy a change set.\n       What should the app builder consider when planning the deployment?",
      options: [
        "A. It will fall if there is a feature only available In the next version.",
        "B. The change set components will be upgraded to the next version in production.",
        "C. The change set will be automatically deployed when production is upgraded.",
        "D. The deployment is not possible due to different versions.",
      ],
      answer: "A",
      title: "Question 25",
    },
    {
      content:
        "An app builder is creating a Lightning record page and has added Mobile & Lightning Actions to the page layout.\n       What two components could be included on the layout to display the actions?\n       Choose 2 answers",
      options: [
        "A. Activities",
        "B. Path",
        "C. Chatter",
        "D. Highlights panel",
      ],
      answer: "A,D",
      title: "Question 26",
    },
    {
      content:
        "When an opportunity is closed date is pushed more than 30 days, manager approval is required. An approval process is in place but reps frequently forget to submit for approval to run the process.\n       How can an app builder ensure that these opportunities are submitted into the approval process?",
      options: [
        "A. Submit the record for approval from an automated process.",
        'B. Give the manager the "API Enabled" permission to permit approval responses by email.',
        "C. Change the entry criteria on the approval process to criteria are met and lock the record on initial submission.",
        "D. Use a validation rule and an email alert to the manager requesting approval.",
      ],
      answer: "A",
      title: "Question 27",
    },
    {
      content:
        "Cloud Kicks's management team frequently travels and wants to approve requests from their team on the go via Chatter.\n       Where would an app builder enable this ability?",
      options: [
        "A. Approval Process Settings",
        "B. Chatter Settings",
        "C. Object Settings",
        "D. Chatter Feed Tracking",
      ],
      answer: "B",
      title: "Question 28",
    },
    {
      content:
        "Universal Container wants customers to be able to open cases from a public-facing website.\n       What should the app builder use to enable visitors to the website?",
      options: [
        "A. Email-to-case",
        "B. Outbound message",
        "C. Screen flow",
        "D. Web-to-case",
      ],
      answer: "A",
      title: "Question 29",
    },
    {
      content:
        "Managers at Universal Containers want a quick way to create additional accounts to form a hierarchy from a Parent Account record They want to auto-populate five fieids based on the parent to make it easier for users to create the child accounts quickly.\n       What should the app builder recommend?",
      options: [
        "A. A Create a custom action",
        "B. Add Path on Account hierarchy",
        "C. Add a custom link on Account",
        "D. Customize a Global Quick Action",
      ],
      answer: "A",
      title: "Question 30",
    },
    {
      content:
        "Universal Containers has a new custom object for Invoices that includes an InvoiceNumber field, Before the Invoice object can be used, invoices will be migrated from an external system maintaining their current InvoiceNumber. After the migration, salesforce will be the system of record and each new Invoice created in Salesforce must have a unique InvoiceNumber.\n       How should the app builder configure the InvoiceNumber field?",
      options: [
        "A. Create a Text field, then change it to AutoNumber after the migration.",
        "B. Create an AutoNumber field and migrate the Invoices",
        "C. Create a Text field and mark it as a unique external ID field.",
        "D. Create a Text filed for the original InvoiceNumber and an AutoNumber field for the Salesforce InvoiceNumber.",
      ],
      answer: "C",
      title: "Question 31",
    },
    {
      content:
        "An app builder received a request to extend record access beyond the organization-wide defaults configured.\n       Which two features satisfy this requirement?\n       Choose 2 answers",
      options: [
        "A. Manual Sharing Rules",
        "B. Public Groups",
        "C. Sharing Rules",
        "D. Permission Set Groups",
      ],
      answer: "B,C",
      title: "Question 32",
    },
    {
      content:
        "A production org includes custom objects containing confidential Information. A sandbox h needed that Includes data records, excludes all of the confidential objects, and can be refreshed weekly the confidential objects, and can be refreshed weekly.\n       What steps should an App Builder take to meet these requirements?",
      options: [
        "A. Create a Developer Pro Sandbox and schedule Data loader to download selected object data weekly.",
        "B. Create a Full Sandbox and use a sandbox template",
        "C. Create a Partial Copy Sandbox and use a sandbox template.",
        "D. Create a Developer Sandbox and schedule Data loader to download selected object data weekly.",
      ],
      answer: "C",
      title: "Question 33",
    },
    {
      content:
        "Which three options art availably when activating a Lightning page from the Lightning App Builder?\n       Choose 3 answers",
      options: [
        "A. Assign the page to a combination of apps and permission sets.",
        "B. Make the page the org default.",
        "C. Make the page the default homepage for specific roles.",
        "D. Make the page the default homepage for specific apps.",
        "E. Assign the page to a combination of apps and profiles.",
      ],
      answer: "B,D,E",
      title: "Question 34",
    },
    {
      content:
        "An app builder has created a change set and deployed a report from their development sandbox for User Acceptance Testing. When the app builder runs the report, no data is returned.\n       What can be a reason for this?",
      options: [
        "A. Reports have to be deployed with Salesforce DX.",
        "B. Reports have to be manually re-created in each environment.",
        "C. Data is deployed when added to a change sets.",
        "D. Data is unable to be deployed with change sets.",
      ],
      answer: "D",
      title: "Question 35",
    },
    {
      content:
        "Universal Containers wants to understand return on investment for the latest advertising buy. They currently use a private security model for all objects.\n       What should an app builder recommend?",
      options: [
        "A. Configure Campaign Hierarchies and Campaign statistics",
        "B. Change to a public security model",
        "C. Run an opportunities pipeline report",
        "D. Utilize Account Hierarchies and Roil-Up Summary fields",
      ],
      answer: "A",
      title: "Question 36",
    },
    {
      content:
        "An app builder wanes to show Groups as the last navigation menu item in the mobile app. However, (he app builder is unable to select Groups as one of the items on the drop-down menu.\n       What could cause this?",
      options: [
        "A. Groups is included m the Smart Search items but unavailable on the navigation menu.",
        "B. Groups is available in the recent section of the navigation menu.",
        "C. Groups is unavailable in the selected list for the navigation menu.",
        "D. Groups is available in the Chatter section of the navigation menu.",
      ],
      answer: "A",
      title: "Question 37",
    },
    {
      content:
        "An app builder has downloaded a component from the AppExchange successfully; however, they are unable to add it to the Lightning home page.\n       Which two reasons can be preventing the app builder from being able to add the custom component?\n       Choose 2 answers",
      options: [
        "A. My Domain must be deployed to add custom components to the page with the App Builder.",
        "B. The component requires a developer permission to add it to the page with the App Builder.",
        "C. A custom tab must be created to add custom components to the page with the App Builder.",
        "D. The component is tagged for record pages instead of home pages and is not showing up in the App Builder.",
      ],
      answer: "A,D",
      title: "Question 38",
    },
    {
      content:
        "An App Builder has been asked to integrate Salesforce with an external web service. The web service must be notified every time an Opportunity is Won. Which two can satisfy this requirement?",
      options: [
        "A. Use a process and Apex Code",
        "B. Use a workflow rule and an outbound message",
        "C. Use a process and an outbound message",
        "D. Use a flow and an outbound message",
      ],
      answer: "A,B",
      title: "Question 39",
    },
    {
      content:
        "Cloud Kicks received a new requirement to calculate summaries from child objects of a standard object. The team would prefer to solve this declaratively.\n       What are two considerations an app builder should evaluate?\n       Choose 2 answers",
      options: [
        "A. An app builder is unable to change a lookup to a master-detail relationship.",
        "B. A value is required in all records of the lookup field prior to converting to a master-detail relationship.",
        "C. An object can have up to two master-detail relationships.",
        "D. A trigger on save or update can kick off calculations.",
      ],
      answer: "A,C",
      title: "Question 40",
    },
    {
      content:
        "Manage at Universal Containers want a quick to create additional accounts to form a hierarchy from a parent account record. They want to auto-populate five fields based on the parent to make it easier for users to create the child accounts quickly.",
      options: [
        "A. Custom Global Quick Action",
        "B. Custom Global Quick Account.",
        "C. Custom link on Account",
        "D. Custom action on Account",
      ],
      answer: "B",
      title: "Question 41",
    },
    {
      content:
        "Universal Containers has deployed custom tabs to Production via changes sets, without including the profile settings or permission sets.\n       What is the settings for the visibility of custom tabs?",
      options: [
        "A. Custom tabs are NOT deployed.",
        "B. Custom tabs are default on for all uses.",
        "C. Custom tabs are hidden for all users.",
        "D. Custom tabs are default off for all users.",
      ],
      answer: "D",
      title: "Question 42",
    },
    {
      content:
        "Universal Containers would like to embed a chart of all related Opportunities, by stage, on the Account detail page. Which type of report should the App Builder create to add to the Account page layout?",
      options: [
        "A. A tabular report on the Account object.",
        "B. A tabular report on the Opportunity object.",
        "C. A summary report on the Opportunity object.",
        "D. A summary report on the Account object.",
      ],
      answer: "C",
      title: "Question 43",
    },
    {
      content:
        "The Director of customer service wants to receive a notification when a case stays in the '' new'' status for more than four business hours.\n       Which two automation processes should be used to accomplish this?\n       Choose 2 answers",
      options: [
        "A. Escalation rules",
        "B. Flow Builder",
        "C. Scheduled Apex",
        "D. Process Builder",
      ],
      answer: "A,D",
      title: "Question 44",
    },
    {
      content:
        "Universal Containers has a private sharing model for Accounts and Opportunities and uses Territory Management to grant access to records.\n       * Sales rep A manually shares an opportunity record with sales rep B.\n       * Sales rep B has access to the Account even though the Account Is NOT In sales rep B's territory.\n       * Sales rep C CANNOT see either record.\n       Based on the information given, why can sales rep B see the Account related to the Opportunity?",
      options: [
        "A. Account was also manually shared.",
        "B. Sales rep B has implicit access to the Account.",
        "C. Sharing set is granting access to the Account.",
        "D. Sales rep B was added to the Account team.",
      ],
      answer: "D",
      title: "Question 45",
    },
    {
      content:
        "A new app builder on the Cloud Kicks team is getting familiar with relationships in the data model.\n       What functionality would present the app builder a comprehensive view of all relationships In one pi",
      options: [
        "A. Schema Builder",
        "B. Lightning Record Page",
        "C. Lightning Object Creator",
        "D. Object Manager",
      ],
      answer: "A",
      title: "Question 46",
    },
    {
      content:
        "universal containers has several large customers that sell their products through dealers. Each customer and dealer has an individual rep who works directly with uc and each is billed separately. How can an app builder implement these requirements?",
      options: [
        "A. Create both customer and dealer as accounts, add each rep as a contact on the corresponding account and create an account hierarchy.",
        "B. Create a single account record, add each rep as a contact and create a custom dealer object",
        "C. Create a single parent record, add each rep as a contact to the parent account and add each dealer as a child record",
        "D. Create both customer and dealer as accounts, create account teams on each account and associate the dealer records with the parent account.",
      ],
      answer: "A",
      title: "Question 47",
    },
    {
      content:
        "Cloud Kicks wants to start tracking how many shoe subscriptions have been sold for each shoe catalog. A master-detail relationship exists between the Subscription__c and the Shoe__c objects.\n       Which type of field should an app builder create?",
      options: [
        "A. Roll-up summary field",
        "B. Number field",
        "C. Lookup field",
        "D. Master-detail relationship field",
      ],
      answer: "A",
      title: "Question 48",
    },
    {
      content:
        "Cloud Kicks works on an annual subscription model. When a sales rep marks an opportunity as closed won, a new opportunity should automatically be created for the renewal. The contracts team works outside of Salesforce but also needs to be notified about closed deals in order to initiate the contract process with the customer.\n       Which automation solution would meet these requirements?",
      options: [
        "A. Approval Process",
        "B. Validation Rule",
        "C. Workflow Rule",
        "D. Process Builder",
      ],
      answer: "D",
      title: "Question 49",
    },
    {
      content:
        "Ursa Major Solar (UMS) uses a public sharing model for accounts. UMS would like to move to a more restrictive sharing model but wants the Sales team to continue to have access to all account records with the sales record type.\n       Which two actions should an app builder complete to implement this change?\n       Choose 2 answers",
      options: [
        "A. Update the Sales profile.",
        "B. Create a criteria based sharing rule.",
        "C. Update the organization-wide defaults",
        "D. Create an owner-based sharing rule.",
      ],
      answer: "B,C",
      title: "Question 50",
    },
    {
      content:
        "A user is unable to use inline editing on a list view. A quick check verifies the user should be able to perform inline editing as they have been assigned the appropriate permissions.\n       Which two conditions should the app builder review?\n       Choose 2 answers",
      options: [
        "A. If the list view restricts sharing for the user",
        "B. If the list view selected is the recently viewed list view",
        "C. If the list view contains more than one record type",
        "D. If the list view contains a chart created by the user",
      ],
      answer: "A,C",
      title: "Question 51",
    },
    {
      content:
        "Cloud Kicks (CK) switched to Lightning Experience and started using Chatter across its global workforce to support its fast-paced sales cycle. CK loves Chatter but struggle with gathering feedback from core team members, including understanding who is available to respond.\n       Which two ways could CK use Chatter to solve this problem?\n       Choose 2 answers",
      options: ["A. Out of Office", "B. Streams", "C. Polls", "D. Topics"],
      answer: "A,C",
      title: "Question 52",
    },
    {
      content: "What are two capabilities of Schema Builder? Choose 2 answers",
      options: [
        "A. Viewing page layouts in a new window",
        "B. Showing selected objects on a page",
        "C. Editing custom settings",
        "D. Creating a new record type",
      ],
      answer: "A,B",
      title: "Question 53",
    },
    {
      content:
        "Cloud Kicks (CK) Is finding sales reps are Inconsistent in data entry when deals are won. CK requires that custom shoes are shipped within two weeks after the close date. A custom field called Scheduled Ship Date on the opportunity records the ship date. How should the app butler ensure this field is properly filed out before setting the opportunity to closed won?",
      options: [
        'A. ISPICKVAL( StageName ,"Closed Won") && ( Scheduled _Ship_Date_c-CloseDate ) > 14',
        'B. OR(ISPICKVAL( StageName ,"Closed Won") && (Scheduled_Ship_Date_cCloseDate)>14,ISBLANK(Scheduled_Ship_Date_c))',
        'C. OR(ISPICKVAL( StageName ="Closed Won") && ( Scheduled_Ship_Date__c- CloseDate ) >14,ISBLANK(Scheduled_Ship_Date__c))',
        'D. ISPICKVAL( StageName= CloseDate ) > 14,losed Won") && ( CloseDateScheduled_Ship_Date_c)>14',
      ],
      answer: "B",
      title: "Question 54",
    },
    {
      content:
        "Universal containers (uc) wants to delete data in several fields for 5000 lead records. UC export the selected record IDs and fields that need to have data deleted in a csv file. Which two steps should an app builder suggest to meet these requirements ? Choose 2 answers",
      options: [
        "A. Use Data Loader to update leads using the CSV file",
        "B. Select the correct record type",
        "C. Use import Wizard to update leads using the CSV file",
        "D. Select insert null values in settings.",
      ],
      answer: "A,D",
      title: "Question 55",
    },
    {
      content:
        "Universal Containers would like to automatically assign a specific permission set to new users. How can this requirement be met? Choose 2 Answers",
      options: [
        "A. Create a lightning process on the user object to launch a flow.",
        "B. Create an approval process on the User object to assign a permission set",
        "C. Create a workflow rule on the User object to assign a permission set.",
        "D. Create a flow on the user object to assign a permission set.",
      ],
      answer: "A,C",
      title: "Question 56",
    },
    {
      content:
        "The services manager wants to make sure the team enters case priority consistently.\n       What feature can an app builder use to accomplish this?",
      options: [
        "A. In-App Guidance",
        "B. Flow",
        "C. Path",
        "D. Next Best Action",
      ],
      answer: "A",
      title: "Question 57",
    },
    {
      content:
        "The VP of Sales wants a Chatter post to the All-Sales private group when an opportunity goes to the closed won stage.\n       What two tools should the app builder use to automate this process? Choose 2 answers",
      options: [
        "A. Workflow",
        "B. Flow",
        "C. Process Builder",
        "D. Big Deal Alert",
      ],
      answer: "B,C",
      title: "Question 58",
    },
    {
      content:
        "An app builder has deployed a change set from a sandbox to production. There is a long delay in the deployment.\n       What can be causing the delay?",
      options: [
        "A. Roles are included in the change set.",
        "B. A field type change is included in the change set.",
        "C. Dependent fields are included in the change set.",
        "D. Profiles are included in the change set.",
      ],
      answer: "B",
      title: "Question 59",
    },
    {
      content:
        "Universal Containers allows all employees to submit reviews for leadership using a custom object called Review. These Reviews should only be visible to the HR department and the employee who submitted the record.\n       Which three steps should an app builder take to properly control access to Reviews?\n       Choose 3 answers",
      options: [
        "A. Disable Grant Access Using Hierarchies.",
        "B. Set organization-wide default to Private.",
        "C. Add a Master-Detail(User; field on the Review object.",
        "D. Remove Review Read permission from non-HR Department user Profiles.",
        "E. Create a criteria-based Sharing Rule for the HR Department.",
      ],
      answer: "A,B,E",
      title: "Question 60",
    },
    {
      content:
        "An app builder wants to create a custom Sync button on Account that will call a Lightning Web Component that connects with an external system. This action should only be available If the custom Status field is set to Ready to Sync.\n       What should an app builder use to add this functionality to an Account record page?",
      options: [
        "A. AppExchange product",
        "B. Custom link",
        "C. Formula field",
        "D. Dynamic action",
      ],
      answer: "D",
      title: "Question 61",
    },
    {
      content:
        "Universal Containers is setting up salesforce for the first time. Management wants the sales and marketing teams to have different navigation names in the salesforce1 mobile app. Which option is available to an app builder to satisfy the requirement?",
      options: [
        "A. Create public groups for sales and marketing and create mobile navigation menus for each group.",
        "B. Create mobile navigation menus for both the sales and marketing profiles.",
        "C. Create roles for sales and marketing and assign a custom homepage layout for each role.",
        "D. Create sales and marketing profiles to ensure read access to different objects",
      ],
      answer: "B",
      title: "Question 62",
    },
    {
      content:
        "Universal Containers wants sales reps to get permission from their managers before deleting Opportunities, What can be used to meet these requirements?",
      options: [
        "A. Two-step Approval Process.",
        "B. Process Builder with Submit for Approval action.",
        "C. Approval Process with a triggered Flow process.",
        "D. Approval Process with Time-Dependent Workflow action.",
      ],
      answer: "A",
      title: "Question 63",
    },
    {
      content:
        "DreamHouse Realty (DR) is expanding into subsidized housing by partnering with local government entitles.\n       DR uses Sales Cloud and has enabled field history tracking on the Opportunity object. Due to increased Information requirements, the App Dev team is changing Text Area (Long) fields to Rich Text fields to allow for up to 1,000 characters and better descriptions.\n       Which two considerations should be made by the team?\n       Choose 2 answers",
      options: [
        "A. Field History Tracking records value changes of 255 characters or less.",
        "B. Audit Trail is available through REST API extracts.",
        "C. Rich text field values of all lengths are displayed fully in reports.",
        "D. Data loss may occur when changing custom field types.",
      ],
      answer: "A,D",
      title: "Question 64",
    },
    {
      content:
        "Universal Containers is adding drone delivery to service offerings, and the developer has written and tested code prior to deployment to production, and the change set is ready to go. The deployment window will occur when the developer is on vacation.\n       What can the app builder do to ensure a smooth deployment to production?",
      options: [
        "A. Use a metadata package set.",
        "B. Validate the inbound change set.",
        "C. Validate the outbound change set.",
        "D. Remove Apex classes from Abound change set.",
      ],
      answer: "C",
      title: "Question 65",
    },
    {
      content:
        "Universal Containers uses a custom picklist field Account Region on the account record. They want this region to be reflected on all related contact records and stay in sync if the value of this field changes on the Account.\n       How should an app builder meet this requirement?",
      options: [
        "A. Create a formula field on the Contact object > Set the value of the formula to TEXT(Account.Account_Region__c).",
        "B. Create a text field called 'Account Region' on Contact object > Create a workflow rule to update this picklist field if the Account Region field on the Account is changed.",
        "C. Create a picklist field called 'Account Region' on Contact object > Create a workflow rule to update this picklist field if the Account Region field on the Account is changed.",
        "D. Create a formula field on the Contact object > Set the value of the formula to ISPICKVAL(Account.Account_Region__c).",
      ],
      answer: "A",
      title: "Question 66",
    },
    {
      content:
        'DreamHouse Realty requires that field value changes for certain fields such as Asking_Price__c and Real_Estate_Agent"c on their House__c custom object show up prominently on Chatter.\n       What Chatter feature should the app builder utilize?',
      options: [
        "A. Thanks",
        "B. Publisher Actions",
        "C. Feed Tracking",
        "D. Topics",
      ],
      answer: "C",
      title: "Question 67",
    },
    {
      content:
        "An app builder installed a custom Lightning component from AppExchange and has deployed My Domain.\n       What should be done next in order to configure the component for use in a record page?",
      options: [
        "A. Edit a record page using Lightning App Builder > Drag the component onto the page.",
        "B. Edit a record page using the Page Layout editor > Drag the Visualforce component onto the page.",
        "C. Edit a record page using App Manager > Drag the component onto the page.",
        "D. Edit a record page using the Page Layout editor > Drag the component onto the page.",
      ],
      answer: "A",
      title: "Question 68",
    },
    {
      content:
        "Cloud Kicks has a sales rep who is stating that their Contact is unavailable for other users to see within Salesforce.\n       In which three ways can an app builder troubleshoot this issue?\n       Choose 3 answers",
      options: [
        "A. Verify the users with the issue have access to the Contact object.",
        "B. Create an Account Sharing Rule to give the users access to all records.",
        "C. Create a new Contact and have the users try again.",
        "D. Confirm whether Default Organization-Wide Sharing Settings provide access to the Account.",
        "E. Review the Contact record and ensure it is linked to an Account.",
      ],
      answer: "A,D,E",
      title: "Question 69",
    },
    {
      content:
        "Universal Containers manages leads in a Lead qualification queue where sales reps can accept ownership of the Lead. Campaign members are required to have a sales owner.\n       What validation rule should an app builder configure?",
      options: [
        "A. NOT(ISNEW() && ISBLANK(Lead.Owner:Queue.Id))",
        "B. NOT( ISBLANK(Lead.Owner:Queue.Id))",
        "C. AND( ISBLANK(Lead.Owner.Id) )",
        "D. AND(ISNEW(), ISBLANK(Lead.Owner:User.Id))",
      ],
      answer: "B",
      title: "Question 70",
    },
    {
      content:
        "Sales Managers want to be automatically notified any time there rs a change to an Opportunity Close Date and want these changes to be tracked on the Opportunity.\n       Which two configurations should an app builder recommend?\n       Choose 2 answers",
      options: [
        "A. Activate Historical Trending for Opportunities.",
        "B. Create an Opportunity outbound message.",
        "C. Enable Feed Tracking on Opportunities.",
        "D. Use Process Builder on Opportunities and a Chatter post action.",
      ],
      answer: "A,D",
      title: "Question 71",
    },
    {
      content:
        "Universal Containers has a custom picklist called Support Level on the Account object. They would like to show the real-time value of Support Level on all case records.\n       How should an app builder implement this requirement?",
      options: [
        "A. Create a formula field on the Case object using the TEXT function.",
        "B. Create a Process Builder and use a field update on the Case object.",
        "C. Create a formula field on the Account object using the ISPICKVAL function.",
        "D. Create a roll-up summary field using Support Level on the Account object.",
      ],
      answer: "B",
      title: "Question 72",
    },
    {
      content:
        "An app builder would like to streamline the user experience by reflecting summarized calculations of specific fields on various objects. Which field types could be used in roll-up summary fields to accomplish this?\n       Choose 3 answers",
      options: [
        "A. Time",
        "B. Checkbox",
        "C. Date",
        "D. Currency",
        "E. Percent",
      ],
      answer: "C,D,E",
      title: "Question 73",
    },
    {
      content:
        "An app builder installs an unmanaged package in a full copy sandbox that ts an exact match for production, and now they are ready to install it m production. When the app builder attempts to install the package in production, it fails.\n       Why did the package fail to install?",
      options: [
        "A. Apex unit test failures",
        "B. Package features not compatible",
        "C. Object limits exceeded",
        "D. Incorrect license types",
      ],
      answer: "A",
      title: "Question 74",
    },
    {
      content:
        "After universal containers converted qualified leads. Sales reps need to be able to report on converted leads.\n       How should an app builder support for this requirement ?",
      options: [
        "A. Ensure the representative has read access to the original lead records",
        "B. Enable preserve lead status in the lead conversion settings",
        "C. Assign the representative view and edit converted leads permission",
        "D. Create a custom report type with converted leads as the primary object",
      ],
      answer: "B",
      title: "Question 75",
    },
    {
      content:
        "An app builder wants to add the option to 'Send New Email' from Leads, Contacts and Accounts for users on mobile.\n       What is the benefit of using global actions to accomplish this?",
      options: [
        "A. Salesforce Lightning Component Library houses existing global actions prebuild for use.",
        "B. Global actions are record-specific and are available when searching that particular",
        "C. Global actions can be accessed anywhere actions are pages, feed and Chatter groups,",
        "D. The global action's layout automatically clones the default page layout.",
      ],
      answer: "C",
      title: "Question 76",
    },
    {
      content:
        "Cloud Kicks has a shipment date on each shipment that is sent out. Dispatchers need more details on the day and time the shipment was sent out. The app builder needs to change the current field type that is used from Date to Date/Time.\n       What should the app builder be aware of when it comes to data already in the system?",
      options: [
        "A. Historical data will be updated to 12:00 timestamp.",
        "B. Data loss will be experienced.",
        "C. The change will be instant",
        "D. The field name will change.",
      ],
      answer: "B",
      title: "Question 77",
    },
    {
      content:
        "Containers have the Account object's Organization-Wide Default set to Private. The marketing team owns Accounts; however, they also need to be able to see the sales team's Accounts. Both the sales and marketing teams are in completely different branches of the rote hierarchy.\n       What feature should be used to enable marketing to see sales-owned accounts.",
      options: [
        "A. Workflow",
        "B. Sharing Rules",
        "C. Flow",
        "D. Public Group",
      ],
      answer: "B",
      title: "Question 78",
    },
    {
      content:
        "A new custom object is being created with a private sharing setting. The business wants to share individual records with specific people or group of people on a case by case basis. What options does the business user have to manually share individual records? Choose 3 answers",
      options: [
        "A. Roles",
        "B. Public Groups",
        "C. Users",
        "D. Profiles",
        "E. Permission Sets",
      ],
      answer: "A,B,C",
      title: "Question 79",
    },
    {
      content:
        "Sales manager at universal containers would like to standardize what information sales rep are gathering. Sales rep want recommendations, sales strategies and to know what key fields need to be completed at each step of the sales process on the opportunity record. What feature should an app builder use to provide this functionally?",
      options: [
        "A. Global Action",
        "B. Workflow",
        "C. Path",
        "D. Chatter feed",
      ],
      answer: "C",
      title: "Question 80",
    },
    {
      content:
        "At Universal containers, all US Sales reps should be able to view the US Team dashboard, however, only the US sales directors should be able to see the data in the component and view its source report. How can an app builder ensure the proper access is granted?",
      options: [
        "A. Share the dashboard folder with roles and subordinates of the US Sales Director and share the report folder with the role of US Sales Director",
        "B. Make the US Sales Director the running user and share the dashboard folder with the role US Sales Rep",
        "C. Share the dashboard with the public group US Sales Reps and share the dashboard source reports folder with the US Sales Director profile",
        "D. Make the dashboard dynamic and give US Sales Reps the view my teams dashboard permission",
      ],
      answer: "C",
      title: "Question 81",
    },
    {
      content:
        "Cloud Kicks has leads owned by users and queues. The sales manager wants the status to change to working when a user takes ownership.\n       What does an app builder need to have in the criteria to ensure the process runs without error?",
      options: [
        "A. NOT(ISBLANK([Lead].OwnerId))",
        "B. [Lead].Owner:Queue.OwnerId Is Null = True",
        'C. BEGINS([Lead].OwnerId, ,,005")',
        "D. [Lead].Owner:User.Role Is Null = False",
      ],
      answer: "A",
      title: "Question 82",
    },
    {
      content:
        "Universal Containers needs the 18-digit record ID from Opportunity records when exporting data to Excel in order to ensure each record is treated uniquely.\n       What formula should an app builder use to create this new field?",
      options: [
        "A. TEXT(Id)",
        "B. CASESAFEID(Id)",
        "C. ISNUMBER(Id)",
        "D. VALUE(Id)",
      ],
      answer: "B",
      title: "Question 83",
    },
    {
      content:
        "Universal Containers has a customer base where many customers have the same or similar company names.\n       Which functionality should be configured to improve an end user`s search experience?\n       Choose 2 answers",
      options: [
        "A. Update the account search layouts accounts tab columns displayed.",
        "B. Update the account search filter fields.",
        "C. Update the account search layouts view filtersettings.",
        "D. Update the account search layouts search results columnsdisplayed.",
      ],
      answer: "B,D",
      title: "Question 84",
    },
    {
      content:
        "Which three Salesforce functionalities are ignored when processing field updates in workflow rules and approval processes?",
      options: [
        "A. Decimal places and character limits",
        "B. Multiple currencies",
        "C. Record type picklist value assignments",
        "D. Validation Rules",
        "E. Field-Level Security",
      ],
      answer: "A,B,C",
      title: "Question 85",
    },
    {
      content:
        "Ursa Major Solar wants to provide sales console users with an Incredible experience, with the most-used components easily accessible at all times.\n       What solution can enable reps to see and access these components from anywhere within the app without leaving the pagere where the team is working?",
      options: [
        "A. Home page",
        "B. Utility bar",
        "C. Global actions",
        "D. Favorites",
      ],
      answer: "B",
      title: "Question 86",
    },
    {
      content:
        "DreamHouse Realty (DR) has a policy that requires the phone number on Contact to be deleted when the DoNotCall checkbox is checked.\n       What automation tool should the app builder recommend?",
      options: [
        "A. Quick action",
        "B. Workflow rule",
        "C. Approval process",
        "D. Validation rule",
      ],
      answer: "D",
      title: "Question 87",
    },
    {
      content:
        "Universal Containers wants to track installation information once it container has been purchased on a custom object. Sales reps should have visibility of all the installation with their opportunities.\n       visibility of all the installations associated with their opportunities.\n       What kind of relationship should this new object have to the Opportunity?",
      options: [
        "A. Master-Detail",
        "B. Hierarchical",
        "C. Many to Many",
        "D. Lookup",
      ],
      answer: "C",
      title: "Question 88",
    },
    {
      content:
        "After a deal is closed, Cloud Kicks (CK) wants to assign a user as a customer service manager (CSM) in addition to the account owner and would like a new field to easily track and report which CSM is assigned to the Account.\n       Which solution should an app builder use for this request?",
      options: [
        "A. Multi-select picklist Meld",
        "B. Picklist field",
        "C. Text field",
        "D. Lookup field",
      ],
      answer: "D",
      title: "Question 89",
    },
    {
      content:
        "Universal Containers uses a custom object called Reviews to capture information generated by interviewers during the candidate process. The Review records are visible to any user that has access to the related custom Candidate record. The VP of Human Resources wants the comment field on the Review to be private to anyone outside of the MR department How should the app builder meet thts requirement?",
      options: [
        "A. Create a page layout with the field and use field-level security to hide the field from all other users.",
        "B. Create a page layout with the field for HR users and another page layout without the field for all other users.",
        "C. Create a sharing rule to share the field with the VP of HR with Role and Subordinates.",
        "D. Create an Apex sharing rule to share the field with users that have \"MR'' in their role.",
      ],
      answer: "A",
      title: "Question 90",
    },
  ],
});
