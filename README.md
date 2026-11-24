# 机场clash (jichang-clash.lat)

专为 **Clash / Sing-box / Shadowrocket** 用户打造的高速稳定机场推荐与测评导航站。

- 🌐 **正式域名**：`https://jichang-clash.lat`
- ⚡ **技术架构**：Astro 5 + Tailwind CSS v4 + TypeScript
- 🎯 **开箱特性**：
  - 🚀 **Google PageSpeed 100 分**：纯静态预渲染，首屏加载毫秒级响应，SEO 权重极高
  - 💎 **精选机场卡片矩阵**：支持按 IPLC 专线 / 便宜性价比 / 不限时按量 / 流媒体全解等实时标签筛选
  - 🎟️ **专属优惠码一键复制**：点击直接复制至剪贴板，附带悬浮 Toast 成功反馈
  - 📊 **多维度参数横向对比表**：月付价格、线路类型、测速表现、流媒体支持直观呈现
  - 📱 **客户端下载与配置中心**：汇集 Windows / macOS / Android / iOS 官方开源渠道与保姆级图文教程
  - 🔍 **SEO 与搜索引擎友好**：内置 Canonical、OpenGraph、Twitter Card、JSON-LD 结构化数据及 Sitemap 自动生成

---

## 快速上手与本地预览

```bash
# 安装依赖
npm install

# 启动本地开发预览（默认运行在 http://localhost:4321）
npm run dev

# 编译打包静态文件（输出至 dist 目录）
npm run build

# 本地预览打包产物
npm run preview
```

---

## 如何添加或修改推荐机场？

所有机场推荐数据与配置均集中在单文件管理：
📁 **`src/data/airports.ts`**

在此文件中，你可以非常方便地：
1. **修改机场推广链接（Affiliate）**：将 `affUrl` 修改为您自己的返利邀请注册地址。
2. **设置专属优惠券**：填写 `couponCode` 与 `couponDesc`，前端会自动生成一键复制按钮。
3. **新增或下架机场**：直接向 `airportsData` 数组中添加或删除对象即可，所有首页卡片、对比表、详细测评页均会自动同步生成！

---

## 免费部署与绑定域名 `jichang-clash.lat`

由于本项目采用现代静态站点生成（SSG），推荐以下两种 **100% 免费、免备案、全球 CDN 加速** 的部署方式：

### 方案 A：Cloudflare Pages（强烈推荐）
1. 将本项目推送到 GitHub 仓库；
2. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)，进入 **Workers & Pages** -> **Create application** -> **Pages** -> **Connect to Git**；
3. 选择该仓库，构建设置填入：
   - **Framework preset**: `Astro`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
4. 部署成功后，在 Pages 设置中点击 **Custom domains**，填入 `jichang-clash.lat`，根据提示添加 DNS CNAME 解析即可。

### 方案 B：Vercel
1. 访问 [Vercel](https://vercel.com/)，点击 **Add New Project** 导入 GitHub 仓库；
2. Vercel 会自动识别 Astro 项目，直接点击 **Deploy**；
3. 在 Settings -> Domains 中绑定 `jichang-clash.lat`。
