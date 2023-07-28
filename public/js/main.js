import { experience } from "../store/exp.js";

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1000,
    delay: 200,
    reset: true
});

// butter.js
// butter.init({
//     wrapperId: 'butter',
//     wrapperDamper: 0.07,
//     cancelOnTouch: true
// });


// splash screen
var n = $("img").length;
var k = 0;
$("body").imagesLoaded()
    .progress(function (instance, image) {
        k++;
        var percent = k / n * 100;
        console.log(percent);
        $("#progress-bar").css("background", "linear-gradient(to right, white 0%, white " + percent + "%, black " + percent + "%)");
    }).always(function () {
        $("#splash").css("opacity", "0.0");
        $("#splash").hide();
        setTimeout(function () {
            $("#splash").css("z-index", "-2");
        }, 6000)
    });

// const wrapper = document.getElementById("tiles");
// let columns = 0,
//     rows = 0,
//     toggled = false;

// const toggle = () => {
//     toggled = !toggled;
//     document.body.classList.toggle("toggled");
// }

// const handleOnClick = index => {
//     toggle();
//     anime({
//         targets: ".tile",
//         opacity: toggled ? 0 : 1,
//         delay: anime.stagger(100, {
//             grid: [columns, rows],
//             from: index
//         })
//     });
// }

// const createTile = index => {
//     const tile = document.createElement("div");
//     tile.classList.add("tile");
//     tile.style.opacity = toggled ? 0 : 1;
//     tile.onclick = e => handleOnClick(index);
//     return tile;
// }

// const createTiles = quantity => {
//     Array.from(Array(quantity)).map((tile, index) => {
//         wrapper.appendChild(createTile(index));
//     });
// }

// const createGrid = () => {
//     wrapper.innerHTML = "";
//     const size = document.body.clientWidth > 800 ? 100 : 50;
//     columns = Math.floor(document.body.clientWidth / size);
//     rows = Math.floor(document.body.clientHeight / size);
//     wrapper.style.setProperty("--columns", columns);
//     wrapper.style.setProperty("--rows", rows);
//     createTiles(columns * rows);
// }
// createGrid();

// setInterval(() => {
//     const randomIndex = Math.floor(Math.random() * (columns * rows));
//     handleOnClick(randomIndex);
// }, 3000);

// window.onresize = () => createGrid();

// console.log(experience);
// const exp = document.getElementById('timeline');
// for (let i = experience.length - 1; i >= 0; i--) {
//     let div = document.createElement('div');
//     div.className = "slide-exps"
//     div.innerHTML = `
// <section class="CV-timeline CV-job">
// <h3 class="CV-timeline-heading">
//     <span class="CV-timeline-heading-title">${experience[i].position}</span>– <span
//         class="CV-timeline-heading-location">${experience[i].company}</span><small
//         class="CV-timeline-heading-duration">${experience[i].startDate} - ${experience[i].endDate}</small >
// </h3 >
//     <ul class="CV-timeline-details">
//         <li class="CV-job-timeline-item">${experience[i].responsibilities.toString()}</li>
//     </ul>
// </section >
//     `;
//     exp.appendChild(div);
// }


// menu