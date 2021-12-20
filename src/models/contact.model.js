export class Contact {
  id = 0;
  name = '';
  isOnline = false;

  constructor(name, isOnline, id) {
    this.name = name;
    this.isOnline = isOnline;
    this.id = id;
  }
}
