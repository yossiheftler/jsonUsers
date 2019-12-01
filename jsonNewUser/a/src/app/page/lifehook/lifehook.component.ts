import { Component,OnChanges ,OnInit ,DoCheck, AfterContentChecked ,AfterViewInit,  
  AfterViewChecked, OnDestroy, SimpleChanges
 } from '@angular/core';

@Component({
  selector: 'app-lifehook',
  templateUrl: './lifehook.component.html',
  styleUrls: ['./lifehook.component.css']
})
export class LifehookComponent implements OnInit, OnChanges,
OnInit,
DoCheck,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {

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
