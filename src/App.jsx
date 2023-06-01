import {Route, Routes} from "react-router-dom"
import {Inicio_Sesion} from './components/InicioSesion/F_Inicio_Sesion'
import { F_registro } from './components/Registro/F_registro'
import { Password } from './components/Configuracion/Editar/Password'
import { Index } from "./components/Index/Index"
import { RegistroEmpresa } from "./components/Registro-empresa/RegistroEmpresa"
import { Dashboard } from "./components/dashboard_empresa/Dashboard_Empresa"
import { CardPassword } from "./components/RecuperacionContrasena/CardPassword/CardPassword"
import {DropDown} from './components/DropDown/DropDown';
import { CardEvento } from "./components/Card_evento/Card_evento"
import { Card_evento_admin } from "./components/Card_evento/Card_evento_admin"
import { LoginEmpresa  } from  "./components/Login-Empresa/loginEmpresa"
import { Card_crud  } from  "./components/Card_crud/card_evento_empresa/Card"
import {  Homedash } from  "./components/Home/HomeDash" 
import { Cards } from "./components/Card_Categorias/Cards"
import Stats from "./components/Estadisticas/stats.jsx"
import {CardView} from "./components/CardView/Card-view.jsx"
import { PaginaCard } from "./components/PaginaCard/PaginaCard"
import MapView from "./components/Mapa/MapView"
import { Dashc } from './components/Configuracion/Dashconfig/Dashc'
import { Editinfo } from "./components/Configuracion/Editinfo/Editinf"
import  {SobreNosotros} from "./components/SobreNosotros/SobreNosotros.jsx"
import { DeleteAcc } from "./components/Configuracion/DeleteA/DeleteAcc"
import Crud_eventos from "./components/CRUD_eventos/Crud_eventos"
import {Asistir} from "./components/Index/Asistir/Asistir"

export default function App() {
    return (
        <Routes>
            <Route path='/' element={<Index/>} />
            <Route path='/login' element={<Inicio_Sesion/>} />
            <Route element={<F_registro/>} path='/registro'/>
            <Route path='/password' element={<Password/>}/>
            <Route path='/RegistroEmpresa' element={<RegistroEmpresa/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/CardPassword' element={<CardPassword/>}/>
            <Route path='/drop' element={<DropDown/>}/>
            <Route path='/cardEvento' element={<CardEvento/>}/>
            <Route path='/cardCrud' element={<Card_crud/>}/>
            <Route path='/cardEventoAdmin' element={<Card_evento_admin/>}/>
            <Route path="/crud_eventos" element={<Crud_eventos/>}/>
            <Route path='/loginEmpresa' element={<LoginEmpresa/>}/>
            <Route path='/home' element={<Homedash/>}/>
            <Route path='/home' element={<Cards/>}/>
            <Route path='/Estadisticas' element={<Stats/>}/>
            <Route path='/CardCompra' element={<CardView/>}/>
            <Route path='/PaginaCard' element={<PaginaCard/>}/>
            <Route path='/Mapa' element={<MapView/>}/>
            <Route path='/dashconfig' element={<Dashc/>}/>
            <Route path='/DeleteAccount' element={<DeleteAcc/>}/>
            <Route path='/editap' element={<Editinfo/>}/>
            <Route path='/SobreNosotros' element={<SobreNosotros/>}/>
            <Route path='/asistir' element={<Asistir/>}/>

        </Routes>
    )
}
