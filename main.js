document.querySelector(".js-go").addEventListener("click", function () {
    var inputValue = document.querySelector(".js-userinput").value;
    var userInput = getUserInput();
    searchGiphy(userInput);
  });
  
  document
    .querySelector(".js-userinput").addEventListener("keyup", function (data) {
      if (data.which === 13) {
        var userInput = getUserInput();
        searchGiphy(userInput);
      }
    });
  
  function getUserInput() {
    var inputValue = document.querySelector(".js-userinput").value;
  
    return inputValue;
  }
  
  function searchGiphy(searchQuery) {
    var url =
      "https://api.giphy.com/v1/gifs/search?api_key=bw8bYK5aYMFflyPDQHJTVnqu0hCh3vcn&q=" + searchQuery;
    var GiphyAJAXCall = new XMLHttpRequest();
    GiphyAJAXCall.open("GET", url);
    GiphyAJAXCall.send();
  
    GiphyAJAXCall.addEventListener("load", function (data) {
      var actualData = data.target.response;
      pushToDOM(actualData);
      console.log(actualData);
    });
  }
  
  function pushToDOM(response) {
    response = JSON.parse(response);
    var images = response.data;
  
    var container = document.querySelector(".js-container");

    container.innerHTML = "";
  
    images.forEach(function (image) {
      var src = image.images.fixed_height.url;
  
      container.innerHTML += "<img src='" + src + "' class='container-image' />";
    });
  }