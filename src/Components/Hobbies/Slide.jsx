function Slide({ urlImg }) {
  return (
    <div
      className="item"
      style={{
        backgroundImage: `url(${urlImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* <div className="content">
    <div className="name"> {name} </div>
    <div className="desc">
     {description photografy}
    </div>
    <button> More Info </button>
  </div> */}
    </div>
  );
}

export default Slide;
