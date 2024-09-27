import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { LocalstorageService } from '../localstorage.service';
import { NgFor } from '@angular/common';
import { list } from './list.interface';
import { FormsModule } from '@angular/forms';

//在模板使用指令、管線時，需要引用、在imports陣列填上該指令
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent implements OnInit, AfterContentChecked {
  constructor(private localStorageService: LocalstorageService) {}
  lists: list[] | null = [];
  jsonString: any;

  editTodo(todo: list): void {}
  deleteTodo(todo: list): void {
    // this.localStorageService.removeItem(id);
  }
  ngOnInit(): void {
    this.jsonString = this.localStorageService.getItem('todo');
    this.lists = JSON.parse(this.jsonString);
    console.log(this.lists);
  }
  ngAfterContentChecked(): void {
    this.jsonString = this.localStorageService.getItem('todo');
    this.lists = JSON.parse(this.jsonString);
    console.log(this.lists);
  }
}
