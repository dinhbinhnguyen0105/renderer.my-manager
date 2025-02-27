// Users.tsx
import { Outlet } from "react-router-dom";
import Header from "~/components/Header/Header";
import { UsersProvider } from "~/store/Providers";
const User: React.FC = () => {

    return (
        <div className="userContainer">
            <Header />
            <UsersProvider>
                <Outlet />
            </UsersProvider>
        </div>
    )
}

export default User;