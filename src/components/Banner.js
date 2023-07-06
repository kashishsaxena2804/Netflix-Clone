
const Banner = () => {
  return(
    <div className="banner">
      <div className="banner__contents">
        <h1 className="banner__title">Avatar: The Way of Water </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          Set more than a decade after the first film,
          dive into the story of the Sully family;
          the lengths they go to keep each other safe and 
          the tragedies they endure
        </h1>
      </div>
      <div className="banner--fadeBottom"></div>
    </div>
  )
}

export default Banner;