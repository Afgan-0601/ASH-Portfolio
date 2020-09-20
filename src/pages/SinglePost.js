import React from 'react'
import blogposts from '../data/blogposts'
import { useParams } from 'react-router-dom'

const SinglePost = ({ id }) => {
  const postFromUrl = useParams()
  const postId = Number(postFromUrl.id)
  const selectedPost = blogposts.find(post => post.id === postId)

  return (
    <>
      <h1>{selectedPost.title}</h1>
      <img src={selectedPost.image} alt="" />
      <div className="body">{selectedPost.content}</div>
    </>
  )
}

export default SinglePost
