import React from 'react'
import './style.scss'

class SitePage extends React.Component {
  componentDidMount() {
    let embedCode =
      '<script src="https://gist-it.appspot.com/github/va1t/sojourner/blob/master/server/server.js?slice=14:40&footer=0" />'
    $('#test').append(embedCode)
  }
  render() {
    const post = this.props.data.post
    return <div dangerouslySetInnerHTML={{ __html: post.html }} />
  }
}

export default SitePage
