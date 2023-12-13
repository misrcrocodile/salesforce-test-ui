window.testContent = window.testContent || [];
var testId = "Salesforce.Platform-App-Builder";
var testName = "Salesforce.Platform-App-Builder";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "Salesforce.Platform-App-Builder.v2021-05-12.q109",
  content: [
    {
      content:
        "At Universal Containers, multiple departments utilize the Case object for different purposes. Some users submit cases for IT and HR requests. Other users provide customer support with case records. How can an App Builder enable different users to see different fields, based on the case type?",
      options: [
        "A. Create different case field sets for IT, HR and Customer Support. Assign different field sets by role.",
        "B. Create different case field sets for IT, HR and Customer Support. Assign different field sets by profile.",
        "C. Create different case record types for IT, HR and Customer Support. Assign different page layouts to each record type by role.",
        "D. Create different case record types for IT, HR and Customer Support. Assign different page layouts to each record type by profile.",
      ],
      answer: "D",
      title: "Question 1",
      explanation: "",
    },
    {
      content:
        "Universal containers uses a private Account sharing model. They have a Process Improvement team with representatives from multiple departments that need s to view all accounts that have been flagged as problem accounts. How should this team be granted access to the records?",
      options: [
        "A. Use a record owner sharing rule that is shared with the Process Improvement role",
        "B. Write a trigger to use Apex Managed Sharing to grant access with the Process Improvement team",
        "C. User a record Owner sharing rule that is shared with the Process Improvement public group",
        "D. Option 5",
        "E. Use a criteria-based sharing rule where the account are shared with the Process Improvement public group",
      ],
      answer: "E",
      title: "Question 2",
      explanation: "",
    },
    {
      content:
        "Which of the following can be source of report chart placed in page layout?(Choose 2)",
      options: ["A. Summary", "B. Joined", "C. Matrix", "D. Tabular"],
      answer: "A,C",
      title: "Question 3",
      explanation: "",
    },
    {
      content:
        "A junction object has two Master-Detail relationships. What happens to a junction object record when either associated master record is deleted?",
      options: [
        "A. The master record can't be deleted if it has a child record.",
        "B. The look-up field on the junction object record is cleared.",
        "C. The record is deleted and placed in the recycle bin.",
        "D. The record is permanently deleted and can't be restored.",
      ],
      answer: "C",
      title: "Question 4",
      explanation: "",
    },
    {
      content:
        "An app builder has created a report for sales people to view records from the custom object, some users have complained that they are unable to see all of the appropriate records. What steps should be taken to ensure data visibility within the report? Choose 3 Answers",
      options: [
        "A. Check the report folder sharing settings",
        "B. Check Sharing rules",
        "C. Check organization-wide defaults",
        "D. Check the user's profile for object settings.",
        "E. Check reports filter",
      ],
      answer: "B,C,D",
      title: "Question 5",
      explanation: "",
    },
    {
      content:
        "The VP of Sales wants a Chatter post to the All Sales private group when an Opportunity goes to the closed won stage.\nWhat two tools should the app builder use to automate this process?\nChoose 2 answers",
      options: [
        "A. Workflow",
        "B. Process Builder",
        "C. Big Deal Alert",
        "D. Flow",
      ],
      answer: "B,D",
      title: "Question 6",
      explanation: "",
    },
    {
      content:
        "UC has a requirement that an opportunity should have a field showing the value of its associated account's billing state. This value should not change after the opportunity has been created. Is there a recommended solution to configure this automated behavior?",
      options: [
        "A. Roll-up summary field",
        "B. Workflow",
        "C. Apex",
        "D. Formula field",
      ],
      answer: "B",
      title: "Question 7",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants to rollout new product bundles with several pricing options. Pricing options include product-price bundles, account specific pricing and more. Which product satisfies the needs?",
      options: [
        "A. Custom AppExchange-app for product-pricing",
        "B. Lightning process builder",
        "C. Formula fields on Opportunity/Opportunity Product",
        "D. Workflow on Opportunity/Opportunity Product",
      ],
      answer: "B,C,D",
      title: "Question 8",
      explanation: "",
    },
    {
      content:
        "Universal containers has included its orders as an external data object into Salesforce. You want to create a relationship between Accounts and the Orders object (one-to-many relationship) leveraging a key field for account which is on both external object and Account. Which relationship do you create:",
      options: [
        "A. Lookup Relationship",
        "B. External Lookup Relationship",
        "C. Indirect Lookup Relationship",
        "D. Master Detail Relationship",
      ],
      answer: "C",
      title: "Question 9",
      explanation: "",
    },
    {
      content:
        "Universal Con conducts evaluations of their sales reps using a custom objectconsisting of numerical scores and executive comments. The company wants toensure that only the sales reps, their managers,and their managers' executives canview the rep's evaluation record, but the reps should not be able to view the executive comment field on their review.",
      options: [
        "A. Use a private sharing model granting record across using hierarchy, managefield access with record types and field-level security",
        "B. Using custom settings, manage field access with record types and pagelayouts",
        "C. Use a private sharing model granting access using customer settings, managefield access with page layouts and field-level security",
        "D. Hierarchy, manage field access with field-level security",
      ],
      answer: "D",
      title: "Question 10",
      explanation: "",
    },
    {
      content:
        "Which type of membership can be defined with external objects? (Choose 2)",
      options: [
        "A. External lookup",
        "B. Indirect lookup",
        "C. External master-detail",
        "D. Cross-organization lookup",
      ],
      answer: "A,B",
      title: "Question 11",
      explanation: "",
    },
    {
      content:
        "Which three Salesforce functionalities are ignored when process field updates in workflow rules and approval processes?",
      options: [
        "A. Multiple currencies",
        "B. Decimal places and character limits",
        "C. Record type picklist value assignments",
        "D. Field-Level Security",
        "E. Validation Rules",
      ],
      answer: "C,D,E",
      title: "Question 12",
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
      title: "Question 13",
      explanation:
        "Explanation: https://help.salesforce.com/HTViewHelpDoc?id=fields_about_roll_up_summary_fields.htm",
    },
    {
      content:
        "Which two statements are true about an External ID field? Choose 2 answers",
      options: [
        "A. The field can be used to contain unique record identifiers from a system outside of Salesforce.",
        "B. The field must contain at least one number and at least one letter.",
        "C. The field can be unique based on case-sensitive or case-insensitive values.",
        "D. The field must be unique since duplicates are NOT allowed within Salesforce.",
      ],
      answer: "A,C",
      title: "Question 14",
      explanation: "",
    },
    {
      content:
        "Which setting is available to customize the salesforce1 mobile app for branding ? Select 3",
      options: [
        "A. The image on loading page",
        "B. Header and search bar color",
        "C. Background color on loading page",
        "D. Notification and search icon",
        "E. Action bar color",
      ],
      answer: "A,B,C",
      title: "Question 15",
      explanation: "",
    },
    {
      content:
        "Universal Containers has a custom assessment object used by three divisions. Each division wants to track different information on the assessments, including different values for the status picklist. Division managers do not want their teams to be able to create another division's assessment.\nHow can this be accomplished?",
      options: [
        "A. Create separate assessment record types for each division and use them to limit picklist values. Create separate page layouts for each record type and use profiles to restrict record type access.",
        "B. Create additional custom assessment objects, one for each division, to track their assessments so information can be tracked separately. Use profiles to restrict access to the three custom objects.",
        "C. Create a separate page layout for each division and assign them profiles. Use the profile setting to configure each division's custom field list and picklist values for assessments.",
        "D. Create three page layouts to determine the fields and picklist values for each user based on the division indicated on their user record. Use field-level security to restrict access to each division's fields.",
      ],
      answer: "A",
      title: "Question 16",
      explanation: "",
    },
    {
      content:
        "Universal Containers has a requirement that an Opportunity should have a field showing the value of its associated account's billing state. This value should not change after the Opportunity has been created. What is the recommended solution to configure this automation behavior?",
      options: [
        "A. Apex",
        "B. Roll-up-summary field",
        "C. Workflow",
        "D. Formula Field",
      ],
      answer: "C",
      title: "Question 17",
      explanation: "",
    },
    {
      content:
        "User at Universal Containers needs to be able to quickly create a contact record from the Account record's Chatter feed. How should the App Builder enable the functionality?",
      options: [
        'A. By creating a custom "Create a Record" Action on the Account.',
        'B. By creating a custom "Create a Record" Action on the Contract',
        'C. By creating a custom "Detail Page" Button on the Account.',
        'D. By creating a custom "Detail Page" Button on the Contract.',
      ],
      answer: "A",
      title: "Question 18",
      explanation: "",
    },
    {
      content: "Which two rules can be configured for the Opportunity object?",
      options: [
        "A. Assignment Rule",
        "B. Validation Rule",
        "C. Escalation Rule",
        "D. Workflow Rule",
      ],
      answer: "B,D",
      title: "Question 19",
      explanation: "",
    },
    {
      content:
        "You are explaining to another developer, who is not familiar with Force.com, how an external ID field can be used to work with data coming from another system. What features would you mention? Choose 3 answers.",
      options: [
        "A. An external ID is used to represent an identifier for a record from an external system",
        "B. An external ID is indexed and increases query performance",
        "C. External IDs are not case sensitive",
        "D. An external ID can be either text, number or email data types",
      ],
      answer: "A,B,D",
      title: "Question 20",
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
      title: "Question 21",
      explanation: "",
    },
    {
      content: "Which objects can be members of a Campaign? Choose 2 answers",
      options: ["A. Contact", "B. Lead", "C. Opportunity", "D. Account"],
      answer: "A,B",
      title: "Question 22",
      explanation: "",
    },
    {
      content:
        "UVC has deployed custom tabs to Production via change sets, without including the profiles settings. What is true about the visibility of custom tabs in Enterprise Edition?",
      options: [
        "A. Custom tabs are default on for all the users",
        "B. Custom tabs are hidden for all users",
        "C. Custom tabs are default off for all the users.",
        "D. Custom tabs are not deployed",
      ],
      answer: "B",
      title: "Question 23",
      explanation: "",
    },
    {
      content:
        "A custom field on an account is used to track finance information about a customer. Only members of the Finance Team have access to this field. However, the business wants to allow one customer service agent, who is assigned the customer service profile, read-only access to this field for special circumstances. What is the recommended solution to grant the customer service agent access to the field?",
      options: [
        "A. Update the custom field's Field Level Security in setup to allow the agent read-only access to the field.",
        "B. Update the Customer Service Profile already assigned to the agent to allow for read-only access to the field via Field Level Security",
        "C. Create a permission set that allows read-only access to the field via Field Level Security and assign it to the agent.",
        "D. Create a new profile to allow for read-only access to the field via Field Level Security and assign it to the agent",
      ],
      answer: "C",
      title: "Question 24",
      explanation: "",
    },
    {
      content:
        "UVC sells to three different types of organizations. Partner, Enterprise, and Small Business. Some of the information collected about each organization overlaps; however, there are also unique attributes to each type of organization that need to be tracked, some of which are required. What Solution meets these requirements?",
      options: [
        "A. A Partner Community for partner organization records, and two lead record types for Enterprise and Small Business organizations",
        "B. Three custom objects for the three organization types, each with custom fields that pertain to that type of organization",
        "C. Three different sections on an Account page layout, with each section displaying the relevant fields for that organization.",
        "D. Three Account record types, each with its own page layout to display the relevant fields for that type of organization",
      ],
      answer: "D",
      title: "Question 25",
      explanation: "",
    },
    {
      content: "Where can a custom button be placed? Choose 3 answers",
      options: [
        "A. On the Custom List View",
        "B. On the User Object",
        "C. On a Person Account",
        "D. On a Web-to-Case form",
        "E. On a related list",
      ],
      answer: "A,C,E",
      title: "Question 26",
      explanation: "",
    },
    {
      content:
        "A custom field contains a feedback score which is on a scale of one to five. End users would like a visual indicator of one to five stars based on the number found in the feedback score custom field. How can this visual indicator be displayed?",
      options: [
        "A. Use a custom image field.",
        "B. Use a custom number field.",
        "C. Use a custom formula field.",
        "D. Use a custom text field",
      ],
      answer: "C",
      title: "Question 27",
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
      title: "Question 28",
      explanation:
        "Explanation: https://developer.salesforce.com/docs/atlas.enus.salesforce1appadmin.meta/salesforce1appadmin/s1_admin_guide_actions_predef_values.ht m https://help.salesforce.com/apex/HTViewHelpDoc?id=customize_sf1_rollout_overview.htm&la nguage=en_US",
    },
    {
      content:
        "The app builder at UVC has been asked to ensure that the amount field ispopulated when the stage is set to closed won. What can be used to meet this requirement?",
      options: [
        "A. Workflow",
        "B. Approval process",
        "C. Validation rule",
        "D. Lighting process builder",
      ],
      answer: "A",
      title: "Question 29",
      explanation: "",
    },
    {
      content:
        "An app builder has been asked to provide users a way to identify a contact's \"preferred contact method\" directly on the contact record. users need to be able to identify whether a phone number or an email, is the contact's preferred communication method. Which field type will allow the app builder to accomplish this with the fewest fields possible?",
      options: ["A. Checkboxes", "B. Picklist", "C. Formula", "D. Email"],
      answer: "B",
      title: "Question 30",
      explanation: "",
    },
    {
      content:
        "After universal containers converted qualified leads. Sales reps need to be able to report on converted leads. How should an app builder support for this requirement ?",
      options: [
        "A. Enable preserve lead status in the lead conversion settings",
        "B. Assign the representative view and edit converted leads permission",
        "C. Ensure the representative has read access to the original lead records",
        "D. Create a custom report type with converted leads as the primary object",
      ],
      answer: "A",
      title: "Question 31",
      explanation: "",
    },
    {
      content:
        "Universal Containers uses a private sharing model on Accounts. User A and User B both own Accounts of their own and have both been sent a new Account record in an email owned by User C to take a look at. User A is able to open and view the record but User B receives an insufficient privileges error. User A and User B have the same role in the Role Hierarchy as User C.\nWhat are the three reasons User A has access but User 8 is unable to access the record?\nChoose 3 answers",
      options: [
        "A. User A and User B have different profiles",
        "B. User A is on the same Account Team as User C",
        "C. User C has manually shared the record with user A",
        "D. User A is in a Public Group that has access via a Sharing Rule",
        "E. User A was granted an additional permission set",
      ],
      answer: "B,C,D",
      title: "Question 32",
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
      title: "Question 33",
      explanation: "",
    },
    {
      content:
        "Universal con has purchased a lighting component on the appExchange. Where can that component be utilized? (Choose 2)",
      options: [
        "A. Visual workflow",
        "B. Salesforce1 mobile app",
        "C. Lightning process builder",
        "D. Salesforce lighting app",
      ],
      answer: "B,D",
      title: "Question 34",
      explanation: "",
    },
    {
      content:
        "A sales manager would like to look at an Account record and view charts of all of the related open opportunities, closed/won opportunities and open cases. How many report charts can be added to the Account page layout to meet this requirement?",
      options: ["A. 4", "B. 1", "C. 3", "D. 2"],
      answer: "D",
      title: "Question 35",
      explanation: "",
    },
    {
      content:
        'A custom object named assignment has a private sharing setting that grantsaccess using hierarchies. The organization has a role hierarchy where the"Specialist" role reports to a "Manager" role which reports to a "Director" role. TheDirector role is at the top of the role hierarchy. A user who is in the manager rolecreate a new assignment record. Who can see this record?',
      options: [
        "A. The record owner and the directors in their Hierarchy.",
        "B. The record owner q in their hierarchy.",
        "C. The record owner and the specialists in their hierarchy.",
        "D. The record owner and the managers in their hierarchy.",
      ],
      answer: "A",
      title: "Question 36",
      explanation: "",
    },
    {
      content:
        "Sales reps at Universal Containers use Salesforce on their mobile devices. They want a way to odd new contacts quickly and then follow up later to complete the additional Information necessary.\nWhat mobile solution should an App Builder recommend?",
      options: [
        "A. Build a global action to create Contacts.",
        "B. Add a compact layout to Contacts.",
        "C. Use Path and set pre-defined values",
        "D. Customize the mobile menu to move Contacts to the top.",
      ],
      answer: "B",
      title: "Question 37",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants to build a recruiting app that allows for multiple positions to appear on custom objects websites and postings. UC requires a report that shows the related custom objects of postings. Which two items should an app builder configure to implement this?",
      options: [
        "A. Utilize the standard report type",
        "B. Configure a postings object with master detail field to both positions and websites",
        "C. Create two new custom report type",
        "D. Configure a postings object with lookup field to both positions and websites",
      ],
      answer: "C",
      title: "Question 38",
      explanation: "",
    },
    {
      content:
        "Universal Containers (UC) uses a custom object to track expense reports. UC wants to automatically post updates on a record's feed whenever an expense report has been approved Which social feature can be used to accomplish this?",
      options: [
        "A. Feed tracking",
        "B. Approval process",
        "C. Auto-response rule",
        "D. Feed Quick action",
      ],
      answer: "A",
      title: "Question 39",
      explanation: "",
    },
    {
      content: "Person Accounts Choose 2 answers",
      options: [
        "A. Can only be merged with other person accounts",
        "B. Have the same icon as Business accounts",
        "C. Do use space in both account and contacts table",
        "D. Are enabled by default",
        "E. Are enabled via feature license",
      ],
      answer: "A,C",
      title: "Question 40",
      explanation: "",
    },
    {
      content:
        "Universal Insurance would like to highlight on a report claims that have been open for more than 30 days. What feature could be used for this? Choose 1 answer.",
      options: [
        "A. Report Highlighting",
        "B. Field Highlighting",
        "C. Conditional Highlighting",
        "D. Bucket Highlighting",
      ],
      answer: "C",
      title: "Question 41",
      explanation: "",
    },
    {
      content:
        'UVC uses a custom object to track site visits, When the status of a site visit ischanged from "in process " to "On hold " the business wants the site visit owner tobe automatically assigned to an "On hold " Queue. Which capability can be used toaccomplish this?',
      options: [
        "A. Assignment rule",
        "B. Apex Trigger",
        "C. Visual workflow",
        "D. Action",
      ],
      answer: "A",
      title: "Question 42",
      explanation: "",
    },
    {
      content:
        "universal containers has implemented multi currency. There are several products that universal containers sells exclusively in europe and the UK. Opportunities for these products need to be written in euros or british pounds. Which solution should an app builder recommend ?",
      options: [
        "A. Create a new validation rule that allows only EUR or GBP to be selected from all active currencies when an opportunity is created for these products.",
        "B. Create a new sales process that includes only the EUR and GBP currencies for these products.",
        "C. Create a new record type for these products and include only the EUR and GBP currencies from the opportunity currency picklist",
        "D. Create a new page layout for these products that shows only the EUR and GRP currencies in the opportunity currency picklist.",
      ],
      answer: "B",
      title: "Question 43",
      explanation: "",
    },
    {
      content: "What is a true statement when deleting a dashboard?",
      options: [
        "A. Deleting a dashboard also deletes the components within it, as well as the custom reports used by the components",
        "B. Deleting a dashboard requires a user to first edit the components to remove the underlying reports",
        "C. Deleting a dashboard does not move the dashboard to the recycle bin and therefore the dashboard cannot be recovered.",
        "D. Deleting a dashboard also deletes the components within it. It does not delete the custom reports used by the components.",
      ],
      answer: "D",
      title: "Question 44",
      explanation: "",
    },
    {
      content:
        "Universal containers require different fields to be filled out at each stage of the opportunity sales process. what configuration steps san an app builder use to meet this requirement?",
      options: [
        "A. Define record types and page layouts for each stage",
        "B. Create a process builder to prompt the user for field information",
        "C. Add the path component to the lightning record page",
        "D. Set page layout required fields based on the current stage",
      ],
      answer: "A",
      title: "Question 45",
      explanation: "",
    },
    {
      content:
        "Universal Containers is rolling out a new customer service process. Customer service managers will need to edit cases for their subordinates, but not cases for other groups. Managers and users should be able to view all cases. What is the recommended solution to configure this? Choose 2 answers",
      options: [
        "A. Create criteria-based sharing rules.",
        "B. Set organization-wide sharing defaults to private.",
        "C. Set organization-wide sharing defaults to public read/only.",
        "D. Create standard role hierarchies",
      ],
      answer: "C,D",
      title: "Question 46",
      explanation: "",
    },
    {
      content:
        "Duplicate management for Leads has been Implemented at Universal Containers that it seems duplicate leads are still being created, the org Wide Default (WOD) is set to ''Private'' for Leads.\nWhich two actions help prevent duplicate leads from being created?\nChoose 2 answers",
      options: [
        "A. Change the Lead Duplicate Rule details to Bypass Sharing Rules.",
        "B. Change the lead Matching Rule to Block on Create.",
        "C. Change OWD for Leads to Public Edit.",
        "D. Change OWD for Leads to public Read.",
      ],
      answer: "B,D",
      title: "Question 47",
      explanation: "",
    },
    {
      content:
        "What salesforce functionality is ignored when processing field updates in workflow rules and approval processes? Choose 3 answers",
      options: [
        "A. Record Type Picklist Value Assignments",
        "B. Field Level Security",
        "C. Multiple Currencies",
        "D. Decimal Places and Character Limits",
        "E. Validation Rules",
      ],
      answer: "A,B,E",
      title: "Question 48",
      explanation: "",
    },
    {
      content:
        "Which use case can be accomplished using a custom link?(Select 3)",
      options: [
        "A. To create a custom visual flow",
        "B. To create a record page",
        "C. To external system using data of salesforce",
        "D. To a process to update current record",
        "E. Navigate to Apex trigger",
      ],
      answer: "B,C,D",
      title: "Question 49",
      explanation: "",
    },
    {
      content:
        "Which two report formats can be used as a source report to configure a reporting snapshot? Choose 2 answers",
      options: [
        "A. Joined format",
        "B. Matrix format",
        "C. Tabular format",
        "D. Summary format",
      ],
      answer: "B,D",
      title: "Question 50",
      explanation: "",
    },
    {
      content:
        "The customer service team at Universal containers uses a custom Project object to track their customer projects. An App builder needs to create a relationship between the project object and the related client Account record. A private sharing model is in place for both Accounts and projects. Which statement is true when creating an Account lookup field on the Project object? Choose 2 answers",
      options: [
        "A. The account record can include roll-up summary field with data from the project records",
        "B. Cross-object field updates between the Project and Account records are not supported",
        "C. Users can only delete Accounts if they have access to related projects records",
        "D. The account lookup field on the project record can be made optional.",
      ],
      answer: "C,D",
      title: "Question 51",
      explanation: "",
    },
    {
      content:
        "You want to use an External Data Object Table from Heroku carrying Product Category information. The data need to be included in Salesforce and searchable. What do you have to do before you can use the connection. (Choose 2)",
      options: [
        'A. Choose "include in Salesforce searches" option',
        'B. Press "validate and sync"',
        "C. URL / choose the URL",
        'D. Choose "include as index field"',
      ],
      answer: "A,B",
      title: "Question 52",
      explanation: "",
    },
    {
      content:
        "Which two relationship types can be defined with external object? Choose 2 answers",
      options: [
        "A. External Lookup",
        "B. Cross-Organization Lookup",
        "C. Indirect Lookup",
        "D. External Master-Detail",
      ],
      answer: "A,C",
      title: "Question 53",
      explanation: "",
    },
    {
      content:
        "Representatives at Universal Con use salesforce to record information for new Leads. When new prospects are added, an outbound message is sent to SAP with the Lead's info.",
      options: [
        "A. Create a workflow rule",
        "B. Design an approval process",
        "C. Use Visual Workflow",
        "D. Create a process using lightning process builder",
      ],
      answer: "A",
      title: "Question 54",
      explanation: "",
    },
    {
      content:
        "All contact's mailing post code should match the account shipping postal code.How to do it?",
      options: [
        "A. Use compare operator",
        "B. Geolocation()",
        "C. Use distance()use distance()",
        "D. Use NOT EQUAL operator",
      ],
      answer: "A",
      title: "Question 55",
      explanation: "",
    },
    {
      content:
        "Universal Containers introduces a custom object called Service, which has a lookup to Account. Field enter Service using the Salesforce1 mobile app. Operators create new Service records when viewing Account name which needs to automatically display the current Account. How can this be accomplished?",
      options: [
        "A. Create an action in the Service object and add it to the Account page layout",
        "B. Create an action in the Account object and add it to the Account page layout.",
        "C. Create an action in the Account object and add it to the Service page layout.",
        "D. Create an action in the Service object and add it to the Service page layout",
      ],
      answer: "B",
      title: "Question 56",
      explanation: "",
    },
    {
      content:
        "Universal containers uses a custom called reviews to capture information generated by interviews during the candidate process. The review records are visible to any user that has access to the related custom candidate record. The VP of human resources wants the comment field on the review to be private to anyone outside of the HR department",
      options: [
        "A. Create a page layout with the field for HR users and another page layout without the field for all other users",
        "B. Create a page layout with the field and use field level security to hide the from all others users",
        "C. Create an apex sharing rule to share the field with users that have HR in their role",
        "D. Create a sharing rule to share the filed with the VP of HR with role and subordinates",
      ],
      answer: "B",
      title: "Question 57",
      explanation: "",
    },
    {
      content: "What is the capability of schema Builder? Choose 2 Answers",
      options: [
        "A. Viewing page layout in a new window",
        "B. Editing custom settings",
        "C. Showing selected objects on the page.",
        "D. Creating a new record type",
      ],
      answer: "A,C",
      title: "Question 58",
      explanation: "",
    },
    {
      content:
        "The VP of Sales at Universal Containers has requested that Sales reps be given access to view all Accounts in Salesforce. However, they've also requested that sales reps only be allowed to create new Opportunities on Accounts they own. How can this requirement be met?",
      options: [
        "A. Create an Opportunity Validation Rule that compares the Opportunity and Account Owners",
        "B. Create a new Opportunity Quick Action that validates Account ownership.",
        "C. Set the Organization-Wide Defaults sharing on Opportunities to Controlled by Parent.",
        "D. Set the Organization-Wide Defaults sharing on Opportunities to Private and recalculate sharing.",
      ],
      answer: "C",
      title: "Question 59",
      explanation: "",
    },
    {
      content:
        "Which two standard Lightning page components are available in the Lightning App Builder?\nChoose 2 answers",
      options: [
        "A. Accordion",
        "B. Highlights Panel",
        "C. Quick Text",
        "D. Path",
      ],
      answer: "A,B",
      title: "Question 60",
      explanation: "",
    },
    {
      content:
        "Which two features can be used to allow users to access Visual Workflows? Choose 2 answers",
      options: [
        "A. Custom Button",
        "B. Visual Workflow Launcher",
        "C. Invoked by Process",
        "D. Quick Action",
      ],
      answer: "B,C",
      title: "Question 61",
      explanation: "",
    },
    {
      content:
        "What is a feature that can extend record access beyond the organization-wide defaults? Choose 2 Answers",
      options: [
        "A. Dynamic role hierarchy",
        "B. Public or private groups.",
        "C. Criteria-based sharing rules.",
        "D. Owner-based sharing rules.",
      ],
      answer: "C,D",
      title: "Question 62",
      explanation: "",
    },
    {
      content:
        "The Training team at UVC uses a custom Training object to track their customer trainings. An App Builder needs to create a relationship between the Training object and the related Student's record. A private sharing model is in place for both Students and Training. Which two statements are true when creating a Student lookup field on the Training object? Choose 2 answers",
      options: [
        "A. On Training record, users can only delete students, if they have access to it",
        "B. On Training record, the Student Lookup field can be made optional",
        "C. On Student Record, users can set up Roll-up summary fields on Training records",
        "D. Cross-object field updates between Training and Student records are not supported",
      ],
      answer: "A,B",
      title: "Question 63",
      explanation: "",
    },
    {
      content:
        "Universal container sales reps can modify fields on an opportunity until it isclosed. Only the sales operations team can modify the post close follow up date andpost close followup comments fields. How to make this happen?",
      options: [
        "A. Use field-level security on page layouts to restrict editing fields",
        "B. Use multiple record types, page layouts, and profiles",
        "C. Use field-level security to mark fields as read-only on the sales profile",
        "D. Use record types with field sets and restrict editing fields using field-level security",
      ],
      answer: "B",
      title: "Question 64",
      explanation: "",
    },
    {
      content:
        "The Vp of sales at universal con has requested the sales reps be given access to view all accounts in salesforce. However, they've also requested the sales rep only be allowed to create new opportunities on accounts they own",
      options: [
        "A. Set the organization wide default sharing on opportunities to private and recalculate sharing",
        "B. Create a new opportunity quick action that validation account ownership",
        "C. Set the organization wide default sharing on opportunities to controlled by parent",
        "D. Create an opportunity validation rule that compares the opportunity and account owner",
      ],
      answer: "D",
      title: "Question 65",
      explanation: "",
    },
    {
      content:
        "Universal Containers has two teams: Sales and Services. Both teams interact with the same records. Sales users use ten fields on the Account record. Services users use three of the same fields as the Sales team, but also have five of their own, which the sales team does not use. What is the minimum configuration necessary to meet this requirement?",
      options: [
        "A. Two profiles, one record type, two page layouts\n         Explanation- Record types allow you to offer different business processes, picklist values, and page layouts to different users based on their profiles.",
        "B. Two profiles, two record types, two page layouts",
        "C. One profile, one record type, one page layout.",
        "D. One profile, two record types, one page layout",
      ],
      answer: "B",
      title: "Question 66",
      explanation: "",
    },
    {
      content: "What is a use case for validation rules?",
      options: [
        "A. Prevent deals with less than a 10% discount from entering an approval process",
        "B. Ensure zip/postal codes are entered in the correct format",
        "C. Prevent non-managers from joining a private Chatter Group",
        "D. Restrict partner Lead visibility to the channel sales team",
      ],
      answer: "B",
      title: "Question 67",
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
      title: "Question 68",
      explanation: "",
    },
    {
      content:
        "Universal containers is importing 1000 records into Salesforce. They want to avoid any duplicate records from being created during the import. How can these requirements be met?",
      options: [
        "A. Include a column in the import file that has either record names, Salesforce IDs, or external IDs that can be used to match records.",
        "B. After importing all of the custom objects, run a duplicate check report, export the record to a CSV File, and run a mass delete to purge any duplicates.",
        'C. When importing the file, select the "Prevent Duplicates" option on the last step of the Import Wizard and import the file.',
        "D. After importing all of the custom objects, review all records created and manually merge or delete and duplicate record",
      ],
      answer: "A",
      title: "Question 69",
      explanation: "",
    },
    {
      content:
        "The CRM Manager at Universal Containers has requested that a custom text field be converted to a picklist in order to promote better data hygiene. What needs to be considered before changing the field type? Choose 2 answers",
      options: [
        "A. Field references will be removed in Visualforce pages",
        "B. Changing a field type will remove existing field history.",
        "C. Existing list views that reference the field may be deleted.",
        "D. All data should be backed up before converting a text field.",
      ],
      answer: "C,D",
      title: "Question 70",
      explanation: "",
    },
    {
      content: "What can be done after the workflow field re-evaluation?",
      options: [
        "A. Invalid data",
        "B. Option 1",
        "C. Out of hour limit (loop)",
        "D. Trigger another rule",
      ],
      answer: "C",
      title: "Question 71",
      explanation: "",
    },
    {
      content:
        "Which attribute must field have to be used in external modeling?",
      options: [
        "A. Required",
        "B. External ID",
        "C. None of the above",
        "D. Unique",
      ],
      answer: "B",
      title: "Question 72",
      explanation: "",
    },
    {
      content:
        "The director of marketing has asked the app builder to create a formula field that tracks how many days have elapsed since a contact was sent a marketing communication. The director is only interested in whole units. Which function should be used to calculate the difference?",
      options: ["A. Now()", "B. Today()", "C. Date()", "D. Datevalue()"],
      answer: "B",
      title: "Question 73",
      explanation: "",
    },
    {
      content: "What is the capability of a schema builder? Choose 2 answers",
      options: [
        "A. To create new look-up or master-detail object relationship",
        "B. To enable field history tracking on standard objects.",
        "C. To modify custom field help text on standard objects",
        "D. To update description of standard and custom objects.",
      ],
      answer: "A,C",
      title: "Question 74",
      explanation: "",
    },
    {
      content:
        'Universal Containers has a workflow on opportunity that will change the status field to "In Progress" when the Stage field is changed "Negotiation." In addition, there is a validation rule on Status that will prevent the status being set to "In Progress" if the amount of the opportunity is less than $10,000.A user named Frank does not have FLS to see status. When Frank changes opportunities to a stage of "Negotiation" the status is still being changed to "In Progress", why is this occurring?',
      options: [
        "A. Workflow rules cannot trigger a validation rule",
        "B. Field Level Security prevents the validation rule from running.",
        "C. Workflow rules occur after validation rules and thus override validation rules.",
      ],
      answer: "A",
      title: "Question 75",
      explanation: "",
    },
    {
      content:
        "Manage at Universal Containers want a quick to create additional accounts to form a hierarchy from a parent account record. They want to auto-populate five fields based on the parent to make it easier for users to create the child accounts quickly.",
      options: [
        "A. Custom Global Quick Account.",
        "B. Custom action on Account",
        "C. Custom link on Account",
        "D. Custom Global Quick Action",
      ],
      answer: "A",
      title: "Question 76",
      explanation: "",
    },
    {
      content: "Which sandbox is used for performance testing?",
      options: ["A. Developer", "B. Partial", "C. Full", "D. Developer Pro"],
      answer: "C",
      title: "Question 77",
      explanation: "",
    },
    {
      content:
        "universal containers has several new fields they requested for the opportunity product object. What should an app builder be able to configure using a formula field ?",
      options: [
        "A. A combination of the opportunity`s text and a description fields.",
        "B. A Rich text area field that uses HTML to bold certain characters",
        "C. A hyperlink to the parent account of the parent opportunity.",
        "D. A mix of functions and concatenation of 10 account fields and 10 opportunity fields.",
      ],
      answer: "B",
      title: "Question 78",
      explanation: "",
    },
    {
      content:
        "Which of the following is true in regards to the User Acceptance testing (UAT) step in a large enterprise application lifecycle? Choose 2 answers.",
      options: [
        "A. UAT is typically the last step before deploying changes to production",
        "B. UAT comes before Integration testing",
        "C. UAT can be used for end user testing or training",
        "D. UAT come after Integration Testing",
      ],
      answer: "C,D",
      title: "Question 79",
      explanation: "",
    },
    {
      content:
        "Universal Containers allows users to create standard reports on demand.\nWhat are three considerations users should be aware of when creating a new report?\nChoose 3 answers",
      options: [
        "A. Users will need to add the report to a shared folder for other users to see It.",
        "B. Users can require that child objects exist for patent records using a cross filter.",
        "C. Records will be available in the report regardless of security permissions",
        "D. Charts can be added to summary reports to provide a visualization.",
        "E. The report type determines the types of records and fields that will be available.",
      ],
      answer: "B,C,D",
      title: "Question 80",
      explanation: "",
    },
    {
      content:
        "The Director of Marketing has asked the AppBuilder to create a formula fieldthat tracks how many days have elapsed since a contact was sent a marketingcommunication. The director is only interested in whole units.",
      options: ["A. Date()", "B. Today()", "C. Datevalue()", "D. Now()"],
      answer: "B",
      title: "Question 81",
      explanation: "",
    },
    {
      content:
        "Universal containers has a custom object that has a N:M relationship with opportunityLineItem carrying price and amount information. In order to compute total amounts and total prices per Opportunity using Rollup summary fields, what field type will you use.",
      options: [
        "A. Junction",
        "B. Crossobject",
        "C. Master-Detail",
        "D. Lookup",
      ],
      answer: "C",
      title: "Question 82",
      explanation: "",
    },
    {
      content:
        "Sales managers want to be automatically notified any time there is a change to an opportunity close date and want these changes to be tracked on the opportunity. Which two configurations should an app builder recommend? Choose 2 answers",
      options: [
        "A. Create an opportunity outbound message",
        "B. Activate historical trending for opportunities",
        "C. Use process builder on opportunities and a chatter post action",
        "D. Enable feed tracking on opportunities",
      ],
      answer: "A",
      title: "Question 83",
      explanation: "",
    },
    {
      content:
        "universal containers has 20 different workflows on the opportunity object. To ensure that updates are processing properly for all field updates uc has the re-evaluete workflow rules after field change checkbox checked. Recently after adding a new workflow, users have reported receiving errors about workflow limits. What should a app builder look at so address this?",
      options: [
        "A. Talk to a developer about apex code issues",
        "B. Workflows on other objects that are being re triggered",
        "C. Number of workflows per object limits",
        "D. Workflows that cause each other to fire back and forth recursively",
      ],
      answer: "D",
      title: "Question 84",
      explanation: "",
    },
    {
      content:
        "Universal Containers would like to automatically assign a specific permission set to new users. How can this requirement be met? Choose 2 Answers",
      options: [
        "A. Create a workflow rule on the User object to assign a permission set.",
        "B. Create a flow on the user object to assign a permission set.",
        "C. Create a lightning process on the user object to launch a flow.",
        "D. Create an approval process on the User object to assign a permission set",
      ],
      answer: "B,C",
      title: "Question 85",
      explanation: "",
    },
    {
      content:
        "UVC uses a custom object called Candidates to track information about people who are being recruited for jobs within the company. When an employee refers a recruiting candidate, that employee should have access to the Candidate record, however, only HR users should be able to view, edit, and report on the Salary field. Which action should be recommended for controlling who can view the Salary field?",
      options: [
        'A. Restrict access to the "Salary" field for general employee users using field-level security',
        "B. Create and assign separate Candidate page layouts for general employee users and HR users",
        "C. Create and assign separate Candidate record types for general employee users and HR users",
        'D. Restrict access to the "Salary" field for general employee users using custom sharing settings',
      ],
      answer: "A",
      title: "Question 86",
      explanation: "",
    },
    {
      content:
        "universal containers is migrating its sales operations from a legacy system that was used. opportunities need to be imported with the proper country currency. Which two steps should an app builder configure to meet these requirements ?\nChoose 2 answers.",
      options: [
        "A. Use Import Wizard to import the records.",
        "B. Use Data Loader to import the records.",
        "C. Include the currency ISO code in all currency fields in the import file.",
        "D. Use import the currency ISO Code Column in the import file.",
        "E. Include the currency ISO Code Column in the import file.",
      ],
      answer: "D,E",
      title: "Question 87",
      explanation: "",
    },
    {
      content:
        "UC would like to embed a chart of all related opportunities, by stage, on the account details page. Which type of report should use",
      options: [
        "A. A tabular report on the opportunity object",
        "B. A summary report on the account object",
        "C. A summary report on the opportunity object",
        "D. A tabular report on the account object",
      ],
      answer: "C",
      title: "Question 88",
      explanation: "",
    },
    {
      content:
        "Universal containers (uc) wants to delete data in several fields for 5000 lead records. UC export the selected record IDs and fields that need to have data deleted in a csv file. Which two steps should an app builder suggest to meet these requirements ? Choose 2 answers",
      options: [
        "A. Use Data Loader to update leads using the CSV file",
        "B. Select the correct record type",
        "C. Use import Wizard to update leads using the CSV file",
        "D. Select insert null values in setting",
      ],
      answer: "A",
      title: "Question 89",
      explanation: "",
    },
    {
      content:
        "What is true regarding the user interface for external object data? Choose 1 answer.",
      options: [
        "A. External object data can be accessed via custom tabs",
        "B. Chatter Feeds can be enabled on external object pages",
        "C. All of the above",
        "D. External object data can be accessed via lists views",
        "E. External object data can be accessed via detail pages",
      ],
      answer: "C",
      title: "Question 90",
      explanation: "",
    },
    {
      content:
        "Representatives at Universal Containers use Salesforce to record information for leads. When new prospects are added, an outbound message is sent to SAP with lead's information. Which automation process will accomplish this without writing any code?",
      options: [
        "A. Design an Approval Process that sends an outbound message upon arrival.",
        "B. Use Visual Workflow to create a wizard that will send an outbound message.",
        "C. Create a Workflow Rule with an outbound message as the action",
        "D. Create a process using Lightning Process Builder to send the outbound message.",
      ],
      answer: "C",
      title: "Question 91",
      explanation: "",
    },
    {
      content:
        "What is a key consideration when using Unmanaged packages? Choose 2 answers",
      options: [
        "A. The person who created the Unmanaged package can change or upgrade installed components",
        "B. A namespace is not required to create an Unamanged package",
        "C. The person who created the Unamanged package has no control over the installed components",
        "D. A namespace is required to create an Unmanaged package",
      ],
      answer: "B,C",
      title: "Question 92",
      explanation: "",
    },
    {
      content:
        "Universal Containers has created two custom objects called Seminars and Attendees. Organization-wide defaults for those objects have been set to private. Universal Containers wants to set up a new junction object between these objects. A select group of users should be able to edit records in the junction object.\nWhich two steps should an app builder take to configure the proper security?",
      options: [
        "A. Create an owner-based sharing rule that gives Read access to the junction object.",
        "B. Set Sharing Settings to Read Only on both master-detail relationship fields.",
        "C. Create owner-based sharing rules that give Read access to the master objects.",
        "D. Set lookup filters on both junction object relationship fields.",
      ],
      answer: "A,B",
      title: "Question 93",
      explanation: "",
    },
    {
      content:
        "Ann app builder has been to display an overdue date that is two months after a tasks due date. Which approach should the app builder take?",
      options: [
        "A. Create a formula field using DueDate + 60",
        "B. Use process builder and set overdue date equal to DueDate + ((365/12)*2)",
        "C. Create a formula field using the ADDMONTHS () function",
        "D. Use process builder and set overdue Date equal to DueDate + 60",
      ],
      answer: "A",
      title: "Question 94",
      explanation: "",
    },
    {
      content: "What rules can be used to Opportunity object? (2)",
      options: [
        "A. Auto-response",
        "B. Workflow",
        "C. Assignment",
        "D. Validation",
      ],
      answer: "B,D",
      title: "Question 95",
      explanation: "",
    },
    {
      content:
        "Universal Containers uses a private sharing model for opportunities. This model CANNOT be changed due to a regional structure A new sales operations team has been created. This team needs to perform analysis on Opportunity data, all should have read arid write access to all Opportunities.\nWhat are two recommended solutions for the app builder to give the users appropriate access? Choose 2 answers",
      options: [
        "A. Add a permission set with 'View All\" and 'Modify All'' opportunity permissions enabled.",
        "B. Add a manual share for all opportunities with each user on the sales operations team.",
        "C. Create a criteria based sharing rule to all opportunities with the sales operations public group.",
        "D. Create a criteria-based sharing rule to share all opportunities with the sales operations private group",
      ],
      answer: "B",
      title: "Question 96",
      explanation: "",
    },
    {
      content:
        "Which values must be defined when creating a new Opportunity stage? Choose 3",
      options: [
        "A. Amount",
        "B. Probability",
        "C. Forecast category",
        "D. Close date",
        "E. Type",
      ],
      answer: "A,C,D",
      title: "Question 97",
      explanation: "",
    },
    {
      content:
        "Universal containers needs to flag leads with one or more business areas. They need to add a field to capture these to the lead records. There is no need to report on this field. What is the appropriate field type?",
      options: [
        "A. Picklist",
        "B. Radio Buttons(multi-select)",
        "C. Picklist (multi-select)",
        "D. Text Area",
      ],
      answer: "C",
      title: "Question 98",
      explanation: "",
    },
    {
      content:
        "What may occur if workflow rules are reevaluated after a field change by afield update?",
      options: [
        "A. A recursive loop potentially results in exceeding organizational limits.",
        "B. Workflow rules trigger validation rules on field updates.",
        "C. Cross-object workflow rules result in re-evaluation after field change.",
        "D. Workflow rules trigger more workflow rules to be re-evaluated.",
      ],
      answer: "A,D",
      title: "Question 99",
      explanation: "",
    },
    {
      content: "Which sandbox type allows for the use of a sandbox template?",
      options: [
        "A. Developer Pro Sandbox",
        "B. Partial Sandbox",
        "C. Config Sandbox",
        "D. Developer Sandbox",
      ],
      answer: "B",
      title: "Question 100",
      explanation: "",
    },
    {
      content:
        "Cool Air Conditioners has been using Service Cloud to manage cases, but are now considering using it to manage field service jobs. They would like to track field service activity and assignment to technicians. What is the recommended solution to meet these requirements? Choose 1 answer.",
      options: [
        "A. Utilize the standard objects Work Order and Work Order Line Items",
        "B. Install an AppExchange product that provides Field Service functionality",
        "C. Extend the Service Cloud configuration to handle Field Service cases",
        "D. Use real time API integration to connect Salesforce with an external field service application",
      ],
      answer: "A",
      title: "Question 101",
      explanation: "",
    },
    {
      content:
        "A production org includes custom objects containing confidential Information. A sandbox h needed that Includes data records, excludes all of the confidential objects, and can be refreshed weekly the confidential objects, and can be refreshed weekly.\nWhat steps should an App Builder take to meet these requirements?",
      options: [
        "A. Create a Developer Pro Sandbox and schedule Data loader to download selected object data weekly.",
        "B. Create a Developer Sandbox and schedule Data loader to download selected object data weekly.",
        "C. Create a Partial Copy Sandbox and use a sandbox template.",
        "D. Create a Full Sandbox and use a sandbox template",
      ],
      answer: "C",
      title: "Question 102",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants to track installation information once it container has been purchased on a custom object. Sales reps should have visibility of all the installation with their opportunities.\nvisibility of all the installations associated with their opportunities.\nWhat kind of relationship should this new object have to the Opportunity?",
      options: [
        "A. Many to Many",
        "B. Master-Detail",
        "C. Lookup",
        "D. Hierarchical",
      ],
      answer: "D",
      title: "Question 103",
      explanation: "",
    },
    {
      content:
        "The VP of Sales has requested that Account Site information should be visible onall Opportunity records.\nWhat is the recommended solution to meet this requirement?",
      options: [
        "A. Process Builder",
        "B. Roll-Up Summary Field",
        "C. Cross-Object Formula Field",
        "D. Workflow Rule",
      ],
      answer: "C",
      title: "Question 104",
      explanation: "",
    },
    {
      content:
        "What type of field can be used to filter a Report Chart that has been added to a Page Layout?",
      options: [
        "A. Matching ID Field",
        "B. Name Field",
        "C. Formula Field",
        "D. Standard Field",
      ],
      answer: "A",
      title: "Question 105",
      explanation: "",
    },
    {
      content:
        "What metadata can be made manually in production without deployment? (Choose 2)",
      options: [
        "A. Apex trigger",
        "B. Reports and Dashboards",
        "C. Apex class",
        "D. Visualforce",
      ],
      answer: "B,D",
      title: "Question 106",
      explanation: "",
    },
    {
      content:
        "What type of field can be used to filter a report chart that has been added to page Layout?",
      options: [
        "A. Name field",
        "B. Formula field",
        "C. Standard field",
        "D. Matching ID field",
      ],
      answer: "D",
      title: "Question 107",
      explanation: "",
    },
    {
      content: "What is a capability of schema builder? (Select 2)",
      options: [
        "A. To modify custom field help text on standard objects",
        "B. To create new lookup or master-detail object relationships",
        "C. To enable field history tracking on standard objects",
        "D. To update descriptions of standard and custom objects",
      ],
      answer: "A,B",
      title: "Question 108",
      explanation: "",
    },
    {
      content:
        "Which statement is true about an external id field? Choose 2 answers",
      options: [
        "A. The field must be unique since duplicates are not allowed within salesforce",
        "B. The field must contain at least one number and at least one letter",
        "C. The field contains unique records identifiers from a system outside of salesforce",
        "D. The field can be unique based on case-sensitive or case-insensitive values.",
      ],
      answer: "A,C",
      title: "Question 109",
      explanation: "",
    },
  ],
});
