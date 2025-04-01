const curl = require("./curl");
const cheerio = require("cheerio");
const fs = require("fs");
const Promise = require("bluebird");
var mainLinks = [
  {
    name: "PMI.PMP.v2024-08-26.q776",
    url: "https://www-freecram-net.translate.goog/torrent/PMI.PMP.v2024-08-26.q776.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "PMI.PMP.v2024-07-03.q171",
    url: "https://www-freecram-net.translate.goog/torrent/PMI.PMP.v2024-07-03.q171.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "PMI.PMP.v2024-05-21.q498",
    url: "https://www-freecram-net.translate.goog/torrent/PMI.PMP.v2024-05-21.q498.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "PMI.PMP.v2023-10-10.q253",
    url: "https://www-freecram-net.translate.goog/torrent/PMI.PMP.v2023-10-10.q253.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "PMI.PMP.v2022-07-17.q478",
    url: "https://www-freecram-net.translate.goog/torrent/PMI.PMP.v2022-07-17.q478.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "PMI.PMP.v2022-04-02.q436",
    url: "https://www-freecram-net.translate.goog/torrent/PMI.PMP.v2022-04-02.q436.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "PMI.PMP.v2022-03-01.q365",
    url: "https://www-freecram-net.translate.goog/torrent/PMI.PMP.v2022-03-01.q365.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "PMI.PMP.v2022-02-28.q231",
    url: "https://www-freecram-net.translate.goog/torrent/PMI.PMP.v2022-02-28.q231.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "PMI.PMP.v2022-02-01.q251",
    url: "https://www-freecram-net.translate.goog/torrent/PMI.PMP.v2022-02-01.q251.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "PMI.PMP.v2021-11-23.q161",
    url: "https://www-freecram-net.translate.goog/torrent/PMI.PMP.v2021-11-23.q161.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "PMI.PMP.v2021-11-17.q210",
    url: "https://www-freecram-net.translate.goog/torrent/PMI.PMP.v2021-11-17.q210.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "PMI.PMP.v2021-08-21.q133",
    url: "https://www-freecram-net.translate.goog/torrent/PMI.PMP.v2021-08-21.q133.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "PMI.PMP.v2021-06-27.q182",
    url: "https://www-freecram-net.translate.goog/torrent/PMI.PMP.v2021-06-27.q182.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "PMI.PMP.v2021-05-06.q96",
    url: "https://www-freecram-net.translate.goog/torrent/PMI.PMP.v2021-05-06.q96.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "PMI.PMP.v2021-05-04.q62",
    url: "https://www-freecram-net.translate.goog/torrent/PMI.PMP.v2021-05-04.q62.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "PMI.PMP.v2021-04-21.q138",
    url: "https://www-freecram-net.translate.goog/torrent/PMI.PMP.v2021-04-21.q138.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "PMI.PMP.v2021-03-29.q180",
    url: "https://www-freecram-net.translate.goog/torrent/PMI.PMP.v2021-03-29.q180.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "PMI.PMP.v2020-12-20.q134",
    url: "https://www-freecram-net.translate.goog/torrent/PMI.PMP.v2020-12-20.q134.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "PMI.PMP.v2020-10-30.q336",
    url: "https://www-freecram-net.translate.goog/torrent/PMI.PMP.v2020-10-30.q336.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "PMI.PMP.v2020-10-04.q300",
    url: "https://www-freecram-net.translate.goog/torrent/PMI.PMP.v2020-10-04.q300.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "PMI.PMP.v2020-09-10.q255",
    url: "https://www-freecram-net.translate.goog/torrent/PMI.PMP.v2020-09-10.q255.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "PMI.PMP.v2020-08-14.q299",
    url: "https://www-freecram-net.translate.goog/torrent/PMI.PMP.v2020-08-14.q299.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "PMI.PMP.v2020-06-11.q185",
    url: "https://www-freecram-net.translate.goog/torrent/PMI.PMP.v2020-06-11.q185.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "PMI.PMP.v2019-05-17.q1011",
    url: "https://www-freecram-net.translate.goog/torrent/PMI.PMP.v2019-05-17.q1011.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "PMI.pmp.v2018-11-12.q1030",
    url: "https://www-freecram-net.translate.goog/torrent/PMI.pmp.v2018-11-12.q1030.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "PMI.PMP.v2018-04-10.q900",
    url: "https://www-freecram-net.translate.goog/torrent/PMI.PMP.v2018-04-10.q900.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
  },
  {
    name: "PMI.PMP.v2017-12-15.q3515",
    url: "https://www-freecram-net.translate.goog/torrent/PMI.PMP.v2017-12-15.q3515.html?_x_tr_sl=ja&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp",
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
