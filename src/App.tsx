import React from 'react';
import {Authenticator, Button} from '@aws-amplify/ui-react';
import "@aws-amplify/ui-react/styles.css"
import "./App.css"
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";

Amplify.configure(awsExports);

export default function App() {
    return (
        <Authenticator>
            {
                ({signOut, user}) =>
                    <main>
                        <h1>Hello {user.username}</h1>
                        <Button onClick={signOut}>Sign out</Button>
                    </main>
            }
        </Authenticator>
    )
}
