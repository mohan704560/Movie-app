import React, { Component } from 'react'
import Header from '../../common/header/Header'
import "./Home.css"
import Grid from '@mui/material/Grid';
import moviesData from "../../common/moviesData";
import { Container, Stack } from '@mui/system';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <p id="title">Upcoming Movies</p>
                <div id="container">
                    <div>
                    {
                        moviesData.map(data => {
                            return (
                                    <div className='movie-container'>
                                        <img src={data.poster_url} alt={data.title} width="100%" height="250px" />
                                        <p id="movie-title">{data.title}</p>
                                    </div>
                        )})}
                    </div>
                </div>
            </div>
        )
    }
}

export default Home