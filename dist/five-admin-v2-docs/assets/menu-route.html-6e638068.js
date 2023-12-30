import{_ as n,o as a,c as s,b as p}from"./app-2ad8becd.js";const t={},e=p(`<h1 id="路由及菜单" tabindex="-1"><a class="header-anchor" href="#路由及菜单" aria-hidden="true">#</a> 路由及菜单</h1><p>框架的路由和菜单采用强绑定模式，菜单是读取的路由信息动态构建的。</p><p>为实现动态菜单及动态路由权限功能，不得不对路由的定义做一些限制，及对路由做一些特殊处理。</p><h2 id="目录结构介绍" tabindex="-1"><a class="header-anchor" href="#目录结构介绍" aria-hidden="true">#</a> 目录结构介绍</h2><p>1、/src/router/ 目录下有 index.js、base.js、routerUtil.js 文件和 modules 目录</p><p>2、index.js 文件负责创建路由器，定义全局路由守卫及路由白名单。</p><p>3、base.js 中定义基础路由，如：登录、404等。基础路由在创建路由器时被加载到路由器。</p><p>4、routerUtil.js 定义了路由及菜单的处理函数。</p><p>5、modules 目录下定义动态路由，动态路由在登录系统后被程序动态加载。modules 下的 js 文件需要向外暴露一个路由对象或一个路由数组。</p><h2 id="路由" tabindex="-1"><a class="header-anchor" href="#路由" aria-hidden="true">#</a> 路由</h2><h3 id="路由处理说明" tabindex="-1"><a class="header-anchor" href="#路由处理说明" aria-hidden="true">#</a> 路由处理说明</h3><p>1、路由器创建时载入的只有 base.js 中暴露的 baseRoutes 的路由。</p><p>2、定义的路由前置守卫中规定了无用户认证信息只能访问白名单路由及 name为<code>Login</code>的路由，访问其它路由会被重定向到 <code>Login</code>。</p><p>3、如果用户已经认证但是没有用户信息，则请求用户信息接口并将信息使用pinia存储，然后初始化路由。（token持久化到了localStorage，用户信息及菜单仅保存在pinia，刷新浏览器后，pinia 数据会重置，所以需要此步骤）</p><p>4、初始化路由提供两种策略</p><p>​ (1)、仅加载前端定义的路由：读取 /src/router/modules 目录下所有文件获取路由数据。</p><p>​ (2)、仅加载后端定义的路由：请求接口获取路由数据。</p><p>​ (3)、加载前端路由数据，加载后端菜单数据：这种策略暂没有考虑添加，需要考虑的细节太多，会使现有的逻辑有较大的改动，如果有需要自行改造。</p><p>获取到路由数据后对路由进行权限等处理后动态添加到路由器，并提取菜单信息处理后存储到pinia。（具体处理逻辑代码在 /src/router/routerUtil.js）</p><p>如果是加载后端来源的路由数据，排序及权限等建议能在后端处理的应该在后端处理，然后根据需要改造 routerUtil.js 中的处理逻辑，将已经在后端处理过的步骤跳过。</p><p>5、动态路由数据加载到路由器时会将 &#39;/&#39; 根路由及其子路由覆盖</p><h3 id="白名单" tabindex="-1"><a class="header-anchor" href="#白名单" aria-hidden="true">#</a> 白名单</h3><p>作用：未认证也可以访问的页面，如系统欢迎页。</p><p>由于设计的路由与菜单的加载策略，白名单的路由要在<code>base.js</code>中定义并在<code>index.js</code>的<code>WHITE_LIST</code>数组中添加路由<code>path</code>，因为<code>modules</code>中的路由在未认证时不会被加载。</p><p>因为程序在路由器创建时并没有初始化菜单。如果白名单路由定义在<code>Layout</code>组件的路由下，可以访问此路由，但是进入<code>Layout</code>内并不会展示菜单。不建议这样使用，如果需要用户未认证也可以进入<code>Layout</code>，建议使用创建匿名/游客角色使用匿名/游客用户的方式。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** /src/router/index.js */</span>
<span class="token comment">// ......</span>
<span class="token comment">// 路由白名单</span>
<span class="token keyword">const</span> <span class="token constant">WHITE_LIST</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;/welcome&#39;</span><span class="token punctuation">]</span>

<span class="token doc-comment comment">/** /src/router/base.js */</span>
<span class="token comment">// ......</span>
<span class="token comment">// 基础路由</span>
<span class="token keyword">const</span> baseRoutes <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/welcome&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Welcome&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/welcome/index.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/login&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Login&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/login/index.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/:path(.*)*&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;NotFound&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/error-page/NotFound.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre></div><h3 id="路由定义" tabindex="-1"><a class="header-anchor" href="#路由定义" aria-hidden="true">#</a> 路由定义</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** /src/router/modules/dashboard.js  */</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/dashboard&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Dashboard&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">redirect</span><span class="token operator">:</span> <span class="token string">&#39;/dashboard/analysis&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;menus.dashboard&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">isHide</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;ant-design:dashboard-outlined&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">sortNo</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/dashboard/analysis&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Analysis&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;menus.analysis&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">isHide</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;ep:data-analysis&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/dashboard/analysis/index.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/dashboard/workbench&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Workbench&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;menus.workbench&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">isHide</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;icon-park-outline:workbench&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/dashboard/workbench/index.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p>路由定义必须以 / 开头 不建议路径使用 &#39;&#39; 空字符代替父级的 redirect 效果，推荐显式定义。</p><h3 id="meta" tabindex="-1"><a class="header-anchor" href="#meta" aria-hidden="true">#</a> Meta</h3><p>在定义路由时建议定义<code>meta</code>和<code>meta.title</code>。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 在菜单中显示的标题。可以是定义好的多语言模板。
     */</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span>String<span class="token punctuation">,</span> 
    <span class="token doc-comment comment">/**
     * 在菜单中显示的图标。使用的自定义的 SvgIcon 组件渲染，可以是本地图标或网络中的资源。
     */</span>
    <span class="token literal-property property">icon</span><span class="token operator">:</span>String<span class="token punctuation">,</span> 
    <span class="token doc-comment comment">/**
     * 是否在菜单中隐藏。（默认为 false）
     */</span>
    <span class="token literal-property property">isHide</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span> 
    <span class="token doc-comment comment">/**
     * 是否在菜单中隐藏所有子级（默认为 false）。
     * 当为true时，所有子级的isHide和hideChildren都会被动态赋值为true
     */</span>
    <span class="token literal-property property">hideChildren</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span> 
    <span class="token doc-comment comment">/**
     * 如果有值并以 http: 或 https: 开头，则以外链内嵌方式打开（默认无）
     */</span>
    <span class="token literal-property property">iframeLink</span><span class="token operator">:</span>String<span class="token punctuation">,</span> 
    <span class="token doc-comment comment">/**
     * 在 layout 框架外打开（默认为 false）。
     * 如数据大屏等。
     * 具有传递性，影响子路由。
     */</span>
    <span class="token literal-property property">isOuter</span><span class="token operator">:</span>Boolean<span class="token punctuation">,</span> 
    <span class="token doc-comment comment">/**
     * 可以访问的角色编码（默认无）。
     * 为 [] 时所有角色都不可以访问，为空值时所有角色都可以访问
     * 具有传递性，影响子路由。
     * 当没有权限访问时，此路由的isHide和hideChildren会被动态赋值为true
     */</span>
    <span class="token literal-property property">roles</span><span class="token operator">:</span>Array<span class="token operator">|</span>String<span class="token punctuation">,</span> 
    <span class="token doc-comment comment">/**
     * 是否缓存组件实例（默认为 false）。
     * 注意：组件名要与对应路由的 name 相同
     */</span>
    <span class="token literal-property property">isKeep</span><span class="token operator">:</span>Boolean<span class="token punctuation">,</span> 
    <span class="token doc-comment comment">/**
     * 多标签页模式下是否固定在标签页（默认 false）。
     */</span>
    <span class="token literal-property property">fixedTab</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
    <span class="token doc-comment comment">/**
     * 单独配置此页面的过渡动画（默认无）。
     */</span>
    <span class="token literal-property property">transition</span><span class="token operator">:</span>String<span class="token punctuation">,</span> 
    <span class="token doc-comment comment">/**
     *  排序号（默认无）
     */</span>
    <span class="token literal-property property">sortNo</span><span class="token operator">:</span>Number<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="外链路由" tabindex="-1"><a class="header-anchor" href="#外链路由" aria-hidden="true">#</a> 外链路由</h3><p>只需要将路由的<code>path</code>以<code>http:</code>或<code>https:</code>开头即可，不要以<code>/</code>开头。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token comment">// 默认以浏览器新标签页方式跳转，如果有 \`,_self\`则在此标签页打开链接</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;http://xxx.xxxxx,_self&#39;</span><span class="token punctuation">,</span> 
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Xxx&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;XXXX&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><h3 id="外链内嵌" tabindex="-1"><a class="header-anchor" href="#外链内嵌" aria-hidden="true">#</a> 外链内嵌</h3><p>需要将 meta.iframeLink 设置为需要嵌套的链接地址</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/test&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Test&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;测试外链内嵌&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">iframeLink</span><span class="token operator">:</span> <span class="token string">&#39;https://localhost:8888&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token doc-comment comment">/** component 可以省略
   * 路由在由程序加载时根据 meta.iframeLink 判断此路由有内嵌地址
   * 会自动赋值 component 为 @/layout/main/LayoutIframe.vue 组件
   */</span>
  <span class="token comment">// component: () =&gt; import(&#39;@/layout/main/LayoutIframe.vue&#39;),</span>
<span class="token punctuation">}</span>
</code></pre></div><p>内嵌路由在切换页面后无法缓存</p><h3 id="layout外部页面" tabindex="-1"><a class="header-anchor" href="#layout外部页面" aria-hidden="true">#</a> Layout外部页面</h3><p>如数据大屏需要在 Layout 布局外显示的页面，需要将<code>meta.isOuter</code>设置为<code>true</code></p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/screen&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;BigScreen&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;数据大屏展示&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">isOuter</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/demo/data-big-screen/BigScreen1.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><p>通过路由父子级关系实现，动态加载路由时将<code>meta.isOuter </code>为<code>true</code>的路由提取。</p><p>最后使用<code>router.addRoute()</code>添加到路由以覆盖根路由下的此路由</p><p>所以<code>isOuter</code>属性是有传递性的，<code>meta.isOuter</code>为<code>true</code>的路由及子路由都会在 Layout 外渲染</p><h3 id="路由权限" tabindex="-1"><a class="header-anchor" href="#路由权限" aria-hidden="true">#</a> 路由权限</h3><p><code>meta.roles</code>中规定哪些角色可以访问</p><p><code>roles</code>的值可以是单个角色值的字符串也可以是多个角色的角色值数组</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/demo/permission/page-admin&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;PermissionPageAdmin&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;路由权限&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// 可以使用通配符匹配，表示已 &#39;-admin&#39; 结尾的角色都可以访问此路由</span>
    <span class="token literal-property property">roles</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;*-admin&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/demo/permission/PagePermAdmin.vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre></div><h3 id="首页" tabindex="-1"><a class="header-anchor" href="#首页" aria-hidden="true">#</a> 首页</h3><p>首页是当用户登录成功之后默认跳转的页面，或者在地址栏输入根路径被重定向到的页面。</p><p>默认首页可全局配置或用户单独配置，用户配置优先。（业务开发中可根据需要扩展根据角色或部门分配默认首页）</p><p>在 .env 文件中全局配置</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// .env</span>

<span class="token constant">VITE_APP_HOME_PATH</span> <span class="token operator">=</span> <span class="token operator">/</span>home
</code></pre></div><p>为用户单独配置只需要设置用户信息的<code>homePath</code>属性值即可</p><h3 id="刷新当前页面" tabindex="-1"><a class="header-anchor" href="#刷新当前页面" aria-hidden="true">#</a> 刷新当前页面</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> refreshPage <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/utils/tools&#39;</span>
<span class="token function">refreshPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="菜单" tabindex="-1"><a class="header-anchor" href="#菜单" aria-hidden="true">#</a> 菜单</h2><p>菜单是使用<code>ElementPlus</code>的菜单组件实现。</p><h3 id="菜单处理说明" tabindex="-1"><a class="header-anchor" href="#菜单处理说明" aria-hidden="true">#</a> 菜单处理说明</h3><p>菜单初始化是在用户信息及动态路由数据初始化后，对路由数据进行处理并生成菜单数据，具体处理逻辑在<code>/src/router/routerUtil.js</code>文件中。</p><p>菜单处理过程中会根据路由数据中<code>meta</code>中的配置过滤数据。</p><p>不在菜单中显示的条件有：</p><p>1、路由的<code>meta.isHide</code>为<code>true</code></p><p>2、父级路由的<code>meta.hideChildren</code>为<code>true</code></p><p>3、路由的<code>meta.roles</code>与用户信息的<code>roles</code>没有匹配项</p><p>4、父级路由的<code>meta.roles</code>与用户信息的<code>roles</code>没有匹配项</p><p>当路由的<code>meta.isHide</code>为<code>true</code>并且父级路由的<code>meta.hideChildren</code>不为<code>true</code>时，此路由的子级将在树结构中被提升一个层级。</p><h3 id="混合布局" tabindex="-1"><a class="header-anchor" href="#混合布局" aria-hidden="true">#</a> 混合布局</h3><p>在混合布局中有主菜单和子菜单之分，程序运行时会侦听布局及路由的变化，会根据选择的主菜单项动态修改子菜单的数据及控制是否显示子菜单，当选择的主菜单数据中没有子级时会隐藏子菜单的显示。</p>`,70),o=[e];function c(r,l){return a(),s("div",null,o)}const u=n(t,[["render",c],["__file","menu-route.html.vue"]]);export{u as default};
