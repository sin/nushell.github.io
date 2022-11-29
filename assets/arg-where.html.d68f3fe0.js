import{_ as t,o,c as p,a,t as s,d as e,e as c}from"./app.213f4294.js";const r={},l={id:"frontmatter-title-for-expression",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title-for-expression","aria-hidden":"true"},"#",-1),u=e(),d=e(" for expression"),h={class:"command-title"},k=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; arg-where (column name)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>column name</code>: Expression to evaluate</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Return a dataframe where the value match the expression</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> <span class="token function">df</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span>one <span class="token number">1</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>two <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>three <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> into <span class="token function">df</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$df</span> <span class="token operator">|</span> <span class="token keyword">select</span> <span class="token punctuation">(</span>arg-where <span class="token punctuation">((</span>col b<span class="token punctuation">)</span> <span class="token operator">&gt;=</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">|</span> as b_arg<span class="token punctuation">)</span>
</code></pre></div>`,7);function m(n,f){return o(),p("div",null,[a("h1",l,[i,u,a("code",null,s(n.$frontmatter.title),1),d]),a("div",h,s(n.$frontmatter.expression),1),k])}const g=t(r,[["render",m],["__file","arg-where.html.vue"]]);export{g as default};