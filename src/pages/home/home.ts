import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GitHubService } from '../../services/github';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [GitHubService]
})
export class HomePage {
  public foundRepos;
  public username;
  
  constructor(private github: GitHubService, 
  private nav: NavController){
  }
  
  //method that get the github repo by username
  getRepos(){
    this.github.getRepos(this.username).subscribe(
      data => {
        this.foundRepos = data.json();
      }, 
      err => console.error(err),
      () => console.log('getRepos completed')
    );
  }
  
  //set the navigation
  goToDetails(repo){
    this.nav.push(DetailsPage, { repo: repo });
  }
  
} //end of class HomePage
