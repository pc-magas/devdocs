"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[73920],{71753:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return r},metadata:function(){return u},toc:function(){return d}});var o=n(83117),a=n(80102),i=(n(67294),n(3905)),s=n(13904),l=["components"],r={title:"Acceptance testing for the Moodle App",sidebar_label:"Acceptance testing",tags:["Quality Assurance","Testing","Behat","Moodle App"]},p=void 0,u={unversionedId:"moodleapp/development/testing/acceptance-testing",id:"moodleapp/development/testing/acceptance-testing",title:"Acceptance testing for the Moodle App",description:"In order to run tests that carry out automated functionality testing for the Moodle App, you can write Acceptance tests. This can be useful if you want to test plugins that are compatible with the app, or you're contributing to the app core. Behat tests for the app work the same way as tests for Moodle core, but they are not run as part of a normal Behat execution and there are some differences that we'll go through in this page.",source:"@site/docs/moodleapp/development/testing/acceptance-testing.md",sourceDirName:"moodleapp/development/testing",slug:"/moodleapp/development/testing/acceptance-testing",permalink:"/devdocs/docs/moodleapp/development/testing/acceptance-testing",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/docs/moodleapp/development/testing/acceptance-testing.md",tags:[{label:"Quality Assurance",permalink:"/devdocs/docs/tags/quality-assurance"},{label:"Testing",permalink:"/devdocs/docs/tags/testing"},{label:"Behat",permalink:"/devdocs/docs/tags/behat"},{label:"Moodle App",permalink:"/devdocs/docs/tags/moodle-app"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1655896501,formattedLastUpdatedAt:"22/06/2022",frontMatter:{title:"Acceptance testing for the Moodle App",sidebar_label:"Acceptance testing",tags:["Quality Assurance","Testing","Behat","Moodle App"]},sidebar:"docs",previous:{title:"Testing",permalink:"/devdocs/docs/category/testing"},next:{title:"Unit testing",permalink:"/devdocs/docs/moodleapp/development/testing/unit-testing"}},h={},d=[{value:"Installation",id:"installation",level:2},{value:"Configuring the Moodle site",id:"configuring-the-moodle-site",level:3},{value:"Configuring the Moodle App",id:"configuring-the-moodle-app",level:3},{value:"Configuring Behat",id:"configuring-behat",level:3},{value:"Running Behat",id:"running-behat",level:2},{value:"Writing tests",id:"writing-tests",level:2},{value:"Test structure",id:"test-structure",level:3},{value:"Start the app",id:"start-the-app",level:3},{value:"Log in to the app",id:"log-in-to-the-app",level:3},{value:"Standard steps",id:"standard-steps",level:3},{value:"Actions",id:"actions",level:3},{value:"Assertions",id:"assertions",level:3},{value:"Leaving the app",id:"leaving-the-app",level:3},{value:"A complete example",id:"a-complete-example",level:3},{value:"Limitations",id:"limitations",level:2},{value:"Advanced",id:"advanced",level:2},{value:"Versioning",id:"versioning",level:3},{value:"Testing against multiple app versions",id:"testing-against-multiple-app-versions",level:3},{value:"Debugging tests",id:"debugging-tests",level:3},{value:"Writing custom steps",id:"writing-custom-steps",level:3},{value:"Upgrading tests from an older version",id:"upgrading-tests-from-an-older-version",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"General advice",id:"general-advice",level:3},{value:"Unable to load app version from http://moodleapp:8100/config.json",id:"unable-to-load-app-version-from-httpmoodleapp8100configjson",level:3},{value:"The plugins required by this course could not be loaded correctly...",id:"the-plugins-required-by-this-course-could-not-be-loaded-correctly",level:3},{value:"Fatal error: Maximum execution time of 30 seconds exceeded in...",id:"fatal-error-maximum-execution-time-of-30-seconds-exceeded-in",level:3},{value:"Test fails because of the browser language",id:"test-fails-because-of-the-browser-language",level:3},{value:"Application build gets killed without any error information",id:"application-build-gets-killed-without-any-error-information",level:3},{value:"MacOS: running moodle-docker commands show grep usage options and do nothing else",id:"macos-running-moodle-docker-commands-show-grep-usage-options-and-do-nothing-else",level:3}],c={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(s.Z,(0,o.Z)({frontMatter:r},void 0!==u?{metadata:u}:{},{mdxType:"MoodlePageBanner"})),(0,i.kt)("p",null,"In order to run tests that carry out automated functionality testing for the Moodle App, you can write ",(0,i.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Acceptance_testing"},"Acceptance tests"),". This can be useful if you want to test plugins that are compatible with the app, or you're contributing to the app core. Behat tests for the app work the same way as tests for Moodle core, but they are not run as part of a normal Behat execution and there are some differences that we'll go through in this page."),(0,i.kt)("p",null,"A key point is that these tests are run using the Moodle Behat infrastructure, and don't depend only on the app codebase. Therefore, you will need a Moodle development setup as described in ",(0,i.kt)("a",{parentName:"p",href:"/general/development/gettingstarted"},"Setting up development environment"),"."),(0,i.kt)("p",null,"The main advantages of this approach are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It is easy for third-party plugin authors to create tests for app features in exactly the same way that they create tests for website features."),(0,i.kt)("li",{parentName:"ul"},"Where institutions run tests automatically, it should be relatively easy to include some app tests within the existing approach."),(0,i.kt)("li",{parentName:"ul"},"This system does not require any mobile device hardware and should work on all common platforms.")),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"In order to run tests for the app, you will need to run both a Moodle site and the Moodle App."),(0,i.kt)("p",null,"The Moodle site should be version 3.9.7+, 3.10.4+ or newer (3.11, 4.0, etc.). You also need to install the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/moodlehq/moodle-local_moodlemobileapp/"},"local_moodlemobileapp")," plugin, using the version that corresponds with the version of the Moodle App that you're testing on. If you have tests for an older version, you can read the ",(0,i.kt)("a",{parentName:"p",href:"#upgrading-tests-from-an-older-version"},"Upgrading tests from an older version")," section."),(0,i.kt)("p",null,"We recommend that you use ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/moodlehq/moodle-docker#use-containers-for-running-behat-tests-for-the-mobile-app"},"moodle-docker"),", because it's configured to run mobile tests and you can skip reading this entire section. You won't even need to clone the app repository."),(0,i.kt)("p",null,"Nevertheless, if you still have to run the projects in your local machine, you can read the following instructions."),(0,i.kt)("h3",{id:"configuring-the-moodle-site"},"Configuring the Moodle site"),(0,i.kt)("p",null,"You can learn how to run a Moodle site locally in ",(0,i.kt)("a",{parentName:"p",href:"/general/development/gettingstarted"},"Setting up development environment"),"."),(0,i.kt)("p",null,"Remember to install the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/moodlehq/moodle-local_moodlemobileapp/"},"local_moodlemobileapp")," plugin with the same version that you're using for the mobile app."),(0,i.kt)("h3",{id:"configuring-the-moodle-app"},"Configuring the Moodle App"),(0,i.kt)("p",null,"If you are going to modify the application code, you can learn how to run it locally in ",(0,i.kt)("a",{parentName:"p",href:"../setup"},"Setting up your development environment for the Moodle App"),". You only need to run the application in a browser, so you can skip the instructions for Android/iOS. Make sure to launch the application on the testing environment, running ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run serve:test"),"."),(0,i.kt)("p",null,"If you only intend to run the app with the goal of executing Behat tests, you can use ",(0,i.kt)("a",{parentName:"p",href:"../setup/docker-images"},"the Docker images for the Mobile App"),". Again, make sure that you're running them on the testing environment using the ",(0,i.kt)("inlineCode",{parentName:"p"},"-test")," suffix."),(0,i.kt)("p",null,"However you set up the environment, if you change the version of the app you'll need to re-run the Behat init command so that your Moodle site knows about it."),(0,i.kt)("h3",{id:"configuring-behat"},"Configuring Behat"),(0,i.kt)("p",null,"In order to enable app testing, you need to add the following configuration to your site's ",(0,i.kt)("inlineCode",{parentName:"p"},"config.php")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$CFG->behat_ionic_wwwroot = 'http://localhost:8100';\n")),(0,i.kt)("p",null,"The url you use here must be reachable by your Moodle site, and the application needs to be served at this url when running tests and also when you initialise the Behat environment."),(0,i.kt)("p",null,"The Moodle App ",(0,i.kt)("a",{parentName:"p",href:"../setup/app-in-browser"},"only works in Chromium-based browsers"),", so mobile tests will be ignored if you are using any other browser. You can learn how to configure the browser used in your tests in the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Running_acceptance_test"},"Running acceptance test")," page."),(0,i.kt)("p",null,'If everything is configured properly, you should see "Configured app tests for version X.X.X" after running ',(0,i.kt)("inlineCode",{parentName:"p"},"admin/tool/behat/cli/init.php"),"."),(0,i.kt)("h2",{id:"running-behat"},"Running Behat"),(0,i.kt)("p",null,"To run mobile tests in Behat, simply launch Behat in the usual way. The app tests all have the ",(0,i.kt)("inlineCode",{parentName:"p"},"@app")," tag, so if you want to run all the mobile tests you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"--tags=@app"),"."),(0,i.kt)("p",null,"It is OK to combine mobile and web tests in the same run."),(0,i.kt)("h2",{id:"writing-tests"},"Writing tests"),(0,i.kt)("p",null,"This page assumes you already know all about ",(0,i.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Writing_acceptance_tests"},"Writing acceptance tests")," in general."),(0,i.kt)("h3",{id:"test-structure"},"Test structure"),(0,i.kt)("p",null,"Mobile app test scenarios should be marked ",(0,i.kt)("inlineCode",{parentName:"p"},"@app")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"@javascript")," in addition to any other tags."),(0,i.kt)("p",null,"You are writing a normal Behat test and this is likely to require background steps, such as creating courses, users, groups, etc."),(0,i.kt)("h3",{id:"start-the-app"},"Start the app"),(0,i.kt)("p",null,"When you want to get started testing the application, you can use the following step to launch the application:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-gherkin"},"Given I enter the app\n")),(0,i.kt)("p",null,"This will:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Set up all the Moodle server settings to allow the Moodle App to connect."),(0,i.kt)("li",{parentName:"ul"},"Restart the browser, this is needed to ensure that it doesn't use data from previous runs."),(0,i.kt)("li",{parentName:"ul"},"Set the browser to a suitable phone size (you can change it with other steps if you want a tablet or a different size)."),(0,i.kt)("li",{parentName:"ul"},"Open the app in the test browser."),(0,i.kt)("li",{parentName:"ul"},"Inject the necessary JavaScript code to support Behat testing."),(0,i.kt)("li",{parentName:"ul"},"Skip the onboarding and enter the site url in the initial screens of the app, if necessary.")),(0,i.kt)("p",null,"After this step completes, if it is the first time you ran the app inside this scenario, you will be at the login screen. If you logged in earlier, you will be at the start page."),(0,i.kt)("p",null,"You can also use this step if you are already using the app and it will restart it."),(0,i.kt)("h3",{id:"log-in-to-the-app"},"Log in to the app"),(0,i.kt)("p",null,"To log in, you can use the following step:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-gherkin"},'When I log in as "student"\n')),(0,i.kt)("p",null,"This is the same step that's used to log into standard Moodle, and it works in the app as well. You should have created the user in background steps, and it will log in using the text as both username and password."),(0,i.kt)("p",null,"You will then be left at the start page."),(0,i.kt)("h3",{id:"standard-steps"},"Standard steps"),(0,i.kt)("p",null,"Technically, you can use any standard Behat action in the app. However, most of them will probably not work as you expect because the app runs on a different environment. It is still a website, but it's built using ",(0,i.kt)("a",{parentName:"p",href:"https://ionicframework.com/docs/"},"Ionic Framework"),"."),(0,i.kt)("p",null,'One important problem is that the app has a complex DOM, and previous pages that are "back" from your current page may still be present in the DOM. Which means that any steps that just look for the first matching element in the DOM are likely to look for elements on a page you\'re not even on.'),(0,i.kt)("p",null,"Another issue is that Ionic relies heavily on ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM"},"the Shadow DOM"),", and most steps in standard Moodle are not prepared to handle that."),(0,i.kt)("p",null,'For these and other reasons, there are some steps that have been implemented specifically for the app. You can distinguish them from others because most of them end with "in the app".'),(0,i.kt)("p",null,"Having said that, here's a list of steps that work and you can use reliably."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Any step you normally need to set up information in Moodle \u2014 For example, creating courses, users, etc."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'I change viewport size to "{width}x{height}"')," \u2014 You can use this step to simulate switching between portrait and landscape formats."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"I pause")," \u2014 This step works and it is very useful to debug your scenario.")),(0,i.kt)("h3",{id:"actions"},"Actions"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-gherkin"},'When I press "Course 1" in the app\n')),(0,i.kt)("p",null,"This will click an element found using accessibility rules, so it could be visible text, content inside ",(0,i.kt)("inlineCode",{parentName:"p"},"aria-label"),", content described by ",(0,i.kt)("inlineCode",{parentName:"p"},"ara-labelledby"),", etc. It should work for links, buttons and other clickable elements."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-gherkin"},'When I press "Course 1" near "Unique text" in the app\n')),(0,i.kt)("p",null,"You can use this step to narrow matches if the text you're providing is duplicated throughout the page."),(0,i.kt)("p",null,'The second value, "Unique text" in this example, should be unique on the page. Otherwise, you may have issues finding the element that you seek. The system will press the element matching your text that is nearest to the one found using the unique text.'),(0,i.kt)("p",null,"Nearest is defined in terms of the DOM rather than pixel position; it is based on the number of steps you would have to take up the tree from the candidate element before you get to a shared ancestor with the unique text."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-gherkin"},'When I select "Item 1" in the app\nWhen I select "Item 1" near "Unique text" in the app\nWhen I unselect "Item 1" in the app\nWhen I unselect "Item 1" near "Unique text" in the app\n')),(0,i.kt)("p",null,"You can use these steps to select or unselect radio buttons, check boxes, and such."),(0,i.kt)("p",null,"You could use the previous ",(0,i.kt)("inlineCode",{parentName:"p"},"I press")," step as well, but in some cases you will notice that it doesn't work as you expect. This is due to some internal quirks of how Ionic renders these components, so prefer using this specific steps where possible."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-gherkin"},'When I set the field "field name" to "text value" in the app\nWhen I set the field "field name" near "Unique text" to "text value" in the app\n')),(0,i.kt)("p",null,"This sets a text field with the given value. The same rules will apply to find the input element as for clicking, so using the input name will not suffice. This is in order to encourage accessibility best practices. The only difference with the previous step is that this only matches fillable elements such as ",(0,i.kt)("inlineCode",{parentName:"p"},"<input>"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"<textarea>")," and elements with ",(0,i.kt)("inlineCode",{parentName:"p"},'contenteditable="true"'),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-gherkin"},"When I press the back button in the app\nWhen I press the more menu button in the app\nWhen I press the page menu button in the app\nWhen I press the user menu button in the app\n")),(0,i.kt)("p",null,"These steps will press, respectively:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"back button")," \u2014 This is the left pointing arrow at top left of the app."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"more menu")," button \u2014 This is the icon with at bottom right of the app."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"page menu")," button, if present \u2014 This is the icon with the three dots at top right of the app."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"user menu")," button, if present \u2014 This is the avatar button at top right of the app present on navigation level 1.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-gherkin"},"When I switch to the browser tab opened by the app\nWhen I close the browser tab opened by the app\n")),(0,i.kt)("p",null,"These two steps are necessary if you want to test the transition between the app and a browser."),(0,i.kt)("p",null,'For example, after pressing "Open in browser" you can use the first step above, and you will be able to use normal Moodle Behat steps to work in the browser tab. Once you\'re finished, you can use the second step to go back to the app.'),(0,i.kt)("h3",{id:"assertions"},"Assertions"),(0,i.kt)("p",null,"Like actions, there are some Behat assertions that are specific to the app."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-gherkin"},'Then I should find "Course 1" in the app\nThen I should find "Course 1" near "Unique text" in the app\nThen I should not find "Course 1" in the app\nThen I should not find "Course 1" near "Unique text" in the app\n')),(0,i.kt)("p",null,"These steps can be used to assert that the specified text exists somewhere in the app."),(0,i.kt)("p",null,"Notice that the standard ",(0,i.kt)("inlineCode",{parentName:"p"},"I should see")," step may not work in the app because of the Shadow DOM. This step will also search using accessibility rules, so text within ",(0,i.kt)("inlineCode",{parentName:"p"},"aria-label")," or described with ",(0,i.kt)("inlineCode",{parentName:"p"},"aria-labelledby")," will work as well."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-gherkin"},'Then the header should be "Course 1" in the app\n')),(0,i.kt)("p",null,"This checks the text of the current page header. It must be an exact match for the specified text."),(0,i.kt)("p",null,"You could have used the ",(0,i.kt)("inlineCode",{parentName:"p"},"I should find")," step described previously, but this allows you to specifically check the header as opposed to anything in the page."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-gherkin"},'Then "Item 1" should be selected in the app\nThen "Item 1" near "Unique text" should be selected in the app\nThen "Item 1" should not be selected in the app\nThen "Item 1" near "Unique text" should not be selected in the app\n')),(0,i.kt)("p",null,"You can use these steps to assert whether radio buttons, check boxes, and such are selected or not."),(0,i.kt)("h3",{id:"leaving-the-app"},"Leaving the app"),(0,i.kt)("p",null,"If you want to leave the app and go back to Moodle within a scenario, simply use a Moodle step that goes to a page. For example, use ",(0,i.kt)("inlineCode",{parentName:"p"},"I am on site homepage")," or ",(0,i.kt)("inlineCode",{parentName:"p"},'I am on "Course 1" course homepage'),"."),(0,i.kt)("p",null,"You only need to do this if you want to carry out actions within Moodle after using the app, within the scenario. At the end of your scenario, there is no need to explicitly leave the app; Moodle will automatically start the next scenario on the Moodle start page as usual."),(0,i.kt)("h3",{id:"a-complete-example"},"A complete example"),(0,i.kt)("p",null,"This example is a complete feature file that loads the app, opens a course, and asserts that the app is showing the course page:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-gherkin"},'@app @javascript\nFeature: Test app (demo)\n  In order to test something in the app\n  As a developer\n  I need for this test script to run the app\n\n  Background:\n    Given the following "courses" exist:\n      | fullname | shortname |\n      | Course 1 | C1        |\n    And the following "users" exist:\n      | username |\n      | student  |\n    And the following "course enrolments" exist:\n      | user     | course | role    |\n      | student  | C1     | student |\n\n  Scenario: Try going into the course\n    When I enter the app\n    And I log in as "student"\n    And I press "Course 1" near "Course overview" in the app\n    Then the header should be "Course 1" in the app\n')),(0,i.kt)("p",null,"You can find more complex examples looking at the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/moodlehq/moodle-local_moodlemobileapp"},"tests for the app core"),"."),(0,i.kt)("h2",{id:"limitations"},"Limitations"),(0,i.kt)("p",null,"Using this approach, there are some limitations you should be aware of:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Lack of native functionality \u2014 Fundamentally, it is not possible to test behaviour specific to native devices because tests are run in a browser."),(0,i.kt)("li",{parentName:"ul"},"Missing functionality \u2014 There are some known limitations and unsupported features, for example there is currently no obvious way to attach files. Some of these are possible, but they haven't been implemented yet. If something is missing for your use-case, you can submit feature requests in ",(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MOBILE"},"the tracker")," using the ",(0,i.kt)("inlineCode",{parentName:"li"},"Behat")," component.")),(0,i.kt)("h2",{id:"advanced"},"Advanced"),(0,i.kt)("h3",{id:"versioning"},"Versioning"),(0,i.kt)("p",null,"Behat tests can relate to particular versions of the mobile app. For these situations, there are two types of tags you can add to your scenario or feature:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@app_from{version}")," \u2014 These will be included in every app matching the specified version and newer."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@app_upto{version}")," \u2014 These will be included in every app matching the specified version and older.")),(0,i.kt)("p",null,"You can use two-digit or three-digit version numbers. For example, you could use ",(0,i.kt)("inlineCode",{parentName:"p"},"@app_from4.0")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"@app_upto3.9.5"),"."),(0,i.kt)("p",null,"After changing the app version used for testing, make sure you re-run Behat init. It is the initialisation process that stores which version of the app you're using."),(0,i.kt)("h3",{id:"testing-against-multiple-app-versions"},"Testing against multiple app versions"),(0,i.kt)("p",null,"If you need to run tests against multiple versions of the app, you can do it in two ways:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Update the code in the app workspace by checking out a different version."),(0,i.kt)("li",{parentName:"ol"},"Maintain multiple copies of the mobile app workspace and switch between them by changing ",(0,i.kt)("inlineCode",{parentName:"li"},"config.php"),".")),(0,i.kt)("p",null,"In both cases, you'll need to re-run the Behat init command and run the tests again."),(0,i.kt)("p",null,"Unfortunately, the only way to run this in parallel is to have separate Moodle installations with their own configurations."),(0,i.kt)("h3",{id:"debugging-tests"},"Debugging tests"),(0,i.kt)("p",null,"If you insert a pause into your test and open the developer tools, you can debug the application like you would during development. You can learn how to do that in ",(0,i.kt)("a",{parentName:"p",href:"../setup/app-in-browser"},"Using the Moodle App in a browser"),"."),(0,i.kt)("p",null,"Additionally, you can see log information in the console about which Behat steps have been carried out so far, and whether Behat is waiting for anything. Here is an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"VM649:391 BEHAT: 17:45:15.477 Action - Set field Username to: student2\nVM649:391 BEHAT: 17:45:15.480 PENDING+: DELAY,dom-mutation\nVM649:391 BEHAT: 17:45:15.982 PENDING-: DELAY\nVM649:391 BEHAT: 17:45:16.28 PENDING-:\nVM649:391 BEHAT: 17:45:16.98 Action - Set field Password to: student2\nVM649:391 BEHAT: 17:45:16.106 PENDING+: DELAY,dom-mutation\nVM649:391 BEHAT: 17:45:16.607 PENDING-: DELAY\nVM649:391 BEHAT: 17:45:16.653 PENDING-:\n")),(0,i.kt)("p",null,"While the test is paused, you can also carry out some of the app Behat steps manually by typing commands into the console, which is convenient if you're not quite sure what command would work. The commands are available in a global object called ",(0,i.kt)("inlineCode",{parentName:"p"},"behat"),". Here are some examples:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"behat.setField('Password', 'student2');\nbehat.press('Log in', 'Forgotten');\nbehat.pressStandard('back');\n")),(0,i.kt)("p",null,"There are more functions in the object; try using the browser's autocomplete to see the options, or look at the source in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/moodlehq/moodle-local_moodlemobileapp/blob/master/tests/behat/app_behat_runtime.js"},"app_behat_runtime.js"),"."),(0,i.kt)("p",null,"If you're using ",(0,i.kt)("inlineCode",{parentName:"p"},"moodle-docker"),", remember that you can interact with the browser ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/moodlehq/moodle-docker#using-vnc-to-view-behat-tests"},"using VNC"),". With a VNC client you can view in real-time what behat is doing in the browser."),(0,i.kt)("h3",{id:"writing-custom-steps"},"Writing custom steps"),(0,i.kt)("p",null,"If you find something missing to test your code, you can always implement custom steps."),(0,i.kt)("p",null,"If you're writing a plugin, you can include a new class under ",(0,i.kt)("inlineCode",{parentName:"p"},"tests/behat/behat\\_{youpluginname}.php"),". If you're working on application code, you can always update ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/moodlehq/moodle-local_moodlemobileapp/blob/master/tests/behat/behat_app.php"},"behat_app.php")," as well."),(0,i.kt)("p",null,"You can learn more about writing custom steps in the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Writing_new_acceptance_test_step_definitions"},"Writing new acceptance test step definitions")," page, and if you want to see how the steps that are specific to the app work, you should look into ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/moodlehq/moodle-local_moodlemobileapp/blob/master/tests/behat/behat_app.php"},"behat_app.php")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/moodlehq/moodle-local_moodlemobileapp/blob/master/tests/behat/app_behat_runtime.js"},"app_behat_runtime.js"),"."),(0,i.kt)("h2",{id:"upgrading-tests-from-an-older-version"},"Upgrading tests from an older version"),(0,i.kt)("p",null,"If you wrote tests before the app started using Ionic 5 (in version 3.9.5), it is possible that your tests are not working any longer. This guide has been rewritten with the latest information, so make sure to read the rest of the document to see what changed."),(0,i.kt)("p",null,"In general though, upgrading your current tests should be mostly straightforward. Here are some overall things to keep in mind:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ionic 5 starts using ",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM"},"the Shadow DOM"),", and that's the source of many issues for the previous version of the Behat tests. The built-in steps have been rewritten to keep that in mind, and mostly should work the same way. One important difference is that they look for content using accessibility rules, so some of your previous assumptions may not be working."),(0,i.kt)("li",{parentName:"ul"},"Before this update, it was safe to use the standard ",(0,i.kt)("inlineCode",{parentName:"li"},"I should see")," step. But given the problems mentioned, it is likely that it breaks down in many situations. Instead, you should use the new ",(0,i.kt)("inlineCode",{parentName:"li"},"I should find ... in the app")," steps."),(0,i.kt)("li",{parentName:"ul"},"Similar to the last point, some radio inputs and checkboxes that worked before are broken. You should be able to use the new ",(0,i.kt)("inlineCode",{parentName:"li"},"I select ... in the app")," steps instead."),(0,i.kt)("li",{parentName:"ul"},"If you were relying in xpath or css selectors before, they will probably not work anymore. Even if you try to patch them, these selectors don't pierce through the Shadow DOM. In any case, it's always better to use accessible locators in your test like a real user would, so you can use this opportunity to improve accessibility in your plugin."),(0,i.kt)("li",{parentName:"ul"},"Pay special attention to any assertions such as ",(0,i.kt)("inlineCode",{parentName:"li"},"should not exist")," that you have in your tests. These assertions will not fail, because the elements won't be found. But if you get an eventual bug when something is shown that shouldn't, those steps will probably not pick it up because the locators may have changed."),(0,i.kt)("li",{parentName:"ul"},"If you were running your tests in CI, there is a new dependency even if you're only testing a plugin and not running the application tests. The test definitions have been moved from core to the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/moodlehq/moodle-local_moodlemobileapp/"},"local_moodlemobileapp")," plugin, and you should have it installed in your Moodle site running the tests. This was done in order to decouple application code from the core.")),(0,i.kt)("p",null,"If you also need to upgrade your plugin, and not just the tests, check out the ",(0,i.kt)("a",{parentName:"p",href:"../../upgrading/plugins-upgrade-guide"},"Moodle App Plugins upgrade guide")," page."),(0,i.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("h3",{id:"general-advice"},"General advice"),(0,i.kt)("p",null,"If you are stuck with an error and you can't find a way to continue, here's a list of things you can do:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Make sure you added ",(0,i.kt)("inlineCode",{parentName:"li"},'$CFG->behat_ionic_wwwroot = "http://localhost:8100";')," (or equivalent) to your ",(0,i.kt)("inlineCode",{parentName:"li"},"config.php")," file, and that url is reachable from the host where your Moodle site is running."),(0,i.kt)("li",{parentName:"ul"},"Remember when you need to re-run ",(0,i.kt)("inlineCode",{parentName:"li"},"admin/tool/behat/cli/init.php"),', and make sure that you see "Configured app tests for version X.X.X". When in doubt, just run it again; it may fix your problem.'),(0,i.kt)("li",{parentName:"ul"},"It is possible that your tests break if you're using an unstable version of the app. Try to use stable versions using the ",(0,i.kt)("inlineCode",{parentName:"li"},"master")," branch if you're working with the source code or tagged releases if you're using Docker."),(0,i.kt)("li",{parentName:"ul"},"Mobile Behat tests don't work well with XDebug, so if you're using it, turn it off in ",(0,i.kt)("inlineCode",{parentName:"li"},"php.ini")," while running the tests. Also, remember to restart Apache if necessary.")),(0,i.kt)("h3",{id:"unable-to-load-app-version-from-httpmoodleapp8100configjson"},"Unable to load app version from http://moodleapp:8100/config.json"),(0,i.kt)("p",null,"This message appears when the Moodle site is not able to reach the app. Make sure that the url is available from the host you're running the Behat commands from. Also make sure that the app is actually running at the specified url."),(0,i.kt)("p",null,"It's ok if the actual ",(0,i.kt)("inlineCode",{parentName:"p"},"/config.json")," url doesn't work, that's actually a remnant from legacy code. The url that Moodle is actually looking for is ",(0,i.kt)("inlineCode",{parentName:"p"},"/assets/env.json"),"."),(0,i.kt)("h3",{id:"the-plugins-required-by-this-course-could-not-be-loaded-correctly"},"The plugins required by this course could not be loaded correctly..."),(0,i.kt)("p",null,"This means either some activity on the course is not adapted to support the moodle app or there is a timeout in the request to your behat site."),(0,i.kt)("p",null,"To clear the timeout message, open the app in your ",(0,i.kt)("a",{parentName:"p",href:"../setup/app-in-browser"},"development browser"),", open the Inspector, open the Application tab, select Clear storage, press Clear site data, close Inspector, close the tab with mobile site, re-open mobile site in new tab and log in. Then in a separate tab, log in to your behat site (you can find the url in ",(0,i.kt)("inlineCode",{parentName:"p"},"$CFG->behat_wwwroot")," within your ",(0,i.kt)("inlineCode",{parentName:"p"},"config.php")," file) and make sure you can get into the course without seeing the error."),(0,i.kt)("h3",{id:"fatal-error-maximum-execution-time-of-30-seconds-exceeded-in"},"Fatal error: Maximum execution time of 30 seconds exceeded in..."),(0,i.kt)("p",null,"This means that your local site has not been updated/visited since an upgrade. Just go to your local behat site (you can find the url in ",(0,i.kt)("inlineCode",{parentName:"p"},"$CFG->behat_wwwroot")," within your ",(0,i.kt)("inlineCode",{parentName:"p"},"config.php")," file), log in as admin and run notifications, then visit a course. Do this step often to avoid timeouts!"),(0,i.kt)("h3",{id:"test-fails-because-of-the-browser-language"},"Test fails because of the browser language"),(0,i.kt)("p",null,"If your operating system is in a different language than English, the tests may fail."),(0,i.kt)("p",null,"Chrome does not have an easy way to force the browser language to English, so the best way to solve the issue is forcing the app default language to English."),(0,i.kt)("p",null,"To do so, just set the ",(0,i.kt)("inlineCode",{parentName:"p"},"forcedefaultlanguage")," attribute to ",(0,i.kt)("inlineCode",{parentName:"p"},'"en"')," in your ",(0,i.kt)("inlineCode",{parentName:"p"},"moodle.config.json")," file in the app."),(0,i.kt)("h3",{id:"application-build-gets-killed-without-any-error-information"},"Application build gets killed without any error information"),(0,i.kt)("p",null,"In some situations, it is possible that you see ",(0,i.kt)("inlineCode",{parentName:"p"},"Killed")," in the console and a command suddenly stops without any further information. In these situations, make sure to check the ",(0,i.kt)("a",{parentName:"p",href:"#general-advice"},"General advice")," section, but it is possible that your computer is running out of memory."),(0,i.kt)("p",null,"If you are running the scripts inside of a Docker container, make sure that Docker is allocated enough memory. If you are using Docker desktop (for example, on a Mac), you can inspect these settings under Preferences > Resources > Advanced > Memory."),(0,i.kt)("h3",{id:"macos-running-moodle-docker-commands-show-grep-usage-options-and-do-nothing-else"},"MacOS: running moodle-docker commands show grep usage options and do nothing else"),(0,i.kt)("p",null,"This is ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/moodlehq/moodle-docker/issues/188"},"a known issue")," in moodle-docker for Mac. The workaround for now is just to explicitly initialize the ",(0,i.kt)("inlineCode",{parentName:"p"},"MOODLE_DOCKER_APP_RUNTIME")," variable in your local environment."))}m.isMDXComponent=!0}}]);