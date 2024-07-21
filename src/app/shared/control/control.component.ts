import { afterNextRender, afterRender, Component, ContentChild, ElementRef, HostBinding, inject, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control'
  }
})
export class ControlComponent {
  constructor() {
    afterRender(()=>{
      console.log('afterRender'); // whenver any changes anywhare in entire angular application
    });
    afterNextRender(()=>{
      console.log('after Next Render'); // after a next change any where in entire angular application
    });
  }
//@HostBinding('class') className = 'control';
@Input ({required:true}) label!:string;
private el = inject(ElementRef);
@ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>; // selecting ng projection

onClick() {
console.log('Clicked!');
console.log(this.el);

}
}
