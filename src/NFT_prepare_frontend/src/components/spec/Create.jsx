import React, { useEffect, useState } from 'react'
import { Web3Storage } from 'web3.storage'
import { Principal } from '@dfinity/principal';
import { toast, ToastContainer } from 'react-toastify';
import { NFT_prepare_backend } from '../../../../declarations/NFT_prepare_backend';
import {
  ConnectButton,
  useConnect,
} from '@connect2ic/react'
export default function Create() {
  const { principal, connect } = useConnect()
  const DWEB_LINK = "ipfs.dweb.link"
  const [imgUri, setImgUri] = useState('')
  const [file, setFile] = useState()
  const [fileName, setFileName] = useState('')
  const [name, setName] = useState('')
  const [nfts, setNfts] = useState([])

  useEffect(() => {
    async function fetchData() {
      await getAllNfts()
    }
    fetchData()
  }, [])

  const getAllNfts = async () => {
    const data = await NFT_prepare_backend.getAllTokens();
    setNfts(data)
    console.log(nfts);
  }

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
    if (!principal) {
      alert("Please connect to PLug wallet first")
    }
    console.log({ token: process.env.TOKEN_WEB3_STORAGE });
    if (file && name) {
      toast("Mining!")
      console.log(file);
      const client = new Web3Storage({ token: process.env.TOKEN_WEB3_STORAGE })
      const cid = await client.put([file])
      console.log('stored files with cid:', cid)
      const imgURI = `${cid}.${DWEB_LINK}/${fileName}`
      const res = await NFT_prepare_backend.mintDip721(Principal.fromText(principal), {
        center: "FPT", name, id: imgURI, cid
      })
      console.log(res);
      setImgUri('')
      setFile(null)
      setFileName('')
      setName('')
      await getAllNfts()
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
      <ToastContainer />
      <div className="container">
        <div className="row">
          {
            nfts.map((nft) => {
              const { id, name, center, cid } = nft
              return (
                <>
                  <div className="card col-md-4" style={{ width: "18rem" }} key={cid}>
                    <img src={id} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{center}</h5>
                      <p className="card-text">{name}.</p>
                      <a href="#" className="btn btn-primary">{cid}</a>
                    </div>
                  </div>
                </>
              )
            })
          }

        </div>

      </div>
    </div>
  )
}
