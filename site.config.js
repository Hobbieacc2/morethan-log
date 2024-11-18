const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Manga Brasil",
    image: "/avatar.svg", // Se você quiser criar seu próprio avatar de Notion, confira https://notion-avatar.vercel.app
    role: "Portal de Jornalismo de Mangás",
    bio: "Acompanhe as últimas notícias sobre mangás e animes!",
    email: "",
    linkedin: "",
    github: "",
    instagram: "",
  },
  projects: [
  ],
  // blog setting (required)
  blog: {
    title: "Manga Brasil",
    description: "Bem-vindo ao Manga Brasil, seu portal de notícias sobre mangás e animes!",
    scheme: "dark", // 'light' | 'dark' | 'system'
  },

  // CONFIG configuration (required)
  link: "https://mangabrasil.org", // Link para o site
  since: 2022, // Ano de fundação do site
  lang: "pt-BR", // Idioma do site
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // Link para gerar imagem OG, não termina com barra

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Código de incorporação -> valor de data-app-id
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // Distinção entre ambientes de desenvolvimento e produção (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // Tempo de revalidação para [slug], índice
}

module.exports = { CONFIG }
