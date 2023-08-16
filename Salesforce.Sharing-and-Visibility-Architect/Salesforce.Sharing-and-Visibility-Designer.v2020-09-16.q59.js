window.testContent = window.testContent || [];
var testId = "Salesforce.Sharing-and-Visibility-Designer";
var testName = "Salesforce.Sharing-and-Visibility-Designer";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "Salesforce.Sharing-and-Visibility-Designer.v2020-09-16.q59",
  content: [
    {
      content:
        "Universal Containers (UC) has implemented Customer Community with customer community plus licenses for their distributors. Some distributors requested granting specific community users (agents) to view cases submitted by other agents of the same distributor.\n       Which feature only supports these requirements?",
      options: [
        "A. Partner community admin.",
        "B. Delegate external user",
        "C. Partner super user",
        "D. Permission set to grant community admin permission",
      ],
      answer: "C",
      title: "Question 1",
    },
    {
      content:
        "In order to comply with Regulatory Requirements, Universal Containers must store sensitive customer information on-premise. Universal Containers would like this on-premise information to be accessible from Salesforce. What technology can Universal Containers use to achieve this?",
      options: [
        "A. Implement a third-party tokenization service.",
        "B. Implement the Salesforce Shield toolkit.",
        "C. Implement an on-premise database.",
        "D. Implement a third-party proxy server.",
      ],
      answer: "D",
      title: "Question 2",
    },
    {
      content:
        "Universal Container is a global Telco that has recently implemented enterprise territory management to better align their sales teams and sales processes. They are in Q4 of the FY and they have completely revamped their territory structure and created a plan for a new structure that would support the new FY. Their current territory model has 8k territories. Their new model would be a new set of 8,5K territories, and their org limit is 10k. What enterprise territory management feature can US take advantage of in order to help them stay within their org limits?",
      options: [
        "A. Territory type priority",
        "B. Territory Type",
        "C. Territory Model State",
        "D. Territory Hierarchy",
      ],
      answer: "C",
      title: "Question 3",
    },
    {
      content:
        "Universal Containers has successfully implemented a large Service Cloud rollout for their national call center 3 months ago. One of their largest customer accounts, United Automotive, has over 15,000 open cases. Agents are now having trouble opening new cases for United Automotive. When they try to create a case, the following Error messages appear for them UNABLE_TO_LOCK_ROW They notice that this only occurs for the United Automotive account. If they try to save the case again it will usually work, but the problem seems to be happening more and more often. What option should the Architect recommend?",
      options: [
        "A. Review the Customer Service Profile to ensure that they have Read/Write access to the appropriate Case and Account Fields.",
        "B. Review the Account structure to split the United Automotive account into multiple branch accounts.",
        "C. Review all Account sharing rules to ensure that the Customer Service team has Read/Write access to the United Automotive Account.",
        "D. Review all Case Sharing Rules and consolidate where appropriate to reduce the total number of sharing rules.",
      ],
      answer: "B",
      title: "Question 4",
    },
    {
      content:
        "A dummy user at Universal Containers owns more that 10,000 lead records. The system assigned all these leads to a dummy user. This is causing performance issues whenever role hierarchy changes. Which two options should be recommended to improve performance?\n       Choose 2 answers.",
      options: [
        "A. Assign ownership to a small number of users.",
        "B. Add the dummy user to the bottom of the role hierarchy.",
        "C. Add the dummy user into a public group.",
        "D. Do not assign a role to the dummy user.",
      ],
      answer: "A,D",
      title: "Question 5",
    },
    {
      content:
        "Universal Containers (UC) has a requirement to expose a web service to their business partners. The web service will be used to allow each business partner to query UC's Salesforce instance to retrieve the status of orders. The business partner should only be allowed access to orders for which the business partner is the fulfillment vendor. The Architect does not want the business partners to utilize the standard APIs and would prefer a custom API be developed. Which three design elements should the Architect consider in order to ensure the data security of the solution?\n       Choose 3 answers",
      options: [
        "A. Develop a custom Apex web service with a fulfillment ID input attribute",
        'B. Develop a custom Apex web service using the "With Sharing" keyword.',
        "C. Query the Orders object with Dynamic SOQL based upon the fulfillment ID.",
        "D. Set the Orders object's sharing settings to Private in the Org-Wide Defaults",
        "E. Provide each partner with their own Salesforce login set to API Enabled on the profile.",
      ],
      answer: "B,C,D",
      title: "Question 6",
    },
    {
      content:
        "In order to allow community users to collaborate on Opportunities, which license type must the users.",
      options: [
        "A. Partner Community",
        "B. Customer Community",
        "C. Customer Community plus",
        "D. Sales Community",
      ],
      answer: "A",
      title: "Question 7",
    },
    {
      content:
        "Universal Containers (UC) provides shipment tracking for its customers on a custom Shipment object. The .. yearly by the customers should be available on the Account record to the Marketing team, but the Marketing Shipment records.\n       What recommend should an Architect provide to accomplish this?",
      options: [
        "A. Controlled by Parent (Account) on Shipment, trigger, and trigger, and Master-Detail relationship to Account.",
        "B. Public organization-wide default on Shipment, process builder, and lookup relationship to Account.",
        "C. Private organization-wide default on Shipment, trigger, and Lookup relationship to Account,",
        "D. Private organization-Wide default on Shipment, rollup summary, and Master-Detail relationship to Account.",
      ],
      answer: "A",
      title: "Question 8",
    },
    {
      content:
        'Universal Containers has the following Sharing Settings for their Org:\n       Account = Private\n       Contact = Controlled by Parent\n       Opportunity = Private\n       Case = Private\n       They have enabled "Default Account Teams" and have trained users to set up their Default Team. Which three access levels can be set on the Account Team Member?\n       Choose 3 answers',
      options: [
        "A. Contact Access",
        "B. Opportunity Access",
        "C. Account Access",
        "D. Contract Access",
        "E. Case Access",
      ],
      answer: "B,C,E",
      title: "Question 9",
    },
    {
      content:
        "A sales representative at Universal Containers needs assistance from specific product managers when selling certain deals. Product managers do not have access to opportunities they don't own, as the sharing model is Private, but need to gain access when they are assisting with a specific deal. How can an Architect accomplish the requirement?",
      options: [
        "A. Use similar opportunities to share opportunities related to the product manager.",
        "B. Enable account team and allow users to add the product manager.",
        "C. Enable opportunity teams and allow users to add the product manager.",
        "D. Create a sharing rule to allow the product manager to access the opportunity.",
      ],
      answer: "C",
      title: "Question 10",
    },
    {
      content:
        "The Collections department at Universal Containers uses Salesforce to track its efforts. All Invoices and Invoice Line Items are stored in Salesforce. Invoice Line Item object details, such as Quantity and Extended Amount, should be summarized at the Invoice Object level, and all users who can see a given invoice should always see all invoice line items. Without leveraging Apex code, how should an Architect create the relationship between the Invoice object and the Invoice Line Item Object?",
      options: [
        "A. The Invoice Object should have an inner joint to the Invoice Line Item Object",
        "B. The Invoice Line Item Object should have a Lookup to the Invoice Object",
        "C. The Invoice object should have a Master-Detail to the Invoice Line Item Object",
        "D. The Invoice Line Item Object should have a Master-Detail to the Invoice Object",
      ],
      answer: "D",
      title: "Question 11",
    },
    {
      content: "If OWD is Public Read Only, what are sharing access options",
      options: [],
      answer: "A",
      title: "Question 12",
    },
    {
      content:
        "Universal Containers has requirement for the Architect to develop Apex Managed Sharing code for the custom Job object. The sharing settings for the Job object are set to Private.\n       When assigning access level for the record, which two lines of code will cause a DML exception on insert to the database?\n       Choose 2 answers",
      options: [
        "A. Objectname.AccessLevel='Edit'",
        "B. Objectname.AccessLevel='Read'",
        "C. Objectname.AccessLevel='All'",
        "D. Objectname.AccessLevel='None'",
      ],
      answer: "C,D",
      title: "Question 13",
    },
    {
      content:
        'Universal Containers is updating its Organization-Wide Sharing Settings for the Account Object from a "Public Read/Write" model to a "Private" model, so that they can hide certain national accounts from sales reps and sales managers. These national accounts should only be accessible by sales directors and above. Universal Container\'s Role Hierarchy matches its organizational hierarchy. Which two options should the Architect consider when designing the solution? Choose 2 answers',
      options: [
        "A. If a sales rep is added to the Opportunity Team for a national account, they will gain access to account data.",
        "B. National accounts must be owned by a user who is above the sales managers in the Role Hierarchy.",
        "C. Sales directors will need a sharing rule created so that they can see accounts owned by Sales Users.",
        "D. Apex managed sharing will have to be disabled for the account object to protect the national accounts.",
      ],
      answer: "A,B",
      title: "Question 14",
    },
    {
      content:
        "Universal Containers (UC) has a custom object to track the internal net promoter score (NPS) for all ..\n       How can UC ensure that NPS records cannot be accessed by an individual employee's manager?",
      options: [
        "A. Set organization-wide default to Private and uncheck the Access Using Hierarchies Option for ..",
        "B. Use Apex Sharing to remove NPS object share records for Manager profiles.",
        "C. Create a criteria-based sharing rule to remove access to Manager role and above in the Role ..",
        "D. Remove Create, Read, Edit and Delete from Manager Profiles and Permission sets.",
      ],
      answer: "A",
      title: "Question 15",
    },
    {
      content:
        "To grant Universal Containers sales manager access to shipment records properly, it was necessary to leverage Apex managed sharing. The IT team is worried about improper access to records.\n       Which two features and best practices should a Salesforce architect recommend to mitigate this risk?",
      options: [
        "A. Use runAs system method in test classes to test using different users and profiles.",
        "B. Use with Sharing keyword in Apex classes to assure record visibility will be followed.",
        "C. Use isAccessible keyword in Apex classes to assure record visibility will be followed",
        "D. Use isShareable in Apex classes to assure record visibility will be followed.",
      ],
      answer: "B,C",
      title: "Question 16",
    },
    {
      content:
        "Which are two valid use cases for programmatic sharing?\n       Choose 2 answers.",
      options: [
        "A. An external system manages user record access.",
        "B. Native sharing functionality does not meet requirements.",
        "C. Setting user ownership for standard and custom objects.",
        "D. Frequent user ownership changes based on re-alignments.",
      ],
      answer: "A,B",
      title: "Question 17",
    },
    {
      content:
        "Universal Containers has a global 24x7 Salesforce.com implementation that supports Sales, Services, Order Management, and various other parts of their business. They have a nested territory hierarchy, 10,000 sales users, and 20,000 support agents. Territory changes happen daily. The demand for new applications and changes to the platform is high and they follow an agile development methodology and deliver new releases every two weeks on the platform. What Salesforce.com feature would help the system recover from a maintenance restart on Salesforce.com servers?",
      options: [
        "A. Enable Parallel Sharing Rule recalculation.",
        "B. Enable Granular Locking on the system.",
        "C. Enable Deferred Sharing Rule recalculation.",
        "D. Enable Filter -Based Opportunity Territory Assignment.",
      ],
      answer: "C",
      title: "Question 18",
    },
    {
      content: "What is a workaround to ownership data skew?",
      options: [],
      answer:
        " \n       \n        You can minimize possible performance impacts by not assigning the user(s) to a role.\n        ",
      title: "Question 19",
    },
    {
      content:
        "What advanced tool can Salesforce enable for Large-scale role hierarchy realignments?",
      options: [
        "A. Set external organization-wide default to public read only",
        "B. Granular locking",
        "C. Partitioning by Divisions",
        "D. Skinny Table Indexing",
      ],
      answer: "B",
      title: "Question 20",
    },
    {
      content:
        "Universal Containers has requirement to integrate Salesforce with an external system to control record access.\n       What option should the Architect consider when designing a solution?",
      options: [
        "A. Use the Metadata API to maintain the related SObject records.",
        "B. Use the SOAP API to maintain the related SObject_share records.",
        "C. Use the Security API to modify the role hierarchy in Salesforce.",
        "D. Use the SOAP API to create new Criteria-Based Sharing Rules in Salesforce.",
      ],
      answer: "B",
      title: "Question 21",
    },
    {
      content:
        "Universal Containers has a Private Sharing Model and restrictive data access settings in place. The data governance team is planning to deploy a master data management tool that will need write access to all system data, and the Architect has been asked to prepare a Data Governance User Profile that has full access to all data regardless of Sharing and CRUD Settings. What is the optimal way to enable this requirement?",
      options: [
        "A. Create a Sharing Rule for required Objects, on an API Only profile",
        'B. Enable the "Edit Read -Only Fields" permission for this Profile.',
        "C. Create an All Data Access app as a default for this Profile.",
        'D. Ensure the profile has the "Modify All Data permission enabled',
      ],
      answer: "D",
      title: "Question 22",
    },
    {
      content:
        "A user at Universal Containers would like to give access to a Report folder to someone else in the organization.\n       Which two access permissions should the user have to support this requirement?\n       Choose 2 answers.",
      options: [
        'A. The "Editor" Report folder permission.',
        'B. The "Manage Reports in Public Folders" Profile permission.',
        'C. The "Manager" Report folder permission.',
        'D. The "Viewer" Report folder permission',
      ],
      answer: "B,C",
      title: "Question 23",
    },
    {
      content:
        "Universal Containers has a private sharing model on Accounts. Apex Managed Sharing is required to share certain account records with all users who are assigned to a specific Role in the Role Hierarchy. What should be the recommended way for the Architect to implement this?",
      options: [
        "A. Create an AccountShare record associated to a public group containing the Role.",
        "B. Create an AccountShare record associated to the required Role.",
        "C. Create an AccountShare record associated to each user who is assigned to the Role.",
        "D. Create an AccountShare record associated to a public group containing the Users in the Role.",
      ],
      answer: "D",
      title: "Question 24",
    },
    {
      content:
        "What is the best practice for testing sharing and visibility changes?",
      options: [
        "A. Use Administrative and User reports to view the Active Users.",
        "B. Use the Sharing button to test Profile and Permission set changes.",
        "C. Use the Login As feature for a sample user in each role and profile.",
        "D. Use Field Audit Trail to audit the field meta-data and visibility.",
      ],
      answer: "C",
      title: "Question 25",
    },
    {
      content:
        "Universal Containers (UC) has Affiliates who sell containers in countries' where UC does not have a local office Community to manage the sales cycle. One of their affiliates has exponentially grown in the last years and .. with the following structure:\n       Sales VP ..> Direct of Sales .. > Sales Manager ..> Sales Reps\n       UC would like to have the ability to open up access to the sales opportunities according to the above structure.\n       What is the main problem a Salesforce Architect will face to provide a solution?",
      options: [
        "A. Super User does not work in Partner Community.",
        "B. Partner Community does not support Role Hierarchy.",
        "C. The Channel manager Role can not be shared with Partner Community.",
        "D. Partner User Roles are limited to three levels.",
      ],
      answer: "D",
      title: "Question 26",
    },
    {
      content:
        "Universal Containers has created a custom Sales Operations profile with read and edit access to the Category field on a custom object. There is a new requirement that 3 of the 100 users assigned to the Sales Operations Profile should have read-only access to the Category field.\n       How can the Architect support this request?\n       Choose one answer:",
      options: [
        "A. Create a new page layout with the Category Field set to read-only for these users.",
        "B. Create a permission set in the Category field to read-only and assign it to the users.",
        "C. Create a new profile without edit access to Category and assign it to the users.",
        "D. Create a custom permission to grant read-only access to Category and assign it to the users.",
      ],
      answer: "C",
      title: "Question 27",
    },
    {
      content:
        "Universal containers (UC) service reps are assigned to a profile which has ''View All'' in Case object..\n       To make sure service reps have access to all relevant information to attend to customer requests, which Architect consider?\n       Choose 2 answers",
      options: [
        "A. Service reps will be able to access to Contact records if they are Controlled by Parent.",
        "B. Service reps will NOT able to access to Contact records if they are controlled by Parent.",
        "C. Service reps will be able to access to Contact records due to Implicit Sharing.",
        "D. Service reps will NOT able to access to Contact records because Account OWD is private",
      ],
      answer: "A",
      title: "Question 28",
    },
    {
      content:
        "Universal Containers (UC) sales managers are complaining that they cannot access their teams' Shipment records (a custom object). Initially, the admin suggested that this it happening due to misconfigured role hierarchy (Shipment OWD is Private). Alter investigation, they determined the. role hierarchy for these users is correct.\n       What can be the reason why Universal Containers sales managers are not able to see Shipment records?",
      options: [
        "A. The Grant Access Using hierarchies option on Shipment Sharing Settings was incorrectly disabled by the Salesforce admin.",
        "B. Sales managers have only the Read permission on the 5hipment object and should not be able to edit their team records.",
        "C. Ownership-based sharing rule for Shipment was Incorrectly disabled by the Salesforce admin.",
        "D. Role hierarchy Implicit sharing was Incorrectly disabled by the Salesforce adman.",
      ],
      answer: "A",
      title: "Question 29",
    },
    {
      content:
        "Universal Containers' organization wide-defaults model is private for the Account object. A sales repeats to opportunity records.\n       Which level of access will the sales rep have to the related account record?",
      options: [
        "A. Read/Create access",
        "B. Read/Create/Edit access",
        "C. No access",
        "D. Read-only access",
      ],
      answer: "D",
      title: "Question 30",
    },
    {
      content:
        "Which features does Salesforce provide for restricting login access to the application?\n       Choose 2 answers.",
      options: [
        "A. Profile-based login hour restrictions",
        "B. Organization-wide login hour restrictions",
        "C. Profile-based IP restrictions",
        "D. Role-based IP restrictions",
      ],
      answer: "A,C",
      title: "Question 31",
    },
    {
      content:
        "Universal Containers has Controlled by Parent sharing settings on the Contact object and Public Read Only sharing settings on Account, Opportunity, and Case objects. Which two options can the user see while adding Account team members to the Account?",
      options: [
        "A. Case Access",
        "B. Contact Access",
        "C. Opportunity Access",
        "D. Activity Access",
      ],
      answer: "A,C",
      title: "Question 32",
    },
    {
      content:
        "Universal Containers has a custom object, Employee Review, with an Organization-Wide Default security setting of Private. A user lookup on the Employee Review object is populated when a reviewer is assigned to perform a review. How can this user be granted edit access to the record if they are not the owner?",
      options: [
        "A. Create an Apex trigger to insert an Employee Review Share record with an access level of Edit.",
        "B. The user will be granted access to the record automatically when the user lookup is populated.",
        "C. Create a workflow rule to share the Employee Review record with the user in the lookup field.",
        "D. Create a criteria-based sharing rule to share the record with the user in the lookup field.",
      ],
      answer: "D",
      title: "Question 33",
    },
    {
      content:
        "Universal Containers wants to create a way to store sensitive Invoice Data in Salesforce. A User who owns an Account should not see every Invoice, but only invoices that they or their subordinates own. Which two features should be considered during this solution implementation?\n       Choose 2 answers.",
      options: [
        "A. Create a Workflow that populates the Invoice sharing object upon Insert.",
        "B. Ensure that the Organization-Wide Default sharing for Invoices is set to Private.",
        "C. Deploy the Relationship between Accounts and the Invoices Object as Master-Detail.",
        "D. Deploy the Relationship between Accounts and the Invoices Object as Lookup.",
      ],
      answer: "B,C",
      title: "Question 34",
    },
    {
      content:
        "The sales manager in Japan have asked the sales manager in Australia to assist them with closing the ..\n       How are these requirements achieved?",
      options: [
        "A. Use opportunity teams to automatically add the sales manager as a team member.",
        "B. Create ownership-based sharing rule.",
        "C. Assign the sales manager View All on the opportunity object.",
        "D. Use sharing set to give the sales manager access to the deals.",
      ],
      answer: "B",
      title: "Question 35",
    },
    {
      content:
        "Universal Containers has a custom object to maintain Job information with a private sharing model. The Delivery group is distributed through the Role Hierarchy based on geography. As the Delivery group often collaborates on Jobs, all users in the Delivery profile required View access to all Job records. In special case, the Delivery user who owns a job must be able to grant a Product Development user access to a Job record. Which two platform features can be used to support these requirements?\n       Choose 2 answers",
      options: [
        "A. Criteria-based Sharing Rules",
        "B. Owner-based Sharing Rules",
        'C. "View All" Profile settings',
        "D. Manual Sharing",
      ],
      answer: "C,D",
      title: "Question 36",
    },
    {
      content:
        "After setting up Customer Community and enable collaboration, the architect realizes that customers are only Chatter posts from other customers in their account.\n       What should the architect do to allow viewing chatter posts from all customers?",
      options: [
        "A. Enable Community User Visibility.",
        "B. Enable Internal Users Visibility.",
        "C. Set View AH for Chatter posts.",
        "D. Enable Chatter Super User.",
      ],
      answer: "C",
      title: "Question 37",
    },
    {
      content:
        "Universal Container (UC) wants all full-time internal employees to be able to view all leads. A subset of employees should also be able to see leads.\n       Which organization default (OWD) approach should an architect recommend that will help US employee?",
      options: [
        "A. Implement a Public Read/write OWD on Lead",
        "B. Implement a Public Read/write/Transfer OWD on Lead.",
        "C. Implement a Private OWD on Lead.",
        "D. Implement a Public Read only OWD on Lead",
      ],
      answer: "B",
      title: "Question 38",
    },
    {
      content:
        "Universal Containers has implemented a community for its customers using the Customer Community sense type. They have implemented a custom object to store service requests that has a look up to the account record. The Organization Wide Default External Access for the service request object is set to Private. Universal Containers wants their customers to be able to see service requests for their account through the community Customers should not see service requests for other accounts. What Salesforce feature can the Architect use to implement this?",
      options: [
        "A. Use a Sharing Rule to share service requests to the community user based on their role.",
        "B. Use manual sharing to share the service requests manually when a new community user is added.",
        "C. Use a Sharing Set to share service requests related to the account based on the community user's profile.",
        "D. Use Apex Managed Sharing to share service requests related to the account to the appropriate community users.",
      ],
      answer: "C",
      title: "Question 39",
    },
    {
      content:
        "Universal Containers created a custom object called Defect and would like to enable the Sharing button on the Defect page layout to share the records manually to other users in the organization. In which scenario will the Sharing button appear?",
      options: [
        "A. The Sharing model is Public Read/Write.",
        "B. The Sharing button always appears.",
        "C. The Sharing model is Public Read/Write/Transfer.",
        "D. The Sharing model is either Private or Public Read only.",
      ],
      answer: "D",
      title: "Question 40",
    },
    {
      content:
        "Which two options can help mitigate the risks of import failures associated with large-volume bulk data loads?\n       Choose 2 answers.",
      options: [
        "A. Group records by ParentID within a batch.",
        "B. Defer Sharing Calculation.",
        "C. Minimize user group hierarchy.",
        "D. Increase batch size.",
      ],
      answer: "A,B",
      title: "Question 41",
    },
    {
      content:
        "Universal Containers would like to track defects within Salesforce. A defect need to have the following fields:\n       * Severity\n       * Type\n       * Status\n       * Description\n       There will be multiple Defects related to the standard Case object. Defects will be assigned to different owners which will often be different to the Case owner. Which option should the Architect choose to meet the requirement?",
      options: [
        "A. Create a custom object for defects and relate it to cases using lookup",
        "B. Create a relationship between the standard defect object and the standard case object.",
        "C. Create a custom object for defects and relate it to cases using master -detail",
        "D. Create all defect fields on the case object to track the defect and lookup.",
      ],
      answer: "A",
      title: "Question 42",
    },
    {
      content:
        "Partner users can access records belonging to users in their account at their same role or lower in the role hierarchy, for Cases, Leads, Opportunities and Custom Objects. Which of the following access has to be given ?",
      options: [],
      answer: " \n       \n        Super user permission\n        ",
      title: "Question 43",
    },
    {
      content:
        "Universal Containers has set Opportunity Sharing to Private with Opportunity Teams enabled. Which three options can change the Owner of the Opportunity?\n       Choose 3 answers.",
      options: [
        'A. The System Administrator or a user with the "Transfer Records" permission.',
        "B. Someone above the Opportunity Owner in the Role Hierarchy.",
        "C. Any Opportunity Team Member on the current Opportunity.",
        "D. The current Opportunity Owner can transfer the current ownership.",
        "E. The user specified as the Manager on the Owner's User Profile.",
      ],
      answer: "A,B,D",
      title: "Question 44",
    },
    {
      content:
        "If you want to create some logic that will share certain records in APEX code, you just have to create special records that will open access to the desired records. The aim is to create records of certain type, for example , all share objects for custom objects are named as",
      options: [],
      answer: " \n       \n        MyCustomObject__Share\n        ",
      title: "Question 45",
    },
    {
      content:
        "Universal Containers has created a Reimbursement Custom Object to capture requests for reimbursement of expenses related to office supplies. The Reimbursement requests are sometimes sensitive and the Team Leads should not have access to the Reimbursement records submitted by the Users in the Call Center Agent role. The Director of Support will require access to all Reimbursement records. The role hierarchy is set as follows: Call Center Agent role reports to Team Lead role, which Reports to the Director of Support. Which steps would the Architect take to ensure proper sharing in this Role Hierarchy structure assuming Private Sharing Setting for the Reimbursement Object?",
      options: [
        'A. Leave the Reimbursement Object in "Deployed" Status and set the Director of Supports Profile to "View All" in the object permissions.',
        "B. The sharing scenario described will occur without any special configuration choices being made by the Architect",
        "C. Use an Approval Process to change the owner of the Reimbursement record upon submission to the Director of Support",
        "D. Disable Grant Access Using Hierarchies for the Object and create a Sharing Rule to enable sharing to the Director of Support",
      ],
      answer: "D",
      title: "Question 46",
    },
    {
      content:
        "Sales managers want their team members to help each other close Opportunities. The Opportunity and Account organization-wide defaults are private. To grant Opportunity access to sales reps on the same team, owner ship-based sharing rules were created for each team.\n       What is the side effect of this approach?",
      options: [
        "A. All sales reps will have Read access to all Accounts.",
        "B. Sales Reps on the same team will have Edit access to the Accounts for Opportunities owned by then team members.",
        "C. All sales reps will have Read access to Accounts for all Opportunities.",
        "D. Sales reps on the same team will have Read access to the Accounts for Opportunities owned by their team members.",
      ],
      answer: "C",
      title: "Question 47",
    },
    {
      content:
        "After testing and deploying a new trigger that creates a related order when a opportunity is closed, the Architect begins receiving complaints of permission error messages appearing when closing an opportunity.\n       How did this error occur?",
      options: [
        "A. The trigger should be using RunAs() when creating the order.",
        "B. The trigger handlers class does not use any sharing keywords and the user does not have access to the orders related to the opportunity.",
        "C. Trigger is using IsCreateable() Apex method and the user doesn't have create permission on the Order object.",
        "D. The trigger handler class is using ''with sharing'' and the user does not have access to the order related to the opportunity.",
      ],
      answer: "D",
      title: "Question 48",
    },
    {
      content:
        "To grant Universal Containers sales managers access to shipment records properly it was necessarily to the IT Team is worried about improper access to records.\n       Which two features and best practices should a Salesforce architect recommended to mitigate the risk?",
      options: [
        "A. USe isShareable keyword in Apex classes to assure record visibility will be followed",
        "B. User isAccessable keyword Apex classes to assure recor visibility will be followed.",
        "C. Use runAs system method in test classes to test using different users and profiles.",
        "D. Use With Sharing keyword in Apex classes to assure record visibility will be followed",
      ],
      answer: "B,D",
      title: "Question 49",
    },
    {
      content:
        "Universal Containers (UC) wants to reduce the amount of redundant leads entered into the system. UC also wants to ensure that leads are only edited/reassigned by the lead owner.\n       What organization wide default (OWD) approach should be recommended to help UC implement these requirements?",
      options: [
        "A. Implement a Private OWD on Lead.",
        "B. Implement a Public Read Only OWD on Lead.",
        "C. Implement a Public Read Only/Transfer OWD on Lead.",
        "D. Implement a Public Read/Write OWD on Lead.",
      ],
      answer: "B",
      title: "Question 50",
    },
    {
      content:
        "Universal Containers has recently implemented an integration that is populating 50 custom fields on the account object. They would like these fields to be available to Managers for reporting but do not want them to clutter the page layouts. What should the Architect recommend as a solution?",
      options: [
        "A. Grant the Managers access to the fields using a Role-Based Sharing Rule; leave them hidden on the page layout.",
        "B. Add the fields to a Custom Report; grant the Managers' Role access to the report folder.",
        "C. Grant Managers access to the fields using Field-Level Security; do not add them to a page layout.",
        "D. Add the fields to the Managers' Account Page Layout; mark the page layout section as Collapsed.",
      ],
      answer: "C",
      title: "Question 51",
    },
    {
      content:
        "Universal Containers uses 75,000 distributors that have close to 1 million total users. Distributors need opportunities assigned to the distributor for delivery.\n       What license recommendation will meet distributor needs?",
      options: [
        "A. Customer Community",
        "B. Partner Community",
        "C. Customer Community Plus",
        "D. Sales Cloud",
      ],
      answer: "B",
      title: "Question 52",
    },
    {
      content:
        "An External Object is created to show Invoices from an external accounting system. When viewing the External Object, a user should only access invoice records the user is authorized to see.\n       What two actions are required to achieve the above requirement? Choose 2 answers",
      options: [
        "A. Restrict access to data in the accounting system.",
        "B. Setup External Object to use OAuth to connect to the Accounting system.",
        "C. Grant access to the External Object to only the Account Manager profile.",
        "D. Create an owner based sharing rule to grant visibility to the Invoice object.",
      ],
      answer: "B,C",
      title: "Question 53",
    },
    {
      content:
        "Universal containers (UC) has a partner community for its 200 distributors. UC customer accounts are .. organization-wide default setting for the custom Delivery object is private.\n       How can an architect advise UC to grant all users at a distributor access to delivery records for all customer distributor?",
      options: [
        "A. Create a Sharing set for the Distributor profile to grant access to the Delivery object.",
        "B. Create a criteria-based sharing rule that shares delivery record matching a distributor to the ...",
        "C. Give ownership of the delivery record to a distributor user.",
        "D. Create a criteria-based sharing rule that shares delivery records matching the Distributor to user distributor.",
      ],
      answer: "A",
      title: "Question 54",
    },
    {
      content:
        "The Architect at Universal Containers has created a List View to show all open Opportunities that were created in the last month, and would like to make this list view visible to certain groups of users. Which two options are available to the Architect for sharing the List View?",
      options: [
        "A. Manual Sharing",
        "B. Profiles",
        "C. Public Groups",
        "D. Roles and Subordinates",
      ],
      answer: "C,D",
      title: "Question 55",
    },
    {
      content:
        "Universal Containers has a requirement to share Accounts automatically to the users at a field office. They currently have the following setup in their environment:\n       * Accounts are set to Private in the Org-Wide Default.\n       * The field office is specified by a lookup in the Account object.\n       * There are 400 field offices.\n       * The users in each field office are managed using public groups.\n       Based upon a lookup relationship field on the Account, how should the Architect meet this requirement?",
      options: [
        "A. Use Account Teams to share the Account with the appropriate field office.",
        "B. Use Criteria-Based Sharing to share the Account with the appropriate field office.",
        "C. Use Programmatic Sharing to share the Account with the appropriate field office.",
        "D. Use Manual Sharing to share the Account with the appropriate field office.",
      ],
      answer: "C",
      title: "Question 56",
    },
    {
      content:
        "Which two capabilities does the delegated administrator permission provide?\n       Choose 2 answers",
      options: [
        "A. Assign users profiles",
        "B. Create profiles",
        "C. Unlock users",
        "D. Set OWD",
      ],
      answer: "A,C",
      title: "Question 57",
    },
    {
      content:
        "Universal Containers wants to store Payment Term Details on the Account object, but the fields should only be visible on certain record types and for certain user profiles.\n       How can a System Administrator quickly determine which user profiles, page layouts, and record types include certain fields?",
      options: [
        "A. Click the Field-Level Security for the field on each Profile.",
        "B. Universally require the field at the field level.",
        "C. Log in as each user profile and view the Account Page Layouts.",
        "D. Use the Field Accessibility Viewer for the fields in question",
      ],
      answer: "D",
      title: "Question 58",
    },
    {
      content:
        "What should a Salesforce architect recommend to make sure that users that gained access to a custom object record through Apex managed sharing do not lose access to it when its owner is changed?",
      options: [
        "A. Use ''With Sharing'' keyword to make sure record visibility will be considered.",
        "B. Use \"runAs'' system method in Apex classes to enforce record visibility.",
        "C. Create a new record in _Share object with RowCause 'Manual''.",
        "D. Create specific Apex Sharing Reason for the custom object.",
      ],
      answer: "D",
      title: "Question 59",
    },
  ],
});
