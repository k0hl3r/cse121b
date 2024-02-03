/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Kohler Pratt",

    photo: 'images/me-three.jpg',

    favoriteFoods: [
        'Hot Wings',
        'Sushi',
        'Oreos',
        'Peaches'
    ],

    hobbies: [
        'Drawing',
        'Video Games',
        'Cooking',
        'Writing',
    ],

    placesLived: []
};
/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: 'Queen Creek, Az',
        length: '15 years',
    },
    {
        place: 'Herriman, UT',
        length: '6 years',
    },
    {
        place: 'Orem, UT',
        length: '2 years',
    },
    {
        place: 'Bellingham, WA',
        length: '1 year',
    }
);
/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;
/* Photo with attributes */
document.getElementById('photo').src = myProfile.photo;
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});
/* Hobbies List */
myProfile.hobbies.forEach(hobbies => {
    let li = document.createElement('li');
    li.textContent = hobbies;
    document.querySelector('#hobbies').appendChild(li);
});
/* Places Lived DataList */
let dlElement = document.getElementById('places-lived')

myProfile.placesLived.forEach(place => {
    let dtElement = document.createElement('dt');
    dtElement.textContent = place.place;
    let ddElement = document.createElement('dd');
    ddElement.textContent = place.length;
    
    dlElement.appendChild(dtElement);
    dlElement.appendChild(ddElement);
})


