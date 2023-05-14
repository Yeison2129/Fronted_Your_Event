import axios from 'axios'

let token = localStorage.getItem("token")
let email = localStorage.getItem("email")
let id = localStorage.getItem("id") 


export const registerUser = async (newUser) =>
    await axios.post('http://localhost:4000/registerUser', newUser)

export const loginUser = async (loginUser)=>
    await axios.post('http://localhost:4000/loginUser',loginUser)

export const loginCompany = async (company)=>
    await axios.post('http://localhost:4000/loginCompany',company)    

export const update = async(update)=>
    await axios.put(`http://localhost:4000/update/${email}`, update, {
        headers : {
            token : token
        }
    })    

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
    
export const events = async () => 
    await axios.get('http://localhost:4000/events')