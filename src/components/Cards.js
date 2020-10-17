import React from 'react'
import {
    Container,
    Grid,
    CardContent,
    Card,
    CardMedia,
    Typography,
    Button,
    CardActions
} from '@material-ui/core'
import {
    Room,
    AirlineSeatIndividualSuite,
} from '@material-ui/icons'
import whatsappLogo from '../assets/images/whatsapp.svg'
import ReadMoreReact from 'read-more-react'

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed magna non nisl vulputate lacinia. Nulla ultrices congue nunc, a semper elit egestas quis. Phasellus finibus fermentum magna non cursus. Nam viverra vestibulum tellus, a dapibus eros lacinia in. Aliquam ex justo, commodo quis ex quis, tempor scelerisque nunc. Morbi volutpat finibus hendrerit. Vestibulum ex risus, scelerisque eu pellentesque et, pretium in enim. In maximus blandit metus ac tristique. Nam elementum sapien a leo facilisis euismod et sit amet neque. Maecenas et sapien tortor. Vestibulum vitae leo nunc. Phasellus gravida cursus iaculis. Aliquam nec lobortis eros.";
const cards = [1, 2, 3, 4, 5, 6];
const cardsInfo = {
    rooms: 1,
    bathrooms: 1,
    price: 4000
};
export default function Cards({ classes }) {
    return (
        <Container className={classes.cardGrid} maxWidth="md">
            <Typography align="center" variant="body1" gutterBottom>
                Últimos inmuebles cargados
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
                                <Typography variant="h5" component="h2" align="left" gutterBottom>
                                    Casa en venta
                                </Typography>
                                <Typography variant="body1" align="left" gutterBottom>
                                    <Room color="secondary" fontSize="small" />
                                    Barrio malvinas, Esquel, Chubut
                                </Typography>
                                <Typography variant="body1" color="textSecondary" align="left">
                                    <ReadMoreReact
                                        readMoreText={false}
                                        text={text}
                                    />
                                </Typography>
                                {cardsInfo.rooms > 0 ? (
                                    <>
                                        <div className={classes.info}>
                                            <div className={classes.infoIcon}>
                                                <AirlineSeatIndividualSuite color="secondary" />
                                            </div>
                                            <div className={classes.infoText}>
                                                <li className={classes.li}>
                                                    <Typography variant="body1">
                                                        {cardsInfo.rooms}
                                                    </Typography>
                                                </li>
                                            </div>
                                        </div>

                                    </>
                                ) : (null)
                                }
                                <div className={classes.heroButtons}>
                                    <Typography variant="h5" align="left">
                                        ${cardsInfo.price}
                                    </Typography>
                                </div>
                            </CardContent>
                            <CardActions>
                                <div className={classes.button}>
                                        <Button className={classes.buttonWhatsapp}>
                                            <img src={whatsappLogo} alt="whatsapp-logo" />
                                        Consultar
                                        </Button>
                                    <Button fullWidth color="primary" variant="contained">
                                        Ver más
                                    </Button>
                                </div>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}