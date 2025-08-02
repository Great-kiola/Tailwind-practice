import {
    LuLayoutDashboard,
    LuHandCoins,
    LuWalletMinimal,
    LuLogOut,
} from "react-icons/lu";


export const SIDE_MENU_DATA = [
    {
        id: "01",
        label: "Nft Preview",
        icon: LuLayoutDashboard,
        path: "/nftPreview",
    },
    {
        id: "02",
        label: "Order Summary",
        icon: LuWalletMinimal,
        path: "/orderSumm",
    },
    {
        id: "03",
        label: "Rating Component",
        icon: LuHandCoins,
        path: "/ratingComponent",
    },
    {
        id: "04",
        label: "Product Preview",
        icon: LuLogOut,
        path: "/productPreview",
    }
]