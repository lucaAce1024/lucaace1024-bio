# Nano Banana AI - Next.js 15 国际化模板

一个现代化的、生产就绪的 Next.js 15 模板，具备全面的国际化(i18n)支持、内置SEO优化和可扩展的组件架构。此模板作为构建多语言Web应用程序的最佳实践基础。

## 🚀 功能特性

- **Next.js 15** 与 App Router 和 React 19
- **全面的国际化** 支持32种语言，具备自动翻译回退机制
- **SEO优化** 动态元数据、结构化数据和站点地图生成
- **Tailwind CSS** 自定义像素艺术主题和排版插件
- **TypeScript** 严格模式和全面类型安全
- **组件库** 可重用的UI组件和设计系统
- **动态路由** 基于语言的URL结构
- **性能优化** 图像优化、缓存和代码分割
- **开发友好** ESLint、Prettier和全面工具链
- **AI视频生成** 集成Veo3 AI，支持文生视频和图生视频功能
- **支付系统** 完整的Stripe支付集成，支持订阅和一次性购买
- **支付环境配置** 支持开发、测试、生产环境的支付链接切换
- **积分系统** 用户积分管理和使用限制
- **用户认证** Google OAuth和会话管理

## 📋 项目概述

Nano Banana AI 是一个像素艺术转换器应用程序模板，展示了构建现代化多语言Next.js应用程序的最佳实践。项目包括：

- **多语言支持**: 英语、中文(简体和繁体)、日语、韩语、法语、西班牙语、德语、意大利语、荷兰语、波兰语、瑞典语、葡萄牙语、俄语、阿拉伯语等32种语言
- **响应式设计**: 移动优先的像素完美布局
- **SEO优化**: 全面的元数据管理和搜索引擎优化
- **现代工具链**: 最新的Next.js功能，TypeScript和Tailwind CSS
- **可扩展架构**: 模块化组件结构和配置驱动的导航

## 🌍 多语言阶段配置

### 阶段配置

通过环境变量 `LANGUAGE_PHASE` 控制多语言阶段：

```bash
# .env.local

# 阶段1: 仅英语 (快速上线)
LANGUAGE_PHASE=phase1

# 阶段2: 高价值语言 (20种语言)
LANGUAGE_PHASE=phase2

# 阶段3: 全部语言 (32种语言)
LANGUAGE_PHASE=phase3
```

### 阶段说明

- **phase1**: 仅英语支持，快速验证产品市场
- **phase2**: 20种语言，包含高价值市场 (hi, id, vi, th, he 等)
- **phase3**: 32种语言，全面全球化覆盖

### 阶段切换

部署时只需修改环境变量，重新构建即可：

```bash
# 修改 .env.local 中的 LANGUAGE_PHASE
npm run build
```

**生产环境（如 Vercel）多语言切换**：若生产上多语言无法切换而本地正常，请在部署平台配置 `LANGUAGE_PHASE=phase2`（或所需阶段）。构建时会自动注入到 `NEXT_PUBLIC_LANGUAGE_PHASE`，保证客户端、Edge 与构建阶段一致。未设置时默认回退为 phase2。

## 🗺️ Sitemap配置

### 博客页面控制

通过环境变量控制blog页面是否出现在sitemap中：

```bash
# .env.local

# 包含blog页面 (默认)
INCLUDE_BLOG_IN_SITEMAP=true

# 排除blog页面
INCLUDE_BLOG_IN_SITEMAP=false
```

### 配置说明

- **true**: 包含blog页面和所有博客文章在sitemap中
- **false**: 从sitemap中移除所有blog相关页面
- **默认值**: true (未设置时包含blog)

### 使用场景

- **排除blog**: 当博客内容未准备好或需要临时隐藏时
- **包含blog**: 正常的SEO策略，帮助博客内容被搜索引擎索引

## 🧭 导航栏布局配置

### 页面级导航配置

通过 `config/navbar-layout.json` 配置文件控制每个页面的导航布局：

```json
{
  "default": "sidebar",
  "pages": {
    "/": "top",
    "/pricing": "top"
  }
}
```

### 配置说明

| 字段 | 说明 |
|------|------|
| `default` | 默认布局类型，未在 `pages` 中配置的页面使用此值 |
| `pages` | 页面特定配置，精确路径匹配 |
| `top` | 顶部横向导航栏，适合首页和营销页面 |
| `sidebar` | 左侧边栏导航（宽度 240px），适合功能页面和后台页面 |

### 配置示例

```json
{
  "default": "sidebar",
  "pages": {
    "/": "top",
    "/pricing": "top",
    "/blog": "top",
    "/my-creations": "sidebar",
    "/profile": "sidebar"
  }
}
```

### 切换步骤

1. 编辑 `config/navbar-layout.json` 文件
2. 添加或修改页面路径对应的布局类型
3. 保存后自动生效（开发环境热更新）

### 相关配置

- 侧栏宽度由 `config/app-config.ts` 中的 `NAVBAR_LAYOUT_SIDEBAR_WIDTH`（默认 240）控制
- 配置文件路径：`config/navbar-layout.json`
- 核心函数：`getNavbarLayoutForPath(pathname)` 在 `config/app-config.ts` 中

## 🛠 技术栈

### 核心技术
- **框架**: Next.js 15 (App Router)
- **语言**: TypeScript 5.8.3
- **样式**: Tailwind CSS 3.4.1 自定义像素艺术主题
- **国际化**: next-intl 4.0.2
- **内容**: MDX 支持和remark插件
- **测试**: Vitest 3.1.2

### 关键依赖
- **UI组件**: Radix UI, Headless UI, Material UI
- **图标**: Lucide React, Heroicons, React Icons
- **动画**: Framer Motion 12.18.1
- **图像处理**: Konva, Cloudinary
- **状态管理**: React Context API
- **表单处理**: 带验证的自定义表单组件
- **数据库**: Prisma, Supabase, PostgreSQL 支持

## 💳 支付系统

### Stripe 集成

项目集成了完整的 Stripe 支付系统，支持订阅和一次性购买：

#### 功能特性
- **订阅支付**: 月度/年度订阅方案
- **一次性购买**: 积分包购买
- **Webhook 处理**: 自动处理支付事件
- **积分系统**: 自动积分充值和扣除
- **支付监控**: 基础安全监控和异常检测

#### 支付方案
- **Basic**: $9.99/月 或 $99.99/年 (100-1200 credits)
- **Pro**: $29.99/月 或 $299.99/年 (500-6000 credits)  
- **Premium**: $59.99/月 或 $599.99/年 (1000-12000 credits)
- **Trial Pack**: $2.99 (50 credits)

#### 配置说明
参考 [Stripe 配置指南](docs/stripe-setup-guide.md) 进行环境配置。

#### API 端点
- `POST /api/stripe/create-checkout` - 创建订阅支付会话
- `POST /api/stripe/create-one-time-checkout` - 创建一次性购买会话
- `POST /api/stripe/webhook` - Stripe Webhook 处理
- `GET /api/payment/status` - 获取支付状态
- `GET /api/payment/history` - 获取支付历史

## 📁 项目结构

```
fast-ship/
├── app/
│   ├── [locale]/                 # 动态语言路由
│   │   ├── layout.tsx           # 语言特定布局
│   │   ├── page.tsx             # 首页
│   │   ├── blog/                # 博客页面
│   │   ├── tools/               # 工具页面
│   │   └── ...                  # 其他语言页面
│   ├── components/              # 共享组件
│   │   ├── header/              # 导航组件
│   │   ├── footer/              # 页脚组件
│   │   ├── home/                # 首页组件
│   │   ├── ui/                  # 可重用UI组件
│   │   └── ...                  # 其他共享组件
│   ├── context/                 # React contexts
│   ├── layout.tsx               # 根布局
│   └── globals.css              # 全局样式
├── config/
│   ├── navigation.json          # 导航配置
│   ├── navbar-layout.json       # 导航栏布局配置（页面级 top/sidebar）
│   ├── app-config.ts            # 集中配置管理
│   └── payment-link-config.ts   # 支付链接配置
├── messages/                    # 翻译文件
│   ├── en/                      # 英语翻译
│   ├── zh/                      # 中文翻译
│   └── ...                      # 其他语言翻译
├── public/                      # 静态资源
├── src/
│   ├── navigation.ts            # 导航工具
│   └── types/                   # TypeScript 类型
├── i18n.config.ts               # 国际化配置
├── i18n.ts                      # i18n 请求配置
├── middleware.ts                # 请求中间件
├── next.config.mjs              # Next.js 配置
├── tailwind.config.js           # Tailwind CSS 配置
├── tsconfig.json                # TypeScript 配置
└── package.json                 # 项目依赖
```

## 🌍 国际化(i18n)实现

### 语言支持

应用程序支持32种语言，具备全面的翻译管理：

**阶段1 (phase1)**:
- **English (en)**: 默认语言

**阶段2 (phase2)**: 基础15种 + 高价值5种
- **Chinese (zh, zh-TW)**: 简体和繁体中文
- **Japanese (ja)**, **Korean (ko)**, **French (fr)**, **Spanish (es)**
- **German (de)**, **Italian (it)**, **Dutch (nl)**, **Polish (pl)**
- **Swedish (sv)**, **Portuguese (pt)**, **Russian (ru)**, **Arabic (ar)**
- **Hindi (hi)**, **Indonesian (id)**, **Vietnamese (vi)**
- **Thai (th)**, **Hebrew (he)**

**阶段3 (phase3)**: 全部32种语言
- 新增: **Turkish (tr)**, **Tamil (ta)**, **Telugu (te)**
- **Malay (ms)**, **Bengali (bn)**, **Urdu (ur)**, **Persian (fa)**
- **Danish (da)**, **Finnish (fi)**, **Norwegian (no)**
- **Nepali (ne)**, **Marathi (mr)** 等

## 📝 翻译流程SOP (标准操作程序)

### 概述

本SOP定义了Nano Banana AI项目中多语言翻译的完整工作流程，确保翻译质量、一致性和可维护性。

### 1. 翻译质量检查流程

#### 1.1 自动质量检测

使用内置的翻译质量检查脚本：

```bash
# 检查所有语言翻译质量
node scripts/translation-quality-checker.js

# 检查特定语言
node scripts/translation-quality-checker.js --lang=fr,de,es
```

**检查项目**:
- ✅ 直接复制英文内容检测
- ✅ 包含英文单词检测  
- ✅ 疑似机器翻译检测
- ✅ 长度异常检测
- ✅ 空值检测

#### 1.2 质量报告生成

脚本自动生成详细报告：
- **JSON报告**: `docs/i18n/translation-quality-report.json`
- **Markdown报告**: `docs/i18n/translation-quality-report.md`

**报告内容**:
- 问题统计和分类
- 具体问题位置和内容
- 修复建议和优先级

### 2. 翻译修复流程

#### 2.1 批量修复脚本

```bash
# 修复所有语言翻译
node scripts/i18n-image-generation-fixer.js

# 修复特定语言组
node scripts/fix-translations-batch.js
node scripts/fix-all-translations.js
node scripts/fix-remaining-translations.js
node scripts/fix-final-translations.js
```

#### 2.2 修复策略

**深度合并策略**:
- 保持现有翻译内容
- 只修复问题部分
- 避免覆盖正确的翻译

**修复优先级**:
1. **高优先级**: 直接复制英文内容
2. **中优先级**: 疑似机器翻译
3. **低优先级**: 长度异常和包含英文单词

### 3. 翻译标准规范

#### 3.1 技术术语处理

**保持英文的术语**:
- 品牌名称: `Google Gemini`, `KIE AI`
- 技术标准: `API`, `HD`, `AI`
- 专有名词: `Pop Art`, `Pixel Art`

**需要本地化的术语**:
- 界面元素: 按钮、标签、提示信息
- 功能描述: 图片处理、艺术风格
- 错误消息: 用户友好的本地化表达

#### 3.2 翻译质量要求

**准确性**:
- 语义准确，符合原文意思
- 术语使用一致
- 语法正确，符合目标语言习惯

**地道性**:
- 使用本地化表达方式
- 避免机器翻译痕迹
- 符合目标用户文化背景

**一致性**:
- 相同概念使用相同翻译
- 保持术语统一
- 维护翻译风格一致

### 4. 新增语言流程

#### 4.1 添加新语言支持

1. **更新配置文件**
   ```typescript
   // config/app-config.ts
   export const LANGUAGE_CONFIG = {
     'new-lang': { name: 'New Language', flag: '🏳️' },
   };
   
   export const PHASE_CONFIGS = {
     phase2: {
       locales: ['en', 'zh', 'new-lang'] as const,
     }
   };
   ```

2. **创建翻译目录**
   ```bash
   mkdir -p messages/new-lang
   ```

3. **复制基础翻译文件**
   ```bash
   cp messages/en/*.json messages/new-lang/
   ```

4. **运行翻译修复脚本**
   ```bash
   node scripts/i18n-image-generation-fixer.js
   ```

#### 4.2 翻译文件结构

```
messages/
├── [locale]/
│   ├── Common.json              # 通用UI元素
│   ├── Navigation.json          # 导航项目
│   ├── Footer.json              # 页脚内容
│   ├── ImageGeneration.json     # 图片生成功能
│   ├── Blog.json                # 博客相关内容
│   └── ...                      # 其他命名空间
```

### 5. 质量监控流程

#### 5.1 定期检查

**检查频率**:
- 每次新功能发布前
- 每月定期检查
- 新语言添加后

**检查内容**:
- 翻译完整性
- 质量指标
- 用户反馈

#### 5.2 质量指标

**目标指标**:
- 直接复制英文内容: < 5%
- 疑似机器翻译: < 10%
- 包含英文单词: < 15%
- 整体问题率: < 20%

### 6. 故障排除

#### 6.1 常见问题

**翻译不显示**:
- 检查翻译文件是否存在
- 验证JSON格式是否正确
- 确认命名空间是否匹配

**质量检查失败**:
- 检查脚本依赖是否安装
- 验证文件路径是否正确
- 查看错误日志信息

#### 6.2 修复步骤

1. **备份现有翻译**
2. **运行质量检查脚本**
3. **分析问题报告**
4. **执行修复脚本**
5. **验证修复结果**
6. **更新文档记录**

### 7. 工具和脚本

#### 7.1 质量检查工具

- `scripts/translation-quality-checker.js` - 翻译质量检查
- `scripts/i18n-image-generation-checker.js` - 键值一致性检查
- `scripts/test-i18n-config.js` - 配置验证

#### 7.2 修复工具

- `scripts/i18n-image-generation-fixer.js` - 自动修复脚本
- `scripts/fix-translations-batch.js` - 批量修复
- `scripts/fix-all-translations.js` - 全面修复

#### 7.3 报告工具

- 自动生成JSON和Markdown报告
- 问题分类和优先级排序
- 修复建议和最佳实践

### 8. 最佳实践

#### 8.1 翻译原则

- **用户优先**: 以用户体验为中心
- **文化适应**: 考虑目标文化背景
- **术语一致**: 保持专业术语统一
- **简洁明了**: 避免冗长复杂的表达

#### 8.2 维护原则

- **定期检查**: 建立定期检查机制
- **持续改进**: 根据用户反馈优化
- **文档更新**: 及时更新翻译文档
- **版本控制**: 使用Git管理翻译版本

### 9. 团队协作

#### 9.1 角色分工

- **翻译人员**: 负责具体翻译工作
- **质量检查员**: 负责翻译质量审核
- **技术负责人**: 负责工具和流程维护
- **项目经理**: 负责整体协调和进度管理

#### 9.2 协作流程

1. **需求确认**: 明确翻译需求和范围
2. **任务分配**: 分配翻译任务给相关人员
3. **翻译执行**: 按照标准进行翻译
4. **质量检查**: 使用工具进行质量检查
5. **问题修复**: 修复发现的问题
6. **最终审核**: 人工审核和确认
7. **部署发布**: 部署到生产环境

---

**注意**: 本SOP应定期更新，确保与项目发展保持同步。如有疑问或建议，请联系技术团队。

### 翻译结构

翻译按命名空间组织，便于维护：

```
messages/
├── [locale]/
│   ├── Common.json              # 通用UI元素
│   ├── Navigation.json          # 导航项目
│   ├── Metadata.json           # SEO元数据
│   ├── Footer.json              # 页脚内容
│   ├── Blog.json                # 博客相关内容
│   ├── Tools.json               # 工具描述
│   └── ...                      # 其他命名空间
```

### 动态翻译加载

系统自动发现和加载翻译命名空间：

```typescript
// 自动命名空间发现
const messagesDir = path.join(process.cwd(), 'messages', locale);
const files = fs.readdirSync(messagesDir);
const namespaces = files
  .filter(file => file.endsWith('.json'))
  .map(file => file.replace('.json', ''));
```

### 语言检测和路由

- **自动检测**: 使用 `Accept-Language` 头部和浏览器偏好
- **基于Cookie的持久化**: 记住用户的语言选择
- **URL结构**: 使用 `as-needed` 语言前缀 (如英语用 `/`，中文用 `/zh`)
- **回退机制**: 对缺失翻译优雅地回退到英语

## 🧭 路由系统和导航

### URL结构

应用程序使用 Next.js 15 的 App Router 和动态语言段：

```
/                           # 英语 (默认)
/zh                         # 中文
/ja                         # 日语
/[locale]/blog              # 博客列表
/[locale]/blog/[slug]       # 博客文章
/[locale]/tools/bg-remover   # 工具页面
```

### 中间件配置

中间件处理：
- **语言检测和重定向**
- **静态文件服务** (图像、CSS、JS)
- **遗留URL重定向** (301重定向)
- **Cookie管理** 用于语言持久化

### 导航系统

导航通过 `config/navigation.json` 配置驱动：

```json
{
  "menuItems": [
    {
      "id": "home",
      "type": "link",
      "titleKey": "home",
      "href": "/",
      "icon": "home",
      "order": 1
    },
    {
      "id": "tools",
      "type": "dropdown",
      "titleKey": "tools",
      "children": [
        {
          "id": "bg-remover",
          "titleKey": "imageTools.bgRemover",
          "href": "/tools/bg-remover"
        }
      ]
    }
  ]
}
```

### 语言切换

语言切换组件提供：
- **实时语言切换** 无需页面重载
- **Cookie持久化** 用户偏好
- **国旗图标和本地语言名称**
- **可访问下拉菜单** 支持键盘导航

## 🎨 组件架构

### 布局组件
- **根布局**: 全局HTML结构、字体加载和元数据
- **语言布局**: 语言特定布局和翻译提供者
- **客户端布局**: 客户端组件和提供者

### UI组件库

遵循设计系统原则的可重用组件：

- **按钮**: 多种变体和加载状态
- **卡片**: 灵活的卡片组件和页眉操作
- **表单**: 带验证和错误处理的表单控件
- **导航**: 可配置导航菜单和下拉菜单
- **模态框**: 可访问模态组件和背景管理
- **加载状态**: 一致的加载指示器和旋转器

### 页面组件

按功能组织的页面特定组件：
- **首页**: 英雄区域、功能展示、用户评价
- **博客**: 文章列表、详情页面、MDX渲染
- **工具**: 工具特定界面和配置
- **页脚**: 多栏页脚和社交链接

## 🔍 SEO实现

### 动态元数据

全面的SEO元数据管理：
- **语言特定元数据**: 标题、描述、关键词
- **Open Graph标签**: 社交媒体分享优化
- **Twitter卡片**: Twitter特定元数据
- **规范URL**: 正确的URL规范化
- **Hreflang标签**: 语言特定URL替代

### 结构化数据

JSON-LD结构化数据：
- **博客文章**: 带作者和发布日期的文章模式
- **组织**: 公司信息和社交档案
- **网站**: 站点搜索和导航结构

### 技术SEO

- **站点地图生成**: 包含所有路由的自动站点地图
- **Robots.txt**: 搜索引擎抓取指令
- **图像优化**: WebP/AVIF支持和响应式图像
- **性能优化**: 核心Web指标关注

## 🛠 开发工作流

### 可用脚本

```bash
# 开发
npm run dev              # 启动开发服务器 (Turbopack)
npm run build            # 生产构建
npm run start            # 启动生产服务器

# 代码质量
npm run lint             # 运行ESLint
npm run test             # 运行Vitest测试

# 国际化
npm run i18n:check      # 检查翻译覆盖率
npm run i18n:fix        # 自动修复缺失翻译
```

### 开发环境
- **热模块替换**: Turbopack快速开发
- **TypeScript**: 严格类型检查和路径别名
- **ESLint**: 代码质量和一致性
- **Git钩子**: 预提交代码质量检查

### 构建过程
- **独立输出**: 部署优化
- **图像优化**: 自动WebP/AVIF生成
- **代码分割**: 自动包优化
- **静态生成**: 性能预渲染页面

## ⚙️ 配置文件

### 集中配置管理 (`config/app-config.ts`)

所有应用配置都集中在一个文件中管理，简化维护：

#### 多语言阶段配置
```typescript
// 修改当前部署阶段
export const CURRENT_PHASE = 'phase1'; // 'phase1' | 'phase2' | 'phase3'
```

#### 品牌配置
```typescript
// 修改品牌名称 - 全局生效
export const BRAND_CONFIG = {
  PRIMARY_BRAND: 'Nano Banana AI',        // 替换所有 "Wplace"
  PRODUCT_NAME: {
    en: 'Pixel Art Converter',       // 英文产品名
    zh: '像素艺术转换器',           // 中文产品名
  },
  REPLACEMENTS: {
    'Wplace': 'Nano Banana AI',           // 词汇映射
    'wplace': 'fastship',
  },
};
```

#### 语言配置
```typescript
// 中心化语言信息
export const LANGUAGE_CONFIG = {
  en: { name: 'English', flag: '🇺🇸' },
  zh: { name: '简体中文', flag: '🇨🇳' },
  // ... 其他语言
};
```

#### 阶段配置
```typescript
// 控制每个阶段的语言可用性
export const PHASE_CONFIGS = {
  phase1: { locales: ['en'] },
  phase2: { locales: ['en', 'zh', 'ja', ...] },
  phase3: { locales: ['en', 'zh', 'ja', ...] },
};
```

### Next.js配置 (`next.config.mjs`)
- **图像优化**: 多域名和格式支持
- **MDX支持**: Markdown和MDX处理
- **Webpack配置**: Web Worker支持和外部依赖
- **性能优化**: 缓存和压缩

### Tailwind CSS配置 (`tailwind.config.js`)
- **自定义主题**: 像素艺术调色板和排版
- **字体族**: Pixelify Sans和Press Start 2P
- **动画**: 自定义关键帧和过渡
- **插件**: 排版和动画插件

### TypeScript配置 (`tsconfig.json`)
- **严格模式**: 全面类型检查
- **路径别名**: 清晰的导入路径
- **Next.js集成**: 内置Next.js类型

### 国际化配置
- **自动配置**: 基于app-config.ts自动生成
- **阶段控制**: 通过CURRENT_PHASE变量控制
- **语言检测**: 浏览器偏好处理

### 支付环境配置 (`config/payment-link-config.ts`)

支持测试、生产环境的支付链接切换：

#### 环境变量配置
```bash
# .env.local
# 支付环境配置 (test, production)
NEXT_PUBLIC_PAYMENT_ENV=test

# 测试环境 - 沙盒测试链接
NEXT_PUBLIC_STRIPE_LITE_MONTHLY_TEST=https://buy.stripe.com/test_lite_monthly_test
NEXT_PUBLIC_STRIPE_LITE_YEARLY_TEST=https://buy.stripe.com/test_lite_yearly_test
# ... 其他套餐链接

# 生产环境 - 正式支付链接
NEXT_PUBLIC_STRIPE_LITE_MONTHLY_PROD=https://buy.stripe.com/6oUfZj1Ot5pK42k5tEbbG02
NEXT_PUBLIC_STRIPE_LITE_YEARLY_PROD=https://buy.stripe.com/5kQ9AV2Sx5pK7ew7BMbbG03
# ... 其他套餐链接
```

#### 功能特性
- **自动环境检测**: 根据环境变量自动选择支付链接
- **环境指示器**: 在非生产环境显示当前环境状态
- **配置验证**: 环境变量未配置时使用默认沙盒链接
- **类型安全**: 完整的TypeScript类型支持

#### 使用方法
```typescript
import { getPaymentLinks, getCurrentPaymentEnvironment } from '@/config/payment-link-config'

// 获取当前环境的支付链接
const paymentLinks = getPaymentLinks()
const currentEnv = getCurrentPaymentEnvironment()

// 使用支付链接
const liteMonthlyLink = paymentLinks.lite.monthly
```

## 🚀 快速开始

### 前置要求
- Node.js 18.0 或更高版本
- npm 或 yarn 包管理器

### 安装

1. **克隆仓库**
   ```bash
   git clone <repository-url>
   cd fast-ship
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **设置环境变量**
   ```bash
   cp env.example .env.local
   ```

   常用/必需的环境变量（按需配置）：
   - `NEXT_PUBLIC_SITE_URL`: 你的生产URL
   - `NEXT_PUBLIC_R2_PUBLIC_URL`: 资源CDN URL
   - `LANGUAGE_PHASE`: 多语言阶段 (phase1/phase2/phase3)
   - `INCLUDE_BLOG_IN_SITEMAP`: 是否包含blog页面在sitemap中 (true/false)
   - `NEXT_PUBLIC_PAYMENT_ENV`: 支付环境 (test/production)
   - `NEXT_PUBLIC_STRIPE_*_*_*`: 各套餐的支付链接环境变量

## ✅ 最近修复记录

- **KIE 图片上传偶发 TLS 失败**：为 `/api/kie/upload` 转发到 KIE 文件上传服务增加最多 2 次短延迟重试，覆盖网络/TLS 异常与 429/502/503/504 临时状态，降低图片上传过程中的偶发失败率。
- **GPT-Image-2 图生图积分与模型归类**：修复首页 GPT-Image-2 image-to-image 请求体仍显示 `google/nano-banana-edit` 的误导日志；统一前后端 GPT-Image-2 分辨率积分（1K=10、2K=17、4K=27），并让后端 402 积分不足错误触发前端升级弹窗。
- **Hero 输出卡片 Lottie 尺寸稳定**：为 Hero Unified Input 输出卡片的等待动画增加固定尺寸容器，避免免费用户排队结束切换到生成阶段时 Lottie 被 flex 重排压缩。
- **Hero Unified Input 大屏宽度**：在 2xl 及以上视口将输入框与输出卡片最大宽度从 60rem 提升到 72rem，普通桌面和移动端宽度逻辑保持不变。
- **Hero Unified Input 移动端下拉框**：小屏下拉框改为视口内 bottom-sheet 展示，并限制高度滚动，避免 Model/Settings 面板超出屏幕边缘。
- **Hero 模型两级选择**：厂商/系列（第一级）点击仅切换右侧列表，不再关闭 Model 下拉框；仅在选定具体模型或点击外部关闭时收起，避免移动端反复打开。
- **Hero Model 移动端高度稳定**：小屏 Model 面板使用固定 `72dvh` 高度与列内 `min-h-0` 滚动，避免切换视频/图片厂商时右侧内容高度变化带动 bottom-sheet 整体位移。
- **Hero 子模式下拉对齐**：Text/Image to Video/Image 的子模式菜单在小屏改为相对触发按钮 `absolute` 锚定（不再使用视口底部 bottom-sheet），与点击位置对齐。
- **Hero Model 小屏排版**：移动端缩小模型面板字号/内边距、左栏略收窄、描述 `break-words` 与标题行 `flex-wrap`，并加 `overflow-x-hidden`，减少横向滚动条。
- **pnpm frozen lockfile**：同步 `pnpm-lock.yaml` 根项目依赖声明，修复 CI 中 `ERR_PNPM_OUTDATED_LOCKFILE` 安装失败。
- **全局 body 背景**：根布局 `app/layout.tsx` 去掉 `from-slate-900 via-purple-900 to-slate-900` 渐变，改为 **`bg-black`**，防闪烁脚本与 `html` 初始 `backgroundColor` 同步为 **`#000000`**，避免与半透明玻璃叠出紫底。
- **首页复刻 seedance-reimagined**：将 `~/git_repo_ui_template/seedance-reimagined` 的首页区块（导航 Mega Menu、Hero 玻璃拟态输入、Showreel 标签与卡片、Features / Why / Architecture / UseCases / Workflow、对比表、Testimonials、FAQ Accordion、CTA、Footer）迁入 `components/seedance-landing/`，通过 `.theme-fastship-portal` 作用域 CSS 变量复用其青绿配色与 Syne/Manrope 字体，不覆盖全站 `:root` 黄主题；`components/sections/Home.tsx` 改为渲染该落地页；顶栏接入现有登录弹窗、积分与用户菜单，生成入口跳转 `/my-creations`（可带 `?prompt=`）。Hero 背景图为本地 `public/seedance-hero-bg.jpg`（`next/image` 加载，失败时回退渐变）；源模板仓库内无对应资源文件，当前图为 Unsplash 电影感素材，可自行替换同路径文件。
- **i18n 导航语言不匹配**：修复 `ClientLayout/Navbar` 被根布局固定英文 `NextIntlClientProvider` 包裹导致的语言永远为 `en`，现已将 `ClientLayout` 挪到 `app/[locale]/layout.tsx` 的 Provider 内，Navbar 在 `/zh` 下点击会走对应语言路由（如 `/zh/pricing`）。
- **年费订阅积分统计错误（Total Earned 重复）**：修复 `/api/credits/ledger/list` 将 `credits_history` 与 `credit_ledger` 直接相加导致年费订阅积分重复计算的问题，改为统一使用 `user_credits.creditsLifetimeEarned/creditsLifetimeUsed` 作为历史累计口径；同时修复 `generateYearlySubscriptionCredits` 写入 `credits_history.balanceAfter` 误用硬编码值的问题，并同步前端订阅页使用后端返回的 `totalEarned/totalUsed`。
- **构建缺失依赖 `react-draggable`**：补齐 `react-draggable` 依赖，修复 `ImpersonationFloatingPanel` 引入导致的 `Module not found: Can't resolve 'react-draggable'`（`react-draggable` 自带类型声明，无需安装 `@types/react-draggable`）。

4. **运行开发服务器**
   ```bash
   npm run dev
   ```

5. **打开浏览器**
   访问 `http://localhost:3000`

6. **提交到你的git仓库**
   ```bash
   git remote set-url origin https://github.com/your-username/your-project-name.git
   ```

### 生产构建

```bash
# 构建应用程序
npm run build

# 启动生产服务器
npm run start
```

## 🎯 自定义指南

### 📝 集中配置管理

使用 `config/app-config.ts` 一个文件管理所有配置：

#### 切换多语言阶段
```typescript
// 只需修改这一行即可控制多语言
export const CURRENT_PHASE = 'phase2'; // phase1 | phase2 | phase3
```

#### 更换品牌名称
```typescript
// 只需修改这里即可全局替换品牌词汇
export const BRAND_CONFIG = {
  PRIMARY_BRAND: 'YourNewBrand',  // 替换所有 "Wplace" 为 "YourNewBrand"
  PRODUCT_NAME: {
    en: 'Your Product Name',       // 英文产品名
    zh: '您的产品名称',           // 中文产品名
  },
  // 其他配置保持不变...
};
```

#### 添加新语言

1. **在配置文件中添加语言信息**
   ```typescript
   // config/app-config.ts
   export const LANGUAGE_CONFIG = {
     // 现有语言...
     'new-locale': { name: 'New Language', flag: '🏳️' },
   };
   ```

2. **更新阶段配置**
   ```typescript
   // config/app-config.ts
   export const PHASE_CONFIGS = {
     phase2: {
       locales: ['en', 'zh', 'new-locale'] as const,
     }
   };
   ```

3. **创建翻译目录**
   ```bash
   mkdir -p messages/new-locale
   ```

4. **添加翻译文件**
   ```bash
   # 复制并翻译现有文件
   cp messages/en/Common.json messages/new-locale/
   ```

### 添加新页面

1. **创建页面组件**
   ```typescript
   // app/[locale]/new-page/page.tsx
   export default function NewPage() {
     return <div>新页面内容</div>;
   }
   ```

2. **添加导航条目**
   ```json
   // config/navigation.json
   {
     "id": "new-page",
     "type": "link",
     "titleKey": "newPage",
     "href": "/new-page"
   }
   ```

3. **添加翻译**
   ```json
   // messages/en/Common.json
   {
     "newPage": "新页面"
   }
   ```

### 自定义主题

1. **修改Tailwind配置**
   ```javascript
   // tailwind.config.js
   theme: {
     extend: {
       colors: {
         'brand-primary': '#your-color',
       }
     }
   }
   ```

2. **更新CSS变量**
   ```css
   /* app/globals.css */
   :root {
     --primary: #your-color;
   }
   ```

## 🤝 贡献

1. Fork仓库
2. 创建功能分支
3. 进行更改
4. 添加测试（如适用）
5. 提交拉取请求

## 📄 许可证

此项目采用MIT许可证 - 详情请查看LICENSE文件。

## 🆘 支持

寻求支持和问题：
- 在GitHub上创建issue
- 查看文档
- 查看示例实现

## 🎯 路线图

- [ ] 增强的可访问性功能
- [ ] 性能监控集成
- [ ] 高级缓存策略
- [ ] 渐进式Web应用(PWA)支持
- [ ] 分析集成
- [ ] 高级SEO功能
- [ ] 电子商务功能

---

**使用 ❤️ 构建，基于 Next.js 15、TypeScript 和 Tailwind CSS**

### 2025-01-XX - 支付系统集成完成

#### 完成功能
- ✅ **Stripe 支付集成**: 完整的订阅和一次性购买支持
- ✅ **支付 API**: 创建支付会话、状态查询、历史记录
- ✅ **Webhook 处理**: 自动处理支付事件和积分充值
- ✅ **支付页面**: 成功/失败页面和用户体验优化
- ✅ **支付监控**: 基础安全监控和异常检测
- ✅ **多语言支持**: 支付流程的国际化支持

#### 技术实现
- **PaymentService**: 统一的支付服务层
- **PaymentOptionsModal**: 支付选项弹窗组件
- **支付状态页面**: `/payment/success` 和 `/payment/cancel`
- **监控工具**: `PaymentMonitoring` 类用于安全监控
- **测试脚本**: 支付系统验证工具

#### 配置文档
- **Stripe 配置指南**: `docs/stripe-setup-guide.md`
- **环境变量模板**: 包含所有必需的 Stripe 配置
- **测试工具**: `scripts/test-payment-system.js`

#### 支付方案
- Basic: $9.99/月, $99.99/年
- Pro: $29.99/月, $299.99/年  
- Premium: $59.99/月, $599.99/年
- Trial Pack: $2.99

#### 遗留问题
- 需要配置实际的 Stripe 密钥进行生产环境测试
- Webhook 端点需要在生产环境中设置
- 支付监控功能需要进一步扩展

## 📘 进度记录

### 2026-04-26
- 代码实现进度：
  - 优化 `app/api/kie/upload/route.ts` 的 KIE 文件上传代理：对网络/TLS 异常及 429/502/503/504 临时状态增加最多 2 次短延迟重试。
  - 修复 GPT-Image-2 图生图链路：前端请求模型名按所选模型发送，后端余额预检查和实际扣费按 GPT-Image-2 分辨率动态积分计算，402 返回会在首页触发积分不足弹窗。
  - 修复 Hero Unified Input 输出卡片 loading 动画在排队结束后被压缩的问题，Lottie 现在始终保留 120px 固定展示区域。
  - 优化 Hero Unified Input 在 2K 等大屏幕上的展示宽度：仅在 2xl 断点放宽输入框和输出卡片最大宽度到 72rem。
  - 优化 Hero Unified Input 移动端下拉框：Feature/Model/Settings 面板在小屏使用视口内 bottom-sheet 布局，避免左右溢出。
  - Hero Model 下拉两级选择：第一级（视频 Family / 图片 Company）点击不再关闭面板，仅在第二级选定模型时关闭。
  - Hero Model 小屏面板固定高度 + 双列独立滚动，消除切换厂商时菜单上下跳动。
  - Hero Sub-mode（Text to Video / Image to Video 等）小屏下列表改为锚定触发按钮，避免菜单出现在屏幕底部与按钮脱节。
  - Hero Model 下拉小屏缩小 Typography 与左右栏比例，避免横向滚动。
  - 同步 `pnpm-lock.yaml` 中缺失的 direct dependency specifier，修复 CI frozen lockfile 安装失败。
- 遗留问题与后续：
  - 若重试后仍失败，需结合 KIE 上游状态、Cloudflare 节点和本地网络代理继续排查。

### 2026-04-03
- 代码实现进度：
  - 修复构建错误：为 `app/components/admin/ImpersonationFloatingPanel.tsx` 补齐缺失依赖 `react-draggable`，本地 `npm run build` 已通过编译阶段并消除 `Can't resolve 'react-draggable'`。
  - 首页 UI 复刻：自本地项目 `seedance-reimagined` 迁移落地页结构与交互至 `components/seedance-landing/`，`tailwind.config.js` 启用 `tailwindcss-animate` 与 `fade-in`/`slide-up` 动画；`app/globals.css` 增加 `.theme-fastship-portal` 主题域。
- 遗留问题与后续：
  - 构建日志中仍可能出现 `next-intl` 的 `MISSING_MESSAGE` 提示（与本次依赖修复无关），如需彻底清零需补齐对应英文文案 key。
  - 落地页正文多为英文静态文案（与模板一致）；导航部分使用 `Navbar` 命名空间翻译。若需全页 i18n，可再拆 `messages/en` 命名空间并逐步替换硬编码字符串。

### 2026-03-24
- 功能设计进度：
  - 按 `https://seedance2video.io/` 首页视觉风格完成首屏到 FAQ 的整体 UI 复刻（暗色玻璃质感、渐变光晕、卡片化信息层级、生成面板布局）。
  - 复刻策略采用“视觉等价实现”：保留项目现有路由与布局体系，仅替换首页主体内容结构与样式。
  - 根据本地 `Seedance 2.0 Video Generator _ Seedance2 AI Video.mhtml` 调整首页结构，并切换为独立克隆展示模式（不再嵌入项目通用导航壳）。
  - 根据反馈将背景改为纯黑底，并补齐细节交互（菜单下拉、按钮微动效、卡片 hover 发光、FAQ 展开态）。
  - 登录流程调整：首页登录入口从 `/login` 跳转改为弹窗登录；`/login` 页面保留为备用页并移除远程背景图片。
  - 参考 `pictro_ai.new` 首页 Hero 交互，新增一体化输入组件（包含 AI Video / AI Image 主 Tab 与对应子模式）并集成到当前首页 Hero。
- 代码实现进度：
  - 新增 `components/sections/Home.tsx`，实现 Hero、Showreel、能力卡片、Architecture、Use Cases、Workflow、FAQ 等区块。
  - 更新 `app/[locale]/page.tsx`，首页改为渲染 `Home`。
  - 更新 `app/[locale]/ClientLayout.tsx`：首页路径下不再渲染项目通用 `Navbar/Footer/AppLayout`，避免“嵌入式”效果。
  - 新增 `components/sections/HeroUnifiedInput.tsx`：实现 Hero 集成输入组件（AI Video/AI Image、子模式、模型、比例、Prompt、Random、Generate）。
  - 更新 `components/sections/Home.tsx`：Hero 右侧替换为 `HeroUnifiedInput`，保持登录弹窗优先策略。
  - 未登录点击 Generate：`lib/hero-pending-draft-storage.ts` 将 Prompt 写入 `sessionStorage`，OAuth 跳转回首页后自动回填并清除（24h 内有效，不与 Remix 提示词冲突）。
  - 兼容性处理：复刻页面未依赖任何外部图片域名或远程 `next/image` 资源，避免“未配置域名/图片白名单”导致页面加载受影响。
- 遗留问题与后续：
  - 目前为静态复刻版（展示型 UI），如需 1:1 接入目标站点的交互（如真实视频预览、生成历史、积分扣费逻辑）可在下一步逐块接入现有业务组件。

### 2025-12-19
- 功能设计进度：
  - 修复 Navbar 桌面端 `Video AI` 下拉菜单：鼠标悬停可展开且不会被裁切遮挡。
  - 优化 `Video AI` 下拉菜单视觉与排版：卡片化入口、hover 对比度提升、加宽避免长标题逐词换行。
  - 修复下拉菜单“双重圆角/双重边框”视觉问题：避免内容容器重复绘制外框。
  - 新增 `Tools` 菜单项：位置在 `Video AI` 后面，包含 `Sora 2 Watermark Remover`（从 `Video AI` 菜单中移出）。
  - 重构 `Tools` 菜单为上下两栏结构：`Image Tools` / `Video Tools`，将 `Watermark Remover` 放入 `Image Tools`，`Sora 2 Watermark Remover` 放入 `Video Tools`。
  - 优化下拉菜单样式：去掉 Viewport 的白色边框，实现无边框设计。
  - 实现响应式折叠菜单：当 Navbar 宽度缩小时（xl 以下），只显示重要菜单项（Home、Pricing、Video AI、Tools），其他菜单（Features、Gallery、Changelog）折叠到右侧汉堡包菜单中。
  - 调整汉堡包菜单位置：移动到积分组件左侧。
  - 优化积分显示：当 Navbar 因滑出首屏宽度自动减少时，只展示积分余额，不展示积分套餐（如：max_monthly、basic_yearly）。
  - 优化下拉菜单触发按钮背景：Video AI 和 Tools 的下拉菜单触发按钮保持透明背景，与 Navbar 背景一致。
  - 实现下拉菜单响应式适配：当屏幕宽度不足时，下拉菜单内容自动换行，避免被遮挡。Video AI 菜单在 sm 以下使用单列布局，Tools 菜单使用响应式宽度。
  - 实现下拉菜单居中对齐：所有下拉菜单（Video AI、Tools）与对应触发按钮居中对齐。
  - 优化下拉菜单宽度：下拉菜单自适应整体加宽，至少宽度菜单右侧能到达触发项正下方位置，防止鼠标从触发项移动到下拉菜单时菜单消失。
- 代码实现进度：
  - 更新 `app/components/header/Navbar.tsx`：
    - 桌面端 `NavigationMenu` 改为受控 `value`，并在 `Video AI` trigger 上增加 hover 打开逻辑；
    - 修复容器 `overflow` 导致的下拉内容裁切（桌面端 `overflow-visible`）。
    - 下拉菜单"General Features"改为卡片式栅格布局，hover 使用 `bg-primary + text-primary-foreground`（黄底黑字更清晰）。
    - 增加下拉面板宽度（`w-[34rem]`），保持上栏两列卡片布局，长标题自然换行（不再强制独占一行）。
    - 新增 `Tools` 下拉菜单（桌面端和移动端），使用 `Wrench` 图标，包含 `Sora 2 Watermark Remover` 链接。
    - 从 `Video AI` 菜单中移除 `Sora 2 Watermark Remover`（桌面端和移动端）。
    - 重构 `Tools` 菜单为上下两栏结构：
      - 上栏：`Image Tools`，包含 `Watermark Remover`（链接 `/watermark-remover`）。
      - 下栏：`Video Tools`，包含 `Sora 2 Watermark Remover`（链接 `/sora-2-watermark-remover`）。
      - 移动端同样采用分类结构，使用分类标题区分。
  - 更新翻译文件 `messages/en/Navbar.json` 和 `messages/zh/Navbar.json`：
    - 移除 `videoAISection.sora2WatermarkRemover`。
    - 新增 `toolsSection` 对象，包含 `title`、`imageTools`、`videoTools`、`watermarkRemover` 和 `sora2WatermarkRemover`。
  - 更新 `components/ui/navigation-menu.tsx`：
    - 去掉 `NavigationMenuViewport` 的 `border` 类，实现无边框设计。
  - 实现响应式折叠菜单：
    - 在 `Navbar.tsx` 中新增 `CollapsedMenuDropdown` 组件，用于在 xl 以下显示折叠的菜单项。
    - Features、Gallery、Changelog 菜单项在 xl 以下隐藏（`hidden xl:block`），折叠到右侧汉堡包菜单中。
    - 右侧功能区域在 xl 以下显示折叠菜单按钮（`xl:hidden`）。
  - 调整汉堡包菜单位置和积分显示优化：
    - 将 `CollapsedMenuDropdown` 组件移动到积分组件左侧（在 `CreditsDisplay` 之前）。
    - 在 `CreditsDisplay` 组件中新增 `hideSubscription` prop，当 Navbar 滑出首屏（`isAtTop` 为 `false`）时，隐藏积分套餐信息，只显示积分余额。
    - 为 `Video AI` 和 `Tools` 的 `NavigationMenuTrigger` 添加透明背景样式（`!bg-transparent`），覆盖默认的 `bg-background` 和 `hover:bg-accent` 样式，保持与 Navbar 背景一致。
  - 实现下拉菜单响应式适配：
    - 将 `Video AI` 下拉菜单内容容器从固定宽度 `w-[34rem]` 改为响应式宽度 `w-full max-w-[34rem] min-w-[20rem]`，并添加响应式网格布局 `grid-cols-1 sm:grid-cols-2`，在 sm 以下使用单列布局。
    - 将 `Tools` 下拉菜单内容容器从固定宽度 `w-[20rem]` 改为响应式宽度 `w-full max-w-[20rem] min-w-[16rem]`。
    - 在 `NavigationMenuViewport` 中添加 `max-w-[calc(100vw-2rem)]`，确保下拉菜单不会超出屏幕边界。
  - 实现下拉菜单居中对齐：
    - 修改 `NavigationMenuContent` 的默认定位样式，将 `md:left-0` 改为 `md:left-1/2 md:-translate-x-1/2`，使下拉菜单内容相对于触发按钮居中。
    - 移除 Tools 菜单的 `!left-0` 覆盖样式，使其也使用居中对齐。
- 遗留问题与后续：
  - 如需支持“移出延迟关闭 / 更复杂的 hover 行为”，可基于 `desktopNavValue` 增加关闭延迟定时器。

### 2025-09-18
- 功能设计进度：
  - 增加开发/构建/启动前的环境变量校验机制，保障必需配置完整性。
- 代码实现进度：
  - 新增 `scripts/check-env.js`，支持 `.env` 文件加载，校验必需与可选变量。
  - 更新 `package.json` 脚本：
    - `dev`/`build`/`prestart` 前执行检查
    - 新增 `dev:skip-check`、`env:check`
- 遗留问题与后续：
  - 建议补充 `.env.example` 与文档中的环境变量说明，便于团队协作与部署。

### 2025-09-22
- 功能设计进度：
  - 将 Analytics Vidhya 的 Nano Banana 文章翻译为日语，准备博客发布。
- 代码实现进度：
  - 新增 `docs/博客文章/blog1.md`，在文首加入站点链接 `https://nano-banana-ai.xyz`，文末标注原文来源链接。
- 遗留问题与后续：
  - 后续将根据站点样式优化该文章的封面与元数据（标题/描述/OG图）。

### 2025-09-23
- 功能设计进度：
  - 以 git subtree 形式引入 `fast-ship` 模板工程，前缀目录为 `template_proj`。
- 代码实现进度：
  - 添加远程 `template_proj_remote` 指向 `https://github.com/lucaAce1024/fast-ship.git`，默认分支为 `master`。
  - 执行引入命令：
    - `git subtree add --prefix=template_proj template_proj_remote master --squash`
- 使用与维护：
  - 更新至上游最新：
    - `git subtree pull --prefix=template_proj template_proj_remote master --squash`
  - 如需同步其他分支（例如 `b3-standard-db-login-nopay`），将命令中的 `master` 替换为目标分支。
- 遗留问题与后续：
  - 评估模板与现有代码的整合边界（依赖、脚手架、命名冲突），按需分阶段接入。

### 2025-09-23（第二批次）
- 功能设计进度：
  - 统一首页生图相关组件的 UI 风格，采用 `GenerateForm` 的黄色主题样式。
- 代码实现进度：
  - 更新 `app/components/home/EmbeddedImageGenerator.tsx`：容器卡片、占位卡片与操作按钮改为黄色主题（bg-yellow/border-yellow）。
  - 更新 `app/components/image-generation/PromptInputSection.tsx`：表单卡片、`Textarea` 边框与提交按钮统一黄色主题。
  - 更新 `app/components/image-generation/ResultDisplay.tsx`：结果与比较视图卡片、按钮、提示文本统一黄色主题。
- 遗留问题与后续：
  - 如需进一步强化品牌差异化，可将黄色主题提取为 `tailwind` 的 `theme.extend.colors` 或 CSS 变量，避免重复类名。

### 2025-10-02
- 功能设计进度：
  - 基于 KIE Veo3 API 实现视频生成后端服务，支持文本生图和图片转视频功能。
- 代码实现进度：
  - 新增 `app/types/kie-api.ts` 视频生成相关类型定义：`KIEVideoGenerateRequest`、`KIEVideoJobData`、`KIEVideoResponse`。
  - 在 `app/services/kie-service.ts` 中实现 `generateVideo()` 方法，支持 Veo3/Veo3_fast 模型、多种宽高比、备用模型、提示词翻译等功能。
  - 创建 `app/api/kie-video/route.ts` 后端 API 路由，提供 POST（提交任务）和 GET（查询状态）端点。
  - 创建 `app/api/kie-video/poll/route.ts` 轮询端点，支持单个任务轮询（GET）和批量轮询（POST，最多10个任务）。
  - 创建 `docs/kie-docs/video_generator_backend_api.md` 完整使用文档，包含 API 说明、使用示例、React Hook 示例等。
- 遗留问题与后续：
  - 需要前端页面集成视频生成功能，创建用户友好的视频生成界面。
  - 建议添加视频生成任务管理功能，如任务列表、历史记录等。
  - 需要测试 1080P 高清视频生成和下载功能（仅 16:9 支持）。

### 2025-10-02（第二批次）
- 功能设计进度：
  - 实现 KIE 视频任务详细状态查询接口（/api/v1/veo/record-info）和 1080P 高清视频获取接口（/api/v1/veo/get-1080p-video）。
- 代码实现进度：
  - 新增 `app/types/kie-api.ts` 类型定义：`KIEVideoTaskDetailResponse`（任务详情）和 `KIEVideo1080PResponse`（1080P视频响应）。
  - 在 `app/services/kie-service.ts` 中实现 `getVideoTaskDetail()` 方法查询任务详细状态，包含 successFlag、fallbackFlag、errorCode 等信息。
  - 在 `app/services/kie-service.ts` 中实现 `get1080PVideo()` 方法获取 1080P 高清视频URL（仅支持 16:9 宽高比，备用模式除外）。
  - 更新 `app/api/kie-video/route.ts` GET 端点，支持 `action=detail` 查询详情和 `action=1080p` 获取高清视频。
  - 更新 `app/api/kie-video/poll/route.ts`，使用新的 record-info API，返回更详细的任务信息（successFlag、fallbackFlag、创建时间等）。
  - 更新 `docs/kie-docs/video_generator_backend_api.md` 和 `video_generator_quick_start.md`，添加新接口的使用说明和示例代码。
- 遗留问题与后续：
  - 需要创建前端视频生成界面。

### 2025-10-03
- 功能设计进度：
  - 基于 `EmbeddedImageGenerator` 模板创建 AI 视频生成前端组件，支持文生视频和图生视频两种模式。
- 代码实现进度：
  - 创建多语言翻译文件：`messages/en/VideoGeneration.json` 和 `messages/zh/VideoGeneration.json`，包含 37 个 UI 字符串。
  - 创建视频生成子组件：
    - `app/components/video-generation/VideoPromptInputSection.tsx`：提示词输入和高级设置（模型选择、宽高比、水印、随机种子等）。
    - `app/components/video-generation/VideoTabSwitcher.tsx`：文生视频/图生视频模式切换。
    - `app/components/video-generation/VideoResultDisplay.tsx`：视频结果展示、下载和 1080P 下载功能。
    - `app/components/video-generation/VideoModal.tsx`：全屏视频预览模态框。
    - `app/components/video-generation/VideoLoadingSpinner.tsx`：视频生成进度显示（带进度条和任务ID）。
  - 创建主组件 `app/components/home/EmbeddedVideoGenerator.tsx`：
    - 支持文生视频和图生视频两种模式，Tab 切换。
    - 集成图片上传功能（复用 ImageEditorCanvas）。
    - 实现自动轮询机制，每秒检查任务状态，最多轮询 3 分钟。
    - 支持高级设置：模型选择（veo3/veo3_fast）、宽高比（16:9/9:16/Auto）、水印、随机种子、备用模型、自动翻译等。
    - 完整的错误处理和加载状态管理。
  - 创建测试脚本 `scripts/test-video-generation-frontend.js`，验证所有组件文件和功能完整性。
- 遗留问题与后续：
  - 需要在实际页面中集成 `EmbeddedVideoGenerator` 组件并测试完整流程。
  - 图生视频模式需要先将图片上传到服务器获取公网 URL（当前使用 `/api/upload` 接口）。
  - 建议添加视频历史记录和任务管理功能。
  - 考虑优化轮询策略（如使用 WebSocket 或 Server-Sent Events）以减少服务器压力。

### 2025-10-03（第二批次）
- 功能设计进度：
  - 创建 AI 图片生成和视频生成的独立页面，并在导航栏中添加入口。
- 代码实现进度：
  - 创建页面 `app/[locale]/ai-image/page.tsx`：
    - 完整的 AI 图片生成页面，集成 `EmbeddedImageGenerator` 组件。
    - 包含功能说明、使用步骤、SEO 元数据。

### 2025-01-15
- 功能设计进度：
  - 在视频生成首页的生图功能区，Aspect Ratio组件下方添加Sora 2版本选择组件。
- 代码实现进度：
  - 更新 `app/components/video-generation/VideoPromptInputSection.tsx`：
    - 在Aspect Ratio选择器下方新增Sora 2版本选择区域。
    - 添加三个版本选项：Sora 2、Sora 2 Pro (720P)、Sora 2 Pro (1080P)。
    - 所有版本按钮置灰不可点击，显示"Coming Soon"标签。
    - 使用项目设计系统的CSS变量（border-border、bg-muted、text-muted-foreground）保持UI一致性。
    - 采用响应式网格布局（grid-cols-1 sm:grid-cols-3）适配移动端和桌面端。
  - 更新 `app/components/header/Navbar.tsx`：
    - 添加 "AI Tools" 下拉菜单，包含 AI Image 和 AI Video 两个选项。
    - 桌面端显示卡片式下拉菜单，移动端显示分组列表。
    - 集成图标（Image、Video）和描述文字。
  - 更新翻译文件 `messages/en/Navbar.json` 和 `messages/zh/Navbar.json`：
    - 添加 `aiTools`、`aiImage`、`aiImageDesc`、`aiVideo`、`aiVideoDesc` 等翻译键。
  - 创建测试脚本 `scripts/test-ai-pages.js`：
    - 验证页面文件、组件内容、导航栏更新、翻译文件。
    - 所有测试通过（✅ 23 项检查）。
- 遗留问题与后续：
  - 页面已创建完成，可通过 `/ai-image` 和 `/ai-video` 访问。
  - 建议添加页面间的导航链接（如在 AI 图片页面推荐 AI 视频功能）。
  - 可以考虑添加用户作品展示、使用教程等增强功能。

### 2025-11-22
- 功能设计进度：
  - 明确本地开发环境需提供 `LANGUAGE_PHASE` 变量，避免 Next.js 启动阶段报错，保障多语言阶段配置一致性。
- 代码实现进度：
  - 新增 `.env.local`（仅开发环境使用），写入 `LANGUAGE_PHASE=phase2`，与 `env.example` 保持同步，确保 `config/app-config.ts` 的 `getCurrentPhase()` 校验通过。
  - 更新 `config/app-config.ts`，在缺失或非法语言阶段时自动回退到默认 `phase1` 并输出 `console.warn`，提升容错能力。
- 遗留问题与后续：
  - 若需切换不同语言阶段，请同步更新 `.env.local` 并重新启动 `npm run dev`，必要时补充其它相关环境变量。

### 2025-11-22（第二批次）
- 功能设计进度：
  - 统一双 Logo 组合的视觉比例：左侧保持 1:1 方形，右侧横向 Logo 与其高度一致，保证导航栏中的图形层级感。
- 代码实现进度：
  - 重构 `app/components/header/SiteLogo.tsx`，引入动态容器高度、`aspect-square` 与 `aspectRatio` 配置，使用 `FallbackImage` 填充两个区域，实现「封装到一起」的排版。
- 遗留问题与后续：
  - 若后续需要响应式调整尺寸，可通过 `SiteLogo` 组件的 `height`/`width` 参数或外部容器类名自定义。