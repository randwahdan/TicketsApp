import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { ServerStatusDashboardComponent } from "./server-status-dashboard/server-status-dashboard.component";
import { TraficDashboardComponent } from "./trafic-dashboard/trafic-dashboard.component";
import { SupportTicketsDashboardComponent } from "./tickets/support-tickets-dashboard.component";
import { DashboardItemComponent } from "./dashboard-item/dashboard-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, ServerStatusDashboardComponent, TraficDashboardComponent, SupportTicketsDashboardComponent, DashboardItemComponent],
})
export class AppComponent {

}
