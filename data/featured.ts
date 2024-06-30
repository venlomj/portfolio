import { title } from "process";
import P40 from "@/public/assets/images/projects/P40_b.jpeg";
import MP4 from "@/public/assets/images/projects/music_player.png";
import MobileApp from "@/public/assets/images/projects/beverage.jpeg";
import MS from "@/public/assets/images/projects/ms.png";

const featuredData = [
  {
    title: "Project 4.0",
    logo: "",
    tag: "Feb 2024",
    video: "https://youtu.be/lN8ehgiOM3Q",
    creadits: "Team Eclipse",
    link: "https://www.youtube.com/watch?v=lN8ehgiOM3Q",
    desc: "In groepsverband heb ik een busyness barometer ontwikkeld voor Axxes om de kantoorbezetting te voorspellen en in real-time te tonen. Dit wordt geïntegreerd in de Axxes App en Axxes Home, en maakt gebruik van data zoals geboekte vergaderzalen en historische gegevens.",
    client: "AXXES",
    img: P40,
  },
  // {
  //   title: "Okarys",
  //   logo: "",
  //   tag: "Feb 2024",
  //   video:
  //     "https://cdn.dribbble.com/userupload/3743863/file/original-ed64ce215ecf5f86ead7fedaca82c84c.mp4",
  //   creadits: "Julia Dmitrievna",
  //   link: "https://dribbble.com/shots/19587956-Okarys-Brand-Identity",
  // },
  {
    title: "Mobile Development",
    logo: "",
    tag: "Nov 2023",
    video: "https://youtu.be/C3n6_zg5hpE",
    credits: "venlomj + Felix",
    link: "https://www.youtube.com/watch?v=C3n6_zg5hpE",
    desc: "Samen met mijn teamgenoot heb ik een mobiele AR-app ontwikkeld voor frisdranken. Gebruikers kunnen etiketten scannen voor extra informatie, producten beoordelen en hun collectie beheren. We implementeerden AR in Wikitude, waar gebruikers via een overlay details zoals herkomst en ingrediënten kunnen zien. De tweede app biedt een overzicht van dranken, beoordelingen, gedetailleerde pagina's en een backend met Express.js. Dit project biedt een interactieve ervaring met geavanceerde AR-technologieën.",
    client: "De leerkracht van Mobile Development in Flutter",
    img: MobileApp,
  },
  {
    title: "Music Player",
    logo: "",
    tag: "Feb 2024",
    video: "https://youtu.be/hLYs0Wexdwk",
    creadits: "venlomj",
    link: "https://www.youtube.com/watch?v=hLYs0Wexdwk",
    desc: "Voor mijn Proeve van Professionaliteit (PPP) moest ik een cursus kiezen en een opdracht uitvoeren. Ik heb gekozen voor het ontwikkelen van een muziek-applicatie in Vue.js. In deze opdracht heb ik een muziek-applicatie gebouwd! Hiermee kunnen gebruikers muziek uploaden, beheren en beluisteren zonder onderbrekingen. Ik heb TailwindCSS gebruikt om mij te helpen bij het ontwerpen van een prachtige moderne applicatie. TailwindCSS is de nieuwkomer die omarmd wordt door de front-end ontwikkelgemeenschap. Vervolgens heb ik meer geleerd over state management door gebruik te maken van de officiële state library genaamd PINIA, die Vuex vervangt in nieuwere codebases.",
    client: "De leerkracht van Professional Skills",
    img: MP4,
  },
  {
    title: "Task manager Microservices",
    logo: "",
    tag: "Jan 2024",
    video: "https://youtu.be/vNFlSuxuj8Q",
    creadits: "venlomj",
    link: "https://www.youtube.com/watch?v=vNFlSuxuj8Q",
    desc: "Voor het vak Enterprise Development Experience heb ik een microservicegebaseerde backend ontwikkeld voor takenbeheer. Het systeem biedt functionaliteiten voor het aanmaken, toewijzen en beheren van taken binnen teams, inclusief notificaties via e-mail. De implementatie omvat OAuth2 authenticatie, robuuste beveiligingsmaatregelen en schaalbaarheidsoplossingen voor betrouwbaarheid.",
    client: "De leerkracht van Enterprise Development Experience",
    img: MS,
  },
  // {
  //   title: "Film Titles Transitions",
  //   logo: "",
  //   tag: "Dec 2023",
  //   video:
  //     "https://cdn.dribbble.com/userupload/14512073/file/large-1e99a3d35ad22f770329b1488ab88563.mp4",
  //   creadits: "Algo",
  //   link: "https://dribbble.com/shots/24149714-Film-Titles-Transitions",
  // },
];

export default featuredData;
