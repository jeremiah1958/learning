function Movie(Title, ReleaseDate ) {
    this.Title = Title;
    this.ReleaseDate = ReleaseDate;

    this.getFullMovie = () =>{
    return "This Crime Organized Family Movie "+ this.Title + " was released in " + this.ReleaseDate;//string literal
    //This Crime Organized Family Movie Was Released in 1976

    }

};

let movie = new Movie('Godfather', '1976'  );

console.log(movie.getFullMovie());