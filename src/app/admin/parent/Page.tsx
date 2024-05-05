import { Routes, Route } from "react-router";
import Layout from "./Layout";
import AddParent from "./AddParent";



export default function Page () {

    return (<>
        <Routes>
            <Route element={ <Layout />}>

                <Route path="/" element={<div > List</div>} />
                <Route path="/list" element={<div > List</div>} />
                <Route path="/manage" element={<div > Bouna</div>} />
                <Route path="/timetable" element={<div > Bouna</div>} />
                <Route path="/add" element={<div ><AddParent/></div>} />
            </Route>

        </Routes>
    </>)
}