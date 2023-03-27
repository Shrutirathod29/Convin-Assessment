import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cardObj: {
    "Educational Videos": [
      {
        id: "1111111111111111111111",
        name: "React js",
        category: "Educational Videos",
        url: "https://www.youtube.com/embed/iZhV0bILFb0",
      },
      {
        id: "222222222222222222222222222",
        name: "CSS",
        category: "Educational Videos",
        url: "https://www.youtube.com/embed/OXGznpKZ_sA",
      },
      {
        id: "33333333333333333333333333333333",
        name: "Namaste Javascript",
        category: "Educational Videos",
        url: "https://www.youtube.com/embed/pN6jk0uUrD8",
      },
    ],
    "Historical Videos": [
      {
        id: "444444444444444",
        name: "Alexander the Great",
        category: "Historical Videos",
        url: "https://www.youtube.com/embed/K7lb6KWBanI",
      },
    ],
  },
  activeCategory: "",
  history: [],
};

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addCard: (state, action) => {
      const newCard = { ...action.payload, id: Math.random() * 100000 };
      const newObj = { ...state.cardObj };
      if (!Object.keys(state.cardObj).includes(newCard.category)) {
        newObj[newCard.category] = [];
      }
      newObj[newCard.category].push(newCard);
      state.cardObj = { ...newObj };
    },
    deleteCard: (state, action) => {
      const card = action.payload;
      const newObj = { ...state.cardObj };
      const arr = newObj[card.category];
      const newArr = arr.filter((val) => val.id !== card.id);
      newObj[card.category] = newArr;
      state.cardObj = newObj;
    },
    editCard: (state, action) => {
      const { oldCard, newCard } = action.payload;
      if (oldCard.category === newCard.category) {
        const newObj = { ...state.cardObj };
        const arr = newObj[oldCard.category];
        let index = 0;
        for (let i = 0; i < arr.length; i++) {
          if (arr[i].id === oldCard.id) index = i;
        }
        arr[index] = {
          ...newCard,
          id: arr[index].id,
        };
        newObj[oldCard.category] = arr;
        state.cardObj = newObj;
      } else {
        let newObj = { ...state.cardObj };
        const arr = newObj[oldCard.category];
        const newArr = arr.filter((val) => val.id !== oldCard.id);
        newObj[oldCard.category] = newArr;
        state.cardObj = newObj;
        newCard["id"] = oldCard.id;
        newObj = { ...state.cardObj };
        if (!Object.keys(state.cardObj).includes(newCard.category)) {
          newObj[newCard.category] = [];
        }
        newObj[newCard.category].push(newCard);
        state.cardObj = { ...newObj };
      }
    },

    updateActiveCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
    addToHistory(state, action) {
      state.history = [action.payload, ...state.history];
    },
  },
});

// Action creators are generated for each case reducer function
export const cardActions = { ...cardSlice.actions };

export default cardSlice.reducer;
