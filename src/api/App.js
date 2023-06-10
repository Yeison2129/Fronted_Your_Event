import axios from 'axios'

let token = localStorage.getItem("token")
let token_company = localStorage.getItem("token_company")
let email = localStorage.getItem("email")
let id_user = localStorage.getItem("id_user")
let id_empresa = localStorage.getItem("id_empresa")
let id_empresa1 = localStorage.getItem("id_empresa")
let id_event = localStorage.getItem("id_event")

//Users
export const registerUser = async (newUser) =>
    await axios.post('http://localhost:4000/registerUser', newUser)

export const getUser = async () =>
    await axios.get(`http://localhost:4000/getUser/${id_user}`)

export const loginUser = async (loginUser) =>
    await axios.post('http://localhost:4000/loginUser', loginUser)


export const update = async (update) =>
    await axios.put(`http://localhost:4000/update/${email}`, update, {
        headers: {
            token: token
        }
    })

export const updateUser = async (updateUser) => {
    const formData = new FormData();
    formData.append('document_user', updateUser.document_user);
    formData.append('nom_user', updateUser.nom_user);
    formData.append('phone_user', updateUser.phone_user);
    formData.append('mail_user', updateUser.mail_user)
    formData.append('password_empresa', updateUser.password_user);
    formData.append('image', updateUser.img_perfil);
    try {
        const response = await axios.put(`http://localhost:4000/updateUser/${email}`, formData, {
            headers: {
                token: token,
                'Content-Type': 'multipart/form-data',
            }
        });
        return response.data
    } catch (error) {

    }

}


export const deleteUser = async (DeleteUser) =>
    await axios.delete(`http://localhost:4000/DeleteUser/${email}`, DeleteUser, {
        headers:{
            token:token
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
export const loginCompany = async (loginCompany) =>
    await axios.post('http://localhost:4000/loginCompany', loginCompany)

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

export const updateCompany = async (updateCompany) => {
    const formData = new FormData();
    formData.append('nom_empresa', updateCompany.nom_empresa);
    formData.append('mail_empresa', updateCompany.mail_empresa)
    formData.append('telefono_empresa', updateCompany.telefono_empresa);
    formData.append('password_empresa', updateCompany.password_empresa);
    formData.append('image', updateCompany.img_empresa);
    try {
        const response = await axios.put(`http://localhost:4000/updateCompany/${id_empresa}`, formData, {
            headers: {
                token_company: token_company,
                'Content-Type': 'multipart/form-data',
            }
        });
        return response.data
    } catch (error) {

    }

}


export const getCompany = async () =>
    await axios.get(`http://localhost:4000/getCompany/${id_empresa}`)








//Events

export const createEvent = async (registerEvent) => {
    const formData = new FormData();
    formData.append('nom_event', registerEvent.nom_event)
    formData.append('image', registerEvent.img_event)
    formData.append('tipo_event', registerEvent.tipo_event)
    formData.append('description_event', registerEvent.description_event)
    formData.append('fecha', registerEvent.fecha)
    formData.append('hora', registerEvent.hora)
    formData.append('municipio', registerEvent.municipio)
    formData.append('direccion', registerEvent.direccion)
    formData.append('precio_entrada', registerEvent.precio_entrada)
    const events = await axios.post(`http://localhost:4000/registerEvent/${id_empresa1}`, formData, {
        headers: {
            token_company: token_company,
            'Content-Type': 'multipart/form-data'
        }
    });
    return events.data

}


export const updateEvent = async (updateEvent) => {
    const formData = new FormData();
    formData.append('nom_event', updateEvent.nom_event);
    formData.append('image', updateEvent.img_event)
    formData.append('tipo_event', updateEvent.tipo_event);
    formData.append('description_event', updateEvent.description_event);
    formData.append('fecha', updateEvent.fecha);
    formData.append('hora', updateEvent.hora);
    formData.append('municipio', updateEvent.municipio);
    formData.append('direccion', updateEvent.direccion);
    formData.append('precio_entrada', updateEvent.precio_entrada);
    try {
        const response = await axios.put(`http://localhost:4000/updateEvent/${id_event}`, formData, {
            headers: {
                token_company: token_company,
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data
    } catch (error) {

    }

}

export const deleteEvents = async (id) =>
    await axios.delete(`http://localhost:4000/deleteEvent/${id}`, {
        headers: {
            token_company: token_company
        }
    })

export const getEvents = async () =>
    await axios.get(`http://localhost:4000/getEvents`)

export const getEventsCompany = async () =>
    await axios.get(`http://localhost:4000/getEventsCompany/${id_empresa}`, {
        headers: {
            token_company: token_company
        }
    })

export const deleteAdminAsist = async (id) =>
    await axios.delete(`http://localhost:4000/DeleteEventAdmin/${id}`, {
        headers: {
            token: token
        }
    })

export const getEventsIdEvent = async (values) =>
    await axios.post(`http://localhost:4000/consultEvent`, values, {
        headers: {
            token: token
        }
    })

