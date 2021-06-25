document.addEventListener("DOMContentLoaded", function (event) {
    var thumbnailElement = document.getElementById("smart-thumbnail");
    thumbnailElement.addEventListener("click", function () {
        thumbnailElement.className = "";
    })
    thumbnailElement.addEventListener("click", function(){
        if (thumbnailElement.className == "") {
            // write here the code that will execute if the image is big
            thumbnailElement.className = "small";
        }
    })
});