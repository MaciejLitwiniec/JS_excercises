var movies = [
	{
		title: "In Bruges",
		rating: 5,
		hasWatched: false
	},
	{
		title: "Frozen",
		rating: 5,
		hasWatched: false
	},
	{
		title: "Mad Max Fury Road",
		rating: 4,
		hasWatched: true
	}
];

// for(var i = 0; i < movies.length; i++){
// 	if(movies.hasWatched == true){
// 		console.log('I have seen ' + '\"'  + movies[i].title + '\"' + ' - ' +  movies[i].rating + ' stars');
// 	} else {
// 		console.log('I have not seen ' + '\"'  + movies[i].title + '\"' + ' - ' +  movies[i].rating + ' stars');
// 	}
// }

movies.forEach(function(movie){
  if(movies.hasWatched){
		console.log('I have seen ' + '\"'  + movie.title + '\"' + ' - ' +  movie.rating + ' stars');
	} else {
		console.log('I have not seen ' + '\"'  + movie.title + '\"' + ' - ' +  movie.rating + ' stars');
	}
});
