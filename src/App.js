import './App.css';
import MainPage from "./pages/mainPage/MainPage";
import AboutPage from "./pages/aboutPage/AboutPage";
import UsersPage from "./pages/usersPage/UsersPage";


function App() {
    const text =  {title: "Title", descr: "text text text"}
    const users = [{name: "Anna", age: 20}, {name: "Klara", age: 30}, {name: "Sofia", age: 25}]

    const randomText = 'Aruuke'

  return (
    <div className="App">
        <MainPage text={randomText}/>
        <AboutPage text={text}/>
        <UsersPage users={users}/>
    </div>
  );
}

export default App;
