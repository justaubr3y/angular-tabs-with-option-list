import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  characters = [
    {name: 'Daenerys', house: ''},
    {name: 'Jon', house: ''},
    {name: 'Jamie', house: ''},
    {name: 'Lady Olenna', house: ''}
  ];
  chosenList = 'all';
  constructor() { }

  ngOnInit() {
  }

  onChoose(house) {
    this.chosenList = house;
  }

  getCharacters() {
    if(this.chosenList === 'all') {
      return this.characters.slice();
    }
    return this.characters.filter((char) => {
      return char.house === this.chosenList;
    })
  }
}