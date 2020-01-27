import React from "react";

function ListOfBreeds({ list, selectBreed }) {
  return (
    <div>
      {list && (
        <select onChange={event => selectBreed(event.target.value)}>
          <option value="">Choose a breed (none)</option>
          {list.map(breed => {
            return (
              <option key={breed.name} value={breed.value}>
                {breed.name}
              </option>
            );
          })}
        </select>
      )}
    </div>
  );
}

export default ListOfBreeds;
