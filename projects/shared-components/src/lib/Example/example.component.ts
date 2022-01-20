import { Component, Input, OnInit } from '@angular/core';
import 'design-system/main.css';

@Component({
  selector: 'lib-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  @Input() exInput: string = '';


  constructor() { }

  ngOnInit(): void {
  }

}
