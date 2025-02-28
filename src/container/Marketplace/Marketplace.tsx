// Marketplace.tsx
import Header from "~/components/Header/Header";
import { Outlet } from "react-router-dom";

const Marketplace: React.FC = () => {

    return (
        <div className="marketplaceContainer">
            <Header />
            <Outlet />
            <h2>Marketplace page</h2>
        </div>
    );
};

export default Marketplace;