import React from 'react'
//IMPORTANDO REACT ROUTER DOM
import { BrowserRouter, Route, Switch } from 'react-router-dom'
//IMPORTANDO COMPONENTES PADRES (PÁGINAS)
import Users from '../pages/Users'
import Posts from '../pages/Posts'
import Albums from '../pages/Albums'
import TodosUser from '../pages/TodosUser'
import Welcome from '../pages/Welcome'
import NotFound from '../pages/404'
//IMPORTANDO COMPONENTES HIJOS
import User from '../pages/User'
import Post from '../pages/Post'
import Album from '../pages/Album'


const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/welcome" component={Welcome} />
            <Route exact path="/users" component={Users} />
            <Route exact path="/posts" component={Posts} />
            <Route exact path="/albums" component={Albums} />
            <Route exact path="/users/:id" component={User} />
            <Route exact path="/posts/:id" component={Post} />
            <Route exact path="/albums/:id/photos" component={Album} />
            <Route exact path="/users/:id/todos" component={TodosUser} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)

export default App