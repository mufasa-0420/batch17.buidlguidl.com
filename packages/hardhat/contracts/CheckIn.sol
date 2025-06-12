// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;
import "@openzeppelin/contracts/access/Ownable.sol";

interface IBatchRegistry {
    // function updateAllowList(address[] calldata builders, bool[] calldata statuses) external;
    // function updateGraduationAllowList(address[] calldata builders, bool[] calldata statuses) external;
    // function toggleBatchOpenStatus() external;
    function checkIn() external;
    // function graduate() external;
    // function withdraw() external;
}

contract CheckIn is Ownable {
    IBatchRegistry public batchRegistry;

    constructor(address _batchRegistry, address initialOwner) Ownable(initialOwner) {
        batchRegistry = IBatchRegistry(_batchRegistry);
    }

    function callCheckIn() external onlyOwner{
        batchRegistry.checkIn();
    }
}
