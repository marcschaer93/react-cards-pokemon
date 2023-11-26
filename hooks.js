import React, { useState } from "react";

export const useFlip = (initialFlipState = true) => {
  const [isFlipped, setIsFlipped] = useState(initialFlipState);

  const flip = () => {
    setIsFlipped((prevFlip) => !prevFlip);
  };

  return [isFlipped, flip];
};

// const [isFacingUp, setIsFacingUp] = useState(true);
// const flipCard = () => {
//   setIsFacingUp(isUp => !isUp);
// };

// Both the *PokemonCard* and the *PlayingCard* components can be flipped over when clicked on. You may have noticed that there is some duplicate code in these components. Create a *hooks.js* file in *src/*, and in that file write a custom hook called *useFlip* which will hold the business logic for flipping any type of card.

// *useFlip* doesn’t need to take an argument, and similar to *useState*, it should return an array with two elements. The first element is the current flip state of the card, and the second element is a function that will toggle the flip state.

// Once you’ve written this hook, refactor *PokemonCard* and *PlayingCard* to use this custom hook.

import axios from "axios";
import { v1 as uuid } from "uuid";

export const useAxios = (url, initialData = []) => {
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(url);
      setData((prevData) => {
        return [...prevData, { ...response.data, id: uuid() }];
      });
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return [data, fetchData];
};

// const [cards, addCard] = useAxios(url)

// const [cards, setCards] = useState([]);
// const addCard = async () => {
//   const response = await axios.get(
//     "https://deckofcardsapi.com/api/deck/new/draw/"
//   );
//   setCards(cards => [...cards, { ...response.data, id: uuid() }]);
// };

// n the *PlayingCardList* component, we initialize an empty array in state, and add to it via an AJAX request we make with *axios*. Since we use *axios* in a few components, let’s move this logic into a function called *useAxios*.

// *useAxios* should take in a URL, and similar to *useState*, it should return an array with two elements. The first element is an array of data obtained from previous AJAX requests (since we will add to this array, it’s a piece of state). The second element is a function that will add a new object of data to our array.

// Once you’ve written this hook, refactor *PlayingCardList* to use this custom hook. (Don’t worry about *PokeDex* for now - that’s coming in the next part!
