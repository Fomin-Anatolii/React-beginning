import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import Users from "./components/layouts/users.jsx"
import Main from "./components/layouts/main"
import Login from "./components/layouts/login.jsx"
import NavBar from "./components/ui/navBar"
import EditUserPage from "./components/page/editUserPage/editUserPage"
function App() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/login/:type?" component={Login} />
                <Route path="/users/:usersID/edit" component={EditUserPage} />
                <Route path="/users/:usersID?" component={Users} />
                <Redirect to="/" />
            </Switch>
        </div>
    )
}

export default App
