import React, { useContext, useEffect, useState } from 'react'
import blogposts from '../data/blogposts'
import { StyledSinglePost } from '../styles/StyledSinglePost'
import { useParams } from 'react-router-dom'
import Context from '../context/Context'
import DispatchContext from '../context/DispatchContext'
import ScrollUpButton from '../components/ScrollUpButton'

const SinglePost = ({ id }) => {
  const { setLoading, setHome, setPortfolio, setBlog, setContact, setAbout } = useContext(DispatchContext)
  const { menu, loading } = useContext(Context)

  useEffect(() => {
    window.scrollTo(0, 0)
    setAbout(0)
    setHome(0)
    setPortfolio(0)
    setBlog(1)
    setContact(0)
  }, [])

  const postFromUrl = useParams()
  const postId = Number(postFromUrl.id)
  const selectedPost = blogposts.find((post) => post.id === postId)

  return (
    <StyledSinglePost menu={menu}>
      <div className="card">
        <div className="title">
          <h1>{selectedPost.title}</h1>
        </div>
        <div className="image">
          <img src={selectedPost.image} alt="" />
        </div>

        <div className="text">
          <div className="body">{selectedPost.content}</div>
          <ScrollUpButton />
        </div>
      </div>
    </StyledSinglePost>
  )
}

export default SinglePost
