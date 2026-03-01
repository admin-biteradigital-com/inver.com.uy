"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Lang = "es" | "en" | "pt";

type DictT = Record<string, string>;
type DictMap = Record<Lang, DictT>;

const dict: DictMap = {
    es: {
        "nav.tours": "Tours",
        "nav.transfers": "Transfers",
        "nav.exp": "Experiencias",
        "nav.disc": "Descubrir UY",
        "nav.about": "Nosotros",
        "nav.events": "Eventos",
        "nav.faq": "FAQ",
        "nav.contact": "Contacto",
        "nav.book": "Reservar",

        "hero.badge": "✦ 15 AÑOS EN URUGUAY ✦",
        "hero.title1": "Descubrí",
        "hero.title2": "Uruguay",
        "hero.sub": "Tours, transfers y experiencias únicas en Montevideo, Punta del Este, Colonia y más.",
        "hero.cta1": "Ver Tours",
        "hero.cta2": "📱 WhatsApp",

        "stat.y.v": "15+", "stat.y.l": "Años",
        "stat.t.v": "3", "stat.t.l": "Tours regulares",
        "stat.l.v": "3", "stat.l.l": "Idiomas",
        "stat.s.v": "24h", "stat.s.l": "Atención",

        "tours.tag": "NUESTROS TOURS",
        "tours.title": "Los mejores destinos",
        "tours.lead": "Tours regulares con guía experto y pickup desde tu hotel incluido.",

        "tours.mvd.t": "Ciudad Vieja & Rambla",
        "tours.mvd.d": "Ciudad Vieja, Mercado del Puerto, Palacio Salvo, Rambla y más.",
        "tours.mvd.dur": "MEDIO DÍA",
        "tours.pde.t": "Playas & Glamour",
        "tours.pde.d": "Playas paradisíacas, La Mano, Port de Plaisance y paisajes únicos.",
        "tours.pde.dur": "DÍA COMPLETO",
        "tours.col.t": "Patrimonio UNESCO",
        "tours.col.d": "El barrio histórico colonial declarado Patrimonio de la Humanidad.",
        "tours.col.dur": "DÍA COMPLETO",
        "tours.priv.badge": "Tours Privados",
        "tours.priv.t": "Tu itinerario ideal",
        "tours.priv.d": "Destino, horarios y actividades personalizados para tu grupo.",
        "tours.priv.dur": "A MEDIDA",

        "tours.btn.book": "Reservar",
        "tours.btn.inq": "Consultar",
        "tours.btn.form": "Formulario",

        "tr.tag": "TRANSFERS",
        "tr.title": "Traslados cómodos y puntuales",
        "tr.lead": "Aeropuerto Internacional de Carrasco y traslados privados a todo Uruguay.",
        "tr.1.t": "Aeropuerto → Hotel", "tr.1.d": "Llegás y tu transfer ya está esperando. Monitoreo de vuelo incluido.",
        "tr.2.t": "Hotel → Aeropuerto", "tr.2.d": "Te buscamos a la hora exacta. Puntualidad garantizada.",
        "tr.3.t": "Interior del país", "tr.3.d": "Salto, Rocha, Paysandú, Mercedes y más destinos.",
        "tr.4.t": "Grupos & corporativo", "tr.4.d": "Flota para grupos, congresos y viajes corporativos.",
        "tr.wa.msg": "¿Necesitás un transfer? Consultanos por WhatsApp ahora mismo.",
        "tr.wa.btn": "Reservar Transfer",

        "exp.tag": "EXPERIENCIAS",
        "exp.title": "Tours a bodegas & experiencias",
        "exp.1.tag": "CON ALMUERZO", "exp.1.t": "Bodegas con Almuerzo", "exp.1.d": "Degustación de Tannat, viñedos y almuerzo maridaje incluido.",
        "exp.2.tag": "SIN ALMUERZO", "exp.2.t": "Bodegas sin Almuerzo", "exp.2.d": "Media jornada en los viñedos con degustación guiada de Tannat.",
        "exp.3.tag": "¿POR QUÉ URUGUAY?", "exp.3.t": "El Tannat uruguayo", "exp.3.d": "Uruguay es el cuarto productor mundial de Tannat, la uva emblema nacional con identidad única.",
        "exp.4.tag": "PRIVADO", "exp.4.t": "Bodegas privadas", "exp.4.d": "Para grupos, cumpleaños y celebraciones especiales. Diseñamos la experiencia perfecta.",

        "disc.tag": "DESCUBRÍ URUGUAY",
        "disc.title": "La joya oculta de Sudamérica",
        "disc.lead": "Uruguay es el país más seguro de América Latina. Pequeño en tamaño, enorme en experiencias.",
        "disc.p2": "3,5 millones de habitantes, 600 km de costa, playas glamorosas, historia colonial, termas y vinos únicos.",
        "disc.1.t": "Montevideo", "disc.1.d": "Capital vibrante, rambla de 22 km y el mejor mercado de la región.",
        "disc.2.t": "Punta del Este", "disc.2.d": "El Saint-Tropez de Sudamérica: playas, gastronomía y vida nocturna.",
        "disc.3.t": "Colonia", "disc.3.d": "Patrimonio UNESCO con 400 años de historia colonial.",
        "disc.4.t": "Bodegas", "disc.4.d": "Tannat, el vino emblema de Uruguay, reconocido en todo el mundo.",
        "disc.5.t": "Termas", "disc.5.d": "Las mejores aguas termales de Sudamérica en Salto y Daymán.",
        "disc.6.t": "Estancias", "disc.6.d": "Turismo rural auténtico y cultura gaucha en las estancias uruguayas.",

        "nos.tag": "QUIÉNES SOMOS",
        "nos.title": "Expertos en lo mejor de Uruguay",
        "nos.lead": "Empresa uruguaya con más de 15 años conectando viajeros con la magia de nuestro país.",
        "nos.box.sub": "TURISMO DESDE 2009 · MONTEVIDEO",
        "nos.box.1.t": "Nuestro comienzo", "nos.box.1.d": "Fundamos INVER para mostrar lo mejor de Uruguay al mundo.",
        "nos.box.2.t": "Expansión", "nos.box.2.d": "Incorporamos transfers y tours a bodegas de vino Tannat.",
        "nos.box.3.t": "15 años creciendo", "nos.box.3.d": "Referentes del turismo receptivo en Uruguay con atención 24/7.",
        "nos.val.1.t": "Experiencia local", "nos.val.1.d": "15 años mostrando Uruguay a viajeros de todo el mundo.",
        "nos.val.2.t": "Atención 24h", "nos.val.2.d": "Siempre disponibles para resolver dudas por WhatsApp.",
        "nos.val.3.t": "Multilingüe", "nos.val.3.d": "Español, inglés y portugués. Guías bilingüe y trilingüe.",

        "ev.tag": "EVENTOS",
        "ev.title": "Organizamos tu evento",
        "ev.hero.t": "Eventos corporativos & privados", "ev.hero.d": "Estamos desarrollando nuestra división de eventos: logística, traslados, actividades y gastronomía. Armamos la propuesta perfecta para tu grupo.",
        "ev.hero.btn": "Consultar",
        "ev.1.t": "Corporativos", "ev.1.d": "Congresos, team buildings y viajes de incentivo.",
        "ev.2.t": "Celebraciones", "ev.2.d": "Bodas, aniversarios y cumpleaños en los paisajes más bellos de Uruguay.",
        "ev.3.t": "Educativos", "ev.3.d": "Excursiones escolares y universitarias con programas culturales.",

        "faq.tag": "PREGUNTAS FRECUENTES",
        "faq.title": "Todo lo que necesitás saber",
        "faq.1.q": "¿Cuánto tiempo antes debo reservar?", "faq.1.a": "Recomendamos 24-48 horas de anticipación, aunque hacemos todo lo posible para reservas de último momento.",
        "faq.2.q": "¿El pickup desde el hotel está incluido?", "faq.2.a": "Sí, todos los tours regulares incluyen pickup y dropoff desde tu hotel en Montevideo.",
        "faq.3.q": "¿En qué idiomas operan?", "faq.3.a": "Español, inglés y portugués. Guías bilingüe y trilingüe para la mejor experiencia.",
        "faq.4.q": "¿Qué pasa si llueve?", "faq.4.a": "Los tours se realizan con cualquier clima. En condiciones extremas te contactamos para reprogramar sin cargo.",
        "faq.5.q": "¿Cómo puedo pagar?", "faq.5.a": "Efectivo en dólares o pesos, transferencia bancaria y tarjetas de crédito/débito.",
        "faq.6.q": "¿Puedo cancelar una reserva?", "faq.6.a": "Sí. Con más de 24 horas de anticipación no hay cargo. Para casos especiales consultanos directamente.",

        "con.tag": "CONTACTO",
        "con.title": "Estamos para ayudarte",
        "con.lead": "¿Tenés alguna consulta? Contactanos por cualquiera de nuestros canales.",
        "con.p.t": "Teléfonos",
        "con.d.t": "Dirección",
        "con.form.t": "Envianos un mensaje",
        "con.form.n": "Nombre completo",
        "con.form.e": "Email",
        "con.form.s": "Asunto",
        "con.form.m": "Mensaje",
        "con.form.btn": "Enviar por WhatsApp",
        "con.form.opions": "Tours,Transfers,Experiencias,Eventos,Otro",

        "modal.title": "Reservar",
        "modal.sub": "Completá el formulario y te contactamos a la brevedad.",
        "modal.n": "Nombre completo *",
        "modal.p": "Personas *",
        "modal.d": "Fecha *",
        "modal.h": "Hotel de pickup *",
        "modal.ph": "Teléfono / WhatsApp",
        "modal.not": "Consulta adicional",
        "modal.btn": "Enviar por WhatsApp",
        "modal.loading": "Abriendo WhatsApp...",
        "modal.err": "Completá los campos obligatorios (*)."
    },
    en: {
        "nav.tours": "Tours",
        "nav.transfers": "Transfers",
        "nav.exp": "Experiences",
        "nav.disc": "Discover UY",
        "nav.about": "About",
        "nav.events": "Events",
        "nav.faq": "FAQ",
        "nav.contact": "Contact",
        "nav.book": "Book now",

        "hero.badge": "✦ 15 YEARS IN URUGUAY ✦",
        "hero.title1": "Discover",
        "hero.title2": "Uruguay",
        "hero.sub": "Tours, transfers and unique experiences in Montevideo, Punta del Este, Colonia and more.",
        "hero.cta1": "See Tours",
        "hero.cta2": "📱 WhatsApp",

        "stat.y.v": "15+", "stat.y.l": "Years",
        "stat.t.v": "3", "stat.t.l": "Regular tours",
        "stat.l.v": "3", "stat.l.l": "Languages",
        "stat.s.v": "24h", "stat.s.l": "Support",

        "tours.tag": "OUR TOURS",
        "tours.title": "The best destinations",
        "tours.lead": "Regular tours with expert guide and hotel pickup included.",

        "tours.mvd.t": "Old Town & Promenade",
        "tours.mvd.d": "Old Town, Mercado del Puerto, Palacio Salvo, Promenade and more.",
        "tours.mvd.dur": "HALF DAY",
        "tours.pde.t": "Beaches & Glamour",
        "tours.pde.d": "Paradise beaches, La Mano, Port de Plaisance and unique landscapes.",
        "tours.pde.dur": "FULL DAY",
        "tours.col.t": "UNESCO Heritage",
        "tours.col.d": "The colonial historic district, a World Heritage Site.",
        "tours.col.dur": "FULL DAY",
        "tours.priv.badge": "Private Tours",
        "tours.priv.t": "Your ideal itinerary",
        "tours.priv.d": "Destination, schedules and activities customized for your group.",
        "tours.priv.dur": "CUSTOM",

        "tours.btn.book": "Book",
        "tours.btn.inq": "Inquire",
        "tours.btn.form": "Form",

        "tr.tag": "TRANSFERS",
        "tr.title": "Comfortable & punctual transfers",
        "tr.lead": "Carrasco International Airport and private transfers throughout Uruguay.",
        "tr.1.t": "Airport → Hotel", "tr.1.d": "You arrive and your transfer is already waiting. Flight monitoring included.",
        "tr.2.t": "Hotel → Airport", "tr.2.d": "We pick you up at the exact time. Punctuality guaranteed.",
        "tr.3.t": "Countryside", "tr.3.d": "Salto, Rocha, Paysandú, Mercedes and more destinations.",
        "tr.4.t": "Groups & corporate", "tr.4.d": "Fleet for groups, congresses and corporate travel.",
        "tr.wa.msg": "Need a transfer? Contact us via WhatsApp right now.",
        "tr.wa.btn": "Book Transfer",

        "exp.tag": "EXPERIENCES",
        "exp.title": "Winery tours & experiences",
        "exp.1.tag": "WITH LUNCH", "exp.1.t": "Winery with Lunch", "exp.1.d": "Tannat tasting, vineyard tour and paired lunch included.",
        "exp.2.tag": "WITHOUT LUNCH", "exp.2.t": "Winery without Lunch", "exp.2.d": "Half day in the vineyards with guided Tannat tasting.",
        "exp.3.tag": "WHY URUGUAY?", "exp.3.t": "Uruguayan Tannat", "exp.3.d": "Uruguay is the 4th largest Tannat producer globally, the national emblem grape with unique identity.",
        "exp.4.tag": "PRIVATE", "exp.4.t": "Private winery visits", "exp.4.d": "For groups, birthdays and special celebrations. We design the perfect experience.",

        "disc.tag": "DISCOVER URUGUAY",
        "disc.title": "The hidden gem of South America",
        "disc.lead": "Uruguay is the safest country in Latin America. Small in size, enormous in experiences.",
        "disc.p2": "3.5 million inhabitants, 600 km of coastline, glamorous beaches, colonial history, hot springs and unique wines.",
        "disc.1.t": "Montevideo", "disc.1.d": "Vibrant capital, 22 km promenade and the best market in the region.",
        "disc.2.t": "Punta del Este", "disc.2.d": "South America's Saint-Tropez: beaches, gastronomy and nightlife.",
        "disc.3.t": "Colonia", "disc.3.d": "UNESCO Heritage with 400 years of colonial history.",
        "disc.4.t": "Bodegas", "disc.4.d": "Tannat, Uruguay's emblematic wine, recognized worldwide.",
        "disc.5.t": "Termas", "disc.5.d": "The best hot springs in South America at Salto and Daymán.",
        "disc.6.t": "Estancias", "disc.6.d": "Authentic rural tourism and gaucho culture at Uruguayan estancias.",

        "nos.tag": "ABOUT US",
        "nos.title": "Experts in the best of Uruguay",
        "nos.lead": "Uruguayan company with over 15 years connecting travelers with the magic of our country.",
        "nos.box.sub": "TOURISM SINCE 2009 · MONTEVIDEO",
        "nos.box.1.t": "Our beginning", "nos.box.1.d": "We founded INVER to show the best of Uruguay to the world.",
        "nos.box.2.t": "Expansion", "nos.box.2.d": "We added airport transfers and Tannat winery tours.",
        "nos.box.3.t": "15 years growing", "nos.box.3.d": "Leading reference for inbound tourism in Uruguay, 24/7 support.",
        "nos.val.1.t": "Local expertise", "nos.val.1.d": "15 years showing Uruguay to travelers from around the world.",
        "nos.val.2.t": "24h support", "nos.val.2.d": "Always available to resolve questions via WhatsApp.",
        "nos.val.3.t": "Multilingual", "nos.val.3.d": "Spanish, English and Portuguese. Bilingual and trilingual guides.",

        "ev.tag": "EVENTS",
        "ev.title": "We organize your event",
        "ev.hero.t": "Corporate & private events", "ev.hero.d": "We're building our events division: logistics, transfers, activities and gastronomy. We put together the perfect proposal for your group.",
        "ev.hero.btn": "Inquire",
        "ev.1.t": "Corporate", "ev.1.d": "Congresses, team buildings and incentive trips.",
        "ev.2.t": "Celebrations", "ev.2.d": "Weddings and birthdays in Uruguay's most beautiful landscapes.",
        "ev.3.t": "Educational", "ev.3.d": "School and university excursions with cultural programs.",

        "faq.tag": "FAQ",
        "faq.title": "Everything you need to know",
        "faq.1.q": "How far in advance should I book?", "faq.1.a": "We recommend 24-48 hours in advance, though we do our best for last-minute bookings.",
        "faq.2.q": "Is hotel pickup included?", "faq.2.a": "Yes, all regular tours include pickup and dropoff from your hotel in Montevideo.",
        "faq.3.q": "What languages do you operate in?", "faq.3.a": "Spanish, English and Portuguese. Bilingual and trilingual guides for the best experience.",
        "faq.4.q": "What if it rains?", "faq.4.a": "Tours run in any weather. In extreme conditions we contact you to reschedule at no charge.",
        "faq.5.q": "How can I pay?", "faq.5.a": "Cash in dollars or pesos, bank transfer and credit/debit cards.",
        "faq.6.q": "Can I cancel a booking?", "faq.6.a": "Yes. More than 24 hours in advance, no charge. Contact us for special cases.",

        "con.tag": "CONTACT",
        "con.title": "We're here to help",
        "con.lead": "Have a question? Contact us through any of our channels.",
        "con.p.t": "Phones",
        "con.d.t": "Address",
        "con.form.t": "Send us a message",
        "con.form.n": "Full name",
        "con.form.e": "Email",
        "con.form.s": "Subject",
        "con.form.m": "Message",
        "con.form.btn": "Send via WhatsApp",
        "con.form.opions": "Tours,Transfers,Experiences,Events,Other",

        "modal.title": "Book",
        "modal.sub": "Fill in the form and we'll contact you shortly.",
        "modal.n": "Full name *",
        "modal.p": "People *",
        "modal.d": "Date *",
        "modal.h": "Pickup hotel *",
        "modal.ph": "Phone / WhatsApp",
        "modal.not": "Additional notes",
        "modal.btn": "Send via WhatsApp",
        "modal.loading": "Opening WhatsApp...",
        "modal.err": "Fill in required fields (*)"
    },
    pt: {
        "nav.tours": "Tours",
        "nav.transfers": "Transfers",
        "nav.exp": "Experiências",
        "nav.disc": "Descobrir UY",
        "nav.about": "Sobre nós",
        "nav.events": "Eventos",
        "nav.faq": "FAQ",
        "nav.contact": "Contato",
        "nav.book": "Reservar",

        "hero.badge": "✦ 15 ANOS NO URUGUAI ✦",
        "hero.title1": "Descubra",
        "hero.title2": "o Uruguai",
        "hero.sub": "Tours, transfers e experiências únicas em Montevidéu, Punta del Este, Colônia e mais.",
        "hero.cta1": "Ver Tours",
        "hero.cta2": "📱 WhatsApp",

        "stat.y.v": "15+", "stat.y.l": "Anos",
        "stat.t.v": "3", "stat.t.l": "Tours regulares",
        "stat.l.v": "3", "stat.l.l": "Idiomas",
        "stat.s.v": "24h", "stat.s.l": "Atendimento",

        "tours.tag": "NOSSOS TOURS",
        "tours.title": "Os melhores destinos",
        "tours.lead": "Tours regulares com guia especializado e pickup do hotel incluído.",

        "tours.mvd.t": "Cidade Velha & Rambla",
        "tours.mvd.d": "Cidade Velha, Mercado do Porto, Palácio Salvo, Rambla e mais.",
        "tours.mvd.dur": "MEIO DIA",
        "tours.pde.t": "Praias & Glamour",
        "tours.pde.d": "Praias paradisíacas, La Mano, Port de Plaisance e paisagens únicas.",
        "tours.pde.dur": "DIA COMPLETO",
        "tours.col.t": "Patrimônio UNESCO",
        "tours.col.d": "O bairro histórico colonial, Patrimônio da Humanidade.",
        "tours.col.dur": "DIA COMPLETO",
        "tours.priv.badge": "Tours Privados",
        "tours.priv.t": "Seu itinerário ideal",
        "tours.priv.d": "Destino, horários e atividades personalizados para o seu grupo.",
        "tours.priv.dur": "PERSONALIZADO",

        "tours.btn.book": "Reservar",
        "tours.btn.inq": "Consultar",
        "tours.btn.form": "Formulário",

        "tr.tag": "TRANSFERS",
        "tr.title": "Traslados confortáveis e pontuais",
        "tr.lead": "Aeroporto Internacional de Carrasco e traslados privados por todo o Uruguai.",
        "tr.1.t": "Aeroporto → Hotel", "tr.1.d": "Você chega e o traslado já está esperando. Monitoramento de voo incluído.",
        "tr.2.t": "Hotel → Aeroporto", "tr.2.d": "Buscamos você no horário exato. Pontualidade garantida.",
        "tr.3.t": "Interior do país", "tr.3.d": "Salto, Rocha, Paysandú, Mercedes e mais destinos.",
        "tr.4.t": "Grupos & corporativo", "tr.4.d": "Frota para grupos, congressos e viagens corporativas.",
        "tr.wa.msg": "Precisa de um transfer? Entre em contato pelo WhatsApp agora.",
        "tr.wa.btn": "Reservar Transfer",

        "exp.tag": "EXPERIÊNCIAS",
        "exp.title": "Tours a vinícolas & experiências",
        "exp.1.tag": "COM ALMOÇO", "exp.1.t": "Vinícola com Almoço", "exp.1.d": "Degustação de Tannat, vinhedos e almoço harmonizado incluído.",
        "exp.2.tag": "SEM ALMOÇO", "exp.2.t": "Vinícola sem Almoço", "exp.2.d": "Meio período nos vinhedos com degustação guiada de Tannat.",
        "exp.3.tag": "POR QUE URUGUAI?", "exp.3.t": "O Tannat uruguaio", "exp.3.d": "O Uruguai é o 4º maior produtor mundial de Tannat, uva emblema nacional com identidade única.",
        "exp.4.tag": "PRIVADO", "exp.4.t": "Vinícolas privadas", "exp.4.d": "Para grupos, aniversários e celebrações especiais.",

        "disc.tag": "DESCUBRA O URUGUAI",
        "disc.title": "A joia escondida da América do Sul",
        "disc.lead": "O Uruguai é o país mais seguro da América Latina. Pequeno em tamanho, enorme em experiências.",
        "disc.p2": "3,5 milhões de habitantes, 600 km de costa, praias glamorosas, história colonial, termas e vinhos únicos.",
        "disc.1.t": "Montevidéu", "disc.1.d": "Capital vibrante, orla de 22 km e o melhor mercado da região.",
        "disc.2.t": "Punta del Este", "disc.2.d": "O Saint-Tropez da América do Sul: praias, gastronomia e vida noturna.",
        "disc.3.t": "Colônia", "disc.3.d": "Patrimônio UNESCO com 400 anos de história colonial.",
        "disc.4.t": "Bodegas", "disc.4.d": "Tannat, o vinho emblemático do Uruguai, reconhecido no mundo.",
        "disc.5.t": "Termas", "disc.5.d": "As melhores águas termais da América do Sul em Salto e Daymán.",
        "disc.6.t": "Estâncias", "disc.6.d": "Turismo rural autêntico e cultura gaúcha nas estâncias uruguaias.",

        "nos.tag": "QUEM SOMOS",
        "nos.title": "Especialistas no melhor do Uruguai",
        "nos.lead": "Empresa uruguaia com mais de 15 anos conectando viajantes com a magia do nosso país.",
        "nos.box.sub": "TURISMO DESDE 2009 · MONTEVIDÉU",
        "nos.box.1.t": "Nosso começo", "nos.box.1.d": "Fundamos a INVER para mostrar o melhor do Uruguai ao mundo.",
        "nos.box.2.t": "Expansão", "nos.box.2.d": "Incorporamos transfers e tours a vinícolas de Tannat.",
        "nos.box.3.t": "15 anos crescendo", "nos.box.3.d": "Referência no turismo receptivo no Uruguai com atendimento 24/7.",
        "nos.val.1.t": "Expertise local", "nos.val.1.d": "15 anos mostrando o Uruguai a viajantes do mundo todo.",
        "nos.val.2.t": "Atendimento 24h", "nos.val.2.d": "Sempre disponíveis para resolver dúvidas pelo WhatsApp.",
        "nos.val.3.t": "Multilíngue", "nos.val.3.d": "Espanhol, inglês e português. Guias bilíngues e trilíngues.",

        "ev.tag": "EVENTOS",
        "ev.title": "Organizamos seu evento",
        "ev.hero.t": "Eventos corporativos e privados", "ev.hero.d": "Estamos desenvolvendo nossa divisão de eventos: logística, traslados, atividades e gastronomia. A proposta perfeita para o seu grupo.",
        "ev.hero.btn": "Consultar",
        "ev.1.t": "Corporativos", "ev.1.d": "Congressos, team buildings e viagens de incentivo.",
        "ev.2.t": "Celebrações", "ev.2.d": "Casamentos e festas nos paisagens mais belos do Uruguai.",
        "ev.3.t": "Educacionais", "ev.3.d": "Excursões escolares e universitárias com programas culturais.",

        "faq.tag": "PERGUNTAS FREQUENTES",
        "faq.title": "Tudo que você precisa saber",
        "faq.1.q": "Com quanto tempo devo reservar?", "faq.1.a": "Recomendamos 24-48 horas de antecedência, embora façamos o possível para reservas de última hora.",
        "faq.2.q": "O pickup no hotel está incluído?", "faq.2.a": "Sim, todos os tours regulares incluem pickup e dropoff do hotel em Montevidéu.",
        "faq.3.q": "Em quais idiomas operam?", "faq.3.a": "Espanhol, inglês e português. Guias bilíngues e trilíngues.",
        "faq.4.q": "O que acontece se chover?", "faq.4.a": "Os tours ocorrem com qualquer clima. Em condições extremas reagendamos sem custo.",
        "faq.5.q": "Como posso pagar?", "faq.5.a": "Dinheiro em dólares ou pesos, transferência bancária e cartões de crédito/débito.",
        "faq.6.q": "Posso cancelar uma reserva?", "faq.6.a": "Sim. Com mais de 24 horas de antecedência não há taxa. Entre em contato para casos especiais.",

        "con.tag": "CONTATO",
        "con.title": "Estamos aqui para ajudar",
        "con.lead": "Tem alguma dúvida? Entre em contato por qualquer canal.",
        "con.p.t": "Telefones",
        "con.d.t": "Endereço",
        "con.form.t": "Envie-nos uma mensagem",
        "con.form.n": "Nome completo",
        "con.form.e": "Email",
        "con.form.s": "Assunto",
        "con.form.m": "Mensagem",
        "con.form.btn": "Enviar pelo WhatsApp",
        "con.form.opions": "Tours,Transfers,Experiências,Eventos,Outro",

        "modal.title": "Reservar",
        "modal.sub": "Preencha o formulário e entraremos em contato em breve.",
        "modal.n": "Nome completo *",
        "modal.p": "Pessoas *",
        "modal.d": "Data *",
        "modal.h": "Hotel de pickup *",
        "modal.ph": "Telefone / WhatsApp",
        "modal.not": "Observações",
        "modal.btn": "Enviar pelo WhatsApp",
        "modal.loading": "Abrindo WhatsApp...",
        "modal.err": "Preencha os campos obrigatórios (*)"
    }
};

interface I18nContextValue {
    lang: Lang;
    setLang: (l: Lang) => void;
    t: (key: string) => string;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children, initialLang = "es" }: { children: React.ReactNode; initialLang?: Lang }) {
    const [lang, setLangState] = useState<Lang>(initialLang);

    const setLang = (newLang: Lang) => {
        setLangState(newLang);
        document.cookie = `inver_lang=${newLang}; path=/; max-age=31536000; SameSite=Lax${process.env.NODE_ENV === "production" ? "; Secure" : ""}`;
    };

    const t = (key: string): string => {
        return dict[lang][key] ?? dict["es"][key] ?? key;
    };

    return (
        <I18nContext.Provider value={{ lang, setLang, t }}>
            {children}
        </I18nContext.Provider>
    );
}

export function useI18n() {
    const ctx = useContext(I18nContext);
    if (!ctx) throw new Error("useI18n missing I18nProvider");
    return ctx;
}
