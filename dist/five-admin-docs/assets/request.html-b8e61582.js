import{_ as s,o as n,c as a,e as p}from"./app-2c78fe49.js";const e={},t=p(`<h1 id="请求" tabindex="-1"><a class="header-anchor" href="#请求" aria-hidden="true">#</a> 请求</h1><p>作者在 /src/utils/axios.js 中已经二次封装 axios 实例，如果你有自己习惯的封装可以替换。</p><p>封装后的 Axios 在用法上和原 Axios 用法相同。</p><p>封装了些什么？</p><ul><li>默认 baseURL</li><li>默认请求超时</li><li>请求时携带 token</li><li>请求时携带时间戳参数</li><li>请求时全局进度条</li><li>响应时 401 返回登录页面</li><li>响应时成功/失败时的消息提示</li></ul><p>其中 baseURL、请求超时、成功/失败时的消息提示，可以在单独请求中配置</p><p>这里主要描述一下 响应成功/失败时的消息提示 的单独请求配置</p><p>/src/utils/axios.js 中封装了默认的响应提示，默认情况下响应错误时使用 Message 提示，响应成功时没有提示。</p><p>如果需要对单独的请求配置响应消息提示并指定提示类型，可以在单独请求中设置 config 的 errorMsgType 或 successMsgType 属性值。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// /src/utils/axios.js</span>

<span class="token comment">// 响应后消息提示类型</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> msgType <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">none</span><span class="token operator">:</span> <span class="token string">&#39;none&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 无提示</span>
  <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;msg&#39;</span><span class="token punctuation">,</span> <span class="token comment">// Message</span>
  <span class="token literal-property property">box</span><span class="token operator">:</span> <span class="token string">&#39;box&#39;</span><span class="token punctuation">,</span> <span class="token comment">// Message Box</span>
<span class="token punctuation">}</span>


<span class="token comment">// 自定义成功状态码</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> successCode <span class="token operator">=</span> <span class="token number">0</span>
<span class="token comment">// 响应结果</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> resultProp <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token string">&#39;data&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 数据</span>
  <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token string">&#39;code&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 自定义状态码</span>
  <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;message&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 消息</span>
  <span class="token literal-property property">ok</span><span class="token operator">:</span> <span class="token string">&#39;ok&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 表示是否成功的布尔值</span>
<span class="token punctuation">}</span>
</code></pre></div>`,10),o=[t];function c(r,l){return n(),a("div",null,o)}const k=s(e,[["render",c],["__file","request.html.vue"]]);export{k as default};
