import { HashRouter, Routes, Route } from "react-router-dom";

import { SearchProvider } from "./store/Providers";

import Home from "~/container/Home/Home";
import User from "~/container/Users/Users";
import List from "~/container/Users/List/List";
import Create from "~/container/Users/Create/Create";
import Update from "~/container/Users/Update/Update";
import Robot from "~/container/Robot/Robot";
import Interact from "~/container/Robot/Interact/Interact";
import LikeAndComment from "~/container/Robot/Interact/LikeAndComment/LikeAndComment";
import AddFriend from "~/container/Robot/Interact/AddFriend/AddFriend";
import Marketplace from "~/container/Marketplace/Marketplace";
import NoMatch from "~/container/NoMatch/NoMatch";

const App: React.FC = () => {
    return (
        <SearchProvider>

            <HashRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} >
                    </Route>
                    <Route path="/user" element={<User />}>
                        <Route index element={<List />} />
                        <Route path="list" element={<List />}></Route>
                        <Route path="create" element={<Create />}></Route>
                        <Route path="update" element={<Update />}></Route>
                    </Route>
                    <Route path="/robot" element={<Robot />}>
                        {/* <Route index element={<LikeAndComment />} /> */}
                        {/* <Route index element={<Interact />}> */}
                        <Route path="interact" element={<Interact />}>
                            <Route index element={<LikeAndComment />} />
                            <Route path="like-comment" element={<LikeAndComment />} />
                            <Route path="addfriend" element={<AddFriend />} />
                        </Route>

                    </Route>
                    <Route path="/marketplace" element={<Marketplace />}>

                    </Route>
                    <Route path="*" element={<NoMatch />} />
                </Routes>
            </HashRouter>
        </SearchProvider>
    );
};

export default App;
