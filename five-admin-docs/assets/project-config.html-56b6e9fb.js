import{_ as s,o as n,c as a,e as p}from"./app-f0978315.js";const o={},t=p(`<h1 id="项目配置" tabindex="-1"><a class="header-anchor" href="#项目配置" aria-hidden="true">#</a> 项目配置</h1><p>FiveAdmin 提供了统一的配置入口，本章节介绍 FiveAdmin 环境、功能及外观的配置方式。</p><h2 id="环境配置" tabindex="-1"><a class="header-anchor" href="#环境配置" aria-hidden="true">#</a> 环境配置</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// .env 所有环境都被加载</span>

<span class="token comment">// 应用标题，会被应用到浏览器标签标题、应用LOGO标题、[登录页面标题]</span>
<span class="token constant">VITE_APP_TITLE</span> <span class="token operator">=</span> FiveAdmin
<span class="token comment">// 缓存前缀，建议修改</span>
<span class="token constant">VITE_APP_STORAGE_PREFIX</span> <span class="token operator">=</span> <span class="token constant">FIVE__ADMIN__</span>
<span class="token comment">// 默认首页路径</span>
<span class="token constant">VITE_APP_HOME_PATH</span> <span class="token operator">=</span> <span class="token operator">/</span>home
<span class="token comment">// 开启mock数据，关闭时需要自行对接后台接口</span>
<span class="token constant">VITE_USE_MOCK</span> <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token comment">// 默认请求超时时长</span>
<span class="token constant">VITE_REQUEST_TIMEOUT</span> <span class="token operator">=</span> <span class="token number">10000</span>
</code></pre></div><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// .env.development 开发环境下被加载</span>

<span class="token comment">// 端口号</span>
<span class="token constant">VITE_APP_PORT</span> <span class="token operator">=</span> <span class="token number">9999</span> 
<span class="token comment">// axios 默认 BASE 路径</span>
<span class="token constant">VITE_APP_BASE_URL</span> <span class="token operator">=</span> <span class="token operator">/</span>api  
<span class="token comment">// 本地开发代理，可配置多个</span>
<span class="token constant">VITE_DEV_PROXY</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string-property property">&quot;/api&quot;</span><span class="token operator">:</span><span class="token string">&quot;http://localhost:9090&quot;</span><span class="token punctuation">,</span><span class="token string-property property">&quot;/upload&quot;</span><span class="token operator">:</span><span class="token string">&quot;http://localhost:8080/upload&quot;</span><span class="token punctuation">}</span>
</code></pre></div><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// .env.production 生产环境下被加载</span>

<span class="token comment">// axios 默认 BASE 路径</span>
<span class="token constant">VITE_APP_BASE_URL</span> <span class="token operator">=</span> <span class="token operator">/</span>api

</code></pre></div><div class="custom-container tip"><p class="custom-container-title">提示</p><ul><li><p>接入后端时如果不考虑跨域问题，可以这么配置</p><p>VITE_APP_BASE_URL = http://localhost:8080</p><p>VITE_DEV_PROXY = {}</p></li></ul></div><h2 id="应用配置" tabindex="-1"><a class="header-anchor" href="#应用配置" aria-hidden="true">#</a> 应用配置</h2><div class="custom-container tip"><p class="custom-container-title">提示</p><ul><li><a href="#%E5%8A%9F%E8%83%BD%E9%85%8D%E7%BD%AE">功能配置</a>：/src/appConfig.js</li><li><a href="#%E5%A4%96%E8%A7%82%E9%85%8D%E7%BD%AE">外观配置</a>：/src/assets/styles/common/theme.scss</li></ul></div><h3 id="功能配置" tabindex="-1"><a class="header-anchor" href="#功能配置" aria-hidden="true">#</a> 功能配置</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// /src/appConfig.js</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">// 默认语言。&#39;zh-cn&#39; 中文简体 | &#39;zh-tw&#39; 中文繁体 | &#39;en&#39; 英文</span>
  <span class="token literal-property property">defaultLanguage</span><span class="token operator">:</span> <span class="token string">&#39;zh-cn&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// elementplus全局组件尺寸。&#39;default&#39; 默认 | &#39;large&#39; 大 | &#39;small&#39; 小</span>
  <span class="token literal-property property">elementSize</span><span class="token operator">:</span> <span class="token string">&#39;default&#39;</span><span class="token punctuation">,</span>

  <span class="token comment">// ----------------------------------------布局配置--------------------------------------------------</span>
  <span class="token comment">// 布局风格。</span>
  <span class="token comment">// &#39;default&#39; 默认(暂未实现) | &#39;singleAside&#39; 单侧栏(经典) | &#39;doubleAside&#39; 双侧栏 |</span>
  <span class="token comment">// &#39;crosswise&#39; 横向上下布局 | &#39;mixture&#39; 混合导航布局</span>
  <span class="token literal-property property">layoutType</span><span class="token operator">:</span> <span class="token string">&#39;singleAside&#39;</span><span class="token punctuation">,</span>

  <span class="token comment">// ----------------------------------------LOGO--------------------------------------------------</span>
  <span class="token comment">// 显示 logo</span>
  <span class="token literal-property property">showLogo</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

  <span class="token comment">// ----------------------------------------侧栏菜单--------------------------------------------------</span>
  <span class="token comment">// 侧栏是否折叠</span>
  <span class="token literal-property property">menuIsCollapse</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// 是否只保持一个子菜单的展开</span>
  <span class="token literal-property property">subMenuUniqueOpened</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// 是否永远显示主菜单标题，双侧栏布局有效</span>
  <span class="token literal-property property">isMainMenuShowTitle</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// 启用侧栏折叠动画</span>
  <span class="token literal-property property">enableCollapseTransition</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

  <span class="token comment">// ----------------------------------------tabs 标签页--------------------------------------------------</span>
  <span class="token comment">// 是否使用多标签页</span>
  <span class="token literal-property property">isTabs</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// 标签显示图标</span>
  <span class="token literal-property property">tabsIcon</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// 始终保持一个 tab 固定不可关闭</span>
  <span class="token comment">// 当所有路由的 meta.fixedTab 不为 true 时，始终保持唯一一个 tab 不可关闭</span>
  <span class="token literal-property property">tabsOneFiexd</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// tabs风格。&#39;card&#39; 风格一 | &#39;border-card&#39; 风格二 | &#39;&#39; 风格三</span>
  <span class="token literal-property property">tabsType</span><span class="token operator">:</span> <span class="token string">&#39;card&#39;</span><span class="token punctuation">,</span>

  <span class="token comment">// ----------------------------------------过渡动画--------------------------------------------------</span>
  <span class="token comment">// 是否启用页面切换动画</span>
  <span class="token literal-property property">isTransition</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// 页面切换动画。&#39;fade&#39; 渐变 | &#39;scale&#39; 缩放 | &#39;slide&#39; 滑动</span>
  <span class="token literal-property property">transitionName</span><span class="token operator">:</span> <span class="token string">&#39;fade&#39;</span><span class="token punctuation">,</span>

  <span class="token comment">// ----------------------------------------页脚--------------------------------------------------</span>
  <span class="token comment">// 是否显示页脚</span>
  <span class="token literal-property property">showFooter</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> 
  <span class="token comment">// 页脚显示的文本内容,可以使用多语言文本</span>
  <span class="token literal-property property">footerText</span><span class="token operator">:</span> <span class="token string">&#39;Copyright © 2023 xxxx 拥有所有版权&#39;</span><span class="token punctuation">,</span>

  <span class="token comment">// ----------------------------------------其它设置--------------------------------------------------</span>
  <span class="token comment">// 是否开启主界面回到顶部</span>
  <span class="token literal-property property">enableBacktop</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> 
  <span class="token comment">// 开启灰色模式</span>
  <span class="token literal-property property">enableGray</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> 
  <span class="token comment">// 开启色弱模式</span>
  <span class="token literal-property property">enableColorWeakness</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> 

  <span class="token comment">// ----------------------------------------固定配置（不在应用配置中出现）--------------------------------------------------</span>
  <span class="token comment">// 路由来源。 &#39;frontend&#39; 前端 | &#39;backend&#39; 后端 | &#39;mixture&#39; 前后端都加载</span>
  <span class="token literal-property property">routeSource</span><span class="token operator">:</span> <span class="token string">&#39;frontend&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// 动态 html 标题</span>
  <span class="token literal-property property">dynamicTitle</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> 
<span class="token punctuation">}</span>
</code></pre></div><div class="custom-container warning"><p class="custom-container-title">注意</p><p>其中 defaultLanguage、elementSize 配置会被缓存到浏览器 localStorage，如果这两个配置修改后不生效请删除 localStorage 中的缓存数据。</p></div><h3 id="外观配置" tabindex="-1"><a class="header-anchor" href="#外观配置" aria-hidden="true">#</a> 外观配置</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// /src/assets/styles/common/theme.scss</span>

<span class="token comment">// 默认</span>
<span class="token operator">:</span>root <span class="token punctuation">{</span>
    <span class="token comment">// -----------------------tabs-----------------------------</span>
    <span class="token operator">--</span>fv<span class="token operator">-</span>tabs<span class="token operator">-</span>height<span class="token operator">:</span>30px<span class="token punctuation">;</span> <span class="token comment">// tabs 高度</span>
    <span class="token operator">--</span>fv<span class="token operator">-</span>tabs<span class="token operator">-</span>bg<span class="token operator">-</span>color<span class="token operator">:</span>#<span class="token constant">F4F4F4</span><span class="token punctuation">;</span> <span class="token comment">// tabs 背景颜色</span>
    
    <span class="token comment">// -----------------------主界面-----------------------------</span>
    <span class="token comment">// 主界面背景颜色</span>
    <span class="token operator">--</span>fv<span class="token operator">-</span>main<span class="token operator">-</span>bg<span class="token operator">-</span>color<span class="token operator">:</span>#<span class="token constant">F4F4F4</span><span class="token punctuation">;</span>

    <span class="token comment">// -----------------------顶栏-----------------------------</span>
    <span class="token operator">--</span>fv<span class="token operator">-</span>header<span class="token operator">-</span>height<span class="token operator">:</span>52px<span class="token punctuation">;</span> <span class="token comment">// 顶栏高度</span>
    <span class="token operator">--</span>fv<span class="token operator">-</span>header<span class="token operator">-</span>bg<span class="token operator">-</span>color<span class="token operator">:</span>#433C68<span class="token punctuation">;</span> <span class="token comment">// 顶栏背景颜色</span>
    <span class="token operator">--</span>fv<span class="token operator">-</span>header<span class="token operator">-</span>text<span class="token operator">-</span>color<span class="token operator">:</span>#fff<span class="token punctuation">;</span> <span class="token comment">// 顶栏内容颜色</span>

    <span class="token comment">// -----------------------侧栏-----------------------------</span>
    <span class="token operator">--</span>fv<span class="token operator">-</span>side<span class="token operator">-</span>bg<span class="token operator">-</span>color<span class="token operator">:</span>#<span class="token number">312845</span><span class="token punctuation">;</span> <span class="token comment">// 侧栏背景颜色</span>
    <span class="token operator">--</span>fv<span class="token operator">-</span>main<span class="token operator">-</span>menu<span class="token operator">-</span>width<span class="token operator">:</span>75px<span class="token punctuation">;</span> <span class="token comment">// 侧栏主菜单宽度</span>
    <span class="token operator">--</span>fv<span class="token operator">-</span>menu<span class="token operator">-</span>width<span class="token operator">:</span>200px<span class="token punctuation">;</span> <span class="token comment">// 侧栏菜单宽度</span>

    <span class="token comment">// -----------------------菜单-----------------------------</span>
    <span class="token operator">--</span>fv<span class="token operator">-</span>menu<span class="token operator">-</span>text<span class="token operator">-</span>color<span class="token operator">:</span>#ffffff<span class="token punctuation">;</span> <span class="token comment">// 菜单内容颜色</span>
    <span class="token comment">// --fv-menu-active-bg-color: #b8d8f6; // 激活项的菜单背景颜色</span>
    <span class="token operator">--</span>fv<span class="token operator">-</span>menu<span class="token operator">-</span>active<span class="token operator">-</span>color<span class="token operator">:</span> <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>el<span class="token operator">-</span>color<span class="token operator">-</span>primary<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 激活项的菜单文本颜色</span>
    <span class="token operator">--</span>fv<span class="token operator">-</span>menu<span class="token operator">-</span>hover<span class="token operator">-</span>bg<span class="token operator">-</span>color<span class="token operator">:</span> #18122C<span class="token punctuation">;</span> <span class="token comment">// 鼠标移入菜单背景颜色</span>
    <span class="token operator">--</span>fv<span class="token operator">-</span>menu<span class="token operator">-</span>inline<span class="token operator">-</span>bg<span class="token operator">-</span>color<span class="token operator">:</span>#211b2e<span class="token punctuation">;</span> <span class="token comment">// 子菜单展开背景颜色</span>
    <span class="token operator">--</span>fv<span class="token operator">-</span>menu<span class="token operator">-</span>item<span class="token operator">-</span>height<span class="token operator">:</span> 60px<span class="token punctuation">;</span> <span class="token comment">// 侧栏菜单项高度（包括双侧栏布局的主菜单项）</span>
    <span class="token operator">--</span>fv<span class="token operator">-</span>menu<span class="token operator">-</span>item<span class="token operator">-</span>font<span class="token operator">-</span>size<span class="token operator">:</span> <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>el<span class="token operator">-</span>font<span class="token operator">-</span>size<span class="token operator">-</span>base<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 菜单字体尺寸</span>
    
    <span class="token comment">// -----------------------LOGO标题-----------------------------</span>
    <span class="token operator">--</span>fv<span class="token operator">-</span>logo<span class="token operator">-</span>bg<span class="token operator">-</span>color<span class="token operator">:</span>#<span class="token number">312845</span><span class="token punctuation">;</span> <span class="token comment">// LOGO背景</span>
    <span class="token operator">--</span>fv<span class="token operator">-</span>logo<span class="token operator">-</span>title<span class="token operator">-</span>color<span class="token operator">:</span>#ffffff<span class="token punctuation">;</span> <span class="token comment">//标题颜色</span>

    <span class="token comment">// -----------------------页脚-----------------------------</span>
    <span class="token operator">--</span>fv<span class="token operator">-</span>footer<span class="token operator">-</span>heigth<span class="token operator">:</span>26px<span class="token punctuation">;</span> <span class="token comment">// 页脚高度</span>
    <span class="token operator">--</span>fv<span class="token operator">-</span>footer<span class="token operator">-</span>bg<span class="token operator">-</span>color<span class="token operator">:</span>#433C68<span class="token punctuation">;</span> <span class="token comment">// 页脚背景颜色</span>
    <span class="token operator">--</span>fv<span class="token operator">-</span>footer<span class="token operator">-</span>text<span class="token operator">-</span>color<span class="token operator">:</span>#<span class="token number">909399</span><span class="token punctuation">;</span> <span class="token comment">// 页脚文本颜色</span>
    <span class="token operator">--</span>fv<span class="token operator">-</span>footer<span class="token operator">-</span>font<span class="token operator">-</span>size<span class="token operator">:</span>14px<span class="token punctuation">;</span> <span class="token comment">// 页脚字体尺寸</span>
    
    <span class="token comment">// -----------------------工具栏-----------------------------</span>
    <span class="token operator">--</span>fv<span class="token operator">-</span>tools<span class="token operator">-</span>hover<span class="token operator">-</span>bg<span class="token operator">-</span>color<span class="token operator">:</span><span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">106</span><span class="token punctuation">,</span> <span class="token number">247</span><span class="token punctuation">,</span> <span class="token number">0.103</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 鼠标移入背景</span>
    

<span class="token punctuation">}</span>
<span class="token comment">// 暗黑模式</span>
html<span class="token punctuation">.</span>dark<span class="token punctuation">{</span>
    <span class="token comment">// -----------------------tabs-----------------------------</span>
    <span class="token operator">--</span>fv<span class="token operator">-</span>tabs<span class="token operator">-</span>bg<span class="token operator">-</span>color<span class="token operator">:</span>#<span class="token number">141414</span><span class="token punctuation">;</span> <span class="token comment">// tabs 背景颜色</span>

    <span class="token comment">// -----------------------主界面-----------------------------</span>
    <span class="token comment">// 主界面背景颜色</span>
    <span class="token operator">--</span>fv<span class="token operator">-</span>main<span class="token operator">-</span>bg<span class="token operator">-</span>color<span class="token operator">:</span>#1F1F1F<span class="token punctuation">;</span>

    <span class="token comment">// -----------------------顶栏-----------------------------</span>
    <span class="token operator">--</span>fv<span class="token operator">-</span>header<span class="token operator">-</span>bg<span class="token operator">-</span>color<span class="token operator">:</span>#<span class="token number">191919</span><span class="token punctuation">;</span> <span class="token comment">// 顶栏背景颜色</span>
    <span class="token operator">--</span>fv<span class="token operator">-</span>header<span class="token operator">-</span>text<span class="token operator">-</span>color<span class="token operator">:</span>#<span class="token constant">CFD3DC</span><span class="token punctuation">;</span> <span class="token comment">// 顶栏内容颜色</span>

    <span class="token comment">// -----------------------侧栏-----------------------------</span>
    <span class="token operator">--</span>fv<span class="token operator">-</span>side<span class="token operator">-</span>bg<span class="token operator">-</span>color<span class="token operator">:</span>#<span class="token number">191919</span><span class="token punctuation">;</span> <span class="token comment">// 侧栏背景颜色</span>

    <span class="token comment">// -----------------------菜单-----------------------------</span>
    <span class="token operator">--</span>fv<span class="token operator">-</span>menu<span class="token operator">-</span>text<span class="token operator">-</span>color<span class="token operator">:</span>#<span class="token constant">CFD3DC</span><span class="token punctuation">;</span> <span class="token comment">// 菜单内容颜色</span>
    <span class="token comment">// --fv-menu-active-bg-color: #b8d8f6; // 激活项的菜单背景颜色</span>
    <span class="token operator">--</span>fv<span class="token operator">-</span>menu<span class="token operator">-</span>active<span class="token operator">-</span>color<span class="token operator">:</span> <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>el<span class="token operator">-</span>color<span class="token operator">-</span>primary<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 激活项的菜单文本颜色</span>
    <span class="token operator">--</span>fv<span class="token operator">-</span>menu<span class="token operator">-</span>hover<span class="token operator">-</span>bg<span class="token operator">-</span>color<span class="token operator">:</span> #<span class="token number">000</span><span class="token punctuation">;</span> <span class="token comment">// 鼠标移入菜单背景颜色</span>
    <span class="token operator">--</span>fv<span class="token operator">-</span>menu<span class="token operator">-</span>inline<span class="token operator">-</span>bg<span class="token operator">-</span>color<span class="token operator">:</span>#<span class="token number">080808</span><span class="token punctuation">;</span> <span class="token comment">// 子菜单展开背景颜色</span>
    <span class="token operator">--</span>fv<span class="token operator">-</span>menu<span class="token operator">-</span>item<span class="token operator">-</span>font<span class="token operator">-</span>size<span class="token operator">:</span> <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>el<span class="token operator">-</span>font<span class="token operator">-</span>size<span class="token operator">-</span>base<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 菜单字体尺寸</span>
    
    <span class="token comment">// -----------------------LOGO标题-----------------------------</span>
    <span class="token operator">--</span>fv<span class="token operator">-</span>logo<span class="token operator">-</span>bg<span class="token operator">-</span>color<span class="token operator">:</span>#<span class="token number">191919</span><span class="token punctuation">;</span> <span class="token comment">// LOGO背景</span>
    <span class="token operator">--</span>fv<span class="token operator">-</span>logo<span class="token operator">-</span>title<span class="token operator">-</span>color<span class="token operator">:</span>#<span class="token constant">CFD3DC</span><span class="token punctuation">;</span> <span class="token comment">//标题颜色</span>

    <span class="token comment">// -----------------------页脚-----------------------------</span>
    <span class="token operator">--</span>fv<span class="token operator">-</span>footer<span class="token operator">-</span>bg<span class="token operator">-</span>color<span class="token operator">:</span>#<span class="token number">191919</span><span class="token punctuation">;</span> <span class="token comment">// 页脚背景颜色</span>
    <span class="token operator">--</span>fv<span class="token operator">-</span>footer<span class="token operator">-</span>text<span class="token operator">-</span>color<span class="token operator">:</span>#<span class="token constant">CFD3DC</span><span class="token punctuation">;</span> <span class="token comment">// 页脚文本颜色</span>
    
    <span class="token comment">// -----------------------工具栏-----------------------------</span>
    <span class="token operator">--</span>fv<span class="token operator">-</span>tools<span class="token operator">-</span>hover<span class="token operator">-</span>bg<span class="token operator">-</span>color<span class="token operator">:</span><span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">106</span><span class="token punctuation">,</span> <span class="token number">247</span><span class="token punctuation">,</span> <span class="token number">0.103</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 鼠标移入背景</span>


<span class="token punctuation">}</span>
</code></pre></div>`,14),e=[t];function c(r,l){return n(),a("div",null,e)}const m=s(o,[["render",c],["__file","project-config.html.vue"]]);export{m as default};
