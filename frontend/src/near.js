import { keyStores, connect, WalletConnection, utils } from "near-api-js";
import contractInfo from './contractInfo.json'

export const getWallet = async () => {
    const walletConfig = {
        keyStore: new keyStores.BrowserLocalStorageKeyStore(),
        nodeUrl: "https://rpc.testnet.near.org",
        walletUrl: "https://wallet.testnet.near.org",
        helperUrl: "https://helper.testnet.near.org",
        explorerUrl: "https://explorer.testnet.near.org",
    }

    const near = await connect(walletConfig)
    return new WalletConnection(near, "josegabriel.testnet")
}

export const logIn = (wallet) => {
    wallet.requestSignIn(contractInfo.name, "josegabriel")
}
export const logOut = (wallet) => {
    wallet.signOut()
}