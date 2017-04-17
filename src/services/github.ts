import {Injectable} from '@angular/core';  
import {Http} from '@angular/http';

@Injectable()
export class GitHubService {  
  constructor(private http: Http) {
    console.log("test");
    console.log(Http);
  }
  
  getRepos(username) {
    let repos = this.http.get(`https://api.github.com/users/${username}/repos`);
    return repos;
  }
}