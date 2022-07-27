import UploadForm from "./UploadForm"
import {   useState } from "react";
import './App.css';
// import PixlyApi from './api';

function App() {
  const [image,setImage] = useState("")
  console.log(image)



  function upload(image){
    setImage(image)
    // const result = await PixlyApi.uploadNewImage(image)
    // return result

  }
  return (
    <div className="App">
      <UploadForm upload={upload}/>

    </div>
  );
}

export default App;
