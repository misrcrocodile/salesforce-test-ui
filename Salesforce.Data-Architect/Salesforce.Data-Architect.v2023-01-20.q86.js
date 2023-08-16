window.testContent = window.testContent || [];
var testId = "Salesforce.Data-Architect";
var testName = "Salesforce.Data-Architect";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "Salesforce.Data-Architect.v2023-01-20.q86",
  content: [
    {
      content:
        "A casino is implementing Salesforce and is planning to build a customer 360 degree view for a customer who visits its resorts. The casino currently maintains the following systems that record customer activity: L Point-of-sale system: All purchases for a customer\n       2. Salesforce; All customer service activity and sales activities for a customer\n       3. Mobile app: All bookings, preferences, and browser activity for a customer\n       4. Marketing: All email, SMS, and social campaigns for a customer\n       Customer service agents using Salesforee would like to view the activities from all four systems to provide support to customers. The information has to be current and real time.\n       What strategy should the data architect implement to satisfy this requirement?",
      options: [
        "A. Migrate customer activities fro, all four system into Salesforce.",
        "B. Periodically upload summary information in Salesforce to build a 360 degree view.",
        "C. Use a customer data mart to create the 360 degree view of the customer.",
        "D. Explore external data sources in Salesforce to build a 360 degree view of the customer.",
      ],
      answer: "D",
      title: "Question 1",
    },
    {
      content:
        "Cloud Kicks has the following requirements:\n       * Their Shipment custom object must always relate to a Product, a Sender, and a Receiver (all separate custom objects).\n       * If a Shipment is currently associated with a Product, Sender, or Receiver, deletion of those records should not be allowed.\n       * Each custom object must have separate sharing models.\n       What should an Architect do to fulfill these requirements?",
      options: [
        "A. Create a required Lookup relationship to each of the three parent records.",
        "B. Create a Master-Detail relationship to each of the three parent records.",
        "C. Create two Master-Detail and one Lookup relationship to the parent records.",
        "D. Associate the Shipment to each parent record by using a VLOOKUP formula field.",
      ],
      answer: "A",
      title: "Question 2",
    },
    {
      content:
        "A data architect has been tasked with optimizing a data stewardship engagement for a Salesforce instance Which three areas of Salesforce should the architect review before proposing any design recommendation? Choose 3 answers",
      options: [
        "A. Review the sharing model to determine impact on duplicate records.",
        "B. Review the metadata xml files for redundant fields to consolidate.",
        "C. Run key reports to determine what fields should be required.",
        "D. Determine if any integration points create records in Salesforce.",
        "E. Export the setup audit trail to review what fields are being used.",
      ],
      answer: "A,B,C",
      title: "Question 3",
    },
    {
      content:
        "Universal Containers has a legacy system that captures Conferences and Venues. These Conferences can occur at any Venue. They create hundreds of thousands of Conferences per year. Historically, they have only used 20 Venues. Which two things should the data architect consider when denormalizing this data model into a single Conference object with a Venue picklist? Choose 2 answers",
      options: [
        "A. Bulk API limitations on picklist fields.",
        "B. Standard list view in -line editing.",
        "C. Org data storage limitations.",
        "D. Limitations on master -detail relationships.",
      ],
      answer: "A,B",
      title: "Question 4",
    },
    {
      content:
        "Universal Containers wants to develop a dashboard in Salesforce that will allow Sales Managers to do data exploration using their mobile device (i.e., drill down into sales-related data) and have the possibility of adding ad-hoc filters while on the move. What is a recommended solution for building data exploration dashboards in Salesforce?",
      options: [
        "A. Create a Dashboard using Analytics Cloud that will allow the user to create ad-hoc lenses and drill down.",
        "B. Create a Dashboard in an external reporting tool, export data to the tool, and add link to the dashboard in Salesforce.",
        "C. Create a Dashboard in an external reporting tool, export data to the tool, and embed the dashboard in Salesforce using the Canval toolkit.",
        "D. Create a standard Salesforce Dashboard and connect it to reports with the appropriate filters.",
      ],
      answer: "A",
      title: "Question 5",
    },
    {
      content:
        "NTO has decided to franchise its brand. Upon implementation, 1000 franchisees will be able to access BTO's product information and track large customer sales and opportunities through a portal. The Franchisees will also be able to run monthly and quarterly sales reports and projections as well as view the reports in dashboards.\n       Which licenses does NTO need to provide these features to the Franchisees?",
      options: [
        "A. Salesforce Sales Cloud license",
        "B. Partner Community license",
        "C. Customer Community license",
        "D. Lightning Platform license",
      ],
      answer: "B",
      title: "Question 6",
    },
    {
      content:
        "NTO processes orders from its website via an order management system (OMS). The OMS stores over 2 million historical records and is currently not integrated with SF. The Sales team at NTO using Sales cloud and would like visibility into related customer orders yet they do not want to persist millions of records directly in Salesforce. NTO has asked the data architect to evaluate SF connect and the concept of data verification. Which 3 considerations are needed prior to a SF Connect implementation?\n       Choose 3 answers:",
      options: [
        "A. Create a 2nd system Admin user for authentication to the external source.",
        "B. Identify the external tables to sync into external objects",
        "C. Develop an object relationship strategy.",
        "D. Assess whether the external data source is reachable via an ODATA endpoint.",
        "E. Configure a middleware tool to poll external table data",
      ],
      answer: "B,C,D",
      title: "Question 7",
    },
    {
      content:
        "Universal Containers (UC) is implementing Salesforce Sales Cloud and Service Cloud. As part of their implementation, they are planning to create a new custom object (Shipments), which will have a lookup relationship to Opportunities. When creating shipment records, Salesforce users need to manually input a customer reference, which is provided by customers, and will be stored in the Customer_Reference__c text custom field. Support agents will likely use this customer reference to search for Shipment records when resolving shipping issues. UC is expecting to have around 5 million shipment records created per year. What is the recommended solution to ensure that support agents using global search and reports can quickly find shipment records?",
      options: [
        "A. Implement an archiving process for shipment records created after five years.",
        "B. Implement an archiving process for shipment records created after three years.",
        "C. Set Customer-Reference_c as an External ID (non-unique).",
        "D. Set Customer-Reference_c as an External ID (unique).",
      ],
      answer: "D",
      title: "Question 8",
    },
    {
      content:
        "Universal Containers (UC) is concerned that data is being corrupted daily either through negligence or maliciousness. They want to implement a backup strategy to help recover any corrupted data or data mistakenly changed or even deleted. What should the data architect consider when designing a field -level audit and recovery plan?",
      options: [
        "A. Review projected data storage needs.",
        "B. Reduce data storage by purging old data.",
        "C. Implement an AppExchange package.",
        "D. Schedule a weekly export file.",
      ],
      answer: "B",
      title: "Question 9",
    },
    {
      content:
        "Universal Containers (UC) is implementing a new customer categorization process where customers should be assigned to a Gold, Silver, or Bronze category if they've purchased UC's new support service. Customers are expected to be evenly distributed across all three categories. Currently, UC has around 500,000 customers, and is expecting 1% of existing non-categorized customers to purchase UC's new support service every month over the next five years. What is the recommended solution to ensure long-term performance, bearing in mind the above requirements?",
      options: [
        "A. Implement a new Categories custom object and a master-detail relationship from Account to Category.",
        "B. Implement a new picklist custom field in the Account object with Gold, Silver, and Bronze values.",
        "C. Implement a new Categories custom object and create a lookup field from Account to Category.",
        "D. Implement a new global picklist custom field with Gold, Silver, and Bronze values and enable it in Account.",
      ],
      answer: "B",
      title: "Question 10",
    },
    {
      content:
        "To avoid creating duplicate Contacts, a customer frequently uses Data Loader to upsert Contact records into Salesforce. What common error should the data architect be aware of when using upsert?",
      options: [
        "A. Errors with duplicate external Id values within the same CSV file.",
        "B. Errors when a duplicate Contact name is found cause upsert to fail.",
        "C. Errors with records being updated and inserted in the same CSV file.",
        "D. Errors with using the wrong external Id will cause the load to fail.",
      ],
      answer: "A",
      title: "Question 11",
    },
    {
      content:
        "NTO has outgrown its current salesforce org and will be migrating to new org shortly. As part of this process NTO will be migrating all of its metadata and dat a. NTO's data model in the source org has a complex relationship hierarchy with several master detail and lookup relationships across objects, which should be maintained in target org.\n       What 3 things should a data architect do to maintain the relationship hierarchy during migration?\n       Choose 3 answers:",
      options: [
        "A. Replace source record ID's with new record ID's from the target org in the import file.",
        "B. Redefine the master detail relationship fields to lookup relationship fields in the target org.",
        "C. Keep the relationship fields populated with the source record ID's in the import file.",
        "D. Create a external id field for each object in the target org and map source record ID's to this field.",
        "E. Use data loader to export the data from source org and then import or Upsert into the target org in sequential order.",
      ],
      answer: "A,D,E",
      title: "Question 12",
    },
    {
      content:
        "Universal Containers has a requirement to store more than 100 million records in salesforce and needs to create a custom big object to support this business requirement.\n       Which two tools should a data architect use to build custom object?",
      options: [
        "A. Go to Big Object In setup select new to create big object.",
        "B. Go to Object manager In setup and select new to create big object.",
        "C. Use DX to create big object.",
        "D. Use Metadata API to create big object.",
      ],
      answer: "A,D",
      title: "Question 13",
    },
    {
      content:
        "A Salesforce customer has plenty of data storage. Sales Reps are complaining that searches are bringing back old records that aren't relevant any longer. Sales Managers need the data for their historical reporting.What strategy should a data architect use to ensure a better user experience for the Sales Reps?",
      options: [
        "A. Set data access to Private to hide old data from Sales Reps.",
        "B. Archive and purge old data from Salesforce on a monthly basis.",
        "C. Use Batch Apex to archive old data on a rolling nightly basis.",
        "D. Create a Permission Set to hide old data from Sales Reps.",
      ],
      answer: "B",
      title: "Question 14",
    },
    {
      content:
        "US has released a new disaster recovery (DR)policy that states that cloud solutions need a business continuity plan in place separate from the cloud providers built in data recovery solution.\n       Which solution should a data architect use to comply with the DR policy?",
      options: [
        "A. Utilize an ETL tool to migrate data to an on-premise archive solution.",
        "B. Leverage a 3rd party tool that extract salesforce data/metadata and stores the information in an external protected system.",
        "C. Write a custom batch job to extract data changes nightly, and store in an external protected system.",
        "D. Leverage salesforce weekly exports, and store data in Flat files on a protected system.",
      ],
      answer: "B",
      title: "Question 15",
    },
    {
      content:
        'Get Cloudy Consulting uses an invoicing system that has specific requirements. One requirement is that attachments associated with the Invoice_c custom object be classified by Types (i.e., ""Purchase Order"", ""Receipt"", etc.) so that reporting can be performed on invoices showing the number of attachments grouped by Type.\n       What should an Architect do to categorize the attachments to fulfill these requirements?',
      options: [
        "A. Add additional options to the standard ContentType picklist field for the Attachment object.",
        "B. Add a ContentType picklist field to the Attachment layout and create additional picklist options.",
        "C. Create a custom picklist field for the Type on the standard Attachment object with the values.",
        "D. Create a custom object related to the Invoice object with a picklist field for the Type.",
      ],
      answer: "D",
      title: "Question 16",
    },
    {
      content:
        "A customer needs a sales model that allows the following:\n       Opportunities need to be assigned to sales people based on the zip code.\n       Each sales person can be assigned to multiple zip codes.\n       Each zip code is assigned to a sales area definition. Sales is aggregated by sales area for reporting.\n       What should a data architect recommend?",
      options: [
        "A. Add custom fields in opportunities for zip code and use assignment rules.",
        "B. Assign opportunities using list views using zip code.",
        "C. Allow sales users to manually assign opportunity ownership based on zip code.",
        "D. Configure territory management feature to support opportunity assignment.",
      ],
      answer: "D",
      title: "Question 17",
    },
    {
      content:
        "To address different compliance requirements, such as general data protection regulation (GDPR), personally identifiable information (PII), of health insurance Portability and Accountability Act (HIPPA) and others, a SF customer decided to categorize each data element in SF with the following:\n       Data owner\n       Security Level, such as confidential\n       Compliance types such as GDPR, PII, HIPPA\n       A compliance audit would require SF admins to generate reports to manage compliance.\n       What should a data architect recommend to address this requirement?",
      options: [
        "A. Create a custom object and field to capture necessary compliance information and build custom reports.",
        "B. Use field metadata attributes for compliance categorization, data owner, and data sensitivity level.",
        "C. Use metadata API, to extract field attribute information and use the extract to classify and build reports",
        "D. Build reports for field information, then export the information to classify and report for Audits.",
      ],
      answer: "B",
      title: "Question 18",
    },
    {
      content:
        "Universal Containers has received complaints that customers are being called by multiple Sales Reps where the second Sales Rep that calls is unaware of the previous call by their coworker. What is a data quality problem that could cause this?",
      options: [
        "A. Duplicate Contact records exist in the system.",
        "B. Missing phone number on the Contact record.",
        "C. Customer phone number has changed on the Contact record.",
        "D. Duplicate Activity records on a Contact.",
      ],
      answer: "A",
      title: "Question 19",
    },
    {
      content:
        "UC recently migrated 1 Billion customer related records from a legacy data store to Heroku Postgres. A subset of the data need to be synchronized with salesforce so that service agents are able to support customers directly within the service console. The remaining non- synchronized set of data will need to be accessed by salesforce at any point in time, but UC management is concerned about storage limitations.\n       What should a data architect recommend to meet these requirements with minimal effort?",
      options: [
        "A. Migrate the data to big objects and leverage async SOQL with custom objects.",
        "B. Use Heroku connect to bi-directional, sync all data between systems.",
        "C. As needed, make call outs into Heroku postgres and persist the data in salesforce.",
        "D. Virtualize the remaining set of data with salesforce connect and external objects.",
      ],
      answer: "D",
      title: "Question 20",
    },
    {
      content:
        "Universal Containers (UC) uses Salesforce for tracking opportunities (Opportunity). UC uses an internal ERP system for tracking deliveries and invoicing. The ERP system supports SOAP API and OData for bi-directional integration between Salesforce and the ERP system. UC has about one million opportunities. For each opportunity, UC sends 12 invoices, one per month. UC sales reps have requirements to view current invoice status and invoice amount from the opportunity page. When creating an object to model invoices, what should the architect recommend, considering performance and data storage space?",
      options: [
        "A. Create an external object Invoice _x with a Lookup relationship with Opportunity.",
        "B. Create a custom object Invoice _c with a master -detail relationship with Opportunity.",
        "C. Use Streaming API to get the current status from the ERP and display on the Opportunity page.",
        "D. Create a custom object Invoice _c with a Lookup relationship with Opportunity.",
      ],
      answer: "A",
      title: "Question 21",
    },
    {
      content:
        "UC has a variety of systems across its technology landscape, including SF, legacy enterprise resource planning (ERP) applications and homegrown CRM tools. UC has decided that they would like to consolidate all customer, opportunity and order data into Salesforce as part of its master data management (MDM) strategy.\n       What are the 3 key steps that a data architect should take when merging data from multiple systems into Salesforce? Choose 3 answers:",
      options: [
        "A. Create new fields to store additional values from all the systems.",
        "B. Analyze each system's data model and perform gap analysis",
        "C. Install a 3rd party AppExchange tool to handle the merger",
        "D. Work with Stakeholders to define record and field survivorship rules",
        "E. Utilize an ETL tool to merge, transform and de-duplicate data.",
      ],
      answer: "B,D,E",
      title: "Question 22",
    },
    {
      content:
        "Northern trail Outfitters (NTO) uses Sales Cloud and service Cloud to manage sales and support processes. Some of NTOs team are complaining they see new fields on their page unsure of which values need be input. NTO is concerned about lack of governance in making changes to Salesforce.\n       Which governance measure should a data architect recommend to solve this issue?",
      options: [
        "A. Create reports to identify which users are leaving blank, and use external data sources o agreement the missing data.",
        "B. Create validation rules with error messages to explain why the fields is used",
        "C. Create and manage a data dictionary and ups a governance process for changes made to common objects.",
        "D. Add description fields to explain why the field is used, and mark the field as required.",
      ],
      answer: "C",
      title: "Question 23",
    },
    {
      content:
        "Universal Containers (UC) has a very large and complex Salesforce org with hundreds of validation rules and triggers. The triggers are responsible for system updates and data manipulation as records are created or updates by users. A majority of the automation tool within UC'' org were not designed to run during a data load. UC is importing 100,000 records into Salesforce across several objects over the weekend.\n       What should a data architect do to mitigate any unwanted results during the import?",
      options: [
        "A. Bulkily the trigger to handle import leads.",
        "B. Ensure validation rules, triggers and other automation tools are disabled.",
        "C. Import the data in smaller batches over a 24-hour period.",
        "D. Ensure duplication and matching rules and defined.",
      ],
      answer: "B",
      title: "Question 24",
    },
    {
      content:
        "Universal Containers (UC) uses the following Salesforce products:\n       Sales Cloud for customer management.\n       Marketing Cloud for marketing.\n       Einstein Analytics for business reporting.\n       UC occasionally gets a list of prospects from third-party source as comma-separated values (CSV) files for marketing purposes. Historically, UC would load contact Lead object in Salesforce and sync to Marketing Cloud to send marketing communications. The number of records in the Lead object has grown over time and has been consuming large amounts of storage in Sales Cloud, UC is looking for recommendations to reduce the storage and advice on how to optimize the marketing Cloud to send marketing communications. The number of records in the Lead object has grown over time and has been consuming large amounts of storage in Sales Cloud, UC is looking for recommendations to reduce the storage and advice on how to optimize the marketing process.\n       What should a data architect recommend to UC in order to immediately avoid storage issues in the future?",
      options: [
        "A. Load the contacts directly to Marketing Cloud and have a reconciliation process to track prospects that are converted to customers.",
        "B. Load the CSV files in an external database and sync with Marketing Cloud prior to sending marketing communications.",
        "C. Load the CSV files in Einstein Analytics and sync with Marketing Cloud prior to sending marketing communications ;",
        "D. Continue to use the existing process to use Lead object to sync with Marketing Cloud and delete Lead records from Sales after the sync is complete.",
      ],
      answer: "C",
      title: "Question 25",
    },
    {
      content:
        "A company has 12 million records, and a nightly integration queries these records.\n       Which two areas should a Data Architect investigate during troubleshooting if queries are timing out? (Choose two.)",
      options: [
        "A. Make sure the query doesn't contain NULL in any filter criteria.",
        "B. Create custom indexes on the fields used in the filter criteria.",
        "C. Create a formula field instead of having multiple filter criteria.",
        "D. Modify the integration users' profile to have View All Data.",
      ],
      answer: "A,B",
      title: "Question 26",
    },
    {
      content:
        "Universal Containers is setting up an external Business Intelligence (BI) system and wants to extract 1,000,000 Contact records. What should be recommended to avoid timeouts during the export process?",
      options: [
        "A. Use GZIP compression to export the data.",
        "B. Utilize the Bulk API to export the data.",
        "C. Schedule a Batch Apex job to export the data.",
        "D. Use the SOAP API to export data.",
      ],
      answer: "A",
      title: "Question 27",
    },
    {
      content:
        "A large insurance provider is looking to implement Salesforce. The following exist.\n       1. Multiple channel for lead acquisition\n       2. Duplication leads across channels\n       3. Poor customer experience and higher costs\n       On analysis, it found that there are duplicate leads that are resulting to mitigate the issues?",
      options: [
        "A. Build process is manually search and merge duplicates.",
        "B. Build a custom solution to identify and merge duplicate leads.",
        "C. Implement de-duplication strategy to prevent duplicate leads",
        "D. Implement third-party solution to clean and event lead data.",
        "E. Standard lead information across all channels.",
      ],
      answer: "C,D,E",
      title: "Question 28",
    },
    {
      content:
        "Universal Containers has a large number of Opportunity fields (100) that they want to track field history on. Which two actions should an architect perform in order to meet this requirement? Choose 2 answers",
      options: [
        "A. Create a custom object to store the previous and new field values.",
        "B. Select the 100 fields in the Opportunity Set History Tracking page.",
        "C. Create a custom object to store a copy of the record when changed.",
        "D. Use Analytic Snapshots to store a copy of the record when changed.",
      ],
      answer: "A,C",
      title: "Question 29",
    },
    {
      content:
        "Universal Containers (UC) has implemented Sales Cloud and it has been noticed that Sales reps are not entering enough data to run insightful reports and dashboards. UC executives would like to monitor and measure data quality metrics. What solution addresses this requirement?",
      options: [
        "A. Use third-party AppExchange tools to monitor and measure data quality.",
        "B. Use custom objects and fields to calculate data quality.",
        "C. Export the data to an enterprise data warehouse and use BI tools for data quality.",
        "D. Generate reports to view the quality of sample data.",
      ],
      answer: "A",
      title: "Question 30",
    },
    {
      content:
        "Universal Containers (UC) has a custom discount request object set as a detail object with a custom product object as the master. There is a requirement to allow the creation of generic discount requests without the custom product object as its master record. What solution should an Architect recommend to UC?",
      options: [
        "A. Remove the master-detail relationship and keep the objects separate.",
        "B. Mandate the selection of a custom product for each discount request.",
        "C. Create a placeholder product record for the generic discount request.",
        "D. Change the master-detail relationship to a lookup relationship.",
      ],
      answer: "D",
      title: "Question 31",
    },
    {
      content:
        "UC has millions of Cases and are running out of storage. Some user groups need to have access to historical cases for up to 7 years.\n       Which 2 solutions should a data architect recommend in order to minimize performance and storage issues?\n       Choose 2 answers:",
      options: [
        "A. Leverage big object to archive case data and lightning components to show archived data.",
        "B. Leverage on premise data archival and build integration to view archived data.",
        "C. Create a custom object to store case history and run reports on it.",
        "D. Export data out of salesforce and store in Flat files on external system.",
      ],
      answer: "A,B",
      title: "Question 32",
    },
    {
      content:
        "Universal Containers is planning out their archiving and purging plans going forward for their custom objects Topic__c and Comment__c. Several options are being considered, including analytics snapshots, offsite storage, scheduled purges, etc. Which three questions should be considered when designing an appropriate archiving strategy?",
      options: [
        "A. Which profiles and users currently have access to these custom object records?",
        "B. How many fields are defined on the custom objects that need to be archived?",
        "C. Will the data being archived need to be reported on or accessed in any way in the future?",
        "D. Are there any regulatory restrictions that will influence the archiving and purging plans?",
        "E. If reporting is necessary, can the information be aggregated into fewer, summary records?",
      ],
      answer: "C,D,E",
      title: "Question 33",
    },
    {
      content:
        "(NTO) has multiple salesforce orgs based on geographical reports (AMER, EMEA, APAC). NTO products are in the AMER org and need to be created in the EMEA and APAC after the products are approved.\n       Which two features should a data architect recommend to share records between salesforce orgs? Choose 2.",
      options: [
        "A. Change data capture (CDC)",
        "B. Salesforce 2 Salesforce",
        "C. Federation search",
        "D. Salesforce connect.",
      ],
      answer: "A,B",
      title: "Question 34",
    },
    {
      content:
        "Cloud Kicks needs to purge detailed transactional records from Salesforce. The data should be aggregated at a summary level and available in Salesforce.\n       What are two automated approaches to fulfill this goal? (Choose two.)",
      options: [
        "A. Schedulable Batch Apex",
        "B. Third-party Integration Tool (ETL)",
        "C. Third-party Business Intelligence system",
        "D. Apex Triggers",
      ],
      answer: "A,B",
      title: "Question 35",
    },
    {
      content:
        "Universal Containers (UC) wants to ensure their data on 100,000 Accounts pertaining mostly to US-based companies is enriched and cleansed on an ongoing basis. UC is looking for a solution that allows easy monitoring of key data quality metrics. What should be the recommended solution to meet this requirement?",
      options: [
        "A. Implement an Apex Trigger on Account that queries a third-party data quality API to monitor Account data quality.",
        "B. Use a declarative approach by installing and configuring Data.com Clean to monitor Account data quality.",
        "C. Use declarative approach by installing and configuring Data.com Prospector to monitor Account data quality.",
        "D. Implement Batch Apex that calls out a third-party data quality API in order to monitor Account data quality.",
      ],
      answer: "B",
      title: "Question 36",
    },
    {
      content:
        "Universal Containers (UC) is planning to move away from legacy CRM to Salesforce. As part of one-time data migration, UC will need to keep the original date when a contact was created in the legacy system. How should an Architect design the data migration solution to meet this requirement?",
      options: [
        "A. Write an Apex trigger on the Contact object, before insert event to set the original value in a standard CreatedDate field.",
        "B. After the data is migrated, perform an update on all records to set the original date in a standard CreatedDate field.",
        'C. Enable "Set Audit Fields" and assign the permission to the user loading the data for the duration of the migration.',
        "D. Create a new field on Contact object to capture the Created Date. Hide the standard CreatedDate field using Field -Level Security.",
      ],
      answer: "C",
      title: "Question 37",
    },
    {
      content:
        "Universal Containers (UC) has implemented Salesforce, UC is running out of storage and needs to have an archiving solution, UC would like to maintain two years of data in Saleforce and archive older data out of Salesforce.\n       Which solution should a data architect recommend as an archiving solution?",
      options: [
        "A. Build a batch job to move all restore off platform, and delete old records from Salesforce.",
        "B. Use a third-party backup solution to backup all data off platform.",
        "C. Build a batch join to move two-year-old records off platform, and delete records from Salesforce.",
        "D. Build a batch join move all records off platform, and delete all records from Salesforce.",
      ],
      answer: "B",
      title: "Question 38",
    },
    {
      content:
        "Universal Containers wants to implement a data -quality process to monitor the data that users are manually entering into the system through the Salesforce UI. Which approach should the architect recommend?",
      options: [
        "A. Utilize an app from the AppExchange to create data -quality dashboards.",
        "B. Utilize a 3rd -party solution from the AppExchange for data uploads.",
        "C. Use Apex to validate the format of phone numbers and postal codes.",
        "D. Allow users to import their data using the Salesforce Import tools.",
      ],
      answer: "A",
      title: "Question 39",
    },
    {
      content:
        "Universal Containers has a large volume of Contact data going into Salesforce.com. There are 100,000 existing contact records. 200,000 new contacts will be loaded. The Contact object has an external ID field that is unique and must be populated for all existing records. What should the architect recommend to reduce data load processing time?",
      options: [
        "A. Load new records via the Insert operation and existing records via the Update operation.",
        "B. Load Contact records together using the Streaming API via the Upsert operation.",
        "C. Delete all existing records, and then load all records together via the Insert operation.",
        "D. Load all records via the Upsert operation to determine new records vs. existing records.",
      ],
      answer: "A",
      title: "Question 40",
    },
    {
      content:
        "Universal Containers has defined a new Data Quality Plan for their Salesforce data and wants to know how they can enforce it throughout the organization. Which two approaches should an architect recommend to enforce this new plan?\n       Choose 2 answers",
      options: [
        "A. Schedule reports that will automatically catch duplicates and merge or delete the records every week.",
        "B. Use Workflow, Validation Rules, and Force.com code (Apex) to enforce critical business processes.",
        "C. Schedule a weekly dashboard displaying records that are missing information to be sent to managers for review.",
        "D. Store all data in an external system and set up an integration to Salesforce for view -only access.",
      ],
      answer: "B,C",
      title: "Question 41",
    },
    {
      content:
        "Which two best practices should be followed when using SOSL for searching?",
      options: [
        "A. Use searches against single Objects for greater speed and accuracy.",
        "B. Keep searches specific and avoid wildcards where possible.",
        "C. Use SOSL option to ignore custom indexes as search fields are pre-indexed.",
        'D. Use Find in "ALL FIELDS" for faster searches.',
      ],
      answer: "B,D",
      title: "Question 42",
    },
    {
      content:
        "Universal Containers (UC) has over 10 million accounts with an average of 20 opportunities with each account. A Sales Executive at UC needs to generate a daily report for all opportunities in a specific opportunity stage.\n       Which two key considerations should be made to make sure the performance of the report is not degraded due to large data volume?",
      options: [
        "A. Number of characters in report query.",
        "B. Number of joins used in report query.",
        "C. Number of queries running at a time.",
        "D. Number of records returned by report query.",
      ],
      answer: "B,D",
      title: "Question 43",
    },
    {
      content:
        "Universal Containers wishes to maintain Lead data from Leads even after they are deleted and cleared from the Recycle Bin. What approach should be implemented to achieve this solution?",
      options: [
        "A. Send data to a Data Warehouse and mark Leads as deleted in that system.",
        "B. Use a Lead standard report and filter on the IsDeleted standard field.",
        "C. Use a Converted Lead report to display data on Leads that have been deleted.",
        "D. Query Salesforce with the queryAll API method or using the ALL ROWS SOQL keywords.",
      ],
      answer: "A",
      title: "Question 44",
    },
    {
      content:
        "Universal Containers (UC) has 1,000 accounts and 50,000 opportunities. UC has an enterprise security requirement to export all sales data outside of Salesforce on a weekly basis. The security requirement also calls for exporting key operational data that includes events such as file downloads, logins, logouts, etc. Which two recommended approaches would address the above requirement?",
      options: [
        "A. Use Event Monitoring to extract event data to on-premise systems.",
        "B. Use a custom built extract job to extract operational data to on-premise systems.",
        "C. Use Weekly Export to extract transactional data to on-premise systems.",
        "D. Use Field Audit History to capture operational data and extract it to on-premise systems.",
      ],
      answer: "B",
      title: "Question 45",
    },
    {
      content:
        "Northern Trail Outfitters (NTO) wants to implement backup and restore for Salesforce data, Currently, it has data backup processes that runs weekly, which back up all Salesforce data to an enterprise data warehouse (EDW). NTO wants to move to daily backups and provide restore capability to avoid any data loss in case of outage.\n       What should a data architect recommend for a daily backup and restore solution?",
      options: [
        "A. Use AppExchange package for backup and restore.",
        "B. Change weekly backup process to daily backup, and implement a custom restore solution.",
        "C. Use Bulk API to extract data on daily basis to EDW and REST API for restore.",
        "D. Use ETL for backup and restore from EDW.",
      ],
      answer: "A",
      title: "Question 46",
    },
    {
      content:
        'UC has a roll-up summary field on Account to calculate the count of contacts associated with an account. During the account load, SF is throwing an "Unable to lock a row" error.\n       Which solution should a data architect recommend, to resolve the error?',
      options: [
        "A. Leverage data loader platform API to load data.",
        "B. Defer roll-up summary fields calculation during data migration.",
        "C. Perform Batch job in serial mode and reduce batch size",
        "D. Perform Batch job in parallel mode and reduce Batch size",
      ],
      answer: "D",
      title: "Question 47",
    },
    {
      content:
        "UC needs to load a large volume of leads into salesforce on a weekly basis. During this process the validation rules are disabled.\n       What should a data architect recommend to ensure data quality is maintained in salesforce.",
      options: [
        "A. Ensure the lead data is preprocessed for quality before loading into salesforce.",
        "B. Allow validation rules to be activated during the load of leads into salesforce.",
        "C. Develop custom APEX batch process to improve quality once the load is completed.",
        "D. Activate validation rules once the leads are loaded into salesforce to maintain quality.",
      ],
      answer: "C",
      title: "Question 48",
    },
    {
      content:
        "UC is planning a massive SF implementation with large volumes of dat\n       a. As part of the org's implementation, several roles, territories, groups, and sharing rules have been configured. The data architect has been tasked with loading all of the required data, including user data, in a timely manner.\n       What should a data architect do to minimize data load times due to system calculations?",
      options: [
        "A. Leverage the Bulk API and concurrent processing with multiple batches",
        'B. Enable granular locking to avoid "UNABLE _TO_LOCK_ROW" error.',
        "C. Enable defer sharing calculations, and suspend sharing rule calculations",
        "D. Load the data through data loader, and turn on parallel processing.",
      ],
      answer: "C",
      title: "Question 49",
    },
    {
      content:
        "Universal Containers is creating a new B2C service offering for consumers to ship goods across continents. This is in addition to their well-established B2B offering. Their current Salesforce org uses the standard Account object to track B2B customers. They are expecting to have over 50,000,000 consumers over the next five years across their 50 business regions. B2C customers will be individuals. Household data is not required to be stored. What is the recommended data model for consumer account data to be stored in Salesforce?",
      options: [
        "A. Use the Account object with a newly created Record Type for B2C customers.",
        "B. Use the Account object with Person Accounts and a new B2C page layout.",
        "C. Use 50 umbrella Accounts for each region, with customers as associated Contacts.",
        "D. Create a new picklist value for B2C customers on the Account Type field.",
      ],
      answer: "B",
      title: "Question 50",
    },
    {
      content:
        "Universal Containers (UC) has a requirement to create an Account plan object that is related to the Account object. Each Account plan needs to have an Account object, but the accessibility requirement of the Account plan is different from the Account object. What should an Architect recommend?",
      options: [
        "A. Create an account plan object with a lookup relationship to Account with validation rules to enforce the Account association.",
        "B. Create a custom account plan object as detail with Account as mater in a master-detail relationship.",
        "C. Create an account plan object with a lookup relations to Account without any validation rules to enforce the Account association.",
        "D. Create a custom account plan object as detail with Account as master with additional sharing rules to allow access.",
      ],
      answer: "A",
      title: "Question 51",
    },
    {
      content:
        "UC has been using SF for 10 years. Lately, users have noticed, that the pages load slowly when viewing Customer and Account list view.\n       To mitigate, UC will implement a data archive strategy to reduce the amount of data actively loaded.\n       Which 2 tasks are required to define the strategy? Choose 2 answers:",
      options: [
        "A. Identify the recovery point objective.",
        "B. Identify the data retention requirements",
        "C. Identify how the archive data will be accessed and used.",
        "D. Identify the recovery time objective.",
      ],
      answer: "B,C",
      title: "Question 52",
    },
    {
      content:
        "DreamHouse Realty has an integration that creates records in a Salesforce Custom Object. The Custom Object has a field marked as required on the page layout.\n       DreamHouse Realty has noticed that many of the records coming from the external system are missing data in this field.\n       The Architect needs to ensure this field always contains data coming from the source system.\n       Which two approaches should the Architect take? Choose 2 answers",
      options: [
        "A. Set up a Validation Rule to prevent blank values.",
        "B. Create a Workflow to default a value into this field.",
        "C. Mark the field required in setup at the field level.",
        "D. Blame the customer's external system for bad data.",
      ],
      answer: "A,C",
      title: "Question 53",
    },
    {
      content:
        "US is implementing salesforce and will be using salesforce to track customer complaints, provide white papers on products and provide subscription (Fee) - based support.\n       Which license type will US users need to fulfil US's requirements?",
      options: [
        "A. Service cloud license.",
        "B. Lightning platform starter license.",
        "C. Salesforce license.",
        "D. Sales cloud license",
      ],
      answer: "A",
      title: "Question 54",
    },
    {
      content:
        "UC has the following system:\n       Billing system.\n       Customer support system.\n       CRM system.\n       US has been having trouble with business intelligence across the different systems. Recently US implemented a master data management (MDM) solution that will be the system of truth for the customer records.\n       Which MDM data element is needed to allow reporting across these systems?",
      options: [
        "A. Full name.",
        "B. Global unique customer number.",
        "C. Email address.",
        "D. Phone number.",
      ],
      answer: "B",
      title: "Question 55",
    },
    {
      content:
        "As part of addressing general data protection regulation (GDPR) requirements, UC plans to implement a data classification policy for all its internal systems that stores customer information including salesforce.\n       What should a data architect recommend so that UC can easily classify consumer information maintained in salesforce under both standard and custom objects?",
      options: [
        "A. Create a custom picklist field to capture classification of information on customer.",
        "B. Use App Exchange products to classify fields based on policy.",
        "C. Build reports for customer information and validate.",
        "D. Use data classification metadata fields available in field definition.",
      ],
      answer: "D",
      title: "Question 56",
    },
    {
      content:
        "Universal Containers (UC) has implemented Sales Cloud for its entire sales organization, UC has built a custom object called projects_c that stores customers project detail and employee bitable hours.\n       The following requirements are needed:\n       A subnet of individuals from the finance team will need to access to the projects object for reporting and adjusting employee utilization.\n       The finance users will not access to any sales objects, but they will need to interact with the custom object.\n       Which license type a data architect recommend for the finance team that best meets the requirements?",
      options: [
        "A. Service Cloud",
        "B. Lighting platform plus",
        "C. Sales Cloud",
        "D. Light Platform Start",
      ],
      answer: "B",
      title: "Question 57",
    },
    {
      content:
        "What 2 data management policies does the data classification feature allow customers to classify in salesforce? Choose 2 answers:",
      options: [
        "A. Data governance policy.",
        "B. Compliance categorization policy.",
        "C. Reference data policy.",
        "D. Data sensitivity policy.",
      ],
      answer: "B,D",
      title: "Question 58",
    },
    {
      content:
        "Universal Containers has 30 million case records. The Case object has 80 fields. Agents are reporting performance issues and time-outs while running case reports in the Salesforce org.\n       Which solution should a data architect recommend to improve reporting performance?",
      options: [
        "A. Contact Salesforce support to enable skinny table for cases.",
        "B. Build reports using custom Lightning components.",
        "C. Move data off of the platform and run reporting outside Salesforce, and give access to reports.",
        "D. Create a custom object to store aggregate data and run reports.",
      ],
      answer: "D",
      title: "Question 59",
    },
    {
      content:
        "A customer wishes to migrate 700,000 Account records in a single migration into Salesforce. What is the recommended solution to migrate these records while minimizing migration time?",
      options: [
        "A. Use Salesforce Bulk API in serial mode.",
        "B. Use Salesforce Soap API in serial mode.",
        "C. Use Salesforce Soap API in parallel mode.",
        "D. Use Salesforce Bulk API in parallel mode.",
      ],
      answer: "D",
      title: "Question 60",
    },
    {
      content:
        "NTO has multiple systems across its enterprise landscape including salesforce, with disparate version the customer records.\n       In salesforce, the customer is represented by the contact object.\n       NTO utilizes an MDM solution with these attributes:\n       1. The MDM solution keeps track of customer master with a master key.\n       2. The master key is a map to the record ID's from each external system that customer data is stored within.\n       3. The MDM solution provides de-duplication features, so it acts as the single source of truth.\n       How should a data architect implement the storage of master key within salesforce?",
      options: [
        "A. Store the master key in Heroku postgres and use Heroku connect for synchronization.",
        "B. Create an external object to store the master key with a lookup field to contact.",
        "C. Create a custom object to store the master key with a lookup field to contact.",
        "D. Store the master key on the contact object as an external ID (Field for referential imports)",
      ],
      answer: "D",
      title: "Question 61",
    },
    {
      content:
        "Universal Containers (UC) maintains a collection of several million Account records that represent business in the United Sates. As a logistics company, this list is one of the most valuable and important components of UC's business, and the accuracy of shipping addresses is paramount. Recently it has been noticed that too many of the addresses of these businesses are inaccurate, or the businesses don't exist. Which two scalable strategies should UC consider to improve the quality of their Account addresses?",
      options: [
        "A. Build a team of employees that validate Accounts by searching the web and making phone calls.",
        "B. Integrate with a third-party database or services for address validation and enrichment.",
        "C. Contact each business on the list and ask them to review and update their address information.",
        "D. Leverage Data.com Clean to clean up Account address fields with the D&B database.",
      ],
      answer: "B,D",
      title: "Question 62",
    },
    {
      content:
        "Northern Trail Outfitters (NTO) has the following systems:\n       Customer master-source of truth for customer information\n       Service cloud-customer support\n       Marketing cloud-marketing support\n       Enterprise data warehouse-business reporting\n       The customer data is duplicated across all these system and are not kept in sync. Customers are also complaining that they get repeated marketing emails and have to call into update their information.\n       NTO is planning to implement master data management (MDM) solution across the enterprise.\n       Which three data will an MDM tool solve?\n       Choose 3 answers",
      options: [
        "A. Data duplication",
        "B. Data standardization",
        "C. Data accuracy and quality",
        "D. Data completeness",
        "E. Data loss and recovery",
      ],
      answer: "A,B,C",
      title: "Question 63",
    },
    {
      content:
        "How can an architect find information about who is creating, changing, or deleting certain fields within the past two months?",
      options: [
        "A. Export the setup audit trail and find the fields in question.",
        'B. Remove "customize application" permissions from everyone else.',
        "C. Export the metadata and search it for the fields in question.",
        "D. Create a field history report for the fields in question.",
      ],
      answer: "A",
      title: "Question 64",
    },
    {
      content:
        'Universal Containers has a rollup summary field on account to calculate the number of contacts associated with an account. During the account load, Salesforce is throwing an "UNABLE _TO_LOCK_ROW" error.\n       Which solution should a data architect recommend to resolve the error?',
      options: [
        "A. Perform a batch job in serial mode and reduce the batch size.",
        "B. Defer rollup summary field calculation during data migration.",
        "C. Leverage Data Loader's platform API to load data.",
        "D. Perform a batch job in parallel mode and reduce the batch size.",
      ],
      answer: "A",
      title: "Question 65",
    },
    {
      content:
        "Universal Containers (UC) has users complaining about reports timing out or simply taking too long to run What two actions should the data architect recommend to improve the reporting experience? Choose 2 answers",
      options: [
        "A. Enable Divisions for large data objects.",
        "B. Share each report with fewer users.",
        "C. Index key fields used in report criteria.",
        "D. Create one skinny table per report.",
      ],
      answer: "C,D",
      title: "Question 66",
    },
    {
      content:
        "A large retail company has recently chosen SF as its CRM solution. They have the following record counts:\n       2500000 accounts\n       25000000 contacts\n       When doing an initial performance test, the data architect noticed an extremely slow response for reports and list views.\n       What should a data architect do to solve the performance issue?",
      options: [
        "A. Load only the data that the users is permitted to access",
        "B. Limit data loading to the 2000 most recently created records.",
        "C. Add custom indexes on frequently searched account and contact objects fields",
        "D. Create a skinny table to represent account and contact objects.",
      ],
      answer: "C",
      title: "Question 67",
    },
    {
      content:
        "An Architect needs information about who is creating, changing, or deleting certain fields within the past four months.\n       How can the Architect access this information?",
      options: [
        "A. Create a field history report for the fields in question.",
        "B. After exporting the metadata, search it for the fields in question.",
        "C. After exporting the setup audit trail, find the fields in question.",
        'D. Remove "customize application" permissions from everyone else.',
      ],
      answer: "C",
      title: "Question 68",
    },
    {
      content:
        "An architect is planning on having different batches to load one million Opportunities into Salesforce using the Bulk API in parallel mode. What should be considered when loading the Opportunity records?",
      options: [
        "A. Order batches by Auto -number field.",
        "B. Sort batches by Name field values.",
        "C. Group batches by the AccountId field.",
        "D. Create indexes on Opportunity object text fields.",
      ],
      answer: "A",
      title: "Question 69",
    },
    { content: "", options: [], answer: "", title: "" },
    {
      content:
        "Universal Containers is experiencing frequent and persistent group membership locking issues that severely restricts its ability to manage manual and a automated updates at the same time.\n       What should a data architect do in order to restore the issue?",
      options: [
        "A. Enable defer sharing calculation",
        "B. Enable implicit sharing",
        "C. Enable parallel sharing rule calculation.",
        "D. Enable granular locking",
      ],
      answer: "D",
      title: "Question 71",
    },
    {
      content:
        "Universal Containers is exporting 40 million Account records from Salesforce using Informatica Cloud. The ETL tool fails and the query log indicates a full table scan time-out failure. What is the recommended solution?",
      options: [
        "A. Modify the export query that includes standard index fields(s).",
        "B. Modify the export query with LIMIT clause with Batch size 10,000.",
        "C. Modify the export job header to specify Export-in-Parallel.",
        "D. Modify the export job header to specify Sforce-Enable-PKChunking.",
      ],
      answer: "D",
      title: "Question 72",
    },
    {
      content:
        "Universal Containers (UC) is going thought major reorganization of their sales team. This would require changes to a large a number of group members and sharing rules. UCs administrator is concerned about long processing time and failure during the process.\n       What should a Data architect implement to make changes efficiently?",
      options: [
        "A. Log out all users and make changes to sharing rules.",
        "B. Delete old sharing rules and build new sharing rules",
        "C. Log a case with salesforce to make sharing rule changes.",
        "D. Enable Defer Sharing Calculation prior to making sharing rule changes.",
      ],
      answer: "D",
      title: "Question 73",
    },
    {
      content:
        "Northern Trail Outfitters (NTO) has a variety of customers that include householder, businesses, and individuals.\n       The following conditions exist within its system:\n       NTO has a total of five million customers.\n       Duplicate records exist, which is replicated across many systems, including Salesforce.\n       Given these conditions, there is a lack of consistent presentation and clear identification of a customer record.\n       Which three option should a data architect perform to resolve the issues with the customer data?",
      options: [
        "A. Duplicate customer records across the system and provide a two-way sync of data between the systems.",
        "B. Create a unique global customer ID for each customer and store that in all system for referential identity.",
        "C. Invest in data duplicate tool to de-dupe and merge duplicate records across all systems.",
        "D. Use Salesforce CDC to sync customer data cross all systems to keep customer record in sync.",
        "E. Create a customer master database external to Salesforce as a system of truth and sync the customer data with all systems.",
      ],
      answer: "B,C,E",
      title: "Question 74",
    },
    {
      content:
        "Universal Containers (UC) is launching an RFP to acquire a new accounting product available on AppExchange. UC is expecting to issue 5 million invoices per year, with each invoice containing an average of 10 line items. What should UC's Data Architect recommend to ensure scalability?",
      options: [
        "A. Ensure invoice line items simply reference existing Opportunity line items.",
        "B. Ensure the account product vendor includes Wave Analytics in their offering.",
        "C. Ensure the account product vendor provides a sound data archiving strategy.",
        "D. Ensure the accounting product runs 100% natively on the Salesforce platform.",
      ],
      answer: "C",
      title: "Question 75",
    },
    {
      content:
        "Universal Containers keeps its Account data in Salesforce and its Invoice data in a third -party ERP system. They have connected the Invoice data through a Salesforce external object. They want data from both Accounts and Invoices visible in one report in one place. What two approaches should an architect suggest for achieving this solution? Choose 2 answers",
      options: [
        "A. Create a report combining data from the Account standard object and the Invoices external object.",
        "B. Create a report in an external system combining Salesforce Account data and Invoice data from the ERP.",
        "C. Create a separate Salesforce report for Accounts and Invoices and combine them in a dashboard.",
        "D. Create a Visualforce page combining Salesforce Account data and Invoice external object data.",
      ],
      answer: "B,D",
      title: "Question 76",
    },
    {
      content:
        "Universal Containers (UC) is implementing its new Internet of Things technology, which consists of smart containers that provide information on container temperature and humidity updated every 10 minutes back to UC. There are roughly 10,000 containers equipped with this technology with the number expected to increase to 50,000 across the next five years. It is essential that Salesforce user have access to current and historical temperature and humidity data for each container. What is the recommended solution?",
      options: [
        "A. Create new custom fields for temperature and humidity in the existing Container custom object, as well as an external ID field that is unique for each container. These custom fields are updated when a new measure is received.",
        "B. Create a new Container Reading custom object, which is created when a new measure is received for a specific container. The Container Reading custom object has a master-detail relationship to the container object.",
        "C. Create a new Lightning Component that displays last humidity and temperature data for a specific container and can also display historical trends obtaining relevant data from UC's existing data warehouse.",
        "D. Create a new Container Reading custom object with a master-detail relationship to Container which is created when a new measure is received for a specific container. Implement an archiving process that runs every hour.",
      ],
      answer: "D",
      title: "Question 77",
    },
    {
      content:
        "Universal Container (UC) stores 10 million rows of inventory data in a cloud database, As part of creating a connected experience in Salesforce, UC would like to this inventory data to Sales Cloud without a import. UC has asked its data architect to determine if Salesforce Connect is needed.\n       Which three consideration should the data architect make when evaluating the need for Salesforce Connect?",
      options: [
        "A. You have a large amount of data and would like to copy subsets of it into Salesforce.",
        "B. You need to small amounts of external data at any one time.",
        "C. You want real-time access to the latest data, from other systems.",
        "D. You have a large amount of data that you don't want to copy into your Salesforce org.",
        "E. You need to expose data via a virtual private connection.",
      ],
      answer: "B,C,D",
      title: "Question 78",
    },
    {
      content:
        "NTO uses salesforce to manage relationships and track sales opportunities. It has 10 million customers and 100 million opportunities. The CEO has been complaining 10 minutes to run and sometimes failed to load, throwing a time out error.\n       Which 3 options should help improve the dashboard performance?\n       Choose 3 answers:",
      options: [
        "A. Use selective queries to reduce the amount of data being returned.",
        "B. De-normalize the data by reducing the number of joins.",
        "C. Remove widgets from the dashboard to reduce the number of graphics loaded.",
        "D. Run the dashboard for CEO and send it via email.",
        "E. Reduce the amount of data queried by archiving unused opportunity records.",
      ],
      answer: "A,B,E",
      title: "Question 79",
    },
    {
      content:
        "Universal Containers would like to remove data silos and connect their legacy CRM together with their ERP and with Salesforce. Most of their sales team has already migrated to Salesforce for daily use, although a few users are still on the old CRM until some functionality they require is completed. Which two techniques should be used for smooth interoperability now and in the future.",
      options: [
        "A. Do not connect Salesforce and the legacy CRM to each other during this transition period, but do allow both to interact with the ERP.",
        "B. Specify the legacy CRM as the system of record during transition until it is removed from operation and fully replaced by Salesforce.",
        "C. Replicate ongoing changes in the legacy CRM to Salesforce to facilitate a smooth transition when the legacy CRM is eventually retired.",
        "D. Work with stakeholders to establish a Master Data Management plan for the system of record for specific objects, records, and fields.",
      ],
      answer: "B,D",
      title: "Question 80",
    },
    {
      content:
        "The head of sales at Get Cloudy Consulting wants to understand key relevant performance figures and help managers take corrective actions where appropriate.\n       What is one reporting option Get Cloudy Consulting should consider?",
      options: [
        "A. Lead conversion rate report",
        "B. Sales KPI Dashboard",
        "C. Opportunity analytic snapshot",
        "D. Case SLA performance report",
      ],
      answer: "B",
      title: "Question 81",
    },
    {
      content:
        "All accounts and opportunities are created in Salesforce. Salesforce is integrated with three systems:\n       * An ERP system feeds order data into Salesforce and updates both Account and Opportunity records.\n       * An accounting system feeds invoice data into Salesforce and updates both Account and Opportunity records.\n       * A commission system feeds commission data into Salesforce and updates both Account and Opportunity records.\n       How should the architect determine which of these systems is the system of record?",
      options: [
        "A. Account and opportunity data originates in Salesforce, and therefore Salesforce is the system of record.",
        "B. Whatever integration data flow runs last will, by default, determine which system is the system of record.",
        "C. Data flows should be reviewed with the business users to determine the system of record per object or field.",
        "D. Whatever system updates the attribute or object should be the system of record for that field or object.",
      ],
      answer: "C",
      title: "Question 82",
    },
    {
      content:
        "Universal Containers has more than 10 million records in the Order_c object. The query has timed out when running a bulk query. What should be considered to resolve query timeout?",
      options: [
        "A. PK Chunking",
        "B. Tooling API",
        "C. Streaming API",
        "D. Metadata API",
      ],
      answer: "A",
      title: "Question 83",
    },
    {
      content:
        "Developers at Universal Containers need to build a report for the business which displays Accounts opened in the past year grouped by industry. This report will also include information from contacts, opportunities, and orders. There are several million Accounts in the system. Which two options should be recommended to make this report perform well and satisfy the business need?",
      options: [
        "A. Use Formula fields to surface information I related entities on the report.",
        "B. Use triggers to populate denormalized related fields on the Account.",
        "C. Use an indexed data field with bounded data filters.",
        "D. Use unbounded date ranges to filter the report.",
      ],
      answer: "C,D",
      title: "Question 84",
    },
    {
      content:
        "NTO would like to retrieve their SF orgs meta data programmatically for backup within a various external. Which API is the best fit for accomplishing this task?",
      options: [
        "A. Bulk API in serial mode",
        "B. Metadata API",
        "C. SOAP API",
        "D. Tooling API",
      ],
      answer: "B",
      title: "Question 85",
    },
    {
      content:
        "During the implementation of Salesforce, a customer has the following requirements for Sales Orders:\n       1. Sales Order information needs to be shown to users in Salesforce.\n       2. Sales Orders are maintained in the on-premises enterprise resource planning (ERP).\n       3. Sales Order information has more than 150 million records.\n       4. Sales Orders will not be updated in Salesforce.\n       What should a data architect recommend for maintaining Sales Orders in salesforce?",
      options: [
        "A. Us custom objects to maintain Sales Orders in Salesforce.",
        "B. Use custom big objects to maintain Sales Orders in Salesforce.",
        "C. Use external objects to maintain Sales Order in Salesforce.",
        "D. Use Standard order object to maintain Sale Orders in Salesforce",
      ],
      answer: "C",
      title: "Question 86",
    },
  ],
});
