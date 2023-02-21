import logo from './logo.svg';
import './App.css';
import { IdentityViewPage } from './pages/IdentityViewPage/IdentityViewPage';
import { Login } from './pages/LoginPage/Login';
import styles from './app.module.css'
import { ClaimCheckerPage } from './pages/ClaimCheckerPage/ClaimCheckerPage';

const {parent}=styles;

function App() {
  return (
    <div className={parent} >
      <ClaimCheckerPage/>
        {/*<IdentityViewPage/>*/}
        {/* <Login/> */}
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
