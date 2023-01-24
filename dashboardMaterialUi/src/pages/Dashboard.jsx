import Categories from '../components/apiCategories';
import Growshop from '../components/apiGrowshop';
import Users from '../components/apiUsers';
import React from 'react';
import {Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Navbar from "../components/Navbar";
import 'fontsource-roboto';
import '../assets/css/Dashboard.css';
import YouTubeIcon from '@material-ui/icons/YouTube';
import PublicIcon from '@material-ui/icons/Public';
import VideocamIcon from '@material-ui/icons/Videocam';
import CardsHeader from '../components/CardsHeader';
import Cards from '../components/Cards';
import Graphics from '../components/Graphics';
import TableMaterial from '../components/TableMaterial';
import { useState } from 'react';


const useStyles= makeStyles(()=>({
root:{
    flexGrow: 1
},
iconos:{
    color: 'white'
},
container:{
    paddingTop: '40px',
    alignItems: 'center'
},
containerGrafica:{
    marginTop: '40px'
},
containerTabla:{
    marginTop: '40px'
}
}));

const data = [
    {
      id:1,
      video:
        "Como Hacer un Split en React JS || React Split Pane || Tutorial en Español (2020)",
      fecha: "6 de sep. 2020",
      visualizaciones: 32,
      imagen: require("../assets/img/split.webp"),
    },
    {
      id:2,
        video:
          "Cómo Solucionar Error al Crear Applicación de React JS",
        fecha: "5 de sep. 2020",
        visualizaciones: 31,
        imagen: require("../assets/img/error.webp"),
      },
      {
      id:3,
        video:
          "Cómo Utilizar Forever en Node JS || Ejecutar Node JS en Segundo Plano || Background Node JS",
        fecha: "4 de sep. 2020",
        visualizaciones: 21,
        imagen: require("../assets/img/forever.webp"),
      },
  ];

function Dashboard(props) {
    const classes= useStyles();
    const [UserCount, setUserCount]=useState(0);
    const [ProductCount, setproductCount]=useState(0)
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>

                <Grid item xs={12}>
                    <Navbar/>
                </Grid>

                
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                   <CardsHeader titulo="CANTIDAD DE PRODUCTOS" texto={ProductCount} color="rgba(248,80,50,1)" font="white"/>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                <CardsHeader icono={<PublicIcon className={classes.iconos}/>} titulo="PAÍS" texto="Argentina" color="rgba(248,80,50,1)" font="white"/>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                <CardsHeader  titulo="CANTIDAD DE USUARIOS" texto={UserCount} color="rgba(248,80,50,1)" font="white"/>
                </Grid>

                    <Grid item xs={12} className={classes.containerTabla}>
                    <TableMaterial data={data}/>
                    <Growshop setproductCount={setproductCount}/>
                    <Categories/>
                    <Users setUserCount={setUserCount}/>
                    </Grid>


            </Grid>
        </div>
    );
}

export default Dashboard;