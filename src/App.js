import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient'; // Убедитесь, что у вас есть настроенный Apollo Client
import RegistrationForm from './components/RegistrationForm'; // Путь к вашему компоненту формы регистрации

function App() {
    return (
        <ApolloProvider client={client}>
            <div className="App">
                <header className="App-header">
                    <h1>Registration Form</h1>
                </header>
                <main>
                    <RegistrationForm />
                </main>
            </div>
        </ApolloProvider>
    );
}

export default App;