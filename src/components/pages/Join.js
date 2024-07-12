import React from 'react'

function Join() {
  return (
   
<div className="authPage">
      <div className="containerPage">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="head text-xs-center">Join To Bloggy</h1>
          </div>
          <p className="subTitle text-xs-center">Get the latest posts delivered right to your inbox</p>
          <div className="wrapper">
          <form className="join newsletter-form">
            <input
              type="email"
              name="email_address"
              placeholder="Your email address"
              className="email-field"
            />
            <button type="submit" className="btnJoin">
              Subscribe
            </button>
          </form>

          <p className="join newsletter-text">
            Get the email newsletter and unlock access to members-only content and updates
          </p>
        </div>

        </div>
      </div>
    </div>

  )
}

export default Join;