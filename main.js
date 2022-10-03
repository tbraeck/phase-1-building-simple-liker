const articleHearts = document.querySelectorAll(".like-glyph");

function likeCallback(e) {
  const heart = e.target;
  mimicServerCall()
    .then(function (serverMessage) {
      alert("You notified the server!");
      alert(serverMessage);
      heart.innerText = glyphStates[heart.innerText];
      heart.style.color = colorStates[heart.style.color];
    })
    .catch(function (error) {
      alert("Something went wrong!");
    });

  for (const glyph of articleHearts) {
    glyph.addEventListener("click", likeCallback);
  }






  function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        let isRandomFailure = Math.random() < .2
        if (isRandomFailure) {
          reject("Random server error. Try again.");
        } else {
          resolve("Pretend remote server notified of action!");
        }
      }, 300);
    });
  }
}
