import { Component } from '@angular/core';
import { Model, TodoItem } from './model';

@Component({
  selector: 'app-root', //componenti çağırmak için gerekli tag-bu index.html'de kullanılmış
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //değişken ve metodlar burada
  title = 'todo'; //noktalı virgül var

  //bunları modele taşıyabiliriz
  // user = 'Devs';
  // items= [
  //   { description: 'Kahvaltı', action: 'No' },
  //   { description: 'Sinema', action: 'No' },
  //   { description: 'Spor', action: 'No' },
  //   { description: 'Fatura', action: 'No' }
  // ];

  model = new Model(); //import edildi otomatik yukarıda
  getName() {
    return this.model.user;
  }
  getItems() {
    //html'de let item of getItems() olarak çağırılabilir
    if (this.isDisplay) {
      return this.model.items; //filtrelenmeden hepsi gelsin
    }
    return this.model.items.filter((item) => !item.action); //filtreler sadece no olanlar gelir
  }
  addItem(value) {
    if (value != '') {
      this.model.items.push(new TodoItem(value, false)); //yeni item (description, action şeklinde)
    }
  }
  isDisplay = false;
}
