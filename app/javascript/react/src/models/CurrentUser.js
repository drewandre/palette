import { observable, computed } from 'mobx';
import { observer } from 'mobx-react';

export default class CurrentUser {
  id = null;
  store = null;
  @observable admin = false;
  @observable updated_at = "";
  @observable current_product_name = false;
  @observable email = "";
  @observable first_name = false;
  @observable last_name = "";
  @observable handle = "";

  constructor(store, id, admin, updated_at, current_product_name, email, first_name, last_name, handle) {
    this.store = store;
    this.id = id;
    this.admin = admin;
    this.email = email;
    this.updated_at = updated_at;
    this.current_product_name = current_product_name;
    this.first_name = first_name;
    this.last_name = last_name;
    this.handle = handle;
  }
}
