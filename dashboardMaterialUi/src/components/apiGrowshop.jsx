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

function Growshop(props) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        console.log('se monto')
        fetch('http://localhost:3001/allproducts')
        .then(response => response.json())
        .then(data => {
            setProducts(data.products)
            props.setproductCount(data.products.length)
            console.log(data, data.results)
            console.log(products)
        })
        .catch(error => console.error(error));
    }, [])

    useEffect(()=> {
        console.log(products);
    }, [products])
    
    return (
        <TableContainer>
            <Table>
            <TableHead>
            <TableRow>
               <StyledTableCell>Producto</StyledTableCell> 
               <StyledTableCell> Categoria </StyledTableCell>
               <StyledTableCell> Precio </StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
                {products.map(elemento=>(
                    <TableRow key={elemento.id}>
                        <TableCell>{elemento.nombre}</TableCell>
                         <TableCell align="center">{elemento.categoria}</TableCell>
                        <TableCell align="center">{elemento.precio}</TableCell> 
                    </TableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer>
    );
   
    // return (
    //     <div>
    //         <h2> Growshop Productos</h2>
    //         <ul>
    //       { products.map((products, i) => {
    //         return (
                
    //                 <li key={i}>
    //                     <h3>{products.nombre}</h3>
                        
    //                 </li>
                    
                
    //         )
    //       })}
    //         </ul>
    //     </div>
    // )
}

export default Growshop