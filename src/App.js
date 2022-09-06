import logo from "./logo.svg";
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";

function App({ signOut }) {
  return (
    <body>        
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '25vh'}}>
          <h1>Welcome to Nüber </h1>
      </div>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '125vh'}}>
        <Button onClick={signOut}>Sign Out</Button>
      </div>
    </body>
  );
}

export default withAuthenticator(App);