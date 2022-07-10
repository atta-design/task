import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../redux/basketReducer";
import { add } from "../redux/basketReducer";

export default function Question3() {
  const card = useSelector((state) => state.products.card);
  console.log(card);
  const dispatch = useDispatch();
  useEffect(() => console.log("Your card changed"), [card]);

  return (
    <div>
      {card.map((item) => (
        <div key={item.id}>
          {item.title}
          <div>
            <span>تومان</span>
            <span>{item.price}</span>
          </div>
          <div>
            <div>
              <button onClick={() => dispatch(remove({ id: item.id }))}>
                delete
              </button>
              <button onClick={() => dispatch(add({ id: item.id }))}>
                I like that
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
//we get data from store using useSelector and we make some change using
//dispach in our data and when data changes we console a massage useing
//we recognize changes by using useEffect dependency
