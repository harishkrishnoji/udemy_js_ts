const movies = [
    { title: 'a', year: 2018, rating: 4.5},
    { title: 'b', year: 2018, rating: 4.7},
    { title: 'c', year: 2018, rating: 3},
    { title: 'd', year: 2017, rating: 4.5},
]

// get all movies in 2018 with rating > 4
// sort them by their rating
// Descending order
// Pick their title

// for (const element of movies) {
//     if (element['year'] === 2018) {
//         console.log(element)
//         const 
//     }


    // for (const key in element) {
    //     if 
        // console.log('key: '+key+ ', value: '+ element[key])

        // if (Object.prototype.hasOwnProperty.call(element, key)) {
        //     const element1 = element[key];
        //     console.log('key: '+key+ ', value: '+ element1)
        // }
    // }
// }


const titles = movies
    .filter(m => m.year === 2018 && m.rating >= 4)
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    // .map(m => m.title)

console.log(titles)