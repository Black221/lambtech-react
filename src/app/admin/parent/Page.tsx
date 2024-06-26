import { Routes, Route } from "react-router";
import Layout from "./Layout";
import UploadParent from "./UploadParent";
import AddParent from "./AddParent";
import ListParents from "./ListParents";



export default function Page () {

    return (<>
        <Routes>
            <Route element={ <Layout />}>

                <Route path="/" element={<ListParents />} />
                <Route path="/liste" element={<ListParents />} />
                <Route path="/ajouter" element={ <AddParent /> } />
                <Route path="/upload" element={<UploadParent />} />
            </Route>

        </Routes>
    </>)
}