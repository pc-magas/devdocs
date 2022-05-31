"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[67514],{82745:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return u}});var a=r(83117),o=r(80102),s=(r(67294),r(3905)),n=r(13904),i=["components"],l={title:"Moodle 3.5.4",tags:["Release notes","Moodle 3.5"],sidebar_position:4,moodleVersion:"3.5.4"},d=void 0,m={unversionedId:"releases/3.5/3.5.4",id:"releases/3.5/3.5.4",title:"Moodle 3.5.4",description:"Release date: 14 January 2019",source:"@site/general/releases/3.5/3.5.4.md",sourceDirName:"releases/3.5",slug:"/releases/3.5/3.5.4",permalink:"/devdocs/general/releases/3.5/3.5.4",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/3.5/3.5.4.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 3.5",permalink:"/devdocs/general/tags/moodle-3-5"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1654003069,formattedLastUpdatedAt:"31/05/2022",sidebarPosition:4,frontMatter:{title:"Moodle 3.5.4",tags:["Release notes","Moodle 3.5"],sidebar_position:4,moodleVersion:"3.5.4"},sidebar:"releaseNotes",previous:{title:"Moodle 3.5.3",permalink:"/devdocs/general/releases/3.5/3.5.3"},next:{title:"Moodle 3.5.5",permalink:"/devdocs/general/releases/3.5/3.5.5"}},p={},u=[{value:"Fixes and improvements",id:"fixes-and-improvements",level:2},{value:"Security issues",id:"security-issues",level:2},{value:"Translations",id:"translations",level:2}],c={toc:u};function k(e){var t=e.components,r=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(n.Z,(0,a.Z)({frontMatter:l},void 0!==m?{metadata:m}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("p",null,"Release date: 14 January 2019"),(0,s.kt)("p",null,"Here is ",(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%223.5.4%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 3.5.4"),"."),(0,s.kt)("h2",{id:"fixes-and-improvements"},"Fixes and improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63994"},"MDL-63994")," - CAS authentication fixed"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63260"},"MDL-63260")," - Exponential question growth prevented when duplicating quizzes"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-49651"},"MDL-49651")," - Hidden courses no longer send forum notifications to participants"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62287"},"MDL-62287")," - User tours without a backdrop no longer exit when clicking outside the tour"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64290"},"MDL-64290")," - IMS Common Cartridge can restore from custom temp directory"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-59954"},"MDL-59954")," - Drag and drop file uploads now respect the ignore file size limits capability"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64030"},"MDL-64030")," - Deletion requests can be processed without a site purpose being set"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64400"},"MDL-64400")," - Performance improvement when fetching notifications"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63512"},"MDL-63512")," - Lesson question responses show multimedia consistently"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63999"},"MDL-63999")," - Ampersands display correctly in calendar event titles"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63940"},"MDL-63940")," - ReCAPTCHA v2 now works globally"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-60518"},"MDL-60518")," - The result of core_user::is_real_user is now consistent"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62988"},"MDL-62988")," - User information can be retrieved from membership service with LTI 2.0 providers"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63953"},"MDL-63953")," - SCORM first attempt grading records score"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64216"},"MDL-64216")," - Database query efficiency improvement to core_grade privacy provider"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64025"},"MDL-64025")," - Admin bookmarks block can bookmark admin categories"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63459"},"MDL-63459")," -  Calculated multichoice question able to answer with negative note in interactive mode"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64357"},"MDL-64357")," - LTI assignment and grade LineItems are retained after the cleanup scheduled task is run"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63394"},"MDL-63394")," - Quiz submission grace period honoured"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64497"},"MDL-64497")," - GDPR moodle_content_writer can no longer cause an endless loop"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64063"},"MDL-64063")," - Timeline no longer lists course deadlines and closing dates for suspended students"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64077"},"MDL-64077")," - Alignment improved in main menu block"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64223"},"MDL-64223")," - Jabber output fixed for PHP 7.1"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64012"},"MDL-64012")," - Auto-linking now works with titles containing brackets"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-61633"},"MDL-61633")," - Assignment grading interface 'Next page' navigation now resets scrolling to the top of the next page")),(0,s.kt)("h2",{id:"security-issues"},"Security issues"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=381228"},"MSA-19-0001")," Manage groups capability was missing the XSS risk flag"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=381230"},"MSA-19-0003")," User full name is now escaped in the un-linked userpix page")),(0,s.kt)("h2",{id:"translations"},"Translations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_3.5.4"},"Notes de mise \xe0 jour de Moodle 3.5.4")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_3.5.4"},"Notas de Moodle 3.5.4"))))}k.isMDXComponent=!0}}]);