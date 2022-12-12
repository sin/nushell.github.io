import{_ as n,z as r,A as o,X as a,C as s,D as t,a6 as d}from"./framework.3d018c9f.js";const c={},i={id:"frontmatter-title-for-formats",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title-for-formats","aria-hidden":"true"},"#",-1),p={class:"command-title"},h=d(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; from ods --sheets</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--sheets {list&lt;string&gt;}</code>: Only convert specified sheets</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Convert binary .ods data to a table</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> <span class="token parameter variable">--raw</span> test.ods <span class="token operator">|</span> from ods
</code></pre></div><p>Convert binary .ods data to a table, specifying the tables</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> <span class="token parameter variable">--raw</span> test.ods <span class="token operator">|</span> from ods <span class="token parameter variable">-s</span> <span class="token punctuation">[</span>Spreadsheet1<span class="token punctuation">]</span>
</code></pre></div>`,9);function f(e,m){return r(),o("div",null,[a("h1",i,[l,s(),a("code",null,t(e.$frontmatter.title),1),s(" for formats")]),a("div",p,t(e.$frontmatter.formats),1),h])}const _=n(c,[["render",f],["__file","from_ods.html.vue"]]);export{_ as default};
