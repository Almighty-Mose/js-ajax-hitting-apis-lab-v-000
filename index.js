const rootURL = 'https://api.github.com';

function getRepositories() {
  let name = document.getElementById("username").value;
  let uri = rootURL + '/users/' + name + '/repos';
  let req = new XMLHttpRequest();
  req.addEventListener("load", showRepositories);
  req.open("GET", uri);
  req.send();
}