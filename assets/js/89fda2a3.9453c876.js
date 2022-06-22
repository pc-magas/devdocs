"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[74128],{3402:function(e,t,o){o.r(t),o.d(t,{assets:function(){return u},contentTitle:function(){return r},default:function(){return c},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return m}});var n=o(83117),a=o(80102),i=(o(67294),o(3905)),l=o(13904),p=["components"],s={title:"Moodle App Deep Linking",sidebar_label:"Deep Linking",sidebar_position:4,tags:["Moodle App"]},r=void 0,d={unversionedId:"moodleapp/development/deep-linking",id:"moodleapp/development/deep-linking",title:"Moodle App Deep Linking",description:"Overview",source:"@site/docs/moodleapp/development/deep-linking.md",sourceDirName:"moodleapp/development",slug:"/moodleapp/development/deep-linking",permalink:"/devdocs/docs/moodleapp/development/deep-linking",draft:!1,editUrl:"https://github.com/moodle/devdocs/edit/main/docs/moodleapp/development/deep-linking.md",tags:[{label:"Moodle App",permalink:"/devdocs/docs/tags/moodle-app"}],version:"current",lastUpdatedBy:"Andrew Lyons",lastUpdatedAt:1655896501,formattedLastUpdatedAt:"22/06/2022",sidebarPosition:4,frontMatter:{title:"Moodle App Deep Linking",sidebar_label:"Deep Linking",sidebar_position:4,tags:["Moodle App"]},sidebar:"docs",previous:{title:"Sending custom Push Notifications",permalink:"/devdocs/docs/moodleapp/development/custom-push-notifications"},next:{title:"Debugging network requests",permalink:"/devdocs/docs/moodleapp/development/network-debug"}},u={},m=[{value:"Overview",id:"overview",level:2},{value:"Format",id:"format",level:2},{value:"Site URL",id:"site-url",level:3},{value:"Username",id:"username",level:3},{value:"Token and Private token",id:"token-and-private-token",level:3},{value:"Redirect",id:"redirect",level:3},{value:"Before 3.7",id:"before-37",level:2},{value:"See also",id:"see-also",level:2}],h={toc:m};function c(e){var t=e.components,o=(0,a.Z)(e,p);return(0,i.kt)("wrapper",(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(l.Z,(0,n.Z)({frontMatter:s},void 0!==d?{metadata:d}:{},{mdxType:"MoodlePageBanner"})),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The Moodle App supports being launched using a Custom URL Scheme. It lets you specify the URL to open, the username to use and also a token to authenticate the user."),(0,i.kt)("p",null,"Please notice that these links will only work if the app is installed in the device. For example, if you click one of these links in Safari in an iOS device without the app installed, an error will be displayed."),(0,i.kt)("p",null,"If you are using a custom Moodle App you have to change ",(0,i.kt)("inlineCode",{parentName:"p"},"moodlemobile://")," to your custom URL scheme. If you are using a ",(0,i.kt)("a",{parentName:"p",href:"https://moodle.com/branded-app"},"BMA (Branded Moodle App)"),", please contact your ",(0,i.kt)("a",{parentName:"p",href:"https://moodle.com/services"},"Moodle Service Provider (Moodle partner)")," for this information."),(0,i.kt)("h2",{id:"format"},"Format"),(0,i.kt)("p",null,"The format to create the links is the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"moodlemobile://https://username@domain.com?token=TOKEN&privatetoken=PRIVATETOKEN&redirect=http://domain.com/course/view.php?id=2\n")),(0,i.kt)("p",null,"The only data required is the base URL of your site (in the example above, ",(0,i.kt)("inlineCode",{parentName:"p"},"<https://domain.com>"),")."),(0,i.kt)("h3",{id:"site-url"},"Site URL"),(0,i.kt)("p",null,"As mentioned above, this is the only required parameter. It should be the base URL of the site (wwwroot). For example, you can use this URL to open your site in the app:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"moodlemobile://https://domain.com\n")),(0,i.kt)("p",null,"In the example above, if the ",(0,i.kt)("inlineCode",{parentName:"p"},"<https://domain.com>")," site isn't stored in the app, the user will be redirected to the credentials screen to access the site."),(0,i.kt)("h3",{id:"username"},"Username"),(0,i.kt)("p",null,"If you want the app to be opened with a certain username you can specify it in the URL:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"moodlemobile://https://username@domain.com\n")),(0,i.kt)("p",null,"In the example above, if the ",(0,i.kt)("inlineCode",{parentName:"p"},"username")," user and the ",(0,i.kt)("inlineCode",{parentName:"p"},"<https://domain.com>"),' site aren\'t stored in the app, the user will be sent to the credentials screen to access the site (the username input will be pre-populated, but the user will be able to change it if he wants to). If the app has several users of this site stored, including "username", the right user will be loaded.'),(0,i.kt)("h3",{id:"token-and-private-token"},"Token and Private token"),(0,i.kt)("p",null,"If you specify a token in the URL, the user will be authenticated automatically in the app. This is really useful for external apps and systems. For example, you can use this feature for SSO systems. The user token can be found in the database table ",(0,i.kt)("inlineCode",{parentName:"p"},"mdl_external_tokens"),"."),(0,i.kt)("p",null,"The private token is used by the app to auto-login the user in the browser, and it will only be used if you also specify a token in the URL. If you specify a private token but not a token, the private token will be ignored. The private token can also be found in the database table ",(0,i.kt)("inlineCode",{parentName:"p"},"mdl_external_tokens"),"."),(0,i.kt)("p",null,"It isn't recommended to include the token and private token in links that will be rendered by a browser or apps that can be inspected. Please notice that anyone with the token will be able to authenticate as the user the token belongs to."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"moodlemobile://https://domain.com?token=TOKEN&privatetoken=PRIVATETOKEN\n")),(0,i.kt)("p",null,'The token has priority over the username parameter. For example, if you specify username "u1" but the token belongs to user "u2", the user u2 will be authenticated in the app.'),(0,i.kt)("h3",{id:"redirect"},"Redirect"),(0,i.kt)("p",null,"The redirect parameter indicates which page you want to open in the app:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"moodlemobile://https://domain.com?redirect=http://domain.com/course/view.php?id=2\n")),(0,i.kt)("p",null,"This link will open the course with id 2 in the app. Please notice that the app doesn't support all Moodle URLs, only some of them are supported."),(0,i.kt)("p",null,"The redirect URL should belong to the same site as the base URL. For example, if the base URL is ",(0,i.kt)("inlineCode",{parentName:"p"},"<http://domain.com>")," but the redirect is ",(0,i.kt)("inlineCode",{parentName:"p"},"<http://anothersite.com/>..."),", an error will be displayed."),(0,i.kt)("p",null,"The redirect parameter can be a relative URL based on the base URL. The example above can also be written like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"moodlemobile://https://domain.com?redirect=/course/view.php?id=2\n")),(0,i.kt)("h2",{id:"before-37"},"Before 3.7"),(0,i.kt)("p",null,"Deep linking was introduced in version 3.6.1, but it had a different format that was updated in 3.7.0 to the one we use today."),(0,i.kt)("p",null,"This is an example of the previous format:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"moodlemobile://link=https://mysite.es/mod/choice/view.php?id=8\n")),(0,i.kt)("h2",{id:"see-also"},"See also"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/EddyVerbruggen/Custom-URL-scheme"},"Custom URL Scheme Cordova plugin used by the app"),".")))}c.isMDXComponent=!0}}]);