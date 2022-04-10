import React from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Container, Typography } from '@material-ui/core'
import AppShell from '../modules/common/AppShell'

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}))

export default function Todo(): JSX.Element {
    const classes = useStyles()

    return (
        <AppShell>
            <Container maxWidth="lg" style={{ marginTop: '40px' }}>
                <Typography variant="h3" color="textPrimary" align="center">
                    Advice
                </Typography>
                <Typography
                    variant="h4"
                    color="textSecondary"
                    align="center"
                    style={{ marginTop: '20px', marginBottom: '30px' }}
                >
                    Keep your posture correct
                </Typography>
            </Container>
        </AppShell>
    )
}
