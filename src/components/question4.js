import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../redux/basketReducer";
export default function Question4() {
  const card = useSelector((state) => state.products.card);

  console.log(card);

  const dispatch = useDispatch();

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
//we have an array of objects in our store
// when we press the button in a specific card item
//that is in fact an object we make a change in that object
//if you open the console you will see that when you click
//the button in one of objects a object (isFavorite) add
//to choosen item or object
