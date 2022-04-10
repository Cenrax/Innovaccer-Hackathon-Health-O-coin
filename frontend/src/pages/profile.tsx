import { Container, Typography } from '@material-ui/core'
import AppShell from '../modules/common/AppShell'
import { TextConstants } from '../modules/common/TextConstants'

export default function profile(): JSX.Element {
    return (
        <AppShell>
            <Container maxWidth="lg" style={{ marginTop: '40px' }}>
                <Typography variant="h3" color="textPrimary" align="center">
                    Your Current Balance
                </Typography>
                <Typography
                    variant="h4"
                    color="textSecondary"
                    align="center"
                    style={{ marginTop: '20px', marginBottom: '30px' }}
                >
                    70000 hp
                </Typography>
            </Container>
            <Container style={{display: 'flex' , alignSelf: 'left'}}>
                <Typography
                    variant="h5"
                    color="textSecondary"
                    align="left"
                    style={{ marginTop: '20px', marginBottom: '30px', marginRight: '50px' }}
                >
                    Next Installment Date
                </Typography>
                <Typography
                    variant="h5"
                    color="secondary"
                    align="left"
                    style={{ marginTop: '20px', marginBottom: '30px', marginLeft: '70px', fontWeight: 'bold' }}
                >
                    May
                </Typography>
            </Container>
        </AppShell>
    )
}
