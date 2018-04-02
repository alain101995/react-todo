import { observable, action } from 'mobx';

class AppStore {
    @observable name = 'Alain';
}

export default new AppStore();
