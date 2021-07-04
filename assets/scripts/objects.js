const addMovieButton = document.getElementById('add-movie-btn');
const searchMovieButton = document.getElementById('search-btn');

const movies = [];

const movieRender = (filter = '') => {
    const movieList = document.getElementById('movie-list');

    if (movies.length === 0) {
        movieList.classList.remove('visible');
    } else {
        movieList.classList.add('visible');
    }

    movieList.innerHTML = '';

    const filteredMovies = !filter 
        ? movies 
        : movies.filter(movie => movie.info.title.includes(filter));

    filteredMovies.forEach(movie => {
        const movieEl = document.createElement('li');
        const { info, ...otherProps } = movie;
        console.log(otherProps);
        // const { title: movieTitle } = info;
        let { getFormattedTitle } = movie;
        // getFormattedTitle = getFormattedTitle.bind(movie);
        let text = getFormattedTitle.apply(movie) + ' - ';
        for (key in info) {
            if (key !== 'title' && key !== '_title') {
                text = text + `${key}: ${info[key]}`;
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
        extraValue.trim() === '' || 
        extraName.trim() === ''
    ) {
        return;
    }

    const newMovie = {
        info: {
            [extraName]: extraValue
        },
        set title(val) {
            if (val.trim() === '') {
                this._title = 'DEFAULT';
                return;
            }
            this._title = val;
        },
        get title() {
            return this._title;
        },
        id: Math.random().toString(),
        getFormattedTitle() {
            return this.info.title.toUpperCase();
        }
    };

    newMovie.info.title = title;
    movies.push(newMovie);
    movieRender();
};

const searchMovieHandler = () => {
    const filterTerm = document.getElementById('filter-title').value;
    movieRender(filterTerm);
};

addMovieButton.addEventListener('click', addMovieHandler);
searchMovieButton.addEventListener('click', searchMovieHandler);