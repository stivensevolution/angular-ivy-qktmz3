import { HttpClient } from '@angular/common/http';
import { Component, VERSION } from '@angular/core';
import { OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

export class NgbdModalContent {
  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient, private modalService: NgbModal) {}

  name = 'Angular ' + VERSION.major;
  data: any = [];
  dataView: any = [];

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.http
      .get('https://jsonplaceholder.typicode.com/posts')
      .subscribe((res) => {
        this.data = res;
      });
  }

  show(id: any) {
    this.modalService.open(id);
    this.http
      .get('https://jsonplaceholder.typicode.com/posts/' + id)
      .subscribe((res) => {
        this.dataView = res;
      });
  }
}
