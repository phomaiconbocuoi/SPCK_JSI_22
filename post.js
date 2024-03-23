let postName = document.getElementById("Name")
let postTitle = document.getElementById("title")
let postDate = document.getElementById("date")
let postDescription = document.getElementById("description")
let postImage = document.getElementById("picture")

let uploading = (event)=>{
    filetype = event.target.files[0].filetype
    var uploadTask = firebase.storage().ref().child(`posts/${event.target.file[0]}`)

}

uploadTask.on('state_changed',
(error) => {
    
},
() => {
    uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
        url = downloadURL;
        document.style.display ="block"
    })
}
)