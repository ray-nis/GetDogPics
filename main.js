document.querySelector("#getDog").addEventListener("click", showPic);

function showPic() {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((data) => {
        document.querySelector("#img").src = data.message
    })
}