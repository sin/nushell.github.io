import{_ as n,z as r,A as o,X as e,C as t,D as s,a6 as c}from"./framework.3d018c9f.js";const d={},i={id:"frontmatter-title-for-system",tabindex:"-1"},l=e("a",{class:"header-anchor",href:"#frontmatter-title-for-system","aria-hidden":"true"},"#",-1),h={class:"command-title"},p=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; exec (command) ...rest</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>command</code>: the command to execute</li><li><code>...rest</code>: any additional arguments for the command</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><div class="language-text" data-ext="text"><pre class="language-text"><code>Currently supported only on Unix-based systems.
</code></pre></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Execute external &#39;ps aux&#39; tool</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">exec</span> <span class="token function">ps</span> aux
</code></pre></div><p>Execute &#39;nautilus&#39;</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">exec</span> nautilus
</code></pre></div>`,11);function u(a,m){return r(),o("div",null,[e("h1",i,[l,t(),e("code",null,s(a.$frontmatter.title),1),t(" for system")]),e("div",h,s(a.$frontmatter.system),1),p])}const f=n(d,[["render",u],["__file","exec.html.vue"]]);export{f as default};
