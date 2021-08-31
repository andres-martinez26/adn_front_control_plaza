import { Component, OnInit } from '@angular/core';
import { TrmService } from '../../../feature/alquiler/shared/service/trm/trm.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  trm: any;
  constructor(protected trmService: TrmService) { }

  async ngOnInit() {
    const date = new Date();
    let dateTime = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    let res: any = await this.getTRM(dateTime);
    console.log(res);
    if (res.length === 0) {
      date.setDate(date.getDate() - 1);
      dateTime = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
      res = await this.getTRM(dateTime);
    }
    this.trm = res[0].valor;
  }

  getTRM(dateTime: string) {
    return new Promise((resolve) => {
      this.trmService.getTMR(dateTime).subscribe((res: any) => {
        resolve(res);
      });
    });
  }

}
