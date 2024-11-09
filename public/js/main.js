// import { } from "./exp.js";
import { } from "./dark.js";
import { sr } from './slider.js'
import { literallyme } from "./me.js";
// ? swup
sr.reveal('#main', { delay: 200, origin: "left" })

const swup = new Swup({
    containers: ["#swup"]
});

console.log("design & coded by Atharv Desai");
console.log(literallyme);


swup.hooks.on('page:view', () => {
    // ? This runs after every page change by swup
    sr.reveal('.about-left', { delay: 200, origin: "left" })
    sr.reveal('#main', { delay: 200, origin: "left" })
    sr.reveal('.about-right', { delay: 200, origin: "top" })
    sr.reveal('.wrapper', { delay: 100, origin: "bottom" })
    sr.reveal('.wrapper1', { delay: 100, origin: "top" })
    sr.reveal('.wrapper2', { delay: 100, origin: "right" })
    init();
});

function init() {
    // This runs after every page change by sw
    const username = 'Otherwa';
    const contentList = document.getElementById('contentList');
    console.log(contentList);
    fetch(`https://api.github.com/users/${username}/repos?tab=repositories&q=&type=source&language=&sort=stargazers`)
        .then(response => response.json())
        .then(data => {
            // Filter repositories where owner login is 'Otherwa'
            const filteredData = data.filter(repo => repo.owner.login === 'Otherwa');

            // Sort filtered repositories by creation date (ascending)
            filteredData.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
            console.log(filteredData)
            const contentArray = [
                {
                    link: "https://onlyvaccine.cyclic.app/",
                    linkText: "Le-Vaccine",
                    description: "Velapatrak: Centralized vaccination site and timetable management. Streamline appointments, enhance efficiency, and ensure smooth vaccine distribution. Simplify the vaccination process with Velapatrak.",
                    githubLink: "https://github.com/Otherwa/Drug_Lord_v1.10"
                }
            ];

            data.forEach(repo => {
                contentArray.push({
                    link: repo.html_url,
                    linkText: repo.name,
                    description: repo.description || "No description provided.",
                    githubLink: repo.html_url
                });
            });

            contentArray.forEach(item => {
                const listItem = document.createElement('li');

                const link = document.createElement('a');
                link.className = 'link';
                link.target = '_blank';
                link.href = item.link;
                link.textContent = item.linkText;

                const descriptionDiv = document.createElement('div');
                descriptionDiv.className = 'inner-div';
                descriptionDiv.style.lineHeight = 'normal';
                descriptionDiv.innerHTML = item.description;

                const githubLink = document.createElement('a');
                githubLink.style.fontSize = '1.0rem';
                githubLink.style.position = 'absolute';
                githubLink.style.bottom = '1rem';
                githubLink.style.padding = '0.5rem';
                githubLink.style.right = '1.5rem';
                githubLink.href = item.githubLink;

                descriptionDiv.appendChild(githubLink);
                listItem.appendChild(link);
                listItem.appendChild(document.createElement('br'));
                listItem.appendChild(descriptionDiv);

                contentList.appendChild(listItem);
            });
        })
}

init();