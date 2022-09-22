import React, { useState } from "react";
import { ethers, BigNumber } from 'ethers';
import jakeHongNFT from './JakeHongNFT.json';
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
//contract address
const jakeHongNFTAddress = "0x88D7d7e740f355D959513dc10feBB61AAE7E75dc";


const MainMint = ({ accounts, setAccounts }) => {

  const [mintAmount, setMintAmount] = useState(1);
  const isConnected = Boolean(accounts[0]);

  async function handleMint() {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const contract = new ethers.Contract(
        jakeHongNFTAddress,
        jakeHongNFT.abi,
        signer
      );
      try {
        const response = await contract.mint(BigNumber.from(mintAmount), {
          value: ethers.utils.parseEther((0.02 * mintAmount).toString()),
        })
        console.log('response: ', response)
      } catch (error) {
        console.log('error: ', error)
      }
    }
  }

  const handleDecrement = () => {
    if (mintAmount <= 1) return;
    setMintAmount(mintAmount - 1);
  }

  const handleIncrement = () => {
    if (mintAmount >= 3) return;
    setMintAmount(mintAmount + 1);
  }
  return (
    <>
      <Flex
        justify="center"
        align="center"
        height="100vh"
        paddingBottom="150px"
        backgroundColor="#F0FFFF"
      >
        <Box width="520px">
          <div className="section pt-o" id="mint">
            <Text fontSize="48px">JakeHongNFT</Text>
            <Text fontSize="30px" letterSpacing="-5.5%" fontFamily="VT323">
              Welcome JakeHong NFT ,mint JakeHong to us!
            </Text>
            {isConnected ? (
              <div>
                <Flex justify="center" align="center" borderColor="#F0FFFF">
                  <Button
                    backgroundColor="#FFE4C4"
                    borderRadius="5px"
                    boxShadow="0px 2px 2px 1px #0F0F0F"
                    color="black"
                    cursor="pointer"
                    fontFamily="inherit"
                    padding="15px"
                    marginTop="10px"
                    onClick={handleDecrement}
                  >
                    -
                  </Button>
                  <Input
                    readOnly
                    fontFamily="inherit"
                    width="100px"
                    height="40px"
                    textAlign="center"
                    paddingLeft="19px"
                    marginTop="10px"
                    type="number"
                    value={mintAmount}
                    onChange={(event) => setMintAmount(event.target.value)}
                  />
                  <Button
                    backgroundColor="#FFE4C4"
                    borderRadius="5px"
                    boxShadow="0px 2px 2px 1px #0F0F0F"
                    color="black"
                    cursor="pointer"
                    fontFamily="inherit"
                    padding="15px"
                    marginTop="10px"
                    onClick={handleIncrement}
                  >
                    +
                  </Button>
                </Flex>
                <Button
                  backgroundColor="#FFE4C4"
                  borderRadius="5px"
                  boxShadow="0px 2px 2px 1px #0F0F0F"
                  color="black"
                  cursor="pointer"
                  fontFamily="inherit"
                  padding="15px"
                  marginTop="10px"
                  marginLeft="210px"
                  onClick={handleMint}
                >
                  Mint Now
                </Button>
              </div>
            ) : (
              <p>You must be connected to Mint!</p>
            )}
          </div>{" "}
        </Box>
      </Flex>
    </>
  );
}

export default MainMint;
