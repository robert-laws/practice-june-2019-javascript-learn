let authors = [
  {name: "Bob Cobb", age: 34, location: "Chicago"},
  {name: "Hal Hope", age: 39, location: "New York"},
  {name: "Jim Jupe", age: 52, location: "Boston"},
  {name: "Kal Kool", age: 27, location: "Houston"},
  {name: "Mel Mope", age: 43, location: "Los Angeles"},
  {name: "Don Dome", age: 38, location: "Miami"},
  {name: "Abe Area", age: 26, location: "New Orleans"},
  {name: "Val Vine", age: 35, location: "Seattle"}
]

$(function() {
  if($("#authors-list").length) {
    $("#age-select").on("change", function() {
      getByAge(authors, this.value);
    })
  }
})

function getByAge(array, age) {
  let filteredArray = filterAuthors(array, age)
  $("#authors-list").empty();
  
  $.each(filteredArray, function(index, value){
    let html = `<p>${value.name}</p>`;
    $("#authors-list").append(html);
  })
}

function filterAuthors(array, age) {
  let myResults = []
  array.filter(function(author) {
    if (author.age > age) {
      myResults.push(author);
    }
  });
  return myResults;
}
