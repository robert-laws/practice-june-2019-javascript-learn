// fetch('http://api.open-notify.org/astros.json')
//   .then(response => response.json())
//   .then(json => console.log(json));


const token = '';

function postComment() {
  const comment = document.getElementById("myComment").value;
  const postData = {
    body: comment
  };

  fetch(
    'https://api.github.com/repos/robert-laws/practice-june-2019-javascript-learn/commits/89babfc9dd55c2b618b99602f6d6b89d8631729d/comments',
    {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        Authorization: `token ${token}`
      }
    }
  ).then(res => console.log(res))
}