window.testContent = window.testContent || [];
var testId = "Salesforce.B2C-Commerce-Developer";
var testName = "Salesforce.B2C-Commerce-Developer";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "Salesforce.B2C-Commerce-Developer.v2022-05-20.q52",
  content: [
    {
      content:
        "There are three logging categories: category1, category1.eu, and category1.us.In Business Manager, category1 is enabled for WARN level and no other categories are configured. All custom log targets are enabled. The code segment below executes. What is the result'",
      options: [
        "A. Logs will not be written.",
        "B. Logs will be written to the log file with a prefix custom-loggerFile.",
        "C. Logs will be written to the log file with a prefix loggerFile.",
        "D. Logs will be written to the log file with a prefix customwarn.",
      ],
      answer: "C",
      title: "Question 1",
    },
    {
      content:
        "A Digital Developer is working in a sandbox on a site named test-site using the domain test.demandware.net. The Developer needs to compile a url to make an Open Commerce API (OCAPI) request that returns product information.By default, which URL format is a proper Open Commerce API for Sandbox?",
      options: [
        "A. https://test.demandware.com/dw/shop/products/M1355?client_id=aaa...",
        "B. https://www.test.com/s/test-site/sfc/shop/products/M1355?client_id=aaa...",
        "C. https://test.demandware.net/s/test-site/dw/shop/v18_3/products/M1355?client_id=aaa...",
        "D. https://www.test.com/dw/shop/v18_3/products/M1355?client_id=aaa...",
      ],
      answer: "C",
      title: "Question 2",
    },
    {
      content:
        "A Digital Developer is working on a multi-site realm. A new site requires a different layout for the account landing page. The business logic and data model remain the same. The existing code is in AccountControl.js and accountlanding.isml in the app_storefront cartridge. The app_storefront cartridge contains code for all other business functions. The cartridge path for the new site is currently int_cybersource:int_paypal:app_storefront. The Developer creates a new cartridge named app_newsite that contains only the accountlanding.isml template for the new site. Which modification should be made to the new cartridge path?",
      options: [
        "A. Set the cartridge path to include only app_newsite.",
        "B. Set the cartridge path so that app_newsite is before app_storefront.",
        "C. Set the cartridge path so that app_newsite is after app_storefront.",
        "D. Set the cartridge path so that app_storefront is before int_cybersource.",
      ],
      answer: "D",
      title: "Question 3",
    },
    {
      content:
        "In Log Center, a developer notes a number of Cross Site Request Forgery (CSRF) log entries. The developer knows that this happens when a CSRF token is either not found or is invalid, and is working to remedy the situation as soon as possible. Which two courses of action might solve the problem? Choose 2 answers",
      options: [
        "A. Add the token in the ISML template.",
        "B. Extend the CSRF token validity to avoid timeouts.",
        "C. Delete the existing CSRF whitelists in Business Manager.",
        "D. Add csrfProtection.generateToken as a middleware step in the controller.",
      ],
      answer: "B,C",
      title: "Question 4",
    },
    {
      content:
        "A developer is given a task to implement a new Page Designer layout component that doesn't accept certain asset components. How should the developer achieve the above task?",
      options: [
        "A. Add layout_type_exclusion in the other asset components json configuration.",
        "B. Add component_type_Exclusions in the layout json configuration",
        "C. Add component_type_inclusion in the layout json configuration",
        "D. Add layout_type_inclusion in the target components json configurations.",
      ],
      answer: "C",
      title: "Question 5",
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
      title: "Question 6",
    },
    {
      content:
        "A digital instance has one site, with one master product catalog separate from the site catalog. Some, but NOT all, products in the master catalog are assigned to categories of the site catalog.Using Business Manager, how can a Digital Developer create a catalog export file that contains only the products assigned to the site catalog?",
      options: [
        "A. Use the Catalog Export module to export the site catalog.",
        "B. Use the Catalog Export module to export the master catalog, with a category-assignment search to export specific products.",
        "C. Use the Site Import & Export module to export both the site catalog and the master catalog in a single archive.",
        "D. Use the Site Import & Export module to export the master catalog, filtered by site catalog categories to export specific products.",
      ],
      answer: "B  References: ",
      title: "Question 7",
    },
    {
      content:
        'A Digital Developer extends a system object, Product, and adds a Boolean attribute, "sellable," to it.Assuming "prod" is the variable name handling the product, what code can the Developer use to access it?',
      options: [
        "A. prod.persistable.sellable",
        "B. prod.extended.sellable",
        "C. prod.custom.sellable",
        "D. prod.sellable",
      ],
      answer: "C",
      title: "Question 8",
    },
    {
      content:
        "A developer wants to use an external application to manage their stores information (such as opening hours, and so on), and see their changes in their B2C Commerce Staging instance aas son as they are saved. What is the appropriate technique the developer should perform to allow the merchant to create a new store in this scenario?",
      options: [
        "A. A POST request to the Stores Data OCAPI.",
        "B. A PUT request to the Stores Data OCAPI.",
        "C. A PATCH request to the Stores Data OCAPI.",
        "D. An UPDATE request to the Stores Data OCAPI.",
      ],
      answer: "B  Siempre que sea un objeto standard será put en vez de post ",
      title: "Question 9",
    },
    {
      content:
        "A merchant has asked their development team to add a new site. Which two tasks are essential for correct site configuration prior to launch? Choose 2 answers",
      options: [
        "A. Assign a default payment method.",
        "B. Assign a default currency.",
        "C. Assign a default payment type.",
        "D. Assign a default payment processor.",
        "E. Assign the appropriate taxation type.",
      ],
      answer: "B,E",
      title: "Question 10",
    },
    {
      content:
        "The developer created a new Storefront category in storefront-catalog-m-en, but when viewing the Storefront site, the category is not visible. What are two possible reasons?",
      options: [
        "A. The Storefront catalog is offline",
        "B. The category is offline.",
        "C. The category does not contain available products",
        "D. The category is not sorted",
      ],
      answer: "A,C",
      title: "Question 11",
    },
    {
      content:
        "A merchant has a requirement to sell a combination of four existing products with a unique product ID.This collection will be known as 'Our Top Combo', and is base don the merchant's trading information that shows this combination to be in high demand. What does the developer need to do next to fulfill this requirement?",
      options: [
        "A. Create a Product Set called 'Our Top Combo' and add the products into the set.",
        "B. Create a unique produce to called 'Our Top Combo' and add the four products into the Product Bundles tab.",
        "C. Create a Content Slot with Content Type = Product and add the four component products into that slot.",
        "D. Create a recommendation rule associating the four products as a recommendation group.",
      ],
      answer: "B",
      title: "Question 12",
    },
    {
      content:
        "A Digital Developer is requesting product information for an external integration. The following Open Commerce API (OCAPI) request is NOT functioning correctly:How should the Developer change the request?",
      options: [
        "A. Include an authentication token in the request.",
        "B. Change the HTTP method to PUT.",
        "C. Change the HTTP method to GET.",
        "D. Change the URI to /dw/shop/v18_3/products/creative-zen-v.",
      ],
      answer: "C",
      title: "Question 13",
    },
    {
      content:
        "A developer uses the call() instance method of dw.svc.Service to invoke a web service and implemented the callback methods defined by the dw.avc.ServiceCaliback class. Which callback method is required only when invoking a SOAP service?",
      options: [
        "A. createRequeat",
        "B. parseResponse",
        "C. initServiceClient",
        "D. mockCall",
      ],
      answer: "C",
      title: "Question 14",
    },
    {
      content:
        "A merchant has reported that customers are seeing low stock items at the top of their search results, giving them a subpar customer experience and impacting conversion. How might this issue be resolved to ensure a better customer journey?",
      options: [
        "A. In Business Manager, set an availability low ranking threshold in Search Preferences.",
        "B. In Business Manager, select Show Orderable Products Only at the root level to hide any products that are currently out of stock.",
        "C. In Business Manager, enter a higher boost factor for availability in Searchable Attributes.",
        "D. Create a job that sets all unavailable products to be hidden. Schedule the job to run hourly to clean up the catalog on a regular basis.",
      ],
      answer: "D",
      title: "Question 15",
    },
    {
      content:
        "A merchant has complained to the developers that some products are not appearing in the storefront and has asked them to diagnose and solve the issue. Which two factors might be causing a product to be hidden? Choose 2 answers",
      options: [
        "A. Product Available to sell is <1.",
        "B. Product lacks a price.",
        "C. Product is not online.",
        "D. Product has been set to searchable.",
        "E. Product does not have any images.",
      ],
      answer: "B,E",
      title: "Question 16",
    },
    {
      content:
        "Which code sample is required to use a custom tag provided in SiteGenesis in an ISML template?",
      options: ["A. Option A", "B. Option C", "C. Option B", "D. Option D"],
      answer: "C",
      title: "Question 17",
    },
    {
      content:
        "A Digital Developer suspects a logical error in a script. Which action will help locate the error?",
      options: [
        "A. Print all values in the script node called before the current script.",
        "B. Check request logs for evidence of the logical error.",
        "C. Put breakpoints in the code, debug, and examine variable values.",
        "D. Submit a support ticket to B2C Commerce.",
      ],
      answer: "B",
      title: "Question 18",
    },
    {
      content:
        "Given the customer basket described below:* A customer has an existing basket that consists of multiple items.* One of the items is identified as a gift ítem by an attribute at the product line ítem. The developer needs to write custom code to fetch the customer basket and then modify the basket based upon the items in the cart. If the basket contains any gift items, modify the basket and create a separate shipment for the gift item.Four hooks are required to make the modification, beginning with modifyGETRespone and ending with validatebasket.* Dw.ocapi.shop.basket.modifyGETResponse* -- missing hook -* -- missing hook --* dw.ocapi.shop.basket.validateBasketWhat are the two missing hooks in the middle?",
      options: [
        "A. dw.ocapi.shop.basket.shipment.afterDELETE",
        "B. dw.ocapi.shop.basket.shipment.beforePATCH",
        "C. dw.ocapi.shop.basket.shipment.beforeDELETE",
        "D. dw.ocapi.shop.baskep.shopment.beforePOST",
      ],
      answer: "B,D  Estos indican antes de actualizar y antes de introducir ",
      title: "Question 19",
    },
    {
      content:
        "A Digital Developer has created a new PaymentForm controller that requires communication with the server and must be made using the HTTPS protocol. Which code sample should the Developer use to make sure that HTTPS is used?",
      options: [
        "A. exports.PaymentForm = guard.ensure(['http', 'post', 'loggedIn'], handlePaymentForm);",
        "B. exports.PaymentForm = guard.expose(['post', 'loggedIn'], handlePaymentForm);",
        "C. exports.PaymentForm = guard.httpsPost(handlePaymentForm);",
        "D. exports.PaymentForm = guard.ensure(['https', 'post', 'loggedIn'], handlePaymentForm);",
      ],
      answer: "D  References: ",
      title: "Question 20",
    },
    {
      content:
        "Which line of code creates a content slot that can be included on homepage.isml to display on the home page?",
      options: [
        'A. <isslot id="my_banner " description="for home page" type="global" context="content" context-object="${pdict.ContentSearchResult.content}"/>',
        'B. <isslot id="my_banner " description="for home page" type="global" context="homepage"/>',
        'C. <isslot id="my_banner " description="for home page" context="global">',
        'D. <isslot id="my_banner " description="for home page" context="global" context-object="${pdict.CurrentHomePage}"/>',
      ],
      answer: "C  References: ",
      title: "Question 21",
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
      answer: "A,C,D  References: ",
      title: "Question 22",
    },
    {
      content:
        "Universal Containers specifies a new category hierarchy for navigating the digital commerce storefront. A Digital Developer uses Business Manager to manually create a catalog with the specified category hierarchy, then uses the Products & Catalogs > Import & Export module to export the catalog as a file. How can other Developers with sandboxes on the same realm create the same catalog in their own sandboxes?",
      options: [
        "A. Use Business Manager to upload and import a copy of the export file obtained from the original Developer.",
        "B. Use the remote upload capability of the Site Import & Export module of Business Manager.",
        "C. Use the import capability of the Site Import & Export module of Business Manager.",
        "D. Use the Business Manager Data Replication module to replicate the catalog from the original Developer's sandbox.",
      ],
      answer: "C  References: ",
      title: "Question 23",
    },
    {
      content:
        "Universal Containers recently completed updates to their storefront shopping cart page. A problem has been discovered since the update. Users are no longer able to submit coupon codes on this page. Additionally, authenticated users who try to add a coupon are logged out. The following processing code is found in the Cart.js controller file:What should the Developer verify to identify the issue?",
      options: [
        "A. The CSRF cartridge is included in the site's cartridge path.",
        "B. The CSRF settings in Business Manager are properly configured.",
        "C. The CSRF token is present in the form and is being submitted in the request.",
        "D. The form group has the secure attribute set to true.",
      ],
      answer: "C",
      title: "Question 24",
    },
    {
      content:
        'A Digital Developer has a new requirement to disable the "Discover" credit card type for all checkouts. What does the Developer need to change in Business Manager to fulfill this requirement?',
      options: [
        "A. Checkout exclusion rules in the Merchant Tools > Site Preferences > Checkout Preferences module.",
        "B. Credit card exclusion rules in the Merchant Tools > Site Preferences > Payment Preferences module.",
        "C. Credit cards in the Merchant Tools > Ordering > Payment Methods module.",
        "D. Credit card exclusion rules in the CreditCardType.json configuration file.",
      ],
      answer: "C  References: ",
      title: "Question 25",
    },
    {
      content:
        "When looking at Custom Object instances for a site, a merchant notices that the creation date is not showing up on the instances in Business Manager.Where should the developer add this attribute to the Custom Object so it is visible for the merchant to see in Business Manager'",
      options: [
        "A. Add the creation date to the attribute group for the Custom Object.",
        "B. Assign the current date/time to a new custom attribute, creationDate, via code.",
        "C. Mark the existing creation date attribute as visible.",
        "D. Add the creation date to the attributes of the Custom Object.",
      ],
      answer: "D",
      title: "Question 26",
    },
    {
      content:
        "A developer needs to perform the same additional checks before completing multiple routes in a custom controller, in order to decide whether to render a template or redirect the user to a different page.According to SFRA best practices, what is the correct approach to improve code reusability in this scenario7",
      options: [
        "A. Append a new function to all the existing routes with the server module.",
        "B. Replace the existing routes by creating a controller in separate new cartridge.",
        "C. Use the superModule property in the existing routes to extend their functionality.",
        "D. Define a new middleware function and use it in the existing routes.",
      ],
      answer: "D",
      title: "Question 27",
    },
    {
      content:
        "Which two items are appropriate content of custom logs implemented at checkout? Choose 2 answers:",
      options: [
        "A. Payment gateway service response code",
        "B. Customer's password at post-checkout sign up",
        "C. Order failure information",
        "D. Transaction's credit card information",
      ],
      answer: "A,C",
      title: "Question 28",
    },
    {
      content:
        "Given a file in a plug-in cartridge with the following code:'use strict':Var base = module.superModule;Function applyCustomCache (req,res,next){res.CachePeriod = 6; //eslint-disable-line no-param-reassignres.cachePeriodUnit = 'hours') //eslint-disable-line no-param-reassignnext();}Module.exports = base;Module.exports.applyCustomCache = applyCustomCache;What does this code extend?",
      options: [
        "A. A middleware script",
        "B. A decorator",
        "C. A controller",
        "D. A model",
      ],
      answer: "C",
      title: "Question 29",
    },
    {
      content:
        "Universal Containers wants to change a content slot that is currently configured to display a content asset. Now they want the slot to display the top five selling boxes for the week. Which two changes need to be made for this to occur? (Choose two.)",
      options: [
        "A. Delete the existing content asset.",
        "B. Change the slot's configuration template to the appropriate rendering template.",
        'C. Change the slot\'s configuration content type to "products."',
        'D. Change the slot\'s configuration content type to "recommendations."',
      ],
      answer: "B,D",
      title: "Question 30",
    },
    {
      content:
        "Universal Containers wants to give customers the ability to refine product search results by a product custom attribute, weightCapacity. Which series of steps should a Digital Developer take to show this refinement on the storefront?",
      options: [
        "A. Define a sorting rule for weightCapacity, then rebuild the product search index.",
        "B. Define a search refinement for weightCapacity, then rebuild the product search index.",
        "C. Define search-suggestion buckets for weightCapacity, then rebuild the product search index.",
        "D. Define a search refinement for weightCapacity, then clear the page cache segment for Search-Show.",
      ],
      answer: "B  References: ",
      title: "Question 31",
    },
    {
      content:
        "A merchant wants customers to be able to order gift vouchers via their site. Since they can issue an unlimited number of these digital vouchers, this item should be available to sell at all items. How can a developer use Business Manager to ensure that the gift vouchers are always available?",
      options: [
        "A. Check the perpetual flag in the product inventory record",
        "B. Check the Available to Sell (ATS) flag dor the producto set",
        "C. Manually set the inventory to a high number.",
        "D. Set StockLevel = maxAllocation for the producto.",
      ],
      answer: "A",
      title: "Question 32",
    },
    {
      content:
        "A client that sells to multiple countries in Europe needs to disable Apple Pay for Denmark. Which Business Manager module is used to achieve this requirement?",
      options: [
        "A. Payment Methods",
        "B. Payment Processors",
        "C. Locale Payments",
        "D. Apple Pay",
      ],
      answer: "D",
      title: "Question 33",
    },
    {
      content:
        "A Digital Developer has been given a specification to integrate with a REST API for retrieving weather conditions. The service expects parameters to be form encoded. Which service type should the Developer register?",
      options: ["A. FTP", "B. HTTP Form", "C. WebDAV", "D. SOAP"],
      answer: "B",
      title: "Question 34",
    },
    {
      content:
        "A Digital Developer noticed that cartridges in their workspace are NOT executing. The Developer confirms that the cartridges are uploaded to the B2C Commerce server connection's target version directory. Which action potentially solves this problem?",
      options: [
        "A. Set the active code version to use the latest compatibility mode.",
        "B. Remove invalid characters from the code version's name.",
        "C. Remove invalid characters from cartridge file and folder names.",
        "D. Set the server connection's target version directory to the active code version.",
      ],
      answer: "D  References: ",
      title: "Question 35",
    },
    {
      content:
        "A Digital Developer has been given a requirement to add fault tolerance to an existing web service integration that uses Service Framework. Administrators at Universal Containers need to be able to configure the timeout and rate limiting. Which approach should the Developer use to implement the requirement?",
      options: [
        "A. Implement a condition that checks to see if the response was empty and execute fallback code if true.",
        "B. Use the setTimeout method to execute fallback code if the request has NOT completed.",
        "C. Implement a ServiceUnavailableException exception handler to execute fallback code.",
        "D. Create a site preference to store timeout settings and implement an IOException handler to execute fallback code.",
      ],
      answer: "C",
      title: "Question 36",
    },
    {
      content:
        "A developer is tasked with implementing the necessary code for a new Page Designer component. What are the two purposes of the JSON metadata definition file that the developer creates7 Choose 2 answers",
      options: [
        "A. Defines the attributes that a merchant enters when using the component type.",
        "B. Defines regions within the component type.",
        "C. Defines the responsive layout of the rendered template.",
        "D. Defines the business and rendering logic of the component required by the merchant.",
      ],
      answer: "A,B",
      title: "Question 37",
    },
    {
      content:
        "A developer must configure permissions for an Open Commerce API resource on a sandbox instance that currently does not have any permissions configured. Which two configuration properties are required to enable Access to the resource? Choose 2 answers",
      options: [
        "A. Client_id",
        "B. Resource_id",
        "C. Versión_range",
        "D. Read_attributes",
      ],
      answer: "A,B",
      title: "Question 38",
    },
    {
      content:
        "Which three operations should be done in a controller? Choose 3 answers",
      options: [
        "A. Generate the response as JSON or HTML",
        "B. Use the Script API to generate data for the view.",
        "C. Use the model needed for the view.",
        "D. Create a plain JavaScript object representing a system object",
        "E. Use middleware functions when applicable",
      ],
      answer: "A,C,E",
      title: "Question 39",
    },
    {
      content:
        "A client wants to differentiate their monobrand stores with a special icon when shown in the store locator. The information is saved in a true/false custom attribute for each Store object in Merchant tools. How should the developer follow SFRA best practices to expose this data for rendering?",
      options: [
        "A. Ad dan <isscript> to the template, and call StoreMgr.searchStoresByCoordinates();",
        "B. Pass the Store system object to the template, so that custom propierties are available",
        "C. Extend the existing Stores_Find controller with a new middleware function that performs the query",
        "D. Use the module.superModule functionality and the call method to add a new property to the Store Model.",
      ],
      answer: "D",
      title: "Question 40",
    },
    {
      content:
        "Which three configuration does a developer need to ensure to have a new product visible in the Storefront? Choose 3 answers",
      options: [
        "A. The search index is built.",
        "B. The product has a master product",
        "C. The product is online and searchable",
        "D. The product has a Price",
        "E. The Storefront catalog that contains the product is assigned to a site",
      ],
      answer: "A,C,E",
      title: "Question 41",
    },
    {
      content:
        "A Digital Developer wants to selectively retrieve products and process them from an iPhone. Which action should the Developer take, given that JavaScript controllers CANNOT be used?",
      options: [
        "A. Create a webservice to retrieve products.",
        "B. Use OCAPI and invoke it in native language.",
        "C. Use WebDAV Client to retrieve products.",
        "D. Use import/export in Business Manager.",
      ],
      answer: "C",
      title: "Question 42",
    },
    {
      content:
        "The following sample code is NOT providing the desired results. The Digital Developer needs to add an entry to the logs to debug the problem. Which statement correctly adds a log entry?",
      options: [
        "A. Logger.fault('Unable to find Apple Pay payment instrument for order.'+paymentInstruments);",
        "B. Logger.exception('Unable to find Apple Pay payment instrument for order.'+paymentInstruments);",
        "C. Logger.error('Unable to find Apple Pay payment instrument for order.'+paymentInstruments);",
        "D. Logger.getErrorLog().log('Unable to find Apple Pay payment instrument for order.'+paymentInstruments);",
      ],
      answer: "B",
      title: "Question 43",
    },
    {
      content:
        "A Digital Developer is working on a project to convert a pipeline to a JavaScript controller. UX Studio has a functioning pipeline debugger configured for the site. Assume the Developer will add a breakpoint to the controller when it is written. What must be done in order to use the debugger with the new controller when it is written?",
      options: [
        "A. Create and use a new script debug configuration.",
        "B. Create and use a new controller debug configuration.",
        "C. Use the existing pipeline debugger.",
        "D. Modify the debugger configuration and use the existing pipeline debugger.",
      ],
      answer: "D",
      title: "Question 44",
    },
    {
      content:
        'Given the following ISML example, how should a developer reference the product object in the current iteration of the basket?<isloop ítems ="${pdict.Basket.products}" var="product" status= "loopstatus">...</isloop>',
      options: [
        "A. product",
        "B. pdict.Basket.products{loopstatus}",
        "C. loopstatus.product",
        "D. pdict.product",
      ],
      answer: "B ",
      title: "Question 45",
    },
    {
      content:
        "Recent code changes to an existing cartridge do not appear correctly on a Storefront. The developer confirms that the code is uploaded in the IDE and ensures that the cartridge is associated with the sandbox. Which two additional steps should the developer take to troubleshoot this problem? Choose 2 answers",
      options: [
        "A. Check the Storefront site cartridge path.",
        "B. Check that the search index was recently rebuilt.",
        "C. Check the Business Manager site cartridge path.",
        "D. Check that the correct code version is selected.",
      ],
      answer: "A,B",
      title: "Question 46",
    },
    {
      content:
        "A Digital Developer has detected storefront pages being rendered with an error message. After inspecting the log files, the Developer discovered that an enforced quota is being exceeded. What action should the Developer take to stop the quota violation?",
      options: [
        "A. Rewrite the code that is causing the overage.",
        "B. Change the Business Manager configuration for the quota settings.",
        "C. Take no action, the overage will be resolved when concurrent visitors are reduced.",
        "D. Ask support to remove the quota limit.",
      ],
      answer: "B  References: ",
      title: "Question 47",
    },
    {
      content:
        "Universal Containers needs to have Apple Pay disabled for the country of Spain. Which Business Manager module should the Developer use to meet this requirement?",
      options: [
        "A. Merchant Tools > Ordering > Payment Methods",
        "B. Merchant Tools > Site Preferences > Apple Pay",
        "C. Merchant Tools > Ordering > Payment Processors",
        "D. Merchant Tools > Site Preferences > Payment Types",
      ],
      answer: "A  References: ",
      title: "Question 48",
    },
    {
      content:
        "Which method is efficient and scalable because it uses the product search index rather than searching the database?",
      options: [
        "A. ProductSearcbHodel().gerProductSearchHita()",
        "B. ProductVanari.cnMcciel.aerVariams ()",
        "C. ProduccAvailabiliryModel.isOrderable()",
        "D. ProducrlndexModel.getOrderableProductsOnly()",
      ],
      answer: "A",
      title: "Question 49",
    },
    {
      content:
        "Refer to the screen shot below:Given a site called RefArch that has the settings shown, what must be done for RefArch to use the same customer list as RefArchGlobal?",
      options: [
        "A. Select RefArchGlobal in the dropdown for Customer List.",
        'B. Enable "Customer List Sharing" in Global Preferences.',
        "C. Import the RefArchGlobal customer list into the RefArch site.",
        'D. Enable "Customer List Sharing" in Site Preferences.',
      ],
      answer: "D",
      title: "Question 50",
    },
    {
      content:
        "A client has a requirement to render different content on the homepage based on if the customer is logged in or guest user. What should a developer implement to achieve this requirement?",
      options: [
        "A. Write specific custom code in the Content Asset for a customer that is a registered, versus unregistered, user.",
        "B. Set the Content Asset configuration for a customer that is a registered, versus unregistered, user.",
        "C. Add specific custom messages in Page Designer for a customer that is a registered, versus unregistered, user.",
        "D. Set the Content Slot configuration so it is based on the system customer group registered, versus unregistered.",
      ],
      answer: "D",
      title: "Question 51",
    },
    {
      content:
        "A Digital Developer has a site export file on their computer that needs to be imported into their sandbox. How should the developer update their sandbox with the data in this file?",
      options: [
        "A. Upload the file to the Impex WebDAV directory and import using the Site Import tool within UX Studio.",
        "B. Upload the file to the Static WebDAV directory and import using the Import & Export Business Manager module.",
        "C. Upload and import the file using the local option within the Site Import & Export Business Manager module.",
        "D. Connect and import the file using the remote option within the Site Import & Export Business Manager module.",
      ],
      answer: "C",
      title: "Question 52",
    },
  ],
});
