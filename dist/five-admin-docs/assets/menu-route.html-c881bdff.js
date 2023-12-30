import{_ as p,r as t,o,c as e,f as c,a as r,b as n,d as l,w as i,e as a}from"./app-b34e61fe.js";const u={},k=a(`<h1 id="菜单及路由" tabindex="-1"><a class="header-anchor" href="#菜单及路由" aria-hidden="true">#</a> 菜单及路由</h1><p>FiveAdmin 的菜单和路由是强绑定的，菜单是读取的路由信息来构建的。</p><p>路由相关文件在 /src/router/ 目录下</p><p>关于路由器的创建、全局路由守卫及路由白名单在 /src/router/index.js 文件中</p><h2 id="新增菜单及路由" tabindex="-1"><a class="header-anchor" href="#新增菜单及路由" aria-hidden="true">#</a> 新增菜单及路由</h2><p>在 /src/router/modules/ 目录下定义的路由文件会在用户登录后自动注册，没有登录的情况下这里定义的路由是访问不到的。</p><p>是否在菜单显示是根据路由的 <a href="#meta%E9%85%8D%E7%BD%AE">meta配置</a>决定，当路由没有 meta 属性时默认不在菜单中显示。</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>多级路由的 path 需要写全路径并且必须以 / 开头</p></div><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// /src/router/modules/dashboard.js</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/dashboard&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Dashboard&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token string">&#39;/dashboard/analysis&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;仪表盘&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/dashboard/analysis&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Analysis&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;分析页&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/dashboard/analysis/index.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/dashboard/workbench&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Workbench&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;工作台&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/dashboard/workbench/index.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="基础路由" tabindex="-1"><a class="header-anchor" href="#基础路由" aria-hidden="true">#</a> 基础路由</h2><p>基础路由信息在 /src/router/base.js 中，无需登录也可以访问路由需要放在这里并加入<a href="#%E8%B7%AF%E7%94%B1%E7%99%BD%E5%90%8D%E5%8D%95">路由白名单</a>。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//  /src/router/base.js</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/login&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Login&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/login/index.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/:path(.*)*&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;NotFound&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/error-page/404.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre></div><h2 id="路由白名单" tabindex="-1"><a class="header-anchor" href="#路由白名单" aria-hidden="true">#</a> 路由白名单</h2><p>路由路径设置为白名单后，在用户不登陆的情况下也可以访问</p><p>这里新增一个白名单路由地址作为示例，如：将 /home 路径添加到白名单</p><ol><li>新增一个路由信息</li></ol><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//  /src/router/base.js</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/home&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Home&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/home/index.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// ....</span>
<span class="token punctuation">]</span>
</code></pre></div><ol start="2"><li>将路由信息添加到白名单</li></ol><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// /src/router/index.js</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token constant">WHITE_LIST</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;/home&#39;</span><span class="token punctuation">]</span>
</code></pre></div><div class="custom-container warning"><p class="custom-container-title">注意</p><p>白名单路由必须定义在 /src/router/base.js 中，并且白名单的路由页面只能被显示在 layout 外。</p></div><h2 id="meta配置" tabindex="-1"><a class="header-anchor" href="#meta配置" aria-hidden="true">#</a> meta配置</h2><p>当路由信息中没有 meta 属性时，此路由默认不显示在菜单中。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token comment">// 在菜单中显示的标题。可以是中文或多语言文本模板。</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span>String<span class="token punctuation">,</span> 
    <span class="token comment">// 在菜单中显示的图标。使用的自定义的 SvgIcon 组件渲染，可以是本地图标或网络中的资源。</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span>String<span class="token punctuation">,</span> 
    <span class="token comment">// 是否在菜单中隐藏。（选填，默认为 false）</span>
    <span class="token literal-property property">isHide</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span> 
    <span class="token comment">// 是否在菜单中隐藏所有子级。（选填，默认为 false）。注意，只有当 isHide 为 true 时生效</span>
    <span class="token literal-property property">hideChildren</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span> 
    <span class="token comment">// 如果有值并以 http: 或 https: 开头，则以外链内嵌方式打开</span>
    <span class="token literal-property property">iframeLink</span><span class="token operator">:</span>String<span class="token punctuation">,</span> 
    <span class="token comment">// 在 layout 框架外打开。（选填，默认为 false）。如登录页面，数据大屏等。</span>
    <span class="token literal-property property">isOuter</span><span class="token operator">:</span>Boolean<span class="token punctuation">,</span> 
    <span class="token comment">// 可以访问的角色编码。（选填，默认为空值）</span>
    <span class="token comment">// 为 [] 时所有角色都不可以访问，为空值时所有角色都可以访问</span>
    <span class="token comment">// 当没有权限访问时 hideChildren 永远为 true。</span>
    <span class="token literal-property property">roles</span><span class="token operator">:</span>Array<span class="token operator">|</span>String<span class="token punctuation">,</span> 
    <span class="token comment">// 是否缓存组件实例。（选填，默认为 false）。</span>
    <span class="token comment">// 注意：组件名要与对应路由的 name 相同</span>
    <span class="token literal-property property">isKeep</span><span class="token operator">:</span>Boolean<span class="token punctuation">,</span> 
    <span class="token comment">// 多标签页模式下是否固定在标签页。（选填，默认 false）</span>
    <span class="token literal-property property">fixedTab</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
    <span class="token comment">// 页面切换动画。（选填）</span>
    <span class="token literal-property property">transition</span><span class="token operator">:</span>String<span class="token punctuation">,</span> 
    <span class="token comment">// 排序号，仅对一级菜单有效（仅后端路由模式无效）</span>
    <span class="token literal-property property">sortNo</span><span class="token operator">:</span>Number<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="外链" tabindex="-1"><a class="header-anchor" href="#外链" aria-hidden="true">#</a> 外链</h2><p>只需要将路由的 path 以 http: 或 https: 开头即可，不需要以 / 开头。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;https://www.baidu.com&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Baidu&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;百度&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><h2 id="外链内嵌" tabindex="-1"><a class="header-anchor" href="#外链内嵌" aria-hidden="true">#</a> 外链内嵌</h2><p>需要将 meta.iframeLink 设置为需要嵌套的链接地址</p><p>如果路由来源设置的是前端，还需要将 component 设置为 () =&gt; import(&#39;@/layout/main/LayoutIframe.vue&#39;)</p><p>如果路由来源设置的是后端，或前后端混合，则不需要配置 component，程序在加载路由时会自动将 component 设置为 LayoutIframe</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/test&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Test&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;测试外链内嵌&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">iframeLink</span><span class="token operator">:</span> <span class="token string">&#39;https://localhost:8888&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/layout/main/LayoutIframe.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="layout外部页面" tabindex="-1"><a class="header-anchor" href="#layout外部页面" aria-hidden="true">#</a> Layout外部页面</h2><p>如数据大屏需要在 Layout 布局外显示的页面，需要将 meta.isOuter 设置为 true</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/screen&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;BigScreen&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;数据大屏展示&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">isOuter</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/demo/data-big-screen/BigScreen1.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div>`,34),d=a(`<h2 id="默认首页" tabindex="-1"><a class="header-anchor" href="#默认首页" aria-hidden="true">#</a> 默认首页</h2><p>首页是当用户登录成功之后默认跳转的页面，或者在地址栏输入 / 直接访问的页面。</p><p>默认首页是可配置的，可以全局配置或用户单独配置，用户配置优先。</p><p>在 .env 文件中全局配置</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// .env</span>

<span class="token constant">VITE_APP_HOME_PATH</span> <span class="token operator">=</span> <span class="token operator">/</span>home
</code></pre></div>`,5);function m(y,h){const s=t("RouterLink");return o(),e("div",null,[k,c(" ## 刷新页面\n```js:no-line-numbers\nimport { refreshPage } from '@/utils/tools'\nrefreshPage()\n``` "),d,r("p",null,[n("为用户单独配置只需要设置"),l(s,{to:"/guide/user-info.html"},{default:i(()=>[n("用户信息")]),_:1}),n("的 homePath 属性值即可")])])}const v=p(u,[["render",m],["__file","menu-route.html.vue"]]);export{v as default};
