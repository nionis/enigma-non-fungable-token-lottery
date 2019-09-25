pragma solidity ^0.5.0;

import "@openzeppelin/contracts/ownership/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721Full.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";

contract Deposit is Ownable, IERC721Receiver {
  address public enigma;

  modifier onlyEnigma {
    require(msg.sender == enigma, "only enigma allowed");
    _;
  }

  function setSecretContract(address _enigma) public onlyOwner {
    enigma = _enigma;
  }

  function claim(address token_addr, address from, uint256 token_id) external onlyEnigma {
    ERC721(token_addr).safeTransferFrom(from, address(this), token_id);
  }

  function release(address token_addr, address to, uint256 token_id) external onlyEnigma {
    ERC721(token_addr).safeTransferFrom(address(this), to, token_id);
  }

  function onERC721Received(
    address _operator,
    address _from,
    uint256 _tokenId,
    bytes memory _data
  ) public returns(bytes4) {
    return this.onERC721Received.selector;
  }
}