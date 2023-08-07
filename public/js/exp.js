import { experience } from "../store/exp.js";

// experience timeline
console.log(experience);
const exp = document.getElementById('timeline');
for (let i = experience.length - 1; i >= 0; i--) {
    let div = document.createElement('div');
    div.className = "slide-exps"
    div.innerHTML = `
<section class="CV-timeline CV-job">
<h3 class="CV-timeline-heading">
    <span class="CV-timeline-heading-title">${experience[i].position}</span> / <span
        class="CV-timeline-heading-location">${experience[i].company}</span><small
        class="CV-timeline-heading-duration">${experience[i].startDate} - ${experience[i].endDate}</small >
</h3 >
    <ul class="CV-timeline-details">
        <li class="CV-job-timeline-item">${experience[i].responsibilities.toString()}</li>
    </ul>
</section >
    `;
    exp.appendChild(div);
}