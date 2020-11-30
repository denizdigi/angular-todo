export class Model {
  //export ile dışa açıp, dışarıda import ile çağıracağız
  user;
  items;

  constructor() { //default -ilk yüklenirken atama yapıldı
    this.user = 'dev'; //this.model.user ile çağırılabilir component.ts'de
    this.items = [
      new TodoItem('Kahvaltı', false),
      new TodoItem('Spor', true),
      new TodoItem('Sinema', false),
      new TodoItem('Fatura', false),
    ];
  }
}

export class TodoItem {
  description;
  action;

  constructor(description, action) {
    //dışarıdan prm alacak
    this.description = description;
    this.action = action;
  }
}
