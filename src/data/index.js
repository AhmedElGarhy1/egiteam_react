// import data
import groups from "./groups";
import mentorsData from "./mentorsData";

import events from "./eventsData";

const links = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
  { path: "/events", name: "Events" },
  { path: "/groups", name: "Groups" },
  { path: "/faq", name: "FAQ" },
  { path: "/contact", name: "Contact Us" },
];

const aboutItems = [
  {
    header: "Who are we",
    content: [
      "EGI is a non-profit organization which based on volunteer work to help computer science students in both tracks: technical and soft skills.",
    ],
    dotsDirection: "right",
  },
  {
    header: "Our vision:",
    content: [
      "We aim to build an innovation and conscious computer science students that are aware of market requirements and its contributes to its development.",
    ],
    dotsDirection: "left",
  },
  {
    header: "Our mission:",
    content: [
      "Spread at ZU university then other universities.",
      "Develop team members and external members.",
      "spreading science and promoting technical content on the Internet.",
    ],
    dotsDirection: false,
  },
  {
    header: "Our Audience",
    content: [
      "Student of university interested to learn about technical and soft skills.",
    ],
    dotsDirection: false,
  },
];

const FAQs = [
  {
    question: "When can I join EGI Team ZU ?",
    answer: "Every begining of the academic new year",
  },
];

const footerIcons = [
  {
    href: "https://www.facebook.com/egiteam149",
    icon: "fa-brands fa-facebook-f",
    id: "Facebook",
  },
  {
    href: "https://twitter.com/egi_team149",
    icon: "fa-brands fa-twitter",
    id: "Twitter",
  },
  {
    href: "https://www.instagram.com/egi_team149/?igshid=YmMyMTA2M2Y%3D",
    icon: "fa-brands fa-instagram",
    id: "Instagram",
  },
  {
    href: "https://www.linkedin.com/company/egi-team/",
    icon: "fa-brands fa-linkedin",
    id: "Linkedin",
  },
  {
    href: "https://www.youtube.com/channel/UCLO02cylopkzxoFdGVDiAmw/featured",
    icon: "fa-brands fa-youtube",
    id: "Youtube",
  },
];
export { events, links, aboutItems, FAQs, groups, mentorsData, footerIcons };
