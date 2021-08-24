import { Component, OnInit } from '@angular/core';
import { TrmService } from '../alquiler/shared/service/trm.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  trm;
  constructor(private trmService: TrmService) { }

  ngOnInit() {
    this.trmService.getTMR().subscribe((res: any) => { this.trm = res[0].valor; console.log(this.trm); });
  }

}
