import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import AdminPage from './pages/AdminPage';
import UserPage from './pages/UserPage';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

const App: React.FC = () => {
    const userRole = 'user'; // This should come from your authentication logic

    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" exact component={Login} />
                {userRole === 'admin' && (
                    <Route path="/admin" exact component={AdminPage} />
                )}
                {userRole === 'user' && (
                    <Route path="/user" exact component={UserPage} />
                )}
                <Redirect from="/private" to={userRole === 'admin' ? "/admin" : "/user"} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    );
};

export default App;