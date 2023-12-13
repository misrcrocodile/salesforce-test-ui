window.testContent = window.testContent || [];
var testId = "Salesforce.Platform-App-Builder";
var testName = "Salesforce.Platform-App-Builder";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "Salesforce.Platform-App-Builder.v2021-09-03.q110",
  content: [
    {
      content: "Where custom buttons can be placed? (Choose 3)",
      options: [
        "A. Web to case",
        "B. Personal account",
        "C. Record page",
        "D. Related object",
      ],
      answer: "B,C,D",
      title: "Question 1",
      explanation: "",
    },
    {
      content:
        "An app builder has been asked to provide users a way to identify a Contact's \"Preferred Contact Method\" direction on Contact record. Users need to be able to identify whether a phone number or an email, is the Contact's preferred communication method. Which filed type will allow the App Builder to accomplish this with the fewest fields possible?",
      options: ["A. Email", "B. Checkboxes", "C. Picklist", "D. Formula"],
      answer: "B,C",
      title: "Question 2",
      explanation: "",
    },
    {
      content:
        "universal containers has implemented multi currency. There are several products that universal containers sells exclusively in europe and the UK. Opportunities for these products need to be written in euros or british pounds. Which solution should an app builder recommend ?",
      options: [
        "A. Create a new validation rule that allows only EUR or GBP to be selected from all active currencies when an opportunity is created for these products.",
        "B. Create a new record type for these products and include only the EUR and GBP currencies from the opportunity currency picklist",
        "C. Create a new page layout for these products that shows only the EUR and GRP currencies in the opportunity currency picklist.",
        "D. Create a new sales process that includes only the EUR and GBP currencies for these products.",
      ],
      answer: "D",
      title: "Question 3",
      explanation: "",
    },
    {
      content:
        "What metadata can be made manually in production without deployment? (Choose 2)",
      options: [
        "A. Reports and Dashboards",
        "B. Apex trigger",
        "C. Visualforce",
        "D. Apex class",
      ],
      answer: "A,C",
      title: "Question 4",
      explanation: "",
    },
    {
      content:
        "The Training team at UVC uses a custom Training object to track their customer trainings. An App Builder needs to create a relationship between the Training object and the related Student's record. A private sharing model is in place for both Students and Training. Which two statements are true when creating a Student lookup field on the Training object? Choose 2 answers",
      options: [
        "A. Cross-object field updates between Training and Student records are not supported",
        "B. On Training record, the Student Lookup field can be made optional",
        "C. On Student Record, users can set up Roll-up summary fields on Training records",
        "D. On Training record, users can only delete students, if they have access to it",
      ],
      answer: "B,D",
      title: "Question 5",
      explanation: "",
    },
    {
      content:
        "What may occur if workflow rules are re-evaluated after a field change by a field update? Choose 2 answers",
      options: [
        "A. Workflow rules trigger more workflow rules to be re-evaluated.",
        "B. Workflow rules trigger validation rules on field updates",
        "C. A recursive loop potentially results in exceeding organizational limits.",
        "D. Cross-object workflow rules result in re-evaluation after field change.",
      ],
      answer: "A,C",
      title: "Question 6",
      explanation: "",
    },
    {
      content:
        "A custom field contains a feedback score which is on a scale of one to five. Endusers would like a visual indicator of one to five stars based on the number found inthe feedback score customer field.",
      options: ["A. Text", "B. Formula", "C. Number", "D. Use a custom image"],
      answer: "B",
      title: "Question 7",
      explanation: "",
    },
    {
      content:
        "Which use case can be accomplished using a custom link? Choose 3 answers",
      options: [
        "A. Navigate to an external system using data in salesforce",
        "B. Navigate to an Apex Trigger to update the current record",
        "C. Navigate to a process to update the current record",
        "D. Navigate to a custom visual flow to update the current record",
        "E. Navigate to a create a record page with field pre-populated",
      ],
      answer: "A,C,E",
      title: "Question 8",
      explanation: "",
    },
    {
      content:
        "What data type can be used to summarizeroll-up summary. (Choose 3)",
      options: [
        "A. Number",
        "B. Formula",
        "C. Percent",
        "D. Date",
        "E. Currency",
      ],
      answer: "A,C,E",
      title: "Question 9",
      explanation: "",
    },
    {
      content:
        "In order to create an App Launcher component in Lightning what must an admin do?",
      options: [
        "A. Contact Salesforce to have the component activated for the Lightning App Builder.",
        "B. Join the pilot Lightning App Builder team.",
        "C. Navigate to Setup-Customize-User Interface to enable the component for the Lightning App Builder.",
        "D. Purchase a license for the Lightning App Builder.",
      ],
      answer: "A",
      title: "Question 10",
      explanation: "",
    },
    {
      content:
        'Universal Containers uses a custom object to track Site Visits. When the status of a Site Visit is changed from "In Progress" to "On Hold", the business wants the Site visit owner to be automatically assigned to an "On Hold" queue. Which capability can be used to accomplish this?',
      options: [
        "A. Visual Workflow",
        "B. Apex Trigger",
        "C. Assignment Rule",
        "D. Action",
      ],
      answer: "C",
      title: "Question 11",
      explanation: "",
    },
    {
      content:
        "What are the recommendations for unmanaged packages? (Choose 2)",
      options: [
        "A. For sale in App Ex",
        "B. For open source",
        "C. Should be deployed from Dev Edition",
        "D. For move to production",
      ],
      answer: "B,C",
      title: "Question 12",
      explanation: "",
    },
    {
      content:
        "All contact's mailing post code should match the account shipping postal code.How to do it?",
      options: [
        "A. Geolocation()",
        "B. Use NOT EQUAL operator",
        "C. Use compare operator",
        "D. Use distance()use distance()",
      ],
      answer: "C",
      title: "Question 13",
      explanation: "",
    },
    {
      content:
        "Which three standard component types are available in the Lightning App Builder? Choose 3 answers",
      options: [
        "A. Filter Text",
        "B. Report details",
        "C. Recent Items",
        "D. Rich Text",
        "E. Plain Text",
      ],
      answer: "B,C,D",
      title: "Question 14",
      explanation: "",
    },
    {
      content: "Which sandbox type allows for the use of a sandbox template?",
      options: [
        "A. Partial Sandbox",
        "B. Developer Pro Sandbox",
        "C. Developer Sandbox",
        "D. Config Sandbox",
      ],
      answer: "A",
      title: "Question 15",
      explanation: "",
    },
    {
      content:
        "UVC uses a custom object called Candidates to track information about people who are being recruited for jobs within the company. When an employee refers a recruiting candidate, that employee should have access to the Candidate record, however, only HR users should be able to view, edit, and report on the Salary field. Which action should be recommended for controlling who can view the Salary field?",
      options: [
        'A. Restrict access to the "Salary" field for general employee users using custom sharing settings',
        "B. Create and assign separate Candidate record types for general employee users and HR users",
        "C. Create and assign separate Candidate page layouts for general employee users and HR users",
        'D. Restrict access to the "Salary" field for general employee users using field-level security',
      ],
      answer: "D",
      title: "Question 16",
      explanation: "",
    },
    {
      content:
        "Representatives at Universal Containers use Salesforce to record information for leads. When new prospects are added, an outbound message is sent to SAP with lead's information. Which automation process will accomplish this without writing any code?",
      options: [
        "A. Create a Workflow Rule with an outbound message as the action",
        "B. Create a process using Lightning Process Builder to send the outbound message.",
        "C. Design an Approval Process that sends an outbound message upon arrival.",
        "D. Use Visual Workflow to create a wizard that will send an outbound message.",
      ],
      answer: "A",
      title: "Question 17",
      explanation: "",
    },
    {
      content: "How many charts can you embed into the account page layout?",
      options: ["A. 3", "B. 4", "C. 2", "D. 1"],
      answer: "C",
      title: "Question 18",
      explanation: "",
    },
    {
      content:
        "Universal Containers sales reps can modify fields on an opportunity until it is closed. Only the sales operation team can modify the post closed follow-up dates and post closed follow-up comments fields. How can these requirements be met?",
      options: [
        "A. Use field-level security on page layouts to restrict editing fields",
        "B. Use field level security to mark fields as read only on the sales profile",
        "C. Use record types with field sets and restrict editing fields using field-level security.",
        "D. Use multiple record types, page layouts and profiles.",
      ],
      answer: "A",
      title: "Question 19",
      explanation: "",
    },
    {
      content:
        "UC wants to standardize their business logic. They want to ensure that workflow order is guaranteed to the same each time. Which feature can be used to accomplish this? Select 2",
      options: [
        "A. Visual workflow",
        "B. Chatter actions",
        "C. Workflow",
        "D. Lighting process builder",
      ],
      answer: "A,D",
      title: "Question 20",
      explanation: "",
    },
    {
      content:
        "UV has a customer base where many customers have the same or similar company names.",
      options: [
        "A. Update the account search layout list view filter settings.",
        "B. Update the account search layout accounts tab columns displayed.",
        "C. Update the account search layout search filter fields.",
        "D. Update the account search layout search results columns displayed.",
      ],
      answer: "A",
      title: "Question 21",
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
      title: "Question 22",
      explanation:
        "If you change the data type of any custom field that is used for lead conversion, that lead field mapping will be deleted. If you change the data type of a custom field that is set as an external ID, choosing a data type other than text, number, or email will cause the field to no longer act as an external ID.\n The option to change the data type of a custom field is not available for all data types. For example, existing custom fields cannot be converted into encrypted fields nor can encrypted fields be converted into another data type.\n https://help.salesforce.com/apex/HTViewHelpDoc?id=notes_on_changing_custom_field_types. htm&language=en",
    },
    {
      content:
        "What type of field can be used to filter a Report Chart that has been added to a Page Layout?",
      options: [
        "A. Matching ID Field",
        "B. Formula Field",
        "C. Standard Field",
        "D. Name Field",
      ],
      answer: "A",
      title: "Question 23",
      explanation: "",
    },
    {
      content:
        "Which statement is true when defining a Create custom action for the Contact object? Choose 2 answers",
      options: [
        "A. The create action can pre-define Contact field values",
        "B. The create action will respect validation rules",
        "C. The create action will ignore field requirements",
        "D. The create action allows a user to select a record type",
      ],
      answer: "B,D",
      title: "Question 24",
      explanation: "",
    },
    {
      content:
        "Duplicate management for Leads has been Implemented at Universal Containers that it seems duplicate leads are still being created, the org Wide Default (WOD) is set to ''Private'' for Leads.\nWhich two actions help prevent duplicate leads from being created?\nChoose 2 answers",
      options: [
        "A. Change OWD for Leads to public Read.",
        "B. Change the Lead Duplicate Rule details to Bypass Sharing Rules.",
        "C. Change the lead Matching Rule to Block on Create.",
        "D. Change OWD for Leads to Public Edit.",
      ],
      answer: "A,C",
      title: "Question 25",
      explanation: "",
    },
    {
      content:
        "Universal container would like to use a chatter group for their mergers and acquisitions team to collaborate on potential new projects. This project should not be visible for non-members to see or join, and can be accessed by invites only.",
      options: [
        "A. Unlisted group",
        "B. Private group",
        "C. Member group",
        "D. Public group",
      ],
      answer: "A",
      title: "Question 26",
      explanation: "",
    },
    {
      content:
        "Universal containers wants to display the real time stock price for each account on the account record page. How should an app builder implement this request?",
      options: [
        "A. Build a visual flow that users API calls",
        "B. Install a solution from the appexchange",
        "C. Add a dynamic report to the page layout",
        "D. Create a lightning web component",
      ],
      answer: "B",
      title: "Question 27",
      explanation: "",
    },
    {
      content:
        "A customer service representative at a call center would like to be able tocollect information from customers using a series of questionprompts.\nWhat could be used to accomplish this?",
      options: [
        "A. Workflow Rules",
        "B. Lightning Process Builder",
        "C. Lightning Connect",
        "D. Visual Workflow",
      ],
      answer: "D",
      title: "Question 28",
      explanation: "",
    },
    {
      content:
        "When a user creates an account report, the user does not see industry as an available field in the report builder. However, this same user is able to see in the account page layout. What scenario would cause this?",
      options: [
        "A. The industry field is not enabled for the particular record type",
        "B. The user does not have industry field visibility in the field level security",
        "C. The user uses a custom report type which does not include the industry field",
        "D. The industry field has no record values in the account.",
      ],
      answer: "D",
      title: "Question 29",
      explanation: "",
    },
    {
      content: "Field type conversion. Which of the following are true: (2)",
      options: [
        "A. Data can be lost when converting from simple picklist to multi picklist",
        "B. Data can be lost when converting from number to currency (assuming that field lengths are identical)",
        "C. Data can be lost when converting from auto-number to text",
        "D. Information can be lost when converting from text area (rich) to text area (long)",
      ],
      answer: "C,D",
      title: "Question 30",
      explanation: "",
    },
    {
      content:
        "A custom object has a public reads only sharing settings that does not grant access using hierarchies. A dynamic sharing rule provides write access to the object to the global marketing public group if the record is marked as global. A user creates a new record and marks it as global. Who will have write access to the record?",
      options: [
        "A. The record owner and anyone above the owner in the role hierarchy",
        "B. The record owner and the global marketing public group.",
        "C. The global marketing public group, the record owner, and anyone above the owner in the role hierarchy.",
        "D. The global marketing public group and anyone above the owner in the role hierarchy",
      ],
      answer: "B",
      title: "Question 31",
      explanation: "",
    },
    {
      content:
        "Which of these actions are executed after a re-evaluated workflow? (Choose 3 answers)",
      options: [
        "A. Active Escalation rules",
        "B. Criteria-based sharing rules",
        "C. Previously fired workflow rules",
        "D. Active Validation rules",
        "E. Cross-object workflow rules",
      ],
      answer: "A,B,C",
      title: "Question 32",
      explanation: "",
    },
    {
      content:
        "Universal Containers would like to show different picklist values to different groups of user in a custom picklist field. What should be configured?",
      options: [
        "A. Permission sets",
        "B. Record Types",
        "C. Page Layouts",
        "D. Field-level security",
      ],
      answer: "B",
      title: "Question 33",
      explanation: "",
    },
    {
      content:
        "At Universal Containers, multiple departments utilize the Case object for different purposes. Some users submit cases for IT and HR requests. Other users provide customer support with case records. How can an App Builder enable different users to see different fields, based on the case type?",
      options: [
        "A. Create different case field sets for IT, HR and Customer Support. Assign different field sets by profile.",
        "B. Create different case field sets for IT, HR and Customer Support. Assign different field sets by role.",
        "C. Create different case record types for IT, HR and Customer Support. Assign different page layouts to each record type by profile.",
        "D. Create different case record types for IT, HR and Customer Support. Assign different page layouts to each record type by role.",
      ],
      answer: "C",
      title: "Question 34",
      explanation: "",
    },
    {
      content:
        "Which is correctly referencing a field on the Force.com custom object Position__c?",
      options: [
        "A. [&Position__c.Status__c]",
        "B. {!Position__c.Status__c}",
        "C. [!Position__c.Status__c]",
        "D. {&Position__c.Status__c}",
      ],
      answer: "B",
      title: "Question 35",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants to its sales team to only see the accounts that they own. Separate Month American and Environment manufacturing teams should only see accounts in their respective regions. The Inside sales team needs to see all accounts in Salesforce.\nHow should an app builder accomplish this?",
      options: [
        "A. Set the Organization-wide Default to public for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team permission set with the ''View All'' Setting for accounting for accounts.",
        "B. Set the organization--Wide Default to publish for accounts. Create profiles for each Marketing Team, and create an inside Sales Team role that is at the top of the Role Hierarchy.",
        "C. Set the Organization Team profile Default to Private for accounts. Create criteria-based sharing rules for each Marketing Team. and create an inside Sales Team profile with the ''View All'' setting for accounts.",
        "D. Set the Organization-Wide Default to private for accounts. Create permission setts for each Marketing Team, and create an Inside Sales team Profile with the ''View All'' setting for accounts.",
        "E. Set the Organization Team profile Default to Private for accounts. Create criteria-based sharing rules for each Marketing Team. and create an inside Sales Team profile with the ''View All'' setting for accounts. ",
        "F. Set the Organization-wide Default to public for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team permission set with the ''View All'' Setting for accounts.",
      ],
      answer: "A",
      title: "Question 36",
      explanation: "",
    },
    {
      content:
        "Which type of relationship can be defined with external objects? Choose 2 Answers",
      options: [
        "A. Cross Organizational Look-up",
        "B. External Look-Up",
        "C. External Master-Detail",
        "D. Indirect Look-Up",
      ],
      answer: "B,D",
      title: "Question 37",
      explanation: "",
    },
    {
      content:
        "universal containers has several new fields they requested for the opportunity product object. What should an app builder be able to configure using a formula field ?",
      options: [
        "A. A hyperlink to the parent account of the parent opportunity.",
        "B. A Rich text area field that uses HTML to bold certain characters",
        "C. A mix of functions and concatenation of 10 account fields and 10 opportunity fields.",
        "D. A combination of the opportunity`s text and a description fields.",
      ],
      answer: "B",
      title: "Question 38",
      explanation: "",
    },
    {
      content:
        "UVC is importing 1000 records into salesforce. They want to avoid any duplicate records from being created during the import. How can these requirement met?",
      options: [
        "A. Manually merge",
        "B. Run duplicate check",
        "C. Include a column in the import file that has other record name",
        'D. Use "prevent duplicates"',
      ],
      answer: "C",
      title: "Question 39",
      explanation: "",
    },
    {
      content:
        "Universal containers require different fields to be filled out at each stage of the opportunity sales process. what configuration steps san an app builder use to meet this requirement?",
      options: [
        "A. Create a process builder to prompt the user for field information",
        "B. Set page layout required fields based on the current stage",
        "C. Define record types and page layouts for each stage",
        "D. Add the path component to the lightning record page",
      ],
      answer: "D",
      title: "Question 40",
      explanation: "",
    },
    {
      content: "What is a use case for approval processes?",
      options: [
        "A. Multi-select picklist fields can be used in the field column of roll-up summary filters.",
        "B. The roll-up summary field inherits the field - level security of the child object",
        "C. Roll-up summary fields can only be created on the master of a master-detail relationship.",
        "D. Changes to the value of a roll-up summary field column of roll-up summary filters.",
      ],
      answer: "B,C",
      title: "Question 41",
      explanation: "",
    },
    {
      content:
        "Universal Containers has a requirement that an Opportunity should have a field showing the value of its associated account's billing state. This value should not change after the Opportunity has been created. What is the recommended solution to configure this automation behavior?",
      options: [
        "A. Workflow",
        "B. Apex",
        "C. Roll-up-summary field",
        "D. Formula Field",
      ],
      answer: "A",
      title: "Question 42",
      explanation: "",
    },
    {
      content:
        "Universal Containers has deployed custom tabs through change sets, without including the profiles, to Production (Enterprise Edition). Which statement is true in regards to the visibility of custom tabs?",
      options: [
        "A. Custom tabs are default off for all users.",
        "B. Custom tabs are hidden for all users.",
        "C. Custom tabs are exposed for all users.",
        "D. Custom tabs are default on for all users.",
      ],
      answer: "B",
      title: "Question 43",
      explanation: "",
    },
    {
      content:
        "Universal Containers is setting up salesforce for the first time. Management wants the sales and marketing teams to have different navigation names in the salesforce1 mobile app. Which option is available to an app builder to satisfy the requirement?",
      options: [
        "A. Create roles for sales and marketing and assign a custom homepage layout for each role.",
        "B. Create mobile navigation menus for both the sales and marketing profiles.",
        "C. Create sales and marketing profiles to ensure read access to different objects",
        "D. Create public groups for sales and marketing and create mobile navigation menus for each group.",
      ],
      answer: "C",
      title: "Question 44",
      explanation: "",
    },
    {
      content:
        "UVC uses a custom object to track expense reports. They would like to automatically post updates in a record's feed whenever an expense report has been approved. Which social feature can be used to accomplish this?",
      options: [
        "A. Approval Process",
        "B. Auto-response rule",
        "C. Feed Tracking",
        "D. Feed Quick Action",
      ],
      answer: "C",
      title: "Question 45",
      explanation: "",
    },
    {
      content:
        "In a real estate app, if a listing is sold, all related inspections for the listing must be cancelled. What business logic feature best caters to this requirement? Choose 1 answer.",
      options: [
        "A. Use Process Builder to define a process action to update related records based on the listing status change",
        "B. Use Visual Workflow to define a flow to iterate through the related inspection records and update the status to 'Cancelled'",
        "C. Create a standard workflow on the Listing object with a workflow record update action on the related Inspection records",
        "D. Use a trigger to update the status of the related inspection records when the listing status is updated",
      ],
      answer: "A",
      title: "Question 46",
      explanation: "",
    },
    {
      content: "Person Accounts Choose 2 answers",
      options: [
        "A. Are enabled by default",
        "B. Do use space in both account and contacts table",
        "C. Are enabled via feature license",
        "D. Can only be merged with other person accounts",
        "E. Have the same icon as Business accounts",
      ],
      answer: "B,D",
      title: "Question 47",
      explanation: "",
    },
    {
      content:
        "Universal containers is importing 1000 records into Salesforce. They want to avoid any duplicate records from being created during the import. How can these requirements be met?",
      options: [
        'A. When importing the file, select the "Prevent Duplicates" option on the last step of the Import Wizard and import the file.',
        "B. Include a column in the import file that has either record names, Salesforce IDs, or external IDs that can be used to match records.",
        "C. After importing all of the custom objects, review all records created and manually merge or delete and duplicate record",
        "D. After importing all of the custom objects, run a duplicate check report, export the record to a CSV File, and run a mass delete to purge any duplicates.",
      ],
      answer: "B",
      title: "Question 48",
      explanation: "",
    },
    {
      content:
        "Representatives at Universal Con use salesforce to record information for new Leads. When new prospects are added, an outbound message is sent to SAP with the Lead's info.",
      options: [
        "A. Create a process using lightning process builder",
        "B. Use Visual Workflow",
        "C. Design an approval process",
        "D. Create a workflow rule",
      ],
      answer: "D",
      title: "Question 49",
      explanation: "",
    },
    {
      content:
        "What may occur if workflow rules are reevaluated after a field change by afield update?",
      options: [
        "A. Workflow rules trigger validation rules on field updates.",
        "B. Workflow rules trigger more workflow rules to be re-evaluated.",
        "C. Cross-object workflow rules result in re-evaluation after field change.",
        "D. A recursive loop potentially results in exceeding organizational limits.",
      ],
      answer: "B,D",
      title: "Question 50",
      explanation: "",
    },
    {
      content:
        "What metadata changes can be made directly in a production environment without deploying from sandbox? Choose 2 answers",
      options: [
        "A. Apex Classes",
        "B. Validation Rules",
        "C. Visualforce Pages",
        "D. Apex Triggers",
      ],
      answer: "B,C",
      title: "Question 51",
      explanation: "",
    },
    {
      content:
        "An App Builder has been asked to integrate Salesforce with an external web service. The web service must be notified every time an Opportunity is Won. Which two can satisfy this requirement?",
      options: [
        "A. Use a process and an outbound message",
        "B. Use a workflow rule and an outbound message",
        "C. Use a flow and an outbound message",
        "D. Use a process and Apex Code",
      ],
      answer: "B,D",
      title: "Question 52",
      explanation: "",
    },
    {
      content:
        "How would you ensure that records of a particular object are visible only to the user, and users higher in the role hierarchy? choose 2 answers.",
      options: [
        "A. Set org wide sharing default for the object as manager view",
        "B. Set org wide sharing default for the object as private",
        "C. Define a role hierarchy",
        "D. Define a profile list",
      ],
      answer: "B,C",
      title: "Question 53",
      explanation: "",
    },
    {
      content: "Identify the standard Lightning components. (Choose 3 answers)",
      options: [
        "A. Visualforce Page",
        "B. Dashboards",
        "C. List View",
        "D. Reports",
        "E. Rich Text",
      ],
      answer: "A,C,E",
      title: "Question 54",
      explanation: "",
    },
    {
      content: "What can be branded in SF1?(Select 3)",
      options: [
        "A. Loading page color",
        "B. Action tab bar",
        "C. Loading logo",
        "D. Header and Search",
      ],
      answer: "A,C,D",
      title: "Question 55",
      explanation: "",
    },
    {
      content: "When do you refresh a Sandbox?",
      options: [
        "A. Option 4",
        "B. When a Production user is added",
        "C. After a major update",
        "D. Before UAT",
      ],
      answer: "D",
      title: "Question 56",
      explanation: "",
    },
    {
      content:
        "An app builder has been asked to provide users a way to identify a contact's \"preferred contact method\" directly on the contact record. users need to be able to identify whether a phone number or an email, is the contact's preferred communication method. Which field type will allow the app builder to accomplish this with the fewest fields possible?",
      options: ["A. Email", "B. Formula", "C. Picklist", "D. Checkboxes"],
      answer: "C",
      title: "Question 57",
      explanation: "",
    },
    {
      content:
        "Universal Containers has a custom assessment object used by three divisions. Each division wants to track different information on the assessments, including different values for the status picklist. Division managers do not want their teams to be able to create another division's assessment.\nHow can this be accomplished?",
      options: [
        "A. Create three page layouts to determine the fields and picklist values for each user based on the division indicated on their user record. Use field-level security to restrict access to each division's fields.",
        "B. Create separate assessment record types for each division and use them to limit picklist values. Create separate page layouts for each record type and use profiles to restrict record type access.",
        "C. Create additional custom assessment objects, one for each division, to track their assessments so information can be tracked separately. Use profiles to restrict access to the three custom objects.",
        "D. Create a separate page layout for each division and assign them profiles. Use the profile setting to configure each division's custom field list and picklist values for assessments.",
      ],
      answer: "B",
      title: "Question 58",
      explanation: "",
    },
    {
      content:
        "Which two solutions prevent a formula field from being referenced by a Roll-Up Summary Field?",
      options: [
        "A. The NOW() function in the formula field",
        "B. A cross-object field reference in the formula field",
        "C. The CASE() function in the formula field",
        "D. A cross-object workflow updating a field referenced by the formula field",
      ],
      answer: "C,D",
      title: "Question 59",
      explanation: "",
    },
    {
      content:
        "Universal containers has included its orders as an external data object into Salesforce. You want to create a relationship between Accounts and the Orders object (one-to-many relationship) leveraging a key field for account which is on both external object and Account. Which relationship do you create:",
      options: [
        "A. Master Detail Relationship",
        "B. Indirect Lookup Relationship",
        "C. External Lookup Relationship",
        "D. Lookup Relationship",
      ],
      answer: "B",
      title: "Question 60",
      explanation: "",
    },
    {
      content:
        "Universal Container installs an unmanaged package. Which of the following are true: (choose 2)",
      options: [
        "A. Unmanaged packages can be upgraded",
        "B. Unmanaged packages don't have a version number",
        "C. Components of unmanaged packages can be edited",
        "D. Unmanaged packages have a namespace prefix",
        "E. Tests are executed during deployment",
      ],
      answer: "C,E",
      title: "Question 61",
      explanation: "",
    },
    {
      content:
        "Which attribute must field have to be used in external modeling?",
      options: [
        "A. Unique",
        "B. Required",
        "C. None of the above",
        "D. External ID",
      ],
      answer: "D",
      title: "Question 62",
      explanation: "",
    },
    {
      content: "What is true about social accounts, contacts, and leads?",
      options: [
        "A. The social feature displays the social profile for a Lead or Contact even if the user is not connected with the Lead or Contact on the Social network",
        "B. To use Social Accounts, Contacts and lead feature, a separate feature license must be assigned to the user in salesforce",
        "C. The social feature automatically imports the social profile for a lead or contact in salesforce if the user is connected with the lead or contact on the social network",
        "D. To use Social Accounts, Contacts and lead feature, users need to have a personal social network accounts for the social network they would like to view",
      ],
      answer: "D",
      title: "Question 63",
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
      title: "Question 64",
      explanation: "",
    },
    {
      content:
        "Universal Containers has separated business requirements for consumer and Business Opportunities. The sales team work with both types of Opportunities. The app builder created two record types on the Opportunity Object. Which action can now be performed? Choose 2 answers",
      options: [
        "A. Prevent access to secure data fields by sales process.",
        "B. Create unique Opportunity stages by sales process.",
        "C. Enable field validation by sales process.",
        "D. Specify a different page layout by sales process.",
      ],
      answer: "C,D",
      title: "Question 65",
      explanation: "",
    },
    {
      content:
        "When configuring a record type, an App Builder can configure the available value of a picklist field for the page layout. Which opportunity standard field is available to be configured directly in the Opportunity record type? Choose 2 answers",
      options: [
        "A. Type",
        "B. Stage",
        "C. Forecast Category",
        "D. Lead Source",
      ],
      answer: "A,D",
      title: "Question 66",
      explanation: "",
    },
    {
      content:
        "Universal Insurance would like to highlight on a report claims that have been open for more than 30 days. What feature could be used for this? Choose 1 answer.",
      options: [
        "A. Field Highlighting",
        "B. Bucket Highlighting",
        "C. Report Highlighting",
        "D. Conditional Highlighting",
      ],
      answer: "D",
      title: "Question 67",
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
      title: "Question 68",
      explanation:
        "Explanation- Record types allow you to offer different business processes, picklist values, and page layouts to different users based on their profiles.",
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
      title: "Question 69",
      explanation: "",
    },
    {
      content:
        "Universal Containers has created two custom objects called Seminars and Attendees. Organization-wide defaults for those objects have been set to private. Universal Containers wants to set up a new junction object between these objects. A select group of users should be able to edit records in the junction object.\nWhich two steps should an app builder take to configure the proper security?",
      options: [
        "A. Set lookup filters on both junction object relationship fields.",
        "B. Create an owner-based sharing rule that gives Read access to the junction object.",
        "C. Create owner-based sharing rules that give Read access to the master objects.",
        "D. Set Sharing Settings to Read Only on both master-detail relationship fields.",
      ],
      answer: "A,C",
      title: "Question 70",
      explanation: "",
    },
    {
      content:
        "Universal containers wants to ensure that they are accepting clean data from their users and verify that important fields are entered. What should an app builder recommend to meet this requirement?",
      options: [
        "A. Make a formula field to check the format of the important fields",
        "B. Configure a validation to require a field for a specific record type",
        "C. Create a workflow rule to check the fields are formatted correctly",
        "D. Update the important fields to be required on the page layout",
      ],
      answer: "B",
      title: "Question 71",
      explanation: "",
    },
    {
      content:
        "The VP of account management at Universal Containers has requested that all contacts mailing postal codes match the associated accounts shipping postal code. How can this be enforced using validation rules?",
      options: [
        "A. Create a validation rule using the distance() function",
        "B. Create a validation rule using a compare operator",
        "C. Create a validation rule using the geolocation() function",
        "D. Create a validation rule using a not equal operator",
      ],
      answer: "D",
      title: "Question 72",
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
      title: "Question 73",
      explanation: "",
    },
    {
      content:
        "Universal Containers has created the custom objects Candidate and Interview in Salesforce to track candidates and interviews respectively. The company wants to track the total number of interviews a candidate has gone through on the candidate record without writing any code. How can app builder accomplish this requirements? Choose 2 answers",
      options: [
        "A. Use a roll-up summary field on the candidate record to show the total number of interviews.",
        "B. Use a formula field on the candidate record to show the total number of interviews",
        "C. Use a lookup relationship between the Candidate and Interview objects",
        "D. Use a master-detail relationship between the Candidate and the Interview objects.",
      ],
      answer: "A,D",
      title: "Question 74",
      explanation: "",
    },
    {
      content: "What is true regarding compact layouts? Choose 2 answers.",
      options: [
        "A. Compact layouts can be assigned to different record types",
        "B. If a user doesn't have access to a field it won't be displayed",
        "C. Compact layouts must be configured for fields to be displayed in the record header",
        "D. Compact layouts support all field types",
      ],
      answer: "A,B",
      title: "Question 75",
      explanation: "",
    },
    {
      content:
        "Sales manager at universal containers would like to standardize what information sales rep are gathering. Sales rep want recommendations, sales strategies and to know what key fields need to be completed at each step of the sales process on the opportunity record. What feature should an app builder use to provide this functionally?",
      options: [
        "A. Global Action",
        "B. Chatter feed",
        "C. Path",
        "D. Workflow",
      ],
      answer: "C",
      title: "Question 76",
      explanation: "",
    },
    {
      content:
        "A custom button can be used for performing all of the following actions, except: Choose 1 answer.",
      options: [
        "A. Invoke a visualforce page in your Salesforce org",
        "B. Invoke an Apex Trigger",
        "C. Invoke a webpage URL",
        "D. Invoke a Javascript",
      ],
      answer: "B",
      title: "Question 77",
      explanation: "",
    },
    {
      content:
        "An app builder wants to deploy a new version of an auto launched flow production in an active state so that the new functionality is immediately available to users.\nWhat should the app builder take into consideration when planning the deployment?",
      options: [
        "A. Include the process builder calling the flow in the deployment",
        "B. Include the profile that access the flow in the deployment",
        "C. Verify there is a static resource that provides test coverage for the flow",
        "D. Verify there is an apex test that provides test coverage for the flow",
      ],
      answer: "D",
      title: "Question 78",
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
      title: "Question 79",
      explanation:
        "Explanation - The second master-detail relationship you create on your junction object becomes the secondary relationship. If you delete the primary master-detail relationship or convert it to a lookup relationship, the secondary master object becomes primary.\n https://help.salesforce.com/HTViewHelpDoc?id=relationships_considerations.htm&language=en_US",
    },
    {
      content:
        "The app builder at UVC has been asked to ensure that the amount field ispopulated when the stage is set to closed won. What can be used to meet this requirement?",
      options: [
        "A. Workflow",
        "B. Lighting process builder",
        "C. Validation rule",
        "D. Approval process",
      ],
      answer: "A",
      title: "Question 80",
      explanation: "",
    },
    {
      content:
        'The Director of Customer Service wants to know when agents are overwhelmed with high-priority items in the support queue. The Director wants to receive a notification when a new case is open with the status of "New" for more than four business hours. Which automation process could be used to accomplish this? Choose 2 answers',
      options: [
        "A. Lightning Process Builder",
        "B. Escalation rules",
        "C. Visual workflow",
        "D. Scheduled Apex",
      ],
      answer: "A,B",
      title: "Question 81",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants to test code against a subject of production data that is under 5 GB. They want to refresh a sandbox weekly. Which type of sandbox should be used?",
      options: [
        "A. Developer Pro Sandbox",
        "B. Full Sandbox",
        "C. Developer Sandbox",
        "D. Partial Copy Sandbox",
        "E. Enterprise Sandbox",
      ],
      answer: "D",
      title: "Question 82",
      explanation: "",
    },
    {
      content:
        "The Director of Marketing has asked the AppBuilder to create a formula fieldthat tracks how many days have elapsed since a contact was sent a marketingcommunication. The director is only interested in whole units.",
      options: ["A. Today()", "B. Now()", "C. Datevalue()", "D. Date()"],
      answer: "A",
      title: "Question 83",
      explanation: "",
    },
    {
      content:
        "UC would like to automatically assign a specific permission set to new users. How can they do that?",
      options: [
        "A. Create a lighting process on the user object to launch a flow",
        "B. Option 4",
        "C. Create a flow on the user object to assign permission set",
        "D. Create a workflow rule on the user object to assign a permission set",
      ],
      answer: "C",
      title: "Question 84",
      explanation: "",
    },
    {
      content:
        "Sales reps at Universal Containers use Salesforce on their mobile devices. They want a way to odd new contacts quickly and then follow up later to complete the additional Information necessary.\nWhat mobile solution should an App Builder recommend?",
      options: [
        "A. Customize the mobile menu to move Contacts to the top.",
        "B. Use Path and set pre-defined values",
        "C. Build a global action to create Contacts.",
        "D. Add a compact layout to Contacts.",
      ],
      answer: "D",
      title: "Question 85",
      explanation: "",
    },
    {
      content:
        "Universal Containers is using a custom app to record performance review info for their employees. The performance review should be visible to the employee and the employee's manager, as well as the HR director. How can this be configured? Choose 1 answer.",
      options: [
        "A. Use manager sharing to enable sharing with the employee's manager and HR director",
        "B. Set the org wide default for Performance Review to private and use grant access using hierarchies to give visibility to the employee's manager and HR director",
        "C. Set the org wide default for Performance Review to private, do not use grant access using hierarchies and use manual sharing for the employee manager and HR director",
        "D. Set the org wide default for Performance Review to private and add a criteria based sharing rule to share performance review records with a public group that includes the employee managers and HR director",
      ],
      answer: "C",
      title: "Question 86",
      explanation: "",
    },
    {
      content:
        "Universal con needs a field on the account to track how many opportunitiesare closing within the next 30 days. What can be used?",
      options: [
        "A. Process builder",
        "B. Apex code",
        "C. Roll-up summary field",
        "D. Workflow rule",
      ],
      answer: "B",
      title: "Question 87",
      explanation: "",
    },
    {
      content:
        "What tools you need to use to migrate Metadata to Two Different Production Orgs? (3)",
      options: [
        "A. Change Set",
        "B. Data Loader",
        "C. Unmanaged Package",
        "D. Force.Com IDE",
        "E. Force.Com Migration Tool",
      ],
      answer: "C,D,E",
      title: "Question 88",
      explanation: "",
    },
    {
      content:
        'Universal Containers has a workflow on opportunity that will change the status field to "In Progress" when the Stage field is changed "Negotiation." In addition, there is a validation rule on Status that will prevent the status being set to "In Progress" if the amount of the opportunity is less than $10,000.A user named Frank does not have FLS to see status. When Frank changes opportunities to a stage of "Negotiation" the status is still being changed to "In Progress", why is this occurring?',
      options: [
        "A. Workflow rules occur after validation rules and thus override validation rules.",
        "B. Workflow rules cannot trigger a validation rule",
        "C. Field Level Security prevents the validation rule from running.",
      ],
      answer: "B",
      title: "Question 89",
      explanation: "",
    },
    {
      content:
        "Universal containers allows users to create standard reports on demand. What are two considerations users should be aware of when creating a new report?",
      options: [
        "A. Records will be available in the in the report regardless of security permissions",
        "B. The report type determines the types of records and fields that will be available",
        "C. Users can require that child objects exist for parent records using a cross filter",
        "D. Reports created from standard report types are available to all users",
      ],
      answer: "B",
      title: "Question 90",
      explanation: "",
    },
    {
      content:
        "UVC wants to show different picklist values to different groups of users in a custom picklist field. What should be configured?",
      options: [
        "A. Record Types",
        "B. Permission sets",
        "C. Field-level security",
        "D. Page Layout",
      ],
      answer: "A",
      title: "Question 91",
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
      answer: "A",
      title: "Question 92",
      explanation: "",
    },
    {
      content:
        "universal containers has 20 different workflows on the opportunity object. To ensure that updates are processing properly for all field updates uc has the re-evaluete workflow rules after field change checkbox checked. Recently after adding a new workflow, users have reported receiving errors about workflow limits. What should a app builder look at so address this?",
      options: [
        "A. Talk to a developer about apex code issues",
        "B. Number of workflows per object limits",
        "C. Workflows that cause each other to fire back and forth recursively",
        "D. Workflows on other objects that are being re triggered",
      ],
      answer: "C",
      title: "Question 93",
      explanation: "",
    },
    {
      content:
        "An app builder wants to show groups as the last navigation menu item in the salesforce1 mobile app. however, the app builder is not able to select groups as one of the items on the drop-down menu. What could cause this?",
      options: [
        "A. Groups is showing up in the recent section and not in the navigation menu",
        "B. Groups is not included in the selecteCreate a criteria based sharing rule using the projects department that grd list for the navigation menu",
        "C. Groups is included in the smart search items but not on the navigation menu",
        "D. Groups cannot be the last item in the navigation menu.",
      ],
      answer: "C",
      title: "Question 94",
      explanation:
        "Groups Appears for organizations that have Chatter enabled. If you don't add this item to the navigation menu, groups are automatically included in the set of Smart Search Items instead and the Groups item is available from the Recent section.\n https://developer.salesforce.com/docs/atlas.en-us.salesforce1.meta/salesforce1/customize_s1_nav_about.htm",
    },
    {
      content:
        "Which use case can be accomplished using a custom link?(Select 3)",
      options: [
        "A. To create a record page",
        "B. To external system using data of salesforce",
        "C. Navigate to Apex trigger",
        "D. To create a custom visual flow",
        "E. To a process to update current record",
      ],
      answer: "A,B,E",
      title: "Question 95",
      explanation: "",
    },
    {
      content:
        "Which opportunity standard field is available tobe configured directly? Choose3",
      options: [
        "A. Forecast category",
        "B. Lead source",
        "C. Type",
        "D. Stage",
      ],
      answer: "B,C,D",
      title: "Question 96",
      explanation: "",
    },
    {
      content:
        "UVC uses a custom object to track open job positions. They would like to automatically post updates on a record's feed whenever a position stage is changed. Which social feature can be used to accomplish this.",
      options: [
        "A. Feed quick Action",
        "B. Auto response rule",
        "C. Workflow rule",
        "D. Feed tracking",
      ],
      answer: "D",
      title: "Question 97",
      explanation: "",
    },
    {
      content:
        "The VP of Sales has requested that Account Site information should be visible onall Opportunity records.\nWhat is the recommended solution to meet this requirement?",
      options: [
        "A. Process Builder",
        "B. Workflow Rule",
        "C. Roll-Up Summary Field",
        "D. Cross-Object Formula Field",
      ],
      answer: "D",
      title: "Question 98",
      explanation: "",
    },
    {
      content:
        "Universal Containers has deployed custom tabs to Production via changes sets, without including the profile settings or permission sets.\nWhat is the settings for the visibility of custom tabs?",
      options: [
        "A. Custom tabs are default on for all uses.",
        "B. Custom tabs are default off for all users.",
        "C. Custom tabs are hidden for all users.",
        "D. Custom tabs are NOT deployed.",
      ],
      answer: "C",
      title: "Question 99",
      explanation: "",
    },
    {
      content:
        "What is a feature that can extend record access beyond the organization-wide defaults? Choose 2 Answers",
      options: [
        "A. Dynamic role hierarchy",
        "B. Owner-based sharing rules.",
        "C. Public or private groups.",
        "D. Criteria-based sharing rules.",
      ],
      answer: "B,D",
      title: "Question 100",
      explanation: "",
    },
    {
      content:
        "Universal containers has a custom object that has a N:M relationship with opportunityLineItem carrying price and amount information. In order to compute total amounts and total prices per Opportunity using Rollup summary fields, what field type will you use.",
      options: [
        "A. Master-Detail",
        "B. Lookup",
        "C. Junction",
        "D. Crossobject",
      ],
      answer: "A",
      title: "Question 101",
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
      title: "Question 102",
      explanation: "",
    },
    {
      content:
        "A manager wants to calculate the number of days an account has been last contacted through mail. Which field should be used to achieve this?",
      options: [
        "A. Formula Field",
        "B. Rollup Summary Field",
        "C. Date Field",
        "D. Number Field",
      ],
      answer: "A",
      title: "Question 103",
      explanation: "",
    },
    {
      content:
        "Which three field types should be referenced by a roll-up summary field using SUM? Choose 3 answers",
      options: [
        "A. Number",
        "B. Date",
        "C. Formula",
        "D. Currency",
        "E. Percent",
      ],
      answer: "A,D,E",
      title: "Question 104",
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
      answer: "C,D",
      title: "Question 105",
      explanation: "",
    },
    {
      content:
        "A sales manager would like to look at an account record and view charts of all of the related open opportunities. Closed/won opportunities, and open cases. How many report charts can be added to the account page layout to meet this requirement?",
      options: ["A. 3", "B. 2", "C. 1", "D. 4"],
      answer: "B",
      title: "Question 106",
      explanation:
        "You can have two report charts per page.\n You can only add report charts from the enhanced page layout editor. The mini console and the original page layout editor are not supported.\n On detail pages, users can refresh up to 100 report charts every 60 minutes.\n Your organization can refresh up to 3,000 report charts every 60 minutes.\n https://help.salesforce.com/HTViewHelpDoc?id=reports_embed_limits.htm&language=en_US",
    },
    {
      content:
        "the services manager would like to highlight case age. When a case is new, they would like to see a green flag on the case record. The flag should be yellow if the case is still open after one day. Tha flag should be red when cases are open after three days. Which two options should an app builder use to implement this requirements? Choose 2",
      options: [
        "A. Formula field",
        "B. Image",
        "C. Quick action",
        "D. VLOOKUP",
      ],
      answer: "A,B",
      title: "Question 107",
      explanation: "",
    },
    {
      content:
        "UVC wants to optimize routes for its traveling service personnel. What is recommended solution?",
      options: [
        "A. Use an AppExchange partner product",
        "B. Configure Territory hierarchy and rules for routes based on territory",
        "C. Use geolocation fields with Distance and Geolocation formulas",
        "D. Configure routing options in a custom object",
      ],
      answer: "A",
      title: "Question 108",
      explanation: "",
    },
    {
      content:
        "The marketing team at UVC has a list of 400 leads it wants to upload to Salesforce. The team need to avoid creating duplicate records. Which two actions should be taken to meet this requirement? Choose 2 answers",
      options: [
        "A. Utilize a Lead Matching Rule and corresponding Duplicate Rule to block newly created duplicate leads.",
        "B. Use Data Loader's update function to import lead and match to existing records based on e-mail address.",
        "C. Enable Duplicate Matching in the Data Management section in Setup and activate the Lead-to_Lead scenario.",
        "D. Upload the lead list using the import wizard and select a Matching type to prevent duplicate lead creation.",
      ],
      answer: "A,D",
      title: "Question 109",
      explanation: "",
    },
    {
      content: "What is a use case for approval processes? Choose 2 answers.",
      options: [
        "A. Require the CFO to review the salary range for all job offers.",
        "B. Approve expense reports automatically when less than $50.",
        "C. Update the PTO record field with the user's manager.",
        "D. Ensure an opportunity that has at least one product added.",
      ],
      answer: "A,B",
      title: "Question 110",
      explanation: "",
    },
  ],
});
