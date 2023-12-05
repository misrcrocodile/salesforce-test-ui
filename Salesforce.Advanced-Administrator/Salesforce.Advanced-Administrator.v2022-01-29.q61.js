window.testContent = window.testContent || [];
var testId = "Salesforce.Advanced-Administrator";
var testName = "Salesforce.Advanced-Administrator";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "Salesforce.Advanced-Administrator.v2022-01-29.q61",
  content: [
    {
      content:
        "Universal Containers uses territory management to manage its sales territories. Territory managers and sales reps are at the same role level in the sold hierarchy. Account and opportunity objects are set to private. What record access can territory managers have for accounts and opportunities that are assigned to their territories? Choose 3",
      options: [
        "A. View all opportunities associated with accounts in the territory, regardless of who owns the opportunities",
        "B. Transfer all opportunities associated with accounts in the territory, regardless of who owns the opportunities.",
        "C. Edit all opportunities associated with accounts in the territory, regardless of who owns the opportunities.",
        "D. View edit transfer and delete accounts assigned to the territory, regardless of who owns the accounts.",
        "E. Transfer and delete opportunities assigned to the territory, regardless of who owns the opportunities",
      ],
      answer: "A,C,D",
      title: "Question 1",
      explanation: "",
    },
    {
      content:
        "Universal Container (UC)is considering using Communities. Each partner is associated with a product and will need a separate community?\nSome partners will need to access to more than one community.\nWhat are two consideration an administrator should be aware of?\nChoose 2 answers",
      options: [
        "A. Communitylicense choice of member-based or login-based.",
        "B. Communities licenses are associated with a specific community.",
        "C. The org limit of 100 communities includes active, inactive, and preview communities.",
        "D. The org limit of 100 community does not include inactive or preview communities.",
      ],
      answer: "A,C",
      title: "Question 2",
      explanation: "",
    },
    {
      content:
        "Universal Containers needs to create price books for sales representatives in multiple regions. How can the administrator meet this requirement?",
      options: [
        "A. Add new price book entries to the standard price book for each region",
        "B. Clone the standard price book and create a new price book for each region",
        "C. Delete the products that are not needed by a region from the standard price book",
        "D. Delete the standard price book and create a new price book for each region",
      ],
      answer: "B",
      title: "Question 3",
      explanation: "",
    },
    {
      content:
        "Support agents at Cloud Kicks associate Cases and Bugs so that can report on how many Cases are related to a Bug. A Bug is required to have a Case in order to be created.\nWhich type of object relationship will meet thisrequirement?",
      options: [
        "A. Master-detail",
        "B. Hierarchical",
        "C. Lookup",
        "D. Junction",
      ],
      answer: "A",
      title: "Question 4",
      explanation: "",
    },
    {
      content:
        "The VP of Finance wants to ensure that once an opportunity is closed, it cannot be modified by any user. How can an administrator meet this requirement?",
      options: [
        "A. Set all fields to Read-Only on the standard Closed Opportunity page layout.",
        "B. Set the Do Not Modify Closed Opportunity permission for all profiles.",
        "C. Create an opportunity validation rule with the formula: PRIORVALUE( IsClosed ) = True.",
        "D. Create a workflow field update to update the IsClosed field to True if a closed opportunity is modified.",
      ],
      answer: "C",
      title: "Question 5",
      explanation: "",
    },
    {
      content:
        "How can theadministrator ensure article managers use specified values for custom article fields?",
      options: [
        "A. Use field dependencies on article types.",
        "B. Create a validation rule on the article.",
        "C. Require a field on the page layout.",
        "D. Create different article type for different requirements.",
      ],
      answer: "A",
      title: "Question 6",
      explanation: "",
    },
    {
      content:
        "Universal containers has a workflow rule that sends an email alert to the VP of sales when a large deal is won. The VP is reporting that these emails are not being delivered.\nWhat tool could be used to determine the problem? choose 2",
      options: [
        "A. Email log.",
        "B. Debug log.",
        "C. System audit trail.",
        "D. Workflow monitor.",
      ],
      answer: "A,D",
      title: "Question 7",
      explanation: "",
    },
    {
      content:
        "Universal Containers purchased Field Service Lightning Licenses in Production and wants to make these license available in an active development sandbox with the minimum development impact.\nHow should an administrator create these licenses in the sandbox?",
      options: [
        "A. Use the Match Production Licenses tool.",
        "B. Merge Production andthe sandbox using a template.",
        "C. Submit a Salesforce support case.",
        "D. Refresh the sandbox from production.",
      ],
      answer: "D",
      title: "Question 8",
      explanation: "",
    },
    {
      content:
        "A sales manager cannotview a contact owned by a salesperson. The salesperson is below the sales manager in the role hierarchy. Why is the sales manager unable to view the contact?",
      options: [],
      answer: "",
      title: "Question 9",
      explanation:
        "Contact sharing settings have grant access using hierarchies unchecked",
    },
    {
      content:
        "Which three types of prices should an administrator set for an organization's products?\nChoose 3 answers.",
      options: [
        "A. Discount prices",
        "B. Standard prices",
        "C. Sales prices",
        "D. List prices",
        "E. Product prices",
      ],
      answer: "A,B,D",
      title: "Question 10",
      explanation: "",
    },
    {
      content:
        "Universal Containers sells monthly service subscriptions and wants to ensure their Opportunity report accurately represent the amount of money to be received each month.\nWhich solution anadministrator use to meet this requirement?",
      options: [
        "A. Use product revenue schedules for each revenue period.",
        "B. Use monthly Opportunity reporting snapshot.",
        "C. Use Opportunity formula fields for each reporting period.",
        "D. Use process Builder and Flow to create custom object records",
      ],
      answer: "B",
      title: "Question 11",
      explanation: "",
    },
    {
      content:
        "How can an administrator improve the relevance of search results for support agents searching for knowledge articles to solve articles?\nChoose 3 answers",
      options: [
        "A. Create data categories and assign articles to each category.",
        "B. Create a record type for each data category.",
        "C. Define synonyms for common search terms.",
        "D. Enable feed tracking on all relevant article types.",
        "E. Pre-populate article search filters based on the values of case fields.",
      ],
      answer: "A,C,E",
      title: "Question 12",
      explanation: "",
    },
    {
      content:
        "an administrator has been asked to set up two custom objects named issues and tickets. multiple tickets can be associated with each issue, and each issue may be associated with multiple tickets.\nhow shouldthe administrator set up the relationship between issues and tickets?",
      options: [
        "A. Create a lookup relationship with tickets as the master object.",
        "B. Create a lookup relationship on both thetickets and issues object.",
        "C. Create a junction object with both tickets and issues as master objects.",
        "D. Create a master detail relationship with issues as the master object",
      ],
      answer: "C",
      title: "Question 13",
      explanation: "",
    },
    {
      content:
        "Which two processing steps are triggered when reassigning Account owners using the Mass Transfer too?\nChoose 2 answers",
      options: [
        "A. All manual sharing is removed from the Accounts",
        "B. Only Owner-based sharing rules are recalculated.",
        "C. All Account sharing rules are recalculated.",
        "D. Manual sharing is updated to reflect the new Owner",
      ],
      answer: "C,D",
      title: "Question 14",
      explanation: "",
    },
    {
      content:
        "how can an administrator use the service cloud console to increase the efficiency of support users? choose 3",
      options: [
        "A. enable the service cloud console application in salesforce communities.",
        "B. configure the idea themes page layout with buttons and links to case detail information",
        "C. use publisher actions in case feed to combine the publisher extension menus in a single row.",
        "D. configure it to manage chatter answers cases and live agent chat conversations.",
        "E. customize the softphone to provide a screen pop-up on incoming support calls.",
      ],
      answer: "A,D,E",
      title: "Question 15",
      explanation: "",
    },
    {
      content:
        "The sales operations team has required a new custom object with the\nfollowing requirement:\n. Thesales managers should have full access to all records created\n. The object's sharing default should be set to private.\n. No new sharing rules should be created.\nhow can the system administrator set up the security for this object? choose 2",
      options: [
        'A. Create a Record type with "Modify all" checked, and assign this Record type to the sales manager profile.',
        'B. Add the "modify all" permission to the sales manager profile for the new object',
        'C. create a role for all sales Manager users with "Modify all" checked for the object.',
        'D. Create a permission set for all sales Manager users with "modify all" checkedfor the object.',
      ],
      answer: "C",
      title: "Question 16",
      explanation: "",
    },
    {
      content:
        "Sales representatives are reporting trouble syncing quotes with their related opportunities.\nWhat isa possible explanation for this problem? Choose two",
      options: [
        "A. The quote contains an archived list price.",
        "B. The quote is attached to a closed opportunity.",
        "C. The attached currency is no longer active.",
        "D. The user does not have Edit permissions on the quote.",
      ],
      answer: "C",
      title: "Question 17",
      explanation: "",
    },
    {
      content:
        "An administrator has uploaded a change set from a sandbox to a production organization and would like to add a missing component to thechange set before deployment.\nWhat option does the administrator have to modify the change set? Choose 2 answers.",
      options: [
        "A. Edit the change set in production, add the component, and use the redeploy option.",
        "B. Create a new change set in the sandbox environment, add all the required components and upload it to production",
        "C. Edit the change set in the sandbox environment and upload it to production.",
        "D. Clone the change set in the sandbox environment, add the component and upload it to production",
      ],
      answer: "B,D",
      title: "Question 18",
      explanation: "",
    },
    {
      content:
        "The Marketing Manager at Universal Containers wants to change the column headings for several of the fields on opportunity reports.\nWhat approach should and administrator take to meet the requirements?",
      options: [
        "A. Edit the fields Available for Reports sections in the Opportunities report type to make the changed.",
        "B. User Rename tabs andlabels to change the field labels as needed.",
        "C. Create bucket fields for each field and enter the new column heading in the Bucket Name Field.",
        "D. Build a Custom Report type and use Display As in Edit Layoutsto make the requested changes.",
      ],
      answer: "C",
      title: "Question 19",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants to allow its customers to submit support requests across multiple channels.\nIn which two ways can this be accomplished with Salesforce?\nChoose 2 answers",
      options: [
        "A. Expose the case feeds option on the company's website.",
        "B. Offer a Chat button on the company website.",
        "C. Enable the Service Cloud Console app on the company's website.",
        "D. Enable Chatter Questions in the company's customer Community",
      ],
      answer: "A,B",
      title: "Question 20",
      explanation: "",
    },
    {
      content:
        "The marketing department at universal containers regularly changes the\npage layout requirements for its custom marketing objects. The VP of\nMarketing has asked the administrator for permission to configure only\nthese objects.\nWhat can the administrator do to meet this request?",
      options: [
        "A. Enable the marketing user permission on the user recrord for the VP of Marketing",
        "B. Set up the VP of Marketing as a delegatedadministrator for the custom marketing objects.",
        "C. Grant the VP of marketing the ability to log in as a user who is a system administrator.",
        "D. Create a custom profile with edit permission on the custom marketing objects and assign to the VP of marketing.",
      ],
      answer: "D",
      title: "Question 21",
      explanation: "",
    },
    {
      content:
        "Universal Containers has a private sharing model. Their field service manager wants to edit Cases owned by the service team but is unable to edit Case records.\nWhich option should an administrator use to solve this issue?",
      options: [
        "A. Set the Organization-Wide Default to public read/write for cases and Accounts.",
        "B. Update the manager's profile to include edit access to the Case object.",
        "C. Create a public group with read/write for cases and Accounts.",
        "D. Assign the manager a permission set with edit access to the Case object.",
      ],
      answer: "D",
      title: "Question 22",
      explanation: "",
    },
    {
      content:
        "Universal Containers created a few new fields on the account object as well as a new section on the page layout in the configsandbox. After positive test results, the administrator created and uploaded a change set with the new fields from the sandbox to production. Unfortunately, the administrator forgot to add the page layout.\nWhich two options can the administrator take todeploy the page layout?\nChoose 2 answers.",
      options: [
        "A. Deploy the existing change set. create and deploy a new change set containing the page layout.",
        "B. Add the page layout to the existing change set in the sandbox and upload the change set again.",
        "C. Clone the change set in the sandbox, add the new page layout to it and upload to production.",
        "D. Edit the change set in production to add the new page layout before deploying the change set.",
      ],
      answer: "A,B",
      title: "Question 23",
      explanation: "",
    },
    {
      content:
        "A member of Universal Container's support team is assisting a sales rep in managing a top customer. The sales rep has manually shared an opportunity with the support member in hopes that the support membercan update some of the technical sales fields on the record. But the support member is unable to edit the opportunity.\nWhat is the recommended solution to provide edit access to the opportunity?",
      options: [
        "A. Change the support team member's role to a above the sales rep in the org's role hierarchy.",
        "B. Add the support team member to the opportunity team. Assign read/write access to the member.",
        "C. Create a permission set for opportunity edit and add it tothe support member's user record.",
        "D. Change the Organization Wide Default internal access for opportunity to public read/write.",
      ],
      answer: "D",
      title: "Question 24",
      explanation: "",
    },
    {
      content:
        "A custom object was created at Universal Containers to store information employees will need for their annual reviews. Only the employee should be able to access their records. The administrator has set Organization-Wide Defaults to private for the object. These records are accessible by the employee's manager.\nWhat additional step should be taken to remove the manager's access to these records?",
      options: [
        "A. Uncheck the manual sharing for the custom object on each profile.",
        "B. Remove access to the custom object on the manager's profile.",
        "C. Uncheck grant access using hierarchies in sharing settings.",
        "D. Recalculate the sharing rules in sharing settings.",
      ],
      answer: "D",
      title: "Question 25",
      explanation: "",
    },
    {
      content:
        "Which two types of data should a sales representative accessfrom the Forecasts tab when using Collaborative Forecasts?\nChoose 2 answers.",
      options: [
        "A. Opportunities that make up each forecast amount",
        "B. Forecast amount for each opportunity stage",
        "C. Forecast amount for otherrepresentatives on their team",
        "D. Forecast amount for each forecast category",
      ],
      answer: "B,D",
      title: "Question 26",
      explanation: "",
    },
    {
      content:
        'In order to provide customer support agents with a360 view of the customer, UC wants support agents to continue to have read only access to accounts but allow create and edit access to contacts and cases. the current OWD for contacts is\n"Controlled by parent".\nwhat solution should be implemented?',
      options: [
        "A. Change the OWD of contacts and cases to private and create read/write sharing for all support agents.",
        "B. Change OWD of contacts to public read only and grant create/edit access to cases on support agent profile.",
        "C. Grant create/editaccess to contacts and cases on support agent profile.",
        "D. Create read/write sharing rules to share all contacts to all support agents and grant read only access to cases on agent profile.",
      ],
      answer: "C",
      title: "Question 27",
      explanation: "",
    },
    {
      content:
        "On a monthly basis, an administrator would like to pull data related to service contracts from Salesforce to store elsewhere. Which two ways can an administrator accomplish this? Choose 2 answers",
      options: [
        "A. Use Data Exporter to export the data each month.",
        'B. Use the"Object Export" feature under Data Management',
        'C. Configure the "Schedule Export" options under Data Export',
        "D. Use Data Loader to export the data each month.",
      ],
      answer: "C,D",
      title: "Question 28",
      explanation: "",
    },
    {
      content:
        "an administrator wants to report on activities related to a specific account over the past 18 months but some of these activities have been archived.\nhow can the administrator obtain a report with the correct data? choose 3",
      options: [
        "A. Export archived activities using the data loader.",
        "B. Restore archived activities from the activity archive object.",
        "C. open a case with support to extend archived days.",
        "D. use the weekly data export to obtain the archived activities.",
      ],
      answer: "A",
      title: "Question 29",
      explanation: "",
    },
    {
      content:
        "UC has engaged a developer to create a custom Apex Rest service that is used by external systems to manipulate data in salesforce.\nwhichtwo methods can the administrator use to grant permission to use the Apex Rest service to the users of the external systems? choose 2 answers",
      options: [
        "A. Create a permission set that grants the API enabled administrative permission, and assign it to the users for the external systems.",
        "B. Update the profile for the external systems to include access to the Remote site settings that correspond to the apex Rest services.",
        "C. Create a Connected App and a new permission set to grant access to the Apex Rest services.Assign the permission set to the users for the external systems.",
        "D. create a permission set that grants access to the apex classes and grants the use apex Rest services permission and assign it to the users for the external systems.",
      ],
      answer: "B,C",
      title: "Question 30",
      explanation: "",
    },
    {
      content:
        "What type of process can the system administrator set for an organization's products?\nChoose 3 answers",
      options: [
        "A. List prices",
        "B. Discount prices",
        "C. Product prices",
        "D. Sales prices",
        "E. Standard prices",
      ],
      answer: "A,D,E",
      title: "Question 31",
      explanation: "",
    },
    {
      content:
        "The VP of Sales wants to require that the Next Step Field is always updated when an opportunity stage is changed. How can this process be automated?",
      options: [
        "A. Create a workflow rule with the following formula: AND( ISCHANGED(StageName), NOT(ISCHANGED(NextStep))",
        "B. Create a validation rule with the following formula: AND( ISCHANGED(ISPICKVAL(StageName)), NOT(ISCHANGED(NextStep)))",
        "C. Create a validation rule with the following formula: AND( ISCHANGED(StageName), NOT(ISCHANGED(NextStep))",
        "D. Create a workflow rule with the following formula: AND( ISCHANGED(ISPICKVAL(StageName)), NOT(ISCHANGED(NextStep))",
      ],
      answer: "C",
      title: "Question 32",
      explanation: "",
    },
    {
      content:
        "The VP of sales at Universal Containers has reported that users are changing the stage of opportunity records that theydo not own. The VP wants only the owner of an opportunity to be able to change the stage of an opportunity-wide Default are set to pubic read/write.\nWhich validation rule should the administrator use to allow only the record owner to edit the stage field?",
      options: [
        "A. AND(ISCHANGED(StageName) < >; $user.id)",
        "B. NOT(PRIORVALUE(StageName) , Ownerid = $user.id)",
        "C. NOT(ISCHANGED(StageName) , ownerid = $user.id)",
        "D. AND(PRIORVALUE (StageName), Ownerid < >; $user,id)",
      ],
      answer: "A",
      title: "Question 33",
      explanation: "",
    },
    {
      content:
        "Universal Containers created and tested a new approval process in a developer sandbox. While the approval routings were correct, the approvers were NOT receiving the notification emails.\nWhat could be the cause of this issue?",
      options: [
        "A. Email deliverability CANNOT be changed in a sandbox.",
        "B. Approvals can only be tested in a fail or partial data sandbox.",
        "C. The email relay is disabled in the sandbox.",
        "D. The email address for the users in the sandbox are invalid.",
      ],
      answer: "D",
      title: "Question 34",
      explanation: "",
    },
    {
      content:
        "What are two capabilities of Salesforce Customer Community members?\nChoose 2 answers.",
      options: [
        "A. They find crowdsourced answers and Knowledge articles to resolve asupport issue.",
        "B. They use the ideas tab to submit, comment on, and vote for ideas.",
        "C. They must belong to a company's internal community to participate in Chatter collaboration.",
        "D. Their reputation levels must be the same across all communities of which they are members.",
      ],
      answer: "B,C",
      title: "Question 35",
      explanation: "",
    },
    {
      content:
        "Universal containers would like to ensure that when an opportunity stage is closed lost the reason is captured in a custom reason lost field before the record canbe saved.\nWhat is the recommended approach to meet this requirement?",
      options: [
        "A. Create a workflow rule that fires on the closed lost stage and populates thereason lost field.",
        "B. Create a trigger that requires reason lost to be populated once the opportunity stage is closed lost.",
        "C. Create a page layout for closed lost opportunities and make reason lost a required field.",
        "D. Create a validation rule that requires reason lost to be populated once the opportunity stage is closed lost.",
      ],
      answer: "D",
      title: "Question 36",
      explanation: "",
    },
    {
      content:
        "When a lookup relationship is created between two objects, which three options can the administrator select to help manage situations when a lookup record is deleted?\nChoose 3 answers.",
      options: [
        "A. Delete the related record also.",
        "B. Prompt the user to enter another record to resolve the lookup relationship.",
        "C. Notify the record owner.",
        "D. Do not allow deletion of a lookup record that is part of a lookup relationship.",
        "E. Clear the value of the lookup field.",
      ],
      answer: "A,D,E",
      title: "Question 37",
      explanation: "",
    },
    {
      content:
        "A user has pore with read-only permissions for the case object.\nHow can the user be granted edit permission for cases?",
      options: [
        "A. Create a public group withedit permissions for the case object.",
        "B. Create a sharing rule on the case object with read/write level of access.",
        "C. Add the user in a role hierarchy above the users with edit permissions on the case object.",
        "D. Create permission set with edit permissions for the case object.",
      ],
      answer: "D",
      title: "Question 38",
      explanation: "",
    },
    {
      content:
        "How can an administrator meet this requirement' Choose 2 answers",
      options: [
        "A. Add the default content type to the selected Content Types list.",
        "B. Select the 'Restrict the content types available in the library\" checkbox.",
        "C. Add the Related Contentrelated list to the page layout for the associated object",
        "D. Add members to the library who are users or members of public groups.",
      ],
      answer: "B,D",
      title: "Question 39",
      explanation: "",
    },
    {
      content:
        "Universal Containers has implemented a custom process related to products. They have a custom object called Draft Product. Once a Draft Product is approved, automation is needed to create a new Product record and delete the original Draft Product record.\nWhich two options would meet this requirement?\nChoose 2 answers",
      options: [
        "A. Process Builder that calls a Flow",
        "B. Process Builder that calls a workflow Rule",
        "C. Flow that calls a Process Builder",
        "D. Process Builder that calls Apex",
      ],
      answer: "A,D",
      title: "Question 40",
      explanation: "",
    },
    {
      content:
        "Universal Containers has a workflow rule that sends and email alert to the VP of Sales when a large deal is won.\nThe VP is reporting that these emails are not being delivered. Which two tools should be used to determine the problem?",
      options: [
        "A. Debug logo",
        "B. System audit trail",
        "C. Workflow monitor",
        "D. Email log",
      ],
      answer: "A,D",
      title: "Question 41",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants to allow community visitors to submit support cases without logging into the community.\nWhich two features are required to implement this request?\nChoose 2 answers",
      options: [
        "A. Case feed actions",
        "B. web-to-case",
        "C. Caseassignment rules",
        "D. New case quick action",
      ],
      answer: "B,D",
      title: "Question 42",
      explanation: "",
    },
    {
      content:
        "Universal Containers has a Positions object that represents job Positions and aApplications object that represent people that have applied to the position. The Job Application object has a lookup to position. They want to run a report that shows all Positions that do NOT have any child job Applications.\nWhich solution would meet therequirements?",
      options: [
        "A. Use the standard Job Application with Position report type.",
        "B. Use the standard Position without job Application report type.",
        "C. Use a custom report type that only displays job Application without Positions.",
        "D. Use the standard Position report type with a cross filters.",
      ],
      answer: "C",
      title: "Question 43",
      explanation: "",
    },
    {
      content:
        "Which two actions could the delegated administrator complete after delegated administration is granted for a custom object? Choose 2 answers",
      options: [
        "A. Change the relationship with another object.",
        "B. Add a custom picklist field to the object",
        "C. Change organization-wide snaring rules for the object.",
        "D. Create a custom tab for the object",
      ],
      answer: "B,D",
      title: "Question 44",
      explanation: "",
    },
    {
      content:
        "Universal Containers uses a custom object to track customer complaints. The company wants to have a field on the custom object where they can include a reference to another complaint.\nWhat types of relationship can be used to accomplish this?",
      options: [
        "A. Master-detail",
        "B. Lookup",
        "C. Junction",
        "D. Hierarchical",
      ],
      answer: "B",
      title: "Question 45",
      explanation: "",
    },
    {
      content:
        "Cloud Kicks wants to understand the implicationsof archived Activities.\nWhich two considerations should an administrator communicate regarding archived Activities?\nChoose 2 answers.",
      options: [
        "A. Events created more than 365 days ago are archived.",
        "B. Archived activities are deleted after 365 days.",
        "C. Closed tasks created more than 365 days ago with no due date arearchived.",
        "D. Events that ended more than 365 days ago are archived.",
      ],
      answer: "A,B",
      title: "Question 46",
      explanation: "",
    },
    {
      content:
        "A sales manager cannot view a contactowned by a salesperson. The salesperson is below the sales manager in the role hierarchy. Why can't the sales manager view the contact?",
      options: [
        "A. The contact is not linked to an account.",
        "B. Contact sharing settings are Private.",
        "C. Contact sharing settings have Grant Access Using Hierarchies unchecked.",
        "D. The contact has not been manually shared with the manager.",
      ],
      answer: "A",
      title: "Question 47",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants to use the Omni Channel routing feature in Service Cloud. They are using assignment rules and want to ensure that the routing chosen meets the requirements.\nWhat should an administratortake into consideration before implementation?",
      options: [
        "A. The least active routing model looks for the agent who has the largest maximum work capacity.",
        "B. If there is a tie in the Omni-Channel routing logic, Omni-Channel routes the work to the agent who most recently received a work item.",
        "C. Assignment rules are triggered when Omni-Channel routing routes a work item to an agent and the agent accepts the work.",
        "D. Assignment rules are triggered when an agent accepts the work and edits and saves the work.",
      ],
      answer: "D",
      title: "Question 48",
      explanation: "",
    },
    {
      content:
        "Which two requirements must be met for a user to view knowledge Articles within a Salesforce organization?\nCheck 2 answers.",
      options: [
        "A. The user must be assigned a Salesforce Knowledge license.",
        "B. The user's profile must have the read permission for the at lease one article type.",
        "C. The user must have themanage articles permission on the profile.",
        "D. The user must have access to the articles tab.",
      ],
      answer: "B,D",
      title: "Question 49",
      explanation: "",
    },
    {
      content:
        'The inside sales manager at Universal Containers wants to be able to report on how long leads have a Lead Status of "Open" before the status changes to another value. Additionally, the sales team has requested the status value be changed with fewer clicks. What should the administrator do to meet this requirement?',
      options: [
        "A. Use a quick action to change the status value and a workflow rule to update a date field.",
        "B. Use a formula field to calculate the difference between the current and created data when the status changes through inline editing.",
        "C. Turn on field history tracking for the lead status field and create a report based on that field.",
        "D. Use a workflow rule that sends an email when the Lead Status is changed and an approval process to update the status.",
      ],
      answer: "B",
      title: "Question 50",
      explanation: "",
    },
    {
      content:
        "Universal Containers' support team needs to track service level agreements for customers. Today, they manually look up contracts by name when a customer calls.\nHow should an administrator automate this process?",
      options: [
        "A. Create a private Chatter group for customers with high-priority service level agreements.",
        "B. Configure a workflow rule that sends an email alert of old cases to the support manager.",
        "C. Enableentitlements and add the tabs for entitlements and service contracts.",
        "D. Enable Case Feed and add a Contracts custom publisher to the Case Feed layout.",
      ],
      answer: "C",
      title: "Question 51",
      explanation: "",
    },
    {
      content:
        "North Trail Outfitters want to automate the assignment of territories to opportunities.\nWhich two features are needed to meet this requirement.",
      options: [
        "A. Create an Apex Class",
        "B. Enable opportunity owner-based sharing",
        "C. Create Assignment Rules",
        "D. Enable filter-based Opportunity Territory Assignment",
      ],
      answer: "C,D",
      title: "Question 52",
      explanation: "",
    },
    {
      content:
        "An Administrator has been asked to grant read, create and edit access to the product object for users who currently have the standard marketing user profile.\nWhich two approaches could be used tomeet this request? Choose 2 answers.",
      options: [
        "A. Change the access levels in the marketing user standard profile to read, create and edit for the product object",
        "B. Create a permission set with read, create and edit access for the product object and assign it to the marketing users",
        "C. Create a permission set with read and write access for the product object and assign it to the marketing users",
        "D. Create a new profile for the marketing users and change the access levels to read, create and edit for the product object",
      ],
      answer: "B,D",
      title: "Question 53",
      explanation: "",
    },
    {
      content:
        "After an Administrator has refreshed a sandbox, what behavior should users expect to see in the sandbox?",
      options: [
        "A. Users in production will now be able to receive emails sent out from the sandbox.",
        "B. Users in the sandbox that do not exist in production will no longer exist in the sandbox.",
        "C. All new data since the last refresh will be added to the existing information in the sandbox",
        "D. Metadata changes since the last refresh will be added to the existing information m the sandbox",
      ],
      answer: "C",
      title: "Question 54",
      explanation: "",
    },
    {
      content:
        "The sales operations team at Universal Containers wants to ensurethat when an opportunity is won the custom shipment date field is populated.\nHow should the administrator configure salesforce to meet this requirement?",
      options: [
        "A. Add a default value to the shipment date using the Today() function.",
        "B. Make the shipment date fieldrequired on the opportunity page layout.",
        "C. Create a dependency between the stage and shipment date fields.",
        "D. Create a validation rule on the opportunity using the ISBLANK() function.",
      ],
      answer: "D",
      title: "Question 55",
      explanation: "",
    },
    {
      content:
        "Universal Container has an active process that assigns a task to sales operations once an opportunity is won.\nSales Ops is reporting that he tasks are missing.\nWhich two tools should the administrator use to determine the problem?\nChoose 2 answers",
      options: [
        "A. Paused flow interview list",
        "B. Monitor time based workflow",
        "C. Debug Log",
        "D. Email Log",
      ],
      answer: "C,D",
      title: "Question 56",
      explanation: "",
    },
    {
      content:
        "What should an administrator consider when setting up and maintaining salesforce knowledge? choose 3",
      options: [
        "A. Enabling knowledge on a user record requires licensing.",
        "B. solution category browsing must be enabled in solution settings.",
        "C. Data category visibility is assigned through roles and profiles.",
        "D. knowledge settings must be configured to allow users to create an article from a case",
        "E. Article version numbers must be assigned by a knowledge manager for tracking.",
      ],
      answer: "A,C,D",
      title: "Question 57",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants to track expense reports and expense line items. Values from expense line item records need to beaggregated and displayed on the expense record. What type of relationship should an administrator use to ensure that expense line items can be aggregated?",
      options: [
        "A. Hierarchical",
        "B. Roll-up summary",
        "C. Master-detail",
        "D. Lookup",
      ],
      answer: "C",
      title: "Question 58",
      explanation: "",
    },
    {
      content:
        "An administrator has been askedto create a replica of the production organization. The requirement states that existing fields, page layouts, record types, objects, and data contained in the fields and objects need to be available in the replica organization. How can the administrator meet the requirement?",
      options: [
        "A. Create a metadata sandbox",
        "B. Create a Full Sandbox",
        "C. Create a developer sandbox",
        "D. Create a configuration-only Sandbox",
      ],
      answer: "B",
      title: "Question 59",
      explanation: "",
    },
    {
      content:
        "the vp of sales noticed that sales representatives are extending their close dates to the future on their opportunities.\nhow can the sales managers determine how many times close dates are being changed? choose 2",
      options: [
        "A. use workflow to update a count field when the close date fieldhas changed using the criteria closedate> PRIORVALUE(closedate)",
        "B. have a developer create an apex trigger to update a count field when a change to the close date field has been made.",
        "C. Add a formula field on the page layout of the opportunity with the default value set to PRIORVALUE(close date).",
        "D. use workflow to update a count field when the close date field has changed using the criteria ISCHANGED(closedate).",
      ],
      answer: "A,D",
      title: "Question 60",
      explanation: "",
    },
    {
      content:
        "Universal Containers wants to create a Feedback__c custom object related to Account and ensure all feedback records are owned by the same user as the Account owner.\nHow should an administrator relate Feedback__c to Account?",
      options: [
        "A. Create a junction object between Account and Feedback__c.",
        "B. Create a lookup Account field and filter on Feedback__c.",
        "C. Create a hierarchical field on Feedback__c.",
        "D. Create a master-detail field on Feedback__c.",
      ],
      answer: "C",
      title: "Question 61",
      explanation: "",
    },
  ],
});
