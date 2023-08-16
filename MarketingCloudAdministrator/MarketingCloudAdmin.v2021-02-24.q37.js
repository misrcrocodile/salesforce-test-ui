window.testContent = window.testContent || [];
var testId = "MarketingCloudAdmin";
var testName = "MarketingCloudAdmin";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "MarketingCloudAdmin.v2021-02-24.q37",
  content: [
    {
      content:
        "Northern Trail Outfitters wants to drive additional online sales. They are interested in using Einstein to recommend similar items to customers during the checkout process. Which two terms would they add to their website to accomplish this? Choose 2 answers",
      options: [
        "A. Recommendation Code",
        "B. Conversion/Cart Code",
        "C. Email Conversion Code",
        "D. Collect Code",
      ],
      answer: "A,D",
      title: "Question 1",
    },
    {
      content:
        "An email marketing manager is planning to send a promotional email to one million subscribers. Which data structure should be used?",
      options: [
        "A. Group",
        "B. Publication List",
        "C. Data Extension",
        "D. List",
      ],
      answer: "C",
      title: "Question 2",
    },
    {
      content:
        "Setup Assistant provides information and resources for configuring a new Marketing Cloud account. Which two topics does Setup Assistant cover? Choose 2 answers",
      options: [
        "A. Setting up the Data Structure",
        "B. Managing the Enhanced SFTP",
        "C. Enabling Mobile Connect",
        "D. Configuring Journey Builder",
      ],
      answer: "A,B",
      title: "Question 3",
    },
    {
      content:
        "Northern Trail Outfitters has Marketing Cloud users who need data extension View and Update permissions for campaigns related to B3C sales, out not any permissions for campaigns related to B2B sales. How should they accomplish this?",
      options: [
        "A. Update data extension object level permissions",
        "B. Create a new business unit",
        "C. Create a shared data extension",
        "D. Create separate folders and add permissions",
      ],
      answer: "C",
      title: "Question 4",
    },
    {
      content:
        "A customer wants to automate a series of three emails as part of a Membership Renewal drip campaign. Email #1 will be sent one month prior to the member's renewal date. Email #2 will be sent one week prior to the member's renewal date. Email #3 will be sent on the member's renewal date. A master audience is updated in real time via the API. Which steps should be included in the customer's automation?",
      options: [
        "A. Import File Activity > three Send Activities to the master data extension.",
        "B. Import File Activity > three Filter Activities > three Send Activities to the filtered audiences.",
        "C. Three Filter Activities > three Send Activities to the filtered audiences.",
        "D. Three Send Activities to the master data extension.",
      ],
      answer: "C",
      title: "Question 5",
    },
    {
      content:
        "Northern Trail Outfitters uses Parameter Manager to automatically tag links, They want to include a Campaign Identifier to the links within a specific campaign message. At which level should the utm_campaign value be configured?",
      options: ["A. Subscriber", "B. Link", "C. Account", "D. Email"],
      answer: "D",
      title: "Question 6",
    },
    {
      content:
        "A customer has an eCommerce site and imports data into three data extensions daily: Orders, Order_Details, and 'Products. The data extensions contain the following information: - Orders: OrderId, CustomerID, OrderNumber, OrderDate, OrderTotal, GrandTotal - Order_Details: ProductId, OrderID, Qty, UnitPrice, ExtendedPrice, Discount - Products: ProductId, SKU, Name, Description, Cost, Price Which two actions should be taken in Data Designer? Choose 2 answers",
      options: [
        "A. Create a one-to-one relationship between Order_Details and Products.",
        "B. Create a one -to -many relationship between Orders and Order_Details.",
        "C. Create a one-to-one relationship between Orders and Order_Details.",
        "D. Create a one-to-one relationship between the contact record and Order Details.",
      ],
      answer: "A,B",
      title: "Question 7",
    },
    {
      content:
        "Northern Trail Outfitters wants to segment audiences based on Sales Cloud data. Where would their Marketing Cloud admin configure Sales Cloud Objects to be synced and leveraged in Marketing Cloud.",
      options: [
        "A. Setup > Apps > Salesforce Integration",
        "B. Setup >Data Management > Synchronized Data Extensions",
        "C. Contact Builder > Data Extensions > Synchronized Data Extensions",
        "D. Contact Builder > Data Sources",
      ],
      answer: "D",
      title: "Question 8",
    },
    {
      content:
        "Northern Trail Outfitters has five business units in their Marketing Cloud account. All business units should be configured to use the same SFTP directory How should this setup be achieved?",
      options: [
        "A. Copy the parent SFTP user into each child business unit",
        "B. Child business unit SFTP user should be created",
        "C. Each business unit should have multiple SFTP users",
        "D. All child business units should have an individual SFTP user",
      ],
      answer: "D",
      title: "Question 9",
    },
    {
      content:
        "A Marketing Cloud admin to create custom roles for their business process. What should be taken into consideration to accomplish this?",
      options: [
        "A. Custom roles can only be edited by the user who created the role initially.",
        "B. Custom roles are available on their Marketing Cloud account.",
        "C. Custom roles override an individual user's granular permission assignments.",
        "D. Custom roles are only available within the business in which they were created.",
      ],
      answer: "C",
      title: "Question 10",
    },
    {
      content:
        "A Marketing Cloud admin is tasked with requesting Marketing Cloud Connect Multi-Org enablement. What consideration should be given to the preference profile centers for this integration?",
      options: [
        "A. Profile/Preference centers for Multi-Org accounts are configured in the Salesforce CRM settings.",
        "B. Profile/Preference centers are automatically created for each business unit connected through Multi-org",
        "C. Multi org does not support the standard profile preference center for the business units.",
        "D. Branding for each business units' profile centers will be inherited from the default business unit setup.",
      ],
      answer: "C",
      title: "Question 11",
    },
    {
      content:
        "A large retail company has selected Marketing Cloud and has asked to be fully migrated from their existing platform in three weeks. They have communicated the following: They currently have 3 million customers. They email customers twice a week with no known deliverability issues. Their contract includes one Sender Authentication Package (SAP). Which two responses articulate proper IP warming? Choose 2 answers",
      options: [
        "A. IP ramp -up can be accelerated by migrating to pre -warmed IP addresses.",
        "B. IP ramp -up can be bypassed, given their historical lack of deliverability issues.",
        "C. IP ramp -up takes four to six weeks to be able to fully send to all 3 million customers.",
        "D. IP ramp -up is important to establish a positive sender reputation.",
      ],
      answer: "C,D",
      title: "Question 12",
    },
    {
      content:
        "A customer will provide a single daily file on the Marketing Cloud SFTP at 3 AM and needs an alert if the file is not present on time. The file needs to be: Imported into a staging data extension. Separated into two different data extensions. Which workflow should meet these requirements?",
      options: [
        "A. File Drop Automation: Import File Activity > SQL Query Activity 1 > SQL Query Activity 2",
        "B. Scheduled Automation: Import File Activity > SQL Query Activity 1 > SQL Query Activity 2",
        "C. File Drop Automation: File Transfer Activity > Import File Activity > Filter Activity > SQL Query Activity 1",
        "D. Scheduled Automation: File Transfer Activity > Import File Activity > SQL Query Activity 1 > SQL Query Activity 2",
      ],
      answer: "B",
      title: "Question 13",
    },
    {
      content:
        "What functionality is contained in Journey Builder that does not exist in Automation Studio?",
      options: [
        "A. Native execution of a Server-side JavaScript activity.",
        "B. The option to convert a qualified Lead to a Contact.",
        "C. The ability to send an email to a Salesforce audience.",
        "D. Flexibility to wait based on duration or a specific time.",
      ],
      answer: "B",
      title: "Question 14",
    },
    {
      content:
        "Northern Trail Outfitters installed Query Studio for Marketing Cloud, however, users are reporting they do NOT have access How should the Marketing Cloud admin ensure users have access?",
      options: [
        "A. Install App-appropriate business units for expanded access",
        "B. License all appropriate users within the installed package",
        "C. Choose Public App Integration during the installation",
        "D. Configure the API Integration to allow all users access",
      ],
      answer: "B",
      title: "Question 15",
    },
    {
      content:
        "A MC admin wants to sync Contacts from Sales Cloud, but is concerned about the number of Contacts since not all the contacts will be sent an email. What should the admin do to ensure only specific Contacts are synced?",
      options: [
        "A. Filter records on a formula field",
        "B. Filter existing records in All Subscribers",
        "C. Filter records created after a specified date",
        "D. Filter records on a Boolean field",
      ],
      answer: "D",
      title: "Question 16",
    },
    {
      content:
        "A customer is interested in designing a solution to ensure that subscribers only receive categories of emails that they want to receive. The built-in subscription center will be used as part of the solution. Which feature should be utilized to make this happen?",
      options: [
        "A. Send Logging",
        "B. Subscriber Keys",
        "C. Profile Center",
        "D. Publication Lists",
      ],
      answer: "D",
      title: "Question 17",
    },
    {
      content:
        "A Marketing Cloud admin notices Individual Email Results are NOT being pushed back into Sales Cloud for a particular end. The admin of Marketing Cloud Connect is functioning properly. What should the admin confirm about the data extension?",
      options: [
        "A. The data extension is located in the Salesforce Data Extensions folder.",
        "B. The wind relationship links SubscriberKey to Subscribers on Email Address",
        "C. The data extension is located in the Synchronized Data Extensions folder.",
        "D. The triggeredSendDataExtension data extension template was used.",
      ],
      answer: "A",
      title: "Question 18",
    },
    {
      content:
        "Northern Trail Outfitters is setting up new hires on its instance of Marketing Cloud, which includes Email Studio, Mobile Connect, and Social Studio. One of the hires needs to manage the operations of all of the North American Business Units. What two roles, custom or standard, could be assigned to this user to meet the requirement? Choose 2 answers",
      options: [
        "A. Marketing Cloud Administrator",
        "B. Marketing Cloud Channel Manager",
        "C. Marketing Cloud Email Marketing Manager",
        "D. Marketing Cloud Regional or Local Administrator",
      ],
      answer: "C,D",
      title: "Question 19",
    },
    {
      content:
        "Northern Trail Outfitters is migrating from a small, in-house email solution to Marketing Cloud. What should the Marketing Cloud admin consider when sending from the new IP Address?",
      options: [
        "A. Building desirable sending history and data will be variable based on list size and engagement.",
        "B. Sending in large volumes will alert ISPs the new IP Address is now in use.",
        "C. The IP address is on reserve, is already in use, and has an email sending history.",
        "D. Migration of larger marketing campaigns is necessary prior to bringing on smaller, triggered campaigns.",
      ],
      answer: "B",
      title: "Question 20",
    },
    {
      content:
        "A Marketing Cloud admin wants to configure a new keyword for an upcoming SMS campaign. After entering the desired keyword CELEBRATION, the admin notices the keyword is unavailable. What issue could the admin be facing?",
      options: [
        "A. Keyword is used within another business unit",
        "B. Keyword has too many characters",
        "C. Keyword is a reserved word",
        "D. Keyword fails to meet content standards",
      ],
      answer: "A",
      title: "Question 21",
    },
    {
      content:
        "(NTO) wants to use complex criteria to identify subscribers for a special promotional email. Especially they want to target subscribers who opened or engaged with an email within the last 30 days and live within 10 miles of an NTO store. What should NTO do to create this audience?",
      options: [
        "A. Journey",
        "B. Data Filters",
        "C. SQL Queries",
        "D. Measures",
      ],
      answer: "D",
      title: "Question 22",
    },
    {
      content:
        "What elements of CAN-SPAM should the Marketing Cloud admin ensure are present for each Commercial send?",
      options: [
        "A. Business name and physical mailing address",
        "B. Business name and a link to the business website",
        "C. Preference Center link and physical mailing address",
        "D. Preference Center link and a link to the business website",
      ],
      answer: "C",
      title: "Question 23",
    },
    {
      content:
        "The Northern Trail Outfitters (NTO) marketing team is launching a new email campaign. NTO's Email Specialist wants to perform quality assurance checks on the email prior to send and has asked about using the Validate functionality for this effort. Which three items will Validate check in an email message? Choose 3 answers",
      options: [
        "A. Words or phrases used may trigger spam filters.",
        "B. Correct syntax is used on any AMPScript in the email's code.",
        "C. Grammar and spelling in the email text is correct.",
        "D. Each content area specified in a dynamic content rule exists.",
        "E. Personalization strings map to attributes or data extension fields",
      ],
      answer: "B,D,E",
      title: "Question 24",
    },
    {
      content:
        "A customer needs to link demographic information to its contact model in Contact Builder. What type of relationship should be used?",
      options: [
        "A. One -to -One Relationship",
        "B. Many -to -Many Relationship",
        "C. Many -to -One Relationship",
        "D. One -to -Many Relationship",
      ],
      answer: "D",
      title: "Question 25",
    },
    {
      content:
        "Northern Trail Outfitters (NTO) has the Discover Reporting Tool. Which two report types could help NTO drive their mobile adoption strategy? Choose 2 answers",
      options: [
        "A. Email Sending Performance Report",
        "B. Time Between Send and Engagement",
        "C. Deliverability Complaint Rate",
        "D. Email Performance by Device",
      ],
      answer: "A,D",
      title: "Question 26",
    },
    {
      content:
        "Northern Trail Outfitters (NTO) wants a business analyst to import contact lists. The analyst has the followCloud Channel Manager and Marketing Cloud Viewer. The Analyst logged in but is unable to import contacts. How should NTO update the user to allow the analyst the appropriate access?",
      options: [
        "A. Add Marketing Cloud Security Administrator",
        "B. Remove Marketing Cloud Viewer",
        "C. Remove Marketing Cloud Channel Manager",
        "D. Add Distributed Sending User",
      ],
      answer: "B",
      title: "Question 27",
    },
    {
      content:
        "NTO has been noting reduced deliverability when they do large sends. Which part of deliverability is tied to hitting Spam Traps during a send?",
      options: [
        "A. Authentication",
        "B. Content",
        "C. Engagement",
        "D. List Hygiene",
      ],
      answer: "A",
      title: "Question 28",
    },
    {
      content:
        "An email manager was anticipating a test email to arrive in their inbox. Where in Email Studio should the Marketing Cloud admin look to determine if the test deployed?",
      options: [
        "A. My Tracking > Test Send Emails",
        "B. My Reports > Administrator Reports > Email Sends By User",
        "C. My Tracking > A/B Testing",
        "D. My Reports > Administrator Reports > Email Send Report",
      ],
      answer: "A",
      title: "Question 29",
    },
    {
      content:
        "As part of their brand guidelines, Northern Trail Outfitters (NTO) uses a custom brand font for all print marketing materials. NTO wants to use their custom brand font in email as well. What is the recommended best practice for font usage in email?",
      options: [
        "A. Build an email using multiple images, with all text saved in the brand font.",
        "B. Edit an email's HTML to list the custom brand font in the style tag's font-family property.",
        "C. Use a web-safe font for text that closely matches the brand's custom font.",
        "D. Build an email as one image, with all text saved in the brand font.",
      ],
      answer: "C",
      title: "Question 30",
    },
    {
      content:
        "A customer is developing a new eCommerce section of their website and plans to leverage transactional data in customer journeys. Which two Marketing Cloud features will support this effort? Choose 2 answers",
      options: [
        "A. Web Analytics Connector",
        "B. Data Designer",
        "C. Content Builder",
        "D. Cloud Pages",
      ],
      answer: "D",
      title: "Question 31",
    },
    {
      content:
        "An entertainment company is hosting events across the country in different venues. They want to use Contact Builder to feed Journey Builder. Contact who enter a journey will go through a decision split based on the type of event. The journey will send a series of emails and one of them will contain the venue details dynamically populated with AMP script. The Company collects the following information: - Customer data (email address, first name, last name...). - Event registration (email address, event ID, event name, event type, venue ID...). - Venue details (venue ID, venue name, venue address...). - Payment details (email address, event ID, total paid...). The Company does not want to link everything in Contact Builder. Which are the two data sources that must be incorporated inside Contact Builder? Choose 2 answers.",
      options: [
        "A. Payment Details",
        "B. Event Registration",
        "C. Customer Data",
        "D. Venue Details",
      ],
      answer: "C,D",
      title: "Question 32",
    },
    {
      content:
        "Northern Trail Outfitters (NTO) hired a new Marketing Cloud admin, who was told all emails come from[email protected] the previous admin did not leave any documentation. Which aspects would confirm a Sender Authentication Package (SAP) has been set up on the account? 2 answers",
      options: [
        "A. Cloudpages personalized URLs are served from cloud.email.nto.com",
        "B. Users receive Marketing Cloud password reset emails from [email protected] nto.com",
        "C. Upon receiving an email, all tracked links start with click.email.nto.com",
        "D. The login page for Marketing Cloud Users is login.email.nto.com and is branded with NTO colors",
      ],
      answer: "A,C",
      title: "Question 33",
    },
    {
      content:
        "A customer wants Sales Cloud users to create and send Marketing Cloud emails. Which two recommendations should the consultant make? Choose 2 answers",
      options: [
        "A. The consultant should enable deep linking in Marketing Cloud Connect configuration.",
        "B. The consultant should enable the Create Email feature on the user Profile in the Sales Cloud.",
        "C. Each user should have a one-to-one relationship between the Marketing Cloud user and the Sales Cloud user.",
        "D. Each Sales Cloud user should have a System Administrator Profile and a Role at the top of the Role Hierarchy.",
      ],
      answer: "A,C",
      title: "Question 34",
    },
    {
      content:
        "A Marketing Cloud admin runs the Contacts Counts report and sees there are currently 500,000 contacts in their account. They have a total of 300,000 email subscribers, 200,000 synchronized contacts, and 75,000 mobile subscribers. Why would the total contact count be less than the total number of contacts from all data sources?",
      options: [
        "A. Synchronized contacts are only counted after sending",
        "B. Mobile subscribers are not counted as contacts.",
        "C. Only active email subscriber are counted.",
        "D. There are overlapping contacts in each of the channel",
      ],
      answer: "C",
      title: "Question 35",
    },
    {
      content:
        "Northern Trail Outfitters uses Marketing Cloud Connect to leverage Sales Cloud data in their journeys. a user recently reported the data coming from Sales Cloud is NOT up to date. Where should the Marketing Cloud admin begin troubleshooting?",
      options: [
        "A. Email Studio > Synchronized Data Extensions",
        "B. Contact Builder > Data Sources",
        "C. Contact Builder > Synchronized Data Extensions",
        "D. Automation Studio > File Transfers",
      ],
      answer: "B",
      title: "Question 36",
    },
    {
      content:
        "A Marketing Cloud admin is configuring a journey using Path Optimizer. they want to hold back 60% of the contacts until a winner has been selected. Which two settings should be selected before the admin can configure the Holdback percentage? Choose 2 answers",
      options: [
        "A. Data Extension entry source",
        "B. Run Once schedule type",
        "C. Winner evaluation",
        "D. Journey re-entry settings",
      ],
      answer: "B,C",
      title: "Question 37",
    },
  ],
});
