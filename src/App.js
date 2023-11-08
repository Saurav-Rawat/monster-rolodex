import "./App.css";
import { Component, useEffect, useState } from "react";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";

// class App extends Component {
//   // https://jsonplaceholder.typicode.com/users
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   async componentDidMount() {
//     const users = await (
//       await fetch("https://jsonplaceholder.typicode.com/users")
//     ).json();

//     this.setState(() => {
//       return { monsters: users };
//     });
//   }

//   onSearchChange = (event) => {
//     this.setState({
//       searchField: event.target.value.toLocaleLowerCase(),
//     });
//   };

//   render = () => {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) =>
//       monster.name.toLocaleLowerCase().includes(searchField)
//     );

//     return (
//       <div className="App">
//         <h1 className="app-title">Monster rolodex</h1>
//         <SearchBox
//           onChangeHandler={onSearchChange}
//           placeholder="search monsters"
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   };
// }

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  const onSearchChange = (event) => {
    const value = event.target.value.toLocaleLowerCase();
    setSearchField(value);
  };

  useEffect(() => {
    const getUsers = async () => {
      const users = await (
        await fetch("https://jsonplaceholder.typicode.com/users")
      ).json();

      setMonsters(users);
    };

    getUsers();
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(searchField)
    );

    setFilteredMonsters(newFilteredMonsters);
  }, [searchField, monsters]);

  return (
    <div className="App">
      <h1 className="app-title">Monster rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
