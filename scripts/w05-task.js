/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");
const templeList = [];
/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach((temple) => {
        const article = document.createElement("article");
        const h3 = document.createElement("h3");
        const img = document.createElement("img");

        h3.textContent = temple.templeName;
        img.src = temple.imageUrl;
        img.alt = temple.location;

        article.appendChild(h3);
        article.appendChild(img)

        templesElement.appendChild(article);
    });
};
/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templeList.length = 0;
    templeList.push(...await response.json());
    displayTemples(templeList);
};
/* reset Function */
function reset(){
    templesElement.innerHTML = "";
}
/* filterTemples Function */
function filterTemples(temples) {
    reset();
    let filter = document.getElementById('filtered').value;

    switch(filter){
        case"utah":
            displayTemples(temples.filter(temple => temple.location.includes('Utah')));
            break;
        case"notutah":
            displayTemples(temples.filter(temple => !temple.location.includes('Utah')));
            break;
        case"older":
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date('1950, January, 1')));
            break;
        case"all":
            displayTemples(temples);
            break;
    }
}

getTemples();

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => {filterTemples(templeList)});