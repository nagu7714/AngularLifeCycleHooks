import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges , DoCheck , AfterContentInit , AfterContentChecked, AfterViewInit , AfterViewChecked, OnDestroy {

  @Input() userName = '';
  @ViewChild('wrapper') wrapper!: ElementRef;
  @ContentChild('contentWrapper') content!: ElementRef;
 

ngOnInit(): void {
  console.log('ngOninit from Child Component');
}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges triggered', changes);

    if(!changes['userName'].isFirstChange()){
      if(changes['userName'].currentValue='Chris'){
        this.userName= 'Hello '+ this.userName;        
      }
      else{
        this.userName=changes['userName'].previousValue;
      }
    }
  }

  ngDoCheck(): void {
    console.log('ngDoCheck triggered from child component');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit - wrapper', this.wrapper);
     console.log('ngAfterContentInit - contentWrapper', this.content);
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked triggered');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit -  wrapper ' + this.wrapper);
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked triggered');
  }
  ngOnDestroy(): void {
    console.log('Child component is destroyed! :(');
  }

}
