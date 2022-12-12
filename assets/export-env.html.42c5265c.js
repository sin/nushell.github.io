import{_ as s,z as r,A as o,X as e,C as t,D as n,a6 as c}from"./framework.3d018c9f.js";const i={},l={id:"frontmatter-title-for-env",tabindex:"-1"},d=e("a",{class:"header-anchor",href:"#frontmatter-title-for-env","aria-hidden":"true"},"#",-1),p={class:"command-title"},h=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; export-env (block)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>block</code>: the block to run to set the environment</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Set an environment</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> export-env <span class="token punctuation">{</span> let-env SPAM <span class="token operator">=</span> <span class="token string">&#39;eggs&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token variable">$env</span>.SPAM
</code></pre></div>`,7);function u(a,m){return r(),o("div",null,[e("h1",l,[d,t(),e("code",null,n(a.$frontmatter.title),1),t(" for env")]),e("div",p,n(a.$frontmatter.env),1),h])}const v=s(i,[["render",u],["__file","export-env.html.vue"]]);export{v as default};
