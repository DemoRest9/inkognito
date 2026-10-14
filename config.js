/* ====== INKOGNITO (Batumi) — demo config ====== */
window.SITE = {
  name: "Inkognito",
  logo: "assets/logo.webp",          // <- ჩადე Inkognito-ს ლოგო (Instagram-იდან)
  phone: "+995555747343",
  currency: "GEL",

  // <- ჩასვი Inkognito-ს ახალი Google Sheet-ის Apps Script /exec ბმული
  sheetUrl: "https://script.google.com/macros/s/AKfycbz2KS5uUeX0USK8vPzePJBPE_-OYvM9Hr1MBNl3qvQw_nWEB30-0cRzugvtt4uS4SxT/exec",

  orderEndpoint: "",                  // ცარიელი = DEMO რეჟიმი
  allowedIps: [],

  langs: ["ka", "en", "ru"],
  defaultLang: "ka",
  slides: [],                         // ცარიელი = მენიუს ფოტოებიდან

  // ელეგანტური ბნელი თემა: გრაფიტი + სპილენძი + ბორდო
  theme: {
    "charcoal": "#1b1a1f", "charcoal-soft": "#26242b",
    "parchment": "#f2eee8", "parchment-dim": "#e4ded3",
    "ink": "#241f22", "ink-soft": "#645b5e",
    "brass": "#b8865a", "brass-bright": "#d4a077",
    "wine": "#5b2a3c", "wine-bright": "#74364c"
  },

  about: {
    ka: { eyebrow: "ჩვენ შესახებ", title: "კეთილი იყოს თქვენი მობრძანება {name}-ში",
      lede: "ევროპული რესტორანი ბათუმში — გემრიელი კერძები, კარგი მუსიკა და თბილი სერვისი.",
      story: "Inkognito მდებარეობს MELINI Boutique Hotel-ში. შეგიძლიათ ისადილოთ ადგილზე ან წაიღოთ საკვები თან.",
      address: "მარჯანიშვილის ქ. 4, ბათუმი 6000 (MELINI Boutique Hotel)",
      hours: [["დახურვა", "00:00"]] },
    en: { eyebrow: "About Us", title: "Welcome to {name}",
      lede: "A European restaurant in Batumi — great food, good music and warm service.",
      story: "Inkognito is located in MELINI Boutique Hotel. Dine in or take your food away.",
      address: "4 Marjanishvili St, Batumi 6000 (MELINI Boutique Hotel)",
      hours: [["Closing time", "00:00"]] },
    ru: { eyebrow: "О нас", title: "Добро пожаловать в {name}",
      lede: "Европейский ресторан в Батуми — вкусная кухня, хорошая музыка и тёплый сервис.",
      story: "Inkognito находится в MELINI Boutique Hotel. Можно поужинать в зале или взять еду с собой.",
      address: "ул. Марджанишвили, 4, Батуми 6000 (MELINI Boutique Hotel)",
      hours: [["Закрытие", "00:00"]] }
  }
};
