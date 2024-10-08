function solve(input) {
    // define structure
    const movies = [];
    
    // check & execute command
    for (const row of input) {
        const addMovieCommand = 'addMovie';
        const directedByCommand = 'directedBy';
        const onDateCommand = 'onDate';
        
        if (row.includes(addMovieCommand)) {
            const movieName = row.substring(addMovieCommand.length + 1);
            
            const movie = {
                name: movieName,
            }

            movies.push(movie);
        } else if (row.includes(directedByCommand)) {
            const [movieName, director] = row.split(` ${directedByCommand} `);
            
            const movie = movies.find(movie => movie.name === movieName);

            if (movie) {
                movie.director = director;
            }

        } else if (row.includes(onDateCommand)) {
            const [movieName, date] = row.split(` ${onDateCommand} `);
            const movie = movies.find(movie => movie.name === movieName);

            if (movie) {
                movie.date = date;
            }
        }
    }    
    
    // return output
    movies
    .filter(movie => movie.director && movie.date)
    .forEach(movie => console.log(JSON.stringify(movie)));
};

solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);

// {"name":"Fast and Furious","date":"30.07.2018","director":"Rob Cohen"}
// {"name":"Godfather","director":"Francis Ford Coppola","date":"29.07.2018"}
 
solve([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ]);

	// {"name":"The Avengers","director":"Anthony Russo","date":"30.07.2010"}
    