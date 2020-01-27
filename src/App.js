import React from "react";
import ListOfBreeds from "./ListOfBreeds";
import AlternateColors from "./AlternateColors";
import { useDog, useBreeds } from "./hooks";
import "./App.css";
import "./loader.css";

function App() {
  const [selectedBreed, selectBreed] = React.useState(null);
  const [dog, getDog, status] = useDog(selectedBreed);
  const breeds = useBreeds();

  return (
    <div className="App">
      <div className="image-container">
        {status === "success" && (
          <>
            <AlternateColors
              phrase="We ❤ our pups!"
              colors={["#8093FF", "#FF502C", "#FF9472", "#FF91FF"]}
            />
            <img className="image" src={dog} />
          </>
        )}
        {status === "loading" && <div className="loader">Loading...</div>}
      </div>
      <button onClick={getDog}>get new random dog</button>
      <ListOfBreeds list={breeds} selectBreed={selectBreed} />
      <div />
    </div>
  );
}

export default App;
