const hre = require("hardhat");

async function main() {

    const JakeHongNFT = await hre.ethers.getContractFactory("JakeHongNFT");
    const jakeHongNFT = await JakeHongNFT.deploy();

    await jakeHongNFT.deployed();

    console.log("JakeHongNFT deployed to:",jakeHongNFT.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
