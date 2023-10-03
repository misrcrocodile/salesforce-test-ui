window.testContent = window.testContent || [];
var testId = "Salesforce.JsDevI";
var testName = "Salesforce.JsDevI";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "Salesforce.JsDevI.v2022-05-18.q146",
  content: [
    {
      content:
        "Refer to the code below:What is the value of result when the code executes?",
      options: ["A. 5 - 10", "B. 5 - 5", "C. 10 - 5", "D. 10 - 10"],
      answer: "D",
      title: "Question 1",
    },
    {
      content:
        "A developer is wondering whether to use, promise, then or provise, catch especially when a promise throws an error. Which two promises are rejected? Choose 2 answers",
      options: [
        "A. New Promise((resolve, reject) => ( throw 'Cool error here')) .catch (error => console (error ));",
        "B. Promise , reject ('Cool error here ') , catch (error => console ,error (error));",
        "C. New promise (() => (throw 'Cool error here ')) , then ((null, error => console, (error)));",
        "D. Promise, rejected (Cool error here'), then (error => console (error ));",
      ],
      answer: "A,C",
      title: "Question 2",
    },
    {
      content:
        "Refer to the code below:Which two statements correctly execute the runparallel () function? Choose 2 answers",
      options: [
        "A. runParralel () . then (data );",
        "B. runParallel () , then (function ) (date) { } 0;",
        "C. runParallel () , done (function ( data)(return data; }};",
        "D. Async runParalled (). Then (data) :",
      ],
      answer: "B,D",
      title: "Question 3",
    },
    {
      content:
        "Refer to the code below:After running this code, which result is displayed on the console?",
      options: [
        "A. > 5> Undefined",
        "B. > 5> 0",
        "C. > 5>- 1",
        "D. > True> False",
      ],
      answer: "C",
      title: "Question 4",
    },
    {
      content:
        'A developer wants to iterate through an array of objects and count the objects and countthe objects whose property value, name, starts with the letter N.Const arrObj = [{"name" : "Zach"} , {"name" : "Kate"},{"name" : "Alise"},{"name" : "Bob"},{"name" :"Natham"},{"name" : "nathaniel"}Refer to the code snippet below:01 arrObj.reduce(( acc, curr) => {02 //missing line 0202 //missing line 0304 ). 0);Which missing lines 02 and 03 return the correct count?',
      options: [
        "A. Const sum = curr.name.startsWIth('N') ? 1: 0;Return curr+ sum",
        "B. Const sum = curr.startsWith('N') ? 1: 0;Return acc +sum",
        "C. Const sum = curr.startsWIth('N') ? 1: 0;Return curr+ sum",
        "D. Const sum = curr.name.startsWith('N') ? 1: 0;Return acc +sum",
      ],
      answer: "D",
      title: "Question 5",
    },
    {
      content:
        "Considering the implications of 'use strict' on line 04, which three statements describe the execution of the code? Choose 3 answers",
      options: [
        "A. 'use strict' is hoisted, so it has an effect on all lines.",
        "B. Line 05 throws an error.",
        "C. 'use strict' has an effect only on line 05.",
        "D. 'use strict' has an effect between line 04 and the end of the file.",
        "E. z is equal to 3.14.",
      ],
      answer: "B,C,E",
      title: "Question 6",
    },
    {
      content:
        'Refer to the code below:let o = {get js() {let city1 = String("st. Louis");let city2 = String(" New York");return {firstCity: city1.toLowerCase(),secondCity: city2.toLowerCase(),}}}What value can a developer expect when referencing o.js.secondCity?',
      options: [
        "A. Undefined",
        "B. An error",
        "C. ' New York '",
        "D. ' new york '",
      ],
      answer: "D",
      title: "Question 7",
    },
    {
      content:
        "Refer to the code below:What is the value of result when the code executes?",
      options: ["A. 10-5", "B. 5-10", "C. 5-5", "D. 10-10"],
      answer: "D",
      title: "Question 8",
    },
    {
      content:
        'A developer creates a simple webpage with an input field. When a user enters text in the input field and clicks the button, the actual value of the field must be displayed in the console.Here is the HTML file content:<input type =" text" value="Hello" name ="input"><button type ="button" >Display </button> The developer wrote the javascript code below:Const button = document.querySelector(\'button\');button.addEvenListener(\'click\', () => (Const input = document.querySelector(\'input\');console.log(input.getAttribute(\'value\'));When the user clicks the button, the output is always "Hello". What needs to be done to make this code work as expected?',
      options: [
        'A. Replace line 02 with button.addEventListener("onclick", function() {',
        "B. Replace line 04 with console.log(input .value);",
        'C. Replace line 02 with button.addCallback("click", function() {',
        "D. Replace line 03 with const input = document.getElementByName('input');",
      ],
      answer: "B",
      title: "Question 9",
    },
    {
      content:
        "Refer to the code snippet below:Let array = [1, 2, 3, 4, 4, 5, 4, 4];For (let i =0; i < array.length; i++)if (array[i] === 4) {array.splice(i, 1);}}What is the value of array after the code executes?",
      options: [
        "A. [1, 2, 3, 4, 5, 4, 4]",
        "B. [1, 2, 3, 4, 4, 5, 4]",
        "C. [1, 2, 3, 5]",
        "D. [1, 2, 3, 4, 5, 4]",
      ],
      answer: "B ",
      title: "Question 10",
    },
    {
      content:
        "A developer wants to create an object from a function in the browser using the code below. What happens due to lack of the new keyword on line 02?",
      options: [
        "A. Window. n is assigned the correct object.",
        "B. The a variable is assigned the correct object.",
        "C. Window. === name is assigned to ''hello'' and the variable a n remain undefined.",
        "D. The n variable is assigned the correct object but this- remains undefined.",
      ],
      answer: "C",
      title: "Question 11",
    },
    {
      content:
        "Refer to the following code:Which two statements could be inserted at line 17 to enable the function call on line 18? Choose 2 answers",
      options: [
        "A. 1eo.prototype.roar = ( ) => ( console.log (They\\'re pretty good1'); );",
        "B. 1eo.roar = () => 9 (console.log('They\\'re pretty good1'); 1;",
        "C. Object.assign, assign( 1eo, trigger);",
        "D. Object,assign(1eo, tony) ;",
      ],
      answer: "B,D",
      title: "Question 12",
    },
    {
      content:
        "Why would a developer specify a package as the package.json as a deDepdelivery instead of a depdelivery?",
      options: [
        "A. Other required packages depended on it for development.",
        "B. It should be bundled when the package is published.",
        "C. It is required by the application in production.",
        "D. It is only needed for local development and testing.",
      ],
      answer: "D",
      title: "Question 13",
    },
    {
      content:
        'Refer to the code below:01 let car1 = new promise((_, reject) =>02 setTimeout(reject, 2000, "Car 1 crashed in"));03 let car2 = new Promise(resolve => setTimeout(resolve, 1500, "Car 2completed"));04 let car3 = new Promise(resolve => setTimeout (resolve, 3000, "Car 3Completed"));05 Promise.race([car1, car2, car3])06 .then(value => (07 let result = $(value) the race. `;08 ))09 .catch( arr => (10 console.log("Race is cancelled.", err);11 ));What is the value of result when Promise.race executes?',
      options: [
        "A. Car 1 crashed in the race.",
        "B. Race is cancelled.",
        "C. Car 3 completed the race.",
        "D. Car 2 completed the race.",
      ],
      answer: "D",
      title: "Question 14",
    },
    {
      content:
        "Universal Container(UC) just launched a new landing page, but users complain that thewebsite is slow. A developer found some functions that cause this problem. To verify this, thedeveloper decides to do everything and log the time each of these three suspicious functionsconsumes.console.time('Performance');maybeAHeavyFunction();thisCouldTakeTooLong();orMaybeThisOne();console.endTime('Performance');Which function can the developer use to obtain the time spent by every one of the threefunctions?",
      options: [
        "A. console.trace()",
        "B. console.timeStamp()",
        "C. console.getTime()",
        "D. console.timeLog()",
      ],
      answer: "D",
      title: "Question 15",
    },
    {
      content:
        "Given the following code:What is the logged by the first four log statements?",
      options: ["A. 0 1 2 2", "B. 0 1 1 2", "C. 0 0 1 2", "D. 0 1 2 3"],
      answer: "B",
      title: "Question 16",
    },
    {
      content:
        "A developer creates a class that represents a blog post based on the requirement that aPost should have a body author and view count. The Code shown Below:Class Post {// Insert code hereThis.body =bodyThis.author = author;this.viewCount = viewCount;}}Which statement should be inserted in the placeholder on line 02 to allow for a variable to be setto a new instanceof a Post with the three attributes correctly populated?",
      options: [
        "A. Function Post (body, author, viewCount) {",
        "B. constructor() {",
        "C. constructor (body, author, viewCount) {",
        "D. super (body, author, viewCount) {",
      ],
      answer: "C",
      title: "Question 17",
    },
    {
      content:
        "Refer to the code below:Async funct on functionUnderTest(isOK) {If (isOK) return 'OK' ;Throw new Error('not OK');)Which assertion accuretely tests the above code?",
      options: [
        "A. Console.assert (await functionUnderTest(true), ' not OK ') ",
        "B. Console.assert (await functionUnderTest(true), 'OK')",
        "C. Console.assert (await functionUnderTest(true), ' OK ')",
        "D. Console.assert (await functionUnderTest(true), ' not OK ')",
      ],
      answer: "B",
      title: "Question 18",
    },
    {
      content:
        'developer removes the HTML class attribute from the checkout button, so now it issimply:<button>Checkout</button>. There is a test to verify the existence of the checkout button, however it looks for a button withclass= "blue". The test fails because no such button is found. Which type of test category describes this test?',
      options: [
        "A. False positive",
        "B. True positive",
        "C. True negative",
        "D. False negative",
      ],
      answer: "D",
      title: "Question 19",
    },
    {
      content:
        "Which statement can a developer apply to increment the browser's navigation history without a page refresh?Which statement can a developer apply to increment the browser's navigation history without a page refresh?",
      options: [
        "A. window.history.pushStare(newStateObject, ' ', null);",
        "B. window.history.replaceState(newStateObject,' ', null);",
        "C. window.history.pushState(newStateObject);",
        "D. window.history.state.push(newStateObject);",
      ],
      answer: "B",
      title: "Question 20",
    },
    {
      content:
        "Refer to the code below:Which assertion accurately tests the above code?",
      options: [
        "A. Console, assert ( await functionalUnderTest (true) , 'not ok' )",
        "B. Console, assert ( await functionalUnderTest (true) , 'ok",
        "C. Console, assert (functionalUnderTest (true) , 'ok')",
        "D. Console, assert ( await functionalUnderTest (true) , 'not ok) )",
      ],
      answer: "C",
      title: "Question 21",
    },
    {
      content:
        "Refer to the following code:What is returned by the function call on line 13?",
      options: [
        "A. Null value",
        "B. Undefined value.",
        "C. Undefined",
        "D. Line 13 throws an error.",
      ],
      answer: "D",
      title: "Question 22",
    },
    {
      content:
        "The developer wants to test the array shown:const arr = Array(5).fill(0)Which two tests are the most accurate for this array ? Choose 2 answers:",
      options: [
        "A. console.assert (arr.length >0);",
        "B. console.assert( arr.length === 5 );",
        "C. console.assert(arr[0] === 0 && arr[ arr.length] === 0);",
        "D. arr.forEach(elem => console.assert(elem === 0)) ;",
      ],
      answer: "B,D",
      title: "Question 23",
    },
    {
      content:
        "Refer to the code below:A developer needs to dispatch a custom event called update to send information about recordId. Which two options could a developer insert at the placeholder in line 02 to achieve this? Choose 2 answers",
      options: [
        "A. 'update' , '123abc'",
        "B. {type ; update ', recordId : '123abc')",
        "C. 'update', {Detail ; {recordId, '123abc))",
        "D. 'update', ( recordId ; 123abc')",
      ],
      answer: "C,D",
      title: "Question 24",
    },
    {
      content:
        'A developer creates a simple webpage with an input field. When a user enters text in the input field and clicks the button, the actual value of the field must be displayed in the console.Here is the HTML file content:<input type =" text" value="Hello" name ="input"><button type ="button" >Display </button>The developer wrote the javascript code below:Const button = document.querySelector(\'button\');button.addEvenListener(\'click\', () => (Const input = document.querySelector(\'input\');console.log(input.getAttribute(\'value\'));When the user clicks the button, the output is always "Hello". What needs to be done make this code work as expected?',
      options: [
        'A. Replace line 02 with button.addCallback("click", function() {',
        "B. Replace line 04 with console.log(input .value);",
        'C. Replace line 02 with button.addEventListener("onclick", function() {',
        "D. Replace line 03 with const input = document.getElementByName('input');",
      ],
      answer: "B",
      title: "Question 25",
    },
    {
      content: "Which option is a core Node;js module?",
      options: ["A. locale", "B. Path", "C. Ios", "D. Memory"],
      answer: "B,C",
      title: "Question 26",
    },
    {
      content:
        "Given the requirement to refactor the code above to JavaScript class format, which class definition is correct?A)B)C)D)",
      options: ["A. Option B", "B. Option D", "C. Option C", "D. Option A"],
      answer: "D",
      title: "Question 27",
    },
    {
      content: "Which two console logs output NaN? Choose 2 answers | |",
      options: [
        "A. console.log(parseInt ' (\"two')) ;",
        "B. console.log(10 / Number('5) ) ;",
        "C. console.log(10 / 0);",
        "D. console.loeg(10 / 'five');",
      ],
      answer: "A,D",
      title: "Question 28",
    },
    {
      content:
        "Given the requirement to refactor the code above to JavaScript class format, which class definition is correct?A)B)C)D)",
      options: ["A. Option B", "B. Option D", "C. Option C", "D. Option A"],
      answer: "D",
      title: "Question 29",
    },
    {
      content:
        "Which statement accurately describes the behavior of the async /swait keywords?",
      options: [
        "A. The associated class contains some asynchronous functions.",
        "B. The associated function can only be called via asynchronous methods.",
        "C. The associated function sometimes returns a promise.",
        "D. The associated function will always return a promise.",
      ],
      answer: "D",
      title: "Question 30",
    },
    {
      content:
        "What are two unique feature of function defined with a fat arror as compared to normal functional definition? Choose 2 answers",
      options: [
        "A. The function uses the this from the enclosing scope.",
        "B. The function receives an argument that is always in scope, called parent this, which is the enclosing lexical scope",
        "C. If the function has a single expression in the function body, the expression will be evaluated and implicitly returned.",
        "D. The function generation its own this making it useful for separating the function's scope its enclosing scope",
      ],
      answer: "C",
      title: "Question 31",
    },
    {
      content: "Given the code below. What is logged to the console?",
      options: ["A. 231", "B. 123", "C. 213", "D. 132"],
      answer: "A",
      title: "Question 32",
    },
    {
      content:
        "At Universal Containers, every team has its own way of copying JavaScript objects. The code Snippet shows an implementation from one team:Function Person() {this.firstName = \"John\";this.lastName = 'Doe';This.name =() => (console.log('Hello $(this.firstName) $(this.firstName)');)}Const john = new Person ();Const dan = JSON.parse(JSON.stringify(john));dan.firstName ='Dan';dan.name();What is the Output of the code execution?",
      options: [
        "A. Hello John DOe",
        "B. Hello Dan Doe",
        "C. TypeError: dan.name is not a function",
        "D. TypeError: Assignment to constant variable.",
      ],
      answer: "C",
      title: "Question 33",
    },
    {
      content:
        "A developer wants to set up a secure web server with Node.js. The developer creates adirectory locally called app-server, and the first file is app-server/index.jsWithout using any third-party libraries, what should the developer add to index.js to create thesecure web server?",
      options: [
        "A. const https =require('https');",
        "B. const server =require('secure-server');",
        "C. const tls = require('tls');",
        "D. const http =require('http');",
      ],
      answer: "A",
      title: "Question 34",
    },
    {
      content:
        'A developer has two ways to write a function:Option A:function Monster() {This.growl = () => {Console.log ("Grr!");}}Option B:function Monster() {};Monster.prototype.growl =() => {console.log("Grr!");}After deciding on an option, the developer creates 1000 monster objects. How many growl methods are created with Option A Option B?',
      options: [
        "A. 1000 growl method is created for Option A. 1 growl methods are created for Option B.",
        "B. 1 growl method is created regardless of which option is used.",
        "C. 1000 growl methods are created regardless of which option is used.",
        "D. 1 growl method is created for Option A. 1000 growl methods are created for Option B.",
      ],
      answer: "A",
      title: "Question 35",
    },
    {
      content:
        "A developer is required to write a function that calculates the sum of elements in anarray but is getting undefined every time the code is executed. The developer needs to findwhat is missing in the code below.Const sumFunction = arr => {Return arr.reduce((result, current) => {//Result += current;//), 10););Which option makes the code work as expected?",
      options: [
        "A. Replace line 05 with return result;",
        "B. Replace line 03 with if(arr.length == 0 ) ( return 0; )",
        "C. Replace line 04 with result = result +current;",
        "D. Replace line 02 with return arr.map(( result, current) => (",
      ],
      answer: "A",
      title: "Question 36",
    },
    {
      content:
        'Refer to the code below:Let car1 = new Promise((_ , reject) =>setTimeout(reject, 2000, "car 1 crashed in" =>Let car2 =new Promise(resolve => setTimeout(resolve, 1500, "car 2 completed")Let car3 =new Promise(resolve => setTimeout(resolve, 3000, "car 3 completed")Promise.race(( car1, car2, car3)).then (value => (Let result = \'$(value) the race.\';)}.catch(arr => {console.log("Race is cancelled.", err);});What is the value of result when Promise.race executes?',
      options: [
        "A. Car 2 completed the race.",
        "B. Car 1 crashed in the race.",
        "C. Car 3 completes the race",
        "D. Race is cancelled.",
      ],
      answer: "A",
      title: "Question 37",
    },
    {
      content:
        "A developer wants to leverage a module to print a price in pretty format, and has imported a method as shown below:Import printPrice from '/path/PricePrettyPrint.js';Based on the code, what must be true about the printPrice function of the PricePrettyPrint module for this import to work ?",
      options: [
        "A. printPrice must be a multi exportc",
        "B. printPrice must be an all export",
        "C. printPrice must be the default export",
        "D. printPrice must be be a named export",
      ],
      answer: "C",
      title: "Question 38",
    },
    {
      content:
        "Given the following code:document.body.addEventListener(' click ', (event) => {if (/* CODE REPLACEMENT HERE */) {console.log('button clicked!');)});Which replacement for the conditional statement on line 02 allows a developer tocorrectly determine that a button on page is clicked?",
      options: [
        "A. e.nodeTarget ==this",
        "B. button.addEventListener('click')",
        "C. Event.clicked",
        "D. event.target.nodeName == 'BUTTON'",
      ],
      answer: "D",
      title: "Question 39",
    },
    {
      content:
        "A developer is trying to handle an error within a function. Which code segment shows the correct approach to handle an error without propagating it elsewhere?A)B)C)D)",
      options: ["A. Option B", "B. Option A", "C. Option C", "D. Option D"],
      answer: "D",
      title: "Question 40",
    },
    {
      content:
        "A developer wants to define a function log to be used a few times on a single-file JavaScript script.01 // Line 1 replacement02 console.log('\"LOG:', logInput);03 }Which two options can correctly replace line 01 and declare the function for use? Choose 2 answers",
      options: [
        "A. const log = (logInput) => {",
        "B. function log = (logInput) {",
        "C. function leg(logInput) {",
        "D. const log(loginInput) {",
      ],
      answer: "A,C",
      title: "Question 41",
    },
    {
      content:
        "A developer creates an object where its properties should be immutable and prevent properties from being added or modified. Which method should be used to execute this business requirement?",
      options: [
        "A. Object. filebase ( )",
        "B. Object. Lock ( )",
        "C. Object. real ( )",
        "D. Object const ( )",
      ],
      answer: "A",
      title: "Question 42",
    },
    {
      content:
        "A developer has code that calculates a restaurant bill, but generates incorrect answers while testing the code:function calculateBill ( items ) {let total = 0;total += findSubTotal(items);total += addTax(total);total += addTip(total);return total;}Which option allows the developer to step into each function execution within calculateBill?",
      options: [
        "A. Using the debugger command on line 05.",
        "B. Using the debugger command on line 03",
        "C. Wrapping findSubtotal in a console.log() method.",
        "D. Calling the console.trace (total) method on line 03.",
      ],
      answer: "A",
      title: "Question 43",
    },
    {
      content:
        "Refer to the code below:Const myFunction = arr => {Return arr.reduce((result, current) =>{Return result = current;}, 10};}What is the output of this function when called with an empty array ?",
      options: [
        "A. Throws an error",
        "B. Returns 0",
        "C. Returns 10",
        "D. Returns NaN",
      ],
      answer: "C",
      title: "Question 44",
    },
    {
      content:
        "Refer to the code below:What value can a developer expect when referencing o,js,secondCity?",
      options: ["A. 'new york'", "B. 'New York", "C. Undefined", "D. An error"],
      answer: "A",
      title: "Question 45",
    },
    {
      content:
        "Refer to the code below:What is the value of foobDienu1 after the code executes?",
      options: [
        "A. {'Pizza' , Burger' , French fries '}",
        "B. {'Pizza' , Burger' , French fries ' , garlic bread; }",
        "C. {'Garlic bread'}",
        "D. {'Garlic bread', Pizza' , Burger' , French fries'}",
      ],
      answer: "B",
      title: "Question 46",
    },
    {
      content:
        "A developer needs to debug a Node.js web server because a runtime error keeps occurring at one of the endpoints. The developer wants to test the endpoint on a local machine and make the request against a local server to look at the behavior. In the source code, the server, js file will start the server. the developer wants to debug the Node.js server only using the terminal. Which command can the developer use to open the CLI debugger in their current terminal window?",
      options: [
        "A. node start inspect server,js",
        "B. node inspect server,js",
        "C. node -i server.js",
        "D. node server,js inspect",
      ],
      answer: "B",
      title: "Question 47",
    },
    {
      content:
        "Refer to the following code block:What is the value of output after the code executes?",
      options: ["A. 16", "B. 25", "C. 36", "D. 11"],
      answer: "A",
      title: "Question 48",
    },
    {
      content:
        "A developer is setting up a new Node.js server with a client library that is built using events and callbacks. The library:* Will establish a web socket connection and handle receipt of messages to the server* Will be imported with require, and made available with a variable called we. The developer also wants to add error logging if a connection fails.Given this info, which code segment shows the correct way to set up a client with two events that listen at execution time?",
      options: [
        "A. ws.connect (( ) => {console.log('connected to client'); }).catch((error) => { console.log('ERROR' , error); }};",
        "B. ws.on ('connect', ( ) => {console.log('connected to client'); ws.on('error', (error) => { console.log('ERROR' , error); });});",
        "C. ws.on ('connect', ( ) => { console.log('connected to client'); }}; ws.on('error', (error) => { console.log('ERROR' , error); }};",
        "D. try{ws.connect (( ) => {console.log('connected to client'); });",
      ],
      answer: "C  } catch(error) { console.log('ERROR' , error); }; } ",
      title: "Question 49",
    },
    {
      content:
        "Refer to the code below:Which statement allows a developer to cancel the scheduled timed function?",
      options: [
        "A. ClearTimeout (timerId) ;",
        "B. removeTimeout (timeFunction) ;",
        "C. removeTimeout (timerId) ;",
        "D. ClearTimeout (timeFunction);",
      ],
      answer: "B",
      title: "Question 50",
    },
    {
      content:
        "A developer has an ErrorMandler module that contains multiple functions. What kind of export should be leveraged so that multiple function can be used?",
      options: ["A. Multi", "B. All", "C. default", "D. Named"],
      answer: "D",
      title: "Question 51",
    },
    {
      content:
        "Refer to the code below:What are the value of objBook and newObBook respectively?",
      options: [
        "A. ( author: ''Robert'', title JavaScript'' )( author: ''Robert'', title JavaScript'' )",
        "B. (author: ''Robert'' )(Author: ''Robert '', title: JavaScript'')",
        "C. ( Title: JavaScript'')( Title: JavaScript'')",
        "D. author: ''Robert title ''javaScript'' ) undefined",
      ],
      answer: "D",
      title: "Question 52",
    },
    {
      content:
        'is below:<input type="file" onchange="previewFile()"><img src="" height="200" alt="Image Preview..."/>The JavaScript portion is:01 function previewFile(){02 const preview = document.querySelector(\'img\');03 const file = document.querySelector(\'input[type=file]\').files[0];04 //line 4 code05 reader.addEventListener("load", () => {06 preview.src = reader.result;07 },false);08 //line 8 code09 }In lines 04 and 08, which code allows the user to select an image from their local computer , and to display the image in the browser?',
      options: [
        "A. 04 const reader = new FileReader();08 if (file) URL.createObjectURL(file);",
        "B. 04 const reader = new File();08 if (file) reader.readAsDataURL(file);",
        "C. 04 const reader = new File();08 if (file) URL.createObjectURL(file);",
        "D. 04 const reader = new FileReader();08 if (file) reader.readAsDataURL(file);",
      ],
      answer: "D",
      title: "Question 53",
    },
    {
      content:
        "A developer creates a class that represents a blog post based on the requirements that a Post should have a body, author, and view count. The code is shown below:Which statement should be inserted in the placeholder on line 02 to allow for a variable to be sent to a new instance of a port with the three attributes correctly populated?",
      options: [
        "A. Constructor ( ) (",
        "B. Function Post (body, author, viewCount) (",
        "C. Constructor (body, author, viewCount) (",
        "D. Super (body, author, viewCount) (",
      ],
      answer: "C",
      title: "Question 54",
    },
    {
      content:
        "Refer to the following code:What will the console when the button is clicked?",
      options: [
        "A. Inner message ",
        "B. Outer message ",
        "C. Outer message",
        "D. Inner message",
      ],
      answer: "B",
      title: "Question 55",
    },
    {
      content:
        "Refer to code below:Function muFunction(reassign){Let x = 1;var y = 1;if( reassign ) {Let x= 2;Var y = 2;console.log(x);console.log(y);}console.log(x);console.log(y);}What is displayed when myFunction(true) is called?",
      options: [
        "A. 2 2 2 2",
        "B. 2 2 1 1",
        "C. 2 2 undefined undefined",
        "D. 2 2 1 2",
      ],
      answer: "D",
      title: "Question 56",
    },
    {
      content:
        "Refer to the code below:function foo () {const a =2;function bat() {console.log(a);}return bar;}Why does the function bar have access to variable a ?",
      options: [
        "A. Inner function's scope",
        "B. Hoisting",
        "C. Outer function's scope",
        "D. Prototype chain",
      ],
      answer: "C",
      title: "Question 57",
    },
    {
      content:
        "Refer to the code below:Line 05 causes an error. What are the values of greeting and salutation once code completes?",
      options: [
        "A. Greeting is Hello and salutation is Hello, Hello.",
        "B. Greeting is Goodbye and salutation is Hello, Hello.",
        "C. Greeting is Goodbye and salutation is I say Hello.",
        "D. Greeting is Hello and salutation is I say hello.",
      ],
      answer: "A",
      title: "Question 58",
    },
    {
      content:
        "A developer wants to use a try...catch statement to catch any error that countSheep () may throw and pass it to a handleError () function. What is the correct implementation of the try...catch?A)B)C)D)",
      options: ["A. Option ", "B. Option ", "C. Option", "D. Option "],
      answer: "C",
      title: "Question 59",
    },
    {
      content:
        "Given the code below:Which method can be used to provide a visual representation of the list of users and to allow sorting by the name or email attribute?",
      options: [
        "A. console.group(usersList) ;",
        "B. console.table(usersList) ;",
        "C. console.groupCol lapsed (usersList) ;",
        "D. console.info(usersList) ;",
      ],
      answer: "A",
      title: "Question 60",
    },
    {
      content:
        "Refer to the code below:01 const exec = (item, delay) =>{02 new Promise(resolve => setTimeout( () => resolve(item), delay)),03 async function runParallel() {04 Const (result1, result2, result3) = await Promise.all{05 [exec ('x', '100') , exec('y', 500), exec('z', '100')]06 );07 return `parallel is done: $(result1) $(result2)$(result3)`;08 }}}Which two statements correctly execute the runParallel () function? Choose 2 answers",
      options: [
        "A. runParallel () .then(data);",
        "B. Async runParallel () .then(data);",
        "C. runParallel () .then(function(data)return data",
        "D. runParallel ( ). done(function(data){return data;});",
      ],
      answer: "C,D",
      title: "Question 61",
    },
    {
      content: "Given the following code:What is the output of line 02?",
      options: ["A. ''x''", "B. ''null''", "C. ''object''", "D. ''Undefined''"],
      answer: "C",
      title: "Question 62",
    },
    {
      content:
        "Refer to the code below:console.log(''start);Promise.resolve('Success') .then(function(value){console.log('Success');});console.log('End');What is the output after the code executes successfully?",
      options: [
        "A. StartEndSuccess",
        "B. EndStartSuccess",
        "C. SuccessStartEnd",
        "D. StartSuccessEnd",
      ],
      answer: "A",
      title: "Question 63",
    },
    {
      content:
        "Refer to the HTML below:<p> The current status of an order: < span> id='' status '> In progress < /span> < /p> Which JavaScript Statement changes the text 'In Progress' to Completed'?",
      options: [
        "A. Document, getElementById ('',status''), innerHTML = 'Completed' ;",
        "B. Document, getElementById (status'') , value = completed' ;",
        "C. Document, getElementById (''status''), innerHTML = 'Completed' ;",
        "D. Document, getElementById (''# status''), innerHTML = 'Completed' ;",
      ],
      answer: "C",
      title: "Question 64",
    },
    {
      content:
        "A developer is working on an ecommerce website where the delivery date is dynamically calculated based on the current day. The code line below is responsible for this calculation.Const deliveryDate = new Date ();Due to changes in the business requirements, the delivery date must now be today's date + 9 days. Which code meets this new requirement?",
      options: [
        "A. deliveryDate.setDate( Date.current () + 9);",
        "B. deliveryDate.setDate(( new Date ( )).getDate () +9);",
        "C. deliveryDate.date = Date.current () + 9;",
        "D. deliveryDate.date = new Date(+9) ;",
      ],
      answer: "B",
      title: "Question 65",
    },
    {
      content:
        "Refer to the code below:Async funct on functionUnderTest(isOK) {If (isOK) return 'OK' ;Throw new Error('not OK');)Which assertion accurately tests the above code?",
      options: [
        "A. Console.assert (await functionUnderTest(true), ' not OK ')",
        "B. Console.assert (await functionUnderTest(true), ' not OK ') ",
        "C. Console.assert (await functionUnderTest(true), ' OK ')",
        "D. Console.assert (await functionUnderTest(true), 'OK')",
      ],
      answer: "D",
      title: "Question 66",
    },
    {
      content:
        "Given the expressions var1 and var2, what are two valid ways to return the concatenation of the two expressions and ensure it is string? Choose 2 answers",
      options: [
        "A. string.concat (var1 +var2)",
        "B. String (var1) .concat (var2)",
        "C. var1.toString ( ) var2.toString ( )",
        "D. var1 + var2",
      ],
      answer: "A,C",
      title: "Question 67",
    },
    {
      content: "What is the result of the code block?",
      options: [
        "A. The console logs only 'flag'.",
        "B. The console logs 'flag' and another flag.",
        "C. The console logs 'flag' and then an error is thrown.",
        "D. An error is thrown.",
      ],
      answer: "C",
      title: "Question 68",
    },
    {
      content:
        "developer wants to use a module named universalContainersLib and them call functions from it. How should a developer import every function from the module and then call the fuctions foo and bar ?",
      options: [
        "A. import * ad lib from '/path/universalContainersLib.js';lib.foo();lib.bar();",
        "B. import * from '/path/universalContaineraLib.js';universalContainersLib.foo();universalContainersLib.bar();",
        "C. import (foo, bar) from '/path/universalContainersLib.js';foo();bar();",
        "D. import all from '/path/universalContaineraLib.js';universalContainersLib.foo();universalContainersLib.bar();",
      ],
      answer: "A",
      title: "Question 69",
    },
    {
      content:
        "Universal Containers (UC) notices that its application that allows users to search for accounts makes a network request each time a key is pressed. This results in too many requests for the server to handle.* Address this problem, UC decides to implement a debounce function on string change handler. What are three key steps to implement this debounce function? Choose 3 answers:",
      options: [
        "A. Ensure that the network request has the property debounce set to true.",
        "B. Store the timeId of the setTimeout last enqueued by the search string change handle.",
        "C. If there is an existing setTimeout and the search string change, allow the existing setTimeout to finish, and do not enqueue a new setTimeout.",
        "D. If there is an existing setTimeout and the search string changes, cancel the existing setTimeout using the persisted timerId and replace it with a new setTimeout.",
        "E. When the search string changes, enqueue the request within a setTimeout.",
      ],
      answer: "A,C,E",
      title: "Question 70",
    },
    {
      content:
        "A developer wrote the following code:01 let X = object.value;0203 try {04 handleObjectValue(X);05 } catch (error) {06 handleError(error);07 }The developer has a getNextValue function to execute after handleObjectValue(), butdoes not want to execute getNextValue() if an error occurs. How can the developer change the code to ensure this behavior?",
      options: [
        "A. 03 try {04 handleObjectValue(x)05 ........................",
        "B. 03 try{04 handleObjectValue(x);05 } catch(error){06 handleError(error);07 } finally {08 getNextValue();10 }",
        "C. 03 try{04 handleObjectValue(x);05 } catch(error){06 handleError(error);07 } then {08 getNextValue();09 }",
        "D. 03 try{04 handleObjectValue(x);05 } catch(error){06 handleError(error);07 }08 getNextValue();",
      ],
      answer: "A",
      title: "Question 71",
    },
    {
      content:
        "A developer implements a function that adds a few values. Which three options can the developer invoke for this function to get a return vale of 10? Choose 3 answers",
      options: [
        "A. Sum (5) (5)",
        "B. Sum (10) ()",
        "C. Sum () (10)",
        "D. Sum (5, 5) ()",
        "E. Sum () (5, 5)",
      ],
      answer: "A,C,E",
      title: "Question 72",
    },
    {
      content:
        "A developer creates a generic function to log custom messages In the console. To do this, the function below is implemented. Which three console logging methods allow the use of string substitution in line 02? Choose 3 answers",
      options: ["A. error", "B. Info", "C. Message", "D. Assert", "E. Log"],
      answer: "A,C,D",
      title: "Question 73",
    },
    {
      content:
        "A developer has a formatName function that takes two arguments, firstName and lastName and returns a string. They want to schedule the function to run once after five seconds. What is the correct syntax to schedule this function?",
      options: [
        "A. setTimeout ('formatName', 5000, 'John\", \"Doe');",
        'B. setTimeout (formatName(), 5000, "John", "BDoe");',
        "C. setTimout(() => { formatName(\"John', 'Doe') }, 5000);",
        "D. setTimeout (formatName('John', ''Doe'), 5000);",
      ],
      answer: "A",
      title: "Question 74",
    },
    {
      content:
        "Refer to the following code that imports a module named Utills,Which two implementations of Utill, je export foo and bar such that the code above runs without error? Choose 2 answers",
      options: [
        "A. Const foo = ( ) => ( return 'foo; ; )Const bar => => { return 'bar ';}Export default foo, bar;",
        "B. //FooUtill.js and barUtils, js existImport (foo) from ,/Path/footUtils.js,:Export (foo, bar)",
        "C. Const foo = () => ( return 'foo ' ; )Const bar => ( return 'bar' ; )Export (foo, bar)",
        "D. Export default class (Foo ( ) ( return 'foo ,; )Bar ( ) ( return ;bar ; )",
      ],
      answer: "D",
      title: "Question 75",
    },
    {
      content:
        "Which statement can a developer apply to increment the browser's navigation history without a page refesh?",
      options: [
        "A. Window.history,state,push.(newStateObject, ' ' null;",
        "B. Window.history,state,push.(newStateObject);",
        "C. Window.history,pushState.(newStateObject, ' ', null)) ;",
        "D. Window.history,pushState.(newStateObject);",
      ],
      answer: "A",
      title: "Question 76",
    },
    {
      content:
        "Given the requirement to refactor the code above to JavaScript class format, which class definition is correct?",
      options: ["A. ", "B. ", "C. ", "D. "],
      answer: "C",
      title: "Question 77",
    },
    {
      content:
        'A developer uses a parsed JSON string to work with user information as in the block below:01 const userInformation ={02 " id " : "user-01",03 "email" : "[email protected]",04 "age" : 25Which two options access the email attribute in the object? Choose 2 answers',
      options: [
        "A. userInformation(email)",
        'B. userInformation("email")',
        'C. userInformation.get("email")',
        "D. userInformation.email",
      ],
      answer: "B,D",
      title: "Question 78",
    },
    {
      content:
        "A developer creates a generic function to log custom messages in the console. To do this,the function below is implemented.01 function logStatus(status){02 console./*Answer goes here*/{'Item status is: %s', status};03 }Which three console logging methods allow the use of string substitution in line 02?",
      options: ["A. Info", "B. Assert", "C. Log", "D. Error", "E. Message"],
      answer: "A,B,C",
      title: "Question 79",
    },
    {
      content:
        "A developer has code that calculates a restaurant bill, but generates incorrect answers while testing the code. Which option allows the developer to step into each function execution within calculateBill?",
      options: [
        "A. Using the debugger command on line 05.",
        "B. Wrapping findsubtotal in a console .log method.",
        "C. Using the debugger command on line 03.",
        "D. Calling the console. Trace( total ) method on line 03.",
      ],
      answer: "C",
      title: "Question 80",
    },
    {
      content:
        "A developer wrote a fizzbuzz function that when passed in a number, returns the following:* 'Fizz' if the number is divisible by 3.* 'Buzz' if the number is divisible by 5.* 'Fizzbuzz' if the number is divisible by both 3 and 5.* Empty string if the number is divisible by neither 3 or 5. Which two test cases will properly test scenarios for the fizzbuzz function? Choose 2 answers",
      options: [
        "A. let res = fizzbuzz(15);console.assert ( res === ' fizzbuzz ' )",
        "B. let res = fizzbuzz(3);console.assert ( res === ' buzz ' )",
        "C. let res = fizzbuzz(Infinity);console.assert ( res === ' ' )",
        "D. let res = fizzbuzz(5);console.assert ( res === ' ' );",
      ],
      answer: "A,B,C",
      title: "Question 81",
    },
    {
      content:
        "A developer is asked to fix some bugs reported by users. To do that, the developer adds a breakpoint for debugging.Function Car (maxSpeed, color){This.maxspeed =masSpeed;This.color = color;Let carSpeed = document.getElementById(' CarSpeed');Debugger;Let fourWheels =new Car (carSpeed.value, 'red');When the code execution stops at the breakpoint on line 06, which two types of information are available in the browser console ? Choose 2 answers:",
      options: [
        "A. The values of the carSpeed and fourWheels variables",
        "B. A variable displaying the number of instances created for the Car Object.",
        "C. The style, event listeners and other attributes applied to the carSpeed DOM element",
        "D. The information stored in the window.localStorage property",
      ],
      answer: "C,D",
      title: "Question 82",
    },
    {
      content:
        "Refer to the following array:Let arr1 = [1, 2, 3, 4, 5];Which two lines of codes result in a second array, arr2, being created such that arr2 is not a reference to arr1? Choose 2 answers",
      options: [
        "A. Let arr2 = arr1;",
        "B. Let arr2 = arr1 sort ();",
        "C. Let arr2 = Array. From (arr1) ;",
        "D. Let arr2 = arr1 .slice (0, 5);",
      ],
      answer: "A,B",
      title: "Question 83",
    },
    {
      content:
        "Refer to the code below:A developer uses a client that makes a GET request that uses a promise to handle the request, getRequest returns a promise. Which code modification can the developer make to gracefully handle an error?A)B)C)D)",
      options: ["A. Option B", "B. Option C", "C. Option D", "D. Option A"],
      answer: "D",
      title: "Question 84",
    },
    {
      content:
        "Refer to the code below:let sayHello = () => {console.log ('Hello, world!');};Which code executes sayHello once, two minutes from now?",
      options: [
        "A. delay(sayHello, 12000);",
        "B. setTimeout(sayHello, 12000);",
        "C. setTimeout(sayHello(), 12000);",
        "D. setInterval(sayHello, 12000);",
      ],
      answer: "B",
      title: "Question 85",
    },
    {
      content:
        "Refer to the code below:Let str = 'javascript';Str[0] = 'J';Str[4] = 'S';After changing the string index values, the value of str is 'javascript'. What is the reason for this value:",
      options: [
        "A. Primitive values are immutable.",
        "B. Non-primitive values are mutable.",
        "C. Primitive values are mutable.",
        "D. Non-primitive values are immutable.",
      ],
      answer: "A",
      title: "Question 86",
    },
    {
      content:
        "Why would a developer specify a package.jason as a developed forge instead of a dependency ?",
      options: [
        "A. It should be bundled when the package is published.",
        "B. It is only needed for local development and testing.",
        "C. It is required by the application in production.",
        "D. Other required packages depend on it for development.",
      ],
      answer: "B",
      title: "Question 87",
    },
    {
      content:
        "A developer wants to use a module named universalContainerLib and then call functions from it. How should a developer import every function from the module and then call the functions foo and bar?",
      options: [
        "A. import + from '/path/universalContainerLib.js''universalContainersLib.foo( ) ;universalContainersLib bar ( ) :",
        "B. import - as lib from '/path/universalContainerLib.js''lib.foo( ) ;lib. bar ( ) ;",
        "C. import (foo,bar) from '/path/universalContainerLib.js''foo ( ) ;bar ( ) ;",
        "D. import all from '/path/universalContainerLib.js''universalContainersLib.foo( ) ;universalContainersLib bar ( ) :",
      ],
      answer: "B",
      title: "Question 88",
    },
    {
      content:
        "A developer has two ways to write a function:After deciding on an option, the developer creates 1000 monster objects. How many growl methods are created with Option A and Option B?",
      options: [
        "A. 1000 growl methods are created regardless of which option is used.",
        "B. 1000 growl methods are created for Option A. 1 growl method is created for Option B.",
        "C. 1 growl method is created regardless of which option is used.",
        "D. 1 growl method is created for Option A. 1000 growl methods are created for Option B.",
      ],
      answer: "B",
      title: "Question 89",
    },
    {
      content:
        "A developer at Universal Containers creates a new landing page based on HTML, CSS, andJavaScript TO ensure that visitors have a good experience, a script named personaliseContextneeds to be executed when the webpage is fully loaded (HTML content and all related files ), inorder to do some custom initialization. Which statement should be used to call personalizeWebsiteContent based on the abovebusiness requirement?",
      options: [
        "A. Document.addEventListener('''DOMContextLoaded' , personalizeWebsiteContext);",
        "B. window.addEventListener('onload', personalizeWebsiteContext);",
        "C. document.addEventListener(''onDOMContextLoaded', personalizeWebsiteContext);",
        "D. window.addEventListener('load',personalizeWebsiteContext);",
      ],
      answer: "D",
      title: "Question 90",
    },
    {
      content:
        "Refer to the following code:Which statement should be added to line 09 for the code to display. The truck 123AB has a weight of 5000 Ib. '?",
      options: [
        "A. This .plate = plate;",
        "B. Vehicle.plate = plate",
        "C. Super.plate = plate;",
        "D. Super = (plate ) ;",
      ],
      answer: "A,B,D",
      title: "Question 91",
    },
    {
      content:
        "Refer to the following array:Let arr1 = [ 1, 2, 3, 4, 5 ];Which two lines of code result in a second array, arr2 being created such that arr2 is not a reference to arr1?",
      options: [
        "A. Let arr2 = arr1;",
        "B. Let arr2 = arr1.sort();",
        "C. Let arr2 = Array.from(arr1);",
        "D. Let arr2 = arr1.slice(0, 5);",
      ],
      answer: "C,D",
      title: "Question 92",
    },
    {
      content: "Which statement accurately describes an aspect of promises?",
      options: [
        "A. .then ( ) manipulates and returns the original promise.",
        "B. Agruments for the callback function passed to .then ( ) are optional.",
        "C. In a , them ( ) function, returning results is not necessary since callback will catch the result of a previous promise.",
        "D. . Them ( ) cannot be added after a catch.",
      ],
      answer: "B",
      title: "Question 93",
    },
    {
      content:
        "Refer to the following code that imports a module named utils:import (foo, bar) from '/path/Utils.js';foo() ;bar() ;Which two implementations of Utils.js export foo and bar such that the code above runs without error? Choose 2 answers",
      options: [
        "A. // FooUtils.js and BarUtils.js existImport (foo) from '/path/FooUtils.js';Import (boo) from ' /path/NarUtils.js';",
        "B. const foo = () => { return 'foo' ; }const bar = () => { return 'bar' ; }export { bar, foo }",
        "C. Export default class {foo() { return 'foo' ; }bar() { return 'bar' ; }}",
        "D. const foo = () => { return 'foo';}const bar = () => {return 'bar'; }Export default foo, bar;",
      ],
      answer: "B,C",
      title: "Question 94",
    },
    {
      content:
        "Refer to code below:function Person() {this.firstName = 'John';}Person.prototype ={Job: x => 'Developer'};const myFather = new Person();const result =myFather.firstName + ' ' + myFather.job();What is the value of the result after line 10 executes?",
      options: [
        "A. Undefined Developer",
        "B. John undefined",
        "C. John Developer",
        "D. Error: myFather.job is not a function",
      ],
      answer: "C",
      title: "Question 95",
    },
    {
      content:
        'Refer to the code below:Let car1 = new Promise((_ , reject) =>setTimeout(reject, 2000, "car 1 crashed in" =>Let car2 =new Promise(resolve => setTimeout(resolve, 1500, "car 2 completed") Let car3 =new Promise(resolve => setTimeout(resolve, 3000, "car 3 completed") Promise.race(( car1, car2, car3)).then (value => (Let result = \'$(value) the race.\';)}.catch(arr => {console.log("Race is cancelled.", err);});What is the value of result when Promise.race executes?',
      options: [
        "A. Car 3 completes the race",
        "B. Race is cancelled.",
        "C. Car 2 completed the race.",
        "D. Car 1 crashed in the race.",
      ],
      answer: "C",
      title: "Question 96",
    },
    {
      content:
        "Which three browser specific APIs are available for developer to persist data between page loads? Choose 3 answers",
      options: [
        "A. localStorage",
        "B. cookies",
        "C. IIFEs",
        "D. global variables",
        "E. indexedDB",
      ],
      answer: "A,C,E",
      title: "Question 97",
    },
    {
      content:
        "The developer wants to test this code:Const toNumber =(strOrNum) => strOrNum;Which two tests are most accurate for this code? Choose 2 answers",
      options: [
        "A. console.assert(toNumber('-3') < 0);",
        "B. console.assert(Number.isNaN(toNumber()));",
        "C. console.assert(toNumber('2') === 2);",
        "D. console.assert(toNumber () === NaN);",
      ],
      answer: "A,C",
      title: "Question 98",
    },
    {
      content:
        "A developer receives a comment from the Tech lead that the code below gives an error. Which line edit should be made to make this code run?",
      options: [
        "A. 01 let monthname = 'July ';",
        "B. 02 const year = 2020;",
        "C. 02 let year = 2019 ;",
        "D. 03 if (year == 2019) (",
      ],
      answer: "B",
      title: "Question 99",
    },
    {
      content:
        'is below:<input type="file" onchange="previewFile()"><img src="" height="200" alt="Image Preview..."/>The JavaScript portion is:01 function previewFile(){02 const preview = document.querySelector(\'img\');03 const file = document.querySelector(\'input[type=file]\').files[0];04 //line 4 code05 reader.addEventListener("load", () => {06 preview.src = reader.result;07 },false);08 //line 8 code09 }In lines 04 and 08, which code allows the user to select an image from their localcomputer , and to display the image in the browser?',
      options: [
        "A. 04 const reader = new File();08 if (file) URL.createObjectURL(file);",
        "B. 04 const reader = new FileReader();08 if (file) reader.readAsDataURL(file);",
        "C. 04 const reader = new File();08 if (file) reader.readAsDataURL(file);",
        "D. 04 const reader = new FileReader();08 if (file) URL.createObjectURL(file);",
      ],
      answer: "B",
      title: "Question 100",
    },
    {
      content:
        "A developer is leading the creating of a new browser application that will server a single page application. The team wants to use a new web framework Minialist.js. The lead developer wants to advocate for a more seasoned wen framework that already has a community around it. Which two frameworks should the load developer advocate for?",
      options: ["A. Vue", "B. Koa", "C. Angular", "D. Express"],
      answer: "C,D",
      title: "Question 101",
    },
    {
      content:
        "Refer to the code below:Function changeValue(obj) {Obj.value = obj.value/2;}Const objA = (value: 10);Const objB = objA;changeValue(objB);Const result = objA.value;What is the value of result after the code executes?",
      options: ["A. Undefined", "B. 5", "C. Nan", "D. 10"],
      answer: "B",
      title: "Question 102",
    },
    {
      content:
        "A team that works on a big project uses npm to deal with the project's dependencies.A developer added a dependency to manipulated dates and pushed the updates to the remote repository. The rest of the team complains that the dependency does not get download when they execute npm install. Which two reason could be possible explanation for this?",
      options: [
        "A. The developer added the dependency as a dev dependency, and NOOK_ENV is set to production.",
        "B. The developer added the dependency as a dev dependency, and NODK_ENV is set to production.",
        "C. The developer missed the option -ssve when adding the dependency.",
        "D. The developer missed the option - add when adding the dependency.",
      ],
      answer: "A,B,C",
      title: "Question 103",
    },
    {
      content:
        "Refer to the code snippet:A developer writes this code to return a message to a user attempting to register a new username. If the username is available, a variable named msg is declared and assigned a value on line 03. What is the return of msg when getivelibilityMessage ('' bewUserName') is executed and getAvailability (''newUserName'') returns false?",
      options: [
        "A. ''Username available''",
        "B. ''msg is not defined''",
        "C. undefined",
        "D. ''newUsername''",
      ],
      answer: "C",
      title: "Question 104",
    },
    {
      content:
        "A developer writers the code below to calculate the factorial of a given number.Function factorial(number) {Return number + factorial(number -1);}factorial(3);What is the result of executing line 04?",
      options: ["A. 0", "B. 6", "C. -Infinity", "D. RuntimeError"],
      answer: "D",
      title: "Question 105",
    },
    {
      content:
        "Refer to the code below:What is the output after the code executes?",
      options: [
        "A. undefined",
        "B. ReferenceError: eyeColor is not defined",
        "C. Developer",
        "D. ReferenceError: assignment to undeclared variable ''Person''",
      ],
      answer: "A",
      title: "Question 106",
    },
    {
      content:
        "A developer wants to create a simple image upload in the browser using the File API. The HTML is below:The JavaScript portion is:In lines 04 and 08, which code allows the user to select an image from their local computer, and to display the image in the browser?",
      options: [
        "A. 04 const reader = new FileReader ( ) ;08 if (file) URL , createObjectURL (file) ;",
        "B. 04 const reader = new FileReader ( ) ;08 if (file) reader , createAsDataURL (file) ;",
        "C. 04 const reader = new File ( ) ;08 if (file) URL , createObjectURL (file) ;",
        "D. 04 const reader = new File ( ) ;08 if (file) ,reader, readerAsDataURL (file) ;",
      ],
      answer: "C",
      title: "Question 107",
    },
    {
      content:
        "Refer to the expression below:Let x = ('1' + 2) == (6 + 2) ;How should this expression be modified to ensure that a evaluated to false?",
      options: [
        "A. Let x = (1' + '2') == (6 + 2) ;",
        "B. Let x = (1' + '2') === (6 + 2) ;",
        "C. Let x = (1' + '2') == ('6' / 2) ;",
        "D. Let x = (1' + '2') === (6 / 2) ;",
      ],
      answer: "B",
      title: "Question 108",
    },
    {
      content:
        "Refer to following code:class Vehicle {constructor(plate) {This.plate =plate;}}Class Truck extends Vehicle {constructor(plate, weight) {//Missing codeThis.weight = weight;}displayWeight() {console.log('The truck ${this.plate} has a weight of ${this.weight} lb.');}} Let myTruck = new Truck('123AB', 5000); myTruck.displayWeight(); Which statement should be added to line 09 for the code to display 'The truck 123AB has a weight of 5000lb.'?",
      options: [
        "A. Super.plate =plate;",
        "B. Vehicle.plate = plate;",
        "C. This.plate =plate;",
        "D. super(plate);",
      ],
      answer: "D",
      title: "Question 109",
    },
    {
      content:
        "A developer implements and calls the following code when an application state change occurs:If the back button is clicked after this method is executed, what can a developer expect?",
      options: [
        "A. The page reloads and all JavaScript is reinitialized.",
        "B. A navigate event is fired with a state properly that details previous application state.",
        "C. The page is navigated away from and previous page in the browser's history is loaded.",
        "D. A popstate event is fired with a state properly that details the application's last state.",
      ],
      answer: "C",
      title: "Question 110",
    },
    {
      content: "Given the following code:is the output of line 02?",
      options: [
        "A. ''x''",
        "B. ''undefined''",
        "C. ''null'''",
        "D. ''object''",
      ],
      answer: "D",
      title: "Question 111",
    },
    {
      content:
        "A developer creates a new web server that uses Node.js. It imports a server library that uses events and callbacks for handling server functionality. The server library is imported with require and is made available to the code by a variable named server. The developer wants to log any issues that the server has while booting up.Given the code and the information the developer has, which code logs an error at boot time with an event?A)B)C)D)",
      options: ["A. Option B", "B. Option C", "C. Option A", "D. Option D"],
      answer: "B",
      title: "Question 112",
    },
    {
      content:
        'Refer to the HTML below:<div id="main"><ul><li>Leo</li><li>Tony</li><li>Tiger</li></ul></div>Which JavaScript statement results in changing " Tony" to "Mr. T."?',
      options: [
        "A. document.querySelector('$main li:second-child').innerHTML = ' Mr. T. ';",
        "B. document.querySelector('$main li:nth-child(2)'),innerHTML = ' Mr. T. ';",
        "C. document.querySelector('$main li.Tony').innerHTML = ' Mr. T. ';",
        "D. document.querySelectorAll('$main $TONY').innerHTML = ' Mr. T. ';",
      ],
      answer: "B",
      title: "Question 113",
    },
    {
      content:
        "developer wants to use a module named universalContainersLib and them call functionsfrom it. How should a developer import every function from the module and then call the fuctions fooand bar ?",
      options: [
        "A. import * from '/path/universalContaineraLib.js';universalContainersLib.foo();universalContainersLib.bar();",
        "B. import all from '/path/universalContaineraLib.js';universalContainersLib.foo();universalContainersLib.bar();",
        "C. import (foo, bar) from '/path/universalContainersLib.js';foo();bar();",
        "D. import * ad lib from '/path/universalContainersLib.js';lib.foo();lib.bar();",
      ],
      answer: "D",
      title: "Question 114",
    },
    {
      content:
        "Given the code below:01 function GameConsole (name) {02 this.name = name;03 }0405 GameConsole.prototype.load = function(gamename) {06 console.log( ` $(this.name) is loading a game : $(gamename) ...`);07 )08 function Console 16 Bit (name) {09 GameConsole.call(this, name) ;10 }11 Console16bit.prototype = Object.create ( GameConsole.prototype) ;12 //insert code here13 console.log( ` $(this.name) is loading a cartridge game : $(gamename) ...`);14 }15 const console16bit = new Console16bit(' SNEGeneziz ');16 console16bit.load(' Super Nonic 3x Force ');What should a developer insert at line 15 to output the following message using themethod ?> SNEGeneziz is loading a cartridge game: Super Monic 3x Force . . .",
      options: [
        "A. Console16bit = Object.create(GameConsole.prototype).load = function(gamename) {",
        "B. Console16bit.prototype.load = function(gamename) {",
        "C. Console16bit.prototype.load(gamename) {",
        "D. Console16bit.prototype.load(gamename) = function() {",
      ],
      answer: "B",
      title: "Question 115",
    },
    {
      content:
        "A developer is asked to fix some bugs reported by users. To do that, the developer adds a breakpoint for debugging.When the code execution stops at the breakpoint on line 06, which two types of information are available In the browser console? Choose 2 answers",
      options: [
        "A. The information stored in the window.localStorage property.",
        "B. A variable's displaying the number of instances created for the Car object.",
        "C. The style, event listeners and other attributes applied to the carSpeed DOM element.",
        "D. The value of the carSpeed and fourWheel variables",
      ],
      answer: "A,C",
      title: "Question 116",
    },
    {
      content:
        "Teams at Universal Containers (UC) work on multiple JavaScript projects at the same time.UC is thinking about reusability and how each team can benefit from the work of others.Going open-source or public is not an option at this time. Which option is available to UC with npm?",
      options: [
        "A. Private registries are not supported by npm, but packages can be installed via URL.",
        "B. Private registries are not supported by npm, but packages can be installed via git.",
        "C. Private packages are not supported, but they can use another package manager likeyarn.",
        "D. Private packages can be scored, and scopes can be associated to a privateregistries.",
      ],
      answer: "D",
      title: "Question 117",
    },
    {
      content:
        "Which option is true about the strict mode in imported modules?",
      options: [
        "A. Imported modules are in strict model whether you declare them as such or not.",
        "B. You can only reference notStrict () functions from the imported module.",
        "C. Add the statement use strict = false, before any other statements In the module to enable not-strict mode.",
        "D. Add the statement use non-strict; before any other statement in the module to enable not strict mode.",
      ],
      answer: "B",
      title: "Question 118",
    },
    {
      content:
        "A developer implements a function that adds a few values.Function sum(num) {If (num == undefined) {Num =0;}Return function( num2, num3){If (num3 === undefined) {Num3 =0 ;}Return num + num2 + num3;}}Which three options can the developer invoke for this function to get a return value of 10 ? Choose 3 answers",
      options: [
        "A. sum(5)(5)",
        "B. sum() (5, 5)",
        "C. Sum () (20)",
        "D. sum(10) ()",
        "E. Sum (5, 5) ()",
      ],
      answer: "A,B",
      title: "Question 119",
    },
    {
      content:
        "Refer to code below:Let a ='a';Let b;// b = a;console.log(b);What is displayed when the code executes?",
      options: [
        "A. A",
        "B. ReferenceError: b is not defined",
        "C. Null",
        "D. Undefined",
      ],
      answer: "D",
      title: "Question 120",
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
      title: "Question 121",
    },
    {
      content:
        "The developer wants to test the code:Const toNumber = (strOrNum) => + strOrNum;Which two tests are most accurate for this code? Choose 2 answers",
      options: [
        "A. Console. Assert (Number,isNaN (toNumber ( ) ));",
        "B. Console.assert (toNumber ('2') === 2 ) ;",
        "C. Console,assert (toNumber ( '-3') < 0);",
        "D. Console,assert (toNumber ( ) === NaN ) ;",
      ],
      answer: "B,D",
      title: "Question 122",
    },
    {
      content: "Which statement parses successfully?",
      options: [
        'A. JSON.parse ("foo");',
        'B. JSON.parse (""foo\'");',
        'C. JSON. parse (""foo"\');',
        'D. JSON.parse ("foo"); ',
      ],
      answer: "C",
      title: "Question 123",
    },
    {
      content:
        "A developer wants to literate through an array of objects and count the objects whose property value, name, start with the letter N. const arrobj - [{''name ''t ''Zach''}, { ''name t Kate'') , ( ''name Alice'') < ( ''name'' t ''Bob'') , (''name'' t ''Nathan) , (''name'' t ''Nathandle1'')] Refer to the code snippet below:Which missing lines 02 and 03 return the correct count?",
      options: [
        "A. Comst sum = curr. Name startsWith ('N') 7 1 : 0Return acc + sum;",
        "B. Conset sun + curr. StartsWith ('N') 7 1 : 1;Return acc + sum ;",
        "C. Comst sum = curr. name startsWith ('N') 7 1 : 0;Return curr + sum;",
        "D. Const sum = curr. name startsWith ('N') 7 1 : 0;Return curr + sum;",
      ],
      answer: "A",
      title: "Question 124",
    },
    {
      content:
        "Given the code below:Function myFunction(){A =5;Var b =1;}myFunction();console.log(a);console.log(b);What is the expected output?",
      options: [
        "A. Both lines 08 and 09 are executed, but values outputted are undefined.",
        "B. Line 08 outputs the variable, but line 09 throws an error.",
        "C. Both lines 08 and 09 are executed, and the variables are outputted.",
        "D. Line 08 thrones an error, therefore line 09 is never executed.",
      ],
      answer: "B",
      title: "Question 125",
    },
    {
      content:
        "A developer is working on an ecommerce website where the delivery date is dynamicallycalculated based on the current day. The code line below is responsible for this calculation.Const deliveryDate = new Date ();Due to changes in the business requirements, the delivery date must now be today'sdate + 9 days. Which code meets this new requirement?",
      options: [
        "A. deliveryDate.setDate(( new Date ( )).getDate () +9);",
        "B. deliveryDate.date = Date.current () + 9;",
        "C. deliveryDate.setDate( Date.current () + 9);",
        "D. deliveryDate.date = new Date(+9) ;",
      ],
      answer: "A",
      title: "Question 126",
    },
    {
      content:
        "Refer to the following code:function test (val) {If (val === undefined) {return 'Undefined values!' ;}if (val === null) {return 'Null value! ';}return val;}Let x;test(x);What is returned by the function call on line 13?",
      options: [
        "A. 'Undefined values!'",
        "B. Undefined",
        "C. Line 13 throws an error.",
        "D. 'Null value!'",
      ],
      answer: "A",
      title: "Question 127",
    },
    {
      content:
        "Given the requirement to refactor the code above to JavaScript class format, which classdefinition is correct?A)B)C)D)",
      options: ["A. Option C", "B. Option A", "C. Option B", "D. Option D"],
      answer: "B",
      title: "Question 128",
    },
    {
      content:
        "Which function should a developer use to repeatedly execute code at a fixed time interval?",
      options: [
        "A. setTimeout",
        "B. setPeriod",
        "C. setInterval",
        "D. setInterim",
      ],
      answer: "C",
      title: "Question 129",
    },
    {
      content: "Which statement accurately describes an aspect of promises?",
      options: [
        "A. In a.then() function, returning results is not necessary since callbacks will catch the result of a previous promise.",
        "B. .then() manipulates and returns the original promise.",
        "C. Arguments for the callback function passed to .then() are optional.",
        "D. .then() cannot be added after a catch.",
      ],
      answer: "C",
      title: "Question 130",
    },
    {
      content:
        "A developer wants to create an object from a function in the browser using the code below:Function Monster() { this.name = 'hello' };Const z = Monster();What happens due to lack of the new keyword on line 02?",
      options: [
        "A. The z variable is assigned the correct object but this.name remains undefined.",
        "B. Window.name is assigned to 'hello' and the variable z remains undefined.",
        "C. Window.m is assigned the correct object.",
        "D. The z variable is assigned the correct object.",
      ],
      answer: "B",
      title: "Question 131",
    },
    {
      content:
        "A test has a dependency on database. query. During the test, the dependency is replaced with an object called database with the method,Calculator query, that returns an array. The developer does not need to verify how many times the method has been called. Which two test approaches describe the requirement? Choose 2 answers",
      options: [
        "A. Stubbing",
        "B. Black box",
        "C. White box",
        "D. Substitution",
      ],
      answer: "C,D",
      title: "Question 132",
    },
    {
      content:
        "Given code below:setTimeout (() => (console.log(1);). 0);console.log(2);New Promise ((resolve, reject )) = > (setTimeout(() => (reject(console.log(3));). 1000);)).catch(() => (console.log(4);));console.log(5);What is logged to the console?",
      options: ["A. 2 1 4 3 5", "B. 1 2 4 3 5", "C. 2 5 1 3 4", "D. 1 2 5 3 4"],
      answer: "C",
      title: "Question 133",
    },
    {
      content:
        "Refer to the following array:Let arr = [1, 2, 3, 4, 5];Which three options result in x evaluating as (3, 4, 5)? Choose 3 answers",
      options: [
        "A. Let x = arr.aplice (2, 3);",
        "B. Let x = arr. Slince (2, 3);",
        "C. Let x = arr.alice (2) ;",
        "D. Let x = arr.filter( (a) => ( a < 2)) ;",
        "E. Let x = arr.filter( (a) => )return a > 2 )) ;",
      ],
      answer: "A,C,E",
      title: "Question 134",
    },
    {
      content:
        "Refer to the code below:A developer import a library that creates a web server. the imported library uses events and callback to start the server. Which code should be inserted at line 03 to set up an event and start the web server?",
      options: [
        "A. Server. on ('connet' , (port) => (Console.log (Listening on' port);}};",
        "B. Server .start();",
        "C. server ( (port) => (Console.log ('Listening on' , port) ;}};",
        "D. server( );",
      ],
      answer: "C",
      title: "Question 135",
    },
    {
      content:
        "Given the HTML below:Which statement adds the priority-account CSS class to the Unversal Containers row?",
      options: [
        "A. Document. queryselector ('# row-uc') ,classes. Push (' priority-account');",
        "B. Document. querySelector ( 'row-uc') . classList. Add ( 'pariority-account') ;",
        "C. Document. getElementById ( 'row-uc') addClass ( ' priority-account');",
        "D. Document. querySelectorAll ( '# row-uc ') .classList. add ('priority-account');",
      ],
      answer: "B",
      title: "Question 136",
    },
    {
      content:
        "A team that works on a big project uses npm to deal with projects dependencies.A developer added a dependency does not get downloaded when they execute npm install. Which two reasons could be possible explanations for this? Choose 2 answers",
      options: [
        "A. The developer added the dependency as a dev dependency, and NODE_ENV is set to production.",
        "B. The developer missed the option --save when adding the dependency.",
        "C. The developer added the dependency as a dev dependency, and NODE_ENV Is set to production.",
        "D. The developer missed the option --add when adding the dependency.",
      ],
      answer: "A,B,C",
      title: "Question 137",
    },
    {
      content:
        "Refer to the code below:Const pi = 3.1415326,What is the data type of pi?",
      options: ["A. Double", "B. Number", "C. Decimal", "D. Float"],
      answer: "B",
      title: "Question 138",
    },
    {
      content:
        "Universal Container(UC) just launched a new landing page, but users complain that the website is slow. A developer found some functions that cause this problem. To verify this, the developer decides to do everything and log the time each of these three suspicious functions consumes.console.time('Performance');maybeAHeavyFunction();thisCouldTakeTooLong();orMaybeThisOne();console.endTime('Performance');Which function can the developer use to obtain the time spent by every one of the three functions?",
      options: [
        "A. console.timeStamp()",
        "B. console.timeLog()",
        "C. console.trace()",
        "D. console.getTime()",
      ],
      answer: "B",
      title: "Question 139",
    },
    {
      content:
        "Refer to the code below.After changing the string index values, the of atr is Javascript''. What is the reason for this value?",
      options: [
        "A. Primitive values are mutable.",
        "B. Non-primitive values are immutable.",
        "C. Primitive values are immutable",
        "D. Non-primitive values are mutable.",
      ],
      answer: "D",
      title: "Question 140",
    },
    {
      content: "Refer to the following code:What is the output of line 11?",
      options: [
        "A. [''foo:1'', ''bar:2'']",
        "B. ['foo'', ''bar'']",
        "C. [1, 2]",
        "D. [''bar'' , ''foo'']",
      ],
      answer: "B",
      title: "Question 141",
    },
    {
      content:
        "A developer wants to set up a secure web server with Node.js. The developer create a directory locally called app-server, and the first file is app-server/index, js.Without using any third-party libraries, what should the developer add to index, js to create the secure web server?",
      options: [
        "A. Const http = require ('http');",
        "B. Const http = require ('https') ;",
        "C. Const server = require ( 'secure-server') ;",
        "D. Const tls = require ('tls') ;",
      ],
      answer: "B",
      title: "Question 142",
    },
    {
      content:
        "A developer needs to test this functions:Which two assert statements are valid tests for this function?",
      options: [
        "A. Console.assert(sum3((1, '2' ]) 12 );",
        "B. Console.assert(sum3 ([-3, 2]) -1) ;",
        "C. Console.assert(sum3([0]) 0) ;",
        "D. Console.assert(sum3 (['hello' 2, 3, 4]) NaN);",
      ],
      answer: "A,B",
      title: "Question 143",
    },
    {
      content:
        "Given the code below:Which method can be provide a visual representation of the list if users and to allow sorting by the name or email attributes.",
      options: [
        "A. Console.group (userList);",
        "B. Console.info (userlist);",
        "C. Console.groupCollapsed (userslist);",
        "D. Console,table (userslist);",
      ],
      answer: "A",
      title: "Question 144",
    },
    {
      content:
        "Given the following code:Let x =('15' + 10)*2;What is the value of a?",
      options: ["A. 3020", "B. 50", "C. 35", "D. 1520"],
      answer: "A",
      title: "Question 145",
    },
    {
      content:
        "Refer to the code below:<html lang=\"en\"><table onclick=\"console.log(Table log');\"><tr id=\"row1\"><td>Click me!</td></tr><table><script>function printMessage(event) {console.log('Row log');}Let elem = document.getElementById('row1');elem.addEventListener('click', printMessage, false);</script></html>Which code change should be made for the console to log only Row log when 'Click me! ' is clicked?",
      options: [
        "A. Add event.removeEventListener(); toprintMessage function.",
        "B. Add event.removeEventListener(); to window.onLoad event handler.",
        "C. Add event.stopPropagation(); to printMessage function.",
        "D. Add.event.stopPropagation(); to window.onLoad event handler.",
      ],
      answer: "C",
      title: "Question 146",
    },
  ],
});
