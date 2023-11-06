import React, { useState } from 'react';
import Navbar from './Navbar';
import TextForm from './TextForm';



function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundImage=`url("https://images.hdqwalls.com/wallpapers/inside-moonlight-anime-girl-4k-2a.jpg")`;
    } else {
      setMode("light");  
      document.body.style.backgroundImage= `url("https://cdn.pixabay.com/photo/2023/03/21/12/21/anime-wallpaper-7867145_1280.jpg")`;
    }
  };

  return (
    <>
      <div>
        <Navbar title="TextManipulator" mode={mode} toggleMode={toggleMode} />
        <div className='container'>
          <TextForm heading="Enter The Text To Analyze" />
        </div>
      </div>
    </>
  );
}

export default App;