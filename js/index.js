$(document).ready(() => {
	$('#searchForm').on('submit', (e) => {
		let searchText = ($('#searchText').val());
		getMovies(searchText);
		e.preventDefault();
		
	})

	let apiKey = '3c450729';


	function getMovies(searchText) {
		axios.get(`http://www.omdbapi.com/?s=${searchText}&apikey=${apiKey}`)
			.then((response) => {
				let movies = response.data.Search;
				let output = '';
				$.each(movies, (index, movie) => {
					output += `
						<div class="col-md-3">
							<div class="well text-center">
								<img src="${movie.Poster}">
								<h5>${movie.Title}</h5>
								<a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">Movie Details</a>
							</div>
						</div> `
					;
				});

				$('#movies').html(output);
			})
			.catch((error) => {
				$('#movies').html(error);
				console.log(error);
			});
	}

	movieSelected = (id) => {
		console.log(id);
		sessionStorage.setItem('movieId', id);
		window.location = 'movie.html';
		return false;
	}

	
});