window.testContent = window.testContent || [];
var testId = "Salesforce.Data-Architect";
var testName = "Salesforce.Data-Architect";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "Certlibrary.Data-Architect.v2023-11-09.q129",
  content: [
    {
      content:
        "Universal Containers (UC) is replacing a home grown CRM solution with Salesforce. UC has decided to migrate operational (open and active) records to Salesforce, while keeping historical records in legacy system. UC would like historical records to be available in Salesforce on an as needed basis.Which solution should a data architect recommend to meet business requirement?",
      options: [
        "A. Leverage real-time integration to pull records into Salesforce.",
        "B. Build a swivel chair solution to go into the legacy system and display records.",
        "C. Leverage mashup to display historical records in Salesforce.",
        "D. Bring all data in Salesforce, and delete it after a year.",
      ],
      answer: "C",
      explanation: "",
      title: "Question 1",
    },
    {
      content:
        "Universal Containers has 30 million case records. The Case object has 80 fields. Agents are reporting performance Issues and time-outs while running case reports in the Salesforce org.Which solution should a data architect recommend to improve reporting performance?",
      options: [
        "A. Contact Salesforce support to enable skinny table for cases.",
        "B. Build reports using custom Lightning components.",
        "C. Create a custom object to store aggregate data and run reports.",
        "D. Move data off of the platform and run reporting outside Salesforce, and give access to reports.",
      ],
      answer: "A",
      explanation: "",
      title: "Question 2",
    },
    {
      content:
        "A custom pricing engine for a Salesforce customer has to be decided by factors with the following hierarchy:1. State in which the customer is located2. City in which the customer is located if available3. Zip code in which the customer is located if available4. Changes to this information should have minimum code changeWhat should a data architect recommend to maintain this information for the custom pricing engine that is to be built in Salesforce?",
      options: [
        "A. Configure the pricing criteria in price books.",
        "B. Maintain required pricing criteria in custom metadata types.",
        "C. Assign the pricing criteria within custom pricing engine.",
        "D. Create a custom object to maintain the pricing criteria.",
      ],
      answer: "B",
      explanation: "",
      title: "Question 3",
    },
    {
      content:
        "A customer is operating in a highly regulated industry and is planning to implement Salesforce. The customer information maintained in Salesforce. includes the following:1. Personally Identifiable information (PII)2. IP restrictions on profiles organized by geographic location3. Financial records that need to be private and accessible only by the assigned sales associateEnterprise Security has mandated access to be restricted to users within a specific geography with detailed monitoring of user activity. Additionally, users should not be allowed to export information from Salesforce.Which three Salesforce Shield capabilities should a data architect recommend? (Choose three.)",
      options: [
        "A. Event monitoring to monitor all user activity.",
        "B. Encrypt sensitive customer information maintained in Salesforce.",
        "C. Prevent sales users access to customer PII information.",
        "D. Restrict access to Salesforce from users outside specific geography.",
        "E. Transaction Security policies to prevent export of Salesforce data.",
      ],
      answer: "B,D,E",
      explanation: "",
      title: "Question 4",
    },
    {
      content:
        "Universal Containers (UC) is transitioning from Classic to Lightning Experience.What does UC need to do to ensure users have access to its notes and attachments in Lightning Experience?",
      options: [
        "A. Manually upload Notes in Lightning Experience.",
        "B. Manually upload Attachments in Lightning Experience.",
        "C. Add Notes and Attachments Related Lists to Page Layouts in Lightning Experience.",
        "D. Migrate Notes and Attachments to Enhanced Notes and Piles using a migration tool.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 5",
    },
    {
      content:
        "Universal Containers has a Sales Cloud implementation for a sales team and an enterprise resource planning (ERP) as a customer master. Sales teams are complaining about duplicate account records and data quality issues with account data.Which two solutions should a data architect recommend to resolve the complaints? (Choose two.)",
      options: [
        "A. Build a nightly batch job to de-dupe data, and merge account records.",
        "B. Integrate Salesforce with ERP, and make ERP as system of truth.",
        "C. Build a nightly sync job from ERP to Salesforce.",
        "D. Implement a de-dupe solution and establish account ownership in Salesforce.",
      ],
      answer: "B,D",
      explanation: "",
      title: "Question 6",
    },
    {
      content:
        "Universal Containers (UC) has adopted Salesforce as its primary sales automation tool. UC has 100,000 customers with a growth rate of 10% a year. UC uses an on-premise web-based billing and invoice system that generates over 1 million invoices a year supporting a monthly billing cycle.The UC sales team needs to be able to pull up a customer record and view their account status, invoice history, and open opportunities without navigating outside of Salesforce.What should a data architect use to provide the sales team with the required functionality?",
      options: [
        "A. Create a visual force tab with the billing system encapsulated within an iframe.",
        "B. Create a custom object and migrate the last 12 months of invoice data into Salesforce so it can be displayed on the Account layout.",
        "C. Write an Apex callout and populate a related list to display on the account record.",
        "D. Create a mashup page that will present the billing system records within Salesforce.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 7",
    },
    {
      content:
        "Universal Containers (UC) is in the process of migrating legacy inventory data from an enterprise resource planning (ERP) system into Sales Cloud with the following requirements:1. Legacy inventory data will be stored in a custom child object called Inventory__c.2. Inventory data should be related to the standard Account object.3. The Inventory__c object should inherit the same sharing rules as the Account object.4. Anytime an Account record is deleted in Salesforce. the related Inventory__c record(s) should be deleted as well.What type of relationship field should a data architect recommend in this scenario?",
      options: [
        "A. Lookup relationship field on Inventory__c, related to Account",
        "B. Indirect lookup relationship field on Account, related to Inventory__c",
        "C. Master-detail relationship field on Inventory__c, related to Account",
        "D. Master-detail relationship field on Account, related to Inventory__c",
      ],
      answer: "D",
      explanation: "",
      title: "Question 8",
    },
    {
      content:
        "Northern Trail Outfitters has implemented Salesforce for its sales associates nationwide. Senior management is concerned that the executive dashboards are not reliable for their real-time decision-making. On analysis, the team found the following issues with data entered inSalesforce:1. Information in certain records is incomplete.2. Incorrect entry in certain fields causes records to be excluded in report filters.3. Duplicate entries cause incorrect counts.Which three steps should a data architect recommend to address the issues? (Choose three.)",
      options: [
        "A. Explore third-party data providers to enrich and augment information entered in Salesforce.",
        "B. Build a sales data warehouse with purpose-built data marts for dashboards and senior management reporting.",
        "C. Design and implement data-quality dashboard to monitor and act on records that are incomplete or incorrect.",
        "D. Periodically export data to cleanse data and import them back into Salesforce for executive reports.",
        "E. Leverage Salesforce features, such as validation rules, to avoid incomplete and incorrect records.",
      ],
      answer: "A,C,E",
      explanation: "",
      title: "Question 9",
    },
    {
      content:
        "Northern Trail Outfitters (NTO) has been using Salesforce for Sales and Service for 10 years. For the past two years, the marketing group has noticed a rise from 0% to 35% in returned mail when sending mail using the contact information stored in Salesforce.Which solution should the data architect use to reduce the amount of returned mail?",
      options: [
        "A. Email all customers and ask them to verify their information and to call NTO if their address is incorrect.",
        "B. Delete contacts when the mail is returned to save postal costs for NTO.",
        "C. Have the sales team call all existing customers and ask to verify the contact details.",
        "D. Use a third-party data source to update the contact information in Salesforce.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 10",
    },
    {
      content:
        "Universal Containers (UC) is replacing a home grown CRM solution with Salesforce. UC has decided to migrate operational (open and active) records to Salesforce, while keeping historical records in legacy system. UC would like historical records to be available in Salesforce on an as needed basis.Which solution should a data architect recommend to meet business requirement?",
      options: [
        "A. Leverage real-time integration to pull records into Salesforce.",
        "B. Build a swivel chair solution to go into the legacy system and display records.",
        "C. Leverage mashup to display historical records in Salesforce.",
        "D. Bring all data in Salesforce, and delete it after a year.",
      ],
      answer: "C",
      explanation: "",
      title: "Question 11",
    },
    {
      content:
        "Universal Containers has 30 million case records. The Case object has 80 fields. Agents are reporting performance Issues and time-outs while running case reports in the Salesforce org.Which solution should a data architect recommend to improve reporting performance?",
      options: [
        "A. Contact Salesforce support to enable skinny table for cases.",
        "B. Build reports using custom Lightning components.",
        "C. Create a custom object to store aggregate data and run reports.",
        "D. Move data off of the platform and run reporting outside Salesforce, and give access to reports.",
      ],
      answer: "A",
      explanation: "",
      title: "Question 12",
    },
    {
      content:
        "A custom pricing engine for a Salesforce customer has to be decided by factors with the following hierarchy:1. State in which the customer is located2. City in which the customer is located if available3. Zip code in which the customer is located if available4. Changes to this information should have minimum code changeWhat should a data architect recommend to maintain this information for the custom pricing engine that is to be built in Salesforce?",
      options: [
        "A. Configure the pricing criteria in price books.",
        "B. Maintain required pricing criteria in custom metadata types.",
        "C. Assign the pricing criteria within custom pricing engine.",
        "D. Create a custom object to maintain the pricing criteria.",
      ],
      answer: "B",
      explanation: "",
      title: "Question 13",
    },
    {
      content:
        "A customer is operating in a highly regulated industry and is planning to implement Salesforce. The customer information maintained in Salesforce. includes the following:1. Personally Identifiable information (PII)2. IP restrictions on profiles organized by geographic location3. Financial records that need to be private and accessible only by the assigned sales associateEnterprise Security has mandated access to be restricted to users within a specific geography with detailed monitoring of user activity. Additionally, users should not be allowed to export information from Salesforce.Which three Salesforce Shield capabilities should a data architect recommend? (Choose three.)",
      options: [
        "A. Event monitoring to monitor all user activity.",
        "B. Encrypt sensitive customer information maintained in Salesforce.",
        "C. Prevent sales users access to customer PII information.",
        "D. Restrict access to Salesforce from users outside specific geography.",
        "E. Transaction Security policies to prevent export of Salesforce data.",
      ],
      answer: "B,D,E",
      explanation: "",
      title: "Question 14",
    },
    {
      content:
        "Universal Containers (UC) is transitioning from Classic to Lightning Experience.What does UC need to do to ensure users have access to its notes and attachments in Lightning Experience?",
      options: [
        "A. Manually upload Notes in Lightning Experience.",
        "B. Manually upload Attachments in Lightning Experience.",
        "C. Add Notes and Attachments Related Lists to Page Layouts in Lightning Experience.",
        "D. Migrate Notes and Attachments to Enhanced Notes and Piles using a migration tool.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 15",
    },
    {
      content:
        "Universal Containers has a Sales Cloud implementation for a sales team and an enterprise resource planning (ERP) as a customer master. Sales teams are complaining about duplicate account records and data quality issues with account data.Which two solutions should a data architect recommend to resolve the complaints? (Choose two.)",
      options: [
        "A. Build a nightly batch job to de-dupe data, and merge account records.",
        "B. Integrate Salesforce with ERP, and make ERP as system of truth.",
        "C. Build a nightly sync job from ERP to Salesforce.",
        "D. Implement a de-dupe solution and establish account ownership in Salesforce.",
      ],
      answer: "B,D",
      explanation: "",
      title: "Question 16",
    },
    {
      content:
        "Universal Containers (UC) has adopted Salesforce as its primary sales automation tool. UC has 100,000 customers with a growth rate of 10% a year. UC uses an on-premise web-based billing and invoice system that generates over 1 million invoices a year supporting a monthly billing cycle.The UC sales team needs to be able to pull up a customer record and view their account status, invoice history, and open opportunities without navigating outside of Salesforce.What should a data architect use to provide the sales team with the required functionality?",
      options: [
        "A. Create a visual force tab with the billing system encapsulated within an iframe.",
        "B. Create a custom object and migrate the last 12 months of invoice data into Salesforce so it can be displayed on the Account layout.",
        "C. Write an Apex callout and populate a related list to display on the account record.",
        "D. Create a mashup page that will present the billing system records within Salesforce.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 17",
    },
    {
      content:
        "Universal Containers (UC) is in the process of migrating legacy inventory data from an enterprise resource planning (ERP) system into Sales Cloud with the following requirements:1. Legacy inventory data will be stored in a custom child object called Inventory__c.2. Inventory data should be related to the standard Account object.3. The Inventory__c object should inherit the same sharing rules as the Account object.4. Anytime an Account record is deleted in Salesforce. the related Inventory__c record(s) should be deleted as well.What type of relationship field should a data architect recommend in this scenario?",
      options: [
        "A. Lookup relationship field on Inventory__c, related to Account",
        "B. Indirect lookup relationship field on Account, related to Inventory__c",
        "C. Master-detail relationship field on Inventory__c, related to Account",
        "D. Master-detail relationship field on Account, related to Inventory__c",
      ],
      answer: "D",
      explanation: "",
      title: "Question 18",
    },
    {
      content:
        "Northern Trail Outfitters has implemented Salesforce for its sales associates nationwide. Senior management is concerned that the executive dashboards are not reliable for their real-time decision-making. On analysis, the team found the following issues with data entered inSalesforce:1. Information in certain records is incomplete.2. Incorrect entry in certain fields causes records to be excluded in report filters.3. Duplicate entries cause incorrect counts.Which three steps should a data architect recommend to address the issues? (Choose three.)",
      options: [
        "A. Explore third-party data providers to enrich and augment information entered in Salesforce.",
        "B. Build a sales data warehouse with purpose-built data marts for dashboards and senior management reporting.",
        "C. Design and implement data-quality dashboard to monitor and act on records that are incomplete or incorrect.",
        "D. Periodically export data to cleanse data and import them back into Salesforce for executive reports.",
        "E. Leverage Salesforce features, such as validation rules, to avoid incomplete and incorrect records.",
      ],
      answer: "A,C,E",
      explanation: "",
      title: "Question 19",
    },
    {
      content:
        "Northern Trail Outfitters (NTO) has been using Salesforce for Sales and Service for 10 years. For the past two years, the marketing group has noticed a rise from 0% to 35% in returned mail when sending mail using the contact information stored in Salesforce.Which solution should the data architect use to reduce the amount of returned mail?",
      options: [
        "A. Email all customers and ask them to verify their information and to call NTO if their address is incorrect.",
        "B. Delete contacts when the mail is returned to save postal costs for NTO.",
        "C. Have the sales team call all existing customers and ask to verify the contact details.",
        "D. Use a third-party data source to update the contact information in Salesforce.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 20",
    },
    {
      content:
        "Universal Containers (UC) is replacing a home grown CRM solution with Salesforce. UC has decided to migrate operational (open and active) records to Salesforce, while keeping historical records in legacy system. UC would like historical records to be available in Salesforce on an as needed basis.Which solution should a data architect recommend to meet business requirement?",
      options: [
        "A. Leverage real-time integration to pull records into Salesforce.",
        "B. Build a swivel chair solution to go into the legacy system and display records.",
        "C. Leverage mashup to display historical records in Salesforce.",
        "D. Bring all data in Salesforce, and delete it after a year.",
      ],
      answer: "C",
      explanation: "",
      title: "Question 21",
    },
    {
      content:
        "Universal Containers has 30 million case records. The Case object has 80 fields. Agents are reporting performance Issues and time-outs while running case reports in the Salesforce org.Which solution should a data architect recommend to improve reporting performance?",
      options: [
        "A. Contact Salesforce support to enable skinny table for cases.",
        "B. Build reports using custom Lightning components.",
        "C. Create a custom object to store aggregate data and run reports.",
        "D. Move data off of the platform and run reporting outside Salesforce, and give access to reports.",
      ],
      answer: "A",
      explanation: "",
      title: "Question 22",
    },
    {
      content:
        "A custom pricing engine for a Salesforce customer has to be decided by factors with the following hierarchy:1. State in which the customer is located2. City in which the customer is located if available3. Zip code in which the customer is located if available4. Changes to this information should have minimum code changeWhat should a data architect recommend to maintain this information for the custom pricing engine that is to be built in Salesforce?",
      options: [
        "A. Configure the pricing criteria in price books.",
        "B. Maintain required pricing criteria in custom metadata types.",
        "C. Assign the pricing criteria within custom pricing engine.",
        "D. Create a custom object to maintain the pricing criteria.",
      ],
      answer: "B",
      explanation: "",
      title: "Question 23",
    },
    {
      content:
        "A customer is operating in a highly regulated industry and is planning to implement Salesforce. The customer information maintained in Salesforce. includes the following:1. Personally Identifiable information (PII)2. IP restrictions on profiles organized by geographic location3. Financial records that need to be private and accessible only by the assigned sales associateEnterprise Security has mandated access to be restricted to users within a specific geography with detailed monitoring of user activity. Additionally, users should not be allowed to export information from Salesforce.Which three Salesforce Shield capabilities should a data architect recommend? (Choose three.)",
      options: [
        "A. Event monitoring to monitor all user activity.",
        "B. Encrypt sensitive customer information maintained in Salesforce.",
        "C. Prevent sales users access to customer PII information.",
        "D. Restrict access to Salesforce from users outside specific geography.",
        "E. Transaction Security policies to prevent export of Salesforce data.",
      ],
      answer: "B,D,E",
      explanation: "",
      title: "Question 24",
    },
    {
      content:
        "Universal Containers (UC) is transitioning from Classic to Lightning Experience.What does UC need to do to ensure users have access to its notes and attachments in Lightning Experience?",
      options: [
        "A. Manually upload Notes in Lightning Experience.",
        "B. Manually upload Attachments in Lightning Experience.",
        "C. Add Notes and Attachments Related Lists to Page Layouts in Lightning Experience.",
        "D. Migrate Notes and Attachments to Enhanced Notes and Piles using a migration tool.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 25",
    },
    {
      content:
        "Universal Containers has a Sales Cloud implementation for a sales team and an enterprise resource planning (ERP) as a customer master. Sales teams are complaining about duplicate account records and data quality issues with account data.Which two solutions should a data architect recommend to resolve the complaints? (Choose two.)",
      options: [
        "A. Build a nightly batch job to de-dupe data, and merge account records.",
        "B. Integrate Salesforce with ERP, and make ERP as system of truth.",
        "C. Build a nightly sync job from ERP to Salesforce.",
        "D. Implement a de-dupe solution and establish account ownership in Salesforce.",
      ],
      answer: "B,D",
      explanation: "",
      title: "Question 26",
    },
    {
      content:
        "Universal Containers (UC) has adopted Salesforce as its primary sales automation tool. UC has 100,000 customers with a growth rate of 10% a year. UC uses an on-premise web-based billing and invoice system that generates over 1 million invoices a year supporting a monthly billing cycle.The UC sales team needs to be able to pull up a customer record and view their account status, invoice history, and open opportunities without navigating outside of Salesforce.What should a data architect use to provide the sales team with the required functionality?",
      options: [
        "A. Create a visual force tab with the billing system encapsulated within an iframe.",
        "B. Create a custom object and migrate the last 12 months of invoice data into Salesforce so it can be displayed on the Account layout.",
        "C. Write an Apex callout and populate a related list to display on the account record.",
        "D. Create a mashup page that will present the billing system records within Salesforce.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 27",
    },
    {
      content:
        "Universal Containers (UC) is in the process of migrating legacy inventory data from an enterprise resource planning (ERP) system into Sales Cloud with the following requirements:1. Legacy inventory data will be stored in a custom child object called Inventory__c.2. Inventory data should be related to the standard Account object.3. The Inventory__c object should inherit the same sharing rules as the Account object.4. Anytime an Account record is deleted in Salesforce. the related Inventory__c record(s) should be deleted as well.What type of relationship field should a data architect recommend in this scenario?",
      options: [
        "A. Lookup relationship field on Inventory__c, related to Account",
        "B. Indirect lookup relationship field on Account, related to Inventory__c",
        "C. Master-detail relationship field on Inventory__c, related to Account",
        "D. Master-detail relationship field on Account, related to Inventory__c",
      ],
      answer: "D",
      explanation: "",
      title: "Question 28",
    },
    {
      content:
        "Northern Trail Outfitters has implemented Salesforce for its sales associates nationwide. Senior management is concerned that the executive dashboards are not reliable for their real-time decision-making. On analysis, the team found the following issues with data entered inSalesforce:1. Information in certain records is incomplete.2. Incorrect entry in certain fields causes records to be excluded in report filters.3. Duplicate entries cause incorrect counts.Which three steps should a data architect recommend to address the issues? (Choose three.)",
      options: [
        "A. Explore third-party data providers to enrich and augment information entered in Salesforce.",
        "B. Build a sales data warehouse with purpose-built data marts for dashboards and senior management reporting.",
        "C. Design and implement data-quality dashboard to monitor and act on records that are incomplete or incorrect.",
        "D. Periodically export data to cleanse data and import them back into Salesforce for executive reports.",
        "E. Leverage Salesforce features, such as validation rules, to avoid incomplete and incorrect records.",
      ],
      answer: "A,C,E",
      explanation: "",
      title: "Question 29",
    },
    {
      content:
        "Northern Trail Outfitters (NTO) has been using Salesforce for Sales and Service for 10 years. For the past two years, the marketing group has noticed a rise from 0% to 35% in returned mail when sending mail using the contact information stored in Salesforce.Which solution should the data architect use to reduce the amount of returned mail?",
      options: [
        "A. Email all customers and ask them to verify their information and to call NTO if their address is incorrect.",
        "B. Delete contacts when the mail is returned to save postal costs for NTO.",
        "C. Have the sales team call all existing customers and ask to verify the contact details.",
        "D. Use a third-party data source to update the contact information in Salesforce.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 30",
    },
    {
      content:
        "Universal Containers (UC) is replacing a home grown CRM solution with Salesforce. UC has decided to migrate operational (open and active) records to Salesforce, while keeping historical records in legacy system. UC would like historical records to be available in Salesforce on an as needed basis.Which solution should a data architect recommend to meet business requirement?",
      options: [
        "A. Leverage real-time integration to pull records into Salesforce.",
        "B. Build a swivel chair solution to go into the legacy system and display records.",
        "C. Leverage mashup to display historical records in Salesforce.",
        "D. Bring all data in Salesforce, and delete it after a year.",
      ],
      answer: "C",
      explanation: "",
      title: "Question 31",
    },
    {
      content:
        "Universal Containers has 30 million case records. The Case object has 80 fields. Agents are reporting performance Issues and time-outs while running case reports in the Salesforce org.Which solution should a data architect recommend to improve reporting performance?",
      options: [
        "A. Contact Salesforce support to enable skinny table for cases.",
        "B. Build reports using custom Lightning components.",
        "C. Create a custom object to store aggregate data and run reports.",
        "D. Move data off of the platform and run reporting outside Salesforce, and give access to reports.",
      ],
      answer: "A",
      explanation: "",
      title: "Question 32",
    },
    {
      content:
        "A custom pricing engine for a Salesforce customer has to be decided by factors with the following hierarchy:1. State in which the customer is located2. City in which the customer is located if available3. Zip code in which the customer is located if available4. Changes to this information should have minimum code changeWhat should a data architect recommend to maintain this information for the custom pricing engine that is to be built in Salesforce?",
      options: [
        "A. Configure the pricing criteria in price books.",
        "B. Maintain required pricing criteria in custom metadata types.",
        "C. Assign the pricing criteria within custom pricing engine.",
        "D. Create a custom object to maintain the pricing criteria.",
      ],
      answer: "B",
      explanation: "",
      title: "Question 33",
    },
    {
      content:
        "A customer is operating in a highly regulated industry and is planning to implement Salesforce. The customer information maintained in Salesforce. includes the following:1. Personally Identifiable information (PII)2. IP restrictions on profiles organized by geographic location3. Financial records that need to be private and accessible only by the assigned sales associateEnterprise Security has mandated access to be restricted to users within a specific geography with detailed monitoring of user activity. Additionally, users should not be allowed to export information from Salesforce.Which three Salesforce Shield capabilities should a data architect recommend? (Choose three.)",
      options: [
        "A. Event monitoring to monitor all user activity.",
        "B. Encrypt sensitive customer information maintained in Salesforce.",
        "C. Prevent sales users access to customer PII information.",
        "D. Restrict access to Salesforce from users outside specific geography.",
        "E. Transaction Security policies to prevent export of Salesforce data.",
      ],
      answer: "B,D,E",
      explanation: "",
      title: "Question 34",
    },
    {
      content:
        "Universal Containers (UC) is transitioning from Classic to Lightning Experience.What does UC need to do to ensure users have access to its notes and attachments in Lightning Experience?",
      options: [
        "A. Manually upload Notes in Lightning Experience.",
        "B. Manually upload Attachments in Lightning Experience.",
        "C. Add Notes and Attachments Related Lists to Page Layouts in Lightning Experience.",
        "D. Migrate Notes and Attachments to Enhanced Notes and Piles using a migration tool.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 35",
    },
    {
      content:
        "Universal Containers has a Sales Cloud implementation for a sales team and an enterprise resource planning (ERP) as a customer master. Sales teams are complaining about duplicate account records and data quality issues with account data.Which two solutions should a data architect recommend to resolve the complaints? (Choose two.)",
      options: [
        "A. Build a nightly batch job to de-dupe data, and merge account records.",
        "B. Integrate Salesforce with ERP, and make ERP as system of truth.",
        "C. Build a nightly sync job from ERP to Salesforce.",
        "D. Implement a de-dupe solution and establish account ownership in Salesforce.",
      ],
      answer: "B,D",
      explanation: "",
      title: "Question 36",
    },
    {
      content:
        "Universal Containers (UC) has adopted Salesforce as its primary sales automation tool. UC has 100,000 customers with a growth rate of 10% a year. UC uses an on-premise web-based billing and invoice system that generates over 1 million invoices a year supporting a monthly billing cycle.The UC sales team needs to be able to pull up a customer record and view their account status, invoice history, and open opportunities without navigating outside of Salesforce.What should a data architect use to provide the sales team with the required functionality?",
      options: [
        "A. Create a visual force tab with the billing system encapsulated within an iframe.",
        "B. Create a custom object and migrate the last 12 months of invoice data into Salesforce so it can be displayed on the Account layout.",
        "C. Write an Apex callout and populate a related list to display on the account record.",
        "D. Create a mashup page that will present the billing system records within Salesforce.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 37",
    },
    {
      content:
        "Universal Containers (UC) is in the process of migrating legacy inventory data from an enterprise resource planning (ERP) system into Sales Cloud with the following requirements:1. Legacy inventory data will be stored in a custom child object called Inventory__c.2. Inventory data should be related to the standard Account object.3. The Inventory__c object should inherit the same sharing rules as the Account object.4. Anytime an Account record is deleted in Salesforce. the related Inventory__c record(s) should be deleted as well.What type of relationship field should a data architect recommend in this scenario?",
      options: [
        "A. Lookup relationship field on Inventory__c, related to Account",
        "B. Indirect lookup relationship field on Account, related to Inventory__c",
        "C. Master-detail relationship field on Inventory__c, related to Account",
        "D. Master-detail relationship field on Account, related to Inventory__c",
      ],
      answer: "D",
      explanation: "",
      title: "Question 38",
    },
    {
      content:
        "Northern Trail Outfitters has implemented Salesforce for its sales associates nationwide. Senior management is concerned that the executive dashboards are not reliable for their real-time decision-making. On analysis, the team found the following issues with data entered inSalesforce:1. Information in certain records is incomplete.2. Incorrect entry in certain fields causes records to be excluded in report filters.3. Duplicate entries cause incorrect counts.Which three steps should a data architect recommend to address the issues? (Choose three.)",
      options: [
        "A. Explore third-party data providers to enrich and augment information entered in Salesforce.",
        "B. Build a sales data warehouse with purpose-built data marts for dashboards and senior management reporting.",
        "C. Design and implement data-quality dashboard to monitor and act on records that are incomplete or incorrect.",
        "D. Periodically export data to cleanse data and import them back into Salesforce for executive reports.",
        "E. Leverage Salesforce features, such as validation rules, to avoid incomplete and incorrect records.",
      ],
      answer: "A,C,E",
      explanation: "",
      title: "Question 39",
    },
    {
      content:
        "Northern Trail Outfitters (NTO) has been using Salesforce for Sales and Service for 10 years. For the past two years, the marketing group has noticed a rise from 0% to 35% in returned mail when sending mail using the contact information stored in Salesforce.Which solution should the data architect use to reduce the amount of returned mail?",
      options: [
        "A. Email all customers and ask them to verify their information and to call NTO if their address is incorrect.",
        "B. Delete contacts when the mail is returned to save postal costs for NTO.",
        "C. Have the sales team call all existing customers and ask to verify the contact details.",
        "D. Use a third-party data source to update the contact information in Salesforce.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 40",
    },
    {
      content:
        "Universal Containers (UC) is replacing a home grown CRM solution with Salesforce. UC has decided to migrate operational (open and active) records to Salesforce, while keeping historical records in legacy system. UC would like historical records to be available in Salesforce on an as needed basis.Which solution should a data architect recommend to meet business requirement?",
      options: [
        "A. Leverage real-time integration to pull records into Salesforce.",
        "B. Build a swivel chair solution to go into the legacy system and display records.",
        "C. Leverage mashup to display historical records in Salesforce.",
        "D. Bring all data in Salesforce, and delete it after a year.",
      ],
      answer: "C",
      explanation: "",
      title: "Question 41",
    },
    {
      content:
        "Universal Containers has 30 million case records. The Case object has 80 fields. Agents are reporting performance Issues and time-outs while running case reports in the Salesforce org.Which solution should a data architect recommend to improve reporting performance?",
      options: [
        "A. Contact Salesforce support to enable skinny table for cases.",
        "B. Build reports using custom Lightning components.",
        "C. Create a custom object to store aggregate data and run reports.",
        "D. Move data off of the platform and run reporting outside Salesforce, and give access to reports.",
      ],
      answer: "A",
      explanation: "",
      title: "Question 42",
    },
    {
      content:
        "A custom pricing engine for a Salesforce customer has to be decided by factors with the following hierarchy:1. State in which the customer is located2. City in which the customer is located if available3. Zip code in which the customer is located if available4. Changes to this information should have minimum code changeWhat should a data architect recommend to maintain this information for the custom pricing engine that is to be built in Salesforce?",
      options: [
        "A. Configure the pricing criteria in price books.",
        "B. Maintain required pricing criteria in custom metadata types.",
        "C. Assign the pricing criteria within custom pricing engine.",
        "D. Create a custom object to maintain the pricing criteria.",
      ],
      answer: "B",
      explanation: "",
      title: "Question 43",
    },
    {
      content:
        "A customer is operating in a highly regulated industry and is planning to implement Salesforce. The customer information maintained in Salesforce. includes the following:1. Personally Identifiable information (PII)2. IP restrictions on profiles organized by geographic location3. Financial records that need to be private and accessible only by the assigned sales associateEnterprise Security has mandated access to be restricted to users within a specific geography with detailed monitoring of user activity. Additionally, users should not be allowed to export information from Salesforce.Which three Salesforce Shield capabilities should a data architect recommend? (Choose three.)",
      options: [
        "A. Event monitoring to monitor all user activity.",
        "B. Encrypt sensitive customer information maintained in Salesforce.",
        "C. Prevent sales users access to customer PII information.",
        "D. Restrict access to Salesforce from users outside specific geography.",
        "E. Transaction Security policies to prevent export of Salesforce data.",
      ],
      answer: "B,D,E",
      explanation: "",
      title: "Question 44",
    },
    {
      content:
        "Universal Containers (UC) is transitioning from Classic to Lightning Experience.What does UC need to do to ensure users have access to its notes and attachments in Lightning Experience?",
      options: [
        "A. Manually upload Notes in Lightning Experience.",
        "B. Manually upload Attachments in Lightning Experience.",
        "C. Add Notes and Attachments Related Lists to Page Layouts in Lightning Experience.",
        "D. Migrate Notes and Attachments to Enhanced Notes and Piles using a migration tool.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 45",
    },
    {
      content:
        "Universal Containers has a Sales Cloud implementation for a sales team and an enterprise resource planning (ERP) as a customer master. Sales teams are complaining about duplicate account records and data quality issues with account data.Which two solutions should a data architect recommend to resolve the complaints? (Choose two.)",
      options: [
        "A. Build a nightly batch job to de-dupe data, and merge account records.",
        "B. Integrate Salesforce with ERP, and make ERP as system of truth.",
        "C. Build a nightly sync job from ERP to Salesforce.",
        "D. Implement a de-dupe solution and establish account ownership in Salesforce.",
      ],
      answer: "B,D",
      explanation: "",
      title: "Question 46",
    },
    {
      content:
        "Universal Containers (UC) has adopted Salesforce as its primary sales automation tool. UC has 100,000 customers with a growth rate of 10% a year. UC uses an on-premise web-based billing and invoice system that generates over 1 million invoices a year supporting a monthly billing cycle.The UC sales team needs to be able to pull up a customer record and view their account status, invoice history, and open opportunities without navigating outside of Salesforce.What should a data architect use to provide the sales team with the required functionality?",
      options: [
        "A. Create a visual force tab with the billing system encapsulated within an iframe.",
        "B. Create a custom object and migrate the last 12 months of invoice data into Salesforce so it can be displayed on the Account layout.",
        "C. Write an Apex callout and populate a related list to display on the account record.",
        "D. Create a mashup page that will present the billing system records within Salesforce.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 47",
    },
    {
      content:
        "Universal Containers (UC) is in the process of migrating legacy inventory data from an enterprise resource planning (ERP) system into Sales Cloud with the following requirements:1. Legacy inventory data will be stored in a custom child object called Inventory__c.2. Inventory data should be related to the standard Account object.3. The Inventory__c object should inherit the same sharing rules as the Account object.4. Anytime an Account record is deleted in Salesforce. the related Inventory__c record(s) should be deleted as well.What type of relationship field should a data architect recommend in this scenario?",
      options: [
        "A. Lookup relationship field on Inventory__c, related to Account",
        "B. Indirect lookup relationship field on Account, related to Inventory__c",
        "C. Master-detail relationship field on Inventory__c, related to Account",
        "D. Master-detail relationship field on Account, related to Inventory__c",
      ],
      answer: "D",
      explanation: "",
      title: "Question 48",
    },
    {
      content:
        "Northern Trail Outfitters has implemented Salesforce for its sales associates nationwide. Senior management is concerned that the executive dashboards are not reliable for their real-time decision-making. On analysis, the team found the following issues with data entered inSalesforce:1. Information in certain records is incomplete.2. Incorrect entry in certain fields causes records to be excluded in report filters.3. Duplicate entries cause incorrect counts.Which three steps should a data architect recommend to address the issues? (Choose three.)",
      options: [
        "A. Explore third-party data providers to enrich and augment information entered in Salesforce.",
        "B. Build a sales data warehouse with purpose-built data marts for dashboards and senior management reporting.",
        "C. Design and implement data-quality dashboard to monitor and act on records that are incomplete or incorrect.",
        "D. Periodically export data to cleanse data and import them back into Salesforce for executive reports.",
        "E. Leverage Salesforce features, such as validation rules, to avoid incomplete and incorrect records.",
      ],
      answer: "A,C,E",
      explanation: "",
      title: "Question 49",
    },
    {
      content:
        "Northern Trail Outfitters (NTO) has been using Salesforce for Sales and Service for 10 years. For the past two years, the marketing group has noticed a rise from 0% to 35% in returned mail when sending mail using the contact information stored in Salesforce.Which solution should the data architect use to reduce the amount of returned mail?",
      options: [
        "A. Email all customers and ask them to verify their information and to call NTO if their address is incorrect.",
        "B. Delete contacts when the mail is returned to save postal costs for NTO.",
        "C. Have the sales team call all existing customers and ask to verify the contact details.",
        "D. Use a third-party data source to update the contact information in Salesforce.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 50",
    },
    {
      content:
        "Universal Containers (UC) is replacing a home grown CRM solution with Salesforce. UC has decided to migrate operational (open and active) records to Salesforce, while keeping historical records in legacy system. UC would like historical records to be available in Salesforce on an as needed basis.Which solution should a data architect recommend to meet business requirement?",
      options: [
        "A. Leverage real-time integration to pull records into Salesforce.",
        "B. Build a swivel chair solution to go into the legacy system and display records.",
        "C. Leverage mashup to display historical records in Salesforce.",
        "D. Bring all data in Salesforce, and delete it after a year.",
      ],
      answer: "C",
      explanation: "",
      title: "Question 51",
    },
    {
      content:
        "Universal Containers has 30 million case records. The Case object has 80 fields. Agents are reporting performance Issues and time-outs while running case reports in the Salesforce org.Which solution should a data architect recommend to improve reporting performance?",
      options: [
        "A. Contact Salesforce support to enable skinny table for cases.",
        "B. Build reports using custom Lightning components.",
        "C. Create a custom object to store aggregate data and run reports.",
        "D. Move data off of the platform and run reporting outside Salesforce, and give access to reports.",
      ],
      answer: "A",
      explanation: "",
      title: "Question 52",
    },
    {
      content:
        "A custom pricing engine for a Salesforce customer has to be decided by factors with the following hierarchy:1. State in which the customer is located2. City in which the customer is located if available3. Zip code in which the customer is located if available4. Changes to this information should have minimum code changeWhat should a data architect recommend to maintain this information for the custom pricing engine that is to be built in Salesforce?",
      options: [
        "A. Configure the pricing criteria in price books.",
        "B. Maintain required pricing criteria in custom metadata types.",
        "C. Assign the pricing criteria within custom pricing engine.",
        "D. Create a custom object to maintain the pricing criteria.",
      ],
      answer: "B",
      explanation: "",
      title: "Question 53",
    },
    {
      content:
        "A customer is operating in a highly regulated industry and is planning to implement Salesforce. The customer information maintained in Salesforce. includes the following:1. Personally Identifiable information (PII)2. IP restrictions on profiles organized by geographic location3. Financial records that need to be private and accessible only by the assigned sales associateEnterprise Security has mandated access to be restricted to users within a specific geography with detailed monitoring of user activity. Additionally, users should not be allowed to export information from Salesforce.Which three Salesforce Shield capabilities should a data architect recommend? (Choose three.)",
      options: [
        "A. Event monitoring to monitor all user activity.",
        "B. Encrypt sensitive customer information maintained in Salesforce.",
        "C. Prevent sales users access to customer PII information.",
        "D. Restrict access to Salesforce from users outside specific geography.",
        "E. Transaction Security policies to prevent export of Salesforce data.",
      ],
      answer: "B,D,E",
      explanation: "",
      title: "Question 54",
    },
    {
      content:
        "Universal Containers (UC) is transitioning from Classic to Lightning Experience.What does UC need to do to ensure users have access to its notes and attachments in Lightning Experience?",
      options: [
        "A. Manually upload Notes in Lightning Experience.",
        "B. Manually upload Attachments in Lightning Experience.",
        "C. Add Notes and Attachments Related Lists to Page Layouts in Lightning Experience.",
        "D. Migrate Notes and Attachments to Enhanced Notes and Piles using a migration tool.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 55",
    },
    {
      content:
        "Universal Containers has a Sales Cloud implementation for a sales team and an enterprise resource planning (ERP) as a customer master. Sales teams are complaining about duplicate account records and data quality issues with account data.Which two solutions should a data architect recommend to resolve the complaints? (Choose two.)",
      options: [
        "A. Build a nightly batch job to de-dupe data, and merge account records.",
        "B. Integrate Salesforce with ERP, and make ERP as system of truth.",
        "C. Build a nightly sync job from ERP to Salesforce.",
        "D. Implement a de-dupe solution and establish account ownership in Salesforce.",
      ],
      answer: "B,D",
      explanation: "",
      title: "Question 56",
    },
    {
      content:
        "Universal Containers (UC) has adopted Salesforce as its primary sales automation tool. UC has 100,000 customers with a growth rate of 10% a year. UC uses an on-premise web-based billing and invoice system that generates over 1 million invoices a year supporting a monthly billing cycle.The UC sales team needs to be able to pull up a customer record and view their account status, invoice history, and open opportunities without navigating outside of Salesforce.What should a data architect use to provide the sales team with the required functionality?",
      options: [
        "A. Create a visual force tab with the billing system encapsulated within an iframe.",
        "B. Create a custom object and migrate the last 12 months of invoice data into Salesforce so it can be displayed on the Account layout.",
        "C. Write an Apex callout and populate a related list to display on the account record.",
        "D. Create a mashup page that will present the billing system records within Salesforce.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 57",
    },
    {
      content:
        "Universal Containers (UC) is in the process of migrating legacy inventory data from an enterprise resource planning (ERP) system into Sales Cloud with the following requirements:1. Legacy inventory data will be stored in a custom child object called Inventory__c.2. Inventory data should be related to the standard Account object.3. The Inventory__c object should inherit the same sharing rules as the Account object.4. Anytime an Account record is deleted in Salesforce. the related Inventory__c record(s) should be deleted as well.What type of relationship field should a data architect recommend in this scenario?",
      options: [
        "A. Lookup relationship field on Inventory__c, related to Account",
        "B. Indirect lookup relationship field on Account, related to Inventory__c",
        "C. Master-detail relationship field on Inventory__c, related to Account",
        "D. Master-detail relationship field on Account, related to Inventory__c",
      ],
      answer: "D",
      explanation: "",
      title: "Question 58",
    },
    {
      content:
        "Northern Trail Outfitters has implemented Salesforce for its sales associates nationwide. Senior management is concerned that the executive dashboards are not reliable for their real-time decision-making. On analysis, the team found the following issues with data entered inSalesforce:1. Information in certain records is incomplete.2. Incorrect entry in certain fields causes records to be excluded in report filters.3. Duplicate entries cause incorrect counts.Which three steps should a data architect recommend to address the issues? (Choose three.)",
      options: [
        "A. Explore third-party data providers to enrich and augment information entered in Salesforce.",
        "B. Build a sales data warehouse with purpose-built data marts for dashboards and senior management reporting.",
        "C. Design and implement data-quality dashboard to monitor and act on records that are incomplete or incorrect.",
        "D. Periodically export data to cleanse data and import them back into Salesforce for executive reports.",
        "E. Leverage Salesforce features, such as validation rules, to avoid incomplete and incorrect records.",
      ],
      answer: "A,C,E",
      explanation: "",
      title: "Question 59",
    },
    {
      content:
        "Northern Trail Outfitters (NTO) has been using Salesforce for Sales and Service for 10 years. For the past two years, the marketing group has noticed a rise from 0% to 35% in returned mail when sending mail using the contact information stored in Salesforce.Which solution should the data architect use to reduce the amount of returned mail?",
      options: [
        "A. Email all customers and ask them to verify their information and to call NTO if their address is incorrect.",
        "B. Delete contacts when the mail is returned to save postal costs for NTO.",
        "C. Have the sales team call all existing customers and ask to verify the contact details.",
        "D. Use a third-party data source to update the contact information in Salesforce.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 60",
    },
    {
      content:
        "Universal Containers (UC) is replacing a home grown CRM solution with Salesforce. UC has decided to migrate operational (open and active) records to Salesforce, while keeping historical records in legacy system. UC would like historical records to be available in Salesforce on an as needed basis.Which solution should a data architect recommend to meet business requirement?",
      options: [
        "A. Leverage real-time integration to pull records into Salesforce.",
        "B. Build a swivel chair solution to go into the legacy system and display records.",
        "C. Leverage mashup to display historical records in Salesforce.",
        "D. Bring all data in Salesforce, and delete it after a year.",
      ],
      answer: "C",
      explanation: "",
      title: "Question 61",
    },
    {
      content:
        "Universal Containers has 30 million case records. The Case object has 80 fields. Agents are reporting performance Issues and time-outs while running case reports in the Salesforce org.Which solution should a data architect recommend to improve reporting performance?",
      options: [
        "A. Contact Salesforce support to enable skinny table for cases.",
        "B. Build reports using custom Lightning components.",
        "C. Create a custom object to store aggregate data and run reports.",
        "D. Move data off of the platform and run reporting outside Salesforce, and give access to reports.",
      ],
      answer: "A",
      explanation: "",
      title: "Question 62",
    },
    {
      content:
        "A custom pricing engine for a Salesforce customer has to be decided by factors with the following hierarchy:1. State in which the customer is located2. City in which the customer is located if available3. Zip code in which the customer is located if available4. Changes to this information should have minimum code changeWhat should a data architect recommend to maintain this information for the custom pricing engine that is to be built in Salesforce?",
      options: [
        "A. Configure the pricing criteria in price books.",
        "B. Maintain required pricing criteria in custom metadata types.",
        "C. Assign the pricing criteria within custom pricing engine.",
        "D. Create a custom object to maintain the pricing criteria.",
      ],
      answer: "B",
      explanation: "",
      title: "Question 63",
    },
    {
      content:
        "A customer is operating in a highly regulated industry and is planning to implement Salesforce. The customer information maintained in Salesforce. includes the following:1. Personally Identifiable information (PII)2. IP restrictions on profiles organized by geographic location3. Financial records that need to be private and accessible only by the assigned sales associateEnterprise Security has mandated access to be restricted to users within a specific geography with detailed monitoring of user activity. Additionally, users should not be allowed to export information from Salesforce.Which three Salesforce Shield capabilities should a data architect recommend? (Choose three.)",
      options: [
        "A. Event monitoring to monitor all user activity.",
        "B. Encrypt sensitive customer information maintained in Salesforce.",
        "C. Prevent sales users access to customer PII information.",
        "D. Restrict access to Salesforce from users outside specific geography.",
        "E. Transaction Security policies to prevent export of Salesforce data.",
      ],
      answer: "B,D,E",
      explanation: "",
      title: "Question 64",
    },
    {
      content:
        "Universal Containers (UC) is transitioning from Classic to Lightning Experience.What does UC need to do to ensure users have access to its notes and attachments in Lightning Experience?",
      options: [
        "A. Manually upload Notes in Lightning Experience.",
        "B. Manually upload Attachments in Lightning Experience.",
        "C. Add Notes and Attachments Related Lists to Page Layouts in Lightning Experience.",
        "D. Migrate Notes and Attachments to Enhanced Notes and Piles using a migration tool.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 65",
    },
    {
      content:
        "Universal Containers has a Sales Cloud implementation for a sales team and an enterprise resource planning (ERP) as a customer master. Sales teams are complaining about duplicate account records and data quality issues with account data.Which two solutions should a data architect recommend to resolve the complaints? (Choose two.)",
      options: [
        "A. Build a nightly batch job to de-dupe data, and merge account records.",
        "B. Integrate Salesforce with ERP, and make ERP as system of truth.",
        "C. Build a nightly sync job from ERP to Salesforce.",
        "D. Implement a de-dupe solution and establish account ownership in Salesforce.",
      ],
      answer: "B,D",
      explanation: "",
      title: "Question 66",
    },
    {
      content:
        "Universal Containers (UC) has adopted Salesforce as its primary sales automation tool. UC has 100,000 customers with a growth rate of 10% a year. UC uses an on-premise web-based billing and invoice system that generates over 1 million invoices a year supporting a monthly billing cycle.The UC sales team needs to be able to pull up a customer record and view their account status, invoice history, and open opportunities without navigating outside of Salesforce.What should a data architect use to provide the sales team with the required functionality?",
      options: [
        "A. Create a visual force tab with the billing system encapsulated within an iframe.",
        "B. Create a custom object and migrate the last 12 months of invoice data into Salesforce so it can be displayed on the Account layout.",
        "C. Write an Apex callout and populate a related list to display on the account record.",
        "D. Create a mashup page that will present the billing system records within Salesforce.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 67",
    },
    {
      content:
        "Universal Containers (UC) is in the process of migrating legacy inventory data from an enterprise resource planning (ERP) system into Sales Cloud with the following requirements:1. Legacy inventory data will be stored in a custom child object called Inventory__c.2. Inventory data should be related to the standard Account object.3. The Inventory__c object should inherit the same sharing rules as the Account object.4. Anytime an Account record is deleted in Salesforce. the related Inventory__c record(s) should be deleted as well.What type of relationship field should a data architect recommend in this scenario?",
      options: [
        "A. Lookup relationship field on Inventory__c, related to Account",
        "B. Indirect lookup relationship field on Account, related to Inventory__c",
        "C. Master-detail relationship field on Inventory__c, related to Account",
        "D. Master-detail relationship field on Account, related to Inventory__c",
      ],
      answer: "D",
      explanation: "",
      title: "Question 68",
    },
    {
      content:
        "Northern Trail Outfitters has implemented Salesforce for its sales associates nationwide. Senior management is concerned that the executive dashboards are not reliable for their real-time decision-making. On analysis, the team found the following issues with data entered inSalesforce:1. Information in certain records is incomplete.2. Incorrect entry in certain fields causes records to be excluded in report filters.3. Duplicate entries cause incorrect counts.Which three steps should a data architect recommend to address the issues? (Choose three.)",
      options: [
        "A. Explore third-party data providers to enrich and augment information entered in Salesforce.",
        "B. Build a sales data warehouse with purpose-built data marts for dashboards and senior management reporting.",
        "C. Design and implement data-quality dashboard to monitor and act on records that are incomplete or incorrect.",
        "D. Periodically export data to cleanse data and import them back into Salesforce for executive reports.",
        "E. Leverage Salesforce features, such as validation rules, to avoid incomplete and incorrect records.",
      ],
      answer: "A,C,E",
      explanation: "",
      title: "Question 69",
    },
    {
      content:
        "Northern Trail Outfitters (NTO) has been using Salesforce for Sales and Service for 10 years. For the past two years, the marketing group has noticed a rise from 0% to 35% in returned mail when sending mail using the contact information stored in Salesforce.Which solution should the data architect use to reduce the amount of returned mail?",
      options: [
        "A. Email all customers and ask them to verify their information and to call NTO if their address is incorrect.",
        "B. Delete contacts when the mail is returned to save postal costs for NTO.",
        "C. Have the sales team call all existing customers and ask to verify the contact details.",
        "D. Use a third-party data source to update the contact information in Salesforce.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 70",
    },
    {
      content:
        "Universal Containers (UC) is replacing a home grown CRM solution with Salesforce. UC has decided to migrate operational (open and active) records to Salesforce, while keeping historical records in legacy system. UC would like historical records to be available in Salesforce on an as needed basis.Which solution should a data architect recommend to meet business requirement?",
      options: [
        "A. Leverage real-time integration to pull records into Salesforce.",
        "B. Build a swivel chair solution to go into the legacy system and display records.",
        "C. Leverage mashup to display historical records in Salesforce.",
        "D. Bring all data in Salesforce, and delete it after a year.",
      ],
      answer: "C",
      explanation: "",
      title: "Question 71",
    },
    {
      content:
        "Universal Containers has 30 million case records. The Case object has 80 fields. Agents are reporting performance Issues and time-outs while running case reports in the Salesforce org.Which solution should a data architect recommend to improve reporting performance?",
      options: [
        "A. Contact Salesforce support to enable skinny table for cases.",
        "B. Build reports using custom Lightning components.",
        "C. Create a custom object to store aggregate data and run reports.",
        "D. Move data off of the platform and run reporting outside Salesforce, and give access to reports.",
      ],
      answer: "A",
      explanation: "",
      title: "Question 72",
    },
    {
      content:
        "A custom pricing engine for a Salesforce customer has to be decided by factors with the following hierarchy:1. State in which the customer is located2. City in which the customer is located if available3. Zip code in which the customer is located if available4. Changes to this information should have minimum code changeWhat should a data architect recommend to maintain this information for the custom pricing engine that is to be built in Salesforce?",
      options: [
        "A. Configure the pricing criteria in price books.",
        "B. Maintain required pricing criteria in custom metadata types.",
        "C. Assign the pricing criteria within custom pricing engine.",
        "D. Create a custom object to maintain the pricing criteria.",
      ],
      answer: "B",
      explanation: "",
      title: "Question 73",
    },
    {
      content:
        "A customer is operating in a highly regulated industry and is planning to implement Salesforce. The customer information maintained in Salesforce. includes the following:1. Personally Identifiable information (PII)2. IP restrictions on profiles organized by geographic location3. Financial records that need to be private and accessible only by the assigned sales associateEnterprise Security has mandated access to be restricted to users within a specific geography with detailed monitoring of user activity. Additionally, users should not be allowed to export information from Salesforce.Which three Salesforce Shield capabilities should a data architect recommend? (Choose three.)",
      options: [
        "A. Event monitoring to monitor all user activity.",
        "B. Encrypt sensitive customer information maintained in Salesforce.",
        "C. Prevent sales users access to customer PII information.",
        "D. Restrict access to Salesforce from users outside specific geography.",
        "E. Transaction Security policies to prevent export of Salesforce data.",
      ],
      answer: "B,D,E",
      explanation: "",
      title: "Question 74",
    },
    {
      content:
        "Universal Containers (UC) is transitioning from Classic to Lightning Experience.What does UC need to do to ensure users have access to its notes and attachments in Lightning Experience?",
      options: [
        "A. Manually upload Notes in Lightning Experience.",
        "B. Manually upload Attachments in Lightning Experience.",
        "C. Add Notes and Attachments Related Lists to Page Layouts in Lightning Experience.",
        "D. Migrate Notes and Attachments to Enhanced Notes and Piles using a migration tool.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 75",
    },
    {
      content:
        "Universal Containers has a Sales Cloud implementation for a sales team and an enterprise resource planning (ERP) as a customer master. Sales teams are complaining about duplicate account records and data quality issues with account data.Which two solutions should a data architect recommend to resolve the complaints? (Choose two.)",
      options: [
        "A. Build a nightly batch job to de-dupe data, and merge account records.",
        "B. Integrate Salesforce with ERP, and make ERP as system of truth.",
        "C. Build a nightly sync job from ERP to Salesforce.",
        "D. Implement a de-dupe solution and establish account ownership in Salesforce.",
      ],
      answer: "B,D",
      explanation: "",
      title: "Question 76",
    },
    {
      content:
        "Universal Containers (UC) has adopted Salesforce as its primary sales automation tool. UC has 100,000 customers with a growth rate of 10% a year. UC uses an on-premise web-based billing and invoice system that generates over 1 million invoices a year supporting a monthly billing cycle.The UC sales team needs to be able to pull up a customer record and view their account status, invoice history, and open opportunities without navigating outside of Salesforce.What should a data architect use to provide the sales team with the required functionality?",
      options: [
        "A. Create a visual force tab with the billing system encapsulated within an iframe.",
        "B. Create a custom object and migrate the last 12 months of invoice data into Salesforce so it can be displayed on the Account layout.",
        "C. Write an Apex callout and populate a related list to display on the account record.",
        "D. Create a mashup page that will present the billing system records within Salesforce.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 77",
    },
    {
      content:
        "Universal Containers (UC) is in the process of migrating legacy inventory data from an enterprise resource planning (ERP) system into Sales Cloud with the following requirements:1. Legacy inventory data will be stored in a custom child object called Inventory__c.2. Inventory data should be related to the standard Account object.3. The Inventory__c object should inherit the same sharing rules as the Account object.4. Anytime an Account record is deleted in Salesforce. the related Inventory__c record(s) should be deleted as well.What type of relationship field should a data architect recommend in this scenario?",
      options: [
        "A. Lookup relationship field on Inventory__c, related to Account",
        "B. Indirect lookup relationship field on Account, related to Inventory__c",
        "C. Master-detail relationship field on Inventory__c, related to Account",
        "D. Master-detail relationship field on Account, related to Inventory__c",
      ],
      answer: "D",
      explanation: "",
      title: "Question 78",
    },
    {
      content:
        "Northern Trail Outfitters has implemented Salesforce for its sales associates nationwide. Senior management is concerned that the executive dashboards are not reliable for their real-time decision-making. On analysis, the team found the following issues with data entered inSalesforce:1. Information in certain records is incomplete.2. Incorrect entry in certain fields causes records to be excluded in report filters.3. Duplicate entries cause incorrect counts.Which three steps should a data architect recommend to address the issues? (Choose three.)",
      options: [
        "A. Explore third-party data providers to enrich and augment information entered in Salesforce.",
        "B. Build a sales data warehouse with purpose-built data marts for dashboards and senior management reporting.",
        "C. Design and implement data-quality dashboard to monitor and act on records that are incomplete or incorrect.",
        "D. Periodically export data to cleanse data and import them back into Salesforce for executive reports.",
        "E. Leverage Salesforce features, such as validation rules, to avoid incomplete and incorrect records.",
      ],
      answer: "A,C,E",
      explanation: "",
      title: "Question 79",
    },
    {
      content:
        "Northern Trail Outfitters (NTO) has been using Salesforce for Sales and Service for 10 years. For the past two years, the marketing group has noticed a rise from 0% to 35% in returned mail when sending mail using the contact information stored in Salesforce.Which solution should the data architect use to reduce the amount of returned mail?",
      options: [
        "A. Email all customers and ask them to verify their information and to call NTO if their address is incorrect.",
        "B. Delete contacts when the mail is returned to save postal costs for NTO.",
        "C. Have the sales team call all existing customers and ask to verify the contact details.",
        "D. Use a third-party data source to update the contact information in Salesforce.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 80",
    },
    {
      content:
        "Universal Containers (UC) is replacing a home grown CRM solution with Salesforce. UC has decided to migrate operational (open and active) records to Salesforce, while keeping historical records in legacy system. UC would like historical records to be available in Salesforce on an as needed basis.Which solution should a data architect recommend to meet business requirement?",
      options: [
        "A. Leverage real-time integration to pull records into Salesforce.",
        "B. Build a swivel chair solution to go into the legacy system and display records.",
        "C. Leverage mashup to display historical records in Salesforce.",
        "D. Bring all data in Salesforce, and delete it after a year.",
      ],
      answer: "C",
      explanation: "",
      title: "Question 81",
    },
    {
      content:
        "Universal Containers has 30 million case records. The Case object has 80 fields. Agents are reporting performance Issues and time-outs while running case reports in the Salesforce org.Which solution should a data architect recommend to improve reporting performance?",
      options: [
        "A. Contact Salesforce support to enable skinny table for cases.",
        "B. Build reports using custom Lightning components.",
        "C. Create a custom object to store aggregate data and run reports.",
        "D. Move data off of the platform and run reporting outside Salesforce, and give access to reports.",
      ],
      answer: "A",
      explanation: "",
      title: "Question 82",
    },
    {
      content:
        "A custom pricing engine for a Salesforce customer has to be decided by factors with the following hierarchy:1. State in which the customer is located2. City in which the customer is located if available3. Zip code in which the customer is located if available4. Changes to this information should have minimum code changeWhat should a data architect recommend to maintain this information for the custom pricing engine that is to be built in Salesforce?",
      options: [
        "A. Configure the pricing criteria in price books.",
        "B. Maintain required pricing criteria in custom metadata types.",
        "C. Assign the pricing criteria within custom pricing engine.",
        "D. Create a custom object to maintain the pricing criteria.",
      ],
      answer: "B",
      explanation: "",
      title: "Question 83",
    },
    {
      content:
        "A customer is operating in a highly regulated industry and is planning to implement Salesforce. The customer information maintained in Salesforce. includes the following:1. Personally Identifiable information (PII)2. IP restrictions on profiles organized by geographic location3. Financial records that need to be private and accessible only by the assigned sales associateEnterprise Security has mandated access to be restricted to users within a specific geography with detailed monitoring of user activity. Additionally, users should not be allowed to export information from Salesforce.Which three Salesforce Shield capabilities should a data architect recommend? (Choose three.)",
      options: [
        "A. Event monitoring to monitor all user activity.",
        "B. Encrypt sensitive customer information maintained in Salesforce.",
        "C. Prevent sales users access to customer PII information.",
        "D. Restrict access to Salesforce from users outside specific geography.",
        "E. Transaction Security policies to prevent export of Salesforce data.",
      ],
      answer: "B,D,E",
      explanation: "",
      title: "Question 84",
    },
    {
      content:
        "Universal Containers (UC) is transitioning from Classic to Lightning Experience.What does UC need to do to ensure users have access to its notes and attachments in Lightning Experience?",
      options: [
        "A. Manually upload Notes in Lightning Experience.",
        "B. Manually upload Attachments in Lightning Experience.",
        "C. Add Notes and Attachments Related Lists to Page Layouts in Lightning Experience.",
        "D. Migrate Notes and Attachments to Enhanced Notes and Piles using a migration tool.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 85",
    },
    {
      content:
        "Universal Containers has a Sales Cloud implementation for a sales team and an enterprise resource planning (ERP) as a customer master. Sales teams are complaining about duplicate account records and data quality issues with account data.Which two solutions should a data architect recommend to resolve the complaints? (Choose two.)",
      options: [
        "A. Build a nightly batch job to de-dupe data, and merge account records.",
        "B. Integrate Salesforce with ERP, and make ERP as system of truth.",
        "C. Build a nightly sync job from ERP to Salesforce.",
        "D. Implement a de-dupe solution and establish account ownership in Salesforce.",
      ],
      answer: "B,D",
      explanation: "",
      title: "Question 86",
    },
    {
      content:
        "Universal Containers (UC) has adopted Salesforce as its primary sales automation tool. UC has 100,000 customers with a growth rate of 10% a year. UC uses an on-premise web-based billing and invoice system that generates over 1 million invoices a year supporting a monthly billing cycle.The UC sales team needs to be able to pull up a customer record and view their account status, invoice history, and open opportunities without navigating outside of Salesforce.What should a data architect use to provide the sales team with the required functionality?",
      options: [
        "A. Create a visual force tab with the billing system encapsulated within an iframe.",
        "B. Create a custom object and migrate the last 12 months of invoice data into Salesforce so it can be displayed on the Account layout.",
        "C. Write an Apex callout and populate a related list to display on the account record.",
        "D. Create a mashup page that will present the billing system records within Salesforce.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 87",
    },
    {
      content:
        "Universal Containers (UC) is in the process of migrating legacy inventory data from an enterprise resource planning (ERP) system into Sales Cloud with the following requirements:1. Legacy inventory data will be stored in a custom child object called Inventory__c.2. Inventory data should be related to the standard Account object.3. The Inventory__c object should inherit the same sharing rules as the Account object.4. Anytime an Account record is deleted in Salesforce. the related Inventory__c record(s) should be deleted as well.What type of relationship field should a data architect recommend in this scenario?",
      options: [
        "A. Lookup relationship field on Inventory__c, related to Account",
        "B. Indirect lookup relationship field on Account, related to Inventory__c",
        "C. Master-detail relationship field on Inventory__c, related to Account",
        "D. Master-detail relationship field on Account, related to Inventory__c",
      ],
      answer: "D",
      explanation: "",
      title: "Question 88",
    },
    {
      content:
        "Northern Trail Outfitters has implemented Salesforce for its sales associates nationwide. Senior management is concerned that the executive dashboards are not reliable for their real-time decision-making. On analysis, the team found the following issues with data entered inSalesforce:1. Information in certain records is incomplete.2. Incorrect entry in certain fields causes records to be excluded in report filters.3. Duplicate entries cause incorrect counts.Which three steps should a data architect recommend to address the issues? (Choose three.)",
      options: [
        "A. Explore third-party data providers to enrich and augment information entered in Salesforce.",
        "B. Build a sales data warehouse with purpose-built data marts for dashboards and senior management reporting.",
        "C. Design and implement data-quality dashboard to monitor and act on records that are incomplete or incorrect.",
        "D. Periodically export data to cleanse data and import them back into Salesforce for executive reports.",
        "E. Leverage Salesforce features, such as validation rules, to avoid incomplete and incorrect records.",
      ],
      answer: "A,C,E",
      explanation: "",
      title: "Question 89",
    },
    {
      content:
        "Northern Trail Outfitters (NTO) has been using Salesforce for Sales and Service for 10 years. For the past two years, the marketing group has noticed a rise from 0% to 35% in returned mail when sending mail using the contact information stored in Salesforce.Which solution should the data architect use to reduce the amount of returned mail?",
      options: [
        "A. Email all customers and ask them to verify their information and to call NTO if their address is incorrect.",
        "B. Delete contacts when the mail is returned to save postal costs for NTO.",
        "C. Have the sales team call all existing customers and ask to verify the contact details.",
        "D. Use a third-party data source to update the contact information in Salesforce.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 90",
    },
    {
      content:
        "Universal Containers (UC) is replacing a home grown CRM solution with Salesforce. UC has decided to migrate operational (open and active) records to Salesforce, while keeping historical records in legacy system. UC would like historical records to be available in Salesforce on an as needed basis.Which solution should a data architect recommend to meet business requirement?",
      options: [
        "A. Leverage real-time integration to pull records into Salesforce.",
        "B. Build a swivel chair solution to go into the legacy system and display records.",
        "C. Leverage mashup to display historical records in Salesforce.",
        "D. Bring all data in Salesforce, and delete it after a year.",
      ],
      answer: "C",
      explanation: "",
      title: "Question 91",
    },
    {
      content:
        "Universal Containers has 30 million case records. The Case object has 80 fields. Agents are reporting performance Issues and time-outs while running case reports in the Salesforce org.Which solution should a data architect recommend to improve reporting performance?",
      options: [
        "A. Contact Salesforce support to enable skinny table for cases.",
        "B. Build reports using custom Lightning components.",
        "C. Create a custom object to store aggregate data and run reports.",
        "D. Move data off of the platform and run reporting outside Salesforce, and give access to reports.",
      ],
      answer: "A",
      explanation: "",
      title: "Question 92",
    },
    {
      content:
        "A custom pricing engine for a Salesforce customer has to be decided by factors with the following hierarchy:1. State in which the customer is located2. City in which the customer is located if available3. Zip code in which the customer is located if available4. Changes to this information should have minimum code changeWhat should a data architect recommend to maintain this information for the custom pricing engine that is to be built in Salesforce?",
      options: [
        "A. Configure the pricing criteria in price books.",
        "B. Maintain required pricing criteria in custom metadata types.",
        "C. Assign the pricing criteria within custom pricing engine.",
        "D. Create a custom object to maintain the pricing criteria.",
      ],
      answer: "B",
      explanation: "",
      title: "Question 93",
    },
    {
      content:
        "A customer is operating in a highly regulated industry and is planning to implement Salesforce. The customer information maintained in Salesforce. includes the following:1. Personally Identifiable information (PII)2. IP restrictions on profiles organized by geographic location3. Financial records that need to be private and accessible only by the assigned sales associateEnterprise Security has mandated access to be restricted to users within a specific geography with detailed monitoring of user activity. Additionally, users should not be allowed to export information from Salesforce.Which three Salesforce Shield capabilities should a data architect recommend? (Choose three.)",
      options: [
        "A. Event monitoring to monitor all user activity.",
        "B. Encrypt sensitive customer information maintained in Salesforce.",
        "C. Prevent sales users access to customer PII information.",
        "D. Restrict access to Salesforce from users outside specific geography.",
        "E. Transaction Security policies to prevent export of Salesforce data.",
      ],
      answer: "B,D,E",
      explanation: "",
      title: "Question 94",
    },
    {
      content:
        "Universal Containers (UC) is transitioning from Classic to Lightning Experience.What does UC need to do to ensure users have access to its notes and attachments in Lightning Experience?",
      options: [
        "A. Manually upload Notes in Lightning Experience.",
        "B. Manually upload Attachments in Lightning Experience.",
        "C. Add Notes and Attachments Related Lists to Page Layouts in Lightning Experience.",
        "D. Migrate Notes and Attachments to Enhanced Notes and Piles using a migration tool.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 95",
    },
    {
      content:
        "Universal Containers has a Sales Cloud implementation for a sales team and an enterprise resource planning (ERP) as a customer master. Sales teams are complaining about duplicate account records and data quality issues with account data.Which two solutions should a data architect recommend to resolve the complaints? (Choose two.)",
      options: [
        "A. Build a nightly batch job to de-dupe data, and merge account records.",
        "B. Integrate Salesforce with ERP, and make ERP as system of truth.",
        "C. Build a nightly sync job from ERP to Salesforce.",
        "D. Implement a de-dupe solution and establish account ownership in Salesforce.",
      ],
      answer: "B,D",
      explanation: "",
      title: "Question 96",
    },
    {
      content:
        "Universal Containers (UC) has adopted Salesforce as its primary sales automation tool. UC has 100,000 customers with a growth rate of 10% a year. UC uses an on-premise web-based billing and invoice system that generates over 1 million invoices a year supporting a monthly billing cycle.The UC sales team needs to be able to pull up a customer record and view their account status, invoice history, and open opportunities without navigating outside of Salesforce.What should a data architect use to provide the sales team with the required functionality?",
      options: [
        "A. Create a visual force tab with the billing system encapsulated within an iframe.",
        "B. Create a custom object and migrate the last 12 months of invoice data into Salesforce so it can be displayed on the Account layout.",
        "C. Write an Apex callout and populate a related list to display on the account record.",
        "D. Create a mashup page that will present the billing system records within Salesforce.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 97",
    },
    {
      content:
        "Universal Containers (UC) is in the process of migrating legacy inventory data from an enterprise resource planning (ERP) system into Sales Cloud with the following requirements:1. Legacy inventory data will be stored in a custom child object called Inventory__c.2. Inventory data should be related to the standard Account object.3. The Inventory__c object should inherit the same sharing rules as the Account object.4. Anytime an Account record is deleted in Salesforce. the related Inventory__c record(s) should be deleted as well.What type of relationship field should a data architect recommend in this scenario?",
      options: [
        "A. Lookup relationship field on Inventory__c, related to Account",
        "B. Indirect lookup relationship field on Account, related to Inventory__c",
        "C. Master-detail relationship field on Inventory__c, related to Account",
        "D. Master-detail relationship field on Account, related to Inventory__c",
      ],
      answer: "D",
      explanation: "",
      title: "Question 98",
    },
    {
      content:
        "Northern Trail Outfitters has implemented Salesforce for its sales associates nationwide. Senior management is concerned that the executive dashboards are not reliable for their real-time decision-making. On analysis, the team found the following issues with data entered inSalesforce:1. Information in certain records is incomplete.2. Incorrect entry in certain fields causes records to be excluded in report filters.3. Duplicate entries cause incorrect counts.Which three steps should a data architect recommend to address the issues? (Choose three.)",
      options: [
        "A. Explore third-party data providers to enrich and augment information entered in Salesforce.",
        "B. Build a sales data warehouse with purpose-built data marts for dashboards and senior management reporting.",
        "C. Design and implement data-quality dashboard to monitor and act on records that are incomplete or incorrect.",
        "D. Periodically export data to cleanse data and import them back into Salesforce for executive reports.",
        "E. Leverage Salesforce features, such as validation rules, to avoid incomplete and incorrect records.",
      ],
      answer: "A,C,E",
      explanation: "",
      title: "Question 99",
    },
    {
      content:
        "Northern Trail Outfitters (NTO) has been using Salesforce for Sales and Service for 10 years. For the past two years, the marketing group has noticed a rise from 0% to 35% in returned mail when sending mail using the contact information stored in Salesforce.Which solution should the data architect use to reduce the amount of returned mail?",
      options: [
        "A. Email all customers and ask them to verify their information and to call NTO if their address is incorrect.",
        "B. Delete contacts when the mail is returned to save postal costs for NTO.",
        "C. Have the sales team call all existing customers and ask to verify the contact details.",
        "D. Use a third-party data source to update the contact information in Salesforce.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 100",
    },
    {
      content:
        "Universal Containers (UC) is replacing a home grown CRM solution with Salesforce. UC has decided to migrate operational (open and active) records to Salesforce, while keeping historical records in legacy system. UC would like historical records to be available in Salesforce on an as needed basis.Which solution should a data architect recommend to meet business requirement?",
      options: [
        "A. Leverage real-time integration to pull records into Salesforce.",
        "B. Build a swivel chair solution to go into the legacy system and display records.",
        "C. Leverage mashup to display historical records in Salesforce.",
        "D. Bring all data in Salesforce, and delete it after a year.",
      ],
      answer: "C",
      explanation: "",
      title: "Question 101",
    },
    {
      content:
        "Universal Containers has 30 million case records. The Case object has 80 fields. Agents are reporting performance Issues and time-outs while running case reports in the Salesforce org.Which solution should a data architect recommend to improve reporting performance?",
      options: [
        "A. Contact Salesforce support to enable skinny table for cases.",
        "B. Build reports using custom Lightning components.",
        "C. Create a custom object to store aggregate data and run reports.",
        "D. Move data off of the platform and run reporting outside Salesforce, and give access to reports.",
      ],
      answer: "A",
      explanation: "",
      title: "Question 102",
    },
    {
      content:
        "A custom pricing engine for a Salesforce customer has to be decided by factors with the following hierarchy:1. State in which the customer is located2. City in which the customer is located if available3. Zip code in which the customer is located if available4. Changes to this information should have minimum code changeWhat should a data architect recommend to maintain this information for the custom pricing engine that is to be built in Salesforce?",
      options: [
        "A. Configure the pricing criteria in price books.",
        "B. Maintain required pricing criteria in custom metadata types.",
        "C. Assign the pricing criteria within custom pricing engine.",
        "D. Create a custom object to maintain the pricing criteria.",
      ],
      answer: "B",
      explanation: "",
      title: "Question 103",
    },
    {
      content:
        "A customer is operating in a highly regulated industry and is planning to implement Salesforce. The customer information maintained in Salesforce. includes the following:1. Personally Identifiable information (PII)2. IP restrictions on profiles organized by geographic location3. Financial records that need to be private and accessible only by the assigned sales associateEnterprise Security has mandated access to be restricted to users within a specific geography with detailed monitoring of user activity. Additionally, users should not be allowed to export information from Salesforce.Which three Salesforce Shield capabilities should a data architect recommend? (Choose three.)",
      options: [
        "A. Event monitoring to monitor all user activity.",
        "B. Encrypt sensitive customer information maintained in Salesforce.",
        "C. Prevent sales users access to customer PII information.",
        "D. Restrict access to Salesforce from users outside specific geography.",
        "E. Transaction Security policies to prevent export of Salesforce data.",
      ],
      answer: "B,D,E",
      explanation: "",
      title: "Question 104",
    },
    {
      content:
        "Universal Containers (UC) is transitioning from Classic to Lightning Experience.What does UC need to do to ensure users have access to its notes and attachments in Lightning Experience?",
      options: [
        "A. Manually upload Notes in Lightning Experience.",
        "B. Manually upload Attachments in Lightning Experience.",
        "C. Add Notes and Attachments Related Lists to Page Layouts in Lightning Experience.",
        "D. Migrate Notes and Attachments to Enhanced Notes and Piles using a migration tool.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 105",
    },
    {
      content:
        "Universal Containers has a Sales Cloud implementation for a sales team and an enterprise resource planning (ERP) as a customer master. Sales teams are complaining about duplicate account records and data quality issues with account data.Which two solutions should a data architect recommend to resolve the complaints? (Choose two.)",
      options: [
        "A. Build a nightly batch job to de-dupe data, and merge account records.",
        "B. Integrate Salesforce with ERP, and make ERP as system of truth.",
        "C. Build a nightly sync job from ERP to Salesforce.",
        "D. Implement a de-dupe solution and establish account ownership in Salesforce.",
      ],
      answer: "B,D",
      explanation: "",
      title: "Question 106",
    },
    {
      content:
        "Universal Containers (UC) has adopted Salesforce as its primary sales automation tool. UC has 100,000 customers with a growth rate of 10% a year. UC uses an on-premise web-based billing and invoice system that generates over 1 million invoices a year supporting a monthly billing cycle.The UC sales team needs to be able to pull up a customer record and view their account status, invoice history, and open opportunities without navigating outside of Salesforce.What should a data architect use to provide the sales team with the required functionality?",
      options: [
        "A. Create a visual force tab with the billing system encapsulated within an iframe.",
        "B. Create a custom object and migrate the last 12 months of invoice data into Salesforce so it can be displayed on the Account layout.",
        "C. Write an Apex callout and populate a related list to display on the account record.",
        "D. Create a mashup page that will present the billing system records within Salesforce.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 107",
    },
    {
      content:
        "Universal Containers (UC) is in the process of migrating legacy inventory data from an enterprise resource planning (ERP) system into Sales Cloud with the following requirements:1. Legacy inventory data will be stored in a custom child object called Inventory__c.2. Inventory data should be related to the standard Account object.3. The Inventory__c object should inherit the same sharing rules as the Account object.4. Anytime an Account record is deleted in Salesforce. the related Inventory__c record(s) should be deleted as well.What type of relationship field should a data architect recommend in this scenario?",
      options: [
        "A. Lookup relationship field on Inventory__c, related to Account",
        "B. Indirect lookup relationship field on Account, related to Inventory__c",
        "C. Master-detail relationship field on Inventory__c, related to Account",
        "D. Master-detail relationship field on Account, related to Inventory__c",
      ],
      answer: "D",
      explanation: "",
      title: "Question 108",
    },
    {
      content:
        "Northern Trail Outfitters has implemented Salesforce for its sales associates nationwide. Senior management is concerned that the executive dashboards are not reliable for their real-time decision-making. On analysis, the team found the following issues with data entered inSalesforce:1. Information in certain records is incomplete.2. Incorrect entry in certain fields causes records to be excluded in report filters.3. Duplicate entries cause incorrect counts.Which three steps should a data architect recommend to address the issues? (Choose three.)",
      options: [
        "A. Explore third-party data providers to enrich and augment information entered in Salesforce.",
        "B. Build a sales data warehouse with purpose-built data marts for dashboards and senior management reporting.",
        "C. Design and implement data-quality dashboard to monitor and act on records that are incomplete or incorrect.",
        "D. Periodically export data to cleanse data and import them back into Salesforce for executive reports.",
        "E. Leverage Salesforce features, such as validation rules, to avoid incomplete and incorrect records.",
      ],
      answer: "A,C,E",
      explanation: "",
      title: "Question 109",
    },
    {
      content:
        "Northern Trail Outfitters (NTO) has been using Salesforce for Sales and Service for 10 years. For the past two years, the marketing group has noticed a rise from 0% to 35% in returned mail when sending mail using the contact information stored in Salesforce.Which solution should the data architect use to reduce the amount of returned mail?",
      options: [
        "A. Email all customers and ask them to verify their information and to call NTO if their address is incorrect.",
        "B. Delete contacts when the mail is returned to save postal costs for NTO.",
        "C. Have the sales team call all existing customers and ask to verify the contact details.",
        "D. Use a third-party data source to update the contact information in Salesforce.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 110",
    },
    {
      content:
        "Universal Containers (UC) is replacing a home grown CRM solution with Salesforce. UC has decided to migrate operational (open and active) records to Salesforce, while keeping historical records in legacy system. UC would like historical records to be available in Salesforce on an as needed basis.Which solution should a data architect recommend to meet business requirement?",
      options: [
        "A. Leverage real-time integration to pull records into Salesforce.",
        "B. Build a swivel chair solution to go into the legacy system and display records.",
        "C. Leverage mashup to display historical records in Salesforce.",
        "D. Bring all data in Salesforce, and delete it after a year.",
      ],
      answer: "C",
      explanation: "",
      title: "Question 111",
    },
    {
      content:
        "Universal Containers has 30 million case records. The Case object has 80 fields. Agents are reporting performance Issues and time-outs while running case reports in the Salesforce org.Which solution should a data architect recommend to improve reporting performance?",
      options: [
        "A. Contact Salesforce support to enable skinny table for cases.",
        "B. Build reports using custom Lightning components.",
        "C. Create a custom object to store aggregate data and run reports.",
        "D. Move data off of the platform and run reporting outside Salesforce, and give access to reports.",
      ],
      answer: "A",
      explanation: "",
      title: "Question 112",
    },
    {
      content:
        "A custom pricing engine for a Salesforce customer has to be decided by factors with the following hierarchy:1. State in which the customer is located2. City in which the customer is located if available3. Zip code in which the customer is located if available4. Changes to this information should have minimum code changeWhat should a data architect recommend to maintain this information for the custom pricing engine that is to be built in Salesforce?",
      options: [
        "A. Configure the pricing criteria in price books.",
        "B. Maintain required pricing criteria in custom metadata types.",
        "C. Assign the pricing criteria within custom pricing engine.",
        "D. Create a custom object to maintain the pricing criteria.",
      ],
      answer: "B",
      explanation: "",
      title: "Question 113",
    },
    {
      content:
        "A customer is operating in a highly regulated industry and is planning to implement Salesforce. The customer information maintained in Salesforce. includes the following:1. Personally Identifiable information (PII)2. IP restrictions on profiles organized by geographic location3. Financial records that need to be private and accessible only by the assigned sales associateEnterprise Security has mandated access to be restricted to users within a specific geography with detailed monitoring of user activity. Additionally, users should not be allowed to export information from Salesforce.Which three Salesforce Shield capabilities should a data architect recommend? (Choose three.)",
      options: [
        "A. Event monitoring to monitor all user activity.",
        "B. Encrypt sensitive customer information maintained in Salesforce.",
        "C. Prevent sales users access to customer PII information.",
        "D. Restrict access to Salesforce from users outside specific geography.",
        "E. Transaction Security policies to prevent export of Salesforce data.",
      ],
      answer: "B,D,E",
      explanation: "",
      title: "Question 114",
    },
    {
      content:
        "Universal Containers (UC) is transitioning from Classic to Lightning Experience.What does UC need to do to ensure users have access to its notes and attachments in Lightning Experience?",
      options: [
        "A. Manually upload Notes in Lightning Experience.",
        "B. Manually upload Attachments in Lightning Experience.",
        "C. Add Notes and Attachments Related Lists to Page Layouts in Lightning Experience.",
        "D. Migrate Notes and Attachments to Enhanced Notes and Piles using a migration tool.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 115",
    },
    {
      content:
        "Universal Containers has a Sales Cloud implementation for a sales team and an enterprise resource planning (ERP) as a customer master. Sales teams are complaining about duplicate account records and data quality issues with account data.Which two solutions should a data architect recommend to resolve the complaints? (Choose two.)",
      options: [
        "A. Build a nightly batch job to de-dupe data, and merge account records.",
        "B. Integrate Salesforce with ERP, and make ERP as system of truth.",
        "C. Build a nightly sync job from ERP to Salesforce.",
        "D. Implement a de-dupe solution and establish account ownership in Salesforce.",
      ],
      answer: "B,D",
      explanation: "",
      title: "Question 116",
    },
    {
      content:
        "Universal Containers (UC) has adopted Salesforce as its primary sales automation tool. UC has 100,000 customers with a growth rate of 10% a year. UC uses an on-premise web-based billing and invoice system that generates over 1 million invoices a year supporting a monthly billing cycle.The UC sales team needs to be able to pull up a customer record and view their account status, invoice history, and open opportunities without navigating outside of Salesforce.What should a data architect use to provide the sales team with the required functionality?",
      options: [
        "A. Create a visual force tab with the billing system encapsulated within an iframe.",
        "B. Create a custom object and migrate the last 12 months of invoice data into Salesforce so it can be displayed on the Account layout.",
        "C. Write an Apex callout and populate a related list to display on the account record.",
        "D. Create a mashup page that will present the billing system records within Salesforce.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 117",
    },
    {
      content:
        "Universal Containers (UC) is in the process of migrating legacy inventory data from an enterprise resource planning (ERP) system into Sales Cloud with the following requirements:1. Legacy inventory data will be stored in a custom child object called Inventory__c.2. Inventory data should be related to the standard Account object.3. The Inventory__c object should inherit the same sharing rules as the Account object.4. Anytime an Account record is deleted in Salesforce. the related Inventory__c record(s) should be deleted as well.What type of relationship field should a data architect recommend in this scenario?",
      options: [
        "A. Lookup relationship field on Inventory__c, related to Account",
        "B. Indirect lookup relationship field on Account, related to Inventory__c",
        "C. Master-detail relationship field on Inventory__c, related to Account",
        "D. Master-detail relationship field on Account, related to Inventory__c",
      ],
      answer: "D",
      explanation: "",
      title: "Question 118",
    },
    {
      content:
        "Northern Trail Outfitters has implemented Salesforce for its sales associates nationwide. Senior management is concerned that the executive dashboards are not reliable for their real-time decision-making. On analysis, the team found the following issues with data entered inSalesforce:1. Information in certain records is incomplete.2. Incorrect entry in certain fields causes records to be excluded in report filters.3. Duplicate entries cause incorrect counts.Which three steps should a data architect recommend to address the issues? (Choose three.)",
      options: [
        "A. Explore third-party data providers to enrich and augment information entered in Salesforce.",
        "B. Build a sales data warehouse with purpose-built data marts for dashboards and senior management reporting.",
        "C. Design and implement data-quality dashboard to monitor and act on records that are incomplete or incorrect.",
        "D. Periodically export data to cleanse data and import them back into Salesforce for executive reports.",
        "E. Leverage Salesforce features, such as validation rules, to avoid incomplete and incorrect records.",
      ],
      answer: "A,C,E",
      explanation: "",
      title: "Question 119",
    },
    {
      content:
        "Northern Trail Outfitters (NTO) has been using Salesforce for Sales and Service for 10 years. For the past two years, the marketing group has noticed a rise from 0% to 35% in returned mail when sending mail using the contact information stored in Salesforce.Which solution should the data architect use to reduce the amount of returned mail?",
      options: [
        "A. Email all customers and ask them to verify their information and to call NTO if their address is incorrect.",
        "B. Delete contacts when the mail is returned to save postal costs for NTO.",
        "C. Have the sales team call all existing customers and ask to verify the contact details.",
        "D. Use a third-party data source to update the contact information in Salesforce.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 120",
    },
  ],
});
