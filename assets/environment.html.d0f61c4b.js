import{_ as l,z as o,A as u,X as e,C as n,T as t,$ as a,a6 as s,Q as d}from"./framework.3d018c9f.js";const c={},g=e("h1",{id:"environment",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#environment","aria-hidden":"true"},"#"),n(" Environment")],-1),h=e("p",null,"Eine häufige Aufgabe in einer Shell ist die Kontrolle der Umgebung, in der die externen Programme laufen. Dies wird meist automatisch geschehen, da die Umgebung dem externen programm mitgegeben wird, wenn es gestartet wird. Manchmal jedoch will man eine genauere Kontrolle darüber, welche Umgebungsvariablen ein Programm sehen kann.",-1),m=e("code",null,"env",-1),v=s(`<div class="language-text" data-ext="text"><pre class="language-text"><code>   #           name                 type                value                 raw
──────────────────────────────────────────────────────────────────────────────────────────
  16   DISPLAY              string               :0                   :0
  17   EDITOR               string               nvim                 nvim
  28   LANG                 string               en_US.UTF-8          en_US.UTF-8
  35   PATH                 list&lt;unknown&gt;        [list 16 items]      /path1:/path2:/...
  36   PROMPT_COMMAND       block                &lt;Block 197&gt;
</code></pre></div><p>In der Nushell können Umgebungsvariablen jeden Wert jeden Typs annehmen (siehe die<code>type</code> Spalte) Der aktuelle Wert der Umgebungsvariable, den Nushell verwendet, findet sich unter <code>value</code>. Die <code>$env</code> Variable kann direkt abgefragt werden, z.B. mit <code>$env.PATH | length</code>. Die letzte Spalte <code>raw</code> beinhaltet den Wert, den ein externes Programm erhält (siehe <a href="#environment-variable-conversions">Environment variable conversions</a>)</p>`,2),b=e("h2",{id:"setzen-von-umgebungsvariablen",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#setzen-von-umgebungsvariablen","aria-hidden":"true"},"#"),n(" Setzen von Umgebungsvariablen")],-1),_=e("p",null,"Es gibt mehrere Möglichkeiten eine Umgebungsvariable zu setzen:",-1),f={id:"let-env",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#let-env","aria-hidden":"true"},"#",-1),x=e("code",null,"let-env",-1),w=s(`<p>Der <code>let-env</code> Befehl ist der direkteste Weg:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; let-env FOO = &#39;BAR&#39;
</code></pre></div><p><code>let-env</code> ist ähnlich wie der <strong>export</strong> Befehl in der bash.</p><p>Um zum Beispiel die <code>PATH</code> Variable zu ergänzen, wird folgendes eingegeben:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>let-env PATH = ($env.PATH | prepend &#39;/pfad/der/hinzu/kommt&#39;)
</code></pre></div><p>Mit <code>prepend</code> wird der Ordner an den Anfang von PATH gestellt und hat damit die höchste Priorität. Soll der Pfad ans Ende angehängt werden, so wird <code>append</code> verwendet.</p>`,6),O={id:"load-env",tabindex:"-1"},k=e("a",{class:"header-anchor",href:"#load-env","aria-hidden":"true"},"#",-1),z=e("code",null,"load-env",-1),B=e("p",null,[n("Wenn mehrere Umgebungsvariablen gesetzt werden sollen, so kann "),e("code",null,"load-env"),n(" eine ganze Tabelle mitgegeben werden. Diese besteht aus name/value Paaren, welche alle auf einmal geladen werden:")],-1),N=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> load-env { "BOB": "FOO", "JAY": "BAR" }
`)])],-1),S=e("h3",{id:"einmalig-verwendete-umgebungsvariablen",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#einmalig-verwendete-umgebungsvariablen","aria-hidden":"true"},"#"),n(" Einmalig verwendete Umgebungsvariablen")],-1),U={id:"aufruf-eines-befehls-mit-def-env",tabindex:"-1"},A=e("a",{class:"header-anchor",href:"#aufruf-eines-befehls-mit-def-env","aria-hidden":"true"},"#",-1),E=e("code",null,"def-env",-1),F=e("h3",{id:"exports-von-modulen",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#exports-von-modulen","aria-hidden":"true"},"#"),n(" Exports von Modulen")],-1),V=s(`<h2 id="gultigkeitsbereiche" tabindex="-1"><a class="header-anchor" href="#gultigkeitsbereiche" aria-hidden="true">#</a> Gültigkeitsbereiche</h2><p>Wenn eine Umgebungsvariable gesetzt wird, ist sie nur in ihrem Gültigkeitsbereich vorhanden (Im aktuellen Block und dessen Unterblocks)</p><p>Hier ein kleines Beispiel um den Gültigkeitsbereich zu demonstrieren:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; let-env FOO = &quot;BAR&quot;
&gt; do {
    let-env FOO = &quot;BAZ&quot;
    $env.FOO == &quot;BAZ&quot;
}
true
&gt; $env.FOO == &quot;BAR&quot;
true
</code></pre></div><h2 id="verzeichnis-wechsel" tabindex="-1"><a class="header-anchor" href="#verzeichnis-wechsel" aria-hidden="true">#</a> Verzeichnis Wechsel</h2>`,5),D=e("code",null,"cd",-1),R=e("code",null,"PWD",-1),P=e("h2",{id:"einmalig-verwendete-umgebungsvariablen-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#einmalig-verwendete-umgebungsvariablen-1","aria-hidden":"true"},"#"),n(" Einmalig verwendete Umgebungsvariablen")],-1),W=e("p",null,"Eine praktische Möglichkeit eine Umgebungsvariable einmalig zu setzen, ist inspiriert von Bash und anderen Shells:",-1),I=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> FOO=BAR echo $env.FOO
BAR
`)])],-1),T=e("code",null,"with-env",-1),$=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> with-env { FOO: BAR } { echo $env.FOO }
BAR
`)])],-1),M=e("code",null,"with-env",-1),C=e("h2",{id:"permanente-umgebungsvariablen",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#permanente-umgebungsvariablen","aria-hidden":"true"},"#"),n(" Permanente Umgebungsvariablen")],-1),K=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`# In config.nu
let-env FOO = 'BAR'
`)])],-1),L=e("h2",{id:"definition-einer-umgebungsvariablen-fur-selbst-definierten-befehl",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#definition-einer-umgebungsvariablen-fur-selbst-definierten-befehl","aria-hidden":"true"},"#"),n(" Definition einer Umgebungsvariablen für selbst definierten Befehl")],-1),H=e("code",null,"dev-env",-1),G=e("code",null,"def",-1),j=e("code",null,"export def",-1),q=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> def-env foo [] {
    let-env FOO = 'BAR'
}

> foo

> $env.FOO
BAR
`)])],-1),Z=e("h2",{id:"umgebungsvariablen-konvertieren",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#umgebungsvariablen-konvertieren","aria-hidden":"true"},"#"),n(" Umgebungsvariablen konvertieren")],-1),y=e("code",null,"ENV_CONVERSIONS",-1),Y={href:"https://github.com/nushell/nushell/blob/main/crates/nu-utils/src/sample_config/default_env.nu",target:"_blank",rel:"noopener noreferrer"},J=s(`<p>Nachdem beide <code>env.nu</code> und <code>config.nu</code> geladen wurden, wird jede existierende Umgebungsvariable, die mit <code>ENV_CONVERSIONS</code> definiert ist, gemäss ihrem <code>from_string</code> Feld in den Wert des entsprechenden Typs konvertiert. Externe Programme benötigen Strings als Umgebungsvariable. Deshalb muss jede nicht-string Variable zuerst konvertiert werden. Die Konvertierung von Wert -&gt; String erfolgt mit <code>to_string</code> innerhalb <code>ENV_CONVERSIONS</code> und wirdbei jedem externen Befehl ausgeführt.</p><p>Zur Illustration hier ein Beispiel. Diese Zeilen gehören in config.nu:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>let-env ENV_CONVERSIONS = {
    # ... you might have Path and PATH already there, add:
    FOO : {
        from_string: { |s| $s | split row &#39;-&#39; }
        to_string: { |v| $v | str join &#39;-&#39; }
    }
}
</code></pre></div><p>In einer Nushell Instanz gilt nun:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; with-env { FOO : &#39;a-b-c&#39; } { nu }  # runs Nushell with FOO env. var. set to &#39;a-b-c&#39;

&gt; $env.FOO
  0   a
  1   b
  2   c
</code></pre></div><p>Wie zu sehen ist <code>$env.FOO</code> nun eine Liste in einer neuen Nushell Instanz mit der neuen config. Die Konvertierung kann auch manuell getestet werden mit:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; do $env.ENV_CONVERSIONS.FOO.from_string &#39;a-b-c&#39;
</code></pre></div><p>Um die Konvertierun list -&gt; string zu testen:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>&gt; nu -c &#39;$env.FOO&#39;
a-b-c
</code></pre></div><p>Weil <code>nu</code> selber ein externer Befehl ist, übersetzt Nushell die <code>[ a b c ]</code> Liste gemäss <code>ENV_CONVERSIONS.FOO.to_string</code> und übergibt sie dem <code>nu</code> Prozess. Werden Befehle mit <code>nu -c</code> ausgeführt, so wird das config File nicht geladen. In diesem Fall wird die Konvertierung nicht durchgeführt und <code>FOO</code> als Text angezeigt. So können wir überprüfen, ob die Konvertierung erfolgreich war.</p><p>Dieser Schritt kann auch manuell ausgelöst werden mit <code>do $env.ENV_CONVERSIONS.FOO.to_string [a b c]</code></p>`,11),Q=e("code",null,"env",-1),X=e("code",null,"raw",-1),ee=e("code",null,"ENV_CONVERSIONS.<name>.to_string",-1),ne=e("code",null,"value",-1),te=e("code",null,"ENV_CONVERSIONS.<name>.from_string",-1),ie=e("code",null,"FOO",-1),ae=e("code",null,"to_string",-1),se=e("code",null,"raw",-1),de=e("code",null,"PROMPT_COMMAND",-1),re=e("code",null,"PATH",-1),le=e("code",null,"Path",-1),oe=e("p",null,[e("em",null,[n("(Wichtig! Die Umgebungs-Konvertierung string -> value findet statt "),e("strong",null,"nachdem"),n(" env.nu und config.nu ausgewertet wurden. Alle Umgebungsvariablen in env.nu und config.nu sind immer noch Strings solange sie nicht manuell auf andere Werte gesetzt wurden.)")])],-1),ue=e("h2",{id:"entfernen-von-umgebungsvariablen",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#entfernen-von-umgebungsvariablen","aria-hidden":"true"},"#"),n(" Entfernen von Umgebungsvariablen")],-1),ce=e("code",null,"hide",-1),ge=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> let-env FOO = 'BAR'
...
> hide FOO
`)])],-1),he=e("p",null,"Dieses Verstecken im Gültigkeitsbereich erlaubt es gleichzeitig temporär eine Variabel zu entfernen ohne dass man die höher gelegene Umgebung modifiziert wird:",-1),me=e("div",{class:"language-text","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`> let-env FOO = 'BAR'
> do {
    hide FOO
    # $env.FOO does not exist
  }
> $env.FOO
BAR
`)])],-1);function ve(be,_e){const i=d("RouterLink"),r=d("ExternalLinkIcon");return o(),u("div",null,[g,h,e("p",null,[n("Die aktuellen Umbegungsvariablen werden mit dem "),t(i,{to:"/book/commands/env.html"},{default:a(()=>[m]),_:1}),n(" Befehl ausgegeben:")]),v,e("p",null,[n("Die Umgebung wird erstellt durch Nus "),t(i,{to:"/de/book/configuration.html"},{default:a(()=>[n("Konfigurations-Datei")]),_:1}),n(" und von der Umgebung, in der Nu gestartet wurde.")]),b,_,e("h3",f,[p,n(),t(i,{to:"/book/commands/let-env.html"},{default:a(()=>[x]),_:1})]),w,e("h3",O,[k,n(),t(i,{to:"/book/commands/load-env.html"},{default:a(()=>[z]),_:1})]),B,N,S,e("p",null,[n("Dies sind Variablen, welche nur innerhalb eines Blocks gültig sind. Siehe "),t(i,{to:"/de/book/environment.html#single-use-environment-variables"},{default:a(()=>[n("Einmalig verwendete Umgebungsvariablen")]),_:1}),n(" für Details.")]),e("h3",U,[A,n(" Aufruf eines Befehls mit "),t(i,{to:"/book/commands/def-env.html"},{default:a(()=>[E]),_:1})]),e("p",null,[n("Siehe "),t(i,{to:"/de/book/environment.html#defining-environment-from-custom-commands"},{default:a(()=>[n("Definiere Umgebung aus eigenen Befehlen")]),_:1}),n(" für Details.")]),F,e("p",null,[n("Siehe "),t(i,{to:"/de/book/modules.html"},{default:a(()=>[n("Module")]),_:1}),n(" für Details.")]),V,e("p",null,[n("Etwas was in einer Shell häufig vorkommt ist das wechseln des Verzeichnisses mit dem "),t(i,{to:"/book/commands/cd.html"},{default:a(()=>[D]),_:1}),n(" Befehl. In der Nushell ist dies identisch mit dem setzen der "),R,n(" Umgebungsvariablen. Dies wiederum folgt den gleichen Regeln wie das setzen anderer Umgebungsvariablen (wie z.B. Gültigkeitsbereich)")]),P,W,I,e("p",null,[n("Es kann auch "),t(i,{to:"/book/commands/with-env.html"},{default:a(()=>[T]),_:1}),n(" verwendet werden um expliziter zu sein:")]),$,e("p",null,[n("Der "),t(i,{to:"/book/commands/with-env.html"},{default:a(()=>[M]),_:1}),n(' Befehl setzt die Umgebungsvariable temporär (hier wird die Variable "FOO" auf den Wert "BAR" gesetzt)')]),C,e("p",null,[n("Umgebungsvariablen können beim Start von Nushell gesetzt werden. Dafür werden sie in der "),t(i,{to:"/de/book/configuration.html"},{default:a(()=>[n("Nu Konfigurations Datei")]),_:1}),n(" gesetzt und sind dann für die gesamte Laufzeit von Nushell verfügbar. Zum Beispiel:")]),K,L,e("p",null,[n("Aufgrund der Gültigkeitsregeln ist eine Umgebungsvariable, welche innerhalb eines selbstdefinierten Befehls gesetzt ist, auch nur in dessen Block gültig. Wird sie jedoch mit "),t(i,{to:"/book/commands/def-env.html"},{default:a(()=>[H]),_:1}),n(" anstatt "),t(i,{to:"/book/commands/def.html"},{default:a(()=>[G]),_:1}),n(" gesetzt, so wird sie beim verlassen des Blocks erhalten bleiben. (Gilt auch für "),j,n(", siehe "),t(i,{to:"/de/book/modules.html"},{default:a(()=>[n("Modules")]),_:1}),n(")")]),q,Z,e("p",null,[n("Mit "),y,n(" kann eine Umgebungsvariable von einem string zu einem Wert konvertiert werden. Zum Beispiel beinhaltet die "),e("a",Y,[n("default environment config"),t(r)]),n(" bereits eine Konvertierung der PATH Umgebungsvariablen (sowie der Path Variablen in Windows) von einem String in eine List.")]),J,e("p",null,[n("Zurückschauend auf den "),t(i,{to:"/book/commands/env.html"},{default:a(()=>[Q]),_:1}),n(" Befehl, die "),X,n(" Spalte zeigt die Werte, die mit "),ee,n(" übersetzt wurden. Die "),ne,n(" Spalte zeigt die Werte, die Nushell benutzt (Das Resultat von "),te,n(" wie bei "),ie,n(") Wenn der Wert kein String ist und keine "),ae,n(" Konvertierung angewendet wird, wird er nicht an einen externen Befehl weitergeleitet (siehe die "),se,n(" Spalte von "),de,n(") Eine Ausnahme ist die "),re,n(" Variable ("),le,n(" in Windows): Standardmässig wird diese von einem String in eine Liste konvertiert beim Start und von einer Liste in einen String, wenn externe Befehle gestartet werden.")]),oe,ue,e("p",null,[n("Umgebungsvariablen können im aktuellen Gültigkeitsbereich entfernt werden via "),t(i,{to:"/book/commands/hide.html"},{default:a(()=>[ce]),_:1}),n(":")]),ge,he,me,e("p",null,[n("Mehr Informationen über Verstecken findet sich im Kapitel "),t(i,{to:"/de/book/modules.html"},{default:a(()=>[n("Modules")]),_:1})])])}const pe=l(c,[["render",ve],["__file","environment.html.vue"]]);export{pe as default};
