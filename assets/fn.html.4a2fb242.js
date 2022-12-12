import{_ as t,z as o,A as r,X as e,C as s,D as n,a6 as c}from"./framework.3d018c9f.js";const i={},d={id:"frontmatter-title-for-db-expression",tabindex:"-1"},l=e("a",{class:"header-anchor",href:"#frontmatter-title-for-db-expression","aria-hidden":"true"},"#",-1),p={class:"command-title"},h=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; fn (name) ...arguments --distinct</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>name</code>: function name</li><li><code>...arguments</code>: function arguments</li><li><code>--distinct</code>: distict values</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Creates a function expression</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> fn count name_1 <span class="token operator">|</span> into nu
</code></pre></div><p>orders query by a column</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> db.sqlite
    <span class="token operator">|</span> from table table_a
    <span class="token operator">|</span> <span class="token keyword">select</span> <span class="token punctuation">(</span>fn lead col_a<span class="token punctuation">)</span>
    <span class="token operator">|</span> describe
</code></pre></div>`,9);function u(a,f){return o(),r("div",null,[e("h1",d,[l,s(),e("code",null,n(a.$frontmatter.title),1),s(" for db-expression")]),e("div",p,n(a.$frontmatter.db_expression),1),h])}const _=t(i,[["render",u],["__file","fn.html.vue"]]);export{_ as default};
