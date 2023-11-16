window.testContent = window.testContent || [];
var testId = "SalesforceAdmin1";
var testName = "SalesforceAdmin1.ADM-201";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "SalesforceAdmin1.ADM-201.v2023-11-02.q102",
  content: [
    {
      content:
        "The Support team at Ursa Major Solar prefers using split list views on the case homepage. Occasionally, the team views shipments from another support application.\nWhat should the administrator configure to allow the team to use the split list view?",
      options: [
        "A. Filter by a single shipment record type in the list view.",
        "B. Include the Shipments tab on the app's navigation bar.",
        "C. Split views are only available on standard objects.",
        "D. Add the Manage List Views permission for support users.",
      ],
      answer: "C",
      title: "Question 1",
      explanation:
        "Explanation\n Split views are a feature that allows users to view records as a split list on object home pages in Lightning Experience apps that use console navigation. Split views show records in two panes: a list view pane on the left and a record detail pane on the right. Users can switch between different list views and records without losing context or scrolling. However, split views are only available on standard objects such as accounts, contacts, leads, opportunities, cases, etc., and not on custom objects such as shipments. References:\n https://help.salesforce.com/s/articleView?id=sf.lex_split_view.htm&type=5",
    },
    {
      content:
        "An administrator installed a managed package that contains a permission set group. The permission set group that was installed includes Delete access on several objects, and the administrator needs to prevent users in the permission set group from being able to delete records.\nWhat should the administrator do to control Delete access?",
      options: [
        "A. Use a muting permission set with a permission set group to mute selected permissions.",
        "B. Create a new permission set that has Delete access deselected for the objects.",
        "C. Create a new role that prevents Delete permissions from rolling up to the users.",
        "D. Edit the profile for the users to remove Delete access from the objects.",
      ],
      answer: "A",
      title: "Question 2",
      explanation:
        "Explanation\n Muting permission sets allow you to remove permissions that are granted by a permission set group.\n References: https://help.salesforce.com/s/articleView?id=sf.perm_sets_muting.htm&type=5",
    },
    {
      content:
        "The administrator at DreamHouse Realty added an email quick action to the Case page layout and is unable to see the action on the case feed.\nWhich feature must be enabled to ensure the quick action will be displayed as expected?",
      options: [
        "A. Email Notifications",
        "B. Email-to-Case",
        "C. Email Alerts",
        "D. Email Templates",
      ],
      answer: "B",
      title: "Question 3",
      explanation:
        "Explanation\n Email-to-Case allows you to create cases from incoming emails. You need to enable this feature and set up routing addresses and case creation settings.\n References: https://help.salesforce.com/s/articleView?id=sf.customizesupport_email_to_case.htm&type=5",
    },
    {
      content:
        "Cloud Kicks has a custom object named shoe. The administrator has been asked to ensure that when a relationship is created between Account and shoe to prevent orphaned shoe records.\nWhat should the administrator do to complete this requirement?",
      options: [
        "A. Create an indirect lookup",
        "B. Create an encrypted lookup",
        "C. Create a hierarchical lookup",
        "D. Create a master-detail lookup.",
      ],
      answer: "D",
      title: "Question 4",
      explanation:
        "Explanation\n Master-detail lookup is a type of relationship field that can be used to create a relationship between Account and Shoe and prevent orphaned Shoe records. Master-detail lookup establishes a parent-child relationship between two objects, where the parent record controls certain behaviors of the child record, such as security, ownership, and deletion. If the parent record is deleted, all the child records are deleted as well. References:\n https://help.salesforce.com/s/articleView?id=sf.relationships_considerations.htm&type=5",
    },
    {
      content:
        "Sales and Customer Care at Ursa Major Solar need to see different fields on the Case related list from the Account record. Sales users want to see Case created date and status while Customer Care would like to see owner, status, and contact.\nWhat should the administrator use to achieve this?",
      options: [
        "A. Related Lookup Filters",
        "B. Compact Layout Editor",
        "C. Page Layout editor",
        "D. Search Layout Editor",
      ],
      answer: "C",
      title: "Question 5",
      explanation:
        "Explanation\n Page layout editor is a tool that allows you to customize the layout and organization of detail and edit pages for a specific object and record type combination. You can also use page layout editor to customize related lists on detail pages by adding or removing fields, changing column order, sorting records, etc. To meet the requirement of showing different fields on the Case related list from the Account record for Sales and Customer Care users, you need to use page layout editor to modify the related list properties for each page layout assigned to those users. References:\n https://help.salesforce.com/s/articleView?id=sf.customize_layoutrelatedlists.htm&type=5",
    },
    {
      content:
        "Northern Trail outfitters has hired interns to enter Leads into Salesforce and has requested a way to is identify these new records from existing Leads.\nWhat approach should an administrator take to meet this requirement?",
      options: [
        "A. Set up Web-to-Lead form the interns use.",
        "B. Define a record type and assign it to the interns.",
        "C. Create a separate Lead Lightning App.",
        "D. Update the active Leas Assignment Rules.",
      ],
      answer: "B",
      title: "Question 6",
      explanation:
        "Explanation\n To identify new leads entered by interns from existing leads, the administrator should define a record type and assign it to the interns. This will allow them to select a different record type when creating leads, and distinguish them from other leads based on record type. Setting up Web-to-Lead form will not work if the interns are entering leads manually in Salesforce. Creating a separate Lead Lightning App or updating the active Lead Assignment Rules will not affect lead identification. References:\n https://help.salesforce.com/s/articleView?id=sf.customize_recordtype.htm&type=5",
    },
    {
      content: "What will happen to the Chatter post in this situation?",
      options: [
        "A. The pending Chatter post will be canceled.",
        "B. The pending Chatter post will be sent on the 10th of the month",
        "C. The pending Chatter post will be will be paused.",
        "D. The pending Chatter post will be sent in 30 days.",
      ],
      answer: "A",
      title: "Question 7",
      explanation:
        "Explanation\n A pending Chatter post is a post that has been scheduled to be published at a future date and time. However, if the user who created the pending Chatter post is deactivated before the scheduled date and time, then the pending Chatter post will be canceled and will not be published. This is because deactivated users cannot create or edit posts in Chatter. References:\n https://help.salesforce.com/s/articleView?id=sf.collab_scheduled_posts.htm&type=5\n https://help.salesforce.com/s/articleView?id=sf.collab_deactivated_users.htm&type=5",
    },
    {
      content:
        "administrator at Northern Trail Outfitters is unable to add a new user in Salesforce.\nWhat could cause this issue?",
      options: [
        "A. The username is already in use another organization.",
        "B. The username is restricted to a domain specific to my domain.",
        "C. The email address used for the username has a contact record.",
        "D. The email used for the username is not a corporate email address.",
      ],
      answer: "A",
      title: "Question 8",
      explanation:
        "Explanation\n One of the possible causes for being unable to add a new user in Salesforce is that the username is already in use by another organization. Usernames must be globally unique across all Salesforce orgs, so if another user has claimed that username before, it cannot be used again. To fix this issue, choose a different username that is not taken by anyone else. The username is not restricted to a domain specific to my domain unless specified by an administrator. The email address used for the username does not have to match a contact record. The email used for the username can be any valid email address. References:\n https://help.salesforce.com/s/articleView?id=sf.admin_usermgmt_add.htm&type=5",
    },
    {
      content:
        "Cloud Kicks wants to track shoe designs by products. Shoe designs should be unable to be deleted, and there can be multiple designs for one product across various stages.\nWhich two steps should the administrator configure to meet this requirement?\nChoose 2 answers",
      options: [
        "A. Add a custom master-detail field for shoe designs on the Product object,",
        "B. Create a custom object for shoe designs.",
        "C. Use the standard object for designs.",
        "D. Configure a custom lookup field for shoe designs on the Product object.",
      ],
      answer: "B,D",
      title: "Question 9",
      explanation:
        "Explanation\n To track shoe designs by products, prevent them from being deleted, and allow multiple designs for one product across various stages, the administrator should create a custom object for shoe designs and configure a custom lookup field for shoe designs on the Product object. This will create a one-to-many relationship between products and shoe designs, and allow users to link multiple shoe designs to one product record. To prevent shoe designs from being deleted, the administrator can use validation rules or permissions. Adding a custom master-detail field for shoe designs on the Product object will create a many-to-one relationship, which is not desired. Using the standard object for designs or configuring a validation rule will not meet the requirement. References:\n https://help.salesforce.com/s/articleView?id=sf.customize_object_relationships_overview.htm&type=5",
    },
    {
      content:
        "Aw Computing needs to capture a loss reason in rich text field when an opportunity is Closed lost.\nHow should an administrator configure this requirement?",
      options: [
        "A. Select the requirement checkbox next to the loss reason field on the page layout.",
        "B. Create a validation rule to display an error if stage is Closed lost and Loss Reason is blank.",
        "C. Check the required checkbox on the Loss Reason field in Object Manger.",
        "D. Configure a workflow rule to display an error if Loss Reason is blank",
      ],
      answer: "B",
      title: "Question 10",
      explanation:
        "Explanation\n Validation rule is a tool that can be used to enforce data quality and business logic by preventing users from saving records that do not meet certain criteria. In this case, a validation rule can be created on the Opportunity object to display an error message if the Stage field is Closed lost and the Loss Reason field is blank.\n References: https://help.salesforce.com/s/articleView?id=sf.fields_about_validation_rules.htm&type=5",
    },
    {
      content:
        "Sales Users at Cloud Kicks are requesting that the data in the industry field on the Account object displays on the Opportunity page layout.\nWhich type of the field should an administrator create to accomplish this?",
      options: [
        "A. Custom Account Field",
        "B. Standard Account Field.",
        "C. Cross Object Formula Field",
        "D. Master detail relationship Field",
      ],
      answer: "C",
      title: "Question 11",
      explanation:
        "Explanation\n A cross object formula field is a type of formula field that references fields from related objects using relationships such as lookup or master-detail. It can be used to display data from one object on another object without creating another relationship or copying data. A cross object formula field can be created on opportunity object to display data from industry field on account object using account ID lookup relationship.\n A custom account field, a standard account field, or a master-detail relationship field are not types of fields that can display data from industry field on account object on opportunity page layout; they either do not exist or do not reference related objects. References:\n https://help.salesforce.com/s/articleView?id=sf.cross_object_formulas.htm&type=5",
    },
    {
      content:
        "Northern Trail Outfitters has the Case Object set to private. The support manager raised a concern the reps have a boarder view of data than expected and can see all cases on their groups dashboards.\nWhat could be Causing reps to have inappropriate access to data on dashboards?",
      options: [
        "A. Dashboard Filters",
        "B. Dashboard Subscriptions",
        "C. Dynamic Dashboards",
        "D. Public Dashboards.",
      ],
      answer: "C",
      title: "Question 12",
      explanation:
        "Explanation\n Dynamic dashboards allow you to display data according to the security settings of the running user. If users have different access levels to data on dashboards, you can use dynamic dashboards to show them only what they are allowed to see.\n References: https://help.salesforce.com/s/articleView?id=sf.dashboards_dynamic.htm&type=5",
    },
    {
      content:
        "The administrator at Cloud kicks deleted a custom field but realized there is a business unit that still uses the field.\nWhat should an administrator take into consideration when undeleting the field?",
      options: [
        "A. The field needs to be re-added to reports.",
        "B. The field history will remain deleted.",
        "C. The field needs to be restored from the recycle bin.",
        "D. The field needs to be re-added to page Layouts.",
      ],
      answer: "B",
      title: "Question 13",
      explanation:
        "Explanation\n When an administrator deletes a custom field, Salesforce moves it to the deleted fields list for 15 days, during which time it can be undeleted or erased permanently. If the administrator undeletes the field within 15 days, most of its properties and data are restored, except for its field history data, which remains deleted and cannot be recovered. References: https://help.salesforce.com/s/articleView?id=sf.custom_field_delete.htm&type=5",
    },
    {
      content:
        "The administrator for Cloud Kicks has created a screen flow to help service reps ask the same set of questions when customers call in with issues. This screen should be visible from cases.\nHow should the screen flow be distributed?",
      options: [
        "A. Page Layout",
        "B. Component Filter",
        "C. Lightning page",
        "D. Home page",
      ],
      answer: "C",
      title: "Question 14",
      explanation:
        "Explanation\n Lightning page allows you to customize a record page and add a screen flow as a component. You can use the Lightning App Builder to drag and drop the Flow component onto the page and select the screen flow you want to display.\n References: https://help.salesforce.com/s/articleView?id=sf.flow_distribute_lightning_page.htm&type=5\n https://help.salesforce.com/s/articleView?id=sf.flow_builder_overview.htm&type=5",
    },
    {
      content:
        "What are three Setting an administrator should configure to make it easy for approvers to respond to approval requests?\nChoose 3 Answers.",
      options: [
        "A. Update the organizations chatter setting to allow approvals.",
        "B. Enable the organizations Email approval response setting.",
        "C. Specify initial submission actions within the approval process.",
        "D. Add the Items to approve component to the approvers home page.",
        "E. Create a flow to automatically approve all records.",
      ],
      answer: "A,B,D",
      title: "Question 15",
      explanation:
        "Explanation\n To make it easy for approvers to respond to approval requests, the administrator should configure three settings:\n Update the organization's chatter setting to allow approvals, which enables approvers to approve or reject requests from chatter feeds or email notifications Enable the organization's Email approval response setting, which allows approvers to reply to approval request emails with keywords such as APPROVE or REJECT Add the Items to approve component to the approvers home page, which shows a list of pending approval requests that can be acted upon with one click Specifying initial submission actions within the approval process will not affect how approvers respond to requests. Creating a flow to automatically approve all records will bypass the approval process altogether. References:\n https://help.salesforce.com/s/articleView?id=sf.approvals_considerations.htm&type=5\n https://help.salesforce.com/s/articleView?id=sf.approvals_email.htm&type=5\n https://help.salesforce.com/s/articleView?id=sf.approvals_one_click.htm&type=5",
    },
    {
      content:
        "When users log in to Salesforce via the user interface, which two settings does the system check for authentication?\nChoose 2 answers",
      options: [
        "A. The user's Two-Factor Authentication for API Logins permission",
        "B. The role IP address restrictions",
        "C. The user's profile login hours restrictions",
        "D. The user's Two-Factor Authentication for User Interface Logins permission",
      ],
      answer: "C,D",
      title: "Question 16",
      explanation:
        "Explanation\n When users log in to Salesforce via the user interface, the system checks for authentication based on their profile settings and permissions. One of the settings is login hours, which specify the time range when users can log in to Salesforce based on their profile. Another setting is Two-Factor Authentication for User Interface Logins permission, which requires users to enter a verification code along with their username and password when they log in to Salesforce via the user interface. References:\n https://help.salesforce.com/s/articleView?id=sf.users_profiles_loginhours.htm&type=5\n https://help.salesforce.com/s/articleView?id=sf.security_2fa_perm_ui_logins.htm&type=5",
    },
    {
      content:
        "Cloud Kicks (CK) stores information about specific customers in Contacts and information about shoes and accessories in a custom Merchandise object.\nWhat should the CK administrator use to represent that Contact can be interested in multiple pieces of Merchandies?",
      options: [
        "A. Hierarchy column",
        "B. Lookup filter",
        "C. Formula field",
        "D. Junction object",
      ],
      answer: "D",
      title: "Question 17",
      explanation:
        "Explanation\n A junction object is a type of custom object that allows administrators to create many-to-many relationships between two other objects. A many-to-many relationship means that each record of one object can be related to multiple records of another object, and vice versa. For example, a junction object can represent that a contact can be interested in multiple pieces of merchandise, and a piece of merchandise can be of interest to multiple contacts. A junction object has two master-detail relationships with the two objects it connects.\n References: https://help.salesforce.com/s/articleView?id=sf.relationships_manytomany.htm&type=5",
    },
    {
      content:
        "The business development team at Cloud Kicks thinks the account creation process has too many fields to fill out and the page feels cluttered. They have requested the administrator to simplify the process.\nWhich automation tool should an administrator use?",
      options: [
        "A. Approval process",
        "B. Workflow rule",
        "C. Flow builder",
        "D. Validation rule",
      ],
      answer: "C",
      title: "Question 18",
      explanation:
        "Explanation\n Flow builder is an automation tool that allows administrators to create flows that guide users through screens, collect data, and perform actions on records. It can be used to simplify the account creation process by creating a screen flow that shows only the essential fields for creating an account and hides any unnecessary fields or sections from the page layout. Approval process, workflow rule, and validation rule are not automation tools that can simplify the account creation process; they are used for different purposes such as approving records, updating fields, or enforcing data quality. References:\n https://help.salesforce.com/s/articleView?id=sf.flow_builder.htm&type=5",
    },
    {
      content:
        "Universal Containers has a private sharing model for Opportunities and uses Opportunity teams. Criteria-based sharing rules a sales rep at Universal Containers leaves the company and their user record is deactivated. The rep is later rehired in V administrator activates the old user record. The user is added to the same default Opportunity teams but h no longer able records the user worked on before leaving the company.\nWhat is the likely cause?",
      options: [
        "A. The stage of the Opportunity records was changed to closed lost.",
        "B. Permission sets were removed when the user was deactivated.",
        "C. The record type of the Opportunity records was changed.",
        "D. The records were manual shared with the user.",
      ],
      answer: "D",
      title: "Question 19",
      explanation:
        "Explanation\n The likely cause for why a rehired user is no longer able to access records they worked on before leaving the company is that the records were manually shared with the user. Manual sharing allows granting access to individual records to specific users or groups. However, manual sharing is removed when a record owner changes or when a user's role changes. When a user is deactivated, their role is removed and any manual sharing involving that user is deleted. When a user is reactivated, their role is restored but manual sharing is not. Therefore, the rehired user will not have access to records that were manually shared with them before deactivation. The stage of Opportunity records, permission sets, or record type of Opportunity records are not likely causes for why a rehired user is no longer able to access records they worked on before leaving the company. References: https://help.salesforce.com/s/articleView?id=sf.sharing_manual.htm&type=5",
    },
    {
      content:
        "Dreamhouse realty wants to offer a form on its experience cloud site where inspectors will submit findings from a property inspection.\nWhich feature should an administrator place on the page to fulfill this requirement?",
      options: [
        "A. Related List",
        "B. Autolaunched Flow",
        "C. Record Detail",
        "D. Screen Flow",
      ],
      answer: "D",
      title: "Question 20",
      explanation:
        "Explanation\n Screen flow allows you to create a form that collects user input and performs actions based on that input. You can use screen components to display questions and instructions, and use flow logic to update records or send notifications.\n References: https://trailhead.salesforce.com/content/learn/modules/screen-flows/get-started-with-screen-flows\n https://help.salesforce.com/s/articleView?id=sf.flow_builder_overview.htm&type=5",
    },
    {
      content:
        "Which tool should an administrator use to identify and fix potential session vulnerabilities?",
      options: [
        "A. Field History Tracking",
        "B. Setup Audit Trail",
        "C. Security Health Check",
        "D. Organization-Wide Defaults",
      ],
      answer: "C",
      title: "Question 21",
      explanation:
        "Explanation\n Security Health Check is a tool that can be used to identify and fix potential session vulnerabilities. Security Health Check scans the security settings in an org and compares them to a baseline set of standards, such as the Salesforce Baseline Standard or the Salesforce Optimized Standard. Security Health Check provides a health check score and a list of issues and recommendations for improving the security settings. References:\n https://help.salesforce.com/s/articleView?id=sf.security_health_check.htm&type=5",
    },
    {
      content:
        "Northern Trail Outfitters wants to track ROI for contacts that are key stakeholders for opportunities.\nThe VP of Sales requested that this information be accessible on the opportunity and available for reporting.\nWhich two options should the administrator configure to meet these requirements?\nChoose 2 answers",
      options: [
        "A. Customize Campaign Member Role.",
        "B. Add the Campaign Member related list to the Opportunity page layout.",
        "C. Customize Campaign Role.",
        "D. Customize Opportunity Contact Role.",
        "E. Add the Opportunity Contact Role related list to the Opportunity page layout.",
      ],
      answer: "D,E",
      title: "Question 22",
      explanation:
        "Explanation\n Opportunity contact roles allow you to track ROI for contacts that are key stakeholders for opportunities. You need to customize the contact role field and add the related list to the opportunity page layout.\n References: https://help.salesforce.com/s/articleView?id=sf.opportunity_contact_roles.htm&type=5\n https://help.salesforce.com/s/articleView?id=sf.customize_opportunity_contact_role.htm&type=5",
    },
    {
      content:
        "Support agent at Cloud Kicks are spending too much time finding resources to solve cases.\nThe agents need a more efficient way to find documentation and similar cases from the Case page layout.\nHow should an administrator meet this requirement?",
      options: [
        "A. Create a custom object to capture popular case resolutions.",
        "B. Use an interview flow to capture Case details.",
        "C. Direct users to Global Search to look for similar cases.",
        "D. Configure Knowledge with articles and data categories.",
      ],
      answer: "D",
      title: "Question 23",
      explanation:
        "Explanation\n Knowledge is a feature that can be used to meet this requirement. Knowledge allows users to create, manage, and share articles that provide information and solutions for common issues or questions. Data categories can be used to organize articles into different topics and make them easier to find and access. Users can view related articles from the Case page layout based on the data category of the case. References:\n https://help.salesforce.com/s/articleView?id=sf.knowledge_overview.htm&type=5\n https://help.salesforce.com/s/articleView?id=sf.knowledge_categories.htm&type=5",
    },
    {
      content:
        'The administrator at universal containers has a screen flow that helps users create new leads.\nWhen lead source is "Search Engine", the administrator needs to require the user to choose a specific a search engine from a picklist. If lead source is not "Search Engine", this picklist should be hidden.\nHow should the administrator complete this requirement?',
      options: [
        'A. Assign a decision element to direct the user to a second screen to hold specific search engine only when a lead source is "Search Engine".',
        'B. Use an assignment element, one for when lead source is "Search Engine" and one for everything else.',
        'C. Create a picklist for specific search engine, and set conditional visibility so that is only shown when lead source is "Search Engine".',
        'D. Configure a picklist for specific search engine, and use a validation rule to conditionally show only when lead source is "Search Engine"',
      ],
      answer: "C",
      title: "Question 24",
      explanation:
        'Explanation\n To require users to choose a specific search engine from a picklist when lead source is "Search Engine", and hide it otherwise, the administrator should create a picklist for specific search engine on the same screen as lead source, and set conditional visibility so that it is only shown when lead source is "Search Engine". This will make sure that users see only relevant fields based on their input. A decision element will create an extra screen that may disrupt user experience. An assignment element will not affect field visibility. A validation rule will not hide fields but only show errors when values are invalid. References:\n https://help.salesforce.com/s/articleView?id=sf.flow_ref_elements_screen_components_picklist.htm&type=5\n https://help.salesforce.com/s/articleView?id=sf.flow_ref_elements_screen_components_conditional_visibility.ht',
    },
    {
      content:
        "An administrator at Cloud Kicks has a flow in production that is supposed to create new records.\nHowever, no new records are being created.\nWhat could the issue be?",
      options: [
        "A. The flow is read only.",
        "B. The flow is inactive.",
        "C. The flow URL is deactivated.",
        "D. The flow trigger is missing.",
      ],
      answer: "B",
      title: "Question 25",
      explanation:
        "Explanation\n A flow can be active or inactive depending on whether you want it to run or not. An inactive flow cannot be run by users or processes until you activate it. If a flow in production is supposed to create new records but it is not doing so, it could be because the flow is inactive and needs to be activated. References:\n https://help.salesforce.com/s/articleView?id=sf.flow_distribute_activate.htm&type=5",
    },
    {
      content:
        "Cloud kicks want to give credit to Opportunity team members based on the level of effort contributed by each person toward each deal.\nWhat feature should the administrator use to meet this requirement?",
      options: ["A. Stages", "B. Splits", "C. Queues", "D. List Views"],
      answer: "B",
      title: "Question 26",
      explanation:
        "Explanation\n Splits is a feature that should be used to meet this requirement. Splits allows users to assign credit to opportunity team members based on the level of effort contributed by each person toward each deal. Users can create different types of splits, such as revenue or overlay splits, and specify the percentage or amount of credit for each team member. References:\n https://help.salesforce.com/s/articleView?id=sf.forecasts3_splits_overview.htm&type=5",
    },
    {
      content:
        "An administrator created a record trigger flow to update contacts.\nHow should the administrator reference the values of the active record the flow is running on?",
      options: [
        "A. Use the {!Contact.Id} global variable.",
        "B. Use the {!Account.Id} record variable.",
        "C. Use the $Record global variable.",
        "D. Use the Get Records element to find the Id.",
      ],
      answer: "C",
      title: "Question 27",
      explanation:
        "Explanation\n The $Record global variable allows you to reference the values of the active record the flow is running on.\n References: https://help.salesforce.com/s/articleView?id=sf.flow_ref_global_variables.htm&type=5",
    },
    {
      content:
        "Northern Trail Outfitters uses a custom object Invoice to collect customer payment information from an external billing system. The Billing System field needs to be filled on every Invoice record.\nHow should an administrator ensure this requirement?",
      options: [
        "A. Make the field universally required.",
        "B. Create a Process Builder to set the field.",
        "C. Define an approval process for the child.",
        "D. Require the field on the record type.",
      ],
      answer: "A",
      title: "Question 28",
      explanation:
        "Explanation\n Making a field universally required is a way to ensure that the field needs to be filled on every record; it prevents users from saving a record without entering a value in that field. It can be used to ensure that the billing system field needs to be filled on every invoice record by making it universally required in the field settings. Creating a process builder to set the field, defining an approval process for the child, or requiring the field on the record type are not ways to ensure that the field needs to be filled on every record; they either do not enforce data entry or only apply to certain scenarios or users. References:\n https://help.salesforce.com/s/articleView?id=sf.customize_fields.htm&type=5",
    },
    {
      content:
        "A user at Universal Containers left the company. The administrator needs to create new user for their replacement, but they have assigned all available users licenses.\nWhat should the administrator do to free up users licenses for the new users?",
      options: [
        "A. Deactivate the former employees user record.",
        "B. Delete former employees user record.",
        "C. Freeze former employees user record.",
        "D. Change the formers users record to the new user.",
      ],
      answer: "A",
      title: "Question 29",
      explanation:
        "Explanation\n To free up user licenses for new users, the administrator should deactivate the former employees user record.\n This will prevent them from logging in and using Salesforce resources, but preserve their historical activities and data. Deleting or freezing user records will not release user licenses. References:\n https://help.salesforce.com/s/articleView?id=sf.admin_usermgmt_licensing.htm&type=5",
    },
    {
      content:
        "A team of support users at Cloud Kicks is helping inside sales reps make follow-up calls to prospects that filled out an interest from online. The team currently does not access to the lead object.\nHow should an administrator provide proper access?",
      options: [
        "A. Create a new profile",
        "B. Configure permission sets.",
        "C. Assign a new role.",
        "D. Set Up Manual Sharing",
      ],
      answer: "B",
      title: "Question 30",
      explanation:
        "Explanation\n Permission sets are a flexible way to grant additional access to users without changing their profiles. To provide access to the lead object for a team of support users, create a permission set that includes the appropriate object and field permissions for leads, and then assign it to the users. References:\n https://help.salesforce.com/s/articleView?id=sf.perm_sets_overview.htm&type=5",
    },
    {
      content:
        "An administrator at Ursa Major Solar just learned about the AppExchange and how helpful it can be to the company's business.\nWhich two actions can be accomplished via the AppExchange?\n'Choose 2 answers",
      options: [
        "A. Find certified developers and consultants.",
        "B. Download the Dataloader data tool.",
        "C. Install industry-specific solution templates.",
        "D. Download standard Lightning components.",
      ],
      answer: "A,C",
      title: "Question 31",
      explanation:
        "Explanation\n The AppExchange is an online marketplace where customers can find apps, components, consultants, developers, and more to extend Salesforce functionality or solve specific business challenges. Some of the actions that can be accomplished via AppExchange are finding certified developers and consultants who can help with custom development or implementation projects; installing industry-specific solution templates that provide preconfigured apps, dashboards, reports etc., for various industries such as manufacturing or healthcare; downloading free tools or components that enhance productivity or user experience; browsing reviews or ratings from other customers who have used certain products or services; etc. References:\n https://appexchange.salesforce.com/",
    },
    {
      content:
        "Northern Trail Outfitters has hired interns to enter Leads Into Salesforce and has requested a way to identify these new records from existing Leads.\nWhat approach should an administrator take to meet this requirement?",
      options: [
        "A. Create a separate Lead Lightning App.",
        "B. Define a record type and assign it to the interns.",
        "C. Set up Web-to-Lead for the interns' use.",
        "D. Update the active Lead Assignment Rules.",
      ],
      answer: "B",
      title: "Question 32",
      explanation:
        "Explanation\n To identify new leads entered by interns from existing leads, the administrator should define a record type and assign it to the interns. This will allow them to select a different record type when creating leads, and distinguish them from other leads based on record type. Creating a separate Lead Lightning App or updating the active Lead Assignment Rules will not affect lead identification. Setting up Web-to-Lead form will not work if the interns are entering leads manually in Salesforce. References:\n https://help.salesforce.com/s/articleView?id=sf.customize_recordtype.htm&type=5",
    },
    {
      content:
        "Universal Containers (UC) has a queue that is used for managing tasks that need to be worked by the UC customer support team. The same team will now be working some of UC's Cases.\nWhich two options should the administrator use to help the support team?\nChoose 2 answers",
      options: [
        "A. Configure a flow to assign the cases to the queue.",
        "B. Use assignment rules to set the queue as the owner of the case.",
        "C. Add Cass to the existing queue as available object.",
        "D. Create a new queue and add Cases as an available object.",
      ],
      answer: "B,C",
      title: "Question 33",
      explanation:
        "Explanation\n Assignment rules and queue configuration are two options that should be used to help the support team work on some of UC's cases. Assignment rules can be used to automatically assign cases to a queue based on certain criteria, such as case origin or priority. Queue configuration can be used to add Case as an available object to the existing queue and specify which users or groups can access the queue. References:\n https://help.salesforce.com/s/articleView?id=sf.case_assignment_rules.htm&type=5\n https://help.salesforce.com/s/articleView?id=sf.customize_queues.htm&type=5",
    },
    {
      content:
        "Sales managers would like to know what could be implemented to surface important values based on the stage of the opportunity.\nWhich tool should an administrator use to meet the requirement?",
      options: [
        "A. Dynamic forms",
        "B. Path key fields",
        "C. Opportunity processes",
        "D. Workflow rules",
      ],
      answer: "B",
      title: "Question 34",
      explanation:
        "Explanation\n To surface important values based on the stage of the opportunity, the administrator should use path key fields that display fields relevant to each stage along with guidance for success. Path key fields can be customized for each stage and can help users focus on key information and actions as they move opportunities through the sales process. Dynamic forms, opportunity processes, and workflow rules are not designed to show values based on stages. References: https://help.salesforce.com/s/articleView?id=sf.path_key_fields.htm&type=5",
    },
    {
      content:
        "An administrator at AW Computing has been asked to help the Support team with report folders. They want a folder called Support Reports and two folders underneath called Helpdesk and R&D. The Support organization uses public groups for Support Agents, R&D, and Managers. Support agents should be able to run Helpdesk reports, but should not be able to view R&D reports. Support managers should be able to view and edit all reports.\nWhich two ways should these folders be shared?\nChoose 2 answers",
      options: [
        "A. Share the R&D folder with Support Managers with Edit Access.",
        "B. Share the Helpdesk folder with Support Agents with View access.",
        "C. Share the Support Reports folder with Support Managers with Edit Access.",
        "D. hare the Support Reports folder with Support Agents with View Access.",
      ],
      answer: "B,C",
      title: "Question 35",
      explanation:
        "Explanation\n To share report folders with different groups of users with different levels of access, an administrator can use folder sharing settings under setup. Folder sharing settings allow administrators to share report folders with public groups, roles, roles and subordinates, territories, or portal roles with view or edit access. In this case, the administrator can share the Helpdesk folder with Support Agents with view access so they can run Helpdesk reports but not edit them; and share the R&D folder with Support Managers with edit access so they can view and edit R&D reports. References:\n https://help.salesforce.com/s/articleView?id=sf.reports_builder_folders_sharing.htm&type=5",
    },
    {
      content:
        "An administrator at Cloud Kicks wants to deactivate a User who has left the company.\nWhat are two reasons that would prevent a user from being deactivated?\nChoose 2 answers",
      options: [
        "A. The use is part of a territory hierarchy.",
        "B. The User is in a Custom hierarchy field.",
        "C. The User is assigned in workflow email alert.",
        "D. The User is the highest role in the role hierarchy",
      ],
      answer: "A,C",
      title: "Question 36",
      explanation:
        "Explanation\n Two reasons that would prevent a user from being deactivated are that the user is part of a territory hierarchy or that the user is assigned in workflow email alert. A territory hierarchy is a structure that defines how territories are related to each other in Salesforce; if a user is part of a territory hierarchy, they cannot be deactivated until they are removed from all territories. A workflow email alert is an action that sends an email to one or more recipients when a workflow rule is triggered; if a user is assigned in workflow email alert, they cannot be deactivated until they are removed from all email alerts. The user being in a custom hierarchy field or being the highest role in role hierarchy are not reasons that would prevent deactivation; they may affect data visibility or record ownership after deactivation, but they do not block deactivation itself. References:\n https://help.salesforce.com/s/articleView?id=sf.users_deactivate_considerations.htm&type=5",
    },
    {
      content:
        "DreamHouse Realty regularly processes customer requests for warranty work and would like to offer customers a self-serve option to generate cases.\nWhich two solutions should an administrator use to meet this request?\nChoose 2 answers",
      options: [
        "A. Web-to-Case",
        "B. Case Escalation",
        "C. Case Queues",
        "D. Email-to-Case",
      ],
      answer: "A,D",
      title: "Question 37",
      explanation:
        "Explanation\n Web-to-Case and Email-to-Case are two solutions that allow customers to create cases from a web form or an email. Web-to-Case generates HTML code for a web form that you can place on your website. Email-to-Case converts incoming emails into cases.\n References: https://help.salesforce.com/s/articleView?id=sf.customizesupport_web_to_case.htm&type=5\n https://help.salesforce.com/s/articleView?id=sf.customizesupport_email_to_case.htm&type=5",
    },
    {
      content:
        "Customer service accesses articles with the Knowledge Lightning component on the Service Cloud Console.\nBilling department users would like similar functionality on the case record without using the console.\nHow should the administrator configure this request?",
      options: [
        "A. Add the knowledge component to the page layout.",
        "B. Add the Knowledge component list to the page layout.",
        "C. Add the Knowledge related list to the page layout.",
        "D. Add the knowledge related list to the record page",
      ],
      answer: "C",
      title: "Question 38",
      explanation:
        "Explanation\n The Knowledge Lightning component is a component that allows users to access articles from the Service Cloud Console app. However, if users want to access articles from a different app that does not use the console, they can use the Knowledge related list instead. The Knowledge related list shows articles related to a record based on data categories and shows article details such as title, summary, rating, and view count. To add the Knowledge related list to a record page, an administrator can use the page layout editor and drag and drop the Knowledge related list to the appropriate section on the page layout. References:\n https://help.salesforce.com/s/articleView?id=sf.knowledge_lightning_component.htm&type=5\n https://help.salesforce.com/s/articleView?id=sf.knowledge_related_list.htm&type=5",
    },
    {
      content:
        "Which item is available in a Lightning App where visibility is limited to the Salesforce Mobile App?",
      options: ["A. Today", "B. Favorites", "C. Utility Bar.", "D. Home Page."],
      answer: "C",
      title: "Question 39",
      explanation:
        "Explanation\n Utility bar is a feature that is available in a Lightning app where visibility is limited to the Salesforce mobile app. Utility bar allows users to access common productivity tools, such as notes, history, recent items, and more, from any page in the app. References:\n https://help.salesforce.com/s/articleView?id=sf.app_builder_utility_bar.htm&type=5",
    },
    {
      content:
        "Sales reps at Cloud Kicks want to be notified when they have a high likelihood of winning an opportunity over $1,000,000.\nWhich feature meets this requirement?",
      options: [
        "A. Key Deals",
        "B. Big Deal Alerts",
        "C. Activity Timeline.",
        "D. Performance chart.",
      ],
      answer: "B",
      title: "Question 40",
      explanation:
        "Explanation\n Big Deal Alerts are notifications that are sent to users when an opportunity reaches a certain amount, probability, or stage. They can be configured by administrators to alert sales reps or managers when they have a high likelihood of winning a big deal. Key Deals are a feature of Einstein Opportunity Scoring that shows the top opportunities based on their score and stage, but they do not send notifications. Activity Timeline is a component of Lightning Experience that shows the past and upcoming activities related to a record, but it does not notify users of big deals. Performance chart is a type of report chart that shows how well users or teams are performing against their goals, but it does not alert users of big deals. References:\n https://help.salesforce.com/s/articleView?id=sf.forecasts3_big_deal.htm&type=5",
    },
    {
      content:
        "The Administrator at Cloud Kicks need to automatically route support cases, regardless of how they are created, to a queue based on case priority.\nWhat tool should the administrator use?",
      options: [
        "A. Email-to-Case",
        "B. Assignment Rules",
        "C. Auto-Response Rules",
        "D. Web-to-case",
      ],
      answer: "B",
      title: "Question 41",
      explanation:
        "Explanation\n Assignment rules are tools that allow administrators to automatically route records to users or queues based on certain criteria. For example, an assignment rule can assign cases to different queues based on case priority, origin, type, or other fields. Assignment rules can be triggered when records are created manually, via email, web, or API. Assignment rules consist of multiple rule entries that define the criteria and actions for each assignment scenario. References:\n https://help.salesforce.com/s/articleView?id=sf.customize_leadrules.htm&type=5\n https://help.salesforce.com/s/articleView?id=sf.customize_casesupport_assign.htm&type=5",
    },
    {
      content:
        "Executives at Cloud Kicks have reported that their dashboards are showing inaccurate data. The administrator has discovered been changing the source reports.\nWhich two actions should the administrator take to preserve the integrity of the source reports?\nChoose 2 answers",
      options: [
        "A. Create a new report folder with viewer access.",
        "B. Move the dashboard to the user's private folder.",
        "C. Move the dashboard reports to the view-only folder.",
        "D. Change the dashboard to be a dynamic dashboard",
      ],
      answer: "A,C",
      title: "Question 42",
      explanation:
        "Explanation\n Report folders are used to organize and secure reports in Salesforce. You can set different levels of access for different users or groups on each report folder. To preserve the integrity of the source reports for dashboards, you can create a new report folder with viewer access only and move the dashboard reports to that folder. This way, users can view the reports but not edit them. References:\n https://help.salesforce.com/s/articleView?id=sf.reports_folders.htm&type=5\n https://help.salesforce.com/s/articleView?id=sf.reports_dashboard_folder_access.htm&type=5",
    },
    {
      content:
        "Northern Trail Outfitters wants to encourage employees to choose secure and appropriate passwords for their Salesforce accounts.\nWhich three password policies should an administrator configure?\nChoose 3 answers",
      options: [
        "A. Maximum invalid login attempts",
        "B. Prohibited password values",
        "C. Require use of Password Manager App",
        "D. Password complexity requirements",
        "E. Number of days until expiration",
      ],
      answer: "A,D,E",
      title: "Question 43",
      explanation:
        "Explanation\n Maximum invalid login attempts, password complexity requirements, and number of days until expiration are three password policies that an administrator can configure to encourage employees to choose secure and appropriate passwords for their Salesforce accounts. Maximum invalid login attempts determines how many times a user can enter an incorrect password before being locked out of Salesforce. Password complexity requirements determine how complex a user's password must be based on criteria such as length, case sensitivity, alphanumeric characters, etc. Number of days until expiration determines how often users must change their passwords. References:\n https://help.salesforce.com/s/articleView?id=sf.security_password_policies.htm&type=5",
    },
    {
      content:
        "AW Computing has added a new custom text field called Market Segment on the Lead object. When a Lead is converted, the new field is not getting copied to the Account record.\nWhat should the administrator do to ensure the Market Segment field from a Lead is copied to the converted Account record in routine?",
      options: [
        "A. Ensure the Market Segment field on the Lead is mapped to right field on Account.",
        "B. Ensure Account has a field that has the exact same name as the new Lead field.",
        "C. Write a Validation Rule to ensure the Account has a value in that field.",
        "D. Write a record-triggered flow to copy the custom field from Lead to Account.",
      ],
      answer: "A",
      title: "Question 44",
      explanation:
        "Explanation\n To ensure Market Segment field from Lead is copied to converted Account record in routine manner without manual intervention , an administrator should ensure Market Segment field on Lead is mapped to right field on Account using Lead Field Mapping tool under Lead Settings. This tool allows mapping custom fields from Lead object to custom fields on Account , Contact , or Opportunity objects so that data is transferred when leads are converted . For example , an administrator can map Market Segment field on Lead to Market Segment field on Account using this tool . Ensuring Account has a field that has same name as new Lead field\n , writing validation rule , or writing record-triggered flow are not necessary for copying custom fields from Lead to Account . References : https :// help . salesforce . com / s / articleView ? id = sf .\n leads_custom_field_mapping . htm & type = 5",
    },
    {
      content:
        "Cloud Kicks need to be able to show different picklist values for sales and marketing users.\nWhich two options will meet this requirement?\nChoose 2 answers",
      options: [
        "A. One page layout, two record types, one picklist",
        "B. Two page layouts, one record type, two picklists",
        "C. Two permission sets, one record type, one picklist",
        "D. One record type, two profiles, one picklist",
      ],
      answer: "A,D",
      title: "Question 45",
      explanation:
        "Explanation\n To show different picklist values for sales and marketing users, you can either use record types or profiles.\n Record types allow you to have different picklist values for different page layouts assigned to different profiles. Profiles allow you to restrict picklist values based on user permissions.\n References: https://help.salesforce.com/s/articleView?id=sf.customize_recordtype.htm&type=5\n https://help.salesforce.com/s/articleView?id=sf.admin_profile_picklists.htm&type=5",
    },
    {
      content:
        "An administrator gets a rush request from Human Resources to remove a user's access to Salesforce Immediately. The user is part of a hierarchy field called Direct Manager.\nWhat should the administrator do to fulfil the request?",
      options: [
        "A. Freeze the user to prevent them from logging in while removing them from being referenced in the Direct Manager field.",
        "B. Deactivate the user and delete any records where they are referenced in the Direct Manager field.",
        "C. Change the user's profile to read-only while removing them from being referenced in the Direct Manager Field.",
        "D. Delete the user and leave all records where they referenced in the Direct Manager Field without changes.",
      ],
      answer: "A",
      title: "Question 46",
      explanation:
        "Explanation\n Freezing a user is a way to temporarily prevent them from logging in to Salesforce without deactivating their user record. This is useful when you need to perform some cleanup tasks before deactivating a user, such as removing them from being referenced in a hierarchy field like Direct Manager. References:\n https://help.salesforce.com/s/articleView?id=sf.users_freeze.htm&type=5",
    },
    {
      content:
        "Cloud Kicks has asked the administrator to test a new screen flow that create contacts.\nWhat are two key components of testing the flow?\nChoose 2 answers",
      options: [
        "A. Set Up a flow interview to test the flow.",
        "B. Run the flow using it to create contacts.",
        "C. Use Debug to test the flow in Flow Builder.",
        "D. Test the flow in a sandbox.",
      ],
      answer: "B,C",
      title: "Question 47",
      explanation:
        "Explanation\n Running the flow using it to create contacts and using debug to test the flow in Flow Builder are two key components of testing a new screen flow that creates contacts. Running the flow allows the administrator to see how the flow behaves in real time and check for any errors or unexpected results. Debugging the flow allows the administrator to simulate how the flow runs with different inputs and outputs and check for any logic or syntax errors. Setting up a flow interview or testing the flow in a sandbox are not necessary for testing a screen flow that creates contacts. References:\n https://help.salesforce.com/s/articleView?id=sf.flow_test.htm&type=5",
    },
    {
      content:
        "The administrator at Clod Kicks updated the custom object Event to include a lookup field to the primary contact for the event. When running an event report, They want to reference fields from the associated contact record.\nWhat should the administrator do to pull contact fields into the Custom report?",
      options: [
        "A. Configure formula fields on event to populate contact information",
        "B. Edit the custom Event report type and add fields related via lookup.",
        "C. Create a new report type with event as the primary object and Contact as a related object.",
        "D. Use a dashboard with filters to show Event and Contact data as requested.",
      ],
      answer: "B",
      title: "Question 48",
      explanation:
        "Explanation\n Report type is a tool that can be used to pull contact fields into the custom report for Event. Report type defines the set of records and fields available to a report based on the relationships between a primary object and its related objects. To edit the custom Event report type and add fields related via lookup, go to Setup > Report Types and select the Event report type. Then click Edit Layout and drag the fields from the Contact object to the layout. References:\n https://help.salesforce.com/s/articleView?id=sf.reports_builder_create_report_type.htm&type=5",
    },
    {
      content:
        "Ursa Major Solar has a path on Case. The Company wants to require its users to follow the status values as they are on the path. Agents should be prohibited from preventing the case back to a previous status.\nWhich Feature Should an administrator use to fulfill this request?",
      options: [
        "A. Validation rules.",
        "B. Global Value Picklists",
        "C. Predefined field Values.",
        "D. Dependent Picklists.",
      ],
      answer: "A",
      title: "Question 49",
      explanation:
        "Explanation\n Validation rules are a way to enforce data quality and business logic by preventing users from saving records that do not meet certain criteria. They can be used to require users to follow the status values as they are on the path and prevent them from reverting the case back to a previous status by using formulas that compare the old and new values of the status field. Global value picklists are a way to create and maintain picklist values that can be shared across multiple fields, but they do not enforce any logic or order on the values. Predefined field values are a way to set default values for fields on path settings, but they do not prevent users from changing them later. Dependent picklists are a way to filter the values of one picklist based on the value of another picklist, but they do not prevent users from going back to a previous value. References:\n https://help.salesforce.com/s/articleView?id=sf.validation_rules.htm&type=5",
    },
    {
      content:
        "The administrator for Cloud Kicks needs to give access to a new custom object with custom fields to more than one user.\nWhich two options should an administrator use to meet this requirement?\nChoose 2 answers",
      options: [
        "A. Add to manual sharing list",
        "B. Assign permission set group to Users",
        "C. Create a Permission Set",
        "D. Edit organization-wide defaults",
      ],
      answer: "B,C",
      title: "Question 50",
      explanation:
        "Explanation\n A permission set group is a collection of permission sets that can be assigned to users as one unit; it simplifies permission management by reducing the number of permission assignments needed for users who require multiple permission sets. A permission set is a collection of settings and permissions that give users access to various tools and functions in Salesforce; it can be used to extend users' access beyond their profile without changing their profile. Creating permission sets and assigning permission set groups can help Cloud Kicks give access to new custom object with custom fields to more than one user by creating permission sets that include access to new custom object with custom fields and assigning permission set groups that contain those permission sets to users who need them. Adding users to manual sharing list or editing organization-wide defaults are not options for giving access to new custom object with custom fields to more than one user; they either do not apply to custom objects or do not grant object-level access. References:\n https://help.salesforce.com/s/articleView?id=sf.perm_sets_overview.htm&type=5\n https://help.salesforce.com/s/articleView?id=sf.perm_set_groups_overview.htm&type=5",
    },
    {
      content:
        "An administrator at Northern Trail Outfitters is unable to add a new user in salesforce.\nWhat could cause this issue?",
      options: [
        "A. The Username is not a corporate email address",
        "B. The username is less than 80 characters.",
        "C. The Username is a fake email address.",
        "D. The Username is already in use.",
      ],
      answer: "D",
      title: "Question 51",
      explanation:
        "Explanation\n One of the possible reasons why an administrator is unable to add a new user in Salesforce is that the username is already in use by another user in any Salesforce org. Usernames must be globally unique across all Salesforce orgs, so the administrator needs to choose a different username for the new user. References:\n https://help.salesforce.com/s/articleView?id=sf.users_add.htm&type=5",
    },
    {
      content:
        "The VP of sales at Dreamhouse Realty has requested a dashboard to visualize enterprise sales across the different teams. The key place of data is the total of all sales for the year and the progress to the enterprise sales goal.\nWhat dashboard component will effectively show this number and the proximity to the total goal as a single value?",
      options: ["A. Table", "B. Stacked Bar", "C. Donut", "D. Gauge"],
      answer: "D",
      title: "Question 52",
      explanation:
        "Explanation\n A gauge component shows a single value along with its percentage of a total value within predefined ranges using colors (red-yellow-green). It is useful for showing key performance indicators (KPIs) such as total sales amount and progress towards sales goal. References:\n https://help.salesforce.com/s/articleView?id=sf.dashboards_gauge_component_type.htm&type=5",
    },
    {
      content:
        "The administrator at Cloud Kicks has created an approval process for time off requests.\nWhich two automated actions are available to be added as part of the approval process?\nChoose 2 answers",
      options: [
        "A. Field Update",
        "B. Chatter Post",
        "C. Auto launched Flow",
        "D. Email Alert",
      ],
      answer: "A,D",
      title: "Question 53",
      explanation:
        "Explanation\n Field update and email alert are two types of automated actions that can be added as part of the approval process. Field update allows you to change the value of a field on a record when it is submitted, approved, rejected, or recalled. Email alert allows you to send an email to one or more recipients when a record is submitted, approved, rejected, or recalled.\n References: https://help.salesforce.com/s/articleView?id=sf.approvals_automated_actions.htm&type=5\n https://help.salesforce.com/s/articleView?id=sf.approvals_creating_approval_actions.htm&type=5",
    },
    {
      content:
        "Ursa Major Solar wants to assist users with a guided expense report process to simplify submissions, routing, and authorizations.\nWhich two tools should an administrator use to build this solution?\nChoose 2 answers",
      options: [
        "A. Validation Rule",
        "B. Flow Builder",
        "C. Approval Process",
        "D. Quick Action",
      ],
      answer: "B,C",
      title: "Question 54",
      explanation:
        "Explanation\n Flow builder and approval process are two tools that can be used by Ursa Major Solar to assist users with a guided expense report process to simplify submissions, routing, and authorizations. Flow builder is a tool that allows administrators to create flows, which are guided processes that collect data and perform actions in Salesforce; it can be used to create a screen flow that guides users through the steps of submitting an expense report, such as entering expense details, uploading receipts, etc. Approval process is a tool that allows administrators to create approval processes, which are automated processes that require approval from one or more approvers; it can be used to create an approval process that routes expense reports to the appropriate managers for authorization based on certain criteria, such as amount, type, etc. Validation rule, quick action are not tools for building a guided expense report process; they are used for different purposes such as enforcing data quality or creating records. References:\n https://help.salesforce.com/s/articleView?id=sf.flow_builder.htm&type=5\n https://help.salesforce.com/s/articleView?id=sf.approvals_considerations.htm&type=5",
    },
    {
      content:
        "What should an administrator use as an identifier when importing and updating records from a separate system?",
      options: [
        "A. Rich Text field",
        "B. Record ID",
        "C. Auto-Number field",
        "D. External ID",
      ],
      answer: "D",
      title: "Question 55",
      explanation:
        "Explanation\n To use as an identifier when importing and updating records from a separate system, an administrator should use External ID field type on an object. External ID fields allow storing unique identifiers from external systems and using them for matching records during import or update operations. External ID fields can also be used for upsert operations that insert new records or update existing ones based on external ID values. For example, an administrator can create an External ID field on Account object that stores account numbers from an external ERP system and use it for importing or updating accounts from that system. Rich Text field, Record ID, and Auto-Number field are not suitable for using as identifiers when importing and updating records from a separate system. References:\n https://help.salesforce.com/s/articleView?id=sf.fields_about_field_types.htm&type=5\n https://help.salesforce.com/s/articleView?id=sf.data_loader_upsert.htm&type=5",
    },
    {
      content:
        "Ursa Major Solar uses Opportunity to track sales of solar energy products. The company has two separate sales teams that focus on different energy markets. The Services team also wants to use Opportunity to track installation. All three teams will need to use different fields and stages.\nHow Should the administrator configure this requirement?",
      options: [
        "A. Create three sales processes. Create three record types and one page layout.",
        "B. Create one sales process. Create three record types and three page layouts.",
        "C. Create three sales processes. Create three record types and three page layouts.",
        "D. Create one sales process. Create one record type and three page layouts.",
      ],
      answer: "C",
      title: "Question 56",
      explanation:
        "Explanation\n A sales process is a set of stages that an opportunity goes through as it moves from creation to close. A record type is a way to offer different business processes, picklist values, and page layouts to different users based on their profiles. A page layout controls the layout and organization of detail and edit pages for a specific object and record type combination. To meet the requirement of having different fields and stages for each team, you need to create three sales processes for each market segment, three record types for each sales process, and three page layouts for each record type. References:\n https://help.salesforce.com/s/articleView?id=sf.customize_salesprocess.htm&type=5\n https://help.salesforce.com/s/articleView?id=sf.customize_recordtype.htm&type=5\n https://help.salesforce.com/s/articleView?id=sf.customize_layout.htm&type=5",
    },
    {
      content:
        "The Call centre manager in Ursa Major Solar wants to provide agents with a case dashboard that can be drilled down by case origin, status and owner.\nWhat should an Administrator add to the dashboard to fulfil the request?",
      options: [
        "A. Dashboard Filter",
        "B. Bucket column",
        "C. Dashboard component",
        "D. Combination Chart",
      ],
      answer: "A",
      title: "Question 57",
      explanation:
        "Explanation\n A dashboard filter is a feature that allows users to filter dashboard components by one or more field values without changing the underlying report data. For example, a dashboard filter can allow users to view cases by origin, status, or owner. A dashboard filter consists of a filter name, one or more source fields, and one or more filter values. Users can apply one or more filters to see different views of the dashboard data.\n References: https://help.salesforce.com/s/articleView?id=sf.dashboards_filters.htm&type=5",
    },
    {
      content:
        "The administrator at Ursa Major Solar has Created a new record type for customer warranty cases which two assignments should the administrator use to display the new record type to users?\nChoose 2 answers",
      options: [
        "A. Profile Assignment",
        "B. Role Assignment",
        "C. App Manager Assignment.",
        "D. Page layout Assignment.",
      ],
      answer: "A,D",
      title: "Question 58",
      explanation:
        "Explanation\n Profile assignment and page layout assignment are two assignments that should be used to display a new record type to users. Profile assignment determines which profiles can access a record type and which record type is the default for each profile. Page layout assignment determines which page layout is assigned to each record type and profile combination. References:\n https://help.salesforce.com/s/articleView?id=sf.customize_recordtype_assign.htm&type=5\n https://help.salesforce.com/s/articleView?id=sf.customize_recordtype_pagelayoutassign.htm&type=5",
    },
    {
      content:
        "At cloud kicks sales reps use discounts on the opportunity record to help win sales on products. When an opportunity is won, they then have to manually apply the discount up the related opportunity products. The sales manager has asked if three is a way to automate this time consuming task.\nWhat should the administrator use to deliver this requirement?",
      options: [
        "A. Flow Builder",
        "B. Approval Process",
        "C. Prebuild Macro.",
        "D. Formula field",
      ],
      answer: "A",
      title: "Question 59",
      explanation:
        'Explanation\n To automate applying discounts on opportunity products when an opportunity is won, the administrator should use Flow Builder, which is a tool that allows creating complex business processes with clicks. The administrator can create an autolaunched flow that runs when an opportunity is updated, checks if its stage is\n "Closed Won", and updates its related opportunity products with discounts from a formula or variable.\n Approval Process, Prebuilt Macro, and Formula Field are not able to update related records based on criteria.\n References: https://help.salesforce.com/s/articleView?id=sf.flow_build_overview.htm&type=5',
    },
    {
      content:
        "What are two considerations an administrator should keep in mind when working with Salesforce objects?\nChoose 2 answers",
      options: [
        "A. Custom and standard objects have standard fields.",
        "B. Standard objects are included with Salesforce.",
        "C. A new standard object can be created.",
        "D. Only standard objects support master-detail relationships.",
      ],
      answer: "B,C",
      title: "Question 60",
      explanation:
        "Explanation\n Standard objects are objects that are included with Salesforce by default, such as Account, Contact, Lead, Opportunity, etc. They have predefined fields and functionality that support common business processes.\n Custom objects are objects that you create to store information that is specific to your organization or industry.\n You can create new standard objects using the Object Manager in Setup. References:\n https://trailhead.salesforce.com/en/content/learn/modules/data_modeling/standard_and_custom_objects",
    },
    {
      content:
        "Universal Containers is trying to improve the user experience when searching for the tight status on a case.\nThe company currently has one support process that is used for all record types on cases. The support process has 10 status values. Service reps say they never need more than five depending on what kind of case they are working on.\nHow should the administrator improve on the current implementation?",
      options: [
        "A. Reduce the number of case status values to five.",
        "B. Create a Screen Flow that shows only the correct values for status and surface the flow in the utility bar of the console.",
        "C. Review which status choices are needed for each record type and create support processes for each that is necessary.",
        "D. Edit the status choices directly on the record type.",
      ],
      answer: "C",
      title: "Question 61",
      explanation:
        "Explanation\n Support processes allow you to define different status values for different record types on cases.\n References: https://help.salesforce.com/s/articleView?id=sf.customize_support_process.htm&type=5",
    },
    {
      content:
        "Northern Trail Outfitters has a new flow that automatically sets the field values when a new account is created. That the flow is launched by a process, But the flow is not working properly.\nWhat should administrator do to identify the problem?",
      options: [
        "A. Use the native debug feature in the flow builder.",
        "B. Review debug logs with the login level.",
        "C. View the setup audit Trail and review for errors.",
        "D. Setup Email logs and review the send error log.",
      ],
      answer: "A",
      title: "Question 62",
      explanation:
        "Explanation\n Native debug feature is a tool that can be used to identify the problem with the new flow. Native debug feature allows users to test a flow by running it with different input values and inspecting the output values at each element. Users can also see error messages and warnings that indicate where the flow failed or might fail.\n References: https://help.salesforce.com/s/articleView?id=sf.flow_debug.htm&type=5",
    },
    {
      content:
        "An administrator at Universal Container needs an automated way to delete records based on field values.\nWhat automated solution should the administrator use?",
      options: [
        "A. Workflow",
        "B. Process Builder",
        "C. Flow Builder",
        "D. Automation Studio",
      ],
      answer: "C",
      title: "Question 63",
      explanation:
        "Explanation\n Flow Builder is a tool that can be used to create an automated way to delete records based on field values.\n Flow Builder can create flows that define the logic and actions for deleting records, such as finding records that match certain criteria and deleting them in bulk. Flows can be scheduled to run at regular intervals or triggered by other events or processes. References:\n https://help.salesforce.com/s/articleView?id=sf.flow_builder.htm&type=5\n https://help.salesforce.com/s/articleView?id=sf.flow_concepts_delete.htm&type=5",
    },
    {
      content:
        "The events manager at dream house realty has a hot lead from a successful open house that needs to become a contact with an associated opportunity.\nHow should this be accomplished from the campaign keeping the associated campaign member history?",
      options: [
        "A. Delete the lead and create a new contact and opportunity.",
        "B. Clone the lead and convert the cloned record to a contact.",
        "C. Convert the lead from the campaign member detail page.",
        "D. Add a contact from a campaign member detail page.",
      ],
      answer: "C",
      title: "Question 64",
      explanation:
        "Explanation\n To create a contact and an opportunity from a lead that is associated with a campaign, and keep the campaign member history, the administrator should convert the lead from the campaign member detail page. This will automatically create a contact, an account, and an opportunity that are linked to the campaign. Deleting, cloning, or adding a contact will not preserve the campaign member history. References:\n https://help.salesforce.com/s/articleView?id=sf.campaigns_leads.htm&type=5",
    },
    {
      content:
        "An administrator at Universal Containers needs a simple way to trigger an alert to the director of sales when opportunities reach an amount of $500,000.\nWhat should the administrator configure to meet this requirement?",
      options: [
        "A. Set up Big Deal Alerts for the amount.",
        "B. Enable Opportunity Update Reminders",
        "C. Opportunity warning in Kanban View.",
        "D. Key Deals component on the homepage",
      ],
      answer: "A",
      title: "Question 65",
      explanation:
        "Explanation\n Big Deal Alerts allow you to notify users when an opportunity reaches a certain amount or probability.\n References: https://help.salesforce.com/s/articleView?id=sf.forecasts3_big_deal_alerts.htm&type=5",
    },
    {
      content:
        "Clod Kicks has the organization wide defaults for Opportunity set to private.\nwhich two features should the administrator use to open up access to Opportunity records for sales users working on collaborative deals?\nChoose 2 answers",
      options: [
        "A. Sharing set",
        "B. Role hierarchy",
        "C. Profiles",
        "D. Sharing rules",
      ],
      answer: "B,D",
      title: "Question 66",
      explanation:
        "Explanation\n Role hierarchy and sharing rules are two features that should be used to open up access to Opportunity records for sales users working on collaborative deals. Role hierarchy can be used to grant access to records owned by or shared with users who are below them in the hierarchy. Sharing rules can be used to extend sharing access to users in public groups, roles, or territories based on certain criteria, such as record owner or field value.\n References: https://help.salesforce.com/s/articleView?id=sf.admin_sharing.htm&type=5\n https://help.salesforce.com/s/articleView?id=sf.security_sharing_rules.htm&type=5",
    },
    {
      content:
        "An administrator supporting a global team of salesforce users has been asked to configure company settings.\nChoose 2 options",
      options: [
        "A. Currency Locale",
        "B. Default Language",
        "C. Password Policy",
        "D. Login Hours",
      ],
      answer: "A,B",
      title: "Question 67",
      explanation:
        "Explanation\n Currency locale and default language are two of the company settings that an administrator can configure in Salesforce. Currency locale determines how currency amounts are formatted and displayed in reports and other places. Default language determines the language used for labels, buttons, tabs, and other elements in Salesforce. References:\n https://help.salesforce.com/s/articleView?id=sf.admin_supported_currencies.htm&type=5\n https://help.salesforce.com/s/articleView?id=sf.admin_supported_languages.htm&type=5",
    },
    {
      content:
        "What should an administrator use as an identifier when importing and updating records from a separate financial system?",
      options: [
        "A. Auto-Number field?",
        "B. External ID",
        "C. Rich text field",
        "D. Record ID",
      ],
      answer: "B",
      title: "Question 68",
      explanation:
        "Explanation\n An external ID is a custom field that has the external ID attribute enabled, which means it can be used as an identifier when importing and updating records from an external system. It allows administrators to match records based on a unique ID value from another system instead of using Salesforce record IDs, which may not be available or consistent across systems. An auto-number field is a custom field that automatically assigns a unique numeric value to each record, but it cannot be used as an identifier when importing and updating records from an external system because it is generated by Salesforce and may not match with the external system's IDs. A rich text field is a custom field that allows users to enter formatted text, images, and links, but it cannot be used as an identifier when importing and updating records from an external system because it is not unique or consistent across systems. A record ID is an internal ID assigned by Salesforce to each record, but it cannot be used as an identifier when importing and updating records from an external system because it may not be available or consistent across systems. References:\n https://help.salesforce.com/s/articleView?id=sf.custom_field_attributes.htm&type=5",
    },
    {
      content:
        "The administrator has created new users for ten new employees at Northern Trail Outfitters.\nWhy are these users unable to access the account object in the Salesforce or?",
      options: [
        "A. Users' profile requires a sharing rule for Accounts.",
        "B. Users' profile requires permission to the Account object.",
        "C. Users' roles are low on the role hierarchy.",
        "D. Organization-wide defaults are set to private.",
      ],
      answer: "B",
      title: "Question 69",
      explanation:
        "Explanation\n To access the account object in Salesforce, users need to have permission to the account object on their profile or permission set. Permission to an object determines what users can do with records of that object, such as create, read, edit, delete, view all, or modify all. If users do not have permission to an object, they will not be able to see or access that object in Salesforce. References:\n https://help.salesforce.com/s/articleView?id=sf.users_profiles_permissions.htm&type=5",
    },
    {
      content:
        "Cloud kicks has the organization-wide sharing default set to private on the shoe object. The sales manager should be able to view a report containing shoe records for all of the sales reps on their team.\nWhich 3 items should the administrator configure to provide appropriate access to the report?\nChoose 3 answers",
      options: [
        "A. Custom report type.",
        "B. Folder access",
        "C. Report subscription",
        "D. Field level security",
      ],
      answer: "A,B,D",
      title: "Question 70",
      explanation:
        "Explanation\n To provide appropriate access to a report that contains shoe records for all of the sales reps on their team, the administrator should configure three items:\n A custom report type that includes the shoe object and its fields\n A folder access that grants access to the sales manager and their team members to view and run reports in that folder A field level security that allows the sales manager and their team members to see all the fields on the shoe object Report subscription, while useful for scheduling and delivering reports, does not affect access to the report itself. References:\n https://help.salesforce.com/s/articleView?id=sf.reports_builder_create_report_type.htm&type=5\n https://help.salesforce.com/s/articleView?id=sf.reports_manage_folders.htm&type=5\n https://help.salesforce.com/s/articleView?id=sf.admin_fls.htm&type=5",
    },
    {
      content:
        "A Sales user is trying to manage Campaign Members for an upcoming networking event. The user can view the Campaign, but add new Campaign Members or update Member statuses.\nHow can an administrator troubleshoot this problem?",
      options: [
        "A. Create a permission set to allow the user to edit Campaign Members.",
        "B. Provide the user access to both Leads and Contacts to edit all Members.",
        "C. Make sure the Marketing User Checkbox is checked on the user record page.",
        "D. Run a Campaign report and update any Member information via Data Loader.",
      ],
      answer: "C",
      title: "Question 71",
      explanation:
        "Explanation\n To allow a user to add new Campaign Members or update Member statuses, the administrator should make sure that Marketing User Checkbox is checked on the user record page. This checkbox enables users to create, edit, and delete campaigns, configure advanced campaign setup, import leads, manage campaign members, and update campaign history via mass update. The checkbox also requires users to have Read and Edit permissions on campaigns and leads/contacts. Creating a permission set, providing access to both Leads and Contacts, or running a Campaign report will not enable users to manage Campaign Members. References:\n https://help.salesforce.com/s/articleView?id=sf.campaigns_enable.htm&type=5",
    },
    {
      content:
        "Users at Cloud Kicks are reporting different options when uploading a custom picklist on the Opportunity object based on the kind of opportunity.\nWhere Should an administrator update the option in the picklist?",
      options: [
        "A. Fields and relationships",
        "B. Related lookup filters",
        "C. Record Type",
        "D. Picklist value sets",
      ],
      answer: "C",
      title: "Question 72",
      explanation:
        "Explanation\n Record types allow you to update the options in a picklist based on the kind of opportunity.\n References: https://help.salesforce.com/s/articleView?id=sf.customize_recordtype.htm&type=5",
    },
    {
      content:
        "Northern Trail Outfitters has two different sales processes: one for business opportunities with four stages and one for partner opportunities with eight stages. Both processes will vary in page layouts and picklist value options.\nWhat should an administrator configure to meet these requirements?",
      options: [
        "A. Validation rules that ensure that users are entering accurate sales stage information.",
        "B. Different page layouts that control the picklist values for the opportunity types.",
        "C. Public groups to limit record types and sales processes for opportunities.",
        "D. Separate record types and Sales processes for the different types of opportunities.",
      ],
      answer: "D",
      title: "Question 73",
      explanation:
        "Explanation\n Record types and sales processes allow you to have different page layouts, fields, required fields, and picklist values for different types of opportunities.\n References: https://www.salesforceben.com/salesforce-record-types/\n https://trailhead.salesforce.com/content/learn/projects/create-an-opportunity-record-type-for-npsp/create-and-ma",
    },
    {
      content:
        "The administrator at AW Computing wants to send off client welcome tasks and a welcome email to the primary contact automatically when an Opportunity is Closed won.\nWhat automation tool best accomplishes this?",
      options: [
        "A. Validation Rule",
        "B. Outbound Message",
        "C. Approval Process",
        "D. Process Builder",
      ],
      answer: "D",
      title: "Question 74",
      explanation:
        "Explanation\n Process Builder is a tool that can be used to automate business processes by creating record-triggered flows that execute actions when certain conditions are met. In this case, Process Builder can be used to create a flow that executes when an opportunity is closed won and creates a client welcome task and a welcome email for the primary contact. References:\n https://help.salesforce.com/s/articleView?id=sf.process_which_tool.htm&type=5",
    },
    {
      content:
        "Cloud Kicks has decided to delete a custom field.\nWhat will happen to the data in the field when it is deleted?",
      options: [
        "A. The data in the field is stored for 20 days.",
        "B. The data is permanently deleted.",
        "C. The data associated with the field is required.",
        "D. The data is restorable from the recycle bin.",
      ],
      answer: "A",
      title: "Question 75",
      explanation:
        "Explanation\n When you delete a custom field, the data in that field is stored for 20 days before it is permanently deleted.\n During this time, you can restore the field and its data from the Recycle Bin or use Data Loader to export the data. References: https://help.salesforce.com/s/articleView?id=sf.customize_del_field.htm&type=5",
    },
    {
      content:
        "The Cloud kicks sales manager wants to boost productivity by providing insights at the start of each day.\nWhich three sales-specific standard Lightning components should administrator add to the homepage to meet this requirement?\nChoose 3 Answers.",
      options: [
        "A. Activities",
        "B. Path",
        "C. Assistant",
        "D. Key Deals",
        "E. Performance chart.",
      ],
      answer: "A,C,D",
      title: "Question 76",
      explanation:
        "Explanation\n To boost productivity by providing insights at the start of each day, the administrator should add three sales-specific standard Lightning components to the homepage:\n Activities, which shows tasks and events related to records that matter most to users Assistant, which provides personalized suggestions and reminders for key updates and actions Key Deals, which highlights important opportunities that need attention or are close to closing Path and Performance Chart are not standard Lightning components, but custom components that can be added to specific objects or pages. References:\n https://help.salesforce.com/s/articleView?id=sf.home_components.htm&type=5",
    },
    {
      content:
        "Ursa Major Solar has service level agreements (SLA) that are routed to support queues. Cases that meet the 24 hour SLA need to be automatically re-assigned to the next tier queue.\nWhich feature should be used to fulfill this requirement?",
      options: [
        "A. Einstein Case Routing",
        "B. Auto-response rule",
        "C. Case assignment rule",
        "D. Case escalation rule",
      ],
      answer: "D",
      title: "Question 77",
      explanation:
        "Explanation\n To re-assign cases that meet the 24 hour SLA to the next tier queue, the administrator should use a case escalation rule that defines the criteria for escalating cases, such as age or priority, and the actions to perform when those criteria are met, such as changing owner or sending email alerts. Case escalation rules can help ensure that cases are handled in a timely manner and escalated to appropriate users or queues. Einstein Case Routing, Auto-response rule, and Case assignment rule are not able to re-assign cases based on SLA or age.\n References: https://help.salesforce.com/s/articleView?id=sf.case_escalation.htm&type=5",
    },
    {
      content:
        "Cloud kicks wants to track shoe designs by products. Shoe designs should be unable to be deleted, and there can be multiple design for one product across various stages.\nWhich two steps should the administration configure to meet this requirement?\nChoose 2 answers",
      options: [
        "A. Create a Custom Object for shoe design.",
        "B. Configure a Custom Lookup Field for shoe design on the product object.",
        "C. Add a custom master detail field for shoe design on the Product Object.",
        "D. Use the Standard Object for designs.",
      ],
      answer: "A,C",
      title: "Question 78",
      explanation:
        "Explanation\n Custom object and master detail field are two steps that should be configured to meet this requirement.\n Custom object can be used to create a new object for shoe design that can store information about different designs and stages. Master detail field can be used to create a relationship between Product and Shoe Design that prevents deletion of Shoe Design records and allows multiple designs for one product. References:\n https://help.salesforce.com/s/articleView?id=sf.customize_customobjects.htm&type=5\n https://help.salesforce.com/s/articleView?id=sf.relationships_considerations.htm&type=5",
    },
    {
      content:
        "The administrator at Universal Container has created two objects: Containers_c Purchase_c, Management has requested that all container records display on purchase records in Salesforce.\nWhich type of relationship between Containers_c and Purchase_c should satisfy the requirement?",
      options: [
        "A. Roll-Up Summary field",
        "B. Formula field",
        "C. Master-detail field",
        "D. Lookup field",
      ],
      answer: "D",
      title: "Question 79",
      explanation:
        "Explanation\n A lookup field is a type of field that allows administrators to create a relationship between two objects by linking records from one object to another object. For example, a lookup field can link an account record to a purchase record by storing the account ID on the purchase record. A lookup field allows users to select an existing record from a pop-up window or create a new record from the same window. References:\n https://help.salesforce.com/s/articleView?id=sf.relationships_lookup.htm&type=5",
    },
    {
      content:
        "Universal Containers requires a different Lightning page to be displayed when Accounts are viewed in the Sales Console and in the Service Console.\nHow should an administrator meet this requirement?",
      options: [
        "A. Update page layout assignments.",
        "B. Define multiple record types.",
        "C. Assign Lightning pages as app default.",
        "D. Create different user profiles.",
      ],
      answer: "C",
      title: "Question 80",
      explanation:
        "Explanation\n Lightning pages are custom layouts that let you design pages for your Salesforce org using Lightning App Builder. You can assign different Lightning pages for different apps, record types, and profiles using Lightning page assignments. To meet the requirement of displaying different Lightning pages for Accounts in Sales Console and Service Console, you need to assign Lightning pages as app default for each app.\n References: https://help.salesforce.com/s/articleView?id=sf.lightning_page_overview.htm&type=5\n https://help.salesforce.com/s/articleView?id=sf.lightning_page_assignments.htm&type=5",
    },
    {
      content:
        "A sales rep has left the company and an administrator has been asked to re-assign all their accounts and opportunities to a new sales rep and keep the teams as is.\nWhich tool should an administrator use to accomplish this?",
      options: [
        "A. Data Loader",
        "B. Mass Transfer Tool",
        "C. Data Import Wizard",
        "D. Dataloader.io",
      ],
      answer: "B",
      title: "Question 81",
      explanation:
        "Explanation\n The mass transfer tool allows you to transfer up to 250 records at a time from one user to another user while keeping the existing team members intact. You can access this tool from Setup by entering Mass Transfer Records in the Quick Find box. References:\n https://help.salesforce.com/s/articleView?id=sf.mass_transfer_overview.htm&type=5",
    },
    {
      content:
        "Cloud Kicks wants to try out an app from the AppExchange to ensure that the app meets its needs.\nWhich two options should the administrator suggest?\nChoose two answers",
      options: [
        "A. Test Drive in a production org.",
        "B. Download into a Trailhead Playground.",
        "C. Install in a sandbox.",
        "D. Check edition compatibility.",
      ],
      answer: "B,C",
      title: "Question 82",
      explanation:
        "Explanation\n A Trailhead Playground is a free, online learning environment that allows you to try out Salesforce features and apps. You can use a Trailhead Playground to test out an app from the AppExchange before you install it in your production org.\n A sandbox is a copy of your production org that you can use to test changes and new features. You can install an app from the AppExchange in a sandbox to see how it works in your environment.\n Testing an app in a production org is not recommended, as it could affect your live data. Checking edition compatibility is important, but it is not a way to try out an app.",
    },
    {
      content:
        "Northern Trail Outfitters wants emails received from customers to generate cases automatically.\nHow should the administrator ensure that the emails are sent to the correct queue?",
      options: [
        "A. Utilize a flow to identify the correct queue and assign the case.",
        "B. Use a custom email services to set the owner of the case upon creation.",
        "C. Create an Escalation Rules to send cases to the correct queue.",
        "D. Configure Email-to-Case so emails are delivered to the correct queue",
      ],
      answer: "D",
      title: "Question 83",
      explanation:
        "Explanation\n Email-to-Case allows administrators to set up routing addresses that automatically create cases from incoming emails and assign them to queues based on predefined criteria. This way, emails from customers can generate cases automatically and be sent to the correct queue. A flow is a tool for building automated processes, but it is not designed for email routing. A custom email service is a way to process inbound emails using Apex code, but it requires coding skills and is more complex than Email-to-Case. An escalation rule is a way to escalate cases based on certain conditions, but it does not create cases from emails or assign them to queues.\n References: https://help.salesforce.com/s/articleView?id=sf.customize_email2case.htm&type=5",
    },
    {
      content:
        "Cloud kicks intends to protect with backups by using the data by using the data export Service.\nWhich two considerations should the administrator remember when Scheduling the export?\nChoose 2 Answers.",
      options: [
        "A. Metadata Backups are limited a sandbox refresh intervals.",
        "B. Data Backups are limited to weekly or monthly intervals.",
        "C. Data export service should be run from a sandbox.",
        "D. Metadata backups must be run via a separate process.",
      ],
      answer: "B,D",
      title: "Question 84",
      explanation:
        "Explanation\n To protect data with backups by using Data Export Service, two considerations that the administrator should remember when scheduling export are:\n Data Backups are limited to weekly or monthly intervals depending on edition and license type Metadata backups must be run via a separate process such as Metadata API or change sets because Data Export Service only exports data (records) Metadata backups are not limited by sandbox refresh intervals. Data Export Service should be run from production orgs unless testing purposes require otherwise. References: https://help.salesforce.com/s/articleView?id=sf.data_export.htm&type=5",
    },
    {
      content:
        "Cloud Kicks has a team of product owners that need a space to share feedback and ideas with just the product team.\nHow should the administrator leverage Salesforce to help the team collaborate?",
      options: [
        "A. Use Quick Actions to log communication.",
        "B. Configure a Chatter Public Group.",
        "C. Create a Chatter Private Group.",
        "D. Add Activity History to document tasks.",
      ],
      answer: "C",
      title: "Question 85",
      explanation:
        "Explanation\n A Chatter private group is a type of Chatter group that allows members to share feedback and ideas with each other in a secure and exclusive space; only members can see and post in a private group. It can be used by Ursa Major Solar to create a space for product owners to collaborate with just the product team by creating a Chatter private group and adding product owners as members. Using quick actions to log communication, configuring a Chatter public group, or adding activity history to document tasks are not solutions for creating a space for product owners to collaborate with just the product team; they either do not provide privacy or do not support collaboration. References:\n https://help.salesforce.com/s/articleView?id=sf.collab_groups_overview.htm&type=5",
    },
    {
      content:
        "The support manager at Cloud Kicks wants to respond to customers as quickly as possible. They have requested that the response include the top five troubleshooting tips that could help solve the customer's issue.\nWhat should the administrator suggest to meet these requirement?",
      options: [
        "A. Auto-Response Rules",
        "B. Email Alerts",
        "C. Knowledge Articles",
        "D. Assignment Rules",
      ],
      answer: "C",
      title: "Question 86",
      explanation:
        "Explanation\n Knowledge articles are documents that provide information or solutions about products, services, or processes in Salesforce. You can use knowledge articles to respond to customers quickly and consistently with accurate information. You can create different types of articles with different templates and fields, such as FAQ articles, troubleshooting articles, how-to articles, etc. To meet the requirement of responding to customers with the top five troubleshooting tips that could help solve their issue, you need to create knowledge articles with those tips and attach them to your email responses or case comments. References:\n https://help.salesforce.com/s/articleView?id=sf.knowledge_article_types.htm&type=5",
    },
    {
      content:
        "Ursa Major Solar wants to know which of its marketing efforts are helping the team win Opportunities.\nWhat should an administrator configure to provide these insights?",
      options: [
        "A. Campaign Hierarchy.",
        "B. Campaign Influence",
        "C. Map Custom Lead Fields",
        "D. List Email Activities",
      ],
      answer: "B",
      title: "Question 87",
      explanation:
        "Explanation\n Campaign influence is a feature that allows users to track how campaigns have influenced opportunities and measure the return on investment (ROI) of marketing efforts. Users can see which campaigns have influenced an opportunity on the related list and assign different attribution models to calculate the campaign influence.\n References: https://help.salesforce.com/s/articleView?id=sf.campaigns_influence.htm&type=5",
    },
    {
      content:
        "Cloud Kicks (CK) captures whether an opportunity should be reviewed by someone in product engineering with a checkbox field called Needs Review. CK also has a picklist field on the opportunity for Product Type.\nWhen a sales rep saves an opportunity, they need to select the Product Type or check the Needs Review box.\nWhat should an administrator use to accomplish this?",
      options: [
        "A. Before Save flow",
        "B. Validation rule",
        "C. Workflow rule",
        "D. Required fields",
      ],
      answer: "B",
      title: "Question 88",
      explanation:
        "Explanation\n A validation rule is a feature that allows administrators to define criteria for data entry or import operations and display an error message when those criteria are not met. For example, a validation rule can require users to select a product type or check a needs review box when saving an opportunity by using an OR function that evaluates both fields. If neither field is populated, then the validation rule will prevent users from saving records with an error message. References:\n https://help.salesforce.com/s/articleView?id=sf.fields_about_validation_rules.htm&type=5",
    },
    {
      content:
        "An administrator is planning to use Data Loader to mass import new records to a custom object from a new API.\nWhat will the administrator need to do to use the Data Loader?",
      options: [
        "A. Add a permission set that allows them to import data.",
        "B. Append their security token at the end of their password to login.",
        "C. Use the Data Import Tool to mass import custom object records.",
        "D. Reset their password and their security token.",
      ],
      answer: "B",
      title: "Question 89",
      explanation:
        "Explanation\n To use Data Loader to mass import new records to a custom object from a new API, the administrator will need to append their security token at the end of their password to login. The security token is an alphanumeric code that is required for API access when logging in from an IP address that is not trusted by Salesforce. The security token can be obtained from the user's personal settings or by resetting it via email. Adding a permission set, resetting the password and the security token, or using the Data Import Tool are not necessary for using Data Loader. References: https://help.salesforce.com/s/articleView?id=sf.data_loader.htm&type=5\n https://help.salesforce.com/s/articleView?id=sf.security_token.htm&type=5",
    },
    {
      content:
        "The sales team at Ursa Major Solar has asked the administrator to automate an outbound message.\nWhat should the administrator utilize to satisfy the request?",
      options: [
        "A. Process builder",
        "B. Task assignment",
        "C. Workflow rule",
        "D. Flow builder",
      ],
      answer: "C",
      title: "Question 90",
      explanation:
        "Explanation\n To automate an outbound message, the administrator should use a workflow rule that defines the criteria for sending the message and the actions to perform when those criteria are met. One of the actions available for workflow rules is sending an outbound message to a designated endpoint URL with specified fields as parameters. Process builder, task assignment, and flow builder are not able to send outbound messages directly. References: https://help.salesforce.com/s/articleView?id=sf.workflow_define.htm&type=5\n https://help.salesforce.com/s/articleView?id=sf.workflow_action_outboundmessaging.htm&type=5",
    },
    {
      content:
        "An administration needs to store the ID of record type of later use in a flow.\nWhich kind of variable should the administrator use?",
      options: [
        "A. Boolean variable",
        "B. Text variable",
        "C. ID variable",
        "D. Record variable",
      ],
      answer: "C",
      title: "Question 91",
      explanation:
        "Explanation\n An ID variable is a type of variable that can store an ID value of a record or a record type in a flow. It can be used to store the ID of a record type for later use in a flow, such as assigning it to a record or using it in a condition. A boolean variable is a type of variable that can store a true or false value in a flow. A text variable is a type of variable that can store a text value in a flow. A record variable is a type of variable that can store one or more field values of a record in a flow. References:\n https://help.salesforce.com/s/articleView?id=sf.flow_ref_elements_variables.htm&type=5",
    },
    {
      content:
        "The Human resources department at Northern Trail outfitters wants employees to provide feedback about the manager using a custom object in Salesforce. It is important that managers are unable to see the feedback records from their staff.\nHow should an administrator configure the custom object to meet this requirement?",
      options: [
        "A. Uncheck grant access using Hierarchies.",
        "B. Define a criteria-based sharing rules.",
        "C. Set the default external access to private.",
        "D. Configure an owner-based sharing rules.",
      ],
      answer: "A",
      title: "Question 92",
      explanation:
        "Explanation\n Grant access using Hierarchies is a setting that can be used to configure the custom object to meet this requirement. Grant access using Hierarchies determines whether access to records of the custom object is granted through the role hierarchy. If this setting is unchecked, managers are unable to see the feedback records from their staff, unless they are given access by other means, such as sharing rules or manual sharing.\n References:\n https://help.salesforce.com/s/articleView?id=sf.security_sharing_owd_custom_objects.htm&type=5",
    },
    {
      content:
        "Cloud Kicks (CK) needs a new sales application. The administrator there is an application package on the AppExchange and wants to begin testing it in a sandbox to see If it addresses CK's needs.\nWhat are two considerations when installing a managed package in a sandbox?\nChoose 2 answers.",
      options: [
        "A. Any metadata changes to the package have to be recreated in production.",
        "B. The installation link has to be modified to test.saiesiorcc.com.",
        "C. Install for Admins Only will be the only Install option available.",
        "D. The package will be removed any time the sandbox is refreshed.",
      ],
      answer: "B,D",
      title: "Question 93",
      explanation:
        "Explanation\n Two considerations when installing a managed package in a sandbox are:\n The installation link has to be modified to test.salesforce.com, because the default installation link points to login.salesforce.com which is for production orgs. To install a package in a sandbox org, the administrator has to replace login with test in the installation URL before clicking it.\n The package will be removed any time the sandbox is refreshed, because refreshing a sandbox replaces its current data and metadata with those from its source org. If the source org does not have the package installed, then the sandbox will lose it after refresh. Any metadata changes to the package do not have to be recreated in production, because they are preserved during upgrades unless overwritten by the package developer. Install for Admins Only is not the only install option available; there are also Install for All Users and Install for Specific Profiles options. References:\n https://help.salesforce.com/s/articleView?id=sf.distribution_installing_packages.htm&type=5\n https://help.salesforce.com/s/articleView?id=sf.data_sandbox_implementation_tips.htm&type=5",
    },
    {
      content:
        "The administrator at cloud kicks has been ask to change the company's Shoe style field to prevent users from selecting more than one style on a record.\nWhich two steps should an administrator do to accomplish this?\nChoose 2 answers",
      options: [
        "A. Reactivate the appropriate Shoe Style values after the field type changes.",
        'B. Select the "Choose only one value "checkbox on the pick list field.',
        "C. Back-up the Shoe Style values in existing records.",
        "D. Change the field type from a multi-select picklist field to a picklist field.",
      ],
      answer: "B,D",
      title: "Question 94",
      explanation:
        'Explanation\n To prevent users from selecting more than one value on a picklist field, the administrator needs to change the field type from a multi-select picklist to a regular picklist, and select the "Choose only one value" checkbox on the field definition page. This will ensure that only one value can be selected on the record page and in reports and filters. References: https://help.salesforce.com/s/articleView?id=sf.customize_picklists.htm&type=5',
    },
    {
      content:
        "Northern Trail Outfitters wants to calculate how much revenue has been generated for each of its marketing campaigns.\nHow should an administrator deliver this information?",
      options: [
        "A. Design a standard Campaign report and add the value Won Opportunities in Campaign field.",
        "B. Perform periodic data job to update campaign records.",
        "C. Create a roll-up summary field on Opportunity to Campaign.",
        "D. Add a Total Value Field on campaign and use a workflow rule to update the value when an opportunity is won.",
      ],
      answer: "C",
      title: "Question 95",
      explanation:
        "Explanation\n Roll-up summary fields allow you to calculate the sum of a field from child records related to a parent record.\n References:\n https://help.salesforce.com/s/articleView?id=sf.fields_about_roll_up_summary_fields.htm&type=5",
    },
    {
      content:
        "Dreamhouse Reality just announced its new home concierge offering. This product is unlike anything the company has offered in the past and follows a different business model.\nWhat Should the administrator Configure to meet this requirement?",
      options: [
        "A. Create a quick action.",
        "B. Create a new approval process.",
        "C. Create a new sales process.",
        "D. Create a new Opportunity product.",
      ],
      answer: "C",
      title: "Question 96",
      explanation:
        "Explanation\n A sales process is a set of stages that an opportunity goes through as it moves from creation to close. It can be customized by administrators to match different business models or product lines within an org. Creating a new sales process can help Dreamhouse Realty define a different set of stages for its new home concierge offering that is unlike anything the company has offered in the past and follows a different business model.\n Creating a quick action, a new approval process, or a new opportunity product are not solutions for creating a customized sales process; they are used for different purposes such as creating records, approving records, or adding products to opportunities. References:\n https://help.salesforce.com/s/articleView?id=sf.customize_salesprocess.htm&type=5",
    },
    {
      content:
        "Universal Containers requires that when an Opportunity is closed won, all other open opportunities on the same account must be marked as closed lost.\nWhich automation solution should an administrator use to implement this request?",
      options: [
        "A. Quick Action",
        "B. Workflow Rule",
        "C. Flow Builder",
        "D. Outbound Message",
      ],
      answer: "C",
      title: "Question 97",
      explanation:
        "Explanation\n Flow Builder allows you to create an automated business process that can update records based on certain criteria. You can use a scheduled flow to run once a week and count the number of open cases related to an account.\n References: https://help.salesforce.com/s/articleView?id=sf.flow_builder_overview.htm&type=5\n https://help.salesforce.com/s/articleView?id=sf.flow_concepts_scheduled_start.htm&type=5",
    },
    {
      content:
        "The IT manager at universal Containers is doing an audit of the systems security.\nMow should the administrator provide a summary of the org's security health?",
      options: [
        "A. Change the Organization-Wide Default to private to restrict visibility.",
        "B. Turn on Event Monitoring to track user events.",
        "C. Download the last six months of user login data.",
        "D. Run a Health Check to identify vulnerabilities.",
      ],
      answer: "D",
      title: "Question 98",
      explanation:
        "Explanation\n To provide a summary of org's security health, an administrator should run a Health Check that compares org's settings against baseline settings defined by Salesforce Security Baseline Standard or industry standards such as CIS (Center for Internet Security) Benchmark Standard. Health Check generates an overall health score based on how org's settings match with baseline settings for various security categories such as Password Policies, Network Access, Session Settings etc. Health Check also provides recommendations for improving org's security health score by adjusting settings that do not match with baseline settings. Changing Org-Wide Default to private, turning on Event Monitoring, or downloading user login data will not provide a summary of org's security health. References:\n https://help.salesforce.com/s/articleView?id=sf.security_health_check.htm&type=5",
    },
    {
      content:
        "DreamHouse reality has an approval process. A manager attempts to approve the record but receives an error.\nWhat should an administrator review to troubleshoot this request?",
      options: [
        "A. Add a delegated approver for the next approver in the process.",
        "B. Update the field level security to view on fields that are updated in the process.",
        "C. Check if the user in the next approver is inactive or missing",
        "D. Review the page layout to ensure, the fields updated in the process are visible",
      ],
      answer: "C",
      title: "Question 99",
      explanation:
        "Explanation\n One possible reason why a manager receives an error when trying to approve a record is that the user in the next approver step is inactive or missing, which means there is no valid user to assign the record to after approval. To troubleshoot this issue, an administrator should check if the user in the next approver step is active and exists in Salesforce; if not, they should activate or create the user or change the approval process to assign the record to another user. Adding a delegated approver for the next approver in the process does not solve this issue because delegated approvers are only used when approvers are unavailable; they do not replace approvers who are inactive or missing. Updating the field level security to view on fields that are updated in the process does not solve this issue because field level security does not affect approval processes; it only affects what fields users can see or edit on page layouts. Reviewing the page layout to ensure fields updated in the process are visible does not solve this issue because page layouts do not affect approval processes; they only affect what fields users can see or edit on page layouts. References:\n https://help.salesforce.com/s/articleView?id=sf.approvals_considerations.htm&type=5",
    },
    {
      content:
        "Cloud Kicks wants to allow customers to create their own cases while visiting its public homepage.\nWhat should the administrator recommend?",
      options: [
        "A. SMS Response",
        "B. Web-to-Case",
        "C. Email-to-Case",
        "D. Omni-Channel",
      ],
      answer: "B",
      title: "Question 100",
      explanation:
        "Explanation\n Web-to-Case allows you to create cases from a form on your website.\n References: https://help.salesforce.com/s/articleView?id=sf.customizesupport_web_to_case.htm&type=5",
    },
    {
      content:
        "Users at Dreamhouse Reality are only allowed to see opportunities they own. Leadership wants an enterprise- wide dashboard of all open opportunities in the pipeline so that users can see how the company is performing at any point in time.\nHow should an administrator create the dashboard without changing any sharing setting?",
      options: [
        "A. Update the dashboard to folder settings to manager for the sales reps role.",
        "B. Add a filter to the dashboard to filter the opportunities by owner role.",
        "C. Build individual dashboards for profiles that need to see the enterprise results.",
        "D. Create a dashboard with the running User set as someone who can see all Opportunities",
      ],
      answer: "D",
      title: "Question 101",
      explanation:
        "Explanation\n Creating a dashboard with the running user set as someone who can see all opportunities is a way to create an enterprise-wide dashboard of all open opportunities in the pipeline without changing any sharing settings. The running user determines what data is displayed on the dashboard based on their access level and permissions; if the running user can see all opportunities, then the dashboard will show all opportunities regardless of who views it. Updating the dashboard folder settings to manager for the sales reps role does not create an enterprise-wide dashboard; it only controls who can access the dashboard folder, not what data is displayed on the dashboard. Adding a filter to the dashboard to filter the opportunities by owner role does not create an enterprise-wide dashboard either; it only shows opportunities owned by users in certain roles, not all opportunities. Building individual dashboards for profiles that need to see the enterprise results is not a feasible solution; it would require creating multiple dashboards for different profiles and maintaining them separately, which is inefficient and redundant. References:\n https://help.salesforce.com/s/articleView?id=sf.dashboards_running_user.htm&type=5",
    },
    {
      content:
        "An administrator at Universal Containers has been asked to prevent users from accessing Salesforce from outside of their network.\nWhat are two considerations for this configuration?\nChoose 2 answers",
      options: [
        "A. IP address restrictions are set on the profile or globally for the org.",
        "B. Assign single sign-on to a permission set to allow users to log in when outside the network.",
        "C. Enforce Login IP Ranges on Every Request must be selected to enforce IP restrictions.",
        "D. Restrict U2F Security Keys on the user's profile to enforce login hours.",
      ],
      answer: "A,D",
      title: "Question 102",
      explanation:
        "Explanation\n Two considerations for preventing users from accessing Salesforce from outside of their network are:\n IP address restrictions are set on the profile or globally for the org, which limit login access based on IP ranges specified by an administrator Restrict U2F Security Keys on the user's profile to enforce login hours, which require users to use security keys during certain hours of day Assigning single sign-on to a permission set or enforcing Login IP Ranges on Every Request will not prevent users from accessing Salesforce from outside of their network. References:\n https://help.salesforce.com/s/articleView?id=sf.security_networkaccess.htm&type=5\n https://help.salesforce.com/s/articleView?id=sf.security_keys_restrict.htm&type=5",
    },
  ],
});
