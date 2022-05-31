"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[20124],{56585:function(e,t,i){i.r(t),i.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var a=i(83117),o=i(80102),n=(i(67294),i(3905)),s=i(13904),r=["components"],l={title:"Unauthorised access",sidebar_position:2,tags:["Coding guidelines","Policies","Security"]},d=void 0,c={unversionedId:"development/policies/security/unauthorised-access",id:"development/policies/security/unauthorised-access",title:"Unauthorised access",description:"This page forms part of the Moodle security guidelines.",source:"@site/general/development/policies/security/unauthorised-access.md",sourceDirName:"development/policies/security",slug:"/development/policies/security/unauthorised-access",permalink:"/devdocs/general/development/policies/security/unauthorised-access",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/general/development/policies/security/unauthorised-access.md",tags:[{label:"Coding guidelines",permalink:"/devdocs/general/tags/coding-guidelines"},{label:"Policies",permalink:"/devdocs/general/tags/policies"},{label:"Security",permalink:"/devdocs/general/tags/security"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1654003069,formattedLastUpdatedAt:"31/05/2022",sidebarPosition:2,frontMatter:{title:"Unauthorised access",sidebar_position:2,tags:["Coding guidelines","Policies","Security"]},sidebar:"coding",previous:{title:"Unauthenticated access",permalink:"/devdocs/general/development/policies/security/unauthenticated-access"},next:{title:"Cross-site request forgery",permalink:"/devdocs/general/development/policies/security/crosssite-request-forgery"}},p={},u=[{value:"What is the danger?",id:"what-is-the-danger",level:2},{value:"How Moodle avoids this problem",id:"how-moodle-avoids-this-problem",level:2},{value:"Roles and capabilities",id:"roles-and-capabilities",level:3},{value:"Groups",id:"groups",level:3},{value:"What you need to do in your code",id:"what-you-need-to-do-in-your-code",level:2},{value:"What you need to do as an administrator",id:"what-you-need-to-do-as-an-administrator",level:2},{value:"See also",id:"see-also",level:2}],m={toc:u};function h(e){var t=e.components,i=(0,o.Z)(e,r);return(0,n.kt)("wrapper",(0,a.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(s.Z,(0,a.Z)({frontMatter:l},void 0!==c?{metadata:c}:{},{mdxType:"MoodlePageBanner"})),(0,n.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"This page forms part of the ",(0,n.kt)("a",{parentName:"p",href:"../security"},"Moodle security guidelines"),"."))),(0,n.kt)("h2",{id:"what-is-the-danger"},"What is the danger?"),(0,n.kt)("p",null,"Assuming you have dealt with the issue of ",(0,n.kt)("a",{parentName:"p",href:"./unauthenticated-access"},"Authentication"),", so you know who is accessing your Moodle script, the next issue is that different users should only be allowed to do certain things. For example, as student should be allowed to post to a forum, but they should not be allowed to grade their own assignment as 100%."),(0,n.kt)("p",null,"However, in a system as complex as Moodle, different situations require different users to have different permissions to do, or not do, various things. Therefore, permissions need to be configurable and flexible."),(0,n.kt)("h2",{id:"how-moodle-avoids-this-problem"},"How Moodle avoids this problem"),(0,n.kt)("h3",{id:"roles-and-capabilities"},"Roles and capabilities"),(0,n.kt)("p",null,"Moodle has a flexible roles system, build around the concepts of"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"contexts"),' - "Different situations", for example within a course (',(0,n.kt)("inlineCode",{parentName:"li"},"CONTEXT_COURSE"),"), within a particular activity (",(0,n.kt)("inlineCode",{parentName:"li"},"CONTEXT_MODULE"),")."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"capabilities"),' - "Various things" a user might do, for example ',(0,n.kt)("inlineCode",{parentName:"li"},"mod/forum:replypost"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"mod/assignment:grade"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"roles")," - Roles let administrators and teachers control which users get which capabilities in which contexts. For example, Sam might be a student in course Security 101, and Students are allowed to ",(0,n.kt)("inlineCode",{parentName:"li"},"mod/forum:replypost"),", so Sam can reply to any post in any forum in the Security 101 course. Different role assignments and role definitions give administrators a lot of flexibility.")),(0,n.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"Follow the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.moodle.org/dev/Roles"},"roles")," link to get a full description of the roles and capabilities."))),(0,n.kt)("h3",{id:"groups"},"Groups"),(0,n.kt)("p",null,"Moodle also allows users to be put in groups. Different groups may have access to different activities, and may or may not be able to see the actions of people in other groups."),(0,n.kt)("h2",{id:"what-you-need-to-do-in-your-code"},"What you need to do in your code"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Before allowing the user to see anything or do anything, make a call to has_capability or require_capability, testing the appropriate capability in the appropriate context.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Get the appropriate context using a call to ",(0,n.kt)("inlineCode",{parentName:"li"},"get_context_instance"),"."))),(0,n.kt)("li",{parentName:"ul"},"For this to work in custom code, you may need to define additional capabilities. For example, ",(0,n.kt)("inlineCode",{parentName:"li"},"block/myblock:viewsecretthing"),". You can define extra capabilities by creating a ",(0,n.kt)("a",{parentName:"li",href:"/docs/apis/commonfiles#dbaccessphp"},"db/access.php")," file in your plugin."),(0,n.kt)("li",{parentName:"ul"},"If appropriate, use the ",(0,n.kt)("a",{parentName:"li",href:"https://docs.moodle.org/dev/Groups_API"},"groups API")," to check group membership, and only show users information from groups they should be able to see.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Note that ",(0,n.kt)("inlineCode",{parentName:"li"},"require_login")," checks basic groups access permissions for you."))),(0,n.kt)("li",{parentName:"ul"},"It is very important to check capabilities when printing UI, but also after data submission before it is processed.")),(0,n.kt)("h2",{id:"what-you-need-to-do-as-an-administrator"},"What you need to do as an administrator"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Think carefully before changing the default role definitions."),(0,n.kt)("li",{parentName:"ul"},"Always review capability risks before giving permissions to users that are not trusted."),(0,n.kt)("li",{parentName:"ul"},"Use the various reports, especially the ",(0,n.kt)("a",{parentName:"li",href:"https://docs.moodle.org/en/Security_overview"},"Security overview")," report, to ensure that users do not have more capabilities than they should.")),(0,n.kt)("h2",{id:"see-also"},"See also"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../security"},"Security")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/general/development/policies"},"Coding"))))}h.isMDXComponent=!0}}]);