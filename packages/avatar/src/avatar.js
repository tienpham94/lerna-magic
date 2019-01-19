import React from 'react'

const Avatar = ({ className, ...props }) => (
  <img className={["avatar", className].join("")} {...props}/>
)

export default Avatar