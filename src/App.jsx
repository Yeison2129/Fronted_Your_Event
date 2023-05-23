import {Route, Routes} from "react-router-dom"
import {Inicio_Sesion} from './components/InicioSesion/F_Inicio_Sesion'
import { F_registro } from './components/Registro/F_registro'
import { Password } from './components/Configuraciones/Editar/Password'
import { Index } from "./components/Index/Index"
import { RegistroEmpresa } from "./components/Registro-empresa/RegistroEmpresa"
import { Dashboard } from "./components/dashboard_empresa/Dashboard_Empresa"
import { CardPassword } from "./components/RecuperacionContrasena/CardPassword/CardPassword"
import {DropDown} from './components/DropDown/DropDown';
import { CardEvento } from "./components/Card_evento/Card_evento"
import { Card_evento_admin } from "./components/Card_evento/Card_evento_admin"
import { Crud_eventos } from "./components/CRUD_eventos/Crud_eventos"
import { Session_company } from "./components/SessionCompany/SessionCompany"
import { LoginEmpresa  } from  "./components/Login-Empresa/loginEmpresa"
import { Card_crud  } from  "./components/Card_crud/card_evento_empresa/Card"
import {  Homedash } from  "./components/Home/home-dash" 
import { Cards } from "./components/Card_Categorias/Cards"
import Stats from "./components/Estadisticas/stats.jsx"
import {CardView} from "./components/CardView/Card-view.jsx"
import { PaginaCard } from "./components/PaginaCard/PaginaCard"
import { ConfigDash } from "./components/Configuraciones/DashC/Config"
import MapView from "./components/Mapa/MapView"
export default function App() {
    return (
        <Routes>
            <Route path='/' element={<Index/>}/>
            <Route path='/login' element={<Inicio_Sesion/>}/>
            <Route path='/registro' element={<F_registro/>}/>
            <Route path='/password' element={<Password/>}/>
            <Route path='/RegistroEmpresa' element={<RegistroEmpresa/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/CardPassword' element={<CardPassword/>}/>
            <Route path='/drop' element={<DropDown/>}/>
            <Route path='/cardEvento' element={<CardEvento/>}/>
            <Route path='/cardCrud' element={<Card_crud/>}/>
            <Route path='/cardEventoAdmin' element={<Card_evento_admin/>}/>
            <Route path="/crud_eventos" element={<Crud_eventos/>}/>
            <Route path='/loginCompany' element={<Session_company/>}/>
            <Route path='/loginEmpresa' element={<LoginEmpresa/>}/>
            <Route path='/home' element={<Homedash/>}/>
            <Route path='/home' element={<Cards/>}/>
            <Route path='/Estadisticas' element={<Stats/>}/>
            <Route path='/CardCompra' element={<CardView/>}/>
            <Route path='/PaginaCard' element={<PaginaCard/>}/>
            <Route path='/Mapa' element={<MapView/>}/>
            <Route path='/config' element={<ConfigDash/>}/>

        </Routes>
    )
}
