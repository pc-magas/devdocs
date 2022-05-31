"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[37319],{13357:function(e,t,o){o.r(t),o.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return n},metadata:function(){return p},toc:function(){return u}});var r=o(83117),a=o(80102),s=(o(67294),o(3905)),l=o(13904),i=["components"],n={title:"Moodle 2.1.3",tags:["Release notes","Moodle 2.1"],sidebar_position:3,moodleVersion:"2.1.3"},d=void 0,p={unversionedId:"releases/2.1/2.1.3",id:"releases/2.1/2.1.3",title:"Moodle 2.1.3",description:"Release date: 28th November, 2011",source:"@site/general/releases/2.1/2.1.3.md",sourceDirName:"releases/2.1",slug:"/releases/2.1/2.1.3",permalink:"/devdocs/general/releases/2.1/2.1.3",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/2.1/2.1.3.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 2.1",permalink:"/devdocs/general/tags/moodle-2-1"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1654003069,formattedLastUpdatedAt:"31/05/2022",sidebarPosition:3,frontMatter:{title:"Moodle 2.1.3",tags:["Release notes","Moodle 2.1"],sidebar_position:3,moodleVersion:"2.1.3"},sidebar:"releaseNotes",previous:{title:"Moodle 2.1.2",permalink:"/devdocs/general/releases/2.1/2.1.2"},next:{title:"Moodle 2.1.4",permalink:"/devdocs/general/releases/2.1/2.1.4"}},m={},u=[{value:"Highlights",id:"highlights",level:2},{value:"Functional changes",id:"functional-changes",level:2},{value:"Security issues",id:"security-issues",level:2},{value:"Fixes and improvements",id:"fixes-and-improvements",level:2},{value:"Translations",id:"translations",level:2}],c={toc:u};function h(e){var t=e.components,o=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(l.Z,(0,r.Z)({frontMatter:n},void 0!==p?{metadata:p}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("p",null,"Release date: 28th November, 2011"),(0,s.kt)("p",null,"Here is ",(0,s.kt)("a",{parentName:"p",href:"http://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%222.1.3%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 2.1.3"),"."),(0,s.kt)("h2",{id:"highlights"},"Highlights"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-27037"},"MDL-27037")," - Wiki 2.0 respects 'visible groups' functionality"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-29960"},"MDL-29960")," - Dropbox repository now functioning with new API")),(0,s.kt)("h2",{id:"functional-changes"},"Functional changes"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-27516"},"MDL-27516")," - RTL Theme fixes for Moodle 2")),(0,s.kt)("h2",{id:"security-issues"},"Security issues"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=191747"},"MSA-11-0042")," - Information leak in Wiki"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=191748"},"MSA-11-0043")," - Possible link redirect in Calendar"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=191750"},"MSA-11-0044")," - Expired identification information shown in Web services"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=191751"},"MSA-11-0045")," - Potential to masquerade through MNet"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=191754"},"MSA-11-0047")," - Possible injection attack in Calendar"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=191755"},"MSA-11-0048")," - Password loss issue"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=191758"},"MSA-11-0050")," - Backup capability issue"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=191759"},"MSA-11-0051")," - Authentication issue with Web services"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=191760"},"MSA-11-0052")," - Potential to exploit developer debugging scripts"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=191761"},"MSA-11-0053")," - Security and system administration conflict"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=191762"},"MSA-11-0054")," - Personal information leak")),(0,s.kt)("h2",{id:"fixes-and-improvements"},"Fixes and improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-28292"},"MDL-28292")," - Removed possibility to 'lose' a block by docking it"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-29542"},"MDL-29542")," - Lesson no longer gets corrupted after creating a new question"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-30010"},"MDL-30010")," - Core themes which have pagelayout problems when moving blocks have been fixed"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-27790"},"MDL-27790")," - Temporary course remains after restore"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-29529"},"MDL-29529")," - Fixed database error when assignments were sorted by status"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-30375"},"MDL-30375")," - Comments block no longer disappears when cancel is clicked"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-30398"},"MDL-30398")," - Lesson no longer accepts blank password")),(0,s.kt)("h2",{id:"translations"},"Translations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_2.1.3"},"Notas de Moodle 2.1.3")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_2.1.3"},"Notes de mise \xe0 jour de Moodle 2.1.3"))))}h.isMDXComponent=!0}}]);