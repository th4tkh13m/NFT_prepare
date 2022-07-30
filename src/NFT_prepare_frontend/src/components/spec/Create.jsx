import React, { useState } from 'react'
import { Web3Storage } from 'web3.storage'

export default function Create() {
  const [imgUri, setImgUri] = useState('')

  const getFile = e => {
    let file = e.target.files[0]

    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        let result = reader.result
        setImgUri(result)
      }
      reader.readAsDataURL(file)
    }
  }

  const generateNft = () => {
    console.log(process.env.REACT_APP_TOKEN_WEB3_STORAGE)
  }

  return (
    <div>
      <div className="input-group mb-3">
        <input
          type="file"
          className="form-control"
          id="inputGroupFile02"
          accept=".jpeg,.jpg,.png,.gif,image"
          onChange={e => getFile(e)}
        />
        <label className="input-group-text" htmlFor="inputGroupFile02">
          Choose File
        </label>
      </div>
      <button className="btn btn-primary" onClick={() => generateNft()}>
        Upload
      </button>
      <img src={imgUri} alt="preview" />
    </div>
  )
}
