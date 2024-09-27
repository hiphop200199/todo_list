import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from '../localstorage.service';
import { NgIf } from '@angular/common';
import { list } from './list.interface';

//在模板使用指令時，需要引用、在imports陣列填上該指令
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NgIf],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit{
  constructor(private localStorageService:LocalstorageService){}
  list:list[]=[];
  ngOnInit(): void {
   
  }
  
}
