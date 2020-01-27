import React from "react";

export function useBreeds() {
  const [list, setList] = React.useState(null);

  React.useEffect(() => {
    getBreeds();
  }, []);

  var getBreeds = async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/list/all");
      const responseJson = await response.json();

      let list = [];
      Object.keys(responseJson.message).forEach(breed => {
        if (responseJson.message[breed].length > 0) {
          responseJson.message[breed].forEach(subBreed => {
            const breedName = subBreed + " " + breed;
            list.push({ name: breedName, value: `${breed}/${subBreed}` });
          });
        } else {
          list.push({ name: breed, value: breed });
        }
      });

      setList(list);
    } catch (e) {}
  };

  return list;
}

export function useDog(selectedBreed) {
  const [dog, setDog] = React.useState(null);
  const [status, setStatus] = React.useState("initial");

  React.useEffect(
    () => {
      getDog();
    },
    [selectedBreed]
  );

  var getDog = async () => {
    setStatus("loading");
    const endpoint = selectedBreed
      ? `https://dog.ceo/api/breed/${selectedBreed}/images/random`
      : "https://dog.ceo/api/breeds/image/random";
    try {
      const response = await fetch(endpoint);
      const responseJson = await response.json();
      setStatus("success");
      setDog(responseJson.message);
    } catch (e) {
      setStatus("error");
    }
  };

  return [dog, getDog, status];
}
