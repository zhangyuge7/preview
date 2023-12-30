import{_ as u,r as p,o as i,c as k,a as n,d as s,e as a,w as t,b as c}from"./app-f5c7364d.js";const d={},g=n("h1",{id:"多语言",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#多语言","aria-hidden":"true"},"#"),s(" 多语言")],-1),m=n("p",null,"框架已集成vue-i18n，已配置的语言有中文简体、中文繁体、英文。",-1),h=n("h2",{id:"使用",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#使用","aria-hidden":"true"},"#"),s(" 使用")],-1),y=n("p",null,[n("strong",null,"/src/i18n"),s(" 目录下有 lang 和 pages 两个目录")],-1),_=n("p",null,"lang 中定义了开发框架时使用的文本",-1),f=n("p",null,"业务开发中可以将文本定义在 pages 目录下，按模块或按页面创建，更方便管理。",-1),v=n("div",{class:"language-text","data-ext":"text"},[n("pre",{class:"language-text"},[n("code",null,`src
├─i18n
│  └─pages
│      └─system         // 目录名称随意，建议和你的页面或模块同名，方便查找。
│          └─en.js      // 英文
│          ├─zh-cn.js   // 中文简体
│          └─zh-tw.js   // 中文繁体
`)])],-1),w=n("div",{class:"language-javascript","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"system"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"menu"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Menu'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),j=n("div",{class:"language-javascript","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"system"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"menu"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'菜单'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),x=n("div",{class:"language-javascript","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"system"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"menu"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'菜單'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])])],-1),z=c(`<p>在<code>&lt;template&gt;</code>中使用</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>{{ $t(&#39;system.menu&#39;) }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>在 <code>JavaScript</code> 中使用</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> t <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/i18n&#39;</span>
<span class="token keyword">const</span> menuText <span class="token operator">=</span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token string">&#39;system.menu&#39;</span><span class="token punctuation">)</span>
</code></pre></div><div class="custom-container warning"><p class="custom-container-title">注意</p><p>在 <code>&lt;template&gt;</code> 中使用 <code>$t()</code> 时要避免传入空的变量，如果传入了空值，会报错</p></div><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><p>如果已有的配置不能满足你的需求，这里介绍如何新增或删除一个语言配置</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// /src/i18n/index.js</span>

<span class="token comment">// 定义多语言文本</span>
<span class="token keyword">const</span> messages <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// &#39;en&#39;: {}, 删除英文</span>
  <span class="token string-property property">&#39;zh-cn&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;zh-tw&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token string-property property">&#39;zh-cn1&#39;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 新增 zh-cn1 语言</span>
<span class="token punctuation">}</span>
</code></pre></div><p>这样就简单的新增了一个 zh-cn1 语言并且删除了一个 en 语言。语言文本文件名必须为 zh-cn1.js</p><p>配置语言切换</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// /src/appConfig.js</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> defaultLanguages <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;中文简体&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;zh-cn&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;中文繁体&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;zh-tw&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;新增加的语言&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;zh-cn1&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 新增 zh-cn1 语言</span>
<span class="token comment">//   { label: &#39;EN&#39;, value: &#39;en&#39; }, // 删除英文</span>
<span class="token punctuation">]</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">// 你也可以在这里将 zh-cn1 设为应用的默认语言</span>
  <span class="token comment">// 语言设置会缓存在浏览器的localStorage，如果设置默认语言不生效请清空缓存</span>
  <span class="token literal-property property">defaultLanguage</span><span class="token operator">:</span> <span class="token string">&#39;zh-cn1&#39;</span><span class="token punctuation">,</span> 
<span class="token punctuation">}</span>

</code></pre></div><h2 id="elementplus国际化配置" tabindex="-1"><a class="header-anchor" href="#elementplus国际化配置" aria-hidden="true">#</a> ElementPlus国际化配置</h2><p>本项目与 ElementPlus 语言同步切换需要在这里配置 ElementPlus 语言</p>`,13),E={href:"https://element-plus.gitee.io/zh-CN/guide/i18n.html",target:"_blank",rel:"noopener noreferrer"},b=c(`<div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// /src/hooks/useElementI18n.js</span>

<span class="token keyword">import</span> zhCn <span class="token keyword">from</span> <span class="token string">&#39;element-plus/dist/locale/zh-cn.mjs&#39;</span>
<span class="token keyword">import</span> zhTw <span class="token keyword">from</span> <span class="token string">&#39;element-plus/dist/locale/zh-tw.mjs&#39;</span>
<span class="token keyword">import</span> en <span class="token keyword">from</span> <span class="token string">&#39;element-plus/dist/locale/en.mjs&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> computed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useAppStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/stores/modules/app&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">useElementI18n</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> useApp <span class="token operator">=</span> <span class="token function">useAppStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> locale <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> useApp<span class="token punctuation">.</span>appConfig<span class="token punctuation">.</span>defaultLanguage <span class="token operator">===</span> <span class="token string">&#39;zh-cn&#39;</span> 
    <span class="token operator">?</span> zhCn <span class="token operator">:</span> useApp<span class="token punctuation">.</span>appConfig<span class="token punctuation">.</span>defaultLanguage <span class="token operator">===</span> <span class="token string">&#39;zh-tw&#39;</span> 
    <span class="token operator">?</span> zhTw <span class="token operator">:</span> en
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span> locale <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="了解更多" tabindex="-1"><a class="header-anchor" href="#了解更多" aria-hidden="true">#</a> 了解更多</h2>`,2),C={href:"https://vue-i18n.intlify.dev/",target:"_blank",rel:"noopener noreferrer"};function L(A,I){const l=p("RouterLink"),e=p("CodeGroupItem"),r=p("CodeGroup"),o=p("ExternalLinkIcon");return i(),k("div",null,[g,m,n("p",null,[s("如果这些不能满足你的需求，请查看"),a(l,{to:"/guide/multi-language.html#%E9%85%8D%E7%BD%AE"},{default:t(()=>[s("如何配置")]),_:1})]),h,y,_,f,v,a(r,null,{default:t(()=>[a(e,{title:"en.js"},{default:t(()=>[w]),_:1}),a(e,{title:"zh-cn.js"},{default:t(()=>[j]),_:1}),a(e,{title:"zh-tw.js"},{default:t(()=>[x]),_:1})]),_:1}),z,n("p",null,[s("语言文本由 ElementPlus 提供，"),n("a",E,[s("ElementPlus国际化"),a(o)])]),b,n("p",null,[n("a",C,[s("vue-i18n"),a(o)])])])}const P=u(d,[["render",L],["__file","multi-language.html.vue"]]);export{P as default};
