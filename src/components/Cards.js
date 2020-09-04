import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import CardContent from '@material-ui/core/CardContent'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'


const cards = [1,2,3,4,5,6];
export default function Cards({classes}){
    return(
        <Container className={classes.cardGrid} maxWidth="md">
            <Typography>
                Ultimas actualizaciones
            </Typography>
            <Grid container spacing={4}>
            {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.cardMedia}
                            image="https://images.adsttc.com/media/images/5d34/e507/284d/d109/5600/0240/newsletter/_FI.jpg?1563747560"
                            title="Casa en venta"
                        />
                        <CardContent className={classes.cardContent}>
                            <Typography gutterBottom variant="h5" component="h2" align="left">
                                Casa en venta
                            </Typography>
                            <Typography align="left" gutterBottom>
                                Barrio malvinas, Esquel, Chubut
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
            </Grid>
        </Container>
    );
}