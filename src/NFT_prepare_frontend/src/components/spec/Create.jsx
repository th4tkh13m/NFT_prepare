import React, { useState } from 'react'
import { Web3Storage } from 'web3.storage'
import { Principal } from '@dfinity/principal';
import { toast } from 'react-toastify';
import { NFT_prepare_backend } from '../../../../declarations/NFT_prepare_backend';
import {
  ConnectButton,
  useConnect,
} from '@connect2ic/react'
export default function Create() {
  const { principal } = useConnect({})

  const DWEB_LINK = "ipfs.dweb.link"
  const [imgUri, setImgUri] = useState('')
  const [file, setFile] = useState()
  const [fileName, setFileName] = useState('')
  const [name, setName] = useState('')

  const getFile = e => {
    let file = e.target.files[0]
    setFile(file)
    setFileName(file.name)
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
    console.log({ token: process.env.TOKEN_WEB3_STORAGE });
    if (file && name) {
      toast("Mining!")
      console.log(file);
      // const client = new Web3Storage({ token: process.env.TOKEN_WEB3_STORAGE })
      // const cid = await client.put([file])
      const cid = "bafybeiattu5xvl2scy7kegddipxecjpksfuq5uak5vjyp3vcuezu4xfwiu"
      console.log('stored files with cid:', cid)
      // const imgURI = `${cid}.${DWEB_LINK}/${fileName}`
      const imgURI = `https://bafybeiattu5xvl2scy7kegddipxecjpksfuq5uak5vjyp3vcuezu4xfwiu.ipfs.dweb.link/2d194627cef637a86ee7.jpg`
      const res = await NFT_prepare_backend.mintDip721(Principal.fromText("h7whv-lcovu-53anr-xbs3a-mddbn-w4eol-siyh2-vjz3u-laipm-nscgc-lae"), {
        center: "FPT", name, id: imgURI, cid
      })
      console.log(res);
      setImgUri('')
      setFile(null)
      setFileName('')
      setName('')
      toast("Minted!")
    }
    console.log(name)
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

      <img src={imgUri} alt="preview" style={{ height: "200px", width: "200px" }} />
      <input type="text" className="form-control" placeholder="Name NFT" onChange={(e) => setName(e.target.value)}></input>
      <button className="btn btn-primary" onClick={() => generateNft()}>
        Upload
      </button>
      <div className="container">
        <div className="row">

          {/* 
          <div class="card col-md-4" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div> */}
        </div>

      </div>
    </div>
  )
}
