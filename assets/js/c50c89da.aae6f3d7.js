"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[54065],{97889:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return d},default:function(){return c},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return h}});var o=a(83117),r=a(80102),l=(a(67294),a(3905)),n=a(13904),s=["components"],i={title:"Moodle 2.2",tags:["Release notes","Moodle 2.2"],sidebar_position:-202,moodleVersion:"2.2"},d=void 0,p={unversionedId:"releases/2.2",id:"releases/2.2",title:"Moodle 2.2",description:"Hello and welcome to our Moodle 2.2 release!",source:"@site/general/releases/2.2.md",sourceDirName:"releases",slug:"/releases/2.2",permalink:"/devdocs/general/releases/2.2",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/2.2.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"},{label:"Moodle 2.2",permalink:"/devdocs/general/tags/moodle-2-2"}],version:"current",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1654006116,formattedLastUpdatedAt:"31/05/2022",sidebarPosition:-202,frontMatter:{title:"Moodle 2.2",tags:["Release notes","Moodle 2.2"],sidebar_position:-202,moodleVersion:"2.2"},sidebar:"releaseNotes",previous:{title:"Moodle 2.3.11",permalink:"/devdocs/general/releases/2.3/2.3.11"},next:{title:"Moodle 2.2.1",permalink:"/devdocs/general/releases/2.2/2.2.1"}},m={},h=[{value:"Major new features",id:"major-new-features",level:3},{value:"Other highlights",id:"other-highlights",level:3},{value:"Security issues",id:"security-issues",level:3},{value:"For developers: API changes",id:"for-developers-api-changes",level:3},{value:"Core API changes",id:"core-api-changes",level:4},{value:"New plugin types",id:"new-plugin-types",level:4},{value:"Plugin API changes",id:"plugin-api-changes",level:4},{value:"DB changes",id:"db-changes",level:4},{value:"Libraries deleted from distribution",id:"libraries-deleted-from-distribution",level:4},{value:"Webservice changes",id:"webservice-changes",level:4},{value:"Other deleted items",id:"other-deleted-items",level:4},{value:"See also",id:"see-also",level:2},{value:"Translations",id:"translations",level:2}],u={toc:h};function c(e){var t=e.components,a=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(n.Z,(0,o.Z)({frontMatter:i},void 0!==p?{metadata:p}:{},{mdxType:"MoodlePageBanner"})),(0,l.kt)("p",null,"Hello and welcome to our Moodle 2.2 release!"),(0,l.kt)("p",null,"Completely free of artificial preservatives, colour and flavour enhancers.  Fully natural and ready to eat!"),(0,l.kt)("p",null,"Release date: 5th December, 2011"),(0,l.kt)("p",null,"Here is the ",(0,l.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/issues/?jql=project%20%3D%20mdl%20AND%20resolution%20%3D%20fixed%20AND%20fixVersion%20in%20(%222.2%22)%20ORDER%20BY%20priority%20DESC"},"full list of fixed issues in 2.2"),"  (Long!)"),(0,l.kt)("h3",{id:"major-new-features"},"Major new features"),(0,l.kt)("p",null,"; ",(0,l.kt)("a",{parentName:"p",href:"https://docs.moodle.org/image/rubric-example.png"},"thumb"),(0,l.kt)("a",{parentName:"p",href:"https://docs.moodle.org/22/en/Advanced_grading_methods"},"Advanced grading methods"),", including ",(0,l.kt)("a",{parentName:"p",href:"https://docs.moodle.org/22/en/Rubrics"},"Rubrics"),": Rubrics have been a long-requested feature and we're pleased to be able to say that now you can design and use rubrics to grade things in Moodle.  Rubrics are actually the first plugin of a new 'Advanced Grading' plugin type, because we expect our users to come up with all kinds of similar advanced grading interfaces and integrations.  It currently only works for Assignments but will be extended soon across all modules.  This feature was developed by Moodle HQ, although it was inspired by the Rubrics work done by Moodlerooms.\n; ",(0,l.kt)("a",{parentName:"p",href:"https://docs.moodle.org/22/en/External_tool"},"External tool")," : The IMS LTI standard is a simple but promising way that e-learning tools can interoperate.  It allows Moodle to embed learning objects (or full-blown tools like forums) from external web sites into courses in such a way that Moodle can pass user data to the tool, and the tool can send grades back to Moodle's gradebook.  Not only does it allow integration of a growing amount of interactive content and services but it will allow developers to create functionality for Moodle in any language they like.  (eg they can create a new activity using Ruby or Java, as long as it support LTI 1.1 and has a web interface).  Moodle is one of the first Learning Management Systems in the world to support IMS LTI 1.1.  (",(0,l.kt)("a",{parentName:"p",href:"http://www.imsglobal.org/membersandaffiliates.html"},"Moodle is a contributing member of IMS Global"),").  This feature was originally developed by ",(0,l.kt)("a",{parentName:"p",href:"http://www.upc.edu"},"Universitat Politecnica de Catalunya"),", then improved and extended by ",(0,l.kt)("a",{parentName:"p",href:"http://moodlerooms.com"},"Moodlerooms"),", with lots of support from Chuck Severance of IMS and Eloy Lafuente of the Moodle HQ team.  (",(0,l.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/browse/MDL-20534"},"MDL-20534"),")\n; ",(0,l.kt)("a",{parentName:"p",href:"https://docs.moodle.org/22/en/IMS_Common_Cartridge_import"},"IMS Common Cartridge import")," : This is platform-independent popular standard for packaging learning content.  For example it is used by publishers to publish simple courses to go with their textbooks, in a way that works on a variety of Learning Management Systems.  Moodle did have support for importing CC packages in Moodle 1.9, and thanks to the work primarily by Darko Miletic and Moodlerooms, this is now available for Moodle 2.2 and later.  Exporting to CC will come in 2.3.   (",(0,l.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/browse/MDL-29956"},"MDL-29956"),")\n; ",(0,l.kt)("a",{parentName:"p",href:"https://docs.moodle.org/22/en/MyMobile_theme"},"MyMobile theme")," : Moodle 2.1 introduced the ability to select different themes for different devices, and now with 2.2 we have a standard theme in core that is custom-designed for smartphone browser screens.  This means that when users visit your Moodle site on a small screen they'll see a completely different layout, but one that is suitable for small touchscreens.  Big thanks for John Stabinger for his great work on this theme, which utilises Jquerymobile to achieve some of the magic.  (",(0,l.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/browse/MDL-27622"},"MDL-27622"),")\n; ",(0,l.kt)("a",{parentName:"p",href:"https://docs.moodle.org/22/en/Gravatars"},"Gravatars")," : Many of you may know about ",(0,l.kt)("a",{parentName:"p",href:"http://gravatar.com"},"gravatars")," (globally recognized avatars), which allows your avatar icon to automatically appear when you comment on blogs and so on anywhere in the internet.  Moodle profiles now support it too. :) (",(0,l.kt)("a",{parentName:"p",href:"https://tracker.moodle.org/browse/MDL-21676"},"MDL-21676"),")"),(0,l.kt)("h3",{id:"other-highlights"},"Other highlights"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-28455"},"MDL-28455")," - TinyMCE editor upgraded.  Safari on iPad/iPhone with iOS5 now works!"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-27242"},"MDL-27242")," - ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/22/en/Conditional_activities_settings"},"Conditional activities")," can now become available at an exact time, rather than only a date"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-28646"},"MDL-28646")," - A new ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/22/en/Mobile_app"},"Mobile app")," button 'content' enables all resources in a course to be downloaded for offline viewing"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-26477"},"MDL-26477")," - ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/22/en/Navigation"},"Navigation block")," now links to topic/weekly sections"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-28270"},"MDL-28270")," - Option to ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/22/en/Upload_users"},"upload users to a cohort"),", ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/22/en/Bulk_user_actions"},"add users to a cohort in bulk")," and other cohort improvements"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-29719"},"MDL-29719")," - ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/22/en/Course_list"},"Course listings")," can now optionally display course short name everywhere"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-27001"},"MDL-27001")," - Activity descriptions can now be displayed on ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/22/en/Course_homepage"},"course homepages")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-27036"},"MDL-27036"),", ",(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-30146"},"MDL-30146")," - ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/22/en/SCORM_settings"},"SCORM AICC")," improvements to handling of external AICC packages"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-28277"},"MDL-28277")," -  ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/SCORM_reporting_improvements"},"SCORM reporting improvements")," including a new ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/22/en/Using_SCORM"},"SCORM interactions report")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-26647"},"MDL-26647")," - Can choose in ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/22/en/Roles_settings"},"User policies")," which fields (email, idnumber, department, etc.) are included wherever lists of students are shown.")),(0,l.kt)("h3",{id:"security-issues"},"Security issues"),(0,l.kt)("p",null,"All security issues that were fixed in 2.1.x and 2.0.x were also fixed in 2.2."),(0,l.kt)("h3",{id:"for-developers-api-changes"},"For developers: API changes"),(0,l.kt)("h4",{id:"core-api-changes"},"Core API changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/master/lib/upgrade.txt"},"https://github.com/moodle/moodle/blob/master/lib/upgrade.txt")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-29474"},"MDL-29474")," - Plugins should declare (in ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/version.php"},"version.php"),") if they depend on other plugins"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-28554"},"MDL-28554")," - Upgrade to YUI 3.4.0 and 2.9.0"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-26796"},"MDL-26796")," - We no longer accept arrays in required_param() and optional_param()"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-29602"},"MDL-29602")," - new context implementation and API, original context related functions are wrappers around the new OOP API")),(0,l.kt)("h4",{id:"new-plugin-types"},"New plugin types"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/General_report_plugins"},"report - report")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Admin_tools"},"admin/tool - tool")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Quiz_access_rules"},"mod/quiz/accessrule - quizaccess"))),(0,l.kt)("h4",{id:"plugin-api-changes"},"Plugin API changes"),(0,l.kt)("p",null,'Abbreviated descriptions of API changes are always kept up to date in the "upgrade.txt" within each plugin area.  We do this so that the information is always exactly right for the version of Moodle you are using.'),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v2.2.0/auth/upgrade.txt"},"Authentication plugins")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v2.2.0/enrol/upgrade.txt"},"Enrolment plugins")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v2.2.0/filter/upgrade.txt"},"Filters")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v2.2.0/mod/upgrade.txt"},"Activity modules")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v2.2.0/question/behaviour/upgrade.txt"},"Question behaviours")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v2.2.0/question/format/upgrade.txt"},"Question formats")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v2.2.0/question/type/upgrade.txt"},"Question types")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodle/moodle/blob/v2.2.0/theme/upgrade.txt"},"Themes"))),(0,l.kt)("h4",{id:"db-changes"},"DB changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-29313"},"MDL-29313")," - Length limit for VARCHAR columns under all Databases has been raised to 1333 chars. This will allow using that column type to store URLs and longer contents in general."),(0,l.kt)("li",{parentName:"ul"},"Specifically for Oracle installations:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-29322"},"MDL-29322")," - All VARCHAR2 columns will be created using CHAR semantics instead of default BYTE semantics in Moodle 2.2 and upwards. This provides better cross-db compatibility and improves storage of longer Unicode strings."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-29416"},"MDL-29416"),' - For all existing sites, one new report has been added under Admin -> Development -> XMLDB Editor -> Check semantics, able to detect all the "old" BYTE semantics remaining in the database and generate the SQL statements needed to move them to proper CHAR semantics.')))),(0,l.kt)("h4",{id:"libraries-deleted-from-distribution"},"Libraries deleted from distribution"),(0,l.kt)("p",null,"This is the list of some outdated / unused libraries that aren't bundled anymore with Moodle 2.2 and upwards. Any (contrib / custom) plugin using them should change to better alternatives or include its own copy of them:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-29884"},"MDL-29884")," - lib/base32.php"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-29885"},"MDL-29885")," - lib/csshover.htc"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-29886"},"MDL-29886")," - lib/md5.js"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-29883"},"MDL-29883")," - lib/mp3player"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-29671"},"MDL-29671")," - lib/odbc.php"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-29882"},"MDL-29882")," - lib/overlib"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-29914"},"MDL-29914")," - lib/pear/PHP/CodeSniffer"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-29881"},"MDL-29881")," - lib/profilerlib.php and lib/pear/Console/Getopt"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-29922"},"MDL-29922")," - lib/smarty (with the question format IMS QTI 2.0 also being removed - ",(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-29921"},"MDL-29921"),")"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-29887"},"MDL-29887")," - lib/swfobject/swfobject.js")),(0,l.kt)("h4",{id:"webservice-changes"},"Webservice changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-20804"},"MDL-20804")," - SOAP server can now publish detailed object structures via WSDL"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-29106"},"MDL-29106")," - New naming convention"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-29435"},"MDL-29435")," - SOAP/XML-RPC return clear error message  when Moodle debug mode >= NORMAL"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-29277"},"MDL-29277")," - Any error at the web service description level is clearly indicated => which parameter/returned value is wrong, and what was expected."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-29279"},"MDL-29279")," - REST server can return JSON"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-29276"},"MDL-29276")," - Many other web service improvements"),(0,l.kt)("li",{parentName:"ul"},"Many web service ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/moodlehq/sample-ws-clients"},"demo clients")),(0,l.kt)("li",{parentName:"ul"},"Full web service ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Web_services"},"user")," and ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Web_services"},"developer")," documentation update"),(0,l.kt)("li",{parentName:"ul"},"New ",(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Web_services_Roadmap_"},"web service roadmap"))),(0,l.kt)("h4",{id:"other-deleted-items"},"Other deleted items"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tracker.moodle.org/browse/MDL-29923"},"MDL-29923")," - Global search")),(0,l.kt)("h2",{id:"see-also"},"See also"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/22/en/Category:New_features"},"User documentation of new features in Moodle 2.2")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/22/en/Upgrading_to_Moodle_2.2"},"Upgrading to Moodle 2.2")," - important information for admins who are upgrading from earlier versions")),(0,l.kt)("h2",{id:"translations"},"Translations"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.moodle.org/fr/Notes_de_mise_%C3%A0_jour_de_Moodle_2.2"},"Notes de mise \xe0 jour de Moodle 2.2"))))}c.isMDXComponent=!0}}]);