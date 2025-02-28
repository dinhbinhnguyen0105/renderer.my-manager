// Home.tsx
import Header from "~/components/Header/Header";
import { Outlet } from "react-router-dom";

const Home: React.FC = () => {

    return (
        <div className="homeContainer">
            <Header />
            <Outlet />
            <h2>Home page</h2>
        </div>
    );
};

export default Home;