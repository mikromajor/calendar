import {
  UserThemes,
  UserLanguages,
} from "../types/userTypes";

export const INIT_USER_STATE = {
  currentLang: UserLanguages.UA,
  currentTheme: UserThemes.WHITE,
};

export const TOP_MENU_CONTENT = {
  [UserLanguages.EN]: {
    lblTheme: "Theme",
    goToAlcoCalc: "Alcohol calendar",
    goToSalary: "Salary",
    lblLang: "Change language:",
    [UserThemes.DARK]: "Black",
    [UserThemes.WHITE]: "White",
    registration: "Registration",
    login: "Login",
    logout: "Logout",
    confirfLogout: "You really want to log out?",
    logoutYes: "YES",
    logoutNo: "NO",
  },
  [UserLanguages.PL]: {
    lblTheme: "Theme",
    goToAlcoCalc: "Alcocalendarz",
    goToSalary: "Wypłata",
    lblLang: "Zmień język",
    [UserThemes.DARK]: "Ciemna",
    [UserThemes.WHITE]: "Światła",
    registration: "Zarejestruj sie",
    login: "Login",
    logout: "Logout",
    confirfLogout: "Napewno chcesz wylogowac się?",
    logoutYes: "TAK",
    logoutNo: "NIE",
  },
  [UserLanguages.UA]: {
    lblTheme: "Tема",
    goToAlcoCalc: "Алкокалендар",
    goToSalary: "Зарплата",
    lblLang: "Змінити мову",
    [UserThemes.DARK]: "Темна",
    [UserThemes.WHITE]: "Світла",
    registration: "Реєстрація",
    login: "Логін",
    logout: "Вихід",
    confirfLogout: "Чи насправді хочеш вийти?",
    logoutYes: "ТАК",
    logoutNo: "НІ",
  },
};

export const LANGUAGES_LIST = Object.keys(
  TOP_MENU_CONTENT
) as (keyof typeof UserLanguages)[];
