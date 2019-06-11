function getMyRepositories() {
  const name = document.getElementById("myText").value;

  const req = new XMLHttpRequest();
  req.addEventListener("load", showRepositories);
  req.open("GET", "https://api.github.com/users/" + name + "/repos");
  req.send();
}

function showRepositories() {
  const response = JSON.parse(this.responseText);
  let count = response.length;
  const repoList = `<ul>${response.map(res => "<li><strong><a href='https://github.com/" + res.owner.login + "/" + res.name + "'>" + res.name + "</a></strong> - <a href='#' data-username='" + res.owner.login + "' data-repository='" + res.name + "' onclick='getCommits(this); return false;'>show commits</a> - <a href='#' data-username='" + res.owner.login + "' data-repository='" + res.name + "' onclick='getBranches(this); return false;'>show branches</a></li>").join('')}</ul>`;
  document.getElementById("myRepos").innerHTML = repoList;

  document.getElementById("repoCount").innerHTML = count + " ";
}

function getCommits(elem) {
  const username = elem.dataset.username;
  const repository = elem.dataset.repository;
  const req = new XMLHttpRequest();
  req.addEventListener('load', showCommits);
  req.open('GET', 'https://api.github.com/repos/' + username + '/' + repository + '/commits');
  req.send();
}

function showCommits() {
  const commits = JSON.parse(this.responseText);
  const commitsList = `<ul>${commits.map(commit => '<li>' + (commit.author == null ? "" : commit.author.login) + ' - ' + commit.commit.message + '</li>').join('')}</ul>`;
  document.getElementById('details').innerHTML = commitsList;
}

function getBranches(elem) {
  const username = elem.dataset.username;
  const repository = elem.dataset.repository;
  const req = new XMLHttpRequest();
  req.addEventListener('load', showBranches);
  req.open('GET', 'https://api.github.com/repos/' + username + '/' + repository + '/branches');
  req.send();
}

function showBranches() {
  const branches = JSON.parse(this.responseText);
  const branchesList = `<ul>${branches.map(branch => '<li>' + branch.name + '</li>').join('')}</ul>`;
  document.getElementById("details").innerHTML = branchesList;
}