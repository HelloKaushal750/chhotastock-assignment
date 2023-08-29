import { Route, Routes } from "react-router-dom";
import First from '../Components/First/First'
import Second from "../Components/Second/Second";


function AllRoutes(){
    return <Routes>
        <Route path="/" element={<First />} />
        <Route path="/gateway" element={<Second />} />
    </Routes>
}

export default AllRoutes;