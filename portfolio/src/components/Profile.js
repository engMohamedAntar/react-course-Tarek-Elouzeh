import { useState } from "react";
import img from "../assets/img.jpg";

function Profile() {
  const [displayBio, setDisplayBio] = useState(false);
  const toggle = () => {
    setDisplayBio(!displayBio);
  };

  return (
    <div className="profile">
      <img src={img} alt="profile"/>
      <h1>Antoor</h1>
      <p>Front-end Developer</p>
      {displayBio ? (
        <div>
          <p>This is my bio</p>
          <p>Do you like it</p>
          <button onClick={toggle}>
            Show Less
          </button>
        </div>
      ) : (
        <div>
          <button onClick={toggle}>
            Show More
          </button>
        </div>
      )}
    </div>
  );
}

export default Profile;
