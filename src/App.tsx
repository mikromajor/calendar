import { AlcoCounter, Salary } from "./components";

//TODO: first users feedback
//ok 1-исправить баг переключения языка при смене года
//ok 2-добавить значения величин в контекст
//ok 3-исправить перевод контекста
//ok 4-изменить коэффициенты на боле понятные пользователю
//nok 5-relocate to vite or ... (error)

function App() {
  return (
    <>
      <AlcoCounter />
      <Salary />
    </>
  );
}
export default App;
