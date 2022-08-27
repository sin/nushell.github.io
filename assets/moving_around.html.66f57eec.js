import{_ as i,o as l,c,a as e,b as a,w as t,e as o,d as n,r as d}from"./app.fae3aa21.js";const r={},p=o(`<h1 id="im-system-navigieren" tabindex="-1"><a class="header-anchor" href="#im-system-navigieren" aria-hidden="true">#</a> Im System navigieren</h1><p>Traditionelle Shells erlauben es im Dateisystem zu navigieren und Befehle auszuf\xFChren. So auch Nu. Hier die g\xE4ngigsten Befehle, die beim Interagieren mit dem System am h\xE4ufigsten benutzt werden.</p><h2 id="verzeichnisinhalt-ansehen" tabindex="-1"><a class="header-anchor" href="#verzeichnisinhalt-ansehen" aria-hidden="true">#</a> Verzeichnisinhalt ansehen</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span>
</code></pre></div>`,4),u=n("Wie im anderen Kapitel bereits gezeigt wurde, ist "),h=e("code",null,"ls",-1),m=n(" der Befehl um den Inhalt eines Pfades anzuzeigen. Der Output wird als Tabelle dargestellt."),g=n("Der "),_=e("code",null,"ls",-1),b=n(' Befehl nimmt auch ein optionales Argument entgegen, um die Ansicht zu ver\xE4ndern. Zum Beispiel um nur ".md" Dateien an zu zeigen.'),k=o(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> *.md
\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token comment"># \u2502 name               \u2502 type \u2502 size    \u2502 modified </span>
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token number">0</span> \u2502 CODE_OF_CONDUCT.md \u2502 File \u2502  <span class="token number">3.4</span> KB \u2502 <span class="token number">5</span> days ago 
 <span class="token number">1</span> \u2502 CONTRIBUTING.md    \u2502 File \u2502   <span class="token number">886</span> B \u2502 <span class="token number">5</span> days ago 
 <span class="token number">2</span> \u2502 README.md          \u2502 File \u2502 <span class="token number">15.0</span> KB \u2502 <span class="token number">5</span> days ago 
 <span class="token number">3</span> \u2502 TODO.md            \u2502 File \u2502  <span class="token number">1.6</span> KB \u2502 <span class="token number">5</span> days ago 
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>Der Asterisk (*) im obigen Beispiel &quot;*.md&quot; wird auch als Wildcard oder glob bezeichnet. Es kann f\xFCr jedes Zeichen stehen. Man kann &quot;*.md&quot; auch als &quot;entspricht jeder Datei, die mit &#39;.md&#39; aufh\xF6rt&quot; lesen.</p><p>Nu verwendet auch moderne globs, mit welchen man auch tiefer liegende Verzeichnisse erreichen kann.</p><div class="language-bash ext-sh"><pre class="language-bash"><code> <span class="token function">ls</span> **/*.md
\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 <span class="token comment">#  \u2502 name                                      \u2502 type \u2502 size    \u2502 modified </span>
\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
  <span class="token number">0</span> \u2502 .github/ISSUE_TEMPLATE/bug_report.md      \u2502 File \u2502   <span class="token number">592</span> B \u2502 <span class="token number">5</span> days ago 
  <span class="token number">1</span> \u2502 .github/ISSUE_TEMPLATE/feature_request.md \u2502 File \u2502   <span class="token number">595</span> B \u2502 <span class="token number">5</span> days ago 
  <span class="token number">2</span> \u2502 CODE_OF_CONDUCT.md                        \u2502 File \u2502  <span class="token number">3.4</span> KB \u2502 <span class="token number">5</span> days ago 
  <span class="token number">3</span> \u2502 CONTRIBUTING.md                           \u2502 File \u2502   <span class="token number">886</span> B \u2502 <span class="token number">5</span> days ago 
  <span class="token number">4</span> \u2502 README.md                                 \u2502 File \u2502 <span class="token number">15.0</span> KB \u2502 <span class="token number">5</span> days ago 
  <span class="token number">5</span> \u2502 TODO.md                                   \u2502 File \u2502  <span class="token number">1.6</span> KB \u2502 <span class="token number">5</span> days ago 
  <span class="token number">6</span> \u2502 crates/nu-source/README.md                \u2502 File \u2502  <span class="token number">1.7</span> KB \u2502 <span class="token number">5</span> days ago 
  <span class="token number">7</span> \u2502 docker/packaging/README.md                \u2502 File \u2502  <span class="token number">1.5</span> KB \u2502 <span class="token number">5</span> days ago 
  <span class="token number">8</span> \u2502 docs/commands/README.md                   \u2502 File \u2502   <span class="token number">929</span> B \u2502 <span class="token number">5</span> days ago 
  <span class="token number">9</span> \u2502 docs/commands/alias.md                    \u2502 File \u2502  <span class="token number">1.7</span> KB \u2502 <span class="token number">5</span> days ago 
 <span class="token number">10</span> \u2502 docs/commands/append.md                   \u2502 File \u2502  <span class="token number">1.4</span> KB \u2502 <span class="token number">5</span> days ago
</code></pre></div><p>Hier werden alle &quot;.md&quot; Dateien ausgegeben, die &quot;in jedem tiefer liegenden Verzeichnis&quot; von hier aus liegen.</p><h2 id="wechseln-des-aktuellen-verzeichnisses" tabindex="-1"><a class="header-anchor" href="#wechseln-des-aktuellen-verzeichnisses" aria-hidden="true">#</a> Wechseln des aktuellen Verzeichnisses</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">cd</span> new_directory
</code></pre></div>`,7),f=n("Um vom aktuellen Verzeichnis in ein neues zu gelangen, wird der "),v=e("code",null,"cd",-1),B=n(" Befehl verwendet. Wie in jeder anderen Shell, kann entweder der Name des Verzeichnisses angeben, oder mit "),z=e("code",null,"..",-1),w=n(" ein Verzeichnis hochgesprungen werden."),y=n("Es kann jedoch auch das Verzeichnis gewechselt werden ohne "),E=e("code",null,"cd",-1),D=n(" angeben zu m\xFCssen, indem einfach der neue Pfad angegeben wird:"),F=e("div",{class:"language-bash ext-sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token operator"},">"),n(` ./new_directory
`)])])],-1),x=e("strong",null,"Hinweis",-1),O=n(" wenn mit "),V=e("code",null,"cd",-1),T=n(" das Verzeichnis gewechselt wird, \xE4ndert sich die "),N=e("code",null,"PWD",-1),K=n(" Umgebungsvariable. Das heisst der Wechsel bleibt f\xFCr den aktuellen Block bestehen. Beim Verlassen des Blocks, wird wieder ins vorherige Verzeichnis gewechselt. Mehr zu dieser Funktionsweise findet sich im Kapitel "),q=n("environment chapter"),A=n("."),C=e("h2",{id:"dateisystem-befehle",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#dateisystem-befehle","aria-hidden":"true"},"#"),n(" Dateisystem Befehle")],-1),S=e("p",null,"Nu stellt auch einige Dateisystem Basis-Befehle zur Verf\xFCgung, die auf allen Platformen laufen.",-1),I=n("Ein Objekt von einem Ort an einen anderen verschieben mit "),M=e("code",null,"mv",-1),R=n(":"),j=o(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">mv</span> item location
</code></pre></div><p>Ein Objekt kopieren von einem an den n\xE4chsten Ort:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">cp</span> item location
</code></pre></div><p>Ein Objekt l\xF6schen:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">rm</span> item
</code></pre></div>`,5),U=n("Diese drei Befehle k\xF6nnen auch von der glob F\xE4higkeit profitieren, wie beim "),P=e("code",null,"ls",-1),W=n("."),L=n("Zu guter Letzt wird ein neues Verzeichnis angelegt mit dem "),H=e("code",null,"mkdir",-1),Z=n(" Befehl:"),G=e("div",{class:"language-bash ext-sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token operator"},">"),n(),e("span",{class:"token function"},"mkdir"),n(` new_directory
`)])])],-1);function J(Q,X){const s=d("RouterLink");return l(),c("div",null,[p,e("p",null,[u,a(s,{to:"/book/commands/ls.html"},{default:t(()=>[h]),_:1}),m]),e("p",null,[g,a(s,{to:"/book/commands/ls.html"},{default:t(()=>[_]),_:1}),b]),k,e("p",null,[f,a(s,{to:"/book/commands/cd.html"},{default:t(()=>[v]),_:1}),B,z,w]),e("p",null,[y,a(s,{to:"/book/commands/cd.html"},{default:t(()=>[E]),_:1}),D]),F,e("p",null,[x,O,a(s,{to:"/book/commands/cd.html"},{default:t(()=>[V]),_:1}),T,N,K,a(s,{to:"/de/book/environment.html"},{default:t(()=>[q]),_:1}),A]),C,S,e("p",null,[I,a(s,{to:"/book/commands/mv.html"},{default:t(()=>[M]),_:1}),R]),j,e("p",null,[U,a(s,{to:"/book/commands/ls.html"},{default:t(()=>[P]),_:1}),W]),e("p",null,[L,a(s,{to:"/book/commands/mkdir.html"},{default:t(()=>[H]),_:1}),Z]),G])}var $=i(r,[["render",J],["__file","moving_around.html.vue"]]);export{$ as default};