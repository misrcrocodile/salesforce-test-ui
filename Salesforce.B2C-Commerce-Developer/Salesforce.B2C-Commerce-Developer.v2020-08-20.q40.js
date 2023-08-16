window.testContent = window.testContent || [];
var testId = "Salesforce.B2C-Commerce-Developer";
var testName = "Salesforce.B2C-Commerce-Developer";
window.testContent[testName] = window.testContent[testName] || {
  name: testName,
  testList: [],
};
window.testContent[testName].testList.push({
  name: "Salesforce.B2C-Commerce-Developer.v2020-08-20.q40",
  content: [
    {
      content:
        "A Digital Developer wants to selectively retrieve products and process them from an iPhone.Which action should the Developer take, given that JavaScript controllers CANNOT be used?",
      options: [
        "A. Use import/export in Business Manager.",
        "B. Use WebDAV Client to retrieve products.",
        "C. Use OCAPI and invoke it in native language.",
        "D. Create a webservice to retrieve products.",
      ],
      answer: "B",
      title: "Question 1",
    },
    {
      content:
        "Which three operations should be done in a controller?Choose 3 answers",
      options: [
        "A. Use the model needed for the view.",
        "B. Create a plain JavaScript object representing a system object",
        "C. Generate the response as JSON or HTML",
        "D. Use the Script API to generate data for the view.",
        "E. Use middleware functions when applicable",
      ],
      answer: "A,C,E",
      title: "Question 2",
    },
    {
      content:
        "A Storefront is designed so that multiple pages share a common header and footer layout.Which ISML tag should a developer use on the templates for these pages to avoid code repetition in the most effective way?",
      options: [
        "A. <iscontent> ... </iscontent>",
        "B. <isdecorate> ... </isdecorate>",
        "C. <isinclude> ... </isinclude>",
        "D. <isreplace> ... </isreplace>",
      ],
      answer: "B",
      title: "Question 3",
    },
    {
      content:
        "A merchant has a content slot on a page that currently displays products based on the top Sellers for the current week.They wish to change this functionality and, instead, have the slot render a specific content asset so that the content experience is more personalized to the visitors.Which two actions are necessary to make this change?Choose 2 answers",
      options: [
        "A. Change the content type for the slot configuration",
        "B. Delete the existing content slot and create a new one.",
        "C. Change the rendering template in the slot configuration",
        "D. Change the default setting in the slot configuration",
      ],
      answer: "A,C",
      title: "Question 4",
    },
    {
      content:
        "A business user wants to add a link to a content page from within the body of another content asset. The target content asset ID is: terms-and-conditions.Which link function generates the correct link?",
      options: [
        "A. $http('Content-Page', 'cid', 'terms-and-conditions')$",
        "B. $include('Page-Include', 'cid', 'terms-and-conditions')$",
        "C. $url('Page-Show', 'cid', 'terms-and-conditions')$",
        "D. $httpUrl('Content-Show', 'cid', 'terms-and-conditions')$",
      ],
      answer: "D",
      title: "Question 5",
    },
    {
      content:
        'A Digital Developer extends a system object, Product, and adds a Boolean attribute, "sellable," to it.Assuming "prod" is the variable name handling the product, what code can the Developer use to access it?',
      options: [
        "A. prod.sellable",
        "B. prod.custom.sellable",
        "C. prod.persistable.sellable",
        "D. prod.extended.sellable",
      ],
      answer: "B",
      title: "Question 6",
    },
    {
      content:
        "Given the code snippet aboce, what should be added after this code so it can be used for page component display?",
      options: [
        "A. Base.render = render;",
        "B. Module.exports = server.exports();",
        "C. Module.exports = render;",
        "D. Module.exports.render = render;",
      ],
      answer: "B",
      title: "Question 7",
    },
    {
      content:
        "A developer has a sandbox configured with a service and its profile and credential.. Now there is a requirement to allow changes to the service URL manually from the sandbox.Which B2C feature should the developer use to achieve the request?",
      options: [
        "A. Use a Sitepreference dedicated for the service URL",
        "B. Use the service credential URL field",
        "C. Use the service status area, set the override URL checkbox, and then populate the URL field with the required one.",
        "D. Use a Globalpreference dedicated for the service URL",
      ],
      answer: "B",
      title: "Question 8",
    },
    {
      content:
        "Given a NewsletterSubscription custom object that has a key attribute named email of type String, what is the correct syntax to create the NewsletterSubscription custom object and persist it to the database?",
      options: [
        "A. Var customobject = dw.object.CustomObjectMgr.createNewsletterSubscription('email', newsLetterForm.email.value);",
        "B. Var customobject = dw.object.CustomObjectMgr. createCustomObject('NewsletterSubscription', newsLetterForm.email.value);",
        "C. Var customobject =dw.object.CustomObjectMgr.createCustomObject(newsletterForm.email.value,'NewsletterSubscription');",
        "D. Var customobject = dw.object.CustomObjectMgr. createCustomObject('NewsletterSubscription','email', newsLetterForm.email.value);",
      ],
      answer: "B",
      title: "Question 9",
    },
    {
      content:
        "Universal Containers sells physical gift cards for the holidays.What needs to occur to guarantee the cards will always be available?",
      options: [
        "A. Create an inventory record with an unlimited Allocation value.",
        "B. Create an inventory record with an extremely high Allocation value (i.e., 1 billion certificates).",
        "C. Create a perpetual inventory record.",
        "D. Create an inventory record with Backorder Handling enabled.",
      ],
      answer: "D",
      title: "Question 10",
    },
    {
      content:
        "A client uses tax tables in Business Manager to calculate tax. They recently started shipping to a new country, Italy, and the taxi s not being calculated correctly on the Storefront What is the likely problem?",
      options: [
        "A. Tax Country is missing",
        "B. Tax Jurisdiction is missing",
        "C. Tax Locale is configured wrong",
        "D. Tax Region is configured wrong.",
      ],
      answer: "B",
      title: "Question 11",
    },
    {
      content:
        "A merchant requires that an existing section of the Site become editable from the Business Manager, so that they can modify it independently of the developer.Which of these is an important factor for a developer to consider when choosing the appropriate solution between a content slot and a Page Designer component?",
      options: [
        "A. Only Page Designer Components can be localized for different languages.",
        "B. Only page Designer components can ve tied to campaigns.",
        "C. Only content slot configurations can ve localized for different languages.",
        "D. Only content slot configurations can be tied to campaigns.",
      ],
      answer: "A",
      title: "Question 12",
    },
    {
      content:
        "A Digital Developer needs to add a new form to the shopping cart page to allow customers to enter their rewards pass ID. There is already an existing Cart.js controller that handles processing of the other cart forms.In addition, a form field node is in the form XML and the necessary form input is present in the ISML template.The code below is the submit button for the ISML markup.What additional steps must occur before the Digital Developer can begin writing the processing code for this request?",
      options: ["A. Option B", "B. Option A", "C. Option C", "D. Option D"],
      answer: "C",
      title: "Question 13",
    },
    {
      content:
        "Server.get('Show', consentTracking.consent, cache.applyDefaultCache, function (req,res,next){ Var Site = require('dw/system/Syte\"); Var pageMetaHelpter = require('*/cartridge/scripts/helpers/pageMetaHelper'); pageMetaHelpter.setPageMetaTags(req.pageMetaData, Site.current); res.render('/home/homePage'); Missing code here}, pageMetadata.computedPageMetadata);The controller endpoint code snippet above does not work.Which line of code should the developer use to replace line 6 and correct the problem?",
      options: ["A. next();", "B. return res;C. res.next();", "C. req.next();"],
      answer: "A",
      title: "Question 14",
    },
    {
      content:
        "In order to build the SFRA code to a developer sandbox for the first time, which build steps should the developer perform for the site to appear and function as designed?",
      options: [
        "A. npm run compile:js, npm run compile:scss, npm run compile:fonts",
        "B. npm run compile:js, npm run compile: scss, npm run compile:html",
        "C. npm run compile:js, npm run compile:html, npm run clean",
        "D. npm run compile:scss, npm run compile:html, npm run clean",
      ],
      answer: "A",
      title: "Question 15",
    },
    {
      content:
        "Which line of code creates a content slot that can be included on homepage.isml to display on the home page?",
      options: [
        'A. <isslot id="my_banner " description="for home page" type="global" context="content" context-object="${pdict.ContentSearchResult.content}"/>',
        'B. <isslot id="my_banner " description="for home page" context="global" context-object="${pdict.CurrentHomePage}"/>',
        'C. <isslot id="my_banner " description="for home page" type="global" context="homepage"/>',
        'D. <isslot id="my_banner " description="for home page" context="global">',
      ],
      answer: "D",
      title: "Question 16",
    },
    {
      content:
        "A Digital Developer adds the following line of code to a script.The code executes without error; however, the log file on disk does NOT contain the log message.Which two actions should be completed to write the log message to disk? (Choose two.)",
      options: [
        "A. Ensure that the debug log level is enabled to write to file in the Custom Log Settings Business Manager module.",
        'B. Ensure that the "login" category is added to the Custom Log Filters in the Log Settings Business Manager module.',
        "C. Archive old log files to make room in the log directory.",
        "D. Ensure that the debug log level has been added to the custom log level types in the Global Preferences business manager module.",
      ],
      answer: "C,D",
      title: "Question 17",
    },
    {
      content:
        "A Digital Developer is implementing an Open Commerce API call to add products to a basket. Given the following resource configuration:Which modification allows the requests to successfully execute?",
      options: [
        'A. Change the "write_attributes" value to: "(+items)".',
        'B. Change the "read_attributes" value to: "(items)".',
        'C. Change the "resource_id" value to: "/baskets/*/items".',
        'D. Change the "methods" value to: ["get", "post"].',
      ],
      answer: "C",
      title: "Question 18",
    },
    {
      content:
        "Which code sample is required to use a custom tag provided in SiteGenesis in an ISML template?",
      options: ["A. Option C", "B. Option D", "C. Option A", "D. Option B"],
      answer: "D",
      title: "Question 19",
    },
    {
      content:
        'Below is a form definition snippet from the newsletter.xml file:<?xml version="1.0"?><formxmlns=http://www.demandware.com/xml/form/2008-04-15><field formid="email" lavel="Email" type="String" mandatory="True" max-length="50" /></form>Which line of code creates a JSON object to contain the form data?',
      options: [
        "A. Server.form.getForm('dwfrm_newsletter')",
        "B. Server.form.getForm('newsletter');",
        "C. Server.forms.getForm('newsletter');",
        "D. Server.forms.getForm('dwfrm_newsletter')En el controller:En el Formulario:",
      ],
      answer: "C",
      title: "Question 20",
    },
    {
      content:
        "A merchant has a requirement to sell a combination of four existing products with a unique product ID.This collection will be known as 'Our Top Combo', and is base don the merchant's trading information that shows this combination to be in high demand.What does the developer need to do next to fulfill this requirement?",
      options: [
        "A. Create a recommendation rule associating the four products as a recommendation group.",
        "B. Create a Content Slot with Content Type = Product and add the four component products into that slot.",
        "C. Create a unique produce to called 'Our Top Combo' and add the four products into the Product Bundles tab.",
        "D. Create a Product Set called 'Our Top Combo' and add the products into the set.",
      ],
      answer: "C",
      title: "Question 21",
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
      title: "Question 22",
    },
    {
      content:
        "Universal Containers specifies a new category hierarchy for navigating the digital commerce storefront. A Digital Developer uses Business Manager to manually create a catalog with the specified category hierarchy, then uses the Products & Catalogs > Import & Export module to export the catalog as a file.How can other Developers with sandboxes on the same realm create the same catalog in their own sandboxes?",
      options: [
        "A. Use the import capability of the Site Import & Export module of Business Manager.",
        "B. Use Business Manager to upload and import a copy of the export file obtained from the original Developer.",
        "C. Use the remote upload capability of the Site Import & Export module of Business Manager.",
        "D. Use the Business Manager Data Replication module to replicate the catalog from the original Developer's sandbox.",
      ],
      answer: "A",
      title: "Question 23",
    },
    {
      content:
        "A developer wants to add a link to the My Account Page.What is the correct code to accomplish this?",
      options: [
        "A. <ahref=\"${URLUtils.get('Account-Show')}>${Resource.msg('myaccount','account',request.locale())}</a>",
        "B. <a href=\"${url.get('Account-Show')}>${Resource.message('myaccount')}</a>",
        "C. <a href=\"${URLUtils('Account-Show')}>${ResourceMgr.getPropierties('myaccount','account',null)}</a>",
        "D. <a href=\"${URLUtils.url('Account-Show')}>${Resource.msg('myaccount','account',null)}</a>",
      ],
      answer: "D",
      title: "Question 24",
    },
    {
      content:
        "A Digital Developer has identified that the code segment below is causing performance problems.What should the Developer do to improve the code?",
      options: [
        "A. Use a system attribute instead of the isOnSaleFlag custom attribute.",
        "B. Avoid post-processing and use the isOnSaleFlag attribute as a search refinement.",
        "C. Avoid using an Iterator and use a Collection instead.",
        "D. Breaks the process into separate loops.",
      ],
      answer: "D",
      title: "Question 25",
    },
    {
      content:
        "A merchant asks a developer to create a Cache Partition for the home page, so that when the home page is edited, only the home page is cleaned.Given the above requirement, where should the developer create that partition in Business Manager?",
      options: [
        "A. Operations > Cache > Site",
        "B. Administration > Sites > Manage Sites > Site > Cache",
        "C. Site > Site Preferences > Cache",
        "D. Operations > Site > Manage Sites > Cache",
      ],
      answer: "B",
      title: "Question 26",
    },
    {
      content:
        "A developer is importing edits for two different sites into the same sandbox, and is provided with four different files.Which two XML files should the developer import using the site-specific Merchant Tools import modules, instead of the Administration section import modules?Choose 2 answers.",
      options: [
        "A. System type extensions (solo en Sites)",
        "B. Search Settings En (search y en Sites)",
        "C. Promotions ( en sites y en online marketing)",
        "D. Site Jobs (sites)",
      ],
      answer: "B,C",
      title: "Question 27",
    },
    {
      content:
        "A Newsletter controller contains the following route:Server.post('Subscribe', function (req,res,next){var newsletterForm = server.forms.getForm('newsletter');var CustomObjectMgr = require('dw/object/CustomObjectMgr'); if(newsletterForm.valid){ try{ var CustomObject = CustomObjectMgr.createCustomObejct('NewsletterSubscription', newsletterform.email.value); CustomObject.custom.firstName = newsletterForm.fname.value; CustomObject.custom.lastName = newsletterForm.lname.value;-} catch(e){//Catch error here}}next();});Assuming the Custom Object metadata exists, why does this route fail to render the newsletter template when the subscription form is correctly submitted?",
      options: [
        "A. Custom Objects can only be created by Job scripts",
        "B. The Subscribe route is missing the server.middleware.httpt middleware.",
        "C. The Custom Object creation is not wrapped in a Transaction.",
        "D. The CustomObjectMgr variable should be declare outside of the route.",
      ],
      answer: "C",
      title: "Question 28",
    },
    {
      content:
        "Universal Containers created a site export file from staging in the global export directory.How should the Digital Developer update their sandbox using this staging site export file?",
      options: [
        "A. Use the Site Development > Site Import & Export Business Manager module.",
        "B. Perform a data replication from staging.",
        "C. Download the site export file and use UX Studio to transfer the data to the sandbox.",
        "D. Use the Site Development > Import & Export Business Manager module.",
      ],
      answer: "A",
      title: "Question 29",
    },
    {
      content:
        "Which three techniques improve client-side performance in production while following documented best practices? (Choose three.)",
      options: [
        "A. Combine several images into a single image.",
        "B. Use one style sheet for each ISML decorator template.",
        "C. Use inline Javascript.",
        "D. Compress CSS.",
        "E. Place CSS outside of templates.",
      ],
      answer: "B,C,D",
      title: "Question 30",
    },
    {
      content:
        "A developer needs to update the package.json file so that it points to the hock file for a cartridge, using the hooks keyword. Which snippets work correctly when added to the file?:",
      options: [
        'A. { "hooks": "./scripts/hooks.json" }',
        "B. { hooks: ./scripts/hooks.json }",
        'C. { "hooks": "./cartridge/scripts/hooks.json" }',
        'D. { hooks: "./cartridge/scripts/hooks.json" }',
      ],
      answer: "C",
      title: "Question 31",
    },
    {
      content:
        "A Digital Developer needs to store information temporarily and decides to create a custom object.Which code creates a custom object?",
      options: [
        "A. CustomObject.createCustomObject(CustomObjectType,primaryKey);",
        "B. CustomObject.createCustomObject(primaryKey,CustomObjectType);",
        "C. CustomObjectMgr.createCustomObject(primaryKey);",
        "D. CustomObjectMgr.createCustomObject(CustomObjectType,primaryKey)",
      ],
      answer: "A",
      title: "Question 32",
    },
    {
      content:
        "A Digital Developer has been given a requirement to add fault tolerance to an existing web service integration that uses Service Framework. Administrators at Universal Containers need to be able to configure the timeout and rate limiting.Which approach should the Developer use to implement the requirement?",
      options: [
        "A. Create a site preference to store timeout settings and implement an IOException handler to execute fallback code.",
        "B. Implement a condition that checks to see if the response was empty and execute fallback code if true.",
        "C. Use the setTimeout method to execute fallback code if the request has NOT completed.",
        "D. Implement a ServiceUnavailableException exception handler to execute fallback code.",
      ],
      answer: "D",
      title: "Question 33",
    },
    {
      content:
        "Which two items are appropriate content of custom logs implemented at checkout?Choose 2 answers:",
      options: [
        "A. Payment gateway service response code",
        "B. Transaction's credit card information",
        "C. Customer's password at post-checkout sign up",
        "D. Order failure information",
      ],
      answer: "A,D",
      title: "Question 34",
    },
    {
      content:
        "A client that sells to multiple countries in Europe needs to disable Apple Pay for Denmark.Which Business Manager module is used to achieve this requirement?",
      options: [
        "A. Payment Methods",
        "B. Locale Payments",
        "C. Apple Pay",
        "D. Payment Processors",
      ],
      answer: "C",
      title: "Question 35",
    },
    {
      content:
        "A client wants to differentiate their monobrand stores with a special icon when shown in the store locator. The information is saved in a true/false custom attribute for each Store object in Merchant tools.How should the developer follow SFRA best practices to expose this data for rendering?",
      options: [
        "A. Extend the existing Stores_Find controller with a new middleware function that performs the query",
        "B. Ad dan <isscript> to the template, and call StoreMgr.searchStoresByCoordinates();",
        "C. Use the module.superModule functionality and the call method to add a new property to the Store Model.",
        "D. Pass the Store system object to the template, so that custom propierties are available",
      ],
      answer: "C",
      title: "Question 36",
    },
    {
      content:
        "A developer is writing a server side script that needs to maintain state across calls. The persistent information needed includes these items.* The current customer* Whether or not the customer is authenticated* The privacy attributes (such as tracking consent or cookie policy)Which technique should the developer use to maintain state in an efficient and scalable manner that follows best practice?",
      options: [
        "A. Use a non-replicable Custom Object to store the information temporarily.",
        "B. Use the Session class in the B2C Commerce api.",
        "C. Use an SFRA controller, because it runs server-side, the state is automatically maintained",
        "D. Use a client-side cookie to store the information for the session duration.",
      ],
      answer: "B",
      title: "Question 37",
    },
    {
      content:
        "A developer is asked to improve the maintainability of a page by reducing its code repetition.What are two techniques the developer should implement to achieve this?Choose 2 answers.",
      options: [
        "A. Use local template includes",
        "B. Implement template decorators paired with replace tags",
        "C. Embed partial files using ISML expressions",
        "D. Require and render templates with <isscript> tags",
      ],
      answer: "A,B",
      title: "Question 38",
    },
    {
      content:
        "A Digital Developer must resolve a performance issue with product tiles. The Developer determines that the product tiles are NOT being cached for a long enough period.Which two methods can the Developer use to verify the cache settings for the product tiles? (Choose two.)",
      options: [
        "A. Enable the template debugger to verify the cache times for the producttile.isml template.",
        "B. View the product list page cache settings provided in the Administration > Manage Sites Business Manager module.",
        "C. View the cache information provided by the Merchant Tools > Technical Reports Business Manager module.",
        "D. Enable cache information in the storefront toolkit and view the cache information for the product tile.",
      ],
      answer: "B,D",
      title: "Question 39",
    },
    {
      content:
        "A Digital Developer is tasked with setting up a new Digital Server Connection using UX Studio in their sandbox.Which three items are required to accomplish this task? (Choose three.)",
      options: [
        "A. Keystore Password",
        "B. Instance Version",
        "C. Business Manager Username",
        "D. Business Manager Password",
        "E. Instance Hostname",
      ],
      answer: "A,D,E",
      title: "Question 40",
    },
  ],
});
