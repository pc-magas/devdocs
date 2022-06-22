"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[68784],{20964:function(e,t,o){o.r(t),o.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return c}});var r=o(83117),s=o(80102),a=(o(67294),o(3905)),n=o(13904),i=["components"],u={title:"Groups API",tags:["API","Subsystem","group","grouping","course"],documentationDraft:!0},l=void 0,p={unversionedId:"apis/subsystems/group/index",id:"apis/subsystems/group/index",title:"Groups API",description:"Moodle Groups are a way of expressing collections of users within a course. They may be defined by the teacher in the course participants page, or created automatically during a bulk user upload (for example, from a text file).",source:"@site/docs/apis/subsystems/group/index.md",sourceDirName:"apis/subsystems/group",slug:"/apis/subsystems/group/",permalink:"/devdocs/docs/apis/subsystems/group/",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/docs/apis/subsystems/group/index.md",tags:[{label:"API",permalink:"/devdocs/docs/tags/api"},{label:"Subsystem",permalink:"/devdocs/docs/tags/subsystem"},{label:"group",permalink:"/devdocs/docs/tags/group"},{label:"grouping",permalink:"/devdocs/docs/tags/grouping"},{label:"course",permalink:"/devdocs/docs/tags/course"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1655896501,formattedLastUpdatedAt:"22/06/2022",frontMatter:{title:"Groups API",tags:["API","Subsystem","group","grouping","course"],documentationDraft:!0},sidebar:"docs",previous:{title:"Form Usage",permalink:"/devdocs/docs/apis/subsystems/form/usage"},next:{title:"Output API",permalink:"/devdocs/docs/apis/subsystems/output"}},d={},c=[{value:"Group modes",id:"group-modes",level:2},{value:"File locations",id:"file-locations",level:2},{value:"Examples",id:"examples",level:2},{value:"How to find and use the &quot;current&quot; group",id:"how-to-find-and-use-the-current-group",level:3},{value:"How to make sure that the current user can see a given item in your activity",id:"how-to-make-sure-that-the-current-user-can-see-a-given-item-in-your-activity",level:3},{value:"How to display a group menu",id:"how-to-display-a-group-menu",level:3},{value:"Further reading",id:"further-reading",level:2}],m={toc:c};function h(e){var t=e.components,o=(0,s.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(n.Z,(0,r.Z)({frontMatter:u},void 0!==p?{metadata:p}:{},{mdxType:"MoodlePageBanner"})),(0,a.kt)("p",null,"Moodle ",(0,a.kt)("a",{parentName:"p",href:"https://docs.moodle.org/en/Groups"},"Groups")," are a way of expressing collections of users within a course. They may be defined by the teacher in the course participants page, or created automatically during a bulk user upload (for example, from a text file)."),(0,a.kt)("p",null,"A teacher can choose whether to use, or even to force, the use of groups for an entire course (from within the Course settings page), or for an individual activity (from within the Activity settings)."),(0,a.kt)("p",null,"Groups can be used in different modes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"None - groups are not used"),(0,a.kt)("li",{parentName:"ul"},"Separate - users can only see and interact with users in their own group"),(0,a.kt)("li",{parentName:"ul"},"Visible - users can see a list of the other groups and, depending on the activity, may be able to interact with them")),(0,a.kt)("p",null,'If enabled at the course level, the group mode will affect how course-wide reporting functions - for example, if a course-wide group mode of "Separate groups" is enabled, this is applied within the gradebook.'),(0,a.kt)("p",null,"Groups may be grouped together into named ",(0,a.kt)("a",{parentName:"p",href:"https://docs.moodle.org/en/Groupings"},"Groupings"),". The course, and individual activities, can be configured to filter the groups shown to those in a specific Grouping. If a user is a member of multiple groups, then only those groups which belong to the selected grouping are shown."),(0,a.kt)("p",null,"When a course or activity is in the 'Separate' groups mode, only users within that group can interact with, unless they hold the ",(0,a.kt)("inlineCode",{parentName:"p"},"moodle/site:accessallgroups")," capability. By default, this capability is given to users who hold a role with the ",(0,a.kt)("inlineCode",{parentName:"p"},"editingteacher"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"manager")," archetypes."),(0,a.kt)("p",null,"Most of these settings are handled by the core groups code and core groups API. If the activity module wants to implement group support, it need only use the Groups API to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Find out the current settings for this instance of the activity"),(0,a.kt)("li",{parentName:"ul"},"Show group controls (for example group selection menus) when appropriate"),(0,a.kt)("li",{parentName:"ul"},"Explore memberships and structures of groups"),(0,a.kt)("li",{parentName:"ul"},"Modify it's own interface to hide/show data accordingly")),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Groups are typically only relevant to course features such as Activity modules, some blocks and reports."),(0,a.kt)("p",{parentName:"div"},"Some other core subsystems also need to be group-aware."))),(0,a.kt)("h2",{id:"group-modes"},"Group modes"),(0,a.kt)("p",null,"There are three different group modes, these modes allow for restrictions to be put in place for access and visibility."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"No groups (",(0,a.kt)("inlineCode",{parentName:"li"},"NOGROUPS")," constant) - The course or activity has no groups."),(0,a.kt)("li",{parentName:"ul"},"Separate groups (",(0,a.kt)("inlineCode",{parentName:"li"},"SEPARATEGROUPS")," constant) - Teachers and students can normally only see information relevant to that group."),(0,a.kt)("li",{parentName:"ul"},"Visible groups (",(0,a.kt)("inlineCode",{parentName:"li"},"VISIBLEGROUPS")," constant) - Teachers and students are separated into groups but can still see all information.")),(0,a.kt)("p",null,"This is explained in more detail on the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Groups_access_control"},"Groups access control")," page."),(0,a.kt)("h2",{id:"file-locations"},"File locations"),(0,a.kt)("p",null,"The Groups API is currently defined in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/moodle/moodle/blob/master/lib/grouplib.php"},"lib/grouplib.php"),". This contains global functions which have the ",(0,a.kt)("inlineCode",{parentName:"p"},"groups_")," prefix, for example: ",(0,a.kt)("inlineCode",{parentName:"p"},"groups_get_group()"),"."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("h3",{id:"how-to-find-and-use-the-current-group"},'How to find and use the "current" group'),(0,a.kt)("p",null,"This is using an example from the module forums."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"// Get the course module id from a post or get request.\n$id = required_param('id', PARAM_INT);\n\n// Get the course module.\n$cm = get_coursemodule_from_id('forum', $id, 0, false, MUST_EXIST)\n\n// Get the current group id.\n$currentgroupid = groups_get_activity_group($cm);\n// Get the current group name from the group id.\n$currentgroupname = groups_get_group_name($currentgroupid);\n\n// Do as you please with your newly obtained group information.\n")),(0,a.kt)("h3",{id:"how-to-make-sure-that-the-current-user-can-see-a-given-item-in-your-activity"},"How to make sure that the current user can see a given item in your activity"),(0,a.kt)("p",null,"The following example:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"fetches the course module record for the specified forum id"),(0,a.kt)("li",{parentName:"ul"},"checks whether it has a group mode specified (separate or visible groups)"),(0,a.kt)("li",{parentName:"ul"},"fetches the list of possible groups for that activity"),(0,a.kt)("li",{parentName:"ul"},"checks whether the forum discussion is in a valid group")),(0,a.kt)("p",null,"For this example we are going to check to see if groups are active and whether the user has access to the discussion."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"// Get the course module and discussion id from a post or get request.\n$id           = required_param('id', PARAM_INT);\n$discussionid = required_param('discussionid', PARAM_INT);\n\n// Get the course module.\n$cm = get_coursemodule_from_id('forum', $id, 0, false, MUST_EXIST);\n\n// Get the group id for this discussion\n$discussiongroup = $DB->get_record('forum_discussions', ['id' => $discussionid], groupid);\n\n// Check access.\nif (groups_get_activity_groupmode($cm)) {\n    $groups = groups_get_activity_allowed_groups($cm);\n} else {\n    $groups = [];\n}\nif (!in_array($discussiongroup->groupid, array_keys($groups))) {\n    print_error('groupnotamember', 'group');\n}\n\n// Continue on with group specific discussion\n")),(0,a.kt)("h3",{id:"how-to-display-a-group-menu"},"How to display a group menu"),(0,a.kt)("p",null,"The following example will display the group selection dropdown using the ",(0,a.kt)("inlineCode",{parentName:"p"},"groups_print_activity_menu()")," function."),(0,a.kt)("p",null,"This function will show all groups that the user has access to for the current course module."),(0,a.kt)("p",null,"After making a selection, the user will be redirected to the ",(0,a.kt)("inlineCode",{parentName:"p"},"$url")," provided."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"// Get the course module id from a post or get request\n$id = required_param('id', PARAM_INT);\n\n// Get the course module\n$cm = get_coursemodule_from_id('forum', $id, 0, false, MUST_EXIST);\n\n// Create a moodle_url. A URL is required so that if the user selects a different group, the page can be\n// reloaded with the new groups information.\n$url = new moodle_url('/mod/forum/view.php', ['id' => $cm->id]);\n\n// Print group information (A drop down box will be displayed if the user is a member of more than one group,\n// or has access to all groups).\ngroups_print_activity_menu($cm, $url);\n")),(0,a.kt)("h2",{id:"further-reading"},"Further reading"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Groups_FAQ"},"Groups FAQ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Groupings_FAQ"},"Groupings FAQ"))))}h.isMDXComponent=!0}}]);