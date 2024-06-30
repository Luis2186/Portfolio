import LayoutAside from "../General/LayoutAside/LayoutAside";

let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
next.addEventListener("click", function () {
  let items = document.querySelectorAll(".item");
  document.querySelector(".hobbies__slide").appendChild(items[0]);
  console.log(items);
});
prev.addEventListener("click", function () {
  let items = document.querySelectorAll(".item");
  document.querySelector(".hobbies__slide").prepend(items[items.length - 1]);
});

export default function Hobbies({ user, layoutVisible }) {
  return (
    <>
      <LayoutAside user={user} layoutVisible={layoutVisible} />

      <div className="hobbies__container">
        <div className="hobbies__slide">
          <div
            className="item"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1610809376778-928ee2c3a561?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="content">
              <div className="name">BMW M4</div>
              <div className="desc">
                The 2024 BMW M4 Coupe delivers signature pulse-pounding BMW M
                performance and aesthetics to match.
              </div>
              <button>More Info </button>
            </div>
          </div>
          <div
            className="item"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1625179904634-243c6cdd6421?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            }}
          >
            <div className="content">
              <div className="name">Porsche 911</div>
              <div className="desc">
                Engineered around Porsche’s iconic 911 engine with unique hybrid
                technologies and delivering unsurpassed Porsche and hybrid
                performance,
              </div>
              <button>More Info</button>
            </div>
          </div>
          <div
            className="item"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1597935370784-051cdebbe6a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            }}
          >
            <div className="content">
              <div className="name">Ferrari 488 Pista</div>
              <div className="desc">
                The Ferrari 488 Pista is powered by the most powerful V8 engine
                in the Maranello marque’s history and is the company’s special
                series sports car
              </div>
              <button>More Info</button>
            </div>
          </div>
          <div
            className="item"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1453491945771-a1e904948959?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            }}
          >
            <div className="content">
              <div className="name">Tesla Model S</div>
              <div className="desc">
                Model S platforms unite powertrain and battery technologies for
                unrivaled performance, range and efficiency.
              </div>
              <button>More Info</button>
            </div>
          </div>
          <div
            className="item"
            style={{
              backgroundImage:
                "url(https://images2.alphacoders.com/724/724677.jpg)",
              backgroundPosition: "center",
            }}
          >
            <div className="content">
              <div className="name">Mercedes-Benz C-className Cabriolet</div>
              <div className="desc">
                The C-className Cabriolet shows an ever-fresh face to the sun.
                Four of you can take in the sky. Ride in coupelike comfort under
                a rich fabric top
              </div>
              <button>More Info</button>
            </div>
          </div>
          <div
            className="item"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/1280553/pexels-photo-1280553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
              backgroundPosition: "bottom",
            }}
          >
            <div className="content">
              <div className="name">Chevrolet Bel Air</div>
              <div className="desc">
                Chevrolet Bel Air Sport Coupé 6.7 V8 Manual, 385hp, 1962 ·
                Back/Side of Chevrolet Bel Air Sport Coupé 6.7 V8 Manual, 385hp
              </div>
              <button>More Info</button>
            </div>
          </div>
        </div>
        <div className="button">
          <button className="prev" title="Previous">
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <button className="next" title="Next">
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </>
  );
}
