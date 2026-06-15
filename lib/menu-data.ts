export interface MenuItem {
  id: string
  name: string
  description: string
  price: string
  image: string
}

export interface MenuSection {
  id: string
  title: string
  items: MenuItem[]
}

export const meatMenu: MenuSection = {
  id: "meat",
  title: "Hier vindt u ons smaakvolle niet-vegetarische eten.",
  items: [
    {
      id: "1",
      name: "Ful Mesela 1",
      description:
        "Gestampte tuinbonen bereid met ui, olijfolie, feta, ei en tomaat, geserveerd met brood en pindakaas.",
      price: "€ 12,00",
      image: "/menu/ful-mesela.jpg",
    },
    {
      id: "2",
      name: "Kitcha Fit Fit met siga & tesmi 2",
      description:
        "Vers knapperig Oost-Afrikaans brood, bereid met chilipoeder en geklaarde boter.",
      price: "€ 15,00",
      image: "/menu/kitcha-fit-fit.jpg",
    },
    {
      id: "3",
      name: "Injera Fit Fit Zigni (Keyh Xebhi Sga) 3",
      description: "Pikante stoofpot van rundvlees gemengd met injera.",
      price: "€ 15,00",
      image: "/menu/injera-fit-fit.jpg",
    },
    {
      id: "4",
      name: "Tsebhi Dorho nay habesha 4",
      description:
        "Stoofpot van kip, langzaam bereid in een saus van tomaat en ui, geserveerd met salade, linzen en spinazie.",
      price: "€ 15,00",
      image: "/menu/tsebhi-dorho.jpg",
    },
    {
      id: "5",
      name: "Zigni met boter of olijfolie 5",
      description:
        "Stoofpot van rundvlees, langzaam bereid in een marinade van specerijen en chilipoeder.",
      price: "€ 15,99",
      image: "/menu/zigni.jpg",
    },
    {
      id: "7",
      name: "Goreed Goreed 7",
      description:
        "Malse blokjes mager rundvlees, gebakken in geklaarde boter en bereid met whisky. Geserveerd met salade en spinazie.",
      price: "€ 17,00",
      image: "/menu/goreed-goreed.jpg",
    },
    {
      id: "8",
      name: "Shekla 8",
      description:
        "Lamsvlees, gekruid en bereid met geklaarde boter of olijfolie, paprika en uien met injera.",
      price: "€ 20,00",
      image: "/menu/shekla.jpg",
    },
    {
      id: "9",
      name: "Xaeda tbsi 9",
      description:
        "Gekruid lams- of rundvlees, bereid met geklaarde boter, uien en Spaanse pepers. Geserveerd met salade, linzen en spinazie.",
      price: "€ 15,00",
      image: "/menu/xaeda-tbsi.jpg",
    },
    {
      id: "10",
      name: "Keyh tbsi 10",
      description:
        "Gekruid lams- of rundvlees, bereid met geklaarde boter, uien en Spaanse pepers. Geserveerd met salade, linzen en spinazie.",
      price: "€ 15,00",
      image: "/menu/keyh-tbsi.jpg",
    },
    {
      id: "11",
      name: "Merhaba's Shero met Vlees 11",
      description:
        "Lamsvlees, gebakken shiro, ui, tomaat, knoflook, losse peper, verse Eritrese boter en injera.",
      price: "€ 14,95",
      image: "/menu/shero-met-vlees.jpg",
    },
    {
      id: "12",
      name: "Eritrea Special 12",
      description: "Chef's keuze van 3 gerechten met extra bijgerechten.",
      price: "€ 23,99",
      image: "/menu/eritrea-special.jpg",
    },
    {
      id: "13",
      name: "Merhaba's Rijst met Groenten 13",
      description: "Met wortel en uien, paprika, broccoli en courgette.",
      price: "€ 15,99",
      image: "/menu/rijst-groenten.jpg",
    },
    {
      id: "14",
      name: "Merhaba's Rijst met Vlees 14",
      description: "Met wortel en uien, paprika, broccoli, courgette en lamsvlees.",
      price: "€ 15,99",
      image: "/menu/rijst-vlees.jpg",
    },
  ],
}

export const vegetarianMenu: MenuSection = {
  id: "vegetarian",
  title: "Hier vindt u ons smaakvolle vegetarische eten en drinken",
  items: [
    {
      id: "v1",
      name: "Ful Sada (Nay Xom) 1",
      description:
        "Gestampte tuinbonen met olijfolie en tomaat, geserveerd met brood, aardappel en pindakaas.",
      price: "€ 9,00",
      image: "/menu/ful-sada.jpg",
    },
    {
      id: "v2",
      name: "Selata met Aardappel 2",
      description: "Met ui, tomaat, olijfolie en peper, geserveerd met injera of brood.",
      price: "€ 4,99",
      image: "/menu/selata.jpg",
    },
    {
      id: "v3",
      name: "Brood, Eieren en Avocado 3",
      description: "Brood, Eieren en Avocado.",
      price: "€ 4,99",
      image: "/menu/brood-eieren.jpg",
    },
    {
      id: "v4",
      name: "Merhaba's Salade Special van Habesha 4",
      description:
        "Salade met komkommer, ui, tomaat en huisgemaakte dressing; met of zonder olie.",
      price: "€ 4,99",
      image: "/menu/salade.jpg",
    },
    {
      id: "v5",
      name: "Timtmo, Alicha en Spinazie of Hamli 5",
      description:
        "Gekruide en gebakken linzen in olijfolie. Wortels, bonen, kool en aardappelen bereid in kerriesaus, geserveerd met spinazie.",
      price: "€ 15,95",
      image: "/menu/alicha.jpg",
    },
    {
      id: "v6",
      name: "Xebhi Dnish Xaeda en Keyh 6",
      description: "Gekruide en gebakken aardappelen. Wortels, bonen en merhaba's saus.",
      price: "€ 14,90",
      image: "/menu/dnish.jpg",
    },
    {
      id: "v7",
      name: "Bebiaynetu 7",
      description:
        "Shiro en alcha, gekookt in Oost-Afrikaanse kruiden en specerijen, geserveerd met salade, linzen en spinazie.",
      price: "€ 17,99",
      image: "/menu/bebiaynetu.jpg",
    },
    {
      id: "v8",
      name: "Habesha Shiro Speciaal 8",
      description: "Fijngemalen kikkererwten bereid in olijfolie.",
      price: "€ 12,49",
      image: "/menu/shiro-speciaal.jpg",
    },
    {
      id: "v9",
      name: "Merhaba's Veggie Combi voor 2 pers (ook beschikbaar voor 3 pers) 9",
      description:
        "Een combinatie van timtmo, alicha, bamia, shiro, selsi, pompoen en spinazie.",
      price: "€ 34,79",
      image: "/menu/bebiaynetu.jpg",
    },
  ],
}

export const drinksMenu: MenuSection = {
  id: "drinks",
  title: "Onze traditionele dranken",
  items: [
    {
      id: "d1",
      name: "Verse Habesha-koffie (2 personen) 1",
      description:
        "Habesha Coffee is niet zomaar een koffiebar. Het is een plek waar eeuwenoude tradities samenkomen met moderne smaken.",
      price: "€ 9,90",
      image: "/menu/coffee-2p.jpg",
    },
    {
      id: "d2",
      name: "Verse Habesha-koffie (4 personen) 2",
      description:
        "Bij Habesha Coffee gaat het niet alleen om het drinken van koffie, het is een ervaring.",
      price: "€ 15,49",
      image: "/menu/coffee-4p.jpg",
    },
    {
      id: "d3",
      name: "Traditionele Habesha-koffieceremonie (8 personen) 3",
      description:
        "Bij binnenkomst word je begroet door de verleidelijke geur van versgemalen koffie. De bonen, zorgvuldig geselecteerd en geïmporteerd uit de hooglanden van Ethiopië en Eritrea.",
      price: "€ 29,99",
      image: "/menu/coffee-8p.jpg",
    },
    {
      id: "d4",
      name: "Mes 4",
      description:
        "Een honingwijn, zoals mede, die wordt gebrouwen en geconsumeerd in Ethiopië en Eritrea. Alcoholgehalte varieert doorgaans van 7 tot 11%.",
      price: "€ 4,95",
      image: "/menu/mes.jpg",
    },
  ],
}

export const foodCategories = [
  {
    title: "Vleesgerechten",
    image: "/categories/meat.jpg",
    href: "/#menu",
    learnMore: "https://nl.wikipedia.org/wiki/Wat_(gerecht)",
  },
  {
    title: "Groenten gerechten",
    image: "/categories/vegetarian.jpg",
    href: "/vegetarisch",
    learnMore: "https://nl.wikipedia.org/wiki/Ethiopische_keuken",
  },
  {
    title: "Onze traditionele dranken",
    image: "/categories/drinks.jpg",
    href: "/vegetarisch#dranken",
    learnMore: "https://en.wikipedia.org/wiki/Grain",
  },
]

export const openingHours = [
  { day: "Maandag", hours: "14:00 – 00:00" },
  { day: "Dinsdag", hours: "14:00 – 00:00" },
  { day: "Woensdag", hours: "14:00 – 00:00" },
  { day: "Donderdag", hours: "14:00 – 00:00" },
  { day: "Vrijdag", hours: "14:00 – 00:00" },
  { day: "Zaterdag", hours: "14:00 – 00:00" },
  { day: "Zondag", hours: "14:00 – 00:00" },
]

export const contact = {
  address: "Brinklaan 18, 7311 LB Apeldoorn",
  mapsUrl: "https://goo.gl/maps/7Wkuw5QdKh7wQSoh9",
  phone: "+31687180111",
  email: "dejuhadege45@gmail.com",
  facebook: "https://www.facebook.com/dejen.hadege.3",
  instagram: "https://www.instagram.com/merhaba_habesha_resterant/",
  tiktok: "https://www.tiktok.com/@merhabahabesharestaurant",
}
