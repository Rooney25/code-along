/* In Part 2 we will create a form that will allow the user to create a new
 * superhero to add to our list. You can do this!
 */

// 1. Create a form that has an input for the hero's name, secret identity,
// powers, team, and their saying. Give the form a button that says "Add Hero" and append it to the #form-box div
let formB = document.querySelector("#form-box");

let form0 = document.createElement("form");
let div0 = document.createElement("div");
let lab0 = document.createElement("label");
let inp0 = document.createElement("input");
div0.appendChild(lab0);
div0.appendChild(inp0);
form0.appendChild(div0);
let form1 = document.createElement("form");
let div1 = document.createElement("div");
let lab1 = document.createElement("label");
let inp1 = document.createElement("input");
div1.appendChild(lab1);
div1.appendChild(inp1);
form1.appendChild(div1);
let form2 = document.createElement("form");
let div2 = document.createElement("div");
let lab2 = document.createElement("label");
let inp2 = document.createElement("input");
div2.appendChild(lab2);
div2.appendChild(inp2);
form2.appendChild(div2);
let form3 = document.createElement("form");
let div3 = document.createElement("div");
let lab3 = document.createElement("label");
let inp3 = document.createElement("input");
div3.appendChild(lab3);
div3.appendChild(inp3);
form3.appendChild(div3);
let form4 = document.createElement("form");
let div4 = document.createElement("div");
let lab4 = document.createElement("label");
let inp4 = document.createElement("input");
div4.appendChild(lab4);
div4.appendChild(inp4);
form4.appendChild(div4);
let form5 = document.createElement("form");
let div5 = document.createElement("div");
let lab5 = document.createElement("label");
let inp5 = document.createElement("input");
div5.appendChild(lab5);
div5.appendChild(inp5);
form5.appendChild(div5);

let button = document.createElement("button");
button.innerText = "Add Hero";

formB.appendChild(form0);
formB.appendChild(form1);
formB.appendChild(form2);
formB.appendChild(form3);
formB.appendChild(form4);
formB.appendChild(form5);
formB.appendChild(button);

lab0.innerText = "Hero's name: ";
lab1.innerText = "Secret Identity: ";
lab2.innerText = "Power: ";
lab3.innerText = "Power 2: ";
lab4.innerText = "Team: ";
lab5.innerText = "Saying: ";
inp0.setAttribute('id', 'heroName');
inp1.setAttribute('id', 'secretIdentity');
inp2.setAttribute('id', 'power');
inp3.setAttribute('id', 'power2');
inp4.setAttribute('id', 'team');
inp5.setAttribute('id', 'saying');
inp0.setAttribute('type', 'text');
inp1.setAttribute('type', 'text');
inp2.setAttribute('type', 'text');
inp3.setAttribute('type', 'text');
inp4.setAttribute('type', 'text');
inp5.setAttribute('type', 'text');

// 2. Add an event listener to the form's button that checks for a click, then
// calls a function called "addHero."

button.addEventListener("click", addHero);

/* 3. Modify the addHero function so that it creates an object using the values
 * in the form, then adds it to the hero array created in part1. Here is a reminder of
 * what our hero objects from part 1 looked like:
 *
 * {
 * name: "Nobody Man",
 * secretIdentity: "Bob Fakeman",
 * powers: ['invisibility', 'can erase your memory of him'],
 * team: 'The Randos',
 * saying: "You don't know me!",
 * }
 *
 * After the addHero function adds our new hero to the array, rewrite the
 * contents of the #hero-list div so that it includes the hero that's been just
 * added
*/

let count = 4;
function addHero() {
    let n = document.getElementById("heroName").value;
    let sI = document.getElementById("secretIdentity").value;
    let p = document.getElementById("power").value;
    let p2 = document.getElementById("power2").value;
    let t = document.getElementById("team").value;
    let s = document.getElementById("saying").value;
    const newHero = {
        name: n,
        secretIdentity: sI,
        powers: [p, p2],
        team: t,
        saying: s,
    }
    
    heroes.push(newHero);
    let heroList = document.querySelector("#hero-list");
    for (let i = count; i < heroes.length; i++) {
        let div = document.createElement('div');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');
        let p2 = document.createElement('p');
        let ul = document.createElement('ul');
        let h3 = document.createElement('h3')
        let li = document.createElement('li');
        let li2 = document.createElement('li');
        let p3 = document.createElement('p');

        div.appendChild(h2);
        div.appendChild(p);
        div.appendChild(p2);
        ul.appendChild(h3);
        ul.appendChild(li);
        ul.appendChild(li2);
        div.appendChild(ul);
        div.appendChild(p3);

        h2.innerText = heroes[i].name;
        p.innerText = "Team: " + heroes[i].team;
        p2.innerText = "Secret Identity: " + heroes[i].secretIdentity;
        h3.innerText = "Powers:";
        li.innerText = heroes[i].powers[0];
        li2.innerText = heroes[i].powers[1];
        p3.innerText = heroes[i].saying;
        heroList.appendChild(div);
    }

    count++;
}    
