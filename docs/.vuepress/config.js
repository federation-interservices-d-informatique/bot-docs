module.exports = {
  title: "FIIBot - Docs",
  description: "La documentation de FII - Bot",
  base: "/bot-docs/",
  theme: "yuu",
  head: [
    ['link', { rel: 'icon', href: '/fii.png' }],
  ],
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: 'Commandes', link: '/commands/' },
      {
        text: "GitHub",
        link: "https://github.com/Federation-Interservices-D-Informatique",
      },
    ],
  },
};
