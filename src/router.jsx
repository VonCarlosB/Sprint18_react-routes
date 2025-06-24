import { createBrowserRouter } from "react-router-dom";
import Home from './pages/Home'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import Error from "./pages/Error";
import Template from "./layouts/Template";
import TemplateHelp from "./layouts/TemplateHelp";
import Faqs from './pages/Faqs'
import Help from './pages/Help'
import Characters from "./pages/Characters";

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <Error />,
        element: <Template />,
        children: [
            { index: true, element: <Home /> },
            { path: 'projects', element: <Projects /> },
            { path: 'resume', element: <Resume /> },
            { path: 'characters', element: <Characters /> }
        ]
    },
    {
        path: '/help',
        errorElement: <Error />,
        element: <TemplateHelp />,
        children: [
            { index: true, element: <Help /> },
            { path: 'faqs', element: <Faqs /> }
        ]
    }
])

export default router