import { AiOutlineTable, AiOutlineUser } from "react-icons/ai";
import { BiBookmark } from "react-icons/bi";
import { RiVideoAddLine } from "react-icons/ri";

export const tabs = [
    {
        tab : "Post",
        icon : <AiOutlineTable />,
        activeTab :  ""
    },
    {
        tab : "Reels",
        icon : <RiVideoAddLine />
    },
    {
        tab : "Saved",
        icon : <BiBookmark />
    },
    {
        tab : "Tagged",
        icon : <AiOutlineUser />
    }
]