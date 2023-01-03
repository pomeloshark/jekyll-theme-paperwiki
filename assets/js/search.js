// Yoinked in its entirety from https://davidwalsh.name/adding-search-to-your-site-with-javascript

var searchIndex = lunr(function() {
    this.ref("id");
    this.field("title", { boost: 10 });
    this.field("content");
    for (var key in window.pages) {
        this.add({
            "id": key,
            "title": pages[key].title,
            "content": pages[key].content
        });
    }
});



function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split("=");
      if (pair[0] === variable) {
          return decodeURIComponent(pair[1].replace(/\+/g, "%20"));
      }
  }
}

var searchTerm = getQueryVariable("q");
// creation of searchIndex from earlier example
var results = searchIndex.search(searchTerm);
var resultPages = results.map(function (match) {
  return pages[match.ref];
});




// resultPages from previous example
resultsString = "";
resultPages.forEach(function (r) {
    resultsString += "<dt>";
    resultsString += "<a class='result' href='" + r.url + "'>" + r.title + "</a></dt>";
//    resultsString += "<dd><a href='/" + r.collection + "'>" + r.collection + "</a>";
    resultsString += "<dd>" + r.content.substring(0, 200) + "..." + "</dd>";
});
document.querySelector("#search-results").innerHTML = resultsString;
