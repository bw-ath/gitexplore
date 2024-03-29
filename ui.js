class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }
  //Display profile in UI
  showProfile(user) {
    console.log(user);
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">  
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
            </div>
            <div class="col-md-9">
              <a href="${user.repos_url}" target="_blank"
                span class="badge badge-primary">Public Repos: ${user.public_repos}</a>
              <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
              <span class="badge badge-success">Followers: ${user.followers}</span>
              <span class="badge badge-info">Following: ${user.following}</span>
              <br<br>
              <ul class ="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website/Blog: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
              </ul>
            </div>
          </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
    `;
  }

 // Show user repos
 showRepos(repos) {
  let output = '';

  repos.forEach(function(repo) {
    output += `
      <div class="card card-body mb-2">
        <div class="row">
          <div class="col-md-6">
            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
          </div>
          <div class="col-md-6">
          <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
          <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
          <span class="badge badge-success">Forks: ${repo.forms_count}</span>
          </div>
        </div>
      </div>
    `;
  });
    //Output repos
    document.getElementById('repos').innerHTML = output;
  }

    //Show alert message
    showAlert(message, className){
      // Clear any remaining alerts
      this.clearAlert();
      // Create div
      const div = document.createElement('div');
      div.className = className;
      //Add Text
      div.appendChild(document.createTextNode(message));
      // Get Parent
      const container = document.querySelector('.searchContainer');
      //get search box
      const search = document.querySelector('.search');
      //Insert alert
      container.insertBefore(div, search);

      //Timeout after 3 sec
      setTimeout(() => {
        this.clearAlert();
      }, 2000);
    }

    //Clear Alert Message
    clearAlert() {
      const currentAlert = document.querySelector('.alert');
      if(currentAlert){
        currentAlert.remove();
      }
    }

    //Clear profile
    clearProfile() {
    this.profile.innerHTML = '';
  }
}

//viewing link https://api.github.com/users/bpw90x we can see the data that we have available, such as avatar_url / gravatar_id, etc.