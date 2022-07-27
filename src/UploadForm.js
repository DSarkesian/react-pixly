
import { useState, react } from "react";


function UploadForm({ uploadPhoto }) {
  const [formData, setFormData] = useState("");
  // const [errors, setErrors] = useState("");

  //update state as input field changes
  function handleChange(evt){
    setFormData(evt.target.files[0]);
  }
  //auth form data on submit
  async function handleSubmit(evt) {
    evt.preventDefault();
    //TODO: clear errors on second submit
    // try {
    await uploadPhoto(formData);
    // } catch (err) {
      // setErrors(err);
    }



  return (
    <div className="UploadForm">
      <form>
        <input type="file" onChange={handleChange}/>

        <button onClick={handleSubmit}>Search!</button>
      </form>
    </div>
  );
  }
export default UploadForm
