import React,{useState} from "react";
import {ethers,BigNumber} from 'ethers';
import jakeHongNFT from './JakeHongNFT.json'

const jakeHongNFTAddress = "0x88D7d7e740f355D959513dc10feBB61AAE7E75dc";


const MainMint=({accounts,setAccounts}) => {

  const [mintAmount,setMintAmount]=useState(1);
  const isConnected = Boolean(accounts[0]);

  async function handleMint(){
    if(window.ethereum){
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const contract = new ethers.Contract(
        jakeHongNFTAddress,
        jakeHongNFT.abi,
        signer
      );
        try{
          const response = await contract.mint(BigNumber.from(mintAmount),{
            value: ethers.utils.parseEther((0.02 * mintAmount).toString()),
          })
          console.log('response: ',response)
        }catch(error){
          console.log('error: ',error)
        }
    }
  }

  const handleDecrement = ()=>{
    if(mintAmount<=1)return;
    setMintAmount(mintAmount - 1);
  }

  const handleIncrement = ()=>{
    if(mintAmount>=3)return;
    setMintAmount(mintAmount + 1);
  }
  return (
    <>
      <div className="section pt-o" id="mint">
        <h1>JakeHongNFT</h1>
        {isConnected ? (
          <div>
            <div>
              <button onClick={handleDecrement}>-</button>
              <input readOnly type="number" value={mintAmount} onChange={event => setMintAmount(event.target.value)} />
              <button onClick={handleIncrement}>+</button>
            </div>
            <button onClick={handleMint}>Mint Now</button>
          </div>
        ) : (
          <p>You must be connected to Mint!</p>
        )}
      </div>{" "}
    </>
  );
}

export default MainMint;
