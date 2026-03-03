import { b as createAstro, c as createComponent, a as renderTemplate, d as renderSlot, e as renderHead, f as addAttribute } from './astro/server_FNY33hvC.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                         */
import i18n from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa/index.esm.js';

const translation$2 = {
	description: "Hey! I'm Joonas Kirsipuu. 3D Geek, Worldbuilder & Designer.",
	title: "3D GEEK, WORLDBUILDER & DESIGNER",
	banner_alt: "Joonas Kirsipuu Banner",
	portfolio: "This is my art portfolio, have a look around!",
	nav: {
		digital: "DIGITAL",
		traditional: "TRADITIONAL",
		worldbuilding: "WORLD BUILDING",
		blog: "BLOG",
		about: "ABOUT",
		contact: "CONTACT"
	},
	seo: {
		digital: {
			title: "Joonas Kirsipuu | 3D Geek, Worldbuilder & Designer",
			desc: "Portfolio gallery featuring digital artworks by Joonas Kirsipuu."
		},
		traditional: {
			title: "Traditional | Joonas Kirsipuu",
			desc: "Traditional drawings, paintings, and sketches by Joonas Kirsipuu."
		},
		worldbuilding: {
			title: "Worldbuilding | Joonas Kirsipuu",
			desc: "Worldbuilding projects and concept art by Joonas Kirsipuu."
		},
		blog: {
			title: "Blog | Joonas Kirsipuu",
			desc: "Personal blog and updates from Joonas Kirsipuu."
		},
		fractals: {
			title: "Fractals | Joonas Kirsipuu",
			desc: "3D fractal worldbuilding project by Joonas Kirsipuu."
		},
		about: {
			title: "About | Joonas Kirsipuu",
			desc: "Learn more about Joonas Kirsipuu, a 3D geek, worldbuilder and designer."
		},
		genai: {
			title: "Generative AI | Joonas Kirsipuu",
			desc: "Why GenAI art will be obsolete by Joonas Kirsipuu."
		},
		games: {
			title: "Games | Joonas Kirsipuu",
			desc: "Favourite games by Joonas Kirsipuu."
		},
		films: {
			title: "Films, Series & Anime | Joonas Kirsipuu",
			desc: "Favourite films, series, and anime by Joonas Kirsipuu."
		}
	},
	about_page: {
		profile_alt: "Joonas Kirsipuu",
		thats_me: "That's me",
		intro1: "For me, art is quite a broad concept. Probably because I'm young and I can absorb it all - different materials, colours and technologies. However, I tend to lean more towards newer art methods, the most exciting of which is 3D. For me, this form of visual expression offers the most freedom and surprising results.",
		intro2: "I have a rather 'weird' approach to generating ideas - new and exciting ideas that pop into my head and stay there for quite a long time before they start to form into something more concrete. I don't draw or write anything anywhere, but I think intensely and finally decide that now is the time to get something done. This can happen spontaneously or by forcing myself. The work is usually slow, I like to let it settle for a couple of months or more and then come back again.",
		intro3: "I find ideas in different places but the main source is still the internet. That's where there's the most information and where cultures, subcultures and countercultures evolve rapidly. I'm most into visually stricking themes and architecture but I'm also interested in different cultures. Lately, I have started to look more closely at different political and geopolitical issues, the human psyche, mental disorders and how this gives rise to different subcultures and/or countercultures.",
		experience: "EXPERIENCE",
		jobs: {
			harmonia: {
				title: "Founder, CEO & 3D Designer | Harmonia INside OÜ",
				desc: "Spearhead 3D visualization projects, specializing in high-fidelity interior and exterior architectural rendering and design.",
				date: "Nov 2023 – Present"
			},
			tech3d: {
				title: "3D Designer (Part-time) | 3D Technologies R&D AS",
				desc: "Develop comprehensive 3D and 2D wayfinding map designs for large-scale facilities, including hospitals, shopping malls, and commercial buildings.",
				date: "Mar 2022 – Present"
			},
			freelance: {
				title: "Freelance 3D Artist | Polüwerk OÜ & Bluray OÜ",
				desc: "Delivered custom 3D modeling and visualization assets for diverse client requirements across multiple industries.",
				date: "Feb 2019 – Feb 2023"
			}
		},
		education: "EDUCATION",
		schools: {
			pallas: {
				title: "Bachelor's Degree | Pallas University of Applied Sciences",
				desc: "Field of study: Sculpture",
				date: "Sep 2019 – Jun 2024"
			},
			tartu: {
				title: "Vocational Secondary Education | Tartu Art School",
				desc: "Field of study: 3D Modelling & Animation",
				date: "Sep 2015 – Feb 2019"
			},
			reiniku: {
				title: "Basic Education | Tartu Mart Reiniku School",
				date: "Sep 2006 – Jun 2015"
			}
		},
		exhibitions: "EXHIBITIONS",
		exhibs: {
			pallas: {
				title: "Final Project Exhibition | Pallas Art Gallery",
				date: "Jun 2024 – Jul 2024"
			}
		}
	},
	blog_page: {
		title: "MY RANDOM RAMBLINGS",
		subtitle: "This page is for my thoughts on random topics and listing all my favourite films, series, games and anime, so you could better get to know me.",
		links: {
			genai: "Why GenAI art will be obsolete - WIP",
			films: "My favourite films, series and anime",
			games: "My favourite games"
		}
	},
	worldbuilding_page: {
		fractals_thumb_alt: "Project Fractals thumbnail",
		fractals: "PROJECT FRACTALS",
		project3088: "PROJECT 3088"
	},
	fractals_page: {
		title: "PROJECT FRACTALS",
		alt: "Project Fractals",
		desc1: "This worldbuilding project started out as a Bachelor's thesis project titled [LINK1]. I wanted to envision a future space scenario where humanity, due to climate change, has migrated to the mesosphere, living on gigantic floating sculptural objects. The capsules within these objects serve as individual living quarters, inspired by shapes from nature. In addition to the capsules, there is also a communal area where everyone gets to socialize. My design process involved extensive research, drawing inspiration from various sources including architectural marvels in Asia, science fiction literature, and film classics from the 60’s to the modern age big blockbuster spectacles.",
		desc2: "You can find the full thesis [LINK2] in Estonian, and I want to thank Merille Hommik for being an amazing mentor throughout this bachelor’s project.",
		desc3: "Updates on this project are slow due to my time being taken up by other projects and life changes.",
		animation: "Fractal Animation",
		link1_text: "\"My Future Space\"",
		link2_text: "here"
	},
	genai_page: {
		title: "Why GenAI art will be obsolete - WIP",
		wip: "WIP"
	},
	films_page: {
		title: "MY FAVOURITE FILMS, SERIES AND ANIME",
		films_title: "FILMS",
		series_title: "SERIES",
		anime_title: "ANIME",
		imdb_link: "If you're interested, you can check out my ratings for films & series <1>here</1>. It's far from complete though, I'm updating it periodically.",
		films: {
			br: {
				title: "Blade Runner - 1982",
				desc: " - The stunning world of Philip K. Dick’s Do Androids Dream of Electric Sheep? created on film in fantastic detail."
			},
			br2049: {
				title: "Blade Runner 2049 - 2017",
				desc: " - One of the best film sequels ever made. It’s distinctly Blade Runner, yet it’s different enough in its tonality and direction to stand on it's own two feet."
			},
			alien: {
				title: "Alien - 1979",
				desc: " - Holds up incredibly well in its horror elements. Spectacular set design and atmosphere."
			},
			space_odyssey: {
				title: "2001: A Space Odyssey - 1968",
				desc: " - It’s so good that it convinced a certain group of people that the Earth is flat. Enough said."
			},
			dune: {
				title: "Dune part 1 & 2 - 2021/2024",
				desc: " - The unfilmable book capsured on film by one of the best directors of our time. CINEMA!"
			},
			lotr: {
				title: "LOTR Trilogy - 2001/2002/2003",
				desc: " - The gold standard of worldbuilding, made into three films by an incredibly passionate group of people. It’s just magical."
			},
			arrival: {
				title: "Arrival - 2016",
				desc: " - A fantastic take on the sci-fi genre. Great acting and directing."
			},
			whiplash: {
				title: "Whiplash - 2014",
				desc: " - Proves that you don’t need a big budget to make an amazing film. The corrosive and convoluted relationship between a student who longs for his teacher’s praise is really chilling and hits home."
			},
			joker: {
				title: "Joker - 2019",
				desc: " - A very different take on a classic Batman villain. In a time of mental health crisis—either because people are increasingly lonely or because some think it’s ‘cool’—Joker’s relevance is only bound to increase."
			},
			y1917: {
				title: "1917 - 2019",
				desc: " - Spectacular cinematography disguised as a war film that is just brutal."
			},
			pirates: {
				title: "Pirates of the Caribbean: The Curse of the Black Pearl - 2003",
				desc: " - Pirates used to be cartoony and something you’d scare kids with, but not after this film. It’s an absolute gem that still holds up incredibly well visually, and Johnny Depp is just brilliant."
			},
			oppenheimer: {
				title: "Oppenheimer - 2023",
				desc: " - Written like an action flick, but it’s just some guys in a room talking and a big explosion at the halfway mark. And yet it managed to keep me on the edge of my seat for the full runtime. It’s also got some interesting back-and-forth between the black-and-white and color shots—one from Strauss’s POV and the other from Oppenheimer’s, respectively. I wish I’d had the chance to see it in IMAX."
			}
		},
		series: {
			bb: {
				title: "Breaking Bad - 2008 - 2013",
				desc: " - A couple of filler episodes a side, it's ability to deliver 8+/10 so consistently over such a long runtime is impressive."
			},
			got: {
				title: "Game of Thrones - 2011 - 2019",
				desc: " - As long as you don't watch the last two seasons, it's solid television with complex characters and interesting plotlines."
			},
			andor: {
				title: "Andor - 2022- 2025",
				desc: " - Surprisingly deep narrative for Star Wars. It's also pretty relevant in today's world."
			},
			mr_robot: {
				title: "Mr. Robot - 2015 - 2019",
				desc: " - My personal favourite series. Every twist and turn is carefully thought out. It’s even better on a rewatch, especially Season 1."
			},
			chernobyl: {
				title: "Chernobyl - 2019",
				desc: " - One of the best miniseries ever made. Captures the human condition of living in the Soviet Union quite well."
			},
			house: {
				title: "House M.D. - 2004 - 2012",
				desc: " - A medical drama made fun by a flawed, hilarious, and witty doctor."
			},
			aib: {
				title: "Alice in Borderland - 2020 - 2025",
				desc: " - Stellar first two seasons; the third falls flat. Overall, very engaging, fun, and mindfucky."
			},
			clarkson: {
				title: "Clarkson's Farm - 2021 - ?",
				desc: " - A guy who drove cars for a living now drives tractors for a living. Clarkson’s Farm is hilarious, emotional, educational, and important."
			}
		},
		anime: {
			initial_d: {
				title: "Initial D - 1998 - 2014",
				desc: " - The anime that sparked my interest in cars. An absolute classic. I daydream about making my own animated car drift battle. Hopefully, someday I can realize that dream."
			},
			edgerunners: {
				title: "Cyberpunk: Edgerunners - 2022 - ?",
				desc: " - If you like Cyberpunk 2077, you will love this anime. This stayed with me for a long time."
			}
		}
	},
	games_page: {
		title: "LIST OF MY FAVOURITE GAMES",
		singleplayer_title: "SINGLEPLAYER",
		multiplayer_title: "MULTIPLAYER",
		singleplayer: {
			cp2077: {
				title: "Cyberpunk 2077 - 2020/2023",
				desc: " - One of the coolest video game worlds ever. Everything is rooted in reality, and everything has a purpose. Combat is incredibly fun and varied. A kickass soundtrack. The narrative uses the worldbuilding exceptionally well, and it’s not just a story about punks fighting the system or a gun-for-hire climbing the criminal underworld ladder. Cyberpunk 2077’s main quest is far more philosophical, drawing heavily from existentialism and posthumanism. At its core, it’s a story about identity, weaving that theme through every part of the game. The length of the main quest is also pretty spot on. It’s sharp and to the point — all killer, no filler. The quests have some decision-making that ripples outward, though less so than The Witcher 3, but the production value is also higher. The characters are excellent. - 9/10"
			},
			witcher3: {
				title: "The Witcher 3: Wild Hunt - 2015/2016",
				desc: " - This game showed everyone (and Bethesda) that vast open-world games can have an abundance of complex stories and well-written characters. The combat is by far the weakest link, but it’s by no means bad, and eventually becomes fun. Both main and side quests offer a decent amount of decision-making, with consequences that appear later down the line. Gwent was so good that CDPR ended up making a separate game just for it. The soundtrack is just lovely. - 8/10"
			},
			mario_galaxy: {
				title: "Super Mario Galaxy 1 & 2- 2007/2010",
				desc: " - WIP"
			},
			ori: {
				title: "Ori and the Blind Forest, Ori and the Will of the Wisps - 2015/2020",
				desc: " - WIP"
			},
			dead_space: {
				title: "Dead Space Remake - 2023",
				desc: " - WIP"
			},
			minecraft: {
				title: "Minecraft - 2009",
				desc: " - WIP"
			}
		},
		multiplayer: {
			lol: {
				title: "League of Legends - 2009",
				desc: " - WIP"
			},
			overwatch: {
				title: "Overwatch - 2016",
				desc: " - WIP"
			},
			warframe: {
				title: "Warframe - 2013",
				desc: " - WIP"
			}
		}
	},
	footer: {
		title: "JOONAS KIRSIPUU ART GALLERY",
		copyright: "© {{year}} All rights reserved."
	},
	images: {
		cerebrum: {
			text: "Cerebrum",
			subtext: "MRT Scans, Blender, Octane Render, Affinity [2026]",
			alt: "3D render titled Cerebrum by Joonas Kirsipuu"
		},
		fractals001: {
			text: "Fractals 001",
			subtext: "Mandelbulb 3D, Photoshop [2024]",
			alt: "3D Fractal art composition titled Fractals 001 by Joonas Kirsipuu"
		},
		capsuleNightview: {
			text: "Capsule Nightview",
			subtext: "Blender, Photoshop [2024]",
			alt: "Night view render of a futuristic capsule interior by Joonas Kirsipuu"
		},
		wireframe001: {
			text: "Wireframe 001",
			subtext: "Blender, Photoshop [2024]",
			alt: "3D wireframe render of an architectural structure by Joonas Kirsipuu"
		},
		bathroom001: {
			text: "Bathroom 001",
			subtext: "Blender, Photoshop [2024]",
			alt: "3D visualization of a futuristic bathroom interior by Joonas Kirsipuu"
		},
		commonRoom: {
			text: "Common room",
			subtext: "Blender, Photoshop [2024]",
			alt: "3D visualization of a common room area by Joonas Kirsipuu"
		},
		capsuleView001: {
			text: "Capsule view 001",
			subtext: "Blender, Photoshop [2024]",
			alt: "Wide angle 3D view of a capsule interior by Joonas Kirsipuu"
		},
		yunoChan: {
			text: "ゆのちゃん",
			subtext: "Blender, Substance Painter/Designer, Character Creator 4, Marvelous Designer [2023]",
			alt: "3D character model of Yuno-chan by Joonas Kirsipuu"
		},
		porsche: {
			text: "Porsche 911 RWB",
			subtext: "Blender [2018]",
			alt: "3D render of a Porsche 911 RWB by Joonas Kirsipuu"
		}
	},
	traditional: {
		thinkingOfYou: {
			text: "Thinking of you",
			subtext: "Pencils on paper [2022]",
			alt: "Pencil drawing portrait titled Thinking of you by Joonas Kirsipuu"
		},
		shy: {
			text: "Shy",
			subtext: "Pencils on paper [2022]",
			alt: "Pencil drawing portrait titled Shy by Joonas Kirsipuu"
		},
		closeYourEyes: {
			text: "Close your eyes",
			subtext: "Pencils on paper [2022]",
			alt: "Pencil drawing portrait titled Close your eyes by Joonas Kirsipuu"
		},
		girl001: {
			text: "Girl 001",
			subtext: "Pencils on paper [2022]",
			alt: "Pencil drawing of a girl by Joonas Kirsipuu"
		},
		theOpposite: {
			text: "The opposite",
			subtext: "Acrylic on Finnish cardboard [2021]",
			alt: "Acrylic painting on cardboard titled The opposite by Joonas Kirsipuu"
		},
		abstract001: {
			text: "Abstract 001",
			subtext: "Acrylic on Finnish cardboard [2021]",
			alt: "Abstract acrylic painting on cardboard by Joonas Kirsipuu"
		},
		act001: {
			text: "Act 001",
			subtext: "Acrylic on Finnish cardboard [2021]",
			alt: "Acrylic painting of a figure titled Act 001 by Joonas Kirsipuu"
		},
		linework: {
			text: "Linework",
			subtext: "Pencils on paper [2017]",
			alt: "Pencil linework drawing by Joonas Kirsipuu"
		},
		sittingWithColours: {
			text: "Sitting with colours",
			subtext: "Gouache on cardboard [2017]",
			alt: "Gouache painting titled Sitting with colours by Joonas Kirsipuu"
		},
		watercolourWithRainwater: {
			text: "Watercolour with rainwater",
			subtext: "Watercolour on paper [2017]",
			alt: "Watercolour painting created using rainwater by Joonas Kirsipuu"
		},
		guitarGlove: {
			text: "Guitar Glove",
			subtext: "Gouache on cardboard [2016]",
			alt: "Gouache painting titled Guitar Glove by Joonas Kirsipuu"
		},
		straightenYourTie: {
			text: "Straighten your tie",
			subtext: "Gouache on cardboard [2016]",
			alt: "Gouache painting titled Straighten your tie by Joonas Kirsipuu"
		}
	},
	fractals: {
		hallway: {
			text: "Hallway",
			subtext: "Blender, Photoshop [2024]",
			alt: "3D render of a hallway by Joonas Kirsipuu"
		},
		capsuleView002: {
			text: "Capsule view 002",
			subtext: "Blender, Photoshop [2024]",
			alt: "3D render of a capsule interior by Joonas Kirsipuu"
		},
		capsuleView003: {
			text: "Capsule View 003",
			subtext: "Blender, Photoshop [2024]",
			alt: "Detailed view of the capsule living space by Joonas Kirsipuu"
		},
		capsuleView004: {
			text: "Capsule View 004",
			subtext: "Blender, Photoshop [2024]",
			alt: "Perspective view of the capsule interior by Joonas Kirsipuu"
		},
		capsuleView005: {
			text: "Capsule View 005",
			subtext: "Blender, Photoshop [2024]",
			alt: "View of the capsule interior showing seating by Joonas Kirsipuu"
		},
		fractals002: {
			text: "Fractals 002",
			subtext: "Mandelbulb 3D, Photoshop [2024]",
			alt: "3D Fractal art composition titled Fractals 002 by Joonas Kirsipuu"
		},
		fractals003: {
			text: "Fractals 003",
			subtext: "Mandelbulb 3D, Photoshop [2024]",
			alt: "Exterior view of the capsule structure by Joonas Kirsipuu"
		},
		commonRoom: {
			text: "Common Room",
			subtext: "Blender, Photoshop [2024]",
			alt: "3D visualization of a common room area by Joonas Kirsipuu"
		},
		bathroom002: {
			text: "Bathroom 002",
			subtext: "Blender, Photoshop [2024]",
			alt: "3D visualization of a futuristic bathroom interior by Joonas Kirsipuu"
		},
		wireframe002: {
			text: "Wireframe 002",
			subtext: "Blender, Photoshop [2024]",
			alt: "3D wireframe render of an architectural structure by Joonas Kirsipuu"
		},
		animation: {
			text: "Fractals Animation",
			subtext: "YouTube",
			alt: "Fractals Animation by Joonas Kirsipuu"
		}
	},
	contact_modal: {
		title: "Contact Me",
		default_mail: "Default Mail App",
		gmail: "Gmail",
		outlook: "Outlook",
		yahoo: "Yahoo",
		close: "Close"
	}
};
const en = {
	translation: translation$2
};

const translation$1 = {
	description: "Ciao! Sono Joonas Kirsipuu. Appassionato di 3D, Costruttore di Mondi e Designer.",
	title: "APPASSIONATO DI 3D, COSTRUTTORE DI MONDI E DESIGNER",
	banner_alt: "Banner di Joonas Kirsipuu",
	portfolio: "Questo è il mio portfolio artistico, dai un'occhiata!",
	nav: {
		digital: "DIGITALE",
		traditional: "TRADIZIONALE",
		worldbuilding: "COSTRUZIONE DEL MONDO",
		blog: "BLOG",
		about: "CHI SONO",
		contact: "CONTATTI"
	},
	seo: {
		digital: {
			title: "Joonas Kirsipuu | Appassionato di 3D, Costruttore di Mondi e Designer",
			desc: "Galleria portfolio con opere d'arte digitale di Joonas Kirsipuu."
		},
		traditional: {
			title: "Tradizionale | Joonas Kirsipuu",
			desc: "Disegni, dipinti e schizzi tradizionali di Joonas Kirsipuu."
		},
		worldbuilding: {
			title: "Worldbuilding | Joonas Kirsipuu",
			desc: "Progetti di worldbuilding e concept art di Joonas Kirsipuu."
		},
		blog: {
			title: "Blog | Joonas Kirsipuu",
			desc: "Blog personale e aggiornamenti di Joonas Kirsipuu."
		},
		fractals: {
			title: "Frattali | Joonas Kirsipuu",
			desc: "Progetto di worldbuilding con frattali 3D di Joonas Kirsipuu."
		},
		about: {
			title: "Chi Sono | Joonas Kirsipuu",
			desc: "Scopri di più su Joonas Kirsipuu, appassionato di 3D, worldbuilder e designer."
		},
		genai: {
			title: "IA Generativa | Joonas Kirsipuu",
			desc: "Perché l'arte generativa sarà obsoleta secondo Joonas Kirsipuu."
		},
		games: {
			title: "Giochi | Joonas Kirsipuu",
			desc: "Giochi preferiti di Joonas Kirsipuu."
		},
		films: {
			title: "Film, Serie TV e Anime | Joonas Kirsipuu",
			desc: "Film, serie TV e anime preferiti di Joonas Kirsipuu."
		}
	},
	about_page: {
		profile_alt: "Joonas Kirsipuu",
		thats_me: "Sono io",
		intro1: "Per me, l'arte è un concetto piuttosto ampio. Probabilmente perché sono giovane e posso assorbire tutto: materiali, colori e tecnologie diverse. Tuttavia, tendo a propendere per i metodi artistici più nuovi, il più eccitante dei quali è il 3D. Per me, questa forma di espressione visiva offre la massima libertà e risultati sorprendenti.",
		intro2: "Ho un approccio piuttosto 'strano' alla generazione di idee: idee nuove ed eccitanti mi vengono in mente e rimangono lì per un bel po' di tempo prima di iniziare a formare qualcosa di più concreto. Non disegno né scrivo nulla da nessuna parte, ma penso intensamente e alla fine decido che è il momento di fare qualcosa. Questo può accadere spontaneamente o forzandomi. Il lavoro è solitamente lento, mi piace lasciarlo riposare per un paio di mesi o più e poi tornarci.",
		intro3: "Trovo idee in luoghi diversi, ma la fonte principale è ancora internet. È lì che c'è la maggior parte delle informazioni e dove culture, sottoculture e controculture si evolvono rapidamente. Mi interessano soprattutto i temi visivamente sorprendenti e l'architettura, ma sono anche interessato a culture diverse. Ultimamente, ho iniziato a guardare più da vicino diverse questioni politiche e geopolitiche, la psiche umana, i disturbi mentali e come questo dia origine a diverse sottoculture e/o controculture.",
		experience: "ESPERIENZA",
		jobs: {
			harmonia: {
				title: "Fondatore, CEO e Designer 3D | Harmonia INside OÜ",
				desc: "Guido progetti di visualizzazione 3D, specializzandomi in rendering e design architettonico di interni ed esterni ad alta fedeltà.",
				date: "Nov 2023 – Presente"
			},
			tech3d: {
				title: "Designer 3D (a tempo parziale) | 3D Technologies R&D AS",
				desc: "Sviluppo progetti completi di mappe di orientamento 3D e 2D per strutture su larga scala, inclusi ospedali, centri commerciali ed edifici commerciali.",
				date: "Mar 2022 – Presente"
			},
			freelance: {
				title: "Artista 3D Freelance | Polüwerk OÜ & Bluray OÜ",
				desc: "Fornito risorse di modellazione e visualizzazione 3D personalizzate per diverse esigenze dei clienti in molteplici settori.",
				date: "Feb 2019 – Feb 2023"
			}
		},
		education: "ISTRUZIONE",
		schools: {
			pallas: {
				title: "Laurea Triennale | Pallas University of Applied Sciences",
				desc: "Campo di studio: Scultura",
				date: "Set 2019 – Giu 2024"
			},
			tartu: {
				title: "Istruzione Secondaria Professionale | Tartu Art School",
				desc: "Campo di studio: Modellazione 3D e Animazione",
				date: "Set 2015 – Feb 2019"
			},
			reiniku: {
				title: "Istruzione di Base | Tartu Mart Reiniku School",
				date: "Set 2006 – Giu 2015"
			}
		},
		exhibitions: "MOSTRE",
		exhibs: {
			pallas: {
				title: "Mostra del Progetto Finale | Pallas Art Gallery",
				date: "Giu 2024 – Lug 2024"
			}
		}
	},
	blog_page: {
		title: "I MIEI PENSIERI CASUALI",
		subtitle: "Questa pagina è per i miei pensieri su argomenti casuali ed elenca tutti i miei film, serie, giochi e anime preferiti, così potrai conoscermi meglio.",
		links: {
			genai: "Perché l'arte GenAI diventerà obsoleta - WIP",
			films: "I miei film, serie e anime preferiti",
			games: "I miei giochi preferiti"
		}
	},
	worldbuilding_page: {
		fractals_thumb_alt: "Miniatura Progetto Frattali",
		fractals: "PROGETTO FRATTALI",
		project3088: "PROGETTO 3088"
	},
	fractals_page: {
		title: "PROGETTO FRATTALI",
		alt: "Progetto Frattali",
		desc1: "Questo progetto di worldbuilding è iniziato come tesi di laurea intitolata [LINK1]. Ho voluto immaginare uno scenario spaziale futuro in cui l'umanità, a causa del cambiamento climatico, è migrata nella mesosfera, vivendo su giganteschi oggetti scultorei fluttuanti. Le capsule all'interno di questi oggetti fungono da alloggi individuali, ispirati alle forme della natura. Oltre alle capsule, c'è anche un'area comune dove tutti possono socializzare. Il mio processo di progettazione ha comportato un'ampia ricerca, traendo ispirazione da varie fonti tra cui meraviglie architettoniche in Asia, letteratura di fantascienza e classici del cinema dagli anni '60 ai grandi blockbuster dell'era moderna.",
		desc2: "Puoi trovare la tesi completa [LINK2] in estone, e voglio ringraziare Merille Hommik per essere stata una mentore straordinaria durante questo progetto di laurea.",
		desc3: "Gli aggiornamenti su questo progetto sono lenti a causa del mio tempo occupato da altri progetti e cambiamenti di vita.",
		animation: "Animazione Frattale",
		link1_text: "\"Il Mio Spazio Futuro\"",
		link2_text: "qui"
	},
	genai_page: {
		title: "Perché l'arte GenAI diventerà obsoleta - WIP",
		wip: "WIP"
	},
	films_page: {
		title: "I MIEI FILM, SERIE E ANIME PREFERITI",
		films_title: "FILM",
		series_title: "SERIE",
		anime_title: "ANIME",
		imdb_link: "Se sei interessato, puoi controllare le mie valutazioni per film e serie <1>qui</1>. È lontano dall'essere completo, lo aggiorno periodicamente.",
		films: {
			br: {
				title: "Blade Runner - 1982",
				desc: " - Lo straordinario mondo di 'Ma gli androidi sognano pecore elettriche?' di Philip K. Dick creato su pellicola con dettagli fantastici."
			},
			br2049: {
				title: "Blade Runner 2049 - 2017",
				desc: " - Uno dei migliori sequel cinematografici mai realizzati. È distintamente Blade Runner, ma è abbastanza diverso nella sua tonalità e regia da reggersi in piedi da solo."
			},
			alien: {
				title: "Alien - 1979",
				desc: " - Mantiene incredibilmente bene i suoi elementi horror. Scenografia e atmosfera spettacolari."
			},
			space_odyssey: {
				title: "2001: Odissea nello spazio - 1968",
				desc: " - È così bello che ha convinto un certo gruppo di persone che la Terra è piatta. Non c'è altro da aggiungere."
			},
			dune: {
				title: "Dune parte 1 & 2 - 2021/2024",
				desc: " - Il libro 'infilmabile' catturato su pellicola da uno dei migliori registi del nostro tempo. CINEMA!"
			},
			lotr: {
				title: "Trilogia de Il Signore degli Anelli - 2001/2002/2003",
				desc: " - Lo standard d'oro del worldbuilding, trasformato in tre film da un gruppo di persone incredibilmente appassionate. È semplicemente magico."
			},
			arrival: {
				title: "Arrival - 2016",
				desc: " - Un'interpretazione fantastica del genere sci-fi. Ottima recitazione e regia."
			},
			whiplash: {
				title: "Whiplash - 2014",
				desc: " - Dimostra che non serve un grande budget per fare un film fantastico. La relazione corrosiva e contorta tra uno studente che desidera l'elogio del suo insegnante è davvero agghiacciante e colpisce nel segno."
			},
			joker: {
				title: "Joker - 2019",
				desc: " - Un'interpretazione molto diversa di un classico cattivo di Batman. In un'epoca di crisi della salute mentale - sia perché le persone sono sempre più sole, sia perché alcuni pensano che sia 'cool' - la rilevanza di Joker è destinata solo ad aumentare."
			},
			y1917: {
				title: "1917 - 2019",
				desc: " - Cinematografia spettacolare mascherata da film di guerra che è semplicemente brutale."
			},
			pirates: {
				title: "Pirati dei Caraibi: La maledizione della prima luna - 2003",
				desc: " - I pirati erano soliti essere personaggi da cartone animato e qualcosa con cui spaventare i bambini, ma non dopo questo film. È un gioiello assoluto che regge ancora incredibilmente bene visivamente, e Johnny Depp è semplicemente brillante."
			},
			oppenheimer: {
				title: "Oppenheimer - 2023",
				desc: " - Scritto come un film d'azione, ma sono solo alcuni ragazzi in una stanza che parlano e una grande esplosione a metà. Eppure è riuscito a tenermi con il fiato sospeso per tutta la durata. Ha anche un interessante andirivieni tra le riprese in bianco e nero e a colori - una dal punto di vista di Strauss e l'altra da quello di Oppenheimer, rispettivamente. Vorrei aver avuto la possibilità di vederlo in IMAX."
			}
		},
		series: {
			bb: {
				title: "Breaking Bad - 2008 - 2013",
				desc: " - A parte un paio di episodi riempitivi, la sua capacità di fornire costantemente un voto di 8+/10 per una durata così lunga è impressionante."
			},
			got: {
				title: "Game of Thrones - 2011 - 2019",
				desc: " - Finché non guardi le ultime due stagioni, è una televisione solida con personaggi complessi e trame interessanti."
			},
			andor: {
				title: "Andor - 2022- 2025",
				desc: " - Narrativa sorprendentemente profonda per Star Wars. È anche piuttosto rilevante nel mondo di oggi."
			},
			mr_robot: {
				title: "Mr. Robot - 2015 - 2019",
				desc: " - La mia serie preferita in assoluto. Ogni colpo di scena è attentamente studiato. È ancora meglio a una seconda visione, specialmente la prima stagione."
			},
			chernobyl: {
				title: "Chernobyl - 2019",
				desc: " - Una delle migliori miniserie mai realizzate. Cattura abbastanza bene la condizione umana di vivere nell'Unione Sovietica."
			},
			house: {
				title: "House M.D. - 2004 - 2012",
				desc: " - Un dramma medico reso divertente da un dottore imperfetto, esilarante e arguto."
			},
			aib: {
				title: "Alice in Borderland - 2020 - 2025",
				desc: " - Prime due stagioni stellari; la terza è deludente. Nel complesso, molto coinvolgente, divertente e cervellotico."
			},
			clarkson: {
				title: "Clarkson's Farm - 2021 - ?",
				desc: " - Un tizio che guidava auto per vivere ora guida trattori per vivere. Clarkson's Farm è esilarante, emozionante, educativo e importante."
			}
		},
		anime: {
			initial_d: {
				title: "Initial D - 1998 - 2014",
				desc: " - L'anime che ha acceso il mio interesse per le auto. Un classico assoluto. Sogno ad occhi aperti di creare la mia battaglia di derapate animate. Spero un giorno di poter realizzare quel sogno."
			},
			edgerunners: {
				title: "Cyberpunk: Edgerunners - 2022 - ?",
				desc: " - Se ti piace Cyberpunk 2077, adorerai questo anime. Mi è rimasto impresso per molto tempo."
			}
		}
	},
	games_page: {
		title: "ELENCO DEI MIEI GIOCHI PREFERITI",
		singleplayer_title: "SINGLEPLAYER",
		multiplayer_title: "MULTIPLAYER",
		singleplayer: {
			cp2077: {
				title: "Cyberpunk 2077 - 2020/2023",
				desc: " - Uno dei mondi di videogiochi più belli di sempre. Tutto è radicato nella realtà e tutto ha uno scopo. Il combattimento è incredibilmente divertente e vario. Una colonna sonora fantastica. La narrazione utilizza eccezionalmente bene il worldbuilding, e non è solo una storia di punk che combattono il sistema o di un mercenario che scala la malavita. La missione principale di Cyberpunk 2077 è molto più filosofica, attingendo pesantemente dall'esistenzialismo e dal postumanesimo. Al suo centro, è una storia sull'identità, che intreccia quel tema in ogni parte del gioco. Anche la lunghezza della missione principale è perfetta. È nitida e diretta - tutto essenziale, niente riempitivi. Le missioni hanno alcune decisioni che si ripercuotono, anche se meno di The Witcher 3, ma anche il valore della produzione è più alto. I personaggi sono eccellenti. - 9/10"
			},
			witcher3: {
				title: "The Witcher 3: Wild Hunt - 2015/2016",
				desc: " - Questo gioco ha mostrato a tutti (e a Bethesda) che i vasti giochi open-world possono avere un'abbondanza di storie complesse e personaggi ben scritti. Il combattimento è di gran lunga l'anello più debole, ma non è affatto male, e alla fine diventa divertente. Sia le missioni principali che quelle secondarie offrono una discreta quantità di decisioni, con conseguenze che appaiono più avanti. Gwent era così bello che CDPR ha finito per creare un gioco separato solo per quello. La colonna sonora è semplicemente adorabile. - 8/10"
			},
			mario_galaxy: {
				title: "Super Mario Galaxy 1 & 2- 2007/2010",
				desc: " - WIP"
			},
			ori: {
				title: "Ori and the Blind Forest, Ori and the Will of the Wisps - 2015/2020",
				desc: " - WIP"
			},
			dead_space: {
				title: "Dead Space Remake - 2023",
				desc: " - WIP"
			},
			minecraft: {
				title: "Minecraft - 2009",
				desc: " - WIP"
			}
		},
		multiplayer: {
			lol: {
				title: "League of Legends - 2009",
				desc: " - WIP"
			},
			overwatch: {
				title: "Overwatch - 2016",
				desc: " - WIP"
			},
			warframe: {
				title: "Warframe - 2013",
				desc: " - WIP"
			}
		}
	},
	footer: {
		title: "GALLERIA D'ARTE DI JOONAS KIRSIPUU",
		copyright: "© {{year}} Tutti i diritti riservati."
	},
	images: {
		cerebrum: {
			text: "Cerebrum",
			subtext: "Scansioni MRT, Blender, Octane Render, Affinity [2026]",
			alt: "Render 3D intitolato Cerebrum di Joonas Kirsipuu"
		},
		fractals001: {
			text: "Frattali 001",
			subtext: "Mandelbulb 3D, Photoshop [2024]",
			alt: "Composizione artistica frattale 3D intitolata Frattali 001 di Joonas Kirsipuu"
		},
		capsuleNightview: {
			text: "Vista Notturna Capsula",
			subtext: "Blender, Photoshop [2024]",
			alt: "Rendering della vista notturna di un interno di capsula futuristica di Joonas Kirsipuu"
		},
		wireframe001: {
			text: "Modello Wireframe 001",
			subtext: "Blender, Photoshop [2024]",
			alt: "Rendering wireframe 3D di una struttura architettonica di Joonas Kirsipuu"
		},
		bathroom001: {
			text: "Bagno 001",
			subtext: "Blender, Photoshop [2024]",
			alt: "Visualizzazione 3D di un interno di bagno futuristico di Joonas Kirsipuu"
		},
		commonRoom: {
			text: "Sala comune",
			subtext: "Blender, Photoshop [2024]",
			alt: "Visualizzazione 3D di un'area comune di Joonas Kirsipuu"
		},
		capsuleView001: {
			text: "Vista capsula 001",
			subtext: "Blender, Photoshop [2024]",
			alt: "Vista grandangolare 3D dell'interno di una capsula di Joonas Kirsipuu"
		},
		yunoChan: {
			text: "ゆのちゃん",
			subtext: "Blender, Substance Painter/Designer, Character Creator 4, Marvelous Designer [2023]",
			alt: "Modello di personaggio 3D di Yuno-chan di Joonas Kirsipuu"
		},
		porsche: {
			text: "Porsche 911 RWB",
			subtext: "Blender [2018]",
			alt: "Rendering 3D di una Porsche 911 RWB di Joonas Kirsipuu"
		}
	},
	traditional: {
		thinkingOfYou: {
			text: "Pensando a te",
			subtext: "Matite su carta [2022]",
			alt: "Ritratto a matita intitolato Pensando a te di Joonas Kirsipuu"
		},
		shy: {
			text: "Timida",
			subtext: "Matite su carta [2022]",
			alt: "Ritratto a matita intitolato Timida di Joonas Kirsipuu"
		},
		closeYourEyes: {
			text: "Chiudi gli occhi",
			subtext: "Matite su carta [2022]",
			alt: "Ritratto a matita intitolato Chiudi gli occhi di Joonas Kirsipuu"
		},
		girl001: {
			text: "Ragazza 001",
			subtext: "Matite su carta [2022]",
			alt: "Disegno a matita di una ragazza di Joonas Kirsipuu"
		},
		theOpposite: {
			text: "L'opposto",
			subtext: "Acrilico su cartone finlandese [2021]",
			alt: "Dipinto acrilico su cartone intitolato L'opposto di Joonas Kirsipuu"
		},
		abstract001: {
			text: "Astratto 001",
			subtext: "Acrilico su cartone finlandese [2021]",
			alt: "Dipinto acrilico astratto su cartone di Joonas Kirsipuu"
		},
		act001: {
			text: "Atto 001",
			subtext: "Acrilico su cartone finlandese [2021]",
			alt: "Dipinto acrilico di una figura intitolato Atto 001 di Joonas Kirsipuu"
		},
		linework: {
			text: "Disegno al tratto",
			subtext: "Matite su carta [2017]",
			alt: "Disegno linework a matita di Joonas Kirsipuu"
		},
		sittingWithColours: {
			text: "Seduto con i colori",
			subtext: "Guazzo su cartone [2017]",
			alt: "Dipinto a guazzo intitolato Seduto con i colori di Joonas Kirsipuu"
		},
		watercolourWithRainwater: {
			text: "Acquerello con acqua piovana",
			subtext: "Acquerello su carta [2017]",
			alt: "Dipinto ad acquerello creato usando acqua piovana di Joonas Kirsipuu"
		},
		guitarGlove: {
			text: "Guanto Chitarra",
			subtext: "Guazzo su cartone [2016]",
			alt: "Dipinto a guazzo intitolato Guanto Chitarra di Joonas Kirsipuu"
		},
		straightenYourTie: {
			text: "Raddrizza la cravatta",
			subtext: "Guazzo su cartone [2016]",
			alt: "Dipinto a guazzo intitolato Raddrizza la cravatta di Joonas Kirsipuu"
		}
	},
	fractals: {
		hallway: {
			text: "Corridoio",
			subtext: "Blender, Photoshop [2024]",
			alt: "Render 3D di un corridoio di Joonas Kirsipuu"
		},
		capsuleView002: {
			text: "Vista capsula 002",
			subtext: "Blender, Photoshop [2024]",
			alt: "Render 3D di un interno di capsula di Joonas Kirsipuu"
		},
		capsuleView003: {
			text: "Vista capsula 003",
			subtext: "Blender, Photoshop [2024]",
			alt: "Vista dettagliata dello spazio abitativo della capsula di Joonas Kirsipuu"
		},
		capsuleView004: {
			text: "Vista capsula 004",
			subtext: "Blender, Photoshop [2024]",
			alt: "Vista prospettica dell'interno della capsula di Joonas Kirsipuu"
		},
		capsuleView005: {
			text: "Vista capsula 005",
			subtext: "Blender, Photoshop [2024]",
			alt: "Vista dell'interno della capsula che mostra i posti a sedere di Joonas Kirsipuu"
		},
		fractals002: {
			text: "Frattali 002",
			subtext: "Mandelbulb 3D, Photoshop [2024]",
			alt: "Composizione artistica frattale 3D intitolata Frattali 002 di Joonas Kirsipuu"
		},
		fractals003: {
			text: "Frattali 003",
			subtext: "Mandelbulb 3D, Photoshop [2024]",
			alt: "Vista esterna della struttura della capsula di Joonas Kirsipuu"
		},
		commonRoom: {
			text: "Sala comune",
			subtext: "Blender, Photoshop [2024]",
			alt: "Visualizzazione 3D di un'area comune di Joonas Kirsipuu"
		},
		bathroom002: {
			text: "Bagno 002",
			subtext: "Blender, Photoshop [2024]",
			alt: "Visualizzazione 3D di un interno di bagno futuristico di Joonas Kirsipuu"
		},
		wireframe002: {
			text: "Wireframe 002",
			subtext: "Blender, Photoshop [2024]",
			alt: "Rendering wireframe 3D di una struttura architettonica di Joonas Kirsipuu"
		},
		animation: {
			text: "Animazione Frattali",
			subtext: "YouTube",
			alt: "Animazione Frattali di Joonas Kirsipuu"
		}
	},
	contact_modal: {
		title: "Contattami",
		default_mail: "App Mail Predefinita",
		gmail: "Gmail",
		outlook: "Outlook",
		yahoo: "Yahoo",
		close: "Chiudi"
	}
};
const it = {
	translation: translation$1
};

const translation = {
	description: "こんにちは！ヨーナス・キルシプーです。3Dオタク、ワールドビルダー、デザイナーです。",
	title: "3Dオタク、ワールドビルダー、デザイナー",
	banner_alt: "ヨーナス・キルシプーのバナー",
	portfolio: "これは私のアートポートフォリオです。ぜひご覧ください！",
	nav: {
		digital: "デジタル",
		traditional: "アナログ",
		worldbuilding: "世界構築",
		blog: "ブログ",
		about: "プロフィール",
		contact: "お問い合わせ"
	},
	seo: {
		digital: {
			title: "ヨーナス・キルシプー | 3Dオタク、ワールドビルダー、デザイナー",
			desc: "ヨーナス・キルシプーによるデジタルアート作品のポートフォリオギャラリー。"
		},
		traditional: {
			title: "アナログ | ヨーナス・キルシプー",
			desc: "ヨーナス・キルシプーによるアナログのドローイング、絵画、スケッチ。"
		},
		worldbuilding: {
			title: "世界構築 | ヨーナス・キルシプー",
			desc: "ヨーナス・キルシプーによる世界構築プロジェクトとコンセプトアート。"
		},
		blog: {
			title: "ブログ | ヨーナス・キルシプー",
			desc: "ヨーナス・キルシプーの個人ブログと最新情報。"
		},
		fractals: {
			title: "フラクタル | ヨーナス・キルシプー",
			desc: "ヨーナス・キルシプーによる3Dフラクタル世界構築プロジェクト。"
		},
		about: {
			title: "プロフィール | ヨーナス・キルシプー",
			desc: "3Dオタク、ワールドビルダー、デザイナーであるヨーナス・キルシプーについて。"
		},
		genai: {
			title: "生成AI | ヨーナス・キルシプー",
			desc: "なぜ生成AIアートが廃れるのか、ヨーナス・キルシプーによる考察。"
		},
		games: {
			title: "ゲーム | ヨーナス・キルシプー",
			desc: "ヨーナス・キルシプーのお気に入りのゲーム。"
		},
		films: {
			title: "映画・ドラマ・アニメ | ヨーナス・キルシプー",
			desc: "ヨーナス・キルシプーのお気に入りの映画、ドラマ、アニメ。"
		}
	},
	about_page: {
		profile_alt: "ヨーナス・キルシプー",
		thats_me: "私について",
		intro1: "私にとって、アートは非常に広い概念です。おそらく私が若く、さまざまな素材、色、技術をすべて吸収できるからでしょう。しかし、私は新しいアート手法に傾倒しており、その中で最もエキサイティングなのが3Dです。私にとって、この視覚表現の形式は、最も自由で驚くべき結果をもたらします。",
		intro2: "私はアイデアを生み出すために少し「奇妙な」アプローチをとっています。新しくてエキサイティングなアイデアが頭に浮かび、それがより具体的な形になり始めるまで、かなり長い間そこにとどまります。私はどこにも何も描いたり書いたりしませんが、激しく考え、最終的に今こそ何かを成し遂げるときだと決心します。これは自然に起こることもあれば、自分自身を強制することもあります。作業は通常遅く、数ヶ月以上寝かせてからまた戻ってくるのが好きです。",
		intro3: "私はさまざまな場所でアイデアを見つけますが、主な情報源は依然としてインターネットです。そこには最も多くの情報があり、文化、サブカルチャー、カウンターカルチャーが急速に進化しています。私は視覚的に印象的なテーマや建築に最も興味がありますが、異文化にも興味があります。最近は、さまざまな政治的および地政学的問題、人間の精神、精神障害、そしてこれらがどのようにしてさまざまなサブカルチャーやカウンターカルチャーを生み出すかについて、より詳しく調べるようになりました。",
		experience: "経験",
		jobs: {
			harmonia: {
				title: "創設者、CEO & 3Dデザイナー | Harmonia INside OÜ",
				desc: "高精度のインテリアおよびエクステリアの建築レンダリングとデザインを専門とする3Dビジュアライゼーションプロジェクトを主導。",
				date: "2023年11月 – 現在"
			},
			tech3d: {
				title: "3Dデザイナー (パートタイム) | 3D Technologies R&D AS",
				desc: "病院、ショッピングモール、商業ビルなど、大規模施設向けの包括的な3Dおよび2Dウェイファインディングマップデザインを開発。",
				date: "2022年3月 – 現在"
			},
			freelance: {
				title: "フリーランス3Dアーティスト | Polüwerk OÜ & Bluray OÜ",
				desc: "複数の業界にわたる多様なクライアントの要件に合わせて、カスタム3Dモデリングおよびビジュアライゼーションアセットを提供。",
				date: "2019年2月 – 2023年2月"
			}
		},
		education: "教育",
		schools: {
			pallas: {
				title: "学士号 | Pallas University of Applied Sciences",
				desc: "専攻: 彫刻",
				date: "2019年9月 – 2024年6月"
			},
			tartu: {
				title: "職業中等教育 | Tartu Art School",
				desc: "専攻: 3Dモデリング & アニメーション",
				date: "2015年9月 – 2019年2月"
			},
			reiniku: {
				title: "基礎教育 | Tartu Mart Reiniku School",
				date: "2006年9月 – 2015年6月"
			}
		},
		exhibitions: "展覧会",
		exhibs: {
			pallas: {
				title: "最終プロジェクト展 | Pallas Art Gallery",
				date: "2024年6月 – 2024年7月"
			}
		}
	},
	blog_page: {
		title: "私のランダムな独り言",
		subtitle: "このページは、ランダムなトピックに関する私の考えや、私のお気に入りの映画、シリーズ、ゲーム、アニメをリストアップして、私をよりよく知ってもらうためのものです。",
		links: {
			genai: "なぜ生成AIアートは廃れるのか - WIP",
			films: "私のお気に入りの映画、シリーズ、アニメ",
			games: "私のお気に入りのゲーム"
		}
	},
	worldbuilding_page: {
		fractals_thumb_alt: "プロジェクト・フラクタルのサムネイル",
		fractals: "プロジェクト・フラクタル",
		project3088: "プロジェクト 3088"
	},
	fractals_page: {
		title: "プロジェクト・フラクタル",
		alt: "プロジェクト・フラクタル",
		desc1: "この世界構築プロジェクトは、[LINK1]というタイトルの学士論文プロジェクトとして始まりました。気候変動のために人類が中間圏に移住し、巨大な浮遊彫刻オブジェクトに住むという未来の宇宙シナリオを想像したかったのです。これらのオブジェクト内のカプセルは、自然の形に触発された個々の居住空間として機能します。カプセルに加えて、誰もが交流できる共有エリアもあります。私の設計プロセスには、アジアの建築の驚異、SF文学、60年代から現代の大ヒット映画まで、さまざまなソースからインスピレーションを得た広範なリサーチが含まれていました。",
		desc2: "エストニア語の論文全文は[LINK2]にあります。この学士プロジェクトを通じて素晴らしい指導者であったマーリル・ホミックに感謝します。",
		desc3: "他のプロジェクトや生活の変化に時間を取られているため、このプロジェクトの更新は遅れています。",
		animation: "フラクタルアニメーション",
		link1_text: "「私の未来の宇宙」",
		link2_text: "こちら"
	},
	genai_page: {
		title: "なぜ生成AIアートは廃れるのか - WIP",
		wip: "WIP"
	},
	films_page: {
		title: "私のお気に入りの映画、シリーズ、アニメ",
		films_title: "映画",
		series_title: "シリーズ",
		anime_title: "アニメ",
		imdb_link: "興味があれば、私の映画とシリーズの評価を<1>こちら</1>で確認できます。まだ完全ではありませんが、定期的に更新しています。",
		films: {
			br: {
				title: "ブレードランナー - 1982",
				desc: " - フィリップ・K・ディックの『アンドロイドは電気羊の夢を見るか？』の驚異的な世界が、素晴らしいディテールで映画化されています。"
			},
			br2049: {
				title: "ブレードランナー 2049 - 2017",
				desc: " - 史上最高の映画続編の一つ。紛れもなくブレードランナーでありながら、そのトーンと方向性において十分に異なっており、独自の地位を確立しています。"
			},
			alien: {
				title: "エイリアン - 1979",
				desc: " - そのホラー要素は信じられないほどよく持ちこたえています。壮大なセットデザインと雰囲気。"
			},
			space_odyssey: {
				title: "2001年宇宙の旅 - 1968",
				desc: " - 地球が平らだと信じ込ませるほど素晴らしい作品です。それだけで十分です。"
			},
			dune: {
				title: "デューン 砂の惑星 PART1 & 2 - 2021/2024",
				desc: " - 映画化不可能と言われた本が、現代最高の監督の一人によって映画化されました。シネマ！"
			},
			lotr: {
				title: "ロード・オブ・ザ・リング三部作 - 2001/2002/2003",
				desc: " - 世界構築のゴールドスタンダードであり、信じられないほど情熱的な人々のグループによって3本の映画にされました。それはただ魔法のようです。"
			},
			arrival: {
				title: "メッセージ - 2016",
				desc: " - SFジャンルへの素晴らしいアプローチ。素晴らしい演技と監督。"
			},
			whiplash: {
				title: "セッション - 2014",
				desc: " - 素晴らしい映画を作るのに大きな予算は必要ないことを証明しています。教師の賞賛を切望する学生との間の腐食的で複雑な関係は、本当にぞっとするものであり、心に響きます。"
			},
			joker: {
				title: "ジョーカー - 2019",
				desc: " - 古典的なバットマンの悪役に対する非常に異なる解釈。人々がますます孤独になっているか、あるいは一部の人々がそれが「クール」だと思っているために、メンタルヘルスの危機にある時代において、ジョーカーの関連性は増すばかりです。"
			},
			y1917: {
				title: "1917 命をかけた伝令 - 2019",
				desc: " - ただただ残忍な戦争映画に偽装された壮大な撮影技術。"
			},
			pirates: {
				title: "パイレーツ・オブ・カリビアン/呪われた海賊たち - 2003",
				desc: " - この映画以前は、海賊は漫画のようで、子供を怖がらせるものでした。しかし、この映画は絶対的な逸品であり、視覚的にも信じられないほどよく持ちこたえており、ジョニー・デップはただただ素晴らしいです。"
			},
			oppenheimer: {
				title: "オッペンハイマー - 2023",
				desc: " - アクション映画のように書かれていますが、実際には部屋で話している男たちと、途中で起こる大きな爆発だけです。それでも、全編を通して私をハラハラさせ続けました。白黒とカラーのショットの間の興味深い行き来もあります。一つはストラウスの視点から、もう一つはオッペンハイマーの視点からです。IMAXで見る機会があればよかったのにと思います。"
			}
		},
		series: {
			bb: {
				title: "ブレイキング・バッド - 2008 - 2013",
				desc: " - いくつかのフィラーエピソードはさておき、このような長いランタイムにわたって一貫して8+/10を提供できる能力は印象的です。"
			},
			got: {
				title: "ゲーム・オブ・スローンズ - 2011 - 2019",
				desc: " - 最後の2シーズンを見なければ、複雑なキャラクターと興味深いプロットラインを持つ堅実なテレビ番組です。"
			},
			andor: {
				title: "キャシアン・アンドー - 2022- 2025",
				desc: " - スターウォーズにしては驚くほど深い物語。今日の世界でもかなり関連性があります。"
			},
			mr_robot: {
				title: "MR. ROBOT/ミスター・ロボット - 2015 - 2019",
				desc: " - 私の個人的なお気に入りのシリーズ。すべてのひねりと展開が慎重に考え抜かれています。特にシーズン1は、再視聴するとさらに良くなります。"
			},
			chernobyl: {
				title: "チェルノブイリ - 2019",
				desc: " - これまでに作られた最高のミニシリーズの一つ。ソビエト連邦での生活の人間的状況を非常によく捉えています。"
			},
			house: {
				title: "Dr.HOUSE - 2004 - 2012",
				desc: " - 欠陥があり、陽気で、機知に富んだ医者によって面白くされた医療ドラマ。"
			},
			aib: {
				title: "今際の国のアリス - 2020 - 2025",
				desc: " - 最初の2シーズンは素晴らしい。3シーズン目は期待外れ。全体的に、非常に魅力的で、楽しく、頭を使う。"
			},
			clarkson: {
				title: "クラークソンズ・ファーム - 2021 - ?",
				desc: " - 車を運転して生計を立てていた男が、今ではトラクターを運転して生計を立てています。クラークソンズ・ファームは、陽気で、感情的で、教育的で、重要です。"
			}
		},
		anime: {
			initial_d: {
				title: "頭文字D - 1998 - 2014",
				desc: " - 私が車に興味を持つきっかけとなったアニメ。絶対的なクラシック。いつか自分のアニメーションカードリフトバトルを作ることを夢見ています。いつかその夢を実現できることを願っています。"
			},
			edgerunners: {
				title: "サイバーパンク エッジランナーズ - 2022 - ?",
				desc: " - サイバーパンク2077が好きなら、このアニメも大好きになるでしょう。これは長い間私の心に残りました。"
			}
		}
	},
	games_page: {
		title: "私のお気に入りのゲームのリスト",
		singleplayer_title: "シングルプレイヤー",
		multiplayer_title: "マルチプレイヤー",
		singleplayer: {
			cp2077: {
				title: "サイバーパンク2077 - 2020/2023",
				desc: " - 史上最もクールなビデオゲームの世界の一つ。すべてが現実に基づいており、すべてに目的があります。戦闘は信じられないほど楽しく、多様です。素晴らしいサウンドトラック。物語は世界観を非常にうまく利用しており、単にパンクがシステムと戦う話や、雇われガンマンが犯罪の裏社会を駆け上がる話ではありません。サイバーパンク2077のメインクエストは、実存主義とポストヒューマニズムから大きく影響を受けており、はるかに哲学的です。その核心はアイデンティティについての物語であり、そのテーマをゲームのあらゆる部分に織り込んでいます。メインクエストの長さもかなり適切です。鋭く、要点を突いています — すべてがキラーで、フィラーはありません。クエストには、後で波及するいくつかの意思決定がありますが、ウィッチャー3ほどではありませんが、制作価値も高いです。キャラクターは素晴らしいです。 - 9/10"
			},
			witcher3: {
				title: "ウィッチャー3 ワイルドハント - 2015/2016",
				desc: " - このゲームは、広大なオープンワールドゲームが豊富な複雑な物語とよく書かれたキャラクターを持つことができることを皆に（そしてベセスダに）示しました。戦闘は断然最も弱い部分ですが、決して悪くはなく、最終的には楽しくなります。メインクエストとサイドクエストの両方が、後で結果が現れるかなりの量の意思決定を提供します。グウェントは非常に良かったので、CDPRはそれだけのために別のゲームを作ることになりました。サウンドトラックはただただ素晴らしいです。 - 8/10"
			},
			mario_galaxy: {
				title: "スーパーマリオギャラクシー 1 & 2 - 2007/2010",
				desc: " - WIP"
			},
			ori: {
				title: "オリとくらやみの森、オリとウィスプの意志 - 2015/2020",
				desc: " - WIP"
			},
			dead_space: {
				title: "デッドスペース リメイク - 2023",
				desc: " - WIP"
			},
			minecraft: {
				title: "マインクラフト - 2009",
				desc: " - WIP"
			}
		},
		multiplayer: {
			lol: {
				title: "リーグ・オブ・レジェンド - 2009",
				desc: " - WIP"
			},
			overwatch: {
				title: "オーバーウォッチ - 2016",
				desc: " - WIP"
			},
			warframe: {
				title: "ウォーフレーム - 2013",
				desc: " - WIP"
			}
		}
	},
	footer: {
		title: "ヨーナス・キルシプー アートギャラリー",
		copyright: "© {{year}} 全著作権所有。"
	},
	images: {
		cerebrum: {
			text: "大脳",
			subtext: "MRTスキャン, Blender, Octane Render, Affinity [2026]",
			alt: "ヨーナス・キルシプーによる「大脳」と題された3Dレンダリング"
		},
		fractals001: {
			text: "フラクタル 001",
			subtext: "Mandelbulb 3D, Photoshop [2024]",
			alt: "ヨーナス・キルシプーによる3Dフラクタルアート作品「フラクタル 001」"
		},
		capsuleNightview: {
			text: "カプセルの夜景",
			subtext: "Blender, Photoshop [2024]",
			alt: "ヨーナス・キルシプーによる近未来的なカプセル内部の夜景レンダリング"
		},
		wireframe001: {
			text: "ワイヤーフレーム 001",
			subtext: "Blender, Photoshop [2024]",
			alt: "ヨーナス・キルシプーによる建築構造の3Dワイヤーフレームレンダリング"
		},
		bathroom001: {
			text: "バスルーム 001",
			subtext: "Blender, Photoshop [2024]",
			alt: "ヨーナス・キルシプーによる近未来的なバスルーム内部の3Dビジュアライゼーション"
		},
		commonRoom: {
			text: "談話室",
			subtext: "Blender, Photoshop [2024]",
			alt: "ヨーナス・キルシプーによる談話室エリアの3Dビジュアライゼーション"
		},
		capsuleView001: {
			text: "カプセルビュー 001",
			subtext: "Blender, Photoshop [2024]",
			alt: "ヨーナス・キルシプーによるカプセル内部の広角3Dビュー"
		},
		yunoChan: {
			text: "ゆのちゃん",
			subtext: "Blender, Substance Painter/Designer, Character Creator 4, Marvelous Designer [2023]",
			alt: "ヨーナス・キルシプーによるゆのちゃんの3Dキャラクターモデル"
		},
		porsche: {
			text: "ポルシェ 911 RWB",
			subtext: "Blender [2018]",
			alt: "ヨーナス・キルシプーによるポルシェ 911 RWBの3Dレンダリング"
		}
	},
	traditional: {
		thinkingOfYou: {
			text: "あなたを想う",
			subtext: "紙に鉛筆 [2022]",
			alt: "ヨーナス・キルシプーによる鉛筆画の肖像「あなたを想う」"
		},
		shy: {
			text: "シャイ",
			subtext: "紙に鉛筆 [2022]",
			alt: "ヨーナス・キルシプーによる鉛筆画の肖像「シャイ」"
		},
		closeYourEyes: {
			text: "目を閉じて",
			subtext: "紙に鉛筆 [2022]",
			alt: "ヨーナス・キルシプーによる鉛筆画の肖像「目を閉じて」"
		},
		girl001: {
			text: "少女 001",
			subtext: "紙に鉛筆 [2022]",
			alt: "ヨーナス・キルシプーによる少女の鉛筆画"
		},
		theOpposite: {
			text: "反対",
			subtext: "フィンランド製段ボールにアクリル [2021]",
			alt: "ヨーナス・キルシプーによる段ボール上のアクリル画「反対」"
		},
		abstract001: {
			text: "抽象 001",
			subtext: "フィンランド製段ボールにアクリル [2021]",
			alt: "ヨーナス・キルシプーによる段ボール上の抽象アクリル画"
		},
		act001: {
			text: "アクト 001",
			subtext: "フィンランド製段ボールにアクリル [2021]",
			alt: "ヨーナス・キルシプーによる人物のアクリル画「アクト 001」"
		},
		linework: {
			text: "ラインワーク",
			subtext: "紙に鉛筆 [2017]",
			alt: "ヨーナス・キルシプーによる鉛筆のラインワーク画"
		},
		sittingWithColours: {
			text: "色と共に座る",
			subtext: "段ボールにガッシュ [2017]",
			alt: "ヨーナス・キルシプーによるガッシュ画「色と共に座る」"
		},
		watercolourWithRainwater: {
			text: "雨水と水彩",
			subtext: "紙に水彩 [2017]",
			alt: "ヨーナス・キルシプーによる雨水を使用して作成された水彩画"
		},
		guitarGlove: {
			text: "ギターグローブ",
			subtext: "段ボールにガッシュ [2016]",
			alt: "ヨーナス・キルシプーによるガッシュ画「ギターグローブ」"
		},
		straightenYourTie: {
			text: "ネクタイを直して",
			subtext: "段ボールにガッシュ [2016]",
			alt: "ヨーナス・キルシプーによるガッシュ画「ネクタイを直して」"
		}
	},
	fractals: {
		hallway: {
			text: "廊下",
			subtext: "Blender, Photoshop [2024]",
			alt: "ヨーナス・キルシプーによる廊下の3Dレンダリング"
		},
		capsuleView002: {
			text: "カプセルビュー 002",
			subtext: "Blender, Photoshop [2024]",
			alt: "ヨーナス・キルシプーによるカプセル内部の3Dレンダリング"
		},
		capsuleView003: {
			text: "カプセルビュー 003",
			subtext: "Blender, Photoshop [2024]",
			alt: "ヨーナス・キルシプーによるカプセル居住空間の詳細ビュー"
		},
		capsuleView004: {
			text: "カプセルビュー 004",
			subtext: "Blender, Photoshop [2024]",
			alt: "ヨーナス・キルシプーによるカプセル内部のパースペクティブビュー"
		},
		capsuleView005: {
			text: "カプセルビュー 005",
			subtext: "Blender, Photoshop [2024]",
			alt: "ヨーナス・キルシプーによる座席を示すカプセル内部のビュー"
		},
		fractals002: {
			text: "フラクタル 002",
			subtext: "Mandelbulb 3D, Photoshop [2024]",
			alt: "ヨーナス・キルシプーによる3Dフラクタルアート作品「フラクタル 002」"
		},
		fractals003: {
			text: "フラクタル 003",
			subtext: "Mandelbulb 3D, Photoshop [2024]",
			alt: "ヨーナス・キルシプーによるカプセル構造の外観"
		},
		commonRoom: {
			text: "共用ルーム",
			subtext: "Blender, Photoshop [2024]",
			alt: "ヨーナス・キルシプーによる共用ルームエリアの3Dビジュアライゼーション"
		},
		bathroom002: {
			text: "バスルーム 002",
			subtext: "Blender, Photoshop [2024]",
			alt: "ヨーナス・キルシプーによる近未来的なバスルーム内部の3Dビジュアライゼーション"
		},
		wireframe002: {
			text: "ワイヤーフレーム 002",
			subtext: "Blender, Photoshop [2024]",
			alt: "ヨーナス・キルシプーによる建築構造の3Dワイヤーフレームレンダリング"
		},
		animation: {
			text: "フラクタルアニメーション",
			subtext: "YouTube",
			alt: "ヨーナス・キルシプーによるフラクタルアニメーション"
		}
	},
	contact_modal: {
		title: "お問い合わせ",
		default_mail: "デフォルトのメールアプリ",
		gmail: "Gmail",
		outlook: "Outlook",
		yahoo: "Yahoo",
		close: "閉じる"
	}
};
const ja = {
	translation: translation
};

if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: { en, it, ja },
      fallbackLng: 'en',
      detection: {
        order: ['localStorage', 'navigator'],
        caches: ['localStorage'],
        lookupLocalStorage: 'i18nextLng',
      },
      interpolation: { escapeValue: false },
    });
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://joonaskirsipuu.eu");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title,
    description,
    ogImage = "https://joonaskirsipuu.eu/images/BANNER.webp",
    ogImageAlt = "Joonas Kirsipuu Banner"
  } = Astro2.props;
  const siteUrl = "https://joonaskirsipuu.eu";
  const canonicalUrl = new URL(Astro2.url.pathname, siteUrl).toString();
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="theme-color" content="#0f172a"><title>', '</title><meta name="description"', '><meta name="author" content="Joonas Kirsipuu"><meta name="robots" content="index, follow"><link rel="canonical"', '><!-- Open Graph --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:site_name" content="Joonas Kirsipuu Art Portfolio"><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:image:alt"', '><meta property="og:locale" content="en_US"><!-- Twitter --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><meta name="twitter:image:alt"', '><!-- Favicons --><link rel="icon" type="image/x-icon" href="/favicon.ico"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png"><link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png"><link rel="icon" href="/favicon.gif" type="image/gif" id="gif-favicon"><link rel="manifest" href="/manifest.json"><!-- Animated favicon --><!-- Structured Data --><script type="application/ld+json">\n      {\n        "@context": "https://schema.org",\n        "@type": "Person",\n        "name": "Joonas Kirsipuu",\n        "jobTitle": "3D Geek, Worldbuilder & Designer",\n        "url": "https://joonaskirsipuu.eu",\n        "description": "Art portfolio featuring 3D renders, fractals, worldbuilding projects, and traditional art by Joonas Kirsipuu.",\n        "knowsAbout": ["3D Art", "Digital Art", "Worldbuilding", "Fractals", "Design"],\n        "sameAs": [\n          "https://www.artstation.com/joonaskirsipuu",\n          "https://www.facebook.com/joonas.kirsipuu",\n          "https://www.instagram.com/joonaskirsipuu/",\n          "https://www.linkedin.com/in/joonas-k-3b2879104/"\n        ]\n      }\n    <\/script>', '</head> <body> <div class="max-w-[1400px] mx-auto"> ', "  </div> </body></html>"])), title, addAttribute(description, "content"), addAttribute(canonicalUrl, "href"), addAttribute(canonicalUrl, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(ogImage, "content"), addAttribute(ogImageAlt, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(ogImage, "content"), addAttribute(ogImageAlt, "content"), renderHead(), renderSlot($$result, $$slots["default"]));
}, "C:/Users/joona/Desktop/mystuffs/PORTFOLIO/joonaskirsipuu.github.io/src/layouts/BaseLayout.astro", void 0);

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [pathname, setPathname] = useState("");
  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [langDropdown, setLangDropdown] = useState(false);
  const email = "joonaskirsipuu@gmail.com";
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLangDropdown(false);
  };
  const languages = [
    { code: "en", label: "EN" },
    { code: "it", label: "IT" },
    { code: "ja", label: "JP" }
  ];
  const links = [
    { name: t("nav.digital"), path: "/" },
    { name: t("nav.traditional"), path: "/Traditional" },
    { name: t("nav.worldbuilding"), path: "/Worldbuilding" },
    { name: t("nav.blog"), path: "/Blog" },
    { name: t("nav.about"), path: "/About" },
    { name: t("nav.contact"), action: () => setIsContactOpen(true) }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "relative w-full h-auto px-4 py-2 bg-slate-900 text-white z-10 flex flex-col justify-center gap-1", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsx("h1", { className: "cursor-default font-bold text-[7px] min-[400px]:text-xs sm:text-lg lg:text-xl tracking-[0.1em]", children: t("title") }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => setLangDropdown(!langDropdown),
            className: "text-[5px] min-[400px]:text-xs sm:text-sm font-bold tracking-widest hover:text-sky-300 transition-colors duration-300 flex items-center gap-1",
            children: [
              "LANG ",
              /* @__PURE__ */ jsx(FaChevronDown, { size: 10 })
            ]
          }
        ),
        langDropdown && /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-full mt-4 bg-slate-900 border border-slate-700 shadow-xl flex flex-col min-w-[100px] z-50", children: languages.map((lang) => /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => changeLanguage(lang.code),
            className: `px-4 py-3 text-sm font-bold tracking-widest hover:bg-sky-300 hover:text-slate-900 transition-colors text-center ${i18n.language.startsWith(lang.code) ? "text-sky-300" : "text-white"}`,
            children: lang.label
          },
          lang.code
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap w-full justify-start text-white font-bold text-[7px] min-[400px]:text-xs sm:text-sm xl:text-base items-center tracking-widest gap-y-1 gap-x-5", children: links.map((link) => link.path ? /* @__PURE__ */ jsx(
      "a",
      {
        href: link.path,
        className: `font-black w-fit px-0 py-1 whitespace-nowrap transition-all duration-300 ease-in-out hover:scale-105 ${pathname === link.path ? "bg-sky-300 text-slate-900 shadow-[0_0_10px_rgba(125,211,252,0.5)]" : "hover:bg-sky-300 hover:text-slate-900 hover:shadow-[0_0_10px_rgba(125,211,252,0.5)]"}`,
        children: link.name
      },
      link.name
    ) : /* @__PURE__ */ jsx(
      "button",
      {
        onClick: link.action,
        className: "font-bold w-fit px-0 py-1 whitespace-nowrap transition-all duration-300 ease-in-out hover:scale-105 hover:bg-sky-300 hover:text-slate-900 hover:shadow-[0_0_10px_rgba(125,211,252,0.5)]",
        children: link.name
      },
      link.name
    )) }),
    isContactOpen && /* @__PURE__ */ jsx(
      "div",
      {
        className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
        onClick: () => setIsContactOpen(false),
        children: /* @__PURE__ */ jsxs(
          "div",
          {
            className: "bg-slate-900 p-6 shadow-xl border border-blue-100 min-w-[300px] flex flex-col gap-4 scale-75 sm:scale-100",
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-center", children: t("contact_modal.title") }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
                /* @__PURE__ */ jsx("a", { href: `mailto:${email}`, className: "p-3 bg-slate-700 hover:bg-sky-300 hover:text-slate-900 transition-colors text-center font-semibold", children: t("contact_modal.default_mail") }),
                /* @__PURE__ */ jsx("a", { href: `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, target: "_blank", rel: "noreferrer", className: "p-3 bg-slate-700 hover:bg-sky-300 hover:text-slate-900 transition-colors text-center font-semibold", children: t("contact_modal.gmail") }),
                /* @__PURE__ */ jsx("a", { href: `https://outlook.office.com/mail/deeplink/compose?to=${email}`, target: "_blank", rel: "noreferrer", className: "p-3 bg-slate-700 hover:bg-sky-300 hover:text-slate-900 transition-colors text-center font-semibold", children: t("contact_modal.outlook") }),
                /* @__PURE__ */ jsx("a", { href: `https://compose.mail.yahoo.com/?to=${email}`, target: "_blank", rel: "noreferrer", className: "p-3 bg-slate-700 hover:bg-sky-300 hover:text-slate-900 transition-colors text-center font-semibold", children: t("contact_modal.yahoo") })
              ] }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => setIsContactOpen(false),
                  className: "mt-2 text-sm text-slate-400 hover:text-white self-center",
                  children: t("contact_modal.close")
                }
              )
            ]
          }
        )
      }
    )
  ] });
};

const Footer = () => {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs("div", { className: "w-full h-[85px] px-4 py-2 bg-slate-900 text-white z-10 flex flex-col items-center justify-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "cursor-default font-bold text-[10px] sm:text-sm lg:text-lg", children: t("footer.title") }),
    /* @__PURE__ */ jsx("p", { className: "text-[8px] sm:text-xs lg:text-sm mt-2", children: t("footer.copyright", { year: (/* @__PURE__ */ new Date()).getFullYear() }) })
  ] });
};

export { $$BaseLayout as $, Footer as F, Navbar as N };
