/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import AppShell from '../modules/common/AppShell'
import { Container, Typography, Grid } from '@material-ui/core'
import React from 'react'
import { TextConstants } from '../modules/common/TextConstants'
import useSWR from 'swr'
import { fetcher } from '../client/HttpActions'
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function Index() {
    const { data } = useSWR(
        () => 'http://localhost:3003/dev/get-post',
        async (url) => {
            const user = await fetcher('http://localhost:3003/dev/get-post')
            console.log(user)
            return user
        }
    )
    console.log(data)
    return (
        <AppShell>
            <Container maxWidth="lg" style={{ marginTop: '40px' }}>
                <Typography variant="h3" color="textPrimary" align="center">
                    {TextConstants.Title}
                </Typography>
                <Typography
                    variant="h5"
                    color="textSecondary"
                    align="center"
                    style={{ marginTop: '20px', marginBottom: '30px' }}
                >
                    Welcome to Health-O-Coin
                </Typography>
            </Container>
            <Container style={{display: 'flex' , alignSelf: 'left'}}>
                <Typography
                    variant="h5"
                    color="textSecondary"
                    align="left"
                    style={{ marginTop: '20px', marginBottom: '30px', marginRight: '50px' }}
                >
                    Name
                </Typography>
                <Typography
                    variant="h5"
                    color="textSecondary"
                    align="left"
                    style={{ marginTop: '20px', marginBottom: '30px', marginLeft: '170px' }}
                >
                    Subham Kundu
                </Typography>
            </Container>
            <Container style={{display: 'flex' , flexDirection: 'row'}}>
                <Typography
                    variant="h5"
                    color="textSecondary"
                    align="left"
                    style={{ marginTop: '20px', marginBottom: '30px', marginRight: '50px' }}
                >
                    Company Name
                </Typography>
                <Typography
                    variant="h5"
                    color="textSecondary"
                    align="left"
                    style={{ marginTop: '20px', marginBottom: '30px', marginLeft: '60px' }}
                >
                    Caravel Labs
                </Typography>
            </Container>
            <Container style={{display: 'flex' , flexDirection: 'row'}}>
                <Typography
                    variant="h5"
                    color="textSecondary"
                    align="left"
                    style={{ marginTop: '20px', marginBottom: '30px', marginRight: '30px' }}
                >
                    Most Preferred Exercise
                </Typography>
                <Typography
                    variant="h5"
                    color="textSecondary"
                    align="left"
                    style={{ marginTop: '20px', marginBottom: '30px' }}
                >
                    Yoga, Jogging
                </Typography>
            </Container>
            <Container style={{display: 'flex' , flexDirection: 'row'}}>
                <Typography
                    variant="h5"
                    color="textSecondary"
                    align="left"
                    style={{ marginTop: '20px', marginBottom: '30px', marginRight: '80px' }}
                >
                    Connected Devices
                </Typography>
                <Typography
                    variant="h5"
                    color="textSecondary"
                    align="left"
                    style={{ marginTop: '20px', marginBottom: '30px' }}
                >
                    Samsung Health devices
                </Typography>
            </Container>
        </AppShell>
    )
}

export default Index
