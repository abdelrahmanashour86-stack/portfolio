const projectsData = [
    {
        id: 1,
        type: "Dashboard",
        title: "Bounty Radar (React Edition)",
        description: "Bounty Radar Platform is a dynamic threat intelligence and bug bounty aggregator designed for security researchers. It seamlessly fetches live cybersecurity news, vulnerability write-ups, and hacker rankings into a sleek, Red Team-inspired dashboard. Re-architected with React.js, Vite, and Tailwind CSS v4, featuring a fully responsive UI and a seamless Dark/Light mode toggle.",
        image: "bountyradar-react.png",
        liveLink: "https://bounty-radar-react-edition.vercel.app/",
        githubLink: "https://github.com/abdelrahmanashour86-stack/bounty-radar-react-edition"
    },
    {
        id: 2,
        type: "Dashboard",
        title: "bounty radar",
        description: "Bounty Radar Platform is a dynamic threat intelligence and bug bounty aggregator designed for security researchers. It seamlessly fetches live cybersecurity news, latest vulnerability write-ups, and global hacker rankings into a sleek, Red Team-inspired dashboard. Built entirely with Vanilla JavaScript, focusing on performance and clean architecture.",
        image: "bountyradar.png",
        liveLink: "https://abdelrahmanashour86-stack.github.io/bounty-radar-platform/",
        githubLink: "https://github.com/abdelrahmanashour86-stack/bounty-radar-platform"
    },
    {
        id: 3,
        type: "landing page",
        title: "botol",
        description: "A responsive and modern landing page built with a focus on clean design and optimal user experience. Developed using core front-end technologies to ensure fast load times, cross-browser compatibility, and pixel-perfect UI across all devices.",
        image: "botol.png",
        liveLink: "https://abdelrahmanashour86-stack.github.io/botol-landing-page/", 
        githubLink: "https://github.com/abdelrahmanashour86-stack/botol-landing-page" 
    },
    {
        id: 4,
        type: "landing page",
        title: "iron",
        description: "A sleek, high-performance landing page designed to convert visitors effectively. Engineered with best practices in front-end architecture, delivering a seamless and interactive interface while maintaining clean, maintainable code.",
        image: "iron.png",
        liveLink: "https://abdelrahmanashour86-stack.github.io/iron-landing-page/",
        githubLink: "https://github.com/abdelrahmanashour86-stack/iron-landing-page"
    }
];

const projectsWrapper = document.getElementById("projects-wrapper");

if (projectsWrapper) {
    let projectsHTML = "";

    projectsData.forEach((project) => {
        projectsHTML += `
        <div class="container">
            <div class="left">
                <h3>${project.type}</h3>
                <h2>${project.title}</h2>
                <div class="about-proj">
                    <p>${project.description}</p>
                </div>
                <div class="link" onclick="window.open('${project.githubLink}', '_blank')" style="cursor: pointer;">
                    <i class="fa-brands fa-github"></i>
                </div>
            </div>
            <div class="right">
                <div class="project-img" onclick="window.open('${project.liveLink}', '_blank')" style="cursor: pointer;">
                    <img src="${project.image}" alt="${project.title}">
                </div>
            </div>
        </div>
        `;
    });

    projectsWrapper.innerHTML = projectsHTML;
}

const linkedin = document.querySelector(".linkedin");
const whatsapp = document.querySelector(".whatsapp");
const email = document.querySelector(".email");

if (linkedin) {
    linkedin.onclick = () => {
        window.open("https://www.linkedin.com/in/abdelrahman-tabaga-9a6105274?utm_source=share_via&utm_content=profile&utm_medium=member_android", "_blank");
    };
}

if (whatsapp) {
    whatsapp.onclick = () => {
        window.open("https://wa.me/201032039679", "_blank");
    };
}

if (email) {
    email.onclick = () => {
        window.open("mailto:abdelrahmanashour86@gmail.com", "_blank");
    };
}