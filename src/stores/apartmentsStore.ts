import { makeAutoObservable } from 'mobx';

class ApartmentsStore {
  constructor() {
    makeAutoObservable(this);
  }
}

export const apartmentsStore = new ApartmentsStore();
