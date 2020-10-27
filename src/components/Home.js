import React from 'react';
import useStyles from './Styles';
import Layout from './Layout';
import Header from './header/Header'
import Cards from './Cards';
import CssBaseline from '@material-ui/core/CssBaseline';

function Home() {
    const classes = useStyles()
    
    return (
        <>
            <Header home="true"/>
            <main>
                <CssBaseline />
                <div className={classes.heroContent}>
                    <Layout classes={classes} />
                </div>
                <Cards classes={classes} />
            </main>
        </>
    );
}

export default Home;