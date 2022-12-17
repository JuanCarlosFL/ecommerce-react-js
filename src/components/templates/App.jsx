import { Outlet } from "react-router-dom"
import { MainHeader } from "../organisms/MainHeader"

export const App = () => {
    return (
        <div>
            <MainHeader />
            <Outlet />  
        </div>
    )
}
