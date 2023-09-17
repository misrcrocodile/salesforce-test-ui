window.testContent = window.testContent || [];
var testId = "Salesforce.Sharing-and-Visibility-Designer";
var testName = "Salesforce.Sharing-and-Visibility-Designer";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "Salesforce.Sharing-and-Visibility-Designer.v2022-04-11.q147",
  content: [
    {
      content:
        "Universal Containers does not want the Users in the Custom Sales Department Profile to be able to delete Opportunities. How would the Architect prevent a certain set of users from deleting Opportunities?",
      options: [
        "A. Override the Standard button with a Visualforce Page that warns them that they do not have permission to delete.",
        "B. Create a Validation Rule that checks the User's Profile before allowing the IsDeleted flag to be set to True.",
        'C. Remove the "Opportunity Delete" Permission from the Sales Team\'s User Profile in the Object Permissions.',
        "D. Remove the Delete button from the Opportunity Page Layout and Record Type settings.",
      ],
      answer: "C",
      title: "Question 1",
    },
    {
      content:
        "Universal Containers (UC) has 200 distributors that use Partner Community Licenses.Partners cannot see each other's data, but UC is also trying to give more visibility to certain individuals at a distributor. Which scalable solution would an architect recommend that will give users in the partner manager role access to all Case and Container records owned byother partner managers and partner users (but not the partner executive) at the same distributor?",
      options: [
        "A. Give Super User permission to the partner manager users.",
        "B. Create Sharing sets.",
        "C. Create a permission set granting the View All permission to Case and Container records.",
        "D. Create ownership-based sharing rules for your distributors.",
      ],
      answer: "A",
      title: "Question 2",
    },
    {
      content:
        "The Finance team at Universal Containers usually does not need access to Account and Contract records A .. given Opportunity access for a big deal to help with tax calculation. She can now also access Account and C..Which two reasons could be causing this issue? Choose 2 answers",
      options: [
        "A. Account records can be accessed due to implicit sharing from Opportunity.",
        "B. Contact records can be accessed due to implicit sharing from Opportunity.",
        "C. Contact records can be accessed due to implicit sharing from Account.",
        "D. Account records can be access due to role hierarchy.",
      ],
      answer: "A,C",
      title: "Question 3",
    },
    {
      content:
        "Universal Containers' organization wide-defaults model is private for the Account object. A sales repeats to opportunity records.Which level of access will the sales rep have to the related account record?",
      options: [
        "A. Read/Create/Edit access",
        "B. Read-only access",
        "C. Read/Create access",
        "D. No access",
      ],
      answer: "A",
      title: "Question 4",
    },
    {
      content:
        "Universal Containers has developed an AppExchange managed package for their distribution partners, which required a private key to be generated for each partner and used by the code. Universal Containers support representatives must be able to access the private key value to debug connection issues, but it must not be possible for the partner to access the value.How can the Architect best support this requirement?",
      options: [
        "A. Store the value in a static variable in a class included in the managed package.",
        "B. Store the value in the text field on a list custom setting in the managed package.",
        "C. Store the value in an encrypted field on a custom object in the package.",
        "D. Store the value in a text field on a protected custom setting in the package.",
      ],
      answer: "B",
      title: "Question 5",
    },
    {
      content:
        "To reduce the case time resolution and improve customer satisfaction, Universal Containers (UC) wants to allow specialized marketing consultants to have edit access to Case records of VIP customers. These casts should be visible only to the support rep who owns the case and the marketing consultants.Which recommendation should a Salesforce architect give to allow this scenario?",
      options: [
        "A. Case organization-wide default Public Read Only and Case Team with Read permission.",
        "B. Case organization wide default Private and Case Team with Read/Edit permission.",
        "C. Case organization-wide default Private, role hierarchy, and Read Only ownership-based sharing rule.",
        "D. Case organization-wide default Private and Account Team with Read/Edit permission.",
      ],
      answer: "B",
      title: "Question 6",
    },
    {
      content:
        "A custom ServiceFeedback object is used to collect partner feedback. ServiceFeedback records should be available to all internal employees. The OWD is set to Private for external users so partners cannot see feedback from other partner users.How can the Architect give access to all internal employees?",
      options: [
        "A. Create an Owner based sharing rule for all ServiceFeedback records owned by Partners.",
        "B. Create a trigger on ServiceFeedback to change ownership to an internal employee.",
        "C. Set OWD, for Internal Users to Public Read Only.",
        "D. Ensure all the internal users are above the partners in the role hierarchy.",
      ],
      answer: "C",
      title: "Question 7",
    },
    {
      content:
        "Universal Containers has a global 24x7 Salesforce.com implementation that supports Sales, Services, Order Management, and various other parts of their business. They have a nested territory hierarchy, 10,000 sales users, and 20,000 support agents. Territory changes happen daily. The demand for new applications and changes to the platform is high and they follow an agile development methodology and deliver new releases every two weeks on the platform. What Salesforce.com feature would help the system recover from a maintenance restart on Salesforce.com servers?",
      options: [
        "A. Enable Filter -Based Opportunity Territory Assignment.",
        "B. Enable Deferred Sharing Rule recalculation.",
        "C. Enable Parallel Sharing Rule recalculation.",
        "D. Enable Granular Locking on the system.",
      ],
      answer: "B",
      title: "Question 8",
    },
    {
      content:
        "A sales rep (John) at Universal Containers (UC) requested to update information in an account record where he has READ only access. John requested the EDIT access permission from the owner of the record (Paul). Paul manually shared the record with John. Assuming the OWD of the Account object is Public Read-Only, what is the impact in the system?",
      options: [
        'A. New AccountShare record is created. Row Cause is "Manual" and Access Level is "Read/Write".',
        'B. Existing AccountShare record is updated. Row Cause is "Owner" and User/Group is "John".',
        'C. New AccountShare record is created. Row Cause is "Owner" and Access Level is "Full".',
        'D. Existing AccountShare record is updated. Row Cause is "Manual" and Access Level is "Read/Write".',
      ],
      answer: "B",
      title: "Question 9",
    },
    {
      content:
        "Universal Containers has a set of Account Management users that should only see Accounts once the Account becomes a customer. The Type field on the Account identifies whether the Account is a Prospect, Customer, Partner or Other. Which two methods could an Architect use to enable this sharing requirement, assuming a private sharing model for Accounts?Choose 2 answers.",
      options: [
        "A. Create a Public List View, where Accounts of Type Customer are included and share the List view with the Account Management public group.",
        "B. Institute a process that calls for the Account Manager to be added to the Account Team once the Account becomes a customer.",
        "C. Create an Account Sharing Rule that shares all Accounts owned by Sales to be shared with Account Management roles and subordinates.",
        "D. Create a Criteria-based Sharing rule that shares the Account to the Account Management Group when the Type is Customer.",
      ],
      answer: "B,D",
      title: "Question 10",
    },
    {
      content:
        "The system administrator at UC has created two list views called List1 and List2. One group of users should only see List1 and the second group should only see list2. Two public groups were created to restrict visibility to the respective list views. However, users in both groups are able to see both list views. What system permission in their profile enabled the users to see all list views?",
      options: [
        "A. Manage private list views",
        "B. Manage public list views",
        "C. Manage custom permissions",
        "D. Manage custom list views",
      ],
      answer: "B",
      title: "Question 11",
    },
    {
      content:
        "Universal Containers has a custom object, Employee Review, with an Organization-Wide Default security setting of Private. A user lookup on the Employee Review object is populated when a reviewer is assigned to perform a review. How can this user be granted edit access to the record if they are not the owner?",
      options: [
        "A. The user will be granted access to the record automatically when the user lookup is populated.",
        "B. Create a criteria-based sharing rule to share the record with the user in the lookup field.",
        "C. Create an Apex trigger to insert an Employee Review Share record with an access level of Edit.",
        "D. Create a workflow rule to share the Employee Review record with the user in the lookup field.",
      ],
      answer: "B",
      title: "Question 12",
    },
    {
      content:
        "Sales managers at Universal Containers (UC) have requested viewing customer invoices in Salesforce .. system. The architect at UC decided to surface the customer invoices in Salesforce using external objects a..Configured an external object called Invoice.Created a lookup relationship between account and the invoiceHow can the architect grant the sales managers access to the customer invoices data?",
      options: [
        "A. By controlling the invoices object permission on the sales manager's profile.",
        "B. By creating sharing rules to share the invoice records with users in sales manager roles.",
        "C. By creating a sharing set a share invoice with users in a sales manager role.",
        "D. By using manual sharing to share invoices with relevant sales managers.",
      ],
      answer: "A",
      title: "Question 13",
    },
    {
      content:
        "In the Salesforce org used by Cosmic Service Solutions, a Visualforce page has been created to allow users to view and update information related to the records of a custom object called 'Shipment'. A developer would like to enforce both field-level and object-level security in the custom controller of the page. Which of the following classes can be utilized for this use case?Choose 2 answers.",
      options: [
        "A. Schema.DescribeSObject",
        "B. Schema.DescribeField",
        "C. Schema.DescribeSObjectResult",
        "D. Schema.DescribeFieldResult",
      ],
      answer: "C,D",
      title: "Question 14",
    },
    {
      content:
        "Universal Containers has two custom objects: Job and Job Interview. The Job Interview object has a lookup relationship to Job. Both objects are set to Private in sharing settings. The HR team will own all Job and Job Interview records. They have asked their Salesforce Architect to automatically share the Job Interview when the Interviewer (lookup to user record) has been populated. The interviewer can be from any department. What method should the Architect use to achieve this requirement?",
      options: [
        "A. Build a standard sharing rule between Job Interview and the Interviewer.",
        "B. Build a workflow email notification to notify the interviewer of the record assignment.",
        "C. Build apex Managed Sharing code to share Job Interview with the Interviewer user.",
        "D. Build a criteria-based sharing rule between the Job Interview and the Interviewer.",
      ],
      answer: "C",
      title: "Question 15",
    },
    {
      content:
        "Which users have access to Opportunity records owned by an external user, assuming no other changes to the sharing model have been implemented?",
      options: [
        "A. The record owner only.",
        "B. The record owner and all internal users.",
        "C. The record owner and any user above the external user in the role hierarchy.",
        "D. The record owner and any user below the external user in the role hierarchy.",
      ],
      answer: "C",
      title: "Question 16",
    },
    {
      content:
        'Universal Containers has the following Sharing Settings for their Org:Account = PrivateContact = Controlled by ParentOpportunity = PrivateCase = PrivateThey have enabled "Default Account Teams" and have trained users to set up their Default Team. Which three access levels can be set on the Account Team Member?Choose 3 answers',
      options: [
        "A. Case Acces",
        "B. Contact Access",
        "C. Contract Access",
        "D. Opportunity Access",
        "E. Account Access",
      ],
      answer: "A,D,E",
      title: "Question 17",
    },
    {
      content:
        'Universal Containers is updating its Organization-Wide Sharing Settings for the Account Object from a"Public Read/Write" model to a "Private" model, so that they can hide certain national accounts from sales reps and sales managers. These national accounts should only be accessible by sales directors and above.Universal Container\'s Role Hierarchy matches its organizational hierarchy. Which two options should the Architect consider when designing the solution? Choose 2 answers',
      options: [
        "A. If a sales rep is added to the Opportunity Team for a national account, they will gain access to account data.",
        "B. National accounts must be owned by a user who is above the sales managers in the Role Hierarchy.",
        "C. Sales directors will need a sharing rule created so that they can see accounts owned by Sales Users.",
        "D. Apex managed sharing will have to be disabled for the account object to protect the national accounts.",
      ],
      answer: "A,B",
      title: "Question 18",
    },
    {
      content:
        'Universal Containers has junction object called "Job Production Facility", with 2 master-detail relationships to the Job and Production Facility custom objects. Both master records have a private sharing model.What statement is true if a user\'s profile allows access (Create/Read) to the Job, but no access to the Production Facility Object?',
      options: [
        "A. The user will be granted read access to the Production Facility record",
        "B. The user will see the junction object but not the link to the Production Facility.",
        "C. The user will not be able to see the junction object records or the field values.",
        "D. The user will see the junction object and the link to the Production Facility.",
      ],
      answer: "C",
      title: "Question 19",
    },
    {
      content: "What can be done in Profile which is not in Permission Set",
      options: [],
      answer: "  Login Hours, Page Layout assignment ",
      title: "Question 20",
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
      title: "Question 21",
    },
    {
      content:
        "Universal containers (UC) has a partner community for its 200 distributors. UC customer accounts are .. organization-wide default setting for the custom Delivery object is private.How can an architect advise UC to grant all users at a distributor access to delivery records for all customer distributor?",
      options: [
        "A. Create a criteria-based sharing rule that shares delivery record matching a distributor to the ...",
        "B. Create a Sharing set for the Distributor profile to grant access to the Delivery object.",
        "C. Create a criteria-based sharing rule that shares delivery records matching the Distributor to user distributor.",
        "D. Give ownership of the delivery record to a distributor user.",
      ],
      answer: "B",
      title: "Question 22",
    },
    {
      content:
        "Universal Containers' organization wide-defaults model is private for the Account object. A sales repeats to opportunity records.Which level of access will the sales rep have to the related account record?",
      options: [
        "A. Read/Create/Edit access",
        "B. Read/Create access",
        "C. No access",
        "D. Read-only access",
      ],
      answer: "D",
      title: "Question 23",
    },
    {
      content:
        "How should the Architect ensure that OBJECT-LEVEL SECURITY is enforce within a custom Visualforce application that was a standard Apex controller on the Lead object?",
      options: [
        "A. Use the {!$ObjectType.lead.accessible} expression within the Visualforce page.",
        "B. Use the Schema.DescribeSObjectResultisAccessible() method in the Apex controller.",
        'C. Use the "With Sharing" keyword when defining the Visualforce page.',
        "D. Use the runAs() method to enforce user permissions in the Apex controller.",
      ],
      answer: "A",
      title: "Question 24",
    },
    {
      content:
        "Universal Container has developed a custom Visualforce page that will accept user input and must prefer returning the results to the users.Which two techniques should be used to ensure the users cannot perform a SOQL injection attack?",
      options: [
        "A. Use the with Sharing keyword on the controller.",
        "B. Escape double quotes in the user input.",
        "C. Use the escapesinglequotes() method to sanitize user input.",
        "D. Use bind variable in the SOQL query.",
      ],
      answer: "C,D",
      title: "Question 25",
    },
    {
      content:
        "UniversalContainers(UC)hasimplementedcustomercommunitywithcustomercommunitylicenses for their customers. UCrequested thatanyrecord owned by its customers should be accessible byUC users in the customer support role.How can an Architect configure the system to support the requirements?",
      options: [
        "A. Apex Sharing",
        "B. Sharing Set",
        "C. Sharing Rule",
        "D. Share Group",
      ],
      answer: "D",
      title: "Question 26",
    },
    {
      content:
        'Universal Containers (UC) service reps are assigned to a profile which has "View All" in Case object (Private OWD). To make sure service reps have access to all relevant information to attend to customer requests, which two details should a salesforce Architects consider?Choose 2 answers:',
      options: [
        "A. Service reps will not be able to access all UC contact records if they are controlled by parent.",
        "B. Service reps will be able to access all UC contact records if they are controlled by parent.",
        "C. Service reps will be able to access all the UC Account records due to Implicit Sharing.",
        "D. Service reps will not be able to access all the UC Accounts records because Account OWD is private.",
      ],
      answer: "A,D",
      title: "Question 27",
    },
    {
      content:
        "Universal containers (UC) service reps are assigned to a profile which has ''View All'' in Case object..To make sure service reps have access to all relevant information to attend to customer requests, which Architect consider?Choose 2 answers",
      options: [
        "A. Service reps will be able to access to Contact records due to Implicit Sharing.",
        "B. Service reps will be able to access to Contact records if they are Controlled by Parent.",
        "C. Service reps will NOT able to access to Contact records if they are controlled by Parent.",
        "D. Service reps will NOT able to access to Contact records because Account OWD is private",
      ],
      answer: "B",
      title: "Question 28",
    },
    {
      content:
        'Ursa Major Solar uses the Case object for tracking purposes. The company has initiated Case teams to allow several support representatives to manage the Cases.A user is currently creating a list view on the Case object.What are two "Filter by owner" options that the user sees? (Choose two.)',
      options: [
        "A. Public groups",
        "B. Queue owned cases",
        "C. My case teams",
        "D. Roles",
      ],
      answer: "B,C",
      title: "Question 29",
    },
    {
      content:
        "Universal Health is planning to store patient notes in Salesforce. Patient notes consist of long text notes taken by a use to document phone calls with a patient.A date audit has identified that these notes can contain Personally Identifiable Information (PII) and Personal Health Information (PHI). The regulatory requirements state that this data must be encrypted at rest as well as in transit.What should the Architect do in order to make sure Universal Health stays compliant?",
      options: [
        'A. Create a new Custom Field of type "Text (Encrypted)" and move the patient notes data into the new field.',
        "B. No action is required; all Salesforce data is encrypted at rest as part of Salesforce's standard trust measures.",
        "C. Use an Apex trigger and the Apex Crypto class to encrypt patient notes as soon as they are saved to Salesforce.",
        "D. Enable Salesforce Shield Platform Data Encryption and mark the patient notes field as encrypted.",
      ],
      answer: "C",
      title: "Question 30",
    },
    {
      content:
        "Cosmic Enterprises has created a custom object called 'Promotion' to store information about promotions offered by the company. The organization-wide default sharing setting of this custom object has been set to'Private' and granting access via hierarchies has been disabled for it. Certain records of this object need to be shared with all the users who are assigned to the role of 'Sales Agent'. What can be done to meet this requirement using Apex?Choose 1 answer.",
      options: [
        "A. Create 'Promotion__Share' records and use a sharing group associated with the 'Sales Agent' role to grant access.",
        "B. Create 'Promotion__Share' records and use a public group that consists of the 'Sales Agent' role to grant access.",
        "C. Create 'Promotion__Share' records and use user IDs to grant access.",
        "D. Create 'Promotion__Share' records and use a public group that consists of the sales agents to grant access.",
      ],
      answer: "A",
      title: "Question 31",
    },
    {
      content:
        "The VP of Sales at Get Cloudy Consulting wants to give one sales member the ability to view other sales members' sales numbers as a point of comparison.If a Private model is being used, which two permissions are needed to create a dashboard for this purpose?(Choose two.)",
      options: [
        "A. Manage Custom Report Types",
        "B. Customize Application",
        "C. View All Data",
        "D. Manage Dashboards",
      ],
      answer: "C,D",
      title: "Question 32",
    },
    {
      content:
        "In Enterprise Territory Management, which of the following are capabilities of filter-based opportunity territory assignment?Choose 2 answers.",
      options: [
        "A. The filter-based opportunity territory assignment job can only be run when opportunities are updated.",
        "B. An option can be selected to run the filter-based opportunity territory assignment job automatically when opportunities are created.",
        "C. Users can manually define a filter based on which opportunities are automatically assigned to territories.",
        "D. An apex class can be created to automatically assign opportunities to territories based on custom criteria.",
      ],
      answer: "B,D",
      title: "Question 33",
    },
    {
      content:
        "Ursa Major Solar wants the ability to hide specific regional accounts from sales reps and sales managers. Only roles that are sales executive, or above, should be able to access regional accounts. The company plans to update their Organization-Wide Sharing Settings for the Account Object from a Public Read/Write model to a Private model to accomplish their goal? Ursa Major Solar's Role Hierarchy matches its organizational hierarchy.What are two approaches an Architect should consider when designing the solution? (Choose two.)",
      options: [
        "A. If a sales rep is added to the Opportunity Team for a regional account, they will gain access to account data.",
        "B. Ensure that Apex managed sharing is disabled for the account object to protect the regional accounts.",
        "C. Sales executives will need a sharing rule created so that they can see accounts owned by Sales Users.",
        "D. Regional accounts must be owned by a user who is above the sales managers to the Role Hierarchy.",
      ],
      answer: "A,D",
      title: "Question 34",
    },
    {
      content:
        "Cosmic Solutions is planning a large-scale sales realignment which will involve extensive changes to the organization's structure and updates to large amounts of data. Which of the following features would a Salesforce Architect recommend to optimize the performance of the sales realignment?Choose 3 answers.",
      options: [
        "A. Skinny Tables",
        "B. Granular Locking",
        "C. Deferred Sharing Maintenance",
        "D. Creation of Custom Indices",
        "E. Parallel Recalculation of Sharing Rules",
      ],
      answer: "B,C,E",
      title: "Question 35",
    },
    {
      content:
        "Cosmic Solutions has set the organization-wide default sharing setting for the Account object to 'Public Read Only'. Default access to contact records is 'Controlled by Parent', and the sharing settings for Case and Opportunity have been set to 'Private' and 'Public Read/Write' respectively. While defining an account team on a record, which of the following objects will be available for specifying the 'Read Only' access level?Choose 2 answers.",
      options: ["A. Opportunity", "B. Contact", "C. Account", "D. Case"],
      answer: "C,D",
      title: "Question 36",
    },
    {
      content:
        "A sales rep of Cosmic Sporting Goods has defined an opportunity team to collaborate with two sales users from a different division. A sales manager, who is above the sales rep in the role hierarchy, would like to transfer the ownership of the opportunity to a sales rep who belongs to the division of the two sales users.Which of the following are valid considerations regarding ownership transfer?Choose 3 answers.",
      options: [
        "A. A user with the 'Transfer Record' permission can transfer the ownership of the opportunity.",
        "B. A system administrator can transfer the ownership of the opportunity.",
        "C. The members of the opportunity team can transfer the ownership of the opportunity.",
        "D. The opportunity owner can transfer the ownership of the opportunity.",
        "E. The sales manager cannot transfer the ownership of the opportunity.",
      ],
      answer: "A,D,E",
      title: "Question 37",
    },
    {
      content:
        "The Sales Director of Cosmic Enterprises would like to allow sales reps to view, edit and create opportunities, but they should not be able to delete any opportunities in Salesforce. They are currently assigned to a custom profile and a role in the role hierarchy. The profile is not assigned to any other type of users in the company. A sharing rule has also been created to give the sales reps access to opportunities owned by a sales manager who is a member of a public group. What should an Architect recommend for this requirement?Choose 1 answer.",
      options: [
        "A. Create a validation rule that prevents the deletion of opportunities.",
        "B. Edit the sharing rule to redefine access to opportunities in Salesforce.",
        "C. Make sure that the existing custom profile does not have the 'Delete' permission on the Opportunity object.",
        "D. Create a new profile without the 'Delete' permission on the Opportunity object and assign it to the sales reps.",
      ],
      answer: "C",
      title: "Question 38",
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
      title: "Question 39",
    },
    {
      content:
        "Universal containers (UC) has a partner community for its 200 distributors. UC customer accounts are .. organization-wide default setting for the custom Delivery object is private.How can an architect advise UC to grant all users at a distributor access to delivery records for all customer distributor?",
      options: [
        "A. Give ownership of the delivery record to a distributor user.",
        "B. Create a criteria-based sharing rule that shares delivery records matching the Distributor to user distributor.",
        "C. Create a Sharing set for the Distributor profile to grant access to the Delivery object.",
        "D. Create a criteria- based sharing rule that shares delivery records matching the Distributor to users of a Public Group created for the distributor.",
      ],
      answer: "C",
      title: "Question 40",
    },
    {
      content:
        "Universal Containers is planning to pilot a new application to a small set of Sales Reps.What is the optimal way to grant inly this Sales Reps access to the new functionality, while hiding ..",
      options: [
        "A. Revoke access to legacy function in the Sales Rep profile and create a permission set for the ..",
        "B. Create a permission set to grant access to the new functionality and hide the old functionality.",
        "C. Create new user records for the pilot user that they will use for the pilot.",
        "D. Clone the Sales Rep profile, adjust settings, and assign the pilot users the new profile.",
      ],
      answer: "D",
      title: "Question 41",
    },
    {
      content:
        "Universal Containers (UC) has created a public group with certain Sales Engineers to help on complex deals and a sharing rule to grant access to these opportunities. Opportunity OWD is private.What is the impact of these sharing settings?",
      options: [
        "A. Sales Engineers Managers and their managers in the role hierarchy will also have access to these records.",
        "B. Sales Engineers that have a similar role of the Sales Engineers of the public group will also have access to these records.",
        "C. Sales Engineers direct reports will also have access to these records.",
        "D. Subordinates of Managers who have Sales Engineers in the public group will also have access to these records.",
      ],
      answer: "A",
      title: "Question 42",
    },
    {
      content:
        "Universal Containers (UC) has implemented Customer Community with customer community license for .. any record owned by its customers should be accessible by UC users in the customer support role.How can an Architect configure the system to support the requirements?",
      options: [
        "A. Sharing Set",
        "B. Sharing Rule",
        "C. Share Group",
        "D. Apex Sharing",
      ],
      answer: "C",
      title: "Question 43",
    },
    {
      content:
        "How would you make sure Visualforce page is security proof? Choose 3 answers",
      options: [
        "A. Use debug to check hijacked requests",
        "B. Use web application tool for security",
        "C. Manually check for cross site",
        "D. Manually check for sql injection",
        "E. Submit to force security scanner",
      ],
      answer: "A,B,E",
      title: "Question 44",
    },
    {
      content:
        "Universal Containers has successfully implemented a large Service Cloud rollout for their national call center 3 months ago.One of their largest customer accounts, United Automotive, has over 15,000 open cases.Agents are now having trouble opening new cases for United Automotive.When they try to create a case, the following Error messages appear for them UNABLE_TO_LOCK_ROW They notice that this only occurs for the United Automotive account. If they try to save the case again it will usually work, but the problem seems to be happening more and more often. What option should the Architect recommend?",
      options: [
        "A. Review the Customer Service Profile to ensure that they have Read/Write access to the appropriate Case and Account Fields.",
        "B. Review all Account sharing rules to ensure that the Customer Service team has Read/Write access to the United Automotive Account.",
        "C. Review all Case Sharing Rules and consolidate where appropriate to reduce the total number of sharing rules.",
        "D. Review the Account structure to split the United Automotive account into multiple branch accounts.",
      ],
      answer: "D",
      title: "Question 45",
    },
    {
      content:
        "Cloud Kicks recently decided to change its role hierarchy.After this change was deployed, multiple staff members at Cloud Kicks reported to management that they can now view reports that they do not own and should not have access to.What should the Architect do to assess the cause of the issue?",
      options: [
        "A. While logged in as the System Administrator, navigate to a sample account and use the Sharing button to determine who has access.",
        "B. While logged in as one of the staff members, navigate to their user record and inspect their profile and role membership.",
        "C. While logged in as the System Administrator, use the Field Accessibility Viewer to view a matrix of who has access to Accounts.",
        "D. While logged in as the one of the staff members, navigate to a sample account and use the Sharing button to determine who has access.",
      ],
      answer: "D",
      title: "Question 46",
    },
    {
      content:
        "Cosmic Enterprises has set up a community with many users assigned to a profile with the Partner Community license. The organization-wide default setting for the Opportunity object has been set to 'Private'. All opportunities that have reached the 'Closed Won' stage need to be shared with the users who have been assigned to the 'Partner Executive' role on a partner account. Which of the following solutions can be utilized for this requirement?Choose 1 answer.",
      options: [
        "A. Create a permission to grant access to additional records",
        "B. Create a sharing set and configure access for the Opportunity object",
        "C. Create a sharing rule based on record ownership",
        "D. Create a sharing rule based on criteria",
      ],
      answer: "D",
      title: "Question 47",
    },
    {
      content:
        "A developer at Universal Containers is building an integration within a managed package for their internal org that requires login to an external system. The end point requires basic authentication. The Architect would like to ensure that the username and password are managed securely.Which three options should the Architect recommend to secure the credentials?Choose 3 answers",
      options: [
        "A. Store the credentials in the Apex code, which will not be available to non-admins.",
        "B. Store the credentials in protected custom settings that are used in the Apex Callout.",
        "C. Store the credentials in a custom object using encrypted fields.",
        "D. Store the credentials in Named Credentials that are used in the Apex Callout.",
        "E. Store the credentials in protected custom metadata that are used in the Apex Callout.",
      ],
      answer: "B,C,D",
      title: "Question 48",
    },
    {
      content:
        "Universal Container is creating a custom VF page to allow user to edit contact records. The developer has used an apex:outputField for the Phone field on the contact obj. What is the expected behavior if a user whitout FLS accesses the VF page?",
      options: [
        "A. The user is able to enter a value into the phone field",
        "B. The output field is visible to user",
        "C. The field is automatically removed from the page",
        "D. The user encounters an error while saving the record",
      ],
      answer: "C",
      title: "Question 49",
    },
    {
      content:
        "If you want to create some logic that will share certain records in APEX code, you just have to create special records that will open access to the desired records. The aim is to create records of certain type, for example , all share objects for custom objects are named as",
      options: [],
      answer: "  MyCustomObject__Share ",
      title: "Question 50",
    },
    {
      content:
        "Universal Containers has a custom Job object with a private sharing model. Based on the size and location of the Job, different teams must have access to edit the specific Job record. To support this requirement, Apex Managed Sharing has been implemented to share records with the required users. Since the teams change frequently, managed sharing recalculations need to be manually run frequently. What can the Architect do to optimize this process?",
      options: [
        "A. Create public groups for each team, and share the jobs with the groups instead of users.",
        "B. Change the sharing model on the Job object to Public Read/Write.",
        "C. Create a custom Visualforce page to edit the jobs and specify Without Sharing on the controller.",
        "D. Create a scheduled job to automatically run the sharing recalculations on a nightly basis.",
      ],
      answer: "A",
      title: "Question 51",
    },
    {
      content:
        "Universal Containers has set the Org-Wide Sharing Default for Accounts to Private and has created some sharing rules to extend access based on certain data access policies. An architect has been asked to review access to a certain set of key customer accounts.How might this review be conducted?",
      options: [
        "A. Run a Report on Sharing in the Admin Console.",
        "B. Use the Sharing button on each customer Account.",
        "C. Export the Account Share table and review.",
        "D. Log in as each user and Run the All Accounts List View.",
      ],
      answer: "C",
      title: "Question 52",
    },
    {
      content:
        "Cosmic Innovation is a startup company which sells different types of smart home solutions in Los Angeles, Miami, and New York. The company recently started using Salesforce to manage customers' accounts, contacts, and opportunities. A 'Private' sharing model is being used for all the records that are managed in Salesforce. Each city has its own sales manager and several sales agents who work under him. A sales manager should only be able to view account records that are owned by the sales agents of their own region.How should the role hierarchy be defined for this requirement?Choose 2 answers.",
      options: [
        "A. Create a separate role for each sales manager.",
        "B. Create one role for all the sales agents of the company.",
        "C. Create three roles for the sales agents in the three cities.",
        "D. Create one role for the three sales managers.",
      ],
      answer: "A,C",
      title: "Question 53",
    },
    {
      content:
        "Universal Containers has a strict security model enforced through object, field, and row-based security mechanisms. The Architect would like to ensure the security model is being thoroughly tested using Apex automated tests. Which three considerations should be made when using the runAs() method to design Apex until tests?",
      options: [
        "A. runAs () counts towards total DML statements issued within transaction",
        "B. runAs() does not enforce user permissions or field-level permissions in test classes",
        "C. runAs() can be used outside of test classes to bypass record-level security",
        "D. runAs() can be used inside of test classes to validate field-level permissions",
        "E. runAs() can be used inside of test classes to validate record-level security",
      ],
      answer: "A,B,E",
      title: "Question 54",
    },
    {
      content:
        "Universal Computers (UC) is looking to expand its delivery capabilities through a network of distributors that use a Partner Community license. UC employees currently can view all delivery records through the organization-wide default (OWD) setting of Public Read Only.Which approach would an architect recommend to limit the records a distributor can see?",
      options: [
        "A. Set the External OWD to Private for the Delivery object.",
        "B. Create an ownership-based sharing rule to grant access to the distributor.",
        "C. Create a criteria-based sharing rule to grant access to the distributor",
        "D. Remove Read permission from the distributor profile.",
      ],
      answer: "A",
      title: "Question 55",
    },
    {
      content:
        "What should a Salesforce architect recommend to make sure that users that gained access to a custom of sharing do not lose access to it when its owner is changed?",
      options: [
        "A. Use ''With Sharing'' keyword to make sure record visibility will be considered",
        "B. Create a new record in_Share object with RowCause ''Manual''",
        "C. Use ''runAS'' system method in Apex classes to enforce record visibility.",
        "D. Create a specific Sharing Reason for the custom object.",
      ],
      answer: "D",
      title: "Question 56",
    },
    {
      content:
        "Which features does Salesforce provide for restricting login access to the application?Choose 2 answers.",
      options: [
        "A. Organization-wide login hour restrictions",
        "B. Role-based IP restrictions",
        "C. Profile-based IP restrictions",
        "D. Profile-based login hour restrictions",
      ],
      answer: "C,D",
      title: "Question 57",
    },
    {
      content:
        "Universal Containers (UC) has recently changed its internal policy to follow market regulations and create an internal team to manage the collection process. Only this team should have access to Invoke records. currently, invoke is a child in a Master-Detail relationship to Account. Although related lists have been removed from the page layouts, some profiles stills have access to the invoice object.Which approach should an architect recommend to fix this problem?",
      options: [
        "A. Replace Account and Invoke Master Detail Relationship by a Lookup and remove Invoice Access from the unauthorized profiles,",
        "B. Create a new Profile with no access to the Invoice object and assign it to all unauthorized users.",
        "C. Create a Permission Set with No Access to the Invoice object and assign it to unauthorized users.",
        "D. Change the Invoke organization-wide default from Controlled by Parent to Private and remove invoke access from the unauthorized",
      ],
      answer: "D",
      title: "Question 58",
    },
    {
      content:
        "Universal Containers has set the Org-Wide Sharing Default for Accounts to Private and has created some sharing rules to extend access based on certain data access policies. An architect has been asked to review access to a certain set of key customer accounts. How might this review be conducted?",
      options: [
        "A. Run a Report on Sharing in the Admin Console.",
        "B. Export the Account Share table and review.",
        "C. Use the Sharing button on each customer Account.",
        "D. Log in as each user and Run the All Accounts List View.",
      ],
      answer: "B",
      title: "Question 59",
    },
    {
      content:
        "Universal Containers uses person accounts to represent retail customers and business accounts to represent commercial customers. The Retail Sales team should not have access to commercial customers but have access to ALL retail customers.With organization-wide default on Account set to Private, how might the architect meet these requirements?",
      options: [
        "A. Create an owner-based sharing rule on AccountContactRelation to grant access to at account contact roles records owned by sales reps.",
        "B. Create a criteria-based sharing rule giving Retail Sales role access to Accounts of type PersonAccount.",
        "C. Update Retail Sales profile to grant access to Person Account record type.",
        "D. Give View All access for Accounts to the Retail Sales profile.",
      ],
      answer: "B",
      title: "Question 60",
    },
    {
      content:
        "Sales managers at Universal Containers (UC) have requested viewing customer invoices in Salesforce ..system. The architect at UC decided to surface the customer invoices in Salesforce using external objects a..Configured an external object called Invoice.Created a lookup relationship between account and the invoiceHow can the architect grant the sales managers access to the customer invoices data?",
      options: [
        "A. By using manual sharing to share invoices with relevant sales managers.",
        "B. By creating sharing rules to share the invoice records with users in sales manager roles.",
        "C. By creating a sharing set a share invoice with users in a sales manager role.",
        "D. By controlling the invoices object permission on the sales manager's profile.",
      ],
      answer: "D",
      title: "Question 61",
    },
    {
      content:
        "Universal Containers (UC) implemented Sales Cloud and requested that sales agents have access to products the company sells and be able to create opportunities for its customers.What should the Organization-Wide Defaults (OWD) be for pricebook?",
      options: [
        "A. Use",
        "B. Public Read Only",
        "C. View",
        "D. Public Read Write",
      ],
      answer: "A",
      title: "Question 62",
    },
    {
      content: "What is a workaround to ownership data skew?",
      options: [],
      answer:
        "  You can minimize possible performance impacts by not assigning the user(s) to a role. ",
      title: "Question 63",
    },
    {
      content:
        "A group of executives has requested a convenient way to see daily metrics without having to log in to Salesforce. How would a developer accomplish this goal?",
      options: [
        "A. Create a series of daily recurring events providing the dashboard link.",
        "B. Schedule the dashboard for daily refresh and email distribution.",
        "C. Create a Workflow rule that sends a link to the dashboard in an email.",
        "D. The users' home page layouts to include a dashboard.",
      ],
      answer: "B",
      title: "Question 64",
    },
    {
      content:
        "Cosmic Supermarket will soon perform a large-scale realignment of account and opportunity assignments, sales teams, and territories. The administrator is considering the use of deferred sharing maintenance to postpone the processing of group maintenance operations and sharing recalculations until all the desired changes have been made in Salesforce. Which of the following are valid criteria for using this feature?Choose2 answers.",
      options: [
        "A. Size and complexity of the company's realignment tasks.",
        "B. Frequency of locking errors during updates.",
        "C. Flexibility to arrange a maintenance window with customers.",
        "D. Processing time associated with sharing rule recalculation.",
      ],
      answer: "A,C",
      title: "Question 65",
    },
    {
      content:
        "Cloud Kicks, a global corporation, has the following environment:- 50,000 users- 24x7 call center operated by 25,000 users, including both employees and contractors- A sales organization that has 15,000 usersThe sales organization began processing about 120,000 updates to opportunity custom fields called priority and NextStep. They also started processing 20,000 updates to a highly nested territory hierarchy.There was a third mass update on a Next Step field on the Action Plan custom object that has Case as a lookup field. Users started seeing a Group membership lock error in the system.What is a probable cause for this error?",
      options: [
        "A. Due to system-initiated sharing rule recalculation, there is Lock contention",
        "B. Due to Opportunity object updates, there is Lock contention on Account records",
        "C. Due to Action Plan custom object updates, there is Lock contention on Case records",
        "D. Due to Territory object updates, there is Lock contention on Territory object",
      ],
      answer: "A",
      title: "Question 66",
    },
    {
      content:
        "The system administrator of Cosmic Enterprises has created a dummy user in Salesforce. The user owns more than 15,000 account records that were recently obtained from a third-party database. A sharing rule has been created to share records owned by this user with all the sales managers and a few other users of the company.There are performance issues whenever there is a change in the role hierarchy. Which of the following actions should a Solution Architect recommend to improve performance?Choose 3 answers.",
      options: [
        "A. If possible, the dummy user should not be assigned to a role in the role hierarchy.",
        "B. An account hierarchy should be established for the accounts owned by the dummy user.",
        "C. The dummy user should be placed at the bottom of the role hierarchy.",
        "D. The dummy user should be placed at the top of the role hierarchy.",
        "E. No more than 10,000 account records should be owned by the dummy user.",
      ],
      answer: "A,D,E",
      title: "Question 67",
    },
    {
      content:
        "DreamHouse Realty uses a List View to show all open Leads that were created in the last quarter. This List View needs to be visible to certain groups of users.What ae two available options for sharing the List View? (Choose two.)",
      options: [
        "A. Manual Sharing",
        "B. Public Groups",
        "C. Roles and Subordinates",
        "D. Profiles",
      ],
      answer: "B,C",
      title: "Question 68",
    },
    {
      content:
        "Get Cloudy Consulting uses a strict security model. They enforce this model through object, field, and row- based security mechanisms. The Chief Technology Officer (CTO) at Get Cloudy Consulting wants to thoroughly test the security model, and an Architect decides to use Apex automated tests to fulfill the CTO's request.What are three considerations for the Architect when using the runAs() method to design Apex unit tests?(Choose three.)",
      options: [
        "A. runAs() can be used inside of test classes to validate field-level permissions",
        "B. runAs() can be used inside of test classes to validate record-level security",
        "C. runAs() does NOT enforce user permissions or field-level permissions in test classes",
        "D. runAs() counts towards total DML statements issued within the transaction",
        "E. runAs() can be used outside of test classes to bypass record-level security",
      ],
      answer: "B,C,D",
      title: "Question 69",
    },
    {
      content:
        "Cosmic Service Solutions has set up an integration with its on-premise database to update several Salesforce users and more than a million accounts and opportunities in Salesforce. The integration is going to update the role of several users and the ownership of thousands of records. What should a Salesforce Architect recommend to ensure that there are no locking errors during the update?Choose 1 answer.",
      options: [
        "A. Use parallel recalculation of sharing rules",
        "B. Change the organization-wide default setting of all objects to 'Public Read/Write'",
        "C. Enable the granular locking feature",
        "D. Use deferred sharing maintenance",
      ],
      answer: "C",
      title: "Question 70",
    },
    {
      content:
        "Universal Containers has set Partners users who will see records owned by partner users in roles below them in the hierarchy of which roles?",
      options: [],
      answer: "A",
      title: "Question 71",
    },
    {
      content:
        "A manager at Ursa Major Solar wants to validate sharing and visibility changes.What is the recommended approach?",
      options: [
        "A. Utilize the Sharing button to test Profile and Permission set changes",
        "B. Utilize Field Audit Trail to audit the field metadata and visibility",
        "C. Utilize the Login As feature for a sample user in each role and profile",
        "D. Utilize Administrative and User reports to view the Active Users",
      ],
      answer: "C",
      title: "Question 72",
    },
    {
      content:
        "At Universal Containers, the Sales VP likes to re-assign Opportunity Teams every six months. Each Opportunity Team has the following resources:- AE (owner)- Sales Engineer-Vertical Overlay- Sales OpsWhat should the Architect use to re-assign Opportunity Team members so they have access to the appropriate Opportunity records?Choose one answer:",
      options: [
        'A. From the User Setup menu, click "Update Team members on open Opportunities."',
        'B. From the Opportunity record detail page, use the "Update Team Members" function.',
        "C. Build a Visualforce page that will query the default team and update open Opportunities.",
        "D. Use the Mass Reassign Opportunity Team wizard on the Opportunity Tab Home Page.",
      ],
      answer: "D",
      title: "Question 73",
    },
    {
      content:
        "Which two options can help mitigate the risks of import failures associated with large-volume bulk data loads?Choose 2 answers.",
      options: [
        "A. Group records by ParentID within a batch.",
        "B. Increase batch size.",
        "C. Defer Sharing Calculation.",
        "D. Minimize user group hierarchy.",
      ],
      answer: "A,C",
      title: "Question 74",
    },
    {
      content:
        "Universal Containers has successfully implemented a large Service Cloud rollout for their national call centre3 months ago. One of their largest customer accounts, United Automotive, has over 15,000 open cases.Agents are now having trouble opening new cases for United Automotive. When they try to create a case, the following Error messages appear for them.UNABLE_TO_LOCK_ROWThey notice that this only occurs for the United Automotive account. If they tray so save the case again it will usually work, but the problem seems to be happening more and more often.What option should the Architect recommend?",
      options: [
        "A. Review the Account structure to split the United Automotive account into multiple branch accounts.",
        "B. Review all Account sharing rules to ensure that the Customer Service team has Read/Write access to the United Automotive Account.",
        "C. Review all Case Sharing Rules and consolidate where appropriate to reduce the total number of sharing rules.",
        "D. Review the Customer Service Profile to ensure that they have Read/Write access to the appropriate Case and Account Fields.",
      ],
      answer: "A",
      title: "Question 75",
    },
    {
      content:
        "Universal Containers is looking to set up a new integration with its ERP system. The goal is to synchronize contacts in the ERP shipping tables with those in their CRM so that sales reps can view up to date contact information. The integration runs under a dummy Integration User who is at the top of the role hierarchy. The Organization-Wide Default sharing setting for Accounts is Private and Contacts is Controlled by Parent. A large number of contacts (100,000) have account data in the ERP system, but do not have corresponding Accounts in Salesforce.How should the Architect design the solution so that the sales team can see the contacts and there are no performance issues?",
      options: [
        "A. Have the integration create the contacts under one dummy account record; use an Account sharing rule to grant sales reps access to the contacts.",
        "B. Have the integration create both the contacts and their corresponding accounts; use a Contact Sharing rule to grant sales reps access to the contacts.",
        "C. Have the integration create both contacts and their corresponding accounts; use an Account sharing rule to grant sales reps access to the contacts.",
        "D. Have the integration create the contacts with Salesforce without an account; use a Contact sharing rule to grant sales reps access to the contacts.",
      ],
      answer: "D",
      title: "Question 76",
    },
    {
      content:
        "Universal Containers (UC) provides shipment tracking for its customers on a custom Shipment object. The total number of shipments made yearly by the customers should be available on the Account record to the Marketing team, but the Marketing team should not have access to Shipment records.What recommendation should an Architect provide to accomplish this?",
      options: [
        "A. Controlled by Parent (Account) on Shipment, trigger, and Master-Detail relationship to Account.",
        "B. Public organization-wide default on Shipment, process builder, and Lookup relationship to Account.",
        "C. Private organization-wide default on Shipment, rollup summary, and Master-Detail relationship to Account.",
        "D. Private organization-wide default on Shipment, trigger, and Lookup relationship to Account.",
      ],
      answer: "A",
      title: "Question 77",
    },
    {
      content:
        "Which two capabilities does the delegated administrator permission provide?Choose 2 answers",
      options: [
        "A. Create profiles",
        "B. Unlock users",
        "C. Set OWD",
        "D. Assign users profiles",
      ],
      answer: "B,D",
      title: "Question 78",
    },
    {
      content:
        "Universal Containers (UC) operates worldwide with offices in more than 100 regions in 10 different countries role hierarchy to control data visibility. In the new fiscal year, UC is planned to reorganize the roles and reassign accounts owners. Which two points should an architect consider in this situation?Which two point should an Architect consider in this situation?Choose 2 answers",
      options: [
        "A. Restricting the organization-sharing configurations to private.",
        "B. Replacing Account records ownerships massively can cause data skew.",
        "C. Using a temporary parking lot account to improve performance.",
        "D. Changing complex role hierarchy can cause a high level of sharing recalculation.",
      ],
      answer: "B,D",
      title: "Question 79",
    },
    {
      content:
        "Universal Containers (UC) has a custom object to track the internal net promoter score (NPS) for all ..How can UC ensure that NPS records cannot be accessed by an individual employee's manager?",
      options: [
        "A. Set organization-wide default to Private and uncheck the Access Using Hierarchies Option for ..",
        "B. Use Apex Sharing to remove NPS object share records for Manager profiles.",
        "C. Create a criteria-based sharing rule to remove access to Manager role and above in the Role ..",
        "D. Remove Create, Read, Edit and Delete from Manager Profiles and Permission sets.",
      ],
      answer: "A",
      title: "Question 80",
    },
    {
      content:
        "Universal container (UC) use External Object to retrieve Invoice data from a Legacy ERP. A finance team requested to have access to the Invoice records in the account page.In addition to objects access in the finance users profile, what other feature should a Sales Architect recommend?",
      options: [
        "A. Use APEX managed sharing to grant access to the records.",
        "B. Create a criteria-based sharing rule to grant access to the records.",
        "C. Include the Invoice Related List On Account Page layout.",
        "D. Create an owner-based sharing rule to grant access to the records.",
      ],
      answer: "A",
      title: "Question 81",
    },
    {
      content:
        "Universal Containers (UC) wants to reduce the amount of redundant leads entered into the system. UC.. only edited/reassigned by the lead owner.What organization-wide default (OWD) approach should be recommended to help UC implement these ..",
      options: [
        "A. Implement a private OWD on Lead.",
        "B. Implement a Public Read Only OWD on Lead.",
        "C. Implement a Public Read/Write OWD on Lead.",
        "D. Implement a Public Read Only/Transfer OWD on Lead",
      ],
      answer: "B",
      title: "Question 82",
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
      title: "Question 83",
    },
    {
      content:
        "What vulnerability can exist when controllers use dynamic rather than static queries and bind variables?",
      options: [
        "A. Record Access Override.",
        "B. Buffer Overflow Attacks.",
        "C. SOQL Injection.",
        "D. Cross-site scripting.",
      ],
      answer: "C",
      title: "Question 84",
    },
    {
      content:
        "Universal Containers (UC) sales managers are complaining that they cannot access their teams' Shipment records (a custom object). Initially, the admin suggested that this it happening due to misconfigured role hierarchy (Shipment OWD is Private). Alter investigation, they determined the. role hierarchy for these users is correct.What can be the reason why Universal Containers sales managers are not able to see Shipment records?",
      options: [
        "A. Role hierarchy Implicit sharing was Incorrectly disabled by the Salesforce adman.",
        "B. Ownership-based sharing rule for Shipment was Incorrectly disabled by the Salesforce admin.",
        "C. Sales managers have only the Read permission on the 5hipment object and should not be able to edit their team records.",
        "D. The Grant Access Using hierarchies option on Shipment Sharing Settings was incorrectly disabled by the Salesforce admin.",
      ],
      answer: "D",
      title: "Question 85",
    },
    {
      content:
        "The architect has a requirement to create a criteria-based sharing rule based on the customer Social Security number. However, when setting up the rule in Contact Sharing, the field is not shown on the list of available fields.What might cause this?",
      options: [
        "A. The architect does not have permission to Compliance fields.",
        "B. The field has been configured for encryption.",
        "C. The architect's profile does not have Field level Security (FLS) for this field.",
        "D. Text fields with validation rules are not available for sharing rules.",
      ],
      answer: "B",
      title: "Question 86",
    },
    {
      content:
        "Besides their own team accounts, sales managers at Universal Container need to have READ access to all other countries.Role hierarchy was implemented accordingly (based on countries) but a Sales manager in the US comp records of the same segment in Canada.What should be done to grant access in a proper way?",
      options: [
        "A. Create owner-based sharing rule to grant access to account records that have the same segment.",
        "B. Create criteria-based sharing rule to grant access to account records that have the same segment.",
        "C. Create a public group and include all accounts of the same segment and grant access through.",
        "D. Change the role hierarchy and put all the sales managers in the US and Canada as the same role.",
      ],
      answer: "A",
      title: "Question 87",
    },
    {
      content:
        "Universal Container (UC) wants all full-time internal employees to be able to view all leads. A subset of employees should also be able to see leads.Which organization default (OWD) approach should an architect recommend that will help US employee?",
      options: [
        "A. Implement a Private OWD on Lead.",
        "B. Implement a Public Read only OWD on Lead",
        "C. Implement a Public Read/write/Transfer OWD on Lead.",
        "D. Implement a Public Read/write OWD on Lead",
      ],
      answer: "A",
      title: "Question 88",
    },
    {
      content:
        "A developer of Cosmic Harvest has created a Visualforce page for a tab in Salesforce. The page uses a custom controller and allows a user to view and update certain fields on account records based on custom criteria selected by the user. What can the developer do to check within the custom controller whether the current user has the access to edit a particular field?Choose 1 answer.",
      options: [
        "A. Use the isUpdateable() method of the DescribeFieldResult class.",
        "B. Use the isUpdateable() method of the DescribeSObjectResult class.",
        "C. Use the isAccessible() method of the DescribeFieldResult class.",
        "D. Use the isAccessible() method of the DescribeSObjectResult class.",
      ],
      answer: "A",
      title: "Question 89",
    },
    {
      content:
        "The sales associates of Cosmic Enterprises have been assigned to a custom profile in Salesforce. One of the associates should be granted temporary 'Read' access to a custom object called 'Inquiry' to allow him to manage inquiries received from partner organizations. Which of the following should be used to meet the requirement?Choose 1 answer.",
      options: [
        "A. Profile",
        "B. Sharing Rule",
        "C. Manual Sharing",
        "D. Permission Set",
      ],
      answer: "D",
      title: "Question 90",
    },
    {
      content:
        "Universal Containers has built a recruiting application on the salesforce Platform. HR requested that all internal users should have edit access to the referral custom object. One of the recruiters needed to share a referral record with another colleague for collaboration using manual sharing. The recruiter opened the referral record and could not find the share button. What could be the technical reason for this?",
      options: [
        "A. The Referral object OWD is public Full Access.",
        "B. The Referral object OWD is private.",
        "C. The Referral object OWD is public Read only.",
        "D. The Referral object OWD is public Read/Write.",
      ],
      answer: "D",
      title: "Question 91",
    },
    {
      content:
        "Ursa Major Solar needs to prevent Users in a Custom Sales Department Profile from deleting Opportunities.What should an Architect do to achieve this goal?",
      options: [
        "A. Ensure a Validation Rule is created that checks the User's Profile before allowing the IsDeleted flag to be set to True",
        "B. Ensure that the Delete button from the Opportunity Page Layout and Record Type settings is removed",
        "C. Override the Standard button with a Visualforce Page that warns them that they do NOT have permission to delete",
        'D. In the Object Permissions, remove the "Opportunity Delete" Permission from the User\'s Profile',
      ],
      answer: "D",
      title: "Question 92",
    },
    {
      content:
        "A developer of Cosmic Service Solutions has created the following custom controller for a Visualforce page.What keyword can be added to the definition of the class to ensure that all contact records are not exposed to a user who views the Visualforce page?Choose 1 answer. public class customContactController { public void view() { Contact con = [SELECT Id FROM Contact LIMIT 1]; } }",
      options: [
        "A. SharingContext",
        "B. Sharing",
        "C. Without sharing",
        "D. With sharing",
      ],
      answer: "D",
      title: "Question 93",
    },
    {
      content:
        'Get Cloudy Consulting has the following requirements:- Users should only see Accounts they or their subordinates own.- All Accounts with the custom field "Key Customer" should be visible to all Senior Account Managers.- There is a custom field on the Account record that contains sensitive information and should be hidden from all users, except 10 designated users who require view and edit access.- These 10 users come from different user groups, and will change occasionally.Which three platform security features are required to support these requirements with the minimum amount of effort? (Choose three.)',
      options: [
        "A. Apex Managed Sharing",
        "B. Criteria-Based Sharing Rules",
        "C. Permission Sets",
        "D. Owner-Based Sharing Rules",
        "E. Role Hierarchy",
      ],
      answer: "B,C,E",
      title: "Question 94",
    },
    {
      content:
        "A developer at Universal Container is building an integration within a managed package for their internal org that requires login to an external system. The end point requires basic authentication. The Architect would like to ensure that the username and password are managed securely. Which three options should the Architect recommend to secure the credentials?",
      options: [
        "A. Store the credentials in protected custom settings that are used in the apex callout",
        "B. Store the credentials in protected custom metadata that are used in the apex callout",
        "C. Store the credentials in named credentials that are used in the apex callout",
        "D. Store the credentials in a custom object using encrypted fields",
        "E. Store the credentials in the apex code, which will not be available to non-admins",
      ],
      answer: "A,B,C",
      title: "Question 95",
    },
    {
      content:
        'A developer has created a Visualforce page that contains the code below. What is the security vulnerability in the code?Choose 1 answer. < apex:outputPanel id="output" > The value is < apex:outputText value="{!name}" escape="false"/ > < /apex:outputPanel >',
      options: [
        "A. Cross Frame Scripting",
        "B. Cross-Site Scripting (XSS)",
        "C. SOQL Injection",
        "D. Cross-Site Request Forgery (CSRF)",
      ],
      answer: "B",
      title: "Question 96",
    },
    {
      content:
        "Universal containers (UC) implemented a private organization-wide default for the Container and Case objects.How can UC give support representatives access to Container and Case records owned by Customer Community users?",
      options: [
        "A. Create an ownership-based sharing rule that gives access to the head of support role and internal subordinates",
        "B. Create a Share Group based on the sharing set created for the Customer Community User Profile.",
        "C. Support representatives nil automatically get access to these records via the role hierarchy",
        "D. Create a criteria-based sharing rule that gives access to the head of support role and internal subordinates",
      ],
      answer: "B",
      title: "Question 97",
    },
    {
      content:
        "What are NOT abilities of users in the Delegated Administrators group? Choose two answers:",
      options: [
        "A. Creating objects",
        "B. Managing custom objects created by the primary administrator",
        "C. Creating and editing users and resetting passwords and all subordinate roles",
        "D. Loggins in as a user who has granted login access to an administrator",
        "E. Assigning users to specified profiles (Your Answer)",
        "F. Creating profiles",
      ],
      answer: "A,F",
      title: "Question 98",
    },
    {
      content:
        'Jane, a support representative at Universal Containers, created a report to view all her open cases that have been created in the past 7 days and saved the report in the "Private Reports" folder.Who can view and run the report?',
      options: [
        "A. The report owner and anybody in the role hierarchy above the report owner",
        'B. The report owner and users with the "View All Data" permission',
        "C. The report owner",
        'D. The report owner and any users who have been given access to the "My Private Reports" folder',
      ],
      answer: "C",
      title: "Question 99",
    },
    {
      content:
        "A system administrator of Cosmic Service Solutions has created a sharing rule to grant the role of support agents 'Read/Write' access to cases owned by a public group of support managers. Some support agents have complained that they are unable to edit the cases. Which of the following is a valid method of testing the access granted by the sharing rule?Choose 1 answer.",
      options: [
        "A. Using event monitoring to test whether a support agent is able to edit a particular case record.",
        "B. Using setup audit trail to test whether the support agents are able to edit the records.",
        "C. Logging in as a sample user who has been assigned to the role of support agents.",
        "D. Using field audit trail to test the visibility of case records using Metadata API.",
      ],
      answer: "C",
      title: "Question 100",
    },
    {
      content:
        "An External Object is created to show Invoices from an external accounting system. When viewing the External Object, a user should only access invoice records the user is authorized to see.What two actions are required to achieve the above requirement? Choose 2 answers",
      options: [
        "A. Grant access to the External Object to only the Account Manager profile.",
        "B. Setup External Object to use OAuth to connect to the Accounting system.",
        "C. Create an owner based sharing rule to grant visibility to the Invoice object.",
        "D. Restrict access to data in the accounting system.",
      ],
      answer: "B,D",
      title: "Question 101",
    },
    {
      content:
        "The system administrator of Cosmic Enterprises has created multiple list views for sales and support reps of the company. He has restricted the visibility of the list views using roles. According to a data access policy, only roles are to be used to grant access to list views and folders in Salesforce. However, all the sales reps are able to see the list views which should only be accessible by the support reps. Which of the following explains the reason behind this issue?Choose 1 answer.",
      options: [
        "A. The sales reps' profile has the 'Manage Public List Views' permission.",
        "B. A permission set that gives wider access to list views has been assigned to the sales reps.",
        "C. The sales reps are part of a public group that has been given access to the list views.",
        "D. The sales reps' profile has the 'Manage Private List Views' permission.",
      ],
      answer: "A",
      title: "Question 102",
    },
    {
      content:
        "Universal Containers (UC) is a fast-growing company that sells containers globally. It has thousands of dealerships throughout the world where local dealers service containers. UCimplemented a new Partner Community for its dealers. Each dealership has a dealer manager who manages the service agents. The community-sharing model is private.What is the optimal option to give dealer managers visibility to customer cases only raised by their service agents?",
      options: [
        "A. Change external organization-wide default of case object to public read only.",
        "B. Create a sharing rule to share cases created by service agents with their dealer manager.",
        "C. Create a sharing set to share cases created by service agents with their dealer manager.",
        "D. Using the role hierarchy, the cases raised by service agents will be visible to their relevant dealer managers.",
      ],
      answer: "C",
      title: "Question 103",
    },
    {
      content:
        "Universal Containers has a strict security model enforced through object, field, and row-based security mechanisms. The Architect would like to ensure the security model is being thoroughly tested using Apex automated tests.Which three considerations should be made when using the runAs() method to design Apex unit tests?Choose 3 answers",
      options: [
        "A. runAs() can be used inside of test classes to validate record-level security.",
        "B. runAs() does not enforce user permissions or field-level permissions in test classes.",
        "C. runAs() can be used inside of test classes to validate field-level permissions.",
        "D. runAs() counts towards total DML statements issued within the transaction.",
        "E. runAs() can be used outside of test classes to bypass record-level security.",
      ],
      answer: "A,B,D",
      title: "Question 104",
    },
    {
      content:
        "At Universal Containers, Accounts and Contracts are normally visible to all employees, and Proposals center owner and managers. However, some Proposals are considered confidential and are managed by a Strategic should not be visible to anyone in the Sales group other than owner and the strategic team.How should the architect design for this requirement?",
      options: [
        "A. Proposal Owner set to the Strategic Deals Team Queue and create an center- base sharing rule to grs",
        "B. Proposal Owner set to the Strategic Deals Team Queue and set the Account relationship to Master-Dvt.",
        "C. Disable Grant Access Using Hierarchies and set an Owner_Based Sharing rule for Strategic Deals team",
        "D. Disable Grant Access Using Hierarches and set a Criteria-based Sharing rule for Strategic Deals team.",
      ],
      answer: "D",
      title: "Question 105",
    },
    {
      content:
        "Nick is a sales rep who works for Cosmic Sporting Goods. Until recently, he was the owner of an account record named 'Kelly Corporation'. Upon his request, the system administrator changed the owner of the account to another sales rep named Fred. Fred and Nick share the same role in the role hierarchy. The organization-wide default sharing setting of the Account object has been set to 'Private'. Which of the following is true regarding the impact of this change on record access?Choose 1 answer.",
      options: [
        "A. Nick will lose access to the account record.",
        "B. Both Fred and Nick will be able to access the account record.",
        "C. Fred will be able to access all the account records shared with Nick.",
        "D. Nick will automatically retain access to the account record.",
      ],
      answer: "A",
      title: "Question 106",
    },
    {
      content:
        'Universal Containers is updating its Organization-Wide Sharing Settings for the Account Object from a"Public Read/Write" model to a "Private" model, so that they can hide certain national accounts from sales reps and sales managers. These national accounts should only be accessible by sales directors and above.Universal Container\'s Role Hirerarchy matches its organizational hierarchy. Which two options should the Architect consider when designing the solution?Choose 2 answers',
      options: [
        "A. If a sales rep is added to the Opportunity Team for a national account, they will gain access to account data.",
        "B. National accounts must be owned by a user who is above the sales managers in the Role Hierarchy.",
        "C. Sales directors will need a sharing rule created so that they can see accounts owned by Sales Users.",
        "D. Apex managed sharing will have to be disabled for the account object to protect the national accounts.",
      ],
      answer: "A,B",
      title: "Question 107",
    },
    {
      content:
        "Universal Containers (UC) implemented Sales Cloud and requested that only certain branch staff trained to sell high risk products can create opportunities for high risk products.In which two ways can an Architect allow only specific branch staff to sell high risk products?Choose 2 answers",
      options: [
        "A. Share (High Risk) price book with the trained staff via sharing rule.",
        "B. Configure Price book Organization wide default to No Access.",
        "C. Set Price Book Organization Wide Default to View Only and share the price book (High Risk) with the trained staff.",
        "D. Share (High Risk) price book with the trained staff via manual sharing.",
      ],
      answer: "C,D",
      title: "Question 108",
    },
    {
      content:
        "After testing and deploying a new trigger that creates a related order when a opportunity is closed, the Architect begins receiving complaints of permission error messages appearing when closing an opportunity.How did this error occur?",
      options: [
        "A. The trigger handler class is using ''with sharing'' and the user does not have access to the order related to the opportunity.",
        "B. The trigger handlers class does not use any sharing keywords and the user does not have access to the orders related to the opportunity.",
        "C. The trigger should be using RunAs() when creating the order.",
        "D. Trigger is using IsCreateable() Apex method and the user doesn't have create permission on the Order object.",
      ],
      answer: "A",
      title: "Question 109",
    },
    {
      content:
        'Universal Containers (UC) has a private Organization-Wide Defaults (OWD) model for the Account object and needs to control the access of records and fields according to these requirements:* Sales reps can view/edit only their own records and cannot access the field "segment" in account page.* Service reps need to view all accounts but cannot edit any information.* Sales managers can modify any account of reps reporting to them.* Service managers can modify any account.How can a Salesforce architect provide an optimal solution for this scenario?',
      options: [
        "A. Use profiles, permission sets, and field-level security.",
        "B. Use profiles, sharing rules, and change OWD to public read-only.",
        "C. Use profiles, permission sets, role hierarchy, and field-level security.",
        "D. Use profiles, manual sharing, and field-level security.",
      ],
      answer: "C",
      title: "Question 110",
    },
    {
      content:
        "Universal Containers has a Private Sharing Model for the Opportunity object.Sales Rep A at Universal Containers created the Opportunity record and then transferred ownership of the Opportunity record to Sales Rep B.Both Sales Rep A and B have the same role in the Role Hierarchy.What access will Sales Rep A have to the Opportunity after the transfer?",
      options: [
        "A. Read Only.",
        "B. Full Access.",
        "C. Read/Write.",
        "D. No Access.",
      ],
      answer: "D",
      title: "Question 111",
    },
    {
      content:
        "Universal Containers (UC) wants all full-time internal employees to be able to view all leads.A subset of Contractors and temporary employees should also be able to see leads. Which organization-wide default (OWD) approach should an architect recommend that will help UC implement these requirements?",
      options: [
        "A. Implement a Private OWD on Lead.",
        "B. Implement a Public Read Only OWD on Lead.",
        "C. Implement a Public Read/Write OWD on Lead.",
        "D. Implement a Public Read/Write/Transfer OWD on lead.",
      ],
      answer: "C",
      title: "Question 112",
    },
    {
      content:
        "Universal Containers (UC) has a custom Apex class that enforces a business process and updates opportunities. UC has noticed that fields with field level security permission of read only on certain users' profiles are being updated by this class.How should the architect fix this problem?",
      options: [
        "A. Use the WITH SECURITY_ENFORCED keyword in the SOQL statement.",
        "B. Add With Sharing keyword to the class,",
        "C. Use the IsUpdateable() Apex method to test each field prior to allowing update.",
        "D. Put the code in an inner class that uses the With Sharing keyword.",
      ],
      answer: "C",
      title: "Question 113",
    },
    {
      content:
        "Review the following code snippet.Get Cloudy Consulting wants an Architect to assess this code snippet for potential security vulnerabilities.What is one appropriate response from the Architect?",
      options: [
        "A. Arbitrary Redirects is the possible threat",
        "B. Cross-Site Scripting is the possible threat",
        "C. SOQL Injection is the possible threat",
        "D. Access Control is the possible threat",
      ],
      answer: "D",
      title: "Question 114",
    },
    {
      content:
        "Universal Containers (UC) delivers training and courses to students and companies. UC is implementing a Salesforce Customer Community for its students granting them a Customer Community license. As part of the community requirements, UC asked to give students access to cases that are related to their account in the UC community.What is the optimum sharing technique that can achieve the requirements?",
      options: [
        "A. Use Apex sharing to share cases with the students.",
        "B. Create a sharing set to share cases with the students.",
        "C. Create a sharing rule to share cases with the students.",
        "D. Create a share group to share cases with the students.",
      ],
      answer: "B",
      title: "Question 115",
    },
    {
      content:
        "Universal Containers uses 75,000 distributors that have close to 1 million total users. Distributors need opportunities assigned to their distributor for delivery.What license recommendation will meet distributor needs?",
      options: [
        "A. Partner Community",
        "B. Customer Community Plus",
        "C. Sales Cloud",
        "D. Custom Community",
      ],
      answer: "A",
      title: "Question 116",
    },
    {
      content:
        "Universal Containers (UC) has requirement to expose a web service to their business partners. The web service will be used to allow each business partner to query UC's Salesforce instance to retrieve the status of orders.The business partner should only be allowed access to orders for which the business partner is the fulfillment vendor. The Architect does not want the business partners to utilize the standard APIs and would prefer a custom API be developed. Which three design elements should the Architect consider in order to ensure the data security of the solution?Choose 3 answers.",
      options: [
        "A. Set the Orders object's sharing settings of Private in the Org-Wide Defaults.",
        "B. Query the Orders object with Dynamic SOQL based upon the fulfillment ID.",
        'C. Develop a custom Apex web service using the "With sharing" keyword.',
        "D. Develop a custom apex web service with a fulfillment ID input attribute.",
        "E. Provide each partner with their own Salesforce login set to PRI Enabled on the profile.",
      ],
      answer: "A,C,D",
      title: "Question 117",
    },
    {
      content:
        "To grant Universal Containers sales manager access to shipment records properly, it was necessary to leverage Apex managed sharing. The IT team is worried about improper access to records.Which two features and best practices should a Salesforce architect recommend to mitigate this risk?",
      options: [
        "A. Use isShareable in Apex classes to assure record visibility will be followed.",
        "B. Use with Sharing keyword in Apex classes to assure record visibility will be followed.",
        "C. Use isAccessible keyword in Apex classes to assure record visibility will be followed",
        "D. Use runAs system method in test classes to test using different users and profiles.",
      ],
      answer: "B,C",
      title: "Question 118",
    },
    {
      content:
        "Review the organizational information below about DreamHouse Realty:- Ryan and Kimberly are the East sales reps and their manager is Katrina, the East sales executive.- Sam and Wilder are West sales reps and their manager is Bob, the West sales executive.- Wendy is the CEO and managers both Katrina and Bob.- DreamHouse Realty's role hierarchy follows their management structure. Ryan owns an account, NewCompany, and Kimberly owns an account, OldCompany. Katrina manually shared her account NewWorld with Kimberly. However, she has moved to a new role to lead all Named Accounts, and Lucy, who replaced her, is the new owner of NewWorld.Which employees will have access to the NewWorld account?",
      options: [
        "A. Wendy, Ryan, Lucy, and Kimberly",
        "B. Wendy, Katrina, and Kimberly",
        "C. Wendy and Lucy",
        "D. Wendy, Lucy, and Kimberly",
      ],
      answer: "C",
      title: "Question 119",
    },
    {
      content:
        "A junior Account manager owns an account and creates a new opportunity to manage complex deal. She needs the help of the product specialist and solution engineer. Given the size of this deal, she knows the account is likely to be reassigned to a senior account manager in the near future. What is the optimal way for the junior account manager to share the opportunity, given the private sharing model?",
      options: [
        "A. Manual Share on the Opportunity.",
        "B. Manual share on the Account.",
        "C. Create an Owner-based sharing rule.",
        "D. *Opportunity Team.",
      ],
      answer: "D",
      title: "Question 120",
    },
    {
      content:
        "Cosmic Service Solutions has three branches in the role hierarchy for the three regions in the United States where it provides support services to other companies. The organization-wide default sharing setting of the Case object has been set to 'Private'. When working on case resolution, the support agents in the western branch should be able to collaborate by sharing case records with the support agents in the central branch of the hierarchy. No other users in the company, including the managers, should be able to gain access to these records. What can a Salesforce Architect recommend to meet this requirement?Choose 1 answer.",
      options: [
        "A. Create a criteria-based sharing rule to share case records owned by the role of western support agents with the role of central support agents.",
        "B. Create an ownership-based sharing rule to share case records owned by the role of western support agents with a public group of central support agents.",
        "C. Create a criteria-based sharing rule to share case records owned by the role of western support agents with a public group of central support agents.",
        "D. Create an ownership-based sharing rule to share case records owned by the role of western support agents with the role of central support agents.",
      ],
      answer: "B",
      title: "Question 121",
    },
    {
      content:
        "Universal Containers (UC) has recently changed its internal policy to follow market regulations and create an internal team to manage the collection process. Only this team should have access to Invoke records. currently, invoke is a child in a Master-Detail relationship to Account. Although related lists have been removed from the page layouts, some profiles stills have access to the invoice object.Which approach should an architect recommend to fix this problem?",
      options: [
        "A. Create a new Profile with no access to the Invoice object and assign it to all unauthorized users.",
        "B. Replace Account and Invoke Master Detail Relationship by a Lookup and remove Invoice Access from the unauthorized profiles,",
        "C. Create a Permission Set with No Access to the Invoice object and assign it to unauthorized users.",
        "D. Change the Invoke organization-wide default from Controlled by Parent to Private and remove invoke access from the unauthorized",
      ],
      answer: "B",
      title: "Question 122",
    },
    {
      content:
        "What is the best practice for testing sharing and visibility changes?",
      options: [
        "A. Use Field Audit Trail to audit the field meta-data and visibility.",
        "B. Use the Login As feature for a sample user in each role and profile.",
        "C. Use Administrative and User reports to view the Active Users.",
        "D. Use the Sharing button to test Profile and Permission set changes.",
      ],
      answer: "B",
      title: "Question 123",
    },
    {
      content:
        "Universal Containers (UC) is in legal dispute regarding several orders. UC has found out these records were removed from system. The VP of Sales has asked to ensure this cannot happen in the future. What approach would meet this requirement?",
      options: [
        "A. Remove order delete permission from profiles and permission sets.",
        "B. Change the record type/page layout assignment for orders to be read-only.",
        "C. Remove the delete button from the Order page layout.",
        "D. Implement a sharing rule that changes access for the records to read.",
      ],
      answer: "A",
      title: "Question 124",
    },
    {
      content:
        "Cosmic Service Solutions has a requirement that Customer Community users should be allowed to access cases related to their contact record in Salesforce. What can be done to fulfill this requirement?Choose 1 answer.",
      options: [
        "A. Create a sharing rule to grant access to cases based on the required criteria",
        "B. Create a permission set that grants the required access and assign it to the Customer Community profile",
        "C. Create a sharing set that grants access to the Case object and configure access mapping based on the requirement",
        "D. Create a share group that grants access to the Case records based on the required criteria",
      ],
      answer: "C",
      title: "Question 125",
    },
    {
      content:
        "Universal Containers has created a Reimbursement Custom Object to capture requests for reimbursement of expenses related to office supplies. The Reimbursement requests are sometimes sensitive and the Team Leads should not have access to the Reimbursement records submitted by the Users in the Call Center Agent role. The Director of Support will require access to all Reimbursement records. The role hierarchy is set as follows: Call Center Agent role reports to Team Lead role, which Reports to the Director of Support. Which steps would the Architect take to ensure proper sharing in this Role Hierarchy structure assuming Private Sharing Setting for the Reimbursement Object?",
      options: [
        'A. Leave the Reimbursement Object in "Deployed" Status and set the Director of Supports Profile to "View All" in the object permissions.',
        "B. Disable Grant Access Using Hierarchies for the Object and create a Sharing Rule to enable sharing to the Director of Support",
        "C. Use an Approval Process to change the owner of the Reimbursement record upon submission to the Director of Support",
        "D. The sharing scenario described will occur without any special configuration choices being made by the Architect",
      ],
      answer: "B",
      title: "Question 126",
    },
    {
      content:
        "Universal Containers has a custom object to maintain Job information with a private sharing model. The Delivery group is distributed through the Role Hierarchy based on geography. As the Delivery group often collaborates on Jobs, all users in the Delivery profile required View access to all Job records. In special case, the Delivery user who owns a job must be able to grant a Product Development user access to a Job record.Which two platform features can be used to support these requirements?Choose 2 answers",
      options: [
        "A. Manual Sharing",
        "B. Criteria-based Sharing Rules",
        "C. Owner-based Sharing Rules",
        'D. "View All" Profile settings',
      ],
      answer: "A,D",
      title: "Question 127",
    },
    {
      content:
        "The system administrator of Cosmic Enterprises has set the organization-wide default sharing setting for opportunities to 'Private'. While working on a particular opportunity, a sales rep requires assistance from an account manager and a product manager. The opportunity is owned by the sales rep, and the managers currently do not have access to it. What should be recommended to allow the sales rep to collaborate with the managers?Choose 1 answer.",
      options: [
        "A. Enable Opportunity Teams and add the 'Opportunity Team' related list to the Opportunity page layout.",
        "B. Enable Account Teams and add the 'Account Team' related list to the Opportunity page layout.",
        "C. Enable Opportunity Teams and add the 'Opportunity Team' related list to the Account page layout.",
        "D. Enable Account Teams and add the 'Account Team' related list to the Account page layout.",
      ],
      answer: "A",
      title: "Question 128",
    },
    {
      content:
        "Universal Containers has a custom Visualforce application that uses a custom Apex controller.Within this Visualforce application, what should the Architect do to ensure that object-level security is enforced?",
      options: [
        'A. Utilize the "With Sharing" keyword when defining the Apex controller class',
        "B. Use the Schema.DescribeSObjectResult isAccessible() method in the Apex controller",
        'C. Use the "Without Sharing" keyword when defining the Apex controller class',
        'D. Utilize the "With Sharing" keyword when defining the Visualforce page',
      ],
      answer: "B",
      title: "Question 129",
    },
    {
      content:
        "Universal Containers wants to store Payment Term Details on the Account object, but the fields should only be visible on certain record types and for certain user profiles.How can a System Administrator quickly determine which user profiles, page layouts, and record types include certain fields?",
      options: [
        "A. Click the Field-Level Security for the field on each Profile.",
        "B. Log in as each user profile and view the Account Page Layouts.",
        "C. Use the Field Accessibility Viewer for the fields in question",
        "D. Universally require the field at the field level.",
      ],
      answer: "C",
      title: "Question 130",
    },
    {
      content:
        "The IT Director of Cosmic Solutions would like to prevent Cross-Site Request Forgery (CSRF) attacks on the company's website. Which of the following is a defense mechanism provided by Salesforce that can prevent these attacks?Choose 1 answer.",
      options: [
        "A. CSRF Protection",
        "B. Anti-CSRF Token",
        "C. Anti-CSRF Security",
        "D. Security Token",
      ],
      answer: "B",
      title: "Question 131",
    },
    {
      content:
        "The IT Manager of Cosmic Solutions has asked a developer to design unit tests to validate programmatic sharing of account and contact records. Which of the following considerations apply to the use of the startTest and stopTest methods in the unit test methods?Choose 2 answers.",
      options: [
        "A. The methods can be used to validate how close the code is to reaching governor limits.",
        "B. The startTest method marks the point in the test code when the test actually begins.",
        "C. The Apex code before the stopTest method should be used to initialize variables and populate data structures.",
        "D. The stopTest method is used to add a context to the unit test.",
      ],
      answer: "A,B",
      title: "Question 132",
    },
    {
      content:
        "The System Administrator at Universal Containers has created two list views called ListV1 and ListV2. One group of users should only see ListV1 and the second group of users should only see ListV2. Two public groups were created to restrict visibility to the respective list views. However, users in both groups are able to see both list views. What system permission in their profile enabled the users to see all list views?",
      options: [
        "A. Manage Private List Views",
        "B. Manage Public List Views",
        "C. Manage Custom Permissions",
        "D. Manage Custom List Views",
      ],
      answer: "B",
      title: "Question 133",
    },
    {
      content:
        "Universal Containers provides 24x7 support for its customers worldwide using call centers in three different countries with each one covering an 8-hour shift in different time zones. Service reps in a call center have access to the same information but only during their local working hours.Which feature in Salesforce controls access for specific login hours?",
      options: [
        "A. Profiles",
        "B. Custom permissions",
        "C. Set the login hours on user records",
        "D. Permission sets",
      ],
      answer: "A",
      title: "Question 134",
    },
    {
      content:
        "Which two settings are available in profiles, but not permission sets?Choose 2 answers.",
      options: [
        "A. Page Layout Assignments",
        "B. Tab Settings",
        "C. Record Types",
        "D. Login Hours",
      ],
      answer: "A,D",
      title: "Question 135",
    },
    {
      content:
        "Universal Containers (UC) has a mostly private organization-wide default (OWD), as it is a core principle of UC to respect client data privacy. UC has implemented complex processes for granting access to Opportunity dat a. A few key members of the Sales Reporting team need to always be able to see, but not change, Opportunity data for all Opportunities.What should an architect recommend as an approach to meet these requirements?",
      options: [
        'A. Create a Permission Set that grants "View All" permission for Opportunity.',
        "B. Make Opportunity OWD read-only.",
        'C. Give "View All Data" Permission to the Sales Reporting Profile.',
        'D. Create a Permission Set that grants "View All Data" Permission.',
      ],
      answer: "A",
      title: "Question 136",
    },
    {
      content:
        "Universal Containers (UC) uses a custom lightning component with an Apex class to display shipment information (custom object, private OWD). UC sales managers are complaining about two important points:* Shipment records that belong to their teams can be seen by other users.* Shipment amount should be visible only by managers, but sales reps are able to view it.Which two features did the development team miss that is causing the problems?Choose 2 answers.",
      options: [
        "A. Use isAccessible() method in Apex classes to check field accessibility How can an architect achieve this",
        "B. Use isSharable keyword in Apex classes to assure record visibility.",
        "C. Use runAs in test class to enforce user permissions and field-level permissions.",
        "D. Use With Sharing keyword in Apex classes to enforce sharing rules evaluation.",
      ],
      answer: "A,D",
      title: "Question 137",
    },
    {
      content:
        "A custom object called 'Performance Review' has been created to store information about employees' performance reviews. A lookup relationship field has been created on the object to specify the name of the reviewer. When a new record of the object is created, it should be shared automatically with the reviewer assigned to the record. The reviewer should be given 'Read/Write' access to the record. Which of the following should be used for this requirement?Choose 2 answers.",
      options: [
        "A. Share object",
        "B. Metadata API",
        "C. Apex Trigger",
        "D. Criteria-Based Sharing Rule",
      ],
      answer: "A,C",
      title: "Question 138",
    },
    {
      content:
        "Universal Container is a global telco that has recently implemented enterprise territory management to better align their sales teams and sales processes. They are in Q4 of the FY and they have completely revamped their territory structure and created a plan for a new structure that would support the new FY. Their current territory model has 8k territories. Their new model would be a new set of 8,5K territories, and their org limit is 10k.What enterprise territory management feature can US take advantage of in order to help them stay within their org limits?",
      options: [
        "A. Territory Type",
        "B. Territory Model State",
        "C. Territory type priority",
        "D. Territory Hierarchy",
      ],
      answer: "B",
      title: "Question 139",
    },
    {
      content:
        "Universal Containers has a Private Sharing Model for the Opportunity object. Sales Rep A at Universal Containers created the Opportunity record and then transferred ownership of the Opportunity record to Sales Rep B.Both Sales Rep A and B have the same role in the Role Hierarchy.What access will Sales Rep A have to the Opportunity after the transfer?",
      options: [
        "A. No Access",
        "B. Read/Write",
        "C. Read Only",
        "D. Full Access",
      ],
      answer: "A",
      title: "Question 140",
    },
    {
      content:
        'Universal Containers (UC) service reps are assigned to a profile which has "View All" in Case object (Private OWD). To make sure service reps have access to all relevant information to attend to customer requests, which two details should a salesforce Architects consider?\nChoose 2 answers:',
      options: [
        "A. Service reps will be able to access all UC contact records if they are controlled by parent.",
        "B. Service reps will not be able to access all UC contact records if they are controlled by parent.",
        "C. Service reps will be able to access all the UC Account records due to Implicit Sharing.",
        "D. Service reps will not be able to access all the UC Accounts records because Account OWD is private.",
      ],
      answer: "B,D",
      title: "Question 141",
    },
    {
      content:
        'A Visualforce controller has a requirement to be written with "Without Sharing" at the top level; however, certain methods within the page still need to enforce the user permissions for creating records and accessing certain fields. Which two methods below would be used to enforce this requirements?Choose 2 answers.',
      options: [
        "A. Schema.getGlobalDescribe",
        "B. Schema.DescribeFieldResult",
        "C. Schema.DescribeSObjectResult",
        "D. UserInfo.getProfileID",
      ],
      answer: "B,C",
      title: "Question 142",
    },
    {
      content:
        "Cloud Kicks is customizing the security and sharing features of Salesforce Account Teams and has decided to implement a Custom Account Team object. Cloud Kicks wants the new implementation to utilize Apex and Visualforce on the Custom Account Team object, while still including all of the features of the existing account team.An Architect is considering two different approaches for designing this enhancement.Which two considerations are valid? (Choose two.)",
      options: [
        "A. The need to synchronize the AccountTeamMember object with the Custom Account Team object data",
        "B. The need to customize Account screens in Visualforce, as the AccountShare object CANNOT be maintained programmatically",
        "C. The need to dynamically create Criteria-Based Sharing rules with Custom Account Team object data",
        "D. The need to maintain the AccountShare object based upon the Custom Account Team object data",
      ],
      answer: "A,D",
      title: "Question 143",
    },
    {
      content:
        "Ursa Major Solar sells solar panels globally and is growing rapidly. The company has over 5,000 dealerships throughout the world where local dealers service solar panels sold locally. Ursa Major Solar recently opened two dealerships in California: NorthCal and SoCal. Ursa Major Solar implemented a new partner community to enable their dealers. Each dealership has a dealer Manager who has all service agents report into them.Additionally, Ursa Major Solar uses a private sharing model.The company needs to enable dealer managers to have visibility to customer cases within their dealership but NOT across all dealerships.What should the Architect recommend to accomplish this goal?",
      options: [
        "A. Implement a batch job that creates sharing rules as needed, based on the cases created",
        "B. Build a trigger that creates manual sharing of cases as needed whenever a new case is created",
        "C. Implement sharing groups that share all cases to all agents under the Dealer manager",
        "D. No changes are needed to the sharing and visibility model to implement this requirement",
      ],
      answer: "D",
      title: "Question 144",
    },
    {
      content:
        "Universal Container created a custom object called Defect and would like to enable the Sharing button on the Defect page layout to share the record manually to other users in the org. In which scenario will the sharing button appear?",
      options: [
        "A. The sharing mode is public read write",
        "B. The sharing model is public read write transfer",
        "C. The sharing model is either Private or Public ReadOnly",
        "D. The sharing button always appears",
      ],
      answer: "C",
      title: "Question 145",
    },
    {
      content:
        "Universal Containers (UC) has a custom Apex class that enforces a business process and updates opportunities. UC has noticed that fields with field level security permission of read only on certain users' profiles are being updated by this class.How should the architect fix this problem?",
      options: [
        "A. Add With Sharing keyword to the class,",
        "B. Put the code in an inner class that uses the With Sharing keyword.",
        "C. Use the WITH SECURITY_ENFORCED keyword in the SOQL statement.",
        "D. Use the IsUpdateable() Apex method to test each field prior to allowing update.",
      ],
      answer: "C",
      title: "Question 146",
    },
    {
      content:
        "Chris is the Business Analytics Manager of Cosmic Solutions. He manages a small team that is responsible for creating and modifying all the reports and dashboards used by the company. The company recently hired a junior analyst named Fred whose main responsibility is to provide assistance to Chris. Chris would like to give Fred the ability to share any report or dashboard folder that has been or will be created by the team. What should a Solution Architect recommend to an administrator who has been asked to meet this requirement?Choose 2 answers.",
      options: [
        "A. Provide the 'Manage Reports and Dashboards in Public Folders' permission.",
        "B. Provide the 'Manage Reports in Public Folders' permission.",
        "C. Provide the 'Manage Dashboards in Public Folders' permission.",
        "D. Provide 'Manager' access to all the folders that need to be shared.",
      ],
      answer: "B,C",
      title: "Question 147",
    },
  ],
});
