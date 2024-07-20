import { Component } from '@angular/core';
import { NewTicketComponent } from "./new-ticket/new-ticket.component";

@Component({
  selector: 'app-support-tickets-dashboard',
  standalone: true,
  imports: [NewTicketComponent],
  templateUrl: './support-tickets-dashboard.component.html',
  styleUrl: './support-tickets-dashboard.component.css'
})
export class SupportTicketsDashboardComponent {

}
