import { makeAutoObservable } from "mobx";
import {
  AppThemes,
  AppLanguages,
  User,
} from "../types/appTypes";
import { AlcoState } from "../types/alcoTypes";
import { SalaryInit } from "../types/salaryTypes";
import { SALARY_INIT } from "../constants/salaryConstants";
import { INIT_ALCO_STATE } from "../constants/alcoConstants";

//Main task:
// all data calculate & save on the server, get new data from the server,
// on client side save only token

export default class AppStore {
  _currentLang: AppLanguages;
  _currentTheme: AppThemes;
  _isLoading: boolean;
  _error: string;
  _salary: SalaryInit;
  _alcoYear: AlcoState;

  constructor() {
    this._currentLang = AppLanguages.EN;
    this._currentTheme = AppThemes.WHITE;
    this._isLoading = false;
    this._error = "";
    this._salary = SALARY_INIT;
    this._alcoYear = INIT_ALCO_STATE;

    makeAutoObservable(this);
  }

  setCurrentLang(lang: AppLanguages) {
    this._currentLang = lang;
  }
  setCurrentTheme(theme: AppThemes) {
    this._currentTheme = theme;
  }
  setIsLoading(load: boolean) {
    this._isLoading = load;
  }
  setError(error: string) {
    this._error = error;
  }
  setSalary(salary: SalaryInit) {
    this._salary = salary;
  }
  setAlcoYear(alcoYear: AlcoState) {
    this._alcoYear = alcoYear;
  }
  get currentLang() {
    return this._currentLang;
  }
  get currentTheme() {
    return this._currentTheme;
  }
  get isLoading() {
    return this._isLoading;
  }
  get error() {
    return this._error;
  }
  get salary() {
    return this._salary;
  }
  get alcoYear() {
    return this._alcoYear;
  }
}
