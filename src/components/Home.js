import React from 'react';
import useStyles from './Styles';
import Slider from './Slider';
import Header from './header/Header'
import Cards from './Cards';
import CssBaseline from '@material-ui/core/CssBaseline';

function Home() {
    const classes = useStyles()

    return (
        <>
            <Header home="true" />
            <main>
                <CssBaseline />
                <div className={classes.heroContent}>
                    <Slider classes={classes} />
                </div>
                <Cards classes={classes} />
            </main>
        </>
    );
}

export default Home;