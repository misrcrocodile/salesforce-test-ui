const curl = require("./curl");
const cheerio = require("cheerio");
const fs = require("fs");
const Promise = require("bluebird");
var mainLinks = [
  {
    name: "Salesforce.Data-Architect.v2023-03-15.q77",
    url: "https://www-freecram-net.translate.goog/torrent/Salesforce.Data-Architect.v2023-03-15.q77.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "Salesforce.Data-Architect.v2023-01-20.q86",
    url: "https://www-freecram-net.translate.goog/torrent/Salesforce.Data-Architect.v2023-01-20.q86.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "Salesforce.Identity-and-Access-Management-Architect.v2023-06-17.q81",
    url: "https://www-freecram-net.translate.goog/torrent/Salesforce.Identity-and-Access-Management-Architect.v2023-06-17.q81.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "Salesforce.Identity-and-Access-Management-Architect.v2022-12-05.q87",
    url: "https://www-freecram-net.translate.goog/torrent/Salesforce.Identity-and-Access-Management-Architect.v2022-12-05.q87.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "Salesforce.Sharing-and-Visibility-Designer.v2023-06-24.q109",
    url: "https://www-freecram-net.translate.goog/torrent/Salesforce.Sharing-and-Visibility-Designer.v2023-06-24.q109.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "Salesforce.Sharing-and-Visibility-Designer.v2022-04-11.q147",
    url: "https://www-freecram-net.translate.goog/torrent/Salesforce.Sharing-and-Visibility-Designer.v2022-04-11.q147.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "Salesforce.Sharing-and-Visibility-Designer.v2022-03-29.q72",
    url: "https://www-freecram-net.translate.goog/torrent/Salesforce.Sharing-and-Visibility-Designer.v2022-03-29.q72.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "Salesforce.Sharing-and-Visibility-Designer.v2021-10-03.q72",
    url: "https://www-freecram-net.translate.goog/torrent/Salesforce.Sharing-and-Visibility-Designer.v2021-10-03.q72.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "Salesforce.Sharing-and-Visibility-Designer.v2020-09-16.q59",
    url: "https://www-freecram-net.translate.goog/torrent/Salesforce.Sharing-and-Visibility-Designer.v2020-09-16.q59.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "Salesforce.Sharing-and-Visibility-Designer.v2020-08-19.q78",
    url: "https://www-freecram-net.translate.goog/torrent/Salesforce.Sharing-and-Visibility-Designer.v2020-08-19.q78.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "Salesforce.Sharing-and-Visibility-Designer.v2020-07-19.q57",
    url: "https://www-freecram-net.translate.goog/torrent/Salesforce.Sharing-and-Visibility-Designer.v2020-07-19.q57.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "Salesforce.Sharing-and-Visibility-Designer.v2019-10-18.q50",
    url: "https://www-freecram-net.translate.goog/torrent/Salesforce.Sharing-and-Visibility-Designer.v2019-10-18.q50.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
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
  return {
    content: $(".qa-question").text(),
    options: optionList,
    answer: $(".qa-answerexp").text(),
    title: $(".qa h4").first().text(),
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
