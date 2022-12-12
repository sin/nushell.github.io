import{_ as t,z as d,A as r,a6 as e}from"./framework.3d018c9f.js";const s={},i=e('<h1 id="nu-map-from-imperative-languages" tabindex="-1"><a class="header-anchor" href="#nu-map-from-imperative-languages" aria-hidden="true">#</a> Nu map from imperative languages</h1><p>The idea behind this table is to help you understand how Nu built-ins and plugins relate to imperative languages. We&#39;ve tried to produce a map of programming-relevant Nu commands and what their equivalents are in other languages. Contributions are welcome.</p><p>Note: this table assumes Nu 0.43 or later.</p><table><thead><tr><th>Nushell</th><th>Python</th><th>Kotlin (Java)</th><th>C++</th><th>Rust</th></tr></thead><tbody><tr><td>append</td><td>list.append, set.add</td><td>add</td><td>push_back, emplace_back</td><td>push, push_back</td></tr><tr><td>math avg</td><td>statistics.mean</td><td></td><td></td><td></td></tr><tr><td>calc, = math</td><td>math operators</td><td>math operators</td><td>math operators</td><td>math operators</td></tr><tr><td>count</td><td>len</td><td>size, length</td><td>length</td><td>len</td></tr><tr><td>cp</td><td>shutil.copy</td><td></td><td></td><td></td></tr><tr><td>date</td><td>datetime.date.today</td><td>java.time.LocalDate.now</td><td></td><td></td></tr><tr><td>drop</td><td>list[:-3]</td><td></td><td></td><td></td></tr><tr><td>du</td><td>shutil.disk_usage</td><td></td><td></td><td></td></tr><tr><td>each</td><td>for</td><td>for</td><td>for</td><td>for</td></tr><tr><td>exit</td><td>exit</td><td>System.exit, kotlin.system.exitProcess</td><td>exit</td><td>exit</td></tr><tr><td>fetch</td><td>urllib.request.urlopen</td><td></td><td></td><td></td></tr><tr><td>first</td><td>list[:x]</td><td>List[0], peek</td><td>vector[0], top</td><td>Vec[0]</td></tr><tr><td>format</td><td>format</td><td>format</td><td>format</td><td>format!</td></tr><tr><td>from</td><td>csv, json, sqlite3</td><td></td><td></td><td></td></tr><tr><td>get</td><td>dict[&quot;key&quot;]</td><td>Map[&quot;key&quot;]</td><td>map[&quot;key&quot;]</td><td>HashMap[&quot;key&quot;], get, entry</td></tr><tr><td>group-by</td><td>itertools.groupby</td><td>groupBy</td><td></td><td>group_by</td></tr><tr><td>headers</td><td>keys</td><td></td><td></td><td></td></tr><tr><td>help</td><td>help</td><td></td><td></td><td></td></tr><tr><td>insert</td><td>dict[&quot;key&quot;] = val</td><td></td><td></td><td></td></tr><tr><td>is-empty</td><td>is None, is []</td><td>isEmpty</td><td>empty</td><td>is_empty</td></tr><tr><td>take</td><td>list[:x]</td><td></td><td></td><td>&amp;Vec[..x]</td></tr><tr><td>take until</td><td>itertools.takewhile</td><td></td><td></td><td></td></tr><tr><td>take while</td><td>itertools.takewhile</td><td></td><td></td><td></td></tr><tr><td>kill</td><td>os.kill</td><td></td><td></td><td></td></tr><tr><td>last</td><td>list[-x:]</td><td></td><td></td><td>&amp;Vec[Vec.len()-1]</td></tr><tr><td>lines</td><td>split, splitlines</td><td>split</td><td>views::split</td><td>split, split_whitespace, rsplit, lines</td></tr><tr><td>ls</td><td>os.listdir</td><td></td><td></td><td></td></tr><tr><td>match</td><td>re.findall</td><td>Regex.matches</td><td>regex_match</td><td></td></tr><tr><td>merge</td><td>dict.append</td><td></td><td></td><td></td></tr><tr><td>mkdir</td><td>os.mkdir</td><td></td><td></td><td></td></tr><tr><td>mv</td><td>shutil.move</td><td></td><td></td><td></td></tr><tr><td>get</td><td>list[x]</td><td>List[x]</td><td>vector[x]</td><td>Vec[x]</td></tr><tr><td>open</td><td>open</td><td></td><td></td><td></td></tr><tr><td>transpose</td><td>zip(*matrix)</td><td></td><td></td><td></td></tr><tr><td>post</td><td>urllib.request.urlopen</td><td></td><td></td><td></td></tr><tr><td>prepend</td><td>deque.appendleft</td><td></td><td></td><td></td></tr><tr><td>print</td><td>print</td><td>println</td><td>printf</td><td>println!</td></tr><tr><td>ps</td><td>os.listdir(&#39;/proc&#39;)</td><td></td><td></td><td></td></tr><tr><td>pwd</td><td>os.getcwd</td><td></td><td></td><td></td></tr><tr><td>range</td><td>range</td><td>.., until, downTo, step</td><td>iota</td><td>..</td></tr><tr><td>reduce</td><td>functools.reduce</td><td>reduce</td><td>reduce</td><td>fold, rfold, scan</td></tr><tr><td>reject</td><td>del</td><td></td><td></td><td></td></tr><tr><td>rename</td><td>shutil.move</td><td></td><td></td><td></td></tr><tr><td>reverse</td><td>reversed, list.reverse</td><td>reverse, reversed, asReversed</td><td>reverse</td><td>rev</td></tr><tr><td>rm</td><td>os.remove</td><td></td><td></td><td></td></tr><tr><td>save</td><td>io.TextIOWrapper.write</td><td></td><td></td><td></td></tr><tr><td>select</td><td>{k:dict[k] for k in keys}</td><td></td><td></td><td></td></tr><tr><td>shuffle</td><td>random.shuffle</td><td></td><td></td><td></td></tr><tr><td>size</td><td>len</td><td></td><td></td><td></td></tr><tr><td>skip</td><td>list[x:]</td><td></td><td></td><td>&amp;Vec[x..],skip</td></tr><tr><td>skip until</td><td>itertools.dropwhile</td><td></td><td></td><td></td></tr><tr><td>skip while</td><td>itertools.dropwhile</td><td></td><td></td><td>skip_while</td></tr><tr><td>sort-by</td><td>sorted, list.sort</td><td>sortedBy, sortedWith, Arrays.sort, Collections.sort</td><td>sort</td><td>sort</td></tr><tr><td>split row</td><td>str.split{,lines}, re.split</td><td>split</td><td>views::split</td><td>split</td></tr><tr><td>str</td><td>str functions</td><td>String functions</td><td>string functions</td><td>&amp;str, String functions</td></tr><tr><td>str join</td><td>str.join</td><td>joinToString</td><td></td><td>join</td></tr><tr><td>str trim</td><td>strip, rstrip, lstrip</td><td>trim, trimStart, trimEnd</td><td>regex</td><td>trim, trim*{start,end}, strip*{suffix,prefix}</td></tr><tr><td>sum</td><td>sum</td><td>sum</td><td>reduce</td><td>sum</td></tr><tr><td>sys</td><td>sys</td><td></td><td></td><td></td></tr><tr><td>to</td><td>import csv, json, sqlite3</td><td></td><td></td><td></td></tr><tr><td>touch</td><td>open(path, &#39;a&#39;).close()</td><td></td><td></td><td></td></tr><tr><td>uniq</td><td>set</td><td>Set</td><td>set</td><td>HashSet</td></tr><tr><td>upsert</td><td>dict[&quot;key&quot;] = val</td><td></td><td></td><td></td></tr><tr><td>version</td><td>sys.version, sys.version_info</td><td></td><td></td><td></td></tr><tr><td>with-env</td><td>os.environ</td><td></td><td></td><td></td></tr><tr><td>where</td><td>filter</td><td>filter</td><td>filter</td><td>filter</td></tr><tr><td>which</td><td>shutil.which</td><td></td><td></td><td></td></tr><tr><td>wrap</td><td>{ &quot;key&quot; : val }</td><td></td><td></td><td></td></tr></tbody></table>',4),o=[i];function a(l,n){return d(),r("div",null,o)}const u=t(s,[["render",a],["__file","nushell_map_imperative.html.vue"]]);export{u as default};
