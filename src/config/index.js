module.exports = {

    author: "@konstantinmuenster",
    siteTitle: "Ardian's Profile",
    siteShortTitle: "Ardian", // Used as logo text in header, footer, and splash screen
    siteDescription: "A Profile About Me",
    siteUrl: "https://gatsby-starter-portfolio-minimal.netlify.app/",
    siteLanguage: "en_US",
    siteIcon: "src/content/ar.png", // Relative to gatsby-config file

    splashScreen: true, // Set this to true if you want to use the splash screen

    // You can create your own Medium feed with this rss to json converter: https://rss2json.com/
    // To access your Medium RSS feed, just replace this url with your username: https://medium.com/feed/@{yourname}
    mediumRssFeed: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40ardianff",
    shownArticles: 3,
    
    // There are icons available for the following platforms: 
    // Medium, GitHub, LinkedIn, XING, Behance
    socialMedia: [
        {
            name: "Linkedin",
            url: "https://linkedin.com/in/ardian-firmansyah"
        },
        {
            name: "Medium",
            url: "https://medium.com/@ardianff"
        },
        {
            name: "Github",
            url: "https://github.com/ardianff"
        },
    ],
  
    navLinks: {
        menu: [
            {
                name: "Articles",
                url: "/#articles",
            },
            {
                name: "About Me",
                url: "/#about",
            },
            {
                name: "Interest",
                url: "/#interests",
            },
            {
                name: "Projects",
                url: "/#projects",
            },
        ],
        button: {
            name: "Contact",
            url: "/#contact",
        }
    },

    footerLinks: [
        {
            name: "Privacy",
            url: "/privacy"
        },
    
    ]
}