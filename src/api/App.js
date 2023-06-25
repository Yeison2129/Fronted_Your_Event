import axios from 'axios'

let token = localStorage.getItem("token")
let token_company = localStorage.getItem("token_company")
let email = localStorage.getItem("email")
let id_user = localStorage.getItem("id_user")
let id_user1 = localStorage.getItem("id_user")
let id_empresa = localStorage.getItem("id_empresa")
let id_empresa1 = localStorage.getItem("id_empresa")
let id_event1 = localStorage.getItem("id_event")
let id_event = localStorage.getItem("id_event")
let url = 'http://localhost:4000'
//Users
export const registerUser = async (newUser) =>
    await axios.post(`${url}/registerUser`, newUser)


export const CountUser = async () => {
    return await axios.get(`${url}/CountUsers`)
}

export const getUser = async () =>
    await axios.get(`${url}/getUser/${id_user}`)

export const loginUser = async (loginUser) =>
    await axios.post(`${url}/loginUser`, loginUser)


export const update = async (update) =>
    await axios.put(`${url}/update/${email}`, update, {
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
        const response = await axios.put(`${url}/updateUser/${id_user}`, formData, {
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
    await axios.delete(`${url}/DeleteUser/${id_user}/${id_user1}`, DeleteUser, {
        headers: {
            token: token
        }
    })

//Recuperation_Password_User
export const CompareEmailUser = async (emailsUser) => {
    return await axios.post(`${url}/emailsUser`, emailsUser)

}

export const CompareCodeUser = async (codigoUser, email1) =>
    await axios.post(`${url}/codigoUser/${email1}`, codigoUser)

export const RecuperationPasswordUser = async (recuperationUser, email1) =>
    await axios.put(`${url}/recuperationUser/${email1}`, recuperationUser)




//Enterprise

export const CountCompany = async () => {
    return await axios.get(`${url}/CountCompany`)
}

export const loginCompany = async (loginCompany) =>
    await axios.post(`${url}/loginCompany`, loginCompany)

    export const registerCompany = async (newCompany) =>
    await axios.post(`${url}/registerCompany`, newCompany)

export const updateCompany = async (updateCompany) => {
    const formData = new FormData();
    formData.append('nom_empresa', updateCompany.nom_empresa);
    formData.append('mail_empresa', updateCompany.mail_empresa)
    formData.append('telefono_empresa', updateCompany.telefono_empresa);
    formData.append('password_empresa', updateCompany.password_empresa);
    formData.append('image', updateCompany.img_empresa);
    try {
        const response = await axios.put(`${url}/updateCompany/${id_empresa}`, formData, {
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
    await axios.get(`${url}/getCompany/${id_empresa}`)


export const deleteCompany = async () =>
    await axios.delete(`${url}/deleteCompany/${id_empresa}`, {
        headers: {
            token_company: token_company
        }
    })

export const updatePassEmpresa = async (updatePass) =>
    await axios.put(`${url}/updatePass/${id_empresa}`, updatePass, {
        headers: {
            token_company: token_company
        }
    })

    export const AsistEventCompany = async (id) =>
    await axios.get(`${url}/AsistEventCompany/${id}`, {
        headers: {
            token_company: token_company
        }
    })


//Events

export const SelectImg = async () => {
    return await axios.get(`${url}/getImg/${id_event}`)
}
console.log(id_event);
export const EventsRandom = async ()=>{
  return await axios.get(`${url}/getEventsRandom`)
} 
export const CountEvents = async () => {
    return await axios.get(`${url}/CountEvents`)
}

export const CountEventsCompany = async () => {
    return await axios.get(`${url}/CountEventsCompany/${id_empresa}`)
}

export const createEvent = async (registerEvent) => {
    const formData = new FormData();
    formData.append('nom_event', registerEvent.nom_event)
    formData.append('phone_event',registerEvent.phone_event)
    formData.append('image', registerEvent.img_event)
    formData.append('tipo_event', registerEvent.tipo_event)
    formData.append('description_event', registerEvent.description_event)
    formData.append('fecha', registerEvent.fecha)
    formData.append('hora', registerEvent.hora)
    formData.append('municipio', registerEvent.municipio)
    formData.append('direccion', registerEvent.direccion)
    formData.append('precio_entrada', registerEvent.precio_entrada)
    formData.append('aforo',registerEvent.aforo)
    const events = await axios.post(`${url}/registerEvent/${id_empresa1}`, formData, {
        headers: {
            token_company: token_company,
            'Content-Type': 'multipart/form-data'
        }
    });
    return events.data

}


export const insertImg = async (InsertImg,id) => {
    const formData = new FormData();
    formData.append('image',InsertImg.img)
    const events = await axios.post(`${url}/InsertImg/${id}`, formData, {
        headers: {
            token_company: token_company,
            'Content-Type': 'multipart/form-data'
        }
    });
    return events.data
}


export const updateEvent = async (updateEvent,id) => {
    const formData = new FormData();
    formData.append('nom_event', updateEvent.nom_event);
    formData.append('phone_event',updateEvent.phone_event)
    formData.append('image', updateEvent.img_event)
    formData.append('tipo_event', updateEvent.tipo_event);
    formData.append('description_event', updateEvent.description_event);
    formData.append('fecha', updateEvent.fecha);
    formData.append('hora', updateEvent.hora);
    formData.append('municipio', updateEvent.municipio);
    formData.append('direccion', updateEvent.direccion);
    formData.append('precio_entrada', updateEvent.precio_entrada);
    formData.append('aforo',updateEvent.aforo)
    try {
        const response = await axios.put(`${url}/updateEvent/${id}`, formData, {
            headers: {
                token_company: token_company,
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data
    } catch (error) {

    }

}


export const getEventsRandom = async () =>
    await axios.get(`${url}/getEventsRandom`)

export const deleteEvents = async (id) =>
    await axios.delete(`${url}/deleteEvent/${id}`, {
        headers: {
            token_company: token_company
        }
    })

export const DeleteEventsCompany = async () =>
    await axios.delete(`${url}/deleteEventsCompany/${id_empresa1}`, {
        headers: {
            token_company: token_company
        }
    })


export const getEvents = async () =>
    await axios.get(`${url}/getEvents`)

export const getEventsCompany = async () =>
    await axios.get(`${url}/getEventsCompany/${id_empresa}`, {
        headers: {
            token_company: token_company
        }
    })

export const deleteAdminAsist = async (id) =>
    await axios.delete(`${url}/DeleteEventAdmin/${id}`, {
        headers: {
            token: token
        }
    })

export const getEventsIdEvent = async (values) =>
    await axios.post(`${url}/consultEvent`, values, {
        headers: {
            token: token
        }
    })

//ASISTS 

export const asistEvents = async (id_event1, asistEvent) =>
    await axios.post(`${url}/asistEvent/${id_user1}/${id_event1}`, asistEvent, {
        headers: {
            token: token
        }
    })

    export const AsistEventsCompany = async (id_event, asistEvent) =>
    await axios.post(`${url}/AsistEventCompany/${id_event}`, asistEvent, {
        headers: {
            token_company: token_company
        }
    })

export const consultAsist = async () =>
    await axios.get(`${url}/ConsultAsistEvent/${id_user1}`, {
        headers: {
            token: token
        }
    })

export const DeleteAsist = async (id) =>
    await axios.delete(`${url}/DeleteAsist/${id_user1}/${id}`, {
        headers: {
            token: token
        }
    })