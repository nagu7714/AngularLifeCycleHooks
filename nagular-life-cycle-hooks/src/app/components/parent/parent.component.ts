import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  userName='Nagaraj'
  isChildDestroyed = false;
  constructor() { }

  ngOnInit(): void {
    
    console.log('ngOninit from parent component');
  }

  updateUser() {
    this.userName = 'Chris';
 }

 destroy(){
       this.isChildDestroyed=true;
 }

}
