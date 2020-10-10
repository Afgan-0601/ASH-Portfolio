import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Context from '../context/Context'
import DispatchContext from '../context/DispatchContext'
import { StyledMenu } from '../styles/StyledMenu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const Menu = () => {
  const { setMenu} = useContext(DispatchContext)
  const { menu} = useContext(Context)

  return (
    <StyledMenu menu={menu}>
      <FontAwesomeIcon className="cancel" icon={faTimes} onClick={() => setMenu(0)} />
      <div className="box box-1">
        <Link to="/ui-testing" onClick={() => setMenu(0)}>
          UI TESTING
        </Link>
      </div>
      <div className="box box-2">
        <Link to="/api-testing" onClick={() => setMenu(0)}>
          API TESTING
        </Link>
      </div>
      <div className="box box-3">
        <Link to="/ci-cd" onClick={() => setMenu(0)}>
          CI/CD
        </Link>
      </div>
      <div className="box box-4">
        <Link to="/blog" onClick={() => setMenu(0)}>
          BLOG
        </Link>
      </div>
      <div className="box box-5">
        <Link to="/contact" onClick={() => setMenu(0)}>
          CONTACT
        </Link>
      </div>
      <div className="box box-6">
        <Link to="/about" onClick={() => setMenu(0)}>
          ABOUT
        </Link>
      </div>
    </StyledMenu>
  )
}

export default Menu
