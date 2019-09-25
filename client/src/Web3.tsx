import { observer } from "mobx-react"
import web3Store from "./stores/web3"
import enigmaStore from "./stores/enigma"

export default observer(() => {
  console.log({ account: web3Store.account })
  return (
    <p>wut {String(web3Store.account)} {String(enigmaStore.initialized)}</p>
  )
})