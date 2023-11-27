window.testContent = window.testContent || [];
var testId = "SalesforceAdmin1";
var testName = "SalesforceAdmin1.ADM-201";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "SalesforceAdmin1.ADM-201.v2023-10-02.q113",
  content: [
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
      title: "Question 1",
      explanation:
        "Explanation\n A Chatter private group is a type of Chatter group that allows members to share feedback and ideas with each other in a secure and exclusive space; only members can see and post in a private group. It can be used by Ursa Major Solar to create a space for product owners to collaborate with just the product team by creating a Chatter private group and adding product owners as members. Using quick actions to log communication, configuring a Chatter public group, or adding activity history to document tasks are not solutions for creating a space for product owners to collaborate with just the product team; they either do not provide privacy or do not support collaboration. References:\n https://help.salesforce.com/s/articleView?id=sf.collab_groups_overview.htm&type=5",
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
      title: "Question 2",
      explanation:
        "Explanation\n Currency locale and default language are two of the company settings that an administrator can configure in Salesforce. Currency locale determines how currency amounts are formatted and displayed in reports and other places. Default language determines the language used for labels, buttons, tabs, and other elements in Salesforce. References:\n https://help.salesforce.com/s/articleView?id=sf.admin_supported_currencies.htm&type=5\n https://help.salesforce.com/s/articleView?id=sf.admin_supported_languages.htm&type=5",
    },
    {
      content:
        "Universal Container wants to increase the security of their org by requiring stricker user passwords.\nWhich two of the following should an administrator configure?\nChoose 2 answers",
      options: [
        "A. Password different then username",
        "B. Prevent common words",
        "C. Minimum password length.",
        "D. Password complexity requirement.",
      ],
      answer: "C,D",
      title: "Question 3",
      explanation:
        "Explanation\n Minimum password length and password complexity requirement are two settings that administrators can configure to increase the security of user passwords in Salesforce. They determine how long and how complex the passwords must be to meet the security standards. Password different than username and prevent common words are not valid settings in Salesforce, although they are good practices for creating strong passwords.\n References: https://help.salesforce.com/s/articleView?id=sf.admin_password_policies.htm&type=5",
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
      title: "Question 4",
      explanation:
        "Explanation\n The mass transfer tool allows you to transfer up to 250 records at a time from one user to another user while keeping the existing team members intact. You can access this tool from Setup by entering Mass Transfer Records in the Quick Find box. References:\n https://help.salesforce.com/s/articleView?id=sf.mass_transfer_overview.htm&type=5",
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
      title: "Question 5",
      explanation:
        "Explanation\n Web-to-Case and Email-to-Case are two solutions that allow customers to create cases from a web form or an email. Web-to-Case generates HTML code for a web form that you can place on your website. Email-to-Case converts incoming emails into cases.\n References: https://help.salesforce.com/s/articleView?id=sf.customizesupport_web_to_case.htm&type=5\n https://help.salesforce.com/s/articleView?id=sf.customizesupport_email_to_case.htm&type=5",
    },
    {
      content:
        "The marketing team at Ursa Major Solar wants to send a personalized email whenever a lead fills out the web-to-Lead form on their website. They want to send different Message based on the Lead Industry Field Value.\nWhat Should an administrator configure to meet this requirement?",
      options: [
        "A. Use Validation rule to trigger workflow to email to Lead.",
        "B. Configure an auto response rule to email the lead.",
        "C. Add a public group and process builder to email the lead.",
        "D. Create an assignment rule to email the lead",
      ],
      answer: "B",
      title: "Question 6",
      explanation:
        "Explanation\n Auto response rules are a way to automatically send email responses to leads or cases based on certain criteria such as lead source, industry, etc. They can be used to send personalized emails whenever a lead fills out a web-to-lead form on a website and send different messages based on the lead industry field value. Using validation rule to trigger workflow to email the lead is not possible because validation rules cannot trigger workflows or send emails; they only prevent records from being saved if they do not meet certain criteria.\n Adding a public group and process builder to email the lead is unnecessary because auto response rules can handle this requirement without additional configuration or customization. Creating an assignment rule to email the lead is also unnecessary because assignment rules are used to assign leads or cases to users or queues based on certain criteria, not send emails; although they can have email alerts as part of their actions, they are not as flexible as auto response rules for personalizing email messages. References:\n https://help.salesforce.com/s/articleView?id=sf.customize_leadsautoresponse.htm&type=5",
    },
    {
      content:
        "At Universal Containers, there is a custom field on the Lead named Product Category. Management wants this information to be part of the Opportunity upon lead conversion.\nWhat action should the administrator take to satisfy the request?",
      options: [
        "A. Map the lead custom field to the product's product category field.",
        "B. Create a workflow to update Opportunity fields based on the lead.",
        "C. Create a custom field on the Opportunity and map the two fields.",
        "D. Configure the product categories picklist field on the product.",
      ],
      answer: "C",
      title: "Question 7",
      explanation:
        "Explanation\n To transfer data from a lead custom field to an opportunity field upon lead conversion, an administrator needs to create a custom field on the opportunity object that matches the data type and length of the lead custom field, and then map the two fields using the lead field mapping tool under setup. This will ensure that the value of the product category field on the lead is copied to the corresponding field on the opportunity when the lead is converted. References: https://help.salesforce.com/s/articleView?id=sf.leads_customize_map.htm&type=5",
    },
    {
      content:
        "Sales reps miss key fields when filling out on opportunity record through the process. Reps need to move forward Win unable to enter previous stage.\nWhich three options should the administrator use to address this need?\nChoose Three answers",
      options: [
        "A. Enable guided selling.",
        "B. Use Validation Rules.",
        "C. Configure Opportunity Path.",
        "D. Use Flow to mark fields required.",
        "E. Mark fields required on the page layout.",
      ],
      answer: "B,C,E",
      title: "Question 8",
      explanation:
        "Explanation\n Guided selling, validation rules, and required fields on the page layout are three options that can be used to ensure sales reps fill out key fields when working on an opportunity through the process. Guided selling allows administrators to add prompts and guidance at each stage of the path to help reps move forward with confidence. Validation rules allow administrators to enforce data quality and business logic by preventing reps from saving records that do not meet certain criteria. Required fields on the page layout allow administrators to make certain fields mandatory for reps to enter before saving records. Configuring opportunity path can help reps visualize and update key fields at each stage, but it does not make them required or prevent them from moving forward without entering them. Using flow to mark fields required is not possible because flows cannot modify page layouts or field properties. References:\n https://help.salesforce.com/s/articleView?id=sf.path_guided_selling.htm&type=5\n https://help.salesforce.com/s/articleView?id=sf.validation_rules.htm&type=5\n https://help.salesforce.com/s/articleView?id=sf.fields_defining_field_properties.htm&type=5",
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
      title: "Question 9",
      explanation:
        "Explanation\n Making a field universally required is a way to ensure that the field needs to be filled on every record; it prevents users from saving a record without entering a value in that field. It can be used to ensure that the billing system field needs to be filled on every invoice record by making it universally required in the field settings. Creating a process builder to set the field, defining an approval process for the child, or requiring the field on the record type are not ways to ensure that the field needs to be filled on every record; they either do not enforce data entry or only apply to certain scenarios or users. References:\n https://help.salesforce.com/s/articleView?id=sf.customize_fields.htm&type=5",
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
      title: "Question 10",
      explanation:
        "Explanation\n To use as an identifier when importing and updating records from a separate system, an administrator should use External ID field type on an object. External ID fields allow storing unique identifiers from external systems and using them for matching records during import or update operations. External ID fields can also be used for upsert operations that insert new records or update existing ones based on external ID values. For example, an administrator can create an External ID field on Account object that stores account numbers from an external ERP system and use it for importing or updating accounts from that system. Rich Text field, Record ID, and Auto-Number field are not suitable for using as identifiers when importing and updating records from a separate system. References:\n https://help.salesforce.com/s/articleView?id=sf.fields_about_field_types.htm&type=5\n https://help.salesforce.com/s/articleView?id=sf.data_loader_upsert.htm&type=5",
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
      title: "Question 11",
      explanation:
        "Explanation\n One possible reason why a manager receives an error when trying to approve a record is that the user in the next approver step is inactive or missing, which means there is no valid user to assign the record to after approval. To troubleshoot this issue, an administrator should check if the user in the next approver step is active and exists in Salesforce; if not, they should activate or create the user or change the approval process to assign the record to another user. Adding a delegated approver for the next approver in the process does not solve this issue because delegated approvers are only used when approvers are unavailable; they do not replace approvers who are inactive or missing. Updating the field level security to view on fields that are updated in the process does not solve this issue because field level security does not affect approval processes; it only affects what fields users can see or edit on page layouts. Reviewing the page layout to ensure fields updated in the process are visible does not solve this issue because page layouts do not affect approval processes; they only affect what fields users can see or edit on page layouts. References:\n https://help.salesforce.com/s/articleView?id=sf.approvals_considerations.htm&type=5",
    },
    {
      content:
        "Which three aspects of standard fields should an administrator customize?\nChoose 3 answers",
      options: [
        "A. Picklist Values",
        "B. Help Text",
        "C. Field history tracking",
        "D. Decimal Places",
        "E. Field name",
      ],
      answer: "A,B,C",
      title: "Question 12",
      explanation:
        "Explanation\n Picklist values, help text, and decimal places are three aspects of standard fields that an administrator can customize to suit their business needs. Picklist values are the options that users can choose from a picklist field; they can be added, edited, or deleted by administrators. Help text is the text that appears when users hover over a field; it can be customized by administrators to provide additional information or guidance for users. Decimal places are the number of digits that appear after the decimal point in a number or currency field; they can be changed by administrators to adjust the precision of the field values. Field history tracking and field name are not aspects of standard fields that can be customized; they are only available for custom fields. References: https://help.salesforce.com/s/articleView?id=sf.customize_picklists.htm&type=5\n https://help.salesforce.com/s/articleView?id=sf.customize_fields_edit.htm&type=5\n https://help.salesforce.com/s/articleView?id=sf.customize_fields_number.htm&type=5",
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
      title: "Question 13",
      explanation:
        "Explanation\n A Trailhead Playground is a free, online learning environment that allows you to try out Salesforce features and apps. You can use a Trailhead Playground to test out an app from the AppExchange before you install it in your production org.\n A sandbox is a copy of your production org that you can use to test changes and new features. You can install an app from the AppExchange in a sandbox to see how it works in your environment.\n Testing an app in a production org is not recommended, as it could affect your live data. Checking edition compatibility is important, but it is not a way to try out an app.",
    },
    {
      content:
        "Cloud Kicks want to have consistency when communication with customers on cases. The company has requested messages to be sent in an email channel with categories to help search for the proper message.\nWhich Solution Should be administrator suggest to meet this requirement?",
      options: [
        "A. Prebuilt Quick Texts",
        "B. Prebuilt Email Templates.",
        "C. Prebuilt Flow Templates.",
        "D. Prebuilt Auto-Responses.",
      ],
      answer: "B",
      title: "Question 14",
      explanation:
        "Explanation\n Prebuilt email templates are email templates that have been created and provided by Salesforce for common use cases such as sending welcome messages, confirmation emails, etc. They can be used by Cloud Kicks to have consistency when communicating with customers on cases via email channel with categories to help search for the proper message. Prebuilt email templates can be accessed from the email action in the case feed or from the email composer in Lightning Experience. They can also be filtered by category to find the most relevant template for each case. Prebuilt quick texts, prebuilt flow templates, and prebuilt auto-responses are not solutions for having consistency when communicating with customers on cases via email channel; they are used for different purposes such as inserting common phrases, creating guided processes, or sending automated replies. References:\n https://help.salesforce.com/s/articleView?id=sf.email_templates_prebuilt.htm&type=5\n https://help.salesforce.com/s/articleView?id=sf.email_templates_use.htm&type=5",
    },
    {
      content:
        "Universal Containers (UC) would like to count the number of open cases associated with each account and update the account with this value every Friday evening. UC has several hundred open cases at any given time.\nWhat should the administrator use to complete this request?",
      options: [
        "A. Use a record trigger flow.",
        "B. Use a scheduled process builder.",
        "C. Use a Roll-Up summary.",
        "D. Use a scheduled flow",
      ],
      answer: "D",
      title: "Question 15",
      explanation:
        "Explanation\n A scheduled flow is a type of flow that runs at scheduled times on batches of records that meet certain criteria.\n It can be used to count the number of open cases associated with each account and update the account with this value every Friday evening by using an assignment element to loop through the accounts and cases and assign the count value to a field on the account record. Using a record trigger flow, a scheduled process builder, or a roll-up summary field are not suitable options for this requirement because they would not run at scheduled times or on batches of records; they would run every time a record is created or updated, which may not reflect the accurate count of open cases at the end of each week. References:\n https://help.salesforce.com/s/articleView?id=sf.flow_concepts_scheduled.htm&type=5",
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
      answer: "A,B",
      title: "Question 16",
      explanation:
        "Explanation\n To protect data with backups by using Data Export Service, two considerations that the administrator should remember when scheduling export are:\n Data Backups are limited to weekly or monthly intervals depending on edition and license type Metadata backups must be run via a separate process such as Metadata API or change sets because Data Export Service only exports data (records) Metadata backups are not limited by sandbox refresh intervals. Data Export Service should be run from production orgs unless testing purposes require otherwise. References: https://help.salesforce.com/s/articleView?id=sf.data_export.htm&type=5",
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
      title: "Question 17",
      explanation:
        "Explanation\n Muting permission sets allow you to remove permissions that are granted by a permission set group.\n References: https://help.salesforce.com/s/articleView?id=sf.perm_sets_muting.htm&type=5",
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
      title: "Question 18",
      explanation:
        "Explanation\n A dashboard filter is a feature that allows users to filter dashboard components by one or more field values without changing the underlying report data. For example, a dashboard filter can allow users to view cases by origin, status, or owner. A dashboard filter consists of a filter name, one or more source fields, and one or more filter values. Users can apply one or more filters to see different views of the dashboard data.\n References: https://help.salesforce.com/s/articleView?id=sf.dashboards_filters.htm&type=5",
    },
    {
      content:
        "Cloud Kicks executives have noticed the opportunity Expected revenue Field displays incorrect values.\nHow Should the administrator correct this?",
      options: [
        "A. Update the expected revenue associated with the stage.",
        "B. Adjust the forecast category associated with the stage.",
        "C. Modify the closed won value associated with the stage.",
        "D. Change the probability associated with the stage.",
      ],
      answer: "D",
      title: "Question 19",
      explanation:
        "Explanation\n Expected revenue is calculated as Amount x Probability. If the expected revenue field displays incorrect values, it means that the probability associated with the stage is not accurate. The administrator should change the probability to reflect the actual likelihood of closing the opportunity at that stage. References:\n https://help.salesforce.com/s/articleView?id=sf.forecasts3_expected_revenue.htm&type=5",
    },
    {
      content:
        "Northern Trail Outfitters wants to know the average stage duration for all closed Opportunities.\nHow should an administrator support this request?",
      options: [
        "A. Use process builder to capture the daily average on each opportunity.",
        "B. Add Formula Fields to track Stages on each Opportunity.",
        "C. Run the Opportunity Stage Duration report.",
        "D. Refresh weekly reporting snapshots for Closed Opportunities.",
      ],
      answer: "C",
      title: "Question 20",
      explanation:
        "Explanation\n The Opportunity Stage Duration report is a standard report that shows how long opportunities spend in each stage before they are closed. It can be used to measure the average stage duration for all closed opportunities by grouping and summarizing the data by stage name and duration fields. Using process builder to capture the daily average on each opportunity is not feasible because it would require creating multiple fields and formulas on the opportunity object and updating them every day. Adding formula fields to track stages on each opportunity is also not practical because it would require creating multiple fields and formulas on the opportunity object and maintaining them every time a stage changes. Refreshing weekly reporting snapshots for closed opportunities is not necessary because the report can run on real-time data without snapshots.\n References:\n https://help.salesforce.com/s/articleView?id=sf.reports_opportunity_stage_duration_report.htm&type=5",
    },
    {
      content:
        "An administrator needs to create a one-to-many relationship between two objects with limited access to child records.\nWhat type of field should the administrator use?",
      options: [
        "A. Roll-up summary",
        "B. Master-detail field",
        "C. Cross Object formula",
        "D. Lookup field",
      ],
      answer: "D",
      title: "Question 21",
      explanation:
        "Explanation\n A lookup field is a type of field that creates a relationship between two objects and allows users to select a record from one object as a value for another object. A lookup relationship creates a one-to-many relationship between two objects, where each parent record can have many child records but each child record can have only one parent record. A lookup relationship also allows limited access to child records, meaning that users can see only those child records that they have access to based on their profile permissions and sharing settings. References: https://help.salesforce.com/s/articleView?id=sf.relationships_lookup.htm&type=5",
    },
    {
      content:
        "The VP of sales at Universal Containers wants to prevent members of the sales team from changing an opportunity to a date in the past.\nWhat should an administrator configure to meet this requirement?",
      options: [
        "A. Assignment Rule",
        "B. Validation Rule",
        "C. Field-Level Security",
        "D. Approval Process",
      ],
      answer: "B",
      title: "Question 22",
      explanation:
        "Explanation\n Validation rules allow you to prevent users from changing an opportunity close date to a date in the past.\n References: https://help.salesforce.com/s/articleView?id=sf.validation_rules.htm&type=5",
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
      title: "Question 23",
      explanation:
        "Explanation\n A sales process is a set of stages that an opportunity goes through as it moves from creation to close. A record type is a way to offer different business processes, picklist values, and page layouts to different users based on their profiles. A page layout controls the layout and organization of detail and edit pages for a specific object and record type combination. To meet the requirement of having different fields and stages for each team, you need to create three sales processes for each market segment, three record types for each sales process, and three page layouts for each record type. References:\n https://help.salesforce.com/s/articleView?id=sf.customize_salesprocess.htm&type=5\n https://help.salesforce.com/s/articleView?id=sf.customize_recordtype.htm&type=5\n https://help.salesforce.com/s/articleView?id=sf.customize_layout.htm&type=5",
    },
    {
      content:
        "The administrator at cloud kicks has been told that users are unable to add repeating tasks in salesforce.\nWhich two solutions the administrator use to ensure users are able to do this?\nChoose 2 Answers",
      options: [
        "A. Enable creation of Recurring Tasks in Activity Settings",
        "B. Disable shares Activities.",
        "C. Add create Recurring series of Tasks field on Page Layouts",
        "D. Turn on Task Notifications service.",
      ],
      answer: "A,C",
      title: "Question 24",
      explanation:
        "Explanation\n To enable users to add repeating tasks in Salesforce, the administrator needs to do two things: first, enable the creation of recurring tasks in activity settings under setup; second, add the create recurring series of tasks field on the page layouts for tasks. This will allow users to create a series of tasks that repeat based on a specified frequency and end date. References:\n https://help.salesforce.com/s/articleView?id=sf.tasks_repeating.htm&type=5",
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
      title: "Question 25",
      explanation:
        "Explanation\n To surface important values based on the stage of the opportunity, the administrator should use path key fields that display fields relevant to each stage along with guidance for success. Path key fields can be customized for each stage and can help users focus on key information and actions as they move opportunities through the sales process. Dynamic forms, opportunity processes, and workflow rules are not designed to show values based on stages. References: https://help.salesforce.com/s/articleView?id=sf.path_key_fields.htm&type=5",
    },
    {
      content:
        "Cloud Kicks is Introducing a new shoe model and wants to advertise on TV, radio, print, and social under the banner of a called New Runners. In addition, total statistics for this marketing effort need to be aggregated and visible.\nWhich feature should the administrator use to implement this functionality?",
      options: [
        "A. Junction object",
        "B. Parent campaign field",
        "C. Lookup relationship",
        "D. Master-detail relationship",
      ],
      answer: "B",
      title: "Question 26",
      explanation:
        "Explanation\n To advertise on TV, radio, print, and social under one banner called New Runners and aggregate total statistics for this marketing effort, an administrator should use Parent campaign field on Campaign object. This field allows creating hierarchical relationships between campaigns by specifying one campaign as parent of another campaign. Parent campaigns roll up statistics from child campaigns such as number of leads generated, amount of revenue won etc. For example, an administrator can create four child campaigns for TV, radio, print and social ads respectively and link them to one parent campaign called New Runners using Parent campaign field. Junction object, lookup relationship, and master-detail relationship are not features related to Campaign object or hierarchy. References:\n https://help.salesforce.com/s/articleView?id=sf.campaigns_parent.htm&type=5",
    },
    {
      content:
        "The administrator at cloud kicks is trying to debug a screen flow that create contacts. One of the variables in the flow is missing on the debug screen.\nWhat could cause this issue?",
      options: [
        "A. The flow is an inactive version",
        "B. The available for output checkbox was unchecked.",
        "C. The available for input checkbox was unchecked.",
        "D. The field type is unsupported by debugging.",
      ],
      answer: "C",
      title: "Question 27",
      explanation:
        "Explanation\n To debug a screen flow that creates contacts, one of the possible causes for a variable missing on the debug screen is that the available for input checkbox was unchecked for that variable. This means that variable cannot be set by external sources such as debug inputs or URL parameters. To fix this issue, check this checkbox for any variable that needs to be set externally. The flow version or field type does not affect variable availability for input. The available for output checkbox only affects whether variables can be passed out of flows or subflows. References:\n https://help.salesforce.com/s/articleView?id=sf.flow_ref_variables.htm&type=5\n https://help.salesforce.com/s/articleView?id=sf.flow_debugging.htm&type=5",
    },
    {
      content:
        "The CTO of AW Computing has defined a new policy for cases to improve customer satisfaction. All cases submitted with a Case Reason of Installation must be acknowledged immediately via email and assigned to the appropriate agents. Any cases that are still in the New status after 4 hours must be escalated to support management.\nWhat case management tools need to be utilized for this requirement?",
      options: [
        "A. Auto-response rules, Macros, Entitlements",
        "B. Auto-response rules, Queues, Macros",
        "C. Auto-response rules, Queues, Escalation Rules",
        "D. Auto-response rules, Entitlements, Escalation Rules",
      ],
      answer: "C",
      title: "Question 28",
      explanation:
        "Explanation\n To acknowledge cases with a Case Reason of Installation immediately via email and assign them to appropriate agents, and escalate cases that are still in New status after 4 hours to support management, an administrator should use Auto-response rules, Queues, and Escalation Rules for case management.\n Auto-response rules allow sending automatic email responses to customers based on case criteria. Queues allow grouping cases that share common characteristics and assigning them to a group of users who can access and work on them. Escalation rules allow escalating cases that meet certain criteria to higher-level users or groups and sending email notifications. Macros and Entitlements are not case management tools that can be used for this requirement. References:\n https://help.salesforce.com/s/articleView?id=sf.case_autoresponse.htm&type=5\n https://help.salesforce.com/s/articleView?id=sf.queues_overview.htm&type=5\n https://help.salesforce.com/s/articleView?id=sf.case_escalation.htm&type=5",
    },
    {
      content:
        "The Sales director at Cloud Kicks wants to be able to predict upcoming revenue in the next several fiscal quarters so they can set goals and benchmark how reps are performing.\nWhich two features should the administrator configure?\nChoose 2 answers",
      options: [
        "A. Sales Quotes",
        "B. Opportunity List View",
        "C. Forecasting",
        "D. Opportunity Stages",
      ],
      answer: "C,D",
      title: "Question 29",
      explanation:
        "Explanation\n Forecasting is a feature that allows you to predict and plan the sales cycle from pipeline to closed sales, and manage sales expectations throughout your organization. Opportunity stages are the steps that an opportunity goes through as it moves from creation to close, and they determine the probability and forecast category of the opportunity. References:\n https://help.salesforce.com/s/articleView?id=sf.forecasting3_overview.htm&type=5\n https://help.salesforce.com/s/articleView?id=sf.customize_opptystages.htm&type=5",
    },
    {
      content:
        "The administrator at Cloud Kicks has been asked to replace two old workflow rules that are doing simple field updated when a lead is created to improve processing time.\nWhat tool should the administrator use to replace the workflow rules?",
      options: [
        "A. Quick Action Flow",
        "B. Before Save Flow",
        "C. Scheduled Flow",
        "D. Screen Flow",
      ],
      answer: "B",
      title: "Question 30",
      explanation:
        "Explanation\n Before Save Flows are a type of record-triggered flow that run before a record is saved and can update fields on that record without any additional actions or DML operations. They are faster and more efficient than workflow rules or process builder for simple field updates when a record is created or updated. References:\n https://help.salesforce.com/s/articleView?id=sf.flow_concepts_before_save_update.htm&type=5",
    },
    {
      content:
        "The administrator are Cloud Kicks created a new field for tracking returns on their new cloud shoe. A user has submitted case to the administrator indication that the new field is unavailable.\nWhich two steps should an administrator do to troubleshoot this issue?\nChoose 2 answers",
      options: [
        "A. Ensure that the page layout for the user's profile has been updated.",
        "B. Run the setup audit trail for the organization.",
        "C. Update the organization wide default for the object.",
        "D. Review the field level security of the field for the user profile",
      ],
      answer: "A,D",
      title: "Question 31",
      explanation:
        "Explanation\n Page layout and field level security are two factors that determine whether a user can see a new field on a record. To troubleshoot this issue, the administrator should ensure that the page layout for the user's profile has been updated to include the new field and that the field level security of the field for the user profile allows read or edit access. References:\n https://help.salesforce.com/s/articleView?id=sf.customize_layoutoverview.htm&type=5\n https://help.salesforce.com/s/articleView?id=sf.admin_fls.htm&type=5",
    },
    {
      content:
        "AW Computing (AWC) occasionally works with independent contractors, who the company stores as Contacts in Salesforce. Contractors often change agencies, and AWC wants to maintain the historical accuracy of the record.\nWhat should AWC use to track Contacts?",
      options: [
        "A. Use a partner community to track the Contacts.",
        "B. Create a new Contact record for each agency.",
        "C. Create a Junction object to track many-to-many relationship.",
        "D. Enable Contacts to multiple Accounts.",
      ],
      answer: "D",
      title: "Question 32",
      explanation:
        "Explanation\n Contacts to multiple accounts is a feature that allows you to associate a single contact with multiple accounts, both business and person accounts. This way, you can maintain the historical accuracy of the contact record without creating duplicate records for each account. References:\n https://help.salesforce.com/s/articleView?id=sf.contacts_multiple_accounts.htm&type=5",
    },
    {
      content:
        "Once an opportunity reaches the negotiation stage at cloud kicks, The Amount fields becomes required for sales users. Sales managers need to be able to move opportunities inti this stage without knowing the amount.\nHow should the administrator require this field during the negotiation stage for sales users but allow their managers to make changes?",
      options: [
        "A. Make the field required for all users.",
        "B. Create to formula field to fill in the field for managers.",
        "C. Assign the administrator profile to the managers.",
        "D. Configure a validation rule to meet the criteria.",
      ],
      answer: "D",
      title: "Question 33",
      explanation:
        "Explanation\n To require the Amount field during the negotiation stage for sales users but allow their managers to make changes, the administrator should configure a validation rule that checks if the user profile is not a sales manager, the stage is negotiation, and the amount is blank. This will prevent sales users from saving the record without entering an amount, but allow sales managers to do so. Making the field required for all users will not meet the requirement. Creating a formula field or assigning the administrator profile to the managers will not affect field requirement. References:\n https://help.salesforce.com/s/articleView?id=sf.validation_rules_overview.htm&type=5",
    },
    {
      content:
        "Which tool should an administrator use to review recent configuration changes made in their org?",
      options: [
        "A. Critical Updates",
        "B. Debug logs",
        "C. Setup Audit Trail",
        "D. Field History Tracking",
      ],
      answer: "C",
      title: "Question 34",
      explanation:
        "Explanation\n Setup audit trail is a tool that allows administrators to review recent configuration changes made in their org. It shows a list of up to 180 days of setup changes made by anyone in the org, including the date, time, user, and type of change. It can help administrators track who made what changes and when, and troubleshoot any issues caused by configuration changes. Critical updates are notifications that inform administrators of new features or enhancements that may impact their org; they do not show configuration changes made by users.\n Debug logs are records of database operations, system processes, and errors that occur when executing a transaction or running unit tests; they do not show configuration changes made by users either. Field history tracking is a feature that allows administrators to track changes to the values of certain fields on records; it does not show configuration changes made in setup. References:\n https://help.salesforce.com/s/articleView?id=sf.monitorsetup.htm&type=5",
    },
    {
      content:
        "Ursa Major Solar uses two different page layouts for Account records. One page layout reflects the fields related to customer accounts and another page layout includes fields for partner accounts. The administrator has assigned the customer account page layout to sales and support users and the partner account layout to the partner management team.\nWhat should the administrator configure to meet this requirement?",
      options: [
        "A. Use a public group and a criteria-based sharing rule to share customer accounts with the partner team.",
        "B. Add members of the partner management team to the default Account team for the customer accounts.",
        "C. Grant create, read, edit and delete access to customer accounts on the partner team profile.",
        "D. Create one record type for customer accounts and one record type for partner accounts.",
      ],
      answer: "D",
      title: "Question 35",
      explanation:
        "Explanation\n Record types are a way to assign different page layouts and picklist values to different users based on their business needs. To use two different page layouts for customer and partner accounts, create one record type for each account type and assign them to the appropriate page layouts and profiles. References:\n https://help.salesforce.com/s/articleView?id=sf.customize_recordtype.htm&type=5",
    },
    {
      content:
        "Which three items are available in the mobile navigation menu?\nChoose 3 answers",
      options: [
        "A. Chatter",
        "B. Utility Bar",
        "C. Lightning Home Page",
        "D. Dashboards",
        "E. Lightning App Pages",
      ],
      answer: "A,D,E",
      title: "Question 36",
      explanation:
        "Explanation\n Lightning app pages, Chatter, and dashboards are three items that are available in the mobile navigation menu.\n The mobile navigation menu allows users to access different items in the Salesforce mobile app, such as objects, apps, or utilities. Users can customize their mobile navigation menu by adding or removing items and changing their order. References: https://help.salesforce.com/s/articleView?id=sf.app_nav_setup.htm&type=5",
    },
    {
      content:
        "DreamHouse Realty regularly holds open houses for the selling of both houses and condominiums. For condominium open houses, there are a few extra steps that need to be taken. Agents need to be able to submit requests and receive approvals from the homeowners' association.\nHow can the administrator ensure these extra steps only appear when creating open house records for condominiums?",
      options: [
        "A. Create one page layout. Use record types to ensure the proper status picklist values display.",
        "B. Create two page layouts. Use business processes and record types to display the appropriate picklist values.",
        "C. Create one page layout. Use business processes to ensure the proper status picklist values display.",
        "D. Create two page layouts, one with a House Status field and the other with a Condominium Status field.",
      ],
      answer: "B",
      title: "Question 37",
      explanation:
        "Explanation\n To ensure extra steps only appear when creating open house records for condominiums, an administrator can use two methods: create two page layouts; and use business processes and record types to display appropriate picklist values. A page layout is a feature that allows administrators to control how fields, related lists, buttons, etc., are arranged on a record detail or edit page for each object. An administrator can create two page layouts for open house records - one for houses and one for condominiums - and include different fields or sections for each page layout based on their requirements. A business process is a feature that allows administrators to define and enforce stages that records must go through based on their record type such as lead status or opportunity stage. A record type is a feature that allows administrators to offer different business processes, picklist values, page layouts etc., to different users based on their profile or role. An administrator can create two record types for open house records - one for houses and one for condominiums - and assign different business processes and picklist values for each record type based on their requirements. References:\n https://help.salesforce.com/s/articleView?id=sf.customize_pagelayouts_overview.htm&type=5\n https://help.salesforce.com/s/articleView?id=sf.customize_recordtype.htm&type=5",
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
      title: "Question 38",
      explanation:
        "Explanation\n Flow Builder is a tool that can be used to create an automated way to delete records based on field values.\n Flow Builder can create flows that define the logic and actions for deleting records, such as finding records that match certain criteria and deleting them in bulk. Flows can be scheduled to run at regular intervals or triggered by other events or processes. References:\n https://help.salesforce.com/s/articleView?id=sf.flow_builder.htm&type=5\n https://help.salesforce.com/s/articleView?id=sf.flow_concepts_delete.htm&type=5",
    },
    {
      content:
        "Cloud Kicks has a screen flow with two questions on the same screen, but only one is necessary at a time. The administrator has been asked to show only the questions that is needed.\nHow should an administrator complete this?",
      options: [
        "A. Use a new version of the flow for each scenario.",
        "B. Use a decision element and a new screen to show the proper question",
        "C. Use a conditional visibility to hide the unnecessary question",
        "D. Use branching in the flow screen to show the proper scenario",
      ],
      answer: "B",
      title: "Question 39",
      explanation:
        "Explanation\n Conditional visibility is a feature that allows administrators to show or hide screen components in a flow based on certain conditions or criteria. For example, conditional visibility can show only one question on a screen depending on the value of another field or variable. Conditional visibility consists of one or more rules that define when to show or hide a component based on an expression that evaluates to true or false. In this case, the administrator can use conditional visibility to hide the unnecessary question on the screen flow based on the scenario. References:\n https://help.salesforce.com/s/articleView?id=sf.flow_ref_elements_screencmp.htm&type=5",
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
      title: "Question 40",
      explanation:
        "Explanation\n Email-to-Case allows administrators to set up routing addresses that automatically create cases from incoming emails and assign them to queues based on predefined criteria. This way, emails from customers can generate cases automatically and be sent to the correct queue. A flow is a tool for building automated processes, but it is not designed for email routing. A custom email service is a way to process inbound emails using Apex code, but it requires coding skills and is more complex than Email-to-Case. An escalation rule is a way to escalate cases based on certain conditions, but it does not create cases from emails or assign them to queues.\n References: https://help.salesforce.com/s/articleView?id=sf.customize_email2case.htm&type=5",
    },
    {
      content:
        "Cloud Kicks want its reports to show a Fiscal Year that starts on February 1 and has 12 months.\nHow Should the Administrator Address this requirement?",
      options: [
        "A. Set the Fiscal Year to Custom and the starting month as February.",
        "B. Set the Fiscal Year to Custom and the duration to 4 quarters.",
        "C. Set the Fiscal Year to Standard and the starting month as February.",
        "D. Set the Fiscal Year to Standard and the duration to 12 months.",
      ],
      answer: "A",
      title: "Question 41",
      explanation:
        "Explanation\n A standard fiscal year starts on January 1 and ends on December 31. A custom fiscal year can be set to start on any month and end on any month. In this case, Cloud Kicks wants its fiscal year to start on February 1 and end on January 31. This can be achieved by setting the fiscal year to Custom and the starting month to February.\n Setting the fiscal year to Standard and the starting month to February will not work, as the standard fiscal year starts on January 1. Setting the fiscal year to Custom and the duration to 4 quarters will not work, as the duration of a fiscal year is 12 months. Setting the fiscal year to Standard and the duration to 12 months will not work, as the standard fiscal year starts on January 1.\n Custom fiscal years are fiscal years that follow a custom-defined structure that differs from the Gregorian calendar. They can be used by organizations that have fiscal years that start on a different month than January or have fiscal years that are divided into custom periods such as quarters or weeks. To set up a custom fiscal year that starts on February 1 and has 12 months, an administrator needs to set the fiscal year to custom and the starting month as February in the fiscal year settings. Setting the fiscal year to standard or the duration to 4 quarters does not meet the requirement of having a custom fiscal year that starts on February 1. References:\n https://help.salesforce.com/s/articleView?id=sf.admin_fiscal_year.htm&type=5",
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
      title: "Question 42",
      explanation:
        "Explanation\n Two considerations when installing a managed package in a sandbox are:\n The installation link has to be modified to test.salesforce.com, because the default installation link points to login.salesforce.com which is for production orgs. To install a package in a sandbox org, the administrator has to replace login with test in the installation URL before clicking it.\n The package will be removed any time the sandbox is refreshed, because refreshing a sandbox replaces its current data and metadata with those from its source org. If the source org does not have the package installed, then the sandbox will lose it after refresh. Any metadata changes to the package do not have to be recreated in production, because they are preserved during upgrades unless overwritten by the package developer. Install for Admins Only is not the only install option available; there are also Install for All Users and Install for Specific Profiles options. References:\n https://help.salesforce.com/s/articleView?id=sf.distribution_installing_packages.htm&type=5\n https://help.salesforce.com/s/articleView?id=sf.data_sandbox_implementation_tips.htm&type=5",
    },
    {
      content:
        "An administrator Creates a custom text area field on the Account object and adds it to the service team's page layout. The services team manager loves the addition of this field and wants it to appear in the highlights panel so that the services reps can quickly find it when on the Account Page How should the administrator accomplish this?",
      options: [
        "A. Create a new page layout and a new section titled highlights panel.",
        "B. In the Account object manager, create a custom compact layout.",
        "C. From the page layout editor, drag the field to the highlights panel.",
        "D. Make the field required and move it to the top of the page.",
      ],
      answer: "B",
      title: "Question 43",
      explanation:
        "Explanation\n Compact layouts determine which fields appear in the highlights panel on record pages and in the Salesforce mobile app. To create a custom compact layout, go to the Account object manager and select Compact Layouts from the sidebar menu. Then click New and add the desired fields to the layout. References:\n https://help.salesforce.com/s/articleView?id=sf.compact_layouts_create.htm&type=5",
    },
    {
      content:
        "An Administrator at DreamHouse Realty wants an easier way to assign an agent capacity and skill set. Which feature should the administrator enable to meet this requirement?",
      options: [
        "A. Knowledge Management.",
        "B. Omni-Channel",
        "C. Escalation Rules",
        "D. Territory Management",
      ],
      answer: "B",
      title: "Question 44",
      explanation:
        "Explanation\n To assign agent capacity and skill set, the administrator should enable Omni-Channel, which is a feature that allows agents to work on multiple cases or chats at once based on their availability and expertise.\n Omni-Channel can route work items to agents based on their predefined capacity and skills, ensuring that they are working on the right tasks at the right time. Knowledge Management, Escalation Rules, and Territory Management are not related to agent capacity and skill set. References:\n https://help.salesforce.com/s/articleView?id=sf.omnichannel_overview.htm&type=5",
    },
    {
      content:
        "When a Sales rep clicks a button on an opportunity, a simple discount calculator screen should be launched.\nWhich automation tool should an administrator use to build this discount calculator screen?",
      options: [
        "A. Flow Builder",
        "B. Workflow Rule",
        "C. Platform Event",
        "D. Process Builder",
      ],
      answer: "A",
      title: "Question 45",
      explanation:
        "Explanation\n Flow Builder supports creating a screen that can launch a simple discount calculator when a button is clicked on an opportunity.\n References: https://help.salesforce.com/s/articleView?id=sf.flow_builder_overview.htm&type=5\n https://help.salesforce.com/s/articleView?id=sf.flow_distribute_button.htm&type=5",
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
      title: "Question 46",
      explanation:
        'Explanation\n To prevent users from selecting more than one value on a picklist field, the administrator needs to change the field type from a multi-select picklist to a regular picklist, and select the "Choose only one value" checkbox on the field definition page. This will ensure that only one value can be selected on the record page and in reports and filters. References: https://help.salesforce.com/s/articleView?id=sf.customize_picklists.htm&type=5',
    },
    {
      content:
        "Ursa Solar Major is evaluating Salesforce for its service team and would like to know what objects were available out of the box.\nWhich three of the standard objects are available to an administrator considering a support use case?\nChoose 3 answers",
      options: [
        "A. Contract",
        "B. Case",
        "C. Ticket",
        "D. Request",
        "E. Account",
      ],
      answer: "A,B,E",
      title: "Question 47",
      explanation:
        "Explanation\n Contract is a standard object that represents a contractual agreement between your company and a customer.\n Case is a standard object that represents a customer's question or problem that needs to be resolved by your support team. Account is a standard object that represents an individual or an organization involved in your business, such as customers, competitors, partners, etc. These three objects are commonly used for service use cases in Salesforce. References: https://help.salesforce.com/s/articleView?id=sf.contract_fields.htm&type=5\n https://help.salesforce.com/s/articleView?id=sf.case_fields.htm&type=5\n https://help.salesforce.com/s/articleView?id=sf.account_fields.htm&type=5",
    },
    {
      content:
        "Which two actions should an administrator perform with Case escalation rules?\nChoose 2 answers",
      options: [
        "A. Re-open the Case.",
        "B. Re-assign the Case.",
        "C. Change the Case Priority.",
        "D. Send email notifications.",
      ],
      answer: "B,C",
      title: "Question 48",
      explanation:
        "Explanation\n Case escalation rules are used to escalate cases that have not been resolved within a certain time frame by changing the case owner, sending email notifications, or triggering workflow actions. You can use these actions to alert the appropriate users or groups when a case needs urgent attention or escalation. References:\n https://help.salesforce.com/s/articleView?id=sf.customize_caseesc.htm&type=5",
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
      title: "Question 49",
      explanation:
        "Explanation\n Report folders are used to organize and secure reports in Salesforce. You can set different levels of access for different users or groups on each report folder. To preserve the integrity of the source reports for dashboards, you can create a new report folder with viewer access only and move the dashboard reports to that folder. This way, users can view the reports but not edit them. References:\n https://help.salesforce.com/s/articleView?id=sf.reports_folders.htm&type=5\n https://help.salesforce.com/s/articleView?id=sf.reports_dashboard_folder_access.htm&type=5",
    },
    {
      content:
        "The Marketing team at Cloud Kicks uses campaigns to generate product interest. They want custom picklist values for the campaign member Status field for each campaign they run, currently, they ask the administrator to add or delete values, but this is very time consuming.\nWhich two user permission should allow the Marketing team to customize the campaign member status picklist values themselves?\nChoose 2 answers",
      options: [
        "A. Create and Edit for Campaign Member",
        "B. Marketing user feature license",
        "C. Customize Application permission",
        "D. Edit permission for campaigns",
      ],
      answer: "B,D",
      title: "Question 50",
      explanation:
        "Explanation\n To customize the campaign member status picklist values themselves, marketing users need two things: a marketing user feature license and edit permission for campaigns. A marketing user feature license enables users to create, edit, and delete campaigns; manage campaign members; and update campaign history via the import wizards or API. Edit permission for campaigns allows users to modify existing campaigns and their related records such as campaign members and campaign member statuses. References:\n https://help.salesforce.com/s/articleView?id=sf.campaigns_enable.htm&type=5\n https://help.salesforce.com/s/articleView?id=sf.campaigns_member_status.htm&type=5",
    },
    {
      content:
        "Northern Trail Outfitters (NTO) has deployed my domain. The Chief Marketing Officer wants to make sure that all of the Salesforce users log in using the branded login URL. There needs to be a grace period for the user's bookmarks to be updated.\nHow should the administrator configure the policies in my domain settings?",
      options: [
        "A. Set the login policy to require login from https://nto.my.salesforce.com",
        "B. Set the Redirect policy to Do Not redirect.",
        "C. Set the redirect policy to Redirect with a warning to the same page within the domain.",
        "D. Set the login policy to prevent login from https://login.salesforce.com",
      ],
      answer: "C",
      title: "Question 51",
      explanation:
        "Explanation\n To make sure that all of the Salesforce users log in using the branded login URL after deploying my domain, and give them a grace period for updating their bookmarks, the administrator should set the Redirect policy to Redirect with a warning to the same page within the domain. This will redirect users who try to log in from\n https://login.salesforce.com or another domain to https://nto.my.salesforce.com, and show them a warning message that they need to update their bookmarks. Setting the Login policy or preventing login from\n https://login.salesforce.com will not redirect users or give them a warning. Filtering with Form Factor will not affect login URL. References:\n https://help.salesforce.com/s/articleView?id=sf.domain_mgmt_redirect.htm&type=5",
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
      title: "Question 52",
      explanation:
        "Explanation\n Email-to-Case allows you to create cases from incoming emails. You need to enable this feature and set up routing addresses and case creation settings.\n References: https://help.salesforce.com/s/articleView?id=sf.customizesupport_email_to_case.htm&type=5",
    },
    {
      content:
        "Northern Trail Outfitters has asked an administrator to ensure that when a contact with a title of CEO is created, the contact's account record gets updated with the CEO's name.\nWhich feature should an administrator use to implement this request?",
      options: [
        "A. Quick Action",
        "B. Workflow Rule",
        "C. Process Builder",
        "D. Validation Rule",
      ],
      answer: "C",
      title: "Question 53",
      explanation:
        "Explanation\n Process Builder is a tool that can be used to implement this request. Process Builder can create record-triggered flows that execute actions when certain conditions are met. In this case, Process Builder can create a flow that executes when a contact with a title of CEO is created and updates the contact's account record with the CEO's name. References:\n https://help.salesforce.com/s/articleView?id=sf.process_overview.htm&type=5",
    },
    {
      content:
        "A sales rep at Ursa Major Solar has launched a series of networking events. They are hosting one event per month and want to be able to report on campaign ROI by month and series.\nHow should the administrator set up the Campaign to simplify reporting?",
      options: [
        "A. Add different record types for the monthly event types.",
        "B. Create individual Campaigns that all have the same name.",
        "C. Configure campaign Member Statuses to record which event members attended.",
        "D. Use Campaign Hierarchy where the monthly events roll up to a parent Campaign",
      ],
      answer: "D",
      title: "Question 54",
      explanation:
        "Explanation\n Campaign hierarchy is a feature that allows administrators to organize campaigns into a parent-child relationship, where the parent campaign represents a larger initiative and the child campaigns represent smaller or more specific activities within that initiative. Using campaign hierarchy can help Ursa Major Solar report on campaign ROI by month and series by creating a parent campaign for the series of networking events and creating individual child campaigns for each monthly event. The parent campaign can show the aggregated metrics and ROI for the entire series, while the child campaigns can show the metrics and ROI for each month.\n Adding different record types for the monthly event types, creating individual campaigns that all have the same name, or configuring campaign member statuses to record which event members attended are not solutions for reporting on campaign ROI by month and series; they either do not group campaigns into a hierarchy or do not track campaign metrics or ROI. References:\n https://help.salesforce.com/s/articleView?id=sf.campaigns_hierarchy.htm&type=5",
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
      title: "Question 55",
      explanation:
        'Explanation\n To automate applying discounts on opportunity products when an opportunity is won, the administrator should use Flow Builder, which is a tool that allows creating complex business processes with clicks. The administrator can create an autolaunched flow that runs when an opportunity is updated, checks if its stage is\n "Closed Won", and updates its related opportunity products with discounts from a formula or variable.\n Approval Process, Prebuilt Macro, and Formula Field are not able to update related records based on criteria.\n References: https://help.salesforce.com/s/articleView?id=sf.flow_build_overview.htm&type=5',
    },
    {
      content:
        "An administrator has reviewed an upcoming critical update.\nHow should the administrator proceed with activation of the critical update?",
      options: [
        "A. Activate the critical update in a sandbox.",
        "B. Allow the critical update to auto-activate.",
        "C. Activate the critical update in production.",
        "D. Allow the critical update to auto-activate in a sandbox.",
      ],
      answer: "A",
      title: "Question 56",
      explanation:
        "Explanation\n To test the impact of a critical update before it is auto-activated, you should activate it in a sandbox first. This way, you can verify that your customizations and integrations work as expected without affecting your production org.\n References: https://help.salesforce.com/s/articleView?id=sf.admin_critical_updates.htm&type=5",
    },
    {
      content:
        "Northern Trail Outfitters wants to initiate expense reports from Salesforce to the external HR system. This process needs to be reviewed by managers and directors.\nWhich two tools should and administrator configure?\nChoose 2 answers",
      options: [
        "A. Quick Action",
        "B. Outbound Message",
        "C. Approval Process",
        "D. Email Alert Action",
      ],
      answer: "B,C",
      title: "Question 57",
      explanation:
        "Explanation\n Quick actions allow you to initiate expense reports from Salesforce to an external HR system. Approval processes allow you to review the expense reports by managers and directors.\n References: https://help.salesforce.com/s/articleView?id=sf.approvals_considerations.htm&type=5\n https://help.salesforce.com/s/articleView?id=sf.quick_actions_overview.htm&type=5",
    },
    {
      content:
        "Universal Containers wants to provide reseller partners with discounted prices on the products they purchase.\nHow should an administrator configure this requirement?",
      options: [
        "A. Add a Partner_Discount_c field to the Opportunity",
        "B. Build separate reseller partner products.",
        "C. Use a different Opportunity record type.",
        "D. Create a separate PriceBook for reseller partners.",
      ],
      answer: "D",
      title: "Question 58",
      explanation:
        "Explanation\n A PriceBook is a feature that allows administrators to define different prices for the same products based on different criteria such as customer segment, region, channel, etc. For example, a PriceBook can provide reseller partners with discounted prices on the products they purchase compared to regular customers. A PriceBook consists of one or more PriceBook entries that specify the product ID, pricebook ID, list price, currency, and active status for each product-pricebook combination. References:\n https://help.salesforce.com/s/articleView?id=sf.pricebook_overview.htm&type=5",
    },
    {
      content:
        "The administrator at Northern Trail Outfitters has been using a spreadsheet to track assigned licenses and permission sets.\nWhat feature can be used to track this in Salesforce?",
      options: [
        "A. Login History",
        "B. Lightning Usage App",
        "C. User Report",
        "D. Permission Set Groups",
      ],
      answer: "C",
      title: "Question 59",
      explanation:
        "Explanation\n To track assigned licenses and permission sets in Salesforce instead of using a spreadsheet, an administrator should use User Report type on Report object. User Report type allows creating reports that show information about users such as their profile, role, license type, active status, login history etc. It also allows adding fields related to permission sets such as Permission Set Assignments or Permission Set License Assignments. For example, an administrator can create a User Report that shows user name, profile name, user license name, permission set assignments count etc. Login History, Lightning Usage App, or Permission Set Groups are not features that can be used to track assigned licenses and permission sets in Salesforce. References:\n https://help.salesforce.com/s/articleView?id=sf.reports_report_types_standard_user.htm&type=5",
    },
    {
      content:
        "Ursa Major Solar provides a 1-year warranty on all of the panels it installs. Installation details, along with the warranty information, a captured on a custom object called Installation. The installation record is created by the installer from the mobile app. Customers son receive a longer warranty as a way of increasing customer satisfaction when an installation gets delayed or has issues.\nHow should the administrator configure Salesforce to capture the expiration date of the warranty?",
      options: [
        "A. Use a formula as the default value of the warranty Expiration Date field.",
        "B. Create a formula field to display l year from the warranty purchased.",
        "C. Add a validation rule to ensure the Expiration Date field is populated.",
        "D. Include the warranty Expiration Date field on the mobile page layout.",
      ],
      answer: "B",
      title: "Question 60",
      explanation:
        "Explanation\n To capture the expiration date of warranty based on installation date and warranty length (1 year by default), the administrator should use a formula as the default value of Warranty Expiration Date field on Installation object. The formula can calculate one year from installation date using DATE function or DATEVALUE function. For example, DATE(YEAR(Installation_Date__c) + 1 , MONTH(Installation_Date__c) , DAY(Installation_Date__c)) will return one year from installation date. Creating a formula field, adding a validation rule, or including Warranty Expiration Date field on mobile page layout will not capture expiration date based on installation date and warranty length. References:\n https://help.salesforce.com/s/articleView?id=sf.formula_using_date_datetime.htm&type=5",
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
      title: "Question 61",
      explanation:
        "Explanation\n Flow builder is an automation tool that allows administrators to create flows that guide users through screens, collect data, and perform actions on records. It can be used to simplify the account creation process by creating a screen flow that shows only the essential fields for creating an account and hides any unnecessary fields or sections from the page layout. Approval process, workflow rule, and validation rule are not automation tools that can simplify the account creation process; they are used for different purposes such as approving records, updating fields, or enforcing data quality. References:\n https://help.salesforce.com/s/articleView?id=sf.flow_builder.htm&type=5",
    },
    {
      content:
        "An Administrator wants to trigger a follow-up task for the opportunity owner when they close an opportunity as won and another task after 60 days to check in with the customer.\nwhich two automation tools should the administrator use?\nChoose 2 answers",
      options: [
        "A. process builder",
        "B. workflow Rule",
        "C. Field Update",
        "D. Outbound Message",
      ],
      answer: "A,C",
      title: "Question 62",
      explanation:
        "Explanation\n Process builder can be used to create a record-triggered flow that executes when an opportunity is closed as won and creates a follow-up task for the owner. Field update can be used to update a date field on the opportunity that can be referenced by a time-dependent workflow rule to create another task after 60 days.\n References: https://help.salesforce.com/s/articleView?id=sf.process_which_tool.htm&type=5\n https://help.salesforce.com/s/articleView?id=sf.workflow_time_action_considerations.htm&type=5",
    },
    {
      content:
        "Support reps at Cloud Kicks (CK) are reporting that when they try to close a case, the Closed option in the Case Status picklist is missing. CK has asked the administrator to find a solution.\nWhy are the support reps unable to see the Closed option in the specified piclist?",
      options: [
        "A. The Case record type is missing Closed as a picklist value.",
        "B. The Close Case page layout must be used to close a case.",
        "C. The Show Closed Statuses m Case Status Field checkbox is set to the default.",
        "D. The Support Process being used omits Closed as a status choice.",
      ],
      answer: "A",
      title: "Question 63",
      explanation:
        "Explanation\n A support process is a feature that allows administrators to define and enforce the stages that a case or work order must go through based on its record type. A support process determines which values are available for the status field for each record type. If a support process omits a certain value for the status field, such as Closed, then users will not be able to see or select that value when working with cases or work orders of that record type. References: https://help.salesforce.com/s/articleView?id=sf.customize_supporthome.htm&type=5",
    },
    {
      content:
        "DreamHouse Realty (DHR) wants a templated process with a mortgage calculator that generated leads for loans. DHR needs to complete the project within 30 days and has maxed out its budget for the year.\nWhich AppExchange item should help the administrator to meet the request?",
      options: [
        "A. Lightning Data",
        "B. Lightning Community",
        "C. Flow Solutions",
        "D. Bolt Solutions",
      ],
      answer: "C",
      title: "Question 64",
      explanation:
        "Explanation\n Flow Solutions are pre-built flows or templates that can be installed from AppExchange and customized to meet specific business needs. For example, Flow Solutions can provide common use cases such as lead generation, document generation, payment processing, and more. In this case, the administrator can use a Flow Solution that provides a mortgage calculator and generates leads for loans. Flow Solutions are easy to install and configure, and can help save time and budget for projects. References:\n https://help.salesforce.com/s/articleView?id=sf.flow_solutions.htm&type=5",
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
      title: "Question 65",
      explanation:
        "Explanation\n Big Deal Alerts are notifications that are sent to users when an opportunity reaches a certain amount, probability, or stage. They can be configured by administrators to alert sales reps or managers when they have a high likelihood of winning a big deal. Key Deals are a feature of Einstein Opportunity Scoring that shows the top opportunities based on their score and stage, but they do not send notifications. Activity Timeline is a component of Lightning Experience that shows the past and upcoming activities related to a record, but it does not notify users of big deals. Performance chart is a type of report chart that shows how well users or teams are performing against their goals, but it does not alert users of big deals. References:\n https://help.salesforce.com/s/articleView?id=sf.forecasts3_big_deal.htm&type=5",
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
      title: "Question 66",
      explanation:
        "Explanation\n Freezing a user is a way to temporarily prevent them from logging in to Salesforce without deactivating their user record. This is useful when you need to perform some cleanup tasks before deactivating a user, such as removing them from being referenced in a hierarchy field like Direct Manager. References:\n https://help.salesforce.com/s/articleView?id=sf.users_freeze.htm&type=5",
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
      title: "Question 67",
      explanation:
        "Explanation\n To use Data Loader to mass import new records to a custom object from a new API, the administrator will need to append their security token at the end of their password to login. The security token is an alphanumeric code that is required for API access when logging in from an IP address that is not trusted by Salesforce. The security token can be obtained from the user's personal settings or by resetting it via email. Adding a permission set, resetting the password and the security token, or using the Data Import Tool are not necessary for using Data Loader. References: https://help.salesforce.com/s/articleView?id=sf.data_loader.htm&type=5\n https://help.salesforce.com/s/articleView?id=sf.security_token.htm&type=5",
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
      answer: "A,C",
      title: "Question 68",
      explanation:
        "Explanation\n Two considerations for preventing users from accessing Salesforce from outside of their network are:\n IP address restrictions are set on the profile or globally for the org, which limit login access based on IP ranges specified by an administrator Restrict U2F Security Keys on the user's profile to enforce login hours, which require users to use security keys during certain hours of day Assigning single sign-on to a permission set or enforcing Login IP Ranges on Every Request will not prevent users from accessing Salesforce from outside of their network. References:\n https://help.salesforce.com/s/articleView?id=sf.security_networkaccess.htm&type=5\n https://help.salesforce.com/s/articleView?id=sf.security_keys_restrict.htm&type=5",
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
      title: "Question 69",
      explanation:
        "Explanation\n A permission set group is a collection of permission sets that can be assigned to users as one unit; it simplifies permission management by reducing the number of permission assignments needed for users who require multiple permission sets. A permission set is a collection of settings and permissions that give users access to various tools and functions in Salesforce; it can be used to extend users' access beyond their profile without changing their profile. Creating permission sets and assigning permission set groups can help Cloud Kicks give access to new custom object with custom fields to more than one user by creating permission sets that include access to new custom object with custom fields and assigning permission set groups that contain those permission sets to users who need them. Adding users to manual sharing list or editing organization-wide defaults are not options for giving access to new custom object with custom fields to more than one user; they either do not apply to custom objects or do not grant object-level access. References:\n https://help.salesforce.com/s/articleView?id=sf.perm_sets_overview.htm&type=5\n https://help.salesforce.com/s/articleView?id=sf.perm_set_groups_overview.htm&type=5",
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
      title: "Question 70",
      explanation:
        "Explanation\n The $Record global variable allows you to reference the values of the active record the flow is running on.\n References: https://help.salesforce.com/s/articleView?id=sf.flow_ref_global_variables.htm&type=5",
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
      title: "Question 71",
      explanation:
        "Explanation\n A sales process is a set of stages that an opportunity goes through as it moves from creation to close. It can be customized by administrators to match different business models or product lines within an org. Creating a new sales process can help Dreamhouse Realty define a different set of stages for its new home concierge offering that is unlike anything the company has offered in the past and follows a different business model.\n Creating a quick action, a new approval process, or a new opportunity product are not solutions for creating a customized sales process; they are used for different purposes such as creating records, approving records, or adding products to opportunities. References:\n https://help.salesforce.com/s/articleView?id=sf.customize_salesprocess.htm&type=5",
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
      title: "Question 72",
      explanation:
        "Explanation\n Master-detail lookup is a type of relationship field that can be used to create a relationship between Account and Shoe and prevent orphaned Shoe records. Master-detail lookup establishes a parent-child relationship between two objects, where the parent record controls certain behaviors of the child record, such as security, ownership, and deletion. If the parent record is deleted, all the child records are deleted as well. References:\n https://help.salesforce.com/s/articleView?id=sf.relationships_considerations.htm&type=5",
    },
    {
      content:
        "Which three items are available in the mobile navigation menu?\nChoose 3 answers",
      options: [
        "A. Chatter",
        "B. Utility Bar",
        "C. Lightning Home Page",
        "D. Dashboards",
        "E. Lightning App Pages",
      ],
      answer: "A,D,E",
      title: "Question 73",
      explanation:
        "Explanation\n Lightning app pages, Chatter, and dashboards are three items that are available in the mobile navigation menu.\n The mobile navigation menu allows users to access different items in the Salesforce mobile app, such as objects, apps, or utilities. Users can customize their mobile navigation menu by adding or removing items and changing their order. References: https://help.salesforce.com/s/articleView?id=sf.app_nav_setup.htm&type=5",
    },
    {
      content:
        "An administrator has been asked to change the data type of an auto number to text field.\nWhat should the administrator be aware of before changing the field?",
      options: [
        "A. Existing field values will remain unchanged.",
        "B. Existing field values will be Converted.",
        "C. Existing field values will be deleted.",
        "D. Existing auto number field to Text is prevented.",
      ],
      answer: "D",
      title: "Question 74",
      explanation:
        "Explanation\n One thing that an administrator should be aware of before changing an auto-number field to text field is that this change is prevented by Salesforce; it cannot be done because it would cause data loss and inconsistency.\n Auto-number fields are fields that automatically assign unique numeric values to each record; they cannot be changed to text fields because text fields do not have this functionality and may allow duplicate or invalid values. Existing field values remaining unchanged, being converted, or being deleted are not things that would happen before changing an auto-number field to text field because this change cannot happen at all.\n References: https://help.salesforce.com/s/articleView?id=sf.fields_about_auto_number.htm&type=5",
    },
    {
      content:
        "Universal Containers (UC) customers have provided feedback that their support cases are not being responded to quickly enough. UC wants to send all unassigned Cases that have been open for more than 2 hours to an urgent Case queue and alert the support manager.\nwhich feature should an administrator configure to meet this requirement?",
      options: [
        "A. Case Scheduled Reports.",
        "B. Case Dashboard Refreshes.",
        "C. Case Escalation Rules.",
        "D. Case Assignment Rules.",
      ],
      answer: "C",
      title: "Question 75",
      explanation:
        "Explanation\n Case escalation rules are a way to automatically escalate cases that meet certain criteria, such as being open for more than a specified time or having a certain priority. Escalation rules can assign cases to a different owner or queue and send email notifications to the support manager or other recipients. References:\n https://help.salesforce.com/s/articleView?id=sf.case_escalation.htm&type=5",
    },
    {
      content:
        "Universal container has a contact Lightning record Page with a component that shows LinkedIn data. The sales team would like to only show this component to sales users when they are on their mobile phones.\nChoose 2 Answers.",
      options: [
        "A. Filter the component visibility with User > Profile > name = sales User.",
        "B. Filter the component visibility with Form Factor = phone",
        "C. Filter the component visibility with view = Mobile/Tablet.",
        "D. Filter the component visibility with User > Role > Name = Sales User.",
      ],
      answer: "A,B",
      title: "Question 76",
      explanation:
        "Explanation\n To show a component that shows LinkedIn data only to sales users when they are on their mobile phones, the administrator should filter the component visibility with two conditions:\n User > Profile > name = sales User, which checks if the user's profile name is \"sales User\" Form Factor = phone, which checks if the user's device is a phone Filtering with view or role will not achieve the desired result. References:\n https://help.salesforce.com/s/articleView?id=sf.app_builder_page_visibility_rules.htm&type=5",
    },
    {
      content:
        "The VP of Sales at Cloud Kicks is receiving an error message that prevents them form saving an Opportunity. The administrator attempted the same edit without receiving an error.\nHow can the administrator validate the error the user is receiving?",
      options: [
        "A. Edit the page layout.",
        "B. View the setup audit trail.",
        "C. Log in as the user",
        "D. Review the sharing model",
      ],
      answer: "C",
      title: "Question 77",
      explanation:
        "Explanation\n Log in as the user is a feature that can be used to validate the error the user is receiving. Log in as the user allows an administrator to access Salesforce as another user and perform actions on their behalf, such as editing an opportunity. This can help troubleshoot issues that are specific to a user's profile, role, or permissions. References: https://help.salesforce.com/s/articleView?id=sf.admin_login.htm&type=5",
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
      title: "Question 78",
      explanation:
        "Explanation\n The likely cause for why a rehired user is no longer able to access records they worked on before leaving the company is that the records were manually shared with the user. Manual sharing allows granting access to individual records to specific users or groups. However, manual sharing is removed when a record owner changes or when a user's role changes. When a user is deactivated, their role is removed and any manual sharing involving that user is deleted. When a user is reactivated, their role is restored but manual sharing is not. Therefore, the rehired user will not have access to records that were manually shared with them before deactivation. The stage of Opportunity records, permission sets, or record type of Opportunity records are not likely causes for why a rehired user is no longer able to access records they worked on before leaving the company. References: https://help.salesforce.com/s/articleView?id=sf.sharing_manual.htm&type=5",
    },
    {
      content:
        "Cloud Kicks is working on a better way to track its product shipments utilizing Salesforce.\nWhich field type should an administrator use to capture coordinates?",
      options: [
        "A. Geolocation",
        "B. Geofence",
        "C. Custom address",
        "D. External lookup",
      ],
      answer: "A",
      title: "Question 79",
      explanation:
        "Explanation\n Geolocation fields allow you to store the latitude and longitude coordinates of a location. They can be used to calculate distances between records and display maps of accounts, contacts, leads, or other custom objects.\n References: https://help.salesforce.com/s/articleView?id=sf.customize_geoloc.htm&type=5",
    },
    {
      content:
        "Cloud Kicks generates leads for its different product categories (shoes, apparel, and accessories) through many different sources. While some lead sources are used for all three categories, other lead sources are specific to a single category. The VP of marketing requests that only the proper lead sources be displayed based on the product category chosen.\nHow should the administrator configure Salesforce to meet this requirement?",
      options: [
        "A. Create a page layout for each category and filter the Lead Source field based on category.",
        "B. Create a dependency between the Product Category field and Lead Source field.",
        "C. Create business processes and record types for each of the three product categories.",
        "D. Create a single business process, then create record types for each product category.",
      ],
      answer: "B",
      title: "Question 80",
      explanation:
        "Explanation\n To display only the proper lead sources based on the product category chosen, an administrator should create a dependency between the Product Category field and Lead Source field on Lead object. A dependency is a relationship between two picklist fields that restricts the values available in one picklist based on the value selected in another picklist. For example, an administrator can create a dependency that shows only Online Store and Social Media as lead sources if Product Category is Shoes, but shows only Trade Show and Magazine as lead sources if Product Category is Apparel. Creating a page layout for each category, creating business processes and record types for each category, or creating a single business process with record types for each category will not display only the proper lead sources based on the product category chosen.\n References: https://help.salesforce.com/s/articleView?id=sf.customize_dependent.htm&type=5",
    },
    {
      content:
        "An administrator at Cloud Kicks is building a flow that needs to search for records that meet certain conditions and store values from those records in variable for use later in the flow.\nWhat flow element should the administrator add?",
      options: [
        "A. Assignment",
        "B. Get Records",
        "C. Create Records",
        "D. Update Records",
      ],
      answer: "B",
      title: "Question 81",
      explanation:
        "Explanation\n Get Records is a flow element that allows you to retrieve one or more records from an object that meet certain conditions and store them in a collection variable or a record variable for use later in the flow. You can also choose which fields from those records you want to store in variables. References:\n https://help.salesforce.com/s/articleView?id=sf.flow_ref_elements_data_getrecords.htm&type=5",
    },
    {
      content:
        "Which two objects are customizable the Stage Setup Flow?\nChoose 2 answers",
      options: [
        "A. Leads",
        "B. Campaigns",
        "C. Opportunities",
        "D. Campaign Members",
      ],
      answer: "A,C",
      title: "Question 82",
      explanation:
        "Explanation\n The Stage Setup Flow is a tool that allows administrators to customize stages for leads and opportunities based on best practices from Salesforce experts. The Stage Setup Flow guides administrators through a series of questions about their sales process and then creates or updates stages for leads or opportunities accordingly.\n The Stage Setup Flow also provides tips and resources for each stage such as key fields, guidance for success, reports and dashboards, etc. References:\n https://help.salesforce.com/s/articleView?id=sf.stages_setup_flow_overview.htm&type=5",
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
      title: "Question 83",
      explanation:
        "Explanation\n Process Builder is a tool that can be used to automate business processes by creating record-triggered flows that execute actions when certain conditions are met. In this case, Process Builder can be used to create a flow that executes when an opportunity is closed won and creates a client welcome task and a welcome email for the primary contact. References:\n https://help.salesforce.com/s/articleView?id=sf.process_which_tool.htm&type=5",
    },
    {
      content:
        "An administrator at Ursa Major Solar needs to send information to an external accounting system What workflow action should the administrator use to accomplish this?",
      options: [
        "A. Assign Task",
        "B. Outbound Message",
        "C. Create Record",
        "D. Custom Notification",
      ],
      answer: "B",
      title: "Question 84",
      explanation:
        "Explanation\n Outbound message allows you to send information to an external system as part of a workflow rule or approval process. You can use outbound message to specify which fields to send and which endpoint URL to send them to.\n References: https://help.salesforce.com/s/articleView?id=sf.workflow_om_considerations.htm&type=5\n https://help.salesforce.com/s/articleView?id=sf.workflow_om_define.htm&type=5",
    },
    {
      content:
        "A sales rep has a list of 300 accounts with contacts that they want to load at one time.\nWhich tool should the administrator utilize to import the records to salesforce?",
      options: [
        "A. Dataloader.io",
        "B. Data Loader",
        "C. Manual Import",
        "D. Data Import Wizard",
      ],
      answer: "D",
      title: "Question 85",
      explanation:
        "Explanation\n Data Import Wizard allows you to import up to 50,000 records at a time.\n References: https://help.salesforce.com/s/articleView?id=sf.data_importer.htm&type=5",
    },
    {
      content:
        "A user at Cloud Kicks is having issues logging in to Salesforce. The user asks the administrator to reset their password.\nWhich two options should the administrator consider when resetting the user's password?\nChoose 2 answers",
      options: [
        "A. Resetting the password will change the user's password policy.",
        "B. Single sign-on users can reset their own passwords using the forgot password link.",
        "C. Resetting a locked-out user's password automatically unlocks the user's account.",
        "D. After resetting a password, the user may be required to activate their device to successfully log in to Salesforce.",
      ],
      answer: "C,D",
      title: "Question 86",
      explanation:
        "Explanation\n Page layout editor is a tool that allows you to customize the layout and organization of detail and edit pages for a specific object and record type combination. You can use page layout editor to make fields editable or read-only on page layouts for different profiles or record types. After resetting a password, the user may be required to activate their device by entering a verification code sent to their email address or phone number before they can log in to Salesforce. This is a security feature that helps prevent unauthorized access to Salesforce from unknown devices or browsers. References:\n https://help.salesforce.com/s/articleView?id=sf.customize_layoutedit.htm&type=5\n https://help.salesforce.com/s/articleView?id=sf.identity_verification.htm&type=5",
    },
    {
      content:
        "Ursa Major Solar wants to automatically notify a manager about any cases awaiting a response from an agent for more than 2 hours after case creation.\nWhich feature should an administrator use to fulfill this requirement?",
      options: [
        "A. Assignment Rule",
        "B. Case Escalation Rule",
        "C. Omni-Channel Supervisor",
        "D. Formula Field",
      ],
      answer: "B",
      title: "Question 87",
      explanation:
        "Explanation\n Case escalation rules allow you to escalate cases based on certain criteria, such as time or priority.\n References: https://help.salesforce.com/s/articleView?id=sf.customize_escalation.htm&type=5",
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
      title: "Question 88",
      explanation:
        "Explanation\n Assignment rules and queue configuration are two options that should be used to help the support team work on some of UC's cases. Assignment rules can be used to automatically assign cases to a queue based on certain criteria, such as case origin or priority. Queue configuration can be used to add Case as an available object to the existing queue and specify which users or groups can access the queue. References:\n https://help.salesforce.com/s/articleView?id=sf.case_assignment_rules.htm&type=5\n https://help.salesforce.com/s/articleView?id=sf.customize_queues.htm&type=5",
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
      title: "Question 89",
      explanation:
        "Explanation\n Lightning page allows you to customize a record page and add a screen flow as a component. You can use the Lightning App Builder to drag and drop the Flow component onto the page and select the screen flow you want to display.\n References: https://help.salesforce.com/s/articleView?id=sf.flow_distribute_lightning_page.htm&type=5\n https://help.salesforce.com/s/articleView?id=sf.flow_builder_overview.htm&type=5",
    },
    {
      content:
        "User at Cloud Kicks want to see information more useful for their role on the Case page.\nHow should an administrator make the pages more dynamic and easier to use?",
      options: [
        "A. Add Component visibility filters to the Components.",
        "B. Remove fields from the record details component.",
        "C. Delete the extra component from the page.",
        "D. Include more tab components with filters.",
      ],
      answer: "A",
      title: "Question 90",
      explanation:
        "Explanation\n Component visibility filters are a way to make the record pages more dynamic and easier to use by showing or hiding components based on certain criteria. For example, users can see different components based on their profile, role, record type, or field values. References:\n https://help.salesforce.com/s/articleView?id=sf.app_builder_component_visibility.htm&type=5",
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
      title: "Question 91",
      explanation:
        "Explanation\n Role hierarchy and sharing rules are two features that should be used to open up access to Opportunity records for sales users working on collaborative deals. Role hierarchy can be used to grant access to records owned by or shared with users who are below them in the hierarchy. Sharing rules can be used to extend sharing access to users in public groups, roles, or territories based on certain criteria, such as record owner or field value.\n References: https://help.salesforce.com/s/articleView?id=sf.admin_sharing.htm&type=5\n https://help.salesforce.com/s/articleView?id=sf.security_sharing_rules.htm&type=5",
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
      title: "Question 92",
      explanation:
        "Explanation\n When an administrator deletes a custom field, Salesforce moves it to the deleted fields list for 15 days, during which time it can be undeleted or erased permanently. If the administrator undeletes the field within 15 days, most of its properties and data are restored, except for its field history data, which remains deleted and cannot be recovered. References: https://help.salesforce.com/s/articleView?id=sf.custom_field_delete.htm&type=5",
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
      title: "Question 93",
      explanation:
        "Explanation\n Record types and sales processes allow you to have different page layouts, fields, required fields, and picklist values for different types of opportunities.\n References: https://www.salesforceben.com/salesforce-record-types/\n https://trailhead.salesforce.com/content/learn/projects/create-an-opportunity-record-type-for-npsp/create-and-ma",
    },
    {
      content:
        "An administrator is on a tight deadline to create dashboards for the sales and marketing teams at AW Computing.\nWhat should the administrator do to meet the deadline without increasing the budget?",
      options: [
        "A. Train someone on the sales and marketing teams to build dashboards.",
        "B. Check the AppExchange for prebuilt Solution that can be easily customized.",
        "C. Hire a Consultant to build the custom dashboards.",
        "D. Build the dashboards manually to meet the deadline.",
      ],
      answer: "B",
      title: "Question 94",
      explanation:
        "Explanation\n To save time and budget, you can check the AppExchange for prebuilt solutions that can be easily customized for your needs. AppExchange is a marketplace for apps, components, and consulting services that extend Salesforce functionality.\n References: https://appexchange.salesforce.com/",
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
      title: "Question 95",
      explanation:
        "Explanation\n A validation rule is a feature that allows administrators to define criteria for data entry or import operations and display an error message when those criteria are not met. For example, a validation rule can require users to select a product type or check a needs review box when saving an opportunity by using an OR function that evaluates both fields. If neither field is populated, then the validation rule will prevent users from saving records with an error message. References:\n https://help.salesforce.com/s/articleView?id=sf.fields_about_validation_rules.htm&type=5",
    },
    {
      content:
        "Ursa Major Solar wants its sales reps to be aware when they are speaking with high-profile customers.\nWhich two options should be added to the Lightning record pages to achieve this?\nChoose 2 answers",
      options: [
        "A. Custom Component",
        "B. Highlight Panel",
        "C. Action and Recommendations",
        "D. Component Visibility Filter",
        "E. Rich Text Area",
      ],
      answer: "A,D",
      title: "Question 96",
      explanation:
        "Explanation\n Two options that should be added to Lightning record pages to make sales reps aware when they are speaking with high-profile customers are:\n Custom Component, which can display a custom message or icon on the record page based on certain criteria such as account rating or industry. For example, an administrator can create a custom Lightning Web Component that shows a star icon on account record pages if account rating is Hot or Warm.\n Component Visibility Filter, which can control when a component is visible on a record page based on field values of that record. For example, an administrator can add a component visibility filter to an existing component such as Path or Highlights Panel that makes it visible only if account rating is Hot or Warm. Highlight Panel, Action and Recommendations, and Rich Text Area are not options that can be used to make sales reps aware when they are speaking with high-profile customers. References:\n https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.create_components\n https://help.salesforce.com/s/articleView?id=sf.dynamic_forms_component_visibility.htm&type=5",
    },
    {
      content:
        "Cloud Kicks (CK) has new administrator who is asked to put together a memo detailing salesforce uses to budget for upcoming license purchases.\nWhere Should the administrator go to find out what type of licenses CK Has purchased and how many are available.",
      options: [
        "A. Search for licenses types in setup.",
        "B. User Licenses Related List in Company information.",
        "C. User Management settings in setup.",
        "D. Usage based entitlement related list in company information.",
      ],
      answer: "B",
      title: "Question 97",
      explanation:
        "Explanation\n The User Licenses related list in Company Information shows the types of licenses that have been purchased for an org and how many are available or used. It also shows the expiration date of each license type if applicable. This information can help administrators plan for license purchases and manage user access.\n Searching for license types in setup does not show how many licenses have been purchased or how many are available or used. User Management settings in setup does not show license information either, but rather settings related to user login, session, identity, etc. Usage-based entitlement related list in company information shows information about usage-based licenses such as API requests or sandboxes, but not user licenses. References:\n https://help.salesforce.com/s/articleView?id=sf.users_understanding_license_types.htm&type=5",
    },
    {
      content:
        "Ursa Major Solar has a path on Case. The company wants to require its users to follow the status values as they are on the path. Agents should be prohibited from reverting the Case back to a previous status.\nWhich feature should an administrator use to fulfill this request?",
      options: [
        "A. Predefined Field Values",
        "B. Global Value Picklists",
        "C. Dependent Picklists",
        "D. Validation Rules",
      ],
      answer: "D",
      title: "Question 98",
      explanation:
        "Explanation\n To require users to follow the status values as they are on the path and prevent them from reverting back to previous status values, the administrator should use validation rules that check if the status field value is changed from one value to another value that is not allowed by business logic. For example, if status values are New > In Progress > Closed, then a validation rule can check if status is changed from Closed to In Progress or New, and show an error message if true. Predefined Field Values, Global Value Picklists, and Dependent Picklists are not able to enforce status progression or prevent status reversion. References:\n https://help.salesforce.com/s/articleView?id=sf.validation_rules_overview.htm&type=5",
    },
    {
      content:
        "The marketing team wants a new picklist value added to the Campaign Member Status field for the upsell promotional campaign.\nWhich two solutions should the administrator use to modify the picklist field values?\nChoose 2 answers",
      options: [
        "A. Add the Campaign Member Statuses related list to the Page Layout.",
        "B. Edit the picklist values for the Campaign Status in object Manager.",
        "C. Mass modify the Campaign Member Statuses related list.",
        "D. Modify the picklist value on the Campaign Member Statuses related list",
      ],
      answer: "B,D",
      title: "Question 99",
      explanation:
        "Explanation\n Campaign Status is a standard picklist field on the Campaign object that indicates whether a campaign is planned, in progress, completed, or aborted. Campaign Member Status is a custom picklist field on the Campaign Member object that indicates how a person responded to a campaign, such as sent, responded, registered, attended, etc. To add a new picklist value for Campaign Status, you need to edit the field in Object Manager. To add a new picklist value for Campaign Member Status, you need to modify the field on the Campaign Member Statuses related list on the Campaign page layout. References:\n https://help.salesforce.com/s/articleView?id=sf.campaigns_fields.htm&type=5\n https://help.salesforce.com/s/articleView?id=sf.campaigns_member_status.htm&type=5",
    },
    {
      content:
        "Brokers at DreamHouse Realty need to see certain information about one or more cases when referencing the contact record. This record case Name, Case ID, Customer Name, Case Reason, Case Status, and Case Creation Date.\nWhich two changes in Setup should the administrator make?",
      options: [
        "A. Use the page layout editor to change the related list type to Enhanced List.",
        "B. Edit the Related List component in the Lightning App Builder and choose Related List as the related list type.",
        "C. Edit the Related List component in the Lightning App Builder and choose Enhanced List as the related list type.",
        "D. Use the page layout editor to include the appropriate column in the Cases related list.",
      ],
      answer: "B,D",
      title: "Question 100",
      explanation:
        "Explanation\n To see certain information about one or more cases when referencing the contact record, an administrator can use two methods: edit the Related List component in the Lightning App Builder and choose Related List as the related list type; and use the page layout editor to include the appropriate column in the Cases related list. The Related List component is a component that allows users to view and edit records related to a parent record on a record page. The Related List component has two types: Related List and Enhanced List. The Related List type shows records in a table format with columns that match the page layout of the parent record. The Enhanced List type shows records in a compact format with fewer columns and actions. To change the type of the Related List component, an administrator can use the Lightning App Builder and select either Related List or Enhanced List from the properties panel. The page layout editor is a tool that allows administrators to control how fields, related lists, buttons, etc., are arranged on a record detail or edit page for each object. To include appropriate columns in a related list, such as case name, case ID, customer name, case reason, case status, and case creation date for cases related to contacts, an administrator can use the page layout editor and drag and drop the desired fields from the palette to the Cases related list on the contact page layout.\n References: https://help.salesforce.com/s/articleView?id=sf.lex_related_lists_component.htm&type=5\n https://help.salesforce.com/s/articleView?id=sf.customize_pagelayouts_overview.htm&type=5",
    },
    {
      content:
        "The administrator for AW Computing is working with a user who is having trouble togging in to Salesforce.\nWhat should the administrator do to identify why the user Is unable to log in?",
      options: [
        "A. Review the login history for the user.",
        "B. Check the attempted logins by running the setup audit trail.",
        "C. Pull the password history to ensure the password policy was followed.",
        "D. Reset the security token for the profile.",
      ],
      answer: "A",
      title: "Question 101",
      explanation:
        "Explanation\n To identify why a user is unable to log in to Salesforce, the administrator should review the login history for the user. The login history shows the date and time of each login attempt, the source IP address, the browser and platform used, the login type (such as username and password or single sign-on), and the status (such as success or failure). The login history can help troubleshoot common login issues such as incorrect username or password, invalid security token, IP restrictions, or login hours violations. Checking the attempted logins by running the setup audit trail, pulling the password history, or resetting the security token for the profile will not help identify why a user is unable to log in. References:\n https://help.salesforce.com/s/articleView?id=sf.monitoring_login_history.htm&type=5",
    },
    {
      content:
        "A user at Northern Trail Outfitters Is having trouble logging into Salesforce. The user's login history shows that this person has attempted to log in multiple times and has been locked out of the organization.\nWhich two ways should the administrator help the user log into Salesforce?",
      options: [
        "A. Log in as the user to unlock the user and reset the password.",
        "B. Reset the password policies to allow the user to login.",
        "C. Reset password on the user's record detail page.",
        "D. Use the unlock button on the user's record detail page.",
      ],
      answer: "C,D",
      title: "Question 102",
      explanation:
        "Explanation\n To help a user who has attempted to log in multiple times and has been locked out of Salesforce, the administrator should reset password on the user's record detail page and use the unlock button on the user's record detail page. Resetting password will generate a new temporary password and send it to the user's email address. Using unlock will restore access for a locked-out user without changing their password or waiting for lockout period to end. Logging in as the user or resetting the password policies will not help a locked-out user log in to Salesforce. References: https://help.salesforce.com/s/articleView?id=sf.users_passwords.htm&type=5\n https://help.salesforce.com/s/articleView?id=sf.users_unlock.htm&type=5",
    },
    {
      content:
        "The administrator at Cloud Kicks has a Custom picklist field on Lead, Which is missing on the Contact when leads are converted.\nWhich two items should the administrator do to make sure these values are populated?\nChoose 2 answers",
      options: [
        "A. Create a custom picklist field on Contact.",
        "B. Update the picklist value with a validation rule.",
        "C. Map the picklist field on the Lead to the Contact.",
        "D. Set the picklist field to be required on the Lead Object.",
      ],
      answer: "A,C",
      title: "Question 103",
      explanation:
        "Explanation\n To make sure the custom picklist field values are populated on contact when leads are converted, you need to create a custom picklist field on contact and map it to the corresponding field on lead.\n References: https://help.salesforce.com/s/articleView?id=sf.convert_lead_mapping.htm&type=5\n https://help.salesforce.com/s/articleView?id=sf.customize_fields.htm&type=5",
    },
    {
      content:
        "An administrator at Universal Containers is reviewing current security settings in the company's Salesforce org.\nWhat Should the administrator do to prevent unauthorized access to Salesforce?",
      options: [
        "A. Disable TLS requirements for sessions.",
        "B. Enable multi factor authentication",
        "C. Customize organization wide default",
        "D. Enable caching and autocomplete on login page",
      ],
      answer: "B",
      title: "Question 104",
      explanation:
        "Explanation\n Multi factor authentication (MFA) is a security feature that requires users to verify their identity using two or more factors when they log in to Salesforce. It can help prevent unauthorized access to Salesforce by adding an extra layer of protection beyond username and password. Enabling MFA can be done by administrators in the security settings or by users in their personal settings. Disabling TLS requirements for sessions, customizing organization wide defaults, or enabling caching and autocomplete on login page are not actions that would prevent unauthorized access to Salesforce; in fact, they may reduce security or have no effect on security at all. References: https://help.salesforce.com/s/articleView?id=sf.security_mfa.htm&type=5",
    },
    {
      content:
        "The administrator at Ursa Major Solar imported records into an object by mistake.\nWhich two tools should be used to undo this import?\nChoose 2 answers",
      options: [
        "A. Weekly Data Export",
        "B. Mass Delete Records",
        "C. Data Loader",
        "D. Data Import Wizard",
      ],
      answer: "B,C",
      title: "Question 105",
      explanation:
        "Explanation\n Mass delete records and data loader are two tools that can be used by Ursa Major Solar administrator undo import records into object mistake. Mass delete records tool allows administrators delete large numbers records meet certain criteria once setup interface; it can used undo import records into object mistake selecting records imported mistake deleting them mass delete records tool setup interface Data loader tool allows administrators import export delete large numbers records using CSV files command line interface API calls; it can used undo import records into object mistake using CSV file contains IDs records imported mistake deleting them data loader tool command line interface API calls Weekly data export data import wizard are not tools undo import records into object mistake because they either export import records but not delete them.\n References: https://help.salesforce.com/s/articleView?id=sf.admin_massdelete.htm&type=5\n https://help.salesforce.com/s/articleView?id=sf.data_loader.htm&type=5",
    },
    {
      content:
        "The administrator at Cloud Kicks writes an assignment rule to send all cases created via email or the web to the Automated Cases Queue Any manually created cases should be owned by the agent creating them, however, the manually created cases now show the administrator as the owner.\nWhat will the administrator find when troubleshooting this issue?",
      options: [
        "A. An escalation rule is changing the case owner on case creation",
        "B. The Assignment Rule checkbox is selected by default.",
        "C. Another assignment rule is giving ownership to the administrator",
        "D. The Owner field is missing on the webform and email template.",
      ],
      answer: "B",
      title: "Question 106",
      explanation:
        "Explanation\n The Assignment Rule checkbox is a checkbox that appears on manual case creation pages when assignment rules are defined for cases. The Assignment Rule checkbox determines whether or not to apply assignment rules to manually created cases. If the Assignment Rule checkbox is selected by default, then any manually created cases will be assigned according to assignment rules instead of being owned by the agent creating them. To prevent this from happening, an administrator can either deselect the Assignment Rule checkbox when creating cases manually; or change the default setting for this checkbox under setup by selecting or deselecting Use active assignment rules by default. References:\n https://help.salesforce.com/s/articleView?id=sf.customize_casesupport_assign.htm&type=5",
    },
    {
      content:
        "What data loss considerations should an administrator keep in mind when changing a custom field type from Text to Picklist?\nChoose 2 answers",
      options: [
        "A. There will be no data loss with use of a global value set.",
        "B. Assignment and escalation rules may be affected.",
        "C. Auto updates will be made to Visualforce references to prevent data loss.",
        "D. Any list view based on the custom field is deleted.",
      ],
      answer: "B,D",
      title: "Question 107",
      explanation:
        "Explanation\n Two data loss considerations when changing a custom field type from Text to Picklist are:\n Assignment and escalation rules may be affected, because the values in the picklist may not match the values that were previously entered in the text field, and the rules may not trigger as expected.\n Any list view based on the custom field is deleted, because the filter criteria for the list view may not be valid for the new field type, and the list view cannot be displayed. There will be no data loss with use of a global value set or auto updates to Visualforce references, because these are not related to changing a custom field type from Text to Picklist. References:\n https://help.salesforce.com/s/articleView?id=sf.fields_changing_type_considerations.htm&type=5",
    },
    {
      content:
        "The sales manager at cloud Kicks approves time off for their employees. They asked the administrator to ensure these requests are seen and responded to by a backup manager while the sales manager is out on vacation.\nWhat should administrator use to fulfill the requirement?",
      options: [
        "A. Delegated approver",
        "B. Two step Approval process",
        "C. Approval history related list",
        "D. Delegated Administrator",
      ],
      answer: "A",
      title: "Question 108",
      explanation:
        "Explanation\n Delegated approver is a feature that should be used to fulfill this requirement. Delegated approver allows users to delegate their approval authority to another user for a specified period of time, such as when they are out on vacation. Users can specify which approval requests they want to delegate and who they want to delegate them to. References: https://help.salesforce.com/s/articleView?id=sf.approvals_delegate.htm&type=5",
    },
    {
      content:
        "Sales reps at Ursa Major Solar are having difficulty managing deals. The leadership team has asked administrator to help sales reps prioritize and close more deals.\nthe administrator configure to help with these issues?",
      options: [
        "A. Einstein Activity Capture",
        "B. Einstein Opportunity Scoring",
        "C. Einstein Search Personalization Einstein Lead Scoring",
      ],
      answer: "B",
      title: "Question 109",
      explanation:
        "Explanation\n To help sales reps prioritize and close more deals, the administrator should use Einstein Opportunity Scoring, which is a feature that assigns each opportunity a score from 1 to 99 based on how likely it is to be won. The score is calculated using historical data and machine learning models, and can help reps focus on the most promising opportunities and take actions to improve their chances of winning. Einstein Activity Capture, Einstein Search Personalization, and Einstein Lead Scoring are not related to opportunity management.\n References: https://help.salesforce.com/s/articleView?id=sf.einstein_sales_oppty_scoring.htm&type=5",
    },
    {
      content:
        "Universal Containers has two sales teams, Sales team A and Sales team B. Each team has their own role in the role hierarchy. Both roles are subordinates of the same Manager role.\nHow Should the administrator share records owned by sales team A with Sales team B?",
      options: [
        "A. Hierarchical sharing",
        "B. Use Manual sharing",
        "C. Criteria based sharing",
        "D. Owner based sharing",
      ],
      answer: "B",
      title: "Question 110",
      explanation:
        "Explanation\n Manual sharing allows record owners to share individual records with other users or groups. This is useful when one-off sharing is needed for a specific situation. Hierarchical sharing, criteria-based sharing and owner-based sharing are not suitable for this scenario because they are based on predefined rules or roles that do not match the requirement. References:\n https://help.salesforce.com/s/articleView?id=sf.sharing_overview.htm&type=5",
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
      title: "Question 111",
      explanation:
        "Explanation\n Roll-up summary fields allow you to calculate the sum of a field from child records related to a parent record.\n References:\n https://help.salesforce.com/s/articleView?id=sf.fields_about_roll_up_summary_fields.htm&type=5",
    },
    {
      content:
        "Northern Trail Outfitters has requested that when the Referral Date field is updated on the custom object Referral Source, the parent object Referral also needs to be updated.\nWhich automation solution should an administrator use to meet this request?",
      options: [
        "A. Lightning Web Component",
        "B. Approval Process",
        "C. Workflow Field Update",
        "D. Process Builder",
      ],
      answer: "D",
      title: "Question 112",
      explanation:
        "Explanation\n Process Builder is an automation tool that allows you to create processes that perform actions based on criteria that you specify. You can use Process Builder to update fields on related records when a record is created or updated. To meet the requirement of updating the parent object Referral when the Referral Date field is updated on the custom object Referral Source, you need to create a process that triggers when a Referral Source record is updated, checks if the Referral Date field has changed, and updates the Referral Date field on the related Referral record. References:\n https://help.salesforce.com/s/articleView?id=sf.process_overview.htm&type=5",
    },
    {
      content:
        "The Sales manager at DreamHouse Realty wants the sales users to have a quick way to view and edit the Opportunities in their pipeline expected to close in the next 90 days.\nWhat should an administrator do to accomplish this request?",
      options: [
        "A. Create a custom report and schedule the sales users to receive it each day as a reminder to update their opportunities.",
        "B. Enable Sales Console and show users how to open a tab for each opportunity in the pipeline that meets the requirements.",
        "C. Create a list view on the Opportunity object and recommend users switch the view to Kanban to edit by drag and drop.",
        "D. Make a new Sales dashboard and add a component that shows all opportunities that meet the criteria.",
      ],
      answer: "C",
      title: "Question 113",
      explanation:
        "Explanation\n A list view is a feature that allows users to filter and display records based on certain criteria and fields. A Kanban view is a feature that allows users to view records as cards organized by columns that represent stages in a process such as opportunity stages or case statuses. Users can switch between list view and Kanban view by clicking on a toggle button on any object tab that supports Kanban view such as opportunities or cases.\n Users can also edit records by dragging and dropping cards from one column to another or by clicking on an inline edit icon on each card. In this case, the administrator can create a list view on the opportunity object that filters opportunities by expected close date in the next 90 days; and recommend users switch the view to Kanban to edit opportunities by drag and drop. References:\n https://help.salesforce.com/s/articleView?id=sf.lex_list_views.htm&type=5\n https://help.salesforce.com/s/articleView?id=sf.kanban_view.htm&type=5",
    },
  ],
});
