window.testContent = window.testContent || [];
var testId = "Salesforce.Sharing-and-Visibility-Designer";
var testName = "Salesforce.Sharing-and-Visibility-Designer";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "Salesforce.Sharing-and-Visibility-Designer.v2023-06-24.q109",
  content: [
    {
      content:
        "In the Salesforce org used by Cosmic Service Solutions, a Visualforce page has been created to allow users to view and update information related to the records of a custom object called 'Shipment'. A developer would like to enforce both field-level and object-level security in the custom controller of the page. Which of the following classes can be utilized for this use case? Choose 2 answers.",
      options: [
        "A. Schema.DescribeFieldResult",
        "B. Schema.DescribeField",
        "C. Schema.DescribeSObjectResult",
        "D. Schema.DescribeSObject",
      ],
      answer: "A,C",
      title: "Question 1",
    },
    {
      content:
        "Universal Containers has set Opportunity Sharing to Private with Opportunity Teams enabled. Which three options can change the Owner of the Opportunity?\n       Choose 3 answers.",
      options: [
        'A. The System Administrator or a user with the "Transfer Records" permission.',
        "B. Any Opportunity Team Member on the current Opportunity.",
        "C. The current Opportunity Owner can transfer the current ownership.",
        "D. Someone above the Opportunity Owner in the Role Hierarchy.",
        "E. The user specified as the Manager on the Owner's User Profile.",
      ],
      answer: "A,C,D",
      title: "Question 2",
    },
    {
      content:
        "Cloud Kicks recently decided to change its role hierarchy.\n       After this change was deployed, multiple staff members at Cloud Kicks reported to management that they can now view reports that they do not own and should not have access to.\n       What should the Architect do to assess the cause of the issue?",
      options: [
        "A. While logged in as the System Administrator, use the Field Accessibility Viewer to view a matrix of who has access to Accounts.",
        "B. While logged in as one of the staff members, navigate to their user record and inspect their profile and role membership.",
        "C. While logged in as the one of the staff members, navigate to a sample account and use the Sharing button to determine who has access.",
        "D. While logged in as the System Administrator, navigate to a sample account and use the Sharing button to determine who has access.",
      ],
      answer: "C",
      title: "Question 3",
    },
    {
      content:
        "Which two access grants are stored in the Group Maintenance tables?\n       Choose 2 answers",
      options: [
        "A. Implicit grants",
        "B. Group Membership grants",
        "C. Inherited access grants",
        "D. Explicit grants",
      ],
      answer: "B,C",
      title: "Question 4",
    },
    {
      content:
        "Universal Containers (UC) has a requirement to expose a web service to their business partners. The web service will be used to allow each business partner to query UC's Salesforce instance to retrieve the status of orders. The business partner should only be allowed access to orders for which the business partner is the fulfillment vendor. The Architect does not want the business partners to utilize the standard APIs and would prefer a custom API be developed. Which three design elements should the Architect consider in order to ensure the data security of the solution?\n       Choose 3 answers",
      options: [
        "A. Query the Orders object with Dynamic SOQL based upon the fulfillment ID.",
        'B. Develop a custom Apex web service using the "With Sharing" keyword.',
        "C. Provide each partner with their own Salesforce login set to API Enabled on the profile.",
        "D. Develop a custom Apex web service with a fulfillment ID input attribute",
        "E. Set the Orders object's sharing settings to Private in the Org-Wide Defaults",
      ],
      answer: "A,B,E",
      title: "Question 5",
    },
    {
      content:
        "In order to allow community users to collaborate on Opportunities, which license type must the users.",
      options: [
        "A. Customer Community",
        "B. Partner Community",
        "C. Sales Community",
        "D. Customer Community plus",
      ],
      answer: "B",
      title: "Question 6",
    },
    {
      content:
        "Universal Containers (UC) provides shipment tracking for its customers on a custom Shipment object. The total number of shipments made yearly by the customers should be available on the Account record to the Marketing team, but the Marketing team should not have access to Shipment records.\n       What recommendation should an Architect provide to accomplish this?",
      options: [
        "A. Private organization-wide default on Shipment, trigger, and Lookup relationship to Account.",
        "B. Controlled by Parent (Account) on Shipment, trigger, and Master-Detail relationship to Account.",
        "C. Private organization-wide default on Shipment, rollup summary, and Master-Detail relationship to Account.",
        "D. Public organization-wide default on Shipment, process builder, and Lookup relationship to Account.",
      ],
      answer: "A",
      title: "Question 7",
    },
    {
      content:
        "Cosmic Service Solutions has set up an integration with its on-premise database to update several Salesforce users and more than a million accounts and opportunities in Salesforce. The integration is going to update the role of several users and the ownership of thousands of records. What should a Salesforce Architect recommend to ensure that there are no locking errors during the update? Choose 1 answer.",
      options: [
        "A. Change the organization-wide default setting of all objects to 'Public Read/Write'",
        "B. Use parallel recalculation of sharing rules",
        "C. Enable the granular locking feature",
        "D. Use deferred sharing maintenance",
      ],
      answer: "C",
      title: "Question 8",
    },
    {
      content:
        "Universal Containers provides 24x7 support for its customers worldwide using call centers in three different countries with each one covering an 8-hour shift in different time zones. Service reps in a call center have access to the same information but only during their local working hours.\n       Which feature in Salesforce controls access for specific login hours?",
      options: [
        "A. Profiles",
        "B. Permission sets",
        "C. Set the login hours on user records",
        "D. Custom permissions",
      ],
      answer: "A",
      title: "Question 9",
    },
    {
      content:
        "Which two access grants are stored in the Group Maintenance tables?\n       Choose 2 answers",
      options: [
        "A. Group Membership grants",
        "B. Inherited access grants",
        "C. Explicit grants",
        "D. Implicit grants",
      ],
      answer: "B,D",
      title: "Question 10",
    },
    {
      content:
        "Get Cloudy Consulting uses a strict security model. They enforce this model through object, field, and row- based security mechanisms. The Chief Technology Officer (CTO) at Get Cloudy Consulting wants to thoroughly test the security model, and an Architect decides to use Apex automated tests to fulfill the CTO's request.\n       What are three considerations for the Architect when using the runAs() method to design Apex unit tests?\n       (Choose three.)",
      options: [
        "A. runAs() can be used inside of test classes to validate record-level security",
        "B. runAs() counts towards total DML statements issued within the transaction",
        "C. runAs() can be used outside of test classes to bypass record-level security",
        "D. runAs() does NOT enforce user permissions or field-level permissions in test classes",
        "E. runAs() can be used inside of test classes to validate field-level permissions",
      ],
      answer: "A,B,D",
      title: "Question 11",
    },
    {
      content:
        "Ursa Major Solar wants the ability to hide specific regional accounts from sales reps and sales managers. Only roles that are sales executive, or above, should be able to access regional accounts. The company plans to update their Organization-Wide Sharing Settings for the Account Object from a Public Read/Write model to a Private model to accomplish their goal? Ursa Major Solar's Role Hierarchy matches its organizational hierarchy.\n       What are two approaches an Architect should consider when designing the solution? (Choose two.)",
      options: [
        "A. Regional accounts must be owned by a user who is above the sales managers to the Role Hierarchy.",
        "B. If a sales rep is added to the Opportunity Team for a regional account, they will gain access to account data.",
        "C. Ensure that Apex managed sharing is disabled for the account object to protect the regional accounts.",
        "D. Sales executives will need a sharing rule created so that they can see accounts owned by Sales Users.",
      ],
      answer: "A,B",
      title: "Question 12",
    },
    {
      content:
        "Cloud Kicks imports large-volume bulk data loads and wants to limit the risk of failures associated with these imports.\n       What are two options for achieving this goal? (Choose two.)",
      options: [
        "A. Group records by ParentID within a batch",
        "B. Reduce user group hierarchy",
        "C. Enlarge batch size",
        "D. Defer Sharing Calculation",
      ],
      answer: "A,D",
      title: "Question 13",
    },
    {
      content:
        "Universal Containers has set the Org-Wide Sharing Default for Accounts to Private and has created some sharing rules to extend access based on certain data access policies. An architect has been asked to review access to a certain set of key customer accounts. How might this review be conducted?",
      options: [
        "A. Use the Sharing button on each customer Account.",
        "B. Export the Account Share table and review.",
        "C. Run a Report on Sharing in the Admin Console.",
        "D. Log in as each user and Run the All Accounts List View.",
      ],
      answer: "B",
      title: "Question 14",
    },
    {
      content:
        "The IT manager of Cosmic Solutions would like to improve the performance of record access and sharing calculations in the Salesforce org used by the company, especially for accounts and related records. What should a Solution Architect recommend for this requirement? Choose 3 answers.",
      options: [
        "A. No user should own more than 10,000 account records in Salesforce.",
        "B. No account should have more than 10,000 opportunities or cases related to it.",
        "C. Users who own more than 10,000 records should be placed at the bottom of the role hierarchy.",
        "D. No more than 10,000 records of a custom object should be related to a single account record.",
        "E. No user should own more than 10,000 total records in Salesforce.",
      ],
      answer: "A,B,D",
      title: "Question 15",
    },
    {
      content:
        "Cosmic Repair Solutions uses a custom object called 'Repair Job' to store information about repair jobs in Salesforce. Generally, a group of three field technicians is assigned to each repair job. When field technicians are assigned to a repair job, the record associated with the job is shared programmatically with each user using Apex Managed Sharing. However, an assignment is often changed later, which requires sharing a record with the required users again using the same code. As a result, manual sharing recalculation needs to be performed.\n       Which of the following can be created and/or utilized to optimize the existing process of sharing a record with the assigned field technicians? Choose 1 answer.",
      options: [
        "A. Sharing Rule",
        "B. Manual Sharing",
        "C. Sharing Setting",
        "D. Public Group",
      ],
      answer: "B,D",
      title: "Question 16",
    },
    {
      content:
        "Universal Containers has enabled External Default Sharing and wants to allow for external users to have the External Sharing Default set to Public Read-Only for a custom object. Which two options are valid Internal Default sharing settings for the custom object?",
      options: [
        "A. Public Read Only",
        "B. Private",
        "C. Public Read/Write",
        "D. Controlled by Parent",
      ],
      answer: "A,C",
      title: "Question 17",
    },
    {
      content:
        "Cosmic Solutions uses a private sharing model for account records and has defined a role hierarchy based on its organizational hierarchy. Some of its features are as follows:1) There are two branches in the hierarchy for the United States and Europe.2) The role of US Sales Reps is below the role of the US Sales Manager.3) EU Sales Reps report to the EU Sales Manager.4) EU Sales Manager reports to the EU Sales Director, and the US Sales Manager reports to the US Sales Director.5) US Sales Director and EU Sales Director report to the same Vice President of Sales.A sales rep who is currently working in the United States is going to be transferred to France. The system administrator of the company will soon change his role in Salesforce. What will be the impact of this change on record access? Choose 3 answers.",
      options: [
        "A. The US Sales Director will lose access to records owned by the sales rep.",
        "B. The EU Sales Manager will gain access to records owned by the sales rep.",
        "C. Sales reps in Europe will gain access to all records shared with the sales rep.",
        "D. The Vice President of Sales will lose access to any records shared with the sales rep.",
        "E. The US Sales Manager will lose access to records owned by the sales rep.",
      ],
      answer: "A,B,E",
      title: "Question 18",
    },
    {
      content:
        "Which two options are available to share a Report or Dashboard folder with other users in the Organization?\n       Choose 2 answers",
      options: ["A. Profiles", "B. Roles", "C. Public Groups", "D. Teams"],
      answer: "B,C",
      title: "Question 19",
    },
    {
      content:
        'Universal Container would like to create a custom team solution that can be used on a custom object Loan object. The following requirements must be met: The Loan custom object should be set to Private in the Org-Wide Defaults Any user added to the Custom team object should have RO access to the corresponding Loan record If the Custom team record is marked as "Primary" then the corresponding user should have Read/Edit access to the corresponding Loan record Which two methods will allow the Architect to meet the requirements? Choose two answers:',
      options: [
        "A. Create an owner-based sharing rule on the Custom Team object that will share the Loan record to the owner of the Custom Team record",
        "B. Create a criteria-based sharing rule on the Loan object that will share the Loan record with the appropriate user in the Custom team object",
        "C. Create Apex sharing Reasons on the Loan object to identify the reason the Loan record was shared",
        "D. Create a custom trigger on The Custom Team object that inserts or updates records in the Loan__Share object",
      ],
      answer: "C,D",
      title: "Question 20",
    },
    {
      content:
        'Get Cloudy Consulting wants to create a custom team solution that can be used on a custom Loan object. The Loan custom object must be set to Private in the Org-Wide Defaults, and any user added to the Custom Team object should have Read Only access to the corresponding Loan record. Additionally, if the Custom Team record is marked as "Primary" then the corresponding user should have Read/Edit access to the corresponding Loan record.\n       What are two methods for fulfilling these requirements? (Choose two.)',
      options: [
        "A. Create a custom trigger on the Custom Team object that inserts or updates records in the Loan_share object",
        "B. Create Apex Sharing Reasons on the Loan object to identify the reason the Loan record was shared",
        "C. Create a criteria-based sharing rule on the Loan object that will share the Loan record with the appropriate user in the Custom Team object",
        "D. Create an owner-based sharing rule on the Custom Team object that will share the Loan record to the owner of the Custom Team record",
      ],
      answer: "C,D",
      title: "Question 21",
    },
    {
      content:
        "Universal Containers (UC) has recently changed its internal policy to follow market regulations and create an internal team to manage the collection process. Only this team should have access to Invoke records. currently, invoke is a child in a Master-Detail relationship to Account. Although related lists have been removed from the page layouts, some profiles stills have access to the invoice object.\n       Which approach should an architect recommend to fix this problem?",
      options: [
        "A. Change the Invoke organization-wide default from Controlled by Parent to Private and remove invoke access from the unauthorized",
        "B. Create a Permission Set with No Access to the Invoice object and assign it to unauthorized users.",
        "C. Create a new Profile with no access to the Invoice object and assign it to all unauthorized users.",
        "D. Replace Account and Invoke Master Detail Relationship by a Lookup and remove Invoice Access from the unauthorized profiles,",
      ],
      answer: "A",
      title: "Question 22",
    },
    {
      content:
        "Assuming granular locking is enabled, what activity can happen in parallel to changing a community account owner without risking group membership lock errors?",
      options: [
        "A. Deletion of a Territory",
        "B. Creation of a Role",
        "C. Creation of a Territory",
        "D. Deletion of a Role",
      ],
      answer: "C",
      title: "Question 23",
    },
    {
      content:
        "Review the organizational information below about DreamHouse Realty:\n       - Ryan and Kimberly are the East sales reps and their manager is Katrina, the East sales executive.\n       - Sam and Wilder are West sales reps and their manager is Bob, the West sales executive.\n       - Wendy is the CEO and managers both Katrina and Bob.\n       - DreamHouse Realty's role hierarchy follows their management structure. Ryan owns an account, NewCompany, and Kimberly owns an account, OldCompany. Katrina manually shared her account NewWorld with Kimberly. However, she has moved to a new role to lead all Named Accounts, and Lucy, who replaced her, is the new owner of NewWorld.\n       Which employees will have access to the NewWorld account?",
      options: [
        "A. Wendy and Lucy",
        "B. Wendy, Ryan, Lucy, and Kimberly",
        "C. Wendy, Lucy, and Kimberly",
        "D. Wendy, Katrina, and Kimberly",
      ],
      answer: "A",
      title: "Question 24",
    },
    {
      content:
        "A developer at Universal Container is building an integration within a managed package for their internal org that requires login to an external system. The end point requires basic authentication. The Architect would like to ensure that the username and password are managed securely. Which three options should the Architect recommend to secure the credentials?",
      options: [
        "A. Store the credentials in a custom object using encrypted fields",
        "B. Store the credentials in the apex code, which will not be available to non-admins",
        "C. Store the credentials in named credentials that are used in the apex callout",
        "D. Store the credentials in protected custom settings that are used in the apex callout",
        "E. Store the credentials in protected custom metadata that are used in the apex callout",
      ],
      answer: "C,D,E",
      title: "Question 25",
    },
    {
      content:
        'Cloud Kicks has the following setup and requirements:\n       - A strict software architecture for their custom Apex code.\n       - All SOQL queries must be contained within reusable classes.\n       - Depending on the context of the Apex transaction, the queries should be able to run either "With Sharing" or\n       "Without Sharing".\n       What are two methods for meeting these requirements? (Choose two.)',
      options: [
        'A. 1. Create a SystemSOQLQueries class and a UserSOQLQueries class.2. Set the "With Sharing" keyword on the UserSOQLQueries class and "Without Sharing" on the SystemSOQLQueries class.',
        'B. 1. Create a reusable SOQLQueries class.2. Specify "With Sharing" on the methods that require user context and "Without Sharing" on the methods requiring system context.',
        'C. 1. Create a reusable SOQLQueries class.2. Do NOT specify "With" or "Without Sharing" on the SOQLQueries class and use the runAs() method to dynamically set the context.',
        'D. 1. Create a reusable SOQLQueries class.2. Do NOT specify "With" or "Without Sharing" on the SOQLQueries class.',
      ],
      answer: "A,B",
      title: "Question 26",
    },
    {
      content:
        "Universal Containers has a customer that meets criteria for two Enterprise territory Management territories (Portugal and Southern Europe).\n       What is necessary to assign opportunities to a territory for this account?",
      options: [
        "A. The territory with the highest Territory Type Priority is automatically assigned to the Opportunity",
        "B. Create a criteria-based sharing rule on the Opportunity to assign It to a territory.",
        "C. Create a Process Builder Process that updates the Territory field on the Opportunity",
        "D. Create an Apex class that implement. Filter-Based Opportunity Territory Assignment",
      ],
      answer: "D",
      title: "Question 27",
    },
    {
      content:
        "Which two options can help mitigate the risks of import failures associated with large-volume bulk data loads?\n       Choose 2 answers.",
      options: [
        "A. Increase batch size.",
        "B. Minimize user group hierarchy.",
        "C. Group records by ParentID within a batch.",
        "D. Defer Sharing Calculation.",
      ],
      answer: "C,D",
      title: "Question 28",
    },
    {
      content:
        "Universal Containers maintains Job information in a Custom Object that contains sensitive information. The only users who should be able to view and edit Job records are the user who owns the record and all users in the Delivery profile. Which three platform sharing tools are required to support the above requirements?\n       Choose 3 answers.",
      options: [
        'A. "View All Data" profile permission on the Delivery Profile.',
        "B. Organization-Wide Default sharing setting of Private on the Job Object.",
        "C. Grant access Using Hierarchy sharing setting on the Job Object set to false.",
        'D. "Modify All" permission for Job Object on the Delivery Profile.',
        "E. Criteria-Based sharing rule for the Delivery Profile on the Job Object.",
      ],
      answer: "B,C,D",
      title: "Question 29",
    },
    {
      content:
        "A dummy user at Universal Containers owns more that 10,000 lead records. The system assigned all these leads to a dummy user. This is causing performance issues whenever role hierarchy changes. Which two options should be recommended to improve performance?\n       Choose 2 answers.",
      options: [
        "A. Do not assign a role to the dummy user.",
        "B. Add the dummy user to the bottom of the role hierarchy.",
        "C. Add the dummy user into a public group.",
        "D. Assign ownership to a small number of users.",
      ],
      answer: "A,D",
      title: "Question 30",
    },
    {
      content:
        "Universal Containers (UC) has implemented Customer Community with customer community plus licenses for their distributors. Some distributors requested granting specific community users (agents) to view cases submitted by other agents of the same distributor.\n       Which feature only supports these requirements?",
      options: [
        "A. Delegate external user",
        "B. Partner community admin.",
        "C. Partner super user",
        "D. Permission set to grant community admin permission",
      ],
      answer: "C",
      title: "Question 31",
    },
    {
      content:
        "Sales managers at Universal Containers (UC) have requested viewing customer invoices in Salesforce .. system. The architect at UC decided to surface the customer invoices in Salesforce using external objects a..\n       Configured an external object called Invoice.\n       Created a lookup relationship between account and the invoice\n       How can the architect grant the sales managers access to the customer invoices data?",
      options: [
        "A. By using manual sharing to share invoices with relevant sales managers.",
        "B. By creating sharing rules to share the invoice records with users in sales manager roles.",
        "C. By controlling the invoices object permission on the sales manager's profile.",
        "D. By creating a sharing set a share invoice with users in a sales manager role.",
      ],
      answer: "C",
      title: "Question 32",
    },
    {
      content:
        "Universal Containers' organization wide-defaults model is private for the Account object. A sales repeats to opportunity records.\n       Which level of access will the sales rep have to the related account record?",
      options: [
        "A. Read/Create/Edit access",
        "B. Read/Create access",
        "C. Read-only access",
        "D. No access",
      ],
      answer: "C",
      title: "Question 33",
    },
    {
      content:
        'What is the security vulnerability in the following code snippet?\n       <apex:form>\n       <apex:commandButton rerender="outputIt" value="Update It"/>\n       <apex:inputText value="{ !myTextField}"/>\n       </apex:form>\n       <apex:outputPanel id="outputIt">\n       Value of myTextField is <apex:outputText value="{!myTextField}" escape="false"/>\n       </apex:outputPanel>',
      options: [
        "A. Cross-Site Scripting",
        "B. Access Control",
        "C. Arbitrary Redirects",
        "D. SOQL Injection",
      ],
      answer: "B",
      title: "Question 34",
    },
    {
      content:
        "Universal Containers has a custom Job object with a private sharing model. Based on the size and location of the Job, different teams must have access to edit the specific Job record. To support this requirement, Apex Managed Sharing has been implemented to share records with the required users. Since the teams change frequently, managed sharing recalculations need to be manually run frequently. What can the Architect do to optimize this process?",
      options: [
        "A. Create a scheduled job to automatically run the sharing recalculations on a nightly basis.",
        "B. Create public groups for each team, and share the jobs with the groups instead of users.",
        "C. Change the sharing model on the Job object to Public Read/Write.",
        "D. Create a custom Visualforce page to edit the jobs and specify Without Sharing on the controller.",
      ],
      answer: "B",
      title: "Question 35",
    },
    {
      content:
        "Mary is Joe's manager in the role hierarchy. The OWD for a custom Invoice object is Public ReadOnly and Mary's profile is not granted the Read permission for the Invoice object.\n       What action can Mary take on Joe's Invoice records'?",
      options: ["A. Edit Only", "B. View Only", "C. Read/Write", "D. None"],
      answer: "D",
      title: "Question 36",
    },
    {
      content:
        "Universal Containers (UC) is implementing Sales Cloud. During the final quarter of the financial year, sales managers help each other close deals. They requested a solution in Salesforce to allow them to share opportunities with other sales managers from different teams as needed. They also requested that sharing deals should expire automatically two weeks after the new fiscal year starts.\n       Which two options to propose a solution to meet the requirements? (Choose two.)",
      options: [
        "A. Scheduled Apex job to remove access.",
        "B. Opportunity team to share opportunities with sales managers.",
        "C. Apex Sharing to share opportunities with sales managers.",
        "D. Sharing Rules to share opportunities with sales managers.",
      ],
      answer: "A,B",
      title: "Question 37",
    },
    {
      content:
        "Ursa Major Solar sells solar panels globally and is growing rapidly. The company has over 5,000 dealerships throughout the world where local dealers service solar panels sold locally. Ursa Major Solar recently opened two dealerships in California: NorthCal and SoCal. Ursa Major Solar implemented a new partner community to enable their dealers. Each dealership has a dealer Manager who has all service agents report into them.\n       Additionally, Ursa Major Solar uses a private sharing model.\n       The company needs to enable dealer managers to have visibility to customer cases within their dealership but NOT across all dealerships.\n       What should the Architect recommend to accomplish this goal?",
      options: [
        "A. Implement sharing groups that share all cases to all agents under the Dealer manager",
        "B. Implement a batch job that creates sharing rules as needed, based on the cases created",
        "C. Build a trigger that creates manual sharing of cases as needed whenever a new case is created",
        "D. No changes are needed to the sharing and visibility model to implement this requirement",
      ],
      answer: "D",
      title: "Question 38",
    },
    {
      content:
        "Universal Containers (UC) has Affiliates who sell containers in countries' where UC does not have a local office Community to manage the sales cycle. One of their affiliates has exponentially grown in the last years and .. with the following structure:\n       Sales VP ..> Direct of Sales .. > Sales Manager ..> Sales Reps\n       UC would like to have the ability to open up access to the sales opportunities according to the above structure.\n       What is the main problem a Salesforce Architect will face to provide a solution?",
      options: [
        "A. Super User does not work in Partner Community.",
        "B. The Channel manager Role can not be shared with Partner Community.",
        "C. Partner Community does not support Role Hierarchy.",
        "D. Partner User Roles are limited to three levels.",
      ],
      answer: "D",
      title: "Question 39",
    },
    {
      content:
        "Universal Containers (UC) tuned off the Customer User Visibility feature inits Customer Community.\n       What community functionality is expected by having the Customer User Visibility tuned off?",
      options: [
        "A. Searching for other external users.",
        "B. Updating their user profile.",
        "C. Creating new Customer community users.",
        "D. Search for internal users.",
      ],
      answer: "A",
      title: "Question 40",
    },
    {
      content: "What is a workaround to ownership data skew?",
      options: [
        "A. You can minimize possible performance impacts by not assigning the user(s) to a role.",
      ],
      answer: "A",
      title: "Question 41",
    },
    {
      content:
        "Susan posts a file to the Chatter feed for a record of an object.\n       Which two statements accurately describe who can view the file by default?",
      options: [
        "A. Susan and users with the View all Data permission.",
        "B. Susan and users with a shared Chatter post for the file.",
        "C. Susan only",
        "D. Susan and users with access to the record.",
      ],
      answer: "A,D",
      title: "Question 42",
    },
    {
      content:
        "The administrator of Cosmic Solutions has created three criteria-based sharing rules to share certain types of account records with the role of sales reps and a public group that consists of a few sales associates. The sales director would like the architect to review and ensure that the users can access these accounts. Which solution can be utilized for this requirement? Choose 1 answer.",
      options: [
        "A. Export the Account record table to review access to the records.",
        "B. Export the AccountShare table to review access to the records.",
        "C. Export the group maintenance table to review access to the records.",
        "D. Export the sharing settings associated with the Account object.",
      ],
      answer: "B",
      title: "Question 43",
    },
    {
      content:
        'Universal Containers would like to create a custom team solution that can be used on a custom Loan object. The following requirements must be met:\n       The Loan custom object should be set to Private in the Org-Wide Defaults.\n       Any user added to the Custom Team object should have Read Only access to the corresponding Loan record. If the Custom Team record is marked as "Primary" then the corresponding user should have Read/Edit access to the corresponding Loan record.\n       Which two methods will allow the Architect to meet the requirements?\n       Choose 2 answers.',
      options: [
        "A. Create a custom trigger on the Custom Team object that inserts or updates records in the Loan_share object.",
        "B. Create Apex Sharing Reasons on the Loan object to identify the reason the Loan record was share.",
        "C. Create a criteria-based sharing rule on the Loan object that will share the Loan record with the appropriate user in the Custom Team object.",
        "D. Create an owner-based sharing rule on the Custom Team object that will share the Loan record to the owner of the Custom Team record.",
      ],
      answer: "C,D",
      title: "Question 44",
    },
    {
      content:
        "Sales manager at universal containers (UC) have requested viewing customer invoices in Salesforce. Invoice data is mastered in the ERP system. The architect at UC decided to surface the customer invoices in salesforce using external objects and did the following:\n       -Configured an external object called Invoice.\n       -Created a lookup relationship between account and the invoice.\n       How can the architect grant the sales managers access to the customer invoices data?",
      options: [
        "A. By creating controlling the invoices object permission on the sales manager's profile.",
        "B. By creating manual sharing to share invoices with relevant sales managers.",
        "C. By creating a sharing set to share invoices with users in sales manager role.",
        "D. By creating sharing rules to share the invoices records with users in sales mangers roles.",
      ],
      answer: "A",
      title: "Question 45",
    },
    {
      content:
        "The architect at Universal Containers is trying to ensure that security vulnerabilities are not present within the Salesforce organization.\n       What two tests should the architect verify?\n       Choose 2 answers",
      options: [
        "A. Test for SOQL Injection.",
        "B. Test Cross-Site Scripting on custom pages.",
        "C. Test Cross-Site Scripting on Apex queries.",
        "D. Test for invalid user access attempts.",
      ],
      answer: "A,B",
      title: "Question 46",
    },
    {
      content:
        "Universal Containers (UC) has implemented Customer Community with customer community license for .. any record owned by its customers should be accessible by UC users in the customer support role.\n       How can an Architect configure the system to support the requirements?",
      options: [
        "A. Sharing Rule",
        "B. Sharing Set",
        "C. Share Group",
        "D. Apex Sharing",
      ],
      answer: "C",
      title: "Question 47",
    },
    {
      content:
        "Which of the following is used to encrypt a variety of widely used standard fields, along with some custom fields and many kinds of files.",
      options: ["A. Shield Encryption."],
      answer: "A",
      title: "Question 48",
    },
    {
      content:
        "The system administrator of Cosmic Solutions recently created a custom profile for sales users that allows them to view and edit the records of a custom object called 'Shipment'. There are more than 100 sales users in the company. The Sales Director has now informed the administrator that five of those users should not be able to edit any Shipment records. What should a Solution Architect recommend for the requirement? Choose 1 answer.",
      options: [
        "A. Edit the existing custom profile assigned to the sales users and remove 'Edit' access to the 'Shipment' object.",
        "B. Create a new profile without 'Edit' access to the 'Shipment' object and assign it to the five users.",
        "C. Create a sharing rule that grants only 'Read' access to the records of the 'Shipment' object.",
        "D. Create a permission set without 'Edit' access to the 'Shipment' object and assign it to the five",
      ],
      answer: "B",
      title: "Question 49",
    },
    {
      content:
        "Universal Containers (UC) delivers training in 500 different regions. The UC Operations Users team manage course setup, scheduling, and trainer setup. The Operations Users team members work at a regional level and report to an Operations manager. The Operations manager requested access to edit ALL scheduled courses owned by the Operation Users team.\n       How can this be achieved?",
      options: [
        "A. The Operations manager will get access to the scheduled courses by creating a public group and add the Operations manager and the Operations Users team to the public group",
        "B. The Operations manager will get access to the scheduled courses owned by the Operations Users team defined in the role hierarchy.",
        "C. The Operations manager will get access to the scheduled courses by creating an ownership-based sharing rule and share the scheduled courses with the Operations manager.",
        "D. The Operations manager will get access to the scheduled courses by granting the Operations manager modify ALL on scheduled courses.",
      ],
      answer: "B",
      title: "Question 50",
    },
    {
      content:
        "Universal Containers is creating a custom Visualforce page to allow users to edit contact records. The developer has used an apex:outputField for the Phone field on the contact object. What is the expected behavior if a user without field-level security accesses the Visualforce page?",
      options: [
        "A. The user is able to enter a value into the Phone field.",
        "B. The user encounters an error while saving the record.",
        "C. The output field is visible to the user.",
        "D. The field is automatically removed from the page.",
      ],
      answer: "D",
      title: "Question 51",
    },
    {
      content:
        "After testing and deploying a new trigger that does creates a related order when a opportunity is closed, the .. complaints of permission error messages appearing when closing an opportunity.\n       How did this error occur?",
      options: [
        "A. The trigger handlers class does not use any sharing keywords and the user not have access to the orders related to the opportunity.",
        "B. The trigger handler class is using ''with sharing'' and the user does not have access to the orders related to the opportunity.",
        "C. Trigger is using IsCreateable() Apex method and the user doesn't have create permission on the Oder object.",
        "D. The trigger should be using RunAs() when creating the order.",
      ],
      answer: "C",
      title: "Question 52",
    },
    {
      content:
        "Cosmic Enterprises has created a custom object called 'Promotion' to store information about promotions offered by the company. The organization-wide default sharing setting of this custom object has been set to\n       'Private' and granting access via hierarchies has been disabled for it. Certain records of this object need to be shared with all the users who are assigned to the role of 'Sales Agent'. What can be done to meet this requirement using Apex? Choose 1 answer.",
      options: [
        "A. Create 'Promotion__Share' records and use a public group that consists of the sales agents to grant access.",
        "B. Create 'Promotion__Share' records and use a public group that consists of the 'Sales Agent' role to grant access.",
        "C. Create 'Promotion__Share' records and use user IDs to grant access.",
        "D. Create 'Promotion__Share' records and use a sharing group associated with the 'Sales Agent' role to grant access.",
      ],
      answer: "D",
      title: "Question 53",
    },
    {
      content:
        "Universal Container (UC) wants all full-time internal employees to be able to view all leads. A subset of employees should also be able to see leads.\n       Which organization default (OWD) approach should an architect recommend that will help US employee?",
      options: [
        "A. Implement a Public Read/write OWD on Lead",
        "B. Implement a Private OWD on Lead.",
        "C. Implement a Public Read/write/Transfer OWD on Lead.",
        "D. Implement a Public Read only OWD on Lead",
      ],
      answer: "C",
      title: "Question 54",
    },
    {
      content:
        "A developer wants to build an application on the Force.com platform. The data model, the users needing access to the application, and the application business logic have been considered. The report and dashboard requirements have not been considered. Which statement is TRUE about building the application?",
      options: [
        "A. The data model may not support the required business logic",
        "B. The data model may not support the required reports/ required security controls",
        "C. The developer will not be able to load application data",
        "D. The dashboard will not be visible to management users",
      ],
      answer: "B",
      title: "Question 55",
    },
    {
      content:
        "Universal Containers has just deployed a change to its role hierarchy. A manager is reporting that their staff can now see Accounts that they do not own and should not have access to. How should the Architect troubleshoot?",
      options: [
        "A. While logged in as the System Administrator, use the Field Accessibility Viewer to view a matrix of who has access to Accounts. ",
        "B. While logged in as the System Administrator, use the Field Accessibility Viewer to view a matrix of who has access to Accounts.",
        "C. While logged in as the one of the Staff members, navigate to their user record and inspect their profile and role membership.",
        "D. While logged in as the one of the Staff members, navigate to a sample account and use the Sharing button to determine who has access.",
      ],
      answer: "D",
      title: "Question 56",
    },
    {
      content:
        "Sales managers want their team members to help each other close Opportunities. The Opportunity and Account organization-wide defaults are private. To grant Opportunity access to sales reps on the same team, owner ship-based sharing rules were created for each team.\n       What is the side effect of this approach?",
      options: [
        "A. All sales reps will have Read access to Accounts for all Opportunities.",
        "B. Sales reps on the same team will have Read access to the Accounts for Opportunities owned by their team members.",
        "C. All sales reps will have Read access to all Accounts.",
        "D. Sales Reps on the same team will have Edit access to the Accounts for Opportunities owned by then team members.",
      ],
      answer: "B",
      title: "Question 57",
    },
    {
      content:
        "In order to comply with Regulatory Requirements, Universal Containers must store sensitive customer information on-premise. Universal Containers would like this on-premise information to be accessible from Salesforce. What technology can Universal Containers use to achieve this?",
      options: [
        "A. Implement an on-premise database.",
        "B. Implement the Salesforce Shield toolkit.",
        "C. Implement a third-party tokenization service.",
        "D. Implement a third-party proxy server.",
      ],
      answer: "D",
      title: "Question 58",
    },
    {
      content:
        'Universal Containers has the following Sharing Settings for their Org:\n       Account = Private\n       Contact = Controlled by Parent\n       Opportunity = Private\n       Case = Private\n       They have enabled "Default Account Teams" and have trained users to set up their Default Team. Which three access levels can be set on the Account Team Member?\n       Choose 3 answers',
      options: [
        "A. Contract Access",
        "B. Contact Access",
        "C. Account Access",
        "D. Opportunity Access",
        "E. Case Access",
      ],
      answer: "C,D,E",
      title: "Question 59",
    },
    {
      content:
        'Universal Containers uses the Case object to track service tickets. They have implemented Case teams to allow multiple support representatives to manage the Cases. Which two "Filter by owner" options would the user see while creating a list view on the Case object? Choose 2 answers',
      options: ["A. Roles", "B. My Case Teams", "C. Queue", "D. Public Groups"],
      answer: "B,C",
      title: "Question 60",
    },
    {
      content:
        "Universal Containers has created a Reimbursement Custom Object to capture requests for reimbursement of expenses related to office supplies. The Reimbursement requests are sometimes sensitive and the Team Leads should not have access to the Reimbursement records submitted by the Users in the Call Center Agent role. The Director of Support will require access to all Reimbursement records. The role hierarchy is set as follows: Call Center Agent role reports to Team Lead role, which Reports to the Director of Support. Which steps would the Architect take to ensure proper sharing in this Role Hierarchy structure assuming Private Sharing Setting for the Reimbursement Object?",
      options: [
        "A. Disable Grant Access Using Hierarchies for the Object and create a Sharing Rule to enable sharing to the Director of Support",
        "B. Use an Approval Process to change the owner of the Reimbursement record upon submission to the Director of Support",
        "C. The sharing scenario described will occur without any special configuration choices being made by the Architect",
        'D. Leave the Reimbursement Object in "Deployed" Status and set the Director of Supports Profile to "View All" in the object permissions.',
      ],
      answer: "A",
      title: "Question 61",
    },
    {
      content: "If OWD is Public Read Only, what are sharing access options",
      options: ["A. Read, - Read/Write"],
      answer: "A",
      title: "Question 62",
    },
    {
      content:
        "Universal Containers has built a recruiting application on the salesforce Platform. HR requested that all internal users should have edit access to the referral custom object. One of the recruiters needed to share a referral record with another colleague for collaboration using manual sharing. The recruiter opened the referral record and could not find the share button. What could be the technical reason for this?",
      options: [
        "A. The Referral object OWD is public Full Access.",
        "B. The Referral object OWD is public Read only.",
        "C. The Referral object OWD is public Read/Write.",
        "D. The Referral object OWD is private.",
      ],
      answer: "C",
      title: "Question 63",
    },
    {
      content:
        "At Universal Containers, Accounts and Contracts are normally visible to all employees, and Proposals center owner and managers. However, some Proposals are considered confidential and are managed by a Strategic should not be visible to anyone in the Sales group other than owner and the strategic team.\n       How should the architect design for this requirement?",
      options: [
        "A. Disable Grant Access Using Hierarchies and set an Owner_Based Sharing rule for Strategic Deals team",
        "B. Proposal Owner set to the Strategic Deals Team Queue and set the Account relationship to Master-Dvt.",
        "C. Disable Grant Access Using Hierarches and set a Criteria-based Sharing rule for Strategic Deals team.",
        "D. Proposal Owner set to the Strategic Deals Team Queue and create an center- base sharing rule to grs",
      ],
      answer: "C",
      title: "Question 64",
    },
    {
      content:
        "When configuring default record access levels in Enterprise Territory Management, which of the following statements are true regarding access to accounts and/or related records? Choose 2 answers.",
      options: [
        "A. Users in a territory can 'not access', 'view', or 'view and edit' records associated with accounts in the territory.",
        "B. Users in a territory always have at least 'view' access to the accounts assigned to the territory.",
        "C. Users in a territory are always able to view contacts and opportunities associated with accounts in the territory hierarchy.",
        "D. Users in a territory can always view, edit, and transfer records that are related to the accounts assigned to the territory.",
      ],
      answer: "A,B",
      title: "Question 65",
    },
    {
      content:
        "Which two options can be selected to share data with when creating a sharing rule?\n       Choose 2 answers",
      options: ["A. Public Groups", "B. Users", "C. Roles", "D. Profiles"],
      answer: "A,C",
      title: "Question 66",
    },
    {
      content:
        "Susan posts a file to the chatter fees for a record of an object which OWD is private. Which two statements accurately describe who can view the file by default?\n       Choose 2 answers.",
      options: [
        "A. Susan and users with a shared chatter post link to the file.",
        "B. Susan and users with access to the record.",
        "C. Susan and users with the View All Data permission.",
        "D. Susan only.",
      ],
      answer: "B,C",
      title: "Question 67",
    },
    {
      content:
        "The system administrator of Cosmic Enterprises has created a dummy user in Salesforce. The user owns more than 15,000 account records that were recently obtained from a third-party database. A sharing rule has been created to share records owned by this user with all the sales managers and a few other users of the company.\n       There are performance issues whenever there is a change in the role hierarchy. Which of the following actions should a Solution Architect recommend to improve performance? Choose 3 answers.",
      options: [
        "A. If possible, the dummy user should not be assigned to a role in the role hierarchy.",
        "B. The dummy user should be placed at the top of the role hierarchy.",
        "C. No more than 10,000 account records should be owned by the dummy user.",
        "D. The dummy user should be placed at the bottom of the role hierarchy.",
        "E. An account hierarchy should be established for the accounts owned by the dummy user.",
      ],
      answer: "A,B,C",
      title: "Question 68",
    },
    {
      content:
        'For the Universal Containers Commercial and Consumer support departments, having access to Activities for Contacts with which they interact is important. Commercial support users should not see Consumer Accounts/Contacts and Consumer support users should not see Commercial Accounts/Contacts. Assuming the Organization-Wide Default for Activities is set to "Controlled by Parent" what is the minimum level of Sharing access a support user would need to Accounts/Contacts to view associated Activities?',
      options: [
        "A. The users need no access to Accounts/Contacts with the proper Activity Sharing Rules and Profile Permissions for the Accounts Tab.",
        "B. Private Account/Contact Sharing Default with a Sharing Rule for each department set to Private access to Accounts/Contacts.",
        "C. Private Account/Contact Sharing Default with a Sharing Rule for each department set to Public Read/Write access to Accounts/Contacts.",
        "D. Private Account/Contact Sharing Default with a Sharing Rule for each department set to Public Read only access to Accounts/Contacts.",
      ],
      answer: "D",
      title: "Question 69",
    },
    {
      content:
        "Universal Containers (UC) has implemented Service Cloud. There is a flag field on the case object that marks a case as (Sensitive). UC requested that this flag can be viewed by all users who have access to the case but only be edited by the assigned case assessor. The case assessor is a lookup field on the case object. How can an architect achieve this requirement?",
      options: [
        "A. Field-level security",
        "B. Permission Set.",
        "C. Custom Lightning Component.",
        "D. Object Permissions.",
      ],
      answer: "C",
      title: "Question 70",
    },
    {
      content:
        "After setting up Customer Community and enable collaboration, the architect realizes that customers are only Chatter posts from other customers in their account.\n       What should the architect do to allow viewing chatter posts from all customers?",
      options: [
        "A. Enable Internal Users Visibility.",
        "B. Enable Community User Visibility.",
        "C. Set View AH for Chatter posts.",
        "D. Enable Chatter Super User.",
      ],
      answer: "C",
      title: "Question 71",
    },
    {
      content:
        "Universal Containers created a custom object called Defect and would like to enable the Sharing button on the Defect page layout to share the records manually to other users in the organization. In which scenario will the Sharing button appear?",
      options: [
        "A. The Sharing model is either Private or Public Read only.",
        "B. The Sharing model is Public Read/Write.",
        "C. The Sharing button always appears.",
        "D. The Sharing model is Public Read/Write/Transfer.",
      ],
      answer: "A",
      title: "Question 72",
    },
    {
      content:
        "Universal Containers (UC) uses a custom Visualforce page to display shipment tracking information (custom object, private OWD) to field manager and agents. The IT team wants to make sure that users have access to only the information that is allowed.\n       Which Apex method must be used to make sure only allowed fields are shown to the users'",
      options: [
        "A. isReadable()",
        "B. isShowable()",
        "C. isViewable()",
        "D. isAccessible()",
      ],
      answer: "D",
      title: "Question 73",
    },
    {
      content:
        "An administrator of Cosmic Solutions wants to create a list view that only displays accounts of manufacturing companies. Sales users use a custom field on the Account object to indicate the type of company. The list view should only be visible to three sales managers of the company. If all the users are using Salesforce Classic, which of the following should be used to restrict the visibility of the list view? Choose 1 answer.",
      options: [
        "A. Public Group",
        "B. Role",
        "C. Role and Subordinates",
        "D. User",
      ],
      answer: "A",
      title: "Question 74",
    },
    {
      content:
        "A Sales Rep at Universal Containers wants to create a dashboard to see how his sales numbers compare with his peers.Assuming a Private model, which two permissions would the Sales Rep need to meet this requirement?",
      options: [
        "A. View All Data",
        "B. Manage Custom Report Types",
        "C. Customize Application",
        "D. Manage Dashboards",
      ],
      answer: "A,D",
      title: "Question 75",
    },
    {
      content:
        "Universal Containers has Public Read Only sharing settings on the Opportunity object. What Opportunity access options can the user see while adding account team members to the Account?",
      options: [
        "A. Private and Read Only",
        "B. Private",
        "C. Read Only",
        "D. Read Only and Read/Write",
      ],
      answer: "D",
      title: "Question 76",
    },
    {
      content:
        "Universal Containers would like to track defects within Salesforce. A defect need to have the following fields:\n       * Severity * Type * Status * Description There will be multiple Defects related to the standard Case object.\n       Defects will be assigned to different owners which will often be different to the Case owner. Which option should the Architect choose to meet the requirement?",
      options: [
        "A. Create a custom object for defects and relate it to cases using lookup",
        "B. Create all defect fields on the case object to track the defect and lookup.",
        "C. Create a custom object for defects and relate it to cases using master -detail",
        "D. Create a relationship between the standard defect object and the standard case object.",
      ],
      answer: "A",
      title: "Question 77",
    },
    {
      content:
        "An External Object is created to show Invoices from an external accounting system. When viewing the External Object, a user should only access invoice records the user is authorized to see.\n       What two actions are required to achieve the above requirement? Choose 2 answers",
      options: [
        "A. Setup External Object to use OAuth to connect to the Accounting system.",
        "B. Create an owner based sharing rule to grant visibility to the Invoice object.",
        "C. Grant access to the External Object to only the Account Manager profile.",
        "D. Restrict access to data in the accounting system.",
      ],
      answer: "A,D",
      title: "Question 78",
    },
    {
      content:
        "Universal Containers, a global corporation of 50,000 users, has a 24x7 call center operated by 20,000 users that includes employees and contractors. Their sales organization is 10,000 strong and they started processing about 100,000 updates to opportunity custom fields called Priority and NextStep. They also started processing 20,000 updates to a highly nested territory hierarchy. There was a third mass update on a Next Step field on the Action Plan custom object that has Case as a lookup field. Users started seeing a Group membership lock error in the system. What is a probable cause for this error?",
      options: [
        "A. Lock contention on Territory object because of Territory object updates.",
        "B. Lock contention due to system-initiated sharing rule recalculation",
        "C. Lock contention on Account records because of Opportunity object updates.",
        "D. Lock contention on Case records because of Action Plan custom object updates.",
      ],
      answer: "B",
      title: "Question 79",
    },
    {
      content:
        "Below are some details regarding the organization at Universal containers:\n       1. Richard and Kevin are the east sales reps and their manager is Karen the East sales executive.\n       2. Sam and Wilder are West sales reps and the manager is Wendy, the West sales executive.\n       3. Bob is the CEO and managers both Karen and Wendy\n       Universal containers role hierarchy follows their management structure. Richard owns an account, NewCompany, and Kevin owns an account, OldCompany. Karen manually shared her account NewWorld with Kevin. However, she has moved to a new role to lead all Named Accounts, and Phil, who replaced her, is the new owner of NewWorld. Which employees will have access to the NewWorld account?",
      options: [
        "A. Bob, Phil and Kevin",
        "B. Bob and Phil",
        "C. Bob, Karen and Kevin",
        "D. Bob, Richard, Phil and Kevin",
      ],
      answer: "B",
      title: "Question 80",
    },
    {
      content:
        "Universal Containers has selected a small and diverse group of users to review inactive accounts. Given the Private sharing model, a public group was created and made available to this group of users. A sharing rule was created to make inactive Accounts visible to the public group. However some of these users are reporting they don't see any of the Accounts that were shared with the public group.\n       What is the underlying issue for these users?",
      options: [
        "A. The Accounts are owned by users higher in the role hierarchy.",
        "B. The users are in profiles that have no access to the Account object.",
        "C. The page layout assigned to these users is different than the Account owner.",
        'D. The users have a permission set that only allow Accounts in "Active" status.',
      ],
      answer: "B",
      title: "Question 81",
    },
    {
      content:
        "Universal Containers (UC) wants to reduce the amount of redundant leads entered into the system. UC also wants to ensure that leads are only edited/reassigned by the lead owner.\n       What organization wide default (OWD) approach should be recommended to help UC implement these requirements?",
      options: [
        "A. Implement a Private OWD on Lead.",
        "B. Implement a Public Read Only OWD on Lead.",
        "C. Implement a Public Read/Write OWD on Lead.",
        "D. Implement a Public Read Only/Transfer OWD on Lead.",
      ],
      answer: "B",
      title: "Question 82",
    },
    {
      content:
        "Universal Containers (UC) has 200 distributors that use Partner Community licenses.\n       Partners cannot see each other's data, but UC is also trying to give more visibility to data for certain individuals at a distributor.\n       HOW can an Architect give users in the partner user role access to all Case and Container records owned by any user, regardless of role, at the same distributor?",
      options: [
        "A. Create an ownership-based sharing rule.",
        "B. Create sharing sets.",
        "C. Give super user permission to the individual partner users.",
        'D. Create a Permission Set granting "View All" permission to Case and Container records.',
      ],
      answer: "A",
      title: "Question 83",
    },
    {
      content:
        'Universal Containers has a junction object called "Job Production Facility". With 2 master-detail relationships to the Job and Production Facility custom objects. Both master records have a private sharing model. What statement is true if a user\'s profile allows access (Create/Read) to the Job, but no access to the Production Facility Object?',
      options: [
        "A. The user will be granted read access to the Production Facility record.",
        "B. The user will see the junction object and the link to the Production Facility.",
        "C. The user will not be able to see the junction object records or the field values.",
        "D. The user will see the junction object but not the link to the Production Facility.",
      ],
      answer: "B",
      title: "Question 84",
    },
    {
      content:
        "At Universal Containers, Accounts and Contacts are normally visible to all employees, and Proposals (custom object) are visible to the Account owner and managers. However, some Proposals are considered confidential and are managed by a Strategic Proposals team. These Proposals should not be visible to anyone in the Sales group other than the owner and the strategic team.\n       How should the architect design for this requirement?",
      options: [
        "A. Disable Grant Access Using Hierarchies and set an Owner-Based Sharing rule for Strategic Deals team.",
        "B. Proposal Owner set to the Strategic Deals Team Queue and create an owner-based sharing rule to grant visibility to the Account owner",
        "C. Proposal Owner set to the Strategic Deals Team Queue and set the Account relationship to Master-Detail.",
        "D. Disable Grant Access Using Hierarchies and set a Criteria-Based Sharing rule for Strategic Deals team.",
      ],
      answer: "D",
      title: "Question 85",
    },
    {
      content:
        "Universal Containers has successfully implemented a large Service Cloud rollout for their national call centre 3 months ago. One of their largest customer accounts, United Automotive, has over 15,000 open cases. Agents are now having trouble opening new cases for United Automotive. When they try to create a case, the following Error messages appear for them.\n       UNABLE_TO_LOCK_ROW\n       They notice that this only occurs for the United Automotive account. If they tray so save the case again it will usually work, but the problem seems to be happening more and more often.\n       What option should the Architect recommend?",
      options: [
        "A. Review the Customer Service Profile to ensure that they have Read/Write access to the appropriate Case and Account Fields.",
        "B. Review all Account sharing rules to ensure that the Customer Service team has Read/Write access to the United Automotive Account.",
        "C. Review the Account structure to split the United Automotive account into multiple branch accounts.",
        "D. Review all Case Sharing Rules and consolidate where appropriate to reduce the total number of sharing rules.",
      ],
      answer: "C",
      title: "Question 86",
    },
    {
      content:
        "To grant Universal Containers sales manager access to shipment records properly, it was necessary to leverage Apex managed sharing. The IT team is worried about improper access to records.\n       Which two features and best practices should a Salesforce architect recommend to mitigate this risk?",
      options: [
        "A. Use isAccessible keyword in Apex classes to assure record visibility will be followed",
        "B. Use isShareable in Apex classes to assure record visibility will be followed.",
        "C. Use with Sharing keyword in Apex classes to assure record visibility will be followed.",
        "D. Use runAs system method in test classes to test using different users and profiles.",
      ],
      answer: "C,D",
      title: "Question 87",
    },
    {
      content:
        "A multi-national Telco recently implemented Enterprise Territory Management to better align their sales teams and sales processes. They are in the final quarter of their fiscal year, and they have significantly changed their Territory structure and created a plan for a new structure that would support the new fiscal year.\n       Their current territory model has 6,000 territories. Their new model would be a new set of 6,500 territories, and their org limit is 10,000 territories.\n       What Enterprise Territory Management feature can this company use to help them say within their org limits?",
      options: [
        "A. Territory Type",
        "B. Territory Type Priority",
        "C. Territory Hierarchy",
        "D. Territory Model State",
      ],
      answer: "D",
      title: "Question 88",
    },
    {
      content:
        "The architect has a requirement to create a criteria-based sharing rule based on the customer Social.. up the rule in Contact Sharing, the field is not shown on the list of available field.\n       What might cause this?",
      options: [
        "A. The architect's profile does not have field level Security (FLS) for this field.",
        "B. The field has been configured for encryption.",
        "C. The architect does not have permission to Compliance fields.",
        "D. fields with validation rules are not available for sharing rules.",
      ],
      answer: "B",
      title: "Question 89",
    },
    {
      content:
        'Universal Containers has the following Sharing Settings for their Org:\n       Account = Private\n       Contact = Controlled by Parent\n       Opportunity = Private\n       Case = Private\n       They have enabled "Default Account Teams" and have trained users to set up their Default Team. Which three access levels can be set on the Account Team Member?\n       Choose 3 answers',
      options: [
        "A. Case Acces",
        "B. Contract Access",
        "C. Opportunity Access",
        "D. Contact Access",
        "E. Account Access",
      ],
      answer: "A,C,E",
      title: "Question 90",
    },
    {
      content:
        "Universal Containers (UC) is a fast-growing company that sells containers globally. It has thousands of dealerships throughout the world where local dealers service containers. UCimplemented a new Partner Community for its dealers. Each dealership has a dealer manager who manages the service agents. The community-sharing model is private.\n       What is the optimal option to give dealer managers visibility to customer cases only raised by their service agents?",
      options: [
        "A. Create a sharing set to share cases created by service agents with their dealer manager.",
        "B. Create a sharing rule to share cases created by service agents with their dealer manager.",
        "C. Change external organization-wide default of case object to public read only.",
        "D. Using the role hierarchy, the cases raised by service agents will be visible to their relevant dealer managers.",
      ],
      answer: "A",
      title: "Question 91",
    },
    {
      content:
        "Universal Containers (UC) has a mostly private organization-wide default (OWD), as it is a core principle of UC to respect client data privacy. UC has implemented complex processes for granting access to Opportunity data. A few key members of the Sales Reporting team need to always be able to see, but not change, Opportunity data for all Opportunities.\n       What should an architect recommend as an approach to meet these requirements?",
      options: [
        "A. Make Opportunity OWD read-only.",
        'B. Create a Permission Set that grants "View All Data" Permission.',
        'C. Give "View All Data" Permission to the Sales Reporting Profile.',
        'D. Create a Permission Set that grants "View All" permission for Opportunity.',
      ],
      answer: "B",
      title: "Question 92",
    },
    {
      content:
        "Universal Containers is a fast-growing company that sells containers globally. It has thousands of dealerships throughout the world where local dealers service Containers sold locally. They recently opened two dealerships in California: NorthCal and SoCal. Universal Containers implemented a new partner community to enable their dealers. Each dealership has a dealer Manager who has all service agents report into them. Assuming a private sharing model, what is the best option to enable dealer managers to have visibility to customer cases within their dealership and not across all dealerships?",
      options: [
        "A. No changes are needed to the sharing and visibility model to implement this requirement.",
        "B. Build a trigger that create manual sharing of cases as needed whenever a new case is created.",
        "C. Create sharing groups that share all cases to all agents under the Dealer manager.",
        "D. Create a batch job that creates sharing rules as needed, based on the cases created.",
      ],
      answer: "A",
      title: "Question 93",
    },
    {
      content:
        "Which two options are available to share Report or Dashboard folder with other users in the Organization?\n       Choose 2 answers",
      options: ["A. Roles", "B. Profiles", "C. Public Groups", "D. Teams"],
      answer: "C",
      title: "Question 94",
    },
    {
      content:
        'Jane, a support representative at Universal Containers, created a report to view all her open cases that have been created in the past 7 days and saved the report in the "Private Reports" folder.\n       Who can view and run the report?',
      options: [
        'A. The report owner and users with the "View All Data" permission',
        "B. The report owner",
        "C. The report owner and anybody in the role hierarchy above the report owner",
        'D. The report owner and any users who have been given access to the "My Private Reports" folder',
      ],
      answer: "B",
      title: "Question 95",
    },
    {
      content:
        "When you make changes to roles and groups Salesforce locks the entire group membership table, which makes it impossible to process group changes in multiple threads to increase throughput on updates.",
      options: [],
      answer: "\n        \n       \n        Granular Locking\n        ",
      title: "Question 96",
    },
    {
      content:
        "Cosmic Service Solutions has three branches in the role hierarchy for the three regions in the United States where it provides support services to other companies. The organization-wide default sharing setting of the Case object has been set to 'Private'. When working on case resolution, the support agents in the western branch should be able to collaborate by sharing case records with the support agents in the central branch of the hierarchy. No other users in the company, including the managers, should be able to gain access to these records. What can a Salesforce Architect recommend to meet this requirement? Choose 1 answer.",
      options: [
        "A. Create a criteria-based sharing rule to share case records owned by the role of western support agents with the role of central support agents.",
        "B. Create an ownership-based sharing rule to share case records owned by the role of western support agents with the role of central support agents.",
        "C. Create an ownership-based sharing rule to share case records owned by the role of western support agents with a public group of central support agents.",
        "D. Create a criteria-based sharing rule to share case records owned by the role of western support agents with a public group of central support agents.",
      ],
      answer: "C",
      title: "Question 97",
    },
    {
      content:
        "Universal Containers (UC) has a custom Apex class that enforces a business process and updates opportunity field-level security permissions of read only certain user's profiles are being updated by their class.\n       How should the architect fix this problem?",
      options: [
        "A. Put the code in an class that uses the With Sharing keyword.",
        "B. Use the IsUpdateable() Apex method to test each field prior to allowing updates.",
        "C. Use the With SECURYT_ENFORCED keyword in the SOQL statement.",
        "D. Add With Sharing keyword to the class.",
      ],
      answer: "C",
      title: "Question 98",
    },
    {
      content:
        "If you want to create some logic that will share certain records in APEX code, you just have to create special records that will open access to the desired records. The aim is to create records of certain type, for example , all share objects for custom objects are named as",
      options: ["A. MyCustomObject__Share"],
      answer: "A",
      title: "Question 99",
    },
    {
      content:
        "Universal Containers has the following requirements:\n       A custom Loan object requires Org-Wide Defaults set to Private.\n       The owner of the Loan record will be the Loan Origination Officer.\n       The Loan record must be shared with a specific Underwriter on a loan-by-loan basis.\n       The Underwriters should only see the Loan records for which they are assigned.\n       What should the Architect recommend to meet these requirements?",
      options: [
        "A. Create a master-detail relationship from the Loan to the User object. Loan records will be automatically shared with the Underwriter.",
        "B. Use criteria-based sharing rules to share the Loan object with the Underwriter based upon the criteria defined in the criteria-based sharing.",
        "C. Create an Apex Sharing Reason on the Loan object that shares the Loan with the Underwriter based upon the criteria defined in the Sharing Reason.",
        "D. Create a lookup relationship from the Loan object to the User object. Use a trigger on the Loan object to create the corresponding record in the Loan_share object.",
      ],
      answer: "B",
      title: "Question 100",
    },
    {
      content:
        "Universal Container has developed a custom Visualforce page that will accept user input and must prefer returning the results to the users.\n       Which two techniques should be used to ensure the users cannot perform a SOQL injection attack?",
      options: [
        "A. Escape double quotes in the user input.",
        "B. Use the escapesinglequotes() method to sanitize user input.",
        "C. Use the with Sharing keyword on the controller.",
        "D. Use bind variable in the SOQL query.",
      ],
      answer: "B,D",
      title: "Question 101",
    },
    {
      content:
        "The Corporate Identity and Access Team needs to audit User setup in the Salesforce ..\n       What two permissions should be granted to this team so they can perform their audit?\n       Choose 2 answers",
      options: [
        "A. View permission on the User object",
        "B. View All Data",
        "C. View Setup and Configuration",
        "D. View All Users",
      ],
      answer: "C,D",
      title: "Question 102",
    },
    {
      content:
        "A sales rep at Universal Containers (UC) is a member of the Default Opportunity team for an account manager. The account manager created an opportunity and the sales rep is added to that Opportunity team.\n       The sales rep is complaining about no longer having access to an opportunity record that the sales rep was helping with.\n       What is the cause of this problem?",
      options: [
        "A. The Sales rep was manually removed from the Opportunity team.",
        "B. The Sales rep was removed from the Opportunity team in another opportunity record of the same account.",
        'C. The opportunity owner can enable/disable if the "Default Opportunity team" is able to access the record',
        "D. The Account team was changed and consequently the Opportunity team members were replaced by the Account team members.",
      ],
      answer: "A",
      title: "Question 103",
    },
    {
      content:
        "Universal Containers (UC) stores basic employee information in a custom Employee object (OWD -Public Read Only). There are a few sensitive fields that need restricted access (salary, grade level, last performance rating).\n       Other than field level security, what other options are available to make these fields accessible to the Human Resource team?",
      options: [
        "A. Create a new custom object with private OWD and Lookup relationship to Employee to store new restricted information.",
        "B. Create a new custom object controlled by parent and a Master-Detail relationship to Employee to store new restricted information.",
        "C. Change OWD of Employee custom object to private and a Lookup self-relationship to store only new restricted information.",
        "D. There are no other option besides using field level security.",
      ],
      answer: "D",
      title: "Question 104",
    },
    {
      content:
        'Universal Containers has implemented a strict software architecture for their custom Apex code. One of the requirements is that all SOQL queries are contained within reusable classes. Depending on the context of the Apex transaction, the queries should be able to run either "With Sharing" or "Without Sharing". Which two ways allow the Architect to meet these requirements? Choose 2 answers',
      options: [
        'A. Create a reusable SOQLQueries class; do not specify "With" or "Without Sharing" on the SOQLQueries class',
        'B. Create a reusable SOQLQueries class; specify "With Sharing" on the methods that require user context and "Without Sharing" on the methods requiring system context',
        'C. Create a reusable SOQLQueries class; do not specify "With" or "Without Sharing" on the SOQLQueries class and use the runAs () method to dynamically set the context',
        'D. Create a SystemSOQLQueries class and a UserSOQLQueries class; set the "With Sharing" keyword on the UserSOQLQueries class and "Without Sharing" on the SystemSOQLQueries class',
      ],
      answer: "A,C",
      title: "Question 105",
    },
    {
      content:
        "Universal Containers has a Private Sharing Model for the Opportunity object. Sales Rep A at Universal Containers created the Opportunity record and then transferred ownership of the Opportunity record to Sales Rep B.\n       Both Sales Rep A and B have the same role in the Role Hierarchy.\n       What access will Sales Rep A have to the Opportunity after the transfer?",
      options: [
        "A. Full Access",
        "B. Read/Write",
        "C. Read Only",
        "D. No Access",
      ],
      answer: "D",
      title: "Question 106",
    },
    {
      content:
        'Universal Containers (UC) has 600 sales reps. UC has rollout plan to deploy salesforce in 3 weeks. At the end of the second week, they received a "User Role Limit Exceeded" error.\n       After investigation, they discovered that during the user provisioning process, a new role was generated for every new user.\n       Which two recommendations could solve this problem?\n       Choose 2 answers.',
      options: [
        "A. Remove role hierarchy from salesforce org and control the record access using apex managed sharing.",
        "B. Create an Apex class to replace the User Roles by generic one as soon as they are created.",
        "C. Review the user provisioning process to not automatically create a user role for any new user.",
        "D. Contact salesforce support and request to increase the number of users' roles allowed.",
      ],
      answer: "C,D",
      title: "Question 107",
    },
    {
      content:
        "Which two are potential security vulnerabilities in the following code snippet?\n       <apex:page>\n       <apex:form>\n       <apex:outputText value=\"Enter Name\" />\n       <apex:inputText value=\" { !name}\" />\n       <apex:commandButton value=\"Query\" action=\" {!query}\" />\n       <apex:form>\n       <apex:page>\n       Public class SOQLController {\n       Public String name{\n       Get {return name;}\n       Set {name=value;}\n       }\n       Public PageReference query() {\n       String qryString= 'SELECT Id FROM Contact WHERE' +\n       '(IsDeleted = false and Name like \\'#' + name + '#\\')';\n       queryResult = Database.query{qryString};\n       return null;\n       }\n       }\n       Choose 2 answers.",
      options: [
        "A. Bypassing Field and Object Security",
        "B. SOQL Injection",
        "C. Arbitrary Redirects",
        "D. Cross-Site Scripting",
      ],
      answer: "A,B",
      title: "Question 108",
    },
    {
      content:
        "The Architect notices that there are many duplicate Account records and numerous sharing rules created in Salesforce. What would be the reason?",
      options: [
        "A. The Organization-Wide Default for the Account object is Public Read/Write.",
        "B. The Organization-Wide Default for the Account object is Public Read-Only.",
        "C. The Organization-Wide Default for the Account object is Private.",
        "D. The Object permissions for the Account object are Create, Read, and Edit.",
      ],
      answer: "C",
      title: "Question 109",
    },
  ],
});
