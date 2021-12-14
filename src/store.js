import Vue from "vue";
import Vuex from "vuex";
/*import { stat } from "fs";*/
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: {
        name: "Toubal",
        surname: "Saoussene",
        birthDay: new Date(1997, 9, 24),
        startDescription: "Hello I’m Saoussene",
        description:
            ", a web developer based in Boumérdes, Algeria. Specialized in Vuejs/Laravel and professional experience as a web developer and data scientist. ",
    },
    technologies: {
        programming:  [
            { name: "JavaEE", level: 60 , },
            { name: "HTML & (S)CSS", level: 92 },
            { name: "Javascript (ES6)", level: 80 },
            { name: "PHP", level: 80 },
            { name: "PYTHON", level: 70 }
        ],
        frameworks: [
            { name: "Vue.js", level: 65 },
            { name: "Laravel", level: 60 },
            { name: "Tailwind.css", level: 80 },
            { name: "Bootstrap", level: 80 },
            { name: "Vuetify", level: 68 },
        ],
        tools:[
            { name: "git" },
            { name: "mvc" },
            { name: "Webpack" },
            { name: "Netlify" },
            { name: "Wordpress" }
        ]
    },
    projects: [{
        name: "3yadati",
        description: "3yadaty , is an application of management of medical practice which treats the appointments of the customers, the management of the secretarial task, the management of the consulatation and the generation of the prescriptions and form analysis, accompanied with a dashboard for the admin which controls the applicatiion-designer with bootstrap, css and particlejs        ",
        link: "",
        icon: "leaf",
        startDate: "2019",
        endDate: "2019",
        developer: "toubal saoussene",
        tags: [
            { name: "#opensource" },
            { name: "#php" },
            { name: "#app" },
            { name: "#kdconcept" }
        ]
    }, {
        name: "Suz portfolio",
        description: "Creating my own portfolio with full Vue.js and Tailwind css",
        link: "",
        icon: "address-card",
        startDate: "2020",
        endDate: "Present",
        developer: "Toubal saoussene",
        tags: [
            { name: "#opensource" },
            { name: "#vue" },
            { name: "#tailwindcss" },
            { name: "#portfolio" }
        ]
    },{
        name: "Hey Book !!",
        description: "Hey Book!! is a web application built with Java EE and MysQL that manages an online library and offers a search space for users and a book processing space for admins.",
        link: "",
        icon: "book",
        startDate: "Oct ,2020",
        endDate: "Nov, 2020",
        developer: "saoussene toubal",
        tags: [
            { name: "#javaee" },
            { name: "#mysql" },
            { name: "#bootstrap" }
        ]
    },
    {
        name: "Meeting App",
        description: "This application allows the management and organization of events created with vuejs, vuetify and firebase.",
        link: "https://github.com/suuuzana/sou-calandrier",
        icon: "envelope",
        startDate: "Oct ,2020",
        endDate: "Nov, 2020",
        developer: "saoussene toubal",
        tags: [
            { name: "#vue" },
            { name: "#firebase" },
            { name: "#calender" }
        ]
    },
    {
        name: "Translate App",
        description: "a mini application that allows the translation of words created with vuejs and the yandex API.",
        link: "https://github.com/suuuzana/translate",
        icon: "wifi",
        startDate: "Fevrier 2020",
        endDate: "",
        developer: "saoussene toubal",
        tags: [
            { name: "#apitranslate" },
            { name: "#vuejs" },
            { name: "#yandex" }
        ]
    }
    ,
    {
        name: "Ecommerce App",
        description: "It is an online sales application created with Laravel implemented with the Stripe api and the ShoopingCart library.",
        link: "",
        icon: "map-leaf",
        startDate: "Dec ,2020",
        endDate: "fev, 2021",
        developer: "saoussene toubal",
        tags: [
            { name: "#Laravel" },
            { name: "#strip" },
            { name: "#shoopingcart" }
        ]
    }
    ], events: [
        { 
            name: "dhaki.Fr",
            description: "Dhaki, dhaki is a company for engline training and web development and data science.",
            role: "Instructor || Web developer",
            type: "Work",
            startDate: " Jan 2021",
            endDate: "Oct 2021",
            roles:[
                {description: "Creating a php course and exercises" },
                {description: "Creating a Laravel course and exercises." },
                {description: "Creating a Vuejs course and exercises" },
                {description: "Creating a PHP and LARAVEL projects for dhaki"},
                {description: "Creating a Vuejs and LARAVEL projects for dhaki" },
                {description: "Make presentation for the cours and projects with zoom app" }
            ]
        } ,
        { 
            name: "Djezzy",
            description: "Djezzy, officially Optimum Telecom Algeria and formerly Orascom Telecom Algeria, is an Algerian cell phone operator created on July 11, 2001 before opening its network in February 2002.",
            role: "Data scientiste",
            type: "Work",
            startDate: " Jan 2021",
            endDate: "Sep 2021",
            roles:[
                {description: "Data extraction via Teradata according to SQL." },
                {description: "Data analysis." },
                {description: "Data visualization." },
                {description: "Apply machine learning models (TimeSeries) with an accuracy of 96%." },
                {description: "Develop an application for djezzy shopkeepers to display the points of sales to boost them with LARAVEL" }
            ]
        } ,
        { 
            name: "KDCONCEPT",
            description: "Kdconcept is a development company based in Rouiba, Algeria during my journey there I worked with pure PHP and MYSQL as a backend developer",
            role: "Backend Developer ",
            type: "Work",
            startDate: " 2018",
            endDate: "2019",
            roles:[
                {description: "User management." },
                {description: "Consulation management." },
                {description: "Appointment management." },
                {description: "Customer Management." },
                {description: "Orders and Analysis Management" }
            ]
        } , { 
            name: "Master in software engineering and information processing",
            description: "University MHAMED BOUGARA BOUMERDES",
            role: "",
            type: "",
            startDate: " 2019",
            endDate: "2021",
            roles:[
               
            ]
        },
         { 
            name: "Bachelor of Science in Computer Systems",
            description: "University MHAMED BOUGARA BOUMERDES",
            role: "",
            type: "",
            startDate: " 2015",
            endDate: "2019",
            roles:[             
            ]
        }
        ,
         { 
            name: "CCNA 1",
            description: "EL YACINE BOUMERDES school",
            role: "",
            type: "",
            startDate: " juin 2018",
            endDate: "",
            roles:[
                
            ]
        },
        { 
            name: "CCNA 2",
            description: "EL YACINE BOUMERDES school",
            role: "",
            type: "",
            startDate: " octobre 2018",
            endDate: "",
            roles:[
                
            ]
        },
        { 
            name: "CERTIFICATION PYTHON OF EVERYBODY",
            description: "UNIVERSITE OF MICHIGAN IN COURSERA ONLIGN",
            role: "",
            type: "",
            startDate: " SEPTEMBRE 2020",
            endDate: "",
            roles:[
                
            ]
        },
        { 
            name: "CERTIFICATION WORDPRESS",
            description: "COURSERA ONLINE COURSE",
            role: "",
            type: "",
            startDate: " JUIN 2020",
            endDate: "",
            roles:[
                
            ]
        },
    ], socials: [
        {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/saoussenetoubal/",
            icon: "linkedin" 
        }, {
            name: "Github",
            link: "https://github.com/suuuzana",
            icon: "github" 
        }, {
            name: "Twitter",
            link: "https://twitter.com/SaousseneToubal",
            icon: "twitter" 
        }, {
            name: "instagram",
            link: "https://www.instagram.com/saoussene_toubal/",
            icon: "instagram" 
        },  
    ]
},

    getters: { age: state => {
            let ageDiff = Date.now() - state.profile.birthDay;
            let ageDate = new Date(ageDiff);
            return Math.abs(ageDate.getUTCFullYear() - 1970);
        },
        profile: state => state.profile,
        projects: state => state.projects,
        technologies: state => state.technologies,
        events: state => state.events,
        socials: state => state.socials
    },
    mutations: {},
    actions: {}
});
