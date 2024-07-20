import { Component } from '@angular/core';

@Component({
  selector: 'app-server-status-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './server-status-dashboard.component.html',
  styleUrl: './server-status-dashboard.component.css'
})
export class ServerStatusDashboardComponent {
  currentStatus = 'online';

}
