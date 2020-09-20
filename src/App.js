import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { GlobalStyle } from './styles/GlobalStyle'
import Context from './context/Context'
import DispatchContext from './context/DispatchContext'
import Navigation from './components/Navigation'
import IndexPage from './pages/IndexPage'
import AboutPage from './pages/AboutPage'
import Menu from './components/Menu'
import SocialMedia from './components/SocialMedia'
import ContactPage from './pages/Contact'
import UiTesting from './pages/UiTesting'
import ApiTesting from './pages/ApiTesting'
import BlogPage from './pages/BlogPage'
import SinglePost from './pages/SinglePost'

function App() {
  // controlling the movement of menu boxes
  const [menu, setMenu] = useState(false)

  // controlling the color of navigation li items
  const [home, setHome] = useState(0)
  const [portfolio, setPortfolio] = useState(0)
  const [blog, setBlog] = useState(0)
  const [about, setAbout] = useState(0)
  const [contact, setContact] = useState(0)

  // toggling menu
  const toggleMenu = () => {
    if (menu === 1) {
      setMenu(0)
    } else if (!menu || menu === 0) {
      setMenu(1)
    }
  }

  return (
    <DispatchContext.Provider value={{ setMenu, setHome, setPortfolio, setBlog, setAbout, setContact, toggleMenu }}>
      <Context.Provider value={{ menu, home, portfolio, blog, about, contact }}>
        <Router>
          <Navigation />
          <Menu />
          <Switch>
            <Route path="/" exact>
              <IndexPage />
            </Route>
            <Route path="/about" exact>
              <AboutPage />
            </Route>
            <Route path="/contact" exact>
              <ContactPage />
            </Route>
            <Route path="/ui-testing" exact>
              <UiTesting />
            </Route>
            <Route path="/api-testing" exact>
              <ApiTesting />
            </Route>
            <Route path="/blog" exact>
              <BlogPage />
            </Route>
            <Route path="/blog/:id">
              <SinglePost />
            </Route>
          </Switch>
        </Router>
        <GlobalStyle home={home} menu={menu} />
        <SocialMedia />
      </Context.Provider>
    </DispatchContext.Provider>
  )
}

export default App
