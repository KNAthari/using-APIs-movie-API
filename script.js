$(document).ready(function(){
    var URL = "https://static.codehs.com/api/12345/movies/all";

    $('#search').on('click', function(){
        async function findReleaseDate(movie){
            var movieName = document.getElementById('movie').value
    
            const response = await fetch(URL);
            const data = await response.json();
            
    
            const foundMovie = data.find(movie => movie.name === movieName);
    
            if(foundMovie){
                document.getElementById('release-date').textContent = 'Release Date:' + foundMovie.releaseDate;
                } else {
                document.getElementById('release-date').textContent = 'Release Date not found';
                }
    
            
    
            
        }
    
        findReleaseDate()
    })
            
            
});