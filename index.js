
    // function storeImage(){
    //     let image=document.getElementById("url").value;
    //     let images=JSON.parse(localStorage.getItem("images"))||[];
    //     images.push(image);
    //     localStorage.setItem("images",JSON.stringify(images));
    //     document.getElementById("url").value=null;
    // }
     let images_div=document.getElementById("images");
    let i=0;
    function start(){
        let images_arr=JSON.parse(localStorage.getItem("images"));

        let img=document.createElement("img");

        setInterval(function(){
            if(i===images_arr.length){
                i=0;
            }
            img.src=images_arr[i];
            images_div.append(img);
            i++;
        },2000);
    }
    document.addEventListener('DOMContentLoaded', function() {
        const movies = [
        {
            name: "Inception",
            releaseDate: "2010-07-16",
            poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1ylQxJCDkRmlhPcTzBMXenct8rScWPHqvPA&s",
            imdbRating: 8.8
        },
        {
            name: "The Dark Knight",
            releaseDate: "2008-07-18",
            poster: "https://rukminim2.flixcart.com/image/850/1000/kmns7m80/poster/w/r/8/medium-the-batman-the-dark-knight-rises-maxi-origins-jumbo-original-imagfgb6rmaz3cef.jpeg?q=90&crop=false",
            imdbRating: 9.0
        },
        {
            name: "Interstellar",
            releaseDate: "2014-11-07",
            poster: "https://images-cdn.ubuy.co.in/6352289f38bb253c44612d53-interstellar-movie-poster-24-x-36-inches.jpg",
            imdbRating: 8.6
        },
        {
            name: "The Matrix",
            releaseDate: "1999-03-31",
            poster: "https://rukminim2.flixcart.com/image/850/1000/kmns7m80/poster/l/p/f/medium-the-matrix-an-american-maxi-origins-jumbo-medium-size-original-imagfgb6gx9yhwzs.jpeg?q=90&crop=false",
            imdbRating: 8.7
        },
        {
            name: "Forrest Gump",
            releaseDate: "1994-07-06",
            poster: "https://www.aestheticwalldecor.com/cdn/shop/files/tom-hanks-is-forrest-gump-classic-movie-poster-aesthetic-wall-decor.jpg?v=1692555168",
            imdbRating: 8.8
        },
        {
            name: "Gladiator",
            releaseDate: "2000-05-05",
            poster: "https://i.pinimg.com/originals/ff/b7/f1/ffb7f1c546c8ab1a3342c02c6d2c0514.png",
            imdbRating: 8.5
        },
        {
            name: "The Shawshank Redemption",
            releaseDate: "1994-09-23",
            poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyINrUlI0ImdPY0TWhrWvk8OJb0vduc_om_Q&s",
            imdbRating: 9.3
        },
        {
            name: "The Godfather",
            releaseDate: "1972-03-24",
            poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDwyw1d-JpaU6W9IURz8BazWU0xWOYAVOySg&s",
            imdbRating: 9.2
        },
        {
            name: "Pulp Fiction",
            releaseDate: "1994-10-14",
            poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnBHLlgeQq7wd6PBXYZYEOGmzT_tiHFvMlEQ&s",
            imdbRating: 8.9
        }
    ];

    localStorage.setItem('movies', JSON.stringify(movies));

    const movieGrid = document.getElementById('movie-grid');
    const storedMovies = JSON.parse(localStorage.getItem('movies'));

    function displayMovies(movies) {
        movieGrid.innerHTML = '';
        movies.forEach(movie => {
            const movieItem = document.createElement('div');
            movieItem.classList.add('grid-item');

            movieItem.innerHTML = `
                <img src="${movie.poster}" alt="${movie.name}">
                <h2>${movie.name}</h2>
                <p>Release Date: ${movie.releaseDate}</p>
                <p>IMDb Rating: ${movie.imdbRating}</p>
            `;

            movieGrid.appendChild(movieItem);
        });
    }

    document.getElementById('sort-lh').addEventListener('click', function() {
        const sortedMovies = [...storedMovies].sort((a, b) => a.imdbRating - b.imdbRating);
        displayMovies(sortedMovies);
    });

    document.getElementById('sort-hl').addEventListener('click', function() {
        const sortedMovies = [...storedMovies].sort((a, b) => b.imdbRating - a.imdbRating);
        displayMovies(sortedMovies);
    });

    displayMovies(storedMovies);
});



