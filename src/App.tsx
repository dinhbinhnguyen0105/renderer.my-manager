// App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { SearchProvider } from "./store/Providers";
import User from "./container/Users/Users";
import List from "./container/Users/List/List";
import Create from "./container/Users/Create/Create";
import Update from "./container/Users/Update/Update";

const App: React.FC = () => {

    return (
        <SearchProvider>
            <Router>
                <Routes>
                    <Route path="/user" element={<User />}>
                        <Route path="list" element={<List />} />
                        <Route path="create" element={<Create />}></Route>
                        <Route path="update" element={<Update />}></Route>
                    </Route>
                </Routes>
            </Router>
        </SearchProvider>
    );
};

export default App;