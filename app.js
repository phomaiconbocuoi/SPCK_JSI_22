function upload() {
    var heading = document.getElementById("heading").value
    var des = document.getElementById("description").value
    var name_post = document.getElementById("name").value
    var post = document.getElementById("wish").value
    var image = document.getElementById("img").files[0];
    var date_post = document.getElementById("date").value
    //get image name
    var imageName = image.name;
    //firebase storage reference
    //it is the path where your image will be stored
    var storageRef = firebase.storage().ref('images/' + imageName);
    //upload image to selected storage reference 
    //make sure you pass image here
    var uploadTask = storageRef.put(image);
    //to get the state of image uploading...
    uploadTask.on('state_changed', function (snapshot) {
        //get task progress by following code
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("upload is " + progress + " done");
    }, function (error) {
        //handle error here
        console.log(error.message);
    }, function () {
        //handle successful upload here..
        uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            //get your image download url here and uplload it to database
            //our path where data is stored ...push is used so that every post have unique id 
            firebase.database().ref('blog/').push().set({
                heading: heading,
                description: des,
                name_post: name_post,
                post: post,
                date: date_post,
                imageURL: downloadURL
            }, function (error) {
                if (error) {
                    alert("Error while uploading");

                } else {
                    alert("Successfully uploaded");
                    //now reset your form
                    document.getElementById('post-form').reset();
                    getdata();
                }
            });
        });
    });

}
window.onload = function (){
    this.getdata();
}

//post on html
function getdata(){
    firebase.database().ref('blog/').once('value').then(function(snapshot){
        //get your posts div
        var posts_div = document.getElementById('posts');
        //remove all remaining data in that div
        //get data from firebase
        var data = snapshot.val();
        console.log(data);
        //now pass this data to our posts div
        //we have to pass our data to for loop to get one by one
        //we are passing the key of that post to delete it from database
        for (let[key, value] of Object.entries(data)) {
            posts_div.innerHTML = "<div class='w3-container w3-white w3-margin w3-padding-large'>" + 
            "    <div class='w3-center'>" +
            "<h3>"+ value.heading + "</h3>" +
            "<h5>" + value.description + ", <span class='w3-opacity'>" + value.date + "</span></h5>" + "</div>" +
            "<div class='w3-justify'>" +
            "<img src='" + value.imageURL + "'alt='Girl Hat' style='width:100%; height: 60%;  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);' class='w3-padding-16'>" + 
            "<p><strong>"+value.name_post+":</strong>"+value.post+"</p>" +
            "<p class='w3-left'><button class='w3-button w3-white w3-border' onclick='likeFunction(this)'><b>Like</b></button></p>" +
            "<p class='w3-clear'></p>"+
            "</div></div><hr>"+posts_div.innerHTML;




 
        }

    })
}



    
          

      
       
          
  