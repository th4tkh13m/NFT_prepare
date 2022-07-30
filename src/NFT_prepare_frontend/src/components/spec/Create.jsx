import React, { useState } from 'react'
import { Web3Storage } from 'web3.storage'

export default function Create() {
  const [imgUri, setImgUri] = useState('')
  const [file, setFile] = useState(null)
  const getFile = e => {
    let file = e.target.files[0]
    setFile(file)
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        let result = reader.result
        setImgUri(result)
      }
      reader.readAsDataURL(file)
    }
  }

  const generateNft = async () => {
    if (file) {
      const client = new Web3Storage({ token: process.env.TOKEN_WEB3_STORAGE })
      const cid = await client.put(file)
    }
    console.log()
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
      <div className="container">
        <div className="row">


          <div class="card col-md-4" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
