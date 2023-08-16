window.testContent = window.testContent || [];
var testId = "Salesforce.Sharing-and-Visibility-Designer";
var testName = "Salesforce.Sharing-and-Visibility-Designer";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "Salesforce.Sharing-and-Visibility-Designer.v2022-03-29.q72",
  content: [
    {
      content:
        "Universal Containers wants to create a way to store sensitive Invoice Data in Salesforce. A User who owns an Account should not see every Invoice, but only invoices that they or their subordinates own. Which two features should be considered during this solution implementation?\n       Choose 2 answers.",
      options: [
        "A. Ensure that the Organization-Wide Default sharing for Invoices is set to Private.",
        "B. Deploy the Relationship between Accounts and the Invoices Object as Lookup.",
        "C. Create a Workflow that populates the Invoice sharing object upon Insert.",
        "D. Deploy the Relationship between Accounts and the Invoices Object as Master-Detail.",
      ],
      answer: "A,D",
      title: "Question 1",
    },
    {
      content:
        "Universal Containers (UC) delivers training in 500 different regions. The UC Operations Users team manage course setup, scheduling, and trainer setup. The Operations Users team members work at a regional level and report to an Operations manager. The Operations manager requested access to edit ALL scheduled courses owned by the Operation Users team.\n       How can this be achieved?",
      options: [
        "A. The Operations manager will get access to the scheduled courses by granting the Operations manager modify ALL on scheduled courses.",
        "B. The Operations manager will get access to the scheduled courses owned by the Operations Users team defined in the role hierarchy.",
        "C. The Operations manager will get access to the scheduled courses by creating an ownership-based sharing rule and share the scheduled courses with the Operations manager.",
        "D. The Operations manager will get access to the scheduled courses by creating a public group and add the Operations manager and the Operations Users team to the public group",
      ],
      answer: "B",
      title: "Question 2",
    },
    {
      content:
        "Universal Containers would like to track defects within Salesforce. A defect need to have the following fields:\n       * Severity\n       * Type\n       * Status\n       * Description\n       There will be multiple Defects related to the standard Case object. Defects will be assigned to different owners which will often be different to the Case owner. Which option should the Architect choose to meet the requirement?",
      options: [
        "A. Create a relationship between the standard defect object and the standard case object.",
        "B. Create a custom object for defects and relate it to cases using lookup",
        "C. Create all defect fields on the case object to track the defect and lookup.",
        "D. Create a custom object for defects and relate it to cases using master -detail",
      ],
      answer: "B",
      title: "Question 3",
    },
    {
      content:
        "An External Object is created to show Invoices from an external accounting system. When viewing the External Object, a user should only access invoice records the user is authorized to see.\n       What two actions are required to achieve the above requirement? Choose 2 answers",
      options: [
        "A. Restrict access to data in the accounting system.",
        "B. Setup External Object to use OAuth to connect to the Accounting system.",
        "C. Create an owner based sharing rule to grant visibility to the Invoice object.",
        "D. Grant access to the External Object to only the Account Manager profile.",
      ],
      answer: "A,B",
      title: "Question 4",
    },
    {
      content:
        "Universal Containers (UC) has a team that analyzes customer orders looking for fraud. This team needs access to Invoice records (Custom object, Private OWD). UC \\as complex rules to control users' access. The Salesforce Architect recommended using Apex managed sharing to meet these requirements.\n       Which two recommendations should a Salesforce Developer consider when implementing the changes7 Choose 2 answers",
      options: [
        'A. Use "With Sharing" keyword to make sure record visibility will always be considered.',
        "B. Use runAs system method to test different users accessing these records.",
        'C. Use "Without Sharing" keyword to make sure record visibility will be considered.',
        'D. Use "With Sharing" keyword to enforce field-level security.',
      ],
      answer: "A,B",
      title: "Question 5",
    },
    {
      content:
        "Universal Containers is designing a new community using the Customer Community license type. They would like to have the users complete survey questions through the community interface and store the responses in a Custom Object that has a lookup to the account object. Any internal user who has access to the account should be able to see all survey responses. All Customer Community users should be able to see surveys filled in by other users for their company, but not surveys for other companies. What are the correct security settings to achieve this?",
      options: [
        "A. Set the custom object to be master-detail to the Account and leave the Organization-Wide Default settings as their default values.",
        'B. Set all Organization-Wide Default settings to be "Public Read/Write" for both internal and external users.',
        'C. Set all Organization-Wide Default security to be "Public Read/Write" for internal users and "Private" for external users.',
        'D. Set all Organization-Wide Default security to be "Private" for both internal and external users and use Sharing Rules to grant the desired access',
      ],
      answer: "D",
      title: "Question 6",
    },
    {
      content:
        "Which two are potential vulnerabilities in the following code snippet? <apex:page> <apex:form>\n       <apex:outputText value=\"Enter Name\"/> <apex:inputText value=\"{!name}\" /> <apex:commandButton value=\"Query\" action=\"{!query}\" /> </apex:form> </apex:page> public class SOQLController { public String name { get { return name;} set {name=value;} } public PageReference query() { String qryString='SELECT Id FROM Contact WHERE '+ '(IsDeleted = false and Name like \\'%' + name + '%\\'}'; queryResult = Database.query(qryString); retunr null; } } Choose 2 answers",
      options: [
        "A. FLS check",
        "B. Arbitrary Redirects",
        "C. Data Access Control",
        "D. SOQL Injection",
      ],
      answer: "C,D",
      title: "Question 7",
    },
    {
      content:
        "After testing and deploying a new trigger that does creates a related order when a opportunity is closed, the Architect begins complaints of permission error messages appearing when closing an opportunity.\n       How did this error occur?",
      options: [
        "A. The trigger handler class is using ''with sharing'' and the user does not have access to the orders related to the opportunity.",
        "B. Trigger is using IsCreateable() Apex method and the user doesn't have create permission on the Oder object.",
        "C. The trigger should be using RunAs() when creating the order.",
        "D. The trigger handlers class does not use any sharing keywords and the user not have access to the orders related to the opportunity.",
      ],
      answer: "A",
      title: "Question 8",
    },
    {
      content:
        "Sales manager at universal containers (UC) have requested viewing customer invoices in Salesforce. Invoice data is mastered in the ERP system. The architect at UC decided to surface the customer invoices in salesforce using external objects and did the following:\n       -Configured an external object called Invoice.\n       -Created a lookup relationship between account and the invoice.\n       How can the architect grant the sales managers access to the customer invoices data?",
      options: [
        "A. By creating a sharing set to share invoices with users in sales manager role.",
        "B. By creating manual sharing to share invoices with relevant sales managers.",
        "C. By creating controlling the invoices object permission on the sales manager's profile.",
        "D. By creating sharing rules to share the invoices records with users in sales mangers roles.",
      ],
      answer: "C",
      title: "Question 9",
    },
    {
      content:
        "Universal Containers (UC) has a custom Apex class that enforces a business process and updates opportunity field-level security permissions of read only certain user's profiles are being updated by their class.\n       How should the architect fix this problem?",
      options: [
        "A. Put the code in an class that uses the With Sharing keyword.",
        "B. Add With Sharing keyword to the class.",
        "C. Use the With SECURYT_ENFORCED keyword in the SOQL statement.",
        "D. Use the IsUpdateable() Apex method to test each field prior to allowing updates.",
      ],
      answer: "C",
      title: "Question 10",
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
      title: "Question 11",
    },
    {
      content:
        "Universal Containers has a Private Sharing Model and restrictive data access settings in place. The data governance team is planning to deploy a master data management tool that will need write access to all system data, and the Architect has been asked to prepare a Data Governance User Profile that has full access to all data regardless of Sharing and CRUD Settings. What is the optimal way to enable this requirement?",
      options: [
        "A. Create a Sharing Rule for required Objects, on an API Only profile",
        "B. Create an All Data Access app as a default for this Profile.",
        'C. Ensure the profile has the "Modify All Data permission enabled',
        'D. Enable the "Edit Read -Only Fields" permission for this Profile.',
      ],
      answer: "C",
      title: "Question 12",
    },
    {
      content:
        "A sales representative at Universal Containers needs assistance from specific product managers when selling certain deals. Product managers do not have access to opportunities they don't own, as the sharing model is Private, but need to gain access when they are assisting with a specific deal. How can an Architect accomplish the requirement?",
      options: [
        "A. Create a sharing rule to allow the product manager to access the opportunity.",
        "B. Use similar opportunities to share opportunities related to the product manager.",
        "C. Enable account team and allow users to add the product manager.",
        "D. Enable opportunity teams and allow users to add the product manager.",
      ],
      answer: "D",
      title: "Question 13",
    },
    {
      content:
        "Universal Containers has built a recruiting application on the salesforce Platform. HR requested that all internal users should have edit access to the referral custom object. One of the recruiters needed to share a referral record with another colleague for collaboration using manual sharing. The recruiter opened the referral record and could not find the share button. What could be the technical reason for this?",
      options: [
        "A. The Referral object OWD is public Read/Write.",
        "B. The Referral object OWD is private.",
        "C. The Referral object OWD is public Full Access.",
        "D. The Referral object OWD is public Read only.",
      ],
      answer: "A",
      title: "Question 14",
    },
    {
      content:
        "Universal Containers has a custom object, Employee Review, with an Organization-Wide Default security setting of Private. A user lookup on the Employee Review object is populated when a reviewer is assigned to perform a review. How can this user be granted edit access to the record if they are not the owner?",
      options: [
        "A. Create a workflow rule to share the Employee Review record with the user in the lookup field.",
        "B. Create an Apex trigger to insert an Employee Review Share record with an access level of Edit.",
        "C. The user will be granted access to the record automatically when the user lookup is populated.",
        "D. Create a criteria-based sharing rule to share the record with the user in the lookup field.",
      ],
      answer: "D",
      title: "Question 15",
    },
    {
      content: "What is a workaround to ownership data skew?",
      options: [],
      answer: "A",
      title: "Question 16",
    },
    {
      content:
        "A dummy user at Universal Containers owns more that 10,000 lead records. The system assigned all these leads to a dummy user. This is causing performance issues whenever role hierarchy changes. Which two options should be recommended to improve performance?\n       Choose 2 answers.",
      options: [
        "A. Do not assign a role to the dummy user.",
        "B. Add the dummy user into a public group.",
        "C. Assign ownership to a small number of users.",
        "D. Add the dummy user to the bottom of the role hierarchy.",
      ],
      answer: "A,C",
      title: "Question 17",
    },
    {
      content:
        "Universal Container (UC) is in a legal dispute regarding several orders. UC has found out these records VP of Sales has asked to ensure this cannot happen in the future.\n       What approach would meet this requirement?",
      options: [
        "A. Remove the Delete button from the Order Page Layout.",
        "B. Remove Order delete Permission from Profiles and Permission Sets",
        "C. Change the Record Type/Page Layout assignment for orders to be Read Only.",
        "D. Implement a Sharing Rule that changes access for order to Read.",
      ],
      answer: "B,C",
      title: "Question 18",
    },
    {
      content:
        "Universal Containers has a global 24x7 Salesforce.com implementation that supports Sales, Services, Order Management, and various other parts of their business. They have a nested territory hierarchy, 10,000 sales users, and 20,000 support agents. Territory changes happen daily. The demand for new applications and changes to the platform is high and they follow an agile development methodology and deliver new releases every two weeks on the platform. What Salesforce.com feature would help the system recover from a maintenance restart on Salesforce.com servers?",
      options: [
        "A. Enable Filter -Based Opportunity Territory Assignment.",
        "B. Enable Deferred Sharing Rule recalculation.",
        "C. Enable Granular Locking on the system.",
        "D. Enable Parallel Sharing Rule recalculation.",
      ],
      answer: "B",
      title: "Question 19",
    },
    {
      content:
        'At Universal Containers, users should only see Accounts they or their subordinates own. All Accounts with the custom field "Kay Customer" should be visible to all Senior Account Managers. There is a custom field on the Account record that contains sensitive information and should be hidden from all users, except 3 designated users who require view and edit access. These three users come from different user groups, and will change occasionally. Which three platform security features are required to support these requirements with the minimum amount of effort?\n       Choose 3 answers',
      options: [
        "A. Owner-Based Sharing Rules",
        "B. Role Hierarchy",
        "C. Apex Managed Sharing",
        "D. Criteria-Based Sharing Rules",
        "E. Permission Sets",
      ],
      answer: "B,D,E",
      title: "Question 20",
    },
    {
      content:
        "Universal Containers has set the Org-Wide Sharing Default for Accounts to Private and has created some sharing rules to extend access based on certain data access policies. An architect has been asked to review access to a certain set of key customer accounts. How might this review be conducted?",
      options: [
        "A. Run a Report on Sharing in the Admin Console.",
        "B. Export the Account Share table and review.",
        "C. Log in as each user and Run the All Accounts List View.",
        "D. Use the Sharing button on each customer Account.",
      ],
      answer: "B",
      title: "Question 21",
    },
    {
      content:
        "How would you make sure Visualforce page is security proof? Choose 3 answers",
      options: [
        "A. Use debug to check hijacked requests",
        "B. Manually check for cross site",
        "C. Submit to force security scanner",
        "D. Manually check for sql injection",
        "E. Use web application tool for security",
      ],
      answer: "A,C,E",
      title: "Question 22",
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
      title: "Question 23",
    },
    {
      content:
        "Universal Container has a set of Account management users that should only see accounts once the account becomes a customer. The type field on the Account identifies whether the account is a prospect, customer, partner, or other. Which two methods could an Architect use to enable this sharing requirement, assuming a private sharing model for accounts? Choose two:",
      options: [
        "A. Create a criteria-based sharing rule that shares the account to the account management group when the type is customer",
        "B. Create a public list view, where accounts of type customer are included and share the list view with account management public group",
        "C. Institute a business process that calls for the account manager to be added to the account team once the account becomes a customer",
        "D. Create an account sharing rule that shares all accounts owned by sales to be shared with account management roles and subordinates",
      ],
      answer: "A,C",
      title: "Question 24",
    },
    {
      content:
        "A sales rep (John) at Universal Containers (UC) requested to update information in an account record where he has READ only access. John requested the EDIT access permission from the owner of the record (Paul). Paul manually shared the record with John. Assuming the OWD of the Account object is Public Read-Only, what is the impact in the system?",
      options: [
        'A. Existing AccountShare record is updated. Row Cause is "Owner" and User/Group is "John".',
        'B. New AccountShare record is created. Row Cause is "Manual" and Access Level is "Read/Write".',
        'C. New AccountShare record is created. Row Cause is "Owner" and Access Level is "Full".',
        'D. Existing AccountShare record is updated. Row Cause is "Manual" and Access Level is "Read/Write".',
      ],
      answer: "B",
      title: "Question 25",
    },
    {
      content:
        "Universal Health is planning to store patient notes in Salesforce. Patient notes consist of long text notes taken by a use to document phone calls with a patient.\n       A date audit has identified that these notes can contain Personally Identifiable Information (PII) and Personal Health Information (PHI). The regulatory requirements state that this data must be encrypted at rest as well as in transit.\n       What should the Architect do in order to make sure Universal Health stays compliant?",
      options: [
        'A. Create a new Custom Field of type "Text (Encrypted)" and move the patient notes data into the new field.',
        "B. Use an Apex trigger and the Apex Crypto class to encrypt patient notes as soon as they are saved to Salesforce.",
        "C. No action is required; all Salesforce data is encrypted at rest as part of Salesforce's standard trust measures.",
        "D. Enable Salesforce Shield Platform Data Encryption and mark the patient notes field as encrypted.",
      ],
      answer: "D",
      title: "Question 26",
    },
    {
      content:
        'What is the security vulnerability in the following code snippet? <apex:form>\n       <apex:commandButtonrerender="outputIt" value="Update It"/> <apex:inputText value="{!myTextField}"/>\n       <apex:form> <apex:outputPanel id="outputIt"> Value of my Textfield is <apex:outputText Value="{!myTextField}" escape="false"/> <apex:outputPanel>',
      options: [
        "A. Cross-Site Scripting",
        "B. SOQL Injection",
        "C. Access Control",
        "D. Arbitrary Redirects",
      ],
      answer: "A",
      title: "Question 27",
    },
    {
      content:
        "When you make changes to roles and groups Salesforce locks the entire group membership table, which makes it impossible to process group changes in multiple threads to increase throughput on updates.",
      options: [],
      answer: "\n        \n       \n        Granular Locking\n        ",
      title: "Question 28",
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
      title: "Question 29",
    },
    {
      content:
        "Universal Containers has requirement for the Architect to develop Apex Managed Sharing code for the custom Job object. The sharing settings for the Job object are set to Private.\n       When assigning access level for the record, which two lines of code will cause a DML exception on insert to the database?\n       Choose 2 answers",
      options: [
        "A. Objectname.AccessLevel='Read'",
        "B. Objectname.AccessLevel='None'",
        "C. Objectname.AccessLevel='All'",
        "D. Objectname.AccessLevel='Edit'",
      ],
      answer: "B,C",
      title: "Question 30",
    },
    {
      content:
        "Universal Containers has Public Read Only sharing settings on the Opportunity object. What Opportunity access options can the user see while adding account team members to the Account?",
      options: [
        "A. Private",
        "B. Read Only",
        "C. Read Only and Read/Write",
        "D. Private and Read Only",
      ],
      answer: "C",
      title: "Question 31",
    },
    {
      content:
        "Universal Containers has set Opportunity Sharing to Private with Opportunity Teams enabled. Which three options can change the Owner of the Opportunity?\n       Choose 3 answers.",
      options: [
        "A. Someone above the Opportunity Owner in the Role Hierarchy.",
        "B. Any Opportunity Team Member on the current Opportunity.",
        "C. The user specified as the Manager on the Owner's User Profile.",
        'D. The System Administrator or a user with the "Transfer Records" permission.',
        "E. The current Opportunity Owner can transfer the current ownership.",
      ],
      answer: "A,D,E",
      title: "Question 32",
    },
    {
      content:
        'Jane, a support representative at Universal Containers, created a report to view all her open cases that have been created in the past 7 days and saved the report in the "Private Reports" folder.\n       Who can view and run the report?',
      options: [
        "A. The report owner",
        'B. The report owner and any users who have been given access to the "My Private Reports" folder',
        "C. The report owner and anybody in the role hierarchy above the report owner",
        'D. The report owner and users with the "View All Data" permission',
      ],
      answer: "A",
      title: "Question 33",
    },
    {
      content:
        "How should the Architect ensure that OBJECT-LEVEL SECURITY is enforce within a custom Visualforce application that was a standard Apex controller on the Lead object?",
      options: [
        "A. Use the Schema.DescribeSObjectResultisAccessible() method in the Apex controller.",
        "B. Use the runAs() method to enforce user permissions in the Apex controller.",
        'C. Use the "With Sharing" keyword when defining the Visualforce page.',
        "D. Use the {!$ObjectType.lead.accessible} expression within the Visualforce page.",
      ],
      answer: "D",
      title: "Question 34",
    },
    {
      content:
        "Universal Containers (UC) is a non-profit organization and has over 20,000,000 members (donors). The company decided to assign those accounts to Donations Reps based on their regions. Donations Reps ended up owning over 50,000 donors each. The donation reps started to see significant degradation of the system performance. What could be the reason for this problem?",
      options: [
        "A. There is an Account ownership data skew problem.",
        "B. The Donations Reps access to the assigned accounts.",
        "C. Salesforce sharing recalculation kicked off.",
        "D. The Account (donor) object OWD is Private.",
      ],
      answer: "A",
      title: "Question 35",
    },
    {
      content:
        "In order to allow community users to collaborate on Opportunities, which license type must the users.",
      options: [
        "A. Customer Community plus",
        "B. Partner Community",
        "C. Sales Community",
        "D. Customer Community",
      ],
      answer: "B",
      title: "Question 36",
    },
    {
      content:
        "A junior Account manager owns an account and creates a new opportunity to manage complex deal. She needs the help of the product specialist and solution engineer. Given the size of this deal, she knows the account is likely to be reassigned to a senior account manager in the near future. What is the optimal way for the junior account manager to share the opportunity, given the private sharing model?",
      options: [
        "A. Manual Share on the Opportunity.",
        "B. Manual share on the Account.",
        "C. Create an Owner-based sharing rule.",
        "D. Opportunity Team.",
      ],
      answer: "D",
      title: "Question 37",
    },
    {
      content:
        "Universal Containers (UC) has a requirement to expose a web service to their business partners. The web service will be used to allow each business partner to query UC's Salesforce instance to retrieve the status of orders. The business partner should only be allowed access to orders for which the business partner is the fulfillment vendor. The Architect does not want the business partners to utilize the standard APIs and would prefer a custom API be developed. Which three design elements should the Architect consider in order to ensure the data security of the solution?\n       Choose 3 answers",
      options: [
        "A. Provide each partner with their own Salesforce login set to API Enabled on the profile.",
        "B. Set the Orders object's sharing settings to Private in the Org-Wide Defaults",
        "C. Develop a custom Apex web service with a fulfillment ID input attribute",
        'D. Develop a custom Apex web service using the "With Sharing" keyword.',
        "E. Query the Orders object with Dynamic SOQL based upon the fulfillment ID.",
      ],
      answer: "B,D,E",
      title: "Question 38",
    },
    {
      content:
        "UniversalContainers(UC)hasimplementedcustomercommunitywithcustomercommunitylicenses for their customers. UCrequested thatanyrecord owned by its customers should be accessible byUC users in the customer support role.\n       How can an Architect configure the system to support the requirements?",
      options: [
        "A. Sharing Rule",
        "B. Apex Sharing",
        "C. Share Group",
        "D. Sharing Set",
      ],
      answer: "C",
      title: "Question 39",
    },
    {
      content:
        "Which two objects support creating queues?\n       Choose 2 answers.",
      options: ["A. Opportunity.", "B. Case.", "C. Lead.", "D. Account."],
      answer: "B,C",
      title: "Question 40",
    },
    {
      content:
        "Below are some details regarding the organization at Universal containers:\n       1. Richard and Kevin are the east sales reps and their manager is Karen the East sales executive.\n       2. Sam and Wilder are West sales reps and the manager is Wendy, the West sales executive.\n       3. Bob is the CEO and managers both Karen and Wendy\n       Universal containers role hierarchy follows their management structure. Richard owns an account, NewCompany, and Kevin owns an account, OldCompany. Karen manually shared her account NewWorld with Kevin. However, she has moved to a new role to lead all Named Accounts, and Phil, who replaced her, is the new owner of NewWorld. Which employees will have access to the NewWorld account?",
      options: [
        "A. Bob, Karen and Kevin",
        "B. Bob, Richard, Phil and Kevin",
        "C. Bob and Phil",
        "D. Bob, Phil and Kevin",
      ],
      answer: "C",
      title: "Question 41",
    },
    {
      content:
        "The sales manager in Japan have asked the sales manager in Australia to assist them with closing their deals.\n       How are these requirements achieved?",
      options: [
        "A. Assign the sales manager View All on the opportunity object.",
        "B. Create ownership-based sharing rule.",
        "C. Use sharing set to give the sales manager access to the deals.",
        "D. Use opportunity teams to automatically add the sales manager as a team member.",
      ],
      answer: "D",
      title: "Question 42",
    },
    {
      content:
        "Universal Containers (UC) has created a public group with certain Sales Engineers to help on complex deals and a sharing rule to grant access to these opportunities. Opportunity OWD is private.\n       What is the impact of these sharing settings?",
      options: [
        "A. Sales Engineers direct reports will also have access to these records.",
        "B. Sales Engineers that have a similar role of the Sales Engineers of the public group will also have access to these records.",
        "C. Sales Engineers Managers and their managers in the role hierarchy will also have access to these records.",
        "D. Subordinates of Managers who have Sales Engineers in the public group will also have access to these records.",
      ],
      answer: "C",
      title: "Question 43",
    },
    {
      content:
        "Universal Containers wants to store Payment Term Details on the Account object, but the fields should only be visible on certain record types and for certain user profiles.\n       How can a System Administrator quickly determine which user profiles, page layouts, and record types include certain fields?",
      options: [
        "A. Click the Field-Level Security for the field on each Profile.",
        "B. Use the Field Accessibility Viewer for the fields in question",
        "C. Log in as each user profile and view the Account Page Layouts.",
        "D. Universally require the field at the field level.",
      ],
      answer: "B",
      title: "Question 44",
    },
    {
      content:
        "Mary is Joe's manager in the role hierarchy. The OWD for a custom Invoice object is Public ReadOnly and Mary's profile is not granted the Read permission for the Invoice object.\n       What action can Mary take on Joe's Invoice records?",
      options: ["A. Read/Write", "B. Edit Only", "C. View Only", "D. None"],
      answer: "D",
      title: "Question 45",
    },
    {
      content:
        "Which two options can be selected to share data with when creating a sharing rule?\n       Choose 2 answers",
      options: ["A. Profiles", "B. Public Groups", "C. Users", "D. Roles"],
      answer: "B,D",
      title: "Question 46",
    },
    {
      content:
        "To grant Universal Containers sales managers access to shipment records properly it was necessarily to the IT Team is worried about improper access to records.\n       Which two features and best practices should a Salesforce architect recommended to mitigate the risk?",
      options: [
        "A. USe isShareable keyword in Apex classes to assure record visibility will be followed",
        "B. Use runAs system method in test classes to test using different users and profiles.",
        "C. Use With Sharing keyword in Apex classes to assure record visibility will be followed",
        "D. User isAccessable keyword Apex classes to assure recor visibility will be followed.",
      ],
      answer: "C,D",
      title: "Question 47",
    },
    {
      content:
        "What is the best practice for testing sharing and visibility changes?",
      options: [
        "A. Use Administrative and User reports to view the Active Users.",
        "B. Use the Login As feature for a sample user in each role and profile.",
        "C. Use Field Audit Trail to audit the field meta-data and visibility.",
        "D. Use the Sharing button to test Profile and Permission set changes.",
      ],
      answer: "B",
      title: "Question 48",
    },
    {
      content:
        "Universal Containers is a fast-growing company that sells containers globally. It has thousands of dealerships throughout the world where local dealers service Containers sold locally. They recently opened two dealerships in California: NorthCal and SoCal. Universal Containers implemented a new partner community to enable their dealers. Each dealership has a dealer Manager who has all service agents report into them.\n       Assuming a private sharing model, what is the best option to enable dealer managers to have visibility to customer cases within their dealership and not across all dealerships?",
      options: [
        "A. Create sharing groups that share all cases to all agents under the Dealer manager.",
        "B. No changes are needed to the sharing and visibility model to implement this requirement.",
        "C. Create a batch job that creates sharing rules as needed, based on the cases created.",
        "D. Build a trigger that create manual sharing of cases as needed whenever a new case is created.",
      ],
      answer: "B",
      title: "Question 49",
    },
    {
      content:
        "Universal Containers would like to customize the security and sharing features of Salesforce Account Teams.\n       They have decided to implement a Custom Account Team object. They would like the new enhancement to include all of the features of the existing account team, but also utilize Apex and Visualforce on the custom Account Team object.\n       Which two different approaches should the Architect consider when designing this enhancement?\n       Choose 2 answers",
      options: [
        "A. The need to customize Account screens in Visualforce, as the Account_share object cannot be maintained programmatically.",
        "B. The need to maintain the Account_share object based upon the Custom Account Team object data.",
        "C. The need to dynamically create Criteria-Based Sharing rules with Custom Account Team object data.",
        "D. The need to synchronize the AccountTeamMember object with the Custom Account Team object data.",
      ],
      answer: "B,D",
      title: "Question 50",
    },
    {
      content:
        "Universal Containers has recently activated an integration that synchronizes customer information and orders into their CRM of choice: Salesforce.com. One of their largest customers, United Air, has over 12,000 unique contacts. Since the integration was activated, sales reps are having trouble adding contacts to the United Air account. When a sales rep adds a contact, they get the following error message:UNABLE_TO_LOCK_ROW, This issue seems to affect the United Air account and several other large customers. The sales rep can usually save the contact by trying again later in the evening. What should the Architect recommend as a possible solution?",
      options: [
        "A. Remove sharing rules and replace them with Apex sharing for Unite Air and the other large accounts.",
        "B. Implement an account hierarchy and redistribute the contacts evenly under the child accounts.",
        "C. Create a permission set for the sales team to grant them Read/Write access to all account fields.",
        "D. Add a role-based sharing rule so all sales team members have Read/Write access to contacts.",
      ],
      answer: "B",
      title: "Question 51",
    },
    {
      content:
        'Universal Containers (UC) has 600 sales reps. UC has rollout plan to deploy salesforce in 3 weeks. At the end of the second week, they received a "User Role Limit Exceeded" error.\n       After investigation, they discovered that during the user provisioning process, a new role was generated for every new user.\n       Which two recommendations could solve this problem?\n       Choose 2 answers.',
      options: [
        "A. Contact salesforce support and request to increase the number of users' roles allowed.",
        "B. Create an Apex class to replace the User Roles by generic one as soon as they are created.",
        "C. Remove role hierarchy from salesforce org and control the record access using apex managed sharing.",
        "D. Review the user provisioning process to not automatically create a user role for any new user.",
      ],
      answer: "A,D",
      title: "Question 52",
    },
    {
      content:
        "Universal Containers uses person accounts to represent retail customers and business accounts to represent commercial customers. The Retail Sales team should not have access to commercial customers but have access to ALL retail customers.\n       With organization-wide default on Account set to Private, how might the architect meet these requirements?",
      options: [
        "A. Give View All access for Accounts to the Retail Sales profile.",
        "B. Update Retail Sales profile to grant access to Person Account record type.",
        "C. Create an owner-based sharing rule on AccountContactRelation to grant access to at account contact roles records owned by sales reps.",
        "D. Create a criteria-based sharing rule giving Retail Sales role access to Accounts of type PersonAccount.",
      ],
      answer: "D",
      title: "Question 53",
    },
    {
      content:
        "Universal container (UC) use External Object to retrieve Invoice data from a Legacy ERP. A finance team requested to have access to the Invoice records in the account page.\n       In addition to objects access in the finance users profile, what other feature should a Sales Architect recommend?",
      options: [
        "A. Use APEX managed sharing to grant access to the records.",
        "B. Create a criteria-based sharing rule to grant access to the records.",
        "C. Create an owner-based sharing rule to grant access to the records.",
        "D. Include the Invoice Related List On Account Page layout.",
      ],
      answer: "D",
      title: "Question 54",
    },
    {
      content:
        "The System Administrator at Universal Containers has created two list views called ListV1 and ListV2. One group of users should only see ListV1 and the second group of users should only see ListV2. Two public groups were created to restrict visibility to the respective list views. However, users in both groups are able to see both list views. What system permission in their profile enabled the users to see all list views?",
      options: [
        "A. Manage Public List Views",
        "B. Manage Custom Permissions",
        "C. Manage Private List Views",
        "D. Manage Custom List Views",
      ],
      answer: "A",
      title: "Question 55",
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
      title: "Question 56",
    },
    {
      content:
        "Universal Containers uses 75,000 distributors that have close to 1 million total users. Distributors need opportunities assigned to their distributor for delivery.\n       What license recommendation will meet distributor needs?",
      options: [
        "A. Sales Cloud",
        "B. Partner Community",
        "C. Customer Community Plus",
        "D. Custom Community",
      ],
      answer: "B",
      title: "Question 57",
    },
    {
      content:
        "Sales managers want their team members to help each other close Opportunities. The Opportunity and Account organization-wide defaults are private. To grant Opportunity access to sales reps on the same team, owner ship-based sharing rules were created for each team.\n       What is the side effect of this approach?",
      options: [
        "A. All sales reps will have Read access to all Accounts.",
        "B. All sales reps will have Read access to Accounts for all Opportunities.",
        "C. Sales Reps on the same team will have Edit access to the Accounts for Opportunities owned by then team members.",
        "D. Sales reps on the same team will have Read access to the Accounts for Opportunities owned by their team members.",
      ],
      answer: "D",
      title: "Question 58",
    },
    {
      content:
        "Universal Containers (UC) uses a custom Visualforce page to display shipment tracking information (custom object, private OWD) to field manager and agents. The IT team wants to make sure that users have access to only the information that is allowed.\n       Which Apex method must be used to make sure only allowed fields are shown to the users?",
      options: [
        "A. isReadable()",
        "B. isAccessible()",
        "C. isShowable()",
        "D. isViewable()",
      ],
      answer: "B",
      title: "Question 59",
    },
    {
      content:
        'When writing test methods, what functionality is verified by the system method"runAs()"?',
      options: [
        "A. Enforcement of a user's field-level security.",
        "B. Enforcement of user's public group assignments.",
        "C. Enforcement of user permissions.",
        "D. Enforcement of a user's record sharing.",
      ],
      answer: "D",
      title: "Question 60",
    },
    {
      content:
        'Universal Containers is updating its Organization-Wide Sharing Settings for the Account Object from a\n       "Public Read/Write" model to a "Private" model, so that they can hide certain national accounts from sales reps and sales managers. These national accounts should only be accessible by sales directors and above.\n       Universal Container\'s Role Hierarchy matches its organizational hierarchy. Which two options should the Architect consider when designing the solution? Choose 2 answers',
      options: [
        "A. Apex managed sharing will have to be disabled for the account object to protect the national accounts.",
        "B. Sales directors will need a sharing rule created so that they can see accounts owned by Sales Users.",
        "C. If a sales rep is added to the Opportunity Team for a national account, they will gain access to account data.",
        "D. National accounts must be owned by a user who is above the sales managers in the Role Hierarchy.",
      ],
      answer: "C,D",
      title: "Question 61",
    },
    {
      content:
        "Universal Containers does not want the Users in the Custom Sales Department Profile to be able to delete Opportunities. How would the Architect prevent a certain set of users from deleting Opportunities?",
      options: [
        "A. Remove the Delete button from the Opportunity Page Layout and Record Type settings.",
        "B. Create a Validation Rule that checks the User's Profile before allowing the Is Deleted flag to be set to True.",
        "C. Override the Standard button with a Visualforce Page that warns them that they do not have permission to delete.",
        'D. Remove the "Opportunity Delete" Permission from the Sales Team\'s User Profile in the Object Permissions.',
      ],
      answer: "D",
      title: "Question 62",
    },
    {
      content:
        "Universal Containers (UC) provides shipment tracking for its customers on a custom Shipment object. The ..\n       yearly by the customers should be available on the Account record to the Marketing team, but the Marketing Shipment records.\n       What recommend should an Architect provide to accomplish this?",
      options: [
        "A. Private organization-wide default on Shipment, trigger, and Lookup relationship to Account,",
        "B. Public organization-wide default on Shipment, process builder, and lookup relationship to Account.",
        "C. Private organization-Wide default on Shipment, rollup summary, and Master-Detail relationship to Account.",
        "D. Controlled by Parent (Account) on Shipment, trigger, and trigger, and Master-Detail relationship to Account.",
      ],
      answer: "A",
      title: "Question 63",
    },
    {
      content:
        "A custom invoice object has been created with a master-detail relationship to account. The Account receivable (AR) team needs access to Invoices AR users do not own nor have access to Account records. Account OWD is set to Private. The AR team is unable to find Invoices in List views, Reports, nor in Global Search. The Architect has been asked to help troubleshoot.\n       What could be the issue preventing AR team members from seeing invoices?",
      options: [
        "A. A sharing rule is missing to share Invoices to the AR team.",
        "B. A sharing rule is missing to share Accounts to the AR team.",
        "C. The Accounts receivable profile does not have read Permission to the Invoice Object.",
        "D. The AR team profile needs to be assigned an Invoice Page layout.",
      ],
      answer: "B",
      title: "Question 64",
    },
    {
      content:
        "Universal Containers has enabled External Default Sharing and wants to allow for external users to have the External Sharing Default set to Public Read-Only for a custom object. Which two options are valid Internal Default sharing settings for the custom object?",
      options: [
        "A. Private",
        "B. Controlled by Parent",
        "C. Public Read Only",
        "D. Public Read/Write",
      ],
      answer: "C,D",
      title: "Question 65",
    },
    {
      content:
        "Universal Containers has selected a small and diverse group of users to review inactive accounts. Given the Private sharing model, a public group was created and made available to this group of users. A sharing rule was created to make inactive Accounts visible to the public group. However some of these users are reporting they don't see any of the Accounts that were shared with the public group.\n       What is the underlying issue for these users?",
      options: [
        "A. The page layout assigned to these users is different than the Account owner.",
        "B. The users are in profiles that have no access to the Account object.",
        "C. The Accounts are owned by users higher in the role hierarchy.",
        'D. The users have a permission set that only allow Accounts in "Active" status.',
      ],
      answer: "B",
      title: "Question 66",
    },
    {
      content:
        "Universal Containers has the following requirements: A custom Loan object requires Org-Wide Defaults set to Private. The owner of the Loan record will be the Loan Origination Officer. The Loan record must be shared with a specific Underwriter on a loan-by-loan basis. The Underwriters should only see the Loan records for which they are assigned. What should the Architect recommend to meet these requirements?",
      options: [
        "A. Create an Apex Sharing Reason on the Loan object that shares the Loan with the Underwriter based upon the criteria defined in the Sharing Reason",
        "B. Create a master-detail relationship from the Loan to the User object. Loan records will be automatically shared with the Underwriter",
        "C. Use criteria-based sharing rules to share the Loan object with the Underwriter based upon the criteria defined in the criteria-based sharing",
        "D. Create a lookup relationship from the Loan object to the User object. Use a trigger on the Loan object to create the corresponding record in the Loan share object",
      ],
      answer: "D",
      title: "Question 67",
    },
    {
      content:
        "Assuming granular locking is enabled, what activity can happen in parallel to changing a community account owner without risking group membership lock errors?",
      options: [
        "A. Creation of a Territory",
        "B. Creation of a Role",
        "C. Deletion of a Territory",
        "D. Deletion of a Role",
      ],
      answer: "A",
      title: "Question 68",
    },
    {
      content:
        "Sales Operations at Universal Containers (UC) has created Public Report and Dashboard folders for sales managers that report to the VP of sales. Sales Operations currently spends a few hours each month updating users that should have access to edit items in these folders. In which two ways can UC grant access to sales managers to automate access to these Reports and Dashboards folders?\n       Choose 2 answers",
      options: [
        'A. Share the folders with a "Sales Managers" Public Group.',
        'B. Share the folders with the "VP of Sales" Role and Subordinates.',
        'C. Share the folders with the "Sales Managers" Queue.',
        "D. Share the folders lowest roles in the role hierarchy, Superiors will get access automatically.",
      ],
      answer: "B",
      title: "Question 69",
    },
    {
      content:
        "The architect at Universal Containers is trying to ensure that security vulnerabilities are not present within the Salesforce organization.\n       What two tests should the architect verify?\n       Choose 2 answers",
      options: [
        "A. Test for invalid user access attempts.",
        "B. Test Cross-Site Scripting on Apex queries.",
        "C. Test for SOQL Injection.",
        "D. Test Cross-Site Scripting on custom pages.",
      ],
      answer: "C,D",
      title: "Question 70",
    },
    {
      content:
        'Which three areas should the Architect review in order to increase performance of "Record Access" and\n       "Sharing" calculations?\n       Choose 3 answers.',
      options: [
        "A. Record ownership, to ensure that no user owns more than 10,000 Object records in the system.",
        "B. Opportunity data, to ensure that no Account has more than 10,000 Opportunity records that are related to it.",
        "C. Apex Managed Sharing triggers, to ensure that no trigger is querying more that 10,000 Object records.",
        "D. Custom Object data, to ensure that no Account has more than 10,000 Custom Objects that look up to it.",
      ],
      answer: "A,B,D",
      title: "Question 71",
    },
    {
      content:
        "The Finance team at Universal Containers usually does not need access to Account and Contract records A ..\n       given Opportunity access for a big deal to help with tax calculation. She can now also access Account and C..\n       Which two reasons could be causing this issue? Choose 2 answers",
      options: [
        "A. Contact records can be accessed due to implicit sharing from Opportunity.",
        "B. Contact records can be accessed due to implicit sharing from Account.",
        "C. Account records can be accessed due to implicit sharing from Opportunity.",
        "D. Account records can be access due to role hierarchy.",
      ],
      answer: "B,C",
      title: "Question 72",
    },
  ],
});
