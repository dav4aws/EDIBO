import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bildes',
  templateUrl: './bildes.component.html',
  styleUrls: ['./bildes.component.css']
})
export class BildesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isVisable = true;
  imageSrc = [];

  increaseimgCount(){
      const id = this.generateID();
      this.imageSrc.push(
        `https://picsum.photos/id/${id}/200`
      );
  }

  private generateID(){
    const MAXRANGE = 300;
    return Math.round(Math.random() * MAXRANGE) + 1;
  }

}
