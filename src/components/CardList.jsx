import { Component } from "react";
import { Card } from "./Card";

// class CardList extends Component {
//   render() {
//     const { monsters } = this.props;
//     return (
//       <>
//         <div className="card-list">
//           {monsters.map((monster) => (
//             <Card monster={monster} key={monster.id} />
//           ))}
//         </div>
//       </>
//     );
//   }
// }

// functional component
const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => (
        <Card monster={monster} key={monster.id} />
      ))}
    </div>
  );
};
export default CardList;
