import { useEffect, useState } from "react";

function Amthal() {
  const [mathal, setMathal] = useState({});
  const [amathal, setAmthal] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/amthal/random")
      .then((res) => res.json())
      .then((res) => setMathal(res));
  }, []);

  const fetchAmthal = () => {
    fetch("http://localhost:4000/amthal/ten")
      .then((res) => res.json())
      .then((res) => setAmthal(res));
  };

  return (
    <div>
      <h2>مثل اليوم</h2>
      <p>{mathal.title}</p>
      <hr />
      <button className="btn" onClick={fetchAmthal}>المزيد من الامثال</button>
      {
        amathal.map((mathal) => {
          return <p key={mathal.id}>{mathal.title}</p>;
        })
      }
    </div>
  );
}

export default Amthal;
