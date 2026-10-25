import React from 'react'
import withAuth from '../utils/withAuth'

function Profile({name, role}) {
    use
  return (
    <div>Profile Page

        <p>Name : {name}</p>
        <p>Role : {role}</p>
        
    </div>

  )
}

export const AuthProfile = withAuth(Profile)