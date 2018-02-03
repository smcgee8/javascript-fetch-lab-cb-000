require('dotenv').config();

function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
  var title = $('#title').val();
  var body = $('#body').val();

  fetch('https://api.github.com/repos/')
}

function showResults(json) {
  $('#results').append(`<a href="${json.html_url}">Go to Github</a>`);
  window.owner = json.owner.login;
  window.repo = json.name;
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch('https://api.github.com/repos/' + repo + '/forks', {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(showResults);
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return window.key;
}
