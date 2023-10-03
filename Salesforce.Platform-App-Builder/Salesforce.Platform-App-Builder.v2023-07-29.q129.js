window.testContent = window.testContent || [];
var testId = "Salesforce.Platform-App-Builder";
var testName = "Salesforce.Platform-App-Builder";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "Salesforce.Platform-App-Builder.v2023-07-29.q129",
  content: [
    {
      content:
        "Cloud Kicks (CK) wants to quickly insert a list of over 60,000 net new Accounts. The template based on CK's data model was used to populate the list. Which tool should be used?",
      options: [
        "A. Data Loader",
        "B. Import Wizard",
        "C. A Lightning Object Creator",
        "D. Schema Builder",
      ],
      answer: "C",
      title: "Question 1",
    },
    {
      content:
        "Universal Containers needs to update a field on an Account when an Opportunity Stage is changed to Closed Lost. Which two should be used to accomplish this requirement? (Choose two.)",
      options: [
        "A. Approval Process",
        "B. Assignment Rule",
        "C. Workflow Rule",
        "D. Process Builder",
      ],
      answer: "C,D",
      title: "Question 2",
    },
    {
      content:
        "Which two are true statements about record types? (Choose two.)",
      options: [
        "A. They can be used to control user role hierarchy.",
        "B. They allow different page layouts and mandatory fields.",
        "C. They can be enabled by profile and permission set.",
        "D. They allow different picklist values for all picklist fields.",
      ],
      answer: "B,C",
      title: "Question 3",
    },
    {
      content:
        "An app builder wants to streamline the user experience by reflecting summarized calculation of specific fields on various objects. Which three fields types should be used in roll-up summary fields to accomplish this? Choose 3 answer",
      options: [
        "A. Checkbox",
        "B. Percent",
        "C. Time",
        "D. Date",
        "E. Currency",
      ],
      answer: "A,B",
      title: "Question 4",
    },
    {
      content:
        "Manage at Universal Containers want a quick to create additional accounts to form a hierarchy from a parent account record. They want to auto-populate five fields based on the parent to make it easier for users to create the child accounts quickly.",
      options: [
        "A. Custom action on Account",
        "B. Custom link on Account",
        "C. Custom Global Quick Action",
        "D. Custom Global Quick Account.",
      ],
      answer: "D",
      title: "Question 5",
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
      answer:
        "B  - Record types allow you to offer different business processes, picklist values, and page layouts to different users based on their profiles. ",
      title: "Question 6",
    },
    {
      content:
        "The convert button on leads should NOT appear until the lead status picklist is set to a qualified. What should an app builder suggest to meet these requirements?",
      options: [
        "A. Picklist dependency, page layouts, record types",
        "B. Page layout, record types, process builder field update",
        "C. Custom button, validation rule, record types",
        "D. Process builder field update, quick action, record type",
      ],
      answer: "B",
      title: "Question 7",
    },
    {
      content: "Which of the following cannot be done via a Workflow?",
      options: [
        "A. Create an Outbound Message",
        "B. Create an E-mail Alert",
        "C. Create an Event",
        "D. Create a Task",
      ],
      answer: "C",
      title: "Question 8",
    },
    {
      content:
        "What is a key consideration when using unmanaged packages? Choose 2 answers",
      options: [
        "A. A namespace is not required to create an unmanaged package.",
        "B. The person who created the unmanaged package can change or update installed components",
        "C. The person who created the unmanaged package has no control over the installed components",
        "D. A namespace is required to create an unmanaged package.",
      ],
      answer: "A,C",
      title: "Question 9",
    },
    {
      content:
        "ABC Company want to store an area code and wants to be able to search for it in applications (apex). Which are possible fields to store the data? (Choose two.)",
      options: [
        "A. Text",
        "B. Number",
        "C. Phone",
        "D. Multi Picklist",
        "E. Email",
      ],
      answer: "A,B",
      title: "Question 10",
    },
    {
      content:
        "Universal Containers wants to collaborate with its customers within Salesforce, and has decided to enable the Allow Customer Invitations Chatter Setting. What permission is granted to Customers when invited to a Chatter Group?",
      options: [
        "A. The ability to request access to public groups.",
        "B. The ability to @mention accounts of which they are a contact.",
        "C. The ability to interact with members of their groups.",
        "D. The ability to invite members to groups of which they are a member.",
      ],
      answer: "C",
      title: "Question 11",
    },
    {
      content:
        "Universal Containers needsto send an Outbound Message to an external system whenrecord has been updated. What is recommended feature to meet this requirement?",
      options: [
        "A. Lightning Connect",
        "B. Visual Workflow",
        "C. Workflow",
        "D. Process Builder",
      ],
      answer: "C",
      title: "Question 12",
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
      title: "Question 13",
    },
    {
      content:
        "What is a true statement regarding roll-up summary fields? Choose 2 answers",
      options: [
        "A. Roll-up summary fields can only be created on the master of a master-detail relationship.",
        "B. Multi-select picklist fields can be used in the field column of roll-up summary filters.",
        "C. Changes to the value of a roll-up summary field column of roll-up summary filters.",
        "D. The roll-up summary field inherits the field - level security of the child object",
      ],
      answer: "A,D",
      title: "Question 14",
    },
    {
      content:
        "SERVICE AGENTS ARE REQUIRED TO CONFIRM A USER IDENTITY BEFORE PROVIDING SUPPORT INFORMATION OVER THE PHONE. WHAT FEATURE CAN AN APP BUILDER USE TO HELP AGENTS MEET THIS REQUIREMENT?",
      options: [
        "A. Add Path to the top of the Case layout",
        "B. Guided Action Flows on the record page",
        "C. Include Surveys as a Case related list",
        "D. Case Validation Rules",
      ],
      answer: "D",
      title: "Question 15",
    },
    {
      content:
        "An app builder wants to show Groups as the last navigation menu item in the Salesforce Mobile App. However, the app builder is not able to select Groups as one of the items on the drop-down menu. What could cause this?",
      options: [
        "A. Groups cannot be the last item in the navigation menu.",
        "B. Groups is not included in the selected list for the navigation menu.",
        "C. Groups is showing up in the recent section and not in the navigation menu.",
        "D. Groups is included in the Smart Search items but not on the navigation menu.",
      ],
      answer: "B",
      title: "Question 16",
    },
    {
      content:
        "An app builder wants to deploy a new version of an auto launched flow production in an active state so that the new functionality is immediately available to users. What should the app builder take into consideration when planning the deployment?",
      options: [
        "A. Verify there is an apex test that provides test coverage for the flow",
        "B. Include the process builder calling the flow in the deployment",
        "C. Include the profile that access the flow in the deployment",
        "D. Verify there is a static resource that provides test coverage for the flow",
      ],
      answer: "A",
      title: "Question 17",
    },
    {
      content:
        "Universal Insurance would like to highlight on a report claims that have been open for more than 30 days. What feature could be used for this? Choose 1 answer.",
      options: [
        "A. Field Highlighting",
        "B. Report Highlighting",
        "C. Bucket Highlighting",
        "D. Conditional Highlighting",
      ],
      answer: "D",
      title: "Question 18",
    },
    {
      content:
        "Which functions are available when creating a Roll-up Summary Field? (Choose four.)",
      options: ["A. SUM", "B. COUNT", "C. MAX", "D. AVG", "E. MIN"],
      answer: "A,B,C,E",
      title: "Question 19",
    },
    {
      content:
        "When a user creates an account report, the user does not see industry as an available field in the report builder. However, this same user is able to see in the account page layout. What scenario would cause this?",
      options: [
        "A. The user uses a custom report type which does not include the industry field",
        "B. The industry field has no record values in the account.",
        "C. The industry field is not enabled for the particular record type",
        "D. The user does not have industry field visibility in the field level security",
      ],
      answer: "B",
      title: "Question 20",
    },
    {
      content:
        "An App Builder at UVC would like to prevent users from creating new records on an Account related list by overriding standard buttons. Which two should the App Builder consider before overriding standard buttons?",
      options: [
        "A. Standard buttons can be overridden with a Visualforce page",
        "B. Standard buttons that are not available for overrides can still be hidden on page layouts",
        "C. Standard buttons can be overridden, relocated on the detail page, and relabeled",
        "D. Standard buttons can be changed on lookup dialogs, list views, and search result layouts",
      ],
      answer: "A,B",
      title: "Question 21",
    },
    {
      content:
        "Universal Containers is setting up salesforce for the first time. Management wants the sales and marketing teams to have different navigation names in the salesforce1 mobile app. Which option is available to an app builder to satisfy the requirement?",
      options: [
        "A. Create sales and marketing profiles to ensure read access to different objects",
        "B. Create roles for sales and marketing and assign a custom homepage layout for each role.",
        "C. Create public groups for sales and marketing and create mobile navigation menus for each group.",
        "D. Create mobile navigation menus for both the sales and marketing profiles.",
      ],
      answer: "A",
      title: "Question 22",
    },
    {
      content:
        "The DreamHouse Realty (DR) service manager has asked for some improvements in case management to enforce process compliance so that cases are unable to be reverted to an earlier case status, and to ensure that certain fields are required when specific case criteria are met. What solution should an app builder implement to meet these requirements?",
      options: [
        "A. Process Builder",
        "B. Workflow Rules",
        "C. Activities Component",
        "D. A Validation Rules",
      ],
      answer: "D",
      title: "Question 23",
    },
    {
      content:
        "Universal container manages internal projects by department using a custom object called projects. Only employees in the project's respective department should have view access to all of the department's project records. If an employee changes job roles and moves to another department, the employee should no longer have access to the projects within their former department. How can these requirements be met, assuming the organization-wide default for projects is set to private? Choose 2 answers",
      options: [
        "A. Create a criteria based sharing rule using the projects department that grants access to users by permission set.",
        "B. Create a criteria based sharing rule using the projects department that grants access to users by public groups.",
        "C. Create acriteria based sharing rule using the projects department that grants access to users by profiles",
        "D. Create a criteria based sharing rule using the projects department that grants access to users by roles.",
      ],
      answer: "B,D",
      title: "Question 24",
    },
    {
      content:
        "Universal Containers is setting up Salesforce for the first time. Management wants the sales and marketing teams to have different navigation menus in the Salesforce Mobile App. What option is available to an app builder to satisfy this requirement?",
      options: [
        "A. Create public groups for sales and marketing and create mobile navigation menus for each group.",
        "B. Create sales and marketing profiles and ensure read access to different objects.",
        "C. Create mobile navigation menus for both the sales and marketing profiles.",
        "D. Create roles for sales and marketing and assign a custom homepage layout for each role.",
      ],
      answer: "B",
      title: "Question 25",
    },
    {
      content: "What should you do when a user requests a report?",
      options: [
        "A. Document the user's requirements.",
        "B. Map the user's requirements to report criteria.",
        "C. Ask follow-up questions, to get all the requirements.",
        "D. All of the above.",
      ],
      answer: "D",
      title: "Question 26",
    },
    {
      content:
        "Universal Containers uses a custom object called Projects. When managers assign projects they set a custom field on the Uroject called Estimated Hours. Once set, users should be able to decrease but not increase the value How can an app builder meet this requirement?",
      options: [
        "A. Create a formula default value for the custom field.",
        "B. Create a validation rule that uses the PRIOR VALUE function.",
        "C. Create a validation rule that uses the ISCHANGED function",
        "D. Create a formula held that uses the PREVGROUPVAL function",
      ],
      answer: "B",
      title: "Question 27",
    },
    {
      content:
        "Universal containers wants to ensure that they are accepting clean data from their users and verify that important fields are entered. What should an app builder recommend to meet this requirement?",
      options: [
        "A. Create a workflow rule to check the fields are formatted correctly",
        "B. Configure a validation to require a field for a specific record type",
        "C. Make a formula field to check the format of the important fields",
      ],
      answer: "B",
      title: "Question 28",
    },
    {
      content:
        "What option is available to an App Builder when defining an object-specific Create Record custom action? Choose 2 answers",
      options: [
        "A. Pre-Defining field values on the target object.",
        "B. Allowing the end user to choose the record type",
        "C. Specifying the fields and layout of the action.",
        "D. Redirecting the end user to the detail page of the target object",
      ],
      answer: "A,B",
      title: "Question 29",
    },
    {
      content:
        "What is the maximum number of master-detail lookup relationships allowable per object?",
      options: ["A. 1", "B. 3", "C. 2", "D. 4"],
      answer: "C",
      title: "Question 30",
    },
    {
      content:
        "During testing of a new Amazon Alexa skill, the skill is repeatedly failing and invoking the function defined in the addErrorHandlermethod specified on the SkillBuilderobject. Upon inspection of Amazon CloudWatch Logs, the Alexa Skill Builder establishes that the failure is occurring whenever AMAZON.HelpIntentis being received. How should this error be corrected?",
      options: [
        "A. The Builder should ensure that the intent handler is coded so that it tests for AMAZON.HelpIntentin its canHandlemethod, and when detected, returns true.",
        "B. AMAZON.HelpIntentshould be handled by the SDK. The Builder should raise a support ticket with Amazon.",
        "C. The Builder should add logic to provide help instructions to the function defined in the addErrorHandler method specified on the SkillBuilder object.",
        "D. The Builder should add an AMAZON.HelpIntententry to the interaction model to ensure the request for help is recognized by the skill.",
      ],
      answer: "A",
      title: "Question 31",
    },
    {
      content: "What are the limitations of workflow rules?",
      options: [
        "A. You can't create e-mail alerts for workflow rules on activities.",
        "B. You can't package workflow rules with time triggers.",
        "C. You can't create outbound messages for workflow rules on junction objects.",
        "D. All of the above.",
      ],
      answer: "D",
      title: "Question 32",
    },
    {
      content:
        "Which Salesforce Formula Function can return a value based on more than two different field parameters?",
      options: [
        "A. Contains",
        "B. Beings",
        "C. IF Statement",
        "D. Case Statement",
      ],
      answer: "D",
      title: "Question 33",
    },
    {
      content:
        "A production org includes custom objects containing confidential Information. A sandbox h needed that Includes data records, excludes all of the confidential objects, and can be refreshed weekly the confidential objects, and can be refreshed weekly. What steps should an App Builder take to meet these requirements?",
      options: [
        "A. Create a Developer Pro Sandbox and schedule Data loader to download selected object data weekly.",
        "B. Create a Partial Copy Sandbox and use a sandbox template.",
        "C. Create a Developer Sandbox and schedule Data loader to download selected object data weekly.",
        "D. Create a Full Sandbox and use a sandbox template",
      ],
      answer: "B",
      title: "Question 34",
    },
    {
      content:
        "An app builder wants to create a custom Sync button on Account that will call a Lightning Web Component that connects with an external system. This action should only be available If the custom Status field is set to Ready to Sync. What should an app builder use to add this functionality to an Account record page?",
      options: [
        "A. Dynamic action",
        "B. Custom link",
        "C. AppExchange product",
        "D. Formula field",
      ],
      answer: "A",
      title: "Question 35",
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
      title: "Question 36",
    },
    {
      content:
        "Universal containers wants to provide a different view for its users when they access an Account record in Salesforce1 instead of the standard web version. How can this be accomplished? Choose 2 answers",
      options: [
        "A. By adding actions in the Salesforce1 action bar section.",
        "B. By adding quick actions in the publisher section.",
        "C. By adding Visualforce page to the mobile cards section",
        "D. By adding a mobile layout and assigning it to a profile.",
      ],
      answer: "C",
      title: "Question 37",
    },
    {
      content:
        "What are the three different custom tabs you can create? (Choose three.)",
      options: [
        "A. Custom Object Tab",
        "B. Visualforce Tab",
        "C. Standard Object Tab",
        "D. Web Tab",
        "E. APEX Tab",
      ],
      answer: "A,B,D",
      title: "Question 38",
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
      title: "Question 39",
    },
    {
      content: "Which Social Account features can be accessed from SF1?",
      options: [
        "A. LinkedIn",
        "B. YouTube",
        "C. Facebook",
        "D. Twitter",
        "E. All of the above",
      ],
      answer: "D",
      title: "Question 40",
    },
    {
      content:
        "What type of field needs to be wrapped in a function (in a formula) to be accessed?",
      options: [
        "A. Long Text Field",
        "B. Date/Time",
        "C. Picklist",
        "D. Currency",
      ],
      answer: "C",
      title: "Question 41",
    },
    {
      content:
        "Cloud Kicks wants to display 10 key fields at once in a separate section at the top of opportunity records on the desktop. Which component should an app builder add to the record page to enable this functionality?",
      options: [
        "A. Highlights Panel",
        "B. Accordion",
        "C. Custom Lightning Web Component",
        "D. Path",
      ],
      answer: "A",
      title: "Question 42",
    },
    {
      content:
        "What type of field can be used to filter a report chart that has been added to page Layout?",
      options: [
        "A. Standard field",
        "B. Formula field",
        "C. Name field",
        "D. Matching ID field",
      ],
      answer: "D",
      title: "Question 43",
    },
    {
      content:
        "UVC wants to show different picklist values to different groups of users in a custom picklist field. What should be configured?",
      options: [
        "A. Permission sets",
        "B. Record Types",
        "C. Page Layout",
        "D. Field-level security",
      ],
      answer: "B",
      title: "Question 44",
    },
    {
      content:
        "What is true statement regarding master - detail relationship? Choose 3 answers",
      options: [
        "A. Master-detail relationship can convert to a look -up relationship if no roll-up summary field exist on the master object",
        "B. Deleting a master record in a master detail relationship deletes all related detail records",
        "C. A master-detail relationship cannot be created if the custom object on the detail side already contains data.",
        "D. Standard objects can be on the detail side of the custom object in a master-detail relationship",
        "E. A master - detail relationship cannot be converted to a look-up relationship",
      ],
      answer: "A,B,C",
      title: "Question 45",
    },
    {
      content:
        "An app builder has created a custom Lightning App and wants to make it available to the internal users at Universal Containers. Which two steps are necessary to accomplish this task7Choose 2 answers",
      options: [
        "A. Upload the app to Static Resources.",
        "B. Build a Custom Tab for the app.",
        "C. Create a subdomain using My Domain.",
        "D. Add the app to a Visualforce page.",
      ],
      answer: "B,D",
      title: "Question 46",
    },
    {
      content:
        "Universal container sales reps can modify fields on an opportunity until it isclosed. Only the sales operations team can modify the post close follow up date andpost close followup comments fields. How to make this happen?",
      options: [
        "A. Use field-level security to mark fields as read-only on the sales profile",
        "B. Use field-level security on page layouts to restrict editing fields",
        "C. Use record types with field sets and restrict editing fields using field-level security",
        "D. Use multiple record types, page layouts, and profiles",
      ],
      answer: "D",
      title: "Question 47",
    },
    {
      content:
        "An app builder at Cloud Kicks created a custom object and related fields in the schema builder. What next steps should the app build take to ensure users can access the new object and fields?",
      options: [
        "A. Add the fields to the page layout on the object.",
        "B. Assign data types to the fields on the object.",
        "C. Create a permission set for access to the object and fields.",
        "D. Allow reporting for the object and fields.",
      ],
      answer: "A",
      title: "Question 48",
    },
    {
      content:
        "What data type can be used to summarizeroll-up summary. (Choose 3)",
      options: [
        "A. Currency",
        "B. Number",
        "C. Formula",
        "D. Date",
        "E. Percent",
      ],
      answer: "A,B,E",
      title: "Question 49",
    },
    {
      content:
        "Universal Containers is expecting impacts to operations due to increased demand. The executive team will be reaching out to current customers and want to see the number of open cases for the account and parent account. Which two tools could an app builder combine to display the number of open cases on the account page? Choose 2 answers",
      options: [
        "A. Workflow",
        "B. Process Builder",
        "C. Flow",
        "D. Approval Process",
      ],
      answer: "A,B",
      title: "Question 50",
    },
    {
      content:
        "A custom object has a public reads only sharing settings that does not grant access using hierarchies. A dynamic sharing rule provides write access to the object to the global marketing public group if the record is marked as global. A user creates a new record and marks it as global. Who will have write access to the record?",
      options: [
        "A. The record owner and anyone above the owner in the role hierarchy",
        "B. The global marketing public group, the record owner, and anyone above the owner in the role hierarchy.",
        "C. The record owner and the global marketing public group.",
        "D. The global marketing public group and anyone above the owner in the role hierarchy",
      ],
      answer: "C",
      title: "Question 51",
    },
    {
      content:
        "What option is available to an App Builder when defining an object-specific Create Record custom action? Choose 2 answers",
      options: [
        "A. Allowing the end user to choose the record type",
        "B. Pre-Defining field values on the target object.",
        "C. Specifying the fields and layout of the action.",
        "D. Redirecting the end user to the detail page of the target object",
      ],
      answer: "A,C",
      title: "Question 52",
    },
    {
      content:
        "A custom object named Assignment has private sharing setting that grants access using hierarchies. The organization has a role hierarchy where each Territory Manager reports to an Area Manager, who reports to a VP of Sales. The VP of Sales is at the top of the role hierarchy. A user who is in the Area Manager role creates a new Assignment record.Who can see this record?",
      options: [
        "A. The record owner and all of the other Area Managers.",
        "B. The record owner and the VP of Sales.",
        "C. The record owner and all of the Territory Managers in their hierarchy.",
        "D. The record owner only.",
      ],
      answer: "B",
      title: "Question 53",
    },
    {
      content:
        "Universal Containers wants to streamline its data capture process by linking fields together. They wish to do this so that the available value on dependents fields are driven by value selected on controlling fields. Which consideration supports the stated requirements? Choose 3 answers",
      options: [
        "A. Multi select picklist can be dependent picklist but not controlling fields",
        "B. Custom picklist field can be either controlling or dependent field",
        "C. The import wizard only allows value to be imported into a dependent picklist if they match the appropriate controlling field",
        "D. Checkbox fields can be controlling fields but not dependent fields",
        "E. Standard and custom picklist fields can be dependent fields.",
      ],
      answer: "A,B,D",
      title: "Question 54",
    },
    {
      content:
        "Describe the ramifications of field updates and potential for recursion for the following scenario: If a field update for Rule1 triggers Rule2, and a field update for Rule2 triggers Rule1",
      options: [
        "A. The updates create a loop and the org limits for workflow time triggers per hour will likely be violated",
        "B. When the second trigger is saved a Imminent Loop Error message will be displayed and the workflow rule update will not save",
        "C. The updates create a loop and the org be blocked until the admin resolves the issue",
        "D. Loop is allowed to run 25 times within one hour. If it does not end on its own the process will be stopped by R&D",
      ],
      answer: "A",
      title: "Question 55",
    },
    {
      content:
        "A custom field on an account is used to track finance information about a customer. Only members of the Finance Team have access to this field. However, the business wants to allow one customer service agent, who is assigned the customer service profile, read-only access to this field for special circumstances. What is the recommended solution to grant the customer service agent access to the field?",
      options: [
        "A. Update the custom field's Field Level Security in setup to allow the agent read-only access to the field.",
        "B. Create a permission set that allows read-only access to the field via Field Level Security and assign it to the agent.",
        "C. Update the Customer Service Profile already assigned to the agent to allow for read-only access to the field via Field Level Security",
        "D. Create a new profile to allow for read-only access to the field via Field Level Security and assign it to the agent",
      ],
      answer: "B",
      title: "Question 56",
    },
    {
      content:
        "Universal Containers has created two custom objects called Seminars and Attendees. Organization-wide defaults for these objects have been set to Private. Universal Containers wants to set up a new junction object between these custom objects. A select group of users should be able to edit records in the junction object. Which two steps should an app builder take to configure the proper security? (Choose two.)",
      options: [
        "A. Set Sharing Settings to Read Only on both Master-Detail relationship fields.",
        "B. Set lookup filters on both junction object relationship fields.",
        "C. Create owner-based sharing rules that give Read access to the master objects.",
        "D. Create an owner-based sharing rule that gives Read access to the junction object.",
      ],
      answer: "B,C",
      title: "Question 57",
    },
    {
      content:
        "UVC sells to three different types of organizations. Partner, Enterprise, and Small Business. Some of the information collected about each organization overlaps; however, there are also unique attributes to each type of organization that need to be tracked, some of which are required. What Solution meets these requirements?",
      options: [
        "A. Three custom objects for the three organization types, each with custom fields that pertain to that type of organization",
        "B. A Partner Community for partner organization records, and two lead record types for Enterprise and Small Business organizations",
        "C. Three different sections on an Account page layout, with each section displaying the relevant fields for that organization.",
        "D. Three Account record types, each with its own page layout to display the relevant fields for that type of organization",
      ],
      answer: "D",
      title: "Question 58",
    },
    {
      content:
        "Universal Containers uses Contracts for agreements with customers. A sales manager is required to provide approval for contracts and director approval for any contract over $10,000. Which two options should an app builder use to ensure all contracts route for the correct approval and also prevent the sales rep from making changes to the record while it is being approved7 Choose 2 answers",
      options: [
        "A. Create an approval process on the Contract object with one step for each sales manager that sets the approver as the director.",
        "B. Create an approval process on the Contract object and set the field for 'Next Automated Approver Determined By' as Manager'.",
        "C. Create an approval process on the Contract object with criteria set on a second approval step set as 'Amount__c > 10,000' and set the approver as director.",
        "D. Create a validation rule on the Contract object that prevents updates to the contract record while it is being reviewed.",
      ],
      answer: "B,C",
      title: "Question 59",
    },
    {
      content:
        "A new custom object is begin created with a private sharing setting. The business wants to share individual records with specific people or groups of people on a case-by-case basis. Which three options does the business user have to manually share individual records? (Choose three.)",
      options: [
        "A. Permission Sets",
        "B. Users",
        "C. Roles",
        "D. Profiles",
        "E. Public Groups",
      ],
      answer: "A,B,C",
      title: "Question 60",
    },
    {
      content:
        "Cloud Kicks's management team frequently travels and wants to approve requests from their team on the go via Chatter.Where would an app builder enable this ability?",
      options: [
        "A. Approval Process Settings",
        "B. Chatter Feed Tracking",
        "C. Object Settings",
        "D. Chatter Settings",
      ],
      answer: "D",
      title: "Question 61",
    },
    {
      content:
        "An app builder wants to limit the amount of fields users are required to fill out when creating a new Opportunity. Once they fill out the required fields and save, the full record page with additional fields relevant to the Opportunity type becomes available. How could this be accomplished?",
      options: [
        "A. Make the Opportunity type a required field on the initial Opportunity page layout and use automation to fill in the type field to a record type.",
        "B. Use different page layouts for Opportunity types based on the user profile.",
        "C. Once the required fields are populated, use a sharing rule to share the new fields with the user.",
        "D. Hide additional sections on the page layout and show the users how to manually expand them when they want to fill in the fields in the hidden sections.",
      ],
      answer: "A",
      title: "Question 62",
    },
    {
      content:
        "universal containers has several new fields they requested for the opportunity product object. What should an app builder be able to configure using a formula field ?",
      options: [
        "A. A mix of functions and concatenation of 10 account fields and 10 opportunity fields.",
        "B. A Rich text area field that uses HTML to bold certain characters",
        "C. A combination of the opportunity`s text and a description fields.",
        "D. A hyperlink to the parent account of the parent opportunity.",
      ],
      answer: "B",
      title: "Question 63",
    },
    {
      content: "Which objects can be members of a campaign? Choose 2 answers",
      options: ["A. Contact", "B. Lead", "C. Opportunity", "D. Account"],
      answer: "A,B",
      title: "Question 64",
    },
    {
      content:
        "What are two reasons to create unmanaged packages? (Choose two.)",
      options: [
        "A. Distributing open-source projects on the AppExchange.",
        "B. Publishing an application for sale on the AppExchange.",
        "C. Deploying from a Developer Edition environment.",
        "D. Migrating of components from sandbox to production.",
      ],
      answer: "A,C",
      title: "Question 65",
    },
    {
      content:
        "A Service Coordinator (SC) for Ursa Major Solar (UMS) does a final review of work orders owned by a technician for a specific region before the records are submitted for an invoice. Before closing out the work order, the SC needs to modify data or remove attachments that were added by mistake. The SC also needs access to any other related records owned by the technician. What solution would provide the required access, given a private data model?",
      options: [
        "A. Give the SC a permission set with the Modify All Data system permission.",
        "B. Create a workflow rule that updates records owned by technicians in that region with the SC.",
        "C. Put the SC in the role hierarchy above the technicians whose work orders they review.",
        "D. Change work order access on the SC's profile to 'Modify AIl.",
      ],
      answer: "C",
      title: "Question 66",
    },
    {
      content:
        "What is a true statement in regard to creating custom report types?When the primary object is a custom object and is deleted, then the report type and any reports created from it must be deleted manually",
      options: [
        "A. Once a report type is saved with a standard or custom primary object, the primary object cannot be changed for the report type",
        "B. Any object can be chosen unless the object is not visible to the person creating the report type through security settings",
        "C. The detail object in a master-detail relationship cannot be added as a secondary object on a custom report type",
        "D. When the primary object is a custom object and is deleted, then the report type and any reports created from it must be deleted manually",
      ],
      answer: "A",
      title: "Question 67",
    },
    {
      content:
        'An app builder at DreamHouse Realty created a custom object which has fields containing data from two different objects via related lookups. What is needed to create "with" or "without* reports on the new custom object?',
      options: [
        "A. Row-Level Formula",
        "B. Report Filters",
        "C. Report Bucket Field",
        "D. Custom Report Type",
      ],
      answer: "D",
      title: "Question 68",
    },
    {
      content:
        "For an external object relationship, you can create an indirect lookup relationship. What type of object(s) can be the parent?",
      options: [
        "A. External",
        "B. Standard or Custom",
        "C. Standard or External",
        "D. Custom",
      ],
      answer: "B",
      title: "Question 69",
    },
    {
      content:
        "Universal container sales reps can modify fields on an opportunity until it isclosed. Only the sales operations team can modify the post close follow up date andpost close followup comments fields. How to make this happen?",
      options: [
        "A. Use record types with field sets and restrict editing fields using field-level security",
        "B. Use multiple record types, page layouts, and profiles",
        "C. Use field-level security on page layouts to restrict editing fields",
        "D. Use field-level security to mark fields as read-only on the sales profile",
      ],
      answer: "C",
      title: "Question 70",
    },
    {
      content:
        "An Alexa Skill Builder did not include a display template in a skill.When the skill is used with an Amazon Alexa enabled device with a screen, cards used in the skill are:",
      options: [
        "A. rendered as a gray screen.",
        "B. rendered using the skill icon as the foreground image.",
        "C. rendered using the skill icon as the background image.",
        "D. rendered using BodyTemplate1.",
      ],
      answer: "D",
      title: "Question 71",
    },
    {
      content:
        "An app builder received a request to extend record access beyond the organization-wide defaults configured. Which two features satisfy this requirement? Choose 2 answers",
      options: [
        "A. Manual Sharing Rules",
        "B. Permission Set Groups",
        "C. Public Groups",
        "D. Sharing Rules",
      ],
      answer: "C,D",
      title: "Question 72",
    },
    {
      content:
        "The VP of Sales wants a Chatter post to the All-Sales private group when an opportunity goes to the closed won stage. What two tools should the app builder use to automate this process? Choose 2 answers",
      options: [
        "A. Flow",
        "B. Workflow",
        "C. Big Deal Alert",
        "D. Process Builder",
      ],
      answer: "A,D",
      title: "Question 73",
    },
    {
      content:
        "At Universal Containers, the VP of Service has requested a visual indicator flag on each case, based on the case priority. High-priority cases should be flagged red, medium-priority should be flagged yellow, and low-priority cases should be flagged green. Which formula would accomplish this requirement? Choose 2 answers",
      options: [
        'A. IF(ISPICKVAL(Priority, "Low"), "img/samples/flag_green.gif", IF(ISPICKVAL(Priority, "Medium"),"img/samples/flag_yellow.gif", IF(ISPICKVAL(Priority, "High"), "img/samples/flag_red.gif","/s.gif")))',
        'B. IMAGE( IF(ISPICKVAL(Priority, "Low"), "img/samples/flag_green.gif", IF(ISPICKVAL(Priority,"Medium"), "img/samples/flag_yellow.gif", IF(ISPICKVAL(Priority, "High"),"img/samples/flag_red.gif"))), "Priority Flag")',
        'C. IMAGE(CASE( Priority, "Low", "img/samples/flag_green.gif", "Medium","img/samples/flag_yellow.gif", "High", "img/samples/flag_red.gif", "Priority Flag")',
        'D. CASE( Priority, "Low", "img/samples/flag_green.gif", "Medium", "img/samples/flag_yellow.gif","High", "img/samples/flag_red.gif", "/s.gif")',
      ],
      answer: "B,C",
      title: "Question 74",
    },
    {
      content: "What is the maximum number of external IDs an object may have?",
      options: ["A. 5", "B. 3", "C. 7", "D. 1"],
      answer: "C",
      title: "Question 75",
    },
    {
      content:
        "Cloud Kicks has leads owned by users and queues. The sales manager wants the status to change to working when a user takes ownership. What does an app builder need to have in the criteria to ensure the process runs without error?",
      options: [
        "A. [Lead].Owner:User.Role Is Null = False",
        'B. BEGINS([Lead].OwnerId, ,,005")',
        "C. [Lead].Owner:Queue.OwnerId Is Null = True",
        "D. NOT(ISBLANK([Lead].OwnerId))",
      ],
      answer: "D",
      title: "Question 76",
    },
    {
      content:
        "Universal Containers uses a private Account sharing model. They have a Process Improvement team with representatives from multiple departments that needs to view all accounts that have been flagged as problem accounts. How should this team be granted access to the records?",
      options: [
        "A. Write a trigger to use Apex Managed Sharing to grant access with the Process Improvement team.",
        "B. Use a record owner sharing rule that is shared with the Process Improvement public group.",
        "C. Use a record owner sharing rule that is shared with the Process Improvement role.",
        "D. Use a criteria-based sharing rule where the accounts are shared with the Process Improvement public group.",
      ],
      answer: "D",
      title: "Question 77",
    },
    {
      content: "Field type conversion. Which of the following are true: (2)",
      options: [
        "A. Data can be lost when converting from auto-number to text",
        "B. Information can be lost when converting from text area (rich) to text area (long)",
        "C. Data can be lost when converting from simple picklist to multi picklist",
        "D. Data can be lost when converting from number to currency (assuming that field lengths are identical)",
      ],
      answer: "A,B",
      title: "Question 78",
    },
    {
      content:
        "A new custom object called Invoices needs to have an invoice date for the date and time it was invoiced. What field type should be selected for this?",
      options: ["A. Date/Timestamp", "B. Time", "C. Date/Time", "D. Date"],
      answer: "C",
      title: "Question 79",
    },
    {
      content:
        "An organization wants to create a field to store manager data on the user object. The manager field is a reference to another user record. What type of relationship should be used?",
      options: [
        "A. Master-Detail",
        "B. Lookup",
        "C. Many-to-many",
        "D. Hierarchical",
      ],
      answer: "D",
      title: "Question 80",
    },
    {
      content:
        "In order to delete the Opportunities, Universal Containers would like sales reps to submit requests for approval from their sales manager. What can be used to meet these requirements?",
      options: [
        "A. Approval Process with Apex Trigger.",
        "B. Two-step Approval process.",
        "C. Process Builder with Submit for Approval action",
        "D. Approval Process with Time-Dependent workflow action.",
      ],
      answer: "A",
      title: "Question 81",
    },
    {
      content:
        "The marketing team at Universal Containers has a list of 400 leads they would like to upload to Salesforce. They need to avoid creating duplicate records. Which two actions should be taken to meet this requirement? (Choose two.)",
      options: [
        "A. Utilize a Lead Matching Rule and corresponding Duplicate Rule to block newly created duplicate leads.",
        "B. Upload the lead list using the Import Wizard and select a Matching Type to prevent duplicate lead creation.",
        "C. Use Data Loader's update function to import leads and match to existing records based on e-mail address.",
        "D. Enable Duplicate Matching in the Data Management section in Setup and activate the Lead-to-Lead scenario.",
      ],
      answer: "A,B",
      title: "Question 82",
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
      title: "Question 83",
    },
    {
      content:
        "Users at Cloud Kicks provided feedback that the time card custom page layout has too many fields on it, and some fields are only needed if other fields are entered. What should an app builder configure to help with this issue?",
      options: [
        "A. Lightning web components",
        "B. Dependent picklists",
        "C. Separate page layouts",
        "D. Dynamic forms",
      ],
      answer: "D",
      title: "Question 84",
    },
    {
      content: "What are the limitations of workflow rules?",
      options: [
        "A. You can't create e-mail alerts for workflow rules on activities.",
        "B. All of the above.",
        "C. You can't package workflow rules with time triggers.",
        "D. You can't create outbound messages for workflow rules on junction objects.",
      ],
      answer: "B",
      title: "Question 85",
    },
    {
      content:
        "Which two features can be used to allow users to access Visual Workflows? Choose 2 answers",
      options: [
        "A. Invoked by Process",
        "B. Visual Workflow Launcher",
        "C. Quick Action",
        "D. Custom Button",
      ],
      answer: "A,B",
      title: "Question 86",
    },
    {
      content:
        "When would a developer use upsert and external IDs? (Choose two.)",
      options: [
        "A. To load related records without knowing Salesforce record IDs.",
        "B. To migrate customizations from a sandbox to production.",
        "C. To integrate with an external system.",
        "D. To use Web Services API to query for data.",
      ],
      answer: "A,C",
      title: "Question 87",
    },
    {
      content:
        "An app builder wants to streamline the user experience by reflecting summarized calculation of specific fields on various objects. Which three fields types should be used in roll-up summary fields to accomplish this? Choose 3 answer",
      options: [
        "A. Date",
        "B. Checkbox",
        "C. Time",
        "D. Currency",
        "E. Percent",
      ],
      answer: "A,D,E",
      title: "Question 88",
    },
    {
      content:
        "Which of the following is true in regards to the User Acceptance testing (UAT) step in a large enterprise application lifecycle? Choose 2 answers.",
      options: [
        "A. UAT come after Integration Testing",
        "B. UAT is typically the last step before deploying changes to production",
        "C. UAT can be used for end user testing or training",
        "D. UAT comes before Integration testing",
      ],
      answer: "A,C",
      title: "Question 89",
    },
    {
      content:
        "Ann app builder has been to display an overdue date that is two months after a tasks due date. Which approach should the app builder take?",
      options: [
        "A. Use process builder and set overdue Date equal to DueDate + 60",
        "B. Create a formula field using DueDate + 60",
        "C. Create a formula field using the ADDMONTHS () function",
      ],
      answer: "A",
      title: "Question 90",
    },
    {
      content:
        "Universal Containers provides access to Salesforce for their sales, service and marketing teams. Management wants to ensure that when users log in, their home tab provides access to links and documentation that are specifically relevant to their job function. How can this requirement be met?",
      options: [
        "A. Create separate home page custom components and layouts; assign to users by profile.",
        "B. Expose specific elements within a home page custom components determined by profile.",
        "C. Expose specific elements within a home page custom component determined by role.",
        "D. Create separate home page custom components and layouts; assign to users by role.",
      ],
      answer: "A",
      title: "Question 91",
    },
    {
      content:
        "Ann app builder has been to display an overdue date that is two months after a tasks due date. Which approach should the app builder take?",
      options: [
        "A. Use process builder and set overdue date equal to DueDate + ((365/12)*2)",
        "B. Create a formula field using the ADDMONTHS () function",
        "C. Use process builder and set overdue Date equal to DueDate + 60",
        "D. Create a formula field using DueDate + 60",
      ],
      answer: "B",
      title: "Question 92",
    },
    {
      content:
        "Universal Containers needs to send an Outbound Message to an external system when a record has been updated. What is the recommended feature to meet this requirement?",
      options: [
        "A. Flow Launcher",
        "B. Process Builder",
        "C. Lightning Connect",
        "D. Workflow",
      ],
      answer: "D",
      title: "Question 93",
    },
    {
      content:
        "Which three options are available for assigning access to Lightning Pages using Lightning App Builder?(Choose three.)",
      options: [
        "A. App, record type, profile",
        "B. Profile and permission sets",
        "C. Role and subordinates",
        "D. The org default",
        "E. App default",
      ],
      answer: "A,D,E",
      title: "Question 94",
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
      title: "Question 95",
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
      title: "Question 96",
    },
    {
      content:
        "Universal containers allows users to create standard reports on demand. What are two considerations users should be aware of when creating a new report?",
      options: [
        "A. Users can require that child objects exist for parent records using a cross filter",
        "B. Records will be available in the in the report regardless of security permissions",
        "C. Reports created from standard report types are available to all users",
        "D. The report type determines the types of records and fields that will be available",
      ],
      answer: "D",
      title: "Question 97",
    },
    {
      content:
        "Which permission is required to install and uninstall packages from Salesforce AppExchange?",
      options: [
        "A. Create AppExchange Packages.",
        "B. Download AppExchange Packages.",
        "C. Manage Package Licenses.",
        "D. Upload AppExchange Packages.",
      ],
      answer: "B",
      title: "Question 98",
    },
    {
      content:
        "SF can connect social profiles to all of the following objects except __________.",
      options: [
        "A. Users",
        "B. Contacts",
        "C. Business Accounts",
        "D. Person Accounts",
        "E. Leads",
      ],
      answer: "A",
      title: "Question 99",
    },
    {
      content:
        "What happens when you convert a picklist to a multi-select picklist? (Choose two.)",
      options: [
        "A. You can't convert to a multi-select picklist.",
        "B. Values not in the picklist are deleted from existing records when the data type changes.",
        "C. Data is lost.",
        "D. Values are retained.",
      ],
      answer: "B,D",
      title: "Question 100",
    },
    {
      content:
        "Universal Containers generates leads from three different sources: web, trade shows, and partners. Some of the information collected is applicable to all sources, there is also information that is unique to each type of lead. What should an app builder configure to meet these requirements?",
      options: [
        "A. Create three sections on the lead layout and instruct users to collapse the non-relevant fields",
        "B. Create three lead record types each with its own page layout containing the relevant fields",
        "C. Create a partner community and a record type for web and trade show leads",
        "D. Create custom page payouts for each type of lead only containing the relevant fields",
      ],
      answer: "B",
      title: "Question 101",
    },
    {
      content:
        "Which is correctly referencing a field on the Force.com custom object Position__c?",
      options: [
        "A. {&Position__c.Status__c}",
        "B. [!Position__c.Status__c]",
        "C. {!Position__c.Status__c}",
        "D. [&Position__c.Status__c]",
      ],
      answer: "C",
      title: "Question 102",
    },
    {
      content:
        'A custom object named Assignment has a private sharing setting that grants access using hierarchies. The organization has a role hierarchy where the "Specialist" role reports to a "Manager" role which reports to a"Director" role. The director role is at the top of the role hierarchy. A user who is the manager role creates a new Assignment record. Who can send this record?',
      options: [
        "A. The record owner and the specialists in their hierarchy",
        "B. The record owner and those above the specialist role in their hierarchy",
        "C. The record owner and the directors in their hierarchy.",
        "D. The record owner and the managers in their hierarchy",
      ],
      answer: "C",
      title: "Question 103",
    },
    {
      content:
        "The previous administrator of Cloud Kicks' (CK) Salesforce Organization used text as the field type when creating new custom fields. CK's current roadmap requires a project that will clean this up during the Lightning migration. Which three field types should be considered to keep better track of contact information in fields? Choose 3 answers",
      options: ["A. Time", "B. Number", "C. Phone", "D. Date", "E. Email"],
      answer: "B,C,E",
      title: "Question 104",
    },
    {
      content:
        "A business user wants a quick way to edit a record's status and enter a custom due date field from the record's feed in Salesforce1 Mobile. What could be used to accomplish this?",
      options: [
        "A. Custom URL formula field",
        "B. Custom Action",
        "C. Custom quick access link",
        "D. Custom Button",
      ],
      answer: "B",
      title: "Question 105",
    },
    {
      content:
        "An app builder wants to deploy a new version of an auto launched flow to production in an active state so that the new functionality is immediately available to users. What should the app builder take into consideration when planning the deployment?",
      options: [
        "A. Include the profiles that access the flow in the deployment",
        "B. Verify there is an Apex test that provides test coverage for the Flow",
        "C. Verify there is a static resource that provides test coverage for the Flow",
        "D. Include the Process Builder calling the Flow in the deployment",
      ],
      answer: "C",
      title: "Question 106",
    },
    {
      content:
        "You cannot change auto number to text and vice versa and not lose your data.",
      options: ["A. True", "B. False"],
      answer: "B",
      title: "Question 107",
    },
    {
      content:
        "On the Account Lightning record page, users need to see ten fields and the ability to sort and wrap text on their Related Lists. What Related List type would the app builder select for the Related List Lightning component?",
      options: [
        "A. Enhanced List",
        "B. ListVlew",
        "C. List Class",
        "D. Basic List",
      ],
      answer: "A",
      title: "Question 108",
    },
    {
      content:
        "A new custom object is begin created with a private sharing setting. The business wants to share individual records with specific people or groups of people on a case-by-case basis. Which three options does the business user have to manually share individual records? (Choose three.)",
      options: [
        "A. Profiles",
        "B. Users",
        "C. Permission Sets",
        "D. Roles",
        "E. Public Groups",
      ],
      answer: "B,C,D",
      title: "Question 109",
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
      answer: "A,B",
      title: "Question 110",
    },
    {
      content:
        "A Cloud Kicks employee submitted an opportunity for approval by their manager. What would happen if the employee attempts to edit the description field after submission?",
      options: [
        "A. User will be able to edit the name, but unable to edit the description.",
        "B. User will be presented with a 'Record Lock' notification.",
        "C. User will be able to edit the description field only.",
        "D. User will see the record is now owned by their manager.",
      ],
      answer: "B",
      title: "Question 111",
    },
    {
      content:
        "Which Action Type is not available when working with Global Actions?",
      options: [
        "A. Create a Record",
        "B. Custom Visualforce",
        "C. Update a Record",
        "D. Log a Call",
      ],
      answer: "C",
      title: "Question 112",
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
      title: "Question 113",
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
      title: "Question 114",
    },
    {
      content:
        "Which two features should be used to allow users to access Flows? (Choose two.)",
      options: [
        "A. Invoked by a Process.",
        "B. Flow Launcher",
        "C. Custom Button",
        "D. Quick Action",
      ],
      answer: "C,D",
      title: "Question 115",
    },
    {
      content:
        "Cloud Kicks works on an annual subscription model. When a sale rep marks an opportunity as closed won, a new opportunity should automatically be created for the renewal. The contracts team works outside of salesforce but also needs to be notified about closed deals in order to initial the contract process with the customer. Which automation solution would meet these requirements?",
      options: [
        "A. Outbound Message",
        "B. Approval Process",
        "C. Record-triggered flow",
        "D. Validation Rule",
      ],
      answer: "A",
      title: "Question 116",
    },
    {
      content:
        "Universal Containers needs to update a field on an Account when an Opportunity Stage is changed to Closed Lost. What tools can we use to accomplish this requirement? (Choose 2)",
      options: [
        "A. Workflow Rule",
        "B. Lightning Process Builder",
        "C. Approval Process",
        "D. Assignment Rule",
      ],
      answer: "A,B",
      title: "Question 117",
    },
    {
      content:
        "Sales managers want to be automatically notified any time there is a change to an opportunity close date and want these changes to be tracked on the opportunity. Which two configurations should an app builder recommend? Choose 2 answers",
      options: [
        "A. Create an opportunity outbound message",
        "B. Use process builder on opportunities and a chatter post action",
        "C. Activate historical trending for opportunities",
        "D. Enable feed tracking on opportunities",
      ],
      answer: "B,D",
      title: "Question 118",
    },
    {
      content: "Where can a custom button be placed? Choose 3 answers",
      options: [
        "A. On a Person Account",
        "B. On a Web-to-Case form",
        "C. On the User Object",
        "D. On a related list",
        "E. On the Custom List View",
      ],
      answer: "A,D,E",
      title: "Question 119",
    },
    {
      content:
        "You want to use an External Data Object Table from Heroku carrying Product Category information. The data need to be included in Salesforce and searchable. What do you have to do before you can use the connection. (Choose 2)",
      options: [
        "A. URL / choose the URL",
        'B. Choose "include in Salesforce searches" option',
        'C. Choose "include as index field"',
        'D. Press "validate and sync"',
      ],
      answer: "B,D",
      title: "Question 120",
    },
    {
      content:
        "What is a section of the Lightning App Builder Tool? Choose 3 Answers",
      options: [
        "A. Mobile Cards",
        "B. Canvas",
        "C. Mini Page Layout",
        "D. Components",
        "E. Selected Publisher Actions",
      ],
      answer: "B,D,E",
      title: "Question 121",
    },
    {
      content:
        "UV has a customer base where many customers have the same or similar company names.",
      options: [
        "A. Update the account search layout accounts tab columns displayed.",
        "B. Update the account search layout list view filter settings.",
        "C. Update the account search layout search filter fields.",
        "D. Update the account search layout search results columns displayed.",
      ],
      answer: "B,D",
      title: "Question 122",
    },
    {
      content: "What is the capability of sandbox template ? Select 2",
      options: [
        "A. Specify the data range for data being replicated in a partial copy sandbox environment",
        "B. Specify the objects whose data should be replicated in the partial copy sandbox environment",
        "C. Save a template for re-use when creating a partial copy sandbox environment",
        "D. Create a partial copy sandbox from a partial copy sandboxes environment",
      ],
      answer: "B,C",
      title: "Question 123",
    },
    {
      content:
        'Use case:An object called "House" is related to Opportunity, there can be many Houses per Opportunity. On houses, we have a field named "Square feet". We need to show the total of Square feet for all houses on each Opportunity. What type of relationship should we have?',
      options: [
        "A. Cross-Object",
        "B. Junction",
        "C. Master-Detail",
        "D. Lookup",
      ],
      answer: "C",
      title: "Question 124",
    },
    {
      content:
        "Universal Containers wants users to have access to the pricing guidelines document when viewing a Contract related to an Account. What feature should an app builder use to create easy access to the document?",
      options: [
        "A. Quick Action on the Account object",
        "B. A custom detail page link on the Contract object",
        "C. Quick Action on the Contracts object",
        "D. A custom detail page link on the Account object",
      ],
      answer: "B",
      title: "Question 125",
    },
    {
      content:
        "An Alexa Skill Builder noticed that a large percentage of a food ordering skill's customers are not completing their transactions. The Builder needs to know what portion of the customers are leaving the skill by not responding, compared to the portion of customers who receive an error. Which report inside the Analytics section of the developer console will provide this information?",
      options: [
        "A. Session Type Distribution",
        "B. Unique Customers Per Intent",
        "C. Average Session Per Customer",
        "D. Failed Utterances Per Intent",
      ],
      answer: "C",
      title: "Question 126",
    },
    {
      content:
        "Universal Containers wants to test code against a subject of production data that is under 5 GB. They want to refresh a sandbox weekly. Which type of sandbox should be used?",
      options: [
        "A. Full Sandbox",
        "B. Enterprise Sandbox",
        "C. Developer Pro Sandbox",
        "D. Developer Sandbox",
        "E. Partial Copy Sandbox",
      ],
      answer: "E",
      title: "Question 127",
    },
    {
      content:
        "The VP of Sales wants a Chatter post to the All Sales private group when an Opportunity goes to the closed won stage. What two tools should the app builder use to automate this process? Choose 2 answers",
      options: [
        "A. Flow",
        "B. Process Builder",
        "C. Workflow",
        "D. Big Deal Alert",
      ],
      answer: "A,B",
      title: "Question 128",
    },
    {
      content:
        "Universal containers has included its orders as an external data object into Salesforce. You want to create a relationship between Accounts and the Orders object (one-to-many relationship) leveraging a key field for account which is on both external object and Account. Which relationship do you create:",
      options: [
        "A. External Lookup Relationship",
        "B. Indirect Lookup Relationship",
        "C. Lookup Relationship",
        "D. Master Detail Relationship",
      ],
      answer: "B",
      title: "Question 129",
    },
  ],
});
