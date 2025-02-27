// Robot.tsx

import { Outlet } from "react-router-dom";

import Header from "~/components/Header/Header";
import { UsersProvider } from "~/store/Providers";
import ListUser from "./ListUser/ListUser";

const Robot: React.FC = () => {

    return (
        <div className="robotContainer">
            <Header />
            <UsersProvider>
                <ListUser />
                <Outlet />
            </UsersProvider>
        </div>
    )
}

export default Robot;