window.testContent = window.testContent || [];
var testId = "Salesforce.Identity-and-Access-Management-Architect";
var testName = "Salesforce.Identity-and-Access-Management-Architect";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "Salesforce.Identity-and-Access-Management-Architect.v2022-12-05.q87",
  content: [
    {
      content:
        "Northern Trail Outfitters (NTO) believes a specific user account may have been compromised. NTO inactivated the user account and needs U perform a forensic analysis and identify signals that could Indicate a breach has occurred. What should NTO's first step be in gathering signals that could indicate account compromise?",
      options: [
        "A. Download the Login History and evaluate the details of logins performed by the user.",
        "B. Download the Identity Provider Event Log and evaluate the details of activities performed by the user.",
        "C. Review the User record and evaluate the login and transaction history.",
        "D. Download the Setup Audit Trail and review all recent activities performed by the user.",
      ],
      answer: "A",
      title: "Question 1",
    },
    {
      content:
        "What information does the 'Relaystate' parameter contain in sp-Initiated Single Sign-on?",
      options: [
        "A. Reference to a URL redirect parameter at the service provider.",
        "B. Reference to the login address URL of the service provider.",
        "C. Reference to a URL redirect parameter at the identity provider.",
        "D. Reference to the login address URL of the identity Provider.",
      ],
      answer: "A",
      title: "Question 2",
    },
    {
      content:
        "Universal Containers (UC) uses Active Directory (AD) as their identity store for employees and must continue to do so for network access. UC is undergoing a major transformation program and moving all of their enterprise applications to cloud platforms including Salesforct, Workday, and SAP HANA. UC needs to implement an SSO solution for accessing all of the third-party cloud applications and the CIO is inclined to use Salesforce for all of their identity and access management needs. Which two Salesforce license types does UC need for its employees' Choose 2 answers",
      options: [
        "A. Company Community and Identity licenses",
        "B. Identity and Identity Connect licenses",
        "C. Salesforce and Identity Connect licenses",
        "D. Chatter Only and Identity licenses",
      ],
      answer: "B,C",
      title: "Question 3",
    },
    {
      content:
        "Refer to the exhibit.Outfitters (NTO) is using Experience Cloud as an Identity for its application on Heroku. The application on Heroku should be able to handle two brands, Northern Trail Shoes and Northern Trail Shirts. A user should select either of the two brands in Heroku before logging into the community. The app then performs Authorization using OAuth2.0 with the Salesforce Experience Cloud site. NTO wants to make sure it renders login page images dynamically based on the user's brand preference selected in Heroku before Authorization. what should an identity architect do to fulfill the above requirements?",
      options: [
        "A. For each brand create different communities and redirect users to the appropriate community using a custom Login controller written in Apex.",
        "B. Authorize third-party service by sending authorization requests to the community-url/services/oauth2/authonze/expid_value.",
        "C. Create multiple login screens using Experience Builder and use Login Flows at runtime to route to different login screens.",
        "D. Authorize third-party service by sending authorization requests to the community-url/services/oauth2/authorize/cookie_value.",
      ],
      answer: "B",
      title: "Question 4",
    },
    {
      content:
        "Universal containers (UC) uses an internal company portal for their employees to collaborate. UC decides to use salesforce ideas and provide the ability for employees to post ideas from the company portal. They use SAML-BASED SSO to get into the company portal and would like to leverage it to access salesforce. Most of the users don't exist in salesforce and they would like the user records created in salesforce communities the first time they try to access salesforce. What recommendation should an architect make to meet this requirement?",
      options: [
        "A. Use on-the-fly provisioning",
        "B. Use salesforce APIs to create users on the fly",
        "C. Use just-in-time provisioning",
        "D. Use Identity connect to sync users",
      ],
      answer: "C",
      title: "Question 5",
    },
    {
      content:
        "Universal Containers is creating a web application that will be secured by Salesforce Identity using the OAuth 2.0 Web Server Flow uses the OAuth 2.0 authorization code grant type). Which three OAuth concepts apply to this flow? Choose 3 answers",
      options: [
        "A. Access Token",
        "B. Scopes",
        "C. Client Secret",
        "D. Verification URL",
      ],
      answer: "A,B,C",
      title: "Question 6",
    },
    {
      content:
        "Northern Trail Outfitters (NTO) is launching a new sportswear brand on its existing consumer portal built on Salesforce Experience Cloud. As part of the launch, emails with promotional links will be sent to existing customers to log in and claim a discount. The marketing manager would like the portal dynamically branded so that users will be directed to the brand link they clicked on; otherwise, users will view a recognizable NTO-branded page. The campaign is launching quickly, so there is no time to procure any additional licenses. However, the development team is available to apply any required changes to the portal. Which approach should the identity architect recommend?",
      options: [
        "A. Use Heroku to build the new brand site and embedded login to reuse identities.",
        "B. Configure an additional community site on the same org that is dedicated for the new brand.",
        "C. Create a full sandbox to replicate the portal site and update the branding accordingly.",
        "D. Implement Experience ID in the code and extend the URLs and endpomts, as required.",
      ],
      answer: "D",
      title: "Question 7",
    },
    {
      content:
        "Universal Containers (UC) wants its users to access Salesforce and other SSO-enabled applications from a custom web page that UC magnets. UC wants its users to use the same set of credentials to access each of the applications. what SAML SSO flow should an Architect recommend for UC?",
      options: [
        "A. SP-Initiated with Deep Linking",
        "B. User-Agent",
        "C. SP-Initiated",
        "D. IdP-Initiated",
      ],
      answer: "D",
      title: "Question 8",
    },
    {
      content:
        "An Identity and Access Management (IAM) Architect is recommending Identity Connect to integrate Microsoft Active Directory (AD) with Salesforce for user provisioning, deprovisioning and single sign-on (SSO). Which feature of Identity Connect is applicable for this scenano?",
      options: [
        "A. If the number of provisioned users exceeds Salesforce licence allowances, identity Connect will start disabling the existing Salesforce users in First-in, First-out (FIFO) fashion.",
        "B. When configured, Identity Connect acts as an identity provider to both Active Directory and Salesforce, thus providing SSO as a default feature.",
        "C. When Identity Connect is in place, if a user is deprovisioned in an on-premise AD, the user's Salesforce session Is revoked Immediately.",
        "D. Identity Connect can be deployed as a managed package on salesforce org, leveraging High Availability of Salesforce Platform out-of-the-box.",
      ],
      answer: "C",
      title: "Question 9",
    },
    {
      content:
        "An architect needs to advise the team that manages the identity provider how to differentiate salesforce from other service providers. What SAML SSO setting in salesforce provides this capability?",
      options: [
        "A. Issuer",
        "B. Identity provider login URL",
        "C. Entity id",
        "D. SAML identity location",
      ],
      answer: "C",
      title: "Question 10",
    },
    {
      content:
        "After a recent audit, universal containers was advised to implement Two-factor Authentication for all of their critical systems, including salesforce. Which two actions should UC consider to meet this requirement? Choose 2 answers",
      options: [
        "A. Require users to provide their RSA token along with their credentials.",
        "B. Require users to supply their email and phone number, which gets validated.",
        "C. Require users to enter a second password after the first Authentication",
        "D. Require users to use a biometric reader as well as their password",
      ],
      answer: "A,D",
      title: "Question 11",
    },
    {
      content:
        "Universal containers (UC) would like to enable SAML-BASED SSO for a salesforce partner community. UC has an existing ldap identity store and a third-party portal. They would like to use the existing portal as the primary site these users access, but also want to allow seamless access to the partner community. What SSO flow should an architect recommend?",
      options: [
        "A. Web server",
        "B. IDP-initiated",
        "C. User-Agent",
        "D. Sp-Initiated",
      ],
      answer: "B",
      title: "Question 12",
    },
    {
      content:
        "Universal Containers (UC) operates in Asia, Europe and North America regions. There is one Salesforce org for each region. UC is implementing Customer 360 in Salesforce and has procured External Identity and Customer Community licenses in all orgs. Customers of UC use Community to track orders and create inquiries. Customers also tend to move across regions frequently. What should an identity architect recommend to optimize license usage and reduce maintenance overhead?",
      options: [
        "A. Contacts are required since Community access needs to be enabled. Maintenance is a necessary overhead that must be handled via data integration.",
        "B. Enable Contactless User in all orgs and downgrade users from Experience Cloud license to External Identity license once users have moved out of that region.",
        "C. Delete contact/ account records and deactivate user if user moves from a specific region; Sync will no longer be required.",
        "D. Merge three orgs into one instance of Salesforce. This will no longer require maintaining three separate copies of the same customer.",
      ],
      answer: "A",
      title: "Question 13",
    },
    {
      content:
        "Containers (UC) uses an internal system for recruiting and would like to have the candidates' info available in the Salesforce automatically when they are selected. UC decides to use OAuth to connect to Salesforce from the recruiting system and would like to do the authentication using digital certificates. Which two OAuth flows should be considered to meet the requirement? Choose 2 answers",
      options: [
        "A. JWT Bearer Token flow",
        "B. SAML Bearer Assertion flow",
        "C. Web Service flow",
        "D. Refresh Token flow",
      ],
      answer: "A,B",
      title: "Question 14",
    },
    {
      content:
        "A global fitness equipment manufacturer is planning to sell fitness tracking devices and has the following requirements: 1) Customer purchases the device. 2) Customer registers the device using their mobile app. 3) A case should automatically be created in Salesforce and associated with the customers account in cases where the device registers issues with tracking. Which OAuth flow should be used to meet these requirements?",
      options: [
        "A. OAuth 2.0 SAML Bearer Assertion Flow",
        "B. OAuth 2.0 User-Agent Flow",
        "C. OAuth 2.0 Username-Password Flow",
        "D. OAuth 2.0 Asset Token Flow",
      ],
      answer: "D",
      title: "Question 15",
    },
    {
      content:
        "Universal Containers (UC) is both a Salesforce and Google Apps customer. The UC IT team would like to manage the users for both systems in a single place to reduce administrative burden. Which two optimal ways can the IT team provision users and allow Single Sign-on between Salesforce and Google Apps ? Choose 2 answers",
      options: [
        "A. Build a custom app running on Heroku as the Identity Provider that can sync user information between Salesforce and Google Apps.",
        "B. Use Salesforce as the Identity Provider and Google Apps as a Service Provider and configure User Provisioning for Connected Apps.",
        "C. Use Identity Connect as the Identity Provider for both Salesforce and Google Apps and manage the provisioning from there.",
        "D. Use a third-party product as the Identity Provider for both Salesforce and Google Apps and manage the provisioning from there.",
      ],
      answer: "B,D",
      title: "Question 16",
    },
    {
      content:
        "Universal Containers (UC) wants to implement SAML SSO for their internal of Salesforce users using a third-party IdP. After some evaluation, UC decides NOT to SSO set up My Domain for their Salesforce org. How does that decision impact their SSO implementation?",
      options: [
        "A. SP-initiated SSO will NOT work",
        "B. Either SP- or IdP-initiated SSO will work.",
        "C. Neither SP- nor IdP-initiated SSO will work.",
        "D. IdP-initiated SSO will NOT work.",
      ],
      answer: "C",
      title: "Question 17",
    },
    {
      content:
        "A multinational industrial products manufacturer is planning to implement Salesforce CRM to manage their business. They have the following requirements: 1. They plan to implement Partner communities to provide access to their partner network . 2. They have operations in multiple countries and are planning to implement multiple Salesforce orgs. 3. Some of their partners do business in multiple countries and will need information from multiple Salesforce communities. 4. They would like to provide a single login for their partners. How should an Identity Architect solution this requirement with limited custom development?",
      options: [
        "A. Allow partners to choose the Salesforce org they need information from and use login flows to authenticate access.",
        "B. Register partners in one org and access information from other orgs using APIs.",
        "C. Create a partner login for the country of their operation and use SAML federation to provide access to other orgs.",
        "D. Consolidate Partner related information in a single org and provide access through Salesforce community.",
      ],
      answer: "C",
      title: "Question 18",
    },
    {
      content:
        "Universal Containers (UC) wants to build a mobile application that twill be making calls to the Salesforce REST API. UC's Salesforce implementation relies heavily on custom objects and custom Apex code. UC does not want its users to have to enter credentials every time they use the app. Which two scope values should an Architect recommend to UC? Choose 2 answers.",
      options: [
        "A. Api",
        "B. Full",
        "C. Refresh_token",
        "D. Custom_permissions",
      ],
      answer: "A,C",
      title: "Question 19",
    },
    {
      content:
        "Universal containers (UC) has multiple salesforce orgs and would like to use a single identity provider to access all of their orgs. How should UC'S architect enable this behavior?",
      options: [
        "A. Ensure the same username is allowed in multiple orgs by contacting salesforce support.",
        "B. Ensure that users have the same email value in their user records in all of UC's salesforce orgs.",
        "C. Ensure that users have the same alias value in their user records in all of UC's salesforce orgs.",
        "D. Ensure that users have the same Federation ID value in their user records in all of UC's salesforce orgs.",
      ],
      answer: "D",
      title: "Question 20",
    },
    {
      content:
        "Universal containers (UC) has an e-commerce website while customers can buy products, make payments, and manage their accounts. UC decides to build a customer Community on Salesforce and wants to allow the customers to access the community for their accounts without logging in again. UC decides to implement ansp-Initiated SSO using a SAML-BASED complaint IDP. In this scenario where salesforce is the service provider, which two activities must be performed in salesforce to make sp-Initiated SSO work? Choose 2 answers",
      options: [
        "A. Create a connected App",
        "B. Configure SAML SSO settings.",
        "C. Set up my domain",
        "D. Configure Delegated Authentication",
      ],
      answer: "B,C",
      title: "Question 21",
    },
    {
      content:
        "An Identity architect works for a multinational, multi-brand organization. As they work with the organization to understand their Customer Identity and Access Management requirements, the identity architect learns that the brand experience is different for each of the customer's sub-brands and each of these branded experiences must be carried through the login experience depending on which sub-brand the user is logging into. Which solution should the architect recommend to support scalability and reduce maintenance costs, if the organization has more than 150 sub-brands?",
      options: [
        "A. Create a community subdomain for each sub-brand and customize the look and feel of the Login page for each community subdomain to match the brand.",
        "B. Create a separate Salesforce org for each sub-brand so that each sub-brand has complete control over the user experience.",
        "C. Use Audiences to customize the login experience for each sub-brand and pass an audience ID to the community during the OAuth and Security Assertion Markup Language (SAML) flows.",
        "D. Assign each sub-brand a unique Experience ID and use the Experience ID to dynamically brand the login experience.",
      ],
      answer: "D",
      title: "Question 22",
    },
    {
      content:
        "A division of a Northern Trail Outfitters (NTO) purchased Salesforce. NTO uses a third party identity provider (IdP) to validate user credentials against Its corporate Lightweight Directory Access Protocol (LDAP) directory. NTO wants to help employees remember as passwords as possible. What should an identity architect recommend?",
      options: [
        "A. Setup Salesforce as an Authentication Provider to the existing IdP.",
        "B. Setup Salesforce as an IdP to authenticate against the LDAP directory.",
        "C. Use Salesforce connect to synchronize LDAP passwords to Salesforce.",
        "D. Setup Salesforce as a Service Provider to the existing IdP.",
      ],
      answer: "D",
      title: "Question 23",
    },
    {
      content:
        "How should an Architect force users to authenticate with Two-factor Authentication (2FA) for Salesforce only when not connected to an internal company network?",
      options: [
        'A. Apply the "Two-factor Authentication for User Interface Logins" permission and Login IP Ranges for all Profiles.',
        "B. Add the list of company's network IP addresses to the Login Range list under 2FA Setup.",
        "C. Use Custom Login Flows with Apex to detect the user's IP address and prompt for 2FA if needed.",
        "D. Use an Apex Trigger on the UserLogin object to detect the user's IP address and prompt for 2FA if needed.",
      ],
      answer: "C",
      title: "Question 24",
    },
    {
      content:
        "Universal Containers (UC) has an Experience Cloud site (Customer Community) where customers can authenticate and place orders, view the status of orders, etc. UC allows guest checkout. Mow can a guest register using data previously collected during order placement?",
      options: [
        "A. Enable self-registration and customize a self-registration page to collect only order details to retrieve customer data.",
        "B. Enable Facebook as an authentication provider and use a registration handler to collect only order details to retrieve customer data.",
        "C. Use a Connected App Handler Apex Plugin class to collect only order details to retrieve customer data.",
        "D. Enable Security Assertion Markup Language Sign-On and use a login flow to collect only order details to retrieve customer data.",
      ],
      answer: "A",
      title: "Question 25",
    },
    {
      content:
        "A global company's Salesforce Identity Architect is reviewing its Salesforce production org login history and is seeing some intermittent Security Assertion Markup Language (SAML SSO) 'Replay Detected and Assertion Invalid' login errors. Which two issues would cause these errors? Choose 2 answers",
      options: [
        "A. The subject element is missing from the assertion sent to salesforce.",
        "B. The assertion sent to 5alesforce contains an assertion ID previously used.",
        "C. The certificate loaded into SSO configuration does not match the certificate used by the IdP.",
        "D. The current time setting of the company's identity provider (IdP) and Salesforce platform is out of sync by more than eight minutes.",
      ],
      answer: "A,B",
      title: "Question 26",
    },
    {
      content:
        "customer service representatives at Universal containers (UC) are complaining that whenever they click on links to case records and are asked to login with SAML SSO, they are being redirected to the salesforce home tab and not the specific case record. What item should an architect advise the identity team at UC to investigate first?",
      options: [
        "A. The users have the correct Federation ID within salesforce.",
        "B. My domain is configured and active within salesforce.",
        "C. The identity provider is correctly preserving the Relay state",
        "D. The salesforce SSO settings are using http post",
      ],
      answer: "C",
      title: "Question 27",
    },
    {
      content:
        " An organization has a central cloud-based Identity and Access Management (IAM) Service for authentication and user management, which must be utilized by all applications as follows: 1 - Change of a user status in the central IAM Service triggers provisioning or deprovisioining in the integrated cloud applications. 2 - Security Assertion Markup Language single sign-on (SSO) is used to facilitate access for users authenticated at identity provider (Central IAM Service). Which approach should an IAM architect implement on Salesforce Sales Cloud to meet the requirements?",
      options: [
        "A. A Configure Salesforce as a SAML Service Provider, and enable SCIM (System for Cross-Domain Identity Management) for provisioning and deprovisioning of users.",
        "B. Deploy Identity Connect component and set up automated provisioning and deprovisioning of users, as well as SAML-based SSO.",
        "C. Configure Salesforce as a SAML service provider, and enable Just-in Time (JIT) provisioning and deprovisioning of users.",
        "D. Configure central IAM Service as an authentication provider and extend registration handler to manage provisioning and deprovisioning of users.",
      ],
      answer: "A",
      title: "Question 28",
    },
    {
      content:
        "Universal Containers (UC) is using a custom application that will act as the Identity Provider and will generate SAML assertions used to log in to Salesforce. UC is considering including custom parameters in the SAML assertion. These attributes contain sensitive data and are needed to authenticate the users. The assertions are submitted to salesforce via a browser form post. The majority of the users will only be able to access Salesforce via UC's corporate network, but a subset of admins and executives would be allowed access from outside the corporate network on their mobile devices. Which two methods should an Architect consider to ensure that the sensitive data cannot be tampered with, nor accessible to anyone while in transit?",
      options: [
        "A. Use a custom login flow to retrieve sensitive data using an Apex callout without including the attributes in the assertion.",
        "B. Use the Identity provider's certificate to digitally Sign and the Identity provider's certificate to encrypt the payload.",
        "C. Use Salesforce's Certificate to digitally sign the SAML Assertion and a Mobile Device Management client on the users' mobile devices.",
        "D. Use the Identity Provider's certificate to digitally sign and Salesforce's Certificate to encrypt the payload.",
      ],
      answer: "B,D",
      title: "Question 29",
    },
    {
      content:
        "Universal Containers (UC) employees have Salesforce access from restricted IP ranges only, to protect against unauthorised access. UC wants to roll out the Salesforce1 mobile app and make it accessible from any location. Which two options should an Architect recommend? Choose 2 answers",
      options: [
        "A. Remove existing restrictions on IP ranges for all types of user access.",
        "B. Relax the IP restriction with a second factor in the Connect App settings for Salesforce1 mobile app.",
        "C. Use Login Flow to bypass IP range restriction for the mobile app.",
        "D. Relax the IP restrictions in the Connect App settings for the Salesforce1 mobile app.",
      ],
      answer: "B,D",
      title: "Question 30",
    },
    {
      content:
        "A company's external application is protected by Salesforce through OAuth. The identity architect for the project needs to limit the level of access to the data of the protected resource in a flexible way. What should be done to improve security?",
      options: [
        "A. Leverage external objects and data classification policies.",
        'B. Select "Admin approved users are pre-authonzed" and assign specific profiles.',
        "C. Create custom scopes and assign to the connected app.",
        "D. Define a permission set that grants access to the app and assign to authorized users.",
      ],
      answer: "C",
      title: "Question 31",
    },
    {
      content:
        "Universal Containers (UC) rolling out a new Customer Identity and Access Management Solution will be built on top of their existing Salesforce instance. Several service providers have been setup and integrated with Salesforce using OpenlD Connect to allow for a seamless single sign-on experience. UC has a requirement to limit user access to only a subset of service providers per customer type. Which two steps should be done on the platform to satisfy the requirement? Choose 2 answers",
      options: [
        "A. Manage which connected apps a user has access to by assigning authentication providers to the users profile.",
        "B. Assign the connected app to the customer community, and enable the users profile in the Community settings.",
        "C. Set each of the Connected App access settings to Admin Pre-Approved.",
        "D. Use Profiles and Permission Sets to assign user access to Admin Pre-Approved Connected Apps.",
      ],
      answer: "C,D",
      title: "Question 32",
    },
    {
      content:
        "Universal Containers (UC) is rolling out its new Customer Identity and Access Management Solution built on top of its existing Salesforce instance. UC wants to allow customers to login using Facebook, Google, and other social sign-on providers. How should this functionality be enabled for UC, assuming ail social sign-on providers support OpenID Connect?",
      options: [
        "A. Configure an authentication provider and a registration handler for each social sign-on provider.",
        "B. Configure a single sign-on setting and a registration handler for each social sign-on provider.",
        "C. Configure a single sign-on setting and a JIT handler for each social sign-on provider.",
        "D. Configure an authentication provider and a Just-In-Time (JIT) handler for each social sign-on provider.",
      ],
      answer: "A",
      title: "Question 33",
    },
    {
      content:
        "Universal Containers (UC) has implemented SSO according to the diagram below. uses SAML while Salesforce Org 1 uses OAuth 2.0. Users usually start their day by first attempting to log into Salesforce Org 2 and then later in the day, they will log into either the Financial System or CPQ system depending upon their job position. Which two systems are acting as Identity Providers?",
      options: [
        "A. Financial System",
        "B. Pingfederate",
        "C. Salesforce Org 2",
        "D. Salesforce Org 1",
      ],
      answer: "B,D",
      title: "Question 34",
    },
    {
      content:
        "Universal Containers (UC) has a Customer Community that uses Facebook for of authentication. UC would like to ensure that changes in the Facebook profile are 65. reflected on the appropriate Customer Community user. How can this requirement be met?",
      options: [
        "A. Use the updateUser() method on the Registration Handler class.",
        "B. Use SAML Just-In-Time Provisioning between Facebook and Salesforce.",
        "C. Develop a scheduled job that calls out to Facebook on a nightly basis.",
        "D. Use information in the Signed Request that is received from Facebook.",
      ],
      answer: "A",
      title: "Question 35",
    },
    {
      content:
        "A financial services company uses Salesforce and has a compliance requirement to track information about devices from which users log in. Also, a Salesforce Security Administrator needs to have the ability to revoke the device from which users log in. What should be used to fulfill this requirement?",
      options: [
        "A. Use the Activations feature to meet the compliance requirement to track device information.",
        "B. Use the Login History object to track information about devices from which users log in.",
        "C. Use Login Flows to capture device from which users log in and store device and user information in a custom object.",
        "D. Use multi-factor authentication (MFA) to meet the compliance requirement to track device information.",
      ],
      answer: "A",
      title: "Question 36",
    },
    {
      content:
        "An identity architect is implementing a mobile-first Consumer Identity Access Management (CIAM) for external users. User authentication is the only requirement. The users email or mobile phone number should be supported as a username. Which two licenses are needed to meet this requirement? Choose 2 answers",
      options: [
        "A. Email Verification Credits",
        "B. SMS verification Credits",
        "C. Identity Connect Licenses",
        "D. External Identity Licenses",
      ],
      answer: "B,D",
      title: "Question 37",
    },
    {
      content:
        "Universal containers (UC) uses a home-grown employee portal for their employees to collaborate. UC decides to use salesforce ideas to allow the employees to post ideas from the employee portal. When clicking some links in the employee portal, the users should be redirected to salesforce, authenticated, and presented with relevant pages. What scope should be requested when using the Oauth token to meet this requirement?",
      options: ["A. API", "B. Full", "C. Visualforce", "D. Web"],
      answer: "D",
      title: "Question 38",
    },
    {
      content:
        "Universal Containers has multiple Salesforce instances where users receive emails from different instances. Users should be logged into the correct Salesforce instance authenticated by their IdP when clicking on an email link to a Salesforce record. What should be enabled in Salesforce as a prerequisite?",
      options: [
        "A. External Identity",
        "B. Multi-Factor Authentication",
        "C. Identity Provider",
        "D. My Domain",
      ],
      answer: "D",
      title: "Question 39",
    },
    {
      content:
        "Northern Trail Outfitters (NTO) uses Salesforce Experience Cloud sites (previously known as Customer Community) to provide a digital portal where customers can login using their Google account. NTO would like to automatically create a case record for first time users logging into Salesforce Experience Cloud. What should an Identity architect do to fulfill the requirement?",
      options: [
        "A. Implement a login flow with a record create component for Case.",
        "B. Implement a Just-in-Time handler class that has logic to create cases upon first login.",
        "C. Configure an authentication provider for Social Login using Google and a custom registration handler.",
        "D. Create an authentication provider for Social Login using Google and leverage standard registration handler.",
      ],
      answer: "A",
      title: "Question 40",
    },
    {
      content: "Under which scenario Web Server flow will be used?",
      options: [
        "A. Used for mobile applications and testing legacy Integrations.",
        "B. Used for verifying Access protected resources.",
        "C. Used for server-side components when page needs to be rendered.",
        "D. Used for web applications when server-side code needs to interact with APIS.",
      ],
      answer: "D",
      title: "Question 41",
    },
    {
      content:
        "Universal Containers uses Salesforce as an identity provider and Concur as the Employee Expense management system. The HR director wants to ensure Concur accounts for employees are created only after the appropnate approval in the Salesforce org. Which three steps should the identity architect use to implement this requirement? Choose 3 answers",
      options: [
        "A. Enable User Provisioning for the connected app.",
        "B. Create an approval process for a custom object associated with the provisioning flow.",
        "C. Create an approval process for user object associated with the provisioning flow.",
        "D. Create a connected app for Concur in Salesforce.",
        "E. Create an approval process for UserProvisionlngRequest object associated with the provisioning flow.",
      ],
      answer: "A,D,E",
      title: "Question 42",
    },
    {
      content:
        'Universal Containers (UC) implemented SSO to a third-party system for their Salesforce users to access the App Launcher. UC enabled "User Provisioning" on the Connected App so that changes to user accounts can be synched between Salesforce and the third party system. However, UC quickly notices that changes to user roles in Salesforce are not getting synched to the third-party system. What is the most likely reason for this behaviour?',
      options: [
        "A. The Approval queue for User Provisioning Requests is unmonitored.",
        "B. Salesforce roles have more than three levels in the role hierarchy.",
        "C. User Provisioning for Connected Apps does not support role sync.",
        "D. Required operation(s) was not mapped in User Provisioning Settings.",
      ],
      answer: "C",
      title: "Question 43",
    },
    {
      content:
        "Universal Containers (UC) is planning to add Wi-Fi enabled GPS tracking devices to its shipping containers so that the GPS coordinates data can be sent from the tracking device to its Salesforce production org via a custom API. The GPS devices have no direct user input or output capabilities. Which OAuth flow should the identity architect recommend to meet the requirement?",
      options: [
        "A. OAuth 2.0 Asset Token Flow for Securing Connected Devices",
        "B. OAuth 2.0 JWT Bearer Flow for Server-to-Server Integration",
        "C. OAuth 2.0 Username-Password Flow for Special Scenarios",
        "D. OAuth 2.0 Web Server Flow for Web App Integration",
      ],
      answer: "A",
      title: "Question 44",
    },
    {
      content:
        "An identity architect has been asked to recommend a solution that allows administrators to configure personalized alert messages to users before they land on the Experience Cloud site (formerly known as Community) homepage. What is recommended to fulfill this requirement with the least amount of customization?",
      options: [
        "A. Build a Lightning web Component (LWC) for a homepage that shows custom alerts.",
        "B. Use Login Flows to add a screen that shows personalized alerts.",
        "C. Customize the registration handler Apex class to create a routing logic navigating to different home pages based on the user profile.",
        "D. Create custom metadata that stores user alerts and use a LWC to display alerts.",
      ],
      answer: "B",
      title: "Question 45",
    },
    {
      content:
        "The security team at Universal Containers (UC) has identified exporting reports as a high-risk action and would like to require users to be logged into Salesforce with their Active Directory (AD) credentials when doing so. For all other users of Salesforce, users should be allowed to use AD Credentials or Salesforce credentials. What solution should be recommended to prevent exporting reports except when logged in using AD credentials while maintaining the ability to view reports when logged in with Salesforce credentials?",
      options: [
        "A. Use SAML Federated Authentication and block access to reports when accessed through a Standard Assurance session.",
        "B. Use SAML federated Authentication with a Login Flow to dynamically add or remove a Permission Set that grants the Export Reports Permission.",
        "C. Use SAML Federated Authentication and Custom SAML JIT Provisioning to dynamically and or remove a permission set that grants the Export Reports Permission.",
        "D. Use SAML federated Authentication, treat SAML Sessions as High Assurance, and raise the session level required for exporting reports.",
      ],
      answer: "D",
      title: "Question 46",
    },
    {
      content:
        'Universal containers (UC) has a classified information system that it\'s call centre team uses only when they are working on a case with a record type of "classified". They are only allowed to access the system when they own an open "classified" case, and their access to the system is removed at all other times. They would like to implement SAML SSO with salesforce as the IDP, and automatically allow or deny the staff\'s access to the classified information system based on whether they currently own an open "classified" case record when they try to access the system using SSO. What is the recommended solution for automatically allowing or denying access to the classified information system based on the open "classified" case record criteria?',
      options: [
        'A. Use custom SAML jit provisioning to dynamically query the user\'s open "classified" cases when attempting to access the classified information system',
        'B. Use apex trigger on case to dynamically assign permission sets that grant access when a user is assigned with an open "classified" case, and remove it when the case is closed.',
        'C. Use salesforce reports to identify users that currently owns open "classified" cases and should be granted access to the classified information system.',
        'D. Use a custom connected App handler using apex to dynamically allow access to the system based on whether the staff owns any open "classified" cases.',
      ],
      answer: "D",
      title: "Question 47",
    },
    {
      content:
        "Universal Containers (UC) plans to use a SAML-based third-party IdP serving both of the Salesforce Partner Community and the corporate portal. UC partners will log in 65* to the corporate portal to access protected resources, including links to Salesforce resources. What would be the recommended way to configure the IdP so that seamless access can be achieved in this scenario?",
      options: [
        "A. Set up the corporate portal as a Connected App in Salesforce and use the User Agent OAuth flow.",
        "B. Configure IdP-initiated SSO that passes the SAML token upon Salesforce resource access request.",
        "C. Configure SP-initiated SSO that passes the SAML token upon Salesforce resource access request.",
        "D. Set up the corporate portal as a Connected App in Salesforce and use the Web server OAuth flow.",
      ],
      answer: "B",
      title: "Question 48",
    },
    {
      content:
        "Universal Containers (UC) has a Desktop application to collect leads for marketing campaigns. UC wants to extend this application to integrate with Salesforce to create leads. Integration between the desktop application and salesforce should be seamless. What Authorization flow should the Architect recommend?",
      options: [
        "A. JWT Bearer Token flow",
        "B. User Agent Flow",
        "C. Username and Password Flow",
        "D. Web Server Authentication Flow",
      ],
      answer: "B",
      title: "Question 49",
    },
    {
      content:
        "A real estate company wants to provide its customers a digital space to design their interior decoration options. To simplify the registration to gain access to the community site (built in Experience Cloud), the CTO has requested that the IT/Development team provide the option for customers to use their existing social-media credentials to register and access. The IT lead has approached the Salesforce Identity and Access Management (IAM) architect for technical direction on implementing the social sign-on (for Facebook, Twitter, and a new provider that supports standard OpenID Connect (OIDC)). Which two recommendations should the Salesforce IAM architect make to the IT Lead? Choose 2 answers",
      options: [
        "A. Apex coding skills are needed for registration handler to create and update users.",
        "B. Authentication provider configuration is required each social sign-on providers; and enable Authentication providers in community.",
        "C. For supporting OIDC it is necessary to enable Security Assertion Markup Language (SAML) with Just-in-Time provisioning (JIT) and OAuth 2.0.",
        "D. Use declarative registration handler process builder/flow to create, update users and contacts.",
      ],
      answer: "A,B",
      title: "Question 50",
    },
    {
      content:
        "Northern Trail Outfitters (NTO) leverages Microsoft Active Directory (AD) for management of employee usernames, passwords, permissions, and asset access. NTO also owns a third-party single sign-on (SSO) solution. The third-party party SSO solution is used for all corporate applications, including Salesforce. NTO has asked an architect to explore Salesforce Identity Connect for automatic provisioning and deprovisiorung of users in Salesforce. What role does identity Connect play in the outlined requirements?",
      options: [
        "A. Single Sign-On",
        "B. Identity Provider",
        "C. Service Provider",
        "D. User Management",
      ],
      answer: "D",
      title: "Question 51",
    },
    {
      content:
        "Universal containers (UC) has a mobile application that it wants to deploy to all of its salesforce users, including customer Community users. UC would like to minimize the administration overhead, which two items should an architect recommend? Choose 2 answers",
      options: [
        'A. Enable the "All users may self-authorize" setting in the Connected App.',
        'B. Enable the "Refresh Tokens is valid until revoked " setting in the Connected App.',
        'C. Enable the "High Assurance session required" setting in the Connected App.',
        'D. Enable the "Enforce Ip restrictions" settings in the connected App.',
      ],
      answer: "A,B",
      title: "Question 52",
    },
    {
      content:
        "Universal Containers wants to implement SAML SSO for their internal Salesforce users using a third-party IdP. After some evaluation, UC decides not to set up My Domain for their Salesforce org. How does that decision impact their SSO implementation?",
      options: [
        "A. Either SP- or IdP-initiated SSO will work.",
        "B. SP-initiated SSO will not work.",
        "C. IdP-initiated SSO will not work.",
        "D. Neither SP- nor IdP-initiated SSO will work.",
      ],
      answer: "D",
      title: "Question 53",
    },
    {
      content:
        "A third-party app provider would like to have users provisioned via a service endpoint before users access their app from Salesforce. What should an identity architect recommend to configure the requirement with limited changes to the third-party app?",
      options: [
        "A. Redirect users to the third-party app for registration.",
        "B. Use a connected app with user provisioning flow.",
        "C. Use Salesforce identity with Security Assertion Markup Language (SAML) for provisioning users.",
        "D. Create Canvas app in Salesforce for third-party app to provision users.",
      ],
      answer: "B",
      title: "Question 54",
    },
    {
      content:
        "Universal Containers (UC) has a strict requirement to authenticate users to Salesforce using their mainframe credentials. The mainframe user store cannot be accessed from a SAML provider. UC would also like to have users in Salesforce created on the fly if they provide accurate mainframe credentials. How can the Architect meet these requirements?",
      options: [
        "A. Implement OAuth User-Agent Flow on the mainframe; use a Registration Handler to create the user on the fly.",
        "B. Use a Salesforce Login Flow to call out to a web service and create the user on the fly.",
        "C. Use the SOAP API to create the user when created on the mainframe; implement Delegated Authentication.",
        "D. Implement Just-In-Time Provisioning on the mainframe to create the user on the fly.",
      ],
      answer: "D",
      title: "Question 55",
    },
    {
      content:
        "Universal Containers wants to implement Single Sign-on for a Salesforce org using an external Identity Provider and corporate identity store. What type of authentication flow is required to support deep linking'",
      options: [
        "A. Identity-Provider-initiated SSO",
        "B. Web Server OAuth SSO flow",
        "C. StartURL on Identity Provider",
        "D. Service-Provider-Initiated SSO",
      ],
      answer: "D",
      title: "Question 56",
    },
    {
      content:
        "Northern Trail Outfitters (NTO) employees use a custom on-premise helpdesk application to request, approve, notify, and track access granted to various on-premises and cloud applications, including Salesforce. Salesforce is currently used to authenticate users. How should NTO provision Salesforce users as soon as they are approved in the helpdesk application with the approved profiles and permission sets?",
      options: [
        "A. Use a login flow to query the helpdesk to validate user status.",
        "B. Have the helpdesk initiate an IdP-initiated Just-m-Time provisioning Security Assertion Markup Language flow.",
        "C. Build an integration that performs a remote call-in to the Salesforce SOAP or REST API.",
        "D. Use Salesforce Connect to integrate with the helpdesk application.",
      ],
      answer: "A",
      title: "Question 57",
    },
    {
      content:
        "Universal containers (UC) built a customer Community for customers to buy products, review orders, and manage their accounts. UC has provided three different options for customers to log in to the customer Community: salesforce, Google, and Facebook. Which two role combinations are represented by the systems in the scenario? Choose 2 answers",
      options: [
        "A. Facebook is the service provider and salesforce is the identity provider",
        "B. Salesforce is the service provider and Google is the identity provider",
        "C. Google is the service provider and Facebook is the identity provider",
        "D. Salesforce is the service provider and Facebook is the identity provider",
      ],
      answer: "B,D",
      title: "Question 58",
    },
    {
      content:
        "How should an Architect automatically redirect users to the login page of the external Identity provider when using an SP-Initiated SAML flow with Salesforce as a Service Provider?",
      options: [
        "A. Set the Identity Provider as default and enable the Redirect to the Identity Provider setting on the SAML Configuration.",
        "B. Use visualforce as the landing page for My Domain to redirect users to the Identity Provider login Page.",
        "C. Enable the Redirect to the Identity Provider setting under Authentication Services on the My domain Configuration.",
        "D. Remove the Login page from the list of Authentication Services on the My Domain configuration.",
      ],
      answer: "D",
      title: "Question 59",
    },
    {
      content:
        "What is one of the roles of an Identity Provider in a Single Sign-on setup using SAML?",
      options: [
        "A. Validate token",
        "B. Consume token",
        "C. Create token",
        "D. Revoke token",
      ],
      answer: "C",
      title: "Question 60",
    },
    {
      content:
        "Universal containers (UC) wants to integrate a Web application with salesforce. The UC team has implemented the Oauth web-server Authentication flow for authentication process. Which two considerations should an architect point out to UC? Choose 2 answers",
      options: [
        "A. The flow involves passing the user credentials back and forth.",
        "B. The flow will not provide an Oauth refresh token back to the server.",
        "C. The web application should be hosted on a secure server.",
        "D. The web server must be able to protect consumer privacy",
      ],
      answer: "C,D",
      title: "Question 61",
    },
    {
      content:
        "Universal containers (UC) wants to implement Delegated Authentication for a certain subset of Salesforce users. Which three items should UC take into consideration while building the Web service to handle the Delegated Authentication request? Choose 3 answers",
      options: [
        "A. UC should whitelist all salesforce ip ranges on their corporate firewall.",
        "B. The return type of the Web service method should be a Boolean value",
        "C. Delegated Authentication is enabled for the system administrator profile.",
        "D. The web service can be written using either the soap or rest protocol.",
        "E. The web service needs to include Source IP as a method parameter.",
      ],
      answer: "A,B,E",
      title: "Question 62",
    },
    {
      content:
        "Northern Trail Outfitters manages application functional permissions centrally as Active Directory groups. The CRM_Superllser and CRM_Reportmg_SuperUser groups should respectively give the user the SuperUser and Reportmg_SuperUser permission set in Salesforce. Salesforce is the service provider to a Security Assertion Markup Language (SAML) identity provider. Mow should an identity architect ensure the Active Directory groups are reflected correctly when a user accesses Salesforce?",
      options: [
        "A. Use a login flow to query custom SAML attributes and set permission sets.",
        "B. Use a login flow to query standard SAML attributes and set permission sets.",
        "C. Use the Apex Just-in-Time handler to query standard SAML attributes and set permission sets.",
        "D. Use the Apex Just-in-Time handler to query custom SAML attributes and set permission sets.",
      ],
      answer: "D",
      title: "Question 63",
    },
    {
      content:
        "Universal Containers (UC) is looking to purchase a third-party application as an Identity Provider. UC is looking to develop a business case for the purchase in general and has enlisted an Architect for advice. Which two capabilities of an Identity Provider should the Architect detail to help strengthen the business case? Choose 2 answers",
      options: [
        "A. The Identity provider can store credentials for multiple applications.",
        "B. The Identity Provider can authenticate multiple applications.",
        "C. The Identity Provider can centralize enterprise password policy.",
        "D. The Identity Provider can authenticate multiple social media accounts.",
      ],
      answer: "B,C",
      title: "Question 64",
    },
    {
      content:
        "Northern Trail Outfitters (NTO) utilizes a third-party cloud solution for an employee portal. NTO also owns Salesforce Service Cloud and would like employees to be able to login to Salesforce with their third-party portal credentials for a seamless expenence. The third-party employee portal only supports OAuth. What should an identity architect recommend to enable single sign-on (SSO) between the portal and Salesforce?",
      options: [
        "A. Configure Salesforce for Delegated Authentication.",
        "B. Create a custom external authentication provider.",
        "C. Add the third-party portal as a connected app.",
        "D. Configure SSO to use the third party portal as an identity provider.",
      ],
      answer: "D",
      title: "Question 65",
    },
    {
      content:
        "Which two considerations should be made when implementing Delegated Authentication? Choose 2 answers",
      options: [
        "A. Just-in-time Provisioning can be configured for new users.",
        "B. It requires trusted IP ranges at the User Profile level.",
        "C. It can be used to authenticate API clients and mobile apps.",
        "D. The authentication web service can include custom attributes.",
        "E. Salesforce servers receive but do not validate a user's credentials.",
      ],
      answer: "A,C",
      title: "Question 66",
    },
    {
      content:
        "Universal containers wants to implement single Sign-on for a salesforce org using an external identity provider and corporate identity store. What type of Authentication flow is required to support deep linking?",
      options: [
        "A. Start URL on identity provider",
        "B. Web server Oauth SSO flow.",
        "C. Service-provider-initiated SSO",
        "D. Identity-provider-initiated SSO",
      ],
      answer: "C",
      title: "Question 67",
    },
    {
      content:
        "Universal Containers (UC) has Active Directory (AD) as their enterprise identity store and would like to use it for Salesforce user authentication. UC expects to synchronize user data between Salesforce and AD and Assign the appropriate Profile and Permission Sets based on AD group membership. What would be the optimal way to implement SSO?",
      options: [
        "A. Use Microsoft Access control Service as the Authentication provider.",
        "B. Use Active Directory with Reverse Proxy as the Identity Provider.",
        "C. Use Salesforce Identity Connect as the Identity Provider.",
        "D. Use Active Directory Federation Service (ADFS) as the Identity Provider.",
      ],
      answer: "C",
      title: "Question 68",
    },
    {
      content:
        "Universal Containers is budding a web application that will connect with the Salesforce API using JWT OAuth Flow. Which two settings need to be configured in the connect app to support this requirement? Choose 2 answers",
      options: [
        'A. The "edair_api" OAuth scope m the connected app.',
        "B. The Use Digital Signature option in the connected app.",
        'C. The "api" OAuth scope in the connected app.',
        'D. The "web" OAuth scope in the connected app,',
      ],
      answer: "B,C",
      title: "Question 69",
    },
    {
      content:
        "Universal Containers (UC) wants its closed Won opportunities to be synced to a Data Warehouse in near real time. UC has implemented Outbound Message to enable near real-time data sync. UC wants to ensure that communication between Salesforce and Target System is Secure. What Certificate is sent along with the Outbound Message?",
      options: [
        "A. The default Client Certificate or a Certificate from Certificate and Key Management menu.",
        "B. The default Client Certificate from the Develop--> API Menu.",
        "C. The Self-Signed Certificates from the Certificate & Key Management menu.",
        "D. The CA-Signed Certificate from the Certificate and Key Management menu.",
      ],
      answer: "B",
      title: "Question 70",
    },
    {
      content:
        "Northern Trail Outfitters recently acquired a company. Each company will retain its Identity Provider (IdP). Both companies rely extensively on Salesforce processes that send emails to users to take specific actions in Salesforce. How should the combined companys' employees collaborate in a single Salesforce org, yet authenticate to the appropriate IdP?",
      options: [
        "A. Have generated links append a querystnng parameter indicating the IdP. The login service will redirect to the appropriate IdP.",
        "B. Enable each IdP as a login option in the MyDomain Authentication Service settings. Users will then click on the appropriate IdP button.",
        "C. Configure unique MyDomains for each company and have generated links use the appropriate MyDomam in the URL.",
        "D. Have generated links be prefixed with the appropriate IdP URL to invoke an IdP-initiated Security Assertion Markup Language flow when clicked.",
      ],
      answer: "B",
      title: "Question 71",
    },
    {
      content:
        "Uwversal Containers (UC) is building a custom employee hut) application on Amazon Web Services (AWS) and would like to store their users' credentials there. Users will also need access to Salesforce for internal operations. UC has tasked an identity architect with evaluating Afferent solutions for authentication and authorization between AWS and Salesforce. How should an identity architect configure AWS to authenticate and authorize Salesforce users?",
      options: [
        "A. Develop a custom Auth server in AWS.",
        "B. Configure the custom employee app as a connected app.",
        "C. Create a custom external authentication provider.",
        "D. Configure AWS as an OpenID Connect Provider.",
      ],
      answer: "D",
      title: "Question 72",
    },
    {
      content:
        "A farming enterprise offers smart farming technology to its farmer customers, which includes a variety of sensors for livestock tracking, pest monitoring, climate monitoring etc. They plan to store all the data in Salesforce. They would also like to ensure timely maintenance of the Installed sensors. They have engaged a salesforce Architect to propose an appropriate way to generate sensor Information In Salesforce. Which OAuth flow should the architect recommend?",
      options: [
        "A. OAuth 2.0 Device Authentication Row",
        "B. OAuth 2.0 JWT Bearer Token Flow",
        "C. OAuth 2.0 SAML Bearer Assertion Flow",
        "D. OAuth 2.0 Asset Token Flow",
      ],
      answer: "D",
      title: "Question 73",
    },
    {
      content:
        "Universal Containers (UC) has implemented SAML-based SSO solution for use with their multi-org Salesforce implementation, utilizing one of the the orgs as the Identity Provider. One user is reporting that they can log in to the Identity Provider org but get a generic SAML error message when accessing the other orgs. Which two considerations should the architect review to troubleshoot the issue? Choose 2 answers",
      options: [
        "A. The Federation ID must be in the form of an email address.",
        "B. The Federation ID must be a valid Salesforce Username",
        "C. The Federation ID must is case sensitive",
        "D. The Federation ID must be populated on the user record.",
      ],
      answer: "C,D",
      title: "Question 74",
    },
    {
      content:
        "Universal containers (UC) would like to enable self - registration for their salesforce partner community users. UC wants to capture some custom data elements from the partner user, and based on these data elements, wants to assign the appropriate profile and account values. Which two actions should the architect recommend to UC? Choose 2 answers",
      options: [
        "A. Configure registration for communities to use a custom apex controller.",
        "B. Modify the communitiesselfregcontroller to assign the profile and account.",
        "C. Modify the selfregistration trigger to assign profile and account.",
        "D. Configure registration for communities to use a custom visualforce page.",
      ],
      answer: "B,D",
      title: "Question 75",
    },
    {
      content:
        "The CMO of an advertising company has invited an Identity and Access Management (IAM) specialist to discuss Salesforce out-of-box capabilities for configuring the company*s login and registration experience on Salesforce Experience Cloud. The CMO is looking to brand the login page with the company's logo, background color, login button color, and dynamic right-frame from an external URL. Which two solutions should the IAM specialist recommend? Choose 2 answers",
      options: [
        "A. Login & Registration pages can be branded in the Community Administration settings.",
        "B. Build custom pages for branding requirements in Experience Cloud.",
        "C. Use Experience Builder to build branded Reset and Forgot Password pages.",
        "D. Build custom site pages for reset and forgot password features.",
      ],
      answer: "A,C",
      title: "Question 76",
    },
    {
      content:
        "Universal containers (UC) uses a legacy Employee portal for their employees to collaborate and post their ideas. UC decides to use salesforce ideas for voting and better tracking purposes. To avoid provisioning users on Salesforce, UC decides to push ideas posted on the Employee portal to salesforce through API. UC decides to use an API user using Oauth Username - password flow for the connection. How can the connection to salesforce be restricted only to the employee portal server?",
      options: [
        "A. Add the employee portals IP address to the login IP range on the user profile.",
        "B. Use a digital certificate signed by the employee portal Server.",
        "C. Add the Employee portals IP address to the Trusted IP range for the connected App",
        "D. Use a dedicated profile for the user the Employee portal uses.",
      ],
      answer: "C",
      title: "Question 77",
    },
    {
      content:
        "Northern Trail Outfitters is implementing a busmess-to-business (B2B) collaboration site using Salesforce Experience Cloud. The partners will authenticate with an existing identity provider and the solution will utilize Security Assertion Markup Language (SAML) to provide single sign-on to Salesforce. Delegated administration will be used in the Expenence Cloud site to allow the partners to administer their users' access. How should a partner identity be provisioned in Salesforce for this solution?",
      options: [
        "A. Create a contactless user.",
        "B. Create only a contact.",
        "C. Create a person account.",
        "D. Create a user and a related contact.",
      ],
      answer: "D",
      title: "Question 78",
    },
    {
      content:
        "Universal containers(UC) has a customer Community that uses Facebook for authentication. UC would like to ensure that changes in the Facebook profile are reflected on the appropriate customer Community user. How can this requirement be met?",
      options: [
        "A. Use the updateuser() method on the registration handler class.",
        "B. Use information in the signed request that is received from Facebook.",
        "C. Develop a schedule job that calls out to Facebook on a nightly basis.",
        "D. Use SAML just-in-time provisioning between Facebook and Salesforce",
      ],
      answer: "A",
      title: "Question 79",
    },
    {
      content:
        "What item should an Architect consider when designing a Delegated Authentication implementation?",
      options: [
        "A. The Web service should be able to accept one to four input method parameters.",
        "B. The Web service should implement a custom password decryption method.",
        "C. The Web service should be secured with TLS using Salesforce trusted certificates.",
        "D. The web service should use the Salesforce Federation ID to identify the user.",
      ],
      answer: "C",
      title: "Question 80",
    },
    {
      content:
        "A company with 15,000 employees is using Salesforce and would like to take the necessary steps to highlight or curb fraudulent activity. Which tool should be used to track login data, such as the average number of logins, who logged in more than the average number of times and who logged in during non-business hours?",
      options: [
        "A. Login Forensics",
        "B. Login History",
        "C. Login Report",
        "D. Login Inspector",
      ],
      answer: "A",
      title: "Question 81",
    },
    {
      content:
        "An Architect has configured a SAML-based SSO integration between Salesforce and an external Identity provider and is ready to test it. When the Architect attempts to log in to Salesforce using SSO, the Architect receives a SAML error. Which two optimal actions should the Architect take to troubleshoot the issue?",
      options: [
        "A. Use a browser that has an add-on/extension that can inspect SAML.",
        "B. Paste the SAML Assertion Validator in Salesforce.",
        "C. Ensure the Callback URL is correctly set in the Connected Apps settings.",
        "D. Use the browser's Development tools to view the Salesforce page's markup.",
      ],
      answer: "A,B",
      title: "Question 82",
    },
    {
      content:
        "Universal containers uses an Employee portal for their employees to collaborate. employees access the portal from their company's internal website via SSO. It is set up to work with Active Directory. What is the role of Active Directory in this scenario?",
      options: [
        "A. Identity provider",
        "B. Identity store",
        "C. Authentication store",
        "D. Service provider",
      ],
      answer: "A",
      title: "Question 83",
    },
    {
      content:
        "Universal Containers is creating a mobile application that will be secured by Salesforce Identity using the OAuth 2.0 user-agent flow. Application users will authenticate using username and password. They should not be forced to approve API access in the mobile app or reauthenticate for 3 months. Which two connected app options need to be configured to fulfill this use case? Choose 2 answers",
      options: [
        "A. Set the Refresh Token Policy to expire refresh token after 3 months.",
        'B. Set Permitted Users to "All users may self-authorize".',
        'C. Set Permitted Users to "Admin approved users are pre-authorized".',
        "D. Set the Session Timeout value to 3 months.",
      ],
      answer: "A,B",
      title: "Question 84",
    },
    {
      content:
        "A consumer products company uses Salesforce to maintain consumer information, including orders. The company implemented a portal solution using Salesforce Experience Cloud for its consumers where the consumers can log in using their credentials. The company is considering allowing users to login with their Facebook or Linkedln credentials. Once enabled, what role will Salesforce play?",
      options: [
        "A. Salesforce will be the service provider (SP).",
        "B. Facebook and Linkedln will be the SPs.",
        "C. Facebook and Linkedln will act as the IdPs and SPs.",
        "D. Salesforce will be the identity provider (IdP).",
      ],
      answer: "A",
      title: "Question 85",
    },
    {
      content:
        "An identity architect has built a native mobile application and plans to integrate it with a Salesforce Identity solution. The following are the requirements for the solution: 1. Users should not have to login every time they use the app. 2. The app should be able to make calls to the Salesforce REST API. 3. End users should NOT see the OAuth approval page. How should the identity architect configure the Salesforce connected app to meet the requirements?",
      options: [
        'A. Enable the API Scope and Offline Access Scope on the connected app, and then set the Connected App access settings to "User may self authorize".',
        "B. Enable the API Scope and Offline Access Scope on the connected app, and then set the connected app to access settings to 'Admin Pre-Approved\".",
        'C. Enable the Full Access Scope and then set the connected app access settings to "Admin Pre-Approved".',
        'D. Enable the API Scope and Offline Access Scope, upload a certificate so JWT Bearer Flow can be used and then set the connected app access settings to "Admin Pre-Approved".',
      ],
      answer: "D",
      title: "Question 86",
    },
    {
      content:
        "Universal Containers (UC) is building an integration between Salesforce and a legacy web applications using the canvas framework. The security for UC has determined that a signed request from Salesforce is not an adequate authentication solution for the Third-Party app. Which two options should the Architect consider for authenticating the third-party app using the canvas framework? Choose 2 Answers",
      options: [
        "A. Utilize Canvas OAuth flow to allow the third-party appliction to authenticate itself against Salesforce as the Idp.",
        "B. Utilize Authorization Providers to allow the third-party appliction to authenticate itself against Salesforce as the Idp.",
        "C. Utilize the SAML Single Sign-on flow to allow the third-party to authenticate itself against UC's IdP.",
        "D. Create a registration handler Apex class to allow the third-party appliction to authenticate itself against Salesforce as the Idp.",
      ],
      answer: "A,C",
      title: "Question 87",
    },
  ],
});
