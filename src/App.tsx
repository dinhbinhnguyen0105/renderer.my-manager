// App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { SearchProvider } from "./store/Providers";
import User from "./container/Users/Users";
import List from "./container/Users/List/List";
import Create from "./container/Users/Create/Create";
import Update from "./container/Users/Update/Update";
import Robot from "./container/Robot/Robot";
// import Interact from "./container/Robot/Interact/Interact";
import LikeAndComment from "./container/Robot/Interact/LikeAndComment/LikeAndComment";
import AddFriend from "./container/Robot/Interact/AddFriend/AddFriend";
import Marketplace from "./container/Marketplace/Marketplace";
import Home from "./container/Home/Home";


const App: React.FC = () => {

    return (
        <SearchProvider>
            <Router>
                <Routes>
                    <Route index element={<Home />}>

                    </Route>
                    <Route path="/user" element={<User />}>
                        <Route index element={<List />} />
                        <Route path="create" element={<Create />}></Route>
                        <Route path="update" element={<Update />}></Route>
                    </Route>
                    <Route path="/robot" element={<Robot />}>
                        <Route index element={<LikeAndComment />} />
                        <Route path="interact">
                            <Route index element={<LikeAndComment />} />
                            <Route path="like-comment" element={<LikeAndComment />} />
                            <Route path="addfriend" element={<AddFriend />} />
                        </Route>

                    </Route>
                    <Route path="/marketplace" element={<Marketplace />}>

                    </Route>
                </Routes>
            </Router>
        </SearchProvider>
    );
};

export default App;