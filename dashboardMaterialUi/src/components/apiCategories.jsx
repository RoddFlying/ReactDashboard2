import React, { useState, useEffect } from 'react'
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

function Categories() {
    const [categories, setCategories] = useState([]);
    
    useEffect(() => {
        console.log('se monto')
        fetch('http://localhost:3001/categories')
        .then(response => response.json())
        .then(data => {
            setCategories(data.categories)
            console.log(data, data.results)
            console.log(categories)
        })
        .catch(error => console.error(error));
    }, [])

    useEffect(()=> {
        console.log(categories);
    }, [categories])
     
    return (
        <TableContainer>
            <Table>
            <TableHead>
            <TableRow>
               <StyledTableCell>Categorias</StyledTableCell> 
            </TableRow>
            </TableHead>
            <TableBody>
                {categories.map(elemento=>(
                    <TableRow key={elemento.id}>
                        <TableCell>{elemento.name}</TableCell>
                         {/* <TableCell align="center">{elemento.categoria}</TableCell>
                        <TableCell align="center">{elemento.precio}</TableCell>  */}
                    </TableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer>
    );

    // return (
    //     <div>
    //         <h2> Categoria de productos </h2>
    //         <ul>
    //       { categories.map((categorias, i) => {
    //         return (
                
    //                 <li key={i}>                        
    //                     <h3>{categorias.name}</h3>
    //                     <h3>{categorias.lenght}</h3>
    //                 </li>
                    
                
    //         )
    //       })}
    //         </ul>
    //     </div>
    // )
}

export default Categories