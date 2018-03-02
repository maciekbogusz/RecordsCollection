function showAlert(artistId, albumId){ 
		var tempArtists = document.getElementById(artistId).value;
		var tempAlbum = document.getElementById(albumId).value;
		if (!!tempArtists & !!tempAlbum){
			alert(tempArtists+" "+tempAlbum);
		}					
}




function createClient(){
	var client = amazon.createClient({
	awsId: "aws ID",
	awsSecret: "aws Secret",
	awsTag: "aws Tag"
});
}

