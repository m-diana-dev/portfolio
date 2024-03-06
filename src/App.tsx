import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import {ErrorPage} from "./layout/errorPage/errorPage.tsx";
import {MainPage} from "./layout/mainPage/MainPage.tsx";
import {Policy} from "./layout/policy/Policy.tsx";
import {LayoutSite} from "./layout/layoutSite/LayoutSite.tsx";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path={'/'} element={<LayoutSite/>}>
        <Route index element={<MainPage/>}/>
        <Route path={'policy'} element={<Policy/>}/>
        <Route path={'*'} element={<ErrorPage/>}/>
    </Route>
))

function App() {
    return (
        <RouterProvider router={router}/>
    )
}

export default App
