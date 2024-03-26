import { useState } from "react";


const customDictionary = [
  {
    word: "React",
    meaning: "A JavaScript library for building user interfaces.",
  },

  { word: "Component", meaning: "A reusable building block in React." },

  { word: "State", meaning: "An object that stores data for a component." },
];

function Dictionary() {
  const [inputText,setInputText] =useState("");
  const [dictionaryMeaning,setDictionaryMeaning] = useState("");
  console.log(inputText.trim())

  const handleInputChange = (e)=>{
    const text = e.target.value;
    setInputText(text.trim());

  }

  const handleSearch=()=>{   
    const meaning = customDictionary.find((data)=>(data.word.toLowerCase() === inputText.toLowerCase()))
    if(meaning){
      setDictionaryMeaning(meaning.meaning)
    }else{
      const text = "Word not found in the dictionary.";
      setDictionaryMeaning(text);
    }
    

  }

  return <div className="App">
    <h1>Dictionary App</h1>
    <input type="text" placeholder="Search for a word..." value={inputText} onChange={handleInputChange}/>
    <button onClick={handleSearch}>Search</button>
    <p><b>Definition:</b>{dictionaryMeaning && <p>{dictionaryMeaning}</p>}</p>
  </div>;
}

export default Dictionary;
