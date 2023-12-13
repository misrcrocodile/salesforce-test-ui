const curl = require("./curl");
const cheerio = require("cheerio");
const fs = require("fs");
const Promise = require("bluebird");
var mainLinks = [
  {
    name: "Salesforce.Platform-App-Builder.v2023-07-29.q129",
    url: "https://www-freecram-net.translate.goog/torrent/Salesforce.Platform-App-Builder.v2023-07-29.q129.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "Salesforce.Platform-App-Builder.v2023-03-06.q159",
    url: "https://www-freecram-net.translate.goog/torrent/Salesforce.Platform-App-Builder.v2023-03-06.q159.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "Salesforce.Platform-App-Builder.v2023-01-14.q90",
    url: "https://www-freecram-net.translate.goog/torrent/Salesforce.Platform-App-Builder.v2023-01-14.q90.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "Salesforce.Platform-App-Builder.v2022-08-31.q151",
    url: "https://www-freecram-net.translate.goog/torrent/Salesforce.Platform-App-Builder.v2022-08-31.q151.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "Salesforce.Platform-App-Builder.v2022-08-02.q159",
    url: "https://www-freecram-net.translate.goog/torrent/Salesforce.Platform-App-Builder.v2022-08-02.q159.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "Salesforce.Platform-App-Builder.v2022-05-13.q125",
    url: "https://www-freecram-net.translate.goog/torrent/Salesforce.Platform-App-Builder.v2022-05-13.q125.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "Salesforce.Platform-App-Builder.v2022-03-30.q110",
    url: "https://www-freecram-net.translate.goog/torrent/Salesforce.Platform-App-Builder.v2022-03-30.q110.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "Salesforce.Platform-App-Builder.v2022-01-19.q148",
    url: "https://www-freecram-net.translate.goog/torrent/Salesforce.Platform-App-Builder.v2022-01-19.q148.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "Salesforce.Platform-App-Builder.v2021-09-03.q110",
    url: "https://www-freecram-net.translate.goog/torrent/Salesforce.Platform-App-Builder.v2021-09-03.q110.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "Salesforce.Platform-App-Builder.v2021-08-03.q110",
    url: "https://www-freecram-net.translate.goog/torrent/Salesforce.Platform-App-Builder.v2021-08-03.q110.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "Salesforce.Platform-App-Builder.v2021-05-12.q109",
    url: "https://www-freecram-net.translate.goog/torrent/Salesforce.Platform-App-Builder.v2021-05-12.q109.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "Salesforce.Platform-App-Builder.v2021-01-05.q103",
    url: "https://www-freecram-net.translate.goog/torrent/Salesforce.Platform-App-Builder.v2021-01-05.q103.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "Salesforce.Platform-App-Builder.v2020-11-22.q105",
    url: "https://www-freecram-net.translate.goog/torrent/Salesforce.Platform-App-Builder.v2020-11-22.q105.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "Salesforce.Platform-App-Builder.v2020-08-09.q94",
    url: "https://www-freecram-net.translate.goog/torrent/Salesforce.Platform-App-Builder.v2020-08-09.q94.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "Salesforce.Platform-App-Builder.v2020-04-01.q60",
    url: "https://www-freecram-net.translate.goog/torrent/Salesforce.Platform-App-Builder.v2020-04-01.q60.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "Salesforce.Platform-App-Builder.v2019-10-25.q63",
    url: "https://www-freecram-net.translate.goog/torrent/Salesforce.Platform-App-Builder.v2019-10-25.q63.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "Salesforce.Platform-App-Builder.v2019-10-20.q99",
    url: "https://www-freecram-net.translate.goog/torrent/Salesforce.Platform-App-Builder.v2019-10-20.q99.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
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
