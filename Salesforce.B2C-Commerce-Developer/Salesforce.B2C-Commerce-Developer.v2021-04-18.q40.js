window.testContent = window.testContent || [];
var testId = "Salesforce.B2C-Commerce-Developer";
var testName = "Salesforce.B2C-Commerce-Developer";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "Salesforce.B2C-Commerce-Developer.v2021-04-18.q40",
  content: [
    {
      content:
        "A developer has a sandbox configured with a service and its profile and credential.. Now there is a requirement to allow changes to the service URL manually from the sandbox.Which B2C feature should the developer use to achieve the request?",
      options: [
        "A. Use the service status area, set the override URL checkbox, and then populate the URL field with the required one.",
        "B. Use a Globalpreference dedicated for the service URL",
        "C. Use a Sitepreference dedicated for the service URL",
        "D. Use the service credential URL field",
      ],
      answer: "D",
      title: "Question 1",
    },
    {
      content:
        "A Digital Developer is adding support for an additional language other than the default. The locale code for the new language is de.In which folder should the developer place resource bundles?",
      options: [
        "A. templates/resources",
        "B. templates/default",
        "C. templates/de",
        "D. templates/default/resources",
      ],
      answer: "A",
      title: "Question 2",
    },
    {
      content:
        "A developer is asked to improve the maintainability of a page by reducing its code repetition.What are two techniques the developer should implement to achieve this?Choose 2 answers.",
      options: [
        "A. Implement template decorators paired with replace tags",
        "B. Require and render templates with <isscript> tags",
        "C. Embed partial files using ISML expressions",
        "D. Use local template includes",
      ],
      answer: "A,D",
      title: "Question 3",
    },
    {
      content:
        "A merchant has a requirement to render personalized content to n a category page via a Content Slot that targets VIP high-spending customers during a specific promotional period.Which two items should the developer create to achieve the specified requirements?Choose 2 answers:",
      options: [
        "A. Page Template",
        "B. VIP Customer Group",
        "C. Slot Configuration",
        "D. Rendering Template",
      ],
      answer: "C,D",
      title: "Question 4",
    },
    {
      content:
        "A merchant asks a developer to create a Cache Partition for the home page, so that when the home page is edited, only the home page is cleaned.Given the above requirement, where should the developer create that partition in Business Manager?",
      options: [
        "A. Site > Site Preferences > Cache",
        "B. Operations > Cache > Site",
        "C. Administration > Sites > Manage Sites > Site > Cache",
        "D. Operations > Site > Manage Sites > Cache",
      ],
      answer: "C",
      title: "Question 5",
    },
    {
      content:
        "A developer is writing a server side script that needs to maintain state across calls. The persistent information needed includes these items.* The current customer* Whether or not the customer is authenticated* The privacy attributes (such as tracking consent or cookie policy)Which technique should the developer use to maintain state in an efficient and scalable manner that follows best practice?",
      options: [
        "A. Use the Session class in the B2C Commerce api.",
        "B. Use an SFRA controller, because it runs server-side, the state is automatically maintained",
        "C. Use a client-side cookie to store the information for the session duration.",
        "D. Use a non-replicable Custom Object to store the information temporarily.",
      ],
      answer: "A",
      title: "Question 6",
    },
    {
      content:
        "Universal Containers wants to add a model field to each product. Products will have locale-specific model values.How should the Digital Developer implement the requirement?",
      options: [
        "A. Set the model field as a localizable attribute.",
        "B. Utilize resource bundles for translatable values.",
        "C. Store translated model values in different fields; one field for each locale.",
        "D. Add model to a new custom object with localizable attributes.",
      ],
      answer: "C",
      title: "Question 7",
    },
    {
      content:
        "A developer needs to show only car accessories when shoppers use the search term car accessories and exclude technology accessories and household accessories.Given the above requirement, what is the recommended approach using the Search Dictionaries Dashboard?",
      options: [
        "A. Create a Synonym Dictionary entry: car accessories, household, technology.Use search mode Exact Match",
        "B. Create a Common Phrase Dictionary entry: car accessories.Use search mode Exact Match.",
        "C. Create a Synonym Dictionary entry: car accessories, household, technology.Use search mode First Word.",
        "D. Create a Common Phrase Dictionary entry: car accessories, NOT household, NOT technology.Use search mode Exact Match.",
      ],
      answer: "B",
      title: "Question 8",
    },
    {
      content:
        'Assume the code below is executing:Business Manager has the configuration:* Active Log category is "root" with log level of "info."Given this information, what is the beginning of the filename in which the log will be written?',
      options: [
        "A. custominfo-blade",
        "B. xyz",
        "C. custom-export",
        "D. custom-xyz",
      ],
      answer: "D",
      title: "Question 9",
    },
    {
      content:
        "A merchant requires that an existing section of the Site become editable from the Business Manager, so that they can modify it independently of the developer.Which of these is an important factor for a developer to consider when choosing the appropriate solution between a content slot and a Page Designer component?",
      options: [
        "A. Only page Designer components can ve tied to campaigns.",
        "B. Only content slot configurations can be tied to campaigns.",
        "C. Only Page Designer Components can be localized for different languages.",
        "D. Only content slot configurations can ve localized for different languages.",
      ],
      answer: "C",
      title: "Question 10",
    },
    {
      content:
        "A developer has custom debug statements in a script, but the messages are not showing up in the Storefront Toolkit Request Log.Which step needs to be completed to get the messages to appear in the Request Log?",
      options: [
        "A. In Custom Log Settings, check the DEBUG box for Select Log Levels Written to Files.",
        "B. In custom Log Settings, activate the loggin category at DEBUG level.",
        "C. In Site Preferences, check the box for Enable custom Logging in Request Log",
        "D. In Global preferences, check the box for Enable custom logging in Request Log.",
      ],
      answer: "A",
      title: "Question 11",
    },
    {
      content:
        'Given a job step configured in the steptype.json, a developer needs to add a custom status code"No_FILES_FOUND".Which code snippet will complete the requirement?',
      options: [
        "A. var status = {success: 'OK'. Message: 'NO_FILES_FOUND'};return status;",
        "B. var status = require('dw/system/status');return new Status(Status.OK, 'NO_FILES_FOUND');",
        "C. this.status = 'NO_FILES_FOUND'return this;",
        "D. return 'NO_FILES_FOUND",
      ],
      answer: "B ",
      title: "Question 12",
    },
    {
      content:
        "A client uses tax tables in Business Manager to calculate tax. They recently started shipping to a new country, Italy, and the taxi s not being calculated correctly on the Storefront What is the likely problem?",
      options: [
        "A. Tax Jurisdiction is missing",
        "B. Tax Region is configured wrong.",
        "C. Tax Locale is configured wrong",
        "D. Tax Country is missing",
      ],
      answer: "A",
      title: "Question 13",
    },
    {
      content:
        "A developer has the following files in template/resources:account.proiertiesweight.unit=kilosaccount_en.propiertiesweight.unit=stonesaccount_en_US.propiertiesweight.unit= poundsUsing the default locale configuration, what is the current outcome of the page that renders the account.isml template snippet below when visiting the Sofrefront with the English for Canada(en_CA) locale= Your parcel weighs 10 ${Resource.msg('weight.unit','account')}",
      options: [
        "A. Your parcel weighs 10 undefined.",
        "B. Your parcel weighs 10 pounds.",
        "C. Your parcel weighs 10 kilos",
        "D. Your parcel weighs 10 stones.",
      ],
      answer: "D",
      title: "Question 14",
    },
    {
      content:
        "A client wants to differentiate their monobrand stores with a special icon when shown in the store locator. The information is saved in a true/false custom attribute for each Store object in Merchant tools.How should the developer follow SFRA best practices to expose this data for rendering?",
      options: [
        "A. Use the module.superModule functionality and the call method to add a new property to the Store Model.",
        "B. Pass the Store system object to the template, so that custom propierties are available",
        "C. Ad dan <isscript> to the template, and call StoreMgr.searchStoresByCoordinates();",
        "D. Extend the existing Stores_Find controller with a new middleware function that performs the query",
      ],
      answer: "A",
      title: "Question 15",
    },
    {
      content:
        "A Digital Developer creates a B2C Commerce server connection in their UX Studio workspace. The Developer adds new cartridges to the workspace, but the cartridges do NOT execute as the Developer expects.Which three things should the Digital Developer verify to ensure the cartridges are uploaded? (Choose three.)",
      options: [
        "A. The cartridge is for the current version of B2C Commerce.",
        "B. The Active Server setting is enabled for the server connection.",
        "C. The Auto-Upload setting is enabled for the server connection.",
        "D. The credentials for the server connection are correctly entered.",
        "E. The server is configured to accept incoming connections.",
      ],
      answer: "A,C,E",
      title: "Question 16",
    },
    {
      content:
        'A Digital Developer has a new requirement to disable the "Discover" credit card type for all checkouts.What does the Developer need to change in Business Manager to fulfill this requirement?',
      options: [
        "A. Checkout exclusion rules in the Merchant Tools > Site Preferences > Checkout Preferences module.",
        "B. Credit card exclusion rules in the CreditCardType.json configuration file.",
        "C. Credit card exclusion rules in the Merchant Tools > Site Preferences > Payment Preferences module.",
        "D. Credit cards in the Merchant Tools > Ordering > Payment Methods module.",
      ],
      answer: "D",
      title: "Question 17",
    },
    {
      content:
        "A Digital Developer is tasked with setting up a new Digital Server Connection using UX Studio in their sandbox.Which three items are required to accomplish this task? (Choose three.)",
      options: [
        "A. Business Manager Username",
        "B. Instance Version",
        "C. Business Manager Password",
        "D. Keystore Password",
        "E. Instance Hostname",
      ],
      answer: "C,D,E",
      title: "Question 18",
    },
    {
      content:
        "A digital instance has one site, with one master product catalog separate from the site catalog. Some, but NOT all, products in the master catalog are assigned to categories of the site catalog.Using Business Manager, how can a Digital Developer create a catalog export file that contains only the products assigned to the site catalog?",
      options: [
        "A. Use the Catalog Export module to export the master catalog, with a category-assignment search to export specific products.",
        "B. Use the Site Import & Export module to export the master catalog, filtered by site catalog categories to export specific products.",
        "C. Use the Catalog Export module to export the site catalog.",
        "D. Use the Site Import & Export module to export both the site catalog and the master catalog in a single archive.",
      ],
      answer: "A",
      title: "Question 19",
    },
    {
      content:
        "Once the Cache Information tool of the storefront toolkit is enabled, how can a Digital Developer view caching information for a particular component of the page?",
      options: [
        "A. Start a pipeline debugging session and view the caching information provided.",
        "B. Open the Request Logs to view the caching information.",
        "C. Right-click on the component in UX Studio and view the caching properties of the file.",
        "D. Hover over the caching icons now present on the storefront.",
      ],
      answer: "D",
      title: "Question 20",
    },
    {
      content:
        'Universal Containers calls the following combination of products "The Basics" and sells the combination as a unique product ID:* One Model 103 container* Five Model 611 container* Tree Model 201 containerThe Developer created these three products in the catalog.What is the next step in Business Manager to create "The Basics" as a combination?',
      options: [
        'A. In the Product Bundles module, create a bundle named "The Basics".',
        'B. In the Products module, create a product named "The Basics" and add the products to the Product Sets tab.',
        'C. In the Product Sets module, create a product set named "The Basics".',
        'D. In the Products module, create a product named "The Basics" and add the products to the Product Bundles tab.',
      ],
      answer: "D",
      title: "Question 21",
    },
    {
      content:
        "A Digital Developer is asked to optimize controller performance by lazy loading scripts as needed instead of loading all scripts at the start of the code execution.Which statement should the Developer use to lazy load scripts?",
      options: [
        "A. local include",
        "B. importPackage () method",
        "C. require () method",
        "D. $.ajax () jQuery method",
      ],
      answer: "C",
      title: "Question 22",
    },
    {
      content:
        "A Digital Developer is inspecting the weekly service status report for a critical internally-hosted web service used in the application and notices that there are too many instances of unavailability.Which two solutions are possible options to reduce the unavailability of the service? (Choose two.)",
      options: [
        "A. Increase the web service time out.",
        "B. Change the code that makes the request to set the throwOnError attribute, of the service, to be true.",
        "C. Update the external service to have a faster response time.",
        "D. Modify the code that makes the request to the external service to be wrapped in a try / catch block.",
      ],
      answer: "C,D",
      title: "Question 23",
    },
    {
      content:
        "A Digital Developer needs to check for product inventory in a specific inventory list using the Open Commerce API.An example request URL is:Which resource_id value enables the appropriate resource?",
      options: [
        "A. /products/*",
        "B. /inventory_lists/**",
        "C. /inventory_list_search",
        "D. /inventory_lists/*",
      ],
      answer: "A",
      title: "Question 24",
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
      title: "Question 25",
    },
    {
      content:
        'Below is a form definition snippet from the newsletter.xml file:<?xml version="1.0"?><formxmlns=http://www.demandware.com/xml/form/2008-04-15><field formid="email" lavel="Email" type="String" mandatory="True" max-length="50" /></form>Which line of code creates a JSON object to contain the form data?',
      options: [
        "A. Server.forms.getForm('dwfrm_newsletter')En el controller:En el Formulario:",
        "B. Server.form.getForm('dwfrm_newsletter')",
        "C. Server.form.getForm('newsletter');",
        "D. Server.forms.getForm('newsletter');",
      ],
      answer: "D",
      title: "Question 26",
    },
    {
      content:
        "Universal Containers created a site export file from staging in the global export directory.How should the Digital Developer update their sandbox using this staging site export file?",
      options: [
        "A. Use the Site Development > Import & Export Business Manager module.",
        "B. Download the site export file and use UX Studio to transfer the data to the sandbox.",
        "C. Use the Site Development > Site Import & Export Business Manager module.",
        "D. Perform a data replication from staging.",
      ],
      answer: "C",
      title: "Question 27",
    },
    {
      content:
        "A client has two B2C Commerce sites in the same instance: one for the U.S market, the other for the European market. The products they make are sold with different safety certificates based-on the world location.For example, they sell a smartphone with certificate A in the U.S and certificate B in Europe, a hairdryer with certificate C in the U.S and certificate D in Europe, and more.How should a developer allow the merchant to display the appropriate certification logo in the produce to details page, depending on the customer's location?",
      options: [
        "A. Add a Localizable custom attribute to the Certificate system object type.",
        "B. Ad and Image custom preference to the Sitepreference system object type",
        "C. Add a Site-specific custom attribute to the Product system object type.",
        "D. Add a Localizable custom preference to the SitePreference system object type.",
      ],
      answer: "C ",
      title: "Question 28",
    },
    {
      content:
        "Server.get('Show', consentTracking.consent, cache.applyDefaultCache, function (req,res,next){ Var Site = require('dw/system/Syte\"); Var pageMetaHelpter = require('*/cartridge/scripts/helpers/pageMetaHelper'); pageMetaHelpter.setPageMetaTags(req.pageMetaData, Site.current); res.render('/home/homePage'); Missing code here}, pageMetadata.computedPageMetadata);The controller endpoint code snippet above does not work.Which line of code should the developer use to replace line 6 and correct the problem?",
      options: ["A. next();", "B. req.next();", "C. return res;C. res.next();"],
      answer: "A",
      title: "Question 29",
    },
    {
      content:
        "A Digital Developer noticed that cartridges in their workspace are NOT executing. The Developer confirms that the cartridges are uploaded to the B2C Commerce server connection's target version directory.Which action potentially solves this problem?",
      options: [
        "A. Set the active code version to use the latest compatibility mode.",
        "B. Set the server connection's target version directory to the active code version.",
        "C. Remove invalid characters from cartridge file and folder names.",
        "D. Remove invalid characters from the code version's name.",
      ],
      answer: "B",
      title: "Question 30",
    },
    {
      content:
        "A developer wants to add a link to the My Account Page.What is the correct code to accomplish this?",
      options: [
        "A. <a href=\"${url.get('Account-Show')}>${Resource.message('myaccount')}</a>",
        "B. <a href=\"${URLUtils('Account-Show')}>${ResourceMgr.getPropierties('myaccount','account',null)}</a>",
        "C. <ahref=\"${URLUtils.get('Account-Show')}>${Resource.msg('myaccount','account',request.locale())}</a>",
        "D. <a href=\"${URLUtils.url('Account-Show')}>${Resource.msg('myaccount','account',null)}</a>",
      ],
      answer: "D",
      title: "Question 31",
    },
    {
      content:
        "Given the customer basket described below:* A customer has an existing basket that consists of multiple items.* One of the items is identified as a gift item by an attribute at the product line item.The developer needs to write custom code to fetch the customer basket and then modify the basket based upon the items in the cart. If the basket contains any gift items, modify the basket and create a separate shipment for the gift item.Four hooks are required to make the modification, beginning with modifyGETRespone and ending with validatebasket.* Dw.ocapi.shop.basket.modifyGETResponse* -- missing hook -* -- missing hook --* dw.ocapi.shop.basket.validateBasketWhat are the two missing hooks in the middle?",
      options: [
        "A. dw.ocapi.shop.basket.shipment.beforeDELETE",
        "B. dw.ocapi.shop.basket.shipment.afterDELETE",
        "C. dw.ocapi.shop.basket.shipment.beforePATCH",
        "D. dw.ocapi.shop.baskep.shopment.beforePOSTEstos indican antes de actualizar y antes de introducir",
      ],
      answer: "C,D",
      title: "Question 32",
    },
    {
      content:
        "A Digital Developer adds the following line of code to a script.The code executes without error; however, the log file on disk does NOT contain the log message.Which two actions should be completed to write the log message to disk? (Choose two.)",
      options: [
        "A. Ensure that the debug log level has been added to the custom log level types in the Global Preferences business manager module.",
        "B. Ensure that the debug log level is enabled to write to file in the Custom Log Settings Business Manager module.",
        'C. Ensure that the "login" category is added to the Custom Log Filters in the Log Settings Business Manager module.',
        "D. Archive old log files to make room in the log directory.",
      ],
      answer: "A,D",
      title: "Question 33",
    },
    {
      content:
        "A Digital Developer is requesting product information for an external integration. The following Open Commerce API (OCAPI) request is NOT functioning correctly:How should the Developer change the request?",
      options: [
        "A. Change the HTTP method to PUT.",
        "B. Change the URI to /dw/shop/v18_3/products/creative-zen-v.",
        "C. Include an authentication token in the request.",
        "D. Change the HTTP method to GET.",
      ],
      answer: "D",
      title: "Question 34",
    },
    {
      content:
        "Given the requirements:* To integrate with an external web service using HTTP requests* To create a service for this purpose with the Service framework using the LocalServiceRegistry class.* To test the service before the external service provider makes the API available Which solution allows the developer to satisfy the requirements?",
      options: [
        "A. Create a service and implement the mockFill callback and set the service mode to mock.",
        "B. Create a service and a Sitepreference that induce the service to respond witch a mock response using a conditional.",
        "C. Create two services, one mock and the real one, and a Sitepreference that enable the mock or the real one",
        "D. Create a service and implement the mockfull callback and a sitepreference to enable or disable the mock response.",
      ],
      answer: "A",
      title: "Question 35",
    },
    {
      content:
        "A merchant wants customers to be able to order gift vouchers via their site. Since they can issue an unlimited number of these digital vouchers, this item should be available to sell at all items.How can a developer use Business Manager to ensure that the gift vouchers are always available?",
      options: [
        "A. Manually set the inventory to a high number.",
        "B. Set StockLevel = maxAllocation for the producto.",
        "C. Check the perpetual flag in the product inventory record",
        "D. Check the Available to Sell (ATS) flag dor the producto set",
      ],
      answer: "C",
      title: "Question 36",
    },
    {
      content:
        "A Digital Developer added a file named MyBusinessController.js in the cartridge named app_project. The project design calls for this new file to override MyBusinessController.js in client_project. The client_project cartridge contains other necessary functionality. Additional functionality is also included in the storefront_core and storefront_controllers cartridges.Which cartridge path meets the project requirements?",
      options: [
        "A. client_project:app_project:storefront_controllers:storefront_core",
        "B. app_project:client_project:storefront_controllers:storefront_core",
        "C. storefront_core:storefront_controllers:client_project:app_project",
        "D. app_project:storefront_controllers:storefront_core",
      ],
      answer: "B",
      title: "Question 37",
    },
    {
      content:
        "Which three techniques improve client-side performance in production while following documented best practices? (Choose three.)",
      options: [
        "A. Compress CSS.",
        "B. Use one style sheet for each ISML decorator template.",
        "C. Combine several images into a single image.",
        "D. Use inline Javascript.",
        "E. Place CSS outside of templates.",
      ],
      answer: "A,B,D",
      title: "Question 38",
    },
    {
      content:
        "Which three configuration does a developer need to ensure to have a new product visible in the Storefront?Choose 3 answers",
      options: [
        "A. The Storefront catalog that contains the product is assigned to a site",
        "B. The search index is built.Tengo dudas con el A. REVISAR",
        "C. The product is online and searchable",
        "D. The product has a master product",
        "E. The product has a Price",
      ],
      answer: "A,B,C",
      title: "Question 39",
    },
    {
      content:
        "A Digital Developer has been given a requirement to add fault tolerance to an existing web service integration that uses Service Framework. Administrators at Universal Containers need to be able to configure the timeout and rate limiting.Which approach should the Developer use to implement the requirement?",
      options: [
        "A. Implement a condition that checks to see if the response was empty and execute fallback code if true.",
        "B. Create a site preference to store timeout settings and implement an IOException handler to execute fallback code.",
        "C. Use the setTimeout method to execute fallback code if the request has NOT completed.",
        "D. Implement a ServiceUnavailableException exception handler to execute fallback code.",
      ],
      answer: "D",
      title: "Question 40",
    },
  ],
});
