import { Component, OnChanges ,OnInit ,DoCheck, AfterContentChecked ,AfterViewInit,  
  AfterViewChecked, OnDestroy, SimpleChanges, Input} from '@angular/core';

@Component({
  selector: 'app-hook-grandson',
  templateUrl: './hook-grandson.component.html',
  styleUrls: ['./hook-grandson.component.css']
})
export class HookGrandsonComponent implements OnInit, OnChanges, DoCheck, AfterContentChecked,
 AfterViewInit,  AfterViewChecked,  OnDestroy {

  @Input() title:string= 'do title chenge';
  @Input() thing:object;
 
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error("Method not implemented.");
  }
  ngDoCheck(): void {
    throw new Error("Method not implemented.");
  }
  ngAfterContentChecked(): void {
    throw new Error("Method not implemented.");
  }
  ngAfterViewInit(): void {
    throw new Error("Method not implemented.");
  }
  ngAfterViewChecked(): void {
    throw new Error("Method not implemented.");
  }
  ngOnDestroy(): void {
    
    throw new Error("Method not implemented.");
  }
  constructor() { }
  
  ngOnInit() {
  }
  


}
