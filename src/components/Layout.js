import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import AwesomeSlider from 'react-awesome-slider';
import withAutoPlay from 'react-awesome-slider/dist/autoplay'
import 'react-awesome-slider/dist/styles.css';
import { Card } from '@material-ui/core';



export default function Layout({ classes }) {

    const AutoplaySlider = withAutoPlay(AwesomeSlider);

    const slider = [1, 2, 3, 4, 5];

    return (
        <>
        <div className="slider">
            <AutoplaySlider
                play={true}
                bullets={false}
                interval={3000}
                cancelOnInteraction={false}
            >
                {slider.map((slider) => (
                    <div key={slider} data-src="https://images.adsttc.com/media/images/5d34/e507/284d/d109/5600/0240/newsletter/_FI.jpg?1563747560" />
                ))}
            </AutoplaySlider>
        </div>
            <Container className={classes.container} maxWidth="md">
                <Typography>
                    Hello World
                </Typography>
                <div className={classes.heroButtons}>
                    <Grid container spacing={1} justify="center">
                        <Grid item> 
                            <Button variant="contained" color="primary">
                                Quiero Alquilar
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="outlined" color="primary">
                                Quiero Comprar
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </>
    );
}