window.testContent = window.testContent || [];
window.testContent.push({
  name: "MarketingCloudAdmin.v2021-12-21.q37",
  content: [
    {
      content:
        "Northern Trail Outfitters (NTO) keeps their subscribers in sync with their external database via the import of a CSV file which is dropped to the of Marketing Cloud SFTP each day. However, NTO has realized the number of subscribers being sent emails is considerably lower than the number they were expecting based on records in their database. Which feature would allow NTO to monitor whether all records were added to the target data structure each day?",
      options: [
        "A. External Key within the Import File Activity",
        "B. RuntimeError within the File Drop Automation",
        "C. Run Completion within the File Drop Automation",
        "D. Notation Settings within the Import File Activity",
      ],
      answer: "D",
      title: "Question 1",
    },
    {
      content:
        "Northern Trail Outfitters (NTO) has decided to use Journey Builder tolaunch event-driven lifecycle marketing programs. This includes personalized interactions with customers with the goal of increasing purchase frequency. Which two pieces of information would help NTO achieve this objective? Choose 2 answers",
      options: [
        "A. Channel preference of customers.",
        "B. Last purchase date",
        "C. Products purchased from a competitor.",
        "D. Number of items per order.",
      ],
      answer: "A,B",
      title: "Question 2",
    },
    {
      content:
        "A Marketing Cloud admin has scheduled a query on a daily basis. They notice the query sometimes fails to execute. How would the admin ensure a notification is received when the query fails?",
      options: [
        'A. Add their Email Address in the automation "Runtime Error or Skipped Run NotificationSettings',
        "B. Add their Email Address in the Query Activity Notifications Field",
        "C. Install the Marketing Cloud App on phone to receive Push Messages",
        'D. Configure the "Event Notification Service"in Setup with their Email Address',
      ],
      answer: "A",
      title: "Question 3",
    },
    {
      content:
        "Northern Trail Outfitters (NTO) is concerned about unauthorized API access to their Marketing Cloud account. Which feature would NTO enable to assist in reducing threats from malicious API attacks?",
      options: [
        "A. Single Sign on Authentication",
        "B. IP Allowlist",
        "C. Field Level Encryption",
        "D. Advanced Audit Trail",
      ],
      answer: "B",
      title: "Question 4",
    },
    {
      content:
        "A Marketing Cloud admin is configuring a journey using Path Optimizer. they want to hold back 60% of the contacts until a winner has been selected. Which two settings should be selected before the admin can configure the Holdback percentage? Choose 2 answers",
      options: [
        "A. Journey re-entry settings",
        "B. Run Once schedule type",
        "C. Data Extension entry source",
        "D. Winner evaluation",
      ],
      answer: "B,D",
      title: "Question 5",
    },
    {
      content:
        "Northern Trail Outfitters (NTO) wants to limit who can receive Marketing Cloud tracking data via email from their Account toany email associated with their domain (ntoretail.com). Which steps should be taken to implement this? Choose 2 answers",
      options: [
        "A. Enable IP Whitelisting",
        "B. Add a Domain to the Export Email Whitelist",
        "C. Enforce Export Email Whitelist",
        "D. Edit the entity Verification Settings",
      ],
      answer: "B,C",
      title: "Question 6",
    },
    {
      content:
        "Northern Trail Outfitters (NTO) hired a new Marketing Cloud admin, who was told all emails come from[email protected] the previous admin did not leave any documentation. Which aspects would confirm a Sender Authentication Package (SAP) has been set up on the account? 2 answers",
      options: [
        "A. Upon receiving an email, all tracked links start with click.email.nto.com",
        "B. The login page for Marketing Cloud Users is login.email.nto.com and is branded with NTO colors",
        "C. Users receive Marketing Cloud password reset emails from [email protected] nto.com",
        "D. Cloudpages personalized URLs are served from cloud.email.nto.com",
      ],
      answer: "A,D",
      title: "Question 7",
    },
    {
      content:
        "Northern Trail Outfitters has noticed an issue with their sends today. Which two links in Setup Home could be used to troubleshoot the issue?! Choose 2 answers",
      options: [
        "A. Help and Training",
        "B. Create Support Case",
        "C. Failed Sends",
        "D. System Status",
      ],
      answer: "A,D",
      title: "Question 8",
    },
    {
      content:
        "A publishing company has presented the following: * A need to send renewal reminders to customers whosesubscriptions expire in 15 days and 7 days. * A campaign needs to be created and managed by a general marketing user who will not have administrative rights and who is not technical. * The customer's expiration date is included in the data file. What component should the customer's solution include? Choose 3 answers",
      options: [
        "A. Template-based emails",
        "B. Triggered Send",
        "C. Data Filter",
        "D. Automation StudioTerm",
        "E. Suppression list",
      ],
      answer: "A,C,D",
      title: "Question 9",
    },
    {
      content:
        "During discovery, the customer outlines data requirements and the anticipated use of Marketing Cloud with the following criteria: * Customer data will be fully refreshed every night via Import activity from the customer's data warehouse. * Contact records will be augmented by relational data tables via Contact Builder. * The customer data file will contain 5M records with 40+ attributes. * One attribute will house HTML code, 1000 characters max, that will be used to populate Account Access content areas in emails. * A customer ID will be used as the uniqueidentifier for each contact. Which statement differentiates the use of data extensions over lists?",
      options: [
        "A. Data extensions allow for add/update Import activity.",
        "B. Data extensions can store HTML code as an attribute.",
        "C. Data extensions are necessary for Contact Builder",
        "D. Data extensions support Customer ID tobe used as Subscriber Key.",
      ],
      answer: "C",
      title: "Question 10",
    },
    {
      content:
        "Security and legal teams determine subscriber data available to EMEA teams should NOT be available to AMER teams. How couldthe Marketing Cloud admin ensure distinct data integrity across the regions?",
      options: [
        "A. Deploy separate Publication Lists for each region within one account",
        "B. Separate regions into business units and apply Subscriber Filters",
        "C. Filter data view permissions at the subscriber level",
        "D. Deploy Multi-Org with a single Marketing Cloud Account",
      ],
      answer: "B",
      title: "Question 11",
    },
    {
      content:
        "A Marketing Cloud admin has been asked to get the last 30 days of Bounce data from their account. What should the admin use to get granular bounce data in bulk in a pre-defined format?",
      options: [
        "A. Automation Studio Query Activity",
        "B. Discover Deliverability Complaint Rate Report",
        "C. Automation Studio Tracking Extract",
        "D. CSV download of bounce data in My Tracking",
      ],
      answer: "C",
      title: "Question 12",
    },
    {
      content:
        "Which three considerations should be made when setting up Distributed Marketing? Choose 3 answers",
      options: [
        "A. Business users can select any email at time of send.",
        "B. Messages can be sent to Contacts, Leads, and Person Accounts.",
        "C. The DM administrator Profile is required to access Distributed Marketing.",
        "D. A journey can be connected to one or more Campaigns.",
        "E. Default options can be set up for the greeting in the email.",
      ],
      answer: "A,B,D",
      title: "Question 13",
    },
    {
      content:
        "Analyst of The Northern Trail Outfitters(NTO) marketing team needs to pull email metrics for an upcoming quarterly company meeting. These metrics need to be reported per email campaign for each of NTO's Business Units: * Number of Sends * Delivery Rate * Overall Bounce Rate * Block Bounce Rate *Open Rate * Click Rate * Complaint Rate * Unsubscribe Rate Which email report should NTO's Marketing Analyst pull from Marketing Cloud to get this information?",
      options: [
        "A. Account Send Summary Report",
        "B. Campaign Email Tracking Report",
        "C. Email Performance Over Time Report",
        "D. Email Send Report",
      ],
      answer: "A",
      title: "Question 14",
    },
    {
      content:
        "Northern Trail Outfitters installed Query Studio for Marketing Cloud, however, users are reporting they do NOT have access How should the Marketing Cloud admin ensure users have access?",
      options: [
        "A. License all appropriate users within the installed package",
        "B. Install App-appropriate business units for expanded access",
        "C. Choose Public App Integration during the installation",
        "D. Configure the API Integration to allow all users access",
      ],
      answer: "A",
      title: "Question 15",
    },
    {
      content: "What is Setup Assistant?",
      options: [
        "A. Support service allowing the outsourcing of repetitive admin tasks",
        "B. A dashboard containing key metrics for the business unit",
        "C. A search within Help and Training limited to configuration documents",
        "D. A prioritized account configuration checklist",
      ],
      answer: "D",
      title: "Question 16",
    },
    {
      content:
        "A Marketing Cloud admin wants to configure a new keyword for an upcoming SMS campaign. After entering the desired keyword CELEBRATION, the admin notices the keyword is unavailable. What issue could the admin be facing?",
      options: [
        "A. Keyword fails to meet content standards",
        "B. Keyword is a reserved word",
        "C. Keyword is used within another business unit",
        "D. Keyword has too many characters",
      ],
      answer: "C",
      title: "Question 17",
    },
    {
      content:
        "A customer is interested in designing a solution to ensure that subscribers only receive categories of emails that they want to receive. The built-in subscription center will be used as part of the solution. Which feature should beutilized to make this happen?",
      options: [
        "A. Subscriber Keys",
        "B. Publication Lists",
        "C. Profile Center",
        "D. Send Logging",
      ],
      answer: "B",
      title: "Question 18",
    },
    {
      content:
        "Where would a Marketing Cloud admin view all verified email addresses?",
      options: [
        "A. From Address Management",
        "B. Reply Mail Management",
        "C. Identity Verification Log",
        "D. Sender Profiles",
      ],
      answer: "A",
      title: "Question 19",
    },
    {
      content:
        "A Marketing Cloud admin to create custom roles for their business process. What should be taken into consideration to accomplish this?",
      options: [
        "A. Custom roles areavailable on their Marketing Cloud account.",
        "B. Custom roles are only available within the business in which they were created.",
        "C. Custom roles override an individual user's granular permission assignments.",
        "D. Custom roles can only be edited by the user who created the role initially.",
      ],
      answer: "C",
      title: "Question 20",
    },
    {
      content:
        "A Marketing Cloud admin is asked to understand how a certain content area within a Triggered SendEmail is performing. Which report should be used?",
      options: [
        "A. Sends Account Send Summary",
        "B. Impression Tracking for Triggered Sends",
        "C. Dynamic Content for Triggered Sends",
        "D. Email Performance by Attribute",
      ],
      answer: "B",
      title: "Question 21",
    },
    {
      content:
        "A Marketing Cloud admin is using the Import Wizard to import data into a non-sendable data extension,but receives an error indicating the import type being used requires a primary key. Which import type could the admin use instead?",
      options: [
        "A. Add and Update",
        "B. Add Only",
        "C. Overwrite",
        "D. Update Only",
      ],
      answer: "C",
      title: "Question 22",
    },
    {
      content:
        "A customer with limited technical resources has requested assistance in setting up a small emaildeployment that the customer will maintain long term. The email will display men's shoes to males in the audience and women's shoes to females in the audience. The sendable data extension contains a field with a value of Male or Female. Which method shoulda consultant recommended to ensure content is displayed properly within the email.",
      options: [
        "A. A/B Test content type",
        "B. AMPscriptlookupRows functions",
        "C. AMPscript conditional against the Gender field",
        "D. Dynamic Content Wizard",
      ],
      answer: "D",
      title: "Question 23",
    },
    {
      content:
        "Which three options determine when a contact could enter a journey? Choose 3 answers.",
      options: [
        "A. Re-entry by attribute",
        "B. No re-entry",
        "C. Re-entry by date",
        "D. Re-entry at any time",
        "E. Re-entry only after exiting",
      ],
      answer: "B,D,E",
      title: "Question 24",
    },
    {
      content:
        "A customer team wants to retarget subscribers who click on links of key items promoted across email campaigns. The customer has indicatedthe following: * Emails will be built using a custom dynamic template for these messages. * Links will vary over time and across campaigns. * Click activity will be cross-referenced with subscribers' regional markets on a master subscriber data extension. * Retargeting messages will dynamically populate content based on regional market. In order for this solution to be viable, which skill set does the customer team need to possess?",
      options: ["A. AMPscript", "B. HTML", "C. SQL", "D. SSJS"],
      answer: "A",
      title: "Question 25",
    },
    {
      content:
        "A customer frequently holds seminars and other events to interface with their customers. They plan to do thefollowing: - Use SmartCapture forms to write data into event registration data extensions. - Cross-reference the records in each registration data extension with corresponding invitation email sends. - Send a follow-up email to customers who click on theregistration link in the invitation email, but do not complete registration. Which skill is needed to build an efficient solution?",
      options: ["A. CSS", "B. SQL", "C. AMPscript", "D. HTML"],
      answer: "C",
      title: "Question 26",
    },
    {
      content:
        "Northern Trail Outfitters wants to set up a welcome journey that leverages customer data across three data extensions: Customers, Orders, and Products. What is the best way to facilitate thiswithin Contact Builder?",
      options: [
        "A. Create three distinct Attribute Groups that link each data extension directly to Contacts.",
        "B. Create three distinct Attribute Groups that link Customers to Contacts, Orders to Customers, and Products to Orders.",
        "C. Create a single Attribute Group that links Contacts to Customers, Orders to Products, and Products to Customers.",
        "D. Create a single Attribute Group that links Customers to Contacts, Orders to Customers, and Products to Orders.",
      ],
      answer: "D",
      title: "Question 27",
    },
    {
      content:
        "Northern Trail Outfitters needs to reduce the amount of work when managing messages to customers, but cannot add any more personnel due to budget constraints. There has been an increased number of customerpurchases on their website, and the team currently sends batch order confirmations. What solution will decrease manual workloads on the team and will improve their customers experience?",
      options: [
        "A. A user -initiated message to send an email to customers who made a purchase daily.",
        "B. A file drop automation to send emails to customers who have made apurchase.",
        "C. A scheduled automation to send emails to customers who made a purchase daily.",
        "D. A triggered message to send an email as soon as a customer completes a purchase.",
      ],
      answer: "D",
      title: "Question 28",
    },
    {
      content:
        "A Marketing Cloud admin is asked to add a set of four tracking parameters automatically to all the links in an email sent via email studio. Which solution should the admin suggest?",
      options: [
        "A. Web Analytics Connector",
        "B. Marketing Cloud Connect",
        "C. Google Analytics 360",
        "D. AMPscript for Marketing Cloud",
      ],
      answer: "A",
      title: "Question 29",
    },
    {
      content:
        "Northern Trail Outfitters wants to segment audiences based on Sales Cloud data. Where would their Marketing Cloud admin configure Sales Cloud Objects to be synced and leveraged in Marketing Cloud.",
      options: [
        "A. Setup > Apps > Salesforce Integration",
        "B. Contact Builder > Data Sources",
        "C. Contact Builder > Data Extensions > SynchronizedData Extensions",
        "D. Setup >Data Management > Synchronized Data Extensions",
      ],
      answer: "B",
      title: "Question 30",
    },
    {
      content:
        "A Marketing Cloud admin is asked to append an Urchin Tracking Module (UTM) variable stringto links in emails. What functionality would allow this?",
      options: [
        "A. Advertising Studio",
        "B. Personalization Builder",
        "C. Web Analytics Connector",
        "D. Web and Mobile Analytics",
      ],
      answer: "C",
      title: "Question 31",
    },
    {
      content:
        "What elements of CAN-SPAM shouldthe Marketing Cloud admin ensure are present for each Commercial send?",
      options: [
        "A. Preference Center link and physical mailing address",
        "B. Business name and a link to the business website",
        "C. Business name and physical mailing address",
        "D. Preference Center link and alink to the business website",
      ],
      answer: "A",
      title: "Question 32",
    },
    {
      content:
        "A Marketing Cloudadmin wants to append an Urchin Tracking Module (UTM) variable String to links in emails. Which functionality would allow this?",
      options: [
        "A. Parameter Manager",
        "B. Advertising Studio",
        "C. Web and Mobile Analytics",
        "D. Personalization Builder",
      ],
      answer: "A",
      title: "Question 33",
    },
    {
      content:
        "Northern Trail Outfitters does NOT want to store email addresses or phone numbers within Marketing Cloud. Which feature should they use?",
      options: [
        "A. Field Level Encryption",
        "B. Lookup reference to Contact Object",
        "C. Master-detail relationship to Contacts",
        "D. Tokenized Sending",
      ],
      answer: "D",
      title: "Question 34",
    },
    {
      content:
        "A customer has an eCommerce site and imports data into three data extensions daily: Orders, Order_Details, and 'Products. The data extensions contain the following information: - Orders: OrderId, CustomerID, OrderNumber, OrderDate, OrderTotal, GrandTotal - Order_Details: ProductId, OrderID, Qty, UnitPrice, ExtendedPrice, Discount - Products: ProductId, SKU, Name, Description, Cost, Price Which two actions should be taken in Data Designer? Choose 2 answers",
      options: [
        "A. Create a one -to -many relationship between Orders and Order_Details.",
        "B. Create a one-to-one relationship between Orders and Order_Details.",
        "C. Create a one-to-one relationship between the contact record and Order Details.",
        "D. Create a one-to-one relationship between Order_Details and Products.",
      ],
      answer: "A,D",
      title: "Question 35",
    },
    {
      content:
        "Northern Trail Outfitterswants to optimize their eCommerce site by sending a follow-up Email to a customer alter an online purchase is made. What feature could be used to solicit website feedback without navigating away from the email?",
      options: [
        "A. CloudPage forms Content Block",
        "B. Email Form Content Block",
        "C. Dynamic Content Block",
        "D. Reference Content Block",
      ],
      answer: "A",
      title: "Question 36",
    },
    {
      content:
        "A Marketing Cloud Administrator noticed a File DropAutomation has been falling on the Import File activity. The automation is configured with a filename pattern, so the filename is expected to begin with customer import_. The import is configured to look for a file named Customer import %%Year%%%% Month%%%%Day%%.csv, however, the admin notices the filenames Include seconds and milliseconds what should the admin do to fix the issue?",
      options: [
        "A. use %%FILENAME_FROM_TRIGGER%% in the Import File Activity",
        "B. Use the exact file name used for the trigger in the Import File Activity",
        "C. Make sure the team has a date stamp to avoid duplication",
        "D. Make sure the files placed on the correct subfolder within the SFTP",
      ],
      answer: "A",
      title: "Question 37",
    },
  ],
});
