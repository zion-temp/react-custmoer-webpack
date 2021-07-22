import { observable,action,makeAutoObservable} from "mobx";


class HomeStore {
    constructor(){
      makeAutoObservable(this)
    }
    @observable homeNum = 0;
    @action addNum() {
      this.homeNum += 1;
    }
    @action lessNum() {
      this.homeNum -= 1;
    }
}
export default HomeStore;