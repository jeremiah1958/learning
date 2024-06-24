// Rest parameter syntax
const superHero = (name, power, ...movies) => {
    console.log("Movies: ", movies);//[ 'spiderman-1', 'spiderman-2', 'spiderman-2' ]
    console.log("Power: ", power);//spider sense
    console.log("Name: ", name);//spiderman
}

superHero("spiderman", "spider sense", "spiderman-1", "spiderman-2", "spiderman-2");