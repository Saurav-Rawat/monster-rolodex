import { Component } from "react";

// export default class Card extends Component {
//   render() {
//     const {
//       monster: { id, name, email },
//     } = this.props;

//     return (
//       <div className="card-container" key={id}>
//         <img
//           src={`https://robohash.org/${id}?set=set2&size=180x180`}
//           alt={`monster ${name}`}
//         />
//         <h2>{name}</h2>
//         <p>{email}</p>
//       </div>
//     );
//   }
// }

// functional component
export const Card = ({ monster: { id, name, email } }) => {
  return (
    <div className="card-container" key={id}>
      <img
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt={`monster ${name}`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};
