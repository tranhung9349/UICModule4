function uploadImage(){
    const  ref=firebase.storage().ref();
    const file=document.querySelector("#photo").files[0];
    const name=file.name;
    const metadata={
        contentType:file.type
    }
    const task=ref.child(name).put(file,metadata);

    task
        .then(snapshot => snapshot.ref.getDownloadURL())
        .then(url => {
            console.log("Image upload successful");
            const image=document.querySelector("#image");
            image.src=url;
            console.log(url)
            // document.getElementById('imgURL').value = `<img src="${url}" alt=""/>`
            document.getElementById('imgURL').value = url;

        })
}

function saveImgToDatabase() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/apartments?",
        success: function (apartments) {



        },
        error: function (error) {
            console.log(error);
        }
    });
}