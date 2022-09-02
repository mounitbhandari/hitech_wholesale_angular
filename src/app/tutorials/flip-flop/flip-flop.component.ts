import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-flip-flop',
  templateUrl: './flip-flop.component.html',
  styleUrls: ['./flip-flop.component.scss']
})
export class FlipFlopComponent implements OnInit {
  checked: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  fontSize = 14;
  // @ViewChild('para', { static: true }) para: ElementRef | undefined;
  // changeFont(operator: string) {
  //   operator === '+' ? this.fontSize++ : this.fontSize--;
  //   // @ts-ignore
  //   (this.para.nativeElement as HTMLParagraphElement).style.fontSize = `${this.fontSize}px`;
  //
  // }
  circuitType: any;
}
