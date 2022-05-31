"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[51880],{45257:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return m}});var o=a(83117),i=a(80102),s=(a(67294),a(3905)),n=a(13904),r=["components"],l={title:"Applying accessibility on Moodle App",sidebar_label:"Accessibility",sidebar_position:2,tags:["Moodle App","Accessibility","Compliance","Certification"]},c=void 0,d={unversionedId:"moodleapp/accessibility",id:"moodleapp/accessibility",title:"Applying accessibility on Moodle App",description:"Screen readers",source:"@site/docs/moodleapp/accessibility.md",sourceDirName:"moodleapp",slug:"/moodleapp/accessibility",permalink:"/devdocs/docs/moodleapp/accessibility",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/docs/moodleapp/accessibility.md",tags:[{label:"Moodle App",permalink:"/devdocs/docs/tags/moodle-app"},{label:"Accessibility",permalink:"/devdocs/docs/tags/accessibility"},{label:"Compliance",permalink:"/devdocs/docs/tags/compliance"},{label:"Certification",permalink:"/devdocs/docs/tags/certification"}],version:"current",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1654006116,formattedLastUpdatedAt:"31/05/2022",sidebarPosition:2,frontMatter:{title:"Applying accessibility on Moodle App",sidebar_label:"Accessibility",sidebar_position:2,tags:["Moodle App","Accessibility","Compliance","Certification"]},sidebar:"docs",previous:{title:"Overview",permalink:"/devdocs/docs/moodleapp/overview"},next:{title:"Translation",permalink:"/devdocs/docs/moodleapp/translation"}},p={},m=[{value:"Screen readers",id:"screen-readers",level:2},{value:"Tools and resources",id:"tools-and-resources",level:2}],u={toc:m};function h(e){var t=e.components,a=(0,i.Z)(e,r);return(0,s.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(n.Z,(0,o.Z)({frontMatter:l},void 0!==d?{metadata:d}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("h2",{id:"screen-readers"},"Screen readers"),(0,s.kt)("p",null,"VoiceOver and TalkBack are the native applications for screen reading in iOS and Android devices. In order to make the code understandable to these applications we encourage the developers to use the ",(0,s.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/wai-aria-1.1/%7CAccessible"},"Rich Internet Applications (WAI-ARIA) 1.1")," recommendations of W3C. Those documents includes a bunch of rules to be applied to the HTML code to add semantic information to it."),(0,s.kt)("p",null,"First step on that is to ",(0,s.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/wai-aria-1.1/#role_definitions%7Cidentify"},"the role")," of the main elements of navigation and information of the page. Then, you should apply the correct aria attributes to the elements that conform that role."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/moodlehq/moodleapp/commit/b95de260ee46d6278d03cff294015aa11fd99a6b"},"Here you have some examples")," of how to apply these attributes."),(0,s.kt)("h2",{id:"tools-and-resources"},"Tools and resources"),(0,s.kt)("p",null,"These are some tools and resources that can be useful to improve accessibility:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://chrome.google.com/webstore/detail/aria-devtools/dneemiigcbbgbdjlcdjjnianlikimpck"},"ARIA DevTools browser extension")," \u2014 Navigate a site like a non-sighted user would."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://chrome.google.com/webstore/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi"},"headingMaps browser extension")," \u2014 Navigate page headings."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://chrome.google.com/webstore/detail/landmark-navigation-via-k/ddpokpbjopmeeiiolheejjpkonlkklgp"},"Landmarks Navigation browser extension")," \u2014 Navigate landmarks."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://developer.chrome.com/docs/devtools/accessibility/reference/#pane"},"Accessibility Pane in Chrome")," \u2014 Inspect accessibility roles and values."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=HE2R86EZPMA"},"BingO Bakery: Headings, Landmarks, and Tabs")," \u2014 Video introducing some basic concepts.")))}h.isMDXComponent=!0}}]);