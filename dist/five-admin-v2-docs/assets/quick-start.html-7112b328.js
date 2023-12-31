import{_ as l,r as d,o as c,c as t,a as e,d as i,e as a,b as s}from"./app-4b842bb7.js";const r={},u=s('<h1 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始" aria-hidden="true">#</a> 快速开始</h1><h2 id="环境准备" tabindex="-1"><a class="header-anchor" href="#环境准备" aria-hidden="true">#</a> 环境准备</h2><div class="custom-container warning"><p class="custom-container-title">注意</p><ul><li>本地环境需要安装 Node.js、pnpm 和 Git。</li><li>如遇到依赖安装问题请试着将环境按照作者开发时的版本安装。</li><li>本项目强制使用 pnpm。如果不想使用pnpm，将 package.json 中的 scripts.preinstall 删除即可。</li></ul></div>',3),o=s(`<h2 id="开发工具" tabindex="-1"><a class="header-anchor" href="#开发工具" aria-hidden="true">#</a> 开发工具</h2><p>本项目使用 VsCode 作为开发工具，你可以选择自己熟悉的 IDE。</p><p>如果你也使用 VsCode 作为本项目开发工具，为了提高效率和有更好的体验，为您推荐以下插件，已在.vscode目录做了推荐配置，使用 VsCode 打开项目后会有提示是否安装。</p><ul><li>Iconify IntelliSense - 图标插件</li><li>Tailwind CSS IntelliSense - windicss 提示插件</li><li>I18n-ally - i18n 插件</li><li>Vue3 Snippets - vue3 代码片段快速生成</li><li>Volar - vue 开发必备</li><li>ESLint - 代码检查</li><li>Element Plus Snippets - ElementPlus 标签快速生成</li><li>DotENV - .env 文件文本高亮</li></ul><h2 id="安装运行" tabindex="-1"><a class="header-anchor" href="#安装运行" aria-hidden="true">#</a> 安装运行</h2><ol><li><p>从远程仓库拉取项目</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://gitee.com/zhang-yuge668/five-admin-v2.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>安装依赖（已强制使用 pnpm 作为唯一包管理器）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>启动</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>打包</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>预览</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> preview
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h2 id="目录结构" tabindex="-1"><a class="header-anchor" href="#目录结构" aria-hidden="true">#</a> 目录结构</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>├─mock  # mock文件夹
├─public    # 公共静态资源目录
├─src   # 主目录
│  ├─api    # 接口定义
│  ├─assets # 资源目录
│  ├─components # 公共组件
│  ├─directives # 自定义指令
│  ├─hooks  # hook
│  ├─i18n   # 多语言
│  ├─layout # 布局
│  ├─router # 路由
│  ├─stores # Pinia数据仓库
│  ├─utils  # 工具类
│  └─views  # 页面
└─vite  #vite配置
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function v(p,m){const n=d("Badge");return c(),t("div",null,[u,e("ul",null,[e("li",null,[i("作者开发环境版本参考 "),e("ul",null,[e("li",null,[i("Node.js "),a(n,{text:"v20.10.0"})]),e("li",null,[i("pnpm "),a(n,{text:"v8.13.1"})])])])]),o])}const b=l(r,[["render",v],["__file","quick-start.html.vue"]]);export{b as default};
