window.testContent = window.testContent || [];
var testId = "Salesforce.B2C-Commerce-Developer";
var testName = "Salesforce.B2C-Commerce-Developer";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "Salesforce.B2C-Commerce-Developer.v2022-11-30.q57",
  content: [
    {
      content:
        "Consider the following information:* A merchant has this three-tier category structure setup in the Storefront catalog:New Arrivals > Women > Clothing* The category named Clothing has all the clothing items for Women and is merchandised.* A Search Refinement named Newness is correctly configured for the Clothing category.When a merchandiser views the Clothing category, the Search Refinement appears and Works as expected. However, the merchandiser does not see the Search Refinement when searching for Clothing via the Storefront search.What is the Reason?",
      options: [
        "A. There are conflicting Search Refinement definitions for Clothing and one of its parent categories",
        "B. The Search Refinement definition is not set up for the New Arrivals Category.",
        "C. The Search Refinement definition is not set up for the Women category",
        "D. The Search Refinement definitions is not set up for the Root Category",
      ],
      answer: "B",
      title: "Question 1",
    },
    {
      content:
        "Given the customer basket described below:* A customer has an existing basket that consists of multiple items.* One of the items is identified as a gift item by an attribute at the product line item.The developer needs to write custom code to fetch the customer basket and then modify the basket based upon the items in the cart. If the basket contains any gift items, modify the basket and create a separate shipment for the gift item.Four hooks are required to make the modification, beginning with modifyGETRespone and ending with validatebasket.* Dw.ocapi.shop.basket.modifyGETResponse* -- missing hook -* -- missing hook --* dw.ocapi.shop.basket.validateBasketWhat are the two missing hooks in the middle?",
      options: [
        "A. dw.ocapi.shop.basket.shipment.afterDELETE",
        "B. dw.ocapi.shop.basket.shipment.beforePATCH",
        "C. dw.ocapi.shop.basket.shipment.beforeDELETE",
        "D. dw.ocapi.shop.baskep.shopment.beforePOST",
      ],
      answer: "B,D",
      title: "Question 2",
    },
    {
      content:
        "A developer is given the requirement to add a step to the existing business logic of the registration process. How should the developer modify the route that handles the customer registration?",
      options: [
        "A. Extend the route with new functionality.",
        "B. Copy the code from the original route to a new controller route, and change it.",
        "C. Override the route with new functionality.",
        "D. Change the controller route with new functionality.",
      ],
      answer: "B",
      title: "Question 3",
    },
    {
      content:
        "Universal Containers needs to have Apple Pay disabled for the country of Spain.Which Business Manager module should the Developer use to meet this requirement?",
      options: [
        "A. Merchant Tools > Site Preferences > Payment Types",
        "B. Merchant Tools > Ordering > Payment Processors",
        "C. Merchant Tools > Site Preferences > Apple Pay",
        "D. Merchant Tools > Ordering > Payment Methods",
      ],
      answer: "D",
      title: "Question 4",
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
      title: "Question 5",
    },
    {
      content:
        "Universal Containers specifies a new category hierarchy for navigating the digital commerce storefront. A Digital Developer uses Business Manager to manually create a catalog with the specified category hierarchy, then uses the Products & Catalogs > Import & Export module to export the catalog as a file.How can other Developers with sandboxes on the same realm create the same catalog in their own sandboxes?",
      options: [
        "A. Use Business Manager to upload and import a copy of the export file obtained from the original Developer.",
        "B. Use the Business Manager Data Replication module to replicate the catalog from the original Developer's sandbox.",
        "C. Use the remote upload capability of the Site Import & Export module of Business Manager.",
        "D. Use the import capability of the Site Import & Export module of Business Manager.",
      ],
      answer: "D",
      title: "Question 6",
    },
    {
      content:
        "An instance has custom logging enabled. The log reaches the file size limit.What happens in this situation?",
      options: [
        "A. Logging is suspended for the day",
        "B. The log file Rolls over and the oldest log messages are overwritten",
        "C. The log file is deleted and a new log file is created.",
        "D. The current log file is archived and a new log file is created.",
      ],
      answer: "A",
      title: "Question 7",
    },
    {
      content:
        "Universal Containers is preparing their storefront to use Open Commerce APIs (OCAPI).To which hook should the Digital Developer move taxation logic to ensure consistent order totals within B2C Commerce?",
      options: [
        "A. dw.ocapi.shop.order.afterPOST",
        "B. dw.ocapi.shop.order.validateOrder",
        "C. dw.ocapi.shop.basket.afterPostShipment",
        "D. dw.ocapi.shop.basket.calculate",
      ],
      answer: "D",
      title: "Question 8",
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
      title: "Question 9",
    },
    {
      content:
        "A retailer notices that the Account Addresses page is showing the wrong shopper's address.Which tool should the developer start with to identify the issue?",
      options: [
        "A. Code Profiler",
        "B. Storefront Toolkit",
        "C. Reports and Dashboards Module",
        "D. Pipeline profiler",
      ],
      answer: "B",
      title: "Question 10",
    },
    {
      content:
        'Business Manager has the configuration:* Active Log category is "root"* Log level of WARNThe code below is executing:var log = Logger.getLogger("products");Using this information, which two logs will be written?Choose 2 answers',
      options: [
        'A. log.error("This is an error message");',
        'B. log.debugfThis is a debug message");',
        'C. log.info("This is an info message");',
        'D. log.warn("This is a warn message");',
      ],
      answer: "C,D",
      title: "Question 11",
    },
    {
      content:
        "There are three logging categories: category1, category1.eu, and category1.us.In Business Manager, category1 is enabled for WARN level and no other categories are configured. All custom log targets are enabled.The code segment below executes.What is the result'",
      options: [
        "A. Logs will be written to the log file with a prefix custom-loggerFile.",
        "B. Logs will be written to the log file with a prefix loggerFile.",
        "C. Logs will be written to the log file with a prefix customwarn.",
        "D. Logs will not be written.",
      ],
      answer: "A",
      title: "Question 12",
    },
    {
      content:
        "A client has a requirement to render different content on the homepage based on if the customer is logged in or guest user.What should a developer implement to achieve this requirement?",
      options: [
        "A. Write specific custom code in the Content Asset for a customer that is a registered, versus unregistered, user.",
        "B. Add specific custom messages in Page Designer for a customer that is a registered, versus unregistered, user.",
        "C. Set the Content Asset configuration for a customer that is a registered, versus unregistered, user.",
        "D. Set the Content Slot configuration so it is based on the system customer group registered, versus unregistered.",
      ],
      answer: "D",
      title: "Question 13",
    },
    {
      content:
        "A Digital Developer needs to check for product inventory in a specific inventory list using the Open Commerce API.An example request URL is:Which resource_id value enables the appropriate resource?",
      options: [
        "A. /products/*",
        "B. /inventory_list_search",
        "C. /inventory_lists/**",
        "D. /inventory_lists/*",
      ],
      answer: "A",
      title: "Question 14",
    },
    {
      content:
        "A Digital Developer is asked to optimize controller performance by lazy loading scripts as needed instead of loading all scripts at the start of the code execution.Which statement should the Developer use to lazy load scripts?",
      options: [
        "A. require () method",
        "B. $.ajax () jQuery method",
        "C. local include",
        "D. importPackage () method",
      ],
      answer: "A",
      title: "Question 15",
    },
    {
      content:
        "Which code sample is required to use a custom tag provided in SiteGenesis in an ISML template?",
      options: ["A. Option B", "B. Option D", "C. Option C", "D. Option A"],
      answer: "A",
      title: "Question 16",
    },
    {
      content:
        "A developer has a specification to integrate with a REST API for retrieving traffic conditions. The service expects parameters to be form encoded.Which service type should the developer register?",
      options: ["A. POST Form", "B. HTTP Form", "C. HTML Form", "D. SOAP Form"],
      answer: "B",
      title: "Question 17",
    },
    {
      content:
        "A Digital Developer is tasked with setting up a new Digital Server Connection using UX Studio in their sandbox.Which three items are required to accomplish this task? (Choose three.)",
      options: [
        "A. Business Manager Password",
        "B. Instance Hostname",
        "C. Business Manager Username",
        "D. Keystore Password",
        "E. Instance Version",
      ],
      answer: "B,D,E",
      title: "Question 18",
    },
    {
      content:
        "A Newsletter controller contains the following route:Server.post('Subscribe', function (req,res,next){var newsletterForm = server.forms.getForm('newsletter');var CustomObjectMgr = require('dw/object/CustomObjectMgr'); if(newsletterForm.valid){ try{ var CustomObject = CustomObjectMgr.createCustomObejct('NewsletterSubscription', newsletterform.email.value); CustomObject.custom.firstName = newsletterForm.fname.value; CustomObject.custom.lastName = newsletterForm.lname.value;-} catch(e){//Catch error here}}next();});Assuming the Custom Object metadata exists, why does this route fail to render the newsletter template when the subscription form is correctly submitted?",
      options: [
        "A. The Subscribe route is missing the server.middleware.httpt middleware.",
        "B. Custom Objects can only be created by Job scripts",
        "C. The Custom Object creation is not wrapped in a Transaction.",
        "D. The CustomObjectMgr variable should be declare outside of the route.",
      ],
      answer: "C",
      title: "Question 19",
    },
    {
      content:
        "A merchant has a content slot on a page that currently displays products based on the top Sellers for the current week.They wish to change this functionality and, instead, have the slot render a specific content asset so that the content experience is more personalized to the visitors.Which two actions are necessary to make this change?Choose 2 answers",
      options: [
        "A. Delete the existing content slot and create a new one.",
        "B. Change the rendering template in the slot configuration",
        "C. Change the content type for the slot configuration",
        "D. Change the default setting in the slot configuration",
      ],
      answer: "B,C",
      title: "Question 20",
    },
    {
      content:
        "A Digital Developer is working on a multi-site realm. A new site requires a different layout for the account landing page. The business logic and data model remain the same. The existing code is in AccountControl.js and accountlanding.isml in the app_storefront cartridge. The app_storefront cartridge contains code for all other business functions. The cartridge path for the new site is currently int_cybersource:int_paypal:app_storefront.The Developer creates a new cartridge named app_newsite that contains only the accountlanding.isml template for the new site.Which modification should be made to the new cartridge path?",
      options: [
        "A. Set the cartridge path so that app_storefront is before int_cybersource.",
        "B. Set the cartridge path so that app_newsite is before app_storefront.",
        "C. Set the cartridge path to include only app_newsite.",
        "D. Set the cartridge path so that app_newsite is after app_storefront.",
      ],
      answer: "A",
      title: "Question 21",
    },
    {
      content:
        "Which three operations should be done in a controller?Choose 3 answers",
      options: [
        "A. Generate the response as JSON or HTML",
        "B. Create a plain JavaScript object representing a system object",
        "C. Use middleware functions when applicable",
        "D. Use the model needed for the view.",
        "E. Use the Script API to generate data for the view.",
      ],
      answer: "A,C,D",
      title: "Question 22",
    },
    {
      content:
        "Given the above OCAPI definitions, which permission or permissions apply?",
      options: [
        "A. Allows external applications to create, update, and delete coupons",
        "B. Allows external applications to create coupons",
        "C. Allow external applications to create, update, and delete both coupons and coupon codes",
        "D. Allows external applications to update coupons",
      ],
      answer: "D",
      title: "Question 23",
    },
    {
      content:
        "Universal Containers sells physical gift cards for the holidays.What needs to occur to guarantee the cards will always be available?",
      options: [
        "A. Create an inventory record with an extremely high Allocation value (i.e., 1 billion certificates).",
        "B. Create an inventory record with an unlimited Allocation value.",
        "C. Create a perpetual inventory record.",
        "D. Create an inventory record with Backorder Handling enabled.",
      ],
      answer: "D",
      title: "Question 24",
    },
    {
      content:
        "A developer has the following files in template/resources:account.proiertiesweight.unit=kilosaccount_en.propiertiesweight.unit=stonesaccount_en_US.propiertiesweight.unit= poundsUsing the default locale configuration, what is the current outcome of the page that renders the account.isml template snippet below when visiting the Sofrefront with the English for Canada(en_CA) locale= Your parcel weighs 10 ${Resource.msg('weight.unit','account')}",
      options: [
        "A. Your parcel weighs 10 pounds.",
        "B. Your parcel weighs 10 kilos",
        "C. Your parcel weighs 10 stones.",
        "D. Your parcel weighs 10 undefined.",
      ],
      answer: "C",
      title: "Question 25",
    },
    {
      content:
        "Universal Containers has expanded its implementation to support German with a locale code of de. The current resource bundle is checkout.properties.To which file should the developer add German string values?",
      options: [
        "A. checkout.properties in the default locale folder",
        "B. checkout_de.properties in resources folder",
        "C. de_checkout.properties in resources folder",
        "D. checkout.properties in the de locale folder",
      ],
      answer: "C",
      title: "Question 26",
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
      answer: "A,C ",
      title: "Question 27",
    },
    {
      content:
        "Given a NewsletterSubscription custom object that has a key attribute named email of type String, what is the correct syntax to create the NewsletterSubscription custom object and persist it to the database?",
      options: [
        "A. Var customobject = dw.object.CustomObjectMgr. createCustomObject('NewsletterSubscription','email', newsLetterForm.email.value);",
        "B. Var customobject = dw.object.CustomObjectMgr. createCustomObject('NewsletterSubscription', newsLetterForm.email.value);",
        "C. Var customobject = dw.object.CustomObjectMgr.createNewsletterSubscription('email', newsLetterForm.email.value);",
        "D. Var customobject =dw.object.CustomObjectMgr.createCustomObject(newsletterForm.email.value,'NewsletterSubscription');",
      ],
      answer: "B",
      title: "Question 28",
    },
    {
      content:
        "A developer needs to show only car accessories when shoppers use the search term car accessories and exclude technology accessories and household accessories.Given the above requirement, what is the recommended approach using the Search Dictionaries Dashboard?",
      options: [
        "A. Create a Synonym Dictionary entry: car accessories, household, technology.Use search mode Exact Match",
        "B. Create a Common Phrase Dictionary entry: car accessories.Use search mode Exact Match.",
        "C. Create a Common Phrase Dictionary entry: car accessories, NOT household, NOT technology.Use search mode Exact Match.",
        "D. Create a Synonym Dictionary entry: car accessories, household, technology.Use search mode First Word.",
      ],
      answer: "B",
      title: "Question 29",
    },
    {
      content:
        "The developer created a new Storefront category in storefront-catalog-m-en, but when viewing the Storefront site, the category is not visible.What are two possible reasons?",
      options: [
        "A. The category is not sorted",
        "B. The Storefront catalog is offline",
        "C. The category is offline.",
        "D. The category does not contain available products",
      ],
      answer: "B,D",
      title: "Question 30",
    },
    {
      content:
        "A Digital Developer is inspecting the weekly service status report for a critical internally-hosted web service used in the application and notices that there are too many instances of unavailability.Which two solutions are possible options to reduce the unavailability of the service? (Choose two.)",
      options: [
        "A. Update the external service to have a faster response time.",
        "B. Change the code that makes the request to set the throwOnError attribute, of the service, to be true.",
        "C. Modify the code that makes the request to the external service to be wrapped in a try / catch block.",
        "D. Increase the web service time out.",
      ],
      answer: "A,C",
      title: "Question 31",
    },
    {
      content:
        "A developer is tasked with implementing the necessary code for a new Page Designer component.What are the two purposes of the JSON metadata definition file that the developer creates7 Choose 2 answers",
      options: [
        "A. Defines regions within the component type.",
        "B. Defines the business and rendering logic of the component required by the merchant.",
        "C. Defines the attributes that a merchant enters when using the component type.",
        "D. Defines the responsive layout of the rendered template.",
      ],
      answer: "A,C",
      title: "Question 32",
    },
    {
      content:
        "A developer is importing edits for two different sites into the same sandbox, and is provided with four different files.Which two XML files should the developer import using the site-specific Merchant Tools import modules, instead of the Administration section import modules?Choose 2 answers.",
      options: [
        "A. Promotions ( en sites y en online marketing)",
        "B. Site Jobs (sites)",
        "C. Search Settings En (search y en Sites)",
        "D. System type extensions (solo en Sites)",
      ],
      answer: "A,C",
      title: "Question 33",
    },
    {
      content:
        "Given a template rendered by a controller with caching and a remote include without caching, which situation applies?",
      options: [
        "A. The page is cached only for returning customers because of the remote include.",
        "B. Both the remote include portion and the rest of the page are cached.",
        "C. The remote include portion is not cached, but the rest of the page is cached.",
        "D. The page is not cached because the remote include introduces an uncached portion.",
      ],
      answer: "C",
      title: "Question 34",
    },
    {
      content:
        "A Digital Developer is working on a project to convert a pipeline to a JavaScript controller. UX Studio has a functioning pipeline debugger configured for the site. Assume the Developer will add a breakpoint to the controller when it is written.What must be done in order to use the debugger with the new controller when it is written?",
      options: [
        "A. Create and use a new controller debug configuration.",
        "B. Modify the debugger configuration and use the existing pipeline debugger.",
        "C. Create and use a new script debug configuration.",
        "D. Use the existing pipeline debugger.",
      ],
      answer: "B",
      title: "Question 35",
    },
    {
      content:
        "Universal Containers wants to change a content slot that is currently configured to display a content asset. Now they want the slot to display the top five selling boxes for the week.Which two changes need to be made for this to occur? (Choose two.)",
      options: [
        "A. Delete the existing content asset.",
        'B. Change the slot\'s configuration content type to "products."',
        'C. Change the slot\'s configuration content type to "recommendations."',
        "D. Change the slot's configuration template to the appropriate rendering template.",
      ],
      answer: "C,D",
      title: "Question 36",
    },
    {
      content:
        "Given a NewsletterSubscription custom object that has a key attribute named email of type String, what is the correct syntax to create the NewsletterSubscription custom object and persist it to the database?",
      options: [
        "A. Var customobject = dw.object.CustomObjectMgr. createCustomObject('NewsletterSubscription','email', newsLetterForm.email.value);",
        "B. Var customobject = dw.object.CustomObjectMgr. createCustomObject('NewsletterSubscription', newsLetterForm.email.value);",
        "C. Var customobject =dw.object.CustomObjectMgr.createCustomObject(newsletterForm.email.value,'NewsletterSubscription');",
        "D. Var customobject = dw.object.CustomObjectMgr.createNewsletterSubscription('email', newsLetterForm.email.value);",
      ],
      answer: "B",
      title: "Question 37",
    },
    {
      content:
        "A merchant wants customers to be able to order gift vouchers via their site. Since they can issue an unlimited number of these digital vouchers, this item should be available to sell at all items.How can a developer use Business Manager to ensure that the gift vouchers are always available?",
      options: [
        "A. Set StockLevel = maxAllocation for the producto.",
        "B. Manually set the inventory to a high number.",
        "C. Check the Available to Sell (ATS) flag dor the producto set",
        "D. Check the perpetual flag in the product inventory record",
      ],
      answer: "D",
      title: "Question 38",
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
      title: "Question 39",
    },
    {
      content:
        "A digital instance has one site, with one master product catalog separate from the site catalog. Some, but NOT all, products in the master catalog are assigned to categories of the site catalog.Using Business Manager, how can a Digital Developer create a catalog export file that contains only the products assigned to the site catalog?",
      options: [
        "A. Use the Site Import & Export module to export both the site catalog and the master catalog in a single archive.",
        "B. Use the Catalog Export module to export the master catalog, with a category-assignment search to export specific products.",
        "C. Use the Site Import & Export module to export the master catalog, filtered by site catalog categories to export specific products.",
        "D. Use the Catalog Export module to export the site catalog.",
      ],
      answer: "B",
      title: "Question 40",
    },
    {
      content:
        "A merchant has a requirement to sell a combination of four existing products with a unique product ID.This collection will be known as 'Our Top Combo', and is base don the merchant's trading information that shows this combination to be in high demand.What does the developer need to do next to fulfill this requirement?",
      options: [
        "A. Create a unique produce to called 'Our Top Combo' and add the four products into the Product Bundles tab.",
        "B. Create a recommendation rule associating the four products as a recommendation group.",
        "C. Create a Product Set called 'Our Top Combo' and add the products into the set.",
        "D. Create a Content Slot with Content Type = Product and add the four component products into that slot.",
      ],
      answer: "A",
      title: "Question 41",
    },
    {
      content:
        "Given the requirements:* To show the washing instructions for a clothing product on a dedicated section the detail page* Washing instructions come from the product information manager(PIM)* To have this attribute available to localize in the Storefront.Which action meets these requirements?",
      options: [
        "A. Add a resource file for every locale for which the attribute needs to be translated.",
        "B. Add a custom attribute for each locale",
        "C. Set the product system object type as localizable",
        "D. Set the custom attribute as localizable",
      ],
      answer: "C",
      title: "Question 42",
    },
    {
      content:
        "A developer uses the call() instance method of dw.svc.Service to invoke a web service and implemented the callback methods defined by the dw.avc.ServiceCaliback class.Which callback method is required only when invoking a SOAP service?",
      options: [
        "A. initServiceClient",
        "B. parseResponse",
        "C. createRequeat",
        "D. mockCall",
      ],
      answer: "A",
      title: "Question 43",
    },
    {
      content:
        "A developer has a sandbox with code to log a message during execution, and the following code:After the code executes, the developer does not see any log file with the message in the WebDAV folder. Which two tasks does the developer need to perform to correct this issue?Choose 2 answers",
      options: [
        "A. Set the root log level to debug.",
        "B. Check the box for Info under Log Files.",
        "C. Set the logging global preference to true.",
        "D. Request that the developer's account be given permission to the Log Center of the current realm.",
      ],
      answer: "B,D",
      title: "Question 44",
    },
    {
      content:
        "Given the code snippet aboce, what should be added after this code so it can be used for page component display?",
      options: [
        "A. Base.render = render;",
        "B. Module.exports = render;",
        "C. Module.exports.render = render;",
        "D. Module.exports = server.exports();",
      ],
      answer: "D",
      title: "Question 45",
    },
    {
      content:
        "A Digital Developer added a file named MyBusinessController.js in the cartridge named app_project. The project design calls for this new file to override MyBusinessController.js in client_project. The client_project cartridge contains other necessary functionality. Additional functionality is also included in the storefront_core and storefront_controllers cartridges.Which cartridge path meets the project requirements?",
      options: [
        "A. app_project:storefront_controllers:storefront_core",
        "B. storefront_core:storefront_controllers:client_project:app_project",
        "C. client_project:app_project:storefront_controllers:storefront_core",
        "D. app_project:client_project:storefront_controllers:storefront_core",
      ],
      answer: "D",
      title: "Question 46",
    },
    {
      content:
        "A merchant has complained to the developers that some products are not appearing in the storefront and has asked them to diagnose and solve the issue.Which two factors might be causing a product to be hidden?Choose 2 answers",
      options: [
        "A. Product lacks a price.",
        "B. Product is not online.",
        "C. Product Available to sell is <1.",
        "D. Product does not have any images.",
        "E. Product has been set to searchable.",
      ],
      answer: "A,D",
      title: "Question 47",
    },
    {
      content:
        "A Digital Developer adds the following line of code to a script.The code executes without error; however, the log file on disk does NOT contain the log message.Which two actions should be completed to write the log message to disk? (Choose two.)",
      options: [
        'A. Ensure that the "login" category is added to the Custom Log Filters in the Log Settings Business Manager module.',
        "B. Archive old log files to make room in the log directory.",
        "C. Ensure that the debug log level has been added to the custom log level types in the Global Preferences business manager module.",
        "D. Ensure that the debug log level is enabled to write to file in the Custom Log Settings Business Manager module.",
      ],
      answer: "B,C",
      title: "Question 48",
    },
    {
      content:
        "A developer needs to update the package.json file so that it points to the hock file for a cartridge, using the hooks keyword. Which snippets work correctly when added to the file?:",
      options: [
        "A. { hooks: ./scripts/hooks.json }",
        'B. { hooks: "./cartridge/scripts/hooks.json" }',
        'C. { "hooks": "./cartridge/scripts/hooks.json" }',
        'D. { "hooks": "./scripts/hooks.json" }',
      ],
      answer: "C",
      title: "Question 49",
    },
    {
      content:
        "A developer is implementing new Page Designer content on a merchant's Storefront and adds the line below toWhat does this achieve?",
      options: [
        "A. Filters Page Designer search results into separate page and component folders.",
        "B. Enables searching to find Page Designer content assets that are not in folders.",
        "C. Extends the ConrencSearchModei to allow the folder filter.",
        "D. Prevents Page Designer pages and components from being searchable.",
      ],
      answer: "B",
      title: "Question 50",
    },
    {
      content:
        "A merchant uploads an image using the Content Image Upload module of Business Manager.Which three modules can the merchant or developer use to display the image on the Storefront7 Choose 3 answers",
      options: [
        "A. Content assets",
        "B. Content slots",
        "C. Storefront catalogs",
        "D. ISML templates",
        "E. Payment types",
      ],
      answer: "A,B,C",
      title: "Question 51",
    },
    {
      content:
        'A Digital Developer selects "Show Orderable Products Only" in the Search > Search Preferences Business Manager module.Which business goal does this accomplish?',
      options: [
        "A. Exclude pre-order products from search results.",
        "B. Block displaying the product detail page if Available to Sell (ATS) = 0.",
        "C. Exclude back-ordered products from showing on the website.",
        "D. Exclude products from search results if Available to Sell (ATS) = 0.",
      ],
      answer: "D",
      title: "Question 52",
    },
    {
      content:
        "A developer needs to perform the same additional checks before completing multiple routes in a custom controller, in order to decide whether to render a template or redirect the user to a different page.According to SFRA best practices, what is the correct approach to improve code reusability in this scenario7",
      options: [
        "A. Define a new middleware function and use it in the existing routes.",
        "B. Append a new function to all the existing routes with the server module.",
        "C. Use the superModule property in the existing routes to extend their functionality.",
        "D. Replace the existing routes by creating a controller in separate new cartridge.",
      ],
      answer: "A",
      title: "Question 53",
    },
    {
      content:
        "Given the SFRA Controller below:Why would a JavaScript debugger, that is stopped at line 06, fall to show the viewdata variable in the inspection tool?",
      options: [
        "A. cache. applyDefauItCache is not a valid middleware.",
        "B. viewdata is a B2C Script reserved name.",
        "C. viewdata is assigned but not declared.",
        "D. viewdata is declared but not assigned.",
      ],
      answer: "C",
      title: "Question 54",
    },
    {
      content:
        "A developer is working on a new site for the U.S based on an existing Canadian site. One of the requirements is a change to the address form. The current Canadian form has an <options> list with the correct two-letter abbreviation for the provinces.The U.S. requirements are to:* Have an <options> list with the correct two-letter abbreviation for the states in place of the province field.* Set the U.S site locale.* Add the options list field definition to the XML file.How should the developer set up the files before making the required edits?",
      options: [
        "A. Create a copy of existing address.xml file in the default folder. Rename that file to adres_US.xml",
        "B. Create a new sub-folder in the forms folder. Name it en_US. Copy existing address.xml file in the new folder.",
        "C. Create a copy of existing address.xml file in the default folder. Rename that file to address_en_US.xml",
        "D. Create a new sub-folder in the forms folder. Name it US. Copy existing address.xml file in the new folder.",
      ],
      answer: "C",
      title: "Question 55",
    },
    {
      content:
        'A merchant checked the "Show Orderable Products Only" preference in Business Manager. What impact does this have on the Storefront from a user perspective?',
      options: [
        "A. Products with an Available to Sell (ATS) - 0 will be excluded from search results.",
        "B. Back-order products will be excluded from search results.",
        "C. The product detail page will be hidden if Available to Sell (ATS) = 0.",
        "D. Pre-order products will be excluded from search results.",
      ],
      answer: "A",
      title: "Question 56",
    },
    {
      content:
        'The developer has been given the following business requirement:The shipping method, "Free Standard Ground Shipping" has an exclusion for products with \'category equals or is child of electronics-televisions.\' The marketing department has scheduled a sale offering a "Free Standard Ground Shipping" method for brand XyzTv televisions for the next 3 months.What method accomplishes this while following best practices\'',
      options: [
        "A. Extend the code in cartridge/models/shipping/shippingMethod.js using module.superModule and add an exception for the specified brand.",
        'B. Create an allow list for the existing shipping method by adding a product exclusion for \'brand equals XyzTv\' to the exclusion list fo<" "Free Standard Ground Shipping."',
        "C. Create a new shipping method and label it \"Free Standard Ground Shipping\". Give it the qualifier 'brand equals XyzTv', and add it to the checkout options.",
        "D. Extend the CheckoutShippingServices controller using module.superModule and add an exception for the specified brand.",
      ],
      answer: "D",
      title: "Question 57",
    },
  ],
});
