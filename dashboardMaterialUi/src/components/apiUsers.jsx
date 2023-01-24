import React,{ useState, useEffect } from 'react'
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';

const StyledTableCell= withStyles(()=>({
    head:{
        color: 'white',
        background: 'black',
        textAlign: 'center'
    },
   body:{
        fontSize: 14,
    },
    }))(TableCell);

function Users(props) {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        console.log('se monto')
        fetch('http://localhost:3001/Users')
        .then(response => response.json())
        .then(data => {
            setUsers(data.users)
            props.setUserCount(data.users.length)
            console.log(data, data.results)
            console.log(users)
        })
        .catch(error => console.error(error));
    }, [])

    useEffect(()=> {
        console.log(users);
    }, [users])
       
    return (
        <TableContainer>
            <Table>
            <TableHead>
            <TableRow>
               <StyledTableCell> Usuario </StyledTableCell> 
               <StyledTableCell> Apellido </StyledTableCell>
               <StyledTableCell> Email </StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
                {users.map(elemento=>(
                    <TableRow key={elemento.id}>
                        <TableCell>{elemento.nombre}</TableCell>
                         <TableCell align="center">{elemento.apellido}</TableCell>
                        <TableCell align="center">{elemento.email}</TableCell> 
                    </TableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer>
    );
   
    // return (
    //     <div>
    //         <h2> Usuarios </h2>
    //         <ul>
    //       { users.map((usuarios, i) => {
    //         return (
                
    //                 <li key={i}>                        
    //                     <h3>{usuarios.count}</h3>
    //                     <h3>{usuarios.nombre}</h3>
    //                 </li>                   
                
    //         )
    //       })}
    //         </ul>
    //     </div>
    // )
}

export default Users