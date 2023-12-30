import{_ as n,o as s,c as a,b as t}from"./app-2ad8becd.js";const p={},e=t(`<h1 id="项目配置" tabindex="-1"><a class="header-anchor" href="#项目配置" aria-hidden="true">#</a> 项目配置</h1><p>为简化业务开发工作量，框架提供简单且多样化的配置，让使用者专注于业务开发。</p><ul><li><a href="#%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE">环境配置</a></li><li><a href="#%E5%BA%94%E7%94%A8%E9%85%8D%E7%BD%AE">应用配置</a></li><li><a href="#%E4%B8%BB%E9%A2%98%E9%85%8D%E7%BD%AE">主题配置</a></li></ul><h2 id="环境配置" tabindex="-1"><a class="header-anchor" href="#环境配置" aria-hidden="true">#</a> 环境配置</h2><p>文件位置：/src/.env</p><p>所有环境都被加载</p><div class="language-text" data-ext="text"><pre class="language-text"><code># 应用标题
VITE_APP_TITLE = FiveAdmin-V2
# 缓存前缀
VITE_APP_STORAGE_PREFIX = FIVE_ADMIN_V2_
# 默认首页
VITE_APP_HOME_PATH = /home
# 开启mock
VITE_USE_MOCK = true
# 应用根路径
VITE_APP_BASE_PATH = /
</code></pre></div><p>文件位置：/src/.env.development</p><p>开发环境被加载</p><div class="language-text" data-ext="text"><pre class="language-text"><code># 端口
VITE_APP_PORT = 9999
# http请求代理
VITE_API_BASE_URL = /api
VITE_DEV_PROXY = {&quot;/api&quot;:&quot;http://localhost:8080/&quot;,&quot;/upload&quot;:&quot;http://localhost:8080/upload&quot;}
# http请求超时设置
VITE_API_TIMEOUT = 10000
</code></pre></div><p>文件位置：/src/.env.production</p><p>生产环境被加载</p><div class="language-text" data-ext="text"><pre class="language-text"><code># http代理（生产环境使用 Nginx 代理）
VITE_API_BASE_URL = /api
# http请求超时设置
VITE_API_TIMEOUT = 10000
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">提示</p><ul><li><p>接入后端时如果不考虑跨域问题，可以这么配置</p><p>VITE_APP_BASE_URL = http://localhost:8080</p><p>VITE_DEV_PROXY = {}</p></li></ul></div><h2 id="应用配置" tabindex="-1"><a class="header-anchor" href="#应用配置" aria-hidden="true">#</a> 应用配置</h2><p>文件位置：/src/appConfig.js</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 多语言。&#39;zh-cn&#39; 中文简体 
   * &#39;zh-tw&#39; 中文繁体
   * &#39;en&#39; 英文
   */</span>
  <span class="token literal-property property">defaultLanguage</span><span class="token operator">:</span> <span class="token string">&#39;zh-cn&#39;</span><span class="token punctuation">,</span>

  <span class="token doc-comment comment">/**
   * elementplus组件尺寸。
   * &#39;default&#39; 默认
   * &#39;large&#39; 大
   * &#39;small&#39; 小
   */</span>
  <span class="token literal-property property">elementSize</span><span class="token operator">:</span> <span class="token string">&#39;default&#39;</span><span class="token punctuation">,</span>

  <span class="token doc-comment comment">/** 布局。
   * &#39;default&#39; 单侧栏
   * &#39;doubleAside&#39; 双侧栏
   * &#39;crosswise&#39; 无侧栏 
   * &#39;mixture&#39; 顶栏主菜单，侧栏子菜单
   */</span> 
  <span class="token literal-property property">layoutType</span><span class="token operator">:</span> <span class="token string">&#39;default&#39;</span><span class="token punctuation">,</span>

  <span class="token comment">// 显示 logo</span>
  <span class="token literal-property property">showLogo</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  
  <span class="token comment">// 侧栏折叠</span>
  <span class="token literal-property property">menuIsCollapse</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// 仅保持一个子菜单的展开</span>
  <span class="token literal-property property">subMenuUniqueOpened</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// 显示主菜单标题(双侧栏布局有效)</span>
  <span class="token literal-property property">isMainMenuShowTitle</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// 启用侧栏折叠动画</span>
  <span class="token literal-property property">enableCollapseTransition</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

  <span class="token comment">// 使用多标签页</span>
  <span class="token literal-property property">isTabs</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// 标签显示图标</span>
  <span class="token literal-property property">tabsIcon</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token doc-comment comment">/**
   * tabs风格。&#39;card&#39; 风格一
   * &#39;border-card&#39; 风格二
   * &#39;&#39; 风格三
   */</span>
  <span class="token literal-property property">tabsType</span><span class="token operator">:</span> <span class="token string">&#39;card&#39;</span><span class="token punctuation">,</span>

<span class="token comment">// 启用页面过渡动画</span>
  <span class="token literal-property property">isTransition</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token doc-comment comment">/**
   * 页面过渡动画。
   * &#39;fade&#39; 渐变
   * &#39;scale&#39; 缩放
   * &#39;slide&#39; 滑动
   */</span>
  <span class="token literal-property property">transitionName</span><span class="token operator">:</span> <span class="token string">&#39;fade&#39;</span><span class="token punctuation">,</span>

  <span class="token comment">// 显示页脚</span>
  <span class="token literal-property property">showFooter</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// 页脚显示的文本内容,可以使用多语言文本</span>
  <span class="token literal-property property">footerText</span><span class="token operator">:</span> <span class="token string">&#39;Copyright © 2023 XXX 拥有所有版权&#39;</span><span class="token punctuation">,</span>

  <span class="token comment">// 灰色模式</span>
  <span class="token literal-property property">enableGray</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// 色弱模式</span>
  <span class="token literal-property property">enableColorWeakness</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>

  <span class="token doc-comment comment">/**
   * 路由加载策略
   * &#39;frontend&#39; 前端加载
   * &#39;backend&#39; 后端加载
   */</span>
  <span class="token literal-property property">routeSource</span><span class="token operator">:</span> <span class="token string">&#39;frontend&#39;</span><span class="token punctuation">,</span>

  <span class="token comment">// 动态 html 标题</span>
  <span class="token literal-property property">dynamicTitle</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

  <span class="token comment">// 404页面显示位置, true：layout内，false：layout 外</span>
  <span class="token literal-property property">innerNotFound</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

  <span class="token comment">// 固定布局</span>
  <span class="token literal-property property">layoutFixed</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

  <span class="token doc-comment comment">/**
   * 触发方式。主要使用的地方有 horizontal 模式的菜单，Dropdown 下拉菜单组件。
   * &#39;hover&#39; 鼠标经过
   * &#39;click&#39; 鼠标点击
   */</span>
  <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">&#39;hover&#39;</span><span class="token punctuation">,</span>

  <span class="token doc-comment comment">/**
   * 主题。主题文件：/src/assets/styles/common/theme.scss
   * &#39;&#39; 默认
   * &#39;dark&#39; 暗黑
   * &#39;sakura&#39; 樱花粉
   * &#39;sky&#39; 天空蓝
   * &#39;grassland&#39; 草原绿
   * &#39;fantasy&#39; 主题-幻想
   */</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>

  <span class="token doc-comment comment">/**
   * 工具栏收缩
   */</span>
  <span class="token literal-property property">headerToolsOmit</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre></div><div class="custom-container warning"><p class="custom-container-title">注意</p><p>其中 defaultLanguage、elementSize、layoutType、theme 配置会被缓存到浏览器 localStorage，如果非首次启动修改配置后不生效请删除 localStorage 中的缓存数据。</p></div><h2 id="主题配置" tabindex="-1"><a class="header-anchor" href="#主题配置" aria-hidden="true">#</a> 主题配置</h2><p>文件位置：/src/assets/styles/common/theme.scss</p><ul><li>:root 为默认主题</li><li>html.dark 为暗黑主题</li></ul><p>主题的切换是靠修改 html 的 class 实现</p><p>通过修改 css 变量改变应用外观及色彩</p><p>框架已预设多款主题，框架中所有自定义的css变量都可以在 :root 中找到</p><p>也可以根据需求修改 element-plus 的 css 变量</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>所有以 --fv 开头 -bg 结尾的变量表示背景，框架中使用 background 引用，而非 background-color</p><p>这意味着你不仅可以设置背景纯色，还可以设置渐变、图片、gif等。</p></div>`,26),o=[e];function l(r,c){return s(),a("div",null,o)}const k=n(p,[["render",l],["__file","project-config.html.vue"]]);export{k as default};
