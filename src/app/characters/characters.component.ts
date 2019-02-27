import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  @Input() character;

  constructor() { }

  ngOnInit() {
  }

  onAssign(house) {
    this.character.house = house;
  }
}