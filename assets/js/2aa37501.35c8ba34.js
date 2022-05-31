"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[98864],{180:function(e,t,o){o.r(t),o.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var a=o(83117),i=o(80102),r=(o(67294),o(3905)),l=o(13904),n=["components"],s={title:"Moodle 1.5.4",tags:["Release notes"],sidebar_position:4,moodleVersion:"1.5.4"},u=void 0,p={unversionedId:"releases/1.5/1.5.4",id:"releases/1.5/1.5.4",title:"Moodle 1.5.4",description:"Release date: 21st May 2006",source:"@site/general/releases/1.5/1.5.4.md",sourceDirName:"releases/1.5",slug:"/releases/1.5/1.5.4",permalink:"/devdocs/general/releases/1.5/1.5.4",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/releases/1.5/1.5.4.md",tags:[{label:"Release notes",permalink:"/devdocs/general/tags/release-notes"}],version:"current",lastUpdatedBy:"Sara Arjona",lastUpdatedAt:1654006116,formattedLastUpdatedAt:"31/05/2022",sidebarPosition:4,frontMatter:{title:"Moodle 1.5.4",tags:["Release notes"],sidebar_position:4,moodleVersion:"1.5.4"},sidebar:"releaseNotes",previous:{title:"Moodle 1.5.3",permalink:"/devdocs/general/releases/1.5/1.5.3"},next:{title:"Moodle 1.4",permalink:"/devdocs/general/releases/1.4"}},d={},m=[{value:"Various fixes",id:"various-fixes",level:2},{value:"Security",id:"security",level:3},{value:"General",id:"general",level:3},{value:"Assignment",id:"assignment",level:3},{value:"Enrolment",id:"enrolment",level:3},{value:"Forum Module",id:"forum-module",level:3},{value:"Glossary Module",id:"glossary-module",level:3},{value:"Hotpot Module",id:"hotpot-module",level:3},{value:"Lesson Module",id:"lesson-module",level:3},{value:"Quiz Module",id:"quiz-module",level:3},{value:"Resource Module",id:"resource-module",level:3},{value:"Wiki Module",id:"wiki-module",level:3}],g={toc:m};function h(e){var t=e.components,o=(0,i.Z)(e,n);return(0,r.kt)("wrapper",(0,a.Z)({},g,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(l.Z,(0,a.Z)({frontMatter:s},void 0!==p?{metadata:p}:{},{mdxType:"MoodlePageBanner"})),(0,r.kt)("p",null,"Release date: 21st May 2006"),(0,r.kt)("p",null,"(Because this release contains important security fixes, we highly advise that sites using any previous version of Moodle upgrade to this version as soon as possible.)"),(0,r.kt)("h2",{id:"various-fixes"},"Various fixes"),(0,r.kt)("h3",{id:"security"},"Security"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Improved kses cleaning of html SC#204"),(0,r.kt)("li",{parentName:"ul"},"Prevent unwanted password change here SC#225"),(0,r.kt)("li",{parentName:"ul"},"Fix for Secunia Advisory SA18267, plus some logging of suspicious activity."),(0,r.kt)("li",{parentName:"ul"},"AdoDB tests cleanup after Secunia Advisory SA18267"),(0,r.kt)("li",{parentName:"ul"},"Fixed $cfg->forceloginforprofiles logic SC#207. Backported from HEAD")),(0,r.kt)("h3",{id:"general"},"General"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Various updates/improvements in the the Environmental Check allowing to check if your server suits future Moodle requirements."),(0,r.kt)("li",{parentName:"ul"},"Bug 4619. Fixed one DB query not following coding rules."),(0,r.kt)("li",{parentName:"ul"},"Bug 4607. Avoid duplication of course shortname on restore."),(0,r.kt)("li",{parentName:"ul"},"Fixed one problem with auto-link filters and frames."),(0,r.kt)("li",{parentName:"ul"},"Important fixes to multi-byte text handling routines."),(0,r.kt)("li",{parentName:"ul"},"Small changes to the installer."),(0,r.kt)("li",{parentName:"ul"},"Bug 3853. Some important improvements in the restore of log actions."),(0,r.kt)("li",{parentName:"ul"},"Bug 4328. Prevent some warnings in the blocks system."),(0,r.kt)("li",{parentName:"ul"},'Bug 4341. Extending multi-lang support to the "jumpto" menu (showed in collapsed mode).'),(0,r.kt)("li",{parentName:"ul"},"Added rss_get_url() to 1.5 to help support data module"),(0,r.kt)("li",{parentName:"ul"},"Added support for having a linked tab even if it is currently selected."),(0,r.kt)("li",{parentName:"ul"},"RSS Client block: Removed secondary cache. ",(0,r.kt)("a",{parentName:"li",href:"http://moodle.org/bugs/bug.php?op=show&bugid=4625"},"Bug 4625")),(0,r.kt)("li",{parentName:"ul"},"Email confirmation now includes lastname. ",(0,r.kt)("a",{parentName:"li",href:"http://moodle.org/bugs/bug.php?op=show&bugid=4869"},"Bug 4869")),(0,r.kt)("li",{parentName:"ul"},"Database connection errors can now be reported to an admin. See $CFG->emailconnectionerrors in config-dist.php."),(0,r.kt)("li",{parentName:"ul"},"Metacourses: Fixed a problem with self enrolment in child courses."),(0,r.kt)("li",{parentName:"ul"},"Several MySQL v5 compatibility fixes"),(0,r.kt)("li",{parentName:"ul"},"Avoid listing more than 200 courses in my courses block, and course listing pages."),(0,r.kt)("li",{parentName:"ul"},"SCORM: Fixed lesson status skin support"),(0,r.kt)("li",{parentName:"ul"},"Skype: Added webstatus icon"),(0,r.kt)("li",{parentName:"ul"},"File uploads: Only create a directory if needed, ",(0,r.kt)("a",{parentName:"li",href:"http://moodle.org/bugs/bug.php?op=show&bugid=4659"},"bug 4659")),(0,r.kt)("li",{parentName:"ul"},"Admin Block. Fixed ",(0,r.kt)("a",{parentName:"li",href:"http://moodle.org/bugs/bug.php?op=show&bugid=4627"},"bug 4627"),': Hide "change password" link in admin block if the user is restricted. Credits for report & patch go to Joseph Rezeau.'),(0,r.kt)("li",{parentName:"ul"},"HTMLArea: Fixed ",(0,r.kt)("a",{parentName:"li",href:"http://moodle.org/bugs/bug.php?op=show&bugid=4562"},"bug 4562"),". Fix posted by sgarcia."),(0,r.kt)("li",{parentName:"ul"},"Fixed ",(0,r.kt)("a",{parentName:"li",href:"http://moodle.org/bugs/bug.php?op=show&bugid=4626"},"bug 4626")," - weblib.php: $course object conversion error in ",'"',"print_footer ",'"'," function"),(0,r.kt)("li",{parentName:"ul"},"Messaging: Fixed ",(0,r.kt)("a",{parentName:"li",href:"http://moodle.org/bugs/bug.php?op=show&bugid=4621"},"bug 4621")," errors in MySQL v3.23 with message backup."),(0,r.kt)("li",{parentName:"ul"},"Introducing Admin->Environment to help users assess installed software prior to the 1.6 upgrade"),(0,r.kt)("li",{parentName:"ul"},"Course Restore: Now we avoid duplicates. ",(0,r.kt)("a",{parentName:"li",href:"http://moodle.org/bugs/bug.php?op=show&bugid=4607"},"Bug 4607")),(0,r.kt)("li",{parentName:"ul"},"Assignment: Guests can no longer submit an online assignment. ",(0,r.kt)("a",{parentName:"li",href:"http://moodle.org/bugs/bug.php?op=show&bugid=4604"},"Bug 4604")),(0,r.kt)("li",{parentName:"ul"},"File Downloads: Fixed problems for slow (dial up) clients, and avoid hogging memory when PHP's output compression is on."),(0,r.kt)("li",{parentName:"ul"},"Wiki: Supports initial load of contents from course file area. ",(0,r.kt)("a",{parentName:"li",href:"http://moodle.org/bugs/bug.php?op=show&bugid=3830"},"Bug 3830")),(0,r.kt)("li",{parentName:"ul"},'Lesson: Now when a teacher edits a page with the "Edit page contents" button and then saves or cancels, s/he gets redirected back to the lesson navigation. This will help to streamline the editing.'),(0,r.kt)("li",{parentName:"ul"},"Activity Modules Block - ",(0,r.kt)("a",{parentName:"li",href:"http://moodle.org/bugs/bug.php?op=show&bugid=4586"},"bug 4586")),(0,r.kt)("li",{parentName:"ul"},"Metacourse: Fixes unenrolling ",(0,r.kt)("a",{parentName:"li",href:"http://moodle.org/bugs/bug.php?op=show&bugid=4541"},"bug 4541")),(0,r.kt)("li",{parentName:"ul"},"File uploads: Fixed ",(0,r.kt)("a",{parentName:"li",href:"http://moodle.org/bugs/bug.php?op=show&bugid=4533"},"bug 4533")," - Max upload size at course level ignored."),(0,r.kt)("li",{parentName:"ul"},"Enrol/Authorize.net: Added Address Verification System (AVS) support."),(0,r.kt)("li",{parentName:"ul"},"Online Users Block: Limit the number of students displayed."),(0,r.kt)("li",{parentName:"ul"},"Unicode Support: Typo3 Library updated to newest version."),(0,r.kt)("li",{parentName:"ul"},"Course Categories: Fixed courses and subcategories in an invisible category being visible. ",(0,r.kt)("a",{parentName:"li",href:"http://moodle.org/bugs/bug.php?op=show&bugid=4074"},"Bug 4074")),(0,r.kt)("li",{parentName:"ul"},"Wiki: Fixed a fatal error updating wiki pages."),(0,r.kt)("li",{parentName:"ul"},"Added autocomplete=off in form tag to avoid browser auto complete ",(0,r.kt)("a",{parentName:"li",href:"http://moodle.org/bugs/bug.php?op=show&bugid=4423"},"bug:4423")),(0,r.kt)("li",{parentName:"ul"},"Password change: Primary administrator password can only be changed by the administrator him/herself."),(0,r.kt)("li",{parentName:"ul"},"Enrol/Authorize.net: Some changes:- allow_internal is not need any more. Shows two option if enrolment key of course is set.- login_https is required for payment pages. My credit card is important. If you haven't a certificate forgot this module. (security)- Expiry date of credit card is more friendly :)."),(0,r.kt)("li",{parentName:"ul"},"User profile: Fixed ",(0,r.kt)("a",{parentName:"li",href:"http://moodle.org/bugs/bug.php?op=show&bugid=4400"},"bug 4400")),(0,r.kt)("li",{parentName:"ul"},"Removed old THEME variable."),(0,r.kt)("li",{parentName:"ul"},"Added some more CSS hooks for the correctness feedback"),(0,r.kt)("li",{parentName:"ul"},"Fix ",(0,r.kt)("a",{parentName:"li",href:"http://moodle.org/bugs/bug.php?op=show&bugid=4366"},"bug 4366")),(0,r.kt)("li",{parentName:"ul"},"Makes autologinguest possible at site level"),(0,r.kt)("li",{parentName:"ul"},"Micro-increment version number to 2.0.10"),(0,r.kt)("li",{parentName:"ul"},"Corrected adjustment of relative URLs in ",(0,r.kt)("inlineCode",{parentName:"li"},"<EMBED>")," tag"),(0,r.kt)("li",{parentName:"ul"},"Merging from HEAD:Fix for ",(0,r.kt)("a",{parentName:"li",href:"http://moodle.org/bugs/bug.php?op=show&bugid=4371"},"bug 4371")," (also SC#199):Now manually created users with admin privileges and force change password cannot change their username with impunity."),(0,r.kt)("li",{parentName:"ul"},"Fix for ",(0,r.kt)("a",{parentName:"li",href:"http://moodle.org/bugs/bug.php?op=show&bugid=4067"},"bug 4067")," - allow user to update assignment when not yet marked"),(0,r.kt)("li",{parentName:"ul"},"Fix for ",(0,r.kt)("a",{parentName:"li",href:"http://moodle.org/bugs/bug.php?op=show&bugid=4314"},"bug 4314")),(0,r.kt)("li",{parentName:"ul"},"Fix for ",(0,r.kt)("a",{parentName:"li",href:"http://moodle.org/bugs/bug.php?op=show&bugid=4206"},"bug 4206")),(0,r.kt)("li",{parentName:"ul"},"Delayed merge from HEAD - If tablelib is going to do fullname voodoo, allow default sort field to be firstname/lastname"),(0,r.kt)("li",{parentName:"ul"},"Log actions must be stored to DB without ","&","print_log() takes care of it! ",(0,r.kt)("a",{parentName:"li",href:"http://moodle.org/bugs/bug.php?op=show&bugid=3853"},"Bug 3853")),(0,r.kt)("li",{parentName:"ul"},"Fixes ",(0,r.kt)("a",{parentName:"li",href:"http://moodle.org/bugs/bug.php?op=show&bugid=4354"},"bug 4354")),(0,r.kt)("li",{parentName:"ul"},"shorten_text() AFTER format properly. See ",(0,r.kt)("a",{parentName:"li",href:"http://moodle.org/bugs/bug.php?op=show&bugid=4355"},"bug  4355")),(0,r.kt)("li",{parentName:"ul"},"Prevent a warning when params is empty. ",(0,r.kt)("a",{parentName:"li",href:"http://moodle.org/bugs/bug.php?op=show&bugid=4328"},"Bug 4328")),(0,r.kt)("li",{parentName:"ul"},'Now the section "jumpto" menu (showed in collapse mode), supports the multilang filter. ',(0,r.kt)("a",{parentName:"li",href:"http://moodle.org/bugs/bug.php?op=show&bugid=4341"},"Bug 4341")),(0,r.kt)("li",{parentName:"ul"},"Print performance info if exists and $CFG->perfdebug is enabled."),(0,r.kt)("li",{parentName:"ul"},"Fix for ",(0,r.kt)("a",{parentName:"li",href:"http://moodle.org/bugs/bug.php?op=show&bugid=4351"},"bug 4351"),". New parameter for get_record_sql to disable auto-added LIMIT (in case we are using our own)"),(0,r.kt)("li",{parentName:"ul"},"Solved bug found when trying to backup all users! ",(0,r.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=27105"},"http://moodle.org/mod/forum/discuss.php?d=27105")),(0,r.kt)("li",{parentName:"ul"},"Fixing ",(0,r.kt)("a",{parentName:"li",href:"http://moodle.org/bugs/bug.php?op=show&bugid=4345"},"bug 4345"),": merging problem when fixing ",(0,r.kt)("a",{parentName:"li",href:"http://moodle.org/bugs/bug.php?op=show&bugid=4303"},"bug 4303")),(0,r.kt)("li",{parentName:"ul"},'Mimic changes from "Ought to mention the improved assignment grading!"Merged from HEAD'),(0,r.kt)("li",{parentName:"ul"},"Ought to mention the improved assignment grading!"),(0,r.kt)("li",{parentName:"ul"},"Fixes ",(0,r.kt)("a",{parentName:"li",href:"http://moodle.org/bugs/bug.php?op=show&bugid=4086"},"bug 4086")," spelling mistake"),(0,r.kt)("li",{parentName:"ul"},"Commenting out gz_handler since it seem to cause problemsmore on ",(0,r.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=34376"},"http://moodle.org/mod/forum/discuss.php?d=34376"))),(0,r.kt)("h3",{id:"assignment"},"Assignment"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Fixed bug in "Prevent late submissions", thanks to Samuli, ',(0,r.kt)("a",{parentName:"li",href:"http://moodle.org/bugs/bug.php?op=show&bugid=4780"},"bug 4780"))),(0,r.kt)("h3",{id:"enrolment"},"Enrolment"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Enrolment: Better explanation of flat file enrolment format. Re-formatted the improved flat file enrolment description"),(0,r.kt)("li",{parentName:"ul"},"Auth/LDAP: Better support for ActiveDirectory"),(0,r.kt)("li",{parentName:"ul"},"Enrol/Authorize.net: PostgreSQL support and some indexes for speed."),(0,r.kt)("li",{parentName:"ul"},"Authorize.net: Address Verification System (AVS) support added."),(0,r.kt)("li",{parentName:"ul"},"Authorize.net: $CGF->login_https must be ON for payment pages."),(0,r.kt)("li",{parentName:"ul"},"Authorize.net: Shows two forms if the enrolment key of the course is set (internal and authorize forms)."),(0,r.kt)("li",{parentName:"ul"},"Authorize.net: IIS https fix. It doesn't recognize ",(0,r.kt)("inlineCode",{parentName:"li"},"empty($_SERVER['HTTPS'])")," but accepts ",(0,r.kt)("inlineCode",{parentName:"li"},"HTTPS=off"),".")),(0,r.kt)("h3",{id:"forum-module"},"Forum Module"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Bug 4355. Solved one visualisation problem in the page showing the list of forums."),(0,r.kt)("li",{parentName:"ul"},"Fixed ",(0,r.kt)("a",{parentName:"li",href:"http://moodle.org/bugs/bug.php?op=show&bugid=4360"},"bug 4360")),(0,r.kt)("li",{parentName:"ul"},"Fixed ",(0,r.kt)("a",{parentName:"li",href:"http://moodle.org/bugs/bug.php?op=show&bugid=4431"},"bug 4431"),", affecting site course, added function forum_user_can_view_post in lib.php")),(0,r.kt)("h3",{id:"glossary-module"},"Glossary Module"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Bug 4543, 4713. Fixed some problems with entries and categories containing more than one word in their title."),(0,r.kt)("li",{parentName:"ul"},"Bug 4858. Fixed one problem with formats, not being detected properly."),(0,r.kt)("li",{parentName:"ul"},'Bug 4915. Entrylist format now displays the "Send Ratings" button.')),(0,r.kt)("h3",{id:"hotpot-module"},"Hotpot Module"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add support for HP5 quizzes (including JBC and old JQuiz)"),(0,r.kt)("li",{parentName:"ul"},"Removed weighting from question text in JCloze import"),(0,r.kt)("li",{parentName:"ul"},"Fixed import of JCloze into quiz module as a MULTIANSWER question"),(0,r.kt)("li",{parentName:"ul"},"Fixed bug in restoring attempts from backup")),(0,r.kt)("h3",{id:"lesson-module"},"Lesson Module"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Lesson: $navigation and $grade_value were undefined when lesson was added to site main page"),(0,r.kt)("li",{parentName:"ul"},"Lesson: Lesson Essay Question Can't be Graded when attempt not finished. ",(0,r.kt)("a",{parentName:"li",href:"http://moodle.org/bugs/bug.php?op=show&bugid=4174"},"Bug 4174")),(0,r.kt)("li",{parentName:"ul"},"Lesson: Added cancel button. ",(0,r.kt)("a",{parentName:"li",href:"http://moodle.org/bugs/bug.php?op=show&bugid=4216"},"Bug 4216")," - cancel button"),(0,r.kt)("li",{parentName:"ul"},"Lesson: Fixed ",(0,r.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=37537"},"problem with storing the answerid for numerical questions"),"."),(0,r.kt)("li",{parentName:"ul"},"Lesson: Fixed ",(0,r.kt)("a",{parentName:"li",href:"http://moodle.org/bugs/bug.php?op=show&bugid=1187"},"bug 1187"))),(0,r.kt)("h3",{id:"quiz-module"},"Quiz Module"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed bug 4250: Added missing percentages to the grade selector"),(0,r.kt)("li",{parentName:"ul"},"Fixed bug 4495: Don't apply lateness check when teacher previews"),(0,r.kt)("li",{parentName:"ul"},"Fixed bug 4544: Incorrect path to exported files in some language packs"),(0,r.kt)("li",{parentName:"ul"},'Fixed bug 4780: Bug in "Prevent late submissions" setting fixed'),(0,r.kt)("li",{parentName:"ul"},"Fixed bug 5070: Students can't see quizzes when they are closed"),(0,r.kt)("li",{parentName:"ul"},"Turned off regrading of quizzes that have the attemptonlast option set"),(0,r.kt)("li",{parentName:"ul"},"A number of other minor interface fixes"),(0,r.kt)("li",{parentName:"ul"},"Fixed ",(0,r.kt)("a",{parentName:"li",href:"http://moodle.org/bugs/bug.php?op=show&bugid=4319"},"bug 4319"),". Thanks to Jaroslav"),(0,r.kt)("li",{parentName:"ul"},"Fixed ",(0,r.kt)("a",{parentName:"li",href:"http://moodle.org/bugs/bug.php?op=show&bugid=4217"},"bug 4217")),(0,r.kt)("li",{parentName:"ul"},"Fixed ",(0,r.kt)("a",{parentName:"li",href:"http://moodle.org/bugs/bug.php?op=show&bugid=4829"},"bug 4829")),(0,r.kt)("li",{parentName:"ul"},"Now we avoid checking for lateness when teacher previews. ",(0,r.kt)("a",{parentName:"li",href:"http://moodle.org/bugs/bug.php?op=show&bugid=4495"},"Bug 4495")),(0,r.kt)("li",{parentName:"ul"},"Fixed ",(0,r.kt)("a",{parentName:"li",href:"http://moodle.org/bugs/bug.php?op=show&bugid=4688"},"bug 4688")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=39548"},'Rounding errors could lead to "Partially correct" for correct answers')),(0,r.kt)("li",{parentName:"ul"},"Added missing percentages to the grade selector, ",(0,r.kt)("a",{parentName:"li",href:"http://moodle.org/bugs/bug.php?op=show&bugid=4250"},"bug 4250")),(0,r.kt)("li",{parentName:"ul"},"Avoid error messages in case $quiz->sumgrades is zero, ",(0,r.kt)("a",{parentName:"li",href:"http://moodle.org/bugs/bug.php?op=show&bugid=4454"},"bug 4454")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=27730#181773"},"get_actual_response() method for cloze question type")," contributed by Jean-Michel"),(0,r.kt)("li",{parentName:"ul"},"Better PostgreSQL support"),(0,r.kt)("li",{parentName:"ul"},"Now With Nicer Presentation of Questions"),(0,r.kt)("li",{parentName:"ul"},"Summary text shouldn't be cleaned as only entered by teacher."),(0,r.kt)("li",{parentName:"ul"},"Fixed ",(0,r.kt)("a",{parentName:"li",href:"http://moodle.org/bugs/bug.php?op=show&bugid=4345"},"bug 4345"),". Report performance improvements caused regression with MySQLv3"),(0,r.kt)("li",{parentName:"ul"},"Now we turn off browser-based autocomplete. Fixes ",(0,r.kt)("a",{parentName:"li",href:"http://moodle.org/bugs/bug.php?op=show&bugid=4423"},"bug 4423")," - Short Answer Quiz Q's Saving Form Entries")),(0,r.kt)("h3",{id:"resource-module"},"Resource Module"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Solved one problem on restore that was causing some links to become corrupted."),(0,r.kt)("li",{parentName:"ul"},"Slightly changes to the delete_instance() function in resources to allow future improvements."),(0,r.kt)("li",{parentName:"ul"},"Resource restore: Solved bug when ",(0,r.kt)("a",{parentName:"li",href:"http://moodle.org/mod/forum/discuss.php?d=38801"},"decoding encoded links for resource"))),(0,r.kt)("h3",{id:"wiki-module"},"Wiki Module"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Solved one problem sending double-slashed info to DB."),(0,r.kt)("li",{parentName:"ul"},"Bug 3830. Load of initial content from course file area is now allowed.")))}h.isMDXComponent=!0}}]);