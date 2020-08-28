// loader - credit: https://www.geeksforgeeks.org/how-to-show-page-loading-div-until-the-page-has-finished-loading/
document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
        document.querySelector(
            "body").style.visibility = "hidden";
        document.querySelector(
            "#loader-container").style.visibility = "visible";
        document.querySelector(
            "body").style.overflowY = "hidden";
    } else {
        document.querySelector(
            "#loader-container").style.display = "none";
        document.querySelector(
            "body").style.visibility = "visible";
        document.querySelector(
            "body").style.overflowY = "scroll";
    }
};


// START MODAL
// project descriptions to appear in modal
const projectDescriptions = {
    national_team_mapper: {
        name: 'National Team Mapper',
        languages_technologies: ['python', 'flask', 'html/css/js'],
        description: 'Inspired by a research talk about the French national football (soccer) team, I set out to explore how other imperial nations have leveraged their current and former colonial populations to build a stronger national team. I knew the process could be automated, so I built a Python script which scrapes roster data off of Wikipedia and records the birthplaces of players on every national team. From there, I built a website which displays this data on an interactive map.',
        learnings: 'Not only did I answer the question that motivated me to start this project, but I also used this project as a chance to create my first full-stack web application. I learned so much about stably deploying backend code (written in Flask) to a remote linux server and setting up site domains.',
        github: 'https://github.com/ttmenezes/National-Team-Mapper',
        link: 'http://nationalteam.tech/FR?',
        tile_icon: './img/nat-team-square.png',
        image: ''
    },
    etymology_graph: {
        name: 'Etymology Graph Analyzer',
        languages_technologies: ['python', 'cytoscape'],
        description: 'Inspired by lectures about the history of the English language in a class, I wanted to dig deeper into how the English language has pulled words from numerous sources. I built a Python script which goes through a list of the most common English words and then records the ancestor language families for each word. The program creates a graph (network) in which each word is a node that has an edge shared with each of its ancestor language families. The graph can be visualized using Cytoscape.',
        learnings: 'I used this project as an excuse to better my Python skills while exploring a topic that I wondered about. I learned how to scrape websites using the Beautiful Soup library, and I also learned some things about graph visualization with Cytoscape.',
        github: 'https://github.com/ttmenezes/etymology-graph-analyzer',
        tile_icon: './img/wordGraph.png',
        image: ''
    },
    knot_theory: {
        name: 'Knot Theory Research',
        subtitle: 'An Algorithm to Detect and Perform Flypes',
        languages_technologies: ['mathematica'],
        description: 'In my last two years of high school, I worked with Dr. Claus Ernst at Western Kentucky University on a project in the theoretical math field of knot theory. The project used the ',
        learnings: 'Not only did I learn how to conduct academic research in mathematics, but I also learned numerous skills that can be transferrable to other areas. I improved so much in my ability to break down complex ideas (which are easy to find in theoretical math) and make them digestible to the average student. Because of this, I noticed a marked improvement in my ability to share my ideas and teach others in a way they can actually digest. My analytical skills also grew a lot from this project. The hours of sitting at my desk, drawing out knot diagrams, and brainstorming algorithms enabled me to grow my analytical and algorithmic thinking abilities.',
        github: '',
        document: {
            title: 'Research Paper',
            address: './documents/ResearchPaper.pdf'
        },
        press: [
            'https://twitter.com/gattonacademy/status/1118232052984360961?lang=en',
            'https://www.facebook.com/gattonacademy/posts/congratulations-to-seniors-abdullah-ateyeh-western-hills-hs-trivan-menezes-oldha/10156413801759067/',
            'https://www.facebook.com/gattonacademy/posts/a-job-well-done-to-gatton-academy-students-trivan-menezes-oldham-co-hs-lukas-neg/10156351817949067/',
            'https://www.wku.edu/academy/academics/research_outcomes/class2019.php',
            'https://www.facebook.com/gattonacademy/photos/rig-spotlight-trivan-menezes-19-oldham-county-hs-of-la-grange-will-be-looking-at/10155811747314067/'
        ],
        tile_icon: './img/KnotTheory.png',
        image: ''
    },
    homepage: {
        name: 'Homepage (mini project)',
        languages_technologies: ['html/css/js'],
        description: 'Created a homepage for my browser that fetches weather data for my location using an API from the National Weather Service. The site also has a to-do list of items I want to do. The to-do items are stored in LocalStorage so that they stay consistent between user sessions.',
        learnings: 'Learned how to make API calls using Javascript',
        github: 'https://github.com/ttmenezes/homepage',
        tile_icon: './img/homepage-adjusted.jpg',
        image: ''
    },
    tigerlink: {
        name: 'TigerLink',
        subtitle: 'Hackathon Project',
        languages_technologies: ['javascript', 'react'],
        description: 'Worked with three of my friends to create a web application to potentially be used by the student body at Princeton. The application is a platform which enables students to select an activity they want to do with either a partner or a group, and then get either paired with a partner or placed into a group.',
        learnings: 'Learned React.js and bettered my UX design skills',
        github: 'https://github.com/sahil-a/tiger-link',
        tile_icon: './img/tigerlink-adjusted.jpg',
        image: ''
    }
}

const modal = document.getElementById("myModal");
// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];
// get modal header text
const modalHeaderText = document.getElementById("modal-header-text");

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// END MODAL


function parallax(element, distance, speed) {
    const item = document.querySelector(element);

    item.style.transform = `translateY(${distance * speed}px)`;
}

function parallaxHeadshot() {
    const head = document.querySelector('#head');
    const distanceY = window.scrollY;

    head.style.transform = `translateY(${distanceY * -0.25}px) translateX(${distanceY * -0.25}px)`;
}

function changeOpacity(element, opacity) {
    const item = document.querySelector(element);

    item.style.opacity = `${opacity}`;
}

window.addEventListener('scroll', function () {
    const distanceY = window.scrollY;

    if (distanceY < 2000) {
        parallax('header', distanceY, 0.4);
        parallax('.intro-text', distanceY, 0.5);
        parallax('#outline', distanceY, 0.7);
        parallaxHeadshot();
    }

    if (distanceY < 840) changeOpacity('#outline', 1);
    else if (distanceY < 860) changeOpacity('#outline', 0.75);
    else if (distanceY < 880) changeOpacity('#outline', 0.5);
    else if (distanceY < 900) changeOpacity('#outline', 0.25);
    else changeOpacity('#outline', 0);
})

const tileContainer = document.querySelector('.tile-container');
const portfolioHeadingText = document.querySelector('#portfolio-heading-text');
const modalSubtitle = document.querySelector('#modal-subtitle');
const modalAbout = document.querySelector('#modal-about');
const modalLearnings = document.querySelector('#modal-learnings');
const modalTechnologies = document.querySelector('#modal-technologies');
const modalFooter = document.querySelector('.modal-footer');

const getIconSrc = (iconText) => {
    if (iconText === 'html/css/js') return './icons/html-css-js-icons.png';
    else if (iconText === 'python') return './icons/python-icon.png';
    else if (iconText === 'flask') return './icons/flask-icon.png';
    else if (iconText === 'react') return './icons/react-icon.png';
    else if (iconText === 'flask') return './icons/flask-icon.png';
    else if (iconText === 'javascript') return './icons/javascript-icon.png';
    else if (iconText === 'mathematica') return './icons/mathematica-icon.png';
    else if (iconText === 'cytoscape') return './icons/cytoscape-icon.png';
}

// generate tiles
for (const project in projectDescriptions) {
    const project_data = projectDescriptions[project];

    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.classList.add('hvr-grow');
    tile.setAttribute('title', project);


    const image = document.createElement('img');
    image.src = project_data.tile_icon;
    image.alt = project_data.name;

    tile.appendChild(image);

    tile.addEventListener('mouseover', (e) => {
        portfolioHeadingText.textContent = project_data.name;
    });
    tile.addEventListener('click', (e) => {
        modalTechnologies.innerHTML = '';
        modalFooter.innerHTML = '';

        modal.style.display = "block";
        modalHeaderText.textContent = project_data.name;
        modalSubtitle.textContent = project_data.subtitle;
        modalAbout.textContent = project_data.description;
        modalLearnings.textContent = project_data.learnings;

        project_data.languages_technologies.forEach((tech) => {
            const icon = document.createElement('img');
            icon.src = getIconSrc(tech);
            icon.style.width = '30px';
            icon.style.height = '30px';
            const item = document.createElement('div');
            item.style.display = 'flex';
            item.appendChild(icon);
            const text = document.createElement('p');
            text.textContent = tech.toUpperCase();

            item.appendChild(text);

            item.className = 'icon-item';

            modalTechnologies.appendChild(item);
        })

        // check for github, document, link
        if (project_data.github) {
            const githubContainer = document.createElement('a');
            githubContainer.href = project_data.github;
            const icon = document.createElement('img');
            icon.src = './icons/GitHub-icon.png';
            icon.style.width = '100%';
            icon.style.height = 'auto';
            githubContainer.appendChild(icon);
            const text = document.createElement('p');
            text.textContent = 'GitHub';
            githubContainer.appendChild(text);
            modalFooter.appendChild(githubContainer);
        }
        if (project_data.document) {
            const docContainer = document.createElement('a');
            docContainer.href = project_data.document.address;
            docContainer.textContent = '📄 ' + project_data.document.title;
            modalFooter.appendChild(docContainer);
        }
        if (project_data.link) {
            const linkContainer = document.createElement('a');
            linkContainer.href = project_data.link;
            const text = document.createElement('p');
            text.textContent = '🌐 See it!';
            linkContainer.appendChild(text);
            modalFooter.appendChild(linkContainer);
        }
    });

    tileContainer.appendChild(tile);
}

// add blank targets to every anchor tag
document.querySelectorAll('a').forEach(a => {
    a.target = '_blank';
})

// soccer outline movement
const soccerCont = document.querySelector('#soccer-container');
const soccerOutline = document.querySelector('#soccer-outline');
const soccer = document.querySelector('#soccer');

soccerCont.addEventListener('mouseover', e => {
    soccerOutline.style.left = '38%';
    soccer.style.left = '43%';
})

soccerCont.addEventListener('mouseout', e => {
    soccerOutline.style.left = '40%';
    soccer.style.left = '40%';
})



