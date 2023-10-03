window.testContent = window.testContent || [];
var testId = "Salesforce.JsDevI";
var testName = "Salesforce.JsDevI";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "Salesforce.JsDevI.v2022-07-10.q70",
  content: [
    {
      content:
        'Refer to the code below:let car1 = new Promise((_ ,reject)=> setTimeout(reject,2000,"Car1 crashed in")); let car2 = new Promise(resolve => setTimeout(resolve,1500,"Car2 completed")); let car3 = new Promise(resolve => setTimeout(resolve,3000,"Car3 completed")); Promise.race([car1,car2,car3]).then(value=>{let result = `${value} the race.`;}).catch(err=>{console.log(\'Race is cancelled.\',err);});What is the value of result when promise.race execues?',
      options: ["A. Car2 completed the race."],
      answer: "A",
      title: "Question 1",
    },
    {
      content:
        "A developer has two ways to write a function:Option A:function Monster(){this.growl = ()=>{console.log('Grr!');}}Option B:function Monster(){};Monster.prototype.growl = ()=>{console.log('Grr!');}After deciding on an option, the developer creates 1000 monster objects. How many growl methods are created with Option A and Option B?",
      options: [
        "A. 1000 for both",
        "B. 1 for Option A, 1000 for Option B",
        "C. 1 methods for both",
        "D. 1000 for Option A, 1 for Option B",
      ],
      answer: "C",
      title: "Question 2",
    },
    {
      content:
        'Refer to the code below:01 let car1 = new promise((_, reject) =>02 setTimeout(reject, 2000, "Car 1 crashed in"));03 let car2 = new Promise(resolve => setTimeout(resolve, 1500, "Car 2completed"));04 let car3 = new Promise(resolve => setTimeout (resolve, 3000, "Car 3Completed"));05 Promise.race([car1, car2, car3])06 .then(value => (07 let result = $(value) the race. `;08 ))09 .catch( arr => (10 console.log("Race is cancelled.", err);11 ));What is the value of result when Promise.race executes?',
      options: [
        "A. Car 3 completed the race.",
        "B. Car 1 crashed in the race.",
        "C. Race is cancelled.",
        "D. Car 2 completed the race.",
      ],
      answer: "D",
      title: "Question 3",
    },
    {
      content: "Refer to the following code:What is the output of line 11?",
      options: [
        'A. ["foo", "bar"]',
        'B. ["foo:1", "bar:2"]',
        'C. ["bar", "foo"]',
        "D. [1,2]",
      ],
      answer: "A",
      title: "Question 4",
    },
    {
      content:
        "Refer to following code:class Vehicle {constructor(plate) {This.plate =plate;}}Class Truck extends Vehicle {constructor(plate, weight) {//Missing codeThis.weight = weight;}displayWeight() {console.log('The truck ${this.plate} has a weight of ${this.weight} lb.');}} Let myTruck = new Truck('123AB', 5000); myTruck.displayWeight(); Which statement should be added to line 09 for the code to display 'The truck 123AB has a weight of 5000lb.'?",
      options: [
        "A. Super.plate =plate;",
        "B. This.plate =plate;",
        "C. Vehicle.plate = plate;",
        "D. super(plate);",
      ],
      answer: "D",
      title: "Question 5",
    },
    {
      content:
        "Given the code below:Setcurrent URL ();console.log('The current URL is: ' +url );function setCurrentUrl() {Url = window.location.href:What happens when the code executes?",
      options: [
        "A. The url variable has global scope and line 02 executes correctly.",
        "B. The url variable has local scope and line 02 executes correctly.",
        "C. The url variable has local scope and line 02 throws an error.",
        "D. The url variable has global scope and line 02 throws an error.",
      ],
      answer: "A",
      title: "Question 6",
    },
    {
      content:
        "Considering type coercion, what does the following expression evaluate to?True + '13' + NaN",
      options: ["A. ' 113Nan '", "B. ' true13NaN '", "C. 14", "D. ' true13 '"],
      answer: "B",
      title: "Question 7",
    },
    {
      content:
        "Refer to following code block:Let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,];Let output =0;For (let num of array){if (output >0){Break;}if(num % 2 == 0){Continue;}Output +=num;What is the value of output after the code executes?",
      options: ["A. 25", "B. 16", "C. 11", "D. 36"],
      answer: "B",
      title: "Question 8",
    },
    {
      content:
        "A developer implements a function that adds a few values.Function sum(num) {If (num == undefined) {Num =0;}Return function( num2, num3){If (num3 === undefined) {Num3 =0 ;}Return num + num2 + num3;}}Which three options can the developer invoke for this function to get a return value of 10 ? Choose 3 answers",
      options: [
        "A. Sum () (20)",
        "B. sum(10) ()",
        "C. Sum (5, 5) ()",
        "D. sum() (5, 5)",
        "E. sum(5)(5)",
      ],
      answer: "D,E",
      title: "Question 9",
    },
    {
      content:
        "A developer has a formatName function that takes two arguments, firstName and lastName and returns a string. They want to schedule the function to run once after five seconds. What is the correct syntax to schedule this function?",
      options: [
        "A. setTimout(() => { formatName(\"John', 'Doe') }, 5000);",
        'B. setTimeout (formatName(), 5000, "John", "BDoe");',
        "C. setTimeout ('formatName', 5000, 'John\", \"Doe');",
        "D. setTimeout (formatName('John', ''Doe'), 5000);",
      ],
      answer: "C",
      title: "Question 10",
    },
    {
      content:
        "Which statement can a developer apply to increment the browser's navigation history without a page refresh?Which statement can a developer apply to increment the browser's navigation history without a page refresh?",
      options: [
        "A. window.history.pushStare(newStateObject, ' ', null);",
        "B. window.history.pushState(newStateObject);",
        "C. window.history.state.push(newStateObject);",
        "D. window.history.replaceState(newStateObject,' ', null);",
      ],
      answer: "D",
      title: "Question 11",
    },
    {
      content:
        "developer has a web server running with Node.js. The command to start the web server is node server,js. The web server started having latency issues. Instead of a one second turn around for web requests, the developer now sees a five second turnaround, Which command can the web developer run to see what the module is doing during the latency period?",
      options: [
        "A. NODE_DEBUG =true node server.js",
        "B. DEBUG =true node server.js",
        "C. NODE_DEBUG =http, https node server.js",
        "D. DEBUG = http, https node server.js",
      ],
      answer: "B",
      title: "Question 12",
    },
    {
      content:
        "Refer to the code below:let timeFunction =() => {console.log('Timer called.\");};let timerId = setTimeout (timedFunction, 1000);Which statement allows a developer to cancel the scheduled timed function?",
      options: [
        "A. removeTimeout(timerId);",
        "B. removeTimeout(timedFunction);",
        "C. clearTimeout(timedFunction);",
        "D. clearTimeout(timerId);",
      ],
      answer: "D",
      title: "Question 13",
    },
    {
      content:
        "Refer to the following code:function test (val) {If (val === undefined) {return 'Undefined values!' ;}if (val === null) {return 'Null value! ';}return val;}Let x;test(x);What is returned by the function call on line 13?",
      options: [
        "A. Line 13 throws an error.",
        "B. 'Null value!'",
        "C. 'Undefined values!'",
        "D. Undefined",
      ],
      answer: "C",
      title: "Question 14",
    },
    {
      content:
        "A developer implements and calls the following code when an application state change occurs:Const onStateChange =innerPageState) => {window.history.pushState(newPageState, ' ', null);}If the back button is clicked after this method is executed, what can a developer expect?",
      options: [
        "A. The page is navigated away from and the previous page in the browser's history is loaded.",
        "B. The page reloads and all Javascript is reinitialized.",
        "C. A popstate event is fired with a state property that details the application's last state.",
        "D. A navigate event is fired with a state property that details the previous application state.",
      ],
      answer: "A",
      title: "Question 15",
    },
    {
      content:
        "A developer has a web server running with Node.js. The command to start the web server is node server.js. The web server started having latency issues. Instead of a one second turnaround for web requests, the developer now sees a five second turnaround. Which command can the web developer run to see what the module is doing during the latency period?",
      options: [
        "A. DEBUG=http, https node server.js",
        "B. NODE_DEBUG=http,https node server.js",
        "C. NODE_DEBUG=true node server.js",
        "D. DEBUG=true node server.js",
      ],
      answer: "D",
      title: "Question 16",
    },
    {
      content:
        "Refer to the following code that imports a module named utils:import (foo, bar) from '/path/Utils.js';foo() ;bar() ;Which two implementations of Utils.js export foo and bar such that the code above runs without error? Choose 2 answers",
      options: [
        "A. const foo = () => { return 'foo' ; }const bar = () => { return 'bar' ; }export { bar, foo }",
        "B. Export default class {foo() { return 'foo' ; }bar() { return 'bar' ; }}",
        "C. // FooUtils.js and BarUtils.js existImport (foo) from '/path/FooUtils.js';Import (boo) from ' /path/NarUtils.js';",
        "D. const foo = () => { return 'foo';}const bar = () => {return 'bar'; }Export default foo, bar;",
      ],
      answer: "A,B",
      title: "Question 17",
    },
    {
      content:
        "Refer to code below:console.log(0);setTimeout(() => (console.log(1);});console.log(2);setTimeout(() => {console.log(3);), 0);console.log(4);In which sequence will the numbers be logged?",
      options: ["A. 01234", "B. 02431", "C. 02413", "D. 13024"],
      answer: "B",
      title: "Question 18",
    },
    {
      content: "Given the code below:What is logged to the console'",
      options: ["A. 1 2 5 3 4", "B. 2 5 1 3 4", "C. 2 5 3 4 1", "D. 1 2 3 4 5"],
      answer: "C",
      title: "Question 19",
    },
    {
      content:
        "Refer to the code below:01 const exec = (item, delay) =>{02 new Promise(resolve => setTimeout( () => resolve(item), delay)),03 async function runParallel() {04 Const (result1, result2, result3) = await Promise.all{05 [exec ('x', '100') , exec('y', 500), exec('z', '100')]06 );07 return `parallel is done: $(result1) $(result2)$(result3)`;08 }}}Which two statements correctly execute the runParallel () function? Choose 2 answers",
      options: [
        "A. runParallel ( ). done(function(data){return data;});",
        "B. runParallel () .then(function(data)return data",
        "C. runParallel () .then(data);",
        "D. Async runParallel () .then(data);",
      ],
      answer: "A,B",
      title: "Question 20",
    },
    {
      content:
        "developer is trying to convince management that their team will benefit from using Node.js for a backend server that they are going to create. The server will be a web server that handles API requests from a website that the team has already built using HTML, CSS, and JavaScript. Which three benefits of Node.js can the developer use to persuade their manager? Choose 3 answers:",
      options: [
        "A. Executes server-side JavaScript code to avoid learning a new language.",
        "B. Performs a static analysis on code before execution to look for runtime errors.",
        "C. Ensures stability with one major release every few years.",
        "D. Installs with its own package manager to install and manage third-party libraries.",
        "E. Uses non-blocking functionality for performant request handling .",
      ],
      answer: "B,D,E",
      title: "Question 21",
    },
    {
      content:
        "A developer creates an object where its properties should be immutable and prevent properties from being added or modified. Which method should be used to execute this business requirement ?",
      options: [
        "A. Object.freeze()",
        "B. Object.lock()",
        "C. Object.const()",
        "D. Object.eval()",
      ],
      answer: "A",
      title: "Question 22",
    },
    {
      content:
        "A developer copied a JavaScript object:How does the developer access dan's forstName,lastName? Choose 2 answers",
      options: [
        "A. dan,firstname ( ) + dan, lastName ( )",
        "B. dan, firstName = dan.lastName",
        "C. dan,name",
        "D. dan,name ( )",
      ],
      answer: "B,D",
      title: "Question 23",
    },
    {
      content: "What is the result of the code block?",
      options: [
        "A. The console logs 'flag' and another flag.",
        "B. The console logs only 'flag'.",
        "C. An error is thrown.",
        "D. The console logs 'flag' and then an error is thrown.",
      ],
      answer: "D",
      title: "Question 24",
    },
    {
      content:
        "Refer to the code below:What is the output of this function when called with an empty array?",
      options: [
        "A. Return 0",
        "B. Return 5",
        "C. Return NaN",
        "D. Return Infinity",
      ],
      answer: "B",
      title: "Question 25",
    },
    {
      content:
        "Refer to the following code:Let sampleText = 'The quick brown fox jumps';A developer needs to determine if a certain substring is part of a string. Which three expressions return true for the given substring ? Choose 3 answers",
      options: [
        "A. sampleText.includes(' quick ') !== -1;",
        "B. sampleText.includes('fox');",
        "C. sampleText.includes(' fox ');",
        "D. sampleText.includes(' quick ', 4);",
        "E. sampleText.includes(' Fox ', 3)",
      ],
      answer: "A,C,D",
      title: "Question 26",
    },
    {
      content:
        'A developer has two ways to write a function:Option A:function Monster() {This.growl = () => {Console.log ("Grr!");}}Option B:function Monster() {};Monster.prototype.growl =() => {console.log("Grr!");}After deciding on an option, the developer creates 1000 monster objects. How many growl methods are created with Option A Option B?',
      options: [
        "A. 1 growl method is created for Option A. 1000 growl methods are created for Option B.",
        "B. 1000 growl method is created for Option A. 1 growl methods are created for Option B.",
        "C. 1 growl method is created regardless of which option is used.",
        "D. 1000 growl methods are created regardless of which option is used.",
      ],
      answer: "B",
      title: "Question 27",
    },
    {
      content:
        "A developer has the following array of student test grades:Let arr = [ 7, 8, 5, 8, 9 ];The Teacher wants to double each score and then see an array of the students who scored more than 15 points. How should the developer implement the request?",
      options: [
        "A. Let arr1 = arr.map((num) => num*2). Filter (( val) => val > 15);",
        "B. Let arr1 = arr.map((num) => ( num *2)).filterBy((val) => ( val >15 ));",
        "C. Let arr1 = arr.filter(( val) => ( return val > 15 )) .map (( num) => ( return num *2 ))",
        "D. Let arr1 = arr.mapBy (( num) => ( return num *2 )) .filterBy (( val ) => return val > 15 )) ;",
      ],
      answer: "A",
      title: "Question 28",
    },
    {
      content:
        "Given the HTML below:Which statement adds the priority-account css class to the Applied Shipping row?",
      options: [
        "A. document.querySelector('#row-as').classList.add('priority-account');",
      ],
      answer: "A",
      title: "Question 29",
    },
    {
      content:
        'Refer the code below.x=3.14;function myfunction() {"use strict";y=x;}z=x;myFunction();',
      options: [],
      answer:
        "  Z is equal to 3.14 Use strict has effect only on line 5. Line 5 throws an error ",
      title: "Question 30",
    },
    {
      content:
        "Given code below:setTimeout (() => (console.log(1);). 0);console.log(2);New Promise ((resolve, reject )) = > (setTimeout(() => (reject(console.log(3));). 1000);)).catch(() => (console.log(4);));console.log(5);What is logged to the console?",
      options: ["A. 2 5 1 3 4", "B. 1 2 4 3 5", "C. 1 2 5 3 4", "D. 2 1 4 3 5"],
      answer: "A",
      title: "Question 31",
    },
    {
      content:
        'A developer writes the code below to return a message to a user attempting to register a new username. If the username is available, a variable named nag is declared and assigned a value on line 03. What is the value of msg when getAvailableabilityMessage ("newUserName") is executed and get Availability ("newUserName") returns true?',
      options: [
        'A. "User-name available"',
        "B. undefined",
        'C. "msg is not defined"',
        'D. "newUserName"',
      ],
      answer: "A",
      title: "Question 32",
    },
    {
      content:
        "Refer to the code below:Considering that JavaScript is single-threaded, what is the output of line 08 after the code executes?",
      options: ["A. 11", "B. 13", "C. 10", "D. 12"],
      answer: "A",
      title: "Question 33",
    },
    {
      content:
        "myArraym can have one level, two levels, or more levels. Which statement flattens myArray when it can be arbitrarily nested?",
      options: [
        "A. myArray.flat(Infinity);",
        "B. [ ] .concat {. . .myArray) ;",
        "C. myArray. reduce ((prev, curr) => prev.concat(curr) [ ]);",
        'D. myArray. join (","). split (",");',
      ],
      answer: "C",
      title: "Question 34",
    },
    {
      content:
        "Refer to the code below:Which replacement for the conditional statement on line 02 allows a developer to correctly determine that a specific element, myElement on the page had been clicked?",
      options: ["A. event.target.id =='myElement'"],
      answer: "A",
      title: "Question 35",
    },
    {
      content:
        "Given the expressions var1 and var2, what are two valid ways to return the concatenation of the two expressions and ensure it is string? Choose 2 answers",
      options: [
        "A. var1 + var2",
        "B. var1.toString ( ) var2.toString ( )",
        "C. string.concat (var1 +var2)",
        "D. String (var1) .concat (var2)",
      ],
      answer: "B,C",
      title: "Question 36",
    },
    {
      content:
        "Refer to the following array:Let arr1 = [ 1, 2, 3, 4, 5 ];Which two lines of code result in a second array, arr2 being created such that arr2 is not a reference to arr1?",
      options: [
        "A. Let arr2 = arr1.sort();",
        "B. Let arr2 = arr1.slice(0, 5);",
        "C. Let arr2 = Array.from(arr1);",
        "D. Let arr2 = arr1;",
      ],
      answer: "B,C",
      title: "Question 37",
    },
    {
      content:
        "A developer is leading the creation of a new browser application that will serve a single page application. The team wants to use a new web framework Minimalsit.js. The Lead developer wants to advocate for a more seasoned web framework that already has a community around it. Which two frameworks should the lead developer advocate for? Choose 2 answers",
      options: ["A. Angular", "B. Koa", "C. Vue", "D. Express"],
      answer: "A,D",
      title: "Question 38",
    },
    {
      content:
        'Refer to the code below:function changeValue(param) {Param =5;}Let a =10;Let b =5;changeValue(b);Const result = a+ " - "+ b;What is the value of result when code executes?',
      options: ["A. 10 -10", "B. 10 - 5", "C. 5 -5", "D. 5 - 10"],
      answer: "A",
      title: "Question 39",
    },
    {
      content:
        "Given the JavaScript below:01 function filterDOM (searchString) {02 const parsedSearchString = searchString && searchString.toLowerCase() ;03 document.quesrySelectorAll(' .account' ) . forEach(account => (04 const accountName = account.innerHTML.toLOwerCase();05 account. Style.display = accountName.includes(parsedSearchString) ? /*Insert code*/;06 )};07 }Which code should replace the placeholder comment on line 05 to hide accounts that do not match the search string?",
      options: [
        "A. ' name ' : ' block '",
        "B. ' visible ' : ' hidden '",
        "C. ' hidden ' : ' visible '",
        "D. ' Block ' : ' none '",
      ],
      answer: "D",
      title: "Question 40",
    },
    {
      content:
        "Refer to the code below:for(let number =2 ; number <= 5 ; number += 1 ) {// insert code statement here}The developer needs to insert a code statement in the location shown. The code statement has these requirements:1. Does require an import2. Logs an error when the boolean statement evaluates to false3. Works in both the browser and Node.jsWhich meet the requirements?",
      options: [
        "A. console.debug(number % 2 === 0);",
        "B. assert (number % 2 === 0);",
        "C. console.error(number % 2 === 0);",
        "D. console.assert(number % 2 === 0);",
      ],
      answer: "C",
      title: "Question 41",
    },
    {
      content:
        "Refer to the code below:Async funct on functionUnderTest(isOK) {If (isOK) return 'OK' ;Throw new Error('not OK');)Which assertion accurately tests the above code?",
      options: [
        "A. Console.assert (await functionUnderTest(true), 'OK')",
        "B. Console.assert (await functionUnderTest(true), ' not OK ')",
        "C. Console.assert (await functionUnderTest(true), ' not OK ') ",
        "D. Console.assert (await functionUnderTest(true), ' OK ')",
      ],
      answer: "A",
      title: "Question 42",
    },
    {
      content:
        "Refer to the code below:Which value can a developer expect when referencing country,capital,cityString?",
      options: ["A. undefined", "B. An error", "C. 'London'", "D. 'NaN'"],
      answer: "D",
      title: "Question 43",
    },
    {
      content:
        'A developer has the function, shown below, that is called when a page loads.function onload() {console.log("Page has loaded!");}Where can the developer see the log statement after loading the page in the browser?',
      options: [
        "A. Browser performance toots",
        "B. Terminal running the web server.",
        "C. Browser javaScript console",
        "D. On the webpage.",
      ],
      answer: "C",
      title: "Question 44",
    },
    {
      content:
        "Refer to code below:function Person() {this.firstName = 'John';}Person.prototype ={Job: x => 'Developer'};const myFather = new Person();const result =myFather.firstName + ' ' + myFather.job();What is the value of the result after line 10 executes?",
      options: [
        "A. John Developer",
        "B. Error: myFather.job is not a function",
        "C. Undefined Developer",
        "D. John undefined",
      ],
      answer: "A",
      title: "Question 45",
    },
    {
      content:
        "Refer to the string below.Const str='Salesforce';Which two statements results in the word 'Sales'?",
      options: [],
      answer: "  Str.substring(0,5); Str.substr(0,5); ",
      title: "Question 46",
    },
    {
      content:
        "Refer to the code below:Const searchTest = 'Yay! Salesforce is amazing!\" ;Let result1 = searchText.search(/sales/i);Let result 21 = searchText.search(/sales/i);console.log(result1);console.log(result2);After running this code, which result is displayed on the console?",
      options: [
        "A. > true > false",
        "B. > 5 > undefined",
        "C. > 5 > -1",
        "D. > 5 > 0",
      ],
      answer: "B ",
      title: "Question 47",
    },
    {
      content:
        "Refer to the following code:Which statement should be added to line 09 for the code to display 'The boat has a capacity of 10 people?",
      options: [
        "A. super.size = size;",
        "B. this.size = size;",
        "C. ship.size size;",
        "D. super (size);",
      ],
      answer: "B",
      title: "Question 48",
    },
    {
      content:
        "A developer wants to set up a secure web server with Node.js. The developer creates a directory locally called app-server, and the first file is app-server/index.js Without using any third-party libraries, what should the developer add to index.js to create the secure web server?",
      options: [
        "A. const server =require('secure-server');",
        "B. const https =require('https');",
        "C. const tls = require('tls');",
        "D. const http =require('http');",
      ],
      answer: "B",
      title: "Question 49",
    },
    {
      content:
        "A developer at Universal Containers is creating their new landing page based on HTML, CSS, and JavaScript. The website includes multiple external resources that are loaded when the page is opened.To ensure that visitors have a good experience, a script named personalizeWebsiteContent needs to be executed when the webpage Is loaded and there Is no need to wait for the resources to be available. Which statement should be used to call personalizeWebsiteContent based on the above business requirement?",
      options: [
        "A. windows,addEventListener('load', personalizeWebsiteContent);",
        "B. windows,addEventListener('DOMContent Loaded ', personalizeWebsiteContent);",
        "C. windows,addEventListener('onload', personalizeWebsiteContent);",
        "D. windows,addEventListener('onDOMCContentLoaded', personalizeWebsiteContent);",
      ],
      answer: "A",
      title: "Question 50",
    },
    {
      content:
        "Which three browser specific APIs are available for developers to persist data between page loads ? Choose 3 answers",
      options: [
        "A. Global variables",
        "B. Cookies",
        "C. indexedDB",
        "D. IIFEs",
        "E. localStorage.",
      ],
      answer: "C,D,E",
      title: "Question 51",
    },
    {
      content:
        "Which code statement below correctly persists an objects in local Storage ?",
      options: [
        "A. const setLocalStorage = (storageKey, jsObject) => {window.localStorage.setItem(storageKey, JSON.stringify(jsObject));}",
        "B. const setLocalStorage = ( jsObject) => {window.localStorage.connectObject(jsObject));}",
        "C. const setLocalStorage = ( jsObject) => {window.localStorage.setItem(jsObject);}",
        "D. const setLocalStorage = (storageKey, jsObject) => {window.localStorage.persist(storageKey, jsObject);}",
      ],
      answer: "A ",
      title: "Question 52",
    },
    {
      content:
        "Given the following code:What will be the first four numbers logged?",
      options: ["A. 0123", "B. 0112", "C. 0122", "D. 0012"],
      answer: "B",
      title: "Question 53",
    },
    {
      content:
        "Given the code below:const delay = async delay =>{return new Promise((resolve,reject)=>{console.log(1);setTimeout(resolve,deleay);});};const callDelay = async ()=>{console.log(2);const yup = await delay(1000);console.log(3);}console.log(4);callDelay();console.log(5);What is logged to the console?",
      options: ["A. 4 2 1 5 3"],
      answer: "A",
      title: "Question 54",
    },
    {
      content:
        "Which three actions can be using the JavaScript browser console? Choose 3 answers:",
      options: [
        "A. Run code that is not related to page.",
        "B. view , change, and debug the JavaScript code of the page.",
        "C. View and change DOM the page.",
        "D. Display a report showing the performance of a page.",
        "E. View and change security cookies.",
      ],
      answer: "A,B,C",
      title: "Question 55",
    },
    {
      content:
        "Why would a developer specify a package.jason as a developed forge instead of a dependency ?",
      options: [
        "A. It is required by the application in production.",
        "B. It should be bundled when the package is published.",
        "C. It is only needed for local development and testing.",
        "D. Other required packages depend on it for development.",
      ],
      answer: "C",
      title: "Question 56",
    },
    {
      content:
        "Refer to code below:Let productSKU = '8675309' ;A developer has a requirement to generate SKU numbers that are always 19 characters lon, starting with 'sku', and padded with zeros. Which statement assigns the values sku0000000008675309 ?",
      options: [
        "A. productSKU = productSKU .padStart (19. '0').padstart('sku');",
        "B. productSKU = productSKU .padEnd (16. '0').padstart(19, 'sku');",
        "C. productSKU = productSKU .padStart (16. '0').padstart(19, 'sku');",
        "D. productSKU = productSKU .padEnd (16. '0').padstart('sku');",
      ],
      answer: "C",
      title: "Question 57",
    },
    {
      content:
        "Which three actions can be using the JavaScript browser console? Choose 3 answers:",
      options: [
        "A. Run code that is not related to page.",
        "B. view , change, and debug the JavaScript code of the page.",
        "C. View and change security cookies.",
        "D. Display a report showing the performance of a page.",
        "E. View and change DOM the page.",
      ],
      answer: "A,B,E",
      title: "Question 58",
    },
    {
      content:
        "Refer to the following code block:class Animal{constructor(name){this.name = name;}makeSound(){console.log(`${this.name} is making a sound.`)}}class Dog extends Animal{constructor(name){super(name)this.name = name;}makeSound(){console.log(`${this.name} is barking.`)}}let myDog = new Dog('Puppy');myDog.makeSound();What is the console output?",
      options: ["A. Puppy is barking"],
      answer: "A",
      title: "Question 59",
    },
    {
      content:
        "Refer to the following object. How can a developer access the fullName property for dog?",
      options: [
        "A. Dog.fullName ( )",
        "B. Dog, get, fullName",
        "C. Dog.fullName",
        "D. Dog, function, fullName",
      ],
      answer: "C",
      title: "Question 60",
    },
    {
      content:
        "A team that works on a big project uses npm to deal with projects dependencies.A developer added a dependency does not get downloaded when they execute npm install. Which two reasons could be possible explanations for this? Choose 2 answers",
      options: [
        "A. The developer added the dependency as a dev dependency, and NODE_ENV is set to production.",
        "B. The developer missed the option --add when adding the dependency.",
        "C. The developer missed the option --save when adding the dependency.",
        "D. The developer added the dependency as a dev dependency, and NODE_ENV Is set to production.",
      ],
      answer: "A,C,D",
      title: "Question 61",
    },
    {
      content:
        "Refer to the code below:<html lang=\"en\"><table onclick=\"console.log(Table log');\"><tr id=\"row1\"><td>Click me!</td></tr><table><script>function printMessage(event) {console.log('Row log');}Let elem = document.getElementById('row1');elem.addEventListener('click', printMessage, false);</script></html>Which code change should be made for the console to log only Row log when 'Click me! ' is clicked?",
      options: [
        "A. Add.event.stopPropagation(); to window.onLoad event handler.",
        "B. Add event.stopPropagation(); to printMessage function.",
        "C. Add event.removeEventListener(); toprintMessage function.",
        "D. Add event.removeEventListener(); to window.onLoad event handler.",
      ],
      answer: "B",
      title: "Question 62",
    },
    {
      content:
        "Which code change should be done for the console to log the following when 'Click me!' is clicked'> Row log> Table log",
      options: [
        "A. Change line 10 to event.stopPropagation (false) ;",
        "B. Change line 14 to elem.addEventListener ('click', printMessage, true);",
        "C. Remove lines 13 and 14",
        "D. Remove line 10",
      ],
      answer: "A",
      title: "Question 63",
    },
    {
      content:
        "Given the following code:let x = null;console.log(typeof x);What is the output?",
      options: ['A. "null"', 'B. "x"', 'C. "object"', 'D. "undefined"'],
      answer: "C",
      title: "Question 64",
    },
    {
      content:
        "A developer creates a generic function to log custom messages in the console. To do this, the function below is implemented.01 function logStatus(status){02 console./*Answer goes here*/{'Item status is: %s', status};03 }Which three console logging methods allow the use of string substitution in line 02?",
      options: ["A. Assert", "B. Error", "C. Info", "D. Message", "E. Log"],
      answer: "B,C,E",
      title: "Question 65",
    },
    {
      content:
        "Refer to the code below:01 const server = require('server');02 /* Insert code here */A developer imports a library that creates a web server. The imported library uses events and callbacks to start the servers Which code should be inserted at the line 03 to set up an event and start the web server ?",
      options: [
        "A. Server.start ();",
        "B. console.log( 'Listening on ', port) ;",
        "C. server.on(' connect ' , ( port) => {console.log('Listening on ' , port) ;})",
        "D. server()",
        "E. serve(( port) => (",
      ],
      answer: "C",
      title: "Question 66",
    },
    {
      content:
        "Given the HTML below:Which statement adds the priority-account CSS class to the Universal Containers row?",
      options: [
        "A. document. getElementByid('row-uc').addClass('priority-account*);",
        "B. document. queryselector('#row-uc').ClassList.add('priority-account');",
        "C. document. querySelectorAll('#row-uc') -classList.add(\"priority-accour');",
        "D. document. querySelector (#row-uc'). classes-push('priority-account');",
      ],
      answer: "B",
      title: "Question 67",
    },
    {
      content:
        "Refer to the following object:const cat ={firstName: 'Fancy',lastName: ' Whiskers',Get fullName() {return this.firstName + ' ' + this.lastName;}};How can a developer access the fullName property for cat?",
      options: [
        "A. cat.function.fullName()",
        "B. cat.get.fullName",
        "C. cat.fullName",
        "D. cat.fullName()",
      ],
      answer: "C",
      title: "Question 68",
    },
    {
      content:
        "Given the following code, what is the value of x?let x = '15' + (10 * 2);",
      options: ["A. 1520", "B. 50", "C. 35", "D. 3020"],
      answer: "A",
      title: "Question 69",
    },
    {
      content:
        "Refer to the code below:let sayHello = () => {console.log ('Hello, world!');};Which code executes sayHello once, two minutes from now?",
      options: [
        "A. delay(sayHello, 12000);",
        "B. setInterval(sayHello, 12000);",
        "C. setTimeout(sayHello, 12000);",
        "D. setTimeout(sayHello(), 12000);",
      ],
      answer: "C",
      title: "Question 70",
    },
  ],
});
