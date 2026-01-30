(() => {
  const DEFAULT_LANG = "en";

  // =========================
  // 1) "JSON" translations (in-file)
  // =========================
  const I18N = {
  en: {
    meta: { title: "Seatbelt Pro", description: "Seatbelt repair and custom belt colors." },
    brand: { name: "SEATBELT PRO", tag: "Premium Service" },
    nav: { services: "Services", process: "Process", gallery: "Gallery", contact: "Contact", quote: "Get Quote" },
    hero: {
      pill: "Premium Seatbelt Service",
      word1: "Repair.",
      word2: "Restore.",
      word3: "Reimagine.",
      subtitle: "Transform your vehicle's safety belts with precision repair and custom colors that make a statement.",
      ctaPrimary: "Start Your Project",
      ctaSecondary: "View Gallery",
      badge1: "10K+ Belts Restored",
      badge2: "Safety Certified",
      badge3: "24hr Rush Service",
      scroll: "SCROLL",
      card1Tag: "CORE",
      card1Title: "Expert Repair",
      card1Sub: "Certified technicians restore damaged belts to factory specs",
      card2Tag: "PREMIUM",
      card2Title: "Custom Colors",
      card2Sub: "50+ vibrant colors to match your style and interior"
    },
  "machine": {
    "title": "Industrial Bartack Stitching",
    "subtitle": "Purpose-built stitching for seatbelts, using certified European webbing for safety and durability.",
    "kicker": "Our Equipment",
    "cardTitle": "Lockstitch Bartack Machine",
    "cardText": "We use an industrial bartack system designed and programmed specifically for seatbelt stitching, ensuring consistent tension, clean patterns, and repeatable strength.",
    "p1t": "Reinforced Bartack",
    "p1s": "Strong, repeatable stitch patterns",
    "p2t": "Certified Webbing",
    "p2s": "European certified seatbelt material only",
    "p3t": "Programmed Precision",
    "p3s": "Controlled speed, tension, and stitch length",
    "cta": "Contact us",
    "caption": "Industrial bartack stitching for safety-critical seams."
  },
    services: {
      title: "Services",
      subtitle: "Safety-first repairs, premium materials, and clean finishes.",
      s1Title: "Seatbelt Rewebbing",
      s1Sub: "Replace worn webbing with OEM-quality material.",
      s2Title: "Retractor Repair",
      s2Sub: "Fix slow retracting, locking issues, and jams.",
      s3Title: "Safety Inspection",
      s3Sub: "Functional checks and proper locking behavior."
    },
    process: {
      title: "Process",
      subtitle: "Clear steps. Professional results.",
      p1Title: "Diagnosis",
      p1Sub: "We inspect the mechanism and webbing condition.",
      p2Title: "Repair / Reweb",
      p2Sub: "Replace or restore parts using quality materials.",
      p3Title: "Testing",
      p3Sub: "Locking, retraction, and safety behavior verified.",
      p4Title: "Delivery",
      p4Sub: "Ready to install and enjoy — safer and cleaner."
    },
    gallery: {
      title: "Gallery",
      subtitle: "Seatbelt color samples — OEM & custom options.",
      sample_black: "Black",
      sample_white: "White",
      sample_beige_oem: "OEM Beige",
      sample_red_classic: "Classic Red",
      sample_red_sport: "Sport Red",
      sample_blue_navy: "Navy Blue",
      sample_blue_royal: "Royal Blue",
      sample_blue_light: "Light Blue",
      sample_green_lime: "Lime Green",
      sample_black_red_edge: "Black + Red Edge",
      sample_black_m_stripe: "Black + M Stripe",
      sample_yellow_racing: "Racing Yellow"
    },
    contact: {
      title: "Get a Quote",
      subtitle: "Tell us what you need. You can write in your language (French, Spanish & more) — we’ll reply fast.",
      name: "Name",
      namePh: "Your name",
      phone: "Phone",
      phonePh: "WhatsApp / Phone",
      car: "Car / Model",
      carPh: "e.g., BMW F10 520d",
      message: "Message",
      messagePh: "Tell us what happened + desired color",
      send: "Send Request",
      note: "Tip: include desired color and where the belt is installed (driver/passenger/rear).",
      cardTitle: "Fast Contact",
      cardSub: "Use WhatsApp or email for quick replies.",
      hours: "Hours",
      hoursVal: "Mon–Sat, 09:00–18:00",
      backTop: "Back to top"
    },
    footer: {
      tagline: "Safety repair • Custom colors • Premium finish",
      copy: "© 2026 Seatbelt Pro. All rights reserved."
    }
  },

  es: {
    meta: { title: "Seatbelt Pro", description: "Reparación de cinturones y colores personalizados." },
    brand: { name: "SEATBELT PRO", tag: "Servicio Premium" },
    nav: { services: "Servicios", process: "Proceso", gallery: "Galería", contact: "Contacto", quote: "Pedir presupuesto" },
    hero: {
      pill: "Servicio premium de cinturones",
      word1: "Repara.",
      word2: "Restaura.",
      word3: "Reimagina.",
      subtitle: "Transforma los cinturones de seguridad con reparación precisa y colores personalizados.",
      ctaPrimary: "Empezar proyecto",
      ctaSecondary: "Ver galería",
      badge1: "10K+ cinturones restaurados",
      badge2: "Certificado de seguridad",
      badge3: "Servicio exprés 24h",
      scroll: "DESLIZA",
      card1Tag: "BASE",
      card1Title: "Reparación experta",
      card1Sub: "Técnicos certificados restauran cinturones según especificaciones",
      card2Tag: "PREMIUM",
      card2Title: "Colores personalizados",
      card2Sub: "50+ colores para combinar con tu estilo e interior"
    },
    services: {
      title: "Servicios",
      subtitle: "Reparaciones seguras, materiales premium y acabados limpios.",
      s1Title: "Cambio de cinta",
      s1Sub: "Sustituimos la cinta por material de calidad OEM.",
      s2Title: "Reparación del retractor",
      s2Sub: "Solucionamos retracción lenta, bloqueos y atascos.",
      s3Title: "Inspección de seguridad",
      s3Sub: "Comprobación funcional y bloqueo correcto."
    },
    "machine": {
    "title": "Costura bartack industrial",
    "subtitle": "Costura diseñada específicamente para cinturones de seguridad, utilizando cintas certificadas europeas para máxima seguridad.",
    "kicker": "Nuestro equipo",
    "cardTitle": "Máquina bartack de puntada fija",
    "cardText": "Utilizamos un sistema bartack industrial diseñado y programado para la costura de cinturones de seguridad, garantizando tensión constante y resistencia fiable.",
    "p1t": "Bartack reforzado",
    "p1s": "Patrones de costura fuertes y repetibles",
    "p2t": "Cinta certificada",
    "p2s": "Material de cinturón certificado en Europa",
    "p3t": "Precisión programada",
    "p3s": "Velocidad, tensión y longitud de puntada controladas",
    "cta": "Contáctanos",
    "caption": "Costura bartack industrial para uniones críticas de seguridad."
  },
    process: {
      title: "Proceso",
      subtitle: "Pasos claros. Resultados profesionales.",
      p1Title: "Diagnóstico",
      p1Sub: "Inspeccionamos el mecanismo y la cinta.",
      p2Title: "Reparación / Cambio",
      p2Sub: "Sustituimos o restauramos piezas con materiales de calidad.",
      p3Title: "Pruebas",
      p3Sub: "Verificamos bloqueo, retracción y funcionamiento.",
      p4Title: "Entrega",
      p4Sub: "Listo para instalar — más seguro y limpio."
    },
    gallery: {
      title: "Galería",
      subtitle: "Muestras de color de cinturones — opciones OEM y personalizadas.",
      sample_black: "Negro",
      sample_white: "Blanco",
      sample_beige_oem: "Beige OEM",
      sample_red_classic: "Rojo clásico",
      sample_red_sport: "Rojo deportivo",
      sample_blue_navy: "Azul marino",
      sample_blue_royal: "Azul rey",
      sample_blue_light: "Azul claro",
      sample_green_lime: "Verde lima",
      sample_black_red_edge: "Negro + borde rojo",
      sample_black_m_stripe: "Negro + franja M",
      sample_yellow_racing: "Amarillo Racing"
    },
    contact: {
      title: "Pedir presupuesto",
      subtitle: "Cuéntenos qué necesita. Puede escribir en su idioma (francés, español y más) — responderemos rápido.",
      name: "Nombre",
      namePh: "Tu nombre",
      phone: "Teléfono",
      phonePh: "WhatsApp / Teléfono",
      car: "Coche / Modelo",
      carPh: "p. ej., BMW F10 520d",
      message: "Mensaje",
      messagePh: "Qué pasó + color deseado",
      send: "Enviar solicitud",
      note: "Consejo: incluye el color y la posición (conductor/pasajero/trasero).",
      cardTitle: "Contacto rápido",
      cardSub: "WhatsApp o email para respuesta rápida.",
      hours: "Horario",
      hoursVal: "Lun–Sáb, 09:00–18:00",
      backTop: "Arriba"
    },
    footer: {
      tagline: "Reparación segura • Colores personalizados • Acabado premium",
      copy: "© 2026 Seatbelt Pro. Todos los derechos reservados."
    }
  },

  it: {
    meta: { title: "Seatbelt Pro", description: "Riparazione cinture e colori personalizzati." },
    brand: { name: "SEATBELT PRO", tag: "Servizio Premium" },
    nav: { services: "Servizi", process: "Procedura", gallery: "Galleria", contact: "Contatti", quote: "Richiedi preventivo" },
    hero: {
      pill: "Servizio premium cinture",
      word1: "Ripara.",
      word2: "Ripristina.",
      word3: "Reimmagina.",
      subtitle: "Trasforma le cinture con riparazioni di precisione e colori personalizzati.",
      ctaPrimary: "Inizia il progetto",
      ctaSecondary: "Vedi galleria",
      badge1: "10K+ cinture ripristinate",
      badge2: "Certificato sicurezza",
      badge3: "Servizio rapido 24h",
      scroll: "SCORRI",
      card1Tag: "BASE",
      card1Title: "Riparazione esperta",
      card1Sub: "Tecnici certificati ripristinano le cinture secondo standard",
      card2Tag: "PREMIUM",
      card2Title: "Colori personalizzati",
      card2Sub: "50+ colori per il tuo stile e interno"
    },
    services: {
      title: "Servizi",
      subtitle: "Sicurezza prima di tutto, materiali premium e finiture pulite.",
      s1Title: "Sostituzione nastro",
      s1Sub: "Sostituiamo il nastro con materiale qualità OEM.",
      s2Title: "Riparazione retractor",
      s2Sub: "Risolviamo retrazione lenta, blocchi e inceppamenti.",
      s3Title: "Controllo sicurezza",
      s3Sub: "Verifica funzionale e corretto blocco."
    },
  "machine": {
    "title": "Cucitura bartack industriale",
    "subtitle": "Cucitura progettata specificamente per le cinture di sicurezza, con nastri certificati europei.",
    "kicker": "La nostra attrezzatura",
    "cardTitle": "Macchina bartack a punto fisso",
    "cardText": "Utilizziamo un sistema bartack industriale progettato e programmato per la cucitura delle cinture di sicurezza, garantendo tensione costante e resistenza affidabile.",
    "p1t": "Bartack rinforzato",
    "p1s": "Schemi di cucitura forti e ripetibili",
    "p2t": "Nastro certificato",
    "p2s": "Materiali per cinture certificati europei",
    "p3t": "Precisione programmata",
    "p3s": "Velocità, tensione e lunghezza del punto controllate",
    "cta": "Contattaci",
    "caption": "Cucitura bartack industriale per giunzioni di sicurezza."
  },
    process: {
      title: "Procedura",
      subtitle: "Passi chiari. Risultati professionali.",
      p1Title: "Diagnosi",
      p1Sub: "Ispezioniamo meccanismo e nastro.",
      p2Title: "Riparazione / Sostituzione",
      p2Sub: "Sostituiamo o ripristiniamo con materiali di qualità.",
      p3Title: "Test",
      p3Sub: "Verifichiamo blocco, retrazione e funzionamento.",
      p4Title: "Consegna",
      p4Sub: "Pronto da installare — più sicuro e pulito."
    },
    gallery: {
      title: "Galleria",
      subtitle: "Campioni di colore delle cinture — opzioni OEM e personalizzate.",
      sample_black: "Nero",
      sample_white: "Bianco",
      sample_beige_oem: "Beige OEM",
      sample_red_classic: "Rosso classico",
      sample_red_sport: "Rosso sport",
      sample_blue_navy: "Blu navy",
      sample_blue_royal: "Blu royal",
      sample_blue_light: "Blu chiaro",
      sample_green_lime: "Verde lime",
      sample_black_red_edge: "Nero + bordo rosso",
      sample_black_m_stripe: "Nero + striscia M",
      sample_yellow_racing: "Giallo Racing"
    },
    contact: {
      title: "Richiedi preventivo",
      subtitle: "Dicci di cosa hai bisogno. Puoi scrivere nella tua lingua (francese, spagnolo e altro) — risponderemo rapidamente.",
      name: "Nome",
      namePh: "Il tuo nome",
      phone: "Telefono",
      phonePh: "WhatsApp / Telefono",
      car: "Auto / Modello",
      carPh: "es. BMW F10 520d",
      message: "Messaggio",
      messagePh: "Cosa è successo + colore desiderato",
      send: "Invia richiesta",
      note: "Consiglio: includi colore e posizione (guidatore/passeggero/posteriore).",
      cardTitle: "Contatto rapido",
      cardSub: "WhatsApp o email per risposte veloci.",
      hours: "Orari",
      hoursVal: "Lun–Sab, 09:00–18:00",
      backTop: "Su"
    },
    footer: {
      tagline: "Riparazione sicura • Colori personalizzati • Finitura premium",
      copy: "© 2026 Seatbelt Pro. Tutti i diritti riservati."
    }
  },

  de: {
    meta: { title: "Seatbelt Pro", description: "Gurt-Reparatur und individuelle Farben." },
    brand: { name: "SEATBELT PRO", tag: "Premium Service" },
    nav: { services: "Leistungen", process: "Ablauf", gallery: "Galerie", contact: "Kontakt", quote: "Angebot anfragen" },
    hero: {
      pill: "Premium-Gurtservice",
      word1: "Reparieren.",
      word2: "Wiederherstellen.",
      word3: "Neu denken.",
      subtitle: "Sicherheitsgurte mit präziser Reparatur und individuellen Farben aufwerten.",
      ctaPrimary: "Projekt starten",
      ctaSecondary: "Galerie ansehen",
      badge1: "10K+ Gurte restauriert",
      badge2: "Sicherheitszertifiziert",
      badge3: "24h Express-Service",
      scroll: "SCROLL",
      card1Tag: "KERN",
      card1Title: "Profi-Reparatur",
      card1Sub: "Zertifizierte Techniker nach Werksstandard",
      card2Tag: "PREMIUM",
      card2Title: "Individuelle Farben",
      card2Sub: "50+ Farben passend zu Stil und Innenraum"
    },
    services: {
      title: "Leistungen",
      subtitle: "Sicherheit zuerst, Premium-Materialien und saubere Verarbeitung.",
      s1Title: "Gurtband erneuern",
      s1Sub: "Austausch durch OEM-Qualität.",
      s2Title: "Aufroller-Reparatur",
      s2Sub: "Langsames Einziehen, Blockieren und Klemmen beheben.",
      s3Title: "Sicherheitsprüfung",
      s3Sub: "Funktionstest und korrektes Verriegeln."
    },
    "machine": {
    "title": "Industrielle Bartack-Naht",
    "subtitle": "Speziell entwickelte Nähtechnik für Sicherheitsgurte mit europäisch zertifiziertem Gurtband.",
    "kicker": "Unsere Ausrüstung",
    "cardTitle": "Bartack-Nähmaschine mit Verriegelungsstich",
    "cardText": "Wir verwenden ein industrielles Bartack-System, das speziell für Sicherheitsgurt-Nähte programmiert ist und konstante Spannung sowie hohe Festigkeit gewährleistet.",
    "p1t": "Verstärkte Bartack-Naht",
    "p1s": "Starke und gleichmäßige Nahtmuster",
    "p2t": "Zertifiziertes Gurtband",
    "p2s": "Ausschließlich europäisch zertifizierte Materialien",
    "p3t": "Programmierte Präzision",
    "p3s": "Kontrollierte Geschwindigkeit, Spannung und Stichlänge",
    "cta": "Kontakt aufnehmen",
    "caption": "Industrielle Bartack-Nähte für sicherheitsrelevante Verbindungen."
  },
    process: {
      title: "Ablauf",
      subtitle: "Klare Schritte. Professionelle Ergebnisse.",
      p1Title: "Diagnose",
      p1Sub: "Mechanik und Gurtband prüfen.",
      p2Title: "Reparatur / Austausch",
      p2Sub: "Teile erneuern oder instandsetzen.",
      p3Title: "Test",
      p3Sub: "Verriegelung, Einzug und Funktion geprüft.",
      p4Title: "Lieferung",
      p4Sub: "Einbaufertig — sicherer und sauber."
    },
    gallery: {
      title: "Galerie",
      subtitle: "Farbmuster für Sicherheitsgurte — OEM- und individuelle Optionen.",
      sample_black: "Schwarz",
      sample_white: "Weiß",
      sample_beige_oem: "OEM-Beige",
      sample_red_classic: "Klassisches Rot",
      sample_red_sport: "Sport-Rot",
      sample_blue_navy: "Navy-Blau",
      sample_blue_royal: "Königsblau",
      sample_blue_light: "Hellblau",
      sample_green_lime: "Limettengrün",
      sample_black_red_edge: "Schwarz + rote Kante",
      sample_black_m_stripe: "Schwarz + M-Streifen",
      sample_yellow_racing: "Renn-Gelb"
    },
    contact: {
      title: "Angebot anfragen",
      subtitle: "Sagen Sie uns, was Sie brauchen. Sie können in Ihrer Sprache schreiben (Französisch, Spanisch und mehr) — wir antworten schnell.",
      name: "Name",
      namePh: "Dein Name",
      phone: "Telefon",
      phonePh: "WhatsApp / Telefon",
      car: "Auto / Modell",
      carPh: "z. B. BMW F10 520d",
      message: "Nachricht",
      messagePh: "Was ist passiert + Wunschfarbe",
      send: "Anfrage senden",
      note: "Tipp: Farbe und Position angeben (Fahrer/Beifahrer/Hinten).",
      cardTitle: "Schnellkontakt",
      cardSub: "WhatsApp oder E-Mail für schnelle Antwort.",
      hours: "Zeiten",
      hoursVal: "Mo–Sa, 09:00–18:00",
      backTop: "Nach oben"
    },
    footer: {
      tagline: "Sicherheitsreparatur • Individuelle Farben • Premium-Finish",
      copy: "© 2026 Seatbelt Pro. Alle Rechte vorbehalten."
    }
  },

  hu: {
    meta: { title: "Seatbelt Pro", description: "Biztonságiöv javítás és egyedi színek." },
    brand: { name: "SEATBELT PRO", tag: "Prémium szerviz" },
    nav: { services: "Szolgáltatások", process: "Folyamat", gallery: "Galéria", contact: "Kapcsolat", quote: "Árajánlat" },
    hero: {
      pill: "Prémium biztonságiöv-szerviz",
      word1: "Javítás.",
      word2: "Helyreállítás.",
      word3: "Újratervezés.",
      subtitle: "Precíz javítás és egyedi színek — kompromisszum nélkül.",
      ctaPrimary: "Projekt indítása",
      ctaSecondary: "Galéria",
      badge1: "10K+ öv helyreállítva",
      badge2: "Biztonsági tanúsítvány",
      badge3: "24 órás gyorsszerviz",
      scroll: "GÖRGESS",
      card1Tag: "ALAP",
      card1Title: "Szakértő javítás",
      card1Sub: "Tanúsított technikusok gyári szintre állítják vissza",
      card2Tag: "PRÉMIUM",
      card2Title: "Egyedi színek",
      card2Sub: "50+ szín a stílusodhoz és belsőhöz"
    },
    services: {
      title: "Szolgáltatások",
      subtitle: "Biztonság elsőként, prémium anyagok, tiszta munka.",
      s1Title: "Hevedercsere",
      s1Sub: "OEM minőségű hevederrel cseréljük.",
      s2Title: "Visszahúzó javítás",
      s2Sub: "Lassú visszahúzás, beragadás, zárási gondok.",
      s3Title: "Biztonsági ellenőrzés",
      s3Sub: "Funkció és helyes reteszelés ellenőrzése."
    },
    "machine": {
    "title": "Ipari bartack varrás",
    "subtitle": "Kifejezetten biztonsági övekhez tervezett varrás, európai tanúsítvánnyal rendelkező szalagokkal.",
    "kicker": "Berendezéseink",
    "cardTitle": "Bartack varrógép rögzítő öltéssel",
    "cardText": "Ipari bartack rendszert használunk, amelyet biztonsági övek varrására terveztek és programoztak.",
    "p1t": "Megerősített bartack",
    "p1s": "Erős és ismételhető varratminták",
    "p2t": "Tanúsított szalag",
    "p2s": "Kizárólag európai tanúsítvánnyal rendelkező anyagok",
    "p3t": "Programozott pontosság",
    "p3s": "Szabályozott sebesség, feszítés és öltéshossz",
    "cta": "Kapcsolat",
    "caption": "Ipari bartack varrás biztonságkritikus illesztésekhez."
  },
    process: {
      title: "Folyamat",
      subtitle: "Tiszta lépések. Profi eredmény.",
      p1Title: "Diagnózis",
      p1Sub: "Átvizsgáljuk a mechanikát és a hevedert.",
      p2Title: "Javítás / Csere",
      p2Sub: "Minőségi anyagokkal állítjuk helyre.",
      p3Title: "Teszt",
      p3Sub: "Reteszelés, visszahúzás, működés ellenőrzése.",
      p4Title: "Átadás",
      p4Sub: "Beszerelésre kész — biztonságosabb és tisztább."
    },
    gallery: {
      title: "Galéria",
      subtitle: "Biztonságiöv színminták — OEM és egyedi opciók.",
      sample_black: "Fekete",
      sample_white: "Fehér",
      sample_beige_oem: "OEM bézs",
      sample_red_classic: "Klasszikus piros",
      sample_red_sport: "Sport piros",
      sample_blue_navy: "Sötétkék (Navy)",
      sample_blue_royal: "Királykék",
      sample_blue_light: "Világoskék",
      sample_green_lime: "Lime zöld",
      sample_black_red_edge: "Fekete + piros szegély",
      sample_black_m_stripe: "Fekete + M csík",
      sample_yellow_racing: "Verseny sárga"
    },
    contact: {
      title: "Árajánlat",
      subtitle: "Írd meg, mire van szükséged. Írhatsz a saját nyelveden (francia, spanyol és más nyelveken) — gyorsan válaszolunk.",
      name: "Név",
      namePh: "A neved",
      phone: "Telefon",
      phonePh: "WhatsApp / Telefon",
      car: "Autó / Modell",
      carPh: "pl. BMW F10 520d",
      message: "Üzenet",
      messagePh: "Mi történt + kívánt szín",
      send: "Kérés küldése",
      note: "Tipp: add meg a színt és a pozíciót (vezető/utas/hátsó).",
      cardTitle: "Gyors kapcsolat",
      cardSub: "WhatsApp vagy email gyors válaszhoz.",
      hours: "Nyitvatartás",
      hoursVal: "H–Szo, 09:00–18:00",
      backTop: "Vissza"
    },
    footer: {
      tagline: "Biztonsági javítás • Egyedi színek • Prémium finish",
      copy: "© 2026 Seatbelt Pro. Minden jog fenntartva."
    }
  },

  cs: {
    meta: { title: "Seatbelt Pro", description: "Opravy bezpečnostních pásů a vlastní barvy." },
    brand: { name: "SEATBELT PRO", tag: "Prémiový servis" },
    nav: { services: "Služby", colors: "Barvy", process: "Postup", gallery: "Galerie", contact: "Kontakt", quote: "Cenová nabídka" },
    hero: {
      pill: "Prémiový servis pásů",
      word1: "Oprav.",
      word2: "Obnov.",
      word3: "Přetvoř.",
      subtitle: "Precizní oprava a vlastní barvy pro váš vůz.",
      ctaPrimary: "Začít",
      ctaSecondary: "Galerie",
      badge1: "10K+ pásů obnoveno",
      badge2: "Bezpečnostně ověřeno",
      badge3: "Expres 24 h",
      scroll: "POSUŇ",
      card1Tag: "ZÁKLAD",
      card1Title: "Odborná oprava",
      card1Sub: "Certifikovaní technici dle standardů",
      card2Tag: "PREMIUM",
      card2Title: "Vlastní barvy",
      card2Sub: "50+ barev pro styl a interiér"
    },
    services: {
      title: "Služby",
      subtitle: "Bezpečnost na prvním místě, prémiové materiály, čisté provedení.",
      s1Title: "Výměna pásu",
      s1Sub: "OEM kvalita materiálu.",
      s2Title: "Oprava navíječe",
      s2Sub: "Pomalé navíjení, blokování, zasekávání.",
      s3Title: "Bezpečnostní kontrola",
      s3Sub: "Funkční test a správné zajištění."
    },
     "machine": {
    "title": "Průmyslové bartack šití",
    "subtitle": "Šití speciálně navržené pro bezpečnostní pásy s evropsky certifikovanými materiály.",
    "kicker": "Naše vybavení",
    "cardTitle": "Bartack stroj s uzamykacím stehem",
    "cardText": "Používáme průmyslový bartack systém určený pro šití bezpečnostních pásů s důrazem na pevnost a přesnost.",
    "p1t": "Zesílený bartack",
    "p1s": "Pevné a opakovatelné stehy",
    "p2t": "Certifikovaný popruh",
    "p2s": "Pouze evropsky certifikované materiály",
    "p3t": "Programovaná přesnost",
    "p3s": "Řízená rychlost, napětí a délka stehu",
    "cta": "Kontaktujte nás",
    "caption": "Průmyslové bartack šití pro bezpečnostně kritická místa."
  },
    process: {
      title: "Postup",
      subtitle: "Jasné kroky. Profesionální výsledek.",
      p1Title: "Diagnostika",
      p1Sub: "Kontrola mechaniky a pásu.",
      p2Title: "Oprava / Výměna",
      p2Sub: "Kvalitní materiály a díly.",
      p3Title: "Testování",
      p3Sub: "Zajištění, navíjení a funkce ověřeny.",
      p4Title: "Předání",
      p4Sub: "Připraveno k montáži."
    },
    gallery: {
  title: "Galerie",
  subtitle: "Vzorníky barev pásů — OEM i zakázkové možnosti.",
  sample_black: "Černá",
  sample_white: "Bílá",
  sample_beige_oem: "OEM béžová",
  sample_red_classic: "Klasická červená",
  sample_red_sport: "Sportovní červená",
  sample_blue_navy: "Námořnická modrá",
  sample_blue_royal: "Královská modrá",
  sample_blue_light: "Světle modrá",
  sample_green_lime: "Limetkově zelená",
  sample_black_red_edge: "Černá + červený okraj",
  sample_black_m_stripe: "Černá + pruh M",
  sample_yellow_racing: "Závodní žlutá"
},
    contact: {
      title: "Cenová nabídka",
      subtitle: "Napište nám, co potřebujete. Můžete psát ve svém jazyce (francouzsky, španělsky a další) — odpovíme rychle.",
      name: "Jméno",
      namePh: "Vaše jméno",
      phone: "Telefon",
      phonePh: "WhatsApp / Telefon",
      car: "Auto / Model",
      carPh: "např. BMW F10 520d",
      message: "Zpráva",
      messagePh: "Co se stalo + požadovaná barva",
      send: "Odeslat",
      note: "Tip: uveďte barvu a pozici (řidič/spolujezdec/zadní).",
      cardTitle: "Rychlý kontakt",
      cardSub: "WhatsApp nebo email pro rychlou odpověď.",
      hours: "Hodiny",
      hoursVal: "Po–So, 09:00–18:00",
      backTop: "Nahoru"
    },
    footer: {
      tagline: "Opravy bezpečnosti • Vlastní barvy • Prémiový finish",
      copy: "© 2026 Seatbelt Pro. Všechna práva vyhrazena."
    }
  },

  sk: {
    meta: { title: "Seatbelt Pro", description: "Opravy bezpečnostných pásov a vlastné farby." },
    brand: { name: "SEATBELT PRO", tag: "Prémiový servis" },
    nav: { services: "Služby", colors: "Farby", process: "Proces", gallery: "Galéria", contact: "Kontakt", quote: "Cenová ponuka" },
    hero: {
      pill: "Prémiový servis pásov",
      word1: "Oprav.",
      word2: "Obnov.",
      word3: "Pretvor.",
      subtitle: "Precízna oprava a vlastné farby pre vaše auto.",
      ctaPrimary: "Začať",
      ctaSecondary: "Galéria",
      badge1: "10K+ pásov obnovených",
      badge2: "Bezpečnostne overené",
      badge3: "24h expres",
      scroll: "SKROLUJ",
      card1Tag: "ZÁKLAD",
      card1Title: "Odborná oprava",
      card1Sub: "Certifikovaní technici podľa štandardov",
      card2Tag: "PREMIUM",
      card2Title: "Vlastné farby",
      card2Sub: "50+ farieb pre štýl a interiér"
    },
    services: {
      title: "Služby",
      subtitle: "Bezpečnosť na prvom mieste, prémiové materiály, čistá práca.",
      s1Title: "Výmena pásu",
      s1Sub: "OEM kvalita materiálu.",
      s2Title: "Oprava navíjača",
      s2Sub: "Pomalé navíjanie, blokovanie, zasekávanie.",
      s3Title: "Bezpečnostná kontrola",
      s3Sub: "Funkčný test a správne zaistenie."
    },
    "machine": {
    "title": "Priemyselné bartack šitie",
    "subtitle": "Šitie navrhnuté špeciálne pre bezpečnostné pásy s európsky certifikovanými materiálmi.",
    "kicker": "Naše vybavenie",
    "cardTitle": "Bartack stroj s uzamykacím stehom",
    "cardText": "Používame priemyselný bartack systém určený na šitie bezpečnostných pásov s dôrazom na pevnosť a presnosť.",
    "p1t": "Zosilnený bartack",
    "p1s": "Pevné a opakovateľné vzory stehov",
    "p2t": "Certifikovaný pás",
    "p2s": "Iba európsky certifikované materiály",
    "p3t": "Programovaná presnosť",
    "p3s": "Riadená rýchlosť, napätie a dĺžka stehu",
    "cta": "Kontaktujte nás",
    "caption": "Priemyselné bartack šitie pre bezpečnostne kritické spoje."
  },
    process: {
      title: "Proces",
      subtitle: "Jasné kroky. Profesionálny výsledok.",
      p1Title: "Diagnostika",
      p1Sub: "Kontrola mechanizmu a pásu.",
      p2Title: "Oprava / Výmena",
      p2Sub: "Kvalitné materiály a diely.",
      p3Title: "Testovanie",
      p3Sub: "Zaistenie, navíjanie a funkcia overené.",
      p4Title: "Odovzdanie",
      p4Sub: "Pripravené na montáž."
    },
    gallery: {
  title: "Galéria",
  subtitle: "Vzorky farieb pásov — OEM aj vlastné možnosti.",
  sample_black: "Čierna",
  sample_white: "Biela",
  sample_beige_oem: "OEM béžová",
  sample_red_classic: "Klasická červená",
  sample_red_sport: "Športová červená",
  sample_blue_navy: "Námornícka modrá",
  sample_blue_royal: "Kráľovská modrá",
  sample_blue_light: "Svetlomodrá",
  sample_green_lime: "Limetkovo zelená",
  sample_black_red_edge: "Čierna + červený okraj",
  sample_black_m_stripe: "Čierna + pruh M",
  sample_yellow_racing: "Pretekárska žltá"
},
    contact: {
      title: "Cenová ponuka",
      subtitle: "Napíšte nám, čo potrebujete. Môžete písať vo svojom jazyku (francúzsky, španielsky a ďalšie) — odpovieme rýchlo.",
      name: "Meno",
      namePh: "Tvoje meno",
      phone: "Telefón",
      phonePh: "WhatsApp / Telefón",
      car: "Auto / Model",
      carPh: "napr. BMW F10 520d",
      message: "Správa",
      messagePh: "Čo sa stalo + požadovaná farba",
      send: "Odoslať",
      note: "Tip: uveď farbu a pozíciu (vodič/spolujazdec/zadná).",
      cardTitle: "Rýchly kontakt",
      cardSub: "WhatsApp alebo email pre rýchlu odpoveď.",
      hours: "Hodiny",
      hoursVal: "Po–So, 09:00–18:00",
      backTop: "Hore"
    },
    footer: {
      tagline: "Bezpečnostné opravy • Vlastné farby • Prémiový finish",
      copy: "© 2026 Seatbelt Pro. Všetky práva vyhradené."
    }
  },

  fr: {
    meta: { title: "Seatbelt Pro", description: "Réparation de ceintures et couleurs sur mesure." },
    brand: { name: "SEATBELT PRO", tag: "Service Premium" },
    nav: { services: "Services", colors: "Couleurs", process: "Processus", gallery: "Galerie", contact: "Contact", quote: "Demander un devis" },
    hero: {
      pill: "Service premium de ceintures",
      word1: "Réparer.",
      word2: "Restaurer.",
      word3: "Réinventer.",
      subtitle: "Réparation précise et couleurs personnalisées — sans compromis.",
      ctaPrimary: "Démarrer",
      ctaSecondary: "Voir la galerie",
      badge1: "10K+ ceintures restaurées",
      badge2: "Certifié sécurité",
      badge3: "Service express 24h",
      scroll: "DÉFILER",
      card1Tag: "ESSENTIEL",
      card1Title: "Réparation experte",
      card1Sub: "Techniciens certifiés selon standards",
      card2Tag: "PREMIUM",
      card2Title: "Couleurs sur mesure",
      card2Sub: "50+ couleurs pour votre style et intérieur"
    },
    services: {
      title: "Services",
      subtitle: "Sécurité d’abord, matériaux premium, finitions propres.",
      s1Title: "Remplacement sangle",
      s1Sub: "Matériau qualité OEM.",
      s2Title: "Réparation enrouleur",
      s2Sub: "Enroulement lent, blocages, grippage.",
      s3Title: "Contrôle sécurité",
      s3Sub: "Test fonctionnel et verrouillage."
    },
    "machine": {
    "title": "Couture bartack industrielle",
    "subtitle": "Couture spécialement conçue pour les ceintures de sécurité, avec des sangles certifiées européennes pour une sécurité maximale.",
    "kicker": "Notre équipement",
    "cardTitle": "Machine bartack à point noué",
    "cardText": "Nous utilisons un système bartack industriel conçu et programmé pour la couture des ceintures de sécurité, garantissant une tension constante et une résistance fiable.",
    "p1t": "Bartack renforcé",
    "p1s": "Motifs de couture solides et constants",
    "p2t": "Sangle certifiée",
    "p2s": "Matériaux de ceinture certifiés européens",
    "p3t": "Précision programmée",
    "p3s": "Vitesse, tension et longueur de point contrôlées",
    "cta": "Nous contacter",
    "caption": "Couture bartack industrielle pour zones critiques de sécurité."
  },
    process: {
      title: "Processus",
      subtitle: "Étapes claires. Résultat pro.",
      p1Title: "Diagnostic",
      p1Sub: "Contrôle mécanisme et sangle.",
      p2Title: "Réparation / Remplacement",
      p2Sub: "Matériaux et pièces de qualité.",
      p3Title: "Tests",
      p3Sub: "Verrouillage, enroulement, fonctionnement vérifiés.",
      p4Title: "Livraison",
      p4Sub: "Prêt à installer — plus sûr et propre."
    },
    gallery: {
  title: "Galerie",
  subtitle: "Échantillons de couleurs de ceintures — options OEM et personnalisées.",
  sample_black: "Noir",
  sample_white: "Blanc",
  sample_beige_oem: "Beige OEM",
  sample_red_classic: "Rouge classique",
  sample_red_sport: "Rouge sport",
  sample_blue_navy: "Bleu marine",
  sample_blue_royal: "Bleu royal",
  sample_blue_light: "Bleu clair",
  sample_green_lime: "Vert citron",
  sample_black_red_edge: "Noir + bord rouge",
  sample_black_m_stripe: "Noir + bande M",
  sample_yellow_racing: "Jaune Racing"
},
    contact: {
      title: "Demander un devis",
      subtitle: "Dites-nous ce dont vous avez besoin. Vous pouvez écrire dans votre langue (français, espagnol et plus) — nous répondons rapidement.",
      name: "Nom",
      namePh: "Votre nom",
      phone: "Téléphone",
      phonePh: "WhatsApp / Téléphone",
      car: "Voiture / Modèle",
      carPh: "ex. BMW F10 520d",
      message: "Message",
      messagePh: "Ce qui s’est passé + couleur souhaitée",
      send: "Envoyer",
      note: "Astuce : indiquez la couleur et la position (conducteur/passager/arrière).",
      cardTitle: "Contact rapide",
      cardSub: "WhatsApp ou email pour une réponse rapide.",
      hours: "Horaires",
      hoursVal: "Lun–Sam, 09:00–18:00",
      backTop: "Haut"
    },
    footer: {
      tagline: "Réparation sécurité • Couleurs sur mesure • Finition premium",
      copy: "© 2026 Seatbelt Pro. Tous droits réservés."
    }
  },
  nl: {
  meta: {
    title: "Seatbelt Pro",
    description: "Reparatie van veiligheidsgordels en aangepaste gordelkleuren."
  },
  brand: { name: "SEATBELT PRO", tag: "Premium Service" },
  nav: {
    services: "Diensten",
    colors: "Kleuren",
    process: "Proces",
    gallery: "Galerij",
    contact: "Contact",
    quote: "Offerte aanvragen"
  },
  hero: {
    pill: "Premium gordelservice",
    word1: "Repareer.",
    word2: "Herstel.",
    word3: "Herbedenk.",
    subtitle: "Transformeer de veiligheidsgordels van je auto met precisieherstel en custom kleuren die opvallen.",
    ctaPrimary: "Start je project",
    ctaSecondary: "Bekijk galerij",
    badge1: "10.000+ gordels hersteld",
    badge2: "Veiligheid gecertificeerd",
    badge3: "24u spoedservice",
    scroll: "SCROLL",
    card1Tag: "BASIS",
    card1Title: "Vakkundige reparatie",
    card1Sub: "Gecertificeerde technici herstellen beschadigde gordels volgens fabrieksnormen",
    card2Tag: "PREMIUM",
    card2Title: "Custom kleuren",
    card2Sub: "50+ levendige kleuren passend bij jouw stijl en interieur"
  },
  "machine": {
    "title": "Industriële bartack-stiksels",
    "subtitle": "Speciaal ontworpen stikwerk voor veiligheidsgordels met Europees gecertificeerde banden.",
    "kicker": "Onze apparatuur",
    "cardTitle": "Bartack-machine met lockstitch",
    "cardText": "Wij gebruiken een industrieel bartack-systeem dat is ontworpen en geprogrammeerd voor veiligheidsgordels.",
    "p1t": "Versterkte bartack",
    "p1s": "Sterke en herhaalbare steekpatronen",
    "p2t": "Gecertificeerde band",
    "p2s": "Uitsluitend Europees gecertificeerde materialen",
    "p3t": "Geprogrammeerde precisie",
    "p3s": "Gecontroleerde snelheid, spanning en steeklengte",
    "cta": "Neem contact op",
    "caption": "Industriële bartack-stiksels voor veiligheidskritische naden."
  },
  services: {
    title: "Diensten",
    subtitle: "Veiligheid eerst, premium materialen en strakke afwerking.",
    s1Title: "Gordelband vervangen",
    s1Sub: "Vervang versleten band door OEM-kwaliteit materiaal.",
    s2Title: "Reparatie oprolmechanisme",
    s2Sub: "Los traag oprollen, blokkeren en vastlopen op.",
    s3Title: "Veiligheidsinspectie",
    s3Sub: "Functionele controle en correcte vergrendeling."
  },
  process: {
    title: "Proces",
    subtitle: "Duidelijke stappen. Professioneel resultaat.",
    p1Title: "Diagnose",
    p1Sub: "We controleren het mechanisme en de staat van de band.",
    p2Title: "Reparatie / band vervangen",
    p2Sub: "We vervangen of herstellen onderdelen met kwaliteitsmaterialen.",
    p3Title: "Testen",
    p3Sub: "Vergrendeling, oprollen en veiligheid worden gecontroleerd.",
    p4Title: "Levering",
    p4Sub: "Klaar om te monteren — veiliger en netter."
  },
  gallery: {
  title: "Galerij",
  subtitle: "Kleurstalen voor veiligheidsgordels — OEM- en maatwerkopties.",
  sample_black: "Zwart",
  sample_white: "Wit",
  sample_beige_oem: "OEM beige",
  sample_red_classic: "Klassiek rood",
  sample_red_sport: "Sport rood",
  sample_blue_navy: "Navy blauw",
  sample_blue_royal: "Koningsblauw",
  sample_blue_light: "Lichtblauw",
  sample_green_lime: "Limegroen",
  sample_black_red_edge: "Zwart + rode rand",
  sample_black_m_stripe: "Zwart + M-streep",
  sample_yellow_racing: "Racing geel"
},
  contact: {
    title: "Offerte aanvragen",
    subtitle: "Laat ons weten wat u nodig heeft. U kunt in uw eigen taal schrijven (Frans, Spaans en meer) — wij reageren snel.",
    name: "Naam",
    namePh: "Jouw naam",
    phone: "Telefoon",
    phonePh: "WhatsApp / Telefoon",
    car: "Auto / Model",
    carPh: "bijv. BMW F10 520d",
    message: "Bericht",
    messagePh: "Wat is er gebeurd + gewenste kleur",
    send: "Aanvraag versturen",
    note: "Tip: vermeld de gewenste kleur en waar de gordel zit (bestuurder/passagier/achter).",
    cardTitle: "Snel contact",
    cardSub: "Gebruik WhatsApp of e-mail voor snelle reacties.",
    hours: "Openingstijden",
    hoursVal: "Ma–Za, 09:00–18:00",
    backTop: "Terug naar boven"
  },
  footer: {
    tagline: "Veiligheidsreparatie • Custom kleuren • Premium afwerking",
    copy: "© 2026 Seatbelt Pro. Alle rechten voorbehouden."
  }
},

pl: {
  meta: {
    title: "Seatbelt Pro",
    description: "Naprawa pasów bezpieczeństwa i personalizacja koloru taśmy."
  },
  brand: { name: "SEATBELT PRO", tag: "Usługa Premium" },
  nav: {
    services: "Usługi",
    colors: "Kolory",
    process: "Proces",
    gallery: "Galeria",
    contact: "Kontakt",
    quote: "Poproś o wycenę"
  },
  hero: {
    pill: "Premium serwis pasów",
    word1: "Napraw.",
    word2: "Odnów.",
    word3: "Zmień styl.",
    subtitle: "Odmień pasy bezpieczeństwa w swoim aucie dzięki precyzyjnej naprawie i kolorom na zamówienie.",
    ctaPrimary: "Rozpocznij",
    ctaSecondary: "Zobacz galerię",
    badge1: "10 000+ odnowionych pasów",
    badge2: "Certyfikacja bezpieczeństwa",
    badge3: "Ekspres 24h",
    scroll: "PRZEWIŃ",
    card1Tag: "PODSTAWA",
    card1Title: "Profesjonalna naprawa",
    card1Sub: "Certyfikowani technicy przywracają pasy do standardów fabrycznych",
    card2Tag: "PREMIUM",
    card2Title: "Kolory na zamówienie",
    card2Sub: "50+ żywych kolorów dopasowanych do stylu i wnętrza"
  },
  services: {
    title: "Usługi",
    subtitle: "Bezpieczeństwo przede wszystkim, materiały premium i czyste wykończenie.",
    s1Title: "Wymiana taśmy pasa",
    s1Sub: "Wymieniamy zużytą taśmę na materiał jakości OEM.",
    s2Title: "Naprawa zwijacza",
    s2Sub: "Naprawa wolnego zwijania, blokowania i zacięć.",
    s3Title: "Kontrola bezpieczeństwa",
    s3Sub: "Testy działania i poprawnego blokowania."
  },
   "machine": {
    "title": "Przemysłowe szycie bartack",
    "subtitle": "Szycie zaprojektowane specjalnie do pasów bezpieczeństwa z certyfikowanymi europejskimi taśmami.",
    "kicker": "Nasz sprzęt",
    "cardTitle": "Maszyna bartack z ściegiem blokującym",
    "cardText": "Używamy przemysłowego systemu bartack zaprogramowanego do szycia pasów bezpieczeństwa, zapewniającego stałe napięcie i wysoką wytrzymałość.",
    "p1t": "Wzmocniony bartack",
    "p1s": "Mocne i powtarzalne wzory szycia",
    "p2t": "Certyfikowana taśma",
    "p2s": "Wyłącznie europejskie certyfikowane materiały",
    "p3t": "Programowana precyzja",
    "p3s": "Kontrolowana prędkość, napięcie i długość ściegu",
    "cta": "Skontaktuj się z nami",
    "caption": "Przemysłowe szycie bartack dla krytycznych połączeń."
  },
  process: {
    title: "Proces",
    subtitle: "Jasne kroki. Profesjonalny efekt.",
    p1Title: "Diagnoza",
    p1Sub: "Sprawdzamy mechanizm i stan taśmy.",
    p2Title: "Naprawa / wymiana taśmy",
    p2Sub: "Wymieniamy lub regenerujemy elementy z wysokiej jakości materiałów.",
    p3Title: "Testy",
    p3Sub: "Weryfikujemy blokowanie, zwijanie i działanie bezpieczeństwa.",
    p4Title: "Odbiór",
    p4Sub: "Gotowe do montażu — bezpieczniej i estetyczniej."
  },
  gallery: {
  title: "Galeria",
  subtitle: "Próbki kolorów pasów bezpieczeństwa — opcje OEM i personalizowane.",
  sample_black: "Czarny",
  sample_white: "Biały",
  sample_beige_oem: "Beż OEM",
  sample_red_classic: "Klasyczna czerwień",
  sample_red_sport: "Sportowa czerwień",
  sample_blue_navy: "Granatowy",
  sample_blue_royal: "Królewski niebieski",
  sample_blue_light: "Jasnoniebieski",
  sample_green_lime: "Limonkowy zielony",
  sample_black_red_edge: "Czarny + czerwony brzeg",
  sample_black_m_stripe: "Czarny + pasek M",
  sample_yellow_racing: "Żółty Racing"
},
  contact: {
    title: "Poproś o wycenę",
    subtitle: "Powiedz nam, czego potrzebujesz. Możesz pisać w swoim języku (francuski, hiszpański i inne) — odpowiemy szybko.",
    name: "Imię i nazwisko",
    namePh: "Twoje imię i nazwisko",
    phone: "Telefon",
    phonePh: "WhatsApp / Telefon",
    car: "Auto / Model",
    carPh: "np. BMW F10 520d",
    message: "Wiadomość",
    messagePh: "Co się stało + wybrany kolor",
    send: "Wyślij zapytanie",
    note: "Wskazówka: podaj kolor oraz miejsce montażu pasa (kierowca/pasażer/tył).",
    cardTitle: "Szybki kontakt",
    cardSub: "WhatsApp lub e-mail dla szybkiej odpowiedzi.",
    hours: "Godziny",
    hoursVal: "Pon–Sob, 09:00–18:00",
    backTop: "Wróć na górę"
  },
  footer: {
    tagline: "Naprawa bezpieczeństwa • Kolory na zamówienie • Wykończenie premium",
    copy: "© 2026 Seatbelt Pro. Wszelkie prawa zastrzeżone."
  }
},
pt: {
  meta: {
    title: "Seatbelt Pro",
    description: "Reparação de cintos de segurança e cores personalizadas."
  },
  brand: { name: "SEATBELT PRO", tag: "Serviço Premium" },
  nav: {
    services: "Serviços",
    colors: "Cores",
    process: "Processo",
    gallery: "Galeria",
    contact: "Contacto",
    quote: "Pedir orçamento"
  },
  hero: {
    pill: "Serviço premium de cintos",
    word1: "Reparar.",
    word2: "Restaurar.",
    word3: "Reimaginar.",
    subtitle: "Transforma os cintos de segurança do teu veículo com reparação precisa e cores personalizadas que marcam a diferença.",
    ctaPrimary: "Iniciar projeto",
    ctaSecondary: "Ver galeria",
    badge1: "10 000+ cintos restaurados",
    badge2: "Certificado de segurança",
    badge3: "Serviço expresso 24h",
    scroll: "DESLIZAR",
    card1Tag: "BASE",
    card1Title: "Reparação especializada",
    card1Sub: "Técnicos certificados restauram cintos danificados segundo especificações de fábrica",
    card2Tag: "PREMIUM",
    card2Title: "Cores personalizadas",
    card2Sub: "50+ cores vibrantes para combinar com o teu estilo e interior"
  },
  services: {
    title: "Serviços",
    subtitle: "Segurança em primeiro lugar, materiais premium e acabamento limpo.",
    s1Title: "Substituição da fita",
    s1Sub: "Substituímos a fita gasta por material de qualidade OEM.",
    s2Title: "Reparação do retrator",
    s2Sub: "Corrigimos retração lenta, bloqueios e encravamentos.",
    s3Title: "Inspeção de segurança",
    s3Sub: "Verificações funcionais e comportamento correto de bloqueio."
  },
  process: {
    title: "Processo",
    subtitle: "Passos claros. Resultados profissionais.",
    p1Title: "Diagnóstico",
    p1Sub: "Inspecionamos o mecanismo e o estado da fita.",
    p2Title: "Reparação / substituição",
    p2Sub: "Substituímos ou restauramos componentes com materiais de qualidade.",
    p3Title: "Testes",
    p3Sub: "Bloqueio, retração e comportamento de segurança verificados.",
    p4Title: "Entrega",
    p4Sub: "Pronto a instalar — mais seguro e mais limpo."
  },
   "machine": {
    "title": "Costura bartack industrial",
    "subtitle": "Costura desenvolvida especificamente para cintos de segurança com fitas certificadas europeias.",
    "kicker": "Nosso equipamento",
    "cardTitle": "Máquina bartack de ponto fixo",
    "cardText": "Utilizamos um sistema bartack industrial projetado e programado para a costura de cintos de segurança.",
    "p1t": "Bartack reforçado",
    "p1s": "Padrões de costura fortes e repetíveis",
    "p2t": "Fita certificada",
    "p2s": "Materiais de cinto certificados na Europa",
    "p3t": "Precisão programada",
    "p3s": "Velocidade, tensão e comprimento do ponto controlados",
    "cta": "Fale conosco",
    "caption": "Costura bartack industrial para áreas críticas de segurança."
  },
  gallery: {
  title: "Galeria",
  subtitle: "Amostras de cores de cintos de segurança — opções OEM e personalizadas.",
  sample_black: "Preto",
  sample_white: "Branco",
  sample_beige_oem: "Bege OEM",
  sample_red_classic: "Vermelho clássico",
  sample_red_sport: "Vermelho sport",
  sample_blue_navy: "Azul marinho",
  sample_blue_royal: "Azul royal",
  sample_blue_light: "Azul claro",
  sample_green_lime: "Verde lima",
  sample_black_red_edge: "Preto + borda vermelha",
  sample_black_m_stripe: "Preto + faixa M",
  sample_yellow_racing: "Amarelo Racing"
},
  contact: {
    title: "Pedir orçamento",
    subtitle: "Diga-nos do que precisa. Pode escrever no seu idioma (francês, espanhol e outros) — responderemos rapidamente.",
    name: "Nome",
    namePh: "O teu nome",
    phone: "Telefone",
    phonePh: "WhatsApp / Telefone",
    car: "Carro / Modelo",
    carPh: "ex.: BMW F10 520d",
    message: "Mensagem",
    messagePh: "O que aconteceu + cor desejada",
    send: "Enviar pedido",
    note: "Dica: inclui a cor desejada e onde o cinto está instalado (condutor/passageiro/traseiro).",
    cardTitle: "Contacto rápido",
    cardSub: "Usa WhatsApp ou e-mail para resposta rápida.",
    hours: "Horário",
    hoursVal: "Seg–Sáb, 09:00–18:00",
    backTop: "Voltar ao topo"
  },
  footer: {
    tagline: "Reparação de segurança • Cores personalizadas • Acabamento premium",
    copy: "© 2026 Seatbelt Pro. Todos os direitos reservados."
  }
},
    ro: {
      meta: {
        title: "Seatbelt Pro",
        description: "Reparații centuri de siguranță și culori personalizate."
      },
      brand: { name: "SEATBELT PRO", tag: "Serviciu Premium" },
      nav: {
        services: "Servicii",
        colors: "Culori",
        process: "Proces",
        gallery: "Galerie",
        contact: "Contact",
        quote: "Cere ofertă"
      },
      hero: {
        pill: "Service premium pentru centuri",
        word1: "Repară.",
        word2: "Restaurează.",
        word3: "Reimaginează.",
        subtitle: "Transformă centurile de siguranță cu reparații precise și culori personalizate care ies în evidență.",
        ctaPrimary: "Începe proiectul",
        ctaSecondary: "Vezi galeria",
        badge1: "10K+ centuri restaurate",
        badge2: "Certificat siguranță",
        badge3: "Serviciu rapid 24h",
        scroll: "DERULEAZĂ",
        card1Tag: "BAZĂ",
        card1Title: "Reparație expertă",
        card1Sub: "Tehnicieni certificați refac centurile conform standardelor",
        card2Tag: "PREMIUM",
        card2Title: "Culori personalizate",
        card2Sub: "50+ culori vibrante pentru stilul și interiorul tău"
      },
      "machine": {
    "title": "Cusătură bartack industrială",
    "subtitle": "Cusătură dedicată centurilor de siguranță, realizată cu bandă certificată european.",
    "kicker": "Echipamentul nostru",
    "cardTitle": "Mașină bartack cu cusătură blocată",
    "cardText": "Folosim un sistem bartack industrial, proiectat și programat special pentru coaserea centurilor de siguranță, asigurând rezistență constantă.",
    "p1t": "Bartack ranforsat",
    "p1s": "Modele de cusătură rezistente și repetabile",
    "p2t": "Bandă certificată",
    "p2s": "Materiale pentru centuri certificate european",
    "p3t": "Precizie programată",
    "p3s": "Viteză, tensiune și lungime de cusătură controlate",
    "cta": "Contactează-ne",
    "caption": "Cusături bartack industriale pentru zone critice de siguranță."
  },
      services: {
        title: "Servicii",
        subtitle: "Siguranță pe primul loc, materiale premium și finisaje curate.",
        s1Title: "Rețesere bandă",
        s1Sub: "Înlocuim banda uzată cu material de calitate OEM.",
        s2Title: "Reparație retractor",
        s2Sub: "Rezolvăm retractare lentă, blocări și probleme mecanice.",
        s3Title: "Inspecție siguranță",
        s3Sub: "Verificări funcționale și comportament corect de blocare."
      },
      process: {
        title: "Proces",
        subtitle: "Pași clari. Rezultate profesioniste.",
        p1Title: "Diagnoză",
        p1Sub: "Inspectăm mecanismul și starea benzii.",
        p2Title: "Reparație / Rețesere",
        p2Sub: "Înlocuim sau refacem componente cu materiale de calitate.",
        p3Title: "Testare",
        p3Sub: "Verificăm blocarea, retractarea și comportamentul de siguranță.",
        p4Title: "Livrare",
        p4Sub: "Gata de montat — mai sigur și mai curat."
      },
      gallery: {
  title: "Galerie",
  subtitle: "Mostre de culori pentru centuri — opțiuni OEM și personalizate.",
  sample_black: "Negru",
  sample_white: "Alb",
  sample_beige_oem: "Bej OEM",
  sample_red_classic: "Roșu clasic",
  sample_red_sport: "Roșu sport",
  sample_blue_navy: "Albastru navy",
  sample_blue_royal: "Albastru royal",
  sample_blue_light: "Albastru deschis",
  sample_green_lime: "Verde lime",
  sample_black_red_edge: "Negru + margine roșie",
  sample_black_m_stripe: "Negru + dungă M",
  sample_yellow_racing: "Galben Racing"
},
      contact: {
        title: "Cere ofertă",
        subtitle: "Spune-ne ce ai nevoie și îți răspundem rapid.",
        name: "Nume",
        namePh: "Numele tău",
        phone: "Telefon",
        phonePh: "WhatsApp / Telefon",
        car: "Mașină / Model",
        carPh: "ex: BMW F10 520d",
        message: "Mesaj",
        messagePh: "Ce s-a întâmplat + culoarea dorită",
        send: "Trimite cererea",
        note: "Sfat: include culoarea dorită și poziția centurii (șofer/pasager/spate).",
        cardTitle: "Contact rapid",
        cardSub: "WhatsApp sau email pentru răspuns rapid.",
        hours: "Program",
        hoursVal: "Lun–Sâm, 09:00–18:00",
        backTop: "Sus"
      },
      footer: {
        tagline: "Reparații siguranță • Culori personalizate • Finisaj premium",
        copy: "© 2026 Seatbelt Pro. Toate drepturile rezervate."
      }
    }
  };

  // =========================
  // 2) Helpers
  // =========================
  const getLang = () => localStorage.getItem("lang") || DEFAULT_LANG;

  function setLang(lang) {
    const chosen = I18N[lang] ? lang : DEFAULT_LANG;
    localStorage.setItem("lang", chosen);
    document.documentElement.setAttribute("lang", chosen);
    return chosen;
  }

  function getByPath(obj, path) {
    return path.split(".").reduce((acc, k) => (acc && acc[k] != null ? acc[k] : null), obj);
  }

  function applyTranslations(lang) {
    const dict = I18N[lang] || I18N[DEFAULT_LANG];

    // Text nodes
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      const val = getByPath(dict, key);
      if (val == null) return;
      el.textContent = val;
    });

    // Attributes mapping: data-i18n-attr="placeholder:contact.namePh" or "content:meta.description"
    document.querySelectorAll("[data-i18n-attr]").forEach(el => {
      const raw = el.getAttribute("data-i18n-attr") || "";
      // Allow multiple mappings separated by comma
      raw.split(",").map(s => s.trim()).filter(Boolean).forEach(pair => {
        const [attr, key] = pair.split(":").map(s => s.trim());
        if (!attr || !key) return;
        const val = getByPath(dict, key);
        if (val == null) return;
        el.setAttribute(attr, val);
      });
    });

    // Update title also (in case browser doesn't re-render it from data-i18n)
    const titleVal = getByPath(dict, "meta.title");
    if (titleVal) document.title = titleVal;
  }

  // Expose to global so dropdown can call it
  window.setLanguage = async function(lang){
    const chosen = setLang(lang);
    applyTranslations(chosen);
    syncLangDropdown(chosen);
  };

  // =========================
  // 3) Language Dropdown (if you added it)
  // =========================
  function syncLangDropdown(lang){
    const codeEl = document.getElementById("langCode");
    const menu = document.getElementById("langMenu");
    if (codeEl) codeEl.textContent = (lang || "").toUpperCase();

    if (menu){
      menu.querySelectorAll(".lang-opt").forEach(o => {
        o.classList.toggle("active", o.dataset.lang === lang);
      });
    }
  }

  function initLangDropdown(){
    const dd = document.getElementById("langDD");
    const btn = document.getElementById("langBtn");
    const menu = document.getElementById("langMenu");
    if (!dd || !btn || !menu) return;

    document.querySelectorAll("#langMobile .lang-opt").forEach(opt => {
  opt.addEventListener("click", async () => {
    await window.setLanguage(opt.dataset.lang);
  });
});

    function openDD(){
      dd.classList.add("open");
      btn.setAttribute("aria-expanded", "true");
    }
    function closeDD(){
      dd.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
    }

    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      dd.classList.contains("open") ? closeDD() : openDD();
    });

    document.addEventListener("click", () => closeDD());
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeDD(); });

    menu.querySelectorAll(".lang-opt").forEach(opt => {
      opt.addEventListener("click", async (e) => {
        e.stopPropagation();
        await window.setLanguage(opt.dataset.lang);
        closeDD();
      });
    });
  }

  // =========================
  // 4) Burger / Mobile panel
  // =========================
  function initBurger(){
    const burger = document.querySelector(".burger");
    const panel = document.getElementById("mobilePanel");
    if (!burger || !panel) return;

    const setOpen = (open) => {
      burger.classList.toggle("is-open", open);
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      panel.style.display = open ? "block" : "none";
    };

    setOpen(false);

    burger.addEventListener("click", () => setOpen(!burger.classList.contains("is-open")));

    panel.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => setOpen(false));
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 860) setOpen(false);
    });
  }

  // =========================
  // 5) Canvas stars
  // =========================
  function initStars(){
    const canvas = document.getElementById("stars");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const DPR = Math.min(window.devicePixelRatio || 1, 2);

    let W = 0, H = 0;
    let stars = [];

    const rand = (a, b) => a + Math.random() * (b - a);

    function resize(){
      W = canvas.clientWidth;
      H = canvas.clientHeight;
      canvas.width = Math.floor(W * DPR);
      canvas.height = Math.floor(H * DPR);
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);

      const count = Math.floor((W * H) / 18000);
      const n = Math.max(40, Math.min(140, count));
      stars = Array.from({ length: n }, () => ({
        x: rand(0, W),
        y: rand(0, H),
        r: rand(0.6, 1.8),
        a: rand(0.15, 0.85),
        s: rand(0.08, 0.35),
        tw: rand(0.6, 1.4),
      }));
    }

    function draw(){
      ctx.clearRect(0, 0, W, H);
      const t = Date.now() / 1000;

      for (const p of stars){
        p.y += p.s;
        if (p.y > H + 10){
          p.y = -10;
          p.x = rand(0, W);
        }

        const tw = 0.5 + 0.5 * Math.sin(t * p.tw + p.x * 0.01);
        const alpha = p.a * (0.6 + 0.4 * tw);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(237,231,255,${alpha})`;
        ctx.fill();
      }

      requestAnimationFrame(draw);
    }

    window.addEventListener("resize", resize);
    resize();
    draw();
  }

  // =========================
  // 6) Cursor glow in hero
  // =========================
  function initCursorGlow(){
    const glow = document.getElementById("cursorGlow");
    const hero = document.querySelector(".hero");
    if (!glow || !hero) return;

    function move(e){
      const r = hero.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      glow.style.transform = `translate(${x - 260}px, ${y - 260}px)`;
    }

    hero.addEventListener("mousemove", move, { passive:true });
    hero.addEventListener("mouseleave", () => {
      glow.style.transform = `translate(-9999px,-9999px)`;
    });
  }

  // =========================
  // 7) Colors palette -> preview belt
  // =========================
  function initPalette(){
    const palette = document.getElementById("palette");
    const belt = document.getElementById("belt");
    const value = document.getElementById("colorValue");
    if (!palette || !belt || !value) return;

    function setColor(hex){
      value.textContent = hex.toUpperCase();
      // update belt fill (belt has ::after in CSS, so set CSS variable on element)
      belt.style.setProperty("--beltColor", hex);
      // fallback for your CSS: override via background on belt::after not possible; so set belt background directly too
      belt.style.background = `linear-gradient(90deg, rgba(255,255,255,.10), rgba(255,255,255,.06)), ${hex}`;
      belt.style.boxShadow = `0 14px 30px rgba(0,0,0,.35)`;
    }

    // initial
    setColor("#EC4899");

    palette.querySelectorAll(".sw").forEach(btn => {
      btn.addEventListener("click", () => {
        const hex = btn.getAttribute("data-color");
        if (!hex) return;
        setColor(hex);
      });
    });
  }

  // =========================
  // 8) Form (demo prevent submit)
  // =========================
  function initForm(){
    const form = document.getElementById("quoteForm");
    if (!form) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      // Here you can integrate Formspree / email / WhatsApp later
      form.reset();
      alert("Sent! (demo)");
    });
  }

  // =========================
  // Init
  // =========================
  const lang = setLang(getLang());
  applyTranslations(lang);

  initLangDropdown();
  syncLangDropdown(lang);

  initBurger();
  initStars();
  initCursorGlow();
  initPalette();
  initForm();
})();


(() => {
  function initSlider(root){
    const track = root.querySelector('.slider-track');
    const prev = root.querySelector('.slider-btn.prev');
    const next = root.querySelector('.slider-btn.next');
    const dotsWrap = root.querySelector('.slider-dots');
    const slides = Array.from(track.children).filter(el => el.classList.contains('sample'));

    if(!track || slides.length === 0) return;

    // ----- helpers
    const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

    function getSlideLeft(i){
      // Left position of slide relative to track scroll area
      return slides[i].offsetLeft - track.offsetLeft;
    }

    function scrollToIndex(i){
      i = clamp(i, 0, slides.length - 1);
      track.scrollTo({ left: getSlideLeft(i), behavior: 'smooth' });
    }

    function nearestIndex(){
      const x = track.scrollLeft + 10; // small bias to start
      let best = 0, bestDist = Infinity;
      for(let i=0;i<slides.length;i++){
        const left = getSlideLeft(i);
        const d = Math.abs(left - x);
        if(d < bestDist){ bestDist = d; best = i; }
      }
      return best;
    }

    function updateUI(){
      const i = nearestIndex();

      if(dotsWrap){
        const dots = dotsWrap.querySelectorAll('.dot');
        dots.forEach((d,k) => d.classList.toggle('is-active', k === i));
      }

      if(prev) prev.disabled = track.scrollLeft <= 2;
      if(next) next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 2;
    }

    // ----- dots
    if(dotsWrap){
      dotsWrap.innerHTML = '';
      slides.forEach((_, i) => {
        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'dot';
        b.setAttribute('aria-label', `Go to slide ${i+1}`);
        b.addEventListener('click', (e) => {
          e.preventDefault();
          scrollToIndex(i);
        });
        dotsWrap.appendChild(b);
      });
    }

    // ----- arrows
    if(prev){
      prev.addEventListener('click', (e) => {
        e.preventDefault();
        scrollToIndex(nearestIndex() - 1);
      });
    }
    if(next){
      next.addEventListener('click', (e) => {
        e.preventDefault();
        scrollToIndex(nearestIndex() + 1);
      });
    }

    // ----- touch/mouse drag (doesn't move the page)
    let isDown = false;
    let startX = 0;
    let startScroll = 0;

    track.addEventListener('pointerdown', (e) => {
      // Only left click / touch
      if(e.pointerType === 'mouse' && e.button !== 0) return;

      isDown = true;
      track.setPointerCapture(e.pointerId);

      startX = e.clientX;
      startScroll = track.scrollLeft;

      // No page selection while dragging
      track.classList.add('is-dragging');
    });

    track.addEventListener('pointermove', (e) => {
      if(!isDown) return;

      const dx = e.clientX - startX;

      // If user is dragging horizontally, prevent accidental gestures
      // (doesn't block vertical page scroll because touch-action is pan-y)
      track.scrollLeft = startScroll - dx;
    });

    function endDrag(){
      if(!isDown) return;
      isDown = false;
      track.classList.remove('is-dragging');

      // Snap to nearest (smooth) without scrolling page
      scrollToIndex(nearestIndex());
    }

    track.addEventListener('pointerup', endDrag);
    track.addEventListener('pointercancel', endDrag);
    track.addEventListener('lostpointercapture', endDrag);

    // ----- sync UI
    track.addEventListener('scroll', () => requestAnimationFrame(updateUI), { passive: true });
    window.addEventListener('resize', updateUI);

    updateUI();
  }

  document.querySelectorAll('[data-slider="samples"]').forEach(initSlider);
})();

