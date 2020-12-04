import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';


function Footer() {
    return (
        <>
            <Typography variant="h6" align="center" gutterBottom>
                Footer
             </Typography>
            <Typography variant="body2" color="textSecondary">
                {'Copyright '}&copy;
            {' '}
                <Link color="inherit" href="http://192.168.1.109:3000">
                    InmobilAr
            </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </>
    );
}

export default Footer;