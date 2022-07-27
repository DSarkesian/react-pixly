import UploadForm from "./UploadForm"
import {   useState } from "react";
import './App.css';
import PixlyApi from './api';

function App() {
  const [image,setImage] = useState("")
  console.log(image)



  async function uploadPhoto(image){
    setImage(image)
    const result = await PixlyApi.uploadNewImage(image)
    return result
  }

  return (
    <div className="App">
      <UploadForm uploadPhoto={uploadPhoto}/>

    </div>
  );
}

export default App;
