// import { } from "./exp.js";
import { } from "./splash.js";
import { } from "./dark.js";
import { sr } from './slider.js'
import { literallyme } from "./me.js";
// swup
const swup = new Swup({
    containers: ["#swup"]
});

console.log("%cdesign & coded by Atharv Desai", "color: yellow; background-color: blue;padding: 2px");
console.log(literallyme);

swup.hooks.on('page:view', () => {
    // This runs after every page change by swup
    sr.reveal('.about-left', { delay: 200, origin: "left" })
    sr.reveal('.about-right', { delay: 200, origin: "top" })
    sr.reveal('.wrapper', { delay: 100, origin: "bottom" })
    sr.reveal('.wrapper1', { delay: 100, origin: "top" })
    sr.reveal('#prj', { delay: 150, origin: "top" })
});




// splash screen