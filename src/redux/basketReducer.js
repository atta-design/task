import { createSlice } from "@reduxjs/toolkit";

const BasketReducer = createSlice({
  name: "BasketReducer",
  initialState: {
  
    card: [
      {
        id: 1,
        poster:
          "https://globalassets.starbucks.com/assets/17f8efcbdbc8476e9992503d4ee19f95.jpg?impolicy=1by1_tight_288",
        title: "نوشیدنی فراپوچینو مخلوط ماچا کِرِم",
        price: 80000,
        category: "frappuccino",
      },
      {
        id: 2,
        poster:
          "https://globalassets.starbucks.com/assets/cacdf793d82648329cfec7df33148da4.jpg?impolicy=1by1_tight_288",
        title: "نوشیدنی فراپوچینو ترکیبی با کِرِم کارامل",
        price: 75000,
        category: "frappuccino",
      },
      {
        id: 3,
        poster:
          "https://globalassets.starbucks.com/assets/abd48a12ed76482790f2079db420f2c4.jpg?impolicy=1by1_tight_288",
        title: "نوشیدنی فراپوچینو مخلوط کِرِم توت فرنگی",
        price: 90000,
        category: "frappuccino",
      },
    ],
  },
  reducers: {
    add: (state, action) => {
      return {
        ...state,
        card: state.card.map((item) =>
          item.id === action.payload.id
            ? { ...item, isfavorite: { liked: true } }
            : item
        ),
      };
    },

    remove: (state, action) => {
      return {
        ...state,
        card: state.card.filter((item) => item.id !== action.payload.id),
      };
    },
  },
});

export const { add, remove } =
  BasketReducer.actions;

export default BasketReducer.reducer;
