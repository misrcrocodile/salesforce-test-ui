window.testContent = window.testContent || [];
var testId = "Salesforce.B2C-Commerce-Developer";
var testName = "Salesforce.B2C-Commerce-Developer";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "Salesforce.B2C-Commerce-Developer.v2022-07-21.q51",
  content: [
    {
      content:
        "A merchant has a content slot on a page that currently displays products based on the top Sellers for the current week. They wish to change this functionality and, instead, have the slot render a specific content asset so that the content experience is more personalized to the visitors. Which two actions are necessary to make this change? Choose 2 answers",
      options: [
        "A. Change the rendering template in the slot configuration",
        "B. Delete the existing content slot and create a new one.",
        "C. Change the content type for the slot configuration",
        "D. Change the default setting in the slot configuration",
      ],
      answer: "A,C",
      title: "Question 1",
    },
    {
      content:
        "A developer needs to perform the same additional checks before completing multiple routes in a custom controller, in order to decide whether to render a template or redirect the user to a different page.According to SFRA best practices, what is the correct approach to improve code reusability in this scenario7",
      options: [
        "A. Append a new function to all the existing routes with the server module.",
        "B. Define a new middleware function and use it in the existing routes.",
        "C. Replace the existing routes by creating a controller in separate new cartridge.",
        "D. Use the superModule property in the existing routes to extend their functionality.",
      ],
      answer: "B",
      title: "Question 2",
    },
    {
      content:
        "A developer needs to show only car accessories when shoppers use the search term car accessories and exclude technology accessories and household accessories.Given the above requirement, what is the recommended approach using the Search Dictionaries Dashboard?",
      options: [
        "A. Create a Common Phrase Dictionary entry: car accessories.Use search mode Exact Match.",
        "B. Create a Synonym Dictionary entry: car accessories, household, technology.Use search mode First Word.",
        "C. Create a Synonym Dictionary entry: car accessories, household, technology.Use search mode Exact Match",
        "D. Create a Common Phrase Dictionary entry: car accessories, NOT household, NOT technology.Use search mode Exact Match.",
      ],
      answer: "A",
      title: "Question 3",
    },
    {
      content:
        "A Digital Developer wants pass control to an ISML template from a JavaScript Controller and load product on the pipeline dictionary with the name myProduct. Which code sample will achieve this?",
      options: [
        'A. ISML.renderTemlpate ( "helloworld.isml", { "myProduct": "product" });',
        'B. ISML.renderTemlpate ( "helloworld.isml", { "product": myProduct });',
        'C. ISML.renderTemlpate ( "helloworld.isml", { product: myProduct });',
        'D. ISML.renderTemlpate ( "helloworld.isml", { myProduct: product });',
      ],
      answer: "A",
      title: "Question 4",
    },
    {
      content:
        "Which three techniques improve client-side performance in production while following documented best practices? (Choose three.)",
      options: [
        "A. Place CSS outside of templates.",
        "B. Use inline Javascript.",
        "C. Compress CSS.",
        "D. Use one style sheet for each ISML decorator template.",
        "E. Combine several images into a single image.",
      ],
      answer: "B,C,D",
      title: "Question 5",
    },
    {
      content:
        "A retailer notices that the Account Addresses page is showing the wrong shopper's address. Which tool should the developer start with to identify the issue?",
      options: [
        "A. Code Profiler",
        "B. Reports and Dashboards Module",
        "C. Storefront Toolkit",
        "D. Pipeline profiler",
      ],
      answer: "C",
      title: "Question 6",
    },
    {
      content:
        "A developer wants to create in Business Manager extension with the cartridge named plugin_vm_extension. Which two steps should the developer take for the extension option to show up in Business Manager? Choose 2 answers:",
      options: [
        "A. Add plugin_bm_extension to the cartridge path under business manager cartridge site",
        "B. Add the appropiate roles and permission to the user to view the business manager extension.",
        "C. Add plugin_bm_extension to the cartridge path under Storefront cartridge site path.",
        "D. Activate a new code version for the Business Manager Site.",
      ],
      answer: "A,D ",
      title: "Question 7",
    },
    {
      content:
        "A developer is working on a new site for the U.S based on an existing Canadian site. One of the requirements is a change to the address form. The current Canadian form has an <options> list with the correct two-letter abbreviation for the provinces. The U.S. requirements are to:* Have an <options> list with the correct two-letter abbreviation for the states in place of the province field.* Set the U.S site locale.* Add the options list field definition to the XML file. How should the developer set up the files before making the required edits?",
      options: [
        "A. Create a new sub-folder in the forms folder. Name it US. Copy existing address.xml file in the new folder.",
        "B. Create a copy of existing address.xml file in the default folder. Rename that file to adres_US.xml",
        "C. Create a copy of existing address.xml file in the default folder. Rename that file to address_en_US.xml",
        "D. Create a new sub-folder in the forms folder. Name it en_US. Copy existing address.xml file in the new folder.",
      ],
      answer: "C",
      title: "Question 8",
    },
    {
      content:
        "Universal Containers has expanded its implementation to support German with a locale code of de. The current resource bundle is checkout.properties.To which file should the developer add German string values?",
      options: [
        "A. de_checkout.properties in resources folder",
        "B. checkout_de.properties in resources folder",
        "C. checkout.properties in the default locale folder",
        "D. checkout.properties in the de locale folder",
      ],
      answer: "A",
      title: "Question 9",
    },
    {
      content:
        "Once the Cache Information tool of the storefront toolkit is enabled, how can a Digital Developer view caching information for a particular component of the page?",
      options: [
        "A. Start a pipeline debugging session and view the caching information provided.",
        "B. Right-click on the component in UX Studio and view the caching properties of the file.",
        "C. Hover over the caching icons now present on the storefront.",
        "D. Open the Request Logs to view the caching information.",
      ],
      answer: "C",
      title: "Question 10",
    },
    {
      content:
        "A Storefront is designed so that multiple pages share a common header and footer layout. Which ISML tag should a developer use on the templates for these pages to avoid code repetition in the most effective way?",
      options: [
        "A. <isdecorate> ... </isdecorate>",
        "B. <isinclude> ... </isinclude>",
        "C. <iscontent> ... </iscontent>",
        "D. <isreplace> ... </isreplace>",
      ],
      answer: "A",
      title: "Question 11",
    },
    {
      content:
        'The client provides the system integrator with translation messages for the newly added "French" ("fr") locale. What is the correct folder to store the associated .properties files?',
      options: [
        "A. cartridge/templates/resources/fr",
        "B. cartridge/templates/fr",
        "C. cartridge/resources",
        "D. A cartridge/templates/resources",
      ],
      answer: "D",
      title: "Question 12",
    },
    {
      content:
        "A developer has custom debug statements in a script, but the messages are not showing up in the Storefront Toolkit Request Log. Which step needs to be completed to get the messages to appear in the Request Log?",
      options: [
        "A. In Global preferences, check the box for Enable custom logging in Request Log.",
        "B. In Custom Log Settings, check the DEBUG box for Select Log Levels Written to Files.",
        "C. In custom Log Settings, activate the loggin category at DEBUG level.",
        "D. In Site Preferences, check the box for Enable custom Logging in Request Log",
      ],
      answer: "B",
      title: "Question 13",
    },
    {
      content:
        "The following code ensures that an address ID CANNOT be used if it is already in use by another address in the customer's address book. There is a problem with the code. The error message for an invalid address ID is never shown to the user on the form field. How should the Digital Developer resolve this issue so that the error message is displayed on the address ID form field?",
      options: [
        'A. addressForm.invalidateFormElement("addressid");',
        "B. addressForm.addresssid.invalidateFormElement();",
        "C. addressForm.addresssid.invalidateFormElement = true;",
        "D. addressForm.invalidateFormElement(addressForm.addressid);",
      ],
      answer: "D",
      title: "Question 14",
    },
    {
      content:
        "In Log Center, a developer notes a number of Cross Site Request Forgery (CSRF) log entries. The developer knows that this happens when a CSRF token is either not found or is invalid, and is working to remedy the situation as soon as possible. Which two courses of action might solve the problem? Choose 2 answers",
      options: [
        "A. Add csrfProtection.generateToken as a middleware step in the controller.",
        "B. Add the token in the ISML template.",
        "C. Delete the existing CSRF whitelists in Business Manager.",
        "D. Extend the CSRF token validity to avoid timeouts.",
      ],
      answer: "C,D",
      title: "Question 15",
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
      answer: "B",
      title: "Question 16",
    },
    {
      content:
        "A developer has a specification to integrate with a REST API for retrieving traffic conditions. The service expects parameters to be form encoded. Which service type should the developer register?",
      options: ["A. SOAP Form", "B. POST Form", "C. HTML Form", "D. HTTP Form"],
      answer: "D",
      title: "Question 17",
    },
    {
      content:
        "Given the requirements:* To integrate with an external web service using HTTP requests* To create a service for this purpose with the Service framework using the LocalServiceRegistry class.* To test the service before the external service provider makes the API available Which solution allows the developer to satisfy the requirements?",
      options: [
        "A. Create a service and a Sitepreference that induce the service to respond witch a mock response using a conditional.",
        "B. Create a service and implement the mockfull callback and a sitepreference to enable or disable the mock response.",
        "C. Create two services, one mock and the real one, and a Sitepreference that enable the mock or the real one",
        "D. Create a service and implement the mockFill callback and set the service mode to mock.",
      ],
      answer: "D",
      title: "Question 18",
    },
    {
      content:
        "Universal Containers wants to change a content slot that is currently configured to display a content asset. Now they want the slot to display the top five selling boxes for the week. Which two changes need to be made for this to occur? (Choose two.)",
      options: [
        'A. Change the slot\'s configuration content type to "recommendations."',
        "B. Change the slot's configuration template to the appropriate rendering template.",
        "C. Delete the existing content asset.",
        'D. Change the slot\'s configuration content type to "products."',
      ],
      answer: "A,B",
      title: "Question 19",
    },
    {
      content:
        'Given a job step configured in the steptype.json, a developer needs to add a custom status code"No_FILES_FOUND". Which code snippet will complete the requirement?',
      options: [
        "A. var status = {success: 'OK'. Message: 'NO_FILES_FOUND'};return status;",
        "B. var status = require('dw/system/status');return new Status(Status.OK, 'NO_FILES_FOUND');",
        "C. this.status = 'NO_FILES_FOUND'return this;",
        "D. return 'NO_FILES_FOUND",
      ],
      answer: "B ",
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
      answer: "C",
      title: "Question 21",
    },
    {
      content:
        "A client sells its product in single-brand stores as well as in multi-brand stores. When shown in the store locator list, the client wants the single-brand stores to have a particular background color to highlight them. Which Business Manager action should be completed to allow the developer to apply different styling to the single-brand stores?",
      options: [
        "A. Create a new SingleBrandStore custom object configuration.",
        "B. Adjust the relevant Site Preference in the Stores group",
        "C. Configure the existing Store custom object type definition",
        "D. Add a Boolean custom attribute to the Store system object",
      ],
      answer: "A",
      title: "Question 22",
    },
    {
      content:
        "Which technical reports datapoint measures the performance of a controller's script execution if network factors and Web Adaptor processing is ignored?",
      options: [
        "A. Call count",
        "B. Cache hit ratio",
        "C. Response time",
        "D. Processing time",
      ],
      answer: "D",
      title: "Question 23",
    },
    {
      content:
        "A Digital Developer needs to store information temporarily and decides to create a custom object. Which code creates a custom object?",
      options: [
        "A. CustomObject.createCustomObject(CustomObjectType,primaryKey);",
        "B. CustomObject.createCustomObject(primaryKey,CustomObjectType);",
        "C. CustomObjectMgr.createCustomObject(primaryKey);",
        "D. CustomObjectMgr.createCustomObject(CustomObjectType,primaryKey)",
      ],
      answer: "A",
      title: "Question 24",
    },
    {
      content:
        "A merchant is selling a new product line of televisions. In order to deliver a good customer experience, the merchandising team wants the screen size to be incorporated into the search and navigation journey. Which two things can the developer do to facilitate this for them? Choose 2 answers",
      options: [
        'A. Create a new search refinement for a Boolean value true or false and label it "big screen."',
        "B. Configure Screen Size threshold search refinement bucket definitions.",
        "C. Configure catalog-level search refinement definition for Screen Size.",
        "D. Define a new searchable attribute for Screen Size.",
      ],
      answer: "C,D",
      title: "Question 25",
    },
    {
      content:
        "A Newsletter controller contains the following route:Server.post('Subscribe', function (req,res,next){var newsletterForm = server.forms.getForm('newsletter');var CustomObjectMgr = require('dw/object/CustomObjectMgr'); if(newsletterForm.valid){ try{ var CustomObject = CustomObjectMgr.createCustomObejct('NewsletterSubscription', newsletterform.email.value); CustomObject.custom.firstName = newsletterForm.fname.value; CustomObject.custom.lastName = newsletterForm.lname.value;-} catch(e){//Catch error here}}next();});Assuming the Custom Object metadata exists, why does this route fail to render the newsletter template when the subscription form is correctly submitted?",
      options: [
        "A. The Subscribe route is missing the server.middleware.httpt middleware.",
        "B. Custom Objects can only be created by Job scripts",
        "C. The CustomObjectMgr variable should be declare outside of the route.",
        "D. The Custom Object creation is not wrapped in a Transaction.",
      ],
      answer: "D",
      title: "Question 26",
    },
    {
      content:
        "A merchant wants customers to be able to order gift vouchers via their site. Since they can issue an unlimited number of these digital vouchers, this item should be available to sell at all items. How can a developer use Business Manager to ensure that the gift vouchers are always available?",
      options: [
        "A. Check the Available to Sell (ATS) flag dor the producto set",
        "B. Manually set the inventory to a high number.",
        "C. Check the perpetual flag in the product inventory record",
        "D. Set StockLevel = maxAllocation for the producto.",
      ],
      answer: "C",
      title: "Question 27",
    },
    {
      content:
        "Universal Containers created a site export file from staging in the global export directory. How should the Digital Developer update their sandbox using this staging site export file?",
      options: [
        "A. Perform a data replication from staging.",
        "B. Use the Site Development > Site Import & Export Business Manager module.",
        "C. Download the site export file and use UX Studio to transfer the data to the sandbox.",
        "D. Use the Site Development > Import & Export Business Manager module.",
      ],
      answer: "B",
      title: "Question 28",
    },
    {
      content:
        'Assume the code below is executing:Business Manager has the configuration:Active Log category is "root" with log level of "info."Given this information, what is the beginning of the filename in which the log will be written?',
      options: [
        "A. custom-xyz",
        "B. xyz",
        "C. custominfo-blade",
        "D. custom-export",
      ],
      answer: "A",
      title: "Question 29",
    },
    {
      content:
        "A merchant has a requirement to render personalized content to n a category page via a Content Slot that targets VIP high-spending customers during a specific promotional period. Which two items should the developer create to achieve the specified requirements? Choose 2 answers:",
      options: [
        "A. Page Template",
        "B. VIP Customer Group",
        "C. Rendering Template",
        "D. Slot Configuration",
      ],
      answer: "C,D",
      title: "Question 30",
    },
    {
      content:
        "Given the requirements:* To show the washing instructions for a clothing product on a dedicated section the detail page* Washing instructions come from the product information manager(PIM)* To have this attribute available to localize in the Storefront. Which action meets these requirements?",
      options: [
        "A. Add a resource file for every locale for which the attribute needs to be translated.",
        "B. Set the custom attribute as localizable",
        "C. Add a custom attribute for each locale",
        "D. Set the product system object type as localizable",
      ],
      answer: "D",
      title: "Question 31",
    },
    {
      content:
        "A developer is implementing new Page Designer content on a merchant's Storefront and adds the line below toWhat does this achieve?",
      options: [
        "A. Enables searching to find Page Designer content assets that are not in folders.",
        "B. Prevents Page Designer pages and components from being searchable.",
        "C. Filters Page Designer search results into separate page and component folders.",
        "D. Extends the ConrencSearchModei to allow the folder filter.",
      ],
      answer: "A",
      title: "Question 32",
    },
    {
      content:
        "A Digital Developer is tasked with setting up a new Digital Server Connection using UX Studio in their sandbox. Which three items are required to accomplish this task? (Choose three.)",
      options: [
        "A. Instance Version",
        "B. Instance Hostname",
        "C. Business Manager Username",
        "D. Keystore Password",
        "E. Business Manager Password",
      ],
      answer: "B,D,E",
      title: "Question 33",
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
      title: "Question 34",
    },
    {
      content:
        "A Digital Developer creates a B2C Commerce server connection in their UX Studio workspace. The Developer adds new cartridges to the workspace, but the cartridges do NOT execute as the Developer expects. Which three things should the Digital Developer verify to ensure the cartridges are uploaded? (Choose three.)",
      options: [
        "A. The Auto-Upload setting is enabled for the server connection.",
        "B. The Active Server setting is enabled for the server connection.",
        "C. The credentials for the server connection are correctly entered.",
        "D. The cartridge is for the current version of B2C Commerce.",
        "E. The server is configured to accept incoming connections.",
      ],
      answer: "A,D,E",
      title: "Question 35",
    },
    {
      content:
        "The following sample code is NOT providing the desired results. The Digital Developer needs to add an entry to the logs to debug the problem. Which statement correctly adds a log entry?",
      options: [
        "A. Logger.getErrorLog().log('Unable to find Apple Pay payment instrument for order.'+paymentInstruments);",
        "B. Logger.fault('Unable to find Apple Pay payment instrument for order.'+paymentInstruments);",
        "C. Logger.exception('Unable to find Apple Pay payment instrument for order.'+paymentInstruments);",
        "D. Logger.error('Unable to find Apple Pay payment instrument for order.'+paymentInstruments);",
      ],
      answer: "C",
      title: "Question 36",
    },
    {
      content:
        "A developer configures the dw.json file and needs to fill in the necessary parameters to complete the task. Which three parameters are required when using npm scripts? Choose 3 answers",
      options: [
        "A. CSRF Token",
        "B. Hostname",
        "C. Code Version",
        "D. Usemame/Password",
        "E. Site ID",
      ],
      answer: "A,C,E",
      title: "Question 37",
    },
    {
      content:
        "Which code sample is required to use a custom tag provided in SiteGenesis in an ISML template?",
      options: ["A. Option C", "B. Option D", "C. Option A", "D. Option B"],
      answer: "D",
      title: "Question 38",
    },
    {
      content:
        "A Digital Developer is requesting product information for an external integration. The following Open Commerce API (OCAPI) request is NOT functioning correctly:How should the Developer change the request?",
      options: [
        "A. Change the HTTP method to GET.",
        "B. Include an authentication token in the request.",
        "C. Change the HTTP method to PUT.",
        "D. Change the URI to /dw/shop/v18_3/products/creative-zen-v.",
      ],
      answer: "A",
      title: "Question 39",
    },
    {
      content:
        "Given the code snippet aboce, what should be added after this code so it can be used for page component display?",
      options: [
        "A. Module.exports = server.exports();",
        "B. Module.exports = render;",
        "C. Module.exports.render = render;",
        "D. Base.render = render;",
      ],
      answer: "A",
      title: "Question 40",
    },
    {
      content:
        'Universal Containers calls the following combination of products "The Basics" and sells the combination as a unique product ID:One Model 103 containerFive Model 611 containerTree Model 201 containerThe Developer created these three products in the catalog. What is the next step in Business Manager to create "The Basics" as a combination?',
      options: [
        'A. In the Product Bundles module, create a bundle named "The Basics".',
        'B. In the Products module, create a product named "The Basics" and add the products to the Product Bundles tab.',
        'C. In the Products module, create a product named "The Basics" and add the products to the Product Sets tab.',
        'D. In the Product Sets module, create a product set named "The Basics".',
      ],
      answer: "B",
      title: "Question 41",
    },
    {
      content:
        "A developer is importing edits for two different sites into the same sandbox, and is provided with four different files. Which two XML files should the developer import using the site-specific Merchant Tools import modules, instead of the Administration section import modules? Choose 2 answers.",
      options: [
        "A. Promotions ( en sites y en online marketing)",
        "B. Search Settings En (search y en Sites)",
        "C. System type extensions (solo en Sites)",
        "D. Site Jobs (sites)",
      ],
      answer: "A,B",
      title: "Question 42",
    },
    {
      content:
        "Universal Containers is preparing their storefront to use Open Commerce APIs (OCAPI).To which hook should the Digital Developer move taxation logic to ensure consistent order totals within B2C Commerce?",
      options: [
        "A. dw.ocapi.shop.order.validateOrder",
        "B. dw.ocapi.shop.basket.calculate",
        "C. dw.ocapi.shop.basket.afterPostShipment",
        "D. dw.ocapi.shop.order.afterPOST",
      ],
      answer: "B",
      title: "Question 43",
    },
    {
      content:
        "A developer has these requirements for out-of-stock products:* Save the SKUs of the out-of-stock products that the customer is interested in* Save the customer email regardless if the customer is a guest or registered* Email the customer when the product is back-in-stockWhich step should the developer perform as part of the solution to achieve the requirements?",
      options: [
        "A. Create a new system object type that has a set-of-string type custom attribute for the SKUs and a string for the email field.",
        "B. Create a new set-of-string type custom attribute to the system object type Profile to save all the SKUs and use the existing email field for the email.",
        "C. Create a new set-of-string type custom attribute to the system object type Product to save all the customer email addresses for back-in-stock notification.",
        "D. Create a new custom object type that has a set-of-string type custom attribute for the SKUs and a string for the email field.",
      ],
      answer: "C",
      title: "Question 44",
    },
    {
      content:
        "A client has two B2C Commerce sites in the same instance: one for the U.S. market, the other for the European market. They offer free gift wrapping on a selection of products. For each order, five products can be wrapped in the U.S., but only three products can be wrapped in the European region. How should a developer allow the merchant to independently adjust this number?",
      options: [
        "A. Configure a new localizable content slot with a market-specific value.",
        "B. Add a new Campaign using the Online Marketing section of the Business Manager.",
        "C. Create a new custom preference by extending the Site Preference object type.",
        "D. Select the corresponding option in the system preference for Orders.",
      ],
      answer: "A",
      title: "Question 45",
    },
    {
      content:
        "A merchant asks a developer to create a Cache Partition for the home page, so that when the home page is edited, only the home page is cleaned.Given the above requirement, where should the developer create that partition in Business Manager?",
      options: [
        "A. Administration > Sites > Manage Sites > Site > Cache",
        "B. Site > Site Preferences > Cache",
        "C. Operations > Cache > Site",
        "D. Operations > Site > Manage Sites > Cache",
      ],
      answer: "D",
      title: "Question 46",
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
      answer: "D",
      title: "Question 47",
    },
    {
      content:
        "A developer is tasked with implementing the necessary code for a new Page Designer component. What are the two purposes of the JSON metadata definition file that the developer creates7 Choose 2 answers",
      options: [
        "A. Defines regions within the component type.",
        "B. Defines the responsive layout of the rendered template.",
        "C. Defines the business and rendering logic of the component required by the merchant.",
        "D. Defines the attributes that a merchant enters when using the component type.",
      ],
      answer: "A,D",
      title: "Question 48",
    },
    {
      content:
        "A developer needs to update the package.json file so that it points to the hock file for a cartridge, using the hooks keyword. Which snippets work correctly when added to the file?:",
      options: [
        'A. { "hooks": "./scripts/hooks.json" }',
        'B. { "hooks": "./cartridge/scripts/hooks.json" }',
        "C. { hooks: ./scripts/hooks.json }",
        'D. { hooks: "./cartridge/scripts/hooks.json" }',
      ],
      answer: "B",
      title: "Question 49",
    },
    {
      content:
        "A Digital Developer needs to add a new form to the shopping cart page to allow customers to enter their rewards pass ID. There is already an existing Cart.js controller that handles processing of the other cart forms. In addition, a form field node is in the form XML and the necessary form input is present in the ISML template. The code below is the submit button for the ISML markup. What additional steps must occur before the Digital Developer can begin writing the processing code for this request?",
      options: ["A. Option C", "B. Option D", "C. Option A", "D. Option B"],
      answer: "A",
      title: "Question 50",
    },
    {
      content:
        "A merchant has reported that customers are seeing low stock items at the top of their search results, giving them a subpar customer experience and impacting conversion. How might this issue be resolved to ensure a better customer journey?",
      options: [
        "A. In Business Manager, set an availability low ranking threshold in Search Preferences.",
        "B. In Business Manager, enter a higher boost factor for availability in Searchable Attributes.",
        "C. Create a job that sets all unavailable products to be hidden. Schedule the job to run hourly to clean up the catalog on a regular basis.",
        "D. In Business Manager, select Show Orderable Products Only at the root level to hide any products that are currently out of stock.",
      ],
      answer: "C",
      title: "Question 51",
    },
  ],
});
