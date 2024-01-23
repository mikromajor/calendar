import { AlcoCalendar, Salary } from "./components";

//TODO: first users feedback
//1-исправить баг переключения языка при смене года
//2-добавить значения величин в контекст
//3-исправить перевод контекста
//4-изменить коэффициенты на боле понятные пользователю
//5-relocate to vite or ...

function App() {
  return (
    <>
      <AlcoCalendar />
      <Salary />
    </>
  );
}
export default App;
