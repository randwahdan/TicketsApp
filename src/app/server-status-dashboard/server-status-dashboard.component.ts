import { Component, DestroyRef, inject, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './server-status-dashboard.component.html',
  styleUrl: './server-status-dashboard.component.css'
})
export class ServerStatusDashboardComponent implements OnInit{
  currentStatus: 'online'| 'offline'| 'unknown' = 'online';
  // private interval?: ReturnType<typeof setInterval>;
  private destroyRef = inject(DestroyRef);

  constructor(){}

  ngOnInit(){
    console.log('ON INIT');
    const interval = setInterval(()=>{
    const rnd = Math.random(); // 0-0.999999999
    if (rnd < 0.5) {
      this.currentStatus ='online';
    } else if (rnd <0.9) {
      this.currentStatus ='offline';
    } else {
      this.currentStatus = 'unknown';
    }
    } , 5000);
    this.destroyRef.onDestroy(()=>{
      clearInterval(interval);
    });
  }

  // ngOnDestroy(){
  //   clearTimeout(this.interval);
  // }

}
