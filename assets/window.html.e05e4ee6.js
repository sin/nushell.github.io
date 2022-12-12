import{_ as t,z as o,A as r,X as a,C as e,D as n,a6 as p}from"./framework.3d018c9f.js";const i={},l={id:"frontmatter-title-for-filters",tabindex:"-1"},c=a("a",{class:"header-anchor",href:"#frontmatter-title-for-filters","aria-hidden":"true"},"#",-1),d={class:"command-title"},u=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; window (window_size) --stride --remainder</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>window_size</code>: the size of each window</li><li><code>--stride {int}</code>: the number of rows to slide over between windows</li><li><code>--remainder</code>: yield last chunks even if they have fewer elements than size</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>A sliding window of two elements</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">|</span> window <span class="token number">2</span>
</code></pre></div><p>A sliding window of two elements, with a stride of 3</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span>, <span class="token number">2</span>, <span class="token number">3</span>, <span class="token number">4</span>, <span class="token number">5</span>, <span class="token number">6</span>, <span class="token number">7</span>, <span class="token number">8</span><span class="token punctuation">]</span> <span class="token operator">|</span> window <span class="token number">2</span> <span class="token parameter variable">--stride</span> <span class="token number">3</span>
</code></pre></div><p>A sliding window of equal stride that includes remainder. Equivalent to chunking</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">1</span>, <span class="token number">2</span>, <span class="token number">3</span>, <span class="token number">4</span>, <span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">|</span> window <span class="token number">3</span> <span class="token parameter variable">--stride</span> <span class="token number">3</span> <span class="token parameter variable">--remainder</span>
</code></pre></div>`,11);function m(s,h){return o(),r("div",null,[a("h1",l,[c,e(),a("code",null,n(s.$frontmatter.title),1),e(" for filters")]),a("div",d,n(s.$frontmatter.filters),1),u])}const b=t(i,[["render",m],["__file","window.html.vue"]]);export{b as default};
