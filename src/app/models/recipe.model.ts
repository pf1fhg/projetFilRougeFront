import { element } from 'protractor';
import { Ingredient } from './ingredient.model';
import { RecipeIngredient } from './recipe-ingredient.model';

export class Recipe extends Ingredient {
  // content of the recipe : since the Ingredient class
  private _listIngredient: RecipeIngredient[];

  public get listIngredient(): RecipeIngredient[] {
    return this._listIngredient;
  }

  public set listIngredient(value: RecipeIngredient[]) {
    this._listIngredient = value;
  }

  // method to cumulate data informations of every ingredient
  public dataCalcul() {
    // console.log('-------- DATA CALCUL START -----------------');
    this.energy = 0.0;
    this.water = 0.0;
    this.protein = 0.0;
    this.glucid = 0.0;
    this.lipid = 0.0;
    this.sugar = 0.0;
    this.amidon = 0.0;
    this.fiber = 0.0;
    this.unsaturedFattyAcides = 0.0;
    this.monoUnsaturedFattyAcides = 0.0;
    this.polyUnsaturedFattyAcides = 0.0;
    this.salt = 0.0;
    this.glycemicIndex = 0.0;
    this.glycemicLoad = 0.0;
    this.listIngredient.forEach(
      recipeIngredient => {
        // tslint:disable-next-line:no-shadowed-variable
        const element: Ingredient = recipeIngredient.ingredient;
        const qty: number = recipeIngredient.quantity;
        // console.log('dataCacul : ingr ' + element.name + ' ' + (element.energy / 100.0) + ' Kcal' + ' * ' + qty + 'gr');
        this.energy += (element.energy / 100.0) * qty;
        this.water += (element.water / 100.0) * qty;
        this.protein += (element.protein / 100.0) * qty;
        this.glucid += (element.glucid / 100.0) * qty;
        this.lipid += (element.lipid / 100.0) * qty;
        this.sugar += (element.sugar / 100.0) * qty;
        this.amidon += (element.amidon / 100.0) * qty;
        this.fiber += (element.fiber / 100.0) * qty;
        this.unsaturedFattyAcides += (element.unsaturedFattyAcides / 100.0) * qty;
        this.monoUnsaturedFattyAcides += (element.monoUnsaturedFattyAcides / 100.0) * qty;
        this.polyUnsaturedFattyAcides += (element.polyUnsaturedFattyAcides / 100.0) * qty;
        this.salt += (element.salt / 100.0) * qty;
        this.glycemicIndex += (element.glycemicIndex / 100.0) * qty;
        this.glycemicLoad = Math.round((this.glucid * this.glycemicIndex)) / 100;
      });
      // console.log('dataCalcul : Total energy ' + this.energy);
      // console.log('-------- DATA CALCUL END -----------------');
      // console.log('');
  }

}
