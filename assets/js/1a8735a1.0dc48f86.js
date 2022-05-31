"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[35402],{27760:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return m},default:function(){return u},frontMatter:function(){return n},metadata:function(){return p},toc:function(){return c}});var a=r(83117),o=r(80102),i=(r(67294),r(3905)),l=r(13904),s=["components"],n={title:"Moodle 3.8.4",tags:["Release notes","Moodle 3.8"],sidebar_position:4,moodleVersion:"3.8.4"},m=void 0,p={unversionedId:"releases/3.8/3.8.4",id:"releases/3.8/3.8.4",title:"Moodle 3.8.4",description:"Release date: 13 July 2020",source:"@site/general/releases/3.8/3.8.4.md",sourceDirName:"releases/3.8",slug:"/releases/3.8/3.8.4",permalink:"/devdocs/general/releases/3.8/3.8.4",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/3.8/3.8.4.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 3.8",permalink:"/devdocs/general/tags/moodle-3-8"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1654003069,formattedLastUpdatedAt:"31/05/2022",sidebarPosition:4,frontMatter:{title:"Moodle 3.8.4",tags:["Release notes","Moodle 3.8"],sidebar_position:4,moodleVersion:"3.8.4"},sidebar:"releaseNotes",previous:{title:"Moodle 3.8.3",permalink:"/devdocs/general/releases/3.8/3.8.3"},next:{title:"Moodle 3.8.5",permalink:"/devdocs/general/releases/3.8/3.8.5"}},d={},c=[{value:"General fixes and improvements",id:"general-fixes-and-improvements",level:2},{value:"Accessibility improvements",id:"accessibility-improvements",level:2},{value:"Security improvements",id:"security-improvements",level:2},{value:"Security fixes",id:"security-fixes",level:2},{value:"Translations",id:"translations",level:2}],k={toc:c};function u(e){var t=e.components,r=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(l.Z,(0,a.Z)({frontMatter:n},void 0!==p?{metadata:p}:{},{mdxType:"MoodlePageBanner"})),(0,i.kt)("p",null,"Release date: 13 July 2020"),(0,i.kt)("p",null,"Here is ",(0,i.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%223.8.4%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 3.8.4"),"."),(0,i.kt)("h2",{id:"general-fixes-and-improvements"},"General fixes and improvements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67700"},"MDL-67700")," - Messages displaying in incorrect conversations when switching between conversations quickly"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-60827"},"MDL-60827"),' - OAuth 2 still expecting email verification after "Require email verification" has been disabled'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-52578"},"MDL-52578")," - Activity weight set to 0 on creation"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68864"},"MDL-68864")," - Clear my choice for single answer multiple choice questions is erratic"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67126"},"MDL-67126")," - In assignment activity the completion state is not set reliably for all group members"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68436"},"MDL-68436")," - Atto RecordRTC (record audio/video) plugin only works in the first editor on a page"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69106"},"MDL-69106")," - convert_submissions task with asynchronous document conversion cannot be completed by cron"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68203"},"MDL-68203")," - Error duplicating quiz when there is a course view link in the answer"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69109"},"MDL-69109")," - Theme icons are lost after web upgrade in 3.9 or theme change in other versions"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-66917"},"MDL-66917")," - No validation that uploaded (from zip) plugin has higher version than installed"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68992"},"MDL-68992")," - Update minimal age of digital consent according to current legislation"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68253"},"MDL-68253")," - On the first page of a book, no previous arrow should be shown in navigation"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67172"},"MDL-67172")," - Allow multiple H5P content displayed properly when accessing the first time (backport of ",(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67095"},"MDL-67095")," )"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67497"},"MDL-67497"),' - Capability "backuptargetimport" should have captype "read"'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64175"},"MDL-64175")," - 'Advanced settings' for media resources in Atto are not loaded properly when editing"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68215"},"MDL-68215")," - Make the Activity results block styling consistent with other blocks"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69002"},"MDL-69002")," - Backpack authenticate check called too regularly for admin"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68847"},"MDL-68847")," - Fix missing variable bug with link dnd code"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68733"},"MDL-68733")," - quiz random question tags are deleted accidentally on entire site"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68723"},"MDL-68723")," - Filemanager File tree view does not list all files."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68576"},"MDL-68576")," - Filepicker is not working when using the file details view"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68270"},"MDL-68270")," - Compact logo on Nav Bar is blurred with Boost related themes"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68054"},"MDL-68054"),' - Capability "viewhiddenactivities" and "viewhiddensections" should have captype "read"'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-57240"},"MDL-57240")," - For an overdue quiz attempt, the summary page has links that just redirect back to the same page"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-66899"},"MDL-66899")," - Regrading quiz attempts should be logged"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69077"},"MDL-69077"),' - The capabilities moodle/question:tag* are not visible in the "Check permissions" page in the activity context'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-66601"},"MDL-66601")," - Usability issue trying to uploading images wider than browser width, in RTL mode"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-52138"},"MDL-52138")," - Gradebook floating headers are incorrectly styled"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68099"},"MDL-68099")," - Warning in grader report in separate groups mode"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68828"},"MDL-68828")," - Theme classic mobile issues"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68899"},"MDL-68899")," - Dashboard course cards don't render well in theme classic"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67903"},"MDL-67903")," - UI for grades import using spreadsheet is broken in theme_boost and theme_classic"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68738"},"MDL-68738")," - YouTube video displayed twice in wiki"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63812"},"MDL-63812")," - Question type Drag and drop into text undefined notice for gap in question and answer slot"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68425"},"MDL-68425")," - Participants page shows option to send messages without capability check"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68772"},"MDL-68772")," - In edit quiz (Boost / Classic) navigation overlaps"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69021"},"MDL-69021")," - Alert links hard to distinguish"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-67294"},"MDL-67294")," - Choosing bulk removal of empty submissions causes an error"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68137"},"MDL-68137"),' - "Download All Submissions as a zip" can remove file extension')),(0,i.kt)("h2",{id:"accessibility-improvements"},"Accessibility improvements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68312"},"MDL-68312")," - Gradebook: Grader report: Accessibility issues"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-69008"},"MDL-69008")," - Accessibility issues in the pagination bar template"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68353"},"MDL-68353")," - Course management: Create new course: Accessibility issues"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68343"},"MDL-68343")," - Gradebook: Single view: Accessibility issues"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68200"},"MDL-68200")," - Forum: Discussion list: Accessibility issues")),(0,i.kt)("h2",{id:"security-improvements"},"Security improvements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68276"},"MDL-68276")," - Standard log entries can be manipulated"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-68631"},"MDL-68631")," - Cron current user may not be reset between scheduled tasks")),(0,i.kt)("h2",{id:"security-fixes"},"Security fixes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=407391"},"MSA-20-0007")," Vulnerable JavaScript libraries: jQuery 1.9.1 (upstream)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=407392"},"MSA-20-0008")," Reflected XSS in admin task logs filter"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=407393"},"MSA-20-0009")," Course enrolments allowed privilege escalation from teacher role into manager role"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=407394"},"MSA-20-0010")," yui_combo should mitigate denial of service risk")),(0,i.kt)("h2",{id:"translations"},"Translations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_3.8.4"},"Notes de mise \xe0 jour de Moodle 3.8.4")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_3.8.4"},"Notas de Moodle 3.8.4"))))}u.isMDXComponent=!0}}]);