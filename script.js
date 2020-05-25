
//main card retrieval function
function retrieveCard(name) {
    //this query url searches giphy for whatever gifs tagged with whatever "tag" is
    queryURL =
    `https://api.magicthegathering.io/v1/cards?name=${name}`;
  
    //ajax call to mtg.io
    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      console.log(response);
    }); //closing bracket for mtg.io ajax call
  }; // closing bracket for retrieveCard function





//search form and search button event handlers

  $("#searchForm").submit(function (e) {
      e.preventDefault();
      retrieveCard($("#search-input").val())
  });

  $("#searchButton").on("click", function() {
      retrieveCard($("#search-input").val());
  });