window.testContent = window.testContent || [];
window.testContent.push({
  name: "Salesforce.JsDevI.v2022-08-01.q60",
  content: [
    {
      content:
        "Which two code snippets show working examples of a recursive function?Choose 2 answers",
      options: [
        "A. Let countingDown = function(startNumber) {If ( startNumber >0) {console.log(startNumber) ;return countingDown(startNUmber);} else {return startNumber;}};",
        "B. Const factorial =numVar => {If (numVar < 0) return;If ( numVar === 0 ) return 1;return numVar * factorial ( numVar - 1 );};",
        "C. Function factorial ( numVar ) {If (numVar < 0) return;If ( numVar === 0 ) return 1;return numVar -1;",
        "D. Const sumToTen = numVar => {If (numVar < 0)Return;return sumToTen(numVar + 1)};",
      ],
      answer: "A,B",
      title: "Question 1",
    },
    {
      content:
        "A developer wants to use a try...catch statement to catch any error that countSheep () may throw and pass it to a handleError () function.What is the correct implementation of the try...catch?A)B)C)D)",
      options: ["A. Option ", "B. Option ", "C. Option", "D. Option "],
      answer: "C",
      title: "Question 2",
    },
    {
      content:
        "Given two expressions var1 and var2. What are two valid ways to return the logical ANDof the two expressions and ensure it is data type Boolean ?Choose 2 answers:",
      options: [
        "A. var1 && var2",
        "B. Boolean(var1) && Boolean(var2)",
        "C. Boolean(var1 && var2)",
        "D. var1.toBoolean() && var2toBoolean()",
      ],
      answer: "B,C",
      title: "Question 3",
    },
    {
      content:
        "Refer to following code:class Vehicle {constructor(plate) {This.plate =plate;}}Class Truck extends Vehicle {constructor(plate, weight) {//Missing codeThis.weight = weight;}displayWeight() {console.log('The truck ${this.plate} has a weight of ${this.weight} lb.');}}Let myTruck = new Truck('123AB', 5000);myTruck.displayWeight();Which statement should be added to line 09 for the code to display 'The truck 123AB has aweight of 5000lb.'?",
      options: [
        "A. Vehicle.plate = plate;",
        "B. super(plate);",
        "C. Super.plate =plate;",
        "D. This.plate =plate;",
      ],
      answer: "B",
      title: "Question 4",
    },
    {
      content:
        "Refer to code below:Let first = 'who';Let second = 'what';Try{Try{Throw new error('Sad trombone');}catch (err){First ='Why';}finally {Second ='when';} catch (err) {Second ='Where';}What are the values for first and second once the code executes ?",
      options: [
        "A. First is who and second is where",
        "B. First is why and second is where",
        "C. First is Who and second is When",
        "D. First is why and second is when",
      ],
      answer: "D",
      title: "Question 5",
    },
    {
      content:
        "Refer to the code below:for(let number =2 ; number <= 5 ; number += 1 ) {// insert code statement here}The developer needs to insert a code statement in the location shown. The codestatement has these requirements:1. Does require an import2. Logs an error when the boolean statement evaluates to false3. Works in both the browser and Node.jsWhich meet the requirements?",
      options: [
        "A. console.error(number % 2 === 0);",
        "B. console.debug(number % 2 === 0);",
        "C. assert (number % 2 === 0);",
        "D. console.assert(number % 2 === 0);",
      ],
      answer: "A",
      title: "Question 6",
    },
    {
      content:
        "Refer to code below:console.log(0);setTimeout(() => (console.log(1);});console.log(2);setTimeout(() => {console.log(3);), 0);console.log(4);In which sequence will the numbers be logged?",
      options: ["A. 02431", "B. 13024", "C. 02413", "D. 01234"],
      answer: "C",
      title: "Question 7",
    },
    {
      content: "Which statement accurately describes an aspect of promises?",
      options: [
        "A. Arguments for the callback function passed to .then() are optional.",
        "B. In a.then() function, returning results is not necessary since callbacks will catch the result of a previous promise.",
        "C. .then() manipulates and returns the original promise.",
        "D. .then() cannot be added after a catch.",
      ],
      answer: "A",
      title: "Question 8",
    },
    {
      content:
        "myArraym can have one level, two levels, or more levels.Which statement flattens myArray when it can be arbitrarily nested?",
      options: [
        'A. myArray. join (","). split (",");',
        "B. [ ] .concat {. . .myArray) ;",
        "C. myArray.flat(Infinity);",
        "D. myArray. reduce ((prev, curr) => prev.concat(curr) [ ]);",
      ],
      answer: "D",
      title: "Question 9",
    },
    {
      content:
        "Refer to the code below:Const resolveAfterMilliseconds = (ms) => Promise.resolve (setTimeout (( => console.log(ms), ms ));Const aPromise = await resolveAfterMilliseconds(500);Const bPromise = await resolveAfterMilliseconds(500);Await aPromise, wait bPromise;What is the result of running line 05?",
      options: [
        "A. aPromise and bPromise run in parallel.",
        "B. Only aPromise runs.",
        "C. aPromise and bPromise run sequentially.",
        "D. Neither aPromise or bPromise runs.",
      ],
      answer: "D",
      title: "Question 10",
    },
    {
      content:
        "A developer creates a class that represents a blog post based on the requirement that aPost should have a body author and view count.The Code shown Below:Class Post {// Insert code hereThis.body =bodyThis.author = author;this.viewCount = viewCount;}}Which statement should be inserted in the placeholder on line 02 to allow for a variable to be setto a new instanceof a Post with the three attributes correctly populated?",
      options: [
        "A. super (body, author, viewCount) {",
        "B. constructor() {",
        "C. constructor (body, author, viewCount) {",
        "D. Function Post (body, author, viewCount) {",
      ],
      answer: "C",
      title: "Question 11",
    },
    {
      content:
        "A developer creates a generic function to log custom messages in the console. To do this,the function below is implemented.01 function logStatus(status){02 console./*Answer goes here*/{'Item status is: %s', status};03 }Which three console logging methods allow the use of string substitution in line 02?",
      options: ["A. Message", "B. Assert", "C. Info", "D. Log", "E. Error"],
      answer: "B,C,D",
      title: "Question 12",
    },
    {
      content:
        'A developer creates a simple webpage with an input field. When a user enters text inthe input field and clicks the button, the actual value of the field must be displayed in theconsole.Here is the HTML file content:<input type =" text" value="Hello" name ="input"><button type ="button" >Display </button>The developer wrote the javascript code below:Const button = document.querySelector(\'button\');button.addEvenListener(\'click\', () => (Const input = document.querySelector(\'input\');console.log(input.getAttribute(\'value\'));When the user clicks the button, the output is always "Hello".What needs to be done make this code work as expected?',
      options: [
        'A. Replace line 02 with button.addCallback("click", function() {',
        'B. Replace line 02 with button.addEventListener("onclick", function() {',
        "C. Replace line 04 with console.log(input .value);",
        "D. Replace line 03 with const input = document.getElementByName('input');",
      ],
      answer: "C",
      title: "Question 13",
    },
    {
      content:
        "Refer to the code below:Function Person(firstName, lastName, eyecolor) {this.firstName =firstName;this.lastName = lastName;this.eyeColor = eyeColor;}Person.job = 'Developer';const myFather = new Person('John', 'Doe');console.log(myFather.job);What is the output after the code executes?",
      options: [
        "A. ReferenceError: eyeColor is not defined",
        "B. Developer",
        "C. Undefined",
        'D. ReferenceError: assignment to undeclared variable "Person"',
      ],
      answer: "C",
      title: "Question 14",
    },
    {
      content:
        "Refer to the following object:const cat ={firstName: 'Fancy',lastName: ' Whiskers',Get fullName() {return this.firstName + ' ' + this.lastName;}};How can a developer access the fullName property for cat?",
      options: [
        "A. cat.function.fullName()",
        "B. cat.fullName",
        "C. cat.fullName()",
        "D. cat.get.fullName",
      ],
      answer: "B",
      title: "Question 15",
    },
    {
      content:
        "Given the following code:Counter = 0;const logCounter = () => {console.log(counter););logCounter();setTimeout(logCOunter, 1100);setInterval(() => {Counter++logCounter();}, 1000);What is logged by the first four log statements?",
      options: ["A. 0 1 1 2", "B. 0 1 2 2", "C. 0 1 2 3", "D. 0 0 1 2"],
      answer: "A",
      title: "Question 16",
    },
    {
      content:
        "Given the code below:Which method can be used to provide a visual representation of the list of users and to allow sorting by the name or email attribute?",
      options: [
        "A. console.group(usersList) ;",
        "B. console.table(usersList) ;",
        "C. console.info(usersList) ;",
        "D. console.groupCol lapsed (usersList) ;",
      ],
      answer: "A",
      title: "Question 17",
    },
    {
      content:
        "A developer at Universal Containers creates a new landing page based on HTML, CSS, andJavaScript TO ensure that visitors have a good experience, a script named personaliseContextneeds to be executed when the webpage is fully loaded (HTML content and all related files ), inorder to do some custom initialization.Which statement should be used to call personalizeWebsiteContent based on the abovebusiness requirement?",
      options: [
        "A. window.addEventListener('load',personalizeWebsiteContext);",
        "B. window.addEventListener('onload', personalizeWebsiteContext);",
        "C. Document.addEventListener('''DOMContextLoaded' , personalizeWebsiteContext);",
        "D. document.addEventListener(''onDOMContextLoaded', personalizeWebsiteContext);",
      ],
      answer: "A",
      title: "Question 18",
    },
    {
      content:
        'A developer has two ways to write a function:Option A:function Monster() {This.growl = () => {Console.log ("Grr!");}}Option B:function Monster() {};Monster.prototype.growl =() => {console.log("Grr!");}After deciding on an option, the developer creates 1000 monster objects.How many growl methods are created with Option A Option B?',
      options: [
        "A. 1 growl method is created for Option A. 1000 growl methods are created for Option B.",
        "B. 1 growl method is created regardless of which option is used.",
        "C. 1000 growl methods are created regardless of which option is used.",
        "D. 1000 growl method is created for Option A. 1 growl methods are created for Option B.",
      ],
      answer: "D",
      title: "Question 19",
    },
    {
      content:
        "Refer to the code below:What is the value of result when the code executes?",
      options: ["A. 5-10", "B. 10-5", "C. 5-5", "D. 10-10"],
      answer: "D",
      title: "Question 20",
    },
    {
      content:
        "Refer to the code snippet below:Let array = [1, 2, 3, 4, 4, 5, 4, 4];For (let i =0; i < array.length; i++){if (array[i] === 4) {array.splice(i, 1);}}What is the value of the array after the code executes?",
      options: [
        "A. [1, 2, 3, 4, 5, 4]",
        "B. [1, 2, 3, 4, 5, 4, 4]",
        "C. [1, 2, 3, 4, 4, 5, 4]",
        "D. [1, 2, 3, 5]",
      ],
      answer: "A",
      title: "Question 21",
    },
    {
      content:
        "A developer has a web server running with Node.js. The command to start the web server is node server.js. The web server started havinglatency issues. Instead of a one second turnaround for web requests, the developer now sees a five second turnaround.Which command can the web developer run to see what the module is doing during the latency period?",
      options: [
        "A. DEBUG=true node server.js",
        "B. NODE_DEBUG=http,https node server.js",
        "C. NODE_DEBUG=true node server.js",
        "D. DEBUG=http, https node server.js",
      ],
      answer: "A",
      title: "Question 22",
    },
    {
      content:
        "A developer is setting up a Node,js server and is creating a script at the root of the source code, index,js, that will start the server when executed. The developer declares a variable that needs the folder location that the code executes from.Which global variable can be used in the script?",
      options: [
        "A. _dirname",
        "B. window.location",
        "C. _filename",
        "D. this.path",
      ],
      answer: "C",
      title: "Question 23",
    },
    {
      content:
        "Universal Containers (UC) notices that its application that allows users to search foraccounts makes a network request each time a key is pressed. This results in too manyrequests for the server to handle.● Address this problem, UC decides to implement a debounce function on string changehandler.What are three key steps to implement this debounce function?Choose 3 answers:",
      options: [
        "A. Ensure that the network request has the property debounce set to true.",
        "B. When the search string changes, enqueue the request within a setTimeout.",
        "C. If there is an existing setTimeout and the search string change, allow the existingsetTimeout to finish, and do not enqueue a new setTimeout.",
        "D. If there is an existing setTimeout and the search string changes, cancel the existingsetTimeout using the persisted timerId and replace it with a new setTimeout.",
        "E. Store the timeId of the setTimeout last enqueued by the search string change handle.",
      ],
      answer: "A,B,C",
      title: "Question 24",
    },
    {
      content:
        "Refer to HTML below:<p> The current status of an Order: <span id =\"status\"> In Progress </span> </p>.Which JavaScript statement changes the text 'In Progress' to 'Completed' ?",
      options: [
        "A. document.getElementById(\"status\").Value = 'Completed' ;",
        "B. document.getElementById(\"status\").innerHTML = 'Completed' ;",
        "C. document.getElementById(\".status\").innerHTML = 'Completed' ;",
        "D. document.getElementById(\"#status\").innerHTML = 'Completed' ;",
      ],
      answer: "B",
      title: "Question 25",
    },
    {
      content:
        "Teams at Universal Containers (UC) work on multiple JavaScript projects at the same time.UC is thinking about reusability and how each team can benefit from the work of others.Going open-source or public is not an option at this time.Which option is available to UC with npm?",
      options: [
        "A. Private registries are not supported by npm, but packages can be installed via URL.",
        "B. Private packages are not supported, but they can use another package manager likeyarn.",
        "C. Private packages can be scored, and scopes can be associated to a privateregistries.",
        "D. Private registries are not supported by npm, but packages can be installed via git.",
      ],
      answer: "C",
      title: "Question 26",
    },
    {
      content:
        "Consider type coercion, what does the following expression evaluate to?True + 3 + '100' + null",
      options: ["A. '3100null'", "B. 4100", "C. '4100null'", "D. 104"],
      answer: "C",
      title: "Question 27",
    },
    {
      content:
        "Which function should a developer use to repeatedly execute code at a fixed interval ?",
      options: [
        "A. setInteria",
        "B. setPeriod",
        "C. setIntervel",
        "D. setTimeout",
      ],
      answer: "C",
      title: "Question 28",
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
      title: "Question 29",
    },
    {
      content: "Which two console logs output NaN?Choose 2 answers | |",
      options: [
        "A. console.log(parseInt ' (\"two')) ;",
        "B. console.log(10 / 0);",
        "C. console.loeg(10 / 'five');",
        "D. console.log(10 / Number('5) ) ;",
      ],
      answer: "A,C",
      title: "Question 30",
    },
    {
      content:
        "Which three actions can be using the JavaScript browser console?Choose 3 answers:",
      options: [
        "A. View and change DOM the page.",
        "B. Run code that is not related to page.",
        "C. Display a report showing the performance of a page.",
        "D. View and change security cookies.",
        "E. view , change, and debug the JavaScript code of the page.",
      ],
      answer: "A,B,E",
      title: "Question 31",
    },
    {
      content:
        "Refer to the following code that performs a basic mathematical operation on a providedinput:function calculate(num) {Return (num +10) / 3;}How should line 02 be written to ensure that x evaluates to 6 in the line below?Let x = calculate (8);",
      options: [
        "A. Return Integer(num +10) /3;",
        "B. Return (Number (num +10 ) / 3;",
        "C. Return Number((num +10) /3 );",
        "D. Return Number(num + 10) / 3;",
      ],
      answer: "B",
      title: "Question 32",
    },
    {
      content: "Given the following code:is the output of line 02?",
      options: [
        "A. ''undefined''",
        "B. ''object''",
        "C. ''null'''",
        "D. ''x''",
      ],
      answer: "B",
      title: "Question 33",
    },
    {
      content:
        "Which option is true about the strict mode in imported modules?",
      options: [
        "A. Imported modules are in strict mode whether you declare them as such or not.",
        "B. Add the statement use non-strict, before any other statements in the module to enablenot-strict mode.",
        "C. You can only reference notStrict() functions from the imported module.",
        "D. Add the statement use strict =false; before any other statements in the module to enablenot- strict mode.",
      ],
      answer: "C",
      title: "Question 34",
    },
    {
      content:
        "A class was written to represent items for purchase in an online store, and a second classRepresenting items that are on sale at a discounted price. THe constructor sets the name to thefirst value passed in. The pseudocode is below:Class Item {constructor(name, price) {... // Constructor Implementation}}Class SaleItem extends Item {constructor (name, price, discount) {...//Constructor Implementation}}There is a new requirement for a developer to implement a description method that will return abrief description for Item and SaleItem.Let regItem =new Item('Scarf', 55);Let saleItem = new SaleItem('Shirt' 80, -1);Item.prototype.description = function () { return 'This is a ' + this.name;console.log(regItem.description());console.log(saleItem.description());SaleItem.prototype.description = function () { return 'This is a discounted ' +this.name; }console.log(regItem.description());console.log(saleItem.description());What is the output when executing the code above ?",
      options: [
        "A. This is a ScarfUncaught TypeError: saleItem.description is not a functionThis is aScarfThis is a discounted Shirt",
        "B. This is a ScarfThis is a ShirtThis is a discounted ScarfThis is a discounted Shirt",
        "C. This is aScarfUncaught TypeError: saleItem.description is not a functionThis is a ShirtThis is a did counted Shirt",
        "D. This is a ScarfThis is a ShirtThis is a ScarfThis is a discounted Shirt",
      ],
      answer: "D",
      title: "Question 35",
    },
    {
      content:
        "Refer to the code below:Which value can a developer expect when referencing country,capital,cityString?",
      options: ["A. 'London'", "B. An error", "C. 'NaN'", "D. undefined"],
      answer: "C",
      title: "Question 36",
    },
    {
      content:
        "A developer wrote a fizzbuzz function that when passed in a number, returns thefollowing:● 'Fizz' if the number is divisible by 3.● 'Buzz' if the number is divisible by 5.● 'Fizzbuzz' if the number is divisible by both 3 and 5.● Empty string if the number is divisible by neither 3 or 5.Which two test cases will properly test scenarios for the fizzbuzz function?Choose 2 answers",
      options: [
        "A. let res = fizzbuzz(15);console.assert ( res === ' fizzbuzz ' )",
        "B. let res = fizzbuzz(5);console.assert ( res === ' ' );",
        "C. let res = fizzbuzz(Infinity);console.assert ( res === ' ' )",
        "D. let res = fizzbuzz(3);console.assert ( res === ' buzz ' )",
      ],
      answer: "A,C,D",
      title: "Question 37",
    },
    {
      content:
        "Given the following code:Let x =('15' + 10)*2;What is the value of a?",
      options: ["A. 50", "B. 35", "C. 3020", "D. 1520"],
      answer: "C",
      title: "Question 38",
    },
    {
      content:
        "Universal Container(UC) just launched a new landing page, but users complain that thewebsite is slow. A developer found some functions that cause this problem. To verify this, thedeveloper decides to do everything and log the time each of these three suspicious functionsconsumes.console.time('Performance');maybeAHeavyFunction();thisCouldTakeTooLong();orMaybeThisOne();console.endTime('Performance');Which function can the developer use to obtain the time spent by every one of the threefunctions?",
      options: [
        "A. console.getTime()",
        "B. console.trace()",
        "C. console.timeStamp()",
        "D. console.timeLog()",
      ],
      answer: "D",
      title: "Question 39",
    },
    {
      content:
        'developer removes the HTML class attribute from the checkout button, so now it issimply:<button>Checkout</button>.There is a test to verify the existence of the checkout button, however it looks for a button withclass= "blue". The test fails because no such button is found.Which type of test category describes this test?',
      options: [
        "A. False negative",
        "B. False positive",
        "C. True positive",
        "D. True negative",
      ],
      answer: "A",
      title: "Question 40",
    },
    {
      content:
        "In the browser, the window object is often used to assign variables that require the broadest scope in an application Node.js application does not have access to the window object by default.Which two methods are used to address this ?Choose 2 answers",
      options: [
        "A. Assign variables to module.exports and require them as needed.",
        "B. Create a new window object in the root file.",
        "C. Assign variables to the global object.",
        "D. Use the document object instead of the window object.",
      ],
      answer: "C",
      title: "Question 41",
    },
    {
      content:
        "Refer to the code below:console.log(''start);Promise.resolve('Success') .then(function(value){console.log('Success');});console.log('End');What is the output after the code executes successfully?",
      options: [
        "A. StartSuccessEnd",
        "B. StartEndSuccess",
        "C. EndStartSuccess",
        "D. SuccessStartEnd",
      ],
      answer: "B",
      title: "Question 42",
    },
    {
      content:
        'A developer uses a parsed JSON string to work with user information as in the block below:01 const userInformation ={02 " id " : "user-01",03 "email" : "[email protected]",04 "age" : 25Which two options access the email attribute in the object?Choose 2 answers',
      options: [
        'A. userInformation.get("email")',
        "B. userInformation(email)",
        "C. userInformation.email",
        'D. userInformation("email")',
      ],
      answer: "C,D",
      title: "Question 43",
    },
    {
      content:
        "Refer of the string below:Const str = 'sa;esforce'=;Which two statement result in the word 'Sale'?Choose 2 answers",
      options: [
        "A. str, substr(1,5) ;",
        "B. str, substr(0,5) ;",
        "C. str, substring(1,5) ;",
        "D. str, substring (0,5) ;",
      ],
      answer: "B,D",
      title: "Question 44",
    },
    {
      content:
        "Universal Containers recently launched its new landing page to host a crowd-fundingcampaign. The page uses an external library to display some third-party ads. Once the page isfully loaded, it creates more than 50 new HTML items placed randomly inside the DOM, like theone in the code below:All the elements includes the same ad-library-item class, They are hidden by default, and they are randomly displayed while the user navigates through the page.",
      options: [
        "A. Use the browser to execute a script that removes all the element containing the class ad-library-item.",
        "B. Use the browser console to execute a script that prevents the load event to be fired.",
        "C. Use the DOM inspector to remove all the elements containing the class ad-library-item.",
        "D. Use the DOM inspector to prevent the load event to be fired.",
      ],
      answer: "A",
      title: "Question 45",
    },
    {
      content:
        "Refer to the code:Given the code above, which three properties are set pet1?Choose 3 answers:",
      options: ["A. Owner", "B. Size", "C. Type", "D. Name", "E. canTalk"],
      answer: "B,C,E",
      title: "Question 46",
    },
    {
      content:
        "A developer has the following array of student test grades:Let arr = [ 7, 8, 5, 8, 9 ];The Teacher wants to double each score and then see an array of the studentswho scored more than 15 points.How should the developer implement the request?",
      options: [
        "A. Let arr1 = arr.map((num) => ( num *2)).filterBy((val) => ( val >15 ));",
        "B. Let arr1 = arr.mapBy (( num) => ( return num *2 )) .filterBy (( val ) => return val > 15 )) ;",
        "C. Let arr1 = arr.map((num) => num*2). Filter (( val) => val > 15);",
        "D. Let arr1 = arr.filter(( val) => ( return val > 15 )) .map (( num) => ( return num *2 ))",
      ],
      answer: "C",
      title: "Question 47",
    },
    {
      content:
        "Given the code below:const copy = JSON.stringify([ new String(' false '), new Bollean( false ), undefined ]);What is the value of copy?",
      options: [
        'A. -- [ \\"false\\" ,false, null ]--',
        "B. -- [ false, { } ]--",
        'C. -- [ \\"false\\" , false, undefined ]--',
        'D. -- [ \\"false\\" , { } ]--',
      ],
      answer: "A",
      title: "Question 48",
    },
    {
      content:
        "Refer to the code below:01 const server = require('server');02 /* Insert code here */A developer imports a library that creates a web server. The imported library uses events andcallbacks to start the serversWhich code should be inserted at the line 03 to set up an event and start the web server ?",
      options: [
        "A. server()",
        "B. server.on(' connect ' , ( port) => {console.log('Listening on ' , port) ;})",
        "C. console.log( 'Listening on ', port) ;",
        "D. serve(( port) => (",
        "E. Server.start ();",
      ],
      answer: "B",
      title: "Question 49",
    },
    {
      content:
        "A developer wants to leverage a module to print a price in pretty format, and has imported a method as shown below:Import printPrice from '/path/PricePrettyPrint.js';Based on the code, what must be true about the printPrice function of the PricePrettyPrint module for this import to work ?",
      options: [
        "A. printPrice must be an all export",
        "B. printPrice must be a multi exportc",
        "C. printPrice must be be a named export",
        "D. printPrice must be the default export",
      ],
      answer: "D",
      title: "Question 50",
    },
    {
      content:
        "Given the code below:const delay = sync delay => {Return new Promise((resolve, reject) => {setTimeout (resolve, delay);});};const callDelay =async () =>{const yup =await delay(1000);console.log(1);What is logged to the console?",
      options: ["A. 2 1 3", "B. 1 3 2", "C. 1 2 3", "D. 2 3 1"],
      answer: "D",
      title: "Question 51",
    },
    {
      content:
        "Given the following code:document.body.addEventListener(' click ', (event) => {if (/* CODE REPLACEMENT HERE */) {console.log('button clicked!');)});Which replacement for the conditional statement on line 02 allows a developer tocorrectly determine that a button on page is clicked?",
      options: [
        "A. event.target.nodeName == 'BUTTON'",
        "B. button.addEventListener('click')",
        "C. e.nodeTarget ==this",
        "D. Event.clicked",
      ],
      answer: "A",
      title: "Question 52",
    },
    {
      content:
        "Given the expressions var1 and var2, what are two valid ways to return the concatenation of the two expressions and ensure it is string? Choose 2 answers",
      options: [
        "A. var1 + var2",
        "B. var1.toString ( ) var2.toString ( )",
        "C. String (var1) .concat (var2)",
        "D. string.concat (var1 +var2)",
      ],
      answer: "B,D",
      title: "Question 53",
    },
    {
      content:
        'A developer wants to iterate through an array of objects and count the objects and countthe objects whose property value, name, starts with the letter N.Const arrObj = [{"name" : "Zach"} , {"name" : "Kate"},{"name" : "Alise"},{"name" : "Bob"},{"name" :"Natham"},{"name" : "nathaniel"}Refer to the code snippet below:01 arrObj.reduce(( acc, curr) => {02 //missing line 0202 //missing line 0304 ). 0);Which missing lines 02 and 03 return the correct count?',
      options: [
        "A. Const sum = curr.startsWIth('N') ? 1: 0;Return curr+ sum",
        "B. Const sum = curr.startsWith('N') ? 1: 0;Return acc +sum",
        "C. Const sum = curr.name.startsWIth('N') ? 1: 0;Return curr+ sum",
        "D. Const sum = curr.name.startsWith('N') ? 1: 0;Return acc +sum",
      ],
      answer: "D",
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
        'Refer to the code below:let o = {get js() {let city1 = String("st. Louis");let city2 = String(" New York");return {firstCity: city1.toLowerCase(),secondCity: city2.toLowerCase(),}}}What value can a developer expect when referencing o.js.secondCity?',
      options: [
        "A. An error",
        "B. ' New York '",
        "C. ' new york '",
        "D. Undefined",
      ],
      answer: "C",
      title: "Question 56",
    },
    {
      content:
        "developer is trying to convince management that their team will benefit from usingNode.js for a backend server that they are going to create. The server will be a web server thathandles API requests from a website that the team has already built using HTML, CSS, andJavaScript.Which three benefits of Node.js can the developer use to persuade their manager?Choose 3 answers:",
      options: [
        "A. I nstalls with its own package manager to install and manage third-party libraries.",
        "B. Executes server-side JavaScript code to avoid learning a new language.",
        "C. User non blocking functionality for performant request handling .",
        "D. Performs a static analysis on code before execution to look for runtime errors.",
        "E. Ensures stability with one major release every few years.",
      ],
      answer: "A,C,D",
      title: "Question 57",
    },
    {
      content:
        "A developer wants to create an object from a function in the browser using the codebelow:Function Monster() { this.name = 'hello' };Const z = Monster();What happens due to lack of the new keyword on line 02?",
      options: [
        "A. Window.m is assigned the correct object.",
        "B. The z variable is assigned the correct object but this.name remains undefined.",
        "C. The z variable is assigned the correct object.",
        "D. Window.name is assigned to 'hello' and the variable z remains undefined.",
      ],
      answer: "D",
      title: "Question 58",
    },
    {
      content:
        "A test has a dependency on database.query. During the test the dependency is replacedwith an object called database with the method, query, that returns an array. Thedeveloper needs to verify how many times the method was called and the argumentsused each time.Which two test approaches describe the requirement?Choose 2 answers",
      options: ["A. White box", "B. Black box", "C. Integration", "D. Mocking"],
      answer: "A,D",
      title: "Question 59",
    },
    {
      content:
        "Given the requirement to refactor the code above to JavaScript class format, which classdefinition is correct?A)B)C)D)",
      options: ["A. Option C", "B. Option A", "C. Option B", "D. Option D"],
      answer: "B",
      title: "Question 60",
    },
  ],
});
