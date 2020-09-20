import React, { useContext, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { StyledBlogPage } from '../styles/StyledBlogPage'
import Context from '../context/Context'
import DispatchContext from '../context/DispatchContext'
import BlogBox from '../components/BlogBox'
import blogposts from '../data/blogposts'

const BlogPage = () => {
  const { setMenu, setHome, setPortfolio, setBlog, setContact, setAbout } = useContext(DispatchContext)
  const { menu, home, portfolio, blog, contact, about } = useContext(Context)

  useEffect(() => {
    setAbout(0)
    setHome(0)
    setPortfolio(0)
    setBlog(1)
    setContact(0)
  }, [])

  return (
    <StyledBlogPage menu={menu}>
      <Helmet>
        <title>Portfolio | Blog posts </title>
        <meta name="description" content="My projects related to API Testing" />
        <meta name="theme-color" content="#9A48D2" />
      </Helmet>
      <div className="title">
        <h1>Blog</h1>
      </div>
      {blogposts.map(blog => (
        <BlogBox id={blog.id} key={blog.id} title={blog.title} description={blog.description} image={blog.image} />
      ))}
    </StyledBlogPage>
  )
}

export default BlogPage
