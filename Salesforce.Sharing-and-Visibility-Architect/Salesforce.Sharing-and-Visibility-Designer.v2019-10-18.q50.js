window.testContent = window.testContent || [];
var testId = "Salesforce.Sharing-and-Visibility-Designer";
var testName = "Salesforce.Sharing-and-Visibility-Designer";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "Salesforce.Sharing-and-Visibility-Designer.v2019-10-18.q50",
  content: [
    {
      content:
        "In order to comply with Regulatory Requirements, Universal Containers must store sensitive customer information on-premise. Universal Containers would like this on-premise information to be accessible from Salesforce. What technology can Universal Containers use to achieve this?",
      options: [
        "A. Implement the Salesforce Shield toolkit.",
        "B. Implement an on-premise database.",
        "C. Implement a third-party proxy server.",
        "D. Implement a third-party tokenization service.",
      ],
      answer: "C",
      title: "Question 1",
    },
    {
      content:
        'Universal Containers is updating its Organization-Wide Sharing Settings for the Account Object from a\n       "Public Read/Write" model to a "Private" model, so that they can hide certain national accounts from sales reps and sales managers. These national accounts should only be accessible by sales directors and above.\n       Universal Container\'s Role Hirerarchy matches its organizational hierarchy.\n       Which two options should the Architect consider when designing the solution?\n       Choose 2 answers',
      options: [
        "A. National accounts must be owned by a user who is above the sales managers in the Role Hierarchy.",
        "B. Sales directors will need a sharing rule created so that they can see accounts owned by Sales Users.",
        "C. Apex managed sharing will have to be disabled for the account object to protect the national accounts.",
        "D. If a sales rep is added to the Opportunity Team for a national account, they will gain access to account data.",
      ],
      answer: "A,D",
      title: "Question 2",
    },
    {
      content:
        "Universal Containers (UC) has requirement to expose a web service to their business partners. The web service will be used to allow each business partner to query UC's Salesforce instance to retrieve the status of orders.\n       The business partner should only be allowed access to orders for which the business partner is the fulfillment vendor. The Architect does not want the business partners to utilize the standard APIs and would prefer a custom API be developed. Which three design elements should the Architect consider in order to ensure the data security of the solution?\n       Choose 3 answers.",
      options: [
        "A. Develop a custom apex web service with a fulfillment ID input attribute.",
        "B. Query the Orders object with Dynamic SOQL based upon the fulfillment ID.",
        'C. Develop a custom Apex web service using the "With sharing" keyword.',
        "D. Provide each partner with their own Salesforce login set to PRI Enabled on the profile.",
        "E. Set the Orders object's sharing settings of Private in the Org-Wide Defaults.",
      ],
      answer: "A,C,E",
      title: "Question 3",
    },
    {
      content:
        "Universal Containers is creating a custom Visualforce page to allow users to edit contact records. The developer has used an apex:outputField for the Phone field on the contact object. What is the expected behavior if a user without field-level security accesses the Visualforce page?",
      options: [
        "A. The output field is visible to the user.",
        "B. The user encounters an error while saving the record.",
        "C. The field is automatically removed from the page.",
        "D. The user is able to enter a value into the Phone field.",
      ],
      answer: "C",
      title: "Question 4",
    },
    {
      content:
        "Universal Containers has set the Org-Wide Sharing Default for Accounts to Private and has created some sharing rules to extend access based on certain data access policies. An architect has been asked to review access to a certain set of key customer accounts.\n       How might this review be conducted?",
      options: [
        "A. Run a Report on Sharing in the Admin Console.",
        "B. Export the Account Share table and review.",
        "C. Log in as each user and Run the All Accounts List View.",
        "D. Use the Sharing button on each customer Account.",
      ],
      answer: "B",
      title: "Question 5",
    },
    {
      content:
        "Which features does Salesforce provide for restricting login access to the application?\n       Choose 2 answers.",
      options: [
        "A. Profile-based IP restrictions",
        "B. Profile-based login hour restrictions",
        "C. Role-based IP restrictions",
        "D. Organization-wide login hour restrictions",
      ],
      answer: "A,B",
      title: "Question 6",
    },
    {
      content:
        "A dummy user at Universal Containers owns more that 10,000 lead records. The system assigned all these leads to a dummy user. This is causing performance issues whenever role hierarchy changes. Which two options should be recommended to improve performance?\n       Choose 2 answers.",
      options: [
        "A. Assign ownership to a small number of users.",
        "B. Add the dummy user into a public group.",
        "C. Do not assign a role to the dummy user.",
        "D. Add the dummy user to the bottom of the role hierarchy.",
      ],
      answer: "A,C",
      title: "Question 7",
    },
    {
      content:
        "The architect at Universal Containers would like to prevent users from editing encrypted fields. Assuming no customizations are implemented, which two options should the Architect choose to support the requirement?\n       Choose 2 answers",
      options: [
        "A. Validation Rules",
        "B. Workflow Rules",
        "C. Page Layout settings",
        "D. Apex Triggers",
      ],
      answer: "A,C",
      title: "Question 8",
    },
    {
      content:
        "Which two options are available to share Report or Dashboard folder with other users in the Organization?\n       Choose 2 answers",
      options: ["A. Teams", "B. Profiles", "C. Roles", "D. Public Groups"],
      answer: "D",
      title: "Question 9",
    },
    {
      content:
        "Which two options provide implicit record access to users?\n       Choose 2 answers",
      options: [
        "A. Read-only access to parent account for a user with access to a child case.",
        "B. Read-only access to parent account for a user, based on a criteria-based sharing rule.",
        "C. Access to related leads for the owner of the parent campaign.",
        "D. Access to Child opportunities for the owner of the parent account.",
      ],
      answer: "A,D",
      title: "Question 10",
    },
    {
      content:
        "The Collections department at Universal Containers uses Salesforce to track its efforts. All Invoices and invoice line items are store in salesforce. Invoice line item object details, such as quantity and extended amount, should be summarized at the invoice object level, and all users who can see a given invoice should always see all invoice line items. Without leveraging Apex code, how should an Architect create the relationship between the Invoice object and the Invoice Line Item object?",
      options: [
        "A. The invoice Line Item object should have a Lookup to the Invoice object.",
        "B. The Invoice Line Item object should have a Master-Detail to the Invoice Object.",
        "C. The Invoice object should have an inner join to the Invoice Lice Item object.",
        "D. The Invoice object should have a Master-Detail to the Invoice Line Item object.",
      ],
      answer: "B",
      title: "Question 11",
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
      title: "Question 12",
    },
    {
      content:
        "How should the Architect ensure that OBJECT-LEVEL SECURITY is enforce within a custom Visualforce application that was a standard Apex controller on the Lead object?",
      options: [
        "A. Use the {!$ObjectType.lead.accessible} expression within the Visualforce page.",
        'B. Use the "With Sharing" keyword when defining the Visualforce page.',
        "C. Use the runAs() method to enforce user permissions in the Apex controller.",
        "D. Use the Schema.DescribeSObjectResultisAccessible() method in the Apex controller.",
      ],
      answer: "A",
      title: "Question 13",
    },
    {
      content:
        "Universal Containers has a Private Sharing Model for the Opportunity object. Sales Rep A at Universal Containers created the Opportunity record and then transferred ownership of the Opportunity record to Sales Rep B.\n       Both Sales Rep A and B have the same role in the Role Hierarchy. What access will Sales Rep A have to the Opportunity after the transfer?",
      options: [
        "A. Read Only.",
        "B. No Access.",
        "C. Full Access.",
        "D. Read/Write.",
      ],
      answer: "B",
      title: "Question 14",
    },
    {
      content:
        "Universal Containers has the following requirements:\n       The Commercial Account and Consumer Account support departments should not collaborate.\n       The Commercial and Consumer sales users roll up to the same VP of Sales, but there should be no collaboration between sales departments.\n       The Commercial sales department should share its customers with the Commercial support department.\n       The Consumer sales department shares its customers with the Consumer support department.\n       The Commercial and Consumer support departments roll up to the same Support Director.\n       The sales departments will remain the Account Owner for the Accounts that they sell to.\n       What is the recommended Org-Wide Sharing Default for Accounts, and how would the Architect enable proper Commercial and Consumer Sales to Support Account Sharing for this scenario?",
      options: [
        "A. Private Account Sharing with Sharing Rules from Commercial Sales Role(s) to Consumer Support Role(s) and Consumer Sales Role(s) to Commercial Support Role(s).",
        "B. Private Account Sharing with Sharing Rules from Commercial Sales Group(s) to Commercial Support Groups(s) and Consumer Sales Group(s) to Consumer Support Group(s).",
        "C. Read-Only Account Sharing with Sharing Rules from Commercial Sales Role(s) to Consumer Support Group(s) and Consumer Sales Role(s) to Commercial Support Groups(s).",
        "D. Private Account Sharing with Sharing Rules from Commercial support Role(s) to Commercial Support Role(s) and Consumer Sales Role(s) to Consumer Support Role(s).",
      ],
      answer: "B",
      title: "Question 15",
    },
    {
      content:
        "Universal Containers has created a custom Sales Operations profile with read and edit access to the Category field on a custom object. There is a new requirement that 3 of the 100 users assigned to the Sales Operations Profile should have read-only access to the Category field.\n       How can the Architect support this request?\n       Choose one answer:",
      options: [
        "A. Create a custom permission to grant read-only access to Category and assign it to the users.",
        "B. Create a new page layout with the Category Field set to read-only for these users.",
        "C. Create a new profile without edit access to Category and assign it to the users.",
        "D. Create a permission set in the Category field to read-only and assign it to the users.",
      ],
      answer: "C",
      title: "Question 16",
    },
    {
      content:
        "The Architect at Universal Containers has created a List View to show all open Opportunities that were created in the last month, and would like to make this list view visible to certain groups of users. Which two options are available to the Architect for sharing the List View?",
      options: [
        "A. Roles and Subordinates",
        "B. Manual Sharing",
        "C. Public Groups",
        "D. Profiles",
      ],
      answer: "A,C",
      title: "Question 17",
    },
    {
      content:
        "Which are two valid use cases for programmatic sharing?\n       Choose 2 answers.",
      options: [
        "A. An external system manages user record access.",
        "B. Frequent user ownership changes based on re-alignments.",
        "C. Native sharing functionality does not meet requirements.",
        "D. Setting user ownership for standard and custom objects.",
      ],
      answer: "A,C",
      title: "Question 18",
    },
    {
      content:
        "A Sales Rep at Universal Containers wants to create a dashboard to see how his sales numbers compare with his peers.Assuming a Private model, which two permissions would the Sales Rep need to meet this requirement?",
      options: [
        "A. Customize Application",
        "B. Manage Custom Report Types",
        "C. Manage Dashboards",
        "D. View All Data",
      ],
      answer: "C,D",
      title: "Question 19",
    },
    {
      content:
        "Universal Containers has a requirement to share Accounts automatically to the users at a field office. They currently have the following setup in their environment:\n       Accounts are set to Private in the Org-Wide Default.\n       The field office is specified by a lookup in the account object.\n       There are 400 field offices.\n       The users in each field office are managed using public groups.\n       Based upon a lookup relationship field on the Account, how should the Architect meet their requirement?",
      options: [
        "A. Use Criteria-Based Sharing to share the Account with the appropriate field office.",
        "B. Use Manual Sharing to share the Account with the appropriate field office.",
        "C. Use Programmatic Sharing to share the Account with the appropriate field office.",
        "D. Use Account Teams to share the Account with the appropriate field office.",
      ],
      answer: "A",
      title: "Question 20",
    },
    {
      content:
        "Universal Containers has developed an AppExchange managed package for their distribution partners, which required a private key to be generated for each partner and used by the code. Universal Containers support representatives must be able to access the private key value to debug connection issues, but it must not be possible for the partner to access the value.\n       How can the Architect best support this requirement?",
      options: [
        "A. Store the value in a text field on a protected custom setting in the package.",
        "B. Store the value in the text field on a list custom setting in the managed package.",
        "C. Store the value in an encrypted field on a custom object in the package.",
        "D. Store the value in a static variable in a class included in the managed package.",
      ],
      answer: "B",
      title: "Question 21",
    },
    {
      content:
        'For the Universal Containers Commercial and Consumer support departments, having access to Activities for Contacts with which they interact is important. Commercial support users should not see Consumer Accounts/Contacts and Consumer support users should not see Commercial Accounts/Contacts. Assuming the Organization-Wide Default for Activities is set to "Controlled by Parent" what is the minimum level of Sharing access a support user would need to Accounts/Contacts to view associated Activities?',
      options: [
        "A. Private Account/Contact Sharing Default with a Sharing Rule for each department set to Public Read/Write access to Accounts/Contacts.",
        "B. Private Account/Contact Sharing Default with a Sharing Rule for each department set to Public Read only access to Accounts/Contacts.",
        "C. The users need no access to Accounts/Contacts with the proper Activity Sharing Rules and Profile Permissions for the Accounts Tab.",
        "D. Private Account/Contact Sharing Default with a Sharing Rule for each department set to Private access to Accounts/Contacts.",
      ],
      answer: "B",
      title: "Question 22",
    },
    {
      content:
        "Which two options are available to share a Report or Dashboard folder with other users in the Organization?\n       Choose 2 answers",
      options: ["A. Roles", "B. Profiles", "C. Public Groups", "D. Teams"],
      answer: "A,C",
      title: "Question 23",
    },
    {
      content:
        "Universal Containers has set Opportunity Sharing to Private with Opportunity Teams enabled. Which three options can change the Owner of the Opportunity?\n       Choose 3 answers.",
      options: [
        "A. The current Opportunity Owner can transfer the current ownership.",
        "B. The user specified as the Manager on the Owner's User Profile.",
        'C. The System Administrator or a user with the "Transfer Records" permission.',
        "D. Someone above the Opportunity Owner in the Role Hierarchy.",
        "E. Any Opportunity Team Member on the current Opportunity.",
      ],
      answer: "A,C,D",
      title: "Question 24",
    },
    {
      content:
        "Universal Containers has two custom objects: Job and Job Interview. The Job Interview object has a lookup relationship to Job. Both objects are set to Private in sharing settings. The HR team will own all Job and Job Interview records. They have asked their Salesforce Architect to automatically share the Job Interview when the Interviewer (lookup to user record) has been populated. The interviewer can be from any department. What method should the Architect use to achieve this requirement?",
      options: [
        "A. Build apex Managed Sharing code to share Job Interview with the Interviewer user.",
        "B. Build a criteria-based sharing rule between the Job Interview and the Interviewer.",
        "C. Build a standard sharing rule between Job Interview and the Interviewer.",
        "D. Build a workflow email notification to notify the interviewer of the record assignment.",
      ],
      answer: "A",
      title: "Question 25",
    },
    {
      content:
        "Universal Containers regularly uploads large amounts of parent and child records into Salesforce to maintain integrations with other systems that update their data in scheduled batches or continuously in real time. Which\n       2 situations may pose a risk of producing locking errors? Choose 2 answers",
      options: [
        "A. Updates to child records that have the same parent records are being processed simultaneously in separate transaction",
        "B. Updates of parent and child records are being processed in the same batch",
        "C. Updates of parent and child records are being processed synchronously in the same thread",
        "D. Updates of parent and their child records are being processed simultaneously in separate threads",
      ],
      answer: "A,D",
      title: "Question 26",
    },
    {
      content:
        'Universal Containers has a junction object called "Job Production Facility". With 2 master-detail relationships to the Job and Production Facility custom objects. Both master records have a private sharing model. What statement is true if a user\'s profile allows access (Create/Read) to the Job, but no access to the Production Facility Object?',
      options: [
        "A. The user will see the junction object and the link to the Production Facility.",
        "B. The user will be granted read access to the Production Facility record.",
        "C. The user will see the junction object but not the link to the Production Facility.",
        "D. The user will not be able to see the junction object records or the field values.",
      ],
      answer: "A",
      title: "Question 27",
    },
    {
      content:
        "Universal Containers has a private sharing model on Accounts. Apex Managed Sharing is required to share certain account records with all users who are assigned to a specific Role in the Role Hierarchy. What should be the recommended way for the Architect to implement this?",
      options: [
        "A. Create an AccountShare record associated to a public group containing the Users in the Role.",
        "B. Create an AccountShare record associated to a public group containing the Role.",
        "C. Create an AccountShare record associated to each user who is assigned to the Role.",
        "D. Create an AccountShare record associated to the required Role.",
      ],
      answer: "A",
      title: "Question 28",
    },
    {
      content:
        "Universal Containers has the following requirements:\n       1. A custom Loan object requires Org-Wide Defaults set to Private.\n       2. The owner of the Loan record will be the Loan Origination Officer.\n       3. The Loan record must be shared with a specific Underwriter on a loan-by-loan basis.\n       4. The Underwriters should only see the Loan records for which they are assigned.\n       What should the Architect recommend to meet these requirements?",
      options: [
        "A. Create a master-detail relationship from the Loan to the User object. Loan records will be automatically shared with the Underwriter.",
        "B. Use criteria-based sharing rules to share the Loan object with the Underwriter based upon the criteria defined in the criteria-based sharing.",
        "C. Create a lookup relationship from the Loan object to the User object. Use a trigger on the Loan object to create the corresponding record in the Loan_share object.",
        "D. Create an Apex Sharing Reason on the Loan object that shares the Loan with the Underwriter based upon the criteria defined in the Sharing Reason.",
      ],
      answer: "C",
      title: "Question 29",
    },
    {
      content:
        "Which two options can help mitigate the risks of import failures associated with large-volume bulk data loads?\n       Choose 2 answers.",
      options: [
        "A. Increase batch size.",
        "B. Group records by ParentID within a batch.",
        "C. Minimize user group hierarchy.",
        "D. Defer Sharing Calculation.",
      ],
      answer: "B,D",
      title: "Question 30",
    },
    {
      content:
        "A sales representative at Universal Containers needs assistance from specific product managers when selling certain deals. Product managers do not have access to opportunities they don't own, as the sharing model is Private, but need to gain access when they are assisting with a specific deal. How can an Architect accomplish the requirement?",
      options: [
        "A. Enable account team and allow users to add the product manager.",
        "B. Enable opportunity teams and allow users to add the product manager.",
        "C. Create a sharing rule to allow the product manager to access the opportunity.",
        "D. Use similar opportunities to share opportunities related to the product manager.",
      ],
      answer: "B",
      title: "Question 31",
    },
    {
      content:
        "Universal Containers has created a Reimbursement Custom Object to capture requests for reimbursement of expenses related to office supplies. The Reimbursement requests are sometimes sensitive and the Team Leads should not have access to the Reimbursement records submitted by the Users in the Call Center Agent role.\n       The Director of Support will require access to all Reimbursement records. The role hierarchy is set as follows:\n       Call Center Agent role reports to Team Lead role, which Reports to the Director of Support. Which steps would the Architect take to ensure proper sharing in this Role Hierarchy structure assuming Private Sharing Setting for the Reimbursement Object?",
      options: [
        "A. Use an Approval Process to change the owner of the Reimbursement record upon submission to the Director of Support",
        "B. Disable Grant Access Using Hierarchies for the Object and create a Sharing Rule to enable sharing to the Director of Support",
        "C. The sharing scenario described will occur without any special configuration choices being made by the Architect",
        'D. Leave the Reimbursement Object in "Deployed" Status and set the Director of Supports Profile to "View All" in the object permissions.',
      ],
      answer: "B",
      title: "Question 32",
    },
    {
      content:
        "Universal Containers (UC) has a requirement to expose a web service to their business partners. The web service will be used to allow each business partner to query UC's Salesforce instance to retrieve the status of orders. The business partner should only be allowed access to orders for which the business partner is the fulfillment vendor. The Architect does not want the business partners to utilize the standard APIs and would prefer a custom API be developed. Which three design elements should the Architect consider in order to ensure the data security of the solution?\n       Choose 3 answers",
      options: [
        'A. Develop a custom Apex web service using the "With Sharing" keyword.',
        "B. Provide each partner with their own Salesforce login set to API Enabled on the profile.",
        "C. Develop a custom Apex web service with a fulfillment ID input attribute",
        "D. Query the Orders object with Dynamic SOQL based upon the fulfillment ID.",
        "E. Set the Orders object's sharing settings to Private in the Org-Wide Defaults",
      ],
      answer: "A,D,E",
      title: "Question 33",
    },
    {
      content:
        "Universal Containers has successfully implemented a large Service Cloud rollout for their national call center\n       3 months ago. One of their largest customer accounts, United Automotive, has over 15,000 open cases. Agents are now having trouble opening new cases for United Automotive. When they try to create a case, the following Error messages appear for them UNABLE_TO_LOCK_ROW They notice that this only occurs for the United Automotive account. If they try to save the case again it will usually work, but the problem seems to be happening more and more often. What option should the Architect recommend?",
      options: [
        "A. Review all Case Sharing Rules and consolidate where appropriate to reduce the total number of sharing rules.",
        "B. Review all Account sharing rules to ensure that the Customer Service team has Read/Write access to the United Automotive Account.",
        "C. Review the Customer Service Profile to ensure that they have Read/Write access to the appropriate Case and Account Fields.",
        "D. Review the Account structure to split the United Automotive account into multiple branch accounts.",
      ],
      answer: "D",
      title: "Question 34",
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
      title: "Question 35",
    },
    {
      content:
        'What is the security vulnerability in the following code snippet?\n       <apex:form>\n       <apex:commandButton rerender="outputIt" value="Update It"/>\n       <apex:inputText value="{ !myTextField}"/>\n       </apex:form>\n       <apex:outputPanel id="outputIt">\n       Value of myTextField is <apex:outputText value="{!myTextField}" escape="false"/>\n       </apex:outputPanel>',
      options: [
        "A. Arbitrary Redirects",
        "B. Cross-Site Scripting",
        "C. SOQL Injection",
        "D. Access Control",
      ],
      answer: "D",
      title: "Question 36",
    },
    {
      content:
        "Universal Containers has a custom object to maintain Job information with a private sharing model. The Delivery group is distributed through the Role Hierarchy based on geography. As the Delivery group often collaborates on Jobs, all users in the Delivery profile required View access to all Job records. In special case, the Delivery user who owns a job must be able to grant a Product Development user access to a Job record. Which two platform features can be used to support these requirements?\n       Choose 2 answers",
      options: [
        "A. Criteria-based Sharing Rules",
        "B. Manual Sharing",
        'C. "View All" Profile settings',
        "D. Owner-based Sharing Rules",
      ],
      answer: "B,C",
      title: "Question 37",
    },
    {
      content:
        'When writing test methods, what functionality is verified by the system method"runAs()"?',
      options: [
        "A. Enforcement of user's public group assignments.",
        "B. Enforcement of user permissions.",
        "C. Enforcement of a user's field-level security.",
        "D. Enforcement of a user's record sharing.",
      ],
      answer: "D",
      title: "Question 38",
    },
    {
      content:
        "Universal Containers has Public Read Only sharing settings on the Opportunity object. What Opportunity access options can the user see while adding account team members to the Account?",
      options: [
        "A. Read Only",
        "B. Private",
        "C. Private and Read Only",
        "D. Read Only and Read/Write",
      ],
      answer: "D",
      title: "Question 39",
    },
    {
      content:
        'Which three areas should the Architect review in order to increase performance of "Record Access" and\n       "Sharing" calculations?\n       Choose 3 answers.',
      options: [
        "A. Custom Object data, to ensure that no Account has more than 10,000 Custom Objects that look up to it.",
        "B. Apex Managed Sharing triggers, to ensure that no trigger is querying more that 10,000 Object records.",
        "C. Opportunity data, to ensure that no Account has more than 10,000 Opportunity records that are related to it.",
        "D. Record ownership, to ensure that no user owns more than 10,000 Object records in the system.",
      ],
      answer: "A,C,D",
      title: "Question 40",
    },
    {
      content:
        "Universal Containers is implementing a community of High-Volume Community users. Community users should be able to see records associated to their Account or Contact record. The Architect is planning to use a Sharing Set to provide access to the records. When setting up the Sharing Set, certain objects are not available in the list of Available Objects. Which two reasons explain why an object is excluded from the list of Available Objects in a Sharing Set?",
      options: [
        "A. The custom object does not have a lookup to Accounts or Contacts.",
        "B. The object is a custom object, and therefore not available for a sharing set.",
        "C. The object's Organization-Wide sharing setting is set to Private.",
        "D. The object's Organization-Wide sharing setting is set to Public Read/Write.",
      ],
      answer: "A,D",
      title: "Question 41",
    },
    {
      content:
        "Universal Containers has developed Apex code to manually create AccountShare records to grant specific users access to individual Accounts. What must the Architect do to ensure the AccountShare records are not deleted when the owner of the Account is changed?",
      options: [
        'A. Create the share records in a class with the "Without Sharing" keyword.',
        "B. Create the share records with the Delete on Owner Change field set to false.",
        "C. Create the share records and set the RowCause to Manual.",
        "D. Create the share records and set the RowCause to a custom Apex Sharing Reason.",
      ],
      answer: "D",
      title: "Question 42",
    },
    {
      content:
        "How should the Architect ensure that object-level security is enforced within a custom Visualforce application that uses a standard Apex controller on the Lead object?",
      options: [
        "A. Use the Schema.DescribeSObjectResult isAccessible() method in the Apex controller.",
        "B. Use the {!$ObjectType.lead.accessible} expression within the Visualforce page.",
        "C. Use the runAs() method to enforce user permissions in the Apex controller.",
        'D. Use the "With Sharing" keyword when defining the Visualforce page.',
      ],
      answer: "B",
      title: "Question 43",
    },
    {
      content:
        'There is a custom object, Job, that has OWD set to "Private". It contains extremely private information that should only be available to the record owner and the hiring manager that is associated through a user Lookup field on the object.\n       What is the best solution to grant access?',
      options: [
        "A. Use Apex Managed Sharing to grant the access to the hiring manager.",
        "B. Have the record owner manually share the record to the hiring manager.",
        "C. Do nothing, the OWD will grant the access.",
        "D. Create a workflow rule to grant access to the hiring manager.",
      ],
      answer: "A",
      title: "Question 44",
    },
    {
      content:
        "At Universal Containers, the Sales VP likes to re-assign Opportunity Teams every six months. Each Opportunity Team has the following resources:\n       - AE (owner)\n       - Sales Engineer\n       -Vertical Overlay\n       - Sales Ops\n       What should the Architect use to re-assign Opportunity Team members so they have access to the appropriate Opportunity records?\n       Choose one answer:",
      options: [
        "A. Build a Visualforce page that will query the default team and update open Opportunities.",
        "B. Use the Mass Reassign Opportunity Team wizard on the Opportunity Tab Home Page.",
        'C. From the User Setup menu, click "Update Team members on open Opportunities."',
        'D. From the Opportunity record detail page, use the "Update Team Members" function.',
      ],
      answer: "B",
      title: "Question 45",
    },
    {
      content:
        "What feature in Salesforce is needed to restrict access to a custom object that has Public Read/Write access?",
      options: [
        "A. Role Hierarchy",
        "B. Record Type",
        "C. Profile",
        "D. Page Layout",
      ],
      answer: "C",
      title: "Question 46",
    },
    {
      content:
        "Universal Containers has requirement for the Architect to develop Apex Managed Sharing code for the custom Job object. The sharing settings for the Job object are set to Private.\n       When assigning access level for the record, which two lines of code will cause a DML exception on insert to the database?\n       Choose 2 answers",
      options: [
        "A. Objectname.AccessLevel='Read'",
        "B. Objectname.AccessLevel='None'",
        "C. Objectname.AccessLevel='Edit'",
        "D. Objectname.AccessLevel='All'",
      ],
      answer: "B,D",
      title: "Question 47",
    },
    {
      content:
        "Universal Containers has created a custom object to store highly confidential client relationship data with Private sharing settings. Which two options would an Architect choose to ensure access only to the record owner and the administrator?\n       Choose 2 answers.",
      options: [
        'A. Disable the "Create" permission on all other profiles.',
        'B. Disable the "Read" permission on all other profiles.',
        'C. Disable "Grant Access Using Hierarchies."',
        'D. Disable the "View All" permission on all other profiles.',
      ],
      answer: "C,D",
      title: "Question 48",
    },
    {
      content:
        "Which three advanced tools can Salesforce enable for large-scale role hierarchy realignments in organizations with large data volumes?\n       Choose 3 answers.",
      options: [
        "A. Deferred Sharing Calculation",
        "B. Granular Locking",
        "C. Partitioning by Divisions",
        "D. Skinny Table Indexing",
        "E. Parallel Sharing Rule Recalculation",
      ],
      answer: "A,C,D",
      title: "Question 49",
    },
    {
      content:
        "Universal Containers does not want the Users in the Custom Sales Department Profile to be able to delete Opportunities. How would the Architect prevent a certain set of users from deleting Opportunities?",
      options: [
        "A. Override the Standard button with a Visualforce Page that warns them that they do not have permission to delete.",
        "B. Remove the Delete button from the Opportunity Page Layout and Record Type settings.",
        "C. Create a Validation Rule that checks the User's Profile before allowing the IsDeleted flag to be set to True.",
        'D. Remove the "Opportunity Delete" Permission from the Sales Team\'s User Profile in the Object Permissions.',
      ],
      answer: "D",
      title: "Question 50",
    },
  ],
});
