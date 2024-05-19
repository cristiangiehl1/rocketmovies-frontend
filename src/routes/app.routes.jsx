import { Routes, Route, Navigate } from "react-router-dom";

import { CreateMovie } from "../pages/CreateMovie";
import { Home } from "../pages/Home";
import { Preview } from "../pages/Preview";
import { Profile } from "../pages/Profile";


export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/preview/:id" element={<Preview />}/>
            <Route path="/profile" element={<Profile />}/>
            <Route path="/new" element={<CreateMovie />}/>
            <Route path="*" element={<Navigate to="/" />}/>
        </Routes>
    )
}