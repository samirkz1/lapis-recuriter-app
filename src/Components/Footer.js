import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box
            sx={{
                backgroundColor: 'grey.200',
                py: 2,
                px: 3,
                position: 'fixed',
                bottom: 0,
                width: '100%',
            }}
        >
            <Typography variant="body2" color="textSecondary" align="center">
                © 2023 Company Name Inc. All rights reserved.
                <br />
                Address: 123 Main St, Anytown, USA 12345 | Phone: (123) 456-7890 | Email: info@companyname.com
            </Typography>
        </Box>
    );
};

export default Footer;
