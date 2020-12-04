import React from 'react';
import Footer from './Footer'
import useStyles from './Styles';
import Layout from './Layout';
import Header from './Header'
import Cards from './Cards';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography'

function Home() {
    const classes = useStyles();
    return (
        <>
            <Header/>
            <main>
                <CssBaseline />
                <div className={classes.heroContent}>
                    <Layout classes={classes} />
                </div>
                <Cards classes={classes} />
            </main>

            <footer className={classes.footer}>
                <Footer />
            </footer>
        </>
    );
}

export default Home;