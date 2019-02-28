import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnChanges {
  @Input() searchText:string;
  @Output() search:EventEmitter<string> = new EventEmitter();
  showSearch:boolean = false;
  constructor() { }

  ngOnChanges() {
    
  }

  toggleSearch(){
    if(this.searchText == ""){
      this.showSearch=!this.showSearch;
    }
  }
  update(){
    this.search.emit(this.searchText);
  }

}
