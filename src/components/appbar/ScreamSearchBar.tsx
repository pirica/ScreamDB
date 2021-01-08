import React, {useState} from "react";
import {createStyles, Divider, IconButton, InputBase, makeStyles, Paper} from "@material-ui/core";
import {ArrowForward, Clear, Search} from "@material-ui/icons";
import {useLocale} from "../../hooks/locale";
import {useHistory} from "react-router-dom"
import {path} from "../../util/paths";
import {useKeywords} from "../../context/keywords";

const useStyles = makeStyles(({breakpoints, spacing}) =>
	createStyles({
		root: {
			padding: '2px 4px',
			display: 'flex',
			alignItems: 'center',
			background: 'rgb(0,0,0,0.2)',
			boxShadow: 'none',
			width: '100%',
			maxWidth: spacing(50),
			[breakpoints.down('xs')]: {
				maxWidth: '100%'
			}
		},
		input: {
			marginLeft: spacing(1),
			flex: 1,
		},
		iconButton: {
			padding: spacing(1),
		},
		divider: {
			height: 28,
			margin: 4,
		},
	}),
);

export function ScreamSearchBar() {
	const classes = useStyles()
	const [searchQuery, setSearchQuery] = useState('')
	const {locale} = useLocale()
	const history = useHistory()
	const {setKeywords} = useKeywords()

	function onSearch() {
		if (history.location.pathname !== path.to.games)
			history.push(path.to.games)
		setKeywords(searchQuery)
	}

	return (
		<Paper component="form" className={classes.root}>
			<Search className={classes.iconButton} fontSize={'inherit'} style={{fontSize: '2.5rem'}}/>
			<InputBase
				className={classes.input}
				value={searchQuery}
				onChange={event => setSearchQuery(event.target.value)}
				placeholder={locale.search_games}
				onKeyPress={event => {
					if (event.key === 'Enter') {
						onSearch()
						event.preventDefault()
					}
				}}
			/>
			<IconButton className={classes.iconButton}
			            onClick={() => setSearchQuery('')}
			            disabled={searchQuery.length === 0}
			>
				<Clear/>
			</IconButton>
			<Divider className={classes.divider} orientation="vertical"/>
			<IconButton className={classes.iconButton} onClick={onSearch}>
				<ArrowForward/>
			</IconButton>
		</Paper>
	)
}
