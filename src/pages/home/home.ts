import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MovieProvider} from '../../providers/movie/movie';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
movies:any=[];
  constructor(public navCtrl: NavController, private MovieProvider: MovieProvider) {

  }

  ionViewDidLoad(){
    this.MovieProvider.getFilmData().subscribe((data)=>{
      this.movies = data.Search;
    });
  }

}
