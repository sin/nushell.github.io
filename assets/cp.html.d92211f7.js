import{_ as o,z as r,A as i,X as e,C as s,D as t,a6 as n}from"./framework.3d018c9f.js";const c={},l={id:"frontmatter-title-for-filesystem",tabindex:"-1"},d=e("a",{class:"header-anchor",href:"#frontmatter-title-for-filesystem","aria-hidden":"true"},"#",-1),p={class:"command-title"},h=n(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; cp (source) (destination) --recursive --verbose --interactive --no-symlink</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>source</code>: the place to copy from</li><li><code>destination</code>: the place to copy to</li><li><code>--recursive</code>: copy recursively through subdirectories</li><li><code>--verbose</code>: show successful copies in addition to failed copies (default:false)</li><li><code>--interactive</code>: ask user to confirm action</li><li><code>--no-symlink</code>: no symbolic links are followed, only works if -r is active</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Copy myfile to dir_b</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">cp</span> myfile dir_b
</code></pre></div><p>Recursively copy dir_a to dir_b</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">cp</span> <span class="token parameter variable">-r</span> dir_a dir_b
</code></pre></div><p>Recursively copy dir_a to dir_b, and print the feedbacks</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">cp</span> <span class="token parameter variable">-r</span> <span class="token parameter variable">-v</span> dir_a dir_b
</code></pre></div><p>Move many files into a directory</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">cp</span> *.txt dir_a
</code></pre></div>`,13);function u(a,f){return r(),i("div",null,[e("h1",l,[d,s(),e("code",null,t(a.$frontmatter.title),1),s(" for filesystem")]),e("div",p,t(a.$frontmatter.filesystem),1),h])}const _=o(c,[["render",u],["__file","cp.html.vue"]]);export{_ as default};
