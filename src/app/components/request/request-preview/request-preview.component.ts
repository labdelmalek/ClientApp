import { Component, OnInit, Input } from '@angular/core';
import { requestcc } from 'src/app/Models/requestcc';
import { Requestcb } from 'src/app/Models/Requestcb';

@Component({
  selector: 'app-request-preview',
  templateUrl: './request-preview.component.html',
  styleUrls: ['./request-preview.component.css']
})
export class RequestPreviewComponent implements OnInit {
@Input() Ccrequest : Array<requestcc>;
@Input() Cbrequest : Array<Requestcb>;
  constructor() { }

  ngOnInit() {
  }

}
