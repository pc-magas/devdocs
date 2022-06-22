"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[48259],{71071:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return c}});var a=r(83117),o=r(80102),s=(r(67294),r(3905)),n=r(13904),l=["components"],i={title:"Moodle 3.5.6",tags:["Release notes","Moodle 3.5"],sidebar_position:6,moodleVersion:"3.5.6"},d=void 0,m={unversionedId:"releases/3.5/3.5.6",id:"releases/3.5/3.5.6",title:"Moodle 3.5.6",description:"Release date: 13 May 2019",source:"@site/general/releases/3.5/3.5.6.md",sourceDirName:"releases/3.5",slug:"/releases/3.5/3.5.6",permalink:"/devdocs/general/releases/3.5/3.5.6",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/3.5/3.5.6.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 3.5",permalink:"/devdocs/general/tags/moodle-3-5"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1655896501,formattedLastUpdatedAt:"22/06/2022",sidebarPosition:6,frontMatter:{title:"Moodle 3.5.6",tags:["Release notes","Moodle 3.5"],sidebar_position:6,moodleVersion:"3.5.6"},sidebar:"releaseNotes",previous:{title:"Moodle 3.5.5",permalink:"/devdocs/general/releases/3.5/3.5.5"},next:{title:"Moodle 3.5.7",permalink:"/devdocs/general/releases/3.5/3.5.7"}},p={},c=[{value:"Fixes and improvements",id:"fixes-and-improvements",level:2},{value:"Security issues",id:"security-issues",level:2},{value:"Translations",id:"translations",level:2}],u={toc:c};function h(e){var t=e.components,r=(0,o.Z)(e,l);return(0,s.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(n.Z,(0,a.Z)({frontMatter:i},void 0!==m?{metadata:m}:{},{mdxType:"MoodlePageBanner"})),(0,s.kt)("p",null,"Release date: 13 May 2019"),(0,s.kt)("p",null,"Here is ",(0,s.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/secure/IssueNavigator!executeAdvanced.jspa?jqlQuery=project+%3D+mdl+AND+resolution+%3D+fixed+AND+fixVersion+in+%28%223.5.6%22%29+ORDER+BY+priority+DESC&runQuery=true&clear=true"},"the full list of fixed issues in 3.5.6"),"."),(0,s.kt)("h2",{id:"fixes-and-improvements"},"Fixes and improvements"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-62872"},"MDL-62872")," - Atto editor RecordRTC Video no longer erroneously reports the maximum upload size limit has been reached"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64151"},"MDL-64151")," - Courses can be unchecked from course completion in the Boost theme"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64678"},"MDL-64678")," - Assignment grading page scrollable on mobile"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64988"},"MDL-64988")," - Adding a quiz question in a chosen position no longer affected by section headings"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65170"},"MDL-65170")," - User searches within messaging with separate groups mode enabled are correctly filtered"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63196"},"MDL-63196")," - Calendar export includes category events"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-46803"},"MDL-46803")," - Resetting a course role retains other roles affected users are assigned in the course"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-63263"},"MDL-63263")," - Recycle bin includes user data/submissions within deleted course elements"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64894"},"MDL-64894")," - Items above anchor targets (such as in collapsible topics) can be clicked in the Boost theme"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65112"},"MDL-65112")," - Lesson short answer pages can display iframes"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65399"},"MDL-65399")," - Bulk quiz item deletion prevents deletion of the only question in a section (consistent with individual deletion functionality)"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64996"},"MDL-64996")," - Static analytics models are no longer marked as not trained after changing the default predictions processor"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65173"},"MDL-65173")," - Message notifications are no longer marked as read when a notification email is sent"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65085"},"MDL-65085")," - Analytics insights are sent from a site's no reply account, instead of from an admin account"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65179"},"MDL-65179")," - Web service token last access is updated less frequently"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64524"},"MDL-64524")," - Assignment frequently used comments popup can be scrolled"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65153"},"MDL-65153")," - The course competencies page no longer needs to be refreshed before clicking on newly added competencies"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64994"},"MDL-64994")," - Analytics can use the latest Python machine learning backend"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65094"},"MDL-65094")," - Sites hosted on localhost no longer prompt site admins to register their site"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-29320"},"MDL-29320")," - Email case is properly handled during user profile updates"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-29320"},"MDL-29320")," - Email case is properly handled during sign-up"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-29317"},"MDL-29317")," - Email case is properly handled during grade imports"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65411"},"MDL-65411")," - Descriptions in calendar event modals wrap text and resize images where necessary"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-65484"},"MDL-65484")," - Assignment PDF annotations are contained within the window boundaries"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-64979"},"MDL-64979")," - Improvements to Behat test reliability on slow machines")),(0,s.kt)("h2",{id:"security-issues"},"Security issues"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=386523"},"MSA-19-0011")," Open redirect in upload cohorts page"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://moodle.org/mod/forum/discuss.php?d=386524"},"MSA-19-0012")," Private files uploaded via incoming mail processing could bypass quota restrictions")),(0,s.kt)("h2",{id:"translations"},"Translations"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_3.5.6"},"Notes de mise \xe0 jour de Moodle 3.5.6")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.moodle.org/es/Notas_de_Moodle_3.5.6"},"Notas de Moodle 3.5.6"))))}h.isMDXComponent=!0}}]);