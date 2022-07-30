import React, { useState } from 'react'

export default function Create() {
  const [imgUri, setImgUri] = useState("");

  const getFile = (e) => {
    let file = e.target.files[0];

    if(file){
      const reader = new FileReader();
      reader.onload = () => {
        let result = reader.result;
        setImgUri(result)
      }
      reader.readAsDataURL(file);
    }
  }

  const generateNft = () => {
    
  }

  return (
    <div>
      <div className="input-group mb-3">
        <input type="file" className="form-control" id="inputGroupFile02" accept=".jpeg,.jpg,.png,.gif,image" onChange={(e) => getFile(e)}/>
        <label className="input-group-text" htmlFor="inputGroupFile02" onClick={() => generateNft}>Upload</label>
      </div>
      <img src={imgUri} alt="preview"/>
    </div>
  )
}
