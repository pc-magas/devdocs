"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[17351],{96034:function(e,t,o){o.r(t),o.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var r=o(83117),a=o(80102),s=(o(67294),o(3905)),l=o(13904),n=["components"],i={title:"Moodle 2.4.7",tags:["Release notes","Moodle 2.4"],sidebar_position:7,moodleVersion:"2.4.7"},d=void 0,p={unversionedId:"releases/2.4/2.4.7",id:"releases/2.4/2.4.7",title:"Moodle 2.4.7",description:"Release date: 14 November 2013",source:"@site/general/releases/2.4/2.4.7.md",sourceDirName:"releases/2.4",slug:"/releases/2.4/2.4.7",permalink:"/devdocs/general/releases/2.4/2.4.7",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/2.4/2.4.7.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 2.4",permalink:"/devdocs/general/tags/moodle-2-4"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1654003069,formattedLastUpdatedAt:"31/05/2022",sidebarPosition:7,frontMatter:{title:"Moodle 2.4.7",tags:["Release notes","Moodle 2.4"],sidebar_position:7,moodleVersion:"2.4.7"},sidebar:"releaseNotes",previous:{title:"Moodle 2.4.6",permalink:"/devdocs/general/releases/2.4/2.4.6"},next:{title:"Moodle 2.4.8",permalink:"/devdocs/general/releases/2.4/2.4.8"}},m={},u=[{value:"Highlights",id:"highlights",level:2},{value:"Functional changes",id:"functional-changes",level:2},{value:"Security issues",id:"security-issues",level:2},{value:"Fixes and improvements",id:"fixes-and-improvements",level:2},{value:"Translations",id:"translations",level:2}],c={toc:u};function h(e){var t=e.components,o=(0,a.Z)(e,n);return(0,s.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(l.Z,(0,r.Z)({frontMatter:i},void 0!==p?{metadata:p}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("p",null,"Release date: 14 November 2013"),(0,s.kt)("p",null,"Here is ",(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%222.4.7%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 2.4.7"),"."),(0,s.kt)("h2",{id:"highlights"},"Highlights"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-34209"},"MDL-34209")," - Moving sections by drag and drop reorders sections correctly."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-29987"},"MDL-29987")," - Embedded PDF files behave correctly.")),(0,s.kt)("h2",{id:"functional-changes"},"Functional changes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-42069"},"MDL-42069")," - Option to sort by last name in Quiz grading report."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-38267"},"MDL-38267")," - Submit button is not shown after cut-off date in Assignment."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-22669"},"MDL-22669")," - When restoring a larger course over a smaller one, the number of sections is maintained."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-42666"},"MDL-42666")," and ",(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-42668"},"MDL-42668")," - The ",(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/25/en/Box.net_repository"},"Box.net repository")," and ",(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/25/en/Box.net_portfolio"},"Box.net portfolio")," have been updated to use Box.net API v2. Moodle sites which have used the Box.net repository previously need to ",(0,s.kt)("em",{parentName:"li"},"run the Box.net-alias-to-copy-conversion tool as soon as possible"),". Also, HTTPS is now required for sites to access Box.net. See ",(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/25/en/Box.net_APIv1_migration"},"Box.net APIv1 migration")," for details.")),(0,s.kt)("h2",{id:"security-issues"},"Security issues"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=244479"},"MSA-13-0036")," Incorrect headers sent for secured resources"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=244480"},"MSA-13-0037")," Cross site scripting in Messages"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=244481"},"MSA-13-0038")," Access to server files through repository"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=244482"},"MSA-13-0039")," Cross site scripting in Quiz")),(0,s.kt)("h2",{id:"fixes-and-improvements"},"Fixes and improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-32862"},"MDL-32862")," - Links to 1.9 resource types work after upgrade to 2.2 followed by backup and restore."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-40903"},"MDL-40903")," - Persistent cache is now split into logical parts."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-37528"},"MDL-37528")," - Block drag-and-drop issue resolved."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-42542"},"MDL-42542")," - The Portfolio cron job is now working."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-42619"},"MDL-42619")," - Error deleting a course link from the community block is fixed."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-37877"},"MDL-37877")," - Automated backup failure is now reported.")),(0,s.kt)("h2",{id:"translations"},"Translations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_2.4.7"},"Notes de mise \xe0 jour de Moodle 2.4.7")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_2.4.7"},"Notas de Moodle 2.4.7"))))}h.isMDXComponent=!0}}]);