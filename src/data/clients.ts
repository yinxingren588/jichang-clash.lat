export interface ClientApp {
  id: string;
  name: string;
  platform: 'Windows' | 'macOS' | 'Android' | 'iOS' | 'Linux';
  icon: string;
  recommended: boolean;
  desc: string;
  githubUrl: string;
  downloadUrl: string;
  tutorialUrl: string;
}

export const clientsData: ClientApp[] = [
  {
    id: "clash-verge-rev-win",
    name: "Clash Verge Rev",
    platform: "Windows",
    icon: "🪟",
    recommended: true,
    desc: "目前 Windows 平台最主流、更新最频繁的 Clash 客户端，内置 Mihomo 内核，支持原生 TUN 模式与中文界面。",
    githubUrl: "https://github.com/clash-verge-rev/clash-verge-rev",
    downloadUrl: "https://github.com/clash-verge-rev/clash-verge-rev/releases/latest",
    tutorialUrl: "/tutorials/clash-guide"
  },
  {
    id: "mihomo-party-win",
    name: "Mihomo Party",
    platform: "Windows",
    icon: "🎉",
    recommended: false,
    desc: "颜值极高的跨平台代理客户端，拥有现代化设计、内置规则路由集与轻量化开销。",
    githubUrl: "https://github.com/mihomo-party-org/mihomo-party",
    downloadUrl: "https://github.com/mihomo-party-org/mihomo-party/releases/latest",
    tutorialUrl: "/tutorials/clash-guide"
  },
  {
    id: "clash-verge-rev-mac",
    name: "Clash Verge Rev",
    platform: "macOS",
    icon: "🍏",
    recommended: true,
    desc: "完美适配 Apple Silicon M 系列芯片与 Intel 架构，原生支持 macOS 系统代理与 TUN 全局加速。",
    githubUrl: "https://github.com/clash-verge-rev/clash-verge-rev",
    downloadUrl: "https://github.com/clash-verge-rev/clash-verge-rev/releases/latest",
    tutorialUrl: "/tutorials/clash-guide"
  },
  {
    id: "clash-meta-android",
    name: "Clash Meta for Android (CMFA)",
    platform: "Android",
    icon: "🤖",
    recommended: true,
    desc: "安卓端功能最完善的开源代理工具，支持分应用代理、分流规则配置，后台运行低功耗省电。",
    githubUrl: "https://github.com/MetaCubeX/ClashMetaForAndroid",
    downloadUrl: "https://github.com/MetaCubeX/ClashMetaForAndroid/releases/latest",
    tutorialUrl: "/tutorials/clash-guide"
  },
  {
    id: "shadowrocket-ios",
    name: "Shadowrocket (小火箭)",
    platform: "iOS",
    icon: "🚀",
    recommended: true,
    desc: "iOS 平台最经典的科学上网神器（美区 App Store 售价 $2.99），支持一键扫描二维码导入或订阅导入。",
    githubUrl: "https://apps.apple.com/us/app/shadowrocket/id932747118",
    downloadUrl: "https://apps.apple.com/us/app/shadowrocket/id932747118",
    tutorialUrl: "/tutorials/clash-guide"
  },
  {
    id: "sing-box-all",
    name: "Sing-box",
    platform: "Linux",
    icon: "📦",
    recommended: false,
    desc: "新一代超轻量级通用代理客户端，资源占用极低，配置灵活，适合极客玩家与多协议折腾党。",
    githubUrl: "https://github.com/SagerNet/sing-box",
    downloadUrl: "https://github.com/SagerNet/sing-box/releases/latest",
    tutorialUrl: "/tutorials/clash-guide"
  }
];
