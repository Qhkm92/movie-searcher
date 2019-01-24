$(document).ready(() => {

	let apiKey = '3c450729';

	function test(){
		alert(1);
	}

	function getMovie() {
	    let movieId = sessionStorage.getItem('movieId');

	    axios.get(`http://www.omdbapi.com/?i=${movieId}&apikey=${apiKey}`)
	        .then((response) => {
	            let movie = response.data;
	            let output = `
	                <div class="row">
	                    <div class="col-md-4">
	                        <img src="${movie.Poster}" alt="..." >
	                    </div>
	                    <div class="col-md-8">
	                        <h2>${movie.Title}</h2>
	                        <ul class="list-group">
	                            <li class="list-group-item"><strong>Genre: </strong>${movie.Genre}</li>
	                            <li class="list-group-item"><strong>Release: </strong>${movie.Released}</li>
	                            <li class="list-group-item"><strong>Rated :</strong>${movie.Rated}</li>
	                            <li class="list-group-item"><strong>IMDB Rating: </strong>${movie.imdbRating}</li>
	                            <li class="list-group-item"><strong>Director: </strong>${movie.Director}</li>
	                            <li class="list-group-item"><strong>Writer: </strong>${movie.Writer}</li>
	                            <li class="list-group-item"><strong>Actors: </strong>${movie.Actors}</li>
	                        </ul>
	                    </div>
	                </div>
	                <div class="row">
	                    <div class="well">
	                        <h3>Plot</h3>
	                        ${movie.Plot}
	                        <hr>
	                        <a href="http://imdb.com/title/${movie.imdbID}" target="_blank" class="btn btn-primary">View IMDB</a>
	                        <a href="index.html" class="btn btn-default">Go back to search</a>

	                    </div>
	                </div>
	            `;

	            $('#movie').html(output);
	            
	        })
	        .catch((error) => {
	            console.log(error.data);
	        });
	}

	window.onload = getMovie();	
	
	
});