import axios from 'axios'

let token = localStorage.getItem("token")
let email = localStorage.getItem("email")
let id = localStorage.getItem("id") 

//Users
export const registerUser = async (newUser) =>
    await axios.post('http://localhost:4000/registerUser', newUser)

export const loginUser = async (loginUser)=>
    await axios.post('http://localhost:4000/loginUser',loginUser)
    

export const update = async(update)=>
    await axios.put(`http://localhost:4000/update/${email}`, update, {
        headers : {
            token : token
        }
    })    

 //Recuperation_Password_User
export const CompareEmailUser = async (emailsUser) => {
    return await axios.post("http://localhost:4000/emailsUser", emailsUser)
    
}

export const CompareCodeUser = async(codigoUser, email1)=>
    await axios.post(`http://localhost:4000/codigoUser/${email1}`,codigoUser)

export const RecuperationPasswordUser = async(recuperationUser,email1)=>
    await axios.put(`http://localhost:4000/recuperationUser/${email1}`,recuperationUser)




//Enterprise


export const loginCompany = async (loginCompany)=>
    await axios.post('http://localhost:4000/loginCompany',loginCompany)

export const registerCompany = async (RegisterCompany)=>
    await axios.post('http://localhost:4000/RegisterCompany',RegisterCompany)


export const create_event = async(crudEventos)=> 
    await axios.post(`http://localhost:4000/registerEvent/${id}`, crudEventos, {
        headers : {
            token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtYWlsIjoieWVpc29uZGF2aWRjYXN0aWJsYW5jbzExQGdtYWlsLmNvbSIsImlhdCI6MTY4MjEzNDMyMCwiZXhwIjoxNjgyMjIwNzIwfQ.rxhyl4SuHu9Cc2oK0sje4NnxUGAiosqKA-Eg1rLHgVU"
        }
    })





//Admin
export const getEvents = async () => 
    await axios.get(`http://localhost:4000/getEvents`, {
        headers : {
            token : token
        }
})

export const deleteAdminAsist = async (id) => 
    await axios.delete(`http://localhost:4000/DeleteEventAdmin/${id}`, {
        headers : {
            token : token
        }
    })

