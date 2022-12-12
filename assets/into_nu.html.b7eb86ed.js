import{_ as o,z as r,A as p,X as a,C as s,D as e,a6 as t}from"./framework.3d018c9f.js";const i={},c={id:"frontmatter-title-for-dataframe",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title-for-dataframe","aria-hidden":"true"},"#",-1),d={class:"command-title"},u=t(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; into nu --rows --tail</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--rows {number}</code>: number of rows to be shown</li><li><code>--tail</code>: shows tail rows</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Shows head rows from dataframe</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span> <span class="token operator">|</span> into nu
</code></pre></div><p>Shows tail rows from dataframe</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">5</span> <span class="token number">6</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span> <span class="token operator">|</span> into nu <span class="token parameter variable">-t</span> <span class="token parameter variable">-n</span> <span class="token number">1</span>
</code></pre></div>`,9),h={id:"frontmatter-title-for-db-expression",tabindex:"-1"},m=a("a",{class:"header-anchor",href:"#frontmatter-title-for-db-expression","aria-hidden":"true"},"#",-1),f={class:"command-title"},k=t(`<h2 id="signature-1" tabindex="-1"><a class="header-anchor" href="#signature-1" aria-hidden="true">#</a> Signature</h2><p><code>&gt; into nu </code></p><h2 id="examples-1" tabindex="-1"><a class="header-anchor" href="#examples-1" aria-hidden="true">#</a> Examples</h2><p>Convert a col expression into a nushell value</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> field name_1 <span class="token operator">|</span> into nu
</code></pre></div>`,5),b={id:"frontmatter-title-for-expression",tabindex:"-1"},_=a("a",{class:"header-anchor",href:"#frontmatter-title-for-expression","aria-hidden":"true"},"#",-1),g={class:"command-title"},x=t(`<h2 id="signature-2" tabindex="-1"><a class="header-anchor" href="#signature-2" aria-hidden="true">#</a> Signature</h2><p><code>&gt; into nu </code></p><h2 id="examples-2" tabindex="-1"><a class="header-anchor" href="#examples-2" aria-hidden="true">#</a> Examples</h2><p>Convert a col expression into a nushell value</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> col a <span class="token operator">|</span> into nu
</code></pre></div>`,5);function v(n,w){return r(),p("div",null,[a("h1",c,[l,s(),a("code",null,e(n.$frontmatter.title),1),s(" for dataframe")]),a("div",d,e(n.$frontmatter.dataframe),1),u,a("h1",h,[m,s(),a("code",null,e(n.$frontmatter.title),1),s(" for db-expression")]),a("div",f,e(n.$frontmatter.db_expression),1),k,a("h1",b,[_,s(),a("code",null,e(n.$frontmatter.title),1),s(" for expression")]),a("div",g,e(n.$frontmatter.expression),1),x])}const $=o(i,[["render",v],["__file","into_nu.html.vue"]]);export{$ as default};
