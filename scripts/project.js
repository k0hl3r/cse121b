const characterContainer = document.getElementById("character-container");
let characterDescriptors = [];

const displayCharacter = (character) => {
    const characterInfo = `
        <h2>A ${character.race} ${character.gender} with ${character.hairLength} ${character.hairColor} hair and a ${character.build} build. They are ${character.personality}  and wear ${character.clothing} clothing.</h2>
    `;

    document.getElementById('character-info').innerHTML = characterInfo;
};

const fetchCharacterDescriptors = async () => {

    const response = await fetch("character.json");
    characterDescriptors = await response.json();
};

const getRandomDescriptor = (category) => {
    const descriptorsArray = characterDescriptors.descriptors.find(descriptor => descriptor.category === category);
    
    if (descriptorsArray) {
        const descriptors = descriptorsArray.options;
        return descriptors[Math.floor(Math.random() * descriptors.length)];
    } else {
        console.error('Category not found:', category);
        return '';
    }
};
const generateCharacter = () => {
    if (characterDescriptors.length === 0) {
        fetchCharacterDescriptors().then(() => generateCharacter());
        return;
    }

    const character = {
        gender: getRandomDescriptor('Gender'),
        race: getRandomDescriptor('Race'),
        hairLength: getRandomDescriptor('Hair Length'),
        hairColor: getRandomDescriptor('Hair Color'),
        build: getRandomDescriptor('Build'),
        personality: getRandomDescriptor('Personality'),
        clothing: getRandomDescriptor('Clothing')
    };

    displayCharacter(character);
};