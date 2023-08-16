window.testContent = window.testContent || [];
var testId = "Salesforce.Sharing-and-Visibility-Designer";
var testName = "Salesforce.Sharing-and-Visibility-Designer";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "Salesforce.Sharing-and-Visibility-Designer.v2020-08-19.q78",
  content: [
    {
      content:
        "Universal Containers (UC) has a requirement to expose a web service to their business partners. The web service will be used to allow each business partner to query UC's Salesforce instance to retrieve the status of orders. The business partner should only be allowed access to orders for which the business partner is the fulfillment vendor. The Architect does not want the business partners to utilize the standard APIs and would prefer a custom API be developed. Which three design elements should the Architect consider in order to ensure the data security of the solution?\n       Choose 3 answers",
      options: [
        'A. Develop a custom Apex web service using the "With Sharing" keyword.',
        "B. Develop a custom Apex web service with a fulfillment ID input attribute",
        "C. Provide each partner with their own Salesforce login set to API Enabled on the profile.",
        "D. Query the Orders object with Dynamic SOQL based upon the fulfillment ID.",
        "E. Set the Orders object's sharing settings to Private in the Org-Wide Defaults",
      ],
      answer: "A,D,E",
      title: "Question 1",
    },
    {
      content:
        "Universal Containers has requirement for the Architect to develop Apex Managed Sharing code for the custom Job object. The sharing settings for the Job object are set to Private.\n       When assigning access level for the record, which two lines of code will cause a DML exception on insert to the database?\n       Choose 2 answers",
      options: [
        "A. Objectname.AccessLevel='Edit'",
        "B. Objectname.AccessLevel='None'",
        "C. Objectname.AccessLevel='Read'",
        "D. Objectname.AccessLevel='All'",
      ],
      answer: "B,D",
      title: "Question 2",
    },
    {
      content:
        "Universal Containers (UC) has 200 distributors that use Partner Community Licenses.\n       Partners cannot see each other's data, but UC is also trying to give more visibility to certain individuals at a distributor. Which scalable solution would an architect recommend that will give users in the partner manager role access to all Case and Container records owned byother partner managers and partner users (but not the partner executive) at the same distributor?",
      options: [
        "A. Give Super User permission to the partner manager users.",
        "B. Create Sharing sets.",
        "C. Create ownership-based sharing rules for your distributors.",
        "D. Create a permission set granting the View All permission to Case and Container records.",
      ],
      answer: "A",
      title: "Question 3",
    },
    {
      content:
        "Universal Containers (UC) is implementing Sales Cloud. During the final quarter of the financial year, sales managers help each other close deals. They requested a solution in Salesforce to allow them to share opportunities with other sales managers from different teams as needed. They also requested that sharing deals should expire automatically two weeks after the new fiscal year starts.\n       Which two options to propose a solution to meet the requirements? Choose 2 answers",
      options: [
        "A. Opportunity team to share opportunities with sales managers.",
        "B. Sharing Rules to share opportunities with sales managers.",
        "C. Scheduled Apex job to remove access.",
        "D. Apex Sharing to share opportunities with sales managers.",
      ],
      answer: "A,C",
      title: "Question 4",
    },
    {
      content:
        "Universal Containers keeps product brochures in Salesforce as files. Sarah shares a public Unit to a product brochure with potential customers during a meeting. She wants to ensure they do not have access to the file after the meeting.\n       How should Sarah accomplish this?",
      options: [
        "A. Rename the file.",
        "B. Move the file to another folder",
        "C. Delete the public link.",
        "D. Delete the file.",
      ],
      answer: "C",
      title: "Question 5",
    },
    {
      content:
        "Which of the following is used to encrypt a variety of widely used standard fields, along with some custom fields and many kinds of files.",
      options: ["A. Shield Encryption."],
      answer: "A",
      title: "Question 6",
    },
    {
      content:
        "Universal Health is planning to store patient notes in Salesforce. Patient notes consist of long text notes taken by a use to document phone calls with a patient.\n       A date audit has identified that these notes can contain Personally Identifiable Information (PII) and Personal Health Information (PHI). The regulatory requirements state that this data must be encrypted at rest as well as in transit.\n       What should the Architect do in order to make sure Universal Health stays compliant?",
      options: [
        "A. Use an Apex trigger and the Apex Crypto class to encrypt patient notes as soon as they are saved to Salesforce.",
        "B. No action is required; all Salesforce data is encrypted at rest as part of Salesforce's standard trust measures.",
        "C. Enable Salesforce Shield Platform Data Encryption and mark the patient notes field as encrypted.",
        'D. Create a new Custom Field of type "Text (Encrypted)" and move the patient notes data into the new field.',
      ],
      answer: "C",
      title: "Question 7",
    },
    {
      content:
        "Universal Containers (UC) implemented Sales Cloud and requested that sales agents have access to products the company sells and be able to create opportunities for its customers.\n       What should the Organization-Wide Defaults (OWD) be for pricebook?",
      options: [
        "A. View",
        "B. Pubic Read Write",
        "C. Public Read Only",
        "D. Use",
      ],
      answer: "D",
      title: "Question 8",
    },
    {
      content:
        "The sales manager in Japan have asked the sales manager in Australia to assist them with closing their deals.\n       How are these requirements achieved?",
      options: [
        "A. Assign the sales manager View All on the opportunity object.",
        "B. Create ownership-based sharing rule.",
        "C. Use opportunity teams to automatically add the sales manager as a team member.",
        "D. Use sharing set to give the sales manager access to the deals.",
      ],
      answer: "B",
      title: "Question 9",
    },
    {
      content:
        "Universal Containers (UC) operates worldwide with offices in more than 100 regions in 10 different countries and has established a very complex role hierarchy to control data visibility. In the new fiscal year UC is planning to reorganize the roles and reassign accounts owners.\n       Which three features could an architect recommend to avoid problems on this operation? Choose 3 answers",
      options: [
        "A. Skinny table",
        "B. Partition data using Divisions",
        "C. Parallel Sharing Rule recalculation",
        "D. Deferred Sharing Recalculation",
        "E. Granular Locking",
      ],
      answer: "C,D,E",
      title: "Question 10",
    },
    {
      content:
        "Universal Containers has implemented a community for its customers using the Customer Community sense type. They have implemented a custom object to store service requests that has a look up to the account record. The Organization Wide Default External Access for the service request object is set to Private. Universal Containers wants their customers to be able to see service requests for their account through the community Customers should not see service requests for other accounts. What Salesforce feature can the Architect use to implement this?",
      options: [
        "A. Use a Sharing Rule to share service requests to the community user based on their role.",
        "B. Use Apex Managed Sharing to share service requests related to the account to the appropriate community users.",
        "C. Use a Sharing Set to share service requests related to the account based on the community user's profile.",
        "D. Use manual sharing to share the service requests manually when a new community user is added.",
      ],
      answer: "C",
      title: "Question 11",
    },
    {
      content:
        "A sales rep at Universal Containers (UC) has manually shared an Opportunity record with internal pre-sales users. After some time, the sales rep moved to another position and all opportunities records that were owned were transferred to a new sales rep. What happened to the internal pre-sales users access to the opportunity?",
      options: [
        "A. They still have access to the record due to implicit sharing.",
        "B. They will no longer have access to the record.",
        "C. They still have access to the record due to inherited sharing.",
        "D. They still have access to the record due to team access.",
      ],
      answer: "B",
      title: "Question 12",
    },
    {
      content:
        "The architect has a requirement to create a criteria-based sharing rule based on the customer Social.. up the rule in Contact Sharing, the field is not shown on the list of available field.\n       What might cause this?",
      options: [
        "A. The architect does not have permission to Compliance fields.",
        "B. The field has been configured for encryption.",
        "C. fields with validation rules are not available for sharing rules.",
        "D. The architect's profile does not have field level Security (FLS) for this field.",
      ],
      answer: "B",
      title: "Question 13",
    },
    {
      content:
        "At Universal Containers there is a team of auditors distributed through the organization that all need access to high-value Opportunities.\n       With a private sharing model, which two option should an architect recommend when designing a solution for this requirement?\n       Choose 2 answers",
      options: [
        "A. Put the auditors as the highest level of the role hierarchy.",
        "B. Add the auditors to the default Opportunity Team.",
        "C. Create a public group and assign the Auditors to the group.",
        "D. Create a criteria-based sharing rule to give access to the public group for high-value Opportunities.",
      ],
      answer: "C,D",
      title: "Question 14",
    },
    {
      content:
        "Universal Containers keeps product brochures in Salesforce as files. Sarah shares a public link to a product during a meeting. She wants to ensure they do not have access to the file after the meeting.\n       How should Sarah accomplish this?",
      options: [
        "A. Delete the file.",
        "B. Delete the public link.",
        "C. Move the file to another folder",
        "D. Rename the file.",
      ],
      answer: "B",
      title: "Question 15",
    },
    {
      content:
        "Universal Containers would like to customize the security and sharing features of Salesforce Account Teams. They have decided to implement a Custom Account Team object. They would like the new enhancement to include all of the features of the existing account team, but also utilize Apex and Visualforce on the custom Account Team object.\n       Which two different approaches should the Architect consider when designing this enhancement?\n       Choose 2 answers",
      options: [
        "A. The need to synchronize the AccountTeamMember object with the Custom Account Team object data.",
        "B. The need to dynamically create Criteria-Based Sharing rules with Custom Account Team object data.",
        "C. The need to maintain the Account_share object based upon the Custom Account Team object data.",
        "D. The need to customize Account screens in Visualforce, as the Account_share object cannot be maintained programmatically.",
      ],
      answer: "A,C",
      title: "Question 16",
    },
    {
      content:
        "The architect at Universal Containers is trying to ensure that security vulnerabilities are not present within the Salesforce organization.\n       What two tests should the architect verify?\n       Choose 2 answers",
      options: [
        "A. Test Cross-Site Scripting on Apex queries.",
        "B. Test Cross-Site Scripting on custom pages.",
        "C. Test for invalid user access attempts.",
        "D. Test for SOQL Injection.",
      ],
      answer: "B,D",
      title: "Question 17",
    },
    {
      content:
        "Susan posts a file to the chatter fees for a record of an object which OWD is private. Which two statements accurately describe who can view the file by default?\n       Choose 2 answers.",
      options: [
        "A. Susan and users with a shared chatter post link to the file.",
        "B. Susan only.",
        "C. Susan and users with access to the record.",
        "D. Susan and users with the View All Data permission.",
      ],
      answer: "C,D",
      title: "Question 18",
    },
    {
      content:
        "Besides their own team accounts, sales managers at Universal Container need to have READ access to all other countries.\n       Role hierarchy was implemented accordingly (based on countries) but a Sales manager in the US comp records of the same segment in Canada.\n       What should be done to grant access in a proper way?",
      options: [
        "A. Create a public group and include all accounts of the same segment and grant access through.",
        "B. Create owner-based sharing rule to grant access to account records that have the same segment.",
        "C. Create criteria-based sharing rule to grant access to account records that have the same segment.",
        "D. Change the role hierarchy and put all the sales managers in the US and Canada as the same role.",
      ],
      answer: "B",
      title: "Question 19",
    },
    {
      content:
        "After testing and deploying a new trigger that does creates a related order when a opportunity is closed, the Architect begins complaints of permission error messages appearing when closing an opportunity.\n       How did this error occur?",
      options: [
        "A. The trigger should be using RunAs() when creating the order.",
        "B. Trigger is using IsCreateable() Apex method and the user doesn't have create permission on the Oder object.",
        "C. The trigger handlers class does not use any sharing keywords and the user not have access to the orders related to the opportunity.",
        "D. The trigger handler class is using ''with sharing'' and the user does not have access to the orders related to the opportunity.",
      ],
      answer: "A",
      title: "Question 20",
    },
    {
      content:
        "Universal Containers has set Partners users who will see records owned by partner users in roles below them in the hierarchy of which roles?",
      options: ["A. Executive, Manager, and User"],
      answer: "A",
      title: "Question 21",
    },
    {
      content:
        "The Finance team at Universal Containers usually does not need access to Account and Contract records A .. given Opportunity access for a big deal to help with tax calculation. She can now also access Account and C..\n       Which two reasons could be causing this issue? Choose 2 answers",
      options: [
        "A. Account records can be access due to role hierarchy.",
        "B. Contact records can be accessed due to implicit sharing from Opportunity.",
        "C. Contact records can be accessed due to implicit sharing from Account.",
        "D. Account records can be accessed due to implicit sharing from Opportunity.",
      ],
      answer: "C,D",
      title: "Question 22",
    },
    {
      content:
        "Which two options can be selected to share data with when creating a sharing rule?\n       Choose 2 answers",
      options: ["A. Roles", "B. Users", "C. Public Groups", "D. Profiles"],
      answer: "A,C",
      title: "Question 23",
    },
    {
      content:
        "Which three advanced tools can Salesforce enable for large-scale role hierarchy realignments in organizations with large data volumes?\n       Choose 3 answers.",
      options: [
        "A. Skinny Table Indexing",
        "B. Granular Locking",
        "C. Partitioning by Divisions",
        "D. Deferred Sharing Calculation",
        "E. Parallel Sharing Rule Recalculation",
      ],
      answer: "A,C,D",
      title: "Question 24",
    },
    {
      content:
        "Universal Containers has selected a small and diverse group of users to review Inactive accounts. Given the Private sharing model, a public group was created and made available to this group of users. A sharing rule was created to make inactive Accounts visible to the public group. However some of these users are reporting they don't see any of the Accounts that were shared with the public group.\n       what is the underlying Issue for these users?",
      options: [
        "A. The users are In profiles that have no access to the Account object.",
        "B. The Accounts ire owned by users higher In the role hierarchy.",
        "C. The page layout assigned to these mart to different than the Account owner",
        "D. The users have a permission set that only allow Accounts in \"Active' status.",
      ],
      answer: "A",
      title: "Question 25",
    },
    {
      content:
        "Universal Containers (UC) has Affiliates who sell containers in countries where UC does not have a local office. UC has leveraged the Partner Community to manage the sales cycle. One of their affiliates has exponentially grown in the last years and restructured its internal sales team with the following structure:\n       Sales VP ...> Direct of sales ..> Sales Manager ..> Sales Reps\n       What is the main problem a Salesforce Architect will face to provide a solution?",
      options: [
        "A. The Channel manager Role can not be shared with Partner Community.",
        "B. Super User does not work in Partner Community",
        "C. Partner Community does not support Role Hierarchy.",
        "D. Partner User Roles are limited to three levels.",
      ],
      answer: "D",
      title: "Question 26",
    },
    {
      content:
        "Universal Containers has set Account Sharing to Private with Account Teams enabled. Which two user groups can add team members on the Account? Choose 2 answers",
      options: [
        "A. The user specified as the Manager on the Owner's User record",
        "B. The current Account Owner can add team members.",
        "C. Someone above the Account Owner in the Role Hierarchy with read access",
        "D. Any Account Team Member with read access on the Account",
      ],
      answer: "C",
      title: "Question 27",
    },
    {
      content:
        "Universal Containers has created a Reimbursement Custom Object to capture requests for reimbursement of expenses related to office supplies. The Reimbursement requests are sometimes sensitive and the Team Leads should not have access to the Reimbursement records submitted by the Users in the Call Center Agent role. The Director of Support will require access to all Reimbursement records. The role hierarchy is set as follows: Call Center Agent role reports to Team Lead role, which Reports to the Director of Support. Which steps would the Architect take to ensure proper sharing in this Role Hierarchy structure assuming Private Sharing Setting for the Reimbursement Object?",
      options: [
        "A. Use an Approval Process to change the owner of the Reimbursement record upon submission to the Director of Support",
        'B. Leave the Reimbursement Object in "Deployed" Status and set the Director of Supports Profile to "View All" in the object permissions.',
        "C. The sharing scenario described will occur without any special configuration choices being made by the Architect",
        "D. Disable Grant Access Using Hierarchies for the Object and create a Sharing Rule to enable sharing to the Director of Support",
      ],
      answer: "D",
      title: "Question 28",
    },
    {
      content:
        "Universal containers (UC) service reps are assigned to a profile which has ''View All'' in Case object..\n       To make sure service reps have access to all relevant information to attend to customer requests, which Architect consider?\n       Choose 2 answers",
      options: [
        "A. Service reps will NOT able to access to Contact records if they are controlled by Parent.",
        "B. Service reps will NOT able to access to Contact records because Account OWD is private",
        "C. Service reps will be able to access to Contact records if they are Controlled by Parent.",
        "D. Service reps will be able to access to Contact records due to Implicit Sharing.",
      ],
      answer: "C",
      title: "Question 29",
    },
    {
      content:
        'Universal Containers (UC) has 600 sales reps. UC has rollout plan to deploy salesforce in 3 weeks. At the end of the second week, they received a "User Role Limit Exceeded" error.\n       After investigation, they discovered that during the user provisioning process, a new role was generated for every new user.\n       Which two recommendations could solve this problem?\n       Choose 2 answers.',
      options: [
        "A. Create an Apex class to replace the User Roles by generic one as soon as they are created.",
        "B. Review the user provisioning process to not automatically create a user role for any new user.",
        "C. Contact salesforce support and request to increase the number of users' roles allowed.",
        "D. Remove role hierarchy from salesforce org and control the record access using apex managed sharing.",
      ],
      answer: "B,C",
      title: "Question 30",
    },
    {
      content:
        "An External Object is created to show Invoices from an external accounting system. When viewing the External Object, a user should only access invoice records the user is authorized to see.\n       What two actions are required to achieve the above requirement? Choose 2 answers",
      options: [
        "A. Create an owner based sharing rule to grant visibility to the Invoice object.",
        "B. Restrict access to data in the accounting system.",
        "C. Setup External Object to use OAuth to connect to the Accounting system.",
        "D. Grant access to the External Object to only the Account Manager profile.",
      ],
      answer: "B,C",
      title: "Question 31",
    },
    {
      content:
        "To grant Universal Containers sales manager access to shipment records properly, it was necessary to leverage Apex managed sharing. The IT team is worried about improper access to records.\n       Which two features and best practices should a Salesforce architect recommend to mitigate this risk?",
      options: [
        "A. Use isAccessible keyword in Apex classes to assure record visibility will be followed",
        "B. Use runAs system method in test classes to test using different users and profiles.",
        "C. Use isShareable in Apex classes to assure record visibility will be followed.",
        "D. Use with Sharing keyword in Apex classes to assure record visibility will be followed.",
      ],
      answer: "B,D",
      title: "Question 32",
    },
    {
      content:
        "Which two objects support creating queues?\n       Choose 2 answers.",
      options: ["A. Opportunity.", "B. Lead.", "C. Case.", "D. Account."],
      answer: "B,C",
      title: "Question 33",
    },
    {
      content:
        "By Viewer Access you can see the data in a report or dashboard, but you can't make any changes, except by cloning it into a new report or dashboard.",
      options: ["A. True", "B. False"],
      answer: "A",
      title: "Question 34",
    },
    {
      content:
        "Universal Containers (UC) implemented Sales Cloud and requested that only certain branch staff trained to sell high risk products can create opportunities for high risk products.\n       In which two ways can an Architect allow only specific branch staff to sell high risk products?\n       Choose 2 answers",
      options: [
        "A. Share (High Risk) price book with the trained staff via manual sharing.",
        "B. Set Price Book Organization Wide Default to View Only and share the price book (High Risk) with the trained staff.",
        "C. Configure Price book Organization wide default to No Access.",
        "D. Share (High Risk) price book with the trained staff via sharing rule.",
      ],
      answer: "A,B",
      title: "Question 35",
    },
    {
      content:
        "Universal Containers has a requirement to share Accounts automatically to the users at a field office. They currently have the following setup in their environment:\n       * Accounts are set to Private in the Org-Wide Default.\n       * The field office is specified by a lookup in the Account object.\n       * There are 400 field offices.\n       * The users in each field office are managed using public groups.\n       Based upon a lookup relationship field on the Account, how should the Architect meet this requirement?",
      options: [
        "A. Use Programmatic Sharing to share the Account with the appropriate field office.",
        "B. Use Account Teams to share the Account with the appropriate field office.",
        "C. Use Manual Sharing to share the Account with the appropriate field office.",
        "D. Use Criteria-Based Sharing to share the Account with the appropriate field office.",
      ],
      answer: "A",
      title: "Question 36",
    },
    {
      content:
        "Which features does Salesforce provide for restricting login access to the application?\n       Choose 2 answers.",
      options: [
        "A. Profile-based IP restrictions",
        "B. Profile-based login hour restrictions",
        "C. Organization-wide login hour restrictions",
        "D. Role-based IP restrictions",
      ],
      answer: "A,B",
      title: "Question 37",
    },
    {
      content:
        "Universal Container is a global Telco that has recently implemented enterprise territory management to better align their sales teams and sales processes. They are in Q4 of the FY and they have completely revamped their territory structure and created a plan for a new structure that would support the new FY. Their current territory model has 8k territories. Their new model would be a new set of 8,5K territories, and their org limit is 10k. What enterprise territory management feature can US take advantage of in order to help them stay within their org limits?",
      options: [
        "A. Territory Type",
        "B. Territory Model State",
        "C. Territory Hierarchy",
        "D. Territory type priority",
      ],
      answer: "B",
      title: "Question 38",
    },
    {
      content:
        "Universal Containers (UC) operates worldwide with offices in more than 100 regions in 10 different countries role hierarchy to control data visibility. In the new fiscal year, UC is planned to reorganize the roles and rea..\n       Which two point should an Architect consider in this situation?\n       Choose 2 answers",
      options: [
        "A. Using a temporary parking lot account to improve performance.",
        "B. Changing complex role hierarchy can cause a high level of sharing recalculation.",
        "C. Replacing Account records ownerships massively can cause data skew.",
        "D. Restricting the organization-sharing configurations to private.",
      ],
      answer: "B,C",
      title: "Question 39",
    },
    {
      content:
        "Universal Containers (UC) sales managers are complaining that they cannot access their teams' Shipment records (a custom object). Initially, the admin suggested that this it happening due to misconfigured role hierarchy (Shipment OWD is Private). Alter investigation, they determined the. role hierarchy for these users is correct.\n       What can be the reason why Universal Containers sales managers are not able to see Shipment records?",
      options: [
        "A. Ownership-based sharing rule for Shipment was Incorrectly disabled by the Salesforce admin.",
        "B. Sales managers have only the Read permission on the 5hipment object and should not be able to edit their team records.",
        "C. Role hierarchy Implicit sharing was Incorrectly disabled by the Salesforce adman.",
        "D. The Grant Access Using hierarchies option on Shipment Sharing Settings was incorrectly disabled by the Salesforce admin.",
      ],
      answer: "D",
      title: "Question 40",
    },
    {
      content:
        "Universal Containers (UC) is implementing Sales Cloud. During the last quarter of the financial of the financial year, .. They requested a solution in Salesforce to allow them to specify an assistance agent on the opportunity.. the assistance field. The system should automatically remove access from the previous assistant and ..\n       What is the optimum solution to meet the requirements?",
      options: [
        "A. Use sharing rule to share opportunities with the assistant agent.",
        "B. Use share group to share opportunities with the assistant agent.",
        "C. Use opportunity team and create an assistant field, use apex to share opportunities with the assistant",
        "D. Use apex sharing to share and unicast opportunities with the assistant agent.",
      ],
      answer: "D",
      title: "Question 41",
    },
    {
      content:
        "Universal Containers (UC) uses a custom Visualforce page to display shipment tracking information (custom object, private OWD) to field manager and agents. The IT team wants to make sure that users have access to only the information that is allowed.\n       Which Apex method must be used to make sure only allowed fields are shown to the users?",
      options: [
        "A. isShowable()",
        "B. isReadable()",
        "C. isViewable()",
        "D. isAccessible()",
      ],
      answer: "D",
      title: "Question 42",
    },
    {
      content:
        "Universal Containers (UC) has a business unit that uses a custom object to track requests which demands a high level of internal team collaboration. Although all requests must have an owner, all employees are required to collaborate on requests.\n       Which recommendation should a Salesforce architect provide to optimize the solution and meet these requirements?",
      options: [
        "A. Set the Request object's OWD to Private and criteria-based sharing rule to share all Request records with all internal users.",
        "B. Set the Request object's OWD to Private and grant Modify All Data permission on all Profiles for the Request object.",
        "C. Set the Request object's OWD to Public Read/Write.",
        "D. Set the Request object's OWD to Public Read Only and configure role hierarchy.",
      ],
      answer: "A",
      title: "Question 43",
    },
    {
      content:
        "After setting up Customer Community and enable collaboration, the architect realizes that customers are only Chatter posts from other customers in their account.\n       What should the architect do to allow viewing chatter posts from all customers?",
      options: [
        "A. Enable Internal Users Visibility.",
        "B. Enable Community User Visibility.",
        "C. Enable Chatter Super User.",
        "D. Set View All for Chatter posts.",
      ],
      answer: "B",
      title: "Question 44",
    },
    {
      content:
        "Universal Computers (UC) is looking to expand its delivery capabilities through a network of distributors that use a Partner Community license. UC employees currently can view all delivery records through the organization-wide default (OWD) setting of Public Read Only.\n       Which approach would an architect recommend to limit the records a distributor can see?",
      options: [
        "A. Set the External OWD to Private for the Delivery object.",
        "B. Remove Read permission from the distributor profile.",
        "C. Create a criteria-based sharing rule to grant access to the distributor",
        "D. Create an ownership-based sharing rule to grant access to the distributor.",
      ],
      answer: "A",
      title: "Question 45",
    },
    {
      content:
        "How would you make sure Visualforce page is security proof? Choose 3 answers",
      options: [
        "A. Submit to force security scanner",
        "B. Manually check for sql injection",
        "C. Manually check for cross site",
        "D. Use debug to check hijacked requests",
        "E. Use web application tool for security",
      ],
      answer: "A,D,E",
      title: "Question 46",
    },
    {
      content:
        "Universal Containers (UC) has a custom Apex class that enforces a business process and updates opportunities. UC has noticed that fields with field level security permission of read only on certain users' profiles are being updated by this class.\n       How should the architect fix this problem?",
      options: [
        "A. Use the IsUpdateable() Apex method to test each field prior to allowing update.",
        "B. Use the WITH SECURITY_ENFORCED keyword in the SOQL statement.",
        "C. Add With Sharing keyword to the class,",
        "D. Put the code in an inner class that uses the With Sharing keyword.",
      ],
      answer: "A",
      title: "Question 47",
    },
    {
      content:
        "Universal Containers has expanded to sell virtual containers for data storage. Virtual container work orders are provisioned immediately by the system and therefore cannot be changed by a sales representative. What is an optimal approach to implement these requirements?",
      options: [
        "A. Remove the edit button from the work order page layout.",
        "B. Change the record type/page layout assignment for Work Order to be Read Only.",
        "C. Remove the Work Order Edit permission from the sales representative Profile.",
        "D. Implement a sharing rule that changes access for all Work Order to Read.",
      ],
      answer: "C",
      title: "Question 48",
    },
    {
      content:
        "Universal Containers, a global corporation of 50,000 users, has a 24x7 call center operated by 20,000 users that includes employees and contractors. Their sales organization is 10,000 strong and they started processing about 100,000 updates to opportunity custom fields called Priority and NextStep. They also started processing 20,000 updates to a highly nested territory hierarchy. There was a third mass update on a Next Step field on the Action Plan custom object that has Case as a lookup field. Users started seeing a Group membership lock error in the system. What is a probable cause for this error?",
      options: [
        "A. Lock contention due to system-initiated sharing rule recalculation",
        "B. Lock contention on Territory object because of Territory object updates.",
        "C. Lock contention on Case records because of Action Plan custom object updates.",
        "D. Lock contention on Account records because of Opportunity object updates.",
      ],
      answer: "A",
      title: "Question 49",
    },
    {
      content:
        "Universal Containers has a custom object, Employee Review, with an Organization-Wide Default security setting of Private. A user lookup on the Employee Review object is populated when a reviewer is assigned to perform a review. How can this user be granted edit access to the record if they are not the owner?",
      options: [
        "A. Create an Apex trigger to insert an Employee Review Share record with an access level of Edit.",
        "B. Create a workflow rule to share the Employee Review record with the user in the lookup field.",
        "C. Create a criteria-based sharing rule to share the record with the user in the lookup field.",
        "D. The user will be granted access to the record automatically when the user lookup is populated.",
      ],
      answer: "C",
      title: "Question 50",
    },
    {
      content:
        "Universal Containers (UC) has a mostly private organization-wide default (OWD), as it is a core principle of UC to respect client data privacy. UC has implemented complex processes for granting access to Opportunity dat a. A few key members of the Sales Reporting team need to always be able to see, but not change, Opportunity data for all Opportunities.\n       What should an architect recommend as an approach to meet these requirements?",
      options: [
        'A. Create a Permission Set that grants "View All" permission for Opportunity.',
        'B. Give "View All Data" Permission to the Sales Reporting Profile.',
        'C. Create a Permission Set that grants "View All Data" Permission.',
        "D. Make Opportunity OWD read-only.",
      ],
      answer: "A",
      title: "Question 51",
    },
    {
      content:
        "To reduce the case time resolution and improve customer satisfaction, Universal Containers (UC) wants to allow specialized marketing consultants to have edit access to Case records of VIP customers. These casts should be visible only to the support rep who owns the case and the marketing consultants.\n       Which recommendation should a Salesforce architect give to allow this scenario?",
      options: [
        "A. Case organization-wide default Private, role hierarchy, and Read Only ownership-based sharing rule.",
        "B. Case organization-wide default Private and Account Team with Read/Edit permission.",
        "C. Case organization-wide default Public Read Only and Case Team with Read permission.",
        "D. Case organization wide default Private and Case Team with Read/Edit permission.",
      ],
      answer: "D",
      title: "Question 52",
    },
    {
      content:
        "Universal Containers has developed an AppExchange managed package for their distribution partners, which required a private key to be generated for each partner and used by the code. Universal Containers support representatives must be able to access the private key value to debug connection issues, but it must not be possible for the partner to access the value.\n       How can the Architect best support this requirement?",
      options: [
        "A. Store the value in a text field on a protected custom setting in the package.",
        "B. Store the value in a static variable in a class included in the managed package.",
        "C. Store the value in an encrypted field on a custom object in the package.",
        "D. Store the value in the text field on a list custom setting in the managed package.",
      ],
      answer: "D",
      title: "Question 53",
    },
    {
      content:
        "Universal Container (UC) wants all full-time internal employees to be able to view all leads. A subset of employees should also be able to see leads.\n       Which organization default (OWD) approach should an architect recommend that will help US employee?",
      options: [
        "A. Implement a Public Read only OWD on Lead",
        "B. Implement a Private OWD on Lead.",
        "C. Implement a Public Read/write OWD on Lead",
        "D. Implement a Public Read/write/Transfer OWD on Lead.",
      ],
      answer: "B",
      title: "Question 54",
    },
    {
      content:
        "Universal Containers wants to create a way to store sensitive Invoice Data in Salesforce. A User who owns an Account should not see every Invoice, but only invoices that they or their subordinates own. Which two features should be considered during this solution implementation?\n       Choose 2 answers.",
      options: [
        "A. Deploy the Relationship between Accounts and the Invoices Object as Master-Detail.",
        "B. Deploy the Relationship between Accounts and the Invoices Object as Lookup.",
        "C. Ensure that the Organization-Wide Default sharing for Invoices is set to Private.",
        "D. Create a Workflow that populates the Invoice sharing object upon Insert.",
      ],
      answer: "A,C",
      title: "Question 55",
    },
    {
      content:
        "Universal Containers (UC) is a fast-growing company that sells containers globally. It has thousands of dealerships throughout the world where local dealers service containers. UCimplemented a new Partner Community for its dealers. Each dealership has a dealer manager who manages the service agents. The community-sharing model is private.\n       What is the optimal option to give dealer managers visibility to customer cases only raised by their service agents?",
      options: [
        "A. Using the role hierarchy, the cases raised by service agents will be visible to their relevant dealer managers.",
        "B. Create a sharing rule to share cases created by service agents with their dealer manager.",
        "C. Change external organization-wide default of case object to public read only.",
        "D. Create a sharing set to share cases created by service agents with their dealer manager.",
      ],
      answer: "A",
      title: "Question 56",
    },
    {
      content:
        "User A at Universal Containers is in the default account team for User B.\n       User B owns the ACME account and changed User A's team member access to the account. What is the impact of this change?",
      options: [
        "A. Changes affect the default Opportunity team.",
        "B. Changes affect all child ACME Accounts.",
        "C. Changes affect only the ACME Account",
        "D. Changes affect the default Account team.",
      ],
      answer: "C",
      title: "Question 57",
    },
    {
      content:
        "Partner users can access records belonging to users in their account at their same role or lower in the role hierarchy, for Cases, Leads, Opportunities and Custom Objects. Which of the following access has to be given ?",
      options: ["A. Super user permission"],
      answer: "A",
      title: "Question 58",
    },
    {
      content:
        "Universal Containers has developed Apex code to manually create AccountShare records to grant specific users access to individual Accounts. What must the Architect do to ensure the AccountShare records are not deleted when the owner of the Account is changed?",
      options: [
        "A. Create the share records and set the RowCause to a custom Apex Sharing Reason",
        "B. Create the share records and set the RowCause to Manual",
        'C. Create the share records in a class with the "Without Sharing" keyword',
        "D. Create the share records with the Delete on Owner Change field set to false",
      ],
      answer: "A",
      title: "Question 59",
    },
    {
      content:
        "Sales managers at Universal Containers (UC) have requested viewing customer invoices in Salesforce .. system. The architect at UC decided to surface the customer invoices in Salesforce using external objects a..\n       Configured an external object called Invoice.\n       Created a lookup relationship between account and the invoice\n       How can the architect grant the sales managers access to the customer invoices data?",
      options: [
        "A. By creating sharing rules to share the invoice records with users in sales manager roles.",
        "B. By using manual sharing to share invoices with relevant sales managers.",
        "C. By controlling the invoices object permission on the sales manager's profile.",
        "D. By creating a sharing set a share invoice with users in a sales manager role.",
      ],
      answer: "C",
      title: "Question 60",
    },
    {
      content:
        "Universal Containers wants to store Payment Term Details on the Account object, but the fields should only be visible on certain record types and for certain user profiles.\n       How can a System Administrator quickly determine which user profiles, page layouts, and record types include certain fields?",
      options: [
        "A. Click the Field-Level Security for the field on each Profile.",
        "B. Universally require the field at the field level.",
        "C. Use the Field Accessibility Viewer for the fields in question",
        "D. Log in as each user profile and view the Account Page Layouts.",
      ],
      answer: "C",
      title: "Question 61",
    },
    {
      content:
        "Universal Containers (UC) enables customers to manage issues using a Customer Community license. The Case external organization-wide default is set to Private. Currently community users can only see cases they created.\n       What can be done to allow community users to see all cases for their account?",
      options: [
        "A. Ensure the criteria-based sharing rule applies to all users.",
        "B. Upgrade the licenses to Customer Community Plus.",
        "C. Write an Apex class to create manual shares for these users.",
        "D. Create a sharing set for these customers.",
      ],
      answer: "D",
      title: "Question 62",
    },
    {
      content:
        "Universal Containers has set Opportunity Sharing to Private with Opportunity Teams enabled. Which three options can change the Owner of the Opportunity?\n       Choose 3 answers.",
      options: [
        "A. Any Opportunity Team Member on the current Opportunity.",
        "B. Someone above the Opportunity Owner in the Role Hierarchy.",
        "C. The current Opportunity Owner can transfer the current ownership.",
        "D. The user specified as the Manager on the Owner's User Profile.",
        'E. The System Administrator or a user with the "Transfer Records" permission.',
      ],
      answer: "B,C,E",
      title: "Question 63",
    },
    {
      content:
        "Universal Containers is designing a new community using the Customer Community license type. They would like to have the users complete survey questions through the community interface and store the responses in a Custom Object that has a lookup to the account object. Any internal user who has access to the account should be able to see all survey responses. All Customer Community users should be able to see surveys filled in by other users for their company, but not surveys for other companies. What are the correct security settings to achieve this?",
      options: [
        'A. Set all Organization-Wide Default security to be "Private" for both internal and external users and use Sharing Rules to grant the desired access',
        'B. Set all Organization-Wide Default security to be "Public Read/Write" for internal users and "Private" for external users.',
        "C. Set the custom object to be master-detail to the Account and leave the Organization-Wide Default settings as their default values.",
        'D. Set all Organization-Wide Default settings to be "Public Read/Write" for both internal and external users.',
      ],
      answer: "A",
      title: "Question 64",
    },
    {
      content:
        "Universal Container is creating a custom VF page to allow user to edit contact records. The developer has used an apex:outputField for the Phone field on the contact obj. What is the expected behavior if a user without FLS accesses the VF page?",
      options: [
        "A. The output field is visible to user",
        "B. The field is automatically removed from the page",
        "C. The user is able to enter a value into the phone field",
        "D. The user encounters an error while saving the record",
      ],
      answer: "B",
      title: "Question 65",
    },
    {
      content:
        "Mary is Joe's manager in the role hierarchy. The OWD for a custom Invoice object is Public ReadOnly and Mary's profile is not granted the Read permission for the Invoice object.\n       What action can Mary take on Joe's Invoice records?",
      options: ["A. View Only", "B. Read/Write", "C. None", "D. Edit Only"],
      answer: "C",
      title: "Question 66",
    },
    {
      content:
        "What is the best practice for testing sharing and visibility changes?",
      options: [
        "A. Use Administrative and User reports to view the Active Users.",
        "B. Use the Sharing button to test Profile and Permission set changes.",
        "C. Use Field Audit Trail to audit the field meta-data and visibility.",
        "D. Use the Login As feature for a sample user in each role and profile.",
      ],
      answer: "D",
      title: "Question 67",
    },
    {
      content:
        "A developer at Universal Container is building an integration within a managed package for their internal org that requires login to an external system. The end point requires basic authentication. The Architect would like to ensure that the username and password are managed securely. Which three options should the Architect recommend to secure the credentials?",
      options: [
        "A. Store the credentials in protected custom settings that are used in the apex callout",
        "B. Store the credentials in protected custom metadata that are used in the apex callout",
        "C. Store the credentials in a custom object using encrypted fields",
        "D. Store the credentials in the apex code, which will not be available to non-admins",
        "E. Store the credentials in named credentials that are used in the apex callout",
      ],
      answer: "A,B,E",
      title: "Question 68",
    },
    {
      content:
        "When you make changes to roles and groups Salesforce locks the entire group membership table, which makes it impossible to process group changes in multiple threads to increase throughput on updates.",
      options: ["A. Granular Locking"],
      answer: "A",
      title: "Question 69",
    },
    {
      content:
        "Which two capabilities does the delegated administrator permission provide?\n       Choose 2 answers",
      options: [
        "A. Unlock users",
        "B. Create profiles",
        "C. Assign users profiles",
        "D. Set OWD",
      ],
      answer: "A,C",
      title: "Question 70",
    },
    {
      content:
        "In order to comply with Regulatory Requirements, Universal Containers must store sensitive customer information on-premise. Universal Containers would like this on-premise information to be accessible from Salesforce. What technology can Universal Containers use to achieve this?",
      options: [
        "A. Implement the Salesforce Shield toolkit.",
        "B. Implement an on-premise database.",
        "C. Implement a third-party tokenization service.",
        "D. Implement a third-party proxy server.",
      ],
      answer: "D",
      title: "Question 71",
    },
    {
      content:
        "Universal Containers uses 75,000 distributors that have close to 1 million total users. Distributors need opportunities assigned to their distributor for delivery.\n       What license recommendation will meet distributor needs?",
      options: [
        "A. Customer Community Plus",
        "B. Partner Community",
        "C. Sales Cloud",
        "D. Custom Community",
      ],
      answer: "B",
      title: "Question 72",
    },
    {
      content:
        'Ursa Major Solar is writing test methods.\n       Which functionality does the system method "runAs()" Verify?',
      options: [
        "A. Enforcement of a user's record sharing",
        "B. Enforcement of a user's field-level security.",
        "C. Enforcement of user's permissions.",
        "D. Enforcement of a user's public group assignments.",
      ],
      answer: "A",
      title: "Question 73",
    },
    {
      content:
        "Universal Containers has requirement to integrate Salesforce with an external system to control record access.\n       What option should the Architect consider when designing a solution?",
      options: [
        "A. Use the SOAP API to create new Criteria-Based Sharing Rules in Salesforce.",
        "B. Use the Metadata API to maintain the related SObject records.",
        "C. Use the Security API to modify the role hierarchy in Salesforce.",
        "D. Use the SOAP API to maintain the related SObject_share records.",
      ],
      answer: "D",
      title: "Question 74",
    },
    {
      content:
        "Universal Containers has a set of Account Management users that should only see Accounts once the Account becomes a customer. The Type field on the Account identifies whether the Account is a Prospect, Customer, Partner or Other. Which two methods could an Architect use to enable this sharing requirement, assuming a private sharing model for Accounts?\n       Choose 2 answers.",
      options: [
        "A. Create an Account Sharing Rule that shares all Accounts owned by Sales to be shared with Account Management roles and subordinates.",
        "B. Create a Criteria-based Sharing rule that shares the Account to the Account Management Group when the Type is Customer.",
        "C. Institute a process that calls for the Account Manager to be added to the Account Team once the Account becomes a customer.",
        "D. Create a Public List View, where Accounts of Type Customer are included and share the List view with the Account Management public group.",
      ],
      answer: "B,C",
      title: "Question 75",
    },
    {
      content:
        "The sales managers at the Universal Containers (UC) requested their teams to define each user's role on their accounts in order to provide an easy way to establish accountability and collaboration. Sales managers also requested that sales associates should only get the following permissions:\n       * Read access to the accounts.\n       * Read access to cases related to the accounts\n       * No access to deals related to the accounts\n       The sales associates may be granted access to opportunities when needed.\n       Assuming the overall sharing model of the organization is private and no sharing rules are configured on the account object. How can an Architect achieve these requirements?",
      options: [
        "A. Use Account Teams to define access to accounts as well as opportunities and cases related to accounts",
        "B. Use Account teams, Case teams. No configuration required for the opportunity object.",
        "C. Use Account teams, Opportunity teams, and Case teams.",
        "D. Use Account teams and use Sharing rules to share cases with sales associates. No change required to the opportunity object",
      ],
      answer: "A",
      title: "Question 76",
    },
    {
      content:
        "Universal Containers has a large network of partners, who each have seasonal workers that need ..\n       How might the Architect design the solution to federate user setup to the Partners?\n       Choose 2 answers",
      options: [
        "A. Grant the Modify Users permission to the partner managers.",
        "B. Assign delegated external administrators at each partner.",
        "C. Create a permission set giving Read/Write to the User object to partner manager.",
        "D. Allow external users to self register.",
      ],
      answer: "B,D",
      title: "Question 77",
    },
    {
      content:
        "Universal Containers has Controlled by Parent sharing settings on the Contact object and Public Read Only sharing settings on Account, Opportunity, and Case objects. Which two options can the user see while adding Account team members to the Account?",
      options: [
        "A. Contact Access",
        "B. Opportunity Access",
        "C. Activity Access",
        "D. Case Access",
      ],
      answer: "B,D",
      title: "Question 78",
    },
  ],
});
