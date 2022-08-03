let resumeData = {
    "navigation": ["About", "Experience", "Skills", "Portfolio", "Contact"],
    "about": [
        "Hello!",
        "I’m a London, UK based Front End Developer, with over 9 years of professional experience and a passion for UX design and software architecture. I gathered my experience through exposure to many types of business, with e-commerse being a very large part, but also travel to finance, and now sports.",
        "Over my career I've proven the ability to lead and manage teams of developers, deliver high-quality work on tight deadlines, and stay up to date on the latest industry trends.",
        "I’m currently refining my managerial style as a Lead Developer, spending large parts of my time mentoring and helping others flourish."
    ],
    "skills": {
        "left": [
            {
                "title": "Front End",
                "content": [
                    "React",
                    "Node.js",
                    "JavaScript",
                    "HTML",
                    "Pug",
                    "SCSS/Sass/CSS",
                    "Responsive, adaptive & cross browser"
                ]
            },
            {
                "title": "Version Control",
                "content": [
                    "Git",
                ]
            },
            {
                "title": "CMS",
                "content": [
                    "Magento",
                    "Concrete5",
                    "Drupal"
                ]
            }
        ],
        "right":[
            {
                "title": "Experience Working with",
                "content": [
                    "AWS",
                    "Docker",
                    "Jenkins",
                    "CI",
                    "PostgreSQL",
                    "MySQL",
                    "Google analytics",
                    "Google Tag Manager"
                ]
            },
            {
                "title": "Design Tools",
                "content": [
                    "Photoshop",
                    "Sketch",
                    "Balsamiq"
                ]
            },
        ]
    },
    "experience": [
        {
            "company": "Pulselive Ltd",
            "job_title": ["Senior Front Developer"],
            "dates": "March 2020 - Present",
            "icon": "work"
        },
        {
            "company": "Cult Beauty",
            "job_title": ["Lead Front End Developer"],
            "dates": "March 2017 - March 2020",
            "icon": "work"
        },
        {
            "company":"Time Inc. UK",
            "job_title": ["Front End Developer"],
            "dates": "September 2015 - March 2017",
            "icon": "work"
        },
        {
            "company":"Beyond Retro",
            "job_title": ["Front End Developer"],
            "dates": "March 2015 - September 2015",
            "icon": "work"
        },
        {
            "company":"House of Kaizen",
            "job_title": [
                "Head of Technology",
                "Junior Front End Developer"
            ],
            "dates": "September 2012 - March 2015",
            "icon": "work"
        },
        {
            "company":"Queen Mary, University of London",
            "job_title": ["Computer Science BSc"],
            "dates": "September 2009 - September 2012",
            "icon": "school"
        }
    ],
    "portfolio": [
        {
            "name": "Wallpaper*",
            "website": "www.wallpaper.com",
            "url": "http://wallpaper.com",
            "main_image": require("./img/wallpaper.png"),
            "content": [
                "The most pressurised, in terms of learning and learning quickly, piece of work completed on Wallpaper*, part of Time Inc. UK, was a project called 'Triptych groupage' (not live), build to achieve multiple add impressions on the homepage and hub pages by injecting a parallax carousel taking creatives from DFP JSON file.",
                "Another piece of work requiring a lot of JavaScript, was integrating a third party engine called LiftIgniter to deliver personalised content to the user based on their interactions with the site at critical points, e.g. the homepage, article pages related content, and search page",
            ],
            "other": [
                "Installing Sass Compass on projects virtual box and convert css files to SASS",
                "Gallery image optimisation for mobile and desktop, only loading necessary image sizes, and when they are needed, depending on device and display resolution",
                "Rebuild search page based on new design using JS autocomplete textfield",
                "Rebuild scrollers based on new design and implement touch swipe for mobile"
            ],
            "technology": [
                "Sass/Compass",
                "Fully Responsive",
                "JavaScript",
                "jQuery",
                "3rd party JavaScript libraries",
                "Symfony2",
                "Twig"
            ]
        },
        {
            "name": "Powder",
            "website": "www.thisispowder.com/",
            "url": "http://thisispowder.com/",
            "main_image": require("./img/thisispowder.png"),
            "content": [
                "Powder, part of Time Inc. UK, focuses on the aesthetic of the site and keeping with my role as the Front-End Architect, the most recent and on going work focuses heavily on tablet and mobile optimisation, other work includes legacy front-end fixes, and sass refactoring."
            ],
            "technology": [
                "Sass/Compass",
                "Bootstrap",
                "Fully Responsive",
                "JavaScript",
                "jQuery",
                "Drupal"
            ]
        },
        {
            "name": "Powder Wishlist",
            "website": "www.thisispowder.com/wishlist",
            "url": "http://thisispowder.com/wishlist",
            "main_image": require("./img/thisispowder-wishlist.png"),
            "content": [
                "The Powder Wishlist took a total of three sprints to complete working with a dedicated freelance designer and two back-end developers. Its purpose is to enable to user, from around the site, to add sponsored products, products found in their 'beauty drawer', and products from the product pages, to their wishlist which they can then share via social media, email or weblink aimed at the Christmas/Valentines/Mothers Day period.",
                "This project required the styles to be pixel perfect as it was being solid to high end brands to features their products on the sponsored sections. There also ended up being quite a lot of JavaScript in terms of how products are added to the wishlist from each section, focusing on a smooth and local movement."
            ],
            "technology": [
                "Sass/Compass",
                "Bootstrap",
                "Fully Responsive",
                "JavaScript",
                "jQuery",
                "Drupal"
            ]
        },
        {
            "name": "Trusted Reviews",
            "website": "www.trustedreviews.com",
            "url": "http://trustedreviews.com",
            "main_image": require("./img/trustedreviews.png"),
            "content": [
                "I worked on TrustedReviews, also part of Time Inc. UK, for around 6 months as the sole front-end resource, focusing first on getting to grips with Symfony1! My biggest task was the redesign of the front-end which was a gradual process lending the help of three back-end developers for the creation of brand new templates. While TrustedReviews is not a responsive site, it has responsive features and a separate codebase for the mobile site, which also had to be rebranded."
            ],
            "other": [
                "HTML5 video and Brightcove introduction with new Symfony1 templates",
                "Implemention of new ad formats using Time Inc. UK's library IPCCore",
                "Sass refactoring",
                "Legacy bug fixes"
            ],
            "technology": [
                "Sass/Compass",
                "Fully Responsive",
                "JavaScript",
                "jQuery",
                "Brightcove",
                "HTML5 Video",
                "Symfony1"
            ]
        },
        {
            "name": "Beyond Retro",
            "website": "www.beyondretro.com",
            "url": "http://beyondretro.com",
            "main_image": require("./img/beyondretro.png"),
            "content": [
                "Working with one back-end developer working in Canada, my focus at Beyond Retro was to update the site which hadn't been touched in many years, keeping UX factors in mind for search functionality, and filtering on the category pages. The site needed a completely new front end including a responsive build as there had been no mobile site previously. The development part of the re-skin was completed, including updates in the back-end, in six weeks, and was a very quick and smooth process."
            ],
            "technology": [
                "Sass/Compass",
                "Fully responsive",
                "JavaScript",
                "jQuery",
                "Magento"
            ]
        },
        {
            "name": "House of Kaizen",
            "website": "www.houseofkaizen.com",
            "url": "http://houseofkaizen.com",
            "main_image": require("./img/houseofkaizen.png"),
            "content": [
                "While my main focus at House of Kaizen was to the the Junior, and the Head of Technology fo conversion rate optimisation, I also build the new site in Concrete5, with custom built blocks and templates for editorial to handle, who has no knowledge of coding. This site still exists with new features added to provide newer outlets for the growing agency.",
                "Working in conversion rate optimisation had its challenges when it came to development as I worked in all different areas of the web, from travel, charities, parking, mattresses and what turned out to be the biggest sector, publishing. When you're handing the front-end of a site with no access to the codebase, just the source code, you have to be very thorough in testing, making sure that you have covered all areas of the checkout, for example. There are many different ways to pay, and if the project you are working on focuses on improving the UX of a brands checkout, you have to be sure you know every avenue, to write clear, and optimised code, that can be injected, sort of like a top layer, without the user noticing anything is happening."
            ],
            "technology": [
                "Fully responsive",
                "JavaScript",
                "3rd party JavaScript libraries",
                "jQuery",
                "Concrete5 (including basic PHP)",
                "Visual Website Optimizer",
                "Optimizely"
            ]
        },
        {
            "name": "The Times Store",
            "website": "store.thetimes.co.uk",
            "url": "http://store.thetimes.co.uk",
            "main_image": require("./img/thetimes-store.png"),
            "content": [
                "A microsite built for the purpose of handing the bespoke CMS over to marketing, who has no knowledge of coding, to add new pages, navigation items, content and assets. This was as on going project which developed over time with new releases once a week with new features found from marketing and editorial using the CMS and finding they need more or less control in certain areas. The CMS was build in Concrete5, with custom content blocks and different template designs for each of these blocks, with minimal PHP knowledge and a whole lot of front-end styling. Its fully responsive and although has adapted over time, and since me leaving the project the core code stays the same. Along with the development I was also in charge of the hosting, using Rackspace."
            ],
            "technology": [
                "Fully responsive",
                "Javascript",
                "jQuery",
                "Concrete5 (including basic PHP)",
                "Visual Website Optimizer",
                "Optimizely"
            ]
        }
    ]
};

export default resumeData