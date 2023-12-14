const cheerio = require("cheerio");
const fs = require("fs");
const exec = require("child_process").exec;

const Promise = require("bluebird");
const MAX_PAGE = 118;
const FILE_NAME = "Certlibrary.ADM-201.v2023-12-09.q1181.js";
function curl(url) {
  const command = `curl ${url}`;
  return new Promise((resolve, reject) => {
    exec(command, function (error, stdout, stderr) {
      if (error !== null) {
        console.log("Error happend in curl by link: ", command);
        reject(stderr);
      }
      resolve(stdout);
    });
  });
}

function getLinkByPage(page) {
  return `'https://www.certlibrary.com/exam/ADM-201?' \
  -H 'authority: www.certlibrary.com' \
  -H 'accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7' \
  -H 'accept-language: en-US,en;q=0.9' \
  -H 'cache-control: max-age=0' \
  -H 'content-type: application/x-www-form-urlencoded' \
  -H 'cookie: _gid=GA1.2.1332963137.1702478162; csrftoken=59QjgstKbUYuAxUymYvkA6sWVktR73P81ewLejP04hzk5oHIkasUtBjI7giASnJp; sessionid=os203pkghuxyerfnh1bjuc3iovz3z7bp; _gat_gtag_UA_106649134_1=1; _ga_WZ7EDF1LB9=GS1.1.1702521303.3.1.1702521324.0.0.0; _ga=GA1.1.1013298747.1702478162' \
  -H 'origin: https://www.certlibrary.com' \
  -H 'referer: https://www.certlibrary.com/exam/ADM-201?' \
  -H 'sec-ch-ua: "Not_A Brand";v="8", "Chromium";v="120", "Microsoft Edge";v="120"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  -H 'sec-fetch-dest: document' \
  -H 'sec-fetch-mode: navigate' \
  -H 'sec-fetch-site: same-origin' \
  -H 'sec-fetch-user: ?1' \
  -H 'upgrade-insecure-requests: 1' \
  -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 Edg/120.0.0.0' \
  --data-raw 'csrfmiddlewaretoken=Qsai2HwitQB5muCGlemNAaue8uLngwg6MxQK0ySymdcVRlpQjqjntFl0kqA61Qan&page=3&qpp_arrow_buttons=&recaptcha-result=03AFcWeA4KHCVixgkgOe6ON3bGVqAaxKk5cuJal5tKLyYImTYuj19ubbC82SAW5TbCXyNnOwEpDjGt65zU2TnunN2Y9RIC72bOkmtPiJhqzHk073l-RPch3g9j8avFxQtGksGlHNAAjzol-zo4woKtPoPxAnSD3dvFcrFIqu4HZ7LQ1RvW3F3OKpKSDtdNl1GOJmxrL4r6OuJLZF0rcNNUdcMvxiYyOpeNEeROWmmj0V_JD2OOs2r5PRis9psLl0fuR4g6QuUn0Yc4rAxYHHChgwYbMdiT85e92VnHyWODMdJA826C3Xjj7Q35ewLn5_3zO_zoZ5lMj7E0a0P6p2JLk6qt37oLS8alokF85gBtl-E1yyhp473Zd3kjUWaOB_n4jTRiVyTC1qwGlHoW-9uKU4Y2HC5lebZMOTNvS-h-Crp7XtAvwjkZSqy_xosI2sT1s9xz2DuAyfgCw2ujdXuYTPoqgvNmd6MBOXYasMWbUBZ1mBhBqRqpQrLdMDv-iWTuv7_uaJXUkZCvpy33QtoBGWd15EQM50H31P84UE903nZ7tGrD7EhLlDD1dbSsJzvxb7fyUSuucbZ-99N0oMXZVmqZGs-A8keLO7puL-_GJyqc57c8DdRZIR4&g-recaptcha-response=03AFcWeA4KHCVixgkgOe6ON3bGVqAaxKk5cuJal5tKLyYImTYuj19ubbC82SAW5TbCXyNnOwEpDjGt65zU2TnunN2Y9RIC72bOkmtPiJhqzHk073l-RPch3g9j8avFxQtGksGlHNAAjzol-zo4woKtPoPxAnSD3dvFcrFIqu4HZ7LQ1RvW3F3OKpKSDtdNl1GOJmxrL4r6OuJLZF0rcNNUdcMvxiYyOpeNEeROWmmj0V_JD2OOs2r5PRis9psLl0fuR4g6QuUn0Yc4rAxYHHChgwYbMdiT85e92VnHyWODMdJA826C3Xjj7Q35ewLn5_3zO_zoZ5lMj7E0a0P6p2JLk6qt37oLS8alokF85gBtl-E1yyhp473Zd3kjUWaOB_n4jTRiVyTC1qwGlHoW-9uKU4Y2HC5lebZMOTNvS-h-Crp7XtAvwjkZSqy_xosI2sT1s9xz2DuAyfgCw2ujdXuYTPoqgvNmd6MBOXYasMWbUBZ1mBhBqRqpQrLdMDv-iWTuv7_uaJXUkZCvpy33QtoBGWd15EQM50H31P84UE903nZ7tGrD7EhLlDD1dbSsJzvxb7fyUSuucbZ-99N0oMXZVmqZGs-A8keLO7puL-_GJyqc57c8DdRZIR4' \
  --compressed
  `;
}

async function getQuestionData(url) {
  let res = await curl(url);
  let $ = cheerio.load(res);
  var questionList = $(".question_card");
  var objList = [];
  for (var i = 0; i < questionList.length; i++) {
    var obj = {};
    var elm = cheerio.load(questionList[i]);
    obj.content = elm(".question_text>p").text().trim();
    obj.options = Array.from(elm(".choices-list>li")).map((el) =>
      $(el).text().replaceAll("\n", "").replace(/  +/g, " ").trim()
    );
    obj.answer = elm(".answer_block strong").text().trim().split("").join(",");
    obj.explanation = "";
    obj.title = "";
    objList.push(obj);
  }
  return objList;
}

async function getData() {
  var listPage = [];
  for (var i = 0; i < MAX_PAGE; i++) {
    listPage.push(getLinkByPage(i + 1));
  }
  var dir = "./crawData";

  let data = await Promise.map(listPage, getQuestionData, {
    concurrency: 5,
  });
  data = data.flat();
  for (var i = 0; i < data.length; i++) {
    data[i].title = "Question " + (i + 1);
  }

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  fs.writeFile("crawData/" + FILE_NAME, JSON.stringify(data), (err) => {
    if (err) {
      console.error(err);
    }
    // file written successfully
  });
}
async function init() {
  getData();
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
