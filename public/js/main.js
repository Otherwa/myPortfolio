import { experience } from "../store/exp.js";

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    reset: true
});

sr.reveal('#call', { origin: 'right' });
sr.reveal('.CV-page div', { origin: 'bottom', interval: 200, delay: 100 });
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', { delay: 400 });
sr.reveal('.home__social-icon', { interval: 200 });
sr.reveal('.skills__data, .work__img, .contact__input', { interval: 200 });
sr.reveal('.skills__data, .work__img, .contact__input', { interval: 200 });
sr.reveal('.about__img', { 'origin': 'left', interval: 50 })

butter.js
butter.init({
    wrapperId: 'butter',
    wrapperDamper: 0.02,
    cancelOnTouch: true
});

// calling
const callBtn = document.getElementById("call");
callBtn.addEventListener("click", () => {
    window.open('tel:8828388979');
});





// external js: packery.pkgd.js, draggabilly.pkgd.js



// experience timeline
console.log(experience);
const exp = document.getElementById('timeline');
for (let i = experience.length - 1; i >= 0; i--) {
    let div = document.createElement('div');
    div.className = "slide-exps"
    div.innerHTML = `
<section class="CV-timeline CV-job">
<h3 class="CV-timeline-heading">
    <span class="CV-timeline-heading-title">${experience[i].position}</span>– <span
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


