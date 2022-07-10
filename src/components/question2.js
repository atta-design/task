import React, { useEffect, useState } from "react";
export default function Question2() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    function getData() {
      fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((res) => res.json())
        .then((result) => {
          setItems(result);
        });
    }
    getData();
  }, []);
  // write some codes to ...
  // call function GetData() after the component is rendered
  return <div>{items.length !== 0 && <p>{items.title}</p>}</div>;
}

//In above code we get data from API and load in after page is renderd.
//we do this using useEffect
