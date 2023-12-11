import { Component, Input, Output,EventEmitter } from '@angular/core';
import { CategoryDto } from 'src/app/services/api/fredob2b/models';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent  {
  @Input() categoriesList: CategoryDto[] | undefined ;
  @Output() selectCategoryEvent = new EventEmitter<CategoryDto>();
 
  selectedCategory:number | undefined;
 
  
  
 
 

onClickCategory(category:CategoryDto){
  this.selectedCategory = category.id!;
  this.selectCategoryEvent.emit(category)
 
}

}
