import { makeAutoObservable } from "mobx";
import { IUser } from "../types/appTypes";

export default class UserStore {
  _isAuth: boolean;
  _user: IUser | null;

  constructor() {
    this._isAuth = false;
    this._user = null;
    makeAutoObservable(this);
  }

  setIsAuth(bool: boolean) {
    this._isAuth = bool;
  }
  setUser(user: IUser) {
    this._user = user;
  }

  get isAuth() {
    return this._isAuth;
  }
  get user() {
    return this._user;
  }
}
