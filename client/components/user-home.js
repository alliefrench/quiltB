import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import UserProjects from './userProjects'
import {AddProjectForm} from './createProject'
import {createBrowserHistory} from 'history'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email} = props
  const history = createBrowserHistory()

  return (
    <div id="userHome">
      <h3>Welcome, {email}</h3>
      <UserProjects />
      <AddProjectForm />
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
