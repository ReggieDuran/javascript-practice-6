const addMovieButton = document.getElementById('add-movie-btn');
const searchMovieButton = document.getElementById('search-btn');

const movies = [];

const movieRender = () => {
    const movieList = document.getElementById('movie-list');

    if (movies.length === 0) {
        movieList.classList.remove('visible');
    } else {
        movieList.classList.add('visible');
    }

    movieList.innerHTML = '';

    movies.forEach(movie => {
        const movieEl = document.createElement('li');
        // movieEl.textContent = movie.info.title;
        let text = movie.info.title + ' - ';
        for (key in movie.info) {
            if (key !== 'title') {
                text = text + `${key}: ${movie.info[key]}`;
            }
        }
        movieEl.textContent = text;
        movieList.append(movieEl);
    })
};

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

    movies.push(newMovie);
    movieRender();
};

addMovieButton.addEventListener('click', addMovieHandler);