(this["webpackJsonpdossier-competences"]=this["webpackJsonpdossier-competences"]||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"titre":"Consultant","entreprise":"Amaris","dates":{"debut":"2020-02-01T00:00:00.511Z","fin":"2020-03-15T00:00:00.511Z"},"contexte":"Consultant chez Amadeus, j\'ai travaill\xe9 sur un outil de suivi et l\'alerte de voyageur en temps r\xe9el. Dans une \xe9quipe de 6 personnes, ma principale r\xe9alisation a \xe9t\xe9 de r\xe9soudre les probl\xe8mes soulev\xe9s par un audit de s\xe9curit\xe9.","competences":{"languages":["C# .NET","Angular"],"methodologies":["Agile"],"outilsAndApplications":["Bitbucket","Jenkins","Confluence","Git"]},"roles":["Full Stack Engineer","DevOps"],"logoUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Logo_Amaris.png/1200px-Logo_Amaris.png"},{"titre":"Consultant","entreprise":"Amaris","dates":{"debut":"2019-04-01T00:00:00.511Z","fin":"2020-01-01T00:00:00.511Z"},"contexte":"Consultant chez Amadeus, j\'ai particip\xe9 \xe0 l\'am\xe9lioration du logiciel excisant. Il s\'agit d\'un ERP \xe0 destination des cha\xeenes d\u2019h\xf4tels. C\'\xe9tait un projet d\'envergure comprenant une centaine d\u2019ing\xe9nieurs r\xe9partit en \xe9quipe d\'environ 7 personnes. Mon \xe9quipe \xe9tait en charge de la gestion des utilisateurs. La plus grosse tache sur laquelle j\'ai travaill\xe9 est la modification du syst\xe8me d\'autorisation, il fallait passer de r\xf4le d\'utilisation \xe0 une version plus granulaire, avec une permission pour chaque action.","competences":{"languages":["C# .NET","KnockoutJS"],"methodologies":["Agile - sAFE"],"outilsAndApplications":["Microsoft Azure","Confluence","Git"]},"roles":["Full Stack Engineer","R\xe9f\xe9rent Front-End de l\'\xe9quipe"],"logoUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Logo_Amaris.png/1200px-Logo_Amaris.png"},{"titre":"Stage Apprenti Ing\xe9nieur - DevOps","entreprise":"Arcelor Mittal","dates":{"debut":"2017-08-01T00:00:00.511Z","fin":"2018-01-01T00:00:00.511Z"},"contexte":"Lors de ce stage, j\'ai r\xe9alis\xe9 un outil d\'aide au suivi de la production d\'une des lignes de l\'entreprise. J\'ai fait seul toutes les \xe9tapes du projet, de l\'identification du besoin, la conception du produit, le d\xe9veloppement, les phases de test, la formation des utilisateurs et la maintenance.","competences":{"languages":["VBA"],"methodologies":["Agile"],"outilsAndApplications":[]},"roles":[],"logoUrl":"https://upload.wikimedia.org/wikipedia/fr/f/f4/Logo_ArcelorMittal.svg"}]')},,,,function(e,t,n){e.exports=n(15)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),l=n(4),r=n.n(l),o=(n(10),n(2)),c=(n(11),n(12),function(e){return i.a.createElement("div",{className:"block"},i.a.createElement("h5",null,e.title),e.items.map((function(e){return i.a.createElement("li",{key:e},e)})))}),s=function(e){return i.a.createElement("div",{className:"block"},i.a.createElement("h4",null,"Comp\xe9tences"),i.a.createElement(c,{title:"Languages et framework:",items:e.competences.languages}),i.a.createElement(c,{title:"M\xe9thodologies:",items:e.competences.methodologies}),i.a.createElement(c,{title:"Outils & Applications:",items:e.competences.outilsAndApplications}))},u=function(e){return i.a.createElement("div",{className:"block"},i.a.createElement("div",{className:"block"},i.a.createElement("h3",null," Contexte:"),i.a.createElement("p",null," ",e.experience.contexte," ")),i.a.createElement(c,{title:"R\xf4les & R\xe9alisations:",items:e.experience.roles}))},m=function(e){var t=Date.parse(e.dates.debut),n=Date.parse(e.dates.fin),a=function(e){return new Intl.DateTimeFormat("fr-FR",{year:"numeric",month:"long"}).format(e)};return i.a.createElement("div",{className:"block"},i.a.createElement("h4",null,"Dur\xe9e:"),i.a.createElement("h5",null,function(e,t){return new Intl.DateTimeFormat("fr-FR",{month:"numeric"}).format(Math.abs(t-e))}(t,n)," MOIS"),i.a.createElement("p",null,"De ",a(t)),i.a.createElement("p",null,"\xc0 ",a(n)))},p=function(e){return i.a.createElement("div",{className:"header block"},i.a.createElement("img",{className:"brand-logo block",src:e.experience.logoUrl,alt:"brand logo"}),i.a.createElement("div",{className:"right-header block"},i.a.createElement("p",null," ",e.experience.titre," "),i.a.createElement("p",null," ",e.experience.entreprise," ")))},d=(n(13),function(e){return i.a.createElement("div",{className:"block"},i.a.createElement(p,{experience:e.experience}),i.a.createElement("div",{className:"left"},i.a.createElement(m,{dates:e.experience.dates}),i.a.createElement(s,{competences:e.experience.competences})),i.a.createElement("div",{className:"right"},i.a.createElement(u,{experience:e.experience})),i.a.createElement("p",{className:"clear"}))}),g=n(1),E=function(e){var t=i.a.useState(e.experienceIndex),n=Object(o.a)(t,2),a=n[0],l=n[1],r=g[a];return i.a.createElement("div",null,i.a.createElement("i",{onClick:e.onClose,className:"material-icons icon-large clickable"},"close"),i.a.createElement("div",{className:"left-button button",onClick:function(){a>0&&l(a-1)}},i.a.createElement("i",{className:"material-icons icon-large clickable"},"keyboard_arrow_left")),i.a.createElement("div",{className:"right-button button",onClick:function(){a<g.length-1&&l(a+1)}},i.a.createElement("i",{className:"material-icons icon-large clickable"},"navigate_next")),i.a.createElement("div",{className:"center"},i.a.createElement(d,{experience:r})))},f=(n(14),function(e){var t=function(e){var t=Date.parse(e);return new Intl.DateTimeFormat("fr-FR",{year:"2-digit",month:"2-digit"}).format(t)};return i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement("h1",null,"FULL STACK ENGINEER"),i.a.createElement("h2",null,"2 ans d'exp\xe9rience"),i.a.createElement("h4",null,"Je suis quelqu'un de curieux, sportif et surtout passionn\xe9 de nouvelles technologies.")),i.a.createElement("div",null,i.a.createElement("p",null,"Mes experiences:"),g.map((function(n,a){return i.a.createElement("div",{className:"block clickable experience",key:a,onClick:function(){e.updateExperienceIndex(a)}},i.a.createElement("p",null,n.titre),i.a.createElement("p",null,n.entreprise),i.a.createElement("p",null,t(n.dates.debut)," - ",t(n.dates.fin)))}))))}),h=function(e){var t=i.a.useState(!1),n=Object(o.a)(t,2),a=n[0],l=n[1],r=i.a.useState(0),c=Object(o.a)(r,2),s=c[0],u=c[1];return a?i.a.createElement(E,{experienceIndex:s,onClose:function(){return l(!1)}}):i.a.createElement(f,{updateExperienceIndex:function(e){return function(e){u(e),l(!0)}(e)}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.a6a6ba03.chunk.js.map