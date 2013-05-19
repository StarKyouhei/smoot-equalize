<h1>JQuery Smooth Scroll Equalize</h1>
<p>プラグインにするほどでもない、均等なスピードで移動するスムーズスクロール jQuery プラグイン</p>
<h2>使い方</h2>
<h3>HTML</h3>
<p>href属性にスクロール先のIDを指定（"#"のみの場合はトップへ)</p>
<pre>
<code>
<a href="#" class="scroll">Topへ戻る</a>
<a href="#sec1" class="scroll">ID sec1へ</a>
</code>
</pre>
<h3>JavaScript</h3>
<p>jquery.smoothEqualize.jsを読み込んで下記の様に指定</p>
<pre>
$('.scroll').smoothEqualize();
</pre>
<h3>オプション</h3>
<p>オプションはスピードをコントロールする数値のみです。<br>数値が低ければゆっくり移動します。デフォルトは"6"です。<br>（イージングオプションもついていません。。。）</p>
<pre>
$('.scroll').smoothEqualize(2);
</pre>
<h2>ライセンス</h2>
<p><a href="http://opensource.org/licenses/mit-license.php">MIT License.</a></p>
