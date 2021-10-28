import React from "react";

function Header() {
  console.log(process.env.REACT_APP_ACCESS_KEY)
  return (
    <div style={{ background: "lightgray" }}>
      <h3>
        <marquee>Photo inventory project</marquee>
        <marquee>By Madhavi Neerukattu</marquee>
      </h3>
    </div>
  );
}

export default Header;
