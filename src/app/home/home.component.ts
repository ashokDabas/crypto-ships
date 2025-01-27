import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  ships:any = [
    {
      name:"ship1",
      model:"s111"
    },{
      name:"ship2",
      model:"s222"
    },{
      name:"ship3",
      model:"s333"
    }
  ]
  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}
 
  
  ngOnInit(): void {
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
