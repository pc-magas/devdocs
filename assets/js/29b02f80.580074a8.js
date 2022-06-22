"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[6554],{16358:function(e,t,o){o.r(t),o.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return n},metadata:function(){return u},toc:function(){return p}});var r=o(83117),s=o(80102),a=(o(67294),o(3905)),i=o(13904),l=["components"],n={title:"Moodle 3.9.8",tags:["Release notes","Moodle 3.9"],sidebar_position:8,moodleVersion:"3.9.8"},d=void 0,u={unversionedId:"releases/3.9/3.9.8",id:"releases/3.9/3.9.8",title:"Moodle 3.9.8",description:"Release date: 12 July 2021",source:"@site/general/releases/3.9/3.9.8.md",sourceDirName:"releases/3.9",slug:"/releases/3.9/3.9.8",permalink:"/devdocs/general/releases/3.9/3.9.8",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/3.9/3.9.8.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 3.9",permalink:"/devdocs/general/tags/moodle-3-9"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1655896501,formattedLastUpdatedAt:"22/06/2022",sidebarPosition:8,frontMatter:{title:"Moodle 3.9.8",tags:["Release notes","Moodle 3.9"],sidebar_position:8,moodleVersion:"3.9.8"},sidebar:"releaseNotes",previous:{title:"Moodle 3.9.7",permalink:"/devdocs/general/releases/3.9/3.9.7"},next:{title:"Moodle 3.9.9",permalink:"/devdocs/general/releases/3.9/3.9.9"}},m={},p=[{value:"Backported bug fixes",id:"backported-bug-fixes",level:2},{value:"Security fixes",id:"security-fixes",level:2},{value:"Translations",id:"translations",level:2}],c={toc:p};function f(e){var t=e.components,o=(0,s.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,(0,r.Z)({frontMatter:n},void 0!==u?{metadata:u}:{},{mdxType:"MoodlePageBanner"})),(0,a.kt)("p",null,"Release date: 12 July 2021"),(0,a.kt)("p",null,"Here is ",(0,a.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%223.9.8%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 3.9.8"),"."),(0,a.kt)("h2",{id:"backported-bug-fixes"},"Backported bug fixes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68747"},"MDL-68747")," - ChartJS quiz overview report should display numerical ranges LTR also for RTL languages"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-71060"},"MDL-71060")," - Duplicates 'Current category' text in edit question form")),(0,a.kt)("h2",{id:"security-fixes"},"Security fixes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=424797"},"MSA-21-0020")," SQL injection risk in code fetching enrolled courses"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=424798"},"MSA-21-0021")," SQL injection risk in code fetching recent courses"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=424799"},"MSA-21-0022")," Remote code execution risk when Shibboleth authentication is enabled"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=424801"},"MSA-21-0023")," Recursion denial of service possible due to recursive cURL in file repository"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=424802"},"MSA-21-0024")," Blind SSRF possible against cURL blocked hosts via redirect"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=424803"},"MSA-21-0025")," Messaging web service allows deletion of other users' messages"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=424806"},"MSA-21-0028")," IDOR allows removal of other users' calendar URL subscriptions"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=424807"},"MSA-21-0029")," Stored XSS when exporting to data formats supporting HTML via user ID number"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=424808"},"MSA-21-0030")," Insufficient escaping of users' names in account confirmation email - Note: If you have customised the language string ",(0,a.kt)("em",{parentName:"li"},"emailconfirmation"),", you will need to edit the customisation and remove the placeholder ",(0,a.kt)("code",null,"{$a->firstname}"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=424809"},"MSA-21-0031")," Messaging email notifications containing HTML may hide the final line of the email")),(0,a.kt)("h2",{id:"translations"},"Translations"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_3.9.8"},"Notes de mise \xe0 jour de Moodle 3.9.8")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_3.9.8"},"Notas de Moodle 3.9.8"))))}f.isMDXComponent=!0}}]);