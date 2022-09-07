import React from 'react'
import './App.css'
import "@aws-amplify/ui-react/styles.css";

import {
  withAuthenticator,
  Button,
} from "@aws-amplify/ui-react";

function App({ signOut }) {
  return (
    <body>        
      <div class="title">
          <h1>Welcome to Nüber!</h1>
      </div>
      
      <div class="heading">
        <h2>What are you registering as?</h2>
      </div>
      
      <div class="button">
        <Button onClick={false}>User</Button>
        &nbsp;&nbsp;&nbsp;
        <Button onClick={false}>Driver</Button>
      </div>

      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '130vh'}}>
        <Button onClick={signOut}>Sign Out</Button>
      </div>
    </body>
  );
}

export default withAuthenticator(App);