import{_ as t,z as d,A as r,a6 as e}from"./framework.3d018c9f.js";const o={},s=e('<h1 id="从其他-shell-或-dsl-到-nu" tabindex="-1"><a class="header-anchor" href="#从其他-shell-或-dsl-到-nu" aria-hidden="true">#</a> 从其他 Shell 或 DSL 到 Nu</h1><p>这个表格背后的想法是帮助你了解 Nu 的内置和插件所提供命令与其他已知的 Shell 和特定领域语言(DSL)的关系。我们试图制作一张所有 Nu 命令和它们在其他语言中的对应关系的表。欢迎大家参与贡献。</p><p>注意：此表针对 Nu 0.43 或更高版本。</p><table><thead><tr><th>Nushell</th><th>SQL</th><th>.Net LINQ (C#)</th><th>PowerShell (without external modules)</th><th>Bash</th></tr></thead><tbody><tr><td>alias</td><td>-</td><td>-</td><td>alias</td><td>alias</td></tr><tr><td>append</td><td>-</td><td>Append</td><td>-Append</td><td></td></tr><tr><td>args</td><td>-</td><td>-</td><td></td><td></td></tr><tr><td>autoview</td><td>-</td><td>-</td><td></td><td></td></tr><tr><td>math avg</td><td>avg</td><td>Average</td><td>Measure-Object, measure</td><td></td></tr><tr><td>calc, <code>&lt;math expression&gt;</code></td><td>math operators</td><td>Aggregate, Average, Count, Max, Min, Sum</td><td></td><td>bc</td></tr><tr><td>cd</td><td>-</td><td>-</td><td>Set-Location, cd</td><td>cd</td></tr><tr><td>clear</td><td>-</td><td>-</td><td>Clear-Host</td><td>clear</td></tr><tr><td>compact</td><td></td><td></td><td></td><td></td></tr><tr><td>config</td><td>-</td><td>-</td><td>$Profile</td><td>vi .bashrc, .profile</td></tr><tr><td>cp</td><td>-</td><td>-</td><td>Copy-Item, cp, copy</td><td>cp</td></tr><tr><td>date</td><td>NOW() / getdate()</td><td>DateTime class</td><td>Get-Date</td><td>date</td></tr><tr><td>debug</td><td></td><td></td><td></td><td></td></tr><tr><td>default</td><td></td><td></td><td></td><td></td></tr><tr><td>drop</td><td></td><td></td><td></td><td></td></tr><tr><td>du</td><td>-</td><td>-</td><td></td><td>du</td></tr><tr><td>each</td><td>cursor</td><td></td><td>ForEach-Object, foreach, for</td><td></td></tr><tr><td>echo</td><td>print, union all</td><td>-</td><td>Write-Output, write</td><td>echo</td></tr><tr><td>enter</td><td>-</td><td>-</td><td></td><td></td></tr><tr><td>exit</td><td>-</td><td></td><td>exit</td><td>exit</td></tr><tr><td>fetch</td><td>-</td><td>HttpClient,WebClient, HttpWebRequest/Response</td><td>Invoke-WebRequest</td><td>wget</td></tr><tr><td>first</td><td>top, limit</td><td>First, FirstOrDefault</td><td>Select-Object -First</td><td>head</td></tr><tr><td>format</td><td></td><td>String.Format</td><td>String.Format</td><td></td></tr><tr><td>from</td><td>import flatfile, openjson, cast(variable as xml)</td><td>-</td><td>Import/ConvertFrom-{Csv,Xml,Html,Json}</td><td></td></tr><tr><td>get</td><td></td><td>Select</td><td>(cmd).column</td><td></td></tr><tr><td>group-by</td><td>group by</td><td>GroupBy, group</td><td>Group-Object, group</td><td></td></tr><tr><td>headers</td><td></td><td></td><td></td><td></td></tr><tr><td>help</td><td>sp_help</td><td>-</td><td>Get-Help, help, man</td><td>man</td></tr><tr><td>histogram</td><td>-</td><td>-</td><td></td><td></td></tr><tr><td>history</td><td>-</td><td>-</td><td>Get-History, history</td><td>history</td></tr><tr><td>inc(<code>*</code>)</td><td>-</td><td></td><td>-</td><td>-</td></tr><tr><td>is_empty</td><td>is null</td><td>String.InNullOrEmpty</td><td>String.InNullOrEmpty</td><td></td></tr><tr><td>keep, =take</td><td>top, limit</td><td>Take</td><td>Select-Object -First</td><td>head</td></tr><tr><td>keep-until</td><td></td><td></td><td></td><td></td></tr><tr><td>keep-while</td><td></td><td>TakeWhile</td><td></td><td></td></tr><tr><td>kill</td><td>-</td><td>-</td><td>Stop-Process, kill</td><td>kill</td></tr><tr><td>last</td><td></td><td>Last, LastOrDefault</td><td>Select-Object -Last</td><td>tail</td></tr><tr><td>length</td><td>count</td><td>Count</td><td>Measure-Object, measure</td><td>wc</td></tr><tr><td>lines</td><td>-</td><td>-</td><td>File.ReadAllLines</td><td></td></tr><tr><td>ls</td><td>-</td><td>-</td><td>Get-ChildItem, dir, ls</td><td>ls</td></tr><tr><td>match(<code>*</code>)</td><td>case when</td><td>Regex.IsMatch</td><td>[regex]</td><td></td></tr><tr><td>merge</td><td></td><td></td><td></td><td></td></tr><tr><td>mkdir</td><td>-</td><td>-</td><td>mkdir, md</td><td>mkdir</td></tr><tr><td>mv</td><td>-</td><td>-</td><td>Move-Item, mv, move, mi</td><td>mv</td></tr><tr><td>next</td><td></td><td></td><td></td><td></td></tr><tr><td>nth</td><td>limit x offset y, rownumber =</td><td>ElementAt</td><td>[x], indexing operator, ElementAt</td><td></td></tr><tr><td>open</td><td></td><td></td><td>Get-Content, gc, cat, type</td><td>cat</td></tr><tr><td>parse</td><td></td><td></td><td></td><td></td></tr><tr><td>transpose</td><td>pivot</td><td>-</td><td></td><td></td></tr><tr><td>post(<code>*</code>)</td><td>-</td><td>HttpClient,WebClient, HttpWebRequest/Response</td><td>Invoke-WebRequest</td><td></td></tr><tr><td>prepend</td><td></td><td></td><td></td><td></td></tr><tr><td>prev</td><td></td><td></td><td></td><td></td></tr><tr><td>ps(<code>*</code>)</td><td>-</td><td>-</td><td>Get-Process, ps, gps</td><td>ps</td></tr><tr><td>pwd</td><td>-</td><td>-</td><td>Get-Location, pwd</td><td>pwd</td></tr><tr><td>range</td><td></td><td>Range</td><td>1..10, &#39;a&#39;..&#39;f&#39;</td><td></td></tr><tr><td>reduce</td><td></td><td>Aggregate</td><td></td><td></td></tr><tr><td>reject</td><td></td><td></td><td></td><td></td></tr><tr><td>rename</td><td>-</td><td>-</td><td>Rename-Item, ren, rni</td><td>mv</td></tr><tr><td>reverse</td><td></td><td>Reverse</td><td>[Array]::Reverse($var)</td><td></td></tr><tr><td>rm</td><td>-</td><td>-</td><td>Remove-Item, del, erase, rd, ri, rm, rmdir</td><td>rm</td></tr><tr><td>save</td><td>-</td><td>-</td><td>Write-Output, Out-File</td><td>&gt; foo.txt</td></tr><tr><td>select</td><td>select</td><td>Select</td><td>Select-Object, select</td><td></td></tr><tr><td>shells</td><td>-</td><td>-</td><td>-</td><td></td></tr><tr><td>shuffle</td><td></td><td>Random</td><td>Sort-Object {Get-Random}</td><td>-</td></tr><tr><td>size</td><td></td><td></td><td>Measure-Object, measure</td><td>wc</td></tr><tr><td>skip</td><td>where row_number()</td><td>Skip</td><td>Select-Object -Skip</td><td></td></tr><tr><td>skip until</td><td></td><td></td><td></td><td></td></tr><tr><td>skip while</td><td></td><td>SkipWhile</td><td></td><td></td></tr><tr><td>sort-by</td><td>order by</td><td>OrderBy, OrderByDescending, ThenBy, ThenByDescending</td><td>Sort-Object, sort</td><td></td></tr><tr><td>split-by</td><td></td><td>Split</td><td>Split</td><td></td></tr><tr><td>split column</td><td></td><td>-</td><td></td><td></td></tr><tr><td>split row</td><td></td><td>-</td><td></td><td></td></tr><tr><td>str(<code>*</code>)</td><td>string functions</td><td>String class</td><td>String class</td><td></td></tr><tr><td>str join</td><td>concat_ws</td><td>Join</td><td>Join-String</td><td></td></tr><tr><td>str trim</td><td>rtrim, ltrim</td><td>Trim, TrimStart, TrimEnd</td><td>Trim</td><td></td></tr><tr><td>sum</td><td>sum</td><td>Sum</td><td>Measure-Object, measure</td><td></td></tr><tr><td>sys(<code>*</code>)</td><td>-</td><td>-</td><td>Get-ComputerInfo</td><td>uname, lshw, lsblk, lscpu, lsusb, hdparam, free</td></tr><tr><td>table</td><td></td><td></td><td>Format-Table, ft, Format-List, fl</td><td></td></tr><tr><td>tags</td><td>-</td><td>-</td><td>-</td><td></td></tr><tr><td>textview(<code>*</code>)</td><td>-</td><td>-</td><td>Get-Content, cat</td><td></td></tr><tr><td>tree(<code>*</code>)</td><td>-</td><td>-</td><td>tree</td><td></td></tr><tr><td>to</td><td>-</td><td>-</td><td>Export/ConvertTo-{Csv,Xml,Html,Json}</td><td></td></tr><tr><td>touch</td><td>-</td><td>-</td><td>Set-Content</td><td>touch</td></tr><tr><td>uniq</td><td>distinct</td><td>Distinct</td><td>Get-Unique, gu</td><td>uniq</td></tr><tr><td>upsert</td><td>As</td><td>-</td><td></td><td></td></tr><tr><td>version</td><td>select @@version</td><td>-</td><td>$PSVersionTable</td><td></td></tr><tr><td>with_env</td><td>-</td><td>-</td><td>$env:FOO = &#39;bar&#39;</td><td>export foo = &quot;bar&quot;</td></tr><tr><td>where</td><td>where</td><td>Where</td><td>Where-Object, where, &quot;?&quot; operator</td><td></td></tr><tr><td>which</td><td>-</td><td>-</td><td>-</td><td>which</td></tr><tr><td>wrap</td><td></td><td></td><td></td><td></td></tr></tbody></table><ul><li><code>*</code> - 这些命令是标准插件的一部分</li></ul>',5),a=[s];function l(i,c){return d(),r("div",null,a)}const p=t(o,[["render",l],["__file","nushell_map.html.vue"]]);export{p as default};
