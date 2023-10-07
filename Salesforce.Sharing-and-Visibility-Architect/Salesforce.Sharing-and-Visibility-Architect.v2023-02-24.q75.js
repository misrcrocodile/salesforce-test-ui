window.testContent = window.testContent || [];
var testId = "Salesforce.Sharing-and-Visibility-Designer";
var testName = "Salesforce.Sharing-and-Visibility-Designer";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "Salesforce.Sharing-and-Visibility-Architect.v2023-02-24.q75",
  content: [
    {
      content:
        "Universal Containers has requirement to integrate Salesforce with an external system to control record access. What option should the Architect consider when designing a solution?",
      options: [
        "A. Use the SOAP API to maintain the related SObject_share records.",
        "B. Use the Metadata API to maintain the related SObject records.",
        "C. Use the SOAP API to create new Criteria-Based Sharing Rules in Salesforce.",
        "D. Use the Security API to modify the role hierarchy in Salesforce.",
      ],
      answer: "A",
      title: "Question 1",
    },
    {
      content:
        "Universal Containers (UC) implemented Sales Cloud and requested that only certain branch staff trained to sell high risk products can create opportunities for high risk products. In which two ways can an Architect allow only specific branch staff to sell high risk products? Choose 2 answers",
      options: [
        "A. Set Price Book Organization Wide Default to View Only and share the price book (High Risk) with the trained staff.",
        "B. Share (High Risk) price book with the trained staff via sharing rule.",
        "C. Share (High Risk) price book with the trained staff via manual sharing.",
        "D. Configure Price book Organization wide default to No Access.",
      ],
      answer: "A,C",
      title: "Question 2",
    },
    {
      content:
        "Susan posts a file to the chatter fees for a record of an object which OWD is private. Which two statements accurately describe who can view the file by default? Choose 2 answers.",
      options: [
        "A. Susan and users with the View All Data permission.",
        "B. Susan and users with access to the record.",
        "C. Susan and users with a shared chatter post link to the file.",
        "D. Susan only.",
      ],
      answer: "A,B",
      title: "Question 3",
    },
    {
      content:
        "Which two options can help mitigate the risks of import failures associated with large-volume bulk data loads? Choose 2 answers.",
      options: [
        "A. Defer Sharing Calculation.",
        "B. Group records by ParentID within a batch.",
        "C. Increase batch size.",
        "D. Minimize user group hierarchy.",
      ],
      answer: "A,B",
      title: "Question 4",
    },
    {
      content:
        "Universal Containers (UC) implemented Sales Cloud and requested that sales agents have access to products the company sells and be able to create opportunities for its customers. What should the Organization-Wide Defaults (OWD) be for pricebook?",
      options: [
        "A. Use",
        "B. Public Read Only",
        "C. View",
        "D. Pubic Read Write",
      ],
      answer: "A",
      title: "Question 5",
    },
    {
      content:
        'At Universal Containers, users should only see Accounts they or their subordinates own. All Accounts with the custom field "Kay Customer" should be visible to all Senior Account Managers. There is a custom field on the Account record that contains sensitive information and should be hidden from all users, except 3 designated users who require view and edit access. These three users come from different user groups, and will change occasionally. Which three platform security features are required to support these requirements with the minimum amount of effort? Choose 3 answers',
      options: [
        "A. Criteria-Based Sharing Rules",
        "B. Role Hierarchy",
        "C. Permission Sets",
        "D. Apex Managed Sharing",
        "E. Owner-Based Sharing Rules",
      ],
      answer: "A,B,C",
      title: "Question 6",
    },
    {
      content:
        "User A at Universal Containers is in the default account team for User B. User B owns the ACME account and changed User A's team member access to the account. What is the impact of this change?",
      options: [
        "A. Changes affect the default Opportunity team.",
        "B. Changes affect only the ACME Account",
        "C. Changes affect all child ACME Accounts.",
        "D. Changes affect the default Account team.",
      ],
      answer: "B",
      title: "Question 7",
    },
    {
      content:
        "Universal Containers (UC) turned off the customer visibility feature in its customer community. What community functionality is impacted by having the customer user visibility turned off?",
      options: [
        "A. Searching for the external users.",
        "B. Updating their user profile.",
        "C. Creating new customer community users.",
        "D. Searching for internal users.",
      ],
      answer: "A",
      title: "Question 8",
    },
    {
      content:
        "Universal containers (UC) service reps are assigned to a profile which has ''View All'' in Case object.. To make sure service reps have access to all relevant information to attend to customer requests, which Architect consider? Choose 2 answers",
      options: [
        "A. Service reps will NOT able to access to Contact records because Account OWD is private",
        "B. Service reps will NOT able to access to Contact records if they are controlled by Parent.",
        "C. Service reps will be able to access to Contact records if they are Controlled by Parent.",
        "D. Service reps will be able to access to Contact records due to Implicit Sharing.",
      ],
      answer: "C",
      title: "Question 9",
    },
    {
      content:
        'Universal Containers has the following Sharing Settings for their Org: Account = Private Contact = Controlled by Parent Opportunity = Private Case = Private They have enabled "Default Account Teams" and have trained users to set up their Default Team. Which three access levels can be set on the Account Team Member? Choose 3 answers',
      options: [
        "A. Account Access",
        "B. Opportunity Access",
        "C. Case Access",
        "D. Contract Access",
        "E. Contact Access",
      ],
      answer: "A,B,C",
      title: "Question 10",
    },
    {
      content:
        "Universal Containers (UC) has a requirement to expose a web service to their business partners. The web service will be used to allow each business partner to query UC's Salesforce instance to retrieve the status of orders. The business partner should only be allowed access to orders for which the business partner is the fulfillment vendor. The Architect does not want the business partners to utilize the standard APIs and would prefer a custom API be developed. Which three design elements should the Architect consider in order to ensure the data security of the solution? Choose 3 answers",
      options: [
        "A. Set the Orders object's sharing settings to Private in the Org-Wide Defaults",
        "B. Query the Orders object with Dynamic SOQL based upon the fulfillment ID.",
        "C. Develop a custom Apex web service with a fulfillment ID input attribute",
        'D. Develop a custom Apex web service using the "With Sharing" keyword.',
        "E. Provide each partner with their own Salesforce login set to API Enabled on the profile.",
      ],
      answer: "A,B,D",
      title: "Question 11",
    },
    {
      content:
        "Universal Containers (UC) has a custom Apex class that enforces a business process and updates opportunity field-level security permissions of read only certain user's profiles are being updated by their class. How should the architect fix this problem?",
      options: [
        "A. Use the IsUpdateable() Apex method to test each field prior to allowing updates.",
        "B. Use the With SECURYT_ENFORCED keyword in the SOQL statement.",
        "C. Put the code in an class that uses the With Sharing keyword.",
        "D. Add With Sharing keyword to the class.",
      ],
      answer: "B",
      title: "Question 12",
    },
    {
      content:
        "Universal Containers has built a recruiting application on the salesforce Platform. HR requested that all internal users should have edit access to the referral custom object. One of the recruiters needed to share a referral record with another colleague for collaboration using manual sharing. The recruiter opened the referral record and could not find the share button. What could be the technical reason for this?",
      options: [
        "A. The Referral object OWD is public Read/Write.",
        "B. The Referral object OWD is private.",
        "C. The Referral object OWD is public Read only.",
        "D. The Referral object OWD is public Full Access.",
      ],
      answer: "A",
      title: "Question 13",
    },
    {
      content:
        'Universal Containers would like to create a custom team solution that can be used on a custom Loan object. The following requirements must be met: The Loan custom object should be set to Private in the Org-Wide Defaults. Any user added to the Custom Team object should have Read Only access to the corresponding Loan record. If the Custom Team record is marked as "Primary" then the corresponding user should have Read/Edit access to the corresponding Loan record. Which two methods will allow the Architect to meet the requirements? Choose 2 answers.',
      options: [
        "A. Create an owner-based sharing rule on the Custom Team object that will share the Loan record to the owner of the Custom Team record.",
        "B. Create a custom trigger on the Custom Team object that inserts or updates records in the Loan_share object.",
        "C. Create Apex Sharing Reasons on the Loan object to identify the reason the Loan record was share.",
        "D. Create a criteria-based sharing rule on the Loan object that will share the Loan record with the appropriate user in the Custom Team object.",
      ],
      answer: "A,D",
      title: "Question 14",
    },
    {
      content:
        "When you make changes to roles and groups Salesforce locks the entire group membership table, which makes it impossible to process group changes in multiple threads to increase throughput on updates.",
      options: ["A. Granular Locking"],
      answer: "A",
      title: "Question 15",
    },
    {
      content:
        "What is the best practice for testing sharing and visibility changes?",
      options: [
        "A. Use Field Audit Trail to audit the field meta-data and visibility.",
        "B. Use Administrative and User reports to view the Active Users.",
        "C. Use the Login As feature for a sample user in each role and profile.",
        "D. Use the Sharing button to test Profile and Permission set changes.",
      ],
      answer: "C",
      title: "Question 16",
    },
    {
      content:
        "If you want to create some logic that will share certain records in APEX code, you just have to create special records that will open access to the desired records. The aim is to create records of certain type, for example , all share objects for custom objects are named as",
      options: ["A. MyCustomObject__Share"],
      answer: "A",
      title: "Question 17",
    },
    {
      content:
        "Universal Container (UC) wants all full-time internal employees to be able to view all leads. A subset of employees should also be able to see leads. Which organization default (OWD) approach should an architect recommend that will help US implement these requirement?",
      options: [
        "A. Implement a Public Read/write/Transfer OWD on Lead.",
        "B. Implement a Public Read/write OWD on Lead",
        "C. Implement a Private OWD on Lead.",
        "D. Implement a Public Read only OWD on Lead",
      ],
      answer: "C",
      title: "Question 18",
    },
    {
      content:
        "Universal Containers (UC) operates worldwide with offices in more than 100 regions in 10 different countries role hierarchy to control data visibility. In the new fiscal year, UC is planned to reorganize the roles and reassign accounts owners. Which two points should an architect consider in this situation? Which two point should an Architect consider in this situation? Choose 2 answers",
      options: [
        "A. Using a temporary parking lot account to improve performance.",
        "B. Changing complex role hierarchy can cause a high level of sharing recalculation.",
        "C. Restricting the organization-sharing configurations to private.",
        "D. Replacing Account records ownerships massively can cause data skew.",
      ],
      answer: "B,D",
      title: "Question 19",
    },
    {
      content:
        "Universal Containers, a global corporation of 50,000 users, has a 24x7 call center operated by 20,000 users that includes employees and contractors. Their sales organization is 10,000 strong and they started processing about 100,000 updates to opportunity custom fields called Priority and NextStep. They also started processing 20,000 updates to a highly nested territory hierarchy. There was a third mass update on a Next Step field on the Action Plan custom object that has Case as a lookup field. Users started seeing a Group membership lock error in the system. What is a probable cause for this error?",
      options: [
        "A. Lock contention on Case records because of Action Plan custom object updates.",
        "B. Lock contention on Territory object because of Territory object updates.",
        "C. Lock contention due to system-initiated sharing rule recalculation",
        "D. Lock contention on Account records because of Opportunity object updates.",
      ],
      answer: "C",
      title: "Question 20",
    },
    {
      content:
        "What should the Architect do to ensure Field-Level Security is enforced on a custom Visualforce page using the Standard Lead Controller?",
      options: [
        'A. Use the "With Sharing" keyword on the Standard Lead Controller.',
        "B. Nothing; Field-Level Security will automatically be enforced.",
        "C. Use the {!Schema.sObjectType.Lead.fields.isAccessible()} expression",
        "D. Use the Schema.SObject.Lead.isAccessible() method.",
      ],
      answer: "B",
      title: "Question 21",
    },
    {
      content:
        "Universal Containers has created a custom object to store highly confidential client relationship data with Private sharing settings. Which two options would an Architect choose to ensure access only to the record owner and the administrator? Choose 2 answers.",
      options: [
        'A. Disable "Grant Access Using Hierarchies."',
        'B. Disable the "View All" permission on all other profiles.',
        'C. Disable the "Create" permission on all other profiles.',
        'D. Disable the "Read" permission on all other profiles.',
      ],
      answer: "A,B",
      title: "Question 22",
    },
    {
      content:
        "What vulnerability can exist when controllers use dynamic rather than static queries and bind variables?",
      options: [
        "A. Record Access Override.",
        "B. Cross-site scripting.",
        "C. Buffer Overflow Attacks.",
        "D. SOQL Injection.",
      ],
      answer: "D",
      title: "Question 23",
    },
    {
      content:
        "After testing and deploying a new trigger that does creates a related order when a opportunity is closed, the Architect begins complaints of permission error messages appearing when closing an opportunity. How did this error occur?",
      options: [
        "A. Trigger is using IsCreateable() Apex method and the user doesn't have create permission on the Oder object.",
        "B. The trigger handlers class does not use any sharing keywords and the user not have access to the orders related to the opportunity.",
        "C. The trigger handler class is using ''with sharing'' and the user does not have access to the orders related to the opportunity.",
        "D. The trigger should be using RunAs() when creating the order.",
      ],
      answer: "C",
      title: "Question 24",
    },
    {
      content:
        "Universal Containers has a private sharing model on Accounts. Apex Managed Sharing is required to share certain account records with all users who are assigned to a specific Role in the Role Hierarchy. What should be the recommended way for the Architect to implement this?",
      options: [
        "A. Create an AccountShare record associated to each user who is assigned to the Role.",
        "B. Create an AccountShare record associated to a public group containing the Role.",
        "C. Create an AccountShare record associated to the required Role.",
        "D. Create an AccountShare record associated to a public group containing the Users in the Role.",
      ],
      answer: "D",
      title: "Question 25",
    },
    {
      content:
        "Universal Containers has just deployed a change to its role hierarchy. A manager is reporting that their staff can now see Accounts that they do not own and should not have access to. How should the Architect troubleshoot?",
      options: [
        "A. While logged in as the System Administrator, use the Field Accessibility Viewer to view a matrix of who has access to Accounts.",
        "B. While logged in as the System Administrator, use the Field Accessibility Viewer to view a matrix of who has access to Accounts. ",
        "C. While logged in as the one of the Staff members, navigate to their user record and inspect their profile and role membership.",
        "D. While logged in as the one of the Staff members, navigate to a sample account and use the Sharing button to determine who has access.",
      ],
      answer: "D",
      title: "Question 26",
    },
    {
      content:
        "Universal Containers (UC) uses a custom Visualforce page to display shipment tracking information (custom object, private OWD) to field manager and agents. The IT team wants to make sure that users have access to only the information that is allowed. Which Apex method must be used to make sure only allowed fields are shown to the users?",
      options: [
        "A. isAccessible()",
        "B. isViewable()",
        "C. isReadable()",
        "D. isShowable()",
      ],
      answer: "A",
      title: "Question 27",
    },
    {
      content:
        "Which two settings are available in profiles, but not permission sets? Choose 2 answers.",
      options: [
        "A. Tab Settings",
        "B. Record Types",
        "C. Page Layout Assignments",
        "D. Login Hours",
      ],
      answer: "C,D",
      title: "Question 28",
    },
    {
      content:
        "Universal Containers has Public Read Only sharing settings on the Opportunity object. What Opportunity access options can the user see while adding account team members to the Account?",
      options: [
        "A. Read Only and Read/Write",
        "B. Read Only",
        "C. Private and Read Only",
        "D. Private",
      ],
      answer: "A",
      title: "Question 29",
    },
    {
      content:
        'Which three areas should the Architect review in order to increase performance of "Record Access" and "Sharing" calculations? Choose 3 answers.',
      options: [
        "A. Opportunity data, to ensure that no Account has more than 10,000 Opportunity records that are related to it.",
        "B. Record ownership, to ensure that no user owns more than 10,000 Object records in the system.",
        "C. Apex Managed Sharing triggers, to ensure that no trigger is querying more that 10,000 Object records.",
        "D. Custom Object data, to ensure that no Account has more than 10,000 Custom Objects that look up to it.",
      ],
      answer: "A,B,D",
      title: "Question 30",
    },
    {
      content:
        "Universal Container has a set of Account management users that should only see accounts once the account becomes a customer. The type field on the Account identifies whether the account is a prospect, customer, partner, or other. Which two methods could an Architect use to enable this sharing requirement, assuming a private sharing model for accounts? Choose two:",
      options: [
        "A. Create a public list view, where accounts of type customer are included and share the list view with account management public group",
        "B. Create a criteria-based sharing rule that shares the account to the account management group when the type is customer",
        "C. Institute a business process that calls for the account manager to be added to the account team once the account becomes a customer",
        "D. Create an account sharing rule that shares all accounts owned by sales to be shared with account management roles and subordinates",
      ],
      answer: "B,C",
      title: "Question 31",
    },
    {
      content:
        "Universal Container is creating a custom VF page to allow user to edit contact records. The developer has used an apex:outputField for the Phone field on the contact obj. What is the expected behavior if a user without FLS accesses the VF page?",
      options: [
        "A. The field is automatically removed from the page",
        "B. The user is able to enter a value into the phone field",
        "C. The user encounters an error while saving the record",
        "D. The output field is visible to user",
      ],
      answer: "A",
      title: "Question 32",
    },
    {
      content:
        "Besides their own team accounts, sales managers at Universal Containers need to have READ access to all accounts of the same segment in other countries. Role hierarchy was implemented accordingly (based on countries), but a sales manager in the US is complaining that he cannot view account records of the same segment in Canad a. What should be done to grant access in a proper way?",
      options: [
        "A. Create an owner-based sharing rule to grant access to account records that have the same segment to all sales manager roles.",
        "B. Change the role hierarchy and put all of the sales managers in the US and Canada in the same role.",
        "C. Create criteria-based sharing rules to grant access to account records that have the same segment to all sales manager roles.",
        "D. Create a public group and include all accounts of the same segment and grant access through a permission set.",
      ],
      answer: "A",
      title: "Question 33",
    },
    {
      content:
        "Users at Universal Containers are complaining that a field has disappeared from the Account page after deploying its latest project. The page layout has not changes with this deployment. How should the admin troubleshoot this issue?",
      options: [
        "A. Review change to Account record types.",
        "B. Log in as user and check several Accounts to isolate the problem records.",
        "C. Run a Who Sees What report, filtering on Account.",
        "D. View Field Accessibility in the Object Manager",
      ],
      answer: "D",
      title: "Question 34",
    },
    {
      content:
        "Universal Containers has developed Apex code to manually create AccountShare records to grant specific users access to individual Accounts. What must the Architect do to ensure the AccountShare records are not deleted when the owner of the Account is changed?",
      options: [
        "A. Create the share records with the Delete on Owner Change field set to false",
        "B. Create the share records and set the RowCause to a custom Apex Sharing Reason",
        "C. Create the share records and set the RowCause to Manual",
        'D. Create the share records in a class with the "Without Sharing" keyword',
      ],
      answer: "B",
      title: "Question 35",
    },
    {
      content:
        "Universal Containers has a Private Sharing Model for the Opportunity object. Sales Rep A at Universal Containers created the Opportunity record and then transferred ownership of the Opportunity record to Sales Rep B. Both Sales Rep A and B have the same role in the Role Hierarchy. What access will Sales Rep A have to the Opportunity after the transfer?",
      options: [
        "A. Full Access",
        "B. Read/Write",
        "C. No Access",
        "D. Read Only",
      ],
      answer: "C",
      title: "Question 36",
    },
    {
      content:
        "Universal Containers (UC) has implemented Service Cloud. There is a flag field on the case object that marks a case as (Sensitive). UC requested that this flag can be viewed by all users who have access to the case but only be edited by the assigned case assessor. The case assessor is a lookup field on the case object. How can an architect achieve this requirement?",
      options: [
        "A. Field-level security",
        "B. Permission Set.",
        "C. Object Permissions.",
        "D. Custom Lightning Component.",
      ],
      answer: "D",
      title: "Question 37",
    },
    {
      content:
        "Universal Containers (UC) has a team that analyzes customer orders looking for fraud. This team needs access to Invoice records (Custom object, Private OWD). UC \\as complex rules to control users' access. The Salesforce Architect recommended using Apex managed sharing to meet these requirements. Which two recommendations should a Salesforce Developer consider when implementing the changes7 Choose 2 answers",
      options: [
        'A. Use "With Sharing" keyword to make sure record visibility will always be considered.',
        'B. Use "With Sharing" keyword to enforce field-level security.',
        'C. Use "Without Sharing" keyword to make sure record visibility will be considered.',
        "D. Use runAs system method to test different users accessing these records.",
      ],
      answer: "A,D",
      title: "Question 38",
    },
    {
      content:
        "In order to allow community users to collaborate on Opportunities, which license type must the users.",
      options: [
        "A. Sales Community",
        "B. Customer Community plus",
        "C. Partner Community",
        "D. Customer Community",
      ],
      answer: "C",
      title: "Question 39",
    },
    {
      content:
        "Which are two valid use cases for programmatic sharing? Choose 2 answers.",
      options: [
        "A. Setting user ownership for standard and custom objects.",
        "B. Native sharing functionality does not meet requirements.",
        "C. An external system manages user record access.",
        "D. Frequent user ownership changes based on re-alignments.",
      ],
      answer: "B,C",
      title: "Question 40",
    },
    {
      content:
        'When writing test methods, what functionality is verified by the system method"runAs()"?',
      options: [
        "A. Enforcement of user's public group assignments.",
        "B. Enforcement of a user's record sharing.",
        "C. Enforcement of user permissions.",
        "D. Enforcement of a user's field-level security.",
      ],
      answer: "B",
      title: "Question 41",
    },
    {
      content:
        "At Universal Containers there is a team of auditors distributed through the organization that all need access to high-value Opportunities. With a private sharing model, which two option should an architect recommend when designing a solution for this requirement? Choose 2 answers",
      options: [
        "A. Add the auditors to the default Opportunity Team.",
        "B. Create a criteria-based sharing rule to give access to the public group for high-value Opportunities.",
        "C. Create a public group and assign the Auditors to the group.",
        "D. Put the auditors as the highest level of the role hierarchy.",
      ],
      answer: "B,C",
      title: "Question 42",
    },
    {
      content:
        "What should a Salesforce architect recommend to make sure that users that gained access to a custom of sharing do not lose access to it when its owner is changed?",
      options: [
        "A. Create a specific Sharing Reason for the custom object.",
        "B. Use ''runAS'' system method in Apex classes to enforce record visibility.",
        "C. Create a new record in_Share object with RowCause ''Manual''",
        "D. Use ''With Sharing'' keyword to make sure record visibility will be considered",
      ],
      answer: "A",
      title: "Question 43",
    },
    {
      content:
        "A user at Universal Containers would like to give access to a Report folder to someone else in the organization. Which two access permissions should the user have to support this requirement? Choose 2 answers.",
      options: [
        'A. The "Manager" Report folder permission.',
        'B. The "Editor" Report folder permission.',
        'C. The "Manage Reports in Public Folders" Profile permission.',
        'D. The "Viewer" Report folder permission',
      ],
      answer: "A,C",
      title: "Question 44",
    },
    {
      content:
        "Universal Containers is designing a new community using the Customer Community license type. They would like to have the users complete survey questions through the community interface and store the responses in a Custom Object that has a lookup to the account object. Any internal user who has access to the account should be able to see all survey responses. All Customer Community users should be able to see surveys filled in by other users for their company, but not surveys for other companies. What are the correct security settings to achieve this?",
      options: [
        'A. Set all Organization-Wide Default security to be "Private" for both internal and external users and use Sharing Rules to grant the desired access',
        'B. Set all Organization-Wide Default settings to be "Public Read/Write" for both internal and external users.',
        'C. Set all Organization-Wide Default security to be "Public Read/Write" for internal users and "Private" for external users.',
        "D. Set the custom object to be master-detail to the Account and leave the Organization-Wide Default settings as their default values.",
      ],
      answer: "A",
      title: "Question 45",
    },
    {
      content:
        "The architect at Universal Containers is trying to ensure that security vulnerabilities are not present within the Salesforce organization. What two tests should the architect verify? Choose 2 answers",
      options: [
        "A. Test for invalid user access attempts.",
        "B. Test Cross-Site Scripting on custom pages.",
        "C. Test for SOQL Injection.",
        "D. Test Cross-Site Scripting on Apex queries.",
      ],
      answer: "B,C",
      title: "Question 46",
    },
    {
      content:
        "The Corporate Identity and Access Team needs to audit User setup in the Salesforce .. What two permissions should be granted to this team so they can perform their audit? Choose 2 answers",
      options: [
        "A. View All Users",
        "B. View permission on the User object",
        "C. View All Data",
        "D. View Setup and Configuration",
      ],
      answer: "A,D",
      title: "Question 47",
    },
    {
      content:
        "Universal Containers (UC) tuned off the Customer User Visibility feature inits Customer Community. What community functionality is expected by having the Customer User Visibility tuned off?",
      options: [
        "A. Searching for other external users.",
        "B. Search for internal users.",
        "C. Updating their user profile.",
        "D. Creating new Customer community users.",
      ],
      answer: "A",
      title: "Question 48",
    },
    {
      content:
        "A sales rep at Universal Containers (UC) has manually shared an Opportunity record with internal pre-sales users. After some time, the sales rep moved to another position and all opportunities records that were owned were transferred to a new sales rep. What happened to the internal pre-sales users access to the opportunity?",
      options: [
        "A. They still have access to the record due to team access.",
        "B. They will no longer have access to the record.",
        "C. They still have access to the record due to implicit sharing.",
        "D. They still have access to the record due to inherited sharing.",
      ],
      answer: "B",
      title: "Question 49",
    },
    {
      content:
        "Universal Containers has set Opportunity Sharing to Private with Opportunity Teams enabled. Which three options can change the Owner of the Opportunity? Choose 3 answers.",
      options: [
        'A. The System Administrator or a user with the "Transfer Records" permission.',
        "B. Any Opportunity Team Member on the current Opportunity.",
        "C. The user specified as the Manager on the Owner's User Profile.",
        "D. Someone above the Opportunity Owner in the Role Hierarchy.",
        "E. The current Opportunity Owner can transfer the current ownership.",
      ],
      answer: "A,D,E",
      title: "Question 50",
    },
    {
      content:
        "Sales manager at universal containers (UC) have requested viewing customer invoices in Salesforce. Invoice data is mastered in the ERP system. The architect at UC decided to surface the customer invoices in salesforce using external objects and did the following: -Configured an external object called Invoice. -Created a lookup relationship between account and the invoice. How can the architect grant the sales managers access to the customer invoices data?",
      options: [
        "A. By creating a sharing set to share invoices with users in sales manager role.",
        "B. By creating manual sharing to share invoices with relevant sales managers.",
        "C. By creating sharing rules to share the invoices records with users in sales mangers roles.",
        "D. By creating controlling the invoices object permission on the sales manager's profile.",
      ],
      answer: "D",
      title: "Question 51",
    },
    {
      content:
        "Which two options can be selected to share data with when creating a sharing rule? Choose 2 answers",
      options: ["A. Public Groups", "B. Users", "C. Roles", "D. Profiles"],
      answer: "A,C",
      title: "Question 52",
    },
    {
      content:
        "Universal Containers (UC) operates worldwide with offices in more than 100 regions in 10 different countries and has established a very complex role hierarchy to control data visibility. In the new fiscal year UC is planning to reorganize the roles and reassign accounts owners. Which three features could an architect recommend to avoid problems on this operation? Choose 3 answers",
      options: [
        "A. Skinny table",
        "B. Partition data using Divisions",
        "C. Granular Locking",
        "D. Parallel Sharing Rule recalculation",
        "E. Deferred Sharing Recalculation",
      ],
      answer: "C,D,E",
      title: "Question 53",
    },
    {
      content:
        "Universal Containers (UC) has recently changed its internal policy to follow market regulations and create an internal team to manage the collection process. Only this team should have access to Invoke records. currently, invoke is a child in a Master-Detail relationship to Account. Although related lists have been removed from the page layouts, some profiles stills have access to the invoice object. Which approach should an architect recommend to fix this problem?",
      options: [
        "A. Change the Invoke organization-wide default from Controlled by Parent to Private and remove invoke access from the unauthorized",
        "B. Replace Account and Invoke Master Detail Relationship by a Lookup and remove Invoice Access from the unauthorized profiles,",
        "C. Create a Permission Set with No Access to the Invoice object and assign it to unauthorized users.",
        "D. Create a new Profile with no access to the Invoice object and assign it to all unauthorized users.",
      ],
      answer: "B",
      title: "Question 54",
    },
    {
      content:
        "Universal Containers (UC) is implementing Sales Cloud. During the final quarter of the financial year, sales managers help each other close deals. They requested a solution in Salesforce to allow them to share opportunities with other sales managers from different teams as needed. They also requested that sharing deals should expire automatically two weeks after the new fiscal year starts. Which two options to propose a solution to meet the requirements? Choose 2 answers",
      options: [
        "A. Scheduled Apex job to remove access.",
        "B. Opportunity team to share opportunities with sales managers.",
        "C. Sharing Rules to share opportunities with sales managers.",
        "D. Apex Sharing to share opportunities with sales managers.",
      ],
      answer: "A,B",
      title: "Question 55",
    },
    {
      content:
        'A Visualforce controller has a requirement to be written with "Without Sharing" at the top level; however, certain methods within the page still need to enforce the user permissions for creating records and accessing certain fields. Which two methods below would be used to enforce this requirements? Choose 2 answers.',
      options: [
        "A. Schema.DescribeFieldResult",
        "B. Schema.getGlobalDescribe",
        "C. Schema.DescribeSObjectResult",
        "D. UserInfo.getProfileID",
      ],
      answer: "A,C",
      title: "Question 56",
    },
    {
      content:
        "The architect has a requirement to create a criteria-based sharing rule based on the customer Social.. up the rule in Contact Sharing, the field is not shown on the list of available field. What might cause this?",
      options: [
        "A. The field has been configured for encryption.",
        "B. fields with validation rules are not available for sharing rules.",
        "C. The architect's profile does not have field level Security (FLS) for this field.",
        "D. The architect does not have permission to Compliance fields.",
      ],
      answer: "A",
      title: "Question 57",
    },
    {
      content:
        "Universal Containers has a custom Job object with a private sharing model. Based on the size and location of the Job, different teams must have access to edit the specific Job record. To support this requirement, Apex Managed Sharing has been implemented to share records with the required users. Since the teams change frequently, managed sharing recalculations need to be manually run frequently. What can the Architect do to optimize this process?",
      options: [
        "A. Change the sharing model on the Job object to Public Read/Write.",
        "B. Create a custom Visualforce page to edit the jobs and specify Without Sharing on the controller.",
        "C. Create public groups for each team, and share the jobs with the groups instead of users.",
        "D. Create a scheduled job to automatically run the sharing recalculations on a nightly basis.",
      ],
      answer: "C",
      title: "Question 58",
    },
    {
      content:
        "Universal Containers (UC) has implemented Customer Community with customer community plus license for its distributors. Retail distributors have part-time agents who work for multiple distributors. Those agents should have access to other distributor accounts as well. What can be configured to grant agents access to different distributor accounts?",
      options: [
        "A. Create sharing set to share distributor accounts with agents using account contact relationship.",
        "B. Create sharing rules to share distributor accounts with agents.",
        "C. Use share group to share distributor accounts with agents who have account contact relationship.",
        "D. Use Apex sharing to share distributor accounts with agents using the Account__ Share table.",
      ],
      answer: "C",
      title: "Question 59",
    },
    {
      content:
        "Universal Containers has two custom objects: Job and Job Interview. The Job Interview object has a lookup relationship to Job. Both objects are set to Private in sharing settings. The HR team will own all Job and Job Interview records. They have asked their Salesforce Architect to automatically share the Job Interview when the Interviewer (lookup to user record) has been populated. The interviewer can be from any department. What method should the Architect use to achieve this requirement?",
      options: [
        "A. Build a criteria-based sharing rule between the Job Interview and the Interviewer",
        "B. Build a workflow email notification to notify the interviewer of the record assignment",
        "C. Build apex Managed Sharing code to share Job Interview with the Interviewer user",
        "D. Build a standard sharing rule between Job Interview and the Interviewer",
      ],
      answer: "C",
      title: "Question 60",
    },
    {
      content:
        "Which two objects support creating queues? Choose 2 answers.",
      options: ["A. Opportunity.", "B. Lead.", "C. Account.", "D. Case."],
      answer: "B,D",
      title: "Question 61",
    },
    {
      content:
        "Universal Containers has developed an AppExchange managed package for their distribution partners, which required a private key to be generated for each partner and used by the code. Universal Containers support representatives must be able to access the private key value to debug connection issues, but it must not be possible for the partner to access the value. How can the Architect best support this requirement?",
      options: [
        "A. Store the value in a text field on a protected custom setting in the package.",
        "B. Store the value in a static variable in a class included in the managed package.",
        "C. Store the value in the text field on a list custom setting in the managed package.",
        "D. Store the value in an encrypted field on a custom object in the package.",
      ],
      answer: "C",
      title: "Question 62",
    },
    {
      content:
        "Universal Containers has a Private Sharing Model and restrictive data access settings in place. The data governance team is planning to deploy a master data management tool that will need write access to all system data, and the Architect has been asked to prepare a Data Governance User Profile that has full access to all data regardless of Sharing and CRUD Settings. What is the optimal way to enable this requirement?",
      options: [
        "A. Create an All Data Access app as a default for this Profile.",
        'B. Enable the "Edit Read -Only Fields" permission for this Profile.',
        "C. Create a Sharing Rule for required Objects, on an API Only profile",
        'D. Ensure the profile has the "Modify All Data permission enabled',
      ],
      answer: "D",
      title: "Question 63",
    },
    {
      content: "If OWD is Public Read Only, what are sharing access options",
      options: ["A. Read, - Read/Write"],
      answer: "A",
      title: "Question 64",
    },
    {
      content:
        "Universal Containers has selected a small and diverse group of users to review inactive accounts. Given the Private sharing model, a public group was created and made available to this group of users. A sharing rule was created to make inactive Accounts visible to the public group. However some of these users are reporting they don't see any of the Accounts that were shared with the public group. What is the underlying issue for these users?",
      options: [
        "A. The users are in profiles that have no access to the Account object.",
        'B. The users have a permission set that only allow Accounts in "Active" status.',
        "C. The page layout assigned to these users is different than the Account owner.",
        "D. The Accounts are owned by users higher in the role hierarchy.",
      ],
      answer: "A",
      title: "Question 65",
    },
    {
      content:
        'For the Universal Containers Commercial and Consumer support departments, having access to Activities for Contacts with which they interact is important. Commercial support users should not see Consumer Accounts/Contacts and Consumer support users should not see Commercial Accounts/Contacts. Assuming the Organization-Wide Default for Activities is set to "Controlled by Parent" what is the minimum level of Sharing access a support user would need to Accounts/Contacts to view associated Activities?',
      options: [
        "A. The users need no access to Accounts/Contacts with the proper Activity Sharing Rules and Profile Permissions for the Accounts Tab.",
        "B. Private Account/Contact Sharing Default with a Sharing Rule for each department set to Public Read only access to Accounts/Contacts.",
        "C. Private Account/Contact Sharing Default with a Sharing Rule for each department set to Private access to Accounts/Contacts.",
        "D. Private Account/Contact Sharing Default with a Sharing Rule for each department set to Public Read/Write access to Accounts/Contacts.",
      ],
      answer: "B",
      title: "Question 66",
    },
    {
      content:
        "Universal Container (UC) is in a legal dispute regarding several orders. UC has found out these records VP of Sales has asked to ensure this cannot happen in the future. What approach would meet this requirement?",
      options: [
        "A. Remove the Delete button from the Order Page Layout.",
        "B. Implement a Sharing Rule that changes access for order to Read.",
        "C. Change the Record Type/Page Layout assignment for orders to be Read Only.",
        "D. Remove Order delete Permission from Profiles and Permission Sets",
      ],
      answer: "C,D",
      title: "Question 67",
    },
    {
      content:
        "Universal Containers has a private sharing model on Accounts. Apex Managed Sharing is required to share certain account records with all users who are assigned to a specific Role in the Role Hierarchy. What should be the recommended way for the Architect to implement this?",
      options: [
        "A. Create an AccountShare record associated to each user who is assigned to the Role.",
        "B. Create an AccountShare record associated to the required Role.",
        "C. Create an AccountShare record associated to a public group containing the Role.",
        "D. Create an AccountShare record associated to a public group containing the Users in the Role.",
      ],
      answer: "D",
      title: "Question 68",
    },
    {
      content:
        "Universal Containers (UC) is implementing Sales Cloud. During the last quarter of the financial of the financial year, .. They requested a solution in Salesforce to allow them to specify an assistance agent on the opportunity.. the assistance field. The system should automatically remove access from the previous assistant and .. What is the optimum solution to meet the requirements?",
      options: [
        "A. Use opportunity team and create an assistant field, use apex to share opportunities with the assistant",
        "B. Use apex sharing to share and unicast opportunities with the assistant agent.",
        "C. Use share group to share opportunities with the assistant agent.",
        "D. Use sharing rule to share opportunities with the assistant agent.",
      ],
      answer: "A",
      title: "Question 69",
    },
    {
      content:
        "Universal Containers has a customer that meets criteria for two Enterprise territory Management territories (Portugal and Southern Europe). What is necessary to assign opportunities to a territory for this account?",
      options: [
        "A. The territory with the highest Territory Type Priority is automatically assigned to the Opportunity",
        "B. Create an Apex class that implement. Filter-Based Opportunity Territory Assignment",
        "C. Create a criteria-based sharing rule on the Opportunity to assign It to a territory.",
        "D. Create a Process Builder Process that updates the Territory field on the Opportunity",
      ],
      answer: "A",
      title: "Question 70",
    },
    {
      content:
        "Sales managers want their team members to help each other close Opportunities. The Opportunity and Account organization-wide defaults are private. To grant Opportunity access to sales reps on the same team, owner ship-based sharing rules were created for each team. What is the side effect of this approach?",
      options: [
        "A. Sales Reps on the same team will have Edit access to the Accounts for Opportunities owned by then team members.",
        "B. All sales reps will have Read access to all Accounts.",
        "C. Sales reps on the same team will have Read access to the Accounts for Opportunities owned by their team members.",
        "D. All sales reps will have Read access to Accounts for all Opportunities.",
      ],
      answer: "C",
      title: "Question 71",
    },
    {
      content:
        "Universal Containers has enabled External Default Sharing and wants to allow for external users to have the External Sharing Default set to Public Read-Only for a custom object. Which two options are valid Internal Default sharing settings for the custom object?",
      options: [
        "A. Private",
        "B. Controlled by Parent",
        "C. Public Read/Write",
        "D. Public Read Only",
      ],
      answer: "C,D",
      title: "Question 72",
    },
    {
      content:
        "Universal Containers would like to control access to records and objects according to the following business requirements:* Sales users can view all Account records but only edit their own records. * Sales managers view all Account records but only edit records of the team. * Service users can view all Account records that are not marked with a RecordType of Prospect. Which organization-wide default configuration should a Salesforce architect recommend to fulfill these requirements?",
      options: [
        "A. Public Read Write",
        "B. Private",
        "C. Public tad Only",
        "D. Public Read/Transfer",
      ],
      answer: "C",
      title: "Question 73",
    },
    {
      content:
        "Universal Containers has a requirement to share Accounts automatically to the users at a field office. They currently have the following setup in their environment: * Accounts are set to Private in the Org-Wide Default. * The field office is specified by a lookup in the Account object. * There are 400 field offices. * The users in each field office are managed using public groups. Based upon a lookup relationship field on the Account, how should the Architect meet this requirement?",
      options: [
        "A. Use Manual Sharing to share the Account with the appropriate field office.",
        "B. Use Criteria-Based Sharing to share the Account with the appropriate field office.",
        "C. Use Account Teams to share the Account with the appropriate field office.",
        "D. Use Programmatic Sharing to share the Account with the appropriate field office.",
      ],
      answer: "D",
      title: "Question 74",
    },
    {
      content:
        "Universal Containers (UC) has created a custom Invoice object. Standard sales users at UC can see the records in search layout, but when they click to view the detail, only record name, created date, and last modified date are shown. When the system admin accesses it, he or she sees the full record detail with many more data fields. What is the likely cause of this issue?",
      options: [
        "A. A role-based sharing is missing and should be added for the sales user's role to grant access to the fields.",
        "B. Sales users profile does not have access to the remaining fields.",
        "C. Page layout assigned to sales user profile has only read-only access to the fields.",
        "D. Org-wide sharing settings have been set to Private and need to be adjusted to Public Read/Write.",
      ],
      answer: "B",
      title: "Question 75",
    },
  ],
});
