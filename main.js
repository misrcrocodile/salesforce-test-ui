var testListName = Object.keys(window.testContent);
var testList = [];
for (var i = 0; i < testListName.length; i++) {
  testList.push({
    name: testListName[i],
    value: window.testContent[testListName[i]].name,
  });
}
testList.sort(function (a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
});

function initTestSelectList() {
  var selectEl = document.getElementById("testType");
  selectEl.innerHTML = "";
  selectEl.appendChild(
    createElementByText(
      "<option value='' selected >Choose Test Type ...</option>"
    )
  );
  for (var i = 0; i < testList.length; i++) {
    selectEl.appendChild(
      createElementByText(
        `<option value="${testList[i].value}">${testList[i].name}</option>`
      )
    );
  }
}

function onChangeTestType() {
  var testTypeValue = document.querySelector("#testType").value;
  var exQuestionEl = document.querySelector("#exampleQuestion");
  exQuestionEl.innerHTML = "";
  exQuestionEl.appendChild(
    createElementByText(
      "<option value='' selected >Choose Example Question...</option>"
    )
  );
  if (!testTypeValue) return;

  var testList = window.testContent[testTypeValue].testList;
  testList.sort(function (a, b) {
    if (a.name < b.name) {
      return 1;
    }
    if (a.name > b.name) {
      return -1;
    }
    return 0;
  });

  for (var i = 0; i < testList.length; i++) {
    exQuestionEl.appendChild(
      createElementByText(
        `<option value="${testList[i].name}">${testList[i].name}</option>`
      )
    );
  }
}

document.addEventListener("DOMContentLoaded", function () {
  initTestSelectList();
});

window.testJSON = [];

function getEscapeContent(str) {
  var div = document.createElement("div");
  div.innerText = str.trim();
  return div.innerHTML;
}
function createElementByText(str) {
  var div = document.createElement("div");
  div.innerHTML = str.trim();

  // Change this to div.childNodes to support multiple top-level nodes.
  return div.firstChild;
}

function getAnswerArr(q, isShuffleOptions) {
  var ans = "ABCDEFGHIJKLMNOPQ";
  var result = q.answer.split(",");
  for (var i = 0; i < result.length; i++) {
    result[i] = ans.indexOf(result[i]);
  }
  var resultList = [];
  for (var i = 0; i < q.options.length; i++) {
    resultList.push({
      value: q.options[i].substr(1, q.options[i].length),
      isTrue: result.includes(i),
    });
  }
  if (isShuffleOptions) {
    resultList = shuffleArray(resultList);
  }
  for (var i = 0; i < resultList.length; i++) {
    resultList[i].value = ans[i] + resultList[i].value;
  }
  return resultList;
}

function checkAnswer(id) {
  var listAns = document.querySelectorAll(`#${id} .answer`);
  for (var i = 0; i < listAns.length; i++) {
    listAns[i].classList = ["answer"];
  }
}

function createOptions(q, isShuffleOptions) {
  var listOps = [];
  var idEl = q.title.replaceAll(" ", "");
  var checkType = q.answer.length > 1 ? "checkbox" : "radio";
  var results = getAnswerArr(q, isShuffleOptions);
  for (var i = 0; i < results.length; i++) {
    var trueSpan = results[i].isTrue
      ? `<span class="answer hidden">True</span>`
      : "";
    var str = `<div class="form-check">
  <input class="form-check-input" type="${checkType}" value="" name="${idEl}" id="${idEl}${i}">
  <label class="form-check-label" for="${idEl}${i}">
    ${getEscapeContent(results[i].value)}${trueSpan}
  </label>
</div>`;
    listOps.push(createElementByText(str));
  }

  return listOps;
}

function createQuestion(q, isShuffleQuestion) {
  var idEl = q.title.replaceAll(" ", "");
  var el = createElementByText(`<div class="question-container" id="${idEl}">
  <label class="form-label"><strong>${q.title}:</strong> ${q.content.replaceAll(
    "\n",
    "<br>"
  )}</label>

  
</div>`);
  var opList = createOptions(q, isShuffleQuestion);
  opList.push(
    createElementByText(
      `<button type="button" class="btn btn-primary" style="margin-top: 10px;" onClick="checkAnswer('${idEl}')">Show Answer</button>`
    )
  );
  for (var i = 0; i < opList.length; i++) {
    el.appendChild(opList[i]);
  }
  return el;
}

function getJsonData() {
  var testTypeValue = document.querySelector("#testType").value;
  var exQuestionValue = document.querySelector("#exampleQuestion").value;
  if (testTypeValue === "") {
    alert("Please select the test type!");
    return [];
  }
  if (exQuestionValue === "") {
    alert("Please select the example question!");
    return [];
  }
  var testList = window.testContent[testTypeValue].testList;
  var jsonData = [];
  for (var i = 0; i < testList.length; i++) {
    if (testList[i].name === exQuestionValue) {
      jsonData = testList[i].content;
      break;
    }
  }
  return jsonData;
}

function loadQuestion() {
  // Clear previous content
  var isShuffle = document.querySelector("#isShuffle").checked;
  var body = document.querySelector("#question-content");
  body.innerHTML = "";
  var testJSON = getJsonData();
  if (isShuffle) {
    testJSON = shuffleArray(testJSON);
  }
  for (var i = 0; i < testJSON.length; i++) {
    testJSON[i].title = "Question " + (i + 1);
  }
  for (var i = 0; i < testJSON.length; i++) {
    body.appendChild(createQuestion(testJSON[i], isShuffle));
  }
}

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
