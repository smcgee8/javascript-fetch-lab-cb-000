require('dotenv').config();

function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
}

function showResults(json) {
  $('#results').append(json.html_url);
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
  return 'fae8b7cc267996e892abe969a0f2761a094ba85e'
}
