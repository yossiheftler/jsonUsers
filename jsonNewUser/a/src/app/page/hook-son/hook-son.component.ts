import { Component, OnChanges ,OnInit ,DoCheck, AfterContentChecked ,AfterViewInit,  
  AfterViewChecked, OnDestroy, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-hook-son',
  templateUrl: './hook-son.component.html',
  styleUrls: ['./hook-son.component.css']
})
export class HookSonComponent implements OnInit,  OnChanges,
  OnInit,
  DoCheck,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

    @Input() title:string
    @Input() thing:object 
  constructor() { }
  ngOnChanges(changes:SimpleChanges): void {
    console.log('HookSonComponent ngOnChanges');
  }
  ngDoCheck(): void {
    
  }
  ngAfterContentChecked(): void {
  }
  ngAfterViewInit(): void {
  }
  ngAfterViewChecked(): void {
  }
  ngOnDestroy(): void {
    console.log('HookSonComponent ngOnDestroy');
  }
  

  ngOnInit() {
  }

}
