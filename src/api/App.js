import axios from 'axios'

let token = localStorage.getItem("token")
let token_company = localStorage.getItem("token_company")
let email = localStorage.getItem("email")
let id = localStorage.getItem("id")
let id_empresa = localStorage.getItem("id_empresa")

//Users
export const registerUser = async (newUser) =>
    await axios.post('http://localhost:4000/registerUser', newUser)

export const loginUser = async (loginUser) =>
    await axios.post('http://localhost:4000/loginUser', loginUser)


export const update = async (update) =>
    await axios.put(`http://localhost:4000/update/${email}`, update, {
        headers: {
            token: token
        }
    })

//Recuperation_Password_User
export const CompareEmailUser = async (emailsUser) => {
    return await axios.post("http://localhost:4000/emailsUser", emailsUser)

}

export const CompareCodeUser = async (codigoUser, email1) =>
    await axios.post(`http://localhost:4000/codigoUser/${email1}`, codigoUser)

export const RecuperationPasswordUser = async (recuperationUser, email1) =>
    await axios.put(`http://localhost:4000/recuperationUser/${email1}`, recuperationUser)




//Enterprise


export const loginCompany = async (loginCompany)=>
    await axios.post('http://localhost:4000/loginCompany',loginCompany)

export const registerCompany = async (RegisterCompany) => {
    const formData = new FormData();
    formData.append('nom_empresa', RegisterCompany.nom_empresa);
    formData.append('mail_empresa', RegisterCompany.mail_empresa);
    formData.append('telefono_empresa', RegisterCompany.telefono_empresa);
    formData.append('password_empresa', RegisterCompany.password_empresa);
    formData.append('image', RegisterCompany.img_certificado);

    
    try {
        const response = await axios.post('http://localhost:4000/RegisterCompany', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        });

        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};


export const createEvent = async (registerEvent) =>{
    const formData= new FormData();
    formData.append('nom_event',registerEvent.nom_event)
    formData.append('image',registerEvent.img_event)
    formData.append('tipo_event',registerEvent.tipo_event)
    formData.append('description_event',registerEvent.description_event)
    formData.append('fecha',registerEvent.fecha)
    formData.append('hora',registerEvent.hora)
    formData.append('lugar_latitud',registerEvent.lugar_latitud)
    formData.append('lugar_longitud',registerEvent.lugar_longitud)
    formData.append('precio_entrada',registerEvent.precio_entrada)
    const events = await axios.post(`http://localhost:4000/registerEvent/${id_empresa}`, formData, {
        headers: {
        token_company: token_company,
        'Content-Type': 'multipart/form-data',
        }
    });
    return events.data

}
         

    





//Admin
export const getEvents = async () =>
    await axios.get(`http://localhost:4000/getEvents`)

export const deleteAdminAsist = async (id) =>
    await axios.delete(`http://localhost:4000/DeleteEventAdmin/${id}`, {
        headers: {
            token: token
        }
    })

