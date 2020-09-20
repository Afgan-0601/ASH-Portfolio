import React, { useContext } from 'react'
import { StyledSocialMedia } from '../styles/StyledSocialMedia'
import Context from '../context/Context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

const SocialMedia = () => {
  const { menu, home, portfolio, blog, contact, about } = useContext(Context)
  const date = new Date().getFullYear()

  return (
    <StyledSocialMedia home={home}>
      <div className="container">
        <a href="#">
          <FontAwesomeIcon className="icon" icon={faFacebookF} />
        </a>
        <a href="#">
          <FontAwesomeIcon className="icon" icon={faTwitter} />
        </a>
        <a href="#">
          <FontAwesomeIcon className="icon" icon={faGithub} />
        </a>
      </div>
      <div className="credit">
        <p>
          <span>&copy;</span> Afghan Shahguliyev • {date}
        </p>
      </div>
    </StyledSocialMedia>
  )
}

export default SocialMedia
