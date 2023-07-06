const HomeBanner = () => {
    return(
      <div className="home-banner">
        <div className="our-story">
          <h1 className="our-story-card-title" data-uia="hero-title">Unlimited movies, TV shows and more.</h1>
          <h2 className="our-story-card-subtitle" data-uia="our-story-card-subtitle">Watch anywhere. Cancel anytime.</h2>
          <p className="email-form-title">Ready to watch? Enter your email to create or restart your membership.</p>
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Email Address" />
            <button className="btn btn-danger">Get Started</button>
          </div>
        </div>
        <div className="shadow"></div>
        <img className="concord-img vlv-creative" src="https://assets.nflxext.com/ffe/siteui/vlv3/ce221d7a-8901-41d9-b726-3ea2efe3a650/2f69dcef-463f-44da-b3b9-662b65f33f82/IN-en-20230703-popsignuptwoweeks-perspective_alpha_website_small.jpg"  alt=""></img>
      </div>
    )
  }
  
  export default HomeBanner;