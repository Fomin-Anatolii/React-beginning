import React from "react"
import { Switch, Route } from "react-router-dom"
import Users from "./components/layouts/users.jsx"
import Main from "./components/layouts/main"
import Login from "./components/layouts/login.jsx"
import NavBar from "./components/navBar"

function App() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/login" component={Login} />
                <Route path="/users/:usersID?" component={Users} />
            </Switch>
        </div>
    )
}

export default App
