import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes : Recipe[] = [
    new Recipe('Hu tieu', 'A dish in the south of VN', 'https://static1.squarespace.com/static/52d3fafee4b03c7eaedee15f/t/5833368f893fc0db3e5a0bc6/1479752095852/hu+tieu+noodles'),
    new Recipe('Banh canh', 'A diferent dish', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.7G2lK4OrfXKPB4iONt97MgHaHa%26pid%3DApi&f=1&ipt=11ddb906ced8e34c7639c9af5a4bf9f58a59398aad60fbc173b593bf6663b8f4&ipo=images')
  ]



  constructor() { }

  ngOnInit(): void {
  }

}
