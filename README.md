# Enigma - Non Fungable Token Lottery

## Stack

* next-js
* react
* mobx-state-tree
* web3

## Setup

### Secret Contracts
1. `npm install`
2. `discovery compile`
3. `discovery start`
4. once started: `discovery migrate`

### Client
1. `cd client`
2. `npm install`
3. go to: `src/env.ts` and change the variables according to your setup
4. `npm run dev`

## Pitfalls
- After doing `discovery start` make sure you reset [metamask](https://ethereum.stackexchange.com/questions/44311/reset-metamask-nonce)
- Cannot run discovery because docker.sock doesn't exist in windows OS.
- When using WSL, docker-compose mount paths don't work.
- Sometimes running tests fail: "incorrect epoch", fixed by delaying each test for 1 second.
- Secret contract's `Cargo.toml` must have name "contract".