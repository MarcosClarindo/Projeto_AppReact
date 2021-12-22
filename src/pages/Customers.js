import axios from "axios"
import { useState, useEffect } from "react"
import CustomerCard from "../components/CustomerCard"
import Grid from '@mui/material/Grid';


const Customers = () => {
    const [customers, setCustomers] = useState ([])
    useEffect (() => {
        axios.get('https://reqres.in/api/users?')
        .then (response =>{
            const { data } = response.data

            setCustomers(data)
        })
    }, [])

    return (
            <Grid container rowSpacing={2}>
                {
                    customers.map (item =>(
                        <Grid item xs={12} md={4}>
                            <CustomerCard 
                                name= {item.first_name}
                                lastname= {item.last_name}
                                email= {item.email}
                                avatar = {item.avatar}
                            />
                        </Grid>
                    ))   
                }
            </Grid>
    )
}

export default Customers