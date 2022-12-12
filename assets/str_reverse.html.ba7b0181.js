import{_ as r,z as n,A as o,X as e,C as a,D as t,a6 as i}from"./framework.3d018c9f.js";const l={},c={id:"frontmatter-title-for-strings",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#frontmatter-title-for-strings","aria-hidden":"true"},"#",-1),d={class:"command-title"},h=i(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; str reverse ...rest</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>...rest</code>: optionally reverse text by column paths</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Reverse a single string</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;Nushell&#39;</span> <span class="token operator">|</span> str reverse
</code></pre></div><p>Reverse multiple strings in a list</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token string">&#39;Nushell&#39;</span> <span class="token string">&#39;is&#39;</span> <span class="token string">&#39;cool&#39;</span><span class="token punctuation">]</span> <span class="token operator">|</span> str reverse
</code></pre></div>`,9);function u(s,g){return n(),o("div",null,[e("h1",c,[p,a(),e("code",null,t(s.$frontmatter.title),1),a(" for strings")]),e("div",d,t(s.$frontmatter.strings),1),h])}const _=r(l,[["render",u],["__file","str_reverse.html.vue"]]);export{_ as default};
