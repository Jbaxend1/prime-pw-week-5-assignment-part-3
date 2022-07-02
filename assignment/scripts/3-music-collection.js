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

console.log(collection[0]);

addToCollection('King Of Limbs', 'Radiohead', 2011);

console.log(collection[1]);

addToCollection('Blonde', 'Frank Ocean', 2016);

console.log(collection[2]);

addToCollection('Humanz', 'Gorillaz', 2017);

console.log(collection[3]);

addToCollection('Damn.', 'Kendrick Lamar', 2017);

console.log(collection[4]);

addToCollection('The Doors', 'The Doors', 1967);

console.log(collection[5]);

console.log(collection);

console.table(collection);

function showCollection(inputCollection){
    console.log(inputCollection.length);
    for(album of inputCollection){
        console.log('Title:', album.title);
        console.log('By:', album.artist)
        console.log('Published in:', album.yearPublished);
    }

}

showCollection(collection);
