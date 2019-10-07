# Enigma - Non Fungable Token Lottery

## Stack

* next-js
* react
* mobx-state-tree
* web3

## Setup

### Secret Contracts
1. `npm install`
2. rename `.env-default` to `.env`
3. modify `.env` "BUILD_CONTRACTS_PATH"
4. `discovery compile`
5. `discovery start`
6. once started: `discovery migrate`

### Client
1. `cd client`
2. `npm install`
3. rename `.env-default` to `.env`
4. modify `.env` according to your setup
5. `npm run dev`

## Pitfalls
- After doing `discovery start` make sure you reset [metamask](https://ethereum.stackexchange.com/questions/44311/reset-metamask-nonce)
- Cannot run discovery because docker.sock doesn't exist in windows OS.
- When using WSL, docker-compose mount paths don't work.
- Sometimes running tests fail: "incorrect epoch", fixed by delaying each test for 1 second.
- Secret contract's `Cargo.toml` must have name "contract".