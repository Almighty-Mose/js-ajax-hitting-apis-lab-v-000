const rootURL = 'https://api.github.com';

function getRepositories() {
  let name = document.getElementById("username").value;
  const uri = rootURL + '/users/' + name + '/repos';
  let req = new XMLHttpRequest();
  req.
}