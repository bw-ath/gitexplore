class Github {
  constructor() {
    this.client_id = 'ec4ea2e5b574a16c3107';
    this.client_secret ='ed4e6d1b196b0a692ea82966070d26de05a1203a';
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}
    &client_secret=${this.client_secret}`);

    const profileData = await profileResponse.json();

    return {
      profile
    }
  }
}