window.testContent = window.testContent || [];
var testId = "Salesforce.B2C-Commerce-Developer";
var testName = "Salesforce.B2C-Commerce-Developer";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "Salesforce.B2C-Commerce-Developer.v2022-05-28.q97",
  content: [
    {
      content:
        "Given the file structure below, which ISML method call renders the customLandingPage template?",
      options: [
        "A. ISML.renderTamplate('cartridge/templates/default/content/custom/customLandingPage');",
        "B. ISML('content/custom/customLandingPage');",
        "C. ISML.render('content/custom/customLandingPage');",
        "D. ISML.renderTemplate('content/custom/customLandingPage');",
      ],
      answer: "D",
      title: "Question 1",
    },
    {
      content:
        "A merchant wants customers to be able to order gift vouchers via their site. Since they can issue an unlimited number of these digital vouchers, this item should be available to sell at all items.How can a developer use Business Manager to ensure that the gift vouchers are always available?",
      options: [
        "A. Set StockLevel = maxAllocation for the producto.",
        "B. Check the Available to Sell (ATS) flag dor the producto set",
        "C. Manually set the inventory to a high number.",
        "D. Check the perpetual flag in the product inventory record",
      ],
      answer: "D",
      title: "Question 2",
    },
    {
      content:
        "A developer working on a multi-country site is asked to store country-specific data that drives the creation of a country selector. Examples of the data stored are:* Pricebook to be used* Image URL for country flagThe data used in staging also applies in production, but only for this site.Which approach should the developer take to implement these requirements?",
      options: [
        "A. Create a replicable, site-specific Custom Object with the custom data for each country",
        "B. Create site-specific content assets to store the data for each country",
        "C. Extend the Locale System Object to contain the custom data for each country",
        "D. Create a replicable, organization scope Custom Object with the custom data for each country",
      ],
      answer: "C",
      title: "Question 3",
    },
    {
      content:
        "A Digital Developer has been given a requirement to add fault tolerance to an existing web service integration that uses Service Framework. Administrators at Universal Containers need to be able to configure the timeout and rate limiting.Which approach should the Developer use to implement the requirement?",
      options: [
        "A. Create a site preference to store timeout settings and implement an IOException handler to execute fallback code.",
        "B. Implement a ServiceUnavailableException exception handler to execute fallback code.",
        "C. Implement a condition that checks to see if the response was empty and execute fallback code if true.",
        "D. Use the setTimeout method to execute fallback code if the request has NOT completed.",
      ],
      answer: "B",
      title: "Question 4",
    },
    {
      content:
        "A developer is writing a server side script that needs to maintain state across calls. The persistent information needed includes these items.* The current customer* Whether or not the customer is authenticated* The privacy attributes (such as tracking consent or cookie policy)Which technique should the developer use to maintain state in an efficient and scalable manner that follows best practice?",
      options: [
        "A. Use the Session class in the B2C Commerce api.",
        "B. Use a client-side cookie to store the information for the session duration.",
        "C. Use an SFRA controller, because it runs server-side, the state is automatically maintained",
        "D. Use a non-replicable Custom Object to store the information temporarily.",
      ],
      answer: "A",
      title: "Question 5",
    },
    {
      content:
        "A digital instance has one site, with one master product catalog separate from the site catalog. Some, but NOT all, products in the master catalog are assigned to categories of the site catalog.",
      options: [
        "A. Use the Catalog Export module to export the master catalog, with a category-assignment search to export specific products.",
        "B. Using Business Manager, how can a Digital Developer create a catalog export file that contains only the products assigned to the site catalog?",
        "C. Use the Site Import & Export module to export both the site catalog and the master catalog in a single archive.",
        "D. Use the Catalog Export module to export the site catalog.",
        "E. Use the Site Import & Export module to export the master catalog, filtered by site catalog categories to export specific products.",
      ],
      answer: "E",
      title: "Question 6",
    },
    {
      content:
        "To ensure SFRA best practices and protect against request forgery, the developer introduced CSRF token generation in the customer address form. To implement CSRF protection when the form is submitted, the developer needs to introduce the CSRF validation using one or both of these methods as applicable:* validateRequest* validateAjaxRequestWhere in the code does the developer need to add this CSRF validation check?",
      options: [
        "A. In the middleware chain of the controller post route",
        "B. In the view function that handles the submitted form",
        "C. In the controller function that displays the form",
        "D. In the model function that persists the form data",
      ],
      answer: "A",
      title: "Question 7",
    },
    {
      content:
        "A Digital Developer is implementing an Open Commerce API call to add products to a basket. Given the following resource configuration: Which modification allows the requests to successfully execute?",
      options: [
        'A. Change the "resource_id" value to: "/baskets/*/items".',
        'B. Change the "read_attributes" value to: " (items) ".',
        'C. Change the "write_attributes" value to: " (+items) ".',
        'D. Change the "methods" value to: ["get", "post"].',
      ],
      answer: "A",
      title: "Question 8",
    },
    {
      content:
        "A Digital Developer added a file named MyBusinessController.jsin the cartridge named app_project.The project design calls for this new file to override MyBusinessController.js in client_project. The client_projectcartridge contains other necessary functionality. Additional functionality is also included in the storefront_coreand storefront_controllerscartridges.Which cartridge path meets the project requirements?",
      options: [
        "A. client_project:app_project:storefront_controllers:storefront_core",
        "B. app_project:storefront_controllers:storefront_core",
        "C. app_project:client_project:storefront_controllers:storefront_core",
        "D. storefront_core:storefront_controllers:client_project:app_project",
      ],
      answer: "C",
      title: "Question 9",
    },
    {
      content:
        "A Digital Developer is working on a multi-site realm. A new site requires a different layout for the account landing page. The business logic and data model remain the same. The existing code is in AccountCoatrol.-s and accountlanding.isul in the app_at storefront cartridge The app_3torefront cartridge contains code for all other business functions. The cartridge path for the new site is currently int_cybersource:mc_];aypal:app_storefront.The Developer creates a new cartridge named app_newsire that contains only the accountlanding.isml template for the new site.Which modification should be made to the new cartridge path?",
      options: [
        "A. Set the cartridge path so that app_storefront is before int_cybersource.",
        "B. Set the cartridge path to include only app_newsite.",
        "C. Set the cartridge path so that app_newsite is before app_storefront.",
        "D. Set the cartridge path so that app_newsite is after app_storefront.",
      ],
      answer: "C",
      title: "Question 10",
    },
    {
      content:
        "Given the following snippet:* Server.append( 'Show' , function (req, res, next) )According to SFRA, which two options shows a correct way to complete the code above in order to provide data to the response using a controller?Choose 2 answers",
      options: [
        "A. res.viewData = {data: myDataObject};res.render('/content/myPage');next();});",
        "B. res.render('/content/myPage',{data: myDataObject});next();});",
        "C. res.render('/content/myPage');next();}).append{(Data:myDataObject});",
        "D. res.setViewData ({data: myDataObject});res.render('/content/myPage');next();});",
      ],
      answer: "B",
      title: "Question 11",
    },
    {
      content:
        "A Digital Developer is working in a sandbox on a site named test-siteusing the domain test.demandware.net. The Developer needs to compile a url to make an Open Commerce API (OCAPI) request that returns product information.By default, which URL format is a proper Open Commerce API for Sandbox?",
      options: [
        "A. https://test.demandware.com/dw/shop/products/M1355?client_id=aaa...",
        "B. https://www.test.com/s/test-site/sfc/shop/products/M1355?client_id=aaa...",
        "C. https://test.demandware.net/s/test-site/dw/shop/v18_3/products/M1355?client_id=aaa...",
        "D. https://www.test.com/dw/shop/v18_3/products/M1355?client_id=aaa...",
      ],
      answer: "C",
      title: "Question 12",
    },
    {
      content:
        "A Digital Developer has Identified that the code segment below is causing performance problems. What should the Developer do to improve the code?",
      options: [
        "A. Use a system attribute instead of the isOnSaleFlag custom attribute.",
        "B. Avoid using an Iterator and use a Collection instead.",
        "C. Avoid post-processing and use the isOnSaleFlag attribute as a search refinement.",
        "D. Break the process into separate loops.",
      ],
      answer: "C",
      title: "Question 13",
    },
    {
      content:
        "A Digital Developer needs to add a new form to the shopping cart page to allow customers to enter their rewards pass ID. There is already an existing Cart.jscontroller that handles processing of the other cart forms. In addition, a form field node is in the form XML and the necessary form input is present in the ISML template.The code below is the submit button for the ISML markup. What additional steps must occur before the Digital Developer can begin writing the processing code for this request?",
      options: ["A. ", "B. ", "C. ", "D. "],
      answer: "C",
      title: "Question 14",
    },
    {
      content:
        "A Digital Developer is requesting product information for an external integration. The following Open Commerce API (OCAPI) request is NOT functioning correctly: How should the Developer change the request?",
      options: [
        "A. Change the URI to /dw/shop/v18_3/products/creative-zen-v.",
        "B. Change the HTTP method to PUT.",
        "C. Change the HTTP method to GET.",
        "D. Include an authentication token in the request.",
      ],
      answer: "C  Explanation ",
      title: "Question 15",
    },
    {
      content:
        "A business user wants to add a link to a content page from within the body of another content asset. The target content asset ID is: terms-and-conditions.Which link function generates the correct link?",
      options: [
        "A. $include('Page-Include', 'cid', 'terms-and-conditions')$",
        "B. $http('Content-Page', 'cid', 'terms-and-conditions')$",
        "C. $httpUrl('Content-Show', 'cid', 'terms-and-conditions')$",
        "D. $url('Page-Show', 'cid', 'terms-and-conditions')$",
      ],
      answer: "C",
      title: "Question 16",
    },
    {
      content:
        "A Digital Developer needs to check for product inventory in a specific inventory list using the Open Commerce API.An example request URL is: Which resource_id value enables the appropriate resource?",
      options: [
        "A. /inventory_lists/*",
        "B. /inventory_list_search",
        "C. /inventory_lists/**",
        "D. /products/*",
      ],
      answer: "D",
      title: "Question 17",
    },
    {
      content:
        "Given the requirements:* To show the washing instructions for a clothing product on a dedicated section the detail page* Washing instructions come from the product information manager(PIM)* To have this attribute available to localize in the Storefront.Which action meets these requirements?",
      options: [
        "A. Add a custom attribute for each locale",
        "B. Set the product system object type as localizable",
        "C. Add a resource file for every locale for which the attribute needs to be translated.",
        "D. Set the custom attribute as localizable",
      ],
      answer: "D",
      title: "Question 18",
    },
    {
      content:
        "A developer wants to add a link to the My Account Page.What is the correct code to accomplish this?",
      options: [
        "A. <a href=\"${URLUtils.url('Account-Show')}>${Resource.msg('myaccount','account',null)}</a>",
        "B. <a href=\"${url.get('Account-Show')}>${Resource.message('myaccount')}</a>",
        "C. <ahref=\"${URLUtils.get('Account-Show')}>${Resource.msg('myaccount','account',request.locale())}</a>",
        "D. <a href=\"${URLUtils('Account-Show')}>${ResourceMgr.getPropierties('myaccount','account',null)}</a>",
      ],
      answer: "A",
      title: "Question 19",
    },
    {
      content:
        "A Digital Developer wants to selectively retrieve products and process them from an iPhone.Which action should the Developer take, given that JavaScript controllers CANNOT be used?",
      options: [
        "A. Create a webservice to retrieve products.",
        "B. Use WebDAV Client to retrieve products.",
        "C. Use OCAPI and invoke it in native language.",
        "D. Use import/export in Business Manager.",
      ],
      answer: "B",
      title: "Question 20",
    },
    {
      content:
        "Given the requirements:* To integrate with an external web service using HTTP requests.* To create a service for this purpose with the Service framework using the LocalServiceRegistry class.* To test the service before the external service provider makes the API available.Which solution allows the developer to satisfy the requirements?",
      options: [
        "A. Create a service and a Sitepreference that induce the service to respond with a mock response using a conditional.",
        "B. Create a service and implement the mockFull callback and a sitepreference to enable or disable the mock response.",
        "C. Create two services, one mock and the real one, and a Sitepreference that enable the mock or the real one.",
        "D. Create a service and implement the mockFull callback and set the service mode to mock.",
      ],
      answer: "B",
      title: "Question 21",
    },
    {
      content:
        "A Digital Developer has identified that the code segment below is causing performance problems. What should the Developer do to improve the code?",
      options: [
        "A. Avoid using an Iterator and use a Collection instead.",
        "B. Use a system attribute instead of the isOnSaleFlag custom attribute.",
        "C. Avoid post-processing and use the isOnSaleFlag attribute as a search refinement.",
        "D. Breaks the process into separate loops.",
      ],
      answer: "D",
      title: "Question 22",
    },
    {
      content:
        'Assume the code below is executing: Business Manager has the configuration:* Active Log category is "root" with log level of "info."Given this information, what is the beginning of the filename in which the log will be written?',
      options: [
        "A. custom-export",
        "B. xyz",
        "C. custom-xyz",
        "D. custominfo-blade",
      ],
      answer: "C",
      title: "Question 23",
    },
    {
      content:
        "Universal Containers has expanded its implementation to support German with a locale code of de. The current resource bundle is checkout.properties.To which file should the developer add German string values?",
      options: [
        "A. de_checkout.properties in resources folder",
        "B. checkout.properties in the de locale folder",
        "C. checkout_de.properties in resources folder",
        "D. checkout.properties in the default locale folder",
      ],
      answer: "A",
      title: "Question 24",
    },
    {
      content:
        "A Digital Developer is requesting product information for an external integration. The following Open Commerce API (OCAPI) request is NOT functioning correctly: How should the Developer change the request?",
      options: [
        "A. Change the HTTP method to GET.",
        "B. Include an authentication token in the request.",
        "C. Change the HTTP method to PUT.",
        "D. Change the URI to /dw/shop/v18_3/products/creative-zen-v.",
      ],
      answer: "A",
      title: "Question 25",
    },
    {
      content:
        "The following code ensures that an address ID CANNOT be used if it is already in use by another address in the customer's address book. There is a problem with the code. The error message for an invalid address ID is never shown to the user on the form field. How should the Digital Developer resolve this issue so that the error message is displayed on the address ID form field?",
      options: [
        "A. addressForm.invalidateFormElement(addressForm.addressid);",
        "B. addressForm.addressid.invalidateFormElement();",
        'C. addressForm.invalidateFormElement("addressid");',
        "D. addressForm.addressid.invalidateFormElement = true;",
      ],
      answer: "C",
      title: "Question 26",
    },
    {
      content:
        "A Digital Developer is working on a project to convert a pipeline to a JavaScript controller. UX Studio has a functioning pipeline debugger configured for the site. Assume the Developer will add a breakpoint to the controller when it is written.What must be done in order to use the debugger with the new controller when it is written?",
      options: [
        "A. Use the existing pipeline debugger.",
        "B. Modify the debugger configuration and use the existing pipeline debugger.",
        "C. Create and use a new script debug configuration.",
        "D. Create and use a new controller debug configuration.",
      ],
      answer: "B",
      title: "Question 27",
    },
    {
      content:
        "In Log Center, a developer notes a number of Cross Site Request Forgery (CSRF) log entries. The developer knows that this happens when a CSRF token is either not found or is invalid, and is working to remedy the situation as soon as possible.Which two courses of action might solve the problem? (Choose two.)",
      options: [
        "A. Add the token in the ISML template",
        "B. Extend the CSRF token validity to avoid timeouts",
        "C. Delete the existing CSRF whitelists in Business Manager",
        "D. Add csrfProtection.generateToken as a middleware step in the controller",
      ],
      answer: "B,C",
      title: "Question 28",
    },
    {
      content:
        "A developer wants to create in Business Manager extension with the cartridge named plugin_vm_extension.Which two steps should the developer take for the extension option to show up in Business Manager?Choose 2 answers:",
      options: [
        "A. Add plugin_bm_extension to the cartridge path under business manager cartridge site",
        "B. Add the appropiate roles and permission to the user to view the business manager extension.",
        "C. Add plugin_bm_extension to the cartridge path under Storefront cartridge site path.",
        "D. Activate a new code version for the Business Manager Site.",
      ],
      answer: "A,D ",
      title: "Question 29",
    },
    {
      content:
        'A Digital Developer has a new requirement to disable the "Discover" credit card type for all checkouts.What does the Developer need to change in Business Manager to fulfill this requirement?',
      options: [
        "A. Credit cards in the Merchant Tools > Ordering > Payment Methods module.",
        "B. Credit card exclusion rules in the Merchant Tools > Site Preferences > Payment Preferences module.",
        "C. Checkout exclusion rules in the Merchant Tools > Site Preferences > Checkout Preferences module.",
        "D. Credit card exclusion rules in the CreditCardType.json configuration file.",
      ],
      answer: "A",
      title: "Question 30",
    },
    {
      content:
        "A developer is working on a new site for the U.S based on an existing Canadian site. One of the requirements is a change to the address form. The current Canadian form has an <options> list with the correct two-letter abbreviation for the provinces.The U.S. requirements are to:* Have an <options> list with the correct two-letter abbreviation for the states in place of the province field.* Set the U.S site locale.* Add the options list field definition to the XML file.How should the developer set up the files before making the required edits?",
      options: [
        "A. Create a copy of existing address.xml file in the default folder. Rename that file to address_en_US.xml",
        "B. Create a copy of existing address.xml file in the default folder. Rename that file to adres_US.xml",
        "C. Create a new sub-folder in the forms folder. Name it US. Copy existing address.xml file in the new folder.",
        "D. Create a new sub-folder in the forms folder. Name it en_US. Copy existing address.xml file in the new folder.",
      ],
      answer: "D",
      title: "Question 31",
    },
    {
      content:
        "When inspecting the weekly service status report for a critical internally hosted web service used in the application, a developer notices that there are too many instances of unavailability.Which two solutions can reduce the unavailability of the service?Choose 2 answers.",
      options: [
        "A. Update the service to have a faster response time.",
        "B. Modify the code that makes the request to the external service to be wrapped in a try/catch block.",
        "C. Increase the web service time out",
        "D. Change the code that sets the throwOnError attribute of the service to be true.",
      ],
      answer: "B,C ",
      title: "Question 32",
    },
    {
      content:
        "A Digital Developer added a file named MyBusinessController. js in the cartridge named app_project. The project design calls for this new file to override MyBusinessControiier.3s in claient_project. The client_project cartridge contains other necessary functionality. Additional functionality is also included in the storefront_core and storefront_controliers cartridges.Which cartridge path meets the project requirements?",
      options: [
        "A. client_project:app_project:storefront_controllers:storefront_core",
        "B. storefront_core:storefront_controllers:client_project:app_project",
        "C. app_project:client_project:storefront_controllers:storefront_core",
        "D. app_project:storefront_controllers:storefront_core",
      ],
      answer: "C",
      title: "Question 33",
    },
    {
      content:
        "A Digital Developer is asked to optimize controller performance by lazy loading scripts as needed instead of loading a scripts at the start of the code execution.Which statement should the Developer use to lazy load scripts?",
      options: [
        "A. require ( ) method",
        "B. import Package ( ) method",
        "C. $.ajax ( ) jQuery method",
        "D. local include",
      ],
      answer: "A",
      title: "Question 34",
    },
    {
      content:
        "A developer has a sandbox configured with a service and its profile and credential.. Now there is a requirement to allow changes to the service URL manually from the sandbox.Which B2C feature should the developer use to achieve the request?",
      options: [
        "A. Use the service credential URL field",
        "B. Use a Globalpreference dedicated for the service URL",
        "C. Use a Sitepreference dedicated for the service URL",
        "D. Use the service status area, set the override URL checkbox, and then populate the URL field with the required one.",
      ],
      answer: "A",
      title: "Question 35",
    },
    {
      content:
        "A Digital Developer has identified that the code segment below is causing performance problems. What should the Developer do to improve the code?",
      options: [
        "A. Breaks the process into separate loops.",
        "B. Avoid using an Iterator and use a Collection instead.",
        "C. Avoid post-processing and use the isOnSaleFlag attribute as a search refinement.",
        "D. Use a system attribute instead of the isOnSaleFlag custom attribute.",
      ],
      answer: "A",
      title: "Question 36",
    },
    {
      content:
        "A Digital Developer is working in a sandbox on a site named test-site using the domain test.demandware.net.The Developer needs to compile a url to make an Open Commerce API (OCAPI) request that returns product information.By default, which URL format is a proper Open Commerce API for Sandbox?",
      options: [
        "A. https://www.test.com/dw/shop/v18_3/products/M1355?client_id=aaa...",
        "B. https://test.demandware.com/dw/shop/products/M1355?client_id=aaa...",
        "C. https://www.test.com/s/test-site/sfc/shop/products/M1355?client_id=aaa...",
        "D. https://test.demandware.net/s/test-site/dw/shop/v18_3/products/M1355?client_id=aaa...",
      ],
      answer: "D",
      title: "Question 37",
    },
    {
      content:
        "A Digital Developer suspects a logical error in a script.Which action will help locate the error?",
      options: [
        "A. Put breakpoints in the code, debug, and examine variable values.",
        "B. Print all values in the script node called before the current script.",
        "C. Submit a support ticket to B2C Commerce.",
        "D. Check request logs for evidence of the logical error.",
      ],
      answer: "D",
      title: "Question 38",
    },
    {
      content:
        "Which code sample is required to use a custom tag provided in SiteGenesis in an ISML template?",
      options: ["A. Option D", "B. Option A", "C. Option C", "D. Option B"],
      answer: "D",
      title: "Question 39",
    },
    {
      content:
        "A developer is asked to improve the maintainability of a page by reducing its code repetition.What are two techniques the developer should implement to achieve this?Choose 2 answers.",
      options: [
        "A. Implement template decorators paired with replace tags",
        "B. Use local template includes",
        "C. Embed partial files using ISML expressions",
        "D. Require and render templates with <isscript> tags",
      ],
      answer: "A,B",
      title: "Question 40",
    },
    {
      content:
        "Universal Containers sells physical gift cards for the holidays.What needs to occur to guarantee the cards will always be available?",
      options: [
        "A. Create an inventory record with an unlimited Allocation value.",
        "B. Create an inventory record with Backorder Handling enabled.",
        "C. Create an inventory record with an extremely high Allocation value (i.e., 1 billion certificates).",
        "D. Create a perpetual inventory record.",
      ],
      answer: "D",
      title: "Question 41",
    },
    {
      content:
        "A Digital Developer is working on a multi-site realm. A new site requires a different layout for the account landing page. The business logic and data model remain the same. The existing code is in AccountControl.js and accountlanding.isml in the app_storefront cartridge. The app_storefront cartridge contains code for all other business functions. The cartridge path for the new site is currently int_cybersource:int_paypal:app_storefront.The Developer creates a new cartridge named app_newsite that contains only the accountlanding.isml template for the new site.Which modification should be made to the new cartridge path?",
      options: [
        "A. Set the cartridge path to include only app_newsite.",
        "B. Set the cartridge path so that app_newsite is before app_storefront.",
        "C. Set the cartridge path so that app_newsite is after app_storefront.",
        "D. Set the cartridge path so that app_storefront is before int_cybersource.",
      ],
      answer: "D",
      title: "Question 42",
    },
    {
      content:
        "A merchant asks a developer to create a Cache Partition for the home page, so that when the home page is edited, only the home page is cleaned.Given the above requirement, where should the developer create that partition in Business Manager?",
      options: [
        "A. Operations > Cache > Site",
        "B. Operations > Site > Manage Sites > Cache",
        "C. Administration > Sites > Manage Sites > Site > Cache",
        "D. Site > Site Preferences > Cache",
      ],
      answer: "C",
      title: "Question 43",
    },
    {
      content:
        "A developer needs to update the package.json file so that it points to the hock file for a cartridge, using the hooks keyword. Which snippets work correctly when added to the file?:",
      options: [
        'A. { hooks: "./cartridge/scripts/hooks.json" }',
        'B. { "hooks": "./scripts/hooks.json" }',
        'C. { "hooks": "./cartridge/scripts/hooks.json" }',
        "D. { hooks: ./scripts/hooks.json }",
      ],
      answer: "C",
      title: "Question 44",
    },
    {
      content:
        "A Digital Developer is implementing an Open Commerce API call to add products to a basket. Given the following resource configuration: Which modification allows the requests to successfully execute?",
      options: [
        'A. Change the "resource_id" value to: "/baskets/*/items".',
        'B. Change the "methods" value to: ["get", "post"].',
        'C. Change the "read_attributes" value to: "(items)".',
        'D. Change the "write_attributes" value to: "(+items)".',
      ],
      answer: "A",
      title: "Question 45",
    },
    {
      content:
        "A developer needs to show only car accessories when shoppers use the search term car accessories and exclude technology accessories and household accessories.Given the above requirement, what is the recommended approach using the Search Dictionaries Dashboard?",
      options: [
        "A. Create a Common Phrase Dictionary entry: car accessories, NOT household, NOT technology.Use search mode Exact Match.",
        "B. Create a Synonym Dictionary entry: car accessories, household, technology.Use search mode Exact Match",
        "C. Create a Synonym Dictionary entry: car accessories, household, technology.Use search mode First Word.",
        "D. Create a Common Phrase Dictionary entry: car accessories.Use search mode Exact Match.",
      ],
      answer: "D",
      title: "Question 46",
    },
    {
      content:
        "Which three operations should be done in a controller?Choose 3 answers",
      options: [
        "A. Generate the response as JSON or HTML",
        "B. Create a plain JavaScript object representing a system object",
        "C. Use the model needed for the view.",
        "D. Use the Script API to generate data for the view.",
        "E. Use middleware functions when applicable",
      ],
      answer: "A,C,E",
      title: "Question 47",
    },
    {
      content:
        "A Digital Developer is inspecting the weekly service status report for a critical internally-hosted web service used in the application and notices that there are too many instances of unavailability.Which two solutions are possible options to reduce the unavailability of the service? (Choose two.)",
      options: [
        "A. Update the external service to have a faster response time.",
        "B. Modify the code that makes the request to the external service to be wrapped in a try / catch block.",
        "C. Increase the web service time out.",
        "D. Change the code that makes the request to set the throwOnError attribute, of the service, to be true.",
      ],
      answer: "A,B",
      title: "Question 48",
    },
    {
      content:
        "A Digital Developer is requesting product information for an external integration. The following Open Commerce API (OCAPI) request is NOT functioning correctly: How should the Developer change the request?",
      options: [
        "A. Change the URI to /dw/shop/vl8_3/products/creative-zen-v.",
        "B. Include an authentication token in the request.",
        "C. Change the HTTP method to PUT.",
        "D. Change the HTTP method to GET.",
      ],
      answer: "D",
      title: "Question 49",
    },
    {
      content:
        'Universal Containers calls the following combination of products "The Basics" and sells the combination as a unique product ID:* One Model 103 container* Five Model 611 container* Tree Model 201 containerThe Developer created these three products in the catalog.What is the next step in Business Manager to create "The Basics" as a combination?',
      options: [
        'A. In the Products module, create a product named "The Basics" and add the products to the Product Bundles tab.',
        'B. In the Products module, create a product named "The Basics" and add the products to the Product Sets tab.',
        'C. In the Product Bundles module, create a bundle named "The Basics".',
        'D. In the Product Sets module, create a product set named "The Basics".',
      ],
      answer: "A",
      title: "Question 50",
    },
    {
      content:
        "A Digital Developer noticed that cartridges in their workspace are NOT executing. The Developer confirms that the cartridges are uploaded to the B2C Commerce server connection's target version directory.Which action potentially solves this problem?",
      options: [
        "A. Remove invalid characters from the code version's name.",
        "B. Set the server connection's target version directory to the active code version.",
        "C. Set the active code version to use the latest compatibility mode.",
        "D. Remove invalid characters from cartridge file and folder names.",
      ],
      answer: "B",
      title: "Question 51",
    },
    {
      content:
        "A retailer notices that the Account Addresses page is showing the wrong shopper's address.Which tool should the developer start with to identify the issue?",
      options: [
        "A. Reports and Dashboards Module",
        "B. Storefront Toolkit",
        "C. Pipeline profiler",
        "D. Code Profiler",
      ],
      answer: "B",
      title: "Question 52",
    },
    {
      content:
        "Given a customer environment configured with only the en_CA locale and the following new requirements:* To add a new locale for fr_CA* To localize the address form with the new locale* To make the localization usable even for new possible French locales, such as fr_FR And given the portion of form XML definition contained in the form file cartridge/forms/default/ address.xml: What is the right place to add the fr_CA translation for the country field label?",
      options: [
        "A. /cartridge/templates/resources/address_fr_CA.properties",
        "B. /cartridge/templates/resources/forms_fr.properties",
        "C. /cartridge/forms/resources/address_fr.properties",
        "D. /cartridge/templates/resources/fr/forms.properties",
      ],
      answer: "A",
      title: "Question 53",
    },
    {
      content:
        "Universal Containers has expanded its implementation to support German with a locale code of de. The current resource bundle is checkout.properties.To which file should the developer add German string values?",
      options: [
        "A. de_checkout.propertiesin resourcesfolder",
        "B. checkout_de.propertiesin resourcesfolder",
        "C. checkout.propertiesin the defaultlocale folder",
        "D. checkout.propertiesin the delocale folder",
      ],
      answer: "A",
      title: "Question 54",
    },
    {
      content:
        "In order to build the SFRA code to a developer sandbox for the first time, which build steps should the developer perform for the site to appear and function as designed?",
      options: [
        "A. npm run compile:js, npm run compile: scss, npm run compile:html",
        "B. npm run compile:js, npm run compile:html, npm run clean",
        "C. npm run compile:scss, npm run compile:html, npm run clean",
        "D. npm run compile:js, npm run compile:scss, npm run compile:fonts",
      ],
      answer: "D",
      title: "Question 55",
    },
    {
      content:
        "Which line of code creates a content slot that can be included on homepage.ismlto display on the home page?",
      options: [
        'A. <isslot id="my_banner " description="for home page" type="global" context="content" context- object="${pdict.ContentSearchResult.content}"/>',
        'B. <isslot id="my_banner " description="for home page" type="global" context="homepage"/>',
        'C. <isslot id="my_banner " description="for home page" context="global">',
        'D. <isslot id="my_banner " description="for home page" context="global" context- object="${pdict.CurrentHomePage}"/>',
      ],
      answer: "C",
      title: "Question 56",
    },
    {
      content:
        "A Digital Developer has created a new PaymentForm controller that requires communication with the server and must be made using the HTTPS protocol.Which code sample should the Developer use to make sure that HTTPS is used?",
      options: [
        "A. exports.PaymentForm = guard.ensure(['http', 'post', 'loggedIn'], handlePaymentForm);",
        "B. exports.PaymentForm = guard.expose(['post', 'loggedIn'], handlePaymentForm);",
        "C. exports.PaymentForm = guard.httpsPost(handlePaymentForm);",
        "D. exports.PaymentForm = guard.ensure(['https', 'post', 'loggedIn'], handlePaymentForm);",
      ],
      answer: "D",
      title: "Question 57",
    },
    {
      content:
        "Universal Containers recently completed updates to their storefront shopping cart page. A problem has been discovered since the update. Users are no longer able to submit coupon codes on this page. Additionally, authenticated users who try to add a coupon are logged out.The following processing code is found in the Cart.js controller file: What should the Developer verify to identify the issue?",
      options: [
        "A. The CSRF cartridge is included in the site's cartridge path.",
        "B. The CSRF settings in Business Manager are properly configured.",
        "C. The form group has the secure attribute set to true.",
        "D. The CSRF token is present in the form and is being submitted in the request.",
      ],
      answer: "D",
      title: "Question 58",
    },
    {
      content:
        "A retailer notices that the Account Addresses page is showing the wrong shopper's address.Which tool should the developer start with to identify the issue?",
      options: [
        "A. Reports and Dashboards module",
        "B. Pipeline Profiler",
        "C. Storefront Toolkit",
        "D. Code Profiler",
      ],
      answer: "D",
      title: "Question 59",
    },
    {
      content:
        "A Digital Developer is working on a project to convert a pipeline to a JavaScript controller. UX Studio has a functioning pipeline debugger configured for the site. Assume the Developer will add a breakpoint to the controller when it is written.What must be done in order to use the debugger with the new controller when it is written?",
      options: [
        "A. Create and use a new script debug configuration.",
        "B. Use the existing pipeline debugger.",
        "C. Modify the debugger configuration and use the existing pipeline debugger.",
        "D. Create and use a new controller debug configuration.",
      ],
      answer: "C",
      title: "Question 60",
    },
    {
      content:
        "A developer is importing edits for two different sites into the same sandbox, and is provided with four different files.Which two XML files should the developer import using the site-specific Merchant Tools import modules, instead of the Administration section import modules?Choose 2 answers.",
      options: [
        "A. Site Jobs (sites)",
        "B. Promotions ( en sites y en online marketing)",
        "C. System type extensions (solo en Sites)",
        "D. Search Settings En (search y en Sites)",
      ],
      answer: "B,D",
      title: "Question 61",
    },
    {
      content:
        "A developer configures the dw.json file and needs to fill in the necessary parameters to complete the task.Which three parameters are required when using npm scripts? (Choose three.)",
      options: [
        "A. CSRF Token",
        "B. Hostname",
        "C. Username/Password",
        "D. Site ID",
        "E. Code Version",
      ],
      answer: "A,D,E",
      title: "Question 62",
    },
    {
      content:
        "Which three object types can a developer import using the Merchant Tools > Content > Import & Export module in Business Manager? (Choose three.)",
      options: [
        "A. Content slots",
        "B. Images and other static assets",
        "C. Products",
        "D. Folders",
        "E. Content assets",
      ],
      answer: "A,C,D",
      title: "Question 63",
    },
    {
      content:
        "A business user wants to add a link to a content page from within the body of another content asset. The target content asset ID is: terms-and-conditions.Which link function generates the correct link?",
      options: [
        "A. $http('Content-Page', 'cid', 'terms-and-conditions^S",
        "B. $url(*Page-Show', 'cid', 'terms-and-conditions')s",
        "C. $httpUrl('Content-Show\\ 'cid', ,terms-and-conditions')$",
        "D. $include('Page-Include', 'cid', 'terms-and-conditions')$",
      ],
      answer: "B",
      title: "Question 64",
    },
    {
      content:
        "Given the requirements:* To integrate with an external web service using HTTP requests* To create a service for this purpose with the Service framework using the LocalServiceRegistry class.* To test the service before the external service provider makes the API available Which solution allows the developer to satisfy the requirements?",
      options: [
        "A. Create a service and a Sitepreference that induce the service to respond witch a mock response using a conditional.",
        "B. Create a service and implement the mockfull callback and a sitepreference to enable or disable the mock response.",
        "C. Create a service and implement the mockFill callback and set the service mode to mock.",
        "D. Create two services, one mock and the real one, and a Sitepreference that enable the mock or the real one",
      ],
      answer: "C",
      title: "Question 65",
    },
    {
      content:
        "A Digital Developer has detected storefront pages being rendered with an error message. After inspecting the log files, the Developer discovered that an enforced quota is being exceeded.What action should the Developer take to stop the quota violation?",
      options: [
        "A. Rewrite the code that is causing the overage.",
        "B. Ask support to remove the quota limit.",
        "C. Change the Business Manager configuration for the quota settings.",
        "D. Take no action, the overage will be resolved when concurrent visitors are reduced.",
      ],
      answer: "C",
      title: "Question 66",
    },
    {
      content:
        "A developer needs to show only car accessories when shoppers use the search term car accessoriesand exclude technology accessoriesand household accessories.Given the above requirement, what is the recommended approach using the Search Dictionaries Dashboard?",
      options: [
        "A. Create a Common Phrase Dictionary entry: car accessories.Use search mode Exact Match.",
        "B. Create a Synonym Dictionary entry: car accessories, |household, |technology.Use search mode Exact Match.",
        "C. Create a Synonym Dictionary entry: car accessories, household, technology.Use search mode First Word.",
        "D. Create a Common Phrase Dictionary entry: car accessories, NOT household, NOT technology.Use search mode Exact Match.",
      ],
      answer: "C",
      title: "Question 67",
    },
    {
      content:
        "A Storefront is designed so that multiple pages share a common header and footer layout.Which ISML tag should a developer use on the templates for these pages to avoid code repetition in the most effective way?",
      options: [
        "A. <isreplace> ... </isreplace>",
        "B. <isinclude> ... </isinclude>",
        "C. <isdecorate> ... </isdecorate>",
        "D. <iscontent> ... </iscontent>",
      ],
      answer: "C",
      title: "Question 68",
    },
    {
      content:
        'Business Manager has the configuration:* Active Log category is "root"* Log level of WARNThe code below is executing:var log = Logger.getLogger("products");Using this information, which two logs will be written? (Choose two.)',
      options: [
        'A. log.error("This is an error message");',
        'B. log.info("This is an info message");',
        'C. log.debug("This is a debug message");',
        'D. log.warn("This is a warn message");',
      ],
      answer: "B,D",
      title: "Question 69",
    },
    {
      content:
        "An instance has custom logging enabled. The log reaches the file size limit.What happens in this situation?",
      options: [
        "A. The log file is deleted and a new log file is created.",
        "B. The current log file is archived and a new log file is created.",
        "C. The log file Rolls over and the oldest log messages are overwritten",
        "D. Logging is suspended for the day",
      ],
      answer: "D",
      title: "Question 70",
    },
    {
      content:
        "A developer has a specification to integrate with a REST API for retrieving traffic conditions. The service expects parameters to be form encoded.Which service type should the developer register?",
      options: ["A. SOAP Form", "B. POST Form", "C. HTTP Form", "D. HTML Form"],
      answer: "C",
      title: "Question 71",
    },
    {
      content:
        "Universal Containers recently completed updates to their storefront shopping cart page. A problem has been discovered since the update. Users are no longer able to submit coupon codes on this page. Additionally, authenticated users who try to add a coupon are logged out.The following processing code is found in the Cart.js controller file: What should the Developer verify to identify the issue?",
      options: [
        "A. The CSRF token is present in the form and is being submitted in the request.",
        "B. The form group has the secure attribute set to true.",
        "C. The CSRF cartridge is included in the site's cartridge path.",
        "D. The CSRF settings in Business Manager are properly configured.",
      ],
      answer: "A",
      title: "Question 72",
    },
    {
      content:
        "A developer working on a simple web service integration is asked to add appropriate logging to allow future troubleshooting.According to logging best practices, which code should the developer write to log when an operation succeeds, but has an unexpected outcome that may produce side effects?",
      options: [
        "A. Logger.debug('Unexpected service response')",
        "B. Logger.info('Unexpected service response')",
        "C. Logger.error('Unexpected service response')",
        "D. Logger.warn('Unexpected service response')",
      ],
      answer: "D",
      title: "Question 73",
    },
    {
      content:
        "A client has custom object definition and requirement that occasional data changes in staging also need to exist in production, Which task should the developer perform to meet these requirements when setting up the custom object?",
      options: [
        "A. Create two copies of the custom object in staging and set Sharing = True.",
        "B. Create the custom object definition in staging as Replicable",
        "C. Create the custom object definition in production as Replicable",
        "D. Create the custom object definition in staging as Shared",
      ],
      answer: "B",
      title: "Question 74",
    },
    {
      content:
        "The following sample code is NOT providing the desired results. The Digital Developer needs to add an entry to the logs to debug the problem. Which statement correctly adds a log entry?",
      options: [
        "A. Logger.getErrorLog().log('Unable to find Apple Pay payment instrument for order.'+paymentInstruments);",
        "B. Logger.fault('Unable to find Apple Pay payment instrument for order.'+paymentInstruments);",
        "C. Logger.error('Unable to find Apple Pay payment instrument for order.'+paymentInstruments);",
        "D. Logger.exception('Unable to find Apple Pay payment instrument for order.'+paymentInstruments);",
      ],
      answer: "D",
      title: "Question 75",
    },
    {
      content:
        'To ensure SFRA best practices and protect against request forgery, the developer introduced CSRF token generation in the customer address form:<form ... action = "submit"><input name ="${dw.web.CSRFProtection.getTokenName()}"value = "${dw.web.CSRFProtection.generateToken()">...<the rest of the Form fields>...</form>To implement CSRF protection when the form is submitted, the developer needs to introduce the CSRF validation using one or both of these methods as applicable:* validateRequest* validateAjaxRequestWhere in the code does the developer need to add this CSRF validation check?',
      options: [
        "A. In the controller function that displays the form",
        "B. In the middleware chain of the controller post route",
        "C. In the controller function that handles the submitted form",
        "D. In the model function that persists the form data",
      ],
      answer: "B",
      title: "Question 76",
    },
    {
      content:
        "A Digital Developer needs to add a new form to the shopping cart page to allow customers to enter their rewards pass ID. There is already an existing Cart.js controller that handles processing of the other cart forms.In addition, a form field node is in the form XML and the necessary form input is present in the ISML template.The code below is the submit button for the ISML markup. What additional steps must occur before the Digital Developer can begin writing the processing code for this request?",
      options: ["A. Option D", "B. Option A", "C. Option C", "D. Option B"],
      answer: "C",
      title: "Question 77",
    },
    {
      content:
        "A Digital Developer has detected storefront pages being rendered with an error message. After inspecting the log files, the Developer discovered that an enforced quota is being exceeded.What action should the Developer take to stop the quota violation?",
      options: [
        "A. Rewrite the code that is causing the overage.",
        "B. Change the Business Manager configuration for the quota settings.",
        "C. Take no action, the overage will be resolved when concurrent visitors are reduced.",
        "D. Ask support to remove the quota limit.",
      ],
      answer: "B",
      title: "Question 78",
    },
    {
      content:
        "A developer set up a new site with Taxation: Net. However, the business requirements changed and the site now needs to be Taxation:Gross. The Business Manager interface does not give this option.Which sequence of steps is necessary to change the site to gross taxation?",
      options: [
        "A. Create a new site with Taxation set to Gross, then delete the old site.",
        'B. Make sure that the developer has "Administrator" Access, then change the Taxation setting to Gross',
        'C. Change the global setting,"Enable Taxation Methods" to true, then change the Taxation setting to Gross',
        "D. Unlock the site preferences and then change the Taxation setting to Gross",
      ],
      answer: "A",
      title: "Question 79",
    },
    {
      content:
        "A Digital Developer needs to add logging to the following code: Which statement logs the HTTP status code to a debug-level custom log file?",
      options: [
        'A. Logger.getLogger().debug("Error retrieving profile email, Status Code: {0} was returned.",http.statusCode);',
        'B. logger.debug("Error retrieving profile email, Status Code: {0} was returned.", http.statusCode);',
        "C. Logger.getLogger('profile').debug(\"Error retrieving profile email, Status Code: {0} was returned.\",http.statusCode);",
        "D. logger.getLogger('profile').debug(\"Error retrieving profile email, Status Code: \", http.statusCode);",
      ],
      answer: "B",
      title: "Question 80",
    },
    {
      content:
        "Which technical reports datapoint measures the performance of a controller's script execution if network factors and Web Adaptor processing is ignored?",
      options: [
        "A. Processing time",
        "B. Call count",
        "C. Response time",
        "D. Cache hit ratio",
      ],
      answer: "A",
      title: "Question 81",
    },
    {
      content:
        "Why should a Digital Developer use ProductSearchModel.getProducts() instead of Category.getOnlineProducts() to access products?",
      options: [
        "A. It has fewer lines of code.",
        "B. It reduces accesses to the application server.",
        "C. It is more readable code.",
        "D. It uses the search index.",
      ],
      answer: "B",
      title: "Question 82",
    },
    {
      content:
        "Given the following conditions:* Site export file with a copy of the Storefront data for a custom site* Sandbox with the custom site code, but no Storefront data* Requirement for a working copy of SFRA for development referenceA developer is assigned the following Business manager tasks:* A. Import the custom Site using Site Import/Export* B. Import the SFRA Demo Sites using Site Import/Export* C. Rebuild the custom Site search indexesIn what sequence should the developer perform the tasks, so that the custom Site displays the products as intended?",
      options: [
        "A. Task B, then C, then A",
        "B. Task B, then A, then C",
        "C. Task A, then B, then C",
        "D. Task A, then C, then B",
      ],
      answer: "B",
      title: "Question 83",
    },
    {
      content:
        "A developer wants to create in Business Manager extension with the cartridge named plugin_vm_extension.Which two steps should the developer take for the extension option to show up in Business Manager?Choose 2 answers:",
      options: [
        "A. Add plugin_bm_extension to the cartridge path under business manager cartridge site",
        "B. Add the appropiate roles and permission to the user to view the business manager extension.",
        "C. Add plugin_bm_extension to the cartridge path under Storefront cartridge site path.",
        "D. Activate a new code version for the Business Manager Site.",
      ],
      answer: "A,D ",
      title: "Question 84",
    },
    {
      content:
        "What happens if the log file size limit is reached in custom logging?",
      options: [
        "A. Logging is suspended for the day.",
        "B. Logging is suspended for two hours.",
        "C. The log file is deleted and recreated from scratch.",
        "D. The log file rolls over and the last used log is overwritten.",
      ],
      answer: "C",
      title: "Question 85",
    },
    {
      content:
        "A job executes a pipeline that makes calls to an external system.Which two actions prevent performance issues in this situation? (Choose two.)",
      options: [
        "A. Use synchronous import or export jobs",
        "B. Configure a timeout for the script pipelet.",
        "C. Use asynchronous import or export jobs.",
        "D. Disable multi-threading.",
      ],
      answer: "B,D",
      title: "Question 86",
    },
    {
      content:
        "The developer created a new Storefront category in storefront-catalog-m-en, but when viewing the Storefront site, the category is not visible.What are two possible reasons? (Choose two.)",
      options: [
        "A. The category does not contain available products",
        "B. The category is not sorted",
        "C. The category is offline",
        "D. The Storefront catalog is offline",
      ],
      answer: "A,C",
      title: "Question 87",
    },
    {
      content:
        'Universal Containers calls the following combination of products "The Basics" and sells the combination as a unique product ID:* One Model 103 container* Five Model 611 container* Tree Model 201 containerThe Developer created these three products in the catalog.What is the next step in Business Manager to create "The Basics" as a combination?',
      options: [
        'A. In the Product Bundles module, create a bundle named "The Basics".',
        'B. In the Products module, create a product named "The Basics" and add the products to the Product Bundles tab.',
        'C. In the Products module, create a product named "The Basics" and add the products to the Product Sets tab.',
        'D. In the Product Sets module, create a product set named "The Basics".',
      ],
      answer: "B",
      title: "Question 88",
    },
    {
      content:
        "The following sample code is NOT providing the desired results. The Digital Developer needs to add an entry to the logs to debug the problem. Which statement correctly adds a log entry?",
      options: [
        "A. Logger.error('Unable to find Apple Pay payment instrument for order.'+paymentInstruments);",
        "B. Logger.getErrorLog().log('Unable to find Apple Pay payment instrument for order.'+paymentInstruments);",
        "C. Logger.exception('Unable to find Apple Pay payment instrument for order.'+paymentInstruments);",
        "D. Logger.fault('Unable to find Apple Pay payment instrument for order.'+paymentInstruments);",
      ],
      answer: "C",
      title: "Question 89",
    },
    {
      content:
        "Universal Containers sells physical gift cards for the holidays.What needs to occur to guarantee the cards will always be available?",
      options: [
        "A. Create an inventory record with an extremely high Allocation value (i.e., 1 billion certificates).",
        "B. Create an inventory record with an unlimited Allocation value.",
        "C. Create an inventory record with Backorder Handling enabled.",
        "D. Create a perpetual inventory record.",
      ],
      answer: "C",
      title: "Question 90",
    },
    {
      content:
        "A Digital Developer wants pass control to an ISML template from a JavaScript Controller and load product on the pipeline dictionary with the name myProduct.Which code sample will achieve this?",
      options: [
        'A. ISML.renderTemlpate ( "helloworld.isml", { "myProduct": "product" });',
        'B. ISML.renderTemlpate ( "helloworld.isml", { "product": myProduct });',
        'C. ISML.renderTemlpate ( "helloworld.isml", { product: myProduct });',
        'D. ISML.renderTemlpate ( "helloworld.isml", { myProduct: product });',
      ],
      answer: "A",
      title: "Question 91",
    },
    {
      content:
        "Universal Containers created a site export file from staging in the global export directory.How should the Digital Developer update their sandbox using this staging site export file?",
      options: [
        "A. Perform a data replication from staging.",
        "B. Use the Site Development > Site Import & Export Business Manager module.",
        "C. Download the site export file and use UX Studio to transfer the data to the sandbox.",
        "D. Use the Site Development > Import & Export Business Manager module.",
      ],
      answer: "B",
      title: "Question 92",
    },
    {
      content:
        "Which two items are appropriate content of custom logs implemented at checkout?Choose 2 answers:",
      options: [
        "A. Transaction's credit card information",
        "B. Order failure information",
        "C. Customer's password at post-checkout sign up",
        "D. Payment gateway service response code",
      ],
      answer: "B,D",
      title: "Question 93",
    },
    {
      content:
        'Assume the code below is executing: Business Manager has the configuration:* Active Log category is "root" with log level of "info."Given this information, what is the beginning of the filename in which the log will be written?',
      options: [
        "A. custominfo-blade",
        "B. custom-export",
        "C. xyz",
        "D. custom-xyz",
      ],
      answer: "D",
      title: "Question 94",
    },
    {
      content:
        "A client uses tax tables in Business Manager to calculate tax. They recently started shipping to a new country, Italy, and the tax is not being calculated correctly on the Storefront.What is the likely problem?",
      options: [
        "A. Tax Country is missing",
        "B. Tax Locale is configured wrong",
        "C. Tax Jurisdiction is missing",
        "D. Tax Region is configured wrong",
      ],
      answer: "B",
      title: "Question 95",
    },
    {
      content:
        "Consider the following information:* A merchant has this three-tier category structure setup in the Storefront catalog.- New Arrivals > Women > Clothing* The category named Clothing has all the clothing items for Women and is merchandised.* A Search Refinement named Newness is correctly configured for the Clothing category.When a merchandiser views the Clothing category, the Search Refinement appears and works as expected.However, the merchandiser does not see the Search Refinement when searching for Clothing via the Storefront search.What is the reason?",
      options: [
        "A. The Search Refinement definition is not set up for the Root category",
        "B. There are conflicting Search Refinement definitions for Clothing and one of its parent categories",
        "C. The Search Refinement definition is not set up for the New Arrivals category",
        "D. The Search Refinement definition is not set up for the Women category",
      ],
      answer: "C",
      title: "Question 96",
    },
    {
      content:
        "A Digital Developer is requesting product information for an external integration. The following Open Commerce API (OCAPI) request is NOT functioning correctly: How should the Developer change the request?",
      options: [
        "A. Change the HTTP method to GET.",
        "B. Change the HTTP method to PUT.",
        "C. Include an authentication token in the request.",
        "D. Change the URI to /dw/shop/v18_3/products/creative-zen-v.",
      ],
      answer: "A",
      title: "Question 97",
    },
  ],
});
