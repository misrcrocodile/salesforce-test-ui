const cheerio = require("cheerio");
const fs = require("fs");
const Promise = require("bluebird");
const exec = require("child_process").exec;

const getCurlContent = function (result) {
  var proId = String(result.metaData.question_pro_id);
  var postId = String(result.metaData.question_post_id);
  var number_of_options = result.options.length;
  responseStr = {};
  for (var i = 0; i < number_of_options; i++) {
    responseStr[i] = i == 0;
  }
  responseStr = encodeURIComponent(JSON.stringify(responseStr));
  var quizId = "68";
  var quiz = "22345";
  var course_id = "18820";
  var quiz_nonce = "a3917b0d4f";
  return `curl 'https://courses.salesforceben.com/wp-admin/admin-ajax.php' \
  -H 'authority: courses.salesforceben.com' \
  -H 'accept: application/json, text/javascript, */*; q=0.01' \
  -H 'accept-language: en-US,en;q=0.9' \
  -H 'content-type: application/x-www-form-urlencoded; charset=UTF-8' \
  -H 'cookie: wordpress_logged_in_4e884ffe0cb26cee8275b6e5c916b65f=user0868863083%7C1683345465%7CmSIp02W5qvxPHBht84UrxlVCwWT2j0RYb3CM5nIjeq5%7Ceea977fd7b394d9c436f2200765410480ddc9f9f15330f930ad2514b08a3d914; ' \
  -H 'x-requested-with: XMLHttpRequest' \
  --data-raw 'action=ld_adv_quiz_pro_ajax&func=checkAnswers&data%5BquizId%5D=${quizId}&data%5Bquiz%5D=${quiz}&data%5Bcourse_id%5D=${course_id}&data%5Bquiz_nonce%5D=${quiz_nonce}&data%5Bresponses%5D=%7B%22${proId}%22%3A%7B%22response%22%3A${responseStr}%2C%22question_pro_id%22%3A${proId}%2C%22question_post_id%22%3A${postId}%7D%7D&quiz=22328&course_id=18820' \
  --compressed`;
};

const curl = function (command) {
  return new Promise((resolve, reject) => {
    exec(command, function (error, stdout, stderr) {
      if (error !== null) {
        console.log("Error happend in curl by link: ", url);
        reject(stderr);
      }
      resolve(stdout);
    });
  });
};

// results = Array.from(document.querySelectorAll(".wpProQuiz_listItem")).map(quiz => {
// 	var result = {};
// 	result.metaData = JSON.parse(quiz.getAttribute("data-question-meta"));
// 	result.content = quiz.querySelector(".wpProQuiz_question_text").textContent.trim();
// 	result.options = Array.from(quiz.querySelectorAll(".wpProQuiz_questionListItem label")).map(answer => answer.textContent.trim());
// 	result.answer = "";
// 	return result;
// })

var results = [
  {
    metaData: {
      type: "single",
      question_pro_id: 1129,
      question_post_id: 22889,
    },
    content: "How many filters can a Lightning dashboard have?",
    options: ["2", "3", "10"],
    answer: "",
  },
  {
    metaData: {
      type: "single",
      question_pro_id: 1128,
      question_post_id: 22886,
    },
    content:
      "What function in Salesforce reports can help you identify how many distinct values are in a column?",
    options: ["Distinct Count", "Unique Count", "Average"],
    answer: "",
  },
  {
    metaData: {
      type: "multiple",
      question_pro_id: 1196,
      question_post_id: 22883,
    },
    content:
      "What chart types would be appropriate to compare values, for example, average deal size per account? (Select 2)",
    options: ["Bar Chart", "Gauge Chart", "Column Chart"],
    answer: "",
  },
  {
    metaData: {
      type: "single",
      question_pro_id: 1126,
      question_post_id: 22880,
    },
    content:
      "The Sales Users would like to be able to quickly update record values during the sales meeting. What feature would you recommend?",
    options: [
      "Inline editing for reports",
      "Inline editing for dashboards",
      "Favorites",
    ],
    answer: "",
  },
  {
    metaData: {
      type: "single",
      question_pro_id: 1125,
      question_post_id: 22876,
    },
    content:
      "What feature can be used to highlight different summarized values in a report?",
    options: ["Subtotals", "Bucket Field", "Conditional Formatting"],
    answer: "",
  },
  {
    metaData: {
      type: "single",
      question_pro_id: 1124,
      question_post_id: 22872,
    },
    content:
      "You would like to visualize progress against a fixed target on a sales dashboard. How can this be achieved?",
    options: [
      "Use a funnel component",
      "Use a metric component",
      "Use a gauge component",
    ],
    answer: "",
  },
  {
    metaData: {
      type: "multiple",
      question_pro_id: 1235,
      question_post_id: 22868,
    },
    content:
      "The telemarketing team needs to generate reports on telemarketing leads. Only certain fields should be available on the report. The Telemarketing Manager would also like several default columns to be included every time a report is created. What is needed to fulfill this requirement? (Select 2)",
    options: [
      "Create a custom report",
      'Use standard report "Leads"',
      "Select which fields are available and set as default",
    ],
    answer: "",
  },
  {
    metaData: {
      type: "multiple",
      question_pro_id: 1215,
      question_post_id: 22865,
    },
    content:
      "What happens when you select the setting “View Dashboard As Another Person”? (Select 2)",
    options: [
      'The "View Dashboard As" setting is fixed to a specific user.',
      'All dashboard viewers will see dashboard data based on the access level of the "View Dashboard As" user.',
      "The data displayed on the dashboard will change according to the access level of the user viewing the dashboard.",
    ],
    answer: "",
  },
  {
    metaData: {
      type: "multiple",
      question_pro_id: 1201,
      question_post_id: 22861,
    },
    content:
      "How can you ensure you are looking at the latest dashboard data? (Select 2)",
    options: [
      "Check the dashboard timestamp",
      "Refresh the dashboard",
      "Refresh each underlying report",
    ],
    answer: "",
  },
  {
    metaData: {
      type: "single",
      question_pro_id: 1236,
      question_post_id: 22856,
    },
    content:
      "The VP of Sales would like to receive a dashboard daily. Her team should also receive the dashboard. A role hierarchy has been created so that the role of the VP of Sales is above her subordinate’s role. How can this be achieved?",
    options: [
      "Create a dashboard subscription and share with the VP of Sales role and subordinates.",
      "Create a dashboard subscription and share with a public group.",
      "Create a dashboard subscription and share with individual users.",
    ],
    answer: "",
  },
  {
    metaData: {
      type: "single",
      question_pro_id: 1233,
      question_post_id: 22851,
    },
    content:
      "You have created a report that shows all Opportunities. You would like to see Opportunities by Account. What should you do?",
    options: ["Add a filter", "Add a bucket column", "Add a grouping"],
    answer: "",
  },
  {
    metaData: {
      type: "single",
      question_pro_id: 1202,
      question_post_id: 22848,
    },
    content: "What is a bucket column in Salesforce reporting?",
    options: [
      "Used in reports to categorize and group report values.",
      "A custom field that can be created to group values.",
      "A custom field that can be created to store a finite amount of values.",
    ],
    answer: "",
  },
  {
    metaData: {
      type: "single",
      question_pro_id: 1237,
      question_post_id: 22845,
    },
    content:
      "You would like to see a report of opportunities with or without products. How can this be achieved?",
    options: [
      'Use standard report "Opportunities"',
      'Use standard report "Opportunities with Products"',
      "Create a custom report",
    ],
    answer: "",
  },
  {
    metaData: {
      type: "single",
      question_pro_id: 1216,
      question_post_id: 22842,
    },
    content:
      "You would like to identify Accounts with open Opportunities and open cases, displaying the details side by side. How could this be achieved in a report?",
    options: ["Matrix Report", "Joined Report", "Dashboard"],
    answer: "",
  },
  {
    metaData: {
      type: "single",
      question_pro_id: 1115,
      question_post_id: 22838,
    },
    content: "What is NOT a frequency option when subscribing to a dashboard?",
    options: ["Daily", "Weekly", "Quarterly"],
    answer: "",
  },
  {
    metaData: {
      type: "single",
      question_pro_id: 1238,
      question_post_id: 22834,
    },
    content:
      "What dashboard property can be configured to ensure a user will only see data they have access to based on their security and sharing settings?",
    options: [
      'View Dashboard as "The dashboard viewer"',
      'View Dashboard as "Me"',
      'View Dashboard as "Another person"',
    ],
    answer: "",
  },
  {
    metaData: {
      type: "single",
      question_pro_id: 1186,
      question_post_id: 22831,
    },
    content:
      "The Marketing Manager has asked you to generate a list of contacts for a mailing list. What type of report would be the most appropriate to use?",
    options: ["Matrix", "Summary", "Tabular"],
    answer: "",
  },
  {
    metaData: {
      type: "single",
      question_pro_id: 1185,
      question_post_id: 22827,
    },
    content:
      "You would like to get a report of leads grouped by status. What kind of report would meet this requirement?",
    options: ["Summary", "Tabular", "Metric"],
    answer: "",
  },
];

const executeQuestion = async function (question) {
  var curlContent = getCurlContent(question);
  var data = await curl(curlContent);
  console.log("execute question pro id: ", question.metaData.question_pro_id);
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var res = {};
  try {
    var res = JSON.parse(data)[question.metaData.question_pro_id].e.c;
  } catch (exception) {
    throw new Error("Error in data", getCurlContent(question));
  }
  question.answer = res
    .map((e, index) => (e == 1 ? alphabet[index] : 0))
    .filter((e) => e != 0)
    .join(",");

  return question;
};

const init = async function (name) {
  var dir = "./crawData";

  let data = await Promise.map(results, executeQuestion, {
    concurrency: 5,
  });

  // delete metadata
  data.forEach((e) => delete e.metaData);

  // add title for options
  data.forEach((e) => {
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var options = e.options.map((el, index) => alphabet[index] + ". " + el);
    e.options = options;
    return e;
  });

  // create question
  data.forEach((e, index) => {
    e.title = "Question " + (index + 1);
    return e;
  });

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  fs.writeFile(dir + "/" + name + ".json", JSON.stringify(data), (err) => {
    if (err) {
      console.error(err);
    }
    // file written successfully
  });
};

init("reportDashboard");
