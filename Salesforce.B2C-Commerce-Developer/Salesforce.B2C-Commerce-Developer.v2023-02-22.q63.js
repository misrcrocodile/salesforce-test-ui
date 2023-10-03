window.testContent = window.testContent || [];
var testId = "Salesforce.B2C-Commerce-Developer";
var testName = "Salesforce.B2C-Commerce-Developer";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "Salesforce.B2C-Commerce-Developer.v2023-02-22.q63",
  content: [
    {
      content:
        "Given the code snippet aboce, what should be added after this code so it can be used for page component display?",
      options: [
        "A. Module.exports = render;",
        "B. Module.exports.render = render;",
        "C. Module.exports = server.exports();",
        "D. Base.render = render;",
      ],
      answer: "C",
      title: "Question 1",
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
      answer: "B",
      title: "Question 2",
    },
    {
      content:
        "A merchant is selling a new product line of televisions. In order to deliver a good customer experience, the merchandising team wants the screen size to be incorporated into the search and navigation journey. Which two things can the developer do to facilitate this for them? Choose 2 answers",
      options: [
        "A. Configure catalog-level search refinement definition for Screen Size.",
        'B. Create a new search refinement for a Boolean value true or false and label it "big screen."',
        "C. Define a new searchable attribute for Screen Size.",
        "D. Configure Screen Size threshold search refinement bucket definitions.",
      ],
      answer: "A,C",
      title: "Question 3",
    },
    {
      content:
        "A developer working on a multi country site is asked to store country specific data that drives the creation of a country selector. Examples of the data stored are:* Pricebook to be used* Image URL for country flagThe data used in staging also applies in production, but only for this site. Which approach should the developer take to implement these requirements?",
      options: [
        "A. Create a replicable, site-specific Custom Object with the custom data for each country.",
        "B. Create site-specific content assets to store the data for each country.",
        "C. Extend the Locale System Object to contain the custom data for each country.",
      ],
      answer: "A",
      title: "Question 4",
    },
    {
      content:
        "Universal Containers has expanded its implementation to support German with a locale code of de. The current resource bundle is checkout.properties.To which file should the developer add German string values?",
      options: [
        "A. checkout_de.properties in resources folder",
        "B. checkout.properties in the default locale folder",
        "C. de_checkout.properties in resources folder",
        "D. checkout.properties in the de locale folder",
      ],
      answer: "C",
      title: "Question 5",
    },
    {
      content:
        "A Digital Developer creates a B2C Commerce server connection in their UX Studio workspace. The Developer adds new cartridges to the workspace, but the cartridges do NOT execute as the Developer expects. Which three things should the Digital Developer verify to ensure the cartridges are uploaded? (Choose three.)",
      options: [
        "A. The Auto-Upload setting is enabled for the server connection.",
        "B. The Active Server setting is enabled for the server connection.",
        "C. The credentials for the server connection are correctly entered.",
        "D. The server is configured to accept incoming connections.",
        "E. The cartridge is for the current version of B2C Commerce.",
      ],
      answer: "A,D,E",
      title: "Question 6",
    },
    {
      content:
        "Given the sandbox with:* Service configured and assigned to its profile and credential* A code version that uses that serviceAnd given the requirement to limit the number of success or error calls the code can perform to a restricted number of calls per second. Which configuration should the developer perform?",
      options: [
        "A. Set the rate limiter in the service profile and configure its values with the ones required.",
        "B. Set a new quota limit for the service profile and assign the service to it.",
        "C. Set the service as limited and change the services profile site preferences with the required values.",
      ],
      answer: "A",
      title: "Question 7",
    },
    {
      content:
        "Consider the following information:* A merchant has this three-tier category structure setup in the Storefront catalog:New Arrivals > Women > Clothing* The category named Clothing has all the clothing items for Women and is merchandised.* A Search Refinement named Newness is correctly configured for the Clothing category.When a merchandiser views the Clothing category, the Search Refinement appears and Works as expected. However, the merchandiser does not see the Search Refinement when searching for Clothing via the Storefront search. What is the Reason?",
      options: [
        "A. The Search Refinement definitions is not set up for the Root Category",
        "B. The Search Refinement definition is not set up for the Women category",
        "C. There are conflicting Search Refinement definitions for Clothing and one of its parent categories",
        "D. The Search Refinement definition is not set up for the New Arrivals Category.",
      ],
      answer: "D",
      title: "Question 8",
    },
    {
      content:
        "A developer has a sandbox with code to log a message during execution, and the following code:After the code executes, the developer does not see any log file with the message in the WebDAV folder. Which two tasks does the developer need to perform to correct this issue? Choose 2 answers",
      options: [
        "A. Set the root log level to debug.",
        "B. Set the logging global preference to true.",
        "C. Check the box for Info under Log Files.",
        "D. Request that the developer's account be given permission to the Log Center of the current realm.",
      ],
      answer: "C,D",
      title: "Question 9",
    },
    {
      content:
        "In Log Center, a developer notes a number of Cross Site Request Forgery (CSRF) log entries. The developer knows that this happens when a CSRF token is either not found or is invalid, and is working to remedy the situation as soon as possible. Which two courses of action might solve the problem? Choose 2 answers",
      options: [
        "A. Add the token in the ISML template.",
        "B. Add csrfProtection.generateToken as a middleware step in the controller.",
        "C. Extend the CSRF token validity to avoid timeouts.",
        "D. Delete the existing CSRF whitelists in Business Manager.",
      ],
      answer: "C,D",
      title: "Question 10",
    },
    {
      content:
        "A developer working on a simple web service integration is asked to add appropriate logging to allow future troubleshooting.According to logging best practices, which code should the developer write to log when an operation succeeds, but has an unexpected outcome that may produce side effects?",
      options: [
        "A. Logger.info('Unexpected service response')",
        "B. Logger.error('Unexpected service response')",
        "C. Logger.warn('Unexpected service response')",
        "D. Logger.debug('Unexpected service response')",
      ],
      answer: "C",
      title: "Question 11",
    },
    {
      content:
        "A Digital Developer noticed that cartridges in their workspace are NOT executing. The Developer confirms that the cartridges are uploaded to the B2C Commerce server connection's target version directory. Which action potentially solves this problem?",
      options: [
        "A. Set the server connection's target version directory to the active code version.",
        "B. Remove invalid characters from cartridge file and folder names.",
        "C. Remove invalid characters from the code version's name.",
        "D. Set the active code version to use the latest compatibility mode.",
      ],
      answer: "A",
      title: "Question 12",
    },
    {
      content:
        "The developer created a new Storefront category in storefront-catalog-m-en, but when viewing the Storefront site, the category is not visible. What are two possible reasons?",
      options: [
        "A. The category does not contain available products",
        "B. The category is not sorted",
        "C. The Storefront catalog is offline",
        "D. The category is offline.",
      ],
      answer: "A,C",
      title: "Question 13",
    },
    {
      content:
        "A merchant requires that an existing section of the Site become editable from the Business Manager, so that they can modify it independently of the developer. Which of these is an important factor for a developer to consider when choosing the appropriate solution between a content slot and a Page Designer component?",
      options: [
        "A. Only Page Designer Components can be localized for different languages.",
        "B. Only content slot configurations can be tied to campaigns.",
        "C. Only content slot configurations can ve localized for different languages.",
        "D. Only page Designer components can ve tied to campaigns.",
      ],
      answer: "A",
      title: "Question 14",
    },
    {
      content:
        "A merchant has a requirement to render personalized content to n a category page via a Content Slot that targets VIP high-spending customers during a specific promotional period. Which two items should the developer create to achieve the specified requirements? Choose 2 answers:",
      options: [
        "A. Slot Configuration",
        "B. Page Template",
        "C. VIP Customer Group",
        "D. Rendering Template",
      ],
      answer: "A,D",
      title: "Question 15",
    },
    {
      content:
        "A client has custom object definition and requirement that occasional data changes in staging also need to exist in production, Which task should the developer perform to meet these requirements when setting up the custom object?",
      options: [
        "A. Create the custom object definition in production as Replicable",
        "B. Create two copies of the custom object in staging and set Sharing = True.",
        "C. Create the custom object definition in staging as Replicable",
        "D. Create the custom object definition in staging as Shared",
      ],
      answer: "C",
      title: "Question 16",
    },
    {
      content:
        "Given a file in a plug-in cartridge with the following code:'use strict':Var base = module.superModule;Function applyCustomCache (req,res,next){res.CachePeriod = 6; //eslint-disable-line no-param-reassignres.cachePeriodUnit = 'hours') //eslint-disable-line no-param-reassignnext();}Module.exports = base;Module.exports.applyCustomCache = applyCustomCache;What does this code extend?",
      options: [
        "A. A middleware script",
        "B. A controller",
        "C. A decorator",
        "D. A model",
      ],
      answer: "B",
      title: "Question 17",
    },
    {
      content:
        "Multiple shoppers report slow performance on the Product Details Page. Which tool can a developer use to view average response times for the Product-Detail controller route?",
      options: [
        "A. Pipeline Profiler",
        "B. URL Request Analyzer",
        "C. Request Logs",
      ],
      answer: "A",
      title: "Question 18",
    },
    {
      content:
        "Which three operations should be done in a controller? Choose 3 answers",
      options: [
        "A. Create a plain JavaScript object representing a system object",
        "B. Generate the response as JSON or HTML",
        "C. Use middleware functions when applicable",
        "D. Use the Script API to generate data for the view.",
        "E. Use the model needed for the view.",
      ],
      answer: "B,C,E",
      title: "Question 19",
    },
    {
      content:
        'The developer has been given the following business requirement:The shipping method, "Free Standard Ground Shipping" has an exclusion for products with \'category equals or is child of electronics-televisions.\' The marketing department has scheduled a sale offering a "Free Standard Ground Shipping" method for brand XyzTv televisions for the next 3 months. What method accomplishes this while following best practices\'',
      options: [
        "A. Create a new shipping method and label it \"Free Standard Ground Shipping\". Give it the qualifier 'brand equals XyzTv', and add it to the checkout options.",
        'B. Create an allow list for the existing shipping method by adding a product exclusion for \'brand equals XyzTv\' to the exclusion list fo<" "Free Standard Ground Shipping."',
        "C. Extend the CheckoutShippingServices controller using module.superModule and add an exception for the specified brand.",
        "D. Extend the code in cartridge/models/shipping/shippingMethod.js using module.superModule and add an exception for the specified brand.",
      ],
      answer: "C",
      title: "Question 20",
    },
    {
      content:
        "A client sells its product in single-brand stores as well as in multi-brand stores. When shown in the store locator list, the client wants the single-brand stores to have a particular background color to highlight them. Which Business Manager action should be completed to allow the developer to apply different styling to the single-brand stores?",
      options: [
        "A. Adjust the relevant Site Preference in the Stores group",
        "B. Create a new SingleBrandStore custom object configuration.",
        "C. Add a Boolean custom attribute to the Store system object",
        "D. Configure the existing Store custom object type definition",
      ],
      answer: "B",
      title: "Question 21",
    },
    {
      content:
        "A Digital Developer is working in a sandbox on a site named test-site using the domain test.demandware.net. The Developer needs to compile a url to make an Open Commerce API (OCAPI) request that returns product information.By default, which URL format is a proper Open Commerce API for Sandbox?",
      options: [
        "A. https://www.test.com/s/test-site/sfc/shop/products/M1355?client_id=aaa...",
        "B. https://www.test.com/dw/shop/v18_3/products/M1355?client_id=aaa...",
        "C. https://test.demandware.com/dw/shop/products/M1355?client_id=aaa...",
        "D. https://test.demandware.net/s/test-site/dw/shop/v18_3/products/M1355?client_id=aaa...",
      ],
      answer: "D",
      title: "Question 22",
    },
    {
      content:
        'Below is a form definition snippet from the newsletter.xml file:<?xml version="1.0"?><form xmlns=http://www.demandware.com/xml/form/2008-04-15><field formid="email" lavel="Email" type="String" mandatory="True" max-length="50" /></form>Which line of code creates a JSON object to contain the form data?',
      options: [
        "A. Server.form.getForm('dwfrm_newsletter')",
        "B. Server.form.getForm('newsletter');",
        "C. Server.forms.getForm('newsletter');",
        "D. Server.forms.getForm('dwfrm_newsletter')",
      ],
      answer: "C  En el controller:  En el Formulario:  ",
      title: "Question 23",
    },
    {
      content:
        "A client has two B2C Commerce sites in the same instance: one for the U.S market, the other for the European market. The products they make are sold with different safety certificates based-on the world location.For example, they sell a smartphone with certificate A in the U.S and certificate B in Europe, a hairdryer with certificate C in the U.S and certificate D in Europe, and more. How should a developer allow the merchant to display the appropriate certification logo in the produce to details page, depending on the customer's location?",
      options: [
        "A. Add a Localizable custom attribute to the Certificate system object type.",
        "B. Ad and Image custom preference to the Sitepreference system object type",
        "C. Add a Site-specific custom attribute to the Product system object type.",
        "D. Add a Localizable custom preference to the SitePreference system object type.",
      ],
      answer: "C",
      title: "Question 24",
    },
    {
      content:
        'A Digital Developer has a new requirement to disable the "Discover" credit card type for all checkouts. What does the Developer need to change in Business Manager to fulfill this requirement?',
      options: [
        "A. Credit card exclusion rules in the CreditCardType.json configuration file.",
        "B. Checkout exclusion rules in the Merchant Tools > Site Preferences > Checkout Preferences module.",
        "C. Credit card exclusion rules in the Merchant Tools > Site Preferences > Payment Preferences module.",
        "D. Credit cards in the Merchant Tools > Ordering > Payment Methods module.",
      ],
      answer: "D",
      title: "Question 25",
    },
    {
      content:
        "A Digital Developer is implementing an Open Commerce API call to add products to a basket. Given the following resource configuration:Which modification allows the requests to successfully execute?",
      options: [
        'A. Change the "read_attributes" value to: "(items)".',
        'B. Change the "resource_id" value to: "/baskets/*/items".',
        'C. Change the "methods" value to: ["get", "post"].',
        'D. Change the "write_attributes" value to: "(+items)".',
      ],
      answer: "B",
      title: "Question 26",
    },
    {
      content:
        "Which method is efficient and scalable because it uses the product search index rather than searching the database?",
      options: [
        "A. ProductSearcbHodel().gerProductSearchHita()",
        "B. ProduccAvailabiliryModel.isOrderable()",
        "C. ProductVanari.cnMcciel.aerVariams ()",
        "D. ProducrlndexModel.getOrderableProductsOnly()",
      ],
      answer: "A",
      title: "Question 27",
    },
    {
      content:
        "Given the file structure below, which ISML method call renders the customLandingPage template?",
      options: [
        "A. ISML.render('content/custom/customLandingPage');",
        "B. ISML('content/custom/customLandingPage');",
        "C. ISML.renderTamplate('cartridge/templates/default/content/custom/customLandingPage');",
        "D. ISML.renderTemplate('content/custom/customLandingPage');",
      ],
      answer: "D",
      title: "Question 28",
    },
    {
      content:
        "The developer needs to add custom category debug logging into the \"contact'' script, to ensure that a third-party service call responds as expected.Assuming that the logging configurations for the contact category are correctly in place, which line of code should the developer add in the 06 placeholder to meet this requirement?A)B)C)",
      options: ["A. Option C", "B. Option A", "C. Option B"],
      answer: "B",
      title: "Question 29",
    },
    {
      content:
        'A Digital Developer selects "Show Orderable Products Only" in the Search > Search Preferences Business Manager module. Which business goal does this accomplish?',
      options: [
        "A. Exclude products from search results if Available to Sell (ATS) = 0.",
        "B. Exclude pre-order products from search results.",
        "C. Exclude back-ordered products from showing on the website.",
        "D. Block displaying the product detail page if Available to Sell (ATS) = 0.",
      ],
      answer: "A",
      title: "Question 30",
    },
    {
      content:
        "A Digital Developer wants pass control to an ISML template from a JavaScript Controller and load product on the pipeline dictionary with the name myProduct. Which code sample will achieve this?",
      options: [
        'A. ISML.renderTemlpate ( "helloworld.isml", { myProduct: product });',
        'B. ISML.renderTemlpate ( "helloworld.isml", { "myProduct": "product" });',
        'C. ISML.renderTemlpate ( "helloworld.isml", { "product": myProduct });',
        'D. ISML.renderTemlpate ( "helloworld.isml", { product: myProduct });',
      ],
      answer: "B",
      title: "Question 31",
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
      title: "Question 32",
    },
    {
      content:
        "A developer is asked to create a controller endpoint that will be used in a client-side AJAX request. Its purposes is to display updated information to the user when the request is completed, without otherwise modifying the appearance of the current page.According to SFRA practices, which method best supports this objective?",
      options: ["A. res.render()", "B. res.json()", "C. res.print()"],
      answer: "B",
      title: "Question 33",
    },
    {
      content:
        "A Digital Developer is working on a multi-site realm. A new site requires a different layout for the account landing page. The business logic and data model remain the same. The existing code is in AccountControl.js and accountlanding.isml in the app_storefront cartridge. The app_storefront cartridge contains code for all other business functions. The cartridge path for the new site is currently int_cybersource:int_paypal:app_storefront. The Developer creates a new cartridge named app_newsite that contains only the accountlanding.isml template for the new site. Which modification should be made to the new cartridge path?",
      options: [
        "A. Set the cartridge path so that app_newsite is before app_storefront.",
        "B. Set the cartridge path so that app_storefront is before int_cybersource.",
        "C. Set the cartridge path so that app_newsite is after app_storefront.",
        "D. Set the cartridge path to include only app_newsite.",
      ],
      answer: "B",
      title: "Question 34",
    },
    {
      content:
        "A developer needs to render a Page Designer page in JSON format. What is the correct syntax?",
      options: [
        "A. PageMgr,renderPage{pageID, {parameter1: value1}}",
        "B. PageMgr.serializePage(pageID), {parameter1:value1}};",
        "C. JSON.stringgify(PageMgrrenderpage(pageID), {paramter1:value1}}:",
      ],
      answer: "B",
      title: "Question 35",
    },
    {
      content:
        "A merchant asks a developer to create a Cache Partition for the home page, so that when the home page is edited, only the home page is cleaned.Given the above requirement, where should the developer create that partition in Business Manager?",
      options: [
        "A. Administration > Sites > Manage Sites > Site > Cache",
        "B. Operations > Cache > Site",
        "C. Operations > Site > Manage Sites > Cache",
        "D. Site > Site Preferences > Cache",
      ],
      answer: "C",
      title: "Question 36",
    },
    {
      content:
        "A client uses tax tables in Business Manager to calculate tax. They recently started shipping to a new country, Italy, and the taxi s not being calculated correctly on the Storefront What is the likely problem?",
      options: [
        "A. Tax Region is configured wrong.",
        "B. Tax Country is missing",
        "C. Tax Jurisdiction is missing",
        "D. Tax Locale is configured wrong",
      ],
      answer: "C,D",
      title: "Question 37",
    },
    {
      content:
        "A developer needs to update the package.json file so that it points to the hock file for a cartridge, using the hooks keyword. Which snippets work correctly when added to the file?:",
      options: [
        'A. { hooks: "./cartridge/scripts/hooks.json" }',
        'B. { "hooks": "./scripts/hooks.json" }',
        "C. { hooks: ./scripts/hooks.json }",
        'D. { "hooks": "./cartridge/scripts/hooks.json" }',
      ],
      answer: "D",
      title: "Question 38",
    },
    {
      content:
        "A developer is using the Script Debugger to troubleshoot an issue. They observe that the debugger is not able to resolve a specific breakpoint on one of the scripts. What is a possible reason for this issue?",
      options: [
        "A. The script is form a third party cartridge and hence does not allow_settings breakpoints.",
        "B. The script debugging session is not active",
        "C. The cartridge containing the script is not in the site's cartridge path",
      ],
      answer: "C",
      title: "Question 39",
    },
    {
      content:
        "Server.get('Show', consentTracking.consent, cache.applyDefaultCache, function (req,res,next){ Var Site = require('dw/system/Syte\"); Var pageMetaHelpter = require('*/cartridge/scripts/helpers/pageMetaHelper'); pageMetaHelpter.setPageMetaTags(req.pageMetaData, Site.current); res.render('/home/homePage'); Missing code here}, pageMetadata.computedPageMetadata);The controller endpoint code snippet above does not work. Which line of code should the developer use to replace line 6 and correct the problem?",
      options: ["A. return res;C. res.next();", "B. req.next();", "C. next();"],
      answer: "C",
      title: "Question 40",
    },
    {
      content:
        "A developer wants to add a link to the My Account Page. What is the correct code to accomplish this?",
      options: [
        "A. <a href=\"${url.get('Account-Show')}>${Resource.message('myaccount')}</a>",
        "B. <a href=\"${URLUtils.url('Account-Show')}>${Resource.msg('myaccount','account',null)}</a>",
        "C. <a href=\"${URLUtils.get('Account-Show')}>${Resource.msg('myaccount','account',request.locale())}</a>",
        "D. <a href=\"${URLUtils ('Account-Show')}>${ResourceMgr.getPropierties('myaccount','account',null)}</a>",
      ],
      answer: "B",
      title: "Question 41",
    },
    {
      content:
        "A merchant has a new requirement to accept American Express credit cards on its Storefront. A credit card payment method already exists. Which step must a developer take in Business Manager to achieve this?",
      options: [
        "A. In Payment Methods, enable American Express as a credit card type.",
        "B. Add American Express as a Payment Preference in Site Preferences.",
        "C. Add American Express into the Order settings in Site Preferences.",
        "D. In Payment Processor, create American Express as a payment type.",
      ],
      answer: "B",
      title: "Question 42",
    },
    {
      content:
        "Recent code changes to an existing cartridge do not appear correctly on a Storefront. The developer confirms that the code is uploaded in the IDE and ensures that the cartridge is associated with the sandbox. Which two additional steps should the developer take to troubleshoot this problem? Choose 2 answers",
      options: [
        "A. Check the Business Manager site cartridge path.",
        "B. Check the Storefront site cartridge path.",
        "C. Check that the search index was recently rebuilt.",
        "D. Check that the correct code version is selected.",
      ],
      answer: "B,C",
      title: "Question 43",
    },
    {
      content:
        "A business user wants to add a link to a content page from within the body of another content asset. The target content asset ID is: terms-and-conditions. Which link function generates the correct link?",
      options: [
        "A. $url('Page-Show', 'cid', 'terms-and-conditions')$",
        "B. $include('Page-Include', 'cid', 'terms-and-conditions')$",
        "C. $httpUrl('Content-Show', 'cid', 'terms-and-conditions')$",
        "D. $http('Content-Page', 'cid', 'terms-and-conditions')$",
      ],
      answer: "C",
      title: "Question 44",
    },
    {
      content:
        "A Digital Developer has detected storefront pages being rendered with an error message. After inspecting the log files, the Developer discovered that an enforced quota is being exceeded. What action should the Developer take to stop the quota violation?",
      options: [
        "A. Change the Business Manager configuration for the quota settings.",
        "B. Ask support to remove the quota limit.",
        "C. Rewrite the code that is causing the overage.",
        "D. Take no action, the overage will be resolved when concurrent visitors are reduced.",
      ],
      answer: "A",
      title: "Question 45",
    },
    {
      content:
        "A merchant wants customers to be able to order gift vouchers via their site. Since they can issue an unlimited number of these digital vouchers, this item should be available to sell at all items. How can a developer use Business Manager to ensure that the gift vouchers are always available?",
      options: [
        "A. Set StockLevel = maxAllocation for the producto.",
        "B. Check the perpetual flag in the product inventory record",
        "C. Manually set the inventory to a high number.",
        "D. Check the Available to Sell (ATS) flag dor the producto set",
      ],
      answer: "B",
      title: "Question 46",
    },
    {
      content:
        "Given the following snippet:* Server.append( 'Show' , function (req, res, next) )According to SFRA, which two options shows a correct way to complete the code above in order to provide data to the response using a controller? Choose 2 answers",
      options: [
        "A. res.render('/content/myPage');next();}).append{(Data:myDataObject});",
        "B. res.viewData = {data: myDataObject};res.render('/content/myPage');next();});",
        "C. res.render('/content/myPage',{data: myDataObject});next();});",
        "D. res.setViewData ({data: myDataObject});res.render('/content/myPage');next();});",
      ],
      answer: "C",
      title: "Question 47",
    },
    {
      content:
        "Given a NewsletterSubscription custom object that has a key attribute named email of type String, what is the correct syntax to create the NewsletterSubscription custom object and persist it to the database?",
      options: [
        "A. Var customobject = dw.object.CustomObjectMgr. createCustomObject('NewsletterSubscription', newsLetterForm.email.value);",
        "B. Var customobject =dw.object.CustomObjectMgr.createCustomObject(newsletterForm.email.value,'NewsletterSubscription');",
        "C. Var customobject = dw.object.CustomObjectMgr.createNewsletterSubscription('email', newsLetterForm.email.value);",
        "D. Var customobject = dw.object.CustomObjectMgr. createCustomObject('NewsletterSubscription','email', newsLetterForm.email.value);",
      ],
      answer: "A",
      title: "Question 48",
    },
    {
      content:
        "A Digital Developer creates a B2C Commerce server connection in their UX Studio workspace. The Developer adds new cartridges to the workspace, but the cartridges do NOT execute as the Developer expects. Which three things should the Digital Developer verify to ensure the cartridges are uploaded? (Choose three.)",
      options: [
        "A. The Active Server setting is enabled for the server connection.",
        "B. The server is configured to accept incoming connections.",
        "C. The cartridge is for the current version of B2C Commerce.",
        "D. The Auto-Upload setting is enabled for the server connection.",
        "E. The credentials for the server connection are correctly entered.",
      ],
      answer: "B,C,D",
      title: "Question 49",
    },
    {
      content:
        'The client provides the system integrator with translation messages for the newly added "French" ("fr") locale. What is the correct folder to store the associated .properties files?',
      options: [
        "A. A cartridge/templates/resources",
        "B. cartridge/resources",
        "C. cartridge/templates/fr",
        "D. cartridge/templates/resources/fr",
      ],
      answer: "A",
      title: "Question 50",
    },
    {
      content:
        "A developer wants to embed a link to a content page from within the body of another content asset. the target content asset ID is: about-us Which option represents the correct format to use?",
      options: [
        "A. $url('Content_Show', 'about-us')$",
        "B. $url(''page-Show,''cid'', about-us')$",
        "C. $url('Content-Page', cid 'about-us;)$",
      ],
      answer: "B",
      title: "Question 51",
    },
    {
      content:
        "A Digital Developer added a file named MyBusinessController.js in the cartridge named app_project. The project design calls for this new file to override MyBusinessController.js in client_project. The client_project cartridge contains other necessary functionality. Additional functionality is also included in the storefront_core and storefront_controllers cartridges. Which cartridge path meets the project requirements?",
      options: [
        "A. app_project:client_project:storefront_controllers:storefront_core",
        "B. storefront_core:storefront_controllers:client_project:app_project",
        "C. app_project:storefront_controllers:storefront_core",
        "D. client_project:app_project:storefront_controllers:storefront_core",
      ],
      answer: "A",
      title: "Question 52",
    },
    {
      content:
        "Universal Containers wants to associate a region code value with an order to indicate the general area of its destination. This region code must be accessible whenever the order history is displayed. What is required to accomplish this?",
      options: [
        "A. Store the region code value in the geolocation system attribute of the Order.",
        "B. Store the region code value in a session variable.",
        "C. Define a custom object type to store the username with the region code.",
        "D. Define a custom attribute on the Order system object type to store the region code value.",
      ],
      answer: "D",
      title: "Question 53",
    },
    {
      content:
        "A developer has a sandbox configured with a service and its profile and credential. Now there is a requirement to allow changes to the service URL manually from the sandbox. Which B2C feature should the developer use to achieve the request?",
      options: [
        "A. Use a Globalpreference dedicated for the service URL",
        "B. Use the service status area, set the override URL checkbox, and then populate the URL field with the required one.",
        "C. Use the service credential URL field",
        "D. Use a Sitepreference dedicated for the service URL",
      ],
      answer: "B",
      title: "Question 54",
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
      title: "Question 55",
    },
    {
      content:
        "A developer is given the requirement to add a step to the existing business logic of the registration process. How should the developer modify the route that handles the customer registration?",
      options: [
        "A. Extend the route with new functionality.",
        "B. Change the controller route with new functionality.",
        "C. Copy the code from the original route to a new controller route, and change it.",
        "D. Override the route with new functionality.",
      ],
      answer: "C",
      title: "Question 56",
    },
    {
      content:
        "A Digital Developer is tasked with setting up a new Digital Server Connection using UX Studio in their sandbox. Which three items are required to accomplish this task? (Choose three.)",
      options: [
        "A. Instance Version",
        "B. Keystore Password",
        "C. Business Manager Password",
        "D. Business Manager Username",
        "E. Instance Hostname",
      ],
      answer: "A,B,E",
      title: "Question 57",
    },
    {
      content:
        "A developer uses the call() instance method of dw.svc.Service to invoke a web service and implemented the callback methods defined by the dw.avc.ServiceCaliback class. Which callback method is required only when invoking a SOAP service?",
      options: [
        "A. createRequeat",
        "B. mockCall",
        "C. initServiceClient",
        "D. parseResponse",
      ],
      answer: "C",
      title: "Question 58",
    },
    {
      content:
        "Which object type can a developer import using the Merchant Tools > Import $ Export module in Business Manager?",
      options: [
        "A. Products",
        "B. Images and other static assets",
        "C. Content slots",
      ],
      answer: "B",
      title: "Question 59",
    },
    {
      content:
        "There are three logging categories: category1, category1.eu, and category1.us.In Business Manager, category1 is enabled for WARN level and no other categories are configured. All custom log targets are enabled. The code segment below executes. What is the result'",
      options: [
        "A. Logs will be written to the log file with a prefix loggerFile.",
        "B. Logs will not be written.",
        "C. Logs will be written to the log file with a prefix customwarn.",
        "D. Logs will be written to the log file with a prefix custom-loggerFile.",
      ],
      answer: "D",
      title: "Question 60",
    },
    {
      content:
        "A client wants to differentiate their monobrand stores with a special icon when shown in the store locator. The information is saved in a true/false custom attribute for each Store object in Merchant tools. How should the developer follow SFRA best practices to expose this data for rendering?",
      options: [
        "A. Pass the Store system object to the template, so that custom propierties are available",
        "B. Extend the existing Stores_Find controller with a new middleware function that performs the query",
        "C. Ad dan <isscript> to the template, and call StoreMgr.searchStoresByCoordinates();",
        "D. Use the module.superModule functionality and the call method to add a new property to the Store Model.",
      ],
      answer: "D",
      title: "Question 61",
    },
    {
      content:
        "A Digital Developer is inspecting the weekly service status report for a critical internally-hosted web service used in the application and notices that there are too many instances of unavailability. Which two solutions are possible options to reduce the unavailability of the service? (Choose two.)",
      options: [
        "A. Modify the code that makes the request to the external service to be wrapped in a try / catch block.",
        "B. Update the external service to have a faster response time.",
        "C. Increase the web service time out.",
        "D. Change the code that makes the request to set the throwOnError attribute, of the service, to be true.",
      ],
      answer: "A,B",
      title: "Question 62",
    },
    {
      content:
        "The Home-Show route uses this middleware chain:The developer added Home.;s in another cartridge, which is before the original cartridge in the cartridge path, to extend that route but it does not have the middleware chain:Assuming the code is correct on both functions, what is the expected result?",
      options: [
        'A. A RunTime error is thrown, "Error: Params do not match route".',
        "B. The base code executes and then the custom code executes.",
        "C. The custom code executes and then the base code executes.",
        "D. The base code executes, but the custom code is ignored because the signature lines do not match.",
      ],
      answer: "A",
      title: "Question 63",
    },
  ],
});
