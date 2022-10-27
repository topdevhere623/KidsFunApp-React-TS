//import React from 'react'
import type { FC } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
	Box,
	Card,
	CardContent,
	//Chip,
	Container,
	Divider,
	Link,
	//Tooltip,
	Typography,
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import type { Theme } from 'src/theme'
import Page from 'src/components/Page'
import Logo from 'src/components/Logo'
import useAuth from 'src/hooks/useAuth'

import FirebaseAuthLogin from './FirebaseAuthLogin'

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		backgroundColor: theme.palette.background.default,
		display: 'flex',
		flexDirection: 'column',
		minHeight: '100vh',
	},
	banner: {
		backgroundColor: theme.palette.background.paper,
		paddingBottom: theme.spacing(1),
		paddingTop: theme.spacing(1),
		borderBottom: `1px solid ${theme.palette.divider}`,
	},
	bannerChip: {
		marginRight: theme.spacing(2),
	},
	methodIcon: {
		height: 30,
		marginLeft: theme.spacing(2),
		marginRight: theme.spacing(2),
	},
	cardContainer: {
		paddingBottom: 80,
		paddingTop: 80,
	},
	cardContent: {
		padding: theme.spacing(4),
		display: 'flex',
		flexDirection: 'column',
		minHeight: 400,
	},
	currentMethodIcon: {
		height: 40,
		'& > img': {
			width: 'auto',
			maxHeight: '100%',
		},
	},
	logo: {
		paddingRight: '10px',
	},
}))

const LoginView: FC = () => {
	const classes = useStyles()
	const { method } = useAuth() as any

	return (
		<Page className={classes.root} title='Login'>
			<div className={classes.banner}>
				<Container maxWidth='md'>
					<Box alignItems='center' display='flex' justifyContent='center'>
						{/* 						<Chip
							color='secondary'
							label='NEW'
							size='small'
							className={classes.bannerChip}
						/> */}
						<Box alignItems='center' display='flex'>
							<RouterLink to='/' className={classes.logo}>
								<Logo />
							</RouterLink>
							<Typography color='textPrimary' variant='h5'>
								<Link component={RouterLink} to='/'>
									www.kidsfuncloud.com
								</Link>{' '}
							</Typography>
						</Box>
					</Box>
				</Container>
			</div>
			<Container className={classes.cardContainer} maxWidth='sm'>
				<Card>
					<CardContent className={classes.cardContent}>
						<Box
							alignItems='center'
							display='flex'
							justifyContent='space-between'
							mb={3}
						>
							<div>
								<Typography color='textPrimary' gutterBottom variant='h2'>
									Sign In
								</Typography>
								<Typography variant='body2' color='textSecondary'>
									Sign in to join the communities.
								</Typography>
							</div>
							{/* 							<div className={classes.currentMethodIcon}>
								<img alt='Auth method' src={'/static/logo.svg'} />
							</div> */}
						</Box>
						<Box flexGrow={1} mt={3}>
							{method === 'FirebaseAuth' && <FirebaseAuthLogin />}
							{/* {method === 'JWT' && <JWTLogin />} */}
							<Link
								component={RouterLink}
								to='/passwordreset'
								variant='body2'
								color='textSecondary'
								style={{
									textDecoration: 'underline',
									textTransform: 'capitalize',
								}}
							>
								I forgot my password.
							</Link>
						</Box>
						<Box my={3}>
							<Divider />
						</Box>
						<Link
							component={RouterLink}
							to='/register'
							variant='body2'
							color='textSecondary'
							style={{
								textDecoration: 'underline',
								textTransform: 'capitalize',
							}}
						>
							Create new account
						</Link>
					</CardContent>
				</Card>
			</Container>
		</Page>
	)
}

export default LoginView