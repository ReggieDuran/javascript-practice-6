const addMovieButton = document.getElementById('add-movie-btn');
const searchMovieButton = document.getElementById('search-btn');

const movies = [];

const addMovieHandler = () => {
    const title = document.getElementById('title').value;
    const extraName = document.getElementById('extra-name').value;
    const extraValue = document. getElementById('extra-value').value;

    if (
        title.trim () === '' || 
        extraValue.trim() === '' || 
        extraName.trim() === ''
    ) {
        return;
    }

    const newMovie = {
        info: {
            title,
            [extraName]: extraValue
        },
        id: Math.random()
    };

    movies.push(neeMovie);
    console.log(movies);
};

addMovieButton.addEventListener('click', addMovieHandler);