console.log(experience);
const exp = document.getElementById('timeline');
for (let i = experience.length - 1; i >= 0; i--) {
    let div = document.createElement('div');
    div.className = "slide-exps"
    div.innerHTML = `
    `;
    exp.appendChild(div);
}