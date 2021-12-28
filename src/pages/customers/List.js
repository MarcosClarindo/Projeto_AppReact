import axios from "axios"
import { useHistory } from "react-router-dom"
import { useState, useEffect } from "react"
import CustomerCard from "../../components/CustomerCard"
import Grid from '@mui/material/Grid';


const List = () => {
    const history = useHistory()
    const [customers, setCustomers] = useState ([])
    useEffect (() => {
        axios.get('https://reqres.in/api/users?')
        .then (response =>{
            const { data } = response.data

            setCustomers(data)
        })
    }, [])

    const handleRemoveCustomer = id  => {
        axios.delete(`https://reqres.in/api/users/${id}`)
        .then(() =>{

            // Excluindo o usuário 
            const newCustomersState = customers.filter(customer => customer.id !== id)

            setCustomers(newCustomersState)
        })
    }

    const handleEditCustomer = id => {
        history.push(`/customers/edit/${id}`)
    }

    return (
            <Grid container rowSpacing={2}>
                {
                    customers.map (item =>(
                        <Grid item xs={12} md={4}>
                            <CustomerCard 
                                id = {item.id}
                                name= {item.first_name}
                                lastname= {item.last_name}
                                email= {item.email}
                                avatar = {item.avatar}
                                onRemoveCustomer={handleRemoveCustomer}
                                onEditCustomer={handleEditCustomer}
                            />
                        </Grid>
                    ))   
                }
            </Grid>
    )
}

export default List