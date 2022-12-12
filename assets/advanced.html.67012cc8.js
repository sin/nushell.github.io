import{_ as r,z as i,A as c,X as t,C as e,T as a,$ as o,Q as s}from"./framework.3d018c9f.js";const u={},d=t("h1",{id:"not-so-advanced",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#not-so-advanced","aria-hidden":"true"},"#"),e(" (Not So) Advanced")],-1),h=t("p",null,'While the "Advanced" title might sound daunting and you might be tempted to skip this chapter, in fact, some of the most interesting and powerful features can be found here.',-1),p=t("em",null,"structured data",-1),m={href:"https://github.com/pola-rs/polars",target:"_blank",rel:"noopener noreferrer"};function f(_,g){const l=s("ExternalLinkIcon"),n=s("RouterLink");return i(),c("div",null,[d,h,t("p",null,[e("Nushell operates on "),p,e('. You could say that Nushell is a "data-first" shell and a programming language. To further explore the data-centric direction, Nushell includes a full-featured dataframe processing engine using '),t("a",m,[e("Polars"),a(l)]),e(" as the backend. Make sure to check the "),a(n,{to:"/book/dataframes.html"},{default:o(()=>[e("Dataframes documentation")]),_:1}),e(" if you want to process large data efficiently directly in your shell.")]),t("p",null,[e("Values in Nushell contain some extra "),a(n,{to:"/book/metadata.html"},{default:o(()=>[e("metadata")]),_:1}),e(". This metadata can be used, for example, to "),a(n,{to:"/book/creating_errors.html"},{default:o(()=>[e("create custom errors")]),_:1}),e(".")]),t("p",null,[e("Thanks to Nushell's strict scoping rules, it is very easy to "),a(n,{to:"/book/parallelism.html"},{default:o(()=>[e("iterate over collections in parallel")]),_:1}),e(" which can help you speed up long-running scripts by just typing a few characters.")]),t("p",null,[e("Finally, you can extend Nushell's functionality with "),a(n,{to:"/book/plugins.html"},{default:o(()=>[e("plugins")]),_:1}),e(". Almost anything can be a plugin as long as it communicates with Nushell in a protocol that Nushell understands.")])])}const y=r(u,[["render",f],["__file","advanced.html.vue"]]);export{y as default};
