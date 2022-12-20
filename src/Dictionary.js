import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);
  let accessKey = "8o7gyaGj0Hdd8o7w6bWm-WZv35v8C8VJK3x7XrwbI5g";

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handleUnsplashResponse(response) {
    setPhotos(response.data.results);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);
   
    let unsplashApiUrl = `https://api.unsplash.com/search/photos?page=1&query=${keyword}&orientation=landscape&per_page=30&client_id=${accessKey}`;
    axios.get(unsplashApiUrl).then(handleUnsplashResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What do you want to look up?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword}
            />
          </form>
          <div className="hint">
            suggested words: sunset, sky, train, plant..
          </div>
        </section>
        <Results results={results} />
        <Photos photos={photos}/>
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
