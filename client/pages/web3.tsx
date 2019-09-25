import dynamic from "next/dynamic"

const Web3 = dynamic(() => import("../src/Web3"), {
  ssr: false
})

export default Web3