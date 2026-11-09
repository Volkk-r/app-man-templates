import { makeAutoObservable } from 'mobx';

class ApartmentFormStore {
  constructor() {
    makeAutoObservable(this);
  }
}

export const apartmentFormStore = new ApartmentFormStore();
