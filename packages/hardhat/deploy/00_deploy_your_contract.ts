import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

// The deployed BatchRegistry address on Arbitrum
const ARBITRUM_BATCH_REGISTRY = "0x8b698d8f63f078369c067d58a4cc4b529f219cf7";
// Your owner address
const OWNER = "0x4aa32f424d0e8fcf71b542b837ce804153773080";

const deployYourContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  // Only deploy on Arbitrum
  if (hre.network.name === "arbitrum") {
    console.log("Deploying CheckIn to Arbitrum with BatchRegistry:", ARBITRUM_BATCH_REGISTRY);

    await deploy("CheckIn", {
      from: deployer,
      args: [ARBITRUM_BATCH_REGISTRY, OWNER],
      log: true,
      autoMine: true,
    });

    console.log("CheckIn deployed!");
  } else {
    console.log("Skipping deployment: not on Arbitrum network.");
  }
};

export default deployYourContract;

deployYourContract.tags = ["CheckIn"];
