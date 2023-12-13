window.testContent = window.testContent || [];
var testId = "Salesforce.Platform-App-Builder";
var testName = "Salesforce.Platform-App-Builder";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "Salesforce.Platform-App-Builder.v2022-01-19.q148",
  content: [
    {
      content:
        "An app builder needs to deploy a new account detail page layout from sandbox to production.\nWhich three components should an app builder include in the Change Set to ensure it deploys successfully and visually as expected?\nChoose 3 answers",
      options: [
        "A. System administrator profile",
        "B. Custom fields",
        "C. Lightning App Builder",
        "D. Custom actions",
        "E. Detail page layout",
      ],
      answer: "B,D,E",
      title: "Question 1",
      explanation: "",
    },
    {
      content:
        "Which type of relationships can be defined with external objects? Choose 2 answers",
      options: [
        "A. External Lookup",
        "B. Indirect Lookup",
        "C. External Master-Detail",
        "D. Cross-Ogranization Lookup",
      ],
      answer: "A,B",
      title: "Question 2",
      explanation: "",
    },
    {
      content:
        "An app builder has created a report for sales people to view records from the custom object, some users have complained that they are unable to see all of the appropriate records. What steps should be taken to ensure data visibility within the report? Choose 3 Answers",
      options: [
        "A. Check Sharing rules",
        "B. Check reports filter",
        "C. Check the user's profile for object settings.",
        "D. Check organization-wide defaults",
        "E. Check the report folder sharing settings",
      ],
      answer: "A,C,D",
      title: "Question 3",
      explanation: "",
    },
    {
      content:
        "UVC sells to three different types of organizations. Partner, Enterprise, and Small Business. Some of the information collected about each organization overlaps; however, there are also unique attributes to each type of organization that need to be tracked, some of which are required. What Solution meets these requirements?",
      options: [
        "A. Three custom objects for the three organization types, each with custom fields that pertain to that type of organization",
        "B. Three Account record types, each with its own page layout to display the relevant fields for that type of organization",
        "C. A Partner Community for partner organization records, and two lead record types for Enterprise and Small Business organizations",
        "D. Three different sections on an Account page layout, with each section displaying the relevant fields for that organization.",
      ],
      answer: "B",
      title: "Question 4",
      explanation: "",
    },
    {
      content:
        "An app builder received a request to extend record access beyond the organization-wide defaults configured. Which two features satisfy this requirement?\nChoose 2 answers",
      options: [
        "A. Sharing Rules",
        "B. Permission Set Groups",
        "C. Public Groups",
        "D. Manual Sharing Rules",
      ],
      answer: "A,C",
      title: "Question 5",
      explanation: "",
    },
    {
      content:
        "Sales rep at universal containers use salesforce on their mobile devices. They want a way to add new contacts quickly and then follow up later to complete the additional information necessary. What mobile should an app builder recommend?",
      options: [
        "A. Customize the mobile menu to move contacts to the top",
        "B. Use path and set pre-defined values",
        "C. Build a global action to create contacts",
        "D. Add a compact layout to contacts",
      ],
      answer: "B",
      title: "Question 6",
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
      title: "Question 7",
      explanation:
        "Explanation: Check out the following link: MassMailer App Link on AppExchange https://appexchange.salesforce.com/listingDetail?listingId=a0N30000005uxj5EAA",
    },
    {
      content:
        "Universal container would like to use a chatter group for their mergers and acquisitions team to collaborate on potential new projects. This project should not be visible for non-members to see or join, and can be accessed by invites only.",
      options: [
        "A. Unlisted group",
        "B. Public group",
        "C. Member group",
        "D. Private group",
      ],
      answer: "A",
      title: "Question 8",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants to streamline its data capture process by linking fields together. They wish to do this so that the available value on dependents fields are driven by value selected on controlling fields. Which consideration supports the stated requirements? Choose 3 answers",
      options: [
        "A. The import wizard only allows value to be imported into a dependent picklist if they match the appropriate controlling field",
        "B. Standard and custom picklist fields can be dependent fields.",
        "C. Multi select picklist can be dependent picklist but not controlling fields",
        "D. Custom picklist field can be either controlling or dependent field",
        "E. Checkbox fields can be controlling fields but not dependent fields",
      ],
      answer: "C,D,E",
      title: "Question 9",
      explanation: "",
    },
    {
      content:
        "Sales manager at universal containers would like to standardize what information sales rep are gathering. Sales rep want recommendations, sales strategies and to know what key fields need to be completed at each step of the sales process on the opportunity record. What feature should an app builder use to provide this functionally?",
      options: [
        "A. Global Action",
        "B. Workflow",
        "C. Chatter feed",
        "D. Path",
      ],
      answer: "D",
      title: "Question 10",
      explanation: "",
    },
    {
      content:
        "UVC wants to optimize routes for its traveling service personnel. What is recommended solution?",
      options: [
        "A. Configure routing options in a custom object",
        "B. Use geolocation fields with Distance and Geolocation formulas",
        "C. Use an AppExchange partner product",
        "D. Configure Territory hierarchy and rules for routes based on territory",
      ],
      answer: "C",
      title: "Question 11",
      explanation: "",
    },
    {
      content:
        "What is a true statement in regard to creating custom report types?",
      options: [
        "A. When the primary object is a custom object and is deleted, then the report type and any reports created from it must be deleted manually",
        "B. Once a report type is saved with a standard or custom primary object, the primary object cannot be changed for the report type",
        "C. Any object can be chosen unless the object is not visible to the person creating the report type through security settings",
        "D. The detail object in a master-detail relationship cannot be added as a secondary object on a custom report type",
      ],
      answer: "B",
      title: "Question 12",
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
      title: "Question 13",
      explanation:
        "Explanation - The second master-detail relationship you create on your junction object becomes the secondary relationship. If you delete the primary master-detail relationship or convert it to a lookup relationship, the secondary master object becomes primary.\n https://help.salesforce.com/HTViewHelpDoc?id=relationships_considerations.htm&language=en_US",
    },
    {
      content:
        "Universal Containers needsto send an Outbound Message to an external system whenrecord has been updated.\nWhat is recommended feature to meet this requirement?",
      options: [
        "A. Visual Workflow",
        "B. Process Builder",
        "C. Workflow",
        "D. Lightning Connect",
      ],
      answer: "C",
      title: "Question 14",
      explanation: "",
    },
    {
      content:
        "UVC needs to send an outbound message to an external system when a record has been updated. What is the recommended feature to meet this requirement?",
      options: [
        "A. Visual Workflow",
        "B. Lightning Component",
        "C. Process Builder",
        "D. Workflow",
      ],
      answer: "D",
      title: "Question 15",
      explanation: "",
    },
    {
      content:
        "universal containers has 20 different workflows on the opportunity object. To ensure that updates are processing properly for all field updates uc has the re-evaluete workflow rules after field change checkbox checked. Recently after adding a new workflow, users have reported receiving errors about workflow limits. What should a app builder look at so address this?",
      options: [
        "A. Workflows that cause each other to fire back and forth recursively",
        "B. Workflows on other objects that are being re triggered",
        "C. Talk to a developer about apex code issues",
        "D. Number of workflows per object limits",
      ],
      answer: "A",
      title: "Question 16",
      explanation: "",
    },
    {
      content:
        "An app builder installed a custom Lightning component from AppExchange and has deployed My Domain.\nWhat should be done next in order to configure the component for use in a record page?",
      options: [
        "A. Edit a record page using the Page Layout editor > Drag the component onto the page.",
        "B. Edit a record page using App Manager > Drag the component onto the page.",
        "C. Edit a record page using the Page Layout editor > Drag the Visualforce component onto the page.",
        "D. Edit a record page using Lightning App Builder > Drag the component onto the page.",
      ],
      answer: "D",
      title: "Question 17",
      explanation: "",
    },
    {
      content:
        "Which two statements are true about an External ID field? Choose 2 answers",
      options: [
        "A. The field can be used to contain unique record identifiers from a system outside of Salesforce.",
        "B. The field can be unique based on case-sensitive or case-insensitive values.",
        "C. The field must contain at least one number and at least one letter.",
        "D. The field must be unique since duplicates are NOT allowed within Salesforce.",
      ],
      answer: "A,B",
      title: "Question 18",
      explanation: "",
    },
    {
      content:
        "An app builder would like to streamline the user experience by reflecting summarized calculations of specific fields on various objects. Which field types could be used in roll-up summary fields to accomplish this? Choose 3 answers",
      options: [
        "A. Checkbox",
        "B. Percent",
        "C. Date",
        "D. Currency",
        "E. Time",
      ],
      answer: "B,C,D",
      title: "Question 19",
      explanation: "",
    },
    {
      content:
        "Universal Containers is rolling out a new customer service process. Customer service managers will need to edit cases for their subordinates, but not cases for other groups. Managers and users should be able to view all cases. What is the recommended solution to configure this? Choose 2 answers",
      options: [
        "A. Set organization-wide sharing defaults to private.",
        "B. Create criteria-based sharing rules.",
        "C. Set organization-wide sharing defaults to public read/only.",
        "D. Create standard role hierarchies",
      ],
      answer: "C,D",
      title: "Question 20",
      explanation: "",
    },
    {
      content:
        "At Universal containers, all US Sales reps should be able to view the US Team dashboard, however, only the US sales directors should be able to see the data in the component and view its source report. How can an app builder ensure the proper access is granted?",
      options: [
        "A. Make the dashboard dynamic and give US Sales Reps the view my teams dashboard permission",
        "B. Share the dashboard with the public group US Sales Reps and share the dashboard source reports folder with the US Sales Director profile",
        "C. Share the dashboard folder with roles and subordinates of the US Sales Director and share the report folder with the role of US Sales Director",
        "D. Make the US Sales Director the running user and share the dashboard folder with the role US Sales Rep",
      ],
      answer: "B",
      title: "Question 21",
      explanation: "",
    },
    {
      content:
        'The Director of Customer Service wants to know when agents are overwhelmed with high-priority items in the support queue. The Director wants to receive a notification when a new case is open with the status of "New" for more than four business hours. Which automation process could be used to accomplish this? Choose 2 answers',
      options: [
        "A. Scheduled Apex",
        "B. Visual workflow",
        "C. Lightning Process Builder",
        "D. Escalation rules",
      ],
      answer: "C,D",
      title: "Question 22",
      explanation: "",
    },
    {
      content:
        "Universal Containers has purchased a Lightning Component on the Apple exchange.\nIn which two areas should Components be utilized?",
      options: [
        "A. Process Builder",
        "B. Salesforce Mobile App",
        "C. Flow Builder",
        "D. Standalone Lightning App",
      ],
      answer: "B",
      title: "Question 23",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks wants to make sure that users without the Marketing role are unable to update the Contact Retail Opt In picklist field to Yes.\nWhat validation rule would an app builder use to prevent other users from making this update?",
      options: [
        "A. AND( $UserRole.Name != 'Marketing', Retail_Opt_In_c = \"Yes\" )",
        "B. AND( $UserRole.Name = 'Marketing', ISPICKVAL(Retail_Opt_In_c,\"Yes\") )",
        "C. AND( $UserRole.Name != 'Marketing', ISCHANGED(Retail_Opt_In__c), ISPICKVAL(Retail_0pt_In_c,\"Yes\") )",
        "D. AND( $UserRole.Name = 'Marketing', Retail_Opt_In__c = \"Yes\" )",
      ],
      answer: "C",
      title: "Question 24",
      explanation: "",
    },
    {
      content:
        "Universal Containers has two types of applicants, hourly and salary. There are separate record types for each. While all members of the human resource department need to be able to view all applicant records, only the hiring Manager and VP of HR should be able to create salary applicant records.\nWhat should the app builder recommend to meet this requirement?",
      options: [
        "A. Configure the hourly record type as the default and instruct non-management users to accept the default record type.",
        "B. Update the org-wide default to private and create a sharing rule for the role of recruiting manager.",
        'C. Remove "create" permission for the salary applicant object for everyone except the manager and VP.',
        "D. Create a permission set containing the salary record type and assign it to the appropriate users.",
      ],
      answer: "D",
      title: "Question 25",
      explanation: "",
    },
    {
      content:
        "Universal Containers introduces a custom object called Service, which has a lookup to Account. Field enter Service using the Salesforce1 mobile app. Operators create new Service records when viewing Account name which needs to automatically display the current Account. How can this be accomplished?",
      options: [
        "A. Create an action in the Service object and add it to the Service page layout",
        "B. Create an action in the Account object and add it to the Service page layout.",
        "C. Create an action in the Account object and add it to the Account page layout.",
        "D. Create an action in the Service object and add it to the Account page layout",
      ],
      answer: "C",
      title: "Question 26",
      explanation: "",
    },
    {
      content:
        "Universal containers (uc) wants to delete data in several fields for 5000 lead records. UC export the selected record IDs and fields that need to have data deleted in a csv file. Which two steps should an app builder suggest to meet these requirements ? Choose 2 answers",
      options: [
        "A. Select the correct record type",
        "B. Use import Wizard to update leads using the CSV file",
        "C. Select insert null values in setting",
        "D. Use Data Loader to update leads using the CSV file",
      ],
      answer: "D",
      title: "Question 27",
      explanation: "",
    },
    {
      content:
        "A production org includes custom objects containing confidential information. A sandbox ix needed that includes data records, excludes all of the confidential objects, and can be refreshed weekly?",
      options: [
        "A. Create a developer sandbox and schedule data loader to download selected object data weekly.",
        "B. Create a full sandbox and use a sandbox template",
        "C. Create a developer pro sandbox and schedule loader to download selected object data weekly",
        "D. Create a partial copy sandbox and use a sandbox template",
      ],
      answer: "D",
      title: "Question 28",
      explanation: "",
    },
    {
      content:
        "A business user wants a quick way to edit a record's status and enter a custom due date field from the record's feed in Salesforce1 Mobile App. What could be used to accomplish this?",
      options: [
        "A. Custom Action",
        "B. Custom URL formula field",
        "C. Custom Button",
        "D. Custom quick access link",
      ],
      answer: "A",
      title: "Question 29",
      explanation: "",
    },
    {
      content:
        "Ursa Major Solar is ramping up the sales team to meet increased demand. As part of the short ramp up for these new reps, the manager wants to provide a help guide to enable reps to easily get help where needed during the different sales processes.\nWhich solution should an app builder recommend?",
      options: [
        "A. Journey Builder",
        "B. Path",
        "C. Flow",
        "D. Chatter Publisher",
      ],
      answer: "B",
      title: "Question 30",
      explanation: "",
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
      title: "Question 31",
      explanation:
        "https://help.salesforce.com/apex/HTViewHelpDoc?id=notes_on_changing_custom_field_types.htm&language=en_US If you change the data type of any custom field that is used for lead conversion, that lead field mapping will be deleted. You would have to recreate the field mapping, this satisfies the requirements.",
    },
    {
      content:
        "Universal Containers is using a custom app to record performance review info for their employees. The performance review should be visible to the employee and the employee's manager, as well as the HR director. How can this be configured? Choose 1 answer.",
      options: [
        "A. Set the org wide default for Performance Review to private and add a criteria based sharing rule to share performance review records with a public group that includes the employee managers and HR director",
        "B. Use manager sharing to enable sharing with the employee's manager and HR director",
        "C. Set the org wide default for Performance Review to private, do not use grant access using hierarchies and use manual sharing for the employee manager and HR director",
        "D. Set the org wide default for Performance Review to private and use grant access using hierarchies to give visibility to the employee's manager and HR director",
      ],
      answer: "C",
      title: "Question 32",
      explanation: "",
    },
    {
      content:
        'UVC uses a custom object to track site visits, When the status of a site visit ischanged from "in process " to "On hold " the business wants the site visit owner tobe automatically assigned to an "On hold " Queue. Which capability can be used toaccomplish this?',
      options: [
        "A. Action",
        "B. Visual workflow",
        "C. Assignment rule",
        "D. Apex Trigger",
      ],
      answer: "C",
      title: "Question 33",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks (CK) wants to set up a custom child object to track gift cards issued to a customer. A key requirement is to track the total number of gift cards opened and gift cards issued on an Account. CK wants to permanently ensure the gift cards are unable to be moved across any other Account once it is created.\nOn the gift card object, what type of field should be created to support this requirement?",
      options: [
        "A. Formula",
        "B. Lookup relationship",
        "C. Roll-up summary",
        "D. Master-detail relationship",
      ],
      answer: "D",
      title: "Question 34",
      explanation: "",
    },
    {
      content:
        "Universal Containers's app builder has been tasked with replacing workflow rules and Apex triggers with Process Builders where possible.\nWhat are two important considerations an app builder should know before the project is started?\nChoose 2 answers",
      options: [
        "A. Create a process for each workflow rule.",
        "B. Apex has a different SOQL query limit than Flow.",
        "C. Combine actions when possible.",
        "D. Avoid generating infinite loops.",
      ],
      answer: "C,D",
      title: "Question 35",
      explanation: "",
    },
    {
      content:
        "A junction object has two Master-Detail relationships. What happens to a junction object record when either associated master record is deleted?",
      options: [
        "A. The record is permanently deleted and can't be restored.",
        "B. The record is deleted and placed in the recycle bin.",
        "C. The look-up field on the junction object record is cleared.",
        "D. The master record can't be deleted if it has a child record.",
      ],
      answer: "B",
      title: "Question 36",
      explanation: "",
    },
    {
      content:
        "Sales reps at Universal Containers use Salesforce on their mobile devices. They want a way to odd new contacts quickly and then follow up later to complete the additional Information necessary.\nWhat mobile solution should an App Builder recommend?",
      options: [
        "A. Add a compact layout to Contacts.",
        "B. Build a global action to create Contacts.",
        "C. Customize the mobile menu to move Contacts to the top.",
        "D. Use Path and set pre-defined values",
      ],
      answer: "A",
      title: "Question 37",
      explanation: "",
    },
    {
      content:
        "When a user creates a record by using an object-specific create action, what feed item for that record appears? (Choose 3 answers)",
      options: [
        "A. In the user profile feed for all users who can view the record",
        "B. In the Chatter feed of the user who created the record",
        "C. In the feed for the record on which the new record was created",
        "D. As the first entry in the feed for the new record",
        "E. In the Chatter feed of the first user who follows the record on which the record was created",
      ],
      answer: "B,C,D",
      title: "Question 38",
      explanation: "",
    },
    {
      content:
        "Universal Containers allows all employees to submit reviews for leadership using a custom object called Review. These Reviews should only be visible to the HR department and the employee who submitted the record.\nWhich three steps should an app builder take to properly control access to Reviews?\nChoose 3 answers",
      options: [
        "A. Add a Master-Detail(User; field on the Review object.",
        "B. Remove Review Read permission from non-HR Department user Profiles.",
        "C. Create a criteria-based Sharing Rule for the HR Department.",
        "D. Disable Grant Access Using Hierarchies.",
        "E. Set organization-wide default to Private.",
      ],
      answer: "C,D,E",
      title: "Question 39",
      explanation: "",
    },
    {
      content:
        "Universal containers would like to use a chatter group for their mergers and acquisition team to collaborate on potential new projects. This group should not be visible for non-members to see or join, and can be accessed by invite only. Which chatter Group type should the App Builder recommend?",
      options: [
        "A. Unlisted Group",
        "B. Private Group",
        "C. Member Group",
        "D. Public Group",
      ],
      answer: "A",
      title: "Question 40",
      explanation: "",
    },
    {
      content:
        "Universal Containers stores invoices in SAP. Users want to view invoice data on the related Account records in Salesforce. How can this be achieved? Choose 2 answers",
      options: [
        "A. Create an external object connected to an invoice table in SAP.",
        "B. Use SAP data export functions to load data directly in Salesforce",
        "C. Connect to an OData Publisher Service for SAP databases",
        "D. Create a custom Invoice object and connect to SAP using Data Loader.",
      ],
      answer: "A,C",
      title: "Question 41",
      explanation: "",
    },
    {
      content:
        "What is a key consideration when using Unmanaged packages? Choose 2 answers",
      options: [
        "A. The person who created the Unmanaged package can change or upgrade installed components",
        "B. The person who created the Unamanged package has no control over the installed components",
        "C. A namespace is not required to create an Unamanged package",
        "D. A namespace is required to create an Unmanaged package",
      ],
      answer: "B,D",
      title: "Question 42",
      explanation: "",
    },
    {
      content:
        "DreamHouse Realty wants to import its property records from an external system into Salesforce. The app builder will use an external ID field to house the property ID from the external system.\nWhich two details should the app builder know when using external ID fields?\nChoose 2 answers",
      options: [
        "A. An external ID field can be a number field.",
        "B. An external ID field can be a phone field.",
        "C. An external ID field can be a text field.",
        "D. An external ID field can be a URL field.",
      ],
      answer: "A,C",
      title: "Question 43",
      explanation: "",
    },
    {
      content:
        "Universal Container want to store an area code and wants to be able to search for it in applications (apex). Which are possible fields to store the dat a. Choose 2",
      options: [
        "A. Multi Picklist",
        "B. Text",
        "C. Email",
        "D. Number",
        "E. Phone",
      ],
      answer: "B,D",
      title: "Question 44",
      explanation: "",
    },
    {
      content:
        "A customer service representative at Cloud Kicks wants to be able to collect information from customers using a prompts. Once the questions are completed, an email should be sent to the customer with a feedback form.\nWhat should be used to accomplish this?",
      options: [
        "A. Process Builder",
        "B. Apex Trigger",
        "C. Einstein Next Best Action",
        "D. Lightning Flow",
      ],
      answer: "D",
      title: "Question 45",
      explanation: "",
    },
    {
      content:
        "The CRM Manager at Universal Containers has requested that a custom text field be converted to a picklist in order to promote better data hygiene. What needs to be considered before changing the field type? Choose 2 answers",
      options: [
        "A. Changing a field type will remove existing field history.",
        "B. All data should be backed up before converting a text field.",
        "C. Field references will be removed in Visualforce pages",
        "D. Existing list views that reference the field may be deleted.",
      ],
      answer: "B,D",
      title: "Question 46",
      explanation: "",
    },
    {
      content: "Which object can be member of a campaign? (Choose 2)",
      options: ["A. Contact", "B. Lead", "C. Account", "D. Opportunity"],
      answer: "A,B",
      title: "Question 47",
      explanation: "",
    },
    {
      content:
        'Duplicate management for leads has been implemented at universal containers but it seems duplicate leads are still being created. The org wide default is set to "Private" for leads.\nWhich two actions help prevent duplicate leads from being created?\nChoose 2 answers.',
      options: [
        "A. Change OWD for leads for public read",
        "B. Change OWD for leads to public edit",
        "C. Change the lead matching rule to block on create",
        "D. Change the lead duplicate rule details to bypass sharing rules",
      ],
      answer: "C,D",
      title: "Question 48",
      explanation: "",
    },
    {
      content:
        "DreamHouse Realty (DR) has a policy that requires the phone number on Contact to be deleted when the DoNotCall checkbox is checked.\nWhat automation tool should the app builder recommend?",
      options: [
        "A. Quick action",
        "B. Workflow rule",
        "C. Validation rule",
        "D. Approval process",
      ],
      answer: "C",
      title: "Question 49",
      explanation: "",
    },
    {
      content:
        "Universal Containers (UC) maintains information for over 2 million assets in an external system. UC needs to access these assets in real-time data in Salesforce and is nearing the data storage limits.\nWhat feature could an app builder recommend UC use?",
      options: [
        "A. Data Loader",
        "B. Salesforce to Salesforce",
        "C. Salesforce Connect",
        "D. Data Export Wizard",
      ],
      answer: "A",
      title: "Question 50",
      explanation: "",
    },
    {
      content:
        "What the true statement is in regards to converting a tabular, summary, or matrix report to a joined report? Choose 3 answers",
      options: [
        "A. Cross filters are not supported in joined reports",
        "B. Report formula fields are nor supported in Joined reports",
        "C. The rows to display filter is not supported in Joined reports",
        "D. Bucket fields are not supported in joined reports.",
        "E. Joined report blocks are formatted as matrix reports.",
      ],
      answer: "A,C,D",
      title: "Question 51",
      explanation: "",
    },
    {
      content:
        "Which two places can an app builder go to see a list of available Custom Lightning components in their org?\nChoose 2 answers",
      options: [
        "A. Lightning App Builder",
        "B. Lightning component Generator",
        "C. Lightning components in Setup",
        "D. Visualforce components in Setup",
      ],
      answer: "A,C",
      title: "Question 52",
      explanation: "",
    },
    {
      content:
        "Ann app builder has been to display an overdue date that is two months after a tasks due date. Which approach should the app builder take?",
      options: [
        "A. Create a formula field using DueDate + 60",
        "B. Use process builder and set overdue date equal to DueDate + ((365/12)*2)",
        "C. Use process builder and set overdue Date equal to DueDate + 60",
        "D. Create a formula field using the ADDMONTHS () function",
      ],
      answer: "D",
      title: "Question 53",
      explanation: "",
    },
    {
      content:
        "What is a true statement in regards to managing access to reports and dashboards? Choose 2 answers",
      options: [
        'A. Users with the "Manage Public Reports" permission can organize reports by creating custom report folders and sending invitations to users to access them.',
        "B. Users that want to grant access to personal folders can manually share a personal folder with a user or public group.",
        'C. Users with the "Manage Public Reports" and "Create and Customize Reports" permissions can create custom reports that all users can view.',
        "D. Users must have certain permissions to access public, hidden, or shared folder.",
      ],
      answer: "A,C",
      title: "Question 54",
      explanation: "",
    },
    {
      content:
        "What should be done to provide managers access to records of which they are not the owner in a private sharing model?",
      options: [
        "A. Define a Role Hierarchy and use the Grant Access Using Hierarchies option",
        "B. Set the Manger field for each User Record on the Manager's team.",
        'C. Create a Manager profile and select the "View My Teams Data" option.',
        'D. Create a Manager Permission set and select the "View All Data" option',
      ],
      answer: "D",
      title: "Question 55",
      explanation: "",
    },
    {
      content: "What is recommended to refresh a fullsandbox?",
      options: [
        "A. After a major production release.",
        "B. After UAT sign-off.",
        "C. Within 3 hours of when it is needed.",
        "D. Whenever a new production used is added.",
      ],
      answer: "B",
      title: "Question 56",
      explanation: "",
    },
    {
      content:
        "What should an app builder consider when choosing a template for a new Lightning record page?",
      options: [
        'A. To view the record page, users need "View All Data" permissions for the object.',
        "B. The template is unable to be changed after the initial save.",
        "C. A Page structure will automatically adapt to the device being used to view the record page.",
        "D. Select a new template for each type of device users use to view the record page.",
      ],
      answer: "C",
      title: "Question 57",
      explanation: "",
    },
    {
      content: "What is a use case for validation rules?",
      options: [
        "A. Prevent non-managers from joining a private Chatter Group",
        "B. Ensure zip/postal codes are entered in the correct format",
        "C. Prevent deals with less than a 10% discount from entering an approval process",
        "D. Restrict partner Lead visibility to the channel sales team",
      ],
      answer: "B",
      title: "Question 58",
      explanation: "",
    },
    {
      content:
        "Universal con needs a field on the account to track how many opportunitiesare closing within the next 30 days. What can be used?",
      options: [
        "A. Apex code",
        "B. Process builder",
        "C. Roll-up summary field",
        "D. Workflow rule",
      ],
      answer: "A",
      title: "Question 59",
      explanation: "",
    },
    {
      content:
        "universal containers has several new fields they requested for the opportunity product object. What should an app builder be able to configure using a formula field ?",
      options: [
        "A. A combination of the opportunity`s text and a description fields.",
        "B. A hyperlink to the parent account of the parent opportunity.",
        "C. A mix of functions and concatenation of 10 account fields and 10 opportunity fields.",
        "D. A Rich text area field that uses HTML to bold certain characters",
      ],
      answer: "D",
      title: "Question 60",
      explanation: "",
    },
    {
      content:
        "How should an app builder configure access to a contact's Twitter profile for Salesforce mobile app users?",
      options: [
        "A. Add the Twitter component to mobile view Lightning pages.",
        "B. Add a Twitter Quick Action to the mobile navigation.",
        "C. Add a formula field to the Contact page layout.",
        "D. Add an AppExchange Lightning Component to the mobile app.",
      ],
      answer: "A",
      title: "Question 61",
      explanation: "",
    },
    {
      content:
        "Universal container has a custom object for shipping information. They have to ship to both businesses and consumers. They need to show additional values in the custom field called insurance type for business shipping records. How can this be set up?",
      options: [
        "A. Use Record type with single page layout.",
        "B. Create multiple picklist fields on the object",
        "C. Create a multi-select pick-list field.",
        "D. Use record types with multiple page layout",
      ],
      answer: "C",
      title: "Question 62",
      explanation: "",
    },
    {
      content: "What is a use case for approval processes? Choose 2 answers.",
      options: [
        "A. Ensure an opportunity that has at least one product added.",
        "B. Approve expense reports automatically when less than $50.",
        "C. Require the CFO to review the salary range for all job offers.",
        "D. Update the PTO record field with the user's manager.",
      ],
      answer: "B,C",
      title: "Question 63",
      explanation: "",
    },
    {
      content:
        "Sales and marketing users have similar roles, and use similar record types. However sales uses 3 different fields and marketing has 5, how do you set up processes the most efficiently (something like that)",
      options: [
        "A. 2 page layouts, 2 record types, 2 profiles",
        "B. 2 page layouts, 1 record type, 2 profiles",
        "C. 1 page layout, 2 record types, 2 profiles",
        "D. 1 page layout, 1 record type, 1 profile",
      ],
      answer: "B",
      title: "Question 64",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants sales reps to get permission from their managers before deleting Opportunities, What can be used to meet these requirements?",
      options: [
        "A. Two-step Approval Process.",
        "B. Approval Process with Time-Dependent Workflow action.",
        "C. Approval Process with a triggered Flow process.",
        "D. Process Builder with Submit for Approval action.",
      ],
      answer: "A",
      title: "Question 65",
      explanation: "",
    },
    {
      content:
        "A Service Coordinator (SC) for Ursa Major Solar (UMS) does a final review of work orders owned by a technician for a specific region before the records are submitted for an invoice. Before closing out the work order, the SC needs to modify data or remove attachments that were added by mistake. The SC also needs access to any other related records owned by the technician.\nWhat solution would provide the required access, given a private data model?",
      options: [
        "A. Create a workflow rule that updates records owned by technicians in that region with the SC.",
        "B. Give the SC a permission set with the Modify All Data system permission.",
        "C. Put the SC in the role hierarchy above the technicians whose work orders they review.",
        "D. Change work order access on the SC's profile to 'Modify AIl.",
      ],
      answer: "C",
      title: "Question 66",
      explanation: "",
    },
    {
      content:
        "An app builder needs a custom solution and is considering using community. Ease of updates is the primary consideration.\nWhat should the app builder consider?",
      options: [
        "A. An unmanaged package from AppExchange",
        "B. A managed package from AppExchange",
        "C. An open-source custom development",
        "D. An open-source unmanaged package",
      ],
      answer: "B",
      title: "Question 67",
      explanation: "",
    },
    {
      content:
        "Which two features can extend record access beyond the organization-wide defaults?",
      options: [
        "A. Owner-based sharing rules",
        "B. Public or private groups",
        "C. Criteria-based sharing rules",
        "D. Dynamic role hierarchy",
      ],
      answer: "A,C",
      title: "Question 68",
      explanation: "",
    },
    {
      content:
        'A custom object named assignment has a private sharing setting that grantsaccess using hierarchies. The organization has a role hierarchy where the"Specialist" role reports to a "Manager" role which reports to a "Director" role. TheDirector role is at the top of the role hierarchy. A user who is in the manager rolecreate a new assignment record. Who can see this record?',
      options: [
        "A. The record owner and the directors in their Hierarchy.",
        "B. The record owner and the managers in their hierarchy.",
        "C. The record owner q in their hierarchy.",
        "D. The record owner and the specialists in their hierarchy.",
      ],
      answer: "A",
      title: "Question 69",
      explanation: "",
    },
    {
      content:
        "Universal containers has included its orders as an external data object into Salesforce. You want to create a relationship between Accounts and the Orders object (one-to-many relationship) leveraging a key field for account which is on both external object and Account. Which relationship do you create:",
      options: [
        "A. Indirect Lookup Relationship",
        "B. Lookup Relationship",
        "C. External Lookup Relationship",
        "D. Master Detail Relationship",
      ],
      answer: "A",
      title: "Question 70",
      explanation: "",
    },
    {
      content:
        "The convert button on leads should NOT appear until the lead status picklist is set to a qualified. What should an app builder suggest to meet these requirements?",
      options: [
        "A. Process builder field update, quick action, record type",
        "B. Page layout, record types, process builder field update",
        "C. Picklist dependency, page layouts, record types",
        "D. Custom button, validation rule, record types",
      ],
      answer: "C",
      title: "Question 71",
      explanation: "",
    },
    {
      content:
        "Which two features can be used to allow users to access Visual Workflows? Choose 2 answers",
      options: [
        "A. Quick Action",
        "B. Custom Button",
        "C. Invoked by Process",
        "D. Visual Workflow Launcher",
      ],
      answer: "A,B",
      title: "Question 72",
      explanation: "",
    },
    {
      content:
        "An App Builder wants to deploy a new version of an auto launched flow to production in an active state so that the new functionality Is immediately available to users What should the App Builder rake Into consideration when planning the deployment?",
      options: [
        "A. Verify there is an Apex test that provides test coverage for the Flow.",
        "B. Include the Process Builder calling the Flow In the deployment",
        "C. Manually activate the Flow after deployment",
        "D. Grant user access to the Flow.",
      ],
      answer: "A",
      title: "Question 73",
      explanation: "",
    },
    {
      content:
        "A recently refreshed partial sandbox at Cloud Kicks has no data In the custom object Shipping. Checking In production, there are two million rows of data in the object.\nWhat could be the reason the data Is missing?",
      options: [
        "A. The Partial sandbox is at capacity.",
        "B. The selected objects in the sandbox template.",
        "C. The sandbox was refreshed too early.",
        "D. The sandbox is still populating data.",
      ],
      answer: "B",
      title: "Question 74",
      explanation: "",
    },
    {
      content:
        "A sales manager would like to look at an account record and view charts of all of the related open opportunities. Closed/won opportunities, and open cases. How many report charts can be added to the account page layout to meet this requirement?",
      options: ["A. 3", "B. 2", "C. 1", "D. 4"],
      answer: "B",
      title: "Question 75",
      explanation:
        "You can have two report charts per page.\n You can only add report charts from the enhanced page layout editor. The mini console and the original page layout editor are not supported.\n On detail pages, users can refresh up to 100 report charts every 60 minutes.\n Your organization can refresh up to 3,000 report charts every 60 minutes.\n https://help.salesforce.com/HTViewHelpDoc?id=reports_embed_limits.htm&language=en_US",
    },
    {
      content:
        "An app builder wants to update a field on the parent record when a child record connected via lookup is deleted.\nWhat automation should the app builder use?",
      options: [
        "A. Workflow rule",
        "B. Process Builder",
        "C. Apex code",
        "D. Screen flow",
      ],
      answer: "C",
      title: "Question 76",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks (CK) tracks the support level of its customers on the account record page. CK wants to show a text notification on a case record page when the related account is a platinum-level customer.\nHow could an app builder meet this requirement?",
      options: [
        "A. Add a rich text area to the Case Lighting page > Set the component visibility of the rich text area to show when the account support level is platinum.",
        "B. Clone the Case Lightning page > Add a rich text area to the new page, and assign this page to platinum accounts.",
        "C. Create a text-only Visualforce page > Drag the Visualforce component into the Case page layout > Set its visibility to show when the account support level is platinum.",
        "D. Create a text-only Visualforce page > Clone the case page layout > Drag the Visualforce component into the page, and assign the layout to platinum cases.",
      ],
      answer: "A",
      title: "Question 77",
      explanation: "",
    },
    {
      content:
        "UVC wants their Field Sales team to only see the accounts that they own. Separate North American and European marketing teams should only see accounts in their respective regions. The Inside Sales Team needs to see all accounts in Salesforce. How can this be accomplished?",
      options: [
        'A. Set the OWD to Private for all accounts. Create Criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team Profile with the "View All" setting for accounts',
        'B. Set the OWD to Private for accounts. Create permission sets for each Marketing team, and create an Inside Sales team profile with the "View All" setting for accounts',
        'C. Set the OWD to Public for all accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team permission set with the "View All" settings for accounts',
        "D. Set the OWD to Public for accounts. Create profiles for each Marketing team, and create an Inside Sales Team role that is at the top of the Role Hierarchy",
      ],
      answer: "A",
      title: "Question 78",
      explanation: "",
    },
    {
      content:
        "Universal Containers is setting up Salesforce for the first time. Management wants the sales and marketing have different navigation menus in the Salesforce 1 mobile app. Which option is available for an App Builder to satisfy this requirement?",
      options: [
        "A. Create roles for sales and marketing and assign a custom home page layout for each profile",
        "B. Create mobile navigation menus for both sales and marketing profile ",
        "C. Create public group for Sales and Marketing and create mobile navigation menus for each group",
        "D. Create mobile navigation menus for both sales and marketing profile",
      ],
      answer: "B",
      title: "Question 79",
      explanation: "",
    },
    {
      content:
        "Which two report formats can be used as a source report to configure a reporting snapshot? Choose 2 answers",
      options: [
        "A. Summary format",
        "B. Joined format",
        "C. Tabular format",
        "D. Matrix format",
      ],
      answer: "A,D",
      title: "Question 80",
      explanation: "",
    },
    {
      content:
        "For which report types custom summary formulas are available? (Choose 3)",
      options: ["A. Tabular", "B. Joined", "C. Matrix", "D. Summary"],
      answer: "B,C,D",
      title: "Question 81",
      explanation: "",
    },
    {
      content:
        "How would you ensure that records of a particular object are visible only to the user, and users higher in the role hierarchy? choose 2 answers.",
      options: [
        "A. Set org wide sharing default for the object as manager view",
        "B. Set org wide sharing default for the object as private",
        "C. Define a profile list",
        "D. Define a role hierarchy",
      ],
      answer: "B,D",
      title: "Question 82",
      explanation: "",
    },
    {
      content:
        "Which two solutions prevent a formula field from being referenced by a Roll-Up Summary Field?",
      options: [
        "A. The CASE() function in the formula field",
        "B. A cross-object field reference in the formula field",
        "C. A cross-object workflow updating a field referenced by the formula field",
        "D. The NOW() function in the formula field",
      ],
      answer: "A,C",
      title: "Question 83",
      explanation: "",
    },
    {
      content:
        "What is true when changing the following field types? (Choose 3)",
      options: [
        "A. Rollup summary fields will stop calculate if Master Detail is changed to lookup",
        "B. No data is lost when converting Text to auto number",
        "C. No data is lost when changing Picklist to Multipicklist",
        "D. Data is lost when changing Number to Currency",
        "E. Data can be lost when changing from Rich Text to Long Text",
      ],
      answer: "B,C,E",
      title: "Question 84",
      explanation: "",
    },
    {
      content:
        "Universal container needs to update a field on an account when an opportunity stage is changed to close lost. What can be used to accomplish this requirement? Choose 2",
      options: [
        "A. Assignment Rules",
        "B. Lightning Process Builder",
        "C. Approval Process",
        "D. Workflow Rule",
      ],
      answer: "B,D",
      title: "Question 85",
      explanation: "",
    },
    {
      content:
        "To Synchronize Accounts, orders and shipments in real time, a developer has built a custom interface between an external system and salesforce, prior to deployment, the developer needs to confirm that the interface can sustain the syncing of thousands of records at a time. Which sandbox environment is recommended to complete performance and load testing?",
      options: [
        "A. Developer Sandbox",
        "B. Partial Sandbox",
        "C. Developer Pro Sandbox",
        "D. Full Sandbox",
      ],
      answer: "D",
      title: "Question 86",
      explanation: "",
    },
    {
      content:
        "Universal Containers needs the 18-digit record ID from Opportunity records when exporting data to Excel in order to ensure each record is treated uniquely.\nWhat formula should an app builder use to create this new field?",
      options: [
        "A. ISNUMBER(Id)",
        "B. TEXT(Id)",
        "C. VALUE(Id)",
        "D. CASESAFEID(Id)",
      ],
      answer: "D",
      title: "Question 87",
      explanation: "",
    },
    {
      content:
        "An App Builder at UVC would like to prevent users from creating new records on an Account related list by overriding standard buttons. Which two should the App Builder consider before overriding standard buttons?",
      options: [
        "A. Standard buttons can be changed on lookup dialogs, list views, and search result layouts",
        "B. Standard buttons can be overridden with a Visualforce page",
        "C. Standard buttons can be overridden, relocated on the detail page, and relabeled",
        "D. Standard buttons that are not available for overrides can still be hidden on page layouts",
      ],
      answer: "B,D",
      title: "Question 88",
      explanation: "",
    },
    {
      content:
        "At Ursa Major Solar there is a requirement for a new field called Planet Details on the Planet object where users can write detailed descriptions that can include pictures and links.\nWhat field type should the app builder utilize to fulfill this requirement?",
      options: [
        "A. Rich Text Area",
        "B. Multi-Select Picklist",
        "C. URL",
        "D. Long Text Area",
      ],
      answer: "A",
      title: "Question 89",
      explanation: "",
    },
    {
      content:
        "universal containers is migrating its sales operations from a legacy system that was used. opportunities need to be imported with the proper country currency. Which two steps should an app builder configure to meet these requirements ?\nChoose 2 answers.",
      options: [
        "A. Use Import Wizard to import the records.",
        "B. Use import the currency ISO Code Column in the import file.",
        "C. Include the currency ISO Code Column in the import file.",
        "D. Use Data Loader to import the records.",
        "E. Include the currency ISO code in all currency fields in the import file.",
      ],
      answer: "B,C",
      title: "Question 90",
      explanation: "",
    },
    {
      content:
        "Universal Containers needs a field on the Account to track how many Opportunities are closing within the next 30 days. What can be used to accomplish this goal?",
      options: [
        "A. Process Builder",
        "B. Apex Code",
        "C. Roll-up Summary Field",
        "D. Workflow Rule",
      ],
      answer: "C",
      title: "Question 91",
      explanation: "",
    },
    {
      content:
        "An app builder wants to streamline the user experience by reflecting summarized calculation of specific fields on various objects.\nWhich three fields types should be used in roll-up summary fields to accomplish this?\nChoose 3 answer",
      options: [
        "A. Currency",
        "B. Date",
        "C. Time",
        "D. Percent",
        "E. Checkbox",
      ],
      answer: "A,B,D",
      title: "Question 92",
      explanation: "",
    },
    {
      content:
        "At Universal Containers, each admin and developer use a separate developer pro sandbox. Configuration and code are then migrated to a partial data sandbox for combination and initial testing. Once approved the configuration and code are then migrated to a full sandbox for final toad and regression testing before going to production.\nWhen should the full sandbox be refreshed?",
      options: [
        "A. After each major release to production.",
        "B. After each push from the partial data sandbox.",
        "C. After a new user is added to production.",
        "D. After user acceptance testing is complete.",
      ],
      answer: "B",
      title: "Question 93",
      explanation: "",
    },
    {
      content:
        "DreamHouse Realty (DR) has many properties for sale and wants to identify the highest value of all Offer__c records on each Property__c record.\nWhat solution should the app builder use to meet DreamHouse Realty's needs?",
      options: [
        "A. Text Area (Long)",
        "B. Multi-select Pickllst",
        "C. Lookup Object",
        "D. Master-Detail Child Object",
      ],
      answer: "D",
      title: "Question 94",
      explanation: "",
    },
    {
      content:
        "An app builder is preparing to deploy a new app from the sandbox to production using change sets.\nWhat two considerations should an app builder keep in mind during this process?\nChoose 2 answers",
      options: [
        "A. Salesforce Connect automatically establishes a link between environments.",
        "B. Users should be logged out of production when receiving inbound change sets.",
        "C. Transactions will revert if the deployment errors.",
        "D. Change sets do not include all components and may have to perform some changes manually.",
      ],
      answer: "C,D",
      title: "Question 95",
      explanation: "",
    },
    {
      content:
        "The services manager wants to make sure the team enters case priority consistently.\nWhat feature can an app builder use to accomplish this?",
      options: [
        "A. Flow",
        "B. In-App Guidance",
        "C. Path",
        "D. Next Best Action",
      ],
      answer: "B",
      title: "Question 96",
      explanation: "",
    },
    {
      content: "What is a capability of schema builder? (Select 2)",
      options: [
        "A. To enable field history tracking on standard objects",
        "B. To modify custom field help text on standard objects",
        "C. To update descriptions of standard and custom objects",
        "D. To create new lookup or master-detail object relationships",
      ],
      answer: "B,D",
      title: "Question 97",
      explanation: "",
    },
    {
      content: "When should Unmanaged packages be created? Choose 2 answers",
      options: [
        "A. Deploying from a Developer Edition environment.",
        "B. Distributing open-source projects on AppExchange",
        "C. Publishing an application for sale on the AppExchange.",
        "D. Migrating of components from sandbox to production",
      ],
      answer: "A,B",
      title: "Question 98",
      explanation: "",
    },
    {
      content:
        "Universal containers created a custom object called component to capture details about products sold. what approach should an app builder take to show component as a related list on product?",
      options: [
        "A. Created junction object to relate component and product. Add the component related list to the product page layout.",
        "B. Create a roll-up on product. Add the component related list to the product page layout.",
        "C. Create a master-detail- relationship on product to component. Add the component related list to the product page layout.",
        "D. Create a lookup relationship on component to product . Add the component related list to the product page layout.",
      ],
      answer: "A",
      title: "Question 99",
      explanation: "",
    },
    {
      content:
        "Universal containers has a custom picklist called support level on the account object. They would like to show the real time value of support level on all case records. How can an app builder implement this requirement?",
      options: [
        "A. Create a process builder and use a field update on the case object.",
        "B. Create a formula field on the account object using the ISPICKVAL function",
        "C. Create a formula field on the case object using the TEXT function.",
        "D. Create a roll-up summary field using support level on the account object",
      ],
      answer: "A",
      title: "Question 100",
      explanation: "",
    },
    {
      content:
        "What is a true statement in regards to creating custom report types?",
      options: [
        "A. When the primary object is a custom object and is deleted, then the report type and any reports created from it must be deleted manually.",
        "B. The detail object in a master- detail relationship cannot be added as a secondary object on a custom report type",
        "C. Once a report type is saved with a standard or custom primary object, the primary object cannot be changed for that report type.",
        "D. Any object can be chosen unless the object is no visible to the person creating the report type through security settings",
      ],
      answer: "C",
      title: "Question 101",
      explanation:
        "Explanation: You can choose from all objects-even those you don't have permission to view. This lets you build report types for a variety of users. Once you save a report type, you can't change the primary object. If the primary object on a report type is a custom object, and the custom object is deleted, then the report type and any reports created from it are automatically deleted. If you remove an object from a report type, all references to that object and its associated objects are automatically removed from reports and dashboards based on that type. http://help.salesforce.com/apex/htviewhelpdoc?id=reports_defining_report_types.htm&language=en_us",
    },
    {
      content:
        "The developer at Universal Containers wants to test code in a sandbox environment. In order to ensure the code works properly, the sandbox needs to have at least half a gigabyte of dat a. The sandbox will need to be refreshed after each three-day sprint.\nWhat type of sandbox should the App Builder provision to the developer?",
      options: [
        "A. Developer Pro",
        "B. Partial Data",
        "C. Full Copy",
        "D. Developer",
      ],
      answer: "A",
      title: "Question 102",
      explanation: "",
    },
    {
      content:
        "What is true regarding the user interface for external object data? Choose 1 answer.",
      options: [
        "A. External object data can be accessed via detail pages",
        "B. External object data can be accessed via custom tabs",
        "C. All of the above",
        "D. External object data can be accessed via lists views",
        "E. Chatter Feeds can be enabled on external object pages",
      ],
      answer: "C",
      title: "Question 103",
      explanation: "",
    },
    {
      content:
        'Universal Containers uses a custom object to track Site Visits. When the status of a Site Visit is changed from "In Progress" to "On Hold", the business wants the Site visit owner to be automatically assigned to an "On Hold" queue. Which capability can be used to accomplish this?',
      options: [
        "A. Apex Trigger",
        "B. Action",
        "C. Assignment Rule",
        "D. Visual Workflow",
      ],
      answer: "C",
      title: "Question 104",
      explanation: "",
    },
    {
      content:
        "DreamHouse Realty is rethinking its sandbox utilization strategy after acquiring Cloud Kicks. The Salesforce COE already utilizes a partial and a full sandbox, which it refreshes on their own regular schedules. Teams are expanding and have to begin each of their small projects in a sandbox before committing to the larger pool for collaborative testing while still keeping costs down.\nWhat type of sandbox should each team member use?",
      options: [
        "A. Full sandbox",
        "B. Developer sandbox",
        "C. Developer pro sandbox",
        "D. Partial sandbox",
      ],
      answer: "B",
      title: "Question 105",
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
      answer: "B,D",
      title: "Question 106",
      explanation:
        "Explanation: https://developer.salesforce.com/docs/atlas.enus.salesforce1appadmin.meta/salesforce1appadmin/s1_admin_guide_actions_predef_values.ht m https://help.salesforce.com/apex/HTViewHelpDoc?id=customize_sf1_rollout_overview.htm&la nguage=en_US",
    },
    {
      content:
        "A manager wants to calculate the number of days since an account was last contacted through email. Which field type should be used to accomplish this?",
      options: ["A. Formula", "B. Number", "C. Roll-up Summary", "D. Date"],
      answer: "A",
      title: "Question 107",
      explanation: "",
    },
    {
      content:
        "An app builder has a custom component they want to make available on the utility bar, but the component is unavailable.\nHow should the component be tagged?",
      options: [
        "A. For use in Lightning App Builder.",
        "B. For use on record pages.",
        "C. For use on the utility bar.",
        "D. For use in App Manager.",
      ],
      answer: "A",
      title: "Question 108",
      explanation: "",
    },
    {
      content: "Which statement about record types is true? (Select 2)",
      options: [
        "A. The ability to create records of a specific record type is determined by the profile",
        "B. Record types can be used to define picklist values available for a given field",
        "C. Users cannot view records assigned to a record type their profile does not have access to",
        "D. Record types can only be assigned to one profile at a time",
      ],
      answer: "A,B",
      title: "Question 109",
      explanation: "",
    },
    {
      content: "In order to delete a record smth needs to be approved.",
      options: [
        "A. Option 3",
        "B. Approval with Workflow",
        "C. Approval with Apex Trigger",
        "D. Option 4",
      ],
      answer: "C",
      title: "Question 110",
      explanation: "",
    },
    {
      content:
        "Universal containers needs to flag leads with one or more business areas. They need to add a field to capture these to the lead records. There is no need to report on this field. What is the appropriate field type?",
      options: [
        "A. Picklist (multi-select)",
        "B. Picklist",
        "C. Radio Buttons(multi-select)",
        "D. Text Area",
      ],
      answer: "A",
      title: "Question 111",
      explanation: "",
    },
    {
      content:
        "What data type can be used to summarizeroll-up summary. (Choose 3)",
      options: [
        "A. Number",
        "B. Percent",
        "C. Currency",
        "D. Date",
        "E. Formula",
      ],
      answer: "A,B,C",
      title: "Question 112",
      explanation: "",
    },
    {
      content:
        "Universal Containers manages internal projects by department using a customobject called projects. Only employees in the project's respective departmentshould have view access to all of the department's project records. If an employeechanges job roles and moves to another department, the employee should nolonger have access to the projects within their former department. How can theserequirements be met assuming the organization wide default for projects is set to private? (Choose 2)",
      options: [
        "A. Create a criteria-based sharing rule using the project's department that grants access to users by profiles.",
        "B. Create a criteria-based sharing rule using the project's department that grants access to users by roles.",
        "C. Create a criteria-based sharing rule using the project's department that grants access to users by permission sets.",
        "D. Create a criteria-based sharing rule using the project's department that grants access to users by public groups.",
      ],
      answer: "B,D",
      title: "Question 113",
      explanation: "",
    },
    {
      content:
        "The director of marketing has asked the app builder to create a formula field that tracks how many days have elapsed since a contact was sent a marketing communication. The director is only interested in whole units. Which function should be used to calculate the difference?",
      options: ["A. Date()", "B. Now()", "C. Datevalue()", "D. Today()"],
      answer: "D",
      title: "Question 114",
      explanation: "",
    },
    {
      content:
        "An app builder wants to limit the amount of fields users are required to fill out when creating a new Opportunity. Once they fill out the required fields and save, the full record page with additional fields relevant to the Opportunity type becomes available.\nHow could this be accomplished?",
      options: [
        "A. Use different page layouts for Opportunity types based on the user profile.",
        "B. Make the Opportunity type a required field on the initial Opportunity page layout and use automation to fill in the type field to a record type.",
        "C. Hide additional sections on the page layout and show the users how to manually expand them when they want to fill in the fields in the hidden sections.",
        "D. Once the required fields are populated, use a sharing rule to share the new fields with the user.",
      ],
      answer: "B",
      title: "Question 115",
      explanation: "",
    },
    {
      content:
        "Universal Containers uses a custom picklist called Account_Region__c on the Account object. The vice president of sales has asked that the value of this field is visible on Opportunities.\nHow should an app builder create this solution?",
      options: [
        "A. Cross-object formula field",
        "B. Field history tacking",
        "C. Field-level security",
        "D. Lookup field",
      ],
      answer: "B",
      title: "Question 116",
      explanation: "",
    },
    {
      content:
        "What type of field can be used to filter a Report Chart that has been added to a Page Layout?",
      options: [
        "A. Formula Field",
        "B. Matching ID Field",
        "C. Standard Field",
        "D. Name Field",
      ],
      answer: "B",
      title: "Question 117",
      explanation: "",
    },
    {
      content:
        "UVC has two types of customer support processes: Platinum and Diamond. The App Builder created separate record types for each process on the Case Object. The customer support team should not be able to create new cases with the Diamond record type. How can this requirement be met?",
      options: [
        "A. Make the record type hidden to all users and then use sharing rules to share it",
        "B. Update the profile to remove the Diamond record type from the support team",
        "C. Remove the ability for the support team to create new case records",
        "D. Update the OWD to private",
      ],
      answer: "B",
      title: "Question 118",
      explanation: "",
    },
    {
      content: "Which report types may be used with Analytic Snapshots?(2)",
      options: ["A. Summary", "B. Matrix", "C. Tabular", "D. Joined"],
      answer: "A,C",
      title: "Question 119",
      explanation: "",
    },
    {
      content:
        "Service agents at Ursa Major Solar want a more condensed case view. Service agents also want to be able to modify the associated contact and account records from the case page layout on the Lightning record page.\nWhich two components should an app builder use to meet these requirements?\nChoose 2 answers",
      options: ["A. Related record", "B. Path", "C. Rich text", "D. Tabs"],
      answer: "A,D",
      title: "Question 120",
      explanation: "",
    },
    {
      content:
        "The VP of Sales at Universal Containers has requested that Sales reps be given access to view all Accounts in Salesforce. However, they've also requested that sales reps only be allowed to create new Opportunities on Accounts they own. How can this requirement be met?",
      options: [
        "A. Create an Opportunity Validation Rule that compares the Opportunity and Account Owners",
        "B. Set the Organization-Wide Defaults sharing on Opportunities to Private and recalculate sharing.",
        "C. Create a new Opportunity Quick Action that validates Account ownership.",
        "D. Set the Organization-Wide Defaults sharing on Opportunities to Controlled by Parent.",
      ],
      answer: "D",
      title: "Question 121",
      explanation: "",
    },
    {
      content:
        "Universal Containers uses Contracts for agreements with customers. A sales manager is required to provide approval for contracts and director approval for any contract over $10,000.\nWhich two options should an app builder use to ensure all contracts route for the correct approval and also prevent the sales rep from making changes to the record while it is being approved7 Choose 2 answers",
      options: [
        "A. Create an approval process on the Contract object with criteria set on a second approval step set as 'Amount__c > 10,000' and set the approver as director.",
        "B. Create an approval process on the Contract object and set the field for 'Next Automated Approver Determined By' as Manager'.",
        "C. Create a validation rule on the Contract object that prevents updates to the contract record while it is being reviewed.",
        "D. Create an approval process on the Contract object with one step for each sales manager that sets the approver as the director.",
      ],
      answer: "A,B",
      title: "Question 122",
      explanation: "",
    },
    {
      content:
        "Universal Containers implemented an application process that uses custom objects Internships and Applications. The organization-wide default for Internships has been set to private and is the master in the master-detail relationship with Applications. The VP of HR wants to allow edit access to Applications to recruiters.\nHow should an app builder configure the proper access?",
      options: [
        "A. Create a queue for the web applications and assign access to the users who will be editing the records.",
        "B. Add a sharing rule that grants the users Read/Write access to the Internship records.",
        "C. Create a sharing rule that grants the users Read/Write access to the Application records.",
        "D. Set the organization-wide default on the Applications object to Read/Write.",
      ],
      answer: "C",
      title: "Question 123",
      explanation: "",
    },
    {
      content:
        "Universal con has purchased a lighting component on the appExchange. Where can that component be utilized? (Choose 2)",
      options: [
        "A. Salesforce1 mobile app",
        "B. Visual workflow",
        "C. Salesforce lighting app",
        "D. Lightning process builder",
      ],
      answer: "A,C",
      title: "Question 124",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks wants to set up a new opportunity approval process and execute various action items based on the initial submission.\nWhich three action types should an app builder use in the approval process?\nChoose 3 answers",
      options: [
        "A. Invocable Flow",
        "B. Task",
        "C. Invocable Process Builder",
        "D. Outbound Message",
        "E. Email Alert",
      ],
      answer: "B,D,E",
      title: "Question 125",
      explanation: "",
    },
    {
      content:
        "UVC needs to update a field on an Account when an Opportunity Stage is changed to Closed-Lost. Which two should be used to accomplish this requirement? Choose two answers",
      options: [
        "A. Approval Process",
        "B. Process Builder",
        "C. Assignment Rule",
        "D. Workflow Rule",
      ],
      answer: "B,D",
      title: "Question 126",
      explanation: "",
    },
    {
      content:
        "UC would like to automatically assign a specific permission set to new users. How can they do that?",
      options: [
        "A. Create a workflow rule on the user object to assign a permission set",
        "B. Create a flow on the user object to assign permission set",
        "C. Create a lighting process on the user object to launch a flow",
        "D. Option 4",
      ],
      answer: "B",
      title: "Question 127",
      explanation: "",
    },
    {
      content:
        "Actions on a Lightning Page allow you to do which of the following?",
      options: [
        "A. Clone records, add users, and assign permissions.",
        "B. Send email and delete or clone records.",
        "C. Send email, create a task, and create or update records.",
        "D. Send email, send outbound messages, and launch a flow.",
      ],
      answer: "C",
      title: "Question 128",
      explanation: "",
    },
    {
      content:
        "What is a true statement in regard to managing access to reports and dashboards?\nChoose 2 answers",
      options: [
        'A. Users with the "Manage Public Reports" permission can organize reports by creating custom report folders and sending invitations to users to access them.',
        "B. Users that want to grant access to personal folders can manually share a personal folder with a user or publicgroup.",
        "C. Users must have certain permissions to access public, hidden, or shared folders.",
        'D. Users with the "Manage Public Reports" and "Create and Customize Reports"permissions can create custom reports that all users canview.',
      ],
      answer: "A,D",
      title: "Question 129",
      explanation: "",
    },
    {
      content:
        "Universal Containers uses a private sharing model on Accounts. User A and User B both own Accounts of their own and have both been sent a new Account record in an email owned by User C to take a look at. User A is able to open and view the record but User B receives an insufficient privileges error. User A and User B have the same role in the Role Hierarchy as User C.\nWhat are the three reasons User A has access but User 8 is unable to access the record?\nChoose 3 answers",
      options: [
        "A. User A is in a Public Group that has access via a Sharing Rule",
        "B. User A and User B have different profiles",
        "C. User A was granted an additional permission set",
        "D. User C has manually shared the record with user A",
        "E. User A is on the same Account Team as User C",
      ],
      answer: "A,D,E",
      title: "Question 130",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks recently implemented the application lifecycle management process to its release management strategy.\nWhich category handles bug fixes and simple changes?",
      options: ["A. Minor", "B. Patch", "C. Rollback", "D. Major"],
      answer: "B",
      title: "Question 131",
      explanation: "",
    },
    {
      content:
        "Universal Container wants to display a message when a case needs follow up. What can be used to display different text on the case record depending on the number of days a case is opened?",
      options: [
        "A. Workflow Update",
        "B. Case Process",
        "C. Formula Field",
        "D. Lightning Process Builder",
      ],
      answer: "C",
      title: "Question 132",
      explanation: "",
    },
    {
      content:
        "Which of the following can be source of report chart placed in page layout?(Choose 2)",
      options: ["A. Joined", "B. Matrix", "C. Summary", "D. Tabular"],
      answer: "B,C",
      title: "Question 133",
      explanation: "",
    },
    {
      content:
        "The app builder at Universal Containers has been asked to ensure that the Country field on the Account object Is captured as the two letter abbreviation How can the app builder satisfy this requirement?",
      options: [
        "A. Create a workflow rule to set values using an external data source.",
        "B. Create a validation rule to set values using an external data source",
        "C. Create a validation rule that only allows the expected format",
        "D. Create a workflow rule that only allows the expected format.",
      ],
      answer: "A",
      title: "Question 134",
      explanation: "",
    },
    {
      content:
        "What type of field can be referenced by a Roll-up Summary field using SUM? Choose 3 answers",
      options: [
        "A. Formula",
        "B. Currency",
        "C. Number",
        "D. Percent",
        "E. Date",
      ],
      answer: "B,C,D",
      title: "Question 135",
      explanation:
        "Explanation: https://help.salesforce.com/HTViewHelpDoc?id=fields_about_roll_up_summary_fields.htm",
    },
    {
      content:
        "An app builder has created a new report type but users are unable to select it from the Report Type list when making a new report for records they own.\nWhat could be causing this issue?",
      options: [
        "A. Access to the necessary object is unavailable.",
        "B. The report type is in a status of Deployed.",
        "C. The report type is in a status of In Development.",
        "D. Access to Create and Customize Reports is disabled.",
      ],
      answer: "C",
      title: "Question 136",
      explanation: "",
    },
    {
      content: "Which objects can be members of a campaign? Choose 2 answers",
      options: ["A. Opportunity", "B. Lead", "C. Account", "D. Contact"],
      answer: "B,D",
      title: "Question 137",
      explanation: "",
    },
    {
      content:
        "Universal Containers has created two custom objects called Seminars and Attendees. Organization-wide defaults for those objects have been set to private. Universal Containers wants to set up a new junction object between these objects. A select group of users should be able to edit records in the junction object.\nWhich two steps should an app builder take to configure the proper security?",
      options: [
        "A. Create owner-based sharing rules that give Read access to the master objects.",
        "B. Set lookup filters on both junction object relationship fields.",
        "C. Set Sharing Settings to Read Only on both master-detail relationship fields.",
        "D. Create an owner-based sharing rule that gives Read access to the junction object.",
      ],
      answer: "A,B",
      title: "Question 138",
      explanation: "",
    },
    {
      content:
        "A custom field contains a feedback score which is on a scale of one to five. Endusers would like a visual indicator of one to five stars based on the number found inthe feedback score customer field.",
      options: ["A. Formula", "B. Number", "C. Text", "D. Use a custom image"],
      answer: "A",
      title: "Question 139",
      explanation: "",
    },
    {
      content:
        "Universal containers require different fields to be out at each of the opportunity sales process. What configuration steps can an app builder use to meet this requirement?",
      options: [
        "A. Define record type and page payouts for each stage",
        "B. Add the path component to the lightning record type",
        "C. Set page layout required fields based on the current stage",
        "D. Create a process builder to prompt the user for filed information",
      ],
      answer: "D",
      title: "Question 140",
      explanation: "",
    },
    {
      content:
        "Universal Insurance would like to highlight on a report claims that have been open for more than 30 days. What feature could be used for this? Choose 1 answer.",
      options: [
        "A. Conditional Highlighting",
        "B. Report Highlighting",
        "C. Field Highlighting",
        "D. Bucket Highlighting",
      ],
      answer: "A",
      title: "Question 141",
      explanation: "",
    },
    {
      content:
        "The VP of Sales has requested that Account Site information should be visible onall Opportunity records.\nWhat is the recommended solution to meet this requirement?",
      options: [
        "A. Roll-Up Summary Field",
        "B. Process Builder",
        "C. Workflow Rule",
        "D. Cross-Object Formula Field",
      ],
      answer: "D",
      title: "Question 142",
      explanation: "",
    },
    {
      content:
        "Which three field types should be referenced by a roll-up summary field using SUM? Choose 3 answers",
      options: [
        "A. Currency",
        "B. Percent",
        "C. Date",
        "D. Formula",
        "E. Number",
      ],
      answer: "A,B,E",
      title: "Question 143",
      explanation: "",
    },
    {
      content:
        "Which setting is available to customize Salesforce1 mobile app for branding? Choose 3 answers",
      options: [
        "A. The image on loading page",
        "B. Action bar color",
        "C. Notification and search icon",
        "D. Header and search bar color.",
        "E. Background color on loading page.",
      ],
      answer: "A,D,E",
      title: "Question 144",
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
      title: "Question 145",
      explanation: "",
    },
    {
      content:
        "Universal containers allows users to create standard reports on demand. What are two considerations users should be aware of when creating a new report?",
      options: [
        "A. The report type determines the types of records and fields that will be available",
        "B. Users can require that child objects exist for parent records using a cross filter",
        "C. Records will be available in the in the report regardless of security permissions",
        "D. Reports created from standard report types are available to all users",
      ],
      answer: "A",
      title: "Question 146",
      explanation: "",
    },
    {
      content:
        "An app builder is tasked with adding key performance indicators on client pages. They want to see a summary of the number of open Opportunities and the number of won Opportunities for each Account.\nWhere should the app builder go to build these new rollups?",
      options: [
        "A. Opportunity Object",
        "B. Account Object",
        "C. Lightning Object Creator",
        "D. Lightning App Builder",
      ],
      answer: "B",
      title: "Question 147",
      explanation: "",
    },
    {
      content:
        "Representatives at Universal Containers use Salesforce to record information for leads. When new prospects are added, an outbound message is sent to SAP with lead's information. Which automation process will accomplish this without writing any code?",
      options: [
        "A. Create a process using Lightning Process Builder to send the outbound message.",
        "B. Design an Approval Process that sends an outbound message upon arrival.",
        "C. Use Visual Workflow to create a wizard that will send an outbound message.",
        "D. Create a Workflow Rule with an outbound message as the action",
      ],
      answer: "D",
      title: "Question 148",
      explanation: "",
    },
  ],
});
