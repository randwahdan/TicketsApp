import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, output, Output, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';
import { ControlComponent } from "../../shared/control/control.component";
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent,FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  ngOnInit() {
    console.log('ONINIT');
    console.log(this.form().nativeElement);
  }
  // @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  // private form = ViewChild(ButtonComponent); //selecte element by component
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form'); //selecte element by template variable
  // @Output() add = new EventEmitter();
  add = output<{title: string; text:string}>();

  onSubmit(title: string, ticketText: string) {
    this.add.emit({title: title,text: ticketText});
  }
  ngAfterViewInit() {
    console.log('AFTER VIEW INIT');
    console.log(this.form().nativeElement);
  }

}
