import React, { useState } from "react";
import "./styles.css";

var likeCounter = 0;

const emojiDictionary = {
  "🐵": " Monkey Face",
  "🦍": " Gorilla",
  "🦌": "Deer",
  "🐫": "Two-Hump Camel",
  "🐇": "Rabbit",
  "🐿️": "Chipmunk",
  "🐤": "Baby Chick",
  "🦚": "Peacock",
  "🦜": "Parrot",
  "🐸": "Frog",
  "🐢": "Turtle"
};

const emojis = Object.keys(emojiDictionary);

export default function App() {
  const [mean, setMean] = useState("");
  const [stick, setStick] = useState("");

  function eventChange(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];
    setStick(userInput);

    // console.log(meaning);
    if (meaning === undefined) {
      meaning = "Entered emoji is not in our database!";
    }
    setMean(meaning);
  }
  function clickHandler(item) {
    var meaning = emojiDictionary[item];
    setMean(meaning);
    setStick(item);
  }

  return (
    <div className="App">
      <h1>Emoji Interpretor</h1>
      <input
        onChange={eventChange}
        placeholder="Put an emoji to know the meaning"
        value={stick}
      ></input>
      <h2>
        {" "}
        Meaning <span style={{ color: "blue" }}>{mean} </span>{" "}
      </h2>

      <h3>Emojis we know </h3>
      {emojis.map(function (item) {
        return (
          <span
            className="sticker"
            onClick={() => clickHandler(item)}
            key={item}
          >
            {item}{" "}
          </span>
        );
      })}
    </div> 
  );
}
