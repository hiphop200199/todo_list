import { Component } from '@angular/core';
import { LocalstorageService } from '../localstorage.service';
import { FormsModule } from '@angular/forms';
import { list } from '../list/list.interface';

//ngModel指令依附在FormsModule模組，所以需要引用模組，ngModel不能再跟{{}}並用
@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.scss',
})
export class InputFieldComponent {
  constructor(private localStorageService: LocalstorageService) {}
  inputText:string='';
  lists:list[]|null=[];
  jsonString:any;
  addTodo():void{
    if(this.inputText!==''){
    
      this.jsonString =  this.localStorageService.getItem("todo");
      this.lists = JSON.parse(this.jsonString);
      let newTodo :list={
        id:crypto.randomUUID(),
        content:this.inputText,
        date:new Date().toLocaleString()
      };
      if(this.lists!==null&&this.lists.length>0){
      this.lists =  [...this.lists,newTodo];
      }else{
        this.lists = [newTodo];
      }
      
      this.localStorageService.setItem('todo',JSON.stringify(this.lists));
      this.inputText='';
    }
    console.log('enter something.');
  }
}
