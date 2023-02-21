import logo from "./logo.svg";
import "./App.css";
import { IdentityViewPage } from "./pages/IdentityViewPage/IdentityViewPage";
import { Login } from "./pages/LoginPage/Login";
import { ClaimIssuerPage } from "./pages/ClaimIssuerPage/ClaimIssuerPage";
import styles from "./app.module.css";

const { parent } = styles;

function App() {
  return (
    <div className={parent}>
      {/* <IdentityViewPage/> */}
      {/* <Login/> */}
      {<ClaimIssuerPage />}
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
