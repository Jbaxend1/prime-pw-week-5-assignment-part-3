console.log('***** Music Collection *****')


let collection = [];

function addToCollection (title, artist, yearPublished) {
    let newCollection = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    }
    
    return collection.push(newCollection);
}

addToCollection('In Rainbows', 'Radiohead', 2007);

addToCollection('King Of Limbs', 'Radiohead', 2011);

addToCollection('Blonde', 'Frank Ocean', 2016);

addToCollection('Humanz', 'Gorillaz', 2017);

addToCollection('Damn.', 'Kendrick Lamar', 2017);

addToCollection('The Doors', 'The Doors', 1967);

console.log(collection);

console.table(collection);

