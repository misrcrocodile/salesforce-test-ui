const curl = require("./curl");
const cheerio = require("cheerio");
const fs = require("fs");
const Promise = require("bluebird");
var mainLinks = [
  {
    name: "Salesforce.CPQ-Specialist.v2023-10-26.q90",
    url: "https://www-freecram-net.translate.goog/torrent/Salesforce.CPQ-Specialist.v2023-10-26.q90.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "Salesforce.CPQ-Specialist.v2023-06-08.q165",
    url: "https://www-freecram-net.translate.goog/torrent/Salesforce.CPQ-Specialist.v2023-06-08.q165.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "Salesforce.CPQ-Specialist.v2023-03-01.q73",
    url: "https://www-freecram-net.translate.goog/torrent/Salesforce.CPQ-Specialist.v2023-03-01.q73.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "Salesforce.CPQ-Specialist.v2022-12-15.q85",
    url: "https://www-freecram-net.translate.goog/torrent/Salesforce.CPQ-Specialist.v2022-12-15.q85.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "Salesforce.CPQ-Specialist.v2022-11-02.q79",
    url: "https://www-freecram-net.translate.goog/torrent/Salesforce.CPQ-Specialist.v2022-11-02.q79.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "Salesforce.CPQ-Specialist.v2022-08-08.q70",
    url: "https://www-freecram-net.translate.goog/torrent/Salesforce.CPQ-Specialist.v2022-08-08.q70.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "Salesforce.CPQ-Specialist.v2022-07-04.q99",
    url: "https://www-freecram-net.translate.goog/torrent/Salesforce.CPQ-Specialist.v2022-07-04.q99.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "Salesforce.CPQ-Specialist.v2022-06-11.q122",
    url: "https://www-freecram-net.translate.goog/torrent/Salesforce.CPQ-Specialist.v2022-06-11.q122.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "Salesforce.CPQ-Specialist.v2022-04-22.q97",
    url: "https://www-freecram-net.translate.goog/torrent/Salesforce.CPQ-Specialist.v2022-04-22.q97.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "Salesforce.CPQ-Specialist.v2022-02-18.q96",
    url: "https://www-freecram-net.translate.goog/torrent/Salesforce.CPQ-Specialist.v2022-02-18.q96.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "Salesforce.CPQ-Specialist.v2022-01-11.q94",
    url: "https://www-freecram-net.translate.goog/torrent/Salesforce.CPQ-Specialist.v2022-01-11.q94.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "Salesforce.CPQ-Specialist.v2020-11-28.q94",
    url: "https://www-freecram-net.translate.goog/torrent/Salesforce.CPQ-Specialist.v2020-11-28.q94.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "Salesforce.CPQ-Specialist.v2020-09-26.q91",
    url: "https://www-freecram-net.translate.goog/torrent/Salesforce.CPQ-Specialist.v2020-09-26.q91.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "Salesforce.CPQ-Specialist.v2020-07-26.q87",
    url: "https://www-freecram-net.translate.goog/torrent/Salesforce.CPQ-Specialist.v2020-07-26.q87.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "Salesforce.CPQ-Specialist.v2020-06-21.q91",
    url: "https://www-freecram-net.translate.goog/torrent/Salesforce.CPQ-Specialist.v2020-06-21.q91.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
];
async function crawlLink(url) {
  let res = await curl(url);
  let $ = cheerio.load(res);
  let an = $(".barlist a");
  let urlList = [];
  for (var i = 0; i < an.length; i++) {
    var link = an[i].attribs.href;
    if (!link.includes("http")) {
      link = "https://www.freecram.net" + link;
    }
    urlList.push(link);
  }
  return urlList;
}

async function getQuestionData(url) {
  console.log("Get question:", url);
  let res = await curl(url);
  let $ = cheerio.load(res);
  let optionList = [];
  let option = $(".qa-options p");
  for (var i = 0; i < option.length; i++) {
    var item = $(option[i]);
    optionList.push(item.text());
  }
  function normalizeString(text) {
    if (!text) {
      return text;
    }
    text = text.replaceAll("\n      ", "\n");
    text = text.replaceAll("\n       ", "\n");
    text = text.replaceAll("\n ", "\n");
    text = text.trim();

    if (text[0] === "\n") {
      text = text.slice(1);
    }

    if (text[text.length - 1] === "\n") {
      text = text.substring(0, text.length - 1);
    }

    return text;
  }

  return {
    content: normalizeString($(".qa-question").text()),
    options: optionList,
    answer: $(".qa-answerexp>div>span").text(),
    title: "Question " + $(".qa h4 .text-danger").first().text(),
    explanation: normalizeString($(".qa_explanation").text()),
  };
}

async function getData(mainLink) {
  var url = mainLink.url;
  console.log("Get data from url:", url);
  var questionLink = await crawlLink(url);
  var dir = "./crawData";

  let data = await Promise.map(questionLink, getQuestionData, {
    concurrency: 5,
  });

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  fs.writeFile(
    "crawData/" + mainLink.name + ".json",
    JSON.stringify(data),
    (err) => {
      if (err) {
        console.error(err);
      }
      // file written successfully
    }
  );
}
async function init() {
  for (var i = 0; i < mainLinks.length; i++) {
    await getData(mainLinks[i]);
  }
}
init();

function convert() {
  var an = Array.from(document.querySelectorAll("table.table a")).map(
    (e) => e.href.split("https://www.freecram.net/torrent/")[1]
  );
  an = an.filter((e) => e != null);
  var bn = an.map((e) => {
    return {
      name: e.split(".html")[0],
      url:
        "https://www-freecram-net.translate.goog/torrent/" +
        e +
        "?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
    };
  });
  return JSON.stringify(bn);
}
