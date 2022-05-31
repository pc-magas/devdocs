"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[92928],{93714:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return n},metadata:function(){return u},toc:function(){return m}});var a=r(83117),o=r(80102),s=(r(67294),r(3905)),l=r(13904),i=["components"],n={title:"Moodle 3.3.5",tags:["Release notes","Moodle 3.3"],sidebar_position:5,moodleVersion:"3.3.5"},d=void 0,u={unversionedId:"releases/3.3/3.3.5",id:"releases/3.3/3.3.5",title:"Moodle 3.3.5",description:"Release date: 19 March 2018",source:"@site/general/releases/3.3/3.3.5.md",sourceDirName:"releases/3.3",slug:"/releases/3.3/3.3.5",permalink:"/devdocs/general/releases/3.3/3.3.5",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/3.3/3.3.5.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 3.3",permalink:"/devdocs/general/tags/moodle-3-3"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1654003069,formattedLastUpdatedAt:"31/05/2022",sidebarPosition:5,frontMatter:{title:"Moodle 3.3.5",tags:["Release notes","Moodle 3.3"],sidebar_position:5,moodleVersion:"3.3.5"},sidebar:"releaseNotes",previous:{title:"Moodle 3.3.4",permalink:"/devdocs/general/releases/3.3/3.3.4"},next:{title:"Moodle 3.3.6",permalink:"/devdocs/general/releases/3.3/3.3.6"}},p={},m=[{value:"Highlights",id:"highlights",level:2},{value:"GDPR preparation",id:"gdpr-preparation",level:2},{value:"Fixes and improvements",id:"fixes-and-improvements",level:2},{value:"Security issues",id:"security-issues",level:2},{value:"Translations",id:"translations",level:2}],c={toc:m};function h(e){var t=e.components,r=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(l.Z,(0,a.Z)({frontMatter:n},void 0!==u?{metadata:u}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("p",null,"Release date: 19 March 2018"),(0,s.kt)("p",null,"Here is ",(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%223.3.5%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 3.3.5"),"."),(0,s.kt)("h2",{id:"highlights"},"Highlights"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-48501"},"MDL-48501"),", ",(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-61600"},"MDL-61600")," - Migrate to reCAPTCHA v2"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-51189"},"MDL-51189")," - Quiz: now possible to edit user overrides even if quiz is not available to a student"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-60241"},"MDL-60241")," - Invisible default sections lead to unexpected visibility layout"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-61344"},"MDL-61344"),' - Assignment: "additional files" are now shown in Edit Submission view')),(0,s.kt)("h2",{id:"gdpr-preparation"},"GDPR preparation"),(0,s.kt)("p",null,"Plugins will be available for Moodle 3.3 and 3.4 to help Moodle sites to comply with GDPR. In Moodle 3.5 they will be included in the standard distribution. Some necessary core changes were already included in this release:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-61307"},"MDL-61307")," - New Privacy subsystem"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-61477"},"MDL-61477")," - Allow plugins to handle site policies and overwrite $CFG->sitepolicy"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-61423"},"MDL-61423")," - Signup process - add minimum age verification")),(0,s.kt)("h2",{id:"fixes-and-improvements"},"Fixes and improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-58006"},"MDL-58006")," - Assignment: reset 'Blind marking' status during 'Course reset'"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-58845"},"MDL-58845"),' - Choice: hide "unanswered" column when it is set so in choice settings'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-56688"},"MDL-56688")," - Single View & grades export should follow the same order set in gradebook set up"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-61305"},"MDL-61305")," - Performance: Modinfo cache can get built in parallel"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-61242"},"MDL-61242"),' - EQUELLA repository: fixed error "The source url does not match the sourcekey."'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-61175"},"MDL-61175"),' - Change "Remind me to grade by" date according to the new course start date after course restore')),(0,s.kt)("h2",{id:"security-issues"},"Security issues"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=367938"},"MSA-18-0005")," Unauthenticated users can trigger custom messages to admin via paypal enrol script"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=367939"},"MSA-18-0006")," Suspended users with OAuth 2 authentication method can still log in to the site")),(0,s.kt)("h2",{id:"translations"},"Translations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_3.3.5"},"Notes de mise \xe0 jour de Moodle 3.3.5")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_3.3.5"},"Notas de Moodle 3.3.5"))))}h.isMDXComponent=!0}}]);