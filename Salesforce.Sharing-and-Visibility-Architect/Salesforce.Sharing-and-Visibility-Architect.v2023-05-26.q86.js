window.testContent = window.testContent || [];
var testId = "Salesforce.Sharing-and-Visibility-Designer";
var testName = "Salesforce.Sharing-and-Visibility-Designer";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "Salesforce.Sharing-and-Visibility-Architect.v2023-05-26.q86",
  content: [
    {
      content:
        "What is the best practice for testing sharing and visibility changes?",
      options: [
        "A. Use the Login As feature for a sample user in each role and profile.",
        "B. Use the Sharing button to test Profile and Permission set changes.",
        "C. Use Administrative and User reports to view the Active Users.",
        "D. Use Field Audit Trail to audit the field meta-data and visibility.",
      ],
      answer: "A",
      title: "Question 1",
    },
    {
      content:
        "Universal Containers (UC) has 200 distributors that use Partner Community Licenses. Partners cannot see each other's data, but UC is also trying to give more visibility to certain individuals at a distributor. Which scalable solution would an architect recommend that will give users in the partner manager role access to all Case and Container records owned byother partner managers and partner users (but not the partner executive) at the same distributor?",
      options: [
        "A. Create a permission set granting the View All permission to Case and Container records.",
        "B. Create ownership-based sharing rules for your distributors.",
        "C. Create Sharing sets.",
        "D. Give Super User permission to the partner manager users.",
      ],
      answer: "D",
      title: "Question 2",
    },
    {
      content:
        'UniversalContainers(UC)servicerepsareassignedtoaprofilewhichhas"ViewAll"inCase object(Private OWD).To make sure service repshaveaccess toallrelevant information to attendtocustomerrequests, whichtwodetailsshouldasalesforceArchitectsconsider? Choose 2answers:',
      options: [
        "A. Service reps willnotbeable toaccessallthe UCAccountsrecordsbecause Account OWD is private.",
        "B. Servicerepswillbeable toaccessall the UC Accountrecordsdue to Implicit Sharing.",
        "C. Service repswill be able to access all UC contactrecords if theyare controlled by parent.",
        "D. Service reps will notbe able to access all UC contactrecords if theyare controlled by parent.",
      ],
      answer: "A,D",
      title: "Question 3",
    },
    {
      content:
        "Universal Containers has a strict security model enforced through object, field, and row-based security mechanisms. The Architect would like to ensure the security model is being thoroughly tested using Apex automated tests. Which three considerations should be made when using the runAs() method to design Apex until tests?",
      options: [
        "A. runAs() can be used inside of test classes to validate field-level permissions",
        "B. runAs() does not enforce user permissions or field-level permissions in test classes",
        "C. runAs() can be used outside of test classes to bypass record-level security",
        "D. runAs() can be used inside of test classes to validate record-level security",
        "E. runAs () counts towards total DML statements issued within transaction",
      ],
      answer: "B,D,E",
      title: "Question 4",
    },
    {
      content:
        "Which advanced tool should Salesforce enable for large-scale Role Hierarchy realignments?",
      options: [
        "A. Skinny Table Indexing",
        "B. Partitioning by Divisions",
        "C. Granular Locking",
      ],
      answer: "C",
      title: "Question 5",
    },
    {
      content:
        "Universal Containers (UC) has a team that analyzes customer orders looking for fraud. This team needs access to Invoice records (Custom object, Private OWD). UC \\as complex rules to control users' access. The Salesforce Architect recommended using Apex managed sharing to meet these requirements. Which two recommendations should a Salesforce Developer consider when implementing the changes7 Choose 2 answers",
      options: [
        'A. Use "With Sharing" keyword to make sure record visibility will always be considered.',
        'B. Use "Without Sharing" keyword to make sure record visibility will be considered.',
        "C. Use runAs system method to test different users accessing these records.",
        'D. Use "With Sharing" keyword to enforce field-level security.',
      ],
      answer: "A,C",
      title: "Question 6",
    },
    {
      content:
        "Universal Containers uses 75,000 distributors that have close to 1 million total users. Distributors need opportunities assigned to their distributor for delivery. What license recommendation will meet distributor needs?",
      options: [
        "A. Custom Community",
        "B. Partner Community",
        "C. Customer Community Plus",
        "D. Sales Cloud",
      ],
      answer: "B",
      title: "Question 7",
    },
    {
      content:
        "Universal Containers (UC) has 200 distributors that use Partner Community Licenses. Partners cannot see each other's data, but UC is also trying to give more visibility to certain individuals at a distributor. Which scalable solution would an architect recommend that will give users in the partner manager role access to all Case and Container records owned byother partner managers and partner users (but not the partner executive) at the same distributor?",
      options: [
        "A. Create ownership-based sharing rules for your distributors.",
        "B. Give Super User permission to the partner manager users.",
        "C. Create a permission set granting the View All permission to Case and Container records.",
        "D. Create Sharing sets.",
      ],
      answer: "A",
      title: "Question 8",
    },
    {
      content:
        "Universal Containers has just deployed a change to its role hierarchy. A manager is reporting that their staff can now see Accounts that they do not own and should not have access to. How should the Architect troubleshoot?",
      options: [
        "A. While logged in as the System Administrator, use the Field Accessibility Viewer to view a matrix of who has access to Accounts.",
        "B. While logged in as the one of the Staff members, navigate to a sample account and use the Sharing button to determine who has access.",
        "C. While logged in as the System Administrator, use the Field Accessibility Viewer to view a matrix of who has access to Accounts. ",
        "D. While logged in as the one of the Staff members, navigate to their user record and inspect their profile and role membership.",
      ],
      answer: "B",
      title: "Question 9",
    },
    {
      content:
        "The architect at Universal Containers would like to prevent users from editing encrypted fields. Assuming no customizations are implemented, which two options should the Architect choose to support the requirement? Choose 2 answers",
      options: [
        "A. Workflow Rules",
        "B. Page Layout settings",
        "C. Validation Rules",
        "D. Apex Triggers",
      ],
      answer: "B,C",
      title: "Question 10",
    },
    {
      content:
        "Universal Containers (UC) is implementing Sales Cloud. During the last quarter of the financial of the financial year, .. They requested a solution in Salesforce to allow them to specify an assistance agent on the opportunity.. the assistance field. The system should automatically remove access from the previous assistant and .. What is the optimum solution to meet the requirements?",
      options: [
        "A. Use apex sharing to share and unicast opportunities with the assistant agent.",
        "B. Use share group to share opportunities with the assistant agent.",
        "C. Use opportunity team and create an assistant field, use apex to share opportunities with the assistant",
        "D. Use sharing rule to share opportunities with the assistant agent.",
      ],
      answer: "C",
      title: "Question 11",
    },
    {
      content:
        "In order to comply with regulatory requirements, Universal Health must encrypt all Personally Identifiable Information (PII), both while it is being transmitted over the network and while it is at rest. Universal Health has completed a data audit and has determined that 12 fields on the contact record can contain PII, including the contact name and several other standard fields. Universal Health would like the fields to remain accessible in Salesforce. Which two options does Universal Health have to maintain compliance? Choose 2 answers.",
      options: [
        "A. Enable Salesforce Platform Encryption and select the 12 contact fields to be encrypted.",
        "B. Use an external, third party encryption service to encrypt PII before it enters Salesforce.",
        "C. Implement a custom Apex trigger to automatically encrypt the PII data using the Apex Crypto Class.",
        'D. Update the field type of each of the 12 fields to "Text (Encrypted)" so that they are encrypted at rest.',
      ],
      answer: "A,D",
      title: "Question 12",
    },
    {
      content:
        'Universal Containers is updating its Organization-Wide Sharing Settings for the Account Object from a "Public Read/Write" model to a "Private" model, so that they can hide certain national accounts from sales reps and sales managers. These national accounts should only be accessible by sales directors and above. Universal Container\'s Role Hierarchy matches its organizational hierarchy. Which two options should the Architect consider when designing the solution? Choose 2 answers',
      options: [
        "A. National accounts must be owned by a user who is above the sales managers in the Role Hierarchy.",
        "B. Sales directors will need a sharing rule created so that they can see accounts owned by Sales Users.",
        "C. Apex managed sharing will have to be disabled for the account object to protect the national accounts.",
        "D. If a sales rep is added to the Opportunity Team for a national account, they will gain access to account data.",
      ],
      answer: "A,D",
      title: "Question 13",
    },
    {
      content:
        "What should a Salesforce architect recommend to make sure that users that gained access to a custom of sharing do not lose access to it when its owner is changed?",
      options: [
        "A. Use ''runAS'' system method in Apex classes to enforce record visibility.",
        "B. Use ''With Sharing'' keyword to make sure record visibility will be considered",
        "C. Create a specific Sharing Reason for the custom object.",
        "D. Create a new record in_Share object with RowCause ''Manual''",
      ],
      answer: "C",
      title: "Question 14",
    },
    {
      content:
        "The Architect at Universal Containers has created a List View to show all open Opportunities that were created in the last month, and would like to make this list view visible to certain groups of users. Which two options are available to the Architect for sharing the List View?",
      options: [
        "A. Public Groups",
        "B. Manual Sharing",
        "C. Roles and Subordinates",
        "D. Profiles",
      ],
      answer: "A,C",
      title: "Question 15",
    },
    {
      content:
        "Universal Containers has a custom Job object with a private sharing model. Based on the size and location of the Job, different teams must have access to edit the specific Job record. To support this requirement, Apex Managed Sharing has been implemented to share records with the required users. Since the teams change frequently, managed sharing recalculations need to be manually run frequently. What can the Architect do to optimize this process?",
      options: [
        "A. Change the sharing model on the Job object to Public Read/Write.",
        "B. Create a scheduled job to automatically run the sharing recalculations on a nightly basis.",
        "C. Create public groups for each team, and share the jobs with the groups instead of users.",
        "D. Create a custom Visualforce page to edit the jobs and specify Without Sharing on the controller.",
      ],
      answer: "C",
      title: "Question 16",
    },
    {
      content:
        "Universal Containers has enabled External Default Sharing and wants to allow for external users to have the External Sharing Default set to Public Read-Only for a custom object. Which two options are valid Internal Default sharing settings for the custom object?",
      options: [
        "A. Public Read/Write",
        "B. Public Read Only",
        "C. Private",
        "D. Controlled by Parent",
      ],
      answer: "A,B",
      title: "Question 17",
    },
    {
      content:
        "A custom ServiceFeedback object is used to collect partner feedback. ServiceFeedback records should be available to all internal employees. The OWD is set to Private for external users so partners cannot see feedback from other partner users. How can the Architect give access to all internal employees?",
      options: [
        "A. Set OWD, for Internal Users to Public Read Only.",
        "B. Create a trigger on ServiceFeedback to change ownership to an internal employee.",
        "C. Create an Owner based sharing rule for all ServiceFeedback records owned by Partners.",
        "D. Ensure all the internal users are above the partners in the role hierarchy.",
      ],
      answer: "A",
      title: "Question 18",
    },
    {
      content:
        "Dreamforce presenters need to be able to edit their presention details (summary, presenter biographies, etc) on a private custom object in Salesforce (Presentation). All presenters for a presentation are captured on a Presenters juction object between Presenter and User. How can this be accomplished?",
      options: [
        "A. Give Edit rights to the Presentation record via a Permission set that is given to the Presenters for a record.",
        "B. Trigger on Presenter junction object that adds the user to the Sales Team for the Presentation record.",
        "C. Trigger on Presenter junction object that uses Apex Managed sharing to add or remove access to the related Presentation record.",
      ],
      answer: "C",
      title: "Question 19",
    },
    {
      content:
        'Universal Containers would like to create a custom team solution that can be used on a custom Loan object. The following requirements must be met: The Loan custom object should be set to Private in the Org-Wide Defaults. Any user added to the Custom Team object should have Read Only access to the corresponding Loan record. If the Custom Team record is marked as "Primary" then the corresponding user should have Read/Edit access to the corresponding Loan record. Which two methods will allow the Architect to meet the requirements? Choose 2 answers.',
      options: [
        "A. Create an owner-based sharing rule on the Custom Team object that will share the Loan record to the owner of the Custom Team record.",
        "B. Create Apex Sharing Reasons on the Loan object to identify the reason the Loan record was share.",
        "C. Create a custom trigger on the Custom Team object that inserts or updates records in the Loan_share object.",
        "D. Create a criteria-based sharing rule on the Loan object that will share the Loan record with the appropriate user in the Custom Team object.",
      ],
      answer: "A,D",
      title: "Question 20",
    },
    {
      content:
        "How should the Architect ensure that OBJECT-LEVEL SECURITY is enforce within a custom Visualforce application that was a standard Apex controller on the Lead object?",
      options: [
        "A. Use the Schema.DescribeSObjectResultisAccessible() method in the Apex controller.",
        "B. Use the {!$ObjectType.lead.accessible} expression within the Visualforce page.",
        "C. Use the runAs() method to enforce user permissions in the Apex controller.",
        'D. Use the "With Sharing" keyword when defining the Visualforce page.',
      ],
      answer: "B",
      title: "Question 21",
    },
    {
      content:
        "Universal Containers has set Opportunity Sharing to Private with Opportunity Teams enabled. Which three options can change the Owner of the Opportunity? Choose 3 answers.",
      options: [
        "A. The current Opportunity Owner can transfer the current ownership.",
        "B. Any Opportunity Team Member on the current Opportunity.",
        'C. The System Administrator or a user with the "Transfer Records" permission.',
        "D. Someone above the Opportunity Owner in the Role Hierarchy.",
        "E. The user specified as the Manager on the Owner's User Profile.",
      ],
      answer: "A,C,D",
      title: "Question 22",
    },
    {
      content:
        "Universal Containers is implementing a community of High-Volume Community users. Community users should be able to see records associated to their Account or Contact record. The Architect is planning to use a Sharing Set to provide access to the records. When setting up the Sharing Set, certain objects are not available in the list of Available Objects. Which two reasons explain why an object is excluded from the list of Available Objects in a Sharing Set?",
      options: [
        "A. The object's Organization-Wide sharing setting is set to Private.",
        "B. The object is a custom object, and therefore not available for a sharing set.",
        "C. The object's Organization-Wide sharing setting is set to Public Read/Write.",
        "D. The custom object does not have a lookup to Accounts or Contacts.",
      ],
      answer: "C,D",
      title: "Question 23",
    },
    {
      content:
        "Universal Containers (UC) has recently changed its internal policy to follow market regulations and create an internal team to manage the collection process. Only this team should have access to Invoke records. currently, invoke is a child in a Master-Detail relationship to Account. Although related lists have been removed from the page layouts, some profiles stills have access to the invoice object. Which approach should an architect recommend to fix this problem?",
      options: [
        "A. Create a Permission Set with No Access to the Invoice object and assign it to unauthorized users.",
        "B. Change the Invoke organization-wide default from Controlled by Parent to Private and remove invoke access from the unauthorized",
        "C. Replace Account and Invoke Master Detail Relationship by a Lookup and remove Invoice Access from the unauthorized profiles,",
        "D. Create a new Profile with no access to the Invoice object and assign it to all unauthorized users.",
      ],
      answer: "C",
      title: "Question 24",
    },
    {
      content:
        "How would you make sure Visualforce page is security proof? Choose 3 answers",
      options: [
        "A. Manually check for cross site",
        "B. Use web application tool for security",
        "C. Manually check for sql injection",
        "D. Use debug to check hijacked requests",
        "E. Submit to force security scanner",
      ],
      answer: "B,D,E",
      title: "Question 25",
    },
    {
      content:
        "Universal Containers uses 75,000 distributors that have close to 1 million total users. Distributors need opportunities assigned to the distributor for delivery. What license recommendation will meet distributor needs?",
      options: [
        "A. Sales Cloud",
        "B. Partner Community",
        "C. Customer Community",
        "D. Customer Community Plus",
      ],
      answer: "B",
      title: "Question 26",
    },
    {
      content:
        "To grant Universal Containers sales managers access to shipment records properly it was necessarily to the IT Team is worried about improper access to records. Which two features and best practices should a Salesforce architect recommended to mitigate the risk?",
      options: [
        "A. User isAccessable keyword Apex classes to assure recor visibility will be followed.",
        "B. USe isShareable keyword in Apex classes to assure record visibility will be followed",
        "C. Use With Sharing keyword in Apex classes to assure record visibility will be followed",
        "D. Use runAs system method in test classes to test using different users and profiles.",
      ],
      answer: "A,C",
      title: "Question 27",
    },
    {
      content:
        "Universal Containers has Controlled by Parent sharing settings on the Contact object and Public Read Only sharing settings on Account, Opportunity, and Case objects. Which two options can the user see while adding Account team members to the Account?",
      options: [
        "A. Case Access",
        "B. Contact Access",
        "C. Activity Access",
        "D. Opportunity Access",
      ],
      answer: "A,D",
      title: "Question 28",
    },
    {
      content:
        "Universal Containers has expanded to sell virtual containers for data storage. Virtual container work orders are provisioned immediately by the system and therefore cannot be changed by a sales representative. What is an optimal approach to implement these requirements?",
      options: [
        "A. Change the record type/page layout assignment for Work Order to be Read Only.",
        "B. Remove the edit button from the work order page layout.",
        "C. Implement a sharing rule that changes access for all Work Order to Read.",
        "D. Remove the Work Order Edit permission from the sales representative Profile.",
      ],
      answer: "D",
      title: "Question 29",
    },
    {
      content:
        "When you make changes to roles and groups Salesforce locks the entire group membership table, which makes it impossible to process group changes in multiple threads to increase throughput on updates.",
      options: ["A. Granular Locking"],
      answer: "A",
      title: "Question 30",
    },
    {
      content:
        "Universal Containers (UC) tuned off the Customer User Visibility feature inits Customer Community. What community functionality is expected by having the Customer User Visibility tuned off?",
      options: [
        "A. Updating their user profile.",
        "B. Searching for other external users.",
        "C. Creating new Customer community users.",
        "D. Search for internal users.",
      ],
      answer: "B",
      title: "Question 31",
    },
    {
      content:
        "A custom invoice object has been created with a master-detail relationship to account. The Accountreceivable (AR)teamneedsaccesstoInvoicesARusersdonotownnorhaveaccess to Accountrecords.AccountOWD is set to Private. The AR team isunable to find Invoices in Listviews,Reports,norinGlobalSearch. The Architecthasbeenasked tohelp troubleshoot. Whatcouldbethe issue preventing ARteam members from seeinginvoices?",
      options: [
        "A. Asharingruleismissingto shareAccountstotheARteam.",
        "B. A sharing rule is missing to share Invoices to the AR team.",
        "C. TheARteamprofileneedstobeassignedanInvoicePagelayout.",
        "D. The Accounts receivable profile doesnothave read Permission to the Invoice Object.",
      ],
      answer: "A",
      title: "Question 32",
    },
    {
      content:
        'At Universal Containers, users should only see Accounts they or their subordinates own. All Accounts with the custom field "Kay Customer" should be visible to all Senior Account Managers. There is a custom field on the Account record that contains sensitive information and should be hidden from all users, except 3 designated users who require view and edit access. These three users come from different user groups, and will change occasionally. Which three platform security features are required to support these requirements with the minimum amount of effort? Choose 3 answers',
      options: [
        "A. Role Hierarchy",
        "B. Criteria-Based Sharing Rules",
        "C. Permission Sets",
        "D. Apex Managed Sharing",
        "E. Owner-Based Sharing Rules",
      ],
      answer: "A,B,C",
      title: "Question 33",
    },
    {
      content:
        "The Corporate Identity and Access Team needs to audit User setup in the Salesforce .. What two permissions should be granted to this team so they can perform their audit? Choose 2 answers",
      options: [
        "A. View Setup and Configuration",
        "B. View All Data",
        "C. View All Users",
        "D. View permission on the User object",
      ],
      answer: "A,C",
      title: "Question 34",
    },
    {
      content:
        "A junior Account manager owns an account and creates a new opportunity to manage complex deal. She needs the help of the product specialist and solution engineer. Given the size of this deal, she knows the account is likely to be reassigned to a senior account manager in the near future. What is the optimal way for the junior account manager to share the opportunity, given the private sharing model?",
      options: [
        "A. Manual Share on the Opportunity.",
        "B. Create an Owner-based sharing rule.",
        "C. Opportunity Team.",
        "D. Manual share on the Account.",
      ],
      answer: "C",
      title: "Question 35",
    },
    {
      content:
        "Universal Containers has two custom objects: Job and Job Interview. The Job Interview object has a lookup relationship to Job. Both objects are set to Private in sharing settings. The HR team will own all Job and Job Interview records. They have asked their Salesforce Architect to automatically share the Job Interview when the Interviewer (lookup to user record) has been populated. The interviewer can be from any department. What method should the Architect use to achieve this requirement?",
      options: [
        "A. Build a standard sharing rule between Job Interview and the Interviewer",
        "B. Build a criteria-based sharing rule between the Job Interview and the Interviewer",
        "C. Build a workflow email notification to notify the interviewer of the record assignment",
        "D. Build apex Managed Sharing code to share Job Interview with the Interviewer user",
      ],
      answer: "D",
      title: "Question 36",
    },
    {
      content:
        "Which users have access to Opportunity records owned by an external user, assuming no other changes to the sharing model have been implemented?",
      options: [
        "A. The record owner and any user above the external user in the role hierarchy.",
        "B. The record owner only.",
        "C. The record owner and all internal users.",
        "D. The record owner and any user below the external user in the role hierarchy.",
      ],
      answer: "A",
      title: "Question 37",
    },
    {
      content:
        "Universal Container is creating a custom VF page to allow user to edit contact records. The developer has used an apex:outputField for the Phone field on the contact obj. What is the expected behavior if a user without FLS accesses the VF page?",
      options: [
        "A. The field is automatically removed from the page",
        "B. The output field is visible to user",
        "C. The user encounters an error while saving the record",
        "D. The user is able to enter a value into the phone field",
      ],
      answer: "A",
      title: "Question 38",
    },
    {
      content:
        "...From customers on company Issued desktops and uses case object to track customer issues and grievances. The company would like to capture images of customer site captured by field consultants while they are editing the case record during customer site visit. The Director of IT wants to minimize customization and promote reuseability of code artifacts wherever possible, What recommendations should an architect give to the company to implement the image capture requirement, while ensuring customer that the service rep can continue to use same lightning pages they were trained to use?",
      options: [
        "A. Use Lightning Component as an override for \"Edit'' action on mobile view allowing image capture feature. No Change required for desktop users.",
        'B. So Use Lightning Component as an override for "Edit" action on lightning experience allowing image capture feature. Detect the form factor of the device and redirect the user to the default not overridden view.',
        'C. Create 4 seperate button "Edit in Mobile", which opens & custom lightning component that will allow field consultants to add an image. No change required for desktop users.',
      ],
      answer: "B",
      title: "Question 39",
    },
    {
      content:
        "Universal Containers (UC) has 200 distributors that use Partner Community licenses. Partners cannot see each other's data, but UC is also trying to give more visibility to data for certain individuals at a distributor. HOW can an Architect give users in the partner user role access to all Case and Container records owned by any user, regardless of role, at the same distributor?",
      options: [
        "A. Create an ownership-based sharing rule.",
        'B. Create a Permission Set granting "View All" permission to Case and Container records.',
        "C. Give super user permission to the individual partner users.",
        "D. Create sharing sets.",
      ],
      answer: "A",
      title: "Question 40",
    },
    {
      content:
        "Universal Containers has the following requirements: * The Commercial Account and Consumer Account support departments should not collaborate. * The Commercial and Consumer sales users roll up to the same VP of Sales, but there should be no collaboration between sales departments. * The Commercial sales department should share its customers with the Commercial support department. * The Consumer sales department shares its customers with the Consumer support department. * The Commercial and Consumer support departments roll up to the same Support Director. * The sales departments will remain the Account Owner for the Accounts that they sell to. What is the recommended Org-Wide Sharing Default for Accounts, and how would the Architect enable proper Commercial and Consumer Sales to Support Account Sharing for this scenario?",
      options: [
        "A. Private Account Sharing with Sharing Rules from Commercial support Role(s) to Commercial Support Role(s) and Consumer Sales Role(s) to Consumer Support Role(s).",
        "B. Private Account Sharing with Sharing Rules from Commercial Sales Role(s) to Consumer Support Role(s) and Consumer Sales Role(s) to Commercial Support Role(s).",
        "C. Private Account Sharing with Sharing Rules from Commercial Sales Group(s) to Commercial Support Groups(s) and Consumer Sales Group(s) to Consumer Support Group(s).",
        "D. Read-Only Account Sharing with Sharing Rules from Commercial Sales Role(s) to Consumer Support Group(s) and Consumer Sales Role(s) to Commercial Support Groups(s).",
      ],
      answer: "C",
      title: "Question 41",
    },
    {
      content:
        "If you want to create some logic that will share certain records in APEX code, you just have to create special records that will open access to the desired records. The aim is to create records of certain type, for example , all share objects for custom objects are named as",
      options: ["A. MyCustomObject__Share"],
      answer: "A",
      title: "Question 42",
    },
    {
      content:
        "Universal Containers has a customer that meets criteria for two Enterprise territory Management territories (Portugal and Southern Europe). What is necessary to assign opportunities to a territory for this account?",
      options: [
        "A. The territory with the highest Territory Type Priority is automatically assigned to the Opportunity",
        "B. Create a Process Builder Process that updates the Territory field on the Opportunity",
        "C. Create a criteria-based sharing rule on the Opportunity to assign It to a territory.",
        "D. Create an Apex class that implement. Filter-Based Opportunity Territory Assignment",
      ],
      answer: "A",
      title: "Question 43",
    },
    {
      content:
        "Universal Container has a set of Account management users that should only see accounts once the account becomes a customer. The type field on the Account identifies whether the account is a prospect, customer, partner, or other. Which two methods could an Architect use to enable this sharing requirement, assuming a private sharing model for accounts? Choose two:",
      options: [
        "A. Create an account sharing rule that shares all accounts owned by sales to be shared with account management roles and subordinates",
        "B. Create a public list view, where accounts of type customer are included and share the list view with account management public group",
        "C. Institute a business process that calls for the account manager to be added to the account team once the account becomes a customer",
        "D. Create a criteria-based sharing rule that shares the account to the account management group when the type is customer",
      ],
      answer: "C,D",
      title: "Question 44",
    },
    {
      content:
        "Universal Containers' organization wide-defaults model is private for the Account object. A sales repeats to opportunity records. Which level of access will the sales rep have to the related account record?",
      options: [
        "A. Read/Create access",
        "B. No access",
        "C. Read/Create/Edit access",
        "D. Read-only access",
      ],
      answer: "C",
      title: "Question 45",
    },
    {
      content:
        'Which three areas should the Architect review in order to increase performance of "Record Access" and "Sharing" calculations? Choose 3 answers.',
      options: [
        "A. Custom Object data, to ensure that no Account has more than 10,000 Custom Objects that look up to it.",
        "B. Apex Managed Sharing triggers, to ensure that no trigger is querying more that 10,000 Object records.",
        "C. Record ownership, to ensure that no user owns more than 10,000 Object records in the system.",
        "D. Opportunity data, to ensure that no Account has more than 10,000 Opportunity records that are related to it.",
      ],
      answer: "A,C,D",
      title: "Question 46",
    },
    {
      content:
        "Universal Containers (UC) has affiliates who sell containers in countries where UC does not have a local office. UC uses a Partner Community to manage the sales cycle in those countries. One of its affiliates has grown substantially and restructured its internal sales team with the following structure; Sales VP -> Director of Sales -> Sales Manager -> Sales Reps. Sales Reps should not see each others' opportunities, and visibility of deals should open up within e Sales Rep's hierarchy. What is the main problem an architect should address in this situation?",
      options: [
        "A. Partner User roles are limited to three levels.",
        "B. The Channel Manager role cannot be shared with Partner Community.",
        "C. Partner Community does not support Role Hierarchy.",
      ],
      answer: "A",
      title: "Question 47",
    },
    {
      content:
        "Universal Containers has selected a small and diverse group of users to review inactive accounts. Given the Private sharing model, a public group was created and made available to this group of users. A sharing rule was created to make inactive Accounts visible to the public group. However some of these users are reporting they don't see any of the Accounts that were shared with the public group. What is the underlying issue for these users?",
      options: [
        'A. The users have a permission set that only allow Accounts in "Active" status.',
        "B. The users are in profiles that have no access to the Account object.",
        "C. The page layout assigned to these users is different than the Account owner.",
        "D. The Accounts are owned by users higher in the role hierarchy.",
      ],
      answer: "B",
      title: "Question 48",
    },
    {
      content:
        "Universal Containers has successfully implemented a large Service Cloud rollout for their national call center 3 months ago. One of their largest customer accounts, United Automotive, has over 15,000 open cases. Agents are now having trouble opening new cases for United Automotive. When they try to create a case, the following Error messages appear for them UNABLE_TO_LOCK_ROW They notice that this only occurs for the United Automotive account. If they try to save the case again it will usually work, but the problem seems to be happening more and more often. What option should the Architect recommend?",
      options: [
        "A. Review the Account structure to split the United Automotive account into multiple branch accounts.",
        "B. Review the Customer Service Profile to ensure that they have Read/Write access to the appropriate Case and Account Fields.",
        "C. Review all Account sharing rules to ensure that the Customer Service team has Read/Write access to the United Automotive Account.",
        "D. Review all Case Sharing Rules and consolidate where appropriate to reduce the total number of sharing rules.",
      ],
      answer: "A",
      title: "Question 49",
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
      title: "Question 50",
    },
    {
      content:
        "Universal Containers has a private sharing model on Accounts. Apex Managed Sharing is required to share certain account records with all users who are assigned to a specific Role in the Role Hierarchy. What should be the recommended way for the Architect to implement this?",
      options: [
        "A. Create an AccountShare record associated to a public group containing the Role.",
        "B. Create an AccountShare record associated to the required Role.",
        "C. Create an AccountShare record associated to a public group containing the Users in the Role.",
        "D. Create an AccountShare record associated to each user who is assigned to the Role.",
      ],
      answer: "C",
      title: "Question 51",
    },
    {
      content:
        "Universal Containers requested to leverage Lightning Web Components (LWC) to improve support reps' user experience. LWC will be used as view layer, and Apex classes will have the business logic. Which attention points should the development team consider when implementing this solution?",
      options: [
        "A. Use isShareable, isEditable, and isCreatable to enforce field permissions.",
        "B. Once that Apex runs on system mode, the development team needs to enforce record visibility",
        "C. Create test classes including runAs test different users accessing the data,",
      ],
      answer: "B",
      title: "Question 52",
    },
    {
      content:
        "The Collections department at Universal Containers uses Salesforce to track its efforts. All Invoices and Invoice Line Items are stored in Salesforce. Invoice Line Item object details, such as Quantity and Extended Amount, should be summarized at the Invoice Object level, and all users who can see a given invoice should always see all invoice line items. Without leveraging Apex code, how should an Architect create the relationship between the Invoice object and the Invoice Line Item Object?",
      options: [
        "A. The Invoice Line Item Object should have a Master-Detail to the Invoice Object",
        "B. The Invoice Object should have an inner joint to the Invoice Line Item Object",
        "C. The Invoice Line Item Object should have a Lookup to the Invoice Object",
        "D. The Invoice object should have a Master-Detail to the Invoice Line Item Object",
      ],
      answer: "A",
      title: "Question 53",
    },
    {
      content:
        "Universal Containers (UC) operates worldwide with offices in more than 100 regions in 10 different countries and has established a very complex role hierarchy to control data visibility. In the new fiscal year UC is planning to reorganize the roles and reassign accounts owners. Which three features could an architect recommend to avoid problems on this operation? Choose 3 answers",
      options: [
        "A. Deferred Sharing Recalculation",
        "B. Skinny table",
        "C. Granular Locking",
        "D. Partition data using Divisions",
        "E. Parallel Sharing Rule recalculation",
      ],
      answer: "A,C,E",
      title: "Question 54",
    },
    {
      content:
        "Universal Containers (UC) has Affiliates who sell containers in countries where UC does not have a local office. UC has leveraged the Partner Community to manage the sales cycle. One of their affiliates has exponentially grown in the last years and restructured its internal sales team with the following structure: Sales VP ...> Direct of sales ..> Sales Manager ..> Sales Reps What is the main problem a Salesforce Architect will face to provide a solution?",
      options: [
        "A. Super User does not work in Partner Community",
        "B. The Channel manager Role can not be shared with Partner Community.",
        "C. Partner Community does not support Role Hierarchy.",
        "D. Partner User Roles are limited to three levels.",
      ],
      answer: "D",
      title: "Question 55",
    },
    {
      content: "If OWD is Public Read Only, what are sharing access options",
      options: ["A. Read, - Read/Write"],
      answer: "A",
      title: "Question 56",
    },
    {
      content:
        'Universal Containers has the following Sharing Settings for their Org: Account = Private Contact = Controlled by Parent Opportunity = Private Case = Private They have enabled "Default Account Teams" and have trained users to set up their Default Team. Which three access levels can be set on the Account Team Member? Choose 3 answers',
      options: [
        "A. Case Access",
        "B. Contract Access",
        "C. Contact Access",
        "D. Account Access",
        "E. Opportunity Access",
      ],
      answer: "A,D,E",
      title: "Question 57",
    },
    {
      content:
        "The sales manager in Japan have asked the sales manager in Australia to assist them with closing their deals. How are these requirements achieved?",
      options: [
        "A. Assign the sales manager View All on the opportunity object.",
        "B. Use opportunity teams to automatically add the sales manager as a team member.",
        "C. Create ownership-based sharing rule.",
        "D. Use sharing set to give the sales manager access to the deals.",
      ],
      answer: "C",
      title: "Question 58",
    },
    {
      content:
        "Universal Containers has recently activated an integration that synchronizes customer information and orders into their CRM of choice: Salesforce.com. One of their largest customers, United Air, has over 12,000 unique contacts. Since the integration was activated, sales reps are having trouble adding contacts to the United Air account. When a sales rep adds a contact, they get the following error message:UNABLE_TO_LOCK_ROW, This issue seems to affect the United Air account and several other large customers. The sales rep can usually save the contact by trying again later in the evening. What should the Architect recommend as a possible solution?",
      options: [
        "A. Add a role-based sharing rule so all sales team members have Read/Write access to contacts.",
        "B. Implement an account hierarchy and redistribute the contacts evenly under the child accounts.",
        "C. Create a permission set for the sales team to grant them Read/Write access to all account fields.",
        "D. Remove sharing rules and replace them with Apex sharing for Unite Air and the other large accounts.",
      ],
      answer: "B",
      title: "Question 59",
    },
    {
      content:
        "The architect has a requirement to create a criteria-based sharing rule based on the customer Social.. up the rule in Contact Sharing, the field is not shown on the list of available field. What might cause this?",
      options: [
        "A. The architect does not have permission to Compliance fields.",
        "B. The field has been configured for encryption.",
        "C. The architect's profile does not have field level Security (FLS) for this field.",
        "D. fields with validation rules are not available for sharing rules.",
      ],
      answer: "B",
      title: "Question 60",
    },
    {
      content:
        'What is the security vulnerability in the following code snippet? <apex:form> <apex:commandButtonrerender="outputIt" value="Update It"/> <apex:inputText value="{!myTextField}"/> <apex:form> <apex:outputPanel id="outputIt"> Value of my Textfield is <apex:outputText Value="{!myTextField}" escape="false"/> <apex:outputPanel>',
      options: [
        "A. Access Control",
        "B. Arbitrary Redirects",
        "C. Cross-Site Scripting",
        "D. SOQL Injection",
      ],
      answer: "C",
      title: "Question 61",
    },
    {
      content:
        "User A at Universal Containers is in the default account team for User B. User B owns the ACME account and changed User A's team member access to the account. What is the impact of this change?",
      options: [
        "A. Changes affect all child ACME Accounts.",
        "B. Changes affect the default Account team.",
        "C. Changes affect the default Opportunity team.",
        "D. Changes affect only the ACME Account",
      ],
      answer: "D",
      title: "Question 62",
    },
    {
      content:
        "Universal Containers has a global 24x7 Salesforce.com implementation that supports Sales, Services, Order Management, and various other parts of their business. They have a nested territory hierarchy, 10,000 sales users, and 20,000 support agents. Territory changes happen daily. The demand for new applications and changes to the platform is high and they follow an agile development methodology and deliver new releases every two weeks on the platform. What Salesforce.com feature would help the system recover from a maintenance restart on Salesforce.com servers?",
      options: [
        "A. Enable Deferred Sharing Rule recalculation.",
        "B. Enable Granular Locking on the system.",
        "C. Enable Filter -Based Opportunity Territory Assignment.",
        "D. Enable Parallel Sharing Rule recalculation.",
      ],
      answer: "A",
      title: "Question 63",
    },
    {
      content:
        "Universal Containers has developed an AppExchange managed package for their distribution partners, which required a private key to be generated for each partner and used by the code. Universal Containers support representatives must be able to access the private key value to debug connection issues, but it must not be possible for the partner to access the value. How can the Architect best support this requirement?",
      options: [
        "A. Store the value in a static variable in a class included in the managed package.",
        "B. Store the value in an encrypted field on a custom object in the package.",
        "C. Store the value in the text field on a list custom setting in the managed package.",
        "D. Store the value in a text field on a protected custom setting in the package.",
      ],
      answer: "C",
      title: "Question 64",
    },
    {
      content:
        "Which two access grants are stored in the Group Maintenance tables? Choose 2 answers",
      options: [
        "A. Implicit grants",
        "B. Group Membership grants",
        "C. Explicit grants",
        "D. Inherited access grants",
      ],
      answer: "B,D",
      title: "Question 65",
    },
    {
      content:
        "Who can view a PDF that is uploaded to the Files Home private library by 8 user?",
      options: [
        "A. Only the user.",
        "B. The user and users above him/her in the Role Hierarchy.",
        "C. The user and users with View All Data permission.",
      ],
      answer: "A",
      title: "Question 66",
    },
    {
      content:
        "Universal Containers (UC) has implemented Service Cloud. There is a flag field on the case object that marks a case as (Sensitive). UC requested that this flag can be viewed by all users who have access to the case but only be edited by the assigned case assessor. The case assessor is a lookup field on the case object. How can an architect achieve this requirement?",
      options: [
        "A. Custom Lightning Component.",
        "B. Object Permissions.",
        "C. Permission Set.",
        "D. Field-level security",
      ],
      answer: "A",
      title: "Question 67",
    },
    {
      content:
        "Universal Containers uses person accounts to represent retail customers and business accounts to represent commercial customers. The Retail Sales team should not have access to commercial customers but have access to ALL retail customers. With organization-wide default on Account set to Private, how might the architect meet these requirements?",
      options: [
        "A. Create an owner-based sharing rule on AccountContactRelation to grant access to at account contact roles records owned by sales reps.",
        "B. Create a criteria-based sharing rule giving Retail Sales role access to Accounts of type PersonAccount.",
        "C. Give View All access for Accounts to the Retail Sales profile.",
        "D. Update Retail Sales profile to grant access to Person Account record type.",
      ],
      answer: "B",
      title: "Question 68",
    },
    {
      content:
        "Universal Containers (UC) wants to reduce the amount of redundant leads entered into the system. UC also only edited/reassigned by the lead owner. What organization-wide default (OWD) approach should be recommended to help UC implement these requirements?",
      options: [
        "A. Implement a Public Read Only OWD on Lead.",
        "B. Implement a Public Read Only/Transfer OWD on Lead",
        "C. Implement a Public Read/Write OWD on Lead.",
        "D. Implement a private OWD on Lead.",
      ],
      answer: "A",
      title: "Question 69",
    },
    {
      content:
        "A banking company uses & VIP Flag in the Contact Object that they want only Private Banking Reps to see. Which approach is recommended to meet this requirement?",
      options: [
        "A. Define a page layout for Contact Object and add the VIP Flag field for that layout. Remove the VIP Flag field from other layouts.",
        "B. Change the type of VIP Flag field to a picklist, define a new record type for the Contact Object and make the picklist field available for Editing.",
        "C. Set the Field Level Security for the VIP Flag field so that it is visible to Private Banking Rep Profile.",
      ],
      answer: "C",
      title: "Question 70",
    },
    {
      content:
        "Universal containers (UC) has a partner community for its 200 distributors. UC customer accounts are .. organization-wide default setting for the custom Delivery object is private. How can an architect advise UC to grant all users at a distributor access to delivery records for all customer distributor?",
      options: [
        "A. Create a Sharing set for the Distributor profile to grant access to the Delivery object.",
        "B. Give ownership of the delivery record to a distributor user.",
        "C. Create a criteria-based sharing rule that shares delivery records matching the Distributor to user distributor.",
        "D. Create a criteria- based sharing rule that shares delivery records matching the Distributor to users of a Public Group created for the distributor.",
      ],
      answer: "A",
      title: "Question 71",
    },
    {
      content:
        "The sales manager in Japan have asked the sales manager in Australia to assist them with closing their deals. How are these requirements achieved?",
      options: [
        "A. Use sharing set to give the sales manager access to the deals.",
        "B. Create ownership-based sharing rule.",
        "C. Assign the sales manager View All on the opportunity object.",
        "D. Use opportunity teams to automatically add the sales manager as a team member.",
      ],
      answer: "D",
      title: "Question 72",
    },
    {
      content:
        "Universal Containers has a Performance Feedback custom object (Private organization-wide default) used by customers to report any Issues with delivery drivers. Feedback should not be visible to the driver, but any feedback records should be accessible to people above them in the Role Hierarchy, even when the driver changes managers. Assuming managers have Read access to the Feedback object, which three steps are necessary to solve these requirements?",
      options: [
        "A. Remove Read permission on the Driver profile, have feedback ownership transferred to the driver when feedback is submitted, and use the Role Hierarchy to give access to 4 driver's manager.",
        "B. Remove Read permission on the Driver profile, have feedback ownership transferred to the driver when feedback is submitted, and create an ownership-based sharing rule,",
        "C. Remove Read permission on the Driver profile, have feedback ownership transferred to the driver's manager when feedback Is submitted, and use the Role Hierarchy to give access to a driver's manager.",
      ],
      answer: "A",
      title: "Question 73",
    },
    {
      content:
        "Universal container (UC) use External Object to retrieve Invoice data from a Legacy ERP. A finance team requested to have access to the Invoice records in the account page. In addition to objects access in the finance users profile, what other feature should a Sales Architect recommend?",
      options: [
        "A. Create an owner-based sharing rule to grant access to the records.",
        "B. Create a criteria-based sharing rule to grant access to the records.",
        "C. Use APEX managed sharing to grant access to the records.",
        "D. Include the Invoice Related List On Account Page layout.",
      ],
      answer: "D",
      title: "Question 74",
    },
    {
      content:
        "Which two options can help mitigate the risks of import failures associated with large-volume bulk data loads? Choose 2 answers.",
      options: [
        "A. Increase batch size.",
        "B. Group records by ParentID within a batch.",
        "C. Minimize user group hierarchy.",
        "D. Defer Sharing Calculation.",
      ],
      answer: "B,D",
      title: "Question 75",
    },
    {
      content:
        "Universal Health is planning to store patient notes in Salesforce. Patient notes consist of long text notes taken by a use to document phone calls with a patient. A date audit has identified that these notes can contain Personally Identifiable Information (PII) and Personal Health Information (PHI). The regulatory requirements state that this data must be encrypted at rest as well as in transit. What should the Architect do in order to make sure Universal Health stays compliant?",
      options: [
        "A. No action is required; all Salesforce data is encrypted at rest as part of Salesforce's standard trust measures.",
        "B. Enable Salesforce Shield Platform Data Encryption and mark the patient notes field as encrypted.",
        'C. Create a new Custom Field of type "Text (Encrypted)" and move the patient notes data into the new field.',
        "D. Use an Apex trigger and the Apex Crypto class to encrypt patient notes as soon as they are saved to Salesforce.",
      ],
      answer: "B",
      title: "Question 76",
    },
    {
      content:
        "Universal Containers (UC) has a mostly private organization-wide default (OWD), as it is a core principle of UC to respect client data privacy. UC has implemented complex processes for granting access to Opportunity dat a. A few key members of the Sales Reporting team need to always be able to see, but not change, Opportunity data for all Opportunities. What should an architect recommend as an approach to meet these requirements?",
      options: [
        'A. Create a Permission Set that grants "View All" permission for Opportunity.',
        'B. Give "View All Data" Permission to the Sales Reporting Profile.',
        "C. Make Opportunity OWD read-only.",
        'D. Create a Permission Set that grants "View All Data" Permission.',
      ],
      answer: "A",
      title: "Question 77",
    },
    {
      content:
        "Universal Containers created a custom object called Defect and would like to enable the Sharing button on the Defect page layout to share the records manually to other users in the organization. In which scenario will the Sharing button appear?",
      options: [
        "A. The Sharing model is Public Read/Write/Transfer.",
        "B. The Sharing model is either Private or Public Read only.",
        "C. The Sharing button always appears.",
        "D. The Sharing model is Public Read/Write.",
      ],
      answer: "B",
      title: "Question 78",
    },
    {
      content:
        "Universal Containers has set Partners users who will see records owned by partner users in roles below them in the hierarchy of which roles?",
      options: ["A. Executive, Manager, and User"],
      answer: "A",
      title: "Question 79",
    },
    {
      content:
        "A sales rep at Universal Containers (UC) has manually shared an Opportunity record with internal pre-sales users. After some time, the sales rep moved to another position and all opportunities records that were owned were transferred to a new sales rep. What happened to the internal pre-sales users access to the opportunity?",
      options: [
        "A. They still have access to the record due to inherited sharing.",
        "B. They still have access to the record due to team access.",
        "C. They still have access to the record due to implicit sharing.",
        "D. They will no longer have access to the record.",
      ],
      answer: "D",
      title: "Question 80",
    },
    {
      content:
        "Universal Containers (UC) sales managers are complaining that they cannot access their teams' Shipment records (a custom object). Initially, the admin suggested that this it happening due to misconfigured role hierarchy (Shipment OWD is Private). Alter investigation, they determined the. role hierarchy for these users is correct. What can be the reason why Universal Containers sales managers are not able to see Shipment records?",
      options: [
        "A. The Grant Access Using hierarchies option on Shipment Sharing Settings was incorrectly disabled by the Salesforce admin.",
        "B. Sales managers have only the Read permission on the 5hipment object and should not be able to edit their team records.",
        "C. Ownership-based sharing rule for Shipment was Incorrectly disabled by the Salesforce admin.",
        "D. Role hierarchy Implicit sharing was Incorrectly disabled by the Salesforce adman.",
      ],
      answer: "A",
      title: "Question 81",
    },
    {
      content:
        "Universal Containers has a Private Sharing Model for the Opportunity object. Sales Rep A at Universal Containers created the Opportunity record and then transferred ownership of the Opportunity record to Sales Rep B. Both Sales Rep A and B have the same role in the Role Hierarchy. What access will Sales Rep A have to the Opportunity after the transfer?",
      options: [
        "A. Full Access",
        "B. Read/Write",
        "C. Read Only",
        "D. No Access",
      ],
      answer: "D",
      title: "Question 82",
    },
    {
      content:
        "Universal Containers has a Private Sharing Model and restrictive data access settings in place. The data governance team is planning to deploy a master data management tool that will need write access to all system data, and the Architect has been asked to prepare a Data Governance User Profile that has full access to all data regardless of Sharing and CRUD Settings. What is the optimal way to enable this requirement?",
      options: [
        "A. Create a Sharing Rule for required Objects, on an API Only profile",
        "B. Create an All Data Access app as a default for this Profile.",
        'C. Enable the "Edit Read -Only Fields" permission for this Profile.',
        'D. Ensure the profile has the "Modify All Data permission enabled',
      ],
      answer: "D",
      title: "Question 83",
    },
    {
      content:
        "What advanced tool can Salesforce enable for Large-scale role hierarchy realignments?",
      options: [
        "A. Granular locking",
        "B. Skinny Table Indexing",
        "C. Partitioning by Divisions",
        "D. Set external organization-wide default to public read only",
      ],
      answer: "A",
      title: "Question 84",
    },
    {
      content:
        "The architect at Universal Containers is trying to ensure that security vulnerabilities are not present within the Salesforce organization. What two tests should the architect verify? Choose 2 answers",
      options: [
        "A. Test Cross-Site Scripting on custom pages.",
        "B. Test for SOQL Injection.",
        "C. Test Cross-Site Scripting on Apex queries.",
        "D. Test for invalid user access attempts.",
      ],
      answer: "A,B",
      title: "Question 85",
    },
    {
      content:
        'A Visualforce controller has a requirement to be written with "Without Sharing" at the top level; however, certain methods within the page still need to enforce the user permissions for creating records and accessing certain fields. Which two methods below would be used to enforce this requirements? Choose 2 answers.',
      options: [
        "A. Schema.DescribeFieldResult",
        "B. Schema.getGlobalDescribe",
        "C. UserInfo.getProfileID",
        "D. Schema.DescribeSObjectResult",
      ],
      answer: "A,D",
      title: "Question 86",
    },
  ],
});
