import React from 'react'
import { Link } from 'react-router-dom'
import { StyledBlogBox } from '../styles/StyledBlogBox'

const BlogBox = ({ id, title, image, content, description }) => {
  return (
    <StyledBlogBox image={image}>
      <div className="image">
        <img src={image} alt=""/>
      </div>
      <div className="description">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to={`/blog/${id}`}>
          <button> READ MORE </button>
        </Link>
      </div>
    </StyledBlogBox>
  )
}

export default BlogBox
