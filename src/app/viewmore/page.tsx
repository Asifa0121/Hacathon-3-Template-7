import Detail from "./detail";
import SideBar from "./sidebar";

export default function Home(){
    return(
        <div className="flex">
            <SideBar/>
            <Detail/><br/>
        </div>
    )
}