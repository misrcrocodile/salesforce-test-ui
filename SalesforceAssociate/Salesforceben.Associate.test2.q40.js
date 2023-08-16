window.testContent = window.testContent || [];
var testId = "SalesforceAssociate";
var testName = "SalesforceAssociate";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "Salesforceben.Associate.test2.q40",
  content: [
    {
      content: "What can optionally be created when converting a Lead?",
      options: ["A. Account", "B. Contact", "C. Opportunity"],
      answer: "C",
      title: "Question 1",
    },
    {
      content:
        "Sales users must enter a Closed Lost Reason when the Opportunity stage is changed to “Closed Lost”. How could you enforce this?",
      options: [
        "A. Field Dependency",
        "B. Required Field",
        "C. Validation Rule",
      ],
      answer: "C",
      title: "Question 2",
    },
    {
      content: "What feature enables you to bundle permission sets together?",
      options: [
        "A. Permission Sets",
        "B. Permission Set Bundles",
        "C. Permission Set Groups",
      ],
      answer: "C",
      title: "Question 3",
    },
    {
      content: "What is NOT an example of a standard Object?",
      options: ["A. Invoice", "B. Case", "C. Lead"],
      answer: "C",
      title: "Question 4",
    },
    {
      content:
        "What type of relationship exists between an Account and a Contact?",
      options: ["A. Junction", "B. Master-Detail", "C. Lookup"],
      answer: "C",
      title: "Question 5",
    },
    {
      content:
        "What feature of Salesforce would allow you to create relationships between Accounts?",
      options: [
        "A. Account Hierarchies",
        "B. Account Relationships",
        "C. Account Teams",
      ],
      answer: "B",
      title: "Question 6",
    },
    {
      content:
        "The recruitment team should not be able to log in to Salesforce from home. How can this be prevented?",
      options: [
        "A. Create Trusted IP Ranges",
        "B. Create Login IP Ranges for the Recruitment profile",
        "C. Create Login IP Ranges for the Recruitment role",
      ],
      answer: "B",
      title: "Question 7",
    },
    {
      content:
        "What feature of Salesforce would prevent users from logging in outside of specific hours?",
      options: ["A. Holidays", "B. Login Hours", "C. Login IP Ranges"],
      answer: "B",
      title: "Question 8",
    },
    {
      content: "What is NOT a way of granting access to records?",
      options: [
        "A. Role Hierarchy",
        "B. Profiles",
        "C. Organization-Wide Defaults",
      ],
      answer: "B",
      title: "Question 9",
    },
    {
      content:
        "You need a field on Opportunities to be required only when the stage is equal to “Closed Lost”. How can this be achieved?",
      options: [
        "A. Validation Rule",
        "B. Required at Page Level",
        "C. Universally Required",
      ],
      answer: "A",
      title: "Question 10",
    },
    {
      content:
        "How can you restrict certain users’ ability to view a dashboard?",
      options: [
        "A. Disable access to the dashboard on the user profile.",
        "B. Restrict the access to the folder where the dashboard is located.",
        "C. Restrict the access to the folder where the source report is located.",
      ],
      answer: "B",
      title: "Question 11",
    },
    {
      content:
        "The VP of Marketing, Kimberley, has created a new list view called “Marketing Qualified Leads” and shared it with the public group “Marketing Users”. Ash, the Marketing Administrator, has told her he cannot see the list view. What could be the problem?",
      options: [
        'A. Ash is not in the "Marketing Users" public group.',
        'B. The list view sharing needs to be set to "All users can see this list view".',
        "C. Ash does not have access to some or all of the fields displayed in the list view.",
      ],
      answer: "C",
      title: "Question 12",
    },
    {
      content:
        "You would like to search for “Acme Corporation” in Salesforce, but when using the global search bar, you are being presented with too many records. What could you do to reduce the number of results?",
      options: [
        "A. Change the default Search parameters in your Profile.",
        "B. Change the Search layout in Setup.",
        "C. Add an Object search filter.",
      ],
      answer: "A",
      title: "Question 13",
    },
    {
      content:
        "A user has mistakenly deleted an Opportunity record. Where can you find the recycle bin?",
      options: ["A. Opportunity Tab", "B. App Launcher", "C. Setup"],
      answer: "B",
      title: "Question 14",
    },
    {
      content:
        "Where would you go to customize and configure your Salesforce org – for example, create new users or check how many licenses you have?",
      options: ["A. Home", "B. Setup", "C. App Launcher"],
      answer: "B",
      title: "Question 15",
    },
    {
      content: "What is the easiest way to locate a setup page within Setup?",
      options: ["A. Quick Find", "B. Global Search Bar", "C. Einstein Search"],
      answer: "A",
      title: "Question 16",
    },
    {
      content:
        "A user would like to be able to share a list view with several users that do not share a role or profile. What could an administrator or delegated administrator set up to enable this?",
      options: ["A. Private Group", "B. Public Group", "C. Sharing Rule"],
      answer: "B",
      title: "Question 17",
    },
    {
      content:
        "A user would like to create an email signature. How could this be achieved?",
      options: [
        "A. Create an email signature in the User Record.",
        "B. Create an email signature in Personal Information.",
        "C. Create an email signature in My Email Settings.",
      ],
      answer: "C",
      title: "Question 18",
    },
    {
      content:
        "A US-based company has recently opened a small European office in France. The European team is complaining that the time zone and date/time format is confusing. To ensure all users have the correct time zone and formatting, what should you suggest?",
      options: [
        "A. Change the default locale and time zone via the Object Manager in Setup.",
        "B. Change the default locale and time zone via the Company Information page in Setup.",
        "C. Have each European user change their locale and time zone via Personal Settings.",
      ],
      answer: "B",
      title: "Question 19",
    },
    {
      content:
        "Data about an individual Company, Contact, or Opportunity is stored in what?",
      options: ["A. Record", "B. Field", "C. Object"],
      answer: "B",
      title: "Question 20",
    },
    {
      content:
        "When an employee leaves an organization and should no longer have access to Salesforce, what should be done to the user record?",
      options: [
        "A. The user record should be deleted.",
        "B. No action is required.",
        "C. The user record should be deactivated.",
      ],
      answer: "B",
      title: "Question 21",
    },
    {
      content:
        "The Marketing Manager has asked you to generate a list of contacts for a mailing list. What type of report would be the most appropriate to use?",
      options: ["A. Tabular", "B. Summary", "C. Matrix"],
      answer: "C",
      title: "Question 22",
    },
    {
      content:
        "You would like to identify Accounts with open Opportunities and open cases, displaying the details side by side. How could this be achieved in a report?",
      options: ["A. Matrix Report", "B. Joined Report", "C. Dashboard"],
      answer: "B",
      title: "Question 23",
    },
    {
      content:
        "You have created a report that shows all Opportunities. You would like to see Opportunities by Account. What should you do?",
      options: [
        "A. Add a grouping",
        "B. Add a bucket column",
        "C. Add a filter",
      ],
      answer: "C",
      title: "Question 24",
    },
    {
      content:
        "What happens when you select the setting “View Dashboard As Another Person”? (Select 2)",
      options: [
        "A. The data displayed on the dashboard will change according to the access level of the user viewing the dashboard.",
        'B. All dashboard viewers will see dashboard data based on the access level of the "View Dashboard As" user.',
        'C. The "View Dashboard As" setting is fixed to a specific user.',
      ],
      answer: "A,B",
      title: "Question 25",
    },
    {
      content:
        "What feature can be used to highlight different summarized values in a report?",
      options: ["A. Subtotals", "B. Bucket Field", "C. Conditional Formatting"],
      answer: "C",
      title: "Question 26",
    },
    {
      content:
        "What function in Salesforce reports can help you identify how many distinct values are in a column?",
      options: ["A. Unique Count", "B. Distinct Count", "C. Average"],
      answer: "B",
      title: "Question 27",
    },
    {
      content:
        "Where can you go to find real-time information on system performance and security for Salesforce orgs?",
      options: [
        "A. Salesforce.com",
        "B. Trust.Salesforce.com",
        "C. Security.Salesforce.com",
      ],
      answer: "B",
      title: "Question 28",
    },
    {
      content:
        "Where can you post and vote on suggested enhancements to the Salesforce platform?",
      options: [
        "A. Trailblazer Questions",
        "B. IdeaExchange",
        "C. Salesforce Help",
      ],
      answer: "B",
      title: "Question 29",
    },
    {
      content: "TDX stands for?",
      options: ["A. TrailheadDX", "B. TrailblazerDX", "C. TechDX"],
      answer: "A",
      title: "Question 30",
    },
    {
      content:
        "A company would like to be able to manage their sales pipeline from prospect to deal, as well as be able to forecast future sales. What Salesforce Cloud would support this?",
      options: ["A. Service Cloud", "B. Sales Cloud", "C. Experience Cloud"],
      answer: "B",
      title: "Question 31",
    },
    {
      content:
        "A charitable organization is keen to find a solution to help them with fundraising, grantmaking, and program management. Which would be the most appropriate Salesforce Cloud?",
      options: ["A. Charity Cloud", "B. Nonprofit Cloud", "C. MuleSoft"],
      answer: "B",
      title: "Question 32",
    },
    {
      content: "CRM stands for what?",
      options: [
        "A. Customer Relationship Management",
        "B. Client Relationship Management",
        "C. Customer Resource Management",
      ],
      answer: "A",
      title: "Question 33",
    },
    {
      content: "When MUST you use a Trailhead Playground?",
      options: [
        "A. When Trailhead specific data and/or pre-installed packages are required.",
        "B. When you feel like it.",
        "C. When a free test environment is required.",
      ],
      answer: "A",
      title: "Question 34",
    },
    {
      content: "Where can you maintain your Salesforce certifications?",
      options: ["A. Test Center", "B. Trailhead", "C. Salesforce Help"],
      answer: "B",
      title: "Question 35",
    },
    {
      content: "What is Salesforce Customer 360?",
      options: [
        "A. Salesforce Sales Cloud and Service Cloud",
        "B. Salesforce Sales Cloud",
        "C. The full breadth of the Salesforce portfolio, including core applications, platform, services, and connected ecosystem",
      ],
      answer: "A",
      title: "Question 36",
    },
    {
      content: "What is Salesforce?",
      options: [
        "A. Salesforce is a customer relationship management solution that brings companies and customers together.",
        "B. Salesforce is an enterprise resource planning solution that brings companies and customers together.",
        "C. Salesforce is an content management planning solution that brings companies and customers together.",
      ],
      answer: "A",
      title: "Question 37",
    },
    {
      content: "What is a consideration of multitenancy?",
      options: [
        "A. No testing environments",
        "B. Lack of security",
        "C. Governor limits",
      ],
      answer: "A",
      title: "Question 38",
    },
    {
      content:
        "A Salesforce professional that customizes Salesforce using imperative programming is what?",
      options: [
        "A. A Salesforce Administrator",
        "B. A Salesforce Business Analyst",
        "C. A Salesforce Developer",
      ],
      answer: "C",
      title: "Question 39",
    },
    {
      content:
        "Where can you go to find pre-built solutions to extend the functionality of Salesforce?",
      options: ["A. Marketplace", "B. AppExchange", "C. Google Play Store"],
      answer: "B",
      title: "Question 40",
    },
  ],
});
