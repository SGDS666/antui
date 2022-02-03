import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import Login from '../views/Login';
import Admin from '../views/admin';
import NoPage from '../views/NoPage';



const Indexrouter = () => {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/admin/*" element={localStorage.getItem("token")?<Admin/>:<Navigate to='/'/>}/>
                <Route path="/"  element={<Login/>}/>
                <Route path="*"  element={<NoPage/>}/>
                
            </Routes>
        </BrowserRouter>
    );
}

export default Indexrouter;
