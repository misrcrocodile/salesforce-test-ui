const cheerio = require("cheerio");
const fs = require("fs");
const Promise = require("bluebird");
const exec = require("child_process").exec;

const getCurlContent = function (id) {
  return `curl 'https://pi.pardot.com/layoutTemplate/editAjax/id/${id}/mode/read' \
  -H 'Accept: text/html, */*; q=0.01' \
  -H 'Accept-Language: en-US,en;q=0.9,vi;q=0.8,ja;q=0.7' \
  -H 'Connection: keep-alive' \
  -H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' \
  -H 'Cookie: pardot=tok99lft7g0uplk92v9u9udab5; oauthLoginSecureKey=6c4cc8a6e18a9ddc25758d46d14998e5; _gat=1; RememberMe=69ca94f7636075c4432163d3957202ca1e110b4f824eab3d2e3ae237b3ff56899caa3a3609901b2de146c8000242099eaccd7284db19e148ebb1b3c89ae271b1; previewHash=bf1437522305b6c8e9d6f71b290958b188401e6526ef2345372bb2e38dd14ba545630c7991815dd782bac05ced579beb426c04a7ff9fbc8c4ef7b36bac330fcb; recent_history=W3sibW9kdWxlIjoibGF5b3V0VGVtcGxhdGUiLCJpZCI6NDAzOCwibmFtZSI6IklBIC0gVGhhbmtzWW91IExheW91dCJ9LHsibW9kdWxlIjoiaG9tZSIsImlkIjpudWxsLCJuYW1lIjoiaW5kZXgifSx7Im1vZHVsZSI6ImxheW91dFRlbXBsYXRlIiwiaWQiOjE5OTcsIm5hbWUiOiJUTUkgLSBFeHRlcm5hbCBGb3JtIE11bHRpIExhbmd1YWdlIExheW91dCAtIE9OMjQifSx7Im1vZHVsZSI6ImxheW91dFRlbXBsYXRlIiwiaWQiOjQwMzIsIm5hbWUiOiJJQSAtIEdhdGVkIExheW91dCB3aXRoIFNwZWFrZXIifSx7Im1vZHVsZSI6ImxheW91dFRlbXBsYXRlIiwiaWQiOjE0NTYsIm5hbWUiOiJJQSAtIEV4dGVybmFsIEZvcm0gTXVsdGkgTGFuZ3VhZ2UgTGF5b3V0In0seyJtb2R1bGUiOiJsYW5kaW5nUGFnZSIsImlkIjo4MTgyLCJuYW1lIjoiSUFfT24tRGVtYW5kX1dlYmluYXJfVGVtcGxhdGUgMjAyMzA0MjQifSx7Im1vZHVsZSI6InByb3NwZWN0IiwiaWQiOjQwNDYxNjc3LCJuYW1lIjoiU3dhcG5pbCBEb2wifV0%3D' \
  -H 'Origin: https://pi.pardot.com' \
  -H 'Referer: https://pi.pardot.com/layoutTemplate/read/id/4038' \
  -H 'Sec-Fetch-Dest: empty' \
  -H 'Sec-Fetch-Mode: cors' \
  -H 'Sec-Fetch-Site: same-origin' \
  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36' \
  -H 'X-Requested-With: XMLHttpRequest' \
  -H 'X-SFDC-Request-Id: c08901d7-a6b8-42b9-9a9d-9b0aefef83f4' \
  -H 'client: browser' \
  -H 'sec-ch-ua: "Chromium";v="112", "Google Chrome";v="112", "Not:A-Brand";v="99"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  -H 'uri: 781876f4-16f5-4079-9b70-c8dc529643fe' \
  --data-raw '_csrf_token=0427e05a4811e1f0980d760325f401aeb4e1959077f088ba45e653eed447b786667cba3b1e7106717408a79e7dbf55db' \
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

const executeQuestion = async function (id) {
  var curlContent = getCurlContent(id);
  var data = await curl(curlContent);
  let $ = cheerio.load(data);

  let output = $(".textEditors").val();
  let name = $("#name").val();
  if (!fs.existsSync("crawData")) {
    fs.mkdirSync("crawData");
  }

  fs.writeFile(`./crawData/${id}_${name}.txt`, output, (err) => {
    if (err) {
      console.error(err);
    }
    // file written successfully
  });
};

const executeFunc = async function () {
  let listItem = [
    1456, 4032, 4384, 1915, 1552, 4376, 1913, 4093, 2123, 4038, 343, 3844, 4361,
    4355, 341, 1301, 4352, 4343, 4349, 4346, 4340, 4317, 2033, 3853, 1392, 4035,
    4065, 3936, 843, 1189, 675, 4288, 4282, 4062, 727, 3933, 339, 2215, 1408,
    779, 1993, 725, 2241, 745, 1019, 733, 2175, 2537, 763, 1550, 1997, 2005,
    845, 1305, 1027, 715, 1199, 1999, 2003, 2001, 849, 3319, 3316, 2535, 1325,
    1241, 883, 1283, 885, 1995, 413, 126,
  ];
  let result = await Promise.map(listItem, executeQuestion, {
    concurrency: 5,
  });
};
// executeQuestion(1456);
executeFunc();
