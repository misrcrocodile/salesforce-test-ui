window.testContent = window.testContent || [];
var testId = "Salesforce.Platform-App-Builder";
var testName = "Salesforce.Platform-App-Builder";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "Salesforce.Platform-App-Builder.v2020-08-09.q94",
  content: [
    {
      content:
        "The Director of customer service wants to receive a notification when a case stays in the '' new'' status for more than four business hours.\nWhich two automation processes should be used to accomplish this?\nChoose 2 answers",
      options: [
        "A. Flow Builder",
        "B. Escalation rules",
        "C. Scheduled Apex",
        "D. Process Builder",
      ],
      answer: "B,D",
      title: "Question 1",
      explanation: "",
    },
    {
      content:
        "The customer service team at Universal containers uses a custom Project object to track their customer projects. An App builder needs to create a relationship between the project object and the related client Account record. A private sharing model is in place for both Accounts and projects. Which statement is true when creating an Account lookup field on the Project object? Choose 2 answers",
      options: [
        "A. The account record can include roll-up summary field with data from the project records",
        "B. The account lookup field on the project record can be made optional.",
        "C. Users can only delete Accounts if they have access to related projects records",
        "D. Cross-object field updates between the Project and Account records are not supported",
      ],
      answer: "B,C",
      title: "Question 2",
      explanation: "",
    },
    {
      content: "Where custom buttons can be placed? (Choose 3)",
      options: [
        "A. Web to case",
        "B. Related object",
        "C. Record page",
        "D. Personal account",
      ],
      answer: "B,C,D",
      title: "Question 3",
      explanation: "",
    },
    {
      content:
        "An App Builder is loading the data into salesforce. To link the new records back to the legacy system, a field will be used to track the legacy ID on the account object. For future data loads this ID will be used when upserting records. Which field attribute should be selected? Choose 2 answers",
      options: [
        "A. External ID",
        "B. Required",
        "C. Text (encrypted)",
        "D. Unique",
      ],
      answer: "A,D",
      title: "Question 4",
      explanation: "",
    },
    {
      content:
        "When a user creates a record by using an object-specific create action, what feed item for that record appears? (Choose 3 answers)",
      options: [
        "A. In the Chatter feed of the first user who follows the record on which the record was created",
        "B. In the feed for the record on which the new record was created",
        "C. In the user profile feed for all users who can view the record",
        "D. In the Chatter feed of the user who created the record",
        "E. As the first entry in the feed for the new record",
      ],
      answer: "B,D,E",
      title: "Question 5",
      explanation: "",
    },
    {
      content:
        "Which values must be defined when creating a new Opportunity Stage? Choose 3 answers",
      options: [
        "A. Type",
        "B. Amount",
        "C. Close Date",
        "D. Forecast Category",
        "E. Probability",
      ],
      answer: "A,D,E",
      title: "Question 6",
      explanation: "",
    },
    {
      content:
        "When a user creates an Account report, the user does not see Industry as an available field in the report builder. However, this same user is able to see it in the Account page layout What scenario would cause this?",
      options: [
        "A. The user does not have Industry field visibility in the field - level security",
        "B. The Industry field has no record values in the Account.",
        "C. The Industry field is not enabled for the particular record type",
        "D. The user uses a custom report type which does not include the Industry field.",
      ],
      answer: "D",
      title: "Question 7",
      explanation: "",
    },
    {
      content:
        "Which two relationship types can be defined with external object? Choose 2 answers",
      options: [
        "A. External Master-Detail",
        "B. External Lookup",
        "C. Cross-Organization Lookup",
        "D. Indirect Lookup",
      ],
      answer: "B,D",
      title: "Question 8",
      explanation: "",
    },
    {
      content:
        "Universal Containers would like to automatically assign a specific permission set to new users. How can this requirement be met? Choose 2 Answers",
      options: [
        "A. Create a flow on the user object to assign a permission set.",
        "B. Create an approval process on the User object to assign a permission set",
        "C. Create a lightning process on the user object to launch a flow.",
        "D. Create a workflow rule on the User object to assign a permission set.",
      ],
      answer: "A,C",
      title: "Question 9",
      explanation: "",
    },
    {
      content:
        "Which of the following is true in regards to the User Acceptance testing (UAT) step in a large enterprise application lifecycle? Choose 2 answers.",
      options: [
        "A. UAT comes before Integration testing",
        "B. UAT is typically the last step before deploying changes to production",
        "C. UAT can be used for end user testing or training",
        "D. UAT come after Integration Testing",
      ],
      answer: "C,D",
      title: "Question 10",
      explanation: "",
    },
    {
      content:
        "Which statement is true for embedding a visual force page in a page layout?(Choose 2)",
      options: [
        "A. Visualforce pages on a page layout have attributes for width and height",
        "B. Visualforce pages can only be placed in the visual force section in the page layout",
        "C. Visualforce pages can be placed anywhere in a page layout",
        "D. Visualforce pages on a field set have attributes for width and height",
      ],
      answer: "A,B",
      title: "Question 11",
      explanation: "",
    },
    {
      content:
        "Which use case can be accomplished using a custom link? Choose 3 answers",
      options: [
        "A. Navigate to a custom visual flow to update the current record",
        "B. Navigate to an Apex Trigger to update the current record",
        "C. Navigate to a create a record page with field pre-populated",
        "D. Navigate to an external system using data in salesforce",
        "E. Navigate to a process to update the current record",
      ],
      answer: "C,D,E",
      title: "Question 12",
      explanation: "",
    },
    {
      content:
        "Which two report formats can be used as a source report to configure a reporting snapshot? Choose 2 answers",
      options: [
        "A. Summary format",
        "B. Matrix format",
        "C. Tabular format",
        "D. Joined format",
      ],
      answer: "A,B",
      title: "Question 13",
      explanation: "",
    },
    {
      content:
        "At Universal Containers, each admin and developer use a separate developer pro sandbox. Configuration and code are then migrated to a partial data sandbox for combination and initial testing. Once approved the configuration and code are then migrated to a full sandbox for final toad and regression testing before going to production.\nWhen should the full sandbox be refreshed?",
      options: [
        "A. After a new user is added to production.",
        "B. After each major release to production.",
        "C. After each push from the partial data sandbox.",
        "D. After user acceptance testing is complete.",
      ],
      answer: "C",
      title: "Question 14",
      explanation: "",
    },
    {
      content: "What is the capability of schema Builder? Choose 2 Answers",
      options: [
        "A. Editing custom settings",
        "B. Showing selected objects on the page.",
        "C. Creating a new record type",
        "D. Viewing page layout in a new window",
      ],
      answer: "B,D",
      title: "Question 15",
      explanation: "",
    },
    {
      content:
        "How would you ensure that records of a particular object are visible only to the user, and users higher in the role hierarchy? choose 2 answers.",
      options: [
        "A. Set org wide sharing default for the object as private",
        "B. Define a profile list",
        "C. Define a role hierarchy",
        "D. Set org wide sharing default for the object as manager view",
      ],
      answer: "A,C",
      title: "Question 16",
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
      title: "Question 17",
      explanation: "",
    },
    {
      content:
        "Which three Salesforce functionalities are ignored when process field updates in workflow rules and approval processes?",
      options: [
        "A. Validation Rules",
        "B. Decimal places and character limits",
        "C. Multiple currencies",
        "D. Record type picklist value assignments",
        "E. Field-Level Security",
      ],
      answer: "A,D,E",
      title: "Question 18",
      explanation: "",
    },
    {
      content: "Which report types may be used with Analytic Snapshots?(2)",
      options: ["A. Tabular", "B. Matrix", "C. Summary", "D. Joined"],
      answer: "A,C",
      title: "Question 19",
      explanation: "",
    },
    {
      content:
        "Which two metadata changes can be made directly in a production environment without deploying from a sandbox?",
      options: [
        "A. Apex triggers",
        "B. Visualforce pages",
        "C. Apex classes",
        "D. Validation rules",
      ],
      answer: "B,D",
      title: "Question 20",
      explanation: "",
    },
    {
      content:
        "UVC's CFO has asked that all deals with more than a 40% discount get automatically sent to the VP of Finance. He will review these deals without the sales rep needing to take action Which two ways can this be accomplished without building code? Choose two answer",
      options: [
        "A. Create a new process with a submit for approval action to automatically submit deals for approval",
        "B. Launch a flow that uses the submit for approval action to submit deals for approval",
        "C. Launch a new approval process that has automatic submission enabled as an initial submission action",
        "D. Create a new approval process that has automatic submission enabled in the entry criteria",
      ],
      answer: "A,D",
      title: "Question 21",
      explanation: "",
    },
    {
      content:
        "Universal Containers stores invoices in SAP. Users want to view invoice data on the related Account records in Salesforce. How can this be achieved? Choose 2 answers",
      options: [
        "A. Create a custom Invoice object and connect to SAP using Data Loader.",
        "B. Use SAP data export functions to load data directly in Salesforce",
        "C. Create an external object connected to an invoice table in SAP.",
        "D. Connect to an OData Publisher Service for SAP databases",
      ],
      answer: "C,D",
      title: "Question 22",
      explanation: "",
    },
    {
      content:
        "What is a true statement in regard to creating custom report types?",
      options: [
        "A. When the primary object is a custom object and is deleted, then the report type and any reports created from it must be deleted manually",
        "B. The detail object in a master-detail relationship cannot be added as a secondary object on a custom report type",
        "C. Any object can be chosen unless the object is not visible to the person creating the report type through security settings",
        "D. Once a report type is saved with a standard or custom primary object, the primary object cannot be changed for the report type",
      ],
      answer: "D",
      title: "Question 23",
      explanation: "",
    },
    {
      content:
        "UVC uses a custom object to track open job positions. They would like toautomatically post updates on a record's feed whenever a position stage is changed.Which social feature can be used to accomplish this.",
      options: [
        "A. Feed tracking",
        "B. Auto response rule",
        "C. Feed quick Action",
        "D. Workflow rule",
      ],
      answer: "A",
      title: "Question 24",
      explanation: "",
    },
    {
      content:
        "Universal Containers has a junction object called Invoices with a primary Master-Detail relationship with Accounts and a secondary Master-Detail relationship with Contacts. The app builder has a requirement to change the primary Master-Detail relationship to Lookup. What happens to the Master-Detail relationship with Contacts?",
      options: [
        "A. The Contacts Master-Detail also converts to Lookup.",
        "B. The Contacts Master-Detail field is deleted from the object",
        "C. The Contacts Master-Detail becomes the primary.",
        "D. The Contacts Master-Detail values are cleared from invoices.",
      ],
      answer: "C",
      title: "Question 25",
      explanation: "",
    },
    {
      content:
        "Universal Containers has separated business requirements for consumer and Business Opportunities. The sales team work with both types of Opportunities. The app builder created two record types on the Opportunity Object. Which action can now be performed? Choose 2 answers",
      options: [
        "A. Create unique Opportunity stages by sales process.",
        "B. Enable field validation by sales process.",
        "C. Prevent access to secure data fields by sales process.",
        "D. Specify a different page layout by sales process.",
      ],
      answer: "B,D",
      title: "Question 26",
      explanation: "",
    },
    {
      content:
        "When a user creates an account report, the user does not see industry as an available field in the report builder. However, this same user is able to see in the account page layout. What scenario would cause this?",
      options: [
        "A. The industry field is not enabled for the particular record type",
        "B. The industry field has no record values in the account.",
        "C. The user uses a custom report type which does not include the industry field",
        "D. The user does not have industry field visibility in the field level security",
      ],
      answer: "B",
      title: "Question 27",
      explanation: "",
    },
    {
      content:
        "Which statement is true when a new full sandbox is created? Choose 2 answers",
      options: [
        "A. Usernames will be modified uniquely for that sandbox",
        "B. User's email addresses will not be modified.",
        "C. Default email deliverability is set to system email only",
        "D. Chatter data will be copied to the sandbox by default",
      ],
      answer: "B,C",
      title: "Question 28",
      explanation: "",
    },
    {
      content:
        "Which capability allows an app builder to grant object-level access? Choose 2 answers",
      options: [
        "A. Assigning a user a Profile that allows Read access to an object",
        "B. Assigning a user a Public Group that allows for Read and Edit access to an object",
        "C. Assigning a user a Permission Set that allows for Read and Edit access to an object",
        "D. Assigning a user a Role that allows Read access to an object.",
      ],
      answer: "A,C",
      title: "Question 29",
      explanation: "",
    },
    {
      content:
        "Universal Containers would like to embed a chart of all related Opportunities, by stage, on the Account detail page. Which type of report should the App Builder create to add to the Account page layout?",
      options: [
        "A. A tabular report on the Opportunity object.",
        "B. A tabular report on the Account object.",
        "C. A summary report on the Opportunity object.",
        "D. A summary report on the Account object.",
      ],
      answer: "C",
      title: "Question 30",
      explanation: "",
    },
    {
      content:
        "You want to use an External Data Object Table from Heroku carrying Product Category information. The data need to be included in Salesforce and searchable. What do you have to do before you can use the connection. (Choose 2)",
      options: [
        "A. URL / choose the URL",
        'B. Press "validate and sync"',
        'C. Choose "include in Salesforce searches" option',
        'D. Choose "include as index field"',
      ],
      answer: "B,C",
      title: "Question 31",
      explanation: "",
    },
    {
      content:
        "A customer service representative at a call center would like to be able to collect information from customers using a series of question prompts. What could be used to accomplish this?",
      options: [
        "A. Visual workflow",
        "B. Workflow Rules",
        "C. Lightning process builder",
        "D. Lightning Connect",
      ],
      answer: "A",
      title: "Question 32",
      explanation: "",
    },
    {
      content: "What is the capability of a schema builder? Choose 2 answers",
      options: [
        "A. To create new look-up or master-detail object relationship",
        "B. To update description of standard and custom objects.",
        "C. To enable field history tracking on standard objects.",
        "D. To modify custom field help text on standard objects",
      ],
      answer: "A,D",
      title: "Question 33",
      explanation: "",
    },
    {
      content:
        "What is a true statement in regards to converting a tabular, summary, ormatrix report to a joined report? (Choose 3)",
      options: [
        "A. Cross filter are not supported in joined reports",
        "B. Report formula fields are not supported in joined reports",
        "C. Bucket field are not supported in joined reports",
        "D. Joined report blocks are formatted as matrix reports",
        "E. The rows to display filter is not supported in joined reports",
      ],
      answer: "A,C,E",
      title: "Question 34",
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
      title: "Question 35",
      explanation: "",
    },
    {
      content:
        "The VP of account management at Universal Containers has requested that all contacts mailing postal codes match the associated accounts shipping postal code. How can this be enforced using validation rules?",
      options: [
        "A. Create a validation rule using a compare operator",
        "B. Create a validation rule using a not equal operator",
        "C. Create a validation rule using the geolocation() function",
        "D. Create a validation rule using the distance() function",
      ],
      answer: "B",
      title: "Question 36",
      explanation: "",
    },
    {
      content:
        "At Universal Containers, the VP of Service has requested a visual indicator flag on each case, based on the case priority. High-priority cases should be flagged red, medium-priority should be flagged yellow, and low-priority cases should be flagged green. Which formula would accomplish this requirement? Choose 2 answers",
      options: [
        'A. IF(ISPICKVAL(Priority, "Low"), "img/samples/flag_green.gif", IF(ISPICKVAL(Priority, "Medium"), "img/samples/flag_yellow.gif", IF(ISPICKVAL(Priority, "High"), "img/samples/flag_red.gif", "/s.gif")))',
        'B. IMAGE( IF(ISPICKVAL(Priority, "Low"), "img/samples/flag_green.gif", IF(ISPICKVAL(Priority, "Medium"), "img/samples/flag_yellow.gif", IF(ISPICKVAL(Priority, "High"), "img/samples/flag_red.gif"))), "Priority Flag")',
        'C. IMAGE(CASE( Priority, "Low", "img/samples/flag_green.gif", "Medium", "img/samples/flag_yellow.gif", "High", "img/samples/flag_red.gif", "Priority Flag")',
        'D. CASE( Priority, "Low", "img/samples/flag_green.gif", "Medium", "img/samples/flag_yellow.gif", "High", "img/samples/flag_red.gif", "/s.gif")',
      ],
      answer: "B,C",
      title: "Question 37",
      explanation: "",
    },
    {
      content:
        "Which of the following can be source of report chart placed in page layout?(Choose 2)",
      options: ["A. Summary", "B. Matrix", "C. Joined", "D. Tabular"],
      answer: "A,B",
      title: "Question 38",
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
      title: "Question 39",
      explanation:
        "https://help.salesforce.com/apex/HTViewHelpDoc?id=notes_on_changing_custom_field_types.htm&language=en_US If you change the data type of any custom field that is used for lead conversion, that lead field mapping will be deleted. You would have to recreate the field mapping, this satisfies the requirements.",
    },
    {
      content:
        "Representatives at Universal Containers use Salesforce to record information for leads. When new prospects are added, an outbound message is sent to SAP with lead's information. Which automation process will accomplish this without writing any code?",
      options: [
        "A. Create a Workflow Rule with an outbound message as the action",
        "B. Use Visual Workflow to create a wizard that will send an outbound message.",
        "C. Design an Approval Process that sends an outbound message upon arrival.",
        "D. Create a process using Lightning Process Builder to send the outbound message.",
      ],
      answer: "A",
      title: "Question 40",
      explanation: "",
    },
    {
      content:
        "A new custom object is being created with a private sharing setting. The business wants to share individual records with specific people or group of people on a case by case basis. What options does the business user have to manually share individual records? Choose 3 answers",
      options: [
        "A. Permission Sets",
        "B. Profiles",
        "C. Roles",
        "D. Users",
        "E. Public Groups",
      ],
      answer: "C,D,E",
      title: "Question 41",
      explanation: "",
    },
    {
      content:
        "What Is true statement regarding roll up summary fields. Select 2.",
      options: [
        "A. Multi select picklist files can be used in the field column of the field column of roll up summary filters.",
        "B. Changes to the value of a roll up summary field can trigger assignment rules to run",
        "C. Roll up summary fields can only be created on the master of master-detail relationship",
        "D. The roll up summary field inherits the field level security of the child object.",
      ],
      answer: "B,C",
      title: "Question 42",
      explanation: "",
    },
    {
      content:
        "The Training team at UVC uses a custom Training object to track their customer trainings. An App Builder needs to create a relationship between the Training object and the related Student's record. A private sharing model is in place for both Students and Training. Which two statements are true when creating a Student lookup field on the Training object? Choose 2 answers",
      options: [
        "A. On Training record, the Student Lookup field can be made optional",
        "B. On Student Record, users can set up Roll-up summary fields on Training records",
        "C. Cross-object field updates between Training and Student records are not supported",
        "D. On Training record, users can only delete students, if they have access to it",
      ],
      answer: "A,D",
      title: "Question 43",
      explanation: "",
    },
    {
      content: "What are the capabilities of schema builder ?",
      options: [
        "A. Editing custom settings",
        "B. Viewing page layouts in a new window",
        "C. Showing selected objects on a page",
        "D. Creating a new record type",
      ],
      answer: "B,C",
      title: "Question 44",
      explanation: "",
    },
    {
      content:
        "The organization-wide default for a custom object is set to private. The superior profile grants view access to the same object. A user with the superior profile is also listed as the manager on the user detail record for a subordinate. However, the superior still cannot view records owned by the subordinate.\nWhat is preventing the superior from viewing records owned by the subordinate? Choose 2 answers",
      options: [
        "A. Organization-wide settings for the custom object grant access to other user with the same role.",
        "B. The superior requires permission set in order to view the subordinate's records.",
        "C. Organization-wide settings for the custom object do not grant access using hierarchy.",
        "D. The superiors' role is not above the subordinate's role in the hierarchy.",
      ],
      answer: "C,D",
      title: "Question 45",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants to standardize their business logic. They want to ensure that the workflow order is guaranteed to be the same each time. Which feature can be used to accomplish this? Choose 2 answers.",
      options: [
        "A. Lightning Process Builder",
        "B. Workflow",
        "C. Chatter Actions",
        "D. Visual Workflow",
      ],
      answer: "A,D",
      title: "Question 46",
      explanation: "",
    },
    {
      content:
        "Which setting is available to customize Salesforce1 mobile app for branding? Choose 3 answers",
      options: [
        "A. Background color on loading page.",
        "B. Notification and search icon",
        "C. Action bar color",
        "D. Header and search bar color.",
        "E. The image on loading page",
      ],
      answer: "A,D,E",
      title: "Question 47",
      explanation: "",
    },
    {
      content:
        "Universal container sales reps can modify fields on an opportunity until it isclosed. Only the sales operations team can modify the post close follow up date andpost close followup comments fields. How to make this happen?",
      options: [
        "A. Use field-level security on page layouts to restrict editing fields",
        "B. Use record types with field sets and restrict editing fields using field-level security",
        "C. Use multiple record types, page layouts, and profiles",
        "D. Use field-level security to mark fields as read-only on the sales profile",
      ],
      answer: "C",
      title: "Question 48",
      explanation: "",
    },
    {
      content:
        "What metadata changes can be made directly in a production environment without deploying from sandbox? Choose 2 answers",
      options: [
        "A. Apex Classes",
        "B. Validation Rules",
        "C. Apex Triggers",
        "D. Visualforce Pages",
      ],
      answer: "B,D",
      title: "Question 49",
      explanation: "",
    },
    {
      content:
        "An app builder has been asked to provide users a way to identify a contact's \"preferred contact method\" directly on the contact record. users need to be able to identify whether a phone number or an email, is the contact's preferred communication method. Which field type will allow the app builder to accomplish this with the fewest fields possible?",
      options: ["A. Checkboxes", "B. Email", "C. Picklist", "D. Formula"],
      answer: "C",
      title: "Question 50",
      explanation: "",
    },
    {
      content:
        "UVC needs to flag leads with one or more business areas. They need to add a field to capture these to the Lead Record. There is no need to report on this field. What is the appropriate field type?",
      options: [
        "A. Picklist (Multi-Select)",
        "B. Picklist",
        "C. Radio Buttons (Multi-select)",
        "D. Text Area",
      ],
      answer: "A",
      title: "Question 51",
      explanation: "",
    },
    {
      content:
        "Which two statements are true about an External ID field? Choose 2 answers",
      options: [
        "A. The field can be unique based on case-sensitive or case-insensitive values.",
        "B. The field must contain at least one number and at least one letter.",
        "C. The field can be used to contain unique record identifiers from a system outside of Salesforce.",
        "D. The field must be unique since duplicates are NOT allowed within Salesforce.",
      ],
      answer: "A,C",
      title: "Question 52",
      explanation: "",
    },
    {
      content: "What can be branded in SF1?(Select 3)",
      options: [
        "A. Loading logo",
        "B. Header and Search",
        "C. Action tab bar",
        "D. Loading page color",
      ],
      answer: "A,B,D",
      title: "Question 53",
      explanation: "",
    },
    {
      content:
        "The CRM Manager at Universal Containers has requested that a custom text field be converted to a picklist in order to promote better data hygiene. What needs to be considered before changing the field type? Choose 2 answers",
      options: [
        "A. Existing list views that reference the field may be deleted.",
        "B. Changing a field type will remove existing field history.",
        "C. All data should be backed up before converting a text field.",
        "D. Field references will be removed in Visualforce pages",
      ],
      answer: "A,C",
      title: "Question 54",
      explanation: "",
    },
    {
      content:
        "Universal con needs a field on the account to track how many opportunitiesare closing within the next 30 days. What can be used?",
      options: [
        "A. Apex code",
        "B. Workflow rule",
        "C. Process builder",
        "D. Roll-up summary field",
      ],
      answer: "A",
      title: "Question 55",
      explanation: "",
    },
    {
      content: "Which sandbox is used for performance testing?",
      options: ["A. Developer Pro", "B. Full", "C. Developer", "D. Partial"],
      answer: "B",
      title: "Question 56",
      explanation: "",
    },
    {
      content:
        "What tools you need to use to migrate Metadata to Two Different Production Orgs? (3)",
      options: [
        "A. Force.Com Migration Tool",
        "B. Change Set",
        "C. Data Loader",
        "D. Force.Com IDE",
        "E. Unmanaged Package",
      ],
      answer: "A,D,E",
      title: "Question 57",
      explanation: "",
    },
    {
      content:
        "Which statements are true regarding Roll-Up Summary fields? (select all thatapply)",
      options: [
        "A. Validation errors can display when saving either the detail or master record.",
        "B. Because roll-up summary fields are not displayed on edit pages, you can use them in validation rules.",
        "C. Once created, you cannot change the detail object selected or delete any field referenced in your roll-up summary definition.",
        "D. Advanced currency management has no affect on roll-up summary fields.",
      ],
      answer: "A,B,C",
      title: "Question 58",
      explanation: "",
    },
    {
      content:
        "Universal Containers conduct evaluations of their sales reps using a custom object consisting of numerical scores and executive comments. The company wants to ensure that only the sales reps, and their manager's executive can view the rep's evaluation record but the reps should not be able to view the executive comment field on their review. How can these requirement be met?",
      options: [
        "A. Use a private sharing model granting record access using hierarchy; manage field access with field-level security",
        "B. Use a private sharing model granting record access using custom setting; manage field access with record types and page layouts",
        "C. Use a private sharing model granting record access using hierarchy; manage field access with record types and field-level security",
        "D. Use a private sharing model granting record access using custom setting; manage field access with page layouts and field level security",
      ],
      answer: "A",
      title: "Question 59",
      explanation: "",
    },
    {
      content:
        "Universal Insurance would like to highlight on a report claims that have been open for more than 30 days. What feature could be used for this? Choose 1 answer.",
      options: [
        "A. Conditional Highlighting",
        "B. Report Highlighting",
        "C. Bucket Highlighting",
        "D. Field Highlighting",
      ],
      answer: "A",
      title: "Question 60",
      explanation: "",
    },
    {
      content:
        "A custom field contains a feedback score which is on a scale of one to five. Endusers would like a visual indicator of one to five stars based on the number found inthe feedback score customer field.",
      options: ["A. Text", "B. Number", "C. Use a custom image", "D. Formula"],
      answer: "D",
      title: "Question 61",
      explanation: "",
    },
    {
      content: "Which statement about record types is true? (Select 2)",
      options: [
        "A. Record types can be used to define picklist values available for a given field",
        "B. Users cannot view records assigned to a record type their profile does not have access to",
        "C. The ability to create records of a specific record type is determined by the profile",
        "D. Record types can only be assigned to one profile at a time",
      ],
      answer: "A,C",
      title: "Question 62",
      explanation: "",
    },
    {
      content:
        "Universal containers wants to provide a different view for its users when they access an Account record in Salesforce1 instead of the standard web version. How can this be accomplished? Choose 2 answers",
      options: [
        "A. By adding a mobile layout and assigning it to a profile.",
        "B. By adding actions in the Salesforce1 action bar section.",
        "C. By adding Visualforce page to the mobile cards section",
        "D. By adding quick actions in the publisher section.",
      ],
      answer: "A,C",
      title: "Question 63",
      explanation: "",
    },
    {
      content:
        "Universal Containers needs the ability to generate contract documents. All the data required for a contract resides in a custom object. What is the recommended solutions?",
      options: [
        "A. Select and install an AppExchange product to meet the contract generation needs.",
        "B. Create the HTML template for contracts and store it in the Public Folder.",
        "C. Store a template in the static resources and configure the Action Link Template to use it.",
        "D. Enable the contract feature and create a custom Contract template based on the Standard template.",
      ],
      answer: "A",
      title: "Question 64",
      explanation: "",
    },
    {
      content:
        "What may occur if workflow rules are re-evaluated after a field change by a field update? Choose 2 answers",
      options: [
        "A. Workflow rules trigger more workflow rules to be re-evaluated.",
        "B. Cross-object workflow rules result in re-evaluation after field change.",
        "C. A recursive loop potentially results in exceeding organizational limits.",
        "D. Workflow rules trigger validation rules on field updates",
      ],
      answer: "A,C",
      title: "Question 65",
      explanation: "",
    },
    {
      content:
        "What is a true statement in regards to creating custom report types?",
      options: [
        "A. Once a report type is saved with a standard or custom primary object, the primary object cannot be changed for that report type.",
        "B. Any object can be chosen unless the object is no visible to the person creating the report type through security settings",
        "C. When the primary object is a custom object and is deleted, then the report type and any reports created from it must be deleted manually.",
        "D. The detail object in a master- detail relationship cannot be added as a secondary object on a custom report type",
      ],
      answer: "A",
      title: "Question 66",
      explanation: "",
    },
    {
      content:
        "A workflow has been written to update the 'Stage' field on opps. What will be the impact of this field update?",
      options: [
        "A. Forecast field on opp",
        "B. Both A&B",
        "C. No Impact",
        "D. Type fields on opp",
      ],
      answer: "B",
      title: "Question 67",
      explanation: "",
    },
    {
      content:
        "Universal containers needs to flag leads with one or more business areas. They need to add a field to capture these to the lead records. There is no need to report on this field. What is the appropriate field type?",
      options: [
        "A. Picklist (multi-select)",
        "B. Radio Buttons(multi-select)",
        "C. Picklist",
        "D. Text Area",
      ],
      answer: "A",
      title: "Question 68",
      explanation: "",
    },
    {
      content:
        "Universal Containers uses a private sharing model for opportunities. This model CANNOT be changed due to a regional structure A new sales operations team has been created. This team needs to perform analysis on Opportunity data, all should have read arid write access to all Opportunities.\nWhat are two recommended solutions for the app builder to give the users appropriate access? Choose 2 answers",
      options: [
        "A. Create a criteria-based sharing rule to share all opportunities with the sales operations private group",
        "B. Add a permission set with 'View All\" and 'Modify All'' opportunity permissions enabled.",
        "C. Create a criteria based sharing rule to all opportunities with the sales operations public group.",
        "D. Add a manual share for all opportunities with each user on the sales operations team.",
      ],
      answer: "D",
      title: "Question 69",
      explanation: "",
    },
    {
      content: "What is recommended to refresh a full sandbox?",
      options: [
        "A. After a major production release.",
        "B. After a UAT sign-off",
        "C. Within 3 hours of when it is needed.",
        "D. Whenever a new production user is added.",
      ],
      answer: "A",
      title: "Question 70",
      explanation: "",
    },
    {
      content:
        "What is true statement regarding master - detail relationship? Choose 3 answers",
      options: [
        "A. A master - detail relationship cannot be converted to a look-up relationship",
        "B. Deleting a master record in a master detail relationship deletes all related detail records",
        "C. Standard objects can be on the detail side of the custom object in a master-detail relationship",
        "D. A master-detail relationship cannot be created if the custom object on the detail side already contains data.",
        "E. Master-detail relationship can convert to a look -up relationship if no roll-up summary field exist on the master object",
      ],
      answer: "B,D,E",
      title: "Question 71",
      explanation: "",
    },
    {
      content:
        "The app builder at Universal Containers has been asked to ensure that the Country field on the Account object Is captured as the two letter abbreviation How can the app builder satisfy this requirement?",
      options: [
        "A. Create a workflow rule that only allows the expected format.",
        "B. Create a workflow rule to set values using an external data source.",
        "C. Create a validation rule that only allows the expected format",
        "D. Create a validation rule to set values using an external data source",
      ],
      answer: "B",
      title: "Question 72",
      explanation: "",
    },
    {
      content:
        "Which use case can be accomplished using a custom link?(Select 3)",
      options: [
        "A. Navigate to Apex trigger",
        "B. To external system using data of salesforce",
        "C. To create a custom visual flow",
        "D. To create a record page",
        "E. To a process to update current record",
      ],
      answer: "B,D,E",
      title: "Question 73",
      explanation: "",
    },
    {
      content:
        "UVC wants to automate a business process using workflow. They are aware that workflow rules may cause recursive behavior, and as a result certain actions will only cause workflow rules that didn't fire previously to be retriggered. Which workflow action might cause this behavior?",
      options: [
        "A. Workflow Emails containing hard coded links with Salesforce IDs referencing specific workflow rules",
        'B. Workflow Tasks where the "Due Date" field is set to "Rule Trigger Date" minus X days',
        'C. Workflow Field Updates with the "Re-evaluate Workflow Rules After Field Changes" field selected',
        'D. Workflow Outbound messages with the "Protected Component" field selected',
      ],
      answer: "C",
      title: "Question 74",
      explanation: "",
    },
    {
      content:
        "UVC wants to optimize routes for its traveling service personnel. What is recommended solution?",
      options: [
        "A. Configure Territory hierarchy and rules for routes based on territory",
        "B. Use geolocation fields with Distance and Geolocation formulas",
        "C. Use an AppExchange partner product",
        "D. Configure routing options in a custom object",
      ],
      answer: "C",
      title: "Question 75",
      explanation: "",
    },
    {
      content:
        "The organization wide defaults for a custom object is set to private. The Supervisor profile grants view access to the same object. A user with the Supervisor profile is also listed as the Manager on the user detail records for access. However, the supervisor still cannot view records owned by the subordinate. What is preventing the Supervisor from viewing records owned by the subordinate? Choose 2 answers",
      options: [
        "A. Organization wide settings for the custom object do not grant access using hierarchy",
        "B. The Supervisor's role is not above the subordinate's role in hierarchy",
        "C. Organization wide settings for the custom object grant access to other users with the same role",
        "D. The Supervisor requires a permission set in order to view the subordinate's record",
      ],
      answer: "A,B",
      title: "Question 76",
      explanation: "",
    },
    {
      content:
        "In a real estate app, if a listing is sold, all related inspections for the listing must be cancelled. What business logic feature best caters to this requirement? Choose 1 answer.",
      options: [
        "A. Use Visual Workflow to define a flow to iterate through the related inspection records and update the status to 'Cancelled'",
        "B. Use Process Builder to define a process action to update related records based on the listing status change",
        "C. Use a trigger to update the status of the related inspection records when the listing status is updated",
        "D. Create a standard workflow on the Listing object with a workflow record update action on the related Inspection records",
      ],
      answer: "B",
      title: "Question 77",
      explanation: "",
    },
    {
      content: "Which type of field cannot be universally required?",
      options: ["A. Summary", "B. Text", "C. Email", "D. Lookup"],
      answer: "A,D",
      title: "Question 78",
      explanation: "",
    },
    {
      content:
        "Universal Containers sales reps can modify fields on an opportunity until it is closed. Only the sales operation team can modify the post closed follow-up dates and post closed follow-up comments fields. How can these requirements be met?",
      options: [
        "A. Use multiple record types, page layouts and profiles.",
        "B. Use record types with field sets and restrict editing fields using field-level security.",
        "C. Use field level security to mark fields as read only on the sales profile",
        "D. Use field-level security on page layouts to restrict editing fields",
      ],
      answer: "D",
      title: "Question 79",
      explanation: "",
    },
    {
      content: "Person Accounts Choose 2 answers",
      options: [
        "A. Have the same icon as Business accounts",
        "B. Do use space in both account and contacts table",
        "C. Are enabled by default",
        "D. Are enabled via feature license",
        "E. Can only be merged with other person accounts",
      ],
      answer: "B,E",
      title: "Question 80",
      explanation: "",
    },
    {
      content:
        "The app builder at UVC has been asked to ensure that the amount field ispopulated when the stage is set to closed won. What can be used to meet this requirement?",
      options: [
        "A. Approval process",
        "B. Lighting process builder",
        "C. Validation rule",
        "D. Workflow",
      ],
      answer: "D",
      title: "Question 81",
      explanation: "",
    },
    {
      content:
        "Universal containers has a custom object that has a N:M relationship with opportunityLineItem carrying price and amount information. In order to compute total amounts and total prices per Opportunity using Rollup summary fields, what field type will you use.",
      options: [
        "A. Lookup",
        "B. Master-Detail",
        "C. Junction",
        "D. Crossobject",
      ],
      answer: "B",
      title: "Question 82",
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
      title: "Question 83",
      explanation: "",
    },
    {
      content:
        "A production org includes custom objects containing confidential Information. A sandbox h needed that Includes data records, excludes all of the confidential objects, and can be refreshed weekly the confidential objects, and can be refreshed weekly.\nWhat steps should an App Builder take to meet these requirements?",
      options: [
        "A. Create a Developer Pro Sandbox and schedule Data loader to download selected object data weekly.",
        "B. Create a Full Sandbox and use a sandbox template",
        "C. Create a Developer Sandbox and schedule Data loader to download selected object data weekly.",
        "D. Create a Partial Copy Sandbox and use a sandbox template.",
      ],
      answer: "D",
      title: "Question 84",
      explanation: "",
    },
    {
      content:
        "Which statement is true for embedding a Visualforce page in a page Layout. Choose 2 Answers",
      options: [
        "A. Visualforce Pages can only be place in the Visualforce section in a page layout.",
        "B. Visualforce Pages on a field set have attributes for width and height.",
        "C. Visualforce Pages on a page layout have attributes for width and height",
        "D. Visualforce Pages can be placed anywhere in the page layout.",
      ],
      answer: "C,D",
      title: "Question 85",
      explanation: "",
    },
    {
      content:
        "UVC is importing 1000 records into salesforce. They want to avoid any duplicate records from being created during the import. How can these requirement met?",
      options: [
        "A. Run duplicate check",
        "B. Manually merge",
        "C. Include a column in the import file that has other record name",
        'D. Use "prevent duplicates"',
      ],
      answer: "C",
      title: "Question 86",
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
      title: "Question 87",
      explanation: "",
    },
    {
      content:
        "Universal Con conducts evaluations of their sales reps using a custom objectconsisting of numerical scores and executive comments. The company wants toensure that only the sales reps, their managers,and their managers' executives canview the rep's evaluation record, but the reps should not be able to view the executive comment field on their review.",
      options: [
        "A. Hierarchy, manage field access with field-level security",
        "B. Use a private sharing model granting record across using hierarchy, managefield access with record types and field-level security",
        "C. Using custom settings, manage field access with record types and pagelayouts",
        "D. Use a private sharing model granting access using customer settings, managefield access with page layouts and field-level security",
      ],
      answer: "A",
      title: "Question 88",
      explanation: "",
    },
    {
      content: "What can be done after the workflow field re-evaluation?",
      options: [
        "A. Trigger another rule",
        "B. Out of hour limit (loop)",
        "C. Invalid data",
        "D. Option 1",
      ],
      answer: "B",
      title: "Question 89",
      explanation: "",
    },
    {
      content:
        "User at Universal Containers needs to be able to quickly create a contact record from the Account record's Chatter feed. How should the App Builder enable the functionality?",
      options: [
        'A. By creating a custom "Detail Page" Button on the Account.',
        'B. By creating a custom "Detail Page" Button on the Contract.',
        'C. By creating a custom "Create a Record" Action on the Account.',
        'D. By creating a custom "Create a Record" Action on the Contract',
      ],
      answer: "C",
      title: "Question 90",
      explanation: "",
    },
    {
      content:
        "Universal Containers manages internal projects by department using a customobject called projects. Only employees in the project's respective departmentshould have view access to all of the department's project records. If an employeechanges job roles and moves to another department, the employee should nolonger have access to the projects within their former department. How can theserequirements be met assuming the organization wide default for projects is set to private? (Choose 2)",
      options: [
        "A. Create a criteria-based sharing rule using the project's department that grants access to users by public groups.",
        "B. Create a criteria-based sharing rule using the project's department that grants access to users by profiles.",
        "C. Create a criteria-based sharing rule using the project's department that grants access to users by permission sets.",
        "D. Create a criteria-based sharing rule using the project's department that grants access to users by roles.",
      ],
      answer: "A,D",
      title: "Question 91",
      explanation: "",
    },
    {
      content:
        "Universal Containers would like to show different picklist values to different groups of user in a custom picklist field. What should be configured?",
      options: [
        "A. Record Types",
        "B. Field-level security",
        "C. Permission sets",
        "D. Page Layouts",
      ],
      answer: "A",
      title: "Question 92",
      explanation: "",
    },
    {
      content:
        "The Director of Marketing has asked the AppBuilder to create a formula fieldthat tracks how many days have elapsed since a contact was sent a marketingcommunication. The director is only interested in whole units.",
      options: ["A. Now()", "B. Date()", "C. Datevalue()", "D. Today()"],
      answer: "D",
      title: "Question 93",
      explanation: "",
    },
    {
      content:
        "UVC has two types of customer support processes: Platinum and Diamond. The App Builder created separate record types for each process on the Case Object. The customer support team should not be able to create new cases with the Diamond record type.How can this requirement be met?",
      options: [
        "A. Update the OWD to private",
        "B. Make the record type hidden to all users and then use sharing rules to share it",
        "C. Update the profile to remove the Diamond record type from the support team",
        "D. Remove the ability for the support team to create new case records",
      ],
      answer: "C",
      title: "Question 94",
      explanation: "",
    },
  ],
});
