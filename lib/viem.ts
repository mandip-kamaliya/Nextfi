import { createPublicClient , http } from "viem";
import { sepolia } from "viem/chains";

const PublicClient = createPublicClient({
    chain:sepolia,
    transport:http("https://divine-capable-layer.ethereum-sepolia.quiknode.pro/4a5dffce2644356e226f5415fb6a3be5e22c4526/"),
})