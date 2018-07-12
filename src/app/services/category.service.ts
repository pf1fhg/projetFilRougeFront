import { Categorie } from './../models/categorie.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private readonly URL_GET_BY_ID = 'http://localhost:8095/categories';

  private categories: Array<Categorie> = [];

  constructor(private http: HttpClient) {
    // To link to back
    /*this.categories.push(new Categorie(1, 'Fruits', null, []));
    this.categories.push(new Categorie(2, 'Légumes', null, []));
    this.categories.push(new Categorie(3, 'Viandes', null, []));
    this.categories.push(new Categorie(4, 'Fruits Frais', this.categories[0], []));
    this.categories.push(new Categorie(5, 'Fruits Sec', this.categories[0], []));
    this.categories.push(new Categorie(6, 'Légumes vert', this.categories[1], []));
    this.categories.push(new Categorie(7, 'féculents', this.categories[1], []));
    this.categories.push(new Categorie(8, 'Boeuf', this.categories[2], []));
    this.categories.push(new Categorie(9, 'Agneau', this.categories[2], []));
    this.categories[0].listOfChildren = [this.getCategoryById(4), this.getCategoryById(5)];
    this.categories[1].listOfChildren = [this.getCategoryById(6), this.getCategoryById(7)];
    this.categories[2].listOfChildren = [this.getCategoryById(8), this.getCategoryById(9)];*/
  }

  public getCategories(): Observable<Categorie[]> {
    return this.http.get<Categorie[]>(this.URL_GET_BY_ID);
  }

  getSelectableCategories(): Array<Categorie> {
    return this.categories;
  }

  getCategoryById(id: number): Categorie {
    const cat: Categorie = this.categories.find((c: Categorie) => c.id === id);

    return cat;
  }

}
