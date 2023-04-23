window.testContent = window.testContent || [];
window.testContent.push({
  name: "Salesforce.JsDevI.v2023-02-25.q75",
  content: [
    {
      content:
        "A developer is setting up a Node,js server and is creating a script at the root of the source code, index,js, that will start the server when executed. The developer declares a variable that needs the folder location that the code executes from.Which global variable can be used in the script?",
      options: [
        "A. _dirname",
        "B. _filename",
        "C. this.path",
        "D. window.location",
      ],
      answer: "B",
      title: "Question 1",
    },
    {
      content:
        "Refer to the code belowlet inArray = [[1,2],[3,4,5]];which two statements results in the array [1,2,3,4,5]?choose 2 answer",
      options: [
        "A. [ ].concat([...inArray])",
        "B. [ ].concat.apply(inArray,[ ]);",
        "C. [ ].concat.apply([ ],inArray);",
        "D. [ ].concat(...inArray);",
      ],
      answer: "C,D",
      title: "Question 2",
    },
    {
      content:
        "What are two unique features of functions defined with a fat arrow as compared to normal function definition?Choose 2 answers",
      options: [
        "A. The function generated its own this making it useful for separating the function's scope from its enclosing scope.",
        "B. The function uses the this from the enclosing scope.",
        "C. If the function has a single expression in the function body, the expression will be evaluated and implicit returned.",
        "D. The function receives an argument that is always in scope, called parentThis, which is the enclosing lexical scope.",
      ],
      answer: "A,D",
      title: "Question 3",
    },
    {
      content:
        "Which statement can a developer apply to increment the browser's navigation history without a page refresh?Which statement can a developer apply to increment the browser's navigation history without a page refresh?",
      options: [
        "A. window.history.pushState(newStateObject);",
        "B. window.history.state.push(newStateObject);",
        "C. window.history.replaceState(newStateObject,' ', null);",
        "D. window.history.pushStare(newStateObject, ' ', null);",
      ],
      answer: "C",
      title: "Question 4",
    },
    {
      content:
        "Refer to the code below:Line 05 causes an error.What are the values of greeting and salutation once code completes?",
      options: [
        "A. Greeting is Hello and salutation is Hello, Hello.",
        "B. Greeting is Goodbye and salutation is I say Hello.",
        "C. Greeting is Goodbye and salutation is Hello, Hello.",
        "D. Greeting is Hello and salutation is I say hello.",
      ],
      answer: "A",
      title: "Question 5",
    },
    {
      content:
        "There is a new requirement for a developer to implement a currPrice method that will return the current price of the item or sales..What is the output when executing the code above",
      options: [
        "A. 5080Uncaught Reference Error:this,discount is undefined72",
        "B. 508072",
        "C. 50Uncaught TypeError: saleItem,desrcription is not a function5080",
        "D. 50805072",
      ],
      answer: "D",
      title: "Question 6",
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
      title: "Question 7",
    },
    {
      content: "Given the following code:What is the output of line 02?",
      options: ["A. 'object\"", 'B. "null"', 'C. "x-', 'D. "undefined" 0'],
      answer: "A",
      title: "Question 8",
    },
    {
      content:
        "Refer to code below:Function muFunction(reassign){Let x = 1;var y = 1;if( reassign ) {Let x= 2;Var y = 2;console.log(x);console.log(y);}console.log(x);console.log(y);}What is displayed when myFunction(true) is called?",
      options: [
        "A. 2 2 1 1",
        "B. 2 2 undefined undefined",
        "C. 2 2 1 2",
        "D. 2 2 2 2",
      ],
      answer: "C",
      title: "Question 9",
    },
    {
      content:
        "Which option is true about the strict mode in imported modules?",
      options: [
        "A. Add the statement use non-strict, before any other statements in the module to enable not-strict mode.",
        "B. Imported modules are in strict mode whether you declare them as such or not.",
        "C. Add the statement use strict =false; before any other statements in the module to enable not- strict mode.",
        "D. You can only reference notStrict() functions from the imported module.",
      ],
      answer: "B",
      title: "Question 10",
    },
    {
      content:
        "Refer to the following code:Let obj ={Foo: 1,Bar: 2}Let output =[],for(let something in obj{output.push(something);}console.log(output);What is the output line 11?",
      options: [
        'A. ["bar","foo"]',
        "B. [1,2]",
        'C. ["foo","bar"]',
        'D. ["foo:1","bar:2"]',
      ],
      answer: "C",
      title: "Question 11",
    },
    {
      content:
        "Refer to the code:Given the code above, which three properties are set for pet1? Choose 3 answers",
      options: ["A. name", "B. owner", "C. canTalk", "D. size", "E. type"],
      answer: "C,D,E",
      title: "Question 12",
    },
    {
      content:
        "A developer at Universal Containers creates a new landing page based on HTML, CSS, and JavaScript TO ensure that visitors have a good experience, a script named personaliseContext needs to be executed when the webpage is fully loaded (HTML content and all related files ), in order to do some custom initialization.Which statement should be used to call personalizeWebsiteContent based on the above business requirement?",
      options: [
        "A. document.addEventListener(''onDOMContextLoaded', personalizeWebsiteContext);",
        "B. window.addEventListener('onload', personalizeWebsiteContext);",
        "C. Document.addEventListener('''DOMContextLoaded' , personalizeWebsiteContext);",
        "D. window.addEventListener('load',personalizeWebsiteContext);",
      ],
      answer: "D",
      title: "Question 13",
    },
    {
      content: "What is the result of the code block?",
      options: [
        "A. An error is thrown.",
        "B. The console logs 'flag' and then an error is thrown.",
        "C. The console logs 'flag' and another flag.",
        "D. The console logs only 'flag'.",
      ],
      answer: "D",
      title: "Question 14",
    },
    {
      content:
        "Which three options show valid methods for creating a fat arrow function?Choose 3 answers",
      options: [
        "A. [ ] => ( console.log(' executed ') ;)",
        "B. X,y,z => ( console.log(' executed ') ;)",
        "C. x => ( console.log(' executed ') ; )",
        "D. ( ) => ( console.log(' executed ') ;)",
        "E. (x,y,z) => ( console.log(' executed ') ;)",
      ],
      answer: "C,E",
      title: "Question 15",
    },
    {
      content:
        "Refer to the following object.How can a developer access the fullName property for dog?",
      options: [
        "A. Dog.fullName ( )",
        "B. Dog, get, fullName",
        "C. Dog.fullName",
        "D. Dog, function, fullName",
      ],
      answer: "C",
      title: "Question 16",
    },
    {
      content:
        "Given the HTML below:Which statement adds the priority-account CSS class to the Universal Containers row?",
      options: [
        "A. document. querySelector (#row-uc'). classes-push('priority-account');",
        "B. document. querySelectorAll('#row-uc') -classList.add(\"priority-accour');",
        "C. document. getElementByid('row-uc').addClass('priority-account*);",
        "D. document. queryselector('#row-uc').ClassList.add('priority-account');",
      ],
      answer: "D",
      title: "Question 17",
    },
    {
      content:
        "Refer to the code below:function foo () {const a =2;function bat() {console.log(a);}return bar;}Why does the function bar have access to variable a ?",
      options: [
        "A. Prototype chain",
        "B. Hoisting",
        "C. Outer function's scope",
        "D. Inner function's scope",
      ],
      answer: "C",
      title: "Question 18",
    },
    {
      content:
        "Refer the following codewhat is the value of array after code executes?",
      options: [],
      answer: "  [ 1, 2, 3, 5 ] ",
      title: "Question 19",
    },
    {
      content:
        "Refer to the code below:const addBy = ?const addByEight =addBy(8);const sum = addBYEight(50);Which two functions can replace line 01 and return 58 to sum?Choose 2 answers",
      options: [
        "A. const addBY = (num1) => (num2) => num1 + num2;",
        "B. const addBy = function(num1){return function(num2){return num1 + num2;}",
        "C. const addBy = function(num1){return num1 + num2;}",
        "D. const addBy = (num1) => num1 + num2 ;",
      ],
      answer: "A,B",
      title: "Question 20",
    },
    {
      content:
        "A test has a dependency on database.query. During the test the dependency is replaced with an object called database with the method, query, that returns an array. The developer needs to verify how many times the method was called and the arguments used each time.Which two test approaches describe the requirement?Choose 2 answers",
      options: ["A. Mocking", "B. White box", "C. Black box", "D. Integration"],
      answer: "A,B",
      title: "Question 21",
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
      title: "Question 22",
    },
    {
      content:
        "A developer wants to create an object from a function in the browser using the code below:Function Monster() { this.name = 'hello' };Const z = Monster();What happens due to lack of the new keyword on line 02?",
      options: [
        "A. The z variable is assigned the correct object but this.name remains undefined.",
        "B. The z variable is assigned the correct object.",
        "C. Window.m is assigned the correct object.",
        "D. Window.name is assigned to 'hello' and the variable z remains undefined.",
      ],
      answer: "D",
      title: "Question 23",
    },
    {
      content:
        "developer creates a new web server that uses Node.js. It imports a server library that uses events and callbacks for handling server functionality.The server library is imported with require and is made available to the code by a variable named server. The developer wants to log any issues that the server has while booting up.Given the code and the information the developer has, which code logs an error at boost with an event?",
      options: [
        "A. Server.on ('error', (error) => {console.log('ERROR', error);});",
        "B. Try{server.start();} catch(error) {console.log('ERROR', error);}",
        "C. Server.catch ((server) => {console.log('ERROR', error);});",
        "D. Server.error ((server) => {console.log('ERROR', error);});",
      ],
      answer: "A",
      title: "Question 24",
    },
    {
      content:
        "Refer to the code below:Considering that JavaScript is single-threaded, what is the output of line 08 after the code executes?",
      options: ["A. 10", "B. 11", "C. 12", "D. 13"],
      answer: "B",
      title: "Question 25",
    },
    {
      content:
        "Refer to HTML below:<p> The current status of an Order: <span id =\"status\"> In Progress </span> </p>.Which JavaScript statement changes the text 'In Progress' to 'Completed' ?",
      options: [
        "A. document.getElementById(\"#status\").innerHTML = 'Completed' ;",
        "B. document.getElementById(\".status\").innerHTML = 'Completed' ;",
        "C. document.getElementById(\"status\").innerHTML = 'Completed' ;",
        "D. document.getElementById(\"status\").Value = 'Completed' ;",
      ],
      answer: "C",
      title: "Question 26",
    },
    {
      content:
        "A Developer wrote the following code to test a sum3 function that takes in an array of numbers and returns the sum of the first three number in the array, The test passes:Let res = sum2([1, 2, 3 ]) ;console.assert(res === 6 );Res = sum3([ 1, 2, 3, 4]);console.assert(res=== 6);A different developer made changes to the behavior of sum3 to instead sum all of the numbers present in the array. The test passes:Which two results occur when running the test on the updated sum3 function ?Choose 2 answers",
      options: [
        "A. The line 05 assertion fails.",
        "B. The line 05 assertion passes.",
        "C. The line 02 assertion passes.",
        "D. The line 02 assertion fails",
      ],
      answer: "A,C",
      title: "Question 27",
    },
    {
      content:
        "Which code change should be done for the console to log the following when 'Click me!' is clicked'> Row log> Table log",
      options: [
        "A. Remove lines 13 and 14",
        "B. Remove line 10",
        "C. Change line 10 to event.stopPropagation (false) ;",
        "D. Change line 14 to elem.addEventListener ('click', printMessage, true);",
      ],
      answer: "B",
      title: "Question 28",
    },
    {
      content:
        'Given HTML below:<div><div id ="row-uc"> Universal Container</div><div id ="row-aa">Applied Shipping</div><div id ="row-bt"> Burlington Textiles </div></div>Which statement adds the priority = account CSS class to the universal Containers row ?',
      options: [
        "A. Document .querySelectorALL('#row-uc').classList.add('priority-account');",
        "B. Document .querySelector('#row-uc').classes.push('priority-account');",
        "C. Document .queryElementById('row-uc').addclass('priority-account');",
        "D. Document .querySelector('#row-uc').classList.add('priority-account');",
      ],
      answer: "C",
      title: "Question 29",
    },
    {
      content:
        "A developer tries to retrieve all cookies, then sets a certain key value pair in the cookie. These statements are used:What is the behavior?",
      options: [
        "A. Cookies are read, but the key value is not set because the value is not URL encoded.",
        "B. Cookies are not read because line 01 should be document, cookies, but the key value is set and all cookies are wiped.",
        "C. Cookies are read and the key value is set, and all cookies are wiped.",
        "D. A Cookies are read and the key value is set, the remaining cookies are unaffected.",
      ],
      answer: "D",
      title: "Question 30",
    },
    {
      content:
        "A class was written to represent items for purchase in an online store, and a second class Representing items that are on sale at a discounted price. THe constructor sets the name to the first value passed in. The pseudocode is below:Class Item {constructor(name, price) {... // Constructor Implementation}}Class SaleItem extends Item {constructor (name, price, discount) {...//Constructor Implementation}}There is a new requirement for a developer to implement a description method that will return a brief description for Item and SaleItem.Let regItem =new Item('Scarf', 55);Let saleItem = new SaleItem('Shirt' 80, -1);Item.prototype.description = function () { return 'This is a ' + this.name; console.log(regItem.description()); console.log(saleItem.description()); SaleItem.prototype.description = function () { return 'This is a discounted ' + this.name; } console.log(regItem.description()); console.log(saleItem.description()); What is the output when executing the code above ?",
      options: [
        "A. This is aScarfUncaught TypeError: saleItem.description is not a functionThis is a ShirtThis is a did counted Shirt",
        "B. This is a ScarfThis is a ShirtThis is a ScarfThis is a discounted Shirt",
        "C. This is a ScarfThis is a ShirtThis is a discounted ScarfThis is a discounted Shirt",
        "D. This is a ScarfUncaught TypeError: saleItem.description is not a functionThis is aScarfThis is a discounted Shirt",
      ],
      answer: "B",
      title: "Question 31",
    },
    {
      content:
        "Given the code below:Setcurrent URL ();console.log('The current URL is: ' +url );function setCurrentUrl() {Url = window.location.href:What happens when the code executes?",
      options: [
        "A. The url variable has global scope and line 02 throws an error.",
        "B. The url variable has local scope and line 02 executes correctly.",
        "C. The url variable has local scope and line 02 throws an error.",
        "D. The url variable has global scope and line 02 executes correctly.",
      ],
      answer: "D",
      title: "Question 32",
    },
    {
      content:
        "Why would a developer specify a package.jason as a developed forge instead of a dependency ?",
      options: [
        "A. It is only needed for local development and testing.",
        "B. It is required by the application in production.",
        "C. Other required packages depend on it for development.",
        "D. It should be bundled when the package is published.",
      ],
      answer: "A",
      title: "Question 33",
    },
    {
      content:
        "Which code statement correctly retrieves and returns an object from localStorage?",
      options: [
        "A. const retrieveFromLocalStorage = () =>{return JSON.stringify(window.localStorage.getItem(storageKey));}",
        "B. const retrieveFromLocalStorage = (storageKey) =>{return JSON.parse(window.localStorage.getItem(storageKey));}",
        "C. const retrieveFromLocalStorage = (storageKey) =>{return window.localStorage.getItem(storageKey);}",
        "D. const retrieveFromLocalStorage = (storageKey) =>{return window.localStorage[storageKey];}",
      ],
      answer: "B",
      title: "Question 34",
    },
    {
      content:
        "A developer has a web server running with Node.js. The command to start the web server is node server.js.The web server started havinglatency issues. Instead of a one second turnaround for web requests, the developer now sees a five second turnaround.Which command can the web developer run to see what the module is doing during the latency period?",
      options: [
        "A. DEBUG=http, https node server.js",
        "B. NODE_DEBUG=http,https node server.js",
        "C. DEBUG=true node server.js",
        "D. NODE_DEBUG=true node server.js",
      ],
      answer: "C",
      title: "Question 35",
    },
    {
      content:
        "Given the requirement to refactor the code above to JavaScript class format, which class definition is correct?",
      options: ["A. ", "B. ", "C. ", "D. "],
      answer: "B",
      title: "Question 36",
    },
    {
      content:
        "Refer to the code below:Let str = 'javascript';Str[0] = 'J';Str[4] = 'S';After changing the string index values, the value of str is 'javascript'. What is the reason for this value:",
      options: [
        "A. Non-primitive values are mutable.",
        "B. Primitive values are immutable.",
        "C. Non-primitive values are immutable.",
        "D. Primitive values are mutable.",
      ],
      answer: "B",
      title: "Question 37",
    },
    {
      content:
        "A developer wants to create an object from a function in the browser using the code below.What happens due to the lack of the mm keyword on line 02?",
      options: [
        "A. window.name is assigned to 'hello' and the variable = remains undefined.",
        "B. window.m Is assigned the correct object.",
        "C. The m variable is assigned the correct object.",
        "D. The m variable is assigned the correct object but this.name remains undefined.",
      ],
      answer: "A",
      title: "Question 38",
    },
    {
      content:
        "A developer implements and calls the following code when an application state change occurs:Const onStateChange =innerPageState) => {window.history.pushState(newPageState, ' ', null);}If the back button is clicked after this method is executed, what can a developer expect?",
      options: [
        "A. The page is navigated away from and the previous page in the browser's history is loaded.",
        "B. A popstate event is fired with a state property that details the application's last state.",
        "C. The page reloads and all Javascript is reinitialized.",
        "D. A navigate event is fired with a state property that details the previous application state.",
      ],
      answer: "A",
      title: "Question 39",
    },
    {
      content:
        "Refer to the string below:const str = 'Salesforce';Which two statements result in the word 'Sales'?Choose 2 answers",
      options: [
        "A. str.substr (0, 5);",
        "B. str.substr(1, 5);",
        "C. str.substring (0, 5);",
        "D. str.substring (1, 5);",
      ],
      answer: "A,C",
      title: "Question 40",
    },
    {
      content:
        "Given the following code:Let x =('15' + 10)*2;What is the value of a?",
      options: ["A. 3020", "B. 1520", "C. 50", "D. 35"],
      answer: "A",
      title: "Question 41",
    },
    {
      content:
        "A developer has the following array of hourly wages:Let arr = (8, 5, 9, 75, 11, 25, 7, 75, , 13, 25);For workers making less than $10 an hour rate should be multiple by 1.25 and returned in a new array.How should the developer implement the request?",
      options: [
        "A. let arrl = arr.filterBy((val) => val < 10 ).aapBy<(num) -> num = ..25 );",
        "B. let arrl = arr-map((num) => { return ran * 1.25 }).filter((val) -> { return val < 10));",
        "C. let arrl = arr.filter((val) => val < 10).map((num) -> num = 1.25);",
        "D. let arrl = arr .rr.acArray ((val) => ( val < 10 )) ,map((num) => { num * 1.25 ));",
      ],
      answer: "B",
      title: "Question 42",
    },
    {
      content:
        'A developer has two ways to write a function:Option A:function Monster() {This.growl = () => {Console.log ("Grr!");}}Option B:function Monster() {};Monster.prototype.growl =() => {console.log("Grr!");}After deciding on an option, the developer creates 1000 monster objects.How many growl methods are created with Option A Option B?',
      options: [
        "A. 1 growl method is created regardless of which option is used.",
        "B. 1000 growl methods are created regardless of which option is used.",
        "C. 1 growl method is created for Option A. 1000 growl methods are created for Option B.",
        "D. 1000 growl method is created for Option A. 1 growl methods are created for Option B.",
      ],
      answer: "D",
      title: "Question 43",
    },
    {
      content:
        "Given the code below:01 function GameConsole (name) {02 this.name = name;03 }0405 GameConsole.prototype.load = function(gamename) {06 console.log( ` $(this.name) is loading a game : $(gamename) ...`);07 )08 function Console 16 Bit (name) {09 GameConsole.call(this, name) ;10 }11 Console16bit.prototype = Object.create ( GameConsole.prototype) ;12 //insert code here13 console.log( ` $(this.name) is loading a cartridge game : $(gamename) ...`);14 }15 const console16bit = new Console16bit(' SNEGeneziz ');16 console16bit.load(' Super Nonic 3x Force ');What should a developer insert at line 15 to output the following message using the method ?> SNEGeneziz is loading a cartridge game: Super Monic 3x Force . . .",
      options: [
        "A. Console16bit = Object.create(GameConsole.prototype).load = function(gamename) {",
        "B. Console16bit.prototype.load(gamename) = function() {",
        "C. Console16bit.prototype.load(gamename) {",
        "D. Console16bit.prototype.load = function(gamename) {",
      ],
      answer: "D",
      title: "Question 44",
    },
    {
      content:
        "A developer has the function, shown below, that is called when a page loads.Where can the developer see the log statement after loading the page in the browser?",
      options: [
        "A. On the terminal console running the web server",
        "B. On the browser JavaScript console",
        "C. In the browser performance tools log",
        "D. On the webpage console log",
      ],
      answer: "B",
      title: "Question 45",
    },
    {
      content:
        "Refer to following code:class Vehicle {constructor(plate) {This.plate =plate;}}Class Truck extends Vehicle {constructor(plate, weight) {//Missing codeThis.weight = weight;}displayWeight() {console.log('The truck ${this.plate} has a weight of ${this.weight} lb.');}} Let myTruck = new Truck('123AB', 5000); myTruck.displayWeight(); Which statement should be added to line 09 for the code to display 'The truck 123AB has a weight of 5000lb.'?",
      options: [
        "A. Super.plate =plate;",
        "B. Vehicle.plate = plate;",
        "C. super(plate);",
        "D. This.plate =plate;",
      ],
      answer: "C",
      title: "Question 46",
    },
    {
      content:
        "The developer wants to test the array shown:const arr = Array(5).fill(0)Which two tests are the most accurate for this array ?Choose 2 answers:",
      options: [
        "A. console.assert (arr.length >0);",
        "B. console.assert(arr[0] === 0 && arr[ arr.length] === 0);",
        "C. console.assert( arr.length === 5 );",
        "D. arr.forEach(elem => console.assert(elem === 0)) ;",
      ],
      answer: "C,D",
      title: "Question 47",
    },
    {
      content:
        "Given the following code:What will be the first four numbers logged?",
      options: ["A. 0012", "B. 0122", "C. 0123", "D. 0112"],
      answer: "B",
      title: "Question 48",
    },
    {
      content: "Given the code below:What is logged to the console'",
      options: ["A. 1 2 5 3 4", "B. 1 2 3 4 5", "C. 2 5 3 4 1", "D. 2 5 1 3 4"],
      answer: "C",
      title: "Question 49",
    },
    {
      content:
        "Given the HTML below:Which statement adds the priority-account css class to the Applied Shipping row?",
      options: [],
      answer:
        "  document.querySelector('#row-as').classList.add('priority-account'); ",
      title: "Question 50",
    },
    {
      content:
        "Refer to the code below?Let searchString = ' look for this ';Which two options remove the whitespace from the beginning of searchString?Choose 2 answers",
      options: [
        "A. trimStart(searchString);",
        "B. searchString.replace(/*\\s\\s*/, '');",
        "C. searchString.trimStart();",
        "D. searchString.trimEnd();",
      ],
      answer: "B,C",
      title: "Question 51",
    },
    {
      content:
        "Given the code below:Which three code segments result in a correct conversion from number to string? Choose 3 answers",
      options: [
        "A. let scrValue = String(numValue);",
        "B. let strValue = * * 4 numValue;",
        "C. let strValue = numValue.toText ();",
        "D. let strValue = numValue. toString();",
        "E. let strValue = (String)numValue;",
      ],
      answer: "A,B,D",
      title: "Question 52",
    },
    {
      content:
        "Refer of the string below:Const str = 'sa;esforce'=;Which two statement result in the word 'Sale'?Choose 2 answers",
      options: [
        "A. str, substring(1,5) ;",
        "B. str, substr(1,5) ;",
        "C. str, substring (0,5) ;",
        "D. str, substr(0,5) ;",
      ],
      answer: "C,D",
      title: "Question 53",
    },
    {
      content:
        "Given the JavaScript below:Which code should replace the placeholder comment on line 05 to highlight accounts that match the search string'",
      options: [
        "A. 'none1 : \"yellow'",
        "B. 'yellow : 'none'",
        "C. 'yellow' : null",
        "D. null : 'yellow'",
      ],
      answer: "B",
      title: "Question 54",
    },
    {
      content:
        "Refer to the code below:let sayHello = () => {console.log ('Hello, world!');};Which code executes sayHello once, two minutes from now?",
      options: [
        "A. setInterval(sayHello, 12000);",
        "B. setTimeout(sayHello, 12000);",
        "C. setTimeout(sayHello(), 12000);",
        "D. delay(sayHello, 12000);",
      ],
      answer: "B",
      title: "Question 55",
    },
    {
      content:
        "Given the code below:const delay = async delay =>{return new Promise((resolve,reject)=>{console.log(1);setTimeout(resolve,deleay);});};const callDelay = async ()=>{console.log(2);const yup = await delay(1000);console.log(3);}console.log(4);callDelay();console.log(5);What is logged to the console?",
      options: [],
      answer: "  4 2 1 5 3 ",
      title: "Question 56",
    },
    {
      content:
        "developer has a web server running with Node.js. The command to start the web server is node server,js. The web server started having latency issues. Instead of a one second turn around for web requests, the developer now sees a five second turnaround, Which command can the web developer run to see what the module is doing during the latency period?",
      options: [
        "A. NODE_DEBUG =http, https node server.js",
        "B. NODE_DEBUG =true node server.js",
        "C. DEBUG =true node server.js",
        "D. DEBUG = http, https node server.js",
      ],
      answer: "C",
      title: "Question 57",
    },
    {
      content: "Refer to the following code block:What is the console output?",
      options: [
        "A. > Jackie got 70% on test.",
        "B. > Better student Jackie got 70% on test.",
        "C. > Better student Jackie got 100% on test.",
        "D. > Uncaught Reference Error",
      ],
      answer: "C",
      title: "Question 58",
    },
    {
      content:
        'Refer to the code below:let car1 = new Promise((_ ,reject)=> setTimeout(reject,2000,"Car1 crashed in")); let car2 = new Promise(resolve => setTimeout(resolve,1500,"Car2 completed")); let car3 = new Promise(resolve => setTimeout(resolve,3000,"Car3 completed")); Promise.race([car1,car2,car3]).then(value=>{let result = `${value} the race.`;}).catch(err=>{console.log(\'Race is cancelled.\',err);});What is the value of result when promise.race execues?',
      options: [],
      answer: "  Car2 completed the race. ",
      title: "Question 59",
    },
    {
      content:
        "Refer to the code below:Const myFunction = arr => {Return arr.reduce((result, current) =>{Return result = current;}, 10};}What is the output of this function when called with an empty array ?",
      options: [
        "A. Returns NaN",
        "B. Returns 0",
        "C. Throws an error",
        "D. Returns 10",
      ],
      answer: "D",
      title: "Question 60",
    },
    {
      content:
        "Universal Containers (UC) just launched a new landing page, but users complain that the website is slow. A developer found some functions any that might cause this problem. To verify this, the developer decides to execute everything and log the time each of these three suspicious functions consumes.Which function can the developer use to obtain the time spent by every one of the three functions?",
      options: [
        "A. console.trace()",
        "B. console. timeLog ()",
        "C. console.timeStamp ()",
        "D. console.getTime ()",
      ],
      answer: "B",
      title: "Question 61",
    },
    {
      content:
        "A developer is asked to fix some bugs reported by users. To do that, the developer adds a breakpoint for debugging.Function Car (maxSpeed, color){This.maxspeed =masSpeed;This.color = color;Let carSpeed = document.getElementById(' CarSpeed');Debugger;Let fourWheels =new Car (carSpeed.value, 'red');When the code execution stops at the breakpoint on line 06, which two types of information are available in the browser console ?Choose 2 answers:",
      options: [
        "A. The style, event listeners and other attributes applied to the carSpeed DOM element",
        "B. The information stored in the window.localStorage property",
        "C. The values of the carSpeed and fourWheels variables",
        "D. A variable displaying the number of instances created for the Car Object.",
      ],
      answer: "A,B",
      title: "Question 62",
    },
    {
      content:
        'is below:<input type="file" onchange="previewFile()"><img src="" height="200" alt="Image Preview..."/>The JavaScript portion is:01 function previewFile(){02 const preview = document.querySelector(\'img\');03 const file = document.querySelector(\'input[type=file]\').files[0];04 //line 4 code05 reader.addEventListener("load", () => {06 preview.src = reader.result;07 },false);08 //line 8 code09 }In lines 04 and 08, which code allows the user to select an image from their local computer , and to display the image in the browser?',
      options: [
        "A. 04 const reader = new File();08 if (file) URL.createObjectURL(file);",
        "B. 04 const reader = new FileReader();08 if (file) URL.createObjectURL(file);",
        "C. 04 const reader = new FileReader();08 if (file) reader.readAsDataURL(file);",
        "D. 04 const reader = new File();08 if (file) reader.readAsDataURL(file);",
      ],
      answer: "C",
      title: "Question 63",
    },
    {
      content:
        "Given the code below:const copy = JSON.stringify([ new String(' false '), new Bollean( false ), undefined ]); What is the value of copy?",
      options: [
        "A. -- [ false, { } ]--",
        'B. -- [ \\"false\\" , { } ]--',
        'C. -- [ \\"false\\" , false, undefined ]--',
        'D. -- [ \\"false\\" ,false, null ]--',
      ],
      answer: "D",
      title: "Question 64",
    },
    {
      content:
        "Refer to code below:Let productSKU = '8675309' ;A developer has a requirement to generate SKU numbers that are always 19 characters lon, starting with 'sku', and padded with zeros.Which statement assigns the values sku0000000008675309 ?",
      options: [
        "A. productSKU = productSKU .padStart (16. '0').padstart(19, 'sku');",
        "B. productSKU = productSKU .padEnd (16. '0').padstart(19, 'sku');",
        "C. productSKU = productSKU .padStart (19. '0').padstart('sku');",
        "D. productSKU = productSKU .padEnd (16. '0').padstart('sku');",
      ],
      answer: "A",
      title: "Question 65",
    },
    {
      content:
        'A developer uses a parsed JSON string to work with user information as in the block below:01 const userInformation ={02 " id " : "user-01",03 "email" : "[email protected]",04 "age" : 25Which two options access the email attribute in the object?Choose 2 answers',
      options: [
        "A. userInformation(email)",
        'B. userInformation.get("email")',
        "C. userInformation.email",
        'D. userInformation("email")',
      ],
      answer: "C,D",
      title: "Question 66",
    },
    {
      content:
        "Given the JavaScript below:01 function filterDOM (searchString) {02 const parsedSearchString = searchString && searchString.toLowerCase() ;03 document.quesrySelectorAll(' .account' ) . forEach(account => (04 const accountName = account.innerHTML.toLOwerCase();05 account. Style.display = accountName.includes(parsedSearchString) ? /*Insert code*/;06 )};07 }Which code should replace the placeholder comment on line 05 to hide accounts that do not match the search string?",
      options: [
        "A. ' hidden ' : ' visible '",
        "B. ' visible ' : ' hidden '",
        "C. ' Block ' : ' none '",
        "D. ' name ' : ' block '",
      ],
      answer: "C",
      title: "Question 67",
    },
    {
      content:
        "developer is trying to convince management that their team will benefit from using Node.js for a backend server that they are going to create. The server will be a web server that handles API requests from a website that the team has already built using HTML, CSS, and JavaScript.Which three benefits of Node.js can the developer use to persuade their manager?Choose 3 answers:",
      options: [
        "A. Executes server-side JavaScript code to avoid learning a new language.",
        "B. Uses non-blocking functionality for performant request handling .",
        "C. Performs a static analysis on code before execution to look for runtime errors.",
        "D. Installs with its own package manager to install and manage third-party libraries.",
        "E. Ensures stability with one major release every few years.",
      ],
      answer: "B,C,D",
      title: "Question 68",
    },
    {
      content:
        'A developer uses a parsed JSON string to work with user information as in the block below:01 const userInformation ={02 " id " : "user-01",03 "email" : "[email protected]",04 "age" : 25Which two options access the email attribute in the object?Choose 2 answers',
      options: [
        "A. userInformation.email",
        'B. userInformation("email")',
        "C. userInformation(email)",
        'D. userInformation.get("email")',
      ],
      answer: "A,B",
      title: "Question 69",
    },
    {
      content:
        "A developer has an ErrorHandler module that contains multiple functions.What kind of export be leverages so that multiple functions can be used?",
      options: ["A. Named", "B. Multi", "C. All", "D. Default"],
      answer: "A",
      title: "Question 70",
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
      title: "Question 71",
    },
    {
      content:
        "A developer wrote the following code to test a sum3 function that takes in an array of numbers and returns the sum of the first three numbers in the array, and the test passes.A different developer made changes to the behavior of sum3 to instead sum only the first two numbers present in the array.Which two results occur when running this test on the updated sum3 function?Choose 2 answers",
      options: [
        "A. The line 05 assertion fails.",
        "B. The line 05 assertion passes.",
        "C. The line 02 assertion fails.",
        "D. The line 02 assertion passes.",
      ],
      answer: "A,D",
      title: "Question 72",
    },
    {
      content:
        "Refer to the following code:Let sampleText = 'The quick brown fox jumps';A developer needs to determine if a certain substring is part of a string.Which three expressions return true for the given substring ?Choose 3 answers",
      options: [
        "A. sampleText.includes('fox');",
        "B. sampleText.includes(' Fox ', 3)",
        "C. sampleText.includes(' quick ') !== -1;",
        "D. sampleText.includes(' fox ');",
        "E. sampleText.includes(' quick ', 4);",
      ],
      answer: "C,D,E",
      title: "Question 73",
    },
    {
      content:
        "A developer wants to set up a secure web server with Node.js. The developer creates a directory locally called app-server, and the first file is app-server/index.js Without using any third-party libraries, what should the developer add to index.js to create the secure web server?",
      options: [
        "A. const http =require('http');",
        "B. const server =require('secure-server');",
        "C. const tls = require('tls');",
        "D. const https =require('https');",
      ],
      answer: "D",
      title: "Question 74",
    },
    {
      content:
        "Which three actions can be using the JavaScript browser console?Choose 3 answers:",
      options: [
        "A. View and change DOM the page.",
        "B. View and change security cookies.",
        "C. view , change, and debug the JavaScript code of the page.",
        "D. Display a report showing the performance of a page.",
        "E. Run code that is not related to page.",
      ],
      answer: "A,C,E",
      title: "Question 75",
    },
  ],
});
