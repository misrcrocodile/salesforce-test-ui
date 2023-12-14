window.testContent = window.testContent || [];
var testId = "Salesforce.Platform-App-Builder";
var testName = "Salesforce.Platform-App-Builder";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "Certlibrary.Platform-App-Builder.v2023-11-29.q600",
  content: [
    {
      content:
        "Universal Containers manages internal projects by department using a custom object called Projects. Only employees in the project's respective department should have view access to all of the department's project records. If an employee changes job roles and moves to another department, the employee should no longer have access to the projects within their former department.Which two options will meet these requirements assuming the organization-wide default for Projects is set to Private? (Choose two.)",
      options: [
        "A. Create a criteria-based sharing rule using the Project's department that grants access to users by profiles.",
        "B. Create a criteria-based sharing rule using the Project's department that grants access to users by permission sets.",
        "C. Create a criteria-based sharing rule using the Project's department that grants access to users by roles.",
        "D. Create a criteria-based sharing rule using the Project's department that grants access to users by public groups.",
      ],
      answer: "C,D",
      explanation: "",
      title: "Question 1",
    },
    {
      content:
        "Universal Containers has a customer base where many customers have the same or similar company names.Which functionality should be configured to improve an end user's search experience? (Choose two.)",
      options: [
        "A. Update the account search layouts search filter fields.",
        "B. Update the account search layouts accounts tab columns displayed.",
        "C. Update the account search layouts search results columns displayed.",
        "D. Update the account search layouts list view filter settings.",
      ],
      answer: "B,C",
      explanation: "",
      title: "Question 2",
    },
    {
      content:
        "An app builder creates an Account validation rule on the Industry field that will throw an error if the length of the field is longer than 6 characters. Another app builder creates a workflow with a field update that sets the Industry field to Technology whenever the Billing City field is set to San Francisco.What will happen the next time a sales person saves an Account with a Billing City of San Francisco?",
      options: [
        "A. The record will save and the Industry field will change to Technology.",
        "B. The record will not save and no error message will be displayed.",
        "C. The record will not save the validation rule's error message will be displayed.",
        "D. The record will save but the Industry field will not change to Territory.",
      ],
      answer: "B",
      explanation: "",
      title: "Question 3",
    },
    {
      content: "What is a true statement when deleting a dashboard?",
      options: [
        "A. Deleting a dashboard also deletes the components within it. It does not delete the custom reports used by the components.",
        "B. Deleting a dashboard does not move the dashboard to the Recycle Bin and therefore the dashboard cannot be recovered.",
        "C. Deleting a dashboard also deletes the components within it as well as the custom reports used by the components.",
        "D. Deleting a dashboard requires a user to first edit the components to remove the underlying reports.",
      ],
      answer: "A",
      explanation: "",
      title: "Question 4",
    },
    {
      content:
        "A junction object has two Master-Detail relationships, a primary and a secondary master object.What happens to a junction object record when both associated master records are deleted?",
      options: [
        "A. The junction object record is permanently deleted and can't be restored.",
        "B. The delete operation cannot be performed on both master records.",
        "C. The delete operation is not allowed with Roll-up summary fields defined.",
        "D. The junction object records is deleted and placed in the recycle bin.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 5",
    },
    {
      content:
        "Universal Containers wants its Field Sales team to only see the accounts that they own. Separate North American and European marketing teams should only see accounts in their respective regions. The Inside Sales Team needs to see all accounts in Salesforce.How should an app builder accomplish this?",
      options: [
        "A. Set the Organization-Wide Default to Public for accounts. Create profiles for each Marketing Team, and create an Inside Sales Team role that is at the top of the Role Hierarchy.",
        'B. Set the Organization-Wide Default to Public for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team permission set with the "View All" setting for accounts.',
        'C. Set the Organization-Wide Default to Private for accounts. Create permission sets for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
        'D. Set the Organization-Wide Default to Private for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
      ],
      answer: "B",
      explanation: "",
      title: "Question 6",
    },
    {
      content:
        "The app builder has just created a Visual Workflow for the VP of Service.Which two Flow be accessed by users? (Choose two.)",
      options: [
        "A. Custom Button",
        "B. Quick Action",
        "C. Visual Workflow Launcher",
        "D. From a Process",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 7",
    },
    {
      content:
        "Which two metadata changes can be made directly in a production environment without deploying from a sandbox? (Choose two.)",
      options: [
        "A. Validation rules",
        "B. Apex Triggers",
        "C. Apex Classes",
        "D. Visualforce pages",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 8",
    },
    {
      content:
        "The Training team at Universal Containers uses a custom Training object to track their customer training sessions. An app builder needs to create a relationship between the Training object and the related Students' record.Which two statements are true when creating a Student Lookup field on the Training object? (Choose two.)",
      options: [
        "A. On Training record, the Student Lookup field can be made optional.",
        "B. On Student record, users can set up Roll-up summary field on Training records.",
        "C. On Training record, users can only delete Students, if they have access to it.",
        "D. Cross-object field updates between Training and Student records are not supported.",
      ],
      answer: "A,C",
      explanation: "",
      title: "Question 9",
    },
    {
      content:
        "An app builder would like to streamline the user experience by reflecting summarized calculations of specific fields on various objects.Which three field types could be used in roll-up summary fields to accomplish this? (Choose three.)",
      options: [
        "A. Checkbox",
        "B. Date",
        "C. Percent",
        "D. Time",
        "E. Currency",
      ],
      answer: "B,C,E",
      explanation: "",
      title: "Question 10",
    },
    {
      content:
        "Universal Containers manages internal projects by department using a custom object called Projects. Only employees in the project's respective department should have view access to all of the department's project records. If an employee changes job roles and moves to another department, the employee should no longer have access to the projects within their former department.Which two options will meet these requirements assuming the organization-wide default for Projects is set to Private? (Choose two.)",
      options: [
        "A. Create a criteria-based sharing rule using the Project's department that grants access to users by profiles.",
        "B. Create a criteria-based sharing rule using the Project's department that grants access to users by permission sets.",
        "C. Create a criteria-based sharing rule using the Project's department that grants access to users by roles.",
        "D. Create a criteria-based sharing rule using the Project's department that grants access to users by public groups.",
      ],
      answer: "C,D",
      explanation: "",
      title: "Question 11",
    },
    {
      content:
        "Universal Containers has a customer base where many customers have the same or similar company names.Which functionality should be configured to improve an end user's search experience? (Choose two.)",
      options: [
        "A. Update the account search layouts search filter fields.",
        "B. Update the account search layouts accounts tab columns displayed.",
        "C. Update the account search layouts search results columns displayed.",
        "D. Update the account search layouts list view filter settings.",
      ],
      answer: "B,C",
      explanation: "",
      title: "Question 12",
    },
    {
      content:
        "An app builder creates an Account validation rule on the Industry field that will throw an error if the length of the field is longer than 6 characters. Another app builder creates a workflow with a field update that sets the Industry field to Technology whenever the Billing City field is set to San Francisco.What will happen the next time a sales person saves an Account with a Billing City of San Francisco?",
      options: [
        "A. The record will save and the Industry field will change to Technology.",
        "B. The record will not save and no error message will be displayed.",
        "C. The record will not save the validation rule's error message will be displayed.",
        "D. The record will save but the Industry field will not change to Territory.",
      ],
      answer: "B",
      explanation: "",
      title: "Question 13",
    },
    {
      content: "What is a true statement when deleting a dashboard?",
      options: [
        "A. Deleting a dashboard also deletes the components within it. It does not delete the custom reports used by the components.",
        "B. Deleting a dashboard does not move the dashboard to the Recycle Bin and therefore the dashboard cannot be recovered.",
        "C. Deleting a dashboard also deletes the components within it as well as the custom reports used by the components.",
        "D. Deleting a dashboard requires a user to first edit the components to remove the underlying reports.",
      ],
      answer: "A",
      explanation: "",
      title: "Question 14",
    },
    {
      content:
        "A junction object has two Master-Detail relationships, a primary and a secondary master object.What happens to a junction object record when both associated master records are deleted?",
      options: [
        "A. The junction object record is permanently deleted and can't be restored.",
        "B. The delete operation cannot be performed on both master records.",
        "C. The delete operation is not allowed with Roll-up summary fields defined.",
        "D. The junction object records is deleted and placed in the recycle bin.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 15",
    },
    {
      content:
        "Universal Containers wants its Field Sales team to only see the accounts that they own. Separate North American and European marketing teams should only see accounts in their respective regions. The Inside Sales Team needs to see all accounts in Salesforce.How should an app builder accomplish this?",
      options: [
        "A. Set the Organization-Wide Default to Public for accounts. Create profiles for each Marketing Team, and create an Inside Sales Team role that is at the top of the Role Hierarchy.",
        'B. Set the Organization-Wide Default to Public for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team permission set with the "View All" setting for accounts.',
        'C. Set the Organization-Wide Default to Private for accounts. Create permission sets for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
        'D. Set the Organization-Wide Default to Private for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
      ],
      answer: "B",
      explanation: "",
      title: "Question 16",
    },
    {
      content:
        "The app builder has just created a Visual Workflow for the VP of Service.Which two Flow be accessed by users? (Choose two.)",
      options: [
        "A. Custom Button",
        "B. Quick Action",
        "C. Visual Workflow Launcher",
        "D. From a Process",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 17",
    },
    {
      content:
        "Which two metadata changes can be made directly in a production environment without deploying from a sandbox? (Choose two.)",
      options: [
        "A. Validation rules",
        "B. Apex Triggers",
        "C. Apex Classes",
        "D. Visualforce pages",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 18",
    },
    {
      content:
        "The Training team at Universal Containers uses a custom Training object to track their customer training sessions. An app builder needs to create a relationship between the Training object and the related Students' record.Which two statements are true when creating a Student Lookup field on the Training object? (Choose two.)",
      options: [
        "A. On Training record, the Student Lookup field can be made optional.",
        "B. On Student record, users can set up Roll-up summary field on Training records.",
        "C. On Training record, users can only delete Students, if they have access to it.",
        "D. Cross-object field updates between Training and Student records are not supported.",
      ],
      answer: "A,C",
      explanation: "",
      title: "Question 19",
    },
    {
      content:
        "An app builder would like to streamline the user experience by reflecting summarized calculations of specific fields on various objects.Which three field types could be used in roll-up summary fields to accomplish this? (Choose three.)",
      options: [
        "A. Checkbox",
        "B. Date",
        "C. Percent",
        "D. Time",
        "E. Currency",
      ],
      answer: "B,C,E",
      explanation: "",
      title: "Question 20",
    },
    {
      content:
        "Universal Containers manages internal projects by department using a custom object called Projects. Only employees in the project's respective department should have view access to all of the department's project records. If an employee changes job roles and moves to another department, the employee should no longer have access to the projects within their former department.Which two options will meet these requirements assuming the organization-wide default for Projects is set to Private? (Choose two.)",
      options: [
        "A. Create a criteria-based sharing rule using the Project's department that grants access to users by profiles.",
        "B. Create a criteria-based sharing rule using the Project's department that grants access to users by permission sets.",
        "C. Create a criteria-based sharing rule using the Project's department that grants access to users by roles.",
        "D. Create a criteria-based sharing rule using the Project's department that grants access to users by public groups.",
      ],
      answer: "C,D",
      explanation: "",
      title: "Question 21",
    },
    {
      content:
        "Universal Containers has a customer base where many customers have the same or similar company names.Which functionality should be configured to improve an end user's search experience? (Choose two.)",
      options: [
        "A. Update the account search layouts search filter fields.",
        "B. Update the account search layouts accounts tab columns displayed.",
        "C. Update the account search layouts search results columns displayed.",
        "D. Update the account search layouts list view filter settings.",
      ],
      answer: "B,C",
      explanation: "",
      title: "Question 22",
    },
    {
      content:
        "An app builder creates an Account validation rule on the Industry field that will throw an error if the length of the field is longer than 6 characters. Another app builder creates a workflow with a field update that sets the Industry field to Technology whenever the Billing City field is set to San Francisco.What will happen the next time a sales person saves an Account with a Billing City of San Francisco?",
      options: [
        "A. The record will save and the Industry field will change to Technology.",
        "B. The record will not save and no error message will be displayed.",
        "C. The record will not save the validation rule's error message will be displayed.",
        "D. The record will save but the Industry field will not change to Territory.",
      ],
      answer: "B",
      explanation: "",
      title: "Question 23",
    },
    {
      content: "What is a true statement when deleting a dashboard?",
      options: [
        "A. Deleting a dashboard also deletes the components within it. It does not delete the custom reports used by the components.",
        "B. Deleting a dashboard does not move the dashboard to the Recycle Bin and therefore the dashboard cannot be recovered.",
        "C. Deleting a dashboard also deletes the components within it as well as the custom reports used by the components.",
        "D. Deleting a dashboard requires a user to first edit the components to remove the underlying reports.",
      ],
      answer: "A",
      explanation: "",
      title: "Question 24",
    },
    {
      content:
        "A junction object has two Master-Detail relationships, a primary and a secondary master object.What happens to a junction object record when both associated master records are deleted?",
      options: [
        "A. The junction object record is permanently deleted and can't be restored.",
        "B. The delete operation cannot be performed on both master records.",
        "C. The delete operation is not allowed with Roll-up summary fields defined.",
        "D. The junction object records is deleted and placed in the recycle bin.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 25",
    },
    {
      content:
        "Universal Containers wants its Field Sales team to only see the accounts that they own. Separate North American and European marketing teams should only see accounts in their respective regions. The Inside Sales Team needs to see all accounts in Salesforce.How should an app builder accomplish this?",
      options: [
        "A. Set the Organization-Wide Default to Public for accounts. Create profiles for each Marketing Team, and create an Inside Sales Team role that is at the top of the Role Hierarchy.",
        'B. Set the Organization-Wide Default to Public for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team permission set with the "View All" setting for accounts.',
        'C. Set the Organization-Wide Default to Private for accounts. Create permission sets for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
        'D. Set the Organization-Wide Default to Private for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
      ],
      answer: "B",
      explanation: "",
      title: "Question 26",
    },
    {
      content:
        "The app builder has just created a Visual Workflow for the VP of Service.Which two Flow be accessed by users? (Choose two.)",
      options: [
        "A. Custom Button",
        "B. Quick Action",
        "C. Visual Workflow Launcher",
        "D. From a Process",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 27",
    },
    {
      content:
        "Which two metadata changes can be made directly in a production environment without deploying from a sandbox? (Choose two.)",
      options: [
        "A. Validation rules",
        "B. Apex Triggers",
        "C. Apex Classes",
        "D. Visualforce pages",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 28",
    },
    {
      content:
        "The Training team at Universal Containers uses a custom Training object to track their customer training sessions. An app builder needs to create a relationship between the Training object and the related Students' record.Which two statements are true when creating a Student Lookup field on the Training object? (Choose two.)",
      options: [
        "A. On Training record, the Student Lookup field can be made optional.",
        "B. On Student record, users can set up Roll-up summary field on Training records.",
        "C. On Training record, users can only delete Students, if they have access to it.",
        "D. Cross-object field updates between Training and Student records are not supported.",
      ],
      answer: "A,C",
      explanation: "",
      title: "Question 29",
    },
    {
      content:
        "An app builder would like to streamline the user experience by reflecting summarized calculations of specific fields on various objects.Which three field types could be used in roll-up summary fields to accomplish this? (Choose three.)",
      options: [
        "A. Checkbox",
        "B. Date",
        "C. Percent",
        "D. Time",
        "E. Currency",
      ],
      answer: "B,C,E",
      explanation: "",
      title: "Question 30",
    },
    {
      content:
        "Universal Containers manages internal projects by department using a custom object called Projects. Only employees in the project's respective department should have view access to all of the department's project records. If an employee changes job roles and moves to another department, the employee should no longer have access to the projects within their former department.Which two options will meet these requirements assuming the organization-wide default for Projects is set to Private? (Choose two.)",
      options: [
        "A. Create a criteria-based sharing rule using the Project's department that grants access to users by profiles.",
        "B. Create a criteria-based sharing rule using the Project's department that grants access to users by permission sets.",
        "C. Create a criteria-based sharing rule using the Project's department that grants access to users by roles.",
        "D. Create a criteria-based sharing rule using the Project's department that grants access to users by public groups.",
      ],
      answer: "C,D",
      explanation: "",
      title: "Question 31",
    },
    {
      content:
        "Universal Containers has a customer base where many customers have the same or similar company names.Which functionality should be configured to improve an end user's search experience? (Choose two.)",
      options: [
        "A. Update the account search layouts search filter fields.",
        "B. Update the account search layouts accounts tab columns displayed.",
        "C. Update the account search layouts search results columns displayed.",
        "D. Update the account search layouts list view filter settings.",
      ],
      answer: "B,C",
      explanation: "",
      title: "Question 32",
    },
    {
      content:
        "An app builder creates an Account validation rule on the Industry field that will throw an error if the length of the field is longer than 6 characters. Another app builder creates a workflow with a field update that sets the Industry field to Technology whenever the Billing City field is set to San Francisco.What will happen the next time a sales person saves an Account with a Billing City of San Francisco?",
      options: [
        "A. The record will save and the Industry field will change to Technology.",
        "B. The record will not save and no error message will be displayed.",
        "C. The record will not save the validation rule's error message will be displayed.",
        "D. The record will save but the Industry field will not change to Territory.",
      ],
      answer: "B",
      explanation: "",
      title: "Question 33",
    },
    {
      content: "What is a true statement when deleting a dashboard?",
      options: [
        "A. Deleting a dashboard also deletes the components within it. It does not delete the custom reports used by the components.",
        "B. Deleting a dashboard does not move the dashboard to the Recycle Bin and therefore the dashboard cannot be recovered.",
        "C. Deleting a dashboard also deletes the components within it as well as the custom reports used by the components.",
        "D. Deleting a dashboard requires a user to first edit the components to remove the underlying reports.",
      ],
      answer: "A",
      explanation: "",
      title: "Question 34",
    },
    {
      content:
        "A junction object has two Master-Detail relationships, a primary and a secondary master object.What happens to a junction object record when both associated master records are deleted?",
      options: [
        "A. The junction object record is permanently deleted and can't be restored.",
        "B. The delete operation cannot be performed on both master records.",
        "C. The delete operation is not allowed with Roll-up summary fields defined.",
        "D. The junction object records is deleted and placed in the recycle bin.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 35",
    },
    {
      content:
        "Universal Containers wants its Field Sales team to only see the accounts that they own. Separate North American and European marketing teams should only see accounts in their respective regions. The Inside Sales Team needs to see all accounts in Salesforce.How should an app builder accomplish this?",
      options: [
        "A. Set the Organization-Wide Default to Public for accounts. Create profiles for each Marketing Team, and create an Inside Sales Team role that is at the top of the Role Hierarchy.",
        'B. Set the Organization-Wide Default to Public for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team permission set with the "View All" setting for accounts.',
        'C. Set the Organization-Wide Default to Private for accounts. Create permission sets for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
        'D. Set the Organization-Wide Default to Private for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
      ],
      answer: "B",
      explanation: "",
      title: "Question 36",
    },
    {
      content:
        "The app builder has just created a Visual Workflow for the VP of Service.Which two Flow be accessed by users? (Choose two.)",
      options: [
        "A. Custom Button",
        "B. Quick Action",
        "C. Visual Workflow Launcher",
        "D. From a Process",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 37",
    },
    {
      content:
        "Which two metadata changes can be made directly in a production environment without deploying from a sandbox? (Choose two.)",
      options: [
        "A. Validation rules",
        "B. Apex Triggers",
        "C. Apex Classes",
        "D. Visualforce pages",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 38",
    },
    {
      content:
        "The Training team at Universal Containers uses a custom Training object to track their customer training sessions. An app builder needs to create a relationship between the Training object and the related Students' record.Which two statements are true when creating a Student Lookup field on the Training object? (Choose two.)",
      options: [
        "A. On Training record, the Student Lookup field can be made optional.",
        "B. On Student record, users can set up Roll-up summary field on Training records.",
        "C. On Training record, users can only delete Students, if they have access to it.",
        "D. Cross-object field updates between Training and Student records are not supported.",
      ],
      answer: "A,C",
      explanation: "",
      title: "Question 39",
    },
    {
      content:
        "An app builder would like to streamline the user experience by reflecting summarized calculations of specific fields on various objects.Which three field types could be used in roll-up summary fields to accomplish this? (Choose three.)",
      options: [
        "A. Checkbox",
        "B. Date",
        "C. Percent",
        "D. Time",
        "E. Currency",
      ],
      answer: "B,C,E",
      explanation: "",
      title: "Question 40",
    },
    {
      content:
        "Universal Containers manages internal projects by department using a custom object called Projects. Only employees in the project's respective department should have view access to all of the department's project records. If an employee changes job roles and moves to another department, the employee should no longer have access to the projects within their former department.Which two options will meet these requirements assuming the organization-wide default for Projects is set to Private? (Choose two.)",
      options: [
        "A. Create a criteria-based sharing rule using the Project's department that grants access to users by profiles.",
        "B. Create a criteria-based sharing rule using the Project's department that grants access to users by permission sets.",
        "C. Create a criteria-based sharing rule using the Project's department that grants access to users by roles.",
        "D. Create a criteria-based sharing rule using the Project's department that grants access to users by public groups.",
      ],
      answer: "C,D",
      explanation: "",
      title: "Question 41",
    },
    {
      content:
        "Universal Containers has a customer base where many customers have the same or similar company names.Which functionality should be configured to improve an end user's search experience? (Choose two.)",
      options: [
        "A. Update the account search layouts search filter fields.",
        "B. Update the account search layouts accounts tab columns displayed.",
        "C. Update the account search layouts search results columns displayed.",
        "D. Update the account search layouts list view filter settings.",
      ],
      answer: "B,C",
      explanation: "",
      title: "Question 42",
    },
    {
      content:
        "An app builder creates an Account validation rule on the Industry field that will throw an error if the length of the field is longer than 6 characters. Another app builder creates a workflow with a field update that sets the Industry field to Technology whenever the Billing City field is set to San Francisco.What will happen the next time a sales person saves an Account with a Billing City of San Francisco?",
      options: [
        "A. The record will save and the Industry field will change to Technology.",
        "B. The record will not save and no error message will be displayed.",
        "C. The record will not save the validation rule's error message will be displayed.",
        "D. The record will save but the Industry field will not change to Territory.",
      ],
      answer: "B",
      explanation: "",
      title: "Question 43",
    },
    {
      content: "What is a true statement when deleting a dashboard?",
      options: [
        "A. Deleting a dashboard also deletes the components within it. It does not delete the custom reports used by the components.",
        "B. Deleting a dashboard does not move the dashboard to the Recycle Bin and therefore the dashboard cannot be recovered.",
        "C. Deleting a dashboard also deletes the components within it as well as the custom reports used by the components.",
        "D. Deleting a dashboard requires a user to first edit the components to remove the underlying reports.",
      ],
      answer: "A",
      explanation: "",
      title: "Question 44",
    },
    {
      content:
        "A junction object has two Master-Detail relationships, a primary and a secondary master object.What happens to a junction object record when both associated master records are deleted?",
      options: [
        "A. The junction object record is permanently deleted and can't be restored.",
        "B. The delete operation cannot be performed on both master records.",
        "C. The delete operation is not allowed with Roll-up summary fields defined.",
        "D. The junction object records is deleted and placed in the recycle bin.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 45",
    },
    {
      content:
        "Universal Containers wants its Field Sales team to only see the accounts that they own. Separate North American and European marketing teams should only see accounts in their respective regions. The Inside Sales Team needs to see all accounts in Salesforce.How should an app builder accomplish this?",
      options: [
        "A. Set the Organization-Wide Default to Public for accounts. Create profiles for each Marketing Team, and create an Inside Sales Team role that is at the top of the Role Hierarchy.",
        'B. Set the Organization-Wide Default to Public for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team permission set with the "View All" setting for accounts.',
        'C. Set the Organization-Wide Default to Private for accounts. Create permission sets for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
        'D. Set the Organization-Wide Default to Private for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
      ],
      answer: "B",
      explanation: "",
      title: "Question 46",
    },
    {
      content:
        "The app builder has just created a Visual Workflow for the VP of Service.Which two Flow be accessed by users? (Choose two.)",
      options: [
        "A. Custom Button",
        "B. Quick Action",
        "C. Visual Workflow Launcher",
        "D. From a Process",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 47",
    },
    {
      content:
        "Which two metadata changes can be made directly in a production environment without deploying from a sandbox? (Choose two.)",
      options: [
        "A. Validation rules",
        "B. Apex Triggers",
        "C. Apex Classes",
        "D. Visualforce pages",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 48",
    },
    {
      content:
        "The Training team at Universal Containers uses a custom Training object to track their customer training sessions. An app builder needs to create a relationship between the Training object and the related Students' record.Which two statements are true when creating a Student Lookup field on the Training object? (Choose two.)",
      options: [
        "A. On Training record, the Student Lookup field can be made optional.",
        "B. On Student record, users can set up Roll-up summary field on Training records.",
        "C. On Training record, users can only delete Students, if they have access to it.",
        "D. Cross-object field updates between Training and Student records are not supported.",
      ],
      answer: "A,C",
      explanation: "",
      title: "Question 49",
    },
    {
      content:
        "An app builder would like to streamline the user experience by reflecting summarized calculations of specific fields on various objects.Which three field types could be used in roll-up summary fields to accomplish this? (Choose three.)",
      options: [
        "A. Checkbox",
        "B. Date",
        "C. Percent",
        "D. Time",
        "E. Currency",
      ],
      answer: "B,C,E",
      explanation: "",
      title: "Question 50",
    },
    {
      content:
        "Universal Containers manages internal projects by department using a custom object called Projects. Only employees in the project's respective department should have view access to all of the department's project records. If an employee changes job roles and moves to another department, the employee should no longer have access to the projects within their former department.Which two options will meet these requirements assuming the organization-wide default for Projects is set to Private? (Choose two.)",
      options: [
        "A. Create a criteria-based sharing rule using the Project's department that grants access to users by profiles.",
        "B. Create a criteria-based sharing rule using the Project's department that grants access to users by permission sets.",
        "C. Create a criteria-based sharing rule using the Project's department that grants access to users by roles.",
        "D. Create a criteria-based sharing rule using the Project's department that grants access to users by public groups.",
      ],
      answer: "C,D",
      explanation: "",
      title: "Question 51",
    },
    {
      content:
        "Universal Containers has a customer base where many customers have the same or similar company names.Which functionality should be configured to improve an end user's search experience? (Choose two.)",
      options: [
        "A. Update the account search layouts search filter fields.",
        "B. Update the account search layouts accounts tab columns displayed.",
        "C. Update the account search layouts search results columns displayed.",
        "D. Update the account search layouts list view filter settings.",
      ],
      answer: "B,C",
      explanation: "",
      title: "Question 52",
    },
    {
      content:
        "An app builder creates an Account validation rule on the Industry field that will throw an error if the length of the field is longer than 6 characters. Another app builder creates a workflow with a field update that sets the Industry field to Technology whenever the Billing City field is set to San Francisco.What will happen the next time a sales person saves an Account with a Billing City of San Francisco?",
      options: [
        "A. The record will save and the Industry field will change to Technology.",
        "B. The record will not save and no error message will be displayed.",
        "C. The record will not save the validation rule's error message will be displayed.",
        "D. The record will save but the Industry field will not change to Territory.",
      ],
      answer: "B",
      explanation: "",
      title: "Question 53",
    },
    {
      content: "What is a true statement when deleting a dashboard?",
      options: [
        "A. Deleting a dashboard also deletes the components within it. It does not delete the custom reports used by the components.",
        "B. Deleting a dashboard does not move the dashboard to the Recycle Bin and therefore the dashboard cannot be recovered.",
        "C. Deleting a dashboard also deletes the components within it as well as the custom reports used by the components.",
        "D. Deleting a dashboard requires a user to first edit the components to remove the underlying reports.",
      ],
      answer: "A",
      explanation: "",
      title: "Question 54",
    },
    {
      content:
        "A junction object has two Master-Detail relationships, a primary and a secondary master object.What happens to a junction object record when both associated master records are deleted?",
      options: [
        "A. The junction object record is permanently deleted and can't be restored.",
        "B. The delete operation cannot be performed on both master records.",
        "C. The delete operation is not allowed with Roll-up summary fields defined.",
        "D. The junction object records is deleted and placed in the recycle bin.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 55",
    },
    {
      content:
        "Universal Containers wants its Field Sales team to only see the accounts that they own. Separate North American and European marketing teams should only see accounts in their respective regions. The Inside Sales Team needs to see all accounts in Salesforce.How should an app builder accomplish this?",
      options: [
        "A. Set the Organization-Wide Default to Public for accounts. Create profiles for each Marketing Team, and create an Inside Sales Team role that is at the top of the Role Hierarchy.",
        'B. Set the Organization-Wide Default to Public for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team permission set with the "View All" setting for accounts.',
        'C. Set the Organization-Wide Default to Private for accounts. Create permission sets for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
        'D. Set the Organization-Wide Default to Private for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
      ],
      answer: "B",
      explanation: "",
      title: "Question 56",
    },
    {
      content:
        "The app builder has just created a Visual Workflow for the VP of Service.Which two Flow be accessed by users? (Choose two.)",
      options: [
        "A. Custom Button",
        "B. Quick Action",
        "C. Visual Workflow Launcher",
        "D. From a Process",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 57",
    },
    {
      content:
        "Which two metadata changes can be made directly in a production environment without deploying from a sandbox? (Choose two.)",
      options: [
        "A. Validation rules",
        "B. Apex Triggers",
        "C. Apex Classes",
        "D. Visualforce pages",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 58",
    },
    {
      content:
        "The Training team at Universal Containers uses a custom Training object to track their customer training sessions. An app builder needs to create a relationship between the Training object and the related Students' record.Which two statements are true when creating a Student Lookup field on the Training object? (Choose two.)",
      options: [
        "A. On Training record, the Student Lookup field can be made optional.",
        "B. On Student record, users can set up Roll-up summary field on Training records.",
        "C. On Training record, users can only delete Students, if they have access to it.",
        "D. Cross-object field updates between Training and Student records are not supported.",
      ],
      answer: "A,C",
      explanation: "",
      title: "Question 59",
    },
    {
      content:
        "An app builder would like to streamline the user experience by reflecting summarized calculations of specific fields on various objects.Which three field types could be used in roll-up summary fields to accomplish this? (Choose three.)",
      options: [
        "A. Checkbox",
        "B. Date",
        "C. Percent",
        "D. Time",
        "E. Currency",
      ],
      answer: "B,C,E",
      explanation: "",
      title: "Question 60",
    },
    {
      content:
        "Universal Containers manages internal projects by department using a custom object called Projects. Only employees in the project's respective department should have view access to all of the department's project records. If an employee changes job roles and moves to another department, the employee should no longer have access to the projects within their former department.Which two options will meet these requirements assuming the organization-wide default for Projects is set to Private? (Choose two.)",
      options: [
        "A. Create a criteria-based sharing rule using the Project's department that grants access to users by profiles.",
        "B. Create a criteria-based sharing rule using the Project's department that grants access to users by permission sets.",
        "C. Create a criteria-based sharing rule using the Project's department that grants access to users by roles.",
        "D. Create a criteria-based sharing rule using the Project's department that grants access to users by public groups.",
      ],
      answer: "C,D",
      explanation: "",
      title: "Question 61",
    },
    {
      content:
        "Universal Containers has a customer base where many customers have the same or similar company names.Which functionality should be configured to improve an end user's search experience? (Choose two.)",
      options: [
        "A. Update the account search layouts search filter fields.",
        "B. Update the account search layouts accounts tab columns displayed.",
        "C. Update the account search layouts search results columns displayed.",
        "D. Update the account search layouts list view filter settings.",
      ],
      answer: "B,C",
      explanation: "",
      title: "Question 62",
    },
    {
      content:
        "An app builder creates an Account validation rule on the Industry field that will throw an error if the length of the field is longer than 6 characters. Another app builder creates a workflow with a field update that sets the Industry field to Technology whenever the Billing City field is set to San Francisco.What will happen the next time a sales person saves an Account with a Billing City of San Francisco?",
      options: [
        "A. The record will save and the Industry field will change to Technology.",
        "B. The record will not save and no error message will be displayed.",
        "C. The record will not save the validation rule's error message will be displayed.",
        "D. The record will save but the Industry field will not change to Territory.",
      ],
      answer: "B",
      explanation: "",
      title: "Question 63",
    },
    {
      content: "What is a true statement when deleting a dashboard?",
      options: [
        "A. Deleting a dashboard also deletes the components within it. It does not delete the custom reports used by the components.",
        "B. Deleting a dashboard does not move the dashboard to the Recycle Bin and therefore the dashboard cannot be recovered.",
        "C. Deleting a dashboard also deletes the components within it as well as the custom reports used by the components.",
        "D. Deleting a dashboard requires a user to first edit the components to remove the underlying reports.",
      ],
      answer: "A",
      explanation: "",
      title: "Question 64",
    },
    {
      content:
        "A junction object has two Master-Detail relationships, a primary and a secondary master object.What happens to a junction object record when both associated master records are deleted?",
      options: [
        "A. The junction object record is permanently deleted and can't be restored.",
        "B. The delete operation cannot be performed on both master records.",
        "C. The delete operation is not allowed with Roll-up summary fields defined.",
        "D. The junction object records is deleted and placed in the recycle bin.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 65",
    },
    {
      content:
        "Universal Containers wants its Field Sales team to only see the accounts that they own. Separate North American and European marketing teams should only see accounts in their respective regions. The Inside Sales Team needs to see all accounts in Salesforce.How should an app builder accomplish this?",
      options: [
        "A. Set the Organization-Wide Default to Public for accounts. Create profiles for each Marketing Team, and create an Inside Sales Team role that is at the top of the Role Hierarchy.",
        'B. Set the Organization-Wide Default to Public for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team permission set with the "View All" setting for accounts.',
        'C. Set the Organization-Wide Default to Private for accounts. Create permission sets for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
        'D. Set the Organization-Wide Default to Private for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
      ],
      answer: "B",
      explanation: "",
      title: "Question 66",
    },
    {
      content:
        "The app builder has just created a Visual Workflow for the VP of Service.Which two Flow be accessed by users? (Choose two.)",
      options: [
        "A. Custom Button",
        "B. Quick Action",
        "C. Visual Workflow Launcher",
        "D. From a Process",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 67",
    },
    {
      content:
        "Which two metadata changes can be made directly in a production environment without deploying from a sandbox? (Choose two.)",
      options: [
        "A. Validation rules",
        "B. Apex Triggers",
        "C. Apex Classes",
        "D. Visualforce pages",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 68",
    },
    {
      content:
        "The Training team at Universal Containers uses a custom Training object to track their customer training sessions. An app builder needs to create a relationship between the Training object and the related Students' record.Which two statements are true when creating a Student Lookup field on the Training object? (Choose two.)",
      options: [
        "A. On Training record, the Student Lookup field can be made optional.",
        "B. On Student record, users can set up Roll-up summary field on Training records.",
        "C. On Training record, users can only delete Students, if they have access to it.",
        "D. Cross-object field updates between Training and Student records are not supported.",
      ],
      answer: "A,C",
      explanation: "",
      title: "Question 69",
    },
    {
      content:
        "An app builder would like to streamline the user experience by reflecting summarized calculations of specific fields on various objects.Which three field types could be used in roll-up summary fields to accomplish this? (Choose three.)",
      options: [
        "A. Checkbox",
        "B. Date",
        "C. Percent",
        "D. Time",
        "E. Currency",
      ],
      answer: "B,C,E",
      explanation: "",
      title: "Question 70",
    },
    {
      content:
        "Universal Containers manages internal projects by department using a custom object called Projects. Only employees in the project's respective department should have view access to all of the department's project records. If an employee changes job roles and moves to another department, the employee should no longer have access to the projects within their former department.Which two options will meet these requirements assuming the organization-wide default for Projects is set to Private? (Choose two.)",
      options: [
        "A. Create a criteria-based sharing rule using the Project's department that grants access to users by profiles.",
        "B. Create a criteria-based sharing rule using the Project's department that grants access to users by permission sets.",
        "C. Create a criteria-based sharing rule using the Project's department that grants access to users by roles.",
        "D. Create a criteria-based sharing rule using the Project's department that grants access to users by public groups.",
      ],
      answer: "C,D",
      explanation: "",
      title: "Question 71",
    },
    {
      content:
        "Universal Containers has a customer base where many customers have the same or similar company names.Which functionality should be configured to improve an end user's search experience? (Choose two.)",
      options: [
        "A. Update the account search layouts search filter fields.",
        "B. Update the account search layouts accounts tab columns displayed.",
        "C. Update the account search layouts search results columns displayed.",
        "D. Update the account search layouts list view filter settings.",
      ],
      answer: "B,C",
      explanation: "",
      title: "Question 72",
    },
    {
      content:
        "An app builder creates an Account validation rule on the Industry field that will throw an error if the length of the field is longer than 6 characters. Another app builder creates a workflow with a field update that sets the Industry field to Technology whenever the Billing City field is set to San Francisco.What will happen the next time a sales person saves an Account with a Billing City of San Francisco?",
      options: [
        "A. The record will save and the Industry field will change to Technology.",
        "B. The record will not save and no error message will be displayed.",
        "C. The record will not save the validation rule's error message will be displayed.",
        "D. The record will save but the Industry field will not change to Territory.",
      ],
      answer: "B",
      explanation: "",
      title: "Question 73",
    },
    {
      content: "What is a true statement when deleting a dashboard?",
      options: [
        "A. Deleting a dashboard also deletes the components within it. It does not delete the custom reports used by the components.",
        "B. Deleting a dashboard does not move the dashboard to the Recycle Bin and therefore the dashboard cannot be recovered.",
        "C. Deleting a dashboard also deletes the components within it as well as the custom reports used by the components.",
        "D. Deleting a dashboard requires a user to first edit the components to remove the underlying reports.",
      ],
      answer: "A",
      explanation: "",
      title: "Question 74",
    },
    {
      content:
        "A junction object has two Master-Detail relationships, a primary and a secondary master object.What happens to a junction object record when both associated master records are deleted?",
      options: [
        "A. The junction object record is permanently deleted and can't be restored.",
        "B. The delete operation cannot be performed on both master records.",
        "C. The delete operation is not allowed with Roll-up summary fields defined.",
        "D. The junction object records is deleted and placed in the recycle bin.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 75",
    },
    {
      content:
        "Universal Containers wants its Field Sales team to only see the accounts that they own. Separate North American and European marketing teams should only see accounts in their respective regions. The Inside Sales Team needs to see all accounts in Salesforce.How should an app builder accomplish this?",
      options: [
        "A. Set the Organization-Wide Default to Public for accounts. Create profiles for each Marketing Team, and create an Inside Sales Team role that is at the top of the Role Hierarchy.",
        'B. Set the Organization-Wide Default to Public for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team permission set with the "View All" setting for accounts.',
        'C. Set the Organization-Wide Default to Private for accounts. Create permission sets for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
        'D. Set the Organization-Wide Default to Private for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
      ],
      answer: "B",
      explanation: "",
      title: "Question 76",
    },
    {
      content:
        "The app builder has just created a Visual Workflow for the VP of Service.Which two Flow be accessed by users? (Choose two.)",
      options: [
        "A. Custom Button",
        "B. Quick Action",
        "C. Visual Workflow Launcher",
        "D. From a Process",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 77",
    },
    {
      content:
        "Which two metadata changes can be made directly in a production environment without deploying from a sandbox? (Choose two.)",
      options: [
        "A. Validation rules",
        "B. Apex Triggers",
        "C. Apex Classes",
        "D. Visualforce pages",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 78",
    },
    {
      content:
        "The Training team at Universal Containers uses a custom Training object to track their customer training sessions. An app builder needs to create a relationship between the Training object and the related Students' record.Which two statements are true when creating a Student Lookup field on the Training object? (Choose two.)",
      options: [
        "A. On Training record, the Student Lookup field can be made optional.",
        "B. On Student record, users can set up Roll-up summary field on Training records.",
        "C. On Training record, users can only delete Students, if they have access to it.",
        "D. Cross-object field updates between Training and Student records are not supported.",
      ],
      answer: "A,C",
      explanation: "",
      title: "Question 79",
    },
    {
      content:
        "An app builder would like to streamline the user experience by reflecting summarized calculations of specific fields on various objects.Which three field types could be used in roll-up summary fields to accomplish this? (Choose three.)",
      options: [
        "A. Checkbox",
        "B. Date",
        "C. Percent",
        "D. Time",
        "E. Currency",
      ],
      answer: "B,C,E",
      explanation: "",
      title: "Question 80",
    },
    {
      content:
        "Universal Containers manages internal projects by department using a custom object called Projects. Only employees in the project's respective department should have view access to all of the department's project records. If an employee changes job roles and moves to another department, the employee should no longer have access to the projects within their former department.Which two options will meet these requirements assuming the organization-wide default for Projects is set to Private? (Choose two.)",
      options: [
        "A. Create a criteria-based sharing rule using the Project's department that grants access to users by profiles.",
        "B. Create a criteria-based sharing rule using the Project's department that grants access to users by permission sets.",
        "C. Create a criteria-based sharing rule using the Project's department that grants access to users by roles.",
        "D. Create a criteria-based sharing rule using the Project's department that grants access to users by public groups.",
      ],
      answer: "C,D",
      explanation: "",
      title: "Question 81",
    },
    {
      content:
        "Universal Containers has a customer base where many customers have the same or similar company names.Which functionality should be configured to improve an end user's search experience? (Choose two.)",
      options: [
        "A. Update the account search layouts search filter fields.",
        "B. Update the account search layouts accounts tab columns displayed.",
        "C. Update the account search layouts search results columns displayed.",
        "D. Update the account search layouts list view filter settings.",
      ],
      answer: "B,C",
      explanation: "",
      title: "Question 82",
    },
    {
      content:
        "An app builder creates an Account validation rule on the Industry field that will throw an error if the length of the field is longer than 6 characters. Another app builder creates a workflow with a field update that sets the Industry field to Technology whenever the Billing City field is set to San Francisco.What will happen the next time a sales person saves an Account with a Billing City of San Francisco?",
      options: [
        "A. The record will save and the Industry field will change to Technology.",
        "B. The record will not save and no error message will be displayed.",
        "C. The record will not save the validation rule's error message will be displayed.",
        "D. The record will save but the Industry field will not change to Territory.",
      ],
      answer: "B",
      explanation: "",
      title: "Question 83",
    },
    {
      content: "What is a true statement when deleting a dashboard?",
      options: [
        "A. Deleting a dashboard also deletes the components within it. It does not delete the custom reports used by the components.",
        "B. Deleting a dashboard does not move the dashboard to the Recycle Bin and therefore the dashboard cannot be recovered.",
        "C. Deleting a dashboard also deletes the components within it as well as the custom reports used by the components.",
        "D. Deleting a dashboard requires a user to first edit the components to remove the underlying reports.",
      ],
      answer: "A",
      explanation: "",
      title: "Question 84",
    },
    {
      content:
        "A junction object has two Master-Detail relationships, a primary and a secondary master object.What happens to a junction object record when both associated master records are deleted?",
      options: [
        "A. The junction object record is permanently deleted and can't be restored.",
        "B. The delete operation cannot be performed on both master records.",
        "C. The delete operation is not allowed with Roll-up summary fields defined.",
        "D. The junction object records is deleted and placed in the recycle bin.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 85",
    },
    {
      content:
        "Universal Containers wants its Field Sales team to only see the accounts that they own. Separate North American and European marketing teams should only see accounts in their respective regions. The Inside Sales Team needs to see all accounts in Salesforce.How should an app builder accomplish this?",
      options: [
        "A. Set the Organization-Wide Default to Public for accounts. Create profiles for each Marketing Team, and create an Inside Sales Team role that is at the top of the Role Hierarchy.",
        'B. Set the Organization-Wide Default to Public for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team permission set with the "View All" setting for accounts.',
        'C. Set the Organization-Wide Default to Private for accounts. Create permission sets for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
        'D. Set the Organization-Wide Default to Private for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
      ],
      answer: "B",
      explanation: "",
      title: "Question 86",
    },
    {
      content:
        "The app builder has just created a Visual Workflow for the VP of Service.Which two Flow be accessed by users? (Choose two.)",
      options: [
        "A. Custom Button",
        "B. Quick Action",
        "C. Visual Workflow Launcher",
        "D. From a Process",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 87",
    },
    {
      content:
        "Which two metadata changes can be made directly in a production environment without deploying from a sandbox? (Choose two.)",
      options: [
        "A. Validation rules",
        "B. Apex Triggers",
        "C. Apex Classes",
        "D. Visualforce pages",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 88",
    },
    {
      content:
        "The Training team at Universal Containers uses a custom Training object to track their customer training sessions. An app builder needs to create a relationship between the Training object and the related Students' record.Which two statements are true when creating a Student Lookup field on the Training object? (Choose two.)",
      options: [
        "A. On Training record, the Student Lookup field can be made optional.",
        "B. On Student record, users can set up Roll-up summary field on Training records.",
        "C. On Training record, users can only delete Students, if they have access to it.",
        "D. Cross-object field updates between Training and Student records are not supported.",
      ],
      answer: "A,C",
      explanation: "",
      title: "Question 89",
    },
    {
      content:
        "An app builder would like to streamline the user experience by reflecting summarized calculations of specific fields on various objects.Which three field types could be used in roll-up summary fields to accomplish this? (Choose three.)",
      options: [
        "A. Checkbox",
        "B. Date",
        "C. Percent",
        "D. Time",
        "E. Currency",
      ],
      answer: "B,C,E",
      explanation: "",
      title: "Question 90",
    },
    {
      content:
        "Universal Containers manages internal projects by department using a custom object called Projects. Only employees in the project's respective department should have view access to all of the department's project records. If an employee changes job roles and moves to another department, the employee should no longer have access to the projects within their former department.Which two options will meet these requirements assuming the organization-wide default for Projects is set to Private? (Choose two.)",
      options: [
        "A. Create a criteria-based sharing rule using the Project's department that grants access to users by profiles.",
        "B. Create a criteria-based sharing rule using the Project's department that grants access to users by permission sets.",
        "C. Create a criteria-based sharing rule using the Project's department that grants access to users by roles.",
        "D. Create a criteria-based sharing rule using the Project's department that grants access to users by public groups.",
      ],
      answer: "C,D",
      explanation: "",
      title: "Question 91",
    },
    {
      content:
        "Universal Containers has a customer base where many customers have the same or similar company names.Which functionality should be configured to improve an end user's search experience? (Choose two.)",
      options: [
        "A. Update the account search layouts search filter fields.",
        "B. Update the account search layouts accounts tab columns displayed.",
        "C. Update the account search layouts search results columns displayed.",
        "D. Update the account search layouts list view filter settings.",
      ],
      answer: "B,C",
      explanation: "",
      title: "Question 92",
    },
    {
      content:
        "An app builder creates an Account validation rule on the Industry field that will throw an error if the length of the field is longer than 6 characters. Another app builder creates a workflow with a field update that sets the Industry field to Technology whenever the Billing City field is set to San Francisco.What will happen the next time a sales person saves an Account with a Billing City of San Francisco?",
      options: [
        "A. The record will save and the Industry field will change to Technology.",
        "B. The record will not save and no error message will be displayed.",
        "C. The record will not save the validation rule's error message will be displayed.",
        "D. The record will save but the Industry field will not change to Territory.",
      ],
      answer: "B",
      explanation: "",
      title: "Question 93",
    },
    {
      content: "What is a true statement when deleting a dashboard?",
      options: [
        "A. Deleting a dashboard also deletes the components within it. It does not delete the custom reports used by the components.",
        "B. Deleting a dashboard does not move the dashboard to the Recycle Bin and therefore the dashboard cannot be recovered.",
        "C. Deleting a dashboard also deletes the components within it as well as the custom reports used by the components.",
        "D. Deleting a dashboard requires a user to first edit the components to remove the underlying reports.",
      ],
      answer: "A",
      explanation: "",
      title: "Question 94",
    },
    {
      content:
        "A junction object has two Master-Detail relationships, a primary and a secondary master object.What happens to a junction object record when both associated master records are deleted?",
      options: [
        "A. The junction object record is permanently deleted and can't be restored.",
        "B. The delete operation cannot be performed on both master records.",
        "C. The delete operation is not allowed with Roll-up summary fields defined.",
        "D. The junction object records is deleted and placed in the recycle bin.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 95",
    },
    {
      content:
        "Universal Containers wants its Field Sales team to only see the accounts that they own. Separate North American and European marketing teams should only see accounts in their respective regions. The Inside Sales Team needs to see all accounts in Salesforce.How should an app builder accomplish this?",
      options: [
        "A. Set the Organization-Wide Default to Public for accounts. Create profiles for each Marketing Team, and create an Inside Sales Team role that is at the top of the Role Hierarchy.",
        'B. Set the Organization-Wide Default to Public for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team permission set with the "View All" setting for accounts.',
        'C. Set the Organization-Wide Default to Private for accounts. Create permission sets for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
        'D. Set the Organization-Wide Default to Private for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
      ],
      answer: "B",
      explanation: "",
      title: "Question 96",
    },
    {
      content:
        "The app builder has just created a Visual Workflow for the VP of Service.Which two Flow be accessed by users? (Choose two.)",
      options: [
        "A. Custom Button",
        "B. Quick Action",
        "C. Visual Workflow Launcher",
        "D. From a Process",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 97",
    },
    {
      content:
        "Which two metadata changes can be made directly in a production environment without deploying from a sandbox? (Choose two.)",
      options: [
        "A. Validation rules",
        "B. Apex Triggers",
        "C. Apex Classes",
        "D. Visualforce pages",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 98",
    },
    {
      content:
        "The Training team at Universal Containers uses a custom Training object to track their customer training sessions. An app builder needs to create a relationship between the Training object and the related Students' record.Which two statements are true when creating a Student Lookup field on the Training object? (Choose two.)",
      options: [
        "A. On Training record, the Student Lookup field can be made optional.",
        "B. On Student record, users can set up Roll-up summary field on Training records.",
        "C. On Training record, users can only delete Students, if they have access to it.",
        "D. Cross-object field updates between Training and Student records are not supported.",
      ],
      answer: "A,C",
      explanation: "",
      title: "Question 99",
    },
    {
      content:
        "An app builder would like to streamline the user experience by reflecting summarized calculations of specific fields on various objects.Which three field types could be used in roll-up summary fields to accomplish this? (Choose three.)",
      options: [
        "A. Checkbox",
        "B. Date",
        "C. Percent",
        "D. Time",
        "E. Currency",
      ],
      answer: "B,C,E",
      explanation: "",
      title: "Question 100",
    },
    {
      content:
        "Universal Containers manages internal projects by department using a custom object called Projects. Only employees in the project's respective department should have view access to all of the department's project records. If an employee changes job roles and moves to another department, the employee should no longer have access to the projects within their former department.Which two options will meet these requirements assuming the organization-wide default for Projects is set to Private? (Choose two.)",
      options: [
        "A. Create a criteria-based sharing rule using the Project's department that grants access to users by profiles.",
        "B. Create a criteria-based sharing rule using the Project's department that grants access to users by permission sets.",
        "C. Create a criteria-based sharing rule using the Project's department that grants access to users by roles.",
        "D. Create a criteria-based sharing rule using the Project's department that grants access to users by public groups.",
      ],
      answer: "C,D",
      explanation: "",
      title: "Question 101",
    },
    {
      content:
        "Universal Containers has a customer base where many customers have the same or similar company names.Which functionality should be configured to improve an end user's search experience? (Choose two.)",
      options: [
        "A. Update the account search layouts search filter fields.",
        "B. Update the account search layouts accounts tab columns displayed.",
        "C. Update the account search layouts search results columns displayed.",
        "D. Update the account search layouts list view filter settings.",
      ],
      answer: "B,C",
      explanation: "",
      title: "Question 102",
    },
    {
      content:
        "An app builder creates an Account validation rule on the Industry field that will throw an error if the length of the field is longer than 6 characters. Another app builder creates a workflow with a field update that sets the Industry field to Technology whenever the Billing City field is set to San Francisco.What will happen the next time a sales person saves an Account with a Billing City of San Francisco?",
      options: [
        "A. The record will save and the Industry field will change to Technology.",
        "B. The record will not save and no error message will be displayed.",
        "C. The record will not save the validation rule's error message will be displayed.",
        "D. The record will save but the Industry field will not change to Territory.",
      ],
      answer: "B",
      explanation: "",
      title: "Question 103",
    },
    {
      content: "What is a true statement when deleting a dashboard?",
      options: [
        "A. Deleting a dashboard also deletes the components within it. It does not delete the custom reports used by the components.",
        "B. Deleting a dashboard does not move the dashboard to the Recycle Bin and therefore the dashboard cannot be recovered.",
        "C. Deleting a dashboard also deletes the components within it as well as the custom reports used by the components.",
        "D. Deleting a dashboard requires a user to first edit the components to remove the underlying reports.",
      ],
      answer: "A",
      explanation: "",
      title: "Question 104",
    },
    {
      content:
        "A junction object has two Master-Detail relationships, a primary and a secondary master object.What happens to a junction object record when both associated master records are deleted?",
      options: [
        "A. The junction object record is permanently deleted and can't be restored.",
        "B. The delete operation cannot be performed on both master records.",
        "C. The delete operation is not allowed with Roll-up summary fields defined.",
        "D. The junction object records is deleted and placed in the recycle bin.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 105",
    },
    {
      content:
        "Universal Containers wants its Field Sales team to only see the accounts that they own. Separate North American and European marketing teams should only see accounts in their respective regions. The Inside Sales Team needs to see all accounts in Salesforce.How should an app builder accomplish this?",
      options: [
        "A. Set the Organization-Wide Default to Public for accounts. Create profiles for each Marketing Team, and create an Inside Sales Team role that is at the top of the Role Hierarchy.",
        'B. Set the Organization-Wide Default to Public for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team permission set with the "View All" setting for accounts.',
        'C. Set the Organization-Wide Default to Private for accounts. Create permission sets for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
        'D. Set the Organization-Wide Default to Private for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
      ],
      answer: "B",
      explanation: "",
      title: "Question 106",
    },
    {
      content:
        "The app builder has just created a Visual Workflow for the VP of Service.Which two Flow be accessed by users? (Choose two.)",
      options: [
        "A. Custom Button",
        "B. Quick Action",
        "C. Visual Workflow Launcher",
        "D. From a Process",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 107",
    },
    {
      content:
        "Which two metadata changes can be made directly in a production environment without deploying from a sandbox? (Choose two.)",
      options: [
        "A. Validation rules",
        "B. Apex Triggers",
        "C. Apex Classes",
        "D. Visualforce pages",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 108",
    },
    {
      content:
        "The Training team at Universal Containers uses a custom Training object to track their customer training sessions. An app builder needs to create a relationship between the Training object and the related Students' record.Which two statements are true when creating a Student Lookup field on the Training object? (Choose two.)",
      options: [
        "A. On Training record, the Student Lookup field can be made optional.",
        "B. On Student record, users can set up Roll-up summary field on Training records.",
        "C. On Training record, users can only delete Students, if they have access to it.",
        "D. Cross-object field updates between Training and Student records are not supported.",
      ],
      answer: "A,C",
      explanation: "",
      title: "Question 109",
    },
    {
      content:
        "An app builder would like to streamline the user experience by reflecting summarized calculations of specific fields on various objects.Which three field types could be used in roll-up summary fields to accomplish this? (Choose three.)",
      options: [
        "A. Checkbox",
        "B. Date",
        "C. Percent",
        "D. Time",
        "E. Currency",
      ],
      answer: "B,C,E",
      explanation: "",
      title: "Question 110",
    },
    {
      content:
        "Universal Containers manages internal projects by department using a custom object called Projects. Only employees in the project's respective department should have view access to all of the department's project records. If an employee changes job roles and moves to another department, the employee should no longer have access to the projects within their former department.Which two options will meet these requirements assuming the organization-wide default for Projects is set to Private? (Choose two.)",
      options: [
        "A. Create a criteria-based sharing rule using the Project's department that grants access to users by profiles.",
        "B. Create a criteria-based sharing rule using the Project's department that grants access to users by permission sets.",
        "C. Create a criteria-based sharing rule using the Project's department that grants access to users by roles.",
        "D. Create a criteria-based sharing rule using the Project's department that grants access to users by public groups.",
      ],
      answer: "C,D",
      explanation: "",
      title: "Question 111",
    },
    {
      content:
        "Universal Containers has a customer base where many customers have the same or similar company names.Which functionality should be configured to improve an end user's search experience? (Choose two.)",
      options: [
        "A. Update the account search layouts search filter fields.",
        "B. Update the account search layouts accounts tab columns displayed.",
        "C. Update the account search layouts search results columns displayed.",
        "D. Update the account search layouts list view filter settings.",
      ],
      answer: "B,C",
      explanation: "",
      title: "Question 112",
    },
    {
      content:
        "An app builder creates an Account validation rule on the Industry field that will throw an error if the length of the field is longer than 6 characters. Another app builder creates a workflow with a field update that sets the Industry field to Technology whenever the Billing City field is set to San Francisco.What will happen the next time a sales person saves an Account with a Billing City of San Francisco?",
      options: [
        "A. The record will save and the Industry field will change to Technology.",
        "B. The record will not save and no error message will be displayed.",
        "C. The record will not save the validation rule's error message will be displayed.",
        "D. The record will save but the Industry field will not change to Territory.",
      ],
      answer: "B",
      explanation: "",
      title: "Question 113",
    },
    {
      content: "What is a true statement when deleting a dashboard?",
      options: [
        "A. Deleting a dashboard also deletes the components within it. It does not delete the custom reports used by the components.",
        "B. Deleting a dashboard does not move the dashboard to the Recycle Bin and therefore the dashboard cannot be recovered.",
        "C. Deleting a dashboard also deletes the components within it as well as the custom reports used by the components.",
        "D. Deleting a dashboard requires a user to first edit the components to remove the underlying reports.",
      ],
      answer: "A",
      explanation: "",
      title: "Question 114",
    },
    {
      content:
        "A junction object has two Master-Detail relationships, a primary and a secondary master object.What happens to a junction object record when both associated master records are deleted?",
      options: [
        "A. The junction object record is permanently deleted and can't be restored.",
        "B. The delete operation cannot be performed on both master records.",
        "C. The delete operation is not allowed with Roll-up summary fields defined.",
        "D. The junction object records is deleted and placed in the recycle bin.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 115",
    },
    {
      content:
        "Universal Containers wants its Field Sales team to only see the accounts that they own. Separate North American and European marketing teams should only see accounts in their respective regions. The Inside Sales Team needs to see all accounts in Salesforce.How should an app builder accomplish this?",
      options: [
        "A. Set the Organization-Wide Default to Public for accounts. Create profiles for each Marketing Team, and create an Inside Sales Team role that is at the top of the Role Hierarchy.",
        'B. Set the Organization-Wide Default to Public for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team permission set with the "View All" setting for accounts.',
        'C. Set the Organization-Wide Default to Private for accounts. Create permission sets for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
        'D. Set the Organization-Wide Default to Private for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
      ],
      answer: "B",
      explanation: "",
      title: "Question 116",
    },
    {
      content:
        "The app builder has just created a Visual Workflow for the VP of Service.Which two Flow be accessed by users? (Choose two.)",
      options: [
        "A. Custom Button",
        "B. Quick Action",
        "C. Visual Workflow Launcher",
        "D. From a Process",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 117",
    },
    {
      content:
        "Which two metadata changes can be made directly in a production environment without deploying from a sandbox? (Choose two.)",
      options: [
        "A. Validation rules",
        "B. Apex Triggers",
        "C. Apex Classes",
        "D. Visualforce pages",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 118",
    },
    {
      content:
        "The Training team at Universal Containers uses a custom Training object to track their customer training sessions. An app builder needs to create a relationship between the Training object and the related Students' record.Which two statements are true when creating a Student Lookup field on the Training object? (Choose two.)",
      options: [
        "A. On Training record, the Student Lookup field can be made optional.",
        "B. On Student record, users can set up Roll-up summary field on Training records.",
        "C. On Training record, users can only delete Students, if they have access to it.",
        "D. Cross-object field updates between Training and Student records are not supported.",
      ],
      answer: "A,C",
      explanation: "",
      title: "Question 119",
    },
    {
      content:
        "An app builder would like to streamline the user experience by reflecting summarized calculations of specific fields on various objects.Which three field types could be used in roll-up summary fields to accomplish this? (Choose three.)",
      options: [
        "A. Checkbox",
        "B. Date",
        "C. Percent",
        "D. Time",
        "E. Currency",
      ],
      answer: "B,C,E",
      explanation: "",
      title: "Question 120",
    },
    {
      content:
        "Universal Containers manages internal projects by department using a custom object called Projects. Only employees in the project's respective department should have view access to all of the department's project records. If an employee changes job roles and moves to another department, the employee should no longer have access to the projects within their former department.Which two options will meet these requirements assuming the organization-wide default for Projects is set to Private? (Choose two.)",
      options: [
        "A. Create a criteria-based sharing rule using the Project's department that grants access to users by profiles.",
        "B. Create a criteria-based sharing rule using the Project's department that grants access to users by permission sets.",
        "C. Create a criteria-based sharing rule using the Project's department that grants access to users by roles.",
        "D. Create a criteria-based sharing rule using the Project's department that grants access to users by public groups.",
      ],
      answer: "C,D",
      explanation: "",
      title: "Question 121",
    },
    {
      content:
        "Universal Containers has a customer base where many customers have the same or similar company names.Which functionality should be configured to improve an end user's search experience? (Choose two.)",
      options: [
        "A. Update the account search layouts search filter fields.",
        "B. Update the account search layouts accounts tab columns displayed.",
        "C. Update the account search layouts search results columns displayed.",
        "D. Update the account search layouts list view filter settings.",
      ],
      answer: "B,C",
      explanation: "",
      title: "Question 122",
    },
    {
      content:
        "An app builder creates an Account validation rule on the Industry field that will throw an error if the length of the field is longer than 6 characters. Another app builder creates a workflow with a field update that sets the Industry field to Technology whenever the Billing City field is set to San Francisco.What will happen the next time a sales person saves an Account with a Billing City of San Francisco?",
      options: [
        "A. The record will save and the Industry field will change to Technology.",
        "B. The record will not save and no error message will be displayed.",
        "C. The record will not save the validation rule's error message will be displayed.",
        "D. The record will save but the Industry field will not change to Territory.",
      ],
      answer: "B",
      explanation: "",
      title: "Question 123",
    },
    {
      content: "What is a true statement when deleting a dashboard?",
      options: [
        "A. Deleting a dashboard also deletes the components within it. It does not delete the custom reports used by the components.",
        "B. Deleting a dashboard does not move the dashboard to the Recycle Bin and therefore the dashboard cannot be recovered.",
        "C. Deleting a dashboard also deletes the components within it as well as the custom reports used by the components.",
        "D. Deleting a dashboard requires a user to first edit the components to remove the underlying reports.",
      ],
      answer: "A",
      explanation: "",
      title: "Question 124",
    },
    {
      content:
        "A junction object has two Master-Detail relationships, a primary and a secondary master object.What happens to a junction object record when both associated master records are deleted?",
      options: [
        "A. The junction object record is permanently deleted and can't be restored.",
        "B. The delete operation cannot be performed on both master records.",
        "C. The delete operation is not allowed with Roll-up summary fields defined.",
        "D. The junction object records is deleted and placed in the recycle bin.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 125",
    },
    {
      content:
        "Universal Containers wants its Field Sales team to only see the accounts that they own. Separate North American and European marketing teams should only see accounts in their respective regions. The Inside Sales Team needs to see all accounts in Salesforce.How should an app builder accomplish this?",
      options: [
        "A. Set the Organization-Wide Default to Public for accounts. Create profiles for each Marketing Team, and create an Inside Sales Team role that is at the top of the Role Hierarchy.",
        'B. Set the Organization-Wide Default to Public for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team permission set with the "View All" setting for accounts.',
        'C. Set the Organization-Wide Default to Private for accounts. Create permission sets for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
        'D. Set the Organization-Wide Default to Private for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
      ],
      answer: "B",
      explanation: "",
      title: "Question 126",
    },
    {
      content:
        "The app builder has just created a Visual Workflow for the VP of Service.Which two Flow be accessed by users? (Choose two.)",
      options: [
        "A. Custom Button",
        "B. Quick Action",
        "C. Visual Workflow Launcher",
        "D. From a Process",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 127",
    },
    {
      content:
        "Which two metadata changes can be made directly in a production environment without deploying from a sandbox? (Choose two.)",
      options: [
        "A. Validation rules",
        "B. Apex Triggers",
        "C. Apex Classes",
        "D. Visualforce pages",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 128",
    },
    {
      content:
        "The Training team at Universal Containers uses a custom Training object to track their customer training sessions. An app builder needs to create a relationship between the Training object and the related Students' record.Which two statements are true when creating a Student Lookup field on the Training object? (Choose two.)",
      options: [
        "A. On Training record, the Student Lookup field can be made optional.",
        "B. On Student record, users can set up Roll-up summary field on Training records.",
        "C. On Training record, users can only delete Students, if they have access to it.",
        "D. Cross-object field updates between Training and Student records are not supported.",
      ],
      answer: "A,C",
      explanation: "",
      title: "Question 129",
    },
    {
      content:
        "An app builder would like to streamline the user experience by reflecting summarized calculations of specific fields on various objects.Which three field types could be used in roll-up summary fields to accomplish this? (Choose three.)",
      options: [
        "A. Checkbox",
        "B. Date",
        "C. Percent",
        "D. Time",
        "E. Currency",
      ],
      answer: "B,C,E",
      explanation: "",
      title: "Question 130",
    },
    {
      content:
        "Universal Containers manages internal projects by department using a custom object called Projects. Only employees in the project's respective department should have view access to all of the department's project records. If an employee changes job roles and moves to another department, the employee should no longer have access to the projects within their former department.Which two options will meet these requirements assuming the organization-wide default for Projects is set to Private? (Choose two.)",
      options: [
        "A. Create a criteria-based sharing rule using the Project's department that grants access to users by profiles.",
        "B. Create a criteria-based sharing rule using the Project's department that grants access to users by permission sets.",
        "C. Create a criteria-based sharing rule using the Project's department that grants access to users by roles.",
        "D. Create a criteria-based sharing rule using the Project's department that grants access to users by public groups.",
      ],
      answer: "C,D",
      explanation: "",
      title: "Question 131",
    },
    {
      content:
        "Universal Containers has a customer base where many customers have the same or similar company names.Which functionality should be configured to improve an end user's search experience? (Choose two.)",
      options: [
        "A. Update the account search layouts search filter fields.",
        "B. Update the account search layouts accounts tab columns displayed.",
        "C. Update the account search layouts search results columns displayed.",
        "D. Update the account search layouts list view filter settings.",
      ],
      answer: "B,C",
      explanation: "",
      title: "Question 132",
    },
    {
      content:
        "An app builder creates an Account validation rule on the Industry field that will throw an error if the length of the field is longer than 6 characters. Another app builder creates a workflow with a field update that sets the Industry field to Technology whenever the Billing City field is set to San Francisco.What will happen the next time a sales person saves an Account with a Billing City of San Francisco?",
      options: [
        "A. The record will save and the Industry field will change to Technology.",
        "B. The record will not save and no error message will be displayed.",
        "C. The record will not save the validation rule's error message will be displayed.",
        "D. The record will save but the Industry field will not change to Territory.",
      ],
      answer: "B",
      explanation: "",
      title: "Question 133",
    },
    {
      content: "What is a true statement when deleting a dashboard?",
      options: [
        "A. Deleting a dashboard also deletes the components within it. It does not delete the custom reports used by the components.",
        "B. Deleting a dashboard does not move the dashboard to the Recycle Bin and therefore the dashboard cannot be recovered.",
        "C. Deleting a dashboard also deletes the components within it as well as the custom reports used by the components.",
        "D. Deleting a dashboard requires a user to first edit the components to remove the underlying reports.",
      ],
      answer: "A",
      explanation: "",
      title: "Question 134",
    },
    {
      content:
        "A junction object has two Master-Detail relationships, a primary and a secondary master object.What happens to a junction object record when both associated master records are deleted?",
      options: [
        "A. The junction object record is permanently deleted and can't be restored.",
        "B. The delete operation cannot be performed on both master records.",
        "C. The delete operation is not allowed with Roll-up summary fields defined.",
        "D. The junction object records is deleted and placed in the recycle bin.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 135",
    },
    {
      content:
        "Universal Containers wants its Field Sales team to only see the accounts that they own. Separate North American and European marketing teams should only see accounts in their respective regions. The Inside Sales Team needs to see all accounts in Salesforce.How should an app builder accomplish this?",
      options: [
        "A. Set the Organization-Wide Default to Public for accounts. Create profiles for each Marketing Team, and create an Inside Sales Team role that is at the top of the Role Hierarchy.",
        'B. Set the Organization-Wide Default to Public for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team permission set with the "View All" setting for accounts.',
        'C. Set the Organization-Wide Default to Private for accounts. Create permission sets for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
        'D. Set the Organization-Wide Default to Private for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
      ],
      answer: "B",
      explanation: "",
      title: "Question 136",
    },
    {
      content:
        "The app builder has just created a Visual Workflow for the VP of Service.Which two Flow be accessed by users? (Choose two.)",
      options: [
        "A. Custom Button",
        "B. Quick Action",
        "C. Visual Workflow Launcher",
        "D. From a Process",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 137",
    },
    {
      content:
        "Which two metadata changes can be made directly in a production environment without deploying from a sandbox? (Choose two.)",
      options: [
        "A. Validation rules",
        "B. Apex Triggers",
        "C. Apex Classes",
        "D. Visualforce pages",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 138",
    },
    {
      content:
        "The Training team at Universal Containers uses a custom Training object to track their customer training sessions. An app builder needs to create a relationship between the Training object and the related Students' record.Which two statements are true when creating a Student Lookup field on the Training object? (Choose two.)",
      options: [
        "A. On Training record, the Student Lookup field can be made optional.",
        "B. On Student record, users can set up Roll-up summary field on Training records.",
        "C. On Training record, users can only delete Students, if they have access to it.",
        "D. Cross-object field updates between Training and Student records are not supported.",
      ],
      answer: "A,C",
      explanation: "",
      title: "Question 139",
    },
    {
      content:
        "An app builder would like to streamline the user experience by reflecting summarized calculations of specific fields on various objects.Which three field types could be used in roll-up summary fields to accomplish this? (Choose three.)",
      options: [
        "A. Checkbox",
        "B. Date",
        "C. Percent",
        "D. Time",
        "E. Currency",
      ],
      answer: "B,C,E",
      explanation: "",
      title: "Question 140",
    },
    {
      content:
        "Universal Containers manages internal projects by department using a custom object called Projects. Only employees in the project's respective department should have view access to all of the department's project records. If an employee changes job roles and moves to another department, the employee should no longer have access to the projects within their former department.Which two options will meet these requirements assuming the organization-wide default for Projects is set to Private? (Choose two.)",
      options: [
        "A. Create a criteria-based sharing rule using the Project's department that grants access to users by profiles.",
        "B. Create a criteria-based sharing rule using the Project's department that grants access to users by permission sets.",
        "C. Create a criteria-based sharing rule using the Project's department that grants access to users by roles.",
        "D. Create a criteria-based sharing rule using the Project's department that grants access to users by public groups.",
      ],
      answer: "C,D",
      explanation: "",
      title: "Question 141",
    },
    {
      content:
        "Universal Containers has a customer base where many customers have the same or similar company names.Which functionality should be configured to improve an end user's search experience? (Choose two.)",
      options: [
        "A. Update the account search layouts search filter fields.",
        "B. Update the account search layouts accounts tab columns displayed.",
        "C. Update the account search layouts search results columns displayed.",
        "D. Update the account search layouts list view filter settings.",
      ],
      answer: "B,C",
      explanation: "",
      title: "Question 142",
    },
    {
      content:
        "An app builder creates an Account validation rule on the Industry field that will throw an error if the length of the field is longer than 6 characters. Another app builder creates a workflow with a field update that sets the Industry field to Technology whenever the Billing City field is set to San Francisco.What will happen the next time a sales person saves an Account with a Billing City of San Francisco?",
      options: [
        "A. The record will save and the Industry field will change to Technology.",
        "B. The record will not save and no error message will be displayed.",
        "C. The record will not save the validation rule's error message will be displayed.",
        "D. The record will save but the Industry field will not change to Territory.",
      ],
      answer: "B",
      explanation: "",
      title: "Question 143",
    },
    {
      content: "What is a true statement when deleting a dashboard?",
      options: [
        "A. Deleting a dashboard also deletes the components within it. It does not delete the custom reports used by the components.",
        "B. Deleting a dashboard does not move the dashboard to the Recycle Bin and therefore the dashboard cannot be recovered.",
        "C. Deleting a dashboard also deletes the components within it as well as the custom reports used by the components.",
        "D. Deleting a dashboard requires a user to first edit the components to remove the underlying reports.",
      ],
      answer: "A",
      explanation: "",
      title: "Question 144",
    },
    {
      content:
        "A junction object has two Master-Detail relationships, a primary and a secondary master object.What happens to a junction object record when both associated master records are deleted?",
      options: [
        "A. The junction object record is permanently deleted and can't be restored.",
        "B. The delete operation cannot be performed on both master records.",
        "C. The delete operation is not allowed with Roll-up summary fields defined.",
        "D. The junction object records is deleted and placed in the recycle bin.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 145",
    },
    {
      content:
        "Universal Containers wants its Field Sales team to only see the accounts that they own. Separate North American and European marketing teams should only see accounts in their respective regions. The Inside Sales Team needs to see all accounts in Salesforce.How should an app builder accomplish this?",
      options: [
        "A. Set the Organization-Wide Default to Public for accounts. Create profiles for each Marketing Team, and create an Inside Sales Team role that is at the top of the Role Hierarchy.",
        'B. Set the Organization-Wide Default to Public for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team permission set with the "View All" setting for accounts.',
        'C. Set the Organization-Wide Default to Private for accounts. Create permission sets for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
        'D. Set the Organization-Wide Default to Private for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
      ],
      answer: "B",
      explanation: "",
      title: "Question 146",
    },
    {
      content:
        "The app builder has just created a Visual Workflow for the VP of Service.Which two Flow be accessed by users? (Choose two.)",
      options: [
        "A. Custom Button",
        "B. Quick Action",
        "C. Visual Workflow Launcher",
        "D. From a Process",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 147",
    },
    {
      content:
        "Which two metadata changes can be made directly in a production environment without deploying from a sandbox? (Choose two.)",
      options: [
        "A. Validation rules",
        "B. Apex Triggers",
        "C. Apex Classes",
        "D. Visualforce pages",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 148",
    },
    {
      content:
        "The Training team at Universal Containers uses a custom Training object to track their customer training sessions. An app builder needs to create a relationship between the Training object and the related Students' record.Which two statements are true when creating a Student Lookup field on the Training object? (Choose two.)",
      options: [
        "A. On Training record, the Student Lookup field can be made optional.",
        "B. On Student record, users can set up Roll-up summary field on Training records.",
        "C. On Training record, users can only delete Students, if they have access to it.",
        "D. Cross-object field updates between Training and Student records are not supported.",
      ],
      answer: "A,C",
      explanation: "",
      title: "Question 149",
    },
    {
      content:
        "An app builder would like to streamline the user experience by reflecting summarized calculations of specific fields on various objects.Which three field types could be used in roll-up summary fields to accomplish this? (Choose three.)",
      options: [
        "A. Checkbox",
        "B. Date",
        "C. Percent",
        "D. Time",
        "E. Currency",
      ],
      answer: "B,C,E",
      explanation: "",
      title: "Question 150",
    },
    {
      content:
        "Universal Containers manages internal projects by department using a custom object called Projects. Only employees in the project's respective department should have view access to all of the department's project records. If an employee changes job roles and moves to another department, the employee should no longer have access to the projects within their former department.Which two options will meet these requirements assuming the organization-wide default for Projects is set to Private? (Choose two.)",
      options: [
        "A. Create a criteria-based sharing rule using the Project's department that grants access to users by profiles.",
        "B. Create a criteria-based sharing rule using the Project's department that grants access to users by permission sets.",
        "C. Create a criteria-based sharing rule using the Project's department that grants access to users by roles.",
        "D. Create a criteria-based sharing rule using the Project's department that grants access to users by public groups.",
      ],
      answer: "C,D",
      explanation: "",
      title: "Question 151",
    },
    {
      content:
        "Universal Containers has a customer base where many customers have the same or similar company names.Which functionality should be configured to improve an end user's search experience? (Choose two.)",
      options: [
        "A. Update the account search layouts search filter fields.",
        "B. Update the account search layouts accounts tab columns displayed.",
        "C. Update the account search layouts search results columns displayed.",
        "D. Update the account search layouts list view filter settings.",
      ],
      answer: "B,C",
      explanation: "",
      title: "Question 152",
    },
    {
      content:
        "An app builder creates an Account validation rule on the Industry field that will throw an error if the length of the field is longer than 6 characters. Another app builder creates a workflow with a field update that sets the Industry field to Technology whenever the Billing City field is set to San Francisco.What will happen the next time a sales person saves an Account with a Billing City of San Francisco?",
      options: [
        "A. The record will save and the Industry field will change to Technology.",
        "B. The record will not save and no error message will be displayed.",
        "C. The record will not save the validation rule's error message will be displayed.",
        "D. The record will save but the Industry field will not change to Territory.",
      ],
      answer: "B",
      explanation: "",
      title: "Question 153",
    },
    {
      content: "What is a true statement when deleting a dashboard?",
      options: [
        "A. Deleting a dashboard also deletes the components within it. It does not delete the custom reports used by the components.",
        "B. Deleting a dashboard does not move the dashboard to the Recycle Bin and therefore the dashboard cannot be recovered.",
        "C. Deleting a dashboard also deletes the components within it as well as the custom reports used by the components.",
        "D. Deleting a dashboard requires a user to first edit the components to remove the underlying reports.",
      ],
      answer: "A",
      explanation: "",
      title: "Question 154",
    },
    {
      content:
        "A junction object has two Master-Detail relationships, a primary and a secondary master object.What happens to a junction object record when both associated master records are deleted?",
      options: [
        "A. The junction object record is permanently deleted and can't be restored.",
        "B. The delete operation cannot be performed on both master records.",
        "C. The delete operation is not allowed with Roll-up summary fields defined.",
        "D. The junction object records is deleted and placed in the recycle bin.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 155",
    },
    {
      content:
        "Universal Containers wants its Field Sales team to only see the accounts that they own. Separate North American and European marketing teams should only see accounts in their respective regions. The Inside Sales Team needs to see all accounts in Salesforce.How should an app builder accomplish this?",
      options: [
        "A. Set the Organization-Wide Default to Public for accounts. Create profiles for each Marketing Team, and create an Inside Sales Team role that is at the top of the Role Hierarchy.",
        'B. Set the Organization-Wide Default to Public for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team permission set with the "View All" setting for accounts.',
        'C. Set the Organization-Wide Default to Private for accounts. Create permission sets for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
        'D. Set the Organization-Wide Default to Private for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
      ],
      answer: "B",
      explanation: "",
      title: "Question 156",
    },
    {
      content:
        "The app builder has just created a Visual Workflow for the VP of Service.Which two Flow be accessed by users? (Choose two.)",
      options: [
        "A. Custom Button",
        "B. Quick Action",
        "C. Visual Workflow Launcher",
        "D. From a Process",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 157",
    },
    {
      content:
        "Which two metadata changes can be made directly in a production environment without deploying from a sandbox? (Choose two.)",
      options: [
        "A. Validation rules",
        "B. Apex Triggers",
        "C. Apex Classes",
        "D. Visualforce pages",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 158",
    },
    {
      content:
        "The Training team at Universal Containers uses a custom Training object to track their customer training sessions. An app builder needs to create a relationship between the Training object and the related Students' record.Which two statements are true when creating a Student Lookup field on the Training object? (Choose two.)",
      options: [
        "A. On Training record, the Student Lookup field can be made optional.",
        "B. On Student record, users can set up Roll-up summary field on Training records.",
        "C. On Training record, users can only delete Students, if they have access to it.",
        "D. Cross-object field updates between Training and Student records are not supported.",
      ],
      answer: "A,C",
      explanation: "",
      title: "Question 159",
    },
    {
      content:
        "An app builder would like to streamline the user experience by reflecting summarized calculations of specific fields on various objects.Which three field types could be used in roll-up summary fields to accomplish this? (Choose three.)",
      options: [
        "A. Checkbox",
        "B. Date",
        "C. Percent",
        "D. Time",
        "E. Currency",
      ],
      answer: "B,C,E",
      explanation: "",
      title: "Question 160",
    },
    {
      content:
        "Universal Containers manages internal projects by department using a custom object called Projects. Only employees in the project's respective department should have view access to all of the department's project records. If an employee changes job roles and moves to another department, the employee should no longer have access to the projects within their former department.Which two options will meet these requirements assuming the organization-wide default for Projects is set to Private? (Choose two.)",
      options: [
        "A. Create a criteria-based sharing rule using the Project's department that grants access to users by profiles.",
        "B. Create a criteria-based sharing rule using the Project's department that grants access to users by permission sets.",
        "C. Create a criteria-based sharing rule using the Project's department that grants access to users by roles.",
        "D. Create a criteria-based sharing rule using the Project's department that grants access to users by public groups.",
      ],
      answer: "C,D",
      explanation: "",
      title: "Question 161",
    },
    {
      content:
        "Universal Containers has a customer base where many customers have the same or similar company names.Which functionality should be configured to improve an end user's search experience? (Choose two.)",
      options: [
        "A. Update the account search layouts search filter fields.",
        "B. Update the account search layouts accounts tab columns displayed.",
        "C. Update the account search layouts search results columns displayed.",
        "D. Update the account search layouts list view filter settings.",
      ],
      answer: "B,C",
      explanation: "",
      title: "Question 162",
    },
    {
      content:
        "An app builder creates an Account validation rule on the Industry field that will throw an error if the length of the field is longer than 6 characters. Another app builder creates a workflow with a field update that sets the Industry field to Technology whenever the Billing City field is set to San Francisco.What will happen the next time a sales person saves an Account with a Billing City of San Francisco?",
      options: [
        "A. The record will save and the Industry field will change to Technology.",
        "B. The record will not save and no error message will be displayed.",
        "C. The record will not save the validation rule's error message will be displayed.",
        "D. The record will save but the Industry field will not change to Territory.",
      ],
      answer: "B",
      explanation: "",
      title: "Question 163",
    },
    {
      content: "What is a true statement when deleting a dashboard?",
      options: [
        "A. Deleting a dashboard also deletes the components within it. It does not delete the custom reports used by the components.",
        "B. Deleting a dashboard does not move the dashboard to the Recycle Bin and therefore the dashboard cannot be recovered.",
        "C. Deleting a dashboard also deletes the components within it as well as the custom reports used by the components.",
        "D. Deleting a dashboard requires a user to first edit the components to remove the underlying reports.",
      ],
      answer: "A",
      explanation: "",
      title: "Question 164",
    },
    {
      content:
        "A junction object has two Master-Detail relationships, a primary and a secondary master object.What happens to a junction object record when both associated master records are deleted?",
      options: [
        "A. The junction object record is permanently deleted and can't be restored.",
        "B. The delete operation cannot be performed on both master records.",
        "C. The delete operation is not allowed with Roll-up summary fields defined.",
        "D. The junction object records is deleted and placed in the recycle bin.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 165",
    },
    {
      content:
        "Universal Containers wants its Field Sales team to only see the accounts that they own. Separate North American and European marketing teams should only see accounts in their respective regions. The Inside Sales Team needs to see all accounts in Salesforce.How should an app builder accomplish this?",
      options: [
        "A. Set the Organization-Wide Default to Public for accounts. Create profiles for each Marketing Team, and create an Inside Sales Team role that is at the top of the Role Hierarchy.",
        'B. Set the Organization-Wide Default to Public for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team permission set with the "View All" setting for accounts.',
        'C. Set the Organization-Wide Default to Private for accounts. Create permission sets for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
        'D. Set the Organization-Wide Default to Private for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
      ],
      answer: "B",
      explanation: "",
      title: "Question 166",
    },
    {
      content:
        "The app builder has just created a Visual Workflow for the VP of Service.Which two Flow be accessed by users? (Choose two.)",
      options: [
        "A. Custom Button",
        "B. Quick Action",
        "C. Visual Workflow Launcher",
        "D. From a Process",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 167",
    },
    {
      content:
        "Which two metadata changes can be made directly in a production environment without deploying from a sandbox? (Choose two.)",
      options: [
        "A. Validation rules",
        "B. Apex Triggers",
        "C. Apex Classes",
        "D. Visualforce pages",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 168",
    },
    {
      content:
        "The Training team at Universal Containers uses a custom Training object to track their customer training sessions. An app builder needs to create a relationship between the Training object and the related Students' record.Which two statements are true when creating a Student Lookup field on the Training object? (Choose two.)",
      options: [
        "A. On Training record, the Student Lookup field can be made optional.",
        "B. On Student record, users can set up Roll-up summary field on Training records.",
        "C. On Training record, users can only delete Students, if they have access to it.",
        "D. Cross-object field updates between Training and Student records are not supported.",
      ],
      answer: "A,C",
      explanation: "",
      title: "Question 169",
    },
    {
      content:
        "An app builder would like to streamline the user experience by reflecting summarized calculations of specific fields on various objects.Which three field types could be used in roll-up summary fields to accomplish this? (Choose three.)",
      options: [
        "A. Checkbox",
        "B. Date",
        "C. Percent",
        "D. Time",
        "E. Currency",
      ],
      answer: "B,C,E",
      explanation: "",
      title: "Question 170",
    },
    {
      content:
        "Universal Containers manages internal projects by department using a custom object called Projects. Only employees in the project's respective department should have view access to all of the department's project records. If an employee changes job roles and moves to another department, the employee should no longer have access to the projects within their former department.Which two options will meet these requirements assuming the organization-wide default for Projects is set to Private? (Choose two.)",
      options: [
        "A. Create a criteria-based sharing rule using the Project's department that grants access to users by profiles.",
        "B. Create a criteria-based sharing rule using the Project's department that grants access to users by permission sets.",
        "C. Create a criteria-based sharing rule using the Project's department that grants access to users by roles.",
        "D. Create a criteria-based sharing rule using the Project's department that grants access to users by public groups.",
      ],
      answer: "C,D",
      explanation: "",
      title: "Question 171",
    },
    {
      content:
        "Universal Containers has a customer base where many customers have the same or similar company names.Which functionality should be configured to improve an end user's search experience? (Choose two.)",
      options: [
        "A. Update the account search layouts search filter fields.",
        "B. Update the account search layouts accounts tab columns displayed.",
        "C. Update the account search layouts search results columns displayed.",
        "D. Update the account search layouts list view filter settings.",
      ],
      answer: "B,C",
      explanation: "",
      title: "Question 172",
    },
    {
      content:
        "An app builder creates an Account validation rule on the Industry field that will throw an error if the length of the field is longer than 6 characters. Another app builder creates a workflow with a field update that sets the Industry field to Technology whenever the Billing City field is set to San Francisco.What will happen the next time a sales person saves an Account with a Billing City of San Francisco?",
      options: [
        "A. The record will save and the Industry field will change to Technology.",
        "B. The record will not save and no error message will be displayed.",
        "C. The record will not save the validation rule's error message will be displayed.",
        "D. The record will save but the Industry field will not change to Territory.",
      ],
      answer: "B",
      explanation: "",
      title: "Question 173",
    },
    {
      content: "What is a true statement when deleting a dashboard?",
      options: [
        "A. Deleting a dashboard also deletes the components within it. It does not delete the custom reports used by the components.",
        "B. Deleting a dashboard does not move the dashboard to the Recycle Bin and therefore the dashboard cannot be recovered.",
        "C. Deleting a dashboard also deletes the components within it as well as the custom reports used by the components.",
        "D. Deleting a dashboard requires a user to first edit the components to remove the underlying reports.",
      ],
      answer: "A",
      explanation: "",
      title: "Question 174",
    },
    {
      content:
        "A junction object has two Master-Detail relationships, a primary and a secondary master object.What happens to a junction object record when both associated master records are deleted?",
      options: [
        "A. The junction object record is permanently deleted and can't be restored.",
        "B. The delete operation cannot be performed on both master records.",
        "C. The delete operation is not allowed with Roll-up summary fields defined.",
        "D. The junction object records is deleted and placed in the recycle bin.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 175",
    },
    {
      content:
        "Universal Containers wants its Field Sales team to only see the accounts that they own. Separate North American and European marketing teams should only see accounts in their respective regions. The Inside Sales Team needs to see all accounts in Salesforce.How should an app builder accomplish this?",
      options: [
        "A. Set the Organization-Wide Default to Public for accounts. Create profiles for each Marketing Team, and create an Inside Sales Team role that is at the top of the Role Hierarchy.",
        'B. Set the Organization-Wide Default to Public for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team permission set with the "View All" setting for accounts.',
        'C. Set the Organization-Wide Default to Private for accounts. Create permission sets for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
        'D. Set the Organization-Wide Default to Private for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
      ],
      answer: "B",
      explanation: "",
      title: "Question 176",
    },
    {
      content:
        "The app builder has just created a Visual Workflow for the VP of Service.Which two Flow be accessed by users? (Choose two.)",
      options: [
        "A. Custom Button",
        "B. Quick Action",
        "C. Visual Workflow Launcher",
        "D. From a Process",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 177",
    },
    {
      content:
        "Which two metadata changes can be made directly in a production environment without deploying from a sandbox? (Choose two.)",
      options: [
        "A. Validation rules",
        "B. Apex Triggers",
        "C. Apex Classes",
        "D. Visualforce pages",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 178",
    },
    {
      content:
        "The Training team at Universal Containers uses a custom Training object to track their customer training sessions. An app builder needs to create a relationship between the Training object and the related Students' record.Which two statements are true when creating a Student Lookup field on the Training object? (Choose two.)",
      options: [
        "A. On Training record, the Student Lookup field can be made optional.",
        "B. On Student record, users can set up Roll-up summary field on Training records.",
        "C. On Training record, users can only delete Students, if they have access to it.",
        "D. Cross-object field updates between Training and Student records are not supported.",
      ],
      answer: "A,C",
      explanation: "",
      title: "Question 179",
    },
    {
      content:
        "An app builder would like to streamline the user experience by reflecting summarized calculations of specific fields on various objects.Which three field types could be used in roll-up summary fields to accomplish this? (Choose three.)",
      options: [
        "A. Checkbox",
        "B. Date",
        "C. Percent",
        "D. Time",
        "E. Currency",
      ],
      answer: "B,C,E",
      explanation: "",
      title: "Question 180",
    },
    {
      content:
        "Universal Containers manages internal projects by department using a custom object called Projects. Only employees in the project's respective department should have view access to all of the department's project records. If an employee changes job roles and moves to another department, the employee should no longer have access to the projects within their former department.Which two options will meet these requirements assuming the organization-wide default for Projects is set to Private? (Choose two.)",
      options: [
        "A. Create a criteria-based sharing rule using the Project's department that grants access to users by profiles.",
        "B. Create a criteria-based sharing rule using the Project's department that grants access to users by permission sets.",
        "C. Create a criteria-based sharing rule using the Project's department that grants access to users by roles.",
        "D. Create a criteria-based sharing rule using the Project's department that grants access to users by public groups.",
      ],
      answer: "C,D",
      explanation: "",
      title: "Question 181",
    },
    {
      content:
        "Universal Containers has a customer base where many customers have the same or similar company names.Which functionality should be configured to improve an end user's search experience? (Choose two.)",
      options: [
        "A. Update the account search layouts search filter fields.",
        "B. Update the account search layouts accounts tab columns displayed.",
        "C. Update the account search layouts search results columns displayed.",
        "D. Update the account search layouts list view filter settings.",
      ],
      answer: "B,C",
      explanation: "",
      title: "Question 182",
    },
    {
      content:
        "An app builder creates an Account validation rule on the Industry field that will throw an error if the length of the field is longer than 6 characters. Another app builder creates a workflow with a field update that sets the Industry field to Technology whenever the Billing City field is set to San Francisco.What will happen the next time a sales person saves an Account with a Billing City of San Francisco?",
      options: [
        "A. The record will save and the Industry field will change to Technology.",
        "B. The record will not save and no error message will be displayed.",
        "C. The record will not save the validation rule's error message will be displayed.",
        "D. The record will save but the Industry field will not change to Territory.",
      ],
      answer: "B",
      explanation: "",
      title: "Question 183",
    },
    {
      content: "What is a true statement when deleting a dashboard?",
      options: [
        "A. Deleting a dashboard also deletes the components within it. It does not delete the custom reports used by the components.",
        "B. Deleting a dashboard does not move the dashboard to the Recycle Bin and therefore the dashboard cannot be recovered.",
        "C. Deleting a dashboard also deletes the components within it as well as the custom reports used by the components.",
        "D. Deleting a dashboard requires a user to first edit the components to remove the underlying reports.",
      ],
      answer: "A",
      explanation: "",
      title: "Question 184",
    },
    {
      content:
        "A junction object has two Master-Detail relationships, a primary and a secondary master object.What happens to a junction object record when both associated master records are deleted?",
      options: [
        "A. The junction object record is permanently deleted and can't be restored.",
        "B. The delete operation cannot be performed on both master records.",
        "C. The delete operation is not allowed with Roll-up summary fields defined.",
        "D. The junction object records is deleted and placed in the recycle bin.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 185",
    },
    {
      content:
        "Universal Containers wants its Field Sales team to only see the accounts that they own. Separate North American and European marketing teams should only see accounts in their respective regions. The Inside Sales Team needs to see all accounts in Salesforce.How should an app builder accomplish this?",
      options: [
        "A. Set the Organization-Wide Default to Public for accounts. Create profiles for each Marketing Team, and create an Inside Sales Team role that is at the top of the Role Hierarchy.",
        'B. Set the Organization-Wide Default to Public for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team permission set with the "View All" setting for accounts.',
        'C. Set the Organization-Wide Default to Private for accounts. Create permission sets for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
        'D. Set the Organization-Wide Default to Private for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
      ],
      answer: "B",
      explanation: "",
      title: "Question 186",
    },
    {
      content:
        "The app builder has just created a Visual Workflow for the VP of Service.Which two Flow be accessed by users? (Choose two.)",
      options: [
        "A. Custom Button",
        "B. Quick Action",
        "C. Visual Workflow Launcher",
        "D. From a Process",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 187",
    },
    {
      content:
        "Which two metadata changes can be made directly in a production environment without deploying from a sandbox? (Choose two.)",
      options: [
        "A. Validation rules",
        "B. Apex Triggers",
        "C. Apex Classes",
        "D. Visualforce pages",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 188",
    },
    {
      content:
        "The Training team at Universal Containers uses a custom Training object to track their customer training sessions. An app builder needs to create a relationship between the Training object and the related Students' record.Which two statements are true when creating a Student Lookup field on the Training object? (Choose two.)",
      options: [
        "A. On Training record, the Student Lookup field can be made optional.",
        "B. On Student record, users can set up Roll-up summary field on Training records.",
        "C. On Training record, users can only delete Students, if they have access to it.",
        "D. Cross-object field updates between Training and Student records are not supported.",
      ],
      answer: "A,C",
      explanation: "",
      title: "Question 189",
    },
    {
      content:
        "An app builder would like to streamline the user experience by reflecting summarized calculations of specific fields on various objects.Which three field types could be used in roll-up summary fields to accomplish this? (Choose three.)",
      options: [
        "A. Checkbox",
        "B. Date",
        "C. Percent",
        "D. Time",
        "E. Currency",
      ],
      answer: "B,C,E",
      explanation: "",
      title: "Question 190",
    },
    {
      content:
        "Universal Containers manages internal projects by department using a custom object called Projects. Only employees in the project's respective department should have view access to all of the department's project records. If an employee changes job roles and moves to another department, the employee should no longer have access to the projects within their former department.Which two options will meet these requirements assuming the organization-wide default for Projects is set to Private? (Choose two.)",
      options: [
        "A. Create a criteria-based sharing rule using the Project's department that grants access to users by profiles.",
        "B. Create a criteria-based sharing rule using the Project's department that grants access to users by permission sets.",
        "C. Create a criteria-based sharing rule using the Project's department that grants access to users by roles.",
        "D. Create a criteria-based sharing rule using the Project's department that grants access to users by public groups.",
      ],
      answer: "C,D",
      explanation: "",
      title: "Question 191",
    },
    {
      content:
        "Universal Containers has a customer base where many customers have the same or similar company names.Which functionality should be configured to improve an end user's search experience? (Choose two.)",
      options: [
        "A. Update the account search layouts search filter fields.",
        "B. Update the account search layouts accounts tab columns displayed.",
        "C. Update the account search layouts search results columns displayed.",
        "D. Update the account search layouts list view filter settings.",
      ],
      answer: "B,C",
      explanation: "",
      title: "Question 192",
    },
    {
      content:
        "An app builder creates an Account validation rule on the Industry field that will throw an error if the length of the field is longer than 6 characters. Another app builder creates a workflow with a field update that sets the Industry field to Technology whenever the Billing City field is set to San Francisco.What will happen the next time a sales person saves an Account with a Billing City of San Francisco?",
      options: [
        "A. The record will save and the Industry field will change to Technology.",
        "B. The record will not save and no error message will be displayed.",
        "C. The record will not save the validation rule's error message will be displayed.",
        "D. The record will save but the Industry field will not change to Territory.",
      ],
      answer: "B",
      explanation: "",
      title: "Question 193",
    },
    {
      content: "What is a true statement when deleting a dashboard?",
      options: [
        "A. Deleting a dashboard also deletes the components within it. It does not delete the custom reports used by the components.",
        "B. Deleting a dashboard does not move the dashboard to the Recycle Bin and therefore the dashboard cannot be recovered.",
        "C. Deleting a dashboard also deletes the components within it as well as the custom reports used by the components.",
        "D. Deleting a dashboard requires a user to first edit the components to remove the underlying reports.",
      ],
      answer: "A",
      explanation: "",
      title: "Question 194",
    },
    {
      content:
        "A junction object has two Master-Detail relationships, a primary and a secondary master object.What happens to a junction object record when both associated master records are deleted?",
      options: [
        "A. The junction object record is permanently deleted and can't be restored.",
        "B. The delete operation cannot be performed on both master records.",
        "C. The delete operation is not allowed with Roll-up summary fields defined.",
        "D. The junction object records is deleted and placed in the recycle bin.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 195",
    },
    {
      content:
        "Universal Containers wants its Field Sales team to only see the accounts that they own. Separate North American and European marketing teams should only see accounts in their respective regions. The Inside Sales Team needs to see all accounts in Salesforce.How should an app builder accomplish this?",
      options: [
        "A. Set the Organization-Wide Default to Public for accounts. Create profiles for each Marketing Team, and create an Inside Sales Team role that is at the top of the Role Hierarchy.",
        'B. Set the Organization-Wide Default to Public for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team permission set with the "View All" setting for accounts.',
        'C. Set the Organization-Wide Default to Private for accounts. Create permission sets for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
        'D. Set the Organization-Wide Default to Private for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
      ],
      answer: "B",
      explanation: "",
      title: "Question 196",
    },
    {
      content:
        "The app builder has just created a Visual Workflow for the VP of Service.Which two Flow be accessed by users? (Choose two.)",
      options: [
        "A. Custom Button",
        "B. Quick Action",
        "C. Visual Workflow Launcher",
        "D. From a Process",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 197",
    },
    {
      content:
        "Which two metadata changes can be made directly in a production environment without deploying from a sandbox? (Choose two.)",
      options: [
        "A. Validation rules",
        "B. Apex Triggers",
        "C. Apex Classes",
        "D. Visualforce pages",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 198",
    },
    {
      content:
        "The Training team at Universal Containers uses a custom Training object to track their customer training sessions. An app builder needs to create a relationship between the Training object and the related Students' record.Which two statements are true when creating a Student Lookup field on the Training object? (Choose two.)",
      options: [
        "A. On Training record, the Student Lookup field can be made optional.",
        "B. On Student record, users can set up Roll-up summary field on Training records.",
        "C. On Training record, users can only delete Students, if they have access to it.",
        "D. Cross-object field updates between Training and Student records are not supported.",
      ],
      answer: "A,C",
      explanation: "",
      title: "Question 199",
    },
    {
      content:
        "An app builder would like to streamline the user experience by reflecting summarized calculations of specific fields on various objects.Which three field types could be used in roll-up summary fields to accomplish this? (Choose three.)",
      options: [
        "A. Checkbox",
        "B. Date",
        "C. Percent",
        "D. Time",
        "E. Currency",
      ],
      answer: "B,C,E",
      explanation: "",
      title: "Question 200",
    },
    {
      content:
        "Universal Containers manages internal projects by department using a custom object called Projects. Only employees in the project's respective department should have view access to all of the department's project records. If an employee changes job roles and moves to another department, the employee should no longer have access to the projects within their former department.Which two options will meet these requirements assuming the organization-wide default for Projects is set to Private? (Choose two.)",
      options: [
        "A. Create a criteria-based sharing rule using the Project's department that grants access to users by profiles.",
        "B. Create a criteria-based sharing rule using the Project's department that grants access to users by permission sets.",
        "C. Create a criteria-based sharing rule using the Project's department that grants access to users by roles.",
        "D. Create a criteria-based sharing rule using the Project's department that grants access to users by public groups.",
      ],
      answer: "C,D",
      explanation: "",
      title: "Question 201",
    },
    {
      content:
        "Universal Containers has a customer base where many customers have the same or similar company names.Which functionality should be configured to improve an end user's search experience? (Choose two.)",
      options: [
        "A. Update the account search layouts search filter fields.",
        "B. Update the account search layouts accounts tab columns displayed.",
        "C. Update the account search layouts search results columns displayed.",
        "D. Update the account search layouts list view filter settings.",
      ],
      answer: "B,C",
      explanation: "",
      title: "Question 202",
    },
    {
      content:
        "An app builder creates an Account validation rule on the Industry field that will throw an error if the length of the field is longer than 6 characters. Another app builder creates a workflow with a field update that sets the Industry field to Technology whenever the Billing City field is set to San Francisco.What will happen the next time a sales person saves an Account with a Billing City of San Francisco?",
      options: [
        "A. The record will save and the Industry field will change to Technology.",
        "B. The record will not save and no error message will be displayed.",
        "C. The record will not save the validation rule's error message will be displayed.",
        "D. The record will save but the Industry field will not change to Territory.",
      ],
      answer: "B",
      explanation: "",
      title: "Question 203",
    },
    {
      content: "What is a true statement when deleting a dashboard?",
      options: [
        "A. Deleting a dashboard also deletes the components within it. It does not delete the custom reports used by the components.",
        "B. Deleting a dashboard does not move the dashboard to the Recycle Bin and therefore the dashboard cannot be recovered.",
        "C. Deleting a dashboard also deletes the components within it as well as the custom reports used by the components.",
        "D. Deleting a dashboard requires a user to first edit the components to remove the underlying reports.",
      ],
      answer: "A",
      explanation: "",
      title: "Question 204",
    },
    {
      content:
        "A junction object has two Master-Detail relationships, a primary and a secondary master object.What happens to a junction object record when both associated master records are deleted?",
      options: [
        "A. The junction object record is permanently deleted and can't be restored.",
        "B. The delete operation cannot be performed on both master records.",
        "C. The delete operation is not allowed with Roll-up summary fields defined.",
        "D. The junction object records is deleted and placed in the recycle bin.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 205",
    },
    {
      content:
        "Universal Containers wants its Field Sales team to only see the accounts that they own. Separate North American and European marketing teams should only see accounts in their respective regions. The Inside Sales Team needs to see all accounts in Salesforce.How should an app builder accomplish this?",
      options: [
        "A. Set the Organization-Wide Default to Public for accounts. Create profiles for each Marketing Team, and create an Inside Sales Team role that is at the top of the Role Hierarchy.",
        'B. Set the Organization-Wide Default to Public for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team permission set with the "View All" setting for accounts.',
        'C. Set the Organization-Wide Default to Private for accounts. Create permission sets for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
        'D. Set the Organization-Wide Default to Private for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
      ],
      answer: "B",
      explanation: "",
      title: "Question 206",
    },
    {
      content:
        "The app builder has just created a Visual Workflow for the VP of Service.Which two Flow be accessed by users? (Choose two.)",
      options: [
        "A. Custom Button",
        "B. Quick Action",
        "C. Visual Workflow Launcher",
        "D. From a Process",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 207",
    },
    {
      content:
        "Which two metadata changes can be made directly in a production environment without deploying from a sandbox? (Choose two.)",
      options: [
        "A. Validation rules",
        "B. Apex Triggers",
        "C. Apex Classes",
        "D. Visualforce pages",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 208",
    },
    {
      content:
        "The Training team at Universal Containers uses a custom Training object to track their customer training sessions. An app builder needs to create a relationship between the Training object and the related Students' record.Which two statements are true when creating a Student Lookup field on the Training object? (Choose two.)",
      options: [
        "A. On Training record, the Student Lookup field can be made optional.",
        "B. On Student record, users can set up Roll-up summary field on Training records.",
        "C. On Training record, users can only delete Students, if they have access to it.",
        "D. Cross-object field updates between Training and Student records are not supported.",
      ],
      answer: "A,C",
      explanation: "",
      title: "Question 209",
    },
    {
      content:
        "An app builder would like to streamline the user experience by reflecting summarized calculations of specific fields on various objects.Which three field types could be used in roll-up summary fields to accomplish this? (Choose three.)",
      options: [
        "A. Checkbox",
        "B. Date",
        "C. Percent",
        "D. Time",
        "E. Currency",
      ],
      answer: "B,C,E",
      explanation: "",
      title: "Question 210",
    },
    {
      content:
        "Universal Containers manages internal projects by department using a custom object called Projects. Only employees in the project's respective department should have view access to all of the department's project records. If an employee changes job roles and moves to another department, the employee should no longer have access to the projects within their former department.Which two options will meet these requirements assuming the organization-wide default for Projects is set to Private? (Choose two.)",
      options: [
        "A. Create a criteria-based sharing rule using the Project's department that grants access to users by profiles.",
        "B. Create a criteria-based sharing rule using the Project's department that grants access to users by permission sets.",
        "C. Create a criteria-based sharing rule using the Project's department that grants access to users by roles.",
        "D. Create a criteria-based sharing rule using the Project's department that grants access to users by public groups.",
      ],
      answer: "C,D",
      explanation: "",
      title: "Question 211",
    },
    {
      content:
        "Universal Containers has a customer base where many customers have the same or similar company names.Which functionality should be configured to improve an end user's search experience? (Choose two.)",
      options: [
        "A. Update the account search layouts search filter fields.",
        "B. Update the account search layouts accounts tab columns displayed.",
        "C. Update the account search layouts search results columns displayed.",
        "D. Update the account search layouts list view filter settings.",
      ],
      answer: "B,C",
      explanation: "",
      title: "Question 212",
    },
    {
      content:
        "An app builder creates an Account validation rule on the Industry field that will throw an error if the length of the field is longer than 6 characters. Another app builder creates a workflow with a field update that sets the Industry field to Technology whenever the Billing City field is set to San Francisco.What will happen the next time a sales person saves an Account with a Billing City of San Francisco?",
      options: [
        "A. The record will save and the Industry field will change to Technology.",
        "B. The record will not save and no error message will be displayed.",
        "C. The record will not save the validation rule's error message will be displayed.",
        "D. The record will save but the Industry field will not change to Territory.",
      ],
      answer: "B",
      explanation: "",
      title: "Question 213",
    },
    {
      content: "What is a true statement when deleting a dashboard?",
      options: [
        "A. Deleting a dashboard also deletes the components within it. It does not delete the custom reports used by the components.",
        "B. Deleting a dashboard does not move the dashboard to the Recycle Bin and therefore the dashboard cannot be recovered.",
        "C. Deleting a dashboard also deletes the components within it as well as the custom reports used by the components.",
        "D. Deleting a dashboard requires a user to first edit the components to remove the underlying reports.",
      ],
      answer: "A",
      explanation: "",
      title: "Question 214",
    },
    {
      content:
        "A junction object has two Master-Detail relationships, a primary and a secondary master object.What happens to a junction object record when both associated master records are deleted?",
      options: [
        "A. The junction object record is permanently deleted and can't be restored.",
        "B. The delete operation cannot be performed on both master records.",
        "C. The delete operation is not allowed with Roll-up summary fields defined.",
        "D. The junction object records is deleted and placed in the recycle bin.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 215",
    },
    {
      content:
        "Universal Containers wants its Field Sales team to only see the accounts that they own. Separate North American and European marketing teams should only see accounts in their respective regions. The Inside Sales Team needs to see all accounts in Salesforce.How should an app builder accomplish this?",
      options: [
        "A. Set the Organization-Wide Default to Public for accounts. Create profiles for each Marketing Team, and create an Inside Sales Team role that is at the top of the Role Hierarchy.",
        'B. Set the Organization-Wide Default to Public for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team permission set with the "View All" setting for accounts.',
        'C. Set the Organization-Wide Default to Private for accounts. Create permission sets for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
        'D. Set the Organization-Wide Default to Private for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
      ],
      answer: "B",
      explanation: "",
      title: "Question 216",
    },
    {
      content:
        "The app builder has just created a Visual Workflow for the VP of Service.Which two Flow be accessed by users? (Choose two.)",
      options: [
        "A. Custom Button",
        "B. Quick Action",
        "C. Visual Workflow Launcher",
        "D. From a Process",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 217",
    },
    {
      content:
        "Which two metadata changes can be made directly in a production environment without deploying from a sandbox? (Choose two.)",
      options: [
        "A. Validation rules",
        "B. Apex Triggers",
        "C. Apex Classes",
        "D. Visualforce pages",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 218",
    },
    {
      content:
        "The Training team at Universal Containers uses a custom Training object to track their customer training sessions. An app builder needs to create a relationship between the Training object and the related Students' record.Which two statements are true when creating a Student Lookup field on the Training object? (Choose two.)",
      options: [
        "A. On Training record, the Student Lookup field can be made optional.",
        "B. On Student record, users can set up Roll-up summary field on Training records.",
        "C. On Training record, users can only delete Students, if they have access to it.",
        "D. Cross-object field updates between Training and Student records are not supported.",
      ],
      answer: "A,C",
      explanation: "",
      title: "Question 219",
    },
    {
      content:
        "An app builder would like to streamline the user experience by reflecting summarized calculations of specific fields on various objects.Which three field types could be used in roll-up summary fields to accomplish this? (Choose three.)",
      options: [
        "A. Checkbox",
        "B. Date",
        "C. Percent",
        "D. Time",
        "E. Currency",
      ],
      answer: "B,C,E",
      explanation: "",
      title: "Question 220",
    },
    {
      content:
        "Universal Containers manages internal projects by department using a custom object called Projects. Only employees in the project's respective department should have view access to all of the department's project records. If an employee changes job roles and moves to another department, the employee should no longer have access to the projects within their former department.Which two options will meet these requirements assuming the organization-wide default for Projects is set to Private? (Choose two.)",
      options: [
        "A. Create a criteria-based sharing rule using the Project's department that grants access to users by profiles.",
        "B. Create a criteria-based sharing rule using the Project's department that grants access to users by permission sets.",
        "C. Create a criteria-based sharing rule using the Project's department that grants access to users by roles.",
        "D. Create a criteria-based sharing rule using the Project's department that grants access to users by public groups.",
      ],
      answer: "C,D",
      explanation: "",
      title: "Question 221",
    },
    {
      content:
        "Universal Containers has a customer base where many customers have the same or similar company names.Which functionality should be configured to improve an end user's search experience? (Choose two.)",
      options: [
        "A. Update the account search layouts search filter fields.",
        "B. Update the account search layouts accounts tab columns displayed.",
        "C. Update the account search layouts search results columns displayed.",
        "D. Update the account search layouts list view filter settings.",
      ],
      answer: "B,C",
      explanation: "",
      title: "Question 222",
    },
    {
      content:
        "An app builder creates an Account validation rule on the Industry field that will throw an error if the length of the field is longer than 6 characters. Another app builder creates a workflow with a field update that sets the Industry field to Technology whenever the Billing City field is set to San Francisco.What will happen the next time a sales person saves an Account with a Billing City of San Francisco?",
      options: [
        "A. The record will save and the Industry field will change to Technology.",
        "B. The record will not save and no error message will be displayed.",
        "C. The record will not save the validation rule's error message will be displayed.",
        "D. The record will save but the Industry field will not change to Territory.",
      ],
      answer: "B",
      explanation: "",
      title: "Question 223",
    },
    {
      content: "What is a true statement when deleting a dashboard?",
      options: [
        "A. Deleting a dashboard also deletes the components within it. It does not delete the custom reports used by the components.",
        "B. Deleting a dashboard does not move the dashboard to the Recycle Bin and therefore the dashboard cannot be recovered.",
        "C. Deleting a dashboard also deletes the components within it as well as the custom reports used by the components.",
        "D. Deleting a dashboard requires a user to first edit the components to remove the underlying reports.",
      ],
      answer: "A",
      explanation: "",
      title: "Question 224",
    },
    {
      content:
        "A junction object has two Master-Detail relationships, a primary and a secondary master object.What happens to a junction object record when both associated master records are deleted?",
      options: [
        "A. The junction object record is permanently deleted and can't be restored.",
        "B. The delete operation cannot be performed on both master records.",
        "C. The delete operation is not allowed with Roll-up summary fields defined.",
        "D. The junction object records is deleted and placed in the recycle bin.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 225",
    },
    {
      content:
        "Universal Containers wants its Field Sales team to only see the accounts that they own. Separate North American and European marketing teams should only see accounts in their respective regions. The Inside Sales Team needs to see all accounts in Salesforce.How should an app builder accomplish this?",
      options: [
        "A. Set the Organization-Wide Default to Public for accounts. Create profiles for each Marketing Team, and create an Inside Sales Team role that is at the top of the Role Hierarchy.",
        'B. Set the Organization-Wide Default to Public for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team permission set with the "View All" setting for accounts.',
        'C. Set the Organization-Wide Default to Private for accounts. Create permission sets for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
        'D. Set the Organization-Wide Default to Private for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
      ],
      answer: "B",
      explanation: "",
      title: "Question 226",
    },
    {
      content:
        "The app builder has just created a Visual Workflow for the VP of Service.Which two Flow be accessed by users? (Choose two.)",
      options: [
        "A. Custom Button",
        "B. Quick Action",
        "C. Visual Workflow Launcher",
        "D. From a Process",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 227",
    },
    {
      content:
        "Which two metadata changes can be made directly in a production environment without deploying from a sandbox? (Choose two.)",
      options: [
        "A. Validation rules",
        "B. Apex Triggers",
        "C. Apex Classes",
        "D. Visualforce pages",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 228",
    },
    {
      content:
        "The Training team at Universal Containers uses a custom Training object to track their customer training sessions. An app builder needs to create a relationship between the Training object and the related Students' record.Which two statements are true when creating a Student Lookup field on the Training object? (Choose two.)",
      options: [
        "A. On Training record, the Student Lookup field can be made optional.",
        "B. On Student record, users can set up Roll-up summary field on Training records.",
        "C. On Training record, users can only delete Students, if they have access to it.",
        "D. Cross-object field updates between Training and Student records are not supported.",
      ],
      answer: "A,C",
      explanation: "",
      title: "Question 229",
    },
    {
      content:
        "An app builder would like to streamline the user experience by reflecting summarized calculations of specific fields on various objects.Which three field types could be used in roll-up summary fields to accomplish this? (Choose three.)",
      options: [
        "A. Checkbox",
        "B. Date",
        "C. Percent",
        "D. Time",
        "E. Currency",
      ],
      answer: "B,C,E",
      explanation: "",
      title: "Question 230",
    },
    {
      content:
        "Universal Containers manages internal projects by department using a custom object called Projects. Only employees in the project's respective department should have view access to all of the department's project records. If an employee changes job roles and moves to another department, the employee should no longer have access to the projects within their former department.Which two options will meet these requirements assuming the organization-wide default for Projects is set to Private? (Choose two.)",
      options: [
        "A. Create a criteria-based sharing rule using the Project's department that grants access to users by profiles.",
        "B. Create a criteria-based sharing rule using the Project's department that grants access to users by permission sets.",
        "C. Create a criteria-based sharing rule using the Project's department that grants access to users by roles.",
        "D. Create a criteria-based sharing rule using the Project's department that grants access to users by public groups.",
      ],
      answer: "C,D",
      explanation: "",
      title: "Question 231",
    },
    {
      content:
        "Universal Containers has a customer base where many customers have the same or similar company names.Which functionality should be configured to improve an end user's search experience? (Choose two.)",
      options: [
        "A. Update the account search layouts search filter fields.",
        "B. Update the account search layouts accounts tab columns displayed.",
        "C. Update the account search layouts search results columns displayed.",
        "D. Update the account search layouts list view filter settings.",
      ],
      answer: "B,C",
      explanation: "",
      title: "Question 232",
    },
    {
      content:
        "An app builder creates an Account validation rule on the Industry field that will throw an error if the length of the field is longer than 6 characters. Another app builder creates a workflow with a field update that sets the Industry field to Technology whenever the Billing City field is set to San Francisco.What will happen the next time a sales person saves an Account with a Billing City of San Francisco?",
      options: [
        "A. The record will save and the Industry field will change to Technology.",
        "B. The record will not save and no error message will be displayed.",
        "C. The record will not save the validation rule's error message will be displayed.",
        "D. The record will save but the Industry field will not change to Territory.",
      ],
      answer: "B",
      explanation: "",
      title: "Question 233",
    },
    {
      content: "What is a true statement when deleting a dashboard?",
      options: [
        "A. Deleting a dashboard also deletes the components within it. It does not delete the custom reports used by the components.",
        "B. Deleting a dashboard does not move the dashboard to the Recycle Bin and therefore the dashboard cannot be recovered.",
        "C. Deleting a dashboard also deletes the components within it as well as the custom reports used by the components.",
        "D. Deleting a dashboard requires a user to first edit the components to remove the underlying reports.",
      ],
      answer: "A",
      explanation: "",
      title: "Question 234",
    },
    {
      content:
        "A junction object has two Master-Detail relationships, a primary and a secondary master object.What happens to a junction object record when both associated master records are deleted?",
      options: [
        "A. The junction object record is permanently deleted and can't be restored.",
        "B. The delete operation cannot be performed on both master records.",
        "C. The delete operation is not allowed with Roll-up summary fields defined.",
        "D. The junction object records is deleted and placed in the recycle bin.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 235",
    },
    {
      content:
        "Universal Containers wants its Field Sales team to only see the accounts that they own. Separate North American and European marketing teams should only see accounts in their respective regions. The Inside Sales Team needs to see all accounts in Salesforce.How should an app builder accomplish this?",
      options: [
        "A. Set the Organization-Wide Default to Public for accounts. Create profiles for each Marketing Team, and create an Inside Sales Team role that is at the top of the Role Hierarchy.",
        'B. Set the Organization-Wide Default to Public for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team permission set with the "View All" setting for accounts.',
        'C. Set the Organization-Wide Default to Private for accounts. Create permission sets for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
        'D. Set the Organization-Wide Default to Private for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
      ],
      answer: "B",
      explanation: "",
      title: "Question 236",
    },
    {
      content:
        "The app builder has just created a Visual Workflow for the VP of Service.Which two Flow be accessed by users? (Choose two.)",
      options: [
        "A. Custom Button",
        "B. Quick Action",
        "C. Visual Workflow Launcher",
        "D. From a Process",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 237",
    },
    {
      content:
        "Which two metadata changes can be made directly in a production environment without deploying from a sandbox? (Choose two.)",
      options: [
        "A. Validation rules",
        "B. Apex Triggers",
        "C. Apex Classes",
        "D. Visualforce pages",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 238",
    },
    {
      content:
        "The Training team at Universal Containers uses a custom Training object to track their customer training sessions. An app builder needs to create a relationship between the Training object and the related Students' record.Which two statements are true when creating a Student Lookup field on the Training object? (Choose two.)",
      options: [
        "A. On Training record, the Student Lookup field can be made optional.",
        "B. On Student record, users can set up Roll-up summary field on Training records.",
        "C. On Training record, users can only delete Students, if they have access to it.",
        "D. Cross-object field updates between Training and Student records are not supported.",
      ],
      answer: "A,C",
      explanation: "",
      title: "Question 239",
    },
    {
      content:
        "An app builder would like to streamline the user experience by reflecting summarized calculations of specific fields on various objects.Which three field types could be used in roll-up summary fields to accomplish this? (Choose three.)",
      options: [
        "A. Checkbox",
        "B. Date",
        "C. Percent",
        "D. Time",
        "E. Currency",
      ],
      answer: "B,C,E",
      explanation: "",
      title: "Question 240",
    },
    {
      content:
        "Universal Containers manages internal projects by department using a custom object called Projects. Only employees in the project's respective department should have view access to all of the department's project records. If an employee changes job roles and moves to another department, the employee should no longer have access to the projects within their former department.Which two options will meet these requirements assuming the organization-wide default for Projects is set to Private? (Choose two.)",
      options: [
        "A. Create a criteria-based sharing rule using the Project's department that grants access to users by profiles.",
        "B. Create a criteria-based sharing rule using the Project's department that grants access to users by permission sets.",
        "C. Create a criteria-based sharing rule using the Project's department that grants access to users by roles.",
        "D. Create a criteria-based sharing rule using the Project's department that grants access to users by public groups.",
      ],
      answer: "C,D",
      explanation: "",
      title: "Question 241",
    },
    {
      content:
        "Universal Containers has a customer base where many customers have the same or similar company names.Which functionality should be configured to improve an end user's search experience? (Choose two.)",
      options: [
        "A. Update the account search layouts search filter fields.",
        "B. Update the account search layouts accounts tab columns displayed.",
        "C. Update the account search layouts search results columns displayed.",
        "D. Update the account search layouts list view filter settings.",
      ],
      answer: "B,C",
      explanation: "",
      title: "Question 242",
    },
    {
      content:
        "An app builder creates an Account validation rule on the Industry field that will throw an error if the length of the field is longer than 6 characters. Another app builder creates a workflow with a field update that sets the Industry field to Technology whenever the Billing City field is set to San Francisco.What will happen the next time a sales person saves an Account with a Billing City of San Francisco?",
      options: [
        "A. The record will save and the Industry field will change to Technology.",
        "B. The record will not save and no error message will be displayed.",
        "C. The record will not save the validation rule's error message will be displayed.",
        "D. The record will save but the Industry field will not change to Territory.",
      ],
      answer: "B",
      explanation: "",
      title: "Question 243",
    },
    {
      content: "What is a true statement when deleting a dashboard?",
      options: [
        "A. Deleting a dashboard also deletes the components within it. It does not delete the custom reports used by the components.",
        "B. Deleting a dashboard does not move the dashboard to the Recycle Bin and therefore the dashboard cannot be recovered.",
        "C. Deleting a dashboard also deletes the components within it as well as the custom reports used by the components.",
        "D. Deleting a dashboard requires a user to first edit the components to remove the underlying reports.",
      ],
      answer: "A",
      explanation: "",
      title: "Question 244",
    },
    {
      content:
        "A junction object has two Master-Detail relationships, a primary and a secondary master object.What happens to a junction object record when both associated master records are deleted?",
      options: [
        "A. The junction object record is permanently deleted and can't be restored.",
        "B. The delete operation cannot be performed on both master records.",
        "C. The delete operation is not allowed with Roll-up summary fields defined.",
        "D. The junction object records is deleted and placed in the recycle bin.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 245",
    },
    {
      content:
        "Universal Containers wants its Field Sales team to only see the accounts that they own. Separate North American and European marketing teams should only see accounts in their respective regions. The Inside Sales Team needs to see all accounts in Salesforce.How should an app builder accomplish this?",
      options: [
        "A. Set the Organization-Wide Default to Public for accounts. Create profiles for each Marketing Team, and create an Inside Sales Team role that is at the top of the Role Hierarchy.",
        'B. Set the Organization-Wide Default to Public for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team permission set with the "View All" setting for accounts.',
        'C. Set the Organization-Wide Default to Private for accounts. Create permission sets for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
        'D. Set the Organization-Wide Default to Private for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
      ],
      answer: "B",
      explanation: "",
      title: "Question 246",
    },
    {
      content:
        "The app builder has just created a Visual Workflow for the VP of Service.Which two Flow be accessed by users? (Choose two.)",
      options: [
        "A. Custom Button",
        "B. Quick Action",
        "C. Visual Workflow Launcher",
        "D. From a Process",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 247",
    },
    {
      content:
        "Which two metadata changes can be made directly in a production environment without deploying from a sandbox? (Choose two.)",
      options: [
        "A. Validation rules",
        "B. Apex Triggers",
        "C. Apex Classes",
        "D. Visualforce pages",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 248",
    },
    {
      content:
        "The Training team at Universal Containers uses a custom Training object to track their customer training sessions. An app builder needs to create a relationship between the Training object and the related Students' record.Which two statements are true when creating a Student Lookup field on the Training object? (Choose two.)",
      options: [
        "A. On Training record, the Student Lookup field can be made optional.",
        "B. On Student record, users can set up Roll-up summary field on Training records.",
        "C. On Training record, users can only delete Students, if they have access to it.",
        "D. Cross-object field updates between Training and Student records are not supported.",
      ],
      answer: "A,C",
      explanation: "",
      title: "Question 249",
    },
    {
      content:
        "An app builder would like to streamline the user experience by reflecting summarized calculations of specific fields on various objects.Which three field types could be used in roll-up summary fields to accomplish this? (Choose three.)",
      options: [
        "A. Checkbox",
        "B. Date",
        "C. Percent",
        "D. Time",
        "E. Currency",
      ],
      answer: "B,C,E",
      explanation: "",
      title: "Question 250",
    },
    {
      content:
        "Universal Containers manages internal projects by department using a custom object called Projects. Only employees in the project's respective department should have view access to all of the department's project records. If an employee changes job roles and moves to another department, the employee should no longer have access to the projects within their former department.Which two options will meet these requirements assuming the organization-wide default for Projects is set to Private? (Choose two.)",
      options: [
        "A. Create a criteria-based sharing rule using the Project's department that grants access to users by profiles.",
        "B. Create a criteria-based sharing rule using the Project's department that grants access to users by permission sets.",
        "C. Create a criteria-based sharing rule using the Project's department that grants access to users by roles.",
        "D. Create a criteria-based sharing rule using the Project's department that grants access to users by public groups.",
      ],
      answer: "C,D",
      explanation: "",
      title: "Question 251",
    },
    {
      content:
        "Universal Containers has a customer base where many customers have the same or similar company names.Which functionality should be configured to improve an end user's search experience? (Choose two.)",
      options: [
        "A. Update the account search layouts search filter fields.",
        "B. Update the account search layouts accounts tab columns displayed.",
        "C. Update the account search layouts search results columns displayed.",
        "D. Update the account search layouts list view filter settings.",
      ],
      answer: "B,C",
      explanation: "",
      title: "Question 252",
    },
    {
      content:
        "An app builder creates an Account validation rule on the Industry field that will throw an error if the length of the field is longer than 6 characters. Another app builder creates a workflow with a field update that sets the Industry field to Technology whenever the Billing City field is set to San Francisco.What will happen the next time a sales person saves an Account with a Billing City of San Francisco?",
      options: [
        "A. The record will save and the Industry field will change to Technology.",
        "B. The record will not save and no error message will be displayed.",
        "C. The record will not save the validation rule's error message will be displayed.",
        "D. The record will save but the Industry field will not change to Territory.",
      ],
      answer: "B",
      explanation: "",
      title: "Question 253",
    },
    {
      content: "What is a true statement when deleting a dashboard?",
      options: [
        "A. Deleting a dashboard also deletes the components within it. It does not delete the custom reports used by the components.",
        "B. Deleting a dashboard does not move the dashboard to the Recycle Bin and therefore the dashboard cannot be recovered.",
        "C. Deleting a dashboard also deletes the components within it as well as the custom reports used by the components.",
        "D. Deleting a dashboard requires a user to first edit the components to remove the underlying reports.",
      ],
      answer: "A",
      explanation: "",
      title: "Question 254",
    },
    {
      content:
        "A junction object has two Master-Detail relationships, a primary and a secondary master object.What happens to a junction object record when both associated master records are deleted?",
      options: [
        "A. The junction object record is permanently deleted and can't be restored.",
        "B. The delete operation cannot be performed on both master records.",
        "C. The delete operation is not allowed with Roll-up summary fields defined.",
        "D. The junction object records is deleted and placed in the recycle bin.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 255",
    },
    {
      content:
        "Universal Containers wants its Field Sales team to only see the accounts that they own. Separate North American and European marketing teams should only see accounts in their respective regions. The Inside Sales Team needs to see all accounts in Salesforce.How should an app builder accomplish this?",
      options: [
        "A. Set the Organization-Wide Default to Public for accounts. Create profiles for each Marketing Team, and create an Inside Sales Team role that is at the top of the Role Hierarchy.",
        'B. Set the Organization-Wide Default to Public for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team permission set with the "View All" setting for accounts.',
        'C. Set the Organization-Wide Default to Private for accounts. Create permission sets for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
        'D. Set the Organization-Wide Default to Private for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
      ],
      answer: "B",
      explanation: "",
      title: "Question 256",
    },
    {
      content:
        "The app builder has just created a Visual Workflow for the VP of Service.Which two Flow be accessed by users? (Choose two.)",
      options: [
        "A. Custom Button",
        "B. Quick Action",
        "C. Visual Workflow Launcher",
        "D. From a Process",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 257",
    },
    {
      content:
        "Which two metadata changes can be made directly in a production environment without deploying from a sandbox? (Choose two.)",
      options: [
        "A. Validation rules",
        "B. Apex Triggers",
        "C. Apex Classes",
        "D. Visualforce pages",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 258",
    },
    {
      content:
        "The Training team at Universal Containers uses a custom Training object to track their customer training sessions. An app builder needs to create a relationship between the Training object and the related Students' record.Which two statements are true when creating a Student Lookup field on the Training object? (Choose two.)",
      options: [
        "A. On Training record, the Student Lookup field can be made optional.",
        "B. On Student record, users can set up Roll-up summary field on Training records.",
        "C. On Training record, users can only delete Students, if they have access to it.",
        "D. Cross-object field updates between Training and Student records are not supported.",
      ],
      answer: "A,C",
      explanation: "",
      title: "Question 259",
    },
    {
      content:
        "An app builder would like to streamline the user experience by reflecting summarized calculations of specific fields on various objects.Which three field types could be used in roll-up summary fields to accomplish this? (Choose three.)",
      options: [
        "A. Checkbox",
        "B. Date",
        "C. Percent",
        "D. Time",
        "E. Currency",
      ],
      answer: "B,C,E",
      explanation: "",
      title: "Question 260",
    },
    {
      content:
        "Universal Containers manages internal projects by department using a custom object called Projects. Only employees in the project's respective department should have view access to all of the department's project records. If an employee changes job roles and moves to another department, the employee should no longer have access to the projects within their former department.Which two options will meet these requirements assuming the organization-wide default for Projects is set to Private? (Choose two.)",
      options: [
        "A. Create a criteria-based sharing rule using the Project's department that grants access to users by profiles.",
        "B. Create a criteria-based sharing rule using the Project's department that grants access to users by permission sets.",
        "C. Create a criteria-based sharing rule using the Project's department that grants access to users by roles.",
        "D. Create a criteria-based sharing rule using the Project's department that grants access to users by public groups.",
      ],
      answer: "C,D",
      explanation: "",
      title: "Question 261",
    },
    {
      content:
        "Universal Containers has a customer base where many customers have the same or similar company names.Which functionality should be configured to improve an end user's search experience? (Choose two.)",
      options: [
        "A. Update the account search layouts search filter fields.",
        "B. Update the account search layouts accounts tab columns displayed.",
        "C. Update the account search layouts search results columns displayed.",
        "D. Update the account search layouts list view filter settings.",
      ],
      answer: "B,C",
      explanation: "",
      title: "Question 262",
    },
    {
      content:
        "An app builder creates an Account validation rule on the Industry field that will throw an error if the length of the field is longer than 6 characters. Another app builder creates a workflow with a field update that sets the Industry field to Technology whenever the Billing City field is set to San Francisco.What will happen the next time a sales person saves an Account with a Billing City of San Francisco?",
      options: [
        "A. The record will save and the Industry field will change to Technology.",
        "B. The record will not save and no error message will be displayed.",
        "C. The record will not save the validation rule's error message will be displayed.",
        "D. The record will save but the Industry field will not change to Territory.",
      ],
      answer: "B",
      explanation: "",
      title: "Question 263",
    },
    {
      content: "What is a true statement when deleting a dashboard?",
      options: [
        "A. Deleting a dashboard also deletes the components within it. It does not delete the custom reports used by the components.",
        "B. Deleting a dashboard does not move the dashboard to the Recycle Bin and therefore the dashboard cannot be recovered.",
        "C. Deleting a dashboard also deletes the components within it as well as the custom reports used by the components.",
        "D. Deleting a dashboard requires a user to first edit the components to remove the underlying reports.",
      ],
      answer: "A",
      explanation: "",
      title: "Question 264",
    },
    {
      content:
        "A junction object has two Master-Detail relationships, a primary and a secondary master object.What happens to a junction object record when both associated master records are deleted?",
      options: [
        "A. The junction object record is permanently deleted and can't be restored.",
        "B. The delete operation cannot be performed on both master records.",
        "C. The delete operation is not allowed with Roll-up summary fields defined.",
        "D. The junction object records is deleted and placed in the recycle bin.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 265",
    },
    {
      content:
        "Universal Containers wants its Field Sales team to only see the accounts that they own. Separate North American and European marketing teams should only see accounts in their respective regions. The Inside Sales Team needs to see all accounts in Salesforce.How should an app builder accomplish this?",
      options: [
        "A. Set the Organization-Wide Default to Public for accounts. Create profiles for each Marketing Team, and create an Inside Sales Team role that is at the top of the Role Hierarchy.",
        'B. Set the Organization-Wide Default to Public for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team permission set with the "View All" setting for accounts.',
        'C. Set the Organization-Wide Default to Private for accounts. Create permission sets for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
        'D. Set the Organization-Wide Default to Private for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
      ],
      answer: "B",
      explanation: "",
      title: "Question 266",
    },
    {
      content:
        "The app builder has just created a Visual Workflow for the VP of Service.Which two Flow be accessed by users? (Choose two.)",
      options: [
        "A. Custom Button",
        "B. Quick Action",
        "C. Visual Workflow Launcher",
        "D. From a Process",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 267",
    },
    {
      content:
        "Which two metadata changes can be made directly in a production environment without deploying from a sandbox? (Choose two.)",
      options: [
        "A. Validation rules",
        "B. Apex Triggers",
        "C. Apex Classes",
        "D. Visualforce pages",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 268",
    },
    {
      content:
        "The Training team at Universal Containers uses a custom Training object to track their customer training sessions. An app builder needs to create a relationship between the Training object and the related Students' record.Which two statements are true when creating a Student Lookup field on the Training object? (Choose two.)",
      options: [
        "A. On Training record, the Student Lookup field can be made optional.",
        "B. On Student record, users can set up Roll-up summary field on Training records.",
        "C. On Training record, users can only delete Students, if they have access to it.",
        "D. Cross-object field updates between Training and Student records are not supported.",
      ],
      answer: "A,C",
      explanation: "",
      title: "Question 269",
    },
    {
      content:
        "An app builder would like to streamline the user experience by reflecting summarized calculations of specific fields on various objects.Which three field types could be used in roll-up summary fields to accomplish this? (Choose three.)",
      options: [
        "A. Checkbox",
        "B. Date",
        "C. Percent",
        "D. Time",
        "E. Currency",
      ],
      answer: "B,C,E",
      explanation: "",
      title: "Question 270",
    },
    {
      content:
        "Universal Containers manages internal projects by department using a custom object called Projects. Only employees in the project's respective department should have view access to all of the department's project records. If an employee changes job roles and moves to another department, the employee should no longer have access to the projects within their former department.Which two options will meet these requirements assuming the organization-wide default for Projects is set to Private? (Choose two.)",
      options: [
        "A. Create a criteria-based sharing rule using the Project's department that grants access to users by profiles.",
        "B. Create a criteria-based sharing rule using the Project's department that grants access to users by permission sets.",
        "C. Create a criteria-based sharing rule using the Project's department that grants access to users by roles.",
        "D. Create a criteria-based sharing rule using the Project's department that grants access to users by public groups.",
      ],
      answer: "C,D",
      explanation: "",
      title: "Question 271",
    },
    {
      content:
        "Universal Containers has a customer base where many customers have the same or similar company names.Which functionality should be configured to improve an end user's search experience? (Choose two.)",
      options: [
        "A. Update the account search layouts search filter fields.",
        "B. Update the account search layouts accounts tab columns displayed.",
        "C. Update the account search layouts search results columns displayed.",
        "D. Update the account search layouts list view filter settings.",
      ],
      answer: "B,C",
      explanation: "",
      title: "Question 272",
    },
    {
      content:
        "An app builder creates an Account validation rule on the Industry field that will throw an error if the length of the field is longer than 6 characters. Another app builder creates a workflow with a field update that sets the Industry field to Technology whenever the Billing City field is set to San Francisco.What will happen the next time a sales person saves an Account with a Billing City of San Francisco?",
      options: [
        "A. The record will save and the Industry field will change to Technology.",
        "B. The record will not save and no error message will be displayed.",
        "C. The record will not save the validation rule's error message will be displayed.",
        "D. The record will save but the Industry field will not change to Territory.",
      ],
      answer: "B",
      explanation: "",
      title: "Question 273",
    },
    {
      content: "What is a true statement when deleting a dashboard?",
      options: [
        "A. Deleting a dashboard also deletes the components within it. It does not delete the custom reports used by the components.",
        "B. Deleting a dashboard does not move the dashboard to the Recycle Bin and therefore the dashboard cannot be recovered.",
        "C. Deleting a dashboard also deletes the components within it as well as the custom reports used by the components.",
        "D. Deleting a dashboard requires a user to first edit the components to remove the underlying reports.",
      ],
      answer: "A",
      explanation: "",
      title: "Question 274",
    },
    {
      content:
        "A junction object has two Master-Detail relationships, a primary and a secondary master object.What happens to a junction object record when both associated master records are deleted?",
      options: [
        "A. The junction object record is permanently deleted and can't be restored.",
        "B. The delete operation cannot be performed on both master records.",
        "C. The delete operation is not allowed with Roll-up summary fields defined.",
        "D. The junction object records is deleted and placed in the recycle bin.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 275",
    },
    {
      content:
        "Universal Containers wants its Field Sales team to only see the accounts that they own. Separate North American and European marketing teams should only see accounts in their respective regions. The Inside Sales Team needs to see all accounts in Salesforce.How should an app builder accomplish this?",
      options: [
        "A. Set the Organization-Wide Default to Public for accounts. Create profiles for each Marketing Team, and create an Inside Sales Team role that is at the top of the Role Hierarchy.",
        'B. Set the Organization-Wide Default to Public for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team permission set with the "View All" setting for accounts.',
        'C. Set the Organization-Wide Default to Private for accounts. Create permission sets for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
        'D. Set the Organization-Wide Default to Private for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
      ],
      answer: "B",
      explanation: "",
      title: "Question 276",
    },
    {
      content:
        "The app builder has just created a Visual Workflow for the VP of Service.Which two Flow be accessed by users? (Choose two.)",
      options: [
        "A. Custom Button",
        "B. Quick Action",
        "C. Visual Workflow Launcher",
        "D. From a Process",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 277",
    },
    {
      content:
        "Which two metadata changes can be made directly in a production environment without deploying from a sandbox? (Choose two.)",
      options: [
        "A. Validation rules",
        "B. Apex Triggers",
        "C. Apex Classes",
        "D. Visualforce pages",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 278",
    },
    {
      content:
        "The Training team at Universal Containers uses a custom Training object to track their customer training sessions. An app builder needs to create a relationship between the Training object and the related Students' record.Which two statements are true when creating a Student Lookup field on the Training object? (Choose two.)",
      options: [
        "A. On Training record, the Student Lookup field can be made optional.",
        "B. On Student record, users can set up Roll-up summary field on Training records.",
        "C. On Training record, users can only delete Students, if they have access to it.",
        "D. Cross-object field updates between Training and Student records are not supported.",
      ],
      answer: "A,C",
      explanation: "",
      title: "Question 279",
    },
    {
      content:
        "An app builder would like to streamline the user experience by reflecting summarized calculations of specific fields on various objects.Which three field types could be used in roll-up summary fields to accomplish this? (Choose three.)",
      options: [
        "A. Checkbox",
        "B. Date",
        "C. Percent",
        "D. Time",
        "E. Currency",
      ],
      answer: "B,C,E",
      explanation: "",
      title: "Question 280",
    },
    {
      content:
        "Universal Containers manages internal projects by department using a custom object called Projects. Only employees in the project's respective department should have view access to all of the department's project records. If an employee changes job roles and moves to another department, the employee should no longer have access to the projects within their former department.Which two options will meet these requirements assuming the organization-wide default for Projects is set to Private? (Choose two.)",
      options: [
        "A. Create a criteria-based sharing rule using the Project's department that grants access to users by profiles.",
        "B. Create a criteria-based sharing rule using the Project's department that grants access to users by permission sets.",
        "C. Create a criteria-based sharing rule using the Project's department that grants access to users by roles.",
        "D. Create a criteria-based sharing rule using the Project's department that grants access to users by public groups.",
      ],
      answer: "C,D",
      explanation: "",
      title: "Question 281",
    },
    {
      content:
        "Universal Containers has a customer base where many customers have the same or similar company names.Which functionality should be configured to improve an end user's search experience? (Choose two.)",
      options: [
        "A. Update the account search layouts search filter fields.",
        "B. Update the account search layouts accounts tab columns displayed.",
        "C. Update the account search layouts search results columns displayed.",
        "D. Update the account search layouts list view filter settings.",
      ],
      answer: "B,C",
      explanation: "",
      title: "Question 282",
    },
    {
      content:
        "An app builder creates an Account validation rule on the Industry field that will throw an error if the length of the field is longer than 6 characters. Another app builder creates a workflow with a field update that sets the Industry field to Technology whenever the Billing City field is set to San Francisco.What will happen the next time a sales person saves an Account with a Billing City of San Francisco?",
      options: [
        "A. The record will save and the Industry field will change to Technology.",
        "B. The record will not save and no error message will be displayed.",
        "C. The record will not save the validation rule's error message will be displayed.",
        "D. The record will save but the Industry field will not change to Territory.",
      ],
      answer: "B",
      explanation: "",
      title: "Question 283",
    },
    {
      content: "What is a true statement when deleting a dashboard?",
      options: [
        "A. Deleting a dashboard also deletes the components within it. It does not delete the custom reports used by the components.",
        "B. Deleting a dashboard does not move the dashboard to the Recycle Bin and therefore the dashboard cannot be recovered.",
        "C. Deleting a dashboard also deletes the components within it as well as the custom reports used by the components.",
        "D. Deleting a dashboard requires a user to first edit the components to remove the underlying reports.",
      ],
      answer: "A",
      explanation: "",
      title: "Question 284",
    },
    {
      content:
        "A junction object has two Master-Detail relationships, a primary and a secondary master object.What happens to a junction object record when both associated master records are deleted?",
      options: [
        "A. The junction object record is permanently deleted and can't be restored.",
        "B. The delete operation cannot be performed on both master records.",
        "C. The delete operation is not allowed with Roll-up summary fields defined.",
        "D. The junction object records is deleted and placed in the recycle bin.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 285",
    },
    {
      content:
        "Universal Containers wants its Field Sales team to only see the accounts that they own. Separate North American and European marketing teams should only see accounts in their respective regions. The Inside Sales Team needs to see all accounts in Salesforce.How should an app builder accomplish this?",
      options: [
        "A. Set the Organization-Wide Default to Public for accounts. Create profiles for each Marketing Team, and create an Inside Sales Team role that is at the top of the Role Hierarchy.",
        'B. Set the Organization-Wide Default to Public for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team permission set with the "View All" setting for accounts.',
        'C. Set the Organization-Wide Default to Private for accounts. Create permission sets for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
        'D. Set the Organization-Wide Default to Private for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
      ],
      answer: "B",
      explanation: "",
      title: "Question 286",
    },
    {
      content:
        "The app builder has just created a Visual Workflow for the VP of Service.Which two Flow be accessed by users? (Choose two.)",
      options: [
        "A. Custom Button",
        "B. Quick Action",
        "C. Visual Workflow Launcher",
        "D. From a Process",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 287",
    },
    {
      content:
        "Which two metadata changes can be made directly in a production environment without deploying from a sandbox? (Choose two.)",
      options: [
        "A. Validation rules",
        "B. Apex Triggers",
        "C. Apex Classes",
        "D. Visualforce pages",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 288",
    },
    {
      content:
        "The Training team at Universal Containers uses a custom Training object to track their customer training sessions. An app builder needs to create a relationship between the Training object and the related Students' record.Which two statements are true when creating a Student Lookup field on the Training object? (Choose two.)",
      options: [
        "A. On Training record, the Student Lookup field can be made optional.",
        "B. On Student record, users can set up Roll-up summary field on Training records.",
        "C. On Training record, users can only delete Students, if they have access to it.",
        "D. Cross-object field updates between Training and Student records are not supported.",
      ],
      answer: "A,C",
      explanation: "",
      title: "Question 289",
    },
    {
      content:
        "An app builder would like to streamline the user experience by reflecting summarized calculations of specific fields on various objects.Which three field types could be used in roll-up summary fields to accomplish this? (Choose three.)",
      options: [
        "A. Checkbox",
        "B. Date",
        "C. Percent",
        "D. Time",
        "E. Currency",
      ],
      answer: "B,C,E",
      explanation: "",
      title: "Question 290",
    },
    {
      content:
        "Universal Containers manages internal projects by department using a custom object called Projects. Only employees in the project's respective department should have view access to all of the department's project records. If an employee changes job roles and moves to another department, the employee should no longer have access to the projects within their former department.Which two options will meet these requirements assuming the organization-wide default for Projects is set to Private? (Choose two.)",
      options: [
        "A. Create a criteria-based sharing rule using the Project's department that grants access to users by profiles.",
        "B. Create a criteria-based sharing rule using the Project's department that grants access to users by permission sets.",
        "C. Create a criteria-based sharing rule using the Project's department that grants access to users by roles.",
        "D. Create a criteria-based sharing rule using the Project's department that grants access to users by public groups.",
      ],
      answer: "C,D",
      explanation: "",
      title: "Question 291",
    },
    {
      content:
        "Universal Containers has a customer base where many customers have the same or similar company names.Which functionality should be configured to improve an end user's search experience? (Choose two.)",
      options: [
        "A. Update the account search layouts search filter fields.",
        "B. Update the account search layouts accounts tab columns displayed.",
        "C. Update the account search layouts search results columns displayed.",
        "D. Update the account search layouts list view filter settings.",
      ],
      answer: "B,C",
      explanation: "",
      title: "Question 292",
    },
    {
      content:
        "An app builder creates an Account validation rule on the Industry field that will throw an error if the length of the field is longer than 6 characters. Another app builder creates a workflow with a field update that sets the Industry field to Technology whenever the Billing City field is set to San Francisco.What will happen the next time a sales person saves an Account with a Billing City of San Francisco?",
      options: [
        "A. The record will save and the Industry field will change to Technology.",
        "B. The record will not save and no error message will be displayed.",
        "C. The record will not save the validation rule's error message will be displayed.",
        "D. The record will save but the Industry field will not change to Territory.",
      ],
      answer: "B",
      explanation: "",
      title: "Question 293",
    },
    {
      content: "What is a true statement when deleting a dashboard?",
      options: [
        "A. Deleting a dashboard also deletes the components within it. It does not delete the custom reports used by the components.",
        "B. Deleting a dashboard does not move the dashboard to the Recycle Bin and therefore the dashboard cannot be recovered.",
        "C. Deleting a dashboard also deletes the components within it as well as the custom reports used by the components.",
        "D. Deleting a dashboard requires a user to first edit the components to remove the underlying reports.",
      ],
      answer: "A",
      explanation: "",
      title: "Question 294",
    },
    {
      content:
        "A junction object has two Master-Detail relationships, a primary and a secondary master object.What happens to a junction object record when both associated master records are deleted?",
      options: [
        "A. The junction object record is permanently deleted and can't be restored.",
        "B. The delete operation cannot be performed on both master records.",
        "C. The delete operation is not allowed with Roll-up summary fields defined.",
        "D. The junction object records is deleted and placed in the recycle bin.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 295",
    },
    {
      content:
        "Universal Containers wants its Field Sales team to only see the accounts that they own. Separate North American and European marketing teams should only see accounts in their respective regions. The Inside Sales Team needs to see all accounts in Salesforce.How should an app builder accomplish this?",
      options: [
        "A. Set the Organization-Wide Default to Public for accounts. Create profiles for each Marketing Team, and create an Inside Sales Team role that is at the top of the Role Hierarchy.",
        'B. Set the Organization-Wide Default to Public for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team permission set with the "View All" setting for accounts.',
        'C. Set the Organization-Wide Default to Private for accounts. Create permission sets for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
        'D. Set the Organization-Wide Default to Private for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
      ],
      answer: "B",
      explanation: "",
      title: "Question 296",
    },
    {
      content:
        "The app builder has just created a Visual Workflow for the VP of Service.Which two Flow be accessed by users? (Choose two.)",
      options: [
        "A. Custom Button",
        "B. Quick Action",
        "C. Visual Workflow Launcher",
        "D. From a Process",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 297",
    },
    {
      content:
        "Which two metadata changes can be made directly in a production environment without deploying from a sandbox? (Choose two.)",
      options: [
        "A. Validation rules",
        "B. Apex Triggers",
        "C. Apex Classes",
        "D. Visualforce pages",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 298",
    },
    {
      content:
        "The Training team at Universal Containers uses a custom Training object to track their customer training sessions. An app builder needs to create a relationship between the Training object and the related Students' record.Which two statements are true when creating a Student Lookup field on the Training object? (Choose two.)",
      options: [
        "A. On Training record, the Student Lookup field can be made optional.",
        "B. On Student record, users can set up Roll-up summary field on Training records.",
        "C. On Training record, users can only delete Students, if they have access to it.",
        "D. Cross-object field updates between Training and Student records are not supported.",
      ],
      answer: "A,C",
      explanation: "",
      title: "Question 299",
    },
    {
      content:
        "An app builder would like to streamline the user experience by reflecting summarized calculations of specific fields on various objects.Which three field types could be used in roll-up summary fields to accomplish this? (Choose three.)",
      options: [
        "A. Checkbox",
        "B. Date",
        "C. Percent",
        "D. Time",
        "E. Currency",
      ],
      answer: "B,C,E",
      explanation: "",
      title: "Question 300",
    },
    {
      content:
        "Universal Containers manages internal projects by department using a custom object called Projects. Only employees in the project's respective department should have view access to all of the department's project records. If an employee changes job roles and moves to another department, the employee should no longer have access to the projects within their former department.Which two options will meet these requirements assuming the organization-wide default for Projects is set to Private? (Choose two.)",
      options: [
        "A. Create a criteria-based sharing rule using the Project's department that grants access to users by profiles.",
        "B. Create a criteria-based sharing rule using the Project's department that grants access to users by permission sets.",
        "C. Create a criteria-based sharing rule using the Project's department that grants access to users by roles.",
        "D. Create a criteria-based sharing rule using the Project's department that grants access to users by public groups.",
      ],
      answer: "C,D",
      explanation: "",
      title: "Question 301",
    },
    {
      content:
        "Universal Containers has a customer base where many customers have the same or similar company names.Which functionality should be configured to improve an end user's search experience? (Choose two.)",
      options: [
        "A. Update the account search layouts search filter fields.",
        "B. Update the account search layouts accounts tab columns displayed.",
        "C. Update the account search layouts search results columns displayed.",
        "D. Update the account search layouts list view filter settings.",
      ],
      answer: "B,C",
      explanation: "",
      title: "Question 302",
    },
    {
      content:
        "An app builder creates an Account validation rule on the Industry field that will throw an error if the length of the field is longer than 6 characters. Another app builder creates a workflow with a field update that sets the Industry field to Technology whenever the Billing City field is set to San Francisco.What will happen the next time a sales person saves an Account with a Billing City of San Francisco?",
      options: [
        "A. The record will save and the Industry field will change to Technology.",
        "B. The record will not save and no error message will be displayed.",
        "C. The record will not save the validation rule's error message will be displayed.",
        "D. The record will save but the Industry field will not change to Territory.",
      ],
      answer: "B",
      explanation: "",
      title: "Question 303",
    },
    {
      content: "What is a true statement when deleting a dashboard?",
      options: [
        "A. Deleting a dashboard also deletes the components within it. It does not delete the custom reports used by the components.",
        "B. Deleting a dashboard does not move the dashboard to the Recycle Bin and therefore the dashboard cannot be recovered.",
        "C. Deleting a dashboard also deletes the components within it as well as the custom reports used by the components.",
        "D. Deleting a dashboard requires a user to first edit the components to remove the underlying reports.",
      ],
      answer: "A",
      explanation: "",
      title: "Question 304",
    },
    {
      content:
        "A junction object has two Master-Detail relationships, a primary and a secondary master object.What happens to a junction object record when both associated master records are deleted?",
      options: [
        "A. The junction object record is permanently deleted and can't be restored.",
        "B. The delete operation cannot be performed on both master records.",
        "C. The delete operation is not allowed with Roll-up summary fields defined.",
        "D. The junction object records is deleted and placed in the recycle bin.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 305",
    },
    {
      content:
        "Universal Containers wants its Field Sales team to only see the accounts that they own. Separate North American and European marketing teams should only see accounts in their respective regions. The Inside Sales Team needs to see all accounts in Salesforce.How should an app builder accomplish this?",
      options: [
        "A. Set the Organization-Wide Default to Public for accounts. Create profiles for each Marketing Team, and create an Inside Sales Team role that is at the top of the Role Hierarchy.",
        'B. Set the Organization-Wide Default to Public for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team permission set with the "View All" setting for accounts.',
        'C. Set the Organization-Wide Default to Private for accounts. Create permission sets for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
        'D. Set the Organization-Wide Default to Private for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
      ],
      answer: "B",
      explanation: "",
      title: "Question 306",
    },
    {
      content:
        "The app builder has just created a Visual Workflow for the VP of Service.Which two Flow be accessed by users? (Choose two.)",
      options: [
        "A. Custom Button",
        "B. Quick Action",
        "C. Visual Workflow Launcher",
        "D. From a Process",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 307",
    },
    {
      content:
        "Which two metadata changes can be made directly in a production environment without deploying from a sandbox? (Choose two.)",
      options: [
        "A. Validation rules",
        "B. Apex Triggers",
        "C. Apex Classes",
        "D. Visualforce pages",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 308",
    },
    {
      content:
        "The Training team at Universal Containers uses a custom Training object to track their customer training sessions. An app builder needs to create a relationship between the Training object and the related Students' record.Which two statements are true when creating a Student Lookup field on the Training object? (Choose two.)",
      options: [
        "A. On Training record, the Student Lookup field can be made optional.",
        "B. On Student record, users can set up Roll-up summary field on Training records.",
        "C. On Training record, users can only delete Students, if they have access to it.",
        "D. Cross-object field updates between Training and Student records are not supported.",
      ],
      answer: "A,C",
      explanation: "",
      title: "Question 309",
    },
    {
      content:
        "An app builder would like to streamline the user experience by reflecting summarized calculations of specific fields on various objects.Which three field types could be used in roll-up summary fields to accomplish this? (Choose three.)",
      options: [
        "A. Checkbox",
        "B. Date",
        "C. Percent",
        "D. Time",
        "E. Currency",
      ],
      answer: "B,C,E",
      explanation: "",
      title: "Question 310",
    },
    {
      content:
        "Universal Containers manages internal projects by department using a custom object called Projects. Only employees in the project's respective department should have view access to all of the department's project records. If an employee changes job roles and moves to another department, the employee should no longer have access to the projects within their former department.Which two options will meet these requirements assuming the organization-wide default for Projects is set to Private? (Choose two.)",
      options: [
        "A. Create a criteria-based sharing rule using the Project's department that grants access to users by profiles.",
        "B. Create a criteria-based sharing rule using the Project's department that grants access to users by permission sets.",
        "C. Create a criteria-based sharing rule using the Project's department that grants access to users by roles.",
        "D. Create a criteria-based sharing rule using the Project's department that grants access to users by public groups.",
      ],
      answer: "C,D",
      explanation: "",
      title: "Question 311",
    },
    {
      content:
        "Universal Containers has a customer base where many customers have the same or similar company names.Which functionality should be configured to improve an end user's search experience? (Choose two.)",
      options: [
        "A. Update the account search layouts search filter fields.",
        "B. Update the account search layouts accounts tab columns displayed.",
        "C. Update the account search layouts search results columns displayed.",
        "D. Update the account search layouts list view filter settings.",
      ],
      answer: "B,C",
      explanation: "",
      title: "Question 312",
    },
    {
      content:
        "An app builder creates an Account validation rule on the Industry field that will throw an error if the length of the field is longer than 6 characters. Another app builder creates a workflow with a field update that sets the Industry field to Technology whenever the Billing City field is set to San Francisco.What will happen the next time a sales person saves an Account with a Billing City of San Francisco?",
      options: [
        "A. The record will save and the Industry field will change to Technology.",
        "B. The record will not save and no error message will be displayed.",
        "C. The record will not save the validation rule's error message will be displayed.",
        "D. The record will save but the Industry field will not change to Territory.",
      ],
      answer: "B",
      explanation: "",
      title: "Question 313",
    },
    {
      content: "What is a true statement when deleting a dashboard?",
      options: [
        "A. Deleting a dashboard also deletes the components within it. It does not delete the custom reports used by the components.",
        "B. Deleting a dashboard does not move the dashboard to the Recycle Bin and therefore the dashboard cannot be recovered.",
        "C. Deleting a dashboard also deletes the components within it as well as the custom reports used by the components.",
        "D. Deleting a dashboard requires a user to first edit the components to remove the underlying reports.",
      ],
      answer: "A",
      explanation: "",
      title: "Question 314",
    },
    {
      content:
        "A junction object has two Master-Detail relationships, a primary and a secondary master object.What happens to a junction object record when both associated master records are deleted?",
      options: [
        "A. The junction object record is permanently deleted and can't be restored.",
        "B. The delete operation cannot be performed on both master records.",
        "C. The delete operation is not allowed with Roll-up summary fields defined.",
        "D. The junction object records is deleted and placed in the recycle bin.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 315",
    },
    {
      content:
        "Universal Containers wants its Field Sales team to only see the accounts that they own. Separate North American and European marketing teams should only see accounts in their respective regions. The Inside Sales Team needs to see all accounts in Salesforce.How should an app builder accomplish this?",
      options: [
        "A. Set the Organization-Wide Default to Public for accounts. Create profiles for each Marketing Team, and create an Inside Sales Team role that is at the top of the Role Hierarchy.",
        'B. Set the Organization-Wide Default to Public for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team permission set with the "View All" setting for accounts.',
        'C. Set the Organization-Wide Default to Private for accounts. Create permission sets for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
        'D. Set the Organization-Wide Default to Private for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
      ],
      answer: "B",
      explanation: "",
      title: "Question 316",
    },
    {
      content:
        "The app builder has just created a Visual Workflow for the VP of Service.Which two Flow be accessed by users? (Choose two.)",
      options: [
        "A. Custom Button",
        "B. Quick Action",
        "C. Visual Workflow Launcher",
        "D. From a Process",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 317",
    },
    {
      content:
        "Which two metadata changes can be made directly in a production environment without deploying from a sandbox? (Choose two.)",
      options: [
        "A. Validation rules",
        "B. Apex Triggers",
        "C. Apex Classes",
        "D. Visualforce pages",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 318",
    },
    {
      content:
        "The Training team at Universal Containers uses a custom Training object to track their customer training sessions. An app builder needs to create a relationship between the Training object and the related Students' record.Which two statements are true when creating a Student Lookup field on the Training object? (Choose two.)",
      options: [
        "A. On Training record, the Student Lookup field can be made optional.",
        "B. On Student record, users can set up Roll-up summary field on Training records.",
        "C. On Training record, users can only delete Students, if they have access to it.",
        "D. Cross-object field updates between Training and Student records are not supported.",
      ],
      answer: "A,C",
      explanation: "",
      title: "Question 319",
    },
    {
      content:
        "An app builder would like to streamline the user experience by reflecting summarized calculations of specific fields on various objects.Which three field types could be used in roll-up summary fields to accomplish this? (Choose three.)",
      options: [
        "A. Checkbox",
        "B. Date",
        "C. Percent",
        "D. Time",
        "E. Currency",
      ],
      answer: "B,C,E",
      explanation: "",
      title: "Question 320",
    },
    {
      content:
        "Universal Containers manages internal projects by department using a custom object called Projects. Only employees in the project's respective department should have view access to all of the department's project records. If an employee changes job roles and moves to another department, the employee should no longer have access to the projects within their former department.Which two options will meet these requirements assuming the organization-wide default for Projects is set to Private? (Choose two.)",
      options: [
        "A. Create a criteria-based sharing rule using the Project's department that grants access to users by profiles.",
        "B. Create a criteria-based sharing rule using the Project's department that grants access to users by permission sets.",
        "C. Create a criteria-based sharing rule using the Project's department that grants access to users by roles.",
        "D. Create a criteria-based sharing rule using the Project's department that grants access to users by public groups.",
      ],
      answer: "C,D",
      explanation: "",
      title: "Question 321",
    },
    {
      content:
        "Universal Containers has a customer base where many customers have the same or similar company names.Which functionality should be configured to improve an end user's search experience? (Choose two.)",
      options: [
        "A. Update the account search layouts search filter fields.",
        "B. Update the account search layouts accounts tab columns displayed.",
        "C. Update the account search layouts search results columns displayed.",
        "D. Update the account search layouts list view filter settings.",
      ],
      answer: "B,C",
      explanation: "",
      title: "Question 322",
    },
    {
      content:
        "An app builder creates an Account validation rule on the Industry field that will throw an error if the length of the field is longer than 6 characters. Another app builder creates a workflow with a field update that sets the Industry field to Technology whenever the Billing City field is set to San Francisco.What will happen the next time a sales person saves an Account with a Billing City of San Francisco?",
      options: [
        "A. The record will save and the Industry field will change to Technology.",
        "B. The record will not save and no error message will be displayed.",
        "C. The record will not save the validation rule's error message will be displayed.",
        "D. The record will save but the Industry field will not change to Territory.",
      ],
      answer: "B",
      explanation: "",
      title: "Question 323",
    },
    {
      content: "What is a true statement when deleting a dashboard?",
      options: [
        "A. Deleting a dashboard also deletes the components within it. It does not delete the custom reports used by the components.",
        "B. Deleting a dashboard does not move the dashboard to the Recycle Bin and therefore the dashboard cannot be recovered.",
        "C. Deleting a dashboard also deletes the components within it as well as the custom reports used by the components.",
        "D. Deleting a dashboard requires a user to first edit the components to remove the underlying reports.",
      ],
      answer: "A",
      explanation: "",
      title: "Question 324",
    },
    {
      content:
        "A junction object has two Master-Detail relationships, a primary and a secondary master object.What happens to a junction object record when both associated master records are deleted?",
      options: [
        "A. The junction object record is permanently deleted and can't be restored.",
        "B. The delete operation cannot be performed on both master records.",
        "C. The delete operation is not allowed with Roll-up summary fields defined.",
        "D. The junction object records is deleted and placed in the recycle bin.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 325",
    },
    {
      content:
        "Universal Containers wants its Field Sales team to only see the accounts that they own. Separate North American and European marketing teams should only see accounts in their respective regions. The Inside Sales Team needs to see all accounts in Salesforce.How should an app builder accomplish this?",
      options: [
        "A. Set the Organization-Wide Default to Public for accounts. Create profiles for each Marketing Team, and create an Inside Sales Team role that is at the top of the Role Hierarchy.",
        'B. Set the Organization-Wide Default to Public for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team permission set with the "View All" setting for accounts.',
        'C. Set the Organization-Wide Default to Private for accounts. Create permission sets for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
        'D. Set the Organization-Wide Default to Private for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
      ],
      answer: "B",
      explanation: "",
      title: "Question 326",
    },
    {
      content:
        "The app builder has just created a Visual Workflow for the VP of Service.Which two Flow be accessed by users? (Choose two.)",
      options: [
        "A. Custom Button",
        "B. Quick Action",
        "C. Visual Workflow Launcher",
        "D. From a Process",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 327",
    },
    {
      content:
        "Which two metadata changes can be made directly in a production environment without deploying from a sandbox? (Choose two.)",
      options: [
        "A. Validation rules",
        "B. Apex Triggers",
        "C. Apex Classes",
        "D. Visualforce pages",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 328",
    },
    {
      content:
        "The Training team at Universal Containers uses a custom Training object to track their customer training sessions. An app builder needs to create a relationship between the Training object and the related Students' record.Which two statements are true when creating a Student Lookup field on the Training object? (Choose two.)",
      options: [
        "A. On Training record, the Student Lookup field can be made optional.",
        "B. On Student record, users can set up Roll-up summary field on Training records.",
        "C. On Training record, users can only delete Students, if they have access to it.",
        "D. Cross-object field updates between Training and Student records are not supported.",
      ],
      answer: "A,C",
      explanation: "",
      title: "Question 329",
    },
    {
      content:
        "An app builder would like to streamline the user experience by reflecting summarized calculations of specific fields on various objects.Which three field types could be used in roll-up summary fields to accomplish this? (Choose three.)",
      options: [
        "A. Checkbox",
        "B. Date",
        "C. Percent",
        "D. Time",
        "E. Currency",
      ],
      answer: "B,C,E",
      explanation: "",
      title: "Question 330",
    },
    {
      content:
        "Universal Containers manages internal projects by department using a custom object called Projects. Only employees in the project's respective department should have view access to all of the department's project records. If an employee changes job roles and moves to another department, the employee should no longer have access to the projects within their former department.Which two options will meet these requirements assuming the organization-wide default for Projects is set to Private? (Choose two.)",
      options: [
        "A. Create a criteria-based sharing rule using the Project's department that grants access to users by profiles.",
        "B. Create a criteria-based sharing rule using the Project's department that grants access to users by permission sets.",
        "C. Create a criteria-based sharing rule using the Project's department that grants access to users by roles.",
        "D. Create a criteria-based sharing rule using the Project's department that grants access to users by public groups.",
      ],
      answer: "C,D",
      explanation: "",
      title: "Question 331",
    },
    {
      content:
        "Universal Containers has a customer base where many customers have the same or similar company names.Which functionality should be configured to improve an end user's search experience? (Choose two.)",
      options: [
        "A. Update the account search layouts search filter fields.",
        "B. Update the account search layouts accounts tab columns displayed.",
        "C. Update the account search layouts search results columns displayed.",
        "D. Update the account search layouts list view filter settings.",
      ],
      answer: "B,C",
      explanation: "",
      title: "Question 332",
    },
    {
      content:
        "An app builder creates an Account validation rule on the Industry field that will throw an error if the length of the field is longer than 6 characters. Another app builder creates a workflow with a field update that sets the Industry field to Technology whenever the Billing City field is set to San Francisco.What will happen the next time a sales person saves an Account with a Billing City of San Francisco?",
      options: [
        "A. The record will save and the Industry field will change to Technology.",
        "B. The record will not save and no error message will be displayed.",
        "C. The record will not save the validation rule's error message will be displayed.",
        "D. The record will save but the Industry field will not change to Territory.",
      ],
      answer: "B",
      explanation: "",
      title: "Question 333",
    },
    {
      content: "What is a true statement when deleting a dashboard?",
      options: [
        "A. Deleting a dashboard also deletes the components within it. It does not delete the custom reports used by the components.",
        "B. Deleting a dashboard does not move the dashboard to the Recycle Bin and therefore the dashboard cannot be recovered.",
        "C. Deleting a dashboard also deletes the components within it as well as the custom reports used by the components.",
        "D. Deleting a dashboard requires a user to first edit the components to remove the underlying reports.",
      ],
      answer: "A",
      explanation: "",
      title: "Question 334",
    },
    {
      content:
        "A junction object has two Master-Detail relationships, a primary and a secondary master object.What happens to a junction object record when both associated master records are deleted?",
      options: [
        "A. The junction object record is permanently deleted and can't be restored.",
        "B. The delete operation cannot be performed on both master records.",
        "C. The delete operation is not allowed with Roll-up summary fields defined.",
        "D. The junction object records is deleted and placed in the recycle bin.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 335",
    },
    {
      content:
        "Universal Containers wants its Field Sales team to only see the accounts that they own. Separate North American and European marketing teams should only see accounts in their respective regions. The Inside Sales Team needs to see all accounts in Salesforce.How should an app builder accomplish this?",
      options: [
        "A. Set the Organization-Wide Default to Public for accounts. Create profiles for each Marketing Team, and create an Inside Sales Team role that is at the top of the Role Hierarchy.",
        'B. Set the Organization-Wide Default to Public for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team permission set with the "View All" setting for accounts.',
        'C. Set the Organization-Wide Default to Private for accounts. Create permission sets for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
        'D. Set the Organization-Wide Default to Private for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
      ],
      answer: "B",
      explanation: "",
      title: "Question 336",
    },
    {
      content:
        "The app builder has just created a Visual Workflow for the VP of Service.Which two Flow be accessed by users? (Choose two.)",
      options: [
        "A. Custom Button",
        "B. Quick Action",
        "C. Visual Workflow Launcher",
        "D. From a Process",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 337",
    },
    {
      content:
        "Which two metadata changes can be made directly in a production environment without deploying from a sandbox? (Choose two.)",
      options: [
        "A. Validation rules",
        "B. Apex Triggers",
        "C. Apex Classes",
        "D. Visualforce pages",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 338",
    },
    {
      content:
        "The Training team at Universal Containers uses a custom Training object to track their customer training sessions. An app builder needs to create a relationship between the Training object and the related Students' record.Which two statements are true when creating a Student Lookup field on the Training object? (Choose two.)",
      options: [
        "A. On Training record, the Student Lookup field can be made optional.",
        "B. On Student record, users can set up Roll-up summary field on Training records.",
        "C. On Training record, users can only delete Students, if they have access to it.",
        "D. Cross-object field updates between Training and Student records are not supported.",
      ],
      answer: "A,C",
      explanation: "",
      title: "Question 339",
    },
    {
      content:
        "An app builder would like to streamline the user experience by reflecting summarized calculations of specific fields on various objects.Which three field types could be used in roll-up summary fields to accomplish this? (Choose three.)",
      options: [
        "A. Checkbox",
        "B. Date",
        "C. Percent",
        "D. Time",
        "E. Currency",
      ],
      answer: "B,C,E",
      explanation: "",
      title: "Question 340",
    },
    {
      content:
        "Universal Containers manages internal projects by department using a custom object called Projects. Only employees in the project's respective department should have view access to all of the department's project records. If an employee changes job roles and moves to another department, the employee should no longer have access to the projects within their former department.Which two options will meet these requirements assuming the organization-wide default for Projects is set to Private? (Choose two.)",
      options: [
        "A. Create a criteria-based sharing rule using the Project's department that grants access to users by profiles.",
        "B. Create a criteria-based sharing rule using the Project's department that grants access to users by permission sets.",
        "C. Create a criteria-based sharing rule using the Project's department that grants access to users by roles.",
        "D. Create a criteria-based sharing rule using the Project's department that grants access to users by public groups.",
      ],
      answer: "C,D",
      explanation: "",
      title: "Question 341",
    },
    {
      content:
        "Universal Containers has a customer base where many customers have the same or similar company names.Which functionality should be configured to improve an end user's search experience? (Choose two.)",
      options: [
        "A. Update the account search layouts search filter fields.",
        "B. Update the account search layouts accounts tab columns displayed.",
        "C. Update the account search layouts search results columns displayed.",
        "D. Update the account search layouts list view filter settings.",
      ],
      answer: "B,C",
      explanation: "",
      title: "Question 342",
    },
    {
      content:
        "An app builder creates an Account validation rule on the Industry field that will throw an error if the length of the field is longer than 6 characters. Another app builder creates a workflow with a field update that sets the Industry field to Technology whenever the Billing City field is set to San Francisco.What will happen the next time a sales person saves an Account with a Billing City of San Francisco?",
      options: [
        "A. The record will save and the Industry field will change to Technology.",
        "B. The record will not save and no error message will be displayed.",
        "C. The record will not save the validation rule's error message will be displayed.",
        "D. The record will save but the Industry field will not change to Territory.",
      ],
      answer: "B",
      explanation: "",
      title: "Question 343",
    },
    {
      content: "What is a true statement when deleting a dashboard?",
      options: [
        "A. Deleting a dashboard also deletes the components within it. It does not delete the custom reports used by the components.",
        "B. Deleting a dashboard does not move the dashboard to the Recycle Bin and therefore the dashboard cannot be recovered.",
        "C. Deleting a dashboard also deletes the components within it as well as the custom reports used by the components.",
        "D. Deleting a dashboard requires a user to first edit the components to remove the underlying reports.",
      ],
      answer: "A",
      explanation: "",
      title: "Question 344",
    },
    {
      content:
        "A junction object has two Master-Detail relationships, a primary and a secondary master object.What happens to a junction object record when both associated master records are deleted?",
      options: [
        "A. The junction object record is permanently deleted and can't be restored.",
        "B. The delete operation cannot be performed on both master records.",
        "C. The delete operation is not allowed with Roll-up summary fields defined.",
        "D. The junction object records is deleted and placed in the recycle bin.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 345",
    },
    {
      content:
        "Universal Containers wants its Field Sales team to only see the accounts that they own. Separate North American and European marketing teams should only see accounts in their respective regions. The Inside Sales Team needs to see all accounts in Salesforce.How should an app builder accomplish this?",
      options: [
        "A. Set the Organization-Wide Default to Public for accounts. Create profiles for each Marketing Team, and create an Inside Sales Team role that is at the top of the Role Hierarchy.",
        'B. Set the Organization-Wide Default to Public for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team permission set with the "View All" setting for accounts.',
        'C. Set the Organization-Wide Default to Private for accounts. Create permission sets for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
        'D. Set the Organization-Wide Default to Private for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
      ],
      answer: "B",
      explanation: "",
      title: "Question 346",
    },
    {
      content:
        "The app builder has just created a Visual Workflow for the VP of Service.Which two Flow be accessed by users? (Choose two.)",
      options: [
        "A. Custom Button",
        "B. Quick Action",
        "C. Visual Workflow Launcher",
        "D. From a Process",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 347",
    },
    {
      content:
        "Which two metadata changes can be made directly in a production environment without deploying from a sandbox? (Choose two.)",
      options: [
        "A. Validation rules",
        "B. Apex Triggers",
        "C. Apex Classes",
        "D. Visualforce pages",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 348",
    },
    {
      content:
        "The Training team at Universal Containers uses a custom Training object to track their customer training sessions. An app builder needs to create a relationship between the Training object and the related Students' record.Which two statements are true when creating a Student Lookup field on the Training object? (Choose two.)",
      options: [
        "A. On Training record, the Student Lookup field can be made optional.",
        "B. On Student record, users can set up Roll-up summary field on Training records.",
        "C. On Training record, users can only delete Students, if they have access to it.",
        "D. Cross-object field updates between Training and Student records are not supported.",
      ],
      answer: "A,C",
      explanation: "",
      title: "Question 349",
    },
    {
      content:
        "An app builder would like to streamline the user experience by reflecting summarized calculations of specific fields on various objects.Which three field types could be used in roll-up summary fields to accomplish this? (Choose three.)",
      options: [
        "A. Checkbox",
        "B. Date",
        "C. Percent",
        "D. Time",
        "E. Currency",
      ],
      answer: "B,C,E",
      explanation: "",
      title: "Question 350",
    },
    {
      content:
        "Universal Containers manages internal projects by department using a custom object called Projects. Only employees in the project's respective department should have view access to all of the department's project records. If an employee changes job roles and moves to another department, the employee should no longer have access to the projects within their former department.Which two options will meet these requirements assuming the organization-wide default for Projects is set to Private? (Choose two.)",
      options: [
        "A. Create a criteria-based sharing rule using the Project's department that grants access to users by profiles.",
        "B. Create a criteria-based sharing rule using the Project's department that grants access to users by permission sets.",
        "C. Create a criteria-based sharing rule using the Project's department that grants access to users by roles.",
        "D. Create a criteria-based sharing rule using the Project's department that grants access to users by public groups.",
      ],
      answer: "C,D",
      explanation: "",
      title: "Question 351",
    },
    {
      content:
        "Universal Containers has a customer base where many customers have the same or similar company names.Which functionality should be configured to improve an end user's search experience? (Choose two.)",
      options: [
        "A. Update the account search layouts search filter fields.",
        "B. Update the account search layouts accounts tab columns displayed.",
        "C. Update the account search layouts search results columns displayed.",
        "D. Update the account search layouts list view filter settings.",
      ],
      answer: "B,C",
      explanation: "",
      title: "Question 352",
    },
    {
      content:
        "An app builder creates an Account validation rule on the Industry field that will throw an error if the length of the field is longer than 6 characters. Another app builder creates a workflow with a field update that sets the Industry field to Technology whenever the Billing City field is set to San Francisco.What will happen the next time a sales person saves an Account with a Billing City of San Francisco?",
      options: [
        "A. The record will save and the Industry field will change to Technology.",
        "B. The record will not save and no error message will be displayed.",
        "C. The record will not save the validation rule's error message will be displayed.",
        "D. The record will save but the Industry field will not change to Territory.",
      ],
      answer: "B",
      explanation: "",
      title: "Question 353",
    },
    {
      content: "What is a true statement when deleting a dashboard?",
      options: [
        "A. Deleting a dashboard also deletes the components within it. It does not delete the custom reports used by the components.",
        "B. Deleting a dashboard does not move the dashboard to the Recycle Bin and therefore the dashboard cannot be recovered.",
        "C. Deleting a dashboard also deletes the components within it as well as the custom reports used by the components.",
        "D. Deleting a dashboard requires a user to first edit the components to remove the underlying reports.",
      ],
      answer: "A",
      explanation: "",
      title: "Question 354",
    },
    {
      content:
        "A junction object has two Master-Detail relationships, a primary and a secondary master object.What happens to a junction object record when both associated master records are deleted?",
      options: [
        "A. The junction object record is permanently deleted and can't be restored.",
        "B. The delete operation cannot be performed on both master records.",
        "C. The delete operation is not allowed with Roll-up summary fields defined.",
        "D. The junction object records is deleted and placed in the recycle bin.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 355",
    },
    {
      content:
        "Universal Containers wants its Field Sales team to only see the accounts that they own. Separate North American and European marketing teams should only see accounts in their respective regions. The Inside Sales Team needs to see all accounts in Salesforce.How should an app builder accomplish this?",
      options: [
        "A. Set the Organization-Wide Default to Public for accounts. Create profiles for each Marketing Team, and create an Inside Sales Team role that is at the top of the Role Hierarchy.",
        'B. Set the Organization-Wide Default to Public for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team permission set with the "View All" setting for accounts.',
        'C. Set the Organization-Wide Default to Private for accounts. Create permission sets for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
        'D. Set the Organization-Wide Default to Private for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
      ],
      answer: "B",
      explanation: "",
      title: "Question 356",
    },
    {
      content:
        "The app builder has just created a Visual Workflow for the VP of Service.Which two Flow be accessed by users? (Choose two.)",
      options: [
        "A. Custom Button",
        "B. Quick Action",
        "C. Visual Workflow Launcher",
        "D. From a Process",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 357",
    },
    {
      content:
        "Which two metadata changes can be made directly in a production environment without deploying from a sandbox? (Choose two.)",
      options: [
        "A. Validation rules",
        "B. Apex Triggers",
        "C. Apex Classes",
        "D. Visualforce pages",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 358",
    },
    {
      content:
        "The Training team at Universal Containers uses a custom Training object to track their customer training sessions. An app builder needs to create a relationship between the Training object and the related Students' record.Which two statements are true when creating a Student Lookup field on the Training object? (Choose two.)",
      options: [
        "A. On Training record, the Student Lookup field can be made optional.",
        "B. On Student record, users can set up Roll-up summary field on Training records.",
        "C. On Training record, users can only delete Students, if they have access to it.",
        "D. Cross-object field updates between Training and Student records are not supported.",
      ],
      answer: "A,C",
      explanation: "",
      title: "Question 359",
    },
    {
      content:
        "An app builder would like to streamline the user experience by reflecting summarized calculations of specific fields on various objects.Which three field types could be used in roll-up summary fields to accomplish this? (Choose three.)",
      options: [
        "A. Checkbox",
        "B. Date",
        "C. Percent",
        "D. Time",
        "E. Currency",
      ],
      answer: "B,C,E",
      explanation: "",
      title: "Question 360",
    },
    {
      content:
        "Universal Containers manages internal projects by department using a custom object called Projects. Only employees in the project's respective department should have view access to all of the department's project records. If an employee changes job roles and moves to another department, the employee should no longer have access to the projects within their former department.Which two options will meet these requirements assuming the organization-wide default for Projects is set to Private? (Choose two.)",
      options: [
        "A. Create a criteria-based sharing rule using the Project's department that grants access to users by profiles.",
        "B. Create a criteria-based sharing rule using the Project's department that grants access to users by permission sets.",
        "C. Create a criteria-based sharing rule using the Project's department that grants access to users by roles.",
        "D. Create a criteria-based sharing rule using the Project's department that grants access to users by public groups.",
      ],
      answer: "C,D",
      explanation: "",
      title: "Question 361",
    },
    {
      content:
        "Universal Containers has a customer base where many customers have the same or similar company names.Which functionality should be configured to improve an end user's search experience? (Choose two.)",
      options: [
        "A. Update the account search layouts search filter fields.",
        "B. Update the account search layouts accounts tab columns displayed.",
        "C. Update the account search layouts search results columns displayed.",
        "D. Update the account search layouts list view filter settings.",
      ],
      answer: "B,C",
      explanation: "",
      title: "Question 362",
    },
    {
      content:
        "An app builder creates an Account validation rule on the Industry field that will throw an error if the length of the field is longer than 6 characters. Another app builder creates a workflow with a field update that sets the Industry field to Technology whenever the Billing City field is set to San Francisco.What will happen the next time a sales person saves an Account with a Billing City of San Francisco?",
      options: [
        "A. The record will save and the Industry field will change to Technology.",
        "B. The record will not save and no error message will be displayed.",
        "C. The record will not save the validation rule's error message will be displayed.",
        "D. The record will save but the Industry field will not change to Territory.",
      ],
      answer: "B",
      explanation: "",
      title: "Question 363",
    },
    {
      content: "What is a true statement when deleting a dashboard?",
      options: [
        "A. Deleting a dashboard also deletes the components within it. It does not delete the custom reports used by the components.",
        "B. Deleting a dashboard does not move the dashboard to the Recycle Bin and therefore the dashboard cannot be recovered.",
        "C. Deleting a dashboard also deletes the components within it as well as the custom reports used by the components.",
        "D. Deleting a dashboard requires a user to first edit the components to remove the underlying reports.",
      ],
      answer: "A",
      explanation: "",
      title: "Question 364",
    },
    {
      content:
        "A junction object has two Master-Detail relationships, a primary and a secondary master object.What happens to a junction object record when both associated master records are deleted?",
      options: [
        "A. The junction object record is permanently deleted and can't be restored.",
        "B. The delete operation cannot be performed on both master records.",
        "C. The delete operation is not allowed with Roll-up summary fields defined.",
        "D. The junction object records is deleted and placed in the recycle bin.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 365",
    },
    {
      content:
        "Universal Containers wants its Field Sales team to only see the accounts that they own. Separate North American and European marketing teams should only see accounts in their respective regions. The Inside Sales Team needs to see all accounts in Salesforce.How should an app builder accomplish this?",
      options: [
        "A. Set the Organization-Wide Default to Public for accounts. Create profiles for each Marketing Team, and create an Inside Sales Team role that is at the top of the Role Hierarchy.",
        'B. Set the Organization-Wide Default to Public for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team permission set with the "View All" setting for accounts.',
        'C. Set the Organization-Wide Default to Private for accounts. Create permission sets for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
        'D. Set the Organization-Wide Default to Private for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
      ],
      answer: "B",
      explanation: "",
      title: "Question 366",
    },
    {
      content:
        "The app builder has just created a Visual Workflow for the VP of Service.Which two Flow be accessed by users? (Choose two.)",
      options: [
        "A. Custom Button",
        "B. Quick Action",
        "C. Visual Workflow Launcher",
        "D. From a Process",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 367",
    },
    {
      content:
        "Which two metadata changes can be made directly in a production environment without deploying from a sandbox? (Choose two.)",
      options: [
        "A. Validation rules",
        "B. Apex Triggers",
        "C. Apex Classes",
        "D. Visualforce pages",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 368",
    },
    {
      content:
        "The Training team at Universal Containers uses a custom Training object to track their customer training sessions. An app builder needs to create a relationship between the Training object and the related Students' record.Which two statements are true when creating a Student Lookup field on the Training object? (Choose two.)",
      options: [
        "A. On Training record, the Student Lookup field can be made optional.",
        "B. On Student record, users can set up Roll-up summary field on Training records.",
        "C. On Training record, users can only delete Students, if they have access to it.",
        "D. Cross-object field updates between Training and Student records are not supported.",
      ],
      answer: "A,C",
      explanation: "",
      title: "Question 369",
    },
    {
      content:
        "An app builder would like to streamline the user experience by reflecting summarized calculations of specific fields on various objects.Which three field types could be used in roll-up summary fields to accomplish this? (Choose three.)",
      options: [
        "A. Checkbox",
        "B. Date",
        "C. Percent",
        "D. Time",
        "E. Currency",
      ],
      answer: "B,C,E",
      explanation: "",
      title: "Question 370",
    },
    {
      content:
        "Universal Containers manages internal projects by department using a custom object called Projects. Only employees in the project's respective department should have view access to all of the department's project records. If an employee changes job roles and moves to another department, the employee should no longer have access to the projects within their former department.Which two options will meet these requirements assuming the organization-wide default for Projects is set to Private? (Choose two.)",
      options: [
        "A. Create a criteria-based sharing rule using the Project's department that grants access to users by profiles.",
        "B. Create a criteria-based sharing rule using the Project's department that grants access to users by permission sets.",
        "C. Create a criteria-based sharing rule using the Project's department that grants access to users by roles.",
        "D. Create a criteria-based sharing rule using the Project's department that grants access to users by public groups.",
      ],
      answer: "C,D",
      explanation: "",
      title: "Question 371",
    },
    {
      content:
        "Universal Containers has a customer base where many customers have the same or similar company names.Which functionality should be configured to improve an end user's search experience? (Choose two.)",
      options: [
        "A. Update the account search layouts search filter fields.",
        "B. Update the account search layouts accounts tab columns displayed.",
        "C. Update the account search layouts search results columns displayed.",
        "D. Update the account search layouts list view filter settings.",
      ],
      answer: "B,C",
      explanation: "",
      title: "Question 372",
    },
    {
      content:
        "An app builder creates an Account validation rule on the Industry field that will throw an error if the length of the field is longer than 6 characters. Another app builder creates a workflow with a field update that sets the Industry field to Technology whenever the Billing City field is set to San Francisco.What will happen the next time a sales person saves an Account with a Billing City of San Francisco?",
      options: [
        "A. The record will save and the Industry field will change to Technology.",
        "B. The record will not save and no error message will be displayed.",
        "C. The record will not save the validation rule's error message will be displayed.",
        "D. The record will save but the Industry field will not change to Territory.",
      ],
      answer: "B",
      explanation: "",
      title: "Question 373",
    },
    {
      content: "What is a true statement when deleting a dashboard?",
      options: [
        "A. Deleting a dashboard also deletes the components within it. It does not delete the custom reports used by the components.",
        "B. Deleting a dashboard does not move the dashboard to the Recycle Bin and therefore the dashboard cannot be recovered.",
        "C. Deleting a dashboard also deletes the components within it as well as the custom reports used by the components.",
        "D. Deleting a dashboard requires a user to first edit the components to remove the underlying reports.",
      ],
      answer: "A",
      explanation: "",
      title: "Question 374",
    },
    {
      content:
        "A junction object has two Master-Detail relationships, a primary and a secondary master object.What happens to a junction object record when both associated master records are deleted?",
      options: [
        "A. The junction object record is permanently deleted and can't be restored.",
        "B. The delete operation cannot be performed on both master records.",
        "C. The delete operation is not allowed with Roll-up summary fields defined.",
        "D. The junction object records is deleted and placed in the recycle bin.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 375",
    },
    {
      content:
        "Universal Containers wants its Field Sales team to only see the accounts that they own. Separate North American and European marketing teams should only see accounts in their respective regions. The Inside Sales Team needs to see all accounts in Salesforce.How should an app builder accomplish this?",
      options: [
        "A. Set the Organization-Wide Default to Public for accounts. Create profiles for each Marketing Team, and create an Inside Sales Team role that is at the top of the Role Hierarchy.",
        'B. Set the Organization-Wide Default to Public for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team permission set with the "View All" setting for accounts.',
        'C. Set the Organization-Wide Default to Private for accounts. Create permission sets for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
        'D. Set the Organization-Wide Default to Private for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
      ],
      answer: "B",
      explanation: "",
      title: "Question 376",
    },
    {
      content:
        "The app builder has just created a Visual Workflow for the VP of Service.Which two Flow be accessed by users? (Choose two.)",
      options: [
        "A. Custom Button",
        "B. Quick Action",
        "C. Visual Workflow Launcher",
        "D. From a Process",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 377",
    },
    {
      content:
        "Which two metadata changes can be made directly in a production environment without deploying from a sandbox? (Choose two.)",
      options: [
        "A. Validation rules",
        "B. Apex Triggers",
        "C. Apex Classes",
        "D. Visualforce pages",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 378",
    },
    {
      content:
        "The Training team at Universal Containers uses a custom Training object to track their customer training sessions. An app builder needs to create a relationship between the Training object and the related Students' record.Which two statements are true when creating a Student Lookup field on the Training object? (Choose two.)",
      options: [
        "A. On Training record, the Student Lookup field can be made optional.",
        "B. On Student record, users can set up Roll-up summary field on Training records.",
        "C. On Training record, users can only delete Students, if they have access to it.",
        "D. Cross-object field updates between Training and Student records are not supported.",
      ],
      answer: "A,C",
      explanation: "",
      title: "Question 379",
    },
    {
      content:
        "An app builder would like to streamline the user experience by reflecting summarized calculations of specific fields on various objects.Which three field types could be used in roll-up summary fields to accomplish this? (Choose three.)",
      options: [
        "A. Checkbox",
        "B. Date",
        "C. Percent",
        "D. Time",
        "E. Currency",
      ],
      answer: "B,C,E",
      explanation: "",
      title: "Question 380",
    },
    {
      content:
        "Universal Containers manages internal projects by department using a custom object called Projects. Only employees in the project's respective department should have view access to all of the department's project records. If an employee changes job roles and moves to another department, the employee should no longer have access to the projects within their former department.Which two options will meet these requirements assuming the organization-wide default for Projects is set to Private? (Choose two.)",
      options: [
        "A. Create a criteria-based sharing rule using the Project's department that grants access to users by profiles.",
        "B. Create a criteria-based sharing rule using the Project's department that grants access to users by permission sets.",
        "C. Create a criteria-based sharing rule using the Project's department that grants access to users by roles.",
        "D. Create a criteria-based sharing rule using the Project's department that grants access to users by public groups.",
      ],
      answer: "C,D",
      explanation: "",
      title: "Question 381",
    },
    {
      content:
        "Universal Containers has a customer base where many customers have the same or similar company names.Which functionality should be configured to improve an end user's search experience? (Choose two.)",
      options: [
        "A. Update the account search layouts search filter fields.",
        "B. Update the account search layouts accounts tab columns displayed.",
        "C. Update the account search layouts search results columns displayed.",
        "D. Update the account search layouts list view filter settings.",
      ],
      answer: "B,C",
      explanation: "",
      title: "Question 382",
    },
    {
      content:
        "An app builder creates an Account validation rule on the Industry field that will throw an error if the length of the field is longer than 6 characters. Another app builder creates a workflow with a field update that sets the Industry field to Technology whenever the Billing City field is set to San Francisco.What will happen the next time a sales person saves an Account with a Billing City of San Francisco?",
      options: [
        "A. The record will save and the Industry field will change to Technology.",
        "B. The record will not save and no error message will be displayed.",
        "C. The record will not save the validation rule's error message will be displayed.",
        "D. The record will save but the Industry field will not change to Territory.",
      ],
      answer: "B",
      explanation: "",
      title: "Question 383",
    },
    {
      content: "What is a true statement when deleting a dashboard?",
      options: [
        "A. Deleting a dashboard also deletes the components within it. It does not delete the custom reports used by the components.",
        "B. Deleting a dashboard does not move the dashboard to the Recycle Bin and therefore the dashboard cannot be recovered.",
        "C. Deleting a dashboard also deletes the components within it as well as the custom reports used by the components.",
        "D. Deleting a dashboard requires a user to first edit the components to remove the underlying reports.",
      ],
      answer: "A",
      explanation: "",
      title: "Question 384",
    },
    {
      content:
        "A junction object has two Master-Detail relationships, a primary and a secondary master object.What happens to a junction object record when both associated master records are deleted?",
      options: [
        "A. The junction object record is permanently deleted and can't be restored.",
        "B. The delete operation cannot be performed on both master records.",
        "C. The delete operation is not allowed with Roll-up summary fields defined.",
        "D. The junction object records is deleted and placed in the recycle bin.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 385",
    },
    {
      content:
        "Universal Containers wants its Field Sales team to only see the accounts that they own. Separate North American and European marketing teams should only see accounts in their respective regions. The Inside Sales Team needs to see all accounts in Salesforce.How should an app builder accomplish this?",
      options: [
        "A. Set the Organization-Wide Default to Public for accounts. Create profiles for each Marketing Team, and create an Inside Sales Team role that is at the top of the Role Hierarchy.",
        'B. Set the Organization-Wide Default to Public for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team permission set with the "View All" setting for accounts.',
        'C. Set the Organization-Wide Default to Private for accounts. Create permission sets for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
        'D. Set the Organization-Wide Default to Private for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
      ],
      answer: "B",
      explanation: "",
      title: "Question 386",
    },
    {
      content:
        "The app builder has just created a Visual Workflow for the VP of Service.Which two Flow be accessed by users? (Choose two.)",
      options: [
        "A. Custom Button",
        "B. Quick Action",
        "C. Visual Workflow Launcher",
        "D. From a Process",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 387",
    },
    {
      content:
        "Which two metadata changes can be made directly in a production environment without deploying from a sandbox? (Choose two.)",
      options: [
        "A. Validation rules",
        "B. Apex Triggers",
        "C. Apex Classes",
        "D. Visualforce pages",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 388",
    },
    {
      content:
        "The Training team at Universal Containers uses a custom Training object to track their customer training sessions. An app builder needs to create a relationship between the Training object and the related Students' record.Which two statements are true when creating a Student Lookup field on the Training object? (Choose two.)",
      options: [
        "A. On Training record, the Student Lookup field can be made optional.",
        "B. On Student record, users can set up Roll-up summary field on Training records.",
        "C. On Training record, users can only delete Students, if they have access to it.",
        "D. Cross-object field updates between Training and Student records are not supported.",
      ],
      answer: "A,C",
      explanation: "",
      title: "Question 389",
    },
    {
      content:
        "An app builder would like to streamline the user experience by reflecting summarized calculations of specific fields on various objects.Which three field types could be used in roll-up summary fields to accomplish this? (Choose three.)",
      options: [
        "A. Checkbox",
        "B. Date",
        "C. Percent",
        "D. Time",
        "E. Currency",
      ],
      answer: "B,C,E",
      explanation: "",
      title: "Question 390",
    },
    {
      content:
        "Universal Containers manages internal projects by department using a custom object called Projects. Only employees in the project's respective department should have view access to all of the department's project records. If an employee changes job roles and moves to another department, the employee should no longer have access to the projects within their former department.Which two options will meet these requirements assuming the organization-wide default for Projects is set to Private? (Choose two.)",
      options: [
        "A. Create a criteria-based sharing rule using the Project's department that grants access to users by profiles.",
        "B. Create a criteria-based sharing rule using the Project's department that grants access to users by permission sets.",
        "C. Create a criteria-based sharing rule using the Project's department that grants access to users by roles.",
        "D. Create a criteria-based sharing rule using the Project's department that grants access to users by public groups.",
      ],
      answer: "C,D",
      explanation: "",
      title: "Question 391",
    },
    {
      content:
        "Universal Containers has a customer base where many customers have the same or similar company names.Which functionality should be configured to improve an end user's search experience? (Choose two.)",
      options: [
        "A. Update the account search layouts search filter fields.",
        "B. Update the account search layouts accounts tab columns displayed.",
        "C. Update the account search layouts search results columns displayed.",
        "D. Update the account search layouts list view filter settings.",
      ],
      answer: "B,C",
      explanation: "",
      title: "Question 392",
    },
    {
      content:
        "An app builder creates an Account validation rule on the Industry field that will throw an error if the length of the field is longer than 6 characters. Another app builder creates a workflow with a field update that sets the Industry field to Technology whenever the Billing City field is set to San Francisco.What will happen the next time a sales person saves an Account with a Billing City of San Francisco?",
      options: [
        "A. The record will save and the Industry field will change to Technology.",
        "B. The record will not save and no error message will be displayed.",
        "C. The record will not save the validation rule's error message will be displayed.",
        "D. The record will save but the Industry field will not change to Territory.",
      ],
      answer: "B",
      explanation: "",
      title: "Question 393",
    },
    {
      content: "What is a true statement when deleting a dashboard?",
      options: [
        "A. Deleting a dashboard also deletes the components within it. It does not delete the custom reports used by the components.",
        "B. Deleting a dashboard does not move the dashboard to the Recycle Bin and therefore the dashboard cannot be recovered.",
        "C. Deleting a dashboard also deletes the components within it as well as the custom reports used by the components.",
        "D. Deleting a dashboard requires a user to first edit the components to remove the underlying reports.",
      ],
      answer: "A",
      explanation: "",
      title: "Question 394",
    },
    {
      content:
        "A junction object has two Master-Detail relationships, a primary and a secondary master object.What happens to a junction object record when both associated master records are deleted?",
      options: [
        "A. The junction object record is permanently deleted and can't be restored.",
        "B. The delete operation cannot be performed on both master records.",
        "C. The delete operation is not allowed with Roll-up summary fields defined.",
        "D. The junction object records is deleted and placed in the recycle bin.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 395",
    },
    {
      content:
        "Universal Containers wants its Field Sales team to only see the accounts that they own. Separate North American and European marketing teams should only see accounts in their respective regions. The Inside Sales Team needs to see all accounts in Salesforce.How should an app builder accomplish this?",
      options: [
        "A. Set the Organization-Wide Default to Public for accounts. Create profiles for each Marketing Team, and create an Inside Sales Team role that is at the top of the Role Hierarchy.",
        'B. Set the Organization-Wide Default to Public for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team permission set with the "View All" setting for accounts.',
        'C. Set the Organization-Wide Default to Private for accounts. Create permission sets for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
        'D. Set the Organization-Wide Default to Private for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
      ],
      answer: "B",
      explanation: "",
      title: "Question 396",
    },
    {
      content:
        "The app builder has just created a Visual Workflow for the VP of Service.Which two Flow be accessed by users? (Choose two.)",
      options: [
        "A. Custom Button",
        "B. Quick Action",
        "C. Visual Workflow Launcher",
        "D. From a Process",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 397",
    },
    {
      content:
        "Which two metadata changes can be made directly in a production environment without deploying from a sandbox? (Choose two.)",
      options: [
        "A. Validation rules",
        "B. Apex Triggers",
        "C. Apex Classes",
        "D. Visualforce pages",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 398",
    },
    {
      content:
        "The Training team at Universal Containers uses a custom Training object to track their customer training sessions. An app builder needs to create a relationship between the Training object and the related Students' record.Which two statements are true when creating a Student Lookup field on the Training object? (Choose two.)",
      options: [
        "A. On Training record, the Student Lookup field can be made optional.",
        "B. On Student record, users can set up Roll-up summary field on Training records.",
        "C. On Training record, users can only delete Students, if they have access to it.",
        "D. Cross-object field updates between Training and Student records are not supported.",
      ],
      answer: "A,C",
      explanation: "",
      title: "Question 399",
    },
    {
      content:
        "An app builder would like to streamline the user experience by reflecting summarized calculations of specific fields on various objects.Which three field types could be used in roll-up summary fields to accomplish this? (Choose three.)",
      options: [
        "A. Checkbox",
        "B. Date",
        "C. Percent",
        "D. Time",
        "E. Currency",
      ],
      answer: "B,C,E",
      explanation: "",
      title: "Question 400",
    },
    {
      content:
        "Universal Containers manages internal projects by department using a custom object called Projects. Only employees in the project's respective department should have view access to all of the department's project records. If an employee changes job roles and moves to another department, the employee should no longer have access to the projects within their former department.Which two options will meet these requirements assuming the organization-wide default for Projects is set to Private? (Choose two.)",
      options: [
        "A. Create a criteria-based sharing rule using the Project's department that grants access to users by profiles.",
        "B. Create a criteria-based sharing rule using the Project's department that grants access to users by permission sets.",
        "C. Create a criteria-based sharing rule using the Project's department that grants access to users by roles.",
        "D. Create a criteria-based sharing rule using the Project's department that grants access to users by public groups.",
      ],
      answer: "C,D",
      explanation: "",
      title: "Question 401",
    },
    {
      content:
        "Universal Containers has a customer base where many customers have the same or similar company names.Which functionality should be configured to improve an end user's search experience? (Choose two.)",
      options: [
        "A. Update the account search layouts search filter fields.",
        "B. Update the account search layouts accounts tab columns displayed.",
        "C. Update the account search layouts search results columns displayed.",
        "D. Update the account search layouts list view filter settings.",
      ],
      answer: "B,C",
      explanation: "",
      title: "Question 402",
    },
    {
      content:
        "An app builder creates an Account validation rule on the Industry field that will throw an error if the length of the field is longer than 6 characters. Another app builder creates a workflow with a field update that sets the Industry field to Technology whenever the Billing City field is set to San Francisco.What will happen the next time a sales person saves an Account with a Billing City of San Francisco?",
      options: [
        "A. The record will save and the Industry field will change to Technology.",
        "B. The record will not save and no error message will be displayed.",
        "C. The record will not save the validation rule's error message will be displayed.",
        "D. The record will save but the Industry field will not change to Territory.",
      ],
      answer: "B",
      explanation: "",
      title: "Question 403",
    },
    {
      content: "What is a true statement when deleting a dashboard?",
      options: [
        "A. Deleting a dashboard also deletes the components within it. It does not delete the custom reports used by the components.",
        "B. Deleting a dashboard does not move the dashboard to the Recycle Bin and therefore the dashboard cannot be recovered.",
        "C. Deleting a dashboard also deletes the components within it as well as the custom reports used by the components.",
        "D. Deleting a dashboard requires a user to first edit the components to remove the underlying reports.",
      ],
      answer: "A",
      explanation: "",
      title: "Question 404",
    },
    {
      content:
        "A junction object has two Master-Detail relationships, a primary and a secondary master object.What happens to a junction object record when both associated master records are deleted?",
      options: [
        "A. The junction object record is permanently deleted and can't be restored.",
        "B. The delete operation cannot be performed on both master records.",
        "C. The delete operation is not allowed with Roll-up summary fields defined.",
        "D. The junction object records is deleted and placed in the recycle bin.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 405",
    },
    {
      content:
        "Universal Containers wants its Field Sales team to only see the accounts that they own. Separate North American and European marketing teams should only see accounts in their respective regions. The Inside Sales Team needs to see all accounts in Salesforce.How should an app builder accomplish this?",
      options: [
        "A. Set the Organization-Wide Default to Public for accounts. Create profiles for each Marketing Team, and create an Inside Sales Team role that is at the top of the Role Hierarchy.",
        'B. Set the Organization-Wide Default to Public for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team permission set with the "View All" setting for accounts.',
        'C. Set the Organization-Wide Default to Private for accounts. Create permission sets for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
        'D. Set the Organization-Wide Default to Private for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
      ],
      answer: "B",
      explanation: "",
      title: "Question 406",
    },
    {
      content:
        "The app builder has just created a Visual Workflow for the VP of Service.Which two Flow be accessed by users? (Choose two.)",
      options: [
        "A. Custom Button",
        "B. Quick Action",
        "C. Visual Workflow Launcher",
        "D. From a Process",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 407",
    },
    {
      content:
        "Which two metadata changes can be made directly in a production environment without deploying from a sandbox? (Choose two.)",
      options: [
        "A. Validation rules",
        "B. Apex Triggers",
        "C. Apex Classes",
        "D. Visualforce pages",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 408",
    },
    {
      content:
        "The Training team at Universal Containers uses a custom Training object to track their customer training sessions. An app builder needs to create a relationship between the Training object and the related Students' record.Which two statements are true when creating a Student Lookup field on the Training object? (Choose two.)",
      options: [
        "A. On Training record, the Student Lookup field can be made optional.",
        "B. On Student record, users can set up Roll-up summary field on Training records.",
        "C. On Training record, users can only delete Students, if they have access to it.",
        "D. Cross-object field updates between Training and Student records are not supported.",
      ],
      answer: "A,C",
      explanation: "",
      title: "Question 409",
    },
    {
      content:
        "An app builder would like to streamline the user experience by reflecting summarized calculations of specific fields on various objects.Which three field types could be used in roll-up summary fields to accomplish this? (Choose three.)",
      options: [
        "A. Checkbox",
        "B. Date",
        "C. Percent",
        "D. Time",
        "E. Currency",
      ],
      answer: "B,C,E",
      explanation: "",
      title: "Question 410",
    },
    {
      content:
        "Universal Containers manages internal projects by department using a custom object called Projects. Only employees in the project's respective department should have view access to all of the department's project records. If an employee changes job roles and moves to another department, the employee should no longer have access to the projects within their former department.Which two options will meet these requirements assuming the organization-wide default for Projects is set to Private? (Choose two.)",
      options: [
        "A. Create a criteria-based sharing rule using the Project's department that grants access to users by profiles.",
        "B. Create a criteria-based sharing rule using the Project's department that grants access to users by permission sets.",
        "C. Create a criteria-based sharing rule using the Project's department that grants access to users by roles.",
        "D. Create a criteria-based sharing rule using the Project's department that grants access to users by public groups.",
      ],
      answer: "C,D",
      explanation: "",
      title: "Question 411",
    },
    {
      content:
        "Universal Containers has a customer base where many customers have the same or similar company names.Which functionality should be configured to improve an end user's search experience? (Choose two.)",
      options: [
        "A. Update the account search layouts search filter fields.",
        "B. Update the account search layouts accounts tab columns displayed.",
        "C. Update the account search layouts search results columns displayed.",
        "D. Update the account search layouts list view filter settings.",
      ],
      answer: "B,C",
      explanation: "",
      title: "Question 412",
    },
    {
      content:
        "An app builder creates an Account validation rule on the Industry field that will throw an error if the length of the field is longer than 6 characters. Another app builder creates a workflow with a field update that sets the Industry field to Technology whenever the Billing City field is set to San Francisco.What will happen the next time a sales person saves an Account with a Billing City of San Francisco?",
      options: [
        "A. The record will save and the Industry field will change to Technology.",
        "B. The record will not save and no error message will be displayed.",
        "C. The record will not save the validation rule's error message will be displayed.",
        "D. The record will save but the Industry field will not change to Territory.",
      ],
      answer: "B",
      explanation: "",
      title: "Question 413",
    },
    {
      content: "What is a true statement when deleting a dashboard?",
      options: [
        "A. Deleting a dashboard also deletes the components within it. It does not delete the custom reports used by the components.",
        "B. Deleting a dashboard does not move the dashboard to the Recycle Bin and therefore the dashboard cannot be recovered.",
        "C. Deleting a dashboard also deletes the components within it as well as the custom reports used by the components.",
        "D. Deleting a dashboard requires a user to first edit the components to remove the underlying reports.",
      ],
      answer: "A",
      explanation: "",
      title: "Question 414",
    },
    {
      content:
        "A junction object has two Master-Detail relationships, a primary and a secondary master object.What happens to a junction object record when both associated master records are deleted?",
      options: [
        "A. The junction object record is permanently deleted and can't be restored.",
        "B. The delete operation cannot be performed on both master records.",
        "C. The delete operation is not allowed with Roll-up summary fields defined.",
        "D. The junction object records is deleted and placed in the recycle bin.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 415",
    },
    {
      content:
        "Universal Containers wants its Field Sales team to only see the accounts that they own. Separate North American and European marketing teams should only see accounts in their respective regions. The Inside Sales Team needs to see all accounts in Salesforce.How should an app builder accomplish this?",
      options: [
        "A. Set the Organization-Wide Default to Public for accounts. Create profiles for each Marketing Team, and create an Inside Sales Team role that is at the top of the Role Hierarchy.",
        'B. Set the Organization-Wide Default to Public for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team permission set with the "View All" setting for accounts.',
        'C. Set the Organization-Wide Default to Private for accounts. Create permission sets for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
        'D. Set the Organization-Wide Default to Private for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
      ],
      answer: "B",
      explanation: "",
      title: "Question 416",
    },
    {
      content:
        "The app builder has just created a Visual Workflow for the VP of Service.Which two Flow be accessed by users? (Choose two.)",
      options: [
        "A. Custom Button",
        "B. Quick Action",
        "C. Visual Workflow Launcher",
        "D. From a Process",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 417",
    },
    {
      content:
        "Which two metadata changes can be made directly in a production environment without deploying from a sandbox? (Choose two.)",
      options: [
        "A. Validation rules",
        "B. Apex Triggers",
        "C. Apex Classes",
        "D. Visualforce pages",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 418",
    },
    {
      content:
        "The Training team at Universal Containers uses a custom Training object to track their customer training sessions. An app builder needs to create a relationship between the Training object and the related Students' record.Which two statements are true when creating a Student Lookup field on the Training object? (Choose two.)",
      options: [
        "A. On Training record, the Student Lookup field can be made optional.",
        "B. On Student record, users can set up Roll-up summary field on Training records.",
        "C. On Training record, users can only delete Students, if they have access to it.",
        "D. Cross-object field updates between Training and Student records are not supported.",
      ],
      answer: "A,C",
      explanation: "",
      title: "Question 419",
    },
    {
      content:
        "An app builder would like to streamline the user experience by reflecting summarized calculations of specific fields on various objects.Which three field types could be used in roll-up summary fields to accomplish this? (Choose three.)",
      options: [
        "A. Checkbox",
        "B. Date",
        "C. Percent",
        "D. Time",
        "E. Currency",
      ],
      answer: "B,C,E",
      explanation: "",
      title: "Question 420",
    },
    {
      content:
        "Universal Containers manages internal projects by department using a custom object called Projects. Only employees in the project's respective department should have view access to all of the department's project records. If an employee changes job roles and moves to another department, the employee should no longer have access to the projects within their former department.Which two options will meet these requirements assuming the organization-wide default for Projects is set to Private? (Choose two.)",
      options: [
        "A. Create a criteria-based sharing rule using the Project's department that grants access to users by profiles.",
        "B. Create a criteria-based sharing rule using the Project's department that grants access to users by permission sets.",
        "C. Create a criteria-based sharing rule using the Project's department that grants access to users by roles.",
        "D. Create a criteria-based sharing rule using the Project's department that grants access to users by public groups.",
      ],
      answer: "C,D",
      explanation: "",
      title: "Question 421",
    },
    {
      content:
        "Universal Containers has a customer base where many customers have the same or similar company names.Which functionality should be configured to improve an end user's search experience? (Choose two.)",
      options: [
        "A. Update the account search layouts search filter fields.",
        "B. Update the account search layouts accounts tab columns displayed.",
        "C. Update the account search layouts search results columns displayed.",
        "D. Update the account search layouts list view filter settings.",
      ],
      answer: "B,C",
      explanation: "",
      title: "Question 422",
    },
    {
      content:
        "An app builder creates an Account validation rule on the Industry field that will throw an error if the length of the field is longer than 6 characters. Another app builder creates a workflow with a field update that sets the Industry field to Technology whenever the Billing City field is set to San Francisco.What will happen the next time a sales person saves an Account with a Billing City of San Francisco?",
      options: [
        "A. The record will save and the Industry field will change to Technology.",
        "B. The record will not save and no error message will be displayed.",
        "C. The record will not save the validation rule's error message will be displayed.",
        "D. The record will save but the Industry field will not change to Territory.",
      ],
      answer: "B",
      explanation: "",
      title: "Question 423",
    },
    {
      content: "What is a true statement when deleting a dashboard?",
      options: [
        "A. Deleting a dashboard also deletes the components within it. It does not delete the custom reports used by the components.",
        "B. Deleting a dashboard does not move the dashboard to the Recycle Bin and therefore the dashboard cannot be recovered.",
        "C. Deleting a dashboard also deletes the components within it as well as the custom reports used by the components.",
        "D. Deleting a dashboard requires a user to first edit the components to remove the underlying reports.",
      ],
      answer: "A",
      explanation: "",
      title: "Question 424",
    },
    {
      content:
        "A junction object has two Master-Detail relationships, a primary and a secondary master object.What happens to a junction object record when both associated master records are deleted?",
      options: [
        "A. The junction object record is permanently deleted and can't be restored.",
        "B. The delete operation cannot be performed on both master records.",
        "C. The delete operation is not allowed with Roll-up summary fields defined.",
        "D. The junction object records is deleted and placed in the recycle bin.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 425",
    },
    {
      content:
        "Universal Containers wants its Field Sales team to only see the accounts that they own. Separate North American and European marketing teams should only see accounts in their respective regions. The Inside Sales Team needs to see all accounts in Salesforce.How should an app builder accomplish this?",
      options: [
        "A. Set the Organization-Wide Default to Public for accounts. Create profiles for each Marketing Team, and create an Inside Sales Team role that is at the top of the Role Hierarchy.",
        'B. Set the Organization-Wide Default to Public for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team permission set with the "View All" setting for accounts.',
        'C. Set the Organization-Wide Default to Private for accounts. Create permission sets for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
        'D. Set the Organization-Wide Default to Private for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
      ],
      answer: "B",
      explanation: "",
      title: "Question 426",
    },
    {
      content:
        "The app builder has just created a Visual Workflow for the VP of Service.Which two Flow be accessed by users? (Choose two.)",
      options: [
        "A. Custom Button",
        "B. Quick Action",
        "C. Visual Workflow Launcher",
        "D. From a Process",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 427",
    },
    {
      content:
        "Which two metadata changes can be made directly in a production environment without deploying from a sandbox? (Choose two.)",
      options: [
        "A. Validation rules",
        "B. Apex Triggers",
        "C. Apex Classes",
        "D. Visualforce pages",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 428",
    },
    {
      content:
        "The Training team at Universal Containers uses a custom Training object to track their customer training sessions. An app builder needs to create a relationship between the Training object and the related Students' record.Which two statements are true when creating a Student Lookup field on the Training object? (Choose two.)",
      options: [
        "A. On Training record, the Student Lookup field can be made optional.",
        "B. On Student record, users can set up Roll-up summary field on Training records.",
        "C. On Training record, users can only delete Students, if they have access to it.",
        "D. Cross-object field updates between Training and Student records are not supported.",
      ],
      answer: "A,C",
      explanation: "",
      title: "Question 429",
    },
    {
      content:
        "An app builder would like to streamline the user experience by reflecting summarized calculations of specific fields on various objects.Which three field types could be used in roll-up summary fields to accomplish this? (Choose three.)",
      options: [
        "A. Checkbox",
        "B. Date",
        "C. Percent",
        "D. Time",
        "E. Currency",
      ],
      answer: "B,C,E",
      explanation: "",
      title: "Question 430",
    },
    {
      content:
        "Universal Containers manages internal projects by department using a custom object called Projects. Only employees in the project's respective department should have view access to all of the department's project records. If an employee changes job roles and moves to another department, the employee should no longer have access to the projects within their former department.Which two options will meet these requirements assuming the organization-wide default for Projects is set to Private? (Choose two.)",
      options: [
        "A. Create a criteria-based sharing rule using the Project's department that grants access to users by profiles.",
        "B. Create a criteria-based sharing rule using the Project's department that grants access to users by permission sets.",
        "C. Create a criteria-based sharing rule using the Project's department that grants access to users by roles.",
        "D. Create a criteria-based sharing rule using the Project's department that grants access to users by public groups.",
      ],
      answer: "C,D",
      explanation: "",
      title: "Question 431",
    },
    {
      content:
        "Universal Containers has a customer base where many customers have the same or similar company names.Which functionality should be configured to improve an end user's search experience? (Choose two.)",
      options: [
        "A. Update the account search layouts search filter fields.",
        "B. Update the account search layouts accounts tab columns displayed.",
        "C. Update the account search layouts search results columns displayed.",
        "D. Update the account search layouts list view filter settings.",
      ],
      answer: "B,C",
      explanation: "",
      title: "Question 432",
    },
    {
      content:
        "An app builder creates an Account validation rule on the Industry field that will throw an error if the length of the field is longer than 6 characters. Another app builder creates a workflow with a field update that sets the Industry field to Technology whenever the Billing City field is set to San Francisco.What will happen the next time a sales person saves an Account with a Billing City of San Francisco?",
      options: [
        "A. The record will save and the Industry field will change to Technology.",
        "B. The record will not save and no error message will be displayed.",
        "C. The record will not save the validation rule's error message will be displayed.",
        "D. The record will save but the Industry field will not change to Territory.",
      ],
      answer: "B",
      explanation: "",
      title: "Question 433",
    },
    {
      content: "What is a true statement when deleting a dashboard?",
      options: [
        "A. Deleting a dashboard also deletes the components within it. It does not delete the custom reports used by the components.",
        "B. Deleting a dashboard does not move the dashboard to the Recycle Bin and therefore the dashboard cannot be recovered.",
        "C. Deleting a dashboard also deletes the components within it as well as the custom reports used by the components.",
        "D. Deleting a dashboard requires a user to first edit the components to remove the underlying reports.",
      ],
      answer: "A",
      explanation: "",
      title: "Question 434",
    },
    {
      content:
        "A junction object has two Master-Detail relationships, a primary and a secondary master object.What happens to a junction object record when both associated master records are deleted?",
      options: [
        "A. The junction object record is permanently deleted and can't be restored.",
        "B. The delete operation cannot be performed on both master records.",
        "C. The delete operation is not allowed with Roll-up summary fields defined.",
        "D. The junction object records is deleted and placed in the recycle bin.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 435",
    },
    {
      content:
        "Universal Containers wants its Field Sales team to only see the accounts that they own. Separate North American and European marketing teams should only see accounts in their respective regions. The Inside Sales Team needs to see all accounts in Salesforce.How should an app builder accomplish this?",
      options: [
        "A. Set the Organization-Wide Default to Public for accounts. Create profiles for each Marketing Team, and create an Inside Sales Team role that is at the top of the Role Hierarchy.",
        'B. Set the Organization-Wide Default to Public for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team permission set with the "View All" setting for accounts.',
        'C. Set the Organization-Wide Default to Private for accounts. Create permission sets for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
        'D. Set the Organization-Wide Default to Private for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
      ],
      answer: "B",
      explanation: "",
      title: "Question 436",
    },
    {
      content:
        "The app builder has just created a Visual Workflow for the VP of Service.Which two Flow be accessed by users? (Choose two.)",
      options: [
        "A. Custom Button",
        "B. Quick Action",
        "C. Visual Workflow Launcher",
        "D. From a Process",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 437",
    },
    {
      content:
        "Which two metadata changes can be made directly in a production environment without deploying from a sandbox? (Choose two.)",
      options: [
        "A. Validation rules",
        "B. Apex Triggers",
        "C. Apex Classes",
        "D. Visualforce pages",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 438",
    },
    {
      content:
        "The Training team at Universal Containers uses a custom Training object to track their customer training sessions. An app builder needs to create a relationship between the Training object and the related Students' record.Which two statements are true when creating a Student Lookup field on the Training object? (Choose two.)",
      options: [
        "A. On Training record, the Student Lookup field can be made optional.",
        "B. On Student record, users can set up Roll-up summary field on Training records.",
        "C. On Training record, users can only delete Students, if they have access to it.",
        "D. Cross-object field updates between Training and Student records are not supported.",
      ],
      answer: "A,C",
      explanation: "",
      title: "Question 439",
    },
    {
      content:
        "An app builder would like to streamline the user experience by reflecting summarized calculations of specific fields on various objects.Which three field types could be used in roll-up summary fields to accomplish this? (Choose three.)",
      options: [
        "A. Checkbox",
        "B. Date",
        "C. Percent",
        "D. Time",
        "E. Currency",
      ],
      answer: "B,C,E",
      explanation: "",
      title: "Question 440",
    },
    {
      content:
        "Universal Containers manages internal projects by department using a custom object called Projects. Only employees in the project's respective department should have view access to all of the department's project records. If an employee changes job roles and moves to another department, the employee should no longer have access to the projects within their former department.Which two options will meet these requirements assuming the organization-wide default for Projects is set to Private? (Choose two.)",
      options: [
        "A. Create a criteria-based sharing rule using the Project's department that grants access to users by profiles.",
        "B. Create a criteria-based sharing rule using the Project's department that grants access to users by permission sets.",
        "C. Create a criteria-based sharing rule using the Project's department that grants access to users by roles.",
        "D. Create a criteria-based sharing rule using the Project's department that grants access to users by public groups.",
      ],
      answer: "C,D",
      explanation: "",
      title: "Question 441",
    },
    {
      content:
        "Universal Containers has a customer base where many customers have the same or similar company names.Which functionality should be configured to improve an end user's search experience? (Choose two.)",
      options: [
        "A. Update the account search layouts search filter fields.",
        "B. Update the account search layouts accounts tab columns displayed.",
        "C. Update the account search layouts search results columns displayed.",
        "D. Update the account search layouts list view filter settings.",
      ],
      answer: "B,C",
      explanation: "",
      title: "Question 442",
    },
    {
      content:
        "An app builder creates an Account validation rule on the Industry field that will throw an error if the length of the field is longer than 6 characters. Another app builder creates a workflow with a field update that sets the Industry field to Technology whenever the Billing City field is set to San Francisco.What will happen the next time a sales person saves an Account with a Billing City of San Francisco?",
      options: [
        "A. The record will save and the Industry field will change to Technology.",
        "B. The record will not save and no error message will be displayed.",
        "C. The record will not save the validation rule's error message will be displayed.",
        "D. The record will save but the Industry field will not change to Territory.",
      ],
      answer: "B",
      explanation: "",
      title: "Question 443",
    },
    {
      content: "What is a true statement when deleting a dashboard?",
      options: [
        "A. Deleting a dashboard also deletes the components within it. It does not delete the custom reports used by the components.",
        "B. Deleting a dashboard does not move the dashboard to the Recycle Bin and therefore the dashboard cannot be recovered.",
        "C. Deleting a dashboard also deletes the components within it as well as the custom reports used by the components.",
        "D. Deleting a dashboard requires a user to first edit the components to remove the underlying reports.",
      ],
      answer: "A",
      explanation: "",
      title: "Question 444",
    },
    {
      content:
        "A junction object has two Master-Detail relationships, a primary and a secondary master object.What happens to a junction object record when both associated master records are deleted?",
      options: [
        "A. The junction object record is permanently deleted and can't be restored.",
        "B. The delete operation cannot be performed on both master records.",
        "C. The delete operation is not allowed with Roll-up summary fields defined.",
        "D. The junction object records is deleted and placed in the recycle bin.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 445",
    },
    {
      content:
        "Universal Containers wants its Field Sales team to only see the accounts that they own. Separate North American and European marketing teams should only see accounts in their respective regions. The Inside Sales Team needs to see all accounts in Salesforce.How should an app builder accomplish this?",
      options: [
        "A. Set the Organization-Wide Default to Public for accounts. Create profiles for each Marketing Team, and create an Inside Sales Team role that is at the top of the Role Hierarchy.",
        'B. Set the Organization-Wide Default to Public for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team permission set with the "View All" setting for accounts.',
        'C. Set the Organization-Wide Default to Private for accounts. Create permission sets for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
        'D. Set the Organization-Wide Default to Private for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
      ],
      answer: "B",
      explanation: "",
      title: "Question 446",
    },
    {
      content:
        "The app builder has just created a Visual Workflow for the VP of Service.Which two Flow be accessed by users? (Choose two.)",
      options: [
        "A. Custom Button",
        "B. Quick Action",
        "C. Visual Workflow Launcher",
        "D. From a Process",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 447",
    },
    {
      content:
        "Which two metadata changes can be made directly in a production environment without deploying from a sandbox? (Choose two.)",
      options: [
        "A. Validation rules",
        "B. Apex Triggers",
        "C. Apex Classes",
        "D. Visualforce pages",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 448",
    },
    {
      content:
        "The Training team at Universal Containers uses a custom Training object to track their customer training sessions. An app builder needs to create a relationship between the Training object and the related Students' record.Which two statements are true when creating a Student Lookup field on the Training object? (Choose two.)",
      options: [
        "A. On Training record, the Student Lookup field can be made optional.",
        "B. On Student record, users can set up Roll-up summary field on Training records.",
        "C. On Training record, users can only delete Students, if they have access to it.",
        "D. Cross-object field updates between Training and Student records are not supported.",
      ],
      answer: "A,C",
      explanation: "",
      title: "Question 449",
    },
    {
      content:
        "An app builder would like to streamline the user experience by reflecting summarized calculations of specific fields on various objects.Which three field types could be used in roll-up summary fields to accomplish this? (Choose three.)",
      options: [
        "A. Checkbox",
        "B. Date",
        "C. Percent",
        "D. Time",
        "E. Currency",
      ],
      answer: "B,C,E",
      explanation: "",
      title: "Question 450",
    },
    {
      content:
        "Universal Containers manages internal projects by department using a custom object called Projects. Only employees in the project's respective department should have view access to all of the department's project records. If an employee changes job roles and moves to another department, the employee should no longer have access to the projects within their former department.Which two options will meet these requirements assuming the organization-wide default for Projects is set to Private? (Choose two.)",
      options: [
        "A. Create a criteria-based sharing rule using the Project's department that grants access to users by profiles.",
        "B. Create a criteria-based sharing rule using the Project's department that grants access to users by permission sets.",
        "C. Create a criteria-based sharing rule using the Project's department that grants access to users by roles.",
        "D. Create a criteria-based sharing rule using the Project's department that grants access to users by public groups.",
      ],
      answer: "C,D",
      explanation: "",
      title: "Question 451",
    },
    {
      content:
        "Universal Containers has a customer base where many customers have the same or similar company names.Which functionality should be configured to improve an end user's search experience? (Choose two.)",
      options: [
        "A. Update the account search layouts search filter fields.",
        "B. Update the account search layouts accounts tab columns displayed.",
        "C. Update the account search layouts search results columns displayed.",
        "D. Update the account search layouts list view filter settings.",
      ],
      answer: "B,C",
      explanation: "",
      title: "Question 452",
    },
    {
      content:
        "An app builder creates an Account validation rule on the Industry field that will throw an error if the length of the field is longer than 6 characters. Another app builder creates a workflow with a field update that sets the Industry field to Technology whenever the Billing City field is set to San Francisco.What will happen the next time a sales person saves an Account with a Billing City of San Francisco?",
      options: [
        "A. The record will save and the Industry field will change to Technology.",
        "B. The record will not save and no error message will be displayed.",
        "C. The record will not save the validation rule's error message will be displayed.",
        "D. The record will save but the Industry field will not change to Territory.",
      ],
      answer: "B",
      explanation: "",
      title: "Question 453",
    },
    {
      content: "What is a true statement when deleting a dashboard?",
      options: [
        "A. Deleting a dashboard also deletes the components within it. It does not delete the custom reports used by the components.",
        "B. Deleting a dashboard does not move the dashboard to the Recycle Bin and therefore the dashboard cannot be recovered.",
        "C. Deleting a dashboard also deletes the components within it as well as the custom reports used by the components.",
        "D. Deleting a dashboard requires a user to first edit the components to remove the underlying reports.",
      ],
      answer: "A",
      explanation: "",
      title: "Question 454",
    },
    {
      content:
        "A junction object has two Master-Detail relationships, a primary and a secondary master object.What happens to a junction object record when both associated master records are deleted?",
      options: [
        "A. The junction object record is permanently deleted and can't be restored.",
        "B. The delete operation cannot be performed on both master records.",
        "C. The delete operation is not allowed with Roll-up summary fields defined.",
        "D. The junction object records is deleted and placed in the recycle bin.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 455",
    },
    {
      content:
        "Universal Containers wants its Field Sales team to only see the accounts that they own. Separate North American and European marketing teams should only see accounts in their respective regions. The Inside Sales Team needs to see all accounts in Salesforce.How should an app builder accomplish this?",
      options: [
        "A. Set the Organization-Wide Default to Public for accounts. Create profiles for each Marketing Team, and create an Inside Sales Team role that is at the top of the Role Hierarchy.",
        'B. Set the Organization-Wide Default to Public for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team permission set with the "View All" setting for accounts.',
        'C. Set the Organization-Wide Default to Private for accounts. Create permission sets for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
        'D. Set the Organization-Wide Default to Private for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
      ],
      answer: "B",
      explanation: "",
      title: "Question 456",
    },
    {
      content:
        "The app builder has just created a Visual Workflow for the VP of Service.Which two Flow be accessed by users? (Choose two.)",
      options: [
        "A. Custom Button",
        "B. Quick Action",
        "C. Visual Workflow Launcher",
        "D. From a Process",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 457",
    },
    {
      content:
        "Which two metadata changes can be made directly in a production environment without deploying from a sandbox? (Choose two.)",
      options: [
        "A. Validation rules",
        "B. Apex Triggers",
        "C. Apex Classes",
        "D. Visualforce pages",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 458",
    },
    {
      content:
        "The Training team at Universal Containers uses a custom Training object to track their customer training sessions. An app builder needs to create a relationship between the Training object and the related Students' record.Which two statements are true when creating a Student Lookup field on the Training object? (Choose two.)",
      options: [
        "A. On Training record, the Student Lookup field can be made optional.",
        "B. On Student record, users can set up Roll-up summary field on Training records.",
        "C. On Training record, users can only delete Students, if they have access to it.",
        "D. Cross-object field updates between Training and Student records are not supported.",
      ],
      answer: "A,C",
      explanation: "",
      title: "Question 459",
    },
    {
      content:
        "An app builder would like to streamline the user experience by reflecting summarized calculations of specific fields on various objects.Which three field types could be used in roll-up summary fields to accomplish this? (Choose three.)",
      options: [
        "A. Checkbox",
        "B. Date",
        "C. Percent",
        "D. Time",
        "E. Currency",
      ],
      answer: "B,C,E",
      explanation: "",
      title: "Question 460",
    },
    {
      content:
        "Universal Containers manages internal projects by department using a custom object called Projects. Only employees in the project's respective department should have view access to all of the department's project records. If an employee changes job roles and moves to another department, the employee should no longer have access to the projects within their former department.Which two options will meet these requirements assuming the organization-wide default for Projects is set to Private? (Choose two.)",
      options: [
        "A. Create a criteria-based sharing rule using the Project's department that grants access to users by profiles.",
        "B. Create a criteria-based sharing rule using the Project's department that grants access to users by permission sets.",
        "C. Create a criteria-based sharing rule using the Project's department that grants access to users by roles.",
        "D. Create a criteria-based sharing rule using the Project's department that grants access to users by public groups.",
      ],
      answer: "C,D",
      explanation: "",
      title: "Question 461",
    },
    {
      content:
        "Universal Containers has a customer base where many customers have the same or similar company names.Which functionality should be configured to improve an end user's search experience? (Choose two.)",
      options: [
        "A. Update the account search layouts search filter fields.",
        "B. Update the account search layouts accounts tab columns displayed.",
        "C. Update the account search layouts search results columns displayed.",
        "D. Update the account search layouts list view filter settings.",
      ],
      answer: "B,C",
      explanation: "",
      title: "Question 462",
    },
    {
      content:
        "An app builder creates an Account validation rule on the Industry field that will throw an error if the length of the field is longer than 6 characters. Another app builder creates a workflow with a field update that sets the Industry field to Technology whenever the Billing City field is set to San Francisco.What will happen the next time a sales person saves an Account with a Billing City of San Francisco?",
      options: [
        "A. The record will save and the Industry field will change to Technology.",
        "B. The record will not save and no error message will be displayed.",
        "C. The record will not save the validation rule's error message will be displayed.",
        "D. The record will save but the Industry field will not change to Territory.",
      ],
      answer: "B",
      explanation: "",
      title: "Question 463",
    },
    {
      content: "What is a true statement when deleting a dashboard?",
      options: [
        "A. Deleting a dashboard also deletes the components within it. It does not delete the custom reports used by the components.",
        "B. Deleting a dashboard does not move the dashboard to the Recycle Bin and therefore the dashboard cannot be recovered.",
        "C. Deleting a dashboard also deletes the components within it as well as the custom reports used by the components.",
        "D. Deleting a dashboard requires a user to first edit the components to remove the underlying reports.",
      ],
      answer: "A",
      explanation: "",
      title: "Question 464",
    },
    {
      content:
        "A junction object has two Master-Detail relationships, a primary and a secondary master object.What happens to a junction object record when both associated master records are deleted?",
      options: [
        "A. The junction object record is permanently deleted and can't be restored.",
        "B. The delete operation cannot be performed on both master records.",
        "C. The delete operation is not allowed with Roll-up summary fields defined.",
        "D. The junction object records is deleted and placed in the recycle bin.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 465",
    },
    {
      content:
        "Universal Containers wants its Field Sales team to only see the accounts that they own. Separate North American and European marketing teams should only see accounts in their respective regions. The Inside Sales Team needs to see all accounts in Salesforce.How should an app builder accomplish this?",
      options: [
        "A. Set the Organization-Wide Default to Public for accounts. Create profiles for each Marketing Team, and create an Inside Sales Team role that is at the top of the Role Hierarchy.",
        'B. Set the Organization-Wide Default to Public for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team permission set with the "View All" setting for accounts.',
        'C. Set the Organization-Wide Default to Private for accounts. Create permission sets for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
        'D. Set the Organization-Wide Default to Private for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
      ],
      answer: "B",
      explanation: "",
      title: "Question 466",
    },
    {
      content:
        "The app builder has just created a Visual Workflow for the VP of Service.Which two Flow be accessed by users? (Choose two.)",
      options: [
        "A. Custom Button",
        "B. Quick Action",
        "C. Visual Workflow Launcher",
        "D. From a Process",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 467",
    },
    {
      content:
        "Which two metadata changes can be made directly in a production environment without deploying from a sandbox? (Choose two.)",
      options: [
        "A. Validation rules",
        "B. Apex Triggers",
        "C. Apex Classes",
        "D. Visualforce pages",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 468",
    },
    {
      content:
        "The Training team at Universal Containers uses a custom Training object to track their customer training sessions. An app builder needs to create a relationship between the Training object and the related Students' record.Which two statements are true when creating a Student Lookup field on the Training object? (Choose two.)",
      options: [
        "A. On Training record, the Student Lookup field can be made optional.",
        "B. On Student record, users can set up Roll-up summary field on Training records.",
        "C. On Training record, users can only delete Students, if they have access to it.",
        "D. Cross-object field updates between Training and Student records are not supported.",
      ],
      answer: "A,C",
      explanation: "",
      title: "Question 469",
    },
    {
      content:
        "An app builder would like to streamline the user experience by reflecting summarized calculations of specific fields on various objects.Which three field types could be used in roll-up summary fields to accomplish this? (Choose three.)",
      options: [
        "A. Checkbox",
        "B. Date",
        "C. Percent",
        "D. Time",
        "E. Currency",
      ],
      answer: "B,C,E",
      explanation: "",
      title: "Question 470",
    },
    {
      content:
        "Universal Containers manages internal projects by department using a custom object called Projects. Only employees in the project's respective department should have view access to all of the department's project records. If an employee changes job roles and moves to another department, the employee should no longer have access to the projects within their former department.Which two options will meet these requirements assuming the organization-wide default for Projects is set to Private? (Choose two.)",
      options: [
        "A. Create a criteria-based sharing rule using the Project's department that grants access to users by profiles.",
        "B. Create a criteria-based sharing rule using the Project's department that grants access to users by permission sets.",
        "C. Create a criteria-based sharing rule using the Project's department that grants access to users by roles.",
        "D. Create a criteria-based sharing rule using the Project's department that grants access to users by public groups.",
      ],
      answer: "C,D",
      explanation: "",
      title: "Question 471",
    },
    {
      content:
        "Universal Containers has a customer base where many customers have the same or similar company names.Which functionality should be configured to improve an end user's search experience? (Choose two.)",
      options: [
        "A. Update the account search layouts search filter fields.",
        "B. Update the account search layouts accounts tab columns displayed.",
        "C. Update the account search layouts search results columns displayed.",
        "D. Update the account search layouts list view filter settings.",
      ],
      answer: "B,C",
      explanation: "",
      title: "Question 472",
    },
    {
      content:
        "An app builder creates an Account validation rule on the Industry field that will throw an error if the length of the field is longer than 6 characters. Another app builder creates a workflow with a field update that sets the Industry field to Technology whenever the Billing City field is set to San Francisco.What will happen the next time a sales person saves an Account with a Billing City of San Francisco?",
      options: [
        "A. The record will save and the Industry field will change to Technology.",
        "B. The record will not save and no error message will be displayed.",
        "C. The record will not save the validation rule's error message will be displayed.",
        "D. The record will save but the Industry field will not change to Territory.",
      ],
      answer: "B",
      explanation: "",
      title: "Question 473",
    },
    {
      content: "What is a true statement when deleting a dashboard?",
      options: [
        "A. Deleting a dashboard also deletes the components within it. It does not delete the custom reports used by the components.",
        "B. Deleting a dashboard does not move the dashboard to the Recycle Bin and therefore the dashboard cannot be recovered.",
        "C. Deleting a dashboard also deletes the components within it as well as the custom reports used by the components.",
        "D. Deleting a dashboard requires a user to first edit the components to remove the underlying reports.",
      ],
      answer: "A",
      explanation: "",
      title: "Question 474",
    },
    {
      content:
        "A junction object has two Master-Detail relationships, a primary and a secondary master object.What happens to a junction object record when both associated master records are deleted?",
      options: [
        "A. The junction object record is permanently deleted and can't be restored.",
        "B. The delete operation cannot be performed on both master records.",
        "C. The delete operation is not allowed with Roll-up summary fields defined.",
        "D. The junction object records is deleted and placed in the recycle bin.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 475",
    },
    {
      content:
        "Universal Containers wants its Field Sales team to only see the accounts that they own. Separate North American and European marketing teams should only see accounts in their respective regions. The Inside Sales Team needs to see all accounts in Salesforce.How should an app builder accomplish this?",
      options: [
        "A. Set the Organization-Wide Default to Public for accounts. Create profiles for each Marketing Team, and create an Inside Sales Team role that is at the top of the Role Hierarchy.",
        'B. Set the Organization-Wide Default to Public for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team permission set with the "View All" setting for accounts.',
        'C. Set the Organization-Wide Default to Private for accounts. Create permission sets for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
        'D. Set the Organization-Wide Default to Private for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
      ],
      answer: "B",
      explanation: "",
      title: "Question 476",
    },
    {
      content:
        "The app builder has just created a Visual Workflow for the VP of Service.Which two Flow be accessed by users? (Choose two.)",
      options: [
        "A. Custom Button",
        "B. Quick Action",
        "C. Visual Workflow Launcher",
        "D. From a Process",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 477",
    },
    {
      content:
        "Which two metadata changes can be made directly in a production environment without deploying from a sandbox? (Choose two.)",
      options: [
        "A. Validation rules",
        "B. Apex Triggers",
        "C. Apex Classes",
        "D. Visualforce pages",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 478",
    },
    {
      content:
        "The Training team at Universal Containers uses a custom Training object to track their customer training sessions. An app builder needs to create a relationship between the Training object and the related Students' record.Which two statements are true when creating a Student Lookup field on the Training object? (Choose two.)",
      options: [
        "A. On Training record, the Student Lookup field can be made optional.",
        "B. On Student record, users can set up Roll-up summary field on Training records.",
        "C. On Training record, users can only delete Students, if they have access to it.",
        "D. Cross-object field updates between Training and Student records are not supported.",
      ],
      answer: "A,C",
      explanation: "",
      title: "Question 479",
    },
    {
      content:
        "An app builder would like to streamline the user experience by reflecting summarized calculations of specific fields on various objects.Which three field types could be used in roll-up summary fields to accomplish this? (Choose three.)",
      options: [
        "A. Checkbox",
        "B. Date",
        "C. Percent",
        "D. Time",
        "E. Currency",
      ],
      answer: "B,C,E",
      explanation: "",
      title: "Question 480",
    },
    {
      content:
        "Universal Containers manages internal projects by department using a custom object called Projects. Only employees in the project's respective department should have view access to all of the department's project records. If an employee changes job roles and moves to another department, the employee should no longer have access to the projects within their former department.Which two options will meet these requirements assuming the organization-wide default for Projects is set to Private? (Choose two.)",
      options: [
        "A. Create a criteria-based sharing rule using the Project's department that grants access to users by profiles.",
        "B. Create a criteria-based sharing rule using the Project's department that grants access to users by permission sets.",
        "C. Create a criteria-based sharing rule using the Project's department that grants access to users by roles.",
        "D. Create a criteria-based sharing rule using the Project's department that grants access to users by public groups.",
      ],
      answer: "C,D",
      explanation: "",
      title: "Question 481",
    },
    {
      content:
        "Universal Containers has a customer base where many customers have the same or similar company names.Which functionality should be configured to improve an end user's search experience? (Choose two.)",
      options: [
        "A. Update the account search layouts search filter fields.",
        "B. Update the account search layouts accounts tab columns displayed.",
        "C. Update the account search layouts search results columns displayed.",
        "D. Update the account search layouts list view filter settings.",
      ],
      answer: "B,C",
      explanation: "",
      title: "Question 482",
    },
    {
      content:
        "An app builder creates an Account validation rule on the Industry field that will throw an error if the length of the field is longer than 6 characters. Another app builder creates a workflow with a field update that sets the Industry field to Technology whenever the Billing City field is set to San Francisco.What will happen the next time a sales person saves an Account with a Billing City of San Francisco?",
      options: [
        "A. The record will save and the Industry field will change to Technology.",
        "B. The record will not save and no error message will be displayed.",
        "C. The record will not save the validation rule's error message will be displayed.",
        "D. The record will save but the Industry field will not change to Territory.",
      ],
      answer: "B",
      explanation: "",
      title: "Question 483",
    },
    {
      content: "What is a true statement when deleting a dashboard?",
      options: [
        "A. Deleting a dashboard also deletes the components within it. It does not delete the custom reports used by the components.",
        "B. Deleting a dashboard does not move the dashboard to the Recycle Bin and therefore the dashboard cannot be recovered.",
        "C. Deleting a dashboard also deletes the components within it as well as the custom reports used by the components.",
        "D. Deleting a dashboard requires a user to first edit the components to remove the underlying reports.",
      ],
      answer: "A",
      explanation: "",
      title: "Question 484",
    },
    {
      content:
        "A junction object has two Master-Detail relationships, a primary and a secondary master object.What happens to a junction object record when both associated master records are deleted?",
      options: [
        "A. The junction object record is permanently deleted and can't be restored.",
        "B. The delete operation cannot be performed on both master records.",
        "C. The delete operation is not allowed with Roll-up summary fields defined.",
        "D. The junction object records is deleted and placed in the recycle bin.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 485",
    },
    {
      content:
        "Universal Containers wants its Field Sales team to only see the accounts that they own. Separate North American and European marketing teams should only see accounts in their respective regions. The Inside Sales Team needs to see all accounts in Salesforce.How should an app builder accomplish this?",
      options: [
        "A. Set the Organization-Wide Default to Public for accounts. Create profiles for each Marketing Team, and create an Inside Sales Team role that is at the top of the Role Hierarchy.",
        'B. Set the Organization-Wide Default to Public for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team permission set with the "View All" setting for accounts.',
        'C. Set the Organization-Wide Default to Private for accounts. Create permission sets for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
        'D. Set the Organization-Wide Default to Private for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
      ],
      answer: "B",
      explanation: "",
      title: "Question 486",
    },
    {
      content:
        "The app builder has just created a Visual Workflow for the VP of Service.Which two Flow be accessed by users? (Choose two.)",
      options: [
        "A. Custom Button",
        "B. Quick Action",
        "C. Visual Workflow Launcher",
        "D. From a Process",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 487",
    },
    {
      content:
        "Which two metadata changes can be made directly in a production environment without deploying from a sandbox? (Choose two.)",
      options: [
        "A. Validation rules",
        "B. Apex Triggers",
        "C. Apex Classes",
        "D. Visualforce pages",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 488",
    },
    {
      content:
        "The Training team at Universal Containers uses a custom Training object to track their customer training sessions. An app builder needs to create a relationship between the Training object and the related Students' record.Which two statements are true when creating a Student Lookup field on the Training object? (Choose two.)",
      options: [
        "A. On Training record, the Student Lookup field can be made optional.",
        "B. On Student record, users can set up Roll-up summary field on Training records.",
        "C. On Training record, users can only delete Students, if they have access to it.",
        "D. Cross-object field updates between Training and Student records are not supported.",
      ],
      answer: "A,C",
      explanation: "",
      title: "Question 489",
    },
    {
      content:
        "An app builder would like to streamline the user experience by reflecting summarized calculations of specific fields on various objects.Which three field types could be used in roll-up summary fields to accomplish this? (Choose three.)",
      options: [
        "A. Checkbox",
        "B. Date",
        "C. Percent",
        "D. Time",
        "E. Currency",
      ],
      answer: "B,C,E",
      explanation: "",
      title: "Question 490",
    },
    {
      content:
        "Universal Containers manages internal projects by department using a custom object called Projects. Only employees in the project's respective department should have view access to all of the department's project records. If an employee changes job roles and moves to another department, the employee should no longer have access to the projects within their former department.Which two options will meet these requirements assuming the organization-wide default for Projects is set to Private? (Choose two.)",
      options: [
        "A. Create a criteria-based sharing rule using the Project's department that grants access to users by profiles.",
        "B. Create a criteria-based sharing rule using the Project's department that grants access to users by permission sets.",
        "C. Create a criteria-based sharing rule using the Project's department that grants access to users by roles.",
        "D. Create a criteria-based sharing rule using the Project's department that grants access to users by public groups.",
      ],
      answer: "C,D",
      explanation: "",
      title: "Question 491",
    },
    {
      content:
        "Universal Containers has a customer base where many customers have the same or similar company names.Which functionality should be configured to improve an end user's search experience? (Choose two.)",
      options: [
        "A. Update the account search layouts search filter fields.",
        "B. Update the account search layouts accounts tab columns displayed.",
        "C. Update the account search layouts search results columns displayed.",
        "D. Update the account search layouts list view filter settings.",
      ],
      answer: "B,C",
      explanation: "",
      title: "Question 492",
    },
    {
      content:
        "An app builder creates an Account validation rule on the Industry field that will throw an error if the length of the field is longer than 6 characters. Another app builder creates a workflow with a field update that sets the Industry field to Technology whenever the Billing City field is set to San Francisco.What will happen the next time a sales person saves an Account with a Billing City of San Francisco?",
      options: [
        "A. The record will save and the Industry field will change to Technology.",
        "B. The record will not save and no error message will be displayed.",
        "C. The record will not save the validation rule's error message will be displayed.",
        "D. The record will save but the Industry field will not change to Territory.",
      ],
      answer: "B",
      explanation: "",
      title: "Question 493",
    },
    {
      content: "What is a true statement when deleting a dashboard?",
      options: [
        "A. Deleting a dashboard also deletes the components within it. It does not delete the custom reports used by the components.",
        "B. Deleting a dashboard does not move the dashboard to the Recycle Bin and therefore the dashboard cannot be recovered.",
        "C. Deleting a dashboard also deletes the components within it as well as the custom reports used by the components.",
        "D. Deleting a dashboard requires a user to first edit the components to remove the underlying reports.",
      ],
      answer: "A",
      explanation: "",
      title: "Question 494",
    },
    {
      content:
        "A junction object has two Master-Detail relationships, a primary and a secondary master object.What happens to a junction object record when both associated master records are deleted?",
      options: [
        "A. The junction object record is permanently deleted and can't be restored.",
        "B. The delete operation cannot be performed on both master records.",
        "C. The delete operation is not allowed with Roll-up summary fields defined.",
        "D. The junction object records is deleted and placed in the recycle bin.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 495",
    },
    {
      content:
        "Universal Containers wants its Field Sales team to only see the accounts that they own. Separate North American and European marketing teams should only see accounts in their respective regions. The Inside Sales Team needs to see all accounts in Salesforce.How should an app builder accomplish this?",
      options: [
        "A. Set the Organization-Wide Default to Public for accounts. Create profiles for each Marketing Team, and create an Inside Sales Team role that is at the top of the Role Hierarchy.",
        'B. Set the Organization-Wide Default to Public for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team permission set with the "View All" setting for accounts.',
        'C. Set the Organization-Wide Default to Private for accounts. Create permission sets for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
        'D. Set the Organization-Wide Default to Private for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
      ],
      answer: "B",
      explanation: "",
      title: "Question 496",
    },
    {
      content:
        "The app builder has just created a Visual Workflow for the VP of Service.Which two Flow be accessed by users? (Choose two.)",
      options: [
        "A. Custom Button",
        "B. Quick Action",
        "C. Visual Workflow Launcher",
        "D. From a Process",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 497",
    },
    {
      content:
        "Which two metadata changes can be made directly in a production environment without deploying from a sandbox? (Choose two.)",
      options: [
        "A. Validation rules",
        "B. Apex Triggers",
        "C. Apex Classes",
        "D. Visualforce pages",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 498",
    },
    {
      content:
        "The Training team at Universal Containers uses a custom Training object to track their customer training sessions. An app builder needs to create a relationship between the Training object and the related Students' record.Which two statements are true when creating a Student Lookup field on the Training object? (Choose two.)",
      options: [
        "A. On Training record, the Student Lookup field can be made optional.",
        "B. On Student record, users can set up Roll-up summary field on Training records.",
        "C. On Training record, users can only delete Students, if they have access to it.",
        "D. Cross-object field updates between Training and Student records are not supported.",
      ],
      answer: "A,C",
      explanation: "",
      title: "Question 499",
    },
    {
      content:
        "An app builder would like to streamline the user experience by reflecting summarized calculations of specific fields on various objects.Which three field types could be used in roll-up summary fields to accomplish this? (Choose three.)",
      options: [
        "A. Checkbox",
        "B. Date",
        "C. Percent",
        "D. Time",
        "E. Currency",
      ],
      answer: "B,C,E",
      explanation: "",
      title: "Question 500",
    },
    {
      content:
        "Universal Containers manages internal projects by department using a custom object called Projects. Only employees in the project's respective department should have view access to all of the department's project records. If an employee changes job roles and moves to another department, the employee should no longer have access to the projects within their former department.Which two options will meet these requirements assuming the organization-wide default for Projects is set to Private? (Choose two.)",
      options: [
        "A. Create a criteria-based sharing rule using the Project's department that grants access to users by profiles.",
        "B. Create a criteria-based sharing rule using the Project's department that grants access to users by permission sets.",
        "C. Create a criteria-based sharing rule using the Project's department that grants access to users by roles.",
        "D. Create a criteria-based sharing rule using the Project's department that grants access to users by public groups.",
      ],
      answer: "C,D",
      explanation: "",
      title: "Question 501",
    },
    {
      content:
        "Universal Containers has a customer base where many customers have the same or similar company names.Which functionality should be configured to improve an end user's search experience? (Choose two.)",
      options: [
        "A. Update the account search layouts search filter fields.",
        "B. Update the account search layouts accounts tab columns displayed.",
        "C. Update the account search layouts search results columns displayed.",
        "D. Update the account search layouts list view filter settings.",
      ],
      answer: "B,C",
      explanation: "",
      title: "Question 502",
    },
    {
      content:
        "An app builder creates an Account validation rule on the Industry field that will throw an error if the length of the field is longer than 6 characters. Another app builder creates a workflow with a field update that sets the Industry field to Technology whenever the Billing City field is set to San Francisco.What will happen the next time a sales person saves an Account with a Billing City of San Francisco?",
      options: [
        "A. The record will save and the Industry field will change to Technology.",
        "B. The record will not save and no error message will be displayed.",
        "C. The record will not save the validation rule's error message will be displayed.",
        "D. The record will save but the Industry field will not change to Territory.",
      ],
      answer: "B",
      explanation: "",
      title: "Question 503",
    },
    {
      content: "What is a true statement when deleting a dashboard?",
      options: [
        "A. Deleting a dashboard also deletes the components within it. It does not delete the custom reports used by the components.",
        "B. Deleting a dashboard does not move the dashboard to the Recycle Bin and therefore the dashboard cannot be recovered.",
        "C. Deleting a dashboard also deletes the components within it as well as the custom reports used by the components.",
        "D. Deleting a dashboard requires a user to first edit the components to remove the underlying reports.",
      ],
      answer: "A",
      explanation: "",
      title: "Question 504",
    },
    {
      content:
        "A junction object has two Master-Detail relationships, a primary and a secondary master object.What happens to a junction object record when both associated master records are deleted?",
      options: [
        "A. The junction object record is permanently deleted and can't be restored.",
        "B. The delete operation cannot be performed on both master records.",
        "C. The delete operation is not allowed with Roll-up summary fields defined.",
        "D. The junction object records is deleted and placed in the recycle bin.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 505",
    },
    {
      content:
        "Universal Containers wants its Field Sales team to only see the accounts that they own. Separate North American and European marketing teams should only see accounts in their respective regions. The Inside Sales Team needs to see all accounts in Salesforce.How should an app builder accomplish this?",
      options: [
        "A. Set the Organization-Wide Default to Public for accounts. Create profiles for each Marketing Team, and create an Inside Sales Team role that is at the top of the Role Hierarchy.",
        'B. Set the Organization-Wide Default to Public for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team permission set with the "View All" setting for accounts.',
        'C. Set the Organization-Wide Default to Private for accounts. Create permission sets for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
        'D. Set the Organization-Wide Default to Private for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
      ],
      answer: "B",
      explanation: "",
      title: "Question 506",
    },
    {
      content:
        "The app builder has just created a Visual Workflow for the VP of Service.Which two Flow be accessed by users? (Choose two.)",
      options: [
        "A. Custom Button",
        "B. Quick Action",
        "C. Visual Workflow Launcher",
        "D. From a Process",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 507",
    },
    {
      content:
        "Which two metadata changes can be made directly in a production environment without deploying from a sandbox? (Choose two.)",
      options: [
        "A. Validation rules",
        "B. Apex Triggers",
        "C. Apex Classes",
        "D. Visualforce pages",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 508",
    },
    {
      content:
        "The Training team at Universal Containers uses a custom Training object to track their customer training sessions. An app builder needs to create a relationship between the Training object and the related Students' record.Which two statements are true when creating a Student Lookup field on the Training object? (Choose two.)",
      options: [
        "A. On Training record, the Student Lookup field can be made optional.",
        "B. On Student record, users can set up Roll-up summary field on Training records.",
        "C. On Training record, users can only delete Students, if they have access to it.",
        "D. Cross-object field updates between Training and Student records are not supported.",
      ],
      answer: "A,C",
      explanation: "",
      title: "Question 509",
    },
    {
      content:
        "An app builder would like to streamline the user experience by reflecting summarized calculations of specific fields on various objects.Which three field types could be used in roll-up summary fields to accomplish this? (Choose three.)",
      options: [
        "A. Checkbox",
        "B. Date",
        "C. Percent",
        "D. Time",
        "E. Currency",
      ],
      answer: "B,C,E",
      explanation: "",
      title: "Question 510",
    },
    {
      content:
        "Universal Containers manages internal projects by department using a custom object called Projects. Only employees in the project's respective department should have view access to all of the department's project records. If an employee changes job roles and moves to another department, the employee should no longer have access to the projects within their former department.Which two options will meet these requirements assuming the organization-wide default for Projects is set to Private? (Choose two.)",
      options: [
        "A. Create a criteria-based sharing rule using the Project's department that grants access to users by profiles.",
        "B. Create a criteria-based sharing rule using the Project's department that grants access to users by permission sets.",
        "C. Create a criteria-based sharing rule using the Project's department that grants access to users by roles.",
        "D. Create a criteria-based sharing rule using the Project's department that grants access to users by public groups.",
      ],
      answer: "C,D",
      explanation: "",
      title: "Question 511",
    },
    {
      content:
        "Universal Containers has a customer base where many customers have the same or similar company names.Which functionality should be configured to improve an end user's search experience? (Choose two.)",
      options: [
        "A. Update the account search layouts search filter fields.",
        "B. Update the account search layouts accounts tab columns displayed.",
        "C. Update the account search layouts search results columns displayed.",
        "D. Update the account search layouts list view filter settings.",
      ],
      answer: "B,C",
      explanation: "",
      title: "Question 512",
    },
    {
      content:
        "An app builder creates an Account validation rule on the Industry field that will throw an error if the length of the field is longer than 6 characters. Another app builder creates a workflow with a field update that sets the Industry field to Technology whenever the Billing City field is set to San Francisco.What will happen the next time a sales person saves an Account with a Billing City of San Francisco?",
      options: [
        "A. The record will save and the Industry field will change to Technology.",
        "B. The record will not save and no error message will be displayed.",
        "C. The record will not save the validation rule's error message will be displayed.",
        "D. The record will save but the Industry field will not change to Territory.",
      ],
      answer: "B",
      explanation: "",
      title: "Question 513",
    },
    {
      content: "What is a true statement when deleting a dashboard?",
      options: [
        "A. Deleting a dashboard also deletes the components within it. It does not delete the custom reports used by the components.",
        "B. Deleting a dashboard does not move the dashboard to the Recycle Bin and therefore the dashboard cannot be recovered.",
        "C. Deleting a dashboard also deletes the components within it as well as the custom reports used by the components.",
        "D. Deleting a dashboard requires a user to first edit the components to remove the underlying reports.",
      ],
      answer: "A",
      explanation: "",
      title: "Question 514",
    },
    {
      content:
        "A junction object has two Master-Detail relationships, a primary and a secondary master object.What happens to a junction object record when both associated master records are deleted?",
      options: [
        "A. The junction object record is permanently deleted and can't be restored.",
        "B. The delete operation cannot be performed on both master records.",
        "C. The delete operation is not allowed with Roll-up summary fields defined.",
        "D. The junction object records is deleted and placed in the recycle bin.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 515",
    },
    {
      content:
        "Universal Containers wants its Field Sales team to only see the accounts that they own. Separate North American and European marketing teams should only see accounts in their respective regions. The Inside Sales Team needs to see all accounts in Salesforce.How should an app builder accomplish this?",
      options: [
        "A. Set the Organization-Wide Default to Public for accounts. Create profiles for each Marketing Team, and create an Inside Sales Team role that is at the top of the Role Hierarchy.",
        'B. Set the Organization-Wide Default to Public for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team permission set with the "View All" setting for accounts.',
        'C. Set the Organization-Wide Default to Private for accounts. Create permission sets for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
        'D. Set the Organization-Wide Default to Private for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
      ],
      answer: "B",
      explanation: "",
      title: "Question 516",
    },
    {
      content:
        "The app builder has just created a Visual Workflow for the VP of Service.Which two Flow be accessed by users? (Choose two.)",
      options: [
        "A. Custom Button",
        "B. Quick Action",
        "C. Visual Workflow Launcher",
        "D. From a Process",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 517",
    },
    {
      content:
        "Which two metadata changes can be made directly in a production environment without deploying from a sandbox? (Choose two.)",
      options: [
        "A. Validation rules",
        "B. Apex Triggers",
        "C. Apex Classes",
        "D. Visualforce pages",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 518",
    },
    {
      content:
        "The Training team at Universal Containers uses a custom Training object to track their customer training sessions. An app builder needs to create a relationship between the Training object and the related Students' record.Which two statements are true when creating a Student Lookup field on the Training object? (Choose two.)",
      options: [
        "A. On Training record, the Student Lookup field can be made optional.",
        "B. On Student record, users can set up Roll-up summary field on Training records.",
        "C. On Training record, users can only delete Students, if they have access to it.",
        "D. Cross-object field updates between Training and Student records are not supported.",
      ],
      answer: "A,C",
      explanation: "",
      title: "Question 519",
    },
    {
      content:
        "An app builder would like to streamline the user experience by reflecting summarized calculations of specific fields on various objects.Which three field types could be used in roll-up summary fields to accomplish this? (Choose three.)",
      options: [
        "A. Checkbox",
        "B. Date",
        "C. Percent",
        "D. Time",
        "E. Currency",
      ],
      answer: "B,C,E",
      explanation: "",
      title: "Question 520",
    },
    {
      content:
        "Universal Containers manages internal projects by department using a custom object called Projects. Only employees in the project's respective department should have view access to all of the department's project records. If an employee changes job roles and moves to another department, the employee should no longer have access to the projects within their former department.Which two options will meet these requirements assuming the organization-wide default for Projects is set to Private? (Choose two.)",
      options: [
        "A. Create a criteria-based sharing rule using the Project's department that grants access to users by profiles.",
        "B. Create a criteria-based sharing rule using the Project's department that grants access to users by permission sets.",
        "C. Create a criteria-based sharing rule using the Project's department that grants access to users by roles.",
        "D. Create a criteria-based sharing rule using the Project's department that grants access to users by public groups.",
      ],
      answer: "C,D",
      explanation: "",
      title: "Question 521",
    },
    {
      content:
        "Universal Containers has a customer base where many customers have the same or similar company names.Which functionality should be configured to improve an end user's search experience? (Choose two.)",
      options: [
        "A. Update the account search layouts search filter fields.",
        "B. Update the account search layouts accounts tab columns displayed.",
        "C. Update the account search layouts search results columns displayed.",
        "D. Update the account search layouts list view filter settings.",
      ],
      answer: "B,C",
      explanation: "",
      title: "Question 522",
    },
    {
      content:
        "An app builder creates an Account validation rule on the Industry field that will throw an error if the length of the field is longer than 6 characters. Another app builder creates a workflow with a field update that sets the Industry field to Technology whenever the Billing City field is set to San Francisco.What will happen the next time a sales person saves an Account with a Billing City of San Francisco?",
      options: [
        "A. The record will save and the Industry field will change to Technology.",
        "B. The record will not save and no error message will be displayed.",
        "C. The record will not save the validation rule's error message will be displayed.",
        "D. The record will save but the Industry field will not change to Territory.",
      ],
      answer: "B",
      explanation: "",
      title: "Question 523",
    },
    {
      content: "What is a true statement when deleting a dashboard?",
      options: [
        "A. Deleting a dashboard also deletes the components within it. It does not delete the custom reports used by the components.",
        "B. Deleting a dashboard does not move the dashboard to the Recycle Bin and therefore the dashboard cannot be recovered.",
        "C. Deleting a dashboard also deletes the components within it as well as the custom reports used by the components.",
        "D. Deleting a dashboard requires a user to first edit the components to remove the underlying reports.",
      ],
      answer: "A",
      explanation: "",
      title: "Question 524",
    },
    {
      content:
        "A junction object has two Master-Detail relationships, a primary and a secondary master object.What happens to a junction object record when both associated master records are deleted?",
      options: [
        "A. The junction object record is permanently deleted and can't be restored.",
        "B. The delete operation cannot be performed on both master records.",
        "C. The delete operation is not allowed with Roll-up summary fields defined.",
        "D. The junction object records is deleted and placed in the recycle bin.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 525",
    },
    {
      content:
        "Universal Containers wants its Field Sales team to only see the accounts that they own. Separate North American and European marketing teams should only see accounts in their respective regions. The Inside Sales Team needs to see all accounts in Salesforce.How should an app builder accomplish this?",
      options: [
        "A. Set the Organization-Wide Default to Public for accounts. Create profiles for each Marketing Team, and create an Inside Sales Team role that is at the top of the Role Hierarchy.",
        'B. Set the Organization-Wide Default to Public for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team permission set with the "View All" setting for accounts.',
        'C. Set the Organization-Wide Default to Private for accounts. Create permission sets for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
        'D. Set the Organization-Wide Default to Private for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
      ],
      answer: "B",
      explanation: "",
      title: "Question 526",
    },
    {
      content:
        "The app builder has just created a Visual Workflow for the VP of Service.Which two Flow be accessed by users? (Choose two.)",
      options: [
        "A. Custom Button",
        "B. Quick Action",
        "C. Visual Workflow Launcher",
        "D. From a Process",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 527",
    },
    {
      content:
        "Which two metadata changes can be made directly in a production environment without deploying from a sandbox? (Choose two.)",
      options: [
        "A. Validation rules",
        "B. Apex Triggers",
        "C. Apex Classes",
        "D. Visualforce pages",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 528",
    },
    {
      content:
        "The Training team at Universal Containers uses a custom Training object to track their customer training sessions. An app builder needs to create a relationship between the Training object and the related Students' record.Which two statements are true when creating a Student Lookup field on the Training object? (Choose two.)",
      options: [
        "A. On Training record, the Student Lookup field can be made optional.",
        "B. On Student record, users can set up Roll-up summary field on Training records.",
        "C. On Training record, users can only delete Students, if they have access to it.",
        "D. Cross-object field updates between Training and Student records are not supported.",
      ],
      answer: "A,C",
      explanation: "",
      title: "Question 529",
    },
    {
      content:
        "An app builder would like to streamline the user experience by reflecting summarized calculations of specific fields on various objects.Which three field types could be used in roll-up summary fields to accomplish this? (Choose three.)",
      options: [
        "A. Checkbox",
        "B. Date",
        "C. Percent",
        "D. Time",
        "E. Currency",
      ],
      answer: "B,C,E",
      explanation: "",
      title: "Question 530",
    },
    {
      content:
        "Universal Containers manages internal projects by department using a custom object called Projects. Only employees in the project's respective department should have view access to all of the department's project records. If an employee changes job roles and moves to another department, the employee should no longer have access to the projects within their former department.Which two options will meet these requirements assuming the organization-wide default for Projects is set to Private? (Choose two.)",
      options: [
        "A. Create a criteria-based sharing rule using the Project's department that grants access to users by profiles.",
        "B. Create a criteria-based sharing rule using the Project's department that grants access to users by permission sets.",
        "C. Create a criteria-based sharing rule using the Project's department that grants access to users by roles.",
        "D. Create a criteria-based sharing rule using the Project's department that grants access to users by public groups.",
      ],
      answer: "C,D",
      explanation: "",
      title: "Question 531",
    },
    {
      content:
        "Universal Containers has a customer base where many customers have the same or similar company names.Which functionality should be configured to improve an end user's search experience? (Choose two.)",
      options: [
        "A. Update the account search layouts search filter fields.",
        "B. Update the account search layouts accounts tab columns displayed.",
        "C. Update the account search layouts search results columns displayed.",
        "D. Update the account search layouts list view filter settings.",
      ],
      answer: "B,C",
      explanation: "",
      title: "Question 532",
    },
    {
      content:
        "An app builder creates an Account validation rule on the Industry field that will throw an error if the length of the field is longer than 6 characters. Another app builder creates a workflow with a field update that sets the Industry field to Technology whenever the Billing City field is set to San Francisco.What will happen the next time a sales person saves an Account with a Billing City of San Francisco?",
      options: [
        "A. The record will save and the Industry field will change to Technology.",
        "B. The record will not save and no error message will be displayed.",
        "C. The record will not save the validation rule's error message will be displayed.",
        "D. The record will save but the Industry field will not change to Territory.",
      ],
      answer: "B",
      explanation: "",
      title: "Question 533",
    },
    {
      content: "What is a true statement when deleting a dashboard?",
      options: [
        "A. Deleting a dashboard also deletes the components within it. It does not delete the custom reports used by the components.",
        "B. Deleting a dashboard does not move the dashboard to the Recycle Bin and therefore the dashboard cannot be recovered.",
        "C. Deleting a dashboard also deletes the components within it as well as the custom reports used by the components.",
        "D. Deleting a dashboard requires a user to first edit the components to remove the underlying reports.",
      ],
      answer: "A",
      explanation: "",
      title: "Question 534",
    },
    {
      content:
        "A junction object has two Master-Detail relationships, a primary and a secondary master object.What happens to a junction object record when both associated master records are deleted?",
      options: [
        "A. The junction object record is permanently deleted and can't be restored.",
        "B. The delete operation cannot be performed on both master records.",
        "C. The delete operation is not allowed with Roll-up summary fields defined.",
        "D. The junction object records is deleted and placed in the recycle bin.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 535",
    },
    {
      content:
        "Universal Containers wants its Field Sales team to only see the accounts that they own. Separate North American and European marketing teams should only see accounts in their respective regions. The Inside Sales Team needs to see all accounts in Salesforce.How should an app builder accomplish this?",
      options: [
        "A. Set the Organization-Wide Default to Public for accounts. Create profiles for each Marketing Team, and create an Inside Sales Team role that is at the top of the Role Hierarchy.",
        'B. Set the Organization-Wide Default to Public for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team permission set with the "View All" setting for accounts.',
        'C. Set the Organization-Wide Default to Private for accounts. Create permission sets for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
        'D. Set the Organization-Wide Default to Private for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
      ],
      answer: "B",
      explanation: "",
      title: "Question 536",
    },
    {
      content:
        "The app builder has just created a Visual Workflow for the VP of Service.Which two Flow be accessed by users? (Choose two.)",
      options: [
        "A. Custom Button",
        "B. Quick Action",
        "C. Visual Workflow Launcher",
        "D. From a Process",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 537",
    },
    {
      content:
        "Which two metadata changes can be made directly in a production environment without deploying from a sandbox? (Choose two.)",
      options: [
        "A. Validation rules",
        "B. Apex Triggers",
        "C. Apex Classes",
        "D. Visualforce pages",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 538",
    },
    {
      content:
        "The Training team at Universal Containers uses a custom Training object to track their customer training sessions. An app builder needs to create a relationship between the Training object and the related Students' record.Which two statements are true when creating a Student Lookup field on the Training object? (Choose two.)",
      options: [
        "A. On Training record, the Student Lookup field can be made optional.",
        "B. On Student record, users can set up Roll-up summary field on Training records.",
        "C. On Training record, users can only delete Students, if they have access to it.",
        "D. Cross-object field updates between Training and Student records are not supported.",
      ],
      answer: "A,C",
      explanation: "",
      title: "Question 539",
    },
    {
      content:
        "An app builder would like to streamline the user experience by reflecting summarized calculations of specific fields on various objects.Which three field types could be used in roll-up summary fields to accomplish this? (Choose three.)",
      options: [
        "A. Checkbox",
        "B. Date",
        "C. Percent",
        "D. Time",
        "E. Currency",
      ],
      answer: "B,C,E",
      explanation: "",
      title: "Question 540",
    },
    {
      content:
        "Universal Containers manages internal projects by department using a custom object called Projects. Only employees in the project's respective department should have view access to all of the department's project records. If an employee changes job roles and moves to another department, the employee should no longer have access to the projects within their former department.Which two options will meet these requirements assuming the organization-wide default for Projects is set to Private? (Choose two.)",
      options: [
        "A. Create a criteria-based sharing rule using the Project's department that grants access to users by profiles.",
        "B. Create a criteria-based sharing rule using the Project's department that grants access to users by permission sets.",
        "C. Create a criteria-based sharing rule using the Project's department that grants access to users by roles.",
        "D. Create a criteria-based sharing rule using the Project's department that grants access to users by public groups.",
      ],
      answer: "C,D",
      explanation: "",
      title: "Question 541",
    },
    {
      content:
        "Universal Containers has a customer base where many customers have the same or similar company names.Which functionality should be configured to improve an end user's search experience? (Choose two.)",
      options: [
        "A. Update the account search layouts search filter fields.",
        "B. Update the account search layouts accounts tab columns displayed.",
        "C. Update the account search layouts search results columns displayed.",
        "D. Update the account search layouts list view filter settings.",
      ],
      answer: "B,C",
      explanation: "",
      title: "Question 542",
    },
    {
      content:
        "An app builder creates an Account validation rule on the Industry field that will throw an error if the length of the field is longer than 6 characters. Another app builder creates a workflow with a field update that sets the Industry field to Technology whenever the Billing City field is set to San Francisco.What will happen the next time a sales person saves an Account with a Billing City of San Francisco?",
      options: [
        "A. The record will save and the Industry field will change to Technology.",
        "B. The record will not save and no error message will be displayed.",
        "C. The record will not save the validation rule's error message will be displayed.",
        "D. The record will save but the Industry field will not change to Territory.",
      ],
      answer: "B",
      explanation: "",
      title: "Question 543",
    },
    {
      content: "What is a true statement when deleting a dashboard?",
      options: [
        "A. Deleting a dashboard also deletes the components within it. It does not delete the custom reports used by the components.",
        "B. Deleting a dashboard does not move the dashboard to the Recycle Bin and therefore the dashboard cannot be recovered.",
        "C. Deleting a dashboard also deletes the components within it as well as the custom reports used by the components.",
        "D. Deleting a dashboard requires a user to first edit the components to remove the underlying reports.",
      ],
      answer: "A",
      explanation: "",
      title: "Question 544",
    },
    {
      content:
        "A junction object has two Master-Detail relationships, a primary and a secondary master object.What happens to a junction object record when both associated master records are deleted?",
      options: [
        "A. The junction object record is permanently deleted and can't be restored.",
        "B. The delete operation cannot be performed on both master records.",
        "C. The delete operation is not allowed with Roll-up summary fields defined.",
        "D. The junction object records is deleted and placed in the recycle bin.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 545",
    },
    {
      content:
        "Universal Containers wants its Field Sales team to only see the accounts that they own. Separate North American and European marketing teams should only see accounts in their respective regions. The Inside Sales Team needs to see all accounts in Salesforce.How should an app builder accomplish this?",
      options: [
        "A. Set the Organization-Wide Default to Public for accounts. Create profiles for each Marketing Team, and create an Inside Sales Team role that is at the top of the Role Hierarchy.",
        'B. Set the Organization-Wide Default to Public for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team permission set with the "View All" setting for accounts.',
        'C. Set the Organization-Wide Default to Private for accounts. Create permission sets for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
        'D. Set the Organization-Wide Default to Private for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
      ],
      answer: "B",
      explanation: "",
      title: "Question 546",
    },
    {
      content:
        "The app builder has just created a Visual Workflow for the VP of Service.Which two Flow be accessed by users? (Choose two.)",
      options: [
        "A. Custom Button",
        "B. Quick Action",
        "C. Visual Workflow Launcher",
        "D. From a Process",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 547",
    },
    {
      content:
        "Which two metadata changes can be made directly in a production environment without deploying from a sandbox? (Choose two.)",
      options: [
        "A. Validation rules",
        "B. Apex Triggers",
        "C. Apex Classes",
        "D. Visualforce pages",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 548",
    },
    {
      content:
        "The Training team at Universal Containers uses a custom Training object to track their customer training sessions. An app builder needs to create a relationship between the Training object and the related Students' record.Which two statements are true when creating a Student Lookup field on the Training object? (Choose two.)",
      options: [
        "A. On Training record, the Student Lookup field can be made optional.",
        "B. On Student record, users can set up Roll-up summary field on Training records.",
        "C. On Training record, users can only delete Students, if they have access to it.",
        "D. Cross-object field updates between Training and Student records are not supported.",
      ],
      answer: "A,C",
      explanation: "",
      title: "Question 549",
    },
    {
      content:
        "An app builder would like to streamline the user experience by reflecting summarized calculations of specific fields on various objects.Which three field types could be used in roll-up summary fields to accomplish this? (Choose three.)",
      options: [
        "A. Checkbox",
        "B. Date",
        "C. Percent",
        "D. Time",
        "E. Currency",
      ],
      answer: "B,C,E",
      explanation: "",
      title: "Question 550",
    },
    {
      content:
        "Universal Containers manages internal projects by department using a custom object called Projects. Only employees in the project's respective department should have view access to all of the department's project records. If an employee changes job roles and moves to another department, the employee should no longer have access to the projects within their former department.Which two options will meet these requirements assuming the organization-wide default for Projects is set to Private? (Choose two.)",
      options: [
        "A. Create a criteria-based sharing rule using the Project's department that grants access to users by profiles.",
        "B. Create a criteria-based sharing rule using the Project's department that grants access to users by permission sets.",
        "C. Create a criteria-based sharing rule using the Project's department that grants access to users by roles.",
        "D. Create a criteria-based sharing rule using the Project's department that grants access to users by public groups.",
      ],
      answer: "C,D",
      explanation: "",
      title: "Question 551",
    },
    {
      content:
        "Universal Containers has a customer base where many customers have the same or similar company names.Which functionality should be configured to improve an end user's search experience? (Choose two.)",
      options: [
        "A. Update the account search layouts search filter fields.",
        "B. Update the account search layouts accounts tab columns displayed.",
        "C. Update the account search layouts search results columns displayed.",
        "D. Update the account search layouts list view filter settings.",
      ],
      answer: "B,C",
      explanation: "",
      title: "Question 552",
    },
    {
      content:
        "An app builder creates an Account validation rule on the Industry field that will throw an error if the length of the field is longer than 6 characters. Another app builder creates a workflow with a field update that sets the Industry field to Technology whenever the Billing City field is set to San Francisco.What will happen the next time a sales person saves an Account with a Billing City of San Francisco?",
      options: [
        "A. The record will save and the Industry field will change to Technology.",
        "B. The record will not save and no error message will be displayed.",
        "C. The record will not save the validation rule's error message will be displayed.",
        "D. The record will save but the Industry field will not change to Territory.",
      ],
      answer: "B",
      explanation: "",
      title: "Question 553",
    },
    {
      content: "What is a true statement when deleting a dashboard?",
      options: [
        "A. Deleting a dashboard also deletes the components within it. It does not delete the custom reports used by the components.",
        "B. Deleting a dashboard does not move the dashboard to the Recycle Bin and therefore the dashboard cannot be recovered.",
        "C. Deleting a dashboard also deletes the components within it as well as the custom reports used by the components.",
        "D. Deleting a dashboard requires a user to first edit the components to remove the underlying reports.",
      ],
      answer: "A",
      explanation: "",
      title: "Question 554",
    },
    {
      content:
        "A junction object has two Master-Detail relationships, a primary and a secondary master object.What happens to a junction object record when both associated master records are deleted?",
      options: [
        "A. The junction object record is permanently deleted and can't be restored.",
        "B. The delete operation cannot be performed on both master records.",
        "C. The delete operation is not allowed with Roll-up summary fields defined.",
        "D. The junction object records is deleted and placed in the recycle bin.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 555",
    },
    {
      content:
        "Universal Containers wants its Field Sales team to only see the accounts that they own. Separate North American and European marketing teams should only see accounts in their respective regions. The Inside Sales Team needs to see all accounts in Salesforce.How should an app builder accomplish this?",
      options: [
        "A. Set the Organization-Wide Default to Public for accounts. Create profiles for each Marketing Team, and create an Inside Sales Team role that is at the top of the Role Hierarchy.",
        'B. Set the Organization-Wide Default to Public for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team permission set with the "View All" setting for accounts.',
        'C. Set the Organization-Wide Default to Private for accounts. Create permission sets for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
        'D. Set the Organization-Wide Default to Private for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
      ],
      answer: "B",
      explanation: "",
      title: "Question 556",
    },
    {
      content:
        "The app builder has just created a Visual Workflow for the VP of Service.Which two Flow be accessed by users? (Choose two.)",
      options: [
        "A. Custom Button",
        "B. Quick Action",
        "C. Visual Workflow Launcher",
        "D. From a Process",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 557",
    },
    {
      content:
        "Which two metadata changes can be made directly in a production environment without deploying from a sandbox? (Choose two.)",
      options: [
        "A. Validation rules",
        "B. Apex Triggers",
        "C. Apex Classes",
        "D. Visualforce pages",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 558",
    },
    {
      content:
        "The Training team at Universal Containers uses a custom Training object to track their customer training sessions. An app builder needs to create a relationship between the Training object and the related Students' record.Which two statements are true when creating a Student Lookup field on the Training object? (Choose two.)",
      options: [
        "A. On Training record, the Student Lookup field can be made optional.",
        "B. On Student record, users can set up Roll-up summary field on Training records.",
        "C. On Training record, users can only delete Students, if they have access to it.",
        "D. Cross-object field updates between Training and Student records are not supported.",
      ],
      answer: "A,C",
      explanation: "",
      title: "Question 559",
    },
    {
      content:
        "An app builder would like to streamline the user experience by reflecting summarized calculations of specific fields on various objects.Which three field types could be used in roll-up summary fields to accomplish this? (Choose three.)",
      options: [
        "A. Checkbox",
        "B. Date",
        "C. Percent",
        "D. Time",
        "E. Currency",
      ],
      answer: "B,C,E",
      explanation: "",
      title: "Question 560",
    },
    {
      content:
        "Universal Containers manages internal projects by department using a custom object called Projects. Only employees in the project's respective department should have view access to all of the department's project records. If an employee changes job roles and moves to another department, the employee should no longer have access to the projects within their former department.Which two options will meet these requirements assuming the organization-wide default for Projects is set to Private? (Choose two.)",
      options: [
        "A. Create a criteria-based sharing rule using the Project's department that grants access to users by profiles.",
        "B. Create a criteria-based sharing rule using the Project's department that grants access to users by permission sets.",
        "C. Create a criteria-based sharing rule using the Project's department that grants access to users by roles.",
        "D. Create a criteria-based sharing rule using the Project's department that grants access to users by public groups.",
      ],
      answer: "C,D",
      explanation: "",
      title: "Question 561",
    },
    {
      content:
        "Universal Containers has a customer base where many customers have the same or similar company names.Which functionality should be configured to improve an end user's search experience? (Choose two.)",
      options: [
        "A. Update the account search layouts search filter fields.",
        "B. Update the account search layouts accounts tab columns displayed.",
        "C. Update the account search layouts search results columns displayed.",
        "D. Update the account search layouts list view filter settings.",
      ],
      answer: "B,C",
      explanation: "",
      title: "Question 562",
    },
    {
      content:
        "An app builder creates an Account validation rule on the Industry field that will throw an error if the length of the field is longer than 6 characters. Another app builder creates a workflow with a field update that sets the Industry field to Technology whenever the Billing City field is set to San Francisco.What will happen the next time a sales person saves an Account with a Billing City of San Francisco?",
      options: [
        "A. The record will save and the Industry field will change to Technology.",
        "B. The record will not save and no error message will be displayed.",
        "C. The record will not save the validation rule's error message will be displayed.",
        "D. The record will save but the Industry field will not change to Territory.",
      ],
      answer: "B",
      explanation: "",
      title: "Question 563",
    },
    {
      content: "What is a true statement when deleting a dashboard?",
      options: [
        "A. Deleting a dashboard also deletes the components within it. It does not delete the custom reports used by the components.",
        "B. Deleting a dashboard does not move the dashboard to the Recycle Bin and therefore the dashboard cannot be recovered.",
        "C. Deleting a dashboard also deletes the components within it as well as the custom reports used by the components.",
        "D. Deleting a dashboard requires a user to first edit the components to remove the underlying reports.",
      ],
      answer: "A",
      explanation: "",
      title: "Question 564",
    },
    {
      content:
        "A junction object has two Master-Detail relationships, a primary and a secondary master object.What happens to a junction object record when both associated master records are deleted?",
      options: [
        "A. The junction object record is permanently deleted and can't be restored.",
        "B. The delete operation cannot be performed on both master records.",
        "C. The delete operation is not allowed with Roll-up summary fields defined.",
        "D. The junction object records is deleted and placed in the recycle bin.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 565",
    },
    {
      content:
        "Universal Containers wants its Field Sales team to only see the accounts that they own. Separate North American and European marketing teams should only see accounts in their respective regions. The Inside Sales Team needs to see all accounts in Salesforce.How should an app builder accomplish this?",
      options: [
        "A. Set the Organization-Wide Default to Public for accounts. Create profiles for each Marketing Team, and create an Inside Sales Team role that is at the top of the Role Hierarchy.",
        'B. Set the Organization-Wide Default to Public for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team permission set with the "View All" setting for accounts.',
        'C. Set the Organization-Wide Default to Private for accounts. Create permission sets for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
        'D. Set the Organization-Wide Default to Private for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
      ],
      answer: "B",
      explanation: "",
      title: "Question 566",
    },
    {
      content:
        "The app builder has just created a Visual Workflow for the VP of Service.Which two Flow be accessed by users? (Choose two.)",
      options: [
        "A. Custom Button",
        "B. Quick Action",
        "C. Visual Workflow Launcher",
        "D. From a Process",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 567",
    },
    {
      content:
        "Which two metadata changes can be made directly in a production environment without deploying from a sandbox? (Choose two.)",
      options: [
        "A. Validation rules",
        "B. Apex Triggers",
        "C. Apex Classes",
        "D. Visualforce pages",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 568",
    },
    {
      content:
        "The Training team at Universal Containers uses a custom Training object to track their customer training sessions. An app builder needs to create a relationship between the Training object and the related Students' record.Which two statements are true when creating a Student Lookup field on the Training object? (Choose two.)",
      options: [
        "A. On Training record, the Student Lookup field can be made optional.",
        "B. On Student record, users can set up Roll-up summary field on Training records.",
        "C. On Training record, users can only delete Students, if they have access to it.",
        "D. Cross-object field updates between Training and Student records are not supported.",
      ],
      answer: "A,C",
      explanation: "",
      title: "Question 569",
    },
    {
      content:
        "An app builder would like to streamline the user experience by reflecting summarized calculations of specific fields on various objects.Which three field types could be used in roll-up summary fields to accomplish this? (Choose three.)",
      options: [
        "A. Checkbox",
        "B. Date",
        "C. Percent",
        "D. Time",
        "E. Currency",
      ],
      answer: "B,C,E",
      explanation: "",
      title: "Question 570",
    },
    {
      content:
        "Universal Containers manages internal projects by department using a custom object called Projects. Only employees in the project's respective department should have view access to all of the department's project records. If an employee changes job roles and moves to another department, the employee should no longer have access to the projects within their former department.Which two options will meet these requirements assuming the organization-wide default for Projects is set to Private? (Choose two.)",
      options: [
        "A. Create a criteria-based sharing rule using the Project's department that grants access to users by profiles.",
        "B. Create a criteria-based sharing rule using the Project's department that grants access to users by permission sets.",
        "C. Create a criteria-based sharing rule using the Project's department that grants access to users by roles.",
        "D. Create a criteria-based sharing rule using the Project's department that grants access to users by public groups.",
      ],
      answer: "C,D",
      explanation: "",
      title: "Question 571",
    },
    {
      content:
        "Universal Containers has a customer base where many customers have the same or similar company names.Which functionality should be configured to improve an end user's search experience? (Choose two.)",
      options: [
        "A. Update the account search layouts search filter fields.",
        "B. Update the account search layouts accounts tab columns displayed.",
        "C. Update the account search layouts search results columns displayed.",
        "D. Update the account search layouts list view filter settings.",
      ],
      answer: "B,C",
      explanation: "",
      title: "Question 572",
    },
    {
      content:
        "An app builder creates an Account validation rule on the Industry field that will throw an error if the length of the field is longer than 6 characters. Another app builder creates a workflow with a field update that sets the Industry field to Technology whenever the Billing City field is set to San Francisco.What will happen the next time a sales person saves an Account with a Billing City of San Francisco?",
      options: [
        "A. The record will save and the Industry field will change to Technology.",
        "B. The record will not save and no error message will be displayed.",
        "C. The record will not save the validation rule's error message will be displayed.",
        "D. The record will save but the Industry field will not change to Territory.",
      ],
      answer: "B",
      explanation: "",
      title: "Question 573",
    },
    {
      content: "What is a true statement when deleting a dashboard?",
      options: [
        "A. Deleting a dashboard also deletes the components within it. It does not delete the custom reports used by the components.",
        "B. Deleting a dashboard does not move the dashboard to the Recycle Bin and therefore the dashboard cannot be recovered.",
        "C. Deleting a dashboard also deletes the components within it as well as the custom reports used by the components.",
        "D. Deleting a dashboard requires a user to first edit the components to remove the underlying reports.",
      ],
      answer: "A",
      explanation: "",
      title: "Question 574",
    },
    {
      content:
        "A junction object has two Master-Detail relationships, a primary and a secondary master object.What happens to a junction object record when both associated master records are deleted?",
      options: [
        "A. The junction object record is permanently deleted and can't be restored.",
        "B. The delete operation cannot be performed on both master records.",
        "C. The delete operation is not allowed with Roll-up summary fields defined.",
        "D. The junction object records is deleted and placed in the recycle bin.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 575",
    },
    {
      content:
        "Universal Containers wants its Field Sales team to only see the accounts that they own. Separate North American and European marketing teams should only see accounts in their respective regions. The Inside Sales Team needs to see all accounts in Salesforce.How should an app builder accomplish this?",
      options: [
        "A. Set the Organization-Wide Default to Public for accounts. Create profiles for each Marketing Team, and create an Inside Sales Team role that is at the top of the Role Hierarchy.",
        'B. Set the Organization-Wide Default to Public for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team permission set with the "View All" setting for accounts.',
        'C. Set the Organization-Wide Default to Private for accounts. Create permission sets for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
        'D. Set the Organization-Wide Default to Private for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
      ],
      answer: "B",
      explanation: "",
      title: "Question 576",
    },
    {
      content:
        "The app builder has just created a Visual Workflow for the VP of Service.Which two Flow be accessed by users? (Choose two.)",
      options: [
        "A. Custom Button",
        "B. Quick Action",
        "C. Visual Workflow Launcher",
        "D. From a Process",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 577",
    },
    {
      content:
        "Which two metadata changes can be made directly in a production environment without deploying from a sandbox? (Choose two.)",
      options: [
        "A. Validation rules",
        "B. Apex Triggers",
        "C. Apex Classes",
        "D. Visualforce pages",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 578",
    },
    {
      content:
        "The Training team at Universal Containers uses a custom Training object to track their customer training sessions. An app builder needs to create a relationship between the Training object and the related Students' record.Which two statements are true when creating a Student Lookup field on the Training object? (Choose two.)",
      options: [
        "A. On Training record, the Student Lookup field can be made optional.",
        "B. On Student record, users can set up Roll-up summary field on Training records.",
        "C. On Training record, users can only delete Students, if they have access to it.",
        "D. Cross-object field updates between Training and Student records are not supported.",
      ],
      answer: "A,C",
      explanation: "",
      title: "Question 579",
    },
    {
      content:
        "An app builder would like to streamline the user experience by reflecting summarized calculations of specific fields on various objects.Which three field types could be used in roll-up summary fields to accomplish this? (Choose three.)",
      options: [
        "A. Checkbox",
        "B. Date",
        "C. Percent",
        "D. Time",
        "E. Currency",
      ],
      answer: "B,C,E",
      explanation: "",
      title: "Question 580",
    },
    {
      content:
        "Universal Containers manages internal projects by department using a custom object called Projects. Only employees in the project's respective department should have view access to all of the department's project records. If an employee changes job roles and moves to another department, the employee should no longer have access to the projects within their former department.Which two options will meet these requirements assuming the organization-wide default for Projects is set to Private? (Choose two.)",
      options: [
        "A. Create a criteria-based sharing rule using the Project's department that grants access to users by profiles.",
        "B. Create a criteria-based sharing rule using the Project's department that grants access to users by permission sets.",
        "C. Create a criteria-based sharing rule using the Project's department that grants access to users by roles.",
        "D. Create a criteria-based sharing rule using the Project's department that grants access to users by public groups.",
      ],
      answer: "C,D",
      explanation: "",
      title: "Question 581",
    },
    {
      content:
        "Universal Containers has a customer base where many customers have the same or similar company names.Which functionality should be configured to improve an end user's search experience? (Choose two.)",
      options: [
        "A. Update the account search layouts search filter fields.",
        "B. Update the account search layouts accounts tab columns displayed.",
        "C. Update the account search layouts search results columns displayed.",
        "D. Update the account search layouts list view filter settings.",
      ],
      answer: "B,C",
      explanation: "",
      title: "Question 582",
    },
    {
      content:
        "An app builder creates an Account validation rule on the Industry field that will throw an error if the length of the field is longer than 6 characters. Another app builder creates a workflow with a field update that sets the Industry field to Technology whenever the Billing City field is set to San Francisco.What will happen the next time a sales person saves an Account with a Billing City of San Francisco?",
      options: [
        "A. The record will save and the Industry field will change to Technology.",
        "B. The record will not save and no error message will be displayed.",
        "C. The record will not save the validation rule's error message will be displayed.",
        "D. The record will save but the Industry field will not change to Territory.",
      ],
      answer: "B",
      explanation: "",
      title: "Question 583",
    },
    {
      content: "What is a true statement when deleting a dashboard?",
      options: [
        "A. Deleting a dashboard also deletes the components within it. It does not delete the custom reports used by the components.",
        "B. Deleting a dashboard does not move the dashboard to the Recycle Bin and therefore the dashboard cannot be recovered.",
        "C. Deleting a dashboard also deletes the components within it as well as the custom reports used by the components.",
        "D. Deleting a dashboard requires a user to first edit the components to remove the underlying reports.",
      ],
      answer: "A",
      explanation: "",
      title: "Question 584",
    },
    {
      content:
        "A junction object has two Master-Detail relationships, a primary and a secondary master object.What happens to a junction object record when both associated master records are deleted?",
      options: [
        "A. The junction object record is permanently deleted and can't be restored.",
        "B. The delete operation cannot be performed on both master records.",
        "C. The delete operation is not allowed with Roll-up summary fields defined.",
        "D. The junction object records is deleted and placed in the recycle bin.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 585",
    },
    {
      content:
        "Universal Containers wants its Field Sales team to only see the accounts that they own. Separate North American and European marketing teams should only see accounts in their respective regions. The Inside Sales Team needs to see all accounts in Salesforce.How should an app builder accomplish this?",
      options: [
        "A. Set the Organization-Wide Default to Public for accounts. Create profiles for each Marketing Team, and create an Inside Sales Team role that is at the top of the Role Hierarchy.",
        'B. Set the Organization-Wide Default to Public for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team permission set with the "View All" setting for accounts.',
        'C. Set the Organization-Wide Default to Private for accounts. Create permission sets for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
        'D. Set the Organization-Wide Default to Private for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
      ],
      answer: "B",
      explanation: "",
      title: "Question 586",
    },
    {
      content:
        "The app builder has just created a Visual Workflow for the VP of Service.Which two Flow be accessed by users? (Choose two.)",
      options: [
        "A. Custom Button",
        "B. Quick Action",
        "C. Visual Workflow Launcher",
        "D. From a Process",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 587",
    },
    {
      content:
        "Which two metadata changes can be made directly in a production environment without deploying from a sandbox? (Choose two.)",
      options: [
        "A. Validation rules",
        "B. Apex Triggers",
        "C. Apex Classes",
        "D. Visualforce pages",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 588",
    },
    {
      content:
        "The Training team at Universal Containers uses a custom Training object to track their customer training sessions. An app builder needs to create a relationship between the Training object and the related Students' record.Which two statements are true when creating a Student Lookup field on the Training object? (Choose two.)",
      options: [
        "A. On Training record, the Student Lookup field can be made optional.",
        "B. On Student record, users can set up Roll-up summary field on Training records.",
        "C. On Training record, users can only delete Students, if they have access to it.",
        "D. Cross-object field updates between Training and Student records are not supported.",
      ],
      answer: "A,C",
      explanation: "",
      title: "Question 589",
    },
    {
      content:
        "An app builder would like to streamline the user experience by reflecting summarized calculations of specific fields on various objects.Which three field types could be used in roll-up summary fields to accomplish this? (Choose three.)",
      options: [
        "A. Checkbox",
        "B. Date",
        "C. Percent",
        "D. Time",
        "E. Currency",
      ],
      answer: "B,C,E",
      explanation: "",
      title: "Question 590",
    },
    {
      content:
        "Universal Containers manages internal projects by department using a custom object called Projects. Only employees in the project's respective department should have view access to all of the department's project records. If an employee changes job roles and moves to another department, the employee should no longer have access to the projects within their former department.Which two options will meet these requirements assuming the organization-wide default for Projects is set to Private? (Choose two.)",
      options: [
        "A. Create a criteria-based sharing rule using the Project's department that grants access to users by profiles.",
        "B. Create a criteria-based sharing rule using the Project's department that grants access to users by permission sets.",
        "C. Create a criteria-based sharing rule using the Project's department that grants access to users by roles.",
        "D. Create a criteria-based sharing rule using the Project's department that grants access to users by public groups.",
      ],
      answer: "C,D",
      explanation: "",
      title: "Question 591",
    },
    {
      content:
        "Universal Containers has a customer base where many customers have the same or similar company names.Which functionality should be configured to improve an end user's search experience? (Choose two.)",
      options: [
        "A. Update the account search layouts search filter fields.",
        "B. Update the account search layouts accounts tab columns displayed.",
        "C. Update the account search layouts search results columns displayed.",
        "D. Update the account search layouts list view filter settings.",
      ],
      answer: "B,C",
      explanation: "",
      title: "Question 592",
    },
    {
      content:
        "An app builder creates an Account validation rule on the Industry field that will throw an error if the length of the field is longer than 6 characters. Another app builder creates a workflow with a field update that sets the Industry field to Technology whenever the Billing City field is set to San Francisco.What will happen the next time a sales person saves an Account with a Billing City of San Francisco?",
      options: [
        "A. The record will save and the Industry field will change to Technology.",
        "B. The record will not save and no error message will be displayed.",
        "C. The record will not save the validation rule's error message will be displayed.",
        "D. The record will save but the Industry field will not change to Territory.",
      ],
      answer: "B",
      explanation: "",
      title: "Question 593",
    },
    {
      content: "What is a true statement when deleting a dashboard?",
      options: [
        "A. Deleting a dashboard also deletes the components within it. It does not delete the custom reports used by the components.",
        "B. Deleting a dashboard does not move the dashboard to the Recycle Bin and therefore the dashboard cannot be recovered.",
        "C. Deleting a dashboard also deletes the components within it as well as the custom reports used by the components.",
        "D. Deleting a dashboard requires a user to first edit the components to remove the underlying reports.",
      ],
      answer: "A",
      explanation: "",
      title: "Question 594",
    },
    {
      content:
        "A junction object has two Master-Detail relationships, a primary and a secondary master object.What happens to a junction object record when both associated master records are deleted?",
      options: [
        "A. The junction object record is permanently deleted and can't be restored.",
        "B. The delete operation cannot be performed on both master records.",
        "C. The delete operation is not allowed with Roll-up summary fields defined.",
        "D. The junction object records is deleted and placed in the recycle bin.",
      ],
      answer: "D",
      explanation: "",
      title: "Question 595",
    },
    {
      content:
        "Universal Containers wants its Field Sales team to only see the accounts that they own. Separate North American and European marketing teams should only see accounts in their respective regions. The Inside Sales Team needs to see all accounts in Salesforce.How should an app builder accomplish this?",
      options: [
        "A. Set the Organization-Wide Default to Public for accounts. Create profiles for each Marketing Team, and create an Inside Sales Team role that is at the top of the Role Hierarchy.",
        'B. Set the Organization-Wide Default to Public for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team permission set with the "View All" setting for accounts.',
        'C. Set the Organization-Wide Default to Private for accounts. Create permission sets for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
        'D. Set the Organization-Wide Default to Private for accounts. Create criteria-based sharing rules for each Marketing Team, and create an Inside Sales Team profile with the "View All" setting for accounts.',
      ],
      answer: "B",
      explanation: "",
      title: "Question 596",
    },
    {
      content:
        "The app builder has just created a Visual Workflow for the VP of Service.Which two Flow be accessed by users? (Choose two.)",
      options: [
        "A. Custom Button",
        "B. Quick Action",
        "C. Visual Workflow Launcher",
        "D. From a Process",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 597",
    },
    {
      content:
        "Which two metadata changes can be made directly in a production environment without deploying from a sandbox? (Choose two.)",
      options: [
        "A. Validation rules",
        "B. Apex Triggers",
        "C. Apex Classes",
        "D. Visualforce pages",
      ],
      answer: "A,D",
      explanation: "",
      title: "Question 598",
    },
    {
      content:
        "The Training team at Universal Containers uses a custom Training object to track their customer training sessions. An app builder needs to create a relationship between the Training object and the related Students' record.Which two statements are true when creating a Student Lookup field on the Training object? (Choose two.)",
      options: [
        "A. On Training record, the Student Lookup field can be made optional.",
        "B. On Student record, users can set up Roll-up summary field on Training records.",
        "C. On Training record, users can only delete Students, if they have access to it.",
        "D. Cross-object field updates between Training and Student records are not supported.",
      ],
      answer: "A,C",
      explanation: "",
      title: "Question 599",
    },
    {
      content:
        "An app builder would like to streamline the user experience by reflecting summarized calculations of specific fields on various objects.Which three field types could be used in roll-up summary fields to accomplish this? (Choose three.)",
      options: [
        "A. Checkbox",
        "B. Date",
        "C. Percent",
        "D. Time",
        "E. Currency",
      ],
      answer: "B,C,E",
      explanation: "",
      title: "Question 600",
    },
  ],
});
