import{_ as n,z as r,A as o,X as a,C as s,D as t,a6 as i}from"./framework.3d018c9f.js";const c={},p={id:"frontmatter-title-for-bits",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title-for-bits","aria-hidden":"true"},"#",-1),d={class:"command-title"},h=i(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; bits or (target)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>target</code>: target integer to perform bit or</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Apply bits or to two numbers</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token number">2</span> <span class="token operator">|</span> bits or <span class="token number">6</span>
</code></pre></div><p>Apply logical or to a list of numbers</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">8</span> <span class="token number">3</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">|</span> bits or <span class="token number">2</span>
</code></pre></div>`,9);function u(e,b){return r(),o("div",null,[a("h1",p,[l,s(),a("code",null,t(e.$frontmatter.title),1),s(" for bits")]),a("div",d,t(e.$frontmatter.bits),1),h])}const f=n(c,[["render",u],["__file","bits_or.html.vue"]]);export{f as default};
