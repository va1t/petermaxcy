import React from 'react'

export default () => (
  <div id="columns">
    <figure>
      <figcaption>
        <div id="test" />
        <script
          dangerouslySetInnerHTML={{
            __html: `https://gist-it.appspot.com/github/va1t/sojourner/blob/master/server/server.js?slice=14:40&footer=0`,
          }}
        />
        <a
          href="https://github.com/va1t/sojourner/blob/master/server/server.js#L15-L40"
          target="_blank"
        >
          Server-Side JavaScript | &nbsp;GitHub
        </a>
      </figcaption>
    </figure>
    <figure>
      <figcaption>
        <a href="" target="_blank">
          SQL Queries | &nbsp;GitHub
        </a>
      </figcaption>
    </figure>
    <figure>
      <figcaption>
        <a href="" target="_blank">
          SQL Schemas | &nbsp;GitHub
        </a>
      </figcaption>
    </figure>
    <figure>
      <figcaption>
        <a href="/bio#bottom">Developer Tools | &nbsp;Bio</a>
      </figcaption>
    </figure>
    <figure>
      <figcaption>
        <a href="" target="_blank">
          Continuous Integration | &nbsp;GitHub
        </a>
      </figcaption>
    </figure>
  </div>
)
