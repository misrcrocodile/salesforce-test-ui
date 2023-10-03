window.testContent = window.testContent || [];
var testId = "Salesforce.Sharing-and-Visibility-Designer";
var testName = "Salesforce.Sharing-and-Visibility-Designer";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "Salesforce.Sharing-and-Visibility-Designer.v2021-10-03.q72",
  content: [
    {
      content:
        "Universal Containers (UC) has a mostly private organization-wide default (OWD), as it is a core principle of UC to respect client data privacy. UC has implemented complex processes for granting access to Opportunity data. A few key members of the Sales Reporting team need to always be able to see, but not change, Opportunity data for all Opportunities.\n       What should an architect recommend as an approach to meet these requirements?",
      options: [
        "A. Make Opportunity OWD read-only.",
        'B. Create a Permission Set that grants "View All Data" Permission.',
        'C. Give "View All Data" Permission to the Sales Reporting Profile.',
        'D. Create a Permission Set that grants "View All" permission for Opportunity.',
      ],
      answer: "D",
      title: "Question 1",
    },
    {
      content:
        "Universal Containers has set Account Sharing to Private with Account Teams enabled. Which two user groups can add team members on the Account? Choose 2 answers",
      options: [
        "A. Any Account Team Member with read access on the Account",
        "B. The user specified as the Manager on the Owner's User record",
        "C. The current Account Owner can add team members.",
        "D. Someone above the Account Owner in the Role Hierarchy with read access",
      ],
      answer: "D",
      title: "Question 2",
    },
    {
      content:
        "The sales manager in Japan have asked the sales manager in Australia to assist them with closing their deals.\n       How are these requirements achieved?",
      options: [
        "A. Assign the sales manager View All on the opportunity object.",
        "B. Use opportunity teams to automatically add the sales manager as a team member.",
        "C. Create ownership-based sharing rule.",
        "D. Use sharing set to give the sales manager access to the deals.",
      ],
      answer: "B",
      title: "Question 3",
    },
    {
      content:
        "Universal Containers has implemented a community for its customers using the Customer Community sense type. They have implemented a custom object to store service requests that has a look up to the account record.\n       The Organization Wide Default External Access for the service request object is set to Private. Universal Containers wants their customers to be able to see service requests for their account through the community Customers should not see service requests for other accounts. What Salesforce feature can the Architect use to implement this?",
      options: [
        "A. Use manual sharing to share the service requests manually when a new community user is added.",
        "B. Use a Sharing Set to share service requests related to the account based on the community user's profile.",
        "C. Use a Sharing Rule to share service requests to the community user based on their role.",
        "D. Use Apex Managed Sharing to share service requests related to the account to the appropriate community users.",
      ],
      answer: "B",
      title: "Question 4",
    },
    {
      content:
        "Universal Containers (UC) is a non-profit organization and has over 20,000,000 members (donors). The company decided to assign those accounts to Donations Reps based on their regions. Donations Reps ended up owning over 50,000 donors each. The donation reps started to see significant degradation of the system performance. What could be the reason for this problem?",
      options: [
        "A. Salesforce sharing recalculation kicked off.",
        "B. The Donations Reps access to the assigned accounts.",
        "C. There is an Account ownership data skew problem.",
        "D. The Account (donor) object OWD is Private.",
      ],
      answer: "C",
      title: "Question 5",
    },
    {
      content:
        "A dummy user at Universal Containers owns more that 10,000 lead records. The system assigned all these leads to a dummy user. This is causing performance issues whenever role hierarchy changes. Which two options should be recommended to improve performance?\n       Choose 2 answers.",
      options: [
        "A. Do not assign a role to the dummy user.",
        "B. Assign ownership to a small number of users.",
        "C. Add the dummy user to the bottom of the role hierarchy.",
        "D. Add the dummy user into a public group.",
      ],
      answer: "A,B",
      title: "Question 6",
    },
    {
      content:
        "Universal Containers has recently implemented an integration that is populating 50 custom fields on the account object. They would like these fields to be available to Managers for reporting but do not want them to clutter the page layouts. What should the Architect recommend as a solution?",
      options: [
        "A. Grant Managers access to the fields using Field-Level Security; do not add them to a page layout.",
        "B. Add the fields to a Custom Report; grant the Managers' Role access to the report folder.",
        "C. Add the fields to the Managers' Account Page Layout; mark the page layout section as Collapsed.",
        "D. Grant the Managers access to the fields using a Role-Based Sharing Rule; leave them hidden on the page layout.",
      ],
      answer: "A",
      title: "Question 7",
    },
    {
      content: "What is a workaround to ownership data skew?",
      options: [],
      answer: "A",
      title: "Question 8",
    },
    {
      content:
        "A junior Account manager owns an account and creates a new opportunity to manage complex deal. She needs the help of the product specialist and solution engineer. Given the size of this deal, she knows the account is likely to be reassigned to a senior account manager in the near future. What is the optimal way for the junior account manager to share the opportunity, given the private sharing model?",
      options: [
        "A. Manual Share on the Opportunity.",
        "B. Opportunity Team.",
        "C. Create an Owner-based sharing rule.",
        "D. Manual share on the Account.",
      ],
      answer: "B",
      title: "Question 9",
    },
    {
      content:
        "Universal Containers has a requirement to share Accounts automatically to the users at a field office. They currently have the following setup in their environment:\n       * Accounts are set to Private in the Org-Wide Default.\n       * The field office is specified by a lookup in the Account object.\n       * There are 400 field offices.\n       * The users in each field office are managed using public groups.\n       Based upon a lookup relationship field on the Account, how should the Architect meet this requirement?",
      options: [
        "A. Use Manual Sharing to share the Account with the appropriate field office.",
        "B. Use Programmatic Sharing to share the Account with the appropriate field office.",
        "C. Use Criteria-Based Sharing to share the Account with the appropriate field office.",
        "D. Use Account Teams to share the Account with the appropriate field office.",
      ],
      answer: "B",
      title: "Question 10",
    },
    {
      content:
        "A custom ServiceFeedback object is used to collect partner feedback. ServiceFeedback records should be available to all internal employees. The OWD is set to Private for external users so partners cannot see feedback from other partner users.\n       How can the Architect give access to all internal employees?",
      options: [
        "A. Ensure all the internal users are above the partners in the role hierarchy.",
        "B. Create an Owner based sharing rule for all ServiceFeedback records owned by Partners.",
        "C. Create a trigger on ServiceFeedback to change ownership to an internal employee.",
        "D. Set OWD, for Internal Users to Public Read Only.",
      ],
      answer: "D",
      title: "Question 11",
    },
    {
      content:
        "By Viewer Access you can see the data in a report or dashboard, but you can't make any changes, except by cloning it into a new report or dashboard.",
      options: ["A. True", "B. False"],
      answer: "A",
      title: "Question 12",
    },
    {
      content:
        "Universal Containers is planning to pilot a new application to a small set of Sales Reps.\n       What is the optimal way to grant inly this Sales Reps access to the new functionality, while hiding ..",
      options: [
        "A. Clone the Sales Rep profile, adjust settings, and assign the pilot users the new profile.",
        "B. Create a permission set to grant access to the new functionality and hide the old functionality.",
        "C. Create new user records for the pilot user that they will use for the pilot.",
        "D. Revoke access to legacy function in the Sales Rep profile and create a permission set for the ..",
      ],
      answer: "A",
      title: "Question 13",
    },
    {
      content:
        'UniversalContainers(UC)servicerepsareassignedtoaprofilewhichhas"ViewAll"inCase object(Private OWD).To make sure service repshaveaccess toallrelevant information to attendtocustomerrequests, whichtwodetailsshouldasalesforceArchitectsconsider? Choose 2answers:',
      options: [
        "A. Service reps will notbe able to access all UC contactrecords if theyare controlled by parent.",
        "B. Service repswill be able to access all UC contactrecords if theyare controlled by parent.",
        "C. Servicerepswillbeable toaccessall the UC Accountrecordsdue to Implicit Sharing.",
        "D. Service reps willnotbeable toaccessallthe UCAccountsrecordsbecause Account OWD is private.",
      ],
      answer: "A,D",
      title: "Question 14",
    },
    {
      content:
        "Universal Containers has a custom Job object with a private sharing model. Based on the size and location of the Job, different teams must have access to edit the specific Job record. To support this requirement, Apex Managed Sharing has been implemented to share records with the required users. Since the teams change frequently, managed sharing recalculations need to be manually run frequently. What can the Architect do to optimize this process?",
      options: [
        "A. Create public groups for each team, and share the jobs with the groups instead of users.",
        "B. Create a scheduled job to automatically run the sharing recalculations on a nightly basis.",
        "C. Create a custom Visualforce page to edit the jobs and specify Without Sharing on the controller.",
        "D. Change the sharing model on the Job object to Public Read/Write.",
      ],
      answer: "A",
      title: "Question 15",
    },
    {
      content:
        "Universal Containers has set Opportunity Sharing to Private with Opportunity Teams enabled. Which three options can change the Owner of the Opportunity?\n       Choose 3 answers.",
      options: [
        "A. The current Opportunity Owner can transfer the current ownership.",
        "B. The user specified as the Manager on the Owner's User Profile.",
        "C. Someone above the Opportunity Owner in the Role Hierarchy.",
        "D. Any Opportunity Team Member on the current Opportunity.",
        'E. The System Administrator or a user with the "Transfer Records" permission.',
      ],
      answer: "A,C,E",
      title: "Question 16",
    },
    {
      content:
        "Universal Containers (UC) has a custom Apex class that enforces a business process and updates opportunity field-level security permissions of read only certain user's profiles are being updated by their class.\n       How should the architect fix this problem?",
      options: [
        "A. Add With Sharing keyword to the class.",
        "B. Use the IsUpdateable() Apex method to test each field prior to allowing updates.",
        "C. Use the With SECURYT_ENFORCED keyword in the SOQL statement.",
        "D. Put the code in an class that uses the With Sharing keyword.",
      ],
      answer: "C",
      title: "Question 17",
    },
    {
      content:
        "A sales representative at Universal Containers needs assistance from specific product managers when selling certain deals. Product managers do not have access to opportunities they don't own, as the sharing model is Private, but need to gain access when they are assisting with a specific deal. How can an Architect accomplish the requirement?",
      options: [
        "A. Enable opportunity teams and allow users to add the product manager.",
        "B. Use similar opportunities to share opportunities related to the product manager.",
        "C. Create a sharing rule to allow the product manager to access the opportunity.",
        "D. Enable account team and allow users to add the product manager.",
      ],
      answer: "A",
      title: "Question 18",
    },
    {
      content:
        "Universal Containers has set Partners users who will see records owned by partner users in roles below them in the hierarchy of which roles?",
      options: [],
      answer:
        "\n        \n       \n        Executive, Manager, and User\n        ",
      title: "Question 19",
    },
    {
      content:
        "Universal Containers has a custom object to maintain Job information with a private sharing model. The Delivery group is distributed through the Role Hierarchy based on geography. As the Delivery group often collaborates on Jobs, all users in the Delivery profile required View access to all Job records. In special case, the Delivery user who owns a job must be able to grant a Product Development user access to a Job record.\n       Which two platform features can be used to support these requirements?\n       Choose 2 answers",
      options: [
        "A. Criteria-based Sharing Rules",
        "B. Owner-based Sharing Rules",
        'C. "View All" Profile settings',
        "D. Manual Sharing",
      ],
      answer: "C,D",
      title: "Question 20",
    },
    {
      content:
        "Universal Containers has a Private Sharing Model for the Opportunity object. Sales Rep A at Universal Containers created the Opportunity record and then transferred ownership of the Opportunity record to Sales Rep B.\n       Both Sales Rep A and B have the same role in the Role Hierarchy.\n       What access will Sales Rep A have to the Opportunity after the transfer?",
      options: [
        "A. Read/Write",
        "B. Read Only",
        "C. No Access",
        "D. Full Access",
      ],
      answer: "C",
      title: "Question 21",
    },
    {
      content:
        "What advanced tool can Salesforce enable for Large-scale role hierarchy realignments?",
      options: [
        "A. Skinny Table Indexing",
        "B. Granular locking",
        "C. Partitioning by Divisions",
        "D. Set external organization-wide default to public read only",
      ],
      answer: "B",
      title: "Question 22",
    },
    {
      content:
        'Jane, a support representative at Universal Containers, created a report to view all her open cases that have been created in the past 7 days and saved the report in the "Private Reports" folder.\n       Who can view and run the report?',
      options: [
        "A. The report owner and anybody in the role hierarchy above the report owner",
        "B. The report owner",
        'C. The report owner and users with the "View All Data" permission',
        'D. The report owner and any users who have been given access to the "My Private Reports" folder',
      ],
      answer: "B",
      title: "Question 23",
    },
    {
      content:
        "A custom invoice object has been created with a master-detail relationship to account. The Accountreceivable (AR)teamneedsaccesstoInvoicesARusersdonotownnorhaveaccess to Accountrecords.AccountOWD is set to Private. The AR team isunable to find Invoices in Listviews,Reports,norinGlobalSearch. The Architecthasbeenasked tohelp troubleshoot. Whatcouldbethe issue preventing ARteam members from seeinginvoices?",
      options: [
        "A. A sharing rule is missing to share Invoices to the AR team.",
        "B. TheARteamprofileneedstobeassignedanInvoicePagelayout.",
        "C. Asharingruleismissingto shareAccountstotheARteam.",
        "D. The Accounts receivable profile doesnothave read Permission to the Invoice Object.",
      ],
      answer: "C",
      title: "Question 24",
    },
    {
      content:
        "Universal Containers is a fast-growing company that sells containers globally. It has thousands of dealerships throughout the world where local dealers service Containers sold locally. They recently opened two dealerships in California: NorthCal and SoCal. Universal Containers implemented a new partner community to enable their dealers. Each dealership has a dealer Manager who has all service agents report into them.\n       Assuming a private sharing model, what is the best option to enable dealer managers to have visibility to customer cases within their dealership and not across all dealerships?",
      options: [
        "A. No changes are needed to the sharing and visibility model to implement this requirement.",
        "B. Create sharing groups that share all cases to all agents under the Dealer manager.",
        "C. Create a batch job that creates sharing rules as needed, based on the cases created.",
        "D. Build a trigger that create manual sharing of cases as needed whenever a new case is created.",
      ],
      answer: "A",
      title: "Question 25",
    },
    {
      content:
        "Bob uploads a PDF to his Files Home private library.\n       Who can view this file?",
      options: [
        "A. Only Bob",
        "B. Bob and users with Modify All Data permission",
        "C. Bob and users with View All Data permission",
        "D. Bob and users above Bob in the role hierarchy",
      ],
      answer: "A",
      title: "Question 26",
    },
    {
      content:
        "Sales executives at Universal Containers (SC) want to create list views to filter opportunities for large at-risk Opportunities. These list views should only be available to certain executives that specialize in closing problematic deals. How can UC solve this requirement?",
      options: [
        "A. Share the List Views with the appropriate Queue.",
        "B. Share the List Views with the appropriate Public Group.",
        "C. Share the List Views with the appropriate Role in the Role Hierarchy.",
        "D. Share the List Views with the appropriate individual users.",
      ],
      answer: "B",
      title: "Question 27",
    },
    {
      content:
        "The architect at Universal Containers would like to prevent users from editing encrypted fields. Assuming no customizations are implemented, which two options should the Architect choose to support the requirement?\n       Choose 2 answers",
      options: [
        "A. Workflow Rules",
        "B. Page Layout settings",
        "C. Validation Rules",
        "D. Apex Triggers",
      ],
      answer: "B,C",
      title: "Question 28",
    },
    {
      content:
        "Which users have access to Opportunity records owned by an external user, assuming no other changes to the sharing model have been implemented?",
      options: [
        "A. The record owner and any user below the external user in the role hierarchy.",
        "B. The record owner and all internal users.",
        "C. The record owner and any user above the external user in the role hierarchy.",
        "D. The record owner only.",
      ],
      answer: "C",
      title: "Question 29",
    },
    {
      content:
        "Universal Containers (UC) enables customers to manage issues using a Customer Community license. The Case external organization-wide default is set to Private. Currently community users can only see cases they created.\n       What can be done to allow community users to see all cases for their account?",
      options: [
        "A. Upgrade the licenses to Customer Community Plus.",
        "B. Write an Apex class to create manual shares for these users.",
        "C. Ensure the criteria-based sharing rule applies to all users.",
        "D. Create a sharing set for these customers.",
      ],
      answer: "D",
      title: "Question 30",
    },
    {
      content:
        "Universal Containers has a global 24x7 Salesforce.com implementation that supports Sales, Services, Order Management, and various other parts of their business. They have a nested territory hierarchy, 10,000 sales users, and 20,000 support agents. Territory changes happen daily. The demand for new applications and changes to the platform is high and they follow an agile development methodology and deliver new releases every two weeks on the platform. What Salesforce.com feature would help the system recover from a maintenance restart on Salesforce.com servers?",
      options: [
        "A. Enable Granular Locking on the system.",
        "B. Enable Parallel Sharing Rule recalculation.",
        "C. Enable Filter -Based Opportunity Territory Assignment.",
        "D. Enable Deferred Sharing Rule recalculation.",
      ],
      answer: "D",
      title: "Question 31",
    },
    {
      content:
        "Universal Containers would like to customize the security and sharing features of Salesforce Account Teams.\n       They have decided to implement a Custom Account Team object. They would like the new enhancement to include all of the features of the existing account team, but also utilize Apex and Visualforce on the custom Account Team object.\n       Which two different approaches should the Architect consider when designing this enhancement?\n       Choose 2 answers",
      options: [
        "A. The need to dynamically create Criteria-Based Sharing rules with Custom Account Team object data.",
        "B. The need to customize Account screens in Visualforce, as the Account_share object cannot be maintained programmatically.",
        "C. The need to maintain the Account_share object based upon the Custom Account Team object data.",
        "D. The need to synchronize the AccountTeamMember object with the Custom Account Team object data.",
      ],
      answer: "C,D",
      title: "Question 32",
    },
    {
      content:
        "To reduce the case time resolution and improve customer satisfaction, Universal Containers (UC) wants to allow specialized marketing consultants to have edit access to Case records of VIP customers. These casts should be visible only to the support rep who owns the case and the marketing consultants.\n       Which recommendation should a Salesforce architect give to allow this scenario?",
      options: [
        "A. Case organization wide default Private and Case Team with Read/Edit permission.",
        "B. Case organization-wide default Private and Account Team with Read/Edit permission.",
        "C. Case organization-wide default Public Read Only and Case Team with Read permission.",
        "D. Case organization-wide default Private, role hierarchy, and Read Only ownership-based sharing rule.",
      ],
      answer: "A",
      title: "Question 33",
    },
    {
      content:
        "Universal Containers, a global corporation of 50,000 users, has a 24x7 call center operated by 20,000 users that includes employees and contractors. Their sales organization is 10,000 strong and they started processing about 100,000 updates to opportunity custom fields called Priority and NextStep. They also started processing\n       20,000 updates to a highly nested territory hierarchy. There was a third mass update on a Next Step field on the Action Plan custom object that has Case as a lookup field. Users started seeing a Group membership lock error in the system. What is a probable cause for this error?",
      options: [
        "A. Lock contention on Territory object because of Territory object updates.",
        "B. Lock contention on Case records because of Action Plan custom object updates.",
        "C. Lock contention on Account records because of Opportunity object updates.",
        "D. Lock contention due to system-initiated sharing rule recalculation",
      ],
      answer: "D",
      title: "Question 34",
    },
    {
      content:
        "When you make changes to roles and groups Salesforce locks the entire group membership table, which makes it impossible to process group changes in multiple threads to increase throughput on updates.",
      options: [],
      answer: "\n        \n       \n        Granular Locking\n        ",
      title: "Question 35",
    },
    {
      content:
        "What feature in Salesforce is needed to restrict access to a custom object that has Public Read/Write access?",
      options: [
        "A. Role Hierarchy",
        "B. Page Layout",
        "C. Record Type",
        "D. Profile",
      ],
      answer: "D",
      title: "Question 36",
    },
    {
      content:
        "Which three advanced tools can Salesforce enable for large-scale role hierarchy realignments in organizations with large data volumes?\n       Choose 3 answers.",
      options: [
        "A. Deferred Sharing Calculation",
        "B. Granular Locking",
        "C. Skinny Table Indexing",
        "D. Parallel Sharing Rule Recalculation",
        "E. Partitioning by Divisions",
      ],
      answer: "A,C,E",
      title: "Question 37",
    },
    {
      content:
        "Below are some details regarding the organization at Universal containers:\n       1. Richard and Kevin are the east sales reps and their manager is Karen the East sales executive.\n       2. Sam and Wilder are West sales reps and the manager is Wendy, the West sales executive.\n       3. Bob is the CEO and managers both Karen and Wendy\n       Universal containers role hierarchy follows their management structure. Richard owns an account, NewCompany, and Kevin owns an account, OldCompany. Karen manually shared her account NewWorld with Kevin. However, she has moved to a new role to lead all Named Accounts, and Phil, who replaced her, is the new owner of NewWorld. Which employees will have access to the NewWorld account?",
      options: [
        "A. Bob, Richard, Phil and Kevin",
        "B. Bob, Phil and Kevin",
        "C. Bob, Karen and Kevin",
        "D. Bob and Phil",
      ],
      answer: "D",
      title: "Question 38",
    },
    {
      content:
        "Universal Containers has created a Reimbursement Custom Object to capture requests for reimbursement of expenses related to office supplies. The Reimbursement requests are sometimes sensitive and the Team Leads should not have access to the Reimbursement records submitted by the Users in the Call Center Agent role.\n       The Director of Support will require access to all Reimbursement records. The role hierarchy is set as follows:\n       Call Center Agent role reports to Team Lead role, which Reports to the Director of Support. Which steps would the Architect take to ensure proper sharing in this Role Hierarchy structure assuming Private Sharing Setting for the Reimbursement Object?",
      options: [
        "A. The sharing scenario described will occur without any special configuration choices being made by the Architect",
        "B. Use an Approval Process to change the owner of the Reimbursement record upon submission to the Director of Support",
        'C. Leave the Reimbursement Object in "Deployed" Status and set the Director of Supports Profile to "View All" in the object permissions.',
        "D. Disable Grant Access Using Hierarchies for the Object and create a Sharing Rule to enable sharing to the Director of Support",
      ],
      answer: "D",
      title: "Question 39",
    },
    {
      content:
        "Universal Containers uses 75,000 distributors that have close to 1 million total users. Distributors need opportunities assigned to the distributor for delivery.\n       What license recommendation will meet distributor needs?",
      options: [
        "A. Sales Cloud",
        "B. Customer Community",
        "C. Partner Community",
        "D. Customer Community Plus",
      ],
      answer: "C",
      title: "Question 40",
    },
    {
      content:
        "Which two options can help mitigate the risks of import failures associated with large-volume bulk data loads?\n       Choose 2 answers.",
      options: [
        "A. Group records by ParentID within a batch.",
        "B. Minimize user group hierarchy.",
        "C. Defer Sharing Calculation.",
        "D. Increase batch size.",
      ],
      answer: "A,C",
      title: "Question 41",
    },
    {
      content:
        "Universal Containers does not want the Users in the Custom Sales Department Profile to be able to delete Opportunities. How would the Architect prevent a certain set of users from deleting Opportunities?",
      options: [
        'A. Remove the "Opportunity Delete" Permission from the Sales Team\'s User Profile in the Object Permissions.',
        "B. Override the Standard button with a Visualforce Page that warns them that they do not have permission to delete.",
        "C. Create a Validation Rule that checks the User's Profile before allowing the Is Deleted flag to be set to True.",
        "D. Remove the Delete button from the Opportunity Page Layout and Record Type settings.",
      ],
      answer: "A",
      title: "Question 42",
    },
    {
      content:
        "Which two capabilities does the delegated administrator permission provide?\n       Choose 2 answers",
      options: [
        "A. Create profiles",
        "B. Unlock users",
        "C. Set OWD",
        "D. Assign users profiles",
      ],
      answer: "B,D",
      title: "Question 43",
    },
    {
      content:
        'At Universal Containers, users should only see Accounts they or their subordinates own. All Accounts with the custom field "Kay Customer" should be visible to all Senior Account Managers. There is a custom field on the Account record that contains sensitive information and should be hidden from all users, except 3 designated users who require view and edit access. These three users come from different user groups, and will change occasionally. Which three platform security features are required to support these requirements with the minimum amount of effort?\n       Choose 3 answers',
      options: [
        "A. Permission Sets",
        "B. Apex Managed Sharing",
        "C. Owner-Based Sharing Rules",
        "D. Criteria-Based Sharing Rules",
        "E. Role Hierarchy",
      ],
      answer: "A,D,E",
      title: "Question 44",
    },
    {
      content:
        "Universal container (UC) use External Object to retrieve Invoice data from a Legacy ERP. A finance team requested to have access to the Invoice records in the account page.\n       In addition to objects access in the finance users profile, what other feature should a Sales Architect recommend?",
      options: [
        "A. Create an owner-based sharing rule to grant access to the records.",
        "B. Use APEX managed sharing to grant access to the records.",
        "C. Create a criteria-based sharing rule to grant access to the records.",
        "D. Include the Invoice Related List On Account Page layout.",
      ],
      answer: "D",
      title: "Question 45",
    },
    {
      content:
        "Universal Containers (UC) tuned off the Customer User Visibility feature inits Customer Community.\n       What community functionality is expected by having the Customer User Visibility tuned off?",
      options: [
        "A. Search for internal users.",
        "B. Searching for other external users.",
        "C. Creating new Customer community users.",
        "D. Updating their user profile.",
      ],
      answer: "B",
      title: "Question 46",
    },
    {
      content:
        "A sales rep at Universal Containers (UC) has manually shared an Opportunity record with internal pre-sales users. After some time, the sales rep moved to another position and all opportunities records that were owned were transferred to a new sales rep. What happened to the internal pre-sales users access to the opportunity?",
      options: [
        "A. They will no longer have access to the record.",
        "B. They still have access to the record due to inherited sharing.",
        "C. They still have access to the record due to team access.",
        "D. They still have access to the record due to implicit sharing.",
      ],
      answer: "A",
      title: "Question 47",
    },
    {
      content:
        "Universal Containers would like to control access to records and objects according to the following business requirements:* Sales users can view all Account records but only edit their own records.\n       * Sales managers view all Account records but only edit records of the team.\n       * Service users can view all Account records that are not marked with a RecordType of Prospect.\n       Which organization-wide default configuration should a Salesforce architect recommend to fulfill these requirements?",
      options: [
        "A. Private",
        "B. Public Read/Transfer",
        "C. Public tad Only",
        "D. Public Read Write",
      ],
      answer: "C",
      title: "Question 48",
    },
    {
      content:
        "Universal Containers has set the Org-Wide Sharing Default for Accounts to Private and has created some sharing rules to extend access based on certain data access policies. An architect has been asked to review access to a certain set of key customer accounts. How might this review be conducted?",
      options: [
        "A. Log in as each user and Run the All Accounts List View.",
        "B. Use the Sharing button on each customer Account.",
        "C. Run a Report on Sharing in the Admin Console.",
        "D. Export the Account Share table and review.",
      ],
      answer: "D",
      title: "Question 49",
    },
    {
      content:
        "Universal Containers created a custom object called Defect and would like to enable the Sharing button on the Defect page layout to share the records manually to other users in the organization. In which scenario will the Sharing button appear?",
      options: [
        "A. The Sharing model is Public Read/Write.",
        "B. The Sharing model is Public Read/Write/Transfer.",
        "C. The Sharing button always appears.",
        "D. The Sharing model is either Private or Public Read only.",
      ],
      answer: "D",
      title: "Question 50",
    },
    {
      content:
        "Universal Containers has selected a small and diverse group of users to review inactive accounts. Given the Private sharing model, a public group was created and made available to this group of users. A sharing rule was created to make inactive Accounts visible to the public group. However some of these users are reporting they don't see any of the Accounts that were shared with the public group.\n       What is the underlying issue for these users?",
      options: [
        "A. The Accounts are owned by users higher in the role hierarchy.",
        'B. The users have a permission set that only allow Accounts in "Active" status.',
        "C. The page layout assigned to these users is different than the Account owner.",
        "D. The users are in profiles that have no access to the Account object.",
      ],
      answer: "D",
      title: "Question 51",
    },
    {
      content:
        "Universal Containers (UC) works with a dealer network to sell their products. There are approximately 5,000 dealers that do business with UC and UC has purchased a Partner Community to interact with each of their dealers on Opportunities. Each dealer is structured so that there are a group of managers who will oversee a larger team of agents. UC would like to set the Organization-Wide Defaults to Private for the Opportunity object, both internally and externally. Within each dealer, there are a few agents called Lead Agents who should be able to see the Opportunities for all of the other Agents at the dealer. What is the optimal solution for an Architect to recommend?",
      options: [
        "A. Grant Super User access to the Lead Agents as part of the Community user setup.",
        "B. Build an Apex Managed Sharing rule that will assign specific Opportunities to Lead Agents.",
        "C. Create a Sharing Rule to share opportunities to the owner's manager's role and below.",
        "D. Add a Sharing Set that shares Opportunities to the Lead Agent based on the Lead Agents Account.",
      ],
      answer: "A",
      title: "Question 52",
    },
    {
      content:
        "The Collections department at Universal Containers uses Salesforce to track its efforts. All Invoices and Invoice Line Items are stored in Salesforce. Invoice Line Item object details, such as Quantity and Extended Amount, should be summarized at the Invoice Object level, and all users who can see a given invoice should always see all invoice line items. Without leveraging Apex code, how should an Architect create the relationship between the Invoice object and the Invoice Line Item Object?",
      options: [
        "A. The Invoice Line Item Object should have a Lookup to the Invoice Object",
        "B. The Invoice Line Item Object should have a Master-Detail to the Invoice Object",
        "C. The Invoice object should have a Master-Detail to the Invoice Line Item Object",
        "D. The Invoice Object should have an inner joint to the Invoice Line Item Object",
      ],
      answer: "B",
      title: "Question 53",
    },
    {
      content:
        "Universal Containers (UC) implemented Sales Cloud and requested that only certain branch staff trained to sell high risk products can create opportunities for high risk products.\n       In which two ways can an Architect allow only specific branch staff to sell high risk products?\n       Choose 2 answers",
      options: [
        "A. Set Price Book Organization Wide Default to View Only and share the price book (High Risk) with the trained staff.",
        "B. Share (High Risk) price book with the trained staff via manual sharing.",
        "C. Configure Price book Organization wide default to No Access.",
        "D. Share (High Risk) price book with the trained staff via sharing rule.",
      ],
      answer: "A,B",
      title: "Question 54",
    },
    {
      content:
        "Universal Containers (UC) is implementing Sales Cloud. During the final quarter of the financial year, sales managers help each other close deals. They requested a solution in Salesforce to allow them to share opportunities with other sales managers from different teams as needed. They also requested that sharing deals should expire automatically two weeks after the new fiscal year starts.\n       Which two options to propose a solution to meet the requirements? Choose 2 answers",
      options: [
        "A. Opportunity team to share opportunities with sales managers.",
        "B. Apex Sharing to share opportunities with sales managers.",
        "C. Sharing Rules to share opportunities with sales managers.",
        "D. Scheduled Apex job to remove access.",
      ],
      answer: "A,D",
      title: "Question 55",
    },
    {
      content:
        "Universal Containers maintains Job information in a Custom Object that contains sensitive information. The only users who should be able to view and edit Job records are the user who owns the record and all users in the Delivery profile. Which three platform sharing tools are required to support the above requirements?\n       Choose 3 answers.",
      options: [
        'A. "View All Data" profile permission on the Delivery Profile.',
        "B. Criteria-Based sharing rule for the Delivery Profile on the Job Object.",
        "C. Organization-Wide Default sharing setting of Private on the Job Object.",
        "D. Grant access Using Hierarchy sharing setting on the Job Object set to false.",
        'E. "Modify All" permission for Job Object on the Delivery Profile.',
      ],
      answer: "C,D,E",
      title: "Question 56",
    },
    {
      content:
        "Universal Containers has a strict security model enforced through object, field, and row-based security mechanisms. The Architect would like to ensure the security model is being thoroughly tested using Apex automated tests. Which three considerations should be made when using the runAs() method to design Apex until tests?",
      options: [
        "A. runAs() can be used outside of test classes to bypass record-level security",
        "B. runAs () counts towards total DML statements issued within transaction",
        "C. runAs() does not enforce user permissions or field-level permissions in test classes",
        "D. runAs() can be used inside of test classes to validate field-level permissions",
        "E. runAs() can be used inside of test classes to validate record-level security",
      ],
      answer: "B,C,E",
      title: "Question 57",
    },
    {
      content:
        "A sales rep (John) at Universal Containers (UC) requested to update information in an account record where he has READ only access. John requested the EDIT access permission from the owner of the record (Paul). Paul manually shared the record with John. Assuming the OWD of the Account object is Public Read-Only, what is the impact in the system?",
      options: [
        'A. Existing AccountShare record is updated. Row Cause is "Manual" and Access Level is "Read/Write".',
        'B. New AccountShare record is created. Row Cause is "Owner" and Access Level is "Full".',
        'C. Existing AccountShare record is updated. Row Cause is "Owner" and User/Group is "John".',
        'D. New AccountShare record is created. Row Cause is "Manual" and Access Level is "Read/Write".',
      ],
      answer: "D",
      title: "Question 58",
    },
    {
      content:
        "Which two reasons should the Architect consider regarding the use of Apex Sharing Reasons?\n       Choose 2 answers",
      options: [
        "A. Ensuring the Share record is not deleted upon ownership change.",
        "B. Ensuring there is additional criteria available for Criteria-Based Sharing.",
        "C. Ensuring the developer can more easily troubleshoot programmatic sharing.",
        "D. Ensuring the Share record is deleted upon ownership change.",
      ],
      answer: "A,C",
      title: "Question 59",
    },
    {
      content:
        'Assuming Person Account is enabled in a Salesforce organization, which three objects can be configured as "Controlled by Parent" in Sharing Settings?\n       Choose 3 answers',
      options: [
        "A. Contact",
        "B. Opportunity",
        "C. Order",
        "D. Case",
        "E. Asset",
      ],
      answer: "A,C,E",
      title: "Question 60",
    },
    {
      content:
        "At Universal Containers there is a team of auditors distributed through the organization that all need access to high-value Opportunities.\n       With a private sharing model, which two option should an architect recommend when designing a solution for this requirement?\n       Choose 2 answers",
      options: [
        "A. Put the auditors as the highest level of the role hierarchy.",
        "B. Add the auditors to the default Opportunity Team.",
        "C. Create a criteria-based sharing rule to give access to the public group for high-value Opportunities.",
        "D. Create a public group and assign the Auditors to the group.",
      ],
      answer: "C,D",
      title: "Question 61",
    },
    {
      content:
        "UniversalContainers(UC)hasimplementedcustomercommunitywithcustomercommunitylicenses for their customers. UCrequested thatanyrecord owned by its customers should be accessible byUC users in the customer support role.\n       How can an Architect configure the system to support the requirements?",
      options: [
        "A. Sharing Set",
        "B. Apex Sharing",
        "C. Share Group",
        "D. Sharing Rule",
      ],
      answer: "C",
      title: "Question 62",
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
      title: "Question 63",
    },
    {
      content:
        "What is the best practice for testing sharing and visibility changes?",
      options: [
        "A. Use the Sharing button to test Profile and Permission set changes.",
        "B. Use Administrative and User reports to view the Active Users.",
        "C. Use the Login As feature for a sample user in each role and profile.",
        "D. Use Field Audit Trail to audit the field meta-data and visibility.",
      ],
      answer: "C",
      title: "Question 64",
    },
    {
      content:
        "Universal Containers (UC) has 200 distributors that use Partner Community licenses.\n       Partners cannot see each other's data, but UC is also trying to give more visibility to data for certain individuals at a distributor.\n       HOW can an Architect give users in the partner user role access to all Case and Container records owned by any user, regardless of role, at the same distributor?",
      options: [
        'A. Create a Permission Set granting "View All" permission to Case and Container records.',
        "B. Create an ownership-based sharing rule.",
        "C. Give super user permission to the individual partner users.",
        "D. Create sharing sets.",
      ],
      answer: "B",
      title: "Question 65",
    },
    {
      content:
        "The architect at Universal Containers is trying to ensure that security vulnerabilities are not present within the Salesforce organization.\n       What two tests should the architect verify?\n       Choose 2 answers",
      options: [
        "A. Test Cross-Site Scripting on custom pages.",
        "B. Test for invalid user access attempts.",
        "C. Test Cross-Site Scripting on Apex queries.",
        "D. Test for SOQL Injection.",
      ],
      answer: "A,D",
      title: "Question 66",
    },
    {
      content:
        "Universal Containers (UC) wants to reduce the amount of redundant leads entered into the system. UC.. only edited/reassigned by the lead owner.\n       What organization-wide default (OWD) approach should be recommended to help UC implement these ..",
      options: [
        "A. Implement a Public Read Only/Transfer OWD on Lead",
        "B. Implement a Public Read Only OWD on Lead.",
        "C. Implement a Public Read/Write OWD on Lead.",
        "D. Implement a private OWD on Lead.",
      ],
      answer: "B",
      title: "Question 67",
    },
    {
      content:
        "Universal Containers (UC) has implemented Customer Community with customer community plus license for its distributors. Retail distributors have part-time agents who work for multiple distributors. Those agents should have access to other distributor accounts as well.\n       What can be configured to grant agents access to different distributor accounts?",
      options: [
        "A. Create sharing set to share distributor accounts with agents using account contact relationship.",
        "B. Use share group to share distributor accounts with agents who have account contact relationship.",
        "C. Create sharing rules to share distributor accounts with agents.",
        "D. Use Apex sharing to share distributor accounts with agents using the Account__ Share table.",
      ],
      answer: "B",
      title: "Question 68",
    },
    {
      content:
        "In order to comply with Regulatory Requirements, Universal Containers must store sensitive customer information on-premise. Universal Containers would like this on-premise information to be accessible from Salesforce. What technology can Universal Containers use to achieve this?",
      options: [
        "A. Implement the Salesforce Shield toolkit.",
        "B. Implement a third-party proxy server.",
        "C. Implement an on-premise database.",
        "D. Implement a third-party tokenization service.",
      ],
      answer: "B",
      title: "Question 69",
    },
    {
      content:
        "What should a Salesforce architect recommend to make sure that users that gained access to a custom of sharing do not lose access to it when its owner is changed?",
      options: [
        "A. Create a specific Sharing Reason for the custom object.",
        "B. Create a new record in_Share object with RowCause ''Manual''",
        "C. Use ''runAS'' system method in Apex classes to enforce record visibility.",
        "D. Use ''With Sharing'' keyword to make sure record visibility will be considered",
      ],
      answer: "A",
      title: "Question 70",
    },
    {
      content:
        "An External Object is created to show Invoices from an external accounting system. When viewing the External Object, a user should only access invoice records the user is authorized to see.\n       What two actions are required to achieve the above requirement? Choose 2 answers",
      options: [
        "A. Restrict access to data in the accounting system.",
        "B. Create an owner based sharing rule to grant visibility to the Invoice object.",
        "C. Setup External Object to use OAuth to connect to the Accounting system.",
        "D. Grant access to the External Object to only the Account Manager profile.",
      ],
      answer: "A,C",
      title: "Question 71",
    },
    {
      content:
        "Universal Containers wants to create a way to store sensitive Invoice Data in Salesforce. A User who owns an Account should not see every Invoice, but only invoices that they or their subordinates own. Which two features should be considered during this solution implementation?\n       Choose 2 answers.",
      options: [
        "A. Deploy the Relationship between Accounts and the Invoices Object as Master-Detail.",
        "B. Ensure that the Organization-Wide Default sharing for Invoices is set to Private.",
        "C. Deploy the Relationship between Accounts and the Invoices Object as Lookup.",
        "D. Create a Workflow that populates the Invoice sharing object upon Insert.",
      ],
      answer: "A,B",
      title: "Question 72",
    },
  ],
});
