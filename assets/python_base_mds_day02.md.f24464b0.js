import{_ as n,y as s,x as a,W as e}from"./plugin-vue_export-helper.abe1cdd2.js";var p="/python_base/assets/image-20200927080728463.ba4e160d.png",l="/python_base/assets/image-20190425064113975.293c5408.png",t="/python_base/assets/image-20200927091126038.6755de54.png",o="/python_base/assets/image-20200927091944161.daf8b0b7.png",r="/python_base/assets/image-20200927093647690.31758e9c.png",c="/python_base/assets/image-20200927101714781.a2fce574.png",i="/python_base/assets/image-20200927103254674.cbd1780e.png",u="/python_base/assets/image-20200927110323504.043e7032.png",b="/python_base/assets/image-20200927111455978.10b6b960.png",k="/python_base/assets/image-20190425065026778.55c876b4.png",m="/python_base/assets/image-20200927114353210.b9d5afcd.png",d="/python_base/assets/image-20200927120512888.10ad0362.png",h="/python_base/assets/image-20200927121200980.2ce2f68c.png",g="/python_base/assets/image-20200927121218351.4eb401b0.png",y="/python_base/assets/image-20200927122451099.bb6d7eff.png",f="/python_base/assets/image-20200927144927079.f945b835.png",v="/python_base/assets/image-20200927151955799.82245676.png",_="/python_base/assets/image-20200927154556910.2eacbebb.png",w="/python_base/assets/image-20200927154920465.64d89e31.png",x="/python_base/assets/image-20200927160200298.f688dce8.png";const E='{"title":"0. \u590D\u4E60\u548C\u53CD\u9988","description":"","frontmatter":{},"headers":[{"level":2,"title":"0. \u590D\u4E60\u548C\u53CD\u9988","slug":"_0-\u590D\u4E60\u548C\u53CD\u9988"},{"level":2,"title":"1. if \u5224\u65AD\u8BED\u53E5","slug":"_1-if-\u5224\u65AD\u8BED\u53E5"},{"level":3,"title":"If \u5224\u65AD\u7684\u57FA\u672C\u683C\u5F0F","slug":"if-\u5224\u65AD\u7684\u57FA\u672C\u683C\u5F0F"},{"level":3,"title":"if else \u7ED3\u6784","slug":"if-else-\u7ED3\u6784"},{"level":3,"title":"Debug \u8C03\u8BD5","slug":"debug-\u8C03\u8BD5"},{"level":3,"title":"if elif \u7ED3\u6784","slug":"if-elif-\u7ED3\u6784"},{"level":3,"title":"if \u5D4C\u5957","slug":"if-\u5D4C\u5957"},{"level":3,"title":"\u731C\u62F3\u6E38\u620F","slug":"\u731C\u62F3\u6E38\u620F"},{"level":3,"title":"\u4E09\u76EE\u8FD0\u7B97","slug":"\u4E09\u76EE\u8FD0\u7B97"},{"level":2,"title":"\u5FAA\u73AF","slug":"\u5FAA\u73AF"},{"level":3,"title":"\u5FAA\u73AF\u7684\u57FA\u672C\u8BED\u6CD5","slug":"\u5FAA\u73AF\u7684\u57FA\u672C\u8BED\u6CD5"},{"level":3,"title":"\u5E94\u7528","slug":"\u5E94\u7528"},{"level":3,"title":"\u5FAA\u73AF\u5D4C\u5957","slug":"\u5FAA\u73AF\u5D4C\u5957"},{"level":2,"title":"for \u5FAA\u73AF\u904D\u5386","slug":"for-\u5FAA\u73AF\u904D\u5386"},{"level":3,"title":"\u5FAA\u73AF\u6253\u5370\u76F4\u89D2\u4E09\u89D2\u5F62","slug":"\u5FAA\u73AF\u6253\u5370\u76F4\u89D2\u4E09\u89D2\u5F62"},{"level":3,"title":"Break \u548C continue","slug":"break-\u548C-continue"},{"level":3,"title":"\u5FAA\u73AF else \u7ED3\u6784","slug":"\u5FAA\u73AF-else-\u7ED3\u6784"},{"level":2,"title":"\u603B\u7ED3\u8865\u5145","slug":"\u603B\u7ED3\u8865\u5145"}],"relativePath":"python_base/mds/day02.md","lastUpdated":1655281117536}',T={},q=e('<h2 id="_0-\u590D\u4E60\u548C\u53CD\u9988" tabindex="-1">0. \u590D\u4E60\u548C\u53CD\u9988 <a class="header-anchor" href="#_0-\u590D\u4E60\u548C\u53CD\u9988" aria-hidden="true">#</a></h2><p><img src="'+p+`" alt="image-20200927080728463"></p><div class="language-python line-numbers-mode"><pre><code>\u5355\u5F15\u53F7\u548C\u53CC\u5F15\u53F7\u662F\u6CA1\u6709\u533A\u522B\u7684

\u9700\u8981\u5C06\u6570\u5B57\u7C7B\u578B\u7684\u5B57\u7B26\u4E32\u8F6C\u6362\u4E3A\u6570\u5B57\u7C7B\u578B<span class="token punctuation">(</span><span class="token builtin">int</span> <span class="token builtin">float</span> <span class="token punctuation">)</span><span class="token punctuation">,</span> \u5C31\u53EF\u4EE5\u4F7F\u7528 <span class="token builtin">eval</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> \u4E5F\u53EF\u4EE5\u4E0D\u9002\u7528<span class="token punctuation">,</span>\u76F4\u63A5\u662F\u6240\u6709 <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  \u6216\u8005 <span class="token builtin">float</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="_1-if-\u5224\u65AD\u8BED\u53E5" tabindex="-1">1. if \u5224\u65AD\u8BED\u53E5 <a class="header-anchor" href="#_1-if-\u5224\u65AD\u8BED\u53E5" aria-hidden="true">#</a></h2><p><img src="`+l+`" alt="image-20190425064113975"></p><h3 id="if-\u5224\u65AD\u7684\u57FA\u672C\u683C\u5F0F" tabindex="-1">If \u5224\u65AD\u7684\u57FA\u672C\u683C\u5F0F <a class="header-anchor" href="#if-\u5224\u65AD\u7684\u57FA\u672C\u683C\u5F0F" aria-hidden="true">#</a></h3><div class="language-python line-numbers-mode"><pre><code><span class="token keyword">if</span> \u5224\u65AD\u6761\u4EF6<span class="token punctuation">:</span>
    \u5224\u65AD\u6761\u4EF6\u4E3A <span class="token boolean">True</span><span class="token punctuation">,</span>\u4F1A\u6267\u884C\u7684\u4EE3\u7801
    \u5224\u65AD\u6761\u4EF6\u4E3A <span class="token boolean">True</span><span class="token punctuation">,</span>\u4F1A\u6267\u884C\u7684\u4EE3\u7801
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

\u9876\u683C\u4E66\u5199\u7684\u4EE3\u7801<span class="token punctuation">,</span>\u4EE3\u8868\u548C <span class="token keyword">if</span> \u5224\u65AD\u6CA1\u6709\u5173\u7CFB
\u5728 python \u4E2D\u4F7F\u7528\u7F29\u8FDB<span class="token punctuation">,</span>\u4EE3\u66FF\u4EE3\u7801\u7684\u5C42\u7EA7\u5173\u7CFB<span class="token punctuation">,</span> \u5728 <span class="token keyword">if</span> \u8BED\u53E5\u7684\u7F29\u8FDB\u5185<span class="token punctuation">,</span>\u5C5E\u4E8E <span class="token keyword">if</span> \u8BED\u53E5\u7684\u4EE3\u7801\u5757<span class="token punctuation">(</span>\u591A\u884C\u4EE3\u7801\u7684\u610F\u601D<span class="token punctuation">)</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><blockquote><p>\u6848\u4F8B\u9700\u6C42\uFF1A</p><ol><li>\u901A\u8FC7\u7528\u6237\u952E\u76D8\u8F93\u5165\uFF0C\u83B7\u53D6\u5E74\u9F84</li><li>\u5224\u65AD\u5E74\u9F84\u662F\u5426\u6EE1\u8DB318\u5C81\uFF0C\u6EE1\u8DB3\u8F93\u51FA<code>\u54E518\u5C81\u4E86\uFF0C\u53EF\u4EE5\u8FDB\u5165\u7F51\u5427\u4E3A\u6240\u6B32\u4E3A\u4E86</code></li><li>\u7A0B\u5E8F\u6700\u540E\u8F93\u51FA\uFF0C<code>if \u5224\u65AD\u7ED3\u675F</code>(\u4E0D\u7BA1\u662F\u5426\u6EE1\u8DB3\uFF0C\u90FD\u4F1A\u8F93\u51FA)</li></ol></blockquote><p><img src="`+t+`" alt="image-20200927091126038"></p><h3 id="if-else-\u7ED3\u6784" tabindex="-1">if else \u7ED3\u6784 <a class="header-anchor" href="#if-else-\u7ED3\u6784" aria-hidden="true">#</a></h3><div class="language-python line-numbers-mode"><pre><code><span class="token keyword">if</span> \u5224\u65AD\u6761\u4EF6<span class="token punctuation">:</span>
    \u5224\u65AD\u6761\u4EF6\u4E3A <span class="token boolean">True</span><span class="token punctuation">,</span>\u4F1A\u6267\u884C\u7684\u4EE3\u7801
    \u5224\u65AD\u6761\u4EF6\u4E3A <span class="token boolean">True</span><span class="token punctuation">,</span>\u4F1A\u6267\u884C\u7684\u4EE3\u7801
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    \u5224\u65AD\u6761\u4EF6\u4E3A <span class="token boolean">False</span><span class="token punctuation">,</span> \u4F1A\u6267\u884C\u7684\u4EE3\u7801
    \u5224\u65AD\u6761\u4EF6\u4E3A <span class="token boolean">False</span><span class="token punctuation">,</span> \u4F1A\u6267\u884C\u7684\u4EE3\u7801
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    
    
<span class="token keyword">if</span> \u548C <span class="token keyword">else</span> \u53EA\u4F1A\u6267\u884C\u5176\u4E2D\u7684\u4E00\u4E2A<span class="token punctuation">,</span>    
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p><img src="`+o+'" alt="image-20200927091944161"></p><h3 id="debug-\u8C03\u8BD5" tabindex="-1">Debug \u8C03\u8BD5 <a class="header-anchor" href="#debug-\u8C03\u8BD5" aria-hidden="true">#</a></h3><blockquote><ol><li>\u53EF\u4EE5\u67E5\u770B\u4EE3\u7801\u7684\u6267\u884C\u8FC7\u7A0B</li><li>\u53EF\u4EE5\u6392\u67E5\u9519\u8BEF</li></ol></blockquote><p>\u6B65\u9AA4:</p><ol><li><p>\u6253\u65AD\u70B9(\u4E00\u822C\u53EF\u4EE5\u5728\u4EE3\u7801\u7684\u5F00\u59CB\u6253\u4E0A\u65AD\u70B9,\u6216\u8005\u5728\u67E5\u770B\u4EE3\u7801\u7684\u5730\u65B9\u6253\u65AD\u70B9)</p></li><li><p>\u53F3\u952E debug \u8FD0\u884C\u4EE3\u7801</p><p><img src="'+r+`" alt="image-20200927093647690"></p></li><li><p>\u70B9\u51FB \u4E0B\u4E00\u6B65, \u67E5\u770B\u4EE3\u7801\u6267\u884C\u7684\u8FC7\u7A0B</p></li></ol><h3 id="if-elif-\u7ED3\u6784" tabindex="-1">if elif \u7ED3\u6784 <a class="header-anchor" href="#if-elif-\u7ED3\u6784" aria-hidden="true">#</a></h3><div class="language-python line-numbers-mode"><pre><code><span class="token keyword">if</span> 	\u5224\u65AD\u6761\u4EF6<span class="token number">1</span><span class="token punctuation">:</span>
    \u5224\u65AD\u6761\u4EF6<span class="token number">1</span>\u6210\u7ACB<span class="token punctuation">,</span>\u6267\u884C\u7684\u4EE3\u7801
<span class="token keyword">elif</span> \u5224\u65AD\u6761\u4EF6<span class="token number">2</span><span class="token punctuation">:</span>
    \u5224\u65AD\u6761\u4EF6<span class="token number">1</span>\u4E0D\u6210\u7ACB<span class="token punctuation">,</span>\u5224\u65AD\u6761\u4EF6<span class="token number">2</span> \u6210\u7ACB<span class="token punctuation">,</span>\u4F1A\u6267\u884C\u7684\u4EE3\u7801
<span class="token keyword">else</span><span class="token punctuation">:</span>
    \u5224\u65AD\u6761\u4EF6<span class="token number">1</span>\u548C\u5224\u65AD\u6761\u4EF6<span class="token number">2</span>\u90FD\u4E0D\u6210\u7ACB<span class="token punctuation">,</span>\u6267\u884C\u7684\u4EE3\u7801
    
<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>
<span class="token keyword">if</span> \u5224\u65AD\u6761\u4EF6<span class="token number">1</span><span class="token punctuation">:</span>
    \u5224\u65AD\u6761\u4EF6<span class="token number">1</span>\u6210\u7ACB\u6267\u884C\u7684\u4EE3\u7801
    
<span class="token keyword">if</span> \u5224\u65AD\u6761\u4EF6<span class="token number">2</span><span class="token punctuation">:</span>
    \u5224\u65AD\u6761\u4EF6<span class="token number">2</span> \u6210\u7ACB\u6267\u884C\u7684\u4EE3\u7801
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><blockquote><p>\u9700\u6C42\uFF1A</p><ol><li>\u6210\u7EE9\u5927\u4E8E\u7B49\u4E8E90 \uFF0C\u8F93\u51FA\u4F18\u79C0</li><li>\u6210\u7EE9\u5927\u4E8E\u7B49\u4E8E80\uFF0C\u5C0F\u4E8E90\uFF0C\u8F93\u51FA\u826F\u597D</li><li>\u6210\u7EE9\u5927\u4E8E\u7B49\u4E8E60\uFF0C\u5C0F\u4E8E80\uFF0C\u8F93\u51FA\u53CA\u683C</li><li>\u5C0F\u4E8E60\uFF0C\u8F93\u51FA\u4E0D\u53CA\u683C</li></ol></blockquote><p><img src="`+c+`" alt="image-20200927101714781"></p><h3 id="if-\u5D4C\u5957" tabindex="-1">if \u5D4C\u5957 <a class="header-anchor" href="#if-\u5D4C\u5957" aria-hidden="true">#</a></h3><div class="language-python line-numbers-mode"><pre><code><span class="token keyword">if</span> \u5224\u65AD\u6761\u4EF6<span class="token number">1</span><span class="token punctuation">:</span>
    \u5224\u65AD\u6761\u4EF6<span class="token number">1</span> \u6210\u7ACB<span class="token punctuation">,</span>\u4F1A\u6267\u884C\u7684\u4EE3\u7801
    <span class="token keyword">if</span> \u5224\u65AD\u6761\u4EF6<span class="token number">2</span><span class="token punctuation">:</span>
        \u5224\u65AD\u6761\u4EF6<span class="token number">1</span>\u6210\u7ACB<span class="token punctuation">,</span> \u5224\u65AD\u6761\u4EF6<span class="token number">2</span>\u6210\u7ACB\u6267\u884C\u7684\u4EE3\u7801
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        \u5224\u65AD\u6761\u4EF6<span class="token number">1</span>\u6210\u7ACB<span class="token punctuation">,</span> \u5224\u65AD\u6761\u4EF6<span class="token number">2</span>\u4E0D\u6210\u7ACB\u6267\u884C\u7684\u4EE3\u7801
<span class="token keyword">else</span><span class="token punctuation">:</span>
    \u5224\u65AD\u6761\u4EF6<span class="token number">1</span>\u4E0D\u6210\u7ACB<span class="token punctuation">,</span>\u4F1A\u6267\u884C\u7684\u4EE3\u7801
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><img src="`+i+`" alt="image-20200927103254674"></p><h3 id="\u731C\u62F3\u6E38\u620F" tabindex="-1">\u731C\u62F3\u6E38\u620F <a class="header-anchor" href="#\u731C\u62F3\u6E38\u620F" aria-hidden="true">#</a></h3><div class="language-python line-numbers-mode"><pre><code><span class="token keyword">import</span> random  <span class="token comment"># \u5BFC\u5165\u968F\u673A\u6570\u6A21\u5757</span>
<span class="token comment"># \u4EA7\u751F [a, b] \u4E4B\u95F4\u7684\u968F\u673A\u6574\u6570,\u5305\u542B a \u548C b</span>
num <span class="token operator">=</span> random<span class="token punctuation">.</span>randint<span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> 
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><img src="`+u+`" alt="image-20200927110323504"></p><h3 id="\u4E09\u76EE\u8FD0\u7B97" tabindex="-1">\u4E09\u76EE\u8FD0\u7B97 <a class="header-anchor" href="#\u4E09\u76EE\u8FD0\u7B97" aria-hidden="true">#</a></h3><blockquote><p>if else \u7ED3\u6784\u53D8\u5F62</p></blockquote><div class="language-python line-numbers-mode"><pre><code><span class="token keyword">if</span> \u5224\u65AD\u6761\u4EF6<span class="token number">1</span><span class="token punctuation">:</span>
    \u8868\u8FBE\u5F0F<span class="token number">1</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    \u8868\u8FBE\u5F0F<span class="token number">2</span>
    
\u5224\u65AD\u6761\u4EF6\u6210\u7ACB<span class="token punctuation">,</span>\u6267\u884C\u8868\u8FBE\u5F0F <span class="token number">1</span><span class="token punctuation">,</span> \u6761\u4EF6\u4E0D\u6210\u7ACB<span class="token punctuation">,</span>\u6267\u884C\u8868\u8FBE\u5F0F <span class="token number">2</span>

\u53D8\u91CF <span class="token operator">=</span> \u8868\u8FBE\u5F0F<span class="token number">1</span> <span class="token keyword">if</span> \u5224\u65AD\u6761\u4EF6 <span class="token keyword">else</span> \u8868\u8FBE\u5F0F<span class="token number">2</span>  <span class="token comment"># \u63A8\u8350\u4F7F\u7528\u6241\u5E73\u5316\u4EE3\u7801</span>

\u53D8\u91CF\u6700\u7EC8\u5B58\u50A8\u7684\u7ED3\u6784\u662F<span class="token punctuation">:</span> 
    \u5224\u65AD\u6761\u4EF6\u6210\u7ACB<span class="token punctuation">,</span>\u8868\u8FBE\u5F0F<span class="token number">1</span>\u7684\u503C<span class="token punctuation">,</span> 
    \u6761\u4EF6\u4E0D\u6210\u7ACB<span class="token punctuation">,</span>\u8868\u8FBE\u5F0F<span class="token number">2</span>\u7684\u503C
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p><img src="`+b+'" alt="image-20200927111455978"></p><h2 id="\u5FAA\u73AF" tabindex="-1">\u5FAA\u73AF <a class="header-anchor" href="#\u5FAA\u73AF" aria-hidden="true">#</a></h2><p><img src="'+k+`" alt="image-20190425065026778"></p><h3 id="\u5FAA\u73AF\u7684\u57FA\u672C\u8BED\u6CD5" tabindex="-1">\u5FAA\u73AF\u7684\u57FA\u672C\u8BED\u6CD5 <a class="header-anchor" href="#\u5FAA\u73AF\u7684\u57FA\u672C\u8BED\u6CD5" aria-hidden="true">#</a></h3><div class="language-python line-numbers-mode"><pre><code><span class="token keyword">while</span> \u5224\u65AD\u6761\u4EF6<span class="token punctuation">:</span>
    \u5224\u65AD\u6761\u4EF6\u6210\u7ACB<span class="token punctuation">,</span>\u6267\u884C\u7684\u4EE3\u7801
    \u5224\u65AD\u6761\u4EF6\u6210\u7ACB<span class="token punctuation">,</span>\u6267\u884C\u7684\u4EE3\u7801
    
\u4E0D\u5728 <span class="token keyword">while</span> \u7684\u7F29\u8FDB\u5185<span class="token punctuation">,</span>\u4EE3\u8868\u548C\u5FAA\u73AF\u6CA1\u6709\u5173\u7CFB    

<span class="token keyword">while</span> \u548C <span class="token keyword">if</span> \u7684\u533A\u522B<span class="token punctuation">:</span>
    <span class="token keyword">if</span> \u7684\u4EE3\u7801\u5757<span class="token punctuation">,</span>\u6761\u4EF6\u6210\u7ACB<span class="token punctuation">,</span>\u53EA\u4F1A\u6267\u884C\u4E00\u6B21
    <span class="token keyword">while</span> \u7684\u4EE3\u7801\u5757<span class="token punctuation">,</span>\u53EA\u8981\u6761\u4EF6\u6210\u7ACB<span class="token punctuation">,</span>\u5C31\u4F1A\u4E00\u76F4\u6267\u884C
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><img src="`+m+`" alt="image-20200927114353210"></p><div class="language-python line-numbers-mode"><pre><code><span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>  <span class="token comment"># \u65E0\u9650\u5FAA\u73AF</span>
    \u4EE3\u7801
    
    
\u6B7B\u5FAA\u73AF<span class="token punctuation">:</span> \u76F8\u5F53\u4E8E\u662F\u4EE3\u7801\u7684 bug<span class="token punctuation">,</span>\u9519\u8BEF
\u65E0\u9650\u5FAA\u73AF<span class="token punctuation">:</span> \u4EBA\u4E3A\u4E66\u5199\u7684<span class="token punctuation">,</span>\u6545\u610F\u8FD9\u6837\u5199\u7684
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="\u5E94\u7528" tabindex="-1">\u5E94\u7528 <a class="header-anchor" href="#\u5E94\u7528" aria-hidden="true">#</a></h3><p><img src="`+d+'" alt="image-20200927120512888"></p><p><img src="'+h+'" alt="image-20200927121200980"></p><p><img src="'+g+`" alt="image-20200927121218351"></p><h3 id="\u5FAA\u73AF\u5D4C\u5957" tabindex="-1">\u5FAA\u73AF\u5D4C\u5957 <a class="header-anchor" href="#\u5FAA\u73AF\u5D4C\u5957" aria-hidden="true">#</a></h3><div class="language-python line-numbers-mode"><pre><code><span class="token keyword">while</span> \u5224\u65AD\u6761\u4EF6<span class="token number">1</span><span class="token punctuation">:</span>
    \u4EE3\u7801<span class="token number">1</span>
    <span class="token keyword">while</span> \u5224\u65AD\u6761\u4EF6<span class="token number">2</span><span class="token punctuation">:</span>
        \u4EE3\u7801<span class="token number">2</span>

<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>
\u4EE3\u7801 <span class="token number">1</span> \u6267\u884C\u4E00\u6B21<span class="token punctuation">,</span>\u4EE3\u7801\u4F1A\u6267\u884C\u591A\u6B21
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><img src="`+y+`" alt="image-20200927122451099"></p><h2 id="for-\u5FAA\u73AF\u904D\u5386" tabindex="-1">for \u5FAA\u73AF\u904D\u5386 <a class="header-anchor" href="#for-\u5FAA\u73AF\u904D\u5386" aria-hidden="true">#</a></h2><div class="language-python line-numbers-mode"><pre><code><span class="token keyword">for</span> \u53D8\u91CF <span class="token keyword">in</span> \u5B57\u7B26\u4E32<span class="token punctuation">:</span>
    \u4EE3\u7801
<span class="token keyword">for</span> \u5FAA\u73AF\u4E5F\u79F0\u4E3A <span class="token keyword">for</span> \u904D\u5386<span class="token punctuation">,</span>\u4F1A\u5C06\u5B57\u7B26\u4E32\u4E2D\u7684\u5B57\u7B26\u5168\u90E8\u53D6\u5230    
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><img src="`+f+`" alt="image-20200927144927079"></p><h3 id="\u5FAA\u73AF\u6253\u5370\u76F4\u89D2\u4E09\u89D2\u5F62" tabindex="-1">\u5FAA\u73AF\u6253\u5370\u76F4\u89D2\u4E09\u89D2\u5F62 <a class="header-anchor" href="#\u5FAA\u73AF\u6253\u5370\u76F4\u89D2\u4E09\u89D2\u5F62" aria-hidden="true">#</a></h3><div class="language-"><pre><code>\u884C   *\u4E2A\u6570
1	1
2	2
3	3
4	4
n	n
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p><img src="`+v+`" alt="image-20200927151955799"></p><h3 id="break-\u548C-continue" tabindex="-1">Break \u548C continue <a class="header-anchor" href="#break-\u548C-continue" aria-hidden="true">#</a></h3><div class="language-python line-numbers-mode"><pre><code><span class="token number">1.</span> <span class="token keyword">break</span> \u548C <span class="token keyword">continue</span> \u662F python \u4E24\u4E2A\u5173\u952E\u5B57
<span class="token number">2.</span> <span class="token keyword">break</span> \u548C <span class="token keyword">continue</span> \u53EA\u80FD\u7528\u5728\u5FAA\u73AF\u4E2D
<span class="token number">3.</span> <span class="token keyword">break</span> \u662F\u7EC8\u6B62\u5FAA\u73AF\u7684\u6267\u884C<span class="token punctuation">,</span> \u5373\u5FAA\u73AF\u4EE3\u7801\u9047\u5230 <span class="token keyword">break</span><span class="token punctuation">,</span>\u5C31\u4E0D\u518D\u5FAA\u73AF\u4E86
	<span class="token keyword">continue</span> \u662F\u7ED3\u675F\u672C\u6B21\u5FAA\u73AF<span class="token punctuation">,</span>\u7EE7\u7EED\u4E0B\u4E00\u6B21\u5FAA\u73AF<span class="token punctuation">,</span> \u5373\u672C\u6B21\u5FAA\u73AF\u5269\u4E0B\u7684\u4EE3\u7801\u4E0D\u518D\u6267\u884C<span class="token punctuation">,</span>\u4F46\u4F1A\u8FDB\u884C\u4E0B\u4E00\u6B21\u5FAA\u73AF
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><img src="`+_+'" alt="image-20200927154556910"></p><p><img src="'+w+`" alt="image-20200927154920465"></p><h3 id="\u5FAA\u73AF-else-\u7ED3\u6784" tabindex="-1">\u5FAA\u73AF else \u7ED3\u6784 <a class="header-anchor" href="#\u5FAA\u73AF-else-\u7ED3\u6784" aria-hidden="true">#</a></h3><div class="language-python line-numbers-mode"><pre><code><span class="token keyword">for</span> x <span class="token keyword">in</span> xx<span class="token punctuation">:</span>
    <span class="token keyword">if</span> xxx<span class="token punctuation">:</span>
        xx  <span class="token comment"># if \u5224\u65AD\u6761\u4EF6\u6210\u7ACB\u4F1A\u6267\u884C</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        xxx  <span class="token comment"># if \u5224\u65AD\u6761\u4EF6\u4E0D\u6210\u7ACB,\u4F1A\u6267\u884C</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    xxx  <span class="token comment"># for \u5FAA\u73AF\u4EE3\u7801\u8FD0\u884C\u7ED3\u675F,\u4F46\u662F\u4E0D\u662F\u88AB break \u7EC8\u6B62\u7684\u65F6\u5019\u4F1A\u6267\u884C</span>
    
\u9700\u6C42<span class="token punctuation">:</span>
    \u6709\u4E00\u4E2A\u5B57\u7B26\u4E32 <span class="token string">&#39;hello python&#39;</span><span class="token punctuation">,</span> \u60F3\u8981\u5224\u65AD\u8FD9\u4E2A\u5B57\u7B26\u4E32\u4E2D\u6709\u6CA1\u6709\u5305\u542B p \u8FD9\u4E2A\u5B57\u7B26<span class="token punctuation">,</span>\u5982\u679C\u5305\u542B<span class="token punctuation">,</span>\u5C31\u8F93\u51FA<span class="token punctuation">,</span> \u5305\u542B p<span class="token punctuation">,</span> \u5982\u679C\u6CA1\u6709 p <span class="token punctuation">,</span>\u5C31\u8F93\u51FA<span class="token punctuation">,</span>\u4E0D\u5305\u542B
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><img src="`+x+`" alt="image-20200927160200298"></p><h2 id="\u603B\u7ED3\u8865\u5145" tabindex="-1">\u603B\u7ED3\u8865\u5145 <a class="header-anchor" href="#\u603B\u7ED3\u8865\u5145" aria-hidden="true">#</a></h2><div class="language-python line-numbers-mode"><pre><code>num <span class="token operator">=</span> <span class="token number">76</span>
\u4F7F\u7528\u4EE3\u7801\u7684\u65B9\u6CD5<span class="token punctuation">,</span>\u6C42\u51FA\u8FD9\u4E2A\u6570\u5B57\u7684\u4E2A\u4F4D\u6570\u548C\u5341\u4F4D\u6570
\u4E2A\u4F4D\u6570<span class="token punctuation">:</span> num <span class="token operator">%</span> <span class="token number">10</span> 
\u5341\u4F4D\u6570<span class="token punctuation">:</span> num <span class="token operator">//</span> <span class="token number">10</span>
    
    
\u5224\u65AD <span class="token keyword">if</span> <span class="token keyword">elif</span>  <span class="token keyword">else</span> 

<span class="token keyword">if</span> \u5224\u65AD\u6761\u4EF6<span class="token punctuation">:</span>
    <span class="token keyword">pass</span>  <span class="token comment"># \u5360\u4F4D,\u7A7A\u4EE3\u7801 \u8BA9\u4EE3\u7801\u4E0D\u62A5\u9519</span>
<span class="token keyword">elif</span> \u5224\u65AD\u6761\u4EF6<span class="token punctuation">:</span>
    <span class="token keyword">pass</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>


\u5FAA\u73AF<span class="token punctuation">:</span> \u91CD\u590D\u505A\u4E00\u4EF6\u4E8B <span class="token keyword">while</span>   <span class="token keyword">for</span>
<span class="token keyword">while</span> \u5224\u65AD\u6761\u4EF6<span class="token punctuation">:</span>
    <span class="token keyword">pass</span>

<span class="token keyword">for</span> i <span class="token keyword">in</span> xxx<span class="token punctuation">:</span>
    <span class="token keyword">pass</span>

<span class="token keyword">break</span> \u548C <span class="token keyword">continue</span><span class="token punctuation">,</span>
    
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div>`,58),B=[q];function D(I,S,$,A,P,V){return a(),s("div",null,B)}var F=n(T,[["render",D]]);export{E as __pageData,F as default};