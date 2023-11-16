const curl = require("./curl");
const cheerio = require("cheerio");
const fs = require("fs");
const Promise = require("bluebird");
var mainLinks = [
  {
    name: "Salesforce.ADM-201.v2023-11-02.q102",
    url: "https://www-freecram-net.translate.goog/torrent/Salesforce.ADM-201.v2023-11-02.q102.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "Salesforce.ADM-201.v2023-10-09.q118",
    url: "https://www-freecram-net.translate.goog/torrent/Salesforce.ADM-201.v2023-10-09.q118.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "Salesforce.ADM-201.v2023-03-15.q176",
    url: "https://www-freecram-net.translate.goog/torrent/Salesforce.ADM-201.v2023-03-15.q176.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "Salesforce.ADM-201.v2022-12-19.q89",
    url: "https://www-freecram-net.translate.goog/torrent/Salesforce.ADM-201.v2022-12-19.q89.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "Salesforce.ADM-201.v2022-11-27.q96",
    url: "https://www-freecram-net.translate.goog/torrent/Salesforce.ADM-201.v2022-11-27.q96.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "Salesforce.ADM-201.v2022-09-24.q73",
    url: "https://www-freecram-net.translate.goog/torrent/Salesforce.ADM-201.v2022-09-24.q73.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "Salesforce.ADM-201.v2022-08-25.q79",
    url: "https://www-freecram-net.translate.goog/torrent/Salesforce.ADM-201.v2022-08-25.q79.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "Salesforce.ADM-201.v2022-08-16.q84",
    url: "https://www-freecram-net.translate.goog/torrent/Salesforce.ADM-201.v2022-08-16.q84.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "Salesforce.ADM-201.v2022-05-04.q74",
    url: "https://www-freecram-net.translate.goog/torrent/Salesforce.ADM-201.v2022-05-04.q74.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "Salesforce.ADM-201.v2022-05-02.q104",
    url: "https://www-freecram-net.translate.goog/torrent/Salesforce.ADM-201.v2022-05-02.q104.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "Salesforce.ADM-201.v2022-05-02.q74",
    url: "https://www-freecram-net.translate.goog/torrent/Salesforce.ADM-201.v2022-05-02.q74.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "Salesforce.ADM-201.v2022-03-11.q103",
    url: "https://www-freecram-net.translate.goog/torrent/Salesforce.ADM-201.v2022-03-11.q103.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "Salesforce.ADM-201.v2022-02-01.q72",
    url: "https://www-freecram-net.translate.goog/torrent/Salesforce.ADM-201.v2022-02-01.q72.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "Salesforce.ADM-201.v2022-01-17.q124",
    url: "https://www-freecram-net.translate.goog/torrent/Salesforce.ADM-201.v2022-01-17.q124.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "Salesforce.ADM-201.v2021-12-20.q58",
    url: "https://www-freecram-net.translate.goog/torrent/Salesforce.ADM-201.v2021-12-20.q58.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "Salesforce.ADM-201.v2021-12-15.q124",
    url: "https://www-freecram-net.translate.goog/torrent/Salesforce.ADM-201.v2021-12-15.q124.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "Salesforce.ADM-201.v2021-11-27.q128",
    url: "https://www-freecram-net.translate.goog/torrent/Salesforce.ADM-201.v2021-11-27.q128.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "Salesforce.ADM-201.v2021-09-08.q111",
    url: "https://www-freecram-net.translate.goog/torrent/Salesforce.ADM-201.v2021-09-08.q111.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "Salesforce.ADM-201.v2021-07-13.q106",
    url: "https://www-freecram-net.translate.goog/torrent/Salesforce.ADM-201.v2021-07-13.q106.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "Salesforce.ADM-201.v2021-03-14.q392",
    url: "https://www-freecram-net.translate.goog/torrent/Salesforce.ADM-201.v2021-03-14.q392.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "Salesforce.ADM-201.v2020-12-24.q67",
    url: "https://www-freecram-net.translate.goog/torrent/Salesforce.ADM-201.v2020-12-24.q67.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "Salesforce.ADM-201.v2020-10-30.q61",
    url: "https://www-freecram-net.translate.goog/torrent/Salesforce.ADM-201.v2020-10-30.q61.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "Salesforce.ADM-201.v2020-08-03.q52",
    url: "https://www-freecram-net.translate.goog/torrent/Salesforce.ADM-201.v2020-08-03.q52.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "Salesforce.ADM-201.v2020-06-24.q351",
    url: "https://www-freecram-net.translate.goog/torrent/Salesforce.ADM-201.v2020-06-24.q351.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "Salesforce.ADM-201.v2020-06-17.q52",
    url: "https://www-freecram-net.translate.goog/torrent/Salesforce.ADM-201.v2020-06-17.q52.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "Salesforce.ADM-201.v2019-02-19.q581",
    url: "https://www-freecram-net.translate.goog/torrent/Salesforce.ADM-201.v2019-02-19.q581.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "Salesforce.ADM-201.v2018-04-22.q1010",
    url: "https://www-freecram-net.translate.goog/torrent/Salesforce.ADM-201.v2018-04-22.q1010.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "Salesforce.ADM-201.v2018-03-18.q603",
    url: "https://www-freecram-net.translate.goog/torrent/Salesforce.ADM-201.v2018-03-18.q603.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "Salesforce.ADM-201.v2018-03-15.q40",
    url: "https://www-freecram-net.translate.goog/torrent/Salesforce.ADM-201.v2018-03-15.q40.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
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
